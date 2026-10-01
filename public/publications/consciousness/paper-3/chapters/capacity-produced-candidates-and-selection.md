# Section 5: Capacity, produced candidates and selection

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

<a id="section-5"></a>

## 5 Capacity, produced candidates and selection

<a id="sec:capacity"></a> 

<a id="section-5-1"></a>

### 5.1 A post-reveal representational-capacity sanity check

<a id="p3:c12"></a> An unsuccessful fitted model does not reveal by itself whether the architecture lacks capacity. OII-4 permits a direct post-reveal check. Every source generator has at most 16 hidden states and uses the same action/output form as [Equation 1](/consciousness/research/paper-3/operational-contract-and-measures#eq:instrument). For a target with $n\leq16$, embed its states in the first $n$ coordinates of a 16-state model. Copy every rational joint transition row and each preparation distribution there; set unused states to emit symbol zero and self-loop, with zero initial mass and no incoming mass from the active subspace. The resulting stochastic instrument reproduces every source row on the active subspace and hence every admitted adaptive finite record law.

The saved construction was checked at 3,072 embedded instrument rows and 192 preparation rows. This elementary embedding is an exact capacity sanity check for the *general joint-instrument architecture*, not a novel representation theorem. It is not a theorem about a more restrictive HMM that factorizes emission and transition in a prescribed way. It also does not prove that the specific positive-pseudocount, single-initialization fitting procedure can attain the exact boundary parameters from its finite data.

These exact source-derived parameters were constructed only after reveal and were never included as known-correct training candidates. A strictly positive parameterization can approximate the embedded model by mixing each initial distribution and joint row with a sufficiently small uniform component. The imported coupling bound gives eight-call error at most $1-(1-\eta)^9$ when each such change is at most $\eta$. This is an approximation-capacity statement, not successful identification by the implemented optimizer.

Thus the remaining failures cannot all be explained by insufficient latent-state cardinality. Finite observations, initialization, regularization, local fitting, candidate construction and selection remain possible contributors. Nor does the embedding imply 16 public predictive states: [Equation 8](/consciousness/research/paper-3/final-matched-state-learning-comparison#eq:belief) can attain many distinct posterior values even with a small hidden carrier.



<a id="section-5-2"></a>

### 5.2 Certificates against a produced bank

<a id="p3:c07"></a> Let ${\mathcal B}_f=\{Q_1,\ldots,Q_J\}$ be the finite bank actually produced on fixture $f$. An episode-level mixture has laws $Q_w^e=\sum_jw_jQ_j^e$, with the same weights across the experiment family. For any legal event $A$ in an experiment $e$, <a id="eq:bank-witness"></a>


$$
{\operatorname{TV}}(P^e,Q_w^e)\ \geq\ P^e(A)-Q_w^e(A)
 \ \geq\ P^e(A)-\max_jQ_j^e(A).
 

$$

Equation (9).

 If the final quantity exceeds $\tau$, no mixture in that bank passes this test. This elementary certificate is stronger than observing that one optimizer chose poor weights. It does not exclude an unproduced parameterization in the same mathematical architecture. The witness and probability evaluation are post-reveal diagnostics, not queries available to the opaque learner during selection.

  

Table 7. OII-4 post-reveal candidate-bank diagnostics. “Adequate” in this table means passing all fixed core tests at TV $\leq0.15$.

<a id="tab:banks"></a>   <a id="source-tabular-6"></a>

| Bank | Passing single   candidate /48 | Selected   all-core /48 | Selection   misses | Convex-bank   obstructions /48 |
| --- | --- | --- | --- | --- |
| R | 39 | 37 | 2 | 8 |
| S | 39 | 37 | 2 | 8 |
| E | 28 | 28 | 0 | 19 |
| G | 15 | 15 | 0 | 33 |
| B | 37 | 36 | 1 | 10 |
| P | 25 | 24 | 1 | – |
| O | 25 | 23 | 2 | 22 |

 

 P selects three trees; O mixes four. The obstruction count 22 refers to the four-tree bank. No P-specific obstruction count is inserted. A missing adequate individual candidate does not exclude an adequate mixture.

 



<a id="section-5-3"></a>

### 5.3 What the counts distinguish

<a id="p3:c13"></a> For both R and S, 39 of 48 fixtures have at least one produced candidate passing every core slot, while the selected predictor does so on 37. The two differences are genuine core-panel selection misses in the post-reveal ranking. They do not establish that the selector could have known the oracle ranking from the available calibration sample. [Table 8](/consciousness/research/paper-3/capacity-produced-candidates-and-selection#tab:selection-misses) identifies both cases. The selected model has lower observed calibration NLL in each; the failure is not a tie-breaking error or evidence that the selector saw the hidden core ranking. The alternative rows are post-reveal comparisons of candidates that had already been fitted.

  

Table 8. The two R/S core-panel selection misses. Lower calibration NLL wins under the original selector; a core-worst TV at most 0.15 passes.

<a id="tab:selection-misses"></a>   <a id="source-tabular-7"></a>

| Fixture family | Model | Role | Calibration NLL | Core worst TV |
| --- | --- | --- | --- | --- |
| Leaky occupancy | HMM-8 | Selected | 0.083232 | 0.152781 |
| Leaky occupancy | HMM-16 | Passing alternative | 0.087784 | 0.131943 |
| Coin | IOALERGIA-1.5 | Selected | 0.086455 | 0.196476 |
| Coin | HMM-2 | Passing alternative | 0.086654 | 0.091927 |

 

 The rows compare already-produced candidates, ranked after reveal for diagnosis. R and S make the same selections. The coin row shows the lowest-calibration-NLL passing alternative; two additional hidden-state candidates also pass. Full fixture IDs and values are in the audit supplement. 

Of the remaining nine fixtures with no adequate individual R/S candidate, eight have a [Equation 9](/consciousness/research/paper-3/capacity-produced-candidates-and-selection#eq:bank-witness) certificate excluding every convex mixture in the bank. The last case remains unresolved at mixture level: failure of every individual member does not imply failure of every mixture. Consequently, the 11 selected-model failures separate into two selection misses, eight certified produced-bank obstructions, and one case lacking an adequate individual candidate but not excluded by this mixture audit.

The tree bank has 22 such obstructions on the same final cohort, versus eight for R/S. That is a reduction in *produced-bank* insufficiency, not proof that one full architecture is globally more expressive than the other. The capacity construction already shows why those categories must be distinguished.

<a id="source-figure-4"></a>

![Figure 4](/publications/consciousness/paper-3/figures/figure-4.svg)

   

Figure 4. Original-budget OII-4 R/S diagnostic separation. The arrows show different questions, not a proof that the learner knew any oracle fact. All counts concern the same 48 fixtures and registered core tests; the separate post-hoc expansion does not overwrite them.

 <a id="fig:capacity"></a> 



<a id="section-5-4"></a>

### 5.4 Diagnosis without forced single causes

 There is a hierarchy of questions, not a compulsory single-label taxonomy. An architectural witness answers an existence question. A bank witness excludes a finite collection and its mixtures. A selector miss compares a chosen candidate with other candidates that were produced. None alone identifies the statistical cause of a failed parameter fit.

The frozen study used one start and at most 60 EM updates per size. The post-hoc analysis in [Section 6](/consciousness/research/paper-3/post-hoc-optimization-budget-sensitivity#sec:sensitivity) now directly tests a larger budget and finds five selected repairs among its 11 failures. This is evidence of finite-budget sensitivity, not a diagnosis that every residual fit is a local minimum. Insufficient branch evidence, the fixed pseudocount and selection on limited calibration remain possible contributors. Likewise, source models with identical public laws are non-identifiable in their hidden anatomy; that is not the same failure as predicting the public laws incorrectly.

 

Table 9. Failure categories and the evidence needed to distinguish them. Categories may coexist; the table is not a mutually exclusive labeling of all failed fixtures.

<a id="tab:failure-taxonomy"></a> <a id="source-tabularx-2"></a>

| Category | What this record establishes | What remains unestablished |
| --- | --- | --- |
| Architecture capacity | Exact post-reveal 16-state embeddings for all final targets | Identifiability or convergence of the opaque fitter |
| Produced-bank insufficiency | Eight R/S bank witnesses exclude every produced mixture | Inadequacy of all parameterizations or other candidate generators |
| Parameter estimation | Fitted laws disagree on some source contexts despite architectural capacity | A unique attribution to sampling rather than optimization or regularization |
| Optimization/local fitting | Five selected repairs among 11 targeted failures under the post-hoc expanded budget | Global optimization, a unique causal decomposition, or repair of every remaining miss |
| Model selection | Two R/S candidates were available that passed all core tests but were not selected | That the available calibration observations identify the oracle winner |
| Context/data coverage | Duplicate and calibration-matching specifications; observed panel-to-core failures | A full unseen-policy or all-future generalization guarantee |
| Finite-budget uncertainty | OII-3 confirmation limits and flat confidence objectives | Adequacy from finite nondetection or exact equality from overlapping intervals |
| Operational non-identifiability | Exact public-law twins have different hidden implementations | Permission to excuse wrong predictions of operationally distinct laws |
