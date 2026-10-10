import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseFragment } from 'parse5';
const root=process.cwd(), docs=JSON.parse(fs.readFileSync('content/quantum-research/index.json','utf8')),audit=JSON.parse(fs.readFileSync('content/quantum-research/audit.json','utf8')),pubs=JSON.parse(fs.readFileSync('content/quantum-research/publications.json','utf8'));
const errors=[], pages=new Map(), results=[];
const newPublications = new Set(['conditional-gaussian-preparation','repeated-position-records','reference-weighted-flows','complete-current-estimates']);
// Independent raw-source scan: neither the converter AST nor its node counts are
// used to establish that every source mathematical expression reaches MathML.
function sourceMath(tex) {
  const out=[]; const token=/\\begin\{(equation\*?|align\*?|gather\*?|multline\*?|displaymath)\}|\\\[|\\\(|(?<!\\)\$/g;
  let m;
  while((m=token.exec(tex))) {
    const env=m[1]; let closing=env?`\\end{${env}}`:m[0]==='\\['?'\\]':m[0]==='\\('?'\\)':'$';
    const begin=token.lastIndex; let end=tex.indexOf(closing,begin);
    while(end>=0 && closing==='$' && tex[end-1]==='\\') end=tex.indexOf(closing,end+1);
    if(end<0) throw new Error(`Unclosed source mathematics at ${begin}`);
    out.push(tex.slice(begin,end)); token.lastIndex=end+closing.length;
  }
  return out;
}
function normalizedMath(tex, labels) {
  return tex.replace(/\\(?:eqref|ref)\{([^}]+)\}/g,(all,key)=>`\\text{${all.startsWith('\\eqref')?'(':''}${labels[key]?.number||key}${all.startsWith('\\eqref')?')':''}}`)
    .replace(/\\(?:label|tag)\{[^}]+\}/g,'').replace(/\\(?:notag|nonumber)\b/g,'')
    .replace(/\\(?:begin|end)\{(?:align\*?|aligned|gather\*?|gathered|split)\}/g,'')
    .replace(/\s+/g,'').trim();
}
function sourceCoverage(p,a,html) {
  const raw=fs.readFileSync(`content/quantum-research/sources/${p.id}.tex`,'utf8');
  const sourceSha256=crypto.createHash('sha256').update(raw).digest('hex');
  if(sourceSha256!==a.sourceSha256) errors.push(`Source hash mismatch ${p.id}`);
  const tex=raw.replace(/(?<!\\)%[^\n]*(?:\n|$)/g,'').split('\\begin{document}')[1].split('\\end{document}')[0];
  const expected=sourceMath(tex).map(t=>normalizedMath(t,a.labels));
  const rendered=[]; const kinds={}; const ids=[];
  walk(parseFragment(html),n=>{
    const kind=n.attrs?.find(v=>v.name==='data-kind')?.value;
    if(kind) kinds[kind]=(kinds[kind]||0)+1;
    const id=n.attrs?.find(v=>v.name==='id')?.value; if(id)ids.push(id);
    if(n.nodeName==='annotation' && n.attrs?.some(v=>v.name==='encoding'&&v.value==='application/x-tex'))
      rendered.push(normalizedMath((n.childNodes||[]).map(c=>c.value||'').join(''),a.labels));
  });
  const counts=new Map();for(const t of rendered)counts.set(t,(counts.get(t)||0)+1);
  const missing=[];for(const t of expected){if(counts.get(t)>0)counts.set(t,counts.get(t)-1);else missing.push(t);}
  if(missing.length)errors.push(`Source mathematics omitted or changed in ${p.id}: ${missing.length} expressions; ${missing.slice(0,3).join(' | ')}`);
  const envs=['theorem','lemma','proposition','corollary','definition','assumption','example','counterexample','remark','proof'];
  for(const env of envs){const count=tex.split(`\\begin{${env}}`).length-1;if((kinds[env]||0)!==count)errors.push(`Source ${env} count mismatch in ${p.id}: ${count} vs ${kinds[env]||0}`);}
  const sourceLabels=[...tex.matchAll(/\\label\{([^}]+)\}/g)].map(m=>m[1]);
  for(const label of sourceLabels)if(!ids.includes(label))errors.push(`Source label omitted in ${p.id}: ${label}`);
  const sourceBibliography=[...tex.matchAll(/\\bibitem(?:\[[^\]]*\])?\{([^}]+)\}/g)].map(m=>m[1]);
  for(const key of sourceBibliography)if(!ids.includes(`bib-${key}`))errors.push(`Bibliography entry omitted in ${p.id}: ${key}`);
  return {sourceSha256,sourceMathExpressions:expected.length,renderedMathExpressions:rendered.length,missingMathExpressions:missing.length,sourceLabels:sourceLabels.length,sourceBibliographyEntries:sourceBibliography.length,sourceProofs:kinds.proof||0};
}
function walk(n,fn){fn(n);for(const c of n.childNodes||[])walk(c,fn);}
for(const d of docs){const f=`content/quantum-research/${d.publicationId}/${d.slug}.html`;const html=fs.readFileSync(f,'utf8'),ids=new Set();walk(parseFragment(html),n=>{const id=n.attrs?.find(a=>a.name==='id')?.value;if(id){if(ids.has(id))errors.push(`Duplicate ${d.url}#${id}`);ids.add(id);}});pages.set(d.url,{html,ids});if(!fs.existsSync(path.join(root,'public',d.markdownUrl)))errors.push(`Missing Markdown ${d.markdownUrl}`);}
for(const [url,{html}] of pages){walk(parseFragment(html),n=>{const href=n.attrs?.find(a=>a.name==='href')?.value;if(!href||!href.startsWith('/quantum-measurement/research/'))return;const [p,h]=href.split('#');const page=pages.get(p);if(!page){if(!pubs.some(x=>p===`/quantum-measurement/research/${x.id}`))errors.push(`Missing page ${url} -> ${href}`);}else if(h&&!page.ids.has(decodeURIComponent(h)))errors.push(`Missing anchor ${url} -> ${href}`);});}
for(const p of pubs){const a=audit.documents.find(d=>d.id===p.id);if(a.status!=='PASS')errors.push(`Conversion failed ${p.id}`);const md=fs.readFileSync(`public/publications/quantum-measurement/research/${p.id}.md`,'utf8');const pdf=fs.readFileSync(`public/publications/quantum-measurement/research/${p.id}.pdf`);const pdfSha256=crypto.createHash('sha256').update(pdf).digest('hex');if(pdfSha256!==a.pdfSha256)errors.push(`PDF hash mismatch ${p.id}`);if(!md.includes(p.title)||!md.includes(p.doi))errors.push(`Missing identity ${p.id}`);const scientificCoverage=newPublications.has(p.id)?sourceCoverage(p,a,docs.filter(d=>d.publicationId===p.id).map(d=>pages.get(d.url).html).join('\n')):undefined;results.push({id:p.id,scientificCoverage,readingPages:docs.filter(d=>d.publicationId===p.id).length,pdfSha256,...a.convertedStats,mathDisplays:docs.filter(d=>d.publicationId===p.id).reduce((n,d)=>n+d.stats.displayEquations,0),markdownBytes:Buffer.byteLength(md)});}
const report={status:errors.length?'FAIL':'PASS',scope:'Structural conversion, internal links, anchors, downloads and source identity. For the four October 9 papers, an independent raw-source scan additionally compares every mathematical expression with rendered MathML and checks all proof, statement, label and bibliography counts. Scientific claims are preserved, not re-audited here.',results,errors};
fs.writeFileSync('content/quantum-research/independent-audit.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
