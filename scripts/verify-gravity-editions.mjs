/**
 * Audit the four gravity and holography editions, their five-paper reading path,
 * and their discovery surfaces. Run from the project root after npm ci.
 * --draft --only <id> checks chapter sources before registering an edition.
 * --source-only checks generated files and the coverage ledger without a build.
 * --base <origin> checks locally served output; --report <file> writes JSON.
 * --baseline <file> optionally checks Deser source against the pre-edit SHA-256 map.
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
  'modular-transport': {
    recordId: '24013975', sourcePdf: 'CHM_Source_Readout(4).pdf', equations: 0, figures: 0, tables: 0, references: 11,
    sections: ['1', '2', '3', '4', '5', '6', '7', '8', 'A'],
    formal: ['3.1', '6.1'], sha256: 'c787312c0cba48a7eda05abc83609b44d8a4efec2e5c23c125b16ae9bf7c84d3',
  },
  'local-horizon-thermodynamics': {
    recordId: '24029166', sourcePdf: 'Jacobson_Source_Readout(4)(2).pdf', equations: 2, figures: 0, tables: 0, references: 7,
    sections: ['1', '2', '3', '4', '5', '6', '7', '8'],
    formal: ['4.1'], sha256: '91ce0f9c0465bd968e37b7eae984d7a26bb5d30f677581572fb6c7f58de20589',
  },
  'boundary-ball-readouts': {
    recordId: '24029188', sourcePdf: 'Faulkner_Source_Readout(4)(2).pdf', equations: 3, figures: 0, tables: 0, references: 8,
    sections: ['1', '2', '3', '4', '5', '6'],
    formal: ['3.1', '4.1'], sha256: 'bbab22a59865d6098d0b5043da4aa117f65fe181a31644a8caeb00fb5bcfeaff',
  },
  'second-order-boundary-balls': {
    recordId: '24021664', sourcePdf: 'Same_Ball_Canonical_Energy(4).pdf', equations: 22, figures: 0, tables: 1, references: 6,
    sections: ['1', '2', '3', '3.1', '3.2', '4', '5', '6', '7'],
    formal: ['3.1', '4.1'], sha256: 'f6500ac49e67a838970faafce1eed44a90731c1ba4bc0695c3122db59b711ee8',
  },
};
const programme = '/source-readout';
const hubRoute = programme + '/gravity-and-holography';
const deser = programme + '/transport-projective';
const atlas = '/atlas';
const first = programme + '/boundary-ball-readouts';
const second = programme + '/second-order-boundary-balls';
const firstTechnical = first + '/04-what-fixed-slice-balls-miss#fixed-frame-kernel';
const secondTechnical = second + '/03-same-ball-detection#all-radii-canonical-energy';
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
  if (diff === '..' || diff.startsWith('..' + path.sep) || path.isAbsolute(diff)) throw new Error('Invalid local path: ' + relative);
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
  let tableCount = 0, h1 = 0, canonical, errorCount = 0, tableCaptions = 0, tableHeaders = 0;
  function descend(node, hidden = false) {
    const a = attrs(node), tag = node.tagName, classes = (a.class ?? '').split(/\s+/);
    if (a.id) ids.push(a.id);
    if (tag === 'a' && a.href) links.push(a.href);
    if (tag === 'link' && a.rel === 'canonical') canonical = a.href;
    if (tag === 'img') images.push(a);
    if (tag === 'table') tableCount++;
    if (tag === 'caption') tableCaptions++;
    if (tag === 'th') tableHeaders++;
    if (tag === 'h1') h1++;
    if (classes.includes('katex-error')) errorCount++;
    if (tag === 'annotation' && a.encoding === 'application/x-tex')
      math.push((node.childNodes ?? []).map(n => n.value ?? '').join(''));
    hidden ||= ['script', 'style', 'noscript'].includes(tag) || classes.includes('katex-html');
    if (!hidden && node.nodeName === '#text') prose.push(node.value);
    for (const c of node.childNodes ?? []) descend(c, hidden);
  }
  descend(parse(html));
  return { ids, links, math, images, tableCount, tableCaptions, tableHeaders, h1, canonical, errorCount, prose: textKey(prose.join('')) };
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
      return { available: response.ok, status: response.status, body: await response.text(), headers: response.headers };
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
  const hashes = inlineScriptHashes(result.body);
  check(hashes.length > 0, `${route}: page does not contain the expected inline bootstrap`);
  for (const hash of hashes) check(script.includes(hash), `${route}: inline script hash absent`);
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
    if (response.body) for await (const part of response.body) hash.update(part);
    if (item.path.endsWith('.pdf')) check(response.headers.get('content-type')?.includes('application/pdf'), `${label}: wrong download content type`);
    if (item.path.endsWith('.zip')) check(response.headers.get('content-type')?.includes('application/zip'), `${label}: wrong archive content type`);
    check(hash.digest('hex') === item.sha256, `${label}: downloaded bytes differ`);
  }
}
async function parseChapter(file, route) {
  const source = await text(file);
  const front = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
  const metadata = front ? yaml.load(front[1]) : {};
  check(typeof metadata.title === 'string' && typeof metadata.description === 'string' && Number.isFinite(metadata.order), `${file}: chapter metadata invalid`);
  const body = source.slice(front?.[0].length ?? 0);
  check(!body.includes('\u2014'), `${file}: em dash in new text`);
  check(!body.includes('\ufffd') && !/\b(?:TODO|TBD|SOURCE_REQUIRED|INSERT_HERE)\b/.test(body), `${file}: placeholder or replacement character`);
  const anchors = [...body.matchAll(/<[a-zA-Z][\w-]*\s+id=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
  check(anchors.length === new Set(anchors).size, `${file}: duplicate source anchor`);
  check(anchors.length > 0, `${file}: no stable source anchors`);
  const result = { file, route, metadata, body, anchors, math: [], displayed: [], prose: [], images: [], tables: 0, links: [], equationLabels: new Set() };
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

const checkSequence = (set, count, context) => {
  for (let n = 1; n <= count; n++) check(set.has(n), `${context} ${n} is missing`);
};
async function checkPreservation(checksums) {
  check((checksums?.preserved ?? []).length > 0, 'Preserved publication checksum inventory is absent');
  const baseline = new Map();
  for (const row of checksums?.preserved ?? []) {
    check(!baseline.has(row.path), `Repeated preserved checksum path: ${row.path}`);
    baseline.set(row.path, row.sha256);
    const file = localPath('.', row.path);
    check(await isFile(file) && await digest(file) === row.sha256, `Preserved baseline publication changed: ${row.path}`);
    report.preservedFiles++;
  }
  const deserSource = (await walk('content/paper-integrations/transport-projective')).filter(p => p.endsWith('.mdx'));
  check(deserSource.length > 1, 'Baseline Deser chapter source is absent');
  for (const file of deserSource)
    if (baseline.has(file)) check(await digest(file) === baseline.get(file), `Preserved Deser source differs: ${file}`);
  check(baseline.has('public/publications/spectral/transport-projective/paper.pdf'), 'Deser PDF missing from preservation inventory');
  if (arg('--baseline')) {
    const reference = await json(arg('--baseline'));
    const required = Object.keys(reference).filter(file =>
      file.startsWith('content/paper-integrations/transport-projective/') ||
      file.startsWith('public/publications/spectral/transport-projective/'));
    check(required.length > 2, 'Original baseline map lacks the prior Deser web edition');
    for (const file of required)
      check(await isFile(file) && await digest(file) === reference[file], `Existing Deser edition differs from baseline: ${file}`);
    report.deserPreservedFiles = required.length;
  }
}

async function main() {
  if (only && !Object.hasOwn(expected, only)) throw new Error('Unknown paper: ' + only);
  const ids = only ? [only] : Object.keys(expected);
  const papers = draft ? [] : await json('src/config/paper-integrations.json');
  const checksums = draft ? null : await json('docs/gravity/publication-checksums.json');
  const coverage = draft ? null : await json('docs/gravity/coverage.json');
  const generated = draft ? [] : JSON.parse((await text('src/generated/paper-integrations.ts')).match(/export const integrationChapters = ([\s\S]*?);\s*export const integrationImports/)[1]);
  if (!sourceOnly && !base) {
    if (!(await isFile('.next/security-headers-report.json'))) throw new Error('Production build/postbuild report unavailable; wait for npm run build to finish.');
    await indexBuild();
    if (!artifactMap.has('/')) throw new Error('No stable production HTML inventory; wait for npm run build to finish.');
  }
  if (!sourceOnly && base) report.layout = 'served production';
  if (checksums && !only) {
    await checkPreservation(checksums);
    await verifyAsset(checksums.sharedErrataSupplement, 'Shared targeted errata archive');
  }
  const targets = new Set();
  function internal(href, current) {
    const u = new URL(href, origin + current);
    if (u.origin === new URL(origin).origin) targets.add(u.pathname + u.hash);
  }
  for (const id of ids) {
    const spec = expected[id];
    const doi = '10.5281/zenodo.' + spec.recordId, root = programme + '/' + id;
    const paper = papers.find(p => p.id === id);
    const asset = checksums?.publications?.find(p => p.id === id);
    if (!draft) {
      check(paper?.programme === 'source-readout' && paper.url === root && paper.doi === doi, `${id}: incorrect publication identity or canonical route`);
      check(asset?.doi === doi && asset?.status === 'published' && asset?.recordUrl === 'https://zenodo.org/records/' + spec.recordId, `${id}: publication status/record evidence missing`);
      check(asset?.pdf?.path === 'public/publications/gravity/' + id + '/paper.pdf' && asset?.pdf?.path === 'public' + paper?.pdfUrl, `${id}: PDF checksum record missing or URL mismatch`);
      check(asset?.pdf?.sourceName === spec.sourcePdf && asset?.pdf?.sha256 === spec.sha256, `${id}: PDF record doesn't match the originally supplied file`);
      check(/^[a-f0-9]{32}$/i.test(asset?.pdf?.remoteMd5 ?? ''), `${id}: published-file MD5 evidence missing`);
      await verifyAsset(asset?.pdf, id + ' original PDF');
      if (paper?.previousDoi) {
        check(paper.previousDoi === asset?.previousDoi && paper.date === asset?.publicationDate, `${id}: corrected edition version metadata mismatch`);
        check(asset?.pdf?.zenodoName && asset.pdf.zenodoName !== asset.pdf.sourceName, `${id}: attachment and record filenames must be distinguished`);
        check(asset?.supplement?.url === paper.supplementUrl && asset?.supplement?.path === 'public' + paper.supplementUrl, `${id}: wrong local verification suite`);
        check(asset?.supplement?.description === paper.supplementDescription && Boolean(paper.supplementDescription), `${id}: wrong verification suite description`);
        check(asset?.remoteSupplement?.checksum === 'md5:' + asset?.supplement?.remoteMd5, `${id}: verification suite remote checksum evidence missing`);
        await verifyAsset(asset?.supplement, id + ' corrected verification suite');
      }
    }
    const files = (await walk('content/paper-integrations/' + id)).filter(p => p.endsWith('.mdx'));
    check(files.length > 0, `${id}: no chapter source`);
    const index = generated.filter(c => c.paperId === id);
    if (!draft) check(index.length === files.length, `${id}: generated chapter inventory stale`);
    const stat = { id, doi, route: root, chapters: [], math: 0, displayed: 0, tables: 0, figures: 0, coverage: 0 };
    report.publications.push(stat);
    const byChapter = new Map();
    const actualEquations = new Set(), orders = new Set();
    let opening;
    if (!sourceOnly) {
      opening = await page(root);
      check(opening.available && opening.dom.h1 === 1 && opening.dom.canonical === origin + root, `${root}: opening HTML or canonical is missing`);
      for (const href of ['https://doi.org/' + doi, paper?.pdfUrl, paper?.markdownUrl, paper?.manifestUrl].filter(Boolean))
        check(opening.dom.links.includes(href), `${root}: required link missing ${href}`);
      if (paper?.previousDoi) {
        check(opening.dom.links.includes('https://doi.org/' + paper.previousDoi), `${root}: earlier version link missing`);
        check(opening.dom.links.includes(paper.supplementUrl), `${root}: corrected verification suite link missing`);
      }
      for (const href of opening.dom.links) internal(href, root);
      verifyHeaders(opening, root);
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
      stat.math += chapter.math.length;
      stat.displayed += chapter.displayed.length;
      stat.tables += chapter.tables;
      stat.figures += chapter.images.length;
      for (const n of chapter.equationLabels) actualEquations.add(n);
      if (sourceOnly) continue;
      check(opening.dom.links.includes(route), `${root}: chapter missing from reading path ${route}`);
      const rendered = await page(route);
      const dom = rendered.dom;
      chapter.dom = dom;
      check(rendered.available && dom.h1 === 1 && dom.canonical === origin + route, `${route}: missing HTML, H1, or canonical URL`);
      check(new Set(dom.ids).size === dom.ids.length, `${route}: duplicate rendered ID`);
      check(dom.errorCount === 0, `${route}: KaTeX errors in built page`);
      check(dom.tableCount >= chapter.tables, `${route}: missing rendered table`);
      if (chapter.tables) check(dom.tableHeaders > 0, `${route}: table has no rendered header cells`);
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
    checkSequence(actualEquations, spec.equations, `${id}: numbered source equation typeset in article`);
    check(stat.tables >= spec.tables, `${id}: fewer article tables than source (${stat.tables}/${spec.tables})`);
    check(stat.figures >= spec.figures, `${id}: fewer article figures than source (${stat.figures}/${spec.figures})`);
    if (draft) continue;
    const markdown = await text(localPath('public', paper.markdownUrl));
    for (const chapter of byChapter.values())
      check(markdown.includes(chapter.body), `${chapter.file}: generated complete Markdown omits/changes the chapter body`);
    const ledger = coverage?.publications?.find(p => p.id === id);
    const rows = ledger?.records ?? [];
    check(ledger?.doi === doi && ledger?.sourcePdf === spec.sourcePdf && ledger?.physicalPdfPages === 7, `${id}: coverage refers to the wrong source edition`);
    check(rows.length > spec.sections.length, `${id}: coverage ledger absent or too coarse`);
    stat.coverage = rows.length;
    const covered = new Set(), allPages = new Set(), allSections = new Set(), allFormal = new Set();
    const items = { equations: new Set(), figures: new Set(), tables: new Set(), references: new Set() };
    for (const row of rows) {
      const slug = row.destinationChapter, chapter = byChapter.get(slug), anchor = row.anchor;
      const label = `${id} ${row.sourceSection} (${row.sourceItem})`;
      check(Boolean(row.sourceSection) && Boolean(row.sourceItem) && Array.isArray(row.sourcePages) && row.sourcePages.length > 0 && row.sourcePages.every(page => Number.isInteger(page) && page >= 1 && page <= ledger.physicalPdfPages), `${label}: coverage row lacks valid source section/page locator`);
      check(chapter?.anchors.includes(anchor), `${label}: invalid coverage destination ${slug}#${anchor}`);
      check(row.destinationRoute === chapter?.route + '#' + anchor, `${label}: coverage route differs from its chapter and anchor`);
      if (chapter) {
        covered.add(slug);
        if (!sourceOnly) check(chapter.dom?.ids.includes(anchor), `${label}: coverage anchor not rendered ${slug}#${anchor}`);
      }
      for (const num of row.sectionNumbers ?? []) allSections.add(String(num));
      for (const num of row.sourcePages ?? []) allPages.add(num);
      for (const num of row.formalStatements ?? []) allFormal.add(String(num));
      for (const field of Object.keys(items)) {
        check(Array.isArray(row[field]), `${label}: coverage row lacks ${field} inventory`);
        for (const n of ranges(row[field] ?? [])) {
          items[field].add(n);
          if (field === 'equations') check(chapter?.equationLabels.has(n), `${label}: ledger points equation ${n} to a different chapter`);
          if (field === 'tables') check(chapter?.tables > 0, `${label}: table ${n} missing from designated chapter`);
        }
      }
    }
    for (const slug of byChapter.keys()) check(covered.has(slug), `${id}: chapter not mapped from source ${slug}`);
    for (const num of spec.sections) check(allSections.has(num), `${id}: source section ${num} has no coverage row`);
    for (const num of spec.formal) check(allFormal.has(num), `${id}: theorem ${num} has no coverage row`);
    for (const field of Object.keys(items)) checkSequence(items[field], spec[field], `${id}: coverage of ${field} item`);
    checkSequence(allPages, ledger?.physicalPdfPages ?? 7, `${id}: source coverage on physical page`);
  }
  if (sourceOnly || only) return;

  const [programmePage, hub, listing, articles, atlasPage, deserOpening] = await Promise.all([programme, hubRoute, '/papers', '/articles', atlas, deser].map(page));
  check(programmePage.available && programmePage.dom.links.includes(hubRoute), 'Source–Readout landing lacks new reading path');
  check(hub.available && hub.dom.h1 === 1 && hub.dom.canonical === origin + hubRoute, 'Five-paper entrance missing or malformed');
  check(hub.dom.links.includes(deser), 'Five-paper entrance does not reuse the existing Deser opening');
  check(hub.dom.links.includes(checksums.sharedErrataSupplement.url), 'Five-paper entrance lacks shared targeted errata archive');
  for (const [route, doi] of [[first + '/05-verification-and-references', '24029166'], [second + '/04-oscillatory-comparison', '24029188']]) {
    const chapter = await page(route);
    check(chapter.dom.links.includes('https://doi.org/10.5281/zenodo.' + doi), `${route}: corrected companion citation missing`);
  }
  check(deserOpening.available && deserOpening.dom.links.includes('https://doi.org/10.5281/zenodo.23954887'), 'Existing Deser opening or DOI link missing');
  check(deserOpening.dom.links.includes(hubRoute), 'Existing Deser edition lacks link back to five-paper path');
  const deserChapters = generated.filter(c => c.paperId === 'transport-projective');
  check(deserChapters.length > 1, 'Deser chapter reading path absent');
  for (const c of deserChapters) {
    check(deserOpening.dom.links.includes(c.url), `Deser opening lost its chapter ${c.url}`);
    const rendered = await page(c.url);
    check(rendered.available && rendered.dom.canonical === origin + c.url && rendered.dom.errorCount === 0, `Existing Deser chapter not rendered: ${c.url}`);
    verifyHeaders(rendered, c.url);
  }
  for (const [one, other, oneTech, otherTech] of [[first, second, firstTechnical, secondTechnical], [second, first, secondTechnical, firstTechnical]]) {
    const [opening, section] = await Promise.all([page(one), page(oneTech.split('#')[0])]);
    check(opening.dom.links.includes(other) && opening.dom.links.includes(otherTech), `${one}: opening missing reciprocal opening and direct technical links`);
    check(section.dom.links.includes(otherTech), `${oneTech}: direct technical link to companion is missing`);
    internal(otherTech, one);
  }
  check(atlasPage.available && atlasPage.dom.h1 === 1, 'Atlas is unavailable');
  for (const [target, result] of [[hubRoute, hub], [atlas, atlasPage], [deser, deserOpening], [programme, programmePage]]) {
    verifyHeaders(result, target);
    for (const href of result.dom.links) internal(href, target);
  }
  const endpoints = ['/sitemap.xml', '/feed.xml', '/llms.txt', '/graph.json', programme + '/manifest.json', programme + '/search.json'];
  const [sitemap, feed, llms, graph, manifest, search] = await Promise.all(endpoints.map(async route => {
    const result = await load(route);
    check(result.available, `Discovery endpoint missing: ${route}`);
    return route.endsWith('.json') ? JSON.parse(result.body) : result.body;
  }));
  const graphValues = collectStringValues(graph), programmeInventory = collectStringValues(manifest.readingEditions ?? manifest);
  const searchRecords = new Map(search.map(record => [record.url, record]));
  for (const article of [...report.publications, {id:'transport-projective',route:deser,chapters:deserChapters.map(c=>c.url)}]) {
    const meta = papers.find(p => p.id === article.id);
    const invResponse = await load(meta.manifestUrl);
    check(invResponse.available, `${article.id}: edition manifest unavailable`);
    const inventory = collectStringValues(JSON.parse(invResponse.body));
    check(listing.dom.links.includes('/papers/' + meta.paperSlug) || listing.dom.links.includes(article.route), `Papers listing missing ${article.route}`);
    check(hub.dom.links.includes(article.route), `Five-paper entrance lacks ${article.route}`);
    check(articles.dom.links.includes(article.route), `Articles listing missing ${article.route}`);
    const record = await page('/papers/' + meta.paperSlug);
    check(record.available && record.dom.links.includes(article.route), `Publication detail missing complete reading link for ${article.route}`);
    if (meta.previousDoi) {
      check(record.dom.links.includes('https://doi.org/' + meta.doi), `Publication detail missing corrected DOI for ${article.route}`);
      check(record.dom.links.includes(meta.supplementUrl), `Publication detail missing corrected verification suite for ${article.route}`);
    }
    for (const route of [article.route, ...article.chapters]) {
      check(sitemap.includes(origin + route + '</loc>'), `Sitemap missing ${route}`);
      check(hasRoute(graphValues, route), `Graph missing ${route}`);
      const searchRecord = searchRecords.get(route) ?? searchRecords.get(origin + route);
      check(searchRecord?.text?.length >= (route === article.route ? 25 : 400), `Full-text search missing text for ${route}`);
      check(hasRoute(inventory, route), `Edition manifest missing ${route}`);
      check(hasRoute(programmeInventory, route), `Programme manifest missing ${route}`);
    }
    check(feed.includes(origin + article.route + '"') || feed.includes(origin + article.route + '<'), `Feed missing ${article.route}`);
    check(llms.includes(origin + article.route + ')'), `llms.txt missing ${article.route}`);
  }
  check(sitemap.includes(origin + hubRoute + '</loc>'), 'Sitemap missing five-paper entrance');
  check(hasRoute(graphValues, hubRoute), 'Graph missing five-paper entrance');
  check(hasRoute(collectStringValues(manifest), hubRoute), 'Programme manifest missing five-paper entrance');
  check(llms.includes(origin + hubRoute + ')'), 'llms.txt missing five-paper entrance');
  check(feed.includes(origin + hubRoute + '"') || feed.includes(origin + hubRoute + '<'), 'Feed missing five-paper entrance');
  const atlasNodes = graph.nodes.filter(node => node.id.startsWith('atlas:'));
  const atlasReadingLink = (node, href) => node?.readingLinks?.some(link => link.href === href);
  const reaches = (node, route) => graph.edges.some(edge => edge.from === node?.id && edge.to === 'integrated:' + route.split('/').at(-1));
  for (const route of [deser, programme + '/modular-transport', programme + '/local-horizon-thermodynamics']) {
    const node = atlasNodes.find(candidate => atlasReadingLink(candidate, route));
    check(Boolean(node), `Atlas lacks direct reading link ${route}`);
    check(reaches(node, route), `Atlas graph lacks a reading relation to ${route}`);
  }
  const pairedNode = atlasNodes.find(node => node.id === 'atlas:observable-horizon-entropy');
  check(atlasReadingLink(pairedNode, firstTechnical) && atlasReadingLink(pairedNode, secondTechnical), 'Atlas horizon-entropy node must link to both first-order kernel and second-order detection anchors');
  check(reaches(pairedNode, first) && reaches(pairedNode, second), 'Shared Atlas node lacks graph edges to both papers');
  for (const route of [first, second]) {
    const opening = await page(route);
    check(pairedNode && opening.dom.links.some(href => new URL(href, origin).searchParams.get('focus') === pairedNode.id.replace(/^atlas:/, '')), `${route}: link to paired Atlas focus missing`);
  }

  for (const target of targets) {
    const url = new URL(target, origin);
    if (['/research', '/research-intelligence', '/tier-1', '/what-is-the-everything-equation', '/problems/consciousness-field-theorem'].includes(url.pathname)) continue; // pre-existing redirects
    if (await isFile(localPath('public', decodeURIComponent(url.pathname)))) continue;
    const destination = await page(url.pathname);
    check(destination.available, `Broken internal route: ${target}`);
    if (url.hash) check(destination.dom.ids.includes(decodeURIComponent(url.hash.slice(1))), `Broken internal anchor: ${target}`);
  }
  if (base) {
    const errorRoute = '/gravity-editions-verification-missing';
    const errorPage = await load(errorRoute);
    check(errorPage.status === 404, 'Unknown route did not return an HTTP 404');
    verifyHeaders(errorPage, errorRoute);
  }
  report.localTargets = targets.size;
}

try { await main(); } catch (error) { check(false, error.stack ?? String(error)); }
report.passed = report.checks - report.failures.length;
if (arg('--report')) {
  await fs.mkdir(path.dirname(arg('--report')), { recursive: true });
  await fs.writeFile(arg('--report'), JSON.stringify(report, null, 2) + '\n');
}
console.log(JSON.stringify({ ...report, failures: report.failures.slice(0, 40) }, null, 2));
if (report.failures.length) process.exitCode = 1;
