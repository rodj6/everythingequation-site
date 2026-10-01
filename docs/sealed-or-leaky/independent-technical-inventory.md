# Sealed or Leaky: independent conversion audit inventory

Source: polished version 3.1; no edits made to source or website by this audit.

## Verification

The supplied Python script was rerun normally. All executed exact checks and 300 supplementary sanity checks passed. Full report: `independent-numerical-verification.json`. Script verification is not a proof audit or physical validation.

## Coverage counts

- 14 numbered sections and Research transparency and reproducibility.
- 45 formal results: 14 theorems, 15 lemmas, 11 propositions, 5 corollaries.
- 45 proofs, 1 definition, 4 remarks, 40 bibliography entries.
- 135 labels and 145 ref/eqref uses.
- 136 display environments: 73 bracket displays, 53 equations, 8 align, 2 align*. Align contains multiple rows.
- 2 tabularx tables, 1 tabular table, 2 longtables, 2 mathematical arrays.
- No appendices occur in this manuscript.

## Full formal inventory

| Type | Title | Label | Section |
|---|---|---|---|
| lemma | Outcome determinism already supplies single outcomes | tet:SOredundant | The source tetralemma |
| lemma | No-signalling guessing bound | tet:guess | The source tetralemma |
| theorem | Hidden-information theorem | tet:hidden | The source tetralemma |
| lemma | Sharp Shannon refinement and simultaneous sharpness | tet:sharpShannon | The source tetralemma |
| theorem | Source tetralemma: exclusion and corrected necessity | tet:tetralemma | The source tetralemma |
| proposition | The three-branch form fails | tet:trilemmafails | The source tetralemma |
| proposition | Where convex-linearity bites: the chance branch | tet:chance | The source tetralemma |
| lemma | Conditional-range CHSH concentration | exp:range | Experimental anchoring |
| proposition | Finite-sample outcome-likelihood certificate | exp:finite | Experimental anchoring |
| lemma | Finite-seed obstruction to exact sequential setting independence | exp:seednecessity | Experimental anchoring |
| lemma | Rounding-controlled entropy-production parameter | exp:rounding | Experimental anchoring |
| lemma | Uniformity-to-entropy continuity with the correct dimension | exp:Audenaert | Experimental anchoring |
| lemma | Translation of the certified extracted string | exp:translation | Experimental anchoring |
| corollary | The correctly scoped 1024-bit Shannon consequence | exp:bierhorst | Experimental anchoring |
| lemma | Atom-tail transfer through determinism and postselection | exp:tailtransfer | Experimental anchoring |
| corollary | Published-parameter finite-sample source-response certificate | exp:rawcor | Experimental anchoring |
| lemma | The fragment's prior-response tail and its additional premise | exp:prioratom | Experimental anchoring |
| lemma | Threshold test of a complete deterministic admissible readout | exp:thresholdtest | Experimental anchoring |
| theorem | Operational surrogate and testing ceiling | op:surrogate | Operational equivalence and its restricted alternatives |
| theorem | Quantitative failure of readout-only prediction | op:radius | Operational equivalence and its restricted alternatives |
| theorem | Conditional randomness and completion size | op:information | Deterministic completions require unresolved information |
| theorem | Transport of accessible distinguishability | op:transport | Conservation of complete information and operational sealing |
| theorem | Robust pairwise preparation separation | ctx:robust | What a quantum preparation description necessarily omits |
| proposition | A saturating model of the finite table | ctx:saturation | What a quantum preparation description necessarily omits |
| theorem | Separation from the trine mixture | ctx:sum | What a quantum preparation description necessarily omits |
| corollary | Conditional noninjectivity of the preparation readout | ctx:noninjectivity | What a quantum preparation description necessarily omits |
| theorem | Exact sealing and POVM form | ctx:povm | Operational sealing and quantitative failures of POVM form |
| theorem | Quantitative ensemble witness for a nonquadratic event | ctx:quantitativepovm | Operational sealing and quantitative failures of POVM form |
| proposition | Detectable leaks and independent repetition | ctx:amplification | Operational sealing and quantitative failures of POVM form |
| proposition | Finite-ensemble asymptotic sealing | con:ensemblesealing | The measurement constitutions and the scope of their sealing |
| lemma | Exchangeability of carrier histories | pil:exchange | Finite pilot resources: exact inventories and retained records |
| lemma | Census and monotone exports | pil:census | Finite pilot resources: exact inventories and retained records |
| lemma | Drainage with an explicit hazard | pil:drain | Finite pilot resources: exact inventories and retained records |
| lemma | Retained copy of a drained endpoint | pil:writer | Finite pilot resources: exact inventories and retained records |
| theorem | Finite retained-record non-affinity | pil:retained | Finite pilot resources: exact inventories and retained records |
| corollary | Irreducible density-matrix simulation error | pil:simulator | Finite pilot resources: exact inventories and retained records |
| theorem | Finite retained setting dependence | pil:signal | Finite pilot resources: exact inventories and retained records |
| corollary | Irreducible no-signalling simulation error | pil:nosignalsimulator | Finite pilot resources: exact inventories and retained records |
| proposition | An initial-residue obstruction | pil:residueobstruction | Finite pilot resources: exact inventories and retained records |
| theorem | Single-edge undrained asymptotic | pil:undrained | Finite pilot resources: exact inventories and retained records |
| theorem | CHSH dependence and the exact total-variation budget | sig:budget | Setting dependence, controlled nonequilibrium, and access |
| proposition | Semibounded two-party Gaussian writers | sig:massive | Setting dependence, controlled nonequilibrium, and access |
| proposition | A proper-mixture leak | sig:properwire | Setting dependence, controlled nonequilibrium, and access |
| proposition | Slice-sensitive and marginal action reads | sig:slices | Setting dependence, controlled nonequilibrium, and access |
| proposition | The additional premise needed for steering a leak | sig:steering | Setting dependence, controlled nonequilibrium, and access |

## Discovery requirements

The website uses `src/lib/machine.ts` for sitemap, Atom feed, llms.txt and graph.json. New content must enter all four outputs; the sitemap should include every technical chapter and the article. List full web reading order, complete Markdown, PDF, TeX, script, manifest in llms.txt. Do not rely only on the general papers registry, which would add a paper landing page but not a standalone technical reading sequence. Graph nodes should connect formal results to their corresponding web anchors, canonical Papers 6–7, and separate pilot/massive measurement constitutions without implying derivation of the new ontology.

The registry currently prioritizes `quantumPublications`, consciousness monograph, and consciousness research metadata. If implementing a Sealed-specific publication config, give it explicit authoritative metadata and local downloads. Avoid letting network metadata replace reserved/supplied publication identity. Preserve canonical paper count seven and independent numbering of consciousness papers.

## High-value exact formulas

- `H_min(Z|T) >= -log2(3/2-S/4)` and `H(Z|T) >= (S-2)/2` for `2<S<=4`, sharp in the stated no-signalling class.
- Optional QT: `G_Q(S)= (1+sqrt(2-S^2/4))/2`, `f_Q=1-log2(1+sqrt(2-S^2/4))`; no optimal quantum Shannon curve is proved.
- `power <= alpha + epsilon` if source complete-law TV distance to alternative class is at most epsilon.
- Same-readout gap delta implies simulator worst-case error at least delta/2; continuity version is `[delta-L d(t0,t1)]_+/2`.
- `H(Z|T0)>=H(R|T0)` and `M >= (1-epsilon)2^n` for deterministic completion.
- Accessible transport: `d_F1(Phi_*P,Phi_*Q)=d_(Phi^*F1)(P,Q)`. Full TV preserved for bimeasurable bijections; restricted access not necessarily preserved.
- Trine pair TV>=1/4, robust max(0,1/4-4epsilon); mixture sum>=1/2, robust max(0,1/2-13epsilon/2).
- `Gamma(h)=2d(h)`; Gamma/2 <= d_eff <= Gamma; finite witness at most d^2+1 pure-state occurrences.
- Pilot retained prep gap>=1/(2N)-2epsilon_N; simulation error>=1/(4N)-epsilon_N.
- Pilot retained setting gap>=1/N-2epsilon_N^AB; NS simulation error>=1/(2N)-epsilon_N^AB.
- Reweighting union mass>=(S-2)/2; exact TV budget signal sup=min(2d,d+kappa_y/2,1) for kappa_y>0 and zero if kappa_y=0.

## Scientific reading boundaries

- Bell requires conditional NS for the nominated T. Unconditional laboratory NS does not supply it.
- D implies SO; branching changes that formalism. Four escape descriptions are not four independent assumptions.
- Raw-data >1304.97 Shannon/deletion-smoothed bits and >39.93 unsmoothed bits require B-admissibility, runwise determinism, imported aggregate certificate, pass probability pi>=kappa. Extractor not needed for that result.
- Extracted-string nearly1024 Shannon bits corresponds only to >39.86 unsmoothed bits from its error guarantee alone.
- The threshold test bound is frequentist, not a posterior ontology probability; it needs no lower bound on pass probability.
- Hensen/Rosenfeld/Storz central-value table is illustrative; no trial data were reanalyzed.
- Trine is about preparation distributions, not incompleteness of each pure ray.
- Mathematical reversible source may have sealing; retained past records persist.
- Pilot and massive constitutions retain distinct premises. Finite pilot record effects are model predictions, not observed spacelike communication.
- Nonequilibrium sensitivity requires an allowed preparation and reader to become an operational channel.
- Ground, unsplit, reciprocal whole and awareness are framework ontology; these results do not derive them.
