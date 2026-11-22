# Riemann Hypothesis web edition checkpoint

The reader follows Jeremy Rodgers’s 980-page referee manuscript. The original PDF is included byte for byte. The Zenodo deposit is a preprint with DOI `10.5281/zenodo.24433884`. The deposited citation title and the manuscript title are recorded separately.

## Resume the conversion

Start with [source provenance](source-provenance.md), [the targeted notation audit](targeted-audit.md), and the checkpoint and coverage JSON in this directory. The page ledger records reading divisions, source coordinates, destination anchors, and unchecked mathematical transcriptions. Coordinates are PDF points measured from the upper left. The accessible source was the exact PDF. The older exposition checkpoint represents a different version.

Use Node 24, npm, Python 3, and PyMuPDF. With the project root as the working directory:

```sh
npm ci
python3 scripts/outline-riemann-hypothesis.py public/publications/riemann-hypothesis/paper.pdf
python3 scripts/convert-riemann-hypothesis.py /absolute/path/to/controlling/paper.pdf --state-dir tmp/riemann-hypothesis
python3 scripts/link-riemann-hypothesis-footnotes.py
node scripts/index-riemann-hypothesis.mjs
SKIP_ZENODO=1 npm run build
node scripts/verify-rh-discovery.mjs
node scripts/verify-riemann-hypothesis.mjs
python3 scripts/verify-riemann-hypothesis-pdf-links.py
npm run verify:security
```

The converter expects a separate input PDF path when it writes the bundled PDF. Use the unchanged original supplied with the project, or make a separate temporary input copy. For a matched formula in `checked-math.json`, the reader renders MathML and offers the checked transcription in a copy control. The other display formulas use vectors extracted from the PDF with provisional selectable text. The same distinction applies to the Markdown.

To continue an interrupted conversion with the same inputs, rerun the conversion command with `--resume`. The supplied `conversion-state.json.gz` records the full conversion checkpoint. Copy it into the designated state directory before replaying with `--resume`. After serving the production build, run `node scripts/verify-riemann-hypothesis-browser.mjs http://localhost:3000` in an environment with Playwright and Chromium to check mobile layout and clipboard behavior.

Complete the notation check by resolving the unchecked display blocks and inline runs in the coverage ledger against the final LaTeX or by inspecting the source glyphs. Resolve any unknown glyph mappings and validate the table transcription, proof paragraph joins, source file paths, and anchor placement. Rebuild, re-index, and rerun the end-to-end checks after a correction. Keep the site’s provisional wording until the mathematical copy faithfully preserves the entire manuscript.
