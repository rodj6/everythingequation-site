# Abstract

We develop the observable and dynamical layer of Shadow Theory. A bounded observation operator $K:\mathcal{H}_{\mathrm{src}}\to\mathcal{H}_{\mathrm{obs}}$ identifies source states differing by $\ker K$ and produces an exact observable quotient $\mathcal{H}_{K}=\mathcal{H}_{\mathrm{src}}/\ker K$, canonically and boundedly bijective onto $\operatorname{Ran}K$. We prove that this bijection has bounded inverse in the norm inherited from $\mathcal{H}_{\mathrm{obs}}$ exactly when $\operatorname{Ran}K$ is closed, and we keep sharply apart three distinct phenomena: exact quotient loss ($\ker K\neq\{0\}$), controlled low-rank approximation (singular-value truncation, with the operator-norm optimality $\lVert K-K_r\rVert_{\mathrm{op}}=\sigma_{r+1}$), and unstable inversion (failure of $K$ to be bounded below on $(\ker K)^{\perp}$, equivalently nonclosed range). Compactness is exactly what supplies the controlled finite-rank approximation, but by itself it implies neither a nontrivial kernel nor unstable inversion.

For a strongly continuous source semigroup $U(t)$ we prove that an induced evolution on $\operatorname{Ran}K$ exists if and only if $U(t)\ker K\subseteq\ker K$ for all $t\ge 0$; failure produces initially indistinguishable source states with later distinct readouts, so that no single-valued autonomous law on the instantaneous observable state can reproduce all source trajectories. For an orthogonal resolved/unresolved splitting with bounded generator $L$ we derive the exact projected equation $$\dot x(t)=PLP\,x(t)+PLQ\,e^{tQLQ}z(0)
+\int_{0}^{t}PLQ\,e^{(t-s)QLQ}QLP\,x(s)\,ds ,$$ whose second and third terms are, respectively, a deterministic unresolved-initial-state term and an exact memory kernel; no stochastic, Markovian, or timescale approximation is made anywhere. Autonomous first-order closure valid for *every* source initial state is proved equivalent to $PLQ=0$, i.e. to invariance of $\ker P$ under $L$.

We then construct the minimal dynamical completion: the unresolved response map $z_0\mapsto PLQ\,e^{\cdot\,QLQ}z_0$ descends to an injective map on the Hilbert quotient $E_{\mathrm{dyn}}=\mathcal{H}_{Q}/N_Q$, which is universal among surjective extensions determining all resolved responses, and which in finite dimensions is computed by a Kalman-type observability matrix. A fiberwise criterion for smooth surjective submersions gives the nonlinear analogue. Finally, eliminating a genuine source sector from a bounded quadratic action yields Schur-complement effective operators $A-BC^{-1}B^{*}$, whose correction can be nonlocal when the composed operator $BC^{-1}B^{*}$ retains nonlocal Green-operator directions; and stationary elimination in a diffeomorphism-invariant action yields a covariant effective stress-energy defined as a variational response, together with total, not sectorwise, covariant conservation. Throughout, the results are necessary-and-sufficient criteria and exact reduction identities for models in which a source/readout architecture is declared; no empirical claim is made.

[^1]

[^1]: Website: [everythingequation.com](https://everythingequation.com)


# Introduction

<div id="sec:intro">

</div>

## The problem

Suppose a physical model is specified on a state space $\mathcal{H}_{\mathrm{src}}$ (the *source*), while every measurement one can actually perform is the image of a fixed bounded linear map $K:\mathcal{H}_{\mathrm{src}}\to\mathcal{H}_{\mathrm{obs}}$ (the *readout*). Two questions then arise, and they are not the same question.

1.  *Statics.* Which source quantities are functions of the readout alone?

2.  *Dynamics.* If the source evolves, does the readout evolve autonomously, i.e. is there a law of motion on the observable state alone that reproduces the readout of every source trajectory?

An affirmative answer to (Q1) for a given functional is a purely kinematic statement about the fibers of $K$. An affirmative answer to (Q2) is a compatibility statement between the fibers of $K$ and the flow. The central point of this paper is that (Q2) can fail while the quotient of (Q1) remains a perfectly coherent, complete Hilbert space with a perfectly well-defined observable state. A theory can be an *exact quotient theory* and nevertheless fail to be an *autonomous presentation* of its own observable degrees of freedom. When that happens, the exact projection of the source dynamics is not a first-order autonomous law but an integro-differential law carrying two extra structures: dependence on unresolved initial data, and dependence on the resolved history through a memory kernel.

## Four distinctions that must not be merged

Much informal discussion of “information loss” under coarse-graining conflates phenomena that are mathematically independent. We insist on four:

1.  **Exact nonidentifiability.** $\ker K\neq\{0\}$. Distinct source states are *identically* equal in readout, for all time-zero purposes. No amount of numerical precision recovers them.

2.  **Unstable inversion.** $K$ may be injective yet have unbounded inverse on its range. In general this is the failure of $K$ to be bounded below on $(\ker K)^{\perp}$, equivalently the failure of $\operatorname{Ran}K$ to be closed (Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient)). *Under the additional hypothesis that $K$ is compact* with infinite-dimensional range, it takes the familiar form that the singular values tend to $0$; but singular values are available only in the compact setting, and the general criterion is the one just stated. Here the source state *is* uniquely determined by the readout, but not continuously.

3.  **Approximation error.** If $K$ is compact one may truncate its singular system at rank $r$ and incur exactly $\sigma_{r+1}$ in operator norm. This is a controlled, quantified deficit, and it exists even when $K$ is injective and even when its inverse is bounded.

4.  **Failure of autonomous dynamics.** $U(t)\ker K\not\subseteq\ker K$. This is a genuinely dynamical obstruction, not determined by the static facts (D1)–(D3).

The logical relation between (D1) and (D4) must be stated with care, and we do so once here and abide by it throughout. Since $\{0\}$ is invariant under every linear map, $\ker K=\{0\}$ forces $U(t)\ker K\subseteq\ker K$ trivially. Hence

$$
\text{(D4) holds}\ \Longrightarrow\ \text{(D1) holds:}
\qquad
U(t_{0})\ker K\not\subseteq\ker K\ \Longrightarrow\ \ker K\neq\{0\} .\tag{1.1}$$

*A nontrivial kernel is therefore necessary for failure of descent.* It is not sufficient, and this is the whole point: a nontrivial kernel may be invariant under the source semigroup, in which case dynamics descend exactly and the observable theory is autonomous despite losing exact source distinctions; or it may fail to be invariant, in which case descent fails. The static fact (D1) does not decide which. So (D4) is an *additional* dynamical obstruction, logically *stronger* than (D1) and not deducible from it, but it is not logically independent of it. (D2) and (D3), by contrast, are genuinely independent of both: Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal) exhibits (D2) and (D3) with (D1), and hence also (D4), failing.

Section [2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#sec:quotient) isolates (D1) and (D2), Section [4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#sec:compact) isolates (D3), and Sections [5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#sec:descent)–[6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection) isolate (D4). The compact injective diagonal operator of Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal) exists precisely to show that (D1), (D2), (D3) can be dissociated; Example [6.6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ex:block) exists to show (D4) in a completely computed finite-dimensional block, where, in accordance with [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4), the kernel $\ker P=\mathcal{H}_{Q}$ is indeed nontrivial, and the content of the failure is that it is not $L$-invariant.

## Contributions

- **Exact quotient (§[2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#sec:quotient)).** $\widetilde{K}:\mathcal{H}_{K}\to\operatorname{Ran}K$ is a bounded linear bijection; $\widetilde{K}^{-1}$ is bounded *in the norm inherited from $\mathcal{H}_{\mathrm{obs}}$* if and only if $\operatorname{Ran}K$ is closed (Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient)). We are careful never to identify $\mathcal{H}_{K}$ isometrically with $\operatorname{Ran}K$ carrying the inherited norm: what is always true is that $\widetilde{K}$ transports the quotient norm to $\operatorname{Ran}K$, and the transported norm agrees topologically with the inherited one exactly in the closed-range case.

- **Descent of functionals (§[3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#sec:functionals)).** $A$ factors through $K$ iff $A$ is constant on cosets of $\ker K$ (Proposition [3.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#prop:descent)). For continuous linear functionals this is $A|_{\ker K}=0$, and $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$. The closure is essential: an observable linear functional need not be $K^{*}$ applied to any *exact* observable probe when $\operatorname{Ran}K^{*}$ fails to be closed (Remark [3.5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#rem:closure)).

- **Optimal reduction (§[4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#sec:compact)).** Schmidt’s singular expansion and the Eckart–Young–Mirsky operator-norm bound $\lVert K-K_r\rVert_{\mathrm{op}}=\sigma_{r+1}$ (Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey)), together with the compact injective example (Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal)).

- **Semigroup descent (§[5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#sec:descent)).** $KU(t)=V(t)K$ for a well-defined $V(t)$ on $\operatorname{Ran}K$ iff $U(t)N\subseteq N$, $N=\ker K$ (Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup)), with an explicit account of which topology the induced semigroup is strongly continuous in (Proposition [5.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#prop:topology)) and the failure corollary (Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure)).

- **Exact projected dynamics (§[6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)).** The Mori–Zwanzig-type identity (Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected)), obtained by variation of constants, exactly, with no ensemble, no random force, no Markov limit, and the closure criterion $PLQ=0$ *quantified over all source states* (Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)).

- **Minimal dynamical completion (§[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion)).** The Hilbert quotient $E_{\mathrm{dyn}}=\mathcal{H}_{Q}/N_Q$ is the coarsest extension of the resolved state determining every resolved response function (Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)), it closes the resolved trajectory through a Volterra equation (Theorem [7.6](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:volterra)), and in finite dimensions $N_Q$ is a finite intersection of kernels computable by Cayley–Hamilton (Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability)), linking the construction to Kalman observability.

- **Nonlinear projectability (§[8](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#sec:nonlinear)).** For a surjective submersion $p:S\to T$, a projected field $Y$ with $Dp\circ X=Y\circ p$ exists iff $Dp_sX_s$ is constant along fibers (Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable)); this is the nonlinear analogue of $PLQ=0$.

- **Elimination (§[9](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#sec:schur)–§[10](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#sec:metric)).** Schur-complement effective operators for bounded quadratic actions with boundedly invertible $C$ (Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur)), and stationary elimination in a diffeomorphism-invariant action producing a covariant effective stress-energy with total covariant conservation (Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope), Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation)).

## What is established mathematics, and what is new here

<div id="subsec:originality">

</div>

The component theories on which this paper draws are established mathematics, and we claim none of them. Closed-range theory and the bounded inverse theorem are classical functional analysis \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), [13](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-ReedSimon1)\]; the singular system and the operator-norm optimality of rank-$r$ truncation are due to Schmidt, Eckart–Young, and Mirsky \[[14](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Schmidt), [2](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EckartYoung), [9](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mirsky)\]; the theory of $C_{0}$-semigroups and of invariant subspaces under them is standard \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), [11](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Pazy)\]; the projection identity of Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected) is the Mori–Zwanzig identity \[[20](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig1960), [10](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mori1965), [21](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig2001)\]; the finite rank criterion of Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability) is Kalman observability \[[6](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Kalman1960), [15](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Sontag)\]; the Schur complement and block-operator elimination are classical \[[19](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zhang)\]; and Noether identities and the variational definition of stress-energy are textbook general relativity \[[16](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Wald)\]. Where these results appear below they are proved for completeness and stated in the form needed, not asserted as new.

What this paper contributes is their rigorous integration into a single source–readout architecture, and the results that only that integration makes visible. Specifically: the exact descent/closure obstruction, that source dynamics descend to the observable quotient if and only if the readout kernel is invariant (Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup)), equivalently, in the projected setting, if and only if $PLQ=0$ *quantified over all source states* (Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)), together with the sharp logical relation this obstruction bears to the static phenomena (D1)–(D3), which is neither independence nor implication in the direction usually assumed [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4); the *target-relative minimal dynamical completion* $E_{\mathrm{dyn}}=\mathcal{H}_{Q}/N_{Q}$, characterized by a universal property among all sufficient extensions (Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)) and shown to close the resolved trajectory (Theorem [7.6](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:volterra)), whose minimality is relative to a declared target and changes when the target changes (Remark [7.5](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#rem:relative)); the accompanying separation of algebraic descent from stable readout (Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs)); and the unified statement of the relation among unresolved initial data, memory, and completion. On that last point the precise claim is the following, and it is deliberately weaker than the slogan it replaces. The vanishing $PLQ=0$ makes the initial-state term, the memory kernel, and the minimal completion all trivial simultaneously, and is equivalent to autonomous closure for every source state (Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)). If $PLQ\neq0$, then some unresolved initial data do affect the resolved evolution and $E_{\mathrm{dyn}}$ is nontrivial. The memory kernel $\mathcal{K}(\tau)=PLQ\,e^{\tau QLQ}\,QLP$, however, can vanish identically even when $PLQ\neq0$, most simply when $QLP=0$, so that the resolved sector never feeds back into the unresolved one, but also through cancellation in the composition. Initial-state dependence, memory, and retained completion are therefore three structurally distinct phenomena which need not all be nonzero at once; the exact projection identity is what exhibits them as separate, and the completion $E_{\mathrm{dyn}}$ is the precise price of restoring an initial-value problem when the resolved state alone will not close. The field-theoretic sections then carry the same architecture into elimination: Schur-complement effective operators and a variational, covariant effective stress-energy, with their scope and their failure modes marked.

## What is *not* claimed

We prove no empirical proposition. We do not claim that the physical universe possesses hidden source variables, memory, or any particular effective correction. We supply necessary-and-sufficient criteria and exact reduction identities for models *in which a source/readout architecture has been declared*. A formal memory kernel, a compact approximation, a Schur complement, or a named effective tensor is, by itself, a piece of mathematics and not a physical discovery; its physical content, if any, lies entirely in the model that supplies $K$, $L$, and the action. We also do not claim that the memory term is stochastic. It is not: at the level of exactness maintained here, both $\eta_{z_0}$ and $\mathcal{K}$ are deterministic linear objects. They acquire a probabilistic reading only after an *additional*, independent, probabilistic model of $z(0)$ is imposed, which we do not impose.

## Relation to the companion papers

This paper is the dynamical layer of a seven-paper foundational sequence. Its companions in that sequence are the preceding companion papers, cited as \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1), [23](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper2), [24](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper3), [25](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper4)\]: descent and equivariant reconstruction obstructions \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1)\]; target-relative necessity of completion \[[23](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper2)\]; canonical minimal source completion \[[24](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper3)\]; and geometric realization with variational response \[[25](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper4)\]. The present paper is self-contained: every definition it needs is restated locally, and every theorem it states is proved here, including the minimal-completion theorem, which we prove directly (Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)) rather than importing. Cross-references to \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1), [23](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper2), [24](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper3), [25](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper4)\] are for context only.

## Notation and standing conventions

<div id="subsec:notation">

</div>

All Hilbert spaces are complex unless stated otherwise, with inner products $\langle \cdot , \cdot \rangle$ linear in the second argument. $\mathcal{B}(\mathcal{H},\mathcal{K})$ denotes bounded linear operators. For $T\in\mathcal{B}(\mathcal{H},\mathcal{K})$ we write $\ker T$, $\operatorname{Ran}T$, $T^{*}$, and $\lVert T\rVert_{\mathrm{op}}$. Orthogonal projections are denoted $P$, $Q=I-P$, with ranges $\mathcal{H}_{P}=P\mathcal{H}$ and $\mathcal{H}_{Q}=Q\mathcal{H}$; both are closed, and $\mathcal{H}=\mathcal{H}_{P}\oplus\mathcal{H}_{Q}$. We freely regard $PLQ$ as an operator $\mathcal{H}_{Q}\to\mathcal{H}_{P}$, $QLQ$ as an operator $\mathcal{H}_{Q}\to\mathcal{H}_{Q}$, and so on, the identification being the obvious restriction/corestriction. Semigroups are one-parameter families $U(t)$, $t\ge0$, of bounded operators with $U(0)=I$, $U(t+s)=U(t)U(s)$, and $t\mapsto U(t)\Psi$ continuous for each $\Psi$ (the $C_0$ property) \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), [11](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Pazy)\]. In Sections [6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion) the generator $L$ is *bounded* and $U(t)=e^{tL}$, which makes all exponentials norm-convergent power series and all manipulations below elementary; unbounded generators are addressed only in explicitly flagged remarks, and never silently.


# The exact observable quotient

<div id="sec:quotient">

</div>

<div class="assumption">

**Assumption 2.1**.

<div id="ass:K">

</div>

$\mathcal{H}_{\mathrm{src}}$ and $\mathcal{H}_{\mathrm{obs}}$ are Hilbert spaces and $K\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$.

</div>

<div class="definition">

**Definition 2.2** (Observational equivalence).

<div id="def:equiv">

</div>

For $\Psi,\Psi'\in\mathcal{H}_{\mathrm{src}}$ set $$
\Psi\sim_{K}\Psi'
\quad:\Longleftrightarrow\quad
K\Psi=K\Psi'
\quad\Longleftrightarrow\quad
\Psi-\Psi'\in\ker K .\tag{2.1}$$

</div>

Since $K$ is continuous, $N:=\ker K$ is a closed subspace of $\mathcal{H}_{\mathrm{src}}$. The quotient vector space $$
\mathcal{H}_{K}:=\mathcal{H}_{\mathrm{src}}/\ker K\tag{2.2}$$ therefore carries the quotient norm $$
\bigl\lVert[\Psi]\bigr\rVert_{K}:=\inf_{n\in\ker K}\lVert\Psi+n\rVert_{\mathcal{H}_{\mathrm{src}}}
=\operatorname{dist}\bigl(\Psi,\ker K\bigr),\tag{2.3}$$ and $(\mathcal{H}_{K},\lVert\cdot\rVert_{K})$ is a Hilbert space: the canonical map $(\ker K)^{\perp}\to\mathcal{H}_{K}$, $\Psi\mapsto[\Psi]$, is a linear bijection, and it is isometric because the infimum in [(2.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:qnorm) is attained at the orthogonal projection of $\Psi$ onto $(\ker K)^{\perp}$. Thus the quotient norm is induced by the inner product $\langle [\Psi] , [\Psi'] \rangle_{K}:=\langle \Pi\Psi , \Pi\Psi' \rangle_{\mathcal{H}_{\mathrm{src}}}$, where $\Pi$ is the orthogonal projection onto $(\ker K)^{\perp}$, and completeness is inherited from that of the closed subspace $(\ker K)^{\perp}$.

The *exact observable state* associated with a source state $\Psi$ is the coset $$
[\Psi]_{K}=\Psi+\ker K .\tag{2.4}$$ It is essential to the logic of what follows that the quotient distinguishes no representative within this coset. The orthogonal representative $\Pi\Psi$ is a choice made by the ambient inner product of $\mathcal{H}_{\mathrm{src}}$, not by the readout.

<div class="theorem">

**Theorem 2.3** (Observable quotient theorem).

<div id="thm:quotient">

</div>

*Under Assumption [2.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#ass:K), the map $$
\widetilde{K}:\mathcal{H}_{K}\longrightarrow\operatorname{Ran}K,
\qquad
\widetilde{K}[\Psi]:=K\Psi,\tag{2.5}$$ is well defined, linear, bijective, and bounded, with $\lVert\widetilde{K}\rVert_{\mathrm{op}}=\lVert K\rVert_{\mathrm{op}}$, where $\operatorname{Ran}K$ carries the norm inherited from $\mathcal{H}_{\mathrm{obs}}$. Moreover the following are equivalent:*

1.  *$\widetilde{K}^{-1}:\operatorname{Ran}K\to\mathcal{H}_{K}$ is bounded when $\operatorname{Ran}K$ carries the inherited norm;*

2.  *$\operatorname{Ran}K$ is closed in $\mathcal{H}_{\mathrm{obs}}$;*

3.  *there exists $c>0$ with $\lVert K\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}\ge c\,\operatorname{dist}(\Psi,\ker K)$ for all $\Psi\in\mathcal{H}_{\mathrm{src}}$.*

</div>

<div class="proof">

*Proof.* *Well-definedness and bijectivity.* If $[\Psi]=[\Psi']$ then $\Psi-\Psi'\in\ker K$, so $K\Psi=K\Psi'$; hence [(2.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:Ktilde) does not depend on the representative. Linearity is immediate. Surjectivity onto $\operatorname{Ran}K$ holds by definition of the range. If $\widetilde{K}[\Psi]=0$ then $K\Psi=0$, i.e. $\Psi\in\ker K$, i.e. $[\Psi]=0$; hence $\widetilde{K}$ is injective.

*Boundedness.* For every $n\in\ker K$, $$\lVert\widetilde{K}[\Psi]\rVert_{\mathcal{H}_{\mathrm{obs}}}=\lVert K\Psi\rVert=\lVert K(\Psi+n)\rVert
\le\lVert K\rVert_{\mathrm{op}}\,\lVert\Psi+n\rVert_{\mathcal{H}_{\mathrm{src}}}.$$ Taking the infimum over $n\in\ker K$ gives $\lVert\widetilde{K}[\Psi]\rVert\le\lVert K\rVert_{\mathrm{op}}\lVert[\Psi]\rVert_{K}$, so $\lVert\widetilde{K}\rVert_{\mathrm{op}}\le\lVert K\rVert_{\mathrm{op}}$. Conversely $\lVert K\Psi\rVert=\lVert\widetilde{K}[\Psi]\rVert\le\lVert\widetilde{K}\rVert_{\mathrm{op}}\lVert[\Psi]\rVert_{K}
\le\lVert\widetilde{K}\rVert_{\mathrm{op}}\lVert\Psi\rVert$, so the two operator norms coincide.

*(1)$\Rightarrow$(2).* Suppose $\lVert\widetilde{K}^{-1}\rVert_{\mathrm{op}}=:M<\infty$. Then $\widetilde{K}$ is a linear homeomorphism from the complete space $\mathcal{H}_{K}$ onto $\operatorname{Ran}K$ with its inherited norm; hence $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ is complete. A complete subspace of a normed space is closed, so $\operatorname{Ran}K$ is closed in $\mathcal{H}_{\mathrm{obs}}$.

*(2)$\Rightarrow$(1).* If $\operatorname{Ran}K$ is closed in the Hilbert space $\mathcal{H}_{\mathrm{obs}}$, then $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ is itself a Banach space. Since $\widetilde{K}$ is a bounded linear bijection between the Banach spaces $\mathcal{H}_{K}$ and $\operatorname{Ran}K$, the bounded inverse theorem \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Cor. 2.7\] yields boundedness of $\widetilde{K}^{-1}$.

*(1)$\Leftrightarrow$(3).* Statement (1) says exactly that there is $M<\infty$ with $\lVert[\Psi]\rVert_{K}\le M\lVert K\Psi\rVert$ for all $\Psi$; by [(2.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:qnorm) this is (3) with $c=1/M$. ◻

</div>

<div class="remark">

*Remark 4* (The two norms on $\operatorname{Ran}K$).

<div id="rem:twonorms">

</div>

Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient) always allows us to *transport* the quotient norm to $\operatorname{Ran}K$ by declaring $\lVert K\Psi\rVert_{\sharp}:=\lVert[\Psi]\rVert_{K}$; with this transported norm $\widetilde{K}$ is by construction an isometric isomorphism, and $(\operatorname{Ran}K,\lVert\cdot\rVert_{\sharp})$ is a Hilbert space. What is *not* generally true is that $\lVert\cdot\rVert_{\sharp}$ coincides with, or is even equivalent to, the norm inherited from $\mathcal{H}_{\mathrm{obs}}$. The inequality $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}\le\lVert K\rVert_{\mathrm{op}}
\lVert\cdot\rVert_{\sharp}$ always holds on $\operatorname{Ran}K$; the reverse inequality holds, with some constant, exactly in the closed-range case. We therefore never write $\mathcal{H}_{K}\cong\operatorname{Ran}K$ without saying which norm $\operatorname{Ran}K$ carries. Every later statement about topologies on the observable side is subject to this distinction.

</div>

<div class="corollary">

**Corollary 2.5** (Exact loss criterion).

<div id="cor:loss">

</div>

*The observation map $K$ loses exact source distinctions, i.e. there exist $\Psi\neq\Psi'$ with $\Psi\sim_{K}\Psi'$, if and only if $\ker K\neq\{0\}$. If $\ker K=\{0\}$, then $K$ is injective and the source state is uniquely determined by its readout, *even if* $\widetilde{K}^{-1}=K^{-1}$ is unbounded on $\operatorname{Ran}K$.*

</div>

<div class="proof">

*Proof.* Immediate from [(2.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:equiv): $\Psi\sim_K\Psi'$ with $\Psi\neq\Psi'$ iff $\Psi-\Psi'\in\ker K\setminus\{0\}$. The second sentence is the content of Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient): injectivity is the statement $\ker K=\{0\}$ and is logically independent of closedness of $\operatorname{Ran}K$, which is what governs boundedness of the inverse. ◻

</div>

Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss) is the formal separation of (D1) from (D2). Nonidentifiability is a statement about the kernel; instability is a statement about the range. An injective compact operator exhibits the second without the first, as we show in Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal).


# Descent of observable functionals

<div id="sec:functionals">

</div>

<div class="definition">

**Definition 3.1** (Exact observability of a functional).

<div id="def:obsfun">

</div>

Let $V$ be a set and $A:\mathcal{H}_{\mathrm{src}}\to V$. We say $A$ is *exactly observable through $K$* if there exists $\bar A:\operatorname{Ran}K\to V$ with $$
A=\bar A\circ K .\tag{3.1}$$

</div>

<div class="proposition">

**Proposition 3.2** (Functional descent).

<div id="prop:descent">

</div>

*$A$ is exactly observable through $K$ if and only if $$
A(\Psi+n)=A(\Psi)
\qquad\text{for all }\Psi\in\mathcal{H}_{\mathrm{src}},\ n\in\ker K .\tag{3.2}$$ When [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) holds, $\bar A$ is unique.*

</div>

<div class="proof">

*Proof.* If [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) holds and $n\in\ker K$, then $A(\Psi+n)=\bar A(K\Psi+Kn)=\bar A(K\Psi)=A(\Psi)$, which is [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant).

Conversely, assume [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant). Given $\omega\in\operatorname{Ran}K$, choose any $\Psi$ with $K\Psi=\omega$ and set $\bar A(\omega):=A(\Psi)$. If $K\Psi=K\Psi'=\omega$ then $\Psi'=\Psi+n$ with $n\in\ker K$, so [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) gives $A(\Psi')=A(\Psi)$; the definition is therefore independent of the chosen preimage, and [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) holds by construction. Uniqueness is forced because $K$ is onto $\operatorname{Ran}K$: any $\bar A'$ satisfying [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) agrees with $\bar A$ at every $\omega=K\Psi$. ◻

</div>

Proposition [3.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#prop:descent) is the fiberwise descent statement of \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1)\] specialized to the affine fibers $\Psi+\ker K$; we have proved it here so that no external result is load-bearing.

<div class="corollary">

**Corollary 3.3** (Linear descent and the adjoint).

<div id="cor:lindescent">

</div>

*Let $A\in\mathcal{H}_{\mathrm{src}}^{*}$ be a continuous linear functional. Then $A$ descends through $K$, in the sense of Definition [3.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#def:obsfun), if and only if $$
A|_{\ker K}=0 .\tag{3.3}$$ Identifying $\mathcal{H}_{\mathrm{src}}^{*}\cong\mathcal{H}_{\mathrm{src}}$ by the Riesz representation $A=\langle a , \cdot \rangle$, condition [(3.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:Avanish) says $a\in(\ker K)^{\perp}$, and $$
(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}} .\tag{3.4}$$*

</div>

<div class="proof">

*Proof.* Since $A$ is linear, [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) reads $A(n)=0$ for all $n\in\ker K$, which is [(3.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:Avanish). For [(3.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:perp): $\Psi\in\ker K$ iff $K\Psi=0$ iff $\langle K\Psi , \omega \rangle=0$ for all $\omega\in\mathcal{H}_{\mathrm{obs}}$ iff $\langle \Psi , K^{*}\omega \rangle=0$ for all $\omega$, i.e. iff $\Psi\perp\operatorname{Ran}K^{*}$. Hence $\ker K=(\operatorname{Ran}K^{*})^{\perp}$, and taking orthogonal complements and using $M^{\perp\perp}=\overline{M}$ for a subspace $M$ gives $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$. ◻

</div>

It is essential to notice what Definition [3.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#def:obsfun) does and does not require. It requires a *factorization*, $A=\bar A\circ K$, and nothing more: $\bar A$ is a map on the *set* $\operatorname{Ran}K$, and no continuity of $\bar A$ with respect to any particular norm on $\operatorname{Ran}K$ has been demanded. Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent) therefore characterizes *algebraic* descent. For a continuous linear $A=\langle a , \cdot \rangle$ with $a\in(\ker K)^{\perp}$, the induced $\bar A$ is automatically continuous in the *transported quotient norm* $\lVert\cdot\rVert_{\sharp}$ of Remark [2.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#rem:twonorms) (because $\bar A\circ\widetilde{K}$ is the continuous functional $[\Psi]\mapsto\langle a , \Psi \rangle$ on the Hilbert space $\mathcal{H}_{K}$). But continuity in the *inherited* observable norm, the norm an experimenter actually has access to on $\mathcal{H}_{\mathrm{obs}}$, is a strictly stronger demand, and it is governed by a different, sharper condition.

<div class="theorem">

**Theorem 3.4** (Stable observability of a linear functional).

<div id="thm:stableobs">

</div>

*Let $A=\langle a , \cdot \rangle\in\mathcal{H}_{\mathrm{src}}^{*}$ with $a\in(\ker K)^{\perp}$, so that $A$ descends algebraically, with unique $\bar A:\operatorname{Ran}K\to\mathbb{C}$ satisfying $A=\bar A\circ K$. Then $$
\bar A\ \text{is bounded on }(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})
\qquad\Longleftrightarrow\qquad
a\in\operatorname{Ran}K^{*} ,\tag{3.5}$$ i.e. if and only if there exists an *exact* observable probe $\omega\in\mathcal{H}_{\mathrm{obs}}$ with $a=K^{*}\omega$. In that case $\bar A$ extends to the bounded functional $\langle \omega , \cdot \rangle$ on all of $\mathcal{H}_{\mathrm{obs}}$, and $A(\Psi)=\langle \omega , K\Psi \rangle_{\mathcal{H}_{\mathrm{obs}}}$ for every $\Psi$: the source quantity is read off the observable state by a bounded measurement.*

</div>

<div class="proof">

*Proof.* ($\Leftarrow$) Suppose $a=K^{*}\omega$ with $\omega\in\mathcal{H}_{\mathrm{obs}}$. Then for every $\Psi$, $$A(\Psi)=\langle a , \Psi \rangle=\langle K^{*}\omega , \Psi \rangle=\langle \omega , K\Psi \rangle_{\mathcal{H}_{\mathrm{obs}}},$$ so $\bar A(y)=\langle \omega , y \rangle_{\mathcal{H}_{\mathrm{obs}}}$ for $y\in\operatorname{Ran}K$, which satisfies $\lvert\bar A(y)\rvert\le\lVert\omega\rVert\,\lVert y\rVert_{\mathcal{H}_{\mathrm{obs}}}$ and is therefore bounded in the inherited norm.

($\Rightarrow$) Suppose $\bar A$ is bounded on $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$, say $\lvert\bar A(y)\rvert\le M\lVert y\rVert_{\mathcal{H}_{\mathrm{obs}}}$ for all $y\in\operatorname{Ran}K$. Since $\operatorname{Ran}K$ is a subspace of $\mathcal{H}_{\mathrm{obs}}$, the Hahn–Banach theorem \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Cor. 1.2\] extends $\bar A$ to a bounded linear functional $\Lambda$ on all of $\mathcal{H}_{\mathrm{obs}}$ with the same norm. By the Riesz representation theorem there is $\omega\in\mathcal{H}_{\mathrm{obs}}$ with $\Lambda=\langle \omega , \cdot \rangle$. Then for every $\Psi\in\mathcal{H}_{\mathrm{src}}$, $$\langle a , \Psi \rangle=A(\Psi)=\bar A(K\Psi)=\Lambda(K\Psi)=\langle \omega , K\Psi \rangle
=\langle K^{*}\omega , \Psi \rangle ,$$ so $\langle a-K^{*}\omega , \Psi \rangle=0$ for all $\Psi$, i.e. $a=K^{*}\omega\in\operatorname{Ran}K^{*}$. ◻

</div>

<div class="remark">

*Remark 10* (Algebraic descent versus stable readout: exact preimage and closure).

<div id="rem:closure">

</div>

Equation [(3.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:perp) contains a closure and one must not delete it, and Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs) says exactly what the closure costs. Combining the two:

- $a\in\overline{\operatorname{Ran}K^{*}}=(\ker K)^{\perp}$ $\iff$ $A$ descends *algebraically* through $K$ (Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent)), with $\bar A$ continuous in the transported quotient norm;

- $a\in\operatorname{Ran}K^{*}$ $\iff$ $A$ descends to a functional that is *bounded in the inherited observable norm* (Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs)).

The two conditions coincide precisely when $\operatorname{Ran}K^{*}$ is closed, which by the closed range theorem is equivalent to $\operatorname{Ran}K$ being closed \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Thm. 2.19\], the same dichotomy as in Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient). So for a compact $K$ with infinite-dimensional range, for instance Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal), $\operatorname{Ran}K^{*}$ is dense in $(\ker K)^{\perp}$ but *proper*, and there exist source functionals which descend perfectly well as maps of the observable state, yet possess no exact representing probe $\omega$ with $a=K^{*}\omega$. Such a functional is a limit of representable ones, but the approximating probes $\omega_{k}$ have $\lVert\omega_{k}\rVert\to\infty$: reading the quantity off the observable state amplifies observational error without bound. This is (D2) reappearing on the dual side. Accordingly we say that the elements of $(\ker K)^{\perp}$ are the *observable* linear source directions, and reserve *stably observable* for those in $\operatorname{Ran}K^{*}$; the phrase should never be read as asserting inherited-readout stability where only algebraic descent has been established.

</div>


# Compact observation and controlled reduction

<div id="sec:compact">

</div>

<div class="assumption">

**Assumption 4.1**.

<div id="ass:compact">

</div>

In this section $\mathcal{H}_{\mathrm{src}}$ and $\mathcal{H}_{\mathrm{obs}}$ are separable and $K\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$ is compact.

</div>

Under Assumption [4.1](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ass:compact), $K^{*}K$ is a positive, self-adjoint, compact operator on $\mathcal{H}_{\mathrm{src}}$. By the spectral theorem for compact self-adjoint operators \[[13](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-ReedSimon1), Ch. VI\] its nonzero spectrum consists of positive eigenvalues of finite multiplicity, which can accumulate only at $0$. Enumerate them, repeated according to multiplicity and in nonincreasing order, as $\sigma_{1}^{2}\ge\sigma_{2}^{2}\ge\cdots>0$ with $\sigma_{n}>0$; the index set is $\{1,\dots,R\}$ if $K$ has finite rank $R$, and $\mathbb{N}$ otherwise. Let $\{v_{n}\}$ be a corresponding orthonormal family of eigenvectors of $K^{*}K$, so $K^{*}Kv_{n}=\sigma_{n}^{2}v_{n}$, and put $$
u_{n}:=\sigma_{n}^{-1}Kv_{n}.\tag{4.1}$$

<div class="lemma">

**Lemma 4.2** (Schmidt singular system).

<div id="lem:schmidt">

</div>

*The families $\{v_{n}\}$ and $\{u_{n}\}$ are orthonormal, $\{v_{n}\}$ is an orthonormal basis of $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$, $\{u_{n}\}$ is an orthonormal basis of $\overline{\operatorname{Ran}K}$, and $$
Kv_{n}=\sigma_{n}u_{n},
\qquad
K^{*}u_{n}=\sigma_{n}v_{n},\tag{4.2}$$ $$
K\Psi=\sum_{n\ge1}\sigma_{n}\langle v_{n} , \Psi \rangle\,u_{n}
\qquad(\Psi\in\mathcal{H}_{\mathrm{src}}),\tag{4.3}$$ the series converging in the norm of $\mathcal{H}_{\mathrm{obs}}$. If the index set is infinite then $\sigma_{n}\to0$.*

</div>

<div class="proof">

*Proof.* Orthonormality of $\{u_n\}$: $\langle u_{m} , u_{n} \rangle=(\sigma_{m}\sigma_{n})^{-1}
\langle Kv_{m} , Kv_{n} \rangle=(\sigma_{m}\sigma_{n})^{-1}\langle v_{m} , K^{*}Kv_{n} \rangle
=(\sigma_{n}/\sigma_{m})\langle v_{m} , v_{n} \rangle=\delta_{mn}$. From [(4.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svectors), $Kv_{n}=\sigma_{n}u_{n}$; and $K^{*}u_{n}=\sigma_{n}^{-1}K^{*}Kv_{n}=\sigma_{n}v_{n}$, which is [(4.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:sv).

Since $\ker K=\ker K^{*}K$ (indeed $K\Psi=0$ iff $\langle \Psi , K^{*}K\Psi \rangle=\lVert K\Psi\rVert^{2}=0$), the spectral theorem gives the orthogonal decomposition $\mathcal{H}_{\mathrm{src}}=\ker K\oplus\overline{\mathop{\mathrm{span}}\{v_{n}\}}$, and by Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent) the second summand is $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$. Thus every $\Psi$ decomposes as $\Psi=\Psi_{0}+\sum_{n}\langle v_{n} , \Psi \rangle v_{n}$ with $\Psi_{0}\in\ker K$, the series converging in $\mathcal{H}_{\mathrm{src}}$. Applying the bounded operator $K$ term by term and using [(4.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:sv) yields [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd) with convergence in $\mathcal{H}_{\mathrm{obs}}$. In particular $\operatorname{Ran}K\subseteq\overline{\mathop{\mathrm{span}}\{u_{n}\}}$ and each $u_{n}=\sigma_{n}^{-1}Kv_{n}
\in\operatorname{Ran}K$, so $\{u_{n}\}$ is an orthonormal basis of $\overline{\operatorname{Ran}K}$.

Finally, if infinitely many $\sigma_{n}>0$ existed with $\sigma_{n}\ge\varepsilon>0$ along a subsequence, then $\{Kv_{n}\}=\{\sigma_{n}u_{n}\}$ would satisfy $\lVert Kv_{n}-Kv_{m}\rVert^{2}=\sigma_{n}^{2}+\sigma_{m}^{2}\ge2\varepsilon^{2}$, so the bounded sequence $\{v_{n}\}$ would have image with no convergent subsequence, contradicting compactness. Hence $\sigma_{n}\to0$. ◻

</div>

<div class="definition">

**Definition 4.3** (Rank-$r$ truncation).

<div id="def:trunc">

</div>

For $r\ge0$ set $$
K_{r}:=\sum_{n=1}^{r}\sigma_{n}\,u_{n}\langle v_{n} , \cdot \rangle\, ,\tag{4.4}$$ that is, $K_{r}\Psi=\sum_{n=1}^{r}\sigma_{n}\langle v_{n} , \Psi \rangle u_{n}$. If $K$ has finite rank $R\le r$, the sum runs only over the available indices and $K_{r}=K$. We adopt the convention $\sigma_{r+1}:=0$ whenever the index $r+1$ exceeds the number of positive singular values.

</div>

<div class="theorem">

**Theorem 4.4** (Optimal compact reduction; Eckart–Young–Mirsky, operator norm).

<div id="thm:ey">

</div>

*Let $K$ be compact and $r\ge0$. Then for every $B\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$ with $\mathop{\mathrm{rank}}B\le r$, $$
\lVert K-B\rVert_{\mathrm{op}}\ \ge\ \sigma_{r+1},\tag{4.5}$$ and equality is attained at $B=K_{r}$. Consequently $$
\lVert K-K_{r}\rVert_{\mathrm{op}}=\sigma_{r+1}
=\min\bigl\{\lVert K-B\rVert_{\mathrm{op}}:\mathop{\mathrm{rank}}B\le r\bigr\}.\tag{4.6}$$*

</div>

<div class="proof">

*Proof.* *Upper bound.* By [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd) and [(4.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:Kr), $(K-K_{r})\Psi=\sum_{n>r}\sigma_{n}\langle v_{n} , \Psi \rangle u_{n}$. By orthonormality of $\{u_{n}\}$ and Bessel’s inequality for $\{v_{n}\}$, $$\lVert(K-K_{r})\Psi\rVert^{2}=\sum_{n>r}\sigma_{n}^{2}\lvert\langle v_{n} , \Psi \rangle\rvert^{2}
\le\sigma_{r+1}^{2}\sum_{n>r}\lvert\langle v_{n} , \Psi \rangle\rvert^{2}
\le\sigma_{r+1}^{2}\lVert\Psi\rVert^{2},$$ using $\sigma_{n}\le\sigma_{r+1}$ for $n>r$. Hence $\lVert K-K_{r}\rVert_{\mathrm{op}}\le\sigma_{r+1}$. Testing on $\Psi=v_{r+1}$ (when $\sigma_{r+1}>0$) gives $\lVert(K-K_{r})v_{r+1}\rVert=\sigma_{r+1}$, so equality holds.

*Lower bound.* We may assume $\sigma_{r+1}>0$, else [(4.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:eylower) is vacuous. Let $\mathop{\mathrm{rank}}B\le r$ and put $W:=\mathop{\mathrm{span}}\{v_{1},\dots,v_{r+1}\}$, of dimension $r+1$. The restriction $B|_{W}:W\to\mathcal{H}_{\mathrm{obs}}$ has rank at most $r<\dim W$, so by rank–nullity there exists $v\in W$ with $\lVert v\rVert=1$ and $Bv=0$. Write $v=\sum_{n=1}^{r+1}c_{n}v_{n}$ with $\sum_{n=1}^{r+1}\lvert c_{n}\rvert^{2}=1$. Then by [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd), $$\lVert(K-B)v\rVert^{2}=\lVert Kv\rVert^{2}
=\Bigl\lVert\sum_{n=1}^{r+1}c_{n}\sigma_{n}u_{n}\Bigr\rVert^{2}
=\sum_{n=1}^{r+1}\sigma_{n}^{2}\lvert c_{n}\rvert^{2}
\ \ge\ \sigma_{r+1}^{2}\sum_{n=1}^{r+1}\lvert c_{n}\rvert^{2}
=\sigma_{r+1}^{2},$$ since $\sigma_{n}\ge\sigma_{r+1}$ for $n\le r+1$. Therefore $\lVert K-B\rVert_{\mathrm{op}}\ge\lVert(K-B)v\rVert\ge\sigma_{r+1}$. ◻

</div>

Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) is the operator-norm form of the Eckart–Young–Mirsky theorem \[[14](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Schmidt), [2](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EckartYoung), [9](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mirsky)\]. It quantifies (D3) and nothing else: it is an approximation statement about *how well a finite-rank operator can imitate $K$*. It says nothing about $\ker K$ and nothing about invertibility.

<div class="example">

**Example 4.5** (Compact, injective, unstably invertible).

<div id="ex:diagonal">

</div>

On $\mathcal{H}_{\mathrm{src}}=\mathcal{H}_{\mathrm{obs}}=\ell^{2}(\mathbb{N})$ define $$
K(x_{1},x_{2},x_{3},\dots)
:=\Bigl(x_{1},\tfrac{x_{2}}{2},\tfrac{x_{3}}{3},\dots\Bigr),
\qquad\text{i.e.}\quad
(Kx)_{n}=\frac{x_{n}}{n}.\tag{4.7}$$ Let $\{e_{n}\}$ be the standard basis. Then:

1.  **$K$ is compact.** Let $K_{r}$ be as in Definition [4.3](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#def:trunc), which here is $(K_{r}x)_{n}=x_{n}/n$ for $n\le r$ and $0$ for $n>r$; this has rank $r$. For any $x$ with $\lVert x\rVert\le1$, $\lVert(K-K_{r})x\rVert^{2}=\sum_{n>r}\lvert x_{n}\rvert^{2}/n^{2}\le(r+1)^{-2}$, so $\lVert K-K_{r}\rVert_{\mathrm{op}}\le1/(r+1)\to0$. A norm limit of finite-rank operators is compact \[[13](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-ReedSimon1), Thm. VI.12\]. (This also exhibits the singular system explicitly: $v_{n}=u_{n}=e_{n}$, $\sigma_{n}=1/n$, and Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) gives the exact value $\lVert K-K_{r}\rVert_{\mathrm{op}}=\sigma_{r+1}=1/(r+1)$.)

2.  **$K$ is injective.** If $Kx=0$ then $x_{n}/n=0$ for every $n$, so $x=0$. Hence $\ker K=\{0\}$ and, by Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss), *no* exact source distinction is lost: the observational equivalence relation $\sim_{K}$ is equality.

3.  **The inverse on the range is unbounded, and $\operatorname{Ran}K$ is not closed.** On $\operatorname{Ran}K$ the inverse is $(K^{-1}y)_{n}=n\,y_{n}$. Then $K^{-1}e_{n}=n e_{n}$ has norm $n$ while $\lVert e_{n}\rVert=1$, so $K^{-1}$ is unbounded. By Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient), $\operatorname{Ran}K$ is therefore not closed. Concretely, $y=(1/n)_{n\ge1}\in\ell^{2}$ is the limit of $K(\,(1,\dots,1,0,0,\dots)\,)$ but is not in $\operatorname{Ran}K$, since $K^{-1}y=(1,1,1,\dots)\notin\ell^{2}$.

</div>

Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal) decouples the three static phenomena completely. $K$ is compact, so it admits arbitrarily good, quantitatively controlled finite-rank approximations (D3), and, more sharply, Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) gives the exact approximation error. $K$ is injective, so (D1) fails: nothing is exactly identified, and the quotient $\mathcal{H}_{K}$ is $\mathcal{H}_{\mathrm{src}}$ itself. Yet $K^{-1}$ is unbounded, so (D2) holds in full force: the source is determined by the readout, but not continuously, and no stability estimate as in Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient)(3) is available. *Compactness does not imply a nontrivial kernel*, what it does imply is the controlled finite-rank approximation of Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey), and a trivial kernel does not imply stable inversion. Note also that for this $K$, (D4) cannot occur under *any* source semigroup whatever: $\ker K=\{0\}$ is invariant trivially, so by [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4) the dynamics always descend, however violently the inversion is ill-conditioned. Instability of the inverse and failure of dynamical descent are different diseases. Any argument that slides between “the observation is compact”, “information is lost”, and “the source is nonidentifiable” has already conflated three different theorems.


# Descent of source dynamics

<div id="sec:descent">

</div>

We now add dynamics. Throughout this section, $K$ satisfies Assumption [2.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#ass:K), $N:=\ker K$, and $\{U(t)\}_{t\ge0}$ is a $C_{0}$-semigroup of bounded operators on $\mathcal{H}_{\mathrm{src}}$ representing source evolution $\Psi(t)=U(t)\Psi_{0}$.

<div class="definition">

**Definition 5.1** (Induced observable evolution).

<div id="def:induced">

</div>

A family $\{V(t)\}_{t\ge0}$ of linear maps $\operatorname{Ran}K\to\operatorname{Ran}K$ is an *induced observable evolution* if $$
K\,U(t)=V(t)\,K
\qquad\text{on }\mathcal{H}_{\mathrm{src}},\ \text{for every }t\ge0 .\tag{5.1}$$

</div>

Equation [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) is the precise sense in which the readout “has its own law of motion”: the observable state at time $t$ is a function of the observable state at time $0$ alone, uniformly in the source state realizing it.

<div class="theorem">

**Theorem 5.2** (Semigroup descent theorem).

<div id="thm:semigroup">

</div>

*The following are equivalent.*

1.  *There exists an induced observable evolution $\{V(t)\}_{t\ge0}$ in the sense of Definition [5.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#def:induced).*

2.  *Observational equivalence is preserved by source evolution: $$
    U(t)\,N\subseteq N
    \qquad\text{for every }t\ge0 .\tag{5.2}$$*

*When these hold, $V(t)$ is unique, is given by $$
V(t)\,(K\Psi):=K\,U(t)\Psi
\qquad(\Psi\in\mathcal{H}_{\mathrm{src}}),\tag{5.3}$$ and satisfies the semigroup laws $V(0)=I_{\operatorname{Ran}K}$ and $V(t+s)=V(t)V(s)$. Equivalently, $$
\bar U(t)[\Psi]:=[\,U(t)\Psi\,]\tag{5.4}$$ is a well-defined one-parameter semigroup on the quotient Hilbert space $\mathcal{H}_{K}$, and $\widetilde{K}\,\bar U(t)=V(t)\,\widetilde{K}$.*

</div>

<div class="proof">

*Proof.* *(1)$\Rightarrow$(2).* Let $n\in N$ and $t\ge0$. Then $Kn=0$, so by [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine), $$K\,U(t)n=V(t)\,Kn=V(t)\,0=0,$$ i.e. $U(t)n\in\ker K=N$. As $n\in N$ and $t\ge0$ were arbitrary, [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) holds.

*(2)$\Rightarrow$(1).* Fix $t\ge0$ and suppose $K\Psi=K\Psi'$. Then $\Psi-\Psi'\in N$, so by [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) $U(t)(\Psi-\Psi')\in N$, hence $$K\,U(t)\Psi-K\,U(t)\Psi'=K\,U(t)(\Psi-\Psi')=0 .$$ Therefore the prescription [(5.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vdef) depends only on the value $K\Psi\in\operatorname{Ran}K$ and not on the representative $\Psi$; it defines a map $V(t):\operatorname{Ran}K\to\mathcal{H}_{\mathrm{obs}}$, whose image lies in $\operatorname{Ran}K$ because $V(t)K\Psi=K(U(t)\Psi)\in\operatorname{Ran}K$. Linearity of $V(t)$ follows from linearity of $K$ and $U(t)$ together with surjectivity of $K$ onto $\operatorname{Ran}K$. Equation [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) holds by construction.

*Semigroup laws and uniqueness.* $V(0)K\Psi=KU(0)\Psi=K\Psi$, so $V(0)=I$ on $\operatorname{Ran}K$. For $s,t\ge0$, $$V(t)V(s)K\Psi=V(t)K\bigl(U(s)\Psi\bigr)=K\,U(t)U(s)\Psi=K\,U(t+s)\Psi=V(t+s)K\Psi ,$$ and since $K$ is onto $\operatorname{Ran}K$ this gives $V(t)V(s)=V(t+s)$. Uniqueness is likewise forced: any $V'(t)$ satisfying [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) agrees with $V(t)$ at every point $K\Psi$ of $\operatorname{Ran}K$.

*Quotient statement.* Well-definedness of $\bar U(t)$ in [(5.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Ubar) is exactly the implication just proved: $[\Psi]=[\Psi']$ means $\Psi-\Psi'\in N$, so $U(t)\Psi-U(t)\Psi'\in N$, so $[U(t)\Psi]=[U(t)\Psi']$. The semigroup laws for $\bar U$ follow from those of $U$ applied to representatives, and the intertwining $\widetilde{K}\bar U(t)[\Psi]=K U(t)\Psi=V(t)K\Psi=V(t)\widetilde{K}[\Psi]$ is immediate. Conversely, if $\bar U(t)$ is well defined by [(5.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Ubar) for all $t$, then applying it to $[n]=0$ for $n\in N$ gives $[U(t)n]=0$, i.e. [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). ◻

</div>

<div class="proposition">

**Proposition 5.3** (Topology of the induced evolution).

<div id="prop:topology">

</div>

*Assume [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). Then:*

1.  *$\bar U(t)$ is a $C_{0}$-semigroup of bounded operators on the quotient Hilbert space $\mathcal{H}_{K}$, with $\lVert\bar U(t)\rVert_{\mathcal{B}(\mathcal{H}_{K})}\le\lVert U(t)\rVert_{\mathcal{B}(\mathcal{H}_{\mathrm{src}})}$.*

2.  *Consequently $V(t)=\widetilde{K}\,\bar U(t)\,\widetilde{K}^{-1}$ is a $C_{0}$-semigroup of bounded operators on $\operatorname{Ran}K$ *equipped with the transported quotient norm* $\lVert\cdot\rVert_{\sharp}$ of Remark [2.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#rem:twonorms).*

3.  *If $\operatorname{Ran}K$ is closed, then $\lVert\cdot\rVert_{\sharp}$ and the inherited norm $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$ are equivalent on $\operatorname{Ran}K$, and hence $V(t)$ is a $C_{0}$-semigroup of bounded operators on $\operatorname{Ran}K$ in the inherited observable norm as well.*

4.  **Orbit continuity in the inherited norm is automatic, for every $K$, closed range or not.* For each $y=K\Psi\in\operatorname{Ran}K$ the orbit $t\mapsto V(t)y$ is continuous in $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$.*

5.  *What can fail when $\operatorname{Ran}K$ is not closed is *boundedness of the operator $V(t)$* on the normed space $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$. Precisely, $V(t)$ is bounded in the inherited norm if and only if there is a finite constant $C_{t}$ with $$
    \lVert K\,U(t)\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}\ \le\ C_{t}\,\lVert K\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}
    \qquad\text{for every }\Psi\in\mathcal{H}_{\mathrm{src}},\tag{5.5}$$ and this is an *additional* hypothesis: it does not follow from [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) alone. If [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) does hold for every $t\ge0$, then $\{V(t)\}$ is a strongly continuous semigroup of bounded operators on the *possibly incomplete* normed space $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$.*

6.  *Local uniform boundedness does *not* follow from (5) in the nonclosed case, because the Banach–Steinhaus theorem requires completeness of the domain and $\operatorname{Ran}K$ is then in general incomplete. If one *additionally* assumes $$
    \sup_{0\le t\le T}\lVert V(t)\rVert_{\mathrm{op}}<\infty
    \qquad\text{for every }T>0,\tag{5.6}$$ then each $V(t)$ extends uniquely to a bounded operator $\widehat V(t)$ on the completion $\overline{\operatorname{Ran}K}$, and $\{\widehat V(t)\}$ is a $C_{0}$-semigroup there. In the closed-range case $\operatorname{Ran}K$ is already complete, [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) is automatic, and the ordinary $C_{0}$-semigroup conclusions of (3) apply unchanged.*

</div>

<div class="proof">

*Proof.* (1) Boundedness: for any $n\in N$, [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) gives $U(t)n\in N$, hence $$\lVert\bar U(t)[\Psi]\rVert_{K}=\inf_{m\in N}\lVert U(t)\Psi+m\rVert
\le\inf_{n\in N}\lVert U(t)(\Psi+n)\rVert
\le\lVert U(t)\rVert\inf_{n\in N}\lVert\Psi+n\rVert
=\lVert U(t)\rVert\,\lVert[\Psi]\rVert_{K},$$ where in the first inequality we restricted the infimum to the subfamily $m=U(t)n$, $n\in N$, which is legitimate precisely because $U(t)N\subseteq N$. Strong continuity: for fixed $\Psi$, $\lVert\bar U(t)[\Psi]-[\Psi]\rVert_{K}\le\lVert U(t)\Psi-\Psi\rVert_{\mathcal{H}_{\mathrm{src}}}\to0$ as $t\downarrow0$ by strong continuity of $U$, and the semigroup laws are Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup). Strong continuity at $t=0$ plus local boundedness gives strong continuity on $[0,\infty)$ by the standard argument \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), Prop. I.5.3\].

\(2\) By construction $\widetilde{K}:(\mathcal{H}_{K},\lVert\cdot\rVert_{K})\to(\operatorname{Ran}K,\lVert\cdot\rVert_{\sharp})$ is an isometric isomorphism, and conjugation by an isometric isomorphism carries $C_{0}$-semigroups to $C_{0}$-semigroups.

\(3\) If $\operatorname{Ran}K$ is closed, Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient) makes $\widetilde{K}$ and $\widetilde{K}^{-1}$ bounded in the inherited norm, so $\lVert\cdot\rVert_{\sharp}$ and $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$ are equivalent on $\operatorname{Ran}K$; equivalent norms have the same bounded operators and the same strongly convergent limits.

\(4\) Let $y=K\Psi\in\operatorname{Ran}K$ and $t,t_{0}\ge0$. By [(5.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vdef) and boundedness of $K$, $$\lVert V(t)y-V(t_{0})y\rVert_{\mathcal{H}_{\mathrm{obs}}}
=\bigl\lVert K\bigl(U(t)\Psi-U(t_{0})\Psi\bigr)\bigr\rVert_{\mathcal{H}_{\mathrm{obs}}}
\le\lVert K\rVert_{\mathrm{op}}\,\lVert U(t)\Psi-U(t_{0})\Psi\rVert_{\mathcal{H}_{\mathrm{src}}}
\xrightarrow[\;t\to t_{0}\;]{}0$$ by strong continuity of $U$. Thus every orbit is continuous in the inherited norm, whatever $\operatorname{Ran}K$ may be. (Note that the estimate is made through the *representative* $\Psi$, which is legitimate because $V(t)y$ does not depend on the choice of representative, by Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup).)

\(5\) The stated equivalence is the definition of boundedness of the linear map $V(t)$ from $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ to itself, once one writes a general element of $\operatorname{Ran}K$ as $K\Psi$ and recalls $V(t)K\Psi=KU(t)\Psi$: the inequality $\lVert V(t)y\rVert\le C_{t}\lVert y\rVert$ for all $y\in\operatorname{Ran}K$ is exactly [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd). It is not implied by [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance): in the nonclosed case $\widetilde{K}^{-1}$ is unbounded in the inherited norm, so the conjugation argument of (2) is unavailable, and no such $C_{t}$ is produced.

Suppose now [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) holds for every $t\ge0$. Then each $V(t)$ is a bounded operator on the normed space $\operatorname{Ran}K$, the semigroup laws hold by Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup), and by part (4) the map $t\mapsto V(t)y$ is continuous for every $y\in\operatorname{Ran}K$; so $\{V(t)\}$ is a strongly continuous semigroup of bounded operators on $\operatorname{Ran}K$. That is all that follows, and we stop there.

\(6\) We do *not* obtain [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) from (5). The usual route, pointwise boundedness of $\{V(t):0\le t\le T\}$ on each vector (which does hold, each orbit being the continuous image of a compact interval) plus Banach–Steinhaus, is unavailable, because Banach–Steinhaus requires the domain to be complete, and when $\operatorname{Ran}K$ is not closed it is an incomplete normed space. Nor may one evade this by passing to the completion $\overline{\operatorname{Ran}K}$ first: pointwise boundedness has been established only on the dense subspace $\operatorname{Ran}K$, not at every vector of $\overline{\operatorname{Ran}K}$, and a family of operators that is pointwise bounded on a dense subspace need not be pointwise bounded on the whole space absent a uniform bound, which is precisely what is at issue. So [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) is an extra hypothesis.

Assume it. Then for $0\le t\le T$ the operator $V(t)$ is bounded on the dense subspace $\operatorname{Ran}K$ of $\overline{\operatorname{Ran}K}$ with $\lVert V(t)\rVert_{\mathrm{op}}\le M_{T}
:=\sup_{0\le t\le T}\lVert V(t)\rVert_{\mathrm{op}}<\infty$, so it extends uniquely to a bounded operator $\widehat V(t)$ on $\overline{\operatorname{Ran}K}$ with the same norm (uniformly continuous extension from a dense subspace of a complete space). The semigroup laws pass to the closure by density and continuity. For strong continuity, let $\hat y\in\overline{\operatorname{Ran}K}$ and $\varepsilon>0$; pick $y\in\operatorname{Ran}K$ with $\lVert\hat y-y\rVert<\varepsilon$; then for $0\le t\le T$, $$\lVert\widehat V(t)\hat y-\hat y\rVert
\le\lVert\widehat V(t)(\hat y-y)\rVert+\lVert V(t)y-y\rVert+\lVert y-\hat y\rVert
\le(M_{T}+1)\varepsilon+\lVert V(t)y-y\rVert ,$$ and the middle term tends to $0$ as $t\downarrow0$ by part (4). Hence $\widehat V(t)\hat y\to\hat y$, and $\{\widehat V(t)\}$ is a $C_{0}$-semigroup on $\overline{\operatorname{Ran}K}$. In the closed-range case $\operatorname{Ran}K=\overline{\operatorname{Ran}K}$ is complete, [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) follows from the standard local boundedness of the $C_{0}$-semigroup already produced in (3), and nothing new is needed. ◻

</div>

The three-way distinction just drawn, orbit continuity (free), operator boundedness [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) (an extra hypothesis), local uniform boundedness [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) (a further one), collapses entirely when $\operatorname{Ran}K$ is closed, and it is only the nonclosed case that forces one to keep the three apart.

<div class="corollary">

**Corollary 5.4** (Failure of autonomous descent).

<div id="cor:failure">

</div>

*Suppose there exist $n\in\ker K$ and $t_{0}>0$ with $$
K\,U(t_{0})\,n\neq0 .\tag{5.7}$$ Then the two source states $\Psi=0$ and $\Psi'=n$ satisfy $K\Psi=K\Psi'=0$ at time zero but $K U(t_{0})\Psi=0\neq KU(t_{0})\Psi'$. Consequently there is *no* single-valued map $V(t_{0})$ on $\operatorname{Ran}K$ satisfying [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine): no autonomous law on the present observable state reproduces the readouts of both source trajectories. More generally, for *any* $\Psi$, the pair $\Psi$ and $\Psi+n$ are observationally identical at $t=0$ and observationally distinct at $t=t_{0}$.*

</div>

<div class="proof">

*Proof.* If such a $V(t_{0})$ existed, [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) applied to $n$ would give $KU(t_{0})n=V(t_{0})Kn=0$, contradicting [(5.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:failure). The general statement follows by linearity: $K(\Psi+n)=K\Psi$, while $KU(t_{0})(\Psi+n)-KU(t_{0})\Psi=KU(t_{0})n\neq0$. ◻

</div>

Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) is (D4) in its bluntest form, and it should be contrasted carefully with Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss). Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss) says the readout at a single time cannot distinguish $\Psi$ from $\Psi+n$. Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) says something strictly stronger: the *future* readouts *can* distinguish them. The hypothesis of Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) presupposes a nonzero $n\in\ker K$, so it can only be met when $\ker K\neq\{0\}$, this is [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4) again, and it is why (D4) is not logically independent of (D1) but strictly stronger than it. What (D1) leaves open, and what Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) decides, is whether the nontrivial kernel is invariant. Hidden structure that is dynamically inert ($U(t)N\subseteq N$) costs the observable theory nothing, however large $N$ is; hidden structure that is dynamically active makes the observable theory nonautonomous, however tidy its instantaneous state space may be. The whole of Sections [6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion) is a quantitative account of exactly how much it costs.

<div class="proposition">

**Proposition 5.5** (Bounded generator).

<div id="prop:bddgen">

</div>

*Suppose $L\in\mathcal{B}(\mathcal{H}_{\mathrm{src}})$ and $U(t)=e^{tL}$. Then [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) holds if and only if $$
L\,N\subseteq N .\tag{5.8}$$*

</div>

<div class="proof">

*Proof.* ($\Leftarrow$) If $LN\subseteq N$ then $L^{k}N\subseteq N$ for all $k\ge0$ by induction. For $n\in N$, the partial sums $\sum_{k=0}^{m}\tfrac{t^{k}}{k!}L^{k}n$ lie in $N$ and converge in norm to $e^{tL}n$; since $N$ is closed, $e^{tL}n\in N$.

($\Rightarrow$) If $e^{tL}N\subseteq N$ for all $t\ge0$ and $n\in N$, then $t^{-1}(e^{tL}n-n)\in N$ for $t>0$, and $N$ closed gives $Ln=\lim_{t\downarrow0}t^{-1}(e^{tL}n-n)\in N$, the limit existing in norm because $L$ is bounded. ◻

</div>

<div class="remark">

*Remark 21* (Unbounded generators).

<div id="rem:unbdd">

</div>

If $L$ is the (generally unbounded) generator of $U(t)$ with domain $D(L)$, the algebraic condition $$L\bigl(N\cap D(L)\bigr)\subseteq N$$ does *not* by itself settle [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). Two separate issues arise: domain invariance ($U(t)$ need not map $N\cap D(L)$ into $D(L)$ in a way compatible with the difference-quotient argument above) and the density/core structure of $N\cap D(L)$ in $N$ (which may be trivial in pathological cases). Correct criteria for invariance of a closed subspace under a $C_{0}$-semigroup are formulated in terms of the resolvent, for instance, $U(t)N\subseteq N$ for all $t\ge0$ if and only if $(\lambda-L)^{-1}N\subseteq N$ for all sufficiently large real $\lambda$, and require verification in each application; see \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), §II.2 and §IV.2\]. We do not use unbounded generators anywhere in the theorems below, and we do not assert their invariance theory here.

</div>


# The exact projected-dynamics identity

<div id="sec:projection">

</div>

<div class="assumption">

**Assumption 6.1**.

<div id="ass:proj">

</div>

For the remainder of Sections [6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion): $\mathcal{H}$ is a Hilbert space; $P\in\mathcal{B}(\mathcal{H})$ is an orthogonal projection onto a closed *resolved* subspace $\mathcal{H}_{P}:=P\mathcal{H}$; $Q:=I-P$ is the orthogonal projection onto the *unresolved* subspace $\mathcal{H}_{Q}:=Q\mathcal{H}$; and $L\in\mathcal{B}(\mathcal{H})$ generates the source evolution $$
\dot\Psi(t)=L\Psi(t),
\qquad
\Psi(0)=\Psi_{0}\in\mathcal{H},\tag{6.1}$$ whose unique solution is $\Psi(t)=e^{tL}\Psi_{0}$.

</div>

This is the case $K=P$ of the previous section: the readout literally *is* the resolved component, $\mathcal{H}_{\mathrm{obs}}=\mathcal{H}_{P}$, $\operatorname{Ran}P=\mathcal{H}_{P}$ is closed, and $\ker P=\mathcal{H}_{Q}$. It is the setting in which the cost of failed descent can be computed in closed form. Write $$
x(t):=P\Psi(t)\in\mathcal{H}_{P},
\qquad
z(t):=Q\Psi(t)\in\mathcal{H}_{Q},\tag{6.2}$$ so that $\Psi(t)=x(t)+z(t)$ and $x(0)=P\Psi_{0}$, $z(0)=:z_{0}=Q\Psi_{0}$. Applying $P$ and $Q$ to [(6.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:sourceeq) and inserting $I=P+Q$ gives the exact block system $$\begin{aligned}
\dot x(t)&=PLP\,x(t)+PLQ\,z(t),\qquad\text{(6.3)}\\
\dot z(t)&=QLP\,x(t)+QLQ\,z(t).\qquad\text{(6.4)}
\end{aligned}$$ Note that $PLQ:\mathcal{H}_{Q}\to\mathcal{H}_{P}$ measures precisely how the unresolved sector drives the resolved one, and $QLP:\mathcal{H}_{P}\to\mathcal{H}_{Q}$ how the resolved sector feeds back into the unresolved one.

<div class="theorem">

**Theorem 6.2** (Exact projected-dynamics equation).

<div id="thm:projected">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj), for every source initial state $\Psi_{0}=x(0)+z_{0}$ the resolved component $x(t)=Pe^{tL}\Psi_{0}$ satisfies, for all $t\ge0$, $$
\boxed{\ \
\dot x(t)
=PLP\,x(t)
\;+\;PLQ\,e^{tQLQ}z_{0}
\;+\;\int_{0}^{t}PLQ\,e^{(t-s)QLQ}\,QLP\,x(s)\,ds .
\ \ }\tag{6.5}$$ Defining the *unresolved-initial-state term* $$
\eta_{z_{0}}(t):=PLQ\,e^{tQLQ}z_{0}\ \in\mathcal{H}_{P}\tag{6.6}$$ and the *memory kernel* $$
\mathcal{K}(\tau):=PLQ\,e^{\tau QLQ}\,QLP\ \in\mathcal{B}(\mathcal{H}_{P}),\tag{6.7}$$ equation [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) reads $$
\dot x(t)=PLP\,x(t)+\eta_{z_{0}}(t)+\int_{0}^{t}\mathcal{K}(t-s)\,x(s)\,ds .\tag{6.8}$$ Both $\eta_{z_{0}}$ and $\mathcal{K}$ are continuous in $t$, with the bounds $\lVert\eta_{z_{0}}(t)\rVert\le\lVert PLQ\rVert\,e^{t\lVert QLQ\rVert}\lVert z_{0}\rVert$ and $\lVert\mathcal{K}(\tau)\rVert_{\mathrm{op}}\le\lVert PLQ\rVert\,\lVert QLP\rVert\,e^{\tau\lVert QLQ\rVert}$.*

</div>

<div class="proof">

*Proof.* Equation [(6.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockz) is an inhomogeneous linear ODE in the Banach space $\mathcal{H}_{Q}$ with bounded generator $QLQ\in\mathcal{B}(\mathcal{H}_{Q})$ and continuous inhomogeneity $t\mapsto QLP\,x(t)$ (continuous because $t\mapsto e^{tL}\Psi_{0}$ is norm-continuous and $QLP$ is bounded). Variation of constants gives the unique solution $$
z(t)=e^{tQLQ}z_{0}+\int_{0}^{t}e^{(t-s)QLQ}\,QLP\,x(s)\,ds ,\tag{6.9}$$ the integral being a Riemann (equivalently Bochner) integral of a continuous $\mathcal{H}_{Q}$-valued integrand. Indeed, put $w(t):=e^{-tQLQ}z(t)$; then $w$ is differentiable with $\dot w(t)=e^{-tQLQ}\bigl(\dot z(t)-QLQ\,z(t)\bigr)=e^{-tQLQ}QLP\,x(t)$ by [(6.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockz), and integrating from $0$ to $t$ and multiplying by $e^{tQLQ}$ yields [(6.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:duhamel). Uniqueness holds because the difference of two solutions solves the homogeneous equation with zero data.

Substituting [(6.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:duhamel) into [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) and applying the bounded operator $PLQ$ under the integral sign gives $$\dot x(t)
=PLP\,x(t)
+PLQ\,e^{tQLQ}z_{0}
+\int_{0}^{t}PLQ\,e^{(t-s)QLQ}\,QLP\,x(s)\,ds ,$$ which is [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ); [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is a rewriting using [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta) and [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem), noting $\mathcal{K}(t-s)$ has argument $t-s\ge0$ throughout the integration range. The stated bounds follow from $\lVert e^{\tau QLQ}\rVert_{\mathrm{op}}\le e^{\tau\lVert QLQ\rVert}$ and submultiplicativity; continuity in $t$ follows from norm-continuity of $\tau\mapsto e^{\tau QLQ}$. ◻

</div>

<div class="remark">

*Remark 24* (What [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) is, and what it is not).

<div id="rem:MZ">

</div>

Equation [(6.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ) is an *identity*, valid for every source solution, obtained by nothing more than variation of constants. It is the projection-operator identity of Mori and Zwanzig \[[20](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig1960), [10](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mori1965), [21](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zwanzig2001)\] in the special case of a bounded generator and an orthogonal projection. In that literature the second term is often called the “fluctuating force” or “noise”, and $\mathcal{K}$ the “friction kernel”. We use neither word without qualification, and we record explicitly what has *not* been done here:

1.  *$\eta_{z_{0}}$ is not stochastic.* It is a deterministic, linear, continuous function of the single vector $z_{0}\in\mathcal{H}_{Q}$, given by the closed formula [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta). It becomes a random process only if one additionally posits a probability measure on the unresolved initial data, an equilibrium ensemble, say, and that is an extra modelling hypothesis with its own physical content. We impose no such measure.

2.  *$\mathcal{K}$ is not a friction coefficient.* It is the exact kernel [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem). No fluctuation–dissipation relation has been derived, because no ensemble has been introduced with respect to which one could be stated.

3.  *No Markov approximation has been made.* The convolution in [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is over the entire history $[0,t]$. Replacing $\mathcal{K}$ by $\delta$-correlated kernel, or taking a timescale-separation limit, would produce a different (approximate) equation; we take no such limit.

4.  *No ensemble average or coarse-graining functional appears.* $P$ is an orthogonal projection on a Hilbert space, chosen by the modeller, and nothing else.

The physical content of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is therefore modest and exact: if the resolved sector does not close, then the resolved trajectory is determined by resolved initial data *plus* an inhomogeneity carrying unresolved initial data *plus* a convolution over its own past. These are three structurally distinct dependences, and [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) says they are the only ones.

</div>

<div class="theorem">

**Theorem 6.4** (Autonomous-closure criterion).

<div id="thm:closure">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj), the following are equivalent.*

1.  *There exists a single operator $Y\in\mathcal{B}(\mathcal{H}_{P})$ such that, *for every* source initial state $\Psi_{0}\in\mathcal{H}$, that is, for every $x(0)\in\mathcal{H}_{P}$ and every $z_{0}\in\mathcal{H}_{Q}$, the resolved component $x(t)=Pe^{tL}\Psi_{0}$ satisfies the autonomous first-order equation $$
    \dot x(t)=Y\,x(t),\qquad t\ge0 .\tag{6.10}$$*

2.  *$PLQ=0$.*

3.  *$L(\ker P)\subseteq\ker P$, i.e. $L\,\mathcal{H}_{Q}\subseteq\mathcal{H}_{Q}$.*

*When they hold, $Y=PLP|_{\mathcal{H}_{P}}$ is unique, and both $\eta_{z_{0}}\equiv0$ (for every $z_{0}$) and $\mathcal{K}\equiv0$.*

</div>

<div class="proof">

*Proof.* *(2)$\Rightarrow$(1) and the value of $Y$.* If $PLQ=0$ then [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) reduces immediately to $\dot x(t)=PLP\,x(t)$ for every source solution, which is [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) with $Y=PLP|_{\mathcal{H}_{P}}$. Moreover $\eta_{z_{0}}(t)=PLQ\,e^{tQLQ}z_{0}=0$ for all $t$ and all $z_{0}$, and $\mathcal{K}(\tau)=PLQ\,e^{\tau QLQ}QLP=0$, so the last two terms of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) vanish identically, consistently.

*(1)$\Rightarrow$(2).* This is where the quantifier “for every source initial state” does the work. Fix any $x_{0}\in\mathcal{H}_{P}$ and any two unresolved data $z_{0},z_{0}'\in\mathcal{H}_{Q}$. The two source initial states $\Psi_{0}=x_{0}+z_{0}$ and $\Psi_{0}'=x_{0}+z_{0}'$ have the same resolved component $x(0)=x'(0)=x_{0}$. By hypothesis both resolved trajectories obey [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) with the *same* $Y$, so evaluating at $t=0$, $$\dot x(0)=Y x_{0}=\dot x'(0).$$ On the other hand [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) at $t=0$ gives the true initial velocities $$\dot x(0)=PLP\,x_{0}+PLQ\,z_{0},
\qquad
\dot x'(0)=PLP\,x_{0}+PLQ\,z_{0}' .$$ Equating and cancelling $PLP\,x_{0}$ yields $PLQ\,(z_{0}-z_{0}')=0$. Since $z_{0},z_{0}'$ range over all of $\mathcal{H}_{Q}$, the difference $z_{0}-z_{0}'$ ranges over all of $\mathcal{H}_{Q}$, whence $PLQ=0$ as an operator $\mathcal{H}_{Q}\to\mathcal{H}_{P}$. Taking $z_{0}=0$ in [(6.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:autonomous) and [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx) then forces $Yx_{0}=PLP\,x_{0}$ for all $x_{0}\in\mathcal{H}_{P}$, i.e. $Y=PLP|_{\mathcal{H}_{P}}$, which also gives uniqueness of $Y$.

*(2)$\Leftrightarrow$(3).* $\ker P=\mathcal{H}_{Q}=\operatorname{Ran}Q$. Now $L\mathcal{H}_{Q}\subseteq\mathcal{H}_{Q}$ means $PL\zeta=0$ for every $\zeta\in\mathcal{H}_{Q}$, i.e. $PLQ\Psi=0$ for every $\Psi\in\mathcal{H}$, i.e. $PLQ=0$. Conversely $PLQ=0$ gives $PL\zeta=PLQ\zeta=0$ for $\zeta\in\mathcal{H}_{Q}$, so $L\zeta=(P+Q)L\zeta=QL\zeta\in\mathcal{H}_{Q}$. ◻

</div>

<div class="remark">

*Remark 26* (The quantifier is not decorative).

<div id="rem:quantifier">

</div>

Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) is a statement about *all* source states. Three distinct weaker phenomena must not be mistaken for autonomous closure:

1.  *Closure on a prepared state.* If $z_{0}\in N_{Q}$, see [(7.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQ), then $\eta_{z_{0}}\equiv0$ and the *initial-state* term drops out *for that state*. The memory kernel $\mathcal{K}$ is unaffected: by [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem) it is determined by $L$ and $P$ alone and does not depend on $z_{0}$ at all, so no preparation of the unresolved initial data can remove it. The resolved motion of such a state is therefore still history-dependent, and other initial states fail even the weaker condition. Vanishing of the initial-state term in one specially prepared state is not closure.

2.  *Static quotient.* That $\mathcal{H}_{P}\cong\mathcal{H}/\mathcal{H}_{Q}$ is a perfectly good Hilbert space says nothing whatever about $PLQ$. This is (D1)/(D4) again.

3.  *Small singular values.* That $PLQ$ has small norm makes the coupling weak and may justify a perturbative approximation, with a controllable error. It does not make the projected equation autonomous, and no truncation of [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is exact unless $PLQ=0$ identically. This is (D3)/(D4).

Finally, observe that Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)(3) is precisely the invariance condition [(5.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:LNN) of Proposition [5.5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#prop:bddgen) for the observation operator $K=P$, whose kernel is $\mathcal{H}_{Q}$. Theorems [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) and [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) therefore agree, as they must: the semigroup descends exactly when the projected equation closes.

</div>

<div class="example">

**Example 6.6** (A completely calculated block).

<div id="ex:block">

</div>

Take $\mathcal{H}=\mathbb{C}^{3}$ with the standard basis $e_{1},e_{2},e_{3}$, let $P$ project onto $\mathcal{H}_{P}=\mathop{\mathrm{span}}\{e_{1}\}$ and $Q$ onto $\mathcal{H}_{Q}=\mathop{\mathrm{span}}\{e_{2},e_{3}\}$, and let $$L=\begin{pmatrix} a & b_{1} & b_{2}\\ c_{1} & d & 0\\ c_{2} & 0 & \mu\end{pmatrix},$$ so that $$PLP=(a),\quad
PLQ=\begin{pmatrix}b_{1}&b_{2}\end{pmatrix},\quad
QLP=\begin{pmatrix}c_{1}\\ c_{2}\end{pmatrix},\quad
QLQ=\begin{pmatrix}d&0\\0&\mu\end{pmatrix},$$ with $d\neq\mu$. Write $x(t)\in\mathbb{C}$ for the resolved component and $z_{0}=(z_{0}^{(2)},z_{0}^{(3)})^{\mathsf T}$.

*(i) Same readout, different projected velocity.* Suppose $b_{1}\neq0$. The two source states $\Psi_{0}=x_{0}e_{1}$ and $\Psi_{0}'=x_{0}e_{1}+e_{2}$ have identical resolved component $x_{0}$, hence identical readout at $t=0$. By [(6.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:blockx), $$\dot x(0)=a x_{0},
\qquad
\dot x'(0)=a x_{0}+b_{1}\neq\dot x(0).$$ No autonomous law $\dot x=Yx$ can produce both, confirming Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure): here $PLQ=(b_{1}\ b_{2})\neq0$.

*(ii) The initial-state term and memory kernel.* Since $QLQ$ is diagonal, $e^{\tau QLQ}=\operatorname{diag}(e^{\tau d},e^{\tau\mu})$, and [(6.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:eta), [(6.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:Kmem) give in closed form $$\eta_{z_{0}}(t)=b_{1}e^{td}\,z_{0}^{(2)}+b_{2}e^{t\mu}\,z_{0}^{(3)},
\qquad
\mathcal{K}(\tau)=b_{1}c_{1}e^{\tau d}+b_{2}c_{2}e^{\tau\mu},$$ so the exact projected equation [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) is the scalar Volterra equation $$\dot x(t)=a\,x(t)
+b_{1}e^{td}z_{0}^{(2)}+b_{2}e^{t\mu}z_{0}^{(3)}
+\int_{0}^{t}\Bigl(b_{1}c_{1}e^{(t-s)d}+b_{2}c_{2}e^{(t-s)\mu}\Bigr)x(s)\,ds .$$ Everything here is deterministic: $\eta_{z_{0}}$ is a sum of two exponentials with coefficients read off from $z_{0}$; there is no noise in sight.

*(iii) $N_{Q}$ and $E_{\mathrm{dyn}}$.* Here $m=\dim\mathcal{H}_{Q}=2$, so Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability) gives $N_{Q}=\ker(PLQ)\cap\ker(PLQ\cdot QLQ)$, i.e. the solutions of $$\begin{pmatrix} b_{1} & b_{2}\\ b_{1}d & b_{2}\mu\end{pmatrix}
\begin{pmatrix}z^{(2)}\\ z^{(3)}\end{pmatrix}=0 .$$ The observability matrix has determinant $b_{1}b_{2}(\mu-d)$. *Case A:* $b_{1},b_{2}\neq0$ and $d\neq\mu$. Then the determinant is nonzero, so $N_{Q}=\{0\}$ and $E_{\mathrm{dyn}}=\mathcal{H}_{Q}\cong\mathbb{C}^{2}$: both unresolved directions are dynamically distinguishable and must be retained. *Case B:* $b_{2}=0$, $b_{1}\neq0$. Then both rows are multiples of $(1\ 0)$, so $N_{Q}=\mathop{\mathrm{span}}\{e_{3}\}$ and $E_{\mathrm{dyn}}\cong\mathbb{C}$: the direction $e_{3}$ never influences the resolved trajectory through the initial-state term, and the minimal completion retains only $z^{(2)}$ (indeed $\mathcal{K}(\tau)=b_{1}c_{1}e^{\tau d}$ also loses its $e_3$ contribution). Note that $e_{3}$ is not dynamically trivial, it evolves as $e^{t\mu}$, it is merely *unobservable in the resolved response*, which is exactly the relativization Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal) makes precise.

</div>


# Minimal dynamical completion

<div id="sec:completion">

</div>

Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) says that when $PLQ\neq0$ the resolved state $x(0)$ is not enough to determine the resolved future. The natural question is then: *how much* unresolved information must be adjoined? The answer is not “all of $\mathcal{H}_{Q}$”. Distinct unresolved initial states may produce identical resolved responses, and directions that never affect the resolved trajectory need not be retained. We now identify exactly the right quotient.

Fix the target: the resolved response function generated by unresolved initial data alone.

<div class="definition">

**Definition 7.1** (Unresolved response map).

<div id="def:response">

</div>

Let $C([0,\infty),\mathcal{H}_{P})$ carry the topology of uniform convergence on compact subsets of $[0,\infty)$, i.e. the locally convex topology generated by the seminorms $p_{T}(f):=\sup_{0\le t\le T}\lVert f(t)\rVert_{\mathcal{H}_{P}}$, $T>0$. Define the linear map $$
\mathcal{O}_{Q}:\mathcal{H}_{Q}\longrightarrow C([0,\infty),\mathcal{H}_{P}),
\qquad
(\mathcal{O}_{Q}z_{0})(t):=PLQ\,e^{tQLQ}z_{0}=\eta_{z_{0}}(t).\tag{7.1}$$ $\mathcal{O}_{Q}$ is well defined (its values are continuous by Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected)) and continuous: $p_{T}(\mathcal{O}_{Q}z_{0})\le\lVert PLQ\rVert e^{T\lVert QLQ\rVert}\lVert z_{0}\rVert$ for every $T$.

</div>

<div class="definition">

**Definition 7.2** (Dynamically invisible directions).

<div id="def:NQ">

</div>

Set $$
N_{Q}:=\ker\mathcal{O}_{Q}
=\bigl\{\,z_{0}\in\mathcal{H}_{Q}:\ PLQ\,e^{tQLQ}z_{0}=0\ \ \text{for all }t\ge0\,\bigr\}
=\bigcap_{t\ge0}\ker\bigl(PLQ\,e^{tQLQ}\bigr).\tag{7.2}$$

</div>

<div class="lemma">

**Lemma 7.3**.

<div id="lem:NQclosed">

</div>

*$N_{Q}$ is a closed subspace of $\mathcal{H}_{Q}$, and consequently $$
E_{\mathrm{dyn}}:=\mathcal{H}_{Q}/N_{Q}\tag{7.3}$$ is a Hilbert space with the quotient norm $\lVert[z_{0}]\rVert_{E_{\mathrm{dyn}}}=\operatorname{dist}(z_{0},N_{Q})$.*

</div>

<div class="proof">

*Proof.* For each fixed $t\ge0$ the operator $PLQ\,e^{tQLQ}:\mathcal{H}_{Q}\to\mathcal{H}_{P}$ is bounded, so its kernel is a closed subspace. By [(7.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQ), $N_{Q}$ is the intersection of a family of closed subspaces, hence a closed subspace. The quotient of a Hilbert space by a closed subspace is a Hilbert space with the quotient norm, exactly as established after [(2.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:HK). ◻

</div>

Two unresolved initial states are called *dynamically equivalent for resolved evolution* when their difference lies in $N_{Q}$.

<div class="theorem">

**Theorem 7.4** (Minimal unresolved-state completion).

<div id="thm:minimal">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj):*

1.  *$\mathcal{O}_{Q}$ is constant exactly on the cosets of $N_{Q}$: for $z_{0},z_{0}'\in\mathcal{H}_{Q}$, $\mathcal{O}_{Q}z_{0}=\mathcal{O}_{Q}z_{0}'$ if and only if $z_{0}-z_{0}'\in N_{Q}$.*

2.  *Consequently $\mathcal{O}_{Q}$ descends to an *injective* continuous linear map $$
    \overline{\mathcal{O}}:E_{\mathrm{dyn}}\longrightarrow C([0,\infty),\mathcal{H}_{P}),
    \qquad
    \overline{\mathcal{O}}[z_{0}]:=\mathcal{O}_{Q}z_{0},\tag{7.4}$$ with $\mathcal{O}_{Q}=\overline{\mathcal{O}}\circ\pi$, where $\pi:\mathcal{H}_{Q}\to E_{\mathrm{dyn}}$ is the quotient map.*

3.  ***(Universality / minimality.)** Let $E$ be any set and $q:\mathcal{H}_{Q}\to E$ any surjective map which *determines every resolved response function*, meaning that there exists a map $F:E\to C([0,\infty),\mathcal{H}_{P})$ with $$
    \mathcal{O}_{Q}=F\circ q .\tag{7.5}$$ Then there is a unique map $\rho:E\to E_{\mathrm{dyn}}$ with $$
    \pi=\rho\circ q ,\tag{7.6}$$ and $\rho$ is surjective. If moreover $E$ is a vector space and $q$ is linear, then $\rho$ is linear.*

*Thus $E_{\mathrm{dyn}}$ is the coarsest extension of the resolved data that retains every unresolved distinction visible in the resolved response, and every sufficient extension maps onto it.*

</div>

<div class="proof">

*Proof.* (1) $\mathcal{O}_{Q}$ is linear, so $\mathcal{O}_{Q}z_{0}=\mathcal{O}_{Q}z_{0}'$ iff $\mathcal{O}_{Q}(z_{0}-z_{0}')=0$ iff $z_{0}-z_{0}'\in\ker\mathcal{O}_{Q}=N_{Q}$.

\(2\) By (1), the prescription [(7.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:Obar) is independent of the representative, hence well defined; it is linear because $\pi$ and $\mathcal{O}_{Q}$ are; and it is injective because $\overline{\mathcal{O}}[z_{0}]=0$ forces $z_{0}\in N_{Q}$, i.e. $[z_{0}]=0$. Continuity: for each $T$, $p_{T}(\overline{\mathcal{O}}[z_{0}])=p_{T}(\mathcal{O}_{Q}(z_{0}+n))\le
\lVert PLQ\rVert e^{T\lVert QLQ\rVert}\lVert z_{0}+n\rVert$ for every $n\in N_{Q}$; taking the infimum over $n$ gives $p_{T}(\overline{\mathcal{O}}[z_{0}])\le\lVert PLQ\rVert e^{T\lVert QLQ\rVert}
\lVert[z_{0}]\rVert_{E_{\mathrm{dyn}}}$.

\(3\) *Existence of $\rho$.* We first show $q$ separates no more coarsely than $\pi$; that is, $q(z_{0})=q(z_{0}')\Rightarrow\pi(z_{0})=\pi(z_{0}')$. Indeed if $q(z_{0})=q(z_{0}')$ then by [(7.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:factorsthrough) $$\mathcal{O}_{Q}z_{0}=F\bigl(q(z_{0})\bigr)=F\bigl(q(z_{0}')\bigr)=\mathcal{O}_{Q}z_{0}' ,$$ so by (1) $z_{0}-z_{0}'\in N_{Q}$, i.e. $\pi(z_{0})=\pi(z_{0}')$. Now define $\rho$ as follows: given $e\in E$, use surjectivity of $q$ to choose $z_{0}$ with $q(z_{0})=e$, and set $\rho(e):=\pi(z_{0})$. The implication just proved shows this is independent of the choice of $z_{0}$, so $\rho$ is a well-defined map $E\to E_{\mathrm{dyn}}$, and [(7.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:universal) holds by construction. It is surjective because $\pi$ is: any $[z_{0}]\in E_{\mathrm{dyn}}$ equals $\rho(q(z_{0}))$.

*Uniqueness of $\rho$.* If $\rho'$ also satisfies $\pi=\rho'\circ q$, then for every $e\in E$ pick $z_{0}$ with $q(z_{0})=e$; then $\rho'(e)=\rho'(q(z_{0}))=\pi(z_{0})=\rho(q(z_{0}))=\rho(e)$. Hence $\rho'=\rho$. (Uniqueness uses surjectivity of $q$, which is why it is included in the hypothesis: a nonsurjective extension leaves $\rho$ undetermined on the unreached part of $E$.)

*Linearity.* If $E$ is a vector space and $q$ is linear and surjective, then for $e=q(z_{0})$, $e'=q(z_{0}')$ and scalars $\alpha,\beta$ we have $\alpha e+\beta e'=q(\alpha z_{0}+\beta z_{0}')$, so $\rho(\alpha e+\beta e')=\pi(\alpha z_{0}+\beta z_{0}')
=\alpha\pi(z_{0})+\beta\pi(z_{0}')=\alpha\rho(e)+\beta\rho(e')$. ◻

</div>

We have stated the universal property in plain terms of maps and quotients of sets and vector spaces; no categorical apparatus is needed, and none is used. Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)(3) is the minimal-completion statement of \[[24](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper3)\] for the specific target relation $z_{0}\mapsto\mathcal{O}_{Q}z_{0}$, proved here directly so that the present paper stands alone.

<div class="remark">

*Remark 32* (Minimality is relative to the target).

<div id="rem:relative">

</div>

$E_{\mathrm{dyn}}$ may be strictly smaller than $\mathcal{H}_{Q}$, as Case B of Example [6.6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ex:block) shows. The directions in $N_{Q}$ are not “physically absent” in any absolute sense: they may evolve nontrivially under $e^{tQLQ}$, they may carry energy, they may be visible to a *different* readout. They are invisible *to the resolved response function*, and that is the target relative to which minimality is asserted. Change the target, ask instead for the resolved response *and* some other functional of the unresolved sector, and the minimal completion changes accordingly. This target-relativity is exactly the phenomenon isolated in \[[23](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper2)\]; it is not a defect but the content of the theorem.

</div>

<div class="theorem">

**Theorem 7.6** (Completed initial data close the resolved trajectory).

<div id="thm:volterra">

</div>

*Under Assumption [6.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#ass:proj), define the completed initial state space $$
\widehat{\mathcal{H}}_{P}:=\mathcal{H}_{P}\times E_{\mathrm{dyn}}.\tag{7.7}$$ Then the pair $\bigl(x(0),[z_{0}]\bigr)\in\widehat{\mathcal{H}}_{P}$ determines the resolved trajectory $x(\cdot)$ uniquely on $[0,\infty)$. Precisely: for each $T>0$, the linear Volterra equation of the second kind $$
x(t)=x(0)+\int_{0}^{t}\Bigl(PLP\,x(s)+\eta_{z_{0}}(s)
+\int_{0}^{s}\mathcal{K}(s-r)x(r)\,dr\Bigr)ds ,
\qquad 0\le t\le T,\tag{7.8}$$ equivalent to [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) with datum $x(0)$, has exactly one continuous solution $x\in C([0,T],\mathcal{H}_{P})$, and this solution depends on $z_{0}$ only through $[z_{0}]\in E_{\mathrm{dyn}}$.*

</div>

<div class="proof">

*Proof.* *Dependence only on $[z_{0}]$.* The kernel $\mathcal{K}$ is determined by $L$ and $P$ alone, and the only occurrence of $z_{0}$ in [(7.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:volterra) is through $\eta_{z_{0}}=\mathcal{O}_{Q}z_{0}$, which by Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)(1) depends only on the class $[z_{0}]$.

*Existence and uniqueness.* Fix $T>0$. Equation [(7.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:volterra) has the form $x=g+\mathcal{V}x$ on the Banach space $X:=C([0,T],\mathcal{H}_{P})$ with the sup-norm, where $g(t):=x(0)+\int_{0}^{t}\eta_{z_{0}}(s)\,ds$ is continuous, and $\mathcal{V}$ is the bounded linear Volterra operator $$(\mathcal{V}x)(t):=\int_{0}^{t}\Bigl(PLP\,x(s)+\int_{0}^{s}\mathcal{K}(s-r)x(r)\,dr\Bigr)ds .$$ Both $PLP$ and $\mathcal{K}$ are bounded, with $M:=\lVert PLP\rVert_{\mathrm{op}}+T\sup_{0\le\tau\le T}\lVert\mathcal{K}(\tau)\rVert_{\mathrm{op}}<\infty$ (the supremum is finite because $\mathcal{K}$ is norm-continuous on the compact $[0,T]$). An elementary induction gives the standard Volterra estimate $$\lVert(\mathcal{V}^{k}x)(t)\rVert\le\frac{(Mt)^{k}}{k!}\,\lVert x\rVert_{X},
\qquad 0\le t\le T,\ k\ge0,$$ so $\lVert\mathcal{V}^{k}\rVert_{\mathcal{B}(X)}\le(MT)^{k}/k!\to0$; hence $\mathcal{V}^{k}$ is a contraction for $k$ large, $I-\mathcal{V}$ is invertible with $(I-\mathcal{V})^{-1}=\sum_{k\ge0}\mathcal{V}^{k}$ convergent in operator norm, and $x=(I-\mathcal{V})^{-1}g$ is the unique solution in $X$ \[[5](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-GripenbergLondenStaffans), Ch. 2, Thm. 3.5\]. Since $T>0$ was arbitrary and solutions on nested intervals agree by uniqueness, $x$ is uniquely determined on $[0,\infty)$. ◻

</div>

Theorems [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal) and [7.6](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:volterra) together give the precise cost of failed descent. The resolved state alone is insufficient (Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)). The resolved state plus *all* of $\mathcal{H}_{Q}$ is sufficient but wasteful. The resolved state plus $E_{\mathrm{dyn}}$ is sufficient (Theorem [7.6](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:volterra)) and minimal (Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)). This is the exact sense in which the unresolved sector must be “completed” into the observable theory, and it is the exact sense in which only part of it need be.

<div class="proposition">

**Proposition 7.7** (Finite-dimensional observability criterion).

<div id="prop:observability">

</div>

*Suppose $\dim\mathcal{H}_{Q}=m<\infty$. Then $$
N_{Q}=\bigcap_{k=0}^{m-1}\ker\Bigl(PLQ\,(QLQ)^{k}\Bigr),\tag{7.9}$$ and $\dim E_{\mathrm{dyn}}=\mathop{\mathrm{rank}}\mathcal{O}_{m}$, where $\mathcal{O}_{m}$ is the observability map $$
\mathcal{O}_{m}:\mathcal{H}_{Q}\longrightarrow\mathcal{H}_{P}^{\,m},
\qquad
\mathcal{O}_{m}z=\Bigl(PLQ\,z,\ PLQ\,(QLQ)z,\ \dots,\ PLQ\,(QLQ)^{m-1}z\Bigr).\tag{7.10}$$*

</div>

<div class="proof">

*Proof.* Fix $z\in\mathcal{H}_{Q}$. Since $QLQ$ is bounded, $t\mapsto PLQ\,e^{tQLQ}z$ is given by the everywhere-convergent power series $$
PLQ\,e^{tQLQ}z=\sum_{k=0}^{\infty}\frac{t^{k}}{k!}\,PLQ\,(QLQ)^{k}z ,\tag{7.11}$$ which is a real-analytic (indeed entire) $\mathcal{H}_{P}$-valued function of $t$. Such a function vanishes identically on $[0,\infty)$ if and only if all its Taylor coefficients at $t=0$ vanish, i.e. iff $$
PLQ\,(QLQ)^{k}z=0
\qquad\text{for all }k\ge0 .\tag{7.12}$$ (One direction is trivial; for the other, differentiate [(7.11)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:taylor) $k$ times at $t=0$, which is legitimate by uniform convergence of the differentiated series on compacts.)

It remains to see that in [(7.12)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:allk) the range $0\le k\le m-1$ suffices. By the Cayley–Hamilton theorem applied to the operator $QLQ$ on the $m$-dimensional space $\mathcal{H}_{Q}$, $(QLQ)^{m}$ is a linear combination of $I,QLQ,\dots,(QLQ)^{m-1}$; by induction, every power $(QLQ)^{k}$ with $k\ge m$ is a linear combination of $I,\dots,(QLQ)^{m-1}$. Hence if $PLQ\,(QLQ)^{j}z=0$ for $0\le j\le m-1$, then applying $PLQ$ to the corresponding linear combination gives $PLQ\,(QLQ)^{k}z=0$ for every $k\ge m$ as well. This proves [(7.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQfinite).

Finally, [(7.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQfinite) says exactly $N_{Q}=\ker\mathcal{O}_{m}$, so by rank–nullity $\dim E_{\mathrm{dyn}}=\dim\mathcal{H}_{Q}-\dim N_{Q}=\mathop{\mathrm{rank}}\mathcal{O}_{m}$. ◻

</div>

<div class="remark">

*Remark 35* (Relation to Kalman observability).

<div id="rem:kalman">

</div>

Equation [(7.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:obsmatrix) is the observability map of linear control theory \[[6](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Kalman1960), [15](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Sontag)\] for the finite-dimensional linear system with state $z\in\mathcal{H}_{Q}$, state matrix $QLQ$, and output matrix $PLQ$: the pair $(PLQ,\,QLQ)$ is observable exactly when $\mathop{\mathrm{rank}}\mathcal{O}_{m}=m$, i.e. exactly when $N_{Q}=\{0\}$, i.e. exactly when *every* unresolved direction leaves a trace in the resolved response and the whole of $\mathcal{H}_{Q}$ must be retained. The dictionary must be read with care, however. What [(7.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:obsmatrix) tests is observability of the *unresolved sector through the resolved-response output*. It is *not* a claim that the full source system $(\mathcal{H},L)$ is observable from the resolved readout, which would additionally require that the resolved sector’s own dynamics and the coupling $QLP$ be taken into account. We assert only what [(7.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQfinite) states: $N_{Q}$, and hence $\dim E_{\mathrm{dyn}}$, is computable by a finite rank condition. The general Hilbert space case has no such finite reduction; there $N_{Q}$ is defined by [(7.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#eq:NQ) and closed by Lemma [7.3](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#lem:NQclosed), and no analogue of Cayley–Hamilton is available.

</div>


# Nonlinear dynamical descent

<div id="sec:nonlinear">

</div>

The criterion $PLQ=0$ has an exact nonlinear counterpart, obtained by replacing the linear quotient map by a surjective submersion and the linear generator by a smooth vector field.

<div class="assumption">

**Assumption 8.1**.

<div id="ass:submersion">

</div>

$S$ and $T$ are smooth manifolds, $p:S\to T$ is a smooth *surjective submersion* (so $Dp_{s}:T_{s}S\to T_{p(s)}T$ is surjective for every $s\in S$, and $p$ is onto), and $X$ is a smooth vector field on $S$.

</div>

The hypothesis that $p$ be a surjective submersion is not cosmetic. It guarantees (i) that $T$ is a genuine smooth manifold and $p^{-1}(t)$ an embedded submanifold for each $t$, and (ii) the existence of smooth local sections, which is what makes the smoothness argument in Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable) work. We make no claim about arbitrary set-theoretic quotients: a quotient of a manifold by an arbitrary equivalence relation need not be a smooth manifold at all, and nothing below should be read as asserting otherwise.

<div class="theorem">

**Theorem 8.2** (Nonlinear projectability criterion).

<div id="thm:projectable">

</div>

*Under Assumption [8.1](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#ass:submersion), there exists a smooth vector field $Y$ on $T$ with $$
Dp\circ X=Y\circ p ,
\qquad\text{i.e.}\qquad
Dp_{s}X_{s}=Y_{p(s)}\ \ \text{for every }s\in S,\tag{8.1}$$ if and only if $Dp$ applied to $X$ is constant along every fiber: $$
p(s)=p(s')\ \Longrightarrow\ Dp_{s}X_{s}=Dp_{s'}X_{s'}
\qquad\text{in }T_{p(s)}T .\tag{8.2}$$ When it exists, $Y$ is unique.*

</div>

<div class="proof">

*Proof.* *Necessity.* Suppose $Y$ exists and $p(s)=p(s')=:t$. Then by [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel), $Dp_{s}X_{s}=Y_{t}=Dp_{s'}X_{s'}$, and both sides lie in the same tangent space $T_{t}T$, so [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) holds.

*Sufficiency.* Assume [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst). For $t\in T$, use surjectivity of $p$ to pick $s\in p^{-1}(t)$ and define $$
Y_{t}:=Dp_{s}X_{s}\ \in T_{t}T .\tag{8.3}$$ By [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) this is independent of the chosen $s\in p^{-1}(t)$, so $Y:T\to TT$ is a well-defined section of $TT$: $Y_{t}\in T_{t}T$ by construction. Equation [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel) holds by definition.

*Smoothness.* Fix $t_{0}\in T$ and $s_{0}\in p^{-1}(t_{0})$. Because $p$ is a submersion, the local normal form for submersions \[[8](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Lee), Thm. 4.12\] provides an open neighbourhood $W\ni t_{0}$ in $T$ and a smooth local section $\sigma:W\to S$ with $p\circ\sigma=\mathrm{id}_{W}$ and $\sigma(t_{0})=s_{0}$. On $W$ we then have, from [(8.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:Ydef) applied with $s=\sigma(t)\in p^{-1}(t)$, $$
Y|_{W}=Dp\circ X\circ\sigma ,\tag{8.4}$$ which is a composition of smooth maps ($\sigma$ smooth, $X$ smooth as a section of $TS$, $Dp:TS\to TT$ smooth as the tangent map of a smooth map), hence smooth on $W$. Different choices of section give the same $Y$ on the overlap by fiber constancy [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst), so these local formulas patch to a globally well-defined smooth field. Since $t_{0}$ was arbitrary, $Y$ is smooth on $T$.

*Uniqueness.* If $Y$ and $Y'$ both satisfy [(8.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:prel), then for any $t\in T$ pick $s\in p^{-1}(t)$ (possible by surjectivity); then $Y_{t}=Dp_{s}X_{s}=Y'_{t}$. ◻

</div>

<div class="remark">

*Remark 38* (The nonlinear analogue of $PLQ\neq0$).

<div id="rem:nonlinear">

</div>

Failure of [(8.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#eq:fiberconst) says: there are two source states $s,s'$ with the *same* readout $p(s)=p(s')$ whose projected velocities $Dp_{s}X_{s}\neq Dp_{s'}X_{s'}$ differ. This is verbatim the phenomenon of Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure), where $p$ is the linear map $P$, the fibers are the affine subspaces $x_{0}+\mathcal{H}_{Q}$, and the projected velocity at $x_{0}+z_{0}$ is $PL(x_{0}+z_{0})=PLP\,x_{0}+PLQ\,z_{0}$, which is fiber-constant precisely when $PLQ=0$. Thus the linear closure criterion is the linearization, and $\href{#eq:fiberconst}{(8.2)}$ its exact generalization: *the flow descends to the observable manifold exactly when equal present readouts force equal projected velocities.* Nothing in Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable) produces a memory kernel; in the nonlinear setting the exact reduction identity of Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected) has no elementary counterpart, and the theorem should be read as supplying only the sharp criterion for descent, not a reduction formula.

</div>


# Elimination of a source sector: Schur-complement effective operators

<div id="sec:schur">

</div>

We now turn from state-space projection to *field-theoretic elimination*: the source variables split into a visible field $\varphi$ and a completion field $\chi$, and $\chi$ is removed by solving its own stationarity condition and substituting back. In the quadratic case this can be done exactly, and the result is a Schur complement.

<div class="assumption">

**Assumption 9.1**.

<div id="ass:schur">

</div>

$\mathcal{H}_{\varphi}$ and $\mathcal{H}_{\chi}$ are (real or complex) Hilbert spaces; $A\in\mathcal{B}(\mathcal{H}_{\varphi})$ and $C\in\mathcal{B}(\mathcal{H}_{\chi})$ are self-adjoint; $B\in\mathcal{B}(\mathcal{H}_{\chi},\mathcal{H}_{\varphi})$, with adjoint $B^{*}\in\mathcal{B}(\mathcal{H}_{\varphi},\mathcal{H}_{\chi})$; and $C$ is boundedly invertible, i.e. $C^{-1}\in\mathcal{B}(\mathcal{H}_{\chi})$ exists.

</div>

Define the quadratic action functional $$
S[\varphi,\chi]
:=\tfrac12\langle \varphi , A\varphi \rangle
+\operatorname{Re}\langle \varphi , B\chi \rangle
+\tfrac12\langle \chi , C\chi \rangle,
\qquad
(\varphi,\chi)\in\mathcal{H}_{\varphi}\times\mathcal{H}_{\chi}.\tag{9.1}$$ (In the real case $\operatorname{Re}$ is vacuous and we simply write $\langle \varphi , B\chi \rangle$; we keep it so that $S$ is real-valued in the complex case, which is what a physical action must be. Self-adjointness of $A$ and $C$ makes the first and third terms real automatically.)

<div class="theorem">

**Theorem 9.2** (Schur-complement effective action).

<div id="thm:schur">

</div>

*Under Assumption [9.1](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#ass:schur), for each fixed $\varphi\in\mathcal{H}_{\varphi}$ the stationarity condition $$
\frac{\partial S}{\partial\chi}=0
\qquad\Longleftrightarrow\qquad
C\chi+B^{*}\varphi=0\tag{9.2}$$ has the unique solution $$
\chi_{*}=\chi_{*}[\varphi]=-\,C^{-1}B^{*}\varphi ,\tag{9.3}$$ and substitution yields the exact reduced action $$
\boxed{\ \
S_{\mathrm{eff}}[\varphi]:=S[\varphi,\chi_{*}[\varphi]]
=\tfrac12\bigl\langle\varphi,\ \bigl(A-BC^{-1}B^{*}\bigr)\varphi\bigr\rangle .
\ \ }\tag{9.4}$$ The operator $A-BC^{-1}B^{*}\in\mathcal{B}(\mathcal{H}_{\varphi})$ is self-adjoint; it is the Schur complement of $C$ in the block operator matrix $\left(\begin{smallmatrix}A&B\\ B^{*}&C\end{smallmatrix}\right)$.*

</div>

<div class="proof">

*Proof.* *The $\chi$-equation.* Fix $\varphi$ and let $\delta\in\mathcal{H}_{\chi}$. Using $C=C^{*}$, $$\frac{d}{d\varepsilon}\bigg|_{\varepsilon=0}S[\varphi,\chi+\varepsilon\delta]
=\operatorname{Re}\langle \varphi , B\delta \rangle+\operatorname{Re}\langle \chi , C\delta \rangle
=\operatorname{Re}\langle B^{*}\varphi+C\chi , \delta \rangle .$$ (For the middle term: $\tfrac12\langle \chi+\varepsilon\delta , C(\chi+\varepsilon\delta) \rangle$ has $\varepsilon$-derivative at $0$ equal to $\tfrac12(\langle \delta , C\chi \rangle+\langle \chi , C\delta \rangle)=\operatorname{Re}\langle \chi , C\delta \rangle$ by self-adjointness.) This vanishes for all $\delta$ (taking also $i\delta$ in the complex case) iff $C\chi+B^{*}\varphi=0$, which is [(9.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chieq). As $C$ is boundedly invertible, the unique solution is [(9.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chistar), and $\chi_{*}$ depends boundedly and linearly on $\varphi$.

*Substitution.* Insert [(9.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chistar) into [(9.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:action). Term by term: $$\operatorname{Re}\langle \varphi , B\chi_{*} \rangle
=\operatorname{Re}\langle \varphi , -BC^{-1}B^{*}\varphi \rangle
=-\langle \varphi , BC^{-1}B^{*}\varphi \rangle,$$ the last step because $BC^{-1}B^{*}$ is self-adjoint: indeed $$(BC^{-1}B^{*})^{*}=B(C^{-1})^{*}B^{*}=B(C^{*})^{-1}B^{*}=BC^{-1}B^{*},$$ using $C^{*}=C$ and $(C^{-1})^{*}=(C^{*})^{-1}$, so that $\langle \varphi , BC^{-1}B^{*}\varphi \rangle$ is real. Next, $$\tfrac12\langle \chi_{*} , C\chi_{*} \rangle
=\tfrac12\langle -C^{-1}B^{*}\varphi , \,C\,(-C^{-1}B^{*}\varphi) \rangle
=\tfrac12\langle C^{-1}B^{*}\varphi , B^{*}\varphi \rangle
=\tfrac12\langle \varphi , BC^{-1}B^{*}\varphi \rangle,$$ where the last equality moves $B^{*}$ across as $B$ and uses self-adjointness of $C^{-1}$, which makes the quantity $\langle C^{-1}B^{*}\varphi , B^{*}\varphi \rangle$ real and equal to $\langle \varphi , BC^{-1}B^{*}\varphi \rangle$. Summing, $$S_{\mathrm{eff}}[\varphi]
=\tfrac12\langle \varphi , A\varphi \rangle
-\langle \varphi , BC^{-1}B^{*}\varphi \rangle
+\tfrac12\langle \varphi , BC^{-1}B^{*}\varphi \rangle
=\tfrac12\langle \varphi , \bigl(A-BC^{-1}B^{*}\bigr)\varphi \rangle,$$ which is [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff). Self-adjointness of $A-BC^{-1}B^{*}$ was verified above. ◻

</div>

<div class="remark">

*Remark 41* (Nonlocality of the effective operator).

<div id="rem:nonlocal">

</div>

The correction to the visible operator is $$
\Delta:=-\,BC^{-1}B^{*} ,\tag{9.5}$$ and it is derived, not postulated. What the theorem establishes is exactly the *form* of $\Delta$; whether $\Delta$ is nonlocal is a further question about the composed operator, and must not be read off from $C^{-1}$ alone. In field theory, when $\mathcal{H}_{\chi}$ is a space of functions on a spacetime region and $C$ is (the bounded realization of) a differential operator, $C^{-1}$ is an integral operator with a Green kernel $G(y,y')$, and $$(\Delta\varphi)(x)=-\int\!\!\int\!\!\int B(x,y)\,G(y,y')\,B^{*}(y',x')\,\varphi(x')\,dy\,dy'\,dx' .$$ This composition *can* be *nonlocal*: the effective equation for $\varphi$ at a point then involves $\varphi$ elsewhere, weighted by the Green function of the eliminated sector, even though the coupled source equations for $(\varphi,\chi)$ were strictly local.

The qualification is not pedantic, because nonlocality of $C^{-1}$ is *not* sufficient. The correction depends on the coupling as well: if $B=0$ there is no correction at all, and more generally $B$ may fail to couple to the nonlocal directions of $G$, or the two compositions $B$ and $B^{*}$ may conspire so that $BC^{-1}B^{*}$ collapses to a local (e.g. multiplication or differential) operator. A concrete instance: if $B$ is a rank-one coupling $B=\lvert f\rangle\langle h\rvert$, then $BC^{-1}B^{*}=\langle h , C^{-1}h \rangle\,\lvert f\rangle\langle f\rvert$, whose kernel is the product $\overline{f(x')}f(x)$ times a single scalar, the whole Green function $G$ has entered only through the number $\langle h , C^{-1}h \rangle$. We stress what this example does and does not show. The rank-one operator $\lvert f\rangle\langle f\rvert$ is itself generally *nonlocal* (its kernel $\overline{f(x')}f(x)$ does not concentrate on the diagonal), so the example does not exhibit a local effective operator; what it exhibits is that the detailed structure of $G$, the very thing one might expect to be imprinted on the correction, can collapse to a single number, leaving a correction whose nonlocal structure is dictated entirely by $B$ and not by the eliminated sector’s propagator. Nonlocality of the effective operator is therefore a property of $BC^{-1}B^{*}$, requiring that $B$ couple to the relevant Green-operator directions without cancellation; it is an additional verification, not a corollary of Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur).

Subject to that verification, elimination of a sector converts locality-with-extra-fields into nonlocality-with-fewer-fields, and there is an exact structural analogy with the memory kernel of Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected): there, eliminating $\mathcal{H}_{Q}$ converted a first-order ODE into an equation nonlocal *in time*, and there too the kernel $\mathcal{K}=PLQ\,e^{\tau QLQ}\,QLP$ can degenerate, it vanishes identically when $PLQ=0$ or $QLP=0$, so that nonlocality in time likewise depends on the couplings and not on the eliminated sector’s propagator alone. In both settings nonlocality is a possible price of the reduction, not an automatic one, and never a feature of the source.

</div>

<div class="remark">

*Remark 42* (Unbounded operators, and what would have to be supplied).

<div id="rem:unbddschur">

</div>

Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) is stated for *bounded* $A$, $B$, $C$ with $C$ boundedly invertible, and the proof uses boundedness at every step (in the differentiation, in the existence of $C^{-1}$ as a bounded operator, in the adjoint manipulations). It does *not* automatically cover the case where $A$ and $C$ are unbounded differential operators, which is the case of primary interest in field theory. To extend it one must supply, and verify: a common dense domain, or a formulation in terms of closed, densely defined, semibounded quadratic forms with form domains \[[7](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Kato), Ch. VI\]; boundary conditions making $C$ self-adjoint and rendering the integration by parts in the variation legitimate; invertibility of $C$ (equivalently, that $0\notin\sigma(C)$, which fails whenever the eliminated sector has zero modes, e.g. a massless field on a compact region with the wrong boundary conditions); and the boundedness of $C^{-1}$ from the form dual back to the form domain, so that $BC^{-1}B^{*}$ is defined on the form domain of $A$. None of this follows from the bounded proof, and we do not assert it here. Where the physics literature performs such eliminations with unbounded operators, the Green operator $C^{-1}=G$ is being used, and the validity of the manipulation is exactly the validity of the associated elliptic/hyperbolic solvability theory, which must be supplied case by case.

</div>

<div class="remark">

*Remark 43* (Tree level, not the quantum effective action).

<div id="rem:treelevel">

</div>

Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) is a statement of *classical stationary elimination*: $\chi$ is replaced by the solution of its classical field equation [(9.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:chieq). Equivalently, in a functional-integral language, [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff) is the tree-level (saddle-point) contribution. It is *not* the quantum effective action for $\varphi$. Integrating $\chi$ out of a Gaussian functional integral with weight $e^{iS[\varphi,\chi]}$ produces, in addition to [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff), a $\varphi$-independent determinant factor $(\det C)^{-1/2}$; if $C$ depends on $\varphi$ (a nonquadratic coupling, absent from Assumption [9.1](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#ass:schur)) the determinant becomes $\varphi$-dependent and contributes a genuine one-loop term $\tfrac{i}{2}\operatorname{Tr}\log C[\varphi]$; and beyond one loop there are further corrections \[[12](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Peskin), [17](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Weinberg2)\]. Nothing in Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) computes or bounds these. The theorem is exactly what it says: substitution of a stationary point into a quadratic functional.

</div>


# Effective metric response

<div id="sec:metric">

</div>

We finally allow the metric to participate, and ask what elimination of $\chi$ does to the gravitational field equations. The answer is a stationary-elimination (envelope) identity, which converts the eliminated sector into a *covariant variational response* rather than an unexplained additive term.

<div class="assumption">

**Assumption 10.1**.

<div id="ass:gravity">

</div>

Let $M$ be a smooth spacetime manifold. Let the metrics, visible fields, and completion fields range over open subsets $\mathcal{G}$, $\mathcal{F}_{\varphi}$, $\mathcal{F}_{\chi}$ of Banach spaces (equivalently, over Banach manifolds modelled on them, for definiteness one may take suitable Sobolev or weighted Hölder sections of the relevant bundles over $M$, with the boundary or fall-off conditions specified below built into the space). Let $$S:\mathcal{G}\times\mathcal{F}_{\varphi}\times\mathcal{F}_{\chi}\longrightarrow\mathbb{R}$$ be a real, diffeomorphism-invariant action functional which is *continuously Fréchet differentiable* ($C^{1}$) on its domain, and suppose the boundary/fall-off conditions defining the spaces are such that all integrations by parts performed below produce no boundary contributions, and such that the Fréchet derivatives are represented by the densities $\delta S/\delta g^{\mu\nu}$, $\delta S/\delta\varphi$, $\delta S/\delta\chi$ in the usual way, $$DS[g,\varphi,\chi]\,(h,\psi,\theta)
=\int_{M}\Bigl(\frac{\delta S}{\delta g^{\mu\nu}}h^{\mu\nu}
+\frac{\delta S}{\delta\varphi}\psi
+\frac{\delta S}{\delta\chi^{I}}\theta^{I}\Bigr)d^{4}x .$$ Suppose a *branch* $$
(g,\varphi)\ \longmapsto\ \chi_{*}[g,\varphi]\tag{10.1}$$ of solutions of the eliminated field equation $$
\left.\frac{\delta S}{\delta\chi(x)}\right|_{\chi=\chi_{*}[g,\varphi]}=0
\qquad\text{for all }x\in M\tag{10.2}$$ has been selected, and that this branch is a *continuously Fréchet differentiable* map $$\chi_{*}:\mathcal{G}\times\mathcal{F}_{\varphi}\longrightarrow\mathcal{F}_{\chi} .$$ (In practice such a branch is produced, where it exists, by the implicit function theorem in Banach spaces \[[18](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zeidler1), Ch. 4\], applied to the Euler map $(g,\varphi,\chi)\mapsto\delta S/\delta\chi$ at a solution where the linearization $\delta^{2}S/\delta\chi^{2}$ is a Banach-space isomorphism. That theorem requires the Euler map itself to be continuously Fréchet differentiable, which does *not* follow from $S\in C^{1}$; so for this remark, and for this remark only, assume additionally that $S\in C^{2}$, or equivalently for present purposes that $(g,\varphi,\chi)\mapsto\delta S/\delta\chi$ is itself continuously Fréchet differentiable. Under that extra hypothesis the implicit function theorem also delivers the $C^{1}$ dependence of $\chi_{*}$ assumed above. We emphasize that this strengthening is *not* imposed on Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) or used in Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope): the envelope identity needs only $S\in C^{1}$ together with the separately assumed $C^{1}$ branch $\chi_{*}$, however that branch is obtained. We do not verify any of these hypotheses for a particular action; we assume them.) Define the *reduced action* $$
\Gamma_{\mathrm{eff}}[g,\varphi]:=S\bigl[g,\varphi,\chi_{*}[g,\varphi]\bigr].\tag{10.3}$$

</div>

We stress the three hypotheses that are doing real work and that are frequently left tacit: (i) *differentiability of the branch* $\chi_{*}$, a solution of [(10.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chistargrav) need not depend differentiably on $(g,\varphi)$, and where several branches exist a choice has been made; (ii) *boundary conditions*, the variation $\delta\chi_{*}$ induced by a variation of $g$ must be an admissible variation, i.e. satisfy the same boundary conditions, or the envelope argument fails; (iii) *equivariance of the branch*, the assignment [(10.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:branch) must intertwine the diffeomorphism action, $\chi_{*}[\phi^{*}g,\phi^{*}\varphi]
=\phi^{*}\chi_{*}[g,\varphi]$ for diffeomorphisms $\phi$, if $\Gamma_{\mathrm{eff}}$ is to inherit the diffeomorphism invariance of $S$. Without (iii), $S$ can be invariant while $\Gamma_{\mathrm{eff}}$ is not, because the selection of the branch may break the symmetry.

<div class="proposition">

**Proposition 10.2** (Stationary-elimination / envelope identity).

<div id="prop:envelope">

</div>

*Under Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity), $$
\boxed{\ \
\frac{\delta\Gamma_{\mathrm{eff}}[g,\varphi]}{\delta g^{\mu\nu}(x)}
=\left.\frac{\delta S[g,\varphi,\chi]}{\delta g^{\mu\nu}(x)}\right|_{\chi=\chi_{*}[g,\varphi]}
\ \ }\tag{10.4}$$ and likewise $\dfrac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi(x)}
=\left.\dfrac{\delta S}{\delta\varphi(x)}\right|_{\chi_{*}}$. That is, the metric (and visible-field) derivative of the reduced action is computed by differentiating $S$ at fixed $\chi$ and *then* evaluating on the branch: the implicit dependence of $\chi_{*}$ on $g$ contributes nothing.*

</div>

<div class="proof">

*Proof.* Since $S$ and $\chi_{*}$ are continuously Fréchet differentiable, so is the composite $\Gamma_{\mathrm{eff}}=S\circ(\mathrm{id},\mathrm{id},\chi_{*})$, and the standard Fréchet chain rule for a composition of continuously Fréchet differentiable maps between Banach spaces \[[18](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zeidler1), Ch. 4\] applies without further hypotheses: $$D\Gamma_{\mathrm{eff}}[g,\varphi]=D_{g,\varphi}S\big|_{\chi_{*}}
+D_{\chi}S\big|_{\chi_{*}}\circ D\chi_{*}[g,\varphi] .$$ Writing this in terms of the representing densities, with the spacetime integration and field indices explicit, and with $\chi$ carrying whatever index structure $I$ it possesses, it reads $$
\frac{\delta\Gamma_{\mathrm{eff}}[g,\varphi]}{\delta g^{\mu\nu}(x)}
=\left.\frac{\delta S}{\delta g^{\mu\nu}(x)}\right|_{\chi_{*}}
+\int_{M}\!d^{4}y\;
\left.\frac{\delta S}{\delta\chi^{I}(y)}\right|_{\chi_{*}}
\frac{\delta\chi_{*}^{I}(y)}{\delta g^{\mu\nu}(x)} ,\tag{10.5}$$ with summation over $I$. The induced variation $\delta\chi_{*}$ is an admissible variation, it lands in the tangent space to $\mathcal{F}_{\chi}$, hence satisfies the boundary conditions built into that space, which is what licenses writing the second term as an integral against $\delta S/\delta\chi^{I}$ with no boundary contribution. By the eliminated field equation [(10.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chistargrav), the factor $\delta S/\delta\chi^{I}(y)\big|_{\chi_{*}}$ vanishes identically in $y$, so the entire integral in [(10.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chainrule) vanishes, leaving [(10.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:envelope). The argument for $\delta/\delta\varphi$ is identical, replacing $g^{\mu\nu}(x)$ by $\varphi(x)$. ◻

</div>

Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope) is what makes the reduction *usable*: to compute the gravitational response of the reduced theory one does not need $\delta\chi_{*}/\delta g$ at all, an object which is typically the solution of a linearized equation and thoroughly inaccessible.

<div class="definition">

**Definition 10.3** (Effective stress-energy).

<div id="def:Teff">

</div>

Split the reduced action into a visible part and a correction, $$
\Gamma_{\mathrm{eff}}[g,\varphi]=S_{\mathrm{visible}}[g,\varphi]+\Gamma_{\mathrm{corr}}[g,\varphi],\tag{10.6}$$ where, by declaration, $S_{\mathrm{visible}}$ contains the gravitational sector and the visible matter sector in the conventions $$
S_{\mathrm{visible}}[g,\varphi]
=\frac{1}{16\pi G_{N}}\int_{M}\!\bigl(R-2\Lambda\bigr)\sqrt{-g}\,d^{4}x
\;+\;S_{\mathrm{mat}}[g,\varphi],
\qquad
T^{\mathrm{visible}}_{\mu\nu}
:=-\frac{2}{\sqrt{-g}}\frac{\delta S_{\mathrm{mat}}}{\delta g^{\mu\nu}},\tag{10.7}$$ and $\Gamma_{\mathrm{corr}}:=\Gamma_{\mathrm{eff}}-S_{\mathrm{visible}}$ is whatever the elimination of $\chi$ has added. We assume, as part of the declaration [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), that the visible matter action $S_{\mathrm{mat}}$ is itself diffeomorphism invariant; the Einstein–Hilbert term is invariant automatically, so $S_{\mathrm{visible}}$ is an invariant functional. Consequently, whenever $\Gamma_{\mathrm{eff}}$ is invariant, which, by Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) and the equivariance of the branch, is the case under the hypotheses of Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation), the correction $\Gamma_{\mathrm{corr}}=\Gamma_{\mathrm{eff}}-S_{\mathrm{visible}}$ is a difference of invariant functionals and is therefore separately invariant as well. This is what entitles us to call *both* $T^{\mathrm{visible}}_{\mu\nu}$ and $T^{\mathrm{eff}}_{\mu\nu}$ covariant tensorial responses in Remark [10.6](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#rem:invcov): each is the metric variation of an invariant functional, and each therefore satisfies the equivariance law [(10.17)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teffequiv). Separate *invariance* of the two functionals must not, however, be confused with separate *conservation* of the two tensors, which Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation) does *not* assert; the two sectors do each carry an off-shell Noether identity, but they are coupled on shell by an exchange current, as the proof of that theorem makes precise. Define the *effective stress-energy tensor* of the eliminated sector by the same variational rule: $$
\boxed{\ \
T^{\mathrm{eff}}_{\mu\nu}
:=-\frac{2}{\sqrt{-g}}\,\frac{\delta\Gamma_{\mathrm{corr}}}{\delta g^{\mu\nu}} .
\ \ }\tag{10.8}$$

</div>

The point of [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff) is that it is a *definition by variation of an explicitly constructed functional* $\Gamma_{\mathrm{corr}}$, and [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split) tells us exactly what that functional is. Contrast the common alternative: take a field equation one does not like, move the offending term to the right-hand side of Einstein’s equation, and call the result a stress-energy tensor. That rearrangement is not empty, it does define a symbol, and algebraically the resulting equation is true by construction, but it establishes, by itself, none of the three properties one wants of a stress-energy tensor: it exhibits no variational origin (no functional whose metric derivative the term is), it does not by itself certify that the object transforms as a $(0,2)$-tensor, and it yields no conservation law. Definition [10.3](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#def:Teff) supplies all three: the functional is $\Gamma_{\mathrm{corr}}$ from [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split), the tensorial transformation follows because $T^{\mathrm{eff}}$ is the metric variation of a diffeomorphism-invariant functional (Remark [10.6](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#rem:invcov)), and the conservation law is Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation). That is the difference between a rearrangement and a derivation.

<div class="proposition">

**Proposition 10.4** (Effective Einstein equations).

<div id="prop:einstein">

</div>

*With the conventions [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), stationarity of $\Gamma_{\mathrm{eff}}$ with respect to $g^{\mu\nu}$, i.e. $\delta\Gamma_{\mathrm{eff}}/\delta g^{\mu\nu}=0$, is equivalent to $$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=8\pi G_{N}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr),\tag{10.9}$$ where $G_{\mu\nu}=R_{\mu\nu}-\tfrac12 R\,g_{\mu\nu}$.*

</div>

<div class="proof">

*Proof.* Vary [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split). The Einstein–Hilbert term in [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) has the standard variation $$\frac{\delta}{\delta g^{\mu\nu}}\frac{1}{16\pi G_{N}}\int(R-2\Lambda)\sqrt{-g}\,d^{4}x
=\frac{\sqrt{-g}}{16\pi G_{N}}\Bigl(R_{\mu\nu}-\tfrac12 Rg_{\mu\nu}+\Lambda g_{\mu\nu}\Bigr)
=\frac{\sqrt{-g}}{16\pi G_{N}}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr),$$ using $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}$ and discarding the total-derivative term by the boundary hypothesis \[[16](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Wald), §4.3\]. By [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) and [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff) the matter and correction terms contribute $-\tfrac{\sqrt{-g}}{2}T^{\mathrm{visible}}_{\mu\nu}$ and $-\tfrac{\sqrt{-g}}{2}T^{\mathrm{eff}}_{\mu\nu}$ respectively. Setting the sum to zero and multiplying by $16\pi G_{N}/\sqrt{-g}$ gives [(10.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:einstein). ◻

</div>

<div class="theorem">

**Theorem 10.5** (Total covariant conservation).

<div id="thm:conservation">

</div>

*Suppose in addition to Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) that the branch $\chi_{*}$ is diffeomorphism-equivariant, so that $\Gamma_{\mathrm{eff}}$ is a diffeomorphism-invariant functional of $(g,\varphi)$. Then, *on solutions of the effective visible-matter field equation* $\delta\Gamma_{\mathrm{eff}}/\delta\varphi=0$, $$
\nabla^{\mu}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr)=0 .\tag{10.10}$$ In general, neither $\nabla^{\mu}T^{\mathrm{visible}}_{\mu\nu}=0$ nor $\nabla^{\mu}T^{\mathrm{eff}}_{\mu\nu}=0$ holds separately.*

</div>

<div class="proof">

*Proof.* Let $\xi$ be a compactly supported smooth vector field on $M$ and let $\phi_{\varepsilon}$ be its flow. Diffeomorphism invariance of $\Gamma_{\mathrm{eff}}$ gives $\Gamma_{\mathrm{eff}}[\phi_{\varepsilon}^{*}g,\phi_{\varepsilon}^{*}\varphi]=\Gamma_{\mathrm{eff}}[g,\varphi]$ for all $\varepsilon$; differentiating at $\varepsilon=0$ and using $\delta_{\xi}g^{\mu\nu}=\mathcal{L}_{\xi}g^{\mu\nu}=-(\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu})$ and $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$, we obtain the Noether identity $$
0=\int_{M}\Bigl(
\frac{\delta\Gamma_{\mathrm{eff}}}{\delta g^{\mu\nu}}\,\mathcal{L}_{\xi}g^{\mu\nu}
+\frac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi}\,\mathcal{L}_{\xi}\varphi
\Bigr)d^{4}x .\tag{10.11}$$ Restrict now to field configurations satisfying the visible-matter equation of the *reduced* theory, $\delta\Gamma_{\mathrm{eff}}/\delta\varphi=0$; the second term of [(10.11)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:noether) then drops. Split $\delta\Gamma_{\mathrm{eff}}/\delta g^{\mu\nu}$ using [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split), [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff): writing $$\frac{\delta\Gamma_{\mathrm{eff}}}{\delta g^{\mu\nu}}
=\frac{\sqrt{-g}}{16\pi G_{N}}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)
-\frac{\sqrt{-g}}{2}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr)
=:\frac{\sqrt{-g}}{16\pi G_{N}}\,\mathcal{E}_{\mu\nu},$$ and substituting into [(10.11)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:noether) with $\mathcal{L}_{\xi}g^{\mu\nu}=-2\nabla^{(\mu}\xi^{\nu)}$ gives $$0=-\frac{2}{16\pi G_{N}}\int_{M}\sqrt{-g}\;\mathcal{E}_{\mu\nu}\,\nabla^{\mu}\xi^{\nu}\,d^{4}x
=\frac{2}{16\pi G_{N}}\int_{M}\sqrt{-g}\;\bigl(\nabla^{\mu}\mathcal{E}_{\mu\nu}\bigr)\,\xi^{\nu}\,d^{4}x ,$$ after one covariant integration by parts, the boundary term vanishing because $\xi$ has compact support. As $\xi$ is arbitrary, $\nabla^{\mu}\mathcal{E}_{\mu\nu}=0$. Finally, the contracted Bianchi identity gives $\nabla^{\mu}(G_{\mu\nu}+\Lambda g_{\mu\nu})=0$ identically (metric-compatibility making $\nabla^{\mu}g_{\mu\nu}=0$), so $\nabla^{\mu}\bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\bigr)=0$, which is [(10.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:conservation).

For the final sentence, the situation must be described with care, because $S_{\mathrm{visible}}$ and $\Gamma_{\mathrm{corr}}$ *are* separately diffeomorphism invariant (Definition [10.3](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#def:Teff)), and each therefore *does* possess its own off-shell Noether identity, obtained by running the argument above on that functional alone. To state these without committing to the tensor type of $\varphi$, introduce the *Ward operator* $\mathcal{W}_{\nu}$: for any diffeomorphism-invariant functional $F[g,\varphi]$ with associated stress tensor $T^{F}_{\mu\nu}:=-\tfrac{2}{\sqrt{-g}}\,\delta F/\delta g^{\mu\nu}$ and Euler operator $E^{F}_{\varphi}:=\delta F/\delta\varphi$, the same computation as above, with $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$ and one integration by parts, yields the off-shell identity $$
\nabla^{\mu}T^{F}_{\mu\nu}=\mathcal{W}_{\nu}\bigl(E^{F}_{\varphi}\bigr),\tag{10.12}$$ where $\mathcal{W}_{\nu}$ is the formal adjoint of the map $\xi^{\nu}\mapsto\mathcal{L}_{\xi}\varphi$, contracted appropriately; it is *linear* in its argument, and its precise form depends on the tensor type of $\varphi$ but *not* on $F$. For a scalar field $\varphi$ it reduces to $$
\mathcal{W}_{\nu}(E_{\varphi})
=\frac{1}{\sqrt{-g}}\,E_{\varphi}\,\nabla_{\nu}\varphi ,
\qquad\text{so that}\qquad
\nabla^{\mu}T_{\mu\nu}
=\frac{1}{\sqrt{-g}}\,\frac{\delta F}{\delta\varphi}\,\nabla_{\nu}\varphi ,\tag{10.13}$$ in the conventions $T_{\mu\nu}=-\tfrac{2}{\sqrt{-g}}\,\delta F/\delta g^{\mu\nu}$ and $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$ fixed in [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) and above. We stress that [(10.13)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardscalar) is the *scalar* case; [(10.12)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardgen) is the statement for general $\varphi$, and the scalar formula must not be read as an identity for tensor-valued $\varphi$.

Applying [(10.12)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardgen) to $S_{\mathrm{visible}}$ and to $\Gamma_{\mathrm{corr}}$, each invariant, hence each entitled to its own identity, and using the contracted Bianchi identity on the gravitational part of $S_{\mathrm{visible}}$, we obtain, as identities holding for *all* field configurations, $$\begin{aligned}
\nabla^{\mu}T^{\mathrm{visible}}_{\mu\nu}
&=\mathcal{W}_{\nu}\Bigl(\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}\Bigr)
\;=:\;J^{\mathrm{vis}}_{\nu},
\qquad\text{(10.14)}\\
\nabla^{\mu}T^{\mathrm{eff}}_{\mu\nu}
&=\mathcal{W}_{\nu}\Bigl(\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}\Bigr)
\;=:\;J^{\mathrm{corr}}_{\nu} .
\qquad\text{(10.15)}
\end{aligned}$$

So the two sectors do have Ward identities, and the reason separate conservation nevertheless fails is not an absence of identities but the *on-shell* condition. The physical configuration satisfies the field equation of the *combined* reduced theory, $$
\frac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi}
=\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}+\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}=0 ,\tag{10.16}$$ which does *not* imply $\delta S_{\mathrm{visible}}/\delta\varphi=0$ or $\delta\Gamma_{\mathrm{corr}}/\delta\varphi=0$ separately, it implies only that the two Euler operators are equal and opposite. Since $\mathcal{W}_{\nu}$ is linear, applying it to [(10.16)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:combinedeq) gives $$J^{\mathrm{vis}}_{\nu}+J^{\mathrm{corr}}_{\nu}
=\mathcal{W}_{\nu}\Bigl(\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}
+\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}\Bigr)
=\mathcal{W}_{\nu}(0)=0 ,$$ so the two sector Ward terms are equal and opposite and cancel in the sum of [(10.14)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardvis) and [(10.15)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardcorr), which is exactly [(10.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:conservation), while neither need vanish on its own. The common quantity $J^{\mathrm{vis}}_{\nu}=-J^{\mathrm{corr}}_{\nu}$ is the *exchange current* between the visible and eliminated sectors: it is the rate at which the eliminated sector feeds energy–momentum to the visible one.

The logical structure is therefore this. Separate diffeomorphism invariance supplies separate *off-shell* identities, [(10.14)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardvis) and [(10.15)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardcorr), and nothing more. Separate *conservation* of a sector’s stress tensor requires, in addition, that that sector’s Ward term vanish *on the combined solution*, i.e. that $\mathcal{W}_{\nu}(\delta S_{\mathrm{visible}}/\delta\varphi)=0$ there, equivalently (by [(10.16)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:combinedeq) and linearity) that $\mathcal{W}_{\nu}(\delta\Gamma_{\mathrm{corr}}/\delta\varphi)=0$ there. This holds, for instance, when $\Gamma_{\mathrm{corr}}$ does not depend on $\varphi$ at all, or when the visible field happens to satisfy its own equation $\delta S_{\mathrm{visible}}/\delta\varphi=0$ on the combined solution, or when $\mathcal{W}_{\nu}$ annihilates the relevant Euler operator. It is *not* supplied by invariance: diffeomorphism invariance of a sector gives that sector its Ward identity, but it does not put the sector on shell, and it therefore cannot by itself force the exchange current to vanish. Absent such a structure, the eliminated sector exchanges energy–momentum with the visible one, and only the sum is conserved. ◻

</div>

<div class="remark">

*Remark 49* (Invariance versus covariance).

<div id="rem:invcov">

</div>

Three statements must be kept apart, and they are frequently run together.

1.  $\Gamma_{\mathrm{eff}}$ is an *invariant scalar functional*: under the hypotheses of Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation) we have $\Gamma_{\mathrm{eff}}[\phi^{*}g,\phi^{*}\varphi]=\Gamma_{\mathrm{eff}}[g,\varphi]$. This is a statement about a single number assigned to a whole field configuration.

2.  $T^{\mathrm{eff}}_{\mu\nu}$ is a *covariant tensorial response*: it transforms equivariantly as a $(0,2)$-tensor field under diffeomorphisms, because it is the metric variation of an invariant functional. Geometrically it is a section of the associated tensor bundle $\mathrm{Sym}^{2}T^{*}M$, evaluated on the given configuration, and the diffeomorphism group acts on it by pullback rather than fixing it: $$
    T^{\mathrm{eff}}\bigl[\phi^{*}g,\phi^{*}\varphi\bigr]
    =\phi^{*}\,T^{\mathrm{eff}}\bigl[g,\varphi\bigr],\tag{10.17}$$ in the same pullback convention used for the metric and the fields throughout. Consequently it is *not* an ordinary pointwise scalar function on the naive quotient of field space by diffeomorphisms: the value “$T^{\mathrm{eff}}_{\mu\nu}(x)$” is not by itself a diffeomorphism-invariant number, because the label $x$ is not. Three levels must be kept apart here, and the second is routinely mistaken for the third.

    - *Tensorial response.* $T^{\mathrm{eff}}_{\mu\nu}$ itself: an equivariant section of $\mathrm{Sym}^{2}T^{*}M$, transforming by pullback as in [(10.17)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teffequiv).

    - *Covariant scalar fields obtained by contraction.* Objects such as the trace $T^{\mathrm{eff}}:=g^{\mu\nu}T^{\mathrm{eff}}_{\mu\nu}$, or $T^{\mathrm{eff}}_{\mu\nu}T^{\mathrm{eff}\,\mu\nu}$. These are scalar *fields*: they carry no free indices and transform as scalars. But a scalar field is still a function on $M$, and it is *still not* a diffeomorphism-invariant observable when evaluated at a coordinate-labelled point: under $\phi$ it goes to $\phi^{*}T^{\mathrm{eff}}$, so the number $T^{\mathrm{eff}}(x)$ at a fixed coordinate label $x$ is not invariant. Contraction removes the indices; it does not remove the dependence on the labelling.

    - *Genuine diffeomorphism-invariant observables.* These require a further step: invariant integration (e.g. $\int_{M}T^{\mathrm{eff}}\sqrt{-g}\,d^{4}x$ over an invariantly specified region, or an integral against an invariantly constructed density), smearing against equivariantly chosen test tensors, or relational evaluation, evaluating one field at a point located by the values of other fields, so that the point is specified by the configuration rather than by a coordinate.

    The equivariant response is the primary object; covariant scalar fields are contractions of it; invariant observables are constructed from those by one of the three routes just named.

3.  The effective field equations [(10.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:einstein) are *geometrically covariant*: both sides are $(0,2)$-tensors and the equation is preserved under diffeomorphisms. Covariance of the equations is a consequence of invariance of the functional; it is not the same statement, and it does not license treating $T^{\mathrm{eff}}$ as an invariant.

</div>


# Exact versus approximate reduction

<div id="sec:discussion">

</div>

It is worth collecting, in one place, what has been proved exactly and where an approximation would have to enter.

**Exact.** Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient) (the quotient and the closed-range criterion), Proposition [3.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#prop:descent) and Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent) (functional descent), Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs) (stable observability of a linear functional, i.e. boundedness of the descended functional in the inherited norm iff $a\in\operatorname{Ran}K^{*}$), Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) (the truncation error, which is an *exact evaluation* of an approximation’s cost), Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) (descent iff invariance), Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected) (the projected identity), Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) (closure iff $PLQ=0$), Theorems [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal) and [7.6](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:volterra) (minimal completion and Volterra closure), Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability) (finite computation of $N_{Q}$), Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable) (nonlinear projectability), Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur) (Schur complement), Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope) and Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation) (envelope identity and total conservation). Apart from the explicitly identified rank-$r$ approximant in the Eckart–Young–Mirsky result, these identities introduce no approximation, limiting procedure, ensemble, or small parameter; the theorem itself evaluates the truncation error exactly.

**Where approximation would enter.** Four places, and it is important that they are four and not one.

1.  *Rank truncation.* Replacing $K$ by $K_{r}$ costs exactly $\sigma_{r+1}$ in operator norm (Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey)). The cost is quantified, the reduction is not exact, and it is completely unrelated to $\ker K$.

2.  *Regularization of unstable inversion.* When $\operatorname{Ran}K$ is not closed, recovering the source from the readout requires a regularization scheme (Tikhonov, spectral cutoff), with a bias–variance trade-off governed by the spectral behaviour of $K^{*}K$ near $0$ \[[4](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EnglHankeNeubauer)\]. *When $K$ is compact*, that behaviour is encoded in the discrete sequence $\sigma_{n}\to0$ and the trade-off is classically described by the rate of decay of the $\sigma_{n}$; for a general bounded operator with nonclosed range there need be no discrete singular sequence at all, $K^{*}K$ may have continuous spectrum accumulating at $0$, and it is the spectral measure of $K^{*}K$ near the origin, not a sequence, that governs the scheme. This is in any case an approximation of the *inverse*, not of $K$.

3.  *Truncating the memory.* Approximating [(6.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#eq:MZ2) by an autonomous equation,  dropping $\eta_{z_{0}}$ and $\mathcal{K}$, or replacing $\mathcal{K}$ by a delta function (the Markov approximation), is legitimate only under an additional hypothesis. The property actually needed is *exponential stability of the unresolved propagator*: constants $M\ge1$, $\alpha>0$ with $\lVert e^{\tau QLQ}\rVert_{\mathrm{op}}\le M e^{-\alpha\tau}$, so that $\lVert\mathcal{K}(\tau)\rVert\le M\lVert PLQ\rVert\lVert QLP\rVert e^{-\alpha\tau}$ and the convolution has an effective memory time of order $1/\alpha$; this is then normally accompanied by a quantitative separation of timescales, $\alpha^{-1}$ small compared with the timescale on which $x$ varies (governed by $\lVert PLP\rVert$ and the coupling). These are prerequisites, not a proof. Exponential decay of $e^{\tau QLQ}$ alone does *not* establish that replacing $\mathcal{K}$ by a delta function is controlled: that step additionally requires quantitative control of the kernel’s moments, at minimum $\int_{0}^{\infty}\lVert\mathcal{K}(\tau)\rVert\,d\tau$ and $\int_{0}^{\infty}\tau\lVert\mathcal{K}(\tau)\rVert\,d\tau$, the second being what multiplies the error made in replacing $x(t-\tau)$ by $x(t)$, together with a bound on the variation of $x$ over the memory timescale, and then an explicit error estimate or a limiting argument ($\alpha\to\infty$ at fixed $\int\mathcal{K}$, say) carried out in the concrete model at hand. We supply none of this here, and it should not be assumed to be automatic. Note also that a large norm $\lVert QLQ\rVert$ implies nothing of the sort by itself, the norm bounds $\lVert e^{\tau QLQ}\rVert\le e^{\tau\lVert QLQ\rVert}$ from above only, and a large-norm generator may have purely oscillatory or even growing propagator. What matters is the location of the spectrum (or, in infinite dimensions, the growth bound of the semigroup), not the size of the generator. We have made no such hypothesis, and Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure) shows that without $PLQ=0$ such a truncation is never exact.

4.  *Loop corrections.* [(9.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#eq:Seff) and [(10.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Geff) are classical stationary eliminations (Remark [9.5](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#rem:treelevel)). A quantum treatment produces determinant and loop terms.

**The physical reading.** What Sections [5](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#sec:descent)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion) establish is this. A model may have a completely coherent observable theory, an honest Hilbert space of observable states, an honest algebra of observable functionals, an honest exact quotient, and still fail to be *autonomous* on that observable state. When it does fail, the exact projected law records precisely three things beyond the naive autonomous term $PLP\,x$: dependence on unresolved initial data (the term $\eta_{z_{0}}$), history dependence through the memory kernel $\mathcal{K}$, and, if one insists on restoring a genuine initial-value problem, the additional state information $E_{\mathrm{dyn}}$ needed to close it. Eliminating a field sector instead of a state sector produces the same structure in field-theoretic guise: an effective operator $A-BC^{-1}B^{*}$, whose correction may be nonlocal when the composed operator $BC^{-1}B^{*}$ retains the nonlocal Green-operator directions, and a covariant effective stress-energy $T^{\mathrm{eff}}$ defined by variation.

None of this is evidence that our universe has hidden source variables, memory, or any particular effective correction. The theorems are conditional: *if* a model declares a source/readout architecture, *then* these are the necessary and sufficient conditions for descent, and these are the exact reduction identities when descent fails. A memory kernel is not a physical discovery; it is a formula. It becomes physics only when the model that produced $L$ and $P$ is itself physics.


# Consequences for Shadow Theory and conclusion

<div id="sec:conclusion">

</div>

The observable architecture is now precise: $$
\mathcal{H}_{\mathrm{src}}\ \xrightarrow{\ K\ }\ \operatorname{Ran}K\ \cong\ \mathcal{H}_{\mathrm{src}}/\ker K ,\tag{12.1}$$ the isomorphism being that of Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient), and topologically faithful in the inherited norm exactly when $\operatorname{Ran}K$ is closed (Remark [2.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#rem:twonorms)). Static source quantities descend exactly when they are constant on cosets of $\ker K$ (Proposition [3.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#prop:descent)). Source dynamics descend exactly when the source semigroup preserves $\ker K$ (Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup)). When it does not, exact projection produces dependence on unresolved initial data and a memory kernel (Theorem [6.2](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:projected)), and autonomous closure for all source states is precisely the invariance condition (Theorem [6.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#thm:closure)). The minimal dynamical completion retains exactly those unresolved distinctions that generate different observable response functions (Theorem [7.4](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#thm:minimal)), and no more (Remark [7.5](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#rem:relative)); in finite dimensions it is computed by a rank condition (Proposition [7.7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#prop:observability)). The nonlinear counterpart is fiberwise constancy of the projected velocity (Theorem [8.2](/source-readout/observable-quotients-and-exact-projected-dynamics/nonlinear-dynamical-descent#thm:projectable)). Eliminating a source field sector produces Schur-complement effective operators (Theorem [9.2](/source-readout/observable-quotients-and-exact-projected-dynamics/elimination-of-a-source-sector-schur-complement-effective-operators#thm:schur)) and, in the presence of gravity, a covariant effective stress-energy that is a genuine variational response with total covariant conservation (Definition [10.3](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#def:Teff), Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation)).

This establishes how a coherent observable field theory can be an exact quotient theory without being an autonomous presentation of every source degree of freedom, and it supplies the exact price of that fact, in three separable currencies: initial-state dependence, memory, and additional retained state.

Observable reduction therefore has three mathematically distinct static forms: exact identification by a kernel (D1), unstable inversion along small singular directions or a nonclosed range (D2), and controlled approximation by singular-value truncation (D3). Projected dynamics adds a fourth, which is independent of (D2) and (D3) and, though implied by neither, strictly *stronger* than (D1) rather than independent of it: a static quotient with a nontrivial kernel may fail to support autonomous evolution because its equivalence classes are not preserved by the source dynamics (D4). A nontrivial kernel is necessary for this failure, by [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4), and never sufficient, whether the kernel is invariant is a separate, dynamical fact, decided by Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) and not by any property of $K$ alone. The exact projection identity, the minimal response completion, the Schur-complement reduction, and the variational effective stress-energy are the field-theoretic machinery connecting source structure to observable laws. They are supplied here as mathematics, with their hypotheses stated and their limits marked, as the dynamical layer of the sequence \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1), [23](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper2), [24](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper3), [25](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper4)\].


# References

<div class="thebibliography">

99

<span id="bib-Brezis"></span>**\[1\]** H. Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Universitext, Springer, New York, 2011.

<span id="bib-EckartYoung"></span>**\[2\]** C. Eckart and G. Young, *The approximation of one matrix by another of lower rank*, Psychometrika **1** (1936), no. 3, 211–218.

<span id="bib-EngelNagel"></span>**\[3\]** K.-J. Engel and R. Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, Graduate Texts in Mathematics, vol. 194, Springer, New York, 2000.

<span id="bib-EnglHankeNeubauer"></span>**\[4\]** H. W. Engl, M. Hanke, and A. Neubauer, *Regularization of Inverse Problems*, Mathematics and its Applications, vol. 375, Kluwer, Dordrecht, 1996.

<span id="bib-GripenbergLondenStaffans"></span>**\[5\]** G. Gripenberg, S.-O. Londen, and O. Staffans, *Volterra Integral and Functional Equations*, Encyclopedia of Mathematics and its Applications, vol. 34, Cambridge University Press, Cambridge, 1990.

<span id="bib-Kalman1960"></span>**\[6\]** R. E. Kalman, *On the general theory of control systems*, in: Proceedings of the First International Congress of Automatic Control (Moscow, 1960), Butterworths, London, 1961, pp. 481–492.

<span id="bib-Kato"></span>**\[7\]** T. Kato, *Perturbation Theory for Linear Operators*, 2nd ed., Grundlehren der mathematischen Wissenschaften, vol. 132, Springer, Berlin, 1980.

<span id="bib-Lee"></span>**\[8\]** J. M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Graduate Texts in Mathematics, vol. 218, Springer, New York, 2013.

<span id="bib-Mirsky"></span>**\[9\]** L. Mirsky, *Symmetric gauge functions and unitarily invariant norms*, Quarterly Journal of Mathematics (Oxford), Ser. 2, **11** (1960), 50–59.

<span id="bib-Mori1965"></span>**\[10\]** H. Mori, *Transport, collective motion, and Brownian motion*, Progress of Theoretical Physics **33** (1965), no. 3, 423–455.

<span id="bib-Pazy"></span>**\[11\]** A. Pazy, *Semigroups of Linear Operators and Applications to Partial Differential Equations*, Applied Mathematical Sciences, vol. 44, Springer, New York, 1983.

<span id="bib-Peskin"></span>**\[12\]** M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory*, Addison-Wesley, Reading, MA, 1995.

<span id="bib-ReedSimon1"></span>**\[13\]** M. Reed and B. Simon, *Methods of Modern Mathematical Physics I: Functional Analysis*, rev. and enl. ed., Academic Press, New York, 1980.

<span id="bib-Schmidt"></span>**\[14\]** E. Schmidt, *Zur Theorie der linearen und nichtlinearen Integralgleichungen. I. Teil: Entwicklung willkürlicher Funktionen nach Systemen vorgeschriebener*, Mathematische Annalen **63** (1907), no. 4, 433–476.

<span id="bib-Sontag"></span>**\[15\]** E. D. Sontag, *Mathematical Control Theory: Deterministic Finite-Dimensional Systems*, 2nd ed., Texts in Applied Mathematics, vol. 6, Springer, New York, 1998.

<span id="bib-Wald"></span>**\[16\]** R. M. Wald, *General Relativity*, University of Chicago Press, Chicago, 1984.

<span id="bib-Weinberg2"></span>**\[17\]** S. Weinberg, *The Quantum Theory of Fields, Volume II: Modern Applications*, Cambridge University Press, Cambridge, 1996.

<span id="bib-Zeidler1"></span>**\[18\]** E. Zeidler, *Applied Functional Analysis: Main Principles and Their Applications*, Applied Mathematical Sciences, vol. 109, Springer, New York, 1995.

<span id="bib-Zhang"></span>**\[19\]** F. Zhang (ed.), *The Schur Complement and Its Applications*, Numerical Methods and Algorithms, vol. 4, Springer, New York, 2005.

<span id="bib-Zwanzig1960"></span>**\[20\]** R. Zwanzig, *Ensemble method in the theory of irreversibility*, Journal of Chemical Physics **33** (1960), no. 5, 1338–1341.

<span id="bib-Zwanzig2001"></span>**\[21\]** R. Zwanzig, *Nonequilibrium Statistical Mechanics*, Oxford University Press, Oxford, 2001.

<span id="bib-Paper1"></span>**\[22\]** J. Rodgers, *Source–Readout Non-Equivalence: Descent and Equivariant Reconstruction Obstructions*, Zenodo, 2026. [doi:10.5281/zenodo.21369967](https://doi.org/10.5281/zenodo.21369967).

<span id="bib-Paper2"></span>**\[23\]** J. Rodgers, *Target-Relative Necessity of Completion: When Readout Loss Obstructs, and What a Sufficient Extension Must Retain*, Zenodo, 2026. [doi:10.5281/zenodo.21370501](https://doi.org/10.5281/zenodo.21370501).

<span id="bib-Paper3"></span>**\[24\]** J. Rodgers, *Canonical Minimal Source Completion: The Coarsest Readout Extension on which a Nominated Family of Source Relations Becomes Well Defined*, Zenodo, 2026. [doi:10.5281/zenodo.21370763](https://doi.org/10.5281/zenodo.21370763).

<span id="bib-Paper4"></span>**\[25\]** J. Rodgers, *Geometric Realization of Completed Source Relations: Descent, Orbit Spaces, Invariant Relations, and Variational Response in Shadow Theory*, Zenodo, 2026. [doi:10.5281/zenodo.21370985](https://doi.org/10.5281/zenodo.21370985).

</div>
