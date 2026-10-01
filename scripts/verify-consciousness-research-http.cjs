/** Verify the complete research web edition against maintained sources over HTTP.
 * Run: node scripts/verify-consciousness-research-http.cjs http://127.0.0.1:3000
 * DOI links are checked for identity only; no external service is contacted.
 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const Module = require('node:module');
const ts = require('typescript');
const { parse } = require('parse5');
const root = process.cwd();
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(specifier, parent, ...args) {
  if (specifier.startsWith('@/')) specifier = path.join(root, 'src', specifier.slice(2));
  if (specifier.startsWith('@content/')) specifier = path.join(root, 'content', specifier.slice(9));
  return originalResolve.call(this, specifier, parent, ...args);
};
require.extensions['.ts'] = function(module, filename) {
  const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, esModuleInterop: true,
  }, fileName: filename });
  module._compile(result.outputText, filename);
};
const { researchPapers, listResearchDocuments, readResearchHtml, getResearchEditorial,
  renderResearchEditorial, researchFAQ, researchGlossary } = require('../src/lib/consciousness-research.ts');
const { site } = require('../src/config/site.ts');
const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '');
const canonicalOrigin = new URL(site.url).origin;
const baseOrigin = new URL(base).origin;
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const failures = [];
let checks = 0;
const responses = new Map();
function check(condition, message) { checks++; if (!condition) failures.push(message); }
function inspect(text) {
  const dom = parse(text), ids = new Set(), duplicateIds = [], links = [], images = [], metas = [], jsonLd = [];
  let title = '', canonical = null;
  function walk(node) {
    const attrs = Object.fromEntries((node.attrs || []).map(a => [a.name, a.value]));
    if (attrs.id) { if (ids.has(attrs.id)) duplicateIds.push(attrs.id); ids.add(attrs.id); }
    if (attrs.href && (node.nodeName === 'a' || node.nodeName === 'link')) links.push(attrs.href);
    if (node.nodeName === 'img') images.push(attrs);
    if (node.nodeName === 'meta') metas.push(attrs);
    if (node.nodeName === 'title') title = node.childNodes?.map(child => child.value || '').join('') || '';
    if (node.nodeName === 'link' && attrs.rel === 'canonical') canonical = attrs.href;
    if (node.nodeName === 'script' && attrs.type === 'application/ld+json') {
      const raw = node.childNodes?.map(child => child.value || '').join('') || '';
      try { jsonLd.push(JSON.parse(raw)); } catch { jsonLd.push({invalid: raw}); }
    }
    for (const child of node.childNodes || []) walk(child);
  }
  walk(dom);
  return { ids, duplicateIds, links, images, metas, title, canonical, jsonLd };
}
async function read(route) {
  if (!responses.has(route)) responses.set(route, (async () => {
    const response = await fetch(base + route, {signal: AbortSignal.timeout(60000)});
    const bytes = Buffer.from(await response.arrayBuffer());
    const text = bytes.toString('utf8');
    return {status: response.status, bytes, text, type: response.headers.get('content-type') || '',
      parsed: (response.headers.get('content-type') || '').includes('text/html') ? inspect(text) : null};
  })());
  return responses.get(route);
}
async function batches(items, fn) {
  for (let index = 0; index < items.length; index += 4) await Promise.all(items.slice(index, index + 4).map(fn));
}
function internalTarget(href, current) {
  if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  const target = new URL(href, base + current);
  if (![baseOrigin, canonicalOrigin].includes(target.origin)) return null;
  if (target.pathname.startsWith('/_next/')) return null;
  return target;
}
(async () => {
  const documents = listResearchDocuments();
  const routes = ['/consciousness/research', ...researchPapers.map(p => p.url), ...documents.map(d => d.url)];
  check(routes.length === 53, `Expected 53 new research routes, found ${routes.length}`);
  await batches(routes, async route => {
    const response = await read(route);
    check(response.status === 200, `${route}: HTTP ${response.status}`);
  });
  const titles = new Set();
  for (const route of routes) {
    const response = await read(route), parsed = response.parsed;
    check(Boolean(parsed), `${route}: not HTML`);
    if (!parsed) continue;
    check(parsed.canonical === `${canonicalOrigin}${route}`, `${route}: incorrect canonical ${parsed.canonical}`);
    check(Boolean(parsed.title) && !titles.has(parsed.title), `${route}: missing/duplicate title`); titles.add(parsed.title);
    check(parsed.metas.some(meta => meta.name === 'description' && meta.content), `${route}: missing description`);
    check(!parsed.metas.some(meta => meta.name === 'robots' && /noindex/.test(meta.content || '')), `${route}: noindex`);
    check(parsed.jsonLd.length > 0 && !parsed.jsonLd.some(item => item.invalid), `${route}: invalid/missing structured data`);
    check(parsed.duplicateIds.length === 0, `${route}: duplicate IDs ${parsed.duplicateIds.join(', ')}`);
    check(!/class="[^"]*katex-error/.test(response.text), `${route}: KaTeX error`);
    check(!response.text.includes('unresolved-reference'), `${route}: unresolved reference marker`);
  }
  let formulaCount = 0, sourceTargets = 0, downloads = 0, articleSections = 0;
  const localLinks = new Map();
  const addLinks = (route, parsed) => {
    if (!parsed) return;
    for (const href of parsed.links) {
      const target = internalTarget(href, route); if (!target) continue;
      const key = target.pathname + target.search + target.hash;
      if (!localLinks.has(key)) localLinks.set(key, route);
    }
    for (const image of parsed.images) {
      check(Boolean(image.alt?.trim()), `${route}: image lacks descriptive alt ${image.src}`);
      if (image.src) { const target = internalTarget(image.src, route); if (target) localLinks.set(target.pathname, route); }
    }
  };
  for (const route of routes) addLinks(route, (await read(route)).parsed);
  for (const document of documents) {
    const response = await read(document.url);
    const html = readResearchHtml(document);
    check(response.text.includes(html), `${document.url}: complete maintained scientific text absent from initial HTML`);
    for (const section of document.sections) check(response.parsed?.ids.has(section.anchor), `${document.url}: missing #${section.anchor}`);
    check(response.parsed?.jsonLd.some(item => item['@type'] === 'Chapter'), `${document.url}: missing Chapter metadata`);
    const math = (html.match(/<annotation encoding="application\/x-tex">/g) || []).length;
    check(math === document.stats.equations, `${document.url}: mathematical count ${math} differs from ${document.stats.equations}`);
    formulaCount += math;
    const markdown = await read(document.markdownUrl);
    check(markdown.status === 200, `${document.markdownUrl}: HTTP ${markdown.status}`);
    check(sha256(markdown.bytes) === sha256(fs.readFileSync(`public${document.markdownUrl}`)), `${document.markdownUrl}: Markdown bytes changed`); downloads++;
  }
  for (const paper of researchPapers) {
    const response = await read(paper.url), editorial = getResearchEditorial(paper.id);
    check(response.parsed?.jsonLd.some(item => item['@type'] === 'ScholarlyArticle' && item.identifier === paper.doiUrl), `${paper.url}: incorrect publication identity`);
    check(response.parsed?.links.includes(paper.doiUrl), `${paper.url}: DOI link absent`);
    for (const section of editorial.sections) {
      check(response.parsed?.ids.has(section.id), `${paper.url}: missing article #${section.id}`);
      check(response.text.includes(renderResearchEditorial(section.html)), `${paper.url}#${section.id}: full article prose/math absent from initial HTML`); articleSections++;
    }
    for (const format of ['pdfUrl', 'texUrl', 'markdownUrl']) {
      const url = paper[format], download = await read(url);
      check(download.status === 200 && download.bytes.length > 500, `${url}: invalid download`);
      check(sha256(download.bytes) === sha256(fs.readFileSync(`public${url}`)), `${url}: download bytes differ`); downloads++;
    }
    const audit = JSON.parse(fs.readFileSync(`public/publications/consciousness/${paper.id}/source-coverage.json`, 'utf8'));
    for (const [label, target] of Object.entries(audit.labels)) {
      const url = new URL(target.url, base), page = await read(url.pathname);
      check(page.status === 200 && page.parsed?.ids.has(decodeURIComponent(url.hash.slice(1))), `${paper.id}: missing source label ${label} -> ${target.url}`); sourceTargets++;
    }
    for (const element of [...audit.elements, ...audit.bibliographyElements]) {
      const url = new URL(element.url, base), page = await read(url.pathname);
      check(page.status === 200 && page.parsed?.ids.has(decodeURIComponent(url.hash.slice(1))), `${paper.id}: missing source ${element.kind} -> ${element.url}`); sourceTargets++;
    }
    const tex = await read(paper.texUrl), pdf = await read(paper.pdfUrl);
    check(sha256(tex.bytes) === audit.sourceSha256, `${paper.id}: original LaTeX hash differs`);
    check(sha256(pdf.bytes) === audit.pdfSha256, `${paper.id}: original PDF hash differs`);
  }
  for (const [route, entries] of [['/consciousness/faq', researchFAQ], ['/consciousness/glossary', researchGlossary]]) {
    const response = await read(route);
    check(response.status === 200, `${route}: HTTP ${response.status}`);
    for (const entry of entries) {
      check(response.parsed?.ids.has(entry.id), `${route}: missing new entry ${entry.id}`);
      check(response.text.includes(entry.html), `${route}: complete new entry absent ${entry.id}`);
    }
    addLinks(route, response.parsed);
  }
  await batches([...localLinks], async ([href, from]) => {
    const url = new URL(href, base), response = await read(url.pathname + url.search);
    check(response.status === 200, `${from}: broken local link ${href} (HTTP ${response.status})`);
    if (url.hash && response.parsed) check(response.parsed.ids.has(decodeURIComponent(url.hash.slice(1))), `${from}: missing local anchor ${href}`);
  });
  const manifest = await (await read('/consciousness/manifest.json')).text;
  const search = JSON.parse((await read('/consciousness/search.json')).text);
  for (const paper of researchPapers) check(manifest.includes(paper.doi), `HTTP manifest omits ${paper.doi}`);
  for (const document of documents) check(search.some(record => record.url === document.url), `HTTP search omits ${document.url}`);
  for (const entry of [...researchFAQ, ...researchGlossary]) check(search.some(record => record.url.endsWith(`#${entry.id}`)), `HTTP search omits reference entry ${entry.id}`);
  const report = {passed: failures.length === 0, baseUrl: base, checks, newRoutes: routes.length,
    technicalDocuments: documents.length, articleSections, formulaCount, sourceTargets, downloads,
    internalLinks: localLinks.size, glossaryEntries: researchGlossary.length, faqEntries: researchFAQ.length,
    failures, scope: 'Initial HTTP HTML, maintained full text, source labels and elements, prose and math, byte-exact downloads, local links/fragments, canonicals, metadata, FAQ/glossary and search. External DOI resolution and visual review are separate.'};
  fs.mkdirSync('docs/consciousness', {recursive: true});
  fs.writeFileSync('docs/consciousness/research-http-verification.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) process.exitCode = 1;
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
