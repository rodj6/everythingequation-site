# Section 17: The fixed radial preparation operator

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

<a id="section-17"></a>

## 17 The fixed radial preparation operator

<a id="sec:radial_definition"></a> We now use physical units. Put $\ell_0=10^{-4}\,\mathrm m$, $T_0=0.03\,\mathrm s$, $m=2^{52}\hbar T_0/\ell_0^2$, $M=10\,\mathrm{kg}$ and $v=1\,\mathrm{m/s}$. The relative radial Hamiltonian has Dirichlet boundary at zero. The two ordinary Cartesian bodies each have mass $2m$. Their supplied normalized free centre Gaussian and constant angular factor give an exact $s$-wave reduction; the centre and constant angular factor separate from the active dynamics.

All smoothing choices are fixed. Let 

$$

 \kappa_\epsilon(x)=Z_\epsilon^{-1}
 e^{-1/(1-(x/\epsilon)^2)}{\mathbf1}_{|x|<\epsilon},\qquad
 \Theta(x)=\begin{cases}1&x\le0,\\
 [1+e^{-1/x+1/(1-x)}]^{-1}&0<x<1,\\0&x\ge1.
 \end{cases}

$$

 Here $Z_\epsilon$ normalizes the mollifier. Let $B_9$ be the clamped polynomial already defined, and let $b$ be the convolution of $1+99B_9(s/0.1\,\mathrm s)$ with $\kappa_{10^{-5}\,\mathrm s}$. Its constant extensions are one and one hundred. Set $a=b'/b$; derivatives of these preparation functions are in clock time $s=S/v$. The distinct pointer displacement introduced below will always carry its own argument and derivative convention.

Take $L_i=10^{-4}\,\mathrm m$, $L_f=100L_i$. The radial comparison amplitude is 

$$

 \chi(s,r)=\frac{2r}{\pi^{1/4}[L_i b(s)]^{3/2}}
             e^{-r^2/(2L_i^2b(s)^2)}.

$$

 The initial wave uses $\chi$ on the $b=1$ plateau, the specified centre Gaussian, an arbitrary normalized qubit, and a clock envelope centred at $S_c=-0.002\,\mathrm m$ with carrier $Mv$. The envelope is the normalized convolution of $\sqrt{64/(35\sigma)}\cos^4(\pi\xi/(2\sigma))
{\mathbf1}_{|\xi|\le\sigma}$, $\sigma=10^{-3}\,\mathrm m$, with $\kappa_{10^{-10}\,\mathrm m}$. Its actual support halfwidth is $0.0010000001\,\mathrm m$; it is not replaced by an unsmoothed packet.

Define an odd tent by $f_0(r)=r$ on $[0,R]$, $f_0(r)=2R-r$ on $[R,2R]$ and zero beyond, with $R=0.201\,\mathrm m$. Set $f=f_0*\kappa_{0.001\,\mathrm m}$ and $F(r)=2\int_0^r f(u){\,\mathrm d} u$. Thus $f=r,F=r^2$ through $0.2\,\mathrm m$, $f=0$ from $0.403\,\mathrm m$, ${\left\lVert{f}\right\rVert}_\infty\le0.201\,\mathrm m$, ${\left\lVert{f'}\right\rVert}_\infty\le1$ and $F_\infty\le0.080802\,\mathrm m^2$. Put <a id="eq:Vc"></a>


$$
\begin{aligned}\omega_i&=\hbar/(mL_i^2),\quad E_0=3\hbar\omega_i/2,\\
 Q(s,r)&=m\omega_i^2r^2/(2b(s)^4)-E_0/b(s)^2,\\
 Q_c(S,r)&=\Gamma(S)\Theta((r-0.2\,\mathrm m)/(0.001\,\mathrm m))Q(S/v,r),\\
 V_c(S,r)&=-\frac m2a'(S/v)F(r)-\frac m2a(S/v)^2 f(r)^2
       -\frac{m^2a'(S/v)^2F(r)^2}{8Mv^2}.
\end{aligned}
$$

Equation (2, 3, 4, 5).

 The clock cutoff $\Gamma$ is one on $[-0.004,0.105]\,\mathrm m$, zero outside $[-0.005,0.106]\,\mathrm m$, with left factor $1-\Theta((S+0.005\,\mathrm m)/(0.001\,\mathrm m))$ and right factor $\Theta((S-0.105\,\mathrm m)/(0.001\,\mathrm m))$. In particular, the clock-only far-radial part of $V_c$ is retained. It is not silently subtracted as a constant.

In dimensionless radius $x=r/\ell_0$, let $h=1/128$, $K=2^{38}$, $\eta=2^{-17}$ and let $U_\eta$ be the capped quadratic of Part I. The physical measured potentials are 

$$

 W_i^{\rm phys}(r)=\frac\hbar{T_0}\Theta(x-1000)
                         \frac K2 U_\eta(x/h-i/2).

$$

 The outer cutoff ends at $0.1001\,\mathrm m$. Its cap transition width is $5.9604644775390625$ picometres. The finite radial classifier uses the centred representative $(r/\ell_0)\bmod h\in[-h/2,h/2)$. It is zero when the absolute value of that representative is at most $h/4$, one otherwise, and undefined unless $0\le r/\ell_0<1000$. The boundary convention is the frozen one; ordinary nonnegative modulo is not substituted. There are $256000$ internal cuts plus an exterior ray. Define $\gamma(s)=B_9((s-0.104\,\mathrm s)/(0.0001\,\mathrm s))$. The preparation-plus-activation operator is exactly <a id="eq:Hrad"></a>


$$

 H_{\rm rad}=\frac{p_S^2}{2M}+\frac{p_r^2}{2m}+V_c
       +(1-\gamma(S/v))Q_c
       +\gamma(S/v)\sum_i\Pi_iW_i^{\rm phys}.

$$

Equation (6).

 It is this operator, not a subsequently fitted effective wave, that is enlarged by the pointer. Laboratory entrance is $-0.106\,\mathrm s$, handoff is $-0.002\,\mathrm s$, witness is $0.0366\,\mathrm s$, and holding is $[0.0384,0.09]\,\mathrm s$.



<a id="section-17-1"></a>

### 17.1 The full initial-law contract

<a id="sec:radial_law"></a> The new radius is coupled to a periodic-reference initial coordinate by $X=(100r_0/\ell_0)\bmod2$. Retain one complete reference law $\nu_{\rm ref}({\,\mathrm d} X,{\,\mathrm d}\zeta_{\rm ref})$, where $\zeta_{\rm ref}=(Z_{\rm ref},S_{\rm ref},u_{\rm ref},R_{\rm ref},C_{\rm ref})$. The comparison rotor is fixed to the nominal Part I member: $o=d_0=d_1=0$, $g_0=g_1=1$, and reduced mass $2^{52}$ in its reference units. The radial theorem does not inherit the entire independent gain, offset and mass rectangle of Part I. It satisfies the periodic readiness and BV restrictions and, for this radial construction, the additional full reference cap $\nu_{\rm ref}\le32\mu_{\rm ref}$, where $\mu_{\rm ref}$ is the complete original reference entrance wave measure. Its marginal obeys $f_X\le1$. The earlier admitted arbitrary singular passive laws are not all in this narrowed class.

Let $w_{\rm new}({\,\mathrm d}\mathrm{aux}\mid X)$ be the normalized disintegration of the specified new entrance *wave measure*. The winding weights are $\chi_{100}(X+2k)^2/W_{100}(X)$ for positive radius, together with the centre, angular, clock and pointer wave factors. The dimensionless amplitude is $\chi_{100}(y)=2y e^{-y^2/(2\cdot100^2)}/(\pi^{1/4}100^{3/2})$ for $y>0$, and zero otherwise. Here 

$$

 W_{100}(X)=\sum_{k:X+2k>0}\chi_{100}(X+2k)^2
       \ge\frac{67499}{135000}=W_{\min}.

$$

 Choose one normalized input-independent conditional measure 

$$

 0\le g_{\rm new}({\,\mathrm d}\mathrm{aux}\mid X,\zeta_{\rm ref})
             \le2w_{\rm new}({\,\mathrm d}\mathrm{aux}\mid X).

$$

 The complete actual coupling is $\nu_{\rm ref}g_{\rm new}$. Correlations among new auxiliaries and with every retained reference variable are allowed. The new physical clock and pointer are not identified with the reference clock and pointer. Integration gives 

$$

 C_{\rm micro}=2/W_{\min}=270000/67499,\qquad
 C_{\rm joint}=32/W_{\min}=4320000/67499.

$$

 For the joint comparison measure use 

$$

 \mu_{\rm joint}=2W_{100}(X)\,
       \mu_{\rm ref}({\,\mathrm d} X,{\,\mathrm d}\zeta_{\rm ref})
       w_{\rm new}({\,\mathrm d}\mathrm{aux}\mid X).

$$

 The reference wave has uniform $X$ marginal ${\,\mathrm d} X/2$, so this is normalized. The two likelihood bounds then give $\nu_{\rm joint}\le(32/W_{\min})\mu_{\rm joint}$. These are consequences of the complete coupling, not substitutes for it. All original reference neighbourhood and projector-calibration allowances remain charged in the final comparison.

For a concrete nonequilibrium example, take the biased reference law of Part I and reference passives whose combined full likelihood ratio is below $23.04<32$. Choose $g_{\rm new}=2{\mathbf1}_{S>S_c}w_{\rm new}$. Evenness of the entrance clock makes this conditional normalized for each $X$. It is input independent, satisfies the single cap and has actual-wave TV at least $1/2$. Thus the permitted class is genuinely nonequilibrium while remaining strongly restricted.



<a id="section-17-2"></a>

### 17.2 The preparation gauge and why it is legitimate

 After the common Galilean carrier is removed, use the analytical unitary $e^{-i\theta}$ with $\theta=ma(S/v)F(r)/(2\hbar)$. Expanding the kinetic squares and [(5)](/quantum-measurement/research/nonequilibrium-records/the-fixed-radial-preparation-operator#eq:Vc) gives exactly 

$$

 H_g=\frac{p_r^2}{2m}+\frac{p_S^2}{2M}+vp_S
   +\frac12\{af,p_r\}+\frac12\{\delta,p_S\}+Q_c+V_A,
 \quad \delta=\frac{ma'F}{2Mv},\quad V_A=\gamma(W-Q_c).

$$

 The clock drift $\delta$ remains. During preparation write $\tau=t_{\rm lab}+0.106\,\mathrm s$ for elapsed time, so $\tau=0$ at the entrance. The real helper $G_g=\phi(S-S_c-v\tau)\chi(S/v,r)$ has residual 

$$
\begin{aligned}R_{\rm core}&=\frac{\hbar^2}{2M}
 [(\phi\chi)_{SS}+2i\theta_S(\phi\chi)_S+i\theta_{SS}\phi\chi],\\
 R_{\rm tail}&=i\hbar a\phi[(f-r)\chi_r+(f'-1)\chi/2]
                       +(Q-Q_c)\phi\chi.
\end{aligned}
$$

 The tails begin at twenty maximum packet widths and are bounded, never deleted. Since the helper has no remote activation support during preparation, activation acts on the error and is controlled by moving clock collars. Those collars are proof multipliers, not restrictions of the physical initial law.

For error momenta $P_r,P_S$ and a right-collar amplitude $n$, the mass-weighted norm $Z_E=(P_r^2/m+P_S^2/M)^{1/2}$ satisfies a positive system $Z_E'\le\gamma_0Z_E+e_0+c_0dt+L_A n$, $n'\le g_0+b_0Z_E$. The fixed weight $10^{-6}\sqrt{\mathrm J}$ makes both row growth coefficients below $141\,\mathrm s^{-1}$. Gronwall and Gaussian residual integrals then bound the exact gauged error. The stronger anisotropic and localized Hessian estimates used by the writer are derived in Appendix [B](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:main). A scalar norm alone is never used to infer those derivatives.
