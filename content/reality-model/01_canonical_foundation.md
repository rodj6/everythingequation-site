# The Source-to-Readout Construction

## Canonical foundation

### 1. Physical thesis

Physical reality is a realized readout of a source structure. The source is not a hidden spacetime and is not described by importing the objects of its readout back into it. Spacetime, Hilbert space, quantum fields, particles, gauge groups, clocks, observers and measured constants belong to the realized Tier-1 description.

The complete descent has the form

\[
\Omega
\longrightarrow
\mathsf S_{\rm adm}
\longrightarrow
\mathsf{Real}_0
\dashrightarrow
\mathsf{Emit}_{1/2}
\supset
\mathsf{Spine}_{1/2}^{\mathsf{CSCF}}
\longrightarrow
\mathsf{Carr}_{1/2}
\longrightarrow
\mathsf{Field}_{1}
\dashrightarrow
\mathsf{Comp}_{1}.
\tag{1.1}
\]

The arrows in (1.1) do not all have the same mathematical type. Source admission is a least-fixed-point closure. Realization is a fibre construction. The aperture is a partial, branch-indexed realization functor. Carrier formation is an operator representation. Field formation is functional calculus. Tier-1 completion is a coupled equalizer of physical sectors.

This distinction is essential: the model is not a single function that converts an object called “source” into a finished universe. It is a typed construction in which existence, branch selection, quotienting, spectral realization and physical compatibility occur at different stages.

### 2. Canonical vocabulary

The following notation is fixed throughout the construction.

\[
\boxed{
\begin{aligned}
\Omega &:\ \text{source reality and its source-local formation law},\\
\mathsf S_0 &:\ \text{category of raw source structures},\\
\mathsf S_{\rm adm} &:\ \text{Tier-0 category of lawful source structures},\\
X &:\ \text{one admitted source object},\\
Y &:\ \text{one prepared realization supported by }X,\\
\mathcal A_{1/2}^{a} &:\ \text{routed Tier-0.5 aperture in branch or face }a,\\
\mathsf{Emit}_{1/2}^{a} &:\ \text{disjoint union of full, effective, residue and null routes},\\
\mathfrak S_Y^{a} &:\ \text{weighted spectral spine emitted by the aperture},\\
K_Y^{a} &:\ \text{positive selfadjoint carrier on that spine},\\
\mathfrak F_{K} &:\ \text{canonical dual-faced spectral-curvature field},\\
p_s &:\ \text{physical structure in Tier-1 sector }s,\\
\mathsf{Comp}_{1} &:\ \text{globally compatible Tier-1 readout}.
\end{aligned}}
\tag{2.1}
\]

The symbol \(\Omega\) is never used for a Tier-1 state, a probability space, a spacetime region, or an observer state. When the Reality Compiler infers a source candidate from a Tier-1 problem, that candidate is denoted

\[
\widehat\Omega_Q\in\mathsf{Model}(\Omega),
\tag{2.2}
\]

not \(\Omega\) itself. Thus the compiler constructs a model of source structure conditioned by a question \(Q\); it does not construct source reality.

The symbol \(L\) is reserved for a law or generator only when its type is displayed. The Tier-0 fixed point is a class \(\mathsf S_{\rm adm}\), not a Tier-1 Lagrangian and not a spectral operator. A spectral generator is always written \(K\). A Tier-1 Lagrangian density is written \(\mathcal L_1\).

### 3. Source signature

The source is represented by a pre-geometric signature

\[
\Sigma_\Omega=
(V,\preceq,P_{\rm dep},M_{\rm dep},\iota_M,
\mathsf{Supp},\mathsf{Lin},\mathsf{Inv},\mathsf{Bnd}).
\tag{3.1}
\]

Here \(V\) is a class of source vertices or elementary loci, \(\preceq\) is a dependency preorder, \(P_{\rm dep}\) is a class of deposition-potential tokens, and \(M_{\rm dep}\hookrightarrow P_{\rm dep}\) is the marked subclass capable of supporting distinguishable realized records. Each marked token carries finite support, lineage, invariant data and intrinsic boundary type.

The raw source category is

\[
\mathsf S_0=\operatorname{Mod}_{\mathbf U}(\Sigma_\Omega),
\tag{3.2}
\]

with strong morphisms preserving dependency, marking, finite support, strict dependency pairs, lineage, invariants and intrinsic boundaries. Source objects carry no assumed metric, dimension, coordinate, duration, complex amplitude, field, action, gauge group or empirical parameter.

Source reality is the formation package

\[
\boxed{
\Omega=
(\Sigma_\Omega,\mathfrak G_\Omega,\mathcal W_0,
\mathscr O_\Omega^{\rm NFE},\mathcal I_\Omega,
\mathcal D_\Omega).
}
\tag{3.3}
\]

The components are respectively the source signature, elementary source cells, witness class, no-free-extension operations, invariant assignment and deposition/readout potential. Equation (3.3) replaces the incompatible uses of \(\Omega\) as source, closure operator and generated problem tuple. Closure is an operation belonging to \(\Omega\), not a second meaning of the symbol.

### 4. Tier 0: exact lawhood

Fix Grothendieck universes \(\mathbf U\in\mathbf V\). Source carriers and
hom-sets are \(\mathbf U\)-small, while the collection of their
\(\mathbf U\)-isomorphism classes is a \(\mathbf V\)-set. Hence

\[
\mathcal P_{\rm iso}^{\mathbf V}
\bigl(\operatorname{Ob}_{\mathbf U}\mathsf S_0\bigr)
\tag{4.0}
\]

is an honest complete lattice rather than a powerset of an unspecified
proper class. All fixed points below are taken in (4.0).

Let \(\mathcal W_0\) contain the nonempty finite source cells admitted
as primitive witnesses, and let \(\mathscr O_\Omega^{\rm NFE}(A)\)
contain the objects generated from \(A\) by strong images,
boundary-respecting finite pushouts, presentation-preserving retracts,
the declared stabilizing directed colimits and source isomorphisms. No
operation may freely append an unrelated object or any Tier-1 datum.

Define the source-law operator

\[
\boxed{
\mathbb L_\Omega(A)=
\operatorname{IsoSat}
\bigl(\mathcal W_0\cup A\cup
\mathscr O_\Omega^{\rm NFE}(A)\bigr).
}
\tag{4.1}
\]

Because \(\mathbb L_\Omega\) is monotone and inflationary, it has a least fixed point:

\[
\boxed{
\operatorname{Ob}\mathsf S_{\rm adm}
=\mu\mathbb L_\Omega
=\bigcap\{A:\mathcal W_0\subseteq A,\ 
\mathscr O_\Omega^{\rm NFE}(A)\subseteq A\}.
}
\tag{4.2}
\]

Tier 0 is the category \(\mathsf S_{\rm adm}\) whose objects are (4.2) and whose arrows are the strong source morphisms between them. An individual source object is lawful precisely when

\[
G_0(X)=1
\quad\Longleftrightarrow\quad
X\in\operatorname{Ob}\mathsf S_{\rm adm}.
\tag{4.3}
\]

The ordinal construction

\[
A_0=\varnothing,\qquad
A_{\alpha+1}=\mathbb L_\Omega(A_\alpha),\qquad
A_\lambda=\bigcup_{\beta<\lambda}A_\beta
\tag{4.4}
\]

stabilizes at the least closure ordinal \(\alpha_\Omega\), where \(A_{\alpha_\Omega}=\operatorname{Ob}\mathsf S_{\rm adm}\).

#### 4.1 Typed form of the schema equation

The historical expression

\[
L=\Omega\Delta\partial(L)
\tag{4.5}
\]

is the compressed schema of (4.1)–(4.2). Its exact content is obtained by distinguishing three operations:

\[
\partial_\Omega:
\mathfrak G_\Omega\longrightarrow
\operatorname{Diag}(\mathsf S_0)
\tag{4.6}
\]

extracts the intrinsic source boundary diagram of a cell;

\[
\Delta_\Omega(A)
=\operatorname{CellAttach}
\bigl(A;\partial_\Omega C\hookrightarrow C\bigr)_{C\in\mathfrak G_\Omega}
\tag{4.7}
\]

forms every boundary-compatible distinction and attachment generated by those cells; and

\[
\operatorname{Cl}_\Omega(A)
=\operatorname{IsoSat}
\bigl(\mathcal W_0\cup A\cup
\operatorname{NFE}(\Delta_\Omega(A))\bigr)
\tag{4.8}
\]

performs lawful source closure. The exact fixed-point equation is therefore

\[
\boxed{
\operatorname{Ob}\mathsf S_{\rm adm}
=\operatorname{Cl}_\Omega(\operatorname{Ob}\mathsf S_{\rm adm})
=\mu\operatorname{Cl}_\Omega.
}
\tag{4.9}
\]

Equation (4.5) remains the visual schema

\[
\text{lawhood}
=\text{source closure}
\circ\text{generated distinction}
\circ\text{intrinsic boundary},
\tag{4.10}
\]

while (4.6)–(4.9) supply its mathematical type.

### 5. Realization fibre

For \(X\in\mathsf S_{\rm adm}\) and a marked token \(m\in M_X\), define

\[
Y=J_{\rm real}(X,m)
=(X,m,S_m,\preceq_m,\ell_m,
\mathsf{Inv}_m,\mathsf{Bnd}_m),
\qquad S_m=\operatorname{supp}_X(m).
\tag{5.1}
\]

The prepared realization fibre is

\[
\boxed{
\operatorname{RealPrep}_\Omega[X]
=\{J_{\rm real}(X,m):m\in M_X\}.
}
\tag{5.2}
\]

For a strong source morphism \(f:X\to X'\), define

\[
\operatorname{RealPrep}_\Omega(f)
J_{\rm real}(X,m)
=J_{\rm real}(X',f_Mm),
\tag{5.2a}
\]

with support, lineage, invariant and boundary maps inherited from
\(f\). Identity and composition follow from those of \(f_M\), so
\(\operatorname{RealPrep}_\Omega\) is a functor to
\(\mathbf V\)-small categories (discrete on objects unless explicit
preparation morphisms are retained).

Let

\[
\mathsf{Real}_0
=\int_{X\in\mathsf S_{\rm adm}}
\operatorname{RealPrep}_\Omega[X]
\tag{5.3}
\]

be the Grothendieck construction of all prepared fibres. Its projection

\[
\rho_0:\mathsf{Real}_0\to\mathsf S_{\rm adm},
\qquad \rho_0(X,Y)=X,
\tag{5.4}
\]

retains source lineage. This prevents the readout from losing the identity of its source antecedent before the inverse problem is posed.

### 6. Tier 0.5: the aperture

The aperture is a family of partial functors indexed by an aperture face \(a\):

\[
\boxed{
\mathcal A_{1/2}^{a}:
\mathsf{Real}_0
\dashrightarrow
\mathsf{Emit}_{1/2}^{a}.
}
\tag{6.1}
\]

For a prepared realization \(Y\), the aperture executes the composition

\[
\mathcal A_{1/2}^{a}
=\operatorname{Spine}^{a}
\circ\operatorname{NoEx}^{a}
\circ\operatorname{Comp}^{a}
\circ\operatorname{Vis}^{a}
\circ\operatorname{Red}
\circ\operatorname{CRI}.
\tag{6.2}
\]

Its stages have the following exact roles:

\[
\begin{aligned}
\operatorname{CRI}(Y)
&:\ \text{construct realizable structures from the prepared support},\\
\operatorname{Red}
&:\ \text{quotient gauge, basis, label and exchange redundancy},\\
\operatorname{Vis}^{a}
&:\ \text{select the probe-visible observables of aperture face }a,\\
\operatorname{Comp}^{a}
&:\ \text{restore the minimal face relations required for closure},\\
\operatorname{NoEx}^{a}
&:\ \text{remove unattached realization excess},\\
\operatorname{Spine}^{a}
&:\ \text{form and route the closed spectral data admitted by the face}.
\end{aligned}
\tag{6.3}
\]

Before routing, a successful analytic construction produces the
candidate spine datum

\[
\boxed{
\mathfrak S_Y^{a}
=(\mathcal H_Y^{a},q_Y^{a},K_Y^{a},E_Y^a,\nu_Y^a,
\mathcal W_Y^{a},J_Y^{a},\tau_Y^{a},\mathcal R_Y^a,
h_Y^a,\gamma_a,\mathsf{CarrierRoute}^a).
}
\tag{6.4}
\]

Here \(\mathcal H_Y^{a}\) is a separable Hilbert space generated by the
no-excess realization, \(q_Y^{a}\) is a densely defined closed
nonnegative quadratic form, \(K_Y^{a}\) is its represented operator,
\(E_Y^a\) is its projection-valued spectral measure, \(J_Y^{a}\) is
the mirror or real structure when present, \(\mathcal W_Y^{a}\) is the
law-visible algebra, and \(\tau_Y^{a},\nu_Y^{a}\) are the trace and
control-measure data needed for physical readout. The residue, selected
coherent symbol, damping response and route retain everything required
to decide whether the output is a complete field carrier, an effective
response, a typed obstruction or no carrier.

The actual aperture codomain is

\[
\mathsf{Emit}_{1/2}^{a}
=
\mathsf{Spine}_{1/2}^{a}
\sqcup\mathsf{Eff}_{1/2}^{a}
\sqcup\mathsf{Res}_{1/2}^{a}
\sqcup\{\varnothing_{\rm carr}\},
\tag{6.4a}
\]

with route labels
\(\mathsf{CSCFEligible}\),
\(\mathsf{EffectiveCarrierOnly}\),
\(\mathsf{ResidueCarrierOnly}\) and
\(\mathsf{NoCarrier}\).  Only the first summand contains the complete
datum (6.4) required by the canonical field functor.

The carrier is fixed by

\[
q_Y^{a}[\psi,\phi]
=\langle (K_Y^{a})^{1/2}\psi,
(K_Y^{a})^{1/2}\phi\rangle,
\qquad K_Y^{a}\ge0,
\tag{6.5}
\]

with domain \(D(q_Y^{a})=D((K_Y^{a})^{1/2})\). The representation theorem for closed nonnegative forms makes \(K_Y^{a}\) unique.

The aperture emits a complete CSCF spine on \((Y,a)\) exactly when

\[
\begin{aligned}
\operatorname{Dom}_{\mathsf{CSCF}}(\mathcal A_{1/2}^{a})
=\{Y:\;&q_Y^{a}\text{ is densely defined, closed and nonnegative},\\
&K_Y^a=\operatorname{Fr}(q_Y^a),\
h_Y^a,\gamma_a\text{ solve the declared aperture selections},\\
&\mathcal I_\Omega^a(X)\text{ descends naturally and the boundary
realization is selfadjoint},\\
&\tau_Y^a\text{ admits every requested trace or determinant},\\
&\mathcal R_Y^a\text{ has no component blocking the nominated
field}\}.
\end{aligned}
\tag{6.6}
\]

Failure of one of (6.6) does not by itself make the routed aperture
undefined: the maximal causal effective response or the exact typed
residue is emitted when its own domain conditions hold.  The aperture
is therefore neither an arbitrary filter nor a binary permission gate.
It is the constructive passage from source-supported realization data
to one of the four mathematically distinct route codomains.

### 7. Carrier family and sector faces

A successful realization can emit more than one carrier face. Its carrier family is

\[
\mathbf K_Y
=\bigl(\{K_Y^{a}\}_{a\in A_Y},
\{\chi_{ab}\}_{(a,b)\in E_Y}\bigr),
\tag{7.1}
\]

where \(\chi_{ab}\) is an intertwining or comparison morphism on the common spectral content of faces \(a\) and \(b\). It satisfies

\[
\chi_{ab}f(K_Y^{a})
=f(K_Y^{b})\chi_{ab}
\tag{7.2}
\]

for every bounded Borel function \(f\) in the declared shared calculus. Equation (7.2), rather than equality of unrelated operators, defines common-carrier compatibility across faces.

When several sectors are compressions of one master carrier \(K_Y\), there are reducing projections \(P_a\in W^*(K_Y)'\) such that

\[
\mathcal H_Y^{a}=P_a\mathcal H_Y,
\qquad
K_Y^{a}=K_Y|_{P_a\mathcal H_Y}.
\tag{7.3}
\]

The existence of (7.3) is a strong realization property. The weaker relation (7.2) is the canonical interface condition.

### 8. The canonical spectral-curvature field

For every spine with
\(\mathsf{CarrierRoute}=\mathsf{CSCFEligible}\) and carrier
\(K=K^*\ge0\) on \(\mathcal H\), the
aperture face emits an admissible real spectral symbol

\[
h^a:\operatorname{spec}K\to\mathbb R,
\qquad h^a(0)=0,
\tag{8.1}
\]

finite \(E_K\)-almost everywhere and satisfying the face's covariance,
domain and determinant conditions. It is not chosen after the field has
been inspected. A bounded symbol gives a norm-continuous coherent group;
an unbounded symbol gives a strongly continuous group on the spectral
domain displayed in Chapter 4.

The complete field is

\[
\boxed{
\mathfrak F_{K,h^a,\gamma_a}=
\bigl(K,C,\gamma_a,U_t,S_t,W_t,
\Lambda_T,\Gamma_T,D_T,B_T,E_K\bigr),
}
\tag{8.2}
\]

where

\[
\begin{aligned}
C&=h^a(K), & U_t&=e^{-itC},\\
S_t&=e^{-tK}, &
W_t&=e^{-t(\gamma_aK+iC)},\\
\Lambda_T(K)&=\frac1T\int_0^T e^{-tK}\,dt
=\frac{1-e^{-TK}}{TK},\\
\Gamma_T(K)&=\frac1T\int_0^T e^{-itC}\,dt
=\frac{1-e^{-iTC}}{iTC},\\
D_T(K)&=-\log\det_*\Lambda_T(K)|_{(\ker K)^\perp},\\
B_T(K)&=-\log\det_*\bigl(\Gamma_T(K)^*\Gamma_T(K)\bigr)|_{(\ker K)^\perp}.
\end{aligned}
\tag{8.3}
\]

The quotients at zero in (8.3) are defined by continuous extension. The determinant symbol \(\det_*\) denotes the convention declared by the realization: finite-dimensional, Fredholm, heat-kernel or zeta regularized.

Because every component of (8.3) is a Borel function of \(K\), on the
common invariant domains,

\[
[U_t,S_s]=[U_t,\Lambda_T]
=[S_s,\Gamma_T]=0,
\qquad
\mathfrak F_{K,h^a,\gamma_a}\ \text{is affiliated with }W^*(K).
\tag{8.4}
\]

Thus coherence and dissipation are not two substances. They are the phase and contraction responses of the same spectral measure:

\[
E_C(B)=E_K((h^a)^{-1}(B)),
\quad
S_t=\int_0^\infty e^{-t\lambda}\,dE_K(\lambda),
\quad
U_t=\int_0^\infty e^{-ith^a(\lambda)}\,dE_K(\lambda).
\tag{8.5}
\]

The scalar function

\[
f_T(\lambda)=\frac{1-e^{-T\lambda}}{T\lambda}
\tag{8.6}
\]

is a strictly decreasing bijection from \([0,\infty)\) to \((0,1]\). Consequently an exact full dissipative readout at any one \(T>0\) recovers the carrier:

\[
\boxed{K=f_T^{-1}(\Lambda_T(K)).}
\tag{8.7}
\]

This is the canonical reverse passage from a complete Tier-1 dissipative shadow to its Tier-0.5 spectral carrier.

### 9. Tier-1 field projection

For every CSCF-eligible aperture face \(a\), a field projection is a
partial functor or measurable relation

\[
\pi_{s,a}:\mathsf{Fld}_{1/2}^{a}
\dashrightarrow\mathsf O_s^{\rm raw},
\qquad
\mathfrak F_{K_Y^a,h_Y^a,\gamma_a}
\longmapsto p_s^{\rm raw}
=\pi_{s,a}(\mathfrak F_{K_Y^a,h_Y^a,\gamma_a}).
\tag{9.1}
\]

The sector index \(s\) ranges over

\[
\mathsf V_1
=\{F,Q,R,G,M,P,C,\mathrm{Th},\mathrm{Tm},O\},
\tag{9.2}
\]

where \(F\) is locally covariant QFT, \(Q\) its finite-system and
detector-operational quantum face, and the remaining labels denote
objective records, geometry and gravity, matter and gauge structure,
parameter selection, cosmology, thermodynamics, temporal orientation
and structural observers. Raw sector construction retains its
discrepancy:

\[
\mathscr K_s(Y)
\subseteq \mathsf O_s^{\rm raw}\times\mathsf D_s,
\qquad
(p_s,\delta_s)\in\mathscr K_s(Y).
\tag{9.3}
\]

The exact physical sector is

\[
\mathsf P_s
=\{p_s\in\mathsf O_s^{\rm raw}:\delta_s(p_s)=0\},
\tag{9.4}
\]

and a controlled finite-resolution sector is

\[
\mathsf P_s(\varepsilon_s)
=\{p_s:\delta_s(p_s)\le\varepsilon_s\}.
\tag{9.5}
\]

A physical readout must satisfy its field equations, regularity, covariance, anomaly and conservation conditions.

### 10. Coupled Tier-1 reality

For every directed sector interface \(e:s\to t\), choose a comparison category \(\mathsf I_e\) and functors

\[
L_e:\mathsf P_s\to\mathsf I_e,
\qquad
R_e:\mathsf P_t\to\mathsf I_e.
\tag{10.1}
\]

The complete Tier-1 world is the coherent equalizer

\[
\boxed{
\mathsf{Comp}_1
=\operatorname{Eq}^{\rm coh}(\Delta_L,\Delta_R).
}
\tag{10.2}
\]

An object of \(\mathsf{Comp}_1\) is a family
\((p_s)_{s\in\mathsf V_1}\) together with comparison isomorphisms

\[
\phi_e:L_e(p_s)\overset\sim\longrightarrow R_e(p_t)
\tag{10.3}
\]

that satisfy path coherence and all declared loop-cocycle conditions. Representative interfaces include

\[
\begin{aligned}
\text{QFT}\leftrightarrow\text{gravity}:&\quad
T_{\mu\nu}^{\rm QFT,dyn}
:=\frac{-2}{\sqrt{-g}}
\frac{\delta\Gamma_{\rm QFT,dyn}^{\rm ren}}
{\delta g^{\mu\nu}}
\ \text{is the same owned source used in the metric equation},\\
\text{record}\leftrightarrow\text{geometry}:&\quad
(\prec_D,\nu_Y,L_{\rm inf})
\cong(I_g^+,[\operatorname{vol}_g],P_{\rm resp})_{\rm reconstructed},\\
\text{matter}\leftrightarrow\text{QFT}:&\quad
\operatorname{MatterDatum}(z_F)
\cong(\mathcal A_F,\mathcal H_F,D_F,[\theta(\mu)]),\\
\text{gravity}\leftrightarrow\text{cosmology}:&\quad
(g,T_{\mu\nu})\mapsto
(a,H,\bar\rho,\bar p,\delta g,\delta T).
\end{aligned}
\tag{10.4}
\]

Here \(\operatorname{MatterDatum}\) is the restriction functor from the
completed QFT object to its finite internal representation, Dirac/Yukawa
datum and RG trajectory.  The record--geometry comparison deliberately
uses chronological order, volume class and response operator rather than
a nonexistent positive-definite Lorentzian distance.

When the sectors backreact, the realized world is a fixed point of a coupled correspondence

\[
\mathbf p\in\mathfrak C_Y(\mathbf p),
\qquad
\mathbf p=(p_s)_{s\in\mathsf V_1},
\tag{10.5}
\]

subject to (10.2). This is the mathematical expression of a self-consistent projected reality: geometry affects quantum fields, quantum fields source geometry, records depend on both, and the common branch closes simultaneously.

### 11. The complete readout relation

Combining the preceding stages gives the partial, set-valued relation

\[
\boxed{
\operatorname{Read}_\Omega
=\Gamma_{\rm comp}
\circ\Pi_{\rm sect}
\circ\mathfrak F
\circ\operatorname{CSCF}
\circ\mathcal A_{1/2}
\circ\operatorname{RealPrep}_\Omega:
\mathsf S_{\rm adm}\rightsquigarrow\mathsf{Comp}_1.
}
\tag{11.1}
\]

Here \(\operatorname{CSCF}\) is the partial projection defined only on
the \(\mathsf{Spine}_{1/2}^{\mathsf{CSCF}}\) summand of
\(\mathsf{Emit}_{1/2}\); it has no value on the other three summands.

In expanded form,

\[
X\mapsto
Y\mapsto
\operatorname{Emit}^a(Y)
\xmapsto{\ \mathsf{CSCFEligible}\ }
\mathfrak S_Y^{a}\mapsto
K_Y^{a}\mapsto
\mathfrak F_{K_Y^{a},h_Y^a,\gamma_a}\mapsto
(p_s)_s\mapsto
\mathbf p\in\mathsf{Comp}_1.
\tag{11.2}
\]

Equation (11.1) is defined on the full-field branch.  Effective and
residue emissions instead enter their separately typed sector maps and
are never silently coerced into \(\mathfrak F\).  No arrow in (11.2)
may be replaced by a direct assertion that a source object is a
spacetime, a wavefunction or a field. Those are realized readouts.

### 12. Physical anchors as recovery diagrams

Known physics enters as a recovery condition on the appropriate Tier-1 regime. For each established theory \(\mathcal T_j\), choose a regime functor \(\operatorname{Reg}_j\) and recovery functor \(\operatorname{Rec}_j\). A valid projected branch satisfies

\[
\boxed{
\operatorname{Rec}_j
\circ\operatorname{Reg}_j
\circ\operatorname{Read}_\Omega(X)
\simeq\mathcal T_j.
}
\tag{12.1}
\]

The principal anchors are

\[
\begin{array}{lll}
\text{quantum:} & \mathcal T_Q=(\mathcal H,\rho,E,\mathcal I),
& \Pr(k)=\operatorname{Tr}(\rho E_k),\\[0.4em]
\text{QFT:} & \mathcal T_{\rm QFT}=(\mathcal A_{\rm loc},\omega,\Gamma_{\rm ren}),
& \text{local covariance, causality, time-slice},\\[0.4em]
\text{gravity:} & \mathcal T_{\rm GR}=(M,g,\nabla,G_{\mu\nu}),
& G_{\mu\nu}+\Lambda g_{\mu\nu}=8\pi G T_{\mu\nu},\\[0.4em]
\text{matter:} & \mathcal T_{\rm SM}=(G_{\rm SM},\rho_f,\Phi,D_\mu),
& \text{anomaly-free gauge dynamics},\\[0.4em]
\text{thermodynamics:} & \mathcal T_{\rm th}=(S,T,\delta Q,W),
& dS\ge\delta Q/T,\\[0.4em]
\text{cosmology:} & \mathcal T_{\rm cos}=(a,H,\rho,p,\delta),
& \text{FLRW and gauge-invariant perturbations}.
\end{array}
\tag{12.2}
\]

Equation (12.1) makes established physics a boundary condition on the reconstruction without treating its Tier-1 language as source ontology.

### 13. Scale and dimensional emergence

Source relations are not assigned metres, seconds or joules. A realization acquires dimensions through a positive scale character

\[
\sigma_Y:\mathsf{Dim}_\Omega(Y)\to\mathbb R_{>0},
\qquad
\sigma_Y(d_1+d_2)=\sigma_Y(d_1)\sigma_Y(d_2).
\tag{13.1}
\]

Choosing fundamental realized units \((\ell_Y,\tau_Y,\varepsilon_Y)\) defines the dimensional readout

\[
\operatorname{Dim}_Y(n_L,n_T,n_E)
=\ell_Y^{n_L}\tau_Y^{n_T}\varepsilon_Y^{n_E}.
\tag{13.2}
\]

Dimensionless source and spectral invariants become measured constants only after (13.1)–(13.2). A Tier-1 parameter \(g_j\) therefore decomposes as

\[
g_j=\sigma_Y(d_j)\,\widehat g_j(\mathfrak S_Y),
\tag{13.3}
\]

where \(d_j\) is its dimensional type and \(\widehat g_j\) is a dimensionless spectral or aperture invariant. This separates hierarchy questions into scale selection and dimensionless structural selection.

### 14. Reflective mathematics

A Tier-1 mathematical structure is reflective when its obstruction is the image of a failure or boundary condition in the aperture. Let

\[
\mathfrak R_a:
\mathsf{Spine}_{1/2}^{a}\to\mathsf{Math}_1^{a}
\tag{14.1}
\]

be the mathematical readout functor of aperture face \(a\). For a Tier-1 assertion \(P\subseteq\mathsf{Math}_1^{a}\), its source-side reflective antecedent is the homotopy pullback

\[
\boxed{
\operatorname{Ref}_a(P)
=\mathsf{Spine}_{1/2}^{a}
\times^h_{\mathsf{Math}_1^{a}}P.
}
\tag{14.2}
\]

Thus a reflective correspondence requires three objects:

\[
(\mathcal X_P,\mathfrak R_a,\mathcal O_P),
\tag{14.3}
\]

where \(\mathcal X_P\) is the aperture structure, \(\mathfrak R_a\) is the projection map, and \(\mathcal O_P\) is the Tier-1 obstruction. Resemblance of equations is insufficient. The obstruction must be the functorial image of the source/aperture condition and must transform naturally under admissible source morphisms.

For a completed reflective component, the equivalence takes the form

\[
\boxed{
\mathcal X_P\text{ is aperture-admissible}
\quad\Longleftrightarrow\quad
\mathcal O_P=0
\ \text{and all declared domain, covariance and trace hypotheses hold}
\text{ in the Tier-1 readout}.
}
\tag{14.4}
\]

This is the mathematical form required for the Riemann, Navier–Stokes, Yang–Mills and other aperture correspondences developed later.

### 15. Inverse reconstruction

Let \(\mathsf E_\Omega\) be the category of witnessed readouts

\[
\mathsf E_\Omega
=\{(X,Y,\mathfrak S,K,\mathbf p):
\mathbf p\in\operatorname{Read}_\Omega(X)\}.
\tag{15.1}
\]

With projections

\[
\mathsf S_{\rm adm}
\xleftarrow{\ p\ }
\mathsf E_\Omega
\xrightarrow{\ q\ }
\mathsf{Comp}_1,
\tag{15.2}
\]

the admissible source antecedents of a readout \(O\) are

\[
\operatorname{Lift}(O)
=\mathsf E_\Omega^{\simeq}
\times^h_{\mathsf{Comp}_1^{\simeq}}\{O\}.
\tag{15.3}
\]

The inverse problem is therefore a fibre problem. Exact carrier reconstruction such as (8.7), joint coherent/dissipative tomography, record-to-geometry reconstruction and cross-sector compatibility successively reduce the fibre:

\[
\operatorname{Lift}(O)
\supseteq
\operatorname{Lift}(O,K)
\supseteq
\operatorname{Lift}(O,K,\mathfrak S)
\supseteq
\operatorname{Lift}(O,K,\mathfrak S,\mathcal A_{1/2}).
\tag{15.4}
\]

Source identification occurs when the final fibre is contractible up to strong source isomorphism. Otherwise the readout determines an equivalence class of source antecedents.

### 16. Structural consequences

**Factorization.** Every full-field claim has a lineage through
realization, aperture, CSCF carrier and field. An effective claim has
the corresponding lineage through the effective-response summand, and
an obstruction claim through the residue summand. A direct
source-to-physics identification is ill-typed.

**Carrier primacy.** Fields are realized responses of carriers. Coherent and dissipative behavior cannot be assigned independent origins when both belong to \(W^*(K)\).

**Coupled reality.** A collection of individually successful sector theories is not yet a world. A world is their coherent equalizer (10.2) and coupled fixed point (10.5).

**Anchor preservation.** Established physics is recovered through commuting regime diagrams (12.1), so deeper source structure extends rather than replaces Tier-1 physics.

**Reflective closure.** An open Tier-1 problem belongs to the aperture only when an equivalence of the form (14.4) is constructed.

**Recoverability.** Complete readouts can constrain or reconstruct their carrier, but source recovery is governed by the residual fibre (15.3), not by an assumed inverse function.

### 17. Canonical architecture

The complete architecture fixed for all subsequent construction is

\[
\boxed{
\begin{gathered}
\Omega=(\Sigma_\Omega,\mathfrak G_\Omega,\mathcal W_0,
\mathscr O_\Omega^{\rm NFE},\mathcal I_\Omega,\mathcal D_\Omega),\\[0.2em]
\mathsf S_{\rm adm}=\mu\mathbb L_\Omega,\\[0.2em]
X\in\mathsf S_{\rm adm}
\longmapsto
Y\in\operatorname{RealPrep}_\Omega[X]
\dashrightarrow
\operatorname{Emit}^{a}(Y)
\xmapsto{\ \mathsf{CSCFEligible}\ }
\mathfrak S_Y^{a}\ \text{with}\ K_Y^{a}\in\mathfrak S_Y^{a},\\[0.2em]
K_Y^{a}\longmapsto
\mathfrak F_{K_Y^{a},h_Y^a,\gamma_a}
\longmapsto
(p_s)_{s\in\mathsf V_1}
\longmapsto
\mathbf p\in\operatorname{Eq}^{\rm coh}(\Delta_L,\Delta_R).
\end{gathered}}
\tag{17.1}
\]

In compressed form,

\[
\boxed{
\Omega
\rightarrow T_0
\rightarrow T_{0.5}
\rightarrow K
\rightarrow\mathfrak F_K
\rightarrow T_1,
}
\tag{17.2}
\]

with every arrow in (17.2) now resolved by the typed construction above.

### 18. Stage types and interface contract

The construction uses the following categories.  They fix the type of
every load-bearing arrow and are inherited by all later chapters:

\[
\begin{aligned}
\mathsf{Src}_0
&=\operatorname{Mod}_{\mathbf U}(\Sigma_\Omega),\\
\mathsf{Src}_{\rm adm}
&\subset\mathsf{Src}_0,\\
\mathsf{Real}_0
&=\int_{X\in\mathsf{Src}_{\rm adm}}
  \operatorname{RealPrep}_\Omega[X],\\
\mathsf{Seed}_{1/2}
&=\{(\mathcal H,q,K,\mathcal I,\mathsf{Trace},
\operatorname{Cert}_0,\operatorname{Reg}^{\rm pre}):
q\text{ closed, densely defined and nonnegative},\
K=\operatorname{Fr}(q)\},\\
\mathsf{Spine}_{1/2}^{a}
&=\{(\mathcal H^a,q^a,K^a,E^a,\nu^a,
\mathcal W^a,J^a,\tau^a,\mathcal R^a,h^a,\gamma_a,
\mathsf{CarrierRoute}^a)\},\\
\mathsf{Emit}_{1/2}^{a}
&=\mathsf{Spine}_{1/2}^{a}\sqcup
\mathsf{Eff}_{1/2}^{a}\sqcup
\mathsf{Res}_{1/2}^{a}\sqcup\{\varnothing_{\rm carr}\},\\
\mathsf{Fld}_{1/2}^{a}
&=\{\mathfrak F_{K^a,h^a,\gamma_a}\},\\
\mathsf P_s
&=\{\text{solutions of the typed Tier-1 sector }s\},\\
\mathsf{Comp}_1
&=\operatorname{Eq}^{\rm coh}(\Delta_L,\Delta_R).
\end{aligned}
\tag{18.1}
\]

A morphism of seeds is a tuple
\((U,\iota_{\mathcal I},\iota_{\rm Tr})\), where
\(U:\mathcal H\to\mathcal H'\) is an isometry that transports the form
and operator and the remaining maps transport the categorical
invariant and trace-lineage data,

\[
q'[U\psi,U\phi]=q[\psi,\phi],
\qquad
UK\subseteq K'U,
\qquad
\iota_{\mathcal I}:\mathcal I\to\mathcal I',
\qquad
\iota_{\rm Tr}:\mathsf{Trace}\to\mathsf{Trace}'.
\tag{18.2}
\]

A morphism of spines additionally intertwines the spectral calculus,

\[
UE_K(B)=E_{K'}(B)U,
\quad
Uh(K)=h'(K')U,
\quad
U\mathcal WU^*\subseteq\mathcal W',
\tag{18.3}
\]

and preserves whichever trace ideal is declared.  Unitary spine
isomorphisms preserve every field response, budget and later quantum
probability.  The typed descent is therefore

\[
\boxed{
\begin{aligned}
\operatorname{RealPrep}_\Omega&:
\mathsf{Src}_{\rm adm}\to\mathsf{Cat}_{\mathbf V},\\
\operatorname{SeedPrep}_\Omega&:
\mathsf{Real}_0^{\rm dir}\dashrightarrow\mathsf{Seed}_{1/2},\\
\mathcal A_{1/2}^{a}&:
\mathsf{Seed}_{1/2}\dashrightarrow\mathsf{Emit}_{1/2}^{a},\\
\mathfrak F^{a}&:
\mathsf{Spine}_{1/2}^{a,\mathsf{CSCF}}\to\mathsf{Fld}_{1/2}^{a},\\
\operatorname{Rep}_{s}^{a}&:
\mathsf{Fld}_{1/2}^{a}\dashrightarrow\mathsf O_s^{\rm raw},\\
\Gamma_{\rm comp}&:
\prod_s\mathsf P_s\dashrightarrow\mathsf{Comp}_1.
\end{aligned}}
\tag{18.4}
\]

Here \(\mathsf{Real}_0^{\rm dir}\) contains both finite prepared
supports and compatible directed preparation systems.  Dashed arrows
are partial: their domains are specified by closedness, covariance,
trace, anomaly, boundary and compatibility conditions, not by an
informal success label.

#### 18.1 Regularity and covariance

For each face \(a\), its regularity record is

\[
\operatorname{Reg}^a
=
(\mathfrak X^a,D(q^a),D(K^a),\mathscr C_h^a,
\mathfrak S_{\tau}^a,\mathfrak B_{\partial}^a),
\tag{18.5}
\]

where \(\mathfrak X^a\) is the realization class, \(\mathscr C_h^a\)
the admitted symbol class, \(\mathfrak S_\tau^a\) the trace/determinant
ideal and \(\mathfrak B_\partial^a\) the selfadjoint boundary class.
Every operation in (18.4) is required to preserve (18.5) or to return a
typed residue.  In particular, a geometric representation
\(r:(\mathcal H,K)\to(E\to M,K_r)\) is covariant when for every
admissible redescription \(\chi\),

\[
r_{\chi\cdot g}(UKU^*)
=U_r\,r_g(K)\,U_r^{-1},
\qquad
\operatorname{Rep}_{s}(UKU^*)
=\chi_*\operatorname{Rep}_{s}(K).
\tag{18.6}
\]

Equation (18.6) is the common source of basis covariance, gauge
covariance and diffeomorphism covariance.  A transformation that does
not satisfy it is a physical deformation, not a redescription.

#### 18.2 Dimension and evolution parameter

Tier-1 continuum equations use \(c=k_B=1\).  The factor \(\hbar\) is
also set to one in operator evolution and effective actions unless it is
displayed explicitly to mark a semiclassical limit, Hawking temperature
or gravitational entropy.  Restoring units means applying the dimensional
character (13.1)--(13.3), not changing any source or aperture relation.

Before dimensional calibration the carrier parameter is denoted
\(\theta\in\mathbb R\), and \(K,h(K),\gamma\) are dimensionless.  A
face scale \(\omega_Y>0\) induces

\[
t=\theta/\omega_Y,
\qquad
K_{\rm phys}=\omega_YK,
\qquad
C_{\rm phys}=\omega_Yh(K),
\qquad
\gamma_{\rm phys}=\gamma .
\tag{18.7}
\]

The symbol \(t\) in the field formulas is the Tier-1 image of
\(\theta\).  Temporal orientation is not assumed by the semigroup
parameter; it is selected only when the objective archive admits the
time embedding of Chapter 9.  Dimensional covariance of every
equation is the homogeneity condition

\[
\operatorname{Dim}_Y(F(x_1,\ldots,x_n))
=\prod_j\operatorname{Dim}_Y(x_j)^{p_j}
\tag{18.8}
\]

for every monomial of the same sum, with the exponents fixed before a
branch is evaluated.

#### 18.3 Source-to-observable lineage

For a Tier-1 observable \(O\) on sector \(s\), its atlas path is the
composite relation

\[
\boxed{
\mathcal P_O:
(X,m)
\longmapsto Y
\longmapsto\operatorname{Emit}^a(Y)
\xmapsto{\ \mathsf{CSCFEligible}\ }\mathfrak S_Y^a
\longmapsto\mathfrak F_{K_Y^a,h_Y^a,\gamma_a}
\longmapsto p_s
\longmapsto z_*\in\mathsf{Comp}_1
\longmapsto O(z_*).
}
\tag{18.9}
\]

For an effective-response or obstruction observable, the middle leg
of (18.9) remains in its corresponding emission summand and uses that
summand's sector map; the CSCF field leg is then absent rather than
fabricated.

Its reverse inspection path is the homotopy fibre

\[
\operatorname{TraceBack}(O=o)
=\operatorname{hofib}_o(\mathcal P_O).
\tag{18.10}
\]

Thus every visible equation or observable in the final atlas has a
declared incoming map, outgoing map, regularity class, dimensional
type and residual source fibre.  This is the definitive interface
contract for the remaining construction.
