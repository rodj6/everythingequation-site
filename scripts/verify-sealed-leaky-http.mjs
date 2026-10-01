/** Verify the complete Sealed or Leaky edition against initial production HTTP.
 * Run from the site root: node scripts/verify-sealed-leaky-http.mjs http://127.0.0.1:3010
 * Uses parse5 (a declared development dependency). External DOI resolution is separate.
 */
import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawn} from 'node:child_process';
import {parse,parseFragment} from 'parse5';
const base=(process.argv.find(a=>a.startsWith('http'))||'http://127.0.0.1:3010').replace(/\/$/,'');
let server;
if(process.argv.includes('--start-server')){
 server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',new URL(base).port],{env:{...process.env,SKIP_ZENODO:'1'},stdio:'ignore'});
 for(let i=0;i<80;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));}
}
const canonicalOrigin=process.env.NEXT_PUBLIC_SITE_URL||'https://everythingequation.com';
const documents=JSON.parse(fs.readFileSync('content/sealed-or-leaky/index.json','utf8'));
const audit=JSON.parse(fs.readFileSync('public/publications/sealed-or-leaky/source-coverage.json','utf8'));
const report={checkedAt:new Date().toISOString(),base,checks:[],failures:[],technicalDocuments:documents.length,formulas:0,sourceTargets:0,downloads:0,localTargets:0};
const check=(name,pass,detail)=>{report.checks.push({name,pass,...(detail===undefined?{}:{detail})});if(!pass)report.failures.push(name);};
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
function inspect(html,fragment=false){
 const root=(fragment?parseFragment:parse)(html),ids=new Set(),duplicates=[],links=[],metas=[],annotations=[],jsonLd=[];let canonical,title='',mainText='';
 const text=n=>(n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join(''));
 function walk(n){const a=Object.fromEntries((n.attrs||[]).map(x=>[x.name,x.value]));
  if(a.id){if(ids.has(a.id))duplicates.push(a.id);ids.add(a.id);}
  if((n.tagName==='a'||n.tagName==='link')&&a.href)links.push(a.href);
  if(n.tagName==='img'&&a.src)links.push(a.src);
  if(n.tagName==='meta')metas.push(a);
  if(n.tagName==='title')title=text(n);
  if(n.tagName==='link'&&a.rel==='canonical')canonical=a.href;
  if(n.tagName==='annotation'&&a.encoding==='application/x-tex')annotations.push(text(n));
  if(n.tagName==='script'&&a.type==='application/ld+json'){try{jsonLd.push(JSON.parse(text(n)));}catch{jsonLd.push({invalid:true});}}
  if(n.tagName==='main')mainText=text(n);
  for(const c of n.childNodes||[])walk(c);
 }walk(root);return{ids,duplicates,links,metas,annotations,jsonLd,canonical,title,mainText};
}
const cache=new Map();
async function read(route){if(!cache.has(route))cache.set(route,(async()=>{const r=await fetch(base+route,{signal:AbortSignal.timeout(60000)});const bytes=Buffer.from(await r.arrayBuffer()),html=bytes.toString('utf8'),type=r.headers.get('content-type')||'';return{status:r.status,bytes,html,type,parsed:type.includes('text/html')?inspect(html):null};})());return cache.get(route);}
const batches=async(items,fn)=>{for(let i=0;i<items.length;i+=4)await Promise.all(items.slice(i,i+4).map(fn));};
const local=new Map();
function addLocal(from,href){if(/^(mailto:|tel:|javascript:|data:)/i.test(href))return;const u=new URL(href,base+from);if(![new URL(base).origin,canonicalOrigin,'https://everythingequation.com','https://www.everythingequation.com'].includes(u.origin)||u.pathname.startsWith('/_next/'))return;local.set(u.pathname+u.search+u.hash,from);}
async function download(route,expectedHash){const r=await read(route);check(`${route}: download HTTP200`,r.status===200);const file=`public${route}`;check(`${route}: byte-exact download`,fs.existsSync(file)&&hash(r.bytes)===hash(fs.readFileSync(file)));if(expectedHash)check(`${route}: source identity`,hash(r.bytes)===expectedHash);report.downloads++;}
try{
 check('All 17 technical documents present',documents.length===17);
 const routes=['/sealed-or-leaky','/papers/sealed-or-leaky','/articles/sealed-or-leaky','/articles/full-shadow-model',...documents.map(d=>d.url)];
 const integration=['/','/framework','/atlas','/consciousness','/consciousness/research','/consciousness/faq','/consciousness/glossary','/papers','/papers/non-source-projection-and-internal-identifiability','/papers/bulk-to-brane-projection'];
 await batches(routes,async route=>{const r=await read(route);check(`${route}: HTTP200`,r.status===200);});
 const titles=new Set();
 for(const route of routes){const r=await read(route),p=r.parsed;if(!p){check(`${route}: HTML`,false);continue;}
  check(`${route}: unique nonempty title`,!!p.title&&!titles.has(p.title));titles.add(p.title);
  check(`${route}: canonical`,p.canonical===canonicalOrigin+route,p.canonical);
  check(`${route}: description`,p.metas.some(m=>m.name==='description'&&m.content));
  check(`${route}: indexable`,!p.metas.some(m=>m.name==='robots'&&/noindex/.test(m.content)));
  check(`${route}: structured data`,p.jsonLd.length>0&&!p.jsonLd.some(x=>x.invalid));
  check(`${route}: no duplicate IDs`,p.duplicates.length===0,p.duplicates);
  check(`${route}: no failed math or references`,!r.html.includes('katex-error')&&!r.html.includes('unresolved-reference'));
  for(const href of p.links)addLocal(route,href);
 }
 for(const d of documents){const r=await read(d.url),source=fs.readFileSync(`content/sealed-or-leaky/${d.slug}.html`,'utf8'),p=inspect(source,true);
  check(`${d.url}: full maintained text in initial HTML`,r.html.includes(source));
  check(`${d.url}: exact TeX annotation multiset`,JSON.stringify([...r.parsed.annotations].sort())===JSON.stringify([...p.annotations].sort()));
  check(`${d.url}: equation count matches source inventory`,p.annotations.length===d.stats.equations,{actual:p.annotations.length,expected:d.stats.equations});
  report.formulas+=p.annotations.length;
  for(const s of d.sections)check(`${d.url}: heading #${s.anchor}`,r.parsed.ids.has(s.anchor));
  check(`${d.url}: Chapter metadata`,r.parsed.jsonLd.some(x=>x['@type']==='Chapter'));
  await download(d.markdownUrl);
 }
 for(const item of [...Object.entries(audit.labels).map(([key,x])=>({key,...x})),...audit.elements,...audit.bibliographyElements]){const u=new URL(item.url,base),r=await read(u.pathname);check(`Source target ${item.key||item.kind||item.anchor}: ${item.url}`,r.status===200&&r.parsed?.ids.has(decodeURIComponent(u.hash.slice(1))));report.sourceTargets++;}
 await download('/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1.tex',audit.sourceSha256);
 await download('/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1.pdf',audit.pdfSha256);
 for(const file of ['Sealed_or_Leaky_v3.1_Verification.py','sealed-or-leaky.md','verification_report.json','source-coverage.json'])await download(`/publications/sealed-or-leaky/${file}`);
 for(const route of integration){const r=await read(route);check(`${route}: integrated route HTTP200`,r.status===200);if(r.parsed){check(`${route}: integration has no duplicate IDs`,r.parsed.duplicates.length===0,r.parsed.duplicates);for(const href of r.parsed.links)addLocal(route,href);}}
 await batches([...local],async([href,from])=>{const u=new URL(href,base),r=await read(u.pathname+u.search);check(`${from}: target ${href}`,r.status===200,{status:r.status});if(u.hash&&r.parsed)check(`${from}: anchor ${href}`,r.parsed.ids.has(decodeURIComponent(u.hash.slice(1))));});report.localTargets=local.size;
 const manifest=JSON.parse((await read('/sealed-or-leaky/manifest.json')).html),search=JSON.parse((await read('/sealed-or-leaky/search.json')).html);
 check('Manifest has correct DOI',manifest.publication.doi==='10.5281/zenodo.23077474');
 check('Manifest lists all sections',manifest.documents.length===documents.length);
 for(const d of documents){check(`Search contains ${d.slug}`,search.some(x=>x.url===d.url&&x.text.length>50));}
 const sitemap=(await read('/sitemap.xml')).html,robots=(await read('/robots.txt')).html;
 for(const route of routes)check(`Sitemap contains ${route}`,sitemap.includes(canonicalOrigin+route+'<'));
 check('Robots serves crawlable site',!/^Disallow:\s*\/$/mi.test(robots));
}catch(e){report.failures.push(e.message);report.error=e.stack;}
report.passed=report.failures.length===0;report.checkCount=report.checks.length;
report.scope='Production HTTP initial HTML, all technical TeX annotation multisets, maintained full text, source anchors, download hashes, local links, metadata, manifest, search and sitemap. External DOI resolution and browser rendering are separate.';
fs.mkdirSync('docs/sealed-or-leaky',{recursive:true});fs.writeFileSync('docs/sealed-or-leaky/http-verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({passed:report.passed,checks:report.checkCount,technicalDocuments:report.technicalDocuments,formulas:report.formulas,sourceTargets:report.sourceTargets,downloads:report.downloads,localTargets:report.localTargets,failures:report.failures},null,2));if(!report.passed)process.exitCode=1;
server?.kill();
