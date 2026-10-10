# Section 6: Robustness under complete physical map errors

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-6"></a>

## 6 Robustness under complete physical map errors

 <a id="p1p:sec:robustness"></a>

The exact Gaussian parent supplies the complete map of Theorem [3.1](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:thm:map). A replacement parent must control its complete configuration transport, including sources, clocks and any archive coordinates that cease to be stationary. The following results state what such a control implies for the admitted actual laws.



**Lemma 6.1 (Reference error and actual density).**

<a id="p1p:lem:QV"></a> Let $K$ be a measurable map of the unit cube that fixes all but $k$ coordinates. Suppose 

$$

 {\operatorname{TV}}(K_\#\lambda,\lambda)\leq e_{\rm ref},
 \qquad |K_i(u)-u_i|\leq\delta

$$

 in each active direction outside a set of reference volume $\beta$. For a nonnegative subdensity $h\leq C$ with active variation $V$, <a id="p1p:eq:QV"></a>


$$

 {\operatorname{TV}}(K_\#(h\lambda),h\lambda)
 \leq\frac{V}{2N}+C\{e_{\rm ref}+kN\delta+\beta/2\}.

$$

Equation (6.1).

 No bijectivity or reference preservation of $K$ is required. 

 

**Proof.**

Let $g=P_Nh$ use the $N$-cell grid in the active directions. The approximation costs before and after pushforward total at most $V/(2N)$. There is an exact signed-measure decomposition <a id="p1p:eq:decomposition"></a>


$$

 K_\#(g\lambda)-g\lambda
 =K_\#[(g-g\circ K)\lambda]+g(K_\#\lambda-\lambda).

$$

Equation (6.2).

 Here the last multiplication is at the output coordinate. The first half-variation is at most $\frac12\int|g-g\circ K|d\lambda$. The integrand vanishes except on the bad set and grid-crossing strips, of total volume at most $\beta+2kN\delta$. It is at most $C$ there. The second half-variation is at most $Ce_{\rm ref}$. This proves [(6.1)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:QV) even for merging maps. 

□



For two conservative guidance endpoint maps $\mathcal F_0,\mathcal F$ on the same complete configuration space and with the same entrance reference, take $K=\mathcal F_0^{-1}\mathcal F$ in entrance reference coordinates. The ideal inverse must be defined almost everywhere on the physical output, including any leakage. If it is a common-space bijection on that support, equivariance and invariance of TV under bijective coordinates give 

$$

 e_{\rm ref}={\operatorname{TV}}((\mathcal F)_\#\lambda,(\mathcal F_0)_\#\lambda)
 ={\operatorname{TV}}(\rho_{\rm phys},\rho_0).

$$

 For normalized complete endpoint waves, <a id="p1p:eq:waveReference"></a>


$$

 e_{\rm ref}\leq\|\Psi-\Psi_0\|_2.

$$

Equation (6.3).

 Indeed $||\Psi|^2-|\Psi_0|^2|\leq
(|\Psi|+|\Psi_0|)|\Psi-\Psi_0|$ and Cauchy give the bound after division by two. This controls reference mass transport. The displacement and exceptional-set inputs to Lemma [6.1](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:lem:QV) still concern the true complete maps and require their own estimates.



<a id="section-6-1"></a>

### 6.1 Full-dimensional concentration from physical scores





**Lemma 6.2 (A concentration coefficient for arbitrary external memory).**

 <a id="p1p:lem:concentration"></a> Let $d\geq2$, $p=d/(d-1)$, and let $h_x$ be the boxed conditional actual density in physical reference quantiles. Write its mass and variations as $m_x\leq1$ and $V_{i,x}$, and define <a id="p1p:eq:Bcoefficient"></a>


$$

 B_x=m_x+\frac1d\sum_i V_{i,x}.

$$

Equation (6.4).

 Then <a id="p1p:eq:Lp"></a>


$$

 \|h_x\|_{L^p(\lambda)}\leq
 \prod_i(m_x+V_{i,x})^{1/d}\leq B_x.

$$

Equation (6.5).

 Under a common physical cutoff $R$ and the averaged complete score bound $\sum_iJ_i\leq J$, <a id="p1p:eq:B2"></a>


$$

 \|B_x\|_{L^2(\mu_X)}\leq
 B_2:=1+\frac{D_R}{\sqrt d}\{\sqrt J+\sqrt{J+2d}\}.

$$

Equation (6.6).

 

 

**Proof.**

For a nonnegative BV cube function define 

$$

 A_i(u_{-i})=\int_0^1h(u)du_i+{\operatorname{Var}}_i h(\cdot,u_{-i}).

$$

 The slice inequality gives $h\leq A_i$ simultaneously almost everywhere. The product integration inequality <a id="p1p:eq:productHolder"></a>


$$

 \int\prod_{i=1}^d A_i(u_{-i})^{1/(d-1)}du
 \leq\prod_{i=1}^d\left(\int A_i\right)^{1/(d-1)}

$$

Equation (6.7).

 follows by induction. For $d=2$ it is Fubini. For $d>2$, integrate $u_d$ first and apply Hölder to the $d-1$ factors depending on it. Denote their integrals by $F_i$, $i<d$. On the remaining coordinates separate $A_d^{1/(d-1)}$ by Hölder with exponents $d-1$ and $(d-1)/(d-2)$, and apply the dimension-$d-1$ inequality to the $F_i$. This yields precisely [(6.7)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:productHolder). Multiplying the bounds $h\leq A_i$, integrating, and raising to power $(d-1)/d$ proves the first part of [(6.5)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:Lp). The second is the arithmetic–geometric mean. BV approximation preserves these bounds.

Conditionally on $X=x$, Lemma [5.1](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:lem:physicalBV) gives 

$$

 \sum_iV_{i,x}\leq D_R\sqrt d
 \{\sqrt{J_x}+\sqrt{J_x+2d}\},\qquad J_x=\sum_iJ_{i,x}.

$$

 Apply Minkowski in $L^2(\mu_X)$, use $m_x\leq1$ and $\int J_xd\mu_X\leq J$. This proves [(6.6)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:B2). Thus the square-integrable coefficient is obtained from the averaged physical score; it is not inferred from an averaged BV bound alone. 

□





**Theorem 6.3 (Cap-free robustness from reference TV).**

 <a id="p1p:thm:CFQ"></a> On each external-memory fibre let $K_x$ satisfy Lemma [6.1](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:lem:QV) with errors $e_{{\rm ref},x},\delta_x,\beta_x$. Set 

$$

 r_x=e_{{\rm ref},x}+kN\delta_x+\beta_x/2,
 \qquad\overline r=\int r_x\,d\mu_X(x).

$$

 For the boxed actual law, with integrated active variation $V$, <a id="p1p:eq:CFQ"></a>


$$

 \ell_{\rm box}:={\operatorname{TV}}(K_\#(h\lambda\mu_X),h\lambda\mu_X)
 \leq\frac{V}{2N}+2B_2\overline r^{\,1/d}.

$$

Equation (6.8).

 All conditional error averages here use the actual external-memory law. 

 

**Proof.**

For a proof threshold $M>0$ truncate $h_x$ to $h_{x,M}=\min(h_x,M)$. This contracts each BV seminorm. The discarded mass is at most 

$$

 \tau_{x,M}\leq M^{-(p-1)}\int h_x^p
 \leq B_x^pM^{-(p-1)}.

$$

 The discarded input and its pushforward have the same mass, so their distance costs at most $\tau_{x,M}$ once. Lemma [6.1](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:lem:QV) gives 

$$

 \ell_x\leq\frac{V_x}{2N}+Mr_x+B_x^pM^{-(p-1)}.

$$

 Choose $M=B_xr_x^{-(d-1)/d}$; the two last terms are each $B_xr_x^{1/d}$. If $r_x=0$, let $M\to\infty$; if $B_x=0$ there is no mass. Average in $x$ and apply Cauchy and concavity of $t^{2/d}$: 

$$

 \int B_xr_x^{1/d}d\mu_X
 \leq\|B_x\|_2\left(\int r_x^{2/d}d\mu_X\right)^{1/2}
 \leq B_2\overline r^{1/d}.

$$

 This proves the theorem without imposing a cap on the actual density. 

□



For a common boxed ideal baseline with remainder freshness $\Delta_{0,\rm box}$, the physical law has own-marginal freshness at most <a id="p1p:eq:physicalfresh"></a>


$$

 \tau+\Delta_{0,\rm box}+2\ell_{\rm box}.

$$

Equation (6.9).

 As before, one law error moves the joint distribution and the other moves its actual nuisance marginal. The complete initial tail is compared directly with its own-marginal product and is charged once. For the $d=102$ row, $V<4\times10^{24}$ and $B_2<4\times10^{22}$. For example $N=10^{32}$, $k\leq102$, and actual-memory averaged errors 

$$

 \overline e_{\rm ref}\leq10^{-3200},\quad
 \overline\beta\leq10^{-3200},\quad
 \overline\delta\leq10^{-3300}

$$

 give $\overline r<10^{-3162}=(10^{-31})^{102}$ and $\ell_{\rm box}\leq2.8\times10^{-8}$. Equation [(6.9)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:physicalfresh) then yields a freshness ceiling $1.0108\times10^{-5}$. This row quantifies the severe dimension loss in an ordinary reference-TV criterion. It specifies a mathematical tolerance interface; it does not assert that a finite material source achieves those errors.



<a id="section-6-2"></a>

### 6.2 A sharper two-coordinate distortion criterion





**Theorem 6.4 (Sectional density calibration).**

<a id="p1p:thm:sectiondist"></a> Suppose $K$ fixes all but two coordinates, and on each spectator fibre $z$ the pushforward of active reference area has density $r_z$ with 

$$

 \epsilon_{2,z}=\|r_z-1\|_{L^2((0,1)^2)}<\infty.

$$

 Suppose also that the active displacement is at most $\delta_z$ off a set of sectional area at most $\beta_z$. Define $H_z=m_z+(V_{1,z}+V_{2,z})/2$. Then <a id="p1p:eq:sectiondist"></a>


$$

 \ell_{\rm box}\leq\frac{V}{2N}
 +\int H_z\{\sqrt{\beta_z+4N\delta_z}+\epsilon_{2,z}\}\,d\zeta(z),

$$

Equation (6.10).

 where $d\zeta$ is reference measure in the fixed physical spectators times the actual external-memory law. Under uniform sectional errors, <a id="p1p:eq:sectionuniform"></a>


$$

 \ell_{\rm box}\leq\frac{V}{2N}
 +(m+V/2)\{\sqrt{\beta+4N\delta}+\epsilon_2\}.

$$

Equation (6.11).

 

 

**Proof.**

On a fixed fibre put $g=P_Nh$ and let $E$ be its bad/crossing set, of area at most $s=\beta+4N\delta$. The subreference pushforward $K_\#(1_E\lambda)$ has a density $a\leq r$ and mass at most $s$. Decompose $a=\min(a,1)+(a-1)_+$. Since $\min(a,1)^2\leq a$ and $(a-1)_+\leq(r-1)_+$, 

$$

 \|a\|_2\leq\sqrt s+\epsilon_2.

$$

 The first bracket of [(6.2)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:decomposition) has half-variation at most 

$$

 \tfrac12\int_E(g+g\circ K)
 \leq\tfrac12\|g\|_2(2\sqrt s+\epsilon_2).

$$

 The second has half-variation at most $\frac12\|g\|_2\epsilon_2$. Lemma [4.1](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:lem:grid) gives $\|g\|_2\leq H_z$ and total grid-approximation cost $V/(2N)$. Integrating proves the result. In particular the argument controls the image of the exceptional set even when $K$ merges inputs. 

□



This criterion has no ambient-dimensional exponent, but requires stronger reference calibration. For a differentiable bijection of the active square, the bound $|\det DK-1|\leq a<1$ implies $|r-1|\leq a/(1-a)$ and hence $\epsilon_2\leq a/(1-a)$. Ordinary reference TV does not supply this bound: compressing reference mass $\epsilon$ into volume $\epsilon^2$ yields order-one $L^2$ distortion despite TV of order $\epsilon$. Nor may the product in [(6.10)](/quantum-measurement/research/conditional-gaussian-preparation/robustness-under-complete-physical-map-errors#p1p:eq:sectiondist) be replaced by a product of unweighted error averages. It is the actual section coefficient $H_z$, which may concentrate, that weights the calibration error.

Finally, the necessity of a regularity input is already visible on the unit circle. For $0<c<1$, take $f_M(x)=1+c\cos(2\pi Mx)$ and translate by $1/(2M)$. The reference error is zero, the displacement tends to zero, and the cap $1+c$ is fixed; nevertheless the actual TV error is $2c/\pi$. Its variation is $4cM$. Small reference error and small displacement therefore cannot replace the law-sensitive regularity estimates in this section.
