#!/usr/bin/env python3
"""Independent checks of the revised consciousness reading edition and preservation.
Run from site root; this does not modify content or publication assets.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import argparse, hashlib, json, re, subprocess, zipfile
ROOT=Path(__file__).resolve().parents[1]
DEFAULT_PDF=ROOT/'public/publications/consciousness/monograph.pdf'
ap=argparse.ArgumentParser();ap.add_argument('--baseline',help='Optional independent original website ZIP. Without it, use the bundled baseline hash and anchor inventories.');ap.add_argument('--pdf',default=str(DEFAULT_PDF),help='Optional independent authority PDF; defaults to the bundled final PDF.');ap.add_argument('--output',default='docs/consciousness-revision-20261028/independent-verification.json');args=ap.parse_args()
checks=[];failures=[];warnings=[]
def check(name,ok,detail=None):
 row={'name':name,'passed':bool(ok)}
 if detail is not None:row['detail']=detail
 checks.append(row)
 if not ok:failures.append(name)
def digest(data):return hashlib.sha256(data).hexdigest()
class Html(HTMLParser):
 def __init__(self,s):
  super().__init__(convert_charrefs=True);self.ids=[];self.hrefs=[];self.stack=[];self.text=[];self.math=[];self.current_math=None;self.parse_errors=[];self.feed(s)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id'in a:self.ids.append(a['id'])
  if 'href'in a:self.hrefs.append(a['href'])
  classes=a.get('class','').split()
  if 'katex-error'in classes:self.parse_errors.append(a.get('title','math render error'))
  if tag=='annotation'and a.get('encoding')=='application/x-tex':self.current_math=[]
  if tag not in ['br','hr','img','input','meta','link','source','wbr','area','base','col','embed','param','track']:self.stack.append((tag,tag in ['script','style']or'katex-html'in classes or (self.stack[-1][1]if self.stack else False)))
 def handle_endtag(self,tag):
  if tag=='annotation'and self.current_math is not None:self.math.append(''.join(self.current_math));self.current_math=None
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i][0]==tag:self.stack=self.stack[:i];break
  if tag in ['p','h1','h2','h3','h4','li','td','section','div']:self.text.append(' ')
 def handle_data(self,data):
  if self.current_math is not None:self.current_math.append(data)
  if not(self.stack and self.stack[-1][1]):self.text.append(data)

index=json.loads((ROOT/'content/consciousness/index.json').read_text())
check('25 chapters and six appendices',sum(d['kind']=='chapter'for d in index)==25 and sum(d['kind']=='appendix'for d in index)==6)
check('Reading routes are unique',len({d['url']for d in index})==len(index))
pages={};full=[];maths=[]
for d in index:
 p=ROOT/'content/consciousness/monograph'/f"{d['slug']}.html"
 check(f"{d['slug']}: HTML exists",p.exists())
 if not p.exists():continue
 s=p.read_text();h=Html(s);pages[d['url']]=h;full.append(' '.join(h.text));maths+=h.math
 check(f"{d['slug']}: unique anchors",len(h.ids)==len(set(h.ids)))
 check(f"{d['slug']}: math renders",not h.parse_errors,h.parse_errors or None)
 check(f"{d['slug']}: declared math coverage",len(h.math)==d['stats']['equations'],[len(h.math),d['stats']['equations']])
 check(f"{d['slug']}: no prose em dashes",'—'not in ''.join(h.text))
 check(f"{d['slug']}: complete Markdown exists",(ROOT/'public'/d['markdownUrl'].lstrip('/')).is_file())
for route,h in pages.items():
 for link in h.hrefs:
  u=urlsplit(link)
  if u.path.startswith('/consciousness/monograph/'):
   check(f'{route}: reference {link}',u.path in pages and(not u.fragment or unquote(u.fragment)in pages[u.path].ids))
  elif u.path.startswith('/publications/consciousness/'):
   check(f'{route}: local asset {u.path}',(ROOT/'public'/u.path.lstrip('/')).is_file())
# Editorial entry points and guides use the same published chapter targets.
def html_fields(value):
 if isinstance(value,dict):
  for key,item in value.items():
   if key=='html'and isinstance(item,str):yield item
   else:yield from html_fields(item)
 elif isinstance(value,list):
  for item in value:yield from html_fields(item)
for filename in ['editorial.json','clarifications.json']:
 for fragment in html_fields(json.loads((ROOT/'content/consciousness'/filename).read_text())):
  for link in Html(fragment).hrefs:
   u=urlsplit(link)
   if u.path.startswith('/consciousness/monograph/'):
    check(f'{filename}: monograph reference {link}',u.path in pages and(not u.fragment or unquote(u.fragment)in pages[u.path].ids))
text=re.sub(r'\s+',' ',' '.join(full))
ai=pages.get('/consciousness/monograph/artificial-systems-embodiment-and-recursive-cognition')
ai_text=re.sub(r'\s+',' ',''.join(ai.text))if ai else ''
required_ai=[('Affirmative current AI attribution',r'current AI models are conscious within Shadow Theory'),('Active execution distinguishes parameters',r'physically executing inference process'),('Certification remains separate',r'Device.level certification of a particular deployed process remains a separate task'),('Attribution not withdrawn',r'without withdrawing it'),('Physical A1 antecedent retained',r'cache dependence and token re.entry does not by itself establish that antecedent'),('Four claims remain distinct',r'affirmative attribution defended here')]
for name,pattern in required_ai:check(name,bool(re.search(pattern,ai_text,re.I)))
check('Superseded possibility-only AI opening removed','Artificial consciousness is possible in principle within the substrate-open constitution, but it is not demonstrated here'not in ai_text)
check('Superseded knowing-aspect A0 removed','Awareness is the knowing aspect of'not in text)
for name,pattern in [('Ground distinguished from unsplit',r'unconditioned ground'),('Unsplit remains distinguished',r'unsplit'),('Working source problem relativity',r'complete only relative to a nominated readout problem'),('Enacted organization integrated',r'enact'),('Temporal experience integrated',r'temporal experience'),('Experiential gap and episode distinction',r'qualification gap'),('A3 copying not numerical continuation',r'Copying informational content is not the same as transporting the physical lineage')]:check(name,bool(re.search(pattern,text,re.I)))
asset=ROOT/'public/publications/consciousness/monograph.pdf'
check('Current PDF matches final supplied publication',asset.exists()and digest(asset.read_bytes())=='4531915399c00d0c7bdefe1e8a5ae6ecbf964c3a40e34a0a5a29502d032612cf')
check('Current DOI appears in publication identity','23755118'in (ROOT/'src/config/consciousness.ts').read_text())
check('Authority PDF path exists',Path(args.pdf).is_file())
if Path(args.pdf).is_file():check('Authority PDF hash',digest(Path(args.pdf).read_bytes())=='4531915399c00d0c7bdefe1e8a5ae6ecbf964c3a40e34a0a5a29502d032612cf')
# Compare every preserved existing URL and anchor, not only the number of routes.
changed=[];missing=[];protected=[];missing_anchors=[]
protected_prefixes=['content/source-readout/','public/publications/source-readout/','src/app/source-readout/','src/lib/source-readout','src/components/source-readout','content/quantum/','content/quantum-research/','public/publications/quantum-measurement/','src/app/quantum-measurement/','content/paper-integrations/','public/publications/consciousness/new-papers/','content/consciousness/agency/','content/consciousness/alignment/','content/consciousness/continuity-note/','content/consciousness/development/','content/consciousness/relational-awareness/','content/consciousness/research/']
baseline_mode='bundled-hash-and-anchor-inventories'
snapshot_path=ROOT/'docs/consciousness-revision-20261028/baseline-files.json'
anchors_path=ROOT/'docs/consciousness-revision-20261028/baseline-anchors.json'
check('Bundled baseline file inventory exists',snapshot_path.is_file())
check('Bundled baseline anchor inventory exists',anchors_path.is_file())
baseline_files=json.loads(snapshot_path.read_text())if snapshot_path.is_file()else{}
baseline_anchors=json.loads(anchors_path.read_text())if anchors_path.is_file()else{}
check('Baseline inventories cover the complete original site',len(baseline_files)==6165 and len(baseline_anchors)==37 and sum(map(len,baseline_anchors.values()))==590)
if args.baseline:
 check('Independent baseline ZIP exists',Path(args.baseline).is_file())
 if Path(args.baseline).is_file():
  baseline_mode='independent-zip-and-bundled-inventories'
  with zipfile.ZipFile(args.baseline)as z:
   actual_files={info.filename.split('/',1)[1]:digest(z.read(info))for info in z.infolist()if not info.is_dir()}
   actual_index=json.loads(z.read('everythingequation-site/content/consciousness/index.json'))
   actual_anchors={d['url']:Html(z.read('everythingequation-site/content/consciousness/monograph/'+d['slug']+'.html').decode()).ids for d in actual_index}
   check('Bundled baseline hashes match independent ZIP',actual_files==baseline_files)
   check('Bundled baseline anchors match independent ZIP',actual_anchors==baseline_anchors)
   baseline_files=actual_files;baseline_anchors=actual_anchors
check('Every old monograph route preserved',all(route in pages for route in baseline_anchors))
for route,old_ids in baseline_anchors.items():
 now=pages.get(route);missing_anchors.extend({'route':route,'anchor':a}for a in old_ids if now is None or a not in now.ids)
check('Every existing monograph anchor retained',not missing_anchors,missing_anchors or None)
for rel,expected in baseline_files.items():
 p=ROOT/rel
 if not p.exists():missing.append(rel)
 elif digest(p.read_bytes())!=expected:changed.append(rel)
 if any(rel.startswith(prefix)for prefix in protected_prefixes):protected.append((rel,p.is_file()and digest(p.read_bytes())==expected))
check('Protected programme content remains byte-identical',bool(protected)and all(ok for _,ok in protected),[r for r,ok in protected if not ok])
check('No baseline files removed',bool(baseline_files)and not missing,missing or None)
archive=ROOT/'public/publications/consciousness/history/2026-09-20/monograph.pdf'
original_pdf_hash=baseline_files.get('public/publications/consciousness/monograph.pdf')
check('Original edition PDF preserved as history',bool(original_pdf_hash)and archive.is_file()and digest(archive.read_bytes())==original_pdf_hash)
report={'authority':'Final PDF SHA-256 fixed from the verified supplied publication','baselineMode':baseline_mode,'authorityPdf':str(Path(args.pdf).resolve().relative_to(ROOT))if Path(args.pdf).resolve().is_relative_to(ROOT)else str(Path(args.pdf).resolve()),'summary':{'readingRoutes':len(index),'mathExpressions':len(maths),'protectedFiles':len(protected),'changedBaselineFiles':len(changed),'checks':len(checks),'failed':len(failures)},'passed':not failures,'failures':failures,'warnings':warnings,'changedBaselineFiles':changed,'missingBaselineFiles':missing,'checks':checks,'limits':'Checks establish content/anchor coverage, exact original asset identity and website preservation. They do not independently validate the scientific propositions.'}
out=ROOT/args.output;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items()if k in ['summary','passed','failures','warnings']},indent=2));raise SystemExit(bool(failures))
