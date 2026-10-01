# Section 7: Why the earlier repair stages did not close discovery

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

<a id="section-7"></a>

## 7 Why the earlier repair stages did not close discovery

<a id="sec:development"></a> The preceding final comparison was motivated by a sequence of failures, not by an a priori claim that one bespoke learner should win. This section explains those decisions while preserving each study's own denominator. Full tables and allocation details appear in [Appendix B](/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results#app:results), [Appendix E](/consciousness/research/paper-3/appendix-e-chronology-artifact-provenance-and-reproduction#app:chronology).



<a id="section-7-1"></a>

### 7.1 Known-model implementation conformance

<a id="p3:c02"></a> RRI implemented owned registers, queues, deadlines, local/shared randomness, consumable counters and retained monitoring records in an event runtime. A separate oracle, not importing that runtime, specified the nominated exact laws. The study executed 1,557,504 fixed-seed trials over 225 conditions, with 70 derived metrics, 27 exact check groups and five supplementary checks of already registered obligations. All 225 row-law and 70 metric intervals covered the exact values in that run. This is one coverage event under the recorded pseudorandom realization, not an estimate of a nominal coverage rate.

The tests include failure of early decoding from late records, adaptive amplification of a fixed-input discrepancy, distinct SWAP simulation budgets under different communication/randomness resources, and preservation of one-use resource state. They provide known-model software conformance to the imported contract. They are neither blind identification nor independent physical confirmation. RRI's trials are not interchangeable with the public-call counts used in OII.



<a id="section-7-2"></a>

### 7.2 Shallow history inference: OII-1

<a id="p3:c03"></a> OII-1 uses 28 opaque fixtures and a 420-slot common core. Active and passive acquisition each receive 9,216 calls and 4,736 reset episodes per fixture. Both first collect balanced one-step observations, then longer discovery and calibration-validation episodes. The selected model retains suffix depth zero through three, with optional preparation and clock. Joint-output count smoothing and a complexity-penalized NLL selector define a bounded engineering procedure.

The selected active predictor passes 281 of 420 core slots and all slots on 12 fixtures; the selected passive predictor passes 266 slots and all slots on 13 fixtures. Their mean TV upper values are 0.223891 and 0.218708. Thus active acquisition improves pass count but not every metric. Selected-model red failures occur on 15 and 13 fixtures, respectively. Matched memoryless and factorized-output controls are weaker in the reported core aggregates ([Table 16](/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results#tab:oii1)).

OII-1 also has a 705-slot expanded panel containing learner-selected probes. It must not replace the common-core denominator. Its initial merge audit sampled different histories for the two learners: 56 versus 131 separating witnesses arose among 79 versus 168 unequal-belief pairs. These are not directly comparable false-merge rates on a common population. Later studies introduced common witness panels. A post-score auxiliary horizon/clock correction is preserved, with the primary scores unchanged.



<a id="section-7-3"></a>

### 7.3 Representation-rich repair: OII-2

<a id="p3:c04"></a><a id="p3:c05"></a> OII-2 changes the learner to 100 public streaming features and conditional joint-output trees, with explicit registers implementing each retained feature. The active procedure proposes histories it currently merges, attempts legal prefix replay, tests a fixed suffix event on fresh samples, and protects a distinguishing feature after a sufficiently large confirmed separation. Failed replay attempts consume budget; there is no reset to a privileged hidden state.

On its 36-fixture, 720-slot common panel, the rich active procedure passes 633 slots, versus 442 for the old active learner, with mean TV upper decreasing from 0.263312 to 0.086537. Both representation and observation allocation changed, so this supports the combined richer procedure, not an isolated causal effect of the dictionary. The rich passive method has fewer passing slots (630) but lower mean error (0.078505) and fewer red failures (11 versus 14).

The especially informative ablation refits on the *same active data* without the explicit confirmed-counterexample constraints. It passes 639 slots with mean TV upper 0.080784, slightly better than the constrained fit. This does not remove the observations acquired during counterexample search and therefore cannot identify the value of those queries separately. The conclusion is no demonstrated extra benefit from these explicit fitting constraints on the realized dataset, not a theorem that counterexample guidance has no value.

The search conducted 46 conditional tests and confirmed six refutations across three fixtures. It spent 4,719 replay attempts to obtain 2,290 accepted continuation samples. The confirmed distinctions survived source audit and remained represented. The mechanism was therefore not simply producing false witnesses. Rather, a true witness does not determine which global repair is best. A post-score four-history example shows that a valid separating refinement can improve likelihood yet increase worst-context TV from $1/2$ to $2/3$ ([Subsection C.1](/consciousness/research/paper-3/appendix-c-analytical-controls-on-interpretation#app:likelihood)). That is a counterexample to an implication, not a unique causal diagnosis of the empirical misses.



<a id="section-7-4"></a>

### 7.4 Objective alignment and finite-bank limits: OII-3

<a id="p3:c06"></a> OII-3 tests likelihood, empirical minimax, uncertainty-aware and safe selectors over finite candidate banks. The scored V2 cohort has 42 fixtures and 1,008 core slots. Three new acquisition lanes use counterexample replay, disagreement exploration without replay, or passive actions. They share a base grammar and total call allowance but obtain different observations. Two inherited OII-2 controls spend the same total allowance according to their original allocation. The new lanes reserve 3,840 of 9,216 calls for a dedicated risk-calibration panel; they do not give the same fitting data as the controls.

Within the counterexample lane, the likelihood mixture passes 836 slots with mean TV upper 0.109167. The same eligible-bank empirical minimax mixture passes 806 with mean 0.121151. Its mean fixture-worst error is slightly lower, 0.368416 versus 0.373416, so the comparison is mixed rather than a failure on every objective. The confidence-upper-bound selector passes 714. The older passive control remains strongest on the headline pass and mean-error measures in the selected comparison, but that is a total-budget procedure comparison, not objective-only evidence.

Post-reveal event witnesses exclude every mixture in the supplied banks on 20 counterexample-lane fixtures, 22 disagreement-lane fixtures and 20 passive-lane fixtures. For those banks, no selector can choose an adequate mixture for every core test. This is a restriction on the produced candidates, not a general impossibility for minimax learning or the full underlying model grammar.



<a id="section-7-5"></a>

### 7.5 Measured-panel safety does not transfer automatically

<a id="p3:c08"></a> The safe selector uses simultaneous risk bounds on one measured panel. If for all candidate laws $L(Q)\leq R_{{\mathcal E}_0}(Q)\leq U(Q)$ on the confidence event, replacement under <a id="eq:safe"></a>


$$
U(Q_{\mathrm{new}})+\eta\leq L(Q_{\mathrm{old}}),\qquad \eta=0.001,
 

$$

Equation (10).

 guarantees $R_{{\mathcal E}_0}(Q_{\mathrm{new}})+\eta\leq R_{{\mathcal E}_0}(Q_{\mathrm{old}})$ on that same panel. Comparing upper bounds alone would not suffice. The short conditional argument is recorded in [Subsection C.2](/consciousness/research/paper-3/appendix-c-analytical-controls-on-interpretation#app:safe).

Four distinct lane/fixture replacements were accepted. All improved their measured-panel maximum, but all worsened core mean error and one worsened core maximum error. [Table 13](/consciousness/research/paper-3/why-the-earlier-repair-stages-did-not-close-discovery#tab:safe) shows that latter case. There is no contradiction with [Equation 10](/consciousness/research/paper-3/why-the-earlier-repair-stages-did-not-close-discovery#eq:safe): it does not certify unmeasured contexts. The example separates validity of a panel certificate from coverage of the interaction space needed for later use.

  

Table 13. OII-3 CE-lane safe replacement on fixture `v_75b71402029f9b`. The certificate concerns its measured panel.

<a id="tab:safe"></a>   <a id="source-tabular-11"></a>

| Quantity | Incumbent | Replacement |
| --- | --- | --- |
| Panel maximum TV | 0.923033 | 0.618318 |
| Core mean TV upper | 0.268199 | 0.332146 |
| Core maximum TV upper | 0.889983 | 0.921409 |
| Core passes /24 | 14 | 10 |

 



<a id="section-7-6"></a>

### 7.6 Counterexample completeness and confidence resolution

<a id="p3:c09"></a> OII-3 also exposes two limitations of this particular refinement design. First, pairwise separation above $2\tau$ is a sufficient merge refutation but not a complete class-adequacy test. Three laws can all be within pairwise distance 0.24 while no common predictor is within 0.15 of every law; their optimal common radius is 0.16 ([Subsection A.3](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:group)). This motivates, but does not empirically validate, OII-4's group-aware heuristic.

Second, a valid confidence objective can fail to distinguish available models. Of 126 new-lane panels, 28 optimized upper bounds are at least 0.9 and none is at most 0.15. Exact post-score certificates show the chosen upper-bound objective is constant over the whole convex bank on 74 panels. This concerns one conservative construction and budget, not all uncertainty-aware learning.

The V2 counterexample lane conducted 29 tests, confirming one and leaving 28 unresolved, with 3,357 attempts and 1,873 accepted samples. A single confirmed fixture provides little evidence for a general incremental advantage. Taken together, OII-1–3 identify useful failure modes but do not establish that better counterexamples or a more appropriate objective alone solve finite opaque identification.
