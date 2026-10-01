# Appendix A: Implementation details and the exact role of each learner

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

<a id="section-A"></a>

## A Implementation details and the exact role of each learner

<a id="app:methods"></a> This appendix specifies the implemented OII-4 methods, rather than transferring guarantees from a similarly named published algorithm. The evidence package retains the full original code, settings, committed model bundles and fitting logs. The principal routines are `state_learning.py` and `study_learner.py`; a fresh implementation should reproduce those choices before interpreting a discrepancy as replication failure.



<a id="section-A-1"></a>

### A.1 Public evidence and calibration selection

 Each fitting episode begins at one of four public preparations and contains eight action/output pairs. The 960 fitting episodes cycle through the preparations; their four-valued actions are sampled uniformly. The 24 calibration policy specifications comprise four constant policies, eight fixed action words, eight reactive policies and four history-dependent policies, with eight independent reset episodes per specification. In the saved policy grammar the latter are named `history_xor`, but their implemented action at zero-based tick $t$ is $(\text{offset}+\sum_{j<t}o_j+t)\bmod4$, a modular sum of output symbols rather than bitwise XOR. This names the existing implementation accurately without changing any policy or observation. These 192 episodes are separate from the fitting episodes, but their policy descriptions need not be absent from the later oracle panel.

For a candidate $M$, selection uses the average conditional next-output negative log likelihood <a id="eq:nll"></a>


$$

 \ell_{\rm cal}(M)=-\frac{1}{N_{\rm calls}}
 \sum_{e\in\mathcal D_{\rm cal}}\sum_{t=0}^{7}
 \log\!\left(\max\{p_M(o_t\mid h_t,u_t),10^{-300}\}\right).

$$

Equation (12).

 The action is conditioned on; the candidate is not rewarded for predicting the externally chosen policy. Equal validation values are broken by original candidate index. R selects from indices 0–9; E from 0–3; G from 4–5; B from 6–9; S from 0–3 and 6–9; P from 10–12; H uses index 14. O separately mixes indices 10–13. Candidate fitting uses only the training tape. The public calibration tape selects the exported candidate or mixture; hidden-law scoring follows commitment.



<a id="section-A-2"></a>

### A.2 The local IOALERGIA adaptation

 The input/output frequency prefix tree begins with a synthetic reset symbol $4+p$ and acknowledgement zero for preparation index $p\in\{0,1,2,3\}$. The root remains a distinct reset-only operating type. It is not merged with live nodes. Subsequent edges carry the full pair $(u,o)$, with $o\in\{0,1,2,3\}$ encoding both output bits jointly.

The red/blue procedure considers the shortest blue prefix, with lexicographic tie breaking, and compares it with red nodes in the same order. Original prefix counts remain available for recursive compatibility tests after folding. For two nodes with positive counts $n_1,n_2$ for an action, each output frequency difference is compared with <a id="eq:compatibility"></a>


$$

 \left(n_1^{-1/2}+n_2^{-1/2}\right)
 \sqrt{\tfrac12\log(2/\varepsilon)}.

$$

Equation (13).

 Compatibility is also required on common original child edges. Missing or unobserved actions do not establish a distinguishing law. Accepted nodes are folded, their observed counts combined and compatible successor structure identified. The four E variants use $\varepsilon\in\{0.01,0.05,0.5,1.5\}$. These settings are tuning parameters of the published-style compatibility test, not a simultaneous confidence level for all adaptively selected merges.

The exported automaton has deterministic successor labels conditional on $(u,o)$ and stochastic output rows. A count vector $(c_0,\ldots,c_3)$ is smoothed as 

$$
\widehat p(o\mid s,u)=\frac{c_o+1/256}{\sum_jc_j+4/256}.

$$

Equation (14).

 An unobserved successor goes to an explicit sink with uniform output rows and self-loops. The H control exports the unmerged tree with the same smoothing and completion rule. Its poor scored performance is evidence about sparse-prefix prediction with this fallback, not a theorem that storing complete history is intrinsically inferior.

This is a local stochastic-Mealy-machine adaptation of the IOALERGIA family, informed by its published formulation and AALpy source <a id="citation-28"></a>[[12](/consciousness/research/paper-3/references#bib-Mao2012MDP), [13](/consciousness/research/paper-3/references#bib-MaoJaeger2012), [7](/consciousness/research/paper-3/references#bib-AALpySource)]. The audit compared the recursive common-child test, Hoeffding expression, red/blue ordering and folding with the available upstream source. Reset-only typing, count smoothing and the uniform unknown sink remain local choices. The upstream branch cited is mutable; the local executed source is frozen by hash, but the record does not identify an immutable historical upstream commit. No end-to-end equivalence with the upstream package or transfer of its asymptotic guarantees is asserted.



<a id="section-A-3"></a>

### A.3 The group-aware variants

<a id="app:group"></a> G augments the $\varepsilon=0.05$ pair test with a proposed merged-group test. For each live action, original member prefixes with at least 12 samples supply empirical four-outcome laws $\widehat p_i$ and tuning allowances $a_i=0.35/\sqrt{n_i}$. The procedure bounds or solves <a id="eq:groupfit"></a>


$$

 \min_{q\in\mathcal S_4}\max\{0,\max_i[{\operatorname{TV}}(\widehat p_i,q)-a_i]\},

$$

Equation (15).

 where $\mathcal S_4$ is the four-outcome probability simplex. A pair lower bound can reject early; for two members the corresponding radius is explicit. For larger groups, all nonempty proper output subsets give the finite linear-program representation of TV. A candidate merge is rejected if the value exceeds the selected threshold, $0.10$ or $0.20$, up to the implemented $10^{-10}$ numerical comparison tolerance. Common folded successors are also checked. The code labels rejections as heuristic, not confidence-certified.

Sparse prefixes can therefore escape the group test. In addition, a changed merge order can change later proposals, so G need not be a simple finer partition of the E model. These are implementation facts relevant to the poor group-only result and mixed fixed-compatibility comparison. The allowances in [Equation 15](/consciousness/research/paper-3/appendix-a-implementation-details-and-the-exact-role-of-each-learner#eq:groupfit) are not licensed as familywise confidence bounds.

There is nonetheless a valid reason not to equate pairwise nondetection with group adequacy. For $m$ laws 

$$
P_i=(1-s)\delta_0+s\delta_i,\qquad i=1,\ldots,m,

$$

Equation (16).

 all pairwise TV distances are $s$, while <a id="eq:group-radius"></a>


$$

 \inf_Q\max_i{\operatorname{TV}}(P_i,Q)=s(1-1/m).

$$

Equation (17).

 The symmetric center with mass $1-s$ at zero and $s/m$ at each private atom attains this value. To prove the lower bound, average any center over permutations of the private atoms, which cannot increase the convex maximum risk. If its total private mass is $v$, the overlap with a target is at most $\min\{1-s,1-v\}+\min\{s,v/m\}$, maximized at $v=s$, giving the claimed radius. Mass outside the displayed atoms cannot increase overlap. Thus $s=0.24$, $m=3$ gives radius $0.16$ even though every pair distance is below $2(0.15)$. The exact counterexample does not certify the sampled merge heuristic.



<a id="section-A-4"></a>

### A.4 Controlled hidden-state fitting and stopping

<a id="app:em"></a> For each $k\in\{2,4,8,16\}$ the method fits four preparation distributions $\pi_p$ and the general joint instrument $K_{u,o}(s,s')$. It does not impose the factorization $T_u(s,s')E(o\mid s')$. This distinction is necessary for the capacity construction in [Section 5](/consciousness/research/paper-3/capacity-produced-candidates-and-selection#sec:capacity).

One initialization is used per size. Its seed is the first four bytes of the SHA-256 digest of the fixture identifier concatenated with `:HMM:` and the size. Each action/current-state joint row is initialized by a Dirichlet distribution with concentration $0.7$ per $(o,s')$ coordinate; each prepared law uses concentration one per coordinate. Standard scaled forward/backward calculations condition on the observed action sequence. If $f_t$ is the normalized forward row and $c_t=f_tK_{u_t,o_t}{\mathbf 1}$, the expected transition count is proportional to 

$$
\xi_t(s,s')=
 \frac{f_t(s)K_{u_t,o_t}(s,s')b_{t+1}(s')}{c_t},

$$

Equation (18).

 where $b_t$ is the correspondingly scaled backward quantity. The M step normalizes accumulated joint transition counts over $(o,s')$ for each $(u,s)$ and prepared-state counts over $s$. Both count tables include a fixed pseudocount $0.01$ per coordinate. Scale denominators are floored at $10^{-300}$.

The iteration limit is 60. With zero-based iteration index $i$, the implementation stops early when $i>10$ and <a id="eq:em-stop"></a>


$$

 |L_i-L_{i-1}|<10^{-7}\max\{1,|L_i|\},

$$

Equation (19).

 where $L_i$ is the fitting negative log likelihood calculated in that iteration's forward pass. The returned parameters include the subsequent update in the same iteration. This records the actual code convention; no monotonicity or global optimum theorem is asserted for the pseudocount fit and stopping rule.

  

Table 15. Saved OII-4 hidden-state fit metadata: the 60-iteration setting was a cap, not a common realized count.

<a id="tab:em"></a>   <a id="source-tabular-13"></a>

| Latent dimension | Fits | Minimum | Maximum | Early stops | At cap |
| --- | --- | --- | --- | --- | --- |
| 2 | 48 | 12 | 60 | 30 | 18 |
| 4 | 48 | 12 | 60 | 16 | 32 |
| 8 | 48 | 12 | 60 | 4 | 44 |
| 16 | 48 | 60 | 60 | 0 | 48 |

 

 This is a source-supported reporting correction made during manuscript assembly. The original fitted models, stopping rule and prediction scores are unchanged.

 

The preserved metadata and trace lengths give 192 fits, of which 142 reach 60 iterations and 50 stop earlier; the realized range is 12–60. Earlier prose that called these universally “60 iterations” is corrected to “at most 60.” This is the only frozen methods-description amendment made in manuscript assembly. No fit, score, seed, threshold or primary comparison was changed.



<a id="section-A-5"></a>

### A.5 Tree and mixture controls

 The tree implementation retains the OII-2 dictionary of 100 public streaming features and explicit registers sufficient to update every selected feature. Conditional joint-output trees use maximum depth ten and settings $(\lambda,L)=(0.1,64),(0.25,64),(0.5,64),(1.5,32)$ for split penalty and leaf cap. P selects the lowest-calibration-NLL candidate among the first three; O uses all four. The vocabulary includes finite lags, counts, parity and preparation/time features. The preserved fitter, rather than an informal feature list, defines the control exactly.

For calibration context $e$, let $\widehat P^e$ be its eight-episode empirical distribution on complete records. O chooses simplex weights to minimize <a id="eq:mixture-select"></a>


$$

 \max_{e\in{\mathcal E}_{\rm cal}}{\operatorname{TV}}\left(\widehat P^e,\sum_jw_jQ_j^e\right)
 =\max_e\left[1-\sum_{h\in\operatorname{supp}\widehat P^e}
       \min\{\widehat P^e(h),\sum_jw_jQ_j^e(h)\}\right].

$$

Equation (20).

 An overlap variable for each observed record linearizes the right-hand side. Unobserved mass is not assumed zero for the candidate; its mass outside the empirical support is accounted for by the overlap identity. The fitted mixture chooses a component once per episode, with predictive posterior weights updated from its record. It does not independently resample a component at each tick.

The numerical LP is accepted only after its reported primal/dual gap is within $10^{-7}$. The final fixture required rerunning the same feasible LP without the solver's presolve, before hidden scoring. The candidate bank, data and tolerance were unchanged. Numerical solver certificates for this selector are not exact rational certificates for every fitted law.
