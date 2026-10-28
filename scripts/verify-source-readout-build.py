#!/usr/bin/env python3
"""Check production output, not only content inventories. Run after npm run build."""
from pathlib import Path
import json,re,html
from urllib.parse import urlsplit,unquote
from lxml import html as lh
root=Path(__file__).resolve().parents[1];app=root/'.next/server/app';public=root/'public'
papers=[]
for name in ['foundations','constructive']:papers+=json.loads((root/f'content/source-readout/{name}.json').read_text())['papers']
routes=['/source-readout','/source-readout/origins','/framework','/papers','/research-map','/']
for p in papers:
 routes.append('/source-readout/'+p['slug'])
 routes += ['/source-readout/'+p['slug']+'/'+c['slug'] for c in p['chapters']]
checks=[];failures=[]
def check(name,passed,detail=None):
 checks.append({'name':name,'passed':bool(passed),'detail':detail})
 if not passed:failures.append(name)
def output(route):return app/('index.html' if route=='/' else route.strip('/')+'.html')
for route in routes:
 f=output(route);check(route+': production HTML',f.exists())
 if not f.exists():continue
 s=f.read_text();tree=lh.fromstring(s)
 check(route+': title and canonical',bool(tree.xpath('//title/text()')) and bool(tree.xpath('//link[@rel="canonical"]')))
 check(route+': no KaTeX failure','katex-error' not in s)
 if route.startswith('/source-readout/') and route.count('/')==3:
  bodies=tree.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," sr-technical ")]')
  check(route+': full text without JavaScript',bool(bodies) and len(bodies[0].text_content())>40)
  check(route+': reader navigation',bool(tree.xpath('//nav[@aria-label="Section navigation"]')))
 for value in tree.xpath('//main//a/@href | //main//img/@src'):
  parsed=urlsplit(value)
  if parsed.scheme or parsed.netloc or not parsed.path.startswith('/'):continue
  path=unquote(parsed.path)
  if path.startswith('/source-readout'):
   dest=app/(path.strip('/')+'.body') if path.endswith('.json') else output(path)
   check(route+': linked route '+path,dest.exists())
   if dest.exists() and parsed.fragment:
    target=unquote(parsed.fragment);desttext=dest.read_text()
    check(route+': anchor '+value,bool(re.search(r'id=["\']'+re.escape(target)+r'["\']',desttext)))
  elif path.startswith('/publications/source-readout/'):
   check(route+': asset '+path,(public/path.lstrip('/')).is_file())
# Static route handler responses contain machine discovery data.
for route in ['manifest.json','search.json']:
 f=app/f'source-readout/{route}.body';check(route+': static response',f.exists())
 if f.exists():
  data=json.loads(f.read_text())
  check(route+': complete records',len(data['papers'])==15 if route=='manifest.json' else len(data)>=193)
f=app/'graph.json.body'
if f.exists():
 data=json.loads(f.read_text());ids=[n['id'] for n in data['nodes']];ss=[n for n in data['nodes'] if n['id'].startswith('source-readout')]
 check('Graph contains programme, origins, 15 articles and 193 chapters',len(ss)==210,len(ss))
 check('Graph unique node identifiers',len(set(ids))==len(ids))
 check('Graph source-readout edges resolve',all(e['from'] in ids and e['to'] in ids for e in data['edges'] if e['from'].startswith('source-readout')))
f=app/'sitemap.xml.body'
if f.exists():
 s=f.read_text();check('Sitemap includes every complete reading route',all('>'+('https://everythingequation.com'+r)+'<' in s for r in routes if r.startswith('/source-readout')))
f=app/'llms.txt.body'
if f.exists():check('AI discovery includes new programme and all editions',all('/source-readout/'+p['slug'] in f.read_text() for p in papers))
report={'checkedRoutes':len(routes),'checks':len(checks),'failed':failures,'passed':not failures,'scope':'Static production HTML, route/anchor/asset integrity, metadata and discovery. This does not validate mathematical proofs or physical claims.'}
(root/'docs/source-readout/production-verification.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2));raise SystemExit(bool(failures))
