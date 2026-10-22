/** Install and verify script hashes against the artifacts the selected adapter serves. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'parse5';
import { browserHeaders, contentSecurityPolicy, HEADER_MARKER } from './security-policy.mjs';

const errorRoutes = new Set(['/404', '/500', '/_not-found', '/_global-error']);
const isError = document => errorRoutes.has(document.route) || errorRoutes.has(document.sourcePath);
const hashesForPolicy = (document, fallbackHashes) => isError(document) ? fallbackHashes : document.hashes;
const policyKey = key => key.toLowerCase() === 'content-security-policy';
const marked = rule => rule.headers && (Array.isArray(rule.headers)
  ? rule.headers.some(header => header.key.toLowerCase() === HEADER_MARKER)
  : Object.keys(rule.headers).some(key => key.toLowerCase() === HEADER_MARKER));

export function inlineScriptHashes(html) {
  const tree = parse(html, { sourceCodeLocationInfo: true });
  const hashes = new Set();
  function visit(node) {
    if (node.tagName === 'script' && !(node.attrs ?? []).some(attr => attr.name === 'src')) {
      const location = node.sourceCodeLocation;
      if (!location?.startTag || !location?.endTag) throw new Error('Unclosed inline script in built HTML');
      const source = html.slice(location.startTag.endOffset, location.endTag.startOffset);
      hashes.add(`'sha256-${createHash('sha256').update(source).digest('base64')}'`);
    }
    for (const child of node.childNodes ?? []) visit(child);
    if (node.content) visit(node.content);
  }
  visit(tree);
  return [...hashes].sort();
}

async function readOptionalJson(filename) {
  try { return JSON.parse(await fs.readFile(filename, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function filesEndingIn(directory, suffix) {
  const result = [];
  try {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      // Do not descend into traced .func assets or symlinked function bundles.
      if (entry.isDirectory() && !entry.name.endsWith('.func')) result.push(...await filesEndingIn(filename, suffix));
      else if (entry.isFile() && entry.name.endsWith(suffix)) result.push(filename);
    }
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  return result.sort();
}

function publicRoute(value) {
  if (typeof value !== 'string' || /[\\?#\u0000]/.test(value)) throw new Error(`Unsupported public route mapping: ${String(value)}`);
  const parts = value.split('/');
  if (parts.some(part => part === '.' || part === '..')) throw new Error(`Unsafe route traversal: ${value}`);
  const route = '/' + value.replace(/^\/+|\/+$/g, '');
  if (route.includes('//')) throw new Error(`Ambiguous public route: ${value}`);
  return route;
}

function relativeName(filename, directory) { return path.relative(directory, filename).split(path.sep).join('/'); }
function routeForHtml(filename, directory) {
  const relative = relativeName(filename, directory);
  return relative === 'index.html' ? '/' : publicRoute(relative.slice(0, -5));
}
function regexForRoute(route) {
  const escaped = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return route === '/' ? '^/$' : `^${escaped}(?:/)?$`;
}
function within(directory, filename) {
  const relative = path.relative(directory, filename);
  if (relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) throw new Error('Fallback path traversal outside adapter output');
}

/** Shared discovery. Adapter output, when present, is authoritative over stale local HTML. */
async function discoverBuild(root) {
  const build = path.join(root, '.next');
  const manifest = await readOptionalJson(path.join(build, 'routes-manifest.json'));
  const prerender = await readOptionalJson(path.join(build, 'prerender-manifest.json'));
  if (manifest?.version !== 3 || !Array.isArray(manifest.headers) || !prerender?.routes) throw new Error('Unsupported Next.js routing manifest; review CSP integration before deploying');
  const outputRoot = path.join(build, 'output');
  const outputConfigPath = path.join(outputRoot, 'config.json');
  const config = await readOptionalJson(outputConfigPath);
  if (config && (config.version !== 3 || !Array.isArray(config.routes) || (config.overrides && (typeof config.overrides !== 'object' || Array.isArray(config.overrides))))) throw new Error('Unsupported Vercel build-output routing config');
  const documents = [];
  const byRoute = new Map();
  async function add(route, filename, extra = {}) {
    if (byRoute.has(route)) throw new Error(`Ambiguous duplicate HTML route mapping: ${route}`);
    const document = { route, filename, hashes: inlineScriptHashes(await fs.readFile(filename, 'utf8')), ...extra };
    documents.push(document); byRoute.set(route, document);
  }
  if (config) {
    const staticDir = path.join(outputRoot, 'static');
    for (const filename of await filesEndingIn(staticDir, '.html')) {
      const relative = relativeName(filename, staticDir);
      const override = config.overrides?.[relative];
      if (override !== undefined && (!override || typeof override !== 'object' || Array.isArray(override))) throw new Error(`Unsupported static HTML override: ${relative}`);
      const route = override && Object.hasOwn(override, 'path') ? publicRoute(override.path) : routeForHtml(filename, staticDir);
      await add(route, filename, { kind: 'static' });
    }
    const functionsDir = path.join(outputRoot, 'functions');
    for (const configFile of await filesEndingIn(functionsDir, '.prerender-config.json')) {
      const record = JSON.parse(await fs.readFile(configFile, 'utf8'));
      const type = Object.entries(record.initialHeaders ?? {}).find(([key]) => key.toLowerCase() === 'content-type')?.[1];
      const isHtml = typeof type === 'string' && /^text\/html(?:;|$)/i.test(type);
      if (!isHtml && !record.fallback?.endsWith?.('.html')) continue; // RSC, JSON, and static GET handlers.
      const name = relativeName(configFile, functionsDir).slice(0, -'.prerender-config.json'.length);
      const route = name === 'index' ? '/' : publicRoute(name);
      if (!record.initialHeaders || typeof record.initialHeaders !== 'object' || Array.isArray(record.initialHeaders) || Object.values(record.initialHeaders).some(value => typeof value !== 'string')) throw new Error(`Invalid HTML prerender initialHeaders: ${route}`);
      if (record.expiration !== false || record.partialFallback || record.chain) throw new Error(`ISR or partial fallback HTML is incompatible with build-time CSP hashes: ${route}`);
      if (typeof record.fallback !== 'string' || !record.fallback.endsWith('.html')) throw new Error(`Missing HTML prerender fallback: ${route}`);
      if (path.isAbsolute(record.fallback) || record.fallback.includes('\\') || record.fallback.split('/').includes('..')) throw new Error(`Fallback path traversal: ${route}`);
      const filename = path.resolve(path.dirname(configFile), record.fallback);
      within(functionsDir, filename);
      await add(route, filename, { kind: 'prerender', configFile, prerenderConfig: record, sourcePath: record.sourcePath });
    }
  } else {
    for (const directory of [path.join(build, 'server/app'), path.join(build, 'server/pages')]) {
      for (const filename of await filesEndingIn(directory, '.html')) await add(routeForHtml(filename, directory), filename, { kind: 'legacy' });
    }
  }
  if (!byRoute.has('/')) throw new Error('No static homepage found; refusing incomplete CSP build');
  for (const [route, record] of Object.entries(prerender.routes)) {
    if (record.initialRevalidateSeconds !== false && byRoute.has(route)) throw new Error(`ISR HTML is incompatible with build-time CSP hashes: ${route}`);
    if (record.dataRoute && /\.(?:rsc|json)$/.test(record.dataRoute) && !errorRoutes.has(route) && !byRoute.has(route)) throw new Error(`Missing rendered HTML for prerendered page: ${route}`);
  }
  for (const [route, record] of Object.entries(prerender.dynamicRoutes ?? {})) {
    if (record.fallback !== false) throw new Error(`Runtime fallback HTML needs a nonce strategy before deployment: ${route}`);
  }
  const appPaths = await readOptionalJson(path.join(build, 'server/app-paths-manifest.json'));
  for (const key of Object.keys(appPaths ?? {})) {
    if (!key.endsWith('/page') || key.includes('[') || key.startsWith('/_')) continue;
    const route = key.slice(0, -5) || '/';
    if (!byRoute.has(route)) throw new Error(`Non-static HTML needs a nonce strategy before deployment: ${route}`);
  }
  documents.sort((a, b) => a.route.localeCompare(b.route, 'en'));
  const fallbackHashes = [...new Set(documents.filter(isError).flatMap(document => document.hashes))].sort();
  if (!documents.some(isError)) throw new Error('No static error-page HTML found; refusing incomplete CSP build');
  for (const hashes of [fallbackHashes, ...documents.map(document => hashesForPolicy(document, fallbackHashes))]) {
    if (Buffer.byteLength(contentSecurityPolicy(hashes)) > 12 * 1024) throw new Error('CSP exceeds conservative 12 KiB header budget');
  }
  return { root, build, manifest, documents, fallbackHashes, config, outputConfigPath };
}

function adapterPolicyRoutes({ documents, fallbackHashes }) {
  const headers = Object.fromEntries(browserHeaders().map(header => [header.key, header.value]));
  headers['Content-Security-Policy'] = contentSecurityPolicy(fallbackHashes);
  headers[HEADER_MARKER] = '1';
  return [{ src: '^/.*$', headers, continue: true }, ...documents.map(document => ({
    src: regexForRoute(document.route),
    headers: { 'Content-Security-Policy': contentSecurityPolicy(hashesForPolicy(document, fallbackHashes)), [HEADER_MARKER]: '1' },
    continue: true,
  }))];
}

function assertExpectedPolicy(headers, expected, context) {
  const entries = Object.entries(headers ?? {}).filter(([key]) => policyKey(key));
  if (entries.length !== 1 || entries[0][1] !== expected || headers[HEADER_MARKER] !== '1') throw new Error(`Missing or stale CSP in ${context}`);
}

function previouslyGeneratedPolicy(headers, value) {
  // If output already exists, the adapter keeps prerender metadata while
  // replacing its HTML fallback. Recompute our own strict policy, never an unknown or
  // relaxed policy. Verification alone continues to reject any stale hashes.
  if (headers[HEADER_MARKER] !== '1' || typeof value !== 'string') return false;
  const hashes = value.match(/'sha256-[A-Za-z0-9+/]{43}='/g) ?? [];
  return contentSecurityPolicy(hashes) === value;
}

export async function verifyBuiltSecurityHeaders(root = process.cwd()) {
  const state = await discoverBuild(root);
  const { build, manifest, documents, fallbackHashes, config } = state;
  const report = JSON.parse(await fs.readFile(path.join(build, 'security-headers-report.json'), 'utf8'));
  const baseline = manifest.headers.find(rule => rule.source === '/:path*');
  if (baseline?.headers.find(header => policyKey(header.key))?.value !== contentSecurityPolicy(fallbackHashes)) throw new Error('Missing or stale global fallback CSP');
  const baselinePolicies = manifest.headers.filter(rule => !marked(rule)).flatMap(rule => (rule.headers ?? []).filter(header => policyKey(header.key)).map(header => ({ source: rule.source, value: header.value })));
  if (!isDeepStrictEqual(baselinePolicies, [{ source: '/:path*', value: contentSecurityPolicy(fallbackHashes) }])) throw new Error('Competing or duplicate manifest CSP could overwrite generated hashes');
  for (const document of documents) {
    const rules = manifest.headers.filter(rule => rule.source === document.route && marked(rule));
    if (rules.length !== 1 || rules[0].regex !== regexForRoute(document.route) || rules[0].headers.find(header => policyKey(header.key))?.value !== contentSecurityPolicy(hashesForPolicy(document, fallbackHashes))) throw new Error(`Missing or stale built CSP for ${document.route}`);
  }
  const generated = manifest.headers.filter(marked);
  if (generated.length !== documents.length || documents.length !== report.documentCount || Boolean(config) !== report.buildOutputPatched) throw new Error('Static CSP document inventory changed after postbuild');
  if (config) {
    const expected = adapterPolicyRoutes(state);
    // Presence alone is insufficient: a later baseline could overwrite all hashes.
    if (!isDeepStrictEqual(config.routes.slice(0, expected.length), expected)) throw new Error('Missing, stale, or reordered Vercel output CSP/fallback policies');
    if (config.routes.slice(expected.length).some(rule => marked(rule) || Object.keys(rule.headers ?? {}).some(policyKey))) throw new Error('Competing adapter CSP could overwrite generated hashes');
    for (const document of documents.filter(document => document.kind === 'prerender')) assertExpectedPolicy(document.prerenderConfig.initialHeaders, contentSecurityPolicy(hashesForPolicy(document, fallbackHashes)), `prerender fallback ${document.route}`);
  }
  console.log(`Built security headers verified for ${documents.length} HTML routes (${config ? 'Vercel adapter output' : 'local Next output'}); no files changed.`);
  return documents.length;
}

export async function installSecurityHeaders(root = process.cwd()) {
  const state = await discoverBuild(root);
  const { build, manifest, documents, fallbackHashes, config, outputConfigPath } = state;
  const existing = manifest.headers.filter(rule => !marked(rule));
  let baselineFound = false;
  for (const rule of existing) {
    for (const header of rule.headers ?? []) {
      if (!policyKey(header.key)) continue;
      if (rule.source !== '/:path*' || ![contentSecurityPolicy(), contentSecurityPolicy(fallbackHashes)].includes(header.value)) throw new Error('Unexpected existing CSP policy; review rather than replace it');
      header.value = contentSecurityPolicy(fallbackHashes); baselineFound = true;
    }
  }
  if (!baselineFound) throw new Error('Missing configured baseline CSP; refusing incomplete protection');
  const marker = { key: HEADER_MARKER, value: '1' };
  for (const document of documents) existing.push({ source: document.route, regex: regexForRoute(document.route), headers: [{ key: 'Content-Security-Policy', value: contentSecurityPolicy(hashesForPolicy(document, fallbackHashes)) }, marker] });
  if (existing.length > 950) throw new Error('CSP header-route budget exceeded; review hosting limits before deploying');
  manifest.headers = existing;
  if (config) {
    const otherRoutes = config.routes.filter(rule => !marked(rule));
    for (const rule of otherRoutes) {
      for (const key of Object.keys(rule.headers ?? {})) {
        if (!policyKey(key)) continue;
        if (rule.headers[key] !== contentSecurityPolicy()) throw new Error('Unexpected adapter CSP policy; review rather than replace it');
        delete rule.headers[key];
      }
    }
    config.routes = [...adapterPolicyRoutes(state), ...otherRoutes];
    if (config.routes.length > 950) throw new Error('Vercel CSP routing budget exceeded; review hosting limits before deploying');
    for (const document of documents.filter(document => document.kind === 'prerender')) {
      const headers = document.prerenderConfig.initialHeaders;
      const expected = contentSecurityPolicy(hashesForPolicy(document, fallbackHashes));
      for (const key of Object.keys(headers)) {
        if (policyKey(key)) {
          if (![contentSecurityPolicy(), expected].includes(headers[key]) && !previouslyGeneratedPolicy(headers, headers[key])) throw new Error(`Unexpected prerender CSP: ${document.route}`);
          delete headers[key];
        }
      }
      headers['Content-Security-Policy'] = expected; headers[HEADER_MARKER] = '1';
    }
  }
  // All discovery/mapping/policy validation happens before writing any routing input.
  await fs.writeFile(path.join(build, 'routes-manifest.json'), JSON.stringify(manifest));
  if (config) {
    await fs.writeFile(outputConfigPath, JSON.stringify(config));
    for (const document of documents.filter(document => document.kind === 'prerender')) await fs.writeFile(document.configFile, JSON.stringify(document.prerenderConfig));
  }
  const routes = documents.map(document => ({ route: document.route, kind: document.kind, scriptHashes: hashesForPolicy(document, fallbackHashes).length, documentScriptHashes: document.hashes.length, policyBytes: Buffer.byteLength(contentSecurityPolicy(hashesForPolicy(document, fallbackHashes))) }));
  const report = { generatedAt: new Date().toISOString(), nextVersion: JSON.parse(await fs.readFile(path.join(root, 'node_modules/next/package.json'), 'utf8')).version, documentCount: documents.length, maximumPolicyBytes: Math.max(...routes.map(row => row.policyBytes)), buildOutputPatched: Boolean(config), htmlLayout: config ? 'vercel-build-output' : 'legacy-next', routes };
  await fs.writeFile(path.join(build, 'security-headers-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(`Static CSP installed for ${documents.length} HTML routes (${report.htmlLayout}); largest policy ${report.maximumPolicyBytes} bytes.`);
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const action = process.argv.includes('--verify') ? verifyBuiltSecurityHeaders : installSecurityHeaders;
  action().catch(error => { console.error(error); process.exitCode = 1; });
}
