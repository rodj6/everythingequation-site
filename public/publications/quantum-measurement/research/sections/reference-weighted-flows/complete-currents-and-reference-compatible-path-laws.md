# Section 2: Complete currents and reference-compatible path laws

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-2"></a>

## 2 Complete currents and reference-compatible path laws

 <a id="p3f:sec:setup"></a>

Fix $T<\infty$ and an open physical configuration domain $D\subset\mathbb R^d$. Each positional coordinate, including every retained source, clock and record coordinate, is expressed in a fixed unit. All distances and vector norms below refer to that fixed Euclidean chart. Internal spin, finite reference and purifier fibres are retained in the wave; they are not separately sampled positions. Let $\Psi_t$ denote the complete normalized wave and put 

$$

 \rho_t(x)=\|\Psi_t(x)\|^2,\qquad
 b(t,x)=
 \begin{cases}j(t,x)/\rho_t(x),&\rho_t(x)>0,\\
 0,&\rho_t(x)=0.\end{cases}

$$

 The Borel field $j$ is the *complete stipulated physical current*. Its constitution is part of the model. A continuity equation determines its divergence, not its divergence-free part. Time is physical time: computational clock or unitary-frame changes must be restored before the physical current and time derivative used in these hypotheses are evaluated.

If $D\ne\mathbb R^d$, extend $\rho,j$ by zero only when the physical boundary form proves the distributional continuity equation <a id="p3f:eq:CE"></a>


$$

 \partial_t\rho+\operatorname{div}j=0
 \quad\hbox{on }(0,T)\times\mathbb R^d

$$

Equation (2.1).

 without a boundary source. Throughout, $\int\rho_t=1$ and $t\mapsto\rho_t$ is narrowly continuous. Strong $L^2$ continuity of a normalized wave supplies the stronger estimate $\|\rho_t-\rho_s\|_1\leq2\|\Psi_t-\Psi_s\|_2$. We require $j=0$ almost everywhere on $\{\rho=0\}$; only with this condition does $\rho b=j$ hold. A different current, for example a nonlocal kinetic current that can be nonzero at a wave node, needs a separate analysis.

Write $\mathcal C=C([0,T];\mathbb R^d)$ with the uniform topology and $e_t(\gamma)=\gamma(t)$. All path measures in this paper are Borel measures on this Polish space. For probabilities on a common measurable space, ${\operatorname{TV}}(\mu,\nu)=\sup_A|\mu(A)-\nu(A)|$ denotes half the full variation norm. The inner product on each internal fibre is conjugate-linear in its first argument.



**Definition 2.1 (Reference compatibility and domination).**

 <a id="p3f:def:pathlaws"></a> A reference-compatible path law is a probability $\Pi$ concentrated on absolutely continuous solutions of $\dot\gamma(t)=b(t,\gamma(t))$ for almost every $t$, and satisfying $(e_t)_\#\Pi=\rho_t\,dx$ for every $t\in[0,T]$. A path law $P$ is $C$-marginal-dominated if it solves the same integral equation and $(e_t)_\#P\leq C\rho_t\,dx$ for every time, with one finite constant $C$ for the complete horizon. Marginal domination is distinct from the stronger assertion $P\leq C\Pi$ on path space. 





**Proposition 2.2 (Weak reference paths and original-law weighting).**

 <a id="p3f:prop:superposition"></a> Suppose [(2.1)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:CE) holds and <a id="p3f:eq:lengthaction"></a>


$$

 \ell=\int_0^T\!\int |j|\,dx\,dt<\infty.

$$

Equation (2.2).

 Then at least one reference-compatible $\Pi$ exists on the ambient space. If additionally 

$$

 \mathcal A=\int_0^T\!\int \frac{|j|^2}{\rho}\,dx\,dt<\infty,

$$

 its expected squared-speed action is $\mathcal A$. Ratios are assigned zero on $\{\rho=0\}$.

For every original complete law $\mu_0=f_0\rho_0\,dx$, $f_0\geq0$, $\int f_0\rho_0=1$, the formula <a id="p3f:eq:once"></a>


$$

 d\Pi_{\mu}(\gamma)=f_0(e_0(\gamma))\,d\Pi(\gamma)

$$

Equation (2.3).

 defines a probability on the same integral curves with entrance $\mu_0$. If $f_0\leq C$, then $\Pi_\mu\leq C\Pi$ on the entire path space and $(e_t)_\#\Pi_\mu\leq C\rho_t\,dx$ for every $t$. 





**Proof.**

Apply the Euclidean superposition principle, in the finite-dimensional specialization of [[6](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-STsuperposition), arXiv v1, Remark 3.2 and Theorem 3.4]. Here the measures $\rho_t\,dx$ are narrowly continuous probabilities, the Borel velocity is integrable against their spacetime measure because $\int|b|\rho=\ell$, and their continuity equation is exactly [(2.1)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:CE). On smooth compactly supported tests and constants the derivation $f\mapsto b\cdot\nabla f$ obeys the Leibniz rule and the gradient bound $|b\cdot\nabla f|\leq|b||\nabla f|$. The smooth Euclidean test algebra has the required approximation property. A linear time rescaling covers $[0,T]$. These are the hypotheses of the imported superposition theorem; it yields all time marginals, not just almost every time. Applying its observable equation to coordinate functions multiplied by smooth cutoffs from a countable exhaustion gives the ordinary vector integral equation: every continuous path has bounded image, so a sufficiently large cutoff is identically one along it.

For the resulting law, Fubini and the integral-curve equation give $\mathbb E_\Pi\int|\dot\gamma|^2
=\int\rho|b|^2=\mathcal A$ when the latter is finite. Formula [(2.3)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:once) has mass $\int f_0\rho_0=1$ and the claimed entrance. Absolute continuity preserves the almost-sure integral-curve property. If $f_0\leq C$, integration of any nonnegative history functional proves path-space domination, and applying this to functions of $e_t$ proves marginal domination. In general the later relative density is 

$$

 f_t(x)=\mathbb E_\Pi[f_0(e_0)\mid e_t=x];

$$

 it need not be one or require a unique inverse flow. No later reweighting or source renewal has been performed. 

□



This proposition supplies reference paths before deterministic selection is known. It does not infer an actual Born ensemble. For unbounded integrable $f_0$, null events still transfer, but a uniform finite expectation bound for history errors does not follow.



<a id="section-2-1"></a>

### 2.1 Smooth tests, boundaries and infinity





**Proposition 2.3 (Complete-current history tests and guards).**

 <a id="p3f:prop:guards"></a> Let $P$ be $C$-marginal-dominated. For a $C^1$ spacetime function $h$ with integrable complete material derivative, <a id="p3f:eq:smoothhistory"></a>


$$

 \mathbb E_P\operatorname{Var}_{[0,T]}h(t,\gamma(t))
 \leq C\int_0^T\!\int
           |\rho\,\partial_t h+j\cdot\nabla h|\,dx\,dt.

$$

Equation (2.4).

 For $P=\Pi$ reference-compatible, equality holds. For $R>R_0$, <a id="p3f:eq:exterior"></a>


$$

 P\{\sup_t|\gamma(t)|\geq R\}
 \leq P\{|\gamma(0)|\geq R_0\}
                         +\frac{C\ell}{R-R_0}.

$$

Equation (2.5).



Suppose the ambient paths stay in $\overline D$, their entrance is in $D$ almost surely, and a nonnegative locally Lipschitz boundary-distance function $d_\partial$, defined on a neighborhood of $\overline D$, is positive in $D$ and zero on its excluded boundary. Assume <a id="p3f:eq:boundarycost"></a>


$$

 H_\partial=\int_0^T\!\int_D
              \frac{|j\cdot\nabla d_\partial|}{d_\partial}\,dx\,dt
 <\infty.

$$

Equation (2.6).

 Then $P$-almost every path avoids that boundary at all times. More quantitatively, for $d_0>d_*>0$, <a id="p3f:eq:boundaryguard"></a>


$$

 P\{\inf_t d_\partial(\gamma(t))\leq d_*\}
 \leq P\{d_\partial(\gamma(0))\leq d_0\}
                 +\frac{C H_\partial}{\log(d_0/d_*)}.

$$

Equation (2.7).

 





**Proof.**

The ordinary chain rule on an absolutely continuous path gives $\operatorname{Var}h=\int|\partial_t h+b\cdot\nabla h|$. Integrate against $P$ and use its marginal domination. For a reference law the marginal identity gives equality. The exterior event, outside the displayed entrance exception, entails total travelled length at least $R-R_0$; its expectation is at most $C\ell$, proving [(2.5)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:exterior).

Apply the same chain argument to $h_\epsilon(x)=\log(d_\partial(x)+\epsilon)$ on compact spatial regions. Local Lipschitz composition with an absolutely continuous path is absolutely continuous; the spatial derivative formula holds at differentiability points. The exceptional spatial set has Lebesgue measure zero and is visited for zero time by almost every path, by marginal absolute continuity and Fubini. At times spent on $d_\partial=0$, its absolutely continuous composition has derivative zero almost everywhere. Exhausting spatial compacts gives 

$$

 \mathbb E_P\operatorname{Var}h_\epsilon(\gamma)
 \leq C\int_D\frac{|j\cdot\nabla d_\partial|}
                         {d_\partial+\epsilon}\,dx\,dt
 \leq C H_\partial .

$$

 A path with positive initial distance that reaches zero has variation at least $\log(d_\partial(\gamma(0))+\epsilon)-\log\epsilon$, which diverges as $\epsilon\downarrow0$. Fatou excludes a positive probability of such paths. On boundary-avoiding paths one may let $\epsilon\downarrow0$; a crossing from above $d_0$ to $d_*$ entails variation at least $\log(d_0/d_*)$, proving [(2.7)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:boundaryguard). 

□



When the marginals are supported in $\overline D$, continuity and countably many rational times already keep almost every ambient path out of the open exterior of $\overline D$. Touching the boundary is the additional issue addressed by [(2.6)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:boundarycost). A collision set of codimension greater than one is handled by its own positive distance function and complete-current estimate. A true Dirichlet Hardy bound can supply such a cost; a finite repulsive potential does not become an excluded core by definition. For the full ambient space, global continuous paths already cannot escape to infinity at a finite time, while [(2.5)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:exterior) remains useful quantitatively.
