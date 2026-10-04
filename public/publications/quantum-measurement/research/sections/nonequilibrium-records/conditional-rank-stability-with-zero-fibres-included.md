# Section 24: Conditional-rank stability with zero fibres included

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

<a id="section-24"></a>

## 24 Conditional-rank stability with zero fibres included

<a id="sec:rankproof"></a> This section supplies the nonlinear step behind the radial proof. It is useful precisely because the actual clock/pointer marginal need not have a positive lower bound. Let $q=\psi(S,\cdot)$ be a radial spinor slice, $u=\psi_S$, $z=\psi_{SS}$, $a={\left\lVert{q}\right\rVert}$, $\eta=q/a$, and let $P_r$ multiply by ${\mathbf1}_{[0,r]}$. Set $K=\langle\eta,P_r\eta\rangle$ and $Z_\eta=(P_r-K)\eta$. The constant clock carrier is removed from all derivatives, but its actual drift is retained in continuity.



**Lemma 24.1 (Exact weighted rank current).**

<a id="lem:rankcurrent"></a> On nonzero fibres, with $\kappa=\hbar/M$, <a id="eq:rankF"></a>


$$

 \rho\frac{{\,\mathrm d} K}{{\,\mathrm d} t}=\mathcal F[\psi]
 =\kappa\left\{2\Im(\eta(r)^\dagger u(r))
          \Re\langle Z_\eta,u\rangle
       -a|\eta(r)|^2\Im\langle Z_\eta,z\rangle\right\}.

$$

Equation (12).

 For two live conditioning coordinates $S,Z$, the right side is the sum of the corresponding two functionals, with coefficients $\hbar/M$ and $1/(\mu_ZT_0)$ respectively. 

 

**Proof.**

Write $w=\int\rho{\,\mathrm d} r$, $A_r=\int_0^r\rho{\,\mathrm d} y$, and $K=A_r/w$. Let $\delta B$ and $\delta j$ be the cumulative and full clock-current integrals after subtracting the constant carrier. Continuity and zero origin flux give 

$$

 \frac{{\,\mathrm d} K}{{\,\mathrm d} t}
  =\frac{\delta J}{\rho}K_S
       -\frac{\partial_S\delta B-K\partial_S\delta j}{w}.

$$

 The radial current has cancelled pointwise against $K_r\dot r$. Now $K_S=2\Re\langle q,(P_r-K)u\rangle/a^2$ and $\partial_S\delta B-K\partial_S\delta j
=\kappa\Im\langle q,(P_r-K)z\rangle$; the $u^\dagger u$ term is real. Substitution proves [(12)](/quantum-measurement/research/nonequilibrium-records/conditional-rank-stability-with-zero-fibres-included#eq:rankF). Applying continuity with both transverse currents gives the two summands, not an additional mixed-derivative term. Each local product sums the original spinor components. No component has been sampled as an actual sector. 

□





**Lemma 24.2 (Stability without an exact-marginal denominator).**

<a id="lem:rankstable"></a> For normalized $\psi,G$, write $E=\psi-G$, and suppose the quantities 

$$

 D={\left\lVert{E}\right\rVert},\quad e_1={\left\lVert{E_S}\right\rVert},\quad e_2={\left\lVert{E_{SS}}\right\rVert},\quad
 g_j={\left\lVert{\partial_S^jG}\right\rVert},\quad
 Q_G^2=\int\frac{{\left\lVert{G_S(S,\cdot)}\right\rVert}^4}{{\left\lVert{G(S,\cdot)}\right\rVert}^2}{\,\mathrm d} S

$$

 are finite. The ratio is zero where $G$ and its required derivatives vanish. Then <a id="eq:rankstable"></a>


$$

 {\left\lVert{\mathcal F[\psi]-\mathcal F[G]}\right\rVert}_1
 \le\frac\hbar M
 (4g_1e_1+2e_1^2+14DQ_G+9Dg_2+e_2).

$$

Equation (13).

 Here $\mathcal F[G]$ is algebraic evaluation, including whatever residual the comparison has under the actual equation. 

 

**Proof.**

At a fixed slice put $g=G(S,\cdot)$, $b={\left\lVert{g}\right\rVert}$, $\xi=g/b$, $U=G_S$, $V=G_{SS}$, and $d={\left\lVert{q-g}\right\rVert}$, $d_1={\left\lVert{u-U}\right\rVert}$, $d_2={\left\lVert{z-V}\right\rVert}$. The elementary estimates 

$$

 {\left\lVert{\eta-\xi}\right\rVert}\le2d/b,\quad {\left\lVert{Z_\eta}\right\rVert}\le1/2,
 \quad{\left\lVert{Z_\eta-Z_\xi}\right\rVert}\le3{\left\lVert{\eta-\xi}\right\rVert},
 \quad{\left\lVert{|\eta|^2-|\xi|^2}\right\rVert}_1\le2{\left\lVert{\eta-\xi}\right\rVert}

$$

 follow by adding and subtracting $q/b$, by projection variance, and by $|K_\eta-K_\xi|\le2{\left\lVert{\eta-\xi}\right\rVert}$. Split the first term of [(12)](/quantum-measurement/research/nonequilibrium-records/conditional-rank-stability-with-zero-fibres-included#eq:rankF) first in $u-U$ and then in normalized directions. Its derivative part is at most $4{\left\lVert{U}\right\rVert} d_1+2d_1^2$; its direction part is at most $7{\left\lVert{\eta-\xi}\right\rVert}{\left\lVert{U}\right\rVert}^2\le14d{\left\lVert{U}\right\rVert}^2/b$. For the second term, the $z-V$ part is at most $ad_2$. Splitting the remaining amplitude, density and projection yields $(d/2+4b{\left\lVert{\eta-\xi}\right\rVert}){\left\lVert{V}\right\rVert}\le9d{\left\lVert{V}\right\rVert}$. Integrate these inequalities and use Cauchy–Schwarz and $\int a^2{\,\mathrm d} S=1$. If $a=0$, direct bounding of $\mathcal F[G]$ works with $d=b$; if $b=0$ and its derivatives vanish, the bound $2d_1^2+ad_2$ suffices. Thus zero fibres are included, not discarded. 

□



For $G=\phi(S-S_c-vt)u(S,r)$ with real $\phi$ and normalized $u$, 

$$

 Q_G\le{\left\lVert{\phi'^2/\phi}\right\rVert}_2+\sup_S{\left\lVert{u_S}\right\rVert}^2,
 \qquad
 {\left\lVert{\phi_0'^2/\phi_0}\right\rVert}_2
  =\frac{4\pi^2}{\sigma^2}\sqrt{\frac3{35}}.

$$

 The last equality is a direct trigonometric integral for the unsmoothed cosine packet. Positive convolution and weighted Cauchy–Schwarz give $\phi'^2/\phi\le Z^{-1}\kappa*(\phi_0'^2/\phi_0)$; Young's inequality then adds only the normalization multiplier at most $1.000001$. No actual conditional law is asserted uniform in this argument.



**Lemma 24.3 (Deterministic-time CDF interface).**

<a id="lem:cdf"></a> For every measurable radial cut $b(S)$, 

$$

 \int w(S)|K_\psi(S,b(S))-K_G(S,b(S))|{\,\mathrm d} S\le2{\left\lVert{\psi-G}\right\rVert}.

$$

 Under the already transported actual-law cap $C$, the corresponding binary-test mismatch is at most $2C{\left\lVert{\psi-G}\right\rVert}$ per cut. 

 

**Proof.**

Multiply the CDF difference by $w=\int|\psi|^2$. The exact identity is 

$$

 w(K_\psi-K_G)=\int({\mathbf1}_{r\le b}-K_G)(|\psi|^2-|G|^2){\,\mathrm d} r.

$$

 The coefficient has modulus at most one and the density difference has $L^1$ norm at most $2{\left\lVert{\psi-G}\right\rVert}$. Uniformity of the exact rank under its own conditional *wave* measure identifies this integral with the test mismatch. Domination then supplies the actual-law bound. Zero comparison fibres are charged by their exact mass. The same proof works with live conditioning pair $(S,Z)$. It is a fixed-time result; it is not substituted at a random clock hitting time. 

□
