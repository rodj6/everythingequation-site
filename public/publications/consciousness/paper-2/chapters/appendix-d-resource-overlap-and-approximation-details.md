# Appendix D: Resource, overlap and approximation details

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

<a id="section-D"></a>

## D Resource, overlap and approximation details

<a id="app:resources"></a> 

<a id="section-D-1"></a>

### D.1 Coupling without independent errors

 The product expression in [Equation 7.1](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:call-budget) is a lower bound on agreement, not a claim that approximation failures are independent. To make the adaptive argument explicit, let $r_i$ be a pathwise remaining call allowance and define 

$$

 V(r)=\prod_i(1-\epsilon_i)^{r_i}.

$$

 Conditional on currently equal coarse states and histories, a call to $i$ can be coupled to preserve agreement with probability at least $1-\epsilon_i$. Any agreed successor has remaining guarantee $V(r-e_i)$. Their product is $V(r)$, regardless of which called module the common controller chose. Randomizing that choice keeps the bound, and stopping gives agreement probability one, at least $V(r)$. Backward induction yields the pathwise result. The initial joint coupling adds its factor $1-\delta_0$.

A fine successor compatible with a coupled coarse event can be sampled from the original fine conditional row. At zero-probability coarse events the choice has no effect. This preserves the fine marginal law while maintaining the coupling on the coarse event. It is why the row bound must hold for every fine representative, including those selected by prior histories.

Changed action permissions, hidden seed correlations or an uncharged fresh initialization are not small row errors covered by this calculation. They change the experiment or resource contract. If a later conditioning event is rare, the unconditional bound alone does not provide the same error bound after conditioning.



<a id="section-D-2"></a>

### D.2 Spectators, old cuts and enlarged supports

 The spectator hypotheses in [Proposition 5.5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-14) apply to the complete experiment, not only a state snapshot. For an old cut, any original simulator extends by the independent exact $Z$-process under the supplied null-family closure. The target and simulator then share the same product spectator law, so their full-law distance is unchanged. Conversely, projection of any enlarged simulator supplies an allowed original simulator and cannot increase error. Infima in both directions prove equality, even when no best simulator is attained.

Across the cut between the entire old system and the spectator, the actual product process is admissible in the separated class and gives zero radius. Thus an enlarged support containing a truly isolated spectator cannot pass a strictly positive requirement on every such registered cut. There is no result for a nominal spectator that furnishes shared randomness, acts as a message buffer, influences a controller, or returns an old source record later. A conditional informational duplicate is likewise not automatically a physical spectator.



<a id="section-D-3"></a>

### D.3 Pathwise resource balances

 <a id="source-proposition-16"></a>

**Proposition D.1 (Preservation of a consumable ledger).**

<a id="p2-24"></a> Suppose each positive-probability transition with retained charge $c\ge0$ satisfies the componentwise balance <a id="eq:resource-balance"></a>


$$

 b(y)+c=b(x),

$$

Equation (D.1).

 or the corresponding non-increasing inequality. If the ledger $b$ descends through a strong quotient and the charge is retained in the record, the effective transition has the same balance. Thus its pathwise cumulative spending cannot exceed its initial stock. 

 <a id="source-proof-28"></a>

**Proof.**

Every fine transition contributing positive mass to a fixed effective record-and-successor row satisfies the same equality because $b$ is constant on each fibre and $c$ is fixed by the record. The equality therefore holds for that effective event. Summing along the path telescopes the balances. The proof for a non-increasing inequality is identical. 

□

 For a one-use service, a correct process returns success followed by blocked. A purported quotient that forgets the exhausted state and reuses the ready row returns two successes. The two deterministic trace laws have TV one. A bookkeeping label can therefore be prediction-relevant even if the public boundary looked unchanged before the second request. Counts alone may still be insufficient: a reused shared random seed and two fresh private seeds can have the same individual marginals and different joint continuation laws.



<a id="section-D-4"></a>

### D.4 Shared components are not independent copies

 <a id="source-proposition-17"></a>

**Proposition D.2 (Overlap requires a common carrier and joint law).**

<a id="p2-25"></a> Descriptions on supports $AB$ and $BC$ that share one physical $B$ can be simultaneously consistent only on a subset of the fibre product <a id="eq:fibreproduct"></a>


$$

 X_{AB}\times_{X_B}X_{BC}
 =\{(x_{AB},x_{BC}):\pi_Bx_{AB}=\pi_Bx_{BC}\},

$$

Equation (D.2).

 rather than on pairs assigning different values to the same $B$. The full fibre product is the maximal carrier allowed by overlap consistency alone; the physically admitted carrier can be a proper subset. Compatible overlap marginals alone need not determine a unique global law, and a cyclic family of such marginals need not admit a global law at all. 

 <a id="source-proof-29"></a>

**Proof.**

Agreement of the two descriptions of the same $B$ places every admissible state in [Equation D.2](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#eq:fibreproduct). When each binary pair carrier is unrestricted, the fibre product has eight states instead of the independent product's sixteen. An actual domain restricted to even parity has only four states although each of its pair projections is unrestricted; hence overlap consistency alone is not sufficient to recover the admitted domain. The uniform law on all three-bit strings and the uniform law on even-parity strings have identical pairwise marginals but different triple laws. Their TV distance is $1/2$. For nonexistence, require pairwise $A=B$, $B=C$ and $A\ne C$, each with fair singleton marginals. Any global sample satisfying the first two equalities violates the third. Thus no global law exists. 

□

 A physical joint successor kernel and consistent ownership resolve what the overlap marginals alone leave open. Mutually exclusive controller modes can instead represent alternative uses of the shared component. Neither construction licenses treating a single remaining resource as two independent supplies.



<a id="section-D-5"></a>

### D.5 Candidate-family transport and unattained optima

 The cut-radius estimate in [Equation 7.5](/consciousness/research/paper-2/approximation-and-preservation-of-comparison-meaning#eq:null-transfer) needs no compactness: approximate minimizers and approximate Hausdorff partners suffice. An exact matching of null-law *closures* is enough because distance to a set equals distance to its closure. Conversely, the distance function over the common law space determines that closure as its zero set. Thus preservation of target values at one point should not be mistaken for preservation of the comparison family everywhere.

For the threshold inclusions, fix a candidate support and an actual witness. If its hatted return exceeds $\rho+2\beta$ and all hatted cuts exceed $\tau+\beta+\nu$, the transported witness exceeds the unhatted thresholds simultaneously. This gives the left inclusion. Transport an unhatted witness in the reverse direction for the right inclusion. If only one witness-transport direction is available, only the corresponding inclusion follows. The construction compares already matched records, supports and cut lists; it does not infer unobserved interior structure from an exterior quotient.
