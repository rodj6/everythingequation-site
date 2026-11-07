# Gravity errata verification

Checked on November 6, 2026 Pacific time (November 7 UTC). Both corrected
Zenodo records give November 7 as their publication date. This report and
the JSON receipts in `docs/gravity/` supersede the prior gravity build
receipts. The previous release remains separate.

| Check | Result |
| --- | --- |
| Source, coverage, strict KaTeX and original downloads | 3,223/3,223. All 158 coverage entries, 18 chapters, 708 math expressions (97 display), 98 preserved assets and 15 Deser files. |
| Next.js production build and CSP | Passed on Node 24.22.1 and Next.js 16.4.2, including the build's TypeScript check and postbuild. 989 HTML policies, maximum 1,813 bytes. Read-only security verification and all 22 CSP tests passed. Existing lockfile and installed dependencies reused. |
| Ordinary production artifacts | 5,432/5,432. Rendered equations, anchors, chapter links, registry links, discovery and restored verification-package links. |
| Served local production build | 5,926/5,926. Includes the actual PDF and three ZIP responses, content types and exact hashes, as well as the 404 policy. Separate served security checks: 993/993. |
| Existing Source–Readout checks | 14,300/14,300 across 214 pages. Spectral HTTP regression: 31,186/31,186. |
| Real Vercel adapter and read-only CSP | Passed with `@vercel/next@24.0.0` and `@vercel/build-utils@14.22.0`. Read-only validation covered 988 HTML routes, 986 cached prerender headers and the error policy. Adapter artifact checks: 5,433/5,433. |
| Zenodo DOI and asset verification | Both DOI links resolved to their published records. The two original PDF downloads matched the attachments byte for byte. The two dedicated verification ZIPs matched the overlay copies byte for byte. All three ZIPs passed CRC checks. |
| Targeted mathematical verification | Reviewed the corrected sections against both final PDFs. Exact errata checks passed for the Codazzi sign and the boundary-ball operator, residual and on-shell profile, including independent symbolic geometry checks. The affected suites reproduced all 9 Jacobson Codazzi and 7 Faulkner restricted-family archived results. |
| Replacement archive | Single source root, CRC passed, fresh extraction matches the intended file hashes. All unrelated publication bytes were preserved. |

Desktop Chrome followed the site hub into the Faulkner kernel, checked the
corrected displayed mathematics, followed chapter pagination and the
updated Jacobson citation, and confirmed the corrected Codazzi display and
its archive link. The Atlas fallback link opened the same first-order
kernel at its existing anchor. Network download bodies were checked by
the served HTTP suite. The full original mathematical verification suites,
hardware WebGL and a separate mobile viewport were not exercised in this
update. No website was pushed or deployed, and live website headers and
navigation were not tested.
