# Section 2: The source tetralemma

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-2"></a>

## 2 The source tetralemma

<a id="tet:section"></a> 

<a id="section-2-1"></a>

### 2.1 Setting and premises

<a id="tet:setting"></a> A Bell experiment realized in a source model is specified as follows. Let $(\Lambda,\mathcal A,\nu)$ be a standard Borel probability space of complete initial source states of everything relevant to the run except the devices that generate the settings. Alice's and Bob's settings $x,y\in\{0,1\}$ are drawn with probabilities $q(x,y)>0$. A *Tier-1 readout* is a measurable map $\tau:\Lambda\to\mathcal T$ into a standard Borel space. Its value $T=\tau(\lambda)$ is the nominated initial classical information. The Tier-1 readout is *source-complete* if $\lambda=G(T)$ almost surely for some measurable $G$.



*Status: Stated premises; unchanged from version 3.*

 The following premises are not derived here. 

**(SO) Single outcomes.** For each setting pair, Alice's and Bob's outcomes are $\pm1$-valued random variables $A,B$ on the run. Each run has exactly one outcome per party, jointly distributed with $\lambda$.

**(D) Determinism.** There are measurable $F_A,F_B:\Lambda\times\{0,1\}^2\to\{\pm1\}$ with $A=F_A(\lambda,x,y)$ and $B=F_B(\lambda,x,y)$ almost surely. Dependence on the distant setting is allowed.

**(MI) Measurement independence.** The settings $(x,y)$ are independent of $\lambda$, and hence of $T$.

**(NS) Tier-1 no-signalling.** For almost every $t$, the conditional box $P_t(a,b\mid x,y)={\mathbb P}(A=a,B=b\mid x,y,T=t)$ is no-signalling: $\sum_bP_t(a,b\mid x,y)$ does not depend on $y$, and $\sum_aP_t(a,b\mid x,y)$ does not depend on $x$.

 Realism here means existence of the stipulated source model, not an extra convex-linearity axiom. Write $E_{xy}={\mathbb E}[AB\mid x,y]$ and $S=E_{00}+E_{01}+E_{10}-E_{11}$. Under (D), define the finite response variable 

$$

 Z=\bigl(F_A(\lambda,x,y),F_B(\lambda,x,y)\bigr)_{x,y\in\{0,1\}}
 \in\{\pm1\}^8.

$$

 It settles every outcome at fixed settings, but need not contain every source distinction.

<a id="source-remark-1"></a>

**Remark 2.1 (The access quantifier).**

<a id="tet:access"></a> 

*Status: Scope.*

 (NS) is conditional no-signalling for the particular nominated $T$, not merely no-signalling of the unconditioned laboratory marginals. The latter does not imply the former. Calling $T$ all information any observer could ever acquire requires an additional physical access claim, absent here. A conclusion for every admissible $T$ means a separate implication for each $T$ satisfying the premises, not proof that every conceivable observer or global source variable is admissible. An optional hypothesis (QT) requires every $P_t$ to be quantum-realizable with a tensor-product structure; it does not replace classical $T$ by unrestricted quantum side information. 



<a id="source-lemma-1"></a>

**Lemma 2.2 (Outcome determinism already supplies single outcomes).**

<a id="tet:SOredundant"></a> 

*Status: Proved.*

 Within the stated probability model, (D) supplies the single-valued outcomes required by (SO). Consequently there is no model of the other three displayed premises that violates only (SO) while retaining (D) in its stated meaning. 

 <a id="source-proof-1"></a>

**Proof.**

For every setting pair, the two measurable functions in (D) take exactly one value in $\{\pm1\}$ at each source state; their pushforward gives the joint outcome law with $\lambda$. Almost-sure qualifications can be imposed simultaneously for the four setting pairs by taking a finite union of null sets. A branching final vector is not either of these scalar outcome functions. Replacing (D) by deterministic evolution of that vector would change the premise. 

□





<a id="section-2-2"></a>

### 2.2 Guessing and hidden information

 <a id="source-lemma-2"></a>

**Lemma 2.3 (No-signalling guessing bound).**

<a id="tet:guess"></a> 

*Status: Proved.*

 For a no-signalling $\pm1$ box with CHSH value $S$, every Alice or Bob marginal has guessing probability at most $3/2-S/4$. For $2\le S\le4$ this is a sharp bound. 

 <a id="source-proof-2"></a>

**Proof.**

Put $\alpha_x={\mathbb E}[A\mid x]$ and $\beta_y={\mathbb E}[B\mid y]$. Positivity gives $2P(A\ne B\mid xy)\ge|\alpha_x-\beta_y|$ and $2P(A=B\mid xy)\ge|\alpha_x+\beta_y|$. Let $L=P(A\ne B\mid00)+P(A\ne B\mid01)+P(A\ne B\mid10)+P(A=B\mid11)$, so $S=4-2L$. Writing $u=\alpha_0-\beta_0$, $v=\alpha_0-\beta_1$, $w=\alpha_1-\beta_0$, $z=\alpha_1+\beta_1$ gives $2L\ge|u|+|v|+|w|+|z|$. The combinations $u+v-w+z=2\alpha_0$, $-u+v+w+z=2\alpha_1$, $-u+v-w+z=2\beta_0$ and $u-v-w+z=2\beta_1$ bound all four biases by $L$. Thus the marginal guessing probability is at most $(1+L)/2=3/2-S/4$. Mixing the all-plus local box with a PR box attains this value. This is also the bound in <a id="citation-6"></a>[[22](/sealed-or-leaky/references#bib-Pironio10), Eq. (14)]. 

□



<a id="source-theorem-1"></a>

**Theorem 2.4 (Hidden-information theorem).**

<a id="tet:hidden"></a> 

*Status: Proved conditional on (SO), (D), (MI), (NS).*

 Suppose $S>2$. For each $x$ and $y$, <a id="tet:pg"></a>
<a id="tet:min"></a>
<a id="tet:shannonold"></a>


$$
\begin{aligned}p_{\rm guess}(A\mid X=x,T)&\le\tfrac32-\tfrac S4<1,\\
 H_{\min}(Z\mid T)&\ge{f_{\mathrm{NS}}}(S)>0,\\
 H(Z\mid T)&\ge{f_{\mathrm{NS}}}(S)>0.
\end{aligned}
$$

Equation (1, 2, 3).

 The same marginal bound holds for Bob. The readout is not source-complete: on a set of readout values of positive probability, its conditional source law assigns positive probability to different response values. Under (QT), for $2<S\le2\sqrt2$, replace the guessing bound by 

$$

 G_Q(S)=\tfrac12\bigl(1+\sqrt{2-S^2/4}\bigr)

$$

 and the entropy bounds by ${f_{\mathrm{Q}}}(S)=1-\log_2(1+\sqrt{2-S^2/4})$. 

 <a id="source-proof-3"></a>

**Proof.**

(MI) makes the law of $T$ independent of the settings, so $P=\int P_t\,d{\mathbb P}(t)$ and $S=\int S_t\,d{\mathbb P}(t)$. By (NS) the Alice marginal given $x,t$ is independent of $y$. Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) and averaging prove [(1)](/sealed-or-leaky/the-source-tetralemma#tet:pg). For fixed $x,y$, the random variable $F_A(\lambda,x,y)$ is a coordinate of $Z$. Hence, pointwise in $t$, the largest atom of $Z\mid t$ is no larger than the largest atom of that coordinate. (MI) identifies this coordinate's conditional law with the observed law at $x,y,t$. Averaging gives [(2)](/sealed-or-leaky/the-source-tetralemma#tet:min); Shannon entropy dominates average conditional min-entropy, by its pointwise version and Jensen's inequality.

If $\lambda=G(T)$ almost surely, then $Z$ is a function of $T$ and its conditional entropy is zero, a contradiction. Regular conditional source laws are concentrated on $\tau^{-1}(t)$ almost everywhere. A nondegenerate finite conditional response distribution therefore supplies different responses in those fibres, as in Theorem [6.1](/sealed-or-leaky/deterministic-completions-require-unresolved-information#op:information).

For (QT), the single-box bound $G_Q$ is imported from <a id="citation-7"></a>[[22](/sealed-or-leaky/references#bib-Pironio10), Eq. (6)]. Extend it by $1$ for $s\le2$ on the quantum CHSH domain. The extension is concave: at $s=2$ its right derivative is $-1/4$, no larger than the left derivative $0$. Jensen gives ${\mathbb E} G_Q(S_t)\le G_Q(S)$, and the preceding coordinate argument applies unchanged. 

□



<a id="source-lemma-3"></a>

**Lemma 2.5 (Sharp Shannon refinement and simultaneous sharpness).**

<a id="tet:sharpShannon"></a> 

*Status: Proved conditional on (SO), (D), (MI), (NS).*

 For $2\le S\le4$, <a id="tet:linearShannon"></a>


$$

 H(Z\mid T)\ge g_{\rm NS}(S):=(S-2)/2\ge{f_{\mathrm{NS}}}(S).

$$

Equation (4).

 Both the first bound and $H_{\min}(Z\mid T)\ge{f_{\mathrm{NS}}}(S)$ are simultaneously sharp over this no-signalling class with classical $T$. 

 <a id="source-proof-4"></a>

**Proof.**

Concavity of binary entropy on each half of $[0,1]$ gives $h_2(p)\ge2\min(p,1-p)$. Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) implies, at each $t$, 

$$

 H(A\mid x,T=t)\ge (S_t-2)_+/2.

$$

 Since $u\mapsto(u-2)_+$ is convex, averaging and the deterministic-coordinate inequality give $H(Z\mid T)\ge(S-2)/2$. The comparison with ${f_{\mathrm{NS}}}$ follows because a convex function lies below its endpoint chord: ${f_{\mathrm{NS}}}(2)=0$, ${f_{\mathrm{NS}}}(4)=1$.

For sharpness let $r=(S-2)/2$, let $C_0$ be a Bernoulli flag of mean $r$, and let $R_0$ be zero when $C_0=0$ and a fair bit when $C_0=1$. Take $\lambda=(C_0,R_0)$, $T=C_0$, independent settings, and all-plus responses in the first case. In the second case use $A=(-1)^{R_0}$ and $B=(-1)^{R_0+xy}$. The conditional boxes are local deterministic and PR, respectively, hence both no-signalling. Their average CHSH value is $2+2r$. The response tables in the PR branch are distinct and equiprobable, so $H(Z\mid T)=r$ and $p_{\rm guess}(Z\mid T)=1-r/2=3/2-S/4$. This is an extremal mathematical construction, not a physical PR-box claim or quantum-class sharpness assertion. 

□



<a id="source-remark-2"></a>

**Remark 2.6 (Reading the entropies).**

<a id="tet:reading"></a> 

*Status: Scope.*

 The bounds concern source information not determined by the nominated initial classical readout, given the displayed access premise. They are not observer-independent statements of permanent inaccessibility. They refer to the finite response $Z$, not differential entropy of a continuous source state. Under (QT), $H(Z\mid T)\ge\max\{g_{\rm NS}(S),{f_{\mathrm{Q}}}(S)\}$ follows, but the two available bounds do not establish an optimal quantum Shannon curve. A postselected finite run needs the separate analysis of Section [3](/sealed-or-leaky/experimental-anchoring#exp:section). 





<a id="section-2-3"></a>

### 2.3 The four explicit escape models and their exact logical status

 <a id="source-theorem-2"></a>

**Theorem 2.7 (Source tetralemma: exclusion and corrected necessity).**

<a id="tet:tetralemma"></a> 

*Status: Proved.*

 A source-complete model with $S>2$ cannot jointly satisfy (SO), (D), (MI) and (NS). Within the single-outcome model class, each of (D), (MI) and (NS) is separately necessary for this exclusion: models (C2)–(C4) below satisfy the other premises, have identity readout, and reproduce 

$$

 P_Q(a,b\mid x,y)=\tfrac14(1+ab\,c_{xy}),\qquad
 c_{00}=c_{01}=c_{10}=-c_{11}=1/\sqrt2.

$$

 Model (C1) is a source-complete branching realization of the same branch-weight table, outside the single-outcome formalism. It is not a counterexample to Lemma [2.2](/sealed-or-leaky/the-source-tetralemma#tet:SOredundant). Thus four descriptions of escape remain, but the claim of four logically independent premises is false. 

 <a id="source-proof-5"></a>

**Proof.**

The exclusion is Theorem [2.4](/sealed-or-leaky/the-source-tetralemma#tet:hidden). The following four models all take the readout to be the complete specified initial state.

**(C1) Branching: outside (SO) and the stated (D).** Let the source be a unit ray of the two-qubit-plus-apparatus Hilbert space, prepared in $\Phi^+\otimes{\lvert\mathrm{ready}\rangle}$. Independent settings select unitary measurement interactions with final vector 

$$

 \sum_{a,b}(P_a^x\otimes P_b^y)\Phi^+\otimes{\lverta,b\rangle}.

$$

 Use $A_0^{\rm op}=\sigma_z$, $A_1^{\rm op}=\sigma_x$, $B_0^{\rm op}=(\sigma_z+\sigma_x)/\sqrt2$, $B_1^{\rm op}=(\sigma_z-\sigma_x)/\sqrt2$. Orthogonal pointer branches have squared norms $P_Q(a,b\mid x,y)$, a no-signalling table. The complete vector is a deterministic function of source and settings, but no single actual pair $A,B$ has been selected. This is complete-state determinism, *not* (D). The branch-weight reading is the relative-state alternative <a id="citation-8"></a>[[30](/sealed-or-leaky/references#bib-Everett57), [31](/sealed-or-leaky/references#bib-Deutsch99), [32](/sealed-or-leaky/references#bib-Wallace12)]; derivation of subjective probabilities from branch weights is not a premise or result here.

**(C2) Fundamental chance: violates only (D).** Take $\Lambda$ to be pure rays with $\nu=\delta_{\Phi^+}$, $\tau=\mathrm{id}$, and independent settings. Sample one pair from $P_Q$ using fundamental chance not encoded in the initial source state. Then (SO), (MI) and (NS) hold, while (D) fails. Completeness here is completeness of the initial physical state, not a hidden initial encoding of subsequent chance. Pure-ray chance ontologies supply the relevant contrast <a id="citation-9"></a>[[2](/sealed-or-leaky/references#bib-BB95), [33](/sealed-or-leaky/references#bib-GRW86)].

**(C3) Measurement dependence: violates only (MI).** Let $\lambda=(a_0,a_1,b_0,b_1)\in\{\pm1\}^4$, $A=a_x$, $B=b_y$, and take any positive setting law $q(x,y)$ with 

$$

 \nu(\lambda\mid x,y)=\tfrac14 P_Q(a_x,b_y\mid x,y).

$$

 The two unused entries are uniform. Summing over them reproduces $P_Q$ and normalizes each conditional source law. All its entries are positive, so each setting pair remains in the support at every $\lambda$. Conditional on $T=\lambda$, the responses are local deterministic and satisfy (NS). They satisfy (SO) and (D), but the source law depends on the settings. This is a measurement-dependent construction of the Brans type <a id="citation-10"></a>[[35](/sealed-or-leaky/references#bib-Brans88)].

**(C4) Accessible nonlocality: violates only (NS).** Take $\lambda=(u,v)$ uniform on $[0,1]^2$, independently of the settings, with $T=\lambda$, and define 

$$

 A=\mathrm{sgn}(1/2-u),\qquad
 B=A\,\mathrm{sgn}((1+c_{xy})/2-v),

$$

 assigning $\mathrm{sgn}(0)=+1$ on the irrelevant threshold sets. Its averaged joint probabilities are $P_Q$. It satisfies (SO), (D) and (MI). For $y=1$, on the positive-measure interval between $(1-1/\sqrt2)/2$ and $(1+1/\sqrt2)/2$, Bob's definite output changes with $x$. Its box conditional on the readable $\lambda$ therefore violates (NS), although its unconditioned marginals do not signal. No claim that such complete access is physically available is required for the countermodel. 

□



<a id="source-proposition-1"></a>

**Proposition 2.8 (The three-branch form fails).**

<a id="tet:trilemmafails"></a> 

*Status: Proved.*

 The assertion that every source-complete realization of quantum Bell statistics is branching, source-indeterministic, or an operational surrogate violating convex-linear realism is false. Neither convex-linearity nor its failure is needed in the exclusion theorem. 

 <a id="source-proof-6"></a>

**Proof.**

(C3) and (C4) are single-outcome, source-deterministic and source-complete. Neither is forced into the proposed surrogate branch. With a single preparation, convex-linearity imposes no nontrivial requirement; random mixtures of admitted preparation laws can moreover be represented by their mixtures. A density-matrix-only stochastic surrogate is already in the chance branch for the nondegenerate Tsirelson marginals. None of the arguments of Theorem [2.4](/sealed-or-leaky/the-source-tetralemma#tet:hidden) uses convex-linearity. These observations refute the proposed universal three-way claim; they do not classify every possible surrogate. 

□



<a id="source-proposition-2"></a>

**Proposition 2.9 (Where convex-linearity bites: the chance branch).**

<a id="tet:chance"></a> 

*Status: Proved conditional on a convex-linear ontological model reproducing the trine table and tomographically complete qubit statistics.*

 A pure-state-complete chance model is possible, as in (C2). Nevertheless its preparation-law readout cannot in general be identified with only the density matrix if convex-linearity is imposed. The fibre over $I/2$ contains ontic preparation laws at pairwise TV distance at least $1/4$, and at summed distance at least $1/2$ from the trine mixture. This is a statement about preparation laws, not a proof that each pure ray is an incomplete individual state. 

 <a id="source-proof-7"></a>

**Proof.**

Apply Corollary [8.4](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:noninjectivity) and Theorem [8.3](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:sum). The Beltrametti–Bugajski model distinguishes proper-mixture laws while retaining rays as individual states <a id="citation-11"></a>[[2](/sealed-or-leaky/references#bib-BB95)]. 

□
