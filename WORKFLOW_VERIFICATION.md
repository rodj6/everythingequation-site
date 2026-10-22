# Workflow verification record

Inspected and modified 22 October 2026. Source preparation only; no GitHub repository settings or remote workflow runs were changed.

## Source changes

| Before | After |
| --- | --- |
| checkout/setup-node v3 by mutable major tag | Current official releases pinned to verified full commit SHAs |
| Node 20 | Node 24 LTS |
| `npm install` | `npm ci` using the reviewed lockfile |
| No explicit token permissions | Read-only default; only the separate metadata-proposal job has contents-write and PR-write |
| Refresh then direct commit/push to current branch | Read-only refresh/build/typecheck job; same-run JSON artifact; cache-only PR from a unique automation branch |
| No repository CI workflow | `Website CI` on PR, main push and manual dispatch |
| Unbounded sync requests and successful empty refresh on total upstream failure | 15-second request timeout; zero-success refresh fails and preserves existing cache |

Credentials are not persisted by checkout. The publishing token is passed only to the proposal step; installation/build never receive that token and occur in a separate read-only job. The proposal helper uses argument-array subprocesses and a body file, never inserts metadata text into a shell program, refuses a dirty checkout, and stages only the fixed cache path. It neither force-pushes nor merges. Existing pending metadata PRs are kept for human review.

## Release-pin evidence

Each release and GitHub API `git/ref/tags/...` was fetched on 22 October 2026; each ref resolved directly to a commit in the corresponding official `actions` repository.

| Action | Release | Verified commit |
| --- | --- | --- |
| actions/checkout | [v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1) | `3d3c42e5aac5ba805825da76410c181273ba90b1` |
| actions/setup-node | [v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0) | `949feb2413d6458794dcd2491c4babbbce0c15c1` |
| actions/upload-artifact | [v7.0.2](https://github.com/actions/upload-artifact/releases/tag/v7.0.2) | `cf430e030ddbb5b0abf93d22962f4752f3646cd9` |
| actions/download-artifact | [v8.0.2](https://github.com/actions/download-artifact/releases/tag/v8.0.2) | `9000827ccba6bdab643e8b6fd33ac0654aef8333` |

The exact setup-node action manifest was also fetched from the pinned revision to check the `package-manager-cache` input. Automatic package-manager caching is disabled in these workflows to avoid sharing cache state between trust contexts.

## Checks actually executed locally

- Both workflow files parsed successfully as YAML.
- Every embedded `run` step passed `bash -n` (5 CI steps and 9 sync steps at this check).
- `node --check scripts/propose-zenodo-cache.mjs` passed.
- `node --check scripts/sync-zenodo.mjs` passed.
- `node scripts/verify-zenodo-proposal.mjs` passed all four checks in an isolated temporary Git repository. In that test, the proposal helper's dry-run mode staged a representative JSON candidate containing a controlled `<script>` string as data. The only staged file was `.cache/zenodo.json`. No `gh`, network call or push was performed.
- The same helper accepted an identical candidate with no change/proposal, rejected a non-object JSON candidate, and refused unrelated dirty-checkout content. All four fixture checks passed.

The complete website install, build, typecheck and metadata-rendering results are recorded in the package's main verification report. This record does not claim that those commands were executed inside GitHub Actions.

## Remote checks still required

The workflows have not been run in the actual repository. Verify action execution, runner compatibility, artifact transfer, effective organization/repository permissions, PR creation, workflow approval, required-check contexts and main-branch enforcement after the owner applies the package. GitHub's current PR-event exception requires human approval for GITHUB_TOKEN-created PR workflow runs; a token-created branch push does not itself guarantee CI. See `GITHUB_WORKFLOW_SETUP.md` for the first-run path and fallback without broad credentials.

No ruleset, token setting, dependency-notification setting, account control, secret, or Vercel deployment was changed. SHA pinning reduces mutable-reference risk but does not establish that action internals or all supply-chain dependencies are flawless.
