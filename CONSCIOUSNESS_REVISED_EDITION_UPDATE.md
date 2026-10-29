# Consciousness monograph revised edition update

This complete replacement repository updates Jeremy Rodgers's *Shadow Theory and Consciousness: Awareness, Perspectival Realization, and the Source-to-Experience Problem* to the revised edition dated 28 October 2026, DOI `10.5281/zenodo.23755118`.

## Baseline

Work started from the latest preceding website deliverable, `everythingequation-site-source-readout-update.zip`, SHA-256 `c4ac65cecfa21b9b7d6a6cc218b2f6e6da7e1a941b17f94fd98978d9ed752ed8`. That repository includes the earlier source-readout redesign and complete seven foundational, five constructive and three technical-companion editions. No older archive was used as the implementation base.

## Complete revised article

The web edition retains all 37 existing reading routes: front matter, 25 chapters, six appendices and bibliography. The 159-page revised publication is integrated throughout those pages, including philosophical arguments, examples, definitions, assumptions, 40 formal statements, 30 proofs, nine tables, 1,550 mathematical expressions and 75 references. All 590 former anchors remain available, including historical citation aliases.

The edition integrates the ground, unsplit, mathematical source and awareness distinctions; enacted organization and current incorporation; temporal experience; retained records; relational appearance; agency and continuation; and the affirmative framework-based current-AI argument with its separate implementation-certificate requirements. A0 is updated in the actual constitution. A1–A3 and their exact mathematical scope follow the revised publication.

The original author LaTeX used for semantic HTML and MathML conversion was independently compiled and checked against the supplied final PDF. All 159 pages match in sequential text tokens and page raster comparisons. The bundled current PDF is the supplied final file, byte-identical to the published Zenodo PDF. Its SHA-256 is `4531915399c00d0c7bdefe1e8a5ae6ecbf964c3a40e34a0a5a29502d032612cf`.

## Edition links and history

The current article, publication card, relevant programme descriptions, structured metadata, search and discovery use the new DOI and revised-edition identity. The published verification supplement is linked through `https://zenodo.org/records/23755118`. The actual published PDF and supplement download targets were verified against that record. No internal research or publication-working archive is included.

The edition date is 28 October 2026, as printed in the monograph. Zenodo records the release date as 29 October 2026; both are retained in the verification provenance. The original 20 September edition and its DOI are preserved as history. Its PDF, source, Markdown and audit material are archived under `public/publications/consciousness/history/2026-09-20/`.

## Scope and separate findings

Outside the monograph, changes are limited to its own edition descriptions, links, publication assets and metadata. All 5,178 protected source-readout, quantum-measurement and unrelated consciousness-companion files remain byte-identical to the latest baseline. No baseline file is removed. Site layout, security configuration and functionality remain unchanged.

Several separate consciousness publication treatments retain the earlier knowing-aspect A0 or the formerly open reconciliation wording. These were not rewritten. Exact passages and their relationship to the revised monograph are reported separately in `SEPARATE_ARTICLE_FINDINGS.md`, with the full content review in `docs/consciousness-revision-20261028/content-review.md`.

## Verification

- Content conversion audit: 424 checks passed; 37 reading routes and 1,550 expressions; no broken publication links or mathematical rendering errors.
- Independent source and preservation audit: 718 checks passed against the actual baseline and supplied PDF; 715 checks passed using the portable bundled baseline inventory; all 590 former anchors retained; all 5,178 protected files unchanged.
- Production-output audit: 2,814 checks passed, including complete current source on all monograph routes, current metadata, navigation, citation targets, search, manifest, sitemap, LLM discovery and research graph. All 193 previous source-readout technical sections remain built.
- TypeScript typecheck and production build passed. Security-header verification passed for 876 HTML routes without security changes.
- Browser checks passed for desktop rendering and a narrow 390 CSS pixel iframe viewport, including mobile menu, chapter navigation, revised-content search, section anchors and the exact transition matrix. No touch-device hardware emulation was used.
- The final ZIP was checked for archive integrity and preservation of baseline files.

Build with Node 24:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run typecheck
npm run audit:consciousness
SKIP_ZENODO=1 NEXT_TELEMETRY_DISABLED=1 npm run build
npm run verify:security
python3 scripts/verify-consciousness-revision.py
```

`SKIP_ZENODO=1` builds from the checked-in publication metadata without refreshing unrelated records. Build caches and installed dependencies are excluded from the ZIP; the complete source and assets are included.

The source, publication, preservation, browser and build evidence is under `docs/consciousness-revision-20261028/`. Nothing was deployed or published.
