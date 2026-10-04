# Section 10: Why reliable records do not uniquely select guidance

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\E = \mathbb E
\Prb = \mathbb P
\TV = d_{\rm TV}
\id = \operatorname{id}
\dd = \,\mathrm d
\cH = \mathcal H
\cS = \mathcal S
\norm = \left\|#1\right\|
\pos = [#1]_+
\Ncdf = \mathsf F
\Ntail = \overline{\mathsf F}
-->

<a id="section-10"></a>

## 10 Why reliable records do not uniquely select guidance

 <a id="sec:rivals"></a> The following example retains the equilibrium density and even its local net probability current while changing the microscopic path law. It identifies the logical role of the guidance assumption. It is not an alternative implementation used in the main theorem.



<a id="section-10-1"></a>

### 10.1 Same local net current, mutually singular paths

 For a smooth positive density of the same complete wave, define an equivariant diffusion by <a id="eq:diffusion"></a>


$$

 dQ_t=\left(\frac j\rho+D\nabla\log\rho\right)(Q_t,t)dt
                                   +\sqrt{2D}\,dW_t,
 \qquad D>0.

$$

Equation (44).

 Its Brownian innovations are an explicit additional stochastic premise. The Fokker–Planck current is $\rho b-D\nabla\rho=j$, so it matches even the local current, not just its divergence. We only assert its global existence where checked below; this is an equivariant diffusion rival, not a claim that every axiom of Nelson's stochastic mechanics has been derived.

For a stationary harmonic ground-state pointer centred at zero, the adopted theory has $\dot Q=0$. The rival is the globally well-posed Ornstein–Uhlenbeck process 

$$

 dQ=-D Q\,dt/\sigma^2+\sqrt{2D}\,dW.

$$

 It has the identical invariant Gaussian density but moves at positive times. More strongly, on any $T>0$ its path law and the adopted guidance path law have TV distance one: Brownian diffusion paths have quadratic variation $2DT$, whereas the absolutely continuous guidance paths have zero. These are disjoint measurable path events. The comparison does not require an experimentally admitted passive quadratic-variation meter.



**Proposition 10.1 (Reliable macroscopic records do not remove the rival).**

<a id="prop:rivalarchive"></a> Use the same semibounded Hamiltonian 

$$

 H=\frac{p^2}{2M}+\frac{M\omega^2}{2}(x-a\sigma_z)^2

$$

 and the equal superposition of its two spin-labelled ground packets. Its stationary density is 

$$

 \rho(x)=\tfrac12g_\sigma(x-a)+\tfrac12g_\sigma(x+a),\qquad j=0.

$$

 The adopted configuration is fixed. The diffusion [(44)](/quantum-measurement/research/equilibrium-records/why-reliable-records-do-not-uniquely-select-guidance#eq:diffusion) has smooth globally Lipschitz drift 

$$

 b_D(x)=\frac D{\sigma^2}\left[-x+a\tanh\left(\frac{ax}{\sigma^2}\right)\right]

$$

 and invariant law $\rho$. For $a\ge2\sigma$, the probability it changes the sign record during $[0,T]$ is no greater than <a id="eq:rivalbound"></a>


$$

 \min\left\{1,\frac{a+4DT/a}{\sqrt{2\pi}\sigma}
                         e^{-a^2/(8\sigma^2)}\right\}.

$$

Equation (45).

 

 

**Proof.**

Set $b=a/2$ and $f(x)=(1-|x|/b)_+$. On $(0,b)$, $\rho'\ge0$: the sign is that of $a\tanh(ax/\sigma^2)-x$, a concave function vanishing at zero and positive at $b$ for $a\ge2\sigma$. Thus $f'b_D\le0$ on both sides of the central interval. Stop at the first hit $\tau$ of zero. The Itô–Tanaka formula gives only nonpositive interior drift and a nonpositive local-time contribution at zero; its positive contributions are $(L_{T\wedge\tau}^{-b}+L_{T\wedge\tau}^{b})/(2b)$. Since $f(Q_{T\wedge\tau})\ge1_{\{\tau\le T\}}$ and stationarity gives ${\mathbb E} L_T^x=2DT\rho(x)$, 

$$

 {\mathbb P}(\tau\le T)\le{\mathbb E} f(Q_0)+\frac{DT}{b}[\rho(-b)+\rho(b)]
 \le(2b+2DT/b)\rho(b).

$$

 Finally $\rho(b)\le e^{-a^2/(8\sigma^2)}/(\sqrt{2\pi}\sigma)$. Sign change requires a hit of zero, so the same bound applies. Existence and invariance follow directly from the displayed Lipschitz drift and the stationary Fokker–Planck equation. 

□

 Thus arbitrarily reliable finite-horizon records can coexist with mutually singular microscopic paths. The velocity postulate selects the adopted law *within the new theory*; record success does not independently force that postulate. Deterministic divergence-free changes provide further rivals: in an isotropic real two-dimensional Gaussian, $v_\Omega=\Omega(-y,x)$ preserves the same density while changing a sign record with probability $\Omega T/\pi$ for $0\le\Omega T\le\pi$. This particular rotor is a counterexample to inference from continuity, not a proposed fully symmetry-constrained replacement. More general quantum-equivalent deterministic alternatives are established in primary work [[12](/quantum-measurement/research/equilibrium-records/bibliography#bib-Deotto)].
