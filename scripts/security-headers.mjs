/**
 * Hash the exact inline scripts in this completed static build. Next's route
 * manifest is the header input to next start and the Vercel Next.js adapter.
 * Do not bypass this lifecycle step with a direct `next build` deployment.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { browserHeaders, contentSecurityPolicy, HEADER_MARKER } from './security-policy.mjs';

const errorRoutes = new Set(['/404', '/500', '/_not-found', '/_global-error']);
const hashesForPolicy = (document, fallbackHashes) => errorRoutes.has(document.route) ? fallbackHashes : document.hashes;

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

async function htmlFiles(directory) {
  const result = [];
  try {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) result.push(...await htmlFiles(filename));
      else if (entry.isFile() && entry.name.endsWith('.html')) result.push(filename);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  return result.sort();
}

function routeForHtml(filename, directory) {
  const relative = path.relative(directory, filename).split(path.sep).join('/');
  return relative === 'index.html' ? '/' : '/' + relative.slice(0, -5);
}

function regexForRoute(route) {
  const escaped = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return route === '/' ? '^/$' : `^${escaped}(?:/)?$`;
}

export async function verifyBuiltSecurityHeaders(root = process.cwd()) {
  const build = path.join(root, '.next');
  const manifest = JSON.parse(await fs.readFile(path.join(build, 'routes-manifest.json'), 'utf8'));
  const report = JSON.parse(await fs.readFile(path.join(build, 'security-headers-report.json'), 'utf8'));
  if (manifest.version !== 3 || !Array.isArray(manifest.headers) || !report.documentCount) throw new Error('Unsupported or unprotected static build');
  const documents = [];
  for (const directory of [path.join(build, 'server/app'), path.join(build, 'server/pages')]) {
    for (const filename of await htmlFiles(directory)) {
      const route = routeForHtml(filename, directory);
      const hashes = inlineScriptHashes(await fs.readFile(filename, 'utf8'));
      documents.push({ route, hashes });
    }
  }
  const fallbackHashes = [...new Set(documents.filter(document => errorRoutes.has(document.route)).flatMap(document => document.hashes))].sort();
  for (const document of documents) {
    const rule = manifest.headers.find(rule => rule.source === document.route && rule.headers?.some(header => header.key.toLowerCase() === HEADER_MARKER));
    const policy = rule?.headers.find(header => header.key.toLowerCase() === 'content-security-policy')?.value;
    if (policy !== contentSecurityPolicy(hashesForPolicy(document, fallbackHashes))) throw new Error(`Missing or stale built CSP for ${document.route}`);
  }
  const checked = documents.length;
  if (checked !== report.documentCount) throw new Error('Static CSP document inventory changed after postbuild');
  if (report.buildOutputPatched) {
    const config = JSON.parse(await fs.readFile(path.join(build, 'output/config.json'), 'utf8'));
    for (const rule of manifest.headers.filter(rule => rule.headers?.some(header => header.key.toLowerCase() === HEADER_MARKER))) {
      const policy = rule.headers.find(header => header.key.toLowerCase() === 'content-security-policy').value;
      if (!config.routes.some(candidate => candidate.src === rule.regex && candidate.headers?.['Content-Security-Policy'] === policy)) throw new Error(`Missing Vercel output CSP for ${rule.source}`);
    }
  }
  console.log(`Built security headers verified for ${checked} HTML routes; no files changed.`);
  return checked;
}

export async function installSecurityHeaders(root = process.cwd()) {
  const build = path.join(root, '.next');
  const manifestFile = path.join(build, 'routes-manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
  const prerender = JSON.parse(await fs.readFile(path.join(build, 'prerender-manifest.json'), 'utf8'));
  if (manifest.version !== 3 || !Array.isArray(manifest.headers) || !prerender.routes) {
    throw new Error('Unsupported Next.js routing manifest; review CSP integration before deploying');
  }
  const app = path.join(build, 'server/app');
  const pages = path.join(build, 'server/pages');
  const documents = [];
  for (const directory of [app, pages]) {
    for (const filename of await htmlFiles(directory)) {
      const html = await fs.readFile(filename, 'utf8');
      documents.push({ route: routeForHtml(filename, directory), filename, hashes: inlineScriptHashes(html) });
    }
  }
  if (!documents.some(document => document.route === '/')) throw new Error('No static homepage found; refusing incomplete CSP build');

  // This site has no runtime-generated HTML/ISR. Such pages would need a nonce
  // or their own policy. Fail rather than ship stale hashes if that changes.
  for (const [route, record] of Object.entries(prerender.routes)) {
    if (record.initialRevalidateSeconds !== false && documents.some(document => document.route === route)) {
      throw new Error(`ISR HTML is incompatible with build-time CSP hashes: ${route}`);
    }
  }
  for (const [route, record] of Object.entries(prerender.dynamicRoutes ?? {})) {
    if (record.fallback !== false) throw new Error(`Runtime fallback HTML needs a nonce strategy before deployment: ${route}`);
  }
  const fallbackHashes = [...new Set(documents.filter(document => errorRoutes.has(document.route)).flatMap(document => document.hashes))].sort();
  if (Buffer.byteLength(contentSecurityPolicy(fallbackHashes)) > 12 * 1024) throw new Error('Static error-page CSP exceeds conservative header budget');
  try {
    const appPaths = JSON.parse(await fs.readFile(path.join(app, '../app-paths-manifest.json'), 'utf8'));
    for (const key of Object.keys(appPaths)) {
      if (!key.endsWith('/page') || key.includes('[') || key.startsWith('/_')) continue;
      const route = key.slice(0, -5) || '/';
      if (!documents.some(document => document.route === route)) throw new Error(`Non-static HTML needs a nonce strategy before deployment: ${route}`);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const marker = { key: HEADER_MARKER, value: '1' };
  const existing = manifest.headers.filter(rule => !rule.headers?.some(header => header.key.toLowerCase() === HEADER_MARKER));
  // Replace the configured baseline wildcard policy with the same policy plus
  // known static error-page hashes. Other configured headers are untouched.
  for (const rule of existing) {
    if (rule.source === '/:path*') {
      const csp = rule.headers.find(header => header.key.toLowerCase() === 'content-security-policy');
      if (csp) csp.value = contentSecurityPolicy(fallbackHashes);
    }
  }
  const report = [];
  for (const document of documents) {
    const policyHashes = hashesForPolicy(document, fallbackHashes);
    const policy = contentSecurityPolicy(policyHashes);
    const bytes = Buffer.byteLength(policy, 'utf8');
    if (bytes > 12 * 1024) throw new Error(`CSP exceeds conservative 12 KiB header budget: ${document.route} (${bytes} bytes)`);
    existing.push({
      source: document.route,
      regex: regexForRoute(document.route),
      headers: [{ key: 'Content-Security-Policy', value: policy }, marker],
    });
    report.push({ route: document.route, scriptHashes: policyHashes.length, documentScriptHashes: document.hashes.length, policyBytes: bytes });
  }
  if (existing.length > 950) throw new Error('CSP header-route budget exceeded; review hosting limits before deploying');
  manifest.headers = existing;
  await fs.writeFile(manifestFile, JSON.stringify(manifest));
  // Newer Vercel adapters can emit Build Output API artifacts inside .next and
  // consume those instead of routes-manifest. Apply the same headers there if
  // that output exists; unsupported output schemas stop the build.
  const outputConfigPath = path.join(build, 'output/config.json');
  let buildOutputPatched = false;
  try {
    const config = JSON.parse(await fs.readFile(outputConfigPath, 'utf8'));
    if (config.version !== 3 || !Array.isArray(config.routes)) throw new Error('Unsupported Vercel build-output routing config');
    const otherRoutes = config.routes.filter(rule => !Object.keys(rule.headers ?? {}).some(key => key.toLowerCase() === HEADER_MARKER));
    // Remove the known pre-hash baseline CSP wherever the adapter placed it;
    // its replacement below has identical resource constraints plus hashes.
    for (const rule of otherRoutes) {
      if (!rule.headers) continue;
      for (const key of Object.keys(rule.headers)) {
        if (key.toLowerCase() === 'content-security-policy') {
          if (rule.headers[key] !== contentSecurityPolicy()) throw new Error('Unexpected adapter CSP policy; review rather than replace it');
          delete rule.headers[key];
        }
      }
    }
    const baseHeaders = Object.fromEntries(browserHeaders().map(header => [header.key, header.value]));
    baseHeaders['Content-Security-Policy'] = contentSecurityPolicy(fallbackHashes);
    baseHeaders[HEADER_MARKER] = '1';
    const policyRoutes = [{ src: '^/.*$', headers: baseHeaders, continue: true }, ...documents.map(document => ({
      src: regexForRoute(document.route),
      headers: { 'Content-Security-Policy': contentSecurityPolicy(hashesForPolicy(document, fallbackHashes)), [HEADER_MARKER]: '1' },
      continue: true,
    }))];
    config.routes = [...policyRoutes, ...otherRoutes];
    await fs.writeFile(outputConfigPath, JSON.stringify(config));
    buildOutputPatched = true;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const output = { generatedAt: new Date().toISOString(), nextVersion: JSON.parse(await fs.readFile(path.join(root, 'node_modules/next/package.json'), 'utf8')).version, documentCount: documents.length, maximumPolicyBytes: Math.max(...report.map(row => row.policyBytes)), buildOutputPatched, routes: report };
  await fs.writeFile(path.join(build, 'security-headers-report.json'), JSON.stringify(output, null, 2) + '\n');
  console.log(`Static CSP installed for ${documents.length} HTML routes; largest policy ${output.maximumPolicyBytes} bytes.`);
  return output;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const action = process.argv.includes('--verify') ? verifyBuiltSecurityHeaders : installSecurityHeaders;
  action().catch(error => { console.error(error); process.exitCode = 1; });
}
