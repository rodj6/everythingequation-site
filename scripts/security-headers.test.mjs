import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { inlineScriptHashes, installSecurityHeaders, verifyBuiltSecurityHeaders } from './security-headers.mjs';
import { browserHeaders, contentSecurityPolicy } from './security-policy.mjs';

test('script hashes cover exact bytes, deduplicate and exclude external script bodies', () => {
  const source = 'self.__next_f.push([1,"a & b\\n"]);';
  const hash = `'sha256-${createHash('sha256').update(source).digest('base64')}'`;
  assert.deepEqual(inlineScriptHashes(`<html><script>${source}</script><script>${source}</script><script src="/bundle.js">ignored</script></html>`), [hash]);
  assert.notDeepEqual(inlineScriptHashes(`<script> ${source}</script>`), [hash]);
});

test('production policy prohibits arbitrary inline script and script attributes', () => {
  const production = contentSecurityPolicy();
  assert.match(production, /script-src 'self';/);
  assert.match(production, /script-src-attr 'none'/);
  assert.doesNotMatch(production.split(';').find(value => value.trim().startsWith('script-src ')), /unsafe-/);
  assert.match(production, /frame-ancestors 'none'/);
  assert.throws(() => contentSecurityPolicy(["'unsafe-inline'"]));
  assert.match(contentSecurityPolicy([], { development: true }), /unsafe-eval/);
});

async function fixture() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'shadow-csp-'));
  await fs.mkdir(path.join(root, '.next/server/app/notes'), { recursive: true });
  await fs.mkdir(path.join(root, 'node_modules/next'), { recursive: true });
  await fs.writeFile(path.join(root, 'node_modules/next/package.json'), JSON.stringify({ version: 'fixture' }));
  await fs.writeFile(path.join(root, '.next/routes-manifest.json'), JSON.stringify({ version: 3, headers: [{ source: '/:path*', regex: '^/.*$', headers: browserHeaders() }] }));
  await fs.writeFile(path.join(root, '.next/prerender-manifest.json'), JSON.stringify({ routes: { '/': { initialRevalidateSeconds: false }, '/notes/a.b': { initialRevalidateSeconds: false } } }));
  await fs.writeFile(path.join(root, '.next/server/app/index.html'), '<script>self.__next_f=[];</script>');
  await fs.writeFile(path.join(root, '.next/server/app/notes/a.b.html'), '<script>self.__next_f.push([1,"page"]);</script>');
  await fs.writeFile(path.join(root, '.next/server/app/_not-found.html'), '<script>self.__next_f.push([1,"404"]);</script>');
  return root;
}

test('postbuild creates route policies, escapes route regex and is idempotent', async () => {
  const root = await fixture();
  try {
    const report = await installSecurityHeaders(root);
    assert.equal(report.documentCount, 3);
    let manifest = JSON.parse(await fs.readFile(path.join(root, '.next/routes-manifest.json'), 'utf8'));
    const route = manifest.headers.find(rule => rule.source === '/notes/a.b');
    assert.ok(new RegExp(route.regex).test('/notes/a.b'));
    assert.ok(!new RegExp(route.regex).test('/notes/axb'));
    assert.match(route.headers[0].value, /sha256-/);
    const first = manifest.headers.length;
    await installSecurityHeaders(root);
    manifest = JSON.parse(await fs.readFile(path.join(root, '.next/routes-manifest.json'), 'utf8'));
    assert.equal(manifest.headers.length, first);
    assert.match(manifest.headers[0].headers[0].value, /sha256-/);
    const snapshot = await fs.readFile(path.join(root, '.next/routes-manifest.json'), 'utf8');
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
    assert.equal(await fs.readFile(path.join(root, '.next/routes-manifest.json'), 'utf8'), snapshot);
    await fs.writeFile(path.join(root, '.next/server/app/index.html'), '<script>changedAfterBuild()</script>');
    await assert.rejects(verifyBuiltSecurityHeaders(root), /stale built CSP/);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('postbuild also protects generated Vercel Build Output API routes', async () => {
  const root = await fixture();
  try {
    await fs.mkdir(path.join(root, '.next/output'), { recursive: true });
    await fs.writeFile(path.join(root, '.next/output/config.json'), JSON.stringify({ version: 3, routes: [{ src: '^/.*$', headers: { 'Content-Security-Policy': contentSecurityPolicy(), 'x-other': 'preserved' }, continue: true }, { handle: 'filesystem' }] }));
    const report = await installSecurityHeaders(root);
    assert.equal(report.buildOutputPatched, true);
    let config = JSON.parse(await fs.readFile(path.join(root, '.next/output/config.json'), 'utf8'));
    assert.ok(config.routes.some(rule => rule.headers?.['x-other'] === 'preserved'));
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
    await installSecurityHeaders(root);
    config = JSON.parse(await fs.readFile(path.join(root, '.next/output/config.json'), 'utf8'));
    assert.equal(config.routes.length, 6);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('postbuild rejects ISR HTML instead of shipping stale allowlists', async () => {
  const root = await fixture();
  try {
    await fs.writeFile(path.join(root, '.next/prerender-manifest.json'), JSON.stringify({ routes: { '/': { initialRevalidateSeconds: 60 } } }));
    await assert.rejects(installSecurityHeaders(root), /ISR HTML/);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('internal error URL policy also permits the 404 template actually served there', async () => {
  const root = await fixture();
  try {
    await fs.mkdir(path.join(root, '.next/server/pages'), { recursive: true });
    const errorHtml = '<script>self.__next_f.push([1,"500"]);</script>';
    await fs.writeFile(path.join(root, '.next/server/pages/500.html'), errorHtml);
    await installSecurityHeaders(root);
    const manifest = JSON.parse(await fs.readFile(path.join(root, '.next/routes-manifest.json'), 'utf8'));
    const errorRule = manifest.headers.find(rule => rule.source === '/500');
    const policy = errorRule.headers.find(header => header.key === 'Content-Security-Policy').value;
    const notFoundHtml = await fs.readFile(path.join(root, '.next/server/app/_not-found.html'), 'utf8');
    for (const hash of [...inlineScriptHashes(errorHtml), ...inlineScriptHashes(notFoundHtml)]) assert.ok(policy.includes(hash));
    assert.equal(await verifyBuiltSecurityHeaders(root), 4);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});
