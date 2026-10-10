# Section 2: A compact stock-preserving baker module

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

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
