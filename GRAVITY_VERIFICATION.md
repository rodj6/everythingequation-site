# Gravity and holography release verification

Executed on 6 November 2026 with Node 24.22.1, npm 11.9.0 and
Next.js 16.4.2. The dependency lockfile, runtime constraints, CSP implementation,
and Vercel configuration are unchanged. No GitHub, production, or account
settings were modified.

| Check | Result |
| --- | --- |
| Clean `npm ci` and `npm run typecheck` | Passed. The final production builds also ran TypeScript checks. |
| Source, ledger, strict KaTeX and original downloads | 3,163/3,163. All 156 coverage entries, 18 new chapters, 704 math expressions including 94 displays, the source table, all 98 inventoried baseline publication files and 15 Deser source/download files checked. |
| Next.js `npm run build` and CSP postbuild | Passed. Next generated 1,025 pages in its build progress count; the postbuild installed policies for 989 HTML routes. Maximum policy: 1,813 bytes. |
| Ordinary build artifacts | 5,343/5,343. Included the rendered ledger anchors and math annotations, 262 distinct internal targets, all chapter paths, links, article and publication indexes, manifests, full-text search, sitemap, feed, `llms.txt` and graph. |
| Locally served production output | 5,826/5,826 edition checks, including all four downloaded PDF responses and 404. The separate served security suite passed 993/993 responses, including 989 HTML documents, with exact inline script hashes. |
| Existing regressions | 22/22 CSP unit tests; read-only built security check; external metadata and Zenodo proposal checks; 31,186/31,186 spectral edition HTTP checks; 14,300 legacy Source–Readout checks across 214 pages. |
| Real Vercel adapter | Passed with `@vercel/next@24.0.0` and `@vercel/build-utils@14.22.0`. The actual adapter lifecycle generated and postbuild patched `.next/output/config.json`. Read-only CSP verification covered 988 HTML documents, including 986 cached prerender `initialHeaders`, plus the fallback error policy. 1,055 routes stayed within the 1,900-rule budget. Adapter artifact edition checks: 5,344/5,344. |
| ZIP integrity and preservation | CRC and fresh extraction checked against the intended file inventory, retained baseline publications and the original four PDFs. |

The four coverage reviews compared the seven-page PDFs directly with the
articles and checked numbered equations, proofs, appendices, references
and scope limitations. The production verifier checked all 704 MathML
source annotations and associated section anchors. These checks do not
independently establish the underlying physical assumptions. Targeted
symbolic checks of the second-order construction confirmed the forced
shape equation, the curvature and two area contributions, the exact
energy and positivity bound, and the oscillatory mode equation. The
papers' full computational verification suites were not replayed.

Desktop Chrome loaded the production homepage, reading hub, first-order
kernel and its direct second-order companion. It displayed 36 and 62
math elements respectively on those two technical pages without KaTeX
errors. Source–Readout search returned the new chapters for “oscillatory
comparison”; opening the result displayed the four-row bounds table.
The Atlas inspector opened the shared horizon/entropy node and its
second-order proof link in the 2D view. The gravity node opened the local
horizon edition and its first chapter. Search and the Atlas inspector
required working hydration; their results were not present in the
initial static shell. The browser used the Atlas fallback, so hardware
WebGL was not exercised. A separate mobile viewport was unavailable;
the existing responsive layout is unchanged. Browser instrumentation
reported extension metadata warnings; no site CSP or hydration errors
were observed in the tested interactions.

The Zenodo API supplied the published metadata and original PDF checksums.
The four attached PDFs matched exactly. The three linked public
verification ZIP downloads also matched their published MD5 checksums
and passed a ZIP CRC test. See `docs/gravity/publication-checksums.json`.
The adapters and checks were local. Live Vercel response headers and
production interaction remain to be checked after the owner deploys.
