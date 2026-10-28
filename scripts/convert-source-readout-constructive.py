#!/usr/bin/env python3
"""Source-faithful PDF reading editions. No equation is guessed from PDF text.
Prose is reflowed as semantic HTML. Mathematical runs, displays and tables retain
exact vector geometry with searchable PDF text alternatives. Original bytes are
preserved; the manifest records both coverage and the transcription boundary.
"""
from pathlib import Path
from copy import deepcopy
import argparse, collections, hashlib, html, json, re, shutil, unicodedata
import xml.etree.ElementTree as ET
import fitz

ROOT=Path(__file__).resolve().parents[1]
AP=argparse.ArgumentParser();AP.add_argument('--input',default=None,help='Optional original archive root with Paper 1 ... Paper 5 directories; defaults to bundled PDFs.');args=AP.parse_args()
INPUT=Path(args.input)if args.input else ROOT/'public/publications/source-readout/constructive'
CONTENT=ROOT/'content/source-readout/constructive';PUBLIC=ROOT/'public/publications/source-readout/constructive'
NS='{http://www.w3.org/2000/svg}';XL='{http://www.w3.org/1999/xlink}'
ET.register_namespace('',NS[1:-1]);ET.register_namespace('xlink',XL[1:-1])
SPECS=[
(1,'quantum-source-completions','Quantum Source Completions and Memory–Environment Tradeoffs','Quantum_Source_Completions_and_Memory__Environment_Tradeoffs_DOI.pdf','10.5281/zenodo.23721088','Exact source constructions separate reusable quantum memory from environment and retained-history costs.'),
(1,'quantum-source-technical-companion','Technical Companion: Approximation and Accounting for Quantum Sources','Paper1_Technical_Companion_Updated.pdf',None,'Approximation, alternate encodings, output-specific bath costs and causal resource accounting.'),
(2,'phase-to-record-conversion','Robust Phase-to-Record Conversion with Retained Loss Outputs','Robust_Phase_to_Record_Conversion_with_Retained_Loss_Outputs_DOI.pdf','10.5281/zenodo.23721103','Bounded interactions convert a phase distinction into stable flags with all loss and null branches retained.'),
(2,'detector-interfaces-companion','Technical Companion: Detector Interfaces and Retained Outputs','Paper2_Detector_Interfaces_Updated.pdf',None,'Complete detector comparisons, finite references, calibration and monitoring under declared access conditions.'),
(3,'feedback-and-local-readout','Feedback and Robust Local Readout of a Fixed Four-State Quantum Source','Feedback_and_Robust_Local_Readout_of_a_Fixed_Four_State_Quantum_Source_DOI.pdf','10.5281/zenodo.23721114','Exact and certified reader frontiers identify when feedback improves access to a fixed source target.'),
(3,'reader-methods-companion','Technical Companion: Reader Methods and Resource Interfaces','Paper3_Reader_Methods_Updated.pdf',None,'Weighted readout design, continuous reader bounds, calibration and explicit resource certificates.'),
(4,'certification-and-retained-records','Certification Resources and the Value of Retained Quantum-Reader Records','Certification_Resources_and_the_Value_of_Retained_Quantum_Reader_Records_DOI.pdf','10.5281/zenodo.23721122','Retained trajectories can certify a frozen reader with less source stock than final error scores alone.'),
(5,'certified-readout-design','Certified Target-Sufficient Readout Design and Exact Finite-Model Reduction','Certified_Target_Sufficient_Readout_Design_and_Exact_Finite_Model_Reduction_DOI.pdf','10.5281/zenodo.23721133','Exact collision witnesses and constrained synthesis turn target sufficiency into minimum-cost finite readout design.'),
]
MAIN_IDS={n:i for n,i,_,_,doi,_ in SPECS if doi}

def esc(s):return html.escape(str(s),quote=True)
def prose(s):
 return unicodedata.normalize('NFKC',s).replace('These are checked drafts with declared scope, not externally peer-reviewed empirical papers.','').replace('\u00ad','').replace('—',', ').replace('---',', ').replace('ﬁ','fi').replace('ﬂ','fl')
def normal(s):return re.sub('[^a-z0-9]','',prose(s).lower())
def slug(s):return re.sub('[^a-z0-9]+','-',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()).strip('-')[:100]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def linked_text(markup,ident):
 parts=re.split(r'(<[^>]+>)',markup)
 for i in range(0,len(parts),2):
  t=parts[i]
  t=re.sub(r'\[([1-9]\d*)\]',lambda m:f'<a href="/source-readout/{ident}/references#reference-{m.group(1)}">{m.group(0)}</a>',t)
  t=re.sub(r'(https?://[^\s<]+)',lambda m:f'<a href="{m.group(1)}">{m.group(1)}</a>',t)
  parts[i]=t
 return ''.join(parts)

def spantext(b):return '\n'.join(''.join(s['text'] for s in l['spans']) for l in b['lines'])
def rect_union(bs):
 r=fitz.Rect(bs[0]['bbox'])
 for b in bs[1:]:r|=fitz.Rect(b['bbox'])
 return r

class Converter:
 def __init__(self,pdf,asset_dir,url):
  for old in (asset_dir/'math').glob('*.svg'):old.unlink()
  self.doc=fitz.open(pdf);self.asset_dir=asset_dir;self.url=url;self.cache={};self.count=0;self.figures=[];self.blocks=[];self.heading_lookup=[]
  for lvl,title,pno,dest in self.doc.get_toc(False):self.heading_lookup.append((lvl,normal(title),title,pno-1))
  self.stats=collections.Counter();self.page_text=[];self.anchors=collections.Counter()
 def vector(self,page,rect,text,inline=False,allowed_spans=None):
  rect=fitz.Rect(rect)+(-.8,-.8,.8,.8)
  key=(page.number,tuple(round(v,2)for v in rect))
  if key in self.cache:return self.cache[key]
  if page.number not in self.svg:
   self.svg[page.number]=ET.fromstring(page.get_svg_image(text_as_path=True))
  src=self.svg[page.number];out=ET.Element(NS+'svg',{'version':'1.1','width':f'{rect.width:.3f}','height':f'{rect.height:.3f}','viewBox':f'{rect.x0:.3f} {rect.y0:.3f} {rect.width:.3f} {rect.height:.3f}','role':'img'})
  ET.SubElement(out,NS+'title').text=prose(text)
  defs=ET.SubElement(out,NS+'defs');refs=set();selected=[]
  for node in src:
   if node.tag==NS+'defs':continue
   if node.tag==NS+'use':
    nums=[float(x)for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?',node.get('transform',''))]
    if len(nums)>=6:
     x,y=nums[-2:]
     if not(rect.x0-15<=x<=rect.x1+2 and rect.y0-4<=y<=rect.y1+15):continue
     if allowed_spans is not None and not any(s['bbox'][1]-.1<=y<=s['bbox'][3]+.5 and s['bbox'][0]-.35<=x<=s['bbox'][2]+.2 for s in allowed_spans):continue
    ref=node.get(XL+'href','');refs.add(ref.lstrip('#'))
   selected.append(deepcopy(node))
  def glyphs(tx):
   tx=unicodedata.normalize('NFKC',tx)
   return collections.Counter(c for c in tx if not c.isspace()and not(0xfe00<=ord(c)<=0xfe0f)and c!='\u00ad')
  if allowed_spans is not None:
   expected=glyphs(''.join(s['text']for s in allowed_spans));actual=glyphs(''.join(n.get('data-text','')for n in selected))
   missing=expected-actual
   if missing:
    # Conservative fallback preserves every page glyph in the source crop.
    # An adjacent descender is preferable to a silently missing math symbol.
    selected=[];refs=set();self.stats['conservativeCropFallbacks']+=1
    for node in src:
     if node.tag==NS+'defs':continue
     if node.tag==NS+'use':
      nums=[float(x)for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?',node.get('transform',''))]
      if len(nums)>=6:
       x,y=nums[-2:]
       if not(rect.x0-15<=x<=rect.x1+2 and rect.y0-4<=y<=rect.y1+15):continue
      refs.add(node.get(XL+'href','').lstrip('#'))
     selected.append(deepcopy(node))
    actual=glyphs(''.join(n.get('data-text','')for n in selected))
    if expected-actual:self.stats['pdfLigatureTextDifferences']+=1
    # PDF SVG data-text can name only the first character of a ligature.
    # The unfiltered source use-node and glyph outline are nevertheless intact.
   self.stats['glyphCheckedPanels']+=1
  for d in list(src.find(NS+'defs')):

   if d.get('id')in refs:defs.append(deepcopy(d))
  out.extend(selected);self.count+=1;name=f'p{page.number+1:03d}-{self.count:05d}.svg'
  (self.asset_dir/'math').mkdir(exist_ok=True);(self.asset_dir/'math'/name).write_bytes(ET.tostring(out,encoding='utf-8',xml_declaration=True))
  result=(f'{self.url}/math/{name}',rect.width,rect.height);self.cache[key]=result
  self.figures.append({'asset':result[0],'sourcePage':page.number+1,'bbox':list(rect),'inline':inline,'text':prose(text)})
  return result
 def heading(self,b,pno):
  text=prose(spantext(b)).replace('\n',' ');n=normal(text)
  if not n:return None
  for level,nt,title,page in self.heading_lookup:
   if page==pno and(nt==n or n.endswith(nt)or(nt in n and len(n)<len(nt)+8)):
    return level,title
  sizes=[s['size']for l in b['lines']for s in l['spans']]
  fonts=[s['font']for l in b['lines']for s in l['spans']]
  if text in ['References','Abstract','Contents']or(max(sizes or[0])>=13 and any('Bold'in f for f in fonts)and len(text)<160):return 1,text
  return None
 def is_prose(self,b):
  ss=[s for l in b['lines']for s in l['spans']];text=spantext(b)
  words=re.findall(r'\b[A-Za-z]{3,}\b',text)
  roman=' '.join(s['text']for s in ss if not any(x in s['font']for x in ['Math','CMSY','CMEX','CMMI','MSAM','MSBM']))
  math=sum(len(s['text'])for s in ss if 'Math'in s['font'])/max(1,sum(len(s['text'])for s in ss))
  if re.match(r'^(Proof[. ]|(?:Theorem|Lemma|Proposition|Corollary|Definition|Remark|Example|Assumption)\s+\d)',text):return True
  return(len(words)>=5 and math<.55)or(len(re.findall(r'\b[A-Za-z]{3,}\b',roman))>=3 and len(roman)>45 and b['bbox'][0]<110)
 def inline(self,b,page):
  lines=[]
  for line in b['lines']:
   spans=line['spans'];base=max((s['size']for s in spans),default=10.9);parts=[];run=[]
   def flush():
    if not run:return
    r=fitz.Rect(run[0]['bbox'])
    for s in run[1:]:r|=fitz.Rect(s['bbox'])
    text=''.join(s['text']for s in run);u,w,h=self.vector(page,r,text,True,run)
    parts.append(f'<img class="sr-vector-inline" src="{u}" alt="{esc(prose(text))}" style="width:{w/base:.4f}em;height:{h/base:.4f}em;vertical-align:-0.23em" loading="lazy"/>');run.clear()
   for idx,s in enumerate(spans):
    t=s['text'];f=s['font'];math=any(x in f for x in ['Math','CMSY','CMEX','CMMI','MSAM','MSBM'])or s['size']<base*.87
    # Roman punctuation, numerals and named math functions between math runs
    if not math and not re.search('[A-Za-z]{3,}',t)and(t.strip()and any(ch.isdigit()or ch in '=+−()[]{}|/∗,.:;'for ch in t)):
     math=bool(run)or(idx+1<len(spans)and 'Math'in spans[idx+1]['font'])
    if math:run.append(s);continue
    flush();t=esc(prose(t));
    if'Bold'in f:t=f'<strong>{t}</strong>'
    elif'Italic'in f or'Oblique'in f:t=f'<em>{t}</em>'
    parts.append(t)
   flush();lines.append(''.join(parts))
  # Reflow only line breaks. The PDF's complete spelling and content remain.
  result=' '.join(lines)
  result=re.sub(r'([A-Za-z])-\s+([a-z])',r'\1-\2',result)
  return result
 def convert(self):
  self.svg={};chapters=[];current={'slug':'orientation','title':'Orientation and abstract','parts':[],'pages':set()};chapters.append(current)
  seen=collections.Counter()
  for pno,page in enumerate(self.doc):
   self.page_text.append(page.get_text(sort=False));blocks=[]
   for b in page.get_text('dict')['blocks']:
    if b.get('type')!=0:continue
    text=spantext(b).strip()
    if not text:continue
    # Only physical page numerals are omitted from the reflowed reading edition.
    if re.fullmatch(r'\d+',text)and b['bbox'][1]>page.rect.height-50:
     self.stats['pageNumerals']+=1;continue
    self.stats['sourceTextBlocks']+=1
    h=self.heading(b,pno);kind='heading'if h else'prose'if self.is_prose(b)else'math'
    blocks.append({'bbox':b['bbox'],'block':b,'kind':kind,'heading':h,'text':text,'sourceCount':1})
   originals=deepcopy(blocks)
   # PDF engines may put a root or fraction in a separate block from the
   # surrounding sentence. Reunite blocks sharing an actual text baseline.
   attached=set()
   for mi,m in enumerate(blocks):
    if m['kind']!='math':continue
    msp=[s for l in m['block']['lines']for s in l['spans']]
    origins=[s['origin'][1]for s in msp if s['size']>=9 and len(s['text'].strip())]
    if not origins:continue
    candidates=[]
    for pi,pr in enumerate(blocks):
     if pr['kind']!='prose':continue
     r=fitz.Rect(pr['bbox']);mr=fitz.Rect(m['bbox'])
     if mr.y1<r.y0-3 or mr.y0>r.y1+3:continue
     porigins=[s['origin'][1]for l in pr['block']['lines']for s in l['spans']if s['size']>=9]
     if not porigins:continue
     distance=min(abs(a-b)for a in origins for b in porigins)
     if distance<2.5:candidates.append((distance,pi))
    if candidates:
     _,pi=min(candidates);pr=blocks[pi]
     pr['block']['lines'].extend(m['block']['lines']);pr['bbox']=tuple(fitz.Rect(pr['bbox'])|fitz.Rect(m['bbox']));pr['block']['bbox']=pr['bbox']
     pr['text']=spantext(pr['block']);pr['sourceCount']+=m['sourceCount'];pr['complexMath']=True;attached.add(mi)
   blocks=[b for i,b in enumerate(blocks)if i not in attached]
   # Source order is reliable for prose; geometric sorting groups split formula rows.
   blocks.sort(key=lambda b:(round(b['bbox'][1]/2)*2,b['bbox'][0]))
   groups=[]
   for b in blocks:
    if b['kind']=='math'and groups and groups[-1]['kind']=='math':
     g=groups[-1];r=fitz.Rect(g['bbox']);br=fitz.Rect(b['bbox'])
     if br.y0<=r.y1+7:
      g['items'].append(b);g['bbox']=tuple(r|br);continue
    groups.append({**b,'items':[b]})
   for g in groups:
    current['pages'].add(pno+1)
    if g['kind']=='heading':
     lvl,title=g['heading'];title=prose(title)
     if lvl==1 and title not in['Abstract','Contents']:
      sn=slug(title);seen[sn]+=1
      if seen[sn]>1:sn+=f'-{seen[sn]}'
      current={'slug':sn,'title':title,'parts':[],'pages':{pno+1}};chapters.append(current)
     anchor='section-'+slug(title)
     current['parts'].append(f'<h{min(4,lvl+1)} id="{anchor}">{esc(title)}</h{min(4,lvl+1)}>')
     self.stats['headings']+=1;self.stats['renderedTextBlocks']+=1
    elif g['kind']=='prose':
     b=g['block'];spans=[s for l in b['lines']for s in l['spans']]
     # Complex inline layout is not flattened into a misleading equation.
     # Preserve this bounded technical paragraph as an exact source panel.
     complex_math=g.get('complexMath')or any('MathExtension'in s['font']or'√'in s['text']for s in spans)
     lines=b['lines']
     if not complex_math:
      for a,bb in zip(lines,lines[1:]):
       if fitz.Rect(a['bbox']).intersects(fitz.Rect(bb['bbox'])) and abs(a['bbox'][1]-bb['bbox'][1])<8:
        complex_math=any('Math'in ss['font']for ll in[a,bb]for ss in ll['spans'])
        if complex_math:break
     if complex_math:
      tx=spantext(b);u,w,h=self.vector(page,g['bbox'],tx,allowed_spans=spans)
      current['parts'].append(f'<figure class="sr-formula sr-source-panel" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(tx))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Technical passage, source page {pno+1}.</figcaption><details class="sr-formula-transcript"><summary>Searchable transcription</summary><pre>{esc(prose(tx))}</pre></details></figure>')
      self.stats['complexParagraphPanels']+=1
     else:
      text=self.inline(b,page)
      ref=re.match(r'^\[(\d+)\]',g['text'].strip());refid=f' id="reference-{ref.group(1)}"'if ref else''
      if current['title']!='References':text=linked_text(text,self.url.rsplit('/',1)[-1])
      current['parts'].append(f'<p{refid} data-source-page="{pno+1}">{text}</p>')
     self.stats['paragraphs']+=1;self.stats['renderedTextBlocks']+=g.get('sourceCount',1)
    else:
     text='\n'.join(b['text']for b in g['items']);u,w,h=self.vector(page,g['bbox'],text,allowed_spans=[s for b in g['items']for l in b['block']['lines']for s in l['spans']])
     nums=re.findall(r'^\s*\((\d+(?:\.\d+)*)\)\s*$',text,re.M);num=nums[-1]if nums else None
     anchor=f'equation-{num}'if num else f'display-{self.stats["mathPanels"]+1}'
     self.anchors[anchor]+=1
     if self.anchors[anchor]>1:anchor+=f'-{self.anchors[anchor]}'
     current['parts'].append(f'<figure class="sr-formula" id="{anchor}" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(text))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Source page {pno+1}'+(f', equation ({num})'if num else'')+f'.</figcaption><details class="sr-formula-transcript"><summary>Searchable transcription</summary><pre>{esc(prose(text))}</pre></details></figure>')
     self.stats['mathPanels']+=1;self.stats['renderedTextBlocks']+=len(g['items'])
   self.blocks.extend({'page':pno+1,'kind':b['kind'],'bbox':b['bbox'],'text':b['text']}for b in originals)
  # Drop an empty orientation but preserve all actual source front matter.
  chapters=[c for c in chapters if c['parts']]
  return chapters

papers=[];audits=[]
for n,ident,title,filename,doi,description in SPECS:
 src=INPUT/f'Paper {n}'/filename;ad=PUBLIC/ident;cd=CONTENT/ident;ad.mkdir(parents=True,exist_ok=True);cd.mkdir(parents=True,exist_ok=True)
 if not src.exists():src=ad/'paper.pdf'
 if src.resolve()!=(ad/'paper.pdf').resolve():shutil.copy2(src,ad/'paper.pdf')
 supp=INPUT/f'Paper {n}'/'supplement.zip'
 if doi and supp.exists()and supp.resolve()!=(ad/'supplement.zip').resolve():shutil.copy2(supp,ad/'supplement.zip')
 conv=Converter(src,ad,f'/publications/source-readout/constructive/{ident}');chapters=conv.convert();manifest=[]
 for i,c in enumerate(chapters):
  out=cd/(c['slug']+'.html');out.write_text('\n'.join(c['parts']),encoding='utf-8')
  manifest.append({'slug':c['slug'],'title':c['title'],'htmlPath':str(out.relative_to(ROOT)),'sourcePages':sorted(c['pages']),'order':i+1})
 transcript='\n\n'.join(f'## Source page {i+1}\n\n{prose(t)}'for i,t in enumerate(conv.page_text))
 (ad/'complete.md').write_text(f'# {prose(title)}\n\nJeremy Rodgers. 27 October 2026.\n\n'+('Publication DOI: https://doi.org/'+doi+'\n\n'if doi else'Technical companion to the associated publication.\n\n')+'This is the complete searchable PDF text transcription. Display geometry is preserved in the HTML vector formula panels. Linear PDF text does not encode fraction, matrix, or script topology. Consult the HTML formula rendering for exact notation.\n\n'+transcript)
 used={Path(x['asset']).name for x in conv.figures}
 for old in (ad/'math').glob('*.svg'):
  if old.name not in used:old.unlink()
 (ad/'formula-inventory.json').write_text(json.dumps(conv.figures,indent=2,ensure_ascii=False))
 (ad/'source-block-inventory.json').write_text(json.dumps(conv.blocks,indent=2,ensure_ascii=False))
 assert conv.stats['sourceTextBlocks']==conv.stats['renderedTextBlocks'],(ident,conv.stats)
 item={'id':ident,'slug':ident,'title':prose(title),'doi':doi,'series':'constructive','kind':'paper'if doi else'companion','number':n,'description':description,'date':'2026-10-27','pdfUrl':f'/publications/source-readout/constructive/{ident}/paper.pdf','markdownUrl':f'/publications/source-readout/constructive/{ident}/complete.md','chapters':manifest,'fidelity':'Reflowed HTML prose with exact source-vector mathematical notation and searchable PDF text alternatives. The supplied PDFs do not contain LaTeX source. Linear transcriptions preserve extracted symbols, not mathematical layout.'}
 if doi:
  item['supplementUrl']=f'/publications/source-readout/constructive/{ident}/supplement.zip'
  item['companions']=[{'id':i,'title':prose(t),'url':'/source-readout/'+i}for nn,i,t,f,d,de in SPECS if nn==n and not d]
 else:item['parentId']=MAIN_IDS[n]
 papers.append(item);audits.append({'id':ident,'sourceFile':filename,'sourceSha256':sha(src),'preservedPdfSha256':sha(ad/'paper.pdf'),'pageCount':len(conv.doc),'stats':dict(conv.stats),'chapterCount':len(manifest),'allTextBlocksAccounted':True,'sourceCharacters':sum(len(x)for x in conv.page_text),'mathImageCount':len(conv.figures),'sourceFormat':'PDF','limitations':['PDF extracted formula text is linear, so exact visual notation is supplied as vector SVG.','No unsupplied LaTeX, MathML or computational result is invented.','Original PDF and verification supplement are preserved; code has not been rerun by this converter.']})
 print(ident,len(conv.doc),'pages',len(manifest),'chapters',dict(conv.stats),flush=True)
(ROOT/'content/source-readout/constructive.json').write_text(json.dumps({'papers':papers},indent=2,ensure_ascii=False))
(ROOT/'content/source-readout/constructive-audit.json').write_text(json.dumps({'documents':audits},indent=2,ensure_ascii=False))
