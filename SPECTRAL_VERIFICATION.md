# Verification for the eight-paper release

Run date: 5 November 2026. The input baseline is the attached November website
archive. Local checks were run on Node 24.22.1 and Next.js 16.4.2. There was
no live deployment or publication mutation.

| Check | Result |
| --- | --- |
| Clean `npm ci` in both build trees | Passed; unchanged lockfile, 339 dependencies installed per tree |
| TypeScript | Production compile and standalone typecheck passed |
| Source and coverage verification | 20,669/20,669 passed |
| Ordinary production build | 994 static entries and 962 protected HTML documents |
| Ordinary built-edition verification | 30,209/30,209 passed |
| Real Vercel adapter build | @vercel/next 24.0.0, @vercel/build-utils 14.22.0; 994 static entries, 961 protected HTML documents |
| Adapter built-edition verification | 30,210/30,210 passed |
| Actual production HTTP | 31,185/31,185 passed, including original PDF and locally hosted ZIP bytes |
| Actual served security headers | 966/966 passed, including fallback and redirect handling |
| Read-only generated CSP verification | All ordinary and adapter HTML policies verified |
| CSP regression suite | 22/22 passed |
| Metadata escaping and cache proposal boundary | Passed |
| Existing Source–Readout editions | 10,878 source checks and 14,295 production checks across 214 inherited routes passed |

The chapter verifier reconciled 69 chapters, 835 source-to-web mappings,
3,864 mathematical expressions and all 406 numbered equations. It compared
rendered prose, MathML annotations, anchors, links, tables and figures with
their source and route inventories. The figures comprise 16 images plus one
accessible native diagram. Forty numbered source tables are included, with
one additional reading table. All 4,717 preserved publication files match
the incoming archive. The source checks include a literal reader-ID guard
for the new route wrappers.

## Security and build repairs

The expanded site crossed the old conservative 950-rule guard. Vercel
[documents a 2,048-route limit](https://vercel.com/docs/limits#routes-created-per-deployment)
for Hobby and Pro, including Build Output API routes. The repository now
fails closed above 1,900 rules. The final ordinary build has
963 header rules; the adapter output has 1,024
routing rules including its framework routes. The largest measured policy
is 1,813 bytes. Per-document hashes and error-page
fallback hashes remain exact, with no relaxed script directive. The same
policy is verified in Vercel route output and cached prerender headers.

The rendered tests caught a template ID mismatch before delivery. The
wrappers were corrected and both outputs were rebuilt. Desktop inspection
then caught an unreadable button label; the new reader now uses the
existing Source–Readout primary button style. An overlapping adapter and
ordinary build exceeded available process memory; the successful builds
were performed without simultaneous compilation.

## Browser

The local production browser check covered the homepage entrances, seven-paper
series, CSCF reading path and next-chapter navigation, search for “projective
kernel” and its actual proof result, the field inspector and the gravity
inspector's equations tab and article link. Both normal Atlas selection and
the explicit 2D view were exercised. The tested browser used SVG fallback;
hardware WebGL was not verified. The dense Slow Passage chapter rendered
110 mathematical expressions, six tables and three loaded figures with alt
text. No CSP console violation was observed in the exercised flows.

A narrow desktop browser check was attempted, but the native accessibility
provider did not accept the input action and the managed browser did not
expose a viewport resize API. Responsive CSS and scrolling equations/tables
were inspected; a narrow-device browser run remains unverified.

## Supplement checks and limits

The supplied supplements were matched to official publication records. Selected
scientific checks were rerun, with separate per-paper scope. The transport
suite passed 99 scientific checks and three portability checks. The
Spectral Profiles graph replay passed all 45 hydrogen counts, 45 fixed16
counts and 14 saved spatial views. Spectral Ratios quick, claim and log
identity checks passed; complete numerical regeneration was not repeated.
Sharp and Slow public verifier regressions, targeted scalar/cubic or Jacobian
checks, and the independent Slow modal events passed. See the JSON receipts
and source ledgers in `docs/spectral/`. The adaptive archives' manifests
and files were checked without repeating their full computations. These
checks do not establish empirical validity or substitute for proofs.

An earlier five-paper historical checker already rejects 47 revised
consciousness assets on the untouched incoming archive because it compares
them with an older snapshot. This release uses the actual attached baseline.
The separate consciousness revision checker passed 714 of 715 checks; its
only exception flags the two intentionally edited shared Source–Readout
landing and search files. The revised consciousness routes and publication
bytes are unchanged.

## Package

The ZIP has one `everythingequation-site/` root. It excludes Git history,
installed dependencies, build outputs, local environment settings, and
temporary preview files. CRC, extraction and exact byte comparison against
the source inventory were performed, including all original publications.
No known build, content-routing, or CSP blocker remains. Live deployment,
hardware WebGL and narrow-device inspection remain outside the verified set.
