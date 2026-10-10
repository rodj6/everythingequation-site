# Effective Repeated Position Records with Retained Entropy and Calibrated Reset

Jeremy Rodgers · Independent Researcher · 9 October 2026

[Manuscript DOI](https://doi.org/10.5281/zenodo.23259558) · [Original PDF](/publications/quantum-measurement/research/repeated-position-records.pdf)

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

# Abstract and publication identity

**Abstract.**

We construct a finite effective scalar-current protocol in which different physical receivers record earlier actual archive digits and retain them through every later operation. A smooth compact stock-preserving baker exposes the digits, a scalar loader preserves their signs, a coherent two-coordinate gate writes each sign, and an exact positive Ermakov reset restores the scratch wave while retaining its correlations in a reset bank. The full original configuration law is dominated once by the complete reference law; no fresh actual population is assumed after a reset. Localized graph and Hilbert-valued slice-current estimates prove one joint 44-record failure bound below $2.641\times10^{-7}$ for the stated 10,000-unit schedule. A prior warmup's history error is a separate input. We also prove one-module flow-derivative and original-law preparation bounds, a complete finite-calibration digit criterion, and an approximate four-channel scalar reset uniform over a constant spring-gain interval. Exact examples show why wave SWAP does not imply actual freshness and why spring-gain tolerance does not cover idle-trap curvature. A distinct retained-symbolic-history calibration is proved in an appendix. These results provide explicit mathematical record and control mechanisms under declared premises; physical stock, actual-law and material-control warrant remain additional requirements.

---

# Section 1: The question: a record of an earlier actual event

<a id="section-1"></a>

## 1 The question: a record of an earlier actual event

 <a id="p2s:sec:introduction"></a>

A receiver is a record of an earlier event only if its actual later configuration reliably identifies that event and continues to do so through its stated retention interval. An endpoint wave correlation, a return of the apparatus wave, or a small quantum norm error does not by itself establish this property. Repetition adds another requirement: each reset and each later operation must remain compatible with the already written receivers and with the original complete statistical law. This paper constructs and analyzes such a finite history in a prescribed effective scalar-current model.

The principal result is a common protocol with a scratch/archive pair, different physical receiver coordinates, and a retained reset bank. A smooth stock-preserving baker exposes successive digits of the actual entrance archive. A scalar loader preserves the exposed sign, a smooth two-coordinate gate writes that sign into a separate receiver, and an exact scalar Ermakov pulse restores the scratch's quantum factor while transferring its quantum correlations into the used reset archive. Hilbert-valued slice-current estimates protect every earlier receiver under all subsequent spectator operations. For the specified original full-bank domination $\mu_0\leq10|\Psi_0|^2$, 44 records, and a 10,000-unit horizon, the complete own-record failure bound is $2.641\times10^{-7}$; the proof and rational enclosure are given in Corollary [9.2](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:cor:n44).

The earlier event in that row is an actual entrance archive digit. When these digits came from a prior smooth forward warmup, their order is reversed, and the independently supplied warmup-history error must be added. We keep that additional interface visible. A separate unknown input writer may retain a previously proved readiness estimate only when that estimate already conditions on the entire original bank and the record protocol truly acts on the nuisance variables alone.

The mathematical contributions are connected but distinct: 

1. A compact smooth Hamiltonian baker, its exact complete-current stock compiler, a whole-time first-flow-derivative bound independent of rounded-square degree away from the cutoff, and original-law preparation estimates with retained archives.

2. A dependency-complete scalar reader/copy/reset/hold construction, including the full coherent Gaussian comparison, localized forcing, shifted graph estimates, complete current, and all subsequent held histories under one original law.

3. Calibration interfaces that retain derivative error, moving boundaries, interpulse archive motion and guard losses; and an explicit approximate scalar reset uniform over a specified constant spring-gain interval, with all four Bogoliubov channels retained.

4. Exact counterexamples separating wave reset from actual freshness, exact open-loop reset from approximate tolerance, and spring-gain error from idle-trap curvature. An appendix gives the separate retained-symbolic history BV calibration and locates its control assumptions.

 These results supply positive mathematical mechanisms and precise implementation targets. They do not select an original actual ensemble, derive all prescribed controls from quantum material sources, or close the full preparation-to-measurement-to-physical-record problem.



<a id="section-1-1"></a>

### 1.1 Complete laws, currents and errors

 An actual law is a probability measure on the full original configuration, including unused banks and genuine retained positional copies. Its subsequent path law is obtained from the same complete guidance flow. Quantum factors, conditional actual densities, and reduced density operators are different objects. In particular a quantum vacuum factor does not mean that its actual position has been freshly sampled from that vacuum's squared amplitude.

We use ${\operatorname{TV}}(\mu,\nu)=\sup_E|\mu(E)-\nu(E)|$; for densities this is half the $L^1$ distance. A wave norm, an integrated absolute current, and a whole-history event probability are not interchangeable error metrics. The paper converts them only through an explicit estimate: complete current and coarea for crossings, the original cap for actual-law transfer, and measurable pushforward for TV. The physical decoder for receiver $z_j$ is fixed: its two record regions are $z_j\leq-A/2$ and $z_j\geq A/2$. An intermediate visit to the central region is a failure even if the final sign later recovers.

All main coordinates use a common oscillator standard deviation $\sigma^2=\hbar/(2m\omega)$ and dimensionless time $\tau=\omega t$. Thus the scalar current is $2\operatorname{Im}(\Psi^*\nabla\Psi)$. The stock compiler adds its explicitly displayed minimal-coupling drift. Section [12](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:sec:gain) states its canonical coordinate conversion before using annihilator variables. The complete scalar-current constitution is part of each theorem's model, rather than inferred from a stationary real wave alone. The constructed controls are smooth in space. Their time regularity is specified for each module: the compact baker and copy-gate switches have flat smooth joins, the polynomial loader has a $C^3$ center and a $C^1$ potential, and the exact reset interaction has $C^5$ joins. These regularities suffice for the stated common-domain and current arguments; infinite time differentiability of the entire joined schedule is not required.



<a id="section-1-2"></a>

### 1.2 Established methods and inherited work

 Baker maps, Gaussian changes of variables and BV transfer estimates are established tools. Lasota–Yorke [[1](/quantum-measurement/research/repeated-position-records/bibliography#bib-LasotaYorke1973)] supplies classical invariant-density context; the elementary finite BV statements used here are proved in the paper. Standard quadratic and metaplectic mechanics underlies exchange and squeezing. The SU(2) beam-splitter framework of Campos–Saleh–Teich [[2](/quantum-measurement/research/repeated-position-records/bibliography#bib-CamposSalehTeich1989)] is an important precedent for mode transfer, but an optical mode calculation does not identify actual positional histories in our scalar model. Likewise common-angle composite pulse compensation, including BB1, belongs to Wimperis and subsequent work of Brown–Harrow–Chuang [[3](/quantum-measurement/research/repeated-position-records/bibliography#bib-Wimperis1994), [4](/quantum-measurement/research/repeated-position-records/bibliography#bib-BrownHarrowChuang2004)]. We make no novelty claim for those pulse identities. The gain-interval theorem below instead proves a finite four-channel estimate for its stated positive scalar spring.

Common-domain evolution and global trajectory arguments use established operator and current theory with the hypotheses checked for the constructed parent [[5](/quantum-measurement/research/repeated-position-records/bibliography#bib-SchmidGriesemer2014), [6](/quantum-measurement/research/repeated-position-records/bibliography#bib-TTflow)]. The companion flow manuscript [[11](/quantum-measurement/research/repeated-position-records/bibliography#bib-RodgersP3)] develops a broader reference-weighted framework for singular models; none of its singular-domain applications is needed for the explicit effective parent here.

The author's earlier equilibrium-record and nonequilibrium-record manuscripts [[8](/quantum-measurement/research/repeated-position-records/bibliography#bib-RodgersEquilibrium2026), [9](/quantum-measurement/research/repeated-position-records/bibliography#bib-RodgersNonequilibrium2026)] already organize conditional measurement, storage and entire-history statements. The latter includes both periodic and radial effective apparatuses. Their error constants belong to their own Hamiltonians and law classes and are not imported into the present 44-cycle construction. The contribution here is the explicit compact stock/reader/reset chain, its own-event and whole-hold proof, and its calibration/current interfaces with every archive retained.

The revised Gaussian-preparation companion [[10](/quantum-measurement/research/repeated-position-records/bibliography#bib-RodgersP1)] proves conditional subsystem preparation, fine-archive obstructions and a one-use internal-reference instrument. Its readiness estimate conditions on the actual retained bank; it does not supply the full-bank domination assumed here or a repeated unknown-input instrument. The source-current companion [[12](/quantum-measurement/research/repeated-position-records/bibliography#bib-RodgersP4)] provides estimates relevant to replacing prescribed controls by dynamical sources, but applying them requires a compatible complete current and the law and decoder premises used here. These new companion manuscripts remain distinct from the current website research editions. The cited October editions also retain their own identity relative to the preserved September texts. No assumptions are transferred between the programme's pilot-medium and massive-configuration constitutions, and no completed integration into a material apparatus is asserted.

The body follows the construction from geometry to Hamiltonian current, then to writing, reset, retention and calibration. The appendix proves a separate calibration result with the complete symbolic history retained.

---

# Section 2: A compact stock-preserving baker module

<a id="section-2"></a>

## 2 A compact stock-preserving baker module

 <a id="p2c:sec:geometry"></a>

The preparation map uses the same two scalar positions repeatedly: a scratch or writer coordinate $x$ and an archive coordinate $y$. In the effective electromagnetic realization they are two Cartesian coordinates of one charged planar carrier. This restriction matters: an arbitrary vector potential on a many-particle configuration space is not automatically a local electromagnetic field.

Use dimensionless time $\tau=\omega t$ and positions in the common Gaussian standard deviation $\sigma$, where $\sigma^2=\hbar/(2m\omega)$. Write 

$$

 \varphi(x)=(2\pi)^{-1/4}e^{-x^2/4},\qquad
 \phi(x)=|\varphi(x)|^2,\qquad
 C(x,y)=(\Phi(x),\Phi(y))=(u,v),

$$

 with $\Phi$ the standard Gaussian CDF. The complete active stock has amplitude $\varphi(x)\varphi(y)$ and density $\Gamma(x,y)=\phi(x)\phi(y)$. The CDF coordinates are used to design and analyze deterministic controls; no actual coordinate is sampled from that reference density by definition.

The discontinuous reference baker is <a id="p2c:eq:baker"></a>


$$

 B(u,v)=\left(2u-s,\frac{v+s}{2}\right),
 \qquad s=\lfloor2u\rfloor .

$$

Equation (2.1).

 We construct a smooth compact Hamiltonian flow whose completed map agrees with this entire affine map on two large rectangles. It is unnecessary and impossible to treat the discontinuous baker itself as a globally smooth physical flow.



<a id="section-2-1"></a>

### 2.1 Smooth rounded squares with an area clock



For $0<h\leq1/16$ choose the even integer $p=2\lceil2/h\rceil$, so $p\geq64$ and $ph\geq4$. Let 

$$

 \Theta(s)=
 \frac{e^{-1/s}}{e^{-1/s}+e^{-1/(1-s)}}\quad(0<s<1),
 \qquad
 \Theta(s)=0\ (s\leq0),\quad\Theta(s)=1\ (s\geq1).

$$

 It is smooth with flat endpoint joins. We shall use <a id="p2c:eq:stepbounds"></a>


$$

 0\leq\Theta'\leq2,\qquad |\Theta''|<200.

$$

Equation (2.2).

 For completeness, set $\ell=1/(1-s)-1/s$. Then $\Theta'=\ell'\Theta(1-\Theta)$ and $|\Theta''|\leq(|\ell''|+\ell'^2)e^{-|\ell|}$. Writing $z=1/\min(s,1-s)\geq2$ bounds the latter by $e^2(z^4+2z^3+8z^2+32)e^{-z}$. The maxima of $z^ke^{-z}$, together with $e^2<9$, $e^4>256/5$, $e^3>27/2$ and $e^2>32/5$, bound it by $9(5+4+5+5)=171<200$. For the first derivative, with $a=|2s-1|$ its exact formula is 

$$

 \Theta'=
 \frac{2(1+a^2)}{(1-a^2)^2}
 \operatorname{sech}^2\!\left(\frac{2a}{1-a^2}\right)
 \leq2,

$$

 using $\cosh^2 z\geq1+z^2$.

Define <a id="p2c:eq:radialchart"></a>


$$
\begin{aligned}R_p(\theta)&=(\cos^p\theta+\sin^p\theta)^{-1/p},\\
 \chi(r)&=\Theta(4r-1),\qquad
 R(r,\theta)=1+\chi(r)(R_p(\theta)-1),\\
 Q(r,\theta)&=rR(r,\theta)(\cos\theta,\sin\theta),\qquad
 K=R+rR_r,\quad w=RK. 
\end{aligned}
$$

Equation (2.3).

 These curves are circles for $r\leq1/4$ and homogeneous rounded squares for $r\geq1/2$. They are strictly nested since $K\geq1$. The intermediate curves need not be convex.



**Lemma 2.1 (Area-normalized quarter-turn).**

<a id="p2c:lem:clock"></a> The chart in [(2.3)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:radialchart) gives a unique smooth radius $r(q)>0$ for every $q\ne0$. The function <a id="p2c:eq:area"></a>


$$

 A(r)=\frac{r^2}{2}\int_0^{2\pi}R(r,\theta)^2\,d\theta,
 \qquad H_*(q)=A(r(q))

$$

Equation (2.4).

 is smooth also at the origin. Its Hamiltonian vector field is $J\nabla H_*=(-\partial_{q_2}H_*,\partial_{q_1}H_*)$. Every positive level has period one; its time $1/4$ map is exactly the counterclockwise geometric quarter-turn, at every point on the level. The inverse quarter-turn is obtained at time $-1/4$. All intermediate points stay inside the square with axis intercept $r$. 





**Proof.**

In the first octant, $t=\tan\theta\in[0,1]$ gives 

$$

 \partial_\theta\log R_p
       =\frac{t-t^{p-1}}{1+t^p}\in[0,1].

$$

 Symmetry implies $1\leq R_p\leq\sqrt2$ and $|R'_p|\leq R_p$ globally. Thus $K\geq1$ gives radial invertibility, and the inverse function theorem gives smoothness off the origin. Near the origin the chart is ordinary polar coordinates and $H_*=\pi|q|^2$, so there is no origin singularity. Flat joins in $\chi$ make the intermediate patch smooth. Since $R\leq R_p$ and $R_p|\cos\theta|,R_p|\sin\theta|\leq1$, the level stays in its axis-intercept square.

Let $Z(r)=\int_0^{2\pi}w(r,\theta)\,d\theta$. Differentiating [(2.4)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:area) gives $A_r=rZ$. The chart Jacobian is $\det(Q_r,Q_\theta)=rRK=rw$. Since the Hamiltonian is constant on each level, its equations are $\dot r=0$ and $\dot\theta=A_r/(rw)=Z/w$. The lifted angular clock <a id="p2c:eq:angleclock"></a>


$$

 \mathcal T(r,\theta)=\frac1{Z(r)}
                         \int_0^\theta w(r,s)\,ds

$$

Equation (2.5).

 therefore satisfies $\dot{\mathcal T}=1$. Fourfold symmetry gives $\mathcal T(r,\theta+\pi/2)=\mathcal T(r,\theta)+1/4$, proving the exact endpoint and period claims. Each path remains on its level, which proves confinement. For $r\geq1/2$ the enclosed area is the full rounded-square area $A_p r^2$: changing its inner foliation subtracts no area offset. 

□



Let 

$$

 \psi_h(r)=1-\Theta\!\left(\frac{r-(1-h)}{h/2}\right),
 \qquad
 H_c(q)=\int_0^{r(q)}A_s(s)\psi_h(s)\,ds
             -\int_0^{1-h/2}A_s(s)\psi_h(s)\,ds .

$$

 The stream $H_c$ is smooth and zero outside a compact subset of $(-1,1)^2$. Its vector field is exactly $\psi_h(r)J\nabla H_*$, and $|\psi'_h|\leq4/h$. The cutoff is applied to the complete stream derivative; merely cutting a velocity or omitting a scalar compensation would not have the same conservation property.



**Theorem 2.2 (Complete compact baker isotopy).**

<a id="p2c:thm:baker"></a> Define 

$$

 L_h=[h,\tfrac12-h]\times[h,1-h],\qquad
 R_h=[\tfrac12+h,1-h]\times[h,1-h].

$$

 There is a smooth area-preserving isotopy of the open unit square, compactly supported inside it and flat at its temporal endpoints, whose time-one map $T_h$ agrees with $B$ on $L_h\cup R_h$. The excluded set has exact reference area <a id="p2c:eq:collar"></a>


$$

 \beta_h=1-(1-4h)(1-2h)=6h-8h^2.

$$

Equation (2.6).

 The complete flow stays inside the square at every intermediate time and is the identity near its boundary. 





**Proof.**

First the whole inner square $[-1+2h,1-2h]^2$ is contained in the unchanged region $r<1-h$. In the outer homogeneous region, its rounded-square radius is at most $2^{1/p}(1-2h)$, and 

$$

 2\left(\frac{1-2h}{1-h}\right)^p
 \leq2e^{-ph}\leq2e^{-4}<1.

$$

 Points whose homogeneous radius is below $1/2$ lie inside the outer half-radius curve, so their actual nested radius is also below $1/2<1-h$. This covers the patched center as well.

The first quantile Hamiltonian is $\mathcal H_g(u,v)=H_c(2u-1,2v-1)/4$. Its time $1/4$ map is $(u,v)\mapsto(1-v,u)$ on $[h,1-h]^2$. The divisor four is the coordinate Jacobian. The second Hamiltonian is the sum of two disjoint terms <a id="p2c:eq:halfstreams"></a>


$$

 \mathcal H_b(u,v)=
 -\frac{H_c(2u-1,4v-1)}8
 -\frac{H_c(2u-1,4v-3)}8 .

$$

Equation (2.7).

 Each support is strictly inside its own horizontal half-square, with a positive gap between them. The divisor eight is its coordinate Jacobian, and the negative sign gives clockwise motion. On their unchanged regions the maps are respectively $(x,y)\mapsto(2y,(1-x)/2)$ and $(x,y)\mapsto(2y-1,1-x/2)$.

The global quarter-turn sends $L_h$ into the lower unchanged region and $R_h$ into the upper one. In normalized coordinates their first coordinate is $1-2v$, bounded by $1-2h$ in absolute value, and their second is $4u-1$ or $4u-3$, bounded by $1-4h$. Their composed maps are exactly $(2u,v/2)$ and $(2u-1,(v+1)/2)$. Every intermediate point follows a confined complete level; ordinary rigid rotation of square corners, which would leave the square, has not been used.

For each of two consecutive stages of duration $1/2$, use the nonnegative rate $g(\tau)=\Theta'(2\tau)/2$ in its local stage time. It integrates to $1/4$, has maximum at most one, and is flat at both ends. Multiplying the corresponding Hamiltonian by this rate preserves its autonomous endpoint by time reparameterization. Smooth compact Hamiltonian fields have complete diffeomorphic area-preserving flows and smooth joins. The two rectangles have combined area $(1-4h)(1-2h)$, proving [(2.6)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:collar). 

□





**Proposition 2.3 (Exact inverse decoder).**

<a id="p2c:prop:inverse"></a> Let 

$$

 E_h=B(L_h\cup R_h)=
 [2h,1-2h]\times
 \left([\tfrac h2,\tfrac{1-h}2]
       \cup[\tfrac{1+h}2,1-\tfrac h2]\right).

$$

 Reversing the two stages with reversed signs gives a smooth duration-one inverse module. On $E_h$ it has the exact map <a id="p2c:eq:inverse"></a>


$$

 s=\lfloor2v\rfloor,\qquad
 v^+=2v-s,\qquad u^+=\frac{u+s}{2}.

$$

Equation (2.8).

 In particular the decoded bit does not require a Born or independent actual scratch coordinate $u$. The exceptional reference area is again $\beta_h$. 





**Proof.**

The inverse flow is realized by time reversal of the compact Hamiltonian path. The baker is a bijection almost everywhere with inverse [(2.8)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:inverse); direct substitution verifies both branches. Area preservation maps the two original rectangles to $E_h$ with unchanged total area. 

□





<a id="section-2-2"></a>

### 2.2 What the first-flow-derivative estimate controls





**Theorem 2.4 (Whole-time first jets and one-module labels).**

 <a id="p2c:thm:jets"></a> For the uncut level flow $\Phi_s$ of $H_*$, <a id="p2c:eq:uncutjets"></a>


$$

 \|D\Phi_s\|_{\rm op},\ \|D\Phi_s^{-1}\|_{\rm op}
 \leq384875<400000

$$

Equation (2.9).

 for every $s$, independently of $p,h$. For the cut flow, uniformly for $|s|\leq1/4$, <a id="p2c:eq:cutjets"></a>


$$

 \|D\Phi_s\|_{\rm op},\ \|D\Phi_s^{-1}\|_{\rm op}
 \leq D_h:=400000+160/h.

$$

Equation (2.10).

 On the guarded unchanged tube of one forward or inverse baker module, its quantile prefix and inverse prefix derivatives have norm below $800000$. For its moving physical inverse label $\eta_\tau=F_\tau^{-1}\circ C$ this gives the sufficient Euclidean-to-$\ell^1$ bound <a id="p2c:eq:goodlabel"></a>


$$

 \|D\eta_\tau\|_{2\to1}<10^6=:B_{\rm good}.

$$

Equation (2.11).

 For an inverse module one may enter from $E_{2h}$ and retain this bound until the virtual entrance label changes by $h/8$ in $\ell^1$. Its original entrance exclusion has area $\beta_{2h}=12h-32h^2$. Without that good-tube restriction, $2D_h^2$ is a safe one-module quantile prefix bound.

In physical standardized coordinates, the generator has amplitude at most <a id="p2c:eq:amplitude"></a>


$$

 |V|\leq400/h

$$

Equation (2.12).

 per unit pulse rate; it therefore holds for the duration-one protocol above. These are first-flow-derivative and amplitude bounds, not uniform bounds on all spatial derivatives of the fields or on a cumulative many-cycle inverse. 





**Proof.**

On the fixed central annulus, $r\chi'\leq4$ and $r^2|\chi''|\leq800$. With $R_p-1<1/2$, the chart quantities satisfy 

$$

 R\leq\tfrac32,\quad K\leq\tfrac72,\quad
 1\leq w\leq\tfrac{21}4,\quad
 |rR_r|\leq2,\quad |rK_r|\leq404,\quad
 |rw_r|\leq613<616 .

$$

 For example $rK_r=2rR_r+r^2R_{rr}$ and $rw_r=(rR_r)K+R(rK_r)$. These bounds involve only the first angular derivative of $R_p$ and the fixed radial step jets.

The inverse-radius gradient has radial and angular components $1/K$ and $-R_\theta/(RK)$, so $|\nabla r|\leq\sqrt2<2$. For the clock [(2.5)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:angleclock), 

$$

 \frac1{2\pi(21/4)}\leq\mathcal T_\theta
          \leq\frac{21/4}{2\pi},\qquad
 |r\mathcal T_r|\leq1232,\qquad
 |\nabla\mathcal T|\leq2465/r .

$$

 The two quotient terms in $\mathcal T_r$ each cost at most $616$; one can take $\theta\in[0,2\pi]$. Other angular lifts add an integer to $\mathcal T$ and have the same derivatives. The last bound follows from $\nabla\mathcal T=\mathcal T_r\nabla r+
\mathcal T_\theta\nabla\theta$ and $|\nabla\theta|\leq1/r$.

Regard $Q$ now as the inverse chart in $(r,\mathcal T)$. Since $|Q_\theta|\leq(9/4)r$, 

$$

 |r\theta_r|_{\mathcal T}\leq1232\cdot2\pi(21/4)
                         \leq40656 ,

$$

 using $\pi<22/7$. It follows that $|Q_r|_{\mathcal T}<100000$ and $|Q_{\mathcal T}|<75r$. The full uncut flow is $Q(r,\mathcal T+s)$; differentiation therefore gives $100000\cdot2+75r(2465/r)=384875$. The inverse uses $-s$ and the same estimate. The circular origin supplies its continuous smooth extension.

For the cut flow replace $\mathcal T+s$ by $\mathcal T+s\psi_h(r)$. Its extra derivative is at most $75r(1/4)(4/h)2\leq150/h$ on its support. Outside the support the map is the identity. This proves [(2.10)](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:eq:cutjets).

The global square conjugation has condition number one; the half-square conjugations have condition number two. On a good completed stage, the map is exactly an affine quarter-turn, so it costs only one or two, respectively. At most one incomplete stage incurs the uncut bound. Thus any prefix or inverse prefix of one module costs less than $800000$ on that tube. Since $\|DC\|_{\rm op}\leq\phi(0)<2/5$, conversion to $\ell^1$ gives $\sqrt2\cdot800000\cdot\phi(0)<480000<10^6$. The inverse-label estimate involves the *forward* CDF derivative. The set $E_{2h}$ is at least $h/2$ in $\ell^1$ distance from the complement of $E_h$. The stipulated $h/8$ drift therefore keeps the virtual entrance label in $E_h$, where the preceding good-level proof applies. The corresponding forward version uses $L_{2h}\cup R_{2h}$. The excluded sets have the stated areas, by the same rectangle calculation. Using cut derivatives for both stages instead gives $2D_h^2$.

Finally $A_r=rZ\leq(21\pi/2)r$ and $|\nabla r|<2$, so $|J\nabla H_*|\leq21\pi r<66$ on the compact support. An inverse linear coordinate conjugation costs at most $1/2$, giving quantile speed at most $33$ per unit rate. Every support quantile is at least $h/8$ from zero and one. The function $I(u)=\phi(\Phi^{-1}(u))$ is concave, since $I''=-1/I<0$, and symmetric. Its chords imply $I(u)\geq2\phi(0)\min(u,1-u)$. Hence $\|DC^{-1}\|\leq4\sqrt{2\pi}/h<12/h$ on the support. The physical standardized speed is below $33\cdot12/h=396/h<400/h$. 

□



On each fixed good cell of an $n$-cycle baker, $DB^{-n}=\operatorname{diag}(2^{-n},2^n)$. Thus $B_{\rm good}$ is a *one-module* bound; applying it to the cumulative inverse would be incorrect. Likewise the angular and cutoff higher derivatives can grow with $p$ and $1/h$. The estimate has removed an unnecessary first-flow-jet penalty without making all physical field jets or controller resources small.

---

# Section 3: The scalar Hamiltonian and complete current

<a id="section-3"></a>

## 3 The scalar Hamiltonian and complete current

 <a id="p2c:sec:compiler"></a>



**Theorem 3.1 (Exact stationary-stock compiler).**

 <a id="p2c:thm:compiler"></a> Let $\mathcal H_\tau$ be either compact quantile stream above, with its pulse rate, or any Hamiltonian stream smooth on a closed finite time interval with a common compact spatial support inside the square. Put 

$$

 w=J\nabla\mathcal H_\tau,\qquad
 V=(DC)^{-1}w\circ C,\qquad
 S(x,y,\tau)=-\mathcal H_\tau(\Phi(x),\Phi(y)).

$$

 Then $V=(S_y,-S_x)/\Gamma$ is smooth and compactly supported, with $\operatorname{div}(\Gamma V)=0$. In the dimensionless units above define <a id="p2c:eq:compiler"></a>


$$
\begin{aligned}H_0&=-\Delta+(x^2+y^2)/4,\\
 H_V(\tau)&=(-i\nabla+V/2)^2+(x^2+y^2)/4-|V|^2/4
 \\
 &=H_0-i\{V\cdot\nabla+\tfrac12\operatorname{div}V\}.
 
\end{aligned}
$$

Equation (3.1).

 This is a common-domain self-adjoint family on $D(H_0)$ with a unitary finite-time propagator. Its exact active wave is $e^{-i\tau}\varphi(x)\varphi(y)$, and its complete minimal-coupling current is $\Gamma V$. Its actual guidance trajectories are precisely $\dot q=V(\tau,q)$ for every finite entrance position. At a fields-off hold $V=0$, the canonical active current is exactly zero.

Tensoring an independently evolving rest factor preserves the active formula with its full rest density retained. When each held positional factor has zero complete current, all corresponding nuisance coordinates are fixed by the module. Stationarity of a density alone is not this zero-current condition. Internal controls are proportional to identity on inert internal references. No actual stock population is implied by the exact stationary wave. 





**Proof.**

The signs give $S_y=-\mathcal H_v\phi(y)$ and $-S_x=\mathcal H_u\phi(x)$, proving the velocity identity. Its weighted divergence is $S_{yx}-S_{xy}=0$. Compact quantile support lies away from the CDF boundary and therefore pulls back to compact physical support.

Expand the minimal-coupling square to obtain [(3.1)](/quantum-measurement/research/repeated-position-records/the-scalar-hamiltonian-and-complete-current#p2c:eq:compiler); the $|V|^2/4$ compensation cancels its quadratic term. For the real stock $\varphi_2=\varphi(x)\varphi(y)$, $H_0\varphi_2=\varphi_2$, and 

$$

 \left(V\cdot\nabla+\tfrac12\operatorname{div}V\right)
 \varphi_2
 =\frac{\operatorname{div}(\Gamma V)}{2\varphi_2}=0.

$$

 This proves the exact time-dependent solution including its scalar phase. In these units the current of a general wave is $2\operatorname{Im}(\Psi^\dagger\nabla\Psi)+\rho V$. For the real active stock it is $\Gamma V$; for a factorized complete wave the full rest density multiplies it before any integration. The ODE is therefore the intended deterministic one, without assigning its entrance a reference population.

For fixed finite $h,p$ all compact coefficients and their required derivatives are bounded. The first-order symmetric perturbation is infinitesimally $H_0$-bounded: the oscillator form controls $\|\nabla\psi\|_2$, and Young's inequality bounds it by $\varepsilon\|H_0\psi\|_2+c_\varepsilon\|\psi\|_2$. The divergence term is a bounded multiplier. Kato–Rellich gives self-adjointness on $D(H_0)$. The minimal-coupling form is bounded below by $-\|V\|_\infty^2/4$. Smooth finite-time coefficients give graph-$C^1$ dependence on the common domain and the standard common-domain propagator theorem [[5](/quantum-measurement/research/repeated-position-records/bibliography#bib-SchmidGriesemer2014)] applies. The explicit stock solution is its unique evolution. Smooth bounded $V$ with bounded first spatial derivatives also gives global unique classical trajectories for every finite initial position. Tensor-product evolution proves the rest-factor assertion. 

□



In physical units, with signed nonzero charge $e$, the same choice is 

$$

 A_{\rm em}=-\frac{m}{e}v,\qquad
 H=\frac{(p-eA_{\rm em})^2}{2m}
      +V_{\rm osc}-\frac m2|v|^2,\qquad
 v=\sigma\omega V.

$$

 Changing the vector-potential sign reverses the current. Omitting the scalar correction changes the stock. Compactness is important for the operator and resource claims; an uncut polynomial or rapidly rotating global control need not inherit this lower bound or domain argument.

This theorem is a prescribed scalar canonical-current parent. Its compact planar potentials do not establish an exact source-free Maxwell field in a whole spatial neighborhood, finite quantum source/clock dynamics, finite-width planar confinement or a Pauli/constituent current reduction. Those are separate physical implementation tasks. In particular zero canonical hold current is not a claim that a spin-curl current vanishes for the same real stock.

---

# Section 4: The original law, fine archive and retained information

<a id="section-4"></a>

## 4 The original law, fine archive and retained information

 <a id="p2c:sec:law"></a>

Let $N$ contain every held nuisance coordinate and genuinely retained external context. Its reference measure may be disintegrated against the actual law of external context; write the complete probability reference during these modules as $\lambda=du\,dv\,\kappa(dN)$. Both $T_h$ and the ideal baker act on $(u,v)$ and fix $N$. They preserve $\lambda$. An original density $f(u,v,N)$ may correlate all these variables. A cap $f\leq C$ means one cap on this complete law, not a newly assigned conditional cap after a selected digit or a fresh reference draw at the next cycle.



**Lemma 4.1 (Repeated baker and exact archive ordering).**

 <a id="p2c:lem:digits"></a> For $M=2^n$, outside the dyadic boundary set, <a id="p2c:eq:digits"></a>


$$

 B^n(u,v)=
 \left(r,b\right)=
 \left(\{Mu\},
       \frac{v+\operatorname{rev}_n(\lfloor Mu\rfloor)}{M}\right),

$$

Equation (4.1).

 where $\operatorname{rev}_n$ reverses all $n$ binary digits, including leading zeros. If $s_j=\lfloor2u_{j-1}\rfloor$ is the actual entrance declaration for an exact baker step, then 

$$

 b_n=\frac{v_0+\sum_{j=1}^n2^{j-1}s_j}{2^n}.

$$

 The final fine archive retains all these declarations and the original analog $v_0$. Together $(r,b)$ determine the original pair. 





**Proof.**

The recursions are $u_j=2u_{j-1}-s_j$ and $v_j=(v_{j-1}+s_j)/2$. Induction gives $u_n=\{2^nu_0\}$ and the displayed expression for $v_n$. The integer $\lfloor2^nu_0\rfloor$ has binary expansion $\sum_j2^{n-j}s_j$, while the integer in the archive has expansion $\sum_j2^{j-1}s_j$. This proves the reversal. To invert, put $k=\lfloor Mb\rfloor$: 

$$

 v_0=Mb-k,\qquad
 u_0=\frac{r+\operatorname{rev}_n(k)}{M}.

$$

 For example, $u_0=3/10,v_0=2/5,n=2$ gives $(r,b)=(1/5,3/5)$. Omitting reversal would give $b=7/20$, an incorrect archive. Each inverse branch has determinant one; the ideal map is a measure-preserving bijection modulo its null seams. 

□





**Lemma 4.2 (Fine-archive conditional freshness).**

 <a id="p2c:lem:BV"></a> Let $\mu=f\lambda$ be a nonnegative finite measure, with writer-direction variation 

$$

 V_u=\int\operatorname{Var}_{u\in(0,1)}
                         f(u,v,N)\,dv\,\kappa(dN)<\infty.

$$

 Let $\nu_n$ be the actual $(b,N)$ marginal of $B^n_\#\mu$. Then <a id="p2c:eq:idealBV"></a>


$$

 \operatorname{TV}(B^n_\#\mu,\,dr\,\nu_n)
                   \leq \frac{V_u}{4\,2^n}.

$$

Equation (4.2).

 Here TV is half the variation norm for equal-mass measures, and the full fine archive is retained. For probability laws this is an averaged conditional readiness bound with respect to the actual $(b,N)$ marginal, not a uniform bound after arbitrarily rare archive postselection. 





**Proof.**

On an interval $I=[a,b]$ of length $\ell$, its average $f_I$ obeys 

$$
\begin{aligned}\int_I|f-f_I|
 &\leq\frac1\ell\int_I\!\int_I|f(s)-f(t)|\,ds\,dt\\
 &\leq\frac1\ell\int_I
        2(y-a)(b-y)\,d|Df|(y)
 \leq\frac\ell2\operatorname{Var}_I f .
\end{aligned}
$$

 This proof includes BV jumps, by the one-dimensional variation measure. Apply it to the $M$ writer cells at fixed $(v,N)$ and let $P_Mf$ be their cell averages. Then $\|f-P_Mf\|_1\leq V_u/(2M)$.

On the final archive strip $k=\lfloor Mb\rfloor$, the output density is $f((r+\operatorname{rev}_n k)/M,Mb-k,N)$. Integrating in $r$ is exactly averaging $f$ over the corresponding original writer cell. Consequently $B^n_\#((P_Mf)\lambda)=dr\,\nu_n$. Measure preservation and the half-variation convention give [(4.2)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:idealBV). Bit reversal only permutes the writer cells and does not remove or average the final archive. 

□





**Theorem 4.3 (Exact-outside-collar original-law transfer).**

 <a id="p2c:thm:law"></a> Suppose the original complete probability density obeys $0\leq f\leq C$. After $n$ compact baker modules, <a id="p2c:eq:mapfee"></a>
<a id="p2c:eq:actualfresh"></a>


$$
\begin{aligned}\operatorname{TV}(T_h^n{}_\#\mu,B^n_\#\mu)
 &\leq nC\beta_h,\\
 \operatorname{TV}(T_h^n{}_\#\mu,\,
        dr\,\widetilde\nu_n)
 &\leq \frac{V_u}{4\,2^n}+2nC\beta_h,
 
\end{aligned}
$$

Equation (4.3, 4.4).

 where $\widetilde\nu_n$ is its own actual final archive/nuisance marginal. The probability that any step fails exact baker agreement is at most $nC\beta_h$. On its complement the final fine archive stores the *actual* entrance declarations in Lemma [4.1](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:lem:digits).

If finite writer BV is proved only for one original box submeasure $\mu_B$ with outside mass $\tau$, the freshness estimate instead is <a id="p2c:eq:boxedfresh"></a>


$$

 \operatorname{TV}(T_h^n{}_\#\mu,\,
                       dr\,\widetilde\nu_n)
 \leq\tau+\frac{V_u(\mu_B)}{4\,2^n}
                       +2nC\beta_h .

$$

Equation (4.5).

 The original outside mass is charged once. 





**Proof.**

Every prefix preserves the complete reference; its pushforward density remains at most $C$. Couple the physical and ideal iterations by the same original point. Until their first entry outside $L_h\cup R_h$ the states and the next complete maps agree exactly. A union bound using the ideal reference-preserving prefixes charges at most $nC\beta_h$ for the first failure. Their endpoint coupling proves [(4.3)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:mapfee). The same good event identifies each actual pre-stage declaration with the ideal one and proves the digit assertion.

Insert the ideal law and its actual nuisance marginal between the two laws in [(4.4)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:actualfresh). Lemma [4.2](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:lem:BV) gives the middle fee. The endpoint fee is $nC\beta_h$, and marginalizing that comparison and tensoring with $dr$ costs another at most $nC\beta_h$. This is why the own-marginal freshness bound contains a factor two.

For [(4.5)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:boxedfresh), apply the same argument to $\mu_B$ and its own nuisance submarginal. The outside-box output and $dr$ times its actual nuisance marginal have equal mass $\tau$, so their TV is at most $\tau$. Adding these two subprobability comparisons proves the result without recutting the law at a later time. 

□



After the last module the stationary-stock hold fixes the archive point. This is a single fine analog archive, not yet $n$ separately held macroscopic records or a physical high-resolution decoder. The separate reader, receiver and reset construction below addresses that additional task. During reuse the archive is deliberately overwritten; its invertible final encoding retains the past digits even though its sign need not retain an earlier sign.



<a id="section-4-1"></a>

### 4.1 Where the information goes





**Proposition 4.4 (Complete relative entropy is retained).**

 <a id="p2c:prop:entropy"></a> Let $F$ be any finite composition of the exact compact modules, or any ideal baker iterate, acting on the full retained reference space. For an original $\mu=f\lambda$, <a id="p2c:eq:entropy"></a>


$$

 \operatorname{TV}(F_\#\mu,\lambda)
       =\operatorname{TV}(\mu,\lambda),\qquad
 D_{\rm KL}(F_\#\mu\|\lambda)
       =D_{\rm KL}(\mu\|\lambda),

$$

Equation (4.6).

 with the second equality also in the extended sense. These invariants are compatible with [(4.4)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:actualfresh), which compares the writer with its ready reference *conditional on the actual final archive*. 





**Proof.**

The maps are invertible and reference preserving (modulo null seams for the ideal baker). Their pushforward density is $f\circ F^{-1}$. Changing variables proves equality of the integrals of $|f-1|/2$ and $f\log f$; the negative part of $f\log f$ is bounded on a probability reference, so the extended integral is well defined. The conditional-freshness target is $dr$ times the actual nuisance marginal, not the original full reference $\lambda$. There is therefore no contradiction. 

□



When a density is written as $f(r,b,N)$, with $g(b,N)=\int f(r,b,N)\,dr$, the usual exact decomposition is 

$$

 D_{\rm KL}(f\|1)
 =D_{\rm KL}(g\|1)
  +\int f\log\!\left(\frac{f}{g}\right)\,dr\,db\,d\kappa .

$$

 It follows by adding and subtracting $\log g$; zero-marginal fibres have zero $f$ mass. The identity also holds with value $+\infty$: the negative parts of $g\log g$ and $f\log(f/g)$ have integrals at most $1/e$ each, so conditional integration justifies the sum without subtracting infinite quantities. If conditional freshness were exact, the second term would vanish and the retained nuisance would carry the entire relative-entropy discrepancy. A small TV estimate alone is not asserted to make that conditional KL term small. The exact digit inverse already shows directly that no complete positional information was erased by the map.



<a id="section-4-2"></a>

### 4.2 A cap-free fixed-dimensional preparation variant



The same geometric map admits a different, explicitly priced law class. This result concerns preparation of a writer with one reused archive and one untouched future receiver. It is not a cap-free theorem for the later repeated-record bank, whose complete coordinate/law conditions must be checked separately.



**Lemma 4.5 (Three-dimensional concentration from BV).**

 <a id="p2c:lem:concentration"></a> For a nonnegative BV subdensity $g$ on the unit cube, with mass $m$ and directional variations $V_1,V_2,V_3$, <a id="p2c:eq:concentration"></a>


$$

 \|g\|_{3/2}\leq
       \prod_{i=1}^3(m+V_i)^{1/3}
       \leq m+\frac{V_1+V_2+V_3}{3}.

$$

Equation (4.7).

 Consequently a reference event of volume $\beta$ has actual mass at most the right side times $\beta^{1/3}$. 





**Proof.**

One-dimensional BV slicing gives $g(u)\leq A_i(u_{-i})$ almost everywhere, where $A_i$ is the integral plus variation of its $i$th slice. Thus $g^{3/2}\leq(A_1A_2A_3)^{1/2}$. Integrate first in $u_1$ and apply Cauchy to $A_2^{1/2}A_3^{1/2}$. Then apply Cauchy in $(u_2,u_3)$ to the remaining $A_1^{1/2}$ and the separated product. This gives $\int g^{3/2}\leq\prod_i(\int A_i)^{1/2}
=\prod_i(m+V_i)^{1/2}$. Taking the $2/3$ power and arithmetic-geometric mean proves [(4.7)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:concentration). Hölder with conjugate exponent three proves the event estimate. 

□





**Corollary 4.6 (Cap-free exact-event preparation).**

<a id="p2c:cor:capfree"></a> Suppose the original boxed density, conditional on genuine external information $X$ with its actual law, has an averaged $L^{3/2}$ bound at most $B$, writer variation $V_u$, and outside mass $\tau$. Then <a id="p2c:eq:capfree"></a>


$$

 \operatorname{TV}(T_h^n{}_\#\mu,\,
                      dr\,\widetilde\nu_n)
 \leq\tau+\frac{V_u}{4\,2^n}
                        +2nB\beta_h^{1/3}.

$$

Equation (4.8).

 In particular the finite sufficient values 

$$

 \tau\leq10^{-5},\quad V_u\leq2.6331\,10^{23},
 \quad B\leq1+2.6331\,10^{23},\quad
 n=100,\quad h=10^{-108}

$$

 give a complete retained-archive freshness bound below $1.1\,10^{-5}$. 





**Proof.**

Every complete ideal prefix preserves the $L^{3/2}$ norm. Its next exceptional set has the same volume $\beta_h$, so Hölder bounds its boxed mass by the conditional concentration coefficient times $\beta_h^{1/3}$. Average using the actual $X$ law and sum over $n$ first-failure events. The boxed map fee is at most $nB\beta_h^{1/3}$. The proof of Theorem [4.3](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:thm:law), including its own-marginal factor two and one original tail, then gives [(4.8)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:capfree). For the displayed row, $\beta_h^{1/3}<2\,10^{-36}$ and the map fee is below $5.2663\,10^{-11}$; the dyadic term and tail give the stated loose ceiling. 

□



The concentration and writer-BV numbers in this corollary are actual-law hypotheses, not supplied by the stationary wave. A physical-score-to-BV conversion with an actual joint cutoff can supply them, but every coordinate and conditioning variable of that conversion must be retained. If further drifting positions are added, the full-dimensional concentration exponent changes unless a stronger sectional estimate is proved. The illustrative row has degree $p=4\,10^{108}$. Its finite mathematical existence and the first-flow-jet bound do not make its higher control jets or physical spatial scales feasible.

---

# Section 5: Reading a retained archive into different receivers

<a id="section-5"></a>

## 5 Reading a retained archive into different receivers

 <a id="p2r:sec:records"></a>

The objective in this section is a joint path event. At a specified entrance an archive has an actual position. Its first $n$ binary digits are to be written into $n$ different receivers, and every written receiver must remain in its assigned separated region until a common final time. The construction retains the scratch, archive, receivers, reset modes and all earlier records. Its reset restores a quantum factor; it does not assume a new actual population.

We use dimensionless positions in units $\sigma$ and time $\tau=\omega t$, with $\sigma^2=\hbar/(2m\omega)$. Put 

$$

 \varphi(q)=(2\pi)^{-1/4}e^{-q^2/4},\qquad
 \gamma(q)=|\varphi(q)|^2,\qquad
 \Phi(q)=\int_{-\infty}^q\gamma(a)\,da,\qquad P=-2i\partial_q.

$$

 Thus $[q,P]=2i$, the oscillator is $H_{\rm o}=-\partial_q^2+q^2/4$, and its scalar canonical current is $j=2\operatorname{Im}(\Psi^\dagger\partial_q\Psi)$. During a compact baker control the additional current of Theorem [3.1](/quantum-measurement/research/repeated-position-records/the-scalar-hamiltonian-and-complete-current#p2c:thm:compiler) is retained; a real stationary wave does not then imply zero current.

The scratch $x$ and archive $y$ are two coordinates of one planar carrier. Each $z_j$ is the longitudinal coordinate of a different physical receiver, and each $r_j$ is a distinct retained reset mode. The reference entrance contains the factors <a id="p2r:eq:bank"></a>


$$

 \varphi(x)\varphi(y)
       \prod_{j=1}^n\varphi(z_j)\varphi(r_j)

$$

Equation (5.1).

 tensored with the specified remaining wave. All initially unused modes remain oscillator factors until used. Every genuine positional copy or reference belongs to the full configuration; a finite internal fibre is included in the wave norm. The actual entrance law satisfies <a id="p2r:eq:cap"></a>


$$

 d\mu_0\leq C|\Psi_0|^2\,dq

$$

Equation (5.2).

 on that complete state, or conditionally on a retained external parameter with the same uniform $C$. Equivariance propagates this global inequality. It is never asserted after conditioning on a selected recorded bit. Proposition [10.2](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:original) distinguishes this premise from an earlier preparation statement conditional on a bank. For the full-flow assertion, additional positional quantum factors must have propagated regularity sufficient for a $C^1$ normalized, conserved complete spacetime current and for the finite current integrals specified in the proof of Proposition [6.3](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:prop:copy). Propagation of all finite weighted Sobolev orders under their specified decoupled dynamics is one sufficient choice. A passive finite internal reference is unrestricted. The constructed Gaussian bank meets these conditions directly. A retained external conditioning parameter is fixed during the protocol; it is not assigned a wave amplitude merely by being retained.



**Proposition 5.1 (Actual digits, independent of the scratch population).**

 <a id="p2r:prop:digits"></a> Let $u=\Phi(x)$ and $v=\Phi(y)$. Off dyadic boundaries the inverse baker map is <a id="p2r:eq:digit"></a>


$$

 s=\lfloor2v\rfloor,\qquad v^+=2v-s,\qquad u^+=(u+s)/2.

$$

Equation (5.3).

 It is invertible and area preserving, and $\lfloor2u^+\rfloor=s$ for every $0<u<1$. Repeating it exposes the successive digits of the actual entrance archive, even if every subsequent scratch position is correlated with all previous records. For the smooth inverse of Proposition [2.3](/quantum-measurement/research/repeated-position-records/a-compact-stock-preserving-baker-module#p2c:prop:inverse), the endpoint is exactly [(5.3)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:digit) on <a id="p2r:eq:inversegood"></a>


$$

 u\in[2h,1-2h],\qquad
 v\in[h/2,(1-h)/2]\cup[(1+h)/2,1-h/2].

$$

Equation (5.4).

 Its reference exceptional area is <a id="p2r:eq:beta"></a>


$$

 \beta_h=1-(1-4h)(1-2h)=6h-8h^2 .

$$

Equation (5.5).

 

 

**Proof.**

On each half-strip the determinant is $(1/2)2=1$. Recover $s$ from $\lfloor2u^+\rfloor$, then $u=2u^+-s$, $v=(v^++s)/2$. The archive update contains no $u$. It follows by induction that the exposed bits are the binary digits of $v_0$ regardless of the scratch values. The set [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) is the image of the forward baker's two retained rectangles. Reversing its complete smooth flow proves the endpoint assertion; its area gives [(5.5)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:beta). 

□



For comparison with an earlier warmup event, suppose the forward archive recursion was $v_k=(v_{k-1}+a_k)/2$, with actual declarations $a_k\in\{0,1\}$. Then 

$$

 v_n=2^{-n}\left(v_0+\sum_{k=1}^n2^{k-1}a_k\right).

$$

 The inverse reader emits $a_n,a_{n-1},\ldots,a_1$. Accordingly receiver names must be reversed for a chronological decoder. An already priced event on which a smooth warmup differs from this history relation is added once; the reader itself does not manufacture a missing relation to an earlier writer event.



<a id="section-5-1"></a>

### 5.1 An exact sign-preserving scalar loader



For $d\geq0$ define 

$$

 \rho_d(x)=\tfrac12\{\gamma(x-d)+\gamma(x+d)\},\qquad
 R_d=\sqrt{\rho_d},\qquad
 F_d(x)=\tfrac12\{\Phi(x-d)+\Phi(x+d)\}.

$$

 The square root is taken after adding densities. The sum of the two Gaussian amplitudes is a different wave and will be used only as a controlled comparator below.



**Proposition 5.2 (Loader, domain and stationary final hold).**

 <a id="p2r:prop:loader"></a> Choose <a id="p2r:eq:loadercurve"></a>


$$

 d(\tau)=A\,s(\tau/T_L),\qquad
 s(a)=35a^4-84a^5+70a^6-20a^7,\quad 0\leq a\leq1,

$$

Equation (5.6).

 with static extensions. This center is $C^3$ across its joins; the resulting potential is $C^1$ in time and smooth in position. If $35A/(16T_L)<1/\sqrt2$, the scalar Hamiltonian $H_L=-\partial_x^2+V_L$ below has a common oscillator strong domain and an exact normalized solution <a id="p2r:eq:loaderwave"></a>
<a id="p2r:eq:loaderpotential"></a>


$$
\begin{aligned}\psi_L(x,\tau)&=R_{d(\tau)}(x)e^{iS(x,\tau)},&
 S&=\frac{d'}{2d}\log\cosh(dx),\\
 v_L&=d'\tanh(dx),&
 V_L&=\frac{R_d''}{R_d}-S_\tau-\frac{v_L^2}{4}.
 
\end{aligned}
$$

Equation (5.7, 5.8).

 The expressions at $d=0$ have their continuous limits. Every actual trajectory preserves $F_d(x)$ and its initial sign. At the endpoint the exact wave is the positive $R_A$, and its holding Hamiltonian is <a id="p2r:eq:hold"></a>


$$

 H_A=-\partial_x^2+U_A(x)=Q_A^\dagger Q_A,\qquad
 Q_A=\partial_x-R_A'/R_A,\qquad U_A=R_A''/R_A .

$$

Equation (5.9).

 Its complete scalar current vanishes pointwise. 

 

**Proof.**

Writing $L=\log R_d$ gives 

$$

 L=\text{constant}-(x^2+d^2)/4+\tfrac12\log\cosh(dx),\qquad
 U_d=-\tfrac12+\tfrac{d^2}{2}\operatorname{sech}^2(dx)
                  +\tfrac14(x-d\tanh(dx))^2 .

$$

 The mixture satisfies the exact conservation identity 

$$

 \partial_\tau\rho_d+
 \partial_x\!\left\{\tfrac{d'}2[\gamma(x-d)-\gamma(x+d)]\right\}=0.

$$

 Its positive-density current divided by $\rho_d$ is $v_L$. Since $2S_x=v_L$, substitution in the imaginary and real parts of $i\partial_\tau\psi_L=H_L\psi_L$ gives precisely [(5.8)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:loaderpotential). This verifies both equations, not only a prescribed real potential.

Here are sufficient global domain estimates. Set 

$$

 P_1=\frac{35A}{16T_L},\quad P_2=\frac{8A}{T_L^2},\quad
 P_3=\frac{53A}{T_L^3},\quad
 P_{13}=140^3(5/14)^5(9/14)^9 A^2/T_L^3 .

$$

 They bound $|d'|,|d''|,|d'''|,(d')^3/d$, respectively. Indeed $s'=140a^3(1-a)^3$, its maximum is $35/16$, the acceleration maximum is $84/(5\sqrt5)<8$, and the jerk maximum is $105/2<53$. The polynomial $s(a)/a^4$ decreases from $35$ to $1$; hence $(s')^3/s\leq140^3a^5(1-a)^9$, with maximum at $a=5/14$. The last ratio tends to zero at the initial join.

The inequalities 

$$

 U_d\geq x^2/8-d^2/4-1/2,\qquad
 |S_\tau|\leq P_2|x|/2+P_1^2x^2/4

$$

 give, with $a_0=1/8-P_1^2/4>0$, 

$$

 V_L\geq (a_0/2)x^2-
 \left(A^2/4+1/2+P_1^2/4+P_2^2/(8a_0)\right).

$$

 Conversely 

$$

 |V_L|\leq(1/4+P_1^2/4)x^2+
               (A/2+P_2/2)|x|+1/2+3A^2/4+P_1^2/4.

$$

 The elementary bound $|a\operatorname{sech}^2(a)\tanh(a)|\leq1/2$ gives 

$$

 |V_{L,xx}|\leq(AP_2+2P_1^2)/2+P_1^2A^2
                                      +1/2+3A^2/2+A^4.

$$

 Finally, twice differentiating the integral expression $S=\frac12\int_0^x d'\tanh(dy)\,dy$ shows 

$$

 |S_{\tau\tau}|\leq P_3|x|/2+
                             (3P_1P_2+P_{13})x^2/4.

$$

 Differentiating the remaining terms gives a uniform $|V_{L,\tau}|\leq C(1+x^2)$, continuously through both joins.

Choose a common shift so that $W=V_L+c\geq a x^2+1$. For a compact smooth test, 

$$

 \|(-\partial_x^2+W)f\|^2
 =\|f''\|^2+\|Wf\|^2+
          2\int W|f'|^2-\int W''|f|^2 .

$$

 Together with the preceding upper bound this makes the Hamiltonian graph equivalent to $\|f''\|+\|x^2f\|+\|f\|$. The real resolvent cutoff identity for an $L^2$ distributional solution of $(H_L+\lambda)f=0$ is 

$$

 \int |(\chi_Rf)'|^2+(V_L+\lambda)|\chi_Rf|^2
       =\int|\chi_R'|^2|f|^2\longrightarrow0.

$$

 Local elliptic regularity justifies the test. Positivity excludes a nonzero such solution; the semibounded closure is self-adjoint. Cutoff and mollifier approximation and the graph equivalence give the common domain $H^2(\mathbb R)\cap\{x^2f\in L^2\}$. The time estimate makes $H_L(\tau)$ continuously differentiable on this domain, supplying common-domain unitary evolution by the common-domain theorem in [[5](/quantum-measurement/research/repeated-position-records/bibliography#bib-SchmidGriesemer2014)]. The explicit wave already constructed is its unique solution.

The velocity is globally bounded by $|d'|$, with derivative bounded by $|dd'|$, so its ordinary trajectories are complete and unique. Continuity and the conservation equation give $dF_d(x(\tau))/d\tau=0$. Symmetry fixes $x=0$. At the endpoint $d'=d''=0$, $S=0$, and direct multiplication gives the factorization [(5.9)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:hold). Thus $R_A$ is its normalized zero-energy state and has identically zero canonical velocity. 

□



For an inverse bit $s$, the endpoint obeys $F_A(x_L)=(u+s)/2$. In particular its sign is the actual extracted bit. With $\xi_A=\Phi(-A/2)-\Phi(-3A/2)$, symmetry gives $2F_A(-A/2)=1-\xi_A$ and $2F_A(A/2)=1+\xi_A$. If $\xi_A\leq2h$, every good scratch in [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) is also loaded beyond $|x_L|=A/2$. The receiver theorem below needs only the sign, and prices its own separated endpoint without assigning the scratch a Born population.

---

# Section 6: A smooth scalar gate which copies the entry sign

<a id="section-6"></a>

## 6 A smooth scalar gate which copies the entry sign

 <a id="p2r:sec:copy"></a>

Let $q=(x,z)$ and fix $A\geq20$, $0<\varepsilon\leq10^{-3}$. Use a smooth monotone step with all endpoint derivatives zero. On the first interval $[0,\varepsilon]$ interpolate from 

$$

 H_b=H_A(x)+H_{\rm o}(z)

$$

 to 

$$

 H_q=-\Delta_q+\tfrac14q^\mathsf TK_q q,\qquad
 K_q=\begin{pmatrix}13/8&-5/8\\-5/8&13/8\end{pmatrix}.

$$

 Keep $H_q$ until $2\pi-\varepsilon$, then interpolate to $H_a=H_{\rm o}(x)+H_A(z)$ on the final interval. The ramp intervals are contained in the duration $2\pi$. They are not appended to the commensurate time.

The two normal frequencies of $H_q$ are $1$ and $3/2$. Consequently its unmodified duration-$2\pi$ wave operator is $-i\,\mathrm{SWAP}_{xz}$. The smooth gate just defined is a different propagator; no exact factor scratch reset will be inferred from that observation. Its true entrance is $R_A(x)\varphi(z)$ and its record must match the actual entry sign of $x$. This is a path statement requiring a complete-current estimate.



<a id="section-6-1"></a>

### 6.1 The coherent Gaussian comparison



For $s=\pm1$, replace the initial and final nonlinear holding wells by 

$$

 H_{b,s}=-\Delta+\{(x-sA)^2+z^2\}/4-1/2,\qquad
 H_{a,s}=-\Delta+\{x^2+(z-sA)^2\}/4-1/2,

$$

 using the same ramps and middle $H_q$. Let $\psi_s$ be the exact Gaussian evolution of $\varphi(x-sA)\varphi(z)$, and set <a id="p2r:eq:comparison"></a>


$$

 \chi=\frac{\psi_++\psi_-}{\sqrt{2(1+e^{-A^2/2})}} .

$$

Equation (6.1).

 Both common and relative phases are retained in these exact quadratic evolutions. The comparison is not a population mixture. It need not stay normalized, but $\|\chi\|\leq\sqrt2$.



**Lemma 6.1 (Finite-ramp Gaussian tube).**

<a id="p2r:lem:tube"></a> The position centers are $\pm M(\tau)$ and the common position covariance and centered velocity matrix are $\Sigma,B$. On the gate, <a id="p2r:eq:tube"></a>


$$

 |M|>.29A,\quad |M'|<1.35A,\quad |(M/|M|)'|<5,\quad
 .4I\leq\Sigma\leq1.1I,\quad \|B\|<1.

$$

Equation (6.2).

 On each ramp in its corresponding well coordinate, at the final endpoint, and under the subsequent matched harmonic comparison hold, <a id="p2r:eq:endtube"></a>


$$

 .9I\leq\Sigma\leq1.1I,\quad\|B\|\leq.2,\quad
 |m_x|\leq A/20,\quad |m_z-sA|\leq A/20,\quad |p|\leq A/20,

$$

Equation (6.3).

 with $x,z$ exchanged at the entrance. Every ordered word of degree at most two in $x,z,P_x,P_z$, applied to $\chi$, has norm at most $G=100(A+2)^2$. 

 

**Proof.**

For the unswitched sensor the center is 

$$

 M_q=\frac A2
   \big(\cos\tau+\cos(3\tau/2),\,
        \cos\tau-\cos(3\tau/2)\big).

$$

 Writing $v=\cos^2(\tau/2)$ gives $2|M_q/A|^2=16v^3-20v^2+5v+1$. Its minimum is $83/108-5\sqrt{10}/27>9/50$, so $|M_q|>.3A$ and $|M_q'|\leq\sqrt{13/8}A<4A/3$. The sensor fundamental matrix in $(q,P)$ has norm at most $3/2$. The difference generator is at most $5/4$ and is supported for total length $2\varepsilon$. Volterra's equation therefore gives 

$$

 \|F-F_q\|\leq\tfrac32(e^{15\varepsilon/4}-1),\qquad
 \|F\|\leq\tfrac32e^{15\varepsilon/4}.

$$

 The opposite affine forces contribute at most $3\varepsilon e^{15\varepsilon/4}A$ to the phase-space center difference. Their sum with the preceding homogeneous error is less than $.009A$, by $e^a\leq(1-a)^{-1}$. This proves the center bounds and $1.35/.29<5$ proves the normal bound.

The exact sensor position covariance has eigenvalues $1$ and $\cos^2(3\tau/2)+(4/9)\sin^2(3\tau/2)$. Its centered velocity norm is at most $5/8$. The fundamental-matrix bounds imply $\|FF^\mathsf T-F_qF_q^\mathsf T\|<.02$. Block inversion in $B=\Gamma_{Pq}\Sigma^{-1}$ gives 

$$

 \|B\|<
 \tfrac58+\tfrac1{50}
       \left(\tfrac52+\tfrac58\tfrac94\tfrac52\right)<1.

$$

 On the ramps $F_q$ is within $(27/8)\varepsilon$ of the identity or endpoint swap, whence $\|F-I_{\rm endpoint}\|<.01$ and the Wigner covariance error is less than $.021$. Together with the center error these imply [(6.3)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:endtube); orthogonal harmonic phase-space evolution preserves these bounds during the matched hold. Lastly the means are bounded by $1.6A$ and phase-space variances by $3$. Gaussian fourth moments, plus the commutator correction $[q_i,P_j]=2i\delta_{ij}$, bound degree-two ordered words; coherent summation costs at most $\sqrt2$. The stated $100(A+2)^2$ bounds each of these terms. 

□





<a id="section-6-2"></a>

### 6.2 Localized forcing and the shifted energy graph



Put $c=4A^2+4$, $K(\tau)=H(\tau)+c$, and <a id="p2r:eq:constants"></a>


$$

 \lambda=\tfrac{15}4A^2+\tfrac72,\qquad
 B_A=2\cdot10^6(A+1)^{10}e^{-A^2/10},\qquad
 h_0=10^5(A+2)^6e^{-A^2/4}.

$$

Equation (6.4).

 Here $\lambda$ is a lower bound on the positive shifted potential, not a spectral cutoff.



**Lemma 6.2 (Localized graph error).**

<a id="p2r:lem:graph"></a> For the true wave $\psi$ and comparison [(6.1)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:comparison), $E=\psi-\chi$ obeys <a id="p2r:eq:hgate"></a>
<a id="p2r:eq:hhold"></a>


$$
\begin{aligned}\sup_{\rm gate}\|K(\tau)E(\tau)\|
 &\leq h_g:=e^8(h_0+2\varepsilon B_A),\\
 \|K_{\rm hold}E(t)\|&\leq h_g+tB_A .
 
\end{aligned}
$$

Equation (6.5, 6.6).

 Every ordered position/momentum word of degree at most two on these errors is bounded by $15h_g$ on the gate and $15(h_g+tB_A)$ on the two-coordinate hold. 

 

**Proof.**

The nonlinear well differs from its $s$-centered harmonic comparison by 

$$
\begin{aligned}D_s(r)&=\tfrac{A^2}4\operatorname{sech}^2(Ar)
                       +\tfrac{Ar}2(s-\tanh Ar),\\
 D_s'&=-\tfrac{A^3}2ST+\tfrac A2(s-T)-\tfrac{A^2r}2S,\\
 D_s''&=A^4ST^2-\tfrac{A^4}2S^2-A^2S+A^3rST,
 \qquad S=\operatorname{sech}^2(Ar),\quad T=\tanh(Ar).
\end{aligned}
$$

 Each absolute value is bounded globally by $100(A+1)^4(1+|r|)$. On the own collar $sr\geq A/4$ the same bound gains $e^{-A^2/2}$, using $S\leq4e^{-2A|r|}$ and $1-sT\leq2e^{-2A|r|}$.

For a ramp or hold branch write $\xi=q-m$. The strict tube gives 

$$

 |\partial_i\psi_s|\leq(|\xi|+A/10)|\psi_s|,\qquad
 |\partial_i\partial_j\psi_s|
 \leq\{(|\xi|+A/10)^2+1\}|\psi_s|,

$$

 and the shifted potential is at most $20(A+1)^2(1+|\xi|)^2$. Since $1+|r|\leq2(A+1)(1+|\xi|)$, the identity $K(D_s\psi_s)=D_sK\psi_s-2D_s'\partial_r\psi_s-D_s''\psi_s$ gives the explicit envelope <a id="p2r:eq:forcingpoint"></a>


$$

 |K(D_s\psi_s)|
 \leq5400(A+1)^7(1+|\xi|)^3 w(r)|\psi_s|.

$$

Equation (6.7).

 Indeed the three terms have coefficients at most $4800,400,200$, respectively. Here $w=e^{-A^2/2}$ on the own collar and $1$ outside.

We include the Gaussian integration which supplies the exponential in [(6.4)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:constants). The density is dominated by $11/9$ times the isotropic two-dimensional normal density of variance $11/10$. Outside the collar, the normal centered coordinate is below $-.7A$. Set $a=.7A/\sqrt{11/10}>1$. Repeated integration by parts gives 

$$

 \int_a^\infty u^6\gamma(u)\,du
 =(a^5+5a^3+15a)\gamma(a)+15\Phi(-a).

$$

 Using $\Phi(-a)\leq\gamma(a)/a$ and $(1+|\xi|)^6\leq3^5(1+|\xi_1|^6+|\xi_2|^6)$, its outside weighted square-root moment is at most 

$$

 92(A+1)^3e^{-A^2/10}.

$$

 For explicit constants, the squared polynomial prefactor is bounded by $(11/9)\,243\,70\,(2/5)<8400<92^2$, while $a^2/4=49A^2/440>A^2/10$. On the whole Gaussian, $\mathbb E(1+|\xi|)^6\leq32[1+48(11/10)^3]<2100<46^2$. The inside contribution is therefore at most $46e^{-A^2/2}$. Since $5400(46+92)<10^6$, [(6.7)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:forcingpoint) gives $\|K(D_s\psi_s)\|\leq10^6(A+1)^{10}e^{-A^2/10}$. Coherent summation yields $B_A$. This forcing is present only on the two ramps during the gate, and throughout the nonlinear hold.

Next write $W=V+c$. Direct use of the expression for $U_A$ gives 

$$

 W\geq |q|^2/8+\lambda,\qquad
 \|\Delta W\|_\infty\leq M:=A^4+\tfrac32A^2+2.

$$

 For compact smooth vectors, <a id="p2r:eq:graphidentity"></a>


$$

 \|Kf\|^2=\|\Delta f\|^2+\|Wf\|^2+
              2\int W|\nabla f|^2-\int\Delta W\,|f|^2.

$$

Equation (6.8).

 Positivity gives $\|f\|\leq\|Kf\|/\lambda$, and hence $\|Wf\|,\|\Delta f\|\leq\sqrt{1+M/\lambda^2}\|Kf\|$. For $A\geq20$, $\sqrt M/\lambda\leq2/7$. The switching multiplier satisfies 

$$

 |D_{\rm sw}|\leq3|q|^2/8+7A^2/4+1/2\leq3W,

$$

 so $\|D_{\rm sw}f\|\leq4\|Kf\|$. The equation for $KE$ consequently costs at most $4|\eta'|\|KE\|+\|K\mathcal R\|$, where $\eta$ is the ramp weight and $\mathcal R$ is the complete coherent forcing. The total variation of the two ramps is $2$. Gronwall gives [(6.5)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:hgate); the static hold has no time-graph cost and gives [(6.6)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:hhold).

For completeness, the entrance graph bound is a wave estimate. On $r\geq0$, put $a=\varphi(r-A)$, $b=\varphi(r+A)$, $t=b/a=e^{-Ar}$ and $h(t)=1+t-\sqrt{1+t^2}$. Then $0\leq h\leq t$, $|h'|,|h''|\leq1$. The differences between $(a+b)/\sqrt2$ and $R_A$ and their first two derivatives are bounded respectively by $b/\sqrt2$ times 

$$

 1,\qquad r/2+3A/2,\qquad
 r^2/4+3Ar/2+13A^2/4+1/2 .

$$

 Reflect on the negative half-line. For $k\geq0$, 

$$

 \int |r|^k\min\{\gamma(r-A),\gamma(r+A)\}\,dr
 \leq k!e^{-A^2/2},

$$

 because $e^{-Ar}\leq e^{-r}$ for $A\geq1$ and $2/\sqrt{2\pi}<1$. The normalization correction is bounded by $1-(1+e^{-A^2/2})^{-1/2}\leq e^{-A^2/2}/2$. Gaussian moments and reordering $P r=rP-2i$ now bound every degree-two entrance error word by $400(A+1)^2e^{-A^2/4}$. The elementary quadratic bound on $U_A$ and the shift $c$ then give the larger, convenient $\|K(0)E(0)\|\leq h_0$.

Finally [(6.8)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:graphidentity) bounds each degree-two word: position squares use $\||q|^2f\|\leq8\|Wf\|$; momentum products use Fourier $\|\partial_i\partial_jf\|\leq\|\Delta f\|$; mixed words use its positive weighted-gradient term. Reordering adds at most $2\|f\|$, and lower words follow by interpolation. All are below $15\|Kf\|$ with the displayed $M/\lambda^2$ bound. These are derivative and moment estimates, not consequences of wave norm alone. 

□





<a id="section-6-3"></a>

### 6.3 From the complete current to the receiver's own record



Set $K_g=15h_g$ and define <a id="p2r:eq:gatefees"></a>
<a id="p2r:eq:endfees"></a>
<a id="p2r:eq:copyfee"></a>


$$
\begin{aligned}F_{\rm cg}&=256(A+1)e^{-A^2/27},&
 F_{\rm eg}&=1000(K_gG+K_g^2),\\
 B_{\rm end}&=\frac2A
          \big(e^{-2A^2/25}+e^{-2A^2/5}\big),&
 E_{\rm end}&=\frac{3h_g}{\lambda}
                       +(h_g/\lambda)^2,\\
 F_{\rm copy}&=F_{\rm cg}+F_{\rm eg}+B_{\rm end}+E_{\rm end}.
 
\end{aligned}
$$

Equation (6.9, 6.10, 6.11).





**Proposition 6.3 (A different receiver records the entry sign).**

 <a id="p2r:prop:copy"></a> Under the gate above, the actual probability that $z$ fails to finish in the region assigned to the entry sign of $x$ is at most $C F_{\rm copy}$. The two regions are $z\leq-A/2$ and $z\geq A/2$. The statement holds for arbitrary correlations in the original actual law subject to [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap). 

 

**Proof.**

Use the plane $n(\tau)\cdot q=0$, where $n=M/|M|$. It starts at $x=0$. A path changing its side must cross that spacetime surface. The relative current is $j\cdot n+\rho\,n'\cdot q$ on the plane. Expand the current of the full coherent sum before taking its absolute value. The diagonal branch terms are bounded by $|\psi_s|^2(3A+6|q|)$; the two interference terms and moving-plane cross-density term together are bounded by $|\psi_+\psi_-|(12A+18|q|)$. These follow from the Gaussian amplitude gradients $-\Sigma^{-1}(q-sM)/2$, phase velocities $sM'+B(q-sM)$, and [(6.2)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:tube).

Each branch's plane density is at most $(2/3)e^{-A^2/27}$, since $.29^2/(2\cdot1.1)>1/27$ and $(2\pi\cdot.4)^{-1/2}<2/3$. The conditional tangential mean has magnitude below $A$ and variance at most $1.1$, so its conditional $\mathbb E|q|$ is at most $A+2$. Use $|\psi_+\psi_-|\leq(|\psi_+|^2+|\psi_-|^2)/2$ and the denominator in [(6.1)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:comparison). The full plane flux is at most $30(A+1)e^{-A^2/27}$ per unit time. Integration over $2\pi<7$ is bounded by $F_{\rm cg}$. No Gaussian branch has been sampled as the actual state.

The trace inequality for Hilbert-valued functions, 

$$

 \|f|_{n\cdot q=0}\|^2
       \leq2\|f\|\,\|\partial_nf\|,

$$

 applied also to $\partial_nf$ and the tangential position times $f$, gives trace bounds $2K_g,3K_g,3K_g$ for the error and $2G,3G,3G$ for the comparison. Expanding the current difference gives at most $24K_gG+12K_g^2$ per unit time. Expanding the moving-surface density difference gives at most $60K_gG+30K_g^2$, since $|n'|<5$. Integrating both over $2\pi<7$ gives $F_{\rm eg}$. These bounds explicitly retain the cross terms and the quadratic error current.

At the endpoint the plane need not be exactly $z=0$. The strict tube gives $|m_x/m_z|\leq1/19$. On $|z|\geq A/2$, $|x|\leq A$, the signs of $n\cdot q$ and $z$ agree. The complement under the coherent comparison is bounded by $B_{\rm end}$. Indeed the receiver mean is at least $.45A$ from its nearer middle boundary and the scratch mean at least $.95A$ from its outer boundary. The variance is at most $1.1$; one-dimensional Mills bounds and $|\chi|^2\leq|\psi_+|^2+|\psi_-|^2$ give the two displayed $2/A$ terms with exponents $2A^2/25$ and $2A^2/5$. The true density adds at most $2\|\chi\|\|E\|+\|E\|^2\leq E_{\rm end}$.

For the reference flow, spacetime coarea bounds the expected crossing count by the integrated absolute relative current. The prescribed scalar potentials are smooth in position, have at most quadratic growth, and have polynomially bounded spatial derivatives. Common oscillator domains and weighted differentiation propagate every finite Schwartz order of this entrance over the finite schedule. In the full configuration, normalization and Cauchy–Schwarz give 

$$

 \|\partial_\tau\rho\|_1\leq2\|\partial_\tau\Psi\|_2,\qquad
 \int|j|\leq2\|\nabla\Psi\|_2,\qquad
 \int\frac{|j|\,|\nabla\rho|}{\rho}
                       \leq4\|\nabla\Psi\|_2^2 .

$$

 For a baker stage with complete bounded drift $V$, the last two bounds acquire respectively $\|V\|_\infty$ and $2\|V\|_\infty\|\nabla\Psi\|_2$; its action also stays finite. The value on nodes is defined by the zero-current convention. Finite weighted graph propagation makes these quantities integrable on the finite schedule. The complete spacetime current $(\rho,j)$ is $C^1$, is conserved, and has unit mass at every time. In particular 

$$

 \int_0^{T_f}\!\int_{\rho>0}
 \left|\partial_\tau\rho+\frac{j}{\rho}\cdot\nabla\rho\right|
 \,dq\,d\tau<\infty,
 \qquad
 \int_0^{T_f}\!\int|j|\,dq\,d\tau<\infty.

$$

 The first follows by summing the displayed time-density and logarithmic current bounds; the second controls escape to infinity. There is no physical boundary or singular excluded set in this effective configuration space. These are the hypotheses of the general current criterion in [[6](/quantum-measurement/research/repeated-position-records/bibliography#bib-TTflow), Theorem 1], which supplies almost-everywhere global flow and equivariance on the finite schedule. Thus coarea applies, including possible nodes through their reference-null path exclusion. The original cap [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap) transfers the union of the crossing and endpoint events to the actual law, with the single factor $C$. Selecting a sign and then reapplying a conditional cap is unnecessary. 

□

---

# Section 7: Exact reset with its correlations retained

<a id="section-7"></a>

## 7 Exact reset with its correlations retained

 <a id="p2r:sec:reset"></a>

The smooth copy gate does not return an exact factor scratch. The next inverse baker nevertheless needs that quantum factor. A new reset mode, already present in [(5.1)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:bank), closes this compatibility requirement. Its actual population need not be fresh or conditionally independent.



**Proposition 7.1 (A positive arbitrary-input wave reset with $C^5$ joins).**

 <a id="p2r:prop:reset"></a> For $0\leq\tau\leq2\pi$ put <a id="p2r:eq:resetprofile"></a>


$$

 b(\tau)=1-\alpha\sin^8(\tau/2),\qquad
 \nu^2=b^{-4}-b''/b ,

$$

Equation (7.1).

 where $\alpha\in(0,1/2)$ is the unique solution <a id="p2r:eq:root"></a>


$$

 \frac1{2\pi}\int_0^{2\pi}
              [1-\alpha\sin^8(\tau/2)]^{-2}\,d\tau=\frac32 .

$$

Equation (7.2).

 The scalar two-coordinate Hamiltonian <a id="p2r:eq:resetH"></a>


$$

 H_R=-\partial_x^2-\partial_r^2+
                    (x^2+r^2)/4+\frac{\nu^2-1}{8}(x-r)^2

$$

Equation (7.3).

 has a nonnegative coupling, zero endpoint coupling, and a $C^5$ joining profile. Its coefficient satisfies $1\leq\nu^2\leq18$. Its complete propagator is <a id="p2r:eq:resetoperator"></a>


$$

 U_R(2\pi)=-i\,\mathrm{SWAP}_{xr}.

$$

Equation (7.4).

 In particular, for every normalized, possibly entangled Hilbert-valued scratch wave, 

$$

 \Psi(x,\mathrm{rest})\varphi(r)
       \longmapsto -i\varphi(x)\Psi(r,\mathrm{rest}).

$$

 Every old scratch correlation is retained in $r$. 

 

**Proof.**

Expanding the positive integrand in [(7.2)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:root) gives <a id="p2r:eq:rootseries"></a>


$$

 R(\alpha)=\sum_{k=0}^\infty
 (k+1)\alpha^k\frac{\binom{8k}{4k}}{2^{8k}}.

$$

Equation (7.5).

 It is continuous and strictly increasing on $[0,1/2]$. At zero it is $1$. At $1/2$ its first four terms alone exceed $3/2$ by $11015/8388608$. This proves existence and uniqueness. Since every sine moment is at most one, the remainder after $k=N$ is bounded by <a id="p2r:eq:roottail"></a>


$$

 \frac{\alpha^{N+1}[(N+2)-(N+1)\alpha]}{(1-\alpha)^2}.

$$

Equation (7.6).

 Positive rational sums and bisection therefore locate the exact coefficient to any required finite accuracy. The theorem uses the exact root; measured calibration errors are a separate comparison.

For positivity write $u=\sin^2(\tau/2)$, so $(\sin^8(\tau/2))''=2u^3(7-8u)$. If $b''\leq0$, then $\nu^2\geq1$ immediately. Otherwise $u>7/8$, $b''\leq2\alpha$, and 

$$

 b^{-3}-b=\frac{1-b^4}{b^3}
 \geq4(1-b)=4\alpha u^4
 >\frac{2401}{1024}\alpha>2\alpha\geq b''.

$$

 This again gives $\nu^2\geq1$. Also $b\geq1/2$ and $|b''|\leq1$, so $\nu^2\leq16+2=18$. The function $1-b$ vanishes to order eight at both endpoints, so $\nu^2-1$ vanishes to order six. Static zero extensions give the asserted $C^5$ interaction.

In normal coordinates $q_\pm=(x\pm r)/\sqrt2$, the plus mode has frequency $1$, while the minus mode has frequency $\nu$. The exact Ermakov relation is $b''+\nu^2b=b^{-3}$. Let $\theta'=b^{-2}$ and $\theta(0)=0$. For an oscillator eigenfunction $f_k$, the minus-mode solution is 

$$

 b^{-1/2}\exp\!\left(i\frac{b'}{4b}q_-^2\right)
 f_k(q_-/b)\exp[-i(k+1/2)\theta].

$$

 Direct substitution verifies this formula. At the endpoint $b=1$, $b'=0$ and $\theta=3\pi$, so the minus operator is $i$ times parity. The plus-mode duration $2\pi$ operator is $-I$. Relative parity exchanges $x$ and $r$, proving [(7.4)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:resetoperator) on the oscillator basis and hence on all $L^2$ by unitarity. Tensoring with any passive Hilbert space proves the entangled-input assertion. 

□



This operator assertion is the exact quantum stock requirement. It is not an exchange of actual configurations. Proposition [10.1](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:swap) supplies an explicit capped, finite-Fisher population for which the same wave reset has the identity actual endpoint map and preserves conditional bias. The inverse digit arithmetic in Proposition [5.1](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:prop:digits) is deliberately independent of such a freshness claim.

---

# Section 8: Earlier receivers during every later operation

<a id="section-8"></a>

## 8 Earlier receivers during every later operation

 <a id="p2r:sec:hold"></a>

Once receiver $z$ has been written, the prescribed parent has <a id="p2r:eq:spectator"></a>


$$

 H(\tau)=H_A(z)\otimes I+I\otimes H_{\rm rest}(\tau).

$$

Equation (8.1).

 The rest includes all later scratch/archive operations, all unused receivers, used and unused reset modes, earlier records, and retained reference systems. No bath is sampled or removed. The actual pointwise receiver velocity can depend on that rest. The following bound controls it through the full wave.

Define <a id="p2r:eq:holdcmp"></a>
<a id="p2r:eq:holderror"></a>


$$
\begin{aligned}F_{\rm ch}(\Theta)
 &=100\Theta(A+1)^2e^{-A^2/12},\\
 F_{\rm eh}(\Theta)
 &=720G\left(h_g\Theta+\tfrac12B_A\Theta^2\right)
 \\
 &\quad+5400\left(h_g^2\Theta+h_gB_A\Theta^2+
                              \tfrac13B_A^2\Theta^3\right).
 
\end{aligned}
$$

Equation (8.2, 8.3).





**Proposition 8.1 (Held-region current with arbitrary spectators).**

 <a id="p2r:prop:hold"></a> Under [(8.1)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:spectator), the actual probability that a written receiver crosses either physical boundary $z=\pm A/2$ during an interval of length at most $\Theta$ is at most $C[F_{\rm ch}(\Theta)+F_{\rm eh}(\Theta)]$. The constants do not acquire a factor depending on the number of spectator coordinates. 

 

**Proof.**

View the full wave as a function of $z$ with values in the rest Hilbert space. Every $z$-independent unitary preserves both $\|F(z)\|$ and $\|\partial_zF(z)\|$. In particular <a id="p2r:eq:slicecurrent"></a>


$$

 \int_{\rm rest}|j_z(z,q_{\rm rest})|\,dq_{\rm rest}
       \leq2\|F(z)\|\|\partial_zF(z)\|

$$

Equation (8.4).

 has a spectator-invariant upper bound. This uses full Hilbert slice norms, not a putative pure phase for a reduced mixed state.

Propagate each final comparison branch with its own centered harmonic well in $z$ and exactly the same $U_{\rm rest}$ as the true evolution. Its slice norms may equivalently be evaluated with the original harmonic spectator evolution of the two-coordinate Gaussian. The strict tube [(6.3)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:endtube) is then available for the entire hold. At each boundary the branch slice density is at most $\frac12e^{-A^2/12}$, because its nearer center is at least $.45A$ away and its variance is at most $1.1$. Conditioning the joint Gaussian on $z$ bounds its derivative slice norm by $10(A+1)$ times its amplitude slice norm: the normal displacement is at most $31A/20$, the normal variance is at least $.9$, and the conditional tangential derivative second moment is bounded using $\|\Sigma^{-1}\|\leq10/9$, $\|B\|\leq.2$, and $|p|\leq A/20$. The elementary conditional normal formula gives a constant smaller than $3(A+1)$; the displayed $10$ is an outward reserve. Coherent summation in [(8.4)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:slicecurrent) therefore bounds the two boundary currents by $40(A+1)e^{-A^2/12}$ per unit time, which is below the coefficient in [(8.2)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holdcmp).

For the true-minus-comparison error use the partial positive graph $K_z=H_A(z)+c$. It commutes with every rest unitary. At the gate endpoint its norm is bounded by $h_g$, because $K_z$ is dominated in norm by the commuting positive full graph $H_A(z)+H_{\rm o}(x)+c$. The forcing is $D_s(z)$ times each comparison branch. Its $K_z$ norm also commutes through $U_{\rm rest}$ and is no larger than the full positive Gaussian graph norm already bounded by $B_A$. Duhamel in this static partial graph gives 

$$

 \|K_zE(t)\|\leq h_g+tB_A.

$$

 The one-coordinate form of [(6.8)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:graphidentity) gives receiver words through degree two bounded by $15(h_g+tB_A)$; the comparison receiver words are bounded by $G$. No spectator derivative is taken.

At one fixed plane the Hilbert-valued trace and current expansion used above give $24KG+12K^2$ for $K=15(h_g+tB_A)$. Two planes give $48KG+24K^2$. Integrating this polynomial in $t$ yields exactly [(8.3)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holderror). Coarea, equivariance and the original complete cap finish the bound. No cap conditional on the receiver's selected sign is used. 

□

---

# Section 9: One complete protocol and its joint error budget

<a id="section-9"></a>

## 9 One complete protocol and its joint error budget

 <a id="p2r:sec:composition"></a>

Fix a deterministic sequence of operations. In cycle $j$: 

1. Apply the duration-one smooth inverse baker to $(x,y)$.

2. Apply the scalar loader to $x$, of duration $T_L$.

3. Apply the smooth copy gate to $(x,z_j)$, of duration $2\pi$.

4. Apply the exact reset to $(x,r_j)$, of duration $2\pi$.

 Each written receiver is held by $H_A$ from its copy endpoint through the common final time. Every used reset archive remains in the rest space. Add spatially constant time gauges where needed to match oscillator zero-energy conventions between modules; these change only a common wave phase and no current or record. All nonconstant couplings have the time regularity stated for their respective modules. In particular the reset's endpoint spring is zero.



**Theorem 9.1 (Complete repeated own-record event).**

 <a id="p2r:thm:records"></a> Assume the full entrance bank [(5.1)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:bank), original cap [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap), the baker compiler, loader, smooth scalar gate and reset just specified. Require [(8.1)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:spectator) for every written receiver during all later operations, and a common final time no more than $\Theta$ after any copy endpoint. Let $s_j$ be the $j$th binary digit of the actual entrance archive quantile. Then <a id="p2r:eq:recordbound"></a>


$$
\begin{aligned}&\mu_0\{\text{some receiver }z_j\text{ is not in its }s_j
       \text{ region at copying, or leaves it before the final time}\}
 \\
 &\qquad\leq nC\{\beta_h+F_{\rm copy}
                         +F_{\rm ch}(\Theta)+F_{\rm eh}(\Theta)\}.
 
\end{aligned}
$$

Equation (9.1).

 The event contains all $n$ records and their complete held histories. No actual scratch freshness, independent receiver population, actual configuration swap, or discarded reset archive is assumed. 

 

**Proof.**

We first verify compatibility of the quantum stocks by induction, without an assertion about actual populations. Initially the scratch and archive are the product Gaussian. The compact compiler keeps that known wave stationary while implementing its nonzero complete current. The loader changes only the scratch factor to $R_A$. The copy gate acts on that factor and the unused receiver Gaussian. It may entangle them. The reset then applies [(7.4)](/quantum-measurement/research/repeated-position-records/exact-reset-with-its-correlations-retained#p2r:eq:resetoperator) with the still unused reset Gaussian, putting every scratch correlation into $r_j$ and restoring the exact factor $\varphi(x)$. The archive $y$ remains its stationary Gaussian factor during loader, copy and reset. All unused banks remain their original quantum factors. Thus the next inverse baker has exactly the required active wave.

Equivariance transports [(5.2)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:cap) relative to the true full wave at every entrance. Since the active inverse-baker reference is exactly product Gaussian, its exceptional set [(5.4)](/quantum-measurement/research/repeated-position-records/reading-a-retained-archive-into-different-receivers#p2r:eq:inversegood) has unconditional actual probability at most $C\beta_h$. This assertion is made on the original unselected law. It does not condition on earlier good events. Up to the first such exception, deterministic digit arithmetic identifies every exposed scratch sign with the next initial archive digit, independently of each reset's actual scratch position. The loader preserves that sign.

For each copy, Proposition [6.3](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:prop:copy) compares the receiver with its own true entry scratch sign. For each subsequent hold, Proposition [8.1](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:prop:hold) bounds every later boundary crossing, including crossings during later baker, loader, gate and reset modules. A union of these unconditional events proves [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound). Earlier receivers, reset archives and the entire rest wave were retained in each application, so there is no deletion or postselection hidden in this union. 

□



If a previous warmup supplied the archive/history relation with failure $\varepsilon_{\rm hist}$, reverse the register names as above and add $\varepsilon_{\rm hist}$ to [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound). The prominent row below begins with the actual entrance archive digits; it does not already include this separate earlier-history error.

Likewise, if a distinct untouched writer $w$ previously obeyed 

$$

 \operatorname{TV}\!\left(\mu_{w,N},\Gamma_w\otimes\mu_N\right)
       \leq\delta

$$

 with the *whole original bank* in $N$, the same $\delta$ survives this nuisance-only protocol by data processing. For a deterministic map $T$ on $N$, the comparison pushes forward to $\Gamma_w\otimes T_\#\mu_N$, its actual new nuisance marginal. This argument remains valid on failed decoder paths. It requires the physical full-current dynamics really to leave the writer untouched. It does not add an omitted positional reference after the premise was proved.



**Corollary 9.2 (The forty-four-record finite row).**

 <a id="p2r:cor:n44"></a> For <a id="p2r:eq:row"></a>


$$

 n=44,\quad C=10,\quad h=10^{-10},\quad A=40,\quad
 \varepsilon=10^{-3},\quad T_L=200,\quad\Theta=10000,

$$

Equation (9.2).

 the complete joint record failure in [(9.1)](/quantum-measurement/research/repeated-position-records/one-complete-protocol-and-its-joint-error-budget#p2r:eq:recordbound) is strictly below $2.641\cdot10^{-7}$. The forty-four complete cycles take $44(201+4\pi)<10000$ time units, leaving a positive final hold. 

 

**Proof.**

The loader maximum speed is $35A/(16T_L)=7/16<1/\sqrt2$, so its common-domain condition holds. The exact strip contribution is 

$$

 440(6\cdot10^{-10}-8\cdot10^{-20})
             =2.639999999648\cdot10^{-7}.

$$

 The remaining contribution is evaluated from [(6.4)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:constants)–[(8.3)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holderror), including the larger spectator-safe hold coefficient $100(A+1)^2$. All exponent arguments and polynomial factors are rational. For $q\geq0$ and integer $N$, 

$$

 e^{-q}\leq
   \left(\sum_{k=0}^Nq^k/k!\right)^{-1}.

$$

 For $0\leq q<N+2$ the positive exponential has the upper bound 

$$

 e^q\leq\sum_{k=0}^Nq^k/k!+
       \frac{q^{N+1}}{(N+1)!}\frac1{1-q/(N+2)}.

$$

 Use the first formula with $N\geq300+4\lfloor q\rfloor$ and the second with $q=8,N=160$. Direct rational substitution gives $B_A<8.745\cdot10^{-48}$ and $h_g<5.214\cdot10^{-47}$, with the following outward-rounded fees before multiplication by $nC=440$: 

$$

\begin{array}{c|c@{\qquad}c|c}
 \text{fee}&\text{upper bound}&\text{fee}&\text{upper bound}\\ \hline
 F_{\rm cg}&1.928\cdot10^{-22}&F_{\rm eg}&1.380\cdot10^{-37}\\
 B_{\rm end}&1.287\cdot10^{-57}&E_{\rm end}&2.606\cdot10^{-50}\\
 F_{\rm ch}&2.088\cdot10^{-49}&F_{\rm eh}&5.560\cdot10^{-32}
\end{array}

$$

 In particular 

$$

 440\{F_{\rm copy}+F_{\rm ch}(10000)+F_{\rm eh}(10000)\}
                  <9\cdot10^{-20}.

$$

 All quantities in this enclosure are specified by the formulas above; adding the strip contribution and the displayed residual bound proves the stated strict ceiling. Finally $\pi<22/7$ gives $44(201+4\pi)<44(201+88/7)<10000$. 

□



This row is a finite mathematical result for the prescribed complete effective currents and exact controls. The different receivers provide concrete separated position records under that parent. A finite material spring/source realization, charged or Pauli-current embedding, trap and support control, the full original quantum-stock and actual-law warrant, and physical readout are additional transfer problems. In particular, a bare Coulomb interaction at finite separation does not have the reset's exactly zero endpoint spring; its transverse cross term can also move the same carrier's archive. Neither term is covered by renaming the longitudinal scalar interaction. The calibration results below retain these distinctions and do not silently amend the exact-control row.

---

# Section 10: What reset preserves: full laws and exact counterexamples

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

---

# Section 11: Calibration in the complete current and record history

<a id="section-11"></a>

## 11 Calibration in the complete current and record history

 <a id="p2s:sec:calibration"></a>

The exact-reset theorem is a positive result for its specified controls. Finite calibration changes both the active wave and its actual current. We give interfaces that keep those two effects distinct and retain every old receiver. Throughout this section oscillator coordinates have $H_0=-\Delta+|q|^2/4$, current $j=2\operatorname{Im}(\Psi^*\nabla\Psi)$, and normalized real stock $R(q)\propto e^{-|q|^2/4}$. The active variables may have an arbitrary Hilbert space of retained spectators as their fibre. All norms below include that fibre and its genuine positions.



<a id="section-11-1"></a>

### 11.1 A local current bound with a quadratic remainder

 

**Lemma 11.1 (Current localized at an actual boundary).**

 <a id="p2s:lem:localized"></a> Let $\Psi=\Phi+E$, $\|\Psi\|=1$, $\|\Phi\|\leq1$, and suppose the displayed first derivatives and moments are finite. For a band $B$ and $F(t,q)=n(t)\cdot q-s(t)$ with $|n|=1$, put 

$$

 \epsilon=\|E\|,\quad Z=\|\nabla E\|,\quad X=\||q|E\|,
 \qquad a=\|\mathbf1_B\Phi\|,\quad
 b=\|\mathbf1_B\nabla\Phi\|,\quad c=\|\mathbf1_B|q|\Phi\|.

$$

 Writing $\delta\rho=|\Psi|^2-|\Phi|^2$, $\delta j=j_\Psi-j_\Phi$, $N=|n'|$ and $S=|s'|$, one has <a id="p2s:eq:localized"></a>


$$
\begin{aligned}
 \int_B|\delta j\cdot n+\delta\rho(n'\cdot q-s')|
 &\leq2aZ+2\epsilon b+2\epsilon Z\\
 &\quad+N[2\min(\epsilon c,aX)+\epsilon X]
       +S[2\epsilon a+\epsilon^2].
\end{aligned}
$$

Equation (11.1).

 For every measurable endpoint set $D$, <a id="p2s:eq:population"></a>


$$

 \int_D|\Psi|^2\leq(\|\mathbf1_D\Phi\|+\epsilon)^2.

$$

Equation (11.2).

 

 

**Proof.**

Expand before integrating spectators: 

$$

 \delta j=2\operatorname{Im}
 (\Phi^*\nabla E+E^*\nabla\Phi+E^*\nabla E),\qquad
 \delta\rho=2\operatorname{Re}(\Phi^*E)+|E|^2.

$$

 Hilbert-space Cauchy–Schwarz gives the first line. In the linear position-weighted density term the weight can be assigned to either factor, giving the minimum; the quadratic term is bounded by $\epsilon X$. The scalar moving offset contributes the last bracket. The triangle inequality for $\|\mathbf1_D(\Phi+E)\|$ proves the endpoint estimate. No pointwise orthogonality between history components has been used. 

□



The plus sign in [(11.1)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:localized) is fixed by $\frac{d}{dt}F(t,Q_t)=F_t+\nabla F\cdot\dot Q_t$. It is the relative current through the moving level set. To convert this form estimate into a path statement, assume the complete equivariant flow and its crossing/area formula. Integrate through two disjoint offset bands of width $g$ and apply coarea. There is one predetermined offset in each band whose summed integrated absolute flux is at most the two-band integral divided by $g$. These planes are fixed analysis devices, selected from the wave, not from an observed trajectory. A path starting beyond its plane and never crossing it keeps the required sign. Apply the same argument at two fixed held-receiver bands, and charge entrance and endpoint ambiguous populations using [(11.2)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:population). The original cap multiplies the resulting reference path allowance once, by Proposition [10.2](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:original).

Localization matters: the coefficient of the linear derivative error $Z$ is $a$, the small reference amplitude at the boundary. The unsuppressed quadratic term $2\epsilon Z$ remains. An endpoint norm alone controls neither term without a derivative bound. To obtain a numerical calibrated record theorem from this interface, one must supply the boundary-band amplitudes, derivative and moment errors, entrance and endpoint allowances, and the complete duration of the changed schedule. The exact-control 44-record bound does not by itself provide these perturbation data.



<a id="section-11-2"></a>

### 11.2 Active stock energy and actual archive motion

 

**Proposition 11.2 (A derivative bootstrap without a field-strain exponential).**

 <a id="p2s:prop:energy"></a> Let $D=\nabla-\nabla\log R$, $H_0-E_0=D^*D$, and let a real smooth field $w$ satisfy $\nabla\cdot(R^2w)=0$, $\|w\|_\infty\leq W$. On a pulse use $H(t)=H_0+g(t)L_w+H_{\rm rest}(t)$, where 

$$

 L_w=-i(w\cdot\nabla+\tfrac12\nabla\cdot w)=-iw\cdot D,

$$

 and $H_{\rm rest}$ acts only on the retained fibre. Assume the common form evolution and energy identity are justified on this domain. The projection $P=|R\rangle\langle R|\otimes I$ commutes with this evolution. If $\epsilon=\|(I-P)\Psi\|$ and $z=\|D\Psi\|$, then $\epsilon$ is constant and, for a pulse starting at $g(0)=0$, <a id="p2s:eq:bootstrap"></a>


$$

 \sup_{0\leq s\leq t}z(s)
 \leq z(0)+\epsilon W(\operatorname{Var}_{[0,t]}g+\|g\|_\infty).

$$

Equation (11.3).

 For two nonnegative single-hump pulses with maximum at most one this is $z\leq z_0+6W\epsilon$. Their complete current satisfies <a id="p2s:eq:relative-current"></a>


$$

 \int|j-gw\rho|\leq2z.

$$

Equation (11.4).

 

 

**Proof.**

Weighted divergence gives $L_wR=0$ and symmetry, hence $PL_w=L_wP=0$. The commutation and constant off-stock norm follow, including under the fibre evolution. Write $E=(I-P)\Psi$. Then $|\langle E,L_wE\rangle|\leq W\epsilon z$. The active energy $e=z^2+g\langle L_w\rangle$ obeys $e'=g'\langle L_w\rangle$; the spectator evolution cancels from this identity. A constant form shift first gives finite continuous $z$. For $M=\sup_{s\leq t}z(s)$, integration and the endpoint interaction term give $M^2\leq z_0^2+\epsilon W(\operatorname{Var}g+\|g\|_\infty)M$. If $M^2\leq z_0^2+cM$, its positive root is at most $z_0+c$, proving [(11.3)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:bootstrap). Each hump has variation at most two. Finally $j-gw\rho=2\operatorname{Im}(\Psi^*D\Psi)$, so Cauchy–Schwarz and normalization prove [(11.4)](/quantum-measurement/research/repeated-position-records/calibration-in-the-complete-current-and-record-history#p2s:eq:relative-current). 

□



If an inverse label $\eta_t$ for the reference pulse has derivative bound $B$ along the admitted tube, a unit-duration two-pulse reader therefore has expected reference-law label variation at most $2B(z_0+6W\epsilon)$. This is an actual-current comparison, rather than a conclusion from the endpoint wave. The homogeneous baker's proved single-module derivative estimate may supply $B$ on its stated tube; it cannot be silently applied to a many-cycle inverse.

During an interpulse interval, an error-bearing archive $y$ can move even though all other operations are quantum spectators. If $a_y=\partial_y+y/2$, then $\int|j_y|\leq2\|a_y\Psi\|$. The norm is conserved under the archive harmonic oscillator and arbitrary commuting rest unitaries. Since $\|\Phi'\|_\infty=1/\sqrt{2\pi}<0.4$, the Gaussian-quantile expected variation over duration $\Delta$ is at most $0.8\Delta\|a_y\Psi\|$. Pointwise archive immobility is therefore a special exact-stock fact, not a general consequence of spectator dynamics.



**Proposition 11.3 (One complete finite-calibration digit criterion).**

 <a id="p2s:prop:digits"></a> Use the same original complete cap $C$ and initial uniform reference archive quantile as in the inverse-digit construction. For reader $i$, suppose its entering active wave-density marginal differs from product Gaussian stock by TV at most $\epsilon_i$, its excluded exact-map collar has reference area $\beta_i$, and a valid stopped-tube calculation gives expected inverse-label error $L_i$. All expectations in these hypotheses use the true equivariant reference path law, before the original factor $C$ is applied. Let $A_i$ bound the expected archive-quantile variation after reader $i$ and before reader $i+1$; take $A_n=0$ when no later digit is read. Set $\widetilde L_i=L_i+A_i/2$. The factor $1/2$ expresses that intervening output drift is pulled back through the slope-two update $v^+=2v-s$. Suppose guards $0<t_i\leq h/8$ keep the completed-stage inverse inside its exact rectangles, whose extra guard collars have area at most $8t_i$. Then the probability of any wrong digit among $n$ reads is at most <a id="p2s:eq:digits"></a>


$$

 C\left[\sum_{i=1}^n(\beta_i+\epsilon_i)
 +\sum_{i=1}^n\left\{
       \frac{\widetilde L_i}{t_i}
       +(2^{n+2-i}+8)t_i\right\}\right].

$$

Equation (11.5).

 To this add the separately proved loader own-sign fees and calibrated receiver/whole-hold fees. A bound on the total then concerns the full joint history under the one original law. 

 

**Proof.**

The exact-map exclusions cost $C(\beta_i+\epsilon_i)$, with an additional $8Ct_i$ for the guard collars. Markov's inequality and original path domination charge inverse-label plus half interpulse displacement exceeding $t_i$ by $C\widetilde L_i/t_i$. On the remaining paths the inverse update is the dyadic shift with perturbation of size at most $t_i$ in its entering argument. Pulling successive perturbations back to the initial archive changes that argument by at most $S=\sum_i2^{1-i}t_i$. Every relevant digit boundary belongs to the level-$n$ grid. Its $S$-neighbourhood in the initial unit interval has measure at most $2^{n+1}S$, which is $\sum_i2^{n+2-i}t_i$. Charge this under the initial reference law and its original cap, not a record-conditioned law. Outside the union the digit history is unchanged. The additional loader and physical-record errors are whole-history events on the same path space, so the union bound adds their proved allowances. 

□

 The guard optimization for each term is $t_i=\min\{h/8,\sqrt{\widetilde L_i/(2^{n+2-i}+8)}\}$, with a limiting choice when the numerator is zero. This criterion retains interpulse current, guard loss, and the longer hold needed by a changed reset schedule. A non-discriminating upper bound from it is a limitation of that estimate; it is not an observed device failure.

---

# Section 12: An approximate reset uniform over an actual spring-gain interval

<a id="section-12"></a>

## 12 An approximate reset uniform over an actual spring-gain interval

 <a id="p2s:sec:gain"></a>

There is a constructive alternative to precise exchange-angle calibration. We state it separately from the exact reset used in the 44-cycle theorem. The finite normal-form calculation below includes all creator channels; its small matrix error is converted to a state-dependent quantum error, not an operator-norm estimate for an infinite-dimensional metaplectic unitary. The method is standard finite superadiabatic elimination, with analytic expansion and Cauchy-estimate precedents such as Hagedorn–Joye [[7](/quantum-measurement/research/repeated-position-records/bibliography#bib-HagedornJoye2002)]; the specific positive scalar path, constants, and retained-bank interface are the content needed here.

Let $S(u)=B(33,33)^{-1}\int_0^uv^{32}(1-v)^{32}\,dv$ on $[0,1]$, and put $c=\tfrac14\sin(\pi S)$, $d=\tfrac14\cos(\pi S)$. In coordinates $[q_j,p_k]=i\delta_{jk}$ use the scalar oscillator curvature <a id="p2s:eq:K"></a>


$$

 K_\lambda(u)=
 \begin{pmatrix}1+d+(\lambda-1)c&-\lambda c\\
                 -\lambda c&1-d+(\lambda-1)c\end{pmatrix},
 \qquad .999\leq\lambda\leq1.001.

$$

Equation (12.1).

 It is realized by positive external trap curvatures $1\pm d-c$ and the nonnegative actual spring $\lambda c(q_1-q_2)^2/2$ in $H=(p_1^2+p_2^2+q^TK_\lambda q)/2$. Here the gain is constant within one pulse; different pulses may have different gains. The transformation from the unit-variance coordinates used above is $q=x/\sqrt2$, $p_q=\sqrt2p_x$, so $(q+ip_q)/\sqrt2=\partial_x+x/2$ for the baseline frequency-one oscillator. Endpoint annihilators below instead use their stated instantaneous frequencies; the local ramps after the theorem relate these to baseline stock.



**Theorem 12.1 (Finite four-channel exchange).**

 <a id="p2s:thm:gain"></a> Run [(12.1)](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:eq:K) over normalized duration $T\geq10^8$. Write $\mathcal U$ for its exact four-channel annihilator/creator matrix, with instantaneous eigenmodes used at the two endpoints. Here the incoming scratch annihilator is $a_x=\sqrt{\nu_{x,\rm in}/2}\,q_x+
i p_x/\sqrt{2\nu_{x,\rm in}}$, and the incoming reset annihilator is defined with its own endpoint frequency. The final active number norm and vacuum refer to the outgoing active frequency. There is a diagonal endpoint comparison $\mathcal U_D$ such that <a id="p2s:eq:gain-bound"></a>


$$

 \|\mathcal U-\mathcal U_D\|_{\rm op}
 \leq\ell(T):=80000(576000/T)^{31}.

$$

Equation (12.2).

 The real eigenbasis exchanges the physical modes. If the initially unused reset eigenmode is a quantum vacuum factor, and the scratch has arbitrary retained entanglement and number norm $M=\|a_x\Psi\|$, then the final active number norm and distance from a normalized active-vacuum product wave are each bounded by <a id="p2s:eq:gain-state"></a>


$$

 s(T)(M+1),\qquad s(T)=160000(576000/T)^{31}
 <5.988\times10^{-65}\quad(T\geq10^8).

$$

Equation (12.3).

 The product-wave comparison retains the full rest Hilbert space. No independent actual configuration law is asserted. 





**Proof.**

Write $a=1+(\lambda-1)c$, $r=(d^2+\lambda^2c^2)^{1/2}$, and $\nu_\pm=(a\pm r)^{1/2}$. A continuously chosen real orthogonal eigenbasis $O$ makes a quarter-turn, since the off-diagonal spring is positive in the interior and the two diagonal endpoint curvatures are exchanged. In its canonical coordinates $Q,P$ set $a_j=\sqrt{\nu_j/2}\,Q_j+iP_j/\sqrt{2\nu_j}$. Direct differentiation of these operators and their adjoints gives the exact equation <a id="p2s:eq:fourchannel"></a>


$$

 A_u=(TD_0+G)A,\qquad
 D_0=\operatorname{diag}(-i\nu_+,-i\nu_-,i\nu_+,i\nu_-).

$$

Equation (12.4).

 If $\Omega=O^TO_u$, its off-diagonal annihilator coefficients are $-\Omega_{ij}c_{ij}$ and its creator coefficients are $-\Omega_{ij}d_{ij}$, with 

$$

 c_{ij}=\tfrac12(\sqrt{\nu_i/\nu_j}+\sqrt{\nu_j/\nu_i}),\qquad
 d_{ij}=\tfrac12(\sqrt{\nu_i/\nu_j}-\sqrt{\nu_j/\nu_i}).

$$

 There is also the local creator coefficient $\nu_{j,u}/(2\nu_j)$; the remaining blocks follow by conjugation on the real interval. In particular $G$ has zero diagonal. No sum-frequency channel has been discarded.

We supply finite analytic bounds for this equation. On the complex distance-$1/100$ neighbourhood of $[0,1]$, $|z(1-z)|\leq.2601$. The real maximum of $S'$ is below ten (its exact value is $65\binom{64}{32}/2^{64}$). Consequently $|S'(z)|<10(1.0404)^{32}<40$, and $|S(z)-S(u)|<.4$ at a nearest real $u$. Thus $|\sin\pi S|,|\cos\pi S|<\cosh(2\pi/5)<2$. The square inside $4r$ differs from one by less than $.002001\cdot4=.008004$. Its analytic square root stays within $.005$ of one, and $\nu_\pm^2$ stay within $.002$ of $5/4,3/4$ respectively. The principal frequency branches are therefore analytic. In particular every gap between distinct entries of $D_0$ exceeds $1/5$ in modulus, $ .85<|\nu_j|<1.13$, and 

$$

 |\theta_u|=\left|\frac{\pi\lambda S'}
 {2(\cos^2\pi S+\lambda^2\sin^2\pi S)}\right|<64,
 \qquad |\nu_{j,u}|<.187.

$$

 For the latter estimate differentiate $a$ and $r$: their bounds are $.001\pi40/2$ and $.002001\pi40/.995$, respectively, then divide their sum by $2(.85)$. These estimates give row and column sums of $G$ below 200, and hence $\|G\|\leq200$. Entrywise division by the four-channel gaps, with Frobenius norm comparison, gives the safe bound <a id="p2s:eq:homological"></a>


$$

 \|\operatorname{ad}_{D_0}^{-1}\operatorname{off}B\|
 \leq20\|B\|.

$$

Equation (12.5).



Put $\varepsilon=T^{-1}$, $N=31$, and seek $W=I+\sum_{k=1}^N\varepsilon^kW_k$ and $D=D_0+\sum_{k=1}^N\varepsilon^kD_k$, with $W_k$ off-diagonal and $D_k$ diagonal. With $W_0=I$, define exactly <a id="p2s:eq:recursion"></a>


$$
\begin{aligned}
 D_k&=\operatorname{diag}(GW_{k-1}),\\
 W_k&=\operatorname{ad}_{D_0}^{-1}\operatorname{off}
 \left(W_{k-1}'-GW_{k-1}+\sum_{j=1}^{k-1}W_{k-j}D_j\right).
\end{aligned}
$$

Equation (12.6).

 Expansion shows cancellation through order $\varepsilon^N$ in $\mathcal R=\varepsilon W'-(D_0+\varepsilon G)W+WD$. The diagonal of $W_{k-1}'$ and of $W_{k-j}D_j$ vanishes, which proves the diagonal choice. In particular $D_1=0$.

Use nested complex widths $(N+1-k)/(100(N+1))$. Each Cauchy derivative costs at most 3200, including the last derivative on the real interval. If $c_k$ bounds $\|W_k\|$ on its assigned domain, then 

$$

 c_k\leq68000c_{k-1}
       +4000\sum_{j=1}^{k-1}c_{k-j}c_{j-1},
 \qquad \|D_k\|\leq200c_{k-1}.

$$

 Induction yields $c_k\leq576000^k/(k+1)^2$: the preceding single term costs at most $4\cdot68000/576000$, and the convolution at most $16\cdot4000/576000$. Their sum is less than one. For the convolution split at its midpoint and use $\sum_{m\geq1}m^{-2}<2$. Every entry of $G$ vanishes to order at least 32 at the real endpoints, because $S'$ does. The recursion loses at most one order at each step, so all $W_k,D_k$, $k\leq31$, vanish there. Thus $W(0)=W(1)=I$ exactly.

Let $q=576000/T\leq.00576<.01$. Then $\|W-I\|\leq q/(1-q)$ and $\|W^{-1}\|<2$. The last derivative and the remaining products of total degree greater than $N$ give 

$$

 \|\mathcal R/\varepsilon\|
 \leq[3200+200+200N/(1-q)]q^{31}<9700q^{31}.

$$

 In the dressed equation for $B=W^{-1}A$ the error generator therefore has integrated norm less than $20000q^{31}$. The leading $D_0$ is anti-Hermitian on the real interval. Since $D_1=0$, the full integrated norm of the diagonal correction is at most $200q/(1-q)<6/5$. Including the error keeps the logarithmic growth budget below $5/4$. In Duhamel's formula the diagonal propagation on $[s,1]$ and the perturbed propagation on $[0,s]$ use disjoint subintervals of this one budget. Their product is at most $e^{5/4}<4$, not the product of two independent whole-interval overestimates. The identity endpoint dressing gives $4\cdot20000q^{31}$, proving [(12.2)](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:eq:gain-bound).

The diagonal reference sends the initial reset annihilator into the final active mode, so it kills the unused vacuum. On the retained entrance state the four operator norms have squared sum 

$$

 \|a_x\Psi\|^2+\|a_r\Psi\|^2+
 \|a_x^*\Psi\|^2+\|a_r^*\Psi\|^2=2M^2+2.

$$

 Cauchy–Schwarz therefore gives final active number norm at most $\ell\sqrt{2M^2+2}$. If $p$ is its nonvacuum probability, then $p\leq\|a_x\Psi_{\rm final}\|^2$. Normalized projection onto the active vacuum changes the wave by $[2(1-\sqrt{1-p})]^{1/2}\leq\sqrt{2p}$. This is at most $2\ell\sqrt{M^2+1}\leq s(M+1)$; the number norm obeys the same larger bound. If the vacuum projection is zero, then $p=1$ and the sharper number estimate forces $s(M+1)\geq\sqrt2$. Any normalized vacuum-product wave is then orthogonal to the true wave and has distance $\sqrt2$, so the conclusion still holds. Thus the statement includes arbitrary finite $M$. The rational power at $T=10^8$ gives the final decimal ceiling. 

□





**Remark 12.2 (The meaning of the diagonal comparison).**

 The comparison's diagonal entries may contain unknown phases and finite normal-form amplitude corrections. It need not itself be asserted a canonical quantum transformation. Only its active annihilator row, which annihilates the initial reset vacuum, is used in the state estimate. All other quantum correlations remain in the used archive and spectators. 





<a id="section-12-1"></a>

### 12.1 Finite resources and the limits of this tolerance

 The two physical endpoint frequencies are known, independently of $\lambda$. They can be joined to baseline frequency one by prescribed local Ermakov ramps, which act on arbitrary input waves. One explicit choice uses the Beta$(9,9)$ step $S_8$, duration 40, and scale $b=\exp(\pm L S_8(t/40))$, with $L=\tfrac12\log(\Lambda\nu_{\rm endpoint})<36/5$ and $\Lambda=10^6$. The elementary bounds $|S_8'|<4$, $|S_8''|<34$ give 

$$

 |\ddot b/b|\leq[16L^2+34L]/1600<.7.

$$

 The term $\nu_{\rm in}^2/b^4$ stays at least one along either the compression or its matching expansion. Thus the programmed curvature $\nu_{\rm in}^2/b^4-\ddot b/b$ is positive, at least $.3$, and below $1.26\times10^{12}$. Endpoint scale and zero chirp implement exact annihilator transport up to phase, by the same Ermakov change of variables used in the exact reset. The first six Hamiltonian jets agree at joins. Two parallel ramp stages cost 80 baseline units. During the accelerated sweep the physical curvature is $\Lambda^2K_\lambda(\Lambda t/T)$, for $0\leq t\leq T/\Lambda$. Rescaling time and canonical coordinates reduces it exactly to the normalized sweep of Theorem [12.1](/quantum-measurement/research/repeated-position-records/an-approximate-reset-uniform-over-an-actual-spring-gain-interval#p2s:thm:gain), with the same gain interval. For $T\in[10^8,1.01\times10^8]$, this takes at most 101 baseline units; including the two parallel ramp stages gives at most 181 units.

These local ramps and endpoint traps are specified exactly; the proven gain interval concerns the actual coupling spring during the sweep. Independent ramp errors, idle curvature, clocks and time-dependent gain are different perturbations. Proposition [10.4](/quantum-measurement/research/repeated-position-records/what-reset-preserves-full-laws-and-exact-counterexamples#p2s:prop:curvature) gives a quantitative obstruction to conflating them. Substituting this approximate reset into the repeated-record construction changes both the stock errors and the schedule. A corresponding record theorem must propagate those errors through the finite-calibration criterion and re-evaluate every receiver's hold allowance; it does not inherit the exact-reset numerical bound without that calculation.

For comparison, common systematic endpoint-angle error is a narrower model in which the symmetric BB1 sequence suppresses low-order mixing. That pulse identity is established work of Wimperis and Brown–Harrow–Chuang [[3](/quantum-measurement/research/repeated-position-records/bibliography#bib-Wimperis1994), [4](/quantum-measurement/research/repeated-position-records/bibliography#bib-BrownHarrowChuang2004)]. Its error model, phase-axis controls, and increased duration do not supply a general scalar trap calibration theorem. The explicit four-channel calculation above treats a different constant spring-gain uncertainty and includes squeezing.

---

# Section 13: Conclusion

<a id="section-13"></a>

## 13 Conclusion

<a id="p2s:sec:conclusion"></a>

The prescribed effective parent admits a complete repeated positional record history. The compact reader exposes actual earlier digits without fresh scratch populations; the scalar gate writes each digit into a different receiver; the exact reset restores the required wave factor while retaining its correlations; and the complete current controls every receiver during the remaining schedule. The 44-cycle bound is therefore a joint statement about earlier labels and held records, with an explicit original-law contract and an explicitly delimited warmup interface.

Finite-control analysis gives further usable mathematics. Localizing the comparison wave at the actual record boundary can make derivative errors far cheaper than a global estimate, while retaining the quadratic error current. One-module inverse-label bounds, actual interpulse archive drift, and stopped-tube guard fees give a complete calibration criterion. The positive spring sweep proves approximate exchange uniformly over a constant gain interval. Its exact local ramps and endpoint traps remain separate assumptions, as the idle-curvature counterexample demonstrates.

The remaining physical questions concern simultaneous stock and actual-law preparation, material sources and clocks for the prescribed controls, complete microscopic currents, residual interactions with held receivers, and feasible calibration in that same parent. Extending scope to a different carrier or apparatus requires those interfaces to be proved again with their incoming errors and full history retained. The present mathematical results provide concrete targets for that work without claiming that the full measurement and Born-statistics problem has been resolved.



<a id="paragraph-1"></a>

#### Research support and AI assistance.

 This research was conducted independently by Jeremy Rodgers without external funding. AI systems assisted with drafting, mathematical reconstruction, source and bibliography checks, and computational verification. The author is responsible for the manuscript; AI-assisted checking does not constitute independent scientific validation.



<a id="paragraph-2"></a>

#### Collaboration.

 Collaboration on independent mathematical verification and physical implementation of the stated source, control, current and record interfaces is welcome.

---

# Appendix A: A distinct retained-symbolic-history calibration

<a id="section-A"></a>

## A A distinct retained-symbolic-history calibration

 <a id="p2s:sec:alternative"></a>

The main record theorem extracts the earlier actual digits of a retained archive. A different question is whether a finite expanding calibration can make a writer approximately uniform while its symbolic history remains available. This appendix states the elementary dyadic result explicitly. It separates this symbolic calibration problem from the physical reader, receiver and reset requirements of the 44-cycle apparatus.



**Proposition A.1 (BV calibration with every dyadic symbol retained).**

 <a id="p2s:prop:dyadic"></a> Let $U\in(0,1)$ have an absolutely continuous probability density $f\in BV(0,1)$. After $N$ exact doubling steps retain both 

$$

 V=2^NU-\lfloor2^NU\rfloor,\qquad H=\lfloor2^NU\rfloor.

$$

 Here $H$ encodes the complete ordered symbolic history. If $p_h$ is its actual probability, then <a id="p2s:eq:dyadic"></a>


$$

 {\operatorname{TV}}\bigl(\mathcal L(V,H),\operatorname{Unif}(0,1)\otimes(p_h)_h\bigr)
 \leq \frac{\operatorname{Var}(f)}{2\cdot2^N}.

$$

Equation (A.1).

 The same bound holds after averaging over original contexts $Z$ if the conditional densities $f_z$ have integrable total variation; retain $Z$ in both joint laws and replace the numerator by $\int\operatorname{Var}(f_z)\,\mu_Z(dz)$. No uniform estimate for rare contexts is required by this averaged conclusion. 

 

**Proof.**

Write $m=2^N$ and $I_h=(h/m,(h+1)/m)$. The joint density in the $h$th history fibre is $m^{-1}f((v+h)/m)$, whereas its comparison density is $p_h=\int_{I_h}f$. Therefore its contribution to twice the total variation is 

$$

 \int_{I_h}|f(u)-m p_h|\,du.

$$

 The average $mp_h$ lies between the essential lower and upper values of the BV representative on this interval. Its $L^1$ distance is at most $m^{-1}\operatorname{Var}_{I_h}(f)$. Summing the interval variations gives at most the full variation, proving [(A.1)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:dyadic). Conditional disintegration and integration give the context version. Jumps on dyadic boundaries are included in the full variation and never invalidate this upper bound. 

□



This is a joint statement with the actual history marginal, so any later common Markov instrument contracts its one initial discrepancy, even if its settings adapt to recorded symbols. To see this, apply that same kernel to the two complete initial measures and use TV contraction. It does not prove that an arbitrary later instrument is an ideal Born instrument: that is an additional property of the comparison experiment.

There is no conflict with fine-archive obstructions. The inverse formula $U=(H+V)/2^N$ retains all input information in the pair; conditioning only on the finite symbols $H$ is coarser than conditioning on an arbitrary analog record that can determine $V$ as well. Adding such a side channel can destroy [(A.1)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:dyadic)'s readiness premise, because its conditional density/variation class changes. Nor does the abstract doubling calculation implement a physical receiver, return or hold by itself.



<a id="section-A-1"></a>

### A.1 Full inverse branches with finite overlap errors

 

**Proposition A.2 (A retained-history perturbation estimate).**

 <a id="p2s:prop:inversebranches"></a> For each original context and previous symbolic history, suppose the next actual calibration map has two increasing absolutely continuous inverse branches $g_i:[0,1]\to I_i$. Their full ordered intervals $I_i$ partition $[0,1]$ and their labels agree with the ideal inverses $g_i^0(v)=(i+v)/2$, $i=0,1$. Uniformly in that context and history assume 

$$

 \sum_{i=0}^1\|g_i'-1/2\|_{L^1(0,1)}\leq\epsilon_w,
 \qquad \max_i\|g_i-g_i^0\|_\infty\leq\epsilon_x.

$$

 For an original averaged conditional variation $V_0$, the joint output distance from uniform quantile times its own actual symbolic-history and original-context marginal is at most <a id="p2s:eq:branchbound"></a>


$$

 \frac{V_0}{2\cdot2^N}+N\epsilon_w
                  +2(\epsilon_w+4\epsilon_x)V_0.

$$

Equation (A.2).

 These are hypotheses on the complete actual endpoint map; wave covariance or a small positional displacement alone does not supply them. 

 

**Proof.**

For a nonnegative unnormalized BV density $r$, of mass $m$ and variation $V$, compare the label-retaining transfers $g_i' r(g_i)$ and $\tfrac12r(g_i^0)$. The weight difference costs at most $\epsilon_w(m+V)$, since $\|r\|_\infty\leq m+V$. For the remaining term use the variation measure: the two arguments can straddle a fixed point $a$ only if $|g_i^0(v)-a|\leq\epsilon_x$. That set has length at most $4\epsilon_x$. The factor $1/2$ and the two labels therefore give 

$$

 \|\mathcal Lr-\mathcal L_0r\|_1
 \leq\epsilon_wm+(\epsilon_w+4\epsilon_x)V.

$$

 This argument uses essential BV representatives and extends by BV approximation; endpoints carry no Lebesgue mass. The full-interval and partition assumptions make both transfers mass-preserving positive operators, hence $L^1$ contractions on differences.

At ideal step $j$, sum over the unnormalized histories. Their masses sum to one, and their variations sum to at most $2^{-j}V_0$ by the explicit dyadic formulas. Telescope the true and ideal products, applying each one-step difference to the ideal intermediate densities and using the outer true contractions. Their joint output TV is at most 

$$

 \Delta_N=\frac{N\epsilon_w}{2}
       +(\epsilon_w+4\epsilon_x)V_0(1-2^{-N}).

$$

 The ideal law is within $V_0/(2\cdot2^N)$ of uniform quantile times its own history marginal. Changing that marginal to the true one costs at most another $\Delta_N$, by marginal contraction. Thus the readiness distance is at most the ideal fee plus $2\Delta_N$, which is bounded by [(A.2)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:branchbound). Integrate the conditional argument against the original context law throughout. 

□

 For example $V_0\leq1024$, $N=30$, and $\epsilon_w,\epsilon_x\leq10^{-11}$ give a ceiling below $6\times10^{-7}$. This is an explicit sufficient map-error target, not an attained native 30-cycle implementation. Unlike a uniform derivative bound, the $L^1$ weight hypothesis permits some unbounded endpoint derivatives. Full branch coverage, correct positional labels and the complete context dependence remain essential.

The classical BV transfer-operator context goes back to Lasota–Yorke [[1](/quantum-measurement/research/repeated-position-records/bibliography#bib-LasotaYorke1973)]; the elementary proof here does not import their full invariant-density theorem. The conditional formulation retains the original context and the full branch Jacobians. If that context includes a controller, it can be treated as a fixed parameter only when the active subsystem is closed at that context. A dynamical controller instead belongs to the complete transported configuration and requires its own original-law and current assumptions. A quantum controller marginal does not justify discarding a singular actual controller. The abstract branch theorem therefore supplies a calibration interface, rather than a physical implementation of repeated records.

---

# Bibliography

## Bibliography

<a id="bib-LasotaYorke1973"></a>

[1] A. Lasota and J. A. Yorke, On the existence of invariant measures for piecewise monotonic transformations, *Trans. Amer. Math. Soc.* **186** (1973), 481–488. [doi:10.1090/S0002-9947-1973-0335758-1](https://doi.org/10.1090/S0002-9947-1973-0335758-1).

<a id="bib-CamposSalehTeich1989"></a>

[2] R. A. Campos, B. E. A. Saleh, and M. C. Teich, Quantum-mechanical lossless beam splitter: SU(2) symmetry and photon statistics, *Phys. Rev. A* **40** (1989), 1371–1384. [doi:10.1103/PhysRevA.40.1371](https://doi.org/10.1103/PhysRevA.40.1371).

<a id="bib-Wimperis1994"></a>

[3] S. Wimperis, Broadband, narrowband, and passband composite pulses for use in advanced NMR experiments, *J. Magn. Reson., Ser. A* **109** (1994), 221–231. [doi:10.1006/jmra.1994.1159](https://doi.org/10.1006/jmra.1994.1159).

<a id="bib-BrownHarrowChuang2004"></a>

[4] K. R. Brown, A. W. Harrow, and I. L. Chuang, Arbitrarily accurate composite pulse sequences, *Phys. Rev. A* **70** (2004), 052318. [doi:10.1103/PhysRevA.70.052318](https://doi.org/10.1103/PhysRevA.70.052318); [arXiv:quant-ph/0407022](https://arxiv.org/abs/quant-ph/0407022).

<a id="bib-SchmidGriesemer2014"></a>

[5] J. Schmid and M. Griesemer, Kato's theorem on the integration of non-autonomous linear evolution equations, *Math. Phys. Anal. Geom.* **17** (2014), 265–271. [doi:10.1007/s11040-014-9154-5](https://doi.org/10.1007/s11040-014-9154-5).

<a id="bib-TTflow"></a>

[6] S. Teufel and R. Tumulka, Simple proof for global existence of Bohmian trajectories, *Commun. Math. Phys.* **258** (2005), 349–365. [doi:10.1007/s00220-005-1302-0](https://doi.org/10.1007/s00220-005-1302-0).

<a id="bib-HagedornJoye2002"></a>

[7] G. A. Hagedorn and A. Joye, Elementary exponential error estimates for the adiabatic approximation, *J. Math. Anal. Appl.* **267** (2002), 235–246. [doi:10.1006/jmaa.2001.7765](https://doi.org/10.1006/jmaa.2001.7765).

<a id="bib-RodgersEquilibrium2026"></a>

[8] J. Rodgers, *Autonomous Quantum Measurement Chains with Faithful Equilibrium Records*, version 2, 4 October 2026, consolidated revision of the version 2 massive-configuration preprint. [doi:10.5281/zenodo.23131069](https://doi.org/10.5281/zenodo.23131069).

<a id="bib-RodgersNonequilibrium2026"></a>

[9] J. Rodgers, *Nonequilibrium Calibration and Faithful Records in Autonomous Effective Measurement Models*, version 2, 4 October 2026 manuscript. [doi:10.5281/zenodo.23131081](https://doi.org/10.5281/zenodo.23131081).

<a id="bib-RodgersP1"></a>

[10] J. Rodgers, *Conditional Gaussian Preparation with Retained Archives*, revised companion manuscript, 2026. [doi:10.5281/zenodo.23259560](https://doi.org/10.5281/zenodo.23259560).

<a id="bib-RodgersP3"></a>

[11] J. Rodgers, *Reference-Weighted Deterministic Quantum Flows with Singular Interactions and Retained Sources*, companion manuscript, 2026. [doi:10.5281/zenodo.23259569](https://doi.org/10.5281/zenodo.23259569).

<a id="bib-RodgersP4"></a>

[12] J. Rodgers, *Complete-Current Estimates for Coherent Quantum Sources and Continua*, companion manuscript, 2026. [doi:10.5281/zenodo.23259571](https://doi.org/10.5281/zenodo.23259571).
