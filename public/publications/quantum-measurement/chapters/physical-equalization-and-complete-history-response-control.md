# Chapter 5: Physical equalization and complete-history response control

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

<a id="kin:neutrality"></a> 

The scalar reaction class can be supplied by an actual material neutralization mechanism within a specified response law. The exact finite-yield result comes from [[M03](/quantum-measurement/monograph/bibliography#bib-M03)]; the stronger comparison of complete marked histories and returning-work resources comes from [[M21](/quantum-measurement/monograph/bibliography#bib-M21)]. Neither theorem excludes a second physical input to the reaction coefficient. 



<a id="section-5-1"></a>

## 5.1 Exact finite-yield neutrality

 Give each carrier a transferable valence $v_a$ and let its aperture have length $F_e(v_a)>0$, with common bounded Lipschitz $F_e$. A homogeneous intrinsic contact generator per unit length integrates to pair rate $\kappa_e\mu_NF_e(v_a)/N$. Homogeneity, perfect transmission and completeness of this aperture as the reaction input are disclosed laws. They allow arbitrary initial unequal valences. 

On a connected undirected valence graph take capacities $c_{ab}>0$ and zero-sum admitted forcing $f$. Define <a id="kin:yield"></a>


$$
\Phi(v)=\sum_{\{a,b\}}c_{ab}|v_a-v_b|,\qquad
 \dot v+\partial\Phi(v)\ni f(t),\qquad \sum_af_a=0.
 

$$

Equation (5.1).

 Equivalently the antisymmetric edge transfer satisfies $\ell_{ab}\in c_{ab}\operatorname{Sign}(v_a-v_b)$ and $\dot v_a=f_a-\sum_b\ell_{ab}$. This is an ideal finite-yield constitutive interaction. For bounded measurable forcing, implicit steps 

$$

 v^{k+1}=\arg\min_v\left\{
 \frac{\|v-v^k-\Delta t f^k\|^2}{2\Delta t}+\Phi(v)\right\}

$$

 are uniquely defined. Bounded subgradients supply equicontinuity of their interpolants; the closed monotone graph identifies a limiting absolutely continuous solution. Monotonicity gives $\frac12\frac d{dt}\|v-u\|^2\le0$ for solutions with identical forcing, so that solution is unique. Endogenous controllers must separately have a well-posed causal update; arbitrary ill-posed feedback is not admitted. 



**Theorem 5.1 (Cut capacity and finite-time locking).**

<a id="kin:locking"></a> Let $C(S)=\sum_{\{a,b\}\in\partial S}c_{ab}$ and $f(S)=\sum_{a\in S}f_a$. Consensus $v=\bar v\mathbf1$ can remain stationary exactly when $|f(S)|\le C(S)$ for every proper nonempty $S$. If uniformly $C(S)-|f(S)|\ge\eta>0$, the solution reaches consensus by <a id="kin:locktime"></a>


$$
T_{\rm lock}\le\frac{\sqrt{2NE(0)}}{\eta},\qquad
 E(0)=\tfrac12\sum_a(v_a(0)-\bar v)^2,
 

$$

Equation (5.2).

 and remains there while the non-strict cut condition holds. Afterwards all eligible carrier coefficients are exactly $\kappa_e\mu_NF_e(\bar v)/N$. 

 

**Proof.**

At consensus the allowable transfers form the box $|\ell_e|\le c_e$; stationarity means its divergence equals $f$. Summing over cuts proves necessity. Its divergence image is compact convex with support function $\Phi(u)$. Sorting $u_{(1)}\le\cdots\le u_{(N)}$, with $S_k$ the indices above the $k$th gap, yields 

$$

 \Phi(u)=\sum_{k=1}^{N-1}(u_{(k+1)}-u_{(k)})C(S_k),\quad
 f\cdot u=\sum_{k=1}^{N-1}(u_{(k+1)}-u_{(k)})f(S_k).

$$

 The cut inequalities imply $f\cdot u\le\Phi(u)$ for every $u$. Finite-dimensional separation proves sufficiency. The mean is conserved. One-homogeneity gives $\xi\cdot v=\Phi(v)$ for $\xi\in\partial\Phi(v)$. Strict slack, the same coarea identity and $D=\max v-\min v$ imply 

$$

 \dot E=f\cdot v-\Phi(v)\le-\eta D
 \le-\eta\sqrt{2E/N}.

$$

 Integration for $\sqrt E$ proves [(5.2)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:locktime). Stationarity and uniqueness prevent subsequent departure. Substitution in the actual aperture length proves the response equality without an initial valence-distribution assumption. 

□

 

For a complete graph with $c_{ab}\ge\rho/N$ and $|f_a|\le F<\rho/2$, one has the sharper $D(t)\le[D(0)-(\rho-2F)t]_+$. Indeed, if tied maximum and minimum groups have sizes $m,k$ and $D>0$, averaging their saturated external transfers gives $\dot D\le2F-\rho(2N-m-k)/N\le2F-\rho$. At consensus the admissible flow $(f_a-f_b)/N$ balances the forcing. The network has $O(N^2)$ physical links. Opening measurement at a fixed preparation time beyond the uniform locking bound avoids leaking different first-lock times; those histories remain in the source. 



<a id="section-5-2"></a>

## 5.2 Approximate equality with all old records retained

 A smooth alternative assigns material $h_a$ and response $g_e(h_a)$ with $g_-\le g_e\le g_+$ and common Lipschitz constant $L_g$. Admit <a id="kin:smooth"></a>


$$
dh_a=-\nu(h_a-\bar h)dt+dK_a,\qquad
 \sum_a dK_a=0,\qquad
 V_N=\int_0^T\|dK\|_\infty,
 

$$

Equation (5.3).

 where every returning-memory write is represented by a well-posed causal finite-variation $K$. The complete pair rate is 

$$

 r_{ea}=\frac{\kappa_e\mu_N}{N}|Z_e|g_e(h_a)
 1_{\{X_a=o(e,Z_e)\}}.

$$

 The comparison source has exactly the same material, records, initial law and controller rules, but replaces $g_e(h_a)$ by $g_e(\bar h)$. Write their complete marked path laws as $P_N,\bar P_N$. 



**Theorem 5.2 (Complete-history equalization bound).**

<a id="kin:equalization"></a> If $\sum_e|Z_e|\le B_N$ and $D(t)=\max_a|h_a-\bar h|$, then <a id="kin:equalbound"></a>


$$
{d_{\mathrm{TV}}}(P_N,\bar P_N)\le
 \min\left\{1,C_N\mathbb E\int_0^TD(t)dt\right\},\qquad
 C_N=\kappa_+\mu_NB_NL_g.
 

$$

Equation (5.4).

 It holds for arbitrary common initial correlations, including retained heat, controller and material histories. With uniform bounds $D_0,E_0$: <a id="kin:preload"></a>
<a id="kin:live"></a>
<a id="kin:workbound"></a>


$$
\begin{aligned}{d_{\mathrm{TV}}}(P_N,\bar P_N)&\le C_NTD_0e^{-\nu\tau}
 &&\text{after preload $\tau$ and no further writes},\\
 {d_{\mathrm{TV}}}(P_N,\bar P_N)&\le C_N(D_0+V_N)/\nu
 &&\text{for live exchange},\\
 {d_{\mathrm{TV}}}(P_N,\bar P_N)&\le C_N
 \sqrt{T(E_0+W_{\max})/\nu}
 &&\text{for the work budget below}.
 
\end{aligned}
$$

Equation (5.5, 5.6, 5.7).

 Each bound may be capped at one. 

 

**Proof.**

Until the first unmatched event, couple common channels at their minimum rate and all excess rates separately. Every causal controller then agrees between the two histories. At a common state, 

$$

 \sum_{e,a}|r_{ea}-\bar r_{ea}|
 \le\frac{\kappa_+\mu_NL_g}{N}\sum_e|Z_e|
 \sum_{a:X_a=o}|h_a-\bar h|\le C_ND(t).

$$

 The first-mismatch compensator and coupling inequality prove [(5.4)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:equalbound), including all shared record functions. Variation of constants in [(5.3)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:smooth) yields $d(t)=e^{-\nu t}d(0)+\int_{(0,t]}e^{-\nu(t-s)}dK(s)$ for $d=h-\bar h\mathbf1$. Integrating its sup norm proves [(5.5)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:preload) and [(5.6)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:live). For $E=\|d\|_2^2/2$, define the signed injected work 

$$

 W_T=\int_{(0,T]}d(s-)\cdot dK(s)
 +\tfrac12\sum_{s\le T}\|\Delta K(s)\|_2^2.

$$

 The finite-variation chain rule gives $E(T)+\nu\int_0^T\|d\|_2^2dt=E(0)+W_T$. If $W_T\le W_{\max}$, Cauchy–Schwarz proves [(5.7)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:workbound). No independence of returning writes from old records was used. 

□

 

A tag offset $D$ at conserved mean has $\|d\|_2^2\ge D^2N/(N-1)$, with equality when all other offsets equal $-D/(N-1)$. Maintaining it requires power at least $\nu D^2N/(N-1)$; a finite initial stored energy may temporarily pay that cost. The effective dissipative equation and its heat ledger are a new material model, not a thermal-equilibrium derivation. 

If the right side of [(5.4)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:equalbound) tends to zero and the decorated scalar baseline satisfies Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path), projection and triangle inequality give the Bell path limit with additional error equal to that right side. This removes exact initial equality within the specified response class. It does not compare all retained records with an input-independent archive. 



<a id="section-5-2-1"></a>

### 5.2.1 A sharper fixed-tag theorem for growing conductance networks

 The complete-history bound is deliberately stronger than a fixed-tag bound. The latter can converge under a less demanding material scale. Suppose 

$$

 \dot v_a=\sum_{b\ne a}g_{ab}(v_b-v_a)+f_a,
 \qquad g_{ab}=g_{ba}\in[g_-,g_+],\quad |f_a|\le F,
 \quad\sum_af_a=0,

$$

 with fixed positive $g_-,g_+$, well-posed controls, and a preserved range on which $h_-\le F_e(v)\le h_+$ and $F_e$ is Lipschitz. The physical network has $O(N^2)$ links. Its diameter satisfies <a id="kin:networkdiameter"></a>


$$
D(t)\le D_0e^{-Ng_-t}+\frac{2F}{Ng_-}(1-e^{-Ng_-t}).
 

$$

Equation (5.8).

 Indeed, subtract the equations at an almost-everywhere maximum and minimum; the common complete-graph contribution contracts their difference by $Ng_-$, and the two forces contribute at most $2F$. 



**Proposition 5.3 (Fixed-tag neutrality at the network scale).**

 <a id="kin:networkneutrality"></a> With the canonical exporter, initial population calibration, and pair coefficient $\kappa_e\mu_NF_e(v_a)/N$, the global flux/population conclusions of Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking) hold. At a positive-weight path cutoff $\varepsilon$, the additional tagged path error due to unequal material is at most $C(D_0+FT)/(\varepsilon Ng_-)$, besides the canonical flux, population and nodal errors. Thus the tagged Bell limit holds under [(4.7)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:hierarchy) without demanding that the complete-history bound [(5.4)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:equalbound) itself vanish. 

 

**Proof.**

Define weighted occupancies $H_{e,r}^N=N^{-1}\sum_{a:X_a=r}F_e(v_a)$ and $\bar h_{e,r}=H_{e,r}^N/x_r$ when $x_r>0$. They satisfy $h_-x_r\le H_{e,r}^N\le h_+x_r$. Their total variation is uniformly bounded: carrier moves contribute at most a constant times $h_+L$, while 

$$

 \frac1N\sum_a|\dot v_a|\le Ng_+D+F

$$

 and [(5.8)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:networkdiameter) give a uniform integrated bound for material variation. In the companion proof replace service slopes by $\kappa_e\max(H_{e,r}^N,h_-\delta)$. The deterministic root tracking and escape martingale estimates still apply. Extra companion service can occur only when $x_r<\delta$, and an incoming queue to that cut has weighted origin at least $h_-\delta$. Thus the low-population and mismatch estimates hold with $\kappa_-$ replaced by $\kappa_-h_-$, proving global convergence. 

The exact tag rate is $\lambda_{e,*}^N=(F_e(v_*)/\bar h_{e,r})\Phi_e^N/x_r$. The first ratio is bounded by $R=h_+/h_-$ and differs from one by at most $\operatorname{Lip}(F_e)D/h_-$. On the stopped region $w_r\ge\varepsilon$, $x_r\ge\varepsilon/2$, its difference from Bell's rate is bounded by 

$$

 \frac{2R}{\varepsilon}|\Phi_e^N-[J_e]_+|
 +\frac{2RJ_*}{\varepsilon^2}|x_r-w_r|
 +\frac{J_*\operatorname{Lip}(F_e)}{\varepsilon h_-}D.

$$

 Integrating [(5.8)](/quantum-measurement/monograph/physical-equalization-and-complete-history-response-control#kin:networkdiameter) proves the added term. Apply the same minimum-rate path coupling and the same order of nodal limits as in Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path). This controls a fixed tag; it does not assert complete-source archive equivalence or uniformly bounded-degree resources. 

□

 



<a id="section-5-3"></a>

## 5.3 Response bypasses and histories that remain active

 An exceptional carrier with pair multiplier $h_a>0$ is selected with probability $h_a/\sum_{b:X_b=r}h_b$. One tag of fixed multiplier $h$ has vanishing bulk fraction but limiting rate $h[J_{qr}]_+/w_r$. In a monotone star with channel strengths $p_i$ and tag multipliers $h_i$, <a id="kin:exceptional"></a>


$$
\mathbb P(i)=\frac{h_ip_i}{\sum_jh_jp_j},\qquad
 S(t)=(\cos^2\theta(t))^{\sum_jh_jp_j}.
 

$$

Equation (5.9).

 This follows by integrating the hazards $2h_ip_i\dot\theta\tan\theta$. At $p=(3/4,1/4)$ and $h=(6/5,2/5)$ the labels are $(9/10,1/10)$ while the unlabelled waiting law is unchanged. A second stress-dependent factor $\zeta_a$ multiplying $g_e(h_a)$ restores this freedom even after exact material equalization. It violates response completeness, not conservation. 

Conservation and fast averaging also fail to remove event-associated keys. If a rapidly alternating sign $\sigma(t)=\pm1$ gives intensity $\ell(1+\alpha\sigma(t))$, the survival tends to $e^{-\ell t}$ as the period shrinks. At an event print the instantaneous sign. Its limiting positive-key probability by $T$ is $(1+\alpha)(1-e^{-\ell T})/2$, whereas a scalar rate with the same alternating key gives $(1-e^{-\ell T})/2$. This difference follows by integrating the corresponding marked intensity over half periods. The full-record gap is $\alpha(1-e^{-\ell T})/2$. Correct averaged timing does not imply equality of complete marked histories. 

A reversible clamp makes the same distinction physically explicit. For conjugate material $p$ and $P_\perp=I-\mathbf1\mathbf1^{\mathsf T}/N$, $H_{\rm eq}=-\nu h^{\mathsf T}P_\perp p$ gives $d(t)=e^{-\nu t}d(0)$ but $\pi(t)=e^{\nu t}\pi(0)$, $\pi=P_\perp p$. After duration $\tau$, an admitted return $H_{\rm ret}=\omega\|\pi\|^2/2$ for time $s$ gives 

$$

 d_{\rm after}=e^{-\nu\tau}d(0)+\omega s e^{\nu\tau}\pi(0).

$$

 The contracted information survives in conjugate stress. On any fixed compact preparation tube a smooth Hamiltonian cutoff preserves these finite trajectories, but the required stress range grows exponentially. A bounded coupling coefficient is not a bounded-return-work condition. 



**Remark 5.4 (Premises of the kinetic comparison).**

<a id="kin:boundary"></a> The action removes a separately assigned signed-production calibration; conservative export removes detailed production statistics; pair counting removes an explicit normalized carrier selector; material exchange replaces exact initial neutrality in its declared class. This comparison theorem still assumes common packet charge, population calibration, complete Markov chemistry and exhaustive response inputs. The pilot construction replaces elementary stochastic clocks and instantaneous cancellation by finite microscopic dynamics, while retaining charge, preparation and response assumptions and specifying a new ordinary material coupling rule. The countermodels in Part [III](/quantum-measurement/monograph/physical-access-material-contacts-and-compatibility-obstructions#part:access) remain valid for their stated classical contacts: restrictive-looking access can preserve the native law while exporting source information.
