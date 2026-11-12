# Yang–Mills reading-edition conversion

The authoritative inputs are the supplied 530-page flagship PDF and 458-page
companion PDF. Their current Zenodo record contains only those two PDFs.
Earlier LaTeX was examined as a possible aid but is an older manuscript, so it
was not substituted for the final editions.

The conversion follows the site's existing PDF-only Source–Readout convention:
semantic prose is reflowed into HTML, while mathematical glyphs are preserved
as source-vector expressions. Linear text alternatives accompany the vectors
for search and assistive access. These alternatives do not encode fraction,
matrix or script topology as LaTeX or semantic MathML. The visual expressions
retain that topology exactly. No whole PDF page is embedded as the article.

The sources are divided into 91 flagship and 72 companion reading chapters,
with long source units split into approximately eight-page reading parts.
Administrative contents pages and repeated running headers/page numerals are
replaced by web navigation and source locators. Abstracts, authorship,
funding, appendices, amendment registers and all references are retained.

The source-block inventories account for all 7,394 flagship and 5,944 companion
non-administrative text blocks. Each original block maps to a stable web
anchor, including where the PDF producer fragmented a single expression into
several source blocks. After joining the shared baselines, a complete scan
found no remaining overlapping same-baseline block pairs assigned to different
web objects.

Source tables are preserved as exact vectors with accessible inherited-column
transcriptions. Eighteen flagship table regions and three companion regions
include continued table pages. Long PDF text blocks are split at paragraph
indents and safe glyph-free vertical boundaries; every selected span belongs
to exactly one output piece. Live prose paragraph boundaries and discretionary
line-end hyphens are repaired separately. Mathematical source panels keep the
printed glyphs.

The final reference pass adds 1,201 flagship and 1,028 companion item anchors
for sections, numbered equations, formal items and bibliography entries. It
links recognizable section, formal-statement, equation and reference mentions
within each edition. The bibliographies contain 22 flagship and 21 companion
entries.

## Reproducing the conversion

Run from the project root with Python, PyMuPDF and the bundled original PDFs.
The converter accepts `--input /path/to/original.pdf` when needed, and otherwise
uses `public/publications/source-lift/<id>/paper.pdf`.

For each of `yang-mills-reconstruction` and `yang-mills-companion`, run:

```
python scripts/convert-einstein-ym.py --id <id>
python scripts/refine-source-lift-panels.py --id <id>
```

After both conversions, restore the no-header continuation of the companion's
editorial-amendment table:

```
python scripts/fix-source-lift-table-continuation.py
```

Then for each id:

```
python scripts/refine-source-lift-prose.py --id <id>
python scripts/link-source-lift-references.py --id <id>
```

The full source inventories in `docs/einstein-ym/ym-source-inventory.json`
control the stable-item linking pass. Regenerate the site content maps after
conversion and run the edition verifier. Derived formula inventories must
match the set of referenced mathematical assets; remove superseded unused
crops only after confirming that agreement. None of these mathematical
conversion commands is invoked by an ordinary website build.

These are source-fidelity and presentation checks, not a new formal
verification of the underlying Yang–Mills construction.
