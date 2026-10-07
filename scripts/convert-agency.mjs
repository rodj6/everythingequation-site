/** Render the complete edited agency Markdown as static HTML + MathML.
 * Requires Pandoc on PATH and the site's existing js-yaml and KaTeX packages.
 * Run: node scripts/convert-agency.mjs
 * Authoritative editable web text: content/consciousness/agency/source/*.md
 */
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import katex from 'katex';
import yaml from 'js-yaml';
import crypto from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const content=path.join(root,'content/consciousness/agency');
const publicRoot=path.join(root,'public/publications/consciousness/agency');
const base='/consciousness/agency';
const asset='/publications/consciousness/agency';
const sources=[
 ['01-agency-as-a-physical-capacity.md','agency-as-a-physical-capacity','Section 1','1',3,4],
 ['02-operational-contract.md','operational-contract','Section 2','2',5,8],
 ['03-revising-an-evaluative-rule.md','revising-an-evaluative-rule','Section 3','3',9,11],
 ['04-preserving-revision.md','preserving-revision','Section 4','4',11,12],
 ['05-fallible-internal-inquiry.md','fallible-internal-inquiry','Section 5','5',12,14],
 ['evidence-and-adaptive-inquiry.md','evidence-and-adaptive-inquiry','Section 6','6',14,19],
 ['faithful-native-realization.md','faithful-native-realization','Section 7','7',19,24],
 ['ownership-history-and-freedom.md','ownership-history-and-freedom','Sections 8–9','8–9',24,28],
 ['revision-kernels-and-risk.md','revision-kernels-and-risk','Appendix A','A',28,30],
 ['physical-carriers-and-costs.md','physical-carriers-and-costs','Appendix B','B',30,33],
 ['references.md','references','References','References',34,36],
];
const dir=path.join(content,'source');
const primary=new Set(sources.map(s=>s[0]));
const extras=fs.readdirSync(dir).filter(f=>f.endsWith('.md')&&!primary.has(f)).map(f=>{
 const s=fs.readFileSync(path.join(dir,f),'utf8');
 const match=/^---\n([\s\S]*?)\n---\n/.exec(s);
 if(!match) throw new Error(`Supplement needs frontmatter: ${f}`);
 return {f,meta:yaml.load(match[1])};
}).sort((a,b)=>a.meta.order-b.meta.order);
for(const {f,meta} of extras) sources.push([f,meta.slug,`Extended inquiry ${meta.order}`,null,null,null]);
fs.mkdirSync(path.join(publicRoot,'chapters'),{recursive:true});
const inventory=[];const audits=[];const complete=[];
function plain(n){if(!n)return ''; if(Array.isArray(n))return n.map(plain).join('');if(typeof n!=='object')return ''; if(n.t==='Str')return n.c;if(n.t==='Space'||n.t==='SoftBreak')return ' ';if(n.t==='Math')return n.c[1];if(n.t==='Code')return n.c[1];if(n.t==='Link'||n.t==='Image'||n.t==='Span')return plain(n.c[1]);return plain(n.c);}
for(let i=0;i<sources.length;i++){
 const [filename,slug,label,section,pdfStart,pdfEnd]=sources[i];
 let md=fs.readFileSync(path.join(dir,filename),'utf8');
 let meta={};const fm=/^---\n([\s\S]*?)\n---\n/.exec(md);
 if(fm){meta=yaml.load(fm[1]);md=md.slice(fm[0].length);}
 md=md.replaceAll('/publications/agency/figures/','/publications/consciousness/agency/figures/').replaceAll('/consciousness/agency#supplementary','/consciousness/agency#extended-inquiry');
 if(section) md=md.replace(/(?<![\[\\])\[(\d+(?:,\s*\d+)*)\](?![\](])/g,(_,nums)=>nums.split(/,\s*/).map(n=>`[${n}](${base}/references#ref-${n})`).join(', '));
 const kind=section?'published':'supplement';
 const ast=JSON.parse(execFileSync('pandoc',['-f','markdown+tex_math_dollars+raw_html-smart-implicit_figures','-t','json'],{input:md,encoding:'utf8',maxBuffer:30e6}));
 let title=meta.title;const first=ast.blocks.find(b=>b.t==='Header'&&b.c[0]===1);
 if(first){title=plain(first.c[2]);ast.blocks=ast.blocks.filter(b=>b!==first);}
 if(!title)throw new Error(`Missing title ${filename}`);
 const sections=[];const expressions=[];
 function walk(x){if(Array.isArray(x))return x.map(walk);if(!x||typeof x!=='object')return x;
  if(x.t==='Math'){
   const [mode,tex]=x.c;const display=mode.t==='DisplayMath';
   const tag=/\\tag\{([^}]+)\}/.exec(tex);
   const renderTex=tex.replace(/\\tag\{[^}]+\}/g,'');
   let html;try{html=katex.renderToString(renderTex,{displayMode:display,throwOnError:true,strict:'ignore',output:'htmlAndMathml',trust:false});}catch(e){throw new Error(`${slug}: ${tex}\n${e.message}`);}
   expressions.push({display,tex});
   if(display){
    html=html.replace('<span class="katex-display">',`<span class="katex-display" tabindex="0" role="region" aria-label="Mathematical expression${tag?' '+tag[1]:''}; scroll horizontally if needed">`);
    html=`<span class="agency-equation"${tag?` id="eq-${tag[1].replaceAll('.','-')}"`:''}>${html}${tag?`<span class="agency-equation-number">(${tag[1]})</span>`:''}</span>`;
   }
   return {t:'RawInline',c:['html',html]};
  }
  if(x.t==='Header'){sections.push({anchor:x.c[1][0],title:plain(x.c[2]),level:x.c[0],number:''});}
  if(x.t==='Link'){
   const href=x.c[2][0];
   if(!/^(?:[a-z]+:|\/|#)/i.test(href))x.c[2][0]=`${base}/${href}`;
  }
  const out={};for(const [k,v]of Object.entries(x))out[k]=walk(v);return out;
 }
 const rendered=walk(ast);
 let html=execFileSync('pandoc',['-f','json','-t','html5','--wrap=none'],{input:JSON.stringify(rendered),encoding:'utf8',maxBuffer:40e6});
 html=html.replace(/<table>/g,'<div class="agency-table-scroll" role="region" aria-label="Scrollable data table" tabindex="0"><table>').replace(/<\/table>/g,'</table></div>');
 fs.writeFileSync(path.join(content,`${slug}.html`),html);
 const publicMD=`# ${title}\n\n${md.replace(/^# [^\n]+\n/,'').trim()}\n`;
 fs.writeFileSync(path.join(publicRoot,'chapters',`${slug}.md`),publicMD);
 complete.push(`\n\n<!-- ${kind}: ${label}; ${base}/${slug} -->\n\n${publicMD}`);
 const description=meta.description||({
  'agency-as-a-physical-capacity':'Physically caused decisions, evaluative mediation and the three constructive contributions.',
  'operational-contract':'Executable options, retained evaluation, information access and implementation invariance.',
  'revising-an-evaluative-rule':'An editable charter, fresh-case tests and the sharp information–mediation–endorsement inequality.',
  'preserving-revision':'Exactly when bounded inquiry can preserve endorsed amendment and future auditability.',
  'fallible-internal-inquiry':'Finite zero-error limits, exact noisy-read frontiers and repeated-audit risk.',
  'evidence-and-adaptive-inquiry':'The complete sensor family and proof of the first adaptive advantage at B = L + 2.',
  'faithful-native-realization':'Protected returns, actual interventions, paid access and explicit physical schedules.',
  'ownership-history-and-freedom':'What the results establish about local freedom, developmental history and consciousness.',
  'revision-kernels-and-risk':'Complete query recurrences, writable-validator kernels and finite-horizon risk calculations.',
  'physical-carriers-and-costs':'Smooth bit dynamics, Gaussian refinement and detailed time, gate and work bounds.',
  'references':'The complete 24-entry bibliography and publication record.'
 })[slug]||'';
 inventory.push({slug,title,label,kind,order:i+1,url:`${base}/${slug}`,description,sections,markdownUrl:`${asset}/chapters/${slug}.md`,stats:{equations:expressions.length,displayEquations:expressions.filter(x=>x.display).length},source:{section,pdfStart,pdfEnd}});
 audits.push({slug,kind,section,pdfStart,pdfEnd,wordCount:plain(ast.blocks).split(/\s+/).length,mathCount:expressions.length,displayCount:expressions.filter(e=>e.display).length,equationTags:expressions.flatMap(e=>[...e.tex.matchAll(/\\tag\{([^}]+)\}/g)].map(m=>m[1])),sourceSha256:crypto.createHash('sha256').update(md).digest('hex'),renderedSha256:crypto.createHash('sha256').update(html).digest('hex')});
}
fs.writeFileSync(path.join(content,'index.json'),JSON.stringify(inventory,null,2)+'\n');
fs.writeFileSync(path.join(publicRoot,'agency.md'),'# Agency and Free Will\n\nJeremy Rodgers · EverythingEquation.com\n\nFull published-paper treatment with separately identified supplementary inquiry.\n\nPublished source: https://doi.org/10.5281/zenodo.23202999\n'+complete.join(''));
fs.writeFileSync(path.join(publicRoot,'source-coverage.json'),JSON.stringify({publication:'Bounded Agency and Reflective Freedom',doi:'10.5281/zenodo.23202999',sourcePdfSha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(publicRoot,'bounded-agency-and-reflective-freedom.pdf'))).digest('hex'),adaptation:'Complete scientific website adaptation, not a verbatim transcription. Section and equation numbering retained for verification.',published:audits.filter(a=>a.kind==='published'),supplementary:audits.filter(a=>a.kind==='supplement'),figures:[{source:'Figure 1',url:`${asset}/figures/revision-test.svg`,note:'Accessible vector redrawing of the functional diagram; no native component graph is implied.'}],tables:[{source:'Table 1',url:`${base}/evidence-and-adaptive-inquiry#two-exact-benchmarks`,note:'All exact fractions and numerical gains reproduced.'}]},null,2)+'\n');
console.log(JSON.stringify({chapters:inventory.length,mathExpressions:audits.reduce((n,a)=>n+a.mathCount,0),displayExpressions:audits.reduce((n,a)=>n+a.displayCount,0),publishedEquationTags:audits.filter(a=>a.kind==='published').flatMap(a=>a.equationTags)},null,2));
