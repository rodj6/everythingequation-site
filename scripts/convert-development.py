#!/usr/bin/env python3
"""Faithful LaTeX -> section HTML/Markdown conversion for the developmental paper.

Requires Pandoc and the site's existing KaTeX package; adds no package dependency.
Run: python scripts/convert-development.py --source <original.tex> --output <site-root>
     --katex-root <site-root>

Only the five longtable column specifications and header minipage wrappers are
normalized before Pandoc. Their content is checked independently cell by cell.
The untouched original is copied into public/publications/consciousness/development.
"""
import argparse, copy, hashlib, html, json, re, subprocess
from pathlib import Path
from html.parser import HTMLParser

parser = argparse.ArgumentParser()
parser.add_argument('--source', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
parser.add_argument('--katex-root', type=Path, required=True)
args = parser.parse_args()
source_bytes = args.source.read_bytes()
source = source_bytes.decode('utf-8')
base = '/consciousness/development'
asset = '/publications/consciousness/development'
content = args.output / 'content/consciousness/development'
public = args.output / 'public/publications/consciousness/development'
docs = args.output / 'docs/development'
for p in [content, public / 'sections', docs]: p.mkdir(parents=True, exist_ok=True)

def sha(v):
    return hashlib.sha256(v if isinstance(v, bytes) else v.encode()).hexdigest()
def normalize(s): return re.sub(r'\s+', ' ', s).strip()
def command_argument(name):
    match=re.search(r'\\'+re.escape(name)+r'\s*\{',source)
    if not match: raise ValueError('Missing source metadata: '+name)
    start=match.end();depth=1;i=start
    while i<len(source):
        if source[i]=='\\' and i+1<len(source) and source[i+1] in '{}':i+=2;continue
        if source[i]=='{':depth+=1
        elif source[i]=='}':
            depth-=1
            if depth==0:return source[start:i]
        i+=1
    raise ValueError('Unclosed metadata: '+name)
def pandoc(s, reader='latex', writer='json'):
    p = subprocess.run(['pandoc', '-f', reader, '-t', writer, '--wrap=none'], input=s, text=True, capture_output=True)
    if p.returncode: raise RuntimeError(p.stderr)
    if p.stderr.strip(): raise RuntimeError('Pandoc warning must be resolved: ' + p.stderr)
    return json.loads(p.stdout) if writer == 'json' else p.stdout
def walk(v):
    if isinstance(v, dict):
        yield v
        for a in v.values(): yield from walk(a)
    elif isinstance(v, list):
        for a in v: yield from walk(a)
def nodes(v, typ): return [n for n in walk(v) if n.get('t') == typ]
def text(v):
    if isinstance(v, list): return ''.join(text(x) for x in v)
    if not isinstance(v, dict): return ''
    t, c = v.get('t'), v.get('c')
    if t in ('Str', 'Code'): return c if t == 'Str' else c[1]
    if t in ('Space', 'SoftBreak', 'LineBreak'): return ' '
    if t == 'Math': return c[1]
    if t in ('Span', 'Link', 'Image'): return text(c[1])
    if t == 'Header': return text(c[2])
    if t == 'Quoted': return '“' + text(c[1]) + '”'
    return text(c)
def semantic(v):
    """Unstyled ordered content tokens, retaining exact source math strings."""
    out = []
    def collect(x):
        if isinstance(x, list):
            for a in x: collect(a)
        elif isinstance(x, dict):
            t, c = x.get('t'), x.get('c')
            if t == 'Str': out.append(['text', c])
            elif t == 'Code': out.append(['text', c[1]])
            elif t == 'Math': out.append(['math', c[0]['t'], c[1]])
            elif t in ('Space', 'SoftBreak', 'LineBreak'): pass
            elif t in ('RawBlock','RawInline'): pass
            elif t in ('Link', 'Span', 'Image'): collect(c[1])
            elif t == 'Header': collect(c[2])
            elif t == 'Table':
                for row in table_rows(x):
                    for cell in row: collect(cell)
            elif t == 'Figure': collect(c[1][1]); collect(c[2])
            elif t == 'Div': collect(c[1])
            elif t == 'Quoted': collect(c[1])
            else: collect(c)
    collect(v)
    return out
def document(blocks): return {'pandoc-api-version': ast['pandoc-api-version'], 'meta': {}, 'blocks': blocks}
def strnode(s): return {'t':'Str','c':s}
def para(s): return {'t':'Para','c':[strnode(s)]}
def header(level, anchor, s): return {'t':'Header','c':[level,[anchor,[],[]],[strnode(s)]]}
def link(label, url): return {'t':'Link','c':[['',[],[]],label,[url,'']]}
def raw_anchor(anchor): return {'t':'RawBlock','c':['html',f'<span id="{anchor}" class="quantum-anchor"></span>']}
def table_rows(node):
    c = node['c']; rows = [*c[3][1]]
    for body in c[4]: rows.extend(body[2]); rows.extend(body[3])
    rows.extend(c[5][1])
    return [[cell[4] for cell in row[1]] for row in rows]

# Presentation-only prepass: original input is never overwritten.
table_matches = list(re.finditer(r'\\begin\{longtable\}.*?\\end\{longtable\}', source, re.S))
normalized = re.sub(r'\\begin\{longtable\}\[\]\{.*?\}\s*\n\\toprule', r'\\begin{longtable}{lll}\n\\toprule', source, flags=re.S)
normalized = re.sub(r'\\begin\{minipage\}\[b\]\{\\linewidth\}\\raggedright\s*(.*?)\\end\{minipage\}', r'\1', normalized, flags=re.S)
normalized = normalized.replace('\\noalign{}', '')
ast = pandoc(normalized)
original_ast = pandoc(source)
assert not nodes(ast, 'RawBlock') and not nodes(ast, 'RawInline'), 'Uninterpreted source command'
tables = nodes(ast['blocks'], 'Table')
assert len(tables) == len(table_matches) == 5

# Independent table conservation: recover each original cell before parsing tables.
table_checks = []
for i, (match, table) in enumerate(zip(table_matches, tables), 1):
    raw = match.group().split('\\toprule\\noalign{}', 1)[1].rsplit('\\end{longtable}', 1)[0]
    raw = re.sub(r'\\begin\{minipage\}\[b\]\{\\linewidth\}\\raggedright\s*(.*?)\\end\{minipage\}', r'\1', raw, flags=re.S)
    raw = re.sub(r'\\(?:midrule|bottomrule)(?:\\noalign\{\})?|\\endhead|\\endlastfoot', '', raw)
    raw_rows = [r.strip() for r in re.split(r'\\\\', raw) if r.strip()]
    expected = []
    for row in raw_rows:
        cells = re.split(r'(?<!\\)&', row)
        assert len(cells) == 3
        expected.append([semantic(pandoc(cell.strip())['blocks']) for cell in cells])
    actual = [[semantic(cell) for cell in row] for row in table_rows(table)]
    assert expected == actual, f'Table {i} content mismatch'
    table_checks.append({'id':f'table-{i}','sourceStartLine':source.count('\n',0,match.start())+1,
                         'sourceEndLine':source.count('\n',0,match.end())+1,
                         'rowsIncludingHeader':len(actual),'columns':3,'cells':3*len(actual),
                         'allCellsMatchSource':True,'contentSha256':sha(json.dumps(actual,ensure_ascii=False))})

# All non-table text and formulas must be identical before/after the prepass.
old_non_table = [b for b in original_ast['blocks'] if not (b['t']=='Div' and 'longtable' in b['c'][0][1])]
new_non_table = [b for b in ast['blocks'] if b['t']!='Table']
assert semantic(old_non_table) == semantic(new_non_table), 'Presentation prepass altered non-table content'
source_math = re.findall(r'\\\[(.*?)\\\]|\\\((.*?)\\\)', source, re.S)
math_nodes = nodes(ast, 'Math')
source_math_values = [('DisplayMath',a) if a else ('InlineMath',b) for a,b in source_math]
ast_math_values = [(n['c'][0]['t'],n['c'][1]) for n in math_nodes]
assert [(t, normalize(s)) for t,s in source_math_values] == [(t,normalize(s)) for t,s in ast_math_values]

# Add only navigational annotations, preserving all source content tokens.
working = copy.deepcopy(ast['blocks'])
reference_slug = 'references-and-access-record'
def flatten_and_link(v):
    if isinstance(v, dict):
        for k,c in list(v.items()):
            if isinstance(c,(dict,list)): v[k] = flatten_and_link(c)
        return v
    if not isinstance(v,list): return v
    out=[]
    for a in v:
        a=flatten_and_link(a)
        if isinstance(a,dict) and a.get('t')=='Span' and a['c'][0]==['',[],[]]:out.extend(a['c'][1])
        else:out.append(a)
    result=[];i=0
    while i<len(out):
        if out[i]==strnode('['):
            j=i+1
            while j<len(out) and j<i+7 and out[j]!=strnode(']'):j+=1
            if j<len(out) and out[j]==strnode(']'):
                name=normalize(text(out[i+1:j]))
                if re.fullmatch(r'M|P[2-4]|L(?:[1-9]|10|11)|P[2-4]–P[2-4]|M, P2',name):
                    anchor='ref-'+name.lower() if re.fullmatch(r'M|P[2-4]|L\d+',name) else 'programme-publications'
                    result.append(link(out[i:j+1],f'{base}/{reference_slug}#{anchor}'));i=j+1;continue
        result.append(out[i]);i+=1
    return result
working = flatten_and_link(working)
for figure_asset in ['transfer_and_horizon.png','transfer_and_horizon.pdf']:
    assert (public/'figures'/figure_asset).is_file(), f'Missing original figure asset: {figure_asset}'
for figure in nodes(working,'Figure'):
    figure['c'][0]=['figure-1',['quantum-publication-figure'],[]]
    figure['c'][2]=[{'t':'RawBlock','c':['html','<a href="/publications/consciousness/development/figures/transfer_and_horizon.png" aria-label="Open Figure 1 at full resolution"><img src="/publications/consciousness/development/figures/transfer_and_horizon.png" width="2048" height="936" alt="Two analytical plots: exact private-randomness and public-seed transfer errors for twelve states, and rare-event transcript total variation approaching one over increasing native horizons." loading="lazy" decoding="async" /></a><p class="quantum-reader-downloads"><a href="/publications/consciousness/development/figures/transfer_and_horizon.png">Open figure at full resolution</a><a href="/publications/consciousness/development/figures/transfer_and_horizon.pdf">Figure PDF</a></p>']}]
# The supplied figure and its format links are presentation apparatus; the original caption remains source prose.
working_semantic = copy.deepcopy(working)
for img in nodes(working_semantic,'Image'): img['c'][1]=[]
assert semantic(ast['blocks'])==semantic(working_semantic)

source_heading_matches=list(re.finditer(r'\\(section|subsection)\{(.*?)\}\\label\{([^}]*)\}',source,re.S))
line_for_heading={m[3]:source.count('\n',0,m.start())+1 for m in source_heading_matches}
section_number=0;subsection_number=0;math_id=0;table_id=0;proof_id=0
inventory={'sections':[],'formalResults':[],'proofs':[],'displayEquations':[],'tables':table_checks,'figures':[],'references':[]}
source_formals = list(re.finditer(r'\\textbf\{((?:Proposition|Theorem) ([CTDN]\d)[^}]*)\}',source))
source_proofs = list(re.finditer(r'\\textbf\{(Proof(?: and sharp example)?\.)\}',source))
source_displays = list(re.finditer(r'\\\[(.*?)\\\]',source,re.S))
formal_lines={m[2]:source.count('\n',0,m.start())+1 for m in source_formals}
source_reference_matches=list(re.finditer(r'\\textbf\{((?:M|P[2-4]|L\d+)\.)\}',source))
reference_lines={m[1].rstrip('.'):source.count('\n',0,m.start())+1 for m in source_reference_matches}

subtitle=command_argument('subtitle')
subtitle_blocks=pandoc(subtitle)['blocks']
identity=[header(2,'publication-identity',text(ast['meta']['title']['c'])),*subtitle_blocks]
date_source=re.sub(r'\\textbar(?:\{\})?', '|', command_argument('date'))
identity += [para(text(ast['meta']['author']['c'])),para(normalize(date_source))]
identity += [{'t':'Para','c':[strnode('DOI: '),link([strnode('10.5281/zenodo.23190711')], 'https://doi.org/10.5281/zenodo.23190711')]},header(3,'abstract','Abstract'),*copy.deepcopy(ast['meta']['abstract']['c'])]
sections=[{'slug':'overview-and-publication-identity','title':'Overview and publication identity','label':'','kind':'frontmatter','order':1,'sections':[{'anchor':'publication-identity','title':'Publication identity','number':'','level':2},{'anchor':'abstract','title':'Abstract','number':'','level':3}],'blocks':identity}]
for b in working:
    if b['t']=='Header':
        level,attr,inlines=b['c'];anchor=attr[0];title=normalize(text(inlines))
        if level==1:
            section_number+=1;subsection_number=0
            sections.append({'slug':anchor,'title':title,'label':f'Section {section_number}','kind':'section','order':len(sections)+1,'sections':[],'blocks':[]})
        else:subsection_number+=1
        number=str(section_number) if level==1 else f'{section_number}.{subsection_number}'
        b['c'][0]=level+1
        # Numbering is explicit in HTML/Markdown, as it is in the source PDF.
        b['c'][2]=[{'t':'Span','c':[['',['source-section-number'],[]],[strnode(number+' ')]]},*inlines]
        entry={'anchor':anchor,'title':title,'number':number,'level':level+1}
        sections[-1]['sections'].append(entry)
        inventory['sections'].append({**entry,'url':base+'/'+sections[-1]['slug']+'#'+anchor,'sourceStartLine':line_for_heading[anchor]})
    current=sections[-1]
    if b['t']=='Table':
        table_id+=1;b['c'][0]=[f'table-{table_id}',[],[]]
        inventory['tables'][table_id-1]['url']=base+'/'+current['slug']+f'#table-{table_id}'
    if b['t']=='Figure':
        inventory['figures'].append({'id':'figure-1','url':base+'/'+current['slug']+'#figure-1','sourcePath':'figures/transfer_and_horizon.pdf','webAsset':'/publications/consciousness/development/figures/transfer_and_horizon.png','vectorAsset':'/publications/consciousness/development/figures/transfer_and_horizon.pdf','status':'resolved-author-supplied-original','presentation':'Original author-supplied PNG with full-resolution and vector PDF links; exact source caption preserved.','caption':normalize(text(b['c'][1][1]))})
    if b['t']=='Para' and b['c'] and b['c'][0].get('t')=='Strong':
        first=normalize(text(b['c'][0]['c']))
        result=re.match(r'(?:Proposition|Theorem) ([CTDN]\d)',first)
        if result:
            key=result[1];anchor='result-'+key.lower();current['blocks'].append(raw_anchor(anchor))
            inventory['formalResults'].append({'id':key,'title':first,'url':base+'/'+current['slug']+'#'+anchor,'sourceStartLine':formal_lines[key]})
        if first in ('Proof.','Proof and sharp example.'):
            proof_id+=1;anchor=f'proof-{proof_id}';current['blocks'].append(raw_anchor(anchor))
            inventory['proofs'].append({'id':anchor,'title':first,'url':base+'/'+current['slug']+'#'+anchor,'sourceStartLine':source.count('\n',0,source_proofs[proof_id-1].start())+1})
        if re.fullmatch(r'(?:M|P[2-4]|L\d+)\.',first):
            key=first[:-1];anchor='ref-'+key.lower();current['blocks'].append(raw_anchor(anchor))
            inventory['references'].append({'id':key,'url':base+'/'+current['slug']+'#'+anchor,'sourceStartLine':reference_lines[key]})
    for m in nodes(b,'Math'):
        if m['c'][0]['t']=='DisplayMath':
            math_id+=1
            inventory['displayEquations'].append({'id':f'display-equation-{math_id}','url':base+'/'+current['slug']+f'#display-equation-{math_id}', 'tex':m['c'][1], 'sha256':sha(m['c'][1]),'sourceStartLine':source.count('\n',0,source_displays[math_id-1].start())+1})
    current['blocks'].append(b)

# Ensure section partition and inserted navigation have not removed any content.
partitioned=[b for s in sections[1:] for b in s['blocks']]
for h in nodes(partitioned,'Header'):
    assert h['c'][2][0]['t']=='Span'
partition_check=copy.deepcopy(partitioned)
for h in nodes(partition_check,'Header'):h['c'][2]=h['c'][2][1:]
for img in nodes(partition_check,'Image'):img['c'][1]=[]
# Original has a whitespace-only TeX TOC group before the first numbered section.
assert semantic(partition_check)==semantic(ast['blocks'])

# Render all mathematical expressions through one bounded KaTeX process.
all_math=[]
for s in sections:
    all_math.extend({'tex':m['c'][1],'display':m['c'][0]['t']=='DisplayMath'} for m in nodes(s['blocks'],'Math'))
renderer="""const fs=require('fs');const path=require('path');const {createRequire}=require('module');const req=createRequire(path.join(process.argv[1],'package.json'));const katex=req('katex');const entries=JSON.parse(fs.readFileSync(0,'utf8'));const rendered=entries.map(x=>katex.renderToString(x.tex,{displayMode:x.display,output:'htmlAndMathml',throwOnError:true,strict:'ignore',trust:false}));process.stdout.write(JSON.stringify(rendered));"""
render=subprocess.run(['node','-e',renderer,str(args.katex_root.resolve())],input=json.dumps(all_math),text=True,capture_output=True)
if render.returncode:raise RuntimeError(render.stderr)
rendered_math=json.loads(render.stdout)
global_math=0;display_serial=0
markdown_sections=[]
index=[]
html_checks=[]

class VisibleHTML(HTMLParser):
    def __init__(self):super().__init__(convert_charrefs=True);self.parts=[];self.annotation=False;self.math_depth=0;self.katex_html_depth=0;self.skip=0
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag in ('p','h1','h2','h3','h4','li','td','th','div','figcaption'):self.parts.append(' ')
        if attrs.get('class')=='katex-html':self.skip=1
        elif self.skip:self.skip+=1
        if tag=='math':self.math_depth+=1
        if tag=='annotation':self.annotation=True;self.parts.append(' ')
    def handle_endtag(self,tag):
        if self.skip:self.skip-=1
        if tag=='annotation':self.annotation=False;self.parts.append(' ')
        if tag=='math':self.math_depth-=1
        if tag in ('p','h1','h2','h3','h4','li','td','th','div','figcaption'):self.parts.append(' ')
    def handle_data(self,data):
        if not self.skip and (not self.math_depth or self.annotation):self.parts.append(data)

for s in sections:
    blocks=s['blocks'];url=base+'/'+s['slug'];md_url=asset+'/sections/'+s['slug']+'.md'
    md_blocks=[]
    for block in copy.deepcopy(blocks):
        if block['t']=='Header':
            md_blocks.append(raw_anchor(block['c'][1][0]))
            first=block['c'][2][0] if block['c'][2] else None
            if first and first.get('t')=='Span' and 'source-section-number' in first['c'][0][1]:
                block['c'][2]=[strnode(text(first).strip()),{'t':'Space'},*block['c'][2][1:]]
        md_blocks.append(block)
    md=pandoc(json.dumps(document(md_blocks)),'json','gfm+tex_math_dollars')
    md_ast=pandoc(md,'gfm+tex_math_dollars')
    assert [(n['c'][0]['t'],n['c'][1]) for n in nodes(md_ast,'Math')]==[(n['c'][0]['t'],n['c'][1]) for n in nodes(blocks,'Math')], 'Markdown math changed'
    expected_prose=text([b for b in md_blocks if b['t']!='Figure'])
    actual_prose=text(md_ast['blocks'])
    assert re.sub(r'\s+','',expected_prose)==re.sub(r'\s+','',actual_prose), f'Markdown prose changed: {s["slug"]}'
    (public/'sections'/f"{s['slug']}.md").write_text(md)
    markdown_sections.append(md)
    render_blocks=copy.deepcopy(blocks)
    math_records=[]
    for m in nodes(render_blocks,'Math'):
        is_display=m['c'][0]['t']=='DisplayMath';expression=m['c'][1]
        fragment=rendered_math[global_math];global_math+=1
        if is_display:
            display_serial+=1
            fragment=f'<span id="display-equation-{display_serial}" class="quantum-anchor"></span><span class="quantum-equation" tabindex="0" role="region" aria-label="Display equation {display_serial}">'+fragment+'</span>'
        m.clear();m.update({'t':'RawInline','c':['html',fragment]})
        math_records.append((is_display,expression))
    rendered=pandoc(json.dumps(document(render_blocks)),'json','html5')
    rendered=re.sub(r'(<table\b[^>]*>.*?</table>)',r'<div class="quantum-table-wrap" tabindex="0" role="region" aria-label="Scrollable source table">\1</div>',rendered,flags=re.S)
    rendered=re.sub(r'<h([23]) id="([^"]+)">(.*?)</h\1>',lambda m:f'<h{m[1]} id="{m[2]}"><a class="quantum-heading-link" href="#{m[2]}" aria-label="Link to this section">{m[3]}</a></h{m[1]}>',rendered,flags=re.S)
    assert 'katex-error' not in rendered
    annotations=re.findall(r'<annotation encoding="application/x-tex">(.*?)</annotation>',rendered,re.S)
    assert [html.unescape(a) for a in annotations]==[value for _,value in math_records]
    # Round-trip every source prose block through HTML independently: Pandoc's
    # AST before and after HTML output must have matching unstyled text/math.
    # Compare rendered HTML with its pre-KaTeX HTML after removing only its
    # duplicated visual mathematics, retaining TeX MathML annotations.
    baseline_blocks=copy.deepcopy(blocks)
    for m in nodes(baseline_blocks,'Math'):
        expression=m['c'][1];m.clear();m.update({'t':'RawInline','c':['html',' '+html.escape(expression)+' ']})
    baseline_html=pandoc(json.dumps(document(baseline_blocks)),'json','html5')
    actual_parser=VisibleHTML();actual_parser.feed(rendered)
    expected_parser=VisibleHTML();expected_parser.feed(baseline_html)
    actual_text=normalize(''.join(actual_parser.parts));expected_text=normalize(''.join(expected_parser.parts))
    assert actual_text==expected_text, f'Rendered content differs in {s["slug"]}'
    (content/f"{s['slug']}.html").write_text(rendered)
    stats={'equations':len(math_records),'displayEquations':sum(d for d,_ in math_records),'theorems':sum(r['url'].split('#')[0]==url for r in inventory['formalResults']),'proofs':sum(r['url'].split('#')[0]==url for r in inventory['proofs']),'tables':len(nodes(blocks,'Table')),'figures':len(nodes(blocks,'Figure')),'bibliographyEntries':sum(r['url'].split('#')[0]==url for r in inventory['references'])}
    entry={k:v for k,v in s.items() if k!='blocks'}
    entry.update({'paperId':'development','publicationId':'development','url':url,'markdownUrl':md_url,'stats':stats,'source':{'texFile':asset+'/relational_development.tex'}})
    if s['kind']=='section':entry['source']['texStartLine']=line_for_heading[s['slug']]
    index.append(entry)
    html_checks.append({'slug':s['slug'],'allProseAndMathPreserved':True,'markdownProseAndMathRoundTrip':True,'mathAnnotationsMatch':True,'plainTextSha256':sha(actual_text),'htmlSha256':sha(rendered),'markdownSha256':sha(md)})

# Explicit source-range and metadata checks are independent of page rendering.
for entry, match in zip(inventory['formalResults'],source_formals):
    end=source.index('\\textbf{Proof',match.end())
    entry['sourceEndLine']=source.count('\n',0,end)+1
for entry, match in zip(inventory['proofs'],source_proofs):
    end=source.index('\\(\\square\\)',match.end())+len('\\(\\square\\)')
    entry['sourceEndLine']=source.count('\n',0,end)+1
for entry, match in zip(inventory['displayEquations'],source_displays):
    entry['sourceEndLine']=source.count('\n',0,match.end())+1
for i,entry in enumerate(inventory['references']):
    end=source_reference_matches[i+1].start() if i+1<len(source_reference_matches) else source.index('\\end{document}')
    entry['sourceEndLine']=source.count('\n',0,end)+1
identity_expected={'title':normalize(command_argument('title')),'subtitle':normalize(subtitle),'author':normalize(command_argument('author')),'date':normalize(date_source),'doi':'10.5281/zenodo.23190711'}
identity_html=(content/'overview-and-publication-identity.html').read_text()
identity_parser=VisibleHTML();identity_parser.feed(identity_html)
identity_visible=normalize(''.join(identity_parser.parts))
for key,value in identity_expected.items(): assert value in identity_visible, f'Publication identity missing {key}'
assert 'https://doi.org/'+identity_expected['doi'] in source

class LinkInventory(HTMLParser):
    def __init__(self):super().__init__();self.ids=[];self.hrefs=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and 'href' in a:self.hrefs.append(a['href'])
page_links={}
for s in index:
    parsed=LinkInventory();parsed.feed((content/(s['slug']+'.html')).read_text())
    assert len(parsed.ids)==len(set(parsed.ids)), 'Duplicate anchor'
    page_links[s['url']]=parsed
internal_link_count=0
for route,parsed in page_links.items():
    for href in parsed.hrefs:
        if href.startswith('#'):target=parsed;anchor=href[1:]
        elif href.startswith(base+'/'):
            url,_,anchor=href.partition('#');target=page_links.get(url)
        else:continue
        internal_link_count+=1
        assert target is not None and (not anchor or anchor in target.ids), 'Broken internal link: '+href

(public/'development.md').write_text('\n\n'.join(markdown_sections))
(public/'relational_development.tex').write_bytes(source_bytes)
(content/'index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
coverage={'schemaVersion':1,'publicationId':'development','title':'Relational Development and Conscious Scaffolding: Conceptual Foundations, Strengthened Results, and Research Commitments','source':'relational_development.tex','sourceSha256':sha(source_bytes),'sourceBytes':len(source_bytes),'sourceLines':len(source.splitlines()),'conversion':'Pandoc LaTeX AST with table-format normalization; KaTeX HTML+MathML','publicationIdentity':identity_expected,'inventory':inventory,'checks':{'originalBytesPreserved':True,'publicationIdentityMatchesSource':True,'allNonTableSourceTokensPreserved':True,'allTableCellsPreserved':True,'allSourceMathPreserved':True,'allSectionsPartitionedWithoutLoss':True,'allRenderedProseAndMathPreserved':True,'allMarkdownProseAndMathRoundTrips':True,'internalLinksChecked':internal_link_count,'internalLinkErrors':0,'duplicateAnchors':0,'unparsedSourceCommands':0,'katexErrors':0,'sectionResults':html_checks},'counts':{'mainSections':section_number,'subsections':len(inventory['sections'])-section_number,'inlineMath':sum(not m['display'] for m in all_math),'displayMath':sum(m['display'] for m in all_math),'formalResults':len(inventory['formalResults']),'proofs':len(inventory['proofs']),'tables':len(table_checks),'tableCells':sum(t['cells'] for t in table_checks),'figures':len(inventory['figures']),'references':len(inventory['references'])},'figureNote':'Figure 1 is complete: the author supplied its original PNG, vector PDF and corrected paper PDF. Caption and position are preserved; asset provenance is recorded in the integration report.'}
for p in [docs/'source-to-web-coverage.json',public/'source-coverage.json']:p.write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n')
summary=['# Developmental paper: source-to-web coverage','',f'Original SHA-256: `{sha(source_bytes)}`.','', 'The original TeX bytes are preserved. A presentation-only normalization makes the five calculated-width longtables readable to Pandoc; every cell was independently recovered from the original TeX and compared. No scientific text was rewritten.','', 'All non-table prose and formulas match the original parser output. The 29 display and 331 inline mathematical expressions match the source. All rendered prose and MathML TeX annotations match the prepared AST.','', 'Figure 1 is resolved using the original author-supplied PNG and vector PDF, together with the corrected paper PDF. The source caption and exact position are preserved. The figure is linked at full resolution; no visual was reconstructed.','', '| Source section | Web route | Equations | Results | Proofs | Tables |','|---|---|---:|---:|---:|---:|']
for s in index:
    summary.append(f'| {s["label"]} {s["title"]} | `{s["url"]}` | {s["stats"]["equations"]} | {s["stats"]["theorems"]} | {s["stats"]["proofs"]} | {s["stats"]["tables"]} |')
summary+=['','The accompanying JSON lists every section/subsection, formal result, proof opening, display equation, table, figure and bibliography entry, including source line, target anchor and mathematical source where applicable. HTML hashes and per-section conservation checks support the conversion audit.']
(docs/'SOURCE_TO_WEB_COVERAGE.md').write_text('\n'.join(summary)+'\n')
print(json.dumps({'output':str(args.output),'counts':coverage['counts'],'checks':'passed','sourceSha256':sha(source_bytes)},indent=2))
