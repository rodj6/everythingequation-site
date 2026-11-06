# Boundary Ball Readouts and Linearized Einstein Gravity in a Source–Readout Architecture

First-order ball data on a fixed boundary slice recover a projected Einstein constraint. The fixed-frame kernel shows why recovering the full field equation needs more frame data and boundary assumptions, and why that recovery is distinct from reconstructing the metric.

Jeremy Rodgers · 2026-11-06

DOI: https://doi.org/10.5281/zenodo.24019669



## One perturbation, two ball readouts

<a id="abstract"></a>

One bulk perturbation supplies both a first area variation and an asymptotic charge for each boundary ball. Their difference integrates the linearized Einstein residual against the ball's Killing weight. Two independent calculations give that identity: one from covariant phase space, one from scalar-curvature variation on the bulk slice. All centers and radii on one slice recover its Hamiltonian constraint. A finite determining family of Lorentz frames, with all slices in each frame, recovers the boundary-index contractions. The Bianchi and Ward identities then complete the local equation. The explicit non-gauge examples below show why recovery of that equation and reconstruction of the metric are different questions.

**Read this edition with [Second-Order Detection by Boundary Balls](/source-readout/second-order-boundary-balls).** Here the [fixed-frame kernel](/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel) exhibits what first variations can miss. The companion's [all-radii canonical-energy result](/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy) shows how the same family of balls can detect a transverse AdS perturbation at second order.

<a id="introduction"></a>

## 1. What the ball first law can recover

Faulkner, Guica, Hartman, Myers and Van Raamsdonk showed that the complete family of ball first laws recovers the linearized gravitational equations about pure AdS for first variations around the vacuum [\[1\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-1). The key identity turns the difference between the two ball readouts into an integral of a local bulk residual. The converse depends on which balls are available and on the conditions at the conformal boundary.

This edition reconstructs the Einstein branch within the source–readout architecture [\[2\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-2). The vacuum ball and its bulk Killing wedge use the normalization from the [spherical modular-transport construction](/source-readout/modular-transport) [\[3\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-3), [\[4\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-4). The family of balls plays a role analogous to the determining null directions of the [local horizon construction](/source-readout/local-horizon-thermodynamics) [\[5\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-5), with spatial inversion as an additional step. The nonlinear spin-two bootstrap through [transport and projective reduction](/source-readout/transport-projective) [\[6\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-6) starts from different input laws and reaches a different endpoint.

The calculation starts with one common off-shell metric tangent. An elementary local inversion shows what the defects recover, and metric-level examples show what restricted ball families miss. The holographic dictionary, the Einstein area prescription and the boundary first law are inputs. We first calculate the charge defect as a geometric observable and then use the dictionary to identify it with the first-law defect. The reconstruction is at first order about pure AdS and at classical bulk order.

<a id="common-source"></a>

## 2. Common source and the ball projections

Use boundary dimension $d\geq 2$, $c=\hbar=1$, and Poincaré coordinates:

$$
\bar g=\frac{L^2}{z^2}(dz^2+\eta_{\mu\nu}\,dx^\mu dx^\nu),
\qquad \Lambda=-\frac{d(d-1)}{2L^2}.
$$

Write $E_{ab}=\delta(G_{ab}+\Lambda g_{ab})$ for the unscaled Einstein residual. The metric tangent $h$ has radial gauge $h_{za}=0$, with $h_{\mu\nu}=z^{d-2}H_{\mu\nu}$ and $H$ locally $C^2$ up to $z=0$. Its boundary value is $H^{(0)}$. The balls are bounded, so this geometric class imposes no global spatial decay. The geometric tests accept arbitrary tangents in that class. To compare a tangent with a CFT state, add the state–geometry dictionary and the flat-space Ward conditions:

<a id="eq-1"></a>

$$
\eta^{\mu\nu}H^{(0)}_{\mu\nu}=0,
\qquad \partial^\mu H^{(0)}_{\mu\nu}=0.
\tag{1}
$$

Those conditions alone do not supply a CFT state for every off-shell test.

<a id="ball-boost"></a>

### One tangent, many apertures

The source history contains the reference state and geometry and their first variations. An aperture is a ball $B$ in a chosen boundary frame together with its background bulk wedge. Each aperture evaluates the same $h$. Set $s=t-t_0$, $y=x-x_0$, and $r=|y|$ in the rest coordinates of $B$. The bulk Killing field is

$$
\xi_B=\frac{\pi}{R}\left[(R^2-s^2-r^2-z^2)\partial_t-2s(y^i\partial_i+z\partial_z)\right].
$$

Its boundary limit is the ball conformal Killing field. It vanishes at the bifurcation hemisphere $\widetilde B$, given by $s=0$ and $r^2+z^2=R^2$. The upper half-ball $\Sigma_B$ is bounded by $B$ and $\widetilde B$. The factor $2\pi R$ relative to hyperbolic time gives surface gravity $2\pi$, the normalization appropriate to the dimensionless modular energy. On the slice the positive lapse is $V=(L/z)\xi_B^t$.

<a id="energy-projection"></a>

### The one-sided energy projection

For a CFT perturbation the energy projection is

$$
\delta E_B^{\mathrm{hol}}=\frac{\pi}{R}\int_B(R^2-r^2)\,\delta\langle T_{tt}\rangle\,d^{d-1}y,
\qquad
\delta\langle T_{\mu\nu}\rangle=\frac{dL^{d-3}}{16\pi G}H^{(0)}_{\mu\nu}.
$$

The weight comes from vacuum ball modular flow. The full vacuum modular implementer includes a complementary action, whereas the first law uses the one-sided variation. With a regulator it is the variation in the expectation of the reference modular Hamiltonian. In the continuum the first law applies to perturbations admitting the relevant first variations, with the relative-entropy derivative vanishing at the reference state. A density matrix for the diamond algebra is unnecessary.

<a id="area-projection"></a>

### The area projection and its cutoff endpoint

At Einstein order the entropy projection is $\delta S_B=\delta A(\widetilde B)/(4G)$. Varying the metric at fixed embedding gives

<a id="eq-2"></a>

$$
\delta A(\widetilde B)=\frac{RL^{d-3}}{2}\int_B z^{2-d}
\left(\delta^{ij}-\frac{y^iy^j}{R^2}\right)h_{ij}\,d^{d-1}y,
\qquad z=\sqrt{R^2-r^2}.
\tag{2}
$$

In the $y$ chart the induced metric is $L^2z^{-2}(\delta_{ij}+y_i y_j/z^2)$. Its inverse is $z^2L^{-2}(\delta^{ij}-y^iy^j/R^2)$ and the volume density is $RL^{d-1}z^{-d}$. The hemisphere is extremal and the time-slice extrinsic curvature vanishes. To apply the same formula to the perturbed extremal surface, the cutoff endpoint term must also vanish. In the $z$ chart the background radius is $r(z)=\sqrt{R^2-z^2}$, giving radial canonical momentum

$$
L^{d-1}z^{1-d}r^{d-2}\frac{r'}{\sqrt{1+(r')^2}}
=-\frac{L^{d-1}}{R}r^{d-2}z^{2-d}.
$$

The time momentum vanishes on the background. At fixed $z$ cutoff with regular angular parametrization, a uniform radial coordinate displacement $o(z^{d-2})$ suffices for the endpoint term to vanish. Assume that falloff for the anchored first variation. It includes the stronger $O(z^{d+1})$ condition used in the construction. For $d=3$ the sufficient criterion is $o(z)$. It does not exclude other ways for the integrated endpoint to vanish, such as cancellations.



## Two proofs of the off-shell charge identity

<a id="off-shell-charge-identity"></a>

## 3. The off-shell charge identity

For arbitrary admissible geometric tangents define the asymptotic spatial charge

$$
\delta E_B^{\mathrm{sp}}=
\frac{dL^{d-3}}{16\pi G}\frac{\pi}{R}
\int_B(R^2-r^2)\sum_i H^{(0)}_{ii}\,d^{d-1}y.
$$

The difference between this charge and the holographic energy is the weighted boundary trace. The trace Ward identity suffices to make the energies equal. Conversely, equality for all balls on a slice implies pointwise vanishing of the trace there: divide by the integral of the weight and take the small-radius limit. Boundary conservation enters later.

<a id="theorem-3-1"></a>

### Theorem 3.1. Defect as a weighted residual

For the stated geometric class, $D_B=\delta S_B-\delta E_B^{\mathrm{sp}}$ obeys

<a id="eq-3"></a>

$$
D_B=-\frac{1}{8\pi G}\int_{\Sigma_B}\xi_B^t E_{tt}(L/z)^{d-1}\,dz\,d^{d-1}y
=-\frac{1}{16\pi G}\int_{\Sigma_B}V\,\delta R[q]\,dv_{\bar q}.
\tag{3}
$$

Here $q$ is the spatial metric variation on $\Sigma_B$ and $\delta R[q]$ is the scalar-curvature variation about $\bar q$ in direction $q$. In another frame the same formula uses the time-time contraction in that frame.

<a id="phase-space-proof"></a>

### Covariant phase-space proof

The Einstein Lagrangian has presymplectic potential $\Theta$ and Noether charge $Q_\xi$:

$$
\Theta=\frac{\epsilon_a}{16\pi G}\left(\bar\nabla_b h^{ab}-\bar\nabla^a h^b{}_b\right),
\qquad Q_\xi=-\frac{\epsilon_{ab}}{16\pi G}\nabla^a\xi^b.
$$

The contracted volume forms and index raising in the displayed background expressions use $\bar g$; the variation of $Q_\xi$ includes its full metric dependence. Define $\chi=\delta Q_\xi-\xi\cdot\Theta$ at fixed $\xi$. The linearized Noether identity about an on-shell background gives

$$
d\chi=-\frac{1}{8\pi G}\xi^a E_{ab}\epsilon^b.
$$

This is the Einstein specialization of the covariant phase-space identity [\[7\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-7), [\[1\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-1). Vary the Noether current and subtract the derivative of $\xi\cdot\Theta$. The symplectic current drops out because $\mathcal L_\xi\bar g=0$.

At the bifurcation surface the pullback gives $\delta A/(4G)$: $\xi=0$ there and its normal boost has surface gravity $2\pi$. At the boundary the limiting pullback density is $\xi_B^t dL^{d-3}\operatorname{tr}_{\mathrm{sp}}H^{(0)}/(16\pi G)$, where $\operatorname{tr}_{\mathrm{sp}}H^{(0)}=\sum_i H^{(0)}_{ii}$. Both the radial derivative of $h$ and the variation of the volume form contribute. Stokes' theorem with charge orientation $\widetilde B-B$ gives the first equality in (3).

<a id="slice-proof"></a>

### Independent slice proof

The spatial metric $\bar q=L^2z^{-2}(dz^2+dy^2)$ is time symmetric. Its Gauss constraint gives $E_{tt}=(L/z)^2\delta R/2$, so the slice constraint depends only on $q$. Let $D$ be the connection of $\bar q$ and define

$$
U^A=V\left(D_Bq^{AB}-D^A\operatorname{tr}q\right)
-q^{AB}D_BV+(\operatorname{tr}q)D^AV.
$$

Integration by parts at the differential level yields

$$
V\delta R-D_AU^A
=q^{AB}\left(D_AD_BV-\bar q_{AB}\Delta V-V\operatorname{Ric}_{AB}\right).
$$

Direct differentiation of $V=(\pi L/Rz)(R^2-r^2-z^2)$ gives $D_AD_BV=V\bar q_{AB}/L^2$. Since $\operatorname{Ric}_{AB}=-(d-1)\bar q_{AB}/L^2$, the right side vanishes. On the hemisphere $V=0$, and its outward derivative is $-2\pi$, so $U\cdot\nu=-2\pi\operatorname{tr}_{\widetilde B}q$.

On the face $z=\varepsilon$ the outward normal is $-z\partial_z/L$. The flux density tends to $dL^{d-3}\xi^t\sum_i H^{(0)}_{ii}$. To see the coefficient, write $\operatorname{tr}q=L^{-2}z^d\sum_i H_{ii}$. Radial gauge gives $D_Bq^{zB}=(z/L^2)\operatorname{tr}q$. The two leading $V$ terms in the flux contribute $d-1$ and $1$ times the same boundary density. The sum of the two surface fluxes is $16\pi G(\delta E_B^{\mathrm{sp}}-\delta S_B)$, proving the second equality in (3) independently of the spacetime form calculation.

The two routes give the same numerical normalization for the same tangent. The slice coefficient depends on the Einstein action normalization and the ball's surface gravity. Substituting the unit hyperbolic-time generator in only one of the charges changes the balance.



## Recovering the local equation

<a id="recovering-the-local-equation"></a>

## 4. From readout data to the local equation

<a id="half-ball-inversion"></a>

### Recover the slice constraint

On a fixed slice put $f=(L/z)^{d-1}E_{tt}$. The radial-gauge falloff makes $f$ continuous up to $z=0$. The Gauss constraint, for example, gives

$$
f=-\frac{L^{d-3}}{2}
\left[z\partial_z^2H_{ii}+(d+1)\partial_zH_{ii}
+z(\partial_i\partial_iH_{jj}-\partial_i\partial_jH_{ij})\right].
$$

In the charge identity, differentiate $R D_B$ with respect to $R$. The boundary contribution at the hemisphere vanishes because $R\xi^t=\pi(R^2-r^2-z^2)$ vanishes there. The derivative removes the nonconstant weight. Zero defect for every center and radius therefore gives zero unweighted integral of $f$ over every half-ball.

A local polynomial argument proves injectivity on the stated class. Suppose the half-ball integrals of $x^\alpha f$ vanish for $|\alpha|\leq n$. Radius differentiation gives the zero hemisphere integrals of the same moments. Differentiating with respect to the center in direction $i$ gives zero hemisphere integrals with an extra factor $(x_i-x_{i0})/R$, the normal velocity of the moving hemisphere. Neither differentiation gets a contribution from the flat face. Combining the two derivatives gives the zero hemisphere moments with the factor $x_i$. Integrating over concentric radii gives the half-ball moments at degree $n+1$. Degree zero starts the induction.

On the closed upper hemisphere, horizontal polynomials separate points because $z=\sqrt{R^2-r^2}$. The polynomials are dense in its continuous functions, so the finite signed measure $f\,dA$ vanishes. Continuity gives pointwise vanishing in the interior. Only bounded domains enter. If balls must have closures in an open boundary region, recovery holds on the union of their half-balls: center differentiation and shrinking radii remain in the available family. This proves the scalar recovery used in [\[1\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-1) directly; [\[8\]](/source-readout/boundary-ball-readouts/05-verification-and-references#ref-8) uses related hyperbolic integral geometry.

<a id="theorem-4-1"></a>

### Theorem 4.1. Recover the Einstein residual

In the geometric class with the Ward conditions [(1)](/source-readout/boundary-ball-readouts/01-preparation-and-ball-projections#eq-1), the ball first law for all balls in all frames is equivalent to $E_{ab}=0$. It suffices to use all slices and balls in $d(d+1)/2$ frames whose time-vector outer squares span the symmetric boundary tensors.

<a id="determining-frames"></a>

### Proof: span the boundary contractions

In each frame the scalar recovery gives $E_{\mu\nu}u^\mu u^\nu=0$ on every slice of that frame. The slices must cover the common bulk region where the contractions are compared. Polarization then gives $E_{\mu\nu}=0$.

For an explicit spanning set, take an inertial basis and unnormalized future timelike vectors

$$
e_0,\qquad e_0\pm v e_i,\qquad e_0+v(e_i+e_j)\quad(i<j),
\qquad 0<v<1/\sqrt 2.
$$

The pair differences give the time-space entries; the pair sums give the spatial diagonals after subtracting the time entry; and the last set gives the spatial cross entries. Normalization does not change the span of the outer squares. The determinant is nonzero at this example, so generic tuples also span.

<a id="radial-ward-data"></a>

### Proof: complete the radial equations

Varying the exact Bianchi identity at a background with zero residual gives $\bar\nabla^aE_{ab}=0$. For $C^2$ perturbations the differential identity holds weakly by local smooth approximation. The radial equations integrate in distributions, and continuity of the residual fixes their pointwise values. With $E_{\mu\nu}=0$ they give

$$
E_{z\mu}=z^{d-1}C_\mu,
\qquad E_{zz}=z^{d-2}C_z-\tfrac12 z^d\partial_\mu C^\mu.
$$

The equations being integrated are

$$
\partial_z E_{z\mu}-\frac{d-1}{z}E_{z\mu}=0,
\qquad
\partial_z E_{zz}-\frac{d-2}{z}E_{zz}=-\partial^\mu E_{z\mu}.
$$

Expanding the linearized curvature at the boundary determines the coefficients in the unscaled Einstein normalization:

$$
C_z=-\frac{d(d-1)}{2L^2}\operatorname{tr}_{\eta}H^{(0)},
\qquad
C_\mu=\frac{d}{2L^2}
\left(\partial^\nu H_{\nu\mu}^{(0)}-\partial_\mu\operatorname{tr}_\eta H^{(0)}\right).
$$

The Ward conditions set both coefficients to zero. Conversely, $E=0$ sets the leading radial coefficients to zero, so the two energies agree and [(3)](/source-readout/boundary-ball-readouts/02-two-proofs-of-the-charge-identity#eq-3) gives every ball first law.

<a id="return-maps"></a>

### What the return map returns

For the fixed background and admissible class, the joint map factors as

$$
h\longmapsto E[h]\longmapsto (D_B)_B.
$$

For the complete family the second arrow is injective on the image of Ward-compatible perturbations. Apply the theorem to a difference to see this. The second arrow therefore has a return map on its realized data range even if the first arrow has a kernel. For balls on one slice the return map recovers only the time-time residual there. This is the quotient determined by the chosen apertures.

The frame count is sufficient for polarization. With fewer frames a general symmetric tensor can have an algebraic evaluation kernel at a point. Whether every such tensor kernel is realized by an admissible metric tangent is a separate question. The theorem determines the equation residual, and distinct on-shell metrics can have the same zero defects.



## What fixed-slice balls miss

<a id="fixed-frame-kernel"></a>

## 5. Metric perturbations invisible to restricted families

All radii and centers on one slice give $D_B=0$ exactly when $\delta R[q]=0$ there. The slice proof shows why this condition does not control time derivatives or the other components of $h$. For example, a spatial perturbation proportional to $(t-t_0)^2$ can vanish with its first time derivative at $t_0$ and still change the spatial evolution equations. The next two constructions are invisible to a larger family.

**Keep the same regions and change the order of response.** [Second-Order Detection by Boundary Balls](/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy) constructs a transverse AdS solution whose first-order area and energy both vanish on these fixed-slice balls, but whose bulk canonical energy is positive at every radius. The boundary relative-entropy interpretation of that energy needs the holographic dictionary and an admissible state family.

<a id="compact-lapse"></a>

### A compactly supported lapse perturbation

For $d\geq3$ fix a spatial point $p$ strictly inside the bulk slice. In the static metric $-N^2dt^2+\bar q$ with $N=L/z$, vary only $N$ by a smooth compactly supported $n$. Choose $n(p)=Dn(p)=0$ and $D_1D_2 n(p)\ne0$ in an orthonormal horizontal frame. A mixed quadratic multiplied by a bump equal to one near $p$ gives such an $n$. The tangent $h_{tt}=-2Nn$ has radial gauge and vanishes near the conformal boundary. The spatial metric is unchanged at every time. Consequently every rest-frame ball has zero area variation and zero boundary charge.

The spatial Ricci tensor of the static spacetime is

$$
\operatorname{Ric}_{AB}[\bar q]-N^{-1}D_AD_BN,
$$

as follows from substituting the mixed time connection coefficients. Its off-diagonal variation at $p$ is $-N^{-1}D_1D_2n$. The trace and cosmological terms contribute zero to that component, so $E_{12}\ne 0$. A linearized diffeomorphism of an on-shell background has zero residual by covariance. This compactly supported example is therefore non-gauge, with vanishing boundary stress variation. It remains invisible under time translations in the same frame.

<a id="ward-compatible-cross-mode"></a>

### A nonzero Ward-compatible boundary tensor

In boundary dimension three, use the symmetric off-diagonal perturbation

$$
h_{12}=z(t^2+z^2/7+1/3)
$$

with other independent components zero. The boundary tensor is nonzero, traceless and conserved: its only entries are spatial cross components independent of the spatial coordinates. On a rest slice the induced perturbation is trace free and divergence free in the hyperbolic background, hence $\delta R=0$. In [(2)](/source-readout/boundary-ball-readouts/01-preparation-and-ball-projections#eq-2) the area integrand is odd separately in $y^1$ and $y^2$, so the area variation vanishes directly. The boundary time-time charge also vanishes.

The transverse tensor equation is

$$
(\partial_z^2-2z^{-1}\partial_z-\partial_t^2)H_{12}=0.
$$

The profile above instead gives residual $-16/7$. Substituting $h$ into the linearized Ricci tensor in radial gauge gives the same test. The perturbation is off shell and non-gauge. A boost with velocity components along both spatial directions couples to the spatial cross residual and can detect it. Ward compatibility here is a property of the geometric boundary data; no corresponding CFT state is asserted.

<a id="fixed-radius-and-center"></a>

### Fixing the radius or the center

In three bulk dimensions take $h_{xx}=z^4\cos(kx)$, $k>0$. Its asymptotic charge vanishes. Formula [(2)](/source-readout/boundary-ball-readouts/01-preparation-and-ball-projections#eq-2) gives

$$
\begin{aligned}
GD(R,x_0)
&=\frac{\cos(kx_0)}{8LR}\int_{-R}^R(R^2-y^2)^3\cos(ky)\,dy\\
&=\frac{\cos(kx_0)}{8LR}\sqrt\pi\,\Gamma(4)(2R/k)^{7/2}J_{7/2}(kR).
\end{aligned}
$$

Integrating the cosine series against the polynomial weight proves the second equality; the standard integral representation of $J_\nu$ gives it as well. Any positive zero at $kR_0$ gives a nonzero perturbation invisible to every center at the one radius $R_0$. This uses the admissible class with no horizontal decay condition. Replacing the cosine by $\sin(k(x-x_0))$ gives an odd integrand and a fixed-center kernel for every radius.

These examples concern the defect. Even on shell, the separate entropy data in one frame can miss components. In the spatial cross profile above, replace $z^2/7$ by $-z^2$. The resulting profile solves the wave equation, has the same boundary cross stress, and gives zero area variation for every rest-frame ball. Its nonzero boundary stress distinguishes it from a boundary-trivial gauge transformation.



## Verification, scope and references

<a id="verification-and-scope"></a>

## 6. Verification and scope

The paper reports replaying its nine verification suites from a fresh extraction. All 149 results matched the reference outputs: 122 exact symbolic checks, 26 reproduced failure controls, and one numerical diagnostic. The checks cover the Killing normalization, both routes to the charge identity, boundary coefficients, scalar inversion identities, and explicit on-shell and off-shell examples. The compactly supported lapse and the dimension-dependent anchoring estimate are analytic additions. The fixed-radius example follows from the exact Bessel formula; its numerical diagnostic illustrates the zero and recovery at another radius.

The equivalence is first order and concerns the Einstein residual in the stated class. The readout depends on the aperture and the shared holographic inputs. Restricting to a time slice leaves an infinite-dimensional metric kernel that includes genuine off-shell examples. Additional slices and boosts change the available contractions. Once those contractions span, the radial equations still require boundary information. Scalar inversion, polarization and Ward data therefore play distinct roles in recovering the local equations.

<a id="funding"></a>

## Funding

This work received no external funding.

<a id="references"></a>

## References

<a id="ref-1"></a>

1. T. Faulkner, M. Guica, T. Hartman, R. C. Myers and M. Van Raamsdonk, “Gravitation from entanglement in holographic CFTs,” *JHEP* 03 (2014) 051. [arXiv:1312.7856](https://arxiv.org/abs/1312.7856).

<a id="ref-2"></a>

2. J. Rodgers, *A Source-to-Readout Architecture for a Theory of Everything*. [DOI 10.5281/zenodo.21366204](https://doi.org/10.5281/zenodo.21366204).

<a id="ref-3"></a>

3. H. Casini, M. Huerta and R. C. Myers, “Towards a derivation of holographic entanglement entropy,” *JHEP* 05 (2011) 036.

<a id="ref-4"></a>

4. J. Rodgers, *Modular Transport and Spherical Holographic Entanglement Entropy in a Source–Readout Architecture*. [DOI 10.5281/zenodo.24013975](https://doi.org/10.5281/zenodo.24013975). [Read the web edition](/source-readout/modular-transport).

<a id="ref-5"></a>

5. J. Rodgers, *Local Horizon Thermodynamics and Einstein Gravity in a Source–Readout Architecture*. [DOI 10.5281/zenodo.24016009](https://doi.org/10.5281/zenodo.24016009). [Read the web edition](/source-readout/local-horizon-thermodynamics).

<a id="ref-6"></a>

6. J. Rodgers, *Transport and Projective Reduction in a Source–Readout Derivation of Einstein Gravity*. [DOI 10.5281/zenodo.23954887](https://doi.org/10.5281/zenodo.23954887). [Read the web edition](/source-readout/transport-projective).

<a id="ref-7"></a>

7. V. Iyer and R. M. Wald, “Some properties of Noether charge and a proposal for dynamical black hole entropy,” *Phys. Rev. D* 50 (1994) 846–864.

<a id="ref-8"></a>

8. J. Lin, M. Marcolli, H. Ooguri and B. Stoica, “Locality of gravitational systems from entanglement of conformal field theories,” *Phys. Rev. Lett.* 114 (2015) 221601.

