# Consciousness source conversion report

The complete web monograph was converted from the separately supplied genuine `Shadow_Theory_and_Consciousness_Final.tex`, matched to the supplied 133-page publication PDF. The original inputs remain unchanged. This is **Version 2 — publication edition, 20 September 2026**, Jeremy Rodgers, Independent Researcher, SPC-2. DOI: `10.5281/zenodo.22853774`.

## Coverage and source matching

The maintained inventory contains **37 substantive reading routes**: all **25 chapters**, **six appendices**, the title/publication identity, all **four original front-matter chapters** (including terminology and reading guidance), and the bibliography. The five parts are retained as contents groups and source-label anchors on their opening chapters.

Conversion preserves **165 headings**, **1,323 mathematical expressions** (181 displayed), **40 numbered formal statements**, **30 complete proof bodies**, **eight tables**, **281 source labels**, and **54 bibliography entries**. All chapter/statement/citation links and bibliography backlinks resolve. Bibliography identities and numbering match the PDF; web typography is generated from the embedded source fields.

Matching evidence checks the title, subtitle, author, date, edition, contents and the revised scientific qualifications throughout the book. **All 1,025 substantial prose chunks match their PDF page ranges**, after removing only running headers/page numbers and normalizing whitespace, punctuation and Unicode ligatures. There is no mismatch tolerance. All 54 bibliography titles, years and supplied DOIs match their printed entries. Separately, every one of the **1,323 original-source formulas matches its rendered TeX annotation**, with only documented presentational normalization and resolved references. Short prose fragments are additionally covered by the converter's complete source-prose token checks.

| Input | SHA-256 |
|---|---|
| Original final TeX | `72d09b83f262958f87a0f1ea063b20cdb693fbe857b25925f7c0fe58eb22fe67` |
| Supplied archival PDF | `416cd39cb1aabd3712e9e315acfb36189023ecd4c2114ee92da07713859bd688` |

The TeX contains its bibliography in a `filecontents` block; an extracted `.bib` download is included. It references no external figure assets. It was not recompiled to claim byte-identical PDF production.

## Web-edition correction and presentation

Section **18.1**, PDF page **81** / printed page **69**, contains the typographic reference **“?? 16.4.”** The web edition resolves the original label `ass:spc2-congruence` as **Assumption 16.4**. The archival PDF was not modified.

Print-only contents/layout commands become ordinary web navigation. Scientific paragraphs, equations, statements and proofs retain their source wording. KaTeX produces visual HTML and MathML. Display equations and tables support keyboard focus for horizontal scrolling. Full-book/per-chapter Markdown is generated from the same inventory, with mathematical macro expansion.

Final conversion QA corrected escaped underscores in Appendix D's navigation labels and the caption/cross-reference type for **Table 12.1**. Representative comparisons of PDF pages **85** and **121** with the browser screenshots confirmed Equation **19.1**, the two-bit update, the Appendix D block operator and the first two boundary matrices. PDF pages **81–82** were inspected for the completion theorem and its full proof. Browser screenshots are in `evidence/screenshots/`; final browser/build results are documented separately.

## Remaining source limitation

Appendix **D.4** (PDF pages 123–124) describes a companion executable verification package, including exact finite matrix/transcript checks, numerical witness stress tests and countermodels. Appendix **F.4** (PDF page 129) refers to accompanying coverage/verification materials, executable scripts and results. **Those research supplements were not among the supplied files; the manuscript does not provide their filenames.** Their descriptions remain intact in the web edition. No substitute scripts or claimed research results were invented. This is an unavailable supplementary-material limitation, not missing manuscript text or mathematics. Website conversion checks are distinct from the author's research-verification package.

## Reproduction and actual results

From the project root:

```text
node scripts/convert-consciousness.mjs
node scripts/audit-consciousness-content.mjs
python scripts/verify-consciousness-source.py
```

The Python source comparison requires PyMuPDF; the website build and normal converter do not require Python. All three commands were run successfully after the final conversion fixes. Results: **conversion PASS**, **404 independent audit checks PASS**, **1,323/1,323 formula matches**, **0 broken publication links**, **1,025/1,025 PDF prose matches**, **54/54 bibliography matches**.

Detailed, reproducible records:

- `public/publications/consciousness/source-coverage.json`: ordered routes, section/statement anchors, PDF pages, TeX lines, source hashes, adaptations and correction.
- `public/publications/consciousness/conversion-audit.json`: structural counts, source-prose coverage, unsupported-command/reference/render checks.
- `public/publications/consciousness/source-verification.json`: all 404 checks and per-expression source-to-HTML correspondence.
- `docs/consciousness/source-pdf-comparison.json`: per-route prose comparison and all bibliography identity checks.
- `scripts/convert-consciousness.mjs`, `scripts/consciousness-bibliography.mjs`: maintained conversion process.

These checks establish preservation and rendering coverage within their stated methods. They do not independently prove the manuscript's mathematics or validate its empirical interpretation.

