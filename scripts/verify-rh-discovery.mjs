/** Verify RH discovery in an ordinary Next production build or against HTTP with --base. */
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parse } from 'parse5';

const args = process.argv.slice(2);
const base = args.includes('--base') ? args[args.indexOf('--base') + 1] : undefined;
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://everythingequation.com').replace(/\/$/, '');
const reader = '/articles/riemann-hypothesis';
const citation = '/papers/riemann-hypothesis';
const doi = '10.5281/zenodo.24433884';
const chapters = JSON.parse(await readFile('content/riemann-hypothesis/chapters.json', 'utf8'));
assert(chapters.length > 0, 'Missing chapter index');

const chapterRoutes = chapters.map(chapter => `${reader}/${chapter.slug}`);
const readingRoutes = [reader, ...chapterRoutes];
assert.equal(new Set(readingRoutes).size, readingRoutes.length, 'Repeated chapter route');

async function load(route) {
  if (base) {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30_000) });
    assert(response.ok, `${route} responds with ${response.status}`);
    assert(!/\bnoindex\b/i.test(response.headers.get('x-robots-tag') ?? ''), `${route} sends a noindex header`);
    return response.text();
  }
  const target = route === '/' ? 'index' : route.slice(1);
  const extension = /\.(?:txt|xml|json)$/.test(target) ? 'body' : 'html';
  return readFile(`.next/server/app/${target}.${extension}`, 'utf8');
}

function inspect(html, route) {
  const links = new Set();
  const canonicals = [];
  const metadata = new Map();
  function visit(node) {
    const attrs = Object.fromEntries((node.attrs ?? []).map(attr => [attr.name, attr.value]));
    if (node.nodeName === 'a') links.add(attrs.href);
    if (node.nodeName === 'link' && attrs.rel === 'canonical') canonicals.push(attrs.href);
    if (node.nodeName === 'meta' && attrs.name) metadata.set(attrs.name, attrs.content);
    for (const child of node.childNodes ?? []) visit(child);
  }
  visit(parse(html));
  assert(!/\bnoindex\b/i.test(metadata.get('robots') ?? ''), `${route} has noindex metadata`);
  return { links, canonicals, metadata };
}

for (const route of ['/', '/articles', '/papers']) {
  const { links } = inspect(await load(route), route);
  assert(links.has(reader), `${route} has no server-rendered link to the RH reader`);
  assert(links.has(citation), `${route} has no server-rendered link to the RH citation`);
}

const citationPage = inspect(await load(citation), citation);
assert.deepEqual(citationPage.canonicals, [origin + citation], 'Citation canonical mismatch');
assert.equal(citationPage.metadata.get('citation_doi'), doi);
assert.equal(citationPage.metadata.get('citation_author'), 'Jeremy Rodgers');
assert(citationPage.metadata.get('citation_title')?.includes('A Full Human-Readable Reconstruction from Lean'));
assert(citationPage.links.has(reader), 'Citation page does not link to the reader');

const [sitemap, llms, feed, graphSource, robots, manifestSource, searchPage] = await Promise.all(
  ['/sitemap.xml', '/llms.txt', '/feed.xml', '/graph.json', '/robots.txt', `${reader}/manifest.json`, `${reader}/search`].map(load),
);
const sitemapLocations = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), match => match[1]);
assert(sitemapLocations.includes(origin + citation), 'Citation missing from sitemap');
assert(feed.includes(`<id>${origin + reader}</id>`), 'Reading edition missing from Atom feed');
assert(llms.includes(origin + reader + '/manifest.json'), 'Manifest missing from llms.txt');
assert(llms.includes(origin + reader + '/search'), 'Full-text search missing from llms.txt');
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Missing robots sitemap pointer');
const manifest = JSON.parse(manifestSource);
assert.equal(manifest.doi, doi);
assert.deepEqual(manifest.chapters.map(chapter => chapter.url), chapterRoutes, 'Manifest chapter inventory differs from the site index');
assert.deepEqual(inspect(searchPage, manifest.search).canonicals, [origin + manifest.search], 'Search canonical mismatch');
for (const match of robots.matchAll(/^Disallow:\s*(\S+)/gm)) {
  assert(!readingRoutes.some(route => route.startsWith(match[1])), `robots.txt blocks ${match[1]}`);
}

const graph = JSON.parse(graphSource);
const graphNodes = new Map(graph.nodes.map(node => [node.url, node]));
const graphEdges = new Set(graph.edges.map(edge => `${edge.from} ${edge.to}`));
const readerNode = graphNodes.get(origin + reader);
assert.equal(readerNode?.doi, doi);
assert(graphEdges.has(`${readerNode.id} paper:riemann-hypothesis`), 'Graph omits the citation relationship');

for (const route of readingRoutes) {
  assert.equal(sitemapLocations.filter(location => location === origin + route).length, 1, `${route} sitemap count`);
  assert(llms.includes(`(${origin + route})`), `${route} missing from llms.txt`);
  const graphNode = graphNodes.get(origin + route);
  assert(graphNode, `${route} missing from graph.json`);
  if (route !== reader) {
    assert(graphEdges.has(`${readerNode.id} ${graphNode.id}`), `${route} missing the graph relationship to the reader`);
  }
  const response = inspect(await load(route), route);
  assert.deepEqual(response.canonicals, [origin + route], `${route} canonical mismatch`);
}

console.log(`Verified RH discovery for the reader, citation and ${chapterRoutes.length} chapters.`);
