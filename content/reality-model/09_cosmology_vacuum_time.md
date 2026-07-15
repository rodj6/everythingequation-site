# The Source-to-Readout Construction

## Vacuum response, cosmology, dark structure and temporal orientation

### 1. Cosmological branch and function spaces

Fix one globally compatible gravity--matter--parameter branch
\[
\mathfrak b
=
\bigl(
M,g,z_F,\Gamma_{\rm tot,CTP},[\theta_*(\mu)]_{\rm scheme},
\mathcal A_Y^{\rm obj},\mathcal B_{\rm cos}
\bigr).
\tag{C9.1}
\]
\(z_F\) is the locally covariant QFT completion of Chapter 5a and fixes
the state, renormalization and CTP response entering cosmology.
Let \(I=[\eta_i,\eta_f]\) be a conformal-time interval and let
\(\Sigma\) be a constant-curvature Cauchy three-manifold.  For
\(s>5/2\), a convenient background/perturbation configuration space is
\[
\mathscr X_{\rm cos}^{\rm an}
=
\mathscr X_{\rm bg}
\times
\mathscr X_{\rm SVT}
\times
\mathscr X_{\rm kin},
\tag{C9.2}
\]
The superscript \({\rm an}\) labels the analytical/dynamical factor as
distinct from the relational archive; it does not assert real-analytic
regularity.
with
\[
\begin{aligned}
\mathscr X_{\rm bg}
&=
\{a\in H^{s+1}(I):a>0\}
\times H^s(I)^{N_{\rm bg}},\\
\mathscr X_{\rm SVT}
&=
C^0(I;H^s(\Sigma))
\cap C^1(I;H^{s-1}(\Sigma)),\\
\mathscr X_{\rm kin}
&=
\prod_A
C^0\!\left(
I;
L^1_+\!\left(T^*\Sigma,dP;1+|p|^2\right)
\right),\\
\mathscr X_{\rm rec}
&=
\operatorname{Filt}(\mathcal A_Y^{\rm obj}).
\end{aligned}
\tag{C9.3}
\]
Gauge-equivalent perturbations are quotiented or represented on a fixed
gauge slice.  The cosmological equation is a residual section
\[
\mathcal R_{\rm cos}:
\mathscr X_{\rm cos}^{\rm an}\longrightarrow\mathscr Y_{\rm cos}^{\rm an},
\tag{C9.4}
\]
whose zero set contains the background constraints, hyperbolic
evolution and kinetic equations.  Archive compatibility is the
separate functorial relation
\[
\operatorname{Arch}_{\rm cos}:
\mathscr X_{\rm cos}^{\rm an}
\times\mathcal A_Y^{\rm obj}
\dashrightarrow
\mathscr X_{\rm rec}.
\tag{C9.4a}
\]
The full cosmological object is
\(\mathscr X_{\rm cos}^{\rm an}\times\mathscr X_{\rm rec}\), but only
the first factor is used as the Banach space of semilinear evolution.

### 2. Exact-once effective action

At a renormalization scale \(\mu\), choose one EFT operator basis
\(\mathcal B_{\rm op}(\mu)\) modulo integration by parts, field
redefinitions and declared equation-of-motion redundancies.  The
closed-time-path action is
\[
\boxed{
\begin{aligned}
\Gamma_{\rm tot,CTP}
={}&
S_{\rm grav}^{\rm ren}[g^+]-S_{\rm grav}^{\rm ren}[g^-]\\
&+
S_M^{\rm cl}[g^+,\Phi_M^+]-S_M^{\rm cl}[g^-,\Phi_M^-]\\
&+
\Gamma_{\rm QFT,dyn}^{\rm ren}
[g^\pm,\Phi_q^\pm|\omega]\\
&+
\chi_R\Gamma_{R,\rm CTP}
+\chi_{MR}\Gamma_{MR,\rm CTP}\\
&+
\chi_{\rm DM}\Gamma_{\rm DM,CTP}
+\chi_{\rm DE}\Gamma_{\rm DE,CTP}.
\end{aligned}
}
\tag{C9.5}
\]
Each switch is one only when the corresponding functional contains
degrees of freedom or an interaction absent from every other term.
\(\Gamma_{R,\rm CTP}\) is the separately owned dynamical record
remainder, and \(\Gamma_{MR,\rm CTP}\) contains only genuinely mixed
matter--record operators.  Archive kinematics alone sets
\(\chi_R=0\); absence of an independent mixed operator sets
\(\chi_{MR}=0\).
Pure-metric local QFT counterterms occur in
\(S_{\rm grav}^{\rm ren}\), not again in
\(\Gamma_{\rm QFT,dyn}^{\rm ren}\).  A species treated by the QFT
functional may still have its tree-level action or classical background
owned by \(S_M^{\rm cl}\), but that classical contribution is subtracted
from \(\Gamma_{\rm QFT,dyn}^{\rm ren}\).  Thus \(S_M^{\rm cl}\)
owns the retained background and tree-level matter terms, while their
quantum fluctuations, state dependence and nonlocal loop response are
owned by \(\Gamma_{\rm QFT,dyn}^{\rm ren}\), exactly as in
(QFT5a.49).

Metric variation at the physical limit gives
\[
\boxed{
G_{\mu\nu}
+\Lambda_{\rm br}g_{\mu\nu}
+\mathcal Q_{\mu\nu}^{\rm grav}
=
8\pi G_R T_{\mu\nu}^{\rm owned},
}
\tag{C9.6}
\]
where
\[
\begin{aligned}
T_{\mu\nu}^{\rm owned}
={}&T_{\mu\nu}^{M,\rm cl}
+T_{\mu\nu}^{\rm QFT,dyn}
+\chi_RT_{\mu\nu}^{R}
+\chi_{MR}T_{\mu\nu}^{MR}\\
&+\chi_{\rm DM}T_{\mu\nu}^{DM}
+\chi_{\rm DE}T_{\mu\nu}^{DE}.
\end{aligned}
\tag{C9.7}
\]
The Ward identity is
\[
\nabla^\mu T_{\mu\nu}^{(A)}=J_\nu^{(A)},
\qquad
\sum_AJ_\nu^{(A)}=0,
\tag{C9.8}
\]
with the gravitational Noether identity and boundary flux conditions
included.

### 3. FLRW background

The homogeneous isotropic metric is
\[
ds^2
=-dt^2
+a^2(t)
\left[
\frac{dr^2}{1-k_{\rm FLRW}r^2}
+r^2d\Omega_2^2
\right].
\tag{C9.9}
\]
Put
\[
H=\dot a/a,
\qquad
\mathcal H=a'/a,
\qquad
\bar a=a/a_0,
\qquad
1+z=\bar a^{-1}.
\tag{C9.10}
\]
The \(00\) and spatial-trace projections of (C9.6) give
\[
\boxed{
H^2
=
\frac{8\pi G_R}{3}\rho_{\rm owned}
+\frac{\Lambda_{\rm br}}3
-\frac{k_{\rm FLRW}}{a^2}
+\Delta_H^{\rm grav},
}
\tag{C9.11}
\]
\[
\boxed{
\frac{\ddot a}{a}
=
-\frac{4\pi G_R}{3}
(\rho_{\rm owned}+3p_{\rm owned})
+\frac{\Lambda_{\rm br}}3
+\Delta_a^{\rm grav}.
}
\tag{C9.12}
\]
For a higher-derivative gravitational action,
\(\Delta_H^{\rm grav}\) and \(\Delta_a^{\rm grav}\) are the actual
metric variations; they are not freely chosen effective fluids.  Their
mutual relation follows from the Bianchi identity.

With
\[
\rho_{\rm crit,0}=3H_0^2/(8\pi G_R),
\qquad
\Omega_{k0}=-k_{\rm FLRW}/(a_0^2H_0^2),
\tag{C9.13}
\]
the background closure relation is
\[
\boxed{
E^2(\bar a)
=
\Omega_{\Lambda,\rm br}
+\sum_A\widehat\Omega_A(\bar a)
+\Omega_{k0}\bar a^{-2}
+\widehat\Omega_{\rm grav}(\bar a).
}
\tag{C9.14}
\]
At \(\bar a=1\), the right-hand side equals one.  Every component
appears once.

For interacting components,
\[
\dot\rho_A+3H(\rho_A+p_A)=Q_A,
\qquad
\sum_AQ_A=0.
\tag{C9.15}
\]
An independently conserved component obeys
\[
\rho_A(\bar a)
=
\rho_{A0}
\exp\!
\left[
-3\int_1^{\bar a}(1+w_A)\,d\log\bar a'
\right].
\tag{C9.16}
\]

### 4. Ordinary and fixed-flux gravitational branches

The ordinary and Henneaux--Teitelboim branches are alternatives:
\(F_4\) denotes a globally defined closed four-form in a fixed flux
class, represented locally by \(F_4=dA_3\).  On topologically nontrivial
spacetimes \(A_3\) is patchwise connection data rather than a global
three-form.  Then
\[
S_G^{\mathfrak b_G}
=
\begin{cases}
\dfrac1{16\pi G_R}
\displaystyle\int(R-2\Lambda_{\rm br})\,\mathrm{vol}_g
+S_{\partial M}^{\rm Ord},
&\mathfrak b_G=\mathrm{Ord},\\[3mm]
\dfrac1{16\pi G_R}
\displaystyle\int R\,\mathrm{vol}_g
-\dfrac1{8\pi G_R}
\displaystyle\int\lambda(\mathrm{vol}_g-F_4)
+S_{\partial M}^{\rm HT},
&\mathfrak b_G=\mathrm{HT}.
\end{cases}
\tag{C9.17}
\]
The HT variational problem fixes the boundary connection data or flux
class of \(F_4\).
Its equations include
\[
d\lambda=0,
\qquad
\mathrm{vol}_g=F_4,
\tag{C9.18}
\]
so \(\lambda=\lambda_{\rm HT}\) on a connected branch.

If a constant matter vacuum term changes by \(c\), the HT integration
constant may be reparametrized so that
\[
\rho_{\rm vac}^{\rm const}\mapsto
\rho_{\rm vac}^{\rm const}+c,
\qquad
\lambda_{\rm HT}\mapsto
\lambda_{\rm HT}-8\pi G_Rc,
\tag{C9.19}
\]
leaving
\[
\Lambda_{\rm br}
=
\lambda_{\rm HT}
+8\pi G_R\rho_{\rm vac}^{\rm const}
\tag{C9.20}
\]
unchanged.  This is radiative shift protection of the fixed-flux
equations.  It does not determine the numerical value of
\(\Lambda_{\rm br}\); that value remains boundary/branch data until a
separate source-selection equation fixes it.

### 5. Vacuum response as a typed spectral matrix element

Let \(\mathcal H_{\rm vac}\) be the vacuum-response carrier and
\(\mathcal H_g^{(0)}\) the constant scalar metric-response channel.
The vacuum aperture supplies a bounded transfer
\[
\mathcal T_\Lambda(\widehat\beta_\Lambda):
\mathcal H_{\rm vac}\longrightarrow\mathcal H_g^{(0)}.
\tag{C9.21}
\]
For normalized vectors \(\psi_{\rm vac}\) and \(\psi_g^{(0)}\), define
\[
\mathcal V_\Lambda
=
\left\langle
\psi_g^{(0)},
\mathcal T_\Lambda\psi_{\rm vac}
\right\rangle,
\qquad
\varepsilon_\Lambda=|\mathcal V_\Lambda|^2.
\tag{C9.22}
\]
The active vacuum response is
\[
\rho_{\Lambda}^{\rm resp}
=
\varepsilon_\Lambda\rho_{\rm vac}^{\rm raw}
+\rho_{\rm mix}^{\rm ren}.
\tag{C9.23}
\]
\(\rho_{\rm mix}^{\rm ren}\) contains matched local mixing terms not
captured by a single rank-one overlap.

If, and only if, the transfer is the semigroup
\[
\mathcal T_\Lambda
=
P_g e^{-\widehat\beta_\Lambda\widehat K_\Lambda}P_{\rm vac}
\tag{C9.24}
\]
and both channels lie in one simple eigenmode of eigenvalue
\(\widehat\kappa_\Lambda>0\), then
\[
\varepsilon_\Lambda
=
|\langle\psi_g^{(0)},P_gP_{\rm vac}\psi_{\rm vac}\rangle|^2
e^{-2\widehat\beta_\Lambda\widehat\kappa_\Lambda}.
\tag{C9.25}
\]
The exponential law is therefore a rank-one specialization, not the
definition of vacuum projection.

Define the branch coordinate
\[
\vartheta_\Lambda^{\mathfrak b_G}
=
\begin{cases}
\Lambda_{\rm br},&\mathfrak b_G=\mathrm{Ord},\\
\lambda_{\rm HT},&\mathfrak b_G=\mathrm{HT}.
\end{cases}
\tag{C9.26}
\]
The vacuum selection equation is
\[
\boxed{
\mathcal R_\Lambda^{\mathfrak b_G}
\bigl(
\vartheta_\Lambda^{\mathfrak b_G},
\mathcal T_\Lambda,
I_{\rm vac}
\bigr)=0,
}
\tag{C9.26a}
\]
with (C9.20) applied only on the HT branch.  It is numerically
predictive only after the transfer spectrum and
boundary invariant \(I_{\rm vac}\) have been supplied and the equation
has an isolated root.  No hierarchy numeral is inserted in place of
that calculation.

### 6. Primordial dark component

A primordial dark component is admitted only through an owned covariant
action or kinetic functional.  A minimal scalar example is
\[
S_\chi
=
\int\sqrt{-g}\,d^4x
\left[
-\frac12(\nabla\chi)^2
-\frac12m_\chi^2\chi^2
-\frac{\lambda_\chi}{4}\chi^4
-\lambda_{H\chi}|H|^2\chi^2
\right],
\tag{C9.27}
\]
with a symmetry making the lightest state stable.  This is one
possible selected branch, not a consequence of the visible Standard
Model algebra alone.

The phase-space distribution satisfies
\[
p^\mu\nabla_\mu f_\chi
-\Gamma^i_{\alpha\beta}p^\alpha p^\beta
\frac{\partial f_\chi}{\partial p^i}
=C_\chi[f].
\tag{C9.28}
\]
Its relic abundance follows from the thermal or nonthermal production
mechanism in the thermodynamic chapter.  In the cold collisionless
limit,
\[
p_\chi/\rho_\chi\to0,
\qquad
\rho_\chi\propto a^{-3}.
\tag{C9.29}
\]

### 7. Induced dark response

Let the quadratic gauge-fixed retarded operator on visible and omitted
fields be
\[
\mathbb K^R(\omega,\mathbf k)
=
\begin{pmatrix}
K_{vv}^R&K_{vo}^R\\
K_{ov}^R&K_{oo}^R
\end{pmatrix}.
\tag{C9.30}
\]
When \(K_{oo}^R\) is invertible on the retarded domain, exact Gaussian
elimination gives
\[
\boxed{
K_{\rm eff}^R
=
K_{vv}^R
-K_{vo}^R(K_{oo}^R)^{-1}K_{ov}^R.
}
\tag{C9.31}
\]
The self-energy is
\[
\Sigma_{\rm ind}^R
:=
-K_{vo}^R(K_{oo}^R)^{-1}K_{ov}^R.
\tag{C9.32}
\]
It is an admissible cosmological response only if:
\[
\begin{aligned}
&\Sigma_{\rm ind}^R(t,t')=0
\quad\text{for }t<t',\\
&-\omega\,
\operatorname{Im}
\langle v,\Sigma_{\rm ind}^R(\omega,\mathbf k)v\rangle
\ge0
\quad(\omega\in\mathbb R),\\
&\nabla^\mu T_{\mu\nu}^{\rm ind}
\ \text{closes with the omitted-sector exchange current},\\
&\text{no pole with negative residue or upper-half-plane growth occurs}.
\end{aligned}
\tag{C9.33}
\]
where the Fourier convention is \(e^{-i\omega t}\).  The second line is
the passivity condition in that convention.

Only when the nonlocal influence action admits a metric variation do we
define
\[
T_{\mu\nu}^{\rm ind}
=
-\frac2{\sqrt{-g}}
\frac{\delta\Gamma_{\rm ind}}{\delta g^{\mu\nu}}.
\tag{C9.34}
\]
Calling a term \(\rho_{\rm ind}\) without (C9.34) is only a
quasi-static response parametrization, not an independently conserved
fluid.

The selected hybrid branch is
\[
\mathfrak b_{\rm dark}
=
\mathfrak b_\chi
\oplus
\mathfrak b_{\rm ind},
\tag{C9.35}
\]
where the second summand may be absent.  Early acoustic and equality
physics is carried by a genuinely primordial component unless the full
nonlocal theory is shown to reproduce those initial stresses.

### 8. Scalar, vector and tensor perturbations

In conformal time, scalar perturbations are
\[
ds^2
=a^2
\left[
-(1+2\phi)d\eta^2
+2D_iB\,d\eta dx^i
+\bigl((1-2\psi)\gamma_{ij}
+2D_iD_jE\bigr)dx^idx^j
\right].
\tag{C9.36}
\]
For \(\sigma=B-E'\), define
\[
\Phi=\phi+\mathcal H\sigma+\sigma',
\qquad
\Psi=\psi-\mathcal H\sigma.
\tag{C9.37}
\]
The gauge-invariant linearized equation is
\[
\boxed{
\delta G_{\mu\nu}
+\Lambda_{\rm br}\delta g_{\mu\nu}
+\delta\mathcal Q_{\mu\nu}^{\rm grav}
=
8\pi G_R\delta T_{\mu\nu}^{\rm owned}.
}
\tag{C9.38}
\]
All induced kernels occur inside the owned variation on the right or
inside the pure-metric correction on the left, never both.

For an independently conserved species with \(1+w_A\ne0\), put
\(c_{a,A}^2=p_A'/\rho_A'\).  In the conformal-Newtonian representative,
\[
\delta_A'
+(1+w_A)(\vartheta_A-3\Psi')
+3\mathcal H(c_{s,A}^2-w_A)\delta_A
+9\mathcal H^2(1+w_A)
(c_{s,A}^2-c_{a,A}^2)
\frac{\vartheta_A}{k^2}
=0,
\tag{C9.39}
\]
\[
\vartheta_A'
+\mathcal H(1-3c_{s,A}^2)\vartheta_A
+\frac{w_A'}{1+w_A}\vartheta_A
-k^2
\left(
\Phi+\frac{c_{s,A}^2}{1+w_A}\delta_A-\sigma_A
\right)=0
\tag{C9.40}
\]
in Fourier convention \(D^2\to-k^2\).  Vacuum energy is represented in
\(\Lambda_{\rm br}\) rather than by taking the singular \(w_A=-1\)
limit of these fluid equations.  Interacting species add the perturbations
of the same exchange currents \(Q_A\) that appear in (C9.15).

Vector perturbations obey the transverse projection of (C9.38) and
decay as \(a^{-2}\) when unsourced in the Einstein limit.  Tensor modes
obey
\[
\boxed{
h_\lambda''
+(2+\nu_M)\mathcal Hh_\lambda'
+c_T^2(k,\eta)k^2h_\lambda
+a^2m_T^2h_\lambda
=
16\pi G_Ra^2\Pi_\lambda
+S_\lambda^{\rm nonlocal}.
}
\tag{C9.41}
\]
Einstein recovery requires
\[
\nu_M\to0,\qquad c_T^2\to1,\qquad
m_T^2\to0,\qquad S_\lambda^{\rm nonlocal}\to0
\tag{C9.42}
\]
in the long-wavelength aperture-decoupling limit.

### 9. Primordial state selection

The coherent face determines a dispersion symbol only after a
cosmological pump field and a state have been selected.  For each
canonical perturbation mode \(v_A\), define
\[
S_A^{(2)}
=
\frac12\int d\eta\,d^3k
\left[
|v_A'|^2
-\omega_A^2(k,\eta)|v_A|^2
\right],
\tag{C9.43}
\]
where
\[
\omega_A^2(k,\eta)
=
\Omega_A^2\bigl(h(K);k,\eta\bigr)
-z_A''/z_A
+\Delta_A^{\rm ap}(k,\eta).
\tag{C9.44}
\]
An executable canonical mode basis satisfies
\[
u_{A,k}''
+\omega_A^2(k,\eta)u_{A,k}=0,
\qquad
u_{A,k}u_{A,k}^{*\,\prime}
-u_{A,k}'u_{A,k}^*
=i,
\tag{C9.44a}
\]
where the Wronskian fixes the canonical commutator.  A Gaussian initial
state additionally supplies occupation and squeezing covariances whose
block covariance obeys
\[
V_{\rm init}+\frac{i}{2}\Omega_{\rm symp}\ge0.
\tag{C9.44b}
\]
Thus neither normalization nor amplitude is left to an arbitrary
rescaling of a mode function.

The primordial branch is the triple
\[
\boxed{
\mathfrak b_{\rm prim}
=
\bigl(
a(\eta),z_A(\eta);
\omega_A^2;
\omega_{\rm init}
\bigr),
}
\tag{C9.45}
\]
where \(\omega_{\rm init}\) is a Hadamard state, a fourth-or-higher-order
adiabatic state, or another explicitly defined Gaussian state with the
same ultraviolet wavefront behaviour.  This regularity is required for a
renormalized perturbative stress tensor.  Its two-point function fixes
\[
\langle q_A(\mathbf k)q_B^*(\mathbf k')\rangle
=(2\pi)^3\delta^{(3)}(\mathbf k-\mathbf k')
\frac{2\pi^2}{k^3}\mathcal P_{AB}(k).
\tag{C9.46}
\]
The spectral index is a readout,
\[
n_s(k)-1=\frac{d\log\mathcal P_{\mathcal R}}{d\log k},
\tag{C9.47}
\]
not an assumed function of \(h\).

Two typed branches are permitted:

1. **Inflationary branch.**  A background field/action produces
   accelerated expansion, the pump \(z_A\), graceful exit and reheating.
   The mode equation (C9.43) is solved in its selected Hadamard state.
2. **Coherent noninflationary branch.**  The aperture coherent state
   directly supplies \(\omega_{\rm init}\) and the pump/transition
   kernel, but must independently solve the horizon, flatness,
   adiabaticity and phase-coherence conditions.

The phrase “coherent face” by itself supplies neither an amplitude nor
a near-scale-invariant spectrum.  A branch is admitted only when
(C9.43)--(C9.46) are executable and its backreaction is controlled:
\[
\rho_{\rm pert}\ll3M_P^2H^2.
\tag{C9.48}
\]

### 10. Transfer functions and observables

For initial modes \(q_A\),
\[
X_I(\mathbf k,\eta)
=
\sum_AT_{IA}(k,\eta;\theta_*,\mathfrak b)q_A(\mathbf k).
\tag{C9.49}
\]
The transfer functions solve the complete
Einstein--Boltzmann--projection system.  Hence
\[
\boxed{
P_{IJ}(k,z)
=
\frac{2\pi^2}{k^3}
\sum_{A,B}
T_{IA}(k,z)T_{JB}^*(k,z)
\mathcal P_{AB}(k).
}
\tag{C9.50}
\]
For CMB fields,
\[
C_\ell^{XY}
=
4\pi\int d\log k\,
\sum_{A,B}\mathcal P_{AB}(k)
\Delta_{\ell,A}^{X}(k)
\Delta_{\ell,B}^{Y*}(k).
\tag{C9.51}
\]

For radial null propagation,
\[
\chi(z)=\int_0^z\frac{dz'}{H(z')},
\tag{C9.52}
\]
define the physical present-day spatial-curvature scale
\[
\mathcal K
:=\frac{k_{\rm FLRW}}{a_0^2}
=-\Omega_{k0}H_0^2.
\tag{C9.52a}
\]
Then
\[
f_{\mathcal K}(\chi)
=
\begin{cases}
\mathcal K^{-1/2}\sin(\sqrt{\mathcal K}\chi),
&\mathcal K>0,\\
\chi,&\mathcal K=0,\\
(-\mathcal K)^{-1/2}\sinh(\sqrt{-\mathcal K}\chi),
&\mathcal K<0.
\end{cases}
\tag{C9.53}
\]
Photon conservation and metric null propagation give
\[
d_L=(1+z)f_{\mathcal K}(\chi),
\qquad
d_A=f_{\mathcal K}(\chi)/(1+z),
\tag{C9.54}
\]
and \(d_L=(1+z)^2d_A\).

Weak lensing depends on \(\Phi+\Psi\).  With a declared source kernel,
\[
C_\ell^{\kappa\kappa}
=
\int_0^{\chi_H}
\frac{d\chi}{f_{\mathcal K}^2(\chi)}
W_\kappa^2(\chi)
P_{\Phi+\Psi}
\left(
\frac{\ell+1/2}{f_{\mathcal K}(\chi)},z(\chi)
\right).
\tag{C9.55}
\]
This form remains valid when induced response creates gravitational
slip, whereas inserting a matter-only Poisson prefactor need not.

### 11. Thermal history and asymmetry

The thermal and hydrodynamic limits are those of Chapter 9a.  The
cosmological route is
\[
\mathfrak b_{\rm prim}
\longrightarrow
\mathsf{Reheat}
\longrightarrow
\mathfrak b_{B/L}
\longrightarrow
\mathsf{BBN}
\longrightarrow
\mathsf{Recombination}
\longrightarrow
\mathsf{Structure}.
\tag{C9.56}
\]
Every arrow is an evolution problem.  Reheating must supply a stress
transfer and temperature; a baryogenesis/leptogenesis branch must supply
the charge-violating kinetic network; BBN and recombination use the same
parameter root and expansion history.  The baryon yield satisfies the
typed source--washout equation of the thermodynamic chapter and is not
an unexplained initial constant.

### 12. Low-boundary cosmology

Let \(n^\mu\) be a chosen unit normal to a compact initial hypersurface
\(\Sigma_i\), \(h_{ij}\) its induced metric and \(K_{ij}\) its extrinsic
curvature.  For a noncompact slice, all integrals below are taken over a
declared compact averaging window and a window-independent exhaustion
limit is required.  The electric and magnetic Weyl tensors are
\[
E_{ij}
=C_{i\mu j\nu}n^\mu n^\nu,
\qquad
B_{ij}
=({}^{*}C)_{i\mu j\nu}n^\mu n^\nu.
\tag{C9.56a}
\]
Unlike the Lorentzian scalar \(C_{\mu\nu\rho\sigma}C^{\mu\nu\rho\sigma}\),
\(E_{ij}E^{ij}+B_{ij}B^{ij}\) is nonnegative.  Define the dimensionless
low-Weyl ratio
\[
\mathscr W_i
=
\frac{
\int_{\Sigma_i}
\left(E_{ij}E^{ij}+B_{ij}B^{ij}\right)\,dV_h
}{
\int_{\Sigma_i}
\left[
M_P^4+\bigl({}^{(3)}R\bigr)^2
+\bigl(K_{ij}K^{ij}\bigr)^2
\right]dV_h
}.
\tag{C9.57}
\]
The low-boundary datum is
\[
\boxed{
\mathcal B_{\rm cos}^{\rm low}
=
\bigl(
\mathscr W_i\ll1,
S_{\rm gen,i}\ \hbox{in the selected low class},
\mathfrak b_{\rm prim},
\mathfrak b_{\rm therm}
\bigr).
}
\tag{C9.58}
\]
Large homogeneous Ricci curvature is compatible with small Weyl
disorder.  The boundary is source-selected data unless the aperture
boundary problem yields it as an isolated spectral branch.

### 13. Archive filtration

Let \(\precsim_D\) denote the reflexive closure of the strict archive
order \(\prec_D\) constructed in Chapter 6, after the same
redescription quotient.  Then
\((\mathsf P_Y,\precsim_D)\) is the objective event poset.  For
\(p\in\mathsf P_Y\),
\[
\mathfrak A(p)
=
\operatorname{Archive}
\{\mathcal R(q):q\precsim_Dp\}.
\tag{C9.59}
\]
For \(p\precsim_Dq\), retention is a morphism
\[
\iota_{pq}:\mathfrak A(p)\to\mathfrak A(q),
\qquad
\iota_{qr}\iota_{pq}=\iota_{pr}.
\tag{C9.60}
\]
For an explicitly fixed eligibility resolution, define
\[
S_{\rm rec}^{\rm count}(p)
=
\log N_{\rm rec}^{\rm eff}(p).
\tag{C9.61}
\]
If retention is injective on eligible persistence classes,
\[
p\precsim_Dq
\quad\Longrightarrow\quad
S_{\rm rec}^{\rm count}(p)
\le S_{\rm rec}^{\rm count}(q).
\tag{C9.62}
\]
This is archive monotonicity.  It is not the von Neumann,
hydrodynamic or generalized gravitational entropy law.

### 14. Temporal order

A temporal readout is an order embedding
\[
\boxed{
\Theta_A:
(\mathsf P_Y,\precsim_D)
\hookrightarrow
(\mathcal T_Y,\preceq_t).
}
\tag{C9.63}
\]
\(\mathcal T_Y\) is initially a poset.  A real-valued clock coordinate
is an additional order-preserving representation and need not exist
globally.

Let \(\mathsf P_Y^{\rm out}\) be the dependency component reachable
from the selected low-boundary class by \(\precsim_D\), including the
boundary class itself.  For \(p,q\in\mathsf P_Y^{\rm out}\), define the
archive arrow by
\[
p\preceq_Aq
\quad\Longleftrightarrow\quad
\begin{cases}
p\precsim_Dq,\\
\iota_{pq}\ \text{exists and preserves eligible records},\\
S_{\rm rec}^{\rm count}(p)\le S_{\rm rec}^{\rm count}(q).
\end{cases}
\tag{C9.64}
\]
With \(\iota_{pp}=I\) and (C9.60), this relation is reflexive and
transitive; antisymmetry is inherited after quotienting archive-equivalent
events.
The thermodynamic chapter independently supplies
\(\preceq_{\rm th}\) from nonnegative entropy production and
\(\preceq_{\rm gen}\) where a generalized second law applies.  Branch
compatibility introduces order embeddings \(\Theta_{\rm th}\) and
\(\Theta_{\rm gen}\) from their respective event domains into the same
temporal target \(\mathcal T_Y\), and requires
\[
\boxed{
\Theta_A(\preceq_A)
=
\preceq_t|_{\rm archive},
\qquad
\Theta_{\rm th}(\preceq_{\rm th})
=\preceq_t|_{\rm th},
\qquad
\Theta_{\rm gen}(\preceq_{\rm gen})
=\preceq_t|_{\rm gen}.
}
\tag{C9.65}
\]
On overlaps these restrictions coincide.  This is the typed statement
that archive retention, thermodynamic production and generalized-entropy
growth choose one orientation without identifying their entropy
functionals.

For a Green-hyperbolic operator \(P\) on the solved spacetime,
\[
PG_{\rm ret/adv}f=f,
\qquad
G_{\rm ret/adv}Pf=f
\tag{C9.66}
\]
for compactly supported test sections in the respective domains, and
\[
\operatorname{supp}(G_{\rm ret}f)
\subseteq J^+(\operatorname{supp}f),
\qquad
\operatorname{supp}(G_{\rm adv}f)
\subseteq J^-(\operatorname{supp}f).
\tag{C9.67}
\]
The low boundary and archive/thermodynamic orientation select the
retarded branch.  Retarded propagation is not used to define the
pretemporal dependency relation.

### 15. Cosmological well-posedness

After gauge fixing and a first-order reduction, write the coupled
background, perturbation and kinetic system as
\[
\mathcal A^0(X;\theta_*,\mathfrak b)\partial_\eta X
+\mathcal A^i(X;\theta_*,\mathfrak b)D_iX
=
\mathcal N(X;\theta_*,\mathfrak b)
+\mathcal C_{\rm coll}[X],
\qquad
\mathcal C(X)=0.
\tag{C9.68}
\]
On a nonlinear branch require a positive symmetrizer making (C9.68)
strongly or symmetrically hyperbolic, with coefficients locally Lipschitz
in the \(H^s\) topology.  On the linear perturbation branch this reduces
to a nonautonomous generator
\(\partial_\eta X=\mathcal A(\eta)X+\mathcal N(\eta)\).
Assume also that the weighted collision map is locally Lipschitz,
preserves positivity, and that the constraints propagate.  Hyperbolic
energy estimates and the kinetic existence theorem then give local
existence, uniqueness and continuous dependence for admissible initial
data.  Global extension to \(I\) requires an a priori bound
\[
\sup_{\eta\in I}\|X(\eta)\|_{\mathscr X_{\rm cos}^{\rm an}}<\infty
\tag{C9.69}
\]
and preservation of the hyperbolicity, positivity and EFT gates.

The cosmological solution map is consequently
\[
\operatorname{CosSol}_{\mathfrak b}:
\mathscr D_{\rm cos}^{\rm adm}
\dashrightarrow
\mathscr X_{\rm cos}^{\rm an},
\tag{C9.70}
\]
not an untyped self-map.  Composing it with (C9.4a) supplies the archive
filtration.  Backreaction with the other sectors is handled by the global
simultaneous solution in Chapter 10.

### 16. Recovery limits

Let \(L\) be the minimum curvature, background-variation and observed
wavelength scale on the compact domain under comparison.  The standard
FLRW--Einstein--Boltzmann branch is recovered when
\[
\boxed{
\begin{aligned}
\ell_A/L&\to0,\\
\chi_R,\chi_{MR},\chi_{\rm DE}&\to0,\\
\Sigma_{\rm ind}^R&\to0,\\
\mathcal Q_{\mu\nu}^{\rm grav}&\to0,\\
\mathfrak b_{\rm prim}&\to
\text{the selected standard primordial state}.
\end{aligned}
}
\tag{C9.71}
\]
Then
\[
G_{\mu\nu}+\Lambda_{\rm br}g_{\mu\nu}
=8\pi G_RT_{\mu\nu}^{\rm SM+DM},
\tag{C9.72}
\]
with standard kinetic species and transfer functions.  Thermodynamic
recovery additionally takes the controlled KMS, kinetic and
\(\operatorname{Kn}\to0\) limits of Chapter 9a.

### 17. Cosmological completion theorem

#### Theorem C9.1 — conditional large-scale readout

Assume:

1. the exact-once action (C9.5) is renormalized and has a well-posed
   variational problem;
2. a specific FLRW background, perturbation and kinetic initial/boundary
   datum is fixed and satisfies the constraints, ownership and positivity
   conditions;
3. every optional vacuum, dark, primordial and baryogenesis branch is
   supplied by its typed operator/action and boundary data;
4. the gauge-fixed background, perturbation and kinetic equations
   satisfy the well-posedness conditions of section 15;
5. the low-boundary, archive, thermodynamic and retarded orientations
   satisfy (C9.65), and the archive and temporal reconstructions are
   fixed up to order isomorphism;
6. the solution remains inside the EFT and stability domain on \(I\).

Then for that fixed datum there exists a unique solution in the declared
Sobolev/weighted kinetic class on its maximal admitted interval.  Analytic regularity is
obtained only on a subbranch whose coefficients and data satisfy the
corresponding analytic-hyperbolic hypotheses; it is not inferred from
the \(H^s\) energy estimate.  Together with the supplied archive
reconstruction the solution defines
one equivalence class
\[
[X_{\rm cos}]
=
(a,H,\Phi,\Psi,h_\lambda,f_A,
\mathcal P_{AB},T_{IA},\mathfrak A,\Theta_A),
\tag{C9.73}
\]
and every light-cone, CMB, clustering, lensing and gravitational-wave
observable is a functional of this same class.  A vacuum magnitude,
dark abundance, primordial spectrum or baryon asymmetry is an output
only when the corresponding branch equation has actually been solved.

### 18. Complete large-scale chain

\[
\boxed{
\begin{gathered}
\Omega
\longrightarrow
\text{aperture carriers and boundary data}\\
\longrightarrow
\bigl(
\Lambda_{\rm br},
\mathfrak b_{\rm dark},
\mathfrak b_{\rm prim},
\mathfrak b_{B/L}
\bigr)\\
\longrightarrow
\Gamma_{\rm tot,CTP}
\xrightarrow{\delta\Gamma=0}
(a,H,\Phi,\Psi,h_\lambda,f_A)\\
\longrightarrow
(\mathsf{BBN},\mathsf{CMB},\mathsf{LSS},
\mathsf{Lens},\mathsf{GW})\\
\longrightarrow
\mathfrak A(p)
\longrightarrow
(\preceq_A,\preceq_{\rm th},\preceq_{\rm gen})
\xrightarrow{\Theta_A}
(\mathcal T_Y,\preceq_t).
\end{gathered}
}
\tag{C9.74}
\]
Every branch and observable in this chain carries a forward map back to
the same selected source realization.
