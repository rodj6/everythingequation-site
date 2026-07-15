# The Source-to-Readout Construction

## Objective pregeometry, spacetime and gravitation

### 1. Geometric input from the objective archive

Fix a realization face \(Y\) over an admitted source \(X\) and let

\[
\mathcal A_Y^{\rm obj}
\tag{G6.1}
\]

be the predecessor-closed archive constructed by the quantum-record projection. No spacetime, metric, coordinate system or background topology is assumed at this stage. For every finite subarchive

\[
I\Subset\mathcal A_Y^{\rm obj},
\tag{G6.2}
\]

choose a prepared support \(m=m(I)\in M_X\) in the directed realization
that carries the source lineages of every record in \(I\), and put
\(P_m=\overline{\operatorname{supp}}_X(m)\).  Directedness guarantees a
common such stage; for a finite realization this is its defining marked
support.  The lineage of a record \(a\in I\) then determines its minimal
predecessor-closed source cylinder

\[
\mathcal N_Y(a)\subseteq P_m.
\tag{G6.3}
\]

This cylinder is a locality domain in source dependency, not a region of a previously existing spacetime.

Let

\[
(\Theta_{Y,a},\mathcal B_{Y,a},P_{Y,a})
\tag{G6.4}
\]

be the standard-Borel space of realization variations supported on \(\mathcal N_Y(a)\), fixed on the source boundary. An admissible intervention is a finite signed measure \(\delta\) satisfying

\[
\delta(\Theta_{Y,a})=0,
\qquad
P_{Y,a}+\delta\in\mathcal P(\Theta_{Y,a}),
\tag{G6.5}
\]

with size

\[
\|\delta\|_{\rm src}
=d_{\rm TV}(P_{Y,a}+\delta,P_{Y,a}).
\tag{G6.6}
\]

The objective deposition signature observed at \(b\) after intervening in the cylinder of \(a\) is the distribution

\[
\operatorname{DepSig}_{Y,a\rightsquigarrow b}(P_{Y,a}+\delta).
\tag{G6.7}
\]

It contains the complete chain from physical response through selection, actual deposition and objective persistence. Correlation alone is not sufficient to define influence.

### 2. Intervention-derived causal order

Define the directed influence capacity

\[
\boxed{
\kappa_Y^{\rm inf}(a,b)
=\sup_{\delta\ne0}
\min\!\left\{
1,
\frac{
d_{\rm TV}\!\left(
\operatorname{DepSig}_{Y,a\rightsquigarrow b}(P_{Y,a}+\delta),
\operatorname{DepSig}_{Y,a\rightsquigarrow b}(P_{Y,a})
\right)
}{\|\delta\|_{\rm src}}
\right\}.
}
\tag{G6.8}
\]

Then \(0\le\kappa_Y^{\rm inf}(a,b)\le1\). The primitive directed relation is

\[
a\prec_0 b
\quad\Longleftrightarrow\quad
\kappa_Y^{\rm inf}(a,b)>0.
\tag{G6.9}
\]

Let \(\sim_{\rm red}\) identify only records which are physically identical under the declared redescription relation. A directed cycle is collapsible precisely when all its vertices lie in one redescription class. The finite event carrier is

\[
\mathsf P_{Y,I}=I/\!\sim_{\rm red}.
\tag{G6.10}
\]

On this quotient define

\[
[a]\prec_D[b]
\quad\Longleftrightarrow\quad
[a]\ne[b]
\text{ and a directed }\prec_0\text{-path joins }[a]\text{ to }[b].
\tag{G6.11}
\]

#### Proposition G6.1 — Cycle-safe order

If every directed cycle in \(I\) is contained in a single redescription class, then \(\prec_D\) is a strict partial order.

**Proof.** Irreflexivity follows because the quotient removes every directed cycle. Transitivity follows by concatenating directed paths. Asymmetry follows from irreflexivity and transitivity: if \(x\prec_Dy\) and \(y\prec_Dx\), their concatenation would be a nontrivial quotient cycle. \(\square\)

If an inequivalent cycle remains, the archive does not yet carry a causal order. It is retained as an obstruction rather than deleted. For nested archives, order-preserving inclusions give the realization-wide carrier

\[
\boxed{
\mathsf P_Y
=\varinjlim_{I\Subset\mathcal A_Y^{\rm obj}}\mathsf P_{Y,I}.
}
\tag{G6.12}
\]

The same carrier supports temporal orientation, metric reconstruction and observer histories.

#### 2.1 Differential influence and refinement stability

For theorem-level reconstruction, the deposition signature is a Markov
kernel

\[
\mathbb K_{ab}:
\mathcal U_a\longrightarrow
\mathcal P(\mathsf{Sig}_b),
\qquad
\mathbb K_{ab}(P)=
\operatorname{DepSig}_{Y,a\rightsquigarrow b}(P),
\tag{G6.12a}
\]

from a relatively open convex neighbourhood \(\mathcal U_a\) in the
affine Banach hyperplane of finite signed measures of total mass one,
whose tangent space is

\[
\mathsf T_a
=\{\delta\in\mathcal M(\Theta_{Y,a}):
\delta(\Theta_{Y,a})=0\}.
\tag{G6.12aa}
\]

Assume that
\(\mathbb K_{ab}\) is Fr\'echet differentiable at the physical
preparation \(P_a\) in total variation. Its infinitesimal influence is

\[
\boxed{
\kappa_{ab}^{(1)}
=\left\|D\mathbb K_{ab}|_{P_a}:
\mathsf T_a\to\mathcal M_0(\mathsf{Sig}_b)
\right\|_{{\rm TV}\to{\rm TV}}.
}
\tag{G6.12b}
\]

The linear-response subrelation uses \(\kappa_{ab}^{(1)}>0\); the exact
finite-amplitude relation remains (G6.9). A channel can have vanishing
first derivative but nonzero quadratic or threshold response. Such an
edge is retained by (G6.8) and is tagged by its least nonzero
Fr\'echet derivative or by a declared H\"older response modulus. A
finite-resolution archive uses the preregistered robust linear relation

\[
a\prec_{\epsilon}b
\quad\Longleftrightarrow\quad
\kappa_{ab}^{(1)}>\epsilon_\kappa
\quad\text{and}\quad
\inf_{n\ge n_0}\kappa_{ab}^{(1,n)}>\epsilon_\kappa,
\tag{G6.12c}
\]

where the second condition prevents a transient discretization edge
from becoming causal structure. If transported kernels converge in
\(C^1\),

\[
\|\mathbb K_{ab}^{(n)}-\mathbb K_{ab}\|_{C^1}\to0,
\tag{G6.12d}
\]

then every edge separated from the threshold and every absent edge with
a uniform zero neighbourhood is stable under refinement.

### 3. Relational comparison geometry

For distinct quotient vertices \(x,y\in\mathsf P_{Y,I}\), put

\[
w_{xy}
=\sup_{a\in x,b\in y}
\left(\kappa_Y^{\rm inf}(a,b)+\kappa_Y^{\rm inf}(b,a)\right),
\qquad
s_x=\sum_{y\ne x}w_{xy}.
\tag{G6.13}
\]

Whenever \(w_{xy}>0\), define

\[
q_{xy}=\frac{w_{xy}}{\sqrt{s_xs_y}},
\qquad
c_{xy}=1-\log q_{xy}.
\tag{G6.14}
\]

The normalization gives \(0<q_{xy}\le1\), so \(c_{xy}\ge1\). The extended relational distance is

\[
\boxed{
d_{\rm rel}(x,y)
=\inf_{x=x_0\sim\cdots\sim x_m=y}
\sum_{j=0}^{m-1}c_{x_jx_{j+1}},
}
\tag{G6.15}
\]

with \(d_{\rm rel}(x,y)=+\infty\) between disconnected components.

#### Proposition G6.2 — Extended path metric

On each connected component, \(d_{\rm rel}\) is a metric. On all of \(\mathsf P_{Y,I}\), it is an extended metric.

**Proof.** Symmetry follows from \(w_{xy}=w_{yx}\). Every nontrivial path has cost at least one, giving positive definiteness. Reversal preserves path length, and concatenation proves the triangle inequality. \(\square\)

This distance measures attenuation through the influence network. It is neither proper time nor a signed Lorentzian interval.

### 4. Measure and dimension from the same archive

The normalized influence operator and diffusion Laplacian are

\[
Q_{xy}=q_{xy}\quad(x\ne y),
\qquad Q_{xx}=0,
\qquad
(L_{\rm inf})_{xy}
=
\begin{cases}
\delta_{xy}-Q_{xy},&s_x>0,\\
0,&s_x=0.
\end{cases}
\tag{G6.16}
\]

Thus \(L_{\rm inf}=I-Q\) on every non-isolated connected component and
vanishes on an isolated vertex. Since \(Q=D^{-1/2}WD^{-1/2}\) there,

\[
\langle f,L_{\rm inf}f\rangle
=\frac12\sum_{x,y}w_{xy}
\left|
\frac{f_x}{\sqrt{s_x}}-\frac{f_y}{\sqrt{s_y}}
\right|^2\ge0,
\tag{G6.16a}
\]

where terms with zero degree are omitted. Hence the heat semigroup
below is a positive contraction and its return trace has no artificial
decay on isolated events.

For a finite archive, the heat return probability is

\[
P_I(t)
=\frac{1}{|\mathsf P_{Y,I}|}
\operatorname{Tr}e^{-tL_{\rm inf}},
\tag{G6.17}
\]

and the running spectral dimension is

\[
\boxed{
d_s^I(t)
=-2\frac{d\log P_I(t)}{d\log t}.
}
\tag{G6.18}
\]

Let \(v_I(x)>0\) be the aperture-calibrated cell-volume weight of the
objective event \(x\). It is invariant under record redescription and
is not the number of environmental copies of that record. Redundancy
enters the confidence that \(x\) is objective; counting its copies as
new events would bias the reconstructed volume. The normalized support
measure is

\[
\boxed{
\nu_I(J)
=\frac{\sum_{x\in J}v_I(x)}
{\sum_{x\in\mathsf P_{Y,I}}v_I(x)}.
}
\tag{G6.19}
\]

For an archive refinement map
\(r^{\rm arch}_{n+1,n}:I_{n+1}\to I_n\), volume
compatibility is

\[
v_n(x)
=\sum_{y\in (r^{\rm arch}_{n+1,n})^{-1}(x)}v_{n+1}(y),
\tag{G6.19a}
\]

up to the declared boundary error. Uniform fundamental cells are the
special case \(v_I(x)=1\).

For \(B_r(x)=\{y:d_{\rm rel}(x,y)\le r\}\), define the scale-dependent volume-growth dimension

\[
d_V(x,r)
=\frac{d\log\nu_I(B_r(x))}{d\log r}
\tag{G6.20}
\]

where a stable discrete derivative exists. A walk dimension follows from

\[
\mathbb E_x[d_{\rm rel}(x,X_t)^2]
\asymp t^{2/d_w}.
\tag{G6.21}
\]

The nerve filtration \(\mathcal N_I(r)\) supplies persistent Betti numbers \(\beta_k(r)\) and a topological-dimension estimator. A continuum dimension \(n\) is admitted only on a common scale window \(\mathcal W_n\) on which

\[
d_s(t)\simeq d_V(r)\simeq n,
\qquad
d_w\simeq2,
\qquad
\beta_k(r)\text{ is stable}.
\tag{G6.22}
\]

Thus four-dimensionality is a joint plateau, not an input label.

The finite pregeometry is

\[
\boxed{
\mathfrak P_I
=\left(
\mathsf P_{Y,I},\prec_D,d_{\rm rel},L_{\rm inf},\nu_I,
\{\operatorname{DepSig}^{\delta}\}_{\delta\in\Delta_I}
\right).
}
\tag{G6.23}
\]

### 5. Continuum candidates

A raw continuum candidate \(C\) is a finite relational, cellular or atlas presentation. To become metric-comparable it must carry

\[
\left(
\phi_C,\prec_C,\mu_C,L_C,
\{\operatorname{DepSig}_C^\delta\}_{\delta\in\Delta_I},
n_C,[g_C]_{\rm Scale},d_C^{\rm cmp}
\right),
\tag{G6.24}
\]

and every entry must be induced by one candidate geometry. The map

\[
\phi_C:\mathsf P_{Y,I}\longrightarrow C
\tag{G6.25}
\]

registers archive events with candidate cells.

On a finite comparison region \(A_C\), choose the scale section

\[
\widehat g_{C,I}=\lambda_{C,I}^2g_C,
\qquad
\lambda_{C,I}
=\operatorname{Vol}_{|g_C|}(A_C)^{-1/n_C},
\tag{G6.26}
\]

so that

\[
\operatorname{Vol}_{|\widehat g_{C,I}|}(A_C)=1.
\tag{G6.27}
\]

This removes global scale before any fit is evaluated.

### 6. Lorentzian comparison without confusing time separation and distance

For a Lorentzian candidate, require \(A_C\) to be compact, causally convex and causally distinguishing, with finite continuous time separation \(\tau_C\). Define its strong metric

\[
\boxed{
d_{\rm str}^C(p,q)
=\sup_{r\in A_C}
\left|
\tau_C(p,r)+\tau_C(r,p)
-\tau_C(q,r)-\tau_C(r,q)
\right|.
}
\tag{G6.28}
\]

Causal distinction separates points; compactness and continuity make the supremum finite. Thus \(d_{\rm str}^C\) is a genuine symmetric metric on \(A_C\).

Let \(B_x\subset A_C\) be the compact support of cell \(x\). The cell comparison distance is

\[
\boxed{
d_C^{\rm cmp}(x,y)
=d_H^{d_{\rm str}^C}(B_x,B_y).
}
\tag{G6.29}
\]

On a Riemannian branch, \(d_{\rm str}^C\) is replaced by geodesic distance. The Lorentzian chronological order, normalized volume and dimension are

\[
\begin{aligned}
x\prec_Cy
&\Longleftrightarrow B_x\times B_y\subset I^+_{\widehat g_{C,I}},\\
\mu_C
&=(q_C)_*\overline{\operatorname{Vol}}_{|\widehat g_{C,I}|},\\
n_C&=\dim A_C.
\end{aligned}
\tag{G6.30}
\]

Here \(q_C:A_C\to C\) is a fixed measurable cell assignment whose tie set has zero volume.

For a bandwidth \(\epsilon_C>0\) fixed before comparison, put

\[
W_{xy}
=\begin{cases}
\exp[-(d_C^{\rm cmp}(x,y)/\epsilon_C)^2],&x\ne y,\\
0,&x=y,
\end{cases}
\qquad
D_x=\sum_yW_{xy},
\tag{G6.31}
\]

and

\[
\boxed{
L_C=I-D^{-1/2}WD^{-1/2}.
}
\tag{G6.32}
\]

The diffusion generator is positive and self-adjoint. It is deliberately not the Lorentzian d'Alembertian.

### 7. Metric reconstruction as an overdetermined inverse problem

Define the order discrepancy

\[
D_{\rm ord}(C;I)
=\frac1{N_2(I)}\sum_{x\ne y}
\left|
\mathbf1[x\prec_Dy]
-\mathbf1[\phi_C(x)\prec_C\phi_C(y)]
\right|.
\tag{G6.33}
\]

Define the normalized volume discrepancy

\[
D_{\rm vol}(C;I)
=\sup_{\varnothing\ne J\subseteq\mathsf P_{Y,I}}
\frac{|\nu_I(J)-\mu_C(\phi_CJ)|}
{\nu_I(J)+\mu_C(\phi_CJ)},
\tag{G6.34}
\]

with \(0/0=0\). For registered scale sets \(\mathcal E_I\) and \(\mathcal T_I\), define

\[
D_{\rm nerve}(C;I)
=\max_{r\in\mathcal E_I}
\frac{\|\boldsymbol\beta_I(r)-\boldsymbol\beta_C(r)\|_1}
{1+\|\boldsymbol\beta_I(r)\|_1+\|\boldsymbol\beta_C(r)\|_1},
\tag{G6.35}
\]

\[
D_{\rm dim}(C;I)
=\sup_{t\in\mathcal T_I}
\frac{|d_s^I(t)-d_s^C(t)|}
{1+|d_s^I(t)|+|d_s^C(t)|},
\tag{G6.36}
\]

and the same-geometry intervention discrepancy

\[
\boxed{
D_{\rm context}(C;I)
=\sup_{\delta\in\Delta_I}
d_{\rm TV}\!\left(
\operatorname{DepSig}_I^\delta,
\operatorname{DepSig}_C^\delta
\right).
}
\tag{G6.37}
\]

The candidate response in (G6.37) is calculated using its own metric, QFT state, record dynamics and boundary data. Order, volume, diffusion and response cannot be fitted independently.

For \(I_n\subset I_{n+1}\), with archive inclusion \(\iota_n\) and
declared candidate coarse-graining \(r^C_{n+1,n}\), set

\[
D_{\rm refine}(C_{n+1},C_n)
=\frac1{|\mathsf P_{I_n}|}
\sum_x
\min\!\left\{
1,
\frac{d_{C_n}^{\rm cmp}\!\left(
\phi_nx,
r^C_{n+1,n}\phi_{n+1}\iota_nx
\right)}{\ell_n}
\right\}.
\tag{G6.38}
\]

A reconstructive sequence satisfies

\[
\boxed{
D_{\rm ord},D_{\rm vol},D_{\rm nerve},D_{\rm dim},
D_{\rm context},D_{\rm refine}\longrightarrow0.
}
\tag{G6.39}
\]

The reconstruction is therefore overdetermined: a false metric can imitate one statistic but cannot survive all independent channels under refinement.

### 8. Refinement convergence

Let \(\mathbf C=(I,C,\phi)\). For two candidates, let \(\mathfrak R(\mathbf C,\mathbf C')\) be their declared common refinements. Define

\[
\delta_{\rm ref}(\mathbf C,\mathbf C')
=\inf_{R\in\mathfrak R(\mathbf C,\mathbf C')}
\max\!\left\{
D_{\rm ord}^R,D_{\rm vol}^R,D_{\rm nerve}^R,
D_{\rm dim}^R,D_{\rm context}^R,D_{\rm refine}^R
\right\},
\tag{G6.40}
\]

\[
\delta_{\rm sym}(\mathbf C,\mathbf C')
=\max\{\delta_{\rm ref}(\mathbf C,\mathbf C'),
\delta_{\rm ref}(\mathbf C',\mathbf C)\},
\tag{G6.41}
\]

and the path pseudometric

\[
\boxed{
d_{\rm ref}(\mathbf C,\mathbf C')
=\inf_{\mathbf C=\mathbf C_0\leadsto\cdots\leadsto\mathbf C_m=\mathbf C'}
\sum_{j=1}^m
\min\{1,\delta_{\rm sym}(\mathbf C_{j-1},\mathbf C_j)\}.
}
\tag{G6.42}
\]

#### Proposition G6.3 — Reconstruction pseudometric

Equation (G6.42) is an extended pseudometric.

**Proof.** The length-zero chain gives reflexivity, chain reversal gives symmetry, and chain concatenation gives the triangle inequality. Zero distance may identify distinct presentations of the same limiting geometry. \(\square\)

The metric reconstruction relation is

\[
\boxed{
\operatorname{Rec}_{\rm met}((\mathfrak P_n)_n)
=\left\{
[M,g]_{\operatorname{Diff}\times\operatorname{Scale}}:
\begin{array}{l}
\exists(I_n,C_n,\phi_n)\text{ satisfying (G6.39),}\\
(I_n,C_n,\phi_n)\text{ is Cauchy in }d_{\rm ref},\\
C_n\longrightarrow(M,g)
\end{array}
\right\}.
}
\tag{G6.43}
\]

The limit must have a nondegenerate tensor, adequate regularity, compatible spin structure when fermions occur, and the hyperbolicity required by the field sector.

### 9. Recovery of Lorentzian spacetime

On a distinguishing spacetime, chronological order fixes the conformal class of the Lorentzian metric. If

\[
g'_{\mu\nu}=e^{2\sigma}g_{\mu\nu},
\tag{G6.44}
\]

then the causal cones are identical. The volume element transforms as

\[
\mathrm{vol}_{g'}=e^{n\sigma}\mathrm{vol}_g.
\tag{G6.45}
\]

Therefore the archive order determines \([g]_{\rm Conf}\), while the archive measure fixes \(e^{n\sigma}\) up to one global dimensional calibration. Symbolically,

\[
\boxed{
(\prec_D,\nu)
\longmapsto
([g]_{\rm Conf},\mathrm{vol}_g)
\longmapsto
[g]_{\rm Scale}.
}
\tag{G6.46}
\]

The relational and spectral channels then test the recovered representative rather than supplying an independent metric.

The dimensional family is

\[
\boxed{
\mathcal M_{\rm dim}
=\left\{
[M,\ell^2\widehat g]_{\rm Diff}:
[M,\widehat g]_{\rm Diff}\in\operatorname{Rec}_{\rm met},
\ \ell\in\mathcal L_{\rm dim}
\right\}.
}
\tag{G6.47}
\]

The observed branch is selected by

\[
d_s,d_V\longrightarrow4,
\qquad
\operatorname{sig}g=(-,+,+,+),
\qquad
\prec_D=I_g^+,
\tag{G6.48}
\]

together with global hyperbolicity, spin compatibility and the operational QFT conditions.

#### 9.1 Faithful continuum embedding

A continuum limit is not licensed by agreement of dimensions alone.
Let \(\ell_n\downarrow0\) be the archive mesh and let

\[
\phi_n:\mathsf P_{Y,I_n}\longrightarrow M
\tag{G6.48a}
\]

be injective registrations. They form a faithful embedding sequence
when, for every compact causally convex \(K\Subset M\):

\[
x\prec_Dy
\quad\Longleftrightarrow\quad
\phi_n(x)\in I^-(\phi_n(y)),
\tag{G6.48b}
\]

for all registered pairs away from the cell boundary;

\[
\sup_{p\in K}\inf_{x\in I_n}d_{\rm str}
(p,\phi_nx)\le\ell_n;
\tag{G6.48c}
\]

and there are densities \(\varrho_n>0\) such that

\[
\sup_{A\in\mathcal R_K}
\left|
\frac{\sum_{x\in\phi_n^{-1}(A)}v_n(x)}{\varrho_n}
-\operatorname{Vol}_g(A)
\right|\longrightarrow0
\tag{G6.48d}
\]

on a convergence-determining ring \(\mathcal R_K\) of Alexandrov sets.
The transported intervention kernels and normalized graph generators
must additionally converge to the candidate retarded response and
diffusion semigroups in the topologies used in (G6.37) and (G6.39).

#### Proposition G6.3a -- Order-volume uniqueness

Let \((M,g)\) and \((M',g')\) be past- and future-distinguishing
spacetimes of dimension at least three. If one archive admits faithful
embedding sequences into both, with the same limiting chronological
order and normalized volume class, then the induced bijection is an isometry up
to the one global dimensional calibration.

**Proof.** Chronological order determines the conformal class, so the
limiting bijection pulls \(g'\) back to \(e^{2\sigma}g\). Equality of
the normalized volume classes gives \(e^{n\sigma}=c\) almost
everywhere for one positive constant \(c\). Smooth regularity makes
\(\sigma\) constant; dimensional calibration fixes that constant.
\(\square\)

#### 9.2 Signature from hyperbolic response

Let \(P_{\rm resp}\) be the second functional derivative of the real
retarded Tier-1 action on the reconstructed continuum. Its principal
symbol on a propagating scalar channel is assumed quadratic,

\[
\sigma_2(P_{\rm resp})(x,k)
=Z(x)\,q^{\mu\nu}(x)k_\mu k_\nu,
\qquad Z(x)>0,
\tag{G6.48e}
\]

and compatible channels have the same characteristic cone. A
nondegenerate real quadratic polynomial is hyperbolic with respect to a
covector \(n\) precisely when \(q^{\mu\nu}\) has Lorentzian signature,
up to overall sign. The archive orientation chooses one cone component;
the positive local energy condition fixes the sign. Thus

\[
\boxed{
\text{common Green hyperbolicity}
+\text{quadratic principal symbol}
\Longrightarrow
\operatorname{sig}g=(-,+,+,+).
}
\tag{G6.48f}
\]

The Lorentzian signature is therefore cross-certified by causal order
and by the principal symbol of physical propagation, rather than being
selected from a metric fit alone.

### 10. The geometry is a fixed point, not a one-way output

For fixed source data and boundary conditions, define the branch map

\[
\mathfrak T:
(g,\Phi,\omega,\mathcal I,u)
\mapsto
\mathcal A^{\rm obj}
\mapsto
\mathfrak P
\mapsto
\mathcal M_{\rm dim}
\mapsto
\operatorname{Sol}_G.
\tag{G6.49}
\]

The terminal correspondence \(\operatorname{Sol}_G\) returns the
updated coupled tuple \((g',\Phi',\omega',\mathcal I',u')\) solving the
matter, state, instrument, selector-transport and gravitational equations
on the reconstructed geometry; it is not a metric-only map.  Thus
\(\mathfrak T\) is a set-valued endomorphism of the full branch space.

A physical Tier-1 branch is a fixed point

\[
\boxed{
(g,\Phi,\omega,\mathcal I,u)
\in\mathfrak T(g,\Phi,\omega,\mathcal I,u).
}
\tag{G6.50}
\]

Here \(\Phi\) is the complete retained matter/field configuration used
by the QFT, instrument and gravitational solution maps.  The metric used
to define the QFT state and record production must be the metric
regenerated from those records and sourced by that same state and field
configuration.  This closes the quantum--record--geometry loop without
leaving the matter coordinate implicit.

After fixing diffeomorphism and gauge representatives, let

\[
\mathscr X_B
=\mathscr G_B^{s}
\times\mathscr F_B^{s-1}
\times\mathscr S_B
\times\mathscr I_B
\times\mathscr U_B,
\qquad s>3,
\tag{G6.50a}
\]

be the complete bounded branch space on a finite globally hyperbolic
slab \(B\). The factors carry, respectively, a gauge-fixed Sobolev
metric norm, field norm, normal-state norm on the declared energy
domain, completely bounded instrument norm and selector-kernel total
variation norm. Boundary and initial data are held fixed. A chosen
single-valued branch of \(\mathfrak T\) defines

\[
\mathcal T_B:\mathscr X_B\longrightarrow\mathscr X_B.
\tag{G6.50b}
\]

If the retarded response, deposition, reconstruction and gravitational
solution maps are Fr\'echet differentiable on a closed ball
\(\overline{\mathbb B}_r(x_0)\), preserve that ball and satisfy

\[
\boxed{
\sup_{x\in\overline{\mathbb B}_r(x_0)}
\|D\mathcal T_B(x)\|_{\mathscr X_B\to\mathscr X_B}
\le q_B<1,
}
\tag{G6.50c}
\]

then Banach's theorem gives a unique branch on \(B\) and the iteration
\(x_{n+1}=\mathcal T_Bx_n\) converges at rate

\[
\|x_n-x_*\|
\le\frac{q_B^n}{1-q_B}\|x_1-x_0\|.
\tag{G6.50d}
\]

This is a sufficient weak-response criterion, not a generic assertion
about the nonlinear theory. Outside a certified contraction domain,
existence of a fixed point remains a branch postulate or must be
established by a separate compactness/degree argument; uniqueness is
not inferred from the diagram (G6.49).

### 11. Covariant gravitational effective action

On a four-dimensional Lorentzian member of \(\mathcal M_{\rm dim}\), the renormalized gravitational action is

\[
S_{\rm grav}^{\rm ren}[g]
=\frac{1}{16\pi G_R}
\int_M(R-2\Lambda_{\rm br})\sqrt{-g}\,d^4x
+\Gamma_{\rm high}^{\rm grav}[g]
+S_{\partial M}.
\tag{G6.51}
\]

The higher-curvature functional is

\[
\boxed{
\Gamma_{\rm high}^{\rm grav}
=\int_M\sqrt{-g}\,d^4x
\left[
c_1R^2+c_2R_{\mu\nu}R^{\mu\nu}
+c_3R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}
+\sum_{d_i>4}\frac{c_i^G}{M_*^{d_i-4}}\mathcal O_i^G
\right].
}
\tag{G6.52}
\]

Each bulk term carries its required boundary completion. For a non-null boundary, the Einstein-Hilbert term is completed by

\[
S_{\rm GHY}
=\frac{1}{8\pi G_R}\int_{\partial M}K\sqrt{|h|}\,d^3x,
\tag{G6.53}
\]

with joint and null-boundary terms where required.

#### 11.1 Why the leading metric action is Einstein--Hilbert

On the selected four-dimensional branch, locality, diffeomorphism
invariance and a derivative expansion order the pure-metric action by
the number of derivatives. Up to a boundary term, the only scalar
densities with at most two derivatives of the metric are

\[
\sqrt{-g},
\qquad
\sqrt{-g}\,R.
\tag{G6.53a}
\]

Consequently the universal infrared action is

\[
\Gamma_g^{(\le2)}
=\int_M\sqrt{-g}
\left[-\rho_\Lambda+\frac{M_P^2}{2}R\right]d^4x,
\qquad M_P^2=(8\pi G_R)^{-1}.
\tag{G6.53b}
\]

This conclusion does not assume the Einstein equation: it classifies
the leading local operators after the metric and diffeomorphism symmetry
have been reconstructed. Variation of (G6.53b) gives the Einstein
tensor and cosmological term.

In four dimensions the Euler density

\[
E_4=R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}
-4R_{\mu\nu}R^{\mu\nu}+R^2
\tag{G6.53c}
\]

is topological only together with its boundary completion. A convenient
bulk EFT basis is therefore \(R^2\), \(C_{\mu\nu\rho\sigma}^2\), the
completed Euler term and higher-dimensional invariants. Representative
metric variations are

\[
H_{\mu\nu}^{(R^2)}
=2RR_{\mu\nu}-\tfrac12g_{\mu\nu}R^2
+2g_{\mu\nu}\Box R-2\nabla_\mu\nabla_\nu R,
\tag{G6.53d}
\]

\[
H_{\mu\nu}^{(R_{ab}^2)}
=2R_{\mu\alpha\nu\beta}R^{\alpha\beta}
-\tfrac12g_{\mu\nu}R_{\alpha\beta}R^{\alpha\beta}
+\Box R_{\mu\nu}+\tfrac12g_{\mu\nu}\Box R
-\nabla_\mu\nabla_\nu R.
\tag{G6.53e}
\]

Renormalized massless loops may also generate causal nonlocal form
factors such as

\[
\int\sqrt{-g}\,
R\log\!\left(\frac{-\Box_{\rm ret}}{\mu^2}\right)R,
\qquad
\int\sqrt{-g}\,
C\log\!\left(\frac{-\Box_{\rm ret}}{\mu^2}\right)C,
\tag{G6.53f}
\]

with the retarded prescription inherited from the CTP functional.
They belong to the same EFT expansion and are not additional classical
forces.

The causal in-in functional is doubled:

\[
\begin{aligned}
\Gamma_{\rm tot,CTP}
={}&S_{\rm grav}^{\rm ren}[g^+]-S_{\rm grav}^{\rm ren}[g^-]
+S_M^{\rm cl}[g^+,\Phi_M^+]-S_M^{\rm cl}[g^-,\Phi_M^-]\\
&+\Gamma_{\rm QFT,dyn}^{\rm ren}
[g^+,\Phi_q^+;g^-,\Phi_q^-\mid\omega]
+\Gamma_{R,\rm CTP}[g^\pm,R^\pm;\mathcal A^{\rm obj}]\\
&+\Gamma_{MR,\rm CTP}[g^\pm,\Phi^\pm,R^\pm].
\end{aligned}
\tag{G6.54}
\]

The term \(\Gamma_{\rm QFT,dyn}^{\rm ren}\) is the completed locally
covariant CTP functional (QFT5a.43), with the classical matter action
and every pure-metric local counterterm removed according to
(QFT5a.49). Its detector instruments are the same instruments used to
regenerate \(\mathcal A^{\rm obj}\). The algebraic, record and stress
appearances of QFT are therefore three maps out of one completed sector.

The operator basis is partitioned before variation so that matter, QFT, record-exclusive and mixed operators occur exactly once.

### 12. Einstein equation as the stationary readout condition

At the physical limit \(g^+=g^-=g\), define

\[
T_{\mu\nu}^{QFT,\rm dyn}
=-\frac{2}{\sqrt{-g}}
\left.
\frac{\delta\Gamma_{\rm QFT,dyn}^{\rm ren}}
{\delta g^{+\mu\nu}}
\right|_{g^+=g^-=g,\,\Phi^+=\Phi^-},
\tag{G6.55}
\]

\[
T_{\mu\nu}^{R}
=-\frac{2}{\sqrt{-g}}
\left.
\frac{\delta\Gamma_{R,\rm CTP}}
{\delta g^{+\mu\nu}}
\right|_{g^+=g^-=g,\,R^+=R^-},
\qquad
T_{\mu\nu}^{MR}
=-\frac{2}{\sqrt{-g}}
\left.
\frac{\delta\Gamma_{MR,\rm CTP}}
{\delta g^{+\mu\nu}}
\right|_{g^+=g^-=g,\,\Phi^+=\Phi^-,\,R^+=R^-},
\tag{G6.56}
\]

and

\[
\mathcal Q_{\mu\nu}^{\rm grav}
=\frac{16\pi G_R}{\sqrt{-g}}
\frac{\delta\Gamma_{\rm high}^{\rm grav}}
{\delta g^{\mu\nu}}.
\tag{G6.57}
\]

The metric stationarity condition is

\[
\boxed{
G_{\mu\nu}+\Lambda_{\rm br}g_{\mu\nu}
+\mathcal Q_{\mu\nu}^{\rm grav}
=8\pi G_R
\left(
T_{\mu\nu}^{M,\rm cl}
+T_{\mu\nu}^{QFT,\rm dyn}
+T_{\mu\nu}^{R}
+T_{\mu\nu}^{MR}
\right).
}
\tag{G6.58}
\]

This is not an independently imposed equation.  It is the metric
Euler--Lagrange condition of the same branch functional that generates
causal field response and the reversible or CTP record response.  The
irreversible deposition map is owned separately by the completely positive
record channel of Chapter 5; its retained influence enters
\(\Gamma_{R,\rm CTP}\) without duplicating that channel as a second
action-generated collapse law.

### 13. Conservation and universal coupling

Diffeomorphism invariance gives

\[
\nabla^\mu\mathcal Q_{\mu\nu}^{\rm grav}=0
\tag{G6.59}
\]

and, on the matter and record equations of motion,

\[
\boxed{
\nabla^\mu
\left(
T_{\mu\nu}^{M,\rm cl}+T_{\mu\nu}^{QFT,\rm dyn}
+T_{\mu\nu}^{R}+T_{\mu\nu}^{MR}
\right)=0.
}
\tag{G6.60}
\]

The universal coupling of gravity follows from the construction: every surviving Tier-1 sector is represented on the same reconstructed metric and enters through metric variation. There is no sector-specific gravitational charge. In the point-particle limit,

\[
S_p=-m\int ds
\tag{G6.61}
\]

gives

\[
u^\mu\nabla_\mu u^\nu=0,
\tag{G6.62}
\]

independent of \(m\). The weak equivalence principle is the local consequence of one common geometric readout.

### 14. Newtonian recovery

Take a slowly varying weak field in signature \((-+++)\):

\[
g_{00}=-(1+2\Phi_N),
\qquad
g_{0i}=0,
\qquad
g_{ij}=(1-2\Psi_N)\delta_{ij},
\tag{G6.63}
\]

in units \(c=1\). For nonrelativistic matter,

\[
T_{00}\simeq\rho,
\qquad
|T_{0i}|,|T_{ij}|\ll T_{00}.
\tag{G6.64}
\]

Neglect \(\Lambda_{\rm br}\), anisotropic stress and higher-curvature corrections on the scale of interest. Then \(\Phi_N=\Psi_N\), and the \(00\) component of (G6.58) yields

\[
\boxed{
\nabla^2\Phi_N=4\pi G_R\rho.
}
\tag{G6.65}
\]

For a point mass,

\[
\Phi_N(r)=-\frac{G_RM}{r},
\qquad
\ddot{\mathbf x}=-\nabla\Phi_N.
\tag{G6.66}
\]

Restoring \(c\), \(g_{00}=-(1+2\Phi_N/c^2)\). Newtonian gravity is therefore the low-velocity, weak-curvature projection of the record-derived metric dynamics.

### 15. Origin of the gravitational scale

Let \(\Lambda_A=\ell_A^{-1}\) be the dimensional aperture scale selected by (G6.47), and let \(K_A\) be the Euclidean positive carrier whose heat trace admits

\[
\operatorname{Tr}F(K_A/\Lambda_A^2)
\sim
\sum_{n\ge0}F_{4-n}\Lambda_A^{4-n}a_n(K_A).
\tag{G6.67}
\]

On the four-dimensional Lorentzian branch, the curvature term in \(a_2\) has the form

\[
a_2(K_A)\supset
\zeta_R\int_M R\sqrt{-g}\,d^4x.
\tag{G6.68}
\]

Writing its total dimensionless aperture weight as \(Z_R>0\), comparison with (G6.51) gives

\[
\frac{M_P^2}{2}=Z_R\Lambda_A^2,
\qquad
M_P^2=\frac{1}{8\pi G_R},
\tag{G6.69}
\]

and hence

\[
\boxed{
G_R=\frac{1}{16\pi Z_R\Lambda_A^2}.
}
\tag{G6.70}
\]

Thus Newton's constant is the inverse stiffness of the continuum geometry produced by the aperture spectrum. It is not a separate microscopic force parameter.

### 16. Why gravity is weak at ordinary energies

Gauge interactions in four dimensions have dimensionless couplings. Gravity couples through the dimensionful coefficient \(G_R\). At characteristic energy \(E\), its dimensionless strength is

\[
\boxed{
\alpha_G(E)
=G_RE^2
=\frac{1}{8\pi}\left(\frac{E}{M_P}\right)^2
=\frac{1}{16\pi Z_R}
\left(\frac{E}{\Lambda_A}\right)^2.
}
\tag{G6.71}
\]

Consequently,

\[
\frac{E^2}{\Lambda_A^2}\ll16\pi Z_R
\quad\Longleftrightarrow\quad
\alpha_G(E)\ll1.
\tag{G6.72}
\]

The weakness is a scaling statement: the Einstein-Hilbert response is a dimension-two geometric stiffness generated at the aperture scale, while gauge vertices are marginal dimension-four interactions. The enormous hierarchy at laboratory energies is the square of the ratio between the probe scale and the geometry-formation scale.  When the selected heat weight has a branch-uniform lower bound \(Z_R\ge z_0>0\) with \(z_0\) not parametrically small, the familiar sufficient condition \(E\ll\Lambda_A\) follows from (G6.72).  Without that spectral lower bound, \(E\ll\Lambda_A\) alone is not enough.

For two particles of masses \(m_1,m_2\), the gravitational fine-structure parameter is

\[
\alpha_G(m_1,m_2)
=\frac{G_Rm_1m_2}{\hbar c}
=\frac{m_1m_2}{8\pi M_P^2}
\tag{G6.73}
\]

in the reduced-Planck convention. The smallness of ordinary masses relative to \(M_P\) directly yields the observed weakness.

### 17. Linearized gravitational quanta

Expand about a solved background \(\bar g\):

\[
g_{\mu\nu}
=\bar g_{\mu\nu}+\kappa_g h_{\mu\nu},
\qquad
\kappa_g=\sqrt{32\pi G_R}.
\tag{G6.74}
\]

After gauge fixing, the quadratic action is

\[
S_g^{(2)}
=\frac12\int h^{\mu\nu}
\mathcal K^{\rm Lich}_{\mu\nu}{}^{\rho\sigma}
h_{\rho\sigma}\sqrt{-\bar g}\,d^4x,
\tag{G6.75}
\]

where \(\mathcal K^{\rm Lich}\) is the gauge-fixed Lichnerowicz operator plus background-curvature and EFT terms. On Minkowski space, the physical transverse-traceless modes obey

\[
\Box h_{ij}^{TT}=0.
\tag{G6.76}
\]

Their quanta are massless helicity-\(2\) excitations. Their coupling to matter is

\[
S_{\rm int}
=-\frac{\kappa_g}{2}\int h_{\mu\nu}T^{\mu\nu}\,d^4x.
\tag{G6.77}
\]

The same \(\kappa_g\) for every sector is the perturbative form of universal metric coupling.

### 18. Quantum backreaction and stochastic geometry

The in-in QFT functional produces both mean stress and fluctuations. Define the stress fluctuation operator

\[
t_{\mu\nu}
=\widehat T_{\mu\nu}-\langle\widehat T_{\mu\nu}\rangle_\omega
\tag{G6.78}
\]

and noise kernel

\[
N_{\mu\nu\rho\sigma}(x,x')
=\frac12
\left\langle
\{t_{\mu\nu}(x),t_{\rho\sigma}(x')\}
\right\rangle_\omega.
\tag{G6.79}
\]

The imaginary part of the CTP influence action admits a Gaussian representation with stochastic source \(\xi_{\mu\nu}\) satisfying

\[
\mathbb E[\xi_{\mu\nu}]=0,
\qquad
\mathbb E[\xi_{\mu\nu}(x)\xi_{\rho\sigma}(x')]
=N_{\mu\nu\rho\sigma}(x,x').
\tag{G6.80}
\]

The linearized Einstein-Langevin equation is

\[
\boxed{
\delta G_{\mu\nu}[h]
+\delta\mathcal Q_{\mu\nu}^{\rm grav}[h]
=8\pi G_R
\left(
\delta\langle T_{\mu\nu}\rangle[h]
+\xi_{\mu\nu}
\right).
}
\tag{G6.81}
\]

Mean backreaction is carried by the real retarded kernel; metric fluctuations are fixed by the positive noise kernel. Dissipation and noise are therefore the gravitational continuation of the dual-faced aperture field.

### 19. EFT control and the classical limit

At curvature radius \(L\), define

\[
\epsilon_Q(L)=\left(\frac{\ell_A}{L}\right)^2.
\tag{G6.82}
\]

Curvature-squared corrections satisfy

\[
\frac{\|\mathcal Q^{\rm grav}\|}{\|G[g]\|}
=O(\epsilon_Q(L)),
\tag{G6.83}
\]

and an operator of dimension \(d_i>4\) is suppressed by

\[
\left(\frac{E}{M_*}\right)^{d_i-4}.
\tag{G6.84}
\]

Higher-derivative equations are interpreted as an EFT expansion, not
as an exact fundamental fourth-order theory. Write

\[
g=g^{(0)}+M_*^{-2}g^{(1)}+M_*^{-4}g^{(2)}+\cdots
\tag{G6.84a}
\]

and at each order replace higher derivatives in
\(\mathcal Q_{\mu\nu}^{\rm grav}\) by the lower-order field equations.
This order-reduced initial-value problem retains the solutions
continuously connected to Einstein gravity and removes spurious
runaway branches above the EFT cutoff.

The hierarchy of limits is

\[
\begin{array}{rcl}
\epsilon_Q\to0,
\quad T^R,T^{MR}\to0
&\Longrightarrow&
\text{semiclassical Einstein gravity},\\[2mm]
\hbar\to0,
\quad T^{QFT,\rm dyn}\to0
&\Longrightarrow&
\text{classical general relativity},\\[2mm]
|R|L_{\rm probe}^2\to0,
\quad G_RT\to0
&\Longrightarrow&
\text{flat-spacetime QFT},\\[2mm]
v/c\to0,
\quad |\Phi_N|/c^2\to0
&\Longrightarrow&
\text{Newtonian gravity}.
\end{array}
\tag{G6.85}
\]

### 20. Complete projection chain through gravity

The source-to-gravity construction is

\[
\boxed{
\begin{gathered}
\Omega
\xrightarrow{\operatorname{Cl}_\Omega}
\mathsf S_{\rm adm}
\xrightarrow{\operatorname{RealPrep}_\Omega;\,
\mathcal A_{1/2}^{a}}
(K_Y^{a},C_Y^{a})
\xrightarrow{G_\gamma}
\text{quantum alternatives and field response}\\
\xrightarrow{\operatorname{Sel}}
\xrightarrow{\operatorname{Dep}^{\rm act}}
\xrightarrow{\operatorname{ObjPers}}
\mathcal A_Y^{\rm obj}
\xrightarrow{\operatorname{PreGeom}}
(\mathsf P_Y,\prec_D,d_{\rm rel},\nu_Y,L_{\rm inf})\\
\xrightarrow{\operatorname{Rec}_{\rm met}}
[M,g]_{\rm Diff\times Scale}
\xrightarrow{\operatorname{DimCal}}
\mathcal M_{\rm dim}
\xrightarrow{\delta\Gamma_{\rm tot,CTP}=0}
(g,\Phi)_{\rm Tier\,1}.
\end{gathered}
}
\tag{G6.86}
\]

The process is reciprocal: the final metric determines the field algebra and response used to regenerate the archive. Equation (G6.50), not a feed-forward diagram alone, is the completed construction.

### 21. Pregeometry-to-gravity completion theorem

#### Theorem G6.4 — Conditional spacetime and gravity reconstruction

Assume:

1. the objective archive is predecessor-closed, its intervention
   capacities are stable under refinement and its cell-volume weights
   obey (G6.19a);
2. every finite inequivalent causal cycle is absent;
3. the dimension, volume-growth and topology estimators possess a common four-dimensional plateau;
4. a faithful reconstructive sequence satisfying (G6.39) and
   (G6.48a)--(G6.48d) converges to a nondegenerate, globally
   hyperbolic spin manifold;
5. the common response principal symbol satisfies (G6.48e), dimensional
   calibration fixes \(\ell\), and the branch fixed-point condition
   (G6.50) has a solution, with local uniqueness asserted only where
   the contraction bound (G6.50c) holds;
6. the completed QFT sector of Chapter 5a exists on that branch, and
   the CTP action is diffeomorphism invariant, renormalized in a fixed
   operator partition and has a well-posed, order-reduced variational
   problem.

Then:

\[
\mathcal A_Y^{\rm obj}
\Longrightarrow
(M,g,\Gamma_{\rm tot,CTP})
\tag{G6.87}
\]

with the following properties:

- \(\prec_D\) agrees with the chronological order of \(g\);
- \(\nu\) agrees with normalized metric volume;
- the continuum metric is unique up to diffeomorphism and the one
  dimensional calibration on the faithful order-volume branch;
- the full coupled branch is locally unique and iteratively executable
  on every slab where (G6.50c) is certified;
- the Lorentzian signature is independently fixed by hyperbolic field
  propagation;
- \(L_{\rm inf}\) and the candidate diffusion spectrum agree in the refinement limit;
- the metric satisfies the effective gravitational equation (G6.58);
- the total stress is covariantly conserved;
- the Newtonian limit is (G6.65);
- gravitational strength is controlled by
  \(E^2/(16\pi Z_R\Lambda_A^2)\), with scale-only suppression
  following on branches where \(Z_R\) is bounded away from zero;
- quantum and higher-curvature corrections are controlled by (G6.82)–(G6.84).

**Proof.** Assumptions 1–2 and Proposition G6.1 produce the archive
poset. Equations (G6.13)–(G6.23) produce its comparison metric, measure
and spectrum. Assumptions 3–4, the common-refinement pseudometric and
the faithful-embedding conditions give the continuum. Proposition
G6.3a makes its order-volume metric unique. Equation (G6.48f) fixes its
Lorentzian signature and the archive fixes its time orientation. The
same-branch fixed point identifies this metric with the metric
supporting the completed QFT and record archive. The two-derivative
classification (G6.53a)--(G6.53b) gives the Einstein--Hilbert infrared
action. Where (G6.50c) holds, Banach's theorem supplies local branch
uniqueness and the convergent solver (G6.50d). Variation of the
completed CTP action gives (G6.58), while its
Ward identity and diffeomorphism invariance give
(G6.59)–(G6.60). Linearization and the nonrelativistic limit give
(G6.65); the heat coefficient gives (G6.69)–(G6.72). Order-reduced EFT
power counting gives the correction bounds. \(\square\)

### 22. Interfaces fixed by this chapter

The completed gravity layer exposes the following inputs to the next construction:

\[
\begin{aligned}
\text{spacetime: }& (M,g,\prec_g,\mathrm{vol}_g,\nabla,\Box_g),\\
\text{gravity: }& (G_R,\Lambda_{\rm br},\Gamma_{\rm high}^{\rm grav}),\\
\text{matter coupling: }& T_{\mu\nu}=-2(\sqrt{-g})^{-1}\delta\Gamma/\delta g^{\mu\nu},\\
\text{quantum response: }& (\langle T_{\mu\nu}\rangle,N_{\mu\nu\rho\sigma}),\\
\text{control scales: }& (\ell_A,M_P,M_*,\epsilon_Q),\\
\text{branch condition: }&
(g,\Phi,\omega,\mathcal I,u)
\in\mathfrak T(g,\Phi,\omega,\mathcal I,u).
\end{aligned}
\tag{G6.88}
\]

These objects are now sufficient to build matter and gauge fields on the same realized branch, derive their common geometric coupling, and connect the aperture spectral invariants to Tier-1 particle parameters.
