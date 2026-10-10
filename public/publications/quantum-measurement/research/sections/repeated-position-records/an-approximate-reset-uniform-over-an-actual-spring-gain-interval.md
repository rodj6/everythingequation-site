# Section 12: An approximate reset uniform over an actual spring-gain interval

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-12"></a>

## 12 An approximate reset uniform over an actual spring-gain interval

 <a id="p2s:sec:gain"></a>

There is a constructive alternative to precise exchange-angle calibration. We state it separately from the exact reset used in the 44-cycle theorem. The finite normal-form calculation below includes all creator channels; its small matrix error is converted to a state-dependent quantum error, not an operator-norm estimate for an infinite-dimensional metaplectic unitary. The method is standard finite superadiabatic elimination, with analytic expansion and Cauchy-estimate precedents such as Hagedorn–Joye [[7](/quantum-measurement/research/repeated-position-records/bibliography#bib-HagedornJoye2002)]; the specific positive scalar path, constants, and retained-bank interface are the content needed here.

Let $S(u)=B(33,33)^{-1}\int_0^uv^{32}(1-v)^{32}\,dv$ on $[0,1]$, and put $c=\tfrac14\sin(\pi S)$, $d=\tfrac14\cos(\pi S)$. In coordinates $[q_j,p_k]=i\delta_{jk}$ use the scalar oscillator curvature <a id="p2s:eq:K"></a>


$$

 K_\lambda(u)=
 \begin{pmatrix}1+d+(\lambda-1)c&-\lambda c\\
                 -\lambda c&1-d+(\lambda-1)c\end{pmatrix},
 \qquad .999\leq\lambda\leq1.001.

$$

Equation (12.1).

 It is realized by positive external trap curvatures $1\pm d-c$ and the nonnegative actual spring $\lambda c(q_1-q_2)^2/2$ in $H=(p_1^2+p_2^2+q^TK_\lambda q)/2$. Here the gain is constant within one pulse; different pulses may have different gains. The transformation from the unit-variance coordinates used above is $q=x/\sqrt2$, $p_q=\sqrt2p_x$, so $(q+ip_q)/\sqrt2=\partial_x+x/2$ for the baseline frequency-one oscillator. Endpoint annihilators below instead use their stated instantaneous frequencies; the local ramps after the theorem relate these to baseline stock.



**Theorem 12.1 (Finite four-channel exchange).**

 <a id="p2s:thm:gain"></a> Run [(12.1)](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:eq:K) over normalized duration $T\geq10^8$. Write $\mathcal U$ for its exact four-channel annihilator/creator matrix, with instantaneous eigenmodes used at the two endpoints. Here the incoming scratch annihilator is $a_x=\sqrt{\nu_{x,\rm in}/2}\,q_x+
i p_x/\sqrt{2\nu_{x,\rm in}}$, and the incoming reset annihilator is defined with its own endpoint frequency. The final active number norm and vacuum refer to the outgoing active frequency. There is a diagonal endpoint comparison $\mathcal U_D$ such that <a id="p2s:eq:gain-bound"></a>


$$

 \|\mathcal U-\mathcal U_D\|_{\rm op}
 \leq\ell(T):=80000(576000/T)^{31}.

$$

Equation (12.2).

 The real eigenbasis exchanges the physical modes. If the initially unused reset eigenmode is a quantum vacuum factor, and the scratch has arbitrary retained entanglement and number norm $M=\|a_x\Psi\|$, then the final active number norm and distance from a normalized active-vacuum product wave are each bounded by <a id="p2s:eq:gain-state"></a>


$$

 s(T)(M+1),\qquad s(T)=160000(576000/T)^{31}
 <5.988\times10^{-65}\quad(T\geq10^8).

$$

Equation (12.3).

 The product-wave comparison retains the full rest Hilbert space. No independent actual configuration law is asserted. 





**Proof.**

Write $a=1+(\lambda-1)c$, $r=(d^2+\lambda^2c^2)^{1/2}$, and $\nu_\pm=(a\pm r)^{1/2}$. A continuously chosen real orthogonal eigenbasis $O$ makes a quarter-turn, since the off-diagonal spring is positive in the interior and the two diagonal endpoint curvatures are exchanged. In its canonical coordinates $Q,P$ set $a_j=\sqrt{\nu_j/2}\,Q_j+iP_j/\sqrt{2\nu_j}$. Direct differentiation of these operators and their adjoints gives the exact equation <a id="p2s:eq:fourchannel"></a>


$$

 A_u=(TD_0+G)A,\qquad
 D_0=\operatorname{diag}(-i\nu_+,-i\nu_-,i\nu_+,i\nu_-).

$$

Equation (12.4).

 If $\Omega=O^TO_u$, its off-diagonal annihilator coefficients are $-\Omega_{ij}c_{ij}$ and its creator coefficients are $-\Omega_{ij}d_{ij}$, with 

$$

 c_{ij}=\tfrac12(\sqrt{\nu_i/\nu_j}+\sqrt{\nu_j/\nu_i}),\qquad
 d_{ij}=\tfrac12(\sqrt{\nu_i/\nu_j}-\sqrt{\nu_j/\nu_i}).

$$

 There is also the local creator coefficient $\nu_{j,u}/(2\nu_j)$; the remaining blocks follow by conjugation on the real interval. In particular $G$ has zero diagonal. No sum-frequency channel has been discarded.

We supply finite analytic bounds for this equation. On the complex distance-$1/100$ neighbourhood of $[0,1]$, $|z(1-z)|\leq.2601$. The real maximum of $S'$ is below ten (its exact value is $65\binom{64}{32}/2^{64}$). Consequently $|S'(z)|<10(1.0404)^{32}<40$, and $|S(z)-S(u)|<.4$ at a nearest real $u$. Thus $|\sin\pi S|,|\cos\pi S|<\cosh(2\pi/5)<2$. The square inside $4r$ differs from one by less than $.002001\cdot4=.008004$. Its analytic square root stays within $.005$ of one, and $\nu_\pm^2$ stay within $.002$ of $5/4,3/4$ respectively. The principal frequency branches are therefore analytic. In particular every gap between distinct entries of $D_0$ exceeds $1/5$ in modulus, $ .85<|\nu_j|<1.13$, and 

$$

 |\theta_u|=\left|\frac{\pi\lambda S'}
 {2(\cos^2\pi S+\lambda^2\sin^2\pi S)}\right|<64,
 \qquad |\nu_{j,u}|<.187.

$$

 For the latter estimate differentiate $a$ and $r$: their bounds are $.001\pi40/2$ and $.002001\pi40/.995$, respectively, then divide their sum by $2(.85)$. These estimates give row and column sums of $G$ below 200, and hence $\|G\|\leq200$. Entrywise division by the four-channel gaps, with Frobenius norm comparison, gives the safe bound <a id="p2s:eq:homological"></a>


$$

 \|\operatorname{ad}_{D_0}^{-1}\operatorname{off}B\|
 \leq20\|B\|.

$$

Equation (12.5).



Put $\varepsilon=T^{-1}$, $N=31$, and seek $W=I+\sum_{k=1}^N\varepsilon^kW_k$ and $D=D_0+\sum_{k=1}^N\varepsilon^kD_k$, with $W_k$ off-diagonal and $D_k$ diagonal. With $W_0=I$, define exactly <a id="p2s:eq:recursion"></a>


$$
\begin{aligned}
 D_k&=\operatorname{diag}(GW_{k-1}),\\
 W_k&=\operatorname{ad}_{D_0}^{-1}\operatorname{off}
 \left(W_{k-1}'-GW_{k-1}+\sum_{j=1}^{k-1}W_{k-j}D_j\right).
\end{aligned}
$$

Equation (12.6).

 Expansion shows cancellation through order $\varepsilon^N$ in $\mathcal R=\varepsilon W'-(D_0+\varepsilon G)W+WD$. The diagonal of $W_{k-1}'$ and of $W_{k-j}D_j$ vanishes, which proves the diagonal choice. In particular $D_1=0$.

Use nested complex widths $(N+1-k)/(100(N+1))$. Each Cauchy derivative costs at most 3200, including the last derivative on the real interval. If $c_k$ bounds $\|W_k\|$ on its assigned domain, then 

$$

 c_k\leq68000c_{k-1}
       +4000\sum_{j=1}^{k-1}c_{k-j}c_{j-1},
 \qquad \|D_k\|\leq200c_{k-1}.

$$

 Induction yields $c_k\leq576000^k/(k+1)^2$: the preceding single term costs at most $4\cdot68000/576000$, and the convolution at most $16\cdot4000/576000$. Their sum is less than one. For the convolution split at its midpoint and use $\sum_{m\geq1}m^{-2}<2$. Every entry of $G$ vanishes to order at least 32 at the real endpoints, because $S'$ does. The recursion loses at most one order at each step, so all $W_k,D_k$, $k\leq31$, vanish there. Thus $W(0)=W(1)=I$ exactly.

Let $q=576000/T\leq.00576<.01$. Then $\|W-I\|\leq q/(1-q)$ and $\|W^{-1}\|<2$. The last derivative and the remaining products of total degree greater than $N$ give 

$$

 \|\mathcal R/\varepsilon\|
 \leq[3200+200+200N/(1-q)]q^{31}<9700q^{31}.

$$

 In the dressed equation for $B=W^{-1}A$ the error generator therefore has integrated norm less than $20000q^{31}$. The leading $D_0$ is anti-Hermitian on the real interval. Since $D_1=0$, the full integrated norm of the diagonal correction is at most $200q/(1-q)<6/5$. Including the error keeps the logarithmic growth budget below $5/4$. In Duhamel's formula the diagonal propagation on $[s,1]$ and the perturbed propagation on $[0,s]$ use disjoint subintervals of this one budget. Their product is at most $e^{5/4}<4$, not the product of two independent whole-interval overestimates. The identity endpoint dressing gives $4\cdot20000q^{31}$, proving [(12.2)](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:eq:gain-bound).

The diagonal reference sends the initial reset annihilator into the final active mode, so it kills the unused vacuum. On the retained entrance state the four operator norms have squared sum 

$$

 \|a_x\Psi\|^2+\|a_r\Psi\|^2+
 \|a_x^*\Psi\|^2+\|a_r^*\Psi\|^2=2M^2+2.

$$

 Cauchy–Schwarz therefore gives final active number norm at most $\ell\sqrt{2M^2+2}$. If $p$ is its nonvacuum probability, then $p\leq\|a_x\Psi_{\rm final}\|^2$. Normalized projection onto the active vacuum changes the wave by $[2(1-\sqrt{1-p})]^{1/2}\leq\sqrt{2p}$. This is at most $2\ell\sqrt{M^2+1}\leq s(M+1)$; the number norm obeys the same larger bound. If the vacuum projection is zero, then $p=1$ and the sharper number estimate forces $s(M+1)\geq\sqrt2$. Any normalized vacuum-product wave is then orthogonal to the true wave and has distance $\sqrt2$, so the conclusion still holds. Thus the statement includes arbitrary finite $M$. The rational power at $T=10^8$ gives the final decimal ceiling. 

□





**Remark 12.2 (The meaning of the diagonal comparison).**

 The comparison's diagonal entries may contain unknown phases and finite normal-form amplitude corrections. It need not itself be asserted a canonical quantum transformation. Only its active annihilator row, which annihilates the initial reset vacuum, is used in the state estimate. All other quantum correlations remain in the used archive and spectators. 





<a id="section-12-1"></a>

### 12.1 Finite resources and the limits of this tolerance

 The two physical endpoint frequencies are known, independently of $\lambda$. They can be joined to baseline frequency one by prescribed local Ermakov ramps, which act on arbitrary input waves. One explicit choice uses the Beta$(9,9)$ step $S_8$, duration 40, and scale $b=\exp(\pm L S_8(t/40))$, with $L=\tfrac12\log(\Lambda\nu_{\rm endpoint})<36/5$ and $\Lambda=10^6$. The elementary bounds $|S_8'|<4$, $|S_8''|<34$ give 

$$

 |\ddot b/b|\leq[16L^2+34L]/1600<.7.

$$

 The term $\nu_{\rm in}^2/b^4$ stays at least one along either the compression or its matching expansion. Thus the programmed curvature $\nu_{\rm in}^2/b^4-\ddot b/b$ is positive, at least $.3$, and below $1.26\times10^{12}$. Endpoint scale and zero chirp implement exact annihilator transport up to phase, by the same Ermakov change of variables used in the exact reset. The first six Hamiltonian jets agree at joins. Two parallel ramp stages cost 80 baseline units. During the accelerated sweep the physical curvature is $\Lambda^2K_\lambda(\Lambda t/T)$, for $0\leq t\leq T/\Lambda$. Rescaling time and canonical coordinates reduces it exactly to the normalized sweep of Theorem [12.1](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:thm:gain), with the same gain interval. For $T\in[10^8,1.01\times10^8]$, this takes at most 101 baseline units; including the two parallel ramp stages gives at most 181 units.

These local ramps and endpoint traps are specified exactly; the proven gain interval concerns the actual coupling spring during the sweep. Independent ramp errors, idle curvature, clocks and time-dependent gain are different perturbations. Proposition [10.4](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:curvature) gives a quantitative obstruction to conflating them. Substituting this approximate reset into the repeated-record construction changes both the stock errors and the schedule. A corresponding record theorem must propagate those errors through the finite-calibration criterion and re-evaluate every receiver's hold allowance; it does not inherit the exact-reset numerical bound without that calculation.

For comparison, common systematic endpoint-angle error is a narrower model in which the symmetric BB1 sequence suppresses low-order mixing. That pulse identity is established work of Wimperis and Brown–Harrow–Chuang [[3](/quantum-measurement/research/repeated-position-records/bibliography#bib-Wimperis1994), [4](/quantum-measurement/research/repeated-position-records/bibliography#bib-BrownHarrowChuang2004)]. Its error model, phase-axis controls, and increased duration do not supply a general scalar trap calibration theorem. The explicit four-channel calculation above treats a different constant spring-gain uncertainty and includes squeezing.
