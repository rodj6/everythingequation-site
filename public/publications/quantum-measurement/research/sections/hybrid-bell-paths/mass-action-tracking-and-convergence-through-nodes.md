# Section 7: Mass-action tracking and convergence through nodes

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-7"></a>

## 7 Mass-action tracking and convergence through nodes

<a id="app:kinetic"></a> This section restates and expands the signed-queue argument from the earlier pilot paper and monograph [[4](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-PilotPrior), [5](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Monograph)]. The signed queue is a comparison process. It is obtained from the actual two-species process by Theorem [6.1](/quantum-measurement/research/hybrid-bell-paths/recombination-and-the-removal-of-surplus#thm:annihilation), not imposed as an instantaneous physical cancellation rule. Standard density-dependent process methods motivate the decomposition, while the cutoff removal below supplies the required argument at empty origins.

Let $D=|V|$, $L=\sum_e L_e$, $0<\kappa_-\le\kappa_e\le\kappa_+$, and use the oriented incidence matrix already defined. In the signed-queue comparison, $Z_e$ has only its net species, and each packet–eligible-carrier pair reacts at rate $\kappa_e\mu_N/N$. Put <a id="kin:flux"></a>


$$
\begin{aligned}x_r&=N^{-1}\#\{a:X_a=r\},\qquad m_e=\mu_N Z_e/N,\\
 \Phi_e^{N,+}&=\kappa_e x_r[m_e]_+,\qquad
 \Phi_e^{N,-}=\kappa_e x_q[-m_e]_+ .
\end{aligned}
$$

Equation (14, 15).

 These are actual normalized bulk reaction intensities, not sample counting measures. A fixed carrier at the relevant origin has rate $\kappa_e[\pm m_e]_+$. Thus its conditional rate is $\Phi_{qr}^N/x_r$ when it is at $r$. This denominator follows from counting its possible packet partners among $Nx_r$ carriers. Every service consumes one packet, hence total service count is at most $NL+O(1)$. Write $A_e^N:=k_e/N$ for the normalized cumulative signed export and $e_e^N(t)=A_e^N(t)-\int_0^t J_e(s)\,ds$ for its error. The coherent nodal estimate is <a id="kin:nodal"></a>


$$
|J_{qr}|\le (2/\hbar)\|H_{qr}\|\sqrt{w_qw_r} .

$$

Equation (16).

 All graph-dependent constants below are finite at fixed graph and horizon. Choose $C_B\ge\max\{\|B\|_{1\leftarrow1},\|B\|_{\infty\leftarrow\infty}\}$. Let $C_H,C_0,C_G$ denote the corresponding fixed coherent current bounds, and let $c_0$ satisfy $\sup_{e,t}|e_e^N(t)|\le c_0/N$ ($c_0=1$ for zero initial residues and $c_0=2$ for the admissible nonzero residues). For the later path bound one may, for example, take 

$$

 C_0=\frac{2}{\hbar}\sum_{q\ne r}\sup_{t\le T}\|H_{qr}(t)\|,
 \qquad C_G=2\max_r\#\{q\ne r:(q,r)\text{ is an edge}\}.

$$

 The first sum counts directed edges. It bounds the total current into destinations of weight at most $\varepsilon$ by $C_0\sqrt\varepsilon$, using $w_r\le1$; the second bounds the summed residence-denominator error. These are safe fixed-graph choices rather than optimized constants. Coefficients $\kappa_e$ are fixed; arbitrarily varying kinetic coefficients are not in this theorem. Assume empty initial queues and calibrated initial populations with $\mathbb E\|x^N(0)-w(0)\|_1\to0$. Deterministic census preparation is a special case. Randomized census preparation is also allowed; conditional on the initial field, it is independent of future comparison reaction clocks. Let $z^N=Z/N$. The exact balance is <a id="kin:balance"></a>


$$
x^N(t)+Bz^N(t)-w(t)=x^N(0)-w(0)+Be^N(t).
 

$$

Equation (17).

 Write $\eta_N=\|x^N(0)-w(0)\|_\infty+c_0C_B/N$ and define <a id="kin:epsF"></a>
<a id="kin:epsx"></a>


$$
\begin{aligned}\epsilon_{F,N}&=\sum_e\mathbb E\int_0^T
 \bigl(|\Phi_e^{N,+}-[J_e]_+|+
 |\Phi_e^{N,-}-[-J_e]_+|\bigr)dt,\\
 \epsilon_{x,N}&=\mathbb E\sup_{t\le T}\|x^N(t)-w(t)\|_1.
 
\end{aligned}
$$

Equation (18, 19).





**Theorem 7.1 (Global mass-action tracking).**

<a id="kin:tracking"></a> For the fixed finite programme above, bounded-variation currents and <a id="kin:hierarchy"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 

$$

Equation (20).

 one has $\epsilon_{F,N}\to0$ and $\epsilon_{x,N}\to0$. The theorem includes coherent cycles, current reversal, empty origins, zero coherent weights and dark intervals. It is not uniform over a growing sector graph or arbitrarily rapidly varying response coefficients. 

 

**Proof.**

We give the tracking and low-population steps separately. The same pathwise inventory and variation estimates hold after conditioning on the initial census; expectations below average that census as well as reaction clocks. Fix a cutoff $0<\delta\le1$ and, on each edge, run a companion signed queue from the same empty state and the same exports with service function 

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

Equation (21).

 Let $y$ solve the same adapted finite-variation equation without $M$, and let $y_J$ omit both $M$ and $de^N$. Scalar monotonicity and $\|e^N\|_\infty\le c_0/N$ give <a id="kin:dettracking"></a>


$$
\|y-y_J\|_\infty\le2c_0\mu_N/N,\qquad
 \|y_J\|_\infty\le J_*/a_0,\qquad J_*:=\sup_{e,t}|J_e(t)|.
 

$$

Equation (22).

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

Equation (23).

 This controls directional flux because a signed queue exposes only one orientation, and 

$$

 |a_+[m^*]_+-[J]_+|+|a_-[-m^*]_+-[-J]_+|
 =|\phi_t(m^*)-J|.

$$



It remains to remove $\delta$ without assuming the desired population closeness. At time $t$ let $K=\{r:x_r<\delta\}$, and let $I_K,O_K$ be normalized queued charge directed into and out of $K$. Explicitly, with $z_e=Z_e/N$ and $e=(r,q)$, 

$$
\begin{aligned}I_K&=\sum_{\substack{e=(r,q)\\r\notin K,\,q\in K}}[z_e]_+
       +\sum_{\substack{e=(r,q)\\r\in K,\,q\notin K}}[-z_e]_+,\\
 O_K&=\sum_{\substack{e=(r,q)\\r\in K,\,q\notin K}}[z_e]_+
       +\sum_{\substack{e=(r,q)\\r\notin K,\,q\in K}}[-z_e]_+.
\end{aligned}
$$

 Internal edges contribute zero to the cut balance. Summing [(17)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:balance) over $K$ gives 

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

Equation (24).

 The target directional current whose physical origin lies in $K$ is therefore bounded, using [(16)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:nodal) and Cauchy–Schwarz, by <a id="kin:smallflux"></a>


$$
D_{\delta,N}\le C_H\sqrt{T\left(|V|\delta T+
 \frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T\mathbb E\eta_N\right)}.
 

$$

Equation (25).



Couple physical and companion queues with identical exports. For a normalized queue $z=Z/N$, write the physical baseline rates as 

$$

 b_+(z)=N\kappa_e\mu_Nx_r[z]_+,\qquad
 b_-(z)=N\kappa_e\mu_Nx_q[-z]_+.

$$

 In direction $s\in\{+,-\}$, use common baseline services at rate $\min\{b_s(z),b_s(z^*)\}$ and assign the remaining baseline rate only to the relevant queue. The companion also has extra rates 

$$

 h_+=N\kappa_e\mu_N(\delta-x_r)_+[z^*]_+,\qquad
 h_-=N\kappa_e\mu_N(\delta-x_q)_+[-z^*]_+.

$$

 All coefficients use the physical population immediately before the event. At a physical service, choose the carrier and any retained service mark from the original conditional transition kernel. The split rates therefore preserve the complete physical marginal, including its dependence on the tag. The companion uses that same adapted population and does not supply a second population process. Every unmatched baseline service contracts their absolute signed queue difference by $1/N$; an extra companion service can enlarge it by at most $1/N$. Starting from equality, the expected number of baseline mismatches is at most the expected number of extra services. The latter normalized count is at most $R_{\delta,N}+D_{\delta,N}$, since it is supported on low-population origins. Comparing the two directional flux vectors thus costs at most twice this count. Adding the direct companion error gives <a id="kin:fluxbridge"></a>


$$
\epsilon_{F,N}\le3R_{\delta,N}+2D_{\delta,N}.
 

$$

Equation (26).

 Take $N\to\infty$ at fixed $\delta$, then $\delta\downarrow0$, to prove flux convergence. Finally the physical population process has drift $B(\Phi^{N,+}-\Phi^{N,-})$ and an $O(N^{-1})$ quadratic-variation budget, because it has at most $NL+O(1)$ jumps of size $1/N$. The martingale maximal inequality, initial calibration and integrated flux convergence prove [(19)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:epsx) tends to zero. 

□





<a id="section-7-1"></a>

### 7.1 The complete tagged path and the nodal boundary

 Total variation means ${d_{\mathrm{TV}}}(P,Q)=\sup_A|P(A)-Q(A)|$ on the measurable space $D([0,T],V)$ of finite-sector càdlàg paths. It controls event ordering, exact event times, finite null windows and every common measurable stopping or coarse record of the path. It does not by itself control an additional archive absent from that output space.



**Lemma 7.2 (Finite-graph Bell existence through nodes).**

<a id="kin:existence"></a> For [(1)](/quantum-measurement/research/hybrid-bell-paths/introduction-and-statement-of-scope#eq:target), the minimal rates $\lambda^B_{qr}=[J_{qr}]_+/w_r$ on positive-weight origins define a nonexplosive inhomogeneous jump process starting at $w(0)$, with law $w(t)$ at every time. If $\nu\le Cw(0)$, the same construction starts at $\nu$, remains dominated by $Cw(t)$ and does not occupy a zero-weight sector. Its conditional law is unique within this time-inhomogeneous Markov class. 

 

**Proof.**

Each open set $\{t:w_r(t)>0\}$ is a countable union of intervals. No finiteness of the nodal set is inferred from piecewise $C^1$ regularity. On compact subintervals of these positive-weight components, standard integrated-hazard first-jump construction is unique until explosion or a nodal boundary; the increasing compact localization defines the minimal process on their union. Killing at such boundaries gives the minimal forward solution. The nonnegative vector $w$ solves its forward balance equation, so successive first-jump iteration, or positive Volterra iteration, bounds each partial-transition sum by $w$; with initial $\nu$ the bound is $Cw$. If a holding path remains at $r$ while $w_r$ tends to zero, write incoming and outgoing positive currents as $I_r,O_r$. Then $\dot w_r=I_r-O_r$ and $\lambda^B_{\rm out}(r)=O_r/w_r\ge-\dot w_r/w_r$. Integrating shows that the holding survival to that zero is zero. The dominated killed law also gives 

$$

 \mathbb E N_{[0,T]}\le
 C\int_0^T\sum_{q,r}[J_{qr}(t)]_+dt<\infty.

$$

 Thus neither explosion nor nodal killing loses mass. For initial $w(0)$, normalization and domination imply equality with $w(t)$. For general $\nu$, normalization gives the asserted dominated process. The first-jump construction determines its law uniquely. This is the finite-graph existence argument underlying the standard Bell process [[8](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-GeorgiiTumulka2005), [3](/quantum-measurement/research/hybrid-bell-paths/bibliography#bib-Bell2005)]; it is not a selection of that process among all event laws. 

□





**Theorem 7.3 (Tagged physical-time path convergence).**

<a id="kin:path"></a> Under Theorem [7.1](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:tracking), initialize the distinguished carrier with fixed law $\nu\le Cw(0)$ while keeping calibrated total populations. Then <a id="kin:Belllimit"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(X_{a_*}^N),{\operatorname{Law}}(Q^B)\bigr)\longrightarrow0,
 \qquad \lambda^B(q\mid r;t)=\frac{[J_{qr}(t)]_+}{w_r(t)}.
 

$$

Equation (27).

 The target starts at $\nu$. The conclusion is unchanged by fixed positive edge coefficients or admissible initial exporter residues $|u_e(0)|<1$. 

 

**Proof.**

Let $N_\varepsilon$ count crossings of the deterministic weights through a regular level $\varepsilon$. One-dimensional coarea gives $\int_0^1N_\varepsilon d\varepsilon\le\sum_r{\operatorname{Var}}(w_r)$. There is a sequence $\varepsilon_k\downarrow0$ such that $\varepsilon_kN_{\varepsilon_k}\to0$: otherwise $N_\varepsilon$ would have a nonintegrable $c/\varepsilon$ lower bound near zero. The probability that the Bell path visits a sector while its weight is at most $\varepsilon$ is bounded by initial small-weight mass, jump influx into those sectors, and deterministic downcrossings at which the path is already in that sector. By Lemma [7.2](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:existence) and [(16)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:nodal), a valid bound is <a id="kin:nodebudget"></a>


$$
b_C(\varepsilon)=C\bigl(|V|\varepsilon+
 C_0T\sqrt\varepsilon+\varepsilon N_\varepsilon\bigr).
 

$$

Equation (28).

 Jump influx uses the integrated current bound at a small destination; each downcrossing contributes at most $C\varepsilon$.

Initialize the target at the same vertex as the tag. Until their first disagreement, split every physical tagged transition $r\to q$ at rate $\lambda^N_{qr}$ into a shared event of rate $\min\{\lambda^N_{qr},\lambda^B_{qr}\}$ and a physical-only residual. Add a target-only residual of rate $[\lambda^B_{qr}-\lambda^N_{qr}]_+$. A shared or physical-only event uses the original physical conditional transition kernel, including its queue decrement and retained marks. All other physical transitions retain their original rates and kernels. After disagreement, continue both marginals with their prescribed intensities. This construction preserves the complete physical marginal and gives the target its deterministic Markov rates, even though the physical queues depend on the tag's past.

For the estimate, stop at the first disagreement, at the first visit by the target to a sector of weight at most $\varepsilon$, or at the adapted first exit 

$$

 \tau_x=\inf\{t\in[0,T]:\|x^N(t)-w(t)\|_1>\varepsilon/2\},\qquad\inf\varnothing=\infty.

$$

 Before this stopping time, $w_r>\varepsilon$ and $x_r^N>\varepsilon/2$ at the shared occupied origin, so 

$$

 |\lambda^N_{qr}-\lambda^B_{qr}|
 \le\frac2\varepsilon|\Phi^N_{qr}-[J_{qr}]_+|
 +\frac{2J_*}{\varepsilon^2}|x_r^N-w_r|.

$$

 Markov's inequality bounds ${\mathbb P}(\tau_x\le T)$ by $2\epsilon_{x,N}/\varepsilon$. A union and compensator bound gives <a id="kin:pathbound"></a>


$$
{d_{\mathrm{TV}}}\le b_C(\varepsilon)
 +\frac{2\epsilon_{x,N}+2\epsilon_{F,N}}{\varepsilon}
 +\frac{C_GJ_*T}{\varepsilon^2}\epsilon_{x,N}.
 

$$

Equation (29).

 Take $N\to\infty$ at each fixed $\varepsilon_k$, then $k\to\infty$. The queue proof's cutoff $\delta$ was already removed; the two localizations are not interchanged. This proves the whole-path claim. 

□
