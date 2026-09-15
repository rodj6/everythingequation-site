# Appendix C: Additional finite-model benchmarks and rejected shortcuts

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

<a id="bench:chapter"></a> 

The main chapters prove the general instrument, historical-record and traffic statements. The following calculations retain distinct physical examples from the corrected checkpoints [[C01](/quantum-measurement/monograph/bibliography#bib-C01), [C02](/quantum-measurement/monograph/bibliography#bib-C02), [C03](/quantum-measurement/monograph/bibliography#bib-C03)]. Each example states its own dynamics and statistical input. They are regression tests for continuation and acquisition claims, rather than an additional selection of the event law. The Gaussian pre-latch contact is treated alongside its finite receptor in Chapter [22](/quantum-measurement/monograph/finite-receptor-response-retained-nulls-and-delayed-records#det:chapter-response). 



<a id="section-C-1"></a>

## C.1 A generated first record and a finite-delay history separator

 <a id="bench:history"></a> 

This example makes the readable-history comparison of [[C01](/quantum-measurement/monograph/bibliography#bib-C01)] explicit. Its source constitution is the minimal Bell process [(1.4)](/quantum-measurement/monograph/source-readout-and-the-statistical-target#found:bell) for the declared projectors $P_n=|n\rangle\langle n|\otimes I_R$. The inaccessible reference is retained coherently inside each sector. Resolving reference states as additional actual configuration labels would specify a different process; coarse-graining such a process need not recover these minimal sector rates. 

The apparatus is a stipulated *neutral actual-event marker*: a monitored native jump produces a daughter without changing the source wave or its prescribed rates. Downstream capture writes a physical memory. This is a mathematical coupling assumption of the kind used in Theorem [10.5](/quantum-measurement/monograph/destructive-contacts-native-products-and-reset-attacks#acc:reporter) and Theorem [22.6](/quantum-measurement/monograph/finite-receptor-response-retained-nulls-and-delayed-records#det:delayed-filter). Those results do not identify it with a universally admitted quantum instrument or a coherent source–product interaction. 



<a id="section-C-1-1"></a>

### C.1.1 One-way transport and a finite response

 

Fix an acquired earlier history $H$ and the subsequent control schedule. Suppose the only active source edge on $[0,\tau]$ is $0\to1$, with $w_0(u)>0$, $J_{10}(u)=-\dot w_0(u)\ge0$ and other sectors inert. Put $p=\Pr(Q_0=0\mid H)$. There is at most one subsequent native jump. A fresh detector supplies one daughter-production cofactor, one ready site, finite capture fuel and a blank persistent memory. The native jump consumes the cofactor and produces a daughter $X$. Independently of subsequent source evolution, 

$$

 X+A_{\rm ready}+M_{\rm blank}
 \xrightarrow{\ \beta_R\ }D_R+A_{\rm spent}+M_R,\qquad
 X\xrightarrow{\ \beta_M\ }D_L.

$$

 The first arrow includes the supplied capture fuel consumption. The cofactor, fuel, site, pending daughter or reaction remnant, and memory remain in the extended state. Loss writes no record and restores no cofactor. An exhausted production channel leaves the source jump available without another daughter, preserving the stipulated source generator. No exhausted repeat is needed here. For $\beta_R>0$, $\beta_M\ge0$, $k=\beta_R+\beta_M$, the response is <a id="bench:history-response"></a>


$$
F_{\rm det}(v)=\frac{\beta_R}{k}(1-e^{-kv}).
 

$$

Equation (C.1).

 The mean time to capture or loss is $1/k$, as is the mean delay conditional on capture. This model has no additional propagation lag. 



**Proposition C.1 (A one-way finite-delay separator).**

 <a id="bench:history-separator"></a> Assume no competing old daughters. The actual source law conditioned only on $H$, and its emission density, are <a id="bench:history-transport"></a>


$$
\nu_u(0\mid H)=\frac{p}{w_0(0)}w_0(u),\qquad
 f_{\rm emit}(u\mid H)=\frac{p}{w_0(0)}J_{10}(u).
 

$$

Equation (C.2).

 Thus the acquired-record probability and its difference from the equilibrium benchmark for the unchanged wave are <a id="bench:history-record"></a>
<a id="bench:history-gap"></a>


$$
\begin{aligned}P_H(\tau)&=\frac{p}{w_0(0)}
       \int_0^\tau J_{10}(u)F_{\rm det}(\tau-u)\,du,
       \\
 P_H(\tau)-P_{\rm eq}(\tau)&=
 \left(\frac{p}{w_0(0)}-1\right)
 \int_0^\tau J_{10}(u)F_{\rm det}(\tau-u)\,du.
 
\end{aligned}
$$

Equation (C.3, C.4).

 The difference is nonzero if the prefactor is nonzero and positive current overlaps positive response on a set of positive measure. 

 

**Proof.**

Integrating the occupied-source hazard $\lambda_{1\leftarrow0}=-\dot w_0/w_0$ gives survival $w_0(u)/w_0(0)$. This proves [(C.2)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-transport). Condition on the unique possible emission time and multiply its density by the response at its remaining age. For the equilibrium benchmark replace $p$ by $w_0(0)$ and subtract. 

□

 

Here $\nu_u$ averages over later detector outcomes. It is not the posterior additionally conditioned on every subsequent observed null. For [(C.1)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-response), the capture density is 

$$

 f_R(t\mid H)=\int_0^t f_{\rm emit}(u\mid H)
                          \beta_Re^{-k(t-u)}\,du.

$$

 The hazard conditioned on no new record is $f_R(t\mid H)/(1-P_H(t))$; its denominator includes no emission, pending daughter and loss. Multiple daughters or shared sites require the full retained-state filter of Theorem [22.6](/quantum-measurement/monograph/finite-receptor-response-retained-nulls-and-delayed-records#det:delayed-filter). A general signed integrand can cancel, and a propagation delay longer than the observation window can eliminate the overlap required for strict positivity. 

A useful source-transport check takes $\Psi_0=\cos\phi|0\rangle+\sin\phi|1\rangle$ and $H_c=\hbar\omega\sigma_y$. Then 

$$

 \Psi_u=\cos(\phi+\omega u)|0\rangle+\sin(\phi+\omega u)|1\rangle,
 \qquad\lambda_{1\leftarrow0}(u)=2\omega\tan(\phi+\omega u).

$$

 For $\phi=\pi/4$, $p=1$, $\omega u_*=\pi/12$, the wave weight is $1/4$ while the actual probability is $1/2$. During a further $0<\tau<\pi/(6\omega)$, the departure probability from occupied sector 0 is $A_\tau=1-4\cos^2(\pi/3+\omega\tau)$. The two ensemble emission probabilities are $A_\tau/2$ and $A_\tau/4$. Squared unitary entries are not the Bell transition kernel; $1-e^{-2\sqrt3\omega\tau}$ freezes the hazard and is only a short-window approximation. Starting instead at $\phi=\pi/4$, the finite response gives, for $0<\tau<\pi/(4\omega)$, 

$$

 P_H(\tau)-P_{\rm eq}(\tau)\ge
 \omega\cos(2\omega\tau)\frac{\beta_R}{k}
 \left[\tau-\frac{1-e^{-k\tau}}k\right]>0,

$$

 because $J_{10}(u)=\omega\cos(2\omega u)$. Its short-window value is $\omega\beta_R\tau^2/2+O(\tau^3)$. 



<a id="section-C-1-2"></a>

### C.1.2 Generating the first record

 

Prepare <a id="bench:history-initial"></a>


$$
|\Psi(0)\rangle=\sqrt a\,|r,R_r\rangle+\sqrt b\,|1,R_1\rangle,
 \qquad a=\frac23,\quad b=\frac13,\quad
 \langle R_r|R_1\rangle=0,
 

$$

Equation (C.5).

 with normalized references and initial actual equilibrium. Write $\mathcal R_1$ for the first acquired record event, distinct from the reference vector $R_1$. Apply $H_1=\hbar\Omega(|0\rangle\langle r|+|r\rangle\langle0|)\otimes I_R$ until $T_1=\pi/(3\Omega)$. The complete source wave is <a id="bench:history-first-wave"></a>


$$
|\Psi(t)\rangle=
 \sqrt a\cos(\Omega t)|r,R_r\rangle
 -i\sqrt a\sin(\Omega t)|0,R_r\rangle
 +\sqrt b|1,R_1\rangle.
 

$$

Equation (C.6).

 Consequently $J^{(1)}_{0r}=a\Omega\sin(2\Omega t)$ and $\lambda_{0\leftarrow r}=2\Omega\tan(\Omega t)$. Sector 0 is absorbing throughout this monotone first interval. A type-1 detector initially has no daughter and has the response $F_1(v)=\beta_{R,1}(1-e^{-k_1v})/k_1$, where $k_1=\beta_{R,1}+\beta_{M,1}$. Therefore <a id="bench:history-first-record"></a>


$$
\mathcal K=\int_0^{T_1}\Omega\sin(2\Omega s)F_1(T_1-s)\,ds,
 \qquad
 \Pr(\mathcal R_1)=a\mathcal K,\qquad
 \Pr(Q_{T_1}=0\mid\mathcal R_1)=1.
 

$$

Equation (C.7).

 The event $\mathcal R_1$ means acquisition by the fixed time $T_1$, not a later capture of an old daughter. 

For the null define 

$$

 E_1=\int_0^{T_1}\Omega\sin(2\Omega s)e^{-k_1(T_1-s)}\,ds,\qquad
 L_1=\frac{\beta_{M,1}}{k_1}
                 \{\sin^2(\Omega T_1)-E_1\}.

$$

 The first-stage endpoint alternatives have unnormalized weights 

| Actual source | Retained alternative | Probability |
| --- | --- | --- |
| $r$ | No emission; blank memory | $1/6$ |
| $1$ | No eligible emission; blank memory | $1/3$ |
| $0$ | Pending daughter; blank memory | $aE_1$ |
| $0$ | Lost daughter; blank memory | $aL_1$ |
| $0$ | Captured daughter; acquired memory | $a\mathcal K$ |

  They sum to one since $E_1+L_1+\mathcal K=\sin^2(\Omega T_1)$. The first null comprises the first four rows, normalized by $1-a\mathcal K$. Every row retains its apparatus resources and the same stipulated source wave. Pending daughters can still acquire late first records; the acquired memory remains a physical register. In particular, <a id="bench:history-endpoint"></a>


$$
|\Psi(T_1)\rangle=|r\rangle v_r+|0\rangle v_0+|1\rangle v_1,
 \quad v_r=\frac{R_r}{\sqrt6},\quad
 v_0=-\frac{iR_r}{\sqrt2},\quad v_1=\frac{R_1}{\sqrt3}.
 

$$

Equation (C.8).

 The wave weights are $(W_r,W_0,W_1)=(1/6,1/2,1/3)$ even on $\mathcal R_1$, whose actual law is $\delta_0$. Neither the residual $r$ amplitude nor the relative $-i$ phase has been removed. 



<a id="section-C-1-3"></a>

### C.1.3 Three continuations, with finite positive numbers

 

At $T_1$ switch to $H_2=\hbar\omega\sigma_y\otimes I_R$ on 0,1, leaving $r$ inert. With $u=t-T_1$, 

$$

 v_r(u)=v_r,\qquad
 v_0(u)=\cos(\omega u)v_0-\sin(\omega u)v_1,\qquad
 v_1(u)=\sin(\omega u)v_0+\cos(\omega u)v_1.

$$

 For general reference-valued amplitudes, put $c=\operatorname{Re}\langle v_0,v_1\rangle$. Direct differentiation gives 

$$

 W_0(u)=W_0(0)\cos^2(\omega u)+W_1(0)\sin^2(\omega u)
                                      -c\sin(2\omega u),

$$

 

$$

 J^{(2)}_{10}(u)=\omega(W_0(0)-W_1(0))\sin(2\omega u)
                                      +2\omega c\cos(2\omega u).

$$

 For [(C.8)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-endpoint), $c=0$, so <a id="bench:history-second-current"></a>


$$
W_0(u)=\frac12\cos^2(\omega u)+\frac13\sin^2(\omega u),
 \qquad J^{(2)}_{10}(u)=\frac{\omega}{6}\sin(2\omega u).
 

$$

Equation (C.9).

 This current includes the inaccessible reference. Use $0<\tau<\pi/(2\omega)$, so the interval is one-way with finite rates. A fresh type-2 detector with response $F_2$ records only $0\to1$. Its separate site cannot capture type-1 daughters. The first detector, memory and any old daughter persist. The same fixed source schedule therefore also defines first-null continuations, including late type-1 captures, without competition for the second site. At most two monitored native emissions occur in this programme; two finite production cofactors and two finite capture sites suffice. 

Define <a id="bench:history-I2"></a>


$$
I_2=\int_0^\tau\omega\sin(2\omega u)F_2(\tau-u)\,du.
 

$$

Equation (C.10).

 On $\mathcal R_1$, [(C.2)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-transport) gives $\nu_u(0\mid\mathcal R_1)=2W_0(u)$ and hence <a id="bench:history-joint"></a>


$$
\Pr_{\rm marker}(\mathcal R_2\mid\mathcal R_1)=I_2/3,\qquad
 \Pr_{\rm marker}(\mathcal R_1,\mathcal R_2)=a\mathcal K I_2/3.
 

$$

Equation (C.11).

 Here $\mathcal R_2$ means capture by $T_1+\tau$. On this branch the no-second-emission weight is $1-\sin^2(\omega\tau)/3$. Among the emission branches, the pending weight is $\frac13\int_0^\tau\omega\sin(2\omega u)e^{-k_2(\tau-u)}\,du$; the lost and captured weights use the responses $\beta_{M,2}(1-e^{-k_2v})/k_2$ and $F_2(v)$, respectively. The four alternatives sum to one. Thus the second observed null is $1-I_2/3$, including pending and lost daughters. 



| Continuation after the first record | $\Pr(\mathcal R_2\mid\mathcal R_1)$ | Joint probability |
| --- | --- | --- |
| Neutral marker: full wave [(C.8)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-endpoint), actual law $\delta_0$ | $I_2/3$ | $a\mathcal K I_2/3$ |
| Equilibrium replacement for the unchanged full wave: actual law $(1/6,1/2,1/3)$ | $I_2/6$ | $a\mathcal K I_2/6$ |
| New source preparation in $\|0\rangle$: wave weight and actual probability one in sector 0 | $I_2$ | $a\mathcal K I_2$ |

  The last row instead has $w_0(u)=\cos^2(\omega u)$ and $J_{10}(u)=\omega\sin(2\omega u)$. The common joint factor $a\mathcal K$ stipulates the same first stage followed by each replacement on every first-record branch. It does not assert that either replacement has been implemented. The equilibrium replacement is not an ordinary-quantum prediction for the original first apparatus: that claim requires a physical instrument with its actual conditional states. These are three different continuations. 

For generic frequency $g$ and rates $\beta_R,k$, elementary exponential-trigonometric integration gives <a id="bench:history-closed-integral"></a>


$$
\begin{aligned}E(g,k,t)&=\int_0^t g\sin(2gu)e^{-k(t-u)}\,du
 =\frac{g\{k\sin(2gt)-2g\cos(2gt)+2ge^{-kt}\}}{k^2+4g^2},
 \\
 C(g,k,\beta_R,t)&=\frac{\beta_R}{k}
                       \{\sin^2(gt)-E(g,k,t)\}.
 
\end{aligned}
$$

Equation (C.12).

 The second expression is the same integral with the capture response in place of the exponential. In one chosen time unit set $\Omega=\omega=\beta_{R,1}=\beta_{M,1}=\beta_{R,2}=\beta_{M,2}=1$, $T_1=\pi/3$ and $\tau=\pi/4$. Both detectors have positive loss, eventual capture probability $1/2$ and mean resolution delay $1/2$. Then 

$$

 \begin{aligned}
 \mathcal K&=\frac{5-\sqrt3-2e^{-2\pi/3}}{16}
            \simeq0.188853736,\\
 I_2&=\frac{1-e^{-\pi/2}}8\simeq0.099015053,
 \qquad a\mathcal K\simeq0.125902490.
 \end{aligned}

$$

 

| Continuation | Second record, conditional | Both records |
| --- | --- | --- |
| Neutral marker | $0.033005018$ | $0.004155414$ |
| Equilibrium replacement | $0.016502509$ | $0.002077707$ |
| New $\|0\rangle$ preparation | $0.099015053$ | $0.012466242$ |

  The event that both records are acquired within their windows separates the first two programmes by $a\mathcal K I_2/6\simeq0.002077707$ with finite positive delay and loss. For short second windows, $I_2=\beta_{R,2}\omega^2\tau^3/3+O(\tau^4)$, so their conditional difference starts as $\beta_{R,2}\omega^2\tau^3/18+O(\tau^4)$. 



<a id="section-C-1-4"></a>

### C.1.4 The rejected endpoint identification

 

The proposed operators 

$$

 M_R=\sqrt{\mathcal K}|0\rangle\langle r|,\qquad
 M_N=\sqrt{1-\mathcal K}|r\rangle\langle r|
                              +|1\rangle\langle1|

$$

 form an abstract instrument on $\operatorname{span}\{|r\rangle,|1\rangle\}$ and reproduce $a\mathcal K$. They do not reproduce the neutral marker's continuation. Disabling acquisition makes $\mathcal K=0$ and $M_N=I$ on the input subspace, although the source still undergoes [(C.6)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history-first-wave). At finite inefficiency, the actual null additionally retains pending and lost daughters. Removing those states requires a physical recovery of the source and all information-bearing apparatus; agreement of one endpoint effect does not supply it. The preparation in Proposition [33.4](/quantum-measurement/monograph/statistical-alternatives-and-the-preparation-to-record-chain#prep:swap) is a different operation, with its completion time and retained old-state ancilla included before using the new source as the third benchmark. Later preparation cannot change earlier acquired records. 



<a id="section-C-2"></a>

## C.2 Explicit record and loss products: the memory kernel

 <a id="bench:reservoir"></a> 

The product-field construction of [[C02](/quantum-measurement/monograph/bibliography#bib-C02), \S6] supplies a finite or spectral Hamiltonian behind the distinction between pending excitation, record products and hidden loss. It is a different realization from the directed contact in [(13.2)](/quantum-measurement/monograph/a-common-directed-interaction-for-timing-continuation-and-acquisition#mat:chiralH). The calculation below retains the products; eliminating their amplitudes is an algebraic reduction, not a physical deletion or an actualization rule. 



<a id="paragraph-5"></a>

#### A complete Hamiltonian on the admitted sector.

 Fix a real coupling $g\ge0$ and orthogonal states 

$$

 |0\rangle=|r,A_0,\mathrm{vac},M_0\rangle,\qquad
 |1\rangle=|q,A^*,\mathrm{vac},M_0\rangle,
 \qquad |a,j\rangle=|q,A_0,a_j,M_0\rangle,
 \quad a\in\{R,L\}.

$$

 Here $M_0$ is an unchanged blank memory. The $R$ and $L$ products occupy orthogonal field sectors, both orthogonal to the vacuum. For finitely many modes, the entire Hamiltonian on their span is <a id="bench:reservoir-finiteH"></a>


$$
\frac{H_N}{\hbar}
 =g(|1\rangle\langle0|+|0\rangle\langle1|)
 +\sum_{a,j}\omega_{aj}|a,j\rangle\langle a,j|
 +\sum_{a,j}\bigl(\kappa_{aj}|a,j\rangle\langle1|
                  +\overline{\kappa}_{aj}|1\rangle\langle a,j|\bigr).
 

$$

Equation (C.13).

 The real $\omega_{aj}$ are detunings in a rotating frame; ready and excited energies have been set to zero. There are no further interactions in this model. This subspace is invariant; an unused orthogonal complement may be given any specified decoupled self-adjoint Hamiltonian. 

For a continuum replace each mode space by $L^2(I_a,d\omega)$, with $I_a\subseteq\mathbb R$, and assume $\kappa_a\in L^2(I_a)$. The complete Hilbert space and Hamiltonian are then <a id="bench:reservoir-continuumH"></a>


$$
\begin{aligned}\mathcal H&=\mathbb C^2\oplus L^2(I_R)\oplus L^2(I_L),\\
 \frac{H}{\hbar}
 &=g(|1\rangle\langle0|+|0\rangle\langle1|)
   +\sum_{a=R,L}\int_{I_a}\omega|a,\omega\rangle
                          \langle a,\omega|\,d\omega\\
 &\quad+\sum_{a=R,L}\int_{I_a}
  \bigl(\kappa_a(\omega)|a,\omega\rangle\langle1|
       +\overline{\kappa_a(\omega)}|1\rangle\langle a,\omega|\bigr)
       \,d\omega .
 
\end{aligned}
$$

Equation (C.14).

 The multiplication operator by $\omega$ has its usual domain $\{f:\omega f\in L^2\}$. The displayed coupling is a bounded finite-rank perturbation, so this specifies a self-adjoint Hamiltonian and unitary evolution. The continuum kets denote the corresponding spectral representation, not normalizable additional vectors. 

Start with $|0\rangle$ and empty product sectors. In the finite model write <a id="bench:reservoir-wave"></a>


$$
|\Psi(t)\rangle=x(t)|0\rangle+y(t)|1\rangle
                  +\sum_{a,j}z_{aj}(t)|a,j\rangle,
 \quad x(0)=1,\quad y(0)=z_{aj}(0)=0.
 

$$

Equation (C.15).

 The continuum expression replaces the sums by integrals. Schrödinger's equation gives 

$$

 \dot x=-igy,\qquad
 \dot y=-igx-i\sum_{a,j}\overline{\kappa}_{aj}z_{aj},\qquad
 \dot z_{aj}=-i\omega_{aj}z_{aj}-i\kappa_{aj}y.

$$

 Solving the last equation with its stated initial condition yields <a id="bench:reservoir-kernel"></a>


$$
z_{aj}(t)=-i\kappa_{aj}\int_0^t
            e^{-i\omega_{aj}(t-s)}y(s)\,ds,
 \qquad
 \dot y(t)=-igx(t)-\int_0^t\Sigma(t-s)y(s)\,ds,
 

$$

Equation (C.16).

 where <a id="bench:reservoir-spectrum"></a>


$$
\Sigma(v)=\sum_{a,j}|\kappa_{aj}|^2e^{-i\omega_{aj}v},
 \qquad
 \Sigma(v)=\sum_{a=R,L}\int_{I_a}|\kappa_a(\omega)|^2
                                      e^{-i\omega v}\,d\omega
 \quad\hbox{in the continuum}.
 

$$

Equation (C.17).

 The continuum formula follows by the same variation-of-constants argument. The $L^2$ coupling assumption makes $|\kappa_a|^2$ integrable and justifies these finite-time integrals. 

Put $p_a(t)=\sum_j|z_{aj}(t)|^2$, or its continuum integral. Unitarity gives $|x|^2+|y|^2+p_R+p_L=1$. With $\Sigma_a$ denoting one channel's kernel, its exact flux is <a id="bench:reservoir-flux"></a>


$$
\dot p_a(t)=2\operatorname{Re}\left[
  \overline{y(t)}\int_0^t\Sigma_a(t-s)y(s)\,ds\right].
 

$$

Equation (C.18).

 It need not be positive: products can return. A finite Hamiltonian has recurrent unitary evolution, and neither an exponential survival law nor an irreversible acquisition clock follows from [(C.16)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:reservoir-kernel). 



<a id="paragraph-6"></a>

#### The retained branch and the operational null.

 Let $|Z_a(t)\rangle$ denote the complete product wave in channel $a$, including its mode amplitudes, and suppress the unchanged factor $M_0$. The record-product projection is exactly <a id="bench:reservoir-recordbranch"></a>


$$
\Pi_R\Psi(t)=|q,A_0\rangle\otimes|Z_R(t)\rangle.
 

$$

Equation (C.19).

 Thus an admitted physical configuration readout of this sector, together with the complete equilibrium/equivariance premises, selects source factor $q$ at this time. The unitary Hamiltonian alone does not select an actual sector. It also has not written $M_0$: product occupation is not automatically a protected acquired memory. Neither this endpoint factorization nor its label guarantees source factor $q$ after later source interactions; their full continuation must be propagated as qualified below. 

For clarity, now admit an endpoint readout at time $t$ that resolves the $R$ sector against its complement. This access premise defines the following “no readable record” outcome $N$; it does not assert that no record-product entry ever occurred. Its complete unnormalized projected component is <a id="bench:reservoir-nullcomplete"></a>


$$
|\Phi_N(t)\rangle
 =|\phi_0(t)\rangle\otimes|\mathrm{vac}\rangle
       +|q,A_0\rangle\otimes|Z_L(t)\rangle,
 \qquad |\phi_0(t)\rangle=x(t)|r,A_0\rangle+y(t)|q,A^*\rangle.
 

$$

Equation (C.20).

 Tracing the unobserved field gives the generally mixed source–receptor state <a id="bench:reservoir-nullmixed"></a>


$$
\widetilde\rho_N^{SA}(t)
 =|\phi_0(t)\rangle\langle\phi_0(t)|
       +p_L(t)|q,A_0\rangle\langle q,A_0|,
 \qquad
 \rho_N^{SA}(t)=\frac{\widetilde\rho_N^{SA}(t)}{1-p_R(t)}
 \quad (p_R(t)<1).
 

$$

Equation (C.21).

 The vacuum–loss cross terms vanish in this partial trace by field orthogonality; they remain in [(C.20)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:reservoir-nullcomplete). These projected components are autonomous conditional instrument states only with an admitted projective extraction or dynamically separated physical pointer outcomes. Conditioning an actual configuration alone does not remove the unoccupied global wave. If $R$ and $N$ can later recombine, propagate the full original wave together with the actual conditioning. Even within a separated $N$ continuation, future return of the hidden loss field requires the complete component [(C.20)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:reservoir-nullcomplete), not merely its partial trace. The pure no-product amplitude $\phi_0$ cannot replace an operational null containing hidden loss. A null defined by absence of retained memory acquisition is a different event and requires the corresponding memory dynamics. 



<a id="paragraph-7"></a>

#### A controlled convolution limit, with its scope.

 An explicit continuum idealization makes one Markov limit provable. Take $I_R=I_L=\mathbb R$, bandwidth $\Lambda>0$, and rates $\gamma_R=\Gamma\ge0$, $\gamma_L=\ell\ge0$, with <a id="bench:reservoir-lorentzian"></a>


$$
|\kappa_{a,\Lambda}(\omega)|^2
   =\frac{\gamma_a}{2\pi}\frac{\Lambda^2}{\omega^2+\Lambda^2},
 \qquad
 \Sigma_{a,\Lambda}(v)=\frac{\gamma_a\Lambda}{2}e^{-\Lambda v}
 \quad(v\ge0).
 

$$

Equation (C.22).

 The second identity is the Fourier transform of the displayed Lorentzian. Every finite $\Lambda$ has an $L^2$ form factor and the self-adjoint Hamiltonian above. Its two-sided detuning spectrum is unbounded below in this rotating-frame description. It is an explicit wide-band mathematical idealization, not a lower-bounded material bath construction. 

Let $k=\Gamma+\ell$ and let $y_\Lambda$ be the exact continuum solution. Norm conservation and the nonnegative exponential kernel give $|\dot y_\Lambda|\le g+k/2$. Integration by parts, using $y_\Lambda(0)=0$, therefore proves <a id="bench:reservoir-residual"></a>


$$
\begin{aligned}r_{a,\Lambda}(t)
 &:=\int_0^t\Sigma_{a,\Lambda}(t-s)y_\Lambda(s)\,ds
                          -\frac{\gamma_a}{2}y_\Lambda(t)\\
 &=-\frac{\gamma_a}{2}\int_0^t
              e^{-\Lambda(t-s)}\dot y_\Lambda(s)\,ds,
 \qquad
 |r_{a,\Lambda}(t)|\le
       \frac{\gamma_a(g+k/2)}{2\Lambda}.
 
\end{aligned}
$$

Equation (C.23).

 Let $(\bar x,\bar y)$ solve the Markov equations 

$$

 \dot{\bar x}=-ig\bar y,\qquad
 \dot{\bar y}=-ig\bar x-\frac{k}{2}\bar y,
 \qquad (\bar x(0),\bar y(0))=(1,0).

$$

 Their $2\times2$ propagator is a contraction since the squared norm has derivative $-k|\bar y|^2$. Duhamel's formula and [(C.23)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:reservoir-residual) imply the finite-horizon bound <a id="bench:reservoir-markovbound"></a>


$$
\sup_{0\le t\le T}
 \left\|(x_\Lambda(t),y_\Lambda(t))-(\bar x(t),\bar y(t))\right\|_2
 \le \frac{kT(g+k/2)}{2\Lambda}.
 

$$

Equation (C.24).

 This controls the two no-product amplitudes. It does not compare complete emitted field states or derive a microscopic event generator. For other spectra, a claimed limit 

$$

 \int_0^t\Sigma(t-s)y(s)\,ds
       \longrightarrow \left(\frac{\Gamma+\ell}{2}+i\Delta\right)y(t)

$$

 requires its own approximation theorem or an explicit premise controlling the integrated convolution residual. The same contraction argument then applies when $\Delta$ is real. Stating the convolution itself fixes the normalization without a half-delta convention. 



<a id="section-C-3"></a>

## C.3 Weak terminal protection of the three-state recorder

 <a id="bench:protection"></a> 

The three-state calculation behind [(25.18)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:threebound) has a useful quantitative protection benchmark [[C02](/quantum-measurement/monograph/bibliography#bib-C02), \S12]. Let 

$$

 e=|1,M_0\rangle,\qquad p=|R,M_0\rangle,\qquad m=|R,M_1\rangle,
 \qquad
 \frac{H_3}{\hbar}
 =g(|p\rangle\langle e|+|e\rangle\langle p|)
  +\chi(|m\rangle\langle p|+|p\rangle\langle m|),

$$

 where $g,\chi\ge0$ and $\Omega_3=\sqrt{g^2+\chi^2}>0$. Starting from $e$, the unprotected amplitudes are <a id="bench:protection-unperturbed"></a>


$$
a_0(t)=\frac{\chi^2+g^2\cos\Omega_3t}{\Omega_3^2},\qquad
 b_0(t)=-i\frac{g}{\Omega_3}\sin\Omega_3t,\qquad
 c_0(t)=\frac{g\chi}{\Omega_3^2}(\cos\Omega_3t-1).
 

$$

Equation (C.25).

 

Admit an additional absorbing protection instrument with jump operator $C=\sqrt\gamma|M\rangle\langle m|$, $\gamma\ge0$, where $M$ is an orthogonal terminal state with no outgoing channel. This stochastic instrument, including its conditional wave law, is a new primitive in this benchmark. It is not derived by merely adding an unitarily coupled product mode, and no claim is made here to derive it from the preceding reservoir Hamiltonian. 

The no-protection wave $v_\gamma=a_\gamma e+b_\gamma p+c_\gamma m$ obeys <a id="bench:protection-null"></a>


$$
\dot a_\gamma=-igb_\gamma,\qquad
 \dot b_\gamma=-iga_\gamma-i\chi c_\gamma,\qquad
 \dot c_\gamma=-i\chi b_\gamma-\frac\gamma2c_\gamma,
 \qquad v_\gamma(0)=e.
 

$$

Equation (C.26).

 The admitted instrument gives exactly <a id="bench:protection-exact"></a>


$$
P_M(t)=\gamma\int_0^t|c_\gamma(s)|^2\,ds
       =1-\|v_\gamma(t)\|^2,
 \qquad
 \rho(t)=|v_\gamma(t)\rangle\langle v_\gamma(t)|
                          +P_M(t)|M\rangle\langle M|.
 

$$

Equation (C.27).

 The norm identity follows directly from [(C.26)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:protection-null). It displays both the unfinished coherent branch and the terminal branch. When interpreted by actual local clocks, the same expression requires matching killed occupations and the compatible damped wave law; the clock $\gamma\mathbf1_{\{Q=m\}}$ alone does not establish that compatibility. 



**Proposition C.2 (One-cycle protection with a relative error bound).**

 <a id="bench:protection-bound"></a> Put $T_3=2\pi/\Omega_3$ and $P_0=3\pi\gamma g^2\chi^2/\Omega_3^5$. For the admitted absorbing instrument, <a id="bench:protection-relative"></a>


$$
P_M(T_3)=P_0+R,\qquad
 |R|\le P_0\left[
  \frac{2\pi}{3}\frac\gamma{\Omega_3}
  +\left(\frac{2\pi^2}{9}+\frac5{12}\right)
                        \left(\frac\gamma{\Omega_3}\right)^2\right].
 

$$

Equation (C.28).

 The bound holds for every $\gamma\ge0$; its first-order use requires $\gamma/\Omega_3\ll1$. If $\gamma g\chi=0$, both probabilities in the comparison vanish exactly. 

 



**Proof.**

Write $B=g\chi/\Omega_3^2$ and $V_\gamma(t)=\exp[(-iH_3/\hbar-\gamma|m\rangle\langle m|/2)t]$. The norm derivative in [(C.27)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:protection-exact), applied to any initial vector, proves $\|V_\gamma(t)\|\le1$. Duhamel's formula in the order using the damped propagator on the left gives 

$$

 c_\gamma(t)-c_0(t)
 =-\frac\gamma2\int_0^t
     \langle m|V_\gamma(t-s)|m\rangle c_0(s)\,ds.

$$

 Since $|c_0(s)|=B(1-\cos\Omega_3s)$, it follows that <a id="bench:protection-duhamel"></a>


$$
|c_\gamma(t)-c_0(t)|\le\frac{\gamma B}{2}F(t),
 \qquad F(t)=t-\frac{\sin\Omega_3t}{\Omega_3}.
 

$$

Equation (C.29).

 In particular this estimate retains the factor $B$ suppressed by strong memory coupling. The unprotected integral is 

$$

 \gamma\int_0^{T_3}|c_0(t)|^2\,dt
  =\frac{\gamma B^2}{\Omega_3}
        \int_0^{2\pi}(1-\cos u)^2\,du
  =\frac{3\pi\gamma B^2}{\Omega_3}=P_0.

$$

 Using $\bigl||c_\gamma|^2-|c_0|^2\bigr|
\le2|c_0||c_\gamma-c_0|+|c_\gamma-c_0|^2$ and [(C.29)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:protection-duhamel) gives 

$$

 |R|\le\frac{\gamma^2B^2T_3^2}{2}
       +\frac{\gamma^3B^2}{4}
            \left(\frac{T_3^3}{3}+\frac{5T_3}{2\Omega_3^2}\right).

$$

 Here the first integral is $\int_0^{T_3}(1-\cos\Omega_3t)F(t)\,dt=T_3^2/2$, since $F'=1-\cos\Omega_3t$, and direct integration gives $\int_0^{T_3}F(t)^2dt=T_3^3/3+5T_3/(2\Omega_3^2)$. Substitution of $T_3=2\pi/\Omega_3$ proves [(C.28)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:protection-relative), including its zero cases without division by $P_0$. 

□

 

For fixed $g>0$ and $\gamma>0$, the proposition proves the genuine large-$\chi$ asymptotic <a id="bench:protection-asymptotic"></a>


$$
P_M(2\pi/\Omega_3)
 =\frac{3\pi\gamma g^2}{\chi^3}
   \left[1+O\!\left(\frac\gamma\chi+\frac{g^2}{\chi^2}\right)\right],
 \qquad \chi\longrightarrow\infty.
 

$$

Equation (C.30).

 The absolute damping error is $O(\chi^{-4})$ at these fixed parameters, so it cannot overwhelm the $\chi^{-3}$ leading term. This is a one-undamped-cycle horizon, which itself decreases as the coupling increases. It is neither an exact use of $c_0$ in the protected model nor a uniform assertion over arbitrary simultaneous scalings of protection, coupling and observation time. The trapping tradeoff in [(25.19)](/quantum-measurement/monograph/configuration-records-and-coherent-continuation#cfg:trap) remains conditional on its separate architecture premises. 



<a id="section-C-4"></a>

## C.4 Missed absorption and a later rotated probe

 <a id="bench:inefficient"></a> 

This finite scalar benchmark [[C01](/quantum-measurement/monograph/bibliography#bib-C01)] illustrates why a null must retain unobserved transitions. It assumes the amplitude-damping jump instrument; it does not derive its statistical law. Let $L=\sqrt\gamma\,|g\rangle\langle e|$, let $0<\eta<1$ be the fixed recording efficiency, and start in $|e\rangle$. A jump is recorded with probability $\eta$ or transferred to a distinct unobserved loss register with probability $1-\eta$. No further source drive acts during an exposure. All recording sites are fresh and loss products cannot return during the specified two-exposure test. 

Put $u=e^{-\gamma T}$. The no-jump, missed-jump and recorded-jump contributions after duration $T$ are respectively 

$$

 u|e\rangle\langle e|,\qquad
 (1-\eta)(1-u)|g\rangle\langle g|,\qquad
 \eta(1-u)|g\rangle\langle g|.

$$

 These follow by integrating the first-decay density $\gamma e^{-\gamma t}$ and assigning the two admitted acquisition channels. Hence the unnormalized no-readable-record source state is <a id="bench:inefficient-null"></a>


$$
\widetilde\rho_{\varnothing}
 =u|e\rangle\langle e|+(1-\eta)(1-u)|g\rangle\langle g|,
 \qquad p_{\varnothing}=1-\eta(1-u).
 

$$

Equation (C.31).

 In the complete retained description the two null contributions carry different vacuum/loss flags, and a returning loss register must not be discarded. Equation [(C.31)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:inefficient-null) is their source marginal. 

Next use a supplied unitary with $U|e\rangle=c|e\rangle+s|g\rangle$ and $U|g\rangle=-s|e\rangle+c|g\rangle$, where $c,s$ are real and $c^2+s^2=1$. The unnormalized excited weight becomes $uc^2+(1-\eta)(1-u)s^2$. A second fresh exposure of duration $\tau$ therefore gives the joint history probability <a id="bench:inefficient-second"></a>


$$
P(\varnothing_1,R_2)=\eta(1-e^{-\gamma\tau})
 \bigl[uc^2+(1-\eta)(1-u)s^2\bigr].
 

$$

Equation (C.32).

 Division by $p_{\varnothing}$ gives its conditional version; the second null has joint mass $p_{\varnothing}-P(\varnothing_1,R_2)$ and retains both old loss and new unresolved/missed branches. For $c=0$, the entire second-click contribution comes from the formerly missed decays. Replacing the first null by an attenuated $|e\rangle$ would predict zero instead. 



<a id="section-C-5"></a>

## C.5 A binary pulse with correct endpoints and excess actual jumps

 <a id="bench:binary-surplus"></a> 

The stationary examples in Chapter [14](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:current-chapter) already prove the stronger general distinctions. The following nonstationary two-state calculation preserves a useful exact checkpoint test [[C02](/quantum-measurement/monograph/bibliography#bib-C02), [C03](/quantum-measurement/monograph/bibliography#bib-C03)]. Let $H=\hbar\chi\sigma_x$, $\chi>0$, and start with wave and actual configuration $|0\rangle$. Up to $T=\pi/(2\chi)$, 

$$

 \psi_t=\cos(\chi t)|0\rangle-i\sin(\chi t)|1\rangle,
 \qquad J_{10}(t)=\chi\sin(2\chi t)\geq0.

$$

 Choose a fixed surplus parameter $\zeta\geq0$ and set $K_{01}=\zeta J_{10}$. On the open interval $(0,T)$ the Markov rates are <a id="bench:binary-rates"></a>


$$
\lambda_{10}=2(1+\zeta)\chi\tan(\chi t),\qquad
 \lambda_{01}=2\zeta\chi\cot(\chi t).
 

$$

Equation (C.33).

 Their forward equation is solved by $p_1(t)=\sin^2(\chi t)$: the net inflow is $(1+\zeta)J_{10}-\zeta J_{10}=J_{10}=\dot p_1$. Despite the nodal conditional rates, the occupation-weighted total activity is $(1+2\zeta)J_{10}$, and <a id="bench:binary-count"></a>


$$
\mathbb E N_{[0,T]}=1+2\zeta<\infty.
 

$$

Equation (C.34).

 For completeness, construct from the definite sector $0$ at time zero using its locally integrable outward rate, then use the regular jump construction between each pair of interior times. The first jump occurs strictly after zero, so there is no accumulation of jumps at zero. The difference of two solutions of the scalar forward equation on $(0,T)$ is $C\cos^{2(1+\zeta)}(\chi t)\sin^{-2\zeta}(\chi t)$. Boundedness at zero forces $C=0$ when $\zeta>0$, and the initial value does so when $\zeta=0$. Thus the displayed population solution is the entrance law of this construction. There is no interior explosion because the rates are bounded on each compact subinterval. Taking limits in the expected compensated jump counts gives [(C.34)](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:binary-count); finite expected activity excludes infinitely many jumps accumulating at $T$. The limiting state at $T$ is $1$ almost surely. Rates assigned to unoccupied endpoint nodes have no effect. 

Until the first jump the actual state is $0$, so the exact survival is <a id="bench:binary-first"></a>


$$
P(\tau_1>t)=\exp\!\left[-\int_0^t
                 2(1+\zeta)\chi\tan(\chi s)ds\right]
             =\cos^{2(1+\zeta)}(\chi t).
 

$$

Equation (C.35).

 Thus the endpoint law is independent of $\zeta$ while the first event and the expected number of events are not. These are native path predictions. Access to that first-event time still requires a physical reporter; an endpoint pointer alone does not measure it. Conversely, an admitted neutral reporter with finite positive response must be treated using the delay and competition calculation in Section [C.1](/quantum-measurement/monograph/appendix-c-additional-finite-model-benchmarks-and-rejected-shortcuts#bench:history), rather than identifying its latch with the native jump.
