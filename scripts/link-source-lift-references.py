#!/usr/bin/env python3
"""Add stable item anchors and intra-edition references from the PDF inventory.
Called after the exact-vector conversion. Does not alter mathematical images.
"""
from pathlib import Path
from html.parser import HTMLParser
import html,json,re,argparse,collections,unicodedata
import fitz
ROOT=Path(__file__).resolve().parents[1]
def slug(s):return re.sub('[^a-z0-9]+','-',str(s).lower()).strip('-')
class Linker(HTMLParser):
 def __init__(self,sections,formal,eq,refs):
  super().__init__(convert_charrefs=False);self.out=[];self.stack=[];self.sections=sections;self.formal=formal;self.eq=eq;self.refs=refs
 def handle_starttag(self,tag,attrs):
  self.out.append(self.get_starttag_text());self.stack.append(tag)
  if tag in ['img','br','hr','meta','link','input','source','wbr']:self.stack.pop()
 def handle_startendtag(self,tag,attrs):self.out.append(self.get_starttag_text())
 def handle_endtag(self,tag):
  self.out.append('</'+tag+'>')
  if tag in self.stack:
   self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
 def handle_entityref(self,name):self.out.append('&'+name+';')
 def handle_charref(self,name):self.out.append('&#'+name+';')
 def handle_data(self,data):
  if any(t in self.stack for t in ['a','pre','script','style','figcaption','h2','h3','h4','summary']):self.out.append(data);return
  pattern=r'\b(?:Sections?|Appendix)\s+[A-J0-9]+(?:\.[0-9]+)*\b|\b(?:Theorem|Lemma|Proposition|Corollary|Definition)\s+\d+(?:\.\d+)*\b|\([A-Z][A-Za-z]*\d+[A-Za-z]?(?:\.\d+)*\)|\[[1-9]\d*\]'
  def repl(m):
   text=m[0];u=None
   fm=re.match(r'(Theorem|Lemma|Proposition|Corollary|Definition)\s+(.+)',text)
   if fm:u=self.formal.get((fm[1],fm[2]))
   elif re.match(r'(?:Sections?|Appendix)\s+',text):u=self.sections.get(text.split()[-1])
   elif text.startswith('('):u=self.eq.get(text[1:-1])
   elif text.startswith('['):u=self.refs.get(text[1:-1])
   return '<a href="'+html.escape(u,quote=True)+'">'+text+'</a>'if u else text
  self.out.append(re.sub(pattern,repl,data))
def main(ident):
 base=ROOT/'content/source-lift'/ident
 index=json.loads((base/'index.json').read_text());rows=json.loads((ROOT/'public/publications/source-lift'/ident/'source-block-inventory.json').read_text())
 inv=next(p for p in json.loads((ROOT/'docs/einstein-ym/ym-source-inventory.json').read_text())['papers']if p['id']==ident)
 bypage=collections.defaultdict(list)
 for row in rows:bypage[row['sourcePage']].append(row)
 insert=collections.defaultdict(lambda:collections.defaultdict(list));seen=collections.Counter();mapping=[]
 def nearest(page,bbox):
  candidates=bypage[page]
  x0,y0,x1,y1=bbox
  def score(r):
   a,b,c,d=r['bbox'];inter=max(0,min(x1,c)-max(x0,a))*max(0,min(y1,d)-max(y0,b))
   return inter/max(1,(x1-x0)*(y1-y0)), -abs((b+d-y0-y1)/2)
  return max(candidates,key=score)
 def add(item,kind,label):
  row=nearest(item['physicalPage'],item['bbox']);a=kind+'-'+slug(label);seen[a]+=1
  if seen[a]>1:a+='-p'+str(item['physicalPage'])+'-'+str(seen[a])
  u=row['route'].split('#')[0]+'#'+a
  insert[row['chapter']][row['anchor']].append(a)
  mapping.append({'kind':kind,'label':label,'sourcePage':item['physicalPage'],'bbox':item['bbox'],'chapter':row['chapter'],'anchor':a,'destination':u,'sourceBlockAnchor':row['anchor']})
  return u
 sections={};formal={};eq={};refs={}
 for h in inv['headings']:
  u=add(h,'section',h['number']);sections.setdefault(h['number'],u)
 for h in inv['formalItems']:
  u=add(h,h['type'].lower(),h['number']);formal.setdefault((h['type'],h['number']),u)
 for h in inv['numberedEquations']:
  u=add(h,'equation',h['label']);eq.setdefault(h['label'],u)
 # Bibliographic entries may span more than one PDF block. Each numbered
 # entry begins in a block; preserve the full source and anchor the start.
 for r in rows:
  m=re.match(r'^\s*\[([1-9]\d*)\]\s',r['text'])
  if m and ('reference'in r['chapter']or r['sourcePage']>=inv['physicalPdfPages']-3):
   n=m[1];a='reference-'+n
   if n not in refs:
    insert[r['chapter']][r['anchor']].append(a);refs[n]=r['route'].split('#')[0]+'#'+a
    mapping.append({'kind':'reference','label':n,'sourcePage':r['sourcePage'],'bbox':r['bbox'],'chapter':r['chapter'],'anchor':a,'destination':refs[n],'sourceBlockAnchor':r['anchor']})
 # Recover discretionary line-end hyphens from the PDF's actual line breaks.
 source_file=ROOT/'public/publications/source-lift'/ident/'paper.pdf'
 if not source_file.exists():
  source_file=ROOT.parent.parent/'upload'/inv['sourcePdf']
 source_doc=fitz.open(source_file)
 source_text=unicodedata.normalize('NFKC','\n'.join(p.get_text()for p in source_doc))
 words=collections.Counter(w.lower()for w in re.findall(r'\b[A-Za-z]+(?:-[A-Za-z]+)*\b',source_text))
 compounds={'non','self','finite','source','readout','gauge','one','two','three','four','short','long','small','large','fixed','time','level','frame','positive','negative','zero','multi','nonzero','off','on','well','second','first','third','higher','rank','root','matrix','square','mass','mesh','volume','stationary','wilson','boundary','scalar','vector','degree','power','reflection','operator','weak','strong','color','colour'}
 repairs={}
 for a,b in re.findall(r'\b([A-Za-z]+)-\s*\n([a-z]+)\b',source_text):
  joined=(a+b).lower();hyphenated=(a+'-'+b).lower()
  if words[joined]or(not words[hyphenated]and a.lower()not in compounds):repairs[hyphenated]=a+b
 repair_count=0
 for c in index['chapters']:
  p=ROOT/c['htmlPath'];text=p.read_text()
  # Work only on semantic paragraph/heading text, not mathematical source
  # attributes, vector figures or their searchable exact transcriptions.
  def repair_paragraph(m):
   nonlocal repair_count
   def sub(mm):
    nonlocal repair_count
    key=(mm[1]+'-'+mm[3]).lower()
    if key not in repairs:return mm[0]
    repair_count+=1
    return mm[1]+re.sub(r'\s+','',mm[2])+mm[3]
   return re.sub(r'([A-Za-z]+)-((?:</?(?:em|strong)>|\s)*)([a-z]+)',sub,m[0])
  text=re.sub(r'<(?:p|h[234])\b[^>]*>[\s\S]*?</(?:p|h[234])>',repair_paragraph,text)
  text=re.sub(r'<figcaption>(?:Derivation|Mathematical construction|Table), source page (\d+)\.</figcaption>',r'<figcaption class="sr-only">Source page \1.</figcaption>',text)

  for anchor,anchors in insert[c['slug']].items():
   # Put item anchors immediately before the source group, preserving its
   # original stable source-block id and the whole printed object.
   pat=r'(<(?:h[234]|p|figure|section)\b[^>]*\bid="'+re.escape(anchor)+r'"[^>]*>)'
   text,n=re.subn(pat,lambda m:''.join('<a id="'+a+'"></a>'for a in anchors)+m[0],text,count=1)
   if n!=1:raise ValueError((p,anchor,'missing source destination'))
  linker=Linker(sections,formal,eq,refs);linker.feed(text);p.write_text(''.join(linker.out))
  c['itemAnchors']=[m['anchor']for m in mapping if m['chapter']==c['slug']]
 (base/'index.json').write_text(json.dumps(index,indent=2,ensure_ascii=False)+'\n')
 (ROOT/'docs/einstein-ym'/f'{ident}-cross-references.json').write_text(json.dumps({'id':ident,'items':mapping,'counts':dict(collections.Counter(m['kind']for m in mapping)),'discretionaryHyphenRepairs':repair_count},ensure_ascii=False,indent=2)+'\n')
 print(ident,len(mapping),'stable item anchors linked',len(refs),'bibliographic references',flush=True)
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--id',required=True);o=p.parse_args();main(o.id)
