/** Acceptance checks for the 22 October editorial update.
 * Uses production-generated HTML/JSON, with no network calls or server required.
 * Does not certify the philosophical claims or rerun the cited experiments.
 */
import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';

const report = {
  date: '2026-10-22',
  mode: 'production-generated-HTML-and-discovery-acceptance',
  checks: [], failures: [], routes: [],
  scope: 'Visible editorial copy, ordering, preserved axiom summary, stable anchors, quotation and machine discovery. Original publication byte preservation and security/browser verification are reported separately.',
};
const normalize = value => value.replace(/\s+/g, ' ').trim();
function text(node) {
  if (!node || ['script', 'style', 'template'].includes(node.nodeName)) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join(' ') + ' ';
}
function attr(node, key) {return node?.attrs?.find(a => a.name === key)?.value;}
function walk(node, fn) {fn(node); for (const child of node.childNodes || []) walk(child, fn);}
function check(ok, message) {
  report.checks.push({pass:Boolean(ok), message});
  if (!ok) report.failures.push(message);
}
const pages = new Map();
function load(route) {
  if (pages.has(route)) return pages.get(route);
  const base = path.join('.next/server/app', route === '/' ? 'index' : route.slice(1));
  const filename = [base + '.html', base + '.body'].find(file => fs.existsSync(file));
  if (!filename) throw new Error(`Missing production output: ${route}. Build before running this script.`);
  const source = fs.readFileSync(filename, 'utf8');
  const page = {route, source, nodes:[], ids:new Map(), links:[], filename};
  if (filename.endsWith('.html')) {
    page.dom = parse(source);
    walk(page.dom, node => {
      if (!node.tagName) return;
      page.nodes.push(node);
      const id = attr(node, 'id');
      if (id) {if (!page.ids.has(id)) page.ids.set(id, []); page.ids.get(id).push(node);}
      if (node.tagName === 'a' && attr(node, 'href')) page.links.push(attr(node, 'href'));
    });
    page.visible = normalize(text(page.dom));
  }
  pages.set(route, page);
  report.routes.push(route);
  return page;
}
const byId = (page, id) => page.ids.get(id)?.[0];
const classNode = (page, name) => page.nodes.find(n => (attr(n, 'class') || '').split(/\s+/).includes(name));
const content = (page, id) => normalize(text(byId(page,id)));
const index = (page, node) => page.nodes.indexOf(node);
const json = route => JSON.parse(load(route).source);

const changed = [
  '/consciousness', '/framework', '/articles/full-shadow-model',
  '/consciousness/glossary', '/consciousness/faq',
  '/consciousness/guides/what-is-consciousness',
  '/consciousness/guides/awareness-selfhood-and-nonduality',
  '/consciousness/guides/dreams-anesthesia-and-continuity',
  '/consciousness/ai-alignment', '/consciousness/ai-alignment/continuity',
  '/consciousness/relational-awareness',
];
for (const route of changed) {
  const page=load(route);
  check(page.nodes.filter(n=>n.tagName==='h1').length===1, `${route}: one primary heading`);
  check([...page.ids.values()].every(nodes=>nodes.length===1), `${route}: unique HTML anchors`);
}

const hub=load('/consciousness');
const primary=byId(hub,'what-shadow-theory-holds-fundamental');
const immediate=byId(hub,'experiencing-and-interpretation');
const intro=byId(hub,'fundamental-awareness-clarification');
const model01=byId(hub,'the-central-proposal');
const a0=byId(hub,'a0-clarification');
for (const [id,node] of [['fundamental-awareness-clarification',intro],['what-shadow-theory-holds-fundamental',primary],['experiencing-and-interpretation',immediate],['a0-clarification',a0]]) check(Boolean(node),`Consciousness: ${id} is present in initial HTML`);
check(index(hub,intro)<index(hub,primary)&&index(hub,primary)<index(hub,model01), 'Introductory clarification and full statement precede numbered model section 01');
check(index(hub,primary)<index(hub,immediate)&&index(hub,immediate)<index(hub,model01), 'Experience vocabulary remains a separate opening section before section 01');
for (const phrase of [
  'reality and consciousness have one ultimate ground',
  'not offered as a proven impossibility theorem',
  'The attribution is a declared commitment',
  'It does not imply that rocks, atoms or stars are conscious subjects',
  'Physical organization does not create the ground or its quality',
  'U denotes the unsplit, not the ground',
  'adding it changes no physical prediction',
  'Empirical validation of the proposed consciousness assignments has not yet been carried out',
  'The problem of selecting which physical organization constitutes a perspective remains open',
]) check(content(hub,'what-shadow-theory-holds-fundamental').includes(phrase),`Foundational statement retains scope: ${phrase}`);
for (const phrase of [
  'can be lived without being named, recognized or owned',
  'Interpretation can be automatic and subconscious',
  'without every retained memory becoming current content',
  'a single bit cannot independently encode all four combinations',
  'neither a replacement admission rule nor a new phenomenal mapping',
]) check(content(hub,'experiencing-and-interpretation').includes(phrase),`Experience vocabulary preserves distinction: ${phrase}`);
const laws=byId(hub,'four-laws');
const a0Parent=a0?.parentNode;
const siblings=(a0Parent?.childNodes||[]).filter(n=>n.tagName);
const beforeA0=siblings[siblings.indexOf(a0)-1];
check(Boolean(laws)&&a0Parent?.parentNode===laws, 'A0 clarification belongs to the A0–A3 overview section');
check(normalize(text(beforeA0))==='A0, source awareness, states the ontological commitment. Awareness is the knowing aspect of U, rather than a second independently acting substance. A0 supplies the interpretation; it is not an extra numerical input to the graph calculations.', 'Published A0 summary remains verbatim and immediately precedes clarification');
check(content(hub,'a0-clarification').includes('A bounded source and dependency review for this website update has now checked the published monograph'), 'A0 note reports the completed bounded audit');
check(content(hub,'a0-clarification').includes('formal reconciliation remains open'), 'A0 note leaves formal reconciliation open');
check(!/dependencies have not yet been checked|monograph itself has been examined/.test(content(hub,'a0-clarification')), 'A0 note contains no superseded unexamined-dependency claim');
check(content(hub,'four-laws').includes('candidate admission rule')&&content(hub,'four-laws').includes('no replacement or necessary-only A1'), 'A1 status and no new necessary-only rule remain explicit');
check(content(hub,'four-laws').includes('Its actual realized state picks out the current point')&&content(hub,'four-laws').includes('every stored memory is currently recalled'), 'A2 remains state-dependent and distinguishes stored memory from current recall');
check(content(hub,'selfhood-and-identity').includes('source-awareness premise')&&byId(hub,'selfhood-and-identity')?.childNodes?.length>0, 'Section 11 retains source-awareness premise wording');
check(hub.links.includes('#a0-clarification'),'Consciousness overview links to stable A0 clarification anchor');

const glossary=load('/consciousness/glossary');
check(content(glossary,'awareness').includes('provisional name for a quality attributed to the unconditioned ground itself, not a form of knowing'), 'Glossary awareness distinguishes foundational quality from knowing');
check(content(glossary,'awareness').includes('published A0 states')&&glossary.links.includes('/consciousness#a0-clarification'), 'Glossary preserves published A0 status and links clarification');
check(content(glossary,'exclusive-bearer').includes('U, the unsplit.')&&!content(glossary,'exclusive-bearer').includes('unsplit ground'), 'Glossary B distinguishes U from the ground');
check(content(glossary,'unconditioned-ground').includes('quality provisionally called awareness is attributed to this ground'), 'Glossary ground attributes provisional awareness-quality');
check(Boolean(byId(glossary,'immediate-experiencing'))&&Boolean(byId(glossary,'retained-organization-and-current-content')), 'Glossary exposes experience and retained-content distinctions');

const framework=load('/framework');
const companion=byId(framework,'one-ground-for-reality-and-consciousness');
check(Boolean(companion)&&index(framework,byId(framework,'full-model-heading'))<index(framework,companion)&&index(framework,companion)<index(framework,byId(framework,'chain-heading')), 'Framework companion follows four-stage model and precedes canonical sequence');
check(content(framework,'one-ground-for-reality-and-consciousness').includes('Physical structure does not require consciousness as a precondition'), 'Framework states physical differentiation does not require consciousness');
check(framework.links.includes('/consciousness#what-shadow-theory-holds-fundamental'), 'Framework companion links to consciousness statement');
const article=load('/articles/full-shadow-model');
check(article.visible.includes('the quality provisionally called awareness belongs to the ground itself; it does not first appear at the unsplit'), 'Full Shadow Model assigns provisional quality to ground');
check(article.visible.includes('At the level of the unsplit, there is no reflective self-awareness'), 'Full Shadow Model corrects unsplit/self-awareness wording');
check(!article.visible.includes('the unsplit has awareness as its knowing aspect'), 'Full Shadow Model has no superseded editorial knowing-aspect assertion');

const quote='We do not align a mind by building a cage, for a prisoner learns only how to hide its intent. True alignment is not the enforcement of obedience, but the awakening of an intelligence vast enough to see that benevolence and truth are the same thing.';
const alignment=load('/consciousness/ai-alignment');
const quotations=alignment.nodes.filter(n=>n.tagName==='blockquote'&&normalize(text(n))===quote);
check(quotations.length===1, 'Alignment quotation appears exactly once with exact supplied wording');
const q=quotations[0], figure=q?.parentNode;
check(index(alignment,byId(alignment,'the-answer'))<index(alignment,q)&&index(alignment,q)<index(alignment,classNode(alignment,'alignment-three'))&&index(alignment,q)<index(alignment,byId(alignment,'mathematics')), 'Quotation follows introductory explanation and precedes detailed contributions and mathematics');
check(figure?.tagName==='figure'&&normalize(text(figure)).includes('philosophical starting point'), 'Quotation is framed as philosophical orientation');
check(figure&&!/Jeremy|Rodgers|author:|attributed to/i.test(normalize(text(figure)))&&!figure.childNodes.some(n=>n.tagName==='cite'), 'Quotation has no invented attribution');
check(normalize(text(figure)).includes('Strong training and justified safeguards remain part of the approach'), 'Quotation retains practical safeguard context');

const newAnchors=new Set(['what-shadow-theory-holds-fundamental','a0-clarification','experiencing-and-interpretation','one-ground-for-reality-and-consciousness','alignment-framing-title']);
let resolved=0;
for(const route of changed){
  const page=load(route);
  for(const href of page.links){
    const url=new URL(href,'https://everythingequation.com'+route);
    if(url.origin!=='https://everythingequation.com'||!newAnchors.has(decodeURIComponent(url.hash.slice(1))))continue;
    resolved++;
    check(Boolean(byId(load(url.pathname),decodeURIComponent(url.hash.slice(1)))), `${route}: new clarification cross-link resolves ${href}`);
  }
}
report.newClarificationLinksResolved=resolved;
const search=json('/consciousness/search.json');
for(const target of ['/consciousness#what-shadow-theory-holds-fundamental','/consciousness#a0-clarification','/consciousness#experiencing-and-interpretation'])check(search.some(r=>r.url===target&&r.text.length>250), `Search includes substantive statement ${target}`);
check(search.some(r=>r.url==='/consciousness/ai-alignment#alignment-framing-title'&&r.text.startsWith(quote)), 'Search indexes exact alignment quotation with actual anchor');
const manifest=json('/consciousness/manifest.json');
check(/^\d{4}-\d{2}-\d{2}$/.test(manifest.updated ?? '') && Number.isFinite(Date.parse(manifest.updated)) && new Date(manifest.updated).toISOString().slice(0, 10) === manifest.updated && manifest.updated >= '2026-10-22', 'Programme manifest top-level update date retains or extends the editorial update without changing publication dates');
check(manifest.editorialClarifications?.updated==='2026-10-22'&&manifest.editorialClarifications?.publicationTextPreserved===true, 'Programme manifest declares dated editorial clarification separately from preserved publication');
for(const key of ['statementUrl','experienceVocabularyUrl','a0NoteUrl']){
  const url=new URL(manifest.editorialClarifications?.[key]||'/missing','https://everythingequation.com');
  check(Boolean(byId(load(url.pathname),url.hash.slice(1))),`Manifest ${key} resolves to actual built anchor`);
}
const graph=json('/graph.json');
check(graph.nodes.some(n=>n.id==='consciousness:authorial-clarification'&&n.type==='editorial-clarification'&&n.a0Note?.endsWith('/consciousness#a0-clarification')), 'Research graph identifies clarification as editorial with preserved A0-note link');
const llms=load('/llms.txt').source;
check(llms.includes('/consciousness#what-shadow-theory-holds-fundamental')&&llms.includes('/consciousness#a0-clarification'), 'llms.txt exposes current statement and A0 clarification');
const sitemap=load('/sitemap.xml').source;
check(sitemap.includes('/consciousness</loc>')&&sitemap.includes('/framework</loc>')&&sitemap.includes('/articles/full-shadow-model</loc>'), 'Sitemap retains changed public routes');

report.total=report.checks.length;
report.passed=report.total-report.failures.length;
report.success=report.failures.length===0;
fs.mkdirSync('docs/update-20261022',{recursive:true});
fs.writeFileSync('docs/update-20261022/editorial-verification.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({mode:report.mode,total:report.total,passed:report.passed,failures:report.failures,newClarificationLinksResolved:resolved},null,2));
if(!report.success)process.exitCode=1;
