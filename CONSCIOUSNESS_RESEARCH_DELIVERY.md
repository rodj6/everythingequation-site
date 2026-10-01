# Consciousness programme update — Papers 2–4

Prepared for Jeremy Rodgers, 1 October 2026. This is the complete updated website project for the existing deployment workflow. No website or Zenodo account was changed or published.

## The reading architecture

The consciousness landing page now presents one connected programme: the accepted Version 2 monograph, followed by boundary robustness, effective-interface learning and realization identification. `/consciousness/research` connects the argument. Each paper has a substantial article in the website's existing visual and editorial style, followed by the complete technical reading edition.

There are three lead articles, 25 article sections and 49 full technical reading sections. All source definitions, assumptions, formal statements, proofs, displayed calculations, counterexamples, experimental protocols, numerical tables, figures, appendices, philosophical arguments and references are available in ordinary server-rendered HTML. The technical readers retain source numbering; the lead articles and chapter introductions explain the progression. Full-paper and section Markdown preserve the mathematics, and the matching original PDF/TeX remain downloadable.

The original monograph's publication text and source files are byte-for-byte preserved. Its page furniture now points to the subsequent research. In particular, readers can find Paper 2's diagnosis of the original boundary construction without silently changing the monograph's historical formulation.

The programme is integrated into the publication catalogue, research map, consciousness research-status page, monograph reading paths, guides, glossary, FAQ, search, sitemap, Atom feed, structured metadata, research graph, manifest and `llms.txt`. The existing crawler policy and canonical domain are preserved.

## Publication identity

| Publication | DOI |
| --- | --- |
| Consciousness monograph, Version 2 | https://doi.org/10.5281/zenodo.22853774 |
| Paper 2 — Relational Boundaries and Awareness Localization | https://doi.org/10.5281/zenodo.23075822 |
| Paper 3 — Learning Effective Interfaces from Opaque Stochastic Systems | https://doi.org/10.5281/zenodo.23075824 |
| Paper 4 — Identifying Binary Realizations from Intervention Laws | https://doi.org/10.5281/zenodo.23075828 |

These are the author-supplied consciousness identifiers. They are distinct from the quantum-measurement publication series. Tests verify link destinations and metadata consistency; they do not establish live DOI resolution or public availability of separately cited research deposits.

## Full-content coverage

| Paper | Technical sections | Formal statements and definitions | Proofs | Tables | Figures | References |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | 20 | 39 | 33 | 2 | 4 | 25 |
| 3 | 18 | 0 | 0 | 25 | 4 | 22 |
| 4 | 11 | 7 | 7 | 3 | 0 | 20 |

The readers expose 1,032 accessible mathematical expressions. All 241 source labels have matching compiled numbering. Eight figures were rendered from their actual TikZ sources as vector SVG, with explanatory alternative descriptions.

The coverage map is `docs/consciousness/RESEARCH_SOURCE_COVERAGE.md`. The adjacent `research-source-map.csv` contains 303 individual result, proof, displayed-equation, table, figure and reference mappings. The JSON conversion audit records source passages, locations, labels, target anchors, hashes and ordered-prose checks. Coverage was checked against actual HTML, not inferred solely from counts.

Independent manuscript reviews also compared all inline/display mathematics in Papers 2 and 4, all display mathematics in Paper 3, every numerical token in Paper 3's 25 tables, substantial source-prose passages, source references, figure renderings and PDF numbering. These checks concern faithful website transcription. They are not new proofs, research reruns, independent empirical validation or external peer review.

## Verification completed

- Production build and TypeScript: pass using `SKIP_ZENODO=1 npm run build`. This exercises the existing cache-only build path with the supplied publication metadata. No dependency versions, lockfile, build configuration or deployment conventions were changed.
- Source-conversion integrity: pass for all 49 technical pages, 826 anchors, 581 reader-local links, 12 original/alias file hashes and eight source figures.
- New HTTP/initial-HTML checks: 3,223 passed across all 53 new routes, all article sections, 1,032 mathematical expressions, 544 source targets, 58 downloads and 845 internal links.
- Existing consciousness and publication regression: 3,876 checks passed, including the preserved monograph, historical routes and unrelated quantum/TOE publication routes.
- Publication/discovery checks: 2,227 passed. All 49 technical pages are represented in search, sitemap, graph, manifest and `llms.txt`; all 835 graph edges resolve. The combined search contains 376 records.
- New desktop/mobile browser checks: 106 passed, with 24 screenshots, no console/hydration errors, no page-width overflow in the inspected routes, functioning search, keyboard-accessible table regions and complete text/MathML without JavaScript.
- Existing browser regression: 29 passed, including mobile navigation, reduced-motion behaviour, mathematical pages, table scrolling and no-JavaScript reading.
- Archive: extracted into a fresh directory and every packaged file checked against the working project. Dependency folders, build caches, Git history, temporary files and TypeScript build metadata are excluded.

Reports and reproducible check scripts are included. The new browser report is `docs/consciousness/research-browser-verification.json`; screenshots are in `evidence/consciousness-research/`. Original-regression reports remain at their established paths. Source-preservation evidence is in `docs/consciousness/input-preservation-verification.json`.

## External research materials not supplied

All scientific content present in the authoritative manuscripts is included. The manuscripts also describe separate research archives that were not among the website/manuscript inputs:

- Paper 2: its canonical theorem-and-claim package, amendment ledger, verification programs and exact certificates, frozen research archives and prepared external-review packet. The separately cited source/readout predecessor is not newly supplied by this update.
- Paper 3: the frozen evidence ZIP and original study environments, model banks, canonical CSV/JSON files, scoring/verification records and the separate retrospective fitting archive with its 360 fit records and selection commitments.
- Paper 4: the separately packaged FRD-1, FRD-2 and completed CCI-1 reports, associated research/review records and a public identifier for the planned supporting deposit.

The site retains the manuscripts' methods and reported results while clearly explaining that these additional packages are separate from this web edition. It does not invent their files, checks, execution results or availability. Paper 4's internal supporting-DOI placeholder is replaced in web prose by accurate availability wording; its own paper DOI is not substituted for that distinct deposit. Paper 3's historical provenance passage is introduced by a note explaining that the publication DOIs have since been added. Original manuscript/PDF bytes remain unchanged.

## Build and maintenance

Use the existing deployment workflow. The archive is a Next.js source project, not a prebuilt static-hosting export.

```sh
npm ci
npm run build
npm start
```

For a build without external Zenodo metadata requests, use the existing option:

```sh
SKIP_ZENODO=1 npm run build
```

The committed reading content and figure assets are already generated. To reproduce the new content and checks:

```sh
node scripts/convert-consciousness-research.mjs
node scripts/verify-consciousness-research.mjs
node scripts/verify-consciousness-discovery.cjs
```

After starting the production server, run `scripts/verify-consciousness-research-http.cjs` and `scripts/verify-consciousness-site.mjs` with its base URL. The optional browser scripts require Playwright and Chromium; their headers document local installation overrides. `scripts/verify-consciousness-research-browser.mjs --start-server` can manage its own test server after a production build. These QA dependencies are not required to build or deploy the website.

To regenerate the source figures, use `scripts/render-consciousness-research-figures.py` with the supplied Paper 2 and Paper 3 TeX; it requires the original LaTeX packages and PyMuPDF. There is no need to run the original research experiments to regenerate this website.
