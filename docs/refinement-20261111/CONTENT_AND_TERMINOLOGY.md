# Content and terminology changes, 11 November 2026

This pass changed explanatory copy and Atlas descriptions. It did not change
any paper, article, proof, equation in a publication, DOI, download or URL.
Each change below gives the source it follows.

## 1. The source operation: "closure operator" became "closure-generating operator"

**Entry:** `tier0-law` (Tier 0 · Source-fixed law), field *Regularity*.

| | |
| --- | --- |
| Before | "Monotone, inflationary and accessible closure operator" |
| After | "Closure-generating operator: monotone, inflationary and κ-ary. Iterating it stabilizes by stage κ at the least fixed point (S2.24)" |

**Why.** The source documents define a one-step operator and reach the closure
by iterating it:

- `content/reality-model/01_canonical_foundation.md` §4: "Because 𝕃_Ω is
  monotone and inflationary, it has a least fixed point" (4.2), with the
  ordinal construction A₀ = ∅, A_{α+1} = 𝕃_Ω(A_α) (4.4), which "stabilizes at
  the least closure ordinal".
- `content/reality-model/02_source_substrate.md` (S2.22a–S2.24): under the
  small-generation condition "the operator is κ-ary and preserves unions of
  κ-directed chains", and "the closure sequence stabilizes by stage κ".

Neither document says the one-step operator is idempotent, which is what
"closure operator" would assert. "Accessible" was correct in the technical
sense (κ-ary) and is now stated as that. The equation's caption was rewritten
to say the same in words, and equation S2.24 (iteration to closure) was added
to the entry, copied from the source.

Nothing else in the entry changed. The historical lawhood papers, where Ω *is*
stated to be an idempotent completion operator on a different object, are
untouched and remain on their preserved pages.

## 2. The ground and Ω

**Entries:** `frame-ground` (rewritten summary, description and note; one new
relation to `omega`), `frame-complement` and `frame-differentiation` (one
sentence each).

The Atlas now says in one place, positively: the unconditioned ground is what
the theory takes as fundamental and leaves unspecified; the formal account
begins one step later at Ω, which has mathematical structure of its own.

**Sources.**

- `content/articles/full-shadow-model.mdx`: "Unconditioned ground names what
  precedes even the unsplit … The ground is therefore left unspecified"; "The
  earlier unconditioned ground receives no new mathematical symbol here"; the
  Atlas's "Ω is a defined pre-geometric formation package … It therefore
  occupies the formal realization account, rather than serving as another name
  for the unspecified ground."
- `content/paper-integrations/block-universe/02-ground-source-history-and-readout.mdx`:
  "Here Ω belongs to the formation model; it is not an exact name for the
  Ground."
- `content/reality-model/01_canonical_foundation.md` (3.3): Ω as the formation
  package (Σ_Ω, 𝔊_Ω, 𝒲₀, 𝒪^NFE_Ω, ℐ_Ω, 𝒟_Ω).

The picture follows the same rule: nothing is drawn behind the lamp.

## 3. The Everything Equation and the three uses of Ω

**Entry:** `everything-equation-schema`, retitled "The Everything Equation,
then and now"; description, note, status note, equations and relations
rewritten. **Page:** `/framework`, new subsection "The ground, Ω and closure".
**Page:** `/legacy/*`, one added link from the historical notice to
`/source-readout/origins`.

What the entry now says:

1. The Everything Equation, L = ΩΔ∂[L], stated lawhood as a fixed point of
   presentation collapse, admissibility and completion.
2. The idea continues in three exact constructions with different objects:
   source closure (Tier 0), canonical completion, and dynamical closure.
3. Ω has had three roles: the completion operator of the equation; with a
   subscript, the Tier-1 completion and readout role in the typed schema; and
   the source formation package in the source-to-readout construction, where
   closure is one of the operations the package contains.

**Sources.**

- `content/reality-model/01_canonical_foundation.md` §3: "Equation (3.3)
  replaces the incompatible uses of Ω as source, closure operator and
  generated problem tuple. Closure is an operation belonging to Ω, not a
  second meaning of the symbol."
- Same document §4.1 (4.5)–(4.10): the historical expression "is the
  compressed schema of (4.1)–(4.2)", with ∂ as the intrinsic boundary of a
  cell, Δ as generated distinction and attachment, and Cl as lawful source
  closure; "lawhood = source closure ∘ generated distinction ∘ intrinsic
  boundary". Equations (4.9) and (4.10) were added to the entry from here.
- `src/app/source-readout/origins/page.tsx` (existing page): canonical
  completion applied twice "adds no new distinctions"; observable evolution is
  well defined "exactly when equal present readouts have equal future
  readouts"; "Historical closure operators, a realization space denoted by the
  same Greek letter, and a source-signature object have distinct formal
  roles."
- `content/manual/pages/what-is-the-everything-equation.mdx` (preserved
  historical page): the original operator roles.

**What was left alone.** The preserved historical pages and papers keep their
wording, including the stronger claims of that period. They carry the site's
"Historical page" notice, which now also links to the page that follows the
idea forward. The existing text of `/source-readout/origins` and of the
framework page's Everything Equation card was not edited.

## 4. The worked example: what a readout keeps

New in the Atlas (reading panel, "About this picture", and the second-probe
control). It states two results of the foundation papers in plain words:

- a readout answers a question exactly when the answer is the same for every
  source that gives that readout (the descent criterion; entries
  `foundation-non-equivalence`, `foundation-target-necessity`);
- when it does not, the least addition that restores the lost distinction can
  be constructed (`foundation-minimal-completion`).

The picture shows this with paired marks on the readout plate and a second
probe. Which marks are pairs is chosen for the demonstration and says nothing
about any particular physical system; "About this picture" says so.

## 5. Copy rewritten for voice

Stage summaries (`src/data/atlas/schema.ts`), the overview text of the reading
panel, "About this picture", the note under the instrument, the iris wording,
the Atlas paragraph on the homepage and the picture descriptions were
rewritten to state things directly. Qualifications that carry information
(entry status notes, the scope of the RS2 witness, measured-result limits)
were kept.

### The status key

The seven statuses and every entry's status are unchanged. Four explanations
in the key were reworded to state what the status establishes:

| Status | Before | After |
| --- | --- | --- |
| Conditional | "… Those premises are not derived here." | "… the entry lists them." |
| Construction | "It shows how something can be built; it does not claim nature is built that way." | "It establishes that something of the kind can be built." |
| Interpretation | "It guides the programme; it is not a theorem." | "It guides the programme and says where the theorems are meant to apply." |
| Open | "… has not been met. No result is claimed." | "… has yet to be met." |

Individual entries keep their own scope notes (for example, that the RS2
witness is model-relative), since those come from the papers.

## 6. Background reading that is not on the site

The reconstruction papers added to the working folder (Einstein 1916, the
quantum mechanics and quantum field theory manuscript, Cardy, BTZ, BTZ
Geometry, Brown–Henneaux, Witten) were read as background. Nothing from them
was added to the site: no entries, no downloads, no quotations, no results.
They informed two choices of emphasis only, both already supported by
published pages: describing a readout by what is constant on the sources
behind it, and treating a second readout as the way to recover a lost
distinction.
