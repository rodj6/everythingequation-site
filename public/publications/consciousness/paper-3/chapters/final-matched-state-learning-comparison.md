# Section 4: Final matched state-learning comparison

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

<a id="section-4"></a>

## 4 Final matched state-learning comparison

<a id="sec:final"></a> 

<a id="section-4-1"></a>

### 4.1 Executed model families

<a id="sec:methods-final"></a> 

<a id="paragraph-2"></a>

#### Ordinary probabilistic automata (E).

 The executed baseline is a local stochastic-Mealy adaptation of IOALERGIA, following its frequency-prefix-tree, recursive compatibility, red/blue ordering and folding structure <a id="citation-7"></a>[[12](/consciousness/research/paper-3/references#bib-Mao2012MDP), [7](/consciousness/research/paper-3/references#bib-AALpySource)]. It is not an installed upstream AALpy distribution or an implementation of every published branch. The preparation code is a synthetic reset-only input; the root cannot merge with a live state. Each action has a distribution over the four joint output symbols and each action/output pair has one successor. A $1/256$ pseudocount per output and an explicit uniform unknown sink make prediction total. Four compatibility settings, $0.01,0.05,0.5,1.5$, are compared using calibration negative log likelihood (NLL). These values are tuning parameters, not simultaneous confidence levels.



<a id="paragraph-3"></a>

#### Group-aware automata (G).

 Two variants add a group-common-law check to the ordinary $0.05$ compatibility setting. The check asks whether sampled joint-output laws of multiple provisional state members fit one common TV center, with group thresholds $0.10$ and $0.20$. It uses the heuristic allowance $0.35/\sqrt n$ and requires at least 12 observations of an action for a member to enter that check. Sparse cases are unresolved by the group test, not certified equivalent. These are engineering choices motivated by the fact that pairwise tests are not a complete test of group adequacy ([Subsection A.3](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:group)); they are not a derived admission rule or a familywise confidence theorem.



<a id="paragraph-4"></a>

#### Controlled hidden-state models (B).

 Four models have latent dimensions $k\in\{2,4,8,16\}$, with general joint kernels $K_{a,o}(s,s')$ and preparation-specific initial distributions. A forward–backward expectation-maximization procedure fits expected joint transition counts, with $0.01$ pseudocounts, one deterministic public-ID-derived initialization per size, a maximum of 60 iterations, and the recorded early-stopping rule. This is standard latent-state estimation machinery applied to the displayed joint-instrument parameterization, not a new RJC primitive; the classical likelihood-estimation antecedent is <a id="citation-8"></a>[[3](/consciousness/research/paper-3/references#bib-Baum1970)]. The equations and exact implementation restrictions are supplied in [Subsection A.4](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#app:em), without claiming global optimization.

At prediction time the retained state is a posterior vector $b$, not a supposedly observed latent label: <a id="eq:belief"></a>


$$
p(o\mid b,a)=\sum_{s,s'}b(s)K_{a,o}(s,s'),\qquad
 b'(s')=\frac{\sum_s b(s)K_{a,o}(s,s')}{p(o\mid b,a)}.
 

$$

Equation (8).

 The external clock remains retained. Finite hidden dimension does not imply a finite number of public posterior states. Predictive input–output structure has established formal treatments, including the $\epsilon$-transducer <a id="citation-9"></a>[[2](/consciousness/research/paper-3/references#bib-Barnett2015)]; that does not make this EM implementation an $\epsilon$-transducer learning algorithm.



<a id="paragraph-5"></a>

#### Portfolios and tree controls.

 R minimizes calibration NLL over E+G+B; S uses exactly E+B, with the same index tie-break and data. The tree controls use the inherited 100-feature streaming representation and joint-output fitter. P selects among three penalty settings. O minimizes empirical complete-law panel TV over a mixture of four trees, including a fourth, more regularized candidate. O chooses its mixture mode once per episode, retaining posterior weights after observations; it does not resample the mode independently at each step. H retains the full observed prefix tree, with the same reset typing and unknown-transition completion as the automata. It is a specified memorization control, not an optimal upper bound on all history-based learning.



<a id="section-4-2"></a>

### 4.2 Aggregate findings

<a id="p3:c10"></a> [Table 4](/consciousness/research/paper-3/final-matched-state-learning-comparison#tab:endpoint) reports the common OII-4 panel. R and S each pass 1,063 of 1,152 slots and all core tests on 37 of 48 fixtures. P passes 970 slots and all core tests on 24 fixtures; O passes 869 slots and all core tests on 23. R/S each have 11 red-team failures, compared with 24 for P and 25 for O. The state portfolios therefore improve several nominated finite-suite summaries over these controls.

The improvement is an end-to-end comparison on common evidence, not an isolated causal estimate of architecture alone. Candidate generation, regularization, hyperparameter grids, fitting cost and selection differ. In particular, P versus O is not an objective-only comparison, because P chooses among three trees while O mixes four. Same observations do not establish compute matching.

  

Table 4. OII-4: same-evidence endpoint. Lower law error is better. Counts concern the fixed suite, not independent sampled Bernoulli trials.

<a id="tab:endpoint"></a>   <a id="source-tabular-3"></a>

| Method | Passes   /1,152 | Mean TV | Mean fixture-   worst TV | All-core   /48 | Red failures   /48 | Unsafe merges   /8,478 |
| --- | --- | --- | --- | --- | --- | --- |
| R | 1,063 | 0.054913 | 0.175431 | 37 | 11 | 28 |
| S | 1,063 | 0.054918 | 0.175437 | 37 | 11 | 28 |
| E | 913 | 0.116210 | 0.329133 | 28 | 20 | 820 |
| G | 562 | 0.395816 | 0.650682 | 15 | 31 | 2,872 |
| B | 1,053 | 0.064684 | 0.219488 | 36 | 11 | 0 |
| P | 970 | 0.099072 | 0.386374 | 24 | 24 | 153 |
| O | 869 | 0.152015 | 0.403502 | 23 | 25 | 110 |
| H | 1 | 0.986652 | 0.997002 | 0 | 48 | 3,682 |

 

 R, E, P, O and H were primary methods; S, G and B were prespecified secondary methods. Mean fixture-worst averages the 48 within-fixture maxima. A zero exact-key merge count does not certify prediction accuracy.

 

<a id="source-figure-2"></a>

![Figure 2](/publications/consciousness/paper-3/figures/figure-2.svg)

   

Figure 2. OII-4 observed mean law error on the same 1,152 primary slots. There are no population confidence bars: this is a finite descriptive comparison. R and S nearly coincide.

 <a id="fig:means"></a> 

B alone passes 1,053 slots, with mean TV 0.064684, 36 all-core fixtures and 11 red failures. The combined portfolio can additionally select ordinary automata on mechanisms where they fit better. H passes only one core slot. This failure is tied to its sparse observed-prefix coverage and uniform sink rule; it is not evidence that retaining history is intrinsically inferior to forgetting it. Nor is the observed ordering universal: the worst-case error still approaches or attains one for the tested methods.



<a id="section-4-3"></a>

### 4.3 What the group-aware branch contributes

<a id="p3:c11"></a> R and S differ only in availability of the two G candidates, with the same calibration objective. They have identical pass, all-core, red-failure and unsafe-merge counts. Their mean TV values are 0.0549125072 and 0.0549176212, respectively, a difference of about $5.1\times10^{-6}$. They select the identical component model on 47 of 48 fixtures. On the remaining joint-encoder fixture, R chooses the group-$0.20$ candidate and S a two-state hidden model. Their respective calibration NLLs are 0.693742 and 0.693802. The largest difference between their core errors there is approximately 0.000304, and no core pass/fail status changes. Thus the identical aggregate pass counts do not conceal offsetting successful and unsuccessful fixtures in this comparison.

The supported conclusion is that the broad gain of the full portfolio is reproduced without the bespoke group-aware branch on this cohort. This is a controlled software ablation using a prespecified secondary portfolio, not a population equivalence or noninferiority theorem. In particular, it does not establish that group-common-law reasoning is useless in other data or merge regimes.

A narrower comparison reinforces this distinction. At the same ordinary compatibility setting $0.05$, the unaugmented automaton passes 541 slots, the group-$0.10$ candidate passes 522, and the group-$0.20$ candidate passes 559. The effects are mixed. Comparing tuned E across four settings with G across two group thresholds would not isolate the group veto. All three fixed-setting candidates remain available in the supplied evidence.



<a id="section-4-4"></a>

### 4.4 Mechanism-dependent gains and regressions

<a id="p3:c14"></a> [Table 5](/consciousness/research/paper-3/final-matched-state-learning-comparison#tab:families), [Figure 3](/consciousness/research/paper-3/final-matched-state-learning-comparison#fig:families) show the principal tradeoffs. The standard portfolio passes all 48 tests in each of the hidden-belief, mode-register, modular-counter, gated-queue, probe and refractory families. P passes 16, 23, 35, 31, 33 and 24, respectively. These are mechanisms where compact predictive state or a posterior over hidden state is often useful.

The opposite comparison is equally important. On adaptive challenges, R/S pass only 2 of 48 slots while P passes all 48. On delayed receivers they pass 32 versus 48; on finite budgets, 39 versus 48. The predefined streaming features can make particular dependencies easy to express and fit, even when a more general latent architecture contains an exact solution. The results establish contrasting strengths of these implemented procedures, not one representation dominating every other representation.

The family descriptions are post-reveal explanatory labels, not labels supplied to the learner. These small subgroups were not separately powered studies. The full table, including the added checksum, gate and alternating-channel families, is included in [Appendix B](/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results#app:results).

  

Table 5. Selected OII-4 mechanism families: large gains and the principal regressions. Each row contains two fixtures and 48 test slots per method.

<a id="tab:families"></a>   <a id="source-tabular-4"></a>

| Family | Tests | R | S | B | P |
| --- | --- | --- | --- | --- | --- |
| Hidden belief | 48 | 48 | 48 | 48 | 16 |
| Mode register | 48 | 48 | 48 | 40 | 23 |
| Modular counter | 48 | 48 | 48 | 48 | 35 |
| Gated queue | 48 | 48 | 48 | 43 | 31 |
| Probe-sensitive | 48 | 48 | 48 | 48 | 33 |
| Refractory service | 48 | 48 | 48 | 48 | 24 |
| Adaptive challenge | 48 | 2 | 2 | 2 | 48 |
| Delayed receiver | 48 | 32 | 32 | 32 | 48 |
| Finite budget | 48 | 39 | 39 | 39 | 48 |

 

 These are descriptive subgroups, not separately powered replications. The full family table appears in Appendix [B](/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results#app:results).

 

<a id="source-figure-3"></a>

![Figure 3](/publications/consciousness/paper-3/figures/figure-3.svg)

   

Figure 3. The aggregate gain is not uniform dominance. The passive tree control wins on challenges, receivers and finite budgets. All points come from the same OII-4 cohort.

 <a id="fig:families"></a> 



<a id="section-4-5"></a>

### 4.5 Paired fixture-level descriptions

<a id="p3:s01"></a> Retrospective paired summaries retain the original within-fixture slot weights. For both R/P and S/P, the state portfolio has lower fixture-mean TV on 37 fixtures, P has lower error on ten, and one is tied at tolerance $10^{-12}$. Worst-slot directions are 39, eight and one. All-core outcomes are 19 fixtures on which both pass, 18 state-only, five P-only, and six neither ([Table 6](/consciousness/research/paper-3/final-matched-state-learning-comparison#tab:paired-fixture)). These counts show how the aggregate advantage is distributed rather than treating 1,152 dependent slots as independent trials.

The median paired fixture-mean difference is only $-0.000595$, whereas the mean R-minus-P difference is $-0.044160$; substantial gains and regressions coexist with small differences on many fixtures. Averaging each of the 22 mechanism-family groups first gives 16 mean-error directions favoring the state portfolio and six favoring P. This second descriptive weighting does not create independent samples. Because the crafted cohort includes related mechanisms and exact twins, no IID sign-test or bootstrap sampling interval is assigned to these counts.

 

Table 6. Retrospective paired descriptions of the original 48-fixture results. Negative mean differences favor the state portfolio.

<a id="tab:paired-fixture"></a> <a id="source-tabular-5"></a>

| Comparison | Metric | State wins | Ties | P wins | Mean difference |
| --- | --- | --- | --- | --- | --- |
| R versus P | Fixture mean | 37 | 1 | 10 | -0.044160 |
| R versus P | Fixture worst | 39 | 1 | 8 | -0.210943 |
| S versus P | Fixture mean | 37 | 1 | 10 | -0.044154 |
| S versus P | Fixture worst | 39 | 1 | 8 | -0.210937 |

 

 Tie tolerance is $10^{-12}$. For both comparisons, all-core outcomes are 19 both-pass, 18 state-only, 5 P-only and 6 neither. These crafted, related and twin fixtures do not justify an IID sign-test or sampling-bootstrap interpretation; no inferential $p$ value is reported.
