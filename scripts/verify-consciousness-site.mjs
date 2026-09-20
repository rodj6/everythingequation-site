/** Full consciousness HTTP/content integration checks, separate from browser QA.
 * Run against a locally built server: node scripts/verify-consciousness-site.mjs <base-url>
 * Does not contact DOI services or modify external accounts.
 */
import fs from 'node:fs';
import crypto from 'node:crypto';

const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '');
const documents = JSON.parse(fs.readFileSync('content/consciousness/index.json', 'utf8'));
const editorial = JSON.parse(fs.readFileSync('content/consciousness/editorial.json', 'utf8'));
const audit = JSON.parse(fs.readFileSync('content/consciousness/audit.json', 'utf8')).documents[0];
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10)));
const failures = [];
let checks = 0;
function check(condition, message) { checks++; if (!condition) failures.push(message); }
const responses = new Map();
async function read(route, options = {}) {
  const key = route + JSON.stringify(options);
  if (!responses.has(key)) responses.set(key, (async () => {
    const response = await fetch(base + route, { signal: AbortSignal.timeout(60000), ...options });
    const bytes = Buffer.from(await response.arrayBuffer());
    const text = bytes.toString('utf8');
    return { status: response.status, headers: response.headers, bytes, text, ids: new Set([...text.matchAll(/\bid="([^"]+)"/g)].map(match => decode(match[1]))) };
  })());
  return responses.get(key);
}
const routes = ['/', '/papers', '/papers/shadow-theory-and-consciousness', '/problems', '/problems/consciousness', '/research-map', '/about', '/sitemap.xml', '/feed.xml', '/llms.txt', '/graph.json', '/consciousness/manifest.json', '/robots.txt', '/legacy/consciousness-field-theorem', '/papers/zenodo-19324253'];
for (let index = 0; index < routes.length; index += 3) await Promise.all(routes.slice(index, index + 3).map(async route => {
  const response = await read(route); check(response.status === 200, `${route}: HTTP ${response.status}`);
}));

const publicRoutes = ['/consciousness', '/consciousness/monograph', '/consciousness/guides', '/consciousness/glossary', '/consciousness/faq', ...documents.map(document => document.url), ...editorial.guides.map(guide => `/consciousness/guides/${guide.slug}`)];
for (let index = 0; index < publicRoutes.length; index += 3) await Promise.all(publicRoutes.slice(index, index + 3).map(async route => {
  const response = await read(route); check(response.status === 200, `${route}: HTTP ${response.status}`);
}));
const canonicalOrigin = new URL((await read('/')).text.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1] || base).origin;
const canonicalTitles = new Set();
for (const route of publicRoutes) {
  const { text } = await read(route);
  const canonical = text.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  check(Boolean(canonical) && new URL(canonical).pathname === route && new URL(canonical).origin === canonicalOrigin, `${route}: incorrect self canonical ${canonical}`);
  check(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(text), `${route}: accidentally noindexed`);
  check(Boolean(text.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1]), `${route}: missing description`);
  const title = text.match(/<title>([^<]+)<\/title>/)?.[1];
  check(Boolean(title) && !canonicalTitles.has(title), `${route}: missing or duplicate page title`);
  canonicalTitles.add(title);
  check(!/class="[^"]*katex-error/.test(text), `${route}: KaTeX error`);
  check(text.includes('application/ld+json'), `${route}: structured data absent`);
}
let sourceAnchors = 0;
let formulaCount = 0;
for (const document of documents) {
  const response = await read(document.url);
  const maintainedHtml = fs.readFileSync(`content/consciousness/monograph/${document.slug}.html`, 'utf8');
  check(response.text.includes(maintainedHtml), `${document.url}: initial server HTML differs from maintained complete scientific text`);
  for (const section of document.sections) check(response.ids.has(section.anchor), `${document.url}: missing section #${section.anchor}`);
  const renderedMath = (response.text.match(/<annotation encoding="application\/x-tex">/g) || []).length;
  check(renderedMath === document.stats.equations, `${document.url}: expected ${document.stats.equations} accessible mathematical expressions; got ${renderedMath}`);
  formulaCount += renderedMath;
  check(response.text.includes('"@type":"Chapter"'), `${document.url}: missing Chapter metadata`);
}
for (const [label, target] of Object.entries(audit.labels)) {
  const url = new URL(target.url, base); const page = await read(url.pathname);
  check(page.ids.has(decodeURIComponent(url.hash.slice(1))), `Source cross-reference missing: ${label} -> ${target.url}`); sourceAnchors++;
}
for (const guide of editorial.guides) {
  const response = await read(`/consciousness/guides/${guide.slug}`);
  for (const section of guide.sections) {
    check(response.ids.has(section.id), `${guide.slug}: missing section #${section.id}`);
    check(response.text.includes(section.html), `${guide.slug}: full explanatory prose absent from initial HTML`);
  }
  check(response.text.includes('"@type":"Article"'), `${guide.slug}: missing Article metadata`);
}
for (const section of editorial.overview.sections) check((await read('/consciousness')).text.includes(section.html), `Overview omits ${section.id}`);
for (const item of editorial.glossary) check((await read('/consciousness/glossary')).ids.has(item.id), `Glossary omits ${item.id}`);
for (const item of editorial.faq) check((await read('/consciousness/faq')).ids.has(item.id), `FAQ omits ${item.id}`);

const localLinks = new Set();
for (const route of publicRoutes) for (const [, raw] of (await read(route)).text.matchAll(/\bhref="([^"]+)"/g)) {
  const href = decode(raw);
  if (!href.startsWith('/') && !href.startsWith('#')) continue;
  const url = new URL(href, base + route);
  if (url.origin !== base || url.pathname.startsWith('/_next/')) continue;
  localLinks.add(url.pathname + url.search + url.hash);
}
for (const href of localLinks) {
  const url = new URL(href, base);
  const response = await read(url.pathname + url.search);
  check(response.status === 200, `Internal link HTTP ${response.status}: ${href}`);
  if (url.hash && !/\.(pdf|tex|md|png)$/.test(url.pathname)) check(response.ids.has(decodeURIComponent(url.hash.slice(1))), `Internal anchor missing: ${href}`);
}

let downloads = 0;
for (const extension of ['pdf', 'tex', 'md']) {
  const route = `/publications/consciousness/monograph.${extension}`; const response = await read(route);
  check(response.status === 200 && response.bytes.length > 500, `${route}: invalid download`);
  check(sha256(response.bytes) === sha256(fs.readFileSync(`public${route}`)), `${route}: published bytes differ from maintained local artifact`);
  if (extension !== 'md') check(sha256(response.bytes) === (extension === 'pdf' ? audit.pdfSha256 : audit.sourceSha256), `${route}: original supplied hash mismatch`);
  downloads++;
}
for (const document of documents) {
  const response = await read(document.markdownUrl);
  check(response.status === 200, `${document.markdownUrl}: chapter Markdown unavailable`);
  check(sha256(response.bytes) === sha256(fs.readFileSync(`public${document.markdownUrl}`)), `${document.markdownUrl}: chapter Markdown differs from maintained conversion`); downloads++;
}
const search = JSON.parse((await read('/consciousness/search.json')).text);
const records = Array.isArray(search) ? search : search.records;
check(Array.isArray(records) && records.length >= 165, 'Section search inventory incomplete');
check(records.some(record => record.url.includes('/consciousness/guides/can-ai-be-conscious')), 'Search omits the AI guide');
check(records.every(record => !record.text.includes('katex-html') && !record.text.includes('<math')), 'Search exposes duplicated mathematical presentation markup');
for (const record of records) { const url = new URL(record.url, base); check((await read(url.pathname)).ids.has(decodeURIComponent(url.hash.slice(1))) || !url.hash, `Search result target missing: ${record.url}`); }

for (const route of ['/quantum-measurement', '/quantum-measurement/monograph', '/quantum-measurement/pilot-medium', '/quantum-measurement/massive-configuration', '/monograph']) check((await read(route)).status === 200, `Preserved publication route broken: ${route}`);

const sitemap = (await read('/sitemap.xml')).text;
const llms = (await read('/llms.txt')).text;
const feed = (await read('/feed.xml')).text;
const graph = JSON.parse((await read('/graph.json')).text);
const manifest = JSON.parse((await read('/consciousness/manifest.json')).text);
for (const route of ['/consciousness', '/consciousness/monograph', '/consciousness/guides', '/consciousness/glossary', '/consciousness/faq', ...documents.map(document => document.url), ...editorial.guides.map(guide => `/consciousness/guides/${guide.slug}`)]) {
  check(sitemap.includes(route + '</loc>'), `Sitemap omits ${route}`);
}
for (const document of documents) check(llms.includes(document.url), `Machine orientation omits ${document.url}`);
for (const guide of editorial.guides) check(llms.includes(`/consciousness/guides/${guide.slug}`), `Machine orientation omits guide ${guide.slug}`);
check(llms.includes('all admitted finite native continuations'), 'Machine orientation omits all-future scope');
check(llms.includes('no new neural-data validation'), 'Machine orientation omits empirical status');
check(feed.includes('10.5281/zenodo.22853774'), 'Feed omits current publication DOI');
check(!sitemap.includes('/problems/consciousness-field-theorem</loc>'), 'Sitemap retains redirected current-facing predecessor route');
check(manifest.documents.length === documents.length, 'Manifest disagrees with maintained document inventory');
check(manifest.guides.length === editorial.guides.length, 'Manifest disagrees with maintained guide inventory');

const nodeIds = new Set(graph.nodes.map(node => node.id));
check(nodeIds.size === graph.nodes.length, 'Research graph has duplicate node IDs');
for (const edge of graph.edges) check(nodeIds.has(edge.from) && nodeIds.has(edge.to), `Research graph has dangling edge: ${edge.from} -> ${edge.to}`);
for (const id of ['consciousness', 'paper:shadow-theory-and-consciousness', 'spc-2:A0', 'spc-2:A1', 'spc-2:A2', 'spc-2:A3', 'spc-2:completion', 'spc-2:realization', 'spc-2:validation']) check(nodeIds.has(id), `Research graph omits ${id}`);
check(graph.edges.some(edge => edge.from === 'paper:zenodo-19324253' && edge.to === 'paper:shadow-theory-and-consciousness' && edge.relation === 'superseded-by'), 'Research graph omits author-confirmed version lineage');
check(graph.edges.filter(edge => edge.to === 'consciousness' && edge.relation === 'physical-antecedent').length === 3, 'Quantum antecedents missing or relabelled');
check(!graph.edges.some(edge => edge.from === 'paper:zenodo-19324253' && edge.relation === 'supports'), 'Historical predecessor still supports current claims');

const redirect = await read('/problems/consciousness-field-theorem', { redirect: 'manual' });
check(redirect.status === 308, `Historical migration should be 308, received ${redirect.status}`);
check(redirect.headers.get('location') === '/legacy/consciousness-field-theorem', 'Historical migration goes to the wrong page');
const archive = (await read('/legacy/consciousness-field-theorem')).text;
const oldSource = fs.readFileSync('content/manual/problems/consciousness-field-theorem.mdx', 'utf8');
for (const [, fragment] of oldSource.matchAll(/\]\(#([^)]*)\)/g)) check(archive.includes(`id="${fragment}"`), `Historical bookmark target missing: #${fragment}`);
check(archive.includes('not evidence or results of SPC-2'), 'Historical archive lacks clear supersession scope');
check(archive.includes('noindex'), 'Historical archive should follow the existing noindex archive policy');
const paper = (await read('/papers/shadow-theory-and-consciousness')).text;
check(paper.includes('"@type":"Book"'), 'Current publication is not identified as a Book');
check(paper.includes('https://doi.org/10.5281/zenodo.22853774'), 'Current paper DOI is incorrect');
check(!paper.includes('href="undefined"'), 'Current paper contains an undefined download link');
check(!paper.includes('noindex'), 'Current publication accidentally noindexed');
check(paper.includes('/publications/consciousness/social.png'), 'Current publication social image is missing');
const social = await read('/publications/consciousness/social.png');
check(social.status === 200 && social.bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), 'Static social image is not a valid PNG response');
check(social.bytes.length > 24 && social.bytes.readUInt32BE(16) === 1200 && social.bytes.readUInt32BE(20) === 630, 'Static social image dimensions differ from metadata');
const home = (await read('/')).text;
check(home.includes('consciousness-programme-heading'), 'Homepage feature absent');
check(home.includes('Primary without JavaScript') && home.includes('<noscript>'), 'Shared no-JavaScript navigation fallback absent from built HTML');
for (const route of ['/consciousness', '/consciousness/monograph', '/consciousness/guides']) check(home.includes(`href="${route}"`), `Homepage omits ${route}`);
check((await read('/robots.txt')).text.includes('Allow: /'), 'Existing crawl policy changed');

const baseline = JSON.parse(fs.readFileSync('docs/consciousness-integration-baseline.json', 'utf8'));
const siteAfter = fs.readFileSync('src/config/site.ts', 'utf8');
const hero = source => source.match(/heroStatement: `([\s\S]*?)`,/)[1];
check(sha256(hero(siteAfter)) === baseline.heroStatementSha256, 'Original homepage hero statement changed');
check(sha256(fs.readFileSync('content/manual/problems/consciousness-field-theorem.mdx')) === baseline.historicalNotesSha256, 'Original historical note source changed');
const report = { timestamp: new Date().toISOString(), base, checks, passed: checks - failures.length, newHtmlRoutes: publicRoutes.length, sourceAnchors, formulaCount, localLinks: localLinks.size, downloads, failures, scope: 'HTTP/initial HTML, complete maintained text, accessible math counts, links and anchors, formats/source hashes, metadata, machine inventories, provenance and migration. Independent source fidelity audit and browser review remain separate evidence.' };
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/consciousness-site-checks.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
