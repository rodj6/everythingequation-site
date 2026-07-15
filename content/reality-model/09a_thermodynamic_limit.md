# The Source-to-Readout Construction

## Statistical mechanics, thermodynamic entropy and hydrodynamic recovery

### 1. Scope of the thermodynamic sector

Thermodynamics is not identified with archive growth.  It is the
large-system, coarse-observable limit of the Tier-1 quantum and kinetic
sectors on the reconstructed spacetime.  Its state is
\[
\mathfrak T_{\rm th}
=
\bigl(
\mathcal A_{\rm th},\omega,
\alpha_t,\mathcal C,
S_{\rm vN},S_{\rm rel},S_{\rm hyd},
s^\mu,T^{\mu\nu},J^\mu
\bigr),
\tag{TH9a.1}
\]
where \(\mathcal A_{\rm th}\) is the thermodynamic observable algebra,
\(\alpha_t\) its physical time evolution, \(\mathcal C\) a declared
coarse-observable or kinetic closure, and the three entropies are,
respectively, von Neumann, relative and hydrodynamic entropy.  Record
count entropy \(S_{\rm rec}\) is not a component of (TH9a.1).

The readout is a partial map
\[
\operatorname{ThRead}:
\mathsf P_F\times\mathsf P_Q\times\mathsf P_M\times\mathsf P_G
\dashrightarrow\mathsf P_{\rm th}.
\tag{TH9a.2}
\]
Its domain consists of branches admitting the appropriate equilibrium
state, open-system limit or kinetic scaling.  No thermodynamic state is
assigned at the source or aperture level.

### 2. Equilibrium and KMS states

Let \(\mathcal A\) be a \(C^*\)-algebra and
\(\alpha:\mathbb R\to\operatorname{Aut}(\mathcal A)\) a strongly
continuous time evolution.  A state \(\omega_\beta\) is a
\(\beta\)-KMS state when, for every \(A,B\) in a norm-dense analytic
subalgebra, there exists a function \(F_{A,B}\) analytic on
\[
\{z\in\mathbb C:0<\operatorname{Im}z<\beta\}
\tag{TH9a.3}
\]
and continuous on its closure such that
\[
F_{A,B}(t)=\omega_\beta(A\alpha_t(B)),
\qquad
F_{A,B}(t+i\beta)=\omega_\beta(\alpha_t(B)A).
\tag{TH9a.4}
\]
This definition survives the infinite-volume limit in which no Gibbs
density matrix exists.

For a general von Neumann algebra, \(S_{\rm rel}\) means Araki relative
entropy of normal positive functionals.  The quantity \(S_{\rm vN}\) is
used only on a type-I factor, a split inclusion with a declared type-I
interpolant, or a specified finite coarse-graining.  In particular, no
finite density-matrix entropy is assigned directly to a local type-III
QFT algebra.  Monotonicity under normal completely positive unital maps
provides the algebraic replacement for the density-matrix data-processing
inequality.

For a finite type-I system with Hamiltonian \(H\) and partition function
\(Z_\beta=\operatorname{Tr}e^{-\beta H}<\infty\),
\[
\rho_\beta=\frac{e^{-\beta H}}{Z_\beta}
\tag{TH9a.5}
\]
is the KMS state.  The equilibrium entropy and free energy are
\[
S(\rho_\beta)
=-\operatorname{Tr}(\rho_\beta\log\rho_\beta),
\qquad
F_\beta=-\beta^{-1}\log Z_\beta.
\tag{TH9a.6}
\]
For an arbitrary density operator in the form domain of \(H\), define
\[
F_\beta(\rho)
:=
\operatorname{Tr}(\rho H)-\beta^{-1}S(\rho).
\tag{TH9a.6a}
\]
For any density operator \(\rho\) with compatible support,
\[
\boxed{
D(\rho\|\rho_\beta)
=
\operatorname{Tr}\rho(\log\rho-\log\rho_\beta)
=
\beta\bigl(F_\beta(\rho)-F_\beta(\rho_\beta)\bigr)
\ge0.
}
\tag{TH9a.7}
\]
Thus equilibrium minimizes free energy at fixed \(\beta\).

On a stationary spacetime with future timelike Killing field
\(\xi^\mu\), local equilibrium uses inverse-temperature vector
\[
\beta^\mu=\beta_0\xi^\mu.
\tag{TH9a.8}
\]
The local temperature obeys the Tolman relation
\[
T(x)\sqrt{-\xi^2(x)}=T_0.
\tag{TH9a.9}
\]
This ties thermal equilibrium to the same geometric time orientation
used by the field and record sectors.

### 3. The dissipative field and quantum entropy production

The canonical field supplies only the total dissipative capacity
\[
\frac12\sum_rL_r^\dagger L_r=\gamma K.
\tag{TH9a.10}
\]
Thermodynamic interpretation requires a trace-preserving quantum
Markov semigroup
\[
\dot\rho=\mathcal L(\rho)
=-i[H,\rho]
+\sum_r
\left(
L_r\rho L_r^\dagger
-\frac12\{L_r^\dagger L_r,\rho\}
\right)
\tag{TH9a.11}
\]
and a faithful stationary state
\[
\mathcal L(\rho_\beta)=0.
\tag{TH9a.12}
\]
When the generator satisfies quantum detailed balance with respect to
\(\rho_\beta\), Spohn's inequality gives
\[
\boxed{
\sigma(\rho)
:=
-\operatorname{Tr}
\left[
\mathcal L(\rho)
(\log\rho-\log\rho_\beta)
\right]
\ge0.
}
\tag{TH9a.13}
\]
Equivalently,
\[
\frac{d}{dt}D(\rho_t\|\rho_\beta)
=-\sigma(\rho_t)\le0.
\tag{TH9a.14}
\]
Writing
\[
\dot Q
=
\operatorname{Tr}(H\mathcal L(\rho)),
\qquad
S_{\rm vN}(\rho)=-\operatorname{Tr}\rho\log\rho,
\tag{TH9a.15}
\]
for a time-independent Hamiltonian with no external driving or work
injection, one obtains the Clausius balance
\[
\boxed{
\frac{dS_{\rm vN}}{dt}
-\beta\dot Q
=\sigma(\rho)\ge0.
}
\tag{TH9a.16}
\]

If \(H=H(t)\), the energy balance instead contains
\(\dot W=\operatorname{Tr}(\rho\dot H)\); equation (TH9a.16) applies to
the heat part only after this work term has been separated.

Equation (TH9a.16) is not a consequence of \(K\ge0\) alone.  It uses a
specific jump factorization, a stationary KMS state and detailed
balance.  A different factorization of the same \(K\) can describe
particle loss, dephasing or driven nonequilibrium transport and need
not share the same thermodynamic interpretation.

### 4. Local nonequilibrium thermodynamics

In local equilibrium let \(u^\mu\) be the fluid velocity,
\(T\) temperature and \(\mu_A\) chemical potentials.  The ideal
constitutive relations are
\[
T_{(0)}^{\mu\nu}
=(\epsilon+p)u^\mu u^\nu+pg^{\mu\nu},
\qquad
J_{A,(0)}^\mu=n_Au^\mu.
\tag{TH9a.17}
\]
The entropy current is
\[
s_{(0)}^\mu=su^\mu,
\qquad
Ts=\epsilon+p-\sum_A\mu_An_A.
\tag{TH9a.18}
\]
At first dissipative order,
\[
\begin{aligned}
T^{\mu\nu}
&=
T_{(0)}^{\mu\nu}
-2\eta\,\sigma^{\mu\nu}
-\zeta\,\Delta^{\mu\nu}\nabla_\alpha u^\alpha
+u^\mu q^\nu+u^\nu q^\mu,\\
J_A^\mu
&=
n_Au^\mu+\nu_A^\mu ,
\end{aligned}
\tag{TH9a.19}
\]
where
\[
\Delta^{\mu\nu}=g^{\mu\nu}+u^\mu u^\nu,
\qquad
u_\mu q^\mu=u_\mu\nu_A^\mu=0.
\tag{TH9a.20}
\]
With positive transport matrix, \(\eta,\zeta\ge0\), the completed entropy
current satisfies
\[
\boxed{
\nabla_\mu s^\mu
=
\frac{2\eta}{T}\sigma_{\mu\nu}\sigma^{\mu\nu}
+\frac{\zeta}{T}(\nabla_\mu u^\mu)^2
+\mathcal X^T\mathbb L\,\mathcal X
\ge0.
}
\tag{TH9a.21}
\]
\(\mathcal X\) collects thermal and chemical forces and
\(\mathbb L\ge0\) is the Onsager matrix.

First-order relativistic constitutive equations are an asymptotic
long-wavelength description and may not define a causal initial-value
problem outside that regime.  A causal second-order completion or a
kinetic realization is required for cosmological evolution at finite
relaxation time.

### 5. Kinetic origin and hydrodynamic closure

For a species \(A\), let \(f_A(x,p)\ge0\) solve
\[
p^\mu\nabla_\mu f_A
-\Gamma^i_{\alpha\beta}p^\alpha p^\beta
\frac{\partial f_A}{\partial p^i}
=C_A[f].
\tag{TH9a.22}
\]
Its species stress and the currents of charges \(q_{aA}\) are
\[
T_A^{\mu\nu}=\int dP\,p^\mu p^\nu f_A,
\qquad
J_a^\mu=\sum_A\int dP\,q_{aA}p^\mu f_A.
\tag{TH9a.23}
\]
The collision invariants give
\[
\sum_A\int dP\,q_{aA}C_A[f]=\mathcal S_a,
\qquad
\sum_A\int dP\,p^\nu C_A[f]=0,
\tag{TH9a.24}
\]
where \(\mathcal S_a=0\) for an exactly conserved charge and is the
explicit anomaly/reaction source otherwise.  Therefore
\[
\nabla_\mu J^\mu_a=\mathcal S_a,
\qquad
\nabla_\mu T_A^{\mu\nu}=Q_A^\nu,
\qquad
\sum_AQ_A^\nu=0.
\tag{TH9a.25}
\]

For classical statistics, the kinetic entropy current is
\[
s^\mu
=
-\sum_A\int dP\,p^\mu
\bigl(f_A\log f_A-f_A\bigr),
\tag{TH9a.26}
\]
with the Bose/Fermi replacements when required.  A collision operator
obeying microscopic reversibility gives the \(H\)-theorem
\[
\boxed{\nabla_\mu s^\mu\ge0.}
\tag{TH9a.27}
\]

Let
\[
\operatorname{Kn}=\lambda_{\rm mfp}/L_{\rm macro}.
\tag{TH9a.28}
\]
If the linearized collision operator has a coercive spectral gap on the
orthogonal complement of its collision invariants, the nonlinear
collision map has the required weighted regularity, and the initial
data are well prepared in a scaling regime with uniform moment and
positivity bounds, the Chapman--Enskog or Hilbert expansion
\[
f=f_{\rm eq}+\operatorname{Kn}f_1
+\operatorname{Kn}^2f_2+\cdots
\tag{TH9a.29}
\]
is controlled on its declared time interval.  A spectral gap alone is
not a hydrodynamic-limit theorem.  Projection onto the
collision-invariant kernel yields relativistic Euler theory at
\(\operatorname{Kn}=0\); the first correction yields viscous
hydrodynamics with transport coefficients determined by the inverse
linearized collision operator.  The hydrodynamic recovery map is
\[
\boxed{
\operatorname{HydroLim}:
\{f_{\operatorname{Kn}}\}_{\operatorname{Kn}>0}
\longmapsto
\lim_{\operatorname{Kn}\to0}
\operatorname{Mom}_{\rm inv}[f_{\operatorname{Kn}}]
=
(\epsilon,p,u^\mu,n_a,T^{\mu\nu},J_a^\mu,s^\mu).
}
\tag{TH9a.30}
\]

### 6. Cosmological thermal branch

For a homogeneous equilibrium radiation bath,
\[
\rho_r=\frac{\pi^2}{30}g_*(T)T^4,
\qquad
s=\frac{2\pi^2}{45}g_{*s}(T)T^3.
\tag{TH9a.31}
\]
Adiabatic FLRW expansion gives
\[
\nabla_\mu s^\mu=0
\quad\Longleftrightarrow\quad
s\,a^3=\text{constant}.
\tag{TH9a.32}
\]
Particle production, viscosity and chemical relaxation instead give
\[
\frac{d}{dt}(sa^3)=a^3\sigma_{\rm th}\ge0.
\tag{TH9a.33}
\]
Freeze-out is obtained from the kinetic equation; for a stable
self-conjugate species in the usual dilute limit,
\[
\dot n_\chi+3Hn_\chi
=
-\langle\sigma v\rangle
(n_\chi^2-n_{\chi,\rm eq}^2).
\tag{TH9a.34}
\]
The mass and cross section in (TH9a.34) must come from the same selected
matter branch as the cosmological stress.

### 7. Baryogenesis and leptogenesis as typed branches

The observed matter-antimatter asymmetry is not produced by writing
\(\mathsf{Baryo/Leptogenesis}\) in a thermal sequence.  A baryogenesis
branch is the datum
\[
\mathfrak b_B
=
\bigl(
\mathcal L_{\Delta B,\Delta L,\rm CP},
\Gamma_{\rm CP},
\mathcal C_{\rm wash},
\mathcal I_B
\bigr)
\tag{TH9a.35}
\]
whose collision terms violate the relevant charge, contain a
basis-invariant CP-odd source and depart from equilibrium.  The
charge-yield vector \(Y_\Delta=n_\Delta/s\) obeys
\[
\boxed{
\frac{dY_\Delta}{dz}
=
\mathsf S_{\rm CP}(z;\theta_*)
-\mathsf W(z;\theta_*)Y_\Delta,
}
\tag{TH9a.36}
\]
with \(z=M/T\).  The source and washout kernels are derived from the
selected Lagrangian and finite-temperature rates.

For type-I leptogenesis one may take
\[
\mathcal L
\supset
-\overline L\,Y_\nu\widetilde HN
-\frac12\overline{N^c}M_RN+\mathrm{h.c.},
\tag{TH9a.37}
\]
with CP invariants such as
\[
\operatorname{Im}
\bigl[(Y_\nu^\dagger Y_\nu)_{ij}^2\bigr].
\tag{TH9a.38}
\]
The branch is admitted only when the kinetic network, spectator
effects, sphaleron conversion and washout are included to the claimed
accuracy.  No baryon abundance is assigned in their absence.

### 8. Generalized entropy and gravitational ownership

On a semiclassical causal horizon or quantum extremal surface, define
\[
\boxed{
S_{\rm gen}
=
\frac{A_{\rm ren}}{4G_R\hbar}
+S_{\rm out}^{\rm ren}
+S_{\rm grav}^{\rm higher}.
}
\tag{TH9a.39}
\]
On a quantum-extremal-surface branch, the surface \(X_*\) is determined
by the boundary-value problem
\[
\delta_XS_{\rm gen}[X_*]=0,
\qquad
X_*\sim\mathcal R_{\partial}
\tag{TH9a.39a}
\]
with the prescribed homology and anchoring class; the physical entropy
uses the selected minimal admissible extremum when several exist.  A
causal-horizon branch instead evaluates (TH9a.39) on its horizon cuts.

For a stationary bifurcate Killing horizon \(\mathcal H\), the
gravitational part is the entropy functional of the same renormalized
action used in the field equation.  For a local Lagrangian with no
derivatives of curvature,
\[
S_{\rm Wald}^{\rm ren}
=
-\frac{2\pi}{\hbar}
\int_{\mathcal H}
\frac{\partial\mathcal L_{\rm grav}^{\rm ren}}
{\partial R_{\mu\nu\rho\sigma}}
\epsilon_{\mu\nu}\epsilon_{\rho\sigma}\,dA,
\qquad
S_{\rm Wald}^{\rm ren}
=\frac{A_{\rm ren}}{4G_R\hbar}
+S_{\rm grav}^{\rm higher}.
\tag{TH9a.39b}
\]
Derivative-of-curvature actions use the corresponding Iyer--Wald
functional.  With surface gravity \(\kappa_H\),
\[
T_H=\frac{\hbar\kappa_H}{2\pi},
\qquad
\delta M
=T_H\delta S_{\rm Wald}^{\rm ren}
+\Omega_H\delta J+\Phi_H\delta Q
\tag{TH9a.39c}
\]
on the stationary branch.  These relations are recovery conditions for
the black-hole sector, not independent definitions of its couplings.

The UV divergence of \(S_{\rm out}\) and the renormalization of
\(G_R\) and higher-curvature couplings are one matched operation.
Their counterterms are not counted once in the area term and again as
matter entropy.  For the exact-once action decomposition,
\[
\operatorname{Own}(S_{\rm gen})
=
\operatorname{Own}(S_{\rm grav}^{\rm Wald})
\sqcup
\operatorname{Own}(S_{\rm out}^{\rm state}),
\tag{TH9a.40}
\]
with the local counterterm pieces assigned to the renormalized
gravitational functional.

The generalized second law is the branch condition
\[
\boxed{
\frac{dS_{\rm gen}}{d\lambda}\ge0
}
\tag{TH9a.41}
\]
along the admitted future horizon parameter \(\lambda\), under the
semiclassical assumptions of the chosen theorem.  It is not inferred
from record-count monotonicity.  Black-hole equilibrium additionally
requires the appropriate Hawking KMS state and regularity conditions;
evaporating branches use nonequilibrium generalized entropy.

### 9. Record entropy and thermodynamic entropy

Let \(S_{\rm rec}^{\rm count}\) be the logarithm of the effective number
of eligible persistent record classes.  In general,
\[
\boxed{
S_{\rm rec}^{\rm count}
\ne
S_{\rm vN}
\ne
S_{\rm hyd}
\ne
S_{\rm gen}.
}
\tag{TH9a.42}
\]
They may be compared only through a declared channel.  If a memory
register \(R\) is physically reset against a bath at temperature \(T\),
Landauer's inequality is
\[
\beta Q_{\rm bath}
\ge
S(\rho_R)-S(\rho_R'),
\tag{TH9a.43}
\]
with mutual-information corrections when \(R\) is correlated with
other systems.  This is a physical bridge between record manipulation
and thermodynamic entropy; mere archive inclusion is not.

The temporal compatibility condition is the common orientation
\[
\boxed{
\precsim_D
\ \parallel\
\operatorname{supp}G_{\rm ret}
\ \parallel\
\sigma_{\rm th}\ge0
\ \parallel\
dS_{\rm gen}/d\lambda\ge0
}
\tag{TH9a.44}
\]
on a branch satisfying the relevant hypotheses.  Record retention
selects an archive-compatible direction, local entropy production
selects the thermodynamic direction, and the low-boundary condition
requires their agreement.  None is defined by another.

### 10. Thermodynamic recovery theorem

#### Theorem TH9a.1 — controlled thermodynamic limit

Assume:

1. the quantum branch admits either a faithful KMS state or a
   well-posed nonequilibrium reference state;
2. the dissipative realization is CPTP and, for equilibrium relaxation,
   satisfies detailed balance;
3. the kinetic collision operator conserves the declared charges and
   stress, satisfies the \(H\)-theorem, has a coercive gap off its
   invariant subspace, and obeys the weighted regularity and uniform
   moment bounds stated in Section 5;
4. the Knudsen expansion is valid on the claimed scale interval;
5. all entropy and stress counterterms obey exact-once ownership;
6. the low-boundary and temporal orientations are compatible with the
   retarded and entropy-producing directions;
7. every claimed freeze-out or baryogenesis subbranch supplies
   reaction kernels and finite-temperature rates from the selected
   matter theory, together with a positive, charge-consistent,
   well-posed kinetic network on the claimed interval; a baryogenesis
   claim also satisfies the CP-source, spectator, sphaleron and washout
   conditions of Section 7;
8. every claimed horizon/QES subbranch supplies the renormalized
   functional (TH9a.39), the anchoring or horizon-cut boundary data,
   matched entropy/gravitational counterterms, an admissible regular
   state, and the appropriate Section 8 gate: extremality, homology and
   minimality for a QES, or the hypotheses of the generalized-second-law
   theorem used to establish (TH9a.41) for a causal horizon.

Then, on each subbranch whose corresponding hypotheses are active, the
Tier-1 construction recovers:
\[
\boxed{
\begin{gathered}
\text{Gibbs/KMS equilibrium on the equilibrium subbranch},\\
\text{Clausius--Spohn production for the detailed-balance semigroup},\\
\text{Euler and viscous hydrodynamic limits},\\
\text{cosmological kinetic and freeze-out evolution, and charge-yield
evolution on an admitted baryogenesis subbranch},\\
\text{generalized gravitational entropy on admitted horizon/QES subbranches}.
\end{gathered}
}
\tag{TH9a.45}
\]
Record-count entropy remains a distinct archive observable connected to
thermodynamics only by explicit physical information-processing
channels.

### 11. Complete thermodynamic descent

\[
\boxed{
\begin{aligned}
(K,h(K),\{L_r\})
&\longrightarrow
(\mathcal A,\alpha_t,\mathcal L,\omega_\beta)
\longrightarrow
(\rho_\beta,D(\rho\|\rho_\beta),\sigma),\\
(\mathsf P_F,\mathsf P_M,\mathsf P_G)
&\longrightarrow
f_A(x,p)
\xrightarrow{\operatorname{Kn}\to0}
(T^{\mu\nu},J_a^\mu,s^\mu),\\
(f_A,a,\theta_*)
&\longrightarrow
(\text{thermal history},\text{freeze-out},
\text{baryogenesis branch}),\\
(\Gamma_{\rm grav}^{\rm ren},\omega,\mathcal H_{\rm hor})
&\longrightarrow
(S_{\rm gen},\preceq_{\rm gen}),\\
(S_{\rm vN},S_{\rm hyd},S_{\rm gen},\preceq_{\rm th})
&\xleftrightarrow{\rm declared\ physical\ channel}
(S_{\rm rec}^{\rm count},\preceq_A).
\end{aligned}
}
\tag{TH9a.46}
\]
