# Appendix A: Nonzero approximation and nodes

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
