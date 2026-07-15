# The Source-to-Readout Construction

## Spectral parameter selection, renormalization and certified numerical readout

### 1. Parameter data and quotient

Fix a prepared realization \(Y\), an admitted four-dimensional matter branch
\[
\mathfrak G_F(Y)
=
(\mathcal A_F,\mathcal H_F,D_F,\gamma_F,J_F),
\]
and a source matching scale \(\mu_\star>0\).  The renormalized physical
parameter point is not a coordinate list but an equivalence class
\[
\boxed{
[\theta]_{\rm phys}
\in
\Theta_{\rm phys}
:=
\Theta_{\rm ren}/
\bigl(
\mathcal G_{\rm gauge}\times
\mathcal G_{\rm flavour}\times
\mathcal G_{\rm field}\times
\mathcal G_{\rm scheme}
\bigr).
}
\tag{P8.1}
\]
On a fixed neutrino branch a representative may be written
\[
\theta(\mu)=
\bigl(
g_Y,g_2,g_3,\mu_H^2,\lambda_H,
Y_u,Y_d,Y_e,\mathcal N_\nu,\bar\theta,
G_R,\Lambda_{\rm br},\{C_i\}
\bigr)_\mu ,
\tag{P8.2}
\]
where \(\{C_i\}\) are Wilson coefficients retained at the stated EFT
order.  A change of flavour basis changes the matrices but not their
singular values, relative left eigenspaces or invariant CP tensors.

The aperture variables belong to a finite-dimensional stratum
\(\mathcal U_Y\) or, before a spectral truncation, to a Banach manifold
\(\mathscr U_Y\):
\[
u=
\bigl(
\Lambda_A,\widehat\beta,
f_4,f_2,f_0,D_F,
K_{\rm OS},W_\partial,\Pi_{\rm em},
\mathfrak b_\nu,\mathfrak b_{\rm top},
\mathfrak b_E,\mathfrak s,\mu_\star
\bigr).
\tag{P8.3}
\]
Here \(K_{\rm OS}\) is a positive self-adjoint first-order elliptic
boundary operator, \(W_\partial\ge0\) is a bounded spectral weight, and
\(\Pi_{\rm em}\) is the orthogonal projector onto the unbroken
electromagnetic channel.  On the electromagnetic compression we require
\[
[K_{\rm OS},\Pi_{\rm em}]=[W_\partial,\Pi_{\rm em}]=0
\tag{P8.4}
\]
or replace ordinary traces by the corresponding symmetrized compressed
trace.

The discrete coordinate \(\mathfrak b_E\) labels the admitted Euclidean
stationary sheet, including its contour component and boundary class.
Distinct isolated saddles therefore occupy distinct strata of
\(\mathscr U_Y\); this makes the reduced action below single valued
without minimizing physically distinct phases into one branch.

The map to renormalized parameters is
\[
\mathfrak R_{\rm par}^{\mathfrak s,\mu_\star}:
\mathscr U_Y\dashrightarrow\Theta_{\rm ren}^{\mathfrak s}(\mu_\star).
\tag{P8.5}
\]
It is partial because ellipticity, trace admissibility, anomaly
cancellation, vacuum admissibility and branch compatibility are domain
conditions, not values of the map.

### 2. Dimensional typing

The source spectrum is dimensionless.  The dimensional realization
character fixes \(\Lambda_A=\ell_A^{-1}\).  All dimensionful parameters
then have the form
\[
\theta_j^{\rm dim}
=
\Lambda_A^{d_j}\widehat\theta_j,
\qquad
\widehat\theta_j\in\mathbb R,
\tag{P8.6}
\]
with mass dimension \(d_j\).  The bulk heat variable and the boundary
collar variable obey
\[
T D_A^2\ \hbox{dimensionless},
\qquad
\beta K_{\rm OS}\ \hbox{dimensionless},
\qquad
\beta=\sqrt{T^*},
\qquad
\widehat\beta=\Lambda_A\sqrt{T^*}.
\tag{P8.7}
\]
The boundary collar and the RG matching point are the same physical
scale, as in Chapters 3 and 7.  They obey the scale-lock equation
\[
\boxed{
\mathcal C_{\rm scale}(u)
:=\mu_\star\sqrt{T^*}-1
=\frac{\mu_\star\widehat\beta}{\Lambda_A}-1
=0,
\qquad
\mu_\star=(T^*)^{-1/2}=\frac{\Lambda_A}{\widehat\beta}.
}
\tag{P8.7a}
\]
Thus \(\mu_\star\) and \(\widehat\beta\) are both useful atlas
coordinates but are not independent selection variables.
Accordingly, a first-order boundary eigenvalue enters as
\[
x_n=\beta\kappa_n
=\widehat\beta\,\frac{\kappa_n}{\Lambda_A},
\tag{P8.8}
\]
never as \(T^*\kappa_n\).

### 3. Source matching and the selection relation

Let
\[
I_{\rm src}
=
\bigl(
I_{\rm alg},I_{\rm ind},I_{\rm spec},
I_{\rm cap},I_{\rm top},I_{\rm mult}
\bigr)
\in\mathsf I_{\rm src}
\tag{P8.9}
\]
and let
\[
\Xi_Y:\mathsf I_{\rm src}\longrightarrow\mathsf I_{\rm readout}
\tag{P8.10}
\]
be the invariant transport supplied by the aperture.  If
\(\operatorname{Inv}:\mathscr U_Y\to\mathsf I_{\rm readout}\) is
continuous on the selected stratum, the matching condition is the
equalizer
\[
\boxed{
\mathscr U_{\rm src}(Y)
=
\operatorname{Eq}
\bigl(
\operatorname{Inv},
\Xi_Y(I_{\rm src})
\bigr)
\cap\mathscr U_{\rm adm}.
}
\tag{P8.11}
\]
\(\mathscr U_{\rm adm}\) imposes positivity, operator-domain
compatibility, complete anomaly cancellation, finite renormalized
action, stable or admitted metastable vacuum, and the declared EFT
cutoff.

Parameter selection is the relation
\[
\boxed{
\operatorname{SelPar}_Y(I_{\rm src})
=
\left\{
u\in\mathscr U_{\rm src}(Y):
0\in\mathfrak R_{\rm sel}(u;I_{\rm src})
\right\}/\!\sim .
}
\tag{P8.12}
\]
It is a relation until existence and isolation of a root have been
established.  Writing a displayed equation whose unknown remains free is
not parameter fixation.

### 4. Dirac--capacity bridge

For every parameter channel \(Q\), let
\[
\mathcal D_Q:D(\mathcal D_Q)\subset\mathcal H_Q\to\mathcal H_Q
\tag{P8.13}
\]
be self-adjoint and let
\[
K_Q:D(K_Q)\subset\mathcal H_Q\to\mathcal H_Q
\tag{P8.14}
\]
be positive self-adjoint.  A strong bridge is a unitary
\(U_Q:\mathcal H_Q^{D}\to\mathcal H_Q^{K}\) satisfying
\[
U_Q f(\mathcal D_Q^2)U_Q^*=f(K_Q)
\tag{P8.15}
\]
for every \(f\) in the declared response algebra.  A capacity bridge
requires equality only after the specified trace/probe functionals.
Weak spectral resemblance is not used for numerical parameter claims.

Define
\[
\lambda_T(x)=
\begin{cases}
(1-e^{-Tx})/(Tx),&x>0,\\
1,&x=0,
\end{cases}
\tag{P8.16}
\]
and
\[
\Lambda_T^{\rm tr}(K_Q)=\lambda_T(K_Q).
\tag{P8.17}
\]
On a determinant-admissible positive sector,
\[
D_T(K_Q)
=
-\log\det_{\tau_Q}
\left(
\Lambda_T^{\rm tr}(K_Q)|_{(\ker K_Q)^\perp}
\right).
\tag{P8.18}
\]
The determinant convention—finite, Fredholm, heat finite part or
zeta—is part of the operator datum.  Two conventions may be compared
only after their local counterterms have been matched.

### 5. Capacity constraints and variational selection

The Dirac-side response is
\[
S_{\Omega,Q}(T;u)
=
\tau_Q'
\left[
g_Q(T\mathcal D_Q^2)
\bigl(-\log\Lambda_T^{\rm tr}(\mathcal D_Q^2)\bigr)
\right].
\tag{P8.19}
\]
The capacity inequality is
\[
\Phi_Q(T;u)
:=
S_{\Omega,Q}(T;u)-D_T(K_Q(u))
\le0,
\qquad T\in I_Q.
\tag{P8.20}
\]
Let
\[
\mathcal S_{\rm spec}:
\mathscr U_Y\longrightarrow\mathbb R\cup\{+\infty\}
\tag{P8.20a}
\]
be the lower-semicontinuous, source-invariant spectral objective fixed by
the aperture.  It is the reduced action, not an unspecified penalty.
Let \(\mathscr F_Y(u)\) be the gauge-fixed Euclidean branch field space,
including its boundary conditions and, when gravity is varied, the
declared reflection-positive or steepest-descent contour that resolves
the Euclidean conformal-factor direction.  Write
\(\mathscr C_{\mathfrak b_E}(u)\subseteq\mathscr F_Y(u)\) for the
selected contour component.  Let
\[
\Gamma_{E}^{\rm owned}[\varphi;u]
=S_{\rm grav,E}^{\rm ren}
+S_{M,E}^{\rm cl}
+\Gamma_{\rm QFT,E,dyn}^{\rm ren}
+S_{\partial,E}
\tag{P8.20b}
\]
be the exact-once Euclidean/elliptic functional.  Its gravitational and
matter local terms contain the corresponding partition of
\(\operatorname{Tr}F(D_A^2/\Lambda_A^2)\); no heat coefficient occurs in
two summands.  Define the stable stationary relation
\[
\operatorname{Stat}_Y(u)
=\left\{
\varphi\in\mathscr C_{\mathfrak b_E}(u):
D_\varphi\Gamma_E^{\rm owned}=0,
\ \mathcal C_{\rm gauge}=0,
\ \left.\operatorname{Im}\Gamma_E^{\rm owned}
\right|_{\mathscr C_{\mathfrak b_E}(u)}=\text{constant},
\ D_\varphi^2\operatorname{Re}\Gamma_E^{\rm owned}
\text{ is coercive on the physical contour tangent}
\right\}.
\tag{P8.20c}
\]
On a selected isolated stationary branch \(\varphi_*(u)\), set
\[
\boxed{
\mathcal S_{\rm spec}(u)
=\operatorname{Re}\Gamma_E^{\rm owned}[\varphi_*(u);u],
\qquad
\vartheta_E(u)
=\operatorname{Im}\Gamma_E^{\rm owned}[\varphi_*(u);u]
\pmod{2\pi}.
}
\tag{P8.20d}
\]
If the stationary relation has no admitted element, set
\(\mathcal S_{\rm spec}=+\infty\); if it has several physical branches,
the branch label is retained rather than minimized away.  On every smooth
isolated stratum the implicit-function and envelope theorems give the
declared real-valued \(C^2\) reduced functional.  On a
reflection-positive real slice \(\vartheta_E=0\).  On a complex
steepest-descent cycle its constant phase is retained as branch data and
enters any interference or phase-matching residual; it is not silently
discarded from the theory even though the variational objective is the
real part.

Let \(\mathcal M_+(I_Q)\) be the cone of finite positive Radon measures.
For \(\mu_Q\in\mathcal M_+(I_Q)\),
\[
\mathcal L_{\rm sat}(u,\{\mu_Q\})
=
\mathcal S_{\rm spec}(u)
+\sum_Q\int_{I_Q}\Phi_Q(T;u)\,d\mu_Q(T).
\tag{P8.21}
\]
If \(\{c_j(u)=0\}\) denotes the smooth invariant, anchor and
normalization equalities on the stratum, define the full Lagrangian
\[
\mathcal L_{\rm sel}
=
\mathcal L_{\rm sat}
+\sum_j\lambda_jc_j.
\tag{P8.21a}
\]
On a \(C^2\) finite-dimensional stratum, the Karush--Kuhn--Tucker
conditions are
\[
\begin{aligned}
D_u\mathcal L_{\rm sel}&=0,\\
c_j(u)&=0,\\
\Phi_Q(T;u)&\le0,\\
\mu_Q&\ge0,\\
\int_{I_Q}\Phi_Q(T;u)\,d\mu_Q(T)&=0.
\end{aligned}
\tag{P8.22}
\]
They are necessary under a constraint qualification such as
Mangasarian--Fromovitz.  Sufficiency additionally requires positivity
of the reduced Hessian of \(\mathcal L_{\rm sel}\) on the critical cone.
In the Banach setting the same statements use Fréchet derivatives and a
normal-cone inclusion.

Ultraviolet and infrared anchors are independent constraints:
\[
N_Q:\mathscr K_Q^+\longrightarrow\mathscr K_Q^+
\tag{P8.22a}
\]
is a source-fixed, unitary-covariant positive spectral normalization
map, continuous in the strong-resolvent topology on the admitted family.
Its normalization constants belong to \(I_{\rm src}\), not to a fitted
Tier-1 target.  Then
\[
A_{{\rm UV},Q}(u)
=
S_{\Omega,Q}(T_{\rm UV};u)
-D_{T_{\rm UV}}\!\left(N_Q[K_Q(u)]\right)
=0,
\tag{P8.23}
\]
\[
\left|
S_{\Omega,Q}(T_{\rm IR};u)-D_{T_{\rm IR}}(K_Q(u))
\right|
\le B_{\max,Q},
\tag{P8.24}
\]
where \(N_Q\) and \(B_{\max,Q}\) are fixed before solving.

### 6. A genuine boundary spectral functional

Assume the electromagnetic boundary compression
\[
K_{\rm em}
:=
\Pi_{\rm em}K_{\rm OS}\Pi_{\rm em}
\tag{P8.25}
\]
is positive self-adjoint, first-order elliptic and has compact resolvent
on a compact boundary \(\Sigma\).  Require
\(W_\partial\Pi_{\rm em}\) to be a nonnegative classical
order-zero pseudodifferential weight preserving the operator domain;
this is the regularity needed for the weighted heat expansion.  Put
\[
\widehat K_{\rm em}=K_{\rm em}/\Lambda_A
\tag{P8.26}
\]
and use the first-order boundary normalization
\[
\zeta_{\partial}^{w}(s;T^*)
:=
\operatorname{Tr}_{\partial}
\left[
W_\partial\Pi_{\rm em}
\left(
\left.
\sqrt{T^*}\,K_{\rm em}
\right|_{(\ker K_{\rm em})^\perp}
\right)^{-s}
\right]
=
\operatorname{Tr}_{\partial}
\left[
W_\partial\Pi_{\rm em}
\left(
\left.
\widehat\beta\,\widehat K_{\rm em}
\right|_{(\ker K_{\rm em})^\perp}
\right)^{-s}
\right]
\tag{P8.26a}
\]
whenever the weighted trace is defined by meromorphic continuation.
Zero modes are retained separately as index/topology data.  The
expression \((K_{\rm em}/T^*)^{-s}\) is dimensionally inadmissible
for a first-order operator and is not used.

Equation (P8.26a) fixes the boundary normalization and the associated
heat coefficients.  The capacity entering parameter selection is the
non-polynomial spectral functional below.  Define
\[
b(x):=-\log\!\left(\frac{1-e^{-x}}{x}\right),
\qquad b(0)=0.
\tag{P8.27}
\]
For \(\epsilon>0\),
\[
B_{\epsilon}^{w,\partial}(\widehat\beta;u)
=
\operatorname{Tr}_{\partial}
\left[
W_\partial\Pi_{\rm em}\,
b(\widehat\beta\widehat K_{\rm em})
e^{-\epsilon\widehat K_{\rm em}}
\right].
\tag{P8.28}
\]
The small-\(\epsilon\) expansion is determined by the heat coefficients
of the first-order boundary problem.  If
\[
B_{\epsilon}^{w,\partial}
\sim
\sum_{r>0}\sum_{m=0}^{m_r}
c_{r,m}(u,\widehat\beta)
\epsilon^{-r}(\log\epsilon)^m
+c_{\log}(u,\widehat\beta)\log\epsilon
+B_{\rm fin}(u,\widehat\beta)+o(1),
\tag{P8.29}
\]
the renormalized capacity is
\[
\boxed{
B_{\rm ren}^{w,\partial}
(\widehat\beta;u,\mathfrak s_\partial)
:=
B_{\rm fin}
+C_{\rm loc}^{\mathfrak s_\partial}(u,\widehat\beta).
}
\tag{P8.30}
\]
\(C_{\rm loc}^{\mathfrak s_\partial}\) is a declared finite local
counterterm.  This construction depends on the complete spectrum and
weights through the non-polynomial function \(b\); it is not the value
of a zeta function at \(s=0\), and it retains genuine
\(\widehat\beta\)-dependence.

In a finite spectral truncation with eigenpairs
\((\widehat\kappa_n,\varphi_n)\),
\[
B_N^{w,\partial}(\widehat\beta)
=
\sum_{n=1}^{N}
\langle\varphi_n,W_\partial\Pi_{\rm em}\varphi_n\rangle\,
b(\widehat\beta\widehat\kappa_n)
-\operatorname{CT}_N,
\tag{P8.31}
\]
where \(\operatorname{CT}_N\) is obtained from the same heat
coefficients.  Convergence of \(B_N^{w,\partial}\) is a numerical
certification condition.

### 7. Gauge normalization

Let \(c_a>0\) be the finite-representation traces in a fixed generator
normalization:
\[
g_a^{-2}(\mu_\star)=c_af_0+\delta Z_a^{\mathfrak s}(\mu_\star).
\tag{P8.32}
\]
The boundary matching equation is
\[
\boxed{
\mathcal N_\partial(u)
:=
\frac{f_0}{192\pi^2}
-\frac{1}{\widehat\beta}
B_{\rm ren}^{w,\partial}
(\widehat\beta;u,\mathfrak s_\partial)
=0.
}
\tag{P8.33}
\]
Finite counterterms in (P8.30) and \(\delta Z_a^{\mathfrak s}\) must be
matched so that a scheme change moves both sides together.  At the
matching scale,
\[
\alpha^{-1}(\mu_\star)
=4\pi
\left[
g_2^{-2}(\mu_\star)+g_Y^{-2}(\mu_\star)
\right].
\tag{P8.34}
\]
Equations (P8.30)--(P8.34) define a computable map once the operator,
weights, subtraction prescription and spectral resolution are supplied.

### 8. The joint selection system

For fixed \(I_{\rm src}\), let
\(\mathscr C_{\rm sel}(I_{\rm src})\subset\mathscr U_Y\) be the
intersection of:

\[
\begin{array}{ll}
\operatorname{Inv}(u)=\Xi_Y(I_{\rm src}),&
A_{{\rm UV},Q}(u)=0,\\
\Phi_Q(T;u)\le0\quad(T\in I_Q),&
\mathcal N_\partial(u)=0,\\
\mathcal C_{\rm scale}(u)=0,&
\mu_\star>0,
\end{array}
\tag{P8.35}
\]

together with the exact anomaly, topology, positivity, boundary and
vacuum-admission gates.  Discrete index and anomaly classes label
strata; they are not subtracted as vectors.

Let \(N_{\mathscr C_{\rm sel}}(u)\) be the convex-analytic normal cone
when the feasible set is convex, or the limiting normal cone on a
prox-regular active stratum.  In either case
\[
N_{\mathscr C_{\rm sel}}(u)
\subset T_u^*\mathscr U_Y,
\qquad
\mathfrak R_{\rm sel}:
\mathscr U_Y\times\mathsf I_{\rm src}
\rightrightarrows T^*\mathscr U_Y.
\tag{P8.35a}
\]
The global selection law is the generalized equation

\[
\boxed{
0
\in
\mathfrak R_{\rm sel}(u;I_{\rm src})
:=
D\mathcal S_{\rm spec}(u)
+N_{\mathscr C_{\rm sel}(I_{\rm src})}(u).
}
\tag{P8.36}
\]

Equation (P8.36) includes the equality multipliers and the Radon-measure
capacity multipliers of (P8.21)--(P8.22).  It remains meaningful at an
active-set corner and does not treat an inequality as a smooth scalar
residual.

For executable analysis, fix an active stratum \(\mathfrak a\) satisfying
the constraint qualification and introduce its primal-dual variable

\[
\widetilde u
=
\left(
u,\{\mu_Q\},\{\lambda_j\}
\right)
\in\widetilde{\mathscr U}_Y^{\mathfrak a},
\tag{P8.36a}
\]

where \(\lambda_j\) are the equality multipliers.  The active equalities,
stationarity and complementary conditions define a single-valued smooth
residual

\[
\mathcal R_{\rm sel}^{\mathfrak a}:
\widetilde{\mathscr U}_Y^{\mathfrak a}
\times\mathsf I_{\rm src}
\longrightarrow
\mathscr Y_{\rm sel}^{\mathfrak a}.
\tag{P8.36b}
\]

Its zeros project precisely to solutions of (P8.36) on that stratum.  Let

\[
J_*
:=
D_{\widetilde u}
\mathcal R_{\rm sel}^{\mathfrak a}
(\widetilde u_*;I_{\rm src}).
\tag{P8.37}
\]

Local isolation follows if \(J_*\) is bounded below,

\[
\|J_*v\|_{\mathscr Y_{\rm sel}^{\mathfrak a}}
\ge c_*\|v\|_{\widetilde{\mathscr U}_Y^{\mathfrak a}},
\qquad c_*>0,
\tag{P8.38}
\]

and its range is complemented and transverse to zero.  In finite
dimensions this is full column rank together with consistency.  A
rectangular Jacobian is not assigned an inverse.

#### Proposition P8.1 — local isolation

If \(\mathcal R_{\rm sel}^{\mathfrak a}\) is \(C^1\),
\(\mathcal R_{\rm sel}^{\mathfrak a}(\widetilde u_*)=0\), and (P8.38)
holds with a complemented range and active-set regularity, then the
physical projection \(u_*\) is locally isolated modulo the equivalences
already removed.  If \(J_*\) is a Banach-space isomorphism, the selected
root depends \(C^1\)-smoothly on sufficiently small source-invariant
perturbations that do not change \(\mathfrak a\).

### 9. Family number and topological quantities

For a primitive generation projector \(p_F\in K_0(\mathcal A_F)\), let
\(\chi_{\rm gen}\in\mathbb N\) be the primitive multiplicity
normalization for which the admitted index pairing lies in
\(\chi_{\rm gen}\mathbb Z\).  Then
\[
N_{\rm fam}
=
\frac{
|\langle[p_F],[D_F]\rangle|
}{\chi_{\rm gen}}.
\tag{P8.39}
\]
This is an integer and is stable while the Fredholm gap remains open.
The statement \(N_{\rm fam}=3\) is obtained only after the selected
finite geometry has supplied the evaluated pairing
\[
|\langle[p_F],[D_F]\rangle|=3\chi_{\rm gen}.
\tag{P8.40}
\]
Equation (P8.40) is therefore a branch-selection condition until that
pairing is computed from explicit finite data.

For the strong-CP phase,
\[
\bar\theta=\theta+\arg\det(Y_uY_d).
\tag{P8.41}
\]
If the realized topological charge group contains a primitive
unit-charge class and its source character is trivial,
\[
\exp(i\bar\theta n)=1\quad\hbox{for every }n\in\mathbb Z,
\tag{P8.42}
\]
then
\[
\bar\theta=0\pmod{2\pi}.
\tag{P8.43}
\]
Without a primitive class, only the corresponding discrete congruence
follows.  A compensated axion branch is a distinct dynamical branch and
must include its kinetic term, anomaly coupling and vacuum equation.

### 10. Higgs and hierarchy sector

Define the finite spectral invariants
\[
\begin{aligned}
a_F&=\operatorname{Tr}\!
\left(
3Y_u^\dagger Y_u+3Y_d^\dagger Y_d
+Y_e^\dagger Y_e+Y_\nu^\dagger Y_\nu
\right),\\
b_F&=\operatorname{Tr}\!
\left(
3(Y_u^\dagger Y_u)^2+3(Y_d^\dagger Y_d)^2
+(Y_e^\dagger Y_e)^2+(Y_\nu^\dagger Y_\nu)^2
\right).
\end{aligned}
\tag{P8.44}
\]
The heat expansion defines, rather than numerically evaluates,
\[
Z_H=\mathscr Z_H(f_0,a_F),
\quad
\mu_0^2=\Lambda_A^2
\mathscr M_H(f_2,f_0,D_F,K_{\rm OS}),
\quad
\lambda_0=\mathscr L_H(f_0,b_F).
\tag{P8.45}
\]
With the convention
\[
V(H)
=
-\mu_H^2H^\dagger H+\lambda_H(H^\dagger H)^2,
\qquad
\lambda_H>0,
\tag{P8.45a}
\]
canonical normalization gives
\[
\mu_H^2=\mu_0^2/Z_H,
\qquad
\lambda_H=\lambda_0/Z_H^2,
\qquad
v^2=\mu_H^2/\lambda_H.
\tag{P8.46}
\]
Since \(M_P^2=2Z_R\Lambda_A^2\),
\[
\frac{v}{M_P}
=
\sqrt{
\frac{\varepsilon_H}{2Z_R\lambda_H}
},
\qquad
\varepsilon_H
:=
\frac{\mathscr M_H}{Z_H}.
\tag{P8.47}
\]

A small value of \(\varepsilon_H\) is stable only if the selection
system supplies one of the following:

1. a symmetry forcing \(\varepsilon_H=0\) at a limiting stratum and
   controlling its breaking;
2. an RG-invariant critical manifold to which the flow is transverse;
3. a spectral gap and second-variation bound that keep the saturated
   root isolated.

Bounded first derivatives alone do not turn a cancellation into a
natural hierarchy.  On a finite numerical stratum, structural stability
is expressed by
\[
\sigma_{\min}(J_*)\ge c_*>0,
\qquad
\lambda_{\min}
\left(
D_u^2\mathcal L_{\rm sel}|_{\mathcal C_{\rm crit}}
\right)\ge m_*>0.
\tag{P8.48}
\]
On a Banach stratum the first condition is replaced by the lower bound
(P8.38), and the Hessian inequality is interpreted as coercivity of its
quadratic form on the critical cone.

### 11. Flavour and neutrino readout

For boundary eigenmodes,
\[
K_{\rm OS}\varphi_{fi}^{L,R}
=\kappa_{fi}^{L,R}\varphi_{fi}^{L,R}.
\tag{P8.49}
\]
The collar transfer operators are
\[
T_f^{L,R}
=
\exp\!
\left(
-\widehat\beta\,\widehat K_f^{L,R}
\right),
\tag{P8.50}
\]
and
\[
\boxed{
Y_f=T_f^L\mathcal Y_f^{(0)}T_f^R.
}
\tag{P8.51}
\]
This is basis covariant.  Masses and mixing are
\[
m_{fi}
=\frac{v}{\sqrt2}\sigma_i(Y_f),
\qquad
V_{\rm CKM}=(U_u^L)^\dagger U_d^L,
\qquad
U_{\rm PMNS}=(U_e^L)^\dagger U_\nu.
\tag{P8.52}
\]
On a seesaw branch with invertible heavy block,
\[
M_\nu^{\rm light}
=
-M_DM_R^{-1}M_D^T
+O(\|M_D\|^3/\sigma_{\min}(M_R)^2).
\tag{P8.53}
\]
The error estimate is meaningful only when
\(\|M_D\|/\sigma_{\min}(M_R)\ll1\).

### 12. RG as a covariant flow

Let \(\mathcal E\to\mathbb R_{\log\mu}\) be the bundle of renormalized
coupling and Wilson-coefficient coordinates.  In scheme
\(\mathfrak s\), the RG vector field is
\[
\frac{d\theta^a}{d\log\mu}
=
\beta_{\mathfrak s}^a(\theta).
\tag{P8.54}
\]
A finite scheme transformation is a fibre diffeomorphism
\[
\theta'=f_{\mathfrak s\to\mathfrak s'}(\theta,\mu).
\tag{P8.55}
\]
The beta field transforms as
\[
\boxed{
\beta_{\mathfrak s'}(\theta')
=
D_\theta f\,\beta_{\mathfrak s}(\theta)
+\partial_{\log\mu}f.
}
\tag{P8.56}
\]
At a threshold \(M_j\), matching is a map
\[
\mathcal M_j:
\Theta_{\rm EFT}^{(j)}(M_j)
\longrightarrow
\Theta_{\rm EFT}^{(j-1)}(M_j)
\tag{P8.57}
\]
computed to the same loop and operator order as the flow.  Path
independence requires, to the retained order,
\[
\mathcal M_{2\to0}
=
\mathcal M_{1\to0}\circ\mathcal M_{2\to1}
+O\!\left(\hbar^{L+1},
\left(E/M\right)^{d_{\rm cut}-4}\right).
\tag{P8.58}
\]
An all-orders observable \(\mathcal O\) is scheme invariant:
\[
\mathcal O_{\mathfrak s}(\theta(\mu))
=
\mathcal O_{\mathfrak s'}(\theta'(\mu)).
\tag{P8.59}
\]
At finite order the difference is a truncation estimate, not exact
equality.

For Standard Model field content, the one-loop gauge coefficients in
the ordinary hypercharge normalization are
\[
\mu\frac{dg_Y}{d\mu}
=\frac{41}{6}\frac{g_Y^3}{16\pi^2},
\quad
\mu\frac{dg_2}{d\mu}
=-\frac{19}{6}\frac{g_2^3}{16\pi^2},
\quad
\mu\frac{dg_3}{d\mu}
=-7\frac{g_3^3}{16\pi^2}.
\tag{P8.60}
\]
Beyond one loop the complete selected particle content and threshold
scheme must be used.

### 13. Executable electromagnetic forward map

For a root \(u_*\), define
\[
\mathfrak F_\alpha(u_*)
:=
\operatorname{IRObs}_{\rm em}
\circ\operatorname{RGMatch}_{\mathfrak s,L}
\circ\operatorname{EWProj}
\circ\operatorname{GaugeNorm}
\circ\operatorname{BndSpec}(u_*).
\tag{P8.61}
\]
Its stages are:
\[
\begin{aligned}
\operatorname{BndSpec}:&
\quad
(K_{\rm em},W_\partial,\widehat\beta)
\mapsto
\bigl(
B_{\rm ren}^{w,\partial},f_0,
\{c_a\},\{\delta Z_a^{\mathfrak s}\}
\bigr),\\
\operatorname{GaugeNorm}:&
\quad
\bigl(
B_{\rm ren}^{w,\partial},f_0,
\{c_a\},\{\delta Z_a^{\mathfrak s}\}
\bigr)
\mapsto(g_Y,g_2,g_3)_{\mu_\star},\\
\operatorname{EWProj}:&
\quad
(g_Y,g_2)\mapsto e(\mu_\star),
\qquad e^{-2}=g_Y^{-2}+g_2^{-2},\\
\operatorname{RGMatch}:&
\quad
e(\mu_\star)\mapsto e_{\mathfrak s,L}(\mu_{\rm IR}),\\
\operatorname{IRObs}_{\rm em}:&
\quad
e_{\mathfrak s,L}(\mu_{\rm IR})
\mapsto\alpha_{\rm em}^{-1}(q_{\rm ref}^2).
\end{aligned}
\tag{P8.62}
\]
\(q_{\rm ref}\) and the infrared observable convention are fixed before
the solve.  \(\operatorname{IRObs}_{\rm em}\) includes the finite
vacuum-polarization and external-state conversion needed to pass from a
running scheme coupling to that physical observable.
The low-energy output is therefore
\[
\boxed{
\alpha_{\rm pred}^{-1}
=\mathfrak F_\alpha(u_*).
}
\tag{P8.63}
\]
No decimal value is licensed until (P8.31) has converged, the root has
been solved, all thresholds have been applied, and the uncertainty
budget has been propagated.

### 14. Derivation, calibration and the \(1/137\) fingerprint

Partition the empirical inputs before solving:
\[
\mathcal D
=
\mathcal D_{\rm anchor}
\sqcup
\mathcal D_{\rm cal}
\sqcup
\mathcal D_{\rm test}.
\tag{P8.64}
\]
\(\mathcal D_{\rm anchor}\) contains only already adopted physical
anchors and unit/scale conventions.  \(\mathcal D_{\rm cal}\) may fix
declared nuisance or detector quantities.  The electromagnetic
observable and every algebraically equivalent quantity belong to
\(\mathcal D_{\rm test}\) when testing the \(1/137\) fingerprint.

Let
\[
u_{\rm train}
\in
\arg\min_{u\in\mathscr U_{\rm src}}
\mathcal J_{\rm train}
(u;\mathcal D_{\rm anchor},\mathcal D_{\rm cal})
\tag{P8.65}
\]
subject to \(0\in\mathfrak R_{\rm sel}(u;I_{\rm src})\), with no use of
\(\mathcal D_{\rm test}\).  The held-out prediction is
\[
\alpha_{\rm pred}^{-1}
=
\mathfrak F_\alpha(u_{\rm train}).
\tag{P8.66}
\]
The appearance of \(1/137\) in the source material is treated as the
nominated spectral fingerprint to be tested by (P8.66), not as a number
inserted into (P8.33).

The numerical readout is certified at tolerances
\((\varepsilon_{\rm spec},\varepsilon_{\rm root},
\varepsilon_{\rm RG},\varepsilon_{\rm scheme})\) only if:
\[
\boxed{
\begin{aligned}
&\|B_{N+1}^{w,\partial}-B_N^{w,\partial}\|
\le\varepsilon_{\rm spec},\\
&\|\mathcal R_{\rm sel}^{\mathfrak a}
(\widetilde u_N;I_{\rm src})\|
\le\varepsilon_{\rm root},\\
&|\alpha^{-1}_{L+1}-\alpha^{-1}_{L}|
\le\varepsilon_{\rm RG},\\
&\sup_{\mathfrak s'\in\mathcal S_{\rm adm}}
|\alpha^{-1}_{\mathfrak s'}-\alpha^{-1}_{\mathfrak s}|
\le\varepsilon_{\rm scheme},\\
&\mathcal D_{\rm test}\cap
\operatorname{cl}_{\rm alg}
\bigl(
\mathcal D_{\rm anchor}\cup\mathcal D_{\rm cal}
\bigr)=\varnothing,\\
&\sigma_{\min}(J_*)\ge c_*>0.
\end{aligned}
}
\tag{P8.67}
\]
The final comparison uses the combined propagated interval
\[
\alpha_{\rm pred}^{-1}
\pm
\Delta_{\rm total},
\tag{P8.68}
\]
where \(\operatorname{cl}_{\rm alg}\) denotes algebraic and deterministic
forward-map closure, and \(\Delta_{\rm total}\) contains spectral truncation, root,
threshold, perturbative, scheme and anchor uncertainties.

### 15. Identifiability and covariance

After eliminating regular multipliers and quotient directions, let
\(F_A(u)=0\) be independent reduced residuals with covariance
\(\Sigma_F\), and put \(J_{Aa}=\partial F_A/\partial u^a\).  If \(J\)
has full column rank and truncation and matching errors are independent
of the residual noise, the local generalized least-squares covariance is
\[
\boxed{
\Sigma_u
=
\left(J^T\Sigma_F^{-1}J\right)^{-1}
+\Sigma_{\rm trunc}
+\Sigma_{\rm match}.
}
\tag{P8.69}
\]
If the rank is deficient, the unresolved tangent directions are
\[
\mathcal N_{\rm null}=\ker J.
\tag{P8.70}
\]
No unique-parameter language is used on such a stratum.  Observable
covariance is
\[
\Sigma_{\mathcal O}
=
D_u\mathcal O\,\Sigma_u(D_u\mathcal O)^T.
\tag{P8.71}
\]

### 16. Parameter fixation theorem

#### Theorem P8.2 — conditional spectral fixation

Assume:

1. \(K_{\rm em}\) is a positive first-order elliptic operator with the
   heat expansion (P8.29);
2. the bridge used by every numerical channel is strong or
   capacity-exact;
3. the renormalization prescriptions in the boundary, gauge and QFT
   sectors are matched;
4. the KKT constraint qualification and reduced second-order condition
   hold;
5. \(0\in\mathfrak R_{\rm sel}(u_*;I_{\rm src})\) and this solution has
   a regular primal-dual lift \(\widetilde u_*\) on an active stratum;
6. \(D_{\widetilde u}
   \mathcal R_{\rm sel}^{\mathfrak a}(\widetilde u_*)\) satisfies
   (P8.38);
7. the RG initial-value and threshold-matching problems are well posed;
8. the vacuum and anomaly gates remain open along the trajectory.

Then \(u_*\) determines a locally unique scheme-equivalence class of
parameter trajectories and a locally unique family of Tier-1
observables.  A numerical observable is a derived output only when its
forward map has been evaluated without using that observable in the
selection data.  Otherwise it is a calibrated output.

### 17. Complete parameter descent

\[
\boxed{
\begin{gathered}
I_{\rm src}
\xrightarrow{\Xi_Y}
\mathscr U_{\rm src}
\xrightarrow{\,0\in\mathfrak R_{\rm sel}\,}
[u_*]\\
\longrightarrow
(\mathcal A_F,\mathcal H_F,D_F,K_{\rm OS},
W_\partial,\Pi_{\rm em})\\
\xrightarrow{\rm heat\ finite\ part}
B_{\rm ren}^{w,\partial}
\xrightarrow{\rm normalization}
\theta(\mu_\star)\\
\xrightarrow{\rm RG+thresholds}
[\theta(\mu)]_{\rm scheme}
\xrightarrow{\rm observables}
(m_f,V_{\rm CKM},U_{\rm PMNS},
\alpha_s,\alpha,\ldots).
\end{gathered}
}
\tag{P8.72}
\]
This chain is both the mathematical selection law and the numerical
execution path exposed to the reality atlas.  Structural fixation,
calibration and held-out prediction remain distinct at every zoom
level.
