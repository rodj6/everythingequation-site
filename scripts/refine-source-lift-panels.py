#!/usr/bin/env python3
"""Split large PDF extraction blocks into readable paragraph-sized objects.
The source's complete text/vector glyphs are retained, while a PDF block that
happens to span a page is never used as a page-sized reading surrogate.
"""
from pathlib import Path
import importlib.util,json,re,collections
import fitz
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('ymconverter',ROOT/'scripts/convert-einstein-ym.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
def refine(ident):
 cd=ROOT/'content/source-lift'/ident;ad=ROOT/'public/publications/source-lift'/ident
 index=json.loads((cd/'index.json').read_text());formula=json.loads((ad/'formula-inventory.json').read_text());byasset={f['asset']:f for f in formula}
 pdf=ad/'paper.pdf'
 if not pdf.exists():pdf=ROOT.parent.parent/'upload'/('Shadow_Theory_Yang_Mills_Source_Readout(2).pdf'if ident.endswith('reconstruction')else'Yang_Mills_Mathematical_Companion(2).pdf')
 # Avoid Converter.__init__, which deliberately cleans math before regeneration.
 conv=object.__new__(mod.Converter);conv.doc=fitz.open(pdf);conv.asset_dir=ad;conv.url=f'/publications/source-lift/{ident}';conv.cache={};conv.count=max(int(Path(f['asset']).stem.split('-')[-1])for f in formula);conv.figures=[];conv.svg={};conv.stats=collections.Counter()
 refined=[];remove=set();pending={};source_rows=json.loads((ad/'source-block-inventory.json').read_text());anchor_blocks={}
 for row in source_rows:anchor_blocks.setdefault((row['sourcePage'],row['anchor']),set()).add(row['sourceBlock'])
 for chapter in index['chapters']:
  p=ROOT/chapter['htmlPath'];text=p.read_text()
  pattern=r'<figure(?=[^>]*\bsr-source-panel\b)[^>]*>[\s\S]*?</figure>'
  def rewrite(m):
   markup=m[0];u=re.search(r'<img[^>]*src="([^"]+)"',markup)[1];f=byasset[u];rect=fitz.Rect(f['bbox']);h=rect.height
   if h<=120:return markup
   page=conv.doc[f['sourcePage']-1];lines=[]
   anchor=re.search(r'\bid="([^"]+)"',markup)[1];keep=anchor_blocks[(f['sourcePage'],anchor)]
   for bi,block in enumerate(page.get_text('dict')['blocks']):
    if bi not in keep:continue
    if block.get('type')!=0:continue
    for l in block['lines']:
     spans=list(l['spans'])
     if spans:lines.append({'bbox':tuple(fitz.Rect(spans[0]['bbox'])),'spans':spans})
   spans=[s for l in lines for s in l['spans']]
   if not spans:return markup
   # Cuts live in a completely blank horizontal interval between glyph boxes.
   intervals=sorted((s['bbox'][1],s['bbox'][3])for s in spans if s['text'].strip())
   unions=[]
   for a,b in intervals:
    if unions and a<=unions[-1][1]+.04:unions[-1][1]=max(unions[-1][1],b)
    else:unions.append([a,b])
   safe=[(a[1]+b[0])/2 for a,b in zip(unions,unions[1:])if b[0]-a[1]>.2]
   # Paragraph indents are primary boundaries; a long derivation additionally
   # breaks at a blank interval about every 90 points.
   candidates=[]
   for l in lines:
    first=min(l['spans'],key=lambda s:s['bbox'][0]);tx=first['text'].strip()
    if 83<=first['bbox'][0]<=99 and re.search(r'[A-Za-z]{5,}',tx)and not 'Math'in first['font']:
     y=min(s['bbox'][1]for s in l['spans']);near=[v for v in safe if y-7<v<y]
     if near:candidates.append(max(near))
   cuts=[rect.y0]
   for y in sorted(set(candidates)):
    if y-cuts[-1]>=22:cuts.append(y)
   if rect.y1-cuts[-1]<15 and len(cuts)>1:cuts.pop()
   cuts.append(rect.y1)
   final=[cuts[0]]
   for end in cuts[1:]:
    while end-final[-1]>155:
     pool=[v for v in safe if final[-1]+60<v<min(final[-1]+130,end-20)]
     if not pool:break
     final.append(min(pool,key=lambda v:abs(v-(final[-1]+95))))
    final.append(end)
   if len(final)<3:return markup
   idm=re.search(r'\bid="([^"]+)"',markup);anchor=idm[1]if idm else''
   parts=[]
   for a,b in zip(final,final[1:]):
    selected=[s for s in spans if a-.1<=s['bbox'][1]and s['bbox'][3]<=b+.1]
    if not selected:continue
    r=fitz.Rect(selected[0]['bbox'])
    for s in selected[1:]:r|=fitz.Rect(s['bbox'])
    chunklines=[]
    for l in lines:
     ss=[s for s in l['spans']if s in selected]
     if ss:
      rr=fitz.Rect(ss[0]['bbox'])
      for s in ss[1:]:rr|=fitz.Rect(s['bbox'])
      chunklines.append({'bbox':tuple(rr),'spans':ss})
    chunklines.sort(key=lambda l:(round(l['bbox'][1]/2)*2,l['bbox'][0]))
    block={'type':0,'bbox':tuple(r),'lines':chunklines};tx=mod.spantext(block)
    complex_math=any('MathExtension'in s['font']or'√'in s['text']for s in selected)
    # Unambiguous prose returns to live selectable reading text. Fractions
    # and coupled display layouts retain exact geometry in bounded panels.
    if conv.is_prose(block)and not complex_math and r.height<110:
     parts.append('<p data-source-page="'+str(f['sourcePage'])+'">'+conv.inline(block,page)+'</p>')
    else:
     asset,w,hh=conv.vector(page,r,tx,allowed_spans=selected)
     parts.append(f'<figure class="sr-formula" data-source-page="{f["sourcePage"]}"><div class="sr-formula-scroll"><img src="{asset}" alt="{mod.esc(mod.prose(tx))}" width="{w:.2f}" height="{hh:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><details class="sr-formula-transcript"><summary>Searchable transcription</summary><pre>{mod.esc(mod.prose(tx))}</pre></details></figure>')
   # Verify every original selected span belongs to exactly one cut interval.
   assert all(sum(a-.1<=s['bbox'][1]and s['bbox'][3]<=b+.1 for a,b in zip(final,final[1:]))==1 for s in spans if s['text'].strip()),(ident,f['sourcePage'],u)
   refined.append({'sourcePage':f['sourcePage'],'originalAsset':u,'parts':len(parts),'anchor':anchor});remove.add(u)
   return f'<section class="sr-derivation" id="{anchor}" data-source-page="{f["sourcePage"]}">'+''.join(parts)+'</section>'
  text=re.sub(pattern,rewrite,text);pending[p]=text
  conv.svg.clear()
 for p,text in pending.items():p.write_text(text)
 formula=[f for f in formula if f['asset']not in remove]+conv.figures
 (ad/'formula-inventory.json').write_text(json.dumps(formula,ensure_ascii=False)+'\n')
 for u in remove:(ROOT/'public'/u.lstrip('/')).unlink(missing_ok=True)
 (ROOT/'docs/einstein-ym'/f'{ident}-panel-refinement.json').write_text(json.dumps({'id':ident,'refined':refined,'newFormulaAssets':len(conv.figures),'sourceSpanCoverage':'Every selected span belongs to exactly one output interval; source-block anchors retained.'},indent=2)+'\n')
 print(ident,len(refined),'overlarge extraction blocks refined',len(conv.figures),'new bounded assets',flush=True)
if __name__=='__main__':
 import argparse
 ap=argparse.ArgumentParser();ap.add_argument('--id',required=True);args=ap.parse_args();refine(args.id)
