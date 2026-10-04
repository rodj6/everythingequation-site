# Section 2: Physical model and statistical assumptions

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
