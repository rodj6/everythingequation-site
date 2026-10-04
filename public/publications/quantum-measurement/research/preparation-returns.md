# Preparation-Return Holonomy and Equilibrium Uniqueness in Engineered Interacting Networks

Jeremy Rodgers · Independent Researcher · 4 October 2026

[Manuscript DOI](https://doi.org/10.5281/zenodo.23131064) · [Original PDF](/publications/quantum-measurement/research/preparation-returns.pdf)

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

# Abstract and publication identity

**Abstract.**

An exact return of a quantum state need not return the configurations guided by its intervening wavefunction. We use this distinction to characterize quantum equilibrium at a single preparation. For any prescribed finite connected particle graph, we construct a positive harmonic holding Hamiltonian with fixed nonzero, directionally restricted pair interactions. Two coordinates of one particle form a reserved nonlinear plane. Physical one-body scalar controls implement exact state-returning density loops in that plane and exact Gaussian returns whose configuration maps realize $SO(3N)$ in whitened coordinates. The only Borel probability invariant under the resulting return library is the Born measure. No density, absolute continuity, or regular probability functional across wavefunctions is assumed. The proof supplies global guided flows, a continuum inverse-engineering construction, and finite-dimensional endpoint correction preserving the Gaussian configuration curvature. We also prove a broader Gaussian holonomy theorem for connected fixed quadratic networks, without extending the nonlinear conclusion to that larger class. Reversible preparation paths and fixed-network linear readouts give corresponding transport and no-hysteresis statements. Applying uniqueness to an actual preparation law requires the separate statistical premise of invariance under the specified returns. We also analyze a lazy inverse-balanced randomized return controller: its absolutely continuous laws converge in total variation, but every finite round obeys a reverse bound, and retained command history can recover the initial nonequilibrium by an inverse echo. These controller results do not derive the required statistical premise. 



**Keywords:** quantum equilibrium; Bohmian mechanics; holonomy; interacting networks; exact control.

---

# Section 1: Introduction

<a id="section-1"></a>

## 1 Introduction

 

<a id="paragraph-1"></a>

#### Publication relationship.

 This article revises the author's manuscript of 7 September 2026. Its nonlinear and Gaussian constructions, all-Borel uniqueness theorem, general Gaussian appendix, and quantitative witness are retained with full proofs. Section [8](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#sec:random) consolidates the same-date randomized-return preparation report [[18](/quantum-measurement/research/preparation-returns/bibliography#bib-RandomizedReport)]; these results are not claimed as newly discovered in this revision. The companion common-control density characterization is logically independent and is cited only for comparison.

Suppose a preparation is taken through a controlled Schrödinger evolution and brought back to precisely the same wavefunction ray and Hamiltonian. Must its configuration distribution also return? In Bohmian mechanics the question is substantive: the velocity depends on the whole wavefunction history, and the endpoint transformation of configurations need not be the identity. We call this transformation a *preparation-return map*. The collection of such maps can distinguish probability laws even when each quantum endpoint is identical.

We construct an interacting model in which invariance under a specified library of exact returns singles out the Born measure among all Borel probabilities. The argument has two ingredients. Nonlinear density loops in a reserved two-dimensional plane determine its marginal law, including possible singular parts. Gaussian loops mix all configuration directions. Rotational invariance and one Gaussian marginal then determine the entire joint distribution by its characteristic function. This last step requires neither independent coordinates nor conditional densities.

The distinction between the three assertions involved is important. The Hamiltonians implement exact returns; their configuration maps have a unique invariant probability; and an actual preparation law may be required to be invariant under those returns. The first two assertions are proved here. The third is a statistical preparation principle, not a consequence of deterministic Schrödinger and guidance equations.



<a id="section-1-1"></a>

### 1.1 Main result and scope



Particles are distinguishable, scalar, and three-dimensional. We set $\hbar$ and their masses to one. A separate positive mass for each particle is accommodated by blockwise mass scaling. Let $G$ be a prescribed connected graph on $N\geq2$ particles, and write $d=3N$.



**Theorem 1.1 (Engineered return uniqueness).**

<a id="thm:main"></a> For every such graph there exist fixed nonzero pair potentials 

$$

 W_{ij}(q_i,q_j)=\frac{k_{ij}}2(q_i^1-q_j^1)^2,\qquad
 k_{ij}>0,\quad \{i,j\}\in G,

$$

 and one-body harmonic holding traps with positive total stiffness $K_0$, having the following properties. The coordinates $s=(q_1^2,q_1^3)$ form an independent harmonic plane at holding, with frequencies $1,2$. Put $A_0=K_0^{1/2}$ and <a id="eq:reference"></a>


$$

 \psi_0(q)=\left(\frac{\det A_0}{\pi^d}\right)^{1/4}
             e^{-q^TA_0q/2},\qquad \nu_0(dq)=|\psi_0(q)|^2\,dq .

$$

Equation (1.1).

 There is a library ${\mathcal H}_{\psi_0}$ of globally defined smooth configuration diffeomorphisms, generated by the exact protocols specified in [section 3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#sec:plane), [section 4](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#sec:gaussian), [section 5](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#sec:engineering), such that <a id="eq:main"></a>


$$

 F_*\mu=\mu\ \text{for every }F\in{\mathcal H}_{\psi_0}
 \quad\Longleftrightarrow\quad \mu=\nu_0

$$

Equation (1.2).

 for every Borel probability $\mu$ on ${\mathbb R}^d$.

Each protocol has finite duration, leaves every pair potential fixed, uses only one-body scalar controls, and satisfies $\psi(T)=e^{i\theta}\psi_0$ and $H(T)=H(0)=H_0$ exactly. The controls are local quadratic traps and smooth nonlinear potentials on the reserved plane. The latter differ from its harmonic holding potential by at most linear growth. All guided histories used in the theorem exist at every configuration. 



The quantifier is existence of engineered couplings on each graph, not universality over its coupling matrices. Their interparticle blocks have rank one and leave the reserved plane uncoupled at holding. Local quadratic stages subsequently mix that plane with the rest of the network. The holding ground state is entangled across interacting particle partitions, although its reserved-plane factor separates. The proof does not assign a factorized law to an arbitrary candidate $\mu$. Full isotropic pair interactions generally remove this plane; the nonlinear theorem makes no assertion for them.



<a id="section-1-2"></a>

### 1.2 Relation to previous work



Quantum equilibrium, effective wavefunctions, and the extraction of measurement statistics from actual apparatus configurations are established parts of Bohmian mechanics [[3](/quantum-measurement/research/preparation-returns/bibliography#bib-DGZ1992), [4](/quantum-measurement/research/preparation-returns/bibliography#bib-DGZ2004)]. Goldstein and Struyve [[7](/quantum-measurement/research/preparation-returns/bibliography#bib-GS2007)] prove uniqueness under a locality hypothesis on a wavefunction-indexed probability functional and discuss other possible characterizations, including universal equivariance and heredity. Our object is instead a single arbitrary Borel law at one preparation. The companion control-consistency characterization [[19](/quantum-measurement/research/preparation-returns/bibliography#bib-Rodgers2026)] concerns a differentiable probability assignment across states and is not used in any proof below. The respective assumptions are different; we assert no implication ordering them.

Two transport results identify relevant geometric mechanisms. Abdelgalil and Georgiou's Gaussian transport theorem [[1](/quantum-measurement/research/preparation-returns/bibliography#bib-AGGaussian), version 2, Proposition 4 and Corollary 1] gives the full covariance-preserving rotation group for unrestricted Gaussian horizontal transport. Their smooth transport analysis [[2](/quantum-measurement/research/preparation-returns/bibliography#bib-AGSmooth), version 2, Proposition 1, equation (10)] provides the gradient-bracket identity used below. We reproduce that identity and its local consequence. Our problem additionally restricts the physical actuators and requires exact Schrödinger return. In particular, a covariance path by itself does not establish its realizability by fixed-interaction one-body controls.

Recurrence and control of quadratic oscillators were studied by Genoni et al. [[6](/quantum-measurement/research/preparation-returns/bibliography#bib-Genoni2012)]. Recurrence permits approximate reversal of positive quadratic dynamics. Here an endpoint submersion supplies exact corrections, and a separate calculation determines their Bohmian configuration action. Inverse engineering from flow fields has precedents in shortcut-to-adiabaticity constructions [[9](/quantum-measurement/research/preparation-returns/bibliography#bib-Patra2017)]. Our nonlinear argument supplies a weighted Poisson inverse and global estimates on Gaussian tails. The semigroup method is closely related to Stein-factor estimates for strongly log-concave densities [[8](/quantum-measurement/research/preparation-returns/bibliography#bib-Mackey2016)]; the parameter and all-order spatial estimates needed here are proved directly.

The contribution is this physical realization and invariant-measure argument in a specified interacting network, rather than a new derivation of the underlying Bohmian measurement framework.

---

# Section 2: Hamiltonians and exact return maps

<a id="section-2"></a>

## 2 Hamiltonians and exact return maps

<a id="sec:model"></a>

In physical particle coordinates the admitted Hamiltonians are <a id="eq:H"></a>


$$

 H(t)=-\frac12\Delta+\frac12q^T(K_0+D(t))q+v_{\mathrm{nl}}(s,t),
 \qquad D(t)\in{\mathcal D}:=\bigoplus_{i=1}^N{\operatorname{Sym}}(3).

$$

Equation (2.1).

 During quadratic stages $v_{\mathrm{nl}}=0$ and $K_0+D(t)>0$. During nonlinear stages $D=0$ and $v_{\mathrm{nl}}$ is the plane control constructed in [section 3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#sec:plane). All amplitudes are finite for each protocol; there is no uniform bound on the entire control library. The coefficients are smooth on each stage and piecewise smooth under finite concatenation. At joining endpoints the holding Hamiltonian is restored. No momentum control or time-dependent pair interaction is admitted.

These Hamiltonians have the common self-adjoint domain <a id="eq:domain"></a>


$$

 {\mathcal D}_{\mathrm{osc}}=D(-\Delta+|q|^2)
   =\{f\in H^2({\mathbb R}^d): |q|^2f\in L^2\}.

$$

Equation (2.2).

 For each compact time interval their graph norms are equivalent. The nonlinear perturbations and their time derivatives have growth $O(1+|s|)$ and hence oscillator relative bound zero. Positive quadratic stages have the same domain. Smoothness as maps ${\mathcal D}_{\mathrm{osc}}\to L^2$ implies the usual common-domain nonautonomous evolution conditions: after a fixed positive shift, $\dot H(t)(H(t)+c)^{-1}$ is bounded and strongly continuous, with the corresponding difference quotients uniformly convergent on a stage. The common-domain propagator theorem [[10](/quantum-measurement/research/preparation-returns/bibliography#bib-ReedSimonII), Theorem X.70], applied to $-i(H(t)+c)$, therefore gives a unitary propagator, stage by stage. All particular wavefunctions below are also explicit strong solutions; their configuration flows will be checked independently.

For a nonvanishing solution write $\psi=\sqrt\rho\,e^{iS}$. Its guidance velocity and continuity equation are <a id="eq:guidance"></a>


$$

 \dot q=\operatorname{Im}\frac{\nabla\psi}{\psi}=\nabla S,
 \qquad \partial_t\rho+{\operatorname{div}}(\rho\nabla S)=0.

$$

Equation (2.3).

 If this velocity has a global smooth flow $F_t$, then <a id="eq:Jac"></a>


$$

 \rho_t(F_t(q))\det DF_t(q)=\rho_0(q).

$$

Equation (2.4).

 Thus any exact ray return with such a flow preserves its Born measure. Equation [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac) follows by differentiating its left-hand side; global invertibility justifies the change of variables. It does not assume that the actual configuration law equals $\rho_0\,dq$.



**Definition 2.1.**

<a id="def:return"></a> An exact return protocol based at $(H_0,\psi_0)$ has $H(0)=H(T)=H_0$ and $\psi(T)=e^{i\theta}\psi_0$. Its preparation-return map is its actual guided endpoint $F_T$. The library in [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main) consists of finite compositions of the planar rectangles (including the pair [(6.1)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witnessfg)) and corrected Gaussian loops constructed below, and their physical inverses. Invariance means ordinary Borel pushforward invariance on all of ${\mathbb R}^d$. 



The inverses are available without reversing the sign of the kinetic energy. For any real scalar Hamiltonian history taking a real $\phi$ to $e^{i\theta}\chi$ with real $\chi$, $e^{i\theta}\overline{\psi(T-t)}$ solves the time-reversed Hamiltonian history, starts at $\chi$, and ends at $e^{i\theta}\phi$. Its velocity is the negative reversed velocity and its configuration map is the inverse. This argument concerns the designated state trajectory; it does not identify time reversal with the inverse quantum propagator on arbitrary input states.

---

# Section 3: Exact nonlinear returns on a plane

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

---

# Section 4: Exact Gaussian returns with fixed interactions

<a id="section-4"></a>

## 4 Exact Gaussian returns with fixed interactions

<a id="sec:gaussian"></a>

This section separates two endpoint problems. The classical symplectic propagator determines exact quantum return for a quadratic Hamiltonian. The configuration propagator is computed from its evolving Gaussian phase. They are different matrices.



<a id="section-4-1"></a>

### 4.1 Symplectic endpoint correction



Let $K_0=O\Omega^2O^T>0$, with $\Omega={\operatorname{diag}}(\omega_1,\ldots,\omega_d)$. First suppose the frequencies are positive integers. At $T=2\pi$ the uncontrolled symplectic propagator is the identity. Define <a id="eq:symplectic"></a>


$$

 \dot{\mathsf S}=\mathsf A(K_0+D(t))\mathsf S,\qquad
 \mathsf A(K)=\begin{pmatrix}0&I\\-K&0\end{pmatrix},\qquad
 \mathsf S(0)=I .

$$

Equation (4.1).

 Here $\mathsf S$ acts on classical position and momentum, used to represent the quadratic quantum evolution. It is not a guidance flow. The metaplectic representation, or equivalently the exact Heisenberg equations for Weyl operators, shows that $\mathsf S(T)=I$ implies $U(T)=e^{i\theta}I$ on the full quantum Hilbert space [[5](/quantum-measurement/research/preparation-returns/bibliography#bib-Folland1989), Chapter 4]. Irreducibility of the Weyl representation gives the same conclusion directly. There is no spectral truncation in this implication.

For a physical matrix $M\in{\mathcal D}$ write $\widetilde M=O^TMO$. The following finite-dimensional criterion will be arranged by engineering the holding traps.



**Lemma 4.1 (Endpoint submersion).**

<a id="lem:submersion"></a> Assume that 

1. (i) the positive numbers $2\omega_i$, $\omega_i+\omega_j$ and $|\omega_i-\omega_j|$ ($i<j$) are pairwise distinct;

2. (ii) for each $i<j$ some $M\in{\mathcal D}$ has $\widetilde M_{ij}\ne0$;

3. (iii) the vectors $(\widetilde M_{11},\ldots,\widetilde M_{dd})$, $M\in{\mathcal D}$, span ${\mathbb R}^d$.

 Then the endpoint map from smooth, interior-supported physical quadratic controls to ${\operatorname{Sp}}(2d,{\mathbb R})$ is a submersion at zero control and time $2\pi$. A finite-dimensional family of such controls already has this property. 





**Proof.**

At the return time the differential is <a id="eq:endpointdiff"></a>


$$

 D\mathcal E(0)[D]=\int_0^{2\pi}
 \mathsf S_0(t)^{-1}
 \begin{pmatrix}0&0\\-D(t)&0\end{pmatrix}
 \mathsf S_0(t)\,dt .

$$

Equation (4.2).

 In oscillator coordinates put $q_i(t)=(a_i e^{-i\omega_i t}+\bar a_i e^{i\omega_i t})/
\sqrt{2\omega_i}$. A real quadratic $q^TMq/2$ then has the two real quadratures of $a_ia_j$ at $\omega_i+\omega_j$, those of $a_i\bar a_j$ at $\omega_i-\omega_j$, and the diagonal number terms at frequency zero. For $i=j$ the nonzero frequency is $2\omega_i$.

If a real covector on $\mathfrak{sp}(2d,{\mathbb R})$ annihilates [(4.2)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:endpointdiff) for every interior-supported time waveform and every $M$, its pairing with this quadratic expression vanishes identically in $t$. Independence of the distinct trigonometric frequencies, (ii), and (iii) force its coefficients on every root quadrature and on every diagonal number term to vanish. These form a real basis of $\mathfrak{sp}(2d,{\mathbb R})$, so the differential is onto. Select $d(2d+1)$ smooth controls whose images are a basis. Their coefficients give the asserted finite-dimensional submersion. 

□



Choose two distinct positive integers $\nu,\zeta$ larger than every frequency occurring in (i). For $M,N\in{\mathcal D}$ the trial control <a id="eq:trial"></a>


$$

 D_{\mathrm{tr}}(t,\epsilon)=
 \epsilon\bigl[(\cos\nu t-\cos\zeta t)M+\sin\nu t\,N\bigr]

$$

Equation (4.3).

 vanishes at both endpoints. Fourier orthogonality makes its first endpoint derivative zero. Add a linear combination of the finite controls from [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion), <a id="eq:corrected"></a>


$$

 D(t,\epsilon)=D_{\mathrm{tr}}(t,\epsilon)
                    +\sum_{\ell=1}^{d(2d+1)}c_\ell(\epsilon)D_\ell(t).

$$

Equation (4.4).

 The ordinary analytic implicit-function theorem, in a chart at $I\in{\operatorname{Sp}}(2d,{\mathbb R})$, gives $c_\ell(\epsilon)=O(\epsilon^2)$ and $\mathsf S(2\pi)=I$ exactly. For sufficiently small $\epsilon$, $K_0+D(t,\epsilon)>0$. Thus these are finite-duration exact quantum returns with local controls and fixed off-block entries. Only a finite-dimensional endpoint equation has been inverted.



<a id="section-4-2"></a>

### 4.2 The actual Gaussian configuration curvature



Starting in $\psi_0$, a quadratic history remains Gaussian: 

$$

 \psi_t(q)=c_t\exp[-q^TA(t)q/2+iq^TB(t)q/2],
 \qquad A(t)>0,\quad B(t)=B(t)^T .

$$

 Substitution in the Schrödinger equation gives <a id="eq:riccati"></a>


$$

 \dot A=-AB-BA,\qquad \dot B=A^2-B^2-K,\qquad
 \dot L=BL,\quad L(0)=I .

$$

Equation (4.5).

 The last equation is the actual guided map $q(t)=L(t)q(0)$. To see that these formulas are global for finite time, write 

$$

 X=\mathsf S_{qq}+i\mathsf S_{qp}A_0,\qquad
 Y=\mathsf S_{pq}+i\mathsf S_{pp}A_0 .

$$

 Symplecticity gives $X^*Y-Y^*X=2iA_0$. Hence $X$ is invertible, $A-iB=-iYX^{-1}$ is symmetric, and $A=X^{-*}A_0X^{-1}>0$. The Gaussian has no nodes, $B$ is bounded on every finite time interval, and $L$ is a global linear diffeomorphism. Also <a id="eq:covariance"></a>


$$

 L(t)^TA(t)L(t)=A_0,\qquad
 \det L(t)=\exp\left(\int_0^t{\operatorname{tr}} B(s)\,ds\right)>0 .

$$

Equation (4.6).

 Every Gaussian ray return therefore gives $A_0^{1/2}L(T)A_0^{-1/2}\in SO(d)$.



**Proposition 4.2 (Curvature surviving exact repair).**

<a id="prop:curvature"></a> For the corrected loops [(4.4)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:corrected), in modal coordinates, $L(T)=I+\epsilon^2L_2+O(\epsilon^3)$ and <a id="eq:skew"></a>
<a id="eq:whitencurve"></a>


$$
\begin{aligned}{\operatorname{skew}} L_2
   &=-\pi\nu[\mathcal R_\nu\widetilde M,
                        \mathcal R_\nu\widetilde N],
       &(\mathcal R_\nu Q)_{ij}
          &=\frac{Q_{ij}}{(\omega_i+\omega_j)^2-\nu^2},\\
 G_{ij}
   &=\frac{2\sqrt{\omega_i\omega_j}}{\omega_i+\omega_j}
                      ({\operatorname{skew}} L_2)_{ij},
       &\Omega^{1/2}L(T)\Omega^{-1/2}
          &=I+\epsilon^2G+O(\epsilon^3).
\end{aligned}
$$

Equation (4.7, 4.8).

 Matrix commutators in [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew) have the convention $[P,Q]=PQ-QP$. 





**Proof.**

Let $A=\Omega+\epsilon a+\cdots$ and $B=\epsilon b+\cdots$. For $\sigma_{ij}=\omega_i+\omega_j$ the linearized equations are $\dot a_{ij}=-\sigma_{ij}b_{ij}$ and $\dot b_{ij}=\sigma_{ij}a_{ij}-D_{ij}$. A forcing $\widetilde M_{ij}\cos\nu t$ contributes 

$$

 b_{ij}(t)=\widetilde M_{ij}
       \frac{\nu\sin\nu t-\sigma_{ij}\sin\sigma_{ij}t}
            {\sigma_{ij}^2-\nu^2};

$$

 a forcing $\widetilde N_{ij}\sin\nu t$ contributes 

$$

 b_{ij}(t)=\widetilde N_{ij}
       \frac{\nu(\cos\sigma_{ij}t-\cos\nu t)}
            {\sigma_{ij}^2-\nu^2}.

$$

 There is an analogous cosine expression at $\zeta$. All these functions integrate to zero over $T=2\pi$. Expansion of $\dot L=BL$ yields <a id="eq:area"></a>


$$

 {\operatorname{skew}} L_2=\frac12\int_0^{2\pi}
       \left[b(t),\int_0^t b(s)\,ds\right]dt .

$$

Equation (4.9).

 The direct integral of the second-order $B$ is symmetric, including the contribution of the endpoint repair.

Orthogonality removes unequal frequencies from [(4.9)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:area). At a natural frequency $\sigma_{ij}$ all matrices are multiples of the same symmetric matrix unit, and their commutator is zero. The only nonzero paired sine and cosine matrices are at $\nu$: they are $\nu\mathcal R_\nu\widetilde M$ and $-\nu\mathcal R_\nu\widetilde N$. Their elementary integral is $-\pi\nu[\mathcal R_\nu\widetilde M,
\mathcal R_\nu\widetilde N]$, proving [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew).

Exact return and [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance) imply $\Omega L_2+L_2^T\Omega=0$. Solving this entrywise in terms of ${\operatorname{skew}} L_2$ gives [(4.8)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:whitencurve). This is why a symmetric contribution before whitening cannot be simply ignored after whitening: the covariance identity supplies the necessary relation. 

□





<a id="section-4-3"></a>

### 4.3 From return curves to the exact group





**Lemma 4.3 (Exact group generation).**

<a id="lem:exactgroup"></a> Suppose a subgroup $\mathscr G\subset SO(d)$ contains analytic curves $R_j(\epsilon)=I+\epsilon^2G_j+O(\epsilon^3)$ and their inverses. If the $G_j$ generate $\mathfrak{so}(d)$ as a Lie algebra, then $\mathscr G=SO(d)$. 





**Proof.**

For a sufficiently small fixed nonzero $a$, the curves $C_j(t)=R_j(a+t)R_j(a)^{-1}$ pass through the identity and have velocities $X_j=2aG_j+O(a^2)$. A finite list of Lie words in the $G_j$ is a basis, so the corresponding determinant remains nonzero for $X_j/(2a)$. Let $V$ be the span of $\operatorname{Ad}_hX_j$ for all $h$ in the subgroup generated by the $C_j$. It is invariant under these adjoint actions. Differentiating $\operatorname{Ad}_{C_j(t)}V=V$ gives $[X_j,V]\subset V$. Thus $V=\mathfrak{so}(d)$. Select finitely many adjoint velocities forming a basis. The product of their conjugated curves has surjective differential at the origin, so its image contains an identity neighborhood, by the finite-dimensional inverse-function theorem. Consequently $\mathscr G$ is open. Since $SO(d)$ is connected, $\mathscr G=SO(d)$. Every element obtained this way is a finite product of actual curves and their inverses, rather than only a limit of such products. 

□

---

# Section 5: Engineering the holding network

<a id="section-5"></a>

## 5 Engineering the holding network

<a id="sec:engineering"></a>

We now arrange the endpoint hypotheses and the configuration curvatures while reserving the nonlinear plane. Choose particle 1 and write $a_0=q_1^1$, $s=(q_1^2,q_1^3)$. The remaining $d-2$ coordinates are called active. Select a spanning tree of the prescribed particle graph. Its interparticle edges connect first coordinates by weak springs. Within every particle other than 1, choose two one-body quadratic links connecting its first coordinate to its other coordinates. This gives a tree on the active coordinates. Its nonzero off-diagonal entries have order $\delta$. Add the other prescribed particle edges as nonzero springs of order $\delta^{d+1}$. The plane has no holding link to any other coordinate.

Choose distinct positive integer frequencies, including $1,2$ for the plane, satisfying [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion)(i). They can be chosen inductively: each new integer must avoid only finitely many equalities with previous sums, differences, and doubles. At zero coupling take the diagonal entries to be their squares. The differential of the ordered eigenvalue map with respect to these diagonal entries is the identity. The analytic implicit-function theorem therefore retunes the active diagonals by $O(\delta^2)$ so that the exact eigenvalues remain $\omega_i^2$. For small positive $\delta$ the total stiffness is positive. Spring diagonal terms are included in the total diagonal and compensated by the one-body traps. Only the engineered constants are chosen at this step; they remain fixed during every protocol.



**Lemma 5.1 (Modal overlap and curvature generation).**

<a id="lem:engineer"></a> For all sufficiently small positive $\delta$, the engineered holding matrix satisfies [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion), and the corrected Gaussian return curvatures generate $\mathfrak{so}(d)$. 





**Proof.**

On the active tree the leading component of each eigenvector at $a_0$ is a product of nonzero edge entries divided by distinct spectral gaps along its unique tree path. It is nonzero. The additional edges of order $\delta^{d+1}$ cannot cancel that leading term, because an active tree path has length at most $d-3$. Thus the local diagonal control at $a_0$ couples every pair of active modes. The one-body controls $s_1a_0$ and $s_2a_0$ couple each reserved mode to every active mode, and $s_1s_2$ couples the two reserved modes. The vectors of diagonal modal entries of physical diagonal controls form the squared-overlap matrix $(O_{ki}^2)$, which is near the identity and invertible. This proves the endpoint hypotheses.

For an active coordinate edge $\{i,j\}$ let its leading off-diagonal entry be $\delta C_{ij}$ and take $M=E_{ii},N=E_{jj}$. First-order eigenvector perturbation and the definition of $\mathcal R_\nu$ give <a id="eq:edgecurvature"></a>


$$

 [\mathcal R_\nu(O^TE_{ii}O),\mathcal R_\nu(O^TE_{jj}O)]_{ij}
 =
 \frac{-4\delta C_{ij}}
 {((\omega_i+\omega_j)^2-\nu^2)
  (4\omega_i^2-\nu^2)(4\omega_j^2-\nu^2)}
 +O(\delta^2).

$$

Equation (5.1).

 To verify the coefficient, use the first-order rotation $O_{ij}=\delta C_{ij}/(\omega_j^2-\omega_i^2)$. The two off-diagonal terms of the commutator give the difference of $(4\omega_i^2-\nu^2)^{-1}$ and $(4\omega_j^2-\nu^2)^{-1}$, divided by the spectral gap; their difference is $-4$ times that gap divided by the two denominators. All other entries are $O(\delta^2)$. Thus the edge curvature, divided by $\delta$, tends to a nonzero elementary rotation in the $i,j$ plane.

For each reserved coordinate $s_\ell$, use $M=E_{s_\ell s_\ell}$ and $N=E_{s_\ell a_0}+E_{a_0s_\ell}$. At $\delta=0$ its commutator in [(4.7)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:skew) is a nonzero elementary rotation joining $s_\ell$ and $a_0$. The active tree together with these two links is connected. Elementary rotations along a connected graph generate $\mathfrak{so}(d)$, since $[J_{ij},J_{jk}]=J_{ik}$ up to the orientation convention. A finite bracket-basis determinant is nonzero in the limiting generators and remains nonzero for small $\delta$. The nonzero factors in [(4.8)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:whitencurve) preserve this conclusion. 

□





**Theorem 5.2 (Engineered exact Gaussian holonomy).**

<a id="thm:gaussian"></a> For the holding network just constructed, the configuration maps of physically implemented Gaussian ray returns are exactly 

$$

 SO(A_0):=\{L:L^TA_0L=A_0,\ \det L>0\}.

$$

 In whitened coordinates $z=\sqrt2 A_0^{1/2}q$, this is $SO(d)$. The subgroup generated by [(4.4)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:corrected) and their physical time reversals already realizes it. 





**Proof.**

The inclusion in $SO(A_0)$ follows from [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). The opposite inclusion follows from [proposition 4.2](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#prop:curvature), [lemma 5.1](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#lem:engineer), [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup). Each curve has exact symplectic endpoint $I$ and hence exact quantum return; each inverse is physically implemented as in [section 2](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#sec:model). Positivity and common-domain evolution hold on every constituent stage. Finite products retain these properties. 

□



The construction also gives exact reachability of every symplectic matrix with the holding Hamiltonian restored at the endpoints. Indeed [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion) gives an open reachable neighborhood of $I$; shrink it to an inverse-symmetric neighborhood and take finite products. The real symplectic group is connected, as is seen from its polar decomposition into a positive symplectic factor and the connected compact subgroup $U(d)$. Such products exhaust it. This observation will be used only for explicitly stated readouts and preparation transports.



**Example 5.3 (Two particles).**

<a id="ex:two"></a> In the physical order $(a_0,s_1,s_2,b_1,b_2,b_3)$, take <a id="eq:examplematrix"></a>


$$

 K_0(\delta)=
 \begin{pmatrix}
 d_0&0&0&-\delta&0&0\\
 0&1&0&0&0&0\\
 0&0&4&0&0&0\\
 -\delta&0&0&d_1&\delta&0\\
 0&0&0&\delta&d_2&\delta\\
 0&0&0&0&\delta&d_3
 \end{pmatrix}.

$$

Equation (5.2).

 The numbers $d_j=d_j(\delta)$ are the unique analytic diagonal entries near $(49,196,576,1849)$ for which the active characteristic polynomial is $(\lambda-49)(\lambda-196)(\lambda-576)(\lambda-1849)$. This equation and the local uniqueness specify them exactly. If $\lambda_j$ denotes these four values, then 

$$

 d_j(\delta)=\lambda_j-
       \delta^2\sum_{k\sim j}\frac1{\lambda_j-\lambda_k}
       +O(\delta^3).
 
$$

 The six frequencies $(1,2,7,14,24,43)$ have pairwise distinct doubles, sums and positive differences. The physical pair potential is $\delta(a_0-b_1)^2/2$. The one-body traps contain diagonal coefficients $d_0-\delta,d_1-\delta,d_2,d_3$ and the terms $\delta b_1b_2+\delta b_2b_3$, together with the reserved plane's $s_1^2/2+2s_2^2$. For small $\delta>0$ they give [(5.2)](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#eq:examplematrix). The interparticle block has rank one and is nonzero. If the ground Gaussian factored between the two particles, its precision $A_0$ would be block diagonal and so would $K_0=A_0^2$, a contradiction. Its separate plane factor is nevertheless $(\sqrt2/\pi)^{1/2}e^{-(s_1^2+2s_2^2)/2}$. 



The theorem is stable under sufficiently small *known* changes in the holding entries that preserve the reserved-plane structure. In fact the endpoint map with $K$ as an additional finite-dimensional parameter remains a submersion. Its correction now has coefficients $c(K,\epsilon)$; the shifted return curves $R_K(a+t)R_K(a)^{-1}$ still have a nonzero bracket-basis determinant. Positivity persists, and the plane proof applies at its new fixed positive frequencies. This is recalibration in a relative open class, not immunity to unknown control errors.

A more general result for the Gaussian part alone is proved in section [A](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#app:general): connected nonzero fixed quadratic interactions and full block-local trap controls suffice for $SO(d)$ holonomy without a small-coupling or recurrent-spectrum assumption on the original device. That extension does not supply a reserved nonlinear plane.

---

# Section 6: Equilibrium uniqueness and an explicit witness

<a id="section-6"></a>

## 6 Equilibrium uniqueness and an explicit witness

<a id="sec:uniqueness"></a>



**Proof of [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main).**

 The engineered construction and [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian) supply the Gaussian part of the library. At holding the wavefunction is $\Phi_a(a)\psi_s(s)$, where $\Phi_a$ is the active ground state. During a nonlinear rectangle the Hamiltonian is the sum of its fixed active Hamiltonian and the plane Hamiltonian [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential). Its exact solution is $e^{-iE_at}\Phi_a(a)\psi_s(s,t)$. Thus its configuration map is 

$$

 (a,s)\longmapsto(a,F_s(s)),

$$

 with $F_s$ the complete nonlinear plane map. This factorization is a property of the controlled quantum history, not a hypothesis on $\mu$.

If $\mu$ is invariant under the library, its plane marginal is invariant under all these maps. By [theorem 3.4](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#thm:plane) it is the Gaussian holding marginal. Whiten with $z=\sqrt2 A_0^{1/2}q$ and denote the transformed law by $\widehat\mu$. The plane is a separate block of this linear transformation, so its marginal is $\gamma_2=N(0,I_2)$. By [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian), $\widehat\mu$ is invariant under $SO(d)$. For its characteristic function and any plane unit vector $e$, 

$$

 \widehat\chi(k)
 =\int e^{ik\cdot z}\,d\widehat\mu(z)
 =\widehat\chi(|k|e)=e^{-|k|^2/2}.

$$

 Rotations are transitive on spheres, including the needed choice of direction when $k\ne0$; the equality at zero is normalization. Uniqueness of characteristic functions of Borel probabilities gives $\widehat\mu=\gamma_d$, hence $\mu=\nu_0$.

Conversely, every constituent map preserves $\nu_0$ by [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac), and so do its inverse and every finite composition. All maps are globally defined: nonlinear stages have bounded smooth velocities, and Gaussian stages have linear velocities with bounded coefficients on their finite time intervals. The conclusion holds for every Borel probability, including singular measures. 

□



Gaussian loops alone would not suffice. Their invariant probabilities are exactly the rotationally invariant laws in whitened coordinates: arbitrary mixtures of uniform sphere measures, including an atom at zero. This follows either by averaging over the compact group $SO(d)$ or by disintegration with respect to radius. A Gaussian with covariance $cI_d$, $c\ne1$, is a particularly simple example. The nonlinear plane theorem removes this freedom before the characteristic-function argument is applied.



<a id="section-6-1"></a>

### 6.1 A finite smooth loop detecting a non-Born radial law



It is useful to exhibit a quantitative memory effect for one of these Gaussian-invariant laws. In the physical plane put $x=s_1$, $y=s_2$, and $r(x,y)=(\sqrt2/\pi)e^{-(2x^2+4y^2)/2}$. Let the full whitened law be $N(0,\tfrac32 I_d)$. Its plane marginal $\mu_c$ has covariance ${\operatorname{diag}}(c/2,c/4)$, with $c=3/2$.

For $R=16$ set <a id="eq:witnessfg"></a>


$$

 f_R=\frac{x^2}{2}e^{-(2x^2+4y^2)/(2R^2)},\qquad
 g_R=\frac{x^2y}{2}e^{-(2x^2+4y^2)/(2R^2)} .

$$

Equation (6.1).

 These Schwartz functions, although not compactly supported, have $-L_rf_R,-L_rg_R\in{C_b^\infty}$ and bounded positive-order derivatives. Consequently the physical rectangle construction and its uniform flow expansion apply to them verbatim. We include this pair, along with the compactly supported pairs, in the return library.

Write $b_R=[\nabla f_R,\nabla g_R]$. For comparison only, the undamped polynomial pair has $b_\infty=(0,x^2)$ and <a id="eq:polynomialprojection"></a>


$$

 \Pi_r b_\infty=(-xy,x^2/2-1/4).

$$

Equation (6.2).

 Indeed subtract the gradient of $x^2y/2+y/4$ and check the weighted divergence. This polynomial is used to estimate the actual damped loop, not as an unbounded physical pulse. Its expected vertical component under $\mu_c$ is $1/8$.

The orthogonal projection is a contraction in $L^2(r)$ and $\|d\mu_c/dr\|_{L^2(r)}^2=1/[c(2-c)]=4/3$. The exact Gaussian moment calculation in section [B](/quantum-measurement/research/preparation-returns/appendix-b-exact-moment-bound-for-the-nonlinear-witness#app:witness) gives 

$$

 E:=\|b_{16}-b_\infty\|_{L^2(r)}^2
   =\frac{16185053971604529263}{15566448011730239812500},
 \qquad \sqrt{\frac{4E}{3}}<\frac1{24}.

$$

 It follows that <a id="eq:witnessbound"></a>


$$

 C_{16}:=\int(\Pi_r b_{16})_y\,d\mu_c
       \geq\frac18-\sqrt{\frac{4E}{3}}>\frac1{12}.

$$

Equation (6.3).

 For the actual finite rectangle, <a id="eq:witness"></a>


$$

 \mathbb E[y_{\mathrm{after}}]-\mathbb E[y_{\mathrm{before}}]
     =\epsilon^2C_{16}+O(\epsilon^3).

$$

Equation (6.4).

 The remainder integrates legitimately because it is uniformly bounded in space. Thus every sufficiently small nonzero amplitude has a nonzero mean shift for this non-Born radial law, while returning the complete wavefunction exactly. This is a concrete witness; the all-Borel theorem, rather than this single statistic, establishes uniqueness.

---

# Section 7: Preparation transport and operational consequences

<a id="section-7"></a>

## 7 Preparation transport and operational consequences

<a id="sec:operational"></a>



<a id="section-7-1"></a>

### 7.1 Reversibly reachable preparations





**Proposition 7.1 (Transport of the invariant law).**

<a id="prop:orbit"></a> Suppose an admitted finite history $P$ takes a real preparation $(H_0,\psi_0)$ to a real preparation $(H_1,\psi_1)$ modulo phase, has a global guided diffeomorphism $C$, and has a physical inverse on the designated trajectory. The conjugated return library $C{\mathcal H}_{\psi_0}C^{-1}$ at $\psi_1$ has the unique invariant Borel probability $|\psi_1|^2\,dq$. 





**Proof.**

Implement each conjugate by the inverse preparation history, the return at $\psi_0$, and the forward history. Every stage restores the appropriate endpoint Hamiltonian. A probability $\mu_1$ is invariant under these maps exactly when $(C^{-1})_*\mu_1$ is invariant under ${\mathcal H}_{\psi_0}$. Apply [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main) and then [(2.4)](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#eq:Jac). 

□



The proposition describes an actual orbit condition. For example, every centered real positive Gaussian on this engineered device can be reached with quadratic controls and restored holding Hamiltonian. Exact symplectic reachability proved after [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian) realizes a dilation taking $\psi_0$ to the desired Gaussian, and Gaussian guidance is global. The time-reversed scalar history gives its physical inverse.

There are also explicit non-Gaussian examples. In the plane interpolate between $U_0=\tfrac12s^TPs$ and $U_1=\tfrac12s^TPs+u(s)$ with $u\in{C_b^\infty}$ and $\nabla^2U_1>0$ uniformly. Their convex interpolation stays uniformly convex. Its logarithmic density derivative is $h=-u+\int u\rho$, which satisfies the centered bounds of [lemma 3.1](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:poisson). Slowing the interpolation with a flat endpoint profile and using [(3.4)](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#eq:inversepotential) gives a real endpoint with holding potential $\Delta\sqrt{\rho_1}/(2\sqrt{\rho_1})+E_s$. The active state is unchanged, the guided map is global, and time reversal implements the inverse. No extension to arbitrary nodal states or to unmodeled apparatus variables follows from this proposition.



<a id="section-7-2"></a>

### 7.2 Linear readouts using the fixed network



For a statistical interpretation it matters which readouts are implemented with the available interactions. The following statement uses the same quadratic controls, not a new impulsive many-body actuator.



**Proposition 7.2 (Exact linear configuration transports).**

<a id="prop:readout"></a> Based at $\psi_0$, every $C\in GL^+(d,{\mathbb R})$ is the actual configuration map of a finite quadratic protocol with fixed pair interactions and the holding Hamiltonian restored at its endpoints. The final wavefunction is a real Gaussian modulo phase, though generally not $\psi_0$. 





**Proof.**

Exact symplectic reachability implements ${\operatorname{diag}}(C,C^{-T})$. Its quantum action sends the real Gaussian precision to $A_T=C^{-T}A_0C^{-1}$. Let $L_*$ be this protocol's actual guided linear map. By [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance), $L_*^TA_TL_*=A_0$ and $\det L_*>0$. Consequently $R=C^{-1}L_*\in SO(A_0)$. Prepend a Gaussian return with actual map $R^{-1}$, available by [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian). This leaves the subsequent wavefunction history unchanged and makes its configuration map $L_*R^{-1}=C$. 

□



For any nonzero linear form $\ell\cdot q$, extend $\ell$ to a positive-determinant matrix with that form as a chosen row. Such an extension exists because $d\geq2$; change the sign of another row if necessary. The proposition followed by an *ideal final position readout* measures precisely $\ell\cdot q$. The detector is an explicit idealization in this operational statement. The theorem about invariant measures does not require this detector assumption.



**Corollary 7.3 (No-hysteresis characterization).**

<a id="cor:nohysteresis"></a> Let $\mu$ be the actual law assigned to the reference preparation. Assume the ideal final-coordinate readout just described. The following statements are equivalent: 

1. (i) For every implemented return $F\in{\mathcal H}_{\psi_0}$ and every such calibrated linear readout, inserting $F$ leaves the output probability distribution unchanged.

2. (ii) $F_*\mu=\mu$ for every $F\in{\mathcal H}_{\psi_0}$.

3. (iii) $\mu=\nu_0$.

 





**Proof.**

The implication (ii)$\Rightarrow$(i) is pushforward functoriality. For (i)$\Rightarrow$(ii), equality of all linear-projection laws gives equality of their characteristic functions at every $k\in{\mathbb R}^d$, hence equality of the two Borel probabilities. The equivalence with (iii) is [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main). 

□



This is a universal statistical statement about the specified return and readout library. It is not inferred from observing a finite list of null memory tests. Nor is (i) imposed by the Schrödinger equation: it is precisely the preparation-invariance premise in operational form.

There is a finite-gain variant that introduces no equilibrium assumption for a pointer coordinate. Choose two modeled coordinates $X,Z$ and the shear $Z'=Z+GX$, with the others unchanged. It lies in $GL^+(d)$ and is exactly implemented by [proposition 7.2](/quantum-measurement/research/preparation-returns/preparation-transport-and-operational-consequences#prop:readout). For an arbitrary, possibly correlated initial law satisfying $\mathbb E Z^2\leq L$, 

$$

 \mathbb E|Z'/G-X|^2\leq L/G^2 .

$$

 This is a calibration-error bound, not a proof about an additional detector's microscopic variables. Taking $X=y$ and an active coordinate as $Z$, the nonlinear witness leaves $Z$ fixed and [(6.4)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witness) gives a subsequent pointer mean shift $G\epsilon^2C_{16}+O(G\epsilon^3)$.

If a physical measurement interaction and its recorded regions are included in the modeled configuration, an equilibrium preparation gives their probabilities by the ordinary pushforward of $|\psi|^2$. For exactly disjoint record branches $\Psi=\sum_\alpha\Psi_\alpha$ supported in their respective record regions, these probabilities are $\|\Psi_\alpha\|_2^2$. This is the established Bohmian account of record statistics [[4](/quantum-measurement/research/preparation-returns/bibliography#bib-DGZ2004)]. Extra apparatus coordinates require their own joint preparation hypothesis; they are not supplied by uniqueness for the network studied here.

---

# Section 8: Randomized returns and finite preparation

<a id="section-8"></a>

## 8 Randomized returns and finite preparation

<a id="sec:random"></a>

Invariant-law uniqueness does not imply that repeated returns physically prepare that law. We now examine one fully specified randomized controller, consolidating [[18](/quantum-measurement/research/preparation-returns/bibliography#bib-RandomizedReport)]. The network is the two-particle device of [example 5.3](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#ex:two), fixed at any sufficiently small calibrated $\delta>0$ satisfying its endpoint and curvature conditions. Use whitened coordinates $z=\sqrt2 A_0^{1/2}q$ and write $\gamma=\gamma_6=N(0,I_6)$. The wavefunction is the same known $\psi_0$ for all candidate configuration laws. Nonequilibrium is permitted in that law; there is no initial Born-law assumption.



<a id="section-8-1"></a>

### 8.1 A countable determining library and controller

 Choose the five Gaussian curvature families supplied by the active coordinate tree and the two reserved-plane links in [lemma 5.1](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#lem:engineer). Use the trial frequencies $\nu=101$, $\zeta=103$, which exceed all root frequencies for $(1,2,7,14,24,43)$. Sample each analytic corrected family at rational parameters densely in a sufficiently small admissible interval. Each command has duration $2\pi$.

For the nonlinear commands choose a countable set of real compact plane profiles dense, with common compact supports, in $C_c^\infty({\mathbb R}^2)$. For definiteness put $b(t)=e^{-1/t}$ for $t>0$ and $b(t)=0$ otherwise, and 

$$

 \chi(t)=\frac{b(4-t^2)}{b(4-t^2)+b(t^2-1)}.

$$

 Use $\chi(s_1/R)\chi(s_2/R)$ times finite real trigonometric polynomials of frequencies $\pi m/(3R)$, $m\in\mathbb Z^2$, with rational coefficients, for positive integers $R$. Smooth periodic Fourier approximation on the larger square, followed by the fixed cutoff, gives the stated density. For every pair $f,g$ set 

$$

 M_{fg}=1+\sum_{h=-L_rf,-L_rg}
    \bigl(\|h\|_\infty+\|\nabla h\|_\infty+\|\nabla^2h\|_\infty\bigr).

$$

 Here the Hessian norm is the operator norm. Let $r_{fg}$ be the least nonnegative integer such that $2^{-r_{fg}}\le(16M_{fg}^2)^{-1}$. Include the physical rectangles of [section 3](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#sec:plane) at amplitudes $\epsilon_{fg,k}=2^{-r_{fg}-k}$, $k\ge1$. On these rectangles the density multiplier differs from one by at most $1/16$, and its logarithm has Hessian norm at most $1/15+1/225<1$. Thus its density is positive and its negative logarithm has Hessian at least $I$. The global construction applies. Pad each four-unit-time nonlinear history by a holding interval of duration $2\pi-4$; holding has identity configuration map at this real preparation.

Enumerate all of these commands as $F_1,F_2,\ldots$, retaining their physical histories. Their physical inverses and an idle command also have duration $\tau=2\pi$. The enumeration may repeat a map without changing the argument. It has no uniform description-complexity or amplitude bound. Each selected command and each completed finite word nevertheless uses finite resources in the specified externally controlled model.



**Lemma 8.1 (Determining countable family).**

<a id="lem:countablelibrary"></a> The maps $F_j$ have $\gamma$ as their unique common invariant Borel probability. 

 

**Proof.**

Invariance under dense Gaussian parameter samples passes to each complete analytic curve by bounded continuous tests. The exact-group argument of [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup) then gives rotational invariance. For each sampled plane pair, take the sequence of squared-amplitude difference quotients in [lemma 3.2](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#lem:rectangle). Uniform displacement bounds give 

$$

 \int\nabla\varphi\cdot\Pi_r[\nabla f,\nabla g]\,d\mu_s=0,
 \qquad \varphi\in C_c^\infty({\mathbb R}^2).

$$

 These identities extend to all compact profiles. In fact, for a compact vector field $b$, write 

$$

 \Pi_r b=b-\nabla\lambda_b,\quad
 L_r\lambda_b=h_b:={\operatorname{div}} b-(2s_1,4s_2)\cdot b,
 \quad \lambda_b=-\int_0^\infty P_t h_b\,dt .

$$

 The Gaussian Ornstein–Uhlenbeck semigroup satisfies $\|D^k\lambda_b\|_\infty\le\|D^kh_b\|_\infty/(2k)$ for $k\ge1$, by differentiating its explicit contracting flow. Common-support $C^\infty$ approximation therefore gives global convergence of the projected fields. The distributional argument of [theorem 3.4](/quantum-measurement/research/preparation-returns/exact-nonlinear-returns-on-a-plane#thm:plane) determines the plane marginal. Rotations and its Gaussian marginal determine the full law by the characteristic-function argument in [section 6](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#sec:uniqueness). Limits occur in a test for invariance, not in the implementation of an individual command. 

□



At each cycle boundary draw a command independently of the initial configuration and the complete past: <a id="eq:commandlaw"></a>


$$

 \Pr(C=0)=\frac34,\qquad
 \Pr(C=+j)=\Pr(C=-j)=\frac{2^{-j}}8,\quad j\ge1.

$$

Equation (8.1).

 Command $+j$ performs $F_j$, command $-j$ performs $F_j^{-1}$, and command $0$ holds. The controller retains the consumed command word $W_n=(C_1,\ldots,C_n)$. Equivalently, supply an independent identically distributed tape with law [(8.1)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:commandlaw) and retain its consumed prefix. Between boundaries, the network obeys the Schrödinger and guidance equations already specified. Its conditional Hamiltonian uses only the fixed pair spring, local traps, and the nonlinear plane controls.

This is a hybrid externally controlled architecture, not an autonomous microscopic construction of the command register or clock. Freshness, fairness, and independence of the classical tape are statistical resources. There is no Born-distributed quantum coin, new equilibrium pointer, thermal bath, postselection, or configuration-dependent stopping in this specification. Completion means $n<\infty$ cycles, elapsed time $2\pi n$, and restored ray and holding Hamiltonian. The memory is retained, even if unread.



<a id="section-8-2"></a>

### 8.2 Actual kernel and asymptotic behavior

 On finite signed measures the one-cycle kernel is <a id="eq:randomkernel"></a>


$$

 \mathsf P\mu=\frac34\mu+\frac18\sum_{j\ge1}2^{-j}
      \bigl((F_j)_*\mu+(F_j^{-1})_*\mu\bigr).

$$

Equation (8.2).

 The series converges in variation norm. On relative densities in $L^2(\gamma)$ put 

$$

 U_jf=f\circ F_j^{-1},\qquad
 Q=\frac12\sum_{j\ge1}2^{-j}(U_j+U_j^*),\qquad
 P=\frac34I+\frac14Q.

$$

 Every $U_j$ is unitary by measure preservation, with adjoint composition by $F_j$. Hence $Q$ is a self-adjoint Markov contraction, and <a id="eq:randomspectral"></a>


$$

 \frac12I\le P\le I,\qquad
 \langle h,(I-P)h\rangle
   =\frac18\sum_{j\ge1}2^{-j}\|h-U_jh\|_2^2.

$$

Equation (8.3).

 The actual law after $n$ rounds is $(P^nf_0)\gamma$ when $\mu_0=f_0\gamma$. We use the convention 

$$

 \operatorname{TV}(\mu,\nu)=\sup_B|\mu(B)-\nu(B)|=\tfrac12\|\mu-\nu\|_{\rm var},

$$

 where the supremum is over Borel sets.



**Proposition 8.2 (Conditional mixing and its singular boundary).**

<a id="prop:mixing"></a> If $\mu_0\ll\gamma$, then $\operatorname{TV}(\mu_n,\gamma)\to0$. More generally, if the singular mass of $\mu_0$ relative to $\gamma$ is $s$, then 

$$

 \lim_{n\to\infty}\operatorname{TV}(\mu_n,\gamma)=s.

$$

 No uniform rate or spectral gap is asserted. 

 

**Proof.**

The fixed functions of $P$ are constants. Indeed, [(8.3)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomspectral) makes a real fixed function invariant under every $U_j$. If it were nonconstant, a bounded strictly positive nonconstant function of it, normalized to integral one, would give a second common invariant probability, contrary to [lemma 8.1](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#lem:countablelibrary). The same argument applies to real and imaginary parts.

The spectral theorem on $[1/2,1]$ gives $P^nf\to\int f\,d\gamma$ in $L^2(\gamma)$ [[20](/quantum-measurement/research/preparation-returns/bibliography#bib-Teschl2009)]: integrate $|\lambda^n-1_{\{1\}}(\lambda)|^2$ against the spectral measure and use dominated convergence. For a density $f\in L^1(\gamma)$, put $f_B=\min(f,B)$. Markov contraction gives 

$$

 \|P^nf-1\|_1\le2\|f-f_B\|_1+
 \left\|P^nf_B-\int f_B\,d\gamma\right\|_1.

$$

 Take $n\to\infty$ and then $B\to\infty$ to obtain total-variation convergence.

For a singular initial component, saturate a Borel null support under the countable group of finite words in all $F_j$ and their inverses. This remains a $\gamma$-null invariant Borel set, and contains that component at every finite round. It supplies the lower bound $s$. Convergence of the normalized absolutely continuous component and convexity supply the matching upper limit. This does not classify singular stationary laws of the averaged kernel merely from common-map invariant-law uniqueness. 

□





<a id="section-8-3"></a>

### 8.3 Finite rounds and independent random completion

 

**Theorem 8.3 (Finite-round reverse bound).**

<a id="thm:finiteobstruction"></a> For every initial Borel probability and every finite $n$, <a id="eq:reverseTV"></a>


$$

 \operatorname{TV}(\mu_n,\gamma)
 \ge2^{-n}\operatorname{TV}(\mu_0,\gamma).

$$

Equation (8.4).

 Thus a finite-round output is invariant under every return in the library if and only if the input was already $\gamma$. 

 

**Proof.**

Write $\mathsf P=\tfrac34I+\tfrac14\mathsf Q$. The Markov kernel $\mathsf Q$ contracts variation, so every finite signed measure satisfies 

$$

 \|\mathsf P\sigma\|_{\rm var}
 \ge\tfrac34\|\sigma\|_{\rm var}-\tfrac14\|\mathsf Q\sigma\|_{\rm var}
 \ge\tfrac12\|\sigma\|_{\rm var}.

$$

 Apply this iteratively to $\sigma=\mu-\gamma$, since $\mathsf P\gamma=\gamma$. The characterization of invariant outputs is [theorem 1.1](/quantum-measurement/research/preparation-returns/introduction#thm:main). This bound applies after averaging the command labels, not just to an individual invertible history. 

□



A smooth explicit countermodel makes the remaining discrepancy observable. Put 

$$

 c=e^{-1/2},\qquad h(z)=\cos z_1-c,\qquad
 f_0=1+\tfrac14h,\qquad \mu_0=f_0\gamma.

$$

 The probability $\mu_0$ has a normalized, strictly positive Schwartz density with respect to Lebesgue measure in physical coordinates. Its relative density $f_0$ is bounded above and below by positive constants. Gaussian integration gives 

$$

 V:=\|h\|_2^2=\frac{(1-e^{-1})^2}{2}>0.

$$

 By [(8.3)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomspectral), <a id="eq:cosbias"></a>


$$

 \mathbb E_{\mu_n}\cos Z_1-c
 =\tfrac14\langle h,P^nh\rangle
 \ge\tfrac14\,2^{-n}V>0,

$$

Equation (8.5).

 where $Z_1$ denotes the first coordinate at the indicated completion. Its law is readable by the implemented linear-coordinate transport of [proposition 7.2](/quantum-measurement/research/preparation-returns/preparation-transport-and-operational-consequences#prop:readout) followed by the stated ideal position detector. No microscopic detector law is inferred.

The spectral measure $\rho_h$ has no atom at $1$. Consequently one additional randomized exact-return cycle changes that bounded statistic strictly: 

$$

 \mathbb E_{\mu_n}\cos Z_1-\mathbb E_{\mu_{n+1}}\cos Z_1
 =\frac14\int_{[1/2,1)}\lambda^n(1-\lambda)\,d\rho_h(\lambda)>0.

$$

 At least one constituent return therefore changes the statistic despite the unchanged quantum endpoint.

Let $N<\infty$ almost surely be independent of the configuration and the entire command tape. The completed operator is $T_N=\sum_m\Pr(N=m)P^m=g(P)$, with $g(\lambda)=\mathbb E\lambda^N$. It obeys 

$$

 T_N\ge\mathbb E[2^{-N}]I,\qquad \mathbb E[2^{-N}]>0.

$$

 Thus the same smooth countermodel satisfies <a id="eq:randomstopbias"></a>


$$

 \mathbb E_{\mu_N}\cos Z_1-c
 \ge\tfrac14V\mathbb E[2^{-N}]>0.

$$

Equation (8.6).

 This holds even when $\mathbb EN=\infty$. For finite mean, Jensen gives the further lower bound $V2^{-\mathbb EN}/4$. Configuration- or command-dependent stopping is not represented by this operator and is not covered by [(8.6)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:randomstopbias).



**Lemma 8.4 (Countable-command universal-reset obstruction).**

<a id="lem:countablereset"></a> An almost-surely finite procedure whose output, for each initial point, is one of countably many finite-word images cannot send every smooth strictly positive bounded relative density to the same nonatomic law, with a common transition kernel for all those inputs. 

 

**Proof.**

Let $K(z,\cdot)$ be that kernel. It is countably supported for each $z$ at which the procedure terminates almost surely. Suppose every $1+\eta h$, for bounded smooth centered $h$ and sufficiently small $\eta$, is sent to a fixed nonatomic law $\nu$. This includes density one. Subtract its equation from that for the perturbed density. For each bounded continuous $\varphi$, 

$$

 \int h(K\varphi-\nu\varphi)\,d\gamma=0.

$$

 Take $h=\chi-\int\chi\,d\gamma$, $\chi\in C_c^\infty$, and use the equation for density one. Distributional uniqueness gives $K\varphi=\nu\varphi$ almost everywhere. Take the countable sine and cosine tests at rational frequencies. On a common full-measure set the corresponding characteristic functions agree; continuity extends equality to all frequencies. Hence $K(z,\cdot)=\nu$ on that set, contradicting its countable support. 

□

 The lemma permits adaptive command choices if completed outputs still have the stated finite-word form and the kernel is common to the input class. It excludes universal reset of that regular basin, not an accidental reset of one input or every possible preparation architecture. The specific factor $2^{-n}$ requires the $3/4$ holding probability; it is not asserted for all lazy kernels.



<a id="section-8-4"></a>

### 8.4 Retained memory and a reversible echo

 Let $\pi_n$ be the law of $W_n$, and let $F_w$ denote its finite word. For $\mu_0=f_0\gamma$ the conditional and marginal densities are 

$$

 f_w(z)=f_0(F_w^{-1}z),\qquad
 f_n(z)=\sum_w\pi_n(w)f_w(z).

$$

 All logarithms are natural. We write $D(\mu\Vert\nu)$ for relative entropy and $I(Z;W)$ for the relative entropy of the joint law with respect to the product of its marginals. Measure preservation gives an exact information identity. 

**Proposition 8.5 (Controller correlation identity).**

<a id="prop:memory"></a> If $D(\mu_0\Vert\gamma)<\infty$, then <a id="eq:memory"></a>


$$

 D(\mu_0\Vert\gamma)
 =D(\mu_n\Vert\gamma)+I(Z_n;W_n).

$$

Equation (8.7).

 The joint relative entropy with respect to $\gamma\otimes\pi_n$ is the initial relative entropy. The recorded word permits a physical inverse echo restoring the initial configuration pointwise. 

 

**Proof.**

The joint density relative to $\gamma\otimes\pi_n$ is $f_w(z)$. For every word, change of variables gives $\int f_w\log f_w\,d\gamma=\int f_0\log f_0\,d\gamma$. Insert $\log f_w=\log f_n+\log(f_w/f_n)$ and sum over the countable words. The two terms are the marginal relative entropy and mutual information. The convention $0\log0=0$ handles zero densities; the finite-entropy case follows by the relative-entropy chain rule, or by truncating the logarithms in this nonnegative divergence identity. This proves [(8.7)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:memory).

After $n$ cycles perform the recorded inverse commands in reverse order. All have physical time-reversed realizations from [section 2](/quantum-measurement/research/preparation-returns/hamiltonians-and-exact-return-maps#sec:model), and their total duration is $2\pi n$. Their composed configuration map is $F_w^{-1}$. It restores $Z_0$ at every point and restores the quantum ray and holding Hamiltonian. The command record, rather than knowledge of $Z_0$ or $f_0$, determines the echo. 

□



For bounded $f_0$, total-variation convergence and uniform continuity of $x\log x$ on its bounded range imply $D(\mu_n\Vert\gamma)\to0$. Equation [(8.7)](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#eq:memory) then puts the lost marginal relative entropy into controller correlation. With $h_{\rm bin}(p)=-p\log p-(1-p)\log(1-p)$, each command has entropy $H(C)=h_{\rm bin}(1/4)+(3/4)\log2$, so $I(Z_n;W_n)\le nH(C)$. These are information statements, not thermodynamic heat estimates.

For the explicit countermodel, the echo gives the fixed event discrepancy 

$$
\begin{aligned}&\Pr_{\rm echo}(|Z_1|\le\tfrac12)-\Pr_\gamma(|Z_1|\le\tfrac12)\\
 &\quad=\frac14\int_{-1/2}^{1/2}
       (\cos y-e^{-1/2})\frac{e^{-y^2/2}}{\sqrt{2\pi}}\,dy\\
 &\quad\ge\frac14\bigl(\cos(1/2)-e^{-1/2}\bigr)
                  \bigl(2\Phi(1/2)-1\bigr)>0.
\end{aligned}
$$

 Here $\Phi$ is the standard normal cumulative distribution function. The bound is independent of the preceding cycle count. Hiding the command tape may remove this feedback option but does not change the finite-round kernel or its obstruction. Erasing it is a new physical operation requiring its own model.

For any fixed subsequent measurable readout or independently specified Markov response, data processing gives record-law distance at most $\operatorname{TV}(\mu_n,\gamma)$. Thus the controller permits arbitrarily accurate approximation for each absolutely continuous source, with no general uniform finite waiting time. It does not supply a history-independent cross-state assignment, arbitrary apparatus equilibrium, or independent trials. Stationarity of an absolutely continuous boundary law under this actual kernel would force $\gamma$ by [proposition 8.2](/quantum-measurement/research/preparation-returns/randomized-returns-and-finite-preparation#prop:mixing), but that stationarity is another statistical premise, not a finite preparation consequence.

---

# Section 9: Discussion

<a id="section-9"></a>

## 9 Discussion



The exact return library constrains a probability law through the configuration history left behind by quantum cycles. Its nonlinear plane returns determine a marginal among all Borel probabilities, and its Gaussian returns rotate every configuration direction. The combination selects the Born law without a regular density functional across wavefunctions and without excluding singular candidate measures.

The physical restrictions are constructive parts of the result. Pair interactions are nonzero and fixed on a connected prescribed graph, but they are directionally engineered to leave a holding plane available. The local quadratic controls are unrestricted finite trap matrices; nonlinear controls are one-body scalar potentials with the growth and regularity proved above. The exactness statements use finite-dimensional endpoint correction and exact density histories, not approximate recurrence or finite oscillator cutoffs.

The Gaussian extension in section [A](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#app:general) removes the weak coupling and special spectrum of the original Gaussian device. It does not remove the structural restriction in the nonlinear uniqueness theorem. Obtaining a nonlinear exact return with sufficient radial action in a fully coupled isotropic network remains a separate extension.

Finally, invariant-measure uniqueness does not establish a relaxation rate or convergence from every initial probability. It also does not establish that an actual preparation has the invariance property. With that property, the present theorem identifies the equilibrium law; standard modeled readouts then give its record statistics. The statistical premise and the dynamical construction have distinct physical content.

---

# Appendix A: Gaussian holonomy beyond engineered weak couplings

<a id="section-A"></a>

## A Gaussian holonomy beyond engineered weak couplings

<a id="app:general"></a>

This appendix proves the broader Gaussian statement used to place the principal theorem's restriction correctly. It also makes explicit why recurrence or a Lie-algebra calculation alone is insufficient for the exact claim.



**Theorem A.1 (Connected fixed quadratic networks).**

<a id="thm:general"></a> Let a positive harmonic holding matrix have nonzero off-block quadratic couplings on a connected graph of distinguishable particles. Assume full finite block-local quadratic controls, with no uniform amplitude ceiling. For any specified centered real positive Gaussian preparation with precision $A>0$, the physically implemented Gaussian ray returns, with the original holding Hamiltonian restored, have configuration group $SO(A)$. In whitened coordinates this is $SO(d)$. The original coupling strengths and frequencies need not be weak or commensurate. 





<a id="section-A-1"></a>

### A.1 An exact recurrent auxiliary seed



Retain all prescribed interparticle entries. Choose fixed within-particle off-diagonal trap entries so that the graph of nonzero scalar-coordinate entries is connected, and call the resulting off-diagonal matrix $C$. Diagonal local traps remain free. We need integer frequencies with suitable modal overlaps for ${\operatorname{diag}}(\lambda)+\delta C$.



**Lemma A.2 (Nonvanishing path coefficients).**

<a id="lem:paths"></a> For a connected scalar-coordinate graph and a fixed root $r$, positive integers $n_1,\ldots,n_d$ can be chosen so that the root frequencies of [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion)(i) are distinct and each eigenvector of ${\operatorname{diag}}(n_i^2)+\delta C$ has a nonzero component at $r$ for all sufficiently small nonzero $\delta$. 





**Proof.**

For distinct diagonal values $\lambda_i$, perturb the eigenvector of $\lambda_j$ with its $j$ component fixed to one. Iteration of the other component equations shows that the first possibly nonzero coefficient at $r$ has order $\delta^{\operatorname{dist}(r,j)}$ and equals <a id="eq:pathsum"></a>


$$

 \sum_{\substack{\pi:r\leadsto j\\\text{shortest paths}}}
 \frac{\prod_{\{a,b\}\in\pi}C_{ab}}
      {\prod_{v\in\pi,\ v\ne j}(\lambda_j-\lambda_v)} .

$$

Equation (A.1).

 It is a nonzero rational function of the diagonal values. To verify nonvanishing without assuming signs of the edges, fix one shortest path and its distinct vertex diagonals, and send all off-path diagonal values to infinity. A shortest path has no chord. Thus the only path term involving exclusively its vertices is the selected path; its nonzero product survives, whereas every other term vanishes in this limit.

Clear denominators in the finitely many expressions [(A.1)](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#eq:pathsum). Their nonzero numerator polynomials, the distinct-diagonal factors, and the finitely many forbidden frequency equalities have a nonzero product after the substitution $\lambda_i=n_i^2$. A nonzero polynomial cannot vanish on the entire positive integer lattice: induction on the number of variables reduces this to the finiteness of the roots of a nonzero univariate polynomial. Hence some integer tuple avoids every zero. The leading nonzero coefficients then prove the assertion for small $\delta$. 

□



Choose these integers. The diagonal retuning argument used in [section 5](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#sec:engineering) gives analytic functions $d_i(\delta)=n_i^2+O(\delta^2)$ for which ${\operatorname{diag}}(d_i(\delta))+\delta C$ has exactly the eigenvalues $n_i^2$. The $O(\delta^2)$ diagonal changes leave every leading $\delta^{\operatorname{dist}(r,j)}$ path coefficient unchanged, so the nonzero modal overlaps persist after retuning. For a sufficiently large finite positive integer $L$ set <a id="eq:stiffseed"></a>


$$

 K_* = L^2{\operatorname{diag}}(d_i(L^{-2}))+C .

$$

Equation (A.2).

 Its interparticle entries are the original fixed entries of $C$, its frequencies are exactly $Ln_i$, and it is positive. All required changes from the original holding matrix are one-body trap changes.

In the auxiliary variables $\tau=Lt$ and $x=\sqrt L\,q$, the Schrödinger equation for this seed has kinetic term $-\Delta_x/2$ and stiffness ${\operatorname{diag}}(d_i(\delta))+\delta C$ with $\delta=L^{-2}$. A dimensionless local control $\widehat D(\tau)$ is the actual physical control $D(t)=L^2\widehat D(Lt)$. This is a coordinate calculation specifying finite physical controls, not a change of the kinetic term or an operation on the pair interaction.

By [lemma A.2](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#lem:paths), the diagonal control at $r$ couples every modal pair. The squared-overlap matrix remains near the identity. Thus [lemma 4.1](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:submersion) gives an identity neighborhood of exact symplectic endpoints at time $2\pi/L$. For each edge of a spanning tree of $C$, formula [(5.1)](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#eq:edgecurvature) gives a nonzero leading elementary rotation in these scaled coordinates. Its bracket-basis determinant remains nonzero for large finite $L$. The correction and exact group arguments of [proposition 4.2](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#prop:curvature), [lemma 4.3](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#lem:exactgroup) therefore prove $SO(d)$ configuration holonomy at the real ground Gaussian of $K_*$.



<a id="section-A-2"></a>

### A.2 Transport back to the original preparation





**Proof of [theorem A.1](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#thm:general).**

 Join the original positive holding matrix to $K_*$ by a smooth positive interpolation of its local blocks; convexity of the positive cone permits this. Let $\mathsf S_P$ be the known symplectic propagator of this history. At $K_*$ every symplectic matrix is exactly reachable with endpoint holding restored, by the identity-neighborhood argument after [theorem 5.2](/quantum-measurement/research/preparation-returns/engineering-the-holding-network#thm:gaussian). Choose a compensating endpoint $\mathsf S_{\mathrm{tar}}\mathsf S_P^{-1}$, where $\mathsf S_{\mathrm{tar}}={\operatorname{diag}}(Q,Q^{-T})$ and $Q=A_*^{-1/2}A^{1/2}$, with $A_*=K_*^{1/2}$. The combined history takes the original real Gaussian to the real ground Gaussian of $K_*$ modulo phase.

Its actual guided map is some global linear $L_P$ satisfying $L_P^TA_*L_P=A$, by [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). The real-endpoint time reversal gives a physical inverse map $L_P^{-1}$, restoring the original holding Hamiltonian. Conjugating the seed return group therefore gives $SO(A)$. Conversely every Gaussian ray return belongs to $SO(A)$ by [(4.6)](/quantum-measurement/research/preparation-returns/exact-gaussian-returns-with-fixed-interactions#eq:covariance). These transported loops return the designated ray; no claim that their full propagator is a phase times the identity is needed. 

□



For clarity, a useful general endpoint criterion is 

$$

 \operatorname{span}\{
   \operatorname{ad}_{\mathsf A(K)}^j\mathsf B(D):
     D\in{\mathcal D},\ 0\leq j<d(2d+1)\}
       =\mathfrak{sp}(2d,{\mathbb R}),
 \qquad
 \mathsf B(D)=\begin{pmatrix}0&0\\-D&0\end{pmatrix}.

$$

 It makes the endpoint differential onto on any nonempty time interval: an annihilating covector kills the analytic orbit $e^{-t\operatorname{ad}_{\mathsf A}}\mathsf B(D)$, hence all its Taylor coefficients; Cayley–Hamilton bounds the needed powers. This is a criterion for the derivative along the chosen reference, stronger than a bare dynamical Lie-algebra assertion.

If that reference is merely recurrent, submersion at time $T_0$ gives an endpoint neighborhood $\mathsf S_0(T_0)\exp B_\eta$. Append a holding wait to time $\tau>T_0$ for which $\mathsf S_0(\tau)$ is sufficiently close to $I$. The reachable set then contains $\mathsf S_0(\tau)\exp B_\eta$, which contains an exact neighborhood of $I$. This is how recurrence plus an open endpoint image can give exact reachability. Recurrence by itself supplies only approximations. In [(A.2)](/quantum-measurement/research/preparation-returns/appendix-a-gaussian-holonomy-beyond-engineered-weak-couplings#eq:stiffseed) the recurrence is already exact, so no limiting protocol is used.

---

# Appendix B: Exact moment bound for the nonlinear witness

<a id="section-B"></a>

## B Exact moment bound for the nonlinear witness

<a id="app:witness"></a>

Set $\tau=R^{-2}$, $S=2x^2+4y^2$ in [(6.1)](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#eq:witnessfg). Since $g_R=yf_R$, the product rule gives 

$$

 b_R=\bigl(0,e^{-\tau S}P_\tau\bigr),\qquad
 P_\tau=x^2-\tau x^4+\tau^2x^6+4\tau^2x^4y^2 .

$$

 All moments needed for $\|b_R-b_\infty\|_{L^2(r)}^2$ are finite Gaussian integrals: 

$$

 \mathbb E_r[x^{2p}y^{2q}e^{-j\tau S}]
   =\frac{(2p-1)!!(2q-1)!!}
      {2^p4^q(1+2j\tau)^{p+q+1}},\qquad (-1)!!=1.

$$

 Expanding the two finite polynomials yields 

$$
\begin{aligned}\|b_R-b_\infty\|_{L^2(r)}^2
    &=A(\tau)-2B(\tau)+\frac34,\\
 A(\tau)&=
 \frac{48+528\tau+3228\tau^2+8148\tau^3+17883\tau^4}
      {64(1+4\tau)^7},\\
 B(\tau)&=\frac{12+18\tau+123\tau^2}
                 {16(1+2\tau)^5}.
\end{aligned}
$$

 At $\tau=1/256$ this is the rational value $E$ displayed in [section 6](/quantum-measurement/research/preparation-returns/equilibrium-uniqueness-and-an-explicit-witness#sec:uniqueness). The strict estimate used there is certified by 

$$

 \frac1{576}-\frac{4E}{3}
 =\frac{261360546794830111543}
        {747189504563051511000000}>0 .

$$

 This calculation is an exact continuum integral, not a spectral cutoff or numerical trajectory approximation.

---

# Declarations

<a id="paragraph-2"></a>

## Declarations

 

<a id="paragraph-3"></a>

#### Funding.

 This work was conducted independently without external research funding.



<a id="paragraph-4"></a>

#### AI assistance and responsibility.

 The author developed this research programme, including the mathematical arguments. AI tools were used as an aid in that work and in preparing this publication version, including source organization, literature checking, mathematical checks, adversarial review, and editorial revision. Those reviews are not independent peer review, specialist certification, or formal proof verification. The author retains responsibility for the manuscript.



<a id="paragraph-5"></a>

#### Independent review and collaboration.

 Independent mathematical review and computational replication are invited. Collaboration on physical implementation and empirical testing is also welcome where specialist expertise, equipment, or institutional resources are required. No institutional affiliation or collaboration is claimed.

---

# Bibliography

## Bibliography

<a id="bib-AGGaussian"></a>

[1] Mahmoud Abdelgalil and Tryphon T. Georgiou.  The holonomy of optimal mass transport: The Gaussian-linear case, 2025.  URL [https://arxiv.org/abs/2408.14707v2](https://arxiv.org/abs/2408.14707v2).  Version 2, 12 August 2025.

<a id="bib-AGSmooth"></a>

[2] Mahmoud Abdelgalil and Tryphon T. Georgiou.  The holonomy of optimal mass transport: The smooth case, 2026.  URL [https://arxiv.org/abs/2608.15585v2](https://arxiv.org/abs/2608.15585v2).  Version 2, 26 August 2026.

<a id="bib-DGZ1992"></a>

[3] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the origin of absolute uncertainty.  *Journal of Statistical Physics*, 67:843–907, 1992.  [doi:10.1007/BF01049004](https://doi.org/10.1007/BF01049004).  URL [https://arxiv.org/abs/quant-ph/0308039](https://arxiv.org/abs/quant-ph/0308039).

<a id="bib-DGZ2004"></a>

[4] Detlef Dürr, Sheldon Goldstein, and Nino Zanghì.  Quantum equilibrium and the role of operators as observables in quantum theory.  *Journal of Statistical Physics*, 116:959–1055, 2004.  [doi:10.1023/B:JOSS.0000037234.80916.d0](https://doi.org/10.1023/B:JOSS.0000037234.80916.d0).  URL [https://sites.math.rutgers.edu/~oldstein/papers/op.pdf](https://sites.math.rutgers.edu/~oldstein/papers/op.pdf).

<a id="bib-Folland1989"></a>

[5] Gerald B. Folland.  *Harmonic Analysis in Phase Space*, volume 122 of *Annals of Mathematics Studies*.  Princeton University Press, 1989.  [doi:10.1515/9781400882427](https://doi.org/10.1515/9781400882427).

<a id="bib-Genoni2012"></a>

[6] Marco G. Genoni, Alessio Serafini, M. S. Kim, and Daniel Burgarth.  Dynamical recurrence and the quantum control of coupled oscillators.  *Physical Review Letters*, 108:150501, 2012.  [doi:10.1103/PhysRevLett.108.150501](https://doi.org/10.1103/PhysRevLett.108.150501).  URL [https://arxiv.org/abs/1110.5584](https://arxiv.org/abs/1110.5584).

<a id="bib-GS2007"></a>

[7] Sheldon Goldstein and Ward Struyve.  On the uniqueness of quantum equilibrium in Bohmian mechanics.  *Journal of Statistical Physics*, 128:1197–1209, 2007.  [doi:10.1007/s10955-007-9354-5](https://doi.org/10.1007/s10955-007-9354-5).  URL [https://arxiv.org/abs/0704.3070](https://arxiv.org/abs/0704.3070).

<a id="bib-Mackey2016"></a>

[8] Lester Mackey and Jackson Gorham.  Multivariate Stein factors for a class of strongly log-concave distributions.  *Electronic Communications in Probability*, 21(56):1–14, 2016.  [doi:10.1214/16-ECP15](https://doi.org/10.1214/16-ECP15).  URL [https://arxiv.org/abs/1512.07392v6](https://arxiv.org/abs/1512.07392v6).  Corrected preprint: arXiv:1512.07392v6, 23 November 2016.

<a id="bib-Patra2017"></a>

[9] Ayoti Patra and Christopher Jarzynski.  Shortcuts to adiabaticity using flow fields.  *New Journal of Physics*, 19:125009, 2017.  [doi:10.1088/1367-2630/aa924c](https://doi.org/10.1088/1367-2630/aa924c).  URL [https://arxiv.org/abs/1707.01490](https://arxiv.org/abs/1707.01490).

<a id="bib-ReedSimonII"></a>

[10] Michael Reed and Barry Simon.  *Methods of Modern Mathematical Physics. II: Fourier Analysis, Self-Adjointness*.  Academic Press, New York, 1975.

<a id="bib-OriginalMassive"></a>

[11] Jeremy Rodgers.  A massive configuration completion of the quantum measurement programme, 2026a.  Author preprint. DOI: [10.5281/zenodo.22774739](https://doi.org/10.5281/zenodo.22774739).

<a id="bib-OriginalMonograph"></a>

[12] Jeremy Rodgers.  Shadow theory and quantum measurement: Source dynamics, event laws, and physical records. two constitutive completions, 2026b.  Author preprint. DOI: [10.5281/zenodo.22774584](https://doi.org/10.5281/zenodo.22774584).

<a id="bib-OriginalPilot"></a>

[13] Jeremy Rodgers.  A deterministic pilot medium: Bell path selection and autonomous material records, 2026c.  Author preprint. DOI: [10.5281/zenodo.22774634](https://doi.org/10.5281/zenodo.22774634).

<a id="bib-PortfolioEquilibrium"></a>

[14] Jeremy Rodgers.  Autonomous quantum measurement chains with faithful equilibrium records, 2026d.  Author preprint. DOI: [10.5281/zenodo.23131069](https://doi.org/10.5281/zenodo.23131069).

<a id="bib-PortfolioPilot"></a>

[15] Jeremy Rodgers.  A deterministic hybrid medium for Bell jump paths and autonomous records, 2026e.  Author preprint. DOI: [10.5281/zenodo.23131075](https://doi.org/10.5281/zenodo.23131075).

<a id="bib-PortfolioRecords"></a>

[16] Jeremy Rodgers.  Nonequilibrium calibration and faithful records in autonomous effective measurement models, 2026f.  Author preprint. DOI: [10.5281/zenodo.23131081](https://doi.org/10.5281/zenodo.23131081).

<a id="bib-PortfolioReturn"></a>

[17] Jeremy Rodgers.  Preparation-return holonomy and equilibrium uniqueness in engineered interacting networks, 2026g.  Author preprint. DOI: [10.5281/zenodo.23131064](https://doi.org/10.5281/zenodo.23131064).

<a id="bib-RandomizedReport"></a>

[18] Jeremy Rodgers.  Randomized exact returns as a preparation device: Finite-time obstruction and recoverable controller memory.  Research report, version 1.0, 7 September 2026. The results used here are proved in the present article, 2026h.

<a id="bib-Rodgers2026"></a>

[19] Jeremy Rodgers.  Control consistency and Born equilibrium: Uniqueness from local potentials and fixed interactions.  Manuscript. DOI: [10.5281/zenodo.23131058](https://doi.org/10.5281/zenodo.23131058), 2026i.

<a id="bib-Teschl2009"></a>

[20] Gerald Teschl.  *Mathematical Methods in Quantum Mechanics: With Applications to Schrödinger Operators*, volume 99 of *Graduate Studies in Mathematics*.  American Mathematical Society, 2009.  URL [https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf).  Author-posted edition; spectral theorem and functional calculus.
