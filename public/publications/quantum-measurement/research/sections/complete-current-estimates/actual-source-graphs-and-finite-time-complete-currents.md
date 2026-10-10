# Section 11: Actual source graphs and finite-time complete currents

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-11"></a>

## 11 Actual source graphs and finite-time complete currents

 <a id="p4h:sec:currents"></a>

Write $m_0=\|f_R\|^2$ and $m_1=\|(h+1)^{1/2}f_R\|^2$. The form tail gives $m_0\leq1$ and, at $R=40$, $m_1<(1+4\cdot10^{-14})^2
<1+10^{-12}$. The source ladder operators give the ordered bounds <a id="p4h:eq:ladder"></a>


$$

 \|YH_s^{-1}\|\leq\frac{4\sqrt2}{3\Omega},\qquad
 \|H_s^{1/2}YH_s^{-1}\|
       \leq\frac{\sqrt3+1/\sqrt2}{\sqrt\Omega}.

$$

Equation (11.1).

 Indeed $H_s=\Omega(N+1/2)$ and $Y=(a+a^\dagger)/\sqrt2$. The downward and upward coefficients of $aH_s^{-1}$ and $a^\dagger H_s^{-1}$ are bounded by $2/(3\Omega)$ and $2/\Omega$, respectively. For the weighted versions, their squared ratios are 

$$

 \frac{n(n-1/2)}{\Omega(n+1/2)^2}\leq\frac1\Omega,\qquad
 \frac{(n+1)(n+3/2)}{\Omega(n+1/2)^2}\leq\frac6\Omega.

$$

 The first inequality is direct and the second ratio decreases from its value $6$ at $n=0$. Their sum in $Y$ proves [(11.1)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:ladder). These are full-source operator bounds, not a bound on a selected actual occupation.

Consequently <a id="p4h:eq:Comega"></a>


$$

 \|K_0^{1/2}(f_R\otimes Y)H_s^{-1}\|^2
 \leq C_\Omega^2:=
 \frac{32m_1}{9\Omega^2}
 +\frac{(\sqrt3+1/\sqrt2)^2m_0}{\Omega}.

$$

Equation (11.2).

 The two terms follow by splitting $K_0=(h+1)+H_s$ on the forcing vector, with the ordering in [(11.1)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:ladder) preserved.



**Proposition 11.1 (All-frequency response with a physical source graph).**

 <a id="p4h:prop:global"></a> For $\theta<1$ and every $E\in\mathbb R$, $\eta>0$, <a id="p4h:eq:globalinverse"></a>


$$

 \|T_{\rm ph}^{1/2}(A-E-i\eta)^{-1}LH_s^{-1}\|^2
 \leq \frac{22}{7}\frac{1+\theta}{1-\theta}
                         \frac{g^2C_\Omega^2}{\eta^2}.

$$

Equation (11.3).

 For the actual input $p$ of [(10.6)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:pfeedback), with $q(0)=0$, let $q_T$ agree with its forced $Q$ equation on $[0,T]$ and then evolve homogeneously with $A$. If $H_sp\in L^2(0,T)$, then <a id="p4h:eq:damped"></a>


$$

 \int_0^\infty e^{-2\eta t}\|T_{\rm ph}^{1/2}q_T(t)\|^2dt
 \leq \frac{22}{7}\frac{1+\theta}{1-\theta}
       \frac{g^2C_\Omega^2}{\eta^2}
                \int_0^T e^{-2\eta s}\|H_sp(s)\|^2ds .

$$

Equation (11.4).

 Also, whenever $H_sp\in L^1(0,t)$, <a id="p4h:eq:stationary"></a>


$$

 Q(t):=\|T_{\rm ph}^{1/2}q(t)\|
 \leq |g|\sqrt{\frac{22}{7}\frac{1+\theta}{1-\theta}}\,
                         C_\Omega\int_0^t\|H_sp(s)\|\,ds .

$$

Equation (11.5).

 

 

**Proof.**

By [(10.8)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:K0bounds) and [(10.10)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:Kcomparison), $T_{\rm ph}\leq22K/[7(1-\theta)]$. The form $K=A+1$ commutes with the actual $A$ resolvent, whose unweighted norm is at most $1/\eta$. Its input satisfies $\|K^{1/2}LH_s^{-1}\|
\leq\sqrt{1+\theta}|g|C_\Omega$. Their ordered product proves [(11.3)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:globalinverse). The finite lower bound on $K$ is positive; rescaling by that bound gives the equivalent unit-coercive form convention if needed. No commutation of $T_{\rm ph}$ with $A$ is used.

Extend $1_{[0,T]}H_sp$ by zero. The causal exponentially damped Fourier transform of the Duhamel equation is the resolvent multiplier applied to this complete source vector. Plancherel with [(11.3)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:globalinverse) proves [(11.4)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:damped), as in Theorem [6.1](/quantum-measurement/research/complete-current-estimates/damped-temporal-response-with-a-noncommuting-physical-form#p4f:thm:damped). There is no derivative of the time cutoff in this argument and no frequency-band assumption. Finally Duhamel in the stationary positive $K$ form and $\|K^{1/2}e^{-itA}v\|=\|K^{1/2}v\|$ give [(11.5)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:stationary). 

□



The $1/\eta^2$ cost includes all actual bound poles and continuum. It cannot be discarded because the fixed-reference continuum-only calculation happened to be $\eta$ independent. The source weights in [(10.12)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:lowgeneral) and [(11.3)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:globalinverse) are also different.



**Proposition 11.2 (Source graphs for the actual feedback evolution).**

 <a id="p4h:prop:actualsource"></a> Let the normalized entrance be $\Psi(0)=\phi\otimes|1\rangle\otimes\zeta$, with any normalized passive finite internal vector $\zeta$. Under the actual static parent [(10.1)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parent), put $a=|g|d_0$. Then <a id="p4h:eq:Hone"></a>
<a id="p4h:eq:Htwo"></a>
<a id="p4h:eq:enorm"></a>


$$
\begin{aligned}H_1(t):=\|H_s^{1/2}\Psi(t)\|
 &\leq\sqrt{3\Omega/2}+a\sqrt{\Omega/2}\,t,
 \\
 \|H_s\Psi(t)\|
 &\leq\Omega\{3/2+\sqrt3\,at+a^2t^2/2\},
 \\
 e(t):=\|q(t)\|
 &\leq |g|\{\sqrt3\,t+at^2/2\}.
 
\end{aligned}
$$

Equation (11.6, 11.7, 11.8).

 Since $P$ commutes with $H_s$, the first two bounds also control the corresponding graphs of the actual $p$. 

 

**Proof.**

The commutator is $[H_s,H]=-ig\Omega d_Rp_Y$, with $p_Y=-i\partial_Y$. The expectation identity and $\|p_Y\Psi\|\leq\sqrt{2/\Omega}\|H_s^{1/2}\Psi\|$ give 

$$

 \left|\frac d{dt}H_1^2\right|
      \leq a\sqrt{2\Omega}\,H_1 .

$$

 Regularizing the square root if necessary and integrating gives [(11.6)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:Hone). The norm derivative for $H_s\Psi$ obeys 

$$

 \frac d{dt}\|H_s\Psi\|
   \leq\|[H_s,H]\Psi\|
   \leq a\sqrt{2\Omega}\,H_1(t).

$$

 Its initial norm is $3\Omega/2$; integrating the preceding linear bound gives [(11.7)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:Htwo).

These computations can be justified without assuming the future source stays Gaussian. Let $P_N$ project onto source occupations $0,\ldots,N-1$, and use the full-space operators 

$$

 H_N=h+H_s+g d_RP_NYP_N.

$$

 They are self-adjoint on $D(h)\cap D(H_s)$ with uniform infinitesimal relative bounds and the coercivity [(10.2)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parentfloor). For every vector in this common domain, $H_Nu\to Hu$, because $P_N$ commutes with $H_s$ and converges in its form norm. The resolvent identity, with the uniformly bounded nonreal resolvents on its left, gives strong resolvent convergence; the associated unitary groups converge strongly on compact time intervals. For $N\geq2$ the entrance lies in $P_N\mathcal H$ and remains there, so both source graphs are bounded operators on that invariant subspace. The commutator is $-ig\Omega d_RP_Np_YP_N$ and obeys the same uniform estimates as above. Hence the displayed graph bounds hold for $e^{-itH_N}\Psi(0)$. At each time, strong wave convergence and weak lower semicontinuity of the closed graphs of $H_s^{1/2}$ and $H_s$ pass these bounds to the actual wave. No finite source truncation remains in the result.

Lastly, from the exact equation for $q$ and its zero entrance, 

$$

 \|q(t)\|\leq |g|\|f_R\|\int_0^t\|Yp(s)\|\,ds
 \leq |g|\sqrt{2/\Omega}\int_0^tH_1(s)\,ds .

$$

 Here $\|f_R\|\leq1$ and $P$ commutes with $H_s$. This is [(11.8)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:enorm). The feedback term in [(10.6)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:pfeedback) has not been set to zero anywhere. 

□





<a id="section-11-1"></a>

### 11.1 All coherent terms in the original physical currents



The nominated current constitution is the nonrelativistic canonical one: 

$$

 j_r[\Psi]=\operatorname{Im}\Psi^\dagger\nabla_r\Psi,\qquad
 j_Y[\Psi]=\Omega\operatorname{Im}\Psi^\dagger\partial_Y\Psi.

$$

 Define differences relative to the *actual* $P$ wave, 

$$

 \delta\rho=|\Psi|^2-|\phi p|^2,\qquad
 \delta j=j[\Psi]-j[\phi p].

$$

 The vector $\phi p$ is generally unnormalized and does not solve an autonomous closed evolution. It is a wave comparison, not a separately assigned physical flow. To make its continuity defect explicit, set $\mathcal F=gY\langle\phi,d_Rq\rangle_r$ and $M(t)=\|p(t)\|^2$. The feedback equation gives, in distributions, <a id="p4h:eq:comparisondefect"></a>


$$

 \partial_t|\phi p|^2+\operatorname{div}j[\phi p]
 =s_P:=2|\phi|^2\operatorname{Im}(p^\dagger\mathcal F),
 \qquad M=1-\|q\|^2,\quad M'=\int s_P.

$$

Equation (11.9).

 The products are integrable under the earned source graphs: for example $\|\mathcal F\|\leq |g|d_0\|Yq\|$. Even if $M>0$ and the comparison is normalized, writing $\rho_P=|\phi p|^2$, its density $\rho_P/M$ and current $j[\phi p]/M$ have source $s_P/M-M'\rho_P/M^2$. Normalization therefore does not create conservative equivariance. The estimates below retain the original unnormalized comparison and need neither a second flow nor a continuity-defect allowance.



**Lemma 11.3 (Full electron and source current differences).**

 <a id="p4h:lem:current"></a> With $d_r=\|\nabla_rq\|$ and $d_Y=\|\partial_Yq\|$, <a id="p4h:eq:densitydifference"></a>
<a id="p4h:eq:jrelectron"></a>
<a id="p4h:eq:jYsource"></a>


$$
\begin{aligned}\|\delta\rho\|_1&\leq2e+e^2,\\
 \|\delta j_r\|_1&\leq d_r+e+ed_r,\\
 \|\delta j_Y\|_1
 &\leq\Omega\{(1+e)d_Y+
                     e\sqrt{2/\Omega}\,H_1(t)\},
 
\end{aligned}
$$

Equation (11.10, 11.11, 11.12).

 where $d_r\leq\sqrt2\,Q(t)$ and $d_Y\leq\sqrt{2/\Omega}\,Q(t)$. 

 

**Proof.**

For any derivative $D$, expand before estimating: 

$$

 j_D[\phi p+q]-j_D[\phi p]
 =c_D\operatorname{Im}\{
     (\phi p)^\dagger Dq+q^\dagger D(\phi p)+q^\dagger Dq\}.

$$

 Thus every interference term and the quadratic error current remain. Cauchy–Schwarz, $\|p\|\leq1$ and $\|\nabla\phi\|=1$ give the electron estimate. For the source, $\|\partial_Yp\|\leq\sqrt{2/\Omega}\,H_1$ because $P$ commutes with the source kinetic form. Multiplication by $c_Y=\Omega$ gives [(11.12)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:jYsource). The density expansion gives [(11.10)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:densitydifference). Finally the electron and source kinetic terms are included with their stated coefficients in $T_{\rm ph}$, giving the two derivative bounds. Spectral orthogonality of $P$ and $Q$ has not been used to discard a pointwise cross term. 

□





**Corollary 11.4 (An explicit finite-time current bound).**

 <a id="p4h:cor:currents"></a> For the same static parent with $\Omega=.01$, $g=10^{-6}$, $R=40$, $d_0\leq41$ and the entrance of Proposition [11.2](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:prop:actualsource), <a id="p4h:eq:qrow"></a>
<a id="p4h:eq:electronrow"></a>
<a id="p4h:eq:sourcerow"></a>


$$
\begin{aligned}Q(100)&<.00051,\qquad e(100)<.000176,\\
 \int_0^{100}\|\delta j_r(t)\|_1dt
 &<.045033131<.046,\\
 \int_0^{100}\|\delta j_Y(t)\|_1dt
 &<.003970830<.004.
\end{aligned}
$$

Equation (11.13, 11.14, 11.15).

 

 

**Proof.**

Equations [(10.4)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:tailform), [(10.9)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:theta) and [(11.2)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:Comega) give the rational enclosure 

$$

 \frac{22}{7}\frac{1+.00062}{1-.00062}
 \left\{\frac{32(1+10^{-12})}{9(.01)^2}
                       +\frac{25}{4(.01)}\right\}<338^2 .

$$

 Here $(\sqrt3+1/\sqrt2)^2=7/2+\sqrt6<25/4$. Let $a=41\cdot10^{-6}$. Equations [(11.5)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:stationary)–[(11.8)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:enorm) consequently admit the polynomial upper bounds 

$$
\begin{aligned}\overline Q(t)&=338\cdot10^{-8}
           \{(3/2)t+(7/8)at^2+a^2t^3/6\},\\
 \overline e(t)&=10^{-6}\{(7/4)t+at^2/2\},\\
 \overline H_1(t)&=.123+.071at.
\end{aligned}
$$

 All roundings are outward: $\sqrt3<7/4$, $\sqrt{.015}<.123$ and $\sqrt{.005}<.071$. Substitute $d_r\leq(10/7)\overline Q$ and $d_Y\leq15\overline Q$, using $\sqrt2<10/7$, $\sqrt{200}<15$. The two current integrands are bounded by 

$$

 \frac{10}{7}\overline Q+\overline e+
                  \frac{10}{7}\overline e\,\overline Q,
 \qquad
 .01\{15(1+\overline e)\overline Q+
                                  15\overline e\,\overline H_1\}.

$$

 These are explicit nonnegative rational polynomials. Exact integration on $[0,100]$ gives respectively $0.045033130836\ldots$ and $0.003970829749\ldots$. Direct evaluation of the same polynomials gives [(11.13)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:qrow). The exact integrals are 

$$

 \frac{113483489708747242649}{2520000000000000000000},
 \qquad
 \frac{95299913979542242649}{24000000000000000000000},

$$

 so integer comparison verifies both printed outward ceilings. No continuum quadrature enters this bound. 

□



The electron integral has units of relative-coordinate length, and the source integral of source-coordinate length in the chosen dimensionless $Y$ convention. They bound $j[\Psi]-j[\phi p]$, not the entire absolute currents. They are not event probabilities. A detector or tube claim requires a corresponding surface/guard and an original-law transport interface with its own constants. Comparing to a freely propagated intended source instead of the actual $p$ would additionally require the feedback phase and current cost of $p-p_{\rm free}$.

The compact scalar and oscillator constitute a definite mathematical example with actual source feedback, full Coulomb poles and continuum, and complete canonical currents. A finite-mass source/COM reduction, source field energy, retardation, loading, clock and a microscopic Pauli or Dirac current identification remain separate physical questions. None is inferred from the exact Coulomb calibration or from the small forcing tail.



<a id="section-11-2"></a>

### 11.2 Flow and companion-paper interfaces

 <a id="p4h:sec:flowinterface"></a>

For the entrance of Proposition [11.2](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:prop:actualsource), the actual parent [(10.1)](/quantum-measurement/research/complete-current-estimates/the-actual-compact-profile-electron-source-parent#p4h:eq:parent) is the constant-$g$ case of the *Full Coulomb–source flow* theorem in the revised companion paper [[3](/quantum-measurement/research/complete-current-estimates/bibliography#bib-RodgersP3)]. The reduced-mass units, the smooth compact dipole and its full collar, the first excited source entrance, the passive internal factor, and both canonical currents agree. Constant $g$ satisfies that theorem's bounded absolutely continuous control hypothesis on every finite horizon, including $[0,100]$. Its common first-domain, tangent-regularity and logarithmic-current arguments consequently supply a deterministic reference-compatible flow for this actual wave, with reference-almost-sure collision and node avoidance. An original joint law absolutely continuous with respect to the entrance wave density is transported by reweighting those same paths once. A quantitative domination factor for [(2.7)](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:eq:path) is a further premise, not a consequence of absolute continuity.

The current bounds above do not apply that flow theorem to $\phi p$. Conservative two-flow stability in the revised P3 requires two admitted conservative flows, a common positive tube, and a bound for the probability of leaving it. Its separate signed-source appendix requires a normalized reference, classical local regularity, and finite source and divergence costs. Neither conclusion follows by analogy from [(11.9)](/quantum-measurement/research/complete-current-estimates/actual-source-graphs-and-finite-time-complete-currents#p4h:eq:comparisondefect). No variable-coefficient spin-curl current is used here; adding one would require its own derivative regularity and current estimates.

The Gaussian preparation and instrument results of P1 [[1](/quantum-measurement/research/complete-current-estimates/bibliography#bib-RodgersP1)] and the finite repeated-record protocol of P2 [[2](/quantum-measurement/research/complete-current-estimates/bibliography#bib-RodgersP2)] concern their own effective parents, complete entrance laws and decoders. The present estimates establish neither those entrance premises nor fresh independence, renewed readiness, or repeated unknown-input measurement. Conversely, wave reset or preparation of an actual law does not supply a missing derivative, source graph or flow hypothesis for the present parent. Any composition must verify the same complete configuration and every retained correlation on the same time interval.
