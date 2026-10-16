# Relational-awareness web edition

Jeremy Rodgers, **From Physical Comparison to Relational Appearance: A Defeasible Current-Act Account**, Version 1.4, 16 October 2026. Main paper and technical supplement share DOI https://doi.org/10.5281/zenodo.23408737.

## Run the updated website

Use Node.js 20.9 or later. From the website source directory:

```sh
npm ci
SKIP_ZENODO=1 npm run build
npm start
```

Open `http://localhost:3000/consciousness/relational-awareness`. On Windows, set `SKIP_ZENODO` using the shell's environment-variable syntax. `npm run dev` starts the development version instead.

The included generated HTML and Markdown are ready for the standard site build. Pandoc and Python are only needed to regenerate the relational-awareness edition after editing its maintained source:

```sh
npm run convert:relational-awareness
SKIP_ZENODO=1 npm run build
npm run verify:relational-awareness
```

## Content and structure

- `content/consciousness/relational-awareness/source/`: complete editable web transcription in mathematical Markdown.
- `content/consciousness/relational-awareness/documents.json`: maintained chapter titles, descriptions and reading order.
- `content/consciousness/relational-awareness/index.json` and chapter HTML: generated reading inventory and server-renderable content.
- `src/app/consciousness/relational-awareness/`: overview, shared reader, responsive styles and reading manifest.
- `src/lib/relational-awareness.ts`: publication identity and integration with search and programme discovery.
- `public/publications/consciousness/relational-awareness/`: unchanged PDFs, complete Markdown and chapter exports.
- `SOURCE_TO_WEB_COVERAGE.md` and `source-to-web-coverage.json`: internal source-to-web coverage, explicit editorial decisions and original-PDF hashes.
- `verification.json`: checks against the final production output. These are website checks, not reruns of the publication's scientific experiments.

The main argument, reading guide, ten technical modules and references form one connected publication. The consciousness programme now has eight publications: one foundation and seven investigations. Historical source editions retain their own text and scope.

## Verification limit

This environment did not provide the browser-control capability required for a managed preview. Desktop and mobile visual inspection and a shareable running preview were therefore unavailable. The production build, generated HTML, source coverage, internal links, anchors, mathematical markup, responsive CSS rules and discovery endpoints were checked. A local run using the commands above remains the appropriate next visual review before deployment.
