# Atlas content changes, 10 November 2026

What changed in the content of the Reality Atlas, and the source for each
change. Presentation changes are described in `DESIGN.md`; this file is only
about what the Atlas says.

All figures below were produced by comparing the data before and after
(`src/data/reality-atlas.ts` at commit `1c3c48e` against the redesign branch).

## Summary

| | Before | After |
| --- | --- | --- |
| Entries | 59 | 108 |
| Connections | 107 | 167 |
| Observable traces | 12 | 12 (unchanged) |
| Guided tours | 1 (26 stops) | 4 (the original, unchanged, plus three) |
| Entries with an evidence status | 0 | 108 |
| Papers and articles linked as sources | 0 | 39 |
| Entry ids renamed or removed | | none |
| Existing connections changed or removed | | none |

- No existing entry was deleted and no id changed, so every existing
  `/atlas?focus=…` link still opens the same entry.
- 4 of the 59 existing entries had their text revised (section 1).
- 49 entries were added, all drawn from material already published on the
  site (section 2), with 60 new connections (section 3).
- Every entry now carries a status and a one-sentence note saying what the
  status rests on (section 4).
- Counts shown on the page are now computed from the data (section 5).

Nothing was added that is not on the published site. No paper, equation,
title, DOI or citation was altered: titles, DOIs and dates are read from
`content/papers.yaml`.

## 1. Revised entries: the canonical field and its neighbours

**Why.** The Atlas described the canonical field as it stood before the CSCF
paper of 3 November 2026 ("Canonical Spectral-Curvature Field",
doi:10.5281/zenodo.23899458, web edition at `/source-readout/cscf`). The paper
changes three things the Atlas was saying: the coherence symbol is *declared*
by a realization rather than selected by the aperture; the field begins where
an *admitted spectral branch* supplies a carrier; and the two faces have
*different* uniqueness results. It also places the earlier Lambda field and
coherence field as antecedents of one operator structure.

**Sources read:** the CSCF web edition, chapters 1 (the common carrier),
4 (the Lambda face), 5 (the coherent face), 7 (classification), 8, 10 and 12
(boundary and tests), in `content/paper-integrations/cscf/`.

### `canonical-field` · Canonical spectral-curvature field

| Field | Before | After |
| --- | --- | --- |
| Eyebrow | One carrier · two faces | One carrier · two linked responses |
| Summary | The common field whose coherent and dissipative responses are functions of the same spectral carrier. | The field layer through which an admitted spectral realization is organized into coherent and dissipative readouts. |
| Description | Coherence and dissipation are not separate substances. The aperture-selected positive carrier K produces a contraction semigroup; the selected real symbol h produces a unitary group; together they form one normal accretive evolution with a shared spectral fingerprint. | A closed nonnegative curvature form on a Hilbert carrier determines a positive selfadjoint operator K. The same K generates a contraction semigroup, and a declared real coherence symbol h selects C = h(K) and the unitary group it generates. Attenuation and phase rotation therefore share one spectral decomposition and differ only in how they weight it. The field begins where an admitted spectral branch of the aperture supplies that carrier. Source/readout and coherent/dissipative are two distinct relationships. |
| Note | (kept) For a fixed carrier, both faces commute. In the reciprocal-memory realization, the carrier evolves with the state. Conditional alignment holds along a realized history, while time ordering and full feedback can alter the measured response. | Same text, with this added: The common-carrier statement holds within each realization: comparing different systems needs realization maps between them, and deriving a particular measured profile from physical realization laws remains open. |
| Status | (none) | Conditional. "The operator statements are proved in the CSCF paper of 3 November 2026. Using them needs an admitted spectral branch to supply the Hilbert carrier, the closed curvature form and the declared coherence symbol." |

The equations, typed contract and connections of the entry are unchanged.

### `spectral-spine` · Weighted spectral spine

- Description: "selected coherence symbol h" became "the declared coherence
  symbol h". Nothing else in the sentence changed.
- Note added: "The spine is an output structure of an admitted spectral branch,
  not the whole aperture. The CSCF paper writes such a branch as
  (H, K, h(K), J, W): a Hilbert carrier, the positive carrier, the declared
  coherence operator, an optional mirror involution and a law-visible algebra."
- Reading link added: `/source-readout/cscf/01-common-carrier`.

### `coherent-face` · Coherent face

- Description: "through the aperture-selected symbol h" became "through the
  declared symbol h".
- Note added: "The two faces have different uniqueness results. Under explicit
  axioms the dissipative face has a classification theorem; the reversible
  axioms still leave the coherence symbol to be declared."
- Reading links added: `/source-readout/cscf/05-coherent-face`,
  `/source-readout/cscf/07-classification`.

### `dissipative-face` · Dissipative face

- Note added: "Under the explicit axioms of the CSCF paper, an admissible
  dissipative scalar is unique up to a bounded modulation within the declared
  Fejér-calibrated determinant class. The proof does not classify arbitrary
  dissipative spectral scalars, and no comparable result selects the coherent
  symbol." (This wording follows Theorem 8.2 of the paper; an earlier draft of
  the note claimed more and was corrected against it.)
- Reading links added: `/source-readout/cscf/04-lambda-face`,
  `/source-readout/cscf/07-classification`.

### Historical stage and current description, kept apart

Two new entries carry the history, so the current description is not mixed
with it:

- `lambda-coherence-antecedents` (status: Historical) records the Lambda field
  and the coherence field as earlier, separate formulations that the CSCF
  paper places as two responses of one carrier.
- `profile-selection-problem` (status: Open) records what the CSCF paper
  states it does not do: derive a particular measured profile from physical
  realization laws.

## 2. New entries

All 49 are defined in `content/atlas/research.yaml`. Text is taken from the
site's own paper registry (`content/papers.yaml`: `role` and `summary`) or
from the article named; where an entry needed its own wording it follows the
source and is recorded in the YAML. Titles, DOIs and dates below are the
registry's.

### The whole model (4 entries · status: Interpretation)

Source: the article *The Full Shadow Model* (`/articles/full-shadow-model`).

| Entry | Source section |
| --- | --- |
| `frame-ground` Unconditioned ground | the ground before distinction |
| `frame-unsplit` The unsplit | the unsplit: unity before source and readout |
| `frame-complement` Source and readout | two complementary aspects of one whole |
| `frame-differentiation` Recursive differentiation | recursive differentiation into a physical world |

These place the instrument inside the wider account. They are marked
Interpretation, and the page states that Ω (the lamp) is the mathematically
defined formation package and does not stand for the unconditioned ground.

### Foundation: the seven papers and two context entries (9 entries)

| Entry | Status | Source |
| --- | --- | --- |
| `foundation-non-equivalence` | Proved | Paper 1, doi:10.5281/zenodo.21369967 |
| `foundation-target-necessity` | Proved | Paper 2, doi:10.5281/zenodo.21370501 |
| `foundation-minimal-completion` | Proved | Paper 3, doi:10.5281/zenodo.21370763 |
| `foundation-geometric-realization` | Proved | Paper 4, doi:10.5281/zenodo.21370985 |
| `foundation-projected-dynamics` | Proved | Paper 5, doi:10.5281/zenodo.21371251 |
| `foundation-identifiability` | Proved | Paper 6, doi:10.5281/zenodo.21371451 |
| `foundation-rs2-witness` | Proved, inside the RS2 model | Paper 7, doi:10.5281/zenodo.21371861 |
| `everything-equation-schema` | Interpretation | `/source-readout/origins` |
| `superseded-june-stack` | Historical | the superseded June 2026 records in `content/papers.yaml` |

The status note of Paper 7 reads: "Proved inside the positive-tension
Randall–Sundrum (RS2) braneworld model. It is a model-relative witness. It
does not assert that our universe is an RS2 braneworld."

### Spectral carriers (11 entries)

| Entry | Status | Source |
| --- | --- | --- |
| `cscf-operator-origin` | Proved | CSCF, doi:10.5281/zenodo.23899458 |
| `cscf-modular-ratios` | Proved (Theorem 9.1, finite retained subspace) | CSCF |
| `cscf-closure-coherence` | Proved (finite positive carrier, stated regularity) | CSCF |
| `spectral-ratios` | Measured | doi:10.5281/zenodo.23888292 |
| `spectral-profiles` | Construction | doi:10.5281/zenodo.23912447 |
| `adaptive-carriers` | Construction | doi:10.5281/zenodo.23924603 |
| `sustained-carriers` | Conditional | doi:10.5281/zenodo.23927855 |
| `sharp-uniqueness` | Proved (stated regime of the three-node realization) | doi:10.5281/zenodo.23932350 |
| `slow-passage` | Proved (the adaptive carrier model under a slow sweep) | doi:10.5281/zenodo.23935694 |
| `lambda-coherence-antecedents` | Historical | CSCF chapter 1 |
| `profile-selection-problem` | Open | CSCF chapter 12 |

`spectral-ratios` is marked Measured, with the note: "A measured recurrence
with recorded controls and stated diagnostic limits. It does not by itself
establish a shared physical source law."

### Gravity and holography (5 entries)

| Entry | Status | Source |
| --- | --- | --- |
| `gravity-transport-projective` | Conditional | doi:10.5281/zenodo.23954887 |
| `gravity-local-horizon` | Conditional | doi:10.5281/zenodo.24029166 |
| `gravity-modular-transport` | Conditional | doi:10.5281/zenodo.24013975 |
| `gravity-boundary-balls` | Proved (linearized, first order, one fixed AdS boundary slice) | doi:10.5281/zenodo.24029188 |
| `gravity-second-order` | Proved (for an explicit transverse AdS perturbation) | doi:10.5281/zenodo.24021664 |

### Readers and access (6 entries)

| Entry | Status | Source |
| --- | --- | --- |
| `reader-source-completions` | Construction | doi:10.5281/zenodo.23721088 |
| `reader-phase-to-record` | Construction | doi:10.5281/zenodo.23721103 |
| `reader-feedback` | Construction | doi:10.5281/zenodo.23721114 |
| `reader-certification` | Construction | doi:10.5281/zenodo.23721122 |
| `reader-readout-design` | Construction | doi:10.5281/zenodo.23721133 |
| `sealed-or-leaky` | Conditional | doi:10.5281/zenodo.23077474 |

### Perspective and experience (14 entries)

| Entry | Status | Source |
| --- | --- | --- |
| `spc2-constitution` | Conditional | the SPC-2 monograph (`shadow-theory-and-consciousness`) |
| `perspective-boundaries` | Proved (finite constructions, stated definitions) | `consciousness-relational-boundaries` |
| `perspective-interfaces` | Measured (48 synthetic systems, registered comparison) | `consciousness-effective-interfaces` |
| `perspective-realizations` | Conditional | `consciousness-binary-realizations` |
| `perspective-relational-appearance` | Interpretation | doi:10.5281/zenodo.23408737 |
| `perspective-whole-field` | Interpretation | doi:10.5281/zenodo.23608069 |
| `perspective-temporal-passage` | Interpretation | doi:10.5281/zenodo.23591626 |
| `perspective-block-universe` | Interpretation | doi:10.5281/zenodo.23604713 |
| `perspective-bounded-agency` | Construction | doi:10.5281/zenodo.23202999 |
| `perspective-constituted-agency` | Interpretation | doi:10.5281/zenodo.23581587 |
| `perspective-development` | Conditional | doi:10.5281/zenodo.23190711 |
| `perspective-reflective-alignment` | Interpretation | doi:10.5281/zenodo.23294465 |
| `perspective-continuity` | Interpretation | doi:10.5281/zenodo.23424138 |
| `perspective-misleading-ai` | Interpretation | doi:10.5281/zenodo.23582387 |

The consciousness programme is placed at the Readout stage, in line with the
site's own statement that observers, instruments and experienced scenes belong
within the readout.

## 3. Connections

60 connections were added, all from the `relations` of the new entries. Each is
typed:

- **mathematical**: a dependence the source proves;
- **conceptual**: a reading relationship. No theorem is transferred.

During the audit several relations first drafted as mathematical were changed
to conceptual, because the source relates the two topics without proving a
dependence between those two Atlas entries. The 107 existing connections are
untouched.

Equation tags on new entries are descriptive labels (for example "CSCF ·
common carrier"), not paper equation numbers, except where a theorem number is
quoted in the status note.

## 4. Statuses

Every entry now has one of seven statuses: Proved, Conditional, Construction,
Measured, Interpretation, Open, Historical. The definitions are in
`src/data/atlas/schema.ts` and are shown on the page.

Current totals: Proved 15 · Conditional 21 · Construction 49 · Measured 2 ·
Interpretation 13 · Open 6 · Historical 2.

For the 59 existing architecture entries the status was assigned by rule, not
by upgrading anything:

- **Construction** by default, with the note: "Part of the typed realization
  programme (the twelve-chapter reality model). It states what a branch must
  supply and how the parts connect; it reports no experimental confirmation."
- **Conditional** where the entry already declared a gate; the note quotes the
  gate. This covers `qft`, `pregeometry`, `matter`, `parameter-selection` and
  `global-closure`.
- **Conditional** for the seven Quantum Measurement entries, whose
  constitutive premises the site already states.
- **Open** for five entries whose own text already says the required input has
  not been supplied or computed: `rh-face`, `fluid-face`, `observable-alpha`,
  `observable-qcd`, `observable-baryogenesis`. Their status notes say what is
  missing (for example, for the fine-structure observable: "No numerical value
  is claimed. Evaluation is an executable computation gate that has not been
  run to a certified result.").
- `canonical-field`: Conditional, as described in section 1.

Result for the 59 architecture entries: Construction 41, Conditional 13,
Open 5. No architecture entry is marked Proved or Measured.

## 5. Counts

The old page printed fixed numbers (59 nodes, 107 edges, "1,133 equation
tags", "12 canonical chapters"). These are now computed:

- entries, connections, traces, papers linked, equations shown and the status
  totals come from the data at build time;
- the chapter count (12) and the number of numbered equations (1,133) are
  counted from `content/reality-model/*.md` by
  `scripts/generate-content-maps.mjs`. The count confirmed the old figure.

The "ten sectors" figure is the count stated in chapter 10 of the reality
model. It is kept in the data but no longer displayed. The Sectors group of
the Atlas has the same 13 entries as before.

## 6. Removed

- The hand-placed 3D coordinates (`position`, `cameraDistance`) of the 59
  entries. Entries are now placed by stage and group, so adding one needs no
  layout work.
- The level-of-detail switch. Every entry is now reachable from its stage.
  Old links with `lod=` still open correctly; the parameter is ignored.

## 7. Uncertainties and things left as they were

- **Where the consciousness programme sits.** The sources say perspectives
  belong within the readout; they do not assign them to a tier of the
  realization programme. The Atlas lists them under the Readout stage as a
  group of their own and connects them to the `observers` sector by conceptual
  relations only.
- **Papers 1 to 7 and the instrument.** The seven foundation papers are about
  sources, readouts and completion in general, not about a particular stage of
  the bench. They are listed with the overview, not attached to a stage.
- **The illustration.** The optical bench is new and is a metaphor. The page
  states its limits in three places; see `DESIGN.md`, section 6.
- **Not reviewed line by line.** The descriptions, equations and typed
  contracts of the 55 architecture entries that were not revised were checked
  for consistency with the CSCF paper's terminology but were not re-derived
  against the twelve chapters of the reality model.
