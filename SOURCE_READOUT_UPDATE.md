# Source and readout website update

Prepared 28 October 2026. This package updates the existing site locally. No deployment, GitHub push, publication revision or remote account change was performed.

## What changed

The new `/source-readout` entrance connects the complete seven-paper mathematical foundation with five constructive studies and three technical companions. Existing canonical numbering and `/papers/...` URLs remain. Publication records now link directly to their complete editions. The homepage, Framework, paper index and research map point into the programme; unrelated consciousness and quantum material remains unchanged.

The reading editions contain 193 chapter routes across 15 publications. They preserve definitions, examples, theorem statements, proofs, calculations, appendices and references. The five main constructive articles also have result-oriented introductions and links to the foundations they develop. Every publication has its original PDF and provenance; the seven foundation papers include original TeX, and all five new computational supplement ZIPs are preserved.

The Everything Equation now has a current development article at `/source-readout/origins`. The existing history article keeps its URL. The account links the original lawhood question to target-relative completion, dynamical sufficiency and constructive readers. It distinguishes the organizing schema from the individual mathematical results and does not present it as a singular formula that solves everything. Historical publication texts remain historical.

## Mathematical conversion

The seven foundational papers were supplied as LaTeX. Their editions render 7,549 expressions in KaTeX HTML and MathML, including TeX annotations. Conversion coverage preserves 244 source headings, 315 statements, 135 proofs and 949 source labels. Internal references link to actual chapter anchors.

The new papers and companions were supplied as PDFs without LaTeX source. Their 200 pages are converted into 88 chapters. Ordinary prose reflows as HTML. Inline mathematics, display equations, tables and complex mathematical passages retain exact source-vector outlines with searchable text alternatives and expandable transcriptions. These are bounded passages, not whole-page embeds. All 3,596 non-page-number source text blocks are accounted for.

Linear PDF transcriptions are not reconstructed LaTeX or semantic MathML. In particular, PDF extraction cannot reliably express fraction, matrix or nested-root topology. The vector presentation preserves that notation visually. Conservative mathematical crops can contain small fragments from an adjoining line rather than risk omitting source glyphs. The paper PDFs remain the publication reference.

New editorial prose uses direct language without em dashes. Original publication assets remain byte-identical, including their published wording and typography. Proof assumptions, restrictions and unresolved thresholds have been retained. No claim is made that the mathematical results were independently proved or experimentally validated in this website work.

## Navigation and discovery

- `/source-readout`: overview, reading paths, foundation and constructive contents, programme search.
- `/source-readout/<paper>`: article orientation, full contents, provenance, companions and downloads.
- `/source-readout/<paper>/<chapter>`: complete technical sections, article contents and previous/next navigation.
- `/source-readout/origins`: the Everything Equation's development and its present mathematical connections.
- `/source-readout/manifest.json`: all editions, chapters, original assets and fidelity information.
- `/source-readout/search.json`: the complete searchable section corpus.

The sitemap, feed, `llms.txt`, research graph, publication registry and article index include the new editions. Existing routes remain. Search is supplementary: full contents and technical text are rendered without requiring JavaScript.

## Install and check

Copy the package contents into your existing checkout, preserving your Git history, deployment settings, local credentials and any newer work. This is a full source package, not a prebuilt deployment. Runtime dependencies and the lockfile are unchanged.

Use Node 24, then:

```sh
npm ci
SKIP_ZENODO=1 npm run build
npm run verify:security
python scripts/verify-source-readout-build.py
```

`SKIP_ZENODO=1` uses the site's supported offline metadata path. Production builds generate the complete article routes and install the existing per-route Content Security Policy. Do not upload `node_modules` or a previous `.next` directory.

The already generated reading editions need no PDF conversion software for ordinary builds. To regenerate them, see `content/source-readout/foundations-README.md` and `content/source-readout/constructive/README.md`. Conversion requires the documented Python tools, Pandoc/LaTeX for the foundations, and the installed Node math dependency. Original sources are bundled.

## Verification evidence

`docs/source-readout/` contains the baseline hash inventory, source conversion audits, independent review, production-build log, static production-route checks and browser review notes. These checks distinguish source coverage, rendering, navigation, asset integrity and preservation from scientific verification. Computational supplements are supplied intact; their research programs were not rerun as part of this integration.

The complete production build passes, including TypeScript and CSP generation. Independent source checks pass. Static production checks cover all 214 selected routes, their source-readout links, anchors and publication assets. Original publication bytes and protected consciousness/quantum files were compared against the supplied archives.
