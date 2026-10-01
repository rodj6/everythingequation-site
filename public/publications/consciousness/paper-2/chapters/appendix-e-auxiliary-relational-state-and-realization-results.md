# Appendix E: Auxiliary relational-state and realization results

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

<a id="section-E"></a>

## E Auxiliary relational-state and realization results

<a id="app:relational"></a> These results clarify the limited sense in which a relation can become a relatum. They are not premises asserting that every scale is conscious or that the same finite internal architecture repeats at all levels.



<a id="section-E-1"></a>

### E.1 Residual memory relative to fixed local summaries

 <a id="source-proposition-18"></a>

**Proposition E.1 (Minimum residual predictive alphabet).**

<a id="p2-32"></a> Let a finite deterministic controlled machine have actual state $s$, a fixed local summary $\ell(s)$, and complete tested observations that include that summary. Let $Q$ be its quotient by equality of all finite future traces. For each local-summary value $l$, put 

$$

 k_l=|\{q\in Q:\ell(q)=l\}|.

$$

 The smallest residual alphabet $J$ permitting exact future prediction and autonomous update from $(l,j)$ has <a id="eq:residual-memory"></a>


$$

 |J|_{\min}=\max_l k_l,
 \qquad b_J=\left\lceil\log_2\max_l k_l\right\rceil

$$

Equation (E.1).

 fixed-length bits. 

 <a id="source-proof-30"></a>

**Proof.**

Two future-distinguishable quotient states in one local fibre cannot receive the same residual label. This gives the lower bound. Label the quotient states distinctly within each fibre, reusing labels between fibres. Then $(l,j)$ identifies $q$. Deterministic all-future equivalence is preserved by each action transition, so decode, update $q$, and re-encode. This attains the bound. 

□

 The result is relative to the local-summary contract. Under unrestricted coordinate enlargement, $(x,y,j)\mapsto((x,j),y)$ absorbs the relation variable bijectively and transports the complete dynamics. No absolute ontological irreducibility of $J$ follows. Physical locality and access restrictions can make that enlargement unavailable, but those restrictions must be stated.



<a id="section-E-2"></a>

### E.2 Two predictive aspects in a deterministic domain

 <a id="source-proposition-19"></a>

**Proposition E.2 (Two-port subdirect representation).**

<a id="p2-33"></a> For a finite behaviorally minimal deterministic two-port machine, let $Q_L$ identify states with equal all-future left-output traces under every joint input word, and define $Q_R$ similarly. Then <a id="eq:subdirect"></a>


$$

 Q\hookrightarrow Q_L\times Q_R,
 \qquad q\longmapsto([q]_L,[q]_R),

$$

Equation (E.2).

 is injective, has both coordinate projections onto, and carries the induced quotient dynamics. It is a full product exactly when every left-view class meets every right-view class. 

 <a id="source-proof-31"></a>

**Proof.**

Agreement of both deterministic output traces is agreement of the joint output trace, hence of the state in a minimal machine. The view maps are onto by definition and their all-future equivalences are preserved by each action update. The product criterion is exactly surjectivity onto every pair of view classes. 

□

 The two aspects may coincide completely: one parity memory bit can be output on both ports, giving a diagonal two-state subdirect product rather than two independent bits. The deterministic restriction is essential. A hidden fixed bit $b$ with outputs $(\xi,\xi\oplus b)$, using fresh fair $\xi$ each tick, gives equal all-future marginal streams for both values of $b$, but different joint laws. Thus marginal stochastic predictive views need not jointly determine the whole process.



<a id="section-E-3"></a>

### E.3 Coordinates can sometimes be selected by supplied resets

 <a id="source-proposition-20"></a>

**Proposition E.3 (Complete reset algebra).**

<a id="p2-34"></a> Let a finite state set $X$ have labeled reset maps $r_i^a:X\to X$, with nonempty finite value alphabets $A_i$. Suppose same-family resets overwrite, $r_i^a\circ r_i^b=r_i^a$; different families commute; every composite of one reset per family is constant on $X$, with value $c(a_1,\ldots,a_n)$; and $c:\prod_iA_i\to X$ is bijective. Then the unique coordinate map respecting all named reset semantics is 

$$

 \phi(c(a_1,\ldots,a_n))=(a_1,\ldots,a_n).

$$

 It transports each $r_i^b$ to overwrite of coordinate $i$ by $b$. 

 <a id="source-proof-32"></a>

**Proof.**

Bijection of $c$ defines $\phi$. Commute $r_i^b$ through the resets in other families and use same-family overwrite to obtain $r_i^b c(a)=c(a_{-i},b)$. This gives the coordinate action. Any map respecting those labeled reset semantics must send their joint constant image to the same tuple, proving uniqueness. 

□

 The theorem uses strong physical access and completeness assumptions. A bare transition matrix does not supply this reset algebra. Even when available, it does not choose internal/external route typing, native time, process provenance or a phenomenal bridge. It is a conditional coordinate selector, not a universal construction of ${R^{\ast}}$.



<a id="section-E-4"></a>

### E.4 An active relational state used at the next level

 <a id="source-proposition-21"></a>

**Proposition E.4 (Parity encapsulation and a growing hierarchy).**

<a id="p2-35"></a> A two-bit module with input $u$ evolves over ${\mathbb F_2}$ by <a id="eq:parity-module"></a>


$$

 p'=q,\qquad q'=p\oplus u,\qquad z=p\oplus q.

$$

Equation (E.3).

 Its parity interface has the exact update $z'=z\oplus u$. With a native contract exposing that parity and preserving the required marks, it is a proper two-state quotient of the four-state carrier.

For $n$ modules, latch the old parity ports and use $u_i=z_i\oplus z_{i-1}$ on a ring. If $A_n$ is the fine linear update, $Q_n$ parity projection and $S_n$ the ring shift, then <a id="eq:parity-ring"></a>


$$

 Q_nA_n=S_nQ_n,\qquad S_n^n=I,\qquad A_n^{2n}=I.

$$

Equation (E.4).

 Under the supplied native ring routes, root returns occur at the indicated horizons. Every nontrivial cut between unions of modules has a first-round opposite-side parity witness of size one, giving error at least $1/2$ for the declared no-communication alternatives. 

 <a id="source-proof-33"></a>

**Proof.**

The parity calculation in [Equation E.3](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#eq:parity-module) gives $p'\oplus q'=q\oplus p\oplus u=z\oplus u$, independent of the hidden representative. At $u=0$, the fine bits swap; the discarded degree is dynamically active, not an independent spectator. Under the latched ring inputs, $z'_i=z_{i-1}$ and $p'_i=p_i\oplus z_i$. The macro shift returns after $n$ rounds. Across those rounds each $p_i$ accumulates the XOR of all original parities; a second circuit cancels that sum. This proves [Equation E.4](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#eq:parity-ring). Any nontrivial ring cut has a crossing parity transfer. Vary its source parity while holding the other prepared values fixed; the opposite-side output differs deterministically. [Proposition 5.1](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#p2-10) supplies the $1/2$ lower bound. 

□

 The installed route and native observation assertions are independent realization data; the matrix identity alone does not certify their physical availability. Internal lower-module return certificates are retained separately from the parity-only boundary interface. The live configuration reductions are $16\to4$, $256\to16$, and $65{,}536\to256$ for $n=2,4,8$, respectively. The effective memory grows with $n$. This is an exact operational example of relational states serving as higher-level relata, not automatic fixed-state self-similarity or nested subjecthood.
