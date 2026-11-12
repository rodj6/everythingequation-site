# The Foundations of General Relativity: A Source–Readout Reconstruction of Einstein’s 1916 Theory

Calibrated measurements recover geometry. Compatible comparison recovers curvature. The same realization carries gravity, matter and the observations that test them. Follow the full source–readout reconstruction of Einstein’s 1916 theory.

Jeremy Rodgers · 2026-11-09

DOI: https://doi.org/10.5281/zenodo.24064553



## Recover the complete gravitational chain

**Shadow Theory makes the path from local measurements to gravitational dynamics explicit. This edition follows the full construction: the supporting preparation, the geometric and matter realization, the readouts, and the operations that connect them.**

<a id="sec-intro"></a>

## 1. Introduction

Einstein’s 1916 article develops a connected argument: local measurements determine a metric, tensor operations make the laws covariant, curvature enters the field equation, the same geometry governs material processes, and controlled approximations connect the theory to measurements [\[5\]](/source-readout/einstein-1916/25-references#ref-5). Reconstructing that argument requires more than a correspondence between two final field equations. Differentiation, variation, contraction, boundary integration and limiting operations must act on compatible objects, and information discarded by an intermediate representation must not be needed by a later step.

This article constructs such a reconstruction in the source–readout architecture of Shadow Theory [\[10\]](/source-readout/einstein-1916/25-references#ref-10). The architecture distinguishes an admitted native support, its literal preparation, a raw physical realization over that preparation, and the outputs of specified readout operations. A raw realization may fail the field or compatibility equations. Those failures are retained as residuals until the relevant physical premise is imposed. We apply this organization to the complete mathematical sequence of Einstein’s article, rather than identifying source admission with the set of successful gravitational solutions.

The principal variable is a local linear calibration $E$, converting coordinate tangent components into locally measured components. The metric is its quadratic readout. A comparison connection constructed from $E$ recovers differentiation, and its curvature recovers the nonlinear Riemann tensor. Source and target variations are related by explicit tangent lifts. Matter is constructed on this same realization, first as a symmetric stress, then from fluid or electromagnetic primitives. The final section of the original paper is recovered with its weak-field, slow-motion, static-observer and asymptotic qualifications. The perihelion calculation, which the original cites rather than supplies in full, is completed through a labelled static spherical exterior and the cited orbit polynomial [\[4\]](/source-readout/einstein-1916/25-references#ref-4), [\[12\]](/source-readout/einstein-1916/25-references#ref-12).

The mathematical ingredients are not claimed as new inventions. Coframes, metric-compatible connections and equivalence between gravitational formulations are established subjects [\[9\]](/source-readout/einstein-1916/25-references#ref-9), [\[2\]](/source-readout/einstein-1916/25-references#ref-2). Our construction uses a dependent comparison connection $\omega(E)$, not an independently varied Palatini connection. Its contribution is a single, explicit source–readout realization of the historical derivation, with reverse coverage, preserved operations, complete residuals, counterexamples to invalid reductions, and an equation-by-equation verification record. In particular, local metric equivalence is not promoted to equivalence of arbitrary boundary charges. Such questions require their own variational data [\[3\]](/source-readout/einstein-1916/25-references#ref-3), [\[8\]](/source-readout/einstein-1916/25-references#ref-8), [\[1\]](/source-readout/einstein-1916/25-references#ref-1).

The result is conditional on Einstein’s physical starting premises. The four-dimensional smooth event manifold, Lorentzian local interval law, compatible torsion-free comparison, gravitational coupling, constitutive matter laws and observational protocols are inputs at the realization layer. Their mathematical consequences and interrelations are reconstructed. They are not selected by a two-vertex native support. Conversely, this conditional status does not reduce the construction to a comparison on one example: explicit sections cover every local object and solution in the stated target classes.

<a id="organization-and-source-fidelity"></a>

### Organization and source fidelity

Sections [2](/source-readout/einstein-1916/02-source-and-recovery#sec-architecture)–[6](/source-readout/einstein-1916/06-curvature-and-variations#sec-curvature) reconstruct Parts A and B. Sections [7](/source-readout/einstein-1916/07-vacuum-and-action#sec-vacuum)–[10](/source-readout/einstein-1916/10-conservation-and-flux#sec-conservation) treat Part C, including the order of variation and volume specialization. Sections [11](/source-readout/einstein-1916/11-fluids#sec-fluid)–[12](/source-readout/einstein-1916/12-electromagnetism#sec-em) reconstruct Part D. Sections [13](/source-readout/einstein-1916/13-newtonian-limit#sec-newton)–[17](/source-readout/einstein-1916/17-perihelion#sec-orbit) recover Part E and its stated external dependency. Section [18](/source-readout/einstein-1916/18-cumulative-recovery#sec-recovery) assembles the local recovery theorem. The appendices provide the source qualifications, complete correspondence register and assumption inventory.

Equation labels such as Einstein <span className="upright">(53)</span> refer to the original numbering; the present paper uses section-based numbering. The supplied scan is the authority for printed forms. Several of its expressions cannot simultaneously hold with their surrounding equations. Each such case is separated into a literal transcription and an equation-consistent reconstruction in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source). This is a mathematical consistency audit of that copy, not a claim to discover an unknown historical erratum or to resolve the history of editions.



## What source–readout recovery requires

**A source support, a realized physical sector and an observable output play different roles. Here are the exact maps and the composition result that let the subsequent derivation pass through those layers.**

<a id="sec-architecture"></a>

## 2. Source architecture and the reconstruction problem

<a id="an-admitted-support-and-its-literal-preparation"></a>

### An admitted support and its literal preparation

The native source language in [\[10\]](/source-readout/einstein-1916/25-references#ref-10) (Chs. 2–3) consists of a dependency preorder, marked deposition-potential tokens with nonempty finite support, inherited lineage, invariant data and intrinsic boundary data. A marked support contains a strict pair: $a\preceq b$ and not $b\preceq a$. Strong comparisons preserve this structure and are injective on marked supports. The admitted class is the least isomorphism-saturated closure of the specified initial witnesses under the allowed strong images, finite attachments, presentation-preserving retracts and stabilizing directed colimits. No spacetime coordinate, metric, action or desired physical outcome is a primitive native label.

Only one initial witness is needed here. Let <a id="eq-2-1"></a><a id="eq-native"></a>

$$
X_\star=(\{0,1\},0\prec1,\{m_\star\},\operatorname{Supp}(m_\star)=\{0,1\},
 \ell_\star,\operatorname{Inv}_\star,\varnothing).
\tag{2.1}
$$

 Its lineage and invariant data are those of the walking marked dependency in the initial witness class. Hence it is admitted without any new attachment or physical test. Its literal preparation is <a id="eq-2-2"></a><a id="eq-preparation"></a>

$$
Y_\star=J_{\rm real}(X_\star,m_\star)
 =(X_\star,m_\star,\{0,1\},\preceq_\star,\ell_\star,
 \operatorname{Inv}_\star,\varnothing).
\tag{2.2}
$$

 The two vertices are not physical spacetime events, and their order is not the time coordinate. This admission argument uses only membership in the initial class; it does not require a claim about arbitrary source graphs.

A sector relation has the type <a id="eq-2-3"></a><a id="eq-sector"></a>

$$
\mathscr K_s(Y_\star)\subseteq\mathsf O_s^{\rm raw}\times\mathsf D_s,\qquad
 y_s=(z_s,\delta_s)\in\mathscr K_s(Y_\star),
\tag{2.3}
$$

 where $z_s$ is a realization and $\delta_s$ its discrepancy data. For interfaces, differences $d_e(L_ez_s,R_ez_t)$ are evaluated in a specified common space. The common witness retains the same $Y_\star$, calibration, laws, units, preparation and boundary convention. A product of successful but incompatible sector solutions is not a common witness.

For this application the geometric realization supplies a smooth four-manifold $M$, local coordinate patches, a Lorentzian measurement space, invertible calibrations, comparison connections, tensor fields, curves and boundaries. Fluid variables, potentials and currents are added when needed. The raw domain retains nonzero torsion, nonmetricity, field, normalization and interface residuals. These data are supplied over [(2.2)](/source-readout/einstein-1916/02-source-and-recovery#eq-preparation); no construction in this paper claims to generate the continuum or the action from that finite tuple alone.

<a id="what-recovery-means"></a>

### What recovery means

Let $Q$ denote a declared target domain, $Z$ a realization domain, and $\pi:Z\to Q$ a readout. For a target operation $O$, an operation lift $O_Z$ must satisfy <a id="eq-2-4"></a><a id="eq-intertwiner"></a>

$$
\pi_{\rm out}O_Z(z,u)=O(\pi_{\rm in}z,u)
\tag{2.4}
$$

 on its actual domain and with the same auxiliary inputs $u$. When exact equality requires a condition, the complete defect is displayed before setting that condition to zero. A reverse section $\iota$ satisfies $\pi\iota=\mathrm{id}$ on the specified local target class. It need not satisfy $\iota\pi=\mathrm{id}$ on raw presentations.

<a id="thm-composition"></a>

### Lemma 2.1 (Composition and legitimate information loss)

Suppose a finite derivation is a directed acyclic sequence of operations satisfying [(2.4)](/source-readout/einstein-1916/02-source-and-recovery#eq-intertwiner), with the hypotheses and target objects needed at every step covered by their source preimages. Then each composite operation in that derivation is recovered. A coarser readout $q:Z\to B$ supports a required output $f:Z\to C$ exactly when $f$ is constant on the fibres of $q$, restricted to $\operatorname{im}q$. For future operations this fibre relation must also be a congruence for those operations.

<a id="proof-thm-composition"></a>

### Proof.

Order the finite dependency graph so every input precedes its consumer. Substitution of [(2.4)](/source-readout/einstein-1916/02-source-and-recovery#eq-intertwiner) at each node proves the composite identity inductively. If $f=\bar f\circ q$, equal $q$ values give equal $f$ values. Conversely define $\bar f(qz)=f(z)$; fibre constancy makes this definition independent of the preimage. An operation descends only if applying it to equal-readout states with the same allowed inputs again gives equal required readouts. No continuity, convergence or differential regularity follows from this set-level argument; those properties are established separately below.

$\square$

For an action, matching values is insufficient. We require coverage of admitted test variations and retain the boundary functional. For a nonlinear field equation we prove a correspondence of local solution sets, not a general initial-value uniqueness theorem. For an approximation we state the topology controlling differentiated remainders or the exact integral and its remainder bound. These distinctions determine the scope of the final theorem.

<a id="sec-conventions"></a>

### Conventions

Throughout, <a id="eq-2-5"></a><a id="eq-conventions"></a>

$$
\eta=\operatorname{diag}(-1,-1,-1,+1),\qquad x^4=t,\qquad c=1,
 \qquad q=g^{-1},\qquad \nu=\sqrt{-\det g}.
\tag{2.5}
$$

 Greek indices are coordinate slots; Latin indices are calibrated slots. $C^\rho{}_{\mu\nu}$ denotes the Christoffel connection, with the first lower slot the differentiation direction. Einstein’s later field symbol has the opposite sign: <a id="eq-2-6"></a><a id="eq-signs"></a>

$$
\Gamma_{\!\mathrm E}^\rho{}_{\mu\nu}=-C^\rho{}_{\mu\nu},\qquad
 R^\rho{}_{\sigma\mu\nu}=
 \partial_\mu C^\rho{}_{\nu\sigma}-\partial_\nu C^\rho{}_{\mu\sigma}
 +C^\rho{}_{\mu\lambda}C^\lambda{}_{\nu\sigma}
 -C^\rho{}_{\nu\lambda}C^\lambda{}_{\mu\sigma},
\tag{2.6}
$$

 <a id="eq-2-7"></a><a id="eq-ricci-sign"></a>

$$
\operatorname{Ric}_{\mu\nu}=R^\rho{}_{\mu\rho\nu},\qquad
 B_{\mu\nu}^{\rm Einstein}=-\operatorname{Ric}_{\mu\nu}.
\tag{2.7}
$$

 Gravitational comparison curvature is $\mathcal F$; electromagnetic field is $\mathsf F$, with calibrated components $f$. The inverse calibration is always $E^{-1}$. All general statements use smooth fields on nondegenerate patches. Absolute determinant gives a density; orientation is chosen separately for signed integrals. Time orientation, when needed for observers, is likewise separate. The constants and observer data are not changed between joined readouts.



## Intervals determine the metric

**A calibration turns coordinate directions into measured components. Its quadratic readout recovers every local Lorentz metric, and its complete fibre identifies precisely the frame freedom left unresolved.**

<a id="sec-metric"></a>

## 3. Local measurements and metric recovery

Einstein’s Part A motivates a generally covariant description through local rods and clocks, universal free fall and the invariance of event coincidences. His Machian discussion is motivation, not a theorem establishing that distant matter determines every inertial property. The mathematical starting premise in §4 is local special relativity: the measured infinitesimal interval has form $\eta$, and local measured differentials depend linearly on general coordinate differentials. We inherit that premise and make its representation explicit.

On a patch $U\subset M$, let $E_p:T_pU\to\mathbb R^{3,1}$ be a smooth linear isomorphism. Set <a id="eq-3-1"></a><a id="eq-calibration"></a>

$$
\theta^a=E^a{}_{\mu}\mathrm{d}x^\mu,\qquad
 Q_E(p,v)=\eta(E_pv,E_pv),\qquad g=\pi(E)=E^{\mathsf T}\eta E.
\tag{3.1}
$$

 Polarization gives $g(u,v)=[Q_E(u+v)-Q_E(u)-Q_E(v)]/2$. Symmetry and nondegeneracy follow immediately, and the invertible change $v\mapsto Ev$ proves the signature. In particular, <a id="eq-3-2"></a><a id="eq-metricdet"></a>

$$
\det g=-(\det E)^2<0,\qquad
 q=E^{-1}\eta^{-1}E^{-\mathsf T},\qquad \nu=|\det E|.
\tag{3.2}
$$

 Negativity of the determinant alone would not identify the chosen inertia. Equations [(3.1)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-calibration)–[(3.2)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-metricdet) recover Einstein <span className="upright">(1)</span>–Einstein <span className="upright">(4)</span>; $E=I$ gives the special-relativistic coordinate case. The one-forms $\theta^a$ need not be simultaneously exact on an open region.

At one event the ten independent metric components are recovered from four diagonal and six pair evaluations: <a id="eq-3-3"></a><a id="eq-polarization"></a>

$$
g_{\mu\mu}=Q_E(\partial_\mu),\qquad
 g_{\mu\nu}=\frac{Q_E(\partial_\mu+\partial_\nu)-Q_E(\partial_\mu)-Q_E(\partial_\nu)}2
 \quad(\mu<\nu).
\tag{3.3}
$$

 This is algebraic coverage of a mathematical readout, not a claim that a laboratory protocol implementing these ten probes has been supplied.

<a id="thm-metric"></a>

### Theorem 3.1 (Local section and complete frame fibre)

Every smooth Lorentz metric of signature [(2.5)](/source-readout/einstein-1916/02-source-and-recovery#eq-conventions) has local calibration preimages. At fixed event coordinates two calibrations $E,\widetilde E$ have the same metric exactly when <a id="eq-3-4"></a><a id="eq-lorentz-fibre"></a>

$$
\widetilde E=\Lambda E,\qquad \Lambda^{\mathsf T}\eta\Lambda=\eta.
\tag{3.4}
$$

 Thus the fibre is precisely the smooth local $O(3,1)$ frame orbit. This is not a quotient by coordinate transformations or a uniqueness theorem for the native source.

<a id="proof-thm-metric"></a>

### Proof.

Choose a sufficiently small chart whose fourth coordinate vector is timelike, and write <a id="eq-3-5"></a><a id="eq-metric-section"></a>

$$
g=\begin{pmatrix} C&b\\b^{\mathsf T}&a\end{pmatrix},\quad a>0,
 \qquad S=\frac{bb^{\mathsf T}}a-C,\quad R^{\mathsf T}R=S,
 \qquad
 \iota(g)=\begin{pmatrix}R&0\\b^{\mathsf T}/\sqrt a&\sqrt a\end{pmatrix}.
\tag{3.5}
$$

 Completion of squares shows $S$ is positive definite: $a$ accounts for the sole positive direction of $g$. Its upper triangular Cholesky factor $R$ with positive diagonal is smooth. Explicitly $R_{11}=\sqrt{S_{11}}$, $R_{1j}=S_{1j}/R_{11}$, $R_{22}=\sqrt{S_{22}-R_{12}^2}$, $R_{23}=(S_{23}-R_{12}R_{13})/R_{22}$ and $R_{33}=\sqrt{S_{33}-R_{13}^2-R_{23}^2}$. All radicands are positive. Multiplication yields $\iota(g)^{\mathsf T}\eta\iota(g)=g$. Every Lorentz metric admits a timelike coordinate direction near any point, so this covers every target locally, not just metrics already in this chart form.

If the two metric readouts agree, put $\Lambda=\widetilde E E^{-1}$. Then $\Lambda^{\mathsf T}\eta\Lambda=E^{-\mathsf T}\widetilde E^{\mathsf T}\eta\widetilde E E^{-1}=\eta$. Conversely [(3.4)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-lorentz-fibre) preserves $g$. Smoothness follows from smooth matrix inversion. Generally $\iota\pi(E)\ne E$, but it is frame equivalent to $E$.

$\square$

<a id="variations-coordinate-changes-and-compatible-patches"></a>

### Variations, coordinate changes and compatible patches

For an arbitrary calibration variation $H$, <a id="eq-3-6"></a><a id="eq-metric-variation"></a>

$$
D\pi_E[H]=H^{\mathsf T}\eta E+E^{\mathsf T}\eta H,
 \qquad H=\tfrac12E qh\quad\Longrightarrow\quad D\pi_E[H]=h
\tag{3.6}
$$

 for every symmetric metric variation $h$. The kernel consists of $H=AE$ with $A^{\mathsf T}\eta+\eta A=0$, as follows by multiplying $D\pi_E[H]=0$ by $E^{-\mathsf T}$ and $E^{-1}$. Compact support is preserved, and sufficiently small compactly supported variations preserve invertibility. Six vertical frame directions account for the difference between sixteen calibration components and ten metric components; this is not a count of propagating gravitational degrees of freedom.

For $x=x(y)$, let $J=\partial x/\partial y$. Coordinate and frame operations obey <a id="eq-3-7"></a><a id="eq-coordinate-metric"></a>

$$
E_y=E_xJ,\qquad g_y=J^{\mathsf T}g_xJ,\qquad
 Q_{E_y}(v_y)=Q_{E_x}(Jv_y),\qquad E'=\Lambda E.
\tag{3.7}
$$

 Jacobians compose in chain-rule order. Coordinate injectivity preserves event coincidences. Left frame multiplication and right coordinate multiplication commute with the necessary pullback of their coefficient fields, but are conceptually different operations.

On an atlas retain independent $E_i$ and overlap comparisons $L_{ji}$. Their raw discrepancies include <a id="eq-3-8"></a><a id="eq-overlap-defects"></a>

$$
E_j-L_{ji}E_iJ_{ij},\qquad L_{ji}^{\mathsf T}\eta L_{ji}-\eta,
 \qquad L_{ki}-L_{kj}L_{ji},
 \quad J_{ij}=\frac{\partial x_i}{\partial x_j}.
\tag{3.8}
$$

 All values refer to the same event, and reciprocal and identity transition rules are retained. Zero discrepancies give a smooth metric by [(3.7)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-coordinate-metric). Conversely local sections of any smooth global Lorentz metric induce $L_{ji}=E_j(E_iJ_{ij})^{-1}$. Theorem [3.1](/source-readout/einstein-1916/03-calibrated-spacetime#thm-metric) makes these matrices Lorentz; the Jacobian chain rule proves their cocycle identity. This supplies atlas coverage without requiring a global coframe or a trivial frame bundle.

<a id="what-a-coarser-readout-would-lose"></a>

### What a coarser readout would lose

The same event and null-direction records can fail to determine calibrated intervals. On one event domain take $E_1=I$ and $E_2=\Omega I$, $\Omega=1+(x^1)^2$. The null sets agree, but <a id="eq-3-9"></a><a id="eq-conformal-control"></a>

$$
Q_{E_2}=\Omega^2Q_{E_1},\qquad Q_{E_1}(\partial_4)=1,
 \qquad Q_{E_2}(\partial_4)=\Omega^2.
\tag{3.9}
$$

 Fixed units prevent erasing this nonconstant difference by one unit conversion. Einstein’s measurement coincidences include rods and clock readings; they must not be reduced to an uncalibrated equality relation on events.

At the other extreme, demanding $\theta^a=\mathrm{d}X^a$ simultaneously throughout a neighborhood gives, by invertibility, coordinates $X$ with $g=\eta_{ab}\mathrm{d}X^a\mathrm{d}X^b$. This restricts the geometry to local flatness. Nonclosed calibration forms, however, do not themselves prove curvature.

For an explicit flat counterexample, set $N=1+ax>0$, $a\ne0$, and $E=\operatorname{diag}(1,1,1,N)$. The transformation <a id="eq-3-10"></a><a id="eq-rindler"></a>

$$
X=(x+a^{-1})\cosh(at)-a^{-1},\qquad
 T=(x+a^{-1})\sinh(at)
\tag{3.10}
$$

 gives $-\mathrm{d}X^2+\mathrm{d}T^2=-\mathrm{d}x^2+N^2\mathrm{d}t^2$. The same interval readout gives $\mathrm{d}\tau=N\mathrm{d}t$ for stationary clocks and $\mathrm{d}x/\mathrm{d}t=\pm N$ for coordinate light speeds, while the local calibrated speed is one. Yet $\mathrm{d}\theta^4=a\mathrm{d}x\wedge\mathrm{d}t\ne0$. Connection and curvature, rather than this frame-dependent nonclosure alone, are needed to distinguish genuine curvature.

<a id="the-rotating-measurement-example"></a>

### The rotating measurement example

Einstein’s rotating-clock and rod argument in §3 is recovered by <a id="eq-3-11"></a><a id="eq-rotation"></a>

$$
(\theta^1,\theta^2,\theta^3,\theta^4)
 =(\mathrm{d}r,r(\mathrm{d}\varphi+\Omega\mathrm{d}t),\mathrm{d}z,\mathrm{d}t),
\tag{3.11}
$$

 whose metric is <a id="eq-3-12"></a><a id="eq-rotmetric"></a>

$$
\mathrm{d}s^2=(1-\Omega^2r^2)\mathrm{d}t^2-2\Omega r^2\mathrm{d}\varphi\mathrm{d}t
 -\mathrm{d}r^2-r^2\mathrm{d}\varphi^2-\mathrm{d}z^2.
\tag{3.12}
$$

 The Cartesian map $X=r\cos(\varphi+\Omega t)$, $Y=r\sin(\varphi+\Omega t)$, $Z=z$, $T=t$ independently produces this metric. At fixed rotating spatial coordinates and $|\Omega r|<1$, $\mathrm{d}\tau=\sqrt{1-\Omega^2r^2}\mathrm{d}t$. For a local rest-space rod, orthogonality to that observer gives $g_{44}\mathrm{d}t+g_{4i}\mathrm{d}x^i=0$. Only after retaining the mixed term may one eliminate $\mathrm{d}t$, obtaining <a id="eq-3-13"></a><a id="eq-rotrest"></a>

$$
\mathrm{d}\ell^2=\left(-g_{ij}+\frac{g_{i4}g_{j4}}{g_{44}}\right)\mathrm{d}x^i\mathrm{d}x^j
 =\mathrm{d}r^2+\mathrm{d}z^2+\frac{r^2}{1-\Omega^2r^2}\mathrm{d}\varphi^2.
\tag{3.13}
$$

 Thus $C(R)=2\pi R/\sqrt{1-\Omega^2R^2}$ and $D(R)=2R$, giving $C/D>\pi$ for a nonzero subluminal rim speed. This is a sum of infinitesimal comoving rod comparisons, not a globally synchronized rotating hypersurface. The center uses a Cartesian patch; the polar frame is not assumed nonsingular at $r=0$.



## Comparison recovers covariant differentiation

**Tensor slots can be read out reversibly. Differentiation needs more: a compatible comparison rule. Its construction recovers the full metric connection while keeping raw torsion and nonmetricity visible.**

<a id="sec-calculus"></a>

## 4. Tensor operations and compatible comparison

<a id="tensor-readouts-and-their-inverses"></a>

### Tensor readouts and their inverses

For a calibrated tensor $U$ of type $(r,s)$ define <a id="eq-4-1"></a><a id="eq-tensor-map"></a>

$$
(\Pi_EU)^{\mu_1\cdots\mu_r}{}_{\nu_1\cdots\nu_s}
 =(E^{-1})^{\mu_1}{}_{a_1}\cdots(E^{-1})^{\mu_r}{}_{a_r}
 E^{b_1}{}_{\nu_1}\cdots E^{b_s}{}_{\nu_s}
 U^{a_1\cdots a_r}{}_{b_1\cdots b_s}.
\tag{4.1}
$$

 Its inverse inserts $E$ in every upper coordinate slot and $E^{-1}$ in every lower coordinate slot. In particular $v=E^{-1}u$ and $\alpha=E^{\mathsf T}a$ for calibrated vector $u$ and covector $a$.

<a id="thm-tensor"></a>

### Proposition 4.1 (Tensor-algebra recovery)

The maps [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map) are smooth fibrewise linear isomorphisms. They preserve sums, products, index permutations, symmetrization, antisymmetrization and contraction. Raising or lowering with $\eta$ before readout agrees with raising or lowering with $g$ afterward.

<a id="proof-thm-tensor"></a>

### Proof.

Inverse factors cancel in each slot. A product adds slots, a permutation reorders factors, and a contraction cancels one $E$ with one $E^{-1}$. For the metric operations, $gE^{-1}u=E^{\mathsf T}\eta u$ and $qE^{\mathsf T}a=E^{-1}\eta^{-1}a$. Tensor products extend these identities to all ranks. Every tensor is a finite sum of elementary tensor products in a local basis, so the proof is not restricted to decomposable tensors.

$\square$

This recovers the transformations and algebra in Einstein <span className="upright">(5)</span>–Einstein <span className="upright">(17)</span>. The invariant-pairing test for tensor character follows from nondegeneracy of evaluation on arbitrary basis tuples. For symmetric bilinear arrays, polarization permits diagonal probes; without symmetry they miss the antisymmetric part. Completely antisymmetric tensors in four dimensions have dimensions $\binom4k$, in particular $6,4,1$ at ranks $2,3,4$, and vanish above rank four. Symmetric tensors do not have that cutoff; the printed qualification is discussed in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source).

The volume density transforms as $\nu_y=|\det J|\nu_x$, so $\nu|\mathrm{d}^4x|$ is invariant. This recovers Einstein <span className="upright">(18)</span> and Einstein <span className="upright">(18a)</span> without assuming an orientation. Signed integration uses an orientation chosen in addition.

<a id="why-a-comparison-connection-is-necessary"></a>

### Why a comparison connection is necessary

An arbitrary matrix-valued one-form $\omega$ defines <a id="eq-4-2"></a><a id="eq-raw-D"></a>

$$
D_\mu u=\partial_\mu u+\omega_\mu u,\qquad
 D_\mu a=\partial_\mu a-\omega_\mu^{\mathsf T}a.
\tag{4.2}
$$

 The product rule and contraction extend it to tensors. Since $u'=\Lambda u$, ordinary differentiation produces the unwanted term $(\mathrm{d}\Lambda)u$. Requiring $D'(\Lambda u)=\Lambda Du$ for every $u$ forces <a id="eq-4-3"></a><a id="eq-omega-transform"></a>

$$
\omega'=\Lambda\omega\Lambda^{-1}-\mathrm{d}\Lambda\Lambda^{-1}.
\tag{4.3}
$$

 The raw discrepancies are <a id="eq-4-4"></a><a id="eq-MT"></a>

$$
M_\mu=\omega_\mu^{\mathsf T}\eta+\eta\omega_\mu,
 \qquad \Theta^a=\mathrm{d}\theta^a+\omega^a{}_b\wedge\theta^b.
\tag{4.4}
$$

 They transform as $M'=\Lambda^{-\mathsf T}M\Lambda^{-1}$ and $\Theta'=\Lambda\Theta$. Their zero sector preserves the interval pairing and is torsion-free. This is the realization law corresponding to Einstein’s metric differential calculus, not a consequence of native admission.

Let $e_b=(E^{-1})^\mu{}_b\partial_\mu$ and define structure coefficients by <a id="eq-4-5"></a><a id="eq-structure"></a>

$$
\mathrm{d}\theta^a=-\tfrac12c^a{}_{bc}\theta^b\wedge\theta^c,
 \qquad
 c^a{}_{bc}=-(E^{-1})^\mu{}_b(E^{-1})^\nu{}_c
 (\partial_\mu E^a{}_{\nu}-\partial_\nu E^a{}_{\mu}).
\tag{4.5}
$$

 Lower the first index with $\eta$, and write $\omega^a{}_b=\omega^a{}_{bc}\theta^c$.

<a id="thm-omega"></a>

### Theorem 4.2 (Unique compatible comparison)

For every smooth invertible calibration, the unique connection with $M=0$ and $\Theta=0$ is <a id="eq-4-6"></a><a id="eq-omega-formula"></a>

$$
\boxed{\omega_{abc}=\tfrac12(c_{cab}-c_{abc}-c_{bca}),\qquad
 \omega^a{}_{bc}=\eta^{ad}\omega_{dbc}.}
\tag{4.6}
$$

 The last index is the differentiating frame direction.

<a id="proof-thm-omega"></a>

### Proof.

Antisymmetry of the final two $c$ indices gives $\omega_{abc}=-\omega_{bac}$ and $\omega_{acb}-\omega_{abc}=c_{abc}$. These are respectively $M=0$ and $\Theta=0$, because $\Theta^a(e_b,e_c)=-c^a{}_{bc}+\omega^a{}_{cb}-\omega^a{}_{bc}$. The difference $K$ of two solutions is antisymmetric in its first two indices and symmetric in its last two. Thus 

$$
K_{abc}=K_{acb}=-K_{cab}=-K_{cba}=K_{bca}=K_{bac}=-K_{abc},
$$

 so $K=0$. The displayed formula uses only $E,E^{-1}$ and first derivatives, and is smooth on the declared domain.

$\square$

<a id="connection-readout-and-complete-defects"></a>

### Connection readout and complete defects

For arbitrary raw $\omega$, define <a id="eq-4-7"></a><a id="eq-C-map"></a>

$$
C_\mu=E^{-1}(\partial_\mu E+\omega_\mu E),\qquad
 \omega_\mu=EC_\mu E^{-1}-(\partial_\mu E)E^{-1}.
\tag{4.7}
$$

 Direct substitution, without imposing compatibility, gives <a id="eq-4-8"></a><a id="eq-4-9"></a><a id="eq-nonmetricity"></a><a id="eq-torsion"></a>

$$
\begin{aligned}
 \nabla^C_\mu g&=\partial_\mu g-C_\mu^{\mathsf T}g-gC_\mu
 =-E^{\mathsf T}M_\mu E,&&\text{(4.8)}\\
 C^\rho{}_{\mu\nu}-C^\rho{}_{\nu\mu}
 &=(E^{-1})^\rho{}_a\Theta^a{}_{\mu\nu}.
&&\text{(4.9)}\end{aligned}
$$

 The two zero conditions are therefore equivalent to metric compatibility and lower-index symmetry of $C$. Writing metric compatibility for three cyclic placements of indices, adding two equations and subtracting the third, yields <a id="eq-4-10"></a><a id="eq-christoffel"></a>

$$
\boxed{C^\rho{}_{\mu\nu}=\tfrac12q^{\rho\lambda}
 (\partial_\mu g_{\lambda\nu}+\partial_\nu g_{\lambda\mu}
 -\partial_\lambda g_{\mu\nu}).}
\tag{4.10}
$$

 This recovers Einstein’s brackets and braces in Einstein <span className="upright">(21)</span> and Einstein <span className="upright">(23)</span> from the source comparison, rather than using the completed Christoffel formula as its forward definition.

Internal frame changes leave $C$ fixed. Coordinate changes instead give <a id="eq-4-11"></a><a id="eq-C-coordinate"></a>

$$
C^{(y)}_\alpha=J^{-1}\!\left(\sum_\mu J^\mu{}_{\alpha}C^{(x)}_\mu\right)J
 +J^{-1}\partial_\alpha J.
\tag{4.11}
$$

 This follows by differentiating $E_xJ$. Equal metric readouts imply frame-related calibrations; the transformed $\omega$ satisfies the same zero conditions, so uniqueness in Theorem [4.2](/source-readout/einstein-1916/04-comparison-and-tensors#thm-omega) implies equal coordinate differential operations. The same proof on overlaps gives compatible connection gluing without a global coframe.

<a id="thm-derivative"></a>

### Theorem 4.3 (Differentiation intertwines with readout)

Define the appended calibrated derivative slot by $D_b=(E^{-1})^\mu{}_bD_\mu$. For every tensor type, after reading out that slot as well, <a id="eq-4-12"></a><a id="eq-D-intertwine"></a>

$$
\boxed{\Pi_E(DU)=\nabla^C(\Pi_EU).}
\tag{4.12}
$$

 The identity holds on the raw comparison domain. On $M=\Theta=0$, the right side is Einstein’s metric covariant derivative.

<a id="proof-thm-derivative"></a>

### Proof.

For vectors, $u=Ev$ gives $D_\mu(Ev)=E(\partial_\mu v+C_\mu v)$ by [(4.7)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-C-map). For covectors, $\alpha=E^{\mathsf T}a$ gives $\partial_\mu\alpha-C_\mu^{\mathsf T}\alpha
=E^{\mathsf T}(\partial_\mu a-\omega_\mu^{\mathsf T}a)$. The extra $E$ on the derivative slot cancels its $E^{-1}$. Scalars, products and contractions give all ranks by Proposition [4.1](/source-readout/einstein-1916/04-comparison-and-tensors#thm-tensor).

$\square$



## From stationary intervals to differential identities

**The same calibrated interval supplies geodesic motion, Hessians, volume derivatives and divergence identities. Boundary terms and tensor symmetries identify where each recovered operation applies.**

<a id="sec-geodesic"></a>

## 5. Geodesic variation and differential identities

<a id="fixed-endpoint-interval-variation"></a>

### Fixed-endpoint interval variation

For a regular timelike curve $\gamma(\lambda)$ set <a id="eq-5-1"></a><a id="eq-length-action"></a>

$$
L=\sqrt{\eta(E\dot\gamma,E\dot\gamma)}
 =\sqrt{g_{\mu\nu}\dot x^\mu\dot x^\nu},\qquad S[\gamma]=\int L\mathrm{d}\lambda.
\tag{5.1}
$$

 Here $E$ is a background during curve variation. Stationarity of the interval is Einstein’s inherited premise Einstein <span className="upright">(20)</span>, not a native-source theorem. For variation $\xi$, <a id="eq-5-2"></a><a id="eq-length-variation"></a>

$$
\delta S=\left[\frac{g_{\sigma\nu}\dot x^\nu}{L}\xi^\sigma\right]_{\lambda_1}^{\lambda_2}
 -\int r_\sigma\xi^\sigma\mathrm{d}\lambda,
 \qquad
 r_\sigma=\frac{\mathrm{d}}{\mathrm{d}\lambda}\frac{g_{\sigma\nu}\dot x^\nu}{L}
 -\frac{\partial_\sigma g_{\mu\nu}\dot x^\mu\dot x^\nu}{2L}.
\tag{5.2}
$$

 The displayed boundary term vanishes for fixed endpoints, not automatically for moving endpoints. Substituting [(4.10)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-christoffel) gives <a id="eq-5-3"></a><a id="eq-geodesic-residual"></a>

$$
r_\sigma=\frac{g_{\sigma\rho}}L
 \left(\ddot x^\rho+C^\rho{}_{\mu\nu}\dot x^\mu\dot x^\nu
 -\frac{\dot L}{L}\dot x^\rho\right).
\tag{5.3}
$$

 All curve variations lift as the same event-curve variations. With proper-time parameter $s$, $L=1$, and the equivalent source equation is <a id="eq-5-4"></a><a id="eq-source-geodesic"></a>

$$
\boxed{D_su=0,\qquad u=E\frac{\mathrm{d}x}{\mathrm{d}s},\qquad
 \frac{\mathrm{d}^2x^\rho}{\mathrm{d}s^2}+C^\rho{}_{\mu\nu}
 \frac{\mathrm{d}x^\mu}{\mathrm{d}s}\frac{\mathrm{d}x^\nu}{\mathrm{d}s}=0.}
\tag{5.4}
$$

 This recovers Einstein <span className="upright">(20a)</span>–Einstein <span className="upright">(22)</span>. Metric compatibility preserves $\eta(u,u)$ along the source equation. Spacelike curves can be treated with the explicit real convention $L=\sqrt{|g(\dot\gamma,\dot\gamma)|}$ and a fixed sign; the same unparameterized equation follows. The division by $L$ excludes null curves. A separate optical or Hamiltonian operation is used in Section [16](/source-readout/einstein-1916/16-light-and-bending#sec-light).

<a id="the-original-scalar-to-tensor-progression"></a>

### The original scalar-to-tensor progression

For a scalar $\phi$, $a_b=e_b\phi$ reads out as $\partial_\mu\phi$, recovering Einstein <span className="upright">(24)</span>. On an affine geodesic, <a id="eq-5-5"></a><a id="eq-hessian"></a>

$$
\frac{\mathrm{d}^2\phi}{\mathrm{d}s^2}
 =\left(\partial_\mu\partial_\nu\phi-C^\rho{}_{\mu\nu}\partial_\rho\phi\right)
 \frac{\mathrm{d}x^\mu}{\mathrm{d}s}\frac{\mathrm{d}x^\nu}{\mathrm{d}s}.
\tag{5.5}
$$

 The Hessian is the readout of $D(\mathrm{d}\phi)$ and is symmetric on the torsion-free sector, recovering Einstein <span className="upright">(25)</span>. Timelike probes already form an open set, so a polynomial identity verified for all such probes determines its coefficients without an improper null normalization.

Locally every covector is $\sum_i f_i\mathrm{d}h_i$ by taking fixed coordinate functions $h_i$ and coefficient functions $f_i$. Under subsequent redescription they remain the same scalar functions. The product rule therefore extends the derivative from gradients to all covectors, recovering Einstein <span className="upright">(26)</span>. Expanding a rank-two tensor in covector products gives <a id="eq-5-6"></a><a id="eq-ranktwo-derivative"></a>

$$
\nabla_\sigma A_{\mu\nu}=\partial_\sigma A_{\mu\nu}
 -C^\rho{}_{\sigma\mu}A_{\rho\nu}-C^\rho{}_{\sigma\nu}A_{\mu\rho},
\tag{5.6}
$$

 which is Einstein <span className="upright">(27)</span>. Contravariant slots contribute plus signs and covariant slots minus signs, giving Einstein <span className="upright">(38)</span> and Einstein <span className="upright">(39)</span>. This reproduces the original dependency argument, not only an isolated coordinate formula.

<a id="determinants-divergences-and-antisymmetric-derivatives"></a>

### Determinants, divergences and antisymmetric derivatives

Differentiation of $qg=I$ and the determinant cofactor formula give <a id="eq-5-7"></a><a id="eq-5-8"></a><a id="eq-inverse-det"></a><a id="eq-volume-trace"></a>

$$
\begin{aligned}
 \partial_\lambda q&=-q(\partial_\lambda g)q,\qquad
 \partial_\lambda\det g=(\det g)q^{\mu\nu}\partial_\lambda g_{\mu\nu},&&\text{(5.7)}\\
 c_\lambda:=\partial_\lambda\log\nu
 &=\tfrac12q^{\mu\nu}\partial_\lambda g_{\mu\nu}
 =-\tfrac12g_{\mu\nu}\partial_\lambda q^{\mu\nu}
 =C^\rho{}_{\lambda\rho}.
&&\text{(5.8)}\end{aligned}
$$

 The last equality also follows from [(4.7)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-C-map), because $\operatorname{tr}\omega=0$. Expanding compatibility yields <a id="eq-5-9"></a><a id="eq-metriccompatcomponents"></a>

$$
\partial_\lambda g_{\mu\nu}
 =C^\rho{}_{\lambda\mu}g_{\rho\nu}+C^\rho{}_{\lambda\nu}g_{\mu\rho},
 \qquad
 \partial_\lambda q^{\mu\nu}
 =-C^\mu{}_{\lambda\rho}q^{\rho\nu}-C^\nu{}_{\lambda\rho}q^{\mu\rho}.
\tag{5.9}
$$

 These supply Einstein <span className="upright">(28)</span>–Einstein <span className="upright">(34)</span>, including Einstein <span className="upright">(29a)</span>.

The corresponding contractions and antisymmetrizations are <a id="eq-5-10"></a><a id="eq-5-11"></a><a id="eq-5-12"></a><a id="eq-5-13"></a><a id="eq-vector-div"></a><a id="eq-curl"></a><a id="eq-cyclic"></a><a id="eq-antisym-div"></a>

$$
\begin{aligned}
 \nabla_\mu V^\mu&=\nu^{-1}\partial_\mu(\nu V^\mu),&&\text{(5.10)}\\
 A_{\mu;\nu}-A_{\nu;\mu}&=\partial_\nu A_\mu-\partial_\mu A_\nu,&&\text{(5.11)}\\
 A_{\mu\nu;\sigma}+A_{\nu\sigma;\mu}+A_{\sigma\mu;\nu}
 &=\partial_\sigma A_{\mu\nu}+\partial_\mu A_{\nu\sigma}+\partial_\nu A_{\sigma\mu},&&\text{(5.12)}\\
 \nabla_\nu A^{\mu\nu}&=\nu^{-1}\partial_\nu(\nu A^{\mu\nu})
 \quad(A^{\mu\nu}=-A^{\nu\mu}).
&&\text{(5.13)}\end{aligned}
$$

 Equation [(5.12)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-cyclic) assumes antisymmetric $A$ as well. Symmetric connection terms cancel pairwise, and their remaining trace becomes [(5.8)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-volume-trace). These recover Einstein <span className="upright">(35)</span>–Einstein <span className="upright">(37)</span> and Einstein <span className="upright">(40)</span>; Einstein’s curl in [(5.11)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-curl) is minus the usual exterior-derivative component in the order $(\mu,\nu)$.

For a mixed tensor the full identity is <a id="eq-5-14"></a><a id="eq-mixed-div"></a>

$$
\nabla_\nu T^\nu{}_{\mu}=\nu^{-1}\partial_\nu(\nu T^\nu{}_{\mu})
 -C^\rho{}_{\nu\mu}T^\nu{}_{\rho}.
\tag{5.14}
$$

 Only when $T^{\alpha\beta}$ is symmetric does it reduce to <a id="eq-5-15"></a><a id="eq-symmetric-div"></a>

$$
\nabla_\nu T^\nu{}_{\mu}
 =\nu^{-1}\partial_\nu(\nu T^\nu{}_{\mu})
 -\tfrac12\partial_\mu g_{\alpha\beta}T^{\alpha\beta}
 =\nu^{-1}\partial_\nu(\nu T^\nu{}_{\mu})
 +\tfrac12\partial_\mu q^{\alpha\beta}T_{\alpha\beta}.
\tag{5.15}
$$

 To prove it, lower the upper index of [(4.10)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-christoffel), contract with symmetric $T$, and exchange the two summed indices in its first and third terms. They cancel; the remaining term is the half metric derivative. Differentiating $qg=I$ supplies the last form. This retains the hypotheses of Einstein <span className="upright">(41)</span>, Einstein <span className="upright">(41a)</span> and Einstein <span className="upright">(41b)</span>.



## Keep the nonlinear curvature

**The comparison commutator recovers both derivative and quadratic curvature terms. Local flatness, coordinate-volume choices and variation coverage are then different consequences of that complete operation.**

<a id="sec-curvature"></a>

## 6. Curvature, local flatness and variation coverage

The comparison curvature is defined by the commutator of the source derivatives: <a id="eq-6-1"></a><a id="eq-framecurvature"></a>

$$
\mathcal F=\mathrm{d}\omega+\omega\wedge\omega,\qquad
 \mathcal F_{\mu\nu}=\partial_\mu\omega_\nu-\partial_\nu\omega_\mu
 +[\omega_\mu,\omega_\nu].
\tag{6.1}
$$

 The ordered matrix product cannot be discarded.

<a id="thm-curvature"></a>

### Theorem 6.1 (Curvature recovery on the raw domain)

For every raw comparison pair $(E,\omega)$ and its readout [(4.7)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-C-map), <a id="eq-6-2"></a><a id="eq-curvature-intertwine"></a>

$$
\boxed{R_{\mu\nu}[C]=E^{-1}\mathcal F_{\mu\nu}[\omega]E.}
\tag{6.2}
$$

 On the compatible torsion-free sector this is the Riemann tensor of the recovered metric.

<a id="proof-thm-curvature"></a>

### Proof.

The vector derivative identity is the operator equality $(\partial_\mu+\omega_\mu)E=E(\partial_\mu+C_\mu)$. Take its commutator in $\mu,\nu$. Derivatives of the arbitrary test vector cancel, leaving $\mathcal F_{\mu\nu}E=ER_{\mu\nu}$. Expansion yields all four terms in [(2.6)](/source-readout/einstein-1916/02-source-and-recovery#eq-signs), including both quadratic products. No zero residual or field equation has been used.

$\square$

Under a frame change $\mathcal F'=\Lambda\mathcal F\Lambda^{-1}$, so its coordinate readout is fixed. Coordinate changes act on the two direction slots and the vector/covector slots, proving tensor character. Einstein appends derivative indices, so his $A_{\mu\sigma\tau}$ means $\nabla_\tau\nabla_\sigma A_\mu$, including the derivative-slot connection. Subtraction gives <a id="eq-6-3"></a><a id="eq-einstein-commutator"></a>

$$
A_{\mu\sigma\tau}-A_{\mu\tau\sigma}
 =R^\rho{}_{\mu\sigma\tau}A_\rho
 +T^\lambda{}_{\sigma\tau}\nabla_\lambda A_\mu.
\tag{6.3}
$$

 On zero torsion this is Einstein <span className="upright">(42)</span>–Einstein <span className="upright">(43)</span>. Einstein contracts the upper index with the final lower index, giving $B_{\mu\nu}=R^\rho{}_{\mu\nu\rho}=-\operatorname{Ric}_{\mu\nu}$. In particular, <a id="eq-6-4"></a><a id="eq-6-5"></a><a id="eq-WS"></a><a id="eq-W-S-def"></a>

$$
\begin{aligned}
 B_{\mu\nu}&=W_{\mu\nu}+S_{\mu\nu},&&\text{(6.4)}\\
 W_{\mu\nu}&=-\partial_\alpha C^\alpha{}_{\mu\nu}
 +\operatorname{tr}(C_\mu C_\nu),\qquad
 S_{\mu\nu}=\partial_\mu c_\nu-C^\alpha{}_{\mu\nu}c_\alpha.
&&\text{(6.5)}\end{aligned}
$$

 This is Einstein <span className="upright">(44)</span>, including its original two-part decomposition. The first term $W$ is not the unrestricted Ricci tensor; the volume defect $S$ is part of the identity.

<a id="flatness-and-coordinate-volume-specialization"></a>

### Flatness and coordinate-volume specialization

If a metric is constant on a chart, $C=0$ there, so $R=0$. Conversely, on a sufficiently small simply connected neighborhood, $\mathcal F=0$ is the integrability condition for $\mathrm{d}\Lambda=\Lambda\omega$ with $\Lambda(p)=I$. One may solve along paths by the linear transport ODE. Differentiating the transport with respect to an endpoint-fixed path deformation gives an integral of conjugated curvature, hence zero. The local simply connected domain makes the result path independent. Interval compatibility keeps $\Lambda$ Lorentz. Equation [(4.3)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-omega-transform) gives $\omega'=0$, and zero torsion then gives $\mathrm{d}(\Lambda\theta)=0$. On a star-shaped subpatch, integration of closed one-forms gives $\Lambda\theta=\mathrm{d}X$; invertibility makes $X$ coordinates. This proves the local flatness converse mentioned in Einstein’s footnote, not global constant coordinates or trivial holonomy on an arbitrary manifold.

Likewise, any positive smooth coordinate density can be made one locally. Set <a id="eq-6-6"></a><a id="eq-volume-chart"></a>

$$
y^1=\int_{x_0^1}^{x^1}\nu(s,x^2,x^3,x^4)\mathrm{d}s,
 \qquad y^j=x^j\quad(j=2,3,4).
\tag{6.6}
$$

 Its Jacobian determinant is $\nu>0$, so the inverse function theorem gives $\nu_y=1$. Orientation-preserving transitions between such charts have determinant one, recovering Einstein <span className="upright">(19)</span>. This coordinate choice makes $S=0$ in [(6.4)](/source-readout/einstein-1916/06-curvature-and-variations#eq-WS); it is neither a restriction to flat geometry nor an internal Lorentz-frame change.

<a id="variations-of-the-differential-operation"></a>

### Variations of the differential operation

A smooth metric family lifts through the local section of Theorem [3.1](/source-readout/einstein-1916/03-calibrated-spacetime#thm-metric), and its connection is then constructed by [(4.6)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-omega-formula). Differentiating the two comparison conditions gives <a id="eq-6-7"></a><a id="eq-omega-variation"></a>

$$
\delta\omega^{\mathsf T}\eta+\eta\delta\omega=0,\qquad
 \mathrm{d}(\delta\theta)+\delta\omega\wedge\theta+\omega\wedge\delta\theta=0.
\tag{6.7}
$$

 The algebraic operator on $\delta\omega$ is the same invertible torsion system used in Theorem [4.2](/source-readout/einstein-1916/04-comparison-and-tensors#thm-omega). Every $\delta E$ therefore induces a unique comparison response. Projecting the differentiated compatibility and symmetry identities gives <a id="eq-6-8"></a><a id="eq-C-variation"></a>

$$
\boxed{\delta C^\rho{}_{\mu\nu}
 =\tfrac12q^{\rho\lambda}
 (\nabla_\mu h_{\lambda\nu}+\nabla_\nu h_{\lambda\mu}
 -\nabla_\lambda h_{\mu\nu}),\qquad h=\delta g.}
\tag{6.8}
$$

 The proof is the same three-index addition and subtraction that gave [(4.10)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-christoffel), now linearized. Compact support is preserved because the construction uses only finitely many derivatives. This is variation coverage, not a separate independent-connection action principle.

<a id="controls-on-the-nonlinear-comparison"></a>

### Controls on the nonlinear comparison

For $E=\operatorname{diag}(1,1,1,N(x))$, setting $\omega=0$ preserves $M=0$ but gives $\Theta\ne0$ when $N'\ne0$. The bare connection has $C^4{}_{14}=N'/N$, $C^4{}_{41}=0$ and zero matrix curvature. The compatible construction instead gives <a id="eq-6-9"></a><a id="eq-lapse-control"></a>

$$
\omega^1{}_4=\omega^4{}_1=N'\mathrm{d}t,\quad
 C^1{}_{44}=NN',\quad C^4{}_{14}=C^4{}_{41}=N'/N,
 \quad R^1{}_{414}=NN''.
\tag{6.9}
$$

 Linear $N$ gives the flat example [(3.10)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-rindler); $N=e^{kx}$ gives nonzero curvature. Matching the metric alone does not license an arbitrary comparison derivative.

A lapse-only example does not test every quadratic term. With $E=\operatorname{diag}(a,a,a,1)$, $a=e^{Ht}$ and $H\ne0$, the compatible connection satisfies $\omega^i{}_4=\omega^4{}_i=H\theta^i$. Then <a id="eq-6-10"></a><a id="eq-quadratic-control"></a>

$$
\mathcal F^1{}_2=H^2\theta^1\wedge\theta^2=H^2a^2\mathrm{d}x\wedge\mathrm{d}y,
 \qquad \mathrm{d}\omega^1{}_2=0.
\tag{6.10}
$$

 Deleting $\omega\wedge\omega$ loses this component. The full calculation gives $\operatorname{Ric}=-3H^2g$ and $\mathcal R=-12H^2$ in the declared convention. This is a designed test geometry, not a vacuum solution or a new spacetime discovery.



## Recover the action and its variation

**Recovering the value of a gravitational action is only the beginning. The construction also covers its test directions and boundary response, exposing why coordinate gauge and constrained variation cannot be interchanged.**

<a id="sec-vacuum"></a>

## 7. Vacuum dynamics and the variational operation

Einstein’s §13 identifies freely moving massive test particles with the geodesics constructed earlier. This physical extension from locally inertial motion is inherited here. The source law $D_s(E\dot x)=0$ reads to <a id="eq-7-1"></a><a id="eq-physical-geodesic"></a>

$$
\frac{\mathrm{d}^2x^\rho}{\mathrm{d}s^2}=\Gamma_{\!\mathrm E}^\rho{}_{\mu\nu}
 \frac{\mathrm{d}x^\mu}{\mathrm{d}s}\frac{\mathrm{d}x^\nu}{\mathrm{d}s},
\tag{7.1}
$$

 recovering Einstein <span className="upright">(45)</span>–Einstein <span className="upright">(46)</span>. It is a test-body law, not a backreaction theorem for a finite body.

Contract the source curvature by <a id="eq-7-2"></a><a id="eq-source-ricci"></a>

$$
\mathscr R_{ab}=\sum_c\mathcal F^c{}_a(e_c,e_b),\qquad
 \operatorname{Ric}=E^{\mathsf T}\mathscr R E.
\tag{7.2}
$$

 The second identity follows by inserting [(6.2)](/source-readout/einstein-1916/06-curvature-and-variations#eq-curvature-intertwine) and cancelling calibration factors in the contracted slot. The chosen source vacuum law $\mathscr R=0$ is therefore equivalent to $\operatorname{Ric}=0$, or $B=0$ in Einstein’s convention. His §14 chooses this contracted equation, not full vanishing of curvature. In a unit-volume chart it is <a id="eq-7-3"></a><a id="eq-vacuum-W"></a>

$$
W_{\mu\nu}=\partial_\alpha\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}
 +\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}\Gamma_{\!\mathrm E}^\beta{}_{\nu\alpha}=0,
 \qquad \nu=1,
\tag{7.3}
$$

 which is Einstein <span className="upright">(47)</span>. This physical law is realized, not selected solely by the native support.

<a id="a-source-comparison-action"></a>

### A source comparison action

Retain the coordinate column labels of $E$ and let $D$ act on its calibrated row index. Define <a id="eq-7-4"></a><a id="eq-source-action"></a>

$$
\mathcal A_\mu=(\partial_\mu E+\omega_\mu E)E^{-1},\quad
 \mathcal P_a=(E^{-1})^\mu{}_a\mathcal A_\mu,\quad
 \mathcal H_Z=\eta^{ab}\operatorname{tr}(\mathcal P_a\mathcal P_b),\quad
 \mathcal S_Z=\int_\Omega\mathcal H_Z\mathrm{d}^4x.
\tag{7.4}
$$

 Here $\omega=\omega(E)$, and its derivative dependence is varied with $E$. This $D E$ is not the full covariant derivative acting on both coframe indices. The comparison missing on the coordinate column is exactly what $C$ records. Since $\mathcal A_\mu=EC_\mu E^{-1}$, <a id="eq-7-5"></a><a id="eq-H"></a>

$$
\boxed{\mathcal H_Z=H(q,\partial q)
 =q^{\mu\nu}\operatorname{tr}(C_\mu C_\nu)
 =q^{\mu\nu}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}\Gamma_{\!\mathrm E}^\beta{}_{\nu\alpha}.}
\tag{7.5}
$$

 Conjugation invariance of trace and the calibrated pairing prove the equality, and invariance under internal Lorentz changes. General coordinate covariance of this density is not asserted. The chart-tagged right side is Einstein’s Hamiltonian function in Einstein <span className="upright">(47a)</span>, extended to an open set of invertible metrics in that chart for taking unrestricted derivatives. The term “Hamiltonian function” is historical; no canonical constraint algebra or phase-space equivalence is claimed.

<a id="thm-action"></a>

### Theorem 7.1 (Complete action-variation recovery)

For every symmetric inverse-metric variation $k^{\mu\nu}=\delta q^{\mu\nu}$, define $A_{\mu\nu}=\operatorname{tr}(C_\mu C_\nu)$. On the full compatible metric-calculus domain, <a id="eq-7-6"></a><a id="eq-H-variation"></a>

$$
\boxed{\delta H=-A_{\mu\nu}k^{\mu\nu}
 +\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}\partial_\alpha k^{\mu\nu}.}
\tag{7.6}
$$

 Every such variation lifts to the calibration. On a bounded patch region with piecewise smooth boundary, <a id="eq-7-7"></a><a id="eq-S-variation"></a>

$$
\delta\mathcal S_Z=-\int_\Omega W_{\mu\nu}k^{\mu\nu}\mathrm{d}^4x
 +\int_{\partial\Omega}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}k^{\mu\nu}\mathrm{d}\Sigma_\alpha.
\tag{7.7}
$$



<a id="proof-thm-action"></a>

### Proof.

Vary [(7.5)](/source-readout/einstein-1916/07-vacuum-and-action#eq-H), combine the two equal connection variations and rearrange: 

$$
\delta H=-A_{\mu\nu}\delta q^{\mu\nu}
 +2\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}\,
 \delta(q^{\mu\nu}\Gamma_{\!\mathrm E}^\beta{}_{\nu\alpha}).
$$

 Inverse-metric compatibility is 

$$
\partial_\alpha q^{\mu\beta}
 =q^{\mu\nu}\Gamma_{\!\mathrm E}^\beta{}_{\nu\alpha}
 +q^{\beta\nu}\Gamma_{\!\mathrm E}^\mu{}_{\nu\alpha}.
$$

 The multiplying $\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}$ is symmetric in $\mu,\beta$, so it selects exactly half this sum. This proves the positive derivative term in [(7.6)](/source-readout/einstein-1916/07-vacuum-and-action#eq-H-variation), without a determinant constraint. Integration by parts gives [(7.7)](/source-readout/einstein-1916/07-vacuum-and-action#eq-S-variation).

For arbitrary $k$ set <a id="eq-7-8"></a><a id="eq-inverse-variation-lift"></a>

$$
\delta E=-\tfrac12Ekg.
\tag{7.8}
$$

 Then $\delta g=-gkg$ and $\delta q=-q\delta gq=k$. Equation [(6.7)](/source-readout/einstein-1916/06-curvature-and-variations#eq-omega-variation) supplies the dependent comparison variation. Support and fixed-boundary values are preserved. Hence the source action has every relevant target test direction, not merely the same value on fixed configurations.

$\square$

All-index sums use symmetric coefficients. Derivatives with respect to ten independent matrix entries have the corresponding factor of two on off-diagonal entries. The recovered partial derivatives are <a id="eq-7-9"></a><a id="eq-H-partials"></a>

$$
H_{q^{\mu\nu}}=-A_{\mu\nu},\qquad
 H_{\partial_\alpha q^{\mu\nu}}=\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}.
\tag{7.9}
$$

 These agree with numbered Einstein <span className="upright">(48)</span>; the inconsistent preceding printed sign is recorded in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source). With compact-interior variations or $k=0$ on the boundary, the Euler equation is $W=0$, recovering Einstein <span className="upright">(47b)</span>. The calibration bulk coefficient is <a id="eq-7-10"></a><a id="eq-source-EL"></a>

$$
\mathcal E_a{}^\mu=2\eta_{ab}E^b{}_{\nu}
 q^{\nu\rho}q^{\mu\sigma}W_{\rho\sigma}.
\tag{7.10}
$$

 Invertibility makes $\mathcal E=0$ equivalent to $W=0$. The six Lorentz variations are vertical and give $\delta q=0$, rather than six additional physical equations.

<a id="coordinate-gauge-versus-a-constrained-variational-domain"></a>

### Coordinate gauge versus a constrained variational domain

The order of operations is essential. We define $H$ on the unrestricted invertible domain, take all symmetric variations with the stated boundary contract, and evaluate the resulting equations on configurations expressed in a unit-volume chart. Outside that chart its Euler derivative is $-W=\operatorname{Ric}+S$, not the unrestricted generally covariant vacuum law. Einstein writes the volume condition alongside the action and then uses independent component derivatives. The preceding construction is an explicit mathematical interpretation of that operation, not a claim that his text separately formalizes the order.

If instead every varied field is constrained to $\nu=1$, then $g_{\mu\nu}k^{\mu\nu}=0$. Such variations detect only <a id="eq-7-11"></a><a id="eq-trace-loss"></a>

$$
W_{\mu\nu}-\tfrac14g_{\mu\nu}q^{\rho\sigma}W_{\rho\sigma}=0.
\tag{7.11}
$$

 Indeed the annihilator of the trace-free symmetric variation subspace is spanned by $g$; compactly supported tests prove the pointwise statement. This is weaker than [(7.3)](/source-readout/einstein-1916/07-vacuum-and-action#eq-vacuum-W).

A smooth witness is $E=\operatorname{diag}(r^{1/3},r^{1/3},r^{1/3},r^{-1})$, with $x^4=r>0$. Directly from [(4.6)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-omega-formula) and curvature, <a id="eq-7-12"></a><a id="eq-trace-witness"></a>

$$
\nu=1,\quad \operatorname{Ric}=-\tfrac13g,\quad \mathcal R=-\tfrac43,
 \quad W=\tfrac13g.
\tag{7.12}
$$

 It satisfies [(7.11)](/source-readout/einstein-1916/07-vacuum-and-action#eq-trace-loss) and fails the vacuum equation. The same witness exposes the exceptional value in Einstein’s footnote: from $B+\lambda g\operatorname{tr}_q B=0$ one obtains $(1+4\lambda)\operatorname{tr}_qB=0$. Equivalence to $B=0$ requires $\lambda\ne-1/4$. No universal uniqueness theorem for gravitational actions is inferred from that footnote.

<a id="sec-boundary-action"></a>

### A boundary-complete covariant comparison

For comparison with the standard curvature action, let $\mathcal R=q^{\mu\nu}\operatorname{Ric}_{\mu\nu}$ and define <a id="eq-7-13"></a><a id="eq-7-14"></a><a id="eq-L1"></a>

$$
\begin{aligned}
 \mathcal L_1&=\nu q^{\mu\nu}
 \left(C^\alpha{}_{\mu\beta}C^\beta{}_{\nu\alpha}
 -C^\alpha{}_{\mu\nu}c_\alpha\right),&&\text{(7.13)}\\
 V^\alpha&=\nu\left(q^{\mu\nu}C^\alpha{}_{\mu\nu}-q^{\alpha\mu}c_\mu\right).
&&\text{(7.14)}\end{aligned}
$$

 Expansion of Ricci and a product differentiation give <a id="eq-7-15"></a><a id="eq-boundary-identity"></a>

$$
\boxed{\nu\mathcal R=\mathcal L_1+\partial_\alpha V^\alpha.}
\tag{7.15}
$$

 For clarity, the simplifying identities are $(\partial_\alpha q^{\mu\nu})C^\alpha{}_{\mu\nu}=-2H$ and $\partial_\alpha q^{\alpha\mu}=-c_\lambda q^{\lambda\mu}
-q^{\alpha\lambda}C^\mu{}_{\alpha\lambda}$. Move the two derivatives in Ricci into $\partial V$, insert these identities and $\partial_\alpha\nu=\nu c_\alpha$; the terms quadratic in $c$ cancel and the remainder is exactly [(7.13)](/source-readout/einstein-1916/07-vacuum-and-action#eq-L1).

The source curvature action is $S_R[E]=\int\nu\eta^{ab}\mathscr R_{ab}\mathrm{d}^4x$. Varying the inverse metric and using $\delta\operatorname{Ric}_{\mu\nu}=\nabla_\alpha\delta C^\alpha{}_{\mu\nu}
-\nabla_\nu\delta C^\alpha{}_{\alpha\mu}$ gives <a id="eq-7-16"></a><a id="eq-7-17"></a><a id="eq-EHvariation"></a>

$$
\begin{aligned}
 \delta S_R&=\int_\Omega\nu G_{\mu\nu}k^{\mu\nu}\mathrm{d}^4x
 +\int_{\partial\Omega}\Upsilon^\alpha\mathrm{d}\Sigma_\alpha,&&\text{(7.16)}\\
 G_{\mu\nu}&=\operatorname{Ric}_{\mu\nu}-\tfrac12g_{\mu\nu}\mathcal R,\qquad
 \Upsilon^\alpha=\nu\left(q^{\mu\nu}\delta C^\alpha{}_{\mu\nu}
 -q^{\alpha\mu}\delta C^\nu{}_{\nu\mu}\right).
&&\text{(7.17)}\end{aligned}
$$

 This is an additional covariant comparison, not a substitution for Einstein’s displayed $H$. In four dimensions $G=0$ is equivalent to $\operatorname{Ric}=0$ by its trace, but the unrestricted first-variation covectors differ. At a unit-volume background, set $f=\delta\log\nu=-g_{\mu\nu}k^{\mu\nu}/2$ and $a^\alpha=q^{\mu\nu}C^\alpha{}_{\mu\nu}$. Although $\mathcal L_1=H$ at that background, <a id="eq-7-18"></a><a id="eq-transverse-action"></a>

$$
\delta\mathcal L_1-\delta H=fH-a^\alpha\partial_\alpha f
 =f\mathcal R-\partial_\alpha(a^\alpha f).
\tag{7.18}
$$

 Equality of values on a gauge slice is not equality of transverse derivatives.

Nor does fixed boundary metric imply $\delta C=0$. On the Minkowski unit four-cube, vary only the lapse by $\delta N=x(1-x)y(1-y)z(1-z)t(1-t)$. The variation vanishes on every boundary face, yet <a id="eq-7-19"></a><a id="eq-boundary-witness"></a>

$$
\delta(\nu\mathcal R)=2(\partial_x^2+\partial_y^2+\partial_z^2)\delta N,
 \qquad \delta S_R=-\frac1{18},\qquad \delta\!\int\mathcal L_1=0.
\tag{7.19}
$$

 For each spatial derivative the integral is $2(-2)(1/6)^3=-1/54$; three such terms give the displayed result. The difference is precisely the boundary response. This licenses bulk comparison for compact-interior variations or an explicitly subtracted boundary term, not arbitrary equality of finite-boundary ensembles or charges.



## The gravitational current keeps its coordinate tag

**The action supplies Einstein’s canonical gravitational current and its exact off-shell divergence. An explicit flat example shows why internal frame invariance does not make that current a coordinate tensor.**

<a id="sec-gravenergy"></a>

## 8. Gravitational energy and coordinate dependence

The action determines a canonical coordinate-translation current. Because $q(E)$ is pointwise, the chain rule gives <a id="eq-8-1"></a><a id="eq-canonical-source-current"></a>

$$
\frac{\partial\mathcal H_Z}{\partial(\partial_\alpha E^a{}_{\lambda})}
 \partial_\sigma E^a{}_{\lambda}
 =H_{\partial_\alpha q^{\mu\nu}}\partial_\sigma q^{\mu\nu}.
\tag{8.1}
$$

 The dependence of $\omega(E)$ is already included in [(7.5)](/source-readout/einstein-1916/07-vacuum-and-action#eq-H) and its variation. With Einstein’s normalization define <a id="eq-8-2"></a><a id="eq-tcanonical"></a>

$$
-2\kappa t^\alpha{}_{\sigma}
 =\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}\partial_\sigma q^{\mu\nu}
 -\delta^\alpha_\sigma H.
\tag{8.2}
$$

 The fixed nonzero $\kappa$ is normalized later by the Newtonian comparison. From the product and chain rules, <a id="eq-8-3"></a><a id="eq-energy-offshell"></a>

$$
\boxed{-2\kappa\partial_\alpha t^\alpha{}_{\sigma}
 =W_{\mu\nu}\partial_\sigma q^{\mu\nu}.}
\tag{8.3}
$$

 Second derivatives of $q$ cancel in the canonical divergence; the remaining coefficient is its Euler residual. Thus vacuum gives Einstein <span className="upright">(49)</span>.

Substituting inverse-metric compatibility into [(8.2)](/source-readout/einstein-1916/08-gravitational-energy#eq-tcanonical) yields <a id="eq-8-4"></a><a id="eq-tquad"></a>

$$
\boxed{\kappa t^\alpha{}_{\sigma}
 =\tfrac12\delta^\alpha_\sigma H
 -q^{\mu\nu}C^\alpha{}_{\mu\beta}C^\beta{}_{\nu\sigma}.}
\tag{8.4}
$$

 The two differentiated metric terms are equal after index relabelling. Calling the final product $K^\alpha{}_{\sigma}$ gives $\operatorname{tr}K=H$ and $\kappa\operatorname{tr}t=H$, which establish Einstein <span className="upright">(50)</span> and the mixed identity <a id="eq-8-5"></a><a id="eq-mixed-vacuum"></a>

$$
\boxed{\partial_\alpha(q^{\sigma\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta})
 +\kappa(t^\sigma{}_{\mu}-\tfrac12\delta^\sigma_\mu\operatorname{tr}t)
 =q^{\sigma\beta}W_{\mu\beta}.}
\tag{8.5}
$$

 To prove it, expand the derivative, replace $\partial\Gamma_{\!\mathrm E}$ with $W-A$, and use inverse compatibility to split $(\partial q)\Gamma_{\!\mathrm E}$ into $qA+K$. The $qA$ terms cancel, and [(8.4)](/source-readout/einstein-1916/08-gravitational-energy#eq-tquad) cancels $K$. On the unit-volume vacuum sector this is Einstein <span className="upright">(51)</span>; conversely invertibility of $q$ recovers $W=0$. Four conservation equations alone are weaker: the witness [(7.12)](/source-readout/einstein-1916/07-vacuum-and-action#eq-trace-witness) has $W\ne0$ but $W_{\mu\nu}\partial_\sigma q^{\mu\nu}=0$ since $\nu=1$.

For a fixed spatial coordinate region $V$, vacuum conservation gives <a id="eq-8-6"></a><a id="eq-vacuum-flux"></a>

$$
\frac{\mathrm{d}}{\mathrm{d}t}\int_Vt^4{}_{\sigma}\mathrm{d}^3x
 =-\int_{\partial V}t^i{}_{\sigma}n_i^{\rm out}\mathrm{d}S
 =\int_{\partial V}t^i{}_{\sigma}n_i^{\rm in}\mathrm{d}S,
\tag{8.6}
$$

 recovering the inward-normal convention of Einstein <span className="upright">(49a)</span>. Moving boundaries require an additional transport term.

<a id="a-retained-non-tensor-readout"></a>

### A retained non-tensor readout

Einstein explicitly states that $t$ is not a tensor. A determinant-one nonlinear chart change makes this limitation concrete: <a id="eq-8-7"></a><a id="eq-energy-chart"></a>

$$
X=e^x,\quad Y=y,\quad Z=z,\quad T=te^{-x}.
\tag{8.7}
$$

 Take $E$ to be its Jacobian, the pullback of a Cartesian calibration. Its coframe is exact, $\omega=0$, and $C=E^{-1}\mathrm{d}E$. Direct calculation gives <a id="eq-8-8"></a><a id="eq-nontensor-witness"></a>

$$
R=0,\quad \nu=1,\quad W=0,\quad H=-2e^{-2x},\qquad
 \kappa(t^\alpha{}_{\sigma})=\operatorname{diag}(0,-e^{-2x},-e^{-2x},0).
\tag{8.8}
$$

 The array is zero in the original Cartesian coordinates. A tensor cannot change from zero to nonzero by a coordinate transformation. Its divergence nevertheless vanishes, as [(8.3)](/source-readout/einstein-1916/08-gravitational-energy#eq-energy-offshell) requires. Internal frame invariance is not coordinate tensoriality; the chart remains an essential tag on this energy readout. No positive local energy density or globally invariant charge is inferred.

Finally, vacuum is not flatness. The independent calibration <a id="eq-8-9"></a><a id="eq-nonflatvacuum"></a>

$$
E=\operatorname{diag}(r^{1/3},r^{1/3},r^{-1/6},r^{-1/2}),\qquad x^4=r>0
\tag{8.9}
$$

 has $\nu=1$, $\operatorname{Ric}=W=0$ but $R^1{}_{414}=1/(18r^2)$. Both curvature implementations and the current identities agree on this fixture. It verifies the distinction motivating §14 without introducing a different vacuum law.



## Put matter on the same realization

**Geometry and stress must share one calibration, comparison and normalization. Joint sections and variations recover their coupling, with trace reversal preserving information that trace deletion would lose.**

<a id="sec-matter"></a>

## 9. Matter on the same realization and the general field equation

Einstein’s §16 introduces a matter energy array whose covariant form is symmetric and replaces the gravitational energy by gravitational plus matter energy in Einstein <span className="upright">(51)</span>. He explicitly acknowledges that the relativity postulate alone does not justify this coupling. We inherit that premise and construct its operations on the same calibration, connection, coordinate domain and normalization.

Add a raw calibrated two-array $\Sigma$, retaining its antisymmetric part as a discrepancy until the symmetric sector is selected. Define <a id="eq-9-1"></a><a id="eq-stress-map"></a>

$$
T=E^{\mathsf T}\Sigma E,\qquad
 T^\mu{}_{\nu}=(E^{-1}\eta^{-1}\Sigma E)^\mu{}_{\nu},\qquad
 \tau=\operatorname{tr}(qT)=\operatorname{tr}(\eta^{-1}\Sigma).
\tag{9.1}
$$

 For a fixed $E$, the reverse is $\Sigma=E^{-\mathsf T}TE^{-1}$. Hence every smooth local metric and symmetric-stress pair has a joint realization. Equal pairs are represented precisely by <a id="eq-9-2"></a><a id="eq-joint-frame"></a>

$$
E'=\Lambda E,\qquad \Sigma'=\Lambda^{-\mathsf T}\Sigma\Lambda^{-1},
 \qquad \Lambda^{\mathsf T}\eta\Lambda=\eta,
\tag{9.2}
$$

 with the previously determined comparison transformation. This follows from Theorem [3.1](/source-readout/einstein-1916/03-calibrated-spacetime#thm-metric) and cancellation of $E$ in the equal stress readouts. Changing only the calibration or only the stress is generally a different physical preparation.

Joint tangent coverage is equally explicit. For desired $h=\delta g$ and $K_T=\delta T$, let $H=\delta E=Eqh/2$ and $A=HE^{-1}$. Then <a id="eq-9-3"></a><a id="eq-stress-variation"></a>

$$
\delta\Sigma=E^{-\mathsf T}K_TE^{-1}-A^{\mathsf T}\Sigma-\Sigma A.
\tag{9.3}
$$

 Differentiating [(9.1)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-stress-map) proves both prescribed responses. Holding the coordinate stress fixed corresponds to $K_T=0$, not generally to $\delta\Sigma=0$. This is a readout-response identity, not an assumed universal matter action.

<a id="trace-reversal-not-trace-deletion"></a>

### Trace reversal, not trace deletion

For any covariant two-array define <a id="eq-9-4"></a><a id="eq-trace-reversal"></a>

$$
\mathsf J_g(A)=A-\tfrac12g\operatorname{tr}(qA),\qquad
 \mathsf J_\eta(S)=S-\tfrac12\eta\operatorname{tr}(\eta^{-1}S).
\tag{9.4}
$$

 In four dimensions, $\operatorname{tr}_q\mathsf J_g(A)=-\operatorname{tr}_q A$ and $\mathsf J_g^2(A)=A$. Substitution gives <a id="eq-9-5"></a><a id="eq-trace-intertwiner"></a>

$$
E^{\mathsf T}\mathsf J_\eta(\Sigma)E=\mathsf J_g(T).
\tag{9.5}
$$

 It is an invertible operation, unlike the trace-free projection $A-g\operatorname{tr}(qA)/4$.

Retain the source-action current $t$ of [(8.4)](/source-readout/einstein-1916/08-gravitational-energy#eq-tquad); it is not separately fitted to matter. Set <a id="eq-9-6"></a><a id="eq-total-current"></a>

$$
\mathcal J^\sigma{}_{\mu}=t^\sigma{}_{\mu}+T^\sigma{}_{\mu},
\tag{9.6}
$$

 and retain the off-shell coupled residuals <a id="eq-9-7"></a><a id="eq-coupled-residuals"></a>

$$
U=W+\kappa\mathsf J_g(T),\quad
 Z=\operatorname{Ric}-\kappa\mathsf J_g(T),\quad
 \mathcal K=\mathsf J_g(Z)=G-\kappa T,
 \qquad U=-Z-S.
\tag{9.7}
$$

 Adding the same stress to [(8.5)](/source-readout/einstein-1916/08-gravitational-energy#eq-mixed-vacuum) proves, on the unrestricted chart domain, <a id="eq-9-8"></a><a id="eq-mixed-coupled"></a>

$$
\boxed{\partial_\alpha(q^{\sigma\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta})
 +\kappa\left(\mathcal J^\sigma{}_{\mu}
 -\tfrac12\delta^\sigma_\mu\operatorname{tr}\mathcal J\right)
 =q^{\sigma\beta}U_{\mu\beta}.}
\tag{9.8}
$$

 Einstein’s total-energy replacement selects the zero of the left side in a unit-volume chart. Invertibility of $q$ gives $U=0$, recovering Einstein <span className="upright">(52)</span> and Einstein <span className="upright">(53)</span>. Since $S=0$ there, the equivalent generally covariant equation is <a id="eq-9-9"></a><a id="eq-einstein-equation"></a>

$$
\boxed{\operatorname{Ric}_{\mu\nu}=\kappa(T_{\mu\nu}-\tfrac12g_{\mu\nu}\tau)
 \quad\Longleftrightarrow\quad G_{\mu\nu}=\kappa T_{\mu\nu}.}
\tag{9.9}
$$

 The scalar equation is $\mathcal R=-\kappa\tau$, so no trace component has been lost. In the calibrated representation, <a id="eq-9-10"></a><a id="eq-source-einstein"></a>

$$
\boxed{\mathscr G_{ab}=\kappa\Sigma_{ab},\qquad
 \mathscr G=\mathscr R-\tfrac12\eta\operatorname{tr}(\eta^{-1}\mathscr R).}
\tag{9.10}
$$

 Equations [(7.2)](/source-readout/einstein-1916/07-vacuum-and-action#eq-source-ricci) and [(9.5)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-trace-intertwiner) prove both directions. Every target solution pair lifts using the local metric section and the stress inverse; every source solution reads to such a pair. This is conditional solution-set recovery, not independent selection of the action or matter coupling.



## Follow exchange and boundary flux

**Conservation follows through an explicit double-divergence chain, with its volume defect retained. Matter and gravitational contributions exchange equal and opposite amounts on the selected sector.**

<a id="sec-conservation"></a>

## 10. Total conservation, exchange and boundary flux

<a id="the-original-double-divergence-chain"></a>

### The original double-divergence chain

To follow Einstein’s actual §17 argument, define <a id="eq-10-1"></a><a id="eq-P-potential"></a>

$$
P_\mu^{\alpha\sigma}=q^{\sigma\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}
 -\tfrac12\delta^\sigma_\mu V^\alpha,
 \qquad V^\alpha=q^{\lambda\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\lambda\beta}.
\tag{10.1}
$$

 Here $V$ is the indicated contraction of $\Gamma_{\!\mathrm E}$, distinct from the boundary vector in [(7.15)](/source-readout/einstein-1916/07-vacuum-and-action#eq-boundary-identity). Trace reversal of [(9.8)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-mixed-coupled) gives <a id="eq-10-2"></a><a id="eq-P-residual"></a>

$$
\partial_\alpha P_\mu^{\alpha\sigma}+\kappa\mathcal J^\sigma{}_{\mu}
 =q^{\sigma\beta}\mathsf J_g(U)_{\mu\beta}.
\tag{10.2}
$$

 On $U=0,\nu=1$ this is Einstein <span className="upright">(52a)</span>.

<a id="thm-doublediv"></a>

### Theorem 10.1 (Double divergence with its volume defect)

On the compatible metric-calculus domain in arbitrary coordinates, <a id="eq-10-3"></a><a id="eq-10-4"></a><a id="eq-double-first"></a><a id="eq-double-full"></a>

$$
\begin{aligned}
 \partial_\alpha\partial_\sigma
 (q^{\sigma\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta})
 &=\tfrac12\partial_\alpha\partial_\beta\partial_\mu q^{\alpha\beta},&&\text{(10.3)}\\
 \partial_\alpha\partial_\sigma P_\mu^{\alpha\sigma}
 &=-\tfrac12\partial_\mu\partial_\alpha(q^{\alpha\beta}c_\beta).
&&\text{(10.4)}\end{aligned}
$$



<a id="proof-thm-doublediv"></a>

### Proof.

Expansion of the recovered Christoffel expression gives <a id="eq-10-5"></a><a id="eq-antisymmetric-L"></a>

$$
q^{\sigma\beta}\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}
 =\tfrac12\partial_\mu q^{\sigma\alpha}+L_\mu^{\alpha\sigma},\qquad
 L_\mu^{\alpha\sigma}=\tfrac12q^{\alpha\lambda}q^{\sigma\beta}
 (\partial_\lambda g_{\mu\beta}-\partial_\beta g_{\mu\lambda}).
\tag{10.5}
$$

 Exchange $\alpha,\sigma$ and relabel $\lambda,\beta$ to see that $L$ is antisymmetric in its upper pair. Its double divergence vanishes, proving [(10.3)](/source-readout/einstein-1916/10-conservation-and-flux#eq-double-first). Inverse compatibility gives $V^\alpha=\partial_\beta q^{\alpha\beta}+q^{\alpha\beta}c_\beta$. Insert this in [(10.1)](/source-readout/einstein-1916/10-conservation-and-flux#eq-P-potential); the triple derivatives cancel and the displayed defect remains. No field equation has been used.

$\square$

The first identity is Einstein <span className="upright">(54)</span>; the second reduces to Einstein <span className="upright">(55)</span> at $\nu=1$. Combining with [(10.2)](/source-readout/einstein-1916/10-conservation-and-flux#eq-P-residual) yields the full off-shell relation <a id="eq-10-6"></a><a id="eq-total-offshell"></a>

$$
\kappa\partial_\sigma\mathcal J^\sigma{}_{\mu}
 =\partial_\sigma\!\left(q^{\sigma\beta}\mathsf J_g(U)_{\mu\beta}\right)
 +\tfrac12\partial_\mu\partial_\alpha(q^{\alpha\beta}c_\beta).
\tag{10.6}
$$

 Consequently the selected original sector obeys <a id="eq-10-7"></a><a id="eq-total-conservation"></a>

$$
\boxed{\partial_\sigma(t^\sigma{}_{\mu}+T^\sigma{}_{\mu})=0,}
\tag{10.7}
$$

 recovering Einstein <span className="upright">(56)</span>. Outside the volume specialization the extra term is real: $E=\operatorname{diag}(1,1,1,e^{x^3})$, where $x$ is the first spatial coordinate, gives $\partial_\alpha\partial_\sigma P_\mu^{\alpha\sigma}=(3,0,0,0)_\mu$.

An antisymmetric representation can replace $P$ for this operation, but only after its difference has been accounted for. Define <a id="eq-10-8"></a><a id="eq-antisymmetric-potential"></a>

$$
\mathcal A_\mu^{\alpha\sigma}=L_\mu^{\alpha\sigma}
 +\tfrac12\delta^\alpha_\mu\partial_\beta q^{\sigma\beta}
 -\tfrac12\delta^\sigma_\mu\partial_\beta q^{\alpha\beta}.
\tag{10.8}
$$

 It is antisymmetric, and direct differentiation gives <a id="eq-10-9"></a><a id="eq-potential-divergence"></a>

$$
\partial_\alpha P_\mu^{\alpha\sigma}
 =\partial_\alpha\mathcal A_\mu^{\alpha\sigma}
 -\tfrac12\delta^\sigma_\mu\partial_\alpha(q^{\alpha\beta}c_\beta).
\tag{10.9}
$$

 At $\nu=1$ their divergences agree. Pointwise equality of the potentials is not claimed. This is an instance of operation-specific information removal in Lemma [2.1](/source-readout/einstein-1916/02-source-and-recovery#thm-composition).

<a id="opposite-matter-and-gravitational-exchange"></a>

### Opposite matter and gravitational exchange

Define <a id="eq-10-10"></a><a id="eq-exchange"></a>

$$
e_\mu=\tfrac12T_{\rho\sigma}\partial_\mu q^{\rho\sigma}.
\tag{10.10}
$$

 Substitute $W=U-\kappa\mathsf J_g(T)$ into [(8.3)](/source-readout/einstein-1916/08-gravitational-energy#eq-energy-offshell) and use $g_{\rho\sigma}\partial_\mu q^{\rho\sigma}=-2c_\mu$. The complete identity is <a id="eq-10-11"></a><a id="eq-gravexchange-residual"></a>

$$
\partial_\alpha t^\alpha{}_{\mu}
 =e_\mu+\tfrac12\tau c_\mu
 -\frac1{2\kappa}U_{\rho\sigma}\partial_\mu q^{\rho\sigma}.
\tag{10.11}
$$

 On the coupled unit-volume sector this becomes <a id="eq-10-12"></a><a id="eq-opposite-exchange"></a>

$$
\boxed{\partial_\alpha t^\alpha{}_{\mu}=e_\mu,
 \qquad \partial_\alpha T^\alpha{}_{\mu}=-e_\mu.}
\tag{10.12}
$$

 The second equality follows from total conservation and is numbered Einstein <span className="upright">(57)</span>. For symmetric stress, $C^\rho{}_{\alpha\mu}T^\alpha{}_{\rho}=-e_\mu$ by [(5.15)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-symmetric-div), so <a id="eq-10-13"></a><a id="eq-einstein57a"></a>

$$
\partial_\alpha T^\alpha{}_{\mu}
 =-\Gamma_{\!\mathrm E}^\alpha{}_{\mu\beta}T^\beta{}_{\alpha},
\tag{10.13}
$$

 recovering Einstein <span className="upright">(57a)</span>. The inconsistent unnumbered gravitational line before Einstein <span className="upright">(57)</span> has the opposite sign in the supplied copy; its nonzero test is included below and in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source).

At the source level put $\Sigma^a{}_b=\eta^{ac}\Sigma_{cb}$ and <a id="eq-10-14"></a><a id="eq-source-stress-div"></a>

$$
\mathscr C_b=D_a\Sigma^a{}_b
 =\sum_{a,\mu}(E^{-1})^\mu{}_a
 \left(\partial_\mu\Sigma^a{}_b+
 \omega^a{}_{c\mu}\Sigma^c{}_b-\omega^c{}_{b\mu}\Sigma^a{}_c\right).
\tag{10.14}
$$

 The tensor-derivative intertwiner and contraction give <a id="eq-10-15"></a><a id="eq-matter-divergence"></a>

$$
\boxed{E^b{}_{\mu}\mathscr C_b
 =\nabla_\alpha T^\alpha{}_{\mu}
 =\nu^{-1}\partial_\alpha(\nu T^\alpha{}_{\mu})+e_\mu.}
\tag{10.15}
$$

 Thus the matter conservation statement is $D_a\Sigma^a{}_b=0$, equivalently $\nabla_\alpha T^\alpha{}_{\mu}=0$. In a general chart its density expression is $\partial_\alpha(\nu T^\alpha{}_{\mu})=-\nu e_\mu$, not the formula with the volume factor omitted.

<a id="a-separate-curvature-identity-proof"></a>

### A separate curvature-identity proof

The source comparison also supplies an independent algebraic route, without replacing the original argument above. Expansion gives <a id="eq-10-16"></a><a id="eq-bianchi-source"></a>

$$
D\mathcal F=\mathrm{d}\mathcal F+\omega\wedge\mathcal F-\mathcal F\wedge\omega=0,
 \qquad \mathcal F\wedge\theta=D\Theta=0.
\tag{10.16}
$$

 The first follows by the product rule, $\mathrm{d}^2=0$ and associativity; the second uses zero torsion. Their coordinate readouts give the differential and algebraic Bianchi identities. To make the contraction explicit, metric compatibility and zero torsion give the lowered curvature pair symmetries. They can be verified at a point where $C=0$: there 

$$
R_{\rho\sigma\mu\nu}=\tfrac12(
 g_{\rho\nu,\mu\sigma}-g_{\sigma\nu,\mu\rho}
 -g_{\rho\mu,\nu\sigma}+g_{\sigma\mu,\nu\rho}),
$$

 which is antisymmetric in each pair and invariant under pair exchange. Tensor character extends the identity to every chart. Contracting $\nabla_\lambda R^\rho{}_{\sigma\mu\nu}
+\nabla_\mu R^\rho{}_{\sigma\nu\lambda}
+\nabla_\nu R^\rho{}_{\sigma\lambda\mu}=0$ first in $\lambda,\rho$ and then in $\sigma,\mu$ yields <a id="eq-10-17"></a><a id="eq-contracted-bianchi"></a>

$$
2\nabla_\rho\operatorname{Ric}^\rho{}_{\nu}=\partial_\nu\mathcal R,
 \qquad \nabla_\alpha G^\alpha{}_{\mu}=0.
\tag{10.17}
$$

 Consequently the complete coupled residual satisfies <a id="eq-10-18"></a><a id="eq-bianchi-residual"></a>

$$
\nabla_\alpha\mathcal K^\alpha{}_{\mu}
 =-\kappa\nabla_\alpha T^\alpha{}_{\mu},\qquad
 D_a(\mathscr G-\kappa\Sigma)^a{}_b=-\kappa\mathscr C_b.
\tag{10.18}
$$

 This proves covariant matter conservation on every coupled configuration, in every chart, while preserving the distinct chart-tagged total-current construction.

<a id="finite-regions-and-explicit-coupled-checks"></a>

### Finite regions and explicit coupled checks

For a fixed bounded spatial coordinate region $V$ in a unit-volume chart, <a id="eq-10-19"></a><a id="eq-10-20"></a><a id="eq-10-21"></a><a id="eq-total-flux"></a><a id="eq-matter-flux"></a>

$$
\begin{aligned}
 \frac{\mathrm{d}}{\mathrm{d}t}\int_V\mathcal J^4{}_{\mu}\mathrm{d}^3x
 &=-\int_{\partial V}\mathcal J^i{}_{\mu}n_i^{\rm out}\mathrm{d}S,&&\text{(10.19)}\\
 \frac{\mathrm{d}}{\mathrm{d}t}\int_VT^4{}_{\mu}\mathrm{d}^3x
 &=-\int_{\partial V}T^i{}_{\mu}n_i^{\rm out}\mathrm{d}S-\int_Ve_\mu\mathrm{d}^3x,&&\text{(10.20)}\\
 \frac{\mathrm{d}}{\mathrm{d}t}\int_Vt^4{}_{\mu}\mathrm{d}^3x
 &=-\int_{\partial V}t^i{}_{\mu}n_i^{\rm out}\mathrm{d}S+\int_Ve_\mu\mathrm{d}^3x.
&&\text{(10.21)}\end{aligned}
$$

 These follow by differentiation under the finite integral and the divergence theorem. No boundary field is required to vanish for the balance identities; constancy of a regional total requires zero net flux. The exchange cancellation requires the same realization in both summands.

A same-realization nonzero-exchange witness is <a id="eq-10-22"></a><a id="eq-dust-fixture"></a>

$$
E_d=\operatorname{diag}(r^{2/9},r^{2/9},r^{2/9},r^{-2/3}),\quad
 \epsilon_d=\frac4{27\kappa}r^{-2/3},\quad
 \Sigma_d=\operatorname{diag}(0,0,0,\epsilon_d),\qquad x^4=r>0.
\tag{10.22}
$$

 The stress is specified before computing curvature. The calculation gives $\nu=1$, $\mathscr G=\kappa\Sigma_d$, $T^\alpha{}_{\mu}=\operatorname{diag}(0,0,0,\epsilon_d)$ and $t^\alpha{}_{\mu}=\operatorname{diag}(\epsilon_d,\epsilon_d,\epsilon_d,-\epsilon_d)$. In particular <a id="eq-10-23"></a><a id="eq-dust-exchange"></a>

$$
e_4=\frac8{81\kappa}r^{-5/3},\qquad
 \partial_\alpha t^\alpha{}_4=e_4,
 \qquad \partial_\alpha T^\alpha{}_4=-e_4.
\tag{10.23}
$$

 This distinguishes the exchange signs in a way a zero-exchange fixture cannot.

For a finite-flux test apply the determinant-one affine transformation $X=x+t$, $R=x+2t$, $Y=y$, $Z=z$ to [(10.22)](/source-readout/einstein-1916/10-conservation-and-flux#eq-dust-fixture). Recompute from $E_d(R)J$ and $\Sigma_d(R)$. The total current has $\mathcal J^4{}_4=-\epsilon_d(x+2t)$ and $\mathcal J^1{}_4=2\epsilon_d(x+2t)$. On the unit spatial cube, <a id="eq-10-24"></a><a id="eq-dust-finite-flux"></a>

$$
Q_4=-\frac4{9\kappa}\big[(1+2t)^{1/3}-(2t)^{1/3}\big],
 \quad \Phi_4^{\rm out}=2[\epsilon_d(1+2t)-\epsilon_d(2t)],
 \quad Q_4'+\Phi_4^{\rm out}=0
\tag{10.24}
$$

 for $t>0$. The primitive and endpoints verify the integral rather than assuming flux vanishes.

Conservation is not the full field equation. Constant nonzero stress on a flat calibration is conserved but has $G-\kappa T\ne0$. Doubling the stress in [(10.22)](/source-readout/einstein-1916/10-conservation-and-flux#eq-dust-fixture) preserves its covariant conservation and breaks the gravitational equation. Conversely, ordinary matter divergence can vanish for a special varying metric and stress: [(7.12)](/source-readout/einstein-1916/07-vacuum-and-action#eq-trace-witness) with $\Sigma=\eta/(3\kappa)$ has $T^\alpha{}_{\mu}=\delta^\alpha_\mu/(3\kappa)$ and $e=0$. A constant metric is sufficient to eliminate all such exchange terms, not necessary for every individual stress cancellation. Finally, four divergence equations do not determine ten arbitrary stress functions. Constitutive variables and their laws are addressed next rather than inferred from an equation count alone.



## Recover the fluid equations

**A constitutive stress readout turns matter primitives into the coupled stress. Its conservation law yields the fluid equations only with the normalization and constitutive inputs that make those operations valid.**

<a id="sec-fluid"></a>

## 11. Fluid constitutive readouts and Euler equations

Part D supplies constitutive information that a generic stress tensor cannot recover by itself. In §19 Einstein introduces pressure $p$, a density variable $\rho$, a relation between them and a normalized four-velocity. His footnote defines the comoving energy density as $\epsilon=\rho-p$. Thus his $\rho$ is not the variable often called energy density in modern notation. We preserve this convention.

On the existing realization add smooth $p,\rho$ and a calibrated vector $v$, initially retaining the discrepancies $n-1=\eta(v,v)-1$ and $\Phi(p,\rho)$ for the supplied equation-of-state relation. Define <a id="eq-11-1"></a><a id="eq-fluid-source"></a>

$$
\Sigma^{\rm fl}_{ab}=-p\eta_{ab}+\rho v_av_b,\qquad
 v_a=\eta_{ab}v^b,\qquad u=E^{-1}v.
\tag{11.1}
$$

 The physical constitutive form is inherited. Its forward operation gives <a id="eq-11-2"></a><a id="eq-11-3"></a><a id="eq-fluid-stress"></a><a id="eq-fluid-mixed"></a>

$$
\begin{aligned}
 T^{\rm fl}_{\mu\nu}&=-pg_{\mu\nu}+\rho u_\mu u_\nu,\qquad
 T^{\mu\nu}_{\rm fl}=-pq^{\mu\nu}+\rho u^\mu u^\nu,&&\text{(11.2)}\\
 T^\mu{}_{\nu,\rm fl}&=-p\delta^\mu_\nu+\rho u^\mu u_\nu,
 \qquad g(u,u)=\eta(v,v).
&&\text{(11.3)}\end{aligned}
$$

 Indeed $E^{\mathsf T}v_{\rm lower}=gu$, and the tensor operations already proved recover the remaining forms. These are Einstein <span className="upright">(58)</span>, Einstein <span className="upright">(58a)</span>, Einstein <span className="upright">(58b)</span>. On $n=1$, <a id="eq-11-4"></a><a id="eq-fluid-epsilon"></a>

$$
\Sigma^{\rm fl}_{ab}v^av^b=\rho-p=\epsilon,
 \quad \operatorname{tr}_\eta\Sigma^{\rm fl}=\rho-4p,
 \quad \Sigma^{\rm fl}_{\rm comoving}=\operatorname{diag}(p,p,p,\rho-p).
\tag{11.4}
$$

 No extra thermodynamic or particle-number law is inferred from that definition.

Define, for a scalar $s$, <a id="eq-11-5"></a><a id="eq-fluid-kinematics"></a>

$$
\dot s=v^aD_as,\qquad \vartheta=D_av^a,\qquad a_b=v^aD_av_b.
\tag{11.5}
$$

 The product rule and $D\eta=0$ give the full raw divergence <a id="eq-11-6"></a><a id="eq-fluid-divergence"></a>

$$
\mathscr R_b^{\rm fl}:=D_a\Sigma^a{}_{b,\rm fl}
 =v_b(\dot\rho+\rho\vartheta)+\rho a_b-D_bp.
\tag{11.6}
$$

 Its coordinate readout is <a id="eq-11-7"></a><a id="eq-fluid-div-readout"></a>

$$
E^b{}_{\mu}\mathscr R_b^{\rm fl}
 =\nabla_\alpha T^\alpha{}_{\mu,\rm fl}
 =\nu^{-1}\partial_\alpha(\nu T^\alpha{}_{\mu,\rm fl})
 -\tfrac12\partial_\mu g_{\alpha\beta}T^{\alpha\beta}_{\rm fl}.
\tag{11.7}
$$

 Substitution into the recovered Einstein <span className="upright">(57a)</span> is therefore exactly the source equation $\mathscr R^{\rm fl}=0$, with the same comparison connection as gravity.

<a id="thm-fluid"></a>

### Theorem 11.1 (Reversible energy and Euler decomposition)

On $\eta(v,v)=1$, put <a id="eq-11-8"></a><a id="eq-fluid-projections"></a>

$$
\Pi_b{}^c=\delta_b^c-v_bv^c,\qquad
 \mathscr E=\dot{(\rho-p)}+\rho\vartheta,\qquad
 \mathscr P_b=\rho a_b-\Pi_b{}^cD_cp.
\tag{11.8}
$$

 Then <a id="eq-11-9"></a><a id="eq-fluid-split"></a>

$$
\mathscr R_b^{\rm fl}=v_b\mathscr E+\mathscr P_b,
 \qquad v^b\mathscr R_b^{\rm fl}=\mathscr E,
 \qquad v^b\mathscr P_b=0.
\tag{11.9}
$$

 Consequently the four conservation equations are equivalent to <a id="eq-11-10"></a><a id="eq-euler"></a>

$$
\boxed{\dot\epsilon+(\epsilon+p)\vartheta=0,\qquad
 \rho a_b=(\delta_b^c-v_bv^c)D_cp.}
\tag{11.10}
$$

 The second equation has three independent components in this normalized sector.

<a id="proof-thm-fluid"></a>

### Proof.

Differentiating $\eta(v,v)=1$ gives $v^ba_b=0$. Contract [(11.6)](/source-readout/einstein-1916/11-fluids#eq-fluid-divergence) with $v^b$ to obtain $\mathscr E$, then subtract $v_b\mathscr E$ to obtain $\mathscr P$. Conversely the first equality in [(11.9)](/source-readout/einstein-1916/11-fluids#eq-fluid-split) reconstructs the original divergence from the scalar and orthogonal covector. The inverse map is $(e,p_b)\mapsto v_be+p_b$, with $v^bp_b=0$. No division by $\rho$ is used.

$\square$

The coordinate Euler equation is <a id="eq-11-11"></a><a id="eq-coordinate-euler"></a>

$$
\rho u^\alpha\nabla_\alpha u_\mu
 =(\delta_\mu^\nu-u_\mu u^\nu)\partial_\nu p.
\tag{11.11}
$$

 This expands Einstein’s substitution, rather than adding a distinct material law.

The algebraic decomposition $\mathscr R=v_{\rm lower}\mathscr E+\mathscr P$ remains true for unnormalized $v$ under the same definitions, but its projection interpretation does not. The exact omitted terms are <a id="eq-11-12"></a><a id="eq-11-13"></a><a id="eq-fluid-norm-defect"></a>

$$
\begin{aligned}
 v^b\mathscr R_b&=\mathscr E+(n-1)(\dot\rho+\rho\vartheta)+\tfrac\rho2\dot n,
 &&\text{(11.12)}\\
 v^b\mathscr P_b&=\tfrac\rho2\dot n+(n-1)\dot p.
&&\text{(11.13)}\end{aligned}
$$

 This distinction is included in the public controls. One earlier test wrongly expected the algebraic decomposition itself to fail off normalization; the corrected test checks the actual projection and orthogonality assertions, with that development correction documented in the audit.

<a id="closure-degeneracy-and-verification-examples"></a>

### Closure, degeneracy and verification examples

The primitive reverse $v=Eu$ preserves the normalization, equation-of-state relation and target boundary data. The six listed functions $p,\rho,u^\mu$ and the four divergence equations recover the original system. Their count is not a general well-posedness proof. On $\rho=0$ and constant $p$, the stress is $-p\eta$ and its divergence vanishes for any normalized $v$; the velocity is not determined. The gravitational conservation identities also prevent counting the material divergence equations as independent additional metric equations. Einstein’s residual coordinate-function count after volume specialization is retained as bookkeeping, not a global gauge-fixing theorem.

The earlier pressureless coupled fixture [(10.22)](/source-readout/einstein-1916/10-conservation-and-flux#eq-dust-fixture) now has its constitutive data: $v=(0,0,0,1)$, $p=0$, $\rho=\epsilon_d$. For an independent radiation-fluid fixture, take <a id="eq-11-14"></a><a id="eq-radiation-fixture"></a>

$$
E_r=\operatorname{diag}(r^{1/5},r^{1/5},r^{1/5},r^{-3/5}),\quad
 \epsilon_r=\frac3{25\kappa}r^{-4/5},\quad
 p=\frac{\epsilon_r}{3},\quad \rho=\frac{4\epsilon_r}{3}.
\tag{11.14}
$$

 The constitutive operation gives $\Sigma=\operatorname{diag}(\epsilon_r/3,\epsilon_r/3,\epsilon_r/3,\epsilon_r)$, with zero trace. Both projected fluid equations and $\mathscr G=\kappa\Sigma$ hold in the same geometry. Substituting $\epsilon_r$ for Einstein’s $\rho$ would change both the stress and the equations.

A separate fixed-background test exercises a nonzero pressure gradient and acceleration: with $N=1+x$, $E=\operatorname{diag}(1,1,1,N)$, $v=(0,0,0,1)$, choose $p=2/N-1$ and $\rho=2/N$ on $0<x<1$. Then $\epsilon=1$, $a_1=-1/N$, and $\partial_1p=-2/N^2$, so [(11.10)](/source-readout/einstein-1916/11-fluids#eq-euler) holds. This is a fluid calculation on a prescribed flat accelerated geometry, not a coupled solution with that geometry and nonzero stress. The classification prevents a successful matter example from being joined to a different gravitational preparation.



## Recover Maxwell operations and stress

**The electromagnetic potential, field, current and stress occupy distinct levels. The same geometry carries their derivative operations, gauge fibre and transfer identities, including the information that stress alone cannot recover.**

<a id="sec-em"></a>

## 12. Electromagnetic fields, Maxwell operations and stress

Einstein’s §20 starts with a potential, constructs its antisymmetric derivative, raises indices with the metric, supplies a current and derives the electromagnetic stress through a transfer identity. Its heading refers to vacuum, but its displayed sourced equation includes a current. We retain that current as an independent input and keep the original signs and index order.

<a id="primitive-coverage-and-potential-contact"></a>

### Primitive coverage and potential contact

Add a calibrated covector $\alpha$, an independent antisymmetric array $f_{ab}$ and a calibrated current $j^a$. Define <a id="eq-12-1"></a><a id="eq-em-readouts"></a>

$$
\varphi=E^{\mathsf T}\alpha,\qquad \mathsf F=E^{\mathsf T}fE,\qquad J=E^{-1}j.
\tag{12.1}
$$

 The reverse maps are $\alpha=E^{-\mathsf T}\varphi$, $f=E^{-\mathsf T}\mathsf FE^{-1}$ and $j=EJ$. Together with the local metric section they cover every local target primitive tuple. Under a frame change transform $\alpha'=\Lambda^{-\mathsf T}\alpha$, $f'=\Lambda^{-\mathsf T}f\Lambda^{-1}$ and $j'=\Lambda j$ so that all readouts are preserved.

Initially retain the contact and Maxwell residuals <a id="eq-12-2"></a><a id="eq-em-residuals"></a>

$$
k_{ab}=f_{ab}-(D_b\alpha_a-D_a\alpha_b),\quad
 h_{abc}=D_af_{bc}+D_bf_{ca}+D_cf_{ab},\quad
 m^a=D_bf^{ab}-j^a.
\tag{12.2}
$$

 The derivative intertwiner gives <a id="eq-12-3"></a><a id="eq-potential-operation"></a>

$$
E^a{}_{\mu}E^b{}_{\nu}(D_b\alpha_a-D_a\alpha_b)
 =\partial_\nu\varphi_\mu-\partial_\mu\varphi_\nu.
\tag{12.3}
$$

 Coordinate connection terms cancel by symmetry. Equivalently, using the frame structure coefficients, $D_b\alpha_a-D_a\alpha_b=e_b\alpha_a-e_a\alpha_b+c^c{}_{ab}\alpha_c$. This recovers Einstein <span className="upright">(59)</span>, with $\mathsf F=-\mathrm{d}\varphi$ when contact holds. On the raw domain, <a id="eq-12-4"></a><a id="eq-contact-full"></a>

$$
\mathsf F=-\mathrm{d}\varphi+K,\qquad \mathrm{d}\mathsf F=\mathrm{d}K,
 \qquad K=\tfrac12k_{ab}\theta^a\wedge\theta^b.
\tag{12.4}
$$

 Thus zero contact gives the homogeneous equations $h=0$, or <a id="eq-12-5"></a><a id="eq-homogeneous-maxwell"></a>

$$
\partial_\tau\mathsf F_{\rho\sigma}
 +\partial_\rho\mathsf F_{\sigma\tau}
 +\partial_\sigma\mathsf F_{\tau\rho}=0,
\tag{12.5}
$$

 recovering Einstein <span className="upright">(60)</span>. Bare frame-component derivatives are insufficient: a position-dependent Lorentz boost of rapidity $x^1$ with constant coordinate potential $\mathrm{d}x^1$ has actual field zero, but bare antisymmetrized calibrated derivatives give a nonzero $14$ component.

<a id="thm-potential"></a>

### Proposition 12.1 (Local potential section and gauge fibre)

On a star-shaped coordinate neighborhood centered at zero, every smooth closed two-form has an Einstein-convention potential <a id="eq-12-6"></a><a id="eq-potential-section"></a>

$$
\varphi_\mu(x)=-\int_0^1s\,x^\nu\mathsf F_{\nu\mu}(sx)\mathrm{d}s,
 \qquad \mathsf F=-\mathrm{d}\varphi.
\tag{12.6}
$$

 Locally two potentials with the same field differ by $\mathrm{d}\chi$.

<a id="proof-thm-potential"></a>

### Proof.

Differentiate under the finite integral and use the cyclic identity. The antisymmetric derivative becomes the integral of $\mathrm{d}[s^2\mathsf F_{\mu\nu}(sx)]/\mathrm{d}s$ with the sign specified in [(12.3)](/source-readout/einstein-1916/12-electromagnetism#eq-potential-operation). Smoothness makes the lower endpoint zero; the upper endpoint gives the field. A difference of potentials is a closed one-form, whose radial integral supplies a scalar primitive. In calibrated variables the gauge change is $\alpha_a\mapsto\alpha_a+e_a\chi$.

$\square$

This reconstructs the field, not necessarily the original potential representative. It is a local result; global topology, flux sectors and fixed boundary potential data require additional specifications. Gauge comparisons are allowed only when the retained observables and boundary data agree. The primitive target in the original already contains a potential, so target-potential coverage does not require assuming global exactness for every closed field.

<a id="index-raising-sourced-divergence-and-charge-conservation"></a>

### Index raising, sourced divergence and charge conservation

The raising operation is <a id="eq-12-7"></a><a id="eq-em-raising"></a>

$$
f^{ab}=\eta^{ac}\eta^{bd}f_{cd},\qquad
 \mathsf F^{\mu\nu}=(E^{-1})^\mu{}_a(E^{-1})^\nu{}_bf^{ab}
 =q^{\mu\alpha}q^{\nu\beta}\mathsf F_{\alpha\beta},
\tag{12.7}
$$

 recovering Einstein <span className="upright">(62)</span>. Contracting the derivative slot with the second upper field slot gives the exact residual map <a id="eq-12-8"></a><a id="eq-maxwell-divergence"></a>

$$
\boxed{(E^{-1})^\mu{}_am^a
 =\nabla_\nu\mathsf F^{\mu\nu}-J^\mu
 =\nu^{-1}\partial_\nu(\nu\mathsf F^{\mu\nu})-J^\mu.}
\tag{12.8}
$$

 The connection acting on the first field index contracts a symmetric pair against antisymmetry and vanishes; the remaining trace supplies $\partial\log\nu$. At $m=0,\nu=1$ this is precisely Einstein <span className="upright">(63)</span>. It differentiates the *second* index, in accordance with the original convention.

Multiply [(12.8)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-divergence) by $\nu$, differentiate in $\mu$, and commute partial derivatives. Antisymmetry cancels the double derivative, proving <a id="eq-12-9"></a><a id="eq-charge-residual"></a>

$$
\nabla_\mu(J^\mu+m^\mu)=0,
 \qquad m^\mu=(E^{-1})^\mu{}_am^a.
\tag{12.9}
$$

 On Maxwell’s equation this is $D_aj^a=0$, equivalently $\partial_\mu(\nu J^\mu)=0$. A nonconserved prescribed current is a failed candidate, not permission to redefine the source after calculating a field.

<a id="the-original-electric-and-magnetic-component-systems"></a>

### The original electric and magnetic component systems

In the unit-volume chart use Einstein’s definitions <a id="eq-12-10"></a><a id="eq-em-components"></a>

$$
(\mathsf F_{23},\mathsf F_{31},\mathsf F_{12})=\mathbf h,\quad \mathsf F_{i4}=e_i,
 \qquad (\mathsf F^{23},\mathsf F^{31},\mathsf F^{12})=\mathbf h',\quad \mathsf F^{i4}=-e'_i.
\tag{12.10}
$$

 Expand [(12.5)](/source-readout/einstein-1916/12-electromagnetism#eq-homogeneous-maxwell) and [(12.8)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-divergence), with $J^i=i_i$ and $J^4=\rho_{\rm el}$: <a id="eq-12-11"></a><a id="eq-12-12"></a><a id="eq-maxwell-vector-hom"></a><a id="eq-maxwell-vector-src"></a>

$$
\begin{aligned}
 \partial_t\mathbf h+\operatorname{curl}\mathbf e&=0,&
 \operatorname{div}\mathbf h&=0,&&\text{(12.11)}\\
 \operatorname{curl}\mathbf h'-\partial_t\mathbf e'&=\mathbf i,&
 \operatorname{div}\mathbf e'&=\rho_{\rm el}.
&&\text{(12.12)}\end{aligned}
$$

 These recover Einstein <span className="upright">(60a)</span>, Einstein <span className="upright">(60b)</span>, Einstein <span className="upright">(61)</span>, Einstein <span className="upright">(63a)</span> and Einstein <span className="upright">(64)</span>. No extra $4\pi$ or unit coefficient has been inserted. The primed and unprimed arrays need not coincide: even the constant unit-volume calibration $E=\operatorname{diag}(2,3,1,1/6)$ gives <a id="eq-12-13"></a><a id="eq-em-component-control"></a>

$$
\mathbf e'=(9e_1,4e_2,36e_3),\qquad
 \mathbf h'=(h_1/9,h_2/4,h_3/36).
\tag{12.13}
$$

 The geometry is flat in rescaled coordinates, but its coordinate constitutive relation is not the Cartesian one.

<a id="transfer-and-the-electromagnetic-stress-calculation"></a>

### Transfer and the electromagnetic stress calculation

Define <a id="eq-12-14"></a><a id="eq-em-transfer"></a>

$$
\xi_b=f_{ba}j^a,\qquad I=f_{ab}f^{ab},
 \qquad \xi_\mu=E^b{}_{\mu}\xi_b=\mathsf F_{\mu\alpha}J^\alpha.
\tag{12.14}
$$

 The symbol $\xi$ avoids confusion with the gravitational coupling $\kappa$. The product/cyclic differentiation in Einstein’s §20 leads to <a id="eq-12-15"></a><a id="eq-12-16"></a><a id="eq-12-17"></a><a id="eq-em-stress-source"></a><a id="eq-em-stress-cov"></a><a id="eq-em-stress-target"></a>

$$
\begin{aligned}
 \Sigma^a{}_{b,\rm em}&=-f_{bc}f^{ac}+\tfrac14\delta^a_b I,&&\text{(12.15)}\\
 \Sigma^{\rm em}_{ab}&=-f_{ac}\eta^{cd}f_{bd}+\tfrac14\eta_{ab}I,&&\text{(12.16)}\\
 T^\nu{}_{\sigma,\rm em}
 &=-\mathsf F_{\sigma\alpha}\mathsf F^{\nu\alpha}
 +\tfrac14\delta^\nu_\sigma\mathsf F_{\alpha\beta}\mathsf F^{\alpha\beta}.
&&\text{(12.17)}\end{aligned}
$$

 Symmetry and zero trace follow algebraically. The tensor multiplication and contraction maps prove the last equality from the first two. It is Einstein <span className="upright">(66a)</span>.

<a id="thm-em-energy"></a>

### Theorem 12.2 (Complete electromagnetic transfer identity)

For any smooth antisymmetric raw field and prescribed current in the compatible calculus, <a id="eq-12-18"></a><a id="eq-em-full-residual"></a>

$$
\boxed{D_a\Sigma^a{}_{b,\rm em}
 =\xi_b+f_{bc}m^c+\tfrac12f^{cd}h_{bcd}.}
\tag{12.18}
$$



<a id="proof-thm-em-energy"></a>

### Proof.

Use coordinate slots through the proved intertwiner. Set $H_{\sigma\alpha\beta}=\nabla_\sigma\mathsf F_{\alpha\beta}
+\nabla_\alpha\mathsf F_{\beta\sigma}+\nabla_\beta\mathsf F_{\sigma\alpha}$. Contract with $\mathsf F^{\alpha\beta}$. Compatibility makes the first term $\partial_\sigma I/2$, and relabelling shows that the other two terms are equal. Hence <a id="eq-12-19"></a><a id="eq-em-cyclic-product"></a>

$$
\mathsf F^{\alpha\beta}\nabla_\beta\mathsf F_{\sigma\alpha}
 =-\tfrac14\partial_\sigma I
 +\tfrac12\mathsf F^{\alpha\beta}H_{\sigma\alpha\beta}.
\tag{12.19}
$$

 The product rule gives 

$$
\mathsf F_{\sigma\alpha}(J^\alpha+m^\alpha)
 =\nabla_\beta(\mathsf F_{\sigma\alpha}\mathsf F^{\alpha\beta})
 -\mathsf F^{\alpha\beta}\nabla_\beta\mathsf F_{\sigma\alpha}.
$$

 Insert [(12.19)](/source-readout/einstein-1916/12-electromagnetism#eq-em-cyclic-product). Antisymmetry combines the first two divergence terms into [(12.17)](/source-readout/einstein-1916/12-electromagnetism#eq-em-stress-target); moving the homogeneous defect gives the plus sign and one-half coefficient in [(12.18)](/source-readout/einstein-1916/12-electromagnetism#eq-em-full-residual). Read out the remaining calibrated slot in reverse. No Maxwell equation was assumed in this calculation.

$\square$

On $m=h=0$, <a id="eq-12-20"></a><a id="eq-em-transfer-on-shell"></a>

$$
D_a\Sigma^a{}_{b,\rm em}=\xi_b,\qquad
 \nabla_\nu T^\nu{}_{\sigma,\rm em}=\xi_\sigma
 =\nu^{-1}\partial_\nu(\nu T^\nu{}_{\sigma,\rm em})
 -\tfrac12\partial_\sigma g_{\alpha\beta}T^{\alpha\beta}_{\rm em}.
\tag{12.20}
$$

 The unit-volume form is Einstein <span className="upright">(66)</span>; the metric derivative is essential. The raw example $E=I$, $\mathsf F_{12}=z$ with other independent components zero and $J=0$ satisfies the sourced divergence but has $H_{312}=1$ and $\nabla_\nu T^\nu{}_{\sigma}=(0,0,z,0)_\sigma$. Omitting the final term in [(12.18)](/source-readout/einstein-1916/12-electromagnetism#eq-em-full-residual) would wrongly make this nonclosed field conserved.

In a Cartesian calibrated frame the formulas reduce to <a id="eq-12-21"></a><a id="eq-12-22"></a><a id="eq-poynting"></a><a id="eq-force-components"></a>

$$
\begin{aligned}
 I&=2(|\mathbf h|^2-|\mathbf e|^2),&
 T^4{}_4&=\tfrac12(|\mathbf e|^2+|\mathbf h|^2),&
 T^i{}_4&=(\mathbf e\times\mathbf h)_i,&&\text{(12.21)}\\
 T_{ij}&=\tfrac12(|\mathbf e|^2+|\mathbf h|^2)\delta_{ij}-e_ie_j-h_ih_j,
 &&&\\
 (\xi_i)_{i=1}^3&=\rho_{\rm el}\mathbf e+\mathbf i\times\mathbf h,&
 \xi_4&=-\mathbf i\cdot\mathbf e.&&
&&\text{(12.22)}\end{aligned}
$$

 This verifies Einstein <span className="upright">(65)</span>, Einstein <span className="upright">(65a)</span> and the original Maxwell–Poynting specialization. The time sign describes loss of field energy when $\mathbf i\cdot\mathbf e>0$; spatial covariant and contravariant components must not be identified in this signature.

<a id="the-zero-transfer-branch-and-material-joins"></a>

### The zero-transfer branch and material joins

The original text asserts zero transfer for “free” electric masses and then explicitly uses $\xi=0$ when identifying Einstein <span className="upright">(66)</span> with the earlier matter-conservation law. The displayed Maxwell equations do not by themselves prove $\mathsf F_{\sigma\mu}J^\mu=0$. We therefore retain the zero-transfer restriction without promoting that prose to a general charge-motion theorem.

For an exact equation-level control, take $E=I$, $\varphi_4=-x^2/2$, $\varphi_i=0$, $\mathsf F_{14}=x$, and $J=(0,0,0,1)$. Both Maxwell systems hold, but $\xi=(x,0,0,0)\ne0$. This is a Maxwell solution on a fixed background, not a coupled gravitational solution or a model of freely moving charges.

If fluid and electromagnetic stress are joined to an independently supplied stress, retain the interface residual $\Delta\Sigma=\Sigma-\Sigma^{\rm fl}-\Sigma^{\rm em}$. On zero interface discrepancy, define $\mathscr K=\mathscr G-\kappa(\Sigma^{\rm fl}+\Sigma^{\rm em})$. The source Bianchi identity and Theorem [12.2](/source-readout/einstein-1916/12-electromagnetism#thm-em-energy) give <a id="eq-12-23"></a><a id="eq-joined-matter-residual"></a>

$$
D_a\mathscr K^a{}_b=-\kappa\left(
 \mathscr R_b^{\rm fl}+\xi_b+f_{bc}m^c+\tfrac12f^{cd}h_{bcd}\right).
\tag{12.23}
$$

 For nonzero interface discrepancy add $-\kappa D_a\Delta\Sigma^a{}_b$. On the fully coupled Maxwell sector the fluid equation is $\mathscr R_b^{\rm fl}=-\xi_b$; its energy and orthogonal force projections are $-v^b\xi_b$ and $-\Pi_b{}^c\xi_c$. The transfer cancels in the same-realization sum. A law linking charge current to fluid variables is additional information not supplied by these sections. For pure electromagnetic stress as the entire material source, the coupled equations require $\xi=0$, automatically satisfied when $J=0$.

Stress alone cannot replace the primitive electromagnetic state: $\Sigma^{\rm em}(f)=\Sigma^{\rm em}(-f)$, although a potential gauge transformation does not reverse the field. By Lemma [2.1](/source-readout/einstein-1916/02-source-and-recovery#thm-composition), a gravitational stress readout cannot be used to recover every subsequent electromagnetic operation. The field, current and retained potential/boundary records must remain available.

<a id="sec-em-example"></a>

### A complete same-realization Einstein–Maxwell check

Let $u=t-z$, $v_0=(t+z)/2$, choose a smooth amplitude $A(u)$ and a local primitive $B'=A$. Specify <a id="eq-12-24"></a><a id="eq-em-wave"></a>

$$
\varphi=B(u)\mathrm{d}x,\quad \mathsf F=A(u)\mathrm{d}x\wedge\mathrm{d}u,\quad J=0,
 \qquad H=\frac\kappa2 A(u)^2(x^2+y^2).
\tag{12.24}
$$

 The metric and explicit unit-volume calibration are <a id="eq-12-25"></a><a id="eq-wave-calibration"></a>

$$
\mathrm{d}s^2=-\mathrm{d}x^2-\mathrm{d}y^2+2\mathrm{d}u\mathrm{d}v_0+H\mathrm{d}u^2,
 \qquad E_w=\begin{pmatrix}
 1&0&0&0\\0&1&0&0\\0&0&1-H/2&H/2\\0&0&-H/2&1+H/2
 \end{pmatrix}.
\tag{12.25}
$$

 Its determinant is one and $\theta^4-\theta^3=\mathrm{d}u$, so the calibrated field has $f_{14}=A$ and $f_{13}=-A$. In null coordinates the only nonzero connection types are <a id="eq-12-26"></a><a id="eq-wave-connection"></a>

$$
C^i{}_{uu}=\tfrac12\partial_iH\ (i=x,y),\quad
 C^{v_0}{}_{ui}=C^{v_0}{}_{iu}=\tfrac12\partial_iH,\quad
 C^{v_0}{}_{uu}=\tfrac12\partial_uH.
\tag{12.26}
$$

 They give <a id="eq-12-27"></a><a id="eq-wave-field-equation"></a>

$$
\operatorname{Ric}_{uu}=\tfrac12(H_{xx}+H_{yy})=\kappa A^2,
 \quad \mathcal R=0,\quad T_{\rm em}=A^2\mathrm{d}u\otimes\mathrm{d}u,
 \quad G=\kappa T_{\rm em}.
\tag{12.27}
$$

 All other Ricci components vanish. The field is closed since $\mathrm{d}A$ is proportional to $\mathrm{d}u$. Its only independent raised null-coordinate component is $\mathsf F^{xv_0}=-A(u)$, whose second-index divergence vanishes. Thus the primitive field, its stress and the gravitational equation hold jointly. The transverse curvature equation determines $H$ from the chosen amplitude; the stress was not defined after computing $G$.

For the executed profile $A=1+u$, $\kappa=2$, direct evaluation of the chart-tagged gravitational current gives $t=0$, while $T^4{}_4=T^3{}_4=(1+t-z)^2$. On the unit spatial cube, <a id="eq-12-28"></a><a id="eq-wave-flux"></a>

$$
Q_4=\frac{(1+t)^3-t^3}{3},\qquad
 \Phi_4^{\rm out}=t^2-(1+t)^2,\qquad Q_4'+\Phi_4^{\rm out}=0.
\tag{12.28}
$$

 This is a nonzero finite-flux check, not a claim that gravitational energy universally vanishes. Doubling the electromagnetic field while retaining the geometry still solves source-free Maxwell but quadruples the stress and violates the gravitational equation, explicitly rejecting an incompatible join.



## Fix the Newtonian normalization

**Controlled weak-field and slow-motion reductions connect the covariant theory to Newtonian acceleration. Derivative norms, matter scaling and the chosen quasi-static regime keep the approximation quantitative.**

<a id="sec-newton"></a>

## 13. Finite-order reconstruction and the Newtonian limit

Einstein’s §21 introduces weak metric departures from special relativity, normalization at spatial infinity, slow test motion and quasi-static source variation as distinct restrictions. We preserve their order. The approximation operation acts on the existing realization rather than defining a new source by its successful limiting answer.

<a id="thm-jets"></a>

### Theorem 13.1 (Finite-jet recovery)

Let $E(\varepsilon,x)$ be sufficiently smooth in $\varepsilon$ and spacetime variables on a fixed patch, with uniformly bounded inverse on the compact domain used. Finite Taylor coefficients in $\varepsilon$ commute with the recovered algebraic and differential operations, using truncated products and inverses and the derivative-norm remainder bounds required by each operation. In particular, with uniform $C^2$ control, <a id="eq-13-1"></a><a id="eq-linear-calibration"></a>

$$
E=I+\varepsilon H+O_{C^2}(\varepsilon^2)
 \quad\Longrightarrow\quad
 g=\eta+\varepsilon h+O_{C^2}(\varepsilon^2),\quad
 h=H^{\mathsf T}\eta+\eta H.
\tag{13.1}
$$

 Every symmetric coefficient $h$ has a lift $H=\eta h/2$.

<a id="proof-thm-jets"></a>

### Proof.

All readouts are finite products, contractions or inverses on the nondegenerate domain. The comparison uses first derivatives and curvature uses second derivatives. Taylor’s theorem, Leibniz’ rule and differentiation of $E^{-1}E=I$ determine the coefficient operations. The bounded inverse prevents denominator singularities; uniform derivative remainders justify differentiating before truncation. Differentiating the exact intertwining identities then proves coefficient equality. At second order, 

$$
h_2=H_2^{\mathsf T}\eta+\eta H_2+H_1^{\mathsf T}\eta H_1,
 \qquad H_2=\tfrac12\eta(h_2-H_1^{\mathsf T}\eta H_1),
$$

 showing constructive next-coefficient coverage. The smooth local section also lifts full nearby metric families.

$\square$

This is finite-order operation recovery, not a long-time Newtonian-limit theorem for arbitrary Einstein–matter solutions. Weak amplitude alone is insufficient: $h_{44}=\varepsilon^2\sin(x/\varepsilon)$ tends uniformly to zero but $\partial_x^2h_{44}=-\sin(x/\varepsilon)$ need not. The derivative control is a stated mathematical refinement of the approximation, not a rigor claim attributed to Einstein’s prose.

<a id="coordinate-time-and-the-slow-motion-operation"></a>

### Coordinate time and the slow-motion operation

For $v^i=\mathrm{d}x^i/\mathrm{d}t$, write $w^\mu=(v^1,v^2,v^3,1)$. Dividing the affine geodesic equation by $(\mathrm{d}t/\mathrm{d}s)^2$ and eliminating $\mathrm{d}^2t/\mathrm{d}s^2$ through its fourth component gives <a id="eq-13-2"></a><a id="eq-coordinate-time"></a>

$$
\boxed{\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}
 =-C^i{}_{\mu\nu}w^\mu w^\nu
 +C^4{}_{\mu\nu}w^\mu w^\nu v^i.}
\tag{13.2}
$$

 Its source form is $D_t(Ew)=C^4{}_{\mu\nu}w^\mu w^\nu Ew$. Coordinate time is generally nonaffine, so the final term cannot be discarded merely by choosing $t$ as parameter.

For $g=\eta+h$ to first order, $C^{i(1)}{}_{44}=-\partial_4h_{i4}+\partial_i h_{44}/2$. Taking slow motion and quasi-static variation in addition to weak field yields <a id="eq-13-3"></a><a id="eq-newton-motion"></a>

$$
\boxed{\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}=-\frac12\partial_i g_{44}}
\tag{13.3}
$$

 at the retained order, which is Einstein <span className="upright">(67)</span>. A sufficient local bound makes the discarded terms explicit. Let $\delta=\|h\|_\infty<1$ in maximum absolute row-sum norm, $M=\max|\partial_\lambda h_{\mu\nu}|$, $b=\sum_i|v^i|$ and $A_t=\max_i|\partial_4h_{i4}|$. Neumann inversion gives $\|q\|_\infty\le(1-\delta)^{-1}$, so connection components and their nonlinear corrections are bounded by $3M/[2(1-\delta)]$ and $3\delta M/[2(1-\delta)]$. Expanding [(13.2)](/source-readout/einstein-1916/13-newtonian-limit#eq-coordinate-time) then gives <a id="eq-13-4"></a><a id="eq-newton-error"></a>

$$
\left|\frac{\mathrm{d}^2x^i}{\mathrm{d}t^2}+\frac12\partial_i h_{44}\right|
 \le A_t+\frac{3M}{2(1-\delta)}
 [\delta+2b+b^2+b(1+b)^2].
\tag{13.4}
$$

 This is a chart-specific sufficient bound with fixed derivative units, not an optimal invariant trajectory estimate.

<a id="the-field-reduction-and-material-assumptions"></a>

### The field reduction and material assumptions

Expansion of the full curvature gives <a id="eq-13-5"></a><a id="eq-linear-Ric44"></a>

$$
\boxed{\operatorname{Ric}^{(1)}_{44}
 =\tfrac12\Delta h_{44}-\sum_i\partial_i\partial_4h_{i4}
 +\tfrac12\sum_i\partial_4^2h_{ii}.}
\tag{13.5}
$$

 It follows by inserting the linear Christoffel expression into [(2.6)](/source-readout/einstein-1916/02-source-and-recovery#eq-signs); Theorem [13.1](/source-readout/einstein-1916/13-newtonian-limit#thm-jets) supplies the same source response. The quasi-static approximation removes the last two terms. Pressure and spatial motion are separately negligible in Einstein’s material approximation, giving $T_{44}\simeq\rho$, $\tau\simeq\rho$ and a trace-reversed $44$ component $\rho/2$. Thus <a id="eq-13-6"></a><a id="eq-poisson-g44"></a>

$$
\tfrac12\Delta h_{44}=\tfrac12\kappa\rho,
 \qquad \boxed{\Delta g_{44}=\kappa\rho,}
\tag{13.6}
$$

 recovering Einstein <span className="upright">(68)</span>. Weak metric amplitude alone would not remove pressure: the exact comoving fluid form gives trace-reversed $44$ component $\rho/2+p$.

Define $\phi=(g_{44}-1)/2$. Subtracting the constant fixes $\phi\to0$ at infinity without changing the force. For smooth compactly supported density on Euclidean three-space, <a id="eq-13-7"></a><a id="eq-green-potential"></a>

$$
\Delta\phi=\tfrac12\kappa\rho,
 \qquad
 \boxed{\phi(\mathbf x)=-\frac\kappa{8\pi}
 \int\frac{\rho(\mathbf y)}{|\mathbf x-\mathbf y|}\mathrm{d}^3y.}
\tag{13.7}
$$

 This is Einstein <span className="upright">(68a)</span>. The coefficient follows from the outward flux of $\nabla(1/r)$, equal to $-4\pi$, and hence $\Delta(1/r)=-4\pi\delta$ distributionally. The difference of two globally regular decaying solutions is harmonic; the maximum principle on expanding balls proves uniqueness. On an exterior domain alone, decay does not eliminate all harmonic multipoles: inner boundary or flux data remain necessary.

A joined scalar check for a uniform ball of radius $R$ is <a id="eq-13-8"></a><a id="eq-poisson-ball"></a>

$$
\phi_{\rm in}=\frac{\kappa\rho}{12}(r^2-3R^2),\qquad
 \phi_{\rm out}=-\frac{\kappa\rho R^3}{6r},\qquad
 M=\frac{4\pi\rho R^3}{3}.
\tag{13.8}
$$

 Potential and radial derivative match at $R$, so no spurious surface source appears. This verifies a Poisson boundary operation, not an exact relativistic interior fluid solution.

Restoring physical time by $x^4=ct_{\rm phys}$ gives physical potential $U=c^2\phi$. Comparison with $U=-K\int\rho/r$ in Einstein’s mass-equivalent density convention yields <a id="eq-13-9"></a><a id="eq-kappa-units"></a>

$$
\boxed{\kappa_{\rm mass}=\frac{8\pi K}{c^2},\qquad
 T_{\rm energy}=c^2T_{\rm mass},\qquad
 \kappa_{\rm energy}=\frac{8\pi K}{c^4}.}
\tag{13.9}
$$

 The first is Einstein <span className="upright">(69)</span>; the second normalization is the same equation expressed with energy-density stress. No present-day numerical gravitational constant is inferred from the original historical estimate.



## Complete the central exterior

**The leading weak-field data do not supply every higher-order orbital term. A separately identified static spherical completion provides that missing dependency and the exact family used in the optical and orbital estimates.**

<a id="sec-exterior"></a>

## 14. The central exterior and its higher-order completion

Let $r=|\mathbf x|$, $n=\mathbf x/r$, $P=nn^{\mathsf T}$. Einstein’s first-order exterior Einstein <span className="upright">(70)</span> is <a id="eq-14-1"></a><a id="eq-central-first"></a>

$$
g_{ij}=-\delta_{ij}-\frac\alpha rP_{ij},\qquad
 g_{i4}=0,\qquad g_{44}=1-\frac\alpha r.
\tag{14.1}
$$

 A calibration is $E=I+\operatorname{diag}(\alpha P/(2r),-\alpha/(2r))+O_{C^2}(\alpha^2)$ on a compact region away from $r=0$. Its first metric variation has zero $\eta$-trace, so unit volume holds to this order. Substitution into the complete linearized Ricci tensor gives zero on $r>0$; the check includes all components, not just $44$.

The force is $\mathrm{d}^2\mathbf x/\mathrm{d}t^2=-\alpha\mathbf x/(2r^3)$. Joining it to [(13.7)](/source-readout/einstein-1916/13-newtonian-limit#eq-green-potential) with the same mass and asymptotic clock gives <a id="eq-14-2"></a><a id="eq-mass-alpha"></a>

$$
1-\frac\alpha r=1+2\phi=1-\frac{\kappa M}{4\pi r},
 \qquad
 \boxed{\alpha=\frac{\kappa M}{4\pi}=\frac{2KM}{c^2}.}
\tag{14.2}
$$

 The supplied Einstein <span className="upright">(70a)</span> prints $\kappa M/(8\pi)$; the factor-of-two inconsistency is documented rather than absorbed by changing the meaning of $M$.

Treating [(14.1)](/source-readout/einstein-1916/14-spherical-exterior#eq-central-first) as exact is a different and invalid recovery step: its Cartesian determinant is $-1+\alpha^2/r^2$ and its higher-order Ricci tensor is nonzero. Keeping only $g_{44}$ likewise preserves the Newtonian force but fails the full linear vacuum equation and halves the leading light deflection. The field retained for later operations must contain the required spatial information.

<a id="a-labelled-static-spherical-completion"></a>

### A labelled static spherical completion

The perihelion paragraph explicitly requires a more accurate field and cites earlier work. We now derive the needed exterior within the same source calculus, imposing an additional static spherical ansatz and asymptotic normalization. It is not a classification of all vacuum geometries or an exact metric claimed to appear in Einstein <span className="upright">(70)</span>.

Take coordinates $(r,\theta,\varphi,t)$ on $r>0$, $0<\theta<\pi$ and the unrestricted positive calibration <a id="eq-14-3"></a><a id="eq-raw-radial"></a>

$$
E_{\rm rad}=\operatorname{diag}(b(r),r,r\sin\theta,a(r)),\qquad a,b>0.
\tag{14.3}
$$

 Compute its comparison by [(4.6)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-omega-formula). Equivalently, its nonzero independent frame connections are <a id="eq-14-4"></a><a id="eq-radial-omega"></a>

$$
\omega^2{}_1=\frac{\theta^2}{br},\qquad
 \omega^3{}_1=\frac{\theta^3}{br},\qquad
 \omega^3{}_2=\frac{\cot\theta}{r}\theta^3,\qquad
 \omega^4{}_1=\frac{a'}{ab}\theta^4,
\tag{14.4}
$$

 with $\omega^1{}_2=-\omega^2{}_1$, $\omega^1{}_3=-\omega^3{}_1$, $\omega^2{}_3=-\omega^3{}_2$ and $\omega^1{}_4=\omega^4{}_1$. Exterior differentiation and the matrix products in [(6.1)](/source-readout/einstein-1916/06-curvature-and-variations#eq-framecurvature) give <a id="eq-14-5"></a><a id="eq-radial-Ricci"></a>

$$
\begin{aligned}
 \operatorname{Ric}_{rr}&=-\frac{rba''-ra'b'-2ab'}{rab},&&\text{(14.5)}\\
 \operatorname{Ric}_{tt}&=\frac{a(rba''-ra'b'+2ba')}{rb^3},\\
 \operatorname{Ric}_{\theta\theta}&=1-\frac1{b^2}+\frac{rb'}{b^3}-\frac{ra'}{ab^2},
 \qquad \operatorname{Ric}_{\varphi\varphi}=\sin^2\theta\operatorname{Ric}_{\theta\theta},
\end{aligned}
$$

 with off-diagonal components zero. The combination <a id="eq-14-6"></a><a id="eq-radial-reduction"></a>

$$
\frac{\operatorname{Ric}_{tt}}{a^2}+\frac{\operatorname{Ric}_{rr}}{b^2}
 =\frac{2(ab)'}{rab^3}
\tag{14.6}
$$

 shows that vacuum requires $ab$ constant. The asymptotic calibration $a,b\to1$ makes it one. The angular equation becomes $1-a^2-r(a^2)'=0$, whose integral gives <a id="eq-14-7"></a><a id="eq-exterior-calibration"></a>

$$
\boxed{A(r)=1-\frac\alpha r,\qquad
 E_{\rm ext}=\operatorname{diag}(A^{-1/2},r,r\sin\theta,A^{1/2}),
 \qquad
 \mathrm{d}s^2=A\mathrm{d}t^2-A^{-1}\mathrm{d}r^2-r^2\mathrm{d}\Omega^2.}
\tag{14.7}
$$

 Substitution into every component of [(14.5)](/source-readout/einstein-1916/14-spherical-exterior#eq-radial-Ricci) gives zero. The curvature itself is nonzero. We use the static positive-mass domain $r>\alpha>0$, not a global horizon extension or a material interior.

An equivalent Cartesian calibration is <a id="eq-14-8"></a><a id="eq-cartesian-exterior"></a>

$$
E_{\rm cart}=\begin{pmatrix}
 I_3+(A^{-1/2}-1)P&0\\0&A^{1/2}
 \end{pmatrix},\qquad \det E_{\rm cart}=1.
\tag{14.8}
$$

 Its spatial radial eigenvalue is $A^{-1/2}$ and both transverse eigenvalues are one. Its metric expands to [(14.1)](/source-readout/einstein-1916/14-spherical-exterior#eq-central-first). In ordinary spherical coordinates, however, $\nu=r^2\sin\theta$, not one. The two descriptions are related by their actual coordinate Jacobian and local spatial-frame rotation.

Schwarzschild’s cited mathematical expression uses areal radius $R=(r_0^3+\alpha^3)^{1/3}$ [\[12\]](/source-readout/einstein-1916/25-references#ref-12); our $r$ in [(14.7)](/source-readout/einstein-1916/14-spherical-exterior#eq-exterior-calibration) is that $R$, not his original $r_0$. The identity $R^2\mathrm{d}R=r_0^2\mathrm{d}r_0$ verifies the volume comparison, and $R-r_0$ begins at order $\alpha^3$ for fixed positive $r_0$. Only the translated mathematical equations are used from that source, not its translators’ introductory interpretation.

<a id="information-needed-beyond-a-first-order-metric"></a>

### Information needed beyond a first-order metric

The raw alternative <a id="eq-14-9"></a><a id="eq-Alambda"></a>

$$
A_\lambda=1-\frac\alpha r+\lambda\frac{\alpha^2}{r^2},\qquad b^2=A_\lambda^{-1}
\tag{14.9}
$$

 agrees with Einstein <span className="upright">(70)</span> to first order but gives angular vacuum residual $1-A_\lambda-rA_\lambda'=\lambda\alpha^2/r^2$. Its orbit polynomial differs from the vacuum result below by $-\lambda\alpha^2(w^2/\ell^2+w^4)$. For weak bound orbits $\ell^2$ is of order $\alpha p$, so this changes the leading relativistic orbital correction. A first-order metric alone does not determine the perihelion advance. The higher-order field law and asymptotic normalization are essential information, supplied by the explicitly labelled completion above.



## Read clocks and frequency transfer

**Static observers read proper time and compare frequencies through the same interval law. Exact lapse factors and explicit remainder estimates show what the leading redshift formula retains.**

<a id="sec-measurements"></a>

## 15. Rods, clocks and static frequency transfer

The observational readouts retain their measuring protocol: a specified observer, spatial direction, chart, local standard and endpoint or asymptotic condition. A coordinate-length statement is not promoted to an invariant deformation of a material body. The exterior geometry is vacuum; rods, massive particles and light are probes whose backreaction is neglected.

For a radial unit proper rod at fixed static time, the interval readout gives <a id="eq-15-1"></a><a id="eq-radial-rod"></a>

$$
\mathrm{d}\ell^2=A^{-1}\mathrm{d}r^2,
 \qquad \boxed{\mathrm{d}r_{\rm unit}=\sqrt A
 =1-\frac\alpha{2r}+O((\alpha/r)^2),}
\tag{15.1}
$$

 recovering Einstein <span className="upright">(71)</span>. Using the truncated first-order spatial metric as exact would instead give $(1+\alpha/r)^{-1/2}$; its first coefficient agrees and its second coefficient differs. For a tangent direction orthogonal to $n$, [(14.8)](/source-readout/einstein-1916/14-spherical-exterior#eq-cartesian-exterior) has unit eigenvalue, recovering Einstein <span className="upright">(71a)</span> in that local coordinate arrangement. It does not remove spatial curvature or make arbitrary global distance comparisons Euclidean.

A static clock obeys <a id="eq-15-2"></a><a id="eq-clock"></a>

$$
\boxed{\frac{\mathrm{d}s}{\mathrm{d}t}=\sqrt A,\qquad
 \frac{\mathrm{d}t}{\mathrm{d}s}=A^{-1/2}
 =1+\frac\alpha{2r}+O((\alpha/r)^2).}
\tag{15.2}
$$

 The second expression is the coordinate duration of one unit proper clock period, which is the quantity in Einstein <span className="upright">(72)</span>; the first is its reciprocal rate. For the general weak potential, <a id="eq-15-3"></a><a id="eq-clock-potential"></a>

$$
\frac{\mathrm{d}t}{\mathrm{d}s}=1-\phi+O(\phi^2)
 =1+\frac\kappa{8\pi}\int\frac{\rho(\mathbf y)}{|\mathbf x-\mathbf y|}\mathrm{d}^3y
 +O(\phi^2).
\tag{15.3}
$$

 It agrees with [(15.2)](/source-readout/einstein-1916/15-clocks-and-frequency#eq-clock) under the same mass normalization [(14.2)](/source-readout/einstein-1916/14-spherical-exterior#eq-mass-alpha).

For $0\le x=\alpha/r\le q_0<1$, Taylor’s theorem supplies explicit same-family bounds: <a id="eq-15-4"></a><a id="eq-clock-bounds"></a>

$$
\begin{aligned}
 |\sqrt{1-x}-(1-x/2)|&\le\frac{x^2}{8(1-q_0)^{3/2}},&&\text{(15.4)}\\
 |(1-x)^{-1/2}-(1+x/2)|&\le\frac{3x^2}{8(1-q_0)^{5/2}}.
\end{aligned}
$$

 These control the derived exact exterior, not arbitrary unspecified higher-order completions of a truncated metric.

The original paper states the redshift consequence. Its endpoint operation follows explicitly from the same geometry. Staticity conserves the time component $k_t$ of a light covector along its Hamiltonian trajectory, because $q^{\mu\nu}k_\mu k_\nu/2$ has no explicit time dependence. A static unit observer has $U^t=1/\sqrt{g_{44}}$, so measured frequency is proportional to $k(U)=k_t/\sqrt{g_{44}}$. Therefore <a id="eq-15-5"></a><a id="eq-redshift"></a>

$$
\boxed{\frac{f_{\rm obs}}{f_{\rm emit}}
 =\sqrt{\frac{A(r_{\rm emit})}{A(r_{\rm obs})}},\qquad
 z=\frac{\lambda_{\rm obs}}{\lambda_{\rm emit}}-1
 =\sqrt{\frac{A(r_{\rm obs})}{A(r_{\rm emit})}}-1.}
\tag{15.5}
$$

 At first order, $z=\alpha(1/r_{\rm emit}-1/r_{\rm obs})/2+O(\alpha^2)$. Ratios compose through an intermediate static observer because its lapse cancels. Stationary source and receiver, positive lapse and the same normalization are essential; additional Doppler motion and time-dependent backgrounds are not included.



## Read null rays and optical bending

**Null propagation requires an operation separate from normalized timelike length. Optical variation and regularized endpoint integrals recover bending with the boundary geometry and error bounds stated explicitly.**

<a id="sec-light"></a>

## 16. Null rays, optical variation and bending

The calibrated null constraint is <a id="eq-16-1"></a><a id="eq-null"></a>

$$
\eta(E\mathrm{d}x,E\mathrm{d}x)=0\quad\Longleftrightarrow\quad
 g_{\mu\nu}\mathrm{d}x^\mu\mathrm{d}x^\nu=0,
\tag{16.1}
$$

 recovering Einstein <span className="upright">(73)</span>. It specifies local allowed directions, not a complete ray path. Einstein adds Huygens reasoning. We retain the direction-dependent static optical operation so that variation is performed before a propagation direction is fixed.

For $\mathrm{d}s^2=N^2\mathrm{d}t^2-s_{ij}\mathrm{d}x^i\mathrm{d}x^j$, $N>0$, the elapsed coordinate time along a future null path is <a id="eq-16-2"></a><a id="eq-optical-functional"></a>

$$
\mathcal T[\gamma]=\int\frac{\sqrt{s_{ij}x'^ix'^j}}{N}\mathrm{d}\lambda.
\tag{16.2}
$$

 Its fixed-spatial-endpoint stationary paths agree with spatial projections of null geodesics. To see the equivalence, keep the conserved $k_t$ in the static null Hamiltonian. The constraint is $s^{ij}k_ik_j=k_t^2/N^2$; the reduced fixed-energy line functional is $|k_t|\mathcal T$. Variation gives the optical metric $s_{ij}/N^2$, and choosing affine scale with $\mathrm{d}t/\mathrm{d}\lambda=k_t/N^2$ restores the spacetime geodesic. This is a classical geometrical-optics/test-ray operation, not a finite-wavelength Maxwell error estimate.

<a id="the-original-asymptotic-integral-and-its-finite-endpoint-qualification"></a>

### The original asymptotic integral and its finite-endpoint qualification

Take the first-order central metric and the straight reference ray $x=b>0$, $z=0$, with $y$ increasing along the ray; set $r=\sqrt{b^2+y^2}$. Its coordinate speed in that direction is <a id="eq-16-3"></a><a id="eq-light-speed"></a>

$$
\gamma=\sqrt{\frac{1-\alpha/r}{1+\alpha y^2/r^3}}
 =1-\frac\alpha{2r}\left(1+\frac{y^2}{r^2}\right)+O(\alpha^2).
\tag{16.3}
$$

 The supplied scan prints a positive correction on p. 822. Insertion into the preceding null equation gives a nonzero first-order residual. The negative sign is fixed by [(16.1)](/source-readout/einstein-1916/16-light-and-bending#eq-null), not selected to fit a desired bending angle.

The inward-positive integrand of the displayed original asymptotic calculation is <a id="eq-16-4"></a><a id="eq-bending-integrand"></a>

$$
I(y)=\partial_b\gamma^{(1)}
 =\frac{\alpha b}{2r^3}\left(1+\frac{3y^2}{r^2}\right),\qquad
 \mathcal B_I(y)=\frac\alpha{2b}\left(\frac yr+\frac{y^3}{r^3}\right).
\tag{16.4}
$$

 Differentiation verifies the primitive. Its infinite endpoint values give <a id="eq-16-5"></a><a id="eq-bending-leading"></a>

$$
\boxed{B=\int_{-\infty}^{\infty}I(y)\mathrm{d}y
 =\frac{2\alpha}{b}=\frac{\kappa M}{2\pi b}=\frac{4KM}{c^2b}.}
\tag{16.5}
$$

 The parameter form is Einstein <span className="upright">(74)</span>. The mass expression printed there propagates the inconsistent factor from Einstein <span className="upright">(70a)</span>; the same-mass join is [(14.2)](/source-readout/einstein-1916/14-spherical-exterior#eq-mass-alpha).

<a id="thm-optical"></a>

### Theorem 16.1 (Boundary-sensitive optical recovery)

Let $p=\mathrm{d}x/\mathrm{d}y$ and retain the full first-order optical integrand <a id="eq-16-6"></a><a id="eq-optical-L"></a>

$$
L(x,y,p)=\sqrt{1+p^2}
 +\frac{\alpha\sqrt{1+p^2}}{2r}
 +\frac{\alpha(xp+y)^2}{2r^3\sqrt{1+p^2}}+O(\alpha^2),
 \quad r=\sqrt{x^2+y^2}.
\tag{16.6}
$$

 On the straight reference path its first-order ray equation is <a id="eq-16-7"></a><a id="eq-optical-boundary"></a>

$$
x''=-\frac{3\alpha b^3}{2r^5},\qquad
 -x''=I(y)+\frac{\mathrm{d}}{\mathrm{d}y}P_{\rm end}(y),\qquad
 P_{\rm end}=\frac{\alpha b y}{r^3}.
\tag{16.7}
$$

 Thus the inward coordinate-direction change on a finite segment is <a id="eq-16-8"></a><a id="eq-finite-deflection"></a>

$$
B_{[y_1,y_2]}=\int_{y_1}^{y_2}I(y)\mathrm{d}y
 +[P_{\rm end}(y)]_{y_1}^{y_2}
\tag{16.8}
$$

 at the retained order. The endpoint term vanishes at asymptotic endpoints.

<a id="proof-thm-optical"></a>

### Proof.

At $p=0$ the zeroth-order integrand has $L_{pp}=1$. The linearized Euler–Lagrange equation is $x''=\partial_xL^{(1)}-\mathrm{d}(\partial_pL^{(1)})/\mathrm{d}y$, evaluated at $x=b,p=0$. There $L^{(1)}=-\gamma^{(1)}$ and $\partial_pL^{(1)}=P_{\rm end}$. Differentiation gives [(16.7)](/source-readout/einstein-1916/16-light-and-bending#eq-optical-boundary). Independently inserting the first-order metric and $v=(0,1,0)$ in [(13.2)](/source-readout/einstein-1916/13-newtonian-limit#eq-coordinate-time) gives the same transverse acceleration. The actual curvature primitive is $\mathcal B_{\rm ray}=\alpha(3y/r-y^3/r^3)/(2b)$, and $\mathcal B_{\rm ray}-\mathcal B_I=P_{\rm end}$, proving the endpoint relation directly.

$\square$

The finite quantity in [(16.8)](/source-readout/einstein-1916/16-light-and-bending#eq-finite-deflection) is explicitly a coordinate-direction change in the stated chart. A finite observer-measured angle also requires local observer frames at the endpoints; that additional identification is not asserted. At infinity the stated asymptotic normalization makes the comparison used by the original calculation. The two integrands are not pointwise identical. Deleting the spatial metric perturbation while retaining $g_{44}$ instead gives $\alpha/b$, half the full result, illustrating the information missing from the Newtonian force readout alone.

<a id="a-controlled-infinite-path-comparison"></a>

### A controlled infinite-path comparison

Pointwise truncation by itself does not justify an integral over an infinite path. The derived exact radial family provides a controlled comparison. Let $r_m$ be closest areal approach and $d=\alpha/r_m$. Null energy and angular momentum give the asymptotic impact parameter <a id="eq-16-9"></a><a id="eq-null-impact"></a>

$$
b=\frac{r_m}{\sqrt{1-d}}.
\tag{16.9}
$$

 With $u=r_m/r$, the half-angle denominator factors as <a id="eq-16-10"></a><a id="eq-null-factor"></a>

$$
(1-d)-u^2+du^3=(1-u^2)\left[1-d\left(u+\frac1{1+u}\right)\right].
\tag{16.10}
$$

 The substitution $u=\sin\theta$ removes the turning-point singularity and gives <a id="eq-16-11"></a><a id="eq-exact-bending"></a>

$$
B_{\rm exact}=2\int_0^{\pi/2}[1-dQ(\theta)]^{-1/2}\mathrm{d}\theta-\pi,
 \qquad Q(\theta)=\sin\theta+\frac1{1+\sin\theta}.
\tag{16.11}
$$

 For $0<d<2/3$ this is the outer turning branch. On the interval, $1\le Q\le3/2$ and $\int Q\mathrm{d}\theta=2$. Taylor’s theorem for $(1-x)^{-1/2}$ has nonnegative remainder bounded by $3x^2/[8(1-q)^{5/2}]$ on $0\le x\le q<1$. Since $\int Q^2\mathrm{d}\theta\le9\pi/8$, <a id="eq-16-12"></a><a id="eq-light-bound"></a>

$$
\boxed{0\le B_{\rm exact}-\frac{2\alpha}{b}
 \le\frac{27\pi d^2}{32(1-3d/2)^{5/2}}
 +\frac{2d^2}{1+\sqrt{1-d}}.}
\tag{16.12}
$$

 The first term bounds $B_{\rm exact}-2d$; the second is exactly $2d-2d\sqrt{1-d}$. This is a sufficient bound within the static spherical family, not an uncertainty estimate for a star with unspecified multipoles or surroundings.



## Recover the perihelion dependency

**The orbit calculation uses the declared higher-order static completion and the cited orbital dependency. Its controlled expansion makes the perihelion result part of the complete recovered chain.**

<a id="sec-orbit"></a>

## 17. Perihelion advance and the cited dependency

The 1916 article states Einstein <span className="upright">(75)</span> and refers the calculation to Einstein’s 1915 perihelion paper and Schwarzschild’s 1916 solution. The dependency used here is the cubic orbit polynomial and turning-point operation, not a source lift of every line of those separate papers [\[4\]](/source-readout/einstein-1916/25-references#ref-4), [\[12\]](/source-readout/einstein-1916/25-references#ref-12). The radial completion in Section [14](/source-readout/einstein-1916/14-spherical-exterior#sec-exterior) supplies the higher-order field information that Einstein <span className="upright">(70)</span> alone lacks.

On an equatorial timelike geodesic of [(14.7)](/source-readout/einstein-1916/14-spherical-exterior#eq-exterior-calibration), the time and angular source equations yield constants <a id="eq-17-1"></a><a id="eq-orbit-constants"></a>

$$
\mathcal E=A\frac{\mathrm{d}t}{\mathrm{d}s},\qquad
 \ell=r^2\frac{\mathrm{d}\varphi}{\mathrm{d}s}.
\tag{17.1}
$$

 The equatorial plane is preserved. Combining the constants with the calibrated norm one gives <a id="eq-17-2"></a><a id="eq-radial-orbit"></a>

$$
\left(\frac{\mathrm{d}r}{\mathrm{d}s}\right)^2
 =\mathcal E^2-A\left(1+\frac{\ell^2}{r^2}\right).
\tag{17.2}
$$

 For $w=1/r$ and $\ell\ne0$, $\mathrm{d}r/\mathrm{d}s=-\ell\,\mathrm{d}w/\mathrm{d}\varphi$, so <a id="eq-17-3"></a><a id="eq-cubic-orbit"></a>

$$
\boxed{(w')^2=\frac{\mathcal E^2-1}{\ell^2}
 +\frac\alpha{\ell^2}w-w^2+\alpha w^3.}
\tag{17.3}
$$

 This is Einstein 1915 equation (11), with the polynomial dictionary $B_{1915}^2=\ell^2$ and $2A_{1915}=\mathcal E^2-1$. It does not identify every earlier approximation-dependent parameter in that paper. Schwarzschild’s equation (18) gives the same cubic after its stated radial-variable transformation. Differentiating away from a turning point and continuing smoothly gives <a id="eq-17-4"></a><a id="eq-binnet"></a>

$$
w''+w=\frac\alpha{2\ell^2}+\frac{3\alpha}{2}w^2.
\tag{17.4}
$$

 No division by $w'=0$ at the turning point is required to assert the continued equation.

<a id="turning-roots-before-expansion"></a>

### Turning roots before expansion

Let the two positive turning values be $w_-<w_+$, and put $S=w_-+w_+$, $P=w_-w_+$. Requiring these roots in [(17.3)](/source-readout/einstein-1916/17-perihelion#eq-cubic-orbit) gives <a id="eq-17-5"></a><a id="eq-orbit-root-constants"></a>

$$
\ell^2=\frac\alpha{S-\alpha(S^2-P)},\qquad
 \mathcal E^2=1-\ell^2P(1-\alpha S).
\tag{17.5}
$$

 Expansion verifies the exact factorization <a id="eq-17-6"></a><a id="eq-orbit-factor"></a>

$$
(w-w_-)(w_+-w)[1-\alpha(S+w)].
\tag{17.6}
$$

 Define turning-radius elements <a id="eq-17-7"></a><a id="eq-orbit-elements"></a>

$$
a_o=\frac{r_{\max}+r_{\min}}2,\quad
 e=\frac{r_{\max}-r_{\min}}{r_{\max}+r_{\min}},\quad
 p=a_o(1-e^2),\quad \delta=\frac\alpha p.
\tag{17.7}
$$

 Then $w_\pm=(1\pm e)/p$. Substitution $w=(1+e\cos\chi)/p$ regularizes the integral before any expansion: <a id="eq-17-8"></a><a id="eq-orbit-integral"></a>

$$
\boxed{\Delta\varphi_{\rm radial}
 =2\int_0^\pi[1-\delta(3+e\cos\chi)]^{-1/2}\mathrm{d}\chi.}
\tag{17.8}
$$

 For $0<e<1$, $\delta>0$ and $q_*=\delta(3+e)<1$, the final factor in [(17.6)](/source-readout/einstein-1916/17-perihelion#eq-orbit-factor) is positive across the interval. The denominator of $\ell^2$ is positive because $2-\delta(3+e^2)>0$ on this domain. Moreover 

$$
\mathcal E^2=\frac{2[1-\delta(1+e)][1-\delta(1-e)]}
 {2-\delta(3+e^2)}>0,
$$

 and $\mathcal E^2<1$ follows from [(17.5)](/source-readout/einstein-1916/17-perihelion#eq-orbit-root-constants) since $1-2\delta>0$. The turning radii lie in the static exterior. This specifies a regular outer bound branch; radial orbits and a weak expansion at the separatrix are not included. An exactly circular curve has no distinguished perihelion direction, although a circular limit exists.

<a id="thm-perihelion"></a>

### Theorem 17.1 (Perihelion coefficient and remainder)

For the branch just specified, let $\Delta\varpi=\Delta\varphi_{\rm radial}-2\pi$. Then <a id="eq-17-9"></a><a id="eq-perihelion-leading"></a>

$$
\boxed{\Delta\varpi=3\pi\delta+O(\delta^2),}
\tag{17.9}
$$

 with the explicit bound <a id="eq-17-10"></a><a id="eq-perihelion-bound"></a>

$$
\boxed{0\le\Delta\varpi-3\pi\delta
 \le\frac{3\pi\delta^2(9+e^2/2)}{4(1-q_*)^{5/2}}.}
\tag{17.10}
$$



<a id="proof-thm-perihelion"></a>

### Proof.

Expand the regular integrand in [(17.8)](/source-readout/einstein-1916/17-perihelion#eq-orbit-integral), not the original singular turning-point expression. Its linear term is $\delta(3+e\cos\chi)/2$. Multiplication by two and integration gives $3\pi\delta$. Convexity makes the remainder nonnegative. The Taylor bound is $3\delta^2(3+e\cos\chi)^2/[8(1-q_*)^{5/2}]$. Use the exact integral $\int_0^\pi(3+e\cos\chi)^2\mathrm{d}\chi=\pi(9+e^2/2)$ and the factor two in [(17.8)](/source-readout/einstein-1916/17-perihelion#eq-orbit-integral) to obtain [(17.10)](/source-readout/einstein-1916/17-perihelion#eq-perihelion-bound).

$\square$

The same-mass normalization [(14.2)](/source-readout/einstein-1916/14-spherical-exterior#eq-mass-alpha) and the leading Kepler relation $T^2=4\pi^2a_o^3/(KM)$ yield <a id="eq-17-11"></a><a id="eq-einstein75"></a>

$$
\boxed{\Delta\varpi_{\rm leading}
 =\frac{3\pi\alpha}{a_o(1-e^2)}
 =\frac{6\pi KM}{a_o(1-e^2)c^2}
 =\frac{24\pi^3a_o^2}{T^2c^2(1-e^2)}.}
\tag{17.11}
$$

 This recovers the expression in Einstein <span className="upright">(75)</span>. The Kepler substitution is a leading-order conversion, not an exact relativistic period identity. The bound [(17.10)](/source-readout/einstein-1916/17-perihelion#eq-perihelion-bound) applies to the turning-radius elements defined here. Applying it to a differently fitted observational element set requires the corresponding conversion analysis.

<a id="scope-of-the-numerical-statements"></a>

### Scope of the numerical statements

The original last page reports approximately $1.7$ arcseconds for a solar-grazing ray, $0.02$ arcseconds for Jupiter and $43$ arcseconds per century for Mercury [\[5\]](/source-readout/einstein-1916/25-references#ref-5) (p. 822). They are retained as historical source-reported numbers. The article does not give a complete numerical input table sufficient for an independent audit of those values. No current astronomical data have been substituted, no mass or radius fitted to reproduce them, and no present-day observational claim is made. The verification below uses declared dimensionless diagnostic parameters to check the regularized integrals and bounds, not astronomical observations.



## Assemble the recovery theorem

**The local sections, comparison identities, matter maps and observational reductions now form one compatible reconstruction. The cumulative theorem states exactly which operations and target classes are covered.**

<a id="sec-recovery"></a>

## 18. The cumulative reconstruction theorem

The preceding sections have used one admitted support and literal preparation, one smooth geometric calculus, and explicit primitive matter extensions. The physical inputs and operation domains have not been moved into the admission predicate. This permits a precise cumulative statement.

<a id="thm-main"></a>

### Theorem 18.1 (Conditional source–readout recovery of the 1916 chain)

Fix a smooth four-dimensional event manifold with local coordinate patches, the Lorentz interval convention [(2.5)](/source-readout/einstein-1916/02-source-and-recovery#eq-conventions), the compatible torsion-free comparison sector, and the physical premises identified in the relevant sections: non-null interval stationarity and test-particle interpretation; Einstein’s vacuum and total-energy coupling laws; the specified symmetric matter stress or fluid and electromagnetic constitutive variables; and the stated boundary and approximation protocols. Then the following hold.

1.  Every local target metric and primitive matter tuple in the stated domains has a source realization over $Y_\star$, with explicit reverse maps. The metric fibre is exactly local Lorentz-frame freedom; matter transforms simultaneously, and potential gauge freedom has the separately stated local and boundary scope.

2.  Tensor products, contractions, index changes, compatible differentiation, curvature and its contractions are recovered by commuting operation identities. The raw nonmetricity, torsion, contact and Maxwell defects remain explicitly available before selecting their zero sectors.

3.  Fixed-endpoint non-null curve variation and the chosen fixed-chart field variation are recovered in both directions, including their allowed test directions and boundary terms. In a unit-volume chart the field variation and source Ricci contraction recover the selected vacuum equations. Early trace restriction gives a different and strictly weaker variational problem.

4.  The source canonical current recovers Einstein’s gravitational energy array with its coordinate dependence. The same-realization total-energy addition recovers the full coupled field equation and the original double-divergence, exchange and matter-conservation operations. General-chart volume defects and finite-region fluxes are retained.

5.  Fluid constitutive readouts recover the original density convention and an invertible energy/Euler split. Electromagnetic readouts recover both Maxwell systems, stress and the complete transfer identity, without claiming an unsupplied charge-motion law or an inverse from stress alone.

6.  Finite-jet recovery yields the stated Newtonian reduction under its weak, slow, quasi-static and material assumptions. The original static rod and clock coefficients and asymptotic bending are recovered with the documented printed-source qualifications. The explicitly labelled spherical completion and cited orbit dependency yield the leading perihelion expression and the proved same-family remainder bounds.

7.  Source solutions and target solutions of each selected local system correspond. This does not assert that arbitrary constitutive choices admit solutions, that an initial-value solution is unique, or that a finite set of observations determines every native or physical source.

<a id="proof-thm-main"></a>

### Proof.

Theorem [3.1](/source-readout/einstein-1916/03-calibrated-spacetime#thm-metric) supplies local metric sections and classifies their fibres. Equations [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map), [(9.1)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-stress-map) and [(12.1)](/source-readout/einstein-1916/12-electromagnetism#eq-em-readouts) supply the primitive inverse maps. Uniqueness of the comparison connection makes these maps compatible with frame changes and overlaps. Proposition [4.1](/source-readout/einstein-1916/04-comparison-and-tensors#thm-tensor) and Theorems [4.3](/source-readout/einstein-1916/04-comparison-and-tensors#thm-derivative) and [6.1](/source-readout/einstein-1916/06-curvature-and-variations#thm-curvature) establish the algebra and differential operations, including curvature before any field equation is imposed.

Equations [(5.2)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-length-variation)–[(5.4)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-source-geodesic) recover the curve operation. Theorem [7.1](/source-readout/einstein-1916/07-vacuum-and-action#thm-action), the surjective variation lift and [(7.10)](/source-readout/einstein-1916/07-vacuum-and-action#eq-source-EL) recover field stationarity, with the chart order and boundary conditions kept fixed. Invertibility of $E,q$ and the four-dimensional trace-reversal involution prove the two-way vacuum and coupled field implications. The original current and double-divergence chain is given by [(8.2)](/source-readout/einstein-1916/08-gravitational-energy#eq-tcanonical)–[(8.5)](/source-readout/einstein-1916/08-gravitational-energy#eq-mixed-vacuum) and Theorem [10.1](/source-readout/einstein-1916/10-conservation-and-flux#thm-doublediv); [(10.12)](/source-readout/einstein-1916/10-conservation-and-flux#eq-opposite-exchange) and [(10.15)](/source-readout/einstein-1916/10-conservation-and-flux#eq-matter-divergence) recover the matter statements. The independent curvature contraction proves their generally covariant residual form.

Theorems [11.1](/source-readout/einstein-1916/11-fluids#thm-fluid), [12.1](/source-readout/einstein-1916/12-electromagnetism#thm-potential) and [12.2](/source-readout/einstein-1916/12-electromagnetism#thm-em-energy), together with [(12.8)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-divergence), recover the primitive material operations. Theorem [13.1](/source-readout/einstein-1916/13-newtonian-limit#thm-jets) transports finite-order calculations under the stated norms; Sections [13](/source-readout/einstein-1916/13-newtonian-limit#sec-newton)–[17](/source-readout/einstein-1916/17-perihelion#sec-orbit) perform the specific reductions, optical variation and regularized integrals. Theorem [16.1](/source-readout/einstein-1916/16-light-and-bending#thm-optical) retains the endpoint term and Theorem [17.1](/source-readout/einstein-1916/17-perihelion#thm-perihelion) proves the orbital remainder.

Apply Lemma [2.1](/source-readout/einstein-1916/02-source-and-recovery#thm-composition) along these finite dependency chains. Starting with a target solution, choose the local calibration section, construct its comparison, and invert the primitive matter maps; the recovered identities make the corresponding source residuals vanish. Conversely, a zero source residual projects to the target one by the invertible slot maps. Compatible overlap records extend local metric and tensor statements to their atlas descriptions. Chart-tagged energy arrays are not improperly glued as tensors, and no global gauge or potential conclusion is added. The source discrepancies in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source) are explicitly excluded from literal simultaneous equivalence and replaced only by the proved, separately labelled equation-consistent statements.

$\square$



## What the reconstruction adds

**The construction uses established coframe and connection mathematics. Its distinctive result is the integrated source–readout account of the historical chain, with explicit coverage, discarded information and boundary-sensitive contracts.**

<a id="sec-comparison"></a>

## 19. Relation to established formulations and contribution

The calibration $E$ is a coframe, its internal freedom is the Lorentz-frame freedom, and $\omega(E)$ is the usual torsion-free metric comparison in that coframe. These structures are standard, as are differential forms, the curvature product and the relation between metric and frame tensors. Reviews of gravitational actions already treat a wide family of equivalent formulations [\[9\]](/source-readout/einstein-1916/25-references#ref-9). Studies of Einstein–Palatini equivalence address an independently varied connection and its additional projective structure [\[2\]](/source-readout/einstein-1916/25-references#ref-2). Our dependent $\omega(E)$ construction is different in scope: it does not derive an independent connection’s stationarity or establish a new equivalence of those actions.

Boundary-sensitive work is particularly relevant. De Paoli and Speziale examine a gauge-invariant tetrad symplectic potential and its relation to metric expressions [\[3\]](/source-readout/einstein-1916/25-references#ref-3). Oliveri and Speziale analyze boundary effects in tetrad variables and the resulting potential and charge distinctions [\[8\]](/source-readout/einstein-1916/25-references#ref-8). Barbero G. and collaborators establish metric/tetrad covariant-phase-space relations under specified boundary formulations [\[1\]](/source-readout/einstein-1916/25-references#ref-1). These results preclude interpreting a local coframe-to-metric map as an unprecedented general equivalence theorem. They also support the need to retain the variation and boundary contract rather than identify charge prescriptions solely because the bulk equations agree. We have not reconstructed their full symplectic or corner frameworks.

Similarly, covariant Noether-charge analysis has a developed treatment of Lagrangian and potential ambiguities [\[6\]](/source-readout/einstein-1916/25-references#ref-6). Einstein’s chart-tagged $t$ in this paper is the specific current recovered from his first-derivative function, not a new covariant gravitational energy tensor. The contrast in [(8.8)](/source-readout/einstein-1916/08-gravitational-energy#eq-nontensor-witness) and the boundary response in [(7.19)](/source-readout/einstein-1916/07-vacuum-and-action#eq-boundary-witness) make this limitation operational.

Relative to that literature, the present contribution is an integrated conditional reconstruction of Einstein’s entire 1916 chain within a specified source–readout architecture. Its mathematical content lies in the explicit local sections and joint primitive coverage; complete residual identities before restriction; variation coverage and the distinction between gauge selection and lost trace directions; the same-realization treatment of stress, current, material fields and observations; and a correspondence register linking the historical equations to these operations. The finite-endpoint optical comparison, controlled regularized integrals, and negative witnesses make information loss and approximation scope inspectable. These calculations are proved here, but no claim is made that each individual identity or counterexample is historically unprecedented.

The source architecture contributes a discipline of joint realization and licensed projection. It does not add a new propagating field or observational prediction to the selected classical theory. If the native support were suppressed after the realization has been supplied, the coframe calculations would still recover the same classical results. Accordingly, the support is an architectural antecedent and provenance object, not an independently demonstrated microscopic explanation of gravity. This limitation is part of the theorem, not an unaddressed inference hidden by terminology. The related source–readout gravity work [\[11\]](/source-readout/einstein-1916/25-references#ref-11) concerns a different reconstruction route and is cited for programme context, not substituted for the proofs in this article.



## Inspect the verification and its domain

**Executable checks accompany the proofs. Their exact, numerical and negative-control roles remain separate, as do the local reconstruction theorem and questions about global geometry or physical selection.**

<a id="sec-verification"></a>

## 20. Verification, limitations and reproducibility

The public package accompanies the mathematical proofs with executable symbolic and numerical checks. All six input archives were extracted and their recorded payload manifests checked; each nested predecessor archive matched the corresponding uploaded archive byte for byte. Their scientific checkers were then executed unchanged against the consolidated environment. Each complete result object reproduced its retained baseline object. The checks use SymPy [\[7\]](/source-readout/einstein-1916/25-references#ref-7); the numerical integral diagnostics use mpmath.

<div className="center">

<a id="table-1"></a>

| Suite                               | Exact groups | Passed | Negative controls |
|:------------------------------------|:-------------|:-------|:------------------|
| Metric and measurement              | 54           | 54     | 6                 |
| Differential calculus and curvature | 94           | 94     | 9                 |
| Vacuum, variation and energy        | 76           | 76     | 13                |
| Matter and conservation             | 94           | 94     | 17                |
| Fluids and electromagnetism         | 111          | 111    | 22                |
| Newtonian and observational chain   | 101          | 101    | 21                |
| Retained stage suites               | 530          | 530    | 88                |
| Publication cross-convention audit  | 40           | 40     | 11                |

</div>

The separately written final audit checks the consolidated section conventions, reverse and variation maps, action sign, finite boundary response, opposite exchange, original density normalization, electromagnetic energy, optical endpoint relation, mass join, turning factorization and approximation counterexamples. It is an additional implementation by the same AI-assisted workflow, not independent external review. Its forty groups overlap mathematically with earlier claims and are not forty new theorems. A negative control passes when an explicitly invalid shortcut is detected, not when an erroneous equation is accepted.

Eight additional high-precision diagnostics use $65$ decimal digits and strict inequalities comparing regularized light or orbit integrals with their leading values and the analytic bounds. They are separate from the $570$ exact groups. They are not interval-arithmetic certificates or empirical tests; the remainder proofs are in the article. The recorded precision and parameter values, rather than an unstated equality tolerance, specify these inequality diagnostics.

The supplied environment was Python 3.13.5, SymPy 1.14.0 and mpmath 1.3.0. Reproduction instructions, source hashes, pinned mathematical dependencies, complete results, logs, theorem and assumption registers, source provenance and a clean-extraction receipt are included. Another Python patch version may change environment metadata without changing scientific checks; the runner reports both full-object and scientific-content comparisons rather than concealing that difference.

The audit preserves substantive development corrections. An early fluid control incorrectly treated an off-normalization decomposition as failing, although only its projection interpretation fails. Another chosen frame/potential control accidentally gave zero bare antisymmetric derivative and was replaced by one that exposes the missing comparison term. A symbolic integration timeout in an earlier finite-flux computation was resolved by an explicit primitive and endpoint proof. These are recorded as development events, not relabelled as passing historical executions. The current final suites and final-publication audit all complete without failed groups.

The public package does not contain private research protocols, their prompts, inaccessible conversation references, or third-party page scans. The essential proofs and definitions are supplied here; the original scans remain cited sources, not redistributed supplements. Checksums establish byte integrity, not theorem validity. No result is described as proof-assistant certified or independently peer reviewed.

<a id="limits-of-the-reconstruction"></a>

### Limits of the reconstruction

The principal limits are mathematical and physical, not merely computational. Native admission does not select dimension, signature or action. All-state coverage is local or atlas-based on smooth nondegenerate fields; it is not a global coframe, horizon-extension or topology theorem. Matter solution correspondence is not general well-posedness for arbitrary equations of state. Electromagnetic stress does not determine its primitive field, and Maxwell’s equations alone do not supply a charge-motion law. The chart-tagged gravitational current is not a coordinate tensor or an observer-independent positive density. Bulk variational agreement does not identify arbitrary boundary ensembles, symplectic structures or charges.

The weak-field result is a controlled finite-order calculation with the stated derivative norms, not a general uniform-in-time convergence theorem. The exact radial completion is static and spherical. Its optical and orbital error bounds apply to that family and to the declared variables, not to unspecified stellar structure or fitted astronomical elements. Historical numerical claims are not new observations. None of the reconstructed nonlinear terms has been eliminated; no quantum compatibility or ultraviolet improvement is established or required for this paper.



## One connected reconstruction

**The result is a complete conditional realization of Einstein’s chain: preparation, joint geometry and matter, recovered operations, and measured consequences. Its equations and qualification registers remain available in the following chapters.**

<a id="sec-conclusion"></a>

## 21. Conclusion

Einstein’s 1916 construction can be represented as a conditional sequence of source preparations, joint geometric–matter realizations and explicit readout operations. Calibrated local intervals recover the metric with a complete local frame-fibre classification. The unique compatible comparison recovers differentiation and nonlinear curvature. Variation lifts and boundary identities recover the chosen field action and gravitational current without confusing a coordinate gauge with constrained dynamics. The same realization carries the coupled equation, opposite exchange, fluid system, electromagnetic stress and conservation operations. Finite-order and boundary-sensitive observation maps recover the Newtonian and static consequences, with the perihelion dependency completed explicitly.

The resulting reconstruction neither alters Einstein’s physical theory nor reduces it to a renamed final equation. It supplies a connected, auditable account of which structures and operations are preserved, what each coarse readout fails to distinguish, and which assumptions license every reduction. The distinction between native admission and physical realization remains explicit. The manuscript, equation correspondence and public verification package together constitute the standalone result.

<a id="declarations"></a>

### Declarations

**Author and affiliation.** Jeremy Rodgers, Independent Researcher.  
**Funding.** No external funding.  
**Availability.** The editable manuscript and public verification package are prepared for deposit with DOI [10.5281/zenodo.24064553](https://doi.org/10.5281/zenodo.24064553). This identifier is reserved; the present document does not assert that the record has already been publicly released.  
**Preparation and verification.** Generative AI assisted mathematical reconstruction, manuscript preparation and verification-code development. The mathematical evidence consists of the displayed arguments and the documented executions. Independent external peer review and proof-assistant certification are not claimed.



## Read the printed-source corrections

**The supplied historical copy contains expressions that cannot all hold with their surrounding equations. This register preserves the literal forms and the separately derived consistent replacements.**

<a id="app-source"></a>

## A. Printed-source qualifications and correction register

This appendix concerns the supplied copy of [\[5\]](/source-readout/einstein-1916/25-references#ref-5), checked against its page images and the publisher-hosted PDF. Printed page numbers, not PDF offsets, are used. The correction decisions follow direct algebra or explicit witnesses. No assertion is made about authorship of a typographical error, priority of its detection, editorial history, or later editions. The source’s valid equations are retained, and the inconsistent branch is identified rather than silently replaced.

<a id="the-rank-statement-on-page-784"></a>

### The rank statement on page 784

After discussing completely antisymmetric tensors, the copy prints “Symmetrische Tensoren” in the sentence denying existence above rank four. Taken literally for symmetric tensors, it is false: for a nonzero covector $a$, $a^{\otimes5}$ is a nonzero symmetric tensor. The valid statement in the surrounding discussion is that a completely antisymmetric tensor above rank four vanishes because every component repeats an index. Proposition [4.1](/source-readout/einstein-1916/04-comparison-and-tensors#thm-tensor) retains the arbitrary-rank symmetric tensor algebra and the correct exterior-algebra cutoff. This is a qualification of the printed word, not a modification of the transformation formulas Einstein <span className="upright">(14)</span>–Einstein <span className="upright">(15a)</span>.

<a id="the-trace-shift-footnote-on-page-804"></a>

### The trace-shift footnote on page 804

The footnote considers $B_{\mu\nu}+\lambda g_{\mu\nu}\operatorname{tr}_qB$ and states that setting it to zero returns $B=0$. In four dimensions its trace is $(1+4\lambda)\operatorname{tr}_qB=0$, so the reduction requires $\lambda\ne-1/4$. At the exceptional value, [(7.12)](/source-readout/einstein-1916/07-vacuum-and-action#eq-trace-witness) gives a nonzero $B=g/3$ satisfying the trace-free equation. The reconstruction retains the selected vacuum law and does not use the footnote as an unrestricted uniqueness theorem.

<a id="the-unnumbered-variation-sign-on-page-805"></a>

### The unnumbered variation sign on page 805

The line immediately before Einstein <span className="upright">(48)</span> prints a negative coefficient of $\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}\delta(\partial_\alpha q^{\mu\nu})$, whereas numbered Einstein <span className="upright">(48)</span> gives the positive coefficient. Theorem [7.1](/source-readout/einstein-1916/07-vacuum-and-action#thm-action) proves <a id="eq-A-1"></a><a id="eq-printed-action-comparison"></a>

$$
\delta H=-\operatorname{tr}(C_\mu C_\nu)\delta q^{\mu\nu}
 +\Gamma_{\!\mathrm E}^\alpha{}_{\mu\nu}\delta(\partial_\alpha q^{\mu\nu}).
\tag{A.1}
$$

 It agrees with numbered Einstein <span className="upright">(48)</span> and the ensuing field equation. The final publication audit also differentiates $H$ directly for $g=\operatorname{diag}(-1,-1,-1,N^2-\varepsilon N^4K)$, $N=1+x^2$, $K=1+x+x^2$. At $\varepsilon=0$, $\delta q^{44}=K$ and $\delta H=-2(N')^2K-NN'K'$, which rejects the opposite derivative sign without using a vacuum or unit-volume restriction.

<a id="the-gravitational-exchange-line-on-page-809"></a>

### The gravitational exchange line on page 809

Immediately before Einstein <span className="upright">(57)</span>, the copy prints 

$$
\partial_\alpha t^\alpha{}_{\sigma}
 +\tfrac12\partial_\sigma q^{\mu\nu}T_{\mu\nu}=0.
$$

 Numbered Einstein <span className="upright">(57)</span> uses that plus sign for the matter array $T$. Taken together with total conservation, the two plus signs would force all exchange to vanish. The action and field equation instead give <a id="eq-A-2"></a><a id="eq-exchange-print-correction"></a>

$$
\partial_\alpha t^\alpha{}_{\sigma}-e_\sigma=0,
 \qquad \partial_\alpha T^\alpha{}_{\sigma}+e_\sigma=0.
\tag{A.2}
$$

 The same-realization dust witness [(10.22)](/source-readout/einstein-1916/10-conservation-and-flux#eq-dust-fixture) has nonzero $e_4$ in [(10.23)](/source-readout/einstein-1916/10-conservation-and-flux#eq-dust-exchange). The printed gravitational residual is $16r^{-5/3}/(81\kappa)$, whereas both corrected relations and the full coupled field equation vanish. Numbered Einstein <span className="upright">(57)</span> and Einstein <span className="upright">(57a)</span> are retained unchanged.

<a id="the-mass-coefficient-on-page-819-and-its-propagation"></a>

### The mass coefficient on page 819 and its propagation

The supplied Einstein <span className="upright">(70a)</span> prints $\alpha=\kappa M/(8\pi)$. Yet the preceding Einstein <span className="upright">(68a)</span> and the displayed $g_{44}=1-\alpha/r$ imply <a id="eq-A-3"></a><a id="eq-printed-mass-comparison"></a>

$$
\phi=-\frac{\kappa M}{8\pi r},\qquad
 g_{44}=1+2\phi=1-\frac{\kappa M}{4\pi r},\qquad
 \alpha=\frac{\kappa M}{4\pi}.
\tag{A.3}
$$

 The latter agrees with the Newtonian force and general clock-period expression. The same $M$ and asymptotic time normalization are used throughout. The mass expression $\kappa M/(4\pi b)$ printed in Einstein <span className="upright">(74)</span> propagates this half-normalization; its parameter expression $2\alpha/b$ is correct. This is one inconsistency carried into a later expression, not two independent physical errors.

<a id="the-coordinate-light-speed-sign-on-page-822"></a>

### The coordinate light-speed sign on page 822

The copy prints a positive first-order correction to $\gamma=\sqrt{-g_{44}/g_{22}}$. In the stated ray direction, the displayed metric gives <a id="eq-A-4"></a><a id="eq-printed-light-comparison"></a>

$$
(1-\alpha/r)-(1+\alpha y^2/r^3)\gamma^2=0,
 \qquad
 \gamma=1-\frac\alpha{2r}\left(1+\frac{y^2}{r^2}\right)+O(\alpha^2).
\tag{A.4}
$$

 The printed positive choice leaves a nonzero first-order residual and reverses the inward-positive derivative integral. The reconstruction uses the root fixed by the null condition and retains the correct parameter bending result, with the mass correction above.

<a id="statements-requiring-hypotheses-rather-than-typographical-correction"></a>

### Statements requiring hypotheses rather than typographical correction

Several source statements are retained with explicit logical scope, not labelled transcription errors. The coordinate condition beside Einstein <span className="upright">(47a)</span> does not specify a constrained variational problem; the unrestricted-variation interpretation and the failure of early trace restriction are established in Section [7](/source-readout/einstein-1916/07-vacuum-and-action#sec-vacuum). The discussion of four material equations and the fluid variable count does not prove general initial-value well-posedness. The free-charge prose on p. 814 does not follow from the displayed Maxwell equations alone; the actual algebraic conservation conclusion uses $\xi=0$. Local flatness and local potential statements are not global topology theorems.

The original optical integral concerns asymptotic endpoints. The finite-endpoint term in Theorem [16.1](/source-readout/einstein-1916/16-light-and-bending#thm-optical) qualifies an extension of that operation; it does not invalidate the asymptotic result. Its finite output is a coordinate-direction change until observer frames are specified. Finally, Einstein <span className="upright">(75)</span> is a stated result with external dependencies. The exact spherical and orbit calculation here is identified as a completion of that dependency, not falsely attributed to intervening derivations in the 1916 article itself.

<a id="consolidation-changes-relative-to-the-checkpoints"></a>

### Consolidation changes relative to the checkpoints

The final audit introduced no alteration to the six retained scientific checkers. Their complete result objects reproduce. The publication adds a separately written forty-group audit and tightens two descriptions: finite optical bending is explicitly chart-dependent at finite endpoints, and the bound-orbit domain is accompanied by the positive factorization of $\mathcal E^2$. It also supplies the radial comparison one-forms explicitly, separates all theorem assumptions in a public register, and expands the equation correspondence to every numbered and lettered target. These are consolidation proofs and scope clarifications, not a claim that replay alone validates every theorem.



## Trace every original equation

**The correspondence register maps all 75 principal numbers and 26 lettered variants to their recovered operations. It preserves the original pagination and the exact scope of each correspondence.**

<a id="app-correspondence"></a>

## B. Complete original-equation correspondence

The register covers all 75 principal equation numbers and all 26 printed lettered variants, 101 entries in total. Printed page numbers refer to the original article. A present equation may recover several source forms by the tensor or variation identities proved in the adjoining text; the table is an operation map, not a claim that each historical equation is independent. Unnumbered discrepancies are recorded separately in Appendix [A](/source-readout/einstein-1916/22-printed-source-register#app-source). The machine-readable version is supplied in `registers/equation_correspondence.csv`.

<a id="table-1"></a>

| Original | Page | Recovered operation and present location                                                                                                | Scope                           |
|:---------|:-----|:----------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| \(1\)    | 777  | Local Lorentz interval; [(3.1)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-calibration)                                   | Inherited local interval.       |
| \(2\)    | 778  | Linear calibration of differentials; [(3.1)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-calibration)                      | Invertible calibration.         |
| \(3\)    | 778  | Metric and interval readout; [(3.1)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-calibration)                              | Exact.                          |
| \(4\)    | 778  | Special-relativistic calibration; [(3.1)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-calibration)                         | Exact special case.             |
| \(5\)    | 780  | Coordinate tangent transformation; [(3.7)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-coordinate-metric)                  | Invertible Jacobian.            |
| (5a)     | 780  | General contravariant vector transformation; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)             | Exact.                          |
| \(6\)    | 781  | Invariant vector-covector pairing; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                       | Arbitrary probes.               |
| \(7\)    | 781  | Covector transformation; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                                 | Exact.                          |
| \(8\)    | 782  | Contravariant tensor product; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                            | Exact.                          |
| \(9\)    | 782  | Rank-two contravariant transformation; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                   | Exact.                          |
| \(10\)   | 782  | Covariant tensor product; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                                | Exact.                          |
| \(11\)   | 782  | Covariant tensor transformation; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                         | Exact.                          |
| \(12\)   | 783  | Mixed tensor product; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                                    | Exact.                          |
| \(13\)   | 783  | Mixed tensor transformation; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                             | Exact.                          |
| \(14\)   | 783  | Contravariant symmetry; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                                  | Exact.                          |
| (14a)    | 783  | Covariant tensor symmetry; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                               | Exact.                          |
| \(15\)   | 784  | Contravariant antisymmetry; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                              | Exact.                          |
| (15a)    | 784  | Covariant tensor antisymmetry; [(4.1)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-tensor-map)                           | Exact.                          |
| \(16\)   | 787  | Inverse fundamental tensor; [(3.2)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-metricdet)                                 | Nondegenerate metric.           |
| \(17\)   | 788  | Reciprocal determinants; [(3.2)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-metricdet)                                    | Nondegenerate metric.           |
| \(18\)   | 788  | Invariant volume density; [(3.7)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-coordinate-metric)                           | Density convention.             |
| (18a)    | 789  | Natural volume element; [(3.2)](/source-readout/einstein-1916/03-calibrated-spacetime#eq-metricdet)                                     | Density readout.                |
| \(19\)   | 789  | Determinant-one coordinate transitions; [(6.6)](/source-readout/einstein-1916/06-curvature-and-variations#eq-volume-chart)              | Local oriented chart.           |
| \(20\)   | 790  | Stationary interval; [(5.1)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-length-action)                               | Inherited stationarity.         |
| (20a)    | 791  | Parameterized interval variation; [(5.1)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-length-action)                  | Regular non-null curve.         |
| (20b)    | 791  | Integrated variation and residual; [(5.2)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-length-variation)              | Boundary term retained.         |
| (20c)    | 791  | Proper-length Euler equation; [(5.3)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-geodesic-residual)                  | Affine normalization.           |
| (20d)    | 791  | First-kind bracket form; [(5.3)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-geodesic-residual)                       | Exact index conversion.         |
| \(21\)   | 791  | First-kind Christoffel bracket; [(4.10)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-christoffel)                        | Lower first index.              |
| \(22\)   | 792  | Geodesic equation; [(5.4)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-source-geodesic)                               | Affine non-null curve.          |
| \(23\)   | 792  | Raised Christoffel bracket; [(4.10)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-christoffel)                            | Compatible comparison.          |
| \(24\)   | 792  | Scalar gradient construction; [(5.5)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-hessian)                            | Derivative intertwiner.         |
| \(25\)   | 793  | Hessian along a geodesic; [(5.5)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-hessian)                                | Torsion-free sector.            |
| \(26\)   | 793  | Arbitrary covector derivative; [(4.12)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-D-intertwine)                        | Not only gradients.             |
| \(27\)   | 795  | Covariant rank-two derivative; [(5.6)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-ranktwo-derivative)                | All tensor components.          |
| \(28\)   | 796  | Determinant differentiation; [(5.7)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-inverse-det)                         | Nondegenerate metric.           |
| \(29\)   | 796  | Log-volume differentiation; [(5.8)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-volume-trace)                         | Exact.                          |
| (29a)    | 796  | Connection trace identity; [(5.8)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-volume-trace)                          | Compatible comparison.          |
| \(30\)   | 796  | Differentiated inverse identity; [(5.7)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-inverse-det)                     | Exact.                          |
| \(31\)   | 796  | Contravariant inverse derivative; [(5.7)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-inverse-det)                    | Exact.                          |
| \(32\)   | 796  | Covariant inverse derivative; [(5.7)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-inverse-det)                        | Exact.                          |
| \(33\)   | 796  | Metric derivative via first-kind bracket; [(5.9)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-metriccompatcomponents) | Compatible comparison.          |
| \(34\)   | 796  | Inverse metric derivative via connection; [(5.9)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-metriccompatcomponents) | Compatible comparison.          |
| \(35\)   | 797  | Vector divergence; [(5.10)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-vector-div)                                   | Volume retained.                |
| \(36\)   | 797  | Antisymmetric covector derivative; [(5.11)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-curl)                         | Original minus-d sign.          |
| \(37\)   | 797  | Cyclic derivative of antisymmetric tensor; [(5.12)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-cyclic)               | Antisymmetric field.            |
| \(38\)   | 798  | Contravariant rank-two derivative; [(4.12)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-D-intertwine)                    | Upper-slot plus signs.          |
| \(39\)   | 798  | Mixed tensor derivative; [(4.12)](/source-readout/einstein-1916/04-comparison-and-tensors#eq-D-intertwine)                              | Both slot actions.              |
| \(40\)   | 798  | Antisymmetric contravariant divergence; [(5.13)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-antisym-div)             | Second-index contraction.       |
| \(41\)   | 799  | Mixed divergence; [(5.14)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-mixed-div)                                     | Unrestricted tensor.            |
| (41a)    | 799  | Symmetric-stress divergence via metric; [(5.15)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-symmetric-div)           | Symmetry required.              |
| (41b)    | 799  | Symmetric-stress divergence via inverse; [(5.15)](/source-readout/einstein-1916/05-geodesics-and-divergences#eq-symmetric-div)          | Symmetry required.              |
| \(42\)   | 800  | Iterated covector derivative difference; [(6.3)](/source-readout/einstein-1916/06-curvature-and-variations#eq-einstein-commutator)      | Torsion-free form.              |
| \(43\)   | 800  | Riemann-Christoffel tensor; [(6.2)](/source-readout/einstein-1916/06-curvature-and-variations#eq-curvature-intertwine)                  | Full quadratic terms.           |
| \(44\)   | 801  | Contracted curvature and volume split; [(6.4)](/source-readout/einstein-1916/06-curvature-and-variations#eq-WS)                         | B equals minus Ricci.           |
| \(45\)   | 802  | Negative Christoffel convention; [(2.6)](/source-readout/einstein-1916/02-source-and-recovery#eq-signs)                                 | Exact dictionary.               |
| \(46\)   | 802  | Free-particle equation; [(7.1)](/source-readout/einstein-1916/07-vacuum-and-action#eq-physical-geodesic)                                | Physical premise retained.      |
| \(47\)   | 803  | Vacuum gravitational equation; [(7.3)](/source-readout/einstein-1916/07-vacuum-and-action#eq-vacuum-W)                                  | Unit-volume chart.              |
| (47a)    | 804  | Source realization of Hamiltonian function; [(7.4)](/source-readout/einstein-1916/07-vacuum-and-action#eq-source-action)                | Unrestricted chart extension.   |
| (47b)    | 805  | Field Euler equation; [(7.7)](/source-readout/einstein-1916/07-vacuum-and-action#eq-S-variation)                                        | Variation before gauge.         |
| \(48\)   | 805  | Action partial derivatives; [(7.9)](/source-readout/einstein-1916/07-vacuum-and-action#eq-H-partials)                                   | Positive derivative sign.       |
| \(49\)   | 805  | Canonical energy divergence; [(8.3)](/source-readout/einstein-1916/08-gravitational-energy#eq-energy-offshell)                          | Vacuum; raw defect shown.       |
| (49a)    | 806  | Fixed-region gravitational flux; [(8.6)](/source-readout/einstein-1916/08-gravitational-energy#eq-vacuum-flux)                          | Inward/outward sign explicit.   |
| \(50\)   | 806  | Quadratic gravitational energy; [(8.4)](/source-readout/einstein-1916/08-gravitational-energy#eq-tquad)                                 | Chart-tagged non-tensor.        |
| \(51\)   | 806  | Mixed vacuum field equation; [(8.5)](/source-readout/einstein-1916/08-gravitational-energy#eq-mixed-vacuum)                             | Equivalent residual.            |
| \(52\)   | 807  | Total-energy replacement; [(9.8)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-mixed-coupled)                         | Same realization.               |
| (52a)    | 808  | Trace-reversed mixed equation; [(10.2)](/source-readout/einstein-1916/10-conservation-and-flux#eq-P-residual)                           | Trace reversal invertible.      |
| \(53\)   | 808  | General gravitational field equation; [(9.9)](/source-readout/einstein-1916/09-matter-and-field-equations#eq-einstein-equation)         | Coupling inherited.             |
| \(54\)   | 808  | Triple-derivative cancellation; [(10.3)](/source-readout/einstein-1916/10-conservation-and-flux#eq-double-first)                        | General chart identity.         |
| \(55\)   | 809  | Double-divergence cancellation; [(10.4)](/source-readout/einstein-1916/10-conservation-and-flux#eq-double-full)                         | Zero at unit volume.            |
| \(56\)   | 809  | Total energy conservation; [(10.7)](/source-readout/einstein-1916/10-conservation-and-flux#eq-total-conservation)                       | Coupled unit-volume sector.     |
| \(57\)   | 809  | Matter exchange equation; [(10.12)](/source-readout/einstein-1916/10-conservation-and-flux#eq-opposite-exchange)                        | Numbered sign retained.         |
| (57a)    | 810  | Matter connection-exchange form; [(10.13)](/source-readout/einstein-1916/10-conservation-and-flux#eq-einstein57a)                       | Symmetric stress.               |
| \(58\)   | 811  | Contravariant fluid stress; [(11.2)](/source-readout/einstein-1916/11-fluids#eq-fluid-stress)                                           | Original rho convention.        |
| (58a)    | 811  | Covariant fluid stress; [(11.2)](/source-readout/einstein-1916/11-fluids#eq-fluid-stress)                                               | Inherited constitutive form.    |
| (58b)    | 811  | Mixed fluid stress; [(11.3)](/source-readout/einstein-1916/11-fluids#eq-fluid-mixed)                                                    | Euler substitution recovered.   |
| \(59\)   | 812  | Potential antisymmetric derivative; [(12.3)](/source-readout/einstein-1916/12-electromagnetism#eq-potential-operation)                  | Field equals minus d phi.       |
| \(60\)   | 812  | Homogeneous cyclic equations; [(12.5)](/source-readout/einstein-1916/12-electromagnetism#eq-homogeneous-maxwell)                        | Potential contact.              |
| (60a)    | 812  | Four expanded homogeneous equations; [(12.11)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-vector-hom)                 | Antisymmetric components.       |
| (60b)    | 813  | Homogeneous three-vector system; [(12.11)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-vector-hom)                     | Original component order.       |
| \(61\)   | 813  | Lower electric/magnetic components; [(12.10)](/source-readout/einstein-1916/12-electromagnetism#eq-em-components)                       | Original normalization.         |
| \(62\)   | 813  | Raise electromagnetic field indices; [(12.7)](/source-readout/einstein-1916/12-electromagnetism#eq-em-raising)                          | Metric response retained.       |
| \(63\)   | 813  | Sourced Maxwell divergence; [(12.8)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-divergence)                           | Second index; unit volume.      |
| (63a)    | 813  | Sourced three-vector system; [(12.12)](/source-readout/einstein-1916/12-electromagnetism#eq-maxwell-vector-src)                         | Metric-dependent primed fields. |
| \(64\)   | 813  | Primed upper-index components; [(12.10)](/source-readout/einstein-1916/12-electromagnetism#eq-em-components)                            | Not generally unprimed.         |
| \(65\)   | 814  | Field-current transfer covector; [(12.14)](/source-readout/einstein-1916/12-electromagnetism#eq-em-transfer)                            | Nonzero transfer retained.      |
| (65a)    | 814  | Transfer spatial and time components; [(12.22)](/source-readout/einstein-1916/12-electromagnetism#eq-force-components)                  | Signature retained.             |
| \(66\)   | 815  | Electromagnetic stress balance; [(12.20)](/source-readout/einstein-1916/12-electromagnetism#eq-em-transfer-on-shell)                    | Zero transfer only if assumed.  |
| (66a)    | 815  | Electromagnetic stress tensor; [(12.17)](/source-readout/einstein-1916/12-electromagnetism#eq-em-stress-target)                         | Full residual proof.            |
| \(67\)   | 817  | Newtonian particle acceleration; [(13.3)](/source-readout/einstein-1916/13-newtonian-limit#eq-newton-motion)                            | Weak, slow, quasi-static.       |
| \(68\)   | 818  | Poisson field equation; [(13.6)](/source-readout/einstein-1916/13-newtonian-limit#eq-poisson-g44)                                       | Leading low-pressure matter.    |
| (68a)    | 818  | Green potential and coefficient; [(13.7)](/source-readout/einstein-1916/13-newtonian-limit#eq-green-potential)                          | Boundary/flux contract.         |
| \(69\)   | 818  | Newtonian coupling normalization; [(13.9)](/source-readout/einstein-1916/13-newtonian-limit#eq-kappa-units)                             | Mass-equivalent density.        |
| \(70\)   | 819  | First-order central metric; [(14.1)](/source-readout/einstein-1916/14-spherical-exterior#eq-central-first)                              | Not an exact metric.            |
| (70a)    | 819  | Same-mass parameter join; [(14.2)](/source-readout/einstein-1916/14-spherical-exterior#eq-mass-alpha)                                   | Printed coefficient corrected.  |
| \(71\)   | 819  | Radial unit-rod readout; [(15.1)](/source-readout/einstein-1916/15-clocks-and-frequency#eq-radial-rod)                                  | First order; static.            |
| (71a)    | 820  | Tangential unit-rod comparison; [(15.1)](/source-readout/einstein-1916/15-clocks-and-frequency#eq-radial-rod)                           | Stated local direction.         |
| \(72\)   | 820  | Unit-clock coordinate period; [(15.3)](/source-readout/einstein-1916/15-clocks-and-frequency#eq-clock-potential)                        | Period, not rate.               |
| \(73\)   | 821  | Null interval; [(16.1)](/source-readout/einstein-1916/16-light-and-bending#eq-null)                                                     | Ray law separately supplied.    |
| \(74\)   | 822  | Asymptotic light bending; [(16.5)](/source-readout/einstein-1916/16-light-and-bending#eq-bending-leading)                               | Parameter form recovered.       |
| \(75\)   | 822  | Perihelion advance; [(17.11)](/source-readout/einstein-1916/17-perihelion#eq-einstein75)                                                | Cited dependency completed.     |



## Inspect the assumptions and theorem status

**Every reconstruction rests on a declared target domain and physical inputs. This register separates those inputs, mathematical consequences, approximation statements and unresolved global questions.**

<a id="app-assumptions"></a>

## C. Assumption and theorem-status register

The following inventory separates input premises from reconstructed consequences. IDs are shared with the machine-readable public registers. The presence of an assumption does not imply that the corresponding source residual vanishes before that sector is selected.

<a id="table-1"></a>

| ID  | Component                    | Assumption or domain                                                                                                                       |
|:----|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| A01 | Native support               | The walking marked dependency is in the supplied initial witness class; literal preparation contains no physical field.                    |
| A02 | Event and measurement domain | Smooth four-dimensional event manifold; nondegenerate local calibrations; Lorentz form (-,-,-,+); fixed units.                             |
| A03 | Local and global scope       | Local sections use sufficiently small charts; global geometric descriptions use compatible overlaps, not a global coframe.                 |
| A04 | Differential calculus        | Metric-compatible, torsion-free comparison is the selected realization sector; raw defects remain retained.                                |
| A05 | Curve dynamics               | Regular non-null length stationarity with fixed endpoints; free massive test-particle interpretation; negligible backreaction.             |
| A06 | Field variation              | Dependent omega(E); unrestricted symmetric variations before unit-volume specialization; compact support or the specified boundary values. |
| A07 | Gravity coupling             | Selected vacuum contraction and total-energy matter coupling; fixed nonzero kappa; no cosmological term added to the target.               |
| A08 | Matter symmetry and join     | Symmetric covariant stress and simultaneous calibration/stress transformations; same geometry and units across joins.                      |
| A09 | Fluid constitution           | Original rho convention, normalized timelike velocity and supplied equation-of-state relation; no general IVP theorem.                     |
| A10 | Electromagnetic law          | Potential convention F=-d phi, metric raising, prescribed current and second-index Maxwell divergence; local potential/gauge scope.        |
| A11 | Charge and transfer          | Zero transfer is a restricted branch; general material carrier requires its own current law; primitive fields are retained beyond stress.  |
| A12 | Weak-field approximation     | Uniform derivative control and bounded inverse; slow motion, quasi-static source and negligible leading pressure supplied separately.      |
| A13 | Exterior completion          | Additional static spherical positive-lapse ansatz and asymptotic clock normalization; no arbitrary-vacuum or horizon classification.       |
| A14 | Observations                 | Specified observer, direction and endpoint protocol; classical test-ray optics; finite deflection remains coordinate-tagged.               |
| A15 | Orbit and integral domains   | Positive-mass exterior; nonradial bound branch 0\<e\<1, delta(3+e)\<1; optical closest approach d\<2/3.                                    |
| A16 | Empirical interpretation     | Historical quoted astronomical numbers not independently remeasured; diagnostics use declared dimensionless values.                        |

<a id="evidence-and-theorem-status"></a>

### Evidence and theorem status

Every theorem and proposition in the following register has its proof in the manuscript. Computational tests check implementations, fixtures and invalid alternatives; they are not used as a substitute for the stated general proof. Neither a complete baseline replay nor a matching hash provides independent external review.

<a id="table-2"></a>

| Result                                                                         | Claim                                             | Scope limitation                                                  |
|:-------------------------------------------------------------------------------|:--------------------------------------------------|:------------------------------------------------------------------|
| [2.1](/source-readout/einstein-1916/02-source-and-recovery#thm-composition)    | Composition and information-loss criterion        | Set-level factorization is not a regularity theorem.              |
| [3.1](/source-readout/einstein-1916/03-calibrated-spacetime#thm-metric)        | Local metric section and complete fibre           | No unique native antecedent or global frame.                      |
| [4.1](/source-readout/einstein-1916/04-comparison-and-tensors#thm-tensor)      | Tensor algebra recovery                           | No restriction to decomposable tensors.                           |
| [4.2](/source-readout/einstein-1916/04-comparison-and-tensors#thm-omega)       | Compatible comparison existence and uniqueness    | Physical compatibility is selected at realization layer.          |
| [4.3](/source-readout/einstein-1916/04-comparison-and-tensors#thm-derivative)  | Derivative operation recovery                     | Appended derivative slot is included.                             |
| [6.1](/source-readout/einstein-1916/06-curvature-and-variations#thm-curvature) | Full curvature recovery                           | Einstein short covector form also needs zero torsion.             |
| [7.1](/source-readout/einstein-1916/07-vacuum-and-action#thm-action)           | Field action and variation recovery               | Not off-gauge covariant action equivalence.                       |
| [10.1](/source-readout/einstein-1916/10-conservation-and-flux#thm-doublediv)   | Original conservation identity with volume defect | Zero only after stated volume specialization.                     |
| [11.1](/source-readout/einstein-1916/11-fluids#thm-fluid)                      | Reversible energy/Euler split                     | No arbitrary EOS well-posedness or division by rho.               |
| [12.1](/source-readout/einstein-1916/12-electromagnetism#thm-potential)        | Local potential section and gauge fibre           | No global exactness or arbitrary boundary quotient.               |
| [12.2](/source-readout/einstein-1916/12-electromagnetism#thm-em-energy)        | Complete electromagnetic transfer residual        | Zero-transfer conservation is conditional.                        |
| [13.1](/source-readout/einstein-1916/13-newtonian-limit#thm-jets)              | Finite-jet operation recovery                     | Not long-time uniform Newtonian convergence.                      |
| [16.1](/source-readout/einstein-1916/16-light-and-bending#thm-optical)         | Boundary-sensitive optical comparison             | Finite coordinate direction change, not observer-invariant angle. |
| [17.1](/source-readout/einstein-1916/17-perihelion#thm-perihelion)             | Perihelion coefficient and error bound            | Leading Kepler conversion; no fitted-element error bound.         |
| [18.1](/source-readout/einstein-1916/18-cumulative-recovery#thm-main)          | Cumulative conditional reconstruction             | No native law selection, new dynamics or independent peer review. |

<a id="what-the-public-verification-binds"></a>

### What the public verification binds

The checks bind explicit algebraic inputs, scripted operations and recorded outputs. The six stage suites use preserved code; the final cross-convention audit is separately written. The release manifest binds the exact files supplied, and the clean replay receipt identifies the fresh extraction on which all suites were executed. The complete equation correspondence has 101 rows. The archive intentionally omits private research instructions and third-party scans. Original source access is bibliographic rather than a hidden runtime dependency: all fixtures needed by the verification are included.

The numerical diagnostics test dimensionless turning integrals, not solar-system measurements. Their arithmetic precision is 65 decimal digits. Each checks a strict error-bound inequality, not approximate equality at an unstated tolerance. No probabilistic significance, unseen holdout validation, interval certification or proof-assistant verification is claimed.



## References and publication source

<a id="ref-1"></a>

### [1]

J. Fernando Barbero G., Juan Margalef-Bentabol, Valle Varo, and Eduardo J. S. Villaseñor. Covariant phase space for gravity with boundaries: Metric versus tetrad formulations. *Physical Review D*, 104: 044048, 2021. [doi:10.1103/PhysRevD.104.044048](https://doi.org/10.1103/PhysRevD.104.044048). URL [https://arxiv.org/abs/2103.06362](https://arxiv.org/abs/2103.06362).

<a id="ref-2"></a>

### [2]

Naresh Dadhich and Josep M. Pons. On the equivalence of the einstein–hilbert and the einstein–palatini formulations of general relativity for an arbitrary connection. *General Relativity and Gravitation*, 44: 2337–2352, 2012. [doi:10.1007/s10714-012-1393-9](https://doi.org/10.1007/s10714-012-1393-9). URL [https://arxiv.org/abs/1010.0869](https://arxiv.org/abs/1010.0869).

<a id="ref-3"></a>

### [3]

Elena De Paoli and Simone Speziale. A gauge-invariant symplectic potential for tetrad general relativity. *Journal of High Energy Physics*, 2018 (7): 040, 2018. [doi:10.1007/JHEP07(2018)040](https://doi.org/10.1007/JHEP07(2018)040). URL [https://arxiv.org/abs/1804.09685](https://arxiv.org/abs/1804.09685).

<a id="ref-4"></a>

### [4]

Albert Einstein. Erklärung der perihelbewegung des merkur aus der allgemeinen relativitätstheorie. *Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften*, pages 831–839, 1915. URL [https://articles.adsabs.harvard.edu/pdf/1915SPAW.......831E](https://articles.adsabs.harvard.edu/pdf/1915SPAW.......831E).

<a id="ref-5"></a>

### [5]

Albert Einstein. Die grundlage der allgemeinen relativitätstheorie. *Annalen der Physik*, 354 (7): 769–822, 1916. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702). URL [https://doi.org/10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702). Fourth series, volume 49. Original pagination and equation numbers are used throughout.

<a id="ref-6"></a>

### [6]

Vivek Iyer and Robert M. Wald. Some properties of noether charge and a proposal for dynamical black hole entropy. *Physical Review D*, 50: 846–864, 1994. [doi:10.1103/PhysRevD.50.846](https://doi.org/10.1103/PhysRevD.50.846). URL [https://arxiv.org/abs/gr-qc/9403028](https://arxiv.org/abs/gr-qc/9403028).

<a id="ref-7"></a>

### [7]

Aaron Meurer et al. Sympy: symbolic computing in python. *PeerJ Computer Science*, 3: e103, 2017. [doi:10.7717/peerj-cs.103](https://doi.org/10.7717/peerj-cs.103). URL [https://doi.org/10.7717/peerj-cs.103](https://doi.org/10.7717/peerj-cs.103).

<a id="ref-8"></a>

### [8]

Roberto Oliveri and Simone Speziale. Boundary effects in general relativity with tetrad variables. *General Relativity and Gravitation*, 52: 83, 2020. [doi:10.1007/s10714-020-02733-8](https://doi.org/10.1007/s10714-020-02733-8). URL [https://arxiv.org/abs/1912.01016](https://arxiv.org/abs/1912.01016).

<a id="ref-9"></a>

### [9]

Peter Peldán. Actions for gravity, with generalizations: a review. *Classical and Quantum Gravity*, 11 (5): 1087–1132, 1994. [doi:10.1088/0264-9381/11/5/003](https://doi.org/10.1088/0264-9381/11/5/003). URL [https://arxiv.org/abs/gr-qc/9305011](https://arxiv.org/abs/gr-qc/9305011).

<a id="ref-10"></a>

### [10]

Jeremy Rodgers. A source-to-readout architecture for a theory of everything: Sector physics as coupled projections from a common realization carrier, 2026. URL [https://doi.org/10.5281/zenodo.21366204](https://doi.org/10.5281/zenodo.21366204). Version 1.0; sections 1.3.3 and chapters 2–3.

<a id="ref-11"></a>

### [11]

Jeremy Rodgers. Transport and projective reduction in a source–readout derivation of einstein gravity, 2026. URL [https://doi.org/10.5281/zenodo.23954887](https://doi.org/10.5281/zenodo.23954887).

<a id="ref-12"></a>

### [12]

Karl Schwarzschild. Über das gravitationsfeld eines massenpunktes nach der einsteinschen theorie. *Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften*, pages 189–196, 1916. URL [https://arxiv.org/abs/physics/9905030](https://arxiv.org/abs/physics/9905030). Mathematical text consulted also in the translation by S. Antoci and A. Loinger, arXiv:physics/9905030; the translators’ foreword is not used.

