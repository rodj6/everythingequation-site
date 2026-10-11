# Reflective alignment — website integration

Complete local integration of Jeremy Rodgers’s **Reflective Alignment and AI Consciousness: Awareness, Agency and Recursive Cognitive Scaffolding**, Version 2.1, 11 October 2026. DOI: https://doi.org/10.5281/zenodo.23294465. No live website was published or changed.

## Reading and discovery

- **Main article:** `/consciousness/ai-alignment` — “AI alignment through understanding.” The opening presents the framework’s answer, followed by the philosophical argument, Proposition 7 comparison, consciousness and welfare position, practical programme and complete contents.
- **Continuous complete edition:** `/consciousness/ai-alignment/read` — all source content, with reviewed chapter titles and introductions, original section headings, stable anchors, full proofs, references and pre-rendered accessible mathematics.
- **Prominent entrances:** homepage hero button and feature; feature immediately after the Consciousness hero; research-hub feature, programme navigation and publication listing; research map; article and paper listings.
- **Machine access:** complete Markdown with original mathematical source, section search, dedicated and programme manifests, sitemap, Atom feed, research graph, `llms.txt`, canonical metadata, ScholarlyArticle data and a 1200 × 630 social card.

The supplied website is preserved as the baseline. Existing scientific editions remain in place. The programme now identifies seven publications: its foundation and six connected investigations. No new framework or dependency was introduced.

## Source coverage

The matching editable-source package’s compiled PDF and the supplied authoritative PDF produce **identical complete layout-preserving extracted text**. The packaged publication PDF is the authoritative attachment, verified by SHA-256. Original source and a reproducible converter are included.

| Material | Preserved | Complete-edition locations |
|---|---:|---|
| Abstract and source sections | Abstract + 15 | `#abstract`, `#section-1` through `#section-15` |
| Subsections and paragraph headings | 36 + 22 | Detailed source locators in coverage JSON |
| Definition | 1 | `#def-1` |
| Propositions and complete proofs | 7 + 7 | `#prop-1`–`#prop-7`, `#proof-1`–`#proof-7` |
| Numbered equations | 25 | `#eq-1`–`#eq-25` |
| All mathematical expressions | 295 | 272 inline + 23 display blocks; original TeX and MathML |
| Source table | 1 | `#table-1` |
| References | 54 | `#ref-1`–`#ref-54` |
| Citation relationships | 90 occurrences / 110 links | Original association and order retained |

The full Scope discussion, premises, counterexamples, numerical examples, research programme, source-access qualifications, authorship, AI-assistance disclosure, funding statement and collaboration invitation remain in the continuous edition. The private protocol remains access on request; no unpublished instructions were added.

`docs/alignment/SOURCE_COVERAGE.md` gives the compact section map and reproduction instructions. `docs/alignment/source-coverage.json` maps every source section, subsection, paragraph heading, definition, proposition, proof, equation, mathematical expression, table and reference to its source and website location. The public coverage inventory is available at `/publications/consciousness/alignment/source-coverage.json`.

## Verification

- **Content:** complete HTML and Markdown prose/math round trips to the prepared source; independent audit of all 226 source prose paragraphs in order, exact original mathematical annotations, all proof prose and citation relationships. No omissions, duplicate article anchors, broken source fragments or KaTeX errors found. Ambiguous multi-row equations 12–14 were visually checked against the authoritative PDF.
- **Production:** TypeScript and the full Next.js production build passed using the project’s documented `SKIP_ZENODO=1` mode. This uses supplied/cached publication identity. Optional remote metadata refresh was not validated.
- **Discovery:** 149 generated-output checks passed for metadata, DOI identity, inventories, search, article listing, sitemap, feed, graph and downloads.
- **Integration:** 767 generated-output checks passed, covering 441 internal destinations/fragments, complete crawlable initial HTML, all 295 mathematical representations, packaged PDF identity, CSS assets, keyboard-focusable equation/table regions and preservation of major existing editions.
- **Responsive implementation:** desktop and mobile CSS layouts, focus states and horizontal equation/table scrolling are supplied. The social card was rendered and visually inspected.

**Verification limit:** browser control was unavailable. No desktop/mobile browser screenshots, browser interaction tests, live HTTP tests or remote DOI-resolution tests were performed. Static output checks do not substitute for a visual browser review. Existing screenshots elsewhere in the baseline project are historical evidence, not screenshots of this integration.

Detailed results are in `docs/alignment/production-build.log`, `discovery-verification.json`, `production-output-verification.json`, `independent-content-review.json` and `baseline-preservation.json`.

## Use the package

This is the full Next.js project, ready for the existing deployment workflow. Build caches, installed dependencies and Git history are omitted. Generated article content, source files, assets, lockfile and verification records are included.

```sh
npm ci
SKIP_ZENODO=1 npm run build
node scripts/verify-alignment-discovery.mjs --static
node scripts/verify-alignment-output.mjs
npm start
```

The discovery verifier also accepts a production-server URL for an additional HTTP check. Publication remains a separate step.
