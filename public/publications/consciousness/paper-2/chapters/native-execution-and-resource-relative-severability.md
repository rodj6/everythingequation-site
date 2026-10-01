# Section 5: Native execution and resource-relative severability

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

<a id="section-5"></a>

## 5 Native execution and resource-relative severability

<a id="sec:execution"></a> 

<a id="section-5-1"></a>

### 5.1 Three questions, not one integration score

 A joint code may exist without a physically available decoder. A physical interaction may occur even though a disconnected alternative reproduces its retained records. An informative backup may be statistically redundant but operationally necessary after an erasure. The information diagnostic therefore cannot absorb the execution and comparison contracts.

For each registered support $C$, let ${\mathcal W}_C$ be its fixed finite physically justified catalogue of compatible native schedules. A schedule includes operating type, source preparations, retained records, clock, controller and receiver ownership, and the certificate that its nominated covering route is internal. The catalogue uses supplied installed primitive/port incidences. It is not recomputed from a minimal-target graph whenever a probability changes. If those implementation data are absent, the support is uncertified by this construction; that is not a conclusion about experience.

For a specified root contrast, write $r_w$ for the TV distance between the two terminal internal root laws under $w$. Where a finite family of root contrasts is admitted, a maximum over that fixed family may be used. It is not permissible to change preparations or the retained root record after observing which comparison gives a favourable value.



<a id="section-5-2"></a>

### 5.2 The comparison class is part of the quantity

 Fix a resource contract ${\mathcal R}$, an experiment family ${\mathcal E}$, and a nonempty class ${\mathcal N}_{{\mathcal R}}$ of coherent simulator models. Each simulator supplies laws for *all* admitted experiments with its own resources and update rules fixed. Define <a id="eq:cut-radius"></a>


$$

 \mathfrak I_{{\mathcal R}}(P)
 =\inf_{Q\in{\mathcal N}_{{\mathcal R}}}d_{{\mathcal E}}(P,Q).

$$

Equation (5.1).

 For a cut $C=B\sqcup D$ and one scheduled test family, use the more explicit notation <a id="eq:schedule-cut"></a>


$$

 \mathfrak I_{w,{\mathcal R}}(B\mid D)
 =\inf_{Q\in{\mathcal N}_{w,{\mathcal R}}^{B\mid D}}
 \max_\theta{\operatorname{TV}}(P^{C,w}_\theta,Q^w_\theta).

$$

Equation (5.2).

 Public test identity can be visible where the contract allows it. The alternative may not select a new model after learning an unknown source value, communicate through an uncharged global controller, or restore an erased resource at each nominal step.

<a id="source-proposition-5"></a>

**Proposition 5.1 (Resource and experiment comparison).**

<a id="p2-10"></a> Enlarging an allowed simulator class cannot increase $\mathfrak I$. Enlarging a common tested experiment family cannot decrease it when the simulator family has coherent restrictions. For one fixed null class, <a id="eq:cut-lipschitz"></a>


$$

 |\mathfrak I_{{\mathcal R}}(P)-\mathfrak I_{{\mathcal R}}(P')|
 \le d_{{\mathcal E}}(P,P').

$$

Equation (5.3).

 If two preparations differing only on side $B$ change the *joint* opposite-side record law by $\eta$, every alternative whose $D$-record marginal ignores that prepared $B$-value has worst-case complete-law error at least $\eta/2$. 

 <a id="source-proof-9"></a>

**Proof.**

The first two claims follow directly from the infimum and supremum with their indicated fixed objects. The triangle inequality gives $d(P,Q)\le d(P,P')+d(P',Q)$; taking infima and reversing the targets proves [Equation 5.3](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:cut-lipschitz). For the cut bound, both alternative $D$-laws equal one law $Q_D$. Hence $\eta\le{\operatorname{TV}}(P_D,Q_D)+{\operatorname{TV}}(Q_D,P_D')$. At least one term is $\eta/2$ or larger, and marginalization cannot increase complete-law error. 

□

 The last bound detects a bit encoded only in a block correlation on the far side of the cut. It does not identify that block with a collection of separately signaling singleton edges. It is only a lower bound for the actual simulator class; replacing that class by all nonsignaling laws can change the optimization.

For a finite-horizon strategy catalogue, allowing shared randomization forms the convex hull of the deterministic strategy laws and often gives a finite TV linear program. Private randomized local strategies need not form that same convex class. Treating a shared random seed as free when it is not allowed changes the question. Communication-restricted input-guessing problems provide useful precedents for such resource distinctions <a id="citation-7"></a>[[2](/consciousness/research/paper-2/references#bib-AlmeidaEtAl2010)]; the following full-law calculation is stated for its particular classical contract.

<a id="source-proposition-6"></a>

**Proposition 5.2 (Weak SWAP and resource dependence).**

<a id="p2-11"></a> Let $P_g=(1-g){\operatorname{id}}+g\operatorname{SWAP}$ on two input bits, with $0\le g\le1$. Under one-step simultaneous outputs, arbitrary local functions and shared input-independent randomness, but no communication, <a id="eq:weak-swap"></a>


$$

 \mathfrak I_{\mathrm{shared,no\ communication}}(P_g)=g/2.

$$

Equation (5.4).

 For full SWAP, private independent local randomness gives optimum $3/4$; shared randomness gives $1/2$; one timely communicated bit in one direction still gives $1/2$; one timely bit in each direction gives zero. Messages delivered after the output deadline do not alter the earlier output law. 

 <a id="source-proof-10"></a>

**Proof.**

Changing the opposite input changes each target marginal by $g$, proving the shared no-communication lower bound. For attainment, let both sides output their own bit XOR a common bit $\xi$ with ${\mathbb P}(\xi=1)=g/2$. On equal inputs this changes the pair with probability $g/2$, while the target never changes it. On unequal inputs it swaps the pair with probability $g/2$, rather than $g$. Every row is therefore at distance $g/2$. The private-randomness and communication calculations are given in [Appendix B](/consciousness/research/paper-2/appendix-b-statistical-comparison-and-finite-resource-optima#app:statistical); they preserve the same deadline and input permissions. 

□

 The values are properties of a target together with a comparison contract. They are not intrinsic amounts of phenomenal unity.



<a id="section-5-3"></a>

### 5.3 Perfect encoded return with zero simulation obstruction

 <a id="source-example-1"></a>

**Example 5.3 (The ED separation).**

<a id="p2-12"></a> Consider the full timed trace <a id="eq:ed-trace"></a>


$$

 (b,c)\longmapsto(\xi,\xi\oplus b)\longmapsto(b,0),
 \qquad \xi\text{ fair}.

$$

Equation (5.5).

 The intermediate pair carries the source distinction only jointly, and deleting either singleton loses deficiency $1/2$. The actual scheduled root-return contrast is one. Nevertheless, under an ED-only experiment contract, shared fair $k$ and permission to retain the local initial input admit the disconnected trace generator <a id="eq:ed-simulation"></a>


$$

 \text{side 1: }(k\oplus b,b),\qquad
 \text{side 2: }(k,0).

$$

Equation (5.6).

 For each prepared $(b,c)$, set $\xi=k\oplus b$. This is fair and makes the entire joint trace equal in law to [Equation 5.5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#eq:ed-trace). Thus its shared-no-communication cut radius is zero. 

 This is not a claim that the installed encoder and decoder failed to interact. Nor does the construction simulate every operation in a larger native catalogue: a separately callable decoder under independently prepared inputs adds tests not present in the ED-only contract. The simulator also uses persistent local input information; forbidding that resource changes the comparison.

<a id="source-figure-2"></a>

![Figure 2](/publications/consciousness/paper-2/figures/figure-2.svg)

  



Figure 2. A candidate profile reports three separately specified objects. Joint information is a statistical property; a return witness is an implementation claim; a cut radius is relative to allowed alternative processes. The arrows mean inclusion in a profile, not logical implication between the three properties.

<a id="fig:three-layers"></a> 



<a id="section-5-4"></a>

### 5.4 A family of candidates rather than a compulsory partition

 <a id="source-definition-3"></a>

**Definition 5.4 (Schedule-indexed candidate family).**

<a id="p2-13"></a> For fixed registered supports, cut lists, resource contracts and witness catalogues, define <a id="eq:candidate-family"></a>


$$

 {\mathcal F}_{\tau,\rho}^{{\mathcal R},H}
 =\left\{C:\begin{array}{l}
 \exists w\in{\mathcal W}_C,\ |w|\le H,\quad r_w>\rho,\\
 \mathfrak I_{w,{\mathcal R}}(B\mid D)>\tau
 \text{ for every registered nontrivial cut }C=B\sqcup D
 \end{array}\right\}.

$$

Equation (5.7).

 The same schedule must supply the return and all its cut comparisons. Singletons have no nontrivial spatial cut and are reported separately. The full diagnostic retains the support, witness, reconstruction table, cut profile and implementation data, not just membership at one selected threshold. 

 No particular $\tau,\rho,H$ is selected here as a phenomenal boundary. Changing resource classes can change the family. Even at fixed parameters it need not be laminar.

For example, a ready controller may choose either an $AB$ mode or a $BC$ mode, then lock that choice for two ticks. In either mode, two native swaps return a bit perfectly, and the first-round record gives a no-communication cut lower bound $1/2$. A shared-guess strategy attains it for the two-tick trace when local initial memory is allowed. Both dyads are candidate supports for suitable $\tau<1/2$, $\rho<1$. They overlap, while no compatible schedule covers $ABC$. The family describes alternative executable organizations, not two independently duplicated uses of the same $B$ and not simultaneous overlapping subjects.

<a id="source-proposition-7"></a>

**Proposition 5.5 (Dynamically isolated spectators).**

<a id="p2-14"></a> Suppose an added process $Z$ is independent of $C$ throughout every nominated complete experiment: $P_{C,Z}^{e}=P_C^{e}\otimes P_Z^{e}$. The spectator preparation and law are fixed across the compared unknown $C$-source states at a fixed public context. Its preparation, operations and controller supply no cross-feedback or transferable memory, randomness, fuel or communication resource. Suppose the old-cut null families are closed under projection and the corresponding independent extension by the exact spectator, and the actual independent product process is permitted by the local resource budgets at the outer cut $C\mid Z$. Then adding $Z$ leaves the old cut radii and old candidate data unchanged, while the outer cut $C\mid Z$ has radius zero. 

 <a id="source-proof-11"></a>

**Proof.**

Extend an approximate simulator of $C$ by the independent exact spectator; its error is unchanged because ${\operatorname{TV}}(P\otimes R,Q\otimes R)={\operatorname{TV}}(P,Q)$. This gives one inequality for old cuts. Project any enlarged simulator to $C$; the stipulated closure and TV contraction give the reverse inequality. Across $C\mid Z$, the actual product target is already an admissible separated simulator. A detailed statement of the schedule and resource scope is in [Appendix D](/consciousness/research/paper-2/appendix-d-resource-overlap-and-approximation-details#app:resources). 

□

 Product local transition rows alone do not imply these hypotheses if an exterior policy drives one process using the other's past outputs. The independence requirement is imposed on the complete experiments actually compared. Informational padding does not imply these physical hypotheses. For instance, a copied source bit has zero snapshot deletion loss but can return after an overwrite; it is not a spectator in that later experiment. Conversely, excluding a padded support from positive all-cut membership says nothing by itself about consciousness. The construction is pre-phenomenal at every step.
