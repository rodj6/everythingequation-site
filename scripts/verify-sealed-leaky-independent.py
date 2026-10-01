#!/usr/bin/env python3
"""Independent, standard-library source-to-HTML check for Sealed or Leaky.
Run from any directory; optionally pass --site-root DIR and --report FILE.
Does not import or execute the JavaScript converter. This checks conversion
fidelity, not validity of every mathematical proof or physical premise.
"""
from pathlib import Path
from html.parser import HTMLParser
import argparse,collections,hashlib,html,json,re,sys,unicodedata

MATH=re.compile(r'(?<!\\)\$(.*?)\$|(?<!\\)\\\[([\s\S]*?)\\\]|\\begin\{(equation|align|align\*)\}([\s\S]*?)\\end\{\3\}',re.S)
FORMAL=['theorem','proposition','lemma','corollary','proof','remark','definition']
EXPECTED_HASHES={'Sealed_or_Leaky_v3.1.tex': 'f4ae5932e4a7cb9c8c969154facbb68b9333d595548b67e6f4dd0dd544816647', 'Sealed_or_Leaky_v3.1.pdf': '75c4863a357076eefc1e9d14f0e8458a9efa1885b602f24b5b8a392df1a10fb6', 'Sealed_or_Leaky_v3.1_Verification.py': '8bb090cb2cd2351291d9c44286ccff6ed201ed80a92667cc9e7cae23afd9a5e9'}

def words(x):return re.findall(r'[^\W_]+',unicodedata.normalize('NFC',x).lower())
def prose(x):
 x=MATH.sub(' ',x)
 x=re.sub(r'\\(?:cite|ref|eqref|label)(?:\[[^\]]*\])?\{[^}]*\}',' ',x)
 x=re.sub(r'\\(?:begin|end)\{[^}]*\}(?:\[[^\]]*\])?',' ',x)
 x=re.sub(r'\\"\{?([A-Za-z])\}?',lambda m:unicodedata.normalize('NFC',m[1]+'\u0308'),x)
 x=re.sub(r'\\\'\{?([A-Za-z])\}?',lambda m:unicodedata.normalize('NFC',m[1]+'\u0301'),x)
 x=re.sub(r'\\[A-Za-z]+','',x)
 return words(x)
def subsequence(expected,actual):
 pos=0
 for w in actual:
  if pos<len(expected) and expected[pos]==w:pos+=1
 return pos==len(expected)
class TextWithoutMath(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.out=[]
 def handle_starttag(self,tag,attrs):
  cls=dict(attrs).get('class','').split();skip=bool(self.stack and self.stack[-1][1]) or 'katex' in cls or 'quantum-qed' in cls
  if tag not in ['br','hr','img','input','meta','link']:self.stack.append((tag,skip))
  if not skip and tag in ['p','div','li','section','td','th']:self.out.append(' ')
 def handle_endtag(self,tag):
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i][0]==tag:
    skip=self.stack[i][1];self.stack=self.stack[:i]
    if not skip:self.out.append(' ')
    return
 def handle_data(self,data):
  if not self.stack or not self.stack[-1][1]:self.out.append(data)
def htmlwords(text):
 parser=TextWithoutMath();parser.feed(text);return words(''.join(parser.out))
def normalize_math(x,labels):
 x=re.sub(r'\\label\{[^}]+\}|\\(?:nonumber|notag)\b|\\tag\{[^}]+\}','',x)
 x=re.sub(r'\\(?:eqref|ref)\{([^}]+)\}',lambda m:'\\text{'+('(' if m[0].startswith('\\eqref') else '')+labels[m[1]]+(')' if m[0].startswith('\\eqref') else '')+'}',x)
 x=re.sub(r'\\(?:begin|end)\{(?:align|aligned|gather|gathered|equation|split)\*?\}','',x)
 return re.sub(r'\s+','',x)

def run(site):
 assets=site/'public/publications/sealed-or-leaky';content=site/'content/sealed-or-leaky'
 source=(assets/'Sealed_or_Leaky_v3.1.tex').read_text()
 aux=(assets/'numbering.aux').read_text()
 body=source[source.index('\\begin{document}')+len('\\begin{document}'):source.index('\\end{document}')]
 auxlabels=dict(re.findall(r'\\newlabel\{([^}]+)\}\{\{([^}]+)\}',aux))
 index=json.loads((content/'index.json').read_text());coverage=json.loads((assets/'source-coverage.json').read_text())
 rendered=[(d['slug'],(content/(d['slug']+'.html')).read_text()) for d in index]
 maths=[]
 for m in MATH.finditer(body):
  raw=m[1] if m[1] is not None else m[2] if m[2] is not None else m[4]
  maths.append(dict(raw=raw,norm=normalize_math(raw,auxlabels),kind='inline' if m[1] is not None else 'display'))
 actualmath=[]
 for slug,text in rendered:
  for raw in re.findall(r'<annotation encoding="application/x-tex">(.*?)</annotation>',text,re.S):actualmath.append(normalize_math(html.unescape(raw),auxlabels))
 expectedcounter=collections.Counter(x['norm'] for x in maths);actualcounter=collections.Counter(actualmath)
 expecteddisplays=[];equation=0
 for m in MATH.finditer(body):
  if m[1] is not None:continue
  raw=m[2] if m[2] is not None else m[4];numbers=[]
  if m[3]=='equation':equation+=1;numbers=[str(equation)]
  elif m[3]=='align':
   for row in raw.split('\\\\'):
    if row.strip() and not re.search(r'\\(?:nonumber|notag)\b',row):equation+=1;numbers.append(str(equation))
  expecteddisplays.append((normalize_math(raw,auxlabels),tuple(numbers)))
 actualdisplays=[]
 for slug,text in rendered:
  for block in re.findall(r'<div class="quantum-equation">(.*?)</div>',text,re.S):
   raw=html.unescape(re.search(r'<annotation encoding="application/x-tex">(.*?)</annotation>',block,re.S)[1]);numbers=re.findall(r'\\tag\{([^}]+)\}',raw)
   if not numbers:numbers=re.findall(r'class="quantum-equation-number">\(([^)]+)\)',block)
   actualdisplays.append((normalize_math(raw,auxlabels),tuple(numbers)))
 display_numbering_matches=collections.Counter(expecteddisplays)==collections.Counter(actualdisplays)
 formal={}
 for env in FORMAL:
  sourceblocks=[m[1].strip() for m in re.finditer(r'\\begin\{'+env+r'\}(?:\[[^\]]*\])?([\s\S]*?)\\end\{'+env+r'\}',source)]
  recordblocks=[x['latex'].strip() for x in coverage['elements'] if x['kind']==env]
  htmlblocks=[(slug,part) for slug,text in rendered for part in re.findall(r'<section class="quantum-environment quantum-'+env+r'"[^>]*>(.*?)</section>',text,re.S)]
  failures=[]
  for i,(src,(slug,actual)) in enumerate(zip(sourceblocks,htmlblocks),1):
   if not subsequence(prose(src),htmlwords(actual)):failures.append(dict(index=i,document=slug))
  formal[env]=dict(source=len(sourceblocks),rendered=len(htmlblocks),coverage_bodies_identical=sourceblocks==recordblocks,actual_html_prose_failures=failures)
 missinganchors=[];numbermismatches=[]
 for key,target in coverage['labels'].items():
  if target['number']!=auxlabels.get(key):numbermismatches.append(key)
  if f'id="{key}"' not in dict(rendered)[target['document']]:missinganchors.append(key)
 tables=[]
 for slug,text in rendered:
  for table in re.findall(r'<table>(.*?)</table>',text,re.S):
   rows=re.findall(r'<tr>(.*?)</tr>',table,re.S)
   tables.append(dict(document=slug,rows=len(rows),column_counts=dict(collections.Counter(len(re.findall(r'<(?:th|td)(?: |>)',x)) for x in rows))))
 hashes={name:hashlib.sha256((assets/name).read_bytes()).hexdigest() for name in ['Sealed_or_Leaky_v3.1.tex','Sealed_or_Leaky_v3.1.pdf','Sealed_or_Leaky_v3.1_Verification.py']}
 result=dict(check='independent source-to-HTML conversion verification',limitations='Checks conversion fidelity, including actual rendered proof prose and mathematics. Does not reprove theorems or validate physical premises.',math=dict(source=dict(collections.Counter(x['kind'] for x in maths)),rendered=len(actualmath),missing=sum((expectedcounter-actualcounter).values()),extra=sum((actualcounter-expectedcounter).values())),formal=formal,labels=dict(source=len(re.findall(r'\\label\{([^}]+)\}',source)),recorded=len(coverage['labels']),missing_html_anchors=missinganchors,compiled_number_mismatches=numbermismatches),tables=tables,source_asset_sha256=hashes,original_asset_hashes_match=all(hashes.get(k)==v for k,v in EXPECTED_HASHES.items()),display_count_explanation='136 = 73 bracket displays + 53 equation + 8 align + 2 align*. The two title-page line-spacing commands \\\\[3mm] are not math displays.')
 result['display_equation_numbering']=dict(displays=len(expecteddisplays),last_number=equation,actual_html_numbers_match=display_numbering_matches)
 failures=bool(result['math']['missing'] or result['math']['extra'] or missinganchors or numbermismatches or not result['original_asset_hashes_match'] or not display_numbering_matches)
 failures|=any(v['source']!=v['rendered'] or not v['coverage_bodies_identical'] or v['actual_html_prose_failures'] for v in formal.values())
 result['status']='FAIL' if failures else 'PASS';return result

if __name__=='__main__':
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--site-root',type=Path,default=Path(__file__).resolve().parents[1]);parser.add_argument('--report',type=Path);args=parser.parse_args()
 report=run(args.site_root.resolve());text=json.dumps(report,indent=2)+'\n'
 if args.report:args.report.parent.mkdir(parents=True,exist_ok=True);args.report.write_text(text)
 print(text);sys.exit(report['status']!='PASS')
