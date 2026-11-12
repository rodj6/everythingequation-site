from pathlib import Path
import re,json,subprocess,hashlib,copy,argparse,tempfile,zipfile,shutil
S=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description='Rebuild the complete Einstein MDX edition from its byte-matched LaTeX archive. Requires pandoc and pdftotext; not run during npm build.')
parser.add_argument('--source-archive',type=Path,default=S/'public/publications/source-lift/einstein-1916/source.zip')
args=parser.parse_args()
work=tempfile.TemporaryDirectory(prefix='einstein-web-conversion-')
archive=args.source_archive.resolve()
with zipfile.ZipFile(archive) as z:
 for item in z.infolist():
  path=Path(item.filename)
  if path.is_absolute() or '..' in path.parts or ((item.external_attr>>16)&0o170000)==0o120000:raise ValueError('Unsafe archive member')
 z.extractall(work.name)
source=Path(work.name)/'Einstein_1916_LaTeX'
out=S/'content/paper-integrations/einstein-1916'
out.mkdir(parents=True,exist_ok=True)
pdf=S/'public/publications/source-lift/einstein-1916/paper.pdf'
assert hashlib.sha256(pdf.read_bytes()).digest()==hashlib.sha256((source/'main.pdf').read_bytes()).digest(),'Source archive PDF differs from the authoritative publication download'
pdftext=Path(work.name)/'paper.txt'
subprocess.run(['pdftotext','-layout',str(pdf),str(pdftext)],check=True)
root='/source-readout/einstein-1916'
main=(source/'main.tex').read_text()
files=re.findall(r'\\input\{([^}]+)\}',main)
full='\n'.join((source/(f+'.tex')).read_text() for f in files)
sections=list(re.finditer(r'\\section\{([^}]+)\}(?:\\label\{([^}]+)\})?',full))
preamble='\n'.join(line for line in main[:main.index('\\begin{document}')].splitlines() if line.startswith('\\newcommand'))+'\n\\newcommand{\\doi}[1]{\\href{https://doi.org/#1}{doi:#1}}\n'
# These titles and leads are editorial additions. The complete matching source follows each lead.
titles=[
('the-reconstruction','Recover the complete gravitational chain','Shadow Theory makes the path from local measurements to gravitational dynamics explicit. This edition follows the full construction: the supporting preparation, the geometric and matter realization, the readouts, and the operations that connect them.'),
('source-and-recovery','What source–readout recovery requires','A source support, a realized physical sector and an observable output play different roles. Here are the exact maps and the composition result that let the subsequent derivation pass through those layers.'),
('calibrated-spacetime','Intervals determine the metric','A calibration turns coordinate directions into measured components. Its quadratic readout recovers every local Lorentz metric, and its complete fibre identifies precisely the frame freedom left unresolved.'),
('comparison-and-tensors','Comparison recovers covariant differentiation','Tensor slots can be read out reversibly. Differentiation needs more: a compatible comparison rule. Its construction recovers the full metric connection while keeping raw torsion and nonmetricity visible.'),
('geodesics-and-divergences','From stationary intervals to differential identities','The same calibrated interval supplies geodesic motion, Hessians, volume derivatives and divergence identities. Boundary terms and tensor symmetries identify where each recovered operation applies.'),
('curvature-and-variations','Keep the nonlinear curvature','The comparison commutator recovers both derivative and quadratic curvature terms. Local flatness, coordinate-volume choices and variation coverage are then different consequences of that complete operation.'),
('vacuum-and-action','Recover the action and its variation','Recovering the value of a gravitational action is only the beginning. The construction also covers its test directions and boundary response, exposing why coordinate gauge and constrained variation cannot be interchanged.'),
('gravitational-energy','The gravitational current keeps its coordinate tag','The action supplies Einstein’s canonical gravitational current and its exact off-shell divergence. An explicit flat example shows why internal frame invariance does not make that current a coordinate tensor.'),
('matter-and-field-equations','Put matter on the same realization','Geometry and stress must share one calibration, comparison and normalization. Joint sections and variations recover their coupling, with trace reversal preserving information that trace deletion would lose.'),
('conservation-and-flux','Follow exchange and boundary flux','Conservation follows through an explicit double-divergence chain, with its volume defect retained. Matter and gravitational contributions exchange equal and opposite amounts on the selected sector.'),
('fluids','Recover the fluid equations','A constitutive stress readout turns matter primitives into the coupled stress. Its conservation law yields the fluid equations only with the normalization and constitutive inputs that make those operations valid.'),
('electromagnetism','Recover Maxwell operations and stress','The electromagnetic potential, field, current and stress occupy distinct levels. The same geometry carries their derivative operations, gauge fibre and transfer identities, including the information that stress alone cannot recover.'),
('newtonian-limit','Fix the Newtonian normalization','Controlled weak-field and slow-motion reductions connect the covariant theory to Newtonian acceleration. Derivative norms, matter scaling and the chosen quasi-static regime keep the approximation quantitative.'),
('spherical-exterior','Complete the central exterior','The leading weak-field data do not supply every higher-order orbital term. A separately identified static spherical completion provides that missing dependency and the exact family used in the optical and orbital estimates.'),
('clocks-and-frequency','Read clocks and frequency transfer','Static observers read proper time and compare frequencies through the same interval law. Exact lapse factors and explicit remainder estimates show what the leading redshift formula retains.'),
('light-and-bending','Read null rays and optical bending','Null propagation requires an operation separate from normalized timelike length. Optical variation and regularized endpoint integrals recover bending with the boundary geometry and error bounds stated explicitly.'),
('perihelion','Recover the perihelion dependency','The orbit calculation uses the declared higher-order static completion and the cited orbital dependency. Its controlled expansion makes the perihelion result part of the complete recovered chain.'),
('cumulative-recovery','Assemble the recovery theorem','The local sections, comparison identities, matter maps and observational reductions now form one compatible reconstruction. The cumulative theorem states exactly which operations and target classes are covered.'),
('relation-and-contribution','What the reconstruction adds','The construction uses established coframe and connection mathematics. Its distinctive result is the integrated source–readout account of the historical chain, with explicit coverage, discarded information and boundary-sensitive contracts.'),
('verification-and-limits','Inspect the verification and its domain','Executable checks accompany the proofs. Their exact, numerical and negative-control roles remain separate, as do the local reconstruction theorem and questions about global geometry or physical selection.'),
('conclusion','One connected reconstruction','The result is a complete conditional realization of Einstein’s chain: preparation, joint geometry and matter, recovered operations, and measured consequences. Its equations and qualification registers remain available in the following chapters.'),
('printed-source-register','Read the printed-source corrections','The supplied historical copy contains expressions that cannot all hold with their surrounding equations. This register preserves the literal forms and the separately derived consistent replacements.'),
('equation-correspondence','Trace every original equation','The correspondence register maps all 75 principal numbers and 26 lettered variants to their recovered operations. It preserves the original pagination and the exact scope of each correspondence.'),
('assumption-register','Inspect the assumptions and theorem status','Every reconstruction rests on a declared target domain and physical inputs. This register separates those inputs, mathematical consequences, approximation statements and unresolved global questions.'),
]
assert len(titles)==len(sections)==24
labels={}; chapters=[]; eqs=[]; formals=[]
def aid(x):return re.sub(r'[^a-zA-Z0-9_-]+','-',x).strip('-')
for i,m in enumerate(sections):
 number=str(i+1) if i<21 else chr(ord('A')+i-21)
 slug=f'{i+1:02d}-{titles[i][0]}'
 body=full[m.end():sections[i+1].start() if i+1<len(sections) else len(full)]
 labels[m[2]]={'number':number,'anchor':aid(m[2]),'route':f'{root}/{slug}'}
 # Register every equation and theorem in true document order.
 eqcounter=0;thcounter=0; subcounter=0
 pattern=r'\\begin\{(equation|align)\}([\s\S]*?)\\end\{\1\}|\\begin\{(theorem|proposition|lemma|corollary|definition|remark)\}(?:\[([^\]]*)\])?\s*\\label\{([^}]+)\}|\\subsection\{([^}]+)\}(?:\\label\{([^}]+)\})?'
 def replacement(mm):
  global eqcounter,thcounter,subcounter
  typ,inside,thtype,caption,thlabel,sub,subid=mm.groups()
  if sub is not None:
   subcounter+=1
   if subid:labels[subid]={'number':f'{number}.{subcounter}','anchor':aid(subid),'route':f'{root}/{slug}'}
   return mm[0]
  if typ in ('equation','align'):
   rows=[inside] if typ=='equation' else re.split(r'\\\\(?:\[[^\]]+\])?',inside)
   newrows=[]; numbered_values=[]
   for row in rows:
    ls=re.findall(r'\\label\{([^}]+)\}',row)
    numbered=not re.search(r'\\(?:nonumber|notag)\b',row)
    if numbered:
     eqcounter+=1;n=f'{number}.{eqcounter}';numbered_values.append(n)
     eqs.append({'number':n,'labels':ls,'chapter':slug,'sourceSection':number})
     for l in ls:labels[l]={'number':n,'anchor':aid(l),'route':f'{root}/{slug}'}
    row=re.sub(r'\\label\{[^}]+\}|\\(?:nonumber|notag)\b','',row)
    if typ=='equation': row+='\\tag{'+n+'}'
    elif numbered:row+='&&\\text{('+n+')}'
    newrows.append(row)
   inner=newrows[0] if typ=='equation' else '\\begin{aligned}'+r'\\'.join(newrows)+'\\end{aligned}'
   # Preserve label tokens for the AST anchor pass, outside mathematical annotation.
   anchors=''.join('\\hypertarget{eq-'+n.replace('.','-')+'}{}' for n in numbered_values)+''.join('\\hypertarget{'+aid(l)+'}{}' for row in rows for l in re.findall(r'\\label\{([^}]+)\}',row))
   return anchors+'\\['+inner+'\\]'
  thcounter+=1;n=f'{number}.{thcounter}'
  typ=thtype
  labels[thlabel]={'number':n,'anchor':aid(thlabel),'route':f'{root}/{slug}'}
  anchor=aid(thlabel)
  formals.append({'kind':typ,'number':n,'anchor':anchor,'caption':caption,'chapter':slug,'sourceSection':number})
  return '\\subsubsection*{'+typ.capitalize()+' '+n+(' ('+caption+')' if caption else '')+'}\\label{'+anchor+'}\n'
 body=re.sub(pattern,replacement,body)
 body=re.sub(r'\\end\{(?:theorem|proposition|lemma|corollary|definition|remark)\}','',body)
 local_proofs=iter([f for f in formals if f['chapter']==slug])
 def proof_begin(mm):
  f=next(local_proofs); anchor='proof-'+f['anchor'];f['proofAnchor']=anchor
  return '\n\\subsubsection*{'+(mm[1] or 'Proof')+'.}\\label{'+anchor+'}\n'
 body=re.sub(r'\\begin\{proof\}(?:\[([^\]]*)\])?',proof_begin,body).replace('\\end{proof}','\n\\(\\square\\)\n')
 chapters.append({'number':number,'slug':slug,'title':titles[i][1],'lead':titles[i][2],'originalTitle':m[1],'body':body,'anchor':aid(m[2])})
# Bibliography numbering is the order of the .bbl, exactly as printed.
bbl=(source/'main.bbl').read_text()
bibs=list(re.finditer(r'\\bibitem(?:\[[\s\S]*?\])?\{([^}]+)\}',bbl))
refmap={m[1]:n+1 for n,m in enumerate(bibs)}
refslug='25-references'
refroute=f'{root}/{refslug}'
def refs(mm):
 keys=mm[2].split(',')
 opt=mm[1] or ''
 return ', '.join('\\href{'+refroute+'#ref-'+str(refmap[k.strip()])+'}{['+str(refmap[k.strip()])+']}' for k in keys)+(' ('+opt+')' if opt else '')
def ref(mm):
 typ,key=mm.groups()
 if key not in labels:raise ValueError(('unknown label',key))
 x=labels[key]; val=('('+x['number']+')') if typ=='eqref' else x['number']
 return '\\href{'+x['route']+'#'+x['anchor']+'}{'+val+'}'
def latex_prepare(s):
 # Pandoc's longtable p-column parser can drop numeric cells. Normalize the
 # presentation-only column declaration while keeping all cell content.
 def table(match):
  typ=match[1];raw=match[2];start=raw.index('{');depth=0;end=None
  for i,c in enumerate(raw[start:],start):
   depth+=int(c=='{')-int(c=='}')
   if depth==0:end=i+1;break
  content=raw[end:]
  if '\\endfirsthead' in content:
   before,after=content.split('\\endfirsthead',1)
   after=after.split('\\endhead',1)[1]
   after=re.sub(r'[\\]bottomrule[\\]endfoot','',after)
   content=before+after
  content=content.replace('\\endhead','').replace('\\endfoot','')
  rows=re.split(r'\\\\',content)
  columns=max(len(re.split(r'(?<!\\)&',row)) for row in rows)
  return '\\begin{tabular}{'+'l'*columns+'}'+content+'\\end{tabular}'
 s=re.sub(r'\\begin\{(longtable|tabular)\}([\s\S]*?)\\end\{\1\}',table,s)
 s=re.sub(r'\\cite[pt]?\*?(?:\[([^\]]*)\])?\{([^}]+)\}',refs,s)
 s=re.sub(r'\\(eqref|ref)\{([^}]+)\}',ref,s)
 return s
# Pandoc handles prose, source tables, declared macros and inline mathematics.
def to_json(body):
 text=preamble+'\n\\begin{document}\n'+latex_prepare(body)+'\n\\end{document}'
 p=subprocess.run(['pandoc','-f','latex','-t','json'],input=text,text=True,capture_output=True,check=True)
 if p.stderr.strip():raise ValueError(p.stderr)
 return json.loads(p.stdout)
def walk(x):
 if isinstance(x,list):
  result=[]
  for item in x:
   y=walk(item)
   if isinstance(y,dict) and y.get('t')=='Span' and y['c'][0][0]:
    ident=aid(y['c'][0][0]); content=y['c'][1]
    result.append({'t':'RawInline','c':['html',f'<a id="{ident}"></a>']});result.extend(content)
   elif isinstance(y,dict) and y.get('t')=='Header' and y['c'][1][0]:
    ident=aid(y['c'][1][0]);y['c'][1][0]=''
    result.append({'t':'RawBlock','c':['html',f'<a id="{ident}"></a>']});result.append(y)
   else:result.append(y)
  return result
 if not isinstance(x,dict):return x
 x={k:walk(v) for k,v in x.items()}
 if x.get('t')=='Header':
  x['c'][0]=min(x['c'][0]+1,3)
 if x.get('t')=='Math':
  math=x['c'][1]
  math=math.replace(r'\mathrm d',r'\mathrm{d}')
  x['c'][1]=math
 return x
def render(body):
 doc=walk(to_json(body))
 raw=[]
 def find(v):
  if isinstance(v,dict):
   if v.get('t') in ['RawInline','RawBlock'] and v['c'][0]=='latex':raw.append(v['c'][1])
   for z in v.values():find(z)
  elif isinstance(v,list):
   for z in v:find(z)
 find(doc)
 if raw:raise ValueError(('unconverted raw latex',raw))
 p=subprocess.run(['pandoc','-f','json','-t','gfm+tex_math_dollars','--wrap=none'],input=json.dumps(doc),text=True,capture_output=True,check=True)
 text=p.stdout
 # GFM writes headings with a raw anchor line; preserve all explicit IDs.
 text=re.sub(r'^(#{2,6}) (.*?)\s*\{#([^}]+)\}\s*$',lambda mm:f'<a id="{aid(mm[3])}"></a>\n\n{mm[1]} {mm[2]}',text,flags=re.M)
 # Make every display a standalone MDX block, never adjacent to prose.
 text=re.sub(r'\$\$([\s\S]*?)\$\$',lambda mm:'\n\n$$\n'+re.sub(r'\n\s*\n','\n',mm[1].strip())+'\n$$\n\n',text)
 text=text.replace('—',', ').replace('source--readout','source–readout').replace('class="','className="')
 # GFM escapes are prose escapes, and MDX must not treat braces as JSX.
 blocks=re.split(r'(\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^\n$]*\$)',text)
 for k in range(0,len(blocks),2):
  blocks[k]=blocks[k].replace('\\{','&#123;').replace('\\}','&#125;')
 text=''.join(blocks)
 text=re.sub(r'<(https?://[^<>]+)>',lambda m:'['+m[1]+']('+m[1]+')',text)
 return text
for p in out.glob('*.mdx'):p.unlink()
for i,ch in enumerate(chapters):
 body=render(ch['body'])
 table_counter=[0]
 def table_anchor(m):
  table_counter[0]+=1
  return '<a id="table-'+str(table_counter[0])+'"></a>\n\n'+m[0]
 body=re.sub(r'^\|[^\n]+\n\|:[^\n]+',table_anchor,body,flags=re.M)
 ch['tableCount']=table_counter[0]
 fm='---\ntitle: '+json.dumps(ch['title'],ensure_ascii=False)+'\ndescription: '+json.dumps(ch['lead'],ensure_ascii=False)+'\norder: '+str(i+1)+'\n---\n\n'
 editorial=f"**{ch['lead']}**\n\n<a id=\"{ch['anchor']}\"></a>\n\n## {ch['number']}. {ch['originalTitle']}\n\n"
 (out/(ch['slug']+'.mdx')).write_text(fm+editorial+body)
refsbody=[]
for n,m in enumerate(bibs):
 body=bbl[m.end():bibs[n+1].start() if n+1<len(bibs) else bbl.index('\\end{thebibliography}')]
 body=body.replace('\\newblock',' ').replace('\\penalty0',' ')
 refsbody.append(f'<a id="ref-{n+1}"></a>\n\n### [{n+1}]\n\n'+render(body))
(out/(refslug+'.mdx')).write_text('---\ntitle: "References and publication source"\ndescription: "The complete bibliography of the Einstein source–readout reconstruction, with original publication and DOI links."\norder: 25\n---\n\n'+ '\n'.join(refsbody))
# Write machine-readable input evidence and granular source mappings.
pages=pdftext.read_text().split('\f')
def page_for(number):
 for i,p in enumerate(pages):
  if re.search(r'\('+re.escape(number)+r'\)',p):return i+1
 return None
records=[]
section_pages=[3,4,5,8,10,12,14,17,18,19,22,24,28,30,32,33,35,37,38,39,40,41,43,45]
for i,ch in enumerate(chapters):
 ch['pdfPages']=list(range(section_pages[i],(section_pages[i+1] if i+1<len(chapters) else 47)+1))
 rendered=(out/(ch['slug']+'.mdx')).read_text()
 for match in re.finditer(r'<a id="([^"]+)"></a>\s*\n+#{3,4} ([^\n]+)',rendered):
  anchor,title=match.groups()
  if anchor.startswith(('thm-','proof-')):continue
  records.append({'type':'subsection','sourceSection':ch['number'],'sourceItem':title,'sourcePdfPages':ch['pdfPages'],'destinationRoute':f'{root}/{ch["slug"]}#{anchor}','anchor':anchor,'status':'source-converted'})
for ch in chapters:
 records.append({'type':'section','sourceSection':ch['number'],'sourceTitle':ch['originalTitle'],'destinationRoute':f'{root}/{ch["slug"]}#{ch["anchor"]}','anchor':ch['anchor'],'status':'source-converted'})
for ch in chapters:
 for n in range(1,ch.get('tableCount',0)+1):records.append({'type':'table','sourceSection':ch['number'],'sourceItem':n,'destinationRoute':f'{root}/{ch["slug"]}#table-{n}','anchor':f'table-{n}','status':'source-converted'})
for eq in eqs:
 ls=eq['labels'];anchor=aid(ls[0]) if ls else 'eq-'+eq['number'].replace('.','-')
 records.append({'type':'equation','sourceSection':eq['sourceSection'],'sourceItem':eq['number'],'sourcePdfPage':page_for(eq['number']),'destinationRoute':f'{root}/{eq["chapter"]}#{anchor}','anchor':anchor,'sourceLabels':ls,'status':'source-converted'})
for th in formals:
 if th.get('proofAnchor'):records.append({'type':'proof','sourceSection':th['sourceSection'],'sourceItem':th['number']+' proof','destinationRoute':f'{root}/{th["chapter"]}#{th["proofAnchor"]}','anchor':th['proofAnchor'],'status':'source-converted'})
 records.append({'type':th['kind'],'sourceSection':th['sourceSection'],'sourceItem':th['number'],'sourceTitle':th['caption'],'destinationRoute':f'{root}/{th["chapter"]}#{th["anchor"]}','anchor':th['anchor'],'status':'source-converted'})
for n,m in enumerate(bibs):records.append({'type':'reference','sourceItem':n+1,'sourceBibKey':m[1],'destinationRoute':refroute+f'#ref-{n+1}','anchor':f'ref-{n+1}','sourcePdfPage':47 if n<5 else 48,'status':'source-converted'})
coverage={'id':'einstein-1916','title':'The Foundations of General Relativity: A Source–Readout Reconstruction of Einstein’s 1916 Theory','doi':'10.5281/zenodo.24064553','sourcePdf':'Einstein_1916_Shadow_Theory_Source_Readout_Reconstruction(1).pdf','sourceSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'matchingSourcePdf':str(archive.relative_to(S))+'#Einstein_1916_LaTeX/main.pdf','matchingSourcePdfSha256':hashlib.sha256((source/'main.pdf').read_bytes()).hexdigest(),'sourceSections':len(sections),'chapterCount':25,'numberedEquations':len(eqs),'formalStatements':len(formals),'references':len(bibs),'records':records,'exclusions':['Title page repeated author/keywords and printed table of contents are adapted to website metadata and chapter navigation.','Publication layout instructions and font-size changes are omitted.'],'method':'Matching original LaTeX converted through Pandoc AST; custom chapter leads add web exposition; full source bodies, mathematical annotations, proofs, tables and bibliography retained.'}
for row in records:
 if row.get('sourceSection'):
  ch=next(c for c in chapters if c['number']==row['sourceSection'])
  if not row.get('sourcePdfPage'):row['sourcePdfPages']=ch['pdfPages']
coverage['sourceInventory']={'numberedEquations':211,'formalStatements':15,'proofs':15,'tables':sum(c.get('tableCount',0) for c in chapters),'figures':0,'references':12}
coverage['records']=records
(S/'docs/einstein-ym/einstein-1916.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2)+'\n')
# Cross-references are fully recorded in the coverage destinations above.
print(json.dumps({'chapters':25,'equations':len(eqs),'formalStatements':len(formals),'references':len(bibs),'labels':len(labels)},indent=2))
