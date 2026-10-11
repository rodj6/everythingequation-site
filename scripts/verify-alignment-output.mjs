/** Review generated production HTML without a browser or HTTP server.
 * Run after npm run build: node scripts/verify-alignment-output.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from 'parse5';

const report = {mode:'production-generated-output',checks:0,failures:[],routes:[],internalLinks:0};
const check = (ok, message) => { report.checks++; if (!ok) report.failures.push(message); };
const cache = new Map();
function load(route) {
  if(cache.has(route)) return cache.get(route);
  const stem = `.next/server/app${route === '/' ? '/index' : route}`;
  const file = [`${stem}.html`,`${stem}.body`,`public${route}`].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
  const result = {file,html:'',ids:new Set(),nodes:[],links:[],styles:[]};
  if(file?.endsWith('.html')) {
    result.html=fs.readFileSync(file,'utf8');
    function walk(n) {
      if(n.tagName) {
        const a=Object.fromEntries((n.attrs||[]).map(a=>[a.name,a.value]));
        result.nodes.push({tag:n.tagName,attrs:a,node:n});
        if(a.id) result.ids.add(a.id);
        if(n.tagName==='a' && a.href) result.links.push(a.href);
        if(n.tagName==='link' && a.rel==='stylesheet') result.styles.push(a.href);
      }
      for(const c of n.childNodes||[]) walk(c);
    }
    walk(parse(result.html));
  }
  cache.set(route,result); return result;
}
const routes=['/','/consciousness','/consciousness/research','/research-map','/articles','/papers','/consciousness/ai-alignment','/consciousness/ai-alignment/read','/papers/reflective-alignment-ai-consciousness'];
const links=new Set();
for(const route of routes) {
  const doc=load(route);report.routes.push(route);
  check(Boolean(doc.file),`${route}: generated page missing`);
  check(doc.nodes.filter(n=>n.tag==='h1').length===1,`${route}: expected exactly one main heading`);
  check(doc.ids.size===doc.nodes.filter(n=>n.attrs.id).length,`${route}: duplicate HTML ids`);
  for(const href of doc.links) if(href.startsWith('/')||href.startsWith('#')) {
    const u=new URL(href,`https://everythingequation.com${route}`);
    if(u.origin==='https://everythingequation.com') links.add(u.pathname+u.hash);
  }
  for(const href of doc.styles) check(fs.existsSync(path.join('.next',href.replace(/^\/_next\//,''))),`${route}: missing compiled stylesheet ${href}`);
}
for(const href of links) {
  const u=new URL(href,'https://everythingequation.com');const doc=load(u.pathname);
  check(Boolean(doc.file),`Internal destination missing: ${href}`);
  if(u.hash && doc.html) check(doc.ids.has(decodeURIComponent(u.hash.slice(1))),`Internal anchor missing: ${href}`);
}
report.internalLinks=links.size;
const full=load('/consciousness/ai-alignment/read');
const source=fs.readFileSync('content/consciousness/alignment/article.html','utf8');
check(full.html.includes(source),'Complete maintained article differs from initial generated HTML');
check(full.nodes.filter(n=>n.tag==='math').length===295,'Expected all 295 accessible mathematical expressions in initial HTML');
check(full.nodes.filter(n=>n.tag==='annotation'&&n.attrs.encoding==='application/x-tex').length===295,'Expected all 295 original mathematical annotations');
check(!full.html.includes('katex-error'),'KaTeX error in complete reader');
for(const id of ['section-14','prop-7','proof-7','def-1','table-1','ref-54','eq-25']) check(full.ids.has(id),`Missing required source anchor ${id}`);
const mathRegions=full.nodes.filter(n=>n.attrs.class?.split(' ').includes('alignment-equation'));
check(mathRegions.length===23 && mathRegions.every(n=>n.attrs.tabindex==='0' && n.attrs.role==='region' && n.attrs['aria-label']),'All displayed mathematics must be labelled, keyboard-focusable regions');
const tableRegions=full.nodes.filter(n=>n.attrs.class?.split(' ').includes('quantum-table-wrap'));
check(tableRegions.length===1 && tableRegions.every(n=>n.attrs.tabindex==='0'),'Source table must have a keyboard-focusable scroll region');
const editorial=JSON.parse(fs.readFileSync('docs/alignment/independent-content-review.json','utf8'));
check(crypto.createHash('sha256').update(source).digest('hex')===editorial.articleSha256,'Maintained article differs from independently audited edition');
const coverage=JSON.parse(fs.readFileSync('docs/alignment/source-coverage.json','utf8'));
const pdf=fs.readFileSync('public/publications/consciousness/alignment/alignment.pdf');
check(crypto.createHash('sha256').update(pdf).digest('hex')===coverage.sourcePdfSha256,'Packaged PDF differs from authoritative input');
const image=fs.readFileSync('public/publications/consciousness/alignment/social.png');
check(image.readUInt32BE(16)===1200 && image.readUInt32BE(20)===630,'Social preview has incorrect dimensions');
const css=fs.readFileSync('src/app/consciousness/ai-alignment/alignment.css','utf8');
check(css.includes('@media(max-width:720px)')&&css.includes('overflow-x:auto')&&css.includes('minmax(0,1fr)'),'Responsive layout/overflow rules absent');
for(const route of ['/','/consciousness','/consciousness/research','/research-map']) {
  check(load(route).links.includes('/consciousness/ai-alignment'),`${route}: prominent entrance absent`);
}
// Existing major editions must still have generated production pages.
for(const route of ['/monograph','/quantum-measurement','/quantum-measurement/monograph','/consciousness/monograph','/consciousness/development','/consciousness/agency','/consciousness/research/paper-2','/consciousness/research/paper-3','/consciousness/research/paper-4','/consciousness/glossary','/consciousness/faq']) check(Boolean(load(route).file),`Existing publication missing: ${route}`);
report.limitations=['No browser, desktop/mobile visual rendering, interaction, HTTP serving or remote DOI-resolution tests were performed. Responsive CSS and generated semantics are checked statically.'];
fs.writeFileSync('docs/alignment/production-output-verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({checks:report.checks,internalLinks:report.internalLinks,failures:report.failures},null,2));
if(report.failures.length) process.exitCode=1;
