# Section 7: Preparation transport and operational consequences

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-7"></a>

## 7 Preparation transport and operational consequences

<a id="sec:operational"></a>



<a id="section-7-1"></a>

### 7.1 Reversibly reachable preparations





**Proposition 7.1 (Transport of the invariant law).**

<a id="prop:orbit"></a> Suppose an admitted finite history $P$ takes a real preparation $(H_0,\psi_0)$ to a real preparation $(H_1,\psi_1)$ modulo phase, has a global guided diffeomorphism $C$, and has a physical inverse on the designated trajectory. The conjugated return library $C{\mathcal H}_{\psi_0}C^{-1}$ at $\psi_1$ has the unique invariant Borel probability $|\psi_1|^2\,dq$. 





**Proof.**

Implement each conjugate by the inverse preparation history, the return at $\psi_0$, and the forward history. Every stage restores the appropriate endpoint Hamiltonian. A probability $\mu_1$ is invariant under these maps exactly when $(C^{-1})_*\mu_1$ is invariant under ${\mathcal H}_{\psi_0}$. Apply [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main) and then [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac). 

□



The proposition describes an actual orbit condition. For example, every centered real positive Gaussian on this engineered device can be reached with quadratic controls and restored holding Hamiltonian. Exact symplectic reachability proved after [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian) realizes a dilation taking $\psi_0$ to the desired Gaussian, and Gaussian guidance is global. The time-reversed scalar history gives its physical inverse.

There are also explicit non-Gaussian examples. In the plane interpolate between $U_0=\tfrac12s^TPs$ and $U_1=\tfrac12s^TPs+u(s)$ with $u\in{C_b^\infty}$ and $\nabla^2U_1>0$ uniformly. Their convex interpolation stays uniformly convex. Its logarithmic density derivative is $h=-u+\int u\rho$, which satisfies the centered bounds of [lemma 3.1](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:poisson). Slowing the interpolation with a flat endpoint profile and using [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential) gives a real endpoint with holding potential $\Delta\sqrt{\rho_1}/(2\sqrt{\rho_1})+E_s$. The active state is unchanged, the guided map is global, and time reversal implements the inverse. No extension to arbitrary nodal states or to unmodeled apparatus variables follows from this proposition.



<a id="section-7-2"></a>

### 7.2 Linear readouts using the fixed network



For a statistical interpretation it matters which readouts are implemented with the available interactions. The following statement uses the same quadratic controls, not a new impulsive many-body actuator.



**Proposition 7.2 (Exact linear configuration transports).**

<a id="prop:readout"></a> Based at $\psi_0$, every $C\in GL^+(d,{\mathbb R})$ is the actual configuration map of a finite quadratic protocol with fixed pair interactions and the holding Hamiltonian restored at its endpoints. The final wavefunction is a real Gaussian modulo phase, though generally not $\psi_0$. 





**Proof.**

Exact symplectic reachability implements ${\operatorname{diag}}(C,C^{-T})$. Its quantum action sends the real Gaussian precision to $A_T=C^{-T}A_0C^{-1}$. Let $L_*$ be this protocol's actual guided linear map. By [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance), $L_*^TA_TL_*=A_0$ and $\det L_*>0$. Consequently $R=C^{-1}L_*\in SO(A_0)$. Prepend a Gaussian return with actual map $R^{-1}$, available by [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian). This leaves the subsequent wavefunction history unchanged and makes its configuration map $L_*R^{-1}=C$. 

□



For any nonzero linear form $\ell\cdot q$, extend $\ell$ to a positive-determinant matrix with that form as a chosen row. Such an extension exists because $d\geq2$; change the sign of another row if necessary. The proposition followed by an *ideal final position readout* measures precisely $\ell\cdot q$. The detector is an explicit idealization in this operational statement. The theorem about invariant measures does not require this detector assumption.



**Corollary 7.3 (No-hysteresis characterization).**

<a id="cor:nohysteresis"></a> Let $\mu$ be the actual law assigned to the reference preparation. Assume the ideal final-coordinate readout just described. The following statements are equivalent: 

1. (i) For every implemented return $F\in{\mathcal H}_{\psi_0}$ and every such calibrated linear readout, inserting $F$ leaves the output probability distribution unchanged.

2. (ii) $F_*\mu=\mu$ for every $F\in{\mathcal H}_{\psi_0}$.

3. (iii) $\mu=\nu_0$.

 





**Proof.**

The implication (ii)$\Rightarrow$(i) is pushforward functoriality. For (i)$\Rightarrow$(ii), equality of all linear-projection laws gives equality of their characteristic functions at every $k\in{\mathbb R}^d$, hence equality of the two Borel probabilities. The equivalence with (iii) is [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main). 

□



This is a universal statistical statement about the specified return and readout library. It is not inferred from observing a finite list of null memory tests. Nor is (i) imposed by the Schrödinger equation: it is precisely the preparation-invariance premise in operational form.

There is a finite-gain variant that introduces no equilibrium assumption for a pointer coordinate. Choose two modeled coordinates $X,Z$ and the shear $Z'=Z+GX$, with the others unchanged. It lies in $GL^+(d)$ and is exactly implemented by [proposition 7.2](/quantum-measurement/research/preparation-returns/preparation-transport-and-operational-consequences#prop:readout). For an arbitrary, possibly correlated initial law satisfying $\mathbb E Z^2\leq L$, 

$$

 \mathbb E|Z'/G-X|^2\leq L/G^2 .

$$

 This is a calibration-error bound, not a proof about an additional detector's microscopic variables. Taking $X=y$ and an active coordinate as $Z$, the nonlinear witness leaves $Z$ fixed and [(6.4)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witness) gives a subsequent pointer mean shift $G\epsilon^2C_{16}+O(G\epsilon^3)$.

If a physical measurement interaction and its recorded regions are included in the modeled configuration, an equilibrium preparation gives their probabilities by the ordinary pushforward of $|\psi|^2$. For exactly disjoint record branches $\Psi=\sum_\alpha\Psi_\alpha$ supported in their respective record regions, these probabilities are $\|\Psi_\alpha\|_2^2$. This is the established Bohmian account of record statistics [[4](/quantum-measurement/research/preparation-returns/bibliography#bib-DGZ2004)]. Extra apparatus coordinates require their own joint preparation hypothesis; they are not supplied by uniqueness for the network studied here.
