# AdS₄ and HaarCritical integration and verification

The AdS₄ reconstruction follows the existing first- and second-order boundary-ball editions in Gravity and holography. Its reader connects to both precursors and the Atlas. HaarCritical has a separate reader and citation record under Independent mathematics. Both editions appear in the publication indexes, sitemap, Atom feed, research graph and machine-readable reading links.

| Edition | Reader | Citation | Pages | Chapters | Native PDF links | Numbered tables |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| AdS₄ boundary-ball reconstruction | `/source-readout/ads4-boundary-ball-reconstruction` | `/papers/ads4-boundary-ball-reconstruction` | 84 | 48 | 736 | 7 |
| HaarCritical | `/articles/haar-critical` | `/papers/haar-critical` | 487 | 68 | 394 | 59 |

Both attached PDFs match their public Zenodo files byte for byte. The AdS₄ deposit contains the PDF. The site serves the original HaarCritical public verification ZIP. Its 314 file checksums and five documented receipt checks passed, including the finite checks accompanying Theorem 23.1A. The receipt replay used saved arithmetic and the standalone consistency checker. `docs/reading-editions/source-provenance.md` in the site archive documents the deposit titles, publication dates, and archive scope. [AdS₄ deposit](https://doi.org/10.5281/zenodo.24451446) · [HaarCritical deposit](https://doi.org/10.5281/zenodo.24451371)

The reader separates manuscript titles from verified deposit naming and distinguishes the conditions on the mathematical results. The AdS₄ entry traces linear blindness, second-order detection and reconstruction in the eligible classes. HaarCritical links its proof and certification map, finite-rank and asymptotic chapters, signed depth-one certificate and critical-radius results.

Every source page is represented in generated HTML with selectable text and a printed-page view. Individual formula, table and figure panels show the original notation on the reading route. Vector assets preserve both HaarCritical plots and their captions. The comparisons reconcile the complete printed-page primitive sequences to the PDFs, including 220,783 AdS₄ and 1,523,267 HaarCritical primitives. The ledger records source coordinates, chapter routes and anchors, table panels and checked or provisional status. `docs/reading-editions/TARGETED-AUDIT.md` in the site archive gives locations and conclusions for the targeted review.

The checked overlay set contains eight AdS₄ and five HaarCritical displays. The signed-window premise on HaarCritical PDF page 447 also has a checked inline square root. Dense provisional transcriptions remain marked. Original source notation, including symbols where font extraction is ambiguous, remains visible in the paired vectors. The website verification concerns representation and navigation of the manuscripts, with mathematical certification and companion-replay scopes recorded in the source.

The final source checks passed for 1,595 AdS₄ blocks and 9,104 HaarCritical blocks, including text parity with the Markdown transcripts and all 1,130 native PDF annotations. The indexes resolve 624 AdS₄ and 3,252 HaarCritical passages to reading anchors. Provisional display and inline copy runs number 486 and 4,868 in AdS₄ and 2,176 and 56,420 in HaarCritical. Two contour-integral extension glyphs remain labeled provisionally in HaarCritical PDF page 118, block `p-0118-b-05`, under “Integer moment order and independent tilt.” Both glyphs are present in the printed vector.

## Production checks

- The content generators, TypeScript check, full Next.js 16.4.5 production build, and new reader source and production verifiers passed. Production security headers passed on 1,463 HTML routes.
- The new production routes passed the canonical metadata, structured data, sitemap, Atom feed, `llms.txt`, graph, and index checks. The existing RH Version 2 reader and discovery checks passed, with its current and frozen PDF downloads preserved. The inherited gravity production suite passed 5,491 checks and verified 98 preserved publication files.
- Chromium verified both mobile readers at 390 CSS pixels, including wide notation, scroll-contained tables, keyboard-operated search and copy, and clipboard LaTeX. Desktop checks with JavaScript disabled confirmed proof text, MathML, vector notation, tables, both HaarCritical plots with their captions, and the existing RH and gravity entrances.
- Exact search checks jumped to AdS₄ Theorem 7.7 (`p-0063-b-16`) and the §7.7 stability chapter (`p-0070-b-03`), and to HaarCritical Theorem 22.W1 (`theorem-22-w1`) and the §25 critical radii chapter (`p-0477-b-11`).

## Vercel Web Analytics

The project now includes the standard `@vercel/analytics` SDK at lockfile version 2.0.1. The shared Next.js root layout renders one `<Analytics />` from `@vercel/analytics/next`. The RH paper page, reader landing page, and all 155 chapter pages share this layout. The production security policy already permits the same-origin analytics script and pageview requests through `script-src 'self'` and `connect-src 'self'`.

All 157 built RH paper and reader HTML pages referenced the analytics-enabled layout bundle exactly once.

Chromium used a local same-origin substitute for Vercel's deployment script and collector. The production CSP allowed the script and beacon. The RH citation page, reader landing page, and two chapters each produced one test pageview on navigation. Client-side navigation reused the same script, and a direct chapter visit loaded it once. The full production build and the 22 security-header tests passed.

After deployment, the live check is to open an RH page and look for a request ending in `/view` in the browser Network tab. [Vercel Web Analytics quickstart](https://vercel.com/docs/analytics/quickstart#deploy-your-app-to-vercel)

## Bundled manuscript hashes

| PDF | SHA-256 |
| --- | --- |
| AdS₄ | `550e43d28dba0e10012dbf446d1e941be9ba2f93dff6cd7c6ada53e91e8e655d` |
| HaarCritical | `e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af` |
