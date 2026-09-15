# Chapter 10: Destructive contacts, native products and reset attacks

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

<a id="acc:contacts"></a> 

The next constructions use the canonical action, packets and carriers of Chapters [3](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:production)–[4](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:limit). They demonstrate why packet consumption and ownership of the native move are different restrictions, and why each still permits an informative record in an explicit resource domain. They preserve the original Hamiltonian current. 



<a id="section-10-1"></a>

## 10.1 A single absorbing site with finite processing

 Choose one positive export direction and supply $B_N$ empty processing pockets, one site $A_0+A_1=1$ initially empty, a clock and retained processing records. Set $N>b>0$, $\Gamma_N>0$. Each positive packet has <a id="acc:pocket"></a>


$$
\begin{aligned}P_i&\longrightarrow Q_e^+ &&\Gamma_N(1-b/N),\\
 P_i+A_0&\longrightarrow A_1+\text{record}
 &&\Gamma_Nb/N,\\
 P_i+A_1&\longrightarrow Q_e^++A_1 &&\Gamma_Nb/N.
\end{aligned}
$$

Equation (10.1).

 Negative packets return to their native queue at rate $\Gamma_N$. The total processing rate is $\Gamma_N$ regardless of site occupancy. At most one packet of charge $1/N$ is retained in the site. All remaining packets eventually return, including opposite-sign cancellations. 

The ready pockets and site are independent of the unknown input and primitive native reaction randomness. The new physical admission is that an exported packet can contact this auxiliary site. No real threshold or freely readable random seed is posited; exponential residences and Bernoulli marks below are mathematical representations of the displayed Markov chemistry. Degenerate labels conserve the stated energy, with supplied finite storage and growing processing rates counted as resources. 



**Proposition 10.1 (Exact finite-time null law).**

<a id="acc:pocketnull"></a> For positive export times $t_i$, <a id="acc:nullproduct"></a>


$$
S_N(s)=\mathbb P(A_0(s)=1)=
 \prod_{t_i\le s}\left[1-\frac bN
 (1-e^{-\Gamma_N(s-t_i)})\right].
 

$$

Equation (10.2).

 After all $D$ positive packets complete, this is $(1-b/N)^D$. If exports finish by $T$, reading at $T+\tau$ differs from the completed binary law by at most $B_Ne^{-\Gamma_N\tau}$. 

 

**Proof.**

Every pocket has an independent rate-$\Gamma_N$ residence and a candidate capture mark of probability $b/N$. The first completed candidate capture occupies the only site. No capture by $s$ means every offered candidate is unmarked or unfinished, giving the product. A union bound for the at most $B_N$ uncompleted residences gives the finite-read estimate. It keeps, rather than rejects, all unfinished branches. 

□

 



**Theorem 10.2 (Path stability under a one-packet diversion).**

<a id="acc:tapstability"></a> Assume a label-symmetric native preparation and fixed programme with $\sum_e|Z_e|\le B_N$. On $[0,T_h]$, the monitored and native tagged paths obey <a id="acc:tapbound"></a>


$$
{d_{\mathrm{TV}}}\le\delta_{\rm tag,N}:=
 \min\left\{1,\frac{\kappa_+\mu_N}{N}
 e^{\kappa_+\mu_N(1+2B_N/N)T_h}
 \left(T_h+\frac{B_N}{\Gamma_N}\right)\right\}.
 

$$

Equation (10.3).

 The same bound holds jointly with the same autonomous router history adjoined to the unmodified comparator. It includes nodes and reversals. 

 

**Proof.**

Couple common edge/carrier reactions at minimum rates. Let $Q=\sum_e|Z_e-Z'_e|$, let $D_c$ count disagreeing carrier locations and let $M$ count unmatched native reactions. For agreeing carrier labels use the queue difference, and for disagreeing labels the sum of rates. The identity $|u_+-v_+|+|u_--v_-|=|u-v|$ yields 

$$

 R_{
\rm mismatch}\le\kappa_+\mu_N\{Q+2(B_N/N)D_c\}.

$$

 If $P(t)$ packets remain pending, signed conservation gives $Q\le1+P+M$ and $D_c\le M$. This counts the one possible diversion. Moreover $\int_0^{T_h}\mathbb EP(t)dt\le B_N/\Gamma_N$. The unmatched-count compensator and Gronwall give 

$$

 \mathbb EM(T_h)\le\kappa_+\mu_N
 e^{\kappa_+\mu_N(1+2B_N/N)T_h}(T_h+B_N/\Gamma_N).

$$

 Permutation symmetry assigns a preselected label expected unmatched count $\mathbb EM/N$. Its path can disagree only at such an event, which proves [(10.3)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:tapbound). For fixed coherent input, router history depends only on deterministic exports and its own clocks. The native comparison can be generated independently of these clocks; the same coupling then preserves the decorated marginal. No division by $w_r$ occurred in this estimate. 

□

 



<a id="section-10-2"></a>

## 10.2 Actual capture times and simultaneous scales

 Let $A_N^+(t)$ count positive exports, $f=[J_e]_+$ on $[0,T]$, extended by zero, and suppose its variation $V_f$ is finite. Define 

$$

 d_N=\sup_{t\ge0}\left|\frac{A_N^+(t)}N-\int_0^tf(s)ds\right|.

$$

 This positive-count discrepancy is stronger than signed residual control when the number of reversals grows without bound. 



**Theorem 10.3 (Latch-time TV estimate).**

<a id="acc:latchtimes"></a> Let $\mathsf L$ be the first-arrival process of deterministic intensity $bf(t)$ while ready and zero after its first event, including the null atom. If $A_N^+(T)\le N\ell$, the actual latch path satisfies <a id="acc:latchbound"></a>


$$
{d_{\mathrm{TV}}}({\operatorname{Law}}(L_N),\mathsf L)\le
 \delta_{\rm latch,N}:=\frac{b^2\ell}{N}
 +b\left[2(\Gamma_NT+1)d_N+\frac{V_f}{\Gamma_N}\right].
 

$$

Equation (10.4).

 For a fixed input $\Xi$, the monitored tag and latch converge jointly to the independent pair of the Bell path and $\mathsf L$ whenever $\delta_{\rm tag,N}+\epsilon_{B,N}+\delta_{\rm latch,N}\to0$. Here independence is conditional on $\Xi$, not on a density-matrix preparation quotient or on all microscopic histories. 

 

**Proof.**

Each positive export at $t_i$ yields a candidate point with probability $p_N=b/N$ and location density $k_\Gamma(t-t_i)=\Gamma e^{-\Gamma(t-t_i)}1_{t\ge t_i}$. A Bernoulli($p_N$) count and Poisson($p_N$) count have TV $p_N(1-e^{-p_N})\le p_N^2$. Coupling all counts and locations bounds candidate-point-process error by $b^2\ell/N$. The Poissonized intensity is $a_N=(b/N)\sum_i k_\Gamma(\cdot-t_i)$. 

Put $G=A_N^+/N-\int f$. Integration by parts gives 

$$

 (k_\Gamma*dG)(t)=\Gamma G(t)
 -\Gamma^2\int_0^te^{-\Gamma(t-s)}G(s)ds.

$$

 Its absolute value is at most $2\Gamma d_N$ before $T$ and decays exponentially afterwards, so its $L^1$ norm is at most $2(\Gamma T+1)d_N$. The BV translation bound $\|f(\cdot-s)-f\|_1\le sV_f$ gives $\|k_\Gamma*f-f\|_1\le V_f/\Gamma$. Minimum-intensity Poisson coupling then costs at most the integral of $|a_N-bf|$. Taking the first-point map, with its null value, contracts TV and proves [(10.4)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:latchbound). For the joint claim use the decorated native comparison in Theorem [10.2](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:tapstability), the canonical Bell limit, and independence of that comparator's tag from router clocks. 

□

 

With at most $K_+$ positive-current intervals, residual balance on each interval gives $d_N\le2K_+/N$. For [(9.3)](/quantum-measurement/monograph/readable-histories-and-reciprocal-source-writers#acc:current) there is one initial positive interval, the exporter starts at zero, and $d_N\le1/N$, $V_f\le8\eta g$. Choose <a id="acc:simultaneous"></a>


$$
\Gamma_N=\Gamma_*\sqrt N,\qquad
 \mu_N=\sqrt{\log(N+1)},\qquad B_N/N\le\ell.
 

$$

Equation (10.5).

 Then [(10.3)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:tapbound) tends to zero, [(10.4)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:latchbound) is $O(N^{-1/2})$, and the canonical hierarchy holds. All times are physical and the duration remains fixed. The growing apparatus supplies $O(N)$ pockets, $O(\sqrt N)$ processing rate and unbounded total throughput. Making $\Gamma_N$ arbitrarily faster is not an improvement: a narrow comb of completion times near deterministic exports need not converge in TV as a time density. The convolution estimate displays that restriction. 



**Theorem 10.4 (Finite destructive-access gap).**

<a id="acc:destructivegap"></a> For the two preparations of Theorem [9.2](/quantum-measurement/monograph/readable-histories-and-reciprocal-source-writers#acc:affine), the completed one-site contact has probability gap <a id="acc:gap"></a>


$$
G_N=(1-b/N)^{\lfloor3N\eta/4\rfloor}
 -(1-b/N)^{\lfloor N\eta\rfloor}
 \longrightarrow G=e^{-3b\eta/4}-e^{-b\eta}>0.
 

$$

Equation (10.6).

 It consumes at most one packet, and its tagged-path disturbance vanishes under [(10.5)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:simultaneous). The maximum limiting gap is $27/256$. A finite error certificate is <a id="acc:finitegap"></a>


$$
|G_N-G|\le\frac{2b}{N}
 +\frac{7\eta b^2}{8N(1-b/N)}.
 

$$

Equation (10.7).

 At a finite read with binary-reader error at most $\epsilon_{
\rm bit}$ per preparation, any common affine approximation has error at least 

$$

 \frac12[G_N-2B_Ne^{-\Gamma_N\tau}-2\epsilon_{
\rm bit}]_+.

$$

 

 

**Proof.**

The maximum $w_1$ is $\eta$ for either basis input and $3\eta/4$ for $p=2/3$. There is one positive rise, so the positive packet counts are exactly the floors in [(10.6)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:gap). Apply Proposition [10.1](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:pocketnull). For $0\le v\le\eta$, $0\le-\log(1-x)-x\le x^2/[2(1-x)]$ gives 

$$

 |(1-b/N)^{\lfloor Nv\rfloor}-e^{-bv}|
 \le b/N+vb^2/[2N(1-b/N)].

$$

 Sum this at $v=\eta,3\eta/4$. Clearing and reader error are probability coupling bounds; an affine approximation must use a common probability, so its two errors sum to at least the actual gap. Finally put $y=b\eta$. The derivative of $e^{-3y/4}-e^{-y}$ vanishes at $y=4\log(4/3)$, where the value is $27/256$. 

□

 

For a concrete finite binary calculation, $\eta=1/2$, $N=32$ and $b=8\log(4/3)$ give $G_N=0.1053958545$. That number certifies the completed latch statistic; it does not certify a small native path error at $N=32$. The full programme runs the detuned pulse, retains pocket and queue processing during a zero-current hold, reads the latch, and then applies a fixed local internal noncommuting rotation. The old record, captured packet, null branches and pending resources remain in the complete state. 



<a id="section-10-3"></a>

## 10.3 A reporter produced by the native reaction itself

 One may strengthen access by insisting that a record be made only when its own packet performs its original native move. Prepare one cofactor $A_0$, with bound states $A_{1,a}$ retaining the contacting carrier label. At a positive native contact replace rate $r_{ea}$ by <a id="acc:nativemark"></a>


$$
\begin{aligned}P_e+C_{a,r}+A_0&\longrightarrow C_{a,q}+A_0
 &&(1-b/N)r_{ea},\\
 P_e+C_{a,r}+A_0&\longrightarrow C_{a,q}+A_{1,a}
 &&(b/N)r_{ea}.
 
\end{aligned}
$$

Equation (10.8).

 After binding use the original native rate. Both branches consume the same packet and obey $\Delta(n+BZ)=0$; neither diverts source charge. The physical addition is a neutral retained reaction product. Section [C.1](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history) gives a separate two-stage finite-delay benchmark in which a first acquired marker is actually generated and then retained through a noncommuting control. It distinguishes conditioning the actual configuration from replacing the continuing wave. 



**Theorem 10.5 (Exact native projection and reporter timing).**

<a id="acc:reporter"></a> The projection onto the entire old native state and every native event time is exactly unchanged by [(10.8)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:nativemark). If $K_N(t)$ counts eligible native reactions, then conditional on the complete native history, <a id="acc:nativenull"></a>


$$
\mathbb P(A(t)=0\mid\mathcal H_{
\rm native})=(1-b/N)^{K_N(t)}.
 

$$

Equation (10.9).

 The reporter path satisfies <a id="acc:nativelatch"></a>


$$
{d_{\mathrm{TV}}}({\operatorname{Law}}(L_N),\mathsf L)\le b\epsilon_{F,N}.
 

$$

Equation (10.10).

 For a predesignated carrier in the symmetric ready preparation, its joint path and reporter converge to $\mathsf B_\Xi\otimes\mathsf L_
\Xi$ with bound <a id="acc:nativejoint"></a>


$$
\Xi_N(a)+b\epsilon_{F,N}+3b\ell/N,
 

$$

Equation (10.11).

 where $\Xi_N(a)$ is the right side of [(4.16)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:pathbound) at cutoff $a$. 

 

**Proof.**

For every function of the native state, the two generator terms sum to $r_{ea}[F(R_{ea}s)-F(s)]$, independently of cofactor state. This exact lumpability proves equality of native path laws, including any old controller depending only on those native histories. Equivalently mark independent eligible native events with probability $b/N$ until the first mark. This representation has precisely the displayed chemistry and proves [(10.9)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:nativenull). 

While ready, the reporter intensity is $(b/N)\sum_ar_{ea}=b\Phi_e^N$. Minimum-rate coupling with intensity $b[J_e]_+$ gives [(10.10)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:nativelatch). For the joint comparison let $s$ be the tag's eligible intensity and $R=\sum_ar_{ea}$. Before binding, the projected channels have rates 

$$

 \text{tag only}:(1-b/N)s,\quad
 \text{latch only}:(b/N)(R-s),\quad
 \text{both}:(b/N)s.

$$

 Against the independent target, their excess is at most $|s-\lambda_B|+b|\Phi_e^N-[J_e]_+|+3bs/N$. Use the localization in Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path) for the first term. Exchangeability and the packet budget give $\mathbb E\int sdt\le\ell$, proving [(10.11)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:nativejoint). After binding only the native comparison remains. The coupling preserves both the full microscopic marginal and the independent target generator. 

□

 

This is stronger than the destructive-contact result: even the complete native projection is undisturbed, without a limiting statement. The same limiting gap [(10.6)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:gap) follows from the reporter law and kinetic flux convergence. But the full native archive is not independent of the new latch. The event that a non-null latch time equals one of its finitely many native reaction times has actual probability $\mathbb P(A=1)$ and probability zero for an independent continuously distributed latch time. Thus <a id="acc:fullhistoryfloor"></a>


$$
{d_{\mathrm{TV}}}({\operatorname{Law}}(\mathcal H_{
\rm native},L_N),
 {\operatorname{Law}}(\mathcal H_{
\rm native})\otimes{\operatorname{Law}}(\widetilde L))
 \ge\mathbb P(A=1).
 

$$

Equation (10.12).

 The tagged limit does not survive every enlargement of the history filtration as an independent-product claim. 



<a id="section-10-4"></a>

## 10.4 Permanent local damage and common-catalyst repair

 Suppose a binding event permanently changes the contacted carrier's pair response by $\zeta\ne1$, leaving the others unchanged. Before binding the models coincide, so the first reporter time and label are exactly those of Theorem [10.5](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:reporter). After binding, a minimum-rate coupling has mismatch intensity at most 

$$

 \kappa_+\mu_N(1+2\ell)M+
 \kappa_+\mu_N|\zeta-1|\ell,

$$

 where $M$ counts unmatched native reactions. Signed queue discrepancy and carrier disagreement are at most $M$. Gronwall and symmetry give <a id="acc:damage"></a>


$$
{d_{\mathrm{TV}}}({\operatorname{Law}}(X_1^{\rm damaged}),{\operatorname{Law}}(X_1^{\rm native}))
 \le\min\left\{1,
 \frac{|\zeta-1|\ell}{N(1+2\ell)}
 [e^{\kappa_+\mu_N(1+2\ell)T_h}-1]\right\}.
 

$$

Equation (10.13).

 This tends to zero under [(10.5)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:simultaneous). The bound also retains the common reporter time and label. Selecting the damaged carrier later from its retained label is a different experiment: for $\zeta=0$ it cannot return under reversed current. No vanishing bound holds for that actively selected carrier or the entire damaged microscopic state. 

A genuinely shared interlock instead removes a common catalyst on capture. Let $C=1$ mean active and let the programme age satisfy <a id="acc:gate"></a>


$$
\dot a=C,\qquad H_C(t)=C H(a(t)),\qquad r_{ea}^C=C r_{ea}.
 

$$

Equation (10.14).

 The controller, production and reactions pause together when $C=0$. On a monotone one-jump interval with $J\ge0$, $w_1(0)=0$ and $W=\int_0^TJdt<1$, the ungated Bell jump density is $J(t)$. The rare-contact limit already proved gives an independent first-capture intensity $bJ$ conditional on the fixed input. 



**Proposition 10.6 (Interlock cost and retained-copy restoration).**

<a id="acc:reset"></a> If the shared gate never resets, its native path distance is exactly <a id="acc:gatecost"></a>


$$
\Delta_{
\rm gate}=W-\frac{1-e^{-bW}}{b}
 \ge\frac W2(1-e^{-bW}).
 

$$

Equation (10.15).

 If a fuelled rate-$\rho$ reset copies the first capture into retained memory and restores the catalyst, then the same first-capture law remains and, for zero-extended BV $J$, <a id="acc:resetbound"></a>


$$
{d_{\mathrm{TV}}}(\text{native path with reset},\text{original native path})
 \le\frac{{\operatorname{Var}}(J)+2\|J\|_\infty}{2\rho}.
 

$$

Equation (10.16).

 The bound retains the same capture and reset variables in both compared outputs and includes finite-window nulls. 

 

**Proof.**

Put $z(t)=\int_0^tJ$. With no reset the native density is $J(t)e^{-bz(t)}$, of mass $(1-e^{-bW})/b$. The missing mass is moved to the null atom, giving the equality. For $x=bW$, the inequality is $x(1+e^{-x})-2(1-e^{-x})\ge0$, whose derivative is $1-(1+x)e^{-x}\ge0$ and whose value at zero is zero. 

For reset, condition on first capture $\sigma$ and pause $D\sim\operatorname{Exp}(\rho)$, with $D=0$ if no capture. Jumps before $\sigma$ remain fixed, and later jumps are delayed by $D$. The affected subdensity is $f_\sigma(t)=J(t)1_{t>\sigma}$, of variation at most ${\operatorname{Var}}(J)+2\|J\|_\infty$. Translation gives $\|f_\sigma(\cdot-D)-f_\sigma\|_1\le D{\operatorname{Var}}(f_\sigma)$. On the whole time line its total mass is unchanged, so TV is half this $L^1$ distance. Average $\mathbb ED\le1/\rho$ and map late jumps to the finite-horizon null. Keeping $\sigma,D$ throughout the conditioning proves the decorated comparison. 

□

 

At finite $N$, gate every old drift and hazard and switch only after the marked native move. For fixed $\sigma,D$, the resulting process is exactly the old process under its measurable paused programme-age map. Adjoining the independent reset-clock representation and applying that map to [(10.11)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:nativejoint) preserves its error uniformly in $\rho$. In the monotone domain, the full comparison therefore adds only [(10.16)](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:resetbound). Letting $\rho\to\infty$ simultaneously with the kinetic resources leaves the acquired record while suppressing the native physical-time disturbance. A uniform bound on reset power or rate would change the admitted resource domain; energy accounting alone supplies no such bound.
