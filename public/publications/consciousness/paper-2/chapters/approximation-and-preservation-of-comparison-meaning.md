# Section 7: Approximation and preservation of comparison meaning

<!-- Complete paper-2 web edition. Mathematical macros used below:
\headrulewidth = 0.3pt
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\dist = \operatorname{dist}
\Eff = \operatorname{Eff}_{*}
\supp = \operatorname{supp}
\id = \operatorname{id}
\E = \mathbb E
\Prb = \mathbb P
\Ftwo = \mathbb F_2
\calE = \mathcal E
\calR = \mathcal R
\calN = \mathcal N
\calF = \mathcal F
\calW = \mathcal W
\ploc = P_{\mathrm{loc}}
\qop = q_{\mathrm{op}}
\Lop = \mathscr L_{\mathcal E}
\Rstar = R^{\ast}
\SPC = \textnormal{SPC-2}
\eps = \varepsilon
\ind = \mathbf 1
\normone = \left\lVert#1\right\rVert_1
-->

<a id="section-7"></a>

## 7 Approximation and preservation of comparison meaning

<a id="sec:approximation"></a> 

<a id="section-7-1"></a>

### 7.1 Uniform joint rows control finite causal histories

 Exact quotients are useful reference objects, but an implemented effective model may only approximate them. A complete-history guarantee must then specify what error is uniform and which resources remain identical. Approximate-bisimulation research already emphasizes that compositional error control depends on the operators and metric used <a id="citation-12"></a>[[11](/consciousness/research/paper-2/references#bib-GeblerTini2013)]. The following bound is derived directly for the present joint-instrument contract.

<a id="source-theorem-5"></a>

**Theorem 7.1 (Finite-call causal error budget).**

<a id="p2-19"></a> Work in the matching causal context of [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17), with the same retained controller and reference variables and the same conditional independence or joint-event semantics. For each module $i$, let the conditional law of its next joint record and coarse successor, at every admitted fine state, action and retained context, be within $\epsilon_i\in[0,1]$ of the corresponding effective row. Assume the action, timing, ownership and resource semantics are preserved exactly. Let the matching joint initial-law error be at most $\delta_0\in[0,1]$. If every admitted execution calls module $i$ at most $n_i$ times, then its complete retained-history discrepancy is at most <a id="eq:call-budget"></a>


$$

 \beta=1-(1-\delta_0)\prod_i(1-\epsilon_i)^{n_i}
 \le \min\left\{1,\delta_0+\sum_i n_i\epsilon_i\right\}.

$$

Equation (7.1).

 The bound includes adaptive module/action selection and finite stopping within those pathwise call budgets. 

 <a id="source-proof-17"></a>

**Proof.**

Couple the initial coarse joint states with agreement probability at least $1-\delta_0$. While states and retained histories agree, the common causal controller chooses the same next call and action. Couple the called module's joint outcome/coarse-successor row with failure probability at most $\epsilon_i$. Conditional on the coarse outcome, a fine successor can be sampled using the original row, preserving its marginal law. The bound holds for every fine representative and hence after any history-dependent mixture of representatives.

For a remaining count vector $r$, backward induction gives agreement probability at least $\prod_i(1-\epsilon_i)^{r_i}$: a call to $i$ contributes $1-\epsilon_i$ and reduces $r_i$ by one; an earlier stop removes potential failures. This does not assume independent failure events. Multiply by the initial agreement bound and apply the coupling characterization of TV. The final inequality is the elementary union bound. An expanded argument appears in [Appendix D](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#app:resources). 

□

 A bound only on output marginals, only on visited training states, or only on terminal laws is not the hypothesis. Nor may a controller's earlier observations be discarded when applying a terminal-state contraction bound. Postselection on a rare retained event can amplify discrepancy and needs a separate estimate.

<a id="source-proposition-10"></a>

**Proposition 7.2 (Abstraction layers are not extra physical calls).**

<a id="p2-20"></a> If several descriptions of the *same* event are compared through consistent projection maps, their transported discrepancies add by triangle inequality. The bound is generally $\epsilon_{\mathrm{stack}}\le\min\{1,\sum_\ell\epsilon_\ell\}$, not a product-of-successes bound. Bernoulli laws of parameters $0,1/10,1/5$ have adjacent distances $1/10$ but end-to-end distance $1/5>1-(9/10)^2$. 

 <a id="source-proof-18"></a>

**Proof.**

Insert every intermediate law in the final common record space and contract each discrepancy through any later postprocessing. The displayed Bernoulli example attains the triangle sum and excludes the proposed product replacement. 

□

 Clock alignment therefore precedes error propagation. First accumulate errors between descriptions of a common event; then apply [Equation 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:call-budget) to the resulting joint-row bound along actual events.



<a id="section-7-2"></a>

### 7.2 Robust candidate views under fixed physical contracts

 <a id="source-corollary-3"></a>

**Corollary 7.3 (Fixed-contract profile stability).**

<a id="p2-15"></a> Suppose two descriptions have the same initial laws, supports, records, root comparisons, witness catalogues, cut lists and simulator classes. Let each matching full joint instrument row differ by at most $\epsilon$, and let all nominated schedules have length at most $H$. Put <a id="eq:beta-H"></a>


$$

 \beta_H=1-(1-\epsilon)^H.

$$

Equation (7.2).

 Then the corresponding deficiencies and root contrasts differ by at most $2\beta_H$, and corresponding cut radii differ by at most $\beta_H$. Consequently, <a id="eq:fixed-family-inclusion"></a>


$$

 \widehat{{\mathcal F}}_{\tau+\beta_H,\rho+2\beta_H}^{{\mathcal R},H}
 \subseteq{\mathcal F}_{\tau,\rho}^{{\mathcal R},H}
 \subseteq
 \widehat{{\mathcal F}}_{\tau-\beta_H,\rho-2\beta_H}^{{\mathcal R},H}.

$$

Equation (7.3).

 Threshold views are interpreted by their defining inequalities even when a shifted threshold is negative. 

 <a id="source-proof-19"></a>

**Proof.**

[Theorem 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#p2-19) bounds the complete history-law error by $\beta_H$. [Proposition 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-06) bounds deficiency differences by twice that error; triangle inequality gives the same factor for a contrast of two prepared root laws. [Equation 5.3](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:cut-lipschitz) gives the single-factor cut bound. Use the same witness on each side of each inclusion; its simultaneous inequalities survive the stated threshold shifts. 

□

 This is quantitative stability of a weighted or set-valued functional description. It does not assert global continuity of a discrete subject count. A kernel change that also changes the physically valid catalogue, boundary isolation or reachable domain violates the fixed-contract premise and requires a new execution audit.



<a id="section-7-3"></a>

### 7.3 Target fidelity does not determine the alternatives

 An effective description might reproduce the target perfectly while making communication, memory or a shared seed free to a separated simulator. It would then alter the meaning of $\mathfrak I$. Target preservation and preservation of the comparison class are distinct obligations.

For coherent law families on matching experiments, define the Hausdorff discrepancy <a id="eq:hausdorff"></a>


$$

 d_H({\mathcal N},\overline{{\mathcal N}})=
 \max\left\{
 \sup_{Q\in{\mathcal N}}\inf_{\overline Q\in\overline{{\mathcal N}}}d_{{\mathcal E}}(Q,\overline Q),
 \sup_{\overline Q\in\overline{{\mathcal N}}}\inf_{Q\in{\mathcal N}}d_{{\mathcal E}}(Q,\overline Q)
 \right\}.

$$

Equation (7.4).

 The same translated simulator must work over the entire stipulated experiment family; matching it separately for each unknown preparation is not enough.

<a id="source-theorem-6"></a>

**Theorem 7.4 (Comparison-faithful transport).**

<a id="p2-23"></a> Let ${\mathcal N},\overline{{\mathcal N}}$ be nonempty coherent simulator-law families in one common experiment metric. If 

$$

 d_{{\mathcal E}}(P,\overline P)\le\beta,
 \qquad d_H({\mathcal N},\overline{{\mathcal N}})\le\nu,

$$

 then <a id="eq:null-transfer"></a>


$$

 \left|{\operatorname{dist}}(P,{\mathcal N})-{\operatorname{dist}}(\overline P,\overline{{\mathcal N}})\right|
 \le\beta+\nu.

$$

Equation (7.5).

 No attainment of the defining infima is required. If, additionally, supports and cuts correspond and witness schedules can be physically transported in both directions with these uniform budgets, then <a id="eq:transport-family"></a>


$$

 \widehat{{\mathcal F}}_{\tau+\beta+\nu,\rho+2\beta}
 \subseteq{\mathcal F}_{\tau,\rho}
 \subseteq\widehat{{\mathcal F}}_{\tau-\beta-\nu,\rho-2\beta},

$$

Equation (7.6).

 where all suppressed resource and horizon indices are matched. Corresponding reconstruction deficiencies and root contrasts change by at most $2\beta$. 

 <a id="source-proof-20"></a>

**Proof.**

For any $\eta>0$, choose $Q\in{\mathcal N}$ within $\eta$ of ${\operatorname{dist}}(P,{\mathcal N})$, then $\overline Q\in\overline{{\mathcal N}}$ with $d(Q,\overline Q)\le\nu+\eta$. Triangle inequality yields 

$$

 {\operatorname{dist}}(\overline P,\overline{{\mathcal N}})
 \le\beta+{\operatorname{dist}}(P,{\mathcal N})+\nu+2\eta.

$$

 Let $\eta\downarrow0$ and reverse the roles. This proves [Equation 7.5](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:null-transfer). The other bounds follow from the preceding deficiency and contrast arguments, and physically transporting the same qualifying witness proves [Equation 7.6](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:transport-family). 

□

 The metric estimate is elementary. Its demanding application premise is the two-sided match between *allowed processes*, including their side information, delays and resource ownership. A resource-preserving compilation and lifting of simulators in both directions is a sufficient certificate. One-way translation generally gives only one inequality. When both target laws and the closures of the null-law families coincide exactly, the distances coincide exactly.

The SWAP values in [Proposition 5.2](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-11) show why this matters. Identical target laws have cut radius $3/4$, $1/2$ or zero under different permissions. There is no target-only quotient that simultaneously preserves those distinct meanings while silently changing the alternatives. Moreover, exterior law preservation concerns the specified exterior records and corresponding cuts. It neither recovers omitted native observations nor reveals hidden interior cuts.

Together, [Theorem 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-16), [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17), [Theorem 7.4](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#p2-23) give a useful encapsulation contract: joint target closure, implementable causal substitution, and comparison-faithful transport. They do not imply that every candidate support admits a proper reduction, that every physical implementation of the same boundary law has the same internal organization, or that any encapsulated unit is a subject.
