# Article Authoring Guide: Shadow Theory Website

How to write articles, paper notes, and open-problem pages in MDX.
(For registry mechanics, YAML fields, DOIs, and deployment, see
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

<ResultScope>
State the hypotheses, domain, and exact conclusion of the result.
</ResultScope>
```

## 2. Paper notes template

Create `content/manual/papers/<paper-slug>.mdx`. It is rendered as the "Notes"
section of `/papers/<paper-slug>`. No frontmatter needed.

```mdx
## Reading notes

What the paper proves, in plain language.

<Theorem title="Main result (informal)">
Statement with $inline$ math.
</Theorem>

<ResultScope>
Exact theorem domain, required inputs, and exception classes.
</ResultScope>
```

## 3. Open-problem notes template

Create `content/manual/problems/<problem-slug>.mdx`. Same format as paper
notes. If the registry entry has `legacy_notes: true`, the site automatically
shows a historical-draft banner above your MDX. Set it to `false` once you
replace old-era notes with current ones.

## 4. Writing display equations

- Use `$$ ... $$` on their own lines for display math.
- Long equations are fine; they scroll horizontally on phones automatically.
- Prefer `\mathrm{}` for multi-letter operators: `\mathrm{Init}`,
  `\mathrm{Img}`.
- Avoid bare `<` in math (MDX may read it as JSX); use `\lt` or spaces:
  `$a \lt b$`.
- Use LaTeX rather than Unicode approximations (α⁻¹, 𝓛) in formal math
  (`\alpha^{-1}`, `\mathcal{L}`).

## 5. Research components

```mdx
<Definition title="Term being defined">…</Definition>

<Theorem title="Name">…</Theorem>
<Lemma>…</Lemma>
<Proposition>…</Proposition>
<ProofSketch>…</ProofSketch>
<Remark>…</Remark>

<EquationPanel title="Panel label" note="Caption or result-domain note.">
$$ L = \Omega_{T1}\,\Delta\,\partial\,[L] $$
</EquationPanel>

<StatusCard
  status="open research target"
  result="Exact formal result with declared assumptions and domain"
>
  Optional free text below the fields.
</StatusCard>

StatusCard is a legacy presentational component kept for backwards
compatibility (it also accepts `route` and `residues` fields used by
superseded-era pages). Current articles normally need only `status` and
`result`, or just a `<ResultScope>` block.

<ResultScope>
The result's assumptions, domain, exact conclusion, and exception classes.
</ResultScope>
```

All components accept normal Markdown and math inside them.

## 6. Citations and DOI links

Link DOIs and papers inline:

```mdx
As established in [Paper 3](/papers/canonical-minimal-source-completion)
([DOI](https://doi.org/10.5281/zenodo.21370763)), the canonical minimal
completion is terminal: every relation-sufficient extension maps uniquely
onto the universally coarsest one.
```

For a paper's own citation block, the paper page generates one automatically
from the registry; you don't write it by hand.

## 7. Publishing precise results

Before publishing, make every sentence answer one of these questions:

- What does the work *define, construct, derive, prove, demonstrate,* or *enable*?
- Which source domain, target, hypotheses, and physical inputs determine that result?
- Which negative mathematical result is established, such as failure of descent,
  reconstruction obstruction, dynamical nonclosure, or internal non-identifiability?
- Which next-stage records cover experiment, peer review, engineering realization,
  or expert assessment?
- Does a `<ResultScope>` block make the theorem domain and exception classes easier
  to use correctly?
