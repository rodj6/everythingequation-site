# SPC-2 consciousness website update

This project extends the supplied website with the complete Version 2 consciousness programme. It has not been deployed. No external accounts, publication records or billing settings were modified.

## What is included

- `/consciousness`: a substantial end-to-end account and an original animated brain/artificial-network illustration. Text and actions occupy their own unobstructed area. Impulses remain within each organization; motion pauses with the keyboard control, off-screen, or when the document is hidden. Reduced-motion and no-JavaScript visitors see the static composition.
- `/consciousness/monograph`: all five parts, 25 chapters, six appendices, front matter and bibliography across 37 complete reading pages. Scientific text, proofs, equations and source references are preserved. MathML, keyboard-scrollable mathematical regions, page contents, whole-book navigation, section search and previous/next links are included.
- Eight distinct guides (1,002–1,088 words each), a 2,493-word overview, 28 glossary entries and 22 FAQs. These web explanations are clearly separate from the fixed publication.
- Current publication record, Research Status, shared navigation, homepage feature, About/Research Map, feed, sitemap, metadata, research graph, `llms.txt`, manifests and full-book/per-chapter Markdown. The configured canonical origin and original homepage hero wording are preserved.
- The earlier account is subordinate history, with a permanent redirect to an explicit archive. Identifiable earlier publication citations remain distinguishable. Quantum and TOE publication content is preserved.

Current publication DOI: [10.5281/zenodo.22853774](https://doi.org/10.5281/zenodo.22853774), confirmed by the author. The publication edition is dated 20 September 2026. Web revisions and generated check timestamps are recorded separately.

## Run locally

Use Node.js **20.9.0 or later**, with npm. From the extracted `everythingequation-site` folder:

```sh
npm ci
npm run build
npm start
```

Open `http://localhost:3000/consciousness`. For editing, use `npm run dev`. The checked-in lockfile and framework versions remain the supplied versions; no broad dependency upgrade was performed.

The owner’s existing Next.js hosting workflow can use the same install/build commands. Set `NEXT_PUBLIC_SITE_URL` before building only when overriding the existing `https://everythingequation.com` canonical origin. Preserve the existing project settings, redirects and crawler policy. This handoff does not publish the site or modify hosting configuration/accounts.

## Maintain and regenerate

```sh
npm run convert:consciousness
npm run audit:consciousness
npm run build
npm start
# In a second terminal:
npm run verify:consciousness-site -- http://127.0.0.1:3000
npm run verify:quantum-site -- http://127.0.0.1:3000
```

The original matching source and PDF live in `public/publications/consciousness/`. The converter uses the embedded bibliography and checked PDF outline/numbering data in `docs/consciousness/`. Do not edit generated HTML or Markdown directly. Edit explanatory prose in `content/consciousness/editorial.json`. Shared programme identity is in `src/config/consciousness.ts`; registries remain in `content/papers.yaml` and `content/problems.yaml`.

Optional source/PDF comparison requires Python with PyMuPDF:

```sh
python -m pip install pymupdf
python scripts/verify-consciousness-source.py
```

Browser checks are reproducible with `scripts/verify-consciousness-browser.mjs` and Playwright/Chromium. `PLAYWRIGHT_MODULE` may point to an existing Playwright installation; `CHROME_PATH` may point to an existing Chrome executable. These are optional QA dependencies, not website runtime requirements. The original social artwork and site favicon are included as ready-to-use assets; their generation scripts use Sharp.

## Verification evidence

Final results are in `evidence/VERIFICATION.md`, with actual build/audit logs and browser screenshots. The independent source audit passes **404 checks**, including all **1,323 source formulas**, and the source/PDF comparison matches **1,025 substantial prose chunks** plus all **54 bibliography entries**. These are preservation and rendering checks, not independent proofs of the scientific claims.

- `SOURCE_CONVERSION_REPORT.md`: scientific-content coverage, source matching, corrections, limitations and reproduction.
- `public/publications/consciousness/source-coverage.json`: ordered source-to-web register, PDF pages, TeX line locators, stable anchors and hashes.
- `content/consciousness/EDITORIAL_COVERAGE.md`: guide/overview coverage and source links.
- `CONSCIOUSNESS_MIGRATION.md`: historical route handling and maintained integration sources.
- `evidence/changed-files.txt` and `.json`: changes compared with the supplied project ZIP, plus preserved publication/lockfile checks.
- `evidence/screenshots/`: desktop/mobile overview, guide, mathematical chapter, appendices and no-JavaScript navigation.

## Specific limitations

The complete manuscript text and mathematics are present. Appendix D.4 and F.4 describe separate research-verification supplements that were not supplied; no filenames or scientific execution results were invented. Their descriptions remain in the publication. Website conversion/route tests are not substitutes for those research supplements.

Live DOI/Zenodo metadata retrieval was unavailable. The author-confirmed DOI is retained, and the supplied PDF/TeX are the download sources. No licence, concept DOI, live file URL, institutional affiliation or peer-review status was inferred.

The original PDF is byte-for-byte unchanged. Its §18.1 “?? 16.4” reference is resolved as **Assumption 16.4** only in the web edition. The full correction record is in the source coverage report.

## Package

`everythingequation-site-consciousness.zip` contains the runnable source project, maintained content, publication assets, lockfile, reproduction scripts, reports and screenshots. It excludes installed dependencies, build caches, secrets and Git internals. `scripts/package-consciousness.py` reproduces the archive and, when given the original project ZIP, its changed-file inventory.
