# Einstein and Yang–Mills verification

Run date: 12 November 2026 (UTC). These are this integration's results.
Historical reports elsewhere in the repository retain their original scope.

## Inputs and source checks

- Clean `npm ci` completed with the supplied lockfile under Node 24.22.1,
  npm 11.9.0. Dependency manifests and the lockfile are unchanged.
- TypeScript checking passed after integration.
- `npm run test:security-headers`: 22 tests passed, none failed or skipped.
- `npm run verify:metadata`: seven adversarial/ordinary escaping fixtures,
  local-summary, missing-metadata and fallback branches, plus JSON-LD delimiter
  isolation passed. No payloads were sent to public records.
- `node scripts/verify-einstein-ym.mjs --source-only`: 292,270 checks passed,
  zero failures. The source receipt covers exact source/PDF bindings, source
  blocks, body pages, granular independent source obligations, anchors,
  links, vector crop geometry and glyph definitions, table regions, manifests,
  shared publication identity, downloads and preserved baseline assets.
- Einstein's normalized mathematical multiset comparison passed: 853 original
  mathematical annotations, plus 15 explicit proof endings, retained as 868
  web mathematical annotations. Strict MDX and KaTeX checks passed.
- All 105 baseline publication PDF, ZIP, LaTeX and Lean assets remain unchanged.
  All three new PDF files match their attachments and the currently public
  official Zenodo downloads byte for byte. The records were checked directly.

## Content review and its limits

The source-to-web ledger has 333 Einstein obligations, 1,206 flagship obligations
and 1,010 companion obligations. It links sections, equations, formal results,
proofs, tables, appendices and references to reading routes and stable anchors.
It is supplemented by inventories of all 13,338 Yang–Mills source blocks,
25,319 vector expressions/panels and all 21 table regions.

Independent review checked the complete source inventories and representative
PDF/HTML/vector samples, including the repaired fraction, amendment-table
continuation and correspondence tables. It was not a human, line-by-line
mathematical proof audit of all 1,036 PDF pages. These website checks establish
conversion coverage and rendering integrity, not new proof certification or
empirical validation.

Einstein uses semantic KaTeX/MathML. The final Yang–Mills PDFs have no publicly
available matching editable source. Their editions follow the existing site's
PDF-only technical reading method: reflowed HTML prose, bounded exact-vector
mathematics/tables, and searchable linear text alternatives. The alternatives
are not semantic MathML and table transcriptions follow physical visual rows.
No substantive equation or derivation is replaced by a DOI pointer.

The matching Einstein public verification archive is supplied as a download;
its mathematical verification suites were not replayed. No Lean build of the
upstream Yang–Mills project or of the source–readout reconstruction was run.
Upstream source/assessment links are contextual evidence, not this release's
formal checks or a verified revision correspondence.

## Production verification

The first production build completed all 1,223 static pages and installed CSP
for 1,183 HTML routes. Read-only built-policy verification passed. The original
Source–Readout regression passed 14,315 checks across 214 routes.

The first expanded-edition built and HTTP checks caught 163 missing chapter URL
fields in the programme manifest. The chapters themselves loaded and passed
the rendering checks. The manifest generator was corrected; final verification
receipts below supersede those initial failed attempts. No security assertion
was removed or relaxed.


## Final ordinary production and HTTP results

- Full `SKIP_ZENODO=1 npm run build`, including content generation, TypeScript,
  static generation and CSP postbuild: passed, 1,223 static pages.
- Expanded-edition built verification: 344,189 checks, zero failures.
- Expanded-edition served HTTP verification: 346,570 checks, zero failures.
  This exercises every new chapter route, anchors, reading navigation,
  mathematical source presence, publication metadata, machine discovery,
  Markdown, PDF and configured supplement responses and byte integrity.
- Read-only `npm run verify:security`: passed for 1,183 built HTML routes.
  Largest CSP: 1,813 bytes. No script unsafe-inline or unsafe-eval was added.
- Actually served header verification: 1,187 requests, zero failures, including
  missing routes, error responses, script-hash coverage and all HTML routes.
- Existing Source–Readout regression: 214 routes, 14,315 checks, zero failures.
  Its historical report was restored; this run's receipt is stored separately.

## Browser observations

Managed Chrome inspected the production build at a 1,363-pixel viewport.
The homepage features, shared Yang–Mills entrance, all three reading entrances,
flagship TOC/client navigation, representative vector formulas, Einstein
KaTeX/MathML and the companion table/transcription rendered successfully.
Programmatic full-route checks supplement those visual samples.

The programme search loaded and returned three matching sections for
“reflective mathematics”, establishing working client hydration beyond static
server-rendered content. Atlas search opened Einstein. The flagship entry's
seven conceptual connections, all five Source Lift tour stops, and the
Instrument/Boundary/History controls worked. The browser automatically used
the prepared-picture fallback and displayed its explanation. The live 3D
instrument could not be rendered by this browser, so its graphics are
unverified in this run. Engine code and prepared pictures are unchanged.

Framework, consciousness, monograph, alignment and the existing transport
entrance loaded without KaTeX errors or desktop page overflow. Browser logs
contained extension-origin metadata errors; no CSP refusal messages were
captured for the tested interactions. Narrow/mobile emulation was not exposed
by the permitted browser API. Responsive rules were retained and inspected,
but actual mobile browser testing remains unexecuted.

See `docs/einstein-ym/browser-observations.json`, `http-verification.json`,
`next-build-verification.json`, `served-security-verification.json` and
`next-security-headers-report.json` for the current run's receipts.


## Real Vercel-adapter build

The actual `@vercel/next` 24.0.0 adapter with `@vercel/build-utils` 14.22.0
was installed in an isolated temporary directory. It was activated with
`NEXT_ADAPTER_PATH` and the full `npm run build` was executed, including the
adapter's `onBuildComplete` and the repository's subsequent CSP postbuild.
This was a real adapter build, not a directory-shaped unit fixture.

Compilation, TypeScript and all 1,223 static pages passed. The adapter moved
the rendered App Router HTML into `.next/output/functions` fallback files;
only legacy 404/500 HTML remained under `.next/server/pages`. There was no
legacy App Router homepage for postbuild to use. Postbuild detected the real
adapter layout and installed policies for 1,182 HTML documents, with 1,185
header rules and 1,254 total adapter routes, below the unchanged 1,900 budget.
The largest policy was 1,813 bytes.

`npm run verify:security` then verified the generated Vercel routing config
and HTML prerender `initialHeaders` without mutating them. Error-page coverage
and all actual inline-script hashes passed. Expanded-edition adapter artifact
verification passed 344,190 checks with zero failures.

Receipts: `docs/einstein-ym/adapter-build-verification.json`,
`adapter-security-headers-report.json`, `build-environment.json` and the
current build logs. The isolated adapter installation and all build output
are excluded from the source package. No deployment or remote changes were made.

## Remaining checks and readiness

No build or source-package blocker was found. Live Vercel response headers,
hydration and account-specific deployment behavior still need to be checked
after the owner deploys through the existing workflow. Mobile browser testing
and live 3D rendering remain unverified here. The prepared-picture Atlas,
client controls and expanded reading paths were exercised successfully.

No formal-verification programme, independent scientific validation or
production security certification is implied by these website checks.


## Archive verification

The replacement ZIP is rooted only at `everythingequation-site/`. The release
packager checks required configuration and workflow files, compares all
preserved publication hashes and the three original attachment bytes, runs a
full ZIP CRC check, extracts the archive, and compares every extracted file's
SHA-256 and the complete inventory with the intended source package. Git
history, dependency/build directories, local environment files and machine
caches are excluded. The changed-file inventory records the baseline and
updated hashes and distinguishes the omitted baseline compiler cache from
source deletions.
