# Five-paper integration verification

Executed 24 October 2026 UTC against baseline `b01907c160c0b19d3b847cbb3f81ff43e19782e8`. Earlier reports remain historical. This report separates source checks, actual builds, HTTP responses, browser observations and unexecuted checks.

## Installation and final builds

- Clean `npm ci`: passed, 339 packages installed using Node **24.19.0**, npm **11.9.0**, the supplied unchanged lockfile, Next **16.4.2** and React **19.2.7**. Runtime dependencies were not changed. See `docs/paper-integration/clean-install.log`.
- Final `npm run typecheck`: passed. Both production compilations also completed their own TypeScript stage.
- Final ordinary `SKIP_ZENODO=1 NEXT_TELEMETRY_DISABLED=1 npm run build`: passed, including prebuild generation, 683 static entries and required CSP postbuild for **661 HTML documents**. See `legacy-build.log` and `final-legacy-security.log`.
- Real adapter-backed `npm run build`: passed with **@vercel/next 24.0.0**, compatible **@vercel/build-utils 14.22.0**, and `NEXT_ADAPTER_PATH` pointing to the installed official adapter. This was a real `modifyConfig` / `onBuildComplete` execution, not an adapter-shaped fixture. The adapter was installed separately for verification; it was not added to application dependencies. All **799 production source/configuration inputs** match the final ordinary-build source byte for byte.
- Adapter output is `.next/output`. Its consumed `config.json` has **713 routing rules**; **658 cached HTML prerenders** carry matching `initialHeaders`, alongside **two static error documents**, for **660 HTML policies**. All 74 new hub/chapter routes are covered. The 404/500 global fallback contains their four-hash union. Largest policy: **1,813 bytes**. No script `unsafe-inline` or `unsafe-eval` was introduced. See `adapter-verification-summary.json`, `adapter-csp-policy-report.json` and source comparison evidence.
- The final adapter build log records compilation, TypeScript, static generation and required CSP postbuild. Fresh consumed adapter artifacts and their source identities were independently checked.

The first ordinary compile exceeded Node's default 2 GiB heap. A later compile exposed a malformed multiline MDX equation, which was corrected and strictly recompiled. The first adapter attempt, using eight static workers alongside a production server, was killed during generation. Final builds use the reviewed default 4 GiB heap, Webpack memory optimization and two workers, with no skipped type checks, missing content, relaxed security or disabled lifecycle steps. Six independent wrapper execution checks passed, including explicit caller heap settings, argument/environment forwarding and child failure propagation.

## Automated content and preservation checks

| Check actually executed | Result |
| --- | --- |
| Final source-preservation/coverage verifier | **3,120/3,120 passed** |
| Final ordinary built-page verifier | **9,873/9,873 passed** |
| Actual adapter built-page verifier | **9,873/9,873 passed** |
| Final served-production integration verifier | **10,761/10,761 passed** |
| CSP regression suite, including missing legacy HTML directories | **21/21 passed** |
| External-metadata adversarial/ordinary/missing/local-summary fixtures | **7/7 passed** |
| Existing editorial acceptance, including original A0 note and exact alignment quotation | **100/100 passed** |
| Existing consciousness source audit | **404 checks passed** |
| Existing quantum-research audit | **Nine papers, 160 reading pages passed** |
| Agency recovered finite verification scripts | **13 passed** |
| Block-universe supplied numerical checks | **16 passed** |
| Temporal independent component/arithmetic checks | **Passed**, separately labelled from unavailable original code |
| Whole-field finite checks | Exhaustive 32,768 Boolean inverse-family cases and bounded extent checks passed |
| Source whitespace check (`git diff --check`) | Passed |

The new reading-page checks cover **69 chapters, 2,019 mathematical expressions, 1,678 prose fragments, 16 tables, six figures, 652 local targets and 280 coverage rows**. They check real rendered HTML/MathML against MDX source, duplicate anchors, unresolved internal links, missing assets, DOI/PDF/Markdown links and discovery inventories. Strict MDX/GFM/math/KaTeX compilation also passed for each paper before integration. These checks supplement direct PDF reading and independent focused source review; they are not a machine proof of semantic equivalence or validation of scientific premises.

`PAPER_COVERAGE.json` has **280 source-PDF entries**. A candidate-only administrative paragraph, absent from the controlling agency PDF, was removed from the public article and recorded as an administrative exclusion. The agency mathematical inventory independently matched 1,036 source expressions with 1,036 web expressions after display-syntax normalization. Source-identity/page-location review and PDF/Lean/download checksums are in `docs/paper-integration/`.

All **480 baseline publication assets**, all five supplied PDFs and the separately supplied Lean file retain their exact bytes. The checksum manifest also covers 21 newly included publication assets. No publication was silently revised. Original manuscript hashes, figures and downloads are preserved in the complete package.

The existing three-paper quantum audit reports **one pre-existing failure**: its historical metadata expects CRLF bytes for `public/publications/quantum-measurement/monograph.tex`, whereas baseline and current Git bytes use LF. Replacing LF with CRLF reconstructs the exact historical SHA-256. All PDF, proof, statement, prose, mathematical and link checks pass. The file remains byte-identical to baseline; historical metadata and publication bytes were not rewritten to conceal the mismatch. See `historical-quantum-line-endings.json`. This does not affect the successful application builds.

## Actual served responses and browser observations

A local **production `next start` build**, managed through the available preview environment, was tested at `http://terminal.local:4173`. It was not a development server. Temporary preview launch configuration was restored before final checks and is excluded from the source package.

- Actual GET responses: **665/665 routes passed** protection-header and inline-script hash coverage checks, including unknown-route 404, error pages, machine endpoints and the fixed research redirect. CSP, framing denial, nosniff, Referrer-Policy and Permissions-Policy were checked. See `served-security-headers.json`.
- HTTP content verification fetched complete reading pages, local targets, discovery endpoints, manifests, source PDF bytes and Markdown downloads. All 10,761 checks passed. Sitemap, feed, llms.txt, graph and consciousness search include the expanded corpus.
- Desktop browser directly loaded all **69 chapters** and all five hubs. It observed 2,019 rendered mathematical expressions, 16 tables, six loaded figures, zero KaTeX errors and no document overflow at the tested viewport.
- Hydration was exercised: chapter navigation changed the reading page; entering `common-prefix` returned four matching sections including new material; opening the result reached its chapter. Final search formatting and corrected button contrast were rechecked after the final build.
- Existing homepage, Framework, consciousness opening and A0 anchor, glossary, alignment quotation, agency, continuity note, TOE/quantum monograph openings and Atlas were inspected. Atlas's SVG fallback responded to Explore freely and Time, updating its inspector and trace. No CSP or hydration console errors were observed. Unrelated browser-extension metadata errors were present and were not attributed to the site.

## Unexecuted checks and deployment limits

- **No deployment, push, remote-setting change, credential creation or Zenodo mutation occurred.** Actual live Vercel response headers, caching and postdeployment hydration must be checked after the user deploys. Adapter artifacts were checked locally; platform serving was not emulated or observed live.
- Mobile viewport/device emulation was not exposed by the available browser API. Responsive CSS, scrolling mathematics/tables and the mobile breakpoint were inspected, but a narrow-device browser run remains unverified.
- The available browser exercised the Atlas fallback, with no canvas. Hardware WebGL/3D rendering was not verified in this run.
- Lean/Lake were unavailable, so formal sources were inspected and supplied without a new Lean compile. Matching block supplements include direct 1+1 and 3+1 material, but historical audit logs are not presented as newly executed formal verification.
- No original temporal supplementary program was available. Its independently written checks verify the stated arithmetic/model examples, not empirical results or experiencing.
- No new human experiment or independent empirical validation was performed. Source empirical reports retain their evidential scope.
- Baseline Git contains `.cache/.gitkeep` and no populated Zenodo cache. That placeholder is included; preserve a newer populated `.cache/zenodo.json` in the user's checkout. Offline/cache-only builds and metadata fallback were tested successfully.

There is **no known application-build or CSP blocker** in this package. The historical TeX line-ending audit discrepancy and the unexecuted checks above remain disclosed. Deployment still needs the user's ordinary GitHub → Vercel workflow and production verification.

## Package integrity

The complete source ZIP excludes Git history, dependencies, build output, machine-local caches, secrets, environment files and preview-only launch files. It includes required configuration/workflows, source content, original PDFs, supplements, generated source inventories and review records. The final ZIP was CRC-tested, extracted into a fresh directory and compared byte for byte with its intended file inventory, including preserved publication checksums. Its single top-level folder is `everythingequation-site/`.
