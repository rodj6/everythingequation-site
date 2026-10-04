# Section 6: Internal degrees of freedom

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
