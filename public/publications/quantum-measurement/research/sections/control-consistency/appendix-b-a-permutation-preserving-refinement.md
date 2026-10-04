# Appendix B: A permutation-preserving refinement

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
