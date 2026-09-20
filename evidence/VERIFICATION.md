# Final local verification

Checked on 2026-09-20 against the production server at http://127.0.0.1:3000. Nothing was deployed.

| Check actually run | Result |
|---|---|
| npm ci, original package-lock.json | Pass; framework/lockfile versions unchanged |
| npm run build (including prebuild content-map generation) | Pass; 279 generated routes; TypeScript and production compilation pass |
| node scripts/audit-consciousness-content.mjs | Pass; 404 independent checks, 37 reading pages, 1,323 formulas, zero broken publication links |
| Python scripts/verify-consciousness-source.py | Pass; 1,025/1,025 substantial PDF prose chunks and 54 bibliography entries match |
| node scripts/audit-quantum-content.mjs | Pass; all three existing publications, 189 proof bodies and 916 source labels retained |
| node scripts/verify-quantum-site.mjs | Pass; 90 routes, 916 anchors, 1,098 links, 62 downloads, five machine endpoints; zero failures |
| node scripts/verify-consciousness-site.mjs | Pass; 3648/3648 checks, 50 new HTML routes, 281 source anchors, 727 links, 40 downloads |
| node scripts/verify-consciousness-browser.mjs | Pass; 29 browser checks; zero console/hydration errors |
| agent-browser visual inspection and axe-core 4.12.1 | Overview loads, semantic navigation present; zero automated violations. Gradient-background contrast requires manual review and is not asserted as a complete WCAG certification. |

The browser checks cover desktop/mobile page width, overview, guide, mathematical chapter, appendix, tables, search-to-section navigation, keyboard pause/play, paused animation work, off-screen stopping, reduced motion, mobile menu/Escape, and full text/math/navigation with JavaScript disabled. Hidden-document handling is tested through an explicitly simulated visibility event, because headless tabs do not reliably reproduce real background-tab visibility. Representative screenshots were visually reviewed for readable equations, unobstructed text/actions and responsive layout. The scholarly reader's inherited ambient animation is disabled.

Corrections from the first review: a guide-page syntax error, escaped underscores in Appendix D's contents, Table 12.1 cross-reference/caption typing, keyboard access to wide display mathematics, no-JavaScript mobile navigation, and a pre-existing missing favicon request. Final evidence supersedes the initial test run.

## Evidence

- Build: [build.log](build.log)
- Source audit: [consciousness-audit.log](consciousness-audit.log)
- PDF/source match: [source-pdf-verification.log](source-pdf-verification.log)
- Quantum content regression: [quantum-audit.log](quantum-audit.log)
- Quantum HTTP regression: [quantum-http.log](quantum-http.log)
- Consciousness HTTP check details: [consciousness-site-checks.json](../docs/consciousness-site-checks.json)
- Browser check details: [browser-checks.json](browser-checks.json)
- Automated accessibility scope: [accessibility-overview.json](accessibility-overview.json)

## Representative screenshots

- [overview-desktop.png](screenshots/overview-desktop.png)
- [monograph-contents-desktop.png](screenshots/monograph-contents-desktop.png)
- [guide-ai-desktop.png](screenshots/guide-ai-desktop.png)
- [chapter-19-mathematics-desktop.png](screenshots/chapter-19-mathematics-desktop.png)
- [appendix-d-desktop.png](screenshots/appendix-d-desktop.png)
- [overview-mobile.png](screenshots/overview-mobile.png)
- [guide-ai-mobile.png](screenshots/guide-ai-mobile.png)
- [chapter-19-mobile.png](screenshots/chapter-19-mobile.png)
- [appendix-d-mobile.png](screenshots/appendix-d-mobile.png)
- [appendix-d-math-mobile.png](screenshots/appendix-d-math-mobile.png)
- [appendix-f-table-mobile.png](screenshots/appendix-f-table-mobile.png)
- [no-javascript-mobile-navigation.png](screenshots/no-javascript-mobile-navigation.png)

## Limits

The manuscript is fully converted. Research-verification supplements described in Appendices D.4/F.4 were not supplied. The live DOI/Zenodo record could not be retrieved; the author's confirmed DOI is used without guessed licence or peer-review metadata. Preservation checks do not independently prove scientific claims. No deployment or external-account change occurred.
