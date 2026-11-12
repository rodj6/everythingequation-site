"""Assemble review-only coverage from the detailed source and independent ledgers.

Run from any directory. This does not convert or change the published articles.
"""
from pathlib import Path
from collections import Counter
import json
r=Path(__file__).resolve().parents[1]
load=lambda p:json.loads((r/p).read_text())
e=load('docs/einstein-ym/einstein-1916.json');mapping=load('docs/einstein-ym/ym-inventory-mapping.json');independent=load('docs/einstein-ym/ym-source-inventory.json')
result={'schemaVersion':1,'scope':'Source-to-web structural coverage. Physical PDF pages are one-based. Paper text/notation are retained with web introductions. Source-derived inventories and rendered presence do not independently prove the mathematics. The Einstein source PDF matches the supplied edition; Yang–Mills vector formula graphics preserve the published geometry, with linear PDF text alternatives that are not semantic LaTeX/MathML.','verificationStatus':'Source inventory and anchor reconciliation complete; see docs/einstein-ym/source-verification.json and subsequent production/HTTP receipts for the actual checks executed.','baseline':load('docs/einstein-ym/publication-checksums.json')['baseline'],'editions':[]}
result['editions'].append({'id':'einstein-1916','doi':e['doi'],'sourcePdf':e['sourcePdf'],'sha256':e['sourceSha256'],'physicalPdfPages':48,'chapterCount':e['chapterCount'],'readingUrl':'/source-readout/einstein-1916','sourceInventory':e['sourceInventory'],'coverageFile':'docs/einstein-ym/einstein-1916.json','administrativeExclusions':e['exclusions'],'records':e['records']})
for paper in mapping['papers']:
 pid=paper['id'];i=next(x for x in independent['papers'] if x['id']==pid);c=load('docs/einstein-ym/'+pid+'.json')
 result['editions'].append({'id':pid,'doi':i['doi'],'sourcePdf':i['sourcePdf'],'sha256':i['sha256'],'physicalPdfPages':i['physicalPdfPages'],'bodyStartPhysicalPage':i['bodyStartPhysicalPage'],'chapterCount':len(c['chapters']),'readingUrl':'/source-readout/'+pid,'sourceInventory':i['counts'],'coverageFile':'docs/einstein-ym/'+pid+'.json','sourceBlockInventory':{'path':'public/publications/source-lift/'+pid+'/source-block-inventory.json','count':c['renderedBlocks'],'fields':'sourcePage/sourceBlock/bbox/text map to route/chapter/anchor'},'formulaInventory':{'path':'public/publications/source-lift/'+pid+'/formula-inventory.json','count':c['formulaAssets'],'fields':'sourcePage/bbox/text/inline map to exact-vector asset URL'},'administrativeExclusions':c['administrativeExclusions'],'records':paper['mappings']})
receipt_files={
 'source':'source-verification.json',
 'ordinaryProduction':'next-build-verification.json',
 'adapterProduction':'adapter-build-verification.json',
 'servedHttp':'http-verification.json',
}
result['verificationReceipts']={}
for kind,filename in receipt_files.items():
 destination='docs/einstein-ym/'+filename
 if (r/destination).is_file():
  receipt=load(destination)
  matches=all(any(row.get('id')==edition['id'] and len(row.get('chapters',[]))==edition['chapterCount'] for row in receipt.get('editions',[])) for edition in result['editions'])
  status='passed' if matches and receipt.get('checks',0)>0 and not receipt.get('failures') else 'failed or incomplete'
  result['verificationReceipts'][kind]={'status':status,'path':destination,'checkedAt':receipt.get('checkedAt'),'checks':receipt.get('checks'),'failures':len(receipt.get('failures',[]))}
 else:
  result['verificationReceipts'][kind]={'status':'not run','path':destination}
for edition in result['editions']:
 for row in edition['records']:
  row['verification']={kind:value['status'] for kind,value in result['verificationReceipts'].items()}
(r/'EINSTEIN_YM_COVERAGE.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
md=['# Einstein and Yang–Mills source-to-web coverage','',result['scope'],'','This is a review ledger outside public article content. The [machine-readable companion](EINSTEIN_YM_COVERAGE.json) contains each numbered/source obligation and its destination, and links the finer source-block and vector-formula inventories. Actual build and served checks are recorded separately.','', '| Edition | PDF pages | Reading chapters | Mapped section/formal/equation/table obligations | Source blocks | Vector formulas |','| --- | ---: | ---: | ---: | ---: | ---: |']
for x in result['editions']:
 md.append(f"| [{x['id']}]({x['readingUrl']}) | {x['physicalPdfPages']} | {x['chapterCount']} | {len(x['records'])} | {x.get('sourceBlockInventory',{}).get('count','MDX')} | {x.get('formulaInventory',{}).get('count','KaTeX')} |")
md+=['','Each machine-readable source obligation carries the following receipt-derived verification status. A successful source check is separate from a successful production or served-page check.','','| Verification | Status | Receipt |','| --- | --- | --- |']
for kind,value in result['verificationReceipts'].items():
 md.append(f"| {kind} | {value['status']} | [{Path(value['path']).name}]({value['path']}) |")
md+=['','## Coverage and limitations','', '- Einstein: the matching source was converted with 211 original numbered equations, 15 formal statements and their 15 proofs, four tables, all substantive appendices, and 12 references. Each has an anchored record with the physical page or section page range.', '- Yang–Mills flagship: independent PDF inventory records 352 headings, 77 numbered formal items, 750 printed equation tags, nine table-caption matches and 18 independently delimited table regions. All physical body pages 4–530 map into the web reading path.', '- Yang–Mills companion: independent PDF inventory records 277 headings, 730 printed equation tags and three independently delimited table regions. All physical body pages 3–458 map into the web reading path. The mathematical exposition does not use numbered theorem environments; its mathematical arguments remain in the source-block ledger.', '- Both Yang–Mills works also have a record for every substantive PDF text block, including unnumbered formulas, proofs, references and appendices. Each row records its physical page, source bounding box and destination anchor. Formula images retain their original outlines and carry the extracted alternative text. Table images preserve the complete source geometry; accessible HTML tables record the text lines by column, rather than reconstructing merged multi-line logical rows.', '- Administrative title/contents/running headers and page numerals are adapted or excluded as documented in each contributor ledger. Substantive front-matter abstracts and authorship information are retained.', '- A block/asset inventory proves structural inclusion, not a new formal proof or a claim of semantic equivalence of a linear mathematical transcript. Rendered equation appearance and representative pages were reviewed separately; see the integration verification report.','']
for x in result['editions']:
 md+=['## '+x['id'],'',f"[Detailed source ledger]({x['coverageFile']}) · DOI {x['doi']} · source SHA-256 `{x['sha256']}`",'']
 if x['id']=='einstein-1916':
  md+=['| Source section | PDF page(s) | Destination |','| --- | --- | --- |']
  for row in x['records']:
   if row['type']=='section':
    ps=row.get('sourcePdfPages',[row.get('sourcePdfPage')]);md.append(f"| {row.get('sourceSection','')} {row.get('sourceTitle','')} | {', '.join(map(str,ps))} | [{row['anchor']}]({row['destinationRoute']}) |")
 else:
  c=load('docs/einstein-ym/'+x['id']+'.json');md+=['| Reading chapter | Physical source pages | Destination |','| --- | --- | --- |']
  for ch in c['chapters']:
   pages=ch['sourcePages'];md.append(f"| {ch['order']}. {ch['title'].replace('|','/')} | {min(pages)}–{max(pages)} | [{ch['slug']}]({x['readingUrl']}/{ch['slug']}) |")
 md+=['','Administrative treatment:', '']
 exclusions=x['administrativeExclusions']
 if all(isinstance(t,str) for t in exclusions):
  md+=['- '+t for t in exclusions]
 else:
  reasons=Counter(t['reason'] for t in exclusions)
  md+=['- '+reason+' ('+str(count)+' source blocks).' for reason,count in reasons.items()]
  md+=['- Exact physical-page, source-block and excluded-text records are retained in the detailed ledger and the machine-readable companion.']
 md+=['']
(r/'EINSTEIN_YM_COVERAGE.md').write_text('\n'.join(md)+'\n')
print({x['id']:len(x['records']) for x in result['editions']})
