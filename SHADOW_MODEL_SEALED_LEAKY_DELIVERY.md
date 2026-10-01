# Shadow Theory: full-model and Sealed or Leaky website update

Prepared for Jeremy Rodgers, 1 October 2026. Baseline: the supplied `everythingequation-updated.zip`, including the completed consciousness programme. The deliverable is the complete updated Next.js source project for the existing deployment workflow. No external website or Zenodo account was changed.

## Read the result

- `/articles/full-shadow-model` — the complete explanatory account, from unconditioned ground through the unsplit, complementary source/readout and recursive differentiation into structures, records and lived worlds.
- `/articles/sealed-or-leaky` — a substantial mathematical and physical article connecting the source tetralemma, sharp Bell information bounds, experimental certificate calculations, operational surrogates, reversible seals, contextuality and finite-resource witnesses.
- `/sealed-or-leaky` — the complete technical edition, all 17 reading sections and search.
- `/papers/sealed-or-leaky` — publication record, source files and DOI.

The new publication's author-supplied DOI is **10.5281/zenodo.23077474**. Version 3.1 retains its mathematical revision date of 21 September 2026 and publication-preparation date of 1 October 2026. The web-edition date is identified separately. Live DOI resolution could not be established through the available web retrieval service; local reading, downloads and cache-only builds work independently of that service.

## The full-model language

**Unconditioned ground** names the unspecified earlier premise. **The unsplit** names unity before the operational source–readout distinction. **Source and readout** are complementary structure and record aspects of one whole; observers, brains, instruments, memories and experienced scenes belong within the readout. **Reciprocal interaction and recursive differentiation** describe mutual partial expression and the development of further organization.

The earlier ground receives no formal symbol. U retains the consciousness manuscript's meaning as the unsplit. The Atlas's Ω remains its defined formation package, with its existing equations. The model's explanatory precedence does not assume an external clock. The public account is direct and affirmative while the technical results retain their actual premises.

The model and new research are integrated through the homepage, framework and equation discussion, Atlas introduction, research map, paper catalogue, Papers 6 and 7, current introductory articles, consciousness overview, relevant guides, glossary, FAQ and discovery metadata. The canonical seven-paper sequence retains its order and identities. The original consciousness monograph and Papers 2–4 retain their publication text and files.

## Complete scientific coverage

The paper is available directly as server-rendered HTML with accessible math and source-preserving Markdown. It contains:

| Content | Preserved |
| --- | ---: |
| Technical reading sections, including identity, transparency and references | 17 |
| Numbered main sections | 14 |
| Formal results with proofs | 45 |
| Full proofs | 45 |
| Additional definition and remarks | 5 |
| Inline mathematical expressions | 1,223 |
| Displayed mathematical blocks | 136 |
| Tables | 5 |
| Source labels | 135 |
| Bibliography entries | 40 |

All 18,236 ordered source-prose words checked by the converter are retained. Independent source-to-HTML checks compare all 1,359 mathematical expressions, every proof and formal statement's prose, actual display numbering through equation 69, and source label numbers. The manuscript has no appendices or figures; none were invented.

The lead article re-explains the mechanisms in the website's style. The connected complete reading edition preserves every substantive source passage and proof. Typography-only LaTeX layout commands and repeated longtable continuation headings are adapted to HTML. All data rows remain. Original PDF, TeX and verification-script bytes match the polished package.

The coverage map is `public/publications/sealed-or-leaky/source-coverage.json`; conversion records are in `content/sealed-or-leaky/audit.json` and `docs/sealed-or-leaky/`. Original and per-section Markdown are in `public/publications/sealed-or-leaky/`. The manifest, search, sitemap, Atom feed, research graph and `llms.txt` expose the complete reading inventory.

## Verification

The production build and TypeScript checks pass, generating 358 routes. Dependency versions, lockfile, deployment configuration and the existing Zenodo cache-only option are preserved.

The supplied Python verification script passes its executed exact calculations and 300 supplementary checks. Its optional comparison against an earlier v3 manuscript is unavailable because that earlier manuscript was not part of this package. The independent website verifier passes every mathematical-expression, proof/result-prose, numbering and source-byte comparison. These checks establish transcription fidelity and the reported computational checks; they do not constitute external scientific peer review.

All 1,866 new HTTP checks pass, covering all 17 technical sections, 1,359 mathematical annotations, 411 source targets, 23 downloaded files and 633 internal targets. Existing consciousness-research HTTP checks pass 3,254 checks; the broader consciousness regression passes 3,965. The quantum regression passes across 91 routes, 55 reading pages, 916 source anchors and 62 downloads. Discovery verification passes 2,305 checks. All 350 baseline publication assets and technical-content files in the preservation comparison remain byte-identical; no original file was removed.

All 360 desktop/mobile, no-JavaScript, search, keyboard scrolling and console/hydration checks pass, with zero console or runtime errors. These checks are recorded in `docs/sealed-or-leaky/browser-verification.json`, with screenshots in `evidence/sealed-or-leaky/`. The final summary is recorded in `docs/sealed-or-leaky/delivery-summary.json`. The original test asserting a frozen old homepage hero was updated to check the explicitly requested new full-model account in the actual page; the historical baseline record remains intact.

## Deployment and reproduction

This ZIP contains a complete source project, not a static-hosting export. Use the same project root and deployment workflow as the supplied website:

```sh
npm ci
npm run build
npm start
```

For a build using supplied metadata without external Zenodo requests:

```sh
SKIP_ZENODO=1 npm run build
```

Do not copy `node_modules` or build caches from an older installation. They are intentionally absent from this archive. Required generated content, original publications, conversion and verification scripts, reports and evidence are included. See `docs/sealed-or-leaky/MAINTENANCE.md` for conversion, independent verification and browser-check commands.
