import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
const root=process.cwd(),tmp=path.join(root,'tmp/source-readout-foundations');
const maths=JSON.parse(fs.readFileSync(path.join(tmp,'math-input.json'),'utf8'));
const audit=JSON.parse(fs.readFileSync(path.join(tmp,'audit.json'),'utf8'));
const errors=[];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const rendered=maths.map((m,i)=>{
 try{return m.ids.map(id=>`<span id="${esc(id)}"></span>`).join('')+katex.renderToString(m.tex,{displayMode:m.display,output:'htmlAndMathml',throwOnError:true,strict:'ignore',trust:false,macros:{'\\coloneqq':'\\mathrel{:=}','\\mathds':'\\mathbb'}})}
 catch(e){errors.push({index:i,...m,error:e.message});return `<code class="math-error">${esc(m.tex)}</code>`;}
});
for(const a of audit){
 const paper=JSON.parse(fs.readFileSync(path.join(tmp,a.id+'.intermediate.json'),'utf8'));
 const out=path.join(root,'content/source-readout/foundations',a.id);
 for(const ch of paper.chunks){const html=ch.html.replace(/FOUNDATIONRENDERMATH(\d+)END/g,(_,n)=>rendered[Number(n)]);fs.writeFileSync(path.join(out,ch.slug+'.html'),html);}
 a.mathErrors=errors.filter(e=>e.paper===a.id);
 a.status=a.sourceProofs===a.convertedProofs&&a.sourceStatements===a.convertedStatements&&a.sourceSections===a.convertedSections&&a.anchorLabelsPresent===a.sourceLabels&&!a.unresolvedReferences.length&&!a.rawNodes.length&&!a.mathErrors.length?'PASS':'FAIL';
 fs.writeFileSync(path.join(root,'public/publications/source-readout/foundations',a.id,'conversion-audit.json'),JSON.stringify(a,null,2));
}
fs.writeFileSync(path.join(root,'content/source-readout/foundations-audit.json'),JSON.stringify({papers:audit,mathErrors:errors},null,2));
console.log(JSON.stringify(audit.map(({id,status,mathErrors,unresolvedReferences,rawNodes,...a})=>({id,status,mathErrors:mathErrors.length,unresolvedReferences,rawNodes:rawNodes.length,...a})),null,2));
if(errors.length)console.error(JSON.stringify(errors.slice(0,30),null,2));
if(audit.some(a=>a.status!=='PASS'))process.exitCode=1;
