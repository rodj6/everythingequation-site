# Section 3: The logarithmic chain rule and deterministic selection

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-3"></a>

## 3 The logarithmic chain rule and deterministic selection

 <a id="p3f:sec:selection"></a>



**Assumption 3.1 (Continuous first-domain wave and complete current).**

 <a id="p3f:ass:central"></a> The wave has a specified representative 

$$

 \Psi\in C([0,T]\times D)
          \cap L^\infty(0,T;H^2_{\mathrm{loc}}(D)),
 \qquad \partial_t\Psi\in L^1(0,T;L^2(D)).

$$

 It is globally continuous in $L^2$ and normalized. Continuity in spacetime is an additional assumption; $H^2$ alone does not imply it in arbitrary dimension. The current satisfies the preceding conservative continuity and zero-on-nodes hypotheses, with finite $\ell,\mathcal A$, and <a id="p3f:eq:logcost"></a>


$$

 \mathcal N=\int_0^T\!\int_D
 \left(|\partial_t\rho|
        +\frac{|j\cdot\nabla\rho|}{\rho}\right)\,dx\,dt<\infty.

$$

Equation (3.1).

 For each compact spacetime set $K\subset U=\{(t,x)\in[0,T]\times D:\rho_t(x)>0\}$ there is a smooth spacetime cutoff equal to one near $K$, supported inside $U$ relative to $[0,T]\times D$, for which the zero-extended field $B=\chi b$ belongs to $L^1(0,T;W^{1,p}(\mathbb R^d))$ for some $p>1$. The exponent and norm may depend on $K$.

A reference-compatible path law exists, and its paths stay in $D$ throughout the interval. For any other path law to which the uniqueness conclusion is applied, the same boundary avoidance is assumed or established by Proposition [2.3](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:prop:guards). 



The cutoff formulation makes precise what local Sobolev regularity on positive spacetime tubes means. It does not impose a global lower bound on $\rho$ or on $\operatorname{div}b$.



**Lemma 3.2 (Sobolev logarithmic chain rule).**

<a id="p3f:lem:chain"></a> Under Assumption [3.1](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:ass:central), every $C$-marginal-dominated path law $P$ staying in $D$ satisfies, for each $\epsilon>0$, <a id="p3f:eq:logchain"></a>


$$

 \frac{d}{dt}\log(\rho_t(\gamma(t))+\epsilon)
 =\frac{\partial_t\rho+
                b\cdot\nabla\rho}{\rho+\epsilon}(t,\gamma(t))

$$

Equation (3.2).

 for almost every time on almost every path. The left side is the derivative of an absolutely continuous function. Moreover <a id="p3f:eq:logvariation"></a>


$$

 \mathbb E_P\operatorname{Var}_{[0,T]}
                 \log(\rho_t(\gamma(t))+\epsilon)
 \leq C\mathcal N.

$$

Equation (3.3).

 Consequently $P$-almost every path avoids every density node at every time, and for $a_0>a>0$, <a id="p3f:eq:nodeguard"></a>


$$

 P\{\inf_t\rho_t(\gamma(t))\leq a\}
 \leq P\{\rho_0(\gamma(0))\leq a_0\}
                           +\frac{C\mathcal N}{\log(a_0/a)}.

$$

Equation (3.4).

 





**Proof.**

First restrict $P$ to paths whose complete graphs lie in a fixed compact subset $K$ of $[0,T]\times D$; no positive-density restriction is used at this step. Denote this subprobability by $P_K$. Its time marginals only decrease, so are still at most $C\rho_t\,dx$ and are bounded on the compact spatial region by continuity of $\Psi$. Choose a slightly larger compact region inside the physical domain and locally extend the wave. At the time endpoints a constant extension suffices. Spacetime mollification produces smooth waves $\Psi_n$ converging uniformly on $K$, with strong convergence of spatial first derivatives in $L^2(dt\,dx)$ and of time derivatives in $L^1_tL^2_x$ locally. These follow from the stipulated continuity, local $H^2$ and time-derivative hypotheses.

For fixed $\epsilon>0$, the map $z\mapsto\log(\|z\|^2+\epsilon)$ has bounded first derivative. Uniform convergence of $\Psi_n$ on the compact region, together with its uniformly bounded values, therefore gives uniform convergence of $h_n=\log(\|\Psi_n\|^2+\epsilon)$ to $h=\log(\rho+\epsilon)$. The chain formulas and the strong derivative convergences give 

$$

 \nabla h_n\longrightarrow\nabla h\quad\hbox{in }L^2(dt\,dx),
 \qquad
 \partial_t h_n\longrightarrow\partial_t h
                  \quad\hbox{in }L^1_tL^2_x.

$$

 For example, subtract the two bounded coefficient factors multiplying $\partial_t\Psi_n$ and $\partial_t\Psi$; their uniform difference tends to zero and the latter derivative is integrable. The spatial argument is identical in $L^2$.

The smooth chain rule holds for $h_n$ along every admitted absolutely continuous curve. The expected time-derivative error tends to zero by the bounded local marginals and Cauchy on the finite spatial volume. If $\theta_t\,dx=(e_t)_\#P_K$, the spatial error is bounded by 

$$
\begin{aligned}\int\theta\,|b|\,|\nabla(h_n-h)|
 &\leq
 \left(\int\theta|b|^2\right)^{1/2}
 \left(\int\theta|\nabla(h_n-h)|^2\right)^{1/2}\\
 &\leq C\mathcal A^{1/2}
       \left(\int\rho|\nabla(h_n-h)|^2\right)^{1/2}
 \longrightarrow0 .
\end{aligned}
$$

 Uniform convergence passes the endpoint values. A subsequence with summable expected derivative error, followed by a countable set of rational endpoints, gives the integral chain identity almost surely. The integral representative and continuity of $h(t,\gamma(t))$ extend it to every endpoint. This proves absolute continuity and [(3.2)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:logchain) on the restricted paths.

Every continuous path staying in $D$ has a compact graph in $[0,T]\times D$. Exhaust these graphs by nested compact regions and take the countable intersection of their full-measure chain-rule sets. By marginal domination, 

$$

 \mathbb E_P\operatorname{Var}h
 \leq C\int
       \frac{|\rho\,\partial_t\rho+j\cdot\nabla\rho|}
                         {\rho+\epsilon}\,dx\,dt
 \leq C\mathcal N .

$$

 This establishes [(3.3)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:logvariation). There is no substitution of a weak density into an unproved classical path chain rule.

The entrance has $\rho_0>0$ almost surely by domination. For the countable sequence $\epsilon=1/n$, a path starting there and ever reaching a node has variation at least $\log(\rho_0(\gamma(0))+\epsilon)-\log\epsilon$, which diverges. Fatou and the uniform expectation bound exclude a positive mass of such paths. Since the density is continuous along a node-avoiding path on a compact time interval, it has a positive minimum there. Letting $\epsilon\downarrow0$ now bounds the variation of $\log\rho_t(\gamma(t))$ by $C\mathcal N$ in expectation. A drop from above $a_0$ to $a$ costs at least $\log(a_0/a)$, proving [(3.4)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:nodeguard). 

□



The use of all time marginals in the proof is essential. A family of sets can have zero mass at each fixed time while almost every path hits one of those sets at some time. The logarithmic variation, rather than fixed-time nullity alone, supplies the all-times conclusion.



**Theorem 3.3 (Deterministic reference-compatible selection).**

 <a id="p3f:thm:deterministic"></a> Under Assumption [3.1](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:ass:central), the reference-compatible path law is unique. There is a Borel map $x\mapsto X(\cdot,x)\in\mathcal C$, defined up to a $\rho_0\,dx$ null set, such that <a id="p3f:eq:detflow"></a>


$$

 \Pi=\int_D\delta_{X(\cdot,x)}\,\rho_0(x)\,dx,
 \qquad (X_t)_\#(\rho_0\,dx)=\rho_t\,dx .

$$

Equation (3.5).

 For almost every such entrance, the path is absolutely continuous, stays in $D$, solves the complete guidance equation almost everywhere in time and avoids all nodes.

More generally, two $C$-marginal-dominated path laws staying in $D$ with the same entrance coincide, and their entrance disintegrations are Dirac masses. For every original $\mu_0=f_0\rho_0\,dx$ the deterministic transported law is $(X_t)_\#\mu_0$, with its whole history obtained by [(2.3)](/quantum-measurement/research/reference-weighted-flows/complete-currents-and-reference-compatible-path-laws#p3f:eq:once). A finite cap is unnecessary for this absolute-continuity and null-set assertion. 





**Proof.**

Let $P_1,P_2$ have the same entrance $\mu_0$ and respective finite marginal caps; enlarge $C$ to cover both. Disintegrate over entrance and form the conditional product <a id="p3f:eq:pairlaw"></a>


$$

 \Theta(d\gamma,d\eta)
 =\int P_{1,x}(d\gamma)P_{2,x}(d\eta)\,\mu_0(dx).

$$

Equation (3.6).

 Its coordinate marginals are $P_1,P_2$ and $\gamma(0)=\eta(0)$ almost surely. By Lemma [3.2](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:lem:chain) and boundary avoidance, almost every pair of complete graphs lies in some compact $K_n\subset U$. For example choose nested compacts with $|x|\leq n$, distance to $D^c$ at least $1/n$ when relevant, and $\rho\geq1/n$. Restrict $\Theta$ to pairs whose *whole* graphs lie in $K_n$; call the restriction $\Theta_n$. It retains marginal bounds $C\rho_t\,dx$. Paths are not stopped and their mass is not placed on a boundary.

Let $B=\chi b$ be the positive-tube Sobolev extension supplied by Assumption [3.1](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:ass:central). The Sobolev maximal-function inequality [[5](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-CDLflow), Lemmas A.2–A.3] gives, outside an appropriate Lebesgue-null set for almost every $t$, <a id="p3f:eq:maximal"></a>


$$

 |B(t,x)-B(t,y)|
 \leq c_d|x-y|
       \{\mathcal M|\nabla B|(t,x)+\mathcal M|\nabla B|(t,y)\}.

$$

Equation (3.7).

 Here $\mathcal M$ is the Hardy–Littlewood maximal operator. Marginal absolute continuity makes its exceptional set negligible along the paired paths for almost every time. Their AC equations and $B=b$ on $K_n$ imply, for every $\delta>0$, <a id="p3f:eq:pairlog"></a>


$$

 \log\!\left(1+\frac{\sup_{t\leq T}|\gamma(t)-\eta(t)|}{\delta}\right)
 \leq c_d\int_0^T
       \{\mathcal M|\nabla B|(t,\gamma(t))
          +\mathcal M|\nabla B|(t,\eta(t))\}\,dt .

$$

Equation (3.8).

 Indeed differentiate $\log(1+|\gamma-\eta|/\delta)$ almost everywhere, use [(3.7)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:maximal), and integrate the nonnegative upper bound; equality at entrance removes the initial term.

The expectation of the right side under $\Theta_n$ is finite and independent of $\delta$. The marginals are supported in a spatial set $V_n$ of finite volume and are bounded there by $C\sup_{K_n}\rho$. Hölder's inequality and the $L^p$ boundedness of $\mathcal M$ bound the expectation by a finite multiple of $\int_0^T\|\nabla B(t)\|_pdt$. If $\Theta_n$ gave positive mass to $\sup_t|\gamma-\eta|\geq h$ for any $h>0$, the expected left side of [(3.8)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:pairlog) would diverge as $\delta\downarrow0$. Thus $\Theta_n$ is supported on the diagonal. Exhaustion gives the same conclusion for $\Theta$.

Apply this first with $P_1=P_2=P$. For almost every $x$, the product $P_x\otimes P_x$ is diagonal. A probability on a Polish space whose independent pair is almost surely equal is Dirac: otherwise some member of a countable separating family has probability strictly between zero and one, giving positive product mass off the diagonal. The location of that Dirac mass is a measurable function of $x$, because the Dirac embedding of a Polish space into its probability measures is Borel and has a Borel inverse on its image. Defining an arbitrary path on the entrance null set gives a Borel map. Using two different candidate laws in [(3.6)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:pairlaw) makes their selected curves equal almost everywhere, proving uniqueness.

Take $P=\Pi$ to obtain [(3.5)](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:eq:detflow). Finally $f_0(e_0)\Pi$ is exactly $\int\delta_{X(\cdot,x)}\,\mu_0(dx)$. Its absolute continuity with respect to $\Pi$ transfers all preceding almost-sure path properties, even if $f_0$ is unbounded. 

□



This theorem selects the deterministic flow within the specified reference-compatible or uniformly marginal-dominated classes. It does not assert uniqueness of every classical ODE curve from every point. Additional singular or concentrating solutions outside those classes are not excluded. This distinction is consistent with the regular-flow framework of [[7](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-ACFmaximal)]; no divergence lower bound has been silently introduced. All almost-sure assertions refer to the fixed parent wave and complete current. Uniform estimates over a family require uniform bounds for the displayed hypotheses; they do not assert a common exceptional entrance set for an uncountable family of waves.



<a id="section-3-1"></a>

### 3.1 Checking the wave-to-velocity hypotheses





**Proposition 3.4 (Continuous first-domain canonical and local spin currents).**

 <a id="p3f:prop:canonical"></a> Suppose the first line of Assumption [3.1](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:ass:central) holds. For 

$$

 j_i=2\lambda_i\operatorname{Im}\langle\Psi,D_i\Psi\rangle,
 \qquad D_i=\partial_i-iA_i,

$$

 with smooth locally bounded coefficients, locally bounded derivatives, Hermitian $A_i$ and positive scalar $\lambda_i$, the positive-tube Sobolev premise holds. For $d>2$ one can use $p=\min\{2,d/(d-2)\}>1$; for $d=1,2$ one can use $p=2$. The same local conclusion holds after adding smooth Hermitian first-order drift densities and finite-component Pauli curl currents. Their global budgets must still be checked with their actual coefficients.

For the canonical tensor with $\alpha\leq\lambda_i\leq\Lambda$, put $K(t)=\sum_i\int\lambda_i\|D_i\Psi\|^2dx$. Then the following sufficient bounds hold: <a id="p3f:eq:canonicalbudgets"></a>


$$
\begin{aligned}\int|j|\,dx&\leq2\Lambda\sqrt{K/\alpha},&
 \int\frac{|j|^2}{\rho}\,dx&\leq4\Lambda^2K/\alpha,\\
 \int\frac{|j\cdot\nabla\rho|}{\rho}\,dx
 &\leq4\Lambda K/\alpha,&
 \int|\partial_t\rho|\,dx&\leq2\|\partial_t\Psi\|_2.
 
\end{aligned}
$$

Equation (3.9).

 Thus their time integrals supply the length, action and logarithmic costs whenever the displayed kinetic and time-derivative quantities are integrable. 





**Proof.**

Hermiticity gives $\partial_i\rho=2\operatorname{Re}\langle\Psi,D_i\Psi\rangle$. On a compact positive tube, $\Psi$ is bounded and $\rho$ has a positive floor. Differentiating the current weakly produces only terms of the types $\Psi D^2\Psi$, $(D\Psi)^2$, $\Psi D\Psi$ and $\Psi^2$, with bounded local coefficients. For $d>2$, local $H^2$ gives $D\Psi\in L^{2d/(d-2)}$; the products therefore belong to $L^p$ with the stated $p$. For $d=2$, $H^1$ gradients have every finite local $L^q$ exponent; choose $q=4$. The one-dimensional case is stronger. In the quotient rule for $b=j/\rho$, the remaining product $j\nabla\rho/\rho^2$ has the same squared-first-derivative form. A cutoff supported inside the positive region gives the required global $W^{1,p}$ extension with integrable time norm.

A Hermitian drift adds $\langle\Psi,a_i\Psi\rangle$, whose first derivative has these same product types. A Pauli curl differentiates a spin density once in $j$ and twice in $\nabla j$, again producing the listed products. This proves the local assertion without differentiating a singular or discontinuous scalar potential.

Finally $|j|\leq2\Lambda\sqrt\rho\,|D\Psi|$ and $|\nabla\rho|\leq2\sqrt\rho\,|D\Psi|$ pointwise. Use $\|\Psi\|_2=1$ and $\int|D\Psi|^2\leq K/\alpha$ to obtain the first three bounds. The identity $\partial_t\rho=2\operatorname{Re}\langle\Psi,\partial_t\Psi\rangle$ and Cauchy give the last. Variable unbounded coefficients instead require their corresponding weighted kinetic estimates. 

□
