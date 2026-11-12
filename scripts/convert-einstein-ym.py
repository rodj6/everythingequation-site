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
 return unicodedata.normalize('NFKC',s).replace('\u00ad','').replace('—',', ').replace('---',', ').replace('ﬁ','fi').replace('ﬂ','fl')
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
  out.extend(selected);self.count+=1;name=f'p{page.number+1:03d}-{self.count:06d}.svg'
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
    elif g['kind']=='table':
     tx=g['text'];spans=[sp for l in g['block']['lines']for sp in l['spans']];u,w,h=self.vector(page,g['bbox'],tx,allowed_spans=spans)
     rows=g['tableCells'];table_html='<table><caption>Table transcription, source page '+str(pno+1)+'</caption><tbody>'+''.join('<tr>'+''.join('<'+('th'if ri==0 else'td')+'>'+esc(prose(cell or''))+'</'+('th'if ri==0 else'td')+'>'for cell in row)+'</tr>'for ri,row in enumerate(rows))+'</tbody></table>'
     self.current['parts'].append(f'<figure id="{anchor}" class="sr-formula sr-source-table" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(tx))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Table, source page {pno+1}.</figcaption><details class="sr-formula-transcript"><summary>Accessible table transcription</summary>{table_html}</details></figure>')
     self.stats['tables']+=1
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

# The PDF-only source-lift editions reuse the existing exact-vector policy.
# This runner retains every non-administrative source block, provides stable
# block-level destinations, and inserts editorial orientation between units.
class SourceLiftConverter(Converter):
 def __init__(self,pdf,asset_dir,url,ident,title,description,limit=None):
  super().__init__(pdf,asset_dir,url)
  self.ident=ident;self.title=title;self.description=description;self.limit=limit
  self.source_rows=[];self.omissions=[];self.output_rows=[]
  self.sections=[];self.svg={}
  self.toc=self.doc.get_toc(False)
  self.body_start=min(x[2]for x in self.toc)
  self.major=[(i+1,title,p-1)for i,(level,title,p,*_)in enumerate(self.toc)if level==1]
  self.current=None;self.chapters=[];self.part=0;self.current_major=None
 def heading(self,b,pno):
  h=super().heading(b,pno)
  if h:return h
  tx=prose(spantext(b)).replace('\n',' ').strip()
  spans=[s for l in b['lines']for s in l['spans']]
  if not spans:return None
  if len(tx)<190 and re.match(r'^(?:\d+\.\d+(?:\.\d+)*|[A-J]\.\d+)\s',tx)and any('Bold'in s['font'] for s in spans):
   return 2,tx
  return None
 def add_chapter(self,title,pno,source_unit,continuation=False):
  number=len(self.chapters)+1
  self.current={'slug':f'{number:03d}-'+slug(title),'title':title,'parts':[],'pages':set(),'sections':[],'sourceUnit':source_unit}
  self.chapters.append(self.current);self.part+=1
  label='Continue the argument'if continuation else'The argument in this chapter'
  if not continuation:
   lead=(f'This chapter develops {title[:1].lower()+title[1:]}. Follow the stated objects, the construction and its proof in order; the formulas retain the exact notation of the supplied edition.')
   if self.ident=='yang-mills-reconstruction':
    lead=(f'{title} is one stage in the source–readout reconstruction. The derivation below keeps the realized data, the operations performed on them and the recovery conditions together. Read it as part of the common Wilson construction, with the local hypotheses retained.')
  else:lead=f'The development of {source_unit} continues here. Keep the notation and hypotheses from the preceding part in force as the proof advances.'
  if not continuation and source_unit=='Abstract and authorship':
   self.current['parts'].append(f'<section class="sr-editorial-orientation"><h2>Read the construction in full</h2><p>{esc(self.description)} The chapters retain the complete mathematical development, with the original notation visible in the vector expressions and its extracted text available for search.</p></section>')
 def convert(self):
  self.svg={};active_major=None;major_start=0;major_parts=1;seen_headings=collections.Counter()
  last_prose=None
  for pno,page in enumerate(self.doc):
   if self.limit and pno>=self.limit:break
   self.page_text.append(page.get_text(sort=False))
   blocks=[]
   if pno in range(1,self.body_start-1):
    self.omissions.append({'sourcePage':pno+1,'reason':'Administrative table of contents, replaced by the complete web navigation.'});continue
   if pno==0:
    self.add_chapter('The contribution and the reading path',pno,'Abstract and authorship')
    # The abstract and attribution are substantive; the duplicated title is not.
    textblocks=[b for b in page.get_text('dict')['blocks']if b.get('type')==0]
    absblock=next((b for b in textblocks if spantext(b).strip()=='Abstract'),None)
    ystart=absblock['bbox'][1]if absblock else 150
   else:ystart=60
   for bidx,b in enumerate(page.get_text('dict')['blocks']):
    if b.get('type')!=0:
     if b.get('type')==1:
      # Preserve any actual raster figure separately, never as a page substitute.
      name=f'p{pno+1:03d}-raster-{bidx}.png';target=self.asset_dir/'math'/name;target.parent.mkdir(exist_ok=True)
      target.write_bytes(b['image']);self.source_rows.append({'sourcePage':pno+1,'sourceBlock':bidx,'kind':'raster','bbox':list(b['bbox']),'asset':self.url+'/math/'+name})
      self.current['parts'].append(f'<figure data-source-page="{pno+1}"><img src="{self.url}/math/{name}" alt="Figure from the source construction, page {pno+1}" loading="lazy"/></figure>')
     continue
    text=spantext(b).strip()
    if not text:continue
    if b['bbox'][1]<ystart:
     self.omissions.append({'sourcePage':pno+1,'sourceBlock':bidx,'text':text,'reason':'Repeated running header or duplicated title/front matter.'});continue
    if re.fullmatch(r'\d+|[ivx]+',text)and b['bbox'][1]>720:
     self.omissions.append({'sourcePage':pno+1,'sourceBlock':bidx,'text':text,'reason':'Physical page numeral, retained in source locators.'});continue
    h=self.heading(b,pno);kind='heading'if h else'prose'if self.is_prose(b)else'math'
    blocks.append({'bbox':b['bbox'],'block':b,'kind':kind,'heading':h,'text':text,'sourceCount':1,'sourceBlocks':[bidx]})
   originals=deepcopy(blocks)
   # PDF producers may split the continuation of a radical or fraction into
   # another PROSE block, not merely a math block. Reunite any overlapping
   # same-baseline fragments before either prose reflow or vector extraction.
   joined=True
   while joined:
    joined=False
    for ai,a in enumerate(blocks):
     if a['kind']=='heading':continue
     for bi in range(ai+1,len(blocks)):
      b=blocks[bi]
      if b['kind']=='heading':continue
      ar,br=fitz.Rect(a['bbox']),fitz.Rect(b['bbox']);inter=ar&br
      if inter.height<4 or inter.width<3:continue
      ao=[sp['origin'][1]for ln in a['block']['lines']for sp in ln['spans']if sp['size']>9 and sp['text'].strip()]
      bo=[sp['origin'][1]for ln in b['block']['lines']for sp in ln['spans']if sp['size']>9 and sp['text'].strip()]
      if not ao or not bo or min(abs(x-y)for x in ao for y in bo)>=2.5:continue
      a['block']['lines'].extend(b['block']['lines']);a['bbox']=tuple(ar|br);a['block']['bbox']=a['bbox'];a['text']=spantext(a['block']);a['sourceBlocks']+=b['sourceBlocks'];a['sourceCount']+=b['sourceCount'];a['complexMath']=True
      if b['kind']=='prose':a['kind']='prose'
      blocks.pop(bi);joined=True;break
     if joined:break
   # A ruled table is one mathematical object. Preserve the exact vector table
   # and an accessible row/column extraction, not an unstructured sequence of cells.
   tables=[]
   rules=sorted({round(d['rect'].y0,3)for d in page.get_drawings()if d['rect'].width>340 and d['rect'].height<.2 and 60<d['rect'].y0<735})
   ri=0
   while ri+1<len(rules):
    top,under=rules[ri:ri+2]
    if not 8<under-top<35:ri+=1;continue
    bottom=rules[ri+2]if ri+2<len(rules)else 737
    header=[sp for bl in page.get_text('dict')['blocks']if bl.get('type')==0 for ln in bl['lines']for sp in ln['spans']if top<sp['bbox'][1]<under and re.search(r'[A-Za-z]{3,}',sp['text'])]
    starts=sorted({round(sp['bbox'][0],1)for sp in header})
    starts=[x for j,x in enumerate(starts)if j==0 or x-starts[j-1]>22]
    if 2<=len(starts)<=5:
     tr=fitz.Rect(70,top-.3,543,bottom+.3)
     rowmap={}
     for bl in page.get_text('dict')['blocks']:
      if bl.get('type')!=0:continue
      for ln in bl['lines']:
       for sp in ln['spans']:
        if not(tr.y0<=sp['bbox'][1]and sp['bbox'][3]<=tr.y1):continue
        y=round(sp['origin'][1]/3)*3;row=rowmap.setdefault(y,['']*len(starts));x=sp['bbox'][0]
        col=max([j for j,start in enumerate(starts)if x>=start-3]or[0]);row[col]+=sp['text']
     class Table:
      def __init__(self,box,rows):self.bbox=tuple(box);self.rows=rows
      def extract(self):return self.rows
     tables.append(Table(tr,[rowmap[y]for y in sorted(rowmap)]))
    ri+=3
   for table in tables:
    tr=fitz.Rect(table.bbox);members=[]
    for b in blocks:
     br=fitz.Rect(b['bbox'])
     cx,cy=(br.x0+br.x1)/2,(br.y0+br.y1)/2
     if tr.x0-2<=cx<=tr.x1+2 and tr.y0-2<=cy<=tr.y1+2:members.append(b)
    if len(members)<2:continue
    sb=[n for b in members for n in b['sourceBlocks']]
    if len(sb)!=len(set(sb)):continue
    bb=tr
    for b in members:bb|=fitz.Rect(b['bbox'])
    block={'type':0,'bbox':tuple(bb),'lines':[l for b in members for l in b['block']['lines']]}
    group={'bbox':tuple(bb),'block':block,'kind':'table','heading':None,'text':spantext(block),'sourceCount':len(sb),'sourceBlocks':sb,'tableCells':table.extract()}
    blocks=[b for b in blocks if b not in members]+[group]
   # Reunite glyph fragments sharing a body baseline before deciding how to render.
   attached=set()
   for mi,m in enumerate(blocks):
    if m['kind']!='math':continue
    origins=[s['origin'][1]for l in m['block']['lines']for s in l['spans']if s['size']>=9 and s['text'].strip()]
    if not origins:continue
    candidates=[]
    for pi,pr in enumerate(blocks):
     if pr['kind']!='prose':continue
     r=fitz.Rect(pr['bbox']);mr=fitz.Rect(m['bbox'])
     if mr.y1<r.y0-3 or mr.y0>r.y1+3:continue
     porigins=[s['origin'][1]for l in pr['block']['lines']for s in l['spans']if s['size']>=9]
     if porigins:
      dist=min(abs(a-b)for a in origins for b in porigins)
      contained=r.x0-1<=mr.x0 and mr.x1<=r.x1+1 and r.y0-1<=mr.y0 and mr.y1<=r.y1+1
      if dist<2.5 or contained:candidates.append((dist if dist<2.5 else 2.4,pi))
    if candidates:
     _,pi=min(candidates);pr=blocks[pi]
     pr['block']['lines'].extend(m['block']['lines']);pr['bbox']=tuple(fitz.Rect(pr['bbox'])|fitz.Rect(m['bbox']));pr['block']['bbox']=pr['bbox']
     pr['text']=spantext(pr['block']);pr['sourceCount']+=m['sourceCount'];pr['sourceBlocks']+=m['sourceBlocks'];pr['complexMath']=True;attached.add(mi)
   blocks=[b for i,b in enumerate(blocks)if i not in attached]
   blocks.sort(key=lambda b:(round(b['bbox'][1]/2)*2,b['bbox'][0]))
   groups=[]
   for b in blocks:
    if b['kind']=='math'and groups and groups[-1]['kind']=='math':
     g=groups[-1]
     if b['bbox'][1]<=g['bbox'][3]+7:
      g['items'].append(b);g['bbox']=tuple(fitz.Rect(g['bbox'])|fitz.Rect(b['bbox']));g['sourceBlocks']+=b['sourceBlocks'];continue
    groups.append({**b,'items':[b]})
   if self.current and len(self.current['pages'])>=8 and active_major and groups and not(groups[0]['kind']=='heading'and groups[0]['heading'][0]==1):
    major_parts+=1;self.add_chapter(f'{active_major} · Part {major_parts}',pno,active_major,True)
   page_anchor=f'source-page-{pno+1}'
   self.current['parts'].append(f'<a id="{page_anchor}"></a>')
   self.current['pages'].add(pno+1)
   for gi,g in enumerate(groups):
    anchor=f'p{pno+1:03d}-block-{g["sourceBlocks"][0]:03d}'
    if g['kind']=='heading':
     lvl,title=g['heading'];title=prose(title)
     if lvl==1 and title not in ['Abstract','Contents']:
      active_major=title;major_parts=1;self.add_chapter(title,pno,title)
     self.current['pages'].add(pno+1)
     hlevel=min(4,lvl+1)
     self.current['parts'].append(f'<h{hlevel} id="{anchor}" data-source-page="{pno+1}">{esc(title)}</h{hlevel}>')
     self.current['sections'].append({'anchor':anchor,'title':title,'level':hlevel})
    elif g['kind']=='table':
     tx=g['text'];spans=[sp for l in g['block']['lines']for sp in l['spans']];u,w,h=self.vector(page,g['bbox'],tx,allowed_spans=spans)
     rows=g['tableCells'];table_html='<table><caption>Table transcription, source page '+str(pno+1)+'</caption><tbody>'+''.join('<tr>'+''.join('<'+('th'if ri==0 else'td')+'>'+esc(prose(cell or''))+'</'+('th'if ri==0 else'td')+'>'for cell in row)+'</tr>'for ri,row in enumerate(rows))+'</tbody></table>'
     self.current['parts'].append(f'<figure id="{anchor}" class="sr-formula sr-source-table" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(tx))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Table, source page {pno+1}.</figcaption><details class="sr-formula-transcript"><summary>Accessible table transcription</summary>{table_html}</details></figure>')
     self.stats['tables']+=1
    elif g['kind']=='prose':
     b=g['block'];spans=[s for l in b['lines']for s in l['spans']]
     complex_math=g.get('complexMath')or any('MathExtension'in s['font']or'√'in s['text']for s in spans)
     if not complex_math:
      for a,bb in zip(b['lines'],b['lines'][1:]):
       if fitz.Rect(a['bbox']).intersects(fitz.Rect(bb['bbox']))and abs(a['bbox'][1]-bb['bbox'][1])<8 and any('Math'in s['font']for ll in[a,bb]for s in ll['spans']):complex_math=True;break
     if complex_math:
      tx=spantext(b);u,w,h=self.vector(page,g['bbox'],tx,allowed_spans=spans)
      self.current['parts'].append(f'<figure id="{anchor}" class="sr-formula sr-source-panel" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(tx))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Derivation, source page {pno+1}.</figcaption><details class="sr-formula-transcript"><summary>Searchable transcription</summary><pre>{esc(prose(tx))}</pre></details></figure>')
      self.stats['complexParagraphPanels']+=1
     else:
      text=self.inline(b,page)
      self.current['parts'].append(f'<p id="{anchor}" data-source-page="{pno+1}">{text}</p>')
     self.stats['paragraphs']+=1
    else:
     tx='\n'.join(b['text']for b in g['items']);spans=[s for b in g['items']for l in b['block']['lines']for s in l['spans']];u,w,h=self.vector(page,g['bbox'],tx,allowed_spans=spans)
     self.current['parts'].append(f'<figure class="sr-formula" id="{anchor}" data-source-page="{pno+1}"><div class="sr-formula-scroll"><img src="{u}" alt="{esc(prose(tx))}" width="{w:.2f}" height="{h:.2f}" style="width:{w/10.9:.3f}em;height:auto;max-width:none" loading="lazy"/></div><figcaption>Mathematical construction, source page {pno+1}.</figcaption><details class="sr-formula-transcript"><summary>Searchable transcription</summary><pre>{esc(prose(tx))}</pre></details></figure>')
     self.stats['mathPanels']+=1
    self.stats['sourceTextBlocks']+=sum(b['sourceCount']for b in g['items'])if g['kind']=='math'else g.get('sourceCount',1)
    dest={'route':f'/source-readout/{self.ident}/{self.current["slug"]}#{anchor}','chapter':self.current['slug'],'anchor':anchor}
    for source_block in g['sourceBlocks']:
     raw=next(x for x in originals if x['sourceBlocks']==[source_block])
     self.source_rows.append({'sourcePage':pno+1,'sourceBlock':source_block,'kind':g['kind'],'bbox':list(raw['bbox']),'text':raw['text'],**dest})
    self.output_rows.append({'sourcePage':pno+1,'sourceBlocks':g['sourceBlocks'],'kind':g['kind'],'text':g['text'],**dest})
   # SVG pages are only needed while their crops are made.
   self.svg.clear()
   if (pno+1)%25==0:print(self.ident,'page',pno+1,'assets',len(self.figures),flush=True)
  return self.chapters

if __name__=='__main__':
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--input',help='Original supplied PDF; defaults to bundled paper.pdf');parser.add_argument('--id',required=True,choices=['yang-mills-reconstruction','yang-mills-companion']);parser.add_argument('--limit',type=int);opts=parser.parse_args()
 ident=opts.id;title='Shadow Theory and the Wilson Yang–Mills Construction: A Source–Readout Reconstruction'if ident.endswith('reconstruction')else'A Wilson Yang–Mills Construction: A Natural-Language Mathematical Exposition'
 description='Recover the Wilson Yang–Mills construction through explicit source records, compatible operations and proved readout interfaces.'if ident.endswith('reconstruction')else'Follow the full finite-to-continuum Wilson construction in its conventional mathematical language.'
 cd=ROOT/'content/source-lift'/ident;ad=ROOT/'public/publications/source-lift'/ident
 cd.mkdir(parents=True,exist_ok=True);ad.mkdir(parents=True,exist_ok=True)
 source=Path(opts.input)if opts.input else ad/'paper.pdf'
 conv=SourceLiftConverter(source,ad,f'/publications/source-lift/{ident}',ident,title,description,opts.limit)
 chapters=conv.convert();manifest=[]
 for i,c in enumerate(chapters):
  out=cd/(c['slug']+'.html');body='\n'.join(c['parts']);out.write_text(body,encoding='utf8')
  manifest.append({'slug':c['slug'],'title':c['title'],'order':i+1,'htmlPath':str(out.relative_to(ROOT)),'sourcePages':sorted(c['pages']),'sections':c['sections'],'words':len(re.sub('<[^>]+>',' ',body).split()),'sourceUnit':c['sourceUnit']})
 fidelity='Reflowed HTML prose and exact source-vector mathematical notation, with searchable linear PDF transcriptions. Vector expressions preserve the published geometry; their extracted alternatives are not semantic LaTeX or MathML.'
 index={'id':ident,'title':title,'doi':'10.5281/zenodo.24173681','description':description,'date':'2026-11-12','pdfUrl':f'/publications/source-lift/{ident}/paper.pdf','markdownUrl':f'/publications/source-lift/{ident}/complete.md','fidelity':fidelity,'chapters':manifest}
 (cd/'index.json').write_text(json.dumps(index,indent=2,ensure_ascii=False)+'\n')
 (ad/'formula-inventory.json').write_text(json.dumps(conv.figures,ensure_ascii=False)+'\n')
 (ad/'source-block-inventory.json').write_text(json.dumps(conv.source_rows,ensure_ascii=False)+'\n')
 (ad/'complete.md').write_text(f'# {title}\n\nJeremy Rodgers · 12 November 2026\n\nDOI: https://doi.org/10.5281/zenodo.24173681\n\n{fidelity}\n\n'+'\n\n'.join(f'## Source page {i+1}\n\n{prose(t)}'for i,t in enumerate(conv.page_text)))
 coverage=ROOT/'docs/einstein-ym';coverage.mkdir(parents=True,exist_ok=True)
 (coverage/(ident+'.json')).write_text(json.dumps({'id':ident,'sourceFile':source.name,'sourceSha256':sha(source),'physicalPages':len(conv.doc),'bodyStartPage':conv.body_start,'renderedBlocks':len(conv.source_rows),'formulaAssets':len(conv.figures),'stats':dict(conv.stats),'chapters':manifest,'records':conv.source_rows,'administrativeExclusions':conv.omissions,'limitations':[fidelity]},ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({'id':ident,'chapters':len(manifest),'blocks':len(conv.source_rows),'assets':len(conv.figures),'stats':dict(conv.stats)},indent=2),flush=True)
