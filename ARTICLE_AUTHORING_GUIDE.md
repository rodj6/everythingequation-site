# Article Authoring Guide — Shadow Theory Website

How to write articles, paper notes, and open-problem pages in MDX.
(For registry mechanics — YAML fields, DOIs, deployment — see
`SITE_MAINTENANCE_MANUAL.md`.)

---

## 1. Research article template

Create `content/articles/<slug>.mdx`. The filename becomes the URL
(`/articles/<slug>`).

```mdx
---
title: "Your Article Title"
description: "One sentence shown on cards, in search results, and feeds."
date: "2026-08-01"
updated: "2026-08-15"        # optional; add when you revise
tags: [notes, physics]       # optional
status: published            # draft hides it everywhere
---

Opening paragraph. Plain Markdown works: **bold**, *italic*,
[links](/framework), `code`, lists, tables, blockquotes.

## A section heading

Inline math: the map $\rho : \mathcal{C} \to S$ is a readout.

Display math:

$$
S \cong \mathcal{C} / \sim_\rho
$$

<ClaimBoundary>
State explicitly what this article does not claim.
</ClaimBoundary>
```

## 2. Paper notes template

Create `content/manual/papers/<paper-slug>.mdx` — rendered as the "Notes"
section of `/papers/<paper-slug>`. No frontmatter needed.

```mdx
## Reading notes

What the paper proves, in plain language.

<Theorem title="Main result (informal)">
Statement with $inline$ math.
</Theorem>

<ClaimBoundary>
Explicit non-claims and exception classes.
</ClaimBoundary>
```

## 3. Open-problem notes template

Create `content/manual/problems/<problem-slug>.mdx`. Same format as paper
notes. If the registry entry has `legacy_notes: true`, the site automatically
shows a historical-draft banner above your MDX — set it to `false` once you
replace old-era notes with current ones.

## 4. Writing display equations

- Use `$$ ... $$` on their own lines for display math.
- Long equations are fine — they scroll horizontally on phones automatically.
- Prefer `\mathrm{}` for multi-letter operators: `\mathrm{Init}`,
  `\mathrm{Img}`.
- Avoid bare `<` in math (MDX may read it as JSX); use `\lt` or spaces:
  `$a \lt b$`.
- Never paste Unicode approximations (α⁻¹, 𝓛) into formal math — always LaTeX
  (`\alpha^{-1}`, `\mathcal{L}`).

## 5. Research components

```mdx
<Definition title="Term being defined">…</Definition>

<Theorem title="Name">…</Theorem>
<Lemma>…</Lemma>
<Proposition>…</Proposition>
<ProofSketch>…</ProofSketch>
<Remark>…</Remark>

<EquationPanel title="Panel label" note="Caption / boundary note.">
$$ L = \Omega_{T1}\,\Delta\,\partial\,[L] $$
</EquationPanel>

<StatusCard
  status="candidate"
  route="R2 effective"
  residues="r1, r4"
  claims="bounded by cap table"
>
  Optional free text below the fields.
</StatusCard>

<ClaimBoundary>
What is *not* claimed. Use this liberally.
</ClaimBoundary>
```

All components accept normal Markdown and math inside them.

## 6. Citations and DOI links

Link DOIs and papers inline:

```mdx
As established in [Paper 3](/papers/canonical-completion-object)
([DOI](https://doi.org/10.5281/zenodo.XXXXXXX)), canonical completion is
certified initiality.
```

For a paper's own citation block, the paper page generates one automatically
from the registry — you don't write it by hand.

## 7. Preventing overclaiming

Before publishing, check every sentence against these rules (from the public
loading manifest):

- Don't say or imply: one equation solves everything; empirically validated;
  proves a TOE; peer reviewed / expert approved (unless separately true);
  build-ready engineering; private machinery as public proof.
- Branch results are not canonical Shadow Theory without a **branch packet**
  (route, status, residues, obligations, claim boundary).
- Safe framing verbs: *defines, proves (for theorems), establishes, licenses,
  targets, holds as an open problem, is conditional on*.
- When in doubt, add a `<ClaimBoundary>` block. It reads as strength, not
  weakness — claim discipline is the framework's identity.
