#!/usr/bin/env python3
"""Reproduce the full v2.1 web edition from its matching editable sources.
Usage: python scripts/convert-alignment.py --source SOURCE_DIR --pdf AUTHORITATIVE.pdf --output SITE_DIR
Requires Pandoc and the existing site KaTeX package. Preserves source prose and math;
only navigation, bibliography links and equation numbering are added.
"""
import argparse, copy, hashlib, html, json, re, shutil, subprocess, zipfile
from pathlib import Path
from html.parser import HTMLParser
p=argparse.ArgumentParser();p.add_argument('--source',type=Path,required=True);p.add_argument('--pdf',type=Path,required=True);p.add_argument('--output',type=Path,required=True);args=p.parse_args()
root=args.source.resolve();site=args.output.resolve();base='/consciousness/ai-alignment/read';asset='/publications/consciousness/alignment'
content=site/'content/consciousness/alignment';public=site/'public/publications/consciousness/alignment';docs=site/'docs/alignment'
for d in (content,public,docs):d.mkdir(parents=True,exist_ok=True)
def sha(x):return hashlib.sha256(x if isinstance(x,bytes) else x.encode()).hexdigest()
def norm(x):return re.sub(r'\s+',' ',x).strip()
def pandoc(s,reader='latex',writer='json'):
 r=subprocess.run(['pandoc','-f',reader,'-t',writer,'--wrap=none'],input=s,text=True,capture_output=True)
 if r.returncode or r.stderr.strip():raise RuntimeError(r.stderr)
 return json.loads(r.stdout) if writer=='json' else r.stdout
def walk(v):
 if isinstance(v,dict):
  yield v
  for a in v.values():yield from walk(a)
 elif isinstance(v,list):
  for a in v:yield from walk(a)
def nodes(v,t):return [n for n in walk(v) if n.get('t')==t]
def txt(v):
 if isinstance(v,list):return ''.join(txt(x) for x in v)
 if not isinstance(v,dict):return ''
 t=v.get('t');c=v.get('c')
 if t=='Str':return c
 if t=='Code':return c[1]
 if t in ('Space','SoftBreak','LineBreak'):return ' '
 if t=='Math':return c[1]
 if t in ('Span','Link','Image'):return txt(c[1])
 if t=='Header':return txt(c[2])
 return txt(c)
def sem(v):
 if isinstance(v,list):return sum((sem(x) for x in v),[])
 if not isinstance(v,dict):return []
 t=v.get('t');c=v.get('c')
 if t=='Str':return [('text',c)]
 if t=='Code':return [('text',c[1])]
 if t=='Math':return [('math',c[0]['t'],c[1])]
 if t in ('Space','SoftBreak','LineBreak','RawBlock','RawInline'):return []
 if t=='Span':return [] if 'source-section-number' in c[0][1] else sem(c[1])
 if t in ('Link','Image','Div'):return sem(c[1])
 if t=='Header':return sem(c[2])
 return sem(c)
def strn(s):return {'t':'Str','c':s}
def header(level,ident,title):return {'t':'Header','c':[level,[ident,[],[]],[strn(title)]]}
def anchor(ident):return {'t':'RawBlock','c':['html',f'<span id="{html.escape(ident)}" class="quantum-anchor"></span>']}
def doc(blocks):return {'pandoc-api-version':ast['pandoc-api-version'],'meta':{},'blocks':blocks}
# Recursively expand every included section, recording original source line provenance.
source_lines=[];provenance=[];source_files=[]
def expand(path):
 if path not in source_files:source_files.append(path)
 for i,line in enumerate(path.read_text().splitlines(),1):
  m=re.fullmatch(r'\s*\\input\{([^}]+)\}\s*',line)
  if m:expand(root/(m[1]+'.tex'))
  else:source_lines.append(line);provenance.append({'file':str(path.relative_to(root)),'line':i})
expand(root/'main.tex');source='\n'.join(source_lines)+'\n'
def loc(offset):return provenance[source.count('\n',0,offset)]
source_pdf_text=subprocess.check_output(['pdftotext','-layout',str(root/'main.pdf'),'-'])
authoritative_text=subprocess.check_output(['pdftotext','-layout',str(args.pdf),'-'])
assert source_pdf_text==authoritative_text,'Editable source package PDF does not match uploaded PDF'
bbl=(root/'main.bbl').read_text();bibmatches=list(re.finditer(r'\\bibitem\[(.*?)\]\{([^}]+)\}',bbl,re.S));assert len(bibmatches)==54
bibnum={m[2]:i for i,m in enumerate(bibmatches,1)}
# Numeric reference links replace citep presentation only; ordering follows natbib's sorted numbers.
cite_records=[]
def citation(m):
 keys=m[1].split(',');nums=sorted(bibnum[k.strip()] for k in keys);cite_records.append({'keys':keys,'numbers':nums,**loc(m.start())})
 return '['+', '.join('\\href{#ref-'+str(i)+'}{'+str(i)+'}' for i in nums)+']'
prepared=re.sub(r'\\citep\{([^}]+)\}',citation,source)
prepared=re.sub(r'\\bibliograph(?:y|ystyle)\{[^}]+\}','',prepared)
ast=pandoc(prepared)
assert not nodes(ast,'RawInline') and not nodes(ast,'RawBlock'),'Unparsed manuscript command'
# Recover source math independently, including all display environments and dollar formulas.
source_math=[]
pattern=re.compile(r'\\begin\{(equation|align\*?)\}(.*?)\\end\{\1\}|(?<!\\)\$(.+?)(?<!\\)\$',re.S)
for m in pattern.finditer(source):
 if m[1]:
  tex=m[2].strip()
  if m[1].startswith('align'):tex='\\begin{aligned}\n'+tex+'\n\\end{aligned}'
  source_math.append(('DisplayMath',norm(tex),loc(m.start())))
 else:source_math.append(('InlineMath',norm(m[3]),loc(m.start())))
parsed_math=[(m['c'][0]['t'],norm(m['c'][1])) for m in nodes(ast,'Math')]
assert [(a,b) for a,b,_ in source_math]==parsed_math,'Source and parsed mathematics differ'
math_inventory=[];eqnum={};eq=0
for m in nodes(ast,'Math'):
 for label in re.findall(r'\\label\{([^}]+)\}',m['c'][1]):eq+=1;eqnum[label]=eq
assert eq==25
# Correct Pandoc's unresolved equation references using the actual LaTeX numbering.
for link in nodes(ast,'Link'):
 attrs=dict(link['c'][0][2]);ref=attrs.get('reference')
 if ref and ref.startswith('eq:'):
  assert ref in eqnum
  link['c'][1]=[strn('('+str(eqnum[ref])+')' if attrs.get('reference-type')=='eqref' else str(eqnum[ref]))]
# Expand bibliography from its exact compiled entries, retaining every access qualification.
ref_blocks=[];references=[]
for i,m in enumerate(bibmatches,1):
 end=bibmatches[i].start() if i<len(bibmatches) else bbl.index('\\end{thebibliography}')
 raw=bbl[m.end():end].strip();bib=raw.replace('\\newblock',' ').replace('\\penalty0','')
 bib=re.sub(r'\\doi\{([^}]+)\}',lambda a:'doi: \\href{https://doi.org/'+a[1]+'}{'+a[1]+'}',bib)
 bib=re.sub(r'\\natexlab\{([^}]+)\}',r'\1',bib)
 ba=pandoc(bib);assert not nodes(ba,'RawInline') and not nodes(ba,'RawBlock')
 refs={'t':'Div','c':[[f'ref-{i}',['alignment-reference'],[]],[{'t':'Para','c':[{'t':'Strong','c':[strn(f'[{i}]')]},{'t':'Space'},*ba['blocks'][0]['c']]},*ba['blocks'][1:]]]}
 ref_blocks.append(refs)
 references.append({'number':i,'key':m[2],'id':f'ref-{i}','url':base+f'#ref-{i}','sourceFile':'main.bbl','sourceStartLine':bbl.count('\n',0,m.start())+1,'sourceEndLine':bbl.count('\n',0,end)+1,'sourceTextSha256':sha(raw),'text':norm(txt(ba['blocks']))})
original=copy.deepcopy(ast['blocks']);blocks=[header(2,'abstract','Abstract'),*copy.deepcopy(ast['meta']['abstract']['c'])]
sections=[{'id':'abstract','title':'Abstract','number':0,'description':'The alignment proposal and its complete research argument.','subsections':[]}];section=0;sub=0;prop=0;proof=0;definition=0;table=0
inventory={'frontmatter':[{'id':'abstract','title':'Abstract','url':base+'#abstract','source':loc(source.index('\\begin{abstract}'))}],'sections':[],'subsections':[],'paragraphs':[],'propositions':[],'proofs':[],'definitions':[],'equations':[],'math':[],'tables':[],'references':references,'citations':cite_records}
headingmatches=list(re.finditer(r'\\(section|subsection|paragraph)\{([^}]+)\}',source));hi=0
for b in copy.deepcopy(original):
 if b['t']=='Header':
  level,attr,title=b['c'];oldid=attr[0];name=norm(txt(title));hm=headingmatches[hi];hi+=1
  if level==1:
   section+=1;sub=0;ident=f'section-{section}';number=str(section);sections.append({'id':ident,'title':name,'number':section,'description':'','subsections':[]});kind='sections'
  elif level==2:
   sub+=1;ident=f'section-{section}-{sub}';number=f'{section}.{sub}';kind='subsections';sections[-1]['subsections'].append({'id':ident,'number':number,'title':name})
  else:ident=oldid;number='';kind='paragraphs'
  if oldid!=ident:blocks.append(anchor(oldid))
  attr[0]=ident;b['c'][0]=2 if level==1 else 3 if level==2 else 4
  if number:b['c'][2]=[{'t':'Span','c':[['',['source-section-number'],[]],[strn(number+' ')]]},*title]
  inventory[kind].append({'id':ident,'title':name,'number':number,'originalAnchor':oldid,'url':base+'#'+ident,**loc(hm.start())})
 for d in nodes(b,'Div'):
  classes=d['c'][0][1]
  for kind,key,prefix in [('proposition','propositions','prop'),('proof','proofs','proof'),('definition','definitions','def')]:
   if kind in classes:
    if kind=='proposition':prop+=1;no=prop
    elif kind=='proof':proof+=1;no=proof
    else:definition+=1;no=definition
    ident=f'{prefix}-{no}';old=d['c'][0][0]
    if old:d['c'][1].insert(0,anchor(old))
    d['c'][0][0]=ident
    sm=list(re.finditer(r'\\begin\{'+kind+r'\}',source))[no-1]
    em=source.index('\\end{'+kind+'}',sm.end())
    inventory[key].append({'id':ident,'number':no,'sourceLabel':old,'url':base+'#'+ident,'sourceStart':loc(sm.start()),'sourceEnd':loc(em),'textSha256':sha(json.dumps(sem(d),ensure_ascii=False))})
 for t in nodes(b,'Table'):
  table+=1;ident=f'table-{table}';t['c'][0][0]=ident
  # Independent cell-by-cell recovery of the exact source tabular.
  mt=list(re.finditer(r'\\begin\{tabular\}\{[^}]+\}(.*?)\\end\{tabular\}',source,re.S))[table-1]
  raw=re.sub(r'\\(?:toprule|midrule|bottomrule)','',mt[1]);raw_rows=[x.strip() for x in raw.split('\\\\') if x.strip()]
  expected=[[sem(pandoc(c.strip())['blocks']) for c in re.split(r'(?<!\\)&',r)] for r in raw_rows]
  c=t['c'];rows=[*c[3][1]]
  for body in c[4]:rows.extend(body[2]);rows.extend(body[3])
  rows.extend(c[5][1]);actual=[[sem(cell[4]) for cell in r[1]] for r in rows]
  assert expected==actual,'Table cell mismatch'
  inventory['tables'].append({'id':ident,'url':base+'#'+ident,'sourceStart':loc(mt.start()),'sourceEnd':loc(mt.end()),'rows':len(actual),'columns':len(actual[0]),'allCellsPreserved':True})
 blocks.append(b)
assert (section,sub,prop,proof,definition,table)==(15,0,7,7,1,1)
assert hi==len(headingmatches)
assert sem(original)==sem(blocks[2:]),'Numbering altered source content'
blocks.extend([header(2,'references','References'),*ref_blocks]);sections.append({'id':'references','number':16,'title':'References','description':'All 54 sources, with DOI links and source-access records.','subsections':[]})

# Add the reviewed website chapter headings and introductions, retaining every source heading.
editorial_path=docs/'editorial-review.json'
editorial=json.loads(editorial_path.read_text())
chapters={c['number']:c for c in editorial['chapters']}
pre_editorial=copy.deepcopy(blocks);augmented=[];original_headers={}
for b in blocks:
 if b['t']=='Header' and re.fullmatch(r'section-\d+',b['c'][1][0]):
  no=int(b['c'][1][0].split('-')[1]);c=chapters[no];original_headers[b['c'][1][0]]=copy.deepcopy(b)
  assert norm(txt(b['c'][2][1:]))==c['paperTitle']
  b['c'][2]=[strn(c['proposedTitle'])];augmented.append(b)
  augmented.append({'t':'Para','c':[{'t':'Span','c':[['',['alignment-source-title'],[]],[strn(f'Section {no} · '+c['paperTitle'])]]}]})
  augmented.append({'t':'Para','c':[{'t':'Span','c':[['',['alignment-section-intro'],[]],[strn(c['standfirst'])]]}]})
  sections[no].update({'title':c['proposedTitle'],'sourceTitle':c['paperTitle'],'description':c['standfirst']})
 else:augmented.append(b)
# Recover the original document by removing only registered editorial additions.
recovered=[]
for b in augmented:
 if b['t']=='Header' and b['c'][1][0] in original_headers:recovered.append(original_headers[b['c'][1][0]])
 elif b['t']=='Para' and b['c'] and b['c'][0].get('t')=='Span' and any(c in b['c'][0]['c'][0][1] for c in ('alignment-source-title','alignment-section-intro')):continue
 else:recovered.append(b)
assert sem(recovered)==sem(pre_editorial),'Editorial presentation removed source material'
blocks=augmented

# Render each exact math node once. Presentation tags are removed from original annotation.
allmath=[]
for i,m in enumerate(nodes(blocks,'Math')):
 tex=m['c'][1];display=m['c'][0]['t']=='DisplayMath';labels=re.findall(r'\\label\{([^}]+)\}',tex)
 rendertex=re.sub(r'\\nonumber\b','',tex)
 if len(labels)>1:rendertex=re.sub(r'\\label\{([^}]+)\}',lambda a:r'\qquad\text{('+str(eqnum[a[1]])+')}',rendertex)
 else:
  rendertex=re.sub(r'\\label\{([^}]+)\}','',rendertex)
  if labels:rendertex+='\\tag{'+str(eqnum[labels[0]])+'}'
 allmath.append({'tex':rendertex,'original':tex,'display':display,'labels':labels})
 inventory['math'].append({'ordinal':i+1,'kind':'display' if display else 'inline','tex':tex,'source':source_math[i][2],'sha256':sha(tex)})
 for label in labels:inventory['equations'].append({'id':f'eq-{eqnum[label]}','number':eqnum[label],'label':label,'url':base+f'#eq-{eqnum[label]}','tex':tex,'source':source_math[i][2]})
renderer="""const fs=require('fs');const path=require('path');const req=require('module').createRequire(path.join(process.argv[1],'package.json'));const k=req('katex');process.stdout.write(JSON.stringify(JSON.parse(fs.readFileSync(0,'utf8')).map(x=>k.renderToString(x.tex,{displayMode:x.display,output:'htmlAndMathml',strict:'ignore',trust:false,throwOnError:true}))));"""
r=subprocess.run(['node','-e',renderer,str(site)],input=json.dumps(allmath),text=True,capture_output=True)
if r.returncode:raise RuntimeError(r.stderr)
rendered_math=json.loads(r.stdout);render_blocks=copy.deepcopy(blocks)
for m,entry,fragment in zip(nodes(render_blocks,'Math'),allmath,rendered_math):
 fragment=re.sub(r'(<annotation encoding="application/x-tex">).*?(</annotation>)',lambda a:a[1]+html.escape(entry['original'])+a[2],fragment,flags=re.S)
 anchors=''.join(f'<span id="eq-{eqnum[l]}" class="quantum-anchor"></span><span id="{l}" class="quantum-anchor"></span>' for l in entry['labels'])
 if entry['display']:fragment=anchors+'<span class="quantum-equation alignment-equation" tabindex="0" role="region" aria-label="'+('Equations '+', '.join(str(eqnum[l]) for l in entry['labels']) if entry['labels'] else 'Unnumbered equation')+'">'+fragment+'</span>'
 m.clear();m.update({'t':'RawInline','c':['html',fragment]})
article=pandoc(json.dumps(doc(render_blocks)),'json','html5')
article=re.sub(r'(<table\b[^>]*>.*?</table>)',r'<div class="quantum-table-wrap" tabindex="0" role="region" aria-label="Scrollable comparison of controller gains">\1</div>',article,flags=re.S)
article=re.sub(r'<p><span class="alignment-section-intro">(.*?)</span></p>',r'<p class="alignment-section-intro">\1</p>',article,flags=re.S)
article=re.sub(r'<h([234]) id="([^"]+)">(.*?)</h\1>',lambda m:f'<h{m[1]} id="{m[2]}"><a class="quantum-heading-link" href="#{m[2]}" aria-label="Link to this section">{m[3]}</a></h{m[1]}>',article,flags=re.S)
assert [html.unescape(x) for x in re.findall(r'<annotation encoding="application/x-tex">(.*?)</annotation>',article,re.S)]==[x['original'] for x in allmath]
class Links(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.hrefs=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a' and 'href' in d:self.hrefs.append(d['href'])
l=Links();l.feed(article);assert len(l.ids)==len(set(l.ids)),'Duplicate IDs'
assert all(h[1:] in l.ids for h in l.hrefs if h.startswith('#')),str([h for h in l.hrefs if h.startswith('#') and h[1:] not in l.ids])
assert 'katex-error' not in article

# Independently compare all rendered prose plus original TeX against the source AST.
class Visible(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.parts=[];self.skip=0;self.math=0;self.annotation=False
 def handle_starttag(self,t,a):
  attrs=dict(a)
  if t in ('p','h2','h3','h4','li','td','th','div'):self.parts.append(' ')
  if self.skip:self.skip+=1
  elif 'katex-html' in attrs.get('class','').split():self.skip=1
  if t=='math':self.math+=1
  if t=='annotation':self.annotation=True;self.parts.append(' ')
 def handle_endtag(self,t):
  if self.skip:self.skip-=1
  if t=='annotation':self.annotation=False;self.parts.append(' ')
  if t=='math':self.math-=1
  if t in ('p','h2','h3','h4','li','td','th','div'):self.parts.append(' ')
 def handle_data(self,d):
  if not self.skip and (not self.math or self.annotation):self.parts.append(d)
def visible(s):
 v=Visible();v.feed(s);return re.sub(r'\s+','',''.join(v.parts))
def textual_html(blocks):
 b=copy.deepcopy(blocks)
 for m in nodes(b,'Math'):
  tex=m['c'][1];m.clear();m.update({'t':'RawInline','c':['html',' '+html.escape(tex)+' ']})
 return pandoc(json.dumps(doc(b)),'json','html5')
expected_visible=visible(textual_html(blocks))
assert visible(article)==expected_visible,'Rendered prose or mathematics changed'

(content/'article.html').write_text(article)
# Markdown retains exact mathematical source, complete prose, anchors and bibliography.
mdblocks=copy.deepcopy(blocks)
def add_math_anchors(v):
 if not isinstance(v,list):return
 for item in list(v):
  if isinstance(item,dict):
   if item.get('t')=='Header':
    at=v.index(item);v.insert(at,anchor(item['c'][1][0]))
   if item.get('t')=='Math' and item['c'][0]['t']=='DisplayMath':
    labels=re.findall(r'\\label\{([^}]+)\}',item['c'][1]);at=v.index(item)
    for label in labels:
     v.insert(at,{'t':'RawInline','c':['html',f'<span id="eq-{eqnum[label]}"></span><span id="{label}"></span>']});at+=1
   for c in item.values():
    if isinstance(c,list):add_math_anchors(c)
  elif isinstance(item,list):add_math_anchors(item)
add_math_anchors(mdblocks)
identity='# Reflective Alignment and AI Consciousness\n\n## Awareness, Agency and Recursive Cognitive Scaffolding\n\nJeremy Rodgers · Independent Researcher\n\nVersion 2.1 · 11 October 2026\n\nDOI: https://doi.org/10.5281/zenodo.23294465\n\nFull website edition: https://www.everythingequation.com/consciousness/ai-alignment/read\n\n'
md=pandoc(json.dumps(doc(mdblocks)),'json','gfm+tex_math_dollars')
mdast=pandoc(md,'gfm+tex_math_dollars');assert [(m['c'][0]['t'],norm(m['c'][1])) for m in nodes(mdast,'Math')]==[(m['c'][0]['t'],norm(m['c'][1])) for m in nodes(blocks,'Math')],'Markdown math changed'
assert visible(textual_html(mdast['blocks']))==expected_visible,'Markdown prose or mathematics changed'
(public/'alignment.md').write_text(identity+md)
(content/'sections.json').write_text(json.dumps(sections,ensure_ascii=False,indent=2)+'\n')
if args.pdf.resolve() != (public/'alignment.pdf').resolve():
 shutil.copyfile(args.pdf,public/'alignment.pdf')
with zipfile.ZipFile(public/'alignment-source.zip','w',zipfile.ZIP_DEFLATED) as z:
 for f in sorted(root.rglob('*')):
  if f.is_file() and f.name!='main.txt':z.write(f,str(Path('Reflective_Alignment_AI_Consciousness_v2_1')/f.relative_to(root)))
shutil.copyfile(root/'main.tex',public/'main.tex')
counts={'sections':section,'subsections':len(inventory['subsections']),'paragraphHeadings':len(inventory['paragraphs']),'propositions':prop,'proofs':proof,'definitions':definition,'numberedEquations':eq,'displayMath':sum(x['display'] for x in allmath),'unnumberedDisplayMath':sum(x['display'] and not x['labels'] for x in allmath),'inlineMath':sum(not x['display'] for x in allmath),'tables':table,'references':len(references),'citationOccurrences':len(cite_records)}
coverage={'title':'Reflective Alignment and AI Consciousness','version':'2.1','doi':'10.5281/zenodo.23294465','url':base,'sourcePdfSha256':sha(args.pdf.read_bytes()),'matchingSourcePdfTextSha256':sha(source_pdf_text),'matchingSourcePdfTextIdentical':True,'conversion':'Recursive LaTeX inputs, Pandoc AST, exact compiled bibliography, KaTeX HTML+MathML with original TeX annotations. The converter adds the reviewed chapter titles and introductions to both HTML and Markdown, retaining original paper headings and verifying that removal of the editorial additions restores the complete source content.','counts':counts,'editorialSourceSha256':sha(editorial_path.read_bytes()),'sourceFiles':[{'path':str(x.relative_to(root)),'sha256':sha(x.read_bytes())} for x in source_files]+[{'path':'main.bbl','sha256':sha(bbl)}],'inventory':inventory,'checks':{'everySourceMathematicalExpressionPreserved':True,'allSourceProsePreserved':True,'allOriginalHeadingsRetained':True,'editorialLayerRemovalRestoresSource':True,'editorialChapters':15,'sourceTableCellsIndependentlyMatched':True,'allOriginalMathAnnotationsPreserved':True,'markdownMathRoundTrip':True,'allRenderedProseAndMathPreserved':True,'allMarkdownProseAndMathPreserved':True,'visibleContentSha256':sha(expected_visible),'internalLinksChecked':sum(h.startswith('#') for h in l.hrefs),'brokenInternalLinks':0,'duplicateAnchors':0,'unparsedSourceCommands':0,'katexErrors':0},'outputs':{'htmlSha256':sha(article),'markdownSha256':sha(identity+md)}}
for f in (docs/'source-coverage.json',public/'source-coverage.json'):f.write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n')
(docs/'SOURCE_COVERAGE.md').write_text('# Alignment source-to-web coverage\n\nThe uploaded authoritative PDF and the matching source-package PDF produce identical complete layout-preserving extracted text. All 15 sections and their 36 subsections, the abstract, all mathematics, the definition, seven propositions and complete proofs, the table and all 54 bibliography entries are retained.\n\nThe JSON inventory maps each section, paragraph heading, formula, result, proof, table and reference to its source location and website anchor. All inline and displayed mathematics were independently recovered from source and matched to the parsed document. Every table cell was independently parsed and matched. Equation references are resolved with the manuscript\'s original numbering; multi-row displays preserve every row and all 25 equation numbers.\n\nThe complete Markdown export contains original mathematical source; the HTML supplies server-readable prose and pre-rendered KaTeX with MathML and original LaTeX annotations. All fragment links and unique IDs were checked. The original PDF and matching source archive are included.\n\n| Source section | Website anchor |\n|---|---|\n'+'\n'.join(f'| {s["number"]} {s["title"]} | `{base}#{s["id"]}` |' for s in sections)+'\n')
reproduction_note='\nReproduction uses the source archive included with this project. The site already contains the generated HTML and Markdown, so deployment does not require conversion tools. To reproduce the conversion, install Python 3, Pandoc, Poppler (`pdftotext`), Node.js and the dependencies from this project’s package lock. Run these commands from the project root:\n\n```sh\npython -m zipfile -e public/publications/consciousness/alignment/alignment-source.zip /tmp/alignment-source\npython scripts/convert-alignment.py \\\n  --source /tmp/alignment-source/Reflective_Alignment_AI_Consciousness_v2_1 \\\n  --pdf public/publications/consciousness/alignment/alignment.pdf \\\n  --output .\n```\n\nThe extraction destination is an example temporary directory; any local destination may be used. All three script paths are explicit arguments. The converter reads the reviewed website introductions from `docs/alignment/editorial-review.json`. It verifies that the extracted source-package PDF and supplied authoritative PDF have identical complete extracted text before generating outputs.\n'
(docs/'SOURCE_COVERAGE.md').write_text((docs/'SOURCE_COVERAGE.md').read_text()+reproduction_note)
print(json.dumps({'status':'converted','counts':counts,'htmlBytes':len(article.encode()),'markdownBytes':len((identity+md).encode()),'internalLinks':coverage['checks']['internalLinksChecked']},indent=2))
