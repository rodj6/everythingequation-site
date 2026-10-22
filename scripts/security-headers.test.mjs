import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { inlineScriptHashes, installSecurityHeaders, verifyBuiltSecurityHeaders } from './security-headers.mjs';
import { browserHeaders, contentSecurityPolicy, HEADER_MARKER } from './security-policy.mjs';

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
    // An adapter config is authoritative even while the legacy files remain.
    // Model its actual static artifacts instead of relying on the old fixture.
    await fs.mkdir(path.join(root, '.next/output/static/notes'), { recursive: true });
    for (const filename of ['index.html', 'notes/a.b.html', '_not-found.html']) {
      await fs.copyFile(path.join(root, '.next/server/app', filename), path.join(root, '.next/output/static', filename));
    }
    await fs.writeFile(path.join(root, '.next/output/config.json'), JSON.stringify({ version: 3, overrides: { 'index.html': { path: '', contentType: 'text/html' }, 'notes/a.b.html': { path: 'notes/a.b', contentType: 'text/html' }, '_not-found.html': { path: '404', contentType: 'text/html' } }, routes: [{ src: '^/.*$', headers: { 'Content-Security-Policy': contentSecurityPolicy(), 'x-other': 'preserved' }, continue: true }, { handle: 'filesystem' }] }));
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


async function jsonAt(root, relative) {
  return JSON.parse(await fs.readFile(path.join(root, relative), 'utf8'));
}

async function writeJsonAt(root, relative, value) {
  const filename = path.join(root, relative);
  await fs.mkdir(path.dirname(filename), { recursive: true });
  await fs.writeFile(filename, JSON.stringify(value));
}

const adapterHtml = {
  home: '<html><script>self.__next_f.push([1,"adapter-home"]);</script></html>',
  note: '<html><script>self.__next_f.push([1,"adapter-note"]);</script></html>',
  missing: '<html><script>self.__next_f.push([1,"adapter-404"]);</script></html>',
};

async function writePrerender(root, basename, html, overrides = {}) {
  const directory = path.join(root, '.next/output/functions', path.dirname(basename));
  await fs.mkdir(directory, { recursive: true });
  const fallback = `${path.basename(basename)}.prerender-fallback.html`;
  await fs.writeFile(path.join(directory, fallback), html);
  await writeJsonAt(root, `.next/output/functions/${basename}.prerender-config.json`, {
    group: 1,
    expiration: false,
    initialHeaders: { 'content-type': 'text/html; charset=utf-8' },
    fallback,
    ...overrides,
  });
}

async function adapterFixture() {
  const root = await fixture();
  // The production adapter moves these files before npm's postbuild executes.
  await fs.rm(path.join(root, '.next/server/app'), { recursive: true });
  await fs.rm(path.join(root, '.next/server/pages'), { recursive: true, force: true });
  await fs.mkdir(path.join(root, '.next/output/static/errors'), { recursive: true });
  await fs.writeFile(path.join(root, '.next/output/static/errors/not-found.html'), adapterHtml.missing);
  await writePrerender(root, 'index', adapterHtml.home, { sourcePath: '/' });
  await writePrerender(root, 'notes/a.b', adapterHtml.note, { sourcePath: '/notes/[slug]' });
  await writeJsonAt(root, '.next/output/config.json', {
    version: 3,
    overrides: { 'errors/not-found.html': { path: '404', contentType: 'text/html' } },
    routes: [
      { src: '^/.*$', headers: { 'Content-Security-Policy': contentSecurityPolicy(), 'x-other': 'preserved' }, continue: true },
      { handle: 'filesystem' },
      { handle: 'error' },
      { src: '/.*', dest: '/404', status: 404 },
    ],
  });
  return root;
}

function adapterPolicy(config, route) {
  const matching = config.routes.filter(rule => rule.src && new RegExp(rule.src).test(route) && rule.headers?.[HEADER_MARKER]);
  return matching.at(-1)?.headers['Content-Security-Policy'];
}

test('adapter postbuild covers static and prerender fallbacks with legacy HTML directories absent', async () => {
  const root = await adapterFixture();
  try {
    await assert.rejects(fs.access(path.join(root, '.next/server/app')));
    await assert.rejects(fs.access(path.join(root, '.next/server/pages')));
    const report = await installSecurityHeaders(root);
    assert.equal(report.documentCount, 3);
    assert.equal(report.buildOutputPatched, true);
    const config = await jsonAt(root, '.next/output/config.json');
    const homePolicy = adapterPolicy(config, '/');
    const notePolicy = adapterPolicy(config, '/notes/a.b');
    for (const hash of inlineScriptHashes(adapterHtml.home)) assert.ok(homePolicy?.includes(hash));
    for (const hash of inlineScriptHashes(adapterHtml.note)) assert.ok(notePolicy?.includes(hash));
    assert.ok(!adapterPolicy(config, '/notes/axb')?.includes(inlineScriptHashes(adapterHtml.note)[0]));
    assert.ok(config.routes.some(rule => rule.headers?.['x-other'] === 'preserved'));
    // sourcePath is the dynamic template, not this prerender's public route.
    assert.ok(!report.routes.some(row => row.route.includes('[')));
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
    const before = await fs.readFile(path.join(root, '.next/output/config.json'), 'utf8');
    await verifyBuiltSecurityHeaders(root);
    assert.equal(await fs.readFile(path.join(root, '.next/output/config.json'), 'utf8'), before);
    await installSecurityHeaders(root);
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter static overrides map an empty public path to the homepage', async () => {
  const root = await adapterFixture();
  try {
    await fs.rm(path.join(root, '.next/output/functions/index.prerender-config.json'));
    await fs.rm(path.join(root, '.next/output/functions/index.prerender-fallback.html'));
    await fs.mkdir(path.join(root, '.next/output/static/storage'), { recursive: true });
    await fs.writeFile(path.join(root, '.next/output/static/storage/home-document.html'), adapterHtml.home);
    const config = await jsonAt(root, '.next/output/config.json');
    config.overrides['storage/home-document.html'] = { path: '', contentType: 'text/html' };
    await writeJsonAt(root, '.next/output/config.json', config);
    const report = await installSecurityHeaders(root);
    assert.equal(report.documentCount, 3);
    const final = await jsonAt(root, '.next/output/config.json');
    for (const hash of inlineScriptHashes(adapterHtml.home)) assert.ok(adapterPolicy(final, '/')?.includes(hash));
    assert.ok(!report.routes.some(row => row.route === '/storage/home-document'));
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('renamed adapter 404 template supplies fallback hashes for unknown routes and error responses', async () => {
  const root = await adapterFixture();
  try {
    await installSecurityHeaders(root);
    const config = await jsonAt(root, '.next/output/config.json');
    const unknown = adapterPolicy(config, '/not-an-existing-route');
    const missing = adapterPolicy(config, '/404');
    for (const hash of inlineScriptHashes(adapterHtml.missing)) {
      assert.ok(unknown?.includes(hash));
      assert.ok(missing?.includes(hash));
    }
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter verification rejects fallback or exact-route CSP tampering and changed rendered HTML', async () => {
  for (const change of ['fallback', 'route', 'script']) {
    const root = await adapterFixture();
    try {
      await installSecurityHeaders(root);
      if (change === 'script') {
        await fs.writeFile(path.join(root, '.next/output/functions/notes/a.b.prerender-fallback.html'), '<script>changed()</script>');
      } else {
        const config = await jsonAt(root, '.next/output/config.json');
        const generated = config.routes.filter(rule => rule.headers?.[HEADER_MARKER]);
        const target = change === 'fallback'
          ? generated.find(rule => new RegExp(rule.src).test('/not-an-existing-route'))
          : generated.find(rule => new RegExp(rule.src).test('/notes/a.b') && !new RegExp(rule.src).test('/not-an-existing-route'));
        assert.ok(target, `fixture has ${change} rule`);
        target.headers['Content-Security-Policy'] = contentSecurityPolicy();
        await writeJsonAt(root, '.next/output/config.json', config);
      }
      await assert.rejects(verifyBuiltSecurityHeaders(root), /CSP|policy|hash|stale/i);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter discovery refuses duplicate public routes and unsafe override or fallback paths', async () => {
  for (const change of ['duplicate', 'override-traversal', 'fallback-traversal']) {
    const root = await adapterFixture();
    try {
      if (change === 'fallback-traversal') {
        const metadata = await jsonAt(root, '.next/output/functions/index.prerender-config.json');
        metadata.fallback = '../outside.html';
        await writeJsonAt(root, '.next/output/functions/index.prerender-config.json', metadata);
      } else {
        const config = await jsonAt(root, '.next/output/config.json');
        if (change === 'duplicate') {
          await fs.writeFile(path.join(root, '.next/output/static/duplicate.html'), adapterHtml.note);
          config.overrides['duplicate.html'] = { path: '', contentType: 'text/html' };
        } else config.overrides['errors/not-found.html'].path = '../outside';
        await writeJsonAt(root, '.next/output/config.json', config);
      }
      await assert.rejects(installSecurityHeaders(root), /duplicate|collision|ambiguous|path|travers|unsafe/i);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter discovery fails closed for mutable prerenders, absent fallbacks and absent homepage', async () => {
  for (const change of ['isr', 'unset-expiration', 'partial-fallback', 'chained-fallback', 'missing-fallback-file', 'missing-fallback-field', 'missing-homepage']) {
    const root = await adapterFixture();
    try {
      const metadataPath = '.next/output/functions/index.prerender-config.json';
      if (change === 'missing-homepage') {
        await fs.rm(path.join(root, metadataPath));
        await fs.rm(path.join(root, '.next/output/functions/index.prerender-fallback.html'));
      } else if (change === 'missing-fallback-file') {
        await fs.rm(path.join(root, '.next/output/functions/index.prerender-fallback.html'));
      } else {
        const metadata = await jsonAt(root, metadataPath);
        if (change === 'isr') metadata.expiration = 60;
        if (change === 'unset-expiration') delete metadata.expiration;
        if (change === 'partial-fallback') metadata.partialFallback = true;
        if (change === 'chained-fallback') metadata.chain = 'other';
        if (change === 'missing-fallback-field') delete metadata.fallback;
        await writeJsonAt(root, metadataPath, metadata);
      }
      await assert.rejects(installSecurityHeaders(root), /ISR|mutable|expiration|fallback|homepage|static|ENOENT/i);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter output remains authoritative over stale legacy HTML and error templates', async () => {
  const root = await adapterFixture();
  try {
    await fs.mkdir(path.join(root, '.next/server/app'), { recursive: true });
    await fs.mkdir(path.join(root, '.next/server/pages'), { recursive: true });
    const stale = '<script>staleLegacyArtifact()</script>';
    await fs.writeFile(path.join(root, '.next/server/app/index.html'), stale);
    await fs.writeFile(path.join(root, '.next/server/pages/500.html'), stale);
    const report = await installSecurityHeaders(root);
    assert.equal(report.documentCount, 3);
    const config = await jsonAt(root, '.next/output/config.json');
    const staleHash = inlineScriptHashes(stale)[0];
    assert.ok(!config.routes.some(rule => Object.values(rule.headers ?? {}).some(value => typeof value === 'string' && value.includes(staleHash))));
    for (const hash of inlineScriptHashes(adapterHtml.home)) assert.ok(adapterPolicy(config, '/')?.includes(hash));
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter verification rejects a competing later CSP or reordered generated policy rules', async () => {
  for (const change of ['later-policy', 'reordered']) {
    const root = await adapterFixture();
    try {
      await installSecurityHeaders(root);
      const config = await jsonAt(root, '.next/output/config.json');
      if (change === 'later-policy') {
        config.routes.push({ src: '^/.*$', headers: { 'content-security-policy': contentSecurityPolicy() }, continue: true });
      } else {
        [config.routes[0], config.routes[1]] = [config.routes[1], config.routes[0]];
      }
      await writeJsonAt(root, '.next/output/config.json', config);
      await assert.rejects(verifyBuiltSecurityHeaders(root), /CSP|policy|policies|reordered/i);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter verification checks the CSP cached in each prerender response initialHeaders', async () => {
  const root = await adapterFixture();
  try {
    await installSecurityHeaders(root);
    const relative = '.next/output/functions/notes/a.b.prerender-config.json';
    const metadata = await jsonAt(root, relative);
    for (const hash of inlineScriptHashes(adapterHtml.note)) assert.ok(metadata.initialHeaders['Content-Security-Policy'].includes(hash));
    metadata.initialHeaders['Content-Security-Policy'] = contentSecurityPolicy();
    await writeJsonAt(root, relative, metadata);
    await assert.rejects(verifyBuiltSecurityHeaders(root), /CSP|prerender|fallback/i);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter HTML prerender response headers must be a serializable header object', async () => {
  for (const initialHeaders of [[], null, { 'content-type': 'text/html', 'x-invalid': 42 }]) {
    const root = await adapterFixture();
    try {
      const relative = '.next/output/functions/index.prerender-config.json';
      const metadata = await jsonAt(root, relative);
      metadata.initialHeaders = initialHeaders;
      await writeJsonAt(root, relative, metadata);
      await assert.rejects(installSecurityHeaders(root));
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter rejects malformed per-file HTML overrides instead of guessing a public route', async () => {
  for (const override of [null, [], '404']) {
    const root = await adapterFixture();
    try {
      const config = await jsonAt(root, '.next/output/config.json');
      config.overrides['errors/not-found.html'] = override;
      await writeJsonAt(root, '.next/output/config.json', config);
      await assert.rejects(installSecurityHeaders(root), /Unsupported static HTML override/);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});

test('adapter routing budget failure leaves routing and cached-header inputs unchanged', async () => {
  const root = await adapterFixture();
  try {
    const config = await jsonAt(root, '.next/output/config.json');
    while (config.routes.length < 947) config.routes.push({ src: `^/fixture-${config.routes.length}$`, continue: true });
    await writeJsonAt(root, '.next/output/config.json', config);
    const paths = ['.next/routes-manifest.json', '.next/output/config.json', '.next/output/functions/index.prerender-config.json'];
    const before = await Promise.all(paths.map(relative => fs.readFile(path.join(root, relative), 'utf8')));
    await assert.rejects(installSecurityHeaders(root), /Vercel CSP routing budget/);
    const after = await Promise.all(paths.map(relative => fs.readFile(path.join(root, relative), 'utf8')));
    assert.deepEqual(after, before);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('local verification rejects an unmarked manifest CSP that could override generated hashes', async () => {
  const root = await fixture();
  try {
    await installSecurityHeaders(root);
    const manifest = await jsonAt(root, '.next/routes-manifest.json');
    manifest.headers.push({ source: '/', regex: '^/$', headers: [{ key: 'content-security-policy', value: contentSecurityPolicy() }] });
    await writeJsonAt(root, '.next/routes-manifest.json', manifest);
    await assert.rejects(verifyBuiltSecurityHeaders(root), /Competing or duplicate manifest CSP/);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter rebuild rehashes previously generated cached CSP when immutable fallback HTML changes', async () => {
  const root = await adapterFixture();
  try {
    await installSecurityHeaders(root);
    const oldHash = inlineScriptHashes(adapterHtml.home)[0];
    const rebuilt = '<html><script>self.__next_f.push([1,"adapter-home-rebuilt"]);</script></html>';
    const newHash = inlineScriptHashes(rebuilt)[0];
    const relative = '.next/output/functions/index.prerender-config.json';
    // Vercel rewrites the rendered fallback, while writeIfNotExists retains the
    // response metadata from the preceding successful adapter build.
    await fs.writeFile(path.join(root, '.next/output/functions/index.prerender-fallback.html'), rebuilt);
    const retained = await jsonAt(root, relative);
    assert.ok(retained.initialHeaders['Content-Security-Policy'].includes(oldHash));
    assert.equal(retained.initialHeaders[HEADER_MARKER], '1');
    await assert.rejects(verifyBuiltSecurityHeaders(root), /CSP|policy|hash|stale/i);
    await installSecurityHeaders(root);
    const final = await jsonAt(root, '.next/output/config.json');
    const metadata = await jsonAt(root, relative);
    for (const policy of [adapterPolicy(final, '/'), metadata.initialHeaders['Content-Security-Policy']]) {
      assert.ok(policy.includes(newHash));
      assert.ok(!policy.includes(oldHash));
      assert.doesNotMatch(policy.split(';').find(value => value.trim().startsWith('script-src ')), /unsafe-/);
    }
    assert.equal(await verifyBuiltSecurityHeaders(root), 3);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('adapter rebuild refuses a marked relaxed cached policy or an unmarked stale hash policy', async () => {
  for (const change of ['marked-unsafe-inline', 'unmarked-stale']) {
    const root = await adapterFixture();
    try {
      await installSecurityHeaders(root);
      const relative = '.next/output/functions/index.prerender-config.json';
      const metadata = await jsonAt(root, relative);
      if (change === 'marked-unsafe-inline') {
        metadata.initialHeaders['Content-Security-Policy'] = metadata.initialHeaders['Content-Security-Policy'].replace("script-src 'self'", "script-src 'self' 'unsafe-inline'");
        assert.equal(metadata.initialHeaders[HEADER_MARKER], '1');
      } else {
        delete metadata.initialHeaders[HEADER_MARKER];
        await fs.writeFile(path.join(root, '.next/output/functions/index.prerender-fallback.html'), '<script>changedWithoutGeneratedMarker()</script>');
      }
      await writeJsonAt(root, relative, metadata);
      await assert.rejects(installSecurityHeaders(root), /Unexpected prerender CSP|CSP|policy/i);
    } finally { await fs.rm(root, { recursive: true, force: true }); }
  }
});
