/** Verify publication registries and generated discovery endpoints without a server. */
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

const root = process.cwd();
process.env.SKIP_ZENODO = '1';
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(specifier, parent, ...args) {
  if (specifier.startsWith('@/')) specifier = path.join(root, 'src', specifier.slice(2));
  if (specifier.startsWith('@content/')) specifier = path.join(root, 'content', specifier.slice(9));
  return originalResolve.call(this, specifier, parent, ...args);
};
require.extensions['.ts'] = function(module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const result = ts.transpileModule(source, { compilerOptions: {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, esModuleInterop: true,
  }, fileName: filename });
  module._compile(result.outputText, filename);
};

const failures = [];
let checks = 0;
function check(condition, message) { checks++; if (!condition) failures.push(message); }
function unique(items, label) { check(new Set(items).size === items.length, `Duplicate ${label}`); }
function existsAtUrl(url) {
  return fs.existsSync(path.join(root, 'public', url.replace(/^\//, '').split('#')[0]));
}

(async () => {
  const { generateGraph, generateFeed, generateLlmsTxt, generateSitemap } = require('../src/lib/machine.ts');
  const { loadPapers } = require('../src/lib/registry.ts');
  const { researchPapers, listResearchDocuments, readResearchHtml, getResearchEditorial } = require('../src/lib/consciousness-research.ts');
  const { site } = require('../src/config/site.ts');
  const [papers, graph, feed, llms, sitemap] = await Promise.all([
    loadPapers(), generateGraph(), generateFeed(site.url), generateLlmsTxt(), generateSitemap(site.url),
  ]);
  const manifest = await require('../src/app/consciousness/manifest.json/route.ts').GET().json();
  const search = await require('../src/app/consciousness/search.json/route.ts').GET().json();
  const documents = listResearchDocuments();
  const nodeIds = new Set(graph.nodes.map(node => node.id));
  unique(graph.nodes.map(node => node.id), 'graph node IDs');
  unique(papers.map(paper => paper.slug), 'publication slugs');
  unique(search.map(record => record.url), 'search targets');
  for (const edge of graph.edges) {
    check(nodeIds.has(edge.from), `Dangling graph source ${edge.from}`);
    check(nodeIds.has(edge.to), `Dangling graph target ${edge.to}`);
  }
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  unique(sitemapUrls, 'sitemap URLs');
  const feedIds = [...feed.matchAll(/<entry>[\s\S]*?<id>([^<]+)<\/id>/g)].map(match => match[1]);
  unique(feedIds, 'feed entry IDs');
  check(manifest.schemaVersion === 2, 'Manifest schema does not include research sequence');
  check(manifest.research.papers.length === 3, 'Manifest must list three research papers');
  check(manifest.research.documents.length === documents.length, 'Manifest research inventory differs from content inventory');
  for (const paper of researchPapers) {
    const record = papers.find(record => record.doi === paper.doi);
    check(Boolean(record), `No registry entry for ${paper.id}`);
    check(record?.researchProgramme === 'consciousness', `Wrong programme for ${paper.id}`);
    check(record?.webUrl === paper.url, `Wrong article URL for ${paper.id}`);
    check(record?.date === paper.date, `Wrong publication date for ${paper.id}`);
    check(record?.doiUrl === `https://doi.org/${paper.doi}`, `Wrong DOI URL for ${paper.id}`);
    check(record?.version === `Version ${paper.version}`, `Wrong version for ${paper.id}`);
    for (const format of ['pdfUrl', 'texUrl', 'markdownUrl']) check(existsAtUrl(paper[format]), `Missing ${format}: ${paper[format]}`);
    check(sitemapUrls.some(url => url.endsWith(paper.url)), `Sitemap omits ${paper.url}`);
    check(sitemapUrls.some(url => url.endsWith(`/papers/${record?.slug}`)), `Sitemap omits registry ${paper.id}`);
    check(feed.includes(paper.doi), `Feed omits ${paper.doi}`);
    check(llms.includes(paper.url) && llms.includes(paper.doi), `LLM inventory omits ${paper.id}`);
    check(search.some(record => record.url === paper.url), `Search omits article ${paper.id}`);
    const article = getResearchEditorial(paper.id);
    for (const section of article.sections) check(search.some(record => record.url === `${paper.url}#${section.id}`), `Search omits article section ${paper.id}#${section.id}`);
  }
  for (const document of documents) {
    check(sitemapUrls.some(url => url.endsWith(document.url)), `Sitemap omits ${document.url}`);
    check(llms.includes(document.url), `LLM inventory omits ${document.url}`);
    check(existsAtUrl(document.markdownUrl), `Missing Markdown ${document.markdownUrl}`);
    check(nodeIds.has(`consciousness:research:${document.paperId}:${document.slug}`), `Graph omits ${document.url}`);
    const html = readResearchHtml(document);
    for (const section of document.sections) check(html.includes(`id="${section.anchor}"`), `Missing source anchor ${document.url}#${section.anchor}`);
    const record = search.find(record => record.url === document.url);
    check(Boolean(record?.text.length), `Search lacks full text ${document.url}`);
    check(!record?.text.includes('katex-html') && !record?.text.includes('<math'), `Search leaks duplicated math markup ${document.url}`);
  }
  const report = { passed: failures.length === 0, checks, publications: researchPapers.length, technicalDocuments: documents.length,
    searchRecords: search.length, graphNodes: graph.nodes.length, graphEdges: graph.edges.length,
    sitemapUrls: sitemapUrls.length, feedEntries: feedIds.length, failures,
    scope: 'Offline generation and integrity of publication registry, sitemap, Atom feed, llms.txt, graph, programme manifest and combined search. HTTP and visual checks are separate.' };
  fs.mkdirSync('docs/consciousness', {recursive: true});
  fs.writeFileSync('docs/consciousness/discovery-verification.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) process.exitCode = 1;
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
