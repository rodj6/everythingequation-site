# Control Consistency and Born Equilibrium: Uniqueness from Local Potentials and Fixed Interactions

Jeremy Rodgers · Independent Researcher · 4 October 2026

[Manuscript DOI](https://doi.org/10.5281/zenodo.23131058) · [Original PDF](/publications/quantum-measurement/research/control-consistency.pdf)

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Sch = \mathcal S
\Cc = C_c^\infty
\Pcal = \mathcal P
\Acal = \mathcal A
\dd = \,dq
\diver = \operatorname{div}
\supp = \operatorname{supp}
\tr = \operatorname{tr}
\Id = I
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\Born = \frac{\Psi^\dagger\Psi}{\norm{\Psi}_2^2}
\CU = \mathrm{CC}
-->

# Abstract and publication identity

**Abstract.**

Which configuration probabilities can be assigned to a wavefunction consistently across different physical controls? We consider a single projective density assignment in nonrelativistic Bohmian mechanics, with twice continuously differentiable dependence on the wavefunction in a specified Schwartz-space sense. We prove that consistency with Schrödinger evolution and the guidance current for local one-body scalar potentials forces this assignment to be the Born density when the fixed pair interactions connect the particles and have nonzero mixed spatial derivatives. The argument extracts statistical identities from coordinate conjugations of the fixed interaction; it does not require implementing additional many-body potentials. All translates of one real Schwartz profile with nonzero integral suffice for each particle. We also give an effective-spin extension, a sector-preserving identical-particle refinement, and a separate characterization from binary-flag heredity. Weak continuity under specified state approximations extends the results across nodes. The theorem makes precise a previously proposed universal-equivariance characterization and reduces its control requirements. Its statistical consistency premise is explicit. Consequences for apparatus records are obtained under the usual joint-preparation and implemented-coupling assumptions. 



**Keywords:** quantum equilibrium; Bohmian mechanics; control consistency; probability assignments; interacting systems; conditional probabilities.

---

# Section 1: Introduction

<a id="section-1"></a>

## 1 Introduction

 

<a id="paragraph-1"></a>

#### Publication relationship.

 This article develops the author's control-consistency manuscript into a self-contained account of its characterization theorems. The companion exact-return paper [[15](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioReturn)] studies arbitrary Borel laws at one engineered preparation; the present theorem concerns a regular family of densities across states. Neither result establishes that actual preparations meet its statistical premise. The related measurement and event-law papers [[8](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalMassive), [9](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalMonograph), [10](/quantum-measurement/research/control-consistency/bibliography#bib-OriginalPilot), [12](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioEquilibrium), [13](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioPilot), [14](/quantum-measurement/research/control-consistency/bibliography#bib-PortfolioRecords)] provide programme context; their model-specific assumptions and numerical bounds are not used in any proof here. The contribution claimed in this revision is the theorem package stated and proved below, without a historical-priority claim or an assertion that its previously circulated results originate in this revision.

Schrödinger evolution transports a wavefunction, and Bohmian guidance transports a configuration. Neither equation, by itself, selects a probability distribution for that configuration. Quantum equilibrium supplies the familiar distribution proportional to the squared wavefunction norm. The question addressed here is whether a different distribution can be assigned to each wavefunction while using the *same assignment* under a specified range of physical controls.

The requirement is stronger than transporting an arbitrary initial distribution along one experiment. A distribution transported in that way can retain information about its initial preparation and the intervening control history. We instead consider an assignment whose argument is the current wavefunction alone and require it to obey the guidance continuity equation for every admitted control. We call this requirement *control consistency*. The controls in the principal result are one-body scalar potentials. The interactions between particles remain fixed.

Our main result is that a regular control-consistent assignment is necessarily <a id="eq:born"></a>


$$

 p^\Psi(q)=\frac{\Psi^\dagger(q)\Psi(q)}{{\left\|{\Psi}\right\|}_2^2}.

$$

Equation (1.1).

 The regularity assumptions concern the whole wavefunction. They do not require the value of the density at a point to depend on only finitely many derivatives of the wavefunction there. The conclusion first holds on the nowhere-zero state class. Its extension to nodal states uses an explicit weak-continuity assumption.

The proof has two parts. Scalar phase changes constrain the assignment under gradient transport. A gradient-bracket identity then gives covariance under general compactly supported coordinate transport. Fixed interactions propagate these identities between particle coordinates: a mixed difference of independently conjugated Hamiltonians isolates the mixed spatial dependence of an interaction. Connectedness of the interaction graph spreads the resulting identities to the full configuration space. Finally, local circulations preserving the wavefunction norm density force the ratio of the assigned density to that norm density to be constant.

The uniqueness problem has important antecedents. Goldstein and Struyve proved uniqueness for equivariant densities that are local functionals of the wavefunction, up to normalization [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 4]. Their Section 8 explicitly proposes universal equivariance and heredity as alternative characterizations and identifies the single-particle line exception. We prove a precise smooth version of the former proposal and a reduction from arbitrary configuration-space potentials to local controls with fixed interactions. The functional regularity, control quantification, and state-domain hypotheses here differ from finite-jet locality; no implication making either theorem strictly stronger is asserted. [section C](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#app:heredity) gives a separate binary-flag version of the heredity proposal.

We use the gradient-bracket identity of Abdelgalil and Georgiou [[1](/quantum-measurement/research/control-consistency/bibliography#bib-AG2026), Proposition 1, equation (10), version 2]. We reproduce its Euclidean specialization and the functional argument it supports. Only the local algebraic identity is needed, not their compact-manifold transport-group theorem. The Bohmian account of effective wavefunctions and definite apparatus configurations, and the extraction of operator statistics from experiments, are established background [[3](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ1992), [4](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ2004), [5](/quantum-measurement/research/control-consistency/bibliography#bib-DGTZ2005)]. Our measurement section applies that framework after the equilibrium characterization. It does not supply a new ontology of outcomes.

The main dependency chain is short: [lemma 3.1](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:phase), [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport) turn phase identities into coordinate covariance; [lemma 4.1](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:mixed), [lemma 4.2](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:edge) and [proposition 4.4](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#prop:graph) use the fixed interactions to obtain full scalar identities; and [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation) gives uniqueness by local circulation. [theorem 5.1](/quantum-measurement/research/control-consistency/translated-profiles-and-an-interacting-example#thm:profiles) reduces the physical control list, while theorems [B.1](/quantum-measurement/research/control-consistency/appendix-b-a-permutation-preserving-refinement#thm:identical) and [6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin) state the additional hypotheses for spin and symmetry. [theorem C.1](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#thm:heredity) is a separate characterization with a different statistical premise. The node approximation arguments are included in the appendices. None of these steps depends on a private research archive.

---

# Section 2: Physical model and statistical assumptions

<a id="section-2"></a>

## 2 Physical model and statistical assumptions

<a id="sec:model"></a>



<a id="section-2-1"></a>

### 2.1 Hamiltonians and a common smooth domain



Let $q=(q_1,\ldots,q_N)\in({\mathbb R}^3)^N$, with distinguishable particles of fixed masses $m_i>0$, and set $\hbar=1$. Initially the wavefunction is scalar. The Hamiltonians are <a id="eq:ham"></a>


$$

 H_v=-\frac12\sum_{i=1}^N m_i^{-1}\Delta_i+
 \sum_i U_i(q_i)+\sum_{\{i,j\}\in E}W_{ij}(q_i,q_j)+\sum_i v_i(q_i).

$$

Equation (2.1).

 All potentials are real. The graph $(\{1,\ldots,N\},E)$ is connected, and every edge satisfies <a id="eq:interaction"></a>


$$

 D_{q_i}D_{q_j}W_{ij}\not\equiv0.

$$

Equation (2.2).

 This condition excludes an interaction that is only a sum of one-body terms. It requires neither full rank nor nonvanishing of the mixed derivative everywhere.

For definiteness we use the following common-domain class throughout. The uncontrolled potential is a positive definite confining quadratic form plus a real smooth bounded perturbation with bounded derivatives of every positive order. Each $U_i,W_{ij}$ is correspondingly quadratic plus such a bounded smooth function. The initial control class is $v_i\in{C_c^\infty}({\mathbb R}^3;{\mathbb R})$. Finite smooth time-dependent schedules and, subsequently, finite sums of translates of Schwartz profiles are also allowed. On every finite time interval their coefficients and all required spatial derivatives are bounded. There are no singular configuration sets or vector potentials in this model.

The Hamiltonians are self-adjoint on the domain of the confining quadratic oscillator, with common invariant core ${\mathcal S}({\mathbb R}^{3N})$. These statements also hold for the finite-dimensional matrix-valued bounded perturbations used below. Here is a direct justification. A bounded symmetric perturbation preserves the oscillator's self-adjoint domain, and its interaction-picture Dyson series converges in operator norm on finite intervals. Write $H(t)=A+B(t)$, with $A$ the positive confining oscillator. Leibniz' rule and oscillator estimates give 

$$

 {\left\|{[A^m,B(t)]\phi}\right\|}_2\le C_{m,T}{\left\|{(A+1)^m\phi}\right\|}_2
 \quad(0\le t\le T,\ \phi\in{\mathcal S}).

$$

 Indeed, the commutator is a finite sum of position–derivative monomials of degree at most $2m$, multiplied by bounded derivatives of $B$. The graph seminorms ${\left\|{(A+1)^m\phi}\right\|}_2$ are equivalent to the Schwartz topology: oscillator raising and lowering operators bound the monomials in one direction, and expansion of $A^m$, followed by Sobolev embedding, gives the reverse seminorm comparisons. Spectral projections of $A$ commute with $A^m$. For the projected equation the symmetric $B A^m$ term cancels in the energy derivative, so the displayed bound and Gronwall give estimates independent of the projection. Strong unitary convergence and weak compactness in each graph domain identify the limit; lower semicontinuity preserves the uniform graph bounds. Applying a higher graph bound and interpolation gives continuity in every lower graph norm. The equation then gives differentiability in those norms, proving preservation of ${\mathcal S}$ and smooth time dependence there. Thus the tangent vectors and differentiations used below are defined on the stated core.

Virtual coordinate conjugations in the proof are evaluated on this common smooth core. We do not require all conjugated unbounded operators to have the original oscillator's full operator domain.

For every fixed admitted control, the lower bound is $H(t)\ge (\inf\sigma(A)-{\left\|{B(t)}\right\|})I$. It is uniform on a specified finite smooth schedule, but is not asserted to be uniform over all unrestricted control amplitudes. The Schwartz assertion means ${\mathcal S}=\bigcap_{m\ge0}D((A+1)^m)$, with the equivalent family of graph seminorms just described; it does not identify any single finite graph domain with ${\mathcal S}$.



<a id="section-2-2"></a>

### 2.2 Assignments, regularity, and consistency



Write $\mathscr S_s={\mathcal S}({\mathbb R}^d;{\mathbb C}^s)\setminus\{0\}$, where $d=3N$ and initially $s=1$. Let 

$$

 r^\Psi=\Psi^\dagger\Psi,\qquad
 J_i^\Psi=m_i^{-1}\operatorname{Im}(\Psi^\dagger\nabla_i\Psi),
 \qquad v_i^\Psi=J_i^\Psi/r^\Psi.

$$

 The velocity is defined on $\Omega_\Psi=\{r^\Psi>0\}$. A probability assignment is a map ${\mathcal P}:\Psi\mapsto \mu^\Psi=p^\Psi(q)\,dq$. The unsuperscripted $v_i(q_i)$ in [(2.1)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:ham) is a control potential; $v_i^\Psi$ is a guidance velocity. Derivatives of ${\mathcal P}$ below denote derivatives of its local density representatives, or the resulting distributions on a nonzero patch. We impose the following standing assumptions.



1. (A1) <a id="ass:prob"></a> The density is nonnegative, integrable, and normalized; ${\mathcal P}(c\Psi)={\mathcal P}(\Psi)$ for $c\in{\mathbb C}\setminus\{0\}$. The assignment has no control-potential or preparation-history argument.

2. (A2) <a id="ass:smooth"></a> It has compatible $C^1$ density representatives on compact nonzero patches. More precisely, for each closed ball $K$, the set 

$$

 \mathscr U_K=\{\Psi\in\mathscr S_s:\min_K r^\Psi>0\}

$$

 is open in the underlying real Schwartz space, and $\Psi\mapsto p^\Psi|_K$ is Bastiani $C^2$ into $C^1(K)$. This means that its first and second real directional derivatives exist and are jointly continuous in the base point and directions; the second derivative is symmetric [[2](/quantum-measurement/research/control-consistency/bibliography#bib-Bastiani1964)]. Representatives and derivatives agree on overlaps.

3. (A3) <a id="ass:cc"></a> For every state and every admitted Hamiltonian, the same assignment satisfies the infinitesimal consistency identity <a id="eq:cc"></a>


$$

 D{\mathcal P}_\Psi[-iH_v\Psi]=-{\operatorname{div}}(p^\Psi v^\Psi)
 \quad\hbox{on }\Omega_\Psi.

$$

Equation (2.3).

 The identity is local, and may equivalently be read against compactly supported test functions there.

4. (A4) <a id="ass:nodes"></a> For extension to all states we assume the following approximation continuity: whenever normalized nowhere-zero states in $\mathscr S_s$ converge in $L^2$ to a normalized state $\Psi$, their assigned measures converge weakly to $\mu^\Psi$.



The domain is the full indicated Schwartz state space; in particular it includes all the scalar phases, compact coordinate transports, and internal variations used in the proofs. One may instead use a smaller domain closed under those operations and containing the approximation classes, with the same local calculus. The full-space formulation avoids an implicit richness hypothesis.

If a density assignment is equivariant under each admitted Schrödinger history, differentiation gives [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc). We use this necessary infinitesimal condition as the definition needed for the theorem. It is a statistical assumption, not a consequence of the equation for the wavefunction. Spatial locality of $v_i(q_i)$, finite-jet locality of $p^\Psi(q)$ as a functional of $\Psi$, and the absence of a history argument in ${\mathcal P}$ are three different notions. Only the first and third occur here.

Born equilibrium satisfies all four assumptions. The map in [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born) is smooth on $\mathscr S_s$, is projective, and obeys [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) by the Schrödinger continuity equation and conservation of ${\left\|{\Psi}\right\|}_2$. For normalized states, <a id="eq:L2TV"></a>


$$

 {\left\|{|\Psi|^2-|\Phi|^2}\right\|}_1\le 2{\left\|{\Psi-\Phi}\right\|}_2,

$$

Equation (2.4).

 which proves the stronger continuity in total variation.



**Theorem 2.1 (Local-control characterization).**

<a id="thm:main"></a> For the scalar model [(2.1)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:ham) in the common-domain class above, suppose the interaction graph is connected and [(2.2)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:interaction) holds on every edge. Under [A1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:prob)–[A3](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:cc), with all real compactly supported smooth one-body controls, the only assigned density on a nowhere-zero state is [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born). Under [A4](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:nodes) the same conclusion holds, almost everywhere, for every nonzero Schwartz state. For $N=1$, the interaction hypotheses are unnecessary. 



The proof occupies the next two sections. A profile-control version is given in [theorem 5.1](/quantum-measurement/research/control-consistency/translated-profiles-and-an-interacting-example#thm:profiles), and the precise internal-state extension in [theorem 6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin). All of these are characterizations of density-valued assignments. No assertion about arbitrary singular configuration measures is part of the theorem.

---

# Section 3: From phases to transport and uniqueness

<a id="section-3"></a>

## 3 From phases to transport and uniqueness

<a id="sec:mechanism"></a>

The unitary change of variables $x_i=\sqrt{m_i}q_i$, including its constant half-density factor, makes the kinetic energy $-\Delta_x/2$. It preserves particle blocks, compact support, the Schwartz topology, and condition [(2.2)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:interaction). We use these mass-scaled coordinates in the proofs.



<a id="section-3-1"></a>

### 3.1 Statistical annihilators



Call a real smooth Schwartz multiplier $f$ a scalar annihilator if <a id="eq:ann"></a>


$$

 D{\mathcal P}_\Psi[-if\Psi]=0\quad\hbox{for every }\Psi.

$$

Equation (3.1).

 A Schwartz multiplier is a smooth function whose multiplication operator preserves ${\mathcal S}$ continuously; all bounded smooth functions with bounded derivatives, and the polynomial functions used below, qualify. The identities are always local off nodes. Denote their real vector space by ${\mathcal A}$.

Subtracting [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) for two controls shows that every admitted control difference belongs to ${\mathcal A}$, because a scalar potential does not change the current at a fixed state. This is the initial source of annihilators. There is also a useful closure rule: <a id="eq:closure"></a>


$$

 f_n\in{\mathcal A},\quad f_n\Psi\longrightarrow f\Psi\ \hbox{in }{\mathcal S}
 \ \hbox{for each fixed }\Psi
 \quad\Longrightarrow\quad f\in{\mathcal A}.

$$

Equation (3.2).

 It follows from continuity of the first derivative in [A2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:smooth). All limits below have exactly this meaning; no uniform operator-norm closure is assumed.

For a smooth vector field $u$, put <a id="eq:transportoperators"></a>


$$

 T_u\Psi=-u\cdot\nabla\Psi-\tfrac12({\operatorname{div}} u)\Psi,
 \qquad A_u p=-{\operatorname{div}}(up).

$$

Equation (3.3).

 The first is the infinitesimal action on half-densities, and the second is the action on densities.



**Lemma 3.1 (Phase and gradient identities).**

<a id="lem:phase"></a> If $f\in{\mathcal A}$ and its phase multipliers preserve ${\mathcal S}$, then <a id="eq:grad"></a>


$$

 D{\mathcal P}_\Psi[T_{\nabla f}\Psi]=A_{\nabla f}p^\Psi,
 \qquad |\nabla f|^2\in{\mathcal A}.

$$

Equation (3.4).

 Consequently $f,g\in{\mathcal A}$ imply <a id="eq:gamma"></a>


$$

 \Gamma(f,g):=\nabla f\cdot\nabla g\in{\mathcal A}

$$

Equation (3.5).

 whenever the displayed multipliers are admissible on ${\mathcal S}$. 





**Proof.**

Integrating [(3.1)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:ann) along $e^{itf}\Psi$ gives $p^{e^{itf}\Psi}=p^\Psi$, since the nonzero set does not change. Differentiating this identity in the state also intertwines the corresponding first derivatives. For the scalar Hamiltonian $H$, 

$$

 -i(e^{-itf}He^{itf}-H)\Psi
 =tT_{\nabla f}\Psi-\frac{it^2}{2}|\nabla f|^2\Psi.

$$

 The velocity of $e^{itf}\Psi$ is $v^\Psi+t\nabla f$. Comparing [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) at these two states therefore gives a polynomial identity in $t$. Its linear and quadratic coefficients give [(3.4)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:grad). Polarizing the second identity proves [(3.5)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:gamma). 

□





**Lemma 3.2 (Transport generation).**

<a id="lem:transport"></a> If every compactly supported smooth scalar function on ${\mathbb R}^d$ is in ${\mathcal A}$, then <a id="eq:cov-inf"></a>


$$

 D{\mathcal P}_\Psi[T_u\Psi]=A_up^\Psi

$$

Equation (3.6).

 for every $u\in{C_c^\infty}({\mathbb R}^d;{\mathbb R}^d)$. It follows that <a id="eq:cov-fin"></a>


$$

 {\mathcal P}(U_F\Psi)=F_*{\mathcal P}(\Psi),\qquad
 (U_F\Psi)(q)=|\det DF^{-1}(q)|^{1/2}\Psi(F^{-1}(q)),

$$

Equation (3.7).

 on corresponding nonzero patches, for every finite product $F$ of flows of such vector fields. The same assertion holds within one particle block if only that block's compact multipliers are known. 





**Proof.**

If [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf) holds for $u,v$, differentiating the two identities in the directions $T_v\Psi,T_u\Psi$ and subtracting cancels the symmetric second derivative. To make the regularity requirement explicit, choose a real smooth test function $\zeta$ supported in a compact nonzero patch. Differentiation of the $u$-identity and use of the $v$-identity gives 

$$

 \left\langle D^2{\mathcal P}_\Psi[T_v\Psi,T_u\Psi]+D{\mathcal P}_\Psi[T_uT_v\Psi],\zeta\right\rangle
 =\left\langle p^\Psi,v\cdot\nabla(u\cdot\nabla\zeta)\right\rangle.

$$

 The reversed identity has $u,v$ interchanged. Thus every spatial differentiation can be placed on the test function. With $[u,v]=u\cdot\nabla v-v\cdot\nabla u$, one has $[T_u,T_v]=-T_{[u,v]}$ and $[A_u,A_v]=-A_{[u,v]}$. Hence the identity also holds for $[u,v]$. The density commutators are interpreted distributionally: this calculation needs functional $C^2$, but not spatial $C^2$, regularity of $p^\Psi$.

For smooth real $\phi,\gamma$, the Euclidean gradient-bracket identity is <a id="eq:AG"></a>


$$
\begin{aligned}\phi|\nabla\gamma|^2\nabla\gamma
 ={}&-\tfrac14[\nabla(\phi\gamma^2),\nabla\gamma]
     -\tfrac1{12}[\nabla\phi,\nabla(\gamma^3)] \\
 &-\tfrac14[\nabla(\gamma^2),\nabla(\phi\gamma)].
 
\end{aligned}
$$

Equation (3.8).

 This is the specialization of [[1](/quantum-measurement/research/control-consistency/bibliography#bib-AG2026), Proposition 1, equation (10)]; expansion by the product rule also verifies it directly. For each component $u_j$ of a compact vector field, choose $\gamma_j\in{C_c^\infty}$ equal to $q_j$ on a neighborhood of its support and take $\phi=u_j$. The left side is $u_j e_j$. Every function on the right is compactly supported. [lemma 3.1](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:phase), bracket closure, and summation prove [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf).

For completeness, writing $a=\nabla\phi$, $b=\nabla\gamma$, $P=D^2\phi$, and $G=D^2\gamma$, the three brackets on the right of [(3.8)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:AG), in their displayed order, are 

$$
\begin{aligned}&\gamma^2(Ga-Pb)-2\gamma(a\cdot b)b-2\gamma|b|^2a-2\phi|b|^2b,\\
 &3\gamma^2(Ga-Pb)+6\gamma(a\cdot b)b,\\
 &-2\gamma^2(Ga-Pb)+2\gamma|b|^2a-2\phi|b|^2b.
\end{aligned}
$$

 Multiplication by $-1/4,-1/12,-1/4$ cancels every term except $\phi|b|^2b$. This verifies the precise local identity used here independently of a transport-group theorem.

Along the half-density flow, [(3.6)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-inf) is the linear transport equation for the assigned density. Its unique local distributional solution is the pushforward: testing against the inverse-transported test function makes its derivative zero. Compact support gives a complete smooth coordinate flow. This proves [(3.7)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-fin); the one-block proof is identical with other coordinates as parameters. 

□



These transports are auxiliary actions on states and probability assignments. We have not claimed that $U_F$ is a Schrödinger propagator produced by the physical controls.



**Proposition 3.3 (Full scalar-control criterion).**

<a id="prop:saturation"></a> For scalar states on ${\mathbb R}^d$, $d\ge2$, assumptions [A1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:prob)–[A3](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:cc) and ${C_c^\infty}({\mathbb R}^d;{\mathbb R})\subset{\mathcal A}$ imply [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born) on every nowhere-zero state. 





**Proof.**

Fix such a state, put $r=|\Psi|^2$, and let $u$ be compactly supported with ${\operatorname{div}}(ru)=0$. Then $2\operatorname{Re}(\overline\Psi T_u\Psi)=-{\operatorname{div}}(ru)=0$. Since the state is scalar and nonzero, $T_u\Psi=-if\Psi$ for a real compactly supported smooth $f$. The annihilator identity and [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport) give 

$$

 0={\operatorname{div}}(p^\Psi u)=r\,u\cdot\nabla(p^\Psi/r).

$$

 Such weighted divergence-free fields span every tangent space. Indeed, in a ball around $q_0$, choose $j\ne k$, a compact $\chi$ equal to $r(q_0)(q_k-q_{0k})$ near $q_0$, and set 

$$

 u=r^{-1}\big((\partial_k\chi)e_j-(\partial_j\chi)e_k\big).

$$

 This field has ${\operatorname{div}}(ru)=0$ and $u(q_0)=e_j$. Therefore $\nabla(p^\Psi/r)=0$. Connectedness of ${\mathbb R}^d$ and normalization prove the assertion. 

□





**Remark 3.4 (The line exception).**

<a id="rem:line"></a> For one scalar coordinate let $r=|\Psi|^2/{\left\|{\Psi}\right\|}_2^2$ and $F^\Psi(x)=\int_{-\infty}^x r(s)\,ds$. For any positive smooth $g$ on $[0,1]$ with integral one, 

$$

 p^\Psi(x)=r(x)g(F^\Psi(x))

$$

 is normalized, projective, and has the stated functional regularity. The continuity equation with vanishing flux at infinity gives $(\partial_t+v\partial_x)F^\Psi=0$, proving equivariance for every scalar potential and positive mass. The assignment also has the approximation continuity above. A nonconstant $g$, for example $1+\alpha\cos(2\pi s)$ with $0<|\alpha|<1$, gives a non-Born law. This is the exception discussed in [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 8]. Local circulation in dimension at least two is essential to [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation).

---

# Section 4: Local controls and fixed interactions

<a id="section-4"></a>

## 4 Local controls and fixed interactions

<a id="sec:local"></a>

Local scalar controls initially give ${C_c^\infty}({\mathbb R}^3)$ annihilators in each particle block. By [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport), the assignment is covariant under independent compactly supported coordinate flows on the particles. We now use that covariance to expose the interaction.



**Lemma 4.1 (Mixed conjugation).**

<a id="lem:mixed"></a> For an edge $\{i,j\}$, and compactly supported one-body diffeomorphisms $F,G$ generated by flows on particles $i,j$, respectively, the function <a id="eq:mixed"></a>


$$
\begin{aligned}M_{F,G}(q_i,q_j)={}&W_{ij}(F(q_i),G(q_j))
 -W_{ij}(F(q_i),q_j)\\
 &-W_{ij}(q_i,G(q_j))+W_{ij}(q_i,q_j)
 
\end{aligned}
$$

Equation (4.1).

 belongs to ${\mathcal A}$. In particular, for $u,v\in{C_c^\infty}({\mathbb R}^3;{\mathbb R}^3)$, <a id="eq:edge-source"></a>


$$

 \sum_{a,b}u^a(q_i)v^b(q_j)
 \partial_{i,a}\partial_{j,b}W_{ij}(q_i,q_j)\in{\mathcal A}.

$$

Equation (4.2).

 





**Proof.**

Set $H^F=U_F^{-1}HU_F$, using the block half-density action, and similarly for $G,FG$. Covariance [(3.7)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-fin) transfers the statistical evolution identity for $H$ to $H^F$. To see precisely which current is transferred, a real half-density coordinate conjugation of $-\Delta/2$ has the form 

$$

 -\tfrac12\partial_\alpha(a^{\alpha\beta}\partial_\beta)+V_{\mathrm{real}},
 \qquad a=(DF)^{-1}(DF)^{-T}.

$$

 Its current is $a^{\alpha\beta}\operatorname{Im}(\overline\Psi\partial_\beta\Psi)$. Explicitly, if $v_F^\Psi$ denotes the conjugated velocity, then 

$$

 v_F^\Psi(q)=DF(q)^{-1}v^{U_F\Psi}(F(q))
 =\frac{a(q)\operatorname{Im}(\overline\Psi(q)\nabla\Psi(q))}{|\Psi(q)|^2}.

$$

 The Jacobian half-density factor is real and hence contributes no imaginary phase gradient. Changing variables in the continuity equation transfers the assigned-density identity with this same velocity. Only the metric in the transformed particle block changes.

The operator difference 

$$

 H^{FG}-H^F-H^G+H

$$

 therefore has zero kinetic part. All one-body terms cancel. All pair terms except $W_{ij}$ cancel as well, leaving exactly multiplication by [(4.1)](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#eq:mixed). The same mixed difference of the four currents is zero, block by block. Subtracting the four transferred statistical identities gives $D{\mathcal P}_\Psi[-iM_{F,G}\Psi]=0$.

Take $F=F_s^u$, $G=F_t^v$, divide by $st$, and let $s,t\to0$. The limit is [(4.2)](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#eq:edge-source). The mixed differences and their derivatives have common compact support in the two active blocks; the other coordinates are spectators only in this multiplier estimate. Taylor's formula gives convergence on every Schwartz tangent vector. Thus [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) applies. 

□





**Lemma 4.2 (Edge saturation).**

<a id="lem:edge"></a> If [(2.2)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:interaction) holds, every real function in ${C_c^\infty}({\mathbb R}^3\times{\mathbb R}^3)$, viewed as a multiplier in the edge variables, belongs to ${\mathcal A}$. 





**Proof.**

Some component $c=\partial_{i,a}\partial_{j,b}W_{ij}$ is nonzero on a product of sufficiently small balls $B_i\times B_j$. Taking $u=f e_a,v=g e_b$ in [(4.2)](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#eq:edge-source) gives $f(q_i)g(q_j)c(q_i,q_j)\in{\mathcal A}$. For $h$ compactly supported inside that product, $h/c$ is smooth there. Finite sums of separated compact functions approximate it in $C^\infty$, with common compact support. For example, extend it to a box, approximate its smooth periodic extension by Fourier partial sums, and multiply by fixed cutoffs in the two variables. Multiplication by $c$ and [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) give $h\in{\mathcal A}$.

Annihilator identities are invariant under pullback by the one-body coordinate transports: differentiate [(3.7)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:cov-fin) along a phase variation. Independent compact diffeomorphisms can move any sufficiently small pair of balls to this nonvanishing product. Pullback therefore gives all compact multipliers in every such product cell. A finite partition of unity on the support of a target function proves the result globally. 

□



The remaining step combines overlapping edge variables. We include the elementary local factorization that makes this step exact.



**Lemma 4.3 (Gradient-product factorization).**

<a id="lem:factor"></a> On a Euclidean open set, every real compact smooth function is a finite sum of terms $\nabla a\cdot\nabla b$, with $a,b$ compactly supported in that open set. 





**Proof.**

A finite partition reduces the question to a small box with room to spare in a larger box. Write its coordinates as $(x_1,x')$, let $H(x')=\int f(t,x')\,dt$, and choose a unit-integral bump $\alpha(x_1)$ in a spare interval disjoint from the $x_1$-projection of ${\operatorname{supp}} f$. Then 

$$

 a(x_1,x')=\int_{-\infty}^{x_1}
       \big(f(t,x')-\alpha(t)H(x')\big)\,dt

$$

 is compactly supported. Choose a compact function $\beta(x_1)$ whose derivative is one on the projection of ${\operatorname{supp}} f$, zero on ${\operatorname{supp}}\alpha$, and has its compensating integral in another spare interval. Let $\chi(x')$ be one near the transverse support of $a$ and put $b=\beta\chi$. Transverse derivative products vanish, whereas $\partial_1a\,\partial_1b=(f-\alpha H)\beta'=f$. All supports fit in the larger box. Summation proves the lemma. 

□





**Proposition 4.4 (Connected-graph saturation).**

<a id="prop:graph"></a> Under the hypotheses of [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main), 

$$

 {C_c^\infty}({\mathbb R}^{3N};{\mathbb R})\subset{\mathcal A}.

$$

 





**Proof.**

Induct along a spanning tree. One-body and edge multipliers are available. Suppose all compact multipliers on a connected collection $S$ of particle blocks are available, and attach a new particle $j$ by an edge at $i\in S$. For compact one-body factors $f_k$, apply [lemma 4.3](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:factor) to the desired factor on block $i$, writing $f_i=\sum_\ell\nabla a_\ell\cdot\nabla b_\ell$. Then 

$$

 \Gamma\left(a_\ell(q_i)\!\!\prod_{k\in S\setminus\{i\}}\!\!f_k(q_k),
                 b_\ell(q_i)f_j(q_j)\right)
 =(\nabla a_\ell\cdot\nabla b_\ell)(q_i)
                  \prod_{k\in(S\cup\{j\})\setminus\{i\}}f_k(q_k).

$$

 Only the shared block contributes. The two inputs are available by induction and edge saturation, so [lemma 3.1](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:phase) gives the desired separated product after summation. Separated compact functions are $C^\infty$-dense, with common blockwise compact supports, in compact functions on these blocks, by the Fourier-cutoff argument in [lemma 4.2](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:edge). This is convergence after multiplication by each fixed Schwartz state, including spectator variables. Thus [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) completes the induction. 

□





**Proof of [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main).**

 Use [proposition 4.4](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#prop:graph), [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation) in dimension $3N\ge2$. For $N=1$, one-body controls already give full scalar saturation. [lemma A.1](/quantum-measurement/research/control-consistency/appendix-a-nonzero-approximation-and-nodes#lem:nodal-density) below supplies normalized nowhere-zero approximations; [A4](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:nodes) and [(2.4)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:L2TV) then extend the equality of measures to every state. Undoing mass scaling gives [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born). 

□



The proof has generated identities for a statistical functional, including identities associated with joint multipliers. None of the mixed conjugations, brackets, or density limits is a claim that an additional joint potential has been physically implemented. Only the controls quantified in [(2.3)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:cc) are physical inputs.

---

# Section 5: Translated profiles and an interacting example

<a id="section-5"></a>

## 5 Translated profiles and an interacting example

<a id="sec:profiles"></a>

The control hypothesis can be stated using a single spatial shape on each particle. Amplitudes and centers remain freely variable.



**Theorem 5.1 (Translated-profile controls).**

<a id="thm:profiles"></a> In [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main), replace arbitrary compact one-body controls on particle $i$ by 

$$

 v_i(q_i)=\lambda g_i(q_i-a),\qquad
 \lambda\in{\mathbb R},\quad a\in{\mathbb R}^3,

$$

 where $g_i\in{\mathcal S}({\mathbb R}^3;{\mathbb R})$ and $\int g_i\ne0$. It suffices to assume consistency for these controls and zero control, independently on each particle. The same uniqueness conclusion holds. 





**Proof.**

We show that translates of $g=g_i$ generate every compact one-body annihilator. We work in one block and use [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) against full Schwartz states. Since $\widehat g(0)\ne0$, there is a ball $B$ around zero on which $\widehat g$ is nonzero. For a real $f$ whose Fourier transform is smooth and compactly supported in $B$, division gives a Schwartz function $h$ with $f=g*h$. Real-valuedness follows from Hermitian symmetry of the Fourier transforms. Truncation of this convolution and Riemann summation converge in Schwartz space. Thus $f\in{\mathcal A}$.

Choose a real band-limited Schwartz function $\chi$ with $\chi(0)=1$. For each sufficiently small frequency $k$, the functions $\chi(x/R)\cos(k\cdot x)$ and $\chi(x/R)\sin(k\cdot x)$ have Fourier support in $B$ for large $R$. They are annihilators. Their multiplication on every fixed Schwartz state converges in Schwartz space to multiplication by $\cos(k\cdot x)$ and $\sin(k\cdot x)$, respectively. Indeed, derivatives are uniformly bounded, and the Schwartz decay of the state controls the expanding exterior region.

For bookkeeping, complexify the real vector space of identities and the bilinear operation $\Gamma$. This is a formal combination of real sine and cosine identities; it does not assume that the real derivative $D{\mathcal P}$ is complex-linear or that a complex potential is an admitted control. Formula [(3.5)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:gamma) reads 

$$

 \Gamma(e^{ik\cdot x},e^{i\ell\cdot x})
       =-(k\cdot\ell)e^{i(k+\ell)\cdot x}.

$$

 Every frequency $k\ne0$ is a positive integer multiple of a sufficiently small one. Repeated collinear additions have nonzero dot products, and therefore generate $e^{ik\cdot x}$. Real and imaginary parts give real identities; the constant is already an annihilator by projectivity.

Finally, for $f\in{C_c^\infty}({\mathbb R}^3)$, truncate its Fourier integral. On each compact frequency set the map $k\mapsto e^{ik\cdot x}\Psi$ is continuous into Schwartz space for every fixed $\Psi$. Its Riemann sums therefore converge in that topology; taking Hermitian-symmetric sums preserves reality of the multipliers. Derivatives of the omitted Fourier tail are bounded by tails of $\int(1+|k|)^j|\widehat f(k)|\,dk$, which tend to zero for every $j$. These bounds imply convergence after multiplication by each fixed Schwartz state. Equation [(3.2)](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#eq:closure) supplies every compact multiplier. The proof of [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main) now applies. 

□



This theorem concerns exact identities satisfied by one assignment for all centers and amplitudes. It is not a finite-resource synthesis theorem for arbitrary target potentials. In particular, its Fourier and multiplier limits impose no experimental approximation principle on an individual preparation. They are justified by the stated continuity of the statistical functional.



**Example 5.2 (Two harmonically interacting particles).**

<a id="ex:harmonic"></a> For equal unit masses let 

$$

 H_0=-\tfrac12(\Delta_x+\Delta_y)
       +\tfrac{\omega^2}{2}(|x|^2+|y|^2)
       +\tfrac{k}{2}|x-y|^2,\qquad \omega,k>0.

$$

 The mixed interaction derivative is $-kI_3$, so the edge condition holds everywhere. The positive quadratic form supplies the common oscillator domain. Taking $g(x)=e^{-|x|^2/\sigma^2}$, $\sigma>0$, gives $\int g=\pi^{3/2}\sigma^3>0$. Thus consistency for independent real amplitudes and translates of this one-body profile already characterizes the Born assignment.

The holding ground state is an explicit entangled preparation. With $u=(x+y)/\sqrt2$, $v=(x-y)/\sqrt2$, and $\Omega=\sqrt{\omega^2+2k}$, it is 

$$

 \Psi_0(x,y)=\frac{(\omega\Omega)^{3/4}}{\pi^{3/2}}
       \exp\!\left[-\frac{\omega}{2}|u|^2-\frac{\Omega}{2}|v|^2\right].

$$

 In the particle coordinates its exponent contains $(\Omega-\omega)x\cdot y/2$; it does not factor between particles. The theorem applies to the full state assignment, not just to this Gaussian or to Gaussian dynamics. The interaction strength $k$ is fixed throughout the allowed controls.

---

# Section 6: Internal degrees of freedom

<a id="section-6"></a>

## 6 Internal degrees of freedom

<a id="sec:spin"></a>

We now use $\mathscr S_s={\mathcal S}({\mathbb R}^{3N};\bigotimes_i{\mathbb C}^{2j_i+1})\setminus\{0\}$. For each nonzero spin $j_i$, let $J_i^x,J_i^y,J_i^z$ be its irreducible spin matrices, acting on that factor. Add to [(2.1)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:ham) the one-body effective Zeeman terms <a id="eq:spinH"></a>


$$

 \sum_i \mathbf B_i(q_i)\cdot\mathbf J_i .

$$

Equation (6.1).

 This is a neutral or effective spin Hamiltonian with the current specified in [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model). There is no charged minimal-coupling kinetic term. The additional controls needed are independent real amplitudes of smooth bounded spatial profiles which, on a ball in each particle's physical space, agree with <a id="eq:spinprofile"></a>


$$

 \mathbf B(x,y,z)=(z,0,x).

$$

Equation (6.2).

 A compact divergence-free continuation exists: take the curl of $(0,(x^2-z^2)/2,0)$ multiplied by a cutoff equal to one near the ball. No assumption of arbitrary physical matrix-valued configuration-space controls is made.



**Theorem 6.1 (Effective-spin characterization).**

<a id="thm:spin"></a> For [(2.1)](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#eq:ham) and [(6.1)](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:spinH), with the scalar controls of [theorem 2.1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#thm:main) or [theorem 5.1](/quantum-measurement/research/control-consistency/translated-profiles-and-an-interacting-example#thm:profiles), the fixed-interaction hypotheses and the spatial spin controls just specified, assumptions [A1](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:prob)–[A3](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:cc) imply [(1.1)](/quantum-measurement/research/control-consistency/introduction#eq:born) on every nowhere-zero spinor. Under [A4](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:nodes) the conclusion extends to every nonzero Schwartz spinor. 





**Proof.**

We give the matrix-generation step explicitly. A Hermitian matrix multiplier $M(q)$ is a matrix annihilator if $D{\mathcal P}_\Psi[-iM\Psi]=0$ for every spinor. Scalar phases and scalar coordinate transport have exactly the previous current transformations. Working first with zero Zeeman control, [section 3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#sec:mechanism), [section 4](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#sec:local) therefore supplies all compact scalar annihilators and full compact coordinate covariance, without using scalar uniqueness.

Subtracting a Zeeman control from zero gives its matrix annihilator. Commuting its phase identity with coordinate covariance yields <a id="eq:matrixderivative"></a>


$$

 M\ \hbox{annihilating}\quad\Longrightarrow\quad
 u\cdot\nabla M\ \hbox{annihilating}

$$

Equation (6.3).

 for compact smooth $u$; this follows by the same symmetric-second-derivative cancellation as in [lemma 3.2](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#lem:transport), since the commutator with a first-order transport differentiates the multiplier. On the control cell [(6.2)](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:spinprofile), the choices $u=h(q)e_z$ and $u=h(q)e_x$ give $h(q)J_i^x$ and $h(q)J_i^z$, respectively, for arbitrary compact full-configuration $h$ supported over that cell. Coordinate covariance relocates small supports; a partition of unity gives these multipliers for every compact $h$.

The matrix identities have both Lie and Jordan closure. Commuting two phase identities gives $i[M,N]$. To prove the needed Jordan operation, suppose all compact coefficients of a constant Hermitian matrix $A$ are annihilators. The assignment is invariant under $e^{itfA}$. For the scalar Hamiltonian, 

$$

 -i(e^{-itfA}He^{itfA}-H)\Psi
 =t\left(-A\nabla f\cdot\nabla-\tfrac12A\Delta f\right)\Psi
       -\frac{it^2}{2}|\nabla f|^2 A^2\Psi.

$$

 The norm density is unchanged and the current changes only linearly in $t$, by $t(\Psi^\dagger A\Psi)\nabla f$. Comparison of consistency identities gives $|\nabla f|^2A^2$ as an annihilator. Choose $f$ so that a derivative of $|\nabla f|^2$ is nonzero on a prescribed small ball. Equation [(6.3)](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:matrixderivative), with a vector field dividing by that derivative, then gives $hA^2$ for every $h$ supported in the ball. Partitioning gives arbitrary compact coefficients. Polarization of $(A+B)^2$ yields $AB+BA$; compact cutoffs equal to one on the required supports justify products and commutators throughout.

These operations generate all Hermitian matrices on each irreducible spin factor. Indeed, powers of $J^z$ give its spectral projections by polynomial interpolation. The nonzero adjacent entries of $J^x$ link consecutive eigenvalues. If $P_m,P_n$ are distinct spectral projections, their Jordan products with $J^x$ isolate 

$$

 P_mJ^xP_n+P_nJ^xP_m,

$$

 and a commutator with $P_m$ gives the corresponding imaginary Hermitian matrix. Adjacent links generate all off-diagonal matrix units by further products and commutators. Diagonal projections supply the rest. Matrices on different factors commute, so their Jordan product is twice their tensor product. We have therefore obtained every compact Hermitian multiplier on the full internal space. This is the point at which irreducibility and spatial variation of the physical controls are used.

Fix a nowhere-zero spinor and a compact field $u$ with ${\operatorname{div}}(ru)=0$, where $r=\Psi^\dagger\Psi$. Put $z=\Psi$, $\eta=T_u\Psi$. Then $\operatorname{Re}(z^\dagger\eta)=0$. The compactly supported matrix <a id="eq:normtangent"></a>


$$

 M=\frac{i\eta z^\dagger-iz\eta^\dagger}{r}
       -\frac{i(z^\dagger\eta)}{r^2}zz^\dagger

$$

Equation (6.4).

 is smooth and Hermitian and satisfies $-iMz=\eta$. Indeed, $c=z^\dagger\eta$ is purely imaginary, so $\eta^\dagger z=-c$. The first numerator in [(6.4)](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:normtangent) is Hermitian, its second coefficient $-ic$ is real, and direct multiplication gives $Mz=i\eta$. Division by $r$ is harmless on the compact support of $\eta$. Matrix annihilation and transport covariance imply ${\operatorname{div}}(p^\Psi u)=0$. The weighted circulations in [proposition 3.3](/quantum-measurement/research/control-consistency/from-phases-to-transport-and-uniqueness#prop:saturation) now give $p^\Psi/r$ constant. Normalization, and then the approximation in [section A](/quantum-measurement/research/control-consistency/appendix-a-nonzero-approximation-and-nodes#app:nodes), finish the proof. 

□



The same proof applies to a finite-level effective model when its spatial controls yield localized constant matrices whose Jordan and Lie operations generate the full Hermitian algebra. This is an algebraic condition on the controls, not a consequence of having a finite-dimensional internal space. Constant spin rotations alone do not give the spatial matrix identities used above. If the controls preserve proper internal sectors, the theorem must be applied within each accessible sector; no conclusion is claimed for superpositions spanning inaccessible internal sectors. Independent probability masses can remain free for genuinely disjoint invariant configuration sectors, a different situation from overlapping internal components.

For identical particles, independently labeled one-body controls are unavailable. [section B](/quantum-measurement/research/control-consistency/appendix-b-a-permutation-preserving-refinement#app:identical) states the separate permutation-preserving result, including its nodal hypothesis.

---

# Section 7: Consequences for physical records

<a id="section-7"></a>

## 7 Consequences for physical records

<a id="sec:measurement"></a>



<a id="section-7-1"></a>

### 7.1 Joint preparation and existence of trajectories



Let the actual configuration be guided by $v^\Psi$. This is the usual Bohmian specification of definite positions; an apparatus record is a function of its actual configuration. To use the characterization for an experiment, its initial *joint* system–apparatus law must be governed by an assignment satisfying the theorem, or joint equilibrium must be supplied as a preparation assumption. Applying a theorem only to an isolated system does not establish equilibrium of an independently introduced apparatus.

Once joint equilibrium holds, the Schrödinger continuity equation transports it under any subsequent well-defined Hamiltonian with the stated current, including a specified measurement coupling. We record a sufficient finite-time trajectory condition rather than presuming a global all-point flow at nodes.



**Lemma 7.1 (Time-dependent equilibrium transport).**

<a id="lem:flow"></a> On nonsingular ${\mathbb R}^d$, let a normalized scalar or finite spinor Schrödinger solution be $C^2$ in space and time on $[0,T]$, with the current above, and suppose <a id="eq:flowbound"></a>


$$

 \int_0^T\left({\left\|{\partial_t\Psi_t}\right\|}_2+
                    {\left\|{\nabla\Psi_t}\right\|}_2^2\right)\,dt<\infty.

$$

Equation (7.1).

 Then the guidance trajectories exist throughout $[0,T]$ for $|\Psi_0|^2dq$-almost every initial configuration and transport equilibrium. 





**Proof.**

Apply the current criterion in Theorem 1 of Teufel and Tumulka [[16](/quantum-measurement/research/control-consistency/bibliography#bib-TT2005)], which allows time-dependent currents. With $r=|\Psi|^2$ and $m_{\min}=\min_i m_i$, Cauchy–Schwarz gives 

$$
\begin{aligned}\int_{\{r>0\}}|\partial_t r+v\cdot\nabla r|\,dq
 &\le 2{\left\|{\partial_t\Psi}\right\|}_2+
             2m_{\min}^{-1}{\left\|{\nabla\Psi}\right\|}_2^2,\\
 \int |J|\,dq&\le m_{\min}^{-1}{\left\|{\nabla\Psi}\right\|}_2 .
\end{aligned}
$$

 The first bound is the required expected variation of the logarithm of the positive current density along trajectories; the second controls escape to spatial infinity. Their time integrals are finite by [(7.1)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:flowbound). There are no removed singular sets requiring an additional boundary estimate. The cited theorem gives almost-sure avoidance of nodes and escape, and equivariance. It is its general current theorem, not an autonomous-Hamiltonian specialization, that is used. 

□



The smooth controlled evolutions in [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model) satisfy these hypotheses on finite intervals by their Schwartz estimates. Equilibrium-almost-sure existence suffices for the following statistical conclusions. It is not being used to claim existence for every singular candidate law.



<a id="section-7-2"></a>

### 7.2 Implemented effects and instruments



Let $\chi_0$ be a normalized apparatus preparation, $U$ the unitary of an actually specified coupling, and $\Delta_C$ the apparatus configuration region recording $C$. Define $V_0\psi=\psi\otimes\chi_0$. The equilibrium record probability is <a id="eq:effect"></a>


$$

 \Pr(C\mid\psi)={\left\|{(I\otimes1_{\Delta_C})UV_0\psi}\right\|}^2
       ={\left\langle {\psi},{E_C\psi}\right\rangle},\qquad
 E_C=V_0^\dagger U^\dagger(I\otimes1_{\Delta_C})UV_0.

$$

Equation (7.2).

 For a measurable record partition, positivity, normalization, and countable additivity of these effects follow from those of the pointer projections. This is the usual apparatus derivation of a POVM [[4](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ2004)].

For a finite resolved apparatus model, suppose its actual endpoint is <a id="eq:instrument"></a>


$$

 UV_0\psi=\sum_{i,\alpha}K_{i\alpha}\psi\otimes\chi_{i\alpha},

$$

Equation (7.3).

 where the normalized apparatus packets have disjoint configuration supports, and $i$ is the coarse record. Then [(7.2)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:effect) gives 

$$

 \Pr(i\mid\psi)=\sum_\alpha{\left\|{K_{i\alpha}\psi}\right\|}^2,\qquad
 \mathcal I_i(\rho)=\sum_\alpha K_{i\alpha}\rho K_{i\alpha}^\dagger.

$$

 At a fine record the conditional system wavefunction is proportional to $K_{i\alpha}\psi$; coarse conditioning gives the normalized instrument output. The mixed-state expression follows by linearity for a specified preparation mixture or by a supplied purification. This derivation assumes [(7.3)](/quantum-measurement/research/control-consistency/consequences-for-physical-records#eq:instrument) is the endpoint of the physical apparatus. An abstract dilation representation alone does not establish implementability by the control resources in [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model).

With internal indices $a,b$ for system and environment, conditioning a joint equilibrium state at environment position $y$ gives the kernel 

$$

 G_y^{aa'}(x,x')=\sum_b\Psi_{ab}(x,y)\overline{\Psi_{a'b}(x',y)}.

$$

 Its normalized diagonal trace is the conditional configuration density. The corresponding current is obtained by the same partial trace before taking the diagonal. This is the conditional density-matrix construction of [[5](/quantum-measurement/research/control-consistency/bibliography#bib-DGTZ2005), Section 4]; it does not assert autonomous evolution for an arbitrary reduced state.

Exact support separation is an ideal mathematical case. Here $\operatorname{TV}(\mu,\nu)=\sup_A|\mu(A)-\nu(A)|$, equal to one half of the $L^1$ distance for densities, and quantum trace distance is $\tfrac12{\left\|{\rho-\sigma}\right\|}_1$. Let $V=UV_0$ be the actual complete endpoint isometry and $\widetilde V$ an ideal isometry into the same output space, compared using the same record partition. If ${\left\|{V-\widetilde V}\right\|}\le\varepsilon$, then for every normalized input the trace distance of the two output pure states is at most $\varepsilon$. Measurement contracts trace distance, so their entire endpoint record distributions differ in total variation by at most $\varepsilon$. For an initial law on which the actual trajectory and readout map is defined, a discrepancy $\delta$ in total variation from joint equilibrium adds at most $\delta$: pushforward cannot increase total variation. Thus $\min\{1,\varepsilon+\delta\}$ bounds the combined endpoint record error. [section D](/quantum-measurement/research/control-consistency/appendix-d-a-finite-time-gaussian-pointer#app:pointer) gives an explicitly time-dependent Gaussian pointer example with a direct overlap bound.

An endpoint record distribution does not establish that the pointer copied a specified earlier actual label or remained in a record region throughout a holding interval. Those claims require a defined history observable and a separate dynamical estimate. Initial-law total variation contracts under a common measurable history map when such a map is defined, but small endpoint wave or isometry error alone gives no comparison between two trajectory histories. No copy-and-hold error or whole-path Born comparison is asserted here.

For repeated or adaptive experiments, retain all apparatus memory in the joint configuration and use the cumulative implemented evolution. Products of branch operators follow when each stage has the stated conditional ready-state or reset preparation. If memory is discarded without that property, a product of reduced instruments is not justified. Repeated-trial frequency statements require the relevant independent or conditional preparation assumptions; they do not follow from a one-time marginal law alone. These qualifications belong to the preparation and apparatus model, not to the algebraic uniqueness proof.

---

# Section 8: Discussion

<a id="section-8"></a>

## 8 Discussion



The principal theorem identifies the Born density from an alternative statistical premise: one regular probability assignment must be compatible with a family of local controls in a fixed interacting system. The interaction supplies the connection between particle blocks through mixed coordinate conjugation. The functional consequences of this connection are much larger than the physical control list, which explains why a translated one-body profile can suffice for a uniqueness theorem without being a universal experimental actuator.

The result answers a precise version of the universal-equivariance question posed in [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007)]. Its conditional content is substantial: under the stated regularity and state-domain assumptions there is no competing density assignment. It does not derive those statistical assumptions from deterministic dynamics. In particular, allowing an extra preparation-history argument changes the question. The theorem is independent of exact nonlinear preparation-return constructions and requires no assumptions about their existence.

Spin, symmetry, and nodes require the hypotheses stated for them. Within those domains, the characterized equilibrium law has the familiar consequences for physical records. The mathematical contribution is the characterization and local-control reduction; the established Bohmian measurement analysis explains how that law appears in an experiment.

---

# Appendix A: Nonzero approximation and nodes

<a id="section-A"></a>

## A Nonzero approximation and nodes

<a id="app:nodes"></a>



**Lemma A.1.**

<a id="lem:nodal-density"></a> Normalized nowhere-zero Schwartz functions ${\mathbb R}^d\to{\mathbb C}^s$ are $L^2$-dense in the unit sphere of $L^2({\mathbb R}^d;{\mathbb C}^s)$. 





**Proof.**

Approximate a target by a bounded step function of compact support on finitely many disjoint boxes. Ignore boxes with zero value. Fix a positive Schwartz Gaussian $g$. On slightly smaller boxes prescribe a smooth positive amplitude equal to the norm of the corresponding constant value, and a smooth unit vector equal to its direction. These prescriptions can be realized in the form 

$$

 \Phi(q)=g(q)e^{a(q)}U(q)e_1,

$$

 where $a$ is real smooth and compactly supported and $U$ is a smooth unitary matrix field equal to $I$ outside a compact set. For each box, a constant Hermitian logarithm of a unitary sending $e_1$ to its desired direction, multiplied by a cutoff, gives the required rotation. Disjoint box neighborhoods keep the constructions independent. Prescribe $a=\log(c/g)$ on a box of desired norm $c>0$, and join it smoothly to a large negative value on the rest of a large ball.

Choose the large ball so the exterior Gaussian tail is small, then the negative value so the undesired interior amplitude is small. Transition strips can be made arbitrarily thin; the finitely many interpolating amplitudes are bounded, so their $L^2$ contribution tends to zero with strip volume. The resulting $\Phi$ is Schwartz and nowhere zero. This proves arbitrary $L^2$ approximation of the step function and hence of the target. Normalization preserves nonvanishing and convergence. 

□



For scalar states with full scalar annihilators, and for spinors with the matrix annihilators established in [theorem 6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin), the proof of uniqueness before approximation is local: on any connected nonzero region it makes $p^\Psi/r^\Psi$ constant. Distinct components need not initially have the same constant. Nor does local regularity rule out a density supported on a zero set of positive Lebesgue measure. Assumption [A4](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:nodes), applied to [lemma A.1](/quantum-measurement/research/control-consistency/appendix-a-nonzero-approximation-and-nodes#lem:nodal-density), fixes both issues without a pointwise limit argument at nodes. The nowhere-zero set itself need not be open in the Schwartz topology; the open sets used for differentiation are the $\mathscr U_K$ of [A2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:smooth).

---

# Appendix B: A permutation-preserving refinement

<a id="section-B"></a>

## B A permutation-preserving refinement

<a id="app:identical"></a>

This appendix changes the control and state domains explicitly. Let 

$$

 \widetilde Q=({\mathbb R}^3)^N\setminus\Delta,\qquad
 Q=\widetilde Q/S_N,

$$

 where $\Delta$ is the union of coincidence diagonals. Work in a fixed bosonic or fermionic Schwartz sector, with the usual permutation action on any spin factors. On the quotient this is a scalar complex line bundle or a finite-rank complex vector bundle. Densities will be represented by *normalized* permutation-invariant densities on the ordered cover and then pushed forward to $Q$. In this convention no additional factor of $N!$ is inserted.

Take equal masses, a common one-body potential, and a common symmetric smooth pair interaction $W(x,y)=W(y,x)$ on all pairs, in the common-domain class of [section 2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#sec:model). Suppose $D_xD_yW$ is nonzero on some product of disjoint physical-space balls. The controls are the collective scalar potentials <a id="eq:collective"></a>


$$

 V_f(q)=\sum_i f(q_i),\qquad f\in{C_c^\infty}({\mathbb R}^3;{\mathbb R}).

$$

Equation (B.1).

 In the spin case, use identical irreducible spin factors and collective Zeeman controls with localized profiles as in [equation 6.2](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:spinprofile). The assignment is a density in the fixed sector, projective and permutation-invariant, with the local Bastiani regularity of [A2](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:smooth) restricted to that sector. Require consistency for these sector-preserving Hamiltonians.

The appropriate approximation hypothesis is now weak continuity under normalized $L^2$ approximation by sector states whose associated section on $Q$ is transverse to the zero section. This replaces [A4](/quantum-measurement/research/control-consistency/physical-model-and-statistical-assumptions#ass:nodes); distinguishable nowhere-zero approximation is not being used in a fermionic sector.



**Theorem B.1 (Identical-particle sector).**

<a id="thm:identical"></a> Under these assumptions, the only sector assignment is the pushforward to $Q$ of $|\Psi|^2dq/{\left\|{\Psi}\right\|}_2^2$. The conclusion before the approximation step holds for every transverse state. It also holds with [(B.1)](/quantum-measurement/research/control-consistency/appendix-b-a-permutation-preserving-refinement#eq:collective) restricted to all translates and real amplitudes of one real Schwartz profile of nonzero integral. 





**Proof.**

We establish the local generation on $Q$, where the scalar norm and current are well defined. Collective annihilators and the phase argument yield covariance under the collective flow $F^{\otimes N}$. For vector fields supported in disjoint physical cells $U,V$, the mixed-conjugation calculation remains valid. One-body kinetic contributions have disjoint spatial supports and their mixed difference is zero. Differentiating the pair terms gives 

$$

 \sum_{i\ne j}\sum_{a,b}
 u^a(q_i)v^b(q_j)\partial_{x_a}\partial_{y_b}W(q_i,q_j)\in{\mathcal A}.

$$

 The terms are unambiguously selected by $q_i\in U,q_j\in V$. Division by a nonzero mixed derivative and separated approximation, as in [lemma 4.2](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#lem:edge), give 

$$

 n_U(f)n_V(g)\in{\mathcal A},\qquad
 n_U(f)=\sum_i f(q_i),\quad {\operatorname{supp}} f\subset U,\quad {\operatorname{supp}} g\subset V.

$$

 A single compact physical-space diffeomorphism can carry any ordered pair of sufficiently small disjoint balls to the given control cells in ${\mathbb R}^3$. Collective covariance consequently gives the same identity for every pair of disjoint cells.

For mutually disjoint cells $U_1,\ldots,U_r$, gradient products of these identities build $\prod_{\ell=1}^r n_{U_\ell}(f_\ell)$, by the same induction and local factorization as in [proposition 4.4](/quantum-measurement/research/control-consistency/local-controls-and-fixed-interactions#prop:graph). Disjoint cells cannot contribute a cross derivative in the same particle coordinate. At the shared cell, the contraction is exactly $n_{U_\ell}(\nabla a\cdot\nabla b)$, which supplies the induction step.

For $r=N$, a nonzero term has exactly one particle in each cell. Such products are the symmetrized separated functions on a collision-free product chart. They approximate every compact smooth function on that quotient chart. A partition of unity over the support gives all compact scalar annihilators on $Q$. The gradient-bracket and circulation arguments are local in its flat charts and patch by equivariant lifts. Thus $p/r$ is constant on each connected nonzero region in the scalar case.

In the spin case, localizing a collective Zeeman derivative to one occupied cell supplies the spin matrix on that slot of the quotient chart. The scalar transports just obtained allow arbitrary compact coefficient functions on the chart. All such coefficients are chosen with support strictly inside that chart. On the ordered cover, extend a chart matrix to the disjoint permutation lifts by conjugating with the permutation action on spin factors, and set it to zero outside their union. This produces a smooth equivariant multiplier preserving the chosen symmetry sector; the scalar fermionic sign cancels in the conjugation. The Lie and Jordan argument of [theorem 6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin) therefore operates within the sector and supplies every compactly supported Hermitian endomorphism in the local spin frame. The norm-tangent matrix [(6.4)](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#eq:normtangent) and weighted circulations give the same conclusion.

It remains to justify the transverse approximation class and connectedness. Smooth compact perturbations of a section, supported in a collision-free chart and spanning its fiber, extend equivariantly to its disjoint permutation lifts. They preserve the Schwartz sector. On any compact chart exhaustion, these finite-dimensional perturbations make the evaluation map transverse to the zero section. The parametric transversality theorem [[7](/quantum-measurement/research/control-consistency/bibliography#bib-Hirsch1976), Chapter 3] therefore gives a dense set of perturbations transverse near that compact set. Transversality on a compact set is open in the $C^1$ topology. The sector's Schwartz space is a Baire space, so intersection over the exhaustion yields a dense set of globally transverse sector states.

For complex fiber rank $s$, the zero set of a transverse section is a closed submanifold of real codimension $2s$, or is empty. The quotient $Q$ is connected, and removing such a submanifold leaves it path-connected: perturb a path with fixed endpoints transversely to the zero set; its one-dimensional image then has empty intersection with a submanifold of codimension at least two. Both this zero set and the excluded collision diagonals are Lebesgue null. Since the candidate law has a density, normalization now fixes the single constant $p/r=1/{\left\|{\Psi}\right\|}_2^2$. Sector approximation continuity extends the result to all states.

Finally, the proof of [theorem 5.1](/quantum-measurement/research/control-consistency/translated-profiles-and-an-interacting-example#thm:profiles) applies to the collective multipliers. Their gradient contraction is $\Gamma(V_f,V_g)=V_{\nabla f\cdot\nabla g}$. Thus it recovers every collective compact scalar identity and all subsequent steps. 

□



The transversality argument is an approximation result for the stated smooth complex sector, not a claim that an arbitrary physical nodal set is transverse. The weak-continuity premise is still required to pass from this dense class to all sector states. The result concerns a fixed accessible symmetry sector and does not fix weights between superselection sectors.

---

# Appendix C: An alternative characterization from binary-flag heredity

<a id="section-C"></a>

## C An alternative characterization from binary-flag heredity

<a id="app:heredity"></a>

This argument is independent of the local-control theorem. It uses a stronger compositional statistical assumption in place of the functional $C^2$ and control-family assumptions.

For each admitted scalar configuration dimension $d$, suppose a projective assignment $\psi\mapsto p_d^\psi$ gives a normalized density, positive and $C^1$ on $\{\psi\ne0\}$, and zero almost everywhere on $\{\psi=0\}$. The state classes contain positive Schwartz reference amplitudes, their smooth compactly supported amplitude and phase modifications, and all flag superpositions used below. Fix two nonzero smooth packets $\chi_0,\chi_1$ in an auxiliary dimension $k$, with disjoint support regions $D_0,D_1$.

For every 

$$

 \Psi(x,y)=\psi(x)\chi_0(y)+\phi(x)\chi_1(y),

$$

 assume both conditional laws use the same standalone assignments: <a id="eq:heredityX"></a>
<a id="eq:heredityY"></a>


$$
\begin{aligned}\Pr_\Psi(X\in dx\mid Y=y)&=p_d^{\Psi(\cdot,y)}(x)\,dx,\\
 \Pr_\Psi(Y\in dy\mid X=x)&=p_k^{\Psi(x,\cdot)}(y)\,dy.
\end{aligned}
$$

Equation (C.1, C.2).

 These are ordinary conditional probabilities for the assigned joint density. Define its unknown flag odds 

$$

 O(z)=\frac{\mu_k^{z\chi_0+\chi_1}(D_0)}
                {\mu_k^{z\chi_0+\chi_1}(D_1)},\qquad z\in{\mathbb C}^*,

$$

 and assume $O$ is continuous. Faithfulness makes it finite and positive. No quadratic distribution for the flag is assumed.



**Theorem C.1 (Binary-flag heredity and current compatibility).**

<a id="thm:heredity"></a> The preceding assumptions imply <a id="eq:powers"></a>


$$

 p_d^\psi(q)=\frac{a_d(q)|\psi(q)|^\alpha}
                   {\int a_d(x)|\psi(x)|^\alpha\,dx}

$$

Equation (C.3).

 on nonzero amplitudes, with a fixed positive $C^1$ weight $a_d$ and a real exponent $\alpha$ common to dimensions using the same auxiliary law. The integrand is taken as zero at nodes. Only choices with finite normalizers on the admitted class qualify.

If these assignments also obey the scalar guidance continuity equation on the admitted Schrödinger histories, including arbitrary compact phase variations of a positive amplitude, with the differentiability used in that equation, then $\alpha=2$, each $a_d$ is constant, and the assignment is Born equilibrium. 





**Proof.**

Let $A,B>0$ be the two flag probabilities in the joint law. Equation [(C.1)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:heredityX) gives the two subdensities $A p_d^\psi$ and $B p_d^\phi$ for $X$. Equation [(C.2)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:heredityY) gives their odds at $x$. Consequently, on the common nonzero region, <a id="eq:odds"></a>


$$

 \frac{p_d^\psi(x)}{p_d^\phi(x)}
       =\frac BA O\!\left(\frac{\psi(x)}{\phi(x)}\right).

$$

Equation (C.4).

 The conditional identities hold initially almost everywhere; positivity and continuity extend [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) throughout that region.

Put $w(z)=O(z)/O(1)$, fix a positive reference $\xi$, and choose smooth nowhere-zero $u,v$ equal to one outside a compact set. Apply [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) to the pairs among $uv\xi,v\xi,\xi$. Multiplication of density ratios, evaluated outside the compact set, fixes their constant factors. Inside, it then gives $w(uv)=w(u)w(v)$. At a chosen point $u,v$ may take any prescribed values in ${\mathbb C}^*$, using exponentials of compactly supported smooth logarithms. Thus $w$ is a continuous positive character of ${\mathbb C}^*$.

Its restriction to the phase circle is trivial: its logarithm would be a continuous homomorphism from a compact group to $({\mathbb R},+)$. On positive real numbers, the continuous additive equation for $\log w(e^t)$ gives $w(z)=|z|^\alpha$. Apply [(C.4)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:odds) to any admitted $\psi$ and a positive reference $\xi_d$. This yields [(C.3)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powers) with $a_d=p_d^{\xi_d}/|\xi_d|^\alpha$. The reference is independent of $\psi$; normalization fixes the proportionality constant. Faithful support extends the formula by zero on nodes. The same odds function fixes the same exponent for every system using this flag.

For the dynamical step write $r=|\psi|^2$, $\beta=\alpha/2$, and $p=ar^\beta/Z_\psi$. The quantum and assigned continuity equations give <a id="eq:powertransport"></a>


$$

 v\cdot\nabla\log a+(1-\beta){\operatorname{div}} v=\dot Z_\psi/Z_\psi .

$$

Equation (C.5).

 At the initial instant choose $\psi=\sqrt r\,e^{iS}$ with positive amplitude and compact smooth phase $S$. Outside the phase support $v$ and ${\operatorname{div}} v$ vanish, while $p>0$. Hence the spatially constant right side of [(C.5)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powertransport) is zero. If needed its derivative can be defined from the differentiable transported density at such an exterior point.

At an arbitrary point choose $\nabla S=0$ and prescribe the mass-weighted trace of its Hessian. This makes ${\operatorname{div}} v$ arbitrary and gives $\beta=1$. Next prescribe $\nabla S$ arbitrarily. Equation [(C.5)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powertransport) gives $\nabla\log a=0$. Connectedness and normalization complete the proof. 

□



The dynamical step uses one ordinary scalar Hamiltonian on a domain rich in initial phase variations; it does not require control-universal equivariance. Heredity alone permits the weighted powers in [(C.3)](/quantum-measurement/research/control-consistency/appendix-c-an-alternative-characterization-from-binary-flag-heredity#eq:powers) and is insufficient to select the square. Conversely, Born equilibrium obeys the stipulated conditionals by direct integration. The principle says that the conditional wavefunction is statistically sufficient under the two indicated subsystem descriptions. That is an additional premise, stronger than the existence of conditional probabilities. This is a precise version of the heredity proposal in [[6](/quantum-measurement/research/control-consistency/bibliography#bib-GS2007), Section 8], related to the equilibrium conditional-wavefunction formula in [[3](/quantum-measurement/research/control-consistency/bibliography#bib-DGZ1992)].

---

# Appendix D: A finite-time Gaussian pointer

<a id="section-D"></a>

## D A finite-time Gaussian pointer

<a id="app:pointer"></a>

A simple effective measurement model illustrates exact propagation and controlled record overlap. Let a two-level label $Z$ have eigenvalues $\pm1$, and let a scalar pointer $y$ of mass $M$ have 

$$

 H(t)=-\frac{1}{2M}\partial_y^2-F(t)yZ,\qquad
 \chi_0(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)},

$$

 with real smooth $F$ on a finite interval. This is a specified effective apparatus coupling; its unbounded linear profile is not being identified with the compact preparation controls in [theorem 6.1](/quantum-measurement/research/control-consistency/internal-degrees-of-freedom#thm:spin).

Define 

$$

 d(t)=\frac1M\int_0^t(t-s)F(s)\,ds,\qquad
 s(t)=\sigma\sqrt{1+\left(\frac{t}{2M\sigma^2}\right)^2}.

$$

 If $\chi_{\rm free}$ is the free evolution of $\chi_0$, direct substitution gives the two exact packets 

$$

 \chi_\pm(y,t)=
 \exp\!\left[i\left(\pm M\dot d(t)y
            -\frac M2\int_0^t\dot d(s)^2\,ds\right)\right]
       \chi_{\rm free}(y\mp d(t),t).

$$

 Their position densities are Gaussians of variance $s(t)^2$, centered at $\pm d(t)$. This formula supplies a unitary finite-time propagator by translations, phases, and free evolution, preserving Schwartz states.

For the initial spinor $c_+|+\rangle+c_-|-\rangle$, put $w_\pm=|c_\pm|^2$, with $w_++w_-=1$. The joint norm density is $r=w_+|\chi_+|^2+w_-|\chi_-|^2>0$. The branch velocities are 

$$

 v_\pm=\pm\dot d+\frac{\dot s}{s}(y\mp d).

$$

 The actual velocity is their local density-weighted mean. With $a=\dot s/s$, 

$$

 |v(y,t)|\le |a(t)|\,|y|+|\dot d(t)-a(t)d(t)|.

$$

 For an explicit derivative bound, put $\lambda=w_+|\chi_+|^2/r$. Then 

$$

 \partial_y\lambda=\frac{2d}{s^2}\lambda(1-\lambda),\qquad
 |\partial_yv|\le |a|+\frac{|d(\dot d-ad)|}{s^2}.

$$

 The formulas also hold at $w_+=0$ or $w_-=0$ by the constant-weight limits. Since $s\ge\sigma>0$, this derivative and the linear-growth coefficients are bounded on every fixed finite interval. The guidance equation therefore has a complete all-point flow on that interval. To avoid a collision with the force notation, write its cumulative density as $\mathcal F_t$; the continuity equation and zero flux at infinity give $\mathcal F_t(Y_t)=\mathcal F_0(Y_0)$.

At a readout time with $d(T)>0$, take $y>0$ to record $+$. If $\Phi_{\rm G}$ denotes the standard normal distribution function, set 

$$

 e_T=\Phi_{\rm G}(-d(T)/s(T)).

$$

 Joint equilibrium gives 

$$

 \Pr(+)=w_+(1-e_T)+w_-e_T,\qquad
 |\Pr(+)-w_+|\le e_T.

$$

 The packets need not have disjoint support. The error is explicitly controlled, while both the wavefunction evolution and the guidance calculation are exact.

---

# Declarations

<a id="paragraph-2"></a>

## Declarations

 

<a id="paragraph-3"></a>

#### Funding.

 This work was conducted independently without external research funding.



<a id="paragraph-4"></a>

#### AI assistance and responsibility.

 The author developed this research programme, including the mathematical arguments. AI tools were used as an aid in that work and in preparing this publication version, including source organization, literature checking, mathematical checks, adversarial review, and editorial revision. Those reviews are not independent peer review, specialist certification, or formal proof verification. The author retains responsibility for the manuscript.



<a id="paragraph-5"></a>

#### Independent review and collaboration.

 Independent mathematical review and computational replication are invited. Collaboration on physical implementation and empirical testing is also welcome where specialist expertise, equipment, or institutional resources are required. No institutional affiliation or collaboration is claimed.



<a id="paragraph-6"></a>

#### Proof and verification materials.

 The central characterization arguments are contained in this article. Public sources supply the explicitly cited background results. The accompanying source package includes the review record and reproducible algebra checks; these checks supplement the proofs and do not replace them.

---

# Bibliography

## Bibliography

<a id="bib-AG2026"></a>

[1] Mahmoud Abdelgalil and Tryphon T. Georgiou.  The holonomy of optimal mass transport: The smooth case, 2026.  URL [https://arxiv.org/abs/2608.15585v2](https://arxiv.org/abs/2608.15585v2).  Version 2, 26 August 2026; Proposition 1 and equation (10).

<a id="bib-Bastiani1964"></a>

[2] Andrée Bastiani.  Applications différentiables et variétés différentiables de dimension infinie.  *Journal d'Analyse Mathématique*, 13:1–114, 1964.  [doi:10.1007/BF02786619](https://doi.org/10.1007/BF02786619).

<a id="bib-DGZ1992"></a>

[3] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the origin of absolute uncertainty.  *Journal of Statistical Physics*, 67:843–907, 1992.  [doi:10.1007/BF01049004](https://doi.org/10.1007/BF01049004).  URL [https://arxiv.org/abs/quant-ph/0308039](https://arxiv.org/abs/quant-ph/0308039).

<a id="bib-DGZ2004"></a>

[4] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the role of operators as observables in quantum theory.  *Journal of Statistical Physics*, 116:959–1055, 2004.  [doi:10.1023/B:JOSS.0000037234.80916.d0](https://doi.org/10.1023/B:JOSS.0000037234.80916.d0).  URL [https://sites.math.rutgers.edu/~oldstein/papers/op.pdf](https://sites.math.rutgers.edu/~oldstein/papers/op.pdf).

<a id="bib-DGTZ2005"></a>

[5] Detlef Dürr, Sheldon Goldstein, Roderich Tumulka, and Nino Zanghì.  On the role of density matrices in Bohmian mechanics.  *Foundations of Physics*, 35(3):449–467, 2005.  [doi:10.1007/s10701-004-1983-9](https://doi.org/10.1007/s10701-004-1983-9).  URL [https://arxiv.org/abs/quant-ph/0311127](https://arxiv.org/abs/quant-ph/0311127).

<a id="bib-GS2007"></a>

[6] Sheldon Goldstein and Ward Struyve.  On the uniqueness of quantum equilibrium in Bohmian mechanics.  *Journal of Statistical Physics*, 128:1197–1209, 2007.  [doi:10.1007/s10955-007-9354-5](https://doi.org/10.1007/s10955-007-9354-5).  URL [https://arxiv.org/abs/0704.3070](https://arxiv.org/abs/0704.3070).

<a id="bib-Hirsch1976"></a>

[7] Morris W. Hirsch.  *Differential Topology*, volume 33 of *Graduate Texts in Mathematics*.  Springer, New York, 1976.  [doi:10.1007/978-1-4684-9449-5](https://doi.org/10.1007/978-1-4684-9449-5).

<a id="bib-OriginalMassive"></a>

[8] Jeremy Rodgers.  A massive configuration completion of the quantum measurement programme, 2026.  Author preprint. DOI: [10.5281/zenodo.22774739](https://doi.org/10.5281/zenodo.22774739).

<a id="bib-OriginalMonograph"></a>

[9] Jeremy Rodgers.  Shadow theory and quantum measurement: Source dynamics, event laws, and physical records. two constitutive completions, 2026.  Author preprint. DOI: [10.5281/zenodo.22774584](https://doi.org/10.5281/zenodo.22774584).

<a id="bib-OriginalPilot"></a>

[10] Jeremy Rodgers.  A deterministic pilot medium: Bell path selection and autonomous material records, 2026.  Author preprint. DOI: [10.5281/zenodo.22774634](https://doi.org/10.5281/zenodo.22774634).

<a id="bib-PortfolioControl"></a>

[11] Jeremy Rodgers.  Control consistency and Born equilibrium: Uniqueness from local potentials and fixed interactions, 2026.  Author preprint. DOI: [10.5281/zenodo.23131058](https://doi.org/10.5281/zenodo.23131058).

<a id="bib-PortfolioEquilibrium"></a>

[12] Jeremy Rodgers.  Autonomous quantum measurement chains with faithful equilibrium records, 2026.  Author preprint. DOI: [10.5281/zenodo.23131069](https://doi.org/10.5281/zenodo.23131069).

<a id="bib-PortfolioPilot"></a>

[13] Jeremy Rodgers.  A deterministic hybrid medium for Bell jump paths and autonomous records, 2026.  Author preprint. DOI: [10.5281/zenodo.23131075](https://doi.org/10.5281/zenodo.23131075).

<a id="bib-PortfolioRecords"></a>

[14] Jeremy Rodgers.  Nonequilibrium calibration and faithful records in autonomous effective measurement models, 2026.  Author preprint. DOI: [10.5281/zenodo.23131081](https://doi.org/10.5281/zenodo.23131081).

<a id="bib-PortfolioReturn"></a>

[15] Jeremy Rodgers.  Preparation-return holonomy and equilibrium uniqueness in engineered interacting networks, 2026.  Author preprint. DOI: [10.5281/zenodo.23131064](https://doi.org/10.5281/zenodo.23131064).

<a id="bib-TT2005"></a>

[16] Stefan Teufel and Roderich Tumulka.  Simple proof for global existence of Bohmian trajectories.  *Communications in Mathematical Physics*, 258:349–365, 2005.  [doi:10.1007/s00220-005-1302-0](https://doi.org/10.1007/s00220-005-1302-0).  URL [https://arxiv.org/abs/math-ph/0406030](https://arxiv.org/abs/math-ph/0406030).
