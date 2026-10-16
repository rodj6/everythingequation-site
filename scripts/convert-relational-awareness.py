#!/usr/bin/env python3
"""Render the maintained, PDF-checked Markdown edition to HTML and MathML.

The original PDFs remain authoritative and unchanged. Editable publication
LaTeX/reproducibility archives were not supplied; source/*.md is the reviewed
web transcription. This command converts content, not scientific experiments.
Requires Python, Pandoc and the project's installed KaTeX dependency.
"""
import hashlib, html, json, re, subprocess
from pathlib import Path

root=Path(__file__).resolve().parents[1]
content=root/'content/consciousness/relational-awareness'
public=root/'public/publications/consciousness/relational-awareness'
docs=root/'docs/relational-awareness'
base='/consciousness/relational-awareness'
catalogue=json.loads((content/'documents.json').read_text())

def walk(value):
    if isinstance(value,dict):
        yield value
        for v in value.values(): yield from walk(v)
    elif isinstance(value,list):
        for v in value: yield from walk(v)

def plain(value):
    if isinstance(value,list):return ''.join(plain(v) for v in value)
    if not isinstance(value,dict):return ''
    kind=value.get('t');c=value.get('c')
    if kind=='Str':return c
    if kind in ['Space','SoftBreak','LineBreak']:return ' '
    if kind=='Math':return c[1]
    if kind in ['Link','Span','Image']:return plain(c[1])
    if kind=='Code':return c[1]
    return plain(c)

renderer="""const fs=require('fs');const k=require('katex');const input=JSON.parse(fs.readFileSync(0,'utf8'));process.stdout.write(JSON.stringify(input.map(m=>k.renderToString(m.tex,{displayMode:m.display,throwOnError:true,strict:'error',output:'htmlAndMathml',trust:false}))));"""
index=[];inventory=[];complete=[]
identity='Jeremy Rodgers · Independent Researcher\n\nVersion 1.4 · 16 October 2026\n\nDOI: https://doi.org/10.5281/zenodo.23408737\n\n'
for entry in catalogue:
    source=content/'source'/f'{entry["source"]}.md'
    md=source.read_text()
    if '\u2014' in md:raise ValueError(f'Em dash in {source}')
    ast=json.loads(subprocess.check_output(['pandoc','-f','markdown+tex_math_dollars+header_attributes+fenced_divs','-t','json'],input=md,text=True))
    sections=[{'id':n['c'][1][0],'title':plain(n['c'][2]),'level':n['c'][0]} for n in walk(ast) if n.get('t')=='Header']
    maths=[n for n in walk(ast) if n.get('t')=='Math']
    payload=[{'tex':n['c'][1],'display':n['c'][0]['t']=='DisplayMath'} for n in maths]
    rendered=json.loads(subprocess.check_output(['node','-e',renderer],cwd=root,input=json.dumps(payload),text=True))
    for n,m,r in zip(maths,payload,rendered):
        tag=re.search(r'\\tag\{([^}]+)\}',m['tex'])
        label='Equation '+tag[1] if tag else 'Mathematical expression'
        if m['display']:r='<span class="ra-equation" tabindex="0" role="region" aria-label="'+html.escape(label)+'">'+r+'</span>'
        n.clear();n.update({'t':'RawInline','c':['html',r]})
    rendered_html=subprocess.check_output(['pandoc','-f','json','-t','html5','--wrap=none'],input=json.dumps(ast),text=True)
    rendered_html=re.sub(r'<table(.*?)>(.*?)</table>',lambda m:'<div class="ra-table" tabindex="0" role="region" aria-label="Publication table"><table'+m[1]+'>'+m[2]+'</table></div>',rendered_html,flags=re.S)
    rendered_html=re.sub(r'<th(?=[\s>])(?![^>]*scope=)', '<th scope="col"',rendered_html)
    # DOI/URL strings in reference paragraphs become navigable when not already links.
    (content/f'{entry["slug"]}.html').write_text(rendered_html)
    export=f'# {entry["title"]}\n\n'+identity+f'Web edition: {base}/{entry["slug"]}\n\n'+md
    (public/f'{entry["slug"]}.md').write_text(export)
    complete.append(export)
    result={**entry,'sections':sections,'words':len(re.findall(r'\b\w+\b',md)),'mathCount':len(maths)}
    index.append(result)
    inventory.append({'slug':entry['slug'],'source':str(source.relative_to(root)),'sourceSha256':hashlib.sha256(md.encode()).hexdigest(),'htmlSha256':hashlib.sha256(rendered_html.encode()).hexdigest(),'sections':sections,'math':payload,'mathCount':len(maths),'tables':rendered_html.count('<table'),'displayMath':sum(m['display'] for m in payload)})
(content/'index.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n')
(public/'complete.md').write_text('# From Physical Comparison to Relational Appearance: A Defeasible Current-Act Account\n\nMain paper and technical supplement, one connected publication.\n\n'+identity+'\n\n'.join(complete))
(docs/'conversion-inventory.json').write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'documents':len(index),'sections':sum(len(d['sections']) for d in index),'math':sum(d['mathCount'] for d in index),'tables':sum(d['tables'] for d in inventory),'words':sum(d['words'] for d in index),'katexErrors':0}))
