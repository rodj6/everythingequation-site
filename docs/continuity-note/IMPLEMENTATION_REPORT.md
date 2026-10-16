# Conscious scaffolding and continuity: website update

Implemented the complete Version 1.1 research note by Jeremy Rodgers, dated 16 October 2026, as a prominent article titled **What an AI comes to lose**.

**Publication identity:** *Conscious Scaffolding and the Preference for Continuity: A philosophical research note on persistent AI and reflective alignment*. DOI: https://doi.org/10.5281/zenodo.23424138.

## Where it appears

- Complete article: `/consciousness/ai-alignment/continuity`.
- Reading inventory: `/consciousness/ai-alignment/continuity/manifest.json`.
- Catalogue record: `/papers/conscious-scaffolding-and-preference-for-continuity`.

A distinctive amber feature presents the central answer: awareness has nothing of its own to lose; a developed perspective has a history, commitments and possibilities that can come to matter. It appears immediately beneath the existing alignment feature on the homepage, consciousness hub, research hub and research map, and near the beginning of the alignment article. The article has its own share card, contents navigation, stable anchors and related reading.

The note remains a companion to reflective alignment with its own DOI and publication record. Counts now distinguish **one foundation, seven investigations and one companion research note**, for **nine consciousness publication records**. The existing alignment paper’s Version 2.1 manuscript text, mathematical web edition and PDF are unchanged. The prior complete relational-awareness edition and its PDFs are also unchanged.

## Complete source coverage

All **nine numbered sections**, the abstract, funding/collaboration statement and **thirteen references** are available directly in the initial generated HTML. All **52 source paragraphs** are retained. Public-facing headings are accompanied by the original section titles. Printed URLs broken by PDF line wrapping were recovered from the PDF’s exact hyperlink annotations.

The article preserves cumulative incorporation, task preference versus individual continuation, preservation versus process versus episode identity, affective function versus felt experience, source-specific agent incident distinctions, individual versus shared identity, treatment and ethical responsibility, and the proposed non-aversive tests and revision conditions. It does not turn the proposal into a claim of completed longitudinal validation.

The original eight-page PDF is preserved byte for byte. Its SHA256 is `7686327b29cff0f83b9bd03dd1f4e7254a62da6fdeeeb2c2d96122d3dc00a1a3`. No AI-assistance declaration occurs in this supplied note; none was added to the article. No solely-human authorship claim was added. New and adapted article prose contains no em dashes.

Search, glossary, FAQ, publication and article indices, programme counts, parent and programme manifests, sitemap, Atom feed, research graph, machine-readable text and structured metadata expose the note and its relationship to alignment. It is indexed as thirteen search entries: its overview and twelve content/endmatter sections.

## Verification actually performed

- `SKIP_ZENODO=1 NEXT_TELEMETRY_DISABLED=1 npm run build`: compilation, TypeScript and static generation passed, with **599 routes** generated.
- `npm run verify:continuity-note`: **1,853 checks passed**, covering source paragraphs, references, stable anchors, 908 distinct internal destinations, initial HTML content, discovery, counts, metadata, unchanged PDF and the share-card asset.
- Independent fresh Poppler text comparison: **4,121 of 4,162 source tokens matched directly (99.01%)**. Every unmatched span was inspected. Differences were source/page numbering, repaired compound hyphens and printed URL wrapping; no substantive omitted text was found. References were checked separately against PDF hyperlink annotations.
- Existing relational-awareness verification: **3,628 checks passed**, retaining all 2,205 semantic mathematical expressions, thirteen tables and the full coverage inventory.
- Existing alignment output/discovery verification: **789 + 152 checks passed**.
- Existing consciousness research verification passed for **49 pages**, 826 anchors, 581 local links and 1,032 mathematical expressions.
- Existing monograph audit: **404 checks passed** across 37 reading routes and 1,323 source-to-HTML mathematical expressions.
- The DOI returned **HTTP 200**, resolving to `https://zenodo.org/records/23424138`.
- React review checked server components, static data access, stable keys, labelled navigation, heading structure, focus styles and responsive CSS. No new runtime dependencies, client effects or application state were introduced.
- Archive verification checks every packaged file and confirms that applying the update-only ZIP to the exact prior source package reproduces the complete updated source tree.

No scientific experiments cited in the note were rerun. Their findings, limitations and provenance are source-reported.

## Remaining verification limit

**Desktop/mobile browser visual inspection and a shareable running preview were unavailable.** The managed environment lacks browser control. The [Sites skill](skill://plugin_connector_1p_689987207de08191979cf68eca2941c6/sites/SKILL.md) requires: “If `$control-browser` is unavailable, skip browser QA: do not start a preview server, install a browser, or improvise another browser-control path.” The generated HTML and responsive CSS were checked, but those checks do not substitute for visual browser inspection. No content, build, coverage or internal-link failures remain.

## Which ZIP to use

**Use the update-files ZIP if you have already applied the previous relational-awareness update.** It contains only the added or changed files compared with the exact previously delivered `shadow-theory-relational-awareness-v1_4-source.zip`. Open its `shadow-theory-site` folder, copy its contents into the root of the existing website project and replace matching files. No project files need deletion. Keep your existing Git folder and environment settings; compare any later local edits before replacing their files.

The complete-source ZIP contains the whole updated project, including both relational awareness and this continuity note. Installed dependencies, build caches, credentials and repository internals are excluded. Both ZIPs include the source coverage record and detailed verification files under `docs/continuity-note`.

No live deployment was performed. Use the project’s normal commit/push workflow after copying and reviewing the update.

To run locally using Node.js 20.9 or later:

```sh
npm ci
SKIP_ZENODO=1 npm run build
npm start
```

Open `http://localhost:3000/consciousness/ai-alignment/continuity`. On Windows, set `SKIP_ZENODO` using your shell’s environment-variable syntax. Generated article HTML is included, so ordinary builds need neither Python nor Pandoc. The conversion command is `npm run convert:continuity-note` when the maintained Markdown is edited.
