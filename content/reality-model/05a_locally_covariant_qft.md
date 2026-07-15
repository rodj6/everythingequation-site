# The Source-to-Readout Construction

## Locally covariant QFT, operational completion and causal backreaction

### 1. Position of the QFT sector

The quantum-record construction of Chapter 5 is the operational
face of a relativistic field theory.  The matter construction of
Chapter 7 supplies its gauge group, representations and
interaction tensors; the geometric construction of Chapter 6
supplies its Lorentzian background; and the present construction
returns the renormalized local algebra, admissible states, detector
instruments, stress response and renormalization trajectory consumed by
both sectors.

For one realization label \(Y\), define the quantization relation

\[
\boxed{
\operatorname{Quant}_Y:
\mathsf{MBranch}_Y
\times_{\mathsf{Spin}^G}
\mathsf{Geom}_Y
\times\mathsf{Ren}_Y
\rightsquigarrow
\mathsf{QFT}_Y .
}
\tag{QFT5a.1}
\]

It is a relation because a Lagrangian and a background need not possess
a unique nonperturbative completion.  The selected Tier-1 branch fixes
one compatible element.  The apparent order

\[
\mathsf{Geom}\longrightarrow\mathsf{QFT}\longrightarrow
T_{\mu\nu}^{\rm QFT}\longrightarrow\mathsf{Geom}
\tag{QFT5a.2}
\]

is a simultaneous Tier-1 fixed-point block.  Neither geometry nor QFT
is used to define \(\Omega\), Tier 0 or the prepared realization.

### 2. Background category

Let \(\mathsf{Bkg}_{4}^{\rm spin,G}\) be the category whose objects are

\[
\mathfrak b=(M,g,o,t,\mathfrak s,P_G,\mathbf b,\theta(\mu)).
\tag{QFT5a.3}
\]

Here \((M,g)\) is a connected, oriented and time-oriented,
four-dimensional globally hyperbolic Lorentzian manifold of regularity
at least \(C^\infty\); \(\mathfrak s\) is a spin or selected
\(\operatorname{Spin}^{G}\) structure; \(P_G\to M\) is the principal
bundle of the admitted global gauge group; \(\mathbf b\) is the family
of external backgrounds and compactly supported spacetime-dependent
couplings; and \(\theta(\mu)\) is a point on the selected renormalized
parameter trajectory.

A morphism

\[
\chi:\mathfrak b\longrightarrow\mathfrak b'
\tag{QFT5a.4}
\]

is a smooth causally convex isometric embedding preserving orientation,
time orientation, the spin lift, the gauge bundle, backgrounds and
coupling labels.  Its image contains every causal curve in \(M'\) whose
endpoints lie in \(\chi(M)\).  A morphism is Cauchy when its image
contains a Cauchy surface of \(M'\).

### 3. Classical BV datum

For \(\mathfrak b\in\mathsf{Bkg}_{4}^{\rm spin,G}\), let

\[
\mathcal E_{\rm BV}(\mathfrak b)
=\Gamma\!\left(
E_{\rm fields}\oplus E_{\rm ghosts}\oplus
E_{\rm antifields}\right)
\tag{QFT5a.5}
\]

be the graded nuclear configuration space with ghost number and BV
degree.  Its fields include the gauge connection, chiral fermions,
Higgs field, ghosts, antighosts, auxiliary fields and antifields fixed
by the matter branch.  The odd cotangent pairing defines the BV
antibracket

\[
(\cdot,\cdot)_{\rm BV}:
\mathfrak F_{\rm loc}^{p}\times\mathfrak F_{\rm loc}^{q}
\longrightarrow\mathfrak F_{\rm loc}^{p+q+1}.
\tag{QFT5a.6}
\]

The proper classical action satisfies

\[
\boxed{
(S_{\rm BV},S_{\rm BV})_{\rm BV}=0,
\qquad
s_{\rm BV}=(S_{\rm BV},\cdot),
\qquad
s_{\rm BV}^{\,2}=0 .
}
\tag{QFT5a.7}
\]

An admissible gauge-fixing fermion \(\Psi\) selects a Lagrangian
submanifold.  The gauge-fixed Hessian \(P_\Psi\) is required to be
Green hyperbolic,

\[
P_\Psi\Delta_{\rm ret/adv}
=\Delta_{\rm ret/adv}P_\Psi=I,
\qquad
\operatorname{supp}\Delta_{\rm ret/adv}f
\subseteq J^\pm(\operatorname{supp}f).
\tag{QFT5a.8}
\]

Microcausal functionals have functional derivatives whose wavefront
sets avoid the closed future and past cone products needed for the
Peierls product.  This is the domain on which propagator contractions
and time-ordered products are defined.

### 4. Locally covariant algebra

The kinematic field theory is a covariant functor

\[
\boxed{
\mathcal A_{\rm kin}:
\mathsf{Bkg}_{4}^{\rm spin,G}
\longrightarrow\mathsf{TAlg}_*,
}
\tag{QFT5a.9}
\]

from backgrounds to complete locally convex unital \(*\)-algebras and
continuous injective unital \(*\)-homomorphisms.  It obeys

\[
\mathcal A_{\rm kin}(\chi_2\chi_1)
=\mathcal A_{\rm kin}(\chi_2)\mathcal A_{\rm kin}(\chi_1),
\qquad
\mathcal A_{\rm kin}(\operatorname{id})=\operatorname{id}.
\tag{QFT5a.10}
\]

For causally disjoint embeddings \(\chi_i:\mathfrak b_i\to\mathfrak b\),

\[
[\mathcal A_{\rm kin}(\chi_1)A_1,
  \mathcal A_{\rm kin}(\chi_2)A_2]=0,
\tag{QFT5a.11}
\]

and every Cauchy morphism induces an algebra isomorphism,

\[
\chi\text{ Cauchy}
\quad\Longrightarrow\quad
\mathcal A_{\rm kin}(\chi)\text{ is an isomorphism}.
\tag{QFT5a.12}
\]

Relative Cauchy evolution under a compact metric perturbation \(h\) is
an automorphism \(\operatorname{rce}_{\mathfrak b}[h]\).  On a common
invariant domain its first variation is

\[
\left.
\frac{d}{d\epsilon}
\operatorname{rce}_{\mathfrak b}[\epsilon h](A)
\right|_{\epsilon=0}
=\frac{i}{2\hbar}
\left[
\int_M T_{\mu\nu}^{\rm ren}h^{\mu\nu}\,\mathrm{vol}_g,
A
\right].
\tag{QFT5a.13}
\]

This identifies the stress tensor as the generator of background
response and ties local covariance directly to the gravity interface.

### 5. Perturbative renormalized branch

Choose a locally covariant renormalization prescription

\[
\mathfrak R=(\mu,\mathcal B_{\rm EFT},T_n,\theta(\mu),L),
\tag{QFT5a.14}
\]

where \(T_n\) are renormalized time-ordered products, \(\mathcal
B_{\rm EFT}\) is an operator basis modulo integration by parts, field
redefinitions and admitted equation-of-motion redundancies, and \(L\)
is the retained loop/EFT order.  The products satisfy causal
factorization, local covariance, the microlocal spectrum condition,
unitarity, field independence, smooth background dependence, scaling
and the Ward identities.

For a compactly supported interaction \(V\), define

\[
S_{\mathfrak R}(V)
=\sum_{n\ge0}\frac{i^n}{n!\hbar^n}T_n(V^{\otimes n}),
\qquad
R_V(F)
=-i\hbar\left.
\frac{d}{d\lambda}
S_{\mathfrak R}(V)^{-1}S_{\mathfrak R}(V+\lambda F)
\right|_{\lambda=0}.
\tag{QFT5a.15}
\]

The interacting algebra is generated by \(R_V(F)\) and is independent
of the switching function in every causally complete region by the
algebraic adiabatic limit.

The quantum BV differential is

\[
\widehat s_{\rm BV}F
=(S_{\rm ren},F)_{\rm BV}-i\hbar\Delta_{\mathfrak R}F.
\tag{QFT5a.16}
\]

At order \(n\), the quantum master obstruction is a local class

\[
[\mathfrak A_{\rm BV}^{(n)}]
\in H^1_{\rm loc}(s_{\rm BV}\mid d).
\tag{QFT5a.17}
\]

The branch passes the anomaly gate exactly when every such class is
zero or is cancelled by an explicitly owned inflow sector.  Then

\[
\widehat s_{\rm BV}^{\,2}=0,
\qquad
\boxed{
\mathcal A_{\rm phys}^{\rm form}(\mathfrak b)
=H^0\!\left(
\widehat s_{\rm BV},
\mathcal A_{\rm int}^{\rm ren}(\mathfrak b)[[\hbar,\mathbf g]]
\right).
}
\tag{QFT5a.18}
\]

Gauge-fixing changes induce quasi-isomorphisms of (QFT5a.18), so its
cohomology classes are gauge-fixing independent.

Background embeddings intertwine the BV differential and therefore
induce the physical functor

\[
\boxed{
\mathcal A_{\rm phys}^{\rm form}:
\mathsf{Bkg}_{4}^{\rm spin,G}
\longrightarrow\mathsf{TAlg}_*,
\qquad
\mathcal A_{\rm phys}^{\rm form}(\chi)[F]
=[\mathcal A_{\rm int}^{\rm ren}(\chi)F].
}
\tag{QFT5a.18a}
\]

This is well defined because BRST-exact representatives map to
BRST-exact representatives. The completed physical net below has the
same covariance maps on its dense comparison algebra.

### 6. States and microlocal admissibility

The reference-state assignment is contravariant.  On the dense formal
comparison algebra its pullback is

\[
\mathsf{St}_Y:
(\mathsf{Bkg}_{4}^{\rm spin,G})^{\rm op}
\longrightarrow\mathsf{Conv},
\qquad
\omega'\longmapsto
\omega'\circ\mathcal A_{\rm phys}^{\rm form}(\chi).
\tag{QFT5a.19}
\]

Every exact member of \(\mathsf{St}_Y(\mathfrak b)\) is positive and
normalized after completion; its formal restriction is positive order by
order.  Its two-point distributions obey the Hadamard wavefront
condition; for a scalar representative,

\[
\operatorname{WF}(\omega_2)
=\{(x,k;x',-k'):(x,k)\sim(x',k'),\ k\in\overline V_+\}.
\tag{QFT5a.20}
\]

This condition makes Wick powers and the point-split renormalized
stress tensor well defined.  The interacting formal state is
\(\omega_V=\omega_0\circ R_V\).  Exact positivity is assigned only
after the nonperturbative or detector-operational completion below.

### 7. Nonperturbative completion branch

The aperture carries a completion tag

\[
\mathfrak c_{\rm np}
\in\{\mathsf{OS},\mathsf{Constructive},
\mathsf{OperatorAlgebraic},\mathsf{DetectorLocal}\}.
\tag{QFT5a.21}
\]

On an Osterwalder--Schrader branch, the Euclidean Schwinger hierarchy

\[
\mathscr S_Y=\{S_n\}_{n\ge0}
\tag{QFT5a.22}
\]

is a family of tempered, Euclidean-covariant, permutation-covariant
distributions satisfying regularity, clustering and reflection
positivity.  If \(\Theta\) is reflection through Euclidean time zero,
reflection positivity is

\[
\sum_{i,j}\overline{c_i}c_j
S_{n_i+n_j}(\Theta f_i\otimes f_j)\ge0
\tag{QFT5a.23}
\]

for every finite family supported at positive Euclidean times.  Quotient
the positive-time test algebra by the null space of (QFT5a.23) and
complete it to obtain \(\mathcal H_{\rm OS}\).  Positive Euclidean time
translation induces

\[
e^{-\tau H_{\rm OS}},
\qquad H_{\rm OS}=H_{\rm OS}^*\ge0,
\tag{QFT5a.24}
\]

and analytic continuation reconstructs the Wightman functions and
local net on the Lorentzian branch.  Gauge theories apply this
construction to the gauge-invariant/BRST-cohomological Schwinger
algebra, where reflection positivity is required after the physical
quotient.

More generally, a constructive completion is a tuple

\[
\mathfrak C_{\rm np}
=(\mathcal H_{\rm np},\Omega,H,
\mathcal A_{\rm np},U,\mathsf{St}_{\rm np},\operatorname{Asym})
\tag{QFT5a.25}
\]

such that \(H\ge0\), \(\Omega\) is the unique invariant vacuum on the
selected pure phase, \(\mathcal A_{\rm np}\) is a causal time-slice
net, and \(\operatorname{Asym}\) reproduces (QFT5a.18) to every retained
order on a dense comparison algebra. More precisely, let
\(\mathcal A_{\rm np}^{\rm cmp}\subset\mathcal A_{\rm np}\) be the
dense exact comparison algebra, let
\(\mathcal D_{\mathfrak C}^{\rm res}\subset
\mathcal A_{\rm phys}^{\rm form}\) be the declared resummable
\(*\)-subalgebra, and let
\(\mathcal J_{\mathfrak C}^{\rm null}\) be its two-sided
\(*\)-ideal of BRST and completion-null elements.  The completion
supplies the typed maps

\[
\boxed{
\operatorname{NPComp}_Y:
\mathcal A_{\rm phys}^{\rm form}\rightsquigarrow\mathfrak C_{\rm np},
\qquad
\operatorname{Res}_{\mathfrak C}:
\mathcal D_{\mathfrak C}^{\rm res}/
\mathcal J_{\mathfrak C}^{\rm null}
\xrightarrow[\cong]{*}
\mathcal A_{\rm np}^{\rm cmp},
\qquad
\operatorname{Asym}_{\mathfrak C}:
\mathcal A_{\rm np}^{\rm cmp}\longrightarrow
\mathcal A_{\rm phys}^{\rm form},
}
\tag{QFT5a.26}
\]

with

\[
\boxed{
\operatorname{Asym}_{\mathfrak C}
\bigl(\operatorname{Res}_{\mathfrak C}([F])\bigr)
\sim F
\qquad
(F\in\mathcal D_{\mathfrak C}^{\rm res})
}
\tag{QFT5a.26a}
\]

order by order in the common asymptotic topology. The completion
relation may return more than one candidate before the aperture branch
conditions are imposed; the selected branch fixes one
\(\mathfrak C_{\rm np}\). This formulation does not apply an asymptotic
map to a completion tuple or to a formal element outside its resummable
domain and therefore makes the comparison statement well typed.

It supplies the exact branch object; the perturbative algebra supplies
its local asymptotic coordinates.  Write \(\mathcal A_{\rm phys}\) for
the selected completed physical net: \(\mathcal A_{\rm np}\) on a global
constructive or operator-algebraic completion, and the compatible net
\(\{\mathcal B_{\mathfrak D}\}_{\mathfrak D}\) on a detector-local
completion.  Its dense comparison algebra is related to
\(\mathcal A_{\rm phys}^{\rm form}\) by (QFT5a.26).

### 8. Detector-local operational completion

Relativistic local algebras are generally not type-I factors and do not
factorize across sharp spatial regions.  For each relatively compact
causally complete detector region \(\mathfrak D\Subset M\), the
aperture supplies

\[
\boxed{
\mathfrak O_{Y,\mathfrak D}
=(\mathcal B_{\mathfrak D},\mathcal B^0_{\mathfrak D},
\mathcal D_{\mathfrak D}^{\rm res},
\mathcal J_{\mathfrak D}^{\rm null},
\operatorname{Res}_{\mathfrak D},
\operatorname{Asym}_{\mathfrak D}).
}
\tag{QFT5a.27}
\]

\(\mathcal B_{\mathfrak D}\) is a unital \(C^*\)-algebra,
\(\mathcal B^0_{\mathfrak D}\) is a norm-dense unital
\(*\)-subalgebra, \(\mathcal D_{\mathfrak D}^{\rm res}\) is a unital
resummable \(*\)-algebra, and
\(\mathcal J_{\mathfrak D}^{\rm null}\) is its two-sided
\(*\)-ideal of detector and BRST null observables. The map

\[
\operatorname{Res}_{\mathfrak D}:
\mathcal D_{\mathfrak D}^{\rm res}/
\mathcal J_{\mathfrak D}^{\rm null}
\xrightarrow[\cong]{*}\mathcal B^0_{\mathfrak D}
\tag{QFT5a.28}
\]

is a \(*\)-isomorphism from the resummable physical observables modulo
the detector- and BRST-null ideal.  Its inverse asymptotic map satisfies

\[
\operatorname{Asym}_{\mathfrak D}
\operatorname{Res}_{\mathfrak D}([F])\sim F
\tag{QFT5a.29}
\]

to the declared order and commutes with admissible embeddings.  A
positive state \(\bar\omega\) gives

\[
(\pi_{\bar\omega},\mathcal H_{\bar\omega},\Omega_{\bar\omega})
=\operatorname{GNS}(\mathcal B_{\mathfrak D},\bar\omega),
\qquad
\mathcal N_{\mathfrak D,\bar\omega}
=\pi_{\bar\omega}(\mathcal B_{\mathfrak D})''.
\tag{QFT5a.30}
\]

This von Neumann algebra, rather than the formal power-series algebra,
is the domain of normal instruments.

For redundant relativistic records, the completion also passes the
split gate. Whenever

\[
\overline{\mathfrak D_1}\subset\mathfrak D_2,
\tag{QFT5a.30a}
\]

with positive causal collar, there is a type-I factor

\[
\boxed{
\mathcal N_{\mathfrak D_1,\bar\omega}
\subset\mathfrak T_{12}
\subset\mathcal N_{\mathfrak D_2,\bar\omega}.
}
\tag{QFT5a.30b}
\]

The selected QFT branch certifies this property through its declared
nuclearity or phase-space bound. On a stationary detector patch, a
sufficient bound is nuclearity of

\[
\Theta_{\beta,\mathfrak D}:
\mathcal N_{\mathfrak D,\bar\omega}\longrightarrow
\mathcal H_{\bar\omega},
\qquad
A\longmapsto e^{-\beta H}A\Omega_{\bar\omega},
\qquad
\|\Theta_{\beta,\mathfrak D}\|_1
\le\exp(C_{\mathfrak D}\beta^{-3}),
\tag{QFT5a.30c}
\]

for every \(\beta>0\) in the collar range. General globally
hyperbolic patches use the corresponding modular-nuclearity map. These
bounds supply the operational tensor
factorizations used for independent record fragments while retaining
the type-III nature of sharp local algebras.

### 9. Operational instruments and the record interface

Use the Heisenberg convention

\[
\mathcal I_{\mathfrak D}:
\Sigma_{\mathfrak D}\longrightarrow
\operatorname{CP}_{\rm n}
(\mathcal N_{\mathfrak D,\bar\omega}),
\tag{QFT5a.31}
\]

with ultraweak countable additivity and unital nonselective map,

\[
\mathcal I_{\cup_nB_n}(A)
=\sum_n\mathcal I_{B_n}(A),
\qquad
\mathcal I_{\mathsf O}(I)=I.
\tag{QFT5a.32}
\]

The probability and conditional state are

\[
p_{\bar\omega}(B)
=\bar\omega(\mathcal I_B(I)),
\qquad
\bar\omega_B(A)
=\frac{\bar\omega(\mathcal I_B(A))}{p_{\bar\omega}(B)}.
\tag{QFT5a.33}
\]

The predual of (QFT5a.31) is the Schr\"odinger instrument used in
Chapter 5.  Let
\(\iota^0_{\mathfrak D}:\mathcal B^0_{\mathfrak D}\hookrightarrow
\mathcal B_{\mathfrak D}\) be the dense inclusion.  Hence the
operational-completion square commutes on the resummable quotient:

\[
\boxed{
\begin{array}{ccc}
\mathcal D_{\mathfrak D}^{\rm res}/
\mathcal J_{\mathfrak D}^{\rm null}
&\xrightarrow{\ \pi_{\bar\omega}\circ
\iota^0_{\mathfrak D}\circ
\operatorname{Res}_{\mathfrak D}\ }&
\mathcal N_{\mathfrak D,\bar\omega}\\
\downarrow\operatorname{formal\ response}&&
\downarrow\mathcal I_{\mathfrak D}\\
\mathsf{Preform}^{\rm form}
&\xrightarrow{\operatorname{Res}_{\rm rec}}&
\mathsf{Preform}^{\rm normal}.
\end{array}}
\tag{QFT5a.34}
\]

For spacelike regions \(\mathfrak D_A,\mathfrak D_B\), locality of an
operation means that its nonselective map has a normal completely
positive extension
\(\widetilde{\mathcal I}^{A}_{\mathsf O}\) to the generated joint
algebra
\(\mathcal N_{\mathfrak D_A}\vee\mathcal N_{\mathfrak D_B}\)
(or to the quasilocal algebra) satisfying

\[
\widetilde{\mathcal I}^A_{\mathsf O}(B)=B
\qquad(B\in\mathcal N_{\mathfrak D_B}),
\tag{QFT5a.35}
\]

and the corresponding extensions of spacelike local operations commute.
Therefore the unconditioned marginal in
\(B\) is independent of the instrument chosen in \(A\).  Selective
conditioning can change correlations but cannot transmit a signal.

### 10. QCD completion, confinement and the mass gap

Let \(\mathcal A_{\rm QCD}^{\rm phys}\) be the BRST cohomology/net
generated by gauge-invariant colour-singlet local composites and
admitted Wilson--'t Hooft operators. Asymptotic freedom has

\[
\beta_3(g)=-b_0g^3-b_1g^5+O(g^7),
\qquad b_0>0,
\tag{QFT5a.36}
\]

and defines the scheme-labelled transmutation scale

\[
\boxed{
\begin{aligned}
\Lambda_{\rm QCD}^{\mathfrak s}
={}&\mu
\exp\!\left[-\frac{1}{2b_0g_3^2(\mu)}\right]
\bigl(b_0g_3^2(\mu)\bigr)^{-b_1/(2b_0^2)}\\
&\times
\exp\!\left\{-\int_0^{g_3(\mu)}
\left[
\frac1{\beta_3(x)}+\frac1{b_0x^3}
-\frac{b_1}{b_0^2x}
\right]dx\right\}.
\end{aligned}
}
\tag{QFT5a.36a}
\]

The integrand is finite at the origin and direct differentiation gives
\(d\Lambda_{\rm QCD}^{\mathfrak s}/d\log\mu=0\). Finite scheme
changes rescale \(\Lambda_{\rm QCD}^{\mathfrak s}\) and the
dimensionless completion constants inversely, leaving physical masses
invariant. The QCD aperture compression \(K_{Y,3}\) is admitted
only when its nonperturbative completion satisfies the following
spectral conditions.

First, the vacuum GNS Hamiltonian has a physical gap,

\[
\boxed{
\operatorname{spec}H_{\rm QCD}^{\rm phys}
\subseteq\{0\}\cup[\Delta_{\rm QCD},\infty),
\qquad
\Delta_{\rm QCD}=c_{\rm gap}^{\mathfrak s}
\Lambda_{\rm QCD}^{\mathfrak s}>0,
}
\tag{QFT5a.37}
\]

where \(c_{\rm gap}^{\mathfrak s}\) is the dimensionless matching
invariant of the selected
completion.  With nonzero light-quark masses the full gap is the mass
of the lightest physical colour-singlet excitation; the pure-glue
subsector has its own gluonic gap.  In the exact chiral limit the
Goldstone sector is separated before applying (QFT5a.37).

Second, the physical Hilbert space is colour neutral:

\[
\mathcal H_{\rm QCD}^{\rm phys}
=\ker Q_{\rm BRST}/\overline{\operatorname{im}Q_{\rm BRST}},
\qquad
Q^A_{\rm colour}\mathcal H_{\rm QCD}^{\rm phys}=0,
\tag{QFT5a.38}
\]

and no gauge-dependent coloured two-point function contributes an LSZ
one-particle pole to the physical algebra.  This is the exact
colour-confinement criterion for full QCD.

On the pure Yang--Mills compression, confinement is equivalently
certified by positive string tension,

\[
\boxed{
\sigma
=-\lim_{R,T\to\infty}
\frac1{RT}\log\langle W(R,T)\rangle>0,
\qquad
V_{Q\bar Q}(R)=\sigma R+o(R).
}
\tag{QFT5a.39}
\]

With dynamical fundamental quarks, string breaking replaces the
infinite-distance area law; (QFT5a.38), the positive singlet gap and a
positive pre-breaking flux-tube tension are the applicable criteria.
Reflection positivity and clustering imply, for centred local
gauge-invariant operators at spacelike separation \(r\),

\[
|\omega(A\,\alpha_r(B))|
\le C_{A,B}e^{-\Delta_{\rm QCD}r}
\tag{QFT5a.40}
\]

away from massless sectors.  Equations (QFT5a.37)--(QFT5a.40) are the
QCD completion gate consumed by the atlas; "asymptotic freedom" alone
is not substituted for confinement.

### 11. Renormalization group and threshold descent

The renormalized parameter vector and Wilson coefficients satisfy

\[
\left(
\mu\frac{\partial}{\partial\mu}
+\beta^i(\theta)\frac{\partial}{\partial\theta^i}
+\gamma_\Phi\mathcal N_\Phi
\right)\Gamma_{\rm QFT}^{\rm ren}=0.
\tag{QFT5a.41}
\]

At a heavy eigenvalue \(M_h\) of the common finite/aperture spectrum,

\[
\theta_< (M_h)
=\mathcal M_h[\theta_>(M_h);M_h,D_F],
\qquad
\Gamma_<-\Gamma_>=O((E/M_h)^{d_{\rm cut}-4}).
\tag{QFT5a.42}
\]

Finite scheme transformations push the beta vector forward and leave
physical observables invariant to the retained order.  All threshold
maps use the same spectrum as the parameter and matter sectors.

### 12. Closed-time-path response

For an initial Hadamard or nonperturbatively completed state \(\omega\),
the causal influence functional is

\[
\Gamma_{\rm QFT,CTP}^{\rm ren}
[g^+,\Phi^+;g^-,\Phi^-\mid\omega].
\tag{QFT5a.43}
\]

It satisfies

\[
\Gamma[g,g]=0,
\qquad
\Gamma[g^+,g^-]
=-\overline{\Gamma[g^-,g^+]},
\tag{QFT5a.44}
\]

and its first physical-limit variation gives the state-dependent
dynamical stress

\[
\boxed{
T_{\mu\nu}^{\rm QFT,dyn}
=-\frac2{\sqrt{-g}}
\left.
\frac{\delta\Gamma_{\rm QFT,dyn}^{\rm ren}}
{\delta g^{+\mu\nu}}
\right|_{g^+=g^-=g,\,\Phi^+=\Phi^-=\Phi}.
}
\tag{QFT5a.45}
\]

The retarded response and noise kernels are

\[
H_{\mu\nu\rho\sigma}^{\rm ret}(x,x')
=-\frac4{\sqrt{-g(x)}\sqrt{-g(x')}}
\left.
\frac{\delta^2\operatorname{Re}\Gamma_{\rm dyn}}
{\delta g^{+\mu\nu}(x)\delta g^{\Delta\rho\sigma}(x')}
\right|_{\Delta=0},
\tag{QFT5a.46}
\]

\[
N_{\mu\nu\rho\sigma}(x,x')
=\frac12\omega\!\left(
\{t_{\mu\nu}(x),t_{\rho\sigma}(x')\}
\right)\ge0
\tag{QFT5a.47}
\]

where
\(t_{\mu\nu}=T_{\mu\nu}^{\rm ren}
-\omega(T_{\mu\nu}^{\rm ren})I\).  Positivity is understood after
smearing, as a bidistributional quadratic form.  The first kernel has
retarded support;
the second is the covariance of the stochastic source in the
Einstein--Langevin limit.

For external backgrounds \(b_A\), diffeomorphism covariance gives

\[
\nabla^\mu T_{\mu\nu}^{\rm QFT,dyn}
=\sum_A\frac1{\sqrt{-g}}
\frac{\delta\Gamma_{\rm dyn}}{\delta b_A}
\nabla_\nu b_A+\mathcal A_\nu^{\rm diff}.
\tag{QFT5a.48}
\]

The admitted branch has \(\mathcal A_\nu^{\rm diff}=0\).  Dynamical
backgrounds transfer the displayed force density to their own stress,
so the total Ward identity is conserved.

The trace Ward identity is owned by the same renormalization
trajectory. In a four-dimensional mass-independent scheme it has the
operator form

\[
\boxed{
T^\mu{}_{\mu}
=\sum_{i\in\mathrm{dimless}}\beta^i(\theta)
[\mathcal O_i]
+\sum_f(1+\gamma_{m_f})m_f[\bar\psi_f\psi_f]
+c\,C_{\mu\nu\rho\sigma}^2-a\,E_4+b\,\Box R .
}
\tag{QFT5a.48a}
\]

Here \(\mathcal O_i=\partial\mathcal L_{\rm ren}/\partial\theta^i\)
in the declared operator basis. In canonical gauge normalization its
gauge contribution is
\(\beta_a(g_a)F^a_{\rho\sigma}F_a^{\rho\sigma}/(2g_a)\).
The Yukawa and scalar beta functions are included in the first sum, and
the \(\Box R\) coefficient is scheme dependent. Equation
(QFT5a.48a) is the local bridge between RG flow, vacuum response and
the metric source; it is not counted again as a separate gravitational
operator.

### 13. Exact-once ownership

At a fixed renormalization scale decompose the matter 1PI functional as

\[
\boxed{
\Gamma_{\rm matter}^{\rm 1PI}
=S_M^{\rm cl}
+\Gamma_{\rm QFT,dyn}^{\rm ren}
+\Gamma_{\rm grav,loc}^{\rm ren}.
}
\tag{QFT5a.49}
\]

\(S_M^{\rm cl}\) owns tree-level fields not represented as quantum
expectation stresses.  \(\Gamma_{\rm QFT,dyn}^{\rm ren}\) owns quantum,
state and nonlocal matter response after subtracting that classical
part.  Pure-metric local terms in \(\Gamma_{\rm grav,loc}^{\rm ren}\)
renormalize \(\Lambda_{\rm br},G_R\) and the gravitational EFT
coefficients and are varied only on the gravity side.  Consequently

\[
T_{\mu\nu}^{M,\rm cl}+T_{\mu\nu}^{\rm QFT,dyn}
\tag{QFT5a.50}
\]

contains no duplicate field or counterterm.

### 14. Recovery limits

The following diagrams commute on the selected branch:

\[
\begin{aligned}
\mathcal N_{\mathfrak D}\cong M_n(\mathbb C),\quad E\ll m_{\rm gap}
&\Longrightarrow\text{ordinary finite-system quantum mechanics},\\
(M,g)\to(\mathbb R^4,\eta),\quad\omega\to\omega_{\rm vac}
&\Longrightarrow\text{Poincar\'e-covariant flat-space QFT},\\
\hbar\to0
&\Longrightarrow\text{classical BV/Peierls field theory},\\
E/M_h\to0
&\Longrightarrow\text{matched low-energy EFT},\\
\delta g\text{ retained},\quad g\text{ classical}
&\Longrightarrow\text{semiclassical and stochastic gravity}.
\end{aligned}
\tag{QFT5a.51}
\]

### 15. QFT completion theorem

#### Theorem QFT5a.1 -- Compatible relativistic quantum field readout

Assume:

1. the selected matter branch supplies a proper anomaly-free BV datum;
2. the reconstructed geometry is globally hyperbolic and carries the
   required \(\operatorname{Spin}^{G}\) structure;
3. the locally covariant renormalization conditions and quantum master
   equation hold;
4. the aperture supplies a completion satisfying either
   (QFT5a.22)--(QFT5a.26) or an equivalent operator-algebraic
   construction;
5. every detector region used for records has the operational
   completion (QFT5a.27)--(QFT5a.30), and every redundant fragment
   family passes the split gate (QFT5a.30a)--(QFT5a.30b);
6. the QCD compression satisfies (QFT5a.37)--(QFT5a.40);
7. the ownership split (QFT5a.49) is preserved by RG flow and threshold
   matching.

Then \(\operatorname{Quant}_Y\) returns a locally covariant physical
QFT with positive completed states, normal detector instruments,
operational no-signalling, a confined and gapped QCD sector on the
physical branch, a causal renormalized stress tensor and a common RG/EFT
trajectory. Its detector reduction is the quantum instrument theory of
Chapter 5, and its CTP stress and noise are precisely the QFT
inputs of Chapter 6.

**Proof.** The BV and anomaly hypotheses make (QFT5a.18) a
gauge-independent physical cohomology functor.  Local covariance,
Einstein causality and the time-slice axiom give (QFT5a.9)--(QFT5a.13).
The nonperturbative completion supplies an exact positive Hilbert/net
realization with the prescribed formal asymptotics.  Operational
completion and GNS representation give the normal instruments and the
commuting-local-operation proof of no-signalling.  The QCD completion
gate gives colour neutrality, gap and flux-tube criteria.  CTP
unitarity and the Ward identity give causal response, (QFT5a.45) and
covariant stress exchange.  Exact-once ownership prevents that stress
or its pure-metric counterterms from appearing twice. \(\square\)

### 16. Interfaces exposed by the QFT layer

\[
\boxed{
\begin{gathered}
(M,g,\mathfrak s,P_G;\mathcal A_F,\mathcal H_F,D_F)
\xrightarrow{\operatorname{Quant}_Y}
(\mathcal A_{\rm phys},\mathsf{St},\mathfrak C_{\rm np}),\\
\mathcal A_{\rm phys}
\xrightarrow{\operatorname{OpComp}_{\mathfrak D}}
(\mathcal N_{\mathfrak D},\bar\omega,\mathcal I_{\mathfrak D})
\xrightarrow{\operatorname{Preform}}
R^{\rm pre},\\
\Gamma_{\rm QFT,CTP}^{\rm ren}
\xrightarrow{\delta_g}
(T_{\mu\nu}^{\rm QFT,dyn},H^{\rm ret},N)
\xrightarrow{\operatorname{Sol}_G}
g,\\
(D_F,\theta(\mu),\mathfrak R)
\xrightarrow{\rm RG+matching}
\theta(\mu') .
\end{gathered}}
\tag{QFT5a.52}
\]
