/** Exercise the metadata proposal's local data/commit boundary in a disposable
 * Git repository. No remote is configured, and only --dry-run is invoked.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync, spawnSync} from 'node:child_process';

const helper = fileURLToPath(new URL('./propose-zenodo-cache.mjs', import.meta.url));
const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'zenodo-proposal-check-'));
const checkout = path.join(fixture, 'checkout');
const candidate = path.join(fixture, 'zenodo.json');
fs.mkdirSync(checkout);
const git = (...args) => execFileSync('git', args, {cwd: checkout, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}).trim();
const propose = () => spawnSync(process.execPath, [helper, '--dry-run'], {
  cwd: checkout, encoding: 'utf8', env: {...process.env, CANDIDATE_FILE: candidate},
});
try {
  git('init', '-q', '-b', 'main');
  git('config', 'user.name', 'Local verification');
  git('config', 'user.email', 'verification@example.invalid');
  fs.writeFileSync(path.join(checkout, 'README.md'), 'Disposable fixture\n');
  git('add', 'README.md');
  git('commit', '-qm', 'fixture');

  fs.writeFileSync(candidate, JSON.stringify({'example-paper': {title: 'Fixture', description: '<script>controlled local fixture</script>'}}));
  let result = propose();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(git('diff', '--cached', '--name-only'), '.cache/zenodo.json');
  assert.equal(git('rev-list', '--count', 'HEAD'), '1');
  console.log('PASS: only the fixed metadata path is staged, with no commit or remote action');

  git('commit', '-qm', 'metadata fixture');
  result = propose();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /No metadata changes/);
  assert.equal(git('status', '--porcelain'), '');
  console.log('PASS: identical metadata leaves the checkout unchanged');

  fs.writeFileSync(candidate, '[]');
  result = propose();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Expected metadata object/);
  console.log('PASS: non-object metadata rejected');

  fs.writeFileSync(candidate, '{"example-paper":{}}');
  fs.writeFileSync(path.join(checkout, 'README.md'), 'Unexpected unrelated edit\n');
  result = propose();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /dirty checkout/);
  assert.equal(git('diff', '--cached', '--name-only'), '');
  console.log('PASS: unrelated dirty-checkout content is never staged');
} finally {
  fs.rmSync(fixture, {recursive: true, force: true});
}
