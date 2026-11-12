#!/usr/bin/env python3
"""Retain the continued editorial-amendment table on companion source p457.
The source uses no repeated header, only the bottom rule, so a generic table
finder cannot identify its three inherited columns.
"""
from pathlib import Path
import importlib.util,json,re,collections
import fitz
ROOT=Path(__file__).resolve().parents[1];ident='yang-mills-companion';ad=ROOT/'public/publications/source-lift'/ident;cd=ROOT/'content/source-lift'/ident
spec=importlib.util.spec_from_file_location('ymconverter',ROOT/'scripts/convert-einstein-ym.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
pdf=ad/'paper.pdf'
if not pdf.exists():pdf=ROOT.parent.parent/'upload/Yang_Mills_Mathematical_Companion(2).pdf'
doc=fitz.open(pdf);page=doc[456];block=page.get_text('dict')['blocks'][1]
rows=json.loads((ad/'source-block-inventory.json').read_text());row=next(r for r in rows if r['sourcePage']==457 and r['sourceBlock']==1);anchor=row['anchor']
index=json.loads((cd/'index.json').read_text());chapter=next(c for c in index['chapters']if c['slug']==row['chapter']);path=ROOT/chapter['htmlPath'];text=path.read_text();formulas=json.loads((ad/'formula-inventory.json').read_text())
conv=object.__new__(m.Converter);conv.doc=doc;conv.asset_dir=ad;conv.url=f'/publications/source-lift/{ident}';conv.cache={};conv.count=max(int(Path(x['asset']).stem.split('-')[-1])for x in formulas);conv.figures=[];conv.svg={};conv.stats=collections.Counter()
spans=[s for l in block['lines']for s in l['spans']];u,w,h=conv.vector(page,(74,75,539,283),m.spantext(block),allowed_spans=spans)
cols=[76,149,334];rs={}
for s in spans:
 y=round(s['origin'][1]/3)*3;r=rs.setdefault(y,['','','']);j=max([i for i,x in enumerate(cols)if s['bbox'][0]>=x-4]or[0]);r[j]+=s['text']
table='<table><caption>Editorial-amendment table, continued from the preceding source page</caption><thead><tr><th>Source line</th><th>Reading</th><th>Explanation</th></tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+m.esc(m.prose(c))+'</td>'for c in rs[y])+'</tr>'for y in sorted(rs))+'</tbody></table>'
new=f'<figure id="{anchor}" class="sr-formula sr-source-table" data-source-page="457"><div class="sr-formula-scroll"><img src="{u}" alt="{m.esc(m.prose(m.spantext(block)))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><details class="sr-formula-transcript"><summary>Accessible table transcription</summary>{table}</details></figure>'
pat=r'<(section|figure|p)\b(?=[^>]*\bid="'+re.escape(anchor)+r'")[^>]*>[\s\S]*?</\1>'
text,n=re.subn(pat,lambda _:new,text,count=1);assert n==1,(anchor,path)
path.write_text(text);(ad/'formula-inventory.json').write_text(json.dumps(formulas+conv.figures,ensure_ascii=False)+'\n')
(ROOT/'docs/einstein-ym/table-continuation.json').write_text(json.dumps({'id':ident,'sourcePage':457,'sourceBlock':1,'anchor':anchor,'columns':['Source line','Reading','Explanation'],'asset':u,'status':'Exact source vector plus inherited three-column text transcription.'},indent=2)+'\n')
print(ident,'continued amendment table restored',flush=True)
