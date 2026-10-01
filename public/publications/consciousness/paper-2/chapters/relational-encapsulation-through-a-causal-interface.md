# Section 6: Relational encapsulation through a causal interface

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

<a id="section-6"></a>

## 6 Relational encapsulation through a causal interface

<a id="sec:composition"></a> 

<a id="section-6-1"></a>

### 6.1 A strong quotient is a joint-law statement

 A lower organization becomes an effective relatum only relative to the interactions its exterior may perform. Its effective state must remain sufficient after those interactions, including return of previously stored information. This requirement has established relatives in lumpability, probabilistic refinement, causal abstraction and open-process composition <a id="citation-8"></a>[[15](/consciousness/research/paper-2/references#bib-LarsenSkou1991), [8](/consciousness/research/paper-2/references#bib-DorschEtAl2017), [25](/consciousness/research/paper-2/references#bib-RubensteinEtAl2017), [3](/consciousness/research/paper-2/references#bib-BaezCourser2018)]. We use a finite joint-instrument construction whose physical access assumptions remain explicit.

Let $m:X\to\mathcal M_0$ be the protected mark map. It contains required operating-type, timing, ownership and resource distinctions. Marks need not all be publicly observable. Protecting a remaining blank or a queued message does not grant the controller an otherwise forbidden measurement of it.

<a id="source-theorem-3"></a>

**Theorem 6.1 (Strong marked actual-state quotient).**

<a id="p2-16"></a> Fix a surjection $q_X:X\to Z$ on the nominated finite closed domain. There exists a normalized effective instrument and descended mark map preserving the protected marks and the joint record and successor-class law for every admitted actual state if and only if $m$ descends through $q_X$ and <a id="eq:strong-quotient"></a>


$$

 \sum_{y:q_X(y)=z'}K_{u,o}(x,y)
 =\overline K_{u,o}(q_X(x),z')

$$

Equation (6.1).

 is independent of the representative $x$ in each fibre, for all $u,o,z'$. The effective instrument is unique for that map. Starting with the mark partition, finite partition refinement yields the coarsest strong quotient preserving the marks. 

 <a id="source-proof-12"></a>

**Proof.**

Necessity follows by comparing the pointwise effective successor laws at representatives in the same fibre; the semantic marks must also agree. Sufficiency follows by taking the displayed sums as the definition. Nonnegativity and normalization follow from [Equation 2.1](/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting#eq:instrument), and surjectivity gives uniqueness. For the final claim, repeatedly split blocks according to their current-block label and all vectors of joint probabilities into current blocks for each $u,o$. Each strict split increases the number of blocks. Every stable mark-preserving partition refines every iterate by induction, so the terminating partition is the coarsest one. Full details, including the domain convention, are in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 The pointwise condition is a mathematical requirement for all nominated actual states; it does not assert that the laboratory can prepare each state. It is stronger than matching only the chosen initial distribution. If a reachable subdomain is used, it must be closed under all admitted actions, and the same restriction must be made in every compared construction.

Here “coarsest” means among deterministic strong quotients of this realization with these marks. It does not mean smallest among all stochastic generators or most economical among physical implementations. A stochastic matrix is not itself a construction of a replacement device.

Interface theories also make environmental assumptions and compositional refinement explicit. Doyen and collaborators study the reuse of one component to implement several interfaces, including timing and resource-related aspects <a id="citation-9"></a>[[9](/consciousness/research/paper-2/references#bib-DoyenEtAl2008)]. The present construction has a different target: equality of complete finite stochastic laws through a marked quotient, followed by preservation of a separately declared simulator class. Its treatment of overlapping supports does not turn one physical component into independent copies.



<a id="section-6-2"></a>

### 6.2 Causal substitution, including feedback

 Consider modules $\mathcal M_i$, each equipped with a quotient $q_i$ satisfying [Equation 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:strong-quotient). Their finite-state wiring context retains a state $c$ comprising its controller, clock, delayed messages, shared drivers and owned resources. It accesses only declared ports. Its choice of a called module and action is the same on product-quotient fibres: it cannot inspect discarded coordinates.

Calls are causally ordered, or simultaneous calls are unfolded with their old inputs latched and their declared independent innovations retained. A common simultaneous random event requires its own joint instrument and joint congruence; separately correct marginals do not suffice. The original joint initial distribution is pushed forward jointly, preserving initial correlations rather than replacing them by a product.

<a id="source-theorem-4"></a>

**Theorem 6.2 (Exact substitution in a matching causal context).**

<a id="p2-17"></a> Under those contracts, <a id="eq:global-q"></a>


$$

 Q(x_1,\ldots,x_n,c)=(q_1(x_1),\ldots,q_n(x_n),c)

$$

Equation (6.2).

 is a strong quotient of the composed network. Replacing the modules by their quotient instruments preserves every admitted finite adaptive retained-transcript law, including delayed feedback and finite stopping rules. 

 <a id="source-proof-13"></a>

**Proof.**

For one call of module $i$, sum the global transition over a fibre of $Q$. Other module coordinates remain fixed, the context transition uses the same input and record, and the called module contributes exactly the sum in [Equation 6.1](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:strong-quotient). It is independent of the discarded representative. Common randomized choices of the next call preserve that property by summation. The joint prepared law has the same pushforward, so induction over the causal event sequence preserves each finite record law. A finite adaptive experiment can equivalently be unfolded as a policy tree. The detailed global-row calculation is supplied in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 Shared input-independent randomness can be part of the retained context. An omitted shared event that correlates a local innovation with a discarded variable is not covered. Reuse of a module carries its successor state forward; the theorem does not reinitialize its memory or fuel at the next call. Nor does it solve an instantaneous algebraic feedback equation that has not been given a causal implementation.

<a id="source-corollary-2"></a>

**Corollary 6.3 (Minimization-compatible composition).**

<a id="p2-18"></a> Let ${\operatorname{Eff}_{*}}$ denote the coarsest strong quotient preserving fixed marks, and let $W$ be a matching causal wiring. With corresponding global marks descending through the product quotient, and a common closed or consistently reachable domain, <a id="eq:min-composition"></a>


$$

 {\operatorname{Eff}_{*}}\bigl(W[\mathcal M_1,\ldots,\mathcal M_n]\bigr)
 \cong
 {\operatorname{Eff}_{*}}\bigl(W[{\operatorname{Eff}_{*}}\mathcal M_1,\ldots,{\operatorname{Eff}_{*}}\mathcal M_n]\bigr).

$$

Equation (6.3).

 The isomorphism preserves the marked joint instruments and prepared laws. 

 <a id="source-proof-14"></a>

**Proof.**

The product map of [Theorem 6.2](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#p2-17) is an intermediate strong quotient. The coarsest strong partition of the fine composite is coarser than its fibres, so it induces a strong partition of that intermediate quotient. Conversely, every strong partition of the intermediate quotient pulls back to a strong partition of the fine system. These two constructions show that their final coarsest quotients agree up to class relabeling. The proof with explicit sums is in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). 

□

 Figure [3](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#fig:composition) records the substitution claim. It is a conditional operational meaning of “relation becomes relatum.” The internal state dimension need not repeat at the next level. The active parity construction in [Section E](/consciousness/research/paper-2/appendix-e-auxiliary-relational-state-and-realization-results#app:relational) supplies a proper reduction and a higher recurrent organization, without a fixed-size self-similarity assertion.

<a id="source-figure-3"></a>

![Figure 3](/publications/consciousness/paper-2/figures/figure-3.svg)

  



Figure 3. Exact encapsulation under a fixed causal wiring. Vertical arrows preserve joint records, successor classes and protected marks. The lower network is not allowed additional ports, fresh copies of shared resources or a changed clock. Further minimization gives [Equation 6.3](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#eq:min-composition).

<a id="fig:composition"></a> 



<a id="section-6-3"></a>

### 6.3 Behavioral equality is not actual-class closure

 <a id="source-example-2"></a>

**Example 6.4 (Trace equivalence without strong predictive-class closure).**

<a id="p2-26"></a><a id="ex:trace"></a> Use one action and five states. State $a$ emits 0 and remains at $a$; $b$ emits 1 and remains at $b$. State $c$ emits 0 and enters $a$, or emits 1 and enters $b$, with probabilities $1/2$. State $x$ emits $\#$ and enters $a$ or $b$ with equal probabilities; $y$ emits $\#$ and enters $c$ surely.

States $x,y$ have identical all-finite output laws: $\#$ followed by only zeros or only ones, each with probability $1/2$. The trace classes are $\{a\},\{b\},\{c\},\{x,y\}$. Yet the probability of entering class $\{c\}$ after $\#$ is zero from $x$ and one from $y$. Thus trace equivalence has not supplied a strong actual-class instrument.

A different four-state generator using $a,b,c,z$, with $z$ emitting $\#$ and choosing $a,b$ fairly, reproduces the same boundary traces. It is not the failed actual-state quotient. This is the distinction already present in the predecessor's predictive-fibre discussion, not a new impossibility of smaller stochastic simulation. 

 Exact complete word-law equality can still suffice for behavioral substitution in a port-only causal context. The relevant argument multiplies word probabilities by the context's causal action probabilities; it is given as [Proposition C.1](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#p2-36) in [Appendix C](/consciousness/research/paper-2/appendix-c-strong-quotient-and-composition-proofs#app:composition). It does not reconstruct actual successor classes. Likewise, an observer's posterior belief is a predictive state, not necessarily a realized intrinsic state. Even a finite hidden carrier can generate infinitely many posterior beliefs. Input-output predictive-state formalisms provide a natural setting for that distinction <a id="citation-10"></a>[[4](/consciousness/research/paper-2/references#bib-BarnettCrutchfield2014)].



<a id="section-6-4"></a>

### 6.4 Two obstructions to weaker substitution claims

 <a id="source-proposition-8"></a>

**Proposition 6.5 (Offline reconstruction versus timely substitution).**

<a id="p2-21"></a> Let an early process emit $(\theta,0)$ at two successive deadlines, and a delayed process emit $(0,\theta)$, with unknown $\theta\in\{0,1\}$. Their completed experiments have zero deficiency in both directions. A causal adapter from the delayed process to the early one, with no source-correlated side information, has optimal worst-case timed-trace error $1/2$. 

 <a id="source-proof-15"></a>

**Proof.**

After completion, exchanging the two record positions reconstructs either experiment exactly. At the first deadline the delayed process has provided no information about $\theta$. If the adapter's first guess has probability $p$ of being 1, its two source-conditional errors are $p$ and $1-p$; their maximum is at least $1/2$. A fair guess followed by the correct constant final output attains $1/2$. The reverse temporal direction can store the early bit until the later deadline. 

□

 This does not contradict data processing. The completed-record decoder is not a causal adapter on prefixes. Timing-aware compositional frameworks have made such access distinctions explicit in other settings <a id="citation-11"></a>[[19](/consciousness/research/paper-2/references#bib-PortmannEtAl2017)]; no quantum or relativistic extension of the present finite theorem is inferred from that connection.

<a id="source-proposition-9"></a>

**Proposition 6.6 (Approximate fixed-input agreement need not survive feedback).**

<a id="p2-22"></a> A process first emits $j$, uniform on $\{0,\ldots,n-1\}$. Its second action is $u$. Process $M$ emits ${\mathbf 1}\{u=j\}$, while $N$ emits zero. Each fixed second-action experiment has complete-law TV distance $1/n$, but the adaptive policy $u=j$ has distance one. 

 <a id="source-proof-16"></a>

**Proof.**

For fixed $u$, exactly the challenge $j=u$, of probability $1/n$, produces different final outputs. For $u=j$, the final outputs differ on every branch. The uniform joint-row error needed in the next section is one on the offending rows, so that stronger certificate detects the failure. 

□

 The proposition does not invalidate exact all-word equality. It invalidates transferring an approximate open-loop bound to adaptive use with the same constant and no further premise.
