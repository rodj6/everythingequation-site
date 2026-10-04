# Section 6: Exact relative-coordinate reduction with finite recoil

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-6"></a>

## 6 Exact relative-coordinate reduction with finite recoil

 On the subspace $\Psi(x,R,\ldots)=2^{-1/2}\Phi(x-R,\ldots)$, 

$$

 \left(\frac{p_x^2}{2m_x}+\frac{p_R^2}{2m_R}\right)\Psi
 =-\frac1{2m}\partial_X^2\Psi,
 \qquad\frac1m=\frac1{m_x}+\frac1{m_R}.

$$

 Both the Hamiltonian and the product of flat initial rotor waves preserve this subspace. No physical mixed kinetic term has been introduced: these are the restrictions of two constant ordinary kinetic operators.



**Theorem 6.1 (Finite recoil and spectator independence).**

<a id="pa:thm:recoil"></a> The complete wave has the exact form 

$$

 \Psi_t=\frac{\zeta(u)e^{-i(E_s+50000)t}\chi_{C,t}(C)}{\sqrt2}
 \sum_i(P_i\psi)r_i(X,t)\Xi_i(S,Z,t).

$$

 Its active relative velocity, pointer velocity, and writer-clock velocity are independent of the instantaneous $R,u,C$. Moreover 

$$

 \dot x=\frac m{m_x}v_X,\qquad
 \dot R=-\frac m{m_R}v_X,\qquad \dot x-\dot R=v_X.

$$

 The old differential source positions are stationary under their nodeless ground wave, with their Hamiltonian and phase retained. Their arbitrary normalized actual conditional law is not used as an equilibrium reference. 

 

**Proof.**

The differential identity gives an invariant wave subspace. Every $u$ and $C$ term commutes with the active Hamiltonian. Differentiating the exact factorization gives the displayed ordinary currents; division cancels spectator densities wherever defined. The source wave is positive and has a coordinate-independent phase. The free $C$ tube proved below is positive at every allowed actual clock path. Active exceptions are wave-null and, by $f_0\le16q_0$, actual-null. These exceptions depend only on active initial data, so singular conditional $R,C$ laws cannot select them at otherwise good active positions. 

□



In particular all active event probabilities equal those calculated from $f_0(X,Z,S)$ alone, after integrating the normalized $g,\kappa_R,\kappa_C$. This is stronger than assigning a Gaussian actual law, but weaker physically than generating the field from $u$: the latter coupling is absent.
