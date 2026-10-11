/** Check the production discovery outputs against the complete reader.
 * Static build: node scripts/verify-alignment-discovery.mjs --static
 * HTTP option: node scripts/verify-alignment-discovery.mjs http://127.0.0.1:3000
 */
import fs from 'node:fs';

const staticMode = process.argv.includes('--static');
const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '');
const route = '/consciousness/ai-alignment';
const reader = `${route}/read`;
const paper = '/papers/reflective-alignment-ai-consciousness';
const failures = [];
let checks = 0;
function check(condition, message) { checks++; if (!condition) failures.push(message); }
function result() {
  return { mode: staticMode ? 'production-generated-output' : 'HTTP', checks, passed: checks - failures.length, failures };
}
async function read(path) {
  if (staticMode) {
    const stem = `.next/server/app${path === '/' ? '/index' : path}`;
    const file = [`${stem}.html`, `${stem}.body`, `public${path}`].find(candidate => fs.existsSync(candidate));
    check(Boolean(file), `${path}: production output/public asset is missing`);
    return file ? fs.readFileSync(file) : Buffer.alloc(0);
  }
  const response = await fetch(base + path, { signal: AbortSignal.timeout(60000) });
  check(response.status === 200, `${path}: HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}
const paths = [route, reader, `${route}/manifest.json`, '/consciousness/manifest.json', '/consciousness/search.json', '/articles', '/papers', paper, '/sitemap.xml', '/feed.xml', '/llms.txt', '/graph.json'];
const responses = new Map(await Promise.all(paths.map(async path => {
  return [path, (await read(path)).toString('utf8')];
})));
if (failures.length) {
  console.log(JSON.stringify(result(), null, 2));
  process.exit(1);
}
const text = path => responses.get(path) || '';
const manifest = JSON.parse(text(`${route}/manifest.json`));
const programme = JSON.parse(text('/consciousness/manifest.json'));
const search = JSON.parse(text('/consciousness/search.json'));
const graph = JSON.parse(text('/graph.json'));
const ids = new Set([...text(reader).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
check(manifest.publication.doi === '10.5281/zenodo.23294465', 'Manifest DOI differs from the supplied paper');
check(manifest.publication.version === '2.1', 'Manifest version differs from the supplied paper');
check(programme.alignment?.completeTextUrl === reader, 'Consciousness manifest omits complete alignment edition');
for (const section of manifest.sections) {
  check(ids.has(section.id), `Manifest links to missing reader anchor #${section.id}`);
  check(text('/llms.txt').includes(`${reader}#${section.id}`), `AI inventory omits section #${section.id}`);
  const record = search.find(item => item.url === `${reader}#${section.id}`);
  check(Boolean(record?.text?.length > 30), `Search omits substantive section #${section.id}`);
}
for (const path of [route, reader, paper]) {
  check(text('/sitemap.xml').includes(`${path}</loc>`), `Sitemap omits ${path}`);
  const html = text(path);
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  check(Boolean(canonical && new URL(canonical).pathname === path), `${path}: canonical metadata does not identify this route`);
  check(/<title>[^<]*alignment/i.test(html), `${path}: descriptive alignment title absent`);
  check(/<meta\b[^>]*name="description"[^>]*content="[^\"]{20,}"/.test(html), `${path}: description metadata absent`);
  check(!/<meta\b[^>]*name="robots"[^>]*content="[^\"]*noindex/.test(html), `${path}: incorrectly marked noindex`);
  const structured = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  check(structured.some(item => item['@type'] === 'ScholarlyArticle' && item.identifier === manifest.publication.doi), `${path}: ScholarlyArticle publication identity absent`);
  check(html.includes('https://doi.org/10.5281/zenodo.23294465'), `${path}: DOI link absent`);
  check(!/class="[^\"]*katex-error/.test(html), `${path}: invalid rendered mathematics`);
}
for (const path of [route, reader]) {
  check(text(path).includes('type="text/markdown"') && text(path).includes(manifest.publication.markdownUrl), `${path}: alternate mathematical Markdown discovery link absent`);
}
const feedEntries = [...text('/feed.xml').matchAll(/<entry>[\s\S]*?<\/entry>/g)].map(match => match[0]);
check(feedEntries.filter(entry => entry.includes(`${route}</id>`)).length === 1, 'Atom feed should contain exactly one entry for the alignment article');
check(text('/articles').includes(`href="${route}"`), 'Article index does not link directly to the programme edition');
check(!text('/articles').includes('href="/articles/reflective-alignment-ai-consciousness"'), 'Article index links to a duplicate/missing article route');
check(text('/papers').includes(paper), 'Paper index omits the new publication record');
for (const suffix of ['alignment.pdf', 'alignment.md']) {
  check(text(paper).includes(`/publications/consciousness/alignment/${suffix}`), `Paper record omits ${suffix}`);
}
const nodeIds = new Set(graph.nodes.map(node => node.id));
check(nodeIds.size === graph.nodes.length, 'Research graph has duplicate node identifiers');
check(nodeIds.has('consciousness:alignment'), 'Research graph omits alignment edition');
for (const edge of graph.edges.filter(edge => edge.from?.startsWith('consciousness:alignment') || edge.to?.startsWith('consciousness:alignment'))) {
  check(nodeIds.has(edge.from) && nodeIds.has(edge.to), `Alignment research edge has missing endpoint: ${edge.from} -> ${edge.to}`);
}
for (const format of ['alignment.pdf', 'alignment.md']) {
  const path = `/publications/consciousness/alignment/${format}`;
  const body = await read(path);
  if (!staticMode) check(body.equals(fs.readFileSync(`public${path}`)), `${path}: served source differs from packaged source`);
  check(body.length > 1000, `${path}: source asset is empty or unexpectedly short`);
  if (format.endsWith('.pdf')) check(body.subarray(0, 5).toString() === '%PDF-', `${path}: expected PDF format`);
  else check(body.toString('utf8').includes('10.5281/zenodo.23294465'), `${path}: Markdown publication DOI absent`);
}
console.log(JSON.stringify(result(), null, 2));
if (failures.length) process.exitCode = 1;
