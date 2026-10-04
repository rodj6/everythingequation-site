# Section 3: Exact nonlinear returns on a plane

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\R = \mathbb R
\C = \mathbb C
\Cc = C_c^\infty
\Cb = C_b^\infty
\diver = \operatorname{div}
\tr = \operatorname{tr}
\diag = \operatorname{diag}
\Sym = \operatorname{Sym}
\skw = \operatorname{skew}
\Sp = \operatorname{Sp}
\supp = \operatorname{supp}
\norm = \left\|#1\right\|
\ip = \left\langle #1,#2\right\rangle
\calH = \mathcal H
\calD = \mathcal D
\bibfont = \small
-->

<a id="section-3"></a>

## 3 Exact nonlinear returns on a plane

<a id="sec:plane"></a>

We first work on ${\mathbb R}^n$, $n\geq2$, with a fixed density <a id="eq:densityclass"></a>


$$

 r=Z^{-1}e^{-U},\qquad
 U(x)=\tfrac12x^TPx+u(x),\quad P>0,\quad u\in{C_b^\infty},\quad
 \nabla^2U\geq\kappa I>0.

$$

Equation (3.1).

 Here ${C_b^\infty}$ means that the function and every derivative are bounded. In parameter families $P$ is fixed and dependence is smooth in the $C_b^\infty$ topology: every mixed parameter and spatial derivative of $u$ is locally uniformly bounded in space. The same convention will apply to parameterized sources $h$, and a common positive convexity constant is required locally in parameter space. The application is $n=2$, $P={\operatorname{diag}}(2,4)$ and $u=0$.



<a id="section-3-1"></a>

### 3.1 A weighted inverse with global estimates





**Lemma 3.1 (Weighted Poisson equation).**

<a id="lem:poisson"></a> If $h\in{C_b^\infty}$ and $\int rh=0$, then <a id="eq:poisson"></a>


$$

 -{\operatorname{div}}(r\nabla\phi)=rh

$$

Equation (3.2).

 has a solution, unique modulo constants among functions with $\nabla\phi\in L^2(r)$, normalized by $\int r\phi=0$. It has at most linear growth, all its positive-order spatial derivatives are bounded, and $\|\nabla\phi\|_\infty\leq\|\nabla h\|_\infty/\kappa$. For smooth parameter families satisfying [(3.1)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:densityclass), every parameter derivative grows at most linearly and has bounded spatial derivatives of every positive order, with constants depending on the corresponding parameter seminorms. 





**Proof.**

Let $L_r=\Delta-\nabla U\cdot\nabla$. Its diffusion $dX_t=-\nabla U(X_t)\,dt+\sqrt2\,dB_t$ is globally defined: the drift is globally Lipschitz and dissipative. Its invariant density is $r$, as follows by integration by parts, or by the stationary Fokker–Planck equation and the quadratic Lyapunov bound. This diffusion is an analytic device, not a physical random controller. Synchronous coupling gives $|X_t^x-X_t^y|\leq e^{-\kappa t}|x-y|$. For its semigroup $P_t$, centering therefore implies 

$$

 |P_th(x)|\leq\|\nabla h\|_\infty e^{-\kappa t}
       \bigl(|x|+\mathbb E_r|X|\bigr).

$$

 Consequently $\phi(x)=\int_0^\infty P_th(x)\,dt$ converges, has at most linear growth, is centered, and solves $-L_r\phi=h$.

The derivative $J_t=D_xX_t^x$ solves $\dot J_t=-\nabla^2U(X_t)J_t$, so $\|J_t\|\leq e^{-\kappa t}$. For every $m\geq2$, $D_x^mX_t$ satisfies the same contracting linear equation with forcing consisting of bounded higher derivatives of $U$ and products of at least two lower flow derivatives. Induction and variation of constants give $\|D_x^mX_t\|\leq C_m e^{-\kappa t}$. Differentiation of $P_th$ and integration in $t$ prove all the asserted spatial bounds.

For completeness, the same gradient estimate and invariance of $r$ give the Poincaré inequality 

$$

 \operatorname{Var}_r(f)
 =2\int_0^\infty\|\nabla P_tf\|_{L^2(r)}^2\,dt
 \leq\kappa^{-1}\|\nabla f\|_{L^2(r)}^2 .

$$

 Approximation extends it to the weighted energy space. Testing the difference of two solutions there shows that its gradient vanishes.

For a parameter $\alpha$, differentiating $-L_r\phi=h$ gives 

$$

 -L_r\partial_\alpha\phi
  =\partial_\alpha h+(\partial_\alpha L_r)\phi.

$$

 The right side is bounded with bounded derivatives because $P$ is fixed and $\partial_\alpha u\in{C_b^\infty}$. It is centered: differentiate $\int rh=0$ and $\int rL_r\phi=0$ to check this identity. Apply the already proved inverse and choose the differentiated normalization constant. Repeating this argument proves all parameter estimates. Difference quotients and uniqueness justify the differentiations, first in the energy space and then with the displayed spatial bounds. 

□



This proof explains the noncompact tail control needed in the sequel. Closeness of a wavefunction in a local norm would not suffice.



<a id="section-3-2"></a>

### 3.2 Physical density rectangles



Choose $f,g\in{C_c^\infty}({\mathbb R}^n)$ and put 

$$

 h_f=-L_rf,\qquad h_g=-L_rg,\qquad
 \rho_{a,b}=r(1+a h_f+b h_g).

$$

 For sufficiently small $|a|,|b|$, this is a normalized positive density of class [(3.1)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:densityclass). Let $\phi_a,\phi_b$ solve <a id="eq:connection"></a>


$$

 -{\operatorname{div}}(\rho_{a,b}\nabla\phi_a)=r h_f,\qquad
 -{\operatorname{div}}(\rho_{a,b}\nabla\phi_b)=r h_g .

$$

Equation (3.3).

 The right sides divided by $\rho_{a,b}$ meet [lemma 3.1](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:poisson). At the origin of parameter space, $\nabla\phi_a=\nabla f$ and $\nabla\phi_b=\nabla g$.

Fix a smooth increasing function $\eta:[0,1]\to[0,1]$, flat at both endpoints, for example the normalized integral of $\exp[-1/(t(1-t))]$. In four unit-time stages, traverse the rectangle 

$$

 (0,0)\longrightarrow(\epsilon,0)\longrightarrow
 (\epsilon,\epsilon)\longrightarrow(0,\epsilon)
 \longrightarrow(0,0)

$$

 using $\eta$ on each edge. Define <a id="eq:inversepotential"></a>


$$

 S_t=\dot a\,\phi_a+\dot b\,\phi_b,\qquad
 V_t=\frac{\Delta\sqrt{\rho_{a,b}}}{2\sqrt{\rho_{a,b}}}
       -\partial_tS_t-\frac12|\nabla S_t|^2+E .

$$

Equation (3.4).

 Direct substitution gives the exact strong Schrödinger solution <a id="eq:exactpath"></a>


$$

 \psi_t=e^{-iEt}\sqrt{\rho_{a(t),b(t)}}\,e^{iS_t}.

$$

Equation (3.5).

 The imaginary part of the equation is [(3.3)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:connection); its real part is [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential). At both endpoints $S_t$ and $\partial_tS_t$ vanish, so both the ray and holding potential return.

Indeed 

$$

 \frac{\Delta\sqrt{\rho}}{2\sqrt{\rho}}
   =\frac18|\nabla(-\log\rho)|^2-\frac14\Delta(-\log\rho)
   =\frac18 x^TP^2x+O(1+|x|).

$$

 The same growth estimate holds after any time derivative of the nonquadratic part. The potential in [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential) therefore has the common domain and propagator described in [section 2](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#sec:model). The displayed wavefunction and its time derivative are rapidly decreasing and lie in that domain. Moreover $\nabla S_t$ is globally bounded and globally Lipschitz, with all positive-order spatial derivatives bounded. Its flow is complete in both time directions and is a smooth diffeomorphism of the whole space.

In the physical plane take $P=2\Omega_s$, $\Omega_s={\operatorname{diag}}(1,2)$, and $E=E_s={\operatorname{tr}}\Omega_s/2=3/2$. Then $V_0=V_4=\tfrac12s^T\Omega_s^2s$ exactly, including the constant energy offset. Subtracting this holding potential gives $v_{\mathrm{nl}}$ in [(2.1)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:H). The active coordinates remain in their stationary ground state throughout. Thus the plane construction is a physical one-body control of particle 1 in the full interacting model, with all pair interactions unchanged.



<a id="section-3-3"></a>

### 3.3 Curvature and arbitrary invariant measures



For a compactly supported smooth vector field $b$, define its weighted solenoidal projection by <a id="eq:projection"></a>


$$

 \Pi_r b=b-\nabla\lambda,\qquad
 L_r\lambda={\operatorname{div}} b-\nabla U\cdot b .

$$

Equation (3.6).

 The source is centered and satisfies [lemma 3.1](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:poisson). Integration by parts shows that this is the orthogonal projection in $L^2(r;{\mathbb R}^n)$ onto the fields with ${\operatorname{div}}(rw)=0$. It annihilates gradients in the energy space. Our convention is $[u,v]=(u\cdot\nabla)v-(v\cdot\nabla)u$.



**Lemma 3.2 (Actual rectangular holonomy).**

<a id="lem:rectangle"></a> The physical rectangle above has endpoint map <a id="eq:rectangle"></a>


$$

 F_\epsilon=I+\epsilon^2\Pi_r[\nabla f,\nabla g]
                 +O_{C_b^k}(\epsilon^3)

$$

Equation (3.7).

 for every fixed finite $k$. The norm here is that of the bounded displacement and its derivatives; constants depend on $f,g,k$. 





**Proof.**

The global bounds in [lemma 3.1](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:poisson) allow Taylor expansion of the parameter-dependent flow on all four edges, uniformly in space. The first-order displacements cancel. The oriented second-order field is 

$$

 c=\partial_a\nabla\phi_b-\partial_b\nabla\phi_a
                       +[\nabla f,\nabla g]\quad\text{at }(0,0).

$$

 Differentiating [(3.3)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:connection) in the other parameter shows ${\operatorname{div}}(rc)=0$. Equivalently this follows by expanding the exact Jacobian identity for the returning density. The first two terms are gradients of finite-energy functions, so orthogonal projection gives $c=\Pi_r[\nabla f,\nabla g]$. The bounded spatial and parameter derivatives through order $k+3$ give the stated third-order remainder by the integral form of the ODE Taylor formula. 

□





**Lemma 3.3 (Local gradient generation).**

<a id="lem:brackets"></a> Every $w\in{C_c^\infty}({\mathbb R}^n;{\mathbb R}^n)$ satisfying ${\operatorname{div}}(rw)=0$ is a finite linear combination of fields $\Pi_r[\nabla f,\nabla g]$ with $f,g\in{C_c^\infty}({\mathbb R}^n)$. 





**Proof.**

The following identity, with the bracket convention above, is [[2](/quantum-measurement/research/preparation-returns/bibliography#bib-AGSmooth), version 2, equation (10)]: <a id="eq:gradientidentity"></a>


$$
\begin{aligned}
 \phi|\nabla\gamma|^2\nabla\gamma
 ={}&-\frac14[\nabla(\phi\gamma^2),\nabla\gamma]
     -\frac1{12}[\nabla\phi,\nabla(\gamma^3)]\\
    &-\frac14[\nabla(\gamma^2),\nabla(\phi\gamma)].
\end{aligned}
$$

Equation (3.8).

 It also follows directly from the product rule. Write $w=\sum_j w_j e_j$. Choose a compactly supported $\gamma_j$ equal to $x_j$ on a neighborhood of ${\operatorname{supp}} w_j$ and use $\phi=w_j$ in [(3.8)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:gradientidentity). Its left side is $w_j e_j$ and every function on its right side is compactly supported. Summing and applying $\Pi_r$, using $\Pi_rw=w$, proves the claim. Constants can be absorbed into $f$. 

□





**Theorem 3.4 (Planar all-Borel uniqueness).**

<a id="thm:plane"></a> For a density [(3.1)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:densityclass) on ${\mathbb R}^n$, $n\geq2$, the only Borel probability invariant under all sufficiently small physical rectangles [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential) is $r(x)\,dx$. Every rectangle is an exact return with a complete guided flow. 





**Proof.**

Born invariance follows from [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac). Conversely, if $\mu$ is invariant, [lemma 3.2](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:rectangle) and any $\varphi\in{C_c^\infty}$ give 

$$

 0=\lim_{\epsilon\to0}\int
       \frac{\varphi(F_\epsilon x)-\varphi(x)}{\epsilon^2}\,d\mu(x)
   =\int\nabla\varphi\cdot\Pi_r[\nabla f,\nabla g]\,d\mu .

$$

 The uniform displacement estimate bounds the difference quotient globally, so dominated convergence applies to every finite measure. By [lemma 3.3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:brackets), <a id="eq:distribution"></a>


$$

 \int\nabla\varphi\cdot w\,d\mu=0
 \quad\text{whenever } w\in{C_c^\infty},\quad{\operatorname{div}}(rw)=0 .

$$

Equation (3.9).



Take a local smooth volume chart $y=\chi(x)$ with $\det D\chi=r(x)$; for example integrate $r$ in the first coordinate and leave the others unchanged. On any smaller ball in this chart, each constant coordinate field $e_j$ extends to a compactly supported divergence-free field. To see this, choose $k\ne j$ and a smooth compactly supported function equal to $y_k$ near that ball, and set the $j,k$ components to its $k,-j$ derivatives. Pulling back produces a compact field with ${\operatorname{div}}(rw)=0$. Equation [(3.9)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:distribution) says that all distributional first derivatives of $\chi_*\mu$ vanish on the smaller ball. A distribution with that property is constant there: convolve locally with a mollifier, obtain constant smooth functions, and pass to the distributional limit. Hence $\mu=c\,r\,dx$ locally. Overlapping charts in connected ${\mathbb R}^n$ have the same constant, and normalization gives $c=1$. This argument includes atoms, shell measures, and singular continuous measures; none is discarded by a trajectory exceptional set. 

□



One can also express the limiting step in terms of actual maps. For a finite bracket decomposition of a compact $w$, a finite product of rectangles has the form $I+\epsilon^2w+O_{C_b^1}(\epsilon^3)$. Its $m$-fold iterate at $\epsilon=\sqrt{t/m}$ converges uniformly to the complete time-$t$ flow of $w$, with error $O(m^{-1/2})$ by the elementary discrete Gronwall estimate. Each approximant is a finite exact physical return, although its total duration can grow with $m$. Invariance passes through bounded continuous test functions. No infinite concatenation is asserted to be a finite-duration physical protocol.

Dimension two matters. On the real line a complete returning guided map is increasing and preserves $r\,dx$. Applying its strictly increasing cumulative distribution function shows that the map is the identity. Such maps alone cannot select a probability law.
