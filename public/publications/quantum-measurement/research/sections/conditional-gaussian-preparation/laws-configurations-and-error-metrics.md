# Section 2: Laws, configurations and error metrics

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

<a id="section-2"></a>

## 2 Laws, configurations and error metrics

<a id="sec:notation"></a> All configuration coordinates in this paper belong to one specified effective parent. The writer is a real coordinate $q$ of width $\sigma$; preparation archives are $z_1,\ldots,z_n$ of widths $a_j$; a distinct, initially untouched receiver is $z_{n+1}$. A finite collection of two-state internal registers carries coherent branch information. Internal states have no independently sampled spin coordinate in this model. $X$ denotes any further genuinely retained external information. Conditional laws given $X=x$ are integrated against the *actual* law of $X$.

Write $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ and $\Phi(t)=\int_{-\infty}^t\phi(s)\,ds$. Standardized coordinates are $\xi_0=q/\sigma$ and $\xi_j=z_j/a_j$. The product reference density $\Gamma_d(\xi)=\prod_{i=0}^{d-1}\phi(\xi_i)$ is fixed by the factored ready wave. The actual conditional density is $p_x=\Gamma_d f_x$ when it exists. This identity defines a relative density; it does not assign $f_x=1$. Analysis quantiles are $u_i=\Phi(\xi_i)$; no physical controller is assumed to evaluate a cumulative distribution function.

For equal-mass finite positive measures define ${\operatorname{TV}}(\mu,\nu)=\frac12\lVert\mu-\nu\rVert_1$. For probability measures this equals the supremum of event-probability differences. For density operators use ${\operatorname{D}}(A,B)=\frac12\lVert A-B\rVert_1$, also for subnormalized operators of equal trace. Classical total variation contracts under a common Markov kernel, including a deterministic pushforward; trace distance contracts under a common quantum channel. The classical–quantum comparisons below also use the triangle inequality for mixtures of positive operators. If $N$ is the full nuisance configuration, the readiness functional is <a id="eq:readiness-definition"></a>


$$

 \mathcal R(\mu)={\operatorname{TV}}\bigl(\mu_{u,N},\lambda_{(0,1)}\otimes\mu_N\bigr).

$$

Equation (2.1).

 It measures averaged conditional readiness and keeps $\mu_N$ unchanged. Bounds on it imply bounds for every bounded downstream response using both variables, but not uniform conditional bounds after arbitrarily rare postselection. We apply the same definition to subprobabilities; both measures then have their common original mass.

The physical relative scores are weak derivatives $\partial_i f_x=f_x s_{i,x}$, with $J_i=\mathbb E_X\int s_{i,x}^2p_x\,d\xi$. Equivalently, the square root of the relative density has the corresponding weighted weak Sobolev derivative where the usual finite-information equivalence applies. Ordinary almost-everywhere derivatives that miss jumps are not sufficient. A twentieth-moment budget below means $\sum_i\mathbb E|\xi_i|^{20}$, not a radial moment or quantum energy. Directional bounded variation is always integrated over the remaining coordinates and $X$; when a density is cut to a physical box, both boundary faces are included.

Under the complete canonical current, $j_i=(\hbar/m_i)\operatorname{Im}(\Psi^*\partial_i\Psi)$, summed over every internal component, the reference density is $\rho=\lVert\Psi\rVert^2$ and the actual velocity is $j_i/\rho$. The active Gaussian reference density is strictly positive and each active velocity is a convex combination of finite trap velocities. These active trajectories exist uniquely at every finite entrance point over the finite protocol. In the concrete Gaussian bank the full positional density is also strictly positive. An external variable $X$ may instead be a fixed conditioning label, with no assigned wave amplitude. Any additional physical spectator must have its stipulated conservative holding flow, with the complete wave and conditional internal state defined on a set of full actual probability. All physical coordinates that move belong to the transported configuration. This specifies the flow domain used here; no pointwise uniqueness assertion for arbitrary singular quantum models is imported.
