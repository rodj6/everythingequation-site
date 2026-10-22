/** Verify actual production GET responses against their CSP, not just config. */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { inlineScriptHashes } from './security-headers.mjs';

const base = process.argv[2] ?? 'http://localhost:3000';
const report = JSON.parse(await fs.readFile('.next/security-headers-report.json', 'utf8'));
const routes = [...new Set([...report.routes.map(row => row.route).filter(route => !route.startsWith('/_')), '/__security_missing_route__', '/sitemap.xml', '/feed.xml', '/llms.txt', '/graph.json', '/research'])];
const results = [];
const queue = [...routes];

async function verifyRoute(route) {
  const response = await fetch(new URL(route, base), { redirect: 'manual' });
  const html = await response.text();
  // /500 is a generated internal error document, not a public 500-status URL.
  const expectedStatus = ['/__security_missing_route__', '/404', '/500'].includes(route) ? 404 : route === '/research' ? 308 : 200;
  assert.equal(response.status, expectedStatus, `${route}: unexpected HTTP status`);
  const policy = response.headers.get('content-security-policy');
  if (route === '/research') {
    // Next handles this fixed redirect before application header matching. It
    // serves the literal local destination, with no executable document.
    assert.equal(response.headers.get('location'), '/research-map');
    assert.equal(html.trim(), '/research-map');
    assert.equal(inlineScriptHashes(html).length, 0);
    return { route, status: response.status, fixedLocalRedirect: '/research-map', documentPolicyApplicable: false, policyPresent: Boolean(policy), inlineScriptsCovered: 0 };
  }
  assert.ok(policy, `${route}: missing enforced CSP`);
  assert.equal(response.headers.get('x-frame-options'), 'DENY', `${route}: framing restriction`);
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff', `${route}: nosniff`);
  assert.equal(response.headers.get('referrer-policy'), 'strict-origin-when-cross-origin', `${route}: referrer`);
  assert.match(response.headers.get('permissions-policy') ?? '', /xr-spatial-tracking=\(\)/, `${route}: permissions`);
  const scripts = policy.split(';').find(value => value.trim().startsWith('script-src '));
  assert.ok(scripts, `${route}: script policy missing`);
  assert.doesNotMatch(scripts, /unsafe-inline|unsafe-eval/, `${route}: executable-script policy relaxed`);
  assert.match(policy, /script-src-attr 'none'/, `${route}: script attributes allowed`);
  assert.match(policy, /frame-ancestors 'none'/, `${route}: embedding allowed`);
  if (response.headers.get('content-type')?.includes('text/html')) {
    for (const hash of inlineScriptHashes(html)) assert.ok(scripts.includes(hash), `${route}: served inline script missing from CSP: ${hash}`);
  }
  return { route, status: response.status, policyBytes: Buffer.byteLength(policy), inlineScriptsCovered: response.headers.get('content-type')?.includes('text/html') ? inlineScriptHashes(html).length : null };
}

async function worker() {
  while (queue.length) {
    const route = queue.shift();
    try { results.push({ passed: true, ...await verifyRoute(route) }); }
    catch (error) { results.push({ route, passed: false, error: error.message }); }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
results.sort((a, b) => a.route.localeCompare(b.route));
await fs.mkdir('tmp', { recursive: true });
const failures = results.filter(row => !row.passed);
await fs.writeFile(path.join('tmp', 'security-header-verification.json'), JSON.stringify({ checkedAt: new Date().toISOString(), base, checked: results.length, failures: failures.length, results }, null, 2));
console.log(`Served security headers: ${results.length - failures.length}/${results.length} routes passed.`);
for (const failure of failures) console.error(`${failure.route}: ${failure.error}`);
if (failures.length) process.exitCode = 1;
