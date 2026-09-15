# Quantum Measurement integration — local review

Completed 15 September 2026. Changes are local and uncommitted; nothing has been pushed or deployed.

## Preview

- Programme: http://127.0.0.1:3000/quantum-measurement
- Complete monograph: http://127.0.0.1:3000/quantum-measurement/monograph
- Pilot paper: http://127.0.0.1:3000/quantum-measurement/pilot-medium
- Massive-configuration paper: http://127.0.0.1:3000/quantum-measurement/massive-configuration
- Atlas: http://127.0.0.1:3000/atlas?focus=measurement-programme
- Accessible Atlas guide: http://127.0.0.1:3000/atlas/quantum-measurement

The local production server is running on port 3000. To restart later, run `npm start` from this repository. The canonical public URL remains everythingequation.com.

## What changed

- Complete technical editions: 53 monograph reading pages (35 chapters, four appendices, ten part introductions, three frontmatter sections and bibliography), plus both full companion papers.
- Original PDF and LaTeX downloads, complete and chapter-level Markdown, stable source anchors, mathematical markup, linked references, publication provenance, contents and chapter navigation.
- A programme overview with separate pilot-medium and massive-configuration walkthroughs. Their diagrams are explicitly schematic. Visitors can select steps, play or pause the explanation, and follow the exact construction into its paper. Mobile uses a compact vertical diagram; reduced motion keeps the controls manual.
- Seven new Atlas nodes, 15 connections, two reading traces and an accessible field guide. Mathematical dependence and conceptual relationships have separate descriptions and line styles.
- Homepage feature, desktop/mobile navigation, papers catalogue and publication records, research status, research map, framework/About summaries and relevant TOE cross-links.
- Historical quantum material remains available with its original section links and a clear current-status/provenance introduction. Seven incorrectly HTML-escaped inequality symbols were repaired for KaTeX, and the historical comparison table gained a narrow-screen scroll container. Its scientific claims were not rewritten.
- Shared publication metadata, structured data, sitemap, feed, research graph, AI-facing text and inventories. The existing TOE monograph remains its own publication and full web edition.
- Deterministic conversion, independent audits and maintenance instructions. No hand edits to the frozen publications' scientific content.

## Verification

| Check | Result |
| --- | --- |
| Production build and TypeScript | Passed; 224 static outputs generated |
| Source structure | 216 formal statements, 189 proofs, 20 tables and 72 bibliography entries retained |
| Source references | All 916 original labels resolve; zero duplicate IDs or missing rendered reference targets |
| Original downloads | All six PDF/TeX files match the supplied originals byte for byte |
| Independent prose check | All 651 sampled substantial proof-prose passages retained; conversion audit reports no missing source prose words |
| PDF numbering | 608 labelled equation numbers and 208 labelled result headings checked against the supplied PDFs |
| Deterministic regeneration | 123 files compared before/after conversion; zero byte changes |
| Production HTTP check | 89 routes, 1,097 local links, 62 downloads and five machine endpoints; zero failures |
| Complete mobile corpus | All 55 reading pages visited in Chrome at 390px; exactly 7,078 MathML expressions, no math errors, collapsed prose paragraphs or document overflow |
| Desktop/mobile page review | 17 principal pages at 1440px and 390px; no page errors, malformed mathematics, blank pages or horizontal document overflow |
| Reader navigation | Contents links, citations, theorem anchors and next-chapter navigation verified |
| Interactive overview | Both modes, individual stages, automatic progression, pause, reduced motion and mobile menu Escape handling verified |
| Responsive overview | Additional checks at 320px, 768px and 1280px passed |
| Atlas | Desktop/mobile canvas, selected-node links, equations, interfaces, relationship legend and both traces checked; no page errors |
| Existing core pages | Homepage, papers, framework, research map, status and TOE hub/chapter checked |
| Patch whitespace | `git diff --check` passed |

Browser inspection led to corrections for mobile overflow, historical math encoding, theorem-link spacing and an overly broad paragraph-spacing rule. The corrected reader passed the complete mobile corpus check.

Audit records are in `content/quantum/audit.json`, `content/quantum/independent-audit.json` and `content/quantum/pdf-numbering-audit.json`. Local browser/HTTP reports and screenshots are in `tmp/production`, `tmp/overview-browser-results.json` and `tmp/quantum-site-verification.json`; these local review artifacts are ignored by Git.

These checks assess conversion, publication identity and website behavior. They do not constitute independent scientific validation of the research.

## Specific source limitations

1. **One figure is missing from the supplied publications themselves.** The monograph requests `massive_event_mechanism_figure.pdf` and the massive paper requests `event_mechanism_figure.pdf`. Both supplied PDFs contain an empty labelled placeholder: monograph PDF page 178 (printed page 167), and massive paper PDF page 27. The original captions and figure numbering are preserved, with an explicit source note. No replacement plot has been invented.
2. **Two referenced supplementary scripts were not supplied:** `reproducibility/integration_verification.py` and `reproducibility/numerical_checks.py`. Their discussion remains in the complete paper, alongside an availability note.
3. DOI strings and metadata match the supplied objective and publications. The DOI resolver redirected to Zenodo, but Zenodo returned HTTP 403 to this environment. External record retrieval could not be independently checked here; the local publication downloads are verified and working.

There are no known implementation blockers. Supplying the missing figure and supplementary scripts would allow a later, provenance-preserving supplement update.

## Recheck and maintain

```text
npm run convert:quantum
npm run audit:quantum
node scripts/audit-quantum.mjs
python scripts/verify-quantum-pdf.py
npm run build
npm start
npm run verify:quantum-site
```

The optional PDF-numbering check requires PyMuPDF. For comparison against separately supplied originals, use `npm run audit:quantum -- --source-dir ..`. See `content/quantum/README.md` and `SITE_MAINTENANCE_MANUAL.md` for conversion boundaries, metadata ownership and future version updates. Visual inspection remains part of release review.
