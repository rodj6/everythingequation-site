/** Verify the actual production HTML, source coverage, discovery and assets.
 * Run after npm run build. Does not run publication research experiments.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse} from 'parse5';

const base='/consciousness/relational-awareness';
const content='content/consciousness/relational-awareness';
const docs=JSON.parse(fs.readFileSync(`${content}/index.json`,'utf8'));
const report={mode:'production-generated-HTML',checks:0,failures:[],routes:[],internalTargets:0,mathExpressions:0,tables:0,browserInspection:'Unavailable in this managed environment; no browser or responsive screenshot checks executed.',researchExperimentsRerun:false};
const check=(ok,message)=>{report.checks++;if(!ok)report.failures.push(message);};
const cache=new Map();
function load(route){
  if(cache.has(route))return cache.get(route);
  const stem=`.next/server/app${route==='/'?'/index':route}`;
  const file=[`${stem}.html`,`${stem}.body`,`public${route}`].find(f=>fs.existsSync(f)&&fs.statSync(f).isFile());
  const data={file,text:file?fs.readFileSync(file,'utf8'):'',ids:new Set(),nodes:[],links:[]};
  if(file?.endsWith('.html')){
    function visit(n){if(n.tagName){const a=Object.fromEntries((n.attrs||[]).map(x=>[x.name,x.value]));data.nodes.push({tag:n.tagName,attrs:a});if(a.id)data.ids.add(a.id);if(n.tagName==='a'&&a.href)data.links.push(a.href);}for(const c of n.childNodes||[])visit(c);}
    visit(parse(data.text));
  }
  cache.set(route,data);return data;
}
const newRoutes=[base,...docs.map(d=>`${base}/${d.slug}`),'/papers/physical-comparison-relational-appearance'];
const integrationRoutes=['/','/consciousness','/consciousness/research','/research-map','/papers','/articles','/consciousness/glossary','/consciousness/faq','/consciousness/monograph','/consciousness/ai-alignment','/consciousness/agency','/consciousness/development','/consciousness/research/paper-2','/consciousness/research/paper-3','/consciousness/research/paper-4'];
const targets=new Set();
for(const route of [...newRoutes,...integrationRoutes]){
  const page=load(route);report.routes.push(route);
  check(Boolean(page.file),`Missing built page ${route}`);
  check(page.nodes.filter(n=>n.tag==='h1').length===1,`${route}: expected one h1`);
  check(page.ids.size===page.nodes.filter(n=>n.attrs.id).length,`${route}: duplicate IDs`);
  for(const link of page.links){const u=new URL(link,`https://local.test${route}`);if(u.origin==='https://local.test')targets.add(u.pathname+u.hash);}
  for(const n of page.nodes.filter(n=>n.tag==='link'&&n.attrs.rel==='stylesheet'))check(fs.existsSync(path.join('.next',n.attrs.href.replace(/^\/_next\//,''))),`${route}: stylesheet missing`);
  if(newRoutes.includes(route)){
    check(page.links.includes('https://doi.org/10.5281/zenodo.23408737'),`${route}: DOI absent`);
    check(!page.text.includes('katex-error'),`${route}: KaTeX error`);
    check(!/AI.assistance|written entirely by a human|no AI assistance/i.test(page.text),`${route}: unintended disclosure or authorship claim`);
    const canonical=page.nodes.find(n=>n.tag==='link'&&n.attrs.rel==='canonical');check(canonical?.attrs.href.endsWith(route),`${route}: canonical mismatch`);
  }
}
for(const target of targets){
  const u=new URL(target,'https://local.test');const page=load(u.pathname);
  check(Boolean(page.file),`Broken internal destination ${target}`);
  if(u.hash&&page.file?.endsWith('.html'))check(page.ids.has(decodeURIComponent(u.hash.slice(1))),`Broken anchor ${target}`);
}
report.internalTargets=targets.size;
const conversion=JSON.parse(fs.readFileSync('docs/relational-awareness/conversion-inventory.json','utf8'));
for(const entry of conversion){
  check(crypto.createHash('sha256').update(fs.readFileSync(entry.source)).digest('hex')===entry.sourceSha256,`${entry.slug}: generated edition is stale relative to maintained Markdown`);
  check(crypto.createHash('sha256').update(fs.readFileSync(`${content}/${entry.slug}.html`)).digest('hex')===entry.htmlSha256,`${entry.slug}: generated HTML differs from conversion inventory`);
}
const coverage=JSON.parse(fs.readFileSync('docs/relational-awareness/source-to-web-coverage.json','utf8'));
for(const entry of coverage.entries.filter(e=>e.disposition==='included')){
  const u=new URL(entry.destination,'https://local.test');const page=load(u.pathname);
  check(page.ids.has(decodeURIComponent(u.hash.slice(1))),`Coverage destination absent from production HTML: ${entry.destination}`);
}
report.coverageRecords=coverage.entries.length;
for(const d of docs){
  const page=load(`${base}/${d.slug}`);const source=fs.readFileSync(`${content}/${d.slug}.html`,'utf8');
  check(page.text.includes(source),`${d.slug}: complete article not present in initial HTML`);
  const count=page.nodes.filter(n=>n.tag==='math').length;report.mathExpressions+=count;
  check(count===d.mathCount,`${d.slug}: MathML count differs from source`);
  check(page.nodes.filter(n=>n.tag==='annotation'&&n.attrs.encoding==='application/x-tex').length===d.mathCount,`${d.slug}: source TeX annotations missing`);
  for(const s of d.sections)check(page.ids.has(s.id),`${d.slug}: section absent ${s.id}`);
  const displays=page.nodes.filter(n=>n.attrs.class?.split(' ').includes('ra-equation'));
  for(const n of displays)check(n.attrs.role==='region'&&n.attrs.tabindex==='0'&&n.attrs['aria-label'],`${d.slug}: display not an accessible scroll region`);
  const tables=page.nodes.filter(n=>n.tag==='table');report.tables+=tables.length;
  const scrolls=page.nodes.filter(n=>n.attrs.class==='ra-table');check(scrolls.length===tables.length&&scrolls.every(n=>n.attrs.role==='region'&&n.attrs.tabindex==='0'),`${d.slug}: table scroll region absent`);
  const md=fs.readFileSync(`${content}/source/${d.source}.md`,'utf8');check(!md.includes('\u2014'),`${d.slug}: adapted prose contains em dash`);
  check(fs.existsSync(`public/publications/consciousness/relational-awareness/${d.slug}.md`),`${d.slug}: mathematical Markdown missing`);
}
const main=load(`${base}/read`);
for(const [section,subcount] of [[1,4],[2,7],[3,3],[4,6],[5,4],[6,4],[7,3]])for(let i=1;i<=subcount;i++)check(main.ids.has(`section-${section}-${i}`),`Missing main subsection ${section}.${i}`);
for(const id of ['appendix-a','appendix-b','references'])check(main.ids.has(id),`Missing main ${id}`);
for(const [section,subcount] of [[1,6],[2,16],[3,9],[4,7],[5,7],[6,7],[7,12],[8,12],[9,6],[10,5]]){
  const page=load(`${base}/module-${String.fromCharCode(96+section)}`);
  for(let i=1;i<=subcount;i++)check(page.ids.has(`section-${section}-${i}`),`Missing supplement subsection ${section}.${i}`);
}
const json=route=>JSON.parse(load(route).text);
const manifest=json(`${base}/manifest.json`);check(manifest.publicationCount===1&&manifest.documents.length===13,'Main and companion should form one publication with13 reading documents');
const programme=json('/consciousness/manifest.json');check(programme.publicationCount===8&&programme.investigationCount===7,'Programme count must be8 publications /7 investigations');
check(programme.relationalAwareness?.publication.doi==='10.5281/zenodo.23408737','Programme manifest omits relational publication');
const search=json('/consciousness/search.json').filter(r=>r.url.startsWith(base));check(search.length>=200,'Incomplete relational search coverage');
for(const d of docs)check(search.some(r=>r.url.startsWith(`${base}/${d.slug}`)),`Search lacks ${d.slug}`);
for(const needle of ['sensory basing','exclusive','finalisation','Brier','SPC-2'])check(search.some(r=>(r.title+' '+r.text).toLowerCase().includes(needle.toLowerCase())),`Search lacks term ${needle}`);
report.searchRecords=search.length;
const graph=json('/graph.json');const nodeIds=new Set(graph.nodes.map(n=>n.id));
for(const edge of graph.edges.filter(e=>e.from?.includes('relational-awareness')||e.to?.includes('relational-awareness')))check(nodeIds.has(edge.from)&&nodeIds.has(edge.to),'Dangling relational graph edge');
const publicationNode=graph.nodes.find(n=>n.id==='paper:physical-comparison-relational-appearance');check(publicationNode?.downloads?.supplementPdf,'Publication graph omits technical PDF');
const sitemap=load('/sitemap.xml').text;for(const route of newRoutes)check(sitemap.includes(route+'</loc>'),`Sitemap lacks ${route}`);
check(load('/llms.txt').text.includes('ten-module')||load('/llms.txt').text.includes('ten technical'),'Machine text omits technical companion');
const feed=load('/feed.xml').text;check((feed.match(/\/consciousness\/relational-awareness<\/id>/g)||[]).length===1,'Atom feed must have exactly one publication entry');
for(const route of ['/consciousness/glossary','/consciousness/faq'])check(load(route).links.some(l=>l.startsWith(base)),`${route}: relational entries missing`);
check(load('/consciousness').text.includes('EIGHT PUBLICATIONS'),'Hub publication count stale');
const inputs=JSON.parse(fs.readFileSync('docs/relational-awareness/publication-inputs.json','utf8'));
for(const input of inputs){const bytes=fs.readFileSync(input.path);check(bytes.subarray(0,5).toString()==='%PDF-',`${input.path}: invalid PDF`);check(crypto.createHash('sha256').update(bytes).digest('hex')===input.sha256,`${input.path}: original PDF changed`);}
const style=fs.readFileSync('src/app/consciousness/relational-awareness/relational-awareness.css','utf8');
check(style.includes('@media(max-width:760px)')&&style.includes('grid-template-columns:1fr'),'Mobile layout rules absent');
check(style.includes('overflow-x:auto')&&style.includes('min-width:0'),'Equation/table containment rules absent');
check(style.includes('focus-visible')&&style.includes('prefers-reduced-motion'),'Keyboard/reduced-motion styles absent');
report.passed=report.checks-report.failures.length;
fs.writeFileSync('docs/relational-awareness/verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(report.failures.length)process.exitCode=1;
