# Second-Order Detection by Boundary Balls in a Source–Readout Architecture

An explicit transverse AdS perturbation has zero first-order area and energy variations on the fixed-slice balls. The same balls register positive bulk canonical energy at second order. A boundary relative-entropy interpretation adds a holographic dictionary and an admissible state family.

Jeremy Rodgers · 2026-11-06

DOI: https://doi.org/10.5281/zenodo.24021664



## Same balls, different response orders

<a id="abstract"></a>
## A perturbation the same balls can detect

Every rest-frame ball on one boundary time slice can miss a nonzero metric perturbation at first order. The same balls can detect it at second order. In Poincaré AdS$_4$, an explicit transverse vacuum tangent has zero linear area and energy variations for every such ball, but [strictly positive wedge canonical energy at every radius](/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy). A fixed-surface estimate proves positivity even without solving for the surface displacement. An independent symplectic calculation checks the exact expression at two radii, and a bounded oscillatory tangent gives a second comparison.

Read this edition alongside [Boundary Ball Readouts and Linearized Einstein Gravity](/source-readout/boundary-ball-readouts), particularly its [fixed-frame kernel](/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel). The two results isolate the effect of changing the order of response while holding the regions fixed. The positive response here is a result in classical gravity. Identifying it with a boundary relative-entropy Hessian also requires the holographic dictionary and an admissible state family.

<a id="section-1"></a>
## 1. Fix the regions before changing the question

The entanglement first law relates the first variations of modular energy and area to the bulk linearized Einstein equations [[2]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-2). That relation does not by itself reconstruct a metric. All centres and radii on one boundary time slice test the Hamiltonian constraint on the associated bulk slice; a nonzero on-shell mode can nevertheless give zero for each readout individually [[3]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-3). Lashkari and Van Raamsdonk relate a ball's relative-entropy Hessian to the canonical energy of its AdS-Rindler wedge [[1]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-1). Here the comparison uses two orders of response on the same family of wedges in the classical vacuum Einstein branch. The first tangent has normalizable falloff on each wedge and gives an exact polynomial response in the radius. The oscillatory tangent tests whether detection persists beyond that polynomial preparation.

In source–readout terms, the reference solution and metric tangent are common source data. For a nonlinear family derivative, the preparation must also supply an admissible completion. The ball selects a wedge, boundary port and extremal surface. Charge and area variations are the readouts. Holding the tangent and balls fixed puts the first-order kernel and the quadratic response on a common domain. The Einstein dynamics and the holographic identification enter separately as physical premises.

<a id="section-2"></a>
## 2. Geometry, preparation and readouts

Take signature $(-,+,\ldots,+)$ and cosmological constant $\Lambda=-d(d-1)/(2\ell^2)$, with $d$ the boundary spacetime dimension. The reference metric and vacuum Einstein residual are

<a id="eq-1"></a>

$$
\bar g=\frac{\ell^2}{z^2}(-dt^2+dz^2+d\mathbf{x}^2),\qquad
\mathcal F_{ab}(g)=G_{ab}(g)+\Lambda g_{ab}.
\tag{1}
$$

Let $B$ have radius $R$ and centre $\mathbf{x}_0$ at $t=0$. Write $r=|\mathbf{x}-\mathbf{x}_0|$. Its bifurcation surface $\widetilde B$ is the hemisphere $z^2+r^2=R^2$ and $\Sigma_B$ is the enclosed bulk half-ball. Its reference Killing field is

<a id="eq-2"></a>

$$
\xi_B=\frac{\pi}{R}\big[(R^2-t^2-z^2-r^2)\partial_t
-2t(z\partial_z+(\mathbf{x}-\mathbf{x}_0)\cdot\nabla_{\mathbf{x}})\big].
\tag{2}
$$

The surface gravity is $2\pi$. In this normalization, the regulated CFT vacuum has one-sided modular charge

<a id="eq-3"></a>

$$
K_B=2\pi\int_{r<R}\frac{R^2-r^2}{2R}\,T_{tt}\,d^{d-1}x+\text{constant}.
\tag{3}
$$

The conformal vacuum ball construction behind this formula is described in [[4]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-4). The full modular generator also acts on the complementary region.

<a id="family-conditions"></a>
### Conditions for a family derivative

Write $g_\lambda=\bar g+\lambda h+\tfrac12\lambda^2 k+o(\lambda^2)$. The conformal boundary metric is fixed. The variations have source-free Fefferman–Graham falloff, enough differentiability and regularity up to the wedge boundaries in their respective gauges, and convergent regulated boundary expressions. Keep the perturbed extremal surface anchored at the same entangling sphere. The gauge shift must give no term at the conformal boundary. The examples use explicit first-order displacement falloffs: $O(z^3)$ in AdS$_4$ and $O(z^2)$ in the AdS$_3$ benchmark.

Set $F_B=E_B^{\mathrm{grav}}-A_B/(4G)$ with vacuum constants subtracted, taking $A_B$ on the extremal surface. A classical vacuum family through second order must satisfy

<a id="eq-4"></a>

$$
D\mathcal F[h]=0,\qquad D\mathcal F[k]+D^2\mathcal F[h,h]=0.
\tag{4}
$$

The quadratic form is evaluated on a linearized solution. Calling it the derivative of an actual vacuum family additionally requires a completion satisfying (4) on the relevant domain. Background divergence-freeness of the quadratic source checks compatibility. It does not establish global existence of the completion.



## Two evaluations of the gravitational Hessian

<a id="section-3"></a>
## 3. The second-order identity

<a id="section-3-1"></a>
### 3.1 Covariant phase space

For the Einstein Lagrangian $L=(\mathcal R-2\Lambda)\epsilon/(16\pi G)$, let $\epsilon$ denote the metric volume form. Its index contractions are $\epsilon_a$ and $\epsilon_{ab}$. The phase-space potential, Noether charge and symplectic current are

<a id="eq-5"></a>

$$
\Theta(g;v)=\frac{1}{16\pi G}(\nabla_b v^{ab}-\nabla^a v^b{}_b)\epsilon_a.
\tag{5}
$$

<a id="eq-6"></a>

$$
Q_X=-\frac{1}{16\pi G}\nabla^a X^b\epsilon_{ab},\qquad
\chi(v;X)=\delta_v Q_X-\iota_X\Theta(g;v).
\tag{6}
$$

<a id="eq-7"></a>

$$
\omega(g;v,w)=\delta_v\Theta(g;w)-\delta_w\Theta(g;v).
\tag{7}
$$

These conventions follow [[6]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-6), [[1]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-1). Orient $W_{\Sigma_B}$ to agree with the charge: in coordinates the bulk term on the future slice integrates the densitized time component of the symplectic current. This pairing induces the boundary orientations.

<a id="theorem-3-1"></a>
**Theorem 3.1 (Gravitational Hessian).** For a family satisfying the [boundary, regularity and vacuum conditions](/source-readout/second-order-boundary-balls/01-readouts-and-geometry#family-conditions), the Hessian is

<a id="eq-8"></a>

$$
F_B''(0)=\mathcal E_B(h)=W_{\Sigma_B}(\gamma,\mathcal L_{\xi_B}\gamma).
\tag{8}
$$

Here $\gamma=h+\mathcal L_V\bar g$ keeps the extremal surface fixed and satisfies the linearized Hollands–Wald conditions there. In a boundary-preserving representative $h$, add to the bulk symplectic pairing the oriented integral over $\widetilde B$ of

<a id="eq-9"></a>

$$
\rho(h,V)=\chi(h+\mathcal L_V\bar g;[\xi_B,V])-\chi(\mathcal L_{\xi_B}h;V).
\tag{9}
$$

<a id="proof-3-1"></a>
**Proof.** Vary the Noether current holding $\xi_B$ fixed. On shell the charge variation is the boundary integral of $\chi$ and the bulk variation is $\omega(g_\lambda;\partial_\lambda g_\lambda,\mathcal L_{\xi_B}g_\lambda)$. The outer term varies $E_B^{\mathrm{grav}}$. At the inner surface, $\xi_B$ vanishes and its normal boost has surface gravity $2\pi$; in surface-fixed gauge this term varies the area divided by $4G$. Off shell there are also Einstein and constraint residuals. [Equation (4)](/source-readout/second-order-boundary-balls/01-readouts-and-geometry#eq-4) removes those residuals to the required order. When the resulting identity is differentiated at $\bar g$, every term containing $\mathcal L_{\xi_B}\bar g$ vanishes, leaving the pairing of two first variations.

To recover the expression in $h$, commute Lie derivatives using $\mathcal L_{\xi_B}\bar g=0$: $\mathcal L_{\xi_B}\mathcal L_V\bar g=\mathcal L_{[\xi_B,V]}\bar g$. For an on-shell tangent $v$ and general $X$, $\omega(\bar g;v,\mathcal L_X\bar g)=d\chi(v;X)$. Use this identity on the gauge terms in the expanded pairing, and use antisymmetry when a gauge term occupies the first slot. The difference of the pairings is the integral of $d\rho$. The boundary condition on $V$ kills its contribution at $z=0$; the term at $\widetilde B$ is the integral of (9). In surface-fixed gauge the mixed normal–tangential metric variations vanish and the normal block is boost invariant. Together with the first variation of extremality, which determines the normal displacement, these conditions supply the surface data in (9). $\square$

<a id="relative-entropy"></a>
### The conditional boundary interpretation

The stress-tensor and HRT dictionary [[5]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-5), [[1]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-1) identifies $F_B$ to this order with $D(\rho_B(\lambda)\|\rho_B(0))$ for a state family with twice differentiable relative entropy. Use the second derivative as the convention for Fisher information. At a faithful regulated density matrix $\sigma$, let $u$ be a trace-zero tangent. Differentiating the logarithm gives

<a id="eq-10"></a>

$$
I_\sigma(u)=\int_0^\infty\operatorname{Tr}
\big[u(\sigma+s)^{-1}u(\sigma+s)^{-1}\big]\,ds.
\tag{10}
$$

The quadratic Taylor coefficient is $I_\sigma(u)/2$. The relative entropy has vanishing first derivative at the reference state, so the second-order state correction drops out of the Hessian. The continuum version needs the corresponding dictionary and a well-defined Hessian of relative entropy for states on the local algebra.

<a id="section-3-2"></a>
### 3.2 Remove the second-order metric

In the same orientation, the linear charge–area identity is

<a id="eq-11"></a>

$$
DF_B[v]=\frac{1}{8\pi G}\int_{\Sigma_B}\xi_B^t\,D\mathcal F_{tt}[v]\,(\ell/z)^{d-1}\,dz\,d^{d-1}x.
\tag{11}
$$

This identity is off shell. The first shape derivative of the reference hemisphere vanishes for fixed anchors, so the area variation uses the reference surface. For the fixed flat boundary the charge depends linearly on the normalizable coefficient. Apply (11) to $k$ and replace $D\mathcal F[k]$ using [the second-order vacuum condition](/source-readout/second-order-boundary-balls/01-readouts-and-geometry#eq-4). The result is

<a id="eq-12"></a>

$$
\mathcal E_B(h)=-\frac{1}{4G}A''_{\mathrm{ext}}[h]
-\frac{1}{8\pi G}\int_{\Sigma_B}\xi_B^t\,D^2\mathcal F_{tt}[h,h]\,(\ell/z)^{d-1}\,dz\,d^{d-1}x.
\tag{12}
$$

$A''_{\mathrm{ext}}[h]$ is evaluated on the affine path $\bar g+\lambda h$ with the first-order motion of the extremal surface included. One can obtain (12) on that path directly: the differentiated Noether identity expresses the charge–area Hessian as canonical energy plus the curvature integral in (12) with a positive prefactor. The sign follows from (11), and terms proportional to the background or first-order residual vanish. So (12) computes the wedge quadratic form on a linearized solution without constructing $k$ or computing a second-order symplectic current. The interpretation as an actual vacuum family derivative still needs a completion.

<a id="shape-hessian"></a>
### The fixed-anchor shape problem

On a reflection-symmetric slice let $w$ be the spatial displacement, $A_{gg}$ the fixed-surface metric Hessian, $M[w]$ the mixed metric–shape derivative and $Q[w]$ the shape Hessian. The linearized extremality solution $w_*$ gives

<a id="eq-13"></a>

$$
A''_{\mathrm{ext}}[h]=A_{gg}+\min_w\{2M[w]+Q[w]\}=A_{gg}-Q[w_*].
\tag{13}
$$

The hemisphere is totally geodesic in the hyperbolic slice. For proper normal displacement $u$ in the fixed-anchor domain its shape Hessian is

$$
\int_{\widetilde B}\left(|\nabla u|^2+\frac{d-1}{\ell^2}u^2\right)dA.
$$

This is nonnegative, and any admissible trial displacement yields a lower bound on (12). The minimization is on the time-reflection slice. A general Lorentzian extremal-area problem also has a timelike variation.



## The same-ball detection theorem

<a id="section-4"></a>
## 4. Detection at every radius

<a id="all-radii-canonical-energy"></a>
**Theorem 4.1 (All-radii same-ball detection).** In AdS$_4$ with $G=\ell=1$, take $h_{xy}=h_{yx}=z(t^2+z^2/5+1/3)$ and set the other components to zero. For every rest-frame ball at $t=0$, both first-order readouts vanish. Its wedge canonical energy is

<a id="eq-14"></a>

$$
\mathcal E_B(h)=\frac{\pi R^6}{138600}(29R^4+110R^2+165)>0,\qquad R>0.
\tag{14}
$$

The result is wedge-local. If an admissible vacuum family has this tangent on the wedge, (14) gives its $F_B''(0)$.

<a id="proof-4-1"></a>
**Proof: the first-order cancellation.** Write $h_{xy}=zH(t,z)$. The linearized vacuum equation reduces to $H_{tt}-H_{zz}-4H_z/z=0$. For the polynomial, both $H_{tt}$ and $H_{zz}+4H_z/z$ equal $2$. Its boundary normalizable coefficient has no $tt$ component, so the energy variation is zero. In the area variation the hemisphere projector contracts with the shear to give $(x-x_0)(y-y_0)$ times an axially symmetric factor. Reflect either coordinate about its central diameter and the integral changes sign on the same hemisphere. It vanishes. The companion edition derives the more general [fixed-frame linear kernel](/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel).

<a id="polynomial-surface"></a>
**Proof: the extremal-surface response.** The tangent is translation invariant, so compute at the centred ball. In spherical coordinates $(\varrho,\theta,\varphi)$ on the slice, $z=\varrho\cos\theta$. Write the radial graph as $\varrho=R+\lambda w+O(\lambda^2)$ and set $s=\sin\theta$, $c=\cos\theta$. The minimizing first-order displacement is

<a id="eq-15"></a>

$$
w_*=f(\theta)\sin(2\varphi),\qquad f=-\frac{R^4}{120}s^2c^3(2R^2c^2+R^2+5).
\tag{15}
$$

After integrating out the azimuthal dependence, the forced sector satisfies

<a id="eq-16"></a>

$$
R^4(21R^2c^2+25)s^4c^4-30(s^3+s)f'+120cf-30s^2cf''=0.
\tag{16}
$$

Substituting (15) gives zero. Its $O(s^2)$ behaviour at the pole is regular; its $O(c^3)$ behaviour at the anchor keeps the anchors fixed. The positive shape Hessian gives uniqueness in the admissible space.

<a id="polynomial-bulk-and-area"></a>
**Proof: evaluate the bulk and surface terms.** The bulk term in the [second-order charge–area identity](/source-readout/second-order-boundary-balls/02-second-order-identity#eq-12) uses

<a id="eq-17"></a>

$$
\left.D^2\mathcal F_{tt}[h,h]\right|_{t=0}=\frac{z^4}{30}(69z^4+130z^2+45).
\tag{17}
$$

To see the bulk coefficient, use time symmetry: the extrinsic curvature of the slice vanishes along the affine metric path, so the varying part of $\mathcal F_{tt}$ is $z^{-2}\mathcal R^{(3)}/2$, with $\mathcal R^{(3)}$ the scalar curvature of the spatial metric. Rotate $x,y$ by $45^\circ$ to diagonalize the shear. In proper radial coordinate $\sigma=-\log z$, the two transverse scale factors are $a_\pm=z^{-1}\sqrt{1\pm\lambda z^3(z^2/5+1/3)}$. Differentiate the spatial scalar curvature $-2(a_+''/a_++a_-''/a_-+a_+'a_-'/(a_+a_-))$ twice in $\lambda$, with primes here denoting $\sigma$ derivatives, to obtain (17).

At fixed $z$ the transverse disk has radius $\sqrt{R^2-z^2}$. On it $\xi_B^t=\pi(R^2-z^2-r^2)/R$; integrating over the disk gives $\pi^2(R^2-z^2)^2/(2R)$. The fixed-surface term comes from differentiating the induced area density $\sqrt{q_{\theta\theta}q_{\varphi\varphi}-q_{\theta\varphi}^2}$ of the radial graph. With $X=q_0^{-1}\delta q$ on the fixed hemisphere, its second derivative is the reference density times $(\operatorname{tr}X)^2/4-\operatorname{tr}(X^2)/2$. For the shape term, insert the proper normal displacement $w_* /(R c)$ in the [shape Hessian](/source-readout/second-order-boundary-balls/02-second-order-identity#shape-hessian). Denote the bulk integral including its $1/(8\pi)$ prefactor by $I$. The three terms are

<a id="eq-18"></a>

$$
A_{gg}=-\frac{4\pi R^6}{2027025}(3717R^4+15210R^2+16445),
\tag{18}
$$

<a id="eq-19"></a>

$$
Q[w_*]=\frac{\pi R^6}{4054050}(567R^4+2730R^2+3575),
\tag{19}
$$

<a id="eq-20"></a>

$$
I=\frac{\pi R^6}{41580}(69R^4+286R^2+297).
\tag{20}
$$

Then $-A_{gg}/4+Q[w_*]/4-I$ simplifies to (14). $\square$

<a id="fixed-surface-bound"></a>
### Positivity without solving for the surface

Set the trial displacement to zero in [the shape minimization](/source-readout/second-order-boundary-balls/02-second-order-identity#eq-13). This gives a lower bound directly:

<a id="eq-21"></a>

$$
\mathcal E_B(h)\ge -\frac{A_{gg}}4-I
=\frac{\pi R^6}{8108100}(1413R^4+5070R^2+7865)>0.
\tag{21}
$$

The bound holds at every $R>0$. The fixed-surface value is already positive, and allowing the surface to relax adds $Q[w_*]/4$.

<a id="independent-evaluations"></a>
### Independent symplectic evaluations

The direct symplectic calculation uses (15) as the normal gauge data at $\widetilde B$. The mixed and normal-block Hollands–Wald conditions give the required first normal derivatives of the other components. Integrate the current and the [surface correction](/source-readout/second-order-boundary-balls/02-second-order-identity#eq-9). The totals are $38\pi/17325$ at $R=1$ and $8552\pi/17325$ at $R=2$, agreeing with (14). At $R=1$ the bulk and surface split is $\pi/675+37\pi/51975$. Varying the free gauge data leaves the sum unchanged.

For the AdS$_3$ black-brane benchmark from [[1]](/source-readout/second-order-boundary-balls/04-oscillatory-comparison#ref-1), the split in units $G=\ell=1$ is $-2R^4/15+7R^4/45=R^4/45$. This is also the second derivative of the leading relative entropy $\lambda^2R^4/90$ for the exact family. Dropping the surface correction would reverse the benchmark's sign. The vacuum and a boundary-trivial pure-gauge tangent both give zero. The controls check the orientation, the Hessian normalization and cancellation of the gauge-dependent terms.



## Oscillatory shear and the limits of recovery

<a id="section-5"></a>
## 5. A bounded oscillatory comparison

The polynomial theorem gives exact positivity for all radii. To test a bounded boundary shear, take the time-even solution

<a id="eq-22"></a>

$$
h_{xy}=z\cos(\omega t)j(\omega z),\qquad
j(u)=3\frac{\sin u-u\cos u}{u^3},\qquad j(0)=1.
\tag{22}
$$

The regular solution satisfies $j''+4j'/u+j=0$. It is smooth for finite $z>0$, and the same energy and area cancellation applies at first order. The shear is bounded at the boundary. Spatial homogeneity and wedge regularity do not by themselves produce a global finite-norm CFT state family.

<a id="trial-spaces"></a>
### Lower bounds from nested trial spaces

For the evaluation of [canonical energy](/source-readout/second-order-boundary-balls/02-second-order-identity#eq-12), restrict trial displacements to the span of

$$
b_m(\theta,\varphi)=\sin(2\varphi)\sin^2\theta\cos^3\theta(\cos^2\theta)^m,
\qquad 0\le m<N.
$$

Minimizing $2M+Q$ on a subspace bounds its unrestricted minimum from above and hence bounds the response from below. Write $Q_{ij}=Q(b_i,b_j)$ for the bilinear shape form and $M_i=M[b_i]$. The trial contribution to the response is $M^\mathsf{T}Q^{-1}M/(4G)$. As a check, the first two basis functions contain the exact polynomial displacement and give (14) at $R=1$.

<a id="oscillatory-lower-bounds"></a>
### Numerical lower-bound evaluations

The following evaluations use $R=1$ and high-precision quadrature. The formula gives a lower bound, but these numerical values do not come with certified quadrature intervals.

| Frequency–radius product $\omega R$ | Bound, $N=1$ | Bound, $N=3$ |
| ---: | ---: | ---: |
| $1/2$ | 0.032740 | 0.032740 |
| $1$ | 0.030157 | 0.030159 |
| $2$ | 0.022065 | 0.022090 |
| $4$ | 0.009119 | 0.009254 |

Translation invariance extends each entry to all centres for the corresponding parameter choice. The values support detection at the four tested frequency–radius products. The analytic all-radii theorem applies to the polynomial tangent.

<a id="section-6"></a>
## 6. What the readouts recover

Let $M_1$ send a tangent to the collection of pairs $(DE_B,DA_B/(4G))$ on the fixed-slice family, and let $M_2$ assign its canonical energy on those same wedges. The polynomial solution proves

<a id="kernel-comparison"></a>

$$
\ker M_1\not\subset\{h:M_2(h)=0\}.
$$

Its positive response distinguishes it from a boundary-trivial pure-gauge tangent. It does not distinguish $h$ from $-h$ because the response is quadratic. The example detects a transverse component; reconstruction would require more information. There is no general kernel or stability theorem here for $M_2$ restricted to $\ker M_1$.

This is the link between the [first-order kernel](/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel) and [second-order detection](/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy). Where you look matters: selecting more regions, times or frames can change the linear map. The response order matters too: holding the regions and reference state fixed still leaves room for detection through higher variations. Here the charge couples at first order to energy density, and reflection cancels the linear area change. At second order the bulk curvature and surface deformation both contribute to canonical energy.

<a id="boundary-limitations"></a>
### Gravitational data and boundary states

The boundary interpretation requires a compatible CFT state family, differentiable relative entropy and the second-order area and stress-tensor dictionary. The polynomial mode has acceptable near-boundary falloff on each wedge, but grows in the bulk and has unbounded boundary shear in time. The oscillatory mode is bounded at the boundary, but spatially homogeneous. These are gravitational tangents with computed wedge responses. Finite-norm preparations with controlled second-order completion, and the residual kernel of the quadratic map, remain open.

<a id="section-7"></a>
## 7. What the same balls can see

The same balls have zero first-order area and energy variations and positive second-order gravitational response. The exact polynomial calculation proves positivity at every radius, with a fixed-surface lower bound and independent phase-space checks at two radii. The oscillatory comparison preserves the first-order cancellation and gives positive numerical lower-bound evaluations at four parameter values. Where the state and completion hypotheses hold, the boundary observable is the relative-entropy Hessian. The gravitational example shows concretely that a fixed readout can reveal new information when measured at a higher order.

<a id="verification"></a>
## Verification used in the paper

The polynomial calculation uses symbolic curvature, surface differentiation and exact integration. A separate symplectic-current implementation checks the two radii, the black-brane benchmark and gauge controls. The oscillatory calculation uses high-precision quadrature in nested trial spaces. The paper identifies the derivative convention as E1, the symplectic and gauge identities as E2, the benchmark as E3, the controls as E4, the polynomial checks as E5 and E5b–c, and the oscillatory comparison as E6.

<a id="references"></a>
## References

1. <a id="ref-1"></a>N. Lashkari and M. Van Raamsdonk, *Canonical Energy is Quantum Fisher Information*, [arXiv:1508.00897v2](https://arxiv.org/abs/1508.00897v2).
2. <a id="ref-2"></a>T. Faulkner, M. Guica, T. Hartman, R. C. Myers and M. Van Raamsdonk, *Gravitation from Entanglement in Holographic CFTs*, [arXiv:1312.7856v2](https://arxiv.org/abs/1312.7856v2).
3. <a id="ref-3"></a>J. Rodgers, *Boundary Ball Readouts and Linearized Einstein Gravity in a Source–Readout Architecture*, [DOI: 10.5281/zenodo.24019669](https://doi.org/10.5281/zenodo.24019669) · [Reading edition](/source-readout/boundary-ball-readouts).
4. <a id="ref-4"></a>H. Casini, M. Huerta and R. C. Myers, *Towards a derivation of holographic entanglement entropy*, [arXiv:1102.0440](https://arxiv.org/abs/1102.0440).
5. <a id="ref-5"></a>V. E. Hubeny, M. Rangamani and T. Takayanagi, *A covariant holographic entanglement entropy proposal*, [arXiv:0705.0016](https://arxiv.org/abs/0705.0016).
6. <a id="ref-6"></a>S. Hollands and R. M. Wald, *Stability of black holes and black branes*, [arXiv:1201.0463](https://arxiv.org/abs/1201.0463).

