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

# Overview and publication identity

JEREMY RODGERS

   Sealed or Leaky

   The Source Tetralemma,  
 Bell-Certified Hidden Information,  
 and Finite-Resource Witnesses

   Conditional mathematical results  
 and published-data translation

  Independent Researcher

 Website: [everythingequation.com](https://everythingequation.com)

 DOI: [10.5281/zenodo.23077474](https://doi.org/10.5281/zenodo.23077474)

 Version 3.1 — preprint edition

 Mathematical revision: 21 September 2026

 Publication preparation: 1 October 2026   



**Abstract.**



*Status: Conditional mathematical results; published-data translation.*

 For a specified classical initial readout $T$, single outcomes, source-level outcome determinism, setting independence and no-signalling conditional on $T$ imply that a CHSH violation excludes source completeness. The finite source response variable obeys the sharp bounds $H_{\min}(Z\mid T)\ge-\log_2(3/2-S/4)$ and $H(Z\mid T)\ge(S-2)/2$ for $2<S\le4$. The stated determinism premise already supplies single outcomes, so branching is outside that formalism, not a countermodel violating only single outcomes. Within the single-outcome class, determinism, measurement independence and conditional no-signalling are separately indispensable. A checkable translation of Bierhorst et al.'s Data Set 5 retains their classical, pre-existing, isolated-side-information adversary class and the passing-probability hypothesis. It yields more than $1024-1.1\times10^{-9}$ conditional Shannon bits from the extracted string, but only $39.86$ unsmoothed min-entropy bits from its uniformity error alone. Their published entropy-production parameters give the stronger lower bound $1304.97$ bits for conditional Shannon entropy and explicitly defined deletion-smoothed min-entropy of the run response; the corresponding unsmoothed bound is $39.93$ bits. These are ensemble statements conditional on passing, not min-entropy claims about an unrestricted complete source. The retained preparation, sealing, simulation, conservation and finite-resource results remain separately assumption-tagged. No theorem establishes that every description of observers is a readout, and unrestricted operational surrogates remain an empirical identification ceiling.

---

# Section 1: Question, main result, and scope

<a id="section-1"></a>

## 1 Question, main result, and scope

<a id="int:section"></a> 

*Status: Framework and scope.*

 Shadow Theory distinguishes a source from a nominated readout, or Tier 1. The question here is not whether that interpretation can be assumed, but which independently stated premises force a specified readout to omit source distinctions. The source–readout papers distinguish an exact projected description from reconstruction of all physical source distinctions after declared redundancy has been removed <a id="citation-1"></a>[[14](/sealed-or-leaky/references#bib-R1), [15](/sealed-or-leaky/references#bib-R2), [16](/sealed-or-leaky/references#bib-R3), [17](/sealed-or-leaky/references#bib-R4), [18](/sealed-or-leaky/references#bib-R5), [10](/sealed-or-leaky/references#bib-R6)]. The measurement constitutions supply separate model-relative examples <a id="citation-2"></a>[[11](/sealed-or-leaky/references#bib-RM), [20](/sealed-or-leaky/references#bib-Pilot), [21](/sealed-or-leaky/references#bib-Massive)]; none of their dynamics is used to prove the Bell results.

Theorem [5.1](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:surrogate) gives the negative boundary: if an alternative class contains the complete-law operational surrogate of each source model, internal experiments cannot discriminate those models from their surrogates. Restricted premises can give positive results without breaching that boundary.



<a id="paragraph-1"></a>

#### Main implication.

 

*Status: Proved conditional on the premises of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting).*

 For a classical initial readout $T=\tau(\lambda)$, retain precisely (SO), (D), (MI) and (NS) below. A CHSH value $S>2$ implies that $\lambda$ is not a measurable function of $T$. For its finite response table $Z$, 

$$

 H_{\min}(Z\mid T)\ge{f_{\mathrm{NS}}}(S),\qquad
 H(Z\mid T)\ge g_{\rm NS}(S):=(S-2)/2,
 \qquad {f_{\mathrm{NS}}}(S):=-\log_2(3/2-S/4).

$$

 Both bounds are sharp in the no-signalling model class. The quantum guessing bound supplies the additional bound $H(Z\mid T)\ge{f_{\mathrm{Q}}}(S)$ under the separately stated quantum-realizability hypothesis. The maximum of these Shannon bounds may be used; no optimal quantum Shannon tradeoff is claimed.



<a id="paragraph-2"></a>

#### What the tetralemma does not say.

 

*Status: Logical correction.*

 The premise (D) as written already requires definite $\pm1$ outcomes. Therefore the four premises are not logically independent. Theorem [2.7](/sealed-or-leaky/the-source-tetralemma#tet:tetralemma) proves exclusion and the separate necessity of (D), (MI) and (NS) within the single-outcome class. The branching model is retained explicitly as an escape from that class; complete-state unitary determinism is not substituted for (D). The four routes are neither mutually exclusive nor an exhaustive classification of physical theories.



<a id="paragraph-3"></a>

#### Published-data anchoring.

 

*Status: Conditional translation; not a reanalysis of trial records.*

 Section [3](/sealed-or-leaky/experimental-anchoring#exp:section) separates illustrative evaluations at the published CHSH central values <a id="citation-3"></a>[[23](/sealed-or-leaky/references#bib-Hensen15), [26](/sealed-or-leaky/references#bib-Rosenfeld17), [27](/sealed-or-leaky/references#bib-Storz23)] from a genuine finite-sample translation of the entropy-production and soundness theorems in <a id="citation-4"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]. The latter is restricted to classical pre-existing side information obeying that paper's sequential conditions. Passing once does not establish the required lower bound on the probability of passing. In particular, the $1024$ extracted bits do not constitute $1024$ bits of unsmoothed min-entropy of $\lambda$. The rounding-controlled source-response bound of Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) is stronger than the extracted-string Shannon bound and uses only the published aggregate certificate.



<a id="paragraph-4"></a>

#### Attribution and contribution.

 

*Status: Literature context and results proved here.*

 Deterministic hidden-variable signalling and Bell-certified unpredictability have substantial antecedents <a id="citation-5"></a>[[13](/sealed-or-leaky/references#bib-V02), [5](/sealed-or-leaky/references#bib-CR11), [22](/sealed-or-leaky/references#bib-Pironio10)]. The contributions here are the precise source–readout formulation, the corrected necessity statement, the sharp Shannon refinement, and a postselection-aware finite-source translation with explicit adversary restrictions. No priority is claimed for the elementary probability inequalities or for the imported randomness theorems. The earlier trine, POVM, accessible-conservation, pilot and reweighting results are retained in their declared domains, not offered as additional empirical evidence.



<a id="section-1-1"></a>

### 1.1 Conventions and levels of conclusion

 For probability laws, ${\mathrm{TV}}(P,Q)=\sup_A|P(A)-Q(A)|\in[0,1]$; the variation norm of their signed difference is $2{\mathrm{TV}}(P,Q)$. Trace distance is $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$. All conditional laws requiring disintegration are on standard Borel spaces, and identities involving a conditioning value hold almost everywhere. Entropies are in bits; $h_2$ denotes binary Shannon entropy. For finite $Z$ and classical $E$, 

$$

 p_{\rm guess}(Z\mid E)={\mathbb E}\max_z{\mathbb P}(Z=z\mid E),\qquad
 H_{\min}(Z\mid E)=-\log_2 p_{\rm guess}(Z\mid E).

$$

 This is average conditional min-entropy, not the minimum over side-information values. The distinct deletion-smoothing convention used below is defined in Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer). A signed incidence matrix has column $e_q-e_r$ for an edge $r\to q$. Symbols are local to their sections: CHSH $S$ is a scalar, whereas the source set $S$ in Section [5](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:section) is a set.

 <a id="source-tabularx-1"></a>

| Level | Conclusion and boundary |
| --- | --- |
| Mathematical implication | A proved implication of specified definitions and premises. |
| Constitutive prediction | A consequence of a particular preparation, dynamics and access catalogue. |
| Operational incompleteness | An admitted record distinction omitted by a specified readout. |
| Published-data translation | An imported finite-sample certificate with its original statistical and adversary assumptions; not independent experimental verification. |
| Fundamental ontology | Not uniquely identified in a class closed under complete-law operational surrogates. |

  Every theorem, proposition, lemma and corollary has a status tag. A conditional theorem is proved as an implication; its physical premises are not thereby established. Explicit limitations are tagged **[Not established]** or **[Scope]**. No unproved statement is promoted by being included in an interpretation.

---

# Section 2: The source tetralemma

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

---

# Section 3: Experimental anchoring

<a id="section-3"></a>

## 3 Experimental anchoring

<a id="exp:section"></a>



<a id="section-3-1"></a>

### 3.1 A finite-sample likelihood statement, not a central-value entropy claim

 

*Status: Statistical model.*

 Let $C_i=(A_i,B_i)$ and $W_i=(X_i,Y_i)$, with history $\mathcal H_i=(C_1,W_1,\ldots,C_{i-1},W_{i-1})$. For a fixed classical initial $T$, assume 

$$

 {\mathbb P}(W_i=xy\mid T,\mathcal H_i)=q_{xy}>0

$$

 and that the box of $C_i$ conditional on $T,\mathcal H_i$ is no-signalling. These are sequential premises, not consequences of the one-round assumptions. Their chain factorization is <a id="exp:causalfactor"></a>


$$

 P(c^n,w^n\mid t)=\prod_{i=1}^n q_{w_i}
 P_i(c_i\mid w_i,\mathcal H_i,t).

$$

Equation (5).

 Summation over the outcomes gives $P(w^n\mid t)=\prod_iq_{w_i}$. Thus conditioning on the whole setting word does not introduce a future-input factor into the outcome likelihood. This causal factorization is indispensable for the following likelihood calculation.

Put $q=\min_{xy}q_{xy}$, $\sigma_{xy}=(-1)^{xy}$, 

$$

 D_i=\frac{\sigma_{X_iY_i}A_iB_i}{q_{X_iY_i}},\qquad
 \widehat S=\frac1n\sum_iD_i,\qquad
 S_i={\mathbb E}[D_i\mid T,\mathcal H_i].

$$

 This defines the estimator; it is not automatically the same as a published setting-frequency-normalized central value.

<a id="source-lemma-4"></a>

**Lemma 3.1 (Conditional-range CHSH concentration).**

<a id="exp:range"></a> 

*Status: Proved conditional on the sequential setting law above.*

 For $0<\alpha<1$, define 

$$

 r_n=\frac1q\sqrt{\frac{2\ln(1/\alpha)}n}.

$$

 For almost every $t$, ${\mathbb P}_t\{n^{-1}\sum_i S_i<\widehat S-r_n\}\le\alpha$. The constant uses the conditional range width $2/q$, not the larger bound $2(1/q+4)$ on centered increments. 

 <a id="source-proof-8"></a>

**Proof.**

Conditionally on the history and $t$, $D_i\in[-1/q,1/q]$. The log moment-generating function of $D_i-S_i$ has value and first derivative zero at the origin; its second derivative is the variance under an exponentially tilted law, at most $(2/q)^2/4=1/q^2$. Integrating twice gives the bounded-range inequality 

$$

 {\mathbb E}_t[e^{\theta(D_i-S_i)}\mid\mathcal H_i]
 \le e^{\theta^2/(2q^2)}.

$$

 Iteration and Markov's inequality give ${\mathbb P}_t(\sum_i(D_i-S_i)\ge nr)\le
\inf_{\theta>0}e^{-\theta nr+n\theta^2/(2q^2)}
=e^{-nq^2r^2/2}$. Substitution proves the assertion. Independence of device outputs between rounds was not assumed. 

□



<a id="source-proposition-3"></a>

**Proposition 3.2 (Finite-sample outcome-likelihood certificate).**

<a id="exp:finite"></a> 

*Status: Proved conditional on [(5)](/sealed-or-leaky/experimental-anchoring#exp:causalfactor) and conditional no-signalling; quantum alternative conditional on per-history (QT).*

 Define $F_{\rm NS}(s)=0$ for $s\le2$, $F_{\rm NS}(s)={f_{\mathrm{NS}}}(s)$ for $2<s<4$, and $F_{\rm NS}(s)=1$ for $s\ge4$. Then for almost every $t$, <a id="exp:finitecorrect"></a>


$$

 {\mathbb P}_t\!\left\{-\log_2 P_t(C^n\mid W^n)
       <nF_{\rm NS}(\widehat S-r_n)\right\}\le\alpha.

$$

Equation (6).

 Under per-history (QT), replace $F_{\rm NS}$ by $F_Q$, obtained by the analogous zero extension below $2$ and constant extension above $2\sqrt2$ of ${f_{\mathrm{Q}}}$. The same $r_n$ suffices. For a threshold $s_*$ fixed before the analyzed data, put $\delta_*=2^{-nF_{\rm NS}(s_*-r_n)}$ and $J_* ={\mathbf1}_{\{\widehat S\ge s_*\}}$. Then <a id="exp:finitetail"></a>


$$

 {\mathbb P}_t\{P_t(C^n\mid W^n)>\delta_*,\ J_*=1\}\le\alpha.

$$

Equation (7).

 Neither display alone is a bound on unsmoothed min-entropy of a postselected distribution. 

 <a id="source-proof-9"></a>

**Proof.**

Each joint outcome probability is no larger than an Alice marginal, so Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) bounds it by $2^{-F_{\rm NS}(S_i)}$. By [(5)](/sealed-or-leaky/experimental-anchoring#exp:causalfactor), 

$$

 -\log_2P_t(c^n\mid w^n)
 \ge\sum_iF_{\rm NS}(S_i)
 \ge nF_{\rm NS}\!\left(n^{-1}\sum_i S_i\right).

$$

 The function is convex and nondecreasing on the physical domain $[-4,4]$; its extension above that domain is not used in Jensen's inequality. Outside an event of probability $\alpha$, Lemma [3.1](/sealed-or-leaky/experimental-anchoring#exp:range) makes the last expression at least the right side of [(6)](/sealed-or-leaky/experimental-anchoring#exp:finitecorrect). If the empirical lower endpoint exceeds $4$, that event is necessarily in the exceptional set. The quantum proof uses the imported one-round bound of <a id="citation-12"></a>[[22](/sealed-or-leaky/references#bib-Pironio10)], convexity of $F_Q$ on $[-2\sqrt2,2\sqrt2]$, and the same concentration inequality. The fixed-threshold consequence follows by monotonicity. Postselection changes both the conditional law and the exceptional probability; Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer) supplies that conversion explicitly. 

□





<a id="section-3-2"></a>

### 3.2 Published CHSH values: illustrations only

 

*Status: Imported central values; derived illustrative evaluations.*

 The reported values are $2.42\pm0.20$ in Hensen et al. <a id="citation-13"></a>[[23](/sealed-or-leaky/references#bib-Hensen15)], $2.221\pm0.033$ in Rosenfeld et al. <a id="citation-14"></a>[[26](/sealed-or-leaky/references#bib-Rosenfeld17)], and $2.0747\pm0.0033$ in Storz et al. <a id="citation-15"></a>[[27](/sealed-or-leaky/references#bib-Storz23)]. The corresponding reported trial counts and local-realist significance bounds are $245$, $P\le0.039$; $10^4$ in the cited run, $P<2.57\times10^{-9}$; and more than $10^6$, $P<10^{-108}$, respectively. These significance bounds test the authors' stated nulls; they are not source-entropy estimates.

 <a id="source-tabular-1"></a>

| Experiment | Central $S$ | ${f_{\mathrm{NS}}}(S)$ | ${f_{\mathrm{Q}}}(S)$ | $g_{\rm NS}(S)$ |
| --- | --- | --- | --- | --- |
| Hensen et al. | 2.42 | 0.1600 | 0.2075 | 0.2100 |
| Rosenfeld et al. | 2.221 | 0.0820 | 0.0926 | 0.1105 |
| Storz et al. | 2.0747 | 0.0272 | 0.0283 | 0.03735 |

 

Table 1. Evaluations of ideal-box bounds, in bits per round, not finite-sample certifications. ${f_{\mathrm{NS}}}$ and ${f_{\mathrm{Q}}}$ bound the appropriate conditional min-entropy and also Shannon entropy; $g_{\rm NS}$ is the sharper no-signalling Shannon bound.

<a id="exp:table"></a>  The ${f_{\mathrm{NS}}}$ evaluations at one reported error bar below and above the central values are, respectively, $[0.0816,0.2430]$, $[0.0695,0.0946]$, and $[0.0260,0.0284]$; for ${f_{\mathrm{Q}}}$ they are $[0.0921,0.3838]$, $[0.0769,0.1091]$, and $[0.0270,0.0296]$. These transformed error bars are not confidence-certified entropy intervals. An ideal identical-round interpretation is needed to read the central entries as constant per-round rates.



*Status: Not established from the supplied summaries.*

 No finite-sample source-entropy number for these three data sets is certified here. Applying Proposition [3.2](/sealed-or-leaky/experimental-anchoring#exp:finite) needs the exact score or equivalent sufficient statistics, the actual setting law, applicable sequential assumptions and a specified confidence rule; a central estimate and its standard error do not supply those items. Trial lists have not been reconstructed. The photonic analyses in <a id="citation-16"></a>[[24](/sealed-or-leaky/references#bib-Giustina15), [25](/sealed-or-leaky/references#bib-Shalm15)] use different Bell statistics; the CHSH expressions are not substituted for those statistics.



<a id="section-3-3"></a>

### 3.3 Bierhorst-admissible information and the actual protocol word

 <a id="source-definition-1"></a>

**Definition 3.3 (Bierhorst-admissible Tier-1 information).**

<a id="exp:admissible"></a> 

*Status: Imported model class; notation translated from [[28](/sealed-or-leaky/references#bib-Bierhorst18), Eqs. (2)–(3)].*

 A classical random variable $T$, fixed before the protocol, with no access to data produced during it, is *B-admissible* when, for each trial and almost every supported history and $t$, <a id="exp:Bsettings"></a>
<a id="exp:BNSa"></a>
<a id="exp:BNSb"></a>


$$
\begin{aligned}{\mathbb P}(X_i=x,Y_i=y\mid T=t,\mathcal H_i)&=\tfrac14,\\
 {\mathbb P}(A_i=a\mid X_iY_i,T=t,\mathcal H_i)
 &={\mathbb P}(A_i=a\mid X_i,T=t,\mathcal H_i),\\
 {\mathbb P}(B_i=b\mid X_iY_i,T=t,\mathcal H_i)
 &={\mathbb P}(B_i=b\mid Y_i,T=t,\mathcal H_i).
\end{aligned}
$$

Equation (8, 9, 10).

 Here $\mathcal H_i$ includes the settings and outcomes of earlier trials. All public training choices and the fixed Bell function are part of the conditioning context. This is a classical pre-existing isolated-adversary condition; it is not a theorem for quantum side information, later-acquired protocol data, or the internal state of a predictable settings generator. The published bounded-bias variants require their own revised parameters and are not silently invoked in the numerical application below. 



<a id="source-lemma-5"></a>

**Lemma 3.4 (Finite-seed obstruction to exact sequential setting independence).**

<a id="exp:seednecessity"></a> 

*Status: Proved.*

 Suppose the full setting word $W$ is a deterministic function of a finite-valued generator resource $G_{\rm set}$, including any genuinely fresh randomness used during the protocol. The exact setting condition [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings) implies 

$$

 H(W\mid T)=2n\le H(G_{\rm set}\mid T)\le\log_2|\mathcal G_{\rm set}|.

$$

 In particular, a generator resource with less than $2n$ conditional entropy cannot satisfy that condition, even when $T$ does not reveal the generator state. 

 <a id="source-proof-10"></a>

**Proof.**

Average [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings) over the earlier outcomes, keeping $T$ and earlier settings fixed. Each next setting pair is still conditionally uniform. The entropy chain rule gives $H(W\mid T)=\sum_i H(W_i\mid T,W_{<i})=2n$. Deterministic data processing through $G_{\rm set}$ gives the remaining inequalities. 

□





*Status: Scope.*

 The preceding obstruction concerns the stronger sequential condition [(8)](/sealed-or-leaky/experimental-anchoring#exp:Bsettings), not the original one-round (MI). Correlation between settings at different times need not itself imply correlation between a setting and the measured source.



<a id="paragraph-5"></a>

#### Alphabet and symbol translation.

 

*Status: Definitions.*

 Bierhorst et al. label detection by $+$ and nondetection by $0$. The bijection $+\mapsto+1$, $0\mapsto-1$ puts both into this article's alphabet; it changes no probability or entropy and discards no nondetections. Their Bell function is denoted here by $\mathcal B$, not $T$; their extractor seed by $R$, not CHSH $S$; and their extracted string by $K$. Write $W=X^nY^n$, let $C$ be the protocol's processed outcome word, and let $J$ be its pass indicator.



<a id="paragraph-6"></a>

#### Causal padding is part of the record map.

 

*Status: Imported implementation detail; not reconstructed data.*

 For Data Set 5, SI S.6 of <a id="citation-17"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)] reports first crossing the fixed threshold at trial $41{,}243{,}976$, followed by relabelling every later outcome to nondetection. Thus $C$ is the raw word through that crossing, followed by deterministic $(-1,-1)$ pairs. Its remaining Bell factors equal one. This history-dependent change is covered by the paper's adaptive theorem: it is selected from the completed past, not from a current distant outcome. The reported raw final product $2.018\times10^{41}$ is *not* the product of this padded word. We use the reported threshold crossing, not that raw product as a replacement threshold or as a recomputation of $C$.



<a id="paragraph-7"></a>

#### Source and numerical quantities.

 

*Status: Imported published quantities.*

 Data Set 5 of <a id="citation-18"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)] ([arXiv:1803.06219v1](https://arxiv.org/abs/1803.06219v1) and SI) uses $n=55{,}110{,}210$ trials after $5\times10^6$ training trials; the reported Bell-function parameter is $m=0.0100425$. The fixed threshold, errors, seed length and output length are <a id="exp:parameters"></a>


$$

 \begin{gathered}
 v=1.5\times10^{32},\quad p=9.025\times10^{-25},\quad
 \kappa=9.5\times10^{-13},\quad p=\kappa^2,\\
 \epsilon_{\rm ext}=5\times10^{-14},\quad
 d=315{,}844,\quad \ell=1024,\quad \epsilon=10^{-12}.
 \end{gathered}

$$

Equation (11).

 The probability $\pi={\mathbb P}(J=1)$ is a property of the repeated-protocol law, not of the particular observed word. The hypothesis $\pi\ge\kappa$ remains explicit; observing $J=1$ does not prove it. The training-based i.i.d. success estimate in the paper is not substituted for an adversarial lower bound on $\pi$.

<a id="source-lemma-6"></a>

**Lemma 3.5 (Rounding-controlled entropy-production parameter).**

<a id="exp:rounding"></a> 

*Status: Proved from the printed Bell table and its stated downward-rounding rule in [[28](/sealed-or-leaky/references#bib-Bierhorst18)].*

 The printed coefficients $b_{xy}^{ab}$, in the original $\{+,0\}$ column order, are 

$$

\begin{array}{c|rrrr}
 xy & ++ & +0 & 0+ & 00\\\hline
00&1.0243556353&0.9704647804&0.9735507658&1\\
01&1.0256127409&0.9491951243&0.9960775334&1\\
10&1.0227274988&0.9962782754&0.9461091383&1\\
11&0.9273040563&1.0037217225&1.0039224645&1
\end{array}

$$

 Under uniform settings, their maximum local expectation is $1$ and maximum no-signalling expectation is $1.01004250775$. If the original coefficients are rounded down at the tenth decimal place, their actual no-signalling excess $m_{\rm act}$ satisfies <a id="exp:mupper"></a>


$$

 0.01004250775\le m_{\rm act}\le m_+:=0.01004250785.

$$

Equation (12).

 Put <a id="exp:deltaplus"></a>


$$

 \delta_+=\left[1-\frac{\exp(\ln(pv)/n)-1}{2m_+}\right]^n,
 \qquad b_+=-\log_2\delta_+.

$$

Equation (13).

 For the parameters [(11)](/sealed-or-leaky/experimental-anchoring#exp:parameters), <a id="exp:numericalintervals"></a>


$$

 1344.91401726<b_+<1344.91401728,
 \qquad
 b_++\log_2\kappa+5\log_2\epsilon_{\rm ext}-11>1073.05>1064.

$$

Equation (14).

 Consequently $\delta_+$ is a conservative entropy-production threshold, and the extraction constraint for $\ell=1024$ remains satisfied. These checks do not reconstruct the experimental product from the rounded table. 

 <a id="source-proof-11"></a>

**Proof.**

Enumerate the sixteen local assignments $(a_0,a_1,b_0,b_1)\in\{0,1\}^4$ and their means $\frac14\sum_{xy}b_{xy}^{a_xb_y}$. The maximum is one, attained by all nondetections. The other eight vertices of the binary no-signalling polytope are the PR boxes <a id="citation-19"></a>[[22](/sealed-or-leaky/references#bib-Pironio10), App. A.3]; their means are 

$$

 \frac18\sum_{x,y,a\in\{0,1\}}
 b_{xy}^{a,\ a\oplus xy\oplus rx\oplus sy\oplus t},
 \qquad (r,s,t)\in\{0,1\}^3.

$$

 Their maximum occurs at $(r,s,t)=(0,0,0)$ and equals $4040170031/4000000000$; each of the other seven means is below one. These finite sums can be checked directly with the displayed decimal rationals. Increasing every coefficient by less than $10^{-10}$ changes the expectation under any normalized distribution by less than $10^{-10}$. Monotonicity of the maximum then proves [(12)](/sealed-or-leaky/experimental-anchoring#exp:mupper). The largest printed local mean other than the all-nondetection strategy is $1-5.25\times10^{-10}$. Raising every uncertain coefficient by $10^{-10}$ still leaves each such mean below one. The all-nondetection coefficients are fixed to exactly one by the published training constraint. Thus the local bound for the original function also follows from this rounding envelope; no unchecked numerical optimization tolerance is needed.

For $pv>1$, the entropy-production expression for $\delta$ is increasing in $m$ wherever its bracket is positive. The actual theorem therefore also holds with the larger $\delta_+$. Its admissible range $pv\le(1+3m_{\rm act}/2)^n$ holds already with the lower endpoint in [(12)](/sealed-or-leaky/experimental-anchoring#exp:mupper). Numerically stable evaluation is 

$$

 b_+=-\frac{n}{\ln2}\ln\!\left(1-
 \frac{\exp(\ln(pv)/n)-1}{2m_+}\right).

$$

 The intervals in [(14)](/sealed-or-leaky/experimental-anchoring#exp:numericalintervals) follow by bounding logarithms with $\ln x=2\sum_{j\ge0}((x-1)/(x+1))^{2j+1}/(2j+1)$ after binary range reduction, and bounding the positive exponential and $-\ln(1-u)$ series by their geometric tail bounds. Twenty terms in the range-reduced logarithms and four terms in each of the latter small-argument series suffice for the displayed intervals. Finally $\ell+4\log_2\ell=1064$. The conservative value agrees with the fragment's rounded $1344.9$, but the rounded printed $m$ is not treated as an exact extremal value. 

□





<a id="paragraph-8"></a>

#### The exact imports used.

 

*Status: Imported conditional theorems from [[28](/sealed-or-leaky/references#bib-Bierhorst18), Eq. (4), Eqs. (5)–(6), SI S.2 and S.5].*

 With $T$ B-admissible, the entropy-production theorem gives, almost everywhere in $t$, <a id="exp:EPT"></a>


$$

 {\mathbb P}_t\{P_t(C\mid W)>\delta_+,\ J=1\}\le p.

$$

Equation (15).

 Here $P_t(C\mid W)$ is the probability assigned to the *realized* word and settings, not a maximum taken after observing the data. For the soundness theorem, additionally take $R$ uniform on $\{0,1\}^d$ and independent of $(C,W,T,J)$, use the specified extractor $K=\mathrm{Ext}(C,R)$, and suppose $\pi\ge\kappa$. Then <a id="exp:soundness"></a>


$$

 {\mathrm{TV}}\!\left(P_{KWRT\mid J=1},\,
 U_\ell\otimes P_{WRT\mid J=1}\right)
 \le p/\pi+\epsilon_{\rm ext}\le10^{-12}.

$$

Equation (16).

 Here $U_\ell$ and $U_d$ are uniform laws and $P_{WRT\mid J=1}$ is the product of $P_{WT\mid J=1}$ and $U_d$, with coordinates put in the displayed order. The independence of $R$ makes the real and ideal $(W,R,T)$ marginals identical after passing. Equations [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT)–[(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) are not assumed for a larger class of side information than Definition [3.3](/sealed-or-leaky/experimental-anchoring#exp:admissible).



<a id="section-3-4"></a>

### 3.4 Extracted randomness translated into source-response entropy

 <a id="source-lemma-7"></a>

**Lemma 3.6 (Uniformity-to-entropy continuity with the correct dimension).**

<a id="exp:Audenaert"></a> 

*Status: Proved; imports the entropy-continuity inequality of [[29](/sealed-or-leaky/references#bib-Audenaert07)].*

 Let $K$ take $M=2^\ell$ values and let $E$ be classical. If ${\mathrm{TV}}(P_{KE},U_\ell\otimes P_E)\le\epsilon\le1-1/M$, then <a id="exp:continuity"></a>


$$

 H(K\mid E)\ge\ell-h_2(\epsilon)-\epsilon\log_2(M-1)
 \ge\ell(1-\epsilon)-h_2(\epsilon),
 \quad
 p_{\rm guess}(K\mid E)\le M^{-1}+\epsilon.

$$

Equation (17).

 

 <a id="source-proof-12"></a>

**Proof.**

Write $\delta_e={\mathrm{TV}}(P_{K\mid e},U_\ell)$. Equality of the $E$ marginals gives ${\mathbb E}\delta_e\le\epsilon$. Always $0\le\delta_e\le1-1/M$, since a point mass is farthest from the uniform law on $M$ points. Apply Audenaert's bound to the diagonal $M$-dimensional density matrices: 

$$

 H(K\mid E=e)\ge\log_2M-h_2(\delta_e)-\delta_e\log_2(M-1).

$$

 The loss function is concave and nondecreasing on $[0,1-1/M]$, since its derivative is $\log_2((M-1)(1-u)/u)\ge0$ there. Jensen and monotonicity give the first inequality of [(17)](/sealed-or-leaky/experimental-anchoring#exp:continuity); $\log_2(M-1)\le\ell$ gives the second. No uncontrolled $\delta_e>1/2$ exception or auxiliary majorant is needed. Finally, under the ideal law any guess measurable in $E$ succeeds with probability $1/M$. Total variation changes that success probability by at most $\epsilon$, including for the optimal real-law guess. 

□



<a id="source-lemma-8"></a>

**Lemma 3.7 (Translation of the certified extracted string).**

<a id="exp:translation"></a> 

*Status: Proved conditional on B-admissibility, the published protocol and seed hypotheses, $\pi\ge\kappa$, single outcomes and runwise outcome determinism.*

 Suppose the processed word is a deterministic function $C=F(\lambda,W)$ of an initial source state and the full setting word; let $T=\tau(\lambda)$ be B-admissible. Let $Z_{\rm run}=F(\lambda,\cdot)$ be the finite response function on the finite set of setting words. With the extraction hypotheses of [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness), <a id="exp:extractedShannon"></a>
<a id="exp:extractedguess"></a>


$$
\begin{aligned}H(Z_{\rm run}\mid T,J=1)
 &\ge H(Z_{\rm run}\mid T,W,R,J=1)\\
 &\ge H(K\mid T,W,R,J=1)\\
 &\ge1024(1-10^{-12})-h_2(10^{-12})
 >1024-1.1\times10^{-9},\\
 p_{\rm guess}(Z_{\rm run}\mid T,W,R,J=1)
 &\le2^{-1024}+10^{-12}.
\end{aligned}
$$

Equation (18, 19).

 Thus the unsmoothed conditional min-entropy is at least $-\log_2(2^{-1024}+10^{-12})>39.86$ bits, also after dropping $W,R$ from the conditioning. No independence of $\lambda$ from $W$ is needed beyond the stated B-admissibility of $T$ for these implications. 

 <a id="source-proof-13"></a>

**Proof.**

Apply Lemma [3.6](/sealed-or-leaky/experimental-anchoring#exp:Audenaert) to the law conditioned on $J=1$, with $E=(T,W,R)$. The numerical Shannon loss is less than $1.06531\times10^{-9}$ bits. The output satisfies $K=\mathrm{Ext}(Z_{\rm run}(W),R)$, so conditioning and deterministic data processing give the entropy chain in [(18)](/sealed-or-leaky/experimental-anchoring#exp:extractedShannon). They do *not* require the generally false identity $H(Z_{\rm run}\mid T)=H(Z_{\rm run}\mid T,W,R,J=1)$. Any guess of $Z_{\rm run}$ from $(T,W,R)$ induces a guess of $K$ correct whenever the response guess is correct. Its ideal-law success probability is $2^{-1024}$, so [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) gives [(19)](/sealed-or-leaky/experimental-anchoring#exp:extractedguess). Dropping conditioning cannot improve guessing. All distributions in this argument are conditional passing-ensemble laws, not entropies assigned to one realized string. 

□



<a id="source-corollary-1"></a>

**Corollary 3.8 (The correctly scoped 1024-bit Shannon consequence).**

<a id="exp:bierhorst"></a> 

*Status: Proved conditional on all hypotheses of Lemma [3.7](/sealed-or-leaky/experimental-anchoring#exp:translation).*

 The Data Set 5 soundness certificate implies the lower bound in [(18)](/sealed-or-leaky/experimental-anchoring#exp:extractedShannon) for every separately specified B-admissible classical readout $T$. It is a Shannon bound on the finite response function conditional on passing. The number $1024$ is the extracted output length, not its certified unsmoothed min-entropy and not unsmoothed min-entropy of an unrestricted $\lambda$. 

 <a id="source-proof-14"></a>

**Proof.**

This is Lemma [3.7](/sealed-or-leaky/experimental-anchoring#exp:translation) with the published parameters. Keeping its probability space, conditioning and side-information class is essential to the statement. 

□





<a id="section-3-5"></a>

### 3.5 A stronger finite-sample consequence without an extractor or source–setting independence

 <a id="source-lemma-9"></a>

**Lemma 3.9 (Atom-tail transfer through determinism and postselection).**

<a id="exp:tailtransfer"></a> 

*Status: Proved.*

 Let $Z,C$ be finite, $E$ classical standard Borel, $C=f(Z,E)$, and $J$ a pass event of probability $\pi>0$. Suppose $0<p<\pi$, $0<\delta<1$ and <a id="exp:abstracttail"></a>


$$

 {\mathbb P}\{J=1,\ P(C\mid E)>\delta\}\le p.

$$

Equation (20).

 Then <a id="exp:rawguess"></a>
<a id="exp:rawShannon"></a>


$$
\begin{aligned}p_{\rm guess}(Z\mid E,J=1)&\le\min\{1,(\delta+p)/\pi\},\\
 H(Z\mid E,J=1)&\ge
 (1-p/\pi)\left[\log_2\frac{\pi-p}{\delta}\right]_+.
 
\end{aligned}
$$

Equation (21, 22).

 For clarity, define *deletion-smoothed conditional min-entropy* of a normalized law $P$ by optimizing over subprobability measures $Q\le P$ of mass at least $1-\eta$: 

$$

 H_{\min}^{\mathrm{del},\eta}(Z\mid E)_P
 =\sup_{\substack{0\le Q\le P\\Q(\mathrm{all})\ge1-\eta}}
 \left[-\log_2\int\max_z\frac{dQ(z,\cdot)}{d\mu}(e)\,d\mu(e)\right],

$$

 where $\mu$ dominates the $E$ measures. The value is independent of that dominating choice. For the conditional passing law, <a id="exp:smoothraw"></a>


$$

 H_{\min}^{\mathrm{del},p/\pi}(Z\mid E,J=1)
 \ge-\log_2\delta+\log_2\pi.

$$

Equation (23).

 The smoothing parameter is discarded probability mass; no claim that it equals a purified-distance or normalized-TV smoothing convention is made. 

 <a id="source-proof-15"></a>

**Proof.**

Let $B$ indicate the good event $P(C\mid E)\le\delta$, and restrict the conditional passing law to $B=1$: 

$$

 Q(z,de)={\mathbb P}(Z=z,E\in de,B=1\mid J=1).

$$

 This deletes mass at most $p/\pi$. For every $(z,e)$ that survives, determinism and the good-event definition give $P(Z=z\mid E=e)\le P(C=f(z,e)\mid E=e)\le\delta$. Taking $\mu=P_E$ therefore gives 

$$

 \frac{dQ(z,\cdot)}{dP_E}(e)\le\frac{\delta}{\pi},\qquad
 p_{\rm guess}(Q;Z\mid E)\le\frac{\delta}{\pi}.

$$

 This proves [(23)](/sealed-or-leaky/experimental-anchoring#exp:smoothraw). The deleted submeasure has guessing probability at most its mass, proving [(21)](/sealed-or-leaky/experimental-anchoring#exp:rawguess).

Let $g={\mathbb P}(B=1\mid J=1)\ge1-p/\pi$. The normalized good law has guessing probability at most $\delta/(\pi g)$ and hence Shannon entropy at least $[\log_2(\pi g/\delta)]_+$. Conditioning on $B$ can only reduce average Shannon entropy, and the bad-law entropy is nonnegative. Therefore 

$$

 H(Z\mid E,J=1)\ge g[\log_2(\pi g/\delta)]_+.

$$

 The right side is nondecreasing in $g\ge0$, giving [(22)](/sealed-or-leaky/experimental-anchoring#exp:rawShannon). No independence between $Z$ and $E$ was used. In particular the lemma is stronger, for postselected posterior-response entropy, than a transfer argument requiring an independent prior response law. 

□



<a id="source-corollary-2"></a>

**Corollary 3.10 (Published-parameter finite-sample source-response certificate).**

<a id="exp:rawcor"></a> 

*Status: Proved conditional on B-admissibility, the published entropy-production certificate, single outcomes, runwise outcome determinism and $\pi\ge\kappa$.*

 For Data Set 5, take $E=(T,W)$, $Z=Z_{\rm run}$ and $\delta=\delta_+$ of [(13)](/sealed-or-leaky/experimental-anchoring#exp:deltaplus). Without using the extractor or assuming source–setting independence, the published quantities imply <a id="exp:1304H"></a>
<a id="exp:1304smooth"></a>
<a id="exp:39raw"></a>


$$
\begin{aligned}H(Z_{\rm run}\mid T,W,J=1)&>1304.97\ \text{bits},\\
 H_{\min}^{\mathrm{del},\,9.5\times10^{-13}}
 (Z_{\rm run}\mid T,W,J=1)&>1304.97\ \text{bits},\\
 H_{\min}(Z_{\rm run}\mid T,W,J=1)&>39.93\ \text{bits}.
 
\end{aligned}
$$

Equation (24, 25, 26).

 The Shannon and ordinary guessing conclusions remain true when $W$ is dropped from the conditioning. These are not obtained by substituting a central CHSH value into ${f_{\mathrm{NS}}}$. 

 <a id="source-proof-16"></a>

**Proof.**

Average [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT) over $t$ and apply Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer) to $C=Z_{\rm run}(W)$. Since $\pi\ge\kappa$, deletion mass is at most $p/\kappa=\kappa$, and the smooth bound is at least $b_++\log_2\kappa$. The Shannon bound is at least 

$$

 (1-p/\kappa)[b_++\log_2(\kappa-p)]
 >1304.9768>1304.97.

$$

 Here monotonicity in $\pi$ follows directly because both nonnegative factors in [(22)](/sealed-or-leaky/experimental-anchoring#exp:rawShannon) increase with $\pi$. The unsmoothed bound is 

$$

 -\log_2\bigl((\delta_++p)/\kappa\bigr)>39.93.

$$

 Numerically $b_++\log_2\kappa$ lies between $1304.97687$ and $1304.97689$; the Shannon correction to it is less than $1.3\times10^{-9}$. These conservative intervals follow from Lemma [3.5](/sealed-or-leaky/experimental-anchoring#exp:rounding); they do not identify $1344.9$ with an unconditional or unsmoothed entropy. Dropping public settings can only reduce guessing and increase Shannon entropy. 

□



<a id="source-lemma-10"></a>

**Lemma 3.11 (The fragment's prior-response tail and its additional premise).**

<a id="exp:prioratom"></a> 

*Status: Proved conditional on B-admissibility, the entropy-production certificate, runwise outcome determinism and $Z_{\rm run}\perp W\mid T$.*

 With the additional conditional independence just stated, for almost every $t$, <a id="exp:prioratomtail"></a>


$$

 {\mathbb P}_t\{P_t(Z_{\rm run}=z_{\rm obs})>\delta_+,\ J=1\}\le p,

$$

Equation (27).

 where $z_{\rm obs}$ is the realized response function. Independence of the full $\lambda$ and $W$ conditional on $T$ is sufficient but not necessary: response-level conditional independence suffices. In particular, runwise (MI) and $T=\tau(\lambda)$ imply that sufficient condition. This does not redefine the (MI) premise of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting). 

 <a id="source-proof-17"></a>

**Proof.**

At the realized setting word $w$, 

$$

 P_t(C=z_{\rm obs}(w)\mid W=w)
 \ge P_t(Z_{\rm run}=z_{\rm obs}\mid W=w)
 =P_t(Z_{\rm run}=z_{\rm obs}).

$$

 The event in [(27)](/sealed-or-leaky/experimental-anchoring#exp:prioratomtail) is therefore contained in that of [(15)](/sealed-or-leaky/experimental-anchoring#exp:EPT). This is an exceptional-event bound on a *prior* atom, not itself a conditional entropy after passing. Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) instead proves a posterior entropy statement without this independence premise. 

□



<a id="source-lemma-11"></a>

**Lemma 3.12 (Threshold test of a complete deterministic admissible readout).**

<a id="exp:thresholdtest"></a> 

*Status: Proved conditional on B-admissibility and the published entropy-production theorem; reported threshold crossing imported.*

 For a predetermined threshold $v>1$ and the same Bell-function protocol, any source-complete model with single outcomes and $C=F(\lambda,W)$ satisfies 

$$

 {\mathbb P}(J=1)\le v^{-1}.

$$

 At the published $v=1.5\times10^{32}$ this is $2/(3\times10^{32})$. Unlike Corollaries [3.8](/sealed-or-leaky/experimental-anchoring#exp:bierhorst) and [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor), this test bound does not require $\pi\ge\kappa$. Its rejection event is the reported crossing of the fixed threshold, not a threshold fitted to the final raw product. 

 <a id="source-proof-18"></a>

**Proof.**

Source completeness makes $C$ a function of $(T,W)$, so the realized conditional likelihood $P_t(C\mid W)$ equals one almost surely. In the entropy-production theorem choose an error parameter $p'>v^{-1}$ arbitrarily close to $v^{-1}$. Then $p'v>1$, the corresponding $\delta(p')$ is less than one, and the admissible-range condition holds for all sufficiently close choices. Its event inequality consequently bounds the probability of passing by $p'$, for almost every $t$ and hence unconditionally. Let $p'\downarrow v^{-1}$. This is a frequentist bound under the joint model hypotheses, not a posterior probability that a source ontology is false. The physical applicability of B-admissibility is not proved by the test. 

□





<a id="section-3-6"></a>

### 3.6 Who certifies what, and what remains a gap

<a id="exp:whocertifies"></a> <a id="source-remark-3"></a>

**Remark 3.13 (Certification and source interpretation).**

 

*Status: Scope; imported certificate and proved translation distinguished.*

 **Published certificate.** Bierhorst et al.'s theorem concerns pre-existing classical information isolated from the protocol. Their passing-ensemble soundness inequality, seed requirement and statistical assumptions are [(16)](/sealed-or-leaky/experimental-anchoring#exp:soundness) and Definition [3.3](/sealed-or-leaky/experimental-anchoring#exp:admissible), not security against every physically imaginable no-signalling observer. The Methods section reports pseudorandom settings generated by the Mersenne Twister and explains the additional device-trust basis for effective independence <a id="citation-20"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]. Possession of its predictive internal state is outside the present admissible class. Neither the article nor this translation certifies independence from such a state. Merely hiding that state is also insufficient to prove the exact sequential law: Lemma [3.4](/sealed-or-leaky/experimental-anchoring#exp:seednecessity) requires $2n=110{,}220{,}420$ bits of conditional settings-resource entropy. Counting this many pseudorandom output bits does not certify that entropy. The source does not supply an independent verification of this exact generator-entropy condition, and no quantified replacement error for it is imported here. Thus the numerical implications remain conditional model statements, not unconditional information-theoretic certification of the pseudorandom implementation.

**Proved here under determinism.** Determinism turns recorded-word unpredictability into lower bounds on an initial finite response function, which is a function of $\lambda$. The extracted-string route gives nearly $1024$ conditional Shannon bits but only $39.86$ guaranteed unsmoothed min-entropy bits. The entropy-production route gives over $1304.97$ Shannon and deletion-smoothed min-entropy bits and over $39.93$ unsmoothed bits. The smooth and unsmoothed quantities are not interchangeable. No cardinality, differential entropy, or universal observer-access assertion about an arbitrary $\lambda$ is inferred merely from the output length. Without deterministic source responses, the same statistics can instead represent fresh chance.

**Passing matters.** All near-$1024$ and $1304.97$ entropy bounds refer to the passing-ensemble law and require the displayed lower bound on its pass probability. Conditioning on passing need not preserve no-signalling; none of the proofs assumes it does. One observed pass is not a measurement of $\pi$, and an ensemble conditional entropy is not a property of one known output string. If $L$ denotes the conditional Shannon lower bound, the unconditioned conclusion is only $H(Z_{\rm run}\mid T)\ge\pi L\ge\kappa L$, by conditioning additionally on $J$ and nonnegativity. A large unconditional entropy would need an independently justified much larger lower bound on $\pi$. 





<a id="paragraph-9"></a>

#### Explicit unresolved empirical scope.

 

*Status: Not established.*

 The supplied summaries do not establish the actual pass probability, exact sequential setting independence for the pseudorandom implementation, independence from every proposed additional variable, security with quantum side information, or an unconditional high-entropy bound for $\lambda$. Nor do they provide the exact scores and setting analyses needed to certify the three central-value CHSH examples. Those gaps are not filled by inventing trial lists. For the Data Set 5 theorem-level translation, the reported threshold crossing and published aggregate parameters do suffice under the stated hypotheses; independent reproduction of the experiment or extractor execution is not claimed. A claim about another error level, a different data set, or biased settings requires its own published or recomputed parameters.

---

# Section 4: The escape routes and their boundaries

<a id="section-4"></a>

## 4 The escape routes and their boundaries

<a id="esc:section"></a> 

*Status: Scope of the explicit countermodels.*

 Theorem [2.7](/sealed-or-leaky/the-source-tetralemma#tet:tetralemma) is an implication in a specified model class, not a census of all physical theories. Its examples establish three separate premise countermodels and one branching alternative outside its single-outcome domain. Multiple routes may be used together.



<a id="paragraph-10"></a>

#### Branching.

 The explicit state in (C1) has a complete initial ray and deterministic vector evolution. Its branch-weight table is $P_Q$, but assigning a unique actual outcome requires additional structure. The relative-state literature discusses the interpretation of these weights <a id="citation-21"></a>[[30](/sealed-or-leaky/references#bib-Everett57), [31](/sealed-or-leaky/references#bib-Deutsch99), [32](/sealed-or-leaky/references#bib-Wallace12)]. No such interpretation can be smuggled into the scalar outcome functions of (D). Accordingly (C1) refutes an unrestricted single-outcome ontology claim, not Lemma [2.2](/sealed-or-leaky/the-source-tetralemma#tet:SOredundant).



<a id="paragraph-11"></a>

#### Fundamental chance.

 Model (C2) keeps the initial state complete while outcomes are intrinsically stochastic. This suffices as a logical countermodel; a particular collapse dynamics is not required. The preparation-contextuality obstruction in Proposition [2.9](/sealed-or-leaky/the-source-tetralemma#tet:chance) concerns the density matrix as a readout of preparation laws, not incompleteness of each pure-state ontic value <a id="citation-22"></a>[[2](/sealed-or-leaky/references#bib-BB95), [12](/sealed-or-leaky/references#bib-S05)].



<a id="paragraph-12"></a>

#### Measurement dependence.

 Model (C3) preserves local deterministic responses while correlating source and settings. Specific independence hypotheses can have empirical consequences, but independence against an unrestricted omitted variable is not certified merely by observing random-looking settings. Brans-type constructions show the logical role of the premise <a id="citation-23"></a>[[35](/sealed-or-leaky/references#bib-Brans88)]. No stronger impossibility of testing every specified setting mechanism is asserted.



<a id="paragraph-13"></a>

#### Accessible nonlocality.

 Model (C4) has no-signalling unconditioned marginals and signalling responses conditional on the readable source. This is an explicit counterexample to inferring (NS) for arbitrary side information from ordinary Bell marginals. The transition-set literature and Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget) quantify mathematical nonequilibrium reweightings <a id="citation-24"></a>[[13](/sealed-or-leaky/references#bib-V02)]; physically preparing them is a separate premise. The retained finite-pilot setting dependence in Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal) is an already specified nonrelativistic constitutive prediction, not a demonstrated spacelike experiment.

 <a id="source-tabularx-2"></a>

| Model | Formal status | What it establishes |
| --- | --- | --- |
| (C1) Branching | Outside (SO) and stated (D) | Complete-state determinism is different from single-outcome determinism. |
| (C2) Chance | (SO), (MI), (NS); not (D) | (D) is indispensable within the single-outcome class. |
| (C3) Measurement dependence | (SO), (D), (NS); not (MI) | (MI) is indispensable in that class. |
| (C4) Accessible nonlocality | (SO), (D), (MI); not (NS) | Conditional-access (NS) is indispensable in that class. |

---

# Section 5: Operational equivalence and its restricted alternatives

<a id="section-5"></a>

## 5 Operational equivalence and its restricted alternatives

 <a id="op:section"></a>

The objects compared must be fixed before a completeness claim is made. An individual ontic state, a preparation law on ontic states, its density matrix, a present detector configuration, and a complete experimental record are different objects. A failure of injectivity for one of their maps does not establish failure of injectivity for the others.

Let $S$ be a set of physically reduced source states or preparation laws, and let $p:S\to T$ be a nominated readout. For each admissible complete experiment $e$, write $\mu_{e,s}$ for the probability law of its complete data on a measurable space $(D_e,\Sigma_e)$. The admissible family includes exactly the preparations, interventions, repetitions, stopping rules, and retained records that the model permits. These permissions are physical premises, not consequences of the following definitions. Put 

$$

 s\sim_{\rm op}s'\quad\Longleftrightarrow\quad
 \mu_{e,s}=\mu_{e,s'}\quad\hbox{for every admissible }e,
 \qquad q:S\longrightarrow S/{\sim_{\rm op}}.

$$

 This quotient is a predictive equivalence class, not necessarily an observable at one instant or a finite-dimensional physical state.

<a id="source-theorem-3"></a>

**Theorem 5.1 (Operational surrogate and testing ceiling).**

 <a id="op:surrogate"></a> 

*Status: Proved.*

 The family $\mu^\circ_{e,[s]}:=\mu_{e,s}$ is well defined on $S^\circ=S/{\sim_{\rm op}}$ and reproduces every stipulated record law. Taking the readout of this statistical model to be $\operatorname{id}_{S^\circ}$ gives an injective-readout surrogate. If an alternative class contains this surrogate for every source model under consideration, a level-$\alpha$ test of that class cannot have power exceeding $\alpha$ against any such source model. More generally, if for a complete experiment its source law $P$ has $\inf_{Q\in\mathcal Q}{\mathrm{TV}}(P,Q)\le\varepsilon$, every test $\varphi:D\to[0,1]$ satisfying $\sup_{Q\in\mathcal Q}\int\varphi\,dQ\le\alpha$ obeys $\int\varphi\,dP\le\alpha+\varepsilon$. 



<a id="source-proof-19"></a>

**Proof.**

Equality of all the laws is the definition of $\sim_{\rm op}$, so the surrogate family is well defined and preserves them. Identity readout is injective. The same test has the same rejection probability under equal laws. In the approximate statement, for every $Q\in\mathcal Q$, $\int\varphi\,dP\le\int\varphi\,dQ+{\mathrm{TV}}(P,Q)$; take the infimum. 

□



This is empirical non-identifiability in a specified model class, not logical undecidability. The surrogate is a statistical family. The construction does not give it a local action, a finite-dimensional Markov state, deterministic dynamics, a specified resource bound, or a particular ontology. If these structures are required of alternatives, membership must be established separately. If $S$ is measurable and the maps $s\mapsto\mu_{e,s}(A)$ are measurable, equipping $S^\circ$ with the quotient sigma-algebra makes the induced kernels measurable: the inverse image under $q$ of each kernel level set is measurable in $S$. The quotient need not be standard Borel. No regular conditional distribution on an arbitrary quotient is asserted here.



<a id="paragraph-14"></a>

#### Temporal and intervention consistency.

 Equal one-time marginals do not suffice: a single fair bit repeated at every time and independently drawn fair bits have identical one-time laws and different two-time laws. Complete experiment laws avoid this error. When the source supplies a coherent causal experiment system, copying all its complete laws preserves all equalities expressing prefix consistency, randomization, and admissible adaptive composition. For finite action and outcome alphabets, its history representation is explicit. At a positive-probability history $h_j$, with the next action $a_j$ externally selected under the stipulated intervention semantics, define 

$$

 K_{j+1}(y\mid h_j,a_j)
 =\frac{{\mathbb P}(h_j,y\mid a_0,\ldots,a_j)}
 {{\mathbb P}(h_j\mid a_0,\ldots,a_{j-1})}.

$$

 Causal consistency makes the denominator independent of $a_j$; at zero-probability histories choose any probability vector. Multiplying these kernels, and the action-policy probabilities when actions are randomized, reconstructs the source record law by the chain rule. Thus the same causal law has a representation using observed histories alone. It need not be Markovian on the present readout. An arbitrary collection of unrelated protocol laws would not supply this consistency, and the present theorem does not invent it. In general standard Borel settings one additionally needs suitable measurable conditional kernels.

<a id="source-theorem-4"></a>

**Theorem 5.2 (Quantitative failure of readout-only prediction).**

 <a id="op:radius"></a> 

*Status: Proved.*

 For a fixed experiment, suppose $p(s_0)=p(s_1)$ and $\delta={\mathrm{TV}}(\mu_{e,s_0},\mu_{e,s_1})$. Every proposed law $M_{e,p(s)}$ based only on the readout satisfies 

$$

 \max_{i=0,1}{\mathrm{TV}}\bigl(\mu_{e,s_i},M_{e,p(s_i)}\bigr)
 \ge\frac{\delta}{2}.

$$

 The constant is sharp for this pair, attained by the common law $M=\tfrac12(\mu_{e,s_0}+\mu_{e,s_1})$. More generally, suppose candidate laws obey the independently specified continuity bound ${\mathrm{TV}}(M_{e,t},M_{e,t'})\le Ld(t,t')$. Then 

$$

 \max_i{\mathrm{TV}}\bigl(\mu_{e,s_i},M_{e,p(s_i)}\bigr)
 \ge\frac{[\delta-Ld(p(s_0),p(s_1))]_+}{2}.

$$

 If certified comparison laws $\widehat\mu_i$ satisfy ${\mathrm{TV}}(\widehat\mu_i,\mu_{e,s_i})\le\eta_i$, replace $\delta$ in the last expression by $[{\mathrm{TV}}(\widehat\mu_0,\widehat\mu_1)-\eta_0-\eta_1]_+$. 



<a id="source-proof-20"></a>

**Proof.**

Apply the triangle inequality through the candidate law, or through the two candidate laws in the continuity version. For the midpoint, $\mu_{e,s_0}-M=(\mu_{e,s_0}-\mu_{e,s_1})/2$, giving equality. The comparison-law bound follows by a second triangle inequality. 

□



Theorem [5.2](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:radius) turns a verified leak into a lower bound on the error of *every* model using only the nominated readout, subject to its stated continuity restriction. It proves inadequacy of that description. It neither identifies a unique completion nor excludes an unrestricted theory whose state is the complete operational history. For general spaces the theorem asserts a pairwise lower bound; it does not assert that a globally measurable family of minimax centers exists.

---

# Section 6: Deterministic completions require unresolved information

<a id="section-6"></a>

## 6 Deterministic completions require unresolved information

 <a id="op:detsection"></a>

<a id="source-theorem-5"></a>

**Theorem 6.1 (Conditional randomness and completion size).**

 <a id="op:information"></a> 

*Status: Proved.*

 Let $S,T$ be standard Borel spaces, let ${\mathbb P}$ be a probability law on $S$, let $T_0=p(S_0)$ for a measurable $p$, and let a future finite-valued record be a measurable deterministic function $R=R(S_0)$. 

1. If $R$ is binary, write $q(T_0)={\mathbb P}(R=1\mid T_0)$. The minimum probability of error of a measurable deterministic predictor of $R$ from $T_0$ is 

$$

 \inf_h{\mathbb P}\{R\ne h(T_0)\}
 ={\mathbb E}\min\{q(T_0),1-q(T_0)\}.

$$

 If this is positive, $R$ does not descend almost surely through $p$; on a positive-measure set of readout fibers there are source states with different records.

2. If a finite-valued completion variable $Z$ makes $R=f(T_0,Z)$ almost surely, then, with entropy in bits, 

$$

 H(Z\mid T_0)\ge H(R\mid T_0).

$$

 In particular, a conditionally uniform $n$-bit record requires at least $n$ bits of conditional completion entropy and $|\mathcal Z|\ge2^n$.

3. At a fixed readout $t$, suppose a deterministic simulator uses at most $M$ values of $Z$. If its record law is within $\varepsilon$ in total variation of the uniform law on $\{0,1\}^n$, then 

$$

 M\ge(1-\varepsilon)2^n.

$$

 The bound is sharp when $M\le2^n$: a uniform distribution on any $M$ record strings has distance $1-M/2^n$ from the uniform target.

 



<a id="source-proof-21"></a>

**Proof.**

Conditionally on $T_0=t$, predicting $0$ incurs error $q(t)$ and predicting $1$ incurs $1-q(t)$; the measurable threshold predictor at $q=1/2$ attains their minimum. Standard Borel regular conditional laws of $S_0$ given $T_0=t$ are concentrated on $p^{-1}(t)$ for almost every $t$. Where $0<q(t)<1$, they assign positive mass to both possible record values, supplying the two points in the fiber. For part 2, determinism gives $H(R\mid T_0,Z)=0$. The chain rule then yields $H(Z\mid T_0)=H(R\mid T_0)+H(Z\mid R,T_0)\ge H(R\mid T_0)$. For part 3, the output support $A$ contains at most $M$ strings. Its simulator probability is one whereas its uniform probability is at most $M/2^n$, so total variation is at least $1-M/2^n$. Direct summation gives the stated equality example. 

□



This strengthens a qualitative non-source witness into an information requirement for deterministic completions. Its premises must not be misread. A statistical record law is not an empirical proof of universal determinism or of irreducibility relative to *every* possible initial description. A stochastic source model remains an alternative; a continuous hidden variable with unlimited precision also evades a finite cardinality bound. The result counts all unresolved apparatus and environmental information used by the simulator. Fresh random seeds cannot be omitted from $Z$ while still calling that simulator deterministic. For a prescribed programme, future readout randomness conditional on the present state excludes a deterministic autonomous law on that state, but does not exclude an autonomous stochastic law or a history representation.

---

# Section 7: Conservation of complete information and operational sealing

<a id="section-7"></a>

## 7 Conservation of complete information and operational sealing

 <a id="op:conservation"></a>

For a class $\mathcal F$ of measurable tests $f:X\to[0,1]$, define 

$$

 d_{\mathcal F}(P,Q)
 =\sup_{f\in\mathcal F}\left|\int f\,d(P-Q)\right|.

$$

 Complete measurable access gives total variation. If the observer only reads $\pi:X\to Y$, the class of tests $g\circ\pi$, with all measurable $0\le g\le1$, gives ${\mathrm{TV}}(\pi_*P,\pi_*Q)$. For more restricted apparatus $\mathcal F$ may be smaller still.

<a id="source-theorem-6"></a>

**Theorem 7.1 (Transport of accessible distinguishability).**

 <a id="op:transport"></a> 

*Status: Proved.*

 For a measurable evolution $\Phi:X_0\to X_1$ and an accessible test class $\mathcal F_1$, 

$$

 d_{\mathcal F_1}(\Phi_*P,\Phi_*Q)
 =d_{\Phi^*\mathcal F_1}(P,Q),\qquad
 \Phi^*\mathcal F_1=\{f\circ\Phi:f\in\mathcal F_1\}.

$$

 Consequently $\Phi^*\mathcal F_1=\mathcal F_0$ ensures conservation of accessible distinguishability; inclusion in $\mathcal F_0$ ensures contraction, and reverse inclusion ensures nondecrease. For a bimeasurable bijection with complete measurable access, 

$$

 {\mathrm{TV}}(\Phi_*P,\Phi_*Q)={\mathrm{TV}}(P,Q).

$$

 No corresponding conservation follows for a restricted observation class from invertibility alone. 



<a id="source-proof-22"></a>

**Proof.**

For each test, change of variables gives $\int f\,d(\Phi_*P-\Phi_*Q)=\int(f\circ\Phi)\,d(P-Q)$. Taking the relevant suprema proves the identity and inclusions. A bimeasurable bijection permutes the class of all measurable bounded tests, proving the total-variation identity. 

□





<a id="paragraph-15"></a>

#### A finite reversible counterexample.

 Let $X=\{0,1\}^2$, observe $\pi(x,y)=x$, and let $\Phi(x,y)=(y,x)$. Let $U$ be the fair-bit law and put $P_b=\delta_b\otimes U$, $b=0,1$. Initially the accessible laws are $\delta_0$ and $\delta_1$, at total variation one. After the swap, $\Phi_*P_b=U\otimes\delta_b$, and the accessible laws coincide exactly, although the complete laws remain at total variation one. Thus reversible dynamics can create exact *snapshot* sealing of a preparation family. Applying the swap again restores the distinction.



<a id="paragraph-16"></a>

#### Persistent forward sealing under reversible dynamics.

 The distinction is not confined to a one-time coincidence. Take $X=\{0,1\}^{\mathbb Z}$ with its product sigma-algebra, fair product equilibrium $E$, and the invertible shift $(\Phi x)_j=x_{j-1}$. The observer reads coordinate zero and may choose future observation times but cannot reverse the shift or read other coordinates. For $|a|\le1$, let 

$$

 \frac{dP_a}{dE}(x)=1+a(2x_0-1).

$$

 Initially the observed bit differs from equilibrium by $|a|/2$ in total variation. For every integer $n\ge1$, the entire future output sequence is $(x_{-n},x_{-n-1},\ldots)$, whose law under $P_a$ is the same fair product law as under $E$. Every allowed future adaptive observation therefore has the same law. Nevertheless ${\mathrm{TV}}(\Phi_*^nP_a,E)=|a|/2$ at every time. The omitted distinction has moved into an inaccessible coordinate, and exact forward operational sealing coexists with reversible equilibrium-preserving source dynamics.



<a id="paragraph-17"></a>

#### What retained records prevent.

 If an observer retains the earlier record, the cumulative record at a later time has that record as a measurable marginal. Data processing then gives 

$$

 {\mathrm{TV}}(P_{\text{earlier record}},Q_{\text{earlier record}})
 \le {\mathrm{TV}}(P_{\text{complete retained record}},Q_{\text{complete retained record}}).

$$

 The examples concern future access after the original distinction has been discarded or never archived. They do not erase an actually retained record. Likewise, if implementing $\Phi^{-1}$ is an admissible operation, the original tests can be recovered and complete operational sealing of their distinction is impossible. Mathematical existence of an inverse is not physical access to that inverse.

For a Bohmian flow that is bimeasurably invertible on an equilibrium full-measure invariant domain, and a nonequilibrium initial law $P_0\ll E_0$, equivariance gives ${\mathrm{TV}}(P_t,E_t)={\mathrm{TV}}(P_0,E_0)$. This conserves fine-grained nonequilibrium; it neither forbids observable relaxation nor proves any record is able to reveal the surviving difference. Existence and equivariance alone must be supplemented by the flow's uniqueness and measurable inverse on the relevant domain to invoke the equality. The distinction between fine-grained conservation and coarse-grained relaxation is standard in pilot-wave relaxation analyses. In particular, invertible dynamics can create operational sealing; Theorem [7.1](/sealed-or-leaky/conservation-of-complete-information-and-operational-sealing#op:transport) states the exact access condition.

---

# Section 8: What a quantum preparation description necessarily omits

<a id="section-8"></a>

## 8 What a quantum preparation description necessarily omits

 <a id="ctx:section"></a>

An ontological model assigns to each preparation $P$ a probability measure $\mu_P$ on a measurable space $\Lambda$ and to each binary measurement $M_j$ a measurable response $\xi_j:\Lambda\to[0,1]$, with $p(j\mid M_j,P)=\int\xi_j\,d\mu_P$. The response is fixed by the measurement and the ontic state; it does not depend separately on the preparation procedure. Randomized preparation is represented convex-linearly: 

$$

 \mu_{\sum_a q_aP_a}=\sum_aq_a\mu_{P_a}.

$$

 These are explicit modeling commitments. Calling them simply “realism” would conceal their mathematical content. In particular, the objects $\mu_P$ are distributions of possible individual states, not individual states themselves. Preparation contextuality concerns these distributions <a id="citation-25"></a>[[12](/sealed-or-leaky/references#bib-S05), [1](/sealed-or-leaky/references#bib-Marvian20)].



<a id="section-8-1"></a>

### 8.1 A sharp finite-table separation and a robust witness



Let $n_1,n_2,n_3$ be coplanar unit Bloch vectors with $n_1+n_2+n_3=0$. Write $P_{\pm i}$ for the preparations of the six pure qubit states with Bloch vectors $\pm n_i$, and let $M_j$ measure the projector with Bloch vector $n_j$. Define 

$$

 q_{j,\pm i}:=p(j\mid M_j,P_{\pm i}),\qquad
 d_{ji}:=q_{j,+i}-q_{j,-i},\qquad
 \nu_i:=\tfrac12(\mu_{+i}+\mu_{-i}).

$$

 Each randomized preparation has density matrix $I/2$ in the ideal quantum realization. Its probabilities are <a id="ctx:table"></a>


$$

 q_{i,+i}=1,\quad q_{i,-i}=0,\qquad
 q_{j,+i}=\tfrac14,\quad q_{j,-i}=\tfrac34\quad(j\ne i).

$$

Equation (28).



<a id="source-theorem-7"></a>

**Theorem 8.1 (Robust pairwise preparation separation).**

<a id="ctx:robust"></a> 

*Status: Proved.*

 For any convex-linear ontological model, any four preparations $P_{\pm i},P_{\pm j}$ and any three binary measurements indexed by distinct $i,j,k$, one has <a id="ctx:witness"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ \ge\
 \max\left\{0,-1+
 \frac{d_{ii}+d_{jj}-d_{ji}-d_{ij}}4
 -\frac{d_{ki}+d_{kj}}2\right\}.

$$

Equation (29).

 No outcome determinism or measurement noncontextuality is assumed. For the ideal trine table [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table), every pair $i\ne j$ obeys <a id="ctx:quarterpair"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ge\tfrac14.

$$

Equation (30).

 The constant $1/4$ is sharp for this finite preparation–measurement table. If every probability used in [(29)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:witness) differs from its ideal value by at most $\epsilon$, then <a id="ctx:noise"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ge\max\{0,\tfrac14-4\epsilon\}.

$$

Equation (31).

 



<a id="source-proof-23"></a>

**Proof.**

Put $x_a=2\xi_a-1\in[-1,1]$, $D=x_i-x_j\in[-2,2]$, and $f=-Dx_k/4\in[-1/2,1/2]$. Four pointwise inequalities are 

$$
\begin{aligned}\tfrac12 f&\ge\tfrac14\xi_i-\tfrac14\xi_j-\tfrac12\xi_k,\\
 \tfrac12 f&\ge-\tfrac12-\tfrac14\xi_i+\tfrac14\xi_j+\tfrac12\xi_k,\\
 -\tfrac12 f&\ge-\tfrac14\xi_i+\tfrac14\xi_j-\tfrac12\xi_k,\\
 -\tfrac12 f&\ge-\tfrac12+\tfrac14\xi_i-\tfrac14\xi_j+\tfrac12\xi_k.
\end{aligned}
$$

 Their respective differences, left side minus right side, are $(2-D)(1+x_k)/8$, $(2+D)(1-x_k)/8$, $(2+D)(1+x_k)/8$, and $(2-D)(1-x_k)/8$, all nonnegative. Integrate these inequalities against $\mu_{+i},\mu_{-i},\mu_{+j},
\mu_{-j}$ respectively and add. Their left sides sum to $\int f\,d(\nu_i-\nu_j)$ and their right sides to the expression in [(29)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:witness). Since $f+1/2$ takes values in $[0,1]$, $\int f\,d(\nu_i-\nu_j)\le{\mathrm{TV}}(\nu_i,\nu_j)$. This proves the general inequality. Substitution of $d_{ii}=d_{jj}=1$ and all four cross terms equal to $-1/2$ gives $1/4$. Each $d_{ab}$ can change by at most $2\epsilon$, and the sum of the absolute coefficients of the six $d$ terms is $2$, giving [(31)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:noise). The following construction proves sharpness. 

□



<a id="source-proposition-4"></a>

**Proposition 8.2 (A saturating model of the finite table).**

<a id="ctx:saturation"></a> 

*Status: Proved.*

 Let $\Lambda$ consist of the six binary strings $100,010,001,110,101,011$, and set $\xi_j(v)=v_j$. Let $e_i$ be the $i$th binary unit vector. Give $\mu_{+i}$ mass $1/2$ at $e_i$, mass $1/4$ at each of $e_i+e_j$ with $j\ne i$, and zero elsewhere. Define $\mu_{-i}$ by bitwise complementation of $\mu_{+i}$. Extend preparation assignments convex-linearly. This model reproduces [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table) and has ${\mathrm{TV}}(\nu_i,\nu_j)=1/4$ for every $i\ne j$. 



<a id="source-proof-24"></a>

**Proof.**

The $i$th bit is always one under $\mu_{+i}$; each other bit is one with probability $1/4$. Complementation supplies the negative preparation probabilities. The distribution $\nu_i$ has mass $1/4$ at $e_i$ and $\mathbf1-e_i$, and mass $1/8$ at the other four strings. For $i\ne j$, four masses differ by $1/8$, so the total-variation distance is $\frac12(4/8)=1/4$. 

□



This proves sharpness for the displayed finite table, not sharpness of the minimum inaccessible information among models reproducing *all* qubit measurements. Such a global optimum is not established here.

<a id="source-theorem-8"></a>

**Theorem 8.3 (Separation from the trine mixture).**

<a id="ctx:sum"></a> 

*Status: Proved.*

 Put $\nu_4=(\mu_{+1}+\mu_{+2}+\mu_{+3})/3$. For the ideal table [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table), all four mixtures prepare $I/2$ and <a id="ctx:sumhalf"></a>


$$

 \sum_{i=1}^3{\mathrm{TV}}(\nu_i,\nu_4)\ge\tfrac12,
 \qquad \max_i{\mathrm{TV}}(\nu_i,\nu_4)\ge\tfrac16.

$$

Equation (32).

 The sum constant is sharp for this finite table. For arbitrary probability data represented by the same ontological model, <a id="ctx:sumrobust"></a>


$$

 \sum_{i=1}^3{\mathrm{TV}}(\nu_i,\nu_4)\ge
 -\tfrac32+\tfrac16\sum_iq_{i,+i}
 +\tfrac12\sum_i\sum_{j\ne i}(q_{j,-i}-q_{j,+i}).

$$

Equation (33).

 Consequently entrywise probability error at most $\epsilon$ implies the lower bound $\max\{0,1/2-13\epsilon/2\}$ for the sum. 

 <a id="source-proof-25"></a>

**Proof.**

Apply the same Markov kernel to each ontic distribution, taking conditionally independent binary bits $b_j$ with success probabilities $\xi_j(\lambda)$. This preserves all the probabilities $q_{j,\pm i}$, commutes with preparation mixtures, and contracts total variation. It suffices to prove the bound for the resulting distributions on $\{0,1\}^3$; this mathematical coupling asserts no joint physical measurability of the three quantum measurements.

For an ideal table, let $D_i=\{e_i,\mathbf1-e_i\}$. The sets $D_i$ are disjoint. Under $\mu_{+i}$ the $i$th bit is one, and each other bit is one with probability $1/4$, so the union bound gives $\mu_{+i}(e_i)\ge1/2$. Complementarily $\mu_{-i}(\mathbf1-e_i)\ge1/2$. Hence $\nu_i(D_i)\ge1/2$ and 

$$

 \sum_i{\mathrm{TV}}(\nu_i,\nu_4)
 \ge\sum_i[\nu_i(D_i)-\nu_4(D_i)]\ge\tfrac32-1=\tfrac12.

$$

 In the saturating model of Proposition [8.2](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:saturation), $\nu_4$ is uniform on the six nonconstant strings. Each ${\mathrm{TV}}(\nu_i,\nu_4)=1/6$.

For the robust assertion define $h_i(b)\in[-1/2,1/2]$ as follows: on $000$ all $h_i=-1/2$; on $111$ all $h_i=1/2$; on the remaining six strings $h_i=1/2$ when coordinate $i$ is the minority bit and $h_i=-1/2$ otherwise. Put $H(b)=\sum_ih_i(b)$. For each $i$ the following inequalities hold on all eight strings: 

$$

 \tfrac12h_i-\tfrac13H\ge
 \tfrac14+\tfrac16b_i-\tfrac12\sum_{j\ne i}b_j,
 \qquad
 \tfrac12h_i\ge-\tfrac34+\tfrac12\sum_{j\ne i}b_j.

$$

 For completeness, the respective slacks as a function of the bit $b_i$ and the number $r$ of ones among the other two bits are 

$$

\begin{array}{c|rrrrrr}
(b_i,r)&(0,0)&(0,1)&(0,2)&(1,0)&(1,1)&(1,2)\\\hline
\text{first slack}&0&1/6&7/6&0&0&1/3\\
\text{second slack}&1/2&0&0&1&0&0
\end{array}

$$

 and are nonnegative. Integrate the first inequality against $\mu_{+i}$, the second against $\mu_{-i}$, and sum over $i$. The left side equals $\sum_i\int h_i\,d(\nu_i-\nu_4)$ and is at most $\sum_i{\mathrm{TV}}(\nu_i,\nu_4)$. The right side is [(33)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:sumrobust). The total absolute probability coefficient is $3/6+12/2=13/2$, proving the noise bound. 

□



Likewise, the noise bound applies directly to the specified mixtures of the actual preparations. To call these mixtures members of one density-matrix fiber under experimental imperfections requires a separate certificate that their density matrices remain equal. Approximate tomographic agreement alone does not establish exact operational equivalence. Secondary preparations can sometimes supply exact equivalences within a specified operational model; the relevant experimental methodology is developed in <a id="citation-26"></a>[[7](/sealed-or-leaky/references#bib-MPKRS16)].

<a id="source-corollary-3"></a>

**Corollary 8.4 (Conditional noninjectivity of the preparation readout).**

 <a id="ctx:noninjectivity"></a> 

*Status: Proved conditional on a convex-linear ontological model reproducing the trine table and tomographically complete qubit statistics.*

 Suppose a convex-linear ontological model reproduces the trine table and a tomographically complete set of quantum measurements. On the set of realized preparation distributions the map $p(\mu_P)=\rho_P$ is well defined and noninjective. Its fiber over $I/2$ contains three distributions whose pairwise total-variation distances are at least $1/4$. 

 <a id="source-proof-26"></a>

**Proof.**

Equality of two ontic distributions gives equality of all modeled outcome probabilities, hence equality of density matrices by tomography. The three distributions $\nu_i$ share density matrix $I/2$ and are distinct by [(30)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:quarterpair). 

□



The conclusion is preparation contextuality expressed as incompleteness of a specified preparation readout. It does not establish incompleteness of a pure state as the individual ontic state, of a universal quantum state, or of the total internal operational description. Indeed, the Beltrametti–Bugajski model takes rays as ontic states, assigns pure preparations Dirac measures, proper mixtures their convex-linear mixtures, and Born response functions <a id="citation-27"></a>[[2](/sealed-or-leaky/references#bib-BB95)]. Pure states are complete in that model although distinct proper mixtures with the same density matrix remain distinct ontic distributions. This explicit countermodel blocks the stronger inference. The underlying qualitative obstruction is Spekkens' preparation-contextuality theorem <a id="citation-28"></a>[[12](/sealed-or-leaky/references#bib-S05)]; total variation as a measure of inaccessible preparation information is prior work of Marvian <a id="citation-29"></a>[[1](/sealed-or-leaky/references#bib-Marvian20)]. The finite-table inequality and its displayed constants are derived here; no exhaustive priority claim is made.

---

# Section 9: Operational sealing and quantitative failures of POVM form

<a id="section-9"></a>

## 9 Operational sealing and quantitative failures of POVM form

 <a id="ctx:sealingsection"></a>

A finite proper ensemble $\mathfrak E=((q_a,\psi_a))$ prepares a unit ray $\psi_a$ with probability $q_a$ and discards the classical choice. A fixed experiment with pure-input outcome law $\mu_\psi$ has law $\mu_{\mathfrak E}=\sum_aq_a\mu_{\psi_a}$ and density matrix $\rho_{\mathfrak E}=\sum_aq_a|\psi_a\rangle\langle\psi_a|$. All randomization and any common apparatus preparation are included in this specification. The experiment is *sealed relative to the density matrix* when equal density matrices give equal complete record laws.

<a id="source-theorem-9"></a>

**Theorem 9.1 (Exact sealing and POVM form).**

<a id="ctx:povm"></a> 

*Status: Proved.*

 In finite dimension $d$, suppose the experiment is defined on every pure state and every finite proper ensemble, with the mixture rule just stated. It is sealed relative to the density matrix if and only if a POVM $E$ on its outcome space satisfies 

$$

 \mu_\psi(A)=\langle\psi,E(A)\psi\rangle,
 \qquad \mu_{\mathfrak E}(A)=\operatorname{tr}(E(A)\rho_{\mathfrak E})

$$

 for every measurable record event $A$. 

 <a id="source-proof-27"></a>

**Proof.**

POVM form implies sealing by linearity. Conversely, sealing makes $F_A(\rho)=\mu_{\mathfrak E}(A)$ well defined for any decomposition of $\rho$. Randomized mixtures make $F_A$ affine on the density matrices. An affine function on a finite-dimensional convex set with nonempty relative interior extends uniquely to its affine hull: choose an affine basis forming a simplex around a relative-interior point, match the function at the vertices, and extend the equality from that simplex to any other point along a segment from the interior point. Therefore $F_A(\rho)=\operatorname{tr}(E(A)\rho)$ for a unique Hermitian $E(A)$. Since $F_A$ takes values in $[0,1]$ on every pure state, $0\le E(A)\le I$, and $E(\mathcal D)=I$. Countable additivity of each $\mu_\psi$ makes $E$ weakly countably additive: for disjoint events the positive partial sums are bounded by $I$, and their limiting quadratic forms agree with those of $E$ of the union. This is a POVM. 

□



The quantifiers matter. An experiment on a restricted preparation domain need not have a unique extension to all density matrices. A family of positive event operators is a POVM only after normalization and countable additivity have been checked. Sealing is a statement about the nominated readout and admitted experiment class; it does not imply that its fibers contain physically distinct source states.

<a id="source-theorem-10"></a>

**Theorem 9.2 (Quantitative ensemble witness for a nonquadratic event).**

 <a id="ctx:quantitativepovm"></a> 

*Status: Proved.*

 Let $h(\psi)\in[0,1]$ be the probability of a fixed recorded event on every unit ray in $\mathbb C^d$. Define 

$$
\begin{aligned}\Gamma(h)&:=\sup_{\rho_{\mathfrak E}=\rho_{\mathfrak E'}}
 \left|\sum_aq_ah(\psi_a)-\sum_br_bh(\phi_b)\right|,\\
 d(h)&:=\inf_{H=H^*}\sup_\psi
 |h(\psi)-\langle\psi,H\psi\rangle|,\\
 d_{\mathrm{eff}}(h)&:=\inf_{0\le E\le I}\sup_\psi
 |h(\psi)-\langle\psi,E\psi\rangle|.
\end{aligned}
$$

 The supremum defining $\Gamma$ is over finite proper ensembles. Then <a id="ctx:duality"></a>


$$

 \Gamma(h)=2d(h),\qquad
 \tfrac12\Gamma(h)\le d_{\mathrm{eff}}(h)\le\Gamma(h).

$$

Equation (34).

 For every $c<\Gamma(h)$ with $c\ge0$, there are two equal-density ensembles whose event probabilities differ by more than $c$, using at most $d^2+1$ pure-state occurrences in total. Their complete outcome laws therefore have total-variation distance greater than $c$. 

 <a id="source-proof-28"></a>

**Proof.**

Fix a finite set $F$ of pure projectors $\rho_a$ and values $h_a$. The finite linear program minimizing $t$ subject to $|h_a-\operatorname{tr}(H\rho_a)|\le t$ has dual 

$$

 \max_v\left\{\sum_av_ah_a:
       \sum_av_a\rho_a=0,\ \sum_a|v_a|\le1\right\}.

$$

 Taking traces gives $\sum_av_a=0$, so the positive and negative parts have the same mass, at most $1/2$. Dividing each by that mass gives two equal-density ensembles; conversely half the difference of any two such ensemble weight vectors is dual feasible. Thus finite linear-programming duality gives $\Gamma_F(h)=2d_F(h)$, also when both sides vanish.

Put $D=\sup_Fd_F(h)$. Clearly $D\le d(h)$. Fix a finite tomographically complete pure-state frame $F_0$. For any $\eta>0$, all the constraints on $F_0$ with error at most $D+\eta$ bound the coefficients of $H$; their solution set is compact. The constraint sets obtained by also adding any finite $F$ have the finite-intersection property, since $d_{F\cup F_0}(h)\le D$. Compactness supplies one $H$ satisfying every pure-state constraint with error $D+\eta$. Letting $\eta$ tend to zero gives $d(h)\le D$. Since every pair of finite ensembles is contained in some finite $F$, $\Gamma(h)=\sup_F\Gamma_F(h)=2D=2d(h)$. No continuity of $h$ was needed.

A minimizer for $d(h)$ exists by the same compactness argument. Its spectrum lies in $[-d(h),1+d(h)]$, as follows by evaluating at its eigenvectors. Clipping that spectrum to $[0,1]$ changes $H$ by operator norm at most $d(h)$ and gives an effect with uniform error at most $2d(h)$. This proves the upper effect bound; the lower follows because effects are a subset of Hermitian matrices.

Finally, on any finite $F$ the maximization over pairs of ensemble weights is a linear program with nonnegative variables and constraints $\sum_aq_a=\sum_ar_a=1$ and $\sum_a(q_a-r_a)\rho_a=0$. The rank is at most $d^2+1$, since the trace of the matrix constraint is redundant with the two normalization conditions. A maximizing basic feasible solution uses at most $d^2+1$ nonzero weights in total. Choose $F$ with $\Gamma_F(h)>c$ to obtain the stated witness. The difference of event probabilities lower-bounds total variation. 

□



This result converts a failure of quadratic probability response into a finite preparation witness with an exact variational characterization. It does not establish physical access to a proposed nonquadratic event: that must be supplied by an admissible detector and retained record. The eventwise approximation also does not by itself construct one normalized approximate POVM for all events simultaneously.

<a id="source-proposition-5"></a>

**Proposition 9.3 (Detectable leaks and independent repetition).**

 <a id="ctx:amplification"></a> 

*Status: Proved conditional on independently resettable preparations and an implementable test.*

 Suppose two physically available preparations with the same nominated readout give record laws $P,Q$ with ${\mathrm{TV}}(P,Q)=\delta>0$. If both preparations can be reset and repeated independently with the same fixed laws, then 

$$

 {\mathrm{TV}}(P^{\otimes n},Q^{\otimes n})\ge
 1-(1-\delta^2)^{n/2}\ge1-e^{-n\delta^2/2}.

$$

 The optimal equal-prior discrimination error is at most $\frac12e^{-n\delta^2/2}$, when the requisite measurable decision rule is available. 

 <a id="source-proof-29"></a>

**Proof.**

For a common dominating measure, let $B(P,Q)=\int\sqrt{dP\,dQ}$. Cauchy–Schwarz gives ${\mathrm{TV}}(P,Q)\le\sqrt{1-B(P,Q)^2}$, while ${\mathrm{TV}}(P,Q)\ge1-B(P,Q)$. Affinity multiplies under independent products, so $B(P^{\otimes n},Q^{\otimes n})\le(1-\delta^2)^{n/2}$. The optimal equal-prior error is $(1-{\mathrm{TV}})/2$. 

□



Without independent preparation, reset, and a realizable test, positive separation of abstract laws is not an unconditional experimental amplification theorem. For example, repeated copies of one shared random bit retain the original single-bit discrimination error regardless of the number of displayed copies.

---

# Section 10: The measurement constitutions and the scope of their sealing

<a id="section-10"></a>

## 10 The measurement constitutions and the scope of their sealing

 <a id="con:section"></a> 

*Status: Imported constitutive hypotheses; not independently established physical laws.*

 The measurement monograph supplies two distinct constitutions. In the pilot theory, a canonical coherent field drives deterministic export and contact rules; the randomness comes from a specified initial spatial gas and carrier ensemble. The designated carrier represents the complete ordinary material configuration. P3 requires every additional ordinary apparatus to enter the same numerical Hermitian field Hamiltonian and forbids an additional pilot-ledger force or direct rewrite of an ordinary display. In the massive theory, the complete state is a spinor wave together with massive material positions; Schrödinger evolution, kinetic-momentum guidance and initial complete equilibrium are postulated. The following statements concern these declared domains, not all possible material theories.



<a id="section-10-1"></a>

### 10.1 Pointwise and uniform sealing in the Bell limit

 For a fixed ordinary programme and a common ready apparatus $\alpha$, the pilot Bell limit has record effects <a id="con:effect"></a>


$$

 P^B_\psi(m)=\|P_mU(\psi\otimes\alpha)\|^2
 =\langle\psi,E_m\psi\rangle,\qquad E_m\ge0,\quad\sum_mE_m=I.

$$

Equation (35).

 This follows from complete-configuration equivariance and the joint unitary; it is Eq. (8.3) of the monograph <a id="citation-30"></a>[[11](/sealed-or-leaky/references#bib-RM)]. The represented input includes every preparation tag that can affect the experiment. Equality of a subsystem's density matrix while an apparatus retains an accessible correlated tag is not equality of the complete input.

<a id="source-proposition-6"></a>

**Proposition 10.1 (Finite-ensemble asymptotic sealing).**

<a id="con:ensemblesealing"></a> 

*Status: Proved conditional on the pilot constitution and the Bell-limit record form of [[11](/sealed-or-leaky/references#bib-RM)].*

 Fix an admissible complete programme, including its physical records. Suppose the finite pilot path error for each pure input used is bounded by $\epsilon_N(\psi)\to0$. Let $\mathfrak E=\{(q_i,\psi_i)\}$ and $\mathfrak E'=\{(q'_j,\psi'_j)\}$ be finite ensembles with equal complete represented density matrices and the same ready apparatus. Then their finite record laws satisfy <a id="con:ensemblesealingeq"></a>


$$

 {\mathrm{TV}}(P^N_{\mathfrak E},P^N_{\mathfrak E'})
 \le\sum_iq_i\epsilon_N(\psi_i)
       +\sum_jq'_j\epsilon_N(\psi'_j)\longrightarrow0.

$$

Equation (36).

 If a common bound $\epsilon_N(\psi)\le\Delta_N$ is proved on the specified input class, the right-hand side is at most $2\Delta_N$. 

 <a id="source-proof-30"></a>

**Proof.**

The record is a common measurable function of the complete ordinary path, so its error is no larger than the path error. Mixing preserves the weighted bound by convexity of total variation. The two limiting laws agree by [(35)](/sealed-or-leaky/the-measurement-constitutions-and-the-scope-of-their-sealing#con:effect); the triangle inequality proves the assertion. The sums are finite, hence pointwise convergence of their terms suffices. 

□



The monograph's Theorem 6.3 supplies a fixed-programme path comparison. Its Proposition 7.8 supplies an input-uniform rate for the particular fixed compiled clock and first-pass family studied there. Neither statement gives uniformity over all growing apparatus graphs, all $N$-dependent horizons or arbitrary changing programmes. The finite witnesses below are consequently proved directly from the finite reaction model. P3 alone does not imply exact finite-resource sealing.



<a id="section-10-2"></a>

### 10.2 Source distinctions that are not automatically records

 The monograph's detuned sector model has two actual position vertices, an internal qubit and an inaccessible reference. With 

$$

 H_D=g\bigl(\sqrt\eta\,\sigma_x+\sqrt{1-\eta}\,\sigma_z\bigr)_{\rm pos}
 \otimes\operatorname{diag}(1,2)_{\rm int}\otimes I_R,
 \quad T=\frac\pi{2g},\quad0<\eta<1,

$$

 and initial position $0$, an input of internal weight $p$ has 

$$

 w_1(t)=\eta\{p\sin^2(gt)+(1-p)\sin^2(2gt)\}.

$$

 Its unmodified Bell first-exit target $F$ obeys $F(0)=F(1)=\eta$ and $F(2/3)=3\eta/4$ (monograph Proposition 9.1). These are imported model calculations, not experimental data. The basis mixture of weights $(2/3,1/3)$ and the equal mixture of $\sqrt{2/3}{\lvert0\rangle}\pm\sqrt{1/3}{\lvert1\rangle}$ have the same density matrix but different $F$ values. They also have mutually singular distributions of the initial pilot field, because that field is an explicit source coordinate.

This establishes a model-relative source distinction. It does not make the unchanged first exit a measurable record in the original ordinary force catalogue. A common affine record probability cannot approximate both target values with error smaller than $\eta/8$, by their gap $\eta/4$ and the triangle inequality. The monograph's Theorem 9.2 proves this obstruction with the complete-input qualification. Attaching a recorder requires analyzing its joint dynamics; an instrument that changes the native histories is not a recorder of the unchanged target merely because its name says so.



<a id="section-10-3"></a>

### 10.3 What is and is not transferred between constitutions

 The source inventory, zero-residue exporter and finite-gas comparison used below are explicit pilot rules. The massive example later uses its own guidance and equilibrium laws. The monograph's Chapter 32 translation/dilation routing has correct transport formulas but is explicitly not a lower-bounded microscopic energy realization; it is not imported as an operation of the semibounded massive constitution. Any such routing used as a mathematical example must retain its separate assumptions.

---

# Section 11: Finite pilot resources: exact inventories and retained records

<a id="section-11"></a>

## 11 Finite pilot resources: exact inventories and retained records

 <a id="pil:section"></a>



*Status: Retained conditional model; no new experimental proposal.*

 The following results concern the driven, finite-graph pilot constitution P1–P4 of the pilot companion, version 2 <a id="citation-31"></a>[[20](/sealed-or-leaky/references#bib-Pilot)], and the corresponding material in the integrated monograph <a id="citation-32"></a>[[11](/sealed-or-leaky/references#bib-RM)]. They do not follow from the abstract source/readout distinction. We retain zero initial exporter residues, the declared independent spatial gas preparation, scalar carrier response, and a fixed configuration-sector convention. The internal qubit below is a Hilbert-space fibre over a position vertex; it is not an omitted fine carrier coordinate. Block sectors and their inner-product currents are explicitly permitted in the companion's canonical action. Choosing instead a finer configuration graph defines a different model and requires a new calculation.

The main improvement over an ideal terminal position measurement is an explicit coherent writer. Its output is an ordinary retained bit, and its error is bounded directly from the finite contact law. A separate theorem proves the undrained endpoint asymptotic for the monotone single-edge family, but only at the level of instantaneous carrier position.



<a id="section-11-1"></a>

### 11.1 Microscopic input and exchangeability



Orient each edge $e=(r,q)$ and write $b_e=e_q-e_r$, with incidence matrix $B$. The canonical field supplies deterministic weights and currents satisfying <a id="pil:ownership"></a>


$$

 i\dot\Psi=H(t)\Psi,\qquad \dot\Pi_e=J_e,\qquad \dot w=BJ.

$$

Equation (37).

 The exporter starts with $u_e=k_e=0$ and obeys $u_e=N(\Pi_e-\Pi_e(0))-k_e$. A first hit of $+1$ or $-1$ emits a packet of the corresponding sign, changes $k_e$ by that sign, and resets $u_e$ to zero. The packet budget is $B_e=\lceil NL_e\rceil+1$ with $L_e\ge\int |J_e|$. A positive packet moves one carrier along its edge; a negative packet moves one carrier oppositely; opposite packets may recombine. No reaction directly rewrites an ordinary memory.

In the marked Poisson comparison, each potential packet–carrier channel has rate $\kappa_e\mu_N/N$, independently of the field and carrier label. Opposite-slot channels have rate $a_e$. The total candidate rate is <a id="pil:candidate"></a>


$$

 R_N=\sum_e\left(\kappa_e\mu_N B_e+a_e\binom{B_e}{2}\right).

$$

Equation (38).

 The actual finite gas uses independent uniform longitudinal positions over a beam of length $M_Nv/R_N$ and independent transverse positions in channel cells of relative area $r_c/R_N$. For a horizon $T$ with $M_N>R_NT$, its marked contact history differs from the Poisson comparison by at most <a id="pil:gas"></a>


$$

 \delta_{\mathrm g}=(R_NT)^2/M_N.

$$

Equation (39).

 This bound also holds after the common causal reaction device. It is a contact-history comparison; conditioning on the complete initial gas microstate makes the finite model deterministic and does not preserve the Poisson description. The companion proves [(39)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:gas) by conditioning on the binomial or Poisson arrival count and using their identical conditional laws of ordered times and channel marks. Thus it can be used directly for each finite resource-dependent horizon below; no uniformity claim about a fixed-programme Bell-limit theorem is needed.

<a id="source-lemma-12"></a>

**Lemma 11.1 (Exchangeability of carrier histories).**

<a id="pil:exchange"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with the ready preparation.*

 With all carriers initially at the ready vertex, the joint carrier-history law is invariant under every permutation of carrier labels, both for the spatial gas and its Poisson comparison. If $D$ is any carrier-label-invariant event and $A$ a vertex set, then <a id="pil:exchangeformula"></a>


$$

 \mathbb P(Q(T)\in A,D)=\frac1N\mathbb E[n_A(T)\mathbf1_D],\qquad Q=X_1.

$$

Equation (40).

 

 <a id="source-proof-31"></a>

**Proof.**

A carrier permutation takes channel $(e,b,a)$ to $(e,b,\sigma(a))$, which has the same frequency and hence the same mark probability. Recombination marks are unchanged. The joint ordered-time and channel-mark law is invariant under this relabelling. In the spatial realization this can equally be implemented by a measure-preserving permutation of equal-area channel cells; no symmetry of their geometric shapes is needed. The deterministic reaction map commutes with this relabelling, because eligibility and all service rules depend on the current carrier vertex, not its name. Carrier-independent exporter ties retain their order; contact ties and coincidences with deterministic export times have probability zero. The common ready configuration is invariant. Consequently all $N$ summands in $\mathbb E[n_A\mathbf1_D]=\sum_a\mathbb P(X_a\in A,D)$ coincide, proving the formula. This proves the required marginal exchangeability; a stronger invariance assertion about every coordinate of the complete microstate is unnecessary. 

□



<a id="source-lemma-13"></a>

**Lemma 11.2 (Census and monotone exports).**

<a id="pil:census"></a> 

*Status: Proved conditional on the pilot constitution P1–P4.*

 Let $Z_e=P_e^+-P_e^-$. For a ready preparation with empty packet stock, <a id="pil:censusformula"></a>


$$

 n=Nw-BZ-Bu.

$$

Equation (41).

 If $J_e\ge0$ from preparation until $t$, then <a id="pil:floor"></a>


$$

 k_e(t)=\lfloor N(\Pi_e(t)-\Pi_e(0))\rfloor,
 \quad u_e(t)=\{N(\Pi_e(t)-\Pi_e(0))\},

$$

Equation (42).

 where an export at an integer-valued terminal action is processed at that instant. 

 <a id="source-proof-32"></a>

**Proof.**

The quantity $n+BZ+Bu-Nw$ is constant between events and at each export, service and recombination. Its initial value is zero. On a monotone edge the scaled action crosses successive nonnegative integers, triggering exactly one positive export at each crossing. This proves both claims. 

□



<a id="source-lemma-14"></a>

**Lemma 11.3 (Drainage with an explicit hazard).**

<a id="pil:drain"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and its Poisson comparison.*

 Suppose no new packets are emitted during a hold of duration $h$, each queued packet is of one sign, and its origin contains at least $c_NN$ carriers whenever that packet remains queued. If at most $b$ packets enter the hold, their non-drainage probability in the Poisson comparison is at most <a id="pil:drainbound"></a>


$$

 b\exp(-\kappa_-\mu_Nc_N h),\qquad \kappa_-:=\min_e\kappa_e>0.

$$

Equation (43).

 It is enough that $c_N=1/N$; a density bounded away from zero is not required. 

 <a id="source-proof-33"></a>

**Proof.**

For a queued packet the predictable service intensity is $\kappa_e\mu_N n_{\rm origin}/N$. It is bounded below by the exponent's rate until that packet is served. Its survival probability is therefore bounded by the corresponding exponential, by the compensator or thinning construction. A union bound proves [(43)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drainbound). A single addition of [(39)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:gas), applied to the complete experiment, transfers any union of such failure events to the physical gas; it need not be added separately at each stage. 

□



If all incident net queues vanish on a label-invariant event $D$, the census gives the deterministic value $n_r=Nw_r-(Bu)_r$ on $D$. Exchangeability then yields <a id="pil:drainedlaw"></a>


$$

 \left|\mathbb P(Q=r)-\left(w_r-(Bu)_r/N\right)\right|\le\mathbb P(D^c),

$$

Equation (44).

 provided $D$ has positive probability. The coefficient belongs to $[0,1]$ because it equals $n_r/N$ on $D$. This is an exact census identity plus a finite failure bound, not an exact unconditional finite-time law.



<a id="section-11-2"></a>

### 11.2 A coherent writer preserving a drained count



<a id="source-lemma-15"></a>

**Lemma 11.4 (Retained copy of a drained endpoint).**

<a id="pil:writer"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and the stated driven programme.*

 Let a target vertex $v$ receive a monotone integrated current $W\in[0,1]$ on a single productive edge from the ready sector, with no other active incident edge. Suppose its production packets have drained. Then $n_v=\lfloor NW\rfloor$ and $w_v=W$. Include from the outset a blank ordinary bit $m=0$ and a fresh edge $f: (v,0)\longrightarrow(v,1)$ with zero initial action and residue. After production, with the source blocks switched off, apply <a id="pil:writerH"></a>


$$

 H_{\rm copy}=\omega\bigl(|v,1\rangle\langle v,0|+|v,0\rangle\langle v,1|\bigr)\otimes I_{\rm fibre}

$$

Equation (45).

 for $\tau=\pi/(2\omega)$, and then switch this block off for a hold $h_C$. The copy edge exports exactly $\lfloor NW\rfloor$ positive packets. Conditional on production drainage, the probability that not all of these packets have been served at the end is bounded by <a id="pil:writererror"></a>


$$

 B_f\exp(-\kappa_f\mu_N h_C/N)

$$

Equation (46).

 in the Poisson comparison. On successful drainage every carrier originally at $v$ has $m=1$, all others have $m=0$, and the bit remains unchanged throughout any subsequent idle continuation. No direct pilot-coordinate read force is introduced. 

 <a id="source-proof-34"></a>

**Proof.**

During the copy, $w_{v,1}(s)=W\sin^2(\omega s)$, so the copy current is nonnegative and its total action is $W$. Its final residue therefore equals the production residue $u_{\rm prod}=\{NW\}$. At the final field configuration $w_{v,0}=0$ and the census at $(v,0)$ reads 

$$

 n_{v,0}=-u_{\rm prod}+Z_f+u_f=Z_f.

$$

 Thus every queued copy packet always has an eligible origin carrier during the final hold, even though the coherent origin weight has become zero. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) with $c_N=1/N$ proves [(46)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writererror). No source packets remain on the successful production event, and no coherent current emits further packets after the copy. Once $Z_f=0$, no event can alter the copied bit under idle continuation. The writer is an ordinary coherent Hamiltonian on the enlarged graph, exactly the interaction type allowed by P3. 

□





*Status: Scope; autonomous implementation at this precision not established.*

 This proof covers a prescribed driven Hamiltonian programme. The companion's autonomous clock construction is a different enlarged graph. Its coarse Bell-limit error cannot establish preservation of an $N^{-1}$ correction; an autonomous implementation at that precision would require its own estimate. The present result also specifies a finite retained idle record, not a passive record of every native earlier excursion.



<a id="section-11-3"></a>

### 11.3 An operational same-density-matrix witness



Set $\hbar=1$, take $g>0$, and use the position graph $0\to1$ with an internal qubit fibre. Starting with all carriers at $(0,m=0)$, run <a id="pil:productionH"></a>


$$

 H=g\sigma_x^{\rm pos}\otimes\operatorname{diag}(1,2)^{\rm int}
 \quad\hbox{for }0<t\le\pi/(6g).

$$

Equation (47).

 For internal weight $p=|\langle0|\psi\rangle|^2$, define <a id="pil:wJ"></a>


$$
\begin{aligned}
 w_p(s)&=p\sin^2(gs)+(1-p)\sin^2(2gs),\\
 J_p(s)&=g\sin(2gs)[p+4(1-p)\cos(2gs)].
\end{aligned}
$$

Equation (48).

 The current is nonnegative and $w_p\le3/4$ on the stated interval. Hold with the source block off for $h_P$, perform the writer [(45)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writerH) for the $q=1$ sector, and hold for $h_C$. The bit and the entire enlarged ordinary graph are specified before preparation; the writer is the same for every unknown input.

<a id="source-theorem-11"></a>

**Theorem 11.5 (Finite retained-record non-affinity).**

<a id="pil:retained"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with zero initial residues, the driven programme and the finite-gas comparison.*

 Let $T$ include production, both holds, copy, and any required idle retention, and supply the beam and receivers for that horizon. With input-independent budgets $B_e,B_f$, set <a id="pil:epsilon"></a>


$$

 \epsilon_N=B_e e^{-\kappa_e\mu_N h_P/4}
             +B_f e^{-\kappa_f\mu_N h_C/N}
             +(R_NT)^2/M_N.

$$

Equation (49).

 Then the retained ordinary bit satisfies <a id="pil:bitlaw"></a>


$$

 \left|\mathbb P_p(m=1)-\frac{\lfloor Nw_p(t)\rfloor}{N}\right|\le\epsilon_N.

$$

Equation (50).

 For equal mixtures of the internal $Z$ and $X$ basis states, which both prepare $I/2$, write $A=\sin^2(gt)$ and $C=\sin^2(2gt)$. Their bit probabilities obey <a id="pil:properlaw"></a>


$$
\begin{aligned}
 P_Z&=\frac{\lfloor NA\rfloor+\lfloor NC\rfloor}{2N}+e_Z,\\
 P_X&=\frac{\lfloor N(A+C)/2\rfloor}{N}+e_X,
 \qquad |e_Z|,|e_X|\le\epsilon_N.
\end{aligned}
$$

Equation (51).

 For every integer $N\ge2$ there is a nonempty open interval of production times on which <a id="pil:propergap"></a>


$$

 P_Z-P_X\ge\frac1{2N}-2\epsilon_N.

$$

Equation (52).

 Consequently a sufficiently resourced finite driven implementation is operationally leaky relative to the internal density matrix, within this declared sector constitution. 

 <a id="source-proof-35"></a>

**Proof.**

The production census is $n_0=N(1-w_p)+Z_e+u_e\ge N/4$, since no negative packet is emitted. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) bounds production failure by the first term of [(49)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:epsilon). Conditional on its complement, Lemma [11.4](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writer) supplies the second term. The full spatial-gas comparison adds the third term once. On successful production and copy drainage, the bit-one census is deterministically $\lfloor Nw_p(t)\rfloor$. The good event is carrier-label invariant, so Lemma [11.1](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:exchange) proves [(50)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:bitlaw); averaging proves [(51)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:properlaw).

For the open interval, let $y=N\sin^2(2gt)$ and $x=N\sin^2(gt)$. The increasing $y$ reaches $1$ strictly before $\pi/(6g)$ because its terminal value is $3N/4>1$. At that crossing $x=1/(4\cos^2(gt))\le1/3$. Just beyond it, $1<y<2$, $x<1$ and $x+y<2$. Hence $\lfloor x\rfloor=0$, $\lfloor y\rfloor=1$, $\lfloor(x+y)/2\rfloor=0$, giving the ideal difference $1/(2N)$. The two errors yield [(52)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:propergap). 

□



One explicit witness window is $1<N\sin^2(2gt)<9/8$; throughout it $x\le y/3$, so all three required floor values are fixed. The interior choice $N\sin^2(2gt)=17/16$ leaves a positive action margin from the discontinuities. Such a margin must be preserved when calibrating a finite implementation.

The word “ideal” in the last proof means the exactly drained count coefficient. The actual finite-time probabilities retain the displayed error bounds. At $t=\pi/(6g)$ the ideal magnitude is $1/(2N)$ precisely for $N\equiv2\pmod4$, and zero otherwise. A fixed arbitrary time therefore cannot support a universal lower bound for every $N$.

<a id="source-corollary-4"></a>

**Corollary 11.6 (Irreducible density-matrix simulation error).**

<a id="pil:simulator"></a> 

*Status: Proved conditional on the premises of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained).*

 On a witness interval of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained), any proposed record law depending only on the internal density matrix has worst-case total-variation error, on the two specified preparations, at least $1/(4N)-\epsilon_N$. 

 <a id="source-proof-36"></a>

**Proof.**

The proposed law is the same for both preparations. The triangle inequality makes one of its two distances at least half the distance between the actual bit laws, which is at least the probability gap in [(52)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:propergap). 

□





<a id="section-11-4"></a>

### 11.4 A retained distant-setting witness in the same model



Alice has pointer values $r,0,1$ and an internal key qubit; Bob has position $q=0,1$, an internal qubit and the blank bit $m=0$. Their keys start in $\Phi^+=(|00\rangle+|11\rangle)/\sqrt2$, while every carrier starts at $(r,0,0)$. For $x=Z$ or $X$ let $(x_0,x_1)$ be the corresponding real qubit basis. Alice applies <a id="pil:AliceH"></a>


$$

 H_A=\Omega\sum_{a=0,1}(|a\rangle\langle r|+|r\rangle\langle a|)
                  \otimes|x_a\rangle\langle x_a|

$$

Equation (53).

 for $t_A=\pi/(2\Omega)$ and then switches it off. After a hold $h_A$, Bob applies [(47)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:productionH) for $t_B\le\pi/(6g)$, holds for $h_B$, and applies a single Bob-local copy Hamiltonian <a id="pil:Bobcopy"></a>


$$

 H_C=I_A\otimes |1\rangle\langle1|_{q}
                \otimes\omega\sigma_x^{m}\otimes I_{\rm keys}

$$

Equation (54).

 for $\pi/(2\omega)$, followed by $h_C$. This is the same numerical Bob programme for both settings; it does not read Alice's actual pointer or a configuration-restricted action ledger.

<a id="source-theorem-12"></a>

**Theorem 11.7 (Finite retained setting dependence).**

<a id="pil:signal"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 with zero initial residues, the driven programme and the finite-gas comparison.*

 Use a common bound $B_*\ge N+2$ on each productive or copy edge and let $T$ cover the whole experiment and requested idle retention. Define <a id="pil:signalerror"></a>


$$

 \epsilon_N^{AB}=2B_*\left(e^{-\kappa_-\mu_Nh_A/N}
             +e^{-\kappa_-\mu_Nh_B/N}
             +e^{-\kappa_-\mu_Nh_C/N}\right)+(R_NT)^2/M_N.

$$

Equation (55).

 Then Bob's retained bit satisfies <a id="pil:signallaw"></a>


$$

 P_x(m=1)=\frac{\lfloor NW_0^x\rfloor+\lfloor NW_1^x\rfloor}{N}+e_x,
 \qquad |e_x|\le\epsilon_N^{AB},

$$

Equation (56).

 where, for $A=\sin^2(gt_B)$ and $C=\sin^2(2gt_B)$, 

$$

 (W_0^Z,W_1^Z)=(A/2,C/2),\qquad W_0^X=W_1^X=(A+C)/4.

$$

 For every $N\ge3$ a nonempty open interval of $t_B$ gives <a id="pil:signalgap"></a>


$$

 P_Z(m=1)-P_X(m=1)\ge1/N-2\epsilon_N^{AB}.

$$

Equation (57).

 This is a setting-dependent ordinary record law of the finite nonrelativistic constitution. It is not yet a demonstrated spacelike implementation or an experimental observation. 

 <a id="source-proof-37"></a>

**Proof.**

Alice's field evolves to $-i\sum_a|a\rangle|x_a\rangle_A|x_a\rangle_B/\sqrt2$, with monotone integrated actions $1/2$ on her two productive edges. At the end of her rotation the ready-vertex census is 

$$

 n_r=Z_{A,0}+Z_{A,1}+u_{A,0}+u_{A,1}.

$$

 Whenever an Alice packet remains queued, at least one carrier is eligible. Lemma [11.3](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:drain) bounds Alice failure by $2B_*e^{-\kappa_-\mu_Nh_A/N}$. For odd $N$, a ready carrier remains even after drainage; it is retained, not discarded or renormalized.

In Alice slice $a$, Bob's wave has squared norm $1/2$ and internal input $x_a$. Its productive action is $W_a=\tfrac12 w_{p_a}(t_B)$, yielding the stated values. Conditional on Alice drainage, the census at $(a,0,0)$ during Bob's hold is 

$$

 n_{a,0,0}=Nw_{a,0,0}-u_{A,a}+Z_{B,a}+u_{B,a}.

$$

 Here $w_{a,0,0}\ge1/8$, $0\le u_{A,a}<1$, and $u_{B,a}\ge0$. If $Z_{B,a}\ge1$, the right side is positive, so the integer count is at least one. Bob's production failure is bounded by the second exponential term in [(55)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalerror).

On successful production drainage, $n_{a,1,0}=\lfloor NW_a\rfloor$ and $w_{a,1,0}=W_a$. Hamiltonian [(54)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:Bobcopy) is the direct sum of identical ordinary copy rotations in the Alice slices. Each has copy action $W_a$, and at its final origin the production and copy residues cancel exactly as in Lemma [11.4](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:writer). Each queued copy packet has at least one eligible carrier, giving the third exponential term. On complete success the number of carriers with $m=1$ is the deterministic sum of floors in [(56)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signallaw). Label exchangeability and one full-history gas comparison prove the claimed law. The branch $a=r$ has zero field after Alice's rotation and exports no Bob packets; any odd-$N$ stranded carrier remains with $m=0$ and is included in the law.

Put $x=N\sin^2(gt_B)/2$, $y=N\sin^2(2gt_B)/2$. Since $y$ increases to $3N/8>1$ for $N\ge3$, it crosses $1$ before the interval ends; at the crossing $x\le1/3$. Just afterwards $\lfloor x\rfloor=0$, $\lfloor y\rfloor=1$ and $\lfloor(x+y)/2\rfloor=0$. The difference of the ideal numerators is therefore $1$, proving [(57)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalgap). 

□



At the fixed endpoint $t_B=\pi/(6g)$ the ideal numerator is $\lfloor N/8\rfloor+\lfloor3N/8\rfloor-2\lfloor N/4\rfloor$: it is $1$ for $N\equiv3\pmod8$, $-1$ for $N\equiv4,5\pmod8$, and $0$ otherwise. The witness times depend on $N$; unknown resource number, time calibration and control errors therefore belong to an actual test's specification.

An explicit open window is $1<N\sin^2(2gt_B)/2<9/8$, valid for every $N\ge3$. Its width is of order $1/(g\sqrt N)$ as $N$ grows. Taking the scaled action at its interior value $17/16$ avoids an exact exporter threshold; arbitrarily precise timing at a threshold is not needed.

<a id="source-corollary-5"></a>

**Corollary 11.8 (Irreducible no-signalling simulation error).**

<a id="pil:nosignalsimulator"></a> 

*Status: Proved conditional on the premises of Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal).*

 On a witness interval of Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal), every candidate law whose Bob-bit marginal is independent of Alice's setting has worst-case total-variation error on the two settings at least $1/(2N)-\epsilon_N^{AB}$. 

 <a id="source-proof-38"></a>

**Proof.**

Apply the same triangle-inequality argument as in Corollary [11.6](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:simulator) to Bob's two retained marginal laws. Marginalization contracts total variation, so the lower bound also holds for a proposed complete joint law. 

□





<a id="section-11-5"></a>

### 11.5 Joint finite resources and empirical scope



All queues in these protocols are one-signed; no fast-recombination approximation is used. Recombination channels may still contribute to the candidate rate and gas budget. For any fixed $N$ and desired positive error, choose the holds using [(49)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:epsilon) or [(55)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signalerror), then choose $M_N$ using the resulting $R_N,T$. This is a noncircular finite choice, since $R_N$ is independent of $M_N$.

For example, in fixed units let $B_e=O(N)$, $\mu_N=N^{1/2}$, $a_e=N^2$, take each conservative hold as $4N\log N/(\kappa_-\mu_N)$ and choose $M_N=N^{12}$ times a sufficiently large fixed constant. The graph has a fixed finite number of edges, so $R_N=O(N^4)$, $T=O(\sqrt N\log N)$ and 

$$

 (R_NT)^2/M_N=O(N^{-3}\log^2N)=o(N^{-2}).

$$

 The drainage contributions are $O(N^{-3})$ and the total errors are $o(N^{-1})$. Every beam, packet bank and receiver bank is finite at each $N$. This resource-dependent experiment is controlled by the direct contact estimate, not by importing a fixed-horizon convergence theorem into a growing-horizon regime.

If an implementation of the stated setting witness bounds the actual probability difference by $\sigma$, and its physical preparation, timing, copy and drainage errors have separately been bounded by the stated $\epsilon_N^{AB}$ (plus any additional calibrated implementation errors), then 

$$

 1/N\le\sigma+2\epsilon_N^{AB}.

$$

 This is a conditional inference for this protocol. Generic no-signalling observations supply no numerical bound on $N$ without the protocol's resource identification and error calibration. The theory is nonrelativistic; a causal claim about spacelike separation requires an independently specified relativistic embedding. The result is nevertheless operational within the driven constitution: the output is a retained ordinary bit rather than an inaccessible pilot census.



<a id="section-11-6"></a>

### 11.6 Why randomizing only the initial residue does not restore Born endpoints



The following obstruction concerns a proposed modification, not the declared ready-zero constitution. It tests the suggestion that randomizing the initial fractional residue might repair its floor law while leaving the first-hit-and-reset exporter unchanged.

<a id="source-proposition-7"></a>

**Proposition 11.9 (An initial-residue obstruction).**

<a id="pil:residueobstruction"></a> 

*Status: Proved conditional on the stated modified exporter.*

 Fix $N\ge1$. Consider a single edge, initially empty of packets and with all carriers at its origin. Replace its zero initial residue by a random $U\in(-1,1)$, independently drawn from the ready gas with a law fixed independently of the subsequent programme; retain the original exporter thresholds $\pm1$, reset to zero after each hit, and the original carrier reactions. If the ideal drained target probability equals the Born weight for every monotone forward action $x=Nw:0\to a$ with $0<a<1$, then $U$ must be uniform on $[0,1)$. For this unique law, the forward-and-return action $x:0\to a\to0$ has ideal drained target probability $a/N$, although its final Born target weight is zero. Thus no fixed law for the initial residue alone restores Born endpoint probabilities for both families. 

 <a id="source-proof-39"></a>

**Proof.**

The inventory must include the changed initial constant. For a vector of initial residues $U$, it is 

$$

 n=Nw-BZ-Bu+BU.

$$

 In the single-edge target coordinate this reads $n_1=x-Z-u+U$. Writing $k$ for signed cumulative exports, the unchanged exporter obeys $u=U+x-k$, so $n_1=k-Z$. At a drained endpoint $n_1=k$. Exchangeability is unchanged by a carrier-independent initial residue.

During $0\le x\le a<1$, no negative threshold can be reached and at most one positive export occurs. Including a hit at the endpoint, 

$$

 k=\mathbf1_{\{U\ge1-a\}},\qquad
 \mathbb P(Q=1)_{\rm drained}=\frac{\mathbb P(U\ge1-a)}{N}.

$$

 Equality to $a/N$ for every $a\in(0,1)$ forces $\mathbb P(U\ge b)=1-b$ for every $b\in(0,1)$. Letting $b\downarrow0$ gives $\mathbb P(U>0)=1$, and these tail probabilities uniquely specify the uniform law on $[0,1)$.

Now reverse the action after reaching $a$. On the exported branch $U\ge1-a>0$, the residue decreases from $U+a-1$ to $U-1>-1$, so it never reaches the negative threshold. On the other branch it decreases from $U+a<1$ to $U\ge0$, again without an export. Hence the final count remains $k=\mathbf1_{\{U\ge1-a\}}$. At most one positive packet needs to drain; whenever it remains alive, all $N$ carriers are still at the origin. Its non-drain probability after an idle hold $h$ is at most $e^{-\kappa\mu_Nh}$ in the Poisson comparison. The finite-gas comparison adds $\delta_{\rm g}$. The returned finite-hold endpoint therefore approaches $a/N$ with controlled error, whereas $w_1=0$. A two-level forward Rabi pulse followed by its reverse realizes the stated weight path; no change to the carrier or contact law is used. 

□



This obstruction rules out a specific proposed repair of endpoint equivariance. It does not exclude a changed exporter, programme-dependent preparation laws, or other sealing mechanisms. Nor does it prove an accessible retained-record discrepancy at the returned zero-weight endpoint: the coherent writer above has no pilot weight there to drive its copy. That physical access question remains distinct from the endpoint census.



<a id="section-11-7"></a>

### 11.7 A proved undrained asymptotic and its access boundary



The following result strengthens the finite calculation at the level of instantaneous positions. It does not assert that a subsequent material reader preserves an undrained endpoint at the same accuracy.

<a id="source-theorem-13"></a>

**Theorem 11.10 (Single-edge undrained asymptotic).**

<a id="pil:undrained"></a> 

*Status: Proved conditional on the pilot constitution P1–P4 and the stated asymptotic regime.*

 Let $w\in C^2([0,T])$ satisfy $w(0)=0$, $J=\dot w\ge0$, and $1-w\ge c>0$. Consider the single-edge ready pilot model with zero residues, scalar response $\kappa>0$, deterministic export count $k(t)=\lfloor Nw(t)\rfloor$, and no hold or reader. Let $\mu_N\to\infty$, $\mu_N/N\to0$, and suppose the spatial-gas comparison error on $[0,T]$ satisfies $\mu_N\delta_{\mathrm g}\to0$. Then, for every fixed $t>0$, <a id="pil:undrainedlimit"></a>


$$

 \mu_N\left(w(t)-\mathbb P(Q(t)=1)\right)
       \longrightarrow\frac{J(t)}{\kappa(1-w(t))}.

$$

Equation (58).

 For [(48)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:wJ) at $t=\pi/(6g)$, the equal $Z$ and $X$ preparations consequently satisfy <a id="pil:undrainedgap"></a>


$$

 \mu_N(P_X(Q(t)=1)-P_Z(Q(t)=1))
       \longrightarrow\frac{5\sqrt3\,g}{6\kappa}>0.

$$

Equation (59).

 

 <a id="source-proof-40"></a>

**Proof.**

Work first in the Poisson comparison and write $n=n_1$, $Z=k-n$, $r=w-k/N\in[0,1/N)$ and $Y=w-n/N=(Z/N)+r\ge0$. Between deterministic exports the carrier count has the exact birth generator <a id="pil:generator"></a>


$$

 \mathcal L_t f(n)=\frac{\kappa\mu_N}{N}(k(t)-n)(N-n)[f(n+1)-f(n)].

$$

Equation (60).

 The exporter does not itself change $n$. Every queued packet has service hazard $\kappa\mu_N n_0/N\ge\kappa\mu_N c$, because $n_0/N=1-w+Y\ge c$.

We give the required second-moment estimate explicitly. For each packet, construct an independent baseline clock of rate $a=\kappa\mu_Nc$, with a supplementary state-dependent clock of rate $\kappa\mu_N(n_0/N-c)$. On either service, choose uniformly among the current origin carriers. Every eligible packet–carrier pair then has total rate $\kappa\mu_N/N$, so this construction has precisely the original carrier/packet generator. A packet alive at $t$ must have survived its first baseline ring after its deterministic export time $\tau_i$. Therefore $Z(t)$ is dominated by 

$$

 \widetilde Z(t)=\sum_{i\le k(t)}\mathbf1_{\{E_i>t-\tau_i\}},
 \qquad E_i\ {\text{independent}},\quad E_i\sim\operatorname{Exp}(a).

$$

 Writing $K=\|J\|_\infty$, Stieltjes integration and $|\lfloor Nw\rfloor-Nw|\le1$ give 

$$

 m(t):=\mathbb E\widetilde Z(t)
 =\int_{[0,t]} e^{-a(t-s)}\,d\lfloor Nw(s)\rfloor
 \le NK/a+1.

$$

 Since the indicators are independent, $\mathbb E\widetilde Z^2\le m^2+m$. Consequently, uniformly in $t$, <a id="pil:secondmoment"></a>


$$

 \mathbb E Y^2\le\frac{m^2+3m+1}{N^2},\qquad
 m\le\frac{NK}{\kappa\mu_Nc}+1.

$$

Equation (61).

 No independence of actual packet lifetimes has been assumed; only their comparison clocks are independent.

Let $d(t)=\mathbb E Y(t)$. The exact generator and $1-n/N=1-w+Y$ imply, almost everywhere, <a id="pil:deficitODE"></a>


$$
\begin{aligned}
 d'&=J-\kappa\mu_N(1-w)d+q_N,\\
 q_N&=-\kappa\mu_N\mathbb E Y^2
       +\kappa\mu_N r(1-w+d).
\end{aligned}
$$

Equation (62).

 Since $0\le d\le1$, [(61)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:secondmoment) yields 

$$

 \|q_N\|_\infty\le Q_N:=\kappa\mu_N\left[
 \frac{m_*^2+3m_*+1}{N^2}+\frac2N\right]
 =O(\mu_N^{-1}+\mu_N/N)=o(1).

$$

 Here $m_*:=NK/(\kappa\mu_Nc)+1$. The bounded jumps in $k$ and $r$ cancel in $Y$; $d$ is absolutely continuous and the almost-everywhere equation suffices. Variation of constants from $d(0)=0$ gives 

$$

 \mu_Nd(t)=\mu_N\int_0^t
 e^{-\kappa\mu_N\int_s^t(1-w(v))\,dv}[J(s)+q_N(s)]\,ds.

$$

 Set $F=J/[\kappa(1-w)]$. Integration by parts of the $J$ term, using the derivative of the exponential with respect to $s$, proves the explicit bound <a id="pil:undrainederror"></a>


$$

 |\mu_Nd(t)-F(t)|\le
 |F(0)|e^{-\kappa\mu_Nct}
 +\frac{\|F'\|_\infty}{\kappa\mu_Nc}
 +\frac{Q_N}{\kappa c}.

$$

Equation (63).

 All terms vanish. Exchangeability identifies $\mathbb E n/N=\mathbb P(Q=1)$. The gas comparison adds at most $\mu_N\delta_{\mathrm g}$ to [(63)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainederror), proving [(58)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainedlimit).

At $t=\pi/(6g)$, for $p=1,0,1/2$ respectively, the limits are 

$$

 F_1=\frac{2\sqrt3g}{3\kappa},\qquad
 F_0=\frac{4\sqrt3g}{\kappa},\qquad
 F_{1/2}=\frac{3\sqrt3g}{2\kappa}.

$$

 The Born terms cancel between the equal-density-matrix ensembles. Thus $\mu_N(P_X-P_Z)\to(F_1+F_0)/2-F_{1/2}=5\sqrt3g/(6\kappa)$. 

□





*Status: Scope; retained-reader extension not established.*

 This establishes the endpoint coefficient for the concrete monotone ready-state family. It does not establish the conjecture for an arbitrary late one-signed window following mixed queues, where additional initial-stock and recombination estimates would be required. More importantly, a final configuration is not automatically a stored historical record. During a later copy the old undrained production packets may still move carriers; a fully drained copy can erase the lag and recover a floor law. Therefore [(59)](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrainedgap) is an instantaneous-position distinction. Converting its larger $\mu_N^{-1}$ size into a retained record with error $o(\mu_N^{-1})$ remains a separate physical task. The retained $N^{-1}$ results above do not have that gap.

---

# Section 12: Setting dependence, controlled nonequilibrium, and access

<a id="section-12"></a>

## 12 Setting dependence, controlled nonequilibrium, and access

 <a id="sig:section"></a>

The statistical distinction between two preparations is not itself a communication channel. A channel additionally requires reproducible preparation, independent message choices, and a receiving apparatus whose declared access does not already transmit the message. The next results separate these requirements.



<a id="section-12-1"></a>

### 12.1 A sharp quantitative version of the transition-set argument



<a id="source-theorem-14"></a>

**Theorem 12.1 (CHSH dependence and the exact total-variation budget).**

 <a id="sig:budget"></a> 

*Status: Proved.*

 Let $(\Lambda,\mathcal A,\nu)$ be a probability space. Let measurable functions $A_x,B_{xy}:\Lambda\to\{-1,1\}$, $x,y\in\{0,1\}$, describe a deterministic experiment with a common setting-independent initial law $\nu$. The absence of $y$ from $A_x$ is a causal hypothesis, for example forward dynamics with Alice's retained record fixed before Bob chooses $y$. Suppose 

$$

 S=\int(A_0B_{00}+A_0B_{01}+A_1B_{10}-A_1B_{11})\,d\nu>2,
 \qquad \nu(B_{0y}=1)=\nu(B_{1y}=1).

$$

 Define 

$$

 D_y=\{B_{0y}\ne B_{1y}\},\quad \kappa_y=\nu(D_y),\quad
 g_y=\mathbf1_{\{B_{0y}=1\}}-\mathbf1_{\{B_{1y}=1\}}.

$$

 Then 

1. (i) The measure of the union, rather than merely the sum of its two measures, obeys <a id="sig:union"></a>


$$

 \nu(D_0\cup D_1)\ge\frac{S-2}{2}.

$$

Equation (64).

 Consequently $\max_y\kappa_y\ge(S-2)/4$.

2. (ii) For $P\ll\nu$ with density $h$, the difference of Bob's plus probabilities is <a id="sig:signal"></a>


$$

 \Sigma_y(P)=\int g_yh\,d\nu=\int g_y(h-1)\,d\nu,
 \qquad |\Sigma_y(P)|\le2{\mathrm{TV}}(P,\nu).

$$

Equation (65).

3. (iii) For $|\epsilon|\le1$, the bounded density $h_\epsilon=1+\epsilon g_y$ satisfies 

$$

 {\mathrm{TV}}(h_\epsilon\nu,\nu)=\frac{|\epsilon|\kappa_y}{2},\qquad
 \Sigma_y(h_\epsilon\nu)=\epsilon\kappa_y.

$$

 More generally, if $\kappa_y>0$, the exact optimization over all absolutely continuous laws at distance at most $d\in[0,1]$ is <a id="sig:envelope"></a>


$$

 \sup_{\substack{P\ll\nu\,;\ {\mathrm{TV}}(P,\nu)\le d}}
 |\Sigma_y(P)|
 =\min\{2d,\ d+\kappa_y/2,\ 1\}.

$$

Equation (66).

 If $\kappa_y=0$, the supremum is zero for every $d$.

4. (iv) If $\kappa_y>0$, the non-signalling bounded densities form a relatively closed set with empty interior in the space of bounded probability densities, equipped with the $L^1(\nu)$ topology.

 



<a id="source-proof-41"></a>

**Proof.**

Let $C=A_0B_{00}+A_0B_{01}+A_1B_{10}-A_1B_{11}$. Outside $D_0\cup D_1$, it equals $A_0(B_{00}+B_{01})+A_1(B_{00}-B_{01})\in\{-2,2\}$. Everywhere $C\le4$, so $C\le2+2\mathbf1_{D_0\cup D_1}$. Integration gives [(64)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:union). This is the elementary CHSH argument <a id="citation-33"></a>[[4](/sealed-or-leaky/references#bib-CHSH69)], localized to the set on which locality fails.

For (ii), subtract the two probabilities and use $\int g_y\,d\nu=0$. As $g_y\in[-1,1]$, the total-variation norm bound gives [(65)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:signal). Part (iii)'s first two identities follow from $\int g_y=0$, $|g_y|=g_y^2=\mathbf1_{D_y}$, and $1+\epsilon g_y\ge0$.

For the optimization, suppress $y$ and set $a=\kappa_y/2>0$. The sets $G_+=\{g=1\}$ and $G_-=\{g=-1\}$ each have $\nu$-mass $a$; $G_0=\{g=0\}$ has mass $b=1-2a$. The preceding bound gives $|\Sigma|\le2d$. Also $\Sigma=P(G_+)-P(G_-)\le P(G_+)\le a+d$, and the analogous inequality holds for $-\Sigma$. Finally $|\Sigma|\le1$.

All three bounds are attained in the relevant ranges by densities constant on $G_+,G_-,G_0$. For $0\le d\le a$, replace their masses $(a,a,b)$ by $(a+d,a-d,b)$; the distance is $d$ and the signal is $2d$. For $a\le d\le1-a$, replace them by $(a+d,0,1-a-d)$; the distance is $d$ and the signal is $a+d$. When $b=0$, this second range is a single endpoint. For $d\ge1-a$, the measure $\nu(\cdot\mid G_+)$ has distance $1-a$ and signal one. These constructions prove [(66)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:envelope). When $\kappa_y=0$, $g=0$ almost surely for every $P\ll\nu$.

For (iv), $h\mapsto\int g_yh\,d\nu$ is continuous on $L^1$. If a bounded density $h$ gives zero signal, then $(1-t)h+t(1+g_y)$ is a bounded density converging to $h$ as $t\downarrow0$, with signal $t\kappa_y\ne0$. 

□



<a id="source-remark-4"></a>

**Remark 12.2 (Scope and sharpness).**

 

*Status: Scope.*

 <a id="sig:scope"></a> Equation [(64)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:union) is sharp in this abstract class: mix a deterministic local strategy attaining CHSH value $2$ with a one-way deterministic realization of a PR box attaining $4$, and include a common unbiased output sign. The marginal laws are unbiased, while the dependent fraction equals $(S-2)/2$. This construction is a sharpness example, not an assertion of physical PR-box resources.

Valentini's transition-set argument already establishes the existence of signalling nonequilibrium in deterministic completions reproducing quantum correlations, while explicitly allowing exceptional non-signalling distributions and merely hypothetical preparation <a id="citation-34"></a>[[13](/sealed-or-leaky/references#bib-V02)]. The theorem above supplies a union-measure refinement and an exact TV-budget optimization; no historical priority is claimed for these elementary refinements. It does not show that every nonequilibrium distribution signals. For example, adjoining an independent hidden coordinate unused by every outcome and changing only its law gives nonzero total variation without a signal. Nor does topological genericity in all bounded densities imply genericity in a physically accessible preparation family, which may lie wholly in the zero-signal set. Calling $\nu$ and $P$ a common readout fiber further requires a specified readout, such as the common wave, that omits their different configuration laws. 





<a id="section-12-2"></a>

### 12.2 A finite massive realization: replacing an exact-record premise



An exact two-party CHSH experiment need not be imported as a premise. A finite noisy realization suffices and can be constructed from the declared driven massive inventory.

<a id="source-proposition-8"></a>

**Proposition 12.3 (Semibounded two-party Gaussian writers).**

 <a id="sig:massive"></a> 

*Status: Proved conditional on the massive constitution and its forced writer.*

 Adopt the massive constitution's spinor Schrödinger inventory, kinetic-momentum guidance law, and complete initial equilibrium <a id="citation-35"></a>[[11](/sealed-or-leaky/references#bib-RM), labels mc:ax:material, mc:ax:motion, mc:ax:eq]. Two local finite massive pointers can realize deterministic recorded signs $A_x,B_{xy}$ with one common initial law, with Alice's record fixed before Bob's programme, such that <a id="sig:massiveCHSH"></a>


$$

 S=2\sqrt2\,v_Av_B,\qquad
 v_i=1-2\delta_i,\qquad
 \delta_i=\overline\Phi\!\left(\frac{L_i}{2\sigma_i}\right),

$$

Equation (67).

 and both parties' equilibrium marginals are unbiased and independent of the other setting. Here $\overline\Phi$ is the standard normal upper tail. In particular, $v_Av_B>1/\sqrt2$ gives $S>2$ at finite resources. 



<a id="source-proof-42"></a>

**Proof.**

Use the initial two-qubit state ${\lvert\Phi^+\rangle}=2^{-1/2}({\lvert00\rangle}+{\lvert11\rangle})$, independent ready key registers, and independent oscillator ground packets 

$$

 \phi_i(y)=(2\pi\sigma_i^2)^{-1/4}e^{-y^2/(4\sigma_i^2)},\qquad
 \sigma_i^2=\frac{\hbar}{2M_i\omega_i}.

$$

 All these initial waves, hence their equilibrium configuration law, are the same for the four setting pairs. Settings select subsequent Hamiltonian coefficients, not a different initial distribution.

Choose ideal qubit observables 

$$

 A_0^{\rm op}=\sigma_z,\quad A_1^{\rm op}=\sigma_x,\quad
 B_0^{\rm op}=(\sigma_z+\sigma_x)/\sqrt2,\quad
 B_1^{\rm op}=(\sigma_z-\sigma_x)/\sqrt2.

$$

 Their ideal CHSH value is $2\sqrt2$. For each local projective measurement, a bounded internal gate coherently writes its two projectors to a retained local key with states ${\lvert0\rangle},{\lvert1\rangle}$. No actual spin value or collapse is inserted. Write key $1$ to the local position using 

$$

 H_i(t)=\frac{p_i^2}{2M_i}
       +\frac{M_i\omega_i^2}{2}(y_i-c_i(t)K_i)^2,
 \quad K_i={\lvert1\rangle}{\langle1\rvert},
 \quad c_i=b_i+\ddot b_i/\omega_i^2,

$$

 where $b_i$ is smooth, starts at zero, ends at $L_i$, and has zero velocity and acceleration at each endpoint. This is a nonnegative Hamiltonian; the preliminary internal gates are bounded. Substitution in the Schrödinger equation gives, in the two key sectors, a ground packet at zero and a coherently displaced ground packet at $b_i(t)$, with phase gradient $M_i\dot b_i/\hbar$. This is precisely the forced writer proved in <a id="citation-36"></a>[[11](/sealed-or-leaky/references#bib-RM), mc:prop:writer].

Run Alice first, then hold her oscillator with $c_A=L_A$, while Bob runs his local gate and writer. Alice's wave in each orthogonal retained-key sector is now a real displaced ground packet times a spatially constant phase, which may depend on the key. Therefore $j_A=0$ pointwise, even while Bob's coefficients evolve. Alice's actual position and its threshold sign remain fixed. Forward uniqueness of guidance gives the same Alice sign for either subsequent Bob choice.

At the final time the joint density is 

$$

 \sum_{a,b=0}^1 p_{ab}^{xy}\,
  |\phi_A(y_A-aL_A)|^2|\phi_B(y_B-bL_B)|^2,
 \qquad
 p_{ab}^{xy}=\|(P_a^x\otimes P_b^y)\Phi^+\|^2.

$$

 Orthogonal keys remove all cross terms. Threshold at $L_i/2$ and assign sign $+1$ to label $0$, $-1$ to label $1$. A conditional label is read incorrectly with the same probability $\delta_i$ for either label; the two errors are independent conditional on $(a,b)$. Thus each correlation is multiplied by $v_Av_B$ and each initially unbiased marginal stays unbiased. Equivariance transfers the density calculation to actual positions, and guidance makes their signs measurable functions of the common initial configuration. This proves the claim. For Bob's stage this uses the Gaussian wave solution tensorwise with Alice's spatial coordinate retained; it does not apply the primitive writer's unconditional one-coordinate quantile formula to an entangled trajectory. 

□



For example, $\delta_A=\delta_B=0.01$ gives $S=2\sqrt2(0.98)^2>2$. The theorem does not insert ideal infinitely separated records. It concerns the exact driven semibounded model. If a particular autonomous implementation has joint-record TV error at most $\epsilon$ for each setting pair, its CHSH value is at least $2\sqrt2v_Av_B-8\epsilon$. Any marginal and historical-record errors must also be carried through; an approximate common-clock realization does not automatically inherit the exact causal factorization used in Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget). Separate local autonomous Hamiltonians preserve equilibrium marginal no-signalling by their product unitary structure.

The nonequilibrium laws in Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget) are additional preparation resources. They violate the constitution's imposed complete initial equilibrium and therefore are not predictions for its admitted equilibrium preparations. The proposition supplies the two-party records from the constitution itself; it does not remove that preparation boundary.



<a id="section-12-3"></a>

### 12.3 Delayed action meters and the locality of their access



We now consider the explicit hypothetical classical wire excluded by the pilot constitution's access clause. On read edges $e$, suppose 

$$

 H_{\rm wire}(t)=k(t)\left(\sum_e c_e\Pi_e\right)P+P^2/(2M),
 \qquad \beta=\int_T^{T+\tau}k(t)\,dt,

$$

 with fixed real $c_e$, initial $\chi_e=0$, and no wire during production. Switch off all coherent blocks on the read edges during $[T,T+\tau]$. The pilot canonical equations then give <a id="sig:wire"></a>


$$

 Y_{\rm out}=Y_0+(T+\tau)P_0/M+\beta\sum_e c_e\Pi_e(T),
 \quad \Pi_{e,\rm out}=\Pi_e(T),\quad
 \chi_{e,\rm out}=\beta c_eP_0.

$$

Equation (68).

 Indeed $\dot P=0$, $\dot Y=k\sum c_e\Pi_e+P/M$, $\dot\chi_e=kc_eP$, and $\dot\Pi_e=0$ on this interval. This argument checks the relevant backreaction explicitly. Subsequent restarting of the coherent blocks need not be neutral when $P_0\ne0$.

<a id="source-proposition-9"></a>

**Proposition 12.4 (A proper-mixture leak).**

 <a id="sig:properwire"></a> 

*Status: Proved conditional on the hypothetical wire, which violates P3.*

 For the detuned two-position pilot programme of <a id="citation-37"></a>[[11](/sealed-or-leaky/references#bib-RM), acc:detunedH, acc:delayed], take $\Pi_e(0)=0$ and $T=\pi/(2g)$. A member with internal weight $p=|\langle0|\psi\rangle|^2$ has $\Pi_e(T)=\eta p$, $0<\eta<1$. Assume $\beta>0$ and total bounded pointer and comparator error $\gamma$. If $\gamma<\beta\eta/4$, the bit at threshold $3\beta\eta/4$ has probabilities $1/2$ and $0$ for the equal $Z$ and equal $X$ proper ensembles, respectively, although both have density matrix $I/2$. Their accessible output TV distance is at least $1/2$. With Gaussian initial pointer noise of variance $\sigma^2$, zero $P_0$ and no comparator error, instead <a id="sig:gaussianleak"></a>


$$

 {\mathrm{TV}}(Q_Z,Q_X)\ge2^{-1/2}
 \left(1-e^{-\beta^2\eta^2/(16\sigma^2)}\right)>0
 \quad(\beta\ne0).

$$

Equation (69).

 

 <a id="source-proof-43"></a>

**Proof.**

Equation [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) places each reading within $\gamma$ of $\beta\eta p$. For the $Z$ ensemble $p$ equals zero or one equally; for the $X$ ensemble $p=1/2$. The threshold gives the stated probabilities. With Gaussian noise the laws are $Q_Z=\frac12N(0,\sigma^2)+\frac12N(\beta\eta,\sigma^2)$ and $Q_X=N(\beta\eta/2,\sigma^2)$. Test them with the $[0,1]$-valued function $\exp(-(Y-\beta\eta/2)^2/(2\sigma^2))$ and perform its Gaussian integral. The difference of expectations is the right side of [(69)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:gaussianleak), which is bounded by TV. 

□



<a id="source-proposition-10"></a>

**Proposition 12.5 (Slice-sensitive and marginal action reads).**

 <a id="sig:slices"></a> 

*Status: Proved conditional on the hypothetical wire, which violates P3.*

 Consider a bipartite pilot graph with Alice's pointer $a\in\{r,0,1\}$ and Bob's position $q\in\{0,1\}$, initially at $(r,0)$ with internal keys in $\Phi^+$. Alice coherently writes her $Z$ or $X$ basis to her pointer, then idles. Bob runs the same detuned programme as above. Let $e_a=((a,0),(a,1))$ and set the read-edge initial actions to zero. Then the two occupied slices satisfy 

$$

 (\Pi_{e_0},\Pi_{e_1})=
 \begin{cases}(\eta/2,0),&x=Z,\\
 (\eta/4,\eta/4),&x=X.
 \end{cases}

$$

 A fixed weighted wire has noiseless separation $|\beta|\eta|c_0-c_1|/4$ between these choices; bounded error $\gamma$ permits perfect discrimination if this exceeds $2\gamma$. Equal weights have zero separation in this experiment. More generally, for product coherent programmes and constant weights over every Alice configuration, the summed Bob-edge action is determined by Bob's reduced density-operator history and the common initial action sum. Its delayed pointer law is independent of Alice's programme when its initial noise law is also independent. 



<a id="source-proof-44"></a>

**Proof.**

For a real chosen basis $\{x_0,x_1\}$, Alice's coherent measurement leaves wave $2^{-1/2}\sum_a{\lverta\rangle}{\lvertx_a\rangle}_A{\lvertx_a\rangle}_B{\lvert0\rangle}_{\rm pos}$, up to a common phase. Bob's product Hamiltonian preserves each slice; its edge current is one half the single-party current. Thus $\Pi_{e_a}=\eta|\langle0|x_a\rangle|^2/2$ at $T$. Substitution in [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) proves the first claims.

For the general claim, write $h_{q'q}$ for a Bob block. With a consistent edge orientation the summed current is 

$$

 \sum_a J_{((a,q),(a,q'))}
 =2\operatorname{Im}{\operatorname{tr}}\!\left(h_{q'q}\rho_B^{(q,q')}\right).

$$

 Under product unitaries $\rho_B(t)=U_B(t)\rho_B(0)U_B(t)^*$, independent of Alice's controls. Integration and [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) give the result. 

□



These formulas are sensitivity statements about the stipulated access. An unequal weight on two global configuration slices is not thereby a Bob-local interaction. It addresses a distinction indexed by Alice's pointer. A wire selecting the slice of Alice's actual configuration requires the further controlled coupling $\sum_a\mathbf1_{\{Q_A=a\}}\Pi_{e_a}P$, which is not a fixed-weight wire and is not contained in the fixed-weight wire class. If that extra global access is granted and Alice's label is an equilibrium $1/2$–$1/2$ bit fixed during the read, a threshold at $3\beta\eta/8$ gives probabilities $1/2$ versus $0$ when $\gamma<\beta\eta/8$. This conditional calculation does not construct the coupling as an admissible local receiver. Nor does the marginal action calculation prove independence of every finite-resource native record: it concerns the stated pointer law. In the Bell limit, an ordinary local quantum reader has independent marginal statistics by the separate Born-record theorem.

<a id="source-proposition-11"></a>

**Proposition 12.6 (The additional premise needed for steering a leak).**

 <a id="sig:steering"></a> 

*Status: Proved.*

 Suppose Alice can choose two remote preparations with the same Bob density matrix, and suppose Bob's one fixed local apparatus, without receiving Alice's outcome, produces laws $\sum_i p_i\mu_{\psi_i}$ and $\sum_jq_j\mu_{\phi_j}$ respectively. If these laws have TV distance $\delta>0$, Alice has a statistical channel of that distance to Bob. Without the stated equality between remote conditional preparation and proper-mixture apparatus response, a proper-mixture leak alone does not imply this channel. 

 <a id="source-proof-45"></a>

**Proof.**

The first assertion is the operational definition of a channel: a measurable event has a setting-dependent probability, with differences arbitrarily close to $\delta$ (and a maximizing event for the usual TV measure representation). For the second, a rule on full entangled waves may make Bob's response depend only on the reduced density matrix while a separate proper preparation uses its actual member wave. The proper ensemble law does not specify the apparatus response to an entangled input, so the implication has an unprovided premise. 

□



This is the precise boundary behind the relevance of Gisin's nonlinear signalling example <a id="citation-38"></a>[[6](/sealed-or-leaky/references#bib-G90)] and Polchinski's analysis of nonlinear composite systems <a id="citation-39"></a>[[8](/sealed-or-leaky/references#bib-P91)]. They do not license calling every configuration-sensitive read a local operation. A no-signalling constraint inferred from an experiment applies only after its actual preparation, coupling, retained output, timing, calibration and error budget have been matched to the model. None of these arguments alone establishes a relativistic embedding or superluminal implementation.



<a id="section-12-4"></a>

### 12.4 Statistical design for a conditional finite-pilot test

 <a id="sig:experiment"></a> 

*Status: Retained conditional statistical design from version 3; no implemented experiment claimed.*

 The observed variable in each arm is the retained memory bit, read after the specified production, drainage, copy and storage programme. The two arms use either the proper $Z/X$ preparations of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained) or Alice's two settings with Bob's fixed instrument in Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal). The nominated alternative is respectively an affine density-matrix response or a setting-independent Bob marginal on this operational domain. The microscopic initial gas law and zero-residue preparation are constitutive premises; they are not established by ordinary qubit tomography.

The nuisance parameters include $N$, $g$, the scalar contact responses, bank sizes, gas arrival rate, gas stock, all hold times, memory error and preparation accuracy. A timing interval must lie strictly inside the displayed floor window; uncertainty crossing a threshold cannot be treated by differentiating a floor function. Uncertainty in $N$ must be controlled sufficiently to certify a common window or incorporated in a specified distribution over $N$. Averaging the fixed-$N$ formula over an unknown distribution can suppress or cancel the proposed signal. Conservative bounds on drainage, finite-gas, control, preparation and record-reading errors must be propagated per arm. If these total errors are at most $\zeta$ per arm and the ideal gap is $\delta_0$, the certified gap is $\delta_*=[\delta_0-2\zeta]_+$. Merely calibrating the reduced density matrix does not bound arbitrary omitted preparation correlations; their influence needs a separate operational or constitutive bound.

With $m$ genuinely independent reset repetitions per arm and observed frequencies $\widehat p_0,\widehat p_1$, Hoeffding's inequality and a union bound give, with confidence at least $1-\alpha$, 

$$

 |(\widehat p_1-\widehat p_0)-(p_1-p_0)|
 \le 2\sqrt{\frac{\log(4/\alpha)}{2m}}.

$$

 For example, $m\ge8\log(4/\alpha)/\delta_*^2$ makes this uncertainty at most $\delta_*/2$. Resolving a controlled $1/N$ gap therefore requires $O(N^2\log(1/\alpha))$ reset trials, in addition to the per-trial resources specified above. Drifts, correlations and imperfect resets require their own analysis; the independent-trial formula does not cover them. A significant discrepancy would reject the nominated readout-only alternatives under these controls. It would not uniquely identify the pilot constitution, exclude all operational surrogates, or by itself prove a spacelike causal influence.

---

# Section 13: Assumptions and result status

<a id="section-13"></a>

## 13 Assumptions and result status

 <a id="reg:section"></a> The following register distinguishes mathematical representation premises from physical preparation and access premises. Each is needed only for the results that invoke it.

 <a id="source-longtable-1"></a>

| Premise | Content | Contribution and limit |
| --- | --- | --- |
| Tetralemma premises | (SO), (D), (MI), (NS) of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting); (QT) optional. | Exclude completeness of each specified admissible classical readout. (D) supplies (SO); only (D), (MI), (NS) are separately necessary within that class. |
| Certification imports | Sequential likelihood model; entropy production and soundness of <a id="citation-40"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]; correct-dimension continuity <a id="citation-41"></a>[[29](/sealed-or-leaky/references#bib-Audenaert07)]. | Keep classical isolated side information, independent seed and explicit pass probability. The observed pass does not establish that probability or universal independence. |
| Operational closure | Complete causal record laws; alternative class contains their identity-readout surrogate. | Gives non-identifiability only in that closed class. It does not establish a physical source ontology or a finite Markov surrogate. |
| Ontic preparation model | Common measurement responses, convex-linear preparation randomization, specified trine data. | Forces distinctions between ontic preparation laws. It does not assume or prove incompleteness of a pure ray as an individual state. |
| POVM domain | All pure states and finite proper ensembles, one fixed experiment, common apparatus and mixture rule. | Gives exact and quantitative eventwise sealing tests. A nonquadratic event still needs a physically allowed reader. |
| Deterministic completion | Future record is a function of the complete initial state; readout-conditioned randomness is nondegenerate. | Requires unresolved initial information. Universal determinism itself is an additional premise. |
| Pilot constitution | Specified sector graph, P3 coherent apparatus catalogue, exporter and service rules; basis-ready census and zero residues; independent symmetric gas preparation. | Produces finite retained-record predictions. These microscopic rules are not consequences of observed quantum statistics. |
| Pilot controls | Driven coherent pulses and holds; included memory; common preparation law; quantified finite gas and drainage budgets. | Supplies ordinary stored bits. Autonomous timing to $o(1/N)$ and a relativistic implementation remain unproved. |
| Undrained limit | One monotone edge, initially empty stock, $w\in C^2$, $1-w\ge c>0$, $\mu_N\to\infty$, $\mu_N/N\to0$, $\mu_N\delta_{\rm g}\to0$. | Proves an endpoint asymptotic. General graphs, reversals and a retained reader at this accuracy require further work. |
| Deterministic CHSH | Common setting-independent initial law; Alice's record precedes and is independent of Bob's later intervention; equilibrium marginal independence; $S>2$. | Forces setting-dependent ontic response and permits mathematical signalling reweightings. Their physical preparation is not supplied. |
| Massive construction | Driven semibounded oscillator and internal-key Hamiltonians, guidance, complete equilibrium, retained stationary Alice record. | Gives finite noisy $S>2$ within the massive constitution. It is not a construction of nonequilibrium preparation. |
| Repetition | Available resets, independent trials, common laws and an implementable test. | Amplifies an operational gap. It cannot amplify an inaccessible ontic distinction into an observable one. |

 

 <a id="source-longtable-2"></a>

| Result | Quantitative conclusion | Status |
| --- | --- | --- |
| No-signalling guessing, Lemma [2.3](/sealed-or-leaky/the-source-tetralemma#tet:guess) | $\max_aP(a\mid x)\le3/2-S/4$. | Proved; coincides with <a id="citation-42"></a>[[22](/sealed-or-leaky/references#bib-Pironio10)]. |
| Hidden information, Theorem [2.4](/sealed-or-leaky/the-source-tetralemma#tet:hidden) | $H_{\min}(Z\mid T)\ge{f_{\mathrm{NS}}}(S)$; $H(Z\mid T)\ge(S-2)/2$; also ${f_{\mathrm{Q}}}$ under (QT). | Proved; conditional on the four premises. |
| Tetralemma, Theorem [2.7](/sealed-or-leaky/the-source-tetralemma#tet:tetralemma) | Exclusion; (D), (MI), (NS) separately necessary within (SO). | Proved; branching outside the scalar-outcome class. |
| Three-branch form, Proposition [2.8](/sealed-or-leaky/the-source-tetralemma#tet:trilemmafails) | False. | Proved. |
| Extracted-string translation, Corollary [3.8](/sealed-or-leaky/experimental-anchoring#exp:bierhorst) | Passing-ensemble Shannon bound $>1024-1.1\times10^{-9}$; unsmoothed min-entropy only $>39.86$. | Conditional on B-admissibility, deterministic response, seed and $\pi\ge\kappa$. |
| Raw-certificate translation, Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) | Passing-ensemble Shannon and deletion-smoothed bounds $>1304.97$; unsmoothed $>39.93$. | Published aggregate parameters; no extractor or source–setting independence needed. |
| Threshold test, Lemma [3.12](/sealed-or-leaky/experimental-anchoring#exp:thresholdtest) | Complete deterministic B-admissible models have pass probability $\le v^{-1}$. | Conditional frequentist bound; no lower bound on pass probability required. |
| Trine preparation bounds, Theorems [8.1](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:robust), [8.3](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:sum) | Pairwise $1/4$; three-distance sum $1/2$; robust bounds $1/4-4\epsilon$ and $1/2-13\epsilon/2$, truncated at zero. | Proved and sharp for the ideal finite table. Ontic-law distances. |
| Quantitative POVM, Theorem [9.2](/sealed-or-leaky/operational-sealing-and-quantitative-failures-of-povm-form#ctx:quantitativepovm) | $\Gamma(h)=2d(h)$; a witness uses at most $d^2+1$ pure-state occurrences. | Proved; eventwise and conditional on access. |
| Readout simulation, Theorem [5.2](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:radius) | An accessible gap $\delta$ forces worst-case error at least $\delta/2$. | Proved; does not identify a unique completion. |
| Retained pilot preparation, Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained) | Gap at least $1/(2N)-2\epsilon_N$ on the specified window, $N\ge2$. | Controlled finite-time lower bound; ideal floor coefficient is exact. |
| Retained pilot setting, Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal) | Gap at least $1/N-2\epsilon_N^{AB}$ on the specified window, $N\ge3$. | Controlled finite nonrelativistic model prediction. |
| Undrained endpoint, Theorem [11.10](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:undrained) | $\mu_N(P_X-P_Z)\to5\sqrt3g/(6\kappa)$. | Proved in the specified asymptotic regime; retained-reader gap open. |
| Initial-residue repair, Proposition [11.9](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:residueobstruction) | No single independent residue law restores all monotone and return Born means. | Proved obstruction for the unchanged reset exporter; census scope. |
| CHSH reweighting, Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget) | Union mass $\ge(S-2)/2$; signal budget $\min\{2d,d+\kappa/2,1\}$ for $\kappa>0$. | Sharp mathematical bounds; reweighting accessibility separate. |
| Accessible sealing, Theorem [7.1](/sealed-or-leaky/conservation-of-complete-information-and-operational-sealing#op:transport) | $d_{\mathcal F_1}(\Phi_*P,\Phi_*Q)=d_{\Phi^*\mathcal F_1}(P,Q)$. | Access-relative; complete-law conservation does not imply operational conservation. |

---

# Section 14: What the results establish about source reality

<a id="section-14"></a>

## 14 What the results establish about source reality

 

*Status: Proved conditional conclusions.*

 A specified classical initial readout is incomplete if the unchanged Bell premises hold and $S>2$. The finite response entropy bounds distinguish Shannon entropy from guessing entropy and are sharp in the no-signalling class. This is not a proof that every description of observers is incomplete: (NS) must apply to the particular information being considered, and (D) is a physical premise rather than an experimental consequence of Bell violation.

The corrected tetralemma retains four explicit models without changing the premises to protect a false independence claim. Within the single-outcome class, (D), (MI) and (NS) each admit a separate countermodel when omitted. Branching abandons that scalar-outcome class; deterministic evolution of a complete vector does not satisfy (D) as written. The three-way alternative criticized in Proposition [2.8](/sealed-or-leaky/the-source-tetralemma#tet:trilemmafails) remains false.

The Bierhorst translation is genuinely finite-sample but is not unconditional. It uses the published entropy-production and soundness theorems for the original classical pre-existing adversary class, the actual causal-padding convention, a conservative correction for the printed Bell coefficients, and explicit postselection normalization. Under $\pi\ge\kappa$, nearly $1024$ Shannon bits follow from the extracted output; the aggregate entropy-production certificate gives the stronger $1304.97$-bit Shannon and deletion-smoothed response bounds. Neither gives $1024$ unsmoothed min-entropy bits of a complete source. Without a pass-probability lower bound, the threshold test of Lemma [3.12](/sealed-or-leaky/experimental-anchoring#exp:thresholdtest) still gives a conditional frequentist rejection bound for complete deterministic B-admissible models, not a posterior probability of an ontology.



*Status: Retained model-relative implications.*

 The trine results concern distinctions between ontic preparation distributions with equal density matrices. They do not establish incompleteness of every pure ray, universal wavefunction or individual state. The POVM and simulation results concern one declared preparation domain and apparatus class. The conservation result tracks exactly which tests remain accessible, rather than confusing fine-grained reversibility with observable recoverability.

Within the declared finite pilot constitution, the retained-record calculations include preparation, export, drainage, memory and gas-comparison errors. They are conditional predictions, not observed departures from quantum theory. The undrained endpoint asymptotic does not supply a retained reader at its larger scale. The massive writer construction uses its own constitutive laws. Mathematical nonequilibrium reweightings and hypothetical wires do not become physically available because a sensitivity calculation exists.



<a id="paragraph-18"></a>

#### Remaining gaps, not strengthened claims.

 

*Status: Not established.*

 The materials do not independently establish universality of deterministic source dynamics, completeness of any physical access catalogue, exact sequential setting independence for the pseudorandom implementation, an actual adversarial pass-probability lower bound, quantum-side-information security for the Bierhorst translation, or the microscopic implementation of the retained model-relative witnesses. The central-value Hensen, Rosenfeld and Storz numbers remain illustrations rather than finite-sample entropy certifications. The unavailable trial statistics are identified in Section [3](/sealed-or-leaky/experimental-anchoring#exp:section); no trial-level data have been invented.



<a id="paragraph-19"></a>

#### Other no-go results and the operational ceiling.

 

*Status: Literature scope and proved identification boundary.*

 Bell and CHSH constrain local response models with their setting-law premises <a id="citation-43"></a>[[3](/sealed-or-leaky/references#bib-Bell64), [4](/sealed-or-leaky/references#bib-CHSH69)]; they do not exclude every deterministic completion. Colbeck–Renner uses its own free-choice and extension-access conditions <a id="citation-44"></a>[[5](/sealed-or-leaky/references#bib-CR11)], not merely the existence of an unread source variable. PBR uses preparation independence to constrain overlaps of ontic laws <a id="citation-45"></a>[[9](/sealed-or-leaky/references#bib-PBR12)]; $\psi$-onticity is not $\psi$-incompleteness. Theorem [5.1](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:surrogate) remains decisive for unrestricted alternatives: reproducing every admitted complete record law supplies an operationally indistinguishable surrogate. None of the present conditional results identifies a unique underlying source or proves an unconditional ontology of observers.

---

# Research transparency and reproducibility

<a id="paragraph-20"></a>

## Research transparency and reproducibility

  

<a id="paragraph-21"></a>

#### AI assistance.

 Drafting, calculations and revisions used AI assistance (Claude, Anthropic; OpenAI tools for technical audits and revisions, including version 3.1 and preparation of this preprint edition). AI assistance and the accompanying computational checks do not constitute independent external verification. 

<a id="paragraph-22"></a>

#### Funding and collaboration.

 The author is an independent researcher and received no external research funding for this work. Independent mathematical review, computational replication, physical implementation and empirical testing are invited, particularly where specialist expertise, equipment or institutional resources are required. 

<a id="paragraph-23"></a>

#### Computational materials.

 The accompanying `Sealed_or_Leaky_v3.1_Verification.py` uses Python 3 and the standard library. It checks finite constructions and numerical certificates with exact rational arithmetic and explicit series bounds, supplemented by reproducibly seeded numerical sanity checks. When this manuscript is adjacent under the filename `Sealed_or_Leaky_v3.1.tex`, it also checks status tags, label uniqueness, internal references and the absence of ontological terms in proofs. Comparison with the earlier version 3 premises is performed only if that earlier source is available; it is not included in this package. No experimental trial records are generated or reanalyzed. The script does not verify every proof or certify the physical assumptions. The accompanying README states how to compile the manuscript and reproduce the report.

---

# References

## Bibliography

<a id="bib-Marvian20"></a>

[1] I. Marvian, Inaccessible information in probabilistic models of quantum systems, non-contextuality inequalities and noise thresholds for contextuality, arXiv:2003.05984 (2020), [https://arxiv.org/abs/2003.05984](https://arxiv.org/abs/2003.05984).

Cited in: [Section 8](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#citation-29)

<a id="bib-BB95"></a>

[2] E. G. Beltrametti and S. Bugajski, A classical extension of quantum mechanics, *J. Phys. A* **28** (1995), 3329–3343; [https://iopscience.iop.org/article/10.1088/0305-4470/28/12/007](https://iopscience.iop.org/article/10.1088/0305-4470/28/12/007).

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-11) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-22) · [Section 8](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#citation-27)

<a id="bib-Bell64"></a>

[3] J. S. Bell, On the Einstein Podolsky Rosen paradox, *Physics* **1** (1964), 195–200. [doi:10.1103/PhysicsPhysiqueFizika.1.195](https://doi.org/10.1103/PhysicsPhysiqueFizika.1.195).

Cited in: [Section 14](/sealed-or-leaky/what-the-results-establish-about-source-reality#citation-43)

<a id="bib-CHSH69"></a>

[4] J. F. Clauser, M. A. Horne, A. Shimony and R. A. Holt, Proposed experiment to test local hidden-variable theories, *Phys. Rev. Lett.* **23** (1969), 880–884. [doi:10.1103/PhysRevLett.23.880](https://doi.org/10.1103/PhysRevLett.23.880).

Cited in: [Section 12](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#citation-33) · [Section 14](/sealed-or-leaky/what-the-results-establish-about-source-reality#citation-43)

<a id="bib-CR11"></a>

[5] R. Colbeck and R. Renner, No extension of quantum theory can have improved predictive power, *Nat. Commun.* **2** (2011), 411. [doi:10.1038/ncomms1416](https://doi.org/10.1038/ncomms1416).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-5) · [Section 14](/sealed-or-leaky/what-the-results-establish-about-source-reality#citation-44)

<a id="bib-G90"></a>

[6] N. Gisin, Weinberg's non-linear quantum mechanics and supraluminal communications, *Phys. Lett. A* **143** (1990), 1–2. [doi:10.1016/0375-9601(90)90786-N](https://doi.org/10.1016/0375-9601(90)90786-N).

Cited in: [Section 12](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#citation-38)

<a id="bib-MPKRS16"></a>

[7] M. D. Mazurek, M. F. Pusey, R. Kunjwal, K. J. Resch and R. W. Spekkens, An experimental test of noncontextuality without unphysical idealizations, *Nat. Commun.* **7** (2016), 11780. [doi:10.1038/ncomms11780](https://doi.org/10.1038/ncomms11780).

Cited in: [Section 8](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#citation-26)

<a id="bib-P91"></a>

[8] J. Polchinski, Weinberg's nonlinear quantum mechanics and the Einstein–Podolsky–Rosen paradox, *Phys. Rev. Lett.* **66** (1991), 397–400. [doi:10.1103/PhysRevLett.66.397](https://doi.org/10.1103/PhysRevLett.66.397).

Cited in: [Section 12](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#citation-39)

<a id="bib-PBR12"></a>

[9] M. F. Pusey, J. Barrett and T. Rudolph, On the reality of the quantum state, *Nat. Phys.* **8** (2012), 475–478. [doi:10.1038/nphys2309](https://doi.org/10.1038/nphys2309).

Cited in: [Section 14](/sealed-or-leaky/what-the-results-establish-about-source-reality#citation-45)

<a id="bib-R6"></a>

[10] J. Rodgers, *Non-Source Projection and Internal Identifiability*, Shadow Theory Paper 6, canonical edition (15 July 2026), [doi:10.5281/zenodo.21371451](https://doi.org/10.5281/zenodo.21371451).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-RM"></a>

[11] J. Rodgers, *Shadow Theory and Quantum Measurement: Source Dynamics, Event Laws, and Physical Records—Two Constitutive Completions*, integrated monograph, version 2 (15 September 2026), [doi:10.5281/zenodo.22774584](https://doi.org/10.5281/zenodo.22774584); source: [https://www.everythingequation.com/publications/quantum-measurement/monograph.tex](https://www.everythingequation.com/publications/quantum-measurement/monograph.tex).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-2) · [Section 10](/sealed-or-leaky/the-measurement-constitutions-and-the-scope-of-their-sealing#citation-30) · [Section 11](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#citation-32) · [Section 12](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#citation-37)

<a id="bib-S05"></a>

[12] R. W. Spekkens, Contextuality for preparations, transformations, and unsharp measurements, *Phys. Rev. A* **71** (2005), 052108. [doi:10.1103/PhysRevA.71.052108](https://doi.org/10.1103/PhysRevA.71.052108).

Cited in: [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-22) · [Section 8](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#citation-28)

<a id="bib-V02"></a>

[13] A. Valentini, Signal-locality in hidden-variables theories, *Phys. Lett. A* **297** (2002), 273–278; [arXiv:quant-ph/0106098](https://arxiv.org/abs/quant-ph/0106098).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-5) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-24) · [Section 12](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#citation-34)

<a id="bib-R1"></a>

[14] J. Rodgers, Source–Readout Non-Equivalence: Descent and Equivariant Reconstruction Obstructions, Shadow Theory Paper 1, canonical edition (15 July 2026), [doi:10.5281/zenodo.21369967](https://doi.org/10.5281/zenodo.21369967).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-R2"></a>

[15] J. Rodgers, Target-Relative Necessity of Completion: When Readout Loss Obstructs, and What a Sufficient Extension Must Retain, Shadow Theory Paper 2, canonical edition (15 July 2026), [doi:10.5281/zenodo.21370501](https://doi.org/10.5281/zenodo.21370501).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-R3"></a>

[16] J. Rodgers, Canonical Minimal Source Completion: The Coarsest Readout Extension on Which a Nominated Family of Source Relations Becomes Well Defined, Shadow Theory Paper 3, canonical edition (15 July 2026), [doi:10.5281/zenodo.21370763](https://doi.org/10.5281/zenodo.21370763).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-R4"></a>

[17] J. Rodgers, Geometric Realization of Completed Source Relations: Descent, Orbit Spaces, Invariant Relations, and Variational Response in Shadow Theory, Shadow Theory Paper 4, canonical edition (15 July 2026), [doi:10.5281/zenodo.21370985](https://doi.org/10.5281/zenodo.21370985).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-R5"></a>

[18] J. Rodgers, Observable Quotients and Exact Projected Dynamics: Closure, Memory, Minimal Dynamical Completion, and Effective Field Operators, Shadow Theory Paper 5, canonical edition (15 July 2026), [doi:10.5281/zenodo.21371251](https://doi.org/10.5281/zenodo.21371251).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-1)

<a id="bib-R7"></a>

[19] J. Rodgers, *Bulk-to-Brane Projection, Dynamical Nonclosure, and Observable Residues in Randall–Sundrum Gravity*, Shadow Theory Paper 7, canonical edition (15 July 2026), [doi:10.5281/zenodo.21371861](https://doi.org/10.5281/zenodo.21371861).

Cited in: 

<a id="bib-Pilot"></a>

[20] J. Rodgers, A Deterministic Pilot Medium: Bell Path Selection and Autonomous Material Records—A Constitutive Completion with a Controlled Physical-Time Limit, version 2 (15 September 2026), [doi:10.5281/zenodo.22774634](https://doi.org/10.5281/zenodo.22774634); source: [https://www.everythingequation.com/publications/quantum-measurement/pilot-medium.tex](https://www.everythingequation.com/publications/quantum-measurement/pilot-medium.tex).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-2) · [Section 11](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#citation-31)

<a id="bib-Massive"></a>

[21] J. Rodgers, A Massive Configuration Completion of the Quantum Measurement Programme: Event Timing, Semibounded Material Records, Retained Resources, and an Autonomous Finite-Horizon Realization, version 2 (15 September 2026), [doi:10.5281/zenodo.22774739](https://doi.org/10.5281/zenodo.22774739); source: [https://www.everythingequation.com/publications/quantum-measurement/massive-configuration.tex](https://www.everythingequation.com/publications/quantum-measurement/massive-configuration.tex).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-2)

<a id="bib-Pironio10"></a>

[22] S. Pironio, A. Acín, S. Massar, A. Boyer de la Giroday, D. N. Matsukevich, P. Maunz, S. Olmschenk, D. Hayes, L. Luo, T. A. Manning and C. Monroe, Random numbers certified by Bell's theorem, *Nature* **464** (2010), 1021–1024; [arXiv:0911.3427](https://arxiv.org/abs/0911.3427). [doi:10.1038/nature09008](https://doi.org/10.1038/nature09008).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-5) · [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-7) · [Section 3](/sealed-or-leaky/experimental-anchoring#citation-19) · [Section 13](/sealed-or-leaky/assumptions-and-result-status#citation-42)

<a id="bib-Hensen15"></a>

[23] B. Hensen et al., Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, *Nature* **526** (2015), 682–686. [doi:10.1038/nature15759](https://doi.org/10.1038/nature15759).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-3) · [Section 3](/sealed-or-leaky/experimental-anchoring#citation-13)

<a id="bib-Giustina15"></a>

[24] M. Giustina et al., Significant-loophole-free test of Bell's theorem with entangled photons, *Phys. Rev. Lett.* **115** (2015), 250401. [doi:10.1103/PhysRevLett.115.250401](https://doi.org/10.1103/PhysRevLett.115.250401).

Cited in: [Section 3](/sealed-or-leaky/experimental-anchoring#citation-16)

<a id="bib-Shalm15"></a>

[25] L. K. Shalm et al., Strong loophole-free test of local realism, *Phys. Rev. Lett.* **115** (2015), 250402. [doi:10.1103/PhysRevLett.115.250402](https://doi.org/10.1103/PhysRevLett.115.250402).

Cited in: [Section 3](/sealed-or-leaky/experimental-anchoring#citation-16)

<a id="bib-Rosenfeld17"></a>

[26] W. Rosenfeld, D. Burchardt, R. Garthoff, K. Redeker, N. Ortegel, M. Rau and H. Weinfurter, Event-ready Bell test using entangled atoms simultaneously closing detection and locality loopholes, *Phys. Rev. Lett.* **119** (2017), 010402. [doi:10.1103/PhysRevLett.119.010402](https://doi.org/10.1103/PhysRevLett.119.010402).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-3) · [Section 3](/sealed-or-leaky/experimental-anchoring#citation-14)

<a id="bib-Storz23"></a>

[27] S. Storz et al., Loophole-free Bell inequality violation with superconducting circuits, *Nature* **617** (2023), 265–270. [doi:10.1038/s41586-023-05885-0](https://doi.org/10.1038/s41586-023-05885-0).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-3) · [Section 3](/sealed-or-leaky/experimental-anchoring#citation-15)

<a id="bib-Bierhorst18"></a>

[28] P. Bierhorst, E. Knill, S. Glancy, Y. Zhang, A. Mink, S. Jordan, A. Rommal, Y.-K. Liu, B. Christensen, S. W. Nam, M. J. Stevens and L. K. Shalm, Experimentally generated randomness certified by the impossibility of superluminal signals, *Nature* **556** (2018), 223–226; [arXiv:1803.06219v1](https://arxiv.org/abs/1803.06219v1) (including supplementary information, Eqs. (2)–(6), Table 1, SI S.2, S.5–S.7). [doi:10.1038/s41586-018-0019-0](https://doi.org/10.1038/s41586-018-0019-0).

Cited in: [Section 1](/sealed-or-leaky/question-main-result-and-scope#citation-4) · [Section 3](/sealed-or-leaky/experimental-anchoring#citation-20) · [Section 13](/sealed-or-leaky/assumptions-and-result-status#citation-40)

<a id="bib-Audenaert07"></a>

[29] K. M. R. Audenaert, A sharp continuity estimate for the von Neumann entropy, *J. Phys. A* **40** (2007), 8127–8136; [arXiv:quant-ph/0610146](https://arxiv.org/abs/quant-ph/0610146), Theorem 1.

Cited in: [Section 13](/sealed-or-leaky/assumptions-and-result-status#citation-41)

<a id="bib-Everett57"></a>

[30] H. Everett, “Relative state” formulation of quantum mechanics, *Rev. Mod. Phys.* **29** (1957), 454–462. [doi:10.1103/RevModPhys.29.454](https://doi.org/10.1103/RevModPhys.29.454).

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-8) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-21)

<a id="bib-Deutsch99"></a>

[31] D. Deutsch, Quantum theory of probability and decisions, *Proc. R. Soc. Lond. A* **455** (1999), 3129–3137; [arXiv:quant-ph/9906015](https://arxiv.org/abs/quant-ph/9906015).

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-8) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-21)

<a id="bib-Wallace12"></a>

[32] D. Wallace, *The Emergent Multiverse*, Oxford University Press, 2012.

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-8) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-21)

<a id="bib-GRW86"></a>

[33] G. C. Ghirardi, A. Rimini and T. Weber, Unified dynamics for microscopic and macroscopic systems, *Phys. Rev. D* **34** (1986), 470–491. [doi:10.1103/PhysRevD.34.470](https://doi.org/10.1103/PhysRevD.34.470).

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-9)

<a id="bib-Donadi21"></a>

[34] S. Donadi, K. Piscicchia, C. Curceanu, L. Diósi, M. Laubenstein and A. Bassi, Underground test of gravity-related wave function collapse, *Nature Phys.* **17** (2021), 74–78. [doi:10.1038/s41567-020-1008-4](https://doi.org/10.1038/s41567-020-1008-4).

Cited in: 

<a id="bib-Brans88"></a>

[35] C. H. Brans, Bell's theorem does not eliminate fully causal hidden variables, *Int. J. Theor. Phys.* **27** (1988), 219–226. [doi:10.1007/BF00670750](https://doi.org/10.1007/BF00670750).

Cited in: [Section 2](/sealed-or-leaky/the-source-tetralemma#citation-10) · [Section 4](/sealed-or-leaky/the-escape-routes-and-their-boundaries#citation-23)

<a id="bib-HossenfelderPalmer20"></a>

[36] S. Hossenfelder and T. Palmer, Rethinking superdeterminism, *Front. Phys.* **8** (2020), 139. [doi:10.3389/fphy.2020.00139](https://doi.org/10.3389/fphy.2020.00139).

Cited in: 

<a id="bib-Handsteiner17"></a>

[37] J. Handsteiner et al., Cosmic Bell test: measurement settings from Milky Way stars, *Phys. Rev. Lett.* **118** (2017), 060401. [doi:10.1103/PhysRevLett.118.060401](https://doi.org/10.1103/PhysRevLett.118.060401).

Cited in: 

<a id="bib-Rauch18"></a>

[38] D. Rauch et al., Cosmic Bell test using random measurement settings from high-redshift quasars, *Phys. Rev. Lett.* **121** (2018), 080403. [doi:10.1103/PhysRevLett.121.080403](https://doi.org/10.1103/PhysRevLett.121.080403).

Cited in: 

<a id="bib-BigBell18"></a>

[39] The BIG Bell Test Collaboration, Challenging local realism with human choices, *Nature* **557** (2018), 212–216. [doi:10.1038/s41586-018-0085-3](https://doi.org/10.1038/s41586-018-0085-3).

Cited in: 

<a id="bib-Bohm52"></a>

[40] D. Bohm, A suggested interpretation of the quantum theory in terms of “hidden” variables. I, *Phys. Rev.* **85** (1952), 166–179. [doi:10.1103/PhysRev.85.166](https://doi.org/10.1103/PhysRev.85.166).

Cited in:
