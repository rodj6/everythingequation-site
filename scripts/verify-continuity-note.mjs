/** Checks the built research note, complete source content and programme links.
 * Run after npm run build. Does not rerun the note's cited experiments.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {parse,parseFragment} from 'parse5';

const route='/consciousness/ai-alignment/continuity';
const paper='/papers/conscious-scaffolding-and-preference-for-continuity';
const root='content/consciousness/continuity-note';
const source=JSON.parse(fs.readFileSync('docs/continuity-note/pdf-transcription.json','utf8'));
const sections=JSON.parse(fs.readFileSync(`${root}/sections.json`,'utf8'));
const coverage=JSON.parse(fs.readFileSync('docs/continuity-note/source-to-web-coverage.json','utf8'));
const report={mode:'production-generated-HTML-and-source-fidelity',checks:0,failures:[],sourceParagraphs:0,references:source.references.length,routes:[],internalDestinations:0,browserInspection:'Unavailable: managed environment lacks the browser-control capability required by the Sites skill. No desktop/mobile browser rendering or running preview was inspected.',scientificExperimentsRerun:false};
const check=(ok,message)=>{report.checks++;if(!ok)report.failures.push(message);};
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');
const cache=new Map();
function load(url){
  if(cache.has(url))return cache.get(url);
  const stem='.next/server/app'+(url==='/'?'/index':url);
  const file=[stem+'.html',stem+'.body','public'+url].find(f=>fs.existsSync(f)&&fs.statSync(f).isFile());
  const result={file,text:file?fs.readFileSync(file,'utf8'):'',ids:new Set(),nodes:[],links:[]};
  if(file?.endsWith('.html'))walk(parse(result.text),n=>{
    if(!n.tagName)return;const attrs=Object.fromEntries((n.attrs||[]).map(a=>[a.name,a.value]));
    result.nodes.push({tag:n.tagName,attrs});if(attrs.id)result.ids.add(attrs.id);if(n.tagName==='a'&&attrs.href)result.links.push(attrs.href);
  });
  cache.set(url,result);return result;
}
function walk(n,fn){fn(n);for(const c of n.childNodes||[])walk(c,fn);}
function visible(html){const values=[];walk(parseFragment(html),n=>{if(n.nodeName==='#text'&&!['script','style'].includes(n.parentNode?.nodeName))values.push(n.value);});return values.join(' ');}
const norm=s=>s.normalize('NFKC').replace(/[\s\u2018\u2019'".,;:!?()[\]{}-]+/g,'').toLowerCase();
const local=new Set();
for(const url of [route,paper,'/','/consciousness','/consciousness/research','/consciousness/ai-alignment','/consciousness/ai-alignment/read','/research-map','/articles','/papers','/consciousness/monograph','/consciousness/development','/consciousness/glossary','/consciousness/faq']){
  const page=load(url);report.routes.push(url);check(Boolean(page.file),`Built route absent ${url}`);
  check(page.nodes.filter(n=>n.tag==='h1').length===1,`${url}: expected one h1`);
  check(page.ids.size===page.nodes.filter(n=>n.attrs.id).length,`${url}: duplicate HTML IDs`);
  // The catalogue intentionally links through the publication record. The note
  // itself uses local fragment links rather than redundant links to its own URL.
  check(page.links.some(l=>l===route||l.startsWith(route+'#')||(url==='/papers'&&l===paper)||(url===route&&l.startsWith('#'))),`${url}: no discovery route to complete note`);
  for(const href of page.links){const u=new URL(href,'https://local.test'+url);if(u.origin==='https://local.test')local.add(u.pathname+u.hash);}
  for(const n of page.nodes.filter(n=>n.tag==='link'&&n.attrs.rel==='stylesheet'))check(fs.existsSync(path.join('.next',n.attrs.href.replace(/^\/_next\//,''))),`${url}: compiled stylesheet absent`);
}
for(const target of local){const u=new URL(target,'https://local.test');const page=load(u.pathname);check(Boolean(page.file),`Broken internal destination ${target}`);if(u.hash&&page.file?.endsWith('.html'))check(page.ids.has(decodeURIComponent(u.hash.slice(1))),`Broken anchor ${target}`);}
report.internalDestinations=local.size;
const page=load(route);const html=fs.readFileSync(`${root}/article.html`,'utf8');
check(page.text.includes(html),'Complete note absent from initial production HTML');
const rendered=norm(visible(html));
for(const section of [source.abstract,...source.sections]){
  for(const paragraph of section.paragraphs){report.sourceParagraphs++;check(rendered.includes(norm(paragraph)),`Source paragraph omitted: ${section.source}: ${paragraph.slice(0,95)}`);}
  check(page.ids.has(section.anchor),`Missing source section anchor ${section.anchor}`);
}
check(source.sections.filter(s=>s.source.startsWith('Section ')).length===9,'Expected9 numbered source sections');
for(const ref of source.references){check(page.ids.has('ref-'+ref.number),`Reference ${ref.number} anchor absent`);check(rendered.includes(norm(ref.text)),`Reference ${ref.number} bibliographic text incomplete`);check(page.links.includes(ref.url),`Reference ${ref.number} source URL differs from PDF annotation`);}
for(const e of coverage.entries)check(page.ids.has(e.destination.split('#')[1]),`Coverage anchor absent ${e.destination}`);
check(sha(fs.readFileSync(`${root}/article.md`))===coverage.sourceMarkdownSha256,'Source Markdown differs from conversion inventory');
check(sha(html)===coverage.htmlSha256,'Maintained article HTML differs from conversion inventory');
const pdf=fs.readFileSync('public/publications/consciousness/continuity-note/continuity-note.pdf');check(pdf.subarray(0,5).toString()==='%PDF-','Invalid publication PDF');check(sha(pdf)===source.sourceSha256,'Supplied PDF changed');
const doi='https://doi.org/10.5281/zenodo.23424138';check(page.links.includes(doi),'Publication DOI absent');check(load(paper).links.includes(doi),'Catalogue DOI absent');
for(const name of ['article.md','article.html'])check(!fs.readFileSync(`${root}/${name}`,'utf8').includes('\u2014'),`${name}: em dash in adapted prose`);
check(!/AI.assistance disclosure|written entirely by a human|no AI assistance/i.test(page.text),'Unexpected authorship claim/disclosure');
check(page.nodes.find(n=>n.tag==='link'&&n.attrs.rel==='canonical')?.attrs.href.endsWith(route),'Article canonical incorrect');
const schema=[];walk(parse(page.text),n=>{if(n.tagName==='script'&&n.attrs?.some(a=>a.name==='type'&&a.value==='application/ld+json')){try{schema.push(JSON.parse(n.childNodes.map(c=>c.value||'').join('')));}catch{check(false,'Invalid JSON-LD');}}});
const article=schema.find(s=>s['@id']?.endsWith('#note'));check(article?.identifier==='10.5281/zenodo.23424138'&&article?.genre==='Philosophical research note','Research-note publication identity incorrect');
const json=url=>JSON.parse(load(url).text);
const manifest=json(route+'/manifest.json');check(manifest.sections.length===12&&manifest.relationship.type==='supplements','Research-note manifest incomplete');check(manifest.relationship.doi==='10.5281/zenodo.23294465','Parent publication relationship incorrect');
const programme=json('/consciousness/manifest.json');check(programme.publicationCount===9&&programme.investigationCount===7&&programme.researchNoteCount===1,'Incorrect programme publication/note/investigation count');
check(json('/consciousness/ai-alignment/manifest.json').companionResearchNotes?.some(n=>n.publication.doi==='10.5281/zenodo.23424138'),'Parent reading manifest omits note');
const search=json('/consciousness/search.json').filter(s=>s.url.startsWith(route));report.searchRecords=search.length;check(search.length===13,'Expected overview plus12 indexed article sections');
for(const section of sections)check(search.some(r=>r.url===route+'#'+section.id),`Search lacks ${section.id}`);
for(const term of ['cumulative incorporation','nonbranching','calm-associated','1,200','non-aversive','a coordinated fleet','Pain Axis'])check(search.some(s=>(s.title+' '+s.text).toLowerCase().includes(term.toLowerCase())),`Search omits substantive term ${term}`);
const graph=json('/graph.json');const ids=new Set(graph.nodes.map(n=>n.id));
check(ids.has('consciousness:continuity-note'),'Graph omits note');
for(const edge of graph.edges.filter(e=>e.from?.includes('continuity-note')||e.to?.includes('continuity-note')))check(ids.has(edge.from)&&ids.has(edge.to),'Dangling note graph edge');
check(graph.edges.some(e=>e.from==='consciousness:continuity-note'&&e.to==='consciousness:alignment'&&e.relation==='supplements'),'Graph lacks companion relationship');
const sitemap=load('/sitemap.xml').text;check(sitemap.includes(route+'</loc>')&&sitemap.includes(paper+'</loc>'),'Sitemap omits publication routes');
const feed=load('/feed.xml').text;check((feed.match(/\/consciousness\/ai-alignment\/continuity<\/id>/g)||[]).length===1,'Atom feed should contain one note entry');check(load('/llms.txt').text.includes('Conscious scaffolding and the preference for continuity'),'Machine text omits note');
check(load('/consciousness').text.includes('NINE PUBLICATIONS'),'Hub publication total stale');
for(const url of ['/','/consciousness','/consciousness/research','/research-map','/consciousness/ai-alignment'])check(load(url).ids.has('continuity-feature-title'),`${url}: prominent note feature absent`);
const image=fs.readFileSync('public/publications/consciousness/continuity-note/social.png');check(image.readUInt32BE(16)===1200&&image.readUInt32BE(20)===630,'Social card dimensions incorrect');
const css=fs.readFileSync('src/app/consciousness/ai-alignment/continuity/continuity.css','utf8');check(css.includes('@media(max-width:720px)')&&css.includes('@media(max-width:430px)')&&css.includes('grid-template-columns:1fr'),'Responsive article layout rules absent');check(css.includes('focus-visible')&&css.includes('prefers-reduced-motion'),'Accessibility styles absent');
report.passed=report.checks-report.failures.length;
fs.writeFileSync('docs/continuity-note/verification.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(report.failures.length)process.exitCode=1;
