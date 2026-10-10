# Section 10: What reset preserves: full laws and exact counterexamples

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-10"></a>

## 10 What reset preserves: full laws and exact counterexamples

<a id="p2s:sec:scope"></a>

The decoder needs a restored quantum stock, an original full-law bound, and the correct inverse-digit arithmetic. It does not need a new independent actual sample after each read. The following distinction is exact even for smooth, bounded, non-Born entrance densities.



**Proposition 10.1 (A wave SWAP with the identity configuration map).**

 <a id="p2s:prop:swap"></a> Use the equal-frequency Ermakov reset of Section [7](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:sec:reset), with plus frequency one, minus width $b(t)$, $b(0)=b(T)=1$, and zero endpoint chirp. For two entrance oscillator vacua its quantum endpoint is a SWAP up to phase, whereas its complete actual configuration endpoint is the identity. There is an original full density of cap two, with Gaussian marginals and finite relative weak Fisher information, whose conditional scratch distance from the Gaussian remains $1/\pi$ after this reset. 

 

**Proof.**

In normal coordinates $q_+=(x+r)/\sqrt2$, $q_-=(x-r)/\sqrt2$, the plus vacuum has zero velocity. The exact minus Gaussian has width $b(t)$ and phase gradient giving $\dot q_-=(\dot b/b)q_-$. Thus $q_+(t)=q_+(0)$ and $q_-(t)=b(t)q_-(0)$, proving the identity endpoint. This calculation uses the complete wave during the pulse, not its endpoint matrix alone. The oscillator spectral phases give the separate quantum SWAP statement proved in the reset construction.

Use the standard Gaussian CDF $\Phi$ and density $\gamma$ defined above, and set $u=\Phi(x)$, $v=\Phi(r)$. Against the entrance product Gaussian use <a id="p2s:eq:correlated"></a>


$$

 f(u,v)=1+\cos(2\pi(u-v)).

$$

Equation (10.1).

 Both marginals are uniform in quantiles, $0\leq f\leq2$, and the conditional distance is 

$$

 \frac12\int_0^1|f(u,v)-1|\,du=\frac1\pi
 \quad\hbox{for every }v.

$$

 The square root $\sqrt2|\cos\pi(u-v)|$ has genuine weak derivatives. Its physical Gaussian-relative Fisher information is finite; indeed 

$$

 I_\gamma(f)=4\pi^2\!\int_{(0,1)^2}
 (1-\cos(2\pi(u-v)))
 [\gamma(\Phi^{-1}u)^2+\gamma(\Phi^{-1}v)^2]\,du\,dv
 =\frac{4\pi}{\sqrt3}<13.

$$

 For the equality first integrate the unused quantile, then use $\int_{\mathbb R}\gamma^3=1/(2\pi\sqrt3)$. Zeros of $f$ cause no missing singular derivative: the displayed square root is locally Lipschitz, and the derivative formula holds almost everywhere. The identity endpoint retains the entire joint density and hence its conditional discrepancy. 

□





**Proposition 10.2 (An original cap and an already prepared separate writer).**

 <a id="p2s:prop:original"></a> Suppose the true complete flow transports $\rho_0$ to $\rho_t$ and the actual entrance law satisfies $\mu_0\leq C\rho_0$. Then every measurable whole-history event $E$ obeys $\mathbb P_{\mu_0}(E)\leq
C\mathbb P_{\rho_0}(E)$. No conditional redraw is required or implied. If a separate writer $W$ and the entire original nuisance bank $N$ satisfy 

$$

 {\operatorname{TV}}(\mu_{WN},\gamma_W\otimes\mu_N)\leq\eta,

$$

 then an operation of the form $(W,N)\mapsto(W,F(N))$ preserves this upper bound with the actual final nuisance marginal. Retaining the full nuisance configuration and an invertible $F$ preserves the distance exactly. 

 

**Proof.**

Push the inequality of entrance measures through the common measurable path map; this proves domination on path space, not just at each time. For the second statement push both measures through $\mathrm{id}\times F$. Total variation contracts under measurable pushforward, and the image of the comparison is $\gamma_W\otimes F_\#\mu_N$. Apply the inverse map for equality in the invertible case. 

□

 Here $F$ must be a genuine nuisance-only map. Labeling an operation a spectator quantum unitary is insufficient if the actual complete guidance still couples it to the writer. In the exact product-stock construction the separate writer is untouched and the required factorization is explicit. This proposition transfers prior readiness; it does not produce readiness from a capped law alone.

A cap on the writer conditional on a bank is a different premise from a cap on the complete original law. For example, on two uniform reference coordinates let each of two independent actual marginals have density $10\mathbf1_{[0,1/10]}$. The conditional writer cap and bank cap are both ten, while the joint density reaches one hundred. A full cap ten must be imposed on the complete original bank itself. Small bounded smooth cosine perturbations show that the joint capped class nevertheless contains non-Born laws and is not empty.



<a id="section-10-1"></a>

### 10.1 Exact reset on an uncertainty interval

 

**Proposition 10.3 (A restricted open-loop obstruction).**

 <a id="p2s:prop:analytic"></a> Consider a finite, prescribed, two-mode scalar quadratic protocol. All intermode couplings are multiplied by one unknown gain $\lambda$, the remaining coefficients are bounded and piecewise continuous, and the modes decouple at $\lambda=0$. It cannot reset the scratch into one fixed vacuum for every scratch input and every gain in a nonempty open interval. The used archive may retain an arbitrary unitary transformation of the scratch input. 

 

**Proof.**

The classical matrix equation has coefficient $A_0(t)+\lambda A_1(t)$. Its Dyson series converges uniformly on every compact complex gain set, bounded by the exponential of the integrated coefficient norm. Every entry of the finite-time symplectic matrix is therefore entire in $\lambda$. Write the final scratch annihilator in terms of both initial mode coordinates and momenta. Reset for every scratch state, with an initial archive vacuum, requires both coefficients of the initial scratch position and momentum to vanish. One can see this by displacing arbitrary scratch inputs: otherwise the supposedly fixed output vacuum would have a variable first moment. Vanishing on an open real interval forces both entire coefficients to vanish also at zero gain. There the scratch evolves by its own invertible two-dimensional symplectic block. A nonzero final annihilator row cannot annihilate that entire block, a contradiction. 

□

 This result concerns exact finite open-loop reset in the stated uncertainty model. The quantitative approximate exchange below is compatible with it.



<a id="section-10-2"></a>

### 10.2 Idle curvature is a different error

 

**Proposition 10.4 (Nominal vacuum under an inaccurate idle trap).**

 <a id="p2s:prop:curvature"></a> In canonical oscillator coordinates with $[q,p]=i$, let the nominal annihilator be $a=(q+ip)/\sqrt2$ and the entrance be its vacuum. Evolve under $\tfrac12[p^2+(1+e)q^2]$. The creator coefficient in $a(t)$ is <a id="p2s:eq:beta"></a>


$$

 \beta(t)=-\frac{ie}{2\sqrt{1+e}}
              \sin(\sqrt{1+e}\,t).

$$

Equation (10.2).

 At a quarter actual period and $0<e\leq10^{-3}$, the norm outside the nominal vacuum is at least $e/5$. 

 

**Proof.**

Put $\nu=\sqrt{1+e}$. The exact phase-space evolution is $q(t)=q\cos\nu t+p\sin\nu t/\nu$ and $p(t)=p\cos\nu t-\nu q\sin\nu t$. Substitution into $a(t)$ gives [(10.2)](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:eq:beta). The resulting squeezed vacuum has vacuum probability $(1+|\beta|^2)^{-1/2}$: solving the transformed annihilator equation gives a normalized Gaussian, whose overlap with the original Gaussian evaluates to this value. If $0\leq v\leq1$, then $1-(1+v)^{-1/2}\geq v/4$, by multiplying out positive denominators or integrating $\tfrac12(1+s)^{-3/2}$ on $[0,v]$. Hence the off-vacuum norm is at least $|\beta|/2$. At the stated quarter-period this is $e/(4\sqrt{1+e})\geq e/5$. 

□

 A small exchange error proved uniformly over a spring-gain interval thus does not imply a comparable nominal-stock error under independent idle curvature errors. Replacing the reference by the calibrated actual vacuum is possible only after changing its stock compiler and original-law contract consistently.
