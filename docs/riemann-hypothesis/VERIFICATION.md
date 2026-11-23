# Riemann Hypothesis Version 2 website update

Version 2 is the primary reading edition at `/articles/riemann-hypothesis` and citation at `/papers/riemann-hypothesis`. The site identifies the repaired referee edition, retains a separate Frozen Version 1 archive link and PDF, and directs readers to the final assembly and the expanded literature-input audit. Author credit and the reported limits on Lean and print-source verification follow the manuscript. [Source provenance](source-provenance.md)

## Changes

- Rebuilt the reader from all 1,061 pages of the Version 2 PDF. The same 154 Version 1 chapter URLs remain available and Section 18.1 has a new route. The audit compares the edition changes by section, mathematical result, and native PDF destination. [Edition comparison](version-comparison.md)
- Rebuilt the sitemap, discovery metadata, chapter manifest, searchable text and Markdown transcript against Version 2. Kept the proof order, numbering and bibliography. The coverage ledger records source page, chapter, anchor, bounding box and transcription status. [Coverage ledger](coverage.json)
- Preserved visible mathematics and table layouts with source vectors. Selectable prose, confirmed LaTeX and provisional notation remain available beside the printed notation. The printed-source disclosures provide a full page view directly inside the reader. Source vectors preserve notation whose transcription is provisional.
- Included all six tables. Counts by table are 27 fields, seven inputs, 24 grouped rows for 28 fields, 14 frontier branches, 60 fields, and 53 fields. Table 6 retains all 20 overlap mappings. [Targeted notation and table audit](targeted-audit.md)

## Source identity

The active PDF SHA-256 is `dbb02e1656b98611c49380f6f4b3af07b45e0022de5525d43d70b3aaf210a0e8`. The frozen Version 1 PDF SHA-256 is `bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3`. The versions are identified separately in the manifest and downloads.

## Verification

The verification covers preservation and display of the manuscript, its links and its edition metadata. It does not independently verify the mathematical argument or run Lean.

The source, TypeScript and security-header unit checks passed. These receipts reconcile the delivered reading edition.

| Check | Result |
| --- | ---: |
| Source pages and chapter routes | 1,061 pages across 155 routes |
| Source spans and mapped Markdown blocks | 580,253 spans in 16,149 blocks |
| Native PDF destinations | 3,755 |
| Native PDF link annotations represented | 4,666 |
| Printed-page vector primitives compared | 3,115,233 |
| Search index passages, including individual table rows | 5,648, including 185 table rows |
| Checked LaTeX overlays | 20 |
| Security-header unit checks | 22 passed |

The copied text is provisional for 3,627 display blocks, 82,332 inline runs and 17 table panels. Printed notation is present in the associated vectors. The four unresolved text glyphs are underbrace components in Section 8.15, PDF page 581, block `p-0581-b-07`. The printed vector shows the brace, and the targeted audit gives a checked transcription for that expression. [Targeted audit](targeted-audit.md)

The full Next.js 16.4.5 production build passed. Production verification matched all 155 chapter bodies and the versioned manifest. The discovery check passed for the reader, citation page, chapter routes, sitemap, Atom feed, research graph and machine-readable reading links. The built content security policy was verified on 1,341 HTML routes. The build used Node 24 with a 3,584 MB JavaScript heap and two build threads in the verification environment.

The real Chromium run passed on the final production build. It tested mobile page width, independently scrollable long inline mathematics and tables, focus and clipboard copying of the revised Section 17.4 formula, the Version 2 and Frozen Version 1 DOI labels, search navigation to Theorem 17.5 and Table 6 row 53, the visible proof without JavaScript, and visible vector and selectable table panels for all six tables on desktop. Browser screenshots were inspected locally during verification.

The ZIP is prepared for review and public deployment remains a separate step.
