# Chapter 4: Binary reactions and the physical-time Bell limit

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="kin:limit"></a> 

The theorem in this chapter is the intrinsic-chemistry comparison result from [[M01](/quantum-measurement/monograph/bibliography#bib-M01)]. It replaces the normalized allocation rule of [[M02](/quantum-measurement/monograph/bibliography#bib-M02)] by physical pair counting. The proof separates global flux tracking from the later small-weight localization of a tagged path. Within this chapter, a complete additive Markov reaction generator is supplied: neither the action nor source non-reconstructibility selects it. The finite-gas and recombination construction of Chapter [6](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:chapter-medium) derives this comparison law in a controlled limit under a new microscopic constitution. 



<a id="section-4-1"></a>

## 4.1 Elementary reactions, null evolution and resources

 There are $N$ source carriers at positions $X_a\in V$ and $x_r=N^{-1}\#\{a:X_a=r\}$. One predesignated carrier $a_*$ is observed. A positive queued packet on $e=(r,q)$ can react with every carrier at $r$: 

$$

 (P_e^+,C_a@r)\longrightarrow C_a@q+\text{record }(e,a,+).

$$

 The negative packet uses the opposite direction. Every eligible pair has rate $\kappa_e\mu_N/N$, where $0<\kappa_-\le\kappa_e\le\kappa_+<\infty$ are fixed. Pair generators add, there is no other carrier-changing reaction, and all carrier-specific response has been excluded from this scalar class. These last statements are completeness commitments, not mere relabeling symmetries. 

For a function $F$ of the complete source state and archive, the generator is <a id="kin:generator"></a>


$$
\mathcal G_NF=
 \sum_e\frac{\kappa_e\mu_N}{N}|Z_e|
 \sum_{a:X_a=o(e,Z_e)}[F(R_{ea}s)-F(s)],
 

$$

Equation (4.1).

 where $R_{ea}$ consumes the signed packet, moves its owner and appends the actual mark. Empty origins have no eligible pair: their packets remain queued. Between stochastic events the wave, residues and declared clocks continue their deterministic equations. Conditional survival along this no-reaction flow is $\exp(-\int R_Ndt)$, with $R_N$ the sum in [(4.1)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:generator). A constant-rate exponential waiting time is asserted only on a holding interval with constant total rate. 

Let $m_e=\mu_N Z_e/N$. Direct counting gives the normalized bulk fluxes and tag rates <a id="kin:flux"></a>
<a id="kin:tagrate"></a>


$$
\begin{aligned}\Phi_e^{N,+}&=\kappa_e x_r[m_e]_+,&
 \Phi_e^{N,-}&=\kappa_e x_q[-m_e]_+,\\
 \lambda_{e,a_*}^{N,+}&=\kappa_e[m_e]_+\quad(X_{a_*}=r),&
 \lambda_{e,a_*}^{N,-}&=\kappa_e[-m_e]_+\quad(X_{a_*}=q).
 
\end{aligned}
$$

Equation (4.2, 4.3).

 There are $|Z_e|n_r$ eligible pairs and $|Z_e|$ pairs containing a fixed origin carrier. Consequently $\lambda_{qr}^N=\Phi_{qr}^N/x_r$ on an occupied tag origin. This division is derived from composition of pairs; it was not inserted as a normalized choice rule. 

Put $L=\sum_eL_e$. Every reaction consumes a packet, so at most $NL+O(1)$ native reactions occur. A source with capacity for that many export and reaction entries has no overflow on the promised domain. Smaller resources require an explicit exhaustion branch. Assigning degenerate energy to packet, carrier and archive labels conserves the stated source energy at rewrites; it does not derive material memory cost or a cyclic reset. 



<a id="section-4-2"></a>

## 4.2 Global tracking, including empty origins

 Assume empty initial queues and calibrated initial populations with $\mathbb E\|x^N(0)-w(0)\|_1\to0$. Deterministic census preparation is a special case. Randomized census preparation is also allowed; conditional on the initial field, it is independent of future comparison reaction clocks. Let $z^N=Z/N$ and $e^N=A^N-\int Jdt$. The exact balance is <a id="kin:balance"></a>


$$
x^N(t)+Bz^N(t)-w(t)=x^N(0)-w(0)+Be^N(t).
 

$$

Equation (4.4).

 Write $\eta_N=\|x^N(0)-w(0)\|_\infty+C_B/N$ and define <a id="kin:epsF"></a>
<a id="kin:epsx"></a>


$$
\begin{aligned}\epsilon_{F,N}&=\sum_e\mathbb E\int_0^T
 \bigl(|\Phi_e^{N,+}-[J_e]_+|+
 |\Phi_e^{N,-}-[-J_e]_+|\bigr)dt,\\
 \epsilon_{x,N}&=\mathbb E\sup_{t\le T}\|x^N(t)-w(t)\|_1.
 
\end{aligned}
$$

Equation (4.5, 4.6).

 



**Theorem 4.1 (Global mass-action tracking).**

<a id="kin:tracking"></a> For the fixed finite programme above, bounded-variation currents and <a id="kin:hierarchy"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 

$$

Equation (4.7).

 one has $\epsilon_{F,N}\to0$ and $\epsilon_{x,N}\to0$. The theorem includes coherent cycles, current reversal, empty origins, zero coherent weights and dark intervals. It is not uniform over a growing sector graph or arbitrarily rapidly varying response coefficients. 

 

**Proof.**

We give the tracking and low-population steps separately. The same pathwise inventory and variation estimates hold after conditioning on the initial census; expectations below average that census as well as reaction clocks. Fix a cutoff $\delta>0$ and, on each edge, run a companion signed queue from the same empty state and the same exports with service function 

$$

 \phi_t(u)=a_+(t)[u]_+-a_-(t)[-u]_+,\qquad
 a_+=\kappa_e\max(x_r(t-),\delta),\quad
 a_-=\kappa_e\max(x_q(t-),\delta).

$$

 All divided-difference slopes lie between $a_0=\kappa_-\delta$ and $a_1=\kappa_+$. The companion is driven by adapted coefficients; they are not asserted independent of either process. Since each physical reaction uses one of the $NL+O(1)$ packets, the sum of absolute population jumps is at most $2L+O(N^{-1})$. Hence the variations of $a_\pm$ are bounded independently of $N$ at fixed $\delta$. 

For $m^*=\mu_NZ^*/N$, compensated reaction counting yields <a id="kin:companion"></a>


$$
dm^*=\mu_N[J-\phi_t(m^*)]dt+\mu_Nde^N+dM,
 \qquad d\langle M\rangle_t=\frac{\mu_N^2}{N}|\phi_t(m^*)|dt.
 

$$

Equation (4.8).

 Let $y$ solve the same adapted finite-variation equation without $M$, and let $y_J$ omit both $M$ and $de^N$. Scalar monotonicity and $\|e^N\|_\infty\le c_0/N$ give <a id="kin:dettracking"></a>


$$
\|y-y_J\|_\infty\le2c_0\mu_N/N,\qquad
 \|y_J\|_\infty\le J_*/a_0,\qquad J_*:=\sup_{e,t}|J_e(t)|.
 

$$

Equation (4.9).

 For the first inequality, write the difference equation with a measurable divided-difference coefficient $a(t)\in[a_0,a_1]$. Its solution at $t$ is $\mu_N\int_0^t\exp[-\mu_N\int_s^t a(u)du]\,de^N(s)$. This is a pathwise Stieltjes identity, not an anticipative stochastic integral. Integration by parts bounds its absolute value by $2\mu_N\|e^N\|_\infty$. The second inequality follows because the drift points toward $[-J_*/a_0,J_*/a_0]$. 

The instantaneous root $f(t)=[J(t)]_+/a_+(t)-[-J(t)]_+/a_-(t)$ satisfies 

$$

 {\operatorname{Var}}(f)\le \frac{{\operatorname{Var}}(J)}{a_0}
 +\frac{J_*}{a_0^2}[{\operatorname{Var}}(a_+)+{\operatorname{Var}}(a_-)].

$$

 Contraction between jumps of $f$ and summation of its jumps imply 

$$

 \int_0^T|y_J-f|dt\le\frac{|f(0)|+{\operatorname{Var}}(f)}{\mu_Na_0}.

$$

 For $\xi=m^*-y$, production jumps cancel. The square-jump identity and monotonicity, with $V=\mathbb E\xi^2$ and $\alpha=\mu_N/N$, give 

$$

 V'\le-2\mu_Na_0V+
 \mu_N\alpha a_1(J_*/a_0+2c_0\alpha+\sqrt V).

$$

 Young's inequality absorbs the square-root term into $\mu_Na_0V$ and gives $\sup_tV\le C_\delta(\alpha+\alpha^2)$. Thus <a id="kin:R"></a>


$$
R_{\delta,N}:=\sum_e\mathbb E\int_0^T|\phi_t(m_e^*)-J_e|dt
 \le C_\delta\left(\mu_N^{-1}+\frac{\mu_N}{N}
 +\sqrt{\frac{\mu_N}{N}}\right).
 

$$

Equation (4.10).

 This controls directional flux because a signed queue exposes only one orientation, and 

$$

 |a_+[m^*]_+-[J]_+|+|a_-[-m^*]_+-[-J]_+|
 =|\phi_t(m^*)-J|.

$$

 

It remains to remove $\delta$ without assuming the desired population closeness. At time $t$ let $K=\{r:x_r<\delta\}$, and let $I_K,O_K$ be normalized queued charge directed into and out of $K$. Summing [(4.4)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:balance) over $K$ gives 

$$

 w_K+O_K\le |V|\delta+I_K+|V|\eta_N.

$$

 An incoming queue has origin outside $K$, so its origin population is at least $\delta$. Its expected service count therefore bounds 

$$

 \mathbb E\int_0^TI_Kdt\le
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}.

$$

 Consequently <a id="kin:smallmass"></a>


$$
\mathbb E\int_0^Tw_Kdt\le |V|\delta T+
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T\mathbb E\eta_N.
 

$$

Equation (4.11).

 The target directional current whose physical origin lies in $K$ is therefore bounded, using [(3.2)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:nodal) and Cauchy–Schwarz, by <a id="kin:smallflux"></a>


$$
D_{\delta,N}\le C_H\sqrt{T\left(|V|\delta T+
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T\mathbb E\eta_N\right)}.
 

$$

Equation (4.12).

 

Couple physical and companion queues with identical exports and minimum-rate baseline services. View companion service as baseline service with physical coefficients plus extra service where $x<\delta$. Every unmatched baseline service contracts their absolute signed queue difference by $1/N$; an extra companion service can enlarge it by at most $1/N$. Starting from equality, the expected number of baseline mismatches is at most the expected number of extra services. The latter normalized count is at most $R_{\delta,N}+D_{\delta,N}$, since it is supported on low-population origins. Comparing the two directional flux vectors thus costs at most twice this count. Adding the direct companion error gives <a id="kin:fluxbridge"></a>


$$
\epsilon_{F,N}\le3R_{\delta,N}+2D_{\delta,N}.
 

$$

Equation (4.13).

 Take $N\to\infty$ at fixed $\delta$, then $\delta\downarrow0$, to prove flux convergence. Finally the physical population process has drift $B(\Phi^{N,+}-\Phi^{N,-})$ and an $O(N^{-1})$ quadratic-variation budget, because it has at most $NL+O(1)$ jumps of size $1/N$. The martingale maximal inequality, initial calibration and integrated flux convergence prove [(4.6)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:epsx) tends to zero. 

□

 



<a id="section-4-3"></a>

## 4.3 The complete tagged path and the nodal boundary

 Total variation means ${d_{\mathrm{TV}}}(P,Q)=\sup_A|P(A)-Q(A)|$ on the measurable space $D([0,T],V)$ of finite-sector càdlàg paths. It controls event ordering, exact event times, finite null windows and every common measurable stopping or coarse record of the path. It does not by itself control an additional archive absent from that output space. 



**Lemma 4.2 (Finite-graph Bell existence through nodes).**

<a id="kin:existence"></a> For [(3.1)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:current), the minimal rates $\lambda^B_{qr}=[J_{qr}]_+/w_r$ on positive-weight origins define a nonexplosive inhomogeneous jump process starting at $w(0)$, with law $w(t)$ at every time. If $\nu\le Cw(0)$, the same construction starts at $\nu$, remains dominated by $Cw(t)$ and does not occupy a zero-weight sector. Its conditional law is unique within this time-inhomogeneous Markov class. 

 

**Proof.**

Each open set $\{t:w_r(t)>0\}$ is a countable union of intervals. No finiteness of the nodal set is inferred from piecewise $C^1$ regularity. On compact subintervals of these positive-weight components, standard integrated-hazard first-jump construction is unique until explosion or a nodal boundary; the increasing compact localization defines the minimal process on their union. Killing at such boundaries gives the minimal forward solution. The nonnegative vector $w$ solves its forward balance equation, so successive first-jump iteration, or positive Volterra iteration, bounds each partial-transition sum by $w$; with initial $\nu$ the bound is $Cw$. If a holding path remains at $r$ while $w_r$ tends to zero, write incoming and outgoing positive currents as $I_r,O_r$. Then $\dot w_r=I_r-O_r$ and $\lambda^B_{\rm out}(r)=O_r/w_r\ge-\dot w_r/w_r$. Integrating shows that the holding survival to that zero is zero. The dominated killed law also gives 

$$

 \mathbb E N_{[0,T]}\le
 C\int_0^T\sum_{q,r}[J_{qr}(t)]_+dt<\infty.

$$

 Thus neither explosion nor nodal killing loses mass. For initial $w(0)$, normalization and domination imply equality with $w(t)$. For general $\nu$, normalization gives the asserted dominated process. The first-jump construction determines its law uniquely. This is the finite-graph existence argument underlying the standard Bell process [[DGGTZ](/quantum-measurement/monograph/bibliography#bib-BellQFT)]; it is not a selection of that process among all event laws. 

□

 



**Theorem 4.3 (Tagged physical-time path convergence).**

<a id="kin:path"></a> Under Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking), initialize the distinguished carrier with fixed law $\nu\le Cw(0)$ while keeping calibrated total populations. Then <a id="kin:Belllimit"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(X_{a_*}^N),{\operatorname{Law}}(Q^B)\bigr)\longrightarrow0,
 \qquad \lambda^B(q\mid r;t)=\frac{[J_{qr}(t)]_+}{w_r(t)}.
 

$$

Equation (4.14).

 The target starts at $\nu$. The conclusion is unchanged by fixed positive edge coefficients or uniformly bounded initial exporter residues. 

 

**Proof.**

Let $N_\varepsilon$ count crossings of the deterministic weights through a regular level $\varepsilon$. One-dimensional coarea gives $\int_0^1N_\varepsilon d\varepsilon\le\sum_r{\operatorname{Var}}(w_r)$. There is a sequence $\varepsilon_k\downarrow0$ such that $\varepsilon_kN_{\varepsilon_k}\to0$: otherwise $N_\varepsilon$ would have a nonintegrable $c/\varepsilon$ lower bound near zero. The probability that the Bell path visits a sector while its weight is at most $\varepsilon$ is bounded by initial small-weight mass, jump influx into those sectors, and deterministic downcrossings at which the path is already in that sector. By Lemma [4.2](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:existence) and [(3.2)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:nodal), a valid bound is <a id="kin:nodebudget"></a>


$$
b_C(\varepsilon)=C\bigl(|V|\varepsilon+
 C_0T\sqrt\varepsilon+\varepsilon N_\varepsilon\bigr).
 

$$

Equation (4.15).

 Jump influx uses the integrated current bound at a small destination; each downcrossing contributes at most $C\varepsilon$. 

Couple the target and tagged jumps at minimum conditional intensities until they disagree, the target reaches the small-weight region, or $\sup_t\|x^N-w\|_1>\varepsilon/2$. In the remaining states, 

$$

 |\lambda^N_{qr}-\lambda^B_{qr}|
 \le\frac2\varepsilon|\Phi^N_{qr}-[J_{qr}]_+|
 +\frac{2J_*}{\varepsilon^2}|x_r^N-w_r|.

$$

 The full microscopic marginal is preserved by this coupling although its queues depend on the tag's past. The target marginal retains its own Markov rates. A union and compensator bound gives <a id="kin:pathbound"></a>


$$
{d_{\mathrm{TV}}}\le b_C(\varepsilon)
 +\frac{2\epsilon_{x,N}+2\epsilon_{F,N}}{\varepsilon}
 +\frac{C_GJ_*T}{\varepsilon^2}\epsilon_{x,N}.
 

$$

Equation (4.16).

 Take $N\to\infty$ at each fixed $\varepsilon_k$, then $k\to\infty$. The queue proof's cutoff $\delta$ was already removed; the two localizations are not interchanged. This proves the whole-path claim. 

□

 

At a unique ready sector $w(0)$ is a point mass, so the initial tag is certain. For general $w(0)$, population calibration and the tag's initial law remain explicit preparation requirements. The limiting intensity is relative to the natural tagged history conditional on the declared coherent programme. Exposing all queues or microscopic random resources is a different filtration, with no automatic Bell conditional law. 



<a id="section-4-4"></a>

## 4.4 Finite tails and the boundary of convergence

 For a Rabi pulse $\hbar=g=1$, $H=\sigma_x$ and initial state $(1,0)$, 

$$

 w_0=\cos^2t,\quad w_1=\sin^2t,\quad J=\sin2t,\quad
 k(t)=\lfloor N\sin^2t\rfloor\quad(0\le t\le\pi/2).

$$

 If $b$ carriers occupy sector $1$, then $Z=k-b$ and the exact rates are <a id="kin:binaryrates"></a>


$$
b\to b+1:\ \frac{\kappa\mu_N}{N}(k-b)(N-b),\qquad
 b\to b-1:\ \frac{\kappa\mu_N}{N}(b-k)b,
 

$$

Equation (4.17).

 using only the positive rate in its respective region. For $N=1$ the first export is at $T=\pi/2$; a dark hold then has transfer probability $1-e^{-\kappa\mu_Ns}$. A zero-current interval need not be a no-event interval at finite resources. 

At fixed $\nu=\kappa\mu$, the $N\to\infty$ fluid equation for the root fraction is $x'=-\nu x(x-w_0)$, $x(0)=1$. Lipschitz drift comparison and the $O(\nu T/N)$ martingale budget prove that limit. With $A(t)=\int_0^tw_0(s)ds$, direct differentiation gives 

$$

 \frac1{x(t)}=e^{-\nu A(t)}\left(1+\nu\int_0^te^{\nu A(s)}ds\right).

$$

 Since $A(T)-A(T-s)=s^3/3+O(s^5)$, the substitution $s=\nu^{-1/3}u$ and dominated Laplace asymptotics yield <a id="kin:boundarylayer"></a>


$$
x(T)\sim\frac{3^{2/3}}{\Gamma(1/3)}\nu^{-2/3}.
 

$$

Equation (4.18).

 This is an iterated limit, not a uniform joint $(N,\mu_N)$ error rate. In a dark hold, the exact number $M$ of unfinished carriers decreases at rate $\kappa\mu_NM^2/N$. From $M_0\ge1$ its mean clearance time is 

$$

 \frac{N}{\kappa\mu_N}\sum_{m=1}^{M_0}\frac1{m^2}.

$$

 It grows as $N/\mu_N$ whenever an unfinished carrier is present. A fixed marked-carrier limit does not establish finite-time reset of the entire source bank. 

The scale and regularity assumptions are also substantive. A cell of size $1/\mu$ releasing periodic bursts under constant current $j$ drives the fast output $y(s)=e^{-s}/(1-e^{-1/j})$ on $0\le s<1/j$. Its mean is $j$, but its mean absolute deviation from $j$ is positive. Integrated hazards may converge while time densities fail to converge in TV. The estimate [(4.10)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:R) needs $\mu\times\text{storage size}\to0$. Likewise bounded coefficients $1+\epsilon\cos(\mu_Nt)$ need not have uniformly bounded variation and are outside the fixed-response theorem.
