/** Propose data from the same run's read-only preparation job.
 * No upstream text is interpolated into commands. Requires GitHub's ephemeral
 * GH_TOKEN in the calling workflow, never a persistent user credential.
 * --dry-run validates/stages data locally and never calls gh or pushes.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const dryRun = process.argv.includes('--dry-run');
const run = (program, args, options = {}) => execFileSync(program, args, {
  encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...options,
}).trim();

function main() {
  const candidate = process.env.CANDIDATE_FILE;
  if (!candidate) throw new Error('CANDIDATE_FILE is required');
  const bytes = fs.readFileSync(candidate);
  if (bytes.length > 5 * 1024 * 1024) throw new Error('Metadata candidate exceeds 5 MiB');
  const data = JSON.parse(bytes.toString('utf8'));
  if (!data || Array.isArray(data) || typeof data !== 'object') throw new Error('Expected metadata object');
  for (const [slug, value] of Object.entries(data)) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(slug) || !value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error('Invalid metadata record');
    }
  }
  if (run('git', ['status', '--porcelain'])) throw new Error('Refusing a dirty checkout');

  if (!dryRun) {
    const repo = process.env.GH_REPO || '';
    const base = process.env.BASE_BRANCH || '';
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) throw new Error('Invalid GH_REPO');
    run('git', ['check-ref-format', '--branch', base]);
    const pages = JSON.parse(run('gh', ['api', '--paginate', '--slurp',
      `repos/${repo}/pulls?state=open&base=${encodeURIComponent(base)}&per_page=100`]));
    const existing = pages.flat().find(pr => pr.head?.repo?.full_name === repo
      && pr.head?.ref?.startsWith('automation/zenodo-cache-'));
    if (existing) {
      console.log(`Metadata proposal #${existing.number} remains open; review it before refreshing again.`);
      return;
    }
  }

  fs.mkdirSync('.cache', {recursive: true});
  fs.writeFileSync('.cache/zenodo.json', bytes);
  run('git', ['add', '--', '.cache/zenodo.json']);
  const changed = run('git', ['diff', '--cached', '--name-only']);
  if (!changed) {
    console.log('No metadata changes; no pull request needed.');
    return;
  }
  if (changed !== '.cache/zenodo.json') throw new Error('Refusing to commit anything except the metadata cache');
  if (dryRun) {
    console.log('Dry run passed: staged only .cache/zenodo.json; no remote operation performed.');
    return;
  }

  const runId = process.env.GITHUB_RUN_ID || '';
  const attempt = process.env.GITHUB_RUN_ATTEMPT || '';
  if (!/^\d+$/.test(runId) || !/^\d+$/.test(attempt)) throw new Error('Invalid workflow run identity');
  const branch = `automation/zenodo-cache-${runId}-${attempt}`;
  run('git', ['switch', '-c', branch]);
  run('git', ['config', 'user.name', 'github-actions[bot]']);
  run('git', ['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
  run('git', ['commit', '-m', 'chore: refresh Zenodo metadata']);
  // Writes only an ephemeral gh credential-helper configuration, not a token.
  run('gh', ['auth', 'setup-git', '--hostname', 'github.com']);
  run('git', ['push', '--set-upstream', 'origin', branch]);

  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'zenodo-pr-'));
  const bodyFile = path.join(temp, 'body.md');
  try {
    fs.writeFileSync(bodyFile, [
      'Refresh the public Zenodo metadata cache. Only `.cache/zenodo.json` is changed.',
      '',
      'The preparation job installed the reviewed lockfile, built the candidate with cache-only reads and passed TypeScript checking.',
      '',
      'Review the metadata diff. Approve the Website CI workflow run on this PR if GitHub requests approval, and require its checks before merging. No automatic merge or main-branch bypass is configured.',
      '',
      'If the default branch has advanced, bring this PR up to date through the normal reviewed process and rerun CI.',
    ].join('\n'));
    const url = run('gh', ['pr', 'create', '--repo', process.env.GH_REPO,
      '--base', process.env.BASE_BRANCH, '--head', branch,
      '--title', 'chore: refresh Zenodo metadata', '--body-file', bodyFile]);
    console.log(url);
  } finally {
    fs.rmSync(temp, {recursive: true, force: true});
  }
}

try { main(); } catch (error) {
  // Do not echo subprocess output or environment values containing credentials.
  console.error(`Metadata proposal failed: ${error instanceof Error ? error.message.split('\n')[0] : 'unknown error'}`);
  process.exitCode = 1;
}
