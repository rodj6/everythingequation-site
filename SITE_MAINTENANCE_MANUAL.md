# Site Maintenance Manual — Shadow Theory Website

This manual explains how the redesigned site works and how to update it. It is
written so that you (or any AI you hand it to) can make correct changes months
from now without remembering the internals.

---

## 1. What this site is

A statically generated Next.js 14 (App Router) site presenting **Shadow
Theory** as the public framework, with:

- the six canonical papers (Papers 1–6) as the controlling public authority;
- the historical Everything Equation / Tier-0 era papers as an archive;
- an open-problem research programme with claim-boundary discipline;
- an MDX article system;
- KaTeX math rendering (server-side, crawlable);
- machine-readable endpoints: `/sitemap.xml`, `/feed.xml`, `/llms.txt`,
  `/graph.json`, `/robots.txt`.

Stack: Next.js 14.2 · React 18 · TypeScript · Tailwind CSS · MDX
(`@next/mdx` + `remark-math` + `rehype-katex` + `remark-frontmatter`) ·
YAML content registries · js-yaml.

---

## 2. Repository structure

```
content/                      ← YOUR CONTENT LIVES HERE
  papers.yaml                 ← paper registry (canonical + historical)
  problems.yaml               ← open-problem registry
  articles/*.mdx              ← articles (frontmatter + MDX body)
  manual/papers/*.mdx         ← per-paper "Notes" sections
  manual/problems/*.mdx       ← per-problem notes (legacy drafts)
  manual/pages/*.mdx          ← legacy pages served at /legacy/<slug>

src/config/
  site.ts                     ← site name, tagline, URL, author, claim boundary
  navigation.ts               ← top navigation tabs (one list)

src/app/                      ← pages (App Router)
  page.tsx                    ← homepage
  framework/page.tsx          ← framework explainer
  papers/page.tsx             ← paper index
  papers/[slug]/page.tsx      ← paper detail (metadata, DOI, notes, JSON-LD)
  problems/…                  ← open problems index + detail
  articles/…                  ← article index + detail
  research-map/page.tsx       ← research map
  about/page.tsx              ← about page
  legacy/[slug]/page.tsx      ← historical pages with banner
  sitemap.xml|feed.xml|llms.txt|graph.json|robots.txt/route.ts
  layout.tsx                  ← global shell, metadata, JSON-LD
  globals.css                 ← design system (CSS variables), KaTeX rules

src/components/               ← header, footer, cards, paper-chain,
                                mdx-components (Theorem, ClaimBoundary, …),
                                mdx-content (server MDX renderer)
src/mdx-components.tsx        ← Next.js MDX convention file (do not move)
src/lib/
  registry.ts                 ← loads papers.yaml / problems.yaml + Zenodo cache
  articles.ts                 ← article index accessors
  machine.ts                  ← sitemap/feed/llms/graph generators
src/generated/                ← AUTO-GENERATED import maps (do not edit)

scripts/
  generate-content-maps.mjs   ← prebuild: scans content/, writes src/generated/
  sync-zenodo.mjs             ← refreshes .cache/zenodo.json from Zenodo API

.cache/zenodo.json            ← cached Zenodo metadata (committed)
.github/workflows/sync-zenodo.yml ← daily metadata refresh
```

---

## 3. How deployment works

Unchanged from before: **push to GitHub → Vercel builds and deploys.**

- Vercel runs `npm run build`, which runs the prebuild content-map generator
  and then `next build`. Everything is statically generated.
- No environment variables are required. Optional:
  - `NEXT_PUBLIC_SITE_URL` — overrides the canonical base URL
    (defaults to `https://everythingequation.com` in `src/config/site.ts`).
  - `SKIP_ZENODO=1` — skip Zenodo network fetches during build (cache-only).
- The GitHub Action `.github/workflows/sync-zenodo.yml` refreshes Zenodo
  metadata daily and commits `.cache/zenodo.json`, which triggers a redeploy.

## 4. How to run locally

```bash
npm install
npm run dev        # runs the content-map generator, then next dev
# open http://localhost:3000
```

Full production check before pushing:

```bash
npm run build && npm start
```

---

## 5. How to add a new paper

1. Open `content/papers.yaml`.
2. Copy one of the canonical entries at the top and edit its fields:

```yaml
  - id: paper:shadow:7           # any unique id
    slug: my-new-paper           # becomes /papers/my-new-paper
    number: 7                    # only for canonical stack papers
    category: canonical          # canonical | branch | historical
    visibility: public           # public | draft (draft = hidden)
    featured: true
    title: "Full Paper Title"
    subtitle: "Optional subtitle"
    role: "One-sentence authority role shown on cards and the paper page."
    version: "v1"
    date: "2026-08-01"
    zenodo: null                 # numeric Zenodo record ID once uploaded
    doi: null                    # DOI string once issued, e.g. 10.5281/zenodo.1234567
    summary: >
      A few sentences shown as the Summary section on the paper page.
    supports: []                 # optional list of problem slugs
```

3. Optionally add reading notes at `content/manual/papers/my-new-paper.mdx`
   (rendered as the "Notes" section).
4. `npm run build` locally to verify, then commit and push.

Paper categories: `canonical` (the six-paper stack; shown as the Canonical
stack grid), `branch` (statused branch results), `historical` (archive list).
Entries without a `category` field default to `historical`.

## 6. How to update a Zenodo DOI or record ID

When you upload a paper (or a new version) to Zenodo:

1. In `content/papers.yaml`, set the paper's `zenodo:` field to the numeric
   record ID (from the record URL, e.g. `18081205`), and/or set `doi:` to the
   DOI string. **A DOI set here always wins over cached metadata.**
2. Run `npm run sync:zenodo` to refresh `.cache/zenodo.json` (optional but
   recommended — it fills in title/authors/date from Zenodo).
3. Commit both files and push.

Verify: open the paper page — the DOI button should link to
`https://doi.org/<your-doi>` and "View on Zenodo" to the record.

Note: a *new version* on Zenodo usually gets a **new record ID and DOI** —
update both fields. The daily GitHub Action keeps cached metadata fresh but
never changes your YAML.

## 7. How to add an article

1. Create `content/articles/my-article.mdx` (filename = URL slug):

```mdx
---
title: "My Article Title"
description: "One sentence used in cards, metadata, and feeds."
date: "2026-08-01"
tags: [notes, physics]
status: published        # or draft to hide it
---

Body text in Markdown/MDX. Inline math $E = mc^2$ and display math:

$$ \int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2} $$
```

2. Push. The prebuild script indexes it automatically — it appears on
   `/articles`, the homepage (three latest), sitemap, feed, llms.txt and
   graph.json. Nothing else to edit.

## 8. How to update an existing article

Edit the MDX file. Optionally add `updated: "2026-09-01"` to the frontmatter
(shown on the page and used in the feed). Push.

## 9. How to add an open problem

1. Add an entry to `content/problems.yaml` (copy an existing block):

```yaml
  - id: my-problem
    slug: my-problem
    title: My Problem Title
    domain: Physics
    programme: additional     # featured | additional | legacy
    status: public
    maturity: open
    legacy_notes: false       # true only if the MDX notes are old-era drafts
    target: >
      Neutral statement of the research target. State the aim, not a result.
```

2. Optionally add notes at `content/manual/problems/my-problem.mdx`.
   If `legacy_notes: true`, the page shows a historical-draft banner above them.
3. Push.

**Claim-boundary rule:** the `target` text must describe a research target,
not assert a solved result. Solved-status claims require a published branch
packet first.

## 10. How to add a top navigation tab

1. Create the page, e.g. `src/app/updates/page.tsx` (copy a simple page such
   as `src/app/articles/page.tsx` as a starting point).
2. Add one line to `src/config/navigation.ts`:

```ts
  { href: "/updates", label: "Updates" },
```

Desktop and mobile menus both update automatically. To include the new page in
the sitemap it must be in `navigation` (it is, once you add the line above).

## 11. How math rendering works

- MDX pipeline: `remark-math` parses `$...$` / `$$...$$`; `rehype-katex`
  renders it to KaTeX HTML **at build time** — math is real crawlable HTML,
  not client-side JavaScript.
- KaTeX CSS is imported once in `src/app/layout.tsx`
  (`import "katex/dist/katex.min.css"`).
- Mobile safety: `src/app/globals.css` makes `.katex-display` blocks
  horizontally scrollable so long equations never overflow the phone screen.
  Don't remove that block.
- In TSX pages (not MDX), render math with
  `katex.renderToString(...)` — see the hero equation in `src/app/page.tsx`.

## 12. MDX components for research writing

Available in every MDX file (defined in `src/components/mdx-components.tsx`,
wired up by `src/mdx-components.tsx`):

```mdx
<Definition title="Readout">…</Definition>
<Theorem title="Main theorem">… with $math$ …</Theorem>
<Lemma>…</Lemma>
<Proposition>…</Proposition>
<ProofSketch>…</ProofSketch>
<Remark>…</Remark>

<EquationPanel title="Label" note="Boundary note under the equation.">
$$ L = \Omega_{T1}\,\Delta\,\partial\,[L] $$
</EquationPanel>

<StatusCard status="…" route="…" residues="…" claims="…">
  Optional extra text.
</StatusCard>

<ClaimBoundary>
  What this result does NOT claim.
</ClaimBoundary>
```

See `ARTICLE_AUTHORING_GUIDE.md` for full templates.

## 13. How generated maps and registries work

`npm run build` (and `npm run dev`) first runs
`scripts/generate-content-maps.mjs`, which scans `content/` and writes import
maps to `src/generated/` (`manualPapers.ts`, `manualProblems.ts`,
`manualPages.ts`, `articles.ts` — the last one includes parsed article
frontmatter). The script **never modifies your content files**.

`src/lib/registry.ts` reads the YAML registries at build time and merges
cached Zenodo metadata. Precedence for what a paper page displays:
YAML fields (`title`, `doi`, …) → Zenodo cache → fallbacks (`role`, slug).

## 14. How machine-readable endpoints work

All generated at build time from the same registries (in `src/lib/machine.ts`):

| Endpoint       | Contents                                                  |
| -------------- | --------------------------------------------------------- |
| `/sitemap.xml` | all nav pages, papers, problems, articles                 |
| `/feed.xml`    | Atom feed: articles + canonical papers                    |
| `/llms.txt`    | AI-oriented site summary + authority/interpretation rules |
| `/graph.json`  | research graph: paper/problem/article nodes + relations   |
| `/robots.txt`  | allows all crawling; references the sitemap               |

They update automatically when you add content. If you change the Shadow
Theory public framing itself, review the hand-written rule text in
`generateLlmsTxt()` in `src/lib/machine.ts`.

Crawler/AI accessibility implementation notes:

- All pages are statically rendered; article/paper/problem bodies are real
  HTML in the initial response (no client-only content).
- Every page sets a canonical URL and Open Graph/Twitter metadata; paper pages
  emit `ScholarlyArticle` JSON-LD, article pages emit `Article` JSON-LD, the
  layout emits `WebSite` JSON-LD.
- Only `/legacy/*` pages are marked `noindex` (intentionally — they are
  superseded historical pages, still crawlable via `follow`).
- To check indexability of a page: view source, confirm there is no
  `<meta name="robots" content="noindex">` and the content appears in the HTML.

## 15. Files you normally edit

```
content/papers.yaml
content/problems.yaml
content/articles/*.mdx
content/manual/papers/*.mdx
content/manual/problems/*.mdx
src/config/site.ts          (identity, tagline, claim boundary, base URL)
src/config/navigation.ts    (nav tabs)
```

## 16. Files you should NOT normally edit

```
src/generated/*             (overwritten on every build)
scripts/*                   (build machinery)
src/lib/*                   (loaders/generators — edit only for new features)
src/mdx-components.tsx      (Next.js convention file — do not move/rename)
next.config.mjs             (MDX pipeline + legacy redirects)
.cache/zenodo.json          (managed by sync script / GitHub Action)
```

## 17. Common mistakes and fixes

- **Article doesn't appear** → frontmatter missing `title`, or
  `status: draft`, or file not ending in `.mdx`.
- **Math shows as raw `$...$`** → unbalanced dollars, or the equation contains
  a bare `<` (write `\lt` or add spaces so MDX doesn't parse it as JSX).
- **Build fails after YAML edit** → indentation error; YAML needs exactly two
  spaces per level. Validate with `npm run build` locally.
- **DOI not showing** → `doi:` still `null` in `content/papers.yaml`
  (YAML wins over the cache), or record not yet synced — run
  `npm run sync:zenodo`.
- **New nav tab 404s** → you added the nav entry but not the page under
  `src/app/<route>/page.tsx` (or vice versa).
- **MDX component renders as plain text** → typo in the component name; names
  are case-sensitive (`<ClaimBoundary>`, not `<Claimboundary>`).

## 18. Pre-push checklist

```bash
npm run build        # must complete with no errors
npm start            # spot-check locally:
```

1. Homepage renders; six-paper stack shows.
2. The new/edited page renders (paper, article, or problem).
3. An equation-heavy page looks right (e.g. /articles/how-to-read-the-stack).
4. Narrow the browser to phone width: menu opens, equations scroll, no overflow.
5. `/sitemap.xml`, `/feed.xml`, `/llms.txt`, `/graph.json` respond.
6. New content contains no unlicensed claims (see claim boundary in
   `src/config/site.ts` and the loading manifest).

## 19. Vercel/GitHub deployment checklist

1. `git add -A && git commit -m "..." && git push`
2. Watch the deployment in the Vercel dashboard (build takes a few minutes).
3. Visit the production URL; hard-refresh (Ctrl/Cmd+Shift+R).
4. Check the changed page and `/sitemap.xml` in production.
5. If the build fails on Vercel: read the build log — it is almost always a
   YAML syntax error or MDX syntax error introduced in the last commit.

## 20. Worked example: publishing a new Zenodo paper end-to-end

Suppose you upload "Paper 7 — Branch Packet Calculus" to Zenodo and it gets
record ID `19999999` and DOI `10.5281/zenodo.19999999`.

1. `content/papers.yaml` — add at the end of the canonical block:

```yaml
  - id: paper:shadow:7
    slug: branch-packet-calculus
    number: 7
    category: canonical
    visibility: public
    featured: true
    title: "Branch Packet Calculus"
    subtitle: "Optional subtitle"
    role: "Establishes the public branch packet calculus."
    version: "v1"
    date: "2026-09-15"
    zenodo: 19999999
    doi: 10.5281/zenodo.19999999
    summary: >
      Two or three sentences for the paper page.
    supports: []
```

2. Create `content/manual/papers/branch-packet-calculus.mdx` with reading
   notes (optional).
3. `npm run sync:zenodo` (pulls title/creators/date into the cache).
4. `npm run build` — verify no errors; `npm start` and check
   `http://localhost:3000/papers/branch-packet-calculus` shows the DOI button.
5. Commit `content/`, `.cache/zenodo.json`; push. Vercel deploys.
6. In production, confirm the paper appears on `/papers`, in `/sitemap.xml`,
   `/feed.xml`, `/llms.txt`, and `/graph.json`.

---

## Appendix: design system quick reference

- Colors/typography are CSS variables in `src/app/globals.css` (`:root`).
  Changing `--accent` retunes the entire luminous cyan accent.
- Tailwind aliases for them are in `tailwind.config.js`
  (`fg`, `mute`, `edge`, `glow`, `vio`, `amberc`, `greenc`, …).
- Reusable card styles: `.card-surface`, `.card-surface-hover`,
  `.section-label`, `.text-luminous` (defined in globals.css).
- All animation respects `prefers-reduced-motion`.
