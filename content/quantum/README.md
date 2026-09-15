# Quantum measurement publication editions

These are the **fixed Version 2 publications of 15 September 2026**, by Jeremy
Rodgers, Independent Researcher. Publication identity lives in
`src/config/quantum.ts`; the integrated monograph and both companion papers retain
separate provenance, statements, proofs and numbering. The TOE monograph remains
unchanged in `content/monograph/` and at `/monograph`.

## Authoritative inputs

The exact supplied bytes are committed under
`public/publications/quantum-measurement/`:

| ID | Supplied source | DOI |
|---|---|---|
| monograph | Shadow_Quantum_Measurement_Monograph_v2.tex | 10.5281/zenodo.22774584 |
| pilot-medium | Pilot_Medium_Bell_Resolution_v2.tex | 10.5281/zenodo.22774634 |
| massive-configuration | Event_Law_Resolution_v2.tex | 10.5281/zenodo.22774739 |

Each ID has its original `.tex`, original `.pdf`, and complete generated `.md`.
The monograph also has chapter Markdown downloads in `chapters/`.
Original source/PDF SHA-256 digests are recorded in `audit.json`. Never silently
rewrite the fixed scientific text. A new publication version requires its own
authoritative source, metadata update, regenerated edition and source audit.

## Generated outputs and routes

`scripts/convert-quantum.mjs` converts the original TeX into semantic HTML with
KaTeX HTML **and MathML**, plus portable Markdown with the source macros expanded.
Generated HTML resides in the three publication directories here. Do not edit
these files manually. `index.json` supplies every page, section and display count.

The monograph has **53 reading pages**: 3 frontmatter sections, 35 chapters,
10 part introductions, 4 appendices, and the bibliography. Part introductions are
separate pages so no intervening scientific prose disappears. Companion papers
are each available in full on a single page, including their appendices and
bibliographies.

- `/quantum-measurement/monograph` — complete contents and reading paths
- `/quantum-measurement/monograph/[slug]` — complete chapter or part
- `/quantum-measurement/pilot-medium` — complete pilot paper
- `/quantum-measurement/massive-configuration` — complete massive paper
- `/quantum-measurement/manifest.json` — all publications and readable pages
- `/quantum-measurement/monograph/manifest.json` — monograph inventory
- `/publications/quantum-measurement/conversion-audit.json` — public source audit

Original TeX labels are literal HTML IDs, including colons, and all cross-references
resolve to their target page and label. Numbered headings without source labels
use `section-<number>`. Theorems, propositions, lemmas, definitions, assumptions,
examples, counterexamples and remarks retain the original shared counters. Align
environments retain individual equation-row numbers. Ordered interaction lists
retain their P1–P4 labels and Roman sublabels.

## Reproducible conversion and verification

From the repository root, with the regular Node dependencies installed:

```text
node scripts/convert-quantum.mjs
node scripts/audit-quantum.mjs
```

The converter defaults to the committed exact `.tex` inputs. It does not rewrite
the original TeX or PDFs. For initial import from an explicitly supplied source
directory, `node scripts/convert-quantum.mjs --source-dir ..` copies the three
named original TeX/PDF pairs and then generates the editions. Do not use that
import option with other sources under an unchanged publication version.

Conversion is deterministic. A normal website build uses the committed generated
HTML and does not need to rerender thousands of formulas. The converter exits
nonzero for unknown TeX commands/environments, malformed math, unresolved
references, duplicate IDs, source structure mismatches, or missing prose words.
It parses every source text node and compares its word inventory with actual
rendered DOM prose, excluding mathematical renderings; the per-page results and
source text hashes are in `audit.json`. This is a completeness check, not a proof
of scientific correctness. Original source statements remain authoritative.

The fast audit checks the original source/PDF hashes, conversion status, all
rendered internal references and source anchors, MathML, and Markdown downloads.
For an additional comparison with the supplied typeset PDFs:

```text
python scripts/verify-quantum-pdf.py
```

That optional check requires PyMuPDF and writes `pdf-numbering-audit.json`. It
checks every labelled result heading and equation number against text extracted
from the supplied PDFs. Both audit scripts are read-only with respect to science
and original publications. `parse5` is used for semantic DOM validation.

## Specific limitations of the supplied publication materials

Both source files request a massive-writer figure that was not supplied. This is
also visible in the supplied PDFs themselves: an empty labelled placeholder on
**monograph PDF page 178** (printed page 167), and **massive paper PDF page 27**.
The monograph requests `massive_event_mechanism_figure.pdf`; the paper requests
`event_mechanism_figure.pdf`. The web editions retain the original captions and
explicitly identify the absent figure; no replacement plot is represented as
part of either frozen publication.

The massive paper names two supplementary files that are absent from the supplied
workspace: `reproducibility/integration_verification.py` and
`reproducibility/numerical_checks.py`. Their published discussion is preserved,
and a web-edition note identifies their availability limitation. This does not
relabel the publication's numerical claims as checks performed by this website.

The monograph bibliography also names inherited internal manuscripts, checkpoint
notes, foundation source files and a working audit. Those entries are preserved
as bibliography, not presented as locally downloadable supplied attachments or
external validation of this programme.
