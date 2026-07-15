# Shadow Theory — Public Research Website

The public home of **Shadow Theory**: a six-paper mathematical framework for
readout, completion, canonical closure, Tier-1 compilation, and claim
licensing, plus an open-problem research programme and article system.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, MDX, and KaTeX.
Statically generated; deployed via GitHub → Vercel.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # full production build (run before pushing)
```

## Updating the site

**Read `SITE_MAINTENANCE_MANUAL.md`** — it covers everything: adding papers,
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

The controlling public authority for all site copy is the canonical six-paper
stack plus `00_PUBLIC_SHADOW_STACK_LOADING_MANIFEST.md`. Older Everything
Equation / Tier-0 era materials are historical archive only. Public copy must
stay inside the claim boundary defined in `src/config/site.ts`.
