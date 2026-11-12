# Independent Yang–Mills reading-edition review

Review date: 12 November 2026.

This record separates an automated source inventory from a targeted independent
visual and HTML review. It does not claim an independent proof of the mathematics
or a human line-by-line reading of all 988 physical PDF pages.

## Source inventory and coverage locators

`ym-source-inventory.json` was extracted independently of the conversion ledger
from the two supplied PDFs. It records physical pages, section and subsection
headings, printed right-edge equation labels, numbered formal statements, and
caption-like table text. The companion often develops arguments in prose rather
than numbered theorem environments. Its zero numbered formal-environment count
does not mean that it contains no proofs. Caption-like matches include prose
references, and uncaptioned tables exist, so that count is not an authoritative
table count.

| Source | Physical PDF pages | Body starts | Headings | Printed equation labels | Numbered formal statements |
| --- | ---: | ---: | ---: | ---: | ---: |
| Shadow Theory and the Wilson Yang–Mills Construction | 530 | 4 | 352 | 750 | 77 |
| A Wilson Yang–Mills Construction | 458 | 3 | 277 | 730 | 0 |

The printed equation labels are unique within each work. The final independent
source-to-conversion mapping located 1,206 source items in the flagship and 1,010
in the companion, including the independently located table regions. That
mapping found no missing body pages or missing destination anchors. All 21
table-region destinations were additionally checked to be `sr-source-table`
figures rather than flattened prose. This is structural evidence of coverage,
not a mathematical equivalence proof or a substitute for the visual sampling
below.

## Targeted formula and prose samples

The review used the supplied PDF, the generated chapter HTML, and rasterized
generated SVG assets. SVGs were inspected as rendered images. These are bounded
vector formula or derivation regions, not page scans. No browser hydration or
production layout result is claimed by this document.

| Work | Physical PDF page | Chapter | Material inspected | Initial observation |
| --- | ---: | --- | --- | --- |
| Flagship | 5 | 003, source–readout and reflective mathematics | RF1 source, realization, history and observable chain | Formula geometry and tag are complete and legible. Running introduction prose retained discretionary line-end hyphens. |
| Flagship | 265 | 043, free Maxwell comparison hierarchy, part 2 | GP2 nonnegative reflected integral and surrounding proof | Formula, integration region, indices, limit and inequality are legible and unclipped. The proof paragraphs are retained. |
| Flagship | 526 | 089, correspondence with supplied text | Gaussian A1/A2 correspondence identities | Fractions, summation, terminal factors and signs are legible and unclipped. |
| Companion | 8 | 004, notation and analytic conventions | AB1 unhealthy/healthy field domains | Both set definitions, quantifiers and equation tag are legible and unclipped. |
| Companion | 270 | 041, Ward kernel separation, part 2 | Finite-group averaging formula | Averaging denominator, indexed sum, inverse action and explanatory lead-in are legible and unclipped. |
| Companion | 455 | 070, editorial amendments | A2 Gaussian prefactor amendment | Initial output split one source-line square-root formula between a source panel and the next paragraph. Reported for repair. |

Additional prose checks found that a single PDF text block can contain many
indented source paragraphs. Flagship physical page 448 and companion physical
page 311 initially became oversized HTML paragraphs. This retained words but
weakened the reading structure. The converter was asked to reconstruct paragraph
boundaries while retaining stable source anchors.

## Table checks

The PDF's tables use horizontal rules without vertical borders. PyMuPDF's default
`find_tables()` returned no tables on the checked flagship pages 20, 516, 518,
519, 520, 521, 522, 523 and 524, or companion page 4. A default table detector
therefore did not establish table coverage.

The source review identified two distinct tables on each of flagship pages 518,
519 and 521. The first table ends before the next table's heading or caption.
The claim-status register continues from physical page 521 through page 523.
Page 522 initially flattened the Item, Class and Reconstruction-status columns
and all rows into one paragraph. This was reported for repair to an exact table
region with an accessible row-and-column transcription. Companion physical page
4 contains an uncaptioned two-column notation table and was included in the same
repair request.

A complete source-drawing scan identified 18 flagship table regions. The
companion has three regions: the notation table on physical page 4 and the
formula-amendment table on physical pages 456–457. The last is a continuation
with no repeated header or top rule, which a two-rule detector misses. The source
raster was checked and this edge case was reported for repair. The independent
inventory now records all 21 regions and their source coordinates.

## Repair verification

The converter's regenerated A2 amendment on companion physical page 455 was
rasterized and compared visually with the supplied PDF. The square root and
exponent now form one complete expression in a single bounded vector panel,
with the full surrounding derivation. The original split between panel and
paragraph has been removed.

The regenerated flagship physical page 522 table was rasterized and checked
against the source. All three columns, the header and the complete visible
register through the radial-jets row are present. The companion physical page 4
notation table likewise retains both complete columns. The companion physical
page 457 continuation was separately rasterized: all five source rows, their
three-column association and closing rule are intact.

Tables expose a selectable HTML transcription in disclosure controls. Its rows
follow source visual text lines rather than merging every multiline conceptual
row. Exact vector geometry preserves the source's row associations and
mathematical glyphs. This is an accessibility limitation of the transcription;
the transcript is not an independently repaired semantic mathematical table.
Likewise the searchable formula transcripts are linear PDF text, not semantic
MathML, and visual exactness must not be confused with the quality of extracted
mathematical speech.

The semantic prose refinement retained each original source line and span in
exactly one output paragraph, with the original source anchor on the first
paragraph. It split 385 flagship source blocks into 850 paragraphs and 592
companion source blocks into 1,421 paragraphs. A separate panel refinement
handled oversized mixed prose and mathematics without cutting through glyphs.
After the final reference pass, the six sampled chapters contained 107 links.
Every in-edition local target among those links resolved to an existing HTML
file and anchor. Representative links include RF4, PC5, PF8, PF11, PC7a, AB2–AB5,
HC2, HC4, FS5, FS10 and FS13, plus the cited formal statements and bibliography.
The correspondence chapter has no live HTML links where its source text is
retained in exact vector panels; its independent source anchors remain mapped.

The flagship opening no longer contains the five observed broken words
`construc-tion`, `ex-plicit`, `math-ematics`, `Eu-clidean` or `mathe-matics`.
The formerly oversized flagship physical page 448 now has three live paragraphs
with at most 123 words each, alongside its bounded mathematical regions. The
companion physical page 311 has six live paragraphs with at most 215 words each.
The final independent locator reconciliation was rerun after the output freeze:
1,206 and 1,010 items, zero failures, zero missing body pages.

## Scope checks

The title-page and opening provenance statements credit Jeremy Rodgers with
Shadow Theory, the source–readout architecture and Source Lift, and credit OpenAI
with the underlying Lean construction. The supplied papers identify an expanded
natural-language input, without establishing an exact public upstream revision.
The companion retains its own independently developed construction and identity.

The source scope includes fixed-period mesh limits and a separately permitted
outer volume refinement, the declared realization and coupling inputs, and
distinct recovery and physical-selection claims. The amendments and claim-status
register are substantive. No positive physical mass gap or Millennium-problem
solution is asserted. These distinctions are recorded in `ym-editorial.md` and
were checked against the source openings and closing registers.

