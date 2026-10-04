# Section 3: An exact massive detector in physical time

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

<a id="section-3"></a>

## 3 An exact massive detector in physical time

 <a id="sec:detector"></a> Let $A={|{1}\rangle}{\langle{1}|}$ act on a retained internal control label. First a finite internal unitary correlates this label with projectors $P_0,P_1$ of the unknown source, giving $\sum_a P_a\psi{|{a}\rangle}$. No actual internal jump is introduced by this operation. Prepare one oscillator in its ground packet 

$$

 \phi_0(y)=(2\pi\sigma^2)^{-1/4}e^{-y^2/(4\sigma^2)},\qquad
 \sigma^2=\frac{\hbar}{2M\omega}.

$$

 Choose a smooth centre trajectory $b(0)=0$, $b(T_w)=L$, with $\dot b=\ddot b=0$ at both ends, and set <a id="eq:force"></a>


$$

 c(t)=b(t)+\frac{\ddot b(t)}{\omega^2},\qquad
 H_w(t)=\frac{p_y^2}{2M}+\frac{M\omega^2}{2}\bigl(y-c(t)A\bigr)^2.

$$

Equation (7).

 This operator is nonnegative. No first-order unbounded-below translation is used. A convenient explicit choice is <a id="eq:quintic"></a>


$$

 b(t)=L(10s^3-15s^4+6s^5),\quad s=t/T_w,\quad
 \dot b=\frac{30L}{T_w}s^2(1-s)^2\ge0.

$$

Equation (8).

 Smooth higher-order endpoint interpolation can be used when all clock-window derivatives are required; the $C^2$ quintic suffices for the exact writer and the finite-order estimates here. The trap may overshoot the packet centre during acceleration; its finite displacement and force are resources.



**Proposition 3.1 (Exact wave and selected actual motion).**

<a id="prop:writer"></a> For this primitive, $\psi$ is an internal/reference vector, with no unresolved older spatial coordinates. Writing $p_a={\left\|{P_a\psi}\right\|}^2$, the wave is <a id="eq:packet"></a>


$$
\begin{aligned}
 \Psi_t(y)&=P_0\psi{|{0}\rangle}\,e^{-i\omega t/2}\phi_0(y)
 +P_1\psi{|{1}\rangle}\,e^{i\theta(t)}e^{iM\dot b(t)(y-b(t))/\hbar}\phi_0(y-b(t)),\\
 \dot\theta&=\frac{M\dot b^2}{2\hbar}-\frac{M\omega^2(b-c)^2}{2\hbar}-\frac\omega2.
\end{aligned}
$$

Equation (9).

 For $g_\sigma=|\phi_0|^2$, <a id="eq:mixture"></a>


$$

 \rho_t(y)=p_0g_\sigma(y)+p_1g_\sigma(y-b(t)),\qquad
 j_t(y)=p_1\dot b(t)g_\sigma(y-b(t)).

$$

Equation (10).

 Let $F_t(y)=p_0{\mathsf F}(y/\sigma)+p_1{\mathsf F}((y-b(t))/\sigma)$, where ${\mathsf F}$ is the standard normal CDF. The complete actual pointer path is <a id="eq:quantile"></a>


$$

 Y_t=F_t^{-1}(U),\qquad U={\mathsf F}(Y_0/\sigma)\sim\operatorname{Unif}(0,1).

$$

Equation (11).

 In particular $0\le\dot Y_t\le\dot b(t)$ during the monotone write. 

 

**Proof.**

Substitute the Gaussian ansatz into the Schrödinger equation. The coefficient of $y-b$ is $M\ddot b=-M\omega^2(b-c)$ and its scalar coefficient is precisely the displayed $\dot\theta$; the Gaussian width stays at its ground value. Internal labels are orthogonal, so there are no cross terms in $\rho$ or $j$. Now $\partial_tF_t=-j_t$ and $\partial_yF_t=\rho_t>0$. Differentiating $F_t(Y_t)=U$ gives [(3)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:guidance). The initial inverse transform supplies the uniform rank, without a second randomness postulate. 

□





<a id="section-3-1"></a>

### 3.1 Actual timing, false-ready tails and null continuation

 Put a threshold $h=L/2$. Let $\tau=0$ for the initially right-hand tail $Y_0\ge h$, and otherwise let $\tau$ be its first subsequent threshold crossing, with $\tau=\infty$ if none occurs before $T_w$. This convention retains the finite false-ready tail 

$$

 \delta={\overline{\mathsf F}}\left(\frac{L}{2\sigma}\right),\qquad {\mathbb P}(\tau=0)=\delta.

$$

 It is not an assertion that a preliminary check of readiness is noninvasive. Monotonicity in Proposition [3.1](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#prop:writer) gives the complete law <a id="eq:timing"></a>


$$
\begin{aligned}
 {\mathbb P}(\tau>t)&=F_t(h),\qquad
 {\mathbb P}(\tau\in dt)=p_1\dot b(t)g_\sigma(h-b(t))\,dt\quad(0<t<T_w),\\
 {\mathbb P}(\tau=\infty)&=p_0(1-\delta)+p_1\delta.
\end{aligned}
$$

Equation (12).

 The positive-time density integrates to $p_1(1-2\delta)$; together with the initial atom and final null it normalizes to one. Conditional on no pre-trigger event the survival is $F_t(h)/F_0(h)$; conditional on no crossing by $t$, its instantaneous hazard, where defined, is <a id="eq:hazard"></a>


$$

 \frac{p_1\dot b(t)g_\sigma(h-b(t))}{F_t(h)}.

$$

Equation (13).

 This is a derived physical-time formula, not a memoryless source-sector clock. Continuing a return pulse uses the same rank $U$, not a newly sampled waiting time. A dark hold with $\dot b=0$ has zero pointer current.

If an input is entangled with older spatial memories, the full velocity is evaluated before integrating those coordinates out. When they are held fixed, the quantile argument applies separately to their conditional spinor fibres, with the corresponding conditional $p_a$. The integrated $p_a$ still determines marginal density but generally does not determine an individual joint trajectory. For moving old coordinates, use the complete guidance equation rather than this one-dimensional primitive formula.

The conditional position law after a null at $t$ is 

$$

 {\mathbb P}(Y_t\in dy\mid\tau>t)=\frac{1_{y<h}\rho_t(y)}{F_t(h)}\,dy.

$$

 The global wave remains [(9)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:packet), including both packets. For an arbitrary past record event $B$, equation [(6)](/quantum-measurement/research/equilibrium-records/the-model-and-its-statistical-assumptions#eq:pathlaw) rather than a present-sector projection supplies the conditional continuation. A timestamp reader would be an additional interaction and would change this wave; equation [(12)](/quantum-measurement/research/equilibrium-records/an-exact-massive-detector-in-physical-time#eq:timing) describes this specified pointer without an extra timestamp apparatus. A finite timestamp claim requires those contacts and their complete dynamics; the first-crossing formula alone does not construct that reader. Unmeasured arrivals and recorded detection times need not coincide [[10](/quantum-measurement/research/equilibrium-records/bibliography#bib-Arrival)].

 

![Autonomous equilibrium records: apparatus and record construction](/publications/quantum-measurement/research/figures/equilibrium-records.png)

 

Figure 1. The massive writer with $L/\sigma=8$, $p_1=0.65$, $T_w=1$ and $\omega=\pi$. A controlled trap drives a Gaussian packet; mixture-quantile paths at ranks $0.04, 0.20, 0.40, 0.60, 0.75, 0.85, 0.96$ produce the threshold-time distribution. The dashed line in the middle panel is $h/\sigma=4$. These are deterministic evaluations of the displayed equations, not a trajectory-stability estimate for the complete autonomous apparatus.

 <a id="fig:mechanism"></a>



<a id="section-3-2"></a>

### 3.2 Energy and force resources

 In branch 1, <a id="eq:energy"></a>


$$

 \langle H_w(t)\rangle=\frac{\hbar\omega}{2}
       +\frac M2\dot b^2+\frac{M\omega^2}{2}(b-c)^2.

$$

Equation (14).

 It is finite for the explicit trajectory. The work in the driven description is $\int\langle\partial_tH_w\rangle dt$. It vanishes between the initial ground state and the final ground state of the shifted holding trap, but nonzero energy is borrowed and returned during the pulse. The autonomous clock below carries this exchange. Zero net work is not zero transient work or an unlimited source of reset readiness.
