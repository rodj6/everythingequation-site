#!/usr/bin/env python3
"""Full foundational TeX reading editions. Run from site root with pandoc, pdflatex and Node dependencies installed."""
import json,re,subprocess,shutil,hashlib,copy,html,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SRC=Path(sys.argv[1]) if len(sys.argv)>1 else ROOT/'source-inputs/source-readout-foundations'
OUT=ROOT/'content/source-readout/foundations';ASSETS=ROOT/'public/publications/source-readout/foundations';OUT.mkdir(parents=True,exist_ok=True);ASSETS.mkdir(parents=True,exist_ok=True)
TMP=ROOT/'tmp/source-readout-foundations';TMP.mkdir(parents=True,exist_ok=True)
slugs=['source-readout-non-equivalence','target-relative-necessity-of-completion','canonical-minimal-source-completion','geometric-realization-of-completed-source-relations','observable-quotients-and-exact-projected-dynamics','non-source-projection-and-internal-identifiability','bulk-to-brane-projection']
dois=['21369967','21370501','21370763','21370985','21371251','21371451','21371861']
descriptions=['Exact quotients, source relations, and symmetry-compatible reconstruction.','When missing distinctions obstruct a target and what any sufficient repair must retain.','The coarsest extension carrying a nominated family of source relations.','Compatible geometric fields, invariant relations, and variational response.','Autonomous projected laws, memory, and minimal dynamical completion.','Model-relative non-source projection and the limits of internal identification.','A complete source-projection witness and observable residues within RS2 gravity.']
statement_envs={'theorem','proposition','lemma','corollary','definition','remark','example','assumption','convention'}
def run(args,stdin=None):
 p=subprocess.run(args,input=stdin,text=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,cwd=ROOT)
 if p.returncode:raise RuntimeError(' '.join(map(str,args))+'\n'+p.stderr[-5000:]+p.stdout[-1000:])
 return p.stdout

def each(x):
 if isinstance(x,dict):
  yield x
  for v in x.values():yield from each(v)
 elif isinstance(x,list):
  for a in x:yield from each(a)
def plain(inlines):
 return ''.join(x.get('c','') if x.get('t')=='Str' else ' ' if x.get('t') in ('Space','SoftBreak','LineBreak') else x['c'][1] if x.get('t')=='Math' else plain(x.get('c',[])) if isinstance(x.get('c'),list) else '' for x in inlines if isinstance(x,dict))
def metadata_text(value):
 # Metadata is plain text; the actual chapter heading keeps its rendered math.
 value=re.sub(r'\\(?:mathrm|mathbf|mathsf|mathit|operatorname|text)\{([^{}]*)\}',r'\1',value)
 return value.replace('\\,',' ').replace('\\!','').replace('\\;',' ').replace('{','').replace('}','')
def attr_ids(blocks):
 for x in each(blocks):
  if x.get('t') in ('Header','Div','Span','CodeBlock','Link','Image'):
   a=x['c'][1] if x['t']=='Header' else x['c'][0]
   if a[0]:yield a[0]
  if x.get('t')=='Math':
   yield from re.findall(r'\\label\{([^}]+)\}',x['c'][1])
manifest=[];audits=[];all_maths=[]
for n,slug in enumerate(slugs,1):
 source_dir=SRC/f'Paper {n}'
 if not source_dir.exists():source_dir=ASSETS/slug
 source=next(source_dir.glob('*.tex'));pdf=next(source_dir.glob('*.pdf'));original=source.read_text();raw=re.sub(r'(?<!\\)%[^\n]*','',original)
 asset=ASSETS/slug;asset.mkdir(parents=True,exist_ok=True);out=OUT/slug;out.mkdir(parents=True,exist_ok=True)
 if source.resolve()!=(asset/'source.tex').resolve():shutil.copyfile(source,asset/'source.tex')
 if pdf.resolve()!=(asset/'paper.pdf').resolve():shutil.copyfile(pdf,asset/'paper.pdf')
 # Compile in scratch solely to recover the publication's counters. Original PDF is untouched.
 aux_dir=TMP/slug;aux_dir.mkdir(parents=True,exist_ok=True)
 run(['pdflatex','-interaction=nonstopmode','-halt-on-error','-output-directory='+str(aux_dir),str(source.resolve())])
 aux=(aux_dir/(source.stem+'.aux')).read_text(); labels={}
 for lm in re.finditer(r'\\newlabel\{([^}]+)\}\{',aux):
  key=lm.group(1);start=lm.end()
  if key.endswith('@cref') or aux[start:start+1]!='{':continue
  i=start+1;depth=1
  while depth and i<len(aux):
   if aux[i]=='{':depth+=1
   elif aux[i]=='}':depth-=1
   i+=1
  labels[key]=aux[start+1:i-1].replace('{','').replace('}','')
 kinds={k:kind for k,kind in re.findall(r'\\newlabel\{([^}]+)@cref\}\{\{\[([^\]]+)\]',aux)}
 bibs=dict(re.findall(r'\\bibcite\{([^}]+)\}\{([^}]+)\}',aux));bibkeys=re.findall(r'\\bibitem(?:\[[^\]]*\])?\{([^}]+)\}',raw)
 if not bibs:bibs={k:str(i+1) for i,k in enumerate(bibkeys)}
 unresolved=[]
 def ref(m):
  cmd,keys=m.group(1),m.group(2);vals=[]
  for k in keys.split(','):
   k=k.strip();number=labels.get(k)
   if number is None:unresolved.append(k);number=k
   kind=kinds.get(k,'')
   label='('+number+')' if cmd=='eqref' else ((kind.capitalize()+' ') if cmd.lower() in ('cref','autoref') else '')+number
   vals.append(r'\href{#'+k+'}{'+label+'}')
  return ', '.join(vals)
 processed=re.sub(r'\\(Cref|cref|eqref|autoref|pageref|ref)\{([^}]+)\}',ref,raw)
 def cite(m):
  return '['+', '.join(r'\href{#bib-'+k.strip()+'}{'+bibs.get(k.strip(),k.strip())+'}' for k in m.group(2).split(','))+((', '+m.group(1)) if m.group(1) else '')+']'
 processed=re.sub(r'\\(?:cite|citep|citet)(?:\[([^\]]*)\])?\{([^}]+)\}',cite,processed)
 processed=re.sub(r'\\bibitem(?:\[[^\]]*\])?\{([^}]+)\}',lambda m:m.group(0)+r'\hypertarget{bib-'+m.group(1)+'}{}'+r'\textbf{['+bibs[m.group(1)]+']} ',processed)
 # Preserve every source label. Math labels are handled in AST; others become explicit anchors.
 math_pattern=r'\$[^$]*\$|\\\[.*?\\\]|\\\(.*?\\\)|\\begin\{(?:equation\*?|align\*?|gather\*?)\}.*?\\end\{(?:equation\*?|align\*?|gather\*?)\}'
 saved=[]
 def save(m):saved.append(m.group());return f'FOUNDATIONMATHPLACEHOLDER{len(saved)-1}END'
 processed=re.sub(math_pattern,save,processed,flags=re.S)
 processed=re.sub(r'\\label\{([^}]+)\}',lambda m:r'\hypertarget{'+m.group(1)+'}{}',processed)
 processed=re.sub(r'FOUNDATIONMATHPLACEHOLDER(\d+)END',lambda m:saved[int(m.group(1))],processed)
 ast=json.loads(run(['pandoc','-f','latex','-t','json'],processed))
 title=plain(ast['meta']['title']['c']).replace('—',', ').replace('\n',' ').strip()
 # Rebuild the shared section-local statement counter, which pandoc otherwise makes global.
 stmt_info=[];sec=0;counter=0
 for m in re.finditer(r'\\section(\*)?|\\begin\{('+ '|'.join(sorted(statement_envs))+r')\}',raw):
  if m.group(0).startswith('\\section'):
   if not m.group(1):sec+=1;counter=0
  else:counter+=1;stmt_info.append((m.group(2),f'{sec}.{counter}'))
 stmt_iter=iter(stmt_info);statement_count=0
 for node in each(ast['blocks']):
  if node.get('t')=='Div' and set(node['c'][0][1])&statement_envs:
   env,num=next(stmt_iter);statement_count+=1
   # Pandoc prepends a Strong statement heading. Replace only its counter.
   for strong in each(node['c'][1][:1]):
    if strong.get('t')=='Strong':
     strong['c']=[{'t':'Str','c':env.capitalize()+' '+num}];break
 # Abstract is metadata in amsart; include it as an independent opening chapter.
 abstract=ast['meta'].get('abstract',{}).get('c',[])
 blocks=([{'t':'Header','c':[1,['abstract',[],[]],[{'t':'Str','c':'Abstract'}]]}]+abstract if abstract else [])+ast['blocks']
 # Bibliography receives its own chapter and remains complete.
 final=[]
 for b in blocks:
  if b.get('t')=='Div' and 'thebibliography' in b['c'][0][1]:
   final.append({'t':'Header','c':[1,['references',[],[]],[{'t':'Str','c':'References'}]]})
  final.append(b)
 blocks=final
 chunks=[];current=None
 for b in blocks:
  if b.get('t')=='Header' and b['c'][0]==1:
   heading=metadata_text(plain(b['c'][2]));chslug=re.sub(r'[^a-z0-9]+','-',plain(b['c'][2]).lower()).strip('-') or f'chapter-{len(chunks)+1}'
   if any(x['slug']==chslug for x in chunks):chslug+='-'+str(len(chunks)+1)
   current={'slug':chslug,'title':heading,'blocks':[]};chunks.append(current)
  if current is None:current={'slug':'opening','title':'Opening','blocks':[]};chunks.append(current)
  current['blocks'].append(b)
 anchor_urls={}
 for ch in chunks:
  ch['url']=f'/source-readout/{slug}/{ch["slug"]}'
  for id in attr_ids(ch['blocks']):anchor_urls[id]=ch['url']+'#'+id
 # Fix link destinations after chapter boundaries are known, render all mathematical nodes centrally.
 paper_maths=[];raw_nodes=[]
 for ch in chunks:
  for node in each(ch['blocks']):
   if node.get('t')=='Str':node['c']=node['c'].replace('—',', ')
   if node.get('t')=='Link' and node['c'][2][0].startswith('#'):
    dest=node['c'][2][0][1:]
    if dest not in anchor_urls:unresolved.append('anchor:'+dest)
    else:node['c'][2][0]=anchor_urls[dest]
   if node.get('t')=='RawInline' or node.get('t')=='RawBlock':raw_nodes.append(node)
   if node.get('t')=='Math':
    tex=node['c'][1];display=node['c'][0]['t']=='DisplayMath';ids=re.findall(r'\\label\{([^}]+)\}',tex)
    tex=re.sub(r'\\label\{([^}]+)\}',lambda m:(r'\qquad\text{('+labels[m.group(1)]+')}' if display and len(ids)>1 and m.group(1) in labels else ''),tex)
    tex=tex.replace(r'\begin{psmallmatrix}',r'\left(\begin{smallmatrix}').replace(r'\end{psmallmatrix}',r'\end{smallmatrix}\right)')
    if display and len(ids)==1 and ids[0] in labels and r'\tag' not in tex:tex+=r'\tag{'+labels[ids[0]]+'}'
    idx=len(all_maths);all_maths.append({'tex':tex,'display':display,'ids':ids,'paper':slug,'chapter':ch['slug']});paper_maths.append(idx)
    node['t']='RawInline';node['c']=['html',f'FOUNDATIONRENDERMATH{idx}END']
  # Markdown uses expanded source mathematics, not visual HTML.
  mdast=copy.deepcopy(ast);mdast['meta']={};mdast['blocks']=copy.deepcopy(ch['blocks'])
  for node in each(mdast['blocks']):
   if node.get('t')=='RawInline' and node['c'][1].startswith('FOUNDATIONRENDERMATH'):
    idx=int(re.search(r'\d+',node['c'][1]).group());m=all_maths[idx];node['t']='Math';node['c']=[{'t':'DisplayMath' if m['display'] else 'InlineMath'},m['tex']]
  md=run(['pandoc','-f','json','-t','gfm','--wrap=none'],json.dumps(mdast))
  (asset/'chapters').mkdir(exist_ok=True);(asset/'chapters'/f'{ch["slug"]}.md').write_text(md)
  hast={**ast,'meta':{},'blocks':ch['blocks']}
  ch['html']=run(['pandoc','-f','json','-t','html5','--wrap=none'],json.dumps(hast))
  ch['markdown']=md
 # Structural coverage computed from the original full source and converted semantic AST.
 proofs=sum(1 for x in each(blocks) if x.get('t')=='Div' and 'proof' in x['c'][0][1])
 source_proofs=len(re.findall(r'\\begin\{proof\}',raw));source_statements=sum(len(re.findall(r'\\begin\{'+e+r'\}',raw)) for e in statement_envs)
 source_sections=len(re.findall(r'\\(?:section|subsection|subsubsection|paragraph|subparagraph)\*?(?:\[[^\]]*\])?\{',raw));converted_sections=sum(1 for x in each(blocks) if x.get('t')=='Header')-(1 if abstract else 0)-1
 # Rare paragraphs are not counted as source section levels.
 audit={'id':slug,'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'pdfSha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'chapters':len(chunks),'sourceSections':source_sections,'convertedSections':converted_sections,'sourceStatements':source_statements,'convertedStatements':statement_count,'sourceProofs':source_proofs,'convertedProofs':proofs,'sourceLabels':len(labels),'anchorLabelsPresent':sum(k in anchor_urls for k in labels),'bibliographyEntries':len(bibkeys),'mathExpressions':len(paper_maths),'unresolvedReferences':sorted(set(unresolved)),'rawNodes':raw_nodes,'chapterCoverage':[{'title':c['title'],'slug':c['slug'],'url':c['url'],'sourceBlockCount':len(c['blocks'])} for c in chunks]}
 audits.append(audit)
 paper={'id':slug,'slug':slug,'title':title,'doi':'10.5281/zenodo.'+dois[n-1],'series':'foundations','number':n,'description':descriptions[n-1],'url':'/source-readout/'+slug,'publicationUrl':'/papers/'+slug,'pdfUrl':'/publications/source-readout/foundations/'+slug+'/paper.pdf','texUrl':'/publications/source-readout/foundations/'+slug+'/source.tex','markdownUrl':'/publications/source-readout/foundations/'+slug+'/complete.md','chapters':[]}
 for ch in chunks:
  paper['chapters'].append({'slug':ch['slug'],'title':ch['title'],'htmlPath':'content/source-readout/foundations/'+slug+'/'+ch['slug']+'.html','url':ch['url'],'anchors':list(attr_ids(ch['blocks']))})
 (asset/'complete.md').write_text('\n\n'.join(c['markdown'] for c in chunks))
 manifest.append(paper)
 (TMP/(slug+'.intermediate.json')).write_text(json.dumps({'chunks':[{k:v for k,v in c.items() if k!='blocks'} for c in chunks],'audit':audit}))
 print(slug,len(chunks),'chapters',len(paper_maths),'math',proofs,'proofs',len(unresolved),'unresolved',flush=True)
(ROOT/'content/source-readout/foundations.json').write_text(json.dumps({'papers':manifest},indent=2)+'\n')
(TMP/'math-input.json').write_text(json.dumps(all_maths))
(TMP/'audit.json').write_text(json.dumps(audits,indent=2))
print('Run node scripts/convert-source-readout-foundations-math.mjs to render and finalize HTML.')
