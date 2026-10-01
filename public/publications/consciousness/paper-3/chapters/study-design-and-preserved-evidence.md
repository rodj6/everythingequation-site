# Section 3: Study design and preserved evidence

<!-- Complete paper-3 web edition. Mathematical macros used below:
\topfraction = .92
\bottomfraction = .85
\textfraction = .08
\floatpagefraction = .78
\E = \mathcal E
\HH = \mathcal H
\BB = \mathcal B
\one = \mathbf 1
\RRC = \textsf{RRC}
\RJC = \textsf{RJC}
\iid = i.i.d.
\SuiteFixtures = 48
\SuiteSlots = 1,152
\UniqueSlots = 1,140
\CalibrationOverlapSlots = 79
\CalibrationOverlapUnique = 74
\SharedCalls = 442,368
\SharedResets = 55,296
\TrainCalls = 7,680
\CalibrationCalls = 1,536
\EvidenceCalls = 9,216
\RPass = 1063
\SPass = 1063
\PPass = 970
\OPass = 869
\BPass = 1053
\RMean = 0.054913
\SMean = 0.054918
\PMean = 0.099072
\OMean = 0.152015
\BMean = 0.064684
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\rad = \operatorname{rad}
\argmin = \operatorname{arg\,min}
-->

<a id="section-3"></a>

## 3 Study design and preserved evidence

<a id="sec:design"></a> 

<a id="section-3-1"></a>

### 3.1 Separate cohorts and one matched endpoint

<a id="p3:c18"></a> [Table 2](/consciousness/research/paper-3/study-design-and-preserved-evidence#tab:studies) records the study boundaries. RRI is a known-model implementation test. OII-1–3 compare discovery and repair procedures on successive fresh synthetic cohorts; each revealed cohort subsequently becomes development material. OII-4 then compares representation families on a shared dataset. Equal total query allowances in earlier studies do not imply equal observations, equal fitting data, or equal computation. All five stages were developed within the same author-directed, AI-assisted programme <a id="citation-6"></a>[[15](/consciousness/research/paper-3/references#bib-RodgersEvidence)].

The OII-4 suite contains 48 systems: 42 fresh instances from the inherited mechanism grammar and six instances from three added families, checksum protocols, stochastic gates and alternating channels. Four exact-public-law twin pairs are included as semantic controls. A single new private seed generates this cohort. The study is deliberately heterogeneous but is not a sample from a nominated population of natural systems. Its family counts, twin construction and one realized tape per fixture preclude interpreting 1,152 scores as independent draws of algorithm performance.

  

Table 2. Distinct studies and primary acquisition budgets. The table is a design summary, not a learning curve.

<a id="tab:studies"></a>   <a id="source-tabular-1"></a>

| Study | Systems/conditions | Core slots | Calls | Resets | Draws |
| --- | --- | --- | --- | --- | --- |
| RRI-1 | 225 | – | – | – | 0 |
| OII-1 | 28 | 420 | 516,096 | 265,216 | 1 |
| OII-2 | 36 | 720 | 995,328 | 289,037 | 1 |
| OII-3-V1 | 42 | – | 1,935,360 | 495,200 | 1 |
| OII-3-V2 | 42 | 1008 | 1,935,360 | 494,853 | 1 |
| OII-4 | 48 | 1152 | 442,368 | 55,296 | 1 |

 

 RRI uses 225 known conditions and 1,557,504 fixed-seed trials, not OII call units. OII-3 V1 is unscored. OII-4 shares its acquisition once across methods. Additional postcommit checks and reproduction are not included in these acquisition totals.

 



<a id="section-3-2"></a>

### 3.2 Shared OII-4 data and method roles

<a id="p3:c20"></a> Each fixture supplies 960 fitting episodes of eight calls, totaling 7,680 fitting calls. Preparations cycle through the four public codes and fitting actions are uniform. Calibration has 24 public specifications with eight independent-reset episodes each, totaling 192 episodes and 1,536 calls. The specifications comprise four constant-action, eight word, eight reactive and four history-dependent policies. Every fitted method receives exactly these same observations. Across all 48 fixtures, acquisition costs 442,368 calls and 55,296 resets; these are counted once, not once per portfolio.

The primary registered method set was R, E, P, O and H. S, G and B were prespecified secondary methods. The R/S comparison is now central to exposition because it addresses attribution especially directly, but it has not been retroactively redesignated as a primary endpoint. Selection uses public calibration observations, never the hidden-law scores. The code and configurations, candidate lists, tolerance and core scoring grammar were locally frozen before the private draw, subject to the documented numerical repair below.

For each fixture, 15 component models are fitted once and reused by overlapping portfolios. R selects among four ordinary automata, two group-aware automata and four controlled hidden-state models. S omits only the two group-aware candidates. E, G and B select within their corresponding branches. P selects one of three streaming trees; O mixes four trees; H is an unmerged history-tree control. Model-family and selector details appear in [Subsection 4.1](/consciousness/research/paper-3/final-matched-state-learning-comparison#sec:methods-final), [Appendix A](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:methods).



<a id="section-3-3"></a>

### 3.3 What was withheld

<a id="sec:opacity"></a> The learner sees public preparations, actions, joint outcomes and remaining-time information. It does not receive instantiated generator matrices, hidden state labels/counts, private random seeds, oracle probabilities or scored answers. In OII-4, root-owned private files were inaccessible to the learner process; workers ran under restricted user/group IDs, received records on standard input, and denied filesystem, process and network operations after startup. Ninety-six deliberate private-file read probes were recorded as denied. This audits the specified software path, not every possible host side channel.

The author and programme were not blind to the generator grammar. Shared design assumptions, same-author coding and benchmark construction remain potential sources of bias. Local hashes support byte provenance and local timestamps support the recorded sequence; neither supplies independently authenticated registration or independent investigator replication. The fitted software learners must not be confused with autonomous language-model researchers.



<a id="section-3-4"></a>

### 3.4 Context novelty and overlap

<a id="sec:coverage"></a><a id="p3:c19"></a> The exact source-law scorer was unavailable to fitting and selection, but novelty has several meanings. A fresh generator, a fresh trajectory, an unseen policy/preparation specification and a withheld oracle law are different properties. The retrospective freeze audit compared canonical triples $(p,H,\pi)$ within each fixture, ignoring incidental test identifiers and sorting policy dictionary keys.

Among 1,152 registered core slots, 1,140 such specifications are distinct. There are 12 duplicate slots across 11 fixtures. Seventy-nine slots, corresponding to 74 distinct specifications, match calibration specifications. The red pool also overlaps calibration and the core ([Table 3](/consciousness/research/paper-3/study-design-and-preserved-evidence#tab:contexts)). These counts use exact description equality. A subsequent source-independent behavioral audit expands each deterministic policy through the full eight-call horizon, over every possible output sequence, and compares the resulting action-labeled trees at the same preparation and horizon. It finds 1,135 distinct core behaviors: 17 duplicate slots across 14 fixtures. Eighty-four core slots, representing 78 distinct behaviors, match calibration under this stronger comparison. For example, a pulse policy whose two actions coincide is behaviorally constant although its dictionary differs. This comparison is not an equivalence test for the source generators or for unbounded policies.

Specification overlap does not by itself demonstrate private-score leakage: sampled calibration records and postcommit source-law scores remain different objects. It does mean that the entire core cannot be described as unseen-context validation. We retain the original 1,152-slot weighting. A separately labeled retrospective literal-deduplication sensitivity gives R and S 1,052 passes out of 1,140. The behavior-deduplicated sensitivity gives each 1,048 passes out of 1,135. Both leave their 37 all-core fixtures unchanged ([Table 20](/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results#tab:dedup)). These sensitivities address duplicate weighting, not calibration overlap or performance on all untested policies; neither replaces the registered analysis.

  

Table 3. Retrospective within-fixture context audits. The original core and red pools contain 1,152 and 1,536 slots, respectively.

<a id="tab:contexts"></a>   <a id="source-tabular-2"></a>

| Quantity | Literal description | Finite behavior |
| --- | --- | --- |
| Distinct core specifications/behaviors | 1140 | 1135 |
| Excess duplicate core slots | 12 | 17 |
| Fixtures with core duplicates | 11 | 14 |
| Core slots matching calibration | 79 | 84 |
| Distinct core matches to calibration | 74 | 78 |
| Distinct red specifications/behaviors | 1534 | 1532 |
| Red slots matching core | 51 | 55 |
| Red slots matching calibration | 49 | 51 |

 

 Both matchers retain preparation and horizon. The second compares the complete action-labeled policy tree over all output strings through that horizon. Neither changes registered scoring weights or identifies the hidden generator. 



<a id="section-3-5"></a>

### 3.5 Chronology and bounded repairs

<a id="p3:c21"></a> The full preserved chronology is summarized in [Appendix E](/consciousness/research/paper-3/appendix-e-chronology-artifact-provenance-and-reproduction#app:provenance). Two exceptions warrant main-text disclosure. OII-3 had two prospective attempts. In V1, 32 accepted samples on each side could not cross the required lower separation threshold of 0.30 under the allocated uncertainty budget, even with maximally separated observations. This was diagnosed during acquisition and before hidden scoring; V1 was preserved unscored. V2 changed the accepted-sample target to 40 and screened replay feasibility, then re-froze the method before a second private draw. It did not change the separation threshold or total allowance. The two attempts are not efficacy replications of one unchanged protocol.

In OII-4, 47 fixture bundles had completed when default presolve declared the last tree-mixture linear program infeasible, although an explicit feasible point existed. Before hidden scoring, the identical program on identical public data was solved with presolve disabled and checked against the original numerical primal–dual gap allowance. No seed, candidate family, scoring threshold or scientific objective was changed. Pre- and post-repair source hashes are retained. The executed source therefore was not byte-identical throughout an otherwise pristine registration.

During the initial manuscript assembly, source inspection clarified one further reporting detail: the hidden-state routine allows early stopping before its 60-iteration cap. Saved metadata show 142 of 192 fits reached the cap and 50 stopped earlier, with 12–60 iterations overall. This is a correction to the method description, not a change to the historical execution or performance. The exact stopping rule is given in [Subsection A.4](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:em) and recorded in the manuscript amendment ledger.
