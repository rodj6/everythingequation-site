# Relational awareness: implementation and verification

Implemented in the supplied Shadow Theory website source. No live deployment was performed.

**Publication:** Jeremy Rodgers, *From Physical Comparison to Relational Appearance: A Defeasible Current-Act Account*, Version 1.4, 16 October 2026. Main paper and technical supplement share DOI https://doi.org/10.5281/zenodo.23408737.

## What changed

The new investigation has an affirmative public overview, a complete main article, a technical reading guide, all ten technical modules and a full supplement bibliography/provenance chapter. Its 13 reading documents contain the philosophical arguments, examples, definitions, mathematical hypotheses, proofs, countermodels, tables, figure meaning, empirical methods, reported results and substantive qualifications. Mathematics is pre-rendered through the existing KaTeX stack with MathML and TeX annotations. The original PDFs are unchanged.

The integration keeps the work together as **one publication**, bringing the consciousness programme to **eight publications: one foundation and seven investigations**. The programme cards, consciousness landing page, research hub, homepage, research map, articles index, publication catalogue, related reading, glossary, FAQ, search, metadata, sitemap, Atom feed, research graph, reading manifests and machine-readable text now expose the investigation. The existing design, routes and historical publication texts are retained.

The source-to-web record maps all **118 numbered subsections**, 17 main sections/modules, both appendices, 33 numbered formal results and **43 numbered equations**. Its 275 records resolve to 214 destinations across 13 reading pages. The requested disclosure omission is documented internally; no claim of solely human authorship was added. New/adapted prose contains no em dashes.

## New routes

| Route | Content |
| --- | --- |
| `/consciousness/relational-awareness` | Public overview, connecting argument and complete contents |
| `/consciousness/relational-awareness/read` | Complete main article, appendices and main bibliography |
| `/consciousness/relational-awareness/technical-guide` | Purpose, conventions and dependency guide |
| `/consciousness/relational-awareness/module-a` | Adequate sources, quotients and calibrated identification |
| `/consciousness/relational-awareness/module-b` | Occurrence, inclusion, ownership and philosophical foundations |
| `/consciousness/relational-awareness/module-c` | Finalisation, passive marking, access and information bounds |
| `/consciousness/relational-awareness/module-d` | Retention, reset, recurrence and native return |
| `/consciousness/relational-awareness/module-e` | Exact native parity/IIT constructions |
| `/consciousness/relational-awareness/module-f` | Spatial response and native realisation diagnostics |
| `/consciousness/relational-awareness/module-g` | Empirical methods and retrospective applications |
| `/consciousness/relational-awareness/module-h` | Constitutive alternatives and concrete-performance identity |
| `/consciousness/relational-awareness/module-i` | Presented form, content signatures and current sensory basing |
| `/consciousness/relational-awareness/module-j` | Empirical extensions and failed neural predictive assay |
| `/consciousness/relational-awareness/references` | All supplement references and reported computational provenance |
| `/consciousness/relational-awareness/manifest.json` | Publication and ordered reading inventory |
| `/papers/physical-comparison-relational-appearance` | One catalogue record linking both PDFs and the complete web edition |

## Checks actually executed

- Production build: `SKIP_ZENODO=1 NEXT_TELEMETRY_DISABLED=1 npm run build`. Compilation, TypeScript and static generation passed; 596 site routes generated.
- Conversion: `npm run convert:relational-awareness`. Thirteen maintained Markdown documents converted to HTML, including **2,205** mathematical expressions and **13 tables**, with zero KaTeX errors.
- Production-output verification: `npm run verify:relational-awareness`. **3,593 checks passed**, including 1,348 distinct internal destinations, complete article content in initial HTML, unique anchors, coverage destinations, mathematics/TeX annotations, accessible scroll regions, source hashes, PDF hashes, discovery endpoints and 220 new search records.
- Existing alignment output and discovery scripts: **780 + 150 checks passed**.
- Existing consciousness research verification: **49 pages**, 826 anchors, 581 local links, 12 source assets and 1,032 mathematical expressions passed.
- Existing consciousness monograph audit: **404 checks**, 37 reading routes and 1,323 source-to-HTML mathematical expressions passed; no broken internal links.
- Independent content reviews checked all assigned source text and ambiguous mathematics against rendered PDF pages. The main-paper token comparison reviewed every unmatched span; supplementary reviews checked equations, proofs, tables, numeric outcomes and full subsection coverage.
- DOI HEAD request returned **HTTP 200** after redirect to the specified Zenodo record. Both downloadable PDFs passed exact SHA256 comparisons with the supplied originals.

The original publication experiments and scientific computations were **not rerun**. Their reported provenance and failures remain distinguished from these website checks. The cited unpublished recollective-interpretation draft was not invented, imported or counted as another publication.

## Verification limit and local preview

**Desktop/mobile browser rendering was not inspected, and no shareable running preview was available.** This managed environment lacks the browser-control capability required by the Sites workflow. CSS and generated HTML were checked for responsive columns, keyboard navigation, equation/table overflow, heading structure and reduced-motion support, but those checks do not substitute for browser screenshots. This is the remaining verification limitation; no content, build, coverage or internal-link failure remains.

To run the delivered source locally with Node.js 20.9 or later:

```sh
npm ci
SKIP_ZENODO=1 npm run build
npm start
```

Open `http://localhost:3000/consciousness/relational-awareness`. The source already includes generated web content, so ordinary builds do not require Pandoc or Python. Regeneration instructions are in `docs/relational-awareness/README.md`.

## Package contents

The source ZIP contains the complete updated project, original publication downloads, maintained mathematical Markdown, generated reader HTML, conversion/verification scripts and internal audit records. Installed dependencies, build caches, credentials and repository internals are excluded. The separate coverage document is also included in the ZIP, together with its detailed JSON inventory and the machine-readable verification results.
