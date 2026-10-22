# GitHub workflow setup and first-run checks

Prepared 22 October 2026. These are instructions for the repository owner; no remote setting, token, ruleset, notification subscription or workflow run was changed during preparation.

## What the supplied workflows do

- `Website CI` builds on pushes to `main`, pull requests targeting `main`, and a manual dispatch. Its `Build and typecheck` job uses Node 24, `npm ci`, cache-only publication metadata, the metadata-rendering verification and TypeScript checking. It has read-only repository permissions and does not persist checkout credentials.
- `Sync Zenodo metadata` still runs daily at 03:00 UTC and can be dispatched manually on the default branch. It checks out that trusted branch, refreshes metadata with bounded per-request timeouts, builds and checks the candidate with read-only permissions, and transfers only the resulting JSON artifact to a separate proposal job.
- The proposal job runs no package installation, build, conversion or fetched code. It stages only `.cache/zenodo.json`, creates a unique `automation/zenodo-cache-...` branch and opens a pull request. It does not push to `main`, force-push, approve, merge or enable auto-merge. A still-open metadata proposal is retained for review rather than overwritten or duplicated.
- The proposal job needs only `contents: write` and `pull-requests: write`. It uses GitHub's ephemeral, repository-scoped `GITHUB_TOKEN`; no PAT, App credential or persistent secret is required. The checkout steps set `persist-credentials: false`; `gh auth setup-git` configures a credential helper in the ephemeral hosted runner for the single push, rather than writing a token to the repository.

## Owner setup after applying and reviewing this repository

1. Check **Settings → Actions → General** and any organization/enterprise policies. Allow the four pinned GitHub-owned actions used here. Keep the default workflow token permissions read-only. The sync proposal job requests its two narrow write scopes explicitly; a more restrictive organization policy may still block them.
2. If you want automated PR creation, authorize the setting **Allow GitHub Actions to create and approve pull requests**. The UI combines these capabilities; this workflow creates PRs and never approves them. If policy forbids this setting, leave it forbidden. Refresh metadata locally and submit a normal reviewed PR instead; do not add broad credentials to bypass the policy.
3. Run `Website CI` on the intended branch and inspect the exact check name displayed in the repository. Configure a branch rule/ruleset for `main` requiring the displayed `Build and typecheck` check before merge, current branch checks as appropriate, and a pull-request process. Do not grant the automation a ruleset bypass.
4. Choose review requirements that match the actual reviewer arrangement. With an independent reviewer, require their approval and dismiss stale approvals after changes. A sole maintainer cannot approve their own authored PR; a policy requiring an unavailable second person will block those changes. Keep an explicit manual review/merge step for bot-authored metadata PRs and document the actual effective policy instead of claiming an unavailable approval exists.
5. Review organization-level/inherited rules as well as repository rules. Restrict force pushes and deletions on `main`, protect workflow changes and retain fork-workflow approval policies. These recommendations do not establish which controls are currently active.
6. Do not add secrets or write tokens to fork pull-request runs. The supplied CI uses `pull_request`, not `pull_request_target`, and no remote-publishing credential. Do not change the privileged sync job to check out an untrusted feature or fork branch.

## Test the complete metadata path once authorized

1. After the workflow files exist on the default branch, dispatch `Sync Zenodo metadata` there. A dispatch on a non-default branch intentionally skips preparation.
2. Confirm `prepare` uses the intended reviewed commit and a clean lockfile install, the refresh updates records, `verify:metadata`, the production build and TypeScript checks pass, and the uploaded artifact contains only `zenodo.json`. If no upstream record can be fetched, the sync fails without replacing the existing cache.
3. Confirm `propose` changes only `.cache/zenodo.json` and opens a PR from a unique automation branch to the real default branch. An unchanged candidate should produce no PR. An existing open metadata PR should be retained for review.
4. Inspect the diff for unexpected titles, descriptions, URLs or download metadata. An upstream metadata record remains untrusted input even when obtained from an expected service. Confirm the safe rendering boundary and normal local-summary behavior on the preview.
5. **Approve the CI workflow run if GitHub requests it.** Current GitHub documentation says PRs opened, synchronized or reopened using `GITHUB_TOKEN` create workflow runs in an approval-required state. A user with write access can select **Approve workflows to run** on the PR. Other token-generated event types, including the branch push, remain subject to recursion suppression. Do not assume the token-created push ran `Website CI` automatically.
6. If no runnable PR check appears, manually dispatch `Website CI` against the automation branch from the Actions UI, inspect the resulting run/commit/check, and confirm it satisfies the actual required-check rule. If repository policy still blocks this, have a maintainer submit the reviewed cache change through the ordinary PR flow. Do not disable the required check or mint a broad token.
7. Require the approved candidate's checks and review before a human merges it. If `main` has advanced, update the PR through the normal reviewed process and rerun its checks. A merged cache change reaches Vercel through the existing repository integration; verify its deployment separately.
8. Delete the merged/closed automation branch through normal repository housekeeping. Closing an unwanted proposal lets the next scheduled run propose fresh data. No workflow branch deletion is automated.

A GitHub-hosted end-to-end workflow run, effective token scopes, branch-rule enforcement and Vercel behavior require the owner's authorized remote test. Local syntax and fixture checks alone do not establish these.

## Primary references checked 22 October 2026

- [Node.js release status](https://nodejs.org/en/about/previous-releases): Node 24 is LTS; Node 20 is EOL.
- [GitHub secure-use guidance](https://docs.github.com/en/actions/reference/security/secure-use): least privilege, action identity/SHA pinning and risks from privileged untrusted checkouts.
- [GITHUB_TOKEN workflow-event behavior](https://docs.github.com/en/actions/concepts/security/github_token): PR approval exception and recursion suppression.
- [Repository Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository): PR creation option, allowed actions and inherited settings.
