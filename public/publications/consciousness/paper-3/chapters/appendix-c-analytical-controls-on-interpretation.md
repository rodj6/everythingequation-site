# Appendix C: Analytical controls on interpretation

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

<a id="section-C"></a>

## C Analytical controls on interpretation

 The following finite arguments support specific diagnoses. They are not convergence theorems for the implemented learners and do not replace the interface results in the companion theory paper.



<a id="section-C-1"></a>

### C.1 A true refinement can worsen the selected worst-context error

<a id="app:likelihood"></a> Take four equally weighted histories $a,b,c,d$ with deterministic next-output probabilities $(0,1,0,1)$. A one-state maximum-likelihood fit is $q=1/2$, with worst-history TV $1/2$. A valid counterexample requires $a$ and $b$ to be separated. The refined partition $\{b\},\{a,c,d\}$ fits probabilities $1$ and $1/3$. It obeys that constraint and improves average negative log likelihood from $\log2$ to 

$$
\frac{-2\log(2/3)-\log(1/3)}{4}<\log2.

$$

Equation (21).

 At history $d$, however, TV becomes $2/3$. The statement concerns the result of likelihood refitting, not the optimum under a fixed worst-case loss. If ${\mathcal H}_0\subseteq{\mathcal H}_1$ and the same exact risk $R$ is minimized globally, then $\inf_{{\mathcal H}_1}R\leq\inf_{{\mathcal H}_0}R$ is immediate. A richer class does not itself worsen the best available minimax risk.

This counterexample was analyzed after OII-2 scoring. It motivated OII-3; it was not a preregistered prediction proving that objective mismatch caused every OII-2 failure.



<a id="section-C-2"></a>

### C.2 What the safe-replacement rule certifies

<a id="app:safe"></a> Let $R_{{\mathcal E}_0}(M)$ be worst-context TV on one fixed measured panel ${\mathcal E}_0$. Suppose a simultaneous confidence event gives $L(M)\leq R_{{\mathcal E}_0}(M)\leq U(M)$ for every compared candidate, including the incumbent $M_0$. Then 

$$
U(M_1)+\eta\leq L(M_0)
 \quad\Longrightarrow\quad
 R_{{\mathcal E}_0}(M_1)+\eta\leq R_{{\mathcal E}_0}(M_0).

$$

Equation (22).

 The proof is the chain $R(M_1)+\eta\leq U(M_1)+\eta\leq L(M_0)\leq R(M_0)$. Comparing two upper bounds alone does not give this implication. Uniformity must cover the selected candidates; using adaptively chosen models with merely pointwise intervals would require another justification.

OII-3 obtained a candidate-uniform bound by bounding the true record law. For a pilot-selected atom set $A_0$, independent calibration supplied simultaneous lower mass bounds $l_h$. Every candidate $Q$ then satisfies <a id="eq:atom-upper"></a>


$$

 {\operatorname{TV}}(P,Q)=1-\sum_h\min\{P(h),Q(h)\}
 \leq 1-\sum_{h\in A_0}\min\{l_h,Q(h)\}.

$$

Equation (23).

 The omitted mass remains uncertain rather than being declared impossible. Independent resets, stationarity and the stated multiple-comparison allocation are hypotheses of the probability guarantee. Whether the bound is useful depends on its resolution. It does not constrain contexts outside ${\mathcal E}_0$ without a coverage or structural argument.

For a convex bank with vertex laws $Q_j$, suppose a convex upper objective $U$ has value $c$ on every vertex and a valid lower certificate proves $\inf_wU(\sum_jw_jQ_j)\geq c$. Convexity gives the reverse inequality $U(\sum_jw_jQ_j)\leq\sum_jw_jU(Q_j)=c$. Thus the objective is identically $c$ on that bank. This is the conditional reasoning behind the 74 post-reveal flat-objective diagnoses. It does not make all uncertainty-aware objectives flat.



<a id="section-C-3"></a>

### C.3 Exact operational twins and a finite certificate's reach

 Two finite generators with matched initial laws and identical admitted complete record laws cannot be separated by a test using only that contract. Hidden coordinates can be split, relabeled or added without changing those laws. A learner's finite nondetection is weaker: two distinct laws can look identical on a small observation sample. Conversely, state labels from two numerical fits can differ even when their induced public laws agree.

An event witness of [Equation 9](/consciousness/research/paper-3/capacity-produced-candidates-and-selection#eq:bank-witness) is sufficient to exclude the entire frozen convex bank. Failure to find one does not establish that any member is adequate. Similarly, the common-history inequality in [Equation 11](/consciousness/research/paper-3/adversarial-contexts-composition-and-uncertainty#eq:merge-witness) is a sufficient refutation of a proposed shared prediction, while [Equation 17](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#eq:group-radius) shows that it is not a complete criterion for a whole merged class.
