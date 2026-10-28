# Constructive source and reader reading editions

These eight complete editions cover the five 27 October 2026 source-readout publications and their three supplied technical companions. Original PDFs and five verification archives are preserved under `public/publications/source-readout/constructive/`.

## Rebuilding

Install Python 3 and PyMuPDF (`python3 -m pip install pymupdf`). From the site root run:

```sh
python3 scripts/convert-source-readout-constructive.py
```

The default reads the original PDFs already bundled with this site and reuses its supplements. An optional `--input /path/to/extracted/archive` reads the original `Paper 1` through `Paper 5` directories. Rebuilding does not require network access, original external paths or extra article source files. The converter then writes the HTML chapters, `constructive.json`, source inventories and `constructive-audit.json`. The standard site build discovers the generated editions.

## Content and mathematical fidelity

The supplied new-paper archive contains PDFs, not LaTeX sources. The reading editions therefore do not fabricate LaTeX or MathML from linear PDF extraction. Ordinary prose reflows as semantic HTML. Inline mathematical runs, display equations, tables and mixed paragraphs with complex mathematical geometry use bounded vector panels taken from the original source. No complete PDF page is used as an article panel. Equation numbers, roots, fractions, matrices and script placement retain their source geometry. A conservative crop is used whenever selective glyph filtering fails its textual coverage check. Such a crop may contain a small adjacent descender; the priority is retaining every mathematical glyph.

Each panel has searchable alternative text, a source-page marker and an expandable linear transcription. Linear extraction is useful for search but does not encode fraction or matrix topology. The vector image is the exact visual notation. Every source text block other than the physical page numeral is accounted for in the coverage inventory. The original PDFs and complete text downloads remain linked from the article hub.

Single-number prose citations link to bibliography entries. The original publication references, result hypotheses and explicit open boundaries are retained. Main articles and technical companions remain separate documents. Companion files share the parent publication's verification archive and are not assigned an invented independent DOI.

`constructive-audit.json` records PDF hashes, page/block coverage, panel counts and conservative-crop diagnostics. Its block accounting is a conversion check, not an independent mathematical proof review. The archived verification programs have been preserved, not represented as executed by this converter.
