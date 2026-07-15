# The Source-to-Readout Construction

## Gauge symmetry, matter, electroweak breaking and coupling normalization

### 1. Matter data carried by the aperture

Let \((M_L,g_L)\) be a four-dimensional Lorentzian member of the
fixed-point family constructed in Chapter 6. The physical spinor
operator is the Green-hyperbolic Lorentzian Dirac operator

\[
\mathcal D_L=i\gamma_L^\mu\nabla_\mu^L .
\tag{M7.1}
\]

The positive spectral action is formed on the compatible elliptic
representative supplied by the QFT completion of Chapter 5a. Denote
it \((M_E,g_E)\), with

\[
\mathcal H_E=L^2(M_E,S_E),
\qquad
\mathcal D_E=\mathcal D_E^*,
\qquad
K_E=\mathcal D_E^2\ge0.
\tag{M7.1a}
\]

No global Wick rotation is assumed for an arbitrary spacetime. The
selected branch supplies either an Osterwalder--Schrader continuation,
or locally covariant elliptic parametrices whose heat coefficients
continue to the Lorentzian CTP action. Reflection positivity and the
common asymptotic map (QFT5a.26) ensure that the Euclidean spectral
coefficients and Lorentzian field theory describe the same branch.

The aperture supplies, in addition, a finite involutive algebra, a finite Hilbert space, a grading, a real structure and a finite Dirac operator:

\[
\boxed{
\mathfrak G_F
=
(\mathcal A_F,\mathcal H_F,D_F,\gamma_F,J_F).
}
\tag{M7.2}
\]

This is a finite real even spectral triple. Its defining relations are

\[
\begin{gathered}
D_F=D_F^*,\qquad [\gamma_F,a]=0,\qquad
\{D_F,\gamma_F\}=0,\\
[a,J_FbJ_F^{-1}]=0,\qquad
[[D_F,a],J_FbJ_F^{-1}]=0,
\qquad a,b\in\mathcal A_F,
\end{gathered}
\tag{M7.2a}
\]

and, in the finite KO-dimension-six convention,

\[
J_F^2=I,
\qquad J_FD_F=D_FJ_F,
\qquad J_F\gamma_F=-\gamma_FJ_F.
\tag{M7.2b}
\]

The realized product geometry is

\[
\begin{aligned}
\mathcal A&=C^\infty(M_E)\otimes\mathcal A_F,\\
\mathcal H&=\mathcal H_E\otimes\mathcal H_F,\\
D&=\mathcal D_E\otimes I+\gamma^5\otimes D_F,\\
\gamma&=\gamma^5\otimes\gamma_F,\\
J&=J_E\otimes J_F .
\end{aligned}
\tag{M7.3}
\]

Here \(D_F\) is the finite restriction of the same positive-carrier/Dirac structure whose square enters the aperture spectral action. The finite geometry is not an additional spacetime dimension. It is the internal realization fibre attached to each spacetime event.

The matter readout is

\[
\boxed{
\operatorname{Read}_M(Y)
=
\left(
G_{M,Y},\mathcal R_{F,Y},\mathcal R_{H,Y},
\mathscr A_{M,Y},\mathcal Y_Y,
S_{M,Y}^{\rm dyn},T_{\mu\nu,Y}^{M}
\right).
}
\tag{M7.4}
\]

### 2. Source selection of the finite geometry

Let \(\mathfrak B_F\) be the target-neutral class of finite real even spectral geometries

\[
b=
(\mathcal A_b,\mathcal H_b,D_b,\gamma_b,J_b,
\mathcal R_b,\mathcal Y_b,\Gamma_b).
\tag{M7.4a}
\]

The source substrate supplies the invariant signature

\[
\boxed{
I_M(Y)
=
(r_{\rm int},\chi_{\rm gr},\iota_{\rm mode},
\nu_{\rm mult},\eta_{\rm stab},\tau_{\rm top}),
}
\tag{M7.4b}
\]

where the entries respectively record internal automorphism rank, chiral graded index, stable mode incidence, family multiplicity, stabilizer data and central/topological extension data. These are calculated before assigning particle names.

Let \(\mathfrak B_F(Y)\) contain precisely those candidates whose invariant signature equals \(I_M(Y)\), whose representations descend to their stated global group, and whose first-order, reality, orientability and full anomaly conditions hold. Order their realization witnesses lexicographically by

\[
\mathcal C_Y(b)
=
\left(
\rho_{\rm cl},
N_{\rm gen}^{\rm add},
N_{\rm rel}^{\rm add},
N_{\rm ker}^{\rm add},
N_{\rm mod},
C_{\rm top}
\right)
\tag{M7.4c}
\]

Here \(\rho_{\rm cl}\) is the source-relation presentation length,
\(N_{\rm gen}^{\rm add}\), \(N_{\rm rel}^{\rm add}\) and
\(N_{\rm ker}^{\rm add}\) count additional generators, relations and
kernel directions beyond the invariant cell, \(N_{\rm mod}\) is the
dimension of an unselected continuous modulus space, and
\(C_{\rm top}\) is the declared central/line-lattice extension cost.
All entries are isomorphism invariants or minima over presentations, so
the ordering is basis independent. They take values in a declared
discrete well-ordered set; hence every nonempty candidate class has a
minimum. The finite-geometry selector is the
set-valued map

\[
\boxed{
\operatorname{Sel}_F(Y)
=
\operatorname*{arg\,min}_{b\in\mathfrak B_F(Y)}
\mathcal C_Y(b).
}
\tag{M7.4d}
\]

Thus
\(\operatorname{Sel}_F:\mathsf Y\rightsquigarrow
\mathfrak B_F/\!\cong\) is a set-valued selection relation. An empty
argmin rejects the realization; a multi-element argmin remains a
finite-geometry branch until the refined invariant below separates it.

To make uniqueness a mathematical statement, refine the structural
invariant to

\[
\widetilde I_M(Y)
=\left(
[Z(\mathcal A_F)]_{\mathbb R},
\{(\mathbb F_i,n_i)\}_i,
[\mu_{ij}^{\pm}],
[J_F],[\gamma_F],N_{\rm fam},[\Gamma_{\rm glob}]
\right),
\tag{M7.4e}
\]

where the finite real \(C^*\)-algebra has Wedderburn blocks
\(M_{n_i}(\mathbb F_i)\), \(\mathbb F_i\in\{\mathbb R,\mathbb C,
\mathbb H\}\), and \(\mu_{ij}^{\pm}\) is the signed incidence matrix
of irreducible left-right bimodules. These are basis-independent finite
algebra data, not particle names.

The selected source cell satisfies

\[
\boxed{
\{(\mathbb F_i,n_i)\}_i
=\{(\mathbb C,1),(\mathbb H,1),(\mathbb C,3)\},
\quad
[\mu_{ij}^{\pm}]=[\mu_{\rm ch}],
\quad N_{\rm fam}=3,
}
\tag{M7.4f}
\]

where \(\mu_{\rm ch}\) is the minimal faithful chiral incidence class
whose charged representation is (M7.12)--(M7.15), with no vectorlike
pair removable without losing faithfulness or a Yukawa intertwiner.
The global central class is fixed by the line-operator invariant below.

By the classification of finite-dimensional real \(C^*\)-algebras,
the first equality in (M7.4f) fixes the algebra up to real
\(*\)-isomorphism. Classification of finite bimodules fixes the
representation from \([\mu_{\rm ch}]\); \(J_F,\gamma_F\) fix its real
graded structure. Provided the anomaly and first-order gates hold,
(M7.4f) therefore fixes one **kinematic** isomorphism class
\((\mathcal A_F,\mathcal H_F,J_F,\gamma_F,\mathcal R_F)\).  It does
not fix the continuous matrix entries of \(D_F\): the admissible
finite Dirac operators form a flavour-quotiented spectral fibre over
that kinematic class.  A point of this fibre is fixed only when the
joint parameter problem (M7.88), equivalently Chapter 8, has an
isolated root.  Minimality alone is never used as a substitute for
either the invariant data or that spectral selection.

### 3. The finite algebra and the gauge group

The selected minimal finite algebra in the invariant class (M7.4f),
supporting colour, weak chirality, hypercharge and a complex Higgs
doublet, is

\[
\boxed{
\mathcal A_F
=
\mathbb C\oplus\mathbb H\oplus M_3(\mathbb C).
}
\tag{M7.5}
\]

Its unitary group is

\[
U(\mathcal A_F)
\cong
U(1)\times SU(2)\times U(3).
\tag{M7.6}
\]

The quaternionic factor acts on weak doublets and supplies \(SU(2)_L\).
The matrix factor supplies colour. The two abelian phases are reduced
by the unimodularity condition on the particle representation; including
the charge-conjugate copy in this determinant would make the condition
vacuous,

\[
\det_{\mathcal H_{F,+}^{\rm part}}\rho_F(u)=1,
\qquad\text{equivalently}\qquad
\operatorname{Tr}_{\mathcal H_{F,+}^{\rm part}}\mathscr A_\mu=0.
\tag{M7.7}
\]

The connected gauge group is therefore

\[
\boxed{
G_{\rm SM}
=
\frac{SU(3)_c\times SU(2)_L\times U(1)_Y}
{\Gamma_{\rm glob}},
\qquad
\Gamma_{\rm glob}\subseteq\mathbb Z_6.
}
\tag{M7.8}
\]

For the faithful minimal representation, the common central kernel is generated by

\[
z_6
=
\left(
e^{2\pi i/3}I_3,-I_2,e^{i\pi/3}
\right),
\tag{M7.9}
\]

giving the maximal faithful quotient

\[
G_{\rm SM}^{(6)}
=
\frac{SU(3)_c\times SU(2)_L\times U(1)_Y}{\mathbb Z_6}.
\tag{M7.10}
\]

In (M7.9) the abelian representation uses the primitive integer charge

\[
q_f=6Y_f\in\mathbb Z.
\tag{M7.10a}
\]

If \(t_f\in\mathbb Z_3\) is colour triality and
\(s_f\in\mathbb Z_2\) is weak isospin parity, descent is the explicit
congruence

\[
\exp\!\left(2\pi i\frac{t_f}{3}\right)
(-1)^{s_f}
\exp\!\left(i\pi\frac{q_f}{3}\right)=1
\tag{M7.10b}
\]

for every matter and Higgs multiplet. The assignments below satisfy
(M7.10b), so \(z_6\) acts trivially. The selected source line lattice
is the maximal compatible electric/magnetic lattice and fixes

\[
\boxed{\Gamma_{\rm glob}=\mathbb Z_6.}
\tag{M7.10c}
\]

The subgroups \(1,\mathbb Z_2,\mathbb Z_3\) remain distinct alternative
line-operator branches, but they are not the selected realization.

#### Proposition M7.1 — Gauge group from lifted unimodular unitaries

The lifted unitary action of the finite triple (M7.5), restricted by
unimodularity and quotiented by its common kernel on the physical
Hilbert space, has Lie algebra

\[
\mathfrak g_{\rm SM}
=
\mathfrak{su}(3)\oplus\mathfrak{su}(2)\oplus\mathfrak u(1).
\tag{M7.11}
\]

**Proof.** The quaternionic unitaries are \(SU(2)\); the matrix
unitaries split locally as \(SU(3)\times U(1)\); and the complex
summand contributes a second \(U(1)\). Their lift through \(J_F\)
acts on the finite bimodule. Unimodularity removes one abelian linear
combination. Quotienting the kernel of this lifted action removes the
finite common centre but does not change the Lie algebra. \(\square\)

### 4. Chiral finite Hilbert space

For one family, the particle representation is

\[
\mathcal H_{F,+}^{(1)}
=
Q_L\oplus u_R\oplus d_R\oplus L_L\oplus e_R
\oplus(\nu_R),
\tag{M7.12}
\]

with

\[
\begin{aligned}
Q_L&:(3,2,+\tfrac16),&
u_R&:(3,1,+\tfrac23),&
d_R&:(3,1,-\tfrac13),\\
L_L&:(1,2,-\tfrac12),&
e_R&:(1,1,-1),&
\nu_R&:(1,1,0).
\end{aligned}
\tag{M7.13}
\]

The full finite space includes charge conjugates:

\[
\mathcal H_F^{(1)}
=
\mathcal H_{F,+}^{(1)}
\oplus
J_F\mathcal H_{F,+}^{(1)}.
\tag{M7.14}
\]

Chirality is encoded by

\[
\gamma_F
=
\begin{cases}
-1,&Q_L,L_L,\\
+1,&u_R,d_R,e_R,\nu_R,
\end{cases}
\tag{M7.15}
\]

with the compatible conjugate action on antiparticles.

The aperture multiplicity invariant \(\nu_{\rm mult}(Y)\) fixes the family replication:

\[
\boxed{
\mathcal H_F
=
\mathcal H_F^{(1)}\otimes\mathbb C^{N_{\rm fam}},
\qquad
N_{\rm fam}=\nu_{\rm mult}(Y)=3.
}
\tag{M7.16}
\]

Thus family number is a stable multiplicity of the internal carrier. It is not the number of gauge factors or source generators.

### 5. Hypercharge from unimodularity

Let the most general primitive rational hypercharges be

\[
(y_Q,y_u,y_d,y_L,y_e,y_\nu,y_H).
\tag{M7.17}
\]

Gauge-invariant Yukawa intertwiners impose

\[
\begin{aligned}
-y_Q+y_H+y_d&=0,\\
-y_Q-y_H+y_u&=0,\\
-y_L+y_H+y_e&=0,\\
-y_L-y_H+y_\nu&=0.
\end{aligned}
\tag{M7.18}
\]

The mixed nonabelian and gravitational anomaly equations impose

\[
\begin{aligned}
2y_Q-y_u-y_d&=0,\\
3y_Q+y_L&=0,\\
6y_Q-3y_u-3y_d+2y_L-y_e-y_\nu&=0.
\end{aligned}
\tag{M7.19}
\]

The cubic equation is

\[
6y_Q^3-3y_u^3-3y_d^3+2y_L^3-y_e^3-y_\nu^3=0.
\tag{M7.20}
\]

With a right-handed neutrino present, (M7.18)--(M7.20) alone do not
select hypercharge uniquely. Their complete solution is

\[
\begin{aligned}
y_Q&=q,& y_u&=q+h,& y_d&=q-h,\\
y_L&=-3q,& y_e&=-3q-h,& y_\nu&=-3q+h,\\
y_H&=h.
\end{aligned}
\tag{M7.20a}
\]

The free direction is hypercharge mixed with anomaly-free \(B-L\).
The finite-algebra lift removes it: the sterile bimodule is neutral
under the unimodular central lift,

\[
y_\nu=0,
\tag{M7.20b}
\]

and the primitive Higgs lattice chooses \(h=\tfrac12\). Hence
\(q=h/3=\tfrac16\). On a branch without \(\nu_R\), the mixed
gravitational and cubic equations impose the same value. The combined
finite-lift, Yukawa and anomaly system gives

\[
\boxed{
(y_Q,y_u,y_d,y_L,y_e,y_\nu,y_H)
=
\left(
\tfrac16,\tfrac23,-\tfrac13,-\tfrac12,-1,0,\tfrac12
\right).
}
\tag{M7.21}
\]

The electric charge generator after symmetry breaking is

\[
\boxed{
Q_{\rm em}=T_3+Y.
}
\tag{M7.22}
\]

Equation (M7.21) is simultaneously the primitive integral-lattice
normalization, the finite-lift solution, the Yukawa-compatible solution
and the anomaly-compatible solution. Without the neutral-lift condition
the equations retain the \(B-L\) family (M7.20a).

### 6. Inner fluctuations generate gauge and Higgs fields

A self-adjoint one-form of the product geometry is

\[
A=\sum_j a_j[D,b_j],
\qquad
a_j,b_j\in\mathcal A.
\tag{M7.23}
\]

The fluctuated Dirac operator is

\[
\boxed{
D_A=D+A+JAJ^{-1}.
}
\tag{M7.24}
\]

Its spacetime component is a gauge connection,

\[
\mathscr A_\mu
=
g_3G_\mu^AT^A
+g_2W_\mu^at^a
+g_YYB_\mu,
\tag{M7.25}
\]

and its finite off-diagonal component is the scalar doublet

\[
\boxed{
H\sim(1,2,+\tfrac12).
}
\tag{M7.26}
\]

Thus gauge bosons and the Higgs are two orientations of one inner fluctuation: continuous directions produce connections; finite left-right directions produce the scalar intertwiner.

Under \(u\in U(\mathcal A)\),

\[
D_A\longmapsto uD_Au^{-1},
\tag{M7.27}
\]

which gives

\[
\mathscr A_\mu
\longmapsto
u\mathscr A_\mu u^{-1}
+iu\partial_\mu u^{-1},
\tag{M7.28}
\]

and the standard bifundamental transformation of \(H\).

### 7. Covariant derivative and curvature

For a field of hypercharge \(Y\),

\[
\boxed{
D_\mu
=
\nabla_\mu
-ig_3G_\mu^AT^A
-ig_2W_\mu^at^a
-ig_YYB_\mu.
}
\tag{M7.29}
\]

The curvatures are

\[
\begin{aligned}
G_{\mu\nu}^A
&=\partial_\mu G_\nu^A-\partial_\nu G_\mu^A
+g_3f^{ABC}G_\mu^BG_\nu^C,\\
W_{\mu\nu}^a
&=\partial_\mu W_\nu^a-\partial_\nu W_\mu^a
+g_2\epsilon^{abc}W_\mu^bW_\nu^c,\\
B_{\mu\nu}
&=\partial_\mu B_\nu-\partial_\nu B_\mu .
\end{aligned}
\tag{M7.30}
\]

Their Bianchi identities are

\[
D_{[\lambda}F_{\mu\nu]}=0.
\tag{M7.31}
\]

### 8. The finite Dirac operator and Yukawa structure

In the particle sector, the finite Dirac operator has the schematic block form

\[
D_F
=
\begin{pmatrix}
0&M^\dagger\\
M&0
\end{pmatrix},
\qquad
\{D_F,\gamma_F\}=0,
\tag{M7.32}
\]

where

\[
M
=
\operatorname{diag}
\left(
Y_u,Y_d,Y_\nu,Y_e
\right)
\tag{M7.33}
\]

with colour and weak multiplicities understood. The first-order condition

\[
\boxed{
[[D_F,a],J_FbJ_F^{-1}]=0,
\qquad a,b\in\mathcal A_F,
}
\tag{M7.34}
\]

removes couplings that do not define bimodule intertwiners.

The allowed Yukawa tensors are precisely

\[
\begin{aligned}
\mathcal Y_d&\in
(R_{Q_L}^{\vee}\otimes R_H\otimes R_{d_R})^{G_{\rm SM}},\\
\mathcal Y_u&\in
(R_{Q_L}^{\vee}\otimes R_{\widetilde H}\otimes R_{u_R})^{G_{\rm SM}},\\
\mathcal Y_e&\in
(R_{L_L}^{\vee}\otimes R_H\otimes R_{e_R})^{G_{\rm SM}},\\
\mathcal Y_\nu&\in
(R_{L_L}^{\vee}\otimes R_{\widetilde H}\otimes R_{\nu_R})^{G_{\rm SM}},
\end{aligned}
\tag{M7.35}
\]

where

\[
\widetilde H=i\sigma_2H^*.
\tag{M7.36}
\]

The fermionic spectral action

\[
S_F=\frac12\langle J\Psi,D_A\Psi\rangle
\tag{M7.37}
\]

is evaluated on the physical chiral-real subspace rather than on all
formally doubled product-spinor components. With total grading
\(\Gamma=\gamma^5\otimes\gamma_F\), set

\[
\mathcal H_{\rm phys}=P_+\mathcal H,
\qquad P_+=\tfrac12(I+\Gamma),
\tag{M7.37a}
\]

and use the antisymmetric bilinear form induced by \(J\) on the
Grassmann fields. The functional integral produces its Pfaffian; the
charge-conjugate copy supplies the real structure but is not counted as
a second fermion species.

The Lorentzian continuation of this quadratic form produces

\[
\boxed{
\begin{aligned}
\mathcal L_F
={}&
\sum_{\psi}i\bar\psi\gamma^\mu D_\mu\psi\\
&-\bar Q_LY_dHd_R
-\bar Q_LY_u\widetilde Hu_R
-\bar L_LY_eHe_R
-\bar L_LY_\nu\widetilde H\nu_R
+{\rm h.c.}
\end{aligned}
}
\tag{M7.38}
\]

on the Dirac-neutrino branch.

### 9. Bosonic spectral action

Let

\[
K_A=D_A^2
\tag{M7.39}
\]

be the positive Euclidean carrier associated with the fluctuated Dirac operator. The bosonic action is

\[
\boxed{
S_B
=
\operatorname{Tr}F(K_A/\Lambda_A^2).
}
\tag{M7.40}
\]

The cutoff profile \(F:[0,\infty)\to\mathbb R_{\ge0}\) is fixed before
selection, smooth with sufficient rapid decay for the trace and heat
moments below to exist. On a compact Euclidean representative,
\(F(K_A/\Lambda_A^2)\) is trace class. Noncompact branches use the
declared relative or local trace of Chapter 5a and the same subtraction
scheme as the Lorentzian effective action.

The moment convention is

\[
f_4=\int_0^\infty F(u)u\,du,
\qquad
f_2=\int_0^\infty F(u)\,du,
\qquad
f_0=F(0).
\tag{M7.40a}
\]

Its heat-kernel expansion on the four-dimensional branch is

\[
S_B
\sim
f_4\Lambda_A^4a_0(K_A)
+f_2\Lambda_A^2a_2(K_A)
+f_0a_4(K_A)
+O(\Lambda_A^{-2}).
\tag{M7.41}
\]

The coefficients separate by physical type:

\[
\begin{aligned}
a_0&\longrightarrow\text{vacuum-volume term},\\
a_2&\longrightarrow\text{Einstein--Hilbert and scalar-mass terms},\\
a_4&\longrightarrow
F^2,\ |DH|^2,\ |H|^4,\ R|H|^2,\ R^2\text{ terms}.
\end{aligned}
\tag{M7.42}
\]

The heat expansion is partitioned before variation:

\[
\boxed{
S_B
=S_{\rm grav,loc}^{\rm spec}[g]
+S_M^{\rm cl}[g,\mathscr A,H]
+S_{\rm top}.
}
\tag{M7.42a}
\]

Pure-metric \(a_0,a_2,a_4,\ldots\) terms are owned by the gravitational
functional (G6.51)--(G6.53f); gauge, Higgs and mixed
\(R H^\dagger H\) terms are owned by \(S_M^{\rm cl}\); completed
topological densities are owned by \(S_{\rm top}\). This is the
spectral-action realization of the exact-once partition (QFT5a.49).

After canonical normalization, the matter part is

\[
\boxed{
\begin{aligned}
\mathcal L_{\rm SM}
={}&
-\frac14G_{\mu\nu}^AG^{A\mu\nu}
-\frac14W_{\mu\nu}^aW^{a\mu\nu}
-\frac14B_{\mu\nu}B^{\mu\nu}\\
&+\sum_\psi i\bar\psi\gamma^\mu D_\mu\psi
-(D_\mu H)^\dagger D^\mu H
-V_0(H)-\xi_HR H^\dagger H
+\mathcal L_Y+\mathcal L_\nu+\mathcal L_\theta .
\end{aligned}
}
\tag{M7.43}
\]

### 10. Exact spectral definitions of the couplings

Let \(T_a\) be a unit-normalized generator of gauge factor \(a\in\{3,2,Y\}\). Define the aperture gauge stiffness by the quadratic curvature response

\[
\boxed{
Z_a(\mu_\star)
=
\left.
\frac{\partial^2S_B}
{\partial\mathcal F_a\,\partial\mathcal F_a}
\right|_{\mathcal F=0,\ \mu=\mu_\star},
}
\tag{M7.44}
\]

where the derivative is the coefficient of the gauge-invariant
quadratic form in a smooth one-parameter family of algebraic
connections.

Equivalently, and without differentiating with respect to an operator,
choose a compactly supported algebraic connection
\(\mathcal A_a(\varepsilon)=\varepsilon a_aT_a\) with linearized
curvature \(f_a=da_a\). Then \(Z_a\) is the unique coefficient in

\[
S_B[D_{\mathcal A_a(\varepsilon)}]
=S_B[D]
+\frac{\varepsilon^2}{4}Z_a(\mu_\star)
\int_{M_E}\operatorname{tr}(f_a\wedge *_Ef_a)
+O(\varepsilon^3).
\tag{M7.44a}
\]

This definition displays the domain, normalization and positivity of
the stiffness. The generator trace convention is fixed by

\[
\operatorname{tr}_{\mathcal H_F}(T_aT_b)
=k_a\delta_{ab}.
\tag{M7.45}
\]

Let \(\mathcal A_\mu^a\) denote the algebraic, pre-normalized connection and

\[
\mathcal F_a=d\mathcal A_a+\mathcal A_a\wedge\mathcal A_a
\tag{M7.45a}
\]

its curvature. Writing the spectral gauge action as

\[
S_{\rm gauge}
=
-\frac14\sum_aZ_a
\int \mathcal F_{\mu\nu}^a\mathcal F^{a\mu\nu}\sqrt{-g}\,d^4x,
\tag{M7.46}
\]

define

\[
A_{\mu,\rm can}^a=Z_a^{1/2}\mathcal A_\mu^a,
\qquad
g_a=Z_a^{-1/2}.
\tag{M7.46a}
\]

The canonically normalized curvature then has the form displayed in (M7.30), and

\[
\boxed{
g_a^{-2}(\mu_\star)=Z_a(\mu_\star).
}
\tag{M7.47}
\]

Because \(Z_a\) is a spectral second derivative, each coupling is a dimensionless response invariant of the aperture carrier.

For a common spectral moment and a declared finite renormalization
scheme,

\[
\boxed{
Z_a(\mu_\star)=c_a f_0+\delta Z_a^{\mathfrak s}(\mu_\star).
}
\tag{M7.48}
\]

Here \(c_a>0\) is fixed by the finite representation trace and
\(\delta Z_a^{\mathfrak s}\) is the finite local matching term in
scheme \(\mathfrak s\). The ratios obey

\[
\boxed{
\frac{g_a^2}{g_b^2}
=
\frac{c_bf_0+\delta Z_b^{\mathfrak s}}
{c_af_0+\delta Z_a^{\mathfrak s}}.
}
\tag{M7.49}
\]

No independent coupling can be inserted after the trace coefficients,
finite subtraction scheme and matching conditions have been fixed.

For the unweighted minimal finite trace in the common bare matching
prescription \(\delta Z_a^{\mathfrak s}=0\), the representation
indices give

\[
c_3=c_2=\frac35c_Y,
\tag{M7.49a}
\]

and hence the matching relation

\[
\boxed{
g_3^2(\mu_\star)=g_2^2(\mu_\star)
=\frac53g_Y^2(\mu_\star),
\qquad
\sin^2\theta_W(\mu_\star)=\frac38.
}
\tag{M7.49b}
\]

If the aperture supplies declared face weights, those weights replace
the indices in (M7.49a); they must be fixed before parameter evaluation
and propagated through the same RG flow.

### 11. Electroweak breaking

The scalar action before normalization has the form

\[
\mathcal L_H^{(0)}
=
-Z_H(D_\mu H_0)^\dagger(D^\mu H_0)
+\mu_0^2H_0^\dagger H_0
-\lambda_0(H_0^\dagger H_0)^2
-\xi_0R H_0^\dagger H_0.
\tag{M7.50}
\]

Reflection positivity of the Euclidean branch and stability of the
selected vacuum require \(Z_H>0\) and
\(\lambda_0/Z_H^2>0\) at the matching scale; their RG-improved
continuation must remain inside the declared metastability domain.

With

\[
H=Z_H^{1/2}H_0,
\tag{M7.51}
\]

the physical parameters are

\[
\boxed{
\mu_H^2=\frac{\mu_0^2}{Z_H},
\qquad
\lambda_H=\frac{\lambda_0}{Z_H^2},
\qquad
\xi_H=\frac{\xi_0}{Z_H}.
}
\tag{M7.52}
\]

The local curvature-dependent potential

\[
\begin{aligned}
V_0(H)&=-\mu_H^2H^\dagger H
+\lambda_H(H^\dagger H)^2,\\
V_R(H)&=V_0(H)+\xi_HR H^\dagger H.
\end{aligned}
\tag{M7.53}
\]

has a symmetry-breaking vacuum when \(\mu_H^2-\xi_HR>0\),

\[
\langle H\rangle
=
\frac1{\sqrt2}
\begin{pmatrix}0\\v\end{pmatrix},
\qquad
v^2(R)=\frac{\mu_H^2-\xi_HR}{\lambda_H}.
\tag{M7.54}
\]

On laboratory and asymptotically flat backgrounds
\(|\xi_HR|\ll\mu_H^2\), this reduces to
\(v=\mu_H/\sqrt{\lambda_H}\).

The unbroken generator satisfies

\[
Q_{\rm em}\langle H\rangle=0.
\tag{M7.55}
\]

The neutral gauge fields rotate as

\[
\begin{pmatrix}A_\mu\\Z_\mu\end{pmatrix}
=
\begin{pmatrix}
\sin\theta_W&\cos\theta_W\\
\cos\theta_W&-\sin\theta_W
\end{pmatrix}
\begin{pmatrix}W_\mu^3\\B_\mu\end{pmatrix},
\tag{M7.56}
\]

where

\[
\tan\theta_W=\frac{g_Y}{g_2},
\qquad
e=g_2\sin\theta_W=g_Y\cos\theta_W.
\tag{M7.57}
\]

The masses are

\[
\boxed{
m_W=\frac12g_2v,
\qquad
m_Z=\frac12v\sqrt{g_2^2+g_Y^2},
\qquad
m_h=\sqrt{2\lambda_H}\,v.
}
\tag{M7.58}
\]

The photon is massless because it is the connection of the unbroken stabilizer \(U(1)_{\rm em}\).

### 12. Fermion masses and mixing

For \(f=u,d,e,\nu\),

\[
Y_f=U_f^Ly_f(U_f^R)^\dagger,
\qquad
y_f=\operatorname{diag}(y_{f1},y_{f2},y_{f3}),
\tag{M7.59}
\]

and

\[
\boxed{
M_f=\frac{v}{\sqrt2}Y_f,
\qquad
m_{fi}=\frac{v}{\sqrt2}y_{fi}.
}
\tag{M7.60}
\]

The observable quark and lepton mixing matrices are

\[
\boxed{
V_{\rm CKM}=(U_u^L)^\dagger U_d^L,
\qquad
U_{\rm PMNS}=(U_e^L)^\dagger U_\nu.
}
\tag{M7.61}
\]

The basis-invariant quark CP measure is

\[
J_{\rm CKM}
=
\operatorname{Im}
\left(
V_{ij}V_{kl}V_{il}^*V_{kj}^*
\right).
\tag{M7.62}
\]

Equivalently, CP violation is detected by

\[
\det[\,Y_uY_u^\dagger,Y_dY_d^\dagger\,]\ne0.
\tag{M7.63}
\]

Thus masses, mixing and CP phase are spectral invariants of the finite Dirac operator modulo flavour-basis transformations.

### 13. Neutrino completions

The sterile state \(\nu_R\) commutes with the gauge algebra. Three stable completions are available.

The Dirac branch is

\[
M_\nu^D=\frac{v}{\sqrt2}Y_\nu.
\tag{M7.64}
\]

The Majorana block is

\[
\mathcal L_M
=
-\frac12\overline{(\nu_R)^c}M_R\nu_R+{\rm h.c.},
\tag{M7.65}
\]

and the type-I seesaw limit is

\[
\boxed{
M_\nu^{\rm light}
\simeq
-M_D M_R^{-1}M_D^T.
}
\tag{M7.66}
\]

Equation (M7.66) requires \(M_R\) to be invertible on the heavy
sterile subspace and
\(\|M_DM_R^{-1}\|\ll1\). A null eigenspace of \(M_R\) is retained as a
light Dirac or mixed block; it is not removed by an unjustified
inverse.

If the heavy block is integrated out, the dimension-five operator is

\[
\mathcal L_5
=
\frac12(\kappa_5)_{rs}
(L_r^TCi\sigma_2H)(H^Ti\sigma_2L_s)
+{\rm h.c.},
\tag{M7.67}
\]

with

\[
M_\nu=-\frac{v^2}{2}\kappa_5.
\tag{M7.68}
\]

The aperture selects a neutrino branch by the finite spectrum and real-structure compatibility; the branches are not merged.

### 14. Perturbative anomaly cancellation

Write every fermion as a left-handed Weyl field:

\[
\begin{aligned}
Q_L&:(3,2,+\tfrac16),&
u_R^c&:(\bar3,1,-\tfrac23),&
d_R^c&:(\bar3,1,+\tfrac13),\\
L_L&:(1,2,-\tfrac12),&
e_R^c&:(1,1,+1),&
\nu_R^c&:(1,1,0).
\end{aligned}
\tag{M7.69}
\]

With \(T(\mathbf{fund})=\frac12\),

\[
\boxed{
\begin{aligned}
\mathcal A_{SU(3)^3}
&=2A(3)+A(\bar3)+A(\bar3)=0,\\
\mathcal A_{SU(3)^2Y}
&=2(\tfrac16)T(3)-(\tfrac23)T(\bar3)
+(\tfrac13)T(\bar3)=0,\\
\mathcal A_{SU(2)^2Y}
&=3(\tfrac16)T(2)-(\tfrac12)T(2)=0,\\
\mathcal A_{Y^3}
&=6(\tfrac16)^3+3(-\tfrac23)^3
+3(\tfrac13)^3+2(-\tfrac12)^3+1=0,\\
\mathcal A_{\mathrm{grav}^2Y}
&=6(\tfrac16)+3(-\tfrac23)+3(\tfrac13)
+2(-\tfrac12)+1=0.
\end{aligned}
}
\tag{M7.70}
\]

There is no perturbative \(SU(2)^3\) anomaly because the doublet is pseudoreal. The number of left-handed weak doublets per family is

\[
3+1=4,
\tag{M7.71}
\]

so the Witten \(SU(2)\) anomaly is absent.

### 15. Full global anomaly gate

Local triangle cancellation is necessary but not sufficient. Define

\[
\nu_{\rm bordism}(Y):
\Omega_5^{\operatorname{Spin}^{G_{\rm SM}^{(6)}}}
\longrightarrow U(1),
\qquad
[X,P]\longmapsto
\exp\!\bigl(2\pi i\,\bar\eta_{\mathcal R_F}(X,P)\bigr),
\tag{M7.71a}
\]

where \(\bar\eta\) is the reduced eta invariant of the five-dimensional
Dirac operator coupled to the finite representation. This homomorphism
contains every torsion/global fermion anomaly not visible in the local
six-form. The full gate is

\[
\boxed{
\mathcal C_{\rm anom}^{\rm full}
\Longleftrightarrow
\begin{cases}
[I_6]=[\widehat A(TM)\operatorname{ch}_{\mathcal R_F}(F)]_6=0
\text{ in local anomaly cohomology},\\
\nu_{\rm Witten}=0,\\
\nu_{\rm bordism}(Y)=1\text{ for every bordism class},\\
\text{every representation descends to }G_{\rm SM}^{(6)},\\
\text{electric and magnetic line operators respect the quotient},\\
\text{the required spin or }\operatorname{Spin}^{G}\text{ structure exists},\\
\text{the BV quantum master and Ward identities hold}.
\end{cases}
}
\tag{M7.72}
\]

For \(n\in\{1,2,3,6\}\), descent to \(G_{\rm SM}^{(n)}\) requires

\[
R_f(z_6^{6/n})=I_{R_f}
\qquad
\text{for every physical representation }R_f.
\tag{M7.73}
\]

The line lattice additionally requires

\[
\chi_\lambda(z_6^{6/n})=1,
\qquad
\langle\lambda,m\rangle\in\mathbb Z.
\tag{M7.74}
\]

This gate distinguishes theories with the same local Lie algebra but different global physics.

### 16. The electromagnetic normalization face

At electroweak matching,

\[
\frac1{e^2(\mu_\star)}
=
\frac1{g_2^2(\mu_\star)}
+\frac1{g_Y^2(\mu_\star)}.
\tag{M7.75}
\]

Using (M7.47),

\[
\boxed{
\alpha^{-1}(\mu_\star)
=
\frac{4\pi}{e^2(\mu_\star)}
=
4\pi\left[Z_2(\mu_\star)+Z_Y(\mu_\star)\right].
}
\tag{M7.76}
\]

This is the exact point at which the electromagnetic constant appears: it is the sum of the weak-isospin and hypercharge stiffnesses after projection onto the unbroken generator.

Put

\[
T^*=\mu_\star^{-2},
\qquad
\beta=\sqrt{T^*},
\qquad
\widehat\beta=\Lambda_A\sqrt{T^*}.
\tag{M7.76a}
\]

The electromagnetic boundary compression and its dimensionless
first-order representative are

\[
K_{\rm em}=\Pi_{\rm em}K_{\rm OS}\Pi_{\rm em},
\qquad
\widehat K_{\rm em}=K_{\rm em}/\Lambda_A,
\qquad
\widehat\beta\widehat K_{\rm em}
=\sqrt{T^*}\,K_{\rm em}.
\tag{M7.77}
\]

Here \(K_{\rm em}\) is positive self-adjoint, first-order elliptic and
has compact resolvent on the compact aperture boundary. The projector
\(\Pi_{\rm em}\) selects the unbroken electromagnetic direction and
the positive boundary weight is denoted by \(W_\partial\). Define the
non-polynomial transmission budget

\[
b(x)=-\log\!\left(\frac{1-e^{-x}}{x}\right),
\qquad b(0)=0,
\tag{M7.78}
\]

and, for \(\epsilon>0\),

\[
B_\epsilon^{w,\partial}(\widehat\beta;\vartheta)
=\operatorname{Tr}_{\partial}\!\left[
W_\partial\Pi_{\rm em}
b(\widehat\beta\widehat K_{\rm em})
e^{-\epsilon\widehat K_{\rm em}}
\right].
\tag{M7.79}
\]

If its heat-controlled small-\(\epsilon\) expansion is

\[
B_\epsilon^{w,\partial}
\sim\sum_{r>0}c_r\epsilon^{-r}
+c_{\log}\log\epsilon+B_{\rm fin}+o(1),
\tag{M7.79a}
\]

then the renormalized capacity and boundary matching equation are

\[
\boxed{
B_{\rm ren}^{w,\partial}
=B_{\rm fin}+C_{\rm loc}^{\mathfrak s_\partial},
\qquad
\frac{f_0}{192\pi^2}
=\frac{1}{\widehat\beta}
B_{\rm ren}^{w,\partial}.
}
\tag{M7.80}
\]

In (M7.80)--(M7.84),
\(B_{\rm ren}^{w,\partial}\) abbreviates
\(B_{\rm ren}^{w,\partial}
(\widehat\beta;\vartheta,\mathfrak s_\partial)\), and
\(\delta Z_a^{\mathfrak s}\) abbreviates
\(\delta Z_a^{\mathfrak s}(\mu_\star)\).  These are exactly the
argument and matching-scale conventions of (A3.105a)--(A3.107) and
(P8.30)--(P8.34).

The finite boundary counterterm and the finite gauge terms in (M7.48)
are transformed together under a scheme change. Combining
(M7.48), (M7.76) and (M7.80) gives

\[
\boxed{
\alpha^{-1}(\mu_\star)
=\frac{768\pi^3(c_2+c_Y)}{\widehat\beta}
B_{\rm ren}^{w,\partial}
+4\pi\bigl(\delta Z_2^{\mathfrak s}
+\delta Z_Y^{\mathfrak s}\bigr).
}
\tag{M7.81}
\]

Equations (M7.77)--(M7.81) are the boundary functional and matching
law (P8.25)--(P8.34). They define the structural location of the
\(1/137\) fingerprint. A numerical value is an output only after the
operator, weight, subtraction prescription and converged spectrum have
been supplied; no decimal precision is inferred from the structural
equation alone.

### 17. Renormalization to the observed scale

The one-loop gauge equations in the ordinary hypercharge convention are

\[
\boxed{
\begin{aligned}
\mu\frac{dg_Y}{d\mu}
&=\frac{41}{6}\frac{g_Y^3}{16\pi^2},\\
\mu\frac{dg_2}{d\mu}
&=-\frac{19}{6}\frac{g_2^3}{16\pi^2},\\
\mu\frac{dg_3}{d\mu}
&=-7\frac{g_3^3}{16\pi^2}.
\end{aligned}
}
\tag{M7.82}
\]

These three equations are one projection of the full matter trajectory.
With

\[
\theta_M
=(g_3,g_2,g_Y,Y_u,Y_d,Y_e,Y_\nu,\lambda_H,\mu_H^2,
\kappa_5,M_R,\bar\theta,\{C_i^{(d>4)}\}),
\tag{M7.82a}
\]

the renormalized 1PI functional satisfies

\[
\boxed{
\left[
\mu\partial_\mu
+\beta_M^A(\theta_M)\partial_{\theta_M^A}
+\sum_\Phi\gamma_\Phi\mathcal N_\Phi
\right]
\Gamma_M^{\rm ren}=0.
}
\tag{M7.82b}
\]

The matrix beta functions preserve gauge covariance, for example
\(\beta_{Y_u}\mapsto U_Q\beta_{Y_u}U_u^\dagger\), so masses, mixing
angles and invariant CP measures can be evolved without choosing a
flavour basis. At a common spectral threshold \(M_h\), decoupling is
the matching map

\[
\boxed{
\theta_{M,<}(M_h)
=\mathcal M_h\!\left[
\theta_{M,>}(M_h);D_F,\mathfrak R
\right],
\qquad
\Gamma_<-\Gamma_>
=O\!\left((E/M_h)^{d_{\rm cut}-4}\right).
}
\tag{M7.82c}
\]

The same eigenvalue of \(D_F\) is used in the threshold map, vacuum
stationarity equation and detector/QFT completion. Below the QCD
matching region the perturbative colour flow is replaced by the
nonperturbative completion conditions (QFT5a.37)--(QFT5a.40); hadronic
vacuum polarization then enters the electromagnetic threshold map as a
physical spectral input rather than a perturbative extrapolation
through confinement.

Equivalently,

\[
\alpha_a^{-1}(\mu_2)
=
\alpha_a^{-1}(\mu_1)
-\frac{b_a}{2\pi}\log\frac{\mu_2}{\mu_1}
+\Delta_a^{\rm th},
\tag{M7.83}
\]

where threshold matching is applied whenever a mass eigenvalue is crossed.

The low-energy electromagnetic readout is

\[
\boxed{
\alpha^{-1}(0)
=
\operatorname{RG}_{\rm em}
\left[
\frac{768\pi^3(c_2+c_Y)}{\widehat\beta}
B_{\rm ren}^{w,\partial}
+4\pi(\delta Z_2^{\mathfrak s}+\delta Z_Y^{\mathfrak s});
\{m_f,m_W,m_Z,m_h\}
\right].
}
\tag{M7.84}
\]

Here \(\operatorname{RG}_{\rm em}\) includes threshold decoupling and
the finite conversion from the running scheme coupling to the declared
on-shell \(q^2\to0\) observable, including nonperturbative hadronic
vacuum polarization from the selected QCD completion.  The same finite
Dirac spectrum that determines the thresholds also enters the boundary
capacity. Coupling normalization and mass matching are therefore one
coupled spectral problem.

### 18. No-retuning condition

Let

\[
\vartheta
=
(D_F,\Lambda_A,\mu_\star,T^*,\widehat\beta,
K_{\rm em},W_\partial,\Pi_{\rm em},F,\mathfrak s_\partial)
\tag{M7.85}
\]

be the aperture parameter record fixed before observable evaluation. Define

\[
\mathcal E_{\rm mass}(\vartheta)=0
\tag{M7.86}
\]

as the finite-spectrum and vacuum stationarity equations, and

\[
\mathcal E_{\alpha}(\vartheta)=0
\tag{M7.87}
\]

as (M7.77)–(M7.84). The joint closure condition is

\[
\boxed{
\mathcal E_{\rm joint}(\vartheta)
=
\left(
\mathcal E_{\rm mass}(\vartheta),
\mathcal E_{\alpha}(\vartheta)
\right)=0.
}
\tag{M7.88}
\]

A valid solution uses one \(\vartheta\) for masses, mixing, coupling
normalization and threshold flow. Altering \(D_F\), \(\mu_\star\),
\(T^*\), \(\widehat\beta\), \(K_{\rm em}\), \(W_\partial\),
\(\Pi_{\rm em}\) or the subtraction scheme after inspecting
\(\alpha(0)\) violates joint closure.

### 19. Strong CP as an aperture character

The QCD topological density is

\[
\mathcal L_\theta
=
\frac{\theta g_3^2}{32\pi^2}
G_{\mu\nu}^A\widetilde G^{A\mu\nu},
\tag{M7.89}
\]

and the invariant parameter is

\[
\bar\theta
=
\theta+\arg\det(Y_uY_d).
\tag{M7.90}
\]

Let \(\mathcal Z_{\rm top}\) be the source topological-sector group and

\[
\chi_{\bar\theta}:\mathcal Z_{\rm top}\to U(1)
\tag{M7.91}
\]

be the character of the invariant combined phase (M7.90), including
the finite-Dirac determinant phase rather than the bare coefficient
alone. The aperture admits two consistent cases:

\[
\boxed{
\begin{cases}
\chi_{\bar\theta}|_{\mathcal Z_{\rm phys}}=1,
&\text{the phase is source-silent on the realized sector},\\
\chi_{\bar\theta}\ne1\text{ across realized sectors},
&\text{the branch is rejected unless a compensating mode cancels it}.
\end{cases}
}
\tag{M7.92}
\]

If \(\mathcal Z_{\rm phys}\) contains the primitive unit topological
charge selected in Chapter 8, triviality of the character on the
silent branch gives

\[
\boxed{
\bar\theta=0\pmod{2\pi}.
}
\tag{M7.93}
\]

On a compensating branch, an axion-like phase \(a/f_a\) replaces

\[
\bar\theta\longmapsto\bar\theta+\frac{a}{f_a}
\tag{M7.94}
\]

and the vacuum minimizes the total phase. Strong CP is thus either invisible within a fixed source sector or dynamically cancelled before Tier-1 admission.

### 20. Yang–Mills equations and currents

Variation of the gauge action gives

\[
\boxed{
(D_\mu F^{\mu\nu})^a
=
g_aJ^{a\nu}.
}
\tag{M7.95}
\]

For the abelian factor,

\[
\nabla_\mu B^{\mu\nu}=g_YJ_Y^\nu.
\tag{M7.96}
\]

Gauge invariance and the matter equations imply

\[
D_\nu J^{a\nu}=0.
\tag{M7.97}
\]

After electroweak breaking,

\[
\nabla_\mu F_{\rm em}^{\mu\nu}=eJ_{\rm em}^\nu,
\qquad
\nabla_\nu J_{\rm em}^\nu=0.
\tag{M7.98}
\]

The normalization \(e\) in this equation is exactly the spectral/collar quantity determined by (M7.76)–(M7.84).

### 21. Matter stress and gravitational closure

The tree-level matter representative is

\[
S_M^{\rm cl}[g,\Phi_M]
=
\int_M\mathcal L_{\rm SM}\sqrt{-g}\,d^4x,
\tag{M7.99}
\]

and its stress tensor is

\[
\boxed{
T_{\mu\nu}^{M,\rm cl}
=
-\frac2{\sqrt{-g}}
\frac{\delta S_M^{\rm cl}}{\delta g^{\mu\nu}}.
}
\tag{M7.100}
\]

The completed quantum matter functional is partitioned exactly once as

\[
\Gamma_M^{\rm 1PI}
=S_M^{\rm cl}
+\Gamma_{\rm QFT,dyn}^{\rm ren}
+\Gamma_{\rm grav,loc}^{\rm ren},
\tag{M7.100a}
\]

where pure-metric local counterterms in the last term renormalize the
gravity coefficients and are varied only in the gravity sector. Thus

\[
T_{\mu\nu}^{M,\rm tot}
=T_{\mu\nu}^{M,\rm cl}
+T_{\mu\nu}^{\rm QFT,dyn}
\tag{M7.100b}
\]

contains each matter field and counterterm once. On the coupled matter
and QFT equations,

\[
\nabla^\mu T_{\mu\nu}^{M,\rm tot}
=-\nabla^\mu
\left(T_{\mu\nu}^{R}+T_{\mu\nu}^{MR}\right),
\tag{M7.101}
\]

with a zero right-hand side when no explicit record or mixed sector
exchanges stress with matter. Substitution into the gravitational
equation gives

\[
\boxed{
G_{\mu\nu}+\Lambda_{\rm br}g_{\mu\nu}
+\mathcal Q_{\mu\nu}^{\rm grav}
=
8\pi G_R
\left(
T_{\mu\nu}^{M,\rm cl}
+T_{\mu\nu}^{\rm QFT,dyn}
+T_{\mu\nu}^{R}
+T_{\mu\nu}^{MR}
\right).
}
\tag{M7.102}
\]

Matter and gravity are consequently generated by different heat
coefficients of the same realized carrier and meet through one metric
variation. Equation (M7.102) uses precisely the ownership convention
(QFT5a.49) and (G6.54); it does not add a second expectation stress to
an already quantized Standard Model action.

The controlled matter limits are

\[
\begin{array}{rcl}
|R|/\mu_H^2\to0,
\quad E/\Lambda_A\to0
&\Longrightarrow&
\text{renormalized Standard Model on the Lorentzian branch},\\[1mm]
E/m_{W,Z,h,t}\to0
&\Longrightarrow&
SU(3)_c\times U(1)_{\rm em}
\text{ EFT with matched Fermi operators},\\[1mm]
E/\Lambda_{\rm QCD}\to0
&\Longrightarrow&
\text{hadronic/chiral EFT on the selected QCD phase},\\[1mm]
v/\mu_{\rm RG}\to0
&\Longrightarrow&
SU(3)_c\times SU(2)_L\times U(1)_Y
\text{ symmetric-phase QFT},\\[1mm]
\hbar\to0
&\Longrightarrow&
\text{classical Yang--Mills--Higgs--Dirac equations}.
\end{array}
\tag{M7.102a}
\]

Every arrow uses the matching map (M7.82c); deleting a heavy field
without its threshold operators is not a recovery limit.

### 22. Matter-sector selection theorem

#### Theorem M7.2 — Finite-geometry recovery of the Standard Model branch

Assume:

1. the source invariant is the complete finite-cell datum
   (M7.4e)--(M7.4f), including its signed chiral bimodule incidence
   and three-family multiplicity;
2. the selected representative obeys the finite real-even,
   first-order, orientability and unimodularity conditions;
3. the sterile representation is neutral under the central lift and
   the selected maximal line lattice is the \(\mathbb Z_6\) lattice;
4. the full local and global anomaly gate (M7.72), including the BV
   quantum master equation, holds;
5. the locally covariant and nonperturbative QFT completion of Chapter
   5a exists for this branch;
6. \(D_F\), the spectral moments, finite subtraction scheme, boundary
   operator and weight solve the joint condition (M7.88) at an
   isolated physical root modulo the stated equivalences.

Then the Tier-1 matter readout contains:

\[
\boxed{
\frac{SU(3)_c\times SU(2)_L\times U(1)_Y}{\mathbb Z_6},
\quad
3\text{ chiral families},
\quad
H\sim(1,2,\tfrac12),
\quad
\mathcal L_{\rm SM},
}
\tag{M7.103}
\]

with anomaly-free hypercharges (M7.21), gauge and Higgs fields generated by inner fluctuations, fermion masses and mixing generated by \(D_F\), and electromagnetic coupling determined by (M7.80) followed by the threshold flow (M7.84).

**Proof.** Classification of finite real \(C^*\)-algebras and their
graded bimodules turns assumption 1 into one kinematic isomorphism
class, with the allowed finite Dirac operators forming the spectral
fibre described after (M7.4f). Proposition M7.1 recovers its lifted local gauge
algebra, while the line lattice fixes the global quotient. The grading
gives the chiral representations. The first-order condition restricts
the off-diagonal finite operator to the invariant tensors (M7.35), and
inner fluctuations yield the gauge connection and Higgs doublet. The
neutral central lift removes the otherwise anomaly-free \(B-L\)
direction in (M7.20a), giving (M7.21). The heat expansion and physical
Pfaffian yield the bosonic and fermionic actions, while assumptions 4
and 5 supply their quantum and global completion. Canonical
normalization gives (M7.47); the common capacity law gives
(M7.77)--(M7.81). Assumption 6 fixes an isolated spectral datum and one scheme
across masses, mixing, couplings and thresholds. \(\square\)

### 23. Complete source-to-matter chain

\[
\boxed{
\begin{gathered}
\Omega
\longrightarrow
\mathsf S_{\rm adm}
\longrightarrow
(\mathcal A_F,\mathcal H_F,D_F,\gamma_F,J_F)
\longrightarrow
\operatorname{Lift}_{J_F}U(\mathcal A_F)\\
\longrightarrow
G_{\rm SM}^{(6)}
\longrightarrow
D_A=D+A+JAJ^{-1}
\longrightarrow
(\mathscr A_\mu,H)\\
\longrightarrow
\operatorname{Tr}F(D_A^2/\Lambda_A^2)
+\tfrac12\langle J\Psi,D_A\Psi\rangle
\longrightarrow
\mathcal L_{\rm SM}\\
\longrightarrow
(m_f,V_{\rm CKM},U_{\rm PMNS},g_3,g_2,g_Y)
\longrightarrow
\alpha^{-1}(0)
\longrightarrow
T_{\mu\nu}^{M,\rm tot}.
\end{gathered}
}
\tag{M7.104}
\]

The finite internal algebra determines what can transform; the finite Dirac operator determines what can mix; the heat coefficients determine how strongly the surviving fields respond; and the boundary capacity fixes the electromagnetic normalization.

### 24. Interfaces fixed by this chapter

\[
\begin{aligned}
\text{internal geometry: }&
(\mathcal A_F,\mathcal H_F,D_F,\gamma_F,J_F),\\
\text{gauge structure: }&
(G_{\rm SM}^{(6)},\mathscr A_\mu,F_{\mu\nu}),\\
\text{matter structure: }&
(\mathcal R_F,N_{\rm fam},Y_f,M_f,V_{\rm CKM},U_{\rm PMNS}),\\
\text{scalar structure: }&
(H,v,\mu_H^2,\lambda_H),\\
\text{coupling structure: }&
(Z_3,Z_2,Z_Y,K_{\rm em},W_\partial,
B_{\rm ren}^{w,\partial},\mathfrak s_\partial),\\
\text{closure equations: }&
(\mathcal C_{\rm anom}^{\rm full},\mathcal E_{\rm joint},
\operatorname{RG}_{\rm em}),\\
\text{gravity interface: }&
T_{\mu\nu}^{M,\rm tot}
=T_{\mu\nu}^{M,\rm cl}+T_{\mu\nu}^{\rm QFT,dyn}.
\end{aligned}
\tag{M7.105}
\]

These data supply the parameter-selection layer of Chapter 8: the finite spectral equations for the Higgs scale, Yukawa hierarchy, family multiplicity, mixing phases, threshold spectrum and numerical electromagnetic readout.
