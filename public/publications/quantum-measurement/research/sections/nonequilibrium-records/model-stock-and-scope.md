# Section 18: Model, stock, and scope

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

<a id="section-18"></a>

## 18 Model, stock, and scope



The active configuration is $(S,r,Z)\in\mathbb R\times\mathbb R_+\times
\mathbb R$, with a two-component spinor. The relative radius $r$ is the exact $s$-wave reduction of the frozen two-body scalar model. The free centre coordinate and constant spherical harmonic factor from the active Hamiltonian. The clock $S$ and pointer $Z$ are effective scalar coordinates; no three-dimensional lifting error for those two coordinates is asserted.

Write $\Pi_0,\Pi_1$ for the conserved qubit projectors. Retain the exact radial preparation baseline bounded-phase preparation, smooth activation, finite radial potentials, and all clock self terms. Denote that operator by $H_{\mathrm{rad}}$. Its physical clock mass is $M=10\,\mathrm{kg}$, its carrier speed is $v=1\,\mathrm{m/s}$, and its reduced radial mass is 

$$

 m_r=2^{52}\hbar T_0/\ell_0^2,\qquad
 T_0=0.03\,\mathrm{s},\quad \ell_0=10^{-4}\,\mathrm m.

$$

 The scalar preparation operator is defined in Section [17](/quantum-measurement/research/nonequilibrium-records/the-fixed-radial-preparation-operator#sec:radial_definition). Its fixed cutoffs and admitted laws are part of the theorem. The appendices derive the specialized coefficient and current estimates used below.

The enlarged autonomous Hamiltonian is <a id="rad:eq:H"></a>


$$

 H=H_{\mathrm{rad}}+\frac{\hbar}{T_0}
 \left[\frac{-\partial_Z^2+Z^2-1}{2\mu_Z}
              +\Pi_1\{-F(s)Z+C_b(s)\}\right],

$$

Equation (7).

 where 

$$
\begin{gathered}\mu_Z=0.01,\quad s=\frac{S-S_{\rm on}}{vT_0},\quad
 S_{\rm on}=0.14145\,\mathrm m,\quad w=0.003,\\
 b(s)=24 B_9(s/w),\qquad
 F=b/\mu_Z+\mu_Z b'',\qquad
 C_b=b^2/(2\mu_Z)+\mu_Z b b''/2.
\end{gathered}
$$

 Here $B_9(x)=126x^5-420x^6+540x^7-315x^8+70x^9$ on $[0,1]$, extended by $0$ and $1$. Primes denote $s$ derivatives. Thus the pulse width is $90\,\mu\mathrm s$ in the characteristic clock, and its last spatial point is $0.14154\,\mathrm m$. The physical pointer mass is $10^{-19}\,\mathrm{kg}$; its length unit is $\sqrt{\hbar\mu_Z T_0/10^{-19}\mathrm{kg}}\simeq0.562469\,\mathrm{nm}$. Every displayed compensation term remains in [(7)](/quantum-measurement/research/nonequilibrium-records/model-stock-and-scope#rad:eq:H).

At laboratory time $t_0=-0.106\,\mathrm s$, the state is precisely the original full small-Gaussian radial and smooth compact clock stock, with its Galilean carrier and arbitrary normalized qubit, tensored with 

$$

 g_0(Z)=\pi^{-1/4}\exp(-Z^2/2).

$$

 There is no wave truncation or later preparation reset. The original radial width is $10^{-4}\,\mathrm m$; the clock is the positive $10^{-10}\,\mathrm m$ mollification of its normalized $\cos^4$ packet of half-width $10^{-3}\,\mathrm m$. Its initial centre is $S=-0.002\,\mathrm m$. The analytical handoff is $t_h=-0.002\,\mathrm s$, with clock centre $0.102\,\mathrm m$.

The narrowed nominal reference-law class of Section [17.1](/quantum-measurement/research/nonequilibrium-records/the-fixed-radial-preparation-operator#sec:radial_law) is retained exactly. The pointer is included in the same normalized, input-independent joint auxiliary conditional rule $g_{\rm new}\leq2w_{\rm new}$. This is one rule for the whole auxiliary configuration, allowing the declared correlations; it is not a separate cap or independent Born assignment for each added coordinate. Its disintegration gives <a id="rad:eq:cap"></a>


$$

 \nu_{\rm micro,0}\leq C|\Psi_0|^2{\,\mathrm d} q,
 \qquad C=\frac{270000}{67499}.

$$

Equation (8).

 The retained periodic reference marginal, its allowed neighbourhood, and its target-calibration allowance remain part of the hypotheses. The cap alone is not substituted for that complete reference-coupling contract.
