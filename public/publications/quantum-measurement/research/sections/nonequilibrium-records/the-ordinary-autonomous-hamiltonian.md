# Section 4: The ordinary autonomous Hamiltonian

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

<a id="section-4"></a>

## 4 The ordinary autonomous Hamiltonian

 <a id="pm:eq:H"></a>


$$

\boxed{\begin{aligned}
 H_{\mathrm{per}}={}&\frac{p_x^2}{2m_x}+\frac{p_R^2}{2m_R}
 +\frac{p_Z^2}{2\mu}+\frac{p_S^2}{2M}
 +H_s(u)+\frac{p_C^2}{2M_C}+50000\\
 &+\sum_{i=0}^1P_i[V_i(x-R)+W_i(S/v,Z-z_0)],\\
 H_s={}&\frac{p_u^2}{2M_s}+\frac{\kappa_s}{2}\sum_j(u_{j+1}-u_j)^2.
\end{aligned}}

$$

Equation (1).

 No kinetic coefficient is switched off. No external time occurs in this expression. Every microscopic kinetic term shown is positive and quadratic; the relative reduced mass is a derived constant.



**Proposition 4.1 (Operator realization).**

 The finite operator [(1)](/quantum-measurement/research/nonequilibrium-records/the-ordinary-autonomous-hamiltonian#pm:eq:H) has a self-adjoint semibounded form realization, with ordinary configuration currents $j_a=m_a^{-1}{\operatorname{Im}}(\Psi^\dagger\partial_a\Psi)$. The shift makes it nonnegative. The added reference body is finite, not an infinitely massive frame. 

 

**Proof.**

Use the free-rotor/clock and positive oscillator form. The angular potentials are bounded. Complete the pointer square: 

$$

 W_1=\frac{[y-b-\mu^2b'']^2}{2\mu}
 -\frac{\mu bb''}{2}-\frac{\mu^3(b'')^2}{2}.

$$

 The stated rectangle gives $|b|<25$, $|b''|<169000$, and a negative part below $43000$. The affine terms are infinitesimally oscillator-form bounded. The form construction and ordinary Green identity give the assertion. Finite-horizon conservative currents are assumed on the usual differentiated domains; the initial active-law domination transfers their wave-null exceptions. The passive-coordinate issue is handled exactly in the comparison companion, not by an arbitrary-clock almost-sure argument. 

□
