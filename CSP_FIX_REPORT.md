# CSP adapter fix and verification

Prepared 22 October 2026 against `b5a013ed9bc74090d7fbadcfc4f7fd5506c8ecca`.
This is a complete source replacement. No remote commit, push, settings change,
or deployment was performed. The corrected deployment and browser checks remain
pending. Earlier website-update reports record the previous preparation pass;
this report controls the status of this subsequent CSP fix.

## Defect and lifecycle evidence

The original `installSecurityHeaders` and `verifyBuiltSecurityHeaders` searched
only `.next/server/app` and `.next/server/pages`. A successful Next.js 16.4.2
adapter build instead has its App Router documents in a hashed route cache and
its served copies in `.next/output`. The original script therefore reached
`No static homepage found; refusing incomplete CSP build` before its optional
Build Output API handling.

The failed Vercel deployment log reports CLI 64.7.0. Primary npm metadata maps
that CLI to `@vercel/next@24.0.0`, whose peer is
`@vercel/build-utils@14.22.0`. Both exact versions were installed in an isolated
tool directory. Next calls adapter `onBuildComplete` before its build command
returns, so the adapter executes before npm postbuild. Matching builder source
awaits the whole npm build lifecycle, then reads `.next/output/config.json`
and returns that output directory without regenerating routing afterward.

Sources inspected:

- https://nextjs.org/docs/app/api-reference/adapters/api-reference
- https://vercel.com/docs/build-output-api/primitives
- https://vercel.com/docs/build-output-api/configuration
- https://registry.npmjs.org/vercel/64.7.0
- https://registry.npmjs.org/@vercel%2fnext/24.0.0
- Installed Next `dist/build/index.js`, adapter hook near line 2862.
- Matching builder `dist/index.js`, adapter selection near line 18053 and
  Build Output API consumption near line 18124.
- Matching adapter `dist/adapter/index.js`. SHA-256:
  `5ca5edd3843ef9cc220a8afab509ae2ddc9ae37f1b6f8ca4e69b15fff10bbecd`.

## Implementation

Both installer and read-only verifier now use one discovery routine. When a
Vercel output configuration exists, it is authoritative over any stale legacy
HTML. Without adapter output, the ordinary Next HTML layout remains supported.

| Rendered artifact | Public route mapping |
| --- | --- |
| `.next/output/static/**/*.html` | Static `overrides[relativePath].path`, including empty root path; otherwise its HTML pathname |
| `.next/output/functions/**/*.prerender-config.json` | Configuration pathname relative to `functions`; only root `index` maps to `/` |
| The configuration's HTML `fallback` | Exact rendered bytes hashed for that public route |
| Prerender `sourcePath` such as `/papers/[slug]` | Parent template, never substituted for a generated child's public URL |
| `.next/server/app` and `.next/server/pages` | Legacy layout only when adapter output is absent |

Traced `.func` contents, symlinks and RSC/JSON responses are excluded from HTML
discovery. Unsafe fallback paths and ambiguous or malformed mappings stop the
build. Prerender manifests and literal App Router page entries are cross-checked
so missing static documents cannot silently disappear from the inventory.

The installer writes the exact per-page hash policies into the Next manifest,
the Vercel routing table the builder consumes, and each HTML prerender's cached
`initialHeaders`. Other routing rules, redirects, headers and metadata remain.
A global error-template hash policy precedes exact page policies and terminal
handlers. Known later baseline CSP entries are removed so they cannot overwrite
the hashes. Error policies authorize the emitted error templates together.

The homepage assertion remains. Missing error HTML, ISR, mutable or partial
fallbacks, unsupported schemas, absent rendered pages, malformed headers,
unexpected policies, route-budget excess and oversized policies fail closed.
Verification checks actual current HTML, exact policy values, ordering, cached
headers, competing policies and inventory, without changing build output.

The adapter writes prerender metadata only when absent, while replacing fallback
HTML. Reinstallation can regenerate its own marked policy only if that policy
has the exact strict baseline plus valid SHA-256 sources. Unknown, unmarked stale
or relaxed cached policies are rejected. Read-only verification still rejects
stale hashes. A controlled retained-artifact trial was rejected for stale cached
metadata; the final build evidence comes from a separate fresh checkout and
clean install. No claim is made that production restores the same stale files.

No script `unsafe-inline`, `unsafe-eval`, assertion deletion or lifecycle bypass
was introduced. The existing inline-style allowance for KaTeX/Atlas is unchanged.
Application dependencies, lockfile, content and publication assets are unchanged
from the requested commit.

CI now has separate fresh-checkout jobs for legacy Next and the exact matching
Vercel adapter. Both run the CSP regressions, npm build including postbuild,
read-only policy verification and typechecking. The original required check
name `Build and typecheck` remains; the new adapter check is
`Build and typecheck (Vercel adapter)`. Remote GitHub Actions execution has not
been observed. Review the isolated adapter pins when Vercel's builder changes.

The served-response checker accommodates platform-specific redirect bodies and
direct internal error-document status codes while retaining a real unknown-path
404, the fixed same-origin redirect destination, strict script policy and exact
coverage of every served inline script. Every observed status is recorded.

## Checks actually completed

Environment: Node 24.19.0, npm 11.9.0, Next.js 16.4.2. `SKIP_ZENODO=1` uses the
existing local registries and metadata fallback. No public metadata was modified.

| Check | Result |
| --- | --- |
| Original script with official Vercel adapter | Reproduced the homepage assertion after successful compilation, types and all 599 static entries |
| Fresh checkout and `npm ci` | Passed using the committed application lockfile |
| Official matching adapter24 plus exact build-utils14.22 | Fresh production build and subsequent final-source build passed all 599 static entries and npm postbuild |
| Actual adapter artifacts | 581 HTML documents: 579 prerender HTML fallbacks and 2 static error documents; 629 Vercel routing rules after CSP installation |
| Read-only `npm run verify:security` | Passed all 581 adapter policies, cached response headers and fallback rules |
| Final `npm run typecheck` | Passed |
| Focused CSP suite | 21 passed, 0 failed or skipped |
| Ordinary Next build | Passed all 599 static entries; 582 HTML documents protected |
| Local production `next start` served GET checks | 586/586 passed, including every public HTML route, unknown route, discovery endpoints and redirect |
| Largest generated CSP | 1,813 bytes, below the retained conservative 12 KiB budget |
| CI YAML parse/structure and `git diff --check` | Passed |
| Publication files versus commit b5a013e | All 480 byte-identical; current checksums included |

Regression cases include both legacy HTML directories absent, static overrides,
root mapping, dynamic-parent route mapping, regex escaping, renamed error
assets, unknown-route coverage, missing HTML, ISR/partial constraints, duplicate
routes, traversal, malformed header objects and values, tampering, competing or
reordered CSPs, route-budget rejection before writes, read-only verification,
idempotence and strict regeneration after retained metadata's HTML changes.

Logs and sanitized reports are under `docs/csp-fix-20261022/`. Raw prerender
configuration files are excluded because they may contain generated build tokens.

`PUBLICATION_CHECKSUMS.sha256.tsv` remains the historical original-archive
manifest. Relative to that original archive, commit b5a013e already normalizes
CRLF to LF in 41 Markdown downloads. This was confirmed bytewise; no other
publication differences were found. This fix preserves every download byte in
b5a013e and records it in `CSP_FIX_PUBLICATION_CHECKSUMS.sha256.tsv`.

## Deployment and checks still required

This source is ready for review and your existing GitHub to Vercel workflow.
No local implementation or build failure remains. A ZIP cannot update GitHub
or prove that production serves these policies.

1. Apply the complete package as described in `REPLACEMENT_INSTRUCTIONS.md`, or
   review the changed-file inventory and apply only this subsequent fix. Retain
   the existing checkout's `.git`, local environment files and Vercel linkage.
   Review changes newer than b5a013e before overwriting anything.
2. Commit and push through your existing authorized branch/PR process. Confirm
   Vercel's log runs `npm run build` and postbuild reports the adapter layout and
   581 protected HTML documents. Confirm the intended source commit is deployed.
3. From the local verified checkout, run ordinary GET verification against the
   canonical domain:
   `node scripts/verify-security-headers.mjs https://www.everythingequation.com`.
   Keep the generated `tmp/security-header-verification.json` as deployment
   evidence. This checker recomputes hashes from served HTML rather than
   assuming local and remote build hashes are identical.
4. Inspect actual HTML response headers on the homepage, an article, a monograph
   chapter, `/404`, `/500`, an unknown URL and a cached repeat request. Check
   enforced CSP, its script hashes and the browser protection headers. Test the
   apex redirect separately. In a predeployment GET observation, the apex
   redirected to `www`, and the canonical homepage had no enforced CSP. That is
   baseline evidence only, not a test of the corrected deployment.
5. In a browser on the corrected deployment, reload directly, confirm hydration
   and no site-origin CSP violations, navigate through Next links, use search,
   open a result, use back/forward, inspect mathematical rendering and Atlas,
   and repeat representative navigation/search at a narrow/mobile width. Check
   network responses and cached transitions as well as visible layout.

Actual corrected-deployment headers, production caching and rewrites, browser
hydration, client navigation/search, mobile behavior and full WebGL remain
unverified. Current browser tests were not substituted with the earlier site's
browser results. Earlier instructions prohibited pushing and deployment, so
remote publication requires your next instruction or your own push.
