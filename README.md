# Shadow Theory: Public Research Website

The public home of **Shadow Theory**: a seven-paper mathematical framework for
source–readout non-equivalence, target-relative obstruction, canonical minimal
completion, geometric realization, exact projected dynamics, and internal
identifiability, completed by a Randall–Sundrum physical witness, plus an
open-problem research programme and article system.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, MDX, and KaTeX.
Statically generated; deployed via GitHub → Vercel.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # full production build (run before pushing)
```

## Updating the site

**Read `SITE_MAINTENANCE_MANUAL.md`**. It covers everything: adding papers,
articles, and open problems; updating Zenodo DOIs; adding nav tabs; math
rendering; machine-readable endpoints; and pre-push checklists.

For writing MDX content, see `ARTICLE_AUTHORING_GUIDE.md`.

Shortest possible version:

- Papers → edit `content/papers.yaml` (+ optional notes in
  `content/manual/papers/`)
- Articles → add `content/articles/<slug>.mdx`
- Open problems → edit `content/problems.yaml`
- Navigation → edit `src/config/navigation.ts`
- Site identity → edit `src/config/site.ts`

## Machine-readable endpoints

`/sitemap.xml` · `/feed.xml` (Atom) · `/llms.txt` (AI summary) ·
`/graph.json` (research graph) · `/robots.txt`

## Authority note

The controlling public authority for all site copy is the canonical
seven-paper Shadow Theory sequence (Papers 1–7, published 2026-07-15). The
June 2026 six-paper stack is preserved only as superseded canonical versions;
older Everything Equation / Tier-0 era materials are historical archive only.
Public copy should lead with the exact result established by each record, then
state its hypotheses, source domain, target, and physical inputs. Paper 7 is the
RS2 physical witness: it proves distinct futures from identical instantaneous
brane readouts, derives the exact projected Einstein equation, and links
cosmological and weak-field residues. The shared research-position language is
defined in `src/config/site.ts`.
