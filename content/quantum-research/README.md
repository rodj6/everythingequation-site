# October 2026 quantum research editions

Five complete publications extend the September quantum programme. The supplied PDFs dated 4 October 2026 are authoritative. Earlier editions retain their original URLs and bytes.

## Content and source preparation

`publications.json` holds publication identity. `index.json` inventories all 98 reading sections. `sources/*.tex` are standalone conversion sources reconciled to the authoritative PDFs, with bibliographies inlined; they are not labelled as original author source downloads. Matching `.aux` files preserve equation and theorem cross-references. The original PDFs are under `public/publications/quantum-measurement/research/`.

The prior source package predates corrections in the uploaded PDFs. Four papers were reconciled passage by passage; the full revised nonequilibrium source was recovered and its disclosure aligned to the PDF. `source-audits/` records the reconciliation and independent checks. The equilibrium figure was preserved directly from the authoritative PDF because the latest plotting source was not available.

## Regeneration and checks

From the site root:

```
npm ci
npm run convert:quantum-research
npm run audit:quantum-research
node scripts/audit-quantum-markdown-math.mjs .
SKIP_ZENODO=1 npm run build
```

`SKIP_ZENODO=1` uses the site's existing offline metadata mode. The five new publications use manuscript metadata directly. On Windows PowerShell set `$env:SKIP_ZENODO="1"` before `npm run build`.

To check the running site:

```
SITE_TEST_URL=http://127.0.0.1:3000 node scripts/verify-quantum-research-http.mjs
```

Conversion emits semantic HTML and MathML, expanded-macro Markdown, exact cross-reference anchors and a per-section completeness audit. Inline grouping is preserved; numbered alignment rows retain their own tags. Long formulas and tables scroll within the reading column on narrow screens. The five complete Markdown files and 98 section files are all available from the website.

Verification covers publication transcription and website behavior. It does not constitute external mathematical peer review or physical validation. DOI identifiers match the supplied manuscripts; live resolution could not be confirmed in this environment.

No deployment or remote repository changes were made.
