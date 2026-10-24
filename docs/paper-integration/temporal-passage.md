# Experienced Temporal Passage: conversion record

Source: `Experienced_Temporal_Passage(7).pdf`, 21 pages, dated 23 October 2026.
DOI: 10.5281/zenodo.23591626.

- Source SHA256: `9057345134af90fafb7d5516bbdd4e48444c6fea345280cc8629009c0380e0b7`.
- Complete article: 15 MDX reading chapters, 9,963 whitespace words including frontmatter/math/references.
- Main source sections 1–11, every numbered subsection, substantive appendices A/B/C and all 38 references have mapped destinations in the JSON companion.
- All 16 numbered equations, Constitutive premise 1, Propositions 1–5 and complete proofs, unnumbered conservative-extension proof, both figures and all 4 tables retained.
- Two figures were recreated as accessible authored SVG from the source's stated model values, with matching explanatory caption/alt content.
- Narrative prose was rewritten for the site's direct voice; no em dashes introduced. The scientific comparison targets and source hypotheses remain explicit.
- Formative-history Eq. (2) remains the paper's mandatory premise, with concise editorial distinction from the block paper's adult-scoped application and universal ancestry analysis. No alteration of published SPC-2 A1–A3.

## Verification actually executed

- Read entire supplied PDF via text extraction; inspected equation layout in representative rendered pages, including Appendix A radicand/timer formulas.
- All 15 MDX files compiled using the project's remark-frontmatter/GFM/math and rehype-katex pipeline with strict KaTeX error checking.
- All 16 equation anchors, 5 proposition anchors, all source section/subsection anchors, 2 figure assets and full bibliography present.
- Independent peer agent reviewed full content/math correspondence and found no math/proof defect. Fixed its identified bibliography line wraps and removed public conversion-administration notes.
- Ran `python3 public/publications/consciousness/new-papers/temporal-passage/temporal-component-checks.py`; all finite/arithmetic checks passed. Output: `temporal-passage-checks.json`.

## Source and execution limitations

The reachable Zenodo record 23591626 exposed only `Experienced_Temporal_Passage.pdf`. Matching TeX, original figure files, original `checks/temporal_construction.py`, original README and Boolean-check code were not supplied. Their publication-reported executions remain reported rather than independently certified. The new independent component-check script is clearly labeled; it does not claim to be the original script or validate human uptake/experiential constitution. No third-party literature files were downloaded or redistributed. Browser/build verification belongs to the lead's integrated run.

## Administrative adaptation

Title page/abstract/contents are represented by article identity and introductions rather than duplicated as standalone reading chapters. The abstract's substantive claims appear in the body; substantive appendices and methodological limits are preserved. Headers, footers, page numbers and layout artifacts were removed. Bibliographic wording is preserved with typesetting line wraps normalized and resolver links added.
