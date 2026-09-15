# Chapter 18: Selection of a shared-current reader

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

<a id="cpc:chap:selection"></a> 

The statistical target in this chapter is a held Gaussian diagnostic, not the Hamiltonian Bell incidence process. Within that diagnostic class, the population drift, population diffusion and measured signal can be selected together. Gaussian noise, the shared-noise architecture and phase lifting retain their own physical content [[M13](/quantum-measurement/monograph/bibliography#bib-M13), [M14](/quantum-measurement/monograph/bibliography#bib-M14), [BvHJ](/quantum-measurement/monograph/bibliography#bib-Filtering)]. 



<a id="section-18-1"></a>

## 18.1 The broader trial class and the exact diagonal identity

 

Fix orthogonal nonzero projectors $P_1,\ldots,P_n$ summing to $I$, and let $p_j=\|P_j\psi\|^2$. A normalized continuous source-ray process has, in its declared complete filtration, <a id="cpc:eq:trial"></a>


$$
dp_j=b_j(\psi)\,dt+A_j(\psi)\,dW,\qquad
 dY=g(\psi)\,dt+dW,\quad Y_0=0.
 

$$

Equation (18.1).

 The Wiener process is primitive. Coefficients are bounded and continuous, with local regularity sufficient for the indicated Itô equations and initial moment derivatives. The simplex is preserved, so $\sum_j b_j=\sum_j A_j=0$. Every ray wholly within $P_j\mathcal H$ stays there and has the same calibrated record $Y_t=\beta_jt+W_t$, independently of the ray's direction inside that sector. Coefficients may initially depend on phases and other represented source data. There are no additional noises or jumps in this trial class. 



**Lemma 18.1 (Finite diagonal support from CPC).**

 <a id="cpc:lem:diagonal"></a> If the trial law obeys CPC, then for every finite-time path event $E$, <a id="cpc:eq:diagonal"></a>


$$
\mathbb E_\psi[1_Ep_j(t)]=p_j(0)\mu_{j,t}(E),
 

$$

Equation (18.2).

 where $\mu_{j,t}$ is Wiener path law with constant drift $\beta_j$. 

 

**Proof.**

CPC and actual randomization make $F_{E,j}(\rho)=\operatorname{tr}[P_j\mathcal T_t(E;\rho)]$ a positive affine functional. Extend it homogeneously to positive matrices. Finite-dimensional duality gives $F_{E,j}(\rho)=\operatorname{tr}(H_{E,j}\rho)$ with $H_{E,j}\ge0$. Any vector in a different sector has zero value. Positivity implies that $H_{E,j}^{1/2}$ annihilates every such vector, so $H_{E,j}=P_jH_{E,j}P_j$. On every unit vector in sector $j$, calibration gives the value $\mu_{j,t}(E)$. Polarization then gives $H_{E,j}=\mu_{j,t}(E)P_j$, proving the identity. No measurement of $P_j$ is performed: it is a coordinate of the assumed continuation measure. 

□

 



**Theorem 18.2 (Population and signal selection).**

 <a id="cpc:thm:selection"></a> For the regular calibrated shared-current class, identity [(18.2)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:diagonal) forces <a id="cpc:eq:selected"></a>


$$
b_j=0,\qquad g=\overline\beta:=\sum_k\beta_kp_k,\qquad
 A_j=(\beta_j-\overline\beta)p_j.
 

$$

Equation (18.3).

 Only the mass and endpoint-moment consequences of the identity to first order are needed. 

 

**Proof.**

Integrating [(18.2)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:diagonal) against one and against the path endpoint gives $\mathbb E p_j(t)=p_j(0)$ and $\mathbb E[Y_tp_j(t)]=\beta_jp_j(0)t$. The bounded signal gives integrability; clipped endpoint tests justify the latter identity. Initial differentiation of the first gives $b_j=0$. Itô's rule gives 

$$

 d(Yp_j)=(Yb_j+gp_j+A_j)\,dt+(YA_j+p_j)\,dW.

$$

 At $Y_0=0$ the second derivative identity therefore gives $gp_j+A_j=\beta_jp_j$. Sum over $j$ to obtain $g=\overline\beta$, and substitute. All initial rays are eligible; continuity includes boundary points. 

□

 



<a id="section-18-2"></a>

## 18.2 A finite physical replacement for full CPC

 

A tag need only establish [(18.2)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:diagonal); it need not establish all matrix-valued ensemble equivalences first. State the replacement independently. Attach a ready qubit by the admitted coherent isometry <a id="cpc:eq:tag"></a>


$$
C_j\psi=P_j\psi\otimes|1\rangle+(I-P_j)\psi\otimes|0\rangle.
 

$$

Equation (18.4).

 It is realized by the unitary $P_j\otimes X+(I-P_j)\otimes I$ on a $|0\rangle$ tag. Assume the target dynamics preserves $\operatorname{Ran}C_j$ and has exactly the same population/current law after tagging, including on entangled references. This tagging invariance is stronger than ordinary locality. 

A physically specified tag reader has, by deadline $s$, a common factor $r_s>0$ such that tag-$1$ click probability is $r_s\|Q_1\Psi\|^2$ and that click captures the source into the corresponding sector. All opposite clicks, nulls and times remain actual outcomes. Assume disjoint-record interchange: for the same two isolated physical ports, clocks and preparations, the two permitted evaluation orders give the same joint law of their actual classical records. This is not an assertion that arbitrary sequential laboratory operations commute. 



**Theorem 18.3 (Finite-tag diagonal bridge).**

 <a id="cpc:thm:tagbridge"></a> The calibrated trial class, physical tagging invariance, the finite tag law and disjoint-record interchange imply [(18.2)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:diagonal), including an arbitrary inaccessible entangled reference. Exact phase-faithful tag capture is not needed for this scalar implication; capture into the indicated sector suffices. 

 

**Proof.**

Let $K$ denote tag-$1$ click by $s$. Evaluate the target first. The tag load at its later evaluation is $p_j(t)$ by copied-subspace preservation and tagging invariance, so $\Pr_{A\to B}(E,K)=r_s\mathbb E[1_Ep_j(t)]$. Evaluate the tag first. Event $K$ has probability $r_sp_j(0)$ and leaves a sector-$j$ input. Eigen-calibration gives $\Pr_{B\to A}(E,K)=r_sp_j(0)\mu_{j,t}(E)$. Interchange equates these probabilities and $r_s>0$ permits cancellation. Neither experiment discards its null or opposite-click branches. 

□

 

One nonempty tag constitution uses fresh independent thresholds $Z_j\sim\operatorname{Exp}(1)$, quadratic coupling loads $e_j=\|Q_j\Psi\|^2$, a held unchanged null vector and countdowns $\dot R_j=-h(e_j)$. Load subdivision at fixed receiver sensitivity equates $e^{-t h(e_1+e_2)}$ with $e^{-t[h(e_1)+h(e_2)]}$; continuity and $h(0)=0$ force $h(e)=\gamma e$. The first-zero race then has <a id="cpc:eq:tagrace"></a>


$$
\Pr(T\in du,J=j)=\gamma e^{-\gamma u}e_j\,du,\qquad
 \Pr(T>s)=e^{-\gamma s},\qquad r_s=1-e^{-\gamma s}.
 

$$

Equation (18.5).

 This derives the scalar race from that kinetic constitution. Quadratic load, fresh exponential readiness, first-zero actualization and capture remain physical assumptions. Faithful capture gives multipliers $N_j(u)=\sqrt\gamma e^{-\gamma u/2}Q_j$ and $N_\varnothing=e^{-\gamma s/2}I$; these describe a sharp absorber, not a bounded finite diffusive reader. 

The interface must be explicit. At a winner $j$ and time $u$, the change of variables $Z_j=\gamma e_ju$, $Z_k=R_k+\gamma e_ku$ gives density 

$$

 \gamma e_je^{-\gamma u}\,du\prod_{k\ne j}e^{-R_k}\,dR_k.

$$

 Thus present stopped residuals factor independently, conditional on the hit and time. At a null the analogous density is $e^{-\gamma s}\prod_ke^{-R_k}dR_k$. But storing the original winning threshold exposes $e_j=Z_j/(\gamma T)$. Disarmed residual exposure followed by load-sensitive reuse also fails the same preparation readout. Threshold retirement and prohibition of live numerical copying are therefore assumptions of this particular realization, not consequences of memorylessness. Later detector constitutions address that separate access problem; the diagonal bridge does not resolve it. 



<a id="section-18-3"></a>

## 18.3 Quantitative tags and the cost of small success probability

 

Suppose $|h(x)-\gamma x|\le Cx^{1+\alpha}$ uniformly on $[0,1]$, $\alpha>0$. Split each sector into $m$ identical cells of load $e_j/m$, keeping the coherent microcell register, winning cell and stopped resources in both actual and comparison outputs. Then <a id="cpc:eq:refinerates"></a>


$$
\sum_j|m h(e_j/m)-\gamma e_j|\le C m^{-\alpha}.
 

$$

Equation (18.6).

 



**Proposition 18.4 (Complete refined-tag estimate).**

 <a id="cpc:prop:tagerror"></a> For the held vector, common capture and retirement rules, the complete refined tag differs from its extensive comparator by at most <a id="cpc:eq:tagerror"></a>


$$
\eta_m(s)=\min\left\{1,\frac{C}{\gamma m^\alpha}(1-e^{-\gamma s})\right\}
 

$$

Equation (18.7).

 in half trace distance on the record and retained bank, uniformly on input and reference. If each actual joint ordering changes by at most $\eta_m(s)$ on replacing its tag, and their record-interchange defect is $\chi_{t,s}$, then <a id="cpc:eq:diagdefect"></a>


$$
\sup_E\left|\mathbb E[1_Ep_j(t)]-p_j(0)\mu_{j,t}(E)\right|
 \le d_j(t):=\frac{\chi_{t,s}+2\eta_m(s)}{r_s}.
 

$$

Equation (18.8).

 

 

**Proof.**

Couple corresponding microcell clocks at the lesser of their rates, with separate excess clocks. The total discrepancy rate is at most $Cm^{-\alpha}$; the union rate is at least the comparator total $\gamma$. Thus the probability that the first union event by $s$ is discrepant is at most $Cm^{-\alpha}\int_0^se^{-\gamma u}du$. On all other branches the actual time, winning cell, captured or null vector agree. Couple stopped residuals by their identical exponential conditional kernels. This is a coincidence coupling of complete outputs; no contraction of an unknown nonlinear trial suffix is used. The triangle inequality between two orderings and the exact-tag comparison gives [(18.8)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:diagdefect) after division by $r_s$. 

□

 

A small finite-time event discrepancy alone does not determine a generator. The next estimate states the necessary uniformity explicitly. Let $x$ denote complete source coordinates, $H_j(x)=g(x)p_j(x)+A_j(x)$, and suppose $|b_j|\le B$, $|g|,|\beta_j|\le G$, $\mathbb E d(x_u,x_0)\le K\sqrt u$, with Lipschitz constants $L_b,L_H$ for $b_j,H_j$. For $a\ge0$ put $M=Gt+a\sqrt t$ and let $\phi$ be the standard normal density. Then <a id="cpc:eq:approxdrift"></a>
<a id="cpc:eq:approxcross"></a>


$$
\begin{aligned}|b_j(x_0)|&\le\frac{d_j(t)}t+\frac23L_bK\sqrt t,\\
 |H_j(x_0)-\beta_jp_j(x_0)|&\le z_j(t),\\
 z_j(t)&=\frac{2Md_j(t)+4\sqrt t\phi(a)}t+
 \frac23(B+L_HK)\sqrt t+\frac{BG}2t.
 
\end{aligned}
$$

Equation (18.9, 18.10).

 To prove the first, integrate $b_j(x_u)$, subtract $tb_j(x_0)$ and use the all-event mass defect. For the second, the signed endpoint measure has total variation norm at most $2d_j(t)$, so clipping at $M$ costs $2Md_j(t)$. In both compared laws $|Y_t|\le Gt+|W_t|$, giving two combined tail errors at most $4\sqrt t\phi(a)$. Integrate $\mathbb E[Y_ub_j(x_u)+H_j(x_u)]$, using $\mathbb E|Y_u|\le\sqrt u+Gu$ and the Lipschitz estimate. This proves [(18.10)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:approxcross). Summing gives $|g-\overline\beta|\le\sum_jz_j$ and $|A_j-(\beta_j-\overline\beta)p_j|\le z_j+p_j\sum_kz_k$. For a uniform defect $d_j\le\epsilon$, choose $t=\epsilon^{2/3}$ and $a=\sqrt{4\log(1/\epsilon)}$; every displayed error vanishes if the regularity constants stay fixed. Coherent square-root lifting near a node requires additional weighted control. 

For comparison, let $p_t^*$ be the selected binary process and define $p_t=\operatorname{logistic}(\operatorname{logit}p_t^*+a\sin(2\pi t/T))$, with continuous endpoint extension. Keep $Y$ unchanged. At $0,T$ the transformation is identity, so the complete final ray and current path agree with the selected model. Nevertheless the initial population drift is $2\pi a p(1-p)/T$. This regular clock-dependent rival is distinguished by an earlier stop and defeats inference from one deadline alone. 



<a id="section-18-4"></a>

## 18.4 Positive lift, physical likelihood and generated closure

 

Impose positive sector lifting: each $P_j\psi_t$ is a positive scalar multiple of $P_j\psi_0$, with its internal vector fixed. For $L=\tfrac12\sum_j\beta_jP_j$ and $\ell=\langle L\rangle_\psi$, applying Itô's formula to $\sqrt{p_j}$ in [(18.3)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:selected) gives <a id="cpc:eq:native"></a>


$$
d\psi=-\tfrac12(L-\ell)^2\psi\,dt+(L-\ell)\psi\,dW,
 \qquad dY=2\ell\,dt+dW.
 

$$

Equation (18.11).

 Smooth coefficients on the compact unit sphere, and direct norm preservation, give a unique global strong process after a local Lipschitz extension around the sphere. This is a nonempty source realization with one actual Wiener-driven record. 



**Theorem 18.5 (Likelihood and complete continuation).**

 <a id="cpc:thm:likelihood"></a> For a held reader define <a id="cpc:eq:multiplier"></a>


$$
M_t(y)=\sum_j\exp\left(\frac{\beta_jy}{2}-\frac{\beta_j^2t}{4}\right)P_j.
 

$$

Equation (18.12).

 The physical process [(18.11)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:native) has <a id="cpc:eq:likelihood"></a>


$$
\Pr_\psi(dY)=\|M_t(Y_t)\psi\|^2\mathbb Q(dY),\qquad
 \psi_t=\frac{M_t(Y_t)\psi}{\|M_t(Y_t)\psi\|},
 

$$

Equation (18.13).

 where $\mathbb Q$ is reference Wiener measure. Hence the finite event maps $\mathcal I_t(E)(\rho)=\int_E M_t\rho M_t^\dagger\,d\mathbb Q$ are normalized CP maps with the displayed actual continuation and arbitrary inaccessible references. 

 

**Proof.**

Under $\mathbb Q$, the explicit held multiplier solves $dM=-L^2M\,dt/2+LM\,dY$. Gaussian integration gives 

$$

 \mathbb E_{\mathbb Q}M_t^\dagger M_t
 =\sum_j\mathbb E_{\mathbb Q}e^{\beta_jY_t-\beta_j^2t/2}P_j=I.

$$

 The bounded-coefficient likelihood argument proved in Theorem [21.1](/quantum-measurement/monograph/conserved-converters-and-finite-measurement-programmes#det:likelihood) identifies this normalized multiplier law with [(18.11)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:native), including its reference extension. Here its held diagonal specialization supplies the explicit Gaussian solution; that later theorem treats the general Hamiltonian and predictable-control propagator. Positivity and complete positivity follow directly from the displayed event-map integral. 

□

 

The change of measure does not select its own physical measure: selection occurred through CPC or the tag bridge, with the remaining shared-Gaussian and positive-lift premises. The Gaussian-mixture representation of the final pointer density introduces no ontic eigenlabel. Installing such a label in the physical filtration could change the Wiener property required by [(18.1)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:trial). 

If the calibrations are distinct, each bounded martingale $p_j$ converges and the limit is a vertex with probability $p_j(0)$. Indeed, for $V=\sum_j\beta_j^2p_j-\overline\beta^2$, Itô gives $d\overline\beta=VdW$ and $dV=\mu_3dW-V^2dt$. Thus $\mathbb E\int_0^\infty V^2dt\le V(0)$; convergence of $p$ forces $V\to0$. The limiting support contains one calibration, and bounded convergence gives its probability. Equal calibrations remain an unresolved coherent sector. Every initially positive population remains positive at finite time because [(18.12)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:multiplier) is invertible. 

For a finite sequence of held readers, admitted coherent gates, fresh ready resources and record-dependent controls, multiply the full retained-bank factors. The joint density is $\|K_\omega\Psi\|^2$ against input-independent reference kernels; normalized primitive laws give normalization by successive integration. Tensor identities retain inaccessible references. In the tag realization, the disjoint target and tag factors commute, and their stopped resource kernels are input independent conditional on the record. Therefore both evaluation orders have the same density $\|N M\Psi\|^2$, proving that the tag assumptions have a common nonempty realization. This supplies CPC for the generated library. It does not prove universal admission of every extra source port or select simultaneous arbitrary noncommuting feedback SDEs. 



<a id="section-18-5"></a>

## 18.5 Decisive alternatives to overstrong selection claims

 



**Example 18.6 (An unread affine channel with the wrong joint law).**

 For a qubit let $dp=c p(1-p)dW$ and $dY=\beta p\,dt+dW$, with positive lift. With $f(p)=\sqrt{p(1-p)}$, $f''=-1/(4f^3)$ and the generator sends $f$ to $-c^2f/8$. Thus the unread channel is CP dephasing with coherence $e^{-c^2t/8}$ for every $c$. The equal eigenstate mixture and equal $|+\rangle,|-\rangle$ mixture both have matrix $I/2$, but the initial derivatives of $\mathbb E[Y_tp_t]$ differ by $(c-\beta)/4$. For a finite tag with success $r_s$, the exact order discrepancy is 

$$

 \mathbb E_{A\to B}[Y_t1_K]-\mathbb E_{B\to A}[Y_t1_K]
 =r_s(c-\beta)\int_0^t\mathbb E[p_u(1-p_u)]\,du.

$$

 The integral is positive for an interior input. Clipping $Y_t$ at a sufficiently large finite level preserves a nonzero bounded-record distinction. Unread affinity does not replace the joint event-and-continuation identity. 

 



**Example 18.7 (Terminal Born weights with wrong continuation).**

 The absorbed Wright–Fisher process $dp=\sqrt{2\kappa p(1-p)}dW$ has terminal probability $p$ and mean absorption time $-[p\log p+(1-p)\log(1-p)]/\kappa$. These follow respectively from stopped martingales and the boundary-value equation $\kappa p(1-p)u''=-1$. With fixed phase, however, the generator sends $f(p)=\sqrt{p(1-p)}$ to $-\kappa/(4f)$. Compare the equal mixture of positive-phase rays with $p=1/4,3/4$ with the mixture of $|+\rangle,|-\rangle$ of probabilities $(2+\sqrt3)/4,(2-\sqrt3)/4$. Both initial off-diagonal entries are $\sqrt3/4$. Their derivatives are $-\kappa/\sqrt3$ and $-\kappa\sqrt3/4$. Hence their unread states have trace distance $\kappa t/(4\sqrt3)+o(t)$. Stopping inside small neighborhoods of the initial interior points justifies this expansion. A later finite noncommuting reader of visibility $1-2e_X>0$ detects the difference. Correct terminal weights do not supply coherent continuation. 

 



**Example 18.8 (Phase backaction survives CPC).**

 Put $a_j=\beta_j/2$ and choose arbitrary real $\theta_j$. The multipliers <a id="cpc:eq:phasefamily"></a>


$$
M_t^\theta(y)=\sum_j e^{a_jy-a_j^2t}
 e^{i\theta_j(y-a_jt)}P_j
 

$$

Equation (18.14).

 have exactly the same likelihood and populations as [(18.12)](/quantum-measurement/monograph/selection-of-a-shared-current-reader#cpc:eq:multiplier), and form normalized CP instruments. Their unread off-diagonal magnitudes acquire the additional factor $e^{-(\theta_j-\theta_k)^2t/2}$, as direct Gaussian integration shows. A later noncommuting probe distinguishes them unless the recorded phase is compensated. Positive lifting selects the phase-free member; CPC and the diagonal bridge alone do not.
