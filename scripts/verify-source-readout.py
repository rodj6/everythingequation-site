#!/usr/bin/env python3
"""Independent structural checks for the source-readout web editions.

Checks exact preservation against the supplied site ZIP, complete manifests,
local assets, reader links, equation rendering markers and article scope. This is
not a proof checker or a claim of semantic equivalence of PDF transcriptions.
"""
from __future__ import annotations
import argparse, hashlib, html, json, re, zipfile
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
PROTECTED=(
 'content/consciousness/', 'content/quantum/', 'content/quantum-research/',
 'content/paper-integrations/', 'src/app/consciousness/', 'src/app/quantum-measurement/',
 'public/publications/consciousness/', 'public/publications/quantum-measurement/',
 'public/publications/quantum-research/',
)
class Scan(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.links=[];self.images=[];self.math=0;self.text=[]
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if d.get('id'):self.ids.append(d['id'])
  if tag=='a' and d.get('href'):self.links.append(d['href'])
  if tag=='img':self.images.append(d)
  if tag=='math':self.math+=1
 def handle_data(self,data):self.text.append(data)
def sha(b):return hashlib.sha256(b).hexdigest()
def paper_items(data):
 if isinstance(data,list):return data
 return data.get('papers', data.get('publications',data.get('documents',[])))
def main():
 a=argparse.ArgumentParser();a.add_argument('--baseline',type=Path);a.add_argument('--output',type=Path,default=ROOT/'docs/source-readout/independent-checks.json');args=a.parse_args()
 report={'checks':[],'warnings':[],'failures':[],'limits':[
  'These checks establish preservation, coverage structure, local references and rendering presence, not correctness of scientific proofs.',
  'PDF text extraction does not guarantee exact reconstruction of mathematical reading order. Vector equation graphics preserve appearance; accessible transcriptions require separate scientific review.',
  'External publication links and future production deployment are not verified by local source inspection.'
 ]}
 def check(label,ok,details=None):
  report['checks'].append({'check':label,'pass':bool(ok),'details':details})
  if not ok:report['failures'].append(label)
 if args.baseline:
  with zipfile.ZipFile(args.baseline) as z:
   entries=[i for i in z.infolist() if not i.is_dir()]
   for pref in PROTECTED:
    files=[i for i in entries if i.filename.startswith('everythingequation-site/'+pref)]
    altered=[]
    for item in files:
     local=ROOT/item.filename.removeprefix('everythingequation-site/')
     if not local.is_file() or sha(local.read_bytes())!=sha(z.read(item.filename)):altered.append(str(local.relative_to(ROOT)))
    check('Unrelated files preserved: '+pref,not altered,{'compared':len(files),'changed':altered})
 docs=[]
 for series,minimum in [('foundations',7),('constructive',5)]:
  path=ROOT/'content/source-readout'/f'{series}.json'
  if not path.exists():check(series+' manifest exists',False);continue
  data=json.loads(path.read_text());items=paper_items(data)
  docs.extend(items)
  check(series+' main publication count',len(items)>=minimum,{'count':len(items),'minimum':minimum})
 route_files={}
 for paper in docs:
  for chapter in paper.get('chapters',paper.get('documents',[])):
   source=chapter.get('htmlPath',chapter.get('sourcePath',chapter.get('htmlFile')))
   if source:
    route=chapter.get('url') or '/source-readout/'+paper.get('slug',paper.get('id'))+'/'+chapter['slug']
    route_files[route]=ROOT/source
 route_anchors={}
 for route,path in route_files.items():
  if path.exists():
   scan=Scan();scan.feed(path.read_text());route_anchors[route]=set(scan.ids)
 seen=set(); html_total=0;math_total=0;image_total=0;word_total=0
 for p in docs:
  key=p.get('slug',p.get('id'));check('Unique publication '+str(key),key not in seen);seen.add(key)
  chapters=p.get('chapters',p.get('documents',[]));check(str(key)+' chapters exist',bool(chapters))
  for asset_key in ('pdfUrl','texUrl','markdownUrl','supplementUrl'):
   asset=p.get(asset_key)
   if asset and asset.startswith('/'):
    check(str(key)+' '+asset_key+' asset', (ROOT/'public'/asset.lstrip('/')).is_file(),asset)
  all_chapters=list(chapters)
  for c in p.get('companions',[]):
   if isinstance(c,dict):all_chapters.extend(c.get('chapters',[]))
  paper_words=0;paper_ids=set();paper_html=[]
  for c in all_chapters:
   src=c.get('htmlPath',c.get('sourcePath',c.get('htmlFile')))
   if not src:report['warnings'].append(str(key)+': no known HTML path in '+str(c));continue
   file=ROOT/src
   if not file.exists():check(str(key)+' chapter file '+str(src),False);continue
   content=file.read_text();parser=Scan();parser.feed(content);html_total+=1
   math_total+=parser.math;image_total+=len(parser.images)
   text=' '.join(parser.text);paper_words+=len(text.split());paper_ids.update(parser.ids);paper_html.append(content)
   duplicate_ids=[k for k,v in Counter(parser.ids).items() if v>1]
   check(str(key)+'/'+str(c.get('slug'))+' unique anchors',not duplicate_ids,duplicate_ids)
   check(str(key)+'/'+str(c.get('slug'))+' no render error',not re.search(r'katex-error|ParseError|undefined control sequence',content,re.I))
   check(str(key)+'/'+str(c.get('slug'))+' no em dash', '—' not in text)
   for im in parser.images:
    source=im.get('src','');check(str(key)+' image alt '+source,bool(im.get('alt')) or im.get('role')=='presentation')
    if source.startswith('/'):check(str(key)+' image file '+source,(ROOT/'public'/source.lstrip('/')).exists())
   for link in parser.links:
    if link.startswith('#') and link[1:] not in parser.ids:report['warnings'].append(str(file.relative_to(ROOT))+': fragment without local anchor '+link)
    if link.startswith('/source-readout/') and '#' in link:
     route,fragment=link.split('#',1)
     target=route_files.get(route)
     if target and target.exists():
      check(str(key)+' cross-chapter anchor '+link,fragment in route_anchors.get(route,set()))
     elif route not in ('/source-readout/origins',):report['warnings'].append(str(file.relative_to(ROOT))+': unrecognized source route '+link)
  tex_url=p.get('texUrl')
  if tex_url and (ROOT/'public'/tex_url.lstrip('/')).is_file():
   source=(ROOT/'public'/tex_url.lstrip('/')).read_text()
   source=re.sub(r'(?<!\\)%[^\n]*','',source).split(r'\begin{document}',1)[-1].split(r'\end{document}',1)[0]
   labels=re.findall(r'\\label\{([^}]+)\}',source)
   missing=sorted(set(labels)-paper_ids)
   check(str(key)+' independent source-label coverage',not missing,{'sourceLabels':len(labels),'missing':missing})
   proofs=len(re.findall(r'\\begin\{proof\}',source))
   rendered_proofs=sum(len(re.findall(r'class="proof"',h)) for h in paper_html)
   check(str(key)+' independent proof coverage',proofs==rendered_proofs,{'source':proofs,'rendered':rendered_proofs})
  word_total+=paper_words
  check(str(key)+' substantial full text',paper_words>1500,{'words':paper_words})
 report['totals']={'publications':len(docs),'chapterHtml':html_total,'mathML':math_total,'images':image_total,'extractedWords':word_total}
 args.output.parent.mkdir(parents=True,exist_ok=True);args.output.write_text(json.dumps(report,indent=2)+'\n')
 print(json.dumps({'totals':report['totals'],'passed':len(report['checks'])-len(report['failures']),'failed':report['failures'],'warnings':len(report['warnings'])},indent=2))
 return bool(report['failures'])
if __name__=='__main__':raise SystemExit(main())
