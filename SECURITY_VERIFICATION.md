# Security verification · 22 October 2026

## Scope and baseline

This is a repository-level remediation and local production-build verification. No GitHub push, deployment, remote branch rule, account setting, credential, notification subscription, Zenodo record or user device was changed.

The supplied ZIP is the source baseline. Its package/lock pinned Next.js 16.2.10 and optional sharp 0.34.5. An ordinary read of GitHub main on 22 October returned `c1e0d330690986ffeb321f58a7f58008ab77ab19`. A GET of the existing www homepage at **2026-10-22 09:14:26 UTC** still showed the deployment identifier `dpl_2y1aWdJLkftgfYgFDukENY6AEzqV` in asset URLs and no sampled CSP, X-Frame-Options, nosniff, Referrer-Policy or Permissions-Policy headers. The captured response is in `docs/update-20261022/live-home-headers-before.txt`. This does not newly establish the managed runtime's installed packages. Production remains unchanged by this work.

## Dependency remediation

| Item | Local verified state |
| --- | --- |
| Node | 24.19.0 used; package requires Node 24.x and workflows use 24 |
| Next.js / @next/mdx | 16.4.2 / 16.4.2, matching patched supported line |
| React / React DOM | 19.2.7, retained |
| sharp | 0.35.5, explicitly installed and shared by Next |
| Linux libvips package | @img/sharp-libvips-linux-x64 1.3.4 |
| KaTeX | 0.18.2, root plus transitive override |
| PostCSS | 8.5.31, root plus override |
| postcss-selector-parser | 7.1.7 override, verified against retained Tailwind 3 |
| js-yaml | 4.3.2 resolved by the updated lockfile |

`npm ci` completed cleanly from the final dependency inputs. `npm audit --omit=dev --json` reported **zero known runtime-dependency findings**. The full audit reported **five high-severity entries**, rooted in `braces` through the retained Tailwind 3 development/build chain. The checked advisory lists no patched braces release, and the latest checked registry version is 3.0.3. A forced Tailwind 4 migration was not mixed into this content/security update. These build-time findings remain open, with trusted local source as the compilation input; this is not proof of non-exploitability or comprehensive security. Keep dependency advisories under review.

Both audit JSON reports are included. See `DEPENDENCY_SECURITY_RECOMMENDATIONS.md` for source links and scope. Before and after the selector-parser major override, the complete current Tailwind CSS compiled to **86,941 identical bytes**, SHA-256 `f35e0fcbb38700a0263dfd35ae70aab3b72fe881e91e6372435ec0fae5693a75`. Production compilation and publication/mathematical checks also passed with the patched KaTeX.

Primary sources checked include:

- https://nextjs.org/blog/nextjs-security-update-october-14-2026
- https://nextjs.org/docs/app/guides/content-security-policy
- https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
- https://github.com/advisories/GHSA-vfj7-8cjw-p6xm
- https://github.com/advisories/GHSA-rj75-hqrm-r3gf
- https://github.com/advisories/GHSA-238p-pmpm-9mq7
- Official npm package metadata, lockfile integrity and installed dependency tree.

## Browser protections and static delivery

`next.config.mjs` adds CSP, X-Frame-Options DENY, nosniff, strict-origin-when-cross-origin and an intentional Permissions-Policy. The unused image optimizer is explicitly disabled with `images.unoptimized`; the installed image library is patched as well. The existing public static-page CORS behavior was not labelled a breach or changed indiscriminately.

`npm run build` now runs a required postbuild step that derives SHA-256 allowlists from exact generated inline scripts, including Next bootstrap/Flight and trusted JSON-LD. Production scripts have **no unsafe-inline or unsafe-eval permission**. Same-origin bundles are permitted. Inline styles remain permitted for existing KaTeX and Atlas style attributes. No nonce-driven switch to dynamic rendering was introduced.

The build produced **599 static entries and 582 HTML document policies**, with maximum CSP size **1,813 bytes**. The generator fails on stale/unsupported routing assumptions, on-demand HTML/ISR, and conservative size/rule-budget violations. `vercel.json` requires `npm run build`; bypassing the npm lifecycle is not supported. Next start and the inspected pinned Vercel adapter consume the generated header manifests. Actual remote Vercel delivery must still be checked after the user's deployment. See `SECURITY_HEADERS.md` for the integration, adapter source and future-maintenance requirements.

A read-only verification checked every built policy. The served-response verifier then passed **586/586 cases**, including actual HTML script-hash coverage, an unknown route and ordinary discovery endpoints. Next's fixed redirects run before configured document headers: `/research` is verified as an empty-script 308 with the literal local `/research-map` destination/body; CSP is not claimed on that redirect. Error-route policies cover both generated error templates, including the actual 404 served at the internal `/500` path.

## External metadata boundary

Zenodo descriptions are parsed into readable plain text and passed as React text children. No external HTML/attributes/URL handlers are inserted at that fallback. Scripts, embedded resources and unwanted markup are omitted from the text extraction. The parser is a runtime dependency, rather than relying on an omitted development dependency.

The paper page's JSON-LD serializer also escapes `<`, so metadata containing a closing script tag cannot escape its data block or become a generated hash-allowlisted script. Local fixtures tested ordinary paragraphs/entities, script content, event attributes, unsafe URLs, SVG/iframe markup, escaped markup, Unicode, empty/missing metadata and local-summary precedence. React server rendering demonstrated that remaining text is escaped. A closing-script JSON-LD fixture preserved its data on JSON parse without an HTML `<` delimiter. All checks passed. No payload was sent to production or to Zenodo.

## CI and metadata refresh

Actions are pinned to verified official full commit SHAs. Node 24 and npm ci replace the older workflow inputs. Read-only generation/validation is separated from the cache-only PR publication job with explicit minimum permissions; there is no direct main push or automatic merge. The daily refresh remains, with bounded external fetches and a clear failure when all records fail. Local isolated Git fixtures, workflow YAML/shell syntax and script checks passed.

Remote policy settings, effective inherited controls and actual GitHub Actions execution remain unmodified and unverified here. Read `GITHUB_WORKFLOW_SETUP.md` and `WORKFLOW_VERIFICATION.md` for required checks, the repository option for workflow-created PRs, approval requirements and a manual-dispatch path. No broad credentials were created to bypass those controls.

## Verification evidence and limits

Current evidence is grouped under `docs/update-20261022/`; historical delivery reports are preserved separately. The final typecheck, production build, six CSP regressions, metadata fixtures, four cache-proposal Git fixtures and 100 editorial acceptance checks passed. Existing complete publication checks passed: 55 quantum reading pages; 4,918 consciousness HTTP assertions; 3,367 consciousness-research assertions; 370 quantum-research URLs. Continuity and relational built-content checks passed 1,864 and 3,639 assertions respectively.

The browser rendered the consciousness statement, alignment quotation, Framework companion, full-model article and a technical chapter; search found the new statement and A0 note. The sampled technical chapter had 28 KaTeX elements and zero math-error elements. The Atlas's two-dimensional fallback and inspector responded. No site CSP violation appeared in the sampled browser logs; unrelated browser-extension errors were excluded. Desktop width was 1,363 CSS pixels. Narrow/mobile browser emulation and full WebGL rendering were unavailable in this browser and are not claimed as passed. Responsive rules were inspected; device checks remain recommended.

Managed optimizer internals, deployed resolved versions, remote workflow execution, account history, registrar/TLS history and unrelated PHP/PingCAP/device matters were not audited. A ZIP cannot prove production remediation or configure remote controls. No compromise, complete immunity or comprehensive security is claimed.
