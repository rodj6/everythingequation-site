# Section 5: Whole-history stability in a positive-density tube

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-5"></a>

## 5 Whole-history stability in a positive-density tube

 <a id="p3f:sec:stability"></a>

Use the same physical chart, complete positional coordinates, time interval and current convention for two parents. Let their pairs be $(\rho,j)$ and $(\widetilde\rho,\widetilde j)$ and their deterministic flows be $X$ and $Y$ from Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic). Suppose one original entrance law satisfies <a id="p3f:eq:twocaps"></a>


$$

 \mu_0\leq C\rho_0\,dx,\qquad
 \mu_0\leq C\widetilde\rho_0\,dx.

$$

Equation (5.1).

 Each actual flow is weighted only once at that entrance. Their time marginals are correspondingly bounded by $C\rho_t$ and $C\widetilde\rho_t$.



**Theorem 5.1 (Reference-weighted whole-path comparison).**

 <a id="p3f:thm:stability"></a> Let $K$ be a compact spacetime set lying in an open tube on which $\rho\geq a>0$. Let $G$ be the original-entrance event that *both complete path graphs* lie in $K$. Choose a smooth cutoff equal to one near $K$ such that $B=\chi b$ belongs to $L^1_tW^{1,p}_x$ for some $p>1$. Suppose the spatial projection of $K$ is contained in a finite-volume set $V$, and the two densities are bounded on $K$ by $R,\widetilde R$. Define <a id="p3f:eq:comparisonconstants"></a>


$$
\begin{aligned}E_K&=\int_K\widetilde\rho\,|b-\widetilde b|\,dx\,dt,\\
 L_K&=c_{d,p}C(R+\widetilde R)|V|^{1-1/p}
                \int_0^T\|\nabla B(t)\|_p\,dt .
 
\end{aligned}
$$

Equation (5.2).

 Here $c_{d,p}$ includes the Sobolev pointwise and maximal-operator norm constants, with any fixed-chart equivalence constants. For every $\delta,h>0$, <a id="p3f:eq:stability"></a>


$$
\begin{aligned}\mu_0\{G,\ \sup_{t\leq T}|X_t-Y_t|\geq h\}
 &\leq\frac{L_K+CE_K/\delta}{\log(1+h/\delta)},\\
 \mu_0\{\sup_{t\leq T}|X_t-Y_t|\geq h\}
 &\leq\mu_0(G^c)+
                \frac{L_K+CE_K/\delta}{\log(1+h/\delta)}.
 
\end{aligned}
$$

Equation (5.3).

 Both bounds may be truncated at one. 





**Proof.**

Couple the flows by their common entrance $x$ and restrict this pair law to $G$. Restriction decreases every time marginal. In particular, the restricted first and second marginals are bounded by $C\rho_t\,dx$ and $C\widetilde\rho_t\,dx$, supported in $K_t$. For almost every retained pair, the Sobolev representative inequality [(3.7)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:maximal) and the AC equations imply 

$$
\begin{aligned}\frac{d}{dt}\log(1+|X_t-Y_t|/\delta)
 &\leq c_d\{
       \mathcal M|\nabla B|(t,X_t)
       +\mathcal M|\nabla B|(t,Y_t)\}\\
 &\quad+\frac{|b-\widetilde b|(t,Y_t)}{\delta}
\end{aligned}
$$

 almost everywhere. Indeed split the velocity difference into $B(X_t)-B(Y_t)$ and $b(Y_t)-\widetilde b(Y_t)$. The initial distance is zero. Integrating the nonnegative upper bound controls the logarithm of the supremum distance. The two maximal-function terms, averaged against the restricted marginals, are at most $L_K$ by Hölder and the $L^p$ maximal bound. The last term has expectation at most $CE_K/\delta$. On paths reaching distance $h$, the logarithm is at least $\log(1+h/\delta)$; Markov proves the first inequality. Adding the explicitly charged complement $G^c$ proves the second. 

□



The restriction in this proof is not the law of stopped paths. Stopping and keeping every path at its first exit point can create boundary atoms, destroying the density bounds used for the maximal-function estimate. Whole-path restriction retains those bounds and leaves the discarded paths as a visible error term. No Lipschitz velocity or divergence lower bound is required.



<a id="section-5-1"></a>

### 5.1 The velocity defect uses both density and current





**Proposition 5.2 (Earned density/current interface).**

 <a id="p3f:prop:velocitydefect"></a> On $K$ from Theorem [5.1](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:thm:stability), <a id="p3f:eq:velocityidentity"></a>


$$

 \widetilde\rho(b-\widetilde b)
 =j-\widetilde j+(\widetilde\rho-\rho)\frac{j}{\rho}.

$$

Equation (5.4).

 Consequently, if the displayed norms are finite, <a id="p3f:eq:velocitydefect"></a>


$$

 E_K\leq
 \|j-\widetilde j\|_{L^1(K)}
  +a^{-1}\|j\|_{L^2(K)}
               \|\rho-\widetilde\rho\|_{L^2(K)}.

$$

Equation (5.5).

 For the continuous first-domain current class, $j\in L^2(K)$ locally. If both wave norms are pointwise at most $M$ there, then 

$$

 \|\rho-\widetilde\rho\|_{L^2(K)}
 \leq 2M\|\Psi-\widetilde\Psi\|_{L^2(K)}.

$$

 For identical canonical coefficients, [(4.3)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:currentdifference) supplies the other term. 





**Proof.**

Expand $\widetilde\rho\,j/\rho-\widetilde j$. The identity also holds where $\widetilde\rho=0$, because $\widetilde j=0$ there. Triangle and Cauchy give [(5.5)](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:eq:velocitydefect). Local boundedness of $\Psi$ and local square-integrability of its first derivatives make the canonical, drift and spin-curl currents locally $L^2$. Finally $|\rho-\widetilde\rho|\leq
(\|\Psi\|+\|\widetilde\Psi\|)\|\Psi-\widetilde\Psi\|$ proves the last estimate. 

□



Identical bounded Hermitian drift coefficients add at most $2\|a\|_\infty\|\Psi-\widetilde\Psi\|_2$ to the spatial $L^1$ current difference, with the complete vector/operator norm used for $a$. A Pauli curl adds its corresponding first-derivative spin-density subtraction and actual coefficient. Different connections, control coefficients or source currents require their additional subtraction terms. Equality of densities or of continuity equations does not make those terms disappear. In particular, a small wave Hilbert norm does not replace the derivative error $K_u$ in [(4.3)](/quantum-measurement/research/reference-weighted-flows/conforming-approximation-and-the-original-history-law#p3f:eq:currentdifference).



<a id="section-5-2"></a>

### 5.2 Paying the bad-tube event



For either reference family, denote its complete length, logarithmic and boundary costs by $\ell,\mathcal N,H_\partial$, with tildes for the second. Choose entrance thresholds $R_0,a_0,d_0$ and target thresholds $R,a,d_*$ with $R>R_0$, $a_0>a>0$, $d_0>d_*>0$. Equations [(2.5)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:exterior), [(3.4)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:nodeguard) and [(2.7)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:boundaryguard) bound the bad events for each entire actual path by <a id="p3f:eq:badcharge"></a>


$$
\begin{aligned}\beta_X={}&\mu_0\{|x|\geq R_0\}+\frac{C\ell}{R-R_0}
   +\mu_0\{\rho_0\leq a_0\}
                       +\frac{C\mathcal N}{\log(a_0/a)}
   \\
 &+\mu_0\{d_\partial(x)\leq d_0\}
                       +\frac{CH_\partial}{\log(d_0/d_*)}.
 
\end{aligned}
$$

Equation (5.6).

 Terms for absent boundaries are omitted, and several excluded sets are handled by a finite union bound. The analogous $\beta_Y$ uses the tilded costs and entrance density. These may be coarse estimates, but every term concerns the original law and complete current.

Suppose, on the compact spatial/core region in question, $\|\rho-\widetilde\rho\|_\infty\leq a/2$ in spacetime. On paths outside the charged events, $X$ has $\rho\geq a$, and $Y$ has $\widetilde\rho\geq a$, hence $\rho\geq a/2$ on its graph. Both therefore lie in a common compact positive set $K$ with floor $a/2$, and <a id="p3f:eq:Gcharge"></a>


$$

 \mu_0(G^c)\leq\beta_X+\beta_Y.

$$

Equation (5.7).

 An enlarged neighborhood with floor $a/4$ supplies a cutoff. Its attained Sobolev and chart norms, rather than a universal small constant, enter $L_K$; the floor used in [(5.5)](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:eq:velocitydefect) is $a/2$. This construction keeps low entrance density, source excursions and collision/core tails visible. A wave-to-uniform-density estimate for a high-dimensional application is a separate regularity task, addressed by the product estimates below.



**Corollary 5.3 (Convergence of complete paths and robust histories).**

 <a id="p3f:cor:histories"></a> Consider a sequence of comparisons obeying Theorem [5.1](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:thm:stability). Suppose that for every $\varepsilon>0$ there is one compact comparison tube on which, eventually, $\mu_0(G_n^c)\leq\varepsilon$, the constants $C,L_K$ are uniformly bounded, and $E_{K,n}\to0$. Then $\sup_t|X_t-Y_{n,t}|\to0$ in $\mu_0$ probability. The same conclusion follows from a separately justified quantitative diagonal choice of tubes and constants.

Suppose a common record decoder is locally constant on each radius-$h$ configuration ball around an ideal path at all relevant read, copy and hold times, except on an original-law event of probability $\beta$. Then <a id="p3f:eq:historymismatch"></a>


$$

 \Pr(\text{any decoded-history mismatch})
 \leq\beta+\mu_0(G^c)+
             \frac{L_K+CE_K/\delta}{\log(1+h/\delta)}.

$$

Equation (5.8).

 





**Proof.**

On a fixed tube choose $\delta_n\downarrow0$ so that $E_{K,n}/\delta_n\to0$, with lengths expressed in the fixed chart. For example, if $E_{K,n}>0$, one may take $\delta_n=\sqrt{\ell_*E_{K,n}}$ for a fixed positive length $\ell_*$; zero defects permit any decreasing positive sequence. The numerator in [(5.3)](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:eq:stability) is bounded while its denominator diverges for fixed $h>0$. The limit superior of the probability is at most $\varepsilon$; then let $\varepsilon\downarrow0$. The reference to a diagonal choice requires that its displayed bound actually tends to zero: individually finite but uncontrolled growing constants do not suffice.

On the decoder-margin event, a uniform path displacement less than $h$ preserves every declared record value. Its complement is therefore contained in the union of the margin failure and the path-displacement event in [(5.3)](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:eq:stability). This proves [(5.8)](/quantum-measurement/research/reference-weighted-flows/whole-history-stability-in-a-positive-density-tube#p3f:eq:historymismatch). 

□



A final-time margin is not the whole-history premise in this corollary. To infer faithful copying of an earlier actual outcome, the ideal model must itself provide that relation and its entire promised hold; its failures must be added to $\beta$. The theorem transfers a specified robust history. It does not construct a detector, a source law, a fresh receiver or a reset operation. Likewise convergence of complete paths in probability does not by itself imply total-variation convergence of arbitrary configuration laws. Such a conclusion additionally requires an appropriate regularity and inverse-map transfer estimate.
