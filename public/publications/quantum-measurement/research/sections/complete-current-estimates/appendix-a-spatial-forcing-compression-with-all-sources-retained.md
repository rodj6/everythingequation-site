# Appendix A: Spatial forcing compression with all sources retained

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-A"></a>

## A Spatial forcing compression with all sources retained

 <a id="p4s:sec:spatial"></a>

A bounded relative-position region can have discrete free spatial modes even when the complete source Hilbert space has continuous spectrum. The following construction truncates the spatial forcing directions and leaves every source coefficient exact.



**Theorem A.1 (Full-source inverse defect).**

 <a id="p4s:thm:spatial"></a> Let $\mathcal H=L^2(\Omega;\mathcal Z)$, where $\mathcal Z$ includes all source, centre-of-mass and internal variables. Let $a$ be a closed positive form with operator $K$ and 

$$

 a(v,v)\geq\|v\|^2+\lambda\|\nabla_{\rm rel}v\|^2
                 +\text{the required hidden kinetic forms}.

$$

 Choose a bounded open relative-position domain $D\subset\Omega$, with free Dirichlet eigenvalues $\mu_j$, and project onto its first $N$ spatial eigenfunctions tensored with $I_{\mathcal Z}$. In the full physical form domain let $\mathcal W_N$ consist of zero extensions of vectors in $H_0^1(D;\mathcal Z)$ whose coefficients in those $N$ modes vanish. This defines the zero Dirichlet condition without requiring a classical boundary trace. Let $\mathcal V_N=\mathcal W_N^{\perp_a}$ and let $K_N$ be the restricted closed form operator on the Hilbert closure of $\mathcal V_N$. With its physical inclusion $J_N$, define 

$$

 B=K^{-1},\quad B_N=J_NK_N^{-1}J_N^\dagger,\quad D_N=B-B_N .

$$

 Then $D_N\geq0$, its range is in $\mathcal W_N$, and <a id="p4s:eq:spatial"></a>


$$

 \|D_N\|\leq\delta_N,\qquad
 \|K^{1/2}D_N\|\leq\sqrt{\delta_N},\qquad
 \delta_N=(1+\lambda\mu_{N+1})^{-1}.

$$

Equation (A.1).

 All exterior responses and Dirichlet form traces of $Bh$ and $B_Nh$ coincide. If $D\subset[-a,a]^3$ and $N=n^3$, a sufficient bound is $\delta_N\leq[1+\lambda\pi^2(n+1)^2/(4a^2)]^{-1}$. 

 

**Proof.**

The coercive gradient bound makes form convergence imply convergence in the relative $H^1$ norm. The zero extensions of $H_0^1(D;\mathcal Z)$ form a closed subspace there; the spatial-mode coefficient conditions are closed already in $L^2$. Thus $\mathcal W_N$ and its form orthogonal complement are closed. Decompose the Riesz solution $u=Bh$ into $u_N+w_N$. Testing its form equation in each orthogonal subspace gives $u_N=B_Nh$, $w_N=D_Nh$ and 

$$

 a(D_Nh,D_Nh)=\langle h,D_Nh\rangle .

$$

 In particular $D_N$ is the positive inverse associated with the restricted high form, included into the physical space. The vector spectral expansion in the free spatial basis gives $\|\nabla_{\rm rel}w\|^2\geq\mu_{N+1}\|w\|^2$ on $\mathcal W_N$. Coercivity and Cauchy–Schwarz therefore yield $\|D_Nh\|\leq\delta_N\|h\|$; substitution in the last identity proves the form bound. Its support and zero Dirichlet trace give the exterior claim; equality of conormal derivatives is not asserted. Dirichlet domain monotonicity compares $D$ to the cube. Any cube mode below $\pi^2(n+1)^2/(4a^2)$ has all three indices at most $n$, so there are at most $n^3$ such modes, proving the stated ceiling. 

□



If the high form is dense in the corresponding high Hilbert space, $D_N$ is its compressed-form inverse, included by zero extension. Otherwise its Hilbert closure is used; the proof is unchanged. It is generally *not* the unrestricted inverse followed by a high projection. For example, with $K=\left(\begin{smallmatrix}2&1\\1&2\end{smallmatrix}\right)$ and $\mathcal W=\operatorname{span}(0,1)$, $D=\operatorname{diag}(0,1/2)$, whereas $K^{-1}Q=\left(\begin{smallmatrix}0&-1/3\\0&2/3\end{smallmatrix}\right)$ is not even self-adjoint.

The decreasing high spaces have zero intersection by completeness of the free spatial expansion. Their orthogonal projections in the form Hilbert space converge strongly to zero: nested projection differences have squared norms equal to the differences of the squared projection norms, and the limit lies in the intersection. Hence the retained spaces are form dense. One may enrich them by any finite list of original form columns by intersecting the high space with their form orthogonal complements. The defect decreases and [(A.1)](/quantum-measurement/research/complete-current-estimates/appendix-a-spatial-forcing-compression-with-all-sources-retained#p4s:eq:spatial) survives; an enriched $f\in\operatorname{Dom}K$ satisfies $B_NKf=f$. No actual population has been substituted.

The construction supplies an inverse error and exact source retention, not a finite apparatus simulation: each spatial coefficient remains in $\mathcal Z$, and boundary response spaces can be infinite dimensional. Any evolution or control estimate must still propagate the physical form under its own hypotheses. Once that estimate supplies $e,Q$, Proposition [2.1](/quantum-measurement/research/complete-current-estimates/from-a-coherent-error-to-the-complete-physical-current#p4s:prop:current) controls every admitted coordinate current, including source currents.
