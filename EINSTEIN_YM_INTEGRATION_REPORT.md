# Einstein and Yang–Mills reading editions

## Baseline and source identity

The implementation starts from the redesigned `everythingequation-site.zip`
supplied on 12 November 2026. SHA-256:
`f97b9d2f3b6845272bcb2481f45c7226bf62dd816f0cb394982a29fd0569b3ad`.
The archived Git HEAD is `49eaf47068f8c9f9a2611de864c945df34bc2b92`. The supplied working-tree files,
rather than an assumed clean commit checkout, control this update.
Git history is excluded from the replacement package.

It preserves the redesigned graphite/brass reading library, the instrument
Atlas with Instrument/Boundary/History views, the earlier paper editions,
stable addresses, and CSP/security configuration.

The three controlling attachments are byte-identical to the currently public
Zenodo PDF files. Their attachment names, official names, hashes and record
metadata are recorded in `docs/einstein-ym/publication-checksums.json` and
`doi-download-verification.json`.

## Reading paths

| Work | Reading entrance | Publication |
| --- | --- | --- |
| Einstein 1916 reconstruction | `/source-readout/einstein-1916` | `/papers/einstein-1916`, DOI 10.5281/zenodo.24064553 |
| Yang–Mills flagship | `/source-readout/yang-mills-reconstruction` | Shared `/papers/yang-mills`, DOI 10.5281/zenodo.24173681 |
| Mathematical companion | `/source-readout/yang-mills-companion` | Same shared record |
| Yang–Mills pair | `/source-readout/yang-mills` | One record, two distinct complete reading editions |

The shared hub leads with the Shadow Theory reconstruction, identifies Jeremy
Rodgers as the originator of Shadow Theory, source–readout and Source Lift,
and credits OpenAI for the underlying Lean work. The conventional mathematical
companion has its own full reading path and its own PDF. The shared registry
has one publication entry; the separate editions are represented as parts of
that shared record in structured data.

The Einstein edition follows the calibrated metric, comparison connection,
curvature, action, energy, matter, conservation, fluids, electromagnetism and
observational chain, followed by all three substantive appendices. Its complete
historical equation correspondence remains available as a web table.

The Yang–Mills editions preserve their entire mathematical development,
including the corrected formulas and the source/amendment/provenance registers.
They retain the ordered mesh/volume quantifiers and the actual hypotheses of
the centered-trace and comparison results. The positive account is the explicit
construction and recovery. No positive mass-gap conclusion or new formal
certification is added.

## Reading formats and source recovery

The public Zenodo records currently host the PDFs without editable sources
or supplementary packages. An earlier Einstein public release supplied the
LaTeX whose compiled PDF exactly matches the controlling Einstein attachment.
It was converted to MDX with semantic KaTeX/MathML, explicit equation tags,
cross-chapter references and tables. That matching source archive and the
previously supplied public verification package are included as downloads;
the latter's mathematical suites were not replayed for this website update.

No matching final Yang–Mills LaTeX package was available. The older source
package was inspected as provenance, not substituted for the final PDFs.
The site already has a PDF-only technical-edition mechanism. The new converter
uses the same method: semantic HTML prose and exact cropped vector expressions
with visible or expandable searchable linear transcriptions. Complex
formula-bearing derivations and tables use bounded vector panels. These are
individual mathematical blocks, not page scans or PDF embeds. They retain
the original notation. Their text alternatives are linear transcriptions,
not semantic MathML. This accessibility distinction is included in the
manifests and machine-readable discovery description.

The web editions retain substantive scholarly prose where it already explains
the proof clearly, reflow its paragraphs for reading, and add distinct article
entrances and contextual links. They do not replace the derivations with
synopses.

## Atlas and discovery

New research entries:

- `gravity-einstein-1916`
- `yang-mills-source-readout`
- `yang-mills-mathematical-companion`

A Source Lift tour connects the constructions. The gravity reading tour also
includes Einstein. A new question thread links the wider explanation and
the complete proofs. All added relationships are conceptual reading links;
none silently transfers a theorem's physical hypotheses.

The new records feed the publication and article lists, homepage and programme
features, full-text search, reading manifests, complete Markdown, sitemap,
Atom feed, `llms.txt` and research graph. The prepared pictures, 3D engine
and Boundary/History view definitions are unchanged.

The Yang–Mills hub includes verified links to OpenAI's announcement, the
October formal source distribution and the academic group's assessment.
No checked revision-level identity between those repositories and the papers'
expanded input is claimed.

See `EINSTEIN_YM_COVERAGE.md` and its JSON companion for source mappings,
`EINSTEIN_YM_VERIFICATION.md` for actual test results, and
`EINSTEIN_YM_FILE_CHANGES.json` for the complete inventory.


## Delivery status and remaining limits

All 188 reading chapters are included, with original downloads and the
source-to-web mappings. Both ordinary and actual adapter-backed production
builds passed, as did the expanded source, artifact, HTTP, discovery and
security checks. No build or packaging blocker was found. See the verification
report for exact counts and current-run receipts.

The Yang–Mills complete Markdown downloads are full searchable linear source
transcripts. Their exact notation is available in the chaptered web editions
as vector mathematics; neither the Markdown nor the linear image alternatives
are presented as semantic mathematical markup. This follows the existing
PDF-only edition convention and is distinct from Einstein's semantic MDX and
MathML edition.

Live 3D could not render in the testing browser; the prepared-picture fallback
and interaction were verified. Actual mobile viewport and live deployed
Vercel behavior remain untested. No new remote setup is required by this
integration. The owner should follow `REPLACEMENT_INSTRUCTIONS.md`, review
newer personal work and perform the post-deployment checks there.
