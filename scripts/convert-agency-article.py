#!/usr/bin/env python3
"""Faithful DOCX-to-MDX asset conversion for Agency and the constructed self.

Run: python scripts/convert-agency-article.py SOURCE.docx OUTPUT_DIRECTORY
Only named paragraphs and hyperlink relationship targets are transformed.
"""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import argparse, hashlib, html, json, re

N = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
     'r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
W, R = '{'+N['w']+'}', '{'+N['r']+'}'

def digest(s): return hashlib.sha256(s.encode()).hexdigest()
def plain(p): return ''.join(x.text or '' for x in p.iter(W+'t'))
def escape(s):
    s=s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('{','&#123;').replace('}','&#125;')
    return re.sub(r'([\\*_`])',r'\\\1',s)
def run_text(run):
    text=''.join(x.text or '' for x in run.iter(W+'t'))
    out=escape(text)
    props=run.find(W+'rPr')
    if props is not None:
        def on(tag):
            el=props.find(W+tag)
            return el is not None and el.attrib.get(W+'val','1') not in ('0','false','off')
        if on('i'): out='*'+out+'*'
        if on('b'): out='**'+out+'**'
    return out

def convert(source,outdir):
    outdir.mkdir(parents=True, exist_ok=True)
    with ZipFile(source) as z:
        doc=ET.fromstring(z.read('word/document.xml'))
        rels={r.attrib['Id']:r.attrib['Target'] for r in ET.fromstring(z.read('word/_rels/document.xml.rels')) if r.attrib.get('Type','').endswith('/hyperlink')}
        body=doc.find(W+'body')
        unsupported=[x.tag.split('}')[-1] for x in body if x.tag not in (W+'p',W+'sectPr')]
        assert not unsupported, unsupported
        paragraphs=list(body.findall(W+'p'))
        assert all(not list(p.iter(W+'drawing')) and not list(p.iter(W+'pict')) for p in paragraphs)
        source_rows=[]; converted=[]; links=[]; emphasis=[]
        for i,p in enumerate(paragraphs):
            text=plain(p)
            props=p.find(W+'pPr'); style=props.find(W+'pStyle').attrib.get(W+'val') if props is not None and props.find(W+'pStyle') is not None else ''
            parts=[]
            for child in p:
                if child.tag==W+'r':
                    parts.append(run_text(child))
                    rp=child.find(W+'rPr')
                    if rp is not None and (rp.find(W+'b') is not None or rp.find(W+'i') is not None): emphasis.append({'paragraph':i,'text':plain(child)})
                elif child.tag==W+'hyperlink':
                    target=rels[child.attrib[R+'id']]
                    label=''.join(run_text(r) for r in child.findall(W+'r'))
                    parts.append(f'[{label}]({target})')
                    links.append({'paragraph':i,'label':plain(child),'url':target})
                else: assert child.tag==W+'pPr', child.tag
            md=''.join(parts)
            # Preserve printed citation markers while making each number usable.
            def cite(m):
                values=m.group(1).split(', ')
                return r'\['+', '.join(f'[{n}](#source-{n})' if int(n)<=10 else f'[{n}](#unresolved-source-{n})' for n in values)+r'\]'
            md=re.sub(r'\[(\d+(?:, \d+)*)\]',cite,md)
            source_rows.append({'paragraph':i,'style':style,'text':text,'sha256':digest(text)})
            if style in ('Title','Subtitle'): continue
            if style=='Heading1':
                anchor=re.sub(r'[^a-z0-9]+','-',text.lower()).strip('-')
                md=f'<h2 id="{anchor}" className="mt-10 mb-3 border-b border-edge pb-2 text-2xl font-semibold tracking-tight text-fg scroll-mt-24">{md}</h2>'
            elif i>=71:
                n=int(re.match(r'(\d+)\.',text).group(1))
                md=f'<span id="source-{n}" className="scroll-mt-24" />'+re.sub(r'^(\d+)\.',r'\1\\.',md)
            converted.append({'paragraph':i,'mdx':md})
    title=source_rows[0]['text']; subtitle=source_rows[1]['text']
    fm='\n'.join(['---','title: '+json.dumps(title,ensure_ascii=False),'description: '+json.dumps(subtitle,ensure_ascii=False),'date: "2026-10-06"','author: "Jeremy Rodgers"','tags: [consciousness, agency, RCO, relational-development]','status: published','---'])
    context='''<aside className="card-surface my-6 px-5 py-4" aria-label="Related research">

**Related research.** Read the [full-text technical web edition of Relational Development and Conscious Scaffolding](/consciousness/development) and the [Shadow Theory and Consciousness monograph](/consciousness/monograph). The article below preserves the supplied text. Its unresolved reference [11] is explained in the [source note](#unresolved-source-11).

</aside>'''
    note='''<aside id="unresolved-source-11" className="card-surface my-6 scroll-mt-24 px-5 py-4" aria-label="Editorial source note">

**Editorial source note.** “Conscious scaffolding” cites “[10, 11]”, but the supplied Word document lists sources 1–10 only and contains no reference entry or hyperlink for [11]. Its intended source could not be identified unambiguously from the supplied article and programme material. The citation is preserved for author clarification; no replacement reference has been invented.

</aside>'''
    chunks=[fm,'{ /* Original article title and subtitle are rendered from frontmatter. */ }',converted[0]['mdx'],context]
    for row in converted[1:]: chunks.extend([f'{{ /* source-paragraph:{row["paragraph"]} */ }}',row['mdx']])
    chunks.append(note)
    output='\n\n'.join(chunks)+'\n'
    mdx_path=outdir/'agency-and-the-constructed-self.mdx'; mdx_path.write_text(output)
    # Derive visible text independently from the emitted Markdown markup.
    def visible(md):
        md=re.sub(r'<[^>]*>','',md)
        md=re.sub(r'\[([^\]]*)\]\([^)]*\)',r'\1',md)
        md=re.sub(r'\\([\\*_`\[\].])',r'\1',md)
        md=re.sub(r'(\*\*|\*)(.*?)\1',r'\2',md)
        return html.unescape(md)
    checks=[]
    for row in converted:
        actual=visible(row['mdx'])
        expected=source_rows[row['paragraph']]['text']
        checks.append({'paragraph':row['paragraph'],'source_sha256':digest(expected),'converted_visible_sha256':digest(actual),'exact_visible_text_match':actual==expected})
        assert actual==expected,(row['paragraph'],expected,actual)
    headings=[{'text':r['text'],'paragraph':r['paragraph'],'anchor':re.sub(r'[^a-z0-9]+','-',r['text'].lower()).strip('-')} for r in source_rows if r['style']=='Heading1']
    audit={'source':source.name,'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'output':mdx_path.name,'output_sha256':hashlib.sha256(mdx_path.read_bytes()).hexdigest(),'route':'/articles/agency-and-the-constructed-self',
      'source_paragraphs':len(paragraphs),'converted_body_paragraphs':len(converted),'frontmatter_title_and_subtitle_exact':True,'headings':headings,'hyperlinks':links,'hyperlink_targets_preserved':all(']('+x['url']+')' in output for x in links),'inline_emphasis_runs':emphasis,'embedded_images':0,'tables':0,
      'paragraph_checks':checks,'all_source_paragraph_text_preserved':all(c['exact_visible_text_match'] for c in checks),'corrections':[],
      'presentation_additions':['Title and subtitle promoted unchanged to frontmatter and rendered by the article route.','DOCX Heading1 headings rendered as HTML h2 with stable anchors, under the page h1.','Citation numerals linked to source entries; [11] linked to clearly separated editorial source note.','Related-research callout links complete developmental paper and existing consciousness monograph.'],
      'unresolved':[{'item':'Reference [11]','source_paragraph':28,'status':'Author clarification required','handling':'Preserved the exact printed marker [10, 11] and supplied all ten listed sources; added separate source note.','reason':'DOCX relationships provide ten source URLs only. A2 grounding is discussed in the developmental paper and inherited monograph/companion sources; contextual overlap does not unambiguously identify an eleventh entry.'}]}
    (outdir/'article-conversion-audit.json').write_text(json.dumps(audit,indent=2,ensure_ascii=False)+'\n')
    (outdir/'article-source-paragraphs.json').write_text(json.dumps(source_rows,indent=2,ensure_ascii=False)+'\n')
    print(json.dumps({'output':str(mdx_path),'paragraphs':len(paragraphs),'body_exact':all(c['exact_visible_text_match'] for c in checks),'hyperlinks':len(links),'headings':len(headings)}))

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('source',type=Path);parser.add_argument('outdir',type=Path);args=parser.parse_args();convert(args.source,args.outdir)
