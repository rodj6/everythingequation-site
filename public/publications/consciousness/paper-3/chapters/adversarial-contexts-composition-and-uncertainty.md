# Section 8: Adversarial contexts, composition and uncertainty

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

<a id="section-8"></a>

## 8 Adversarial contexts, composition and uncertainty

<a id="sec:adversarial"></a> 

<a id="section-8-1"></a>

### 8.1 Legal postcommit witnesses

<a id="p3:c15"></a> OII-4's scorer evaluates 32 candidate contexts per fixture after commitment, retaining the strongest found event for each method/fixture. The context grammar is fixed, while the event selection is privileged by knowledge of the source and candidate laws. Every challenge uses the original public preparation/action/output contract and at most eight calls. The 1,536 candidate slots contain 1,534 distinct literal specifications; 51 slots match a core specification and 49 match calibration. Comparing complete finite policy behavior instead gives 1,532 distinct behaviors, 55 core-matching slots and 51 calibration-matching slots. Every method receives the same 32-context search pool on each fixture. Red results therefore are not a wholly disjoint second holdout.

There are 384 selected event records, one for each of eight methods on 48 fixtures. The original audit recomputed those events using exact integer outward rounding of the canonical saved-parameter laws. Its maximum interval width is $6.117\times10^{-11}$, and the certified above-0.15 failures agree with the reported counts. The present hostile audit additionally recomputed all 384 selected events with a separately written evaluator and integer-outward calculation; the largest new event interval width, including the bank-event checks, is $6.246\times10^{-13}$. It also reevaluated the full original 1,536-context red pool and recovered every saved method-specific maximum within $7.8\times10^{-16}$. The historical certificate width above and the new audit width refer to different arithmetic runs, not new experimental observations. A finite strongest-found event is not an exhaustive maximizer over all policies or a certificate of the shortest distinguishing horizon.

For the common merge audit, equal-clock three-call prefixes from two preparations and four constant-action policies are compared under one-call continuations. A fixed path cap limits the witness panel, not the primary score calculation. The source audit identifies 8,478 pairs with true continuation gap above 0.30. R and S collapse 28 of these pairs, E 820, G 2,872, P 153, O 110 and H 3,682. B has zero identical retained-state-key violations on this panel, despite nonzero predictive error. A continuous posterior key can avoid exact equality without being correct or minimal.

For any two true continuation laws $P,P'$ and common prediction $Q$, the triangle inequality gives <a id="eq:merge-witness"></a>


$$
\max\{{\operatorname{TV}}(P,Q),{\operatorname{TV}}(P',Q)\}\geq\tfrac12{\operatorname{TV}}(P,P').
 

$$

Equation (11).

 That justifies each sufficient pair refutation. It does not justify treating every unrefuted merge as safe or different sampled panels as one population rate.



<a id="section-8-2"></a>

### 8.2 Supplementary composition

<a id="p3:c16"></a> Eight pairs were specified during OII-4 fitting, before hidden scoring, by pairing the first 16 lexicographically sorted opaque IDs. They are disjoint module carriers, not overlapping physical resources. A causal controller makes eight alternating global calls, four to each module, with actions determined by pair index, tick and the last global output. The composition data are separate from the 1,152 core slots.

R and S pass all eight supplementary composition tests. Seven pairs have both local modules passing their entire core panels, and all seven also pass the composed test. B passes all eight, while E, P and O pass six, three and one, respectively ([Table 14](/consciousness/research/paper-3/adversarial-contexts-composition-and-uncertainty#tab:composition)). The composition pairs were neither chosen after finding local successes nor a representative sample of all legal wirings.

These are finite supplementary observations, not a learned uniform RRC certificate. A local finite panel may omit a conditional distinction used by a different controller. Conversely, a model failing a long local test can pass a shorter particular composition. Neither outcome changes the hypothesis requirements of the imported substitution theorem.

  

Table 14. OII-4 supplementary composition: eight separately specified pairs.

<a id="tab:composition"></a>   <a id="source-tabular-12"></a>

| Method | Passes /8 | Both modules all-core | Those pairs passing |
| --- | --- | --- | --- |
| R | 8 | 7 | 7 |
| S | 8 | 7 | 7 |
| E | 6 | 2 | 2 |
| G | 0 | 0 | 0 |
| B | 8 | 5 | 5 |
| P | 3 | 0 | 0 |
| O | 1 | 0 | 0 |
| H | 4 | 0 | 0 |

 



<a id="section-8-3"></a>

### 8.3 Exact public-law twins

<a id="p3:c17"></a> Distinct source carriers can produce identical complete laws through the admitted interface. OII-4 includes four such pairs, with exact post-reveal row/preparation mappings checked in the preserved audit. They are deliberate dependent controls, not eight unrelated statistical replicates. Equal public behavior does not identify a unique microscopic representation, and splitting a pair by a private implementation name would not be an identification success.

The exact equality result is supplied by source-level proof after reveal. The learner's finite nondetection is not that proof. The same distinction governs the earlier stages' equivalent-carrier controls: an opaque procedure may reasonably leave implementation identity unresolved even when it predicts the public behavior well. Public-law equivalence is therefore a boundary on what is to be learned, not an excuse for failures on laws that are genuinely different.
