/** Verify five-paper source preservation and actual built/served reading editions.
 * node scripts/verify-paper-integration.mjs [--source-only] [--base URL]
 * This checks conversion/integration, not the papers' scientific premises.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import yaml from 'js-yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { inlineScriptHashes } from './security-headers.mjs';

const root = process.cwd();
const args = process.argv.slice(2);
const base = args.includes('--base') ? args[args.indexOf('--base') + 1] : null;
const sourceOnly = args.includes('--source-only');
const report = {
  checkedAt: new Date().toISOString(),
  mode: sourceOnly ? 'source-preservation' : base ? 'served-production-http' : 'actual-build-artifacts',
  checks: 0, failures: [], papers: [], pages: [],
  sourcePublicationFiles: 0, localTargets: 0, mathematicalExpressions: 0,
  proseFragments: 0, tables: 0, figures: 0,
  scientificExperimentsRerun: false,
  browserHydrationVerified: false,
  semanticCoverageIndependentlyProved: false,
};
const check = (condition, message) => { report.checks++; if (!condition) report.failures.push(message); };
const sha = value => createHash('sha256').update(value).digest('hex');
const exists = async file => fs.stat(file).then(s => s.isFile(), () => false);
const json = async file => JSON.parse(await fs.readFile(file, 'utf8'));
const norm = value => value.normalize('NFKC').replace(/[\s\u2018\u2019\u201c\u201d'".,;:!?()[\]{}-]+/g, '').toLowerCase();
const normMath = value => value.replace(/\s+/g, ' ').trim();
const sourceNames = {
  'whole-field': 'Whole_Field_Constitution_as_Enacted_Organization(4).pdf',
  'temporal-passage': 'Experienced_Temporal_Passage(7).pdf',
  'constituted-agency': 'Constituted_Agency(6).pdf',
  'block-universe': 'Block_Universe_and_Shadow_Theory(4).pdf',
  'misleading-ai': 'When_AI_Learns_to_Mislead_v1_1(3).pdf',
};
const sourceDois = {
  'whole-field': '10.5281/zenodo.23608069',
  'temporal-passage': '10.5281/zenodo.23591626',
  'constituted-agency': '10.5281/zenodo.23581587',
  'block-universe': '10.5281/zenodo.23604713',
  'misleading-ai': '10.5281/zenodo.23582387',
};

async function files(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true }).catch(error => error.code === 'ENOENT' ? [] : Promise.reject(error));
  const result = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory() && !entry.name.endsWith('.func')) result.push(...await files(file));
    else if (entry.isFile()) result.push(file);
  }
  return result.sort();
}

function visit(node, action) {
  action(node);
  for (const child of node.childNodes ?? node.children ?? []) visit(child, action);
}

function document(text) {
  const tree = parse(text);
  const nodes = [], ids = new Set(), idList = [], links = [], math = [], fragments = [];
  function walk(node, skip = false) {
    const attrs = Object.fromEntries((node.attrs ?? []).map(a => [a.name, a.value]));
    const isHidden = skip || ['script', 'style', 'noscript'].includes(node.tagName) || (attrs.class ?? '').split(' ').includes('katex-html');
    if (node.tagName) {
      nodes.push({ tag: node.tagName, attrs });
      if (attrs.id) { ids.add(attrs.id); idList.push(attrs.id); }
      if (node.tagName === 'a' && attrs.href) links.push(attrs.href);
      if (node.tagName === 'annotation' && attrs.encoding === 'application/x-tex') math.push((node.childNodes ?? []).map(n => n.value ?? '').join(''));
    }
    if (node.nodeName === '#text' && !isHidden) fragments.push(node.value ?? '');
    for (const child of node.childNodes ?? []) walk(child, isHidden);
  }
  walk(tree);
  return { text, nodes, ids, idList, links, math, visible: fragments.join(' ') };
}

const artifactMap = new Map();
async function indexBuild() {
  const output = path.join(root, '.next/output');
  const configFile = path.join(output, 'config.json');
  if (await exists(configFile)) {
    const config = await json(configFile);
    assert.equal(config.version, 3, 'Unsupported adapter output schema');
    for (const file of await files(path.join(output, 'static'))) {
      const relative = path.relative(path.join(output, 'static'), file).split(path.sep).join('/');
      const override = config.overrides?.[relative];
      const route = '/' + (override?.path ?? relative).replace(/^\/+/, '');
      artifactMap.set(route, file);
      if (relative.endsWith('.html')) artifactMap.set(override?.path !== undefined ? route : relative === 'index.html' ? '/' : route.slice(0, -5), file);
    }
    for (const file of await files(path.join(output, 'functions'))) {
      if (!file.endsWith('.prerender-config.json')) continue;
      const metadata = await json(file);
      if (!metadata.fallback) continue;
      const relative = path.relative(path.join(output, 'functions'), file).split(path.sep).join('/').slice(0, -'.prerender-config.json'.length);
      artifactMap.set(relative === 'index' ? '/' : '/' + relative, path.resolve(path.dirname(file), metadata.fallback));
    }
    report.adapterBuildOutput = true;
  } else {
    for (const directory of ['app', 'pages']) {
      const dir = path.join(root, '.next/server', directory);
      for (const file of await files(dir)) {
        if (!/\.(?:html|body)$/.test(file)) continue;
        const relative = path.relative(dir, file).split(path.sep).join('/');
        const route = relative === 'index.html' ? '/' : '/' + relative.replace(/\.(?:html|body)$/, '');
        artifactMap.set(route, file);
      }
    }
    report.adapterBuildOutput = false;
  }
}

const cache = new Map();
async function load(route) {
  if (cache.has(route)) return cache.get(route);
  const operation = (async () => {
    let text = '', status = null, headers = null, available = false;
    if (base) {
      const response = await fetch(new URL(route, base), { redirect: 'manual', signal: AbortSignal.timeout(30_000) });
      text = await response.text(); status = response.status; headers = response.headers; available = status === 200;
    } else {
      const filename = artifactMap.get(route) ?? (await exists(path.join(root, 'public', route)) ? path.join(root, 'public', route) : null);
      if (filename && await exists(filename)) { text = await fs.readFile(filename, 'utf8'); available = true; }
    }
    return { ...document(text), available, status, headers };
  })();
  cache.set(route, operation); return operation;
}

async function verifyHeaders(page, route) {
  if (!page.headers) return;
  const policy = page.headers.get('content-security-policy') ?? '';
  const scripts = policy.split(';').find(value => value.trim().startsWith('script-src ')) ?? '';
  check(Boolean(policy), `${route}: missing enforced response CSP`);
  check(!/unsafe-inline|unsafe-eval/.test(scripts), `${route}: relaxed script policy`);
  check(/script-src-attr 'none'/.test(policy), `${route}: script-attribute policy`);
  check(page.headers.get('x-frame-options') === 'DENY', `${route}: framing header`);
  check(page.headers.get('x-content-type-options') === 'nosniff', `${route}: nosniff`);
  check(page.headers.get('referrer-policy') === 'strict-origin-when-cross-origin', `${route}: referrer policy`);
  check(Boolean(page.headers.get('permissions-policy')), `${route}: permissions policy`);
  for (const hash of inlineScriptHashes(page.text)) check(scripts.includes(hash), `${route}: served inline script not authorized by CSP`);
}

async function main() {
  const baseline = await json(path.join(root, 'docs/paper-integration/baseline.json'));
  report.baselineCommit = baseline.baselineCommit;
  for (const row of baseline.publicationFiles) {
    report.sourcePublicationFiles++;
    const filename = path.join(root, row.path);
    check(await exists(filename) && sha(await fs.readFile(filename)) === row.sha256, `Preserved baseline publication changed: ${row.path}`);
  }
  for (const name of ['scripts/security-headers.mjs', 'scripts/security-headers.test.mjs', 'scripts/security-policy.mjs', 'scripts/verify-security-headers.mjs', 'package-lock.json']) {
    const row = baseline.trackedFiles.find(row => row.path === name);
    check(row && sha(await fs.readFile(name)) === row.sha256, `Working baseline dependency/security input changed: ${name}`);
  }
  // The enlarged mathematical corpus requires a reviewed compilation heap
  // budget. Accept precisely that build entry and memory flag, while still
  // checking every dependency, lifecycle hook, header and image setting.
  const packageFile = await fs.readFile('package.json', 'utf8');
  const packageValue = JSON.parse(packageFile);
  check(['next build --webpack', 'node scripts/build-production.mjs'].includes(packageValue.scripts?.build), 'Unexpected build entry point');
  const restoredPackage = structuredClone(packageValue);
  restoredPackage.scripts.build = 'next build --webpack';
  check(sha(JSON.stringify(restoredPackage, null, 2) + '\n') === baseline.trackedFiles.find(row => row.path === 'package.json')?.sha256, 'Package changes exceed the reviewed production-build wrapper');
  let restoredNextConfig = await fs.readFile('next.config.mjs', 'utf8');
  if (restoredNextConfig.includes('webpackMemoryOptimizations')) {
    const memoryLines = [
      '  experimental: { webpackMemoryOptimizations: true },\n',
      '  experimental: { webpackMemoryOptimizations: true, cpus: 2 },\n',
      '  experimental: { cpus: 2, webpackMemoryOptimizations: true },\n',
    ];
    const chosen = memoryLines.filter(line => restoredNextConfig.includes(line));
    check(chosen.length === 1, 'Unexpected Next compilation-memory/worker configuration');
    for (const line of ['  // Reduce peak compilation memory for the complete mathematical editions.\n', ...(chosen.length === 1 ? chosen : [])]) {
      check(restoredNextConfig.split(line).length === 2, 'Unexpected Next compilation-memory configuration');
      restoredNextConfig = restoredNextConfig.replace(line, '');
    }
  }
  check(sha(restoredNextConfig) === baseline.trackedFiles.find(row => row.path === 'next.config.mjs')?.sha256, 'Next configuration changes exceed the reviewed memory optimization');

  const paperIntegrations = await json(path.join(root, 'src/config/paper-integrations.json'));
  const generated = await fs.readFile(path.join(root, 'src/generated/paper-integrations.ts'), 'utf8');
  const chapterLiteral = /export const integrationChapters = ([\s\S]*?);\s*export const integrationImports/.exec(generated);
  assert.ok(chapterLiteral, 'Unsupported generated chapter inventory; review verifier');
  const integrationChapters = JSON.parse(chapterLiteral[1]);
  check(paperIntegrations.length === 5, 'Expected five distinct paper identities');
  check(new Set(paperIntegrations.map(paper => paper.id)).size === 5, 'Duplicate paper identity');
  if (!sourceOnly && !base) await indexBuild();
  const targets = new Set();
  const processor = unified().use(remarkParse).use(remarkMdx).use(remarkMath).use(remarkGfm);
  for (const paper of paperIntegrations) {
    const chapters = integrationChapters.filter(chapter => chapter.paperId === paper.id);
    check(chapters.length > 0, `${paper.id}: no reading chapters`);
    check(paper.doi === sourceDois[paper.id], `${paper.id}: supplied publication DOI mismatch`);
    const sourceFiles = (await files(path.join(root, 'content/paper-integrations', paper.id))).filter(file => file.endsWith('.mdx'));
    check(chapters.length === sourceFiles.length, `${paper.id}: generated chapter inventory is stale`);
    const pdf = path.join(root, 'public', paper.pdfUrl);
    const supplied = baseline.suppliedSources.find(row => row.name === sourceNames[paper.id]);
    check(supplied && await exists(pdf) && sha(await fs.readFile(pdf)) === supplied.sha256, `${paper.id}: supplied original PDF missing or changed`);
    check(await exists(path.join(root, 'public', paper.markdownUrl)), `${paper.id}: complete Markdown download missing`);
    if (base) {
      for (const [url, expected] of [[paper.pdfUrl, supplied?.sha256], [paper.markdownUrl, sha(await fs.readFile(path.join(root, 'public', paper.markdownUrl)))]]) {
        const response = await fetch(new URL(url, base), { redirect: 'manual', signal: AbortSignal.timeout(30_000) });
        check(response.status === 200, `${paper.id}: served download unavailable ${url}`);
        check(sha(Buffer.from(await response.arrayBuffer())) === expected, `${paper.id}: served download bytes changed ${url}`);
      }
    }
    report.papers.push({ id: paper.id, route: paper.url, chapters: chapters.length, doi: paper.doi });
    if (!sourceOnly) {
      const hub = await load(paper.url);
      check(hub.available, `${paper.id}: hub unavailable`);
      check(hub.links.includes('https://doi.org/' + paper.doi), `${paper.id}: DOI link missing`);
      check(hub.links.includes(paper.pdfUrl), `${paper.id}: PDF link missing`);
      for (const chapter of chapters) check(hub.links.includes(chapter.url), `${paper.id}: reading route omitted from hub ${chapter.url}`);
      await verifyHeaders(hub, paper.url);
    }

    for (const chapter of chapters) {
      const sourcePath = chapter.sourcePath ?? `content/paper-integrations/${paper.id}/${chapter.slug}.mdx`;
      const source = await fs.readFile(path.resolve(root, sourcePath), 'utf8');
      const front = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
      check(Boolean(front), `${chapter.url}: no front matter`);
      const meta = front ? yaml.load(front[1]) : {};
      const body = source.slice(front?.[0].length ?? 0);
      check(meta.title === chapter.title, `${chapter.url}: generated title is stale`);
      check(!body.includes('\u2014'), `${chapter.url}: em dash in adapted body`);
      check(!body.includes('\ufffd'), `${chapter.url}: replacement glyph in content`);
      check(!/\b(?:TODO|TBD|SOURCE_REQUIRED|INSERT_HERE)\b/.test(body), `${chapter.url}: unfinished content marker`);
      let tree;
      try { tree = processor.parse(body); }
      catch (error) { check(false, `${chapter.url}: MDX parse failed: ${String(error)}`); continue; }
      const expectedMath = [], text = [], expectedLinks = [], images = [];
      let tableCount = 0;
      visit(tree, node => {
        if (['inlineMath', 'math'].includes(node.type)) expectedMath.push(node.value);
        if (node.type === 'text' && norm(node.value).length >= 60) text.push(node.value);
        if (node.type === 'link') expectedLinks.push(node.url);
        if (node.type === 'image') images.push(node);
        if (['mdxJsxFlowElement', 'mdxJsxTextElement'].includes(node.type) && node.name === 'img') {
          const attrs = Object.fromEntries((node.attributes ?? []).filter(a => a.type === 'mdxJsxAttribute' && typeof a.value === 'string').map(a => [a.name, a.value]));
          if (attrs.src) images.push({ url: attrs.src, alt: attrs.alt });
        }
        if (node.type === 'table') tableCount++;
      });
      for (const image of images) {
        check((image.alt ?? '').trim().length >= 4, `${chapter.url}: figure has no meaningful alt text`);
        if (image.url.startsWith('/')) check(await exists(path.join(root, 'public', image.url)), `${chapter.url}: figure asset missing ${image.url}`);
      }
      if (sourceOnly) continue;
      const page = await load(chapter.url);
      report.pages.push({ route: chapter.url, math: expectedMath.length, tables: tableCount, figures: images.length, sourceProseFragments: text.length });
      check(page.available, `${chapter.url}: reading page unavailable`);
      check(page.nodes.filter(node => node.tag === 'h1').length === 1, `${chapter.url}: expected one h1`);
      check(page.idList.length === page.ids.size, `${chapter.url}: duplicate rendered anchors`);
      check(!page.text.includes('katex-error'), `${chapter.url}: KaTeX rendering error`);
      check(page.nodes.find(node => node.tag === 'link' && node.attrs.rel === 'canonical')?.attrs.href.endsWith(chapter.url), `${chapter.url}: canonical URL mismatch`);
      for (const section of chapter.sections ?? []) check(page.ids.has(section.id), `${chapter.url}: section anchor missing ${section.id}`);
      const actualMath = new Map();
      for (const value of page.math) actualMath.set(normMath(value), (actualMath.get(normMath(value)) ?? 0) + 1);
      for (const value of expectedMath) {
        const key = normMath(value), count = actualMath.get(key) ?? 0;
        check(count > 0, `${chapter.url}: source equation absent from rendered MathML: ${value.slice(0, 90)}`);
        actualMath.set(key, count - 1);
      }
      const visible = norm(page.visible);
      for (const fragment of text) check(visible.includes(norm(fragment)), `${chapter.url}: source prose fragment absent from initial HTML: ${fragment.slice(0, 85)}`);
      check(page.nodes.filter(node => node.tag === 'table').length >= tableCount, `${chapter.url}: table omitted from rendered content`);
      for (const image of images) check(page.nodes.some(node => node.tag === 'img' && node.attrs.src === image.url), `${chapter.url}: figure omitted from rendered content ${image.url}`);
      for (const href of expectedLinks) check(page.links.includes(href), `${chapter.url}: source link absent ${href}`);
      report.mathematicalExpressions += expectedMath.length; report.proseFragments += text.length;
      report.tables += tableCount; report.figures += images.length;
      for (const href of page.links) {
        const url = new URL(href, 'https://local.test' + chapter.url);
        if (url.origin === 'https://local.test') targets.add(url.pathname + url.hash);
      }
      await verifyHeaders(page, chapter.url);
    }
  }

  const coverageFile = path.join(root, 'PAPER_COVERAGE.json');
  if (await exists(coverageFile)) {
    const coverage = await json(coverageFile);
    report.coverageRecords = 0;
    for (const paper of paperIntegrations) {
      const publication = coverage.publications?.find(publication => publication.id === paper.id);
      check(publication?.records?.length > 0, `${paper.id}: no paper-to-web coverage records`);
      for (const record of publication?.records ?? []) {
        report.coverageRecords++;
        const target = String(record.destinationChapter ?? '').replace(/\.mdx$/, '');
        const chapter = integrationChapters.find(chapter => chapter.paperId === paper.id && (chapter.slug === target || chapter.url === target || chapter.sourcePath?.replace(/\.mdx$/, '') === target));
        check(Boolean(chapter), `${paper.id}: coverage chapter missing for ${record.sourceSection}: ${target}`);
        check(Boolean(record.sourceSection) && Boolean(record.sourcePages), `${paper.id}: coverage lacks source location`);
        check(Boolean(record.status), `${paper.id}: coverage status absent for ${record.sourceSection}`);
        for (const field of ['equations', 'formalStatements', 'figures', 'tables']) check(Array.isArray(record[field]), `${paper.id}: coverage ${field} inventory absent for ${record.sourceSection}`);
        if (!chapter) continue;
        const anchor = String(record.anchor ?? '').replace(/^#/, '');
        check(Boolean(anchor) && chapter.anchors?.includes(anchor), `${paper.id}: coverage anchor absent from generated inventory: ${target}#${anchor}`);
        if (!sourceOnly) check((await load(chapter.url)).ids.has(anchor), `${paper.id}: coverage destination absent from actual HTML: ${chapter.url}#${anchor}`);
      }
    }
  } else if (args.includes('--require-coverage')) check(false, 'Final PAPER_COVERAGE.json is required');

  if (!sourceOnly) {
    for (const target of targets) {
      const url = new URL(target, 'https://local.test');
      if (url.pathname.startsWith('/publications/') || url.pathname.startsWith('/images/')) {
        check(await exists(path.join(root, 'public', url.pathname)), `Broken local asset ${target}`); continue;
      }
      const page = await load(url.pathname);
      // Existing fixed redirects are valid links, independently checked by the
      // repository's served-security verifier; do not demand a synthetic file.
      if (['/research', '/research-intelligence', '/tier-1', '/what-is-the-everything-equation', '/problems/consciousness-field-theorem'].includes(url.pathname)) continue;
      check(page.available, `Broken internal link ${target}`);
      if (url.hash) check(page.ids.has(decodeURIComponent(url.hash.slice(1))), `Broken internal anchor ${target}`);
    }
    report.localTargets = targets.size;
    const sitemap = await load('/sitemap.xml'), feed = await load('/feed.xml'), llms = await load('/llms.txt');
    const search = await load('/consciousness/search.json'), graph = await load('/graph.json');
    for (const paper of paperIntegrations) {
      const chapters = integrationChapters.filter(chapter => chapter.paperId === paper.id);
      for (const route of [paper.url, ...chapters.map(chapter => chapter.url)]) {
        check(sitemap.text.includes(route + '</loc>'), `Sitemap lacks ${route}`);
        check(search.text.includes(route), `Consciousness search lacks ${route}`);
        check(graph.text.includes(route), `Graph lacks ${route}`);
      }
      check(feed.text.includes(paper.url), `Feed lacks ${paper.url}`);
      check(llms.text.includes(paper.url), `llms.txt lacks ${paper.url}`);
      const manifest = await load(paper.manifestUrl);
      check(manifest.available, `${paper.id}: manifest unavailable`);
      let value; try { value = JSON.parse(manifest.text); } catch { check(false, `${paper.id}: invalid manifest JSON`); }
      for (const chapter of chapters) check(JSON.stringify(value ?? {}).includes(chapter.url), `${paper.id}: manifest lacks ${chapter.url}`);
    }
  }
}

try { await main(); } catch (error) { report.failures.push(error.stack || error.message || String(error)); }
report.passed = report.checks - report.failures.length;
await fs.mkdir('docs/paper-integration', { recursive: true });
const filename = sourceOnly ? 'source-verification.json' : base ? 'http-verification.json' : 'built-verification.json';
await fs.writeFile(path.join('docs/paper-integration', filename), JSON.stringify(report, null, 2) + '\n');
console.log(`Paper integration: ${report.passed}/${report.checks} checks passed; ${report.failures.length} failures. ${report.pages.length} reading pages, ${report.mathematicalExpressions} mathematical expressions.`);
for (const failure of report.failures.slice(0, 40)) console.error(failure);
if (report.failures.length) process.exitCode = 1;
