# Modular Transport and Spherical Holographic Entanglement Entropy in a Source–Readout Architecture

One vacuum preparation supplies a restricted diamond state and a thermal state on the hyperbolic cylinder. Modular transport fixes the temperature; the regulated entropy calculation adds the holographic dictionary.

Jeremy Rodgers · 2026-11-06

DOI: https://doi.org/10.5281/zenodo.24013975



## One vacuum, two local descriptions

<a id="abstract"></a>

**One vacuum preparation supplies both descriptions.** Restrict it to a causal diamond and the result is a local vacuum state. Transport its algebra and dynamics to the hyperbolic cylinder and the same state data satisfy the thermal condition at inverse temperature $2\pi R$. This part requires no continuum density matrix.

The entropy calculation has further inputs. With the classical holographic dictionary and a regulated counting prescription, the bulk chart recovers the same time normalization and supplies a stationary horizon entropy. An exact coefficient test identifies which analytic changes of cutoff preserve the odd-dimensional constant. Within the stated class, the even-dimensional logarithmic coefficient is invariant.

<a id="section-1"></a>

## 1. The question and the assumptions

A global vacuum and a thermal state can describe the same local observables once the algebra and its evolution are specified. Casini, Huerta and Myers (CHM) map the vacuum on a ball's causal development to a thermal conformal field theory on hyperbolic space and, under holographic assumptions, compute its entropy from a Killing horizon [1](/source-readout/modular-transport/05-geometric-checks-and-references#ref-chm).

Three operations enter with different domains: restriction of a state, transport of its dynamics, and regulated counting. The first two operate on continuum algebras. The third requires additional data. In the Shadow Theory source–readout architecture [2](/source-readout/modular-transport/05-geometric-checks-and-references#ref-architecture), [3](/source-readout/modular-transport/05-geometric-checks-and-references#ref-transport), one preparation supports the local and thermal descriptions. The bulk extension realizes the same boundary transport, while two regulators that agree at leading order can differ at the order relevant to entropy.

The conformal field theory, modular-theoretic and gravitational inputs are hypotheses of the construction. Use units $\hbar=c=k_B=1$, boundary spacetime dimension $d\ge2$, ball radius $R>0$, and Lorentzian signature $(-+\cdots+)$.

<a id="section-2"></a>

## 2. Source data, apertures and return maps

<a id="source-datum"></a>

The prepared source datum is

$$
z=(\mathcal A,U,\Omega;\,g_{\mathrm{bulk}},L;\,r).
$$

The first entries give a conformally covariant local net, its vacuum representation and its vacuum vector. The bulk entries enter only for theories with the stipulated classical AdS dual. The separately specified datum $r$ gives the counting prescription, including cutoffs and any boundary data needed to define the regulated functional. Admission of these data is an assumption. The abstract architecture does not select a unique net, action or counting prescription.

<a id="aperture-and-return"></a>

For a region $O$, the aperture is the inclusion $i_O:\mathcal A(O)\hookrightarrow\mathcal A_{\mathrm{global}}$ in the vacuum representation. Its state readout is $\omega_O=\omega\circ i_O$, where $\omega(A)=\langle\Omega,A\Omega\rangle$. Given a conformal identification $\chi:O\to O'$, let $j_\chi$ be the induced algebra isomorphism. The destination state is $\omega_{O'}=\omega_O\circ j_\chi^{-1}$. Thus for every finite product,

$$
\omega_{O'}\!\left(j_\chi(A_1)\cdots j_\chi(A_n)\right)=\omega_O(A_1\cdots A_n).
$$

The return map $j_\chi^{-1}$ acts on the image of the localized algebra, so the identity recovers local correlation data. A global extension of the restricted state is separate data.

<a id="modular-commuting-diagram"></a>

Conjugation by $j_\chi$ transports the dynamical readout. For the modular groups,

$$
j_\chi\circ\sigma_s^{\omega_O}=\sigma_s^{\omega_{O'}}\circ j_\chi.
$$

To prove this, work in the Gelfand–Naimark–Segal (GNS) representations of the two states. Map the cyclic vectors by $A\Omega\mapsto j_\chi(A)\Omega'$. This preserves their inner products and extends to a unitary. It intertwines the densely defined Tomita maps $A\Omega\mapsto A^*\Omega$. Taking their closures and polar decompositions intertwines the modular operators.

The entropy readout takes a regulated realization as input. Commutativity of the continuum transport diagram does not identify independently regulated entropy functionals.



## From vacuum restriction to thermal time

<a id="section-3"></a>

## 3. Vacuum restriction and geometric thermality

Let $D=\{(t,x):|t|+r\lt R\}$ with $r=|x|$. Assume the vacuum is cyclic and separating for the relevant local von Neumann algebras, the net admits the conformal wedge-to-diamond map, and the vacuum wedge satisfies Bisognano–Wichmann [5](/source-readout/modular-transport/05-geometric-checks-and-references#ref-bw), [6](/source-readout/modular-transport/05-geometric-checks-and-references#ref-hl). On the right wedge $X^1>|X^0|$, a future boost sends $X^1\pm X^0$ to $e^{\pm\eta}(X^1\pm X^0)$. With Heisenberg evolution $\alpha_t(A)=e^{itH}Ae^{-itH}$ and modular convention $\sigma_s=\operatorname{Ad}\Delta^{is}$, the wedge modular group is the boost at rapidity $-2\pi s$.

<a id="wedge-to-diamond"></a>

### The wedge-to-diamond map

Set $b=-e_1/(2R)$ and $D_b=1-2b\cdot X+b^2X^2$, using the Lorentzian inner product. The explicit map is

$$
x=\frac{X-bX^2}{D_b}+2R^2b.
$$

On the wedge, $4R^2D_b=4R^2+4RX^1+X^2>0$. The null-tip identities are

$$
(R\pm t)^2-r^2=\frac{2R(X^1\pm X^0)}{D_b}.
$$

The connected wedge contains $X=2Re_1$, which maps to the center, so the image lies in $D$. To invert, set $Y=x-2R^2b$ and use

$$
X=\frac{Y+bY^2}{1+2b\cdot Y+b^2Y^2}.
$$

The inverse denominator is $((R-x^1)^2+|x_\perp|^2-t^2)/(4R^2)>0$ on $D$. The null-tip identities imply $X^1\pm X^0>0$. Differentiation gives the metric pullback $D_b^{-2}\eta$.

<a id="diamond-to-hyperbolic-cylinder"></a>

### The hyperbolic cylinder

On $\mathbb R\times H^{d-1}$ put $v=\tau/R$. Use the map

$$
t=\frac{R\sinh v}{\cosh u+\cosh v},\qquad
r=\frac{R\sinh u}{\cosh u+\cosh v},\qquad
r\pm t=R\tanh\!\left(\frac{u\pm v}{2}\right).
$$

The angular coordinates are unchanged. The inverse takes $\operatorname{artanh}((r\pm t)/R)$ and adds or subtracts the results. The Minkowski metric pulls back to

$$
(\cosh u+\cosh v)^{-2}
\left[-d\tau^2+R^2\left(du^2+\sinh^2u\,d\Omega_{d-2}^2\right)\right].
$$

For $d=2$, two radial directions from the center give the full hyperbolic line. Conformal covariance supplies the net isomorphism, including Weyl weights in a field description. Transporting the state then gives the smeared correlation functions.

<a id="geometric-flow"></a>

### The modular flow and charge

The unit future boost pushes forward to $R\partial_\tau$. In Minkowski coordinates,

$$
\partial_\tau=\frac{1}{2R^2}\left[(R^2-t^2-r^2)\partial_t-2tr\partial_r\right].
$$

This follows by differentiating the wedge map or the diamond null-coordinate flow. On $t=0$, it fixes the formal one-sided dimensionless stress-tensor generator, up to scalar and regulator-dependent terms:

$$
2\pi\int_{r\lt R}\frac{R^2-r^2}{2R}\,T_{00}(0,x)\,d^{d-1}x.
$$

The continuum modular implementer is the two-sided operator on the vacuum representation.

<a id="theorem-3-1"></a>

### Theorem 3.1. Physical inverse temperature

With these hypotheses, the transported state on the hyperbolic cylinder is Kubo–Martin–Schwinger (KMS) at $\beta=2\pi R$ for future $\tau$-translations.

<a id="proof-3-1"></a>

**Proof.** The two algebra transports give $\sigma_s=\alpha_{-2\pi Rs}$. For analytic elements, the modular boundary identity is $\omega(A\sigma_{-i}(B))=\omega(BA)$. Rescaling the modular strip gives a KMS strip of width $2\pi R$ for $\omega(A\alpha_\tau(B))$, with the reversed product on the upper edge. The algebraic proof controls the combined boundary values. It requires no separate analytic continuation of individual Weyl factors in field coordinates.

<a id="type-iii-and-split"></a>

### What thermality does not supply

If the diamond algebra is type III, it has no intrinsic density matrix defined with a normal semifinite trace. A split inclusion, where available, can supply a type I intermediate algebra for a separated inner diamond. On a type I factor with a faithful reduced density matrix $\rho$, modular action reduces to $\rho^{is}A\rho^{-is}$. In a cyclic and separating purification with nonzero Schmidt weights $p_i$, the modular eigenvalues in the Schmidt matrix-unit basis are $p_i/p_j$. This gives the precise link to finite modular readouts in the Canonical Spectral-Curvature Field [4](/source-readout/modular-transport/05-geometric-checks-and-references#ref-cscf).

The choice of type I factor and finiteness of its entropy require separate control. The continuum KMS result alone supplies neither a thermal trace nor a finite partition function on the infinite hyperbolic volume.



## Bulk horizon geometry and the counting cutoff

<a id="section-4"></a>

## 4. Bulk realization and horizon entropy

Assume a classical AdS dual of radius $L$ for the boundary vacuum. Choose the boundary frame through the bulk defining function, and assume the thermal entropy of the dual saddle is its stationary horizon entropy at leading bulk semiclassical order. Write $h=\sqrt{\rho^2-L^2}$ for $\rho>L$.

<a id="bulk-coordinate-map"></a>

The hyperbolic chart maps to Poincaré coordinates by

$$
Q=\rho\cosh u+h\cosh(\tau/R),\qquad z_P=\frac{RL}{Q},\qquad
t=\frac{Rh\sinh(\tau/R)}{Q},\qquad r=\frac{R\rho\sinh u}{Q}.
$$

Substitution into $L^2z_P^{-2}(dz_P^2-dt^2+dr^2+r^2d\Omega_{d-2}^2)$ gives

$$
ds^2=\frac{d\rho^2}{f(\rho)}-f(\rho)\,d\widetilde{\tau}^{\,2}+\rho^2dH_{d-1}^2,\qquad
f(\rho)=\frac{\rho^2}{L^2}-1,\qquad \widetilde{\tau}=\frac{L\tau}{R}.
$$

As $\rho\to\infty$ the map recovers the boundary conformal map. The inverse radial relation is

$$
\rho^2-L^2=\frac{L^2}{4R^2z_P^2}
\left[(R-t)^2-r^2-z_P^2\right]\left[(R+t)^2-r^2-z_P^2\right].
$$

Both factors are positive on the exterior connected to the boundary diamond. Its null boundaries meet on $t=0,\ r^2+z_P^2=R^2$. The chart therefore reads a wedge of the same pure AdS geometry. The bulk Killing generator restricts to the same future boundary flow, with the $z_P\partial_{z_P}$ term included before restriction. Euclidean smoothness requires period $4\pi/f'(L)=2\pi L$ in $\widetilde{\tau}$, giving $2\pi R$ in $\tau$. Independently, the surface gravity for $\partial_\tau$ is $1/R$.

<a id="wald-density"></a>

### Stationary entropy density

For a local Lagrangian scalar $\mathcal L(g,R_{abcd})$, the stationary prescription is [8](/source-readout/modular-transport/05-geometric-checks-and-references#ref-wald)

$$
S=-2\pi\int_\Sigma\sqrt{\gamma}\,\frac{\partial\mathcal L}{\partial R_{abcd}}\epsilon_{ab}\epsilon_{cd},
\qquad \epsilon_{ab}\epsilon^{ab}=-2.
$$

In Einstein gravity the contraction is $-1/(8\pi G)$, giving area divided by $4G$, in agreement with the spherical Ryu–Takayanagi surface [9](/source-readout/modular-transport/05-geometric-checks-and-references#ref-rt). In Gauss–Bonnet gravity with coefficient $\lambda L_0^2/[(d-2)(d-3)]$ inside the Einstein normalization, take $d\ge4$, $f_\infty=L_0^2/L^2$ and $1-f_\infty+\lambda f_\infty^2=0$. The induced section has scalar curvature $-(d-1)(d-2)/L^2$. The stationary entropy density is $1/(4G)$ times $1+2\lambda L_0^2\mathcal R_\Sigma/[(d-2)(d-3)]$ [10](/source-readout/modular-transport/05-geometric-checks-and-references#ref-jm). Hence

$$
a_d^*=\frac{\pi^{d/2}L^{d-1}}{8\pi G\Gamma(d/2)}
\left(1-\frac{2(d-1)\lambda f_\infty}{d-3}\right).
$$

The independent curvature contraction agrees with this density. Identifying it with the definition through the on-shell AdS Lagrangian uses the vacuum equation. The calculation concerns stationary spherical horizons. It makes no general claim about entropy functionals on arbitrary entangling surfaces.

<a id="section-5"></a>

## 5. Counting and matching the cutoffs

<a id="bulk-and-cft-cutoffs"></a>

At the bifurcation surface, $z_P=R/\cosh u$. Thus $z_P=\delta$ gives $\cosh u_{\mathrm{bulk}}=R/\delta$. At boundary time $\tau=0$, the map gives $r=R\tanh(u/2)$, so the sharp radius $r=R-\delta$ gives $e^{-u_{\mathrm{CFT}}}=\delta/(2R-\delta)$. Write $\varepsilon=\delta/R$. In the common variable $X=\sinh u_{\max}$,

$$
X_{\mathrm{bulk}}=\varepsilon^{-1}\sqrt{1-\varepsilon^2},\qquad
X_{\mathrm{CFT}}=\varepsilon^{-1}\frac{2(1-\varepsilon)}{2-\varepsilon}.
$$

Both give $e^{-u_{\max}}\sim\varepsilon/2$. In that variable the bulk prescription minus the CFT prescription is $-\varepsilon^2/4+O(\varepsilon^4)$.

<a id="tube-and-aperture"></a>

### The tube and the algebra it generates

The spatial cutoff applied for every $\tau$ defines a timelike tube $U$ in the diamond. It contains the entire open axis segment $r=0,\ |t|<R$. A point $(t_0,r_0)$ is spacelike to that segment precisely when $r_0\ge R+|t_0|$, with the usual open-region convention for causal complements. By inclusion, the double causal complement of the tube has interior $D$.

The timelike envelope can also be found directly. For each $p=(t,x)\in D$, take two axis points in $U$, one strictly to its timelike past and one strictly to its timelike future. The line segments through $p$ give a piecewise timelike curve. Contracting the spatial component linearly to the axis keeps the endpoints fixed and preserves timelikeness. Smooth the corners within the open timelike cones. This puts $p$ in the timelike envelope of $U$. Conversely, a future timelike curve between points of $U$ remains in the causally convex diamond.

Under the hypotheses of the applicable timelike-tube theorem [7](/source-readout/modular-transport/05-geometric-checks-and-references#ref-tube), this gives $\mathcal A(U)=\mathcal A(D)$. The smaller diamond of radius $R-\delta$ shares the tube's spatial section at $\tau=0$, but its full image under conformal transport has finite time extent. The shared section does not identify their spacetime apertures or specify regulated traces. Even the smaller diamond's algebra remains type III under the same net hypothesis.



## Which entropy coefficients survive a cutoff change?

<a id="section-6"></a>

## 6. Universal coefficients and a finite-jet criterion

<a id="entropy-integral"></a>

The stationary Wald density is constant on the hyperbolic horizon. Multiplying it by the regulated horizon volume and changing variables to $x=\sinh u$ gives

$$
\begin{aligned}
S&=P_d I_d(X),\
P_d&=\frac{2\pi a_d^*}{\pi^{d/2}}\,\Gamma(d/2)\operatorname{Vol}(S^{d-2}),\
I_d(X)&=\int_0^X\frac{x^{d-2}}{\sqrt{1+x^2}}\,dx.
\end{aligned}
$$

In Einstein gravity $P_d=L^{d-1}\operatorname{Vol}(S^{d-2})/(4G)$. For $d>2$ the leading term is $P_d X^{d-2}/(d-2)$, the regulated area law.

<a id="universal-log-and-constant"></a>

### The even logarithm and the odd constant

For even $d=2m$, expand the integrand at large $x$. The coefficient of $x^{-1}$ is $(-1)^{m-1}\binom{2m-2}{m-1}/4^{m-1}$. Multiplying by $P_d$ and using gamma duplication reduces this to $(-1)^{m-1}4a_d^*$. This is the coefficient of the logarithm, including $d=2$ where $a_2^*=c/12$.

For odd $d=2n+3$, take $y=\sqrt{1+x^2}$. Then

$$
I_d(X)=\int_1^{\sqrt{1+X^2}}(y^2-1)^n\,dy.
$$

The antiderivative has only odd powers of $y$. At the upper endpoint each such power expands in odd powers and inverse odd powers of $X$, so that endpoint contributes no constant. The lower endpoint gives $-(-1)^n\int_0^1(1-y^2)^n\,dy$. Evaluating this beta integral and multiplying by $P_d$ gives $(-1)^{(d-1)/2}2\pi a_d^*$.

<a id="theorem-6-1"></a>

### Theorem 6.1: What survives a cutoff substitution

Let $X=g(\varepsilon)/\varepsilon$, with $g$ analytic at zero and $g(0)=1$. In even dimension the logarithmic coefficient of $P_d I_d(X)$ is invariant. In odd dimension the change in the constant relative to $g=1$ is

$$
\begin{aligned}
\Delta S_0
&= P_d\sum_{k=0}^{(d-3)/2}
\frac{b_k}{d-2-2k}[\varepsilon^{d-2-2k}]\,g(\varepsilon)^{d-2-2k},\\
b_k&=(-1)^k\binom{2k}{k}4^{-k}.
\end{aligned}
$$

Here $[\varepsilon^p]$ extracts the coefficient of $\varepsilon^p$ in the analytic series that follows it.

<a id="proof-6-1"></a>

**Proof.** Integrating the large-$x$ expansion gives divergent powers $X^p$ with $p=d-2-2k>0$ and coefficients $b_k/p$. In even dimension, $\log X=\log(1/\varepsilon)+\log g$. The second term is analytic at zero and the power terms have Laurent expansions. Neither can shift the logarithmic coefficient. In odd dimension, $X^p=\varepsilon^{-p}g^p$ contributes precisely $[\varepsilon^p]g^p$ to the constant. The remainder vanishes at large $X$, so contributes no shift.

<a id="cutoff-cancellation-examples"></a>

### What the criterion permits

At a fixed odd dimension the constant survives exactly when the sum vanishes. An even $g$ is sufficient because every positive $p$ in the sum is odd. Evenness is stronger than necessary for one dimension. For example, $g=1+\varepsilon^3$ preserves the constant in $d=3$. In $d=5$ write

$$
g(\varepsilon)=1+a_1\varepsilon+a_2\varepsilon^2+a_3\varepsilon^3+O(\varepsilon^4).
$$

The shift in units of $P_5$ is $a_3+2a_1a_2+a_1^3/3-a_1/2$, which vanishes for $g=1+\varepsilon+\varepsilon^3/6$. Only the Taylor coefficients through order $d-2$ matter.

If a single analytic $g$ must preserve the constants in every odd dimension with nonzero $a_d^*$, evenness is necessary as well. If the first nonzero odd Taylor coefficient has order $j$, choose $d=j+2$. Every term with $p<j$ asks for an odd coefficient that vanishes. The term $p=j$ contributes exactly $P_d[\varepsilon^j]g$, which is nonzero. This proves necessity across those dimensions.

<a id="three-dimensional-substitution"></a>

### The two sharp cutoffs in three dimensions

For the sharp CFT map in [the cutoff comparison](/source-readout/modular-transport/03-bulk-and-cutoffs#bulk-and-cft-cutoffs), $g'(0)=-1/2$. The bulk map is even. In $d=3$, the bulk prescription gives $-2\pi a_3^*$, while inserting the sharp CFT cutoff into the same horizon integral gives $-3\pi a_3^*$.

These are two substitutions into one fixed functional. An independent field-theory calculation would also have to specify the regulated observable and its boundary contributions. The shifted number does not identify a universal CFT entropy.



## Anomaly check, geometric appendix and references

<a id="section-7"></a>

## 7. The anomaly check and verification

<a id="sphere-anomaly-check"></a>

For even $d$, CHM's separate CFT calculation maps the diamond to the static de Sitter patch and continues it to the round Euclidean sphere. One form of the map is

$$
t=\frac{R\cos\theta\sinh(\tau/R)}{1+\cos\theta\cosh(\tau/R)},\qquad
r=\frac{R\sin\theta}{1+\cos\theta\cosh(\tau/R)}.
$$

Regularity gives Euclidean period $2\pi R$. The integrated Killing energy is finite, since its radial integral is proportional to

$$
\int_0^{\pi/2}\cos\theta\sin^{d-2}\theta\,d\theta=\frac{1}{d-1}.
$$

The round sphere is conformally flat and its normalized Euler integral is two. In CHM's anomaly convention, the scale derivative of $\log Z$ is $4(-1)^{d/2-1}A$. With $a_d^*=A$, this recovers the same logarithmic coefficient as the horizon calculation, independently of the bulk cutoff substitution [1](#ref-chm), [11](#ref-ms).

<a id="four-dimensional-boundary-term"></a>

In $d=4$, the hyperbolic energy term alone has coefficient $-(3a+c)/2$ in front of $\log(R/\delta)$. The full $-4a$ therefore requires an additional $(c-5a)/2$ in the same convention. A sharp volume truncation alone does not supply that boundary contribution.

<a id="archived-verification"></a>

### What the paper checks independently

The verification recorded in the paper checks the conformal maps and inverses, boost orientation, cutoff relations, bulk Killing generator, surface gravity, Einstein and Gauss–Bonnet densities, entropy coefficients and anomaly arithmetic. It keeps deliberate failure controls, including comparisons of off-shell actions and cutoff substitutions that move the odd-dimensional constant.

The paper reports that a fresh extraction reproduced all 130 recorded outcomes: 106 exact symbolic checks, 13 numerical diagnostics and 11 expected failures. These finite checks supplement the dimension-independent proofs. Necessity across odd dimensions follows from the first nonzero odd Taylor coefficient argument, and exact expansion of the original integral also checks the fixed-dimension cancellation example.

<a id="section-8"></a>

## 8. What the construction recovers

Under the declared CFT and holographic hypotheses, the spherical CHM chain is a concrete example of the source–readout architecture. At the continuum level the local vacuum and hyperbolic thermal state agree through their observable algebras and geometric evolutions. The bulk chart recovers the time normalization. The horizon entropy enters once the classical dual and counting prescription are supplied.

An algebraic aperture determines which observables are read. A counting regulator specifies a separate operation on the entropy calculation. The finite-jet criterion says exactly which coefficient survives a change of cutoff and which can move. A further test is to compare a regulated observable defined by mutual information against the horizon prescription, including its finite odd-dimensional term.

<a id="appendix-a"></a>

## Appendix A. Geometric checks and normalization

<a id="null-coordinate-flow"></a>

Set $x_\pm=r\pm t$. Translating hyperbolic cylinder time by $R\eta$ induces

$$
x_\pm\longmapsto R\frac{x_\pm/R\pm\tanh(\eta/2)}
{1\pm(x_\pm/R)\tanh(\eta/2)}.
$$

The inverse takes $\eta$ to $-\eta$, and the composition law follows by adding rapidities. Interpret the radial expression with angular continuation through the origin.

<a id="bulk-killing-and-period"></a>

The corresponding forward bulk generator is

$$
\zeta=\frac{(R^2-t^2-r^2-z_P^2)\partial_t-2t(x\cdot\nabla_x+z_P\partial_{z_P})}{2R^2}.
$$

Its Lie derivative of the flat metric in Poincaré coordinates is $-2t/R^2$ times that metric. Its derivative of the warp factor is $2t/R^2$ times the warp factor, so the terms cancel and $\zeta$ is Killing.

Near the horizon put $\rho=L+\xi^2/(2L)$. The leading Euclidean radial and time metric is $d\xi^2+\xi^2d\widetilde{\tau}_E^2/L^2$, fixing the smooth period.

<a id="chm-cylinder-conventions"></a>

### Conventions for the maps

In the wedge map used here, the conformal parameter sends the right wedge to the diamond. The parameter of $\Delta^{is}$ runs opposite to forward geometrical time in the declared Heisenberg convention, and the bulk time is $\widetilde{\tau}=L\tau/R$. For cap opening $\theta_0$, the first form of equation (2.36) in the cylinder variant of CHM [1](#ref-chm) reads

$$
\Omega^2=\frac{\sin^2\theta_0}
{(\cosh u+\cos\theta_0\cosh v)^2+\sin^2\theta_0\sinh^2v},
\qquad v=\frac{\tau}{R_{\mathrm{hyp}}}.
$$

Here $R_{\mathrm{hyp}}$ is the hyperbolic time scale of that map. These choices preserve the physical temperature and the entropy coefficients.

<a id="references"></a>

## References

<a id="ref-chm"></a>

**[1]** H. Casini, M. Huerta and R. C. Myers, *Towards a derivation of holographic entanglement entropy*, JHEP 05 (2011) 036. [10.1007/JHEP05(2011)036](https://doi.org/10.1007/JHEP05%282011%29036).

<a id="ref-architecture"></a>

**[2]** J. Rodgers, *A Source-to-Readout Architecture for a Theory of Everything*. [10.5281/zenodo.21366204](https://doi.org/10.5281/zenodo.21366204).

<a id="ref-transport"></a>

**[3]** J. Rodgers, *Transport and Projective Reduction in a Source–Readout Derivation of Einstein Gravity*. [Web reading edition](/source-readout/transport-projective) · [10.5281/zenodo.23954887](https://doi.org/10.5281/zenodo.23954887).

<a id="ref-cscf"></a>

**[4]** J. Rodgers, *The Canonical Spectral-Curvature Field: A Unified Operator Origin for Coherence, Dissipation, and Spectral Budgets*. [10.5281/zenodo.23899458](https://doi.org/10.5281/zenodo.23899458).

<a id="ref-bw"></a>

**[5]** J. J. Bisognano and E. H. Wichmann, J. Math. Phys. 16 (1975) 985 and 17 (1976) 303.

<a id="ref-hl"></a>

**[6]** P. D. Hislop and R. Longo, *Modular structure of the local algebras associated with the free massless scalar field theory*, Commun. Math. Phys. 84 (1982) 71.

<a id="ref-tube"></a>

**[7]** A. Strohmaier and E. Witten, *The timelike tube theorem in curved spacetime*, [arXiv:2303.16380](https://arxiv.org/abs/2303.16380).

<a id="ref-wald"></a>

**[8]** R. M. Wald, *Black hole entropy is the Noether charge*, Phys. Rev. D 48 (1993) R3427.

<a id="ref-rt"></a>

**[9]** S. Ryu and T. Takayanagi, *Holographic derivation of entanglement entropy from the anti-de Sitter space/conformal field theory correspondence*, Phys. Rev. Lett. 96 (2006) 181602.

<a id="ref-jm"></a>

**[10]** T. Jacobson and R. C. Myers, *Black hole entropy and higher curvature interactions*, Phys. Rev. Lett. 70 (1993) 3684.

<a id="ref-ms"></a>

**[11]** R. C. Myers and A. Sinha, *Holographic c-theorems in arbitrary dimensions*, JHEP 01 (2011) 125.

