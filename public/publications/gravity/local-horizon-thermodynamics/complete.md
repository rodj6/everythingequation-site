# Local Horizon Thermodynamics and Einstein Gravity in a Source–Readout Architecture

Heat, temperature and area readouts of a shrinking null pencil recover the Einstein equation under the stated thermodynamic and conservation assumptions. A finite generator segment and finite transverse width pose different questions.

Jeremy Rodgers · 2026-11-07

DOI: https://doi.org/10.5281/zenodo.24029166



## One prepared horizon, three readouts

<a id="overview"></a>

**A local horizon puts three quantities on the same preparation.** The boost defines a heat flux, its Unruh normalization fixes a temperature, and null focusing changes the cross-sectional area. When the leading Clausius residual vanishes on enough null directions, those readouts recover the Einstein equation under the stated temperature, entropy and conservation laws.

The construction gives an exact test of which directions suffice. Nine suitably chosen directions recover the trace-free tensor in four dimensions. A nondegenerate circle leaves a four-dimensional kernel. At the next order, the plain area law acquires a curvature-gradient residual along the equilibrium generator. Passing from that generator to a pencil of finite width needs its own estimate. A separate boost-weighted expansion functional cancels the cubic term and gives a signed remainder for the prescribed readouts.

<a id="introduction"></a>

## 1. Where the field equation enters

Jacobson's derivation imposes a local Clausius relation on Rindler horizons through each spacetime point [\[1\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-1). Heat is the boost-energy flux through a null pencil. Temperature uses the Unruh normalization. Entropy change is proportional to the pencil's area change. Null focusing supplies the geometric response. The field equation comes from requiring these three quantities, evaluated on one local preparation, to agree in the leading Clausius law.

Treating them as readouts of one source makes the leading condition a tensor reconstruction problem. Restricted directions can leave an explicit kernel. Using the same preparation also shows why a leading law need not extend unchanged to finite affine length or transverse width. We establish the leading equivalence in both directions, restore units in the coupling and calculate the first controlled correction.

This is a realization of the Shadow Theory source-readout architecture [\[2\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-2). It shares the distinction between source data and observable projections with the [transport realization of the spin-two route](/source-readout/transport-projective) [\[3\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-3). Its local boost normalization is compatible with the modular convention in the [spherical entanglement realization](/source-readout/modular-transport) [\[4\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-4), [\[5\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-5). Work in four dimensions with signature $(-,+,+,+)$ and $c=k_B=1$ until units are restored. Retain $\hbar$ throughout.

<a id="common-source"></a>

## 2. Prepare the null pencil

Let $U$ be a connected spacetime region. An aperture is indexed by $(p,[k])$, with $p\in U$ and $[k]$ a future null ray at $p$. It selects a marked local preparation. Its physical realization uses the common history

$$
z=(g,T,\omega,\eta,\mathcal P).
$$

Here $g$ is a smooth Lorentzian metric, $T$ a symmetric stress tensor, $\omega$ the field state used for the local thermal limit, $\eta>0$ a constant entropy per unit area, and $\mathcal P$ an assignment of horizon data to the apertures. The metric data may be off shell. The matter tensor is prescribed as a classical tensor or expectation value. Its fluctuations lie outside the calculation.

Choose a representative $k$ and a spacelike screen complementary to $k$ in $k^\perp$. Take a spacelike two-surface $P$ through $p$ whose tangent plane is that screen. Extend the null normal on the selected side by affinely parametrized null geodesics from $P$. Use affine parameter $\lambda=0$ on $P$ and the segment $-h\leq\lambda\leq0$, $h>0$. Before caustics this gives a local twist-free null hypersurface. With future-oriented measure $d\Sigma^b=k^b\,d\lambda\,dA_\lambda$, prescribe the boost on the hypersurface by

$$
\chi=-\kappa\lambda k,\qquad \kappa>0.
$$

In flat spacetime choose $k=\partial_t-\partial_x$ on the past horizon of the right wedge, $t=-x$ with $x>0$. The restriction of the exact Killing boost is $\chi=\kappa(x\partial_t+t\partial_x)$. In the curved construction, the boost on the pencil inherits its tangent-space normalization from this model.

The initial expansion and shear vanish at the central point. A local planar embedding to second order in Riemann normal coordinates has vanishing null second fundamental form at $p$, so the pointwise preparation exists. This condition suffices for the leading law with centered shrinking transverse domains. Stronger uniform equilibrium conditions can alter the higher-order analysis.

<a id="three-readouts"></a>

### Three projections of one preparation

At the chosen aperture the three projections of $z$ are

$$
\pi_Q=\int T_{ab}\chi^a\,d\Sigma^b,\qquad
\pi_T=\frac{\hbar\kappa}{2\pi},\qquad
\pi_S=\eta\,[A(0)-A(-h)].
$$

Every aperture uses the same $g$, $T$ and $\eta$. The heat and temperature use the same boost. Evaluating these projections on the realized pencil gives Jacobson's heat, temperature and entropy expressions [\[1\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-1). This is recovery at the level of observables. The leading coefficient of $\pi_Q-\pi_T\pi_S$ is the joint readout that selects histories. Its zero set is imposed as a physical law.

<a id="boost-temperature"></a>

## 3. Fix the boost and temperature together

The Minkowski vacuum restricted to a wedge is thermal in the Kubo-Martin-Schwinger sense for the future boost at inverse rapidity temperature $2\pi$ [\[6\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-6). In the convention $\alpha_s(A)=e^{isH}Ae^{-isH}$, the modular group is the future boost at rapidity $-2\pi s$. The $\chi$-flow advances rapidity at rate $\kappa$, so its thermal energy scale is $\hbar\kappa/(2\pi)$. The curved-space calculation takes this as a local scaling-limit premise. It needs neither a global boost Killing field nor a finite-length correction to temperature.

A flat boost orbit at distance $\rho$ has proper acceleration $1/\rho$ and $|\chi|=\kappa\rho$. Multiplying its proper temperature by $|\chi|$ gives the boost temperature above. The resulting flux-to-temperature ratio is

$$
\frac{\pi_Q}{\pi_T}
=\frac{2\pi}{\hbar}\int_{-h}^{0}(-\lambda)T_{kk}\,d\lambda\,dA_\lambda,
\qquad T_{kk}=T_{ab}k^ak^b.
$$

A positive rescaling of $\chi$ multiplies both readouts by the same factor. The affine rescaling $\lambda\mapsto a\lambda$, $k\mapsto k/a$ for $a>0$ leaves the integral unchanged. If heat and temperature use separate positive normalizations $\kappa_Q$ and $\kappa_T$, the inferred coupling is multiplied by $\kappa_Q/\kappa_T$. Reversing the heat boost while retaining the original positive temperature reverses the sign of the inferred coupling. Both changes mismatch the readouts. A direction-dependent mismatch can produce angular data of degree greater than two, so a symmetric tensor need not represent those data.



## The Clausius coefficient and the directions that determine it

<a id="leading-coefficient"></a>

## 4. Extract the leading Clausius coefficient

Use the curvature convention in which positive $R_{kk}=R_{ab}k^ak^b$ focuses the congruence. For affine parameter on the twist-free pencil, the Raychaudhuri and area equations are

$$
\dot\theta=-R_{kk}-\frac12\theta^2-\sigma_{ab}\sigma^{ab},
\qquad
\frac{d}{d\lambda}dA_\lambda=\theta\,dA_\lambda.
$$

With $\theta(0,p)=0$, the central generator has $\theta(\lambda,p)=-\lambda R_{kk}(p)+O(\lambda^2)$. Let $P_\ell\subset P$ be a centered transverse domain of size $\ell$ and area $A_0$. Use a fixed smooth congruence with bounded local derivatives in screen coordinates. Centering means that those coordinates have zero first moment with respect to $dA_0$. Taylor expansion then gives

$$
\frac{1}{A_0}\int_{P_\ell}\theta(0,y)\,dA_0(y)=O(\ell^2).
$$

This estimate allows a nonzero transverse derivative of the initial expansion. Without centering, that derivative can contribute at leading order. If $\ell=O(h)$, integrating the area equation gives

$$
\frac{\delta A}{A_0}=\frac{h^2}{2}R_{kk}(p)+o(h^2).
$$

The initial-expansion term contributes $O(h\ell^2)$, the transverse variation of the linear focusing coefficient vanishes as $\ell$ shrinks, and the quadratic optical terms vanish at the center of the initial section. The heat flux on the same domain satisfies

$$
\frac{\delta Q}{A_0}=\frac{\kappa h^2}{2}T_{kk}(p)+o(h^2).
$$

<a id="eq-1"></a>

The normalized residual therefore has the limit

$$
C(p,k)
=\lim_{h\to0}\frac{2(\pi_Q-\pi_T\pi_S)}{\kappa A_0h^2}
=T_{kk}(p)-\frac{\hbar\eta}{2\pi}R_{kk}(p).\tag{1}
$$

A relative $o(1)$ error in the thermal readout leaves this limit intact. The local scaling-limit temperature is needed at this order. The area-entropy law and $C=0$ are constitutive inputs. The theorem gives their consequence.

<a id="theorem-4-1"></a>

### Theorem 4.1. Leading equivalence

Suppose $g$ is $C^3$, $T$ is $C^1$ and conserved, and the thermal and entropy readouts hold at leading order with constant $\eta>0$. If $C(p,k)=0$ at every $p$ for all future null directions, or on a [determining set](#determining-directions), then

$$
R_{ab}-\tfrac12 Rg_{ab}+\Lambda g_{ab}=\frac{2\pi}{\hbar\eta}T_{ab}
$$

for a constant $\Lambda$ on $U$. Conversely, this tensor equation implies $C(p,k)=0$ at every aperture.

**Proof.** Set $E_{ab}=R_{ab}-2\pi T_{ab}/(\hbar\eta)$. In an orthonormal frame a normalized future null vector is $k=(1,n)$ with $|n|=1$. Subtracting $E(k,k)=0$ for $n$ and $-n$ gives $E_{0i}=0$. The remaining equality $E_{ij}n^in^j=-E_{00}$ for every unit $n$ gives $E_{ij}=-E_{00}\delta_{ij}$. Thus $E=\phi g$. A determining set gives the same implication. Take the divergence of $R_{ab}-\phi g_{ab}=2\pi T_{ab}/(\hbar\eta)$. Conservation and the contracted Bianchi identity give $d(\phi-R/2)=0$. Connectedness yields $\phi=R/2-\Lambda$. For the converse, a metric-proportional $E$ has zero contraction with every null vector.

Without conservation the readouts recover the trace-free equation and leave an undetermined scalar function. A constant vacuum-energy term proportional to $g$ has zero null flux and can be absorbed into $\Lambda$.

<a id="coupling-and-units"></a>

Restore units using $T_\chi=\hbar c\kappa/(2\pi k_B)$ for geometric $\kappa$ and physical entropy density $\eta$. The curvature coupling is then $2\pi k_B/(\hbar c\eta)=8\pi G/c^4$, hence

$$
G=\frac{k_Bc^3}{4\hbar\eta},
\qquad \eta=\frac{k_B}{4\ell_P^2}.
$$

The supplied entropy density fixes the coupling through this equality.

<a id="determining-directions"></a>

## 5. Determine the tensor from null directions

Aperture completeness is a finite-dimensional question at each point. In the orthonormal frame above write

$$
E(k,k)=F(n)=A+b_i n^i+Q_{ij}n^in^j,
\qquad Q_{ij}=Q_{ji},\quad \operatorname{tr}Q=0.
$$

Here $A=E_{00}+\frac13\sum_i E_{ii}$, $b_i=2E_{0i}$, and $Q$ is the Euclidean trace-free spatial block. The kernel of $E\mapsto F$ is precisely $\mathbb Rg$. Thus $F$ determines the spacetime trace-free tensor. This function space has dimension $1+3+5=9$, and a set of directions is determining exactly when evaluation on that set is injective. Any open set suffices by real analyticity. A change of orthonormal observer relabels the sphere and rescales the normalized null contraction by a nonvanishing weight, preserving the criterion.

<a id="nine-direction-inversion"></a>

### Reconstruct from nine evaluations

Use the six directions $\pm e_i$ and the three directions $(e_i+e_j)/\sqrt{2}$ for $i<j$, where $e_i$ form an orthonormal spatial basis. Set $s_i=[F(e_i)+F(-e_i)]/2$. Then

$$
b_i=\tfrac12[F(e_i)-F(-e_i)],
\qquad A=\tfrac13\sum_i s_i,
\qquad Q_{ii}=s_i-A,
$$

and

$$
Q_{ij}=F\!\left(\frac{e_i+e_j}{\sqrt 2}\right)
-\tfrac12(s_i+s_j)-\frac{b_i+b_j}{\sqrt 2}.
$$

This is a constructive full-rank inversion. The evaluation determinant is analytic and nonzero at this tuple, so a generic tuple of nine directions has full rank. Eight evaluations leave at least one dimension undetermined.

<a id="circle-kernel"></a>

### What a circle misses

For a nondegenerate circle, rotate the axes so $n_3=c$ with $|c|<1$. The restriction is a trigonometric polynomial of order at most two. Restricting $1,n_1,n_2,n_1^2-n_2^2,n_1n_2$ supplies all five Fourier modes. The rank is five, and the four-dimensional kernel is spanned by

$$
(n_3-c)\{1,n_1,n_2,n_3\}.
$$

These are pointwise statements. With noisy data, reconstruction depends on the conditioning of the chosen evaluation matrix.



## The first finite-length correction

<a id="finite-length"></a>

## 6. Follow the residual beyond leading order

Hold the boost and leading temperature $\hbar\kappa/(2\pi)$ fixed as readouts. Start with densities per unit initial area along a central generator. Write $R_j$ and $T_j$ for the zeroth and first Taylor coefficients of $R_{kk}$ and $T_{kk}$ in $\lambda$, with data smooth enough for the following remainders. At equilibrium, $\theta(0)=\sigma(0)=0$, and Raychaudhuri gives

$$
\theta=-R_0\lambda-\tfrac12R_1\lambda^2+O(\lambda^3).
$$

The area Jacobian $J(\lambda)=dA_\lambda/dA_0$ has $J(0)=1$ and $\dot J=\theta J$. Integrating gives

$$
\frac{d(\delta A)}{dA_0}
=\frac{R_0h^2}{2}-\frac{R_1h^3}{6}+O(h^4),
\qquad
\frac{d(\delta Q)}{dA_0}
=\kappa\left(\frac{T_0h^2}{2}-\frac{T_1h^3}{3}\right)+O(h^4).
$$

The heat flux uses $J=1+O(\lambda^2)$, so its area-factor correction first appears at fourth order. On an Einstein solution, $T_j=\hbar\eta R_j/(2\pi)$ for $j=0,1$. Therefore the leading terms cancel and the cubic terms leave

<a id="eq-2"></a>

$$
\frac{d(\delta Q-\pi_T\eta\delta A)}{dA_0}
=-\frac{\hbar\kappa\eta}{12\pi}h^3\nabla_k R_{kk}(p)+O(h^4).\tag{2}
$$

<a id="flrw-example"></a>

For a concrete example, take spatially flat FLRW with scale factor $a(t)=t$, $t>0$, and an affine radial null generator with $k^t=1/t$. Then $H=1/t$ and $R_{kk}=-2\dot H(k^t)^2=2/t^4$. At $t=1$, $\nabla_kR_{kk}=-8$. The conserved Einstein stress tensor gives a nonzero coefficient in [equation (2)](#eq-2). Even on shell, cancellation beyond leading order is not automatic.

<a id="finite-width"></a>

### Transfer to a pencil of finite transverse width

For a smooth centered family the initial expansion contributes $O(h\ell^2)$ per unit initial area. Taylor coefficients smooth in transverse coordinates have averages that differ from their central values by $O(\ell^2)$, under the same centering and smoothness assumptions. Expand the heat and area expressions in $h$ before averaging. Centering replaces each coefficient by its central value plus $O(\ell^2)$, including the coefficient of $h$ in the area change. The residual divided by $A_0$ therefore has the central expansion in [equation (2)](#eq-2) with an additional $O(h\ell^2)$ error.

Consequently $\ell=o(h)$ suffices to preserve the cubic coefficient. The leading-order scaling $\ell=O(h)$ can carry an extra cubic term. The quartic remainder is retained if $h\ell^2=O(h^4)$ in fixed local units. These statements use the same readout prescription. A relative temperature correction of order $h$, or a quadratic correction to the boost on the horizon, can also change the cubic coefficient.

<a id="weighted-prescription"></a>

### A separate weighted expansion prescription

Define a boost-weighted functional on the pencil $H$:

$$
\delta S_w=\eta\int_{H}(-\lambda)(-\dot\theta)\,d\lambda\,dA_\lambda.
$$

It agrees at leading order with plain area entropy on an equilibrium generator. Substitution of the Raychaudhuri equation gives the exact identity for these prescribed readouts:

$$
\delta Q-\pi_T\delta S_w
=\kappa\int_{H}(-\lambda)
\left[T_{kk}-\frac{\hbar\eta}{2\pi}
\left(R_{kk}+\frac{\theta^2}{2}+\sigma_{ab}\sigma^{ab}\right)\right]
\,d\lambda\,dA_\lambda.
$$

On shell, the remaining terms are nonpositive in this residual convention. Along the central equilibrium generator the density starts at order $h^4$. With $S_1=(\nabla_k\sigma)|_p$ in a parallel screen frame, the leading term is

$$
-\frac{\hbar\kappa\eta}{8\pi}h^4
\left(\frac{R_0^2}{2}+S_{1\,ab}S_1^{ab}\right).
$$

The quadratic optical terms have the displayed coefficient of $\lambda^2$ before integration against $-\lambda$. The area Jacobian is $1+O(\lambda^2)$. This establishes the signed remainder for a weighted expansion functional. A physical entropy interpretation requires additional input, and the identity is separate from entropy-production laws in nonequilibrium generalizations [\[7\]](/source-readout/local-horizon-thermodynamics/04-assumptions-and-references#ref-7).



## Preparation, assumptions and verification

<a id="preparation-assumptions"></a>

## 7. Preparation, assumptions and verification

Pointwise equilibrium differs from requiring the entire null second fundamental form to vanish through first transverse order. In normal coordinates at $p$, cubic changes of the surface embedding vary the first transverse derivative of that form by a totally symmetric three-tensor. Its trace can be prescribed, so one can make the first derivative of the initial expansion vanish. Codazzi constrains the antisymmetric derivative instead.

<a id="codazzi-obstruction"></a>

### When the Codazzi obstruction vanishes

For a screen basis $e_2,e_3$, define

$$
C_j=R(k,e_j,e_2,e_3),\qquad
\Phi_{ij}=R(k,e_i,k,e_j).
$$

When the second fundamental form vanishes at $p$, the Codazzi obstruction is $C$, up to the overall convention for the curvature tensor. Under the screen change $e_i\mapsto e_i+c_i k$, shifting the second slot gives zero by antisymmetry in the first pair. Shifting both of the last two slots also gives zero, by antisymmetry in that pair. The two single shifts give

$$
\Delta C_j
=c_2 R(k,e_j,k,e_3)+c_3 R(k,e_j,e_2,k)
=c_2\Phi_{j3}-c_3\Phi_{j2},
\qquad \Delta C=\Phi(-c_3,c_2)^\top.
$$

A screen with zero Codazzi obstruction exists exactly when $C$ belongs to the range of $\Phi$. Once the obstruction vanishes, the last-two-index symmetry of the differentiated second fundamental form and the Codazzi symmetry make it totally symmetric. The cubic embedding freedom can then cancel it.

Invertible $\Phi$ suffices. For a conformally flat algebraic curvature with $R_{kk}=0$ but nonzero transverse $R(k,e_i)$, one has $\Phi=0$ and $C\neq0$. That is an obstruction. The leading proof uses the weaker pointwise preparation and a centered average, so it applies even in this degenerate case.

<a id="physical-inputs"></a>

### What the derivation assumes

The inputs are local Lorentzian geometry and its optical identities, the boost-energy definition of heat, tangent-space thermal normalization, the area-entropy relation, the leading Clausius condition and local stress-energy conservation. The source-readout construction identifies the inputs that must be shared between apertures and the residual they constrain. The entropy coefficient need not come from spherical holographic entropy. The [transport derivation](/source-readout/transport-projective) uses different physical premises; its coupling and field equations do not supply the thermodynamic inputs here.

<a id="verification"></a>

### What the research calculations checked

The paper reports replaying the companion research calculations from a fresh extraction. All 59 results matched the archived reference: 43 exact symbolic checks, 14 controls reproducing expected failures, and two numerical diagnostics. They include Raychaudhuri for explicit metrics, affine and boost normalizations, the FLRW residual, Codazzi controls, null-direction ranks, the contracted Bianchi identity for explicit metrics, and restoration of units. The shrinking-width estimate and explicit nine-direction inversion are analytic results alongside those checks.

<a id="conclusion"></a>

## 8. What the construction establishes

The leading Clausius residual compares heat, temperature and area on a prepared local horizon. Its vanishing determines the trace-free curvature response from a sufficient family of null directions. Conservation and the Bianchi identity complete the tensor equation up to the cosmological constant. The finite-direction reconstruction identifies which apertures suffice and which leave a kernel.

At the next order the plain area prescription produces a curvature-gradient residual for the fixed boost and temperature. Transverse averaging and thermal corrections must be controlled before that residual can be interpreted beyond the generator limit.

<a id="funding"></a>

### Funding

This work received no external funding.

<a id="verification-materials"></a>

### Verification materials for this edition

The [matching verification archive](/publications/gravity/local-horizon-thermodynamics/Jacobson_Verification_24029166.zip) supplies the scripts and reference outputs, targeted checks of the corrected Codazzi transformation, and instructions for replaying the original suites. It is also available from the [Zenodo record for this edition](https://doi.org/10.5281/zenodo.24029166).

<a id="references"></a>

## References

<a id="ref-1"></a>

1. T. Jacobson, *Thermodynamics of spacetime: The Einstein equation of state*, Phys. Rev. Lett. 75 (1995) 1260–1263. [doi:10.1103/PhysRevLett.75.1260](https://doi.org/10.1103/PhysRevLett.75.1260).

<a id="ref-2"></a>

2. J. Rodgers, *A Source-to-Readout Architecture for a Theory of Everything*. [doi:10.5281/zenodo.21366204](https://doi.org/10.5281/zenodo.21366204).

<a id="ref-3"></a>

3. J. Rodgers, *Transport and Projective Reduction in a Source–Readout Derivation of Einstein Gravity*. [doi:10.5281/zenodo.23954887](https://doi.org/10.5281/zenodo.23954887).

<a id="ref-4"></a>

4. H. Casini, M. Huerta and R. C. Myers, *Towards a derivation of holographic entanglement entropy*, JHEP 05 (2011) 036. [doi:10.1007/JHEP05(2011)036](https://doi.org/10.1007/JHEP05(2011)036).

<a id="ref-5"></a>

5. J. Rodgers, *Modular Transport and Spherical Holographic Entanglement Entropy in a Source–Readout Architecture*. [doi:10.5281/zenodo.24013975](https://doi.org/10.5281/zenodo.24013975).

<a id="ref-6"></a>

6. J. J. Bisognano and E. H. Wichmann, *On the duality condition for a Hermitian scalar field*, J. Math. Phys. 16 (1975) 985–1007. See also *On the duality condition for quantum fields*, J. Math. Phys. 17 (1976) 303–321.

<a id="ref-7"></a>

7. C. Eling, R. Guedens and T. Jacobson, *Non-equilibrium thermodynamics of spacetime*, Phys. Rev. Lett. 96 (2006) 121301. [arXiv:gr-qc/0602001](https://arxiv.org/abs/gr-qc/0602001).

