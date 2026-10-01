# Maintaining the complete Sealed or Leaky web edition

The publication inputs are in `public/publications/sealed-or-leaky/`. The original PDF, TeX and verification script are preserved byte for byte from the polished Version 3.1 package. `numbering.aux` records the compiled source numbering used for labels and PDF links. The current DOI is the author-supplied `10.5281/zenodo.23077474`.

The article is `content/articles/sealed-or-leaky.mdx`; the full-model account is `content/articles/full-shadow-model.mdx`. The technical reader loads generated chapter HTML and its index from `content/sealed-or-leaky/`. The registry lives in `content/papers.yaml`; `src/lib/sealed-leaky.ts` owns reader identity and download paths. `src/lib/machine.ts` incorporates the complete reading inventory into sitemap, feed, graph and `llms.txt`.

## Regenerate and verify

From the project root, after `npm ci`:

```sh
node scripts/convert-sealed-leaky.mjs
python scripts/verify-sealed-leaky-independent.py --report docs/sealed-or-leaky/independent-conversion-verification.json
python public/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1_Verification.py --output docs/sealed-or-leaky/independent-numerical-verification.json
SKIP_ZENODO=1 npm run build
node scripts/verify-sealed-leaky-http.mjs http://127.0.0.1:3010 --start-server
```

The browser check requires an optional local Playwright installation and Chromium. These QA tools are not required for normal website installation or deployment, and are not added to the site's production dependencies:

```sh
PLAYWRIGHT_MODULE=/path/to/playwright CHROME_PATH=/path/to/chromium node scripts/verify-sealed-leaky-browser.mjs http://127.0.0.1:3010 --start-server
```

Each test with `--start-server` starts its own local production server and stops it after checking. Alternatively, point the check at an already running production server and omit that option. Use the original normal Python interpreter invocation; do not disable assertions with `-O`.

The independent verifier compares the complete mathematics and actual proof/result prose to the authoritative source without importing the JavaScript converter. Its pinned input hashes intentionally reject silently substituted publication files. A future publication revision requires a deliberate source and numbering update, new article review and refreshed verification identity.

## Model terminology

The current account uses **unconditioned ground** for the unspecified earlier premise, **the unsplit** for undifferentiated unity, **source and readout** for complementary structure and record aspects of one whole, and **recursive differentiation** for their developing interactions. The earlier ground has no new formal symbol. `U` retains its manuscript meaning as the unsplit. The Atlas's defined `Ω` formation package remains a mathematical realization construction.

Full-model explanations are editorial additions to the framework. The old publication texts remain fixed. The complete Sealed or Leaky reading edition follows the polished manuscript; its Bell bounds do not serve as a derivation of the unconditioned ground or unsplit.

The existing consciousness test's old fixed-homepage-hero assertion was replaced with checks for the author-requested current model in the actual homepage. Its original historical baseline record was preserved. All original publication and reader preservation checks remain in place.
