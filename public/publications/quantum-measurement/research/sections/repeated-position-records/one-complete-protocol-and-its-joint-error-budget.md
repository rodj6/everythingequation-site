# Section 9: One complete protocol and its joint error budget

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-9"></a>

## 9 One complete protocol and its joint error budget

 <a id="p2r:sec:composition"></a>

Fix a deterministic sequence of operations. In cycle $j$: 

1. Apply the duration-one smooth inverse baker to $(x,y)$.

2. Apply the scalar loader to $x$, of duration $T_L$.

3. Apply the smooth copy gate to $(x,z_j)$, of duration $2\pi$.

4. Apply the exact reset to $(x,r_j)$, of duration $2\pi$.

 Each written receiver is held by $H_A$ from its copy endpoint through the common final time. Every used reset archive remains in the rest space. Add spatially constant time gauges where needed to match oscillator zero-energy conventions between modules; these change only a common wave phase and no current or record. All nonconstant couplings have the time regularity stated for their respective modules. In particular the reset's endpoint spring is zero.



**Theorem 9.1 (Complete repeated own-record event).**

 <a id="p2r:thm:records"></a> Assume the full entrance bank [(5.1)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:bank), original cap [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap), the baker compiler, loader, smooth scalar gate and reset just specified. Require [(8.1)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:spectator) for every written receiver during all later operations, and a common final time no more than $\Theta$ after any copy endpoint. Let $s_j$ be the $j$th binary digit of the actual entrance archive quantile. Then <a id="p2r:eq:recordbound"></a>


$$
\begin{aligned}&\mu_0\{\text{some receiver }z_j\text{ is not in its }s_j
       \text{ region at copying, or leaves it before the final time}\}
 \\
 &\qquad\leq nC\{\beta_h+F_{\rm copy}
                         +F_{\rm ch}(\Theta)+F_{\rm eh}(\Theta)\}.
 
\end{aligned}
$$

Equation (9.1).

 The event contains all $n$ records and their complete held histories. No actual scratch freshness, independent receiver population, actual configuration swap, or discarded reset archive is assumed. 

 

**Proof.**

We first verify compatibility of the quantum stocks by induction, without an assertion about actual populations. Initially the scratch and archive are the product Gaussian. The compact compiler keeps that known wave stationary while implementing its nonzero complete current. The loader changes only the scratch factor to $R_A$. The copy gate acts on that factor and the unused receiver Gaussian. It may entangle them. The reset then applies [(7.4)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:resetoperator) with the still unused reset Gaussian, putting every scratch correlation into $r_j$ and restoring the exact factor $\varphi(x)$. The archive $y$ remains its stationary Gaussian factor during loader, copy and reset. All unused banks remain their original quantum factors. Thus the next inverse baker has exactly the required active wave.

Equivariance transports [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap) relative to the true full wave at every entrance. Since the active inverse-baker reference is exactly product Gaussian, its exceptional set [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) has unconditional actual probability at most $C\beta_h$. This assertion is made on the original unselected law. It does not condition on earlier good events. Up to the first such exception, deterministic digit arithmetic identifies every exposed scratch sign with the next initial archive digit, independently of each reset's actual scratch position. The loader preserves that sign.

For each copy, Proposition [6.3](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:prop:copy) compares the receiver with its own true entry scratch sign. For each subsequent hold, Proposition [8.1](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:prop:hold) bounds every later boundary crossing, including crossings during later baker, loader, gate and reset modules. A union of these unconditional events proves [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound). Earlier receivers, reset archives and the entire rest wave were retained in each application, so there is no deletion or postselection hidden in this union. 

□



If a previous warmup supplied the archive/history relation with failure $\varepsilon_{\rm hist}$, reverse the register names as above and add $\varepsilon_{\rm hist}$ to [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound). The prominent row below begins with the actual entrance archive digits; it does not already include this separate earlier-history error.

Likewise, if a distinct untouched writer $w$ previously obeyed 

$$

 \operatorname{TV}\!\left(\mu_{w,N},\Gamma_w\otimes\mu_N\right)
       \leq\delta

$$

 with the *whole original bank* in $N$, the same $\delta$ survives this nuisance-only protocol by data processing. For a deterministic map $T$ on $N$, the comparison pushes forward to $\Gamma_w\otimes T_\#\mu_N$, its actual new nuisance marginal. This argument remains valid on failed decoder paths. It requires the physical full-current dynamics really to leave the writer untouched. It does not add an omitted positional reference after the premise was proved.



**Corollary 9.2 (The forty-four-record finite row).**

 <a id="p2r:cor:n44"></a> For <a id="p2r:eq:row"></a>


$$

 n=44,\quad C=10,\quad h=10^{-10},\quad A=40,\quad
 \varepsilon=10^{-3},\quad T_L=200,\quad\Theta=10000,

$$

Equation (9.2).

 the complete joint record failure in [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound) is strictly below $2.641\cdot10^{-7}$. The forty-four complete cycles take $44(201+4\pi)<10000$ time units, leaving a positive final hold. 

 

**Proof.**

The loader maximum speed is $35A/(16T_L)=7/16<1/\sqrt2$, so its common-domain condition holds. The exact strip contribution is 

$$

 440(6\cdot10^{-10}-8\cdot10^{-20})
             =2.639999999648\cdot10^{-7}.

$$

 The remaining contribution is evaluated from [(6.4)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:constants)–[(8.3)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holderror), including the larger spectator-safe hold coefficient $100(A+1)^2$. All exponent arguments and polynomial factors are rational. For $q\geq0$ and integer $N$, 

$$

 e^{-q}\leq
   \left(\sum_{k=0}^Nq^k/k!\right)^{-1}.

$$

 For $0\leq q<N+2$ the positive exponential has the upper bound 

$$

 e^q\leq\sum_{k=0}^Nq^k/k!+
       \frac{q^{N+1}}{(N+1)!}\frac1{1-q/(N+2)}.

$$

 Use the first formula with $N\geq300+4\lfloor q\rfloor$ and the second with $q=8,N=160$. Direct rational substitution gives $B_A<8.745\cdot10^{-48}$ and $h_g<5.214\cdot10^{-47}$, with the following outward-rounded fees before multiplication by $nC=440$: 

$$

\begin{array}{c|c@{\qquad}c|c}
 \text{fee}&\text{upper bound}&\text{fee}&\text{upper bound}\\ \hline
 F_{\rm cg}&1.928\cdot10^{-22}&F_{\rm eg}&1.380\cdot10^{-37}\\
 B_{\rm end}&1.287\cdot10^{-57}&E_{\rm end}&2.606\cdot10^{-50}\\
 F_{\rm ch}&2.088\cdot10^{-49}&F_{\rm eh}&5.560\cdot10^{-32}
\end{array}

$$

 In particular 

$$

 440\{F_{\rm copy}+F_{\rm ch}(10000)+F_{\rm eh}(10000)\}
                  <9\cdot10^{-20}.

$$

 All quantities in this enclosure are specified by the formulas above; adding the strip contribution and the displayed residual bound proves the stated strict ceiling. Finally $\pi<22/7$ gives $44(201+4\pi)<44(201+88/7)<10000$. 

□



This row is a finite mathematical result for the prescribed complete effective currents and exact controls. The different receivers provide concrete separated position records under that parent. A finite material spring/source realization, charged or Pauli-current embedding, trap and support control, the full original quantum-stock and actual-law warrant, and physical readout are additional transfer problems. In particular, a bare Coulomb interaction at finite separation does not have the reset's exactly zero endpoint spring; its transverse cross term can also move the same carrier's archive. Neither term is covered by renaming the longitudinal scalar interaction. The calibration results below retain these distinctions and do not silently amend the exact-control row.
