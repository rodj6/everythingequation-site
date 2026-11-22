# Riemann Hypothesis reading edition verification

**Status: provisional website checkpoint.** This update is packaged for local review. The complete, checked mathematical transcription remains open.

## Site changes

- The reader at `/articles/riemann-hypothesis` spans the title, abstract, contents, 18 numbered sections, and bibliography. The manuscript outline and additional result boundaries divide the reader into 154 permanent routes.
- An independent publication record at `/papers/riemann-hypothesis` gives the verified Zenodo DOI and credits Jeremy Rodgers for the reconstruction and Levent Alpöge and Anthropic’s Claude for the underlying argument.
- The homepage, article and paper indexes, sitemap, feed, research graph, and `llms.txt` link to the work. The reader has full-text search, a chapter manifest, a Markdown transcript, and the exact PDF.
- The HTML pages contain the transcript and proof links before any client JavaScript runs. Checked displays include semantic MathML and selectable LaTeX. Provisional notation is labeled, and vector panels show the source shapes of display and compound inline mathematics.

## What the checks establish

The controlling PDF has 980 pages and SHA-256 `bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3`. The PDF shipped in this checkpoint has the same checksum. The [provenance record](source-provenance.md) records the Zenodo and DataCite verification and the search for the matching editable source.

The [targeted audit](targeted-audit.md) documents the review of the endpoint conventions, Propositions 7.102 and 7.114, Lemma 10.65, Propositions 17.3 and 17.4, and Theorem 17.5. The [checked LaTeX overlays](checked-math.json) apply to specific displays. The [Section 2 fixture](section-2-transcription.md) is a separate comparison record.

[Coverage](coverage.json) enumerates every PDF page, the generated block and reading anchor, source bounding boxes, and the exact blocks and inline runs still needing notation review. Per-block comparison tests verify that the generated Markdown and production reader carry the same conversion. That validates the delivery pipeline. Faithfulness of each proposed transcription must still be checked against the source, including attachment of subscripts, proof paragraph joins, wrapped Lean identifiers, and the table transcription.

| Coverage measure | Checkpoint result |
| --- | ---: |
| PDF pages represented | 980 |
| Reading divisions | 154 |
| Mapped manuscript and Markdown blocks | 15,251 |
| Native PDF destinations | 3,532 |
| Native PDF links preserved | 3,864 |
| Search passages | 4,980 |
| Checked LaTeX displays | 18 |
| Display blocks awaiting checked transcription | 3,434 |
| Compound inline runs awaiting checked transcription | 38,941 |
| Table panels awaiting transcription review | 3 |

The four unidentified glyph occurrences are CMEX10 brace tips in PDF page 547, block `p-0547-b-07`, in Section 8.15. The embedded vector retains the original shapes. The notation remains provisional on 971 source pages.

## Browser and release status

The available terminal Chromium fails at startup because the environment denies its process socket. The cloud browser could not connect to the local Next server. Clipboard, keyboard interaction, and mobile layout therefore await the packaged browser smoke test in an environment with browser access. HTTP and build output checks cover delivery and static indexing.

The supplied Next.js 16.4.2 pin triggered a security build error. The package updates Next.js and its MDX integration to 16.4.5 within the same release series. The full-site production build and local HTTP discovery passed earlier with the baseline dependencies. The final full-site Webpack and Turbopack attempts on 16.4.5 were killed during compilation in this environment. A full rebuild and site-wide security header verification remain release checks for the patched package. [Next.js security release](https://nextjs.org/blog/november-2026-security-release)

The updated full source tree passed TypeScript and the source coverage and PDF link checks. An isolated production build using the same reader code and 16.4.5 successfully prerendered all 154 divisions. HTTP verification matched each initial chapter body to its generated fragment, with the 18 verified MathML displays checked separately. The isolated test covered the reader and manifest. The earlier full-site discovery test covered the homepage, Articles, Papers, sitemap, feed, graph, and canonical URLs.

The final editable manuscript, with its includes, macros and bibliography, would allow verified semantic conversion across the remaining passages. Keep the website checkpoint provisional until the exact notation, proof text and references compare successfully to the controlling PDF.
