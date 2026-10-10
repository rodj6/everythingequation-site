# Section 10: A distinct compact-entrance Coulomb alternative

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-10"></a>

## 10 A distinct compact-entrance Coulomb alternative

 <a id="p3d:sec:FR"></a>

The preceding Coulomb theorem keeps the original Gaussian. A different sufficient route is useful when classical smooth-flow charts are wanted. It changes the entrance, and the two conclusions must not be identified.



**Corollary 10.1 (Smooth collision-separated entrance).**

<a id="p3d:cor:FR"></a> Let a time-independent scalar Friedrichs parent on $\mathbb R^6$ contain positive kinetic energy, repulsive Coulomb $g/|De_1+q_d-q_r|$, and smooth confining scalar or finite Hermitian spin-diagonal potentials, with a physical kinetic floor $H+c\geq T$. If $\theta\in C_c^\infty$ is supported strictly away from the collision and $G$ is a smooth Gaussian, then $f=\theta G/\|\theta G\|$ belongs to $D(H^k)$ for every finite $k$. Its evolution is smooth in spacetime away from collision. The complete scalar-current flow is almost surely global and equivariant for the reference entrance and any one $\mu_0\ll|f|^2dq$. Off nodes and collision its local flow maps have ordinary smooth inverses. 

 

**Proof.**

The new $f$ is in $C_c^\infty$ of the collision-free domain. On its compact support every coefficient of $H$ is smooth, and local differentiation does not enlarge support. Thus $H^kf\in C_c^\infty$ of that same domain for every $k$, proving the domain assertion by induction. Unitary evolution preserves each graph norm. Local elliptic estimates on nested compact subsets give arbitrarily high spatial Sobolev regularity, while time derivatives are powers of $H$. Strong continuity in each graph norm and Sobolev embedding give the jointly smooth representative away from collision. Support need not remain compact. The conserved kinetic floor gives finite kinetic energy on each finite interval, and the complete first graph supplies the logarithmic time cost. Relative Hardy excludes all-times collisions. One may apply the smooth-current global-existence criterion of Teufel–Tumulka [[2](/quantum-measurement/research/reference-weighted-flows/bibliography#bib-TTflow)], or the already established Theorem [3.3](/quantum-measurement/research/reference-weighted-flows/the-logarithmic-chain-rule-and-deterministic-selection#p3f:thm:deterministic) with these stronger hypotheses. Ordinary local ODE theory applies where the smooth density is positive and gives the stated local inverses. 

□



For instance choose $\theta=1$ on $|q|\leq D/16$ and $\theta=0$ on $|q|\geq D/8$, with a flat smooth transition. Then $|q_d-q_r|\leq\sqrt2D/8<D/4$ on its support, so the collision distance is at least $3D/4$. This explicit stock change is sufficient for the graph-power proof. An unchanged Gaussian is nonzero at the collision; applying the kinetic operator again to its $gG/r$ first image generally produces a nonzero collision delta and non-$L^2$ terms. An exponentially small Gaussian value there does not repair that domain failure. Corollary [10.1](/quantum-measurement/research/reference-weighted-flows/a-distinct-compact-entrance-coulomb-alternative#p3d:cor:FR) therefore provides no uncharged replacement of the entrance in Theorem [8.2](/quantum-measurement/research/reference-weighted-flows/bare-coulomb-with-an-unchanged-gaussian-and-prescribed-fields#p3d:thm:CRG).
