/**
 * Verify the eight 2026 spectral/transport web editions and publication assets.
 * Run from the project root after npm ci. For draft conversion diagnostics use
 * --draft --only <id>. Run without switches on actual production artifacts.
 * --base <origin> checks locally served output; --report <file> writes JSON.
 */
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { compile } from '@mdx-js/mdx';
import { parse } from 'parse5';
import yaml from 'js-yaml';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { inlineScriptHashes } from './security-headers.mjs';

const expected = {
  cscf: ['23899458', 43, 2, 3],
  'spectral-ratios': ['23888292', 20, 5, 8],
  'spectral-profiles': ['23912447', 35, 1, 3],
  'adaptive-carriers': ['23924603', 56, 2, 3],
  'sustained-carriers': ['23927855', 48, 2, 4],
  'sharp-uniqueness': ['23932350', 64, 2, 7],
  'slow-passage': ['23935694', 69, 3, 9],
  'transport-projective': ['23954887', 71, 0, 3],
};
const args = process.argv.slice(2);
const arg = flag => args.includes(flag) ? args[args.indexOf(flag) + 1] : undefined;
const draft = args.includes('--draft');
const sourceOnly = draft || args.includes('--source-only');
const base = arg('--base');
const only = arg('--only');
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://everythingequation.com').replace(/\/+$/, '');
const report = {
  checkedAt: new Date().toISOString(),
  mode: draft ? 'draft conversion diagnostics' : sourceOnly ? 'source' : base ? 'served HTTP' : 'build artifacts',
  checks: 0,
  failures: [],
  publications: [],
  preservedFiles: 0,
  limits: 'Structural coverage, exact asset bytes, and mathematical rendering are checked. This does not independently prove mathematical claims or demonstrate empirical validity.',
};
function check(ok, message) {
  report.checks++;
  if (!ok) report.failures.push(message);
}
const text = file => fs.readFile(file, 'utf8');
const json = async file => JSON.parse(await text(file));
const isFile = file => fs.stat(file).then(stat => stat.isFile(), () => false);
function localPath(prefix, relative) {
  if (typeof relative !== 'string') throw new Error('Missing local path');
  const target = path.resolve(prefix, relative.replace(/^\/+/, ''));
  const diff = path.relative(path.resolve(prefix), target);
  if (diff.startsWith('..') || path.isAbsolute(diff)) throw new Error('Invalid local path: ' + relative);
  return target;
}
async function digest(file, algorithm = 'sha256') {
  const hash = createHash(algorithm);
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return [];
    throw error;
  });
  const result = [];
  for (const e of entries) {
    const file = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.endsWith('.func')) result.push(...await walk(file));
    else if (e.isFile()) result.push(file);
  }
  return result.sort();
}
function visit(node, action) {
  action(node);
  for (const c of node.childNodes ?? node.children ?? []) visit(c, action);
}
const attrs = node => Object.fromEntries((node.attrs ?? []).map(a => [a.name, a.value]));
const mathKey = x => x.replace(/\s+/g, ' ').trim();
const textKey = x => x.normalize('NFKC').replace(/\s+/g, '');
function inspect(html) {
  const ids = [], links = [], math = [], images = [], prose = [];
  let tableCount = 0, captions = 0, h1 = 0, canonical, errorCount = 0;
  function descend(node, hidden = false) {
    const a = attrs(node), tag = node.tagName, classes = (a.class ?? '').split(/\s+/);
    if (a.id) ids.push(a.id);
    if (tag === 'a' && a.href) links.push(a.href);
    if (tag === 'link' && a.rel === 'canonical') canonical = a.href;
    if (tag === 'img') images.push(a);
    if (tag === 'table') tableCount++;
    if (tag === 'figcaption') captions++;
    if (tag === 'h1') h1++;
    if (classes.includes('katex-error')) errorCount++;
    if (tag === 'annotation' && a.encoding === 'application/x-tex')
      math.push((node.childNodes ?? []).map(n => n.value ?? '').join(''));
    hidden ||= ['script', 'style', 'noscript'].includes(tag) || classes.includes('katex-html');
    if (!hidden && node.nodeName === '#text') prose.push(node.value);
    for (const c of node.childNodes ?? []) descend(c, hidden);
  }
  descend(parse(html));
  return { ids, links, math, images, tableCount, captions, h1, canonical, errorCount, prose: textKey(prose.join('')) };
}
function containsMath(expectedMath, actual, route) {
  const bag = new Map();
  for (const m of actual) bag.set(mathKey(m), (bag.get(mathKey(m)) ?? 0) + 1);
  for (const m of expectedMath) {
    const key = mathKey(m), count = bag.get(key) ?? 0;
    check(count > 0, `${route}: missing rendered MathML annotation: ${m.slice(0, 180)}`);
    bag.set(key, count - 1);
  }
}
const artifactMap = new Map();
async function indexBuild() {
  const dir = '.next/output';
  if (await isFile(dir + '/config.json')) {
    const config = await json(dir + '/config.json');
    report.layout = 'vercel-adapter';
    check(config.version === 3, 'Expected Vercel adapter build output v3');
    const staticRoot = path.join(dir, 'static');
    for (const file of await walk(staticRoot)) {
      const rel = path.relative(staticRoot, file).split(path.sep).join('/');
      const publicName = config.overrides?.[rel]?.path ?? (rel === 'index.html' ? '' : rel.replace(/\.html$/, ''));
      artifactMap.set('/' + publicName.replace(/^\/+/, ''), file);
    }
    const functions = path.join(dir, 'functions');
    for (const file of await walk(functions)) {
      if (!file.endsWith('.prerender-config.json')) continue;
      const record = await json(file);
      if (!record.fallback) continue;
      const rel = path.relative(functions, file).split(path.sep).join('/').replace(/\.prerender-config\.json$/, '');
      artifactMap.set(rel === 'index' ? '/' : '/' + rel, localPath(path.dirname(file), record.fallback));
    }
  } else {
    report.layout = 'legacy-next';
    for (const dir of ['.next/server/app', '.next/server/pages']) {
      for (const file of await walk(dir)) {
        if (!/\.(?:html|body)$/.test(file)) continue;
        const rel = path.relative(dir, file).split(path.sep).join('/').replace(/\.(?:html|body)$/, '');
        artifactMap.set(rel === 'index' ? '/' : '/' + rel, file);
      }
    }
  }
}
const cache = new Map();
async function load(route) {
  if (!cache.has(route)) cache.set(route, (async () => {
    if (base) {
      const response = await fetch(new URL(route, base), { redirect: 'manual', signal: AbortSignal.timeout(40_000) });
      return { available: response.ok, body: await response.text(), headers: response.headers };
    }
    const file = artifactMap.get(route) ?? localPath('public', decodeURIComponent(route));
    return await isFile(file) ? { available: true, body: await text(file) } : { available: false, body: '' };
  })());
  return cache.get(route);
}
async function page(route) {
  const result = await load(route);
  if (!result.dom) result.dom = inspect(result.body);
  return result;
}
function verifyHeaders(result, route) {
  if (!result.headers) return;
  const headers = result.headers;
  const csp = headers.get('content-security-policy') ?? '';
  const script = csp.split(';').find(s => s.trim().startsWith('script-src ')) ?? '';
  check(script && !/unsafe-inline|unsafe-eval/.test(script), `${route}: strict script CSP missing`);
  check(csp.includes("script-src-attr 'none'"), `${route}: script attribute policy missing`);
  check(headers.get('x-frame-options') === 'DENY', `${route}: frame protection missing`);
  check(headers.get('x-content-type-options') === 'nosniff', `${route}: nosniff missing`);
  check(headers.get('referrer-policy') === 'strict-origin-when-cross-origin', `${route}: referrer policy missing`);
  check(Boolean(headers.get('permissions-policy')), `${route}: permissions policy missing`);
  for (const hash of inlineScriptHashes(result.body)) check(script.includes(hash), `${route}: inline script hash absent`);
}
function collectStringValues(object, result = new Set()) {
  if (typeof object === 'string') result.add(object);
  else if (object && typeof object === 'object')
    for (const value of Object.values(object)) collectStringValues(value, result);
  return result;
}
function hasRoute(values, route) {
  return values.has(route) || values.has(origin + route);
}
function ranges(items) {
  const result = new Set();
  for (const raw of items) {
    const value = String(raw).replace(/^(?:eq(?:uation)?s?|fig(?:ure)?s?|tables?)[.\s-]*/i, '').replace(/[()]/g, '').trim();
    for (const part of value.split(/[,;]\s*/)) {
      const match = /^(\d+)\s*[-–]\s*(\d+)$/.exec(part);
      if (match && Number(match[2]) <= 1000)
        for (let n = Number(match[1]); n <= Number(match[2]); n++) result.add(n);
      else if (/^\d+$/.test(part)) result.add(Number(part));
    }
  }
  return result;
}
async function verifyAsset(item, label) {
  check(/^[a-f0-9]{64}$/i.test(item?.sha256 ?? ''), `${label}: SHA-256 missing`);
  if (!item?.path) return;
  const file = localPath('.', item.path);
  const present = await isFile(file);
  check(present, `${label}: missing asset ${item.path}`);
  if (present) {
    check(await digest(file) === item.sha256, `${label}: asset differs from supplied bytes`);
    if (Number.isInteger(item.bytes)) check((await fs.stat(file)).size === item.bytes, `${label}: asset byte count differs`);
    if (item.remoteMd5) check(await digest(file, 'md5') === item.remoteMd5, `${label}: asset does not match the recorded published file`);
  }
  if (base && item.path.startsWith('public/')) {
    const response = await fetch(new URL(item.path.slice('public'.length), base), { signal: AbortSignal.timeout(50_000) });
    check(response.ok, `${label}: download failed with HTTP ${response.status}`);
    const hash = createHash('sha256');
    for await (const part of response.body) hash.update(part);
    check(hash.digest('hex') === item.sha256, `${label}: downloaded bytes differ`);
  }
}
async function parseChapter(file, route) {
  const source = await text(file);
  const front = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
  const metadata = front ? yaml.load(front[1]) : {};
  check(typeof metadata.title === 'string' && typeof metadata.description === 'string' && Number.isFinite(metadata.order), `${file}: chapter metadata invalid`);
  const body = source.slice(front?.[0].length ?? 0);
  check(!body.includes('\ufffd') && !/\b(?:TODO|TBD|SOURCE_REQUIRED|INSERT_HERE)\b/.test(body), `${file}: placeholder or replacement character`);
  const anchors = [...body.matchAll(/<a\s+id=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
  check(anchors.length === new Set(anchors).size, `${file}: duplicate source anchor`);
  check(anchors.length > 0, `${file}: no stable source anchors`);
  const result = { file, route, metadata, body, anchors, math: [], displayed: [], prose: [], images: [], tables: 0, links: [], figureLabels: new Set(), equationLabels: new Set() };
  for (const label of body.matchAll(/(?:\*\*|<figcaption>)(?:Figure|Fig\.)\s+(\d+)[.:]/gi)) result.figureLabels.add(Number(label[1]));
  function inventory() {
    return tree => visit(tree, node => {
      const kind = node.type;
      if (kind === 'inlineMath' || kind === 'math') result.math.push(node.value);
      if (kind === 'math') result.displayed.push(node.value);
      if (kind === 'text') {
        check(!node.value.includes('\u2014'), `${file}: em dash in prose`);
        if (textKey(node.value).length >= 60) result.prose.push(node.value);
      }
      if (kind === 'link') result.links.push(node.url);
      if (kind === 'image') result.images.push({ url: node.url, alt: node.alt });
      if (kind === 'table') result.tables++;
      if (kind === 'mdxJsxFlowElement' || kind === 'mdxJsxTextElement') {
        const a = Object.fromEntries((node.attributes ?? []).filter(x => x.type === 'mdxJsxAttribute').map(x => [x.name, x.value]));
        if (node.name === 'table') result.tables++;
        if (node.name === 'img' && typeof a.src === 'string') result.images.push({ url: a.src, alt: a.alt });
        if (node.name === 'a' && typeof a.href === 'string') result.links.push(a.href);
      }
    });
  }
  try {
    const compiled = await compile(source, {
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath, inventory],
      rehypePlugins: [[rehypeKatex, { strict: 'error', throwOnError: true }]],
    });
    check(compiled.messages.length === 0, `${file}: ${compiled.messages.map(message => [String(message), message.cause?.message].filter(Boolean).join(': ')).join('; ')}`);
  } catch (error) { check(false, `${file}: MDX compilation error: ${String(error)}`); }
  for (const equation of result.displayed)
    for (const tag of equation.matchAll(/\\(?:tag\*?\{\s*(\d+)\s*\}|text\{\((\d+)\)\})/g))
      result.equationLabels.add(Number(tag[1] ?? tag[2]));
  for (const image of result.images) {
    check(typeof image.alt === 'string' && image.alt.trim().length >= 8, `${file}: missing descriptive figure alt text ${image.url}`);
    const imageUrl = new URL(image.url, origin + route);
    if (imageUrl.origin === new URL(origin).origin)
      check(await isFile(localPath('public', decodeURIComponent(imageUrl.pathname))), `${file}: missing image ${image.url}`);
  }
  return result;
}
async function main() {
  if (only && !Object.hasOwn(expected, only)) throw new Error('Unknown paper: ' + only);
  const ids = only ? [only] : Object.keys(expected);
  const papers = draft ? [] : await json('src/config/paper-integrations.json');
  const checksums = draft ? null : await json('docs/spectral/publication-checksums.json');
  const coverage = draft ? null : await json('docs/spectral/coverage.json');
  const generated = draft ? [] : JSON.parse((await text('src/generated/paper-integrations.ts')).match(/export const integrationChapters = ([\s\S]*?);\s*export const integrationImports/)[1]);
  if (!sourceOnly && !base) await indexBuild();
  const targets = new Set();
  function internal(href, current) {
    const u = new URL(href, origin + current);
    if (u.origin === origin) targets.add(u.pathname + u.hash);
  }
  if (checksums && !only) for (const row of checksums.preserved ?? []) {
    const file = localPath('.', row.path);
    check(await isFile(file) && await digest(file) === row.sha256, `Preserved baseline publication changed: ${row.path}`);
    report.preservedFiles++;
  }
  for (const id of ids) {
    const [recordId, equations, figures, tables] = expected[id];
    const doi = '10.5281/zenodo.' + recordId, root = '/source-readout/' + id;
    const paper = papers.find(p => p.id === id);
    const asset = checksums?.publications.find(p => p.id === id);
    if (!draft) {
      check(paper?.programme === 'source-readout' && paper.url === root && paper.doi === doi, `${id}: incorrect publication identity or canonical route`);
      // Catch disagreement between generateStaticParams/metadata and the reader
      // selected by a concrete route wrapper before starting an expensive build.
      for (const leaf of ['page.tsx', '[chapter]/page.tsx']) {
        const wrapper = path.join('src/app', root, leaf);
        const wrapperSource = await text(wrapper);
        const readerLiteral = /<IntegratedPaper\s+id=["']([^"']+)["']/.exec(wrapperSource)?.[1];
        check(!readerLiteral || readerLiteral === id, `${wrapper}: renders another edition (${readerLiteral})`);
      }
      check(asset?.doi === doi && asset?.status === 'published' && asset?.recordUrl === 'https://zenodo.org/records/' + recordId, `${id}: publication status/record evidence missing`);
      check(asset?.pdf && asset.pdf.path === 'public' + paper?.pdfUrl, `${id}: PDF checksum record missing or URL mismatch`);
      check(Boolean(asset?.supplement) === (id !== 'cscf'), `${id}: expected supplement mapping missing or unexpected`);
      await verifyAsset(asset?.pdf, id + ' original PDF');
      if (asset?.supplement) {
        check(asset.supplement.path ? 'public' + paper?.supplementUrl === asset.supplement.path : asset.supplement.url === paper?.supplementUrl, `${id}: supplement identity mismatch`);
        if (!asset.supplement.path) check(/^[a-f0-9]{32}$/i.test(asset.supplement.remoteMd5 ?? ''), `${id}: missing remote supplement byte-match evidence`);
        await verifyAsset(asset.supplement, id + ' verification supplement');
      }
    }
    const files = (await walk('content/paper-integrations/' + id)).filter(p => p.endsWith('.mdx'));
    check(files.length > 0, `${id}: no complete chapter source`);
    const index = generated.filter(c => c.paperId === id);
    if (!draft) check(index.length === files.length, `${id}: generated chapter inventory stale`);
    const stat = { id, doi, route: root, chapters: [], math: 0, displayed: 0, tables: 0, figures: 0, coverage: 0 };
    report.publications.push(stat);
    const byChapter = new Map();
    const chapterNumbers = { equations: new Set(), figures: new Set(), tables: new Set() };
    const orders = new Set();
    const actualEquationNumbers = new Set(), figureLabels = new Set();
    let hub;
    if (!sourceOnly) {
      hub = await page(root);
      check(hub.available && hub.dom.h1 === 1, `${root}: hub missing or malformed`);
      for (const target of ['https://doi.org/' + doi, paper.pdfUrl, paper.markdownUrl, paper.manifestUrl, paper.supplementUrl].filter(Boolean))
        check(hub.dom.links.includes(target), `${root}: required link missing ${target}`);
      verifyHeaders(hub, root);
    }
    for (const file of files) {
      const slug = path.basename(file, '.mdx'), route = root + '/' + slug;
      const chapter = await parseChapter(file, route);
      byChapter.set(slug, chapter);
      check(!orders.has(chapter.metadata.order), `${id}: duplicate chapter order ${chapter.metadata.order}`);
      orders.add(chapter.metadata.order);
      if (!draft) {
        const meta = index.find(c => c.slug === slug);
        check(meta?.url === route && meta?.title === chapter.metadata.title && meta?.order === chapter.metadata.order, `${file}: generated chapter metadata mismatch`);
        for (const anchor of chapter.anchors) check(meta?.anchors?.includes(anchor), `${file}: generated anchor inventory missing ${anchor}`);
      }
      stat.chapters.push(route);
      stat.math += chapter.math.length; stat.displayed += chapter.displayed.length;
      stat.tables += chapter.tables; stat.figures += chapter.images.length;
      for (const n of chapter.equationLabels) actualEquationNumbers.add(n);
      for (const n of chapter.figureLabels) figureLabels.add(n);
      if (sourceOnly) continue;
      check(hub.dom.links.includes(route), `${root}: chapter missing from reading path ${route}`);
      const rendered = await page(route);
      const dom = rendered.dom;
      chapter.dom = dom;
      check(rendered.available && dom.h1 === 1 && dom.canonical === origin + route, `${route}: missing HTML, H1, or canonical URL`);
      check(new Set(dom.ids).size === dom.ids.length, `${route}: duplicate rendered ID`);
      check(dom.errorCount === 0, `${route}: KaTeX errors in built page`);
      check(dom.tableCount >= chapter.tables, `${route}: missing rendered table`);
      for (const anchor of chapter.anchors) check(dom.ids.includes(anchor), `${route}: missing rendered anchor ${anchor}`);
      for (const fragment of chapter.prose)
        check(dom.prose.includes(textKey(fragment)), `${route}: source prose fragment missing from HTML: ${fragment.slice(0, 125)}`);
      for (const image of chapter.images)
        check(dom.images.some(i => i.src === image.url && i.alt?.trim()), `${route}: image missing from HTML ${image.url}`);
      for (const href of chapter.links) check(dom.links.includes(href), `${route}: source link missing from HTML ${href}`);
      containsMath(chapter.math, dom.math, route);
      for (const href of dom.links) internal(href, route);
      verifyHeaders(rendered, route);
    }
    if (draft) continue;
    const markdown = await text(localPath('public', paper.markdownUrl));
    for (const chapter of byChapter.values())
      check(markdown.includes(chapter.body), `${chapter.file}: generated complete Markdown omits/changes the chapter body`);
    const ledger = coverage?.publications.find(p => p.id === id);
    const rows = ledger?.records ?? [];
    check(ledger?.doi === doi && ledger?.sourcePdf === asset?.pdf?.sourceName, `${id}: coverage refers to the wrong source edition`);
    check(rows.length >= files.length, `${id}: coverage ledger absent or too short`);
    stat.coverage = rows.length;
    const covered = new Set();
    for (const row of rows) {
      const slug = (row.destinationChapter ?? '').split('/').at(-1).replace(/\.mdx$/, '');
      const chapter = byChapter.get(slug);
      const anchor = (row.anchor ?? '').replace(/^#/, '');
      check(Boolean(row.sourceSection) && Array.isArray(row.sourcePages) && row.sourcePages.length > 0 && row.sourcePages.every(page => Number.isInteger(page) && page >= 1 && page <= ledger.physicalPdfPages), `${id}: coverage row lacks valid source section/page locator`);
      check(chapter?.anchors.includes(anchor), `${id}: invalid coverage destination ${slug}#${anchor}`);
      if (chapter) {
        covered.add(slug);
        if (!sourceOnly) check(chapter.dom?.ids.includes(anchor), `${id}: coverage anchor not rendered ${slug}#${anchor}`);
      }
      for (const field of ['equations', 'formalStatements', 'figures', 'tables']) {
        check(Array.isArray(row[field]), `${id}: coverage row lacks ${field} inventory`);
        if (field !== 'formalStatements') {
          for (const n of ranges(row[field] ?? [])) {
            chapterNumbers[field].add(n);
            if (field === 'equations') check(chapter?.equationLabels.has(n), `${id}: ledger points equation ${n} to a different chapter`);
          }
        }
      }
    }
    for (const slug of byChapter.keys()) check(covered.has(slug), `${id}: chapter not mapped from source ${slug}`);
    for (const [type, count] of [['equations', equations], ['figures', figures], ['tables', tables]])
      for (let n = 1; n <= count; n++)
        check(chapterNumbers[type].has(n), `${id}: numbered ${type} item ${n} unaccounted for`);
    for (let n = 1; n <= equations; n++)
      check(actualEquationNumbers.has(n), `${id}: numbered equation ${n} has no typeset display label`);
    check(stat.tables >= tables, `${id}: fewer article tables than source (${stat.tables}/${tables})`);
    // One CSCF architecture figure is re-expressed as a native ordered list
    // with the original mathematical relations and caption, not an image.
    const nativeArchitecture = id === 'cscf' && figureLabels.has(1) &&
      [...byChapter.values()].some(c => c.anchors.includes('fig-architecture')) ? 1 : 0;
    stat.nativeFigures = nativeArchitecture;
    check(stat.figures + nativeArchitecture >= figures, `${id}: fewer article figures than source (${stat.figures + nativeArchitecture}/${figures})`);
  }
  if (sourceOnly) return;
  for (const target of targets) {
    const url = new URL(target, origin);
    if (['/research', '/research-intelligence', '/tier-1', '/what-is-the-everything-equation', '/problems/consciousness-field-theorem'].includes(url.pathname)) continue; // existing redirects
    if (await isFile(localPath('public', decodeURIComponent(url.pathname)))) continue;
    const destination = await page(url.pathname);
    check(destination.available, `Broken internal route: ${target}`);
    if (url.hash) check(destination.dom.ids.includes(decodeURIComponent(url.hash.slice(1))), `Broken internal anchor: ${target}`);
  }
  report.localTargets = targets.size;
  const routes = ['/sitemap.xml', '/feed.xml', '/llms.txt', '/graph.json', '/source-readout/manifest.json', '/source-readout/search.json'];
  const [sitemap, feed, llms, graph, manifest, search] = await Promise.all(routes.map(async route => {
    const result = await load(route);
    check(result.available, `Discovery endpoint missing: ${route}`);
    return route.endsWith('.json') ? JSON.parse(result.body) : result.body;
  }));
  const graphValues = collectStringValues(graph), searchValues = collectStringValues(search);
  const [programme, series, listing] = await Promise.all(['/source-readout', '/source-readout/spectral-carriers', '/papers'].map(page));
  check(series.available && series.dom.h1 === 1, 'CSCF series entrance missing or malformed');
  for (const paper of report.publications) {
    const meta = papers.find(p => p.id === paper.id);
    const invResponse = await load(meta.manifestUrl);
    check(invResponse.available, `${paper.id}: edition manifest unavailable`);
    const inventory = collectStringValues(JSON.parse(invResponse.body));
    check(listing.dom.links.includes('/papers/' + meta.paperSlug) || listing.dom.links.includes(paper.route), `Papers listing missing ${paper.route}`);
    if (paper.id !== 'transport-projective') check(series.dom.links.includes(paper.route), `CSCF series entrance lacks ${paper.route}`);
    const programmeInventory = collectStringValues(manifest.readingEditions ?? manifest);
    for (const route of [paper.route, ...paper.chapters]) {
      check(sitemap.includes(origin + route + '</loc>'), `Sitemap missing ${route}`);
      check(hasRoute(graphValues, route), `Graph missing ${route}`);
      check(hasRoute(searchValues, route), `Source–Readout search missing ${route}`);
      check(hasRoute(inventory, route), `Edition manifest missing ${route}`);
      check(hasRoute(programmeInventory, route), `Programme manifest missing ${route}`);
    }
    check(feed.includes(origin + paper.route + '"') || feed.includes(origin + paper.route + '<'), `Feed missing ${paper.route}`);
    check(llms.includes(origin + paper.route + ')'), `llms.txt missing ${paper.route}`);
  }
  check(programme.dom.links.includes('/source-readout/transport-projective'), 'Source–Readout landing lacks gravity feature');
  check(programme.dom.links.includes('/source-readout/cscf') || programme.dom.links.includes('/source-readout/spectral-carriers'), 'Source–Readout landing lacks CSCF series entrance');
  for (const [id, route] of [['canonical-field', '/source-readout/cscf'], ['gravity', '/source-readout/transport-projective']]) {
    const node = graph.nodes.find(node => node.id === 'atlas:' + id);
    check(node?.readingLinks?.some(link => link.href === route || link.href.startsWith(route + '/')), `Atlas ${id} lacks direct reading link ${route}`);
    const target = graph.nodes.find(candidate => candidate.id === 'integrated:' + route.split('/').at(-1));
    check(target && graph.edges.some(edge => edge.from === node?.id && edge.to === target.id), `Atlas ${id} lacks discovery relationship to ${route}`);
  }
}
try { await main(); } catch (error) { check(false, error.stack ?? String(error)); }
report.passed = report.checks - report.failures.length;
if (arg('--report')) {
  await fs.mkdir(path.dirname(arg('--report')), { recursive: true });
  await fs.writeFile(arg('--report'), JSON.stringify(report, null, 2) + '\n');
}
console.log(JSON.stringify({ ...report, failures: report.failures.slice(0, 40) }, null, 2));
if (report.failures.length) process.exitCode = 1;
