# Section 6: A smooth scalar gate which copies the entry sign

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

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
