# Section 2: Operational contract and measures

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

<a id="section-2"></a>

## 2 Operational contract and measures

<a id="sec:contract"></a> 

<a id="section-2-1"></a>

### 2.1 Finite public interaction

 A source fixture has a finite hidden carrier $X$, four actions $a\in\{0,1,2,3\}$, four joint output symbols $o\in\{0,1,2,3\}$ encoding two bits, and four public preparation codes $p\in\{0,1\}^2$. Preparation selects an initial distribution $\mu_p$; it does not reveal the resulting hidden state. Its joint output/successor instrument is <a id="eq:instrument"></a>


$$
K_{a,o}(x,x')\geq0,\qquad \sum_{o,x'}K_{a,o}(x,x')=1.
 

$$

Equation (1).

 The fixed public clock permits at most eight calls per episode. Resource use, blocked service, mode changes and delayed return are represented by the hidden dynamics and observed outputs. A reset starts another charged preparation episode; it is not an uncharged mid-episode operation.

An experiment $e=(p,H,\pi)$ specifies a preparation, horizon $H\leq8$, and causal policy $\pi_t(a\mid h_{t-1})$. The retained history is $h_H=((a_1,o_1),\ldots,(a_H,o_H))$, with its timed position and the common stopping convention. Its law is <a id="eq:pathlaw"></a>


$$
P^e(h_H)=\left[\prod_{t=1}^H\pi_t(a_t\mid h_{t-1})\right]
 \mu_p K_{a_1,o_1}\cdots K_{a_H,o_H}{\mathbf 1} .
 

$$

Equation (2).

 For deterministic policies the policy factor is zero or one. The same policy is used for source and candidate evaluation. Joint outputs are not factorized. Matching a singleton marginal is weaker than matching [Equation 2](/consciousness/research/paper-3/operational-contract-and-measures#eq:pathlaw).

A candidate may be a finite unifilar transducer, a tree with explicitly update-closed history registers, or a latent-state model whose public state is a posterior vector. Each is executable, but executable syntax alone does not certify source-faithful prediction. Zero-probability branches need an explicit fallback convention; no equality of conditional laws is inferred at a branch that is impossible in the source.



<a id="section-2-2"></a>

### 2.2 Adequacy beyond a finite score

 For a fixed admitted family ${\mathcal E}$, define the target-relative law discrepancy <a id="eq:legalrisk"></a>


$$
d_{{\mathcal E}}(P,Q)=\sup_{e\in{\mathcal E}}{\operatorname{TV}}(P^e,Q^e),\qquad
 {\operatorname{TV}}(P,Q)=\tfrac12\sum_h|P(h)-Q(h)|.
 

$$

Equation (3).

 The companion paper supplies a sufficient actual-state interface construction: a quotient $q:X\to Z$ must preserve protected marks and make <a id="eq:quotient"></a>


$$
\sum_{x':q(x')=z'}K_{a,o}(x,x')
 =\overline K_{a,o}(q(x),z')
 

$$

Equation (4).

 independent of the discarded representative. Under the specified matching causal context, retained joint reference variables, resource ownership and prepared-law pushforward, such quotients admit substitution. Uniform conditional joint-row errors $\epsilon_i$ for at most $n_i$ calls and initial discrepancy $\delta_0$ yield the imported finite-history bound <a id="eq:importbound"></a>


$$
d_{{\mathcal E}}(P,\overline P)\leq
 1-(1-\delta_0)\prod_i(1-\epsilon_i)^{n_i}
 \leq\delta_0+\sum_i n_i\epsilon_i.
 

$$

Equation (5).

 These are conditional results from <a id="citation-5"></a>[[16](/consciousness/research/paper-3/references#bib-RodgersPaper2)], not new theorems of this paper. Transferring distance from a resource-restricted simulator family additionally requires transporting that family; target-law fidelity alone is insufficient. We do not repeat those proofs.

The OII learners do not observe $X$ or receive a map $q$ satisfying [Equation 4](/consciousness/research/paper-3/operational-contract-and-measures#eq:quotient). Neither a small fitted model nor success on finitely many tests verifies its universal row hypotheses. The benchmark asks how well candidate interfaces predict nominated legal histories, while leaving the stronger source-quotient and native-resource certification obligations open.



<a id="section-2-3"></a>

### 2.3 Scoring units

<a id="sec:metrics"></a> For method $m$, fixture $f$ and registered core slot $j$, let $v_{fmj}$ be the recorded law error. OII-1–3 use conservative upper values including their stated evaluation allowances; OII-4 uses the full-support floating law evaluation, with separate rigorous event enclosures for selected failure witnesses. The benchmark pass allowance is $\tau=0.15$ throughout, an engineering tolerance rather than a physical boundary.

For $F$ fixtures with $J$ core slots each, the main summaries are <a id="eq:metrics1"></a>
<a id="eq:metrics2"></a>


$$
\begin{aligned}N_{\mathrm{pass}}(m)&=\sum_{f,j}{\mathbf 1}\{v_{fmj}\leq\tau\},&
 \overline v_m&=\frac1{FJ}\sum_{f,j}v_{fmj},\\
 N_{\mathrm{all}}(m)&=\sum_f{\mathbf 1}\{\max_jv_{fmj}\leq\tau\},&
 \overline v_{\max,m}&=\frac1F\sum_f\max_jv_{fmj}.
\end{aligned}
$$

Equation (6, 7).

 The mean fixture-worst value is not the overall maximum or a bound on [Equation 3](/consciousness/research/paper-3/operational-contract-and-measures#eq:legalrisk). An all-core pass means that every slot in that fixture's finite panel passes, not that every legal future context does. Duplicated slots retain their originally assigned weight.

A red-team failure is a fixture for which the privileged postcommit search finds a legal event witnessing error above $\tau$. An unsafe-merge count instead concerns pairs of equal-clock histories whose true continuation laws differ by more than $2\tau$ but share one retained model-state key. The panels and denominators are reported separately. No-witness outcomes are not adequacy certificates, and a belief vector can avoid exact key collisions while still predicting poorly.

 

Table 1. Four obligations that must not be collapsed.

<a id="tab:obligations"></a> <a id="source-tabularx-1"></a>

| Object | What is established | What is not established |
| --- | --- | --- |
| Model syntax | A normalized executable prediction/update rule | Agreement with the unknown source |
| Core-panel score | Error on registered complete-law slots | Uniform adequacy on all legal policies |
| Source interface theorem | Substitution under marked joint-row and causal-contract premises | Those premises for an opaque learned model |
| Post-reveal diagnostic | A source-relative capacity, obstruction or selection fact | Knowledge or oracle access available to the learner |
