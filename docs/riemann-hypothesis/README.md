# Riemann Hypothesis Version 2 web edition

The current web reader covers the repaired 1,061-page referee edition. The frozen Version 1 PDF is under `public/publications/riemann-hypothesis/v1/`. See [source provenance](source-provenance.md), [the edition comparison](version-comparison.md), [coverage](coverage.json), and [verification](VERIFICATION.md).

From the project root, with Node 24, Python 3 and PyMuPDF, regenerate the reading edition using the exact Version 2 PDF from [source provenance](source-provenance.md). Pass a separate input file because the converter writes the bundled download.

```sh
npm ci
python3 scripts/outline-riemann-hypothesis.py /absolute/path/to/version-2.pdf
python3 scripts/convert-riemann-hypothesis.py /absolute/path/to/version-2.pdf --state-dir tmp/rh-version-2
python3 scripts/link-riemann-hypothesis-footnotes.py
node scripts/index-riemann-hypothesis.mjs
node scripts/verify-riemann-hypothesis.mjs --source-only
python3 scripts/verify-riemann-hypothesis-pdf-links.py
npm run typecheck
SKIP_ZENODO=1 npm run build
node scripts/verify-riemann-hypothesis.mjs
node scripts/verify-rh-discovery.mjs
npm run verify:security
```

Use `--resume` with the same converter inputs and state directory after an interruption. The checked LaTeX overlays were compared against Version 2. Visible PDF vectors supply the source mathematics throughout the reader, with a searchable transcript alongside them. Compare provisional transcriptions against the visible source notation when copying formulas.

With a production server running and Playwright installed, use `node scripts/verify-riemann-hypothesis-browser.mjs http://localhost:3000` to verify browser rendering.
