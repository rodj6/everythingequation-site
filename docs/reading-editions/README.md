# AdS₄ boundary-ball reconstruction and HaarCritical web editions

The AdS₄ reader is at `/source-readout/ads4-boundary-ball-reconstruction`. It follows the two boundary-ball readings in Gravity and holography. HaarCritical is at `/articles/haar-critical` in Independent mathematics. Each reader has its own `/papers` citation record, manifest, full-text index, and original PDF. [Source identity and public archive replay](source-provenance.md)

## Reproduce the site build

Use Node 24 and Python 3 with PyMuPDF. Pass the original input PDFs or separate copies of the bundled PDFs. The generator uses the controlling PDF checksums.

```sh
npm ci
python3 scripts/convert-reading-editions.py ads4-boundary-ball-reconstruction /absolute/path/to/ads4.pdf
python3 scripts/convert-reading-editions.py haar-critical /absolute/path/to/haar.pdf
python3 scripts/repair-haar-signed-window-notation.py
node scripts/index-reading-editions.mjs
node scripts/verify-new-reading-editions.mjs --source-only
python3 scripts/verify-reading-edition-pdf-links.py
npm run typecheck
SKIP_ZENODO=1 npm run build
node scripts/verify-new-reading-editions.mjs
node scripts/verify-riemann-hypothesis.mjs
node scripts/verify-rh-discovery.mjs
npm run verify:security
```

Run the production server and use `node scripts/verify-new-reading-editions-browser.mjs http://localhost:3000` with Playwright and Chromium for browser checks. The browser script can use a Chromium executable via `RH_CHROMIUM_PATH`.

The generated chapter fragments carry source proof anchors and linked PDF notation. Check provisional transcriptions against the visible vectors before reusing the notation. Each paper has its own page-level source-to-web ledger and checked LaTeX overlays in this directory.
