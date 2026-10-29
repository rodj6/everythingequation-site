# Appendix B: Predictive equivalence: algorithms and infinite-horizon limits

<!-- Revised edition, 28 October 2026. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="app:predictive"></a> This appendix records the broader prediction mathematics, including belief-state and history formulations. Those formulations are not automatically the actual intrinsic-state assignment of A2. The distinction explains both their usefulness and the additional congruence condition in the main theorem. 

<a id="section-B-1"></a>

## B.1 Finite linear representation of transcript probabilities

<a id="section:predictive:finite-linear-representation-of-transcript-probabilities"></a> For a finite hidden state space of size $n$, write $M_{a,y}$ for the substochastic matrix whose $(i,j)$ entry is the joint probability of output $y$ and successor $j$ under action $a$ from state $i$. Thus $\sum_yM_{a,y}{\mathbf 1}={\mathbf 1}$. For a belief row vector $b$ and a word $w=(a_1,y_1)\cdots(a_k,y_k)$, 

$$

P_b(w)=bM_{a_1,y_1}\cdots M_{a_k,y_k}{\mathbf 1}.

$$

 The actions here can encode an admitted time or regime state when those data are finite. The matrices represent an actual instrument, not an arbitrary stochastic factorization chosen to fit a consciousness verdict.

Let 

$$

W_0={\operatorname{span}}\{{\mathbf 1}\},\qquad
W_{j+1}={\operatorname{span}}\bigl(W_j\cup\{M_{a,y}v:v\in W_j\}\bigr).

$$

 The chain stabilizes after at most $n-1$ strict dimension increases. Unlike a general jet sequence, equality $W_{j+1}=W_j$ implies invariance under every $M_{a,y}$ and therefore permanent stabilization.



**Proposition B.1 (Finite word-equivalence test).**

<a id="prop:word-equivalence"></a> Two beliefs $b,b'$ produce the same probability for every finite output/action word exactly when $(b-b')v=0$ for every $v$ in the stabilized space $W$. The same equality determines all finite adaptive transcript laws when admissible policies depend only on the recorded history. 

 

**Proof.**

By construction, $W$ is the span of all word columns $M_w{\mathbf 1}$. Annihilation of $W$ is therefore equivalent to equality of every word probability. For a fixed adaptive policy, each leaf has a recorded sequence and the action sequence selected by that policy. Its probability is the corresponding word probability, with the policy's common randomization factors where applicable. Equal leaf probabilities give equal transcript laws. 

□



This span test concerns all finite words of the displayed instrument alphabet. A restricted physical grammar must be represented in the model, for example by adjoining its finite controller and remaining-time state, or the calculation must explicitly retain only its admissible word language. Using forbidden concatenations can yield a finer relation than operational equivalence for that grammar. At a bounded horizon one can enumerate admitted protocol trees; the all-finite theorem uses the finite typed observable-span construction.

For rational instrument matrices and rational specified beliefs, this supplies a finite exact equivalence test. It does not imply that there are finitely many distinct beliefs or predictive classes over unlimited histories. Nor does it imply that the supremum over all adaptive infinite-horizon statistical tests is computationally trivial. The main theorem instead uses actual finite intrinsic states with checked predictive-fibre congruence. It does not identify these posterior states with realized phenomenal points, nor claim general exact evaluation of the infinite-horizon metric supremum.



<a id="section-B-2-revised"></a>

## B.2 Complete diagnostic panels and their conditioning

 <a id="sec:update-diagnostics"></a> The later scaffolding study strengthens the finite word-span result into a diagnostic criterion <a id="citation-revised-101"></a>[[51](/consciousness/monograph/bibliography#bib-RodgersDevelopment2026)]. Fix a known finite closed native instrument on $N$ states with common admitted actions, and let $W$ be the span of its word-likelihood columns, of dimension $r$. Every event-probability or bounded-score vector of a finite adaptive experiment belongs to $W$: expand the finite policy tree into word leaves and sum their common policy weights.

For admitted diagnostics $f_1,\ldots,f_m$, put $T=\operatorname{span}\{\mathbf1,f_1,\ldots,f_m\}$. Equality of all selected diagnostic means implies equality of all finite adaptive laws for every pair of preparation distributions on the full simplex if and only if $T=W$. Sufficiency follows by linearity. For necessity, if $T$ is a proper subspace, choose a nonzero row $d$ annihilating $T$ but not $W$. Because $d\mathbf1=0$, sufficiently small opposite perturbations of a strictly positive distribution by $d$ remain probability distributions. They agree on the selected means but disagree on a word column. Consequently at least $r-1$ scalar diagnostics are necessary for this full-simplex guarantee, and a physically admitted word basis attains the count. The necessity need not hold on a smaller physical preparation family or when only actual states are compared.

There is also a uniform quantitative consequence within this exact known model. Let $B=[\mathbf1,f_1,\ldots,f_{r-1}]$ be a basis matrix, and choose $r$ row indices $I$ for which $A=B_I$ is invertible. For preparation distributions $\mu,\nu$, write $p=(\mu-\nu)B=(0,\Delta_1,\ldots,\Delta_{r-1})$. Then 

$$

\sup_{\pi\text{ finite native}}
\operatorname{TV}(P_\mu^\pi,P_\nu^\pi)
\le\min\{1,\tfrac12\|pA^{-1}\|_1\}.

$$

 Indeed an event vector is $v=B A^{-1}v_I$, with $0\le v_I\le\mathbf1$. The row $pA^{-1}$ sums to zero, so its absolute evaluation on that cube is at most half its $\ell_1$ norm. The bound is independent of the chosen finite horizon, because the exact observable space and its conditioning were already supplied.

Conditioning cannot be replaced by state dimension alone. Compare a one-state process always emitting zero with a one-state process independently emitting one with probability $a>0$. On their disjoint two-state representation a basis is 

$$

B=\begin{pmatrix}1&0\\1&a\end{pmatrix}.

$$

 The one-tick diagnostic gap is $a$, but $H$ ticks have discrepancy $1-(1-a)^H$, whose supremum is one. The inverse basis contains $1/a$. Thus arbitrarily close basis scores in dimension two can conceal a large sufficiently long continuation difference. Finite empirical agreement becomes an all-future certificate only with the exact-model and conditioning premises, or additional justified separation assumptions. Estimated transition laws require their own accumulating physical-call error budget.



<a id="section-B-2"></a>

## B.3 Why a finite hidden system can have infinitely many predictive states

<a id="section:predictive:why-a-finite-hidden-system-can-have-infinitely-many-predictive-states"></a> Let a hidden bit $X$ remain fixed, with prior $P(X=1)=1/2$. Repeated observations satisfy 

$$

P(Y=1\mid X=1)=3/4,\qquad P(Y=1\mid X=0)=1/4,

$$

 independently conditional on $X$. After $k$ consecutive observations equal to one, Bayes' rule gives 

$$

b_k=P(X=1\mid Y_1=\cdots=Y_k=1)=\frac{3^k}{1+3^k}.

$$

 The next-output probability is $1/4+b_k/2$. These values are all distinct, so the physically possible finite histories yield infinitely many predictive states although the hidden state space has only two elements. The example is a statement about prediction, not an attribution of experience to a static latent bit.

A finite nominated past/history domain, a finite fully observed Markov state convention, or a separately proved finite predictive realization can restore finiteness. These are different sufficient conditions. A constitutive theorem should state which it uses rather than infer all of them from finite physical dimension.



<a id="section-B-3"></a>

## B.4 Conditioning and continuation

<a id="section:predictive:conditioning-and-continuation"></a> Suppose $b,b'$ have the same complete predictive profile and an action/output pair $(a,y)$ has common positive probability $p$. For every future word $w$, 

$$

\frac{bM_{a,y}M_w{\mathbf 1}}{p}
=\frac{b'M_{a,y}M_w{\mathbf 1}}{p}.

$$

 Thus the updated beliefs have the same future profile. This establishes labeled continuation for the belief-state predictive quotient. At zero probability the conditional state is not defined; no arbitrary state is inserted to complete the theorem. A finite-horizon approximation has fewer tests; its posterior quotient can be coarser. The main constitution uses one all-finite native family, so this bookkeeping cutoff does not alter its actual-state assignment.

Different physical preparations can give different conditional beliefs for the same record. $R^\ast$ therefore fixes preparation and the internal-history convention; an outside observer's freely chosen prior does not determine the assigned experience. These posterior-update equations describe uncertainty and are not a replacement for the actual-class congruence theorem in Chapter [16](/consciousness/monograph/endogenous-predictive-structure-across-horizons#ch:predictive).



<a id="section-B-4"></a>

## B.5 A controlled measurable extension

<a id="section:predictive:a-controlled-measurable-extension"></a> A countable family of probability-valued predictive tests on a standard-Borel history space gives a measurable map into a countable product of probability spaces. Equality of profiles still defines an equivalence relation. But the image need not automatically be a standard-Borel quotient with all the desired transition properties. Regular conditional laws and measurable descent require hypotheses.

One clean topological regime is a compact metric history domain with continuous test probabilities in a countable family. Its profile image is compact in a metrizable product, hence a standard-Borel space. The quotient topology agrees with the image topology because a continuous surjection from a compact space to a Hausdorff space is a quotient map. Labeled transitions still require the positive-probability compatibility used above. This is a conditional extension, not a universal continuum realization theorem.

Nearby distinct point masses have TV distance one. A weaker topology may suit a physical approximation, but changes the asserted contrast structure and requires separate justification.
