# Abstract

The minimal completion constructed in Paper 3 is an abstract quotient determined by a declared readout together with a set-indexed family of invariant source relations. This paper identifies the conditions under which such a completion possesses a genuine realization in differential geometry and classical field theory. The realization domain is restricted to *compatible* local metric, bundle, connection, matter, and boundary data: Čech cocycle and overlap equations are used to construct global fields, and uniqueness is asserted only up to bundle isomorphism, never up to a choice of coordinate chart or gauge representative. The physical geometric source is then defined as the orbit space of admissible global configurations under the groupoid of allowed principal-bundle isomorphisms covering allowed diffeomorphisms.

Gauge- and diffeomorphism-invariant global relations, holonomy conjugacy classes, Wilson observables, characteristic numbers, boundary and asymptotic data, and spectra of geometrically defined operators with specified domains, descend to functions on this orbit space. Their joint image with a declared Tier-1 readout realizes, on the restricted domain, the canonical minimal completion of Paper 3. We prove a restricted geometric realization theorem, together with an orbit reconstruction criterion characterizing when the completion map is injective. For flat $U(1)$ connections on an oriented circle we prove that holonomy classifies gauge orbits completely, yielding the exact realization $E_{\mathrm{hol}}\cong U(1)$, and we exhibit a strictly coarser spectral completion $E_{\mathrm{spec}}\cong[-1,1]$ arising from a charged scalar relation.

The final sections embed completed relation data into variational dynamics. A gauge- and diffeomorphism-invariant relation-dependent action yields correctly normalized stress-energy, gauge-current, and matter responses; the Einstein, Yang–Mills, and matter equations follow by functional variation, and the Ward–Noether identities associated with diffeomorphism and gauge invariance enforce covariant conservation. Completed source relations therefore enter Tier-1 field equations through invariant geometric structure and derived response, not through a choice of coordinates or gauge. No claim is made that every abstract completion is geometrically realizable; the realization boundary is precisely the content of the results below.


# Introduction and scientific position

## Position in the sequence

Paper 1 \[[16](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST1)\] established source–readout non-equivalence and identified the descent obstructions that prevent a readout from being inverted. Paper 2 \[[17](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST2)\] characterized when the information lost by a readout obstructs a nominated target, and what any target-sufficient extension is obliged to distinguish. Paper 3 \[[18](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST3)\] constructed, for a set-indexed family $\{R_\alpha\}_{\alpha\in A}$ of invariant source relations and a declared readout $p\colon S\to T$, the canonical minimal completion $$
E_A \;=\; \operatorname{Im}\bigl(p,R_A\bigr)
\;\subseteq\; T\times\prod_{\alpha\in A}V_\alpha ,
\qquad
R_A=(R_\alpha)_{\alpha\in A},\tag{1}$$ together with its quotient realization $S\twoheadrightarrow E_A$ and its terminal universal property among surjective extensions through which $p$ and every $R_\alpha$ factor.

Construction [(1)](/source-readout/geometric-realization-of-completed-source-relations/introduction-and-scientific-position#eq:paper3-completion) is purely set-theoretic. It is indifferent to whether the relation values $(t,(v_\alpha))$ can be produced by any geometry at all. Paper 4 supplies exactly the missing ingredient:

> *When do the abstract relation coordinates of Paper 3 arise from compatible global metrics, bundles, connections, matter fields, boundary data, and gauge-invariant observables?*

The answer has the structure of a *realization boundary*. Not every point of the Cartesian product $T\times\prod_\alpha V_\alpha$ is attained; the attainable points are precisely the image of a geometric evaluation map, and that image is constrained by descent (Čech cocycle and overlap conditions), by invariance (the relations must be constant on orbits of the allowed symmetry groupoid), and by the admissibility class chosen for the model (regularity, signature, causal structure, boundary and asymptotic conditions). The abstract completion is then realized *relative to* the invariant geometric relations declared, and only on that restricted domain.

## Progression of the paper

The paper follows a single line of development. Compatible local geometric data glue to global fields (Section [3](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#sec:descent), Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent)). Physical configurations are reduced by allowed bundle isomorphisms and diffeomorphisms (Section [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source), Definition [2.9](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:sgeo)). Invariant global geometric relations become well-defined functions on the reduced orbit space (Section [4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:invariants)). Their joint image with a declared readout realizes the canonical completion of Paper 3 (Section [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization), Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization)). Flat $U(1)$ connections on an oriented circle provide an exact classification example (Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1), Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class)). Invariant relation-dependent actions generate stress-energy, currents, and matter response through functional variation (Section [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational), Theorem [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs)). Gauge and diffeomorphism invariance impose the corresponding Ward–Noether identities (Section [8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether), Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons) and Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current)).

## Scope

The scope restrictions recorded here are load-bearing and are used explicitly in the statements of the theorems below. It is not claimed that every abstract completion of Paper 3 is geometrically realizable; realizability is a nontrivial condition, and Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary) exhibits the obstruction. It is not claimed that any finite list of curvature scalars separates arbitrary Lorentzian geometries; separation is a hypothesis to be established on the restricted domain of a given model, and Remark [4.6](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#rem:no-finite-separation) records why no general result of that kind is available. Gauge potentials and coordinate representatives are never treated as physical states: all realization relations are functions on the orbit space $S_{\mathrm{geo}}$. A loop observable is not treated as diffeomorphism invariant unless the loop itself is included in the configuration data and transformed with it, or the observable is formed by an invariant construction over loops, or the declared boundary data pins the relevant homology class; Section [4.4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:diff-loops) makes these alternatives precise and requires a model to declare which it uses. Global relation coordinates are not treated as independent dynamical fields unless a model explicitly promotes them to fields. No new physical interaction or empirical claim is introduced, and no claim is made about the physical status of our universe: the relation-dependent action of Section [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational) is a template for admissible couplings, and its consequences are theorems about that template, not predictions. Finally, the projected-dynamics and memory machinery of Paper 5, and the Randall–Sundrum construction of Paper 7, are not used and are not assumed; where the present results terminate in an open dynamical question, this is stated as such (Section [9](/source-readout/geometric-realization-of-completed-source-relations/from-completion-to-tier-1-representation#sec:tier1)).


# The geometric source domain

## Configurations

<div id="conv:basic" class="convention">

**Convention 2.1** (Smoothness, signature, and index conventions). Throughout the general theory, $M$ is a smooth, connected, paracompact, oriented four-manifold, possibly with boundary $\partial M$. The choice $\dim M=4$ is made for definiteness in the physical application and is used nowhere essentially: Sections [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source)–[5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization) hold verbatim in any dimension. Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) is a deliberate one-dimensional specialization, declared as such in Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope), and the dimensional stipulation of the present convention is suspended there. All fields are smooth unless a weaker regularity class is explicitly declared as part of the admissibility data. A Lorentzian metric has signature $(-,+,+,+)$; a *time-oriented* Lorentzian metric is a pair $(g,\mathfrak{t})$ consisting of a Lorentzian metric $g$ together with a choice $\mathfrak{t}$ of one of the two continuous global orientations of the timelike cone bundle of $g$ (equivalently, the choice of a connected component of the set of $g$-timelike vector fields, when one exists). Not every Lorentzian metric admits such a choice; admitting one is a nontrivial global condition on $g$, and it is imposed below as part of admissibility rather than derived (see Remark [2.3](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#rem:time-orientation)). Greek indices run over $0,1,2,3$ and are raised and lowered with $g$. $G$ denotes a finite-dimensional Lie group with Lie algebra $\mathfrak{g}$, equipped with a fixed $\operatorname{Ad}$-invariant nondegenerate bilinear form $\langle\cdot,\cdot\rangle$ on $\mathfrak{g}$ (for compact semisimple $G$ one may take the negative Killing form; for $G=U(1)$ the standard normalization on $\mathfrak{u}(1)\cong i\mathbb{R}$). Finally $\rho\colon G\to \mathrm{GL}(W)$ is a fixed finite-dimensional representation; $\rho$ is *not* assumed unitary, and where unitarity is needed it is hypothesized explicitly.

</div>

<div id="def:config" class="definition">

**Definition 2.2** (Global geometric configuration). A *global geometric configuration* is a tuple $$
\Psi=\bigl(M,\;g,\;P,\;A,\;\Phi,\;\mathcal{B}\bigr),\tag{2}$$ in which

1.  $g$ is a Lorentzian metric on $M$;

2.  $\pi\colon P\to M$ is a principal $G$-bundle;

3.  $A\in\Omega^1(P,\mathfrak{g})$ is a principal connection on $P$ \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1), [3](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Bleecker)\];

4.  $\Phi$ is a section of the associated bundle $P\times_\rho W\to M$;

5.  $\mathcal{B}$ denotes the boundary, asymptotic, causal, and global data required to make the model well posed. Among these data we *always* include a choice of time orientation $\mathfrak{t}$ for $g$; the remaining components of $\mathcal{B}$ are model-specific and may comprise, for instance, fixed induced data on $\partial M$, a decay class at infinity, a fixed conformal boundary structure, a global hyperbolicity requirement, a spin structure, or a fixed topological sector.

</div>

<div id="rem:time-orientation" class="remark">

*Remark 3* (Where time orientation lives). Time orientation is a property of the pair $(M,g)$, not of the bare smooth manifold $M$: it is meaningless to speak of $M$ as “time-orientable” independently of a Lorentzian metric, since the timelike cone bundle whose components are being selected is defined by $g$. Accordingly the choice $\mathfrak{t}$ is carried in $\mathcal{B}$, and the arrows of the redundancy groupoid are required below to preserve it. This has a consequence for the descent theorem, recorded explicitly in Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) and Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time): descent reconstructs the *metric*, but membership of the reconstructed $(g,\mathfrak{t})$ in a time-oriented admissibility class is an additional *global* condition on the glued object, which either must be imposed after the fact or must be built into the descent data as compatible local time orientations.

</div>

<div id="def:admissible" class="definition">

**Definition 2.4** (Admissibility class). An *admissibility class* $\mathcal{C}_{\mathrm{geo}}$ is a specified class of tuples [(2)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:config) satisfying declared conditions on regularity, signature, causal structure, boundary and asymptotic behaviour, and topological sector, and in which every $g$ is time-orientable with a distinguished time orientation $\mathfrak{t}\in\mathcal{B}$. The class $\mathcal{C}_{\mathrm{geo}}$ is part of the data of the model. All subsequent statements are relative to a fixed $\mathcal{C}_{\mathrm{geo}}$.

</div>

The insistence that $\mathcal{C}_{\mathrm{geo}}$ be declared is not pedantry. Every separation, realization, and conservation statement below is sensitive to it: a relation family may separate orbits in one admissibility class and fail to separate them in a larger one, and a Ward identity may hold with compactly supported variations and fail without a boundary term.

## The redundancy groupoid

Gauge and coordinate freedom in a bundle-theoretic setting is not, in general, a group acting on a fixed configuration space: different admissible configurations may carry non-isomorphic bundles, and the diffeomorphisms that lift to a given bundle need not lift to another. The correct structure is a groupoid.

<div id="def:ambient-aut" class="definition">

**Definition 2.5** (Ambient allowed automorphisms). Fix a principal $G$-bundle $P\to M$. Let $\operatorname{Diff}_{\mathcal{B}}(M)$ denote the group of diffeomorphisms of $M$ preserving the orientation of $M$ and the non-metric structural data in $\mathcal{B}$ (boundary, asymptotic regime, topological sector), and let $$
\operatorname{Aut}_{\mathcal{B}}(P)
:=\bigl\{\hat F\in\operatorname{Aut}(P)\;:\;\hat F \text{ covers some } f\in\operatorname{Diff}_{\mathcal{B}}(M)\bigr\}\tag{3}$$ be the group of $G$-equivariant diffeomorphisms of $P$ covering such diffeomorphisms. Define $$
\operatorname{Diff}_{P,\mathcal{B}}(M)\;:=\;\text{image of }\ \operatorname{Aut}_{\mathcal{B}}(P)\ \text{ in }\ \operatorname{Diff}_{\mathcal{B}}(M),\tag{4}$$ that is, the subgroup of allowed base diffeomorphisms that admit an equivariant lift to $P$.

</div>

<div id="prop:aut-sequence" class="proposition">

**Proposition 2.6** (Structure of the ambient group). *With the definitions [(3)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:AutB)–[(4)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:DiffPB) there is a short exact sequence of groups $$
1\;\longrightarrow\;\operatorname{Gau}(P)\;\longrightarrow\;\operatorname{Aut}_{\mathcal{B}}(P)\;\longrightarrow\;
\operatorname{Diff}_{P,\mathcal{B}}(M)\;\longrightarrow\;1 ,\tag{5}$$ where $$\operatorname{Gau}(P)\;=\;\bigl\{\hat F\in\operatorname{Aut}(P):\hat F\ \text{covers}\ \mathrm{id}_M\bigr\}
\;\cong\;\Gamma\bigl(P\times_{\mathrm{conj}}G\bigr)$$ is the gauge group. The sequence is exact by construction: $\operatorname{Diff}_{P,\mathcal{B}}(M)$ is *defined* as the image of the projection, and the kernel of that projection is exactly the set of automorphisms covering the identity. The sequence need not split.*

</div>

<div class="proof">

*Proof.* Exactness at $\operatorname{Gau}(P)$ and at $\operatorname{Diff}_{P,\mathcal{B}}(M)$ is immediate from the definitions of kernel and image. That the extension need not split is a statement about bundle topology: a splitting would furnish, for each allowed $f\in\operatorname{Diff}_{P,\mathcal{B}}(M)$, an equivariant lift $\sigma(f)\in\operatorname{Aut}_{\mathcal{B}}(P)$ depending on $f$ homomorphically, and there is no reason for such a coherent choice to exist. Consequently $\operatorname{Aut}_{\mathcal{B}}(P)$ is not in general a semidirect product $\operatorname{Gau}(P)\rtimes\operatorname{Diff}_{P,\mathcal{B}}(M)$, and nothing below assumes it is. ◻

</div>

<div class="remark">

*Remark 7* (The ambient group is not the isotropy group).

<div id="rem:isotropy">

</div>

Proposition [2.6](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#prop:aut-sequence) describes the *ambient* group of allowed bundle automorphisms over a fixed $P$. It does *not* describe the isotropy group of the groupoid at a configuration. The isotropy (stabilizer) group at $\Psi=(M,g,P,A,\Phi,\mathcal{B})$ is the subgroup $$
\begin{aligned}
\operatorname{Aut}(\Psi)
:=\bigl\{\hat F\in\operatorname{Aut}_{\mathcal{B}}(P)\ \text{covering some}\ f\ :\ \ 
&f_*g=g,\quad f_*\mathfrak{t}=\mathfrak{t},\quad (\hat F^{-1})^*A=A,\\[-0.15em]
&\hat F_\rho\circ\Phi=\Phi\circ f,\quad f_*\mathcal{B}=\mathcal{B}
\bigr\}\;\le\;\operatorname{Aut}_{\mathcal{B}}(P),
\end{aligned}\tag{6}$$ that is, the stabilizer of the *whole tuple*: it preserves the metric, the chosen time orientation and orientation, the connection, the matter section, and the boundary data. $\operatorname{Aut}(\Psi)$ is typically far smaller than $\operatorname{Aut}_{\mathcal{B}}(P)$: for a generic $(g,A,\Phi)$ it is a small or even trivial group, its base part being contained in the isometry group of $g$. In particular the exact sequence [(5)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:aut-sequence) is a statement about $\operatorname{Aut}_{\mathcal{B}}(P)$ and not about $\operatorname{Aut}(\Psi)$.

</div>

<div class="definition">

**Definition 2.8** (Redundancy groupoid).

<div id="def:groupoid">

</div>

Let $\mathfrak{G}_{\mathrm{geo}}$ be the groupoid whose objects are the elements of $\mathcal{C}_{\mathrm{geo}}$. Given two objects $$\Psi=(M,g,P,A,\Phi,\mathcal{B}),
\qquad
\Psi'=(M,g',P',A',\Phi',\mathcal{B}'),$$ the arrows $F\colon\Psi\to\Psi'$ are the pairs $F=(\hat F,f)$ consisting of

- an allowed diffeomorphism $f\in\operatorname{Diff}_{\mathcal{B}}(M)$, and

- a $G$-equivariant bundle isomorphism $\hat F\colon P\to P'$ covering $f$,

subject to $$
f_*g=g',
\qquad
f_*\mathfrak{t}=\mathfrak{t}',
\qquad
(\hat F^{-1})^{*}A = A',
\qquad
\hat F_{\rho}\circ\Phi = \Phi'\circ f,
\qquad
f_*\mathcal{B}=\mathcal{B}',\tag{7}$$ where $\hat F_\rho$ is the induced isomorphism $P\times_\rho W\to P'\times_\rho W$. The second condition is the requirement that arrows preserve the chosen time orientation; it is not implied by the first, since $f_*g=g'$ alone permits $f$ to exchange the two components of the timelike cone bundle. Composition is composition of bundle maps; identities are $(\mathrm{id}_P,\mathrm{id}_M)$. The isotropy group of $\mathfrak{G}_{\mathrm{geo}}$ at $\Psi$ is $\operatorname{Aut}(\Psi)$ of [(6)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:stabilizer).

</div>

The groupoid formulation, rather than a single group acting on a single configuration space, is forced by two features. First, the arrows relate objects carrying *different* bundle representatives, which is exactly what is needed when descent produces a bundle only up to isomorphism (Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent)). Second, isotropy jumps from configuration to configuration, since $\operatorname{Aut}(\Psi)$ depends on $\Psi$; there is no ambient group acting with constant stabilizer.

<div class="definition">

**Definition 2.9** (Physical equivalence and the reduced source).

<div id="def:sgeo">

</div>

Write $$
\Psi\simeq_{\mathrm{geo}}\Psi'
\quad\Longleftrightarrow\quad
\exists\,F\colon\Psi\to\Psi' \text{ in } \mathfrak{G}_{\mathrm{geo}}.\tag{8}$$ This is an equivalence relation on $\mathcal{C}_{\mathrm{geo}}$ because $\mathfrak{G}_{\mathrm{geo}}$ is a groupoid. The *reduced geometric source* is the orbit space $$
S_{\mathrm{geo}}\;:=\; \mathcal{C}_{\mathrm{geo}}/\!\simeq_{\mathrm{geo}} ,\tag{9}$$ with quotient map $q\colon\mathcal{C}_{\mathrm{geo}}\to S_{\mathrm{geo}}$, $q(\Psi)=[\Psi]$.

</div>

<div class="remark">

*Remark 10* (Set-theoretic hygiene).

<div id="rem:hygiene">

</div>

$S_{\mathrm{geo}}$ is used below only as a set (equivalently, as the set of isomorphism classes of objects of the essentially small groupoid $\mathfrak{G}_{\mathrm{geo}}$ obtained after fixing a set of bundle representatives). No smooth or stratified structure on $S_{\mathrm{geo}}$ is used or assumed; the orbit space of a gauge groupoid is in general not a manifold, precisely because isotropy jumps, as Remark [2.7](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#rem:isotropy) notes, and the arguments of Sections [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)–[6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) do not require it to be. Where a topology is needed, as for the moduli space $\mathcal{M}_{\mathrm{flat}}(S^1,U(1))$ in Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1), it is supplied and identified explicitly.

</div>

<div class="convention">

**Convention 2.11** (Status of relation coordinates).

<div id="conv:relation-status">

</div>

A relation coordinate $r_\alpha$ is a *function on $S_{\mathrm{geo}}$*, not an independent field on $M$. It is not varied independently in Section [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational) unless a model explicitly promotes it to a field by adjoining it to the configuration tuple [(2)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:config) and enlarging $\mathcal{C}_{\mathrm{geo}}$ accordingly. Where $r_\alpha$ is a functional of $(g,A,\Phi)$ its variation is computed by the functional chain rule of Section [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:chain-rule); where it labels a fixed topological or boundary sector it is held fixed under variations *within* that sector. Both cases are handled in Section [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational); they are not conflated.

</div>

Every realization relation used in this paper is, by construction, a function on $S_{\mathrm{geo}}$ and never a function of an arbitrary coordinate chart or gauge potential.


# Local data and global descent

<div id="sec:descent">

</div>

We now establish the first leg of the progression: compatible local data glue to global fields. This is the theorem that fixes the *domain* of geometric realization. The material is classical \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1), [11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod), [3](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Bleecker)\]; what is new is only the use to which it is put and the care with which the invariance and admissibility hypotheses are tracked.

## Local data and compatibility equations

Let $\{U_i\}_{i\in I}$ be an open cover of $M$. Suppose we are given, for each $i\in I$, $$
g_i\in\Gamma\bigl(S^2T^*U_i\bigr),
\qquad
A_i\in\Omega^1(U_i,\mathfrak{g}),
\qquad
\Phi_i\in C^\infty(U_i,W),\tag{10}$$ where each $g_i$ is an *intrinsic* smooth symmetric covariant $2$-tensor field on the open set $U_i\subseteq M$, of Lorentzian signature at every point; together with smooth transition functions $$
h_{ij}\colon U_i\cap U_j\longrightarrow G .\tag{11}$$ If in addition each $U_i$ is the domain of a chart $\psi_i\colon U_i\to\psi_i(U_i)\subseteq\mathbb{R}^4$, we may pass to *coordinate components*. These live on the coordinate images, not on $M$: setting $$
\bigl(\check g_i\bigr)_{ab}
:=\bigl((\psi_i^{-1})^*g_i\bigr)_{ab}
\quad\text{on}\quad \psi_i(U_i)\subseteq\mathbb{R}^4 ,\tag{12}$$ and writing $\psi_{ij}:=\psi_i\circ\psi_j^{-1}$ for the coordinate transition map on $\psi_j(U_i\cap U_j)$, the components of a *single* intrinsic tensor in two charts are related by the usual pullback law $$
\check g_j \;=\; \psi_{ij}^{\,*}\,\check g_i
\qquad\text{on}\qquad \psi_j(U_i\cap U_j),
\qquad\text{i.e.}\qquad
\bigl(\check g_j\bigr)_{cd}
=\frac{\partial \psi_{ij}^{\,a}}{\partial x^{c}}\,
 \frac{\partial \psi_{ij}^{\,b}}{\partial x^{d}}\,
 \bigl(\check g_i\bigr)_{ab}\circ\psi_{ij}.\tag{13}$$ Equation [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law) is a statement about *components on coordinate images*. It is distinct from the gluing condition [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) below, which is a relation among the intrinsic tensors $g_i$ on their overlaps.

<div class="definition">

**Definition 3.1** (Compatible local geometric data).

<div id="def:compatible">

</div>

The collection $\{g_i,h_{ij},A_i,\Phi_i\}$ is *compatible* if, on every nonempty overlap (respectively triple overlap): $$\begin{aligned}
\qquad\text{(14)}
h_{ii}&=1,
&
h_{ji}&=h_{ij}^{-1},
&
h_{ij}h_{jk}&=h_{ik} ,
\\[0.3em]
\qquad\text{(15)}
g_i\big|_{U_i\cap U_j} &= g_j\big|_{U_i\cap U_j} ,
\\[0.3em]
\qquad\text{(16)}
A_j &= \operatorname{Ad}_{h_{ij}^{-1}}A_i + h_{ij}^{*}\theta_G ,
\\[0.3em]
\qquad\text{(17)}
\Phi_j &= \rho\bigl(h_{ij}^{-1}\bigr)\Phi_i .
\end{aligned}$$ Here [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle) is the Čech cocycle condition; [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) is the gluing condition (agreement of restrictions) for a section of the sheaf $S^2T^*M$; and [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap), [(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) are the compatibility conditions for local connection forms and local matter representatives, $\theta_G$ denoting the left Maurer–Cartan form on $G$. For a matrix group $G\subseteq\mathrm{GL}(n)$, equation [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap) takes the familiar form $$A_j = h_{ij}^{-1}A_i\,h_{ij} + h_{ij}^{-1}\,\mathrm{d}h_{ij} .$$

</div>

<div class="remark">

*Remark 13* (Čech $H^1$ for nonabelian $G$).

<div id="rem:cech">

</div>

A cocycle $\{h_{ij}\}$ satisfying [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle) represents a class in $\check H^1(\{U_i\},\underline{G})$, where $\underline{G}$ is the sheaf of smooth $G$-valued functions. For nonabelian $G$ this object is a *pointed set* of cocycle classes, the distinguished point being the class of the trivial cocycle, and not a group; two cocycles are equivalent when they are cohomologous in the sense $h'_{ij}=\lambda_i^{-1}h_{ij}\lambda_j$ for smooth $\lambda_i\colon U_i\to G$. Passing to the direct limit over refinements gives the pointed set $\check H^1(M,\underline{G})$, which classifies principal $G$-bundles over $M$ up to isomorphism \[[11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod)\]. Only for abelian $G$ does this pointed set carry a natural group structure; we use it below only as a pointed set.

</div>

<div class="assumption">

**Assumption 3.3** (Regularity of the descent data).

<div id="ass:descent-reg">

</div>

The cover $\{U_i\}$ is locally finite; the $g_i$, $A_i$, $\Phi_i$, $h_{ij}$ are smooth on their domains; and each $g_i$ has the signature fixed in Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic). If a weaker regularity class is used in $\mathcal{C}_{\mathrm{geo}}$, the same statements hold with “smooth” replaced uniformly by that class, provided the class is closed under restriction and under the gauge transformations appearing in [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap).

</div>

## The descent theorem

<div class="theorem">

**Theorem 3.4** (Geometric descent).

<div id="thm:descent">

</div>

*Let $\{g_i,h_{ij},A_i,\Phi_i\}$ be compatible local geometric data in the sense of Definition [3.1](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#def:compatible), satisfying Assumption [3.3](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#ass:descent-reg). Then these data determine:*

1.  *a global Lorentzian metric $g$ on $M$ with $g|_{U_i}=g_i$;*

2.  *a principal $G$-bundle $\pi\colon P\to M$ with local trivializations over $\{U_i\}$ whose transition functions are $\{h_{ij}\}$;*

3.  *a global principal connection $A$ on $P$ whose local representatives (pullbacks along the canonical local sections $s_i$) are the $A_i$;*

4.  *a global section $\Phi$ of $P\times_\rho W$ whose local representatives are the $\Phi_i$.*

*The resulting global tuple $(g,P,A,\Phi)$ is unique up to the bundle isomorphisms induced by change of local trivialization. Conversely, every global tuple $(g,P,A,\Phi)$ over $M$ arises in this way from compatible local data, for any cover trivializing $P$.*

*The theorem reconstructs the metric $g$; it does *not* by itself produce a time orientation. Membership of $(M,g)$ in the time-oriented admissibility class $\mathcal{C}_{\mathrm{geo}}$ of Definition [2.4](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:admissible) is an additional *global* condition on the glued metric, discussed in Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time).*

</div>

<div class="proof">

*Proof.* *(1) The metric.* Condition [(15)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:metric-overlap) says exactly that the intrinsic tensors $g_i$ and $g_j$ restrict to the same tensor field on $U_i\cap U_j$. Since $\Gamma(S^2T^*-)$ is a sheaf on $M$, the gluing axiom yields a unique global section $g\in\Gamma(S^2T^*M)$ with $g|_{U_i}=g_i$ for all $i$. Nondegeneracy and signature are pointwise properties of the symmetric bilinear form $g_x$ on $T_xM$; every $x\in M$ lies in some $U_i$, where $g_x=(g_i)_x$ is Lorentzian by hypothesis. Hence $g$ is Lorentzian. (If one prefers to present the data in coordinate components, the equivalent hypothesis is [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law), which expresses that the $\check g_i$ are the component arrays of a single intrinsic tensor; the invariance of signature under the linear isomorphism $\mathrm{d}\psi_{ij}(x)$ is then Sylvester’s law of inertia.)

*(2) The bundle.* Form the disjoint union $\coprod_{i\in I}U_i\times G\times\{i\}$ and impose $$
(x,a,i)\;\sim\;\bigl(x,\;h_{ji}(x)\,a,\;j\bigr),
\qquad x\in U_i\cap U_j,\; a\in G .\tag{18}$$ Reflexivity follows from $h_{ii}=1$, symmetry from $h_{ij}=h_{ji}^{-1}$, and transitivity from $h_{kj}h_{ji}=h_{ki}$; hence [(18)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:bundle-glue) is an equivalence relation. Let $P$ be the quotient with the quotient topology, $\pi[(x,a,i)]:=x$.

We record the trivializations rigorously. Fix $i$ and $x\in U_i$. *Every equivalence class lying over $x$ has exactly one representative whose third entry is $i$*: existence, because if a class contains $(x,b,j)$ then it contains $(x,h_{ij}(x)b,i)$; uniqueness, because $(x,a,i)\sim(x,a',i)$ forces $a'=h_{ii}(x)a=a$. Hence the map $$
\varphi_i\colon \pi^{-1}(U_i)\longrightarrow U_i\times G,
\qquad
\varphi_i\bigl([(x,a,i)]\bigr)=(x,a)\tag{19}$$ is a well-defined bijection, with inverse $\varphi_i^{-1}(x,a)=[(x,a,i)]$; it is a homeomorphism by definition of the quotient topology, and we give $P$ the smooth structure for which the $\varphi_i$ are diffeomorphisms (consistent, since the change of trivialization $\varphi_i\circ\varphi_j^{-1}(x,a)=(x,h_{ij}(x)a)$ is smooth). The right $G$-action $[(x,a,i)]\cdot b:=[(x,ab,i)]$ is well defined, because $h_{ji}$ acts by *left* multiplication and hence commutes with right multiplication; it is free and transitive on fibres, and each $\varphi_i$ is $G$-equivariant. Thus $\pi\colon P\to M$ is a principal $G$-bundle with transition functions $h_{ij}$.

*(3) The connection.* Let $s_i\colon U_i\to P$ be the canonical local sections $s_i(x):=\varphi_i^{-1}(x,1)$, so that $s_j=s_i\cdot h_{ij}$ on $U_i\cap U_j$. A principal connection $A\in\Omega^1(P,\mathfrak{g})$ is determined by its local representatives $A_i:=s_i^*A$, and a family $\{A_i\}$ arises from a (necessarily unique) global $A$ if and only if it obeys the law induced by $s_j=s_i\cdot h_{ij}$, namely $$s_j^*A \;=\; \operatorname{Ad}_{h_{ij}^{-1}}\bigl(s_i^*A\bigr)+h_{ij}^*\theta_G,$$ which is precisely [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap). Given [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap), define $A$ over $U_i$ by the pullback identity $$
\bigl(\varphi_i^{-1}\bigr)^{*}A
\;=\;
\operatorname{Ad}_{a^{-1}}\bigl(\pi_U^{*}A_i\bigr)\;+\;\theta_G
\qquad\text{on}\qquad U_i\times G,\tag{20}$$ where $\pi_U\colon U_i\times G\to U_i$ and the projection $U_i\times G\to G$ are understood, $a$ denotes the $G$-coordinate, and $\theta_G$ is pulled back along that projection. Formula [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) is an equality of $\mathfrak{g}$-valued $1$-forms on the manifold $U_i\times G$; it is not an evaluation at a point. Two such local definitions agree on $\pi^{-1}(U_i\cap U_j)$: transporting [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) for $j$ through $\varphi_i\circ\varphi_j^{-1}(x,a)=(x,h_{ij}(x)a)$ and using the standard identity $(L_{h}\circ)^*\theta_G=\theta_G$ together with the Maurer–Cartan expansion of $\mathrm{d}(h_{ij}a)$ reproduces [(20)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:conn-reconstruct) for $i$ exactly when [(16)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:connection-overlap) holds. The resulting $1$-form is $G$-equivariant, $R_b^*A=\operatorname{Ad}_{b^{-1}}A$, and reproduces the fundamental vector fields, $A(\zeta_X)=X$; hence it is a principal connection \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1)\].

*(4) The matter section.* Sections of $P\times_\rho W$ correspond bijectively to $\rho$-equivariant maps $\tilde\Phi\colon P\to W$ with $\tilde\Phi(p\cdot a)=\rho(a^{-1})\tilde\Phi(p)$, and such maps correspond to families $\Phi_i:=\tilde\Phi\circ s_i$ obeying $\Phi_j=\tilde\Phi\circ(s_i\cdot h_{ij})=\rho(h_{ij}^{-1})\Phi_i$, which is [(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap). Hence the $\Phi_i$ glue to a unique global section $\Phi$.

*Uniqueness up to isomorphism.* Suppose two systems of local trivializations over a common cover (or over covers admitting a common refinement, after passing to it) produce compatible data $\{g_i,h_{ij},A_i,\Phi_i\}$ and $\{g_i,h'_{ij},A'_i,\Phi'_i\}$ with cohomologous cocycles, $h'_{ij}=\lambda_i^{-1}h_{ij}\lambda_j$ for smooth $\lambda_i\colon U_i\to G$, together with $A'_i=\operatorname{Ad}_{\lambda_i^{-1}}A_i+\lambda_i^*\theta_G$ and $\Phi'_i=\rho(\lambda_i^{-1})\Phi_i$. Then the maps $\varphi_i'^{-1}(x,a)\mapsto\varphi_i^{-1}(x,\lambda_i(x)a)$ agree on overlaps, exactly because the cocycles are cohomologous, and assemble into a $G$-equivariant bundle isomorphism $P'\to P$ covering $\mathrm{id}_M$, carrying $A'$ to $A$ and $\Phi'$ to $\Phi$. That is, it is a vertical arrow of $\mathfrak{G}_{\mathrm{geo}}$. Conversely, an arrow of $\mathfrak{G}_{\mathrm{geo}}$ between global tuples, read in local trivializations, exhibits the two systems of local data as related in exactly this way. Hence the global tuple is well defined precisely as an object of $\mathfrak{G}_{\mathrm{geo}}$ up to isomorphism.

*Converse.* Given a global tuple, choose any cover $\{U_i\}$ trivializing $P$ (possible since $M$ is paracompact and $P$ is locally trivial); the induced $g_i:=g|_{U_i}$, $h_{ij}$, $A_i=s_i^*A$, $\Phi_i$ satisfy [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) by the computations above. ◻

</div>

<div class="remark">

*Remark 16* (Changing the coordinate atlas is not a base diffeomorphism).

<div id="rem:atlas">

</div>

The uniqueness clause above is stated for changes of *local trivialization*, which induce *vertical* bundle isomorphisms covering $\mathrm{id}_M$. A change of *coordinate atlas* is a a different operation: re-charting $M$ changes the component arrays $\check g_i$ of [(12)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:components) according to [(13)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:component-law) while leaving the intrinsic tensor $g$, and hence the object $\Psi$ and its class $[\Psi]\in S_{\mathrm{geo}}$, entirely unchanged. It does not automatically produce a nontrivial base diffeomorphism, and it does not move a point of $S_{\mathrm{geo}}$. Nontrivial base diffeomorphisms enter only through the arrows of $\mathfrak{G}_{\mathrm{geo}}$ with $f\neq\mathrm{id}_M$, which act on the geometry itself and not merely on its coordinate presentation.

</div>

<div class="remark">

*Remark 17* (Descent and time orientation).

<div id="rem:descent-time">

</div>

Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) glues the local metrics to a global Lorentzian $g$, but it does not produce the time orientation $\mathfrak{t}$ that Definition [2.4](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:admissible) demands. Whether $g$ admits any time orientation at all is a global topological condition on $(M,g)$ (it holds if and only if the timelike cone bundle of $g$ has a global continuous section of one of its components), and no purely local compatibility condition can force it. Two consistent options are available, and a model must declare one.

*Option (a): impose it after descent.* Glue $g$ as above, then require, as an additional global admissibility condition, that $g$ be time-orientable and that a time orientation $\mathfrak{t}$ be chosen and recorded in $\mathcal{B}$. Under this option Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) reconstructs the metric, and membership of the reconstructed configuration in $\mathcal{C}_{\mathrm{geo}}$ is a further global condition, verified separately.

*Option (b): descend it.* Adjoin to the local data a choice, for each $i$, of a $g_i$-timelike vector field $\tau_i\in\Gamma(TU_i)$, and impose the additional compatibility condition that on every nonempty overlap $\tau_i$ and $\tau_j$ lie in the *same* component of the timelike cone, $$
g_i(\tau_i,\tau_j)<0 \qquad\text{on } U_i\cap U_j\tag{21}$$ (with signature $(-,+,+,+)$, so that two timelike vectors have negative inner product exactly when they are causally co-oriented). Condition [(21)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:time-glue) is a genuine gluing condition: the relation “lies in the same cone component as” is an equivalence relation on timelike vectors at each point, and the local choices $\tau_i$ define, by [(21)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:time-glue), a coherent global selection of one component of the cone bundle at every $x\in M$. That selection is by definition a time orientation $\mathfrak{t}$ of the glued $g$, and it is unique given the $\tau_i$. Descent then reconstructs the pair $(g,\mathfrak{t})$, and no further global condition on time orientation is needed. (A partition of unity subordinate to $\{U_i\}$ shows that $\mathfrak{t}$ is realized by an actual global timelike vector field, since the cone components are convex.)

</div>

<div class="corollary">

**Corollary 3.7** (Realizability boundary).

<div id="cor:realizability-boundary">

</div>

*A collection of proposed local metric, connection, and matter expressions represents a global geometric source configuration only if the cocycle and overlap conditions [(14)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:cocycle)–[(17)](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#eq:matter-overlap) hold on all overlaps, and only if the resulting global tuple lies in the declared admissibility class $\mathcal{C}_{\mathrm{geo}}$, which, by Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time), includes the global time-orientation condition. Consequently, an abstract tuple of relation values that admits no compatible descent data lies outside the geometric realization domain: it is a point of the abstract product $T\times\prod_\alpha V_\alpha$ that is not in the image of any geometric evaluation map.*

</div>

<div class="proof">

*Proof.* Immediate from Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent): any global configuration restricts to compatible local data, so failure of compatibility for *every* presentation of the proposed values is an obstruction to the existence of a configuration presenting them. Membership in $\mathcal{C}_{\mathrm{geo}}$ is a further restriction, since Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) produces a global tuple but does not certify that it satisfies the declared causal, boundary, or topological conditions. ◻

</div>

Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary) is the first and most basic restriction on the abstract completion of Paper 3: *its coordinates must be jointly realizable by global geometric objects.* Two further restrictions, invariance (Section [4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:invariants)) and separation (Section [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)), follow.

<div class="remark">

*Remark 19* (Obstructions are genuine).

<div id="rem:obstruction-genuine">

</div>

That the constraint is not vacuous is visible already in cohomological terms: the isomorphism class of $P$ is the class of $\{h_{ij}\}$ in the pointed set $\check H^1(M,\underline{G})$ (Remark [3.2](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:cech)), and characteristic numbers computed from $A$ are constrained by that class \[[4](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ChernWeil), [8](/source-readout/geometric-realization-of-completed-source-relations/references#bib-MilnorStasheff)\]. A demand such as “a $U(1)$ bundle over $S^2$ with first Chern number $\tfrac12$” fails at the cocycle stage; there is no compatible descent datum, hence no configuration, hence no point of $S_{\mathrm{geo}}$, hence no point of the realized completion. The Cartesian product of independently nominated relation values is, in general, strictly larger than what geometry attains.

</div>


# Curvature, holonomy, and invariant global relations

<div id="sec:invariants">

</div>

## Curvature and the Bianchi identity

The curvature of the connection $A$ is the $\mathfrak{g}$-valued $2$-form $$
F_A \;=\; \mathrm{d}A + A\wedge A
\qquad
\bigl(\text{equivalently } F_A=\mathrm{d}A+\tfrac12[A\wedge A]\bigr),\tag{22}$$ in the matrix convention of Definition [3.1](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#def:compatible). Under a gauge transformation represented locally by $h\colon U\to G$, $$
A \;\longmapsto\; A^{h}=h^{-1}Ah+h^{-1}\mathrm{d}h,
\qquad
F_A \;\longmapsto\; F_{A^h}=h^{-1}F_A\,h ,\tag{23}$$ so $F_A$ transforms in the adjoint representation: it is a section of $\Lambda^2T^*M\otimes \mathrm{ad}P$, and is *not* itself gauge invariant, though its $\operatorname{Ad}$-invariant polynomial functions are. The Bianchi identity is $$
D_A F_A \;=\; \mathrm{d}F_A + [A,F_A] \;=\;0 ,\tag{24}$$ an identity, not an equation of motion \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1)\].

The Levi-Civita connection $\nabla$ of $g$ is the unique affine connection with $$
\nabla g=0,
\qquad
\operatorname{Tor}(\nabla)=0 ,\tag{25}$$ with Riemann tensor $R^{\rho}{}_{\sigma\mu\nu}$, Ricci tensor $R_{\mu\nu}=R^{\rho}{}_{\mu\rho\nu}$, scalar curvature $R=g^{\mu\nu}R_{\mu\nu}$, and Einstein tensor $G_{\mu\nu}=R_{\mu\nu}-\tfrac12 R\,g_{\mu\nu}$ \[[12](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Wald)\].

## Invariant global relations

<div class="definition">

**Definition 4.1** (Invariant geometric relation).

<div id="def:invariant-relation">

</div>

A map $J\colon\mathcal{C}_{\mathrm{geo}}\to V$ into a set $V$ is an *invariant geometric relation* if it is constant on the arrows of $\mathfrak{G}_{\mathrm{geo}}$, i.e. $J(\Psi)=J(\Psi')$ whenever there is an arrow $\Psi\to\Psi'$. Equivalently, $J$ factors uniquely through $q\colon\mathcal{C}_{\mathrm{geo}}\to S_{\mathrm{geo}}$, defining $\bar J\colon S_{\mathrm{geo}}\to V$. We write $J$ for both maps when no confusion arises.

</div>

Invariance under $\mathfrak{G}_{\mathrm{geo}}$ means invariance under *both* gauge transformations and allowed diffeomorphisms (including preservation of orientation and time orientation). Both are required; neither alone suffices.

<div class="example">

**Example 4.2** (Integral invariants).

<div id="ex:integral-invariants">

</div>

Assume $M$ compact without boundary, or that $\mathcal{C}_{\mathrm{geo}}$ imposes decay/boundary conditions rendering the following integrals absolutely convergent. Then each of $$
J_{\mathrm{EH}}(\Psi)=\int_M R_g\,\mathrm{d}\!\operatorname{vol}_g,
\qquad
J_{\mathrm{YM}}(\Psi)=\int_M \bigl\langle F_A\wedge \ast F_A\bigr\rangle,
\qquad
J_{\mathrm{top}}(\Psi)=\int_M \bigl\langle F_A\wedge F_A\bigr\rangle\tag{26}$$ is an invariant geometric relation. Gauge invariance of the latter two follows from [(23)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:gauge-transf) with the $\operatorname{Ad}$-invariance of $\langle\cdot,\cdot\rangle$; diffeomorphism invariance follows because each integrand is a top-degree form built naturally from the fields and $\int_M f^*\omega=\int_M\omega$ for orientation-preserving $f$ (the Hodge star is natural: $f^*(\ast_{g'}\eta)=\ast_{g}(f^*\eta)$ when $f_*g=g'$ and $f$ preserves orientation). Concerning normalization, we make no claim beyond the following, which is all that is used: for $M$ compact oriented without boundary and $G$ compact, the de Rham class of the Chern–Weil form $\langle F_A\wedge F_A\rangle$ is independent of $A$ and represents (up to a normalization constant depending on the chosen $\operatorname{Ad}$-invariant form $\langle\cdot,\cdot\rangle$ and on the conventions for the Chern–Weil homomorphism) a characteristic class of $P$ in $H^4_{\mathrm{dR}}(M;\mathbb{R})$ \[[4](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ChernWeil), [8](/source-readout/geometric-realization-of-completed-source-relations/references#bib-MilnorStasheff), [7](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu2)\]. Hence $J_{\mathrm{top}}$ is constant on each topological sector. We do *not* assert a specific integrality normalization here; any such normalization is a convention that must be fixed together with $\langle\cdot,\cdot\rangle$, and none of the results below depend on the choice.

</div>

<div class="example">

**Example 4.3** (Spectral relations).

<div id="ex:spectral">

</div>

Let $\mathcal{D}[\Psi]$ be an operator constructed naturally from the configuration data $(g,A,\Phi,\mathcal{B})$, together with a *specified domain* determined by $\mathcal{B}$. Then any function of $\mathcal{D}[\Psi]$ that is invariant under isomorphism is an invariant geometric relation. The spectrum, when it is well defined, is the leading example. The precise statement requires care, and we distinguish two cases.

*(i) Intertwining.* An arrow $F\colon\Psi\to\Psi'$ of $\mathfrak{G}_{\mathrm{geo}}$ induces a linear isomorphism $\mathcal{U}_F$ from the space of sections over $\Psi$ to the space of sections over $\Psi'$, carrying the domain of $\mathcal{D}[\Psi]$ onto the domain of $\mathcal{D}[\Psi']$ and satisfying the *operator intertwining* relation $$
\mathcal{D}[\Psi']\circ\mathcal{U}_F=\mathcal{U}_F\circ\mathcal{D}[\Psi] .\tag{27}$$ This holds by naturality of the construction and requires no metric structure on $W$. It already implies that any relation depending only on the operator up to linear isomorphism (its spectrum as a set, when the operator is, say, closed with nonempty resolvent set) is $\mathfrak{G}_{\mathrm{geo}}$-invariant.

*(ii) Unitary equivalence.* If, in addition, the representation $\rho$ is unitary (or, more generally, $W$ carries a $\rho$-invariant Hermitian inner product), the associated bundle carries a bundle metric preserved by $\hat F_\rho$, the base measure $\mathrm{d}\!\operatorname{vol}_g$ is preserved by the allowed $f$, and the declared boundary conditions define a self-adjoint realization of $\mathcal{D}$ on the resulting Hilbert space, then $\mathcal{U}_F$ is *unitary* and [(27)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:intertwine) is a unitary equivalence. In that case the spectrum as a *multiset* (with multiplicities), the heat trace $\operatorname{tr}e^{-t\mathcal{D}}$, zeta values, and eigenvalue gaps are all invariant geometric relations.

An arbitrary finite-dimensional $\rho\colon G\to\mathrm{GL}(W)$ is not unitary, so case (ii) requires its stated hypotheses; absent them, only the intertwining statement (i) is available. In either case the specification of the domain is essential: without it the spectrum is not a function of $[\Psi]$, and distinct self-adjoint extensions yield distinct invariant relations.

</div>

## Holonomy and Wilson observables

Let $\gamma$ be a piecewise-smooth closed curve in $M$ based at $x\in M$, and let $p\in P_x$. Parallel transport of $A$ along $\gamma$ starting at $p$ ends at $p\cdot a$ for a unique $a\in G$; writing $\operatorname{Hol}_\gamma^{p}(A):=a$, a change of starting point $p\mapsto p\cdot b$ gives $\operatorname{Hol}_\gamma^{p\cdot b}(A)=b^{-1}\operatorname{Hol}_\gamma^p(A)\,b$. In a local trivialization with gauge $h$, this reads $$
\operatorname{Hol}_\gamma(A^{h})\;=\;h(x)^{-1}\,\operatorname{Hol}_\gamma(A)\,h(x) .\tag{28}$$

<div class="proposition">

**Proposition 4.4** (Gauge invariance of holonomy class and Wilson observables).

<div id="prop:wilson-gauge">

</div>

*For a fixed based loop $\gamma$, the conjugacy class $$
\bigl[\operatorname{Hol}_\gamma(A)\bigr]_{\mathrm{conj}} \in G/\!\!\sim_{\mathrm{conj}}\tag{29}$$ is independent of the choice of $p\in P_x$ and is invariant under all gauge transformations. Consequently, for any finite-dimensional representation $\sigma$ of $G$, the Wilson observable $$
W_{\gamma,\sigma}(A)\;=\;\operatorname{tr}_\sigma \operatorname{Hol}_\gamma(A)\tag{30}$$ is gauge invariant. If $A$ is flat, $W_{\gamma,\sigma}$ depends on $\gamma$ only through its free homotopy class.*

</div>

<div class="proof">

*Proof.* Independence of $p$ and gauge invariance are immediate from [(28)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:hol-conj), since a conjugacy class is invariant under conjugation and $\operatorname{tr}_\sigma$ is a class function. The final statement holds because for flat $A$ parallel transport depends only on the homotopy class of the path rel endpoints, and a free homotopy of based loops changes the holonomy by conjugation, which $\operatorname{tr}_\sigma$ does not see \[[6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1)\]. ◻

</div>

## Loops and diffeomorphism invariance

<div id="sec:diff-loops">

</div>

Proposition [4.4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#prop:wilson-gauge) concerns *gauge* invariance only. A Wilson observable attached to a *fixed* loop $\gamma\subset M$ is in general *not* invariant under the allowed diffeomorphisms, because a diffeomorphism $f$ moves the loop: $W_{\gamma,\sigma}(f_*A)=W_{f^{-1}\circ\gamma,\sigma}(A)$, and $f^{-1}\circ\gamma\neq\gamma$ in general. Three constructions restore genuine $\mathfrak{G}_{\mathrm{geo}}$-invariance. They are mutually exclusive as declarations, and a model must state which it adopts; each is used somewhere below.

**(L1) Include the loop in the configuration.** Enlarge the tuple [(2)](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#eq:config) to $(M,g,P,A,\Phi,\mathcal{B},\gamma)$ and extend the arrows of $\mathfrak{G}_{\mathrm{geo}}$ to carry $\gamma$ to $f\circ\gamma$. Then $\Psi\mapsto W_{\gamma,\sigma}(A)$ is invariant on the enlarged groupoid by construction: $W_{f\circ\gamma,\sigma}(f_*A)=W_{\gamma,\sigma}(A)$, since parallel transport is natural under bundle isomorphisms. The loop is then part of the source data, not a background structure, and $S_{\mathrm{geo}}$ is correspondingly enlarged.

**(L2) Use an invariant constructed from the whole loop space.** Examples: the *set* of Wilson values $\{W_{\gamma,\sigma}(A):\gamma\in\Omega(M,x)\}\subseteq\mathbb{C}$ (a subset of $\mathbb{C}$, hence unaffected by any relabelling of loops); the holonomy group $\mathrm{Hol}_x(A)\le G$ up to conjugacy; or, for flat $A$, the holonomy homomorphism $\pi_1(M,x)\to G$ taken modulo conjugation *and* modulo the outer action of $f_*$ on $\pi_1(M,x)$. Each is $\mathfrak{G}_{\mathrm{geo}}$-invariant without enlarging the configuration, precisely because the diffeomorphism permutes the loops over which the construction ranges.

**(L3) Let the declared data pin a homology class.** If $\mathcal{B}$ distinguishes a class $c\in H_1(M;\mathbb{Z})$ that every allowed diffeomorphism preserves, and if the observable depends on $\gamma$ only through $c$, then it is invariant. This is what happens in Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1): there $G=U(1)$ is abelian and $A$ is flat, so $\operatorname{Hol}_\gamma(A)$ depends on $\gamma$ only through its class in $H_1(S^1;\mathbb{Z})\cong\mathbb{Z}$; the allowed diffeomorphisms are declared to be the orientation-preserving ones, which act trivially on $H_1(S^1;\mathbb{Z})$; hence $\operatorname{Hol}_{\gamma_0}(A)$ is a genuine function on $S_{\mathrm{geo}}$. (Under an orientation-*reversing* diffeomorphism the generator is sent to its inverse and $\operatorname{Hol}\mapsto\operatorname{Hol}^{-1}$; this is exactly why the orientation is part of the declared data.)

<div class="remark">

*Remark 24* (Curvature does not determine transport).

<div id="rem:curv-vs-hol">

</div>

Local curvature and global transport are related but not interchangeable. Curvature is the infinitesimal holonomy: the Ambrose–Singer theorem \[[2](/source-readout/geometric-realization-of-completed-source-relations/references#bib-AmbroseSinger), [6](/source-readout/geometric-realization-of-completed-source-relations/references#bib-KobayashiNomizu1)\] states that the Lie algebra of the holonomy group of a connection on a connected principal bundle is spanned by the curvature values $F_A(X,Y)$ at points reachable from the base point by horizontal curves, transported back along those curves. Nevertheless holonomy around noncontractible cycles is not determined by $F_A$: flat connections with $F_A\equiv 0$ can have arbitrary holonomy homomorphisms $\pi_1(M)\to G$ up to conjugacy. This is not a formal curiosity; it is the content of the Aharonov–Bohm effect \[[1](/source-readout/geometric-realization-of-completed-source-relations/references#bib-AharonovBohm)\] and of the Wu–Yang analysis of the global significance of gauge potentials \[[13](/source-readout/geometric-realization-of-completed-source-relations/references#bib-WuYang)\], in which the physically operative datum is a holonomy in a region where the field strength vanishes identically. Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) is the sharpest mathematical illustration: there $F_A\equiv0$ identically, and yet the reduced source is a full circle of physically inequivalent configurations, completely parametrized by holonomy.

</div>

<div class="remark">

*Remark 25* (No finite separating list of curvature scalars).

<div id="rem:no-finite-separation">

</div>

It is not assumed anywhere below that a finite family of curvature scalars, or any fixed finite family of local invariants, separates arbitrary Lorentzian geometries. It does not: in Lorentzian signature there exist non-flat metrics all of whose polynomial scalar curvature invariants vanish identically, and which therefore cannot be distinguished from flat space by any such family; the plane-wave and more general Kundt-type “VSI” spacetimes are the standard examples \[[10](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Pravda2002)\]. Separation is therefore never invoked as a general fact. Where it is needed it is proved on the restricted domain of the model, as in Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class).

</div>


# Geometric realization of the minimal completion

<div id="sec:realization">

</div>

## The geometric evaluation map

<div class="definition">

**Definition 5.1** (Declared readout and relation family).

<div id="def:readout">

</div>

Let $$
p_{\mathrm{geo}}\colon S_{\mathrm{geo}}\longrightarrow T\tag{31}$$ be a declared Tier-1 readout: a map, defined on the reduced source, recording exactly the data retained by the Tier-1 description of the model. Let $A$ be an index *set* and let $$
J_\alpha\colon S_{\mathrm{geo}}\longrightarrow V_\alpha,
\qquad \alpha\in A,\tag{32}$$ be invariant geometric relations in the sense of Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation). Write $J_A=(J_\alpha)_{\alpha\in A}$ and $$
j_A^{\mathrm{geo}}\;=\;\bigl(p_{\mathrm{geo}},\;J_A\bigr)\colon
S_{\mathrm{geo}}\longrightarrow T\times\prod_{\alpha\in A}V_\alpha .\tag{33}$$

</div>

<div class="definition">

**Definition 5.2** (Geometrically realized completion).

<div id="def:egeo">

</div>

The *geometrically realized completion* of $p_{\mathrm{geo}}$ relative to $\{J_\alpha\}_{\alpha\in A}$ is $$
E_A^{\mathrm{geo}}\;:=\; \operatorname{Im}j_A^{\mathrm{geo}}\;\subseteq\; T\times\prod_{\alpha\in A}V_\alpha ,\tag{34}$$ with corestriction $e_A^{\mathrm{geo}}\colon S_{\mathrm{geo}}\twoheadrightarrow E_A^{\mathrm{geo}}$ and forgetful map $$
u_A\colon E_A^{\mathrm{geo}}\longrightarrow T,
\qquad
u_A\bigl(t,(v_\alpha)\bigr)=t ,\tag{35}$$ so that $u_A\circ e_A^{\mathrm{geo}}=p_{\mathrm{geo}}$ by construction.

</div>

Note that $E_A^{\mathrm{geo}}$ is the image, *not* the ambient product. This restriction performs the essential mathematical work: it enforces all the compatibility relations among metric, bundle, connection, matter, boundary, and invariant data that Section [3](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#sec:descent) exhibited. The Cartesian product of independently written coordinate values is in general *not* realizable (Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary), Remark [3.8](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:obstruction-genuine)).

## The restricted realization theorem

<div class="theorem">

**Theorem 5.3** (Restricted geometric realization).

<div id="thm:restricted-realization">

</div>

*Fix an admissibility class $\mathcal{C}_{\mathrm{geo}}$, a readout $p_{\mathrm{geo}}$, and a family $\{J_\alpha\}_{\alpha\in A}$ of invariant geometric relations on $S_{\mathrm{geo}}$. Then:*

1.  **(Realizability.)* For every $\xi\in E_A^{\mathrm{geo}}$ there exists $[\Psi]\in S_{\mathrm{geo}}$ with $e_A^{\mathrm{geo}}([\Psi])=\xi$.*

2.  **(Factorization.)* $p_{\mathrm{geo}}=u_A\circ e_A^{\mathrm{geo}}$ and $J_\alpha=\mathrm{pr}_\alpha\circ e_A^{\mathrm{geo}}$ for every $\alpha$.*

3.  **(Terminality.)* If $\pi\colon S_{\mathrm{geo}}\twoheadrightarrow E$ is any surjection through which $p_{\mathrm{geo}}$ and every $J_\alpha$ factor, say $p_{\mathrm{geo}}=u\circ\pi$ and $J_\alpha=\kappa_\alpha\circ\pi$, then there is a *unique* map $\theta\colon E\to E_A^{\mathrm{geo}}$ with $\theta\circ\pi=e_A^{\mathrm{geo}}$; $\theta$ is surjective and satisfies $u_A\circ\theta=u$ and $\mathrm{pr}_\alpha\circ\theta=\kappa_\alpha$.*

*Thus $E_A^{\mathrm{geo}}$ is the canonical minimal completion of $p_{\mathrm{geo}}$ relative to $\{J_\alpha\}$, in the sense of Paper 3 \[[18](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST3)\], computed on the geometric source $S_{\mathrm{geo}}$.*

</div>

<div class="proof">

*Proof.* (1) is immediate: $E_A^{\mathrm{geo}}$ is by definition the image of $j_A^{\mathrm{geo}}$. (2) holds by definition of $j_A^{\mathrm{geo}}$ and of the projections; well-definedness of $p_{\mathrm{geo}}$ and each $J_\alpha$ *as maps on $S_{\mathrm{geo}}$* is exactly the invariance hypothesis of Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation), which is where gauge and diffeomorphism invariance are consumed.

\(3\) Define $\theta(e):=e_A^{\mathrm{geo}}(s)$ for any $s\in\pi^{-1}(e)$; the fibre is nonempty since $\pi$ is surjective. This is well defined: if $\pi(s)=\pi(s')=e$ then $p_{\mathrm{geo}}(s)=u(\pi(s))=u(\pi(s'))=p_{\mathrm{geo}}(s')$ and likewise $J_\alpha(s)=\kappa_\alpha(\pi(s))=\kappa_\alpha(\pi(s'))=J_\alpha(s')$ for every $\alpha$; hence $j_A^{\mathrm{geo}}(s)=j_A^{\mathrm{geo}}(s')$, i.e. $e_A^{\mathrm{geo}}(s)=e_A^{\mathrm{geo}}(s')$. By construction $\theta\circ\pi=e_A^{\mathrm{geo}}$, and since $e_A^{\mathrm{geo}}$ is surjective onto $E_A^{\mathrm{geo}}$, so is $\theta$. Uniqueness: any $\theta'$ with $\theta'\circ\pi=e_A^{\mathrm{geo}}$ agrees with $\theta$ on $\pi(S_{\mathrm{geo}})=E$, hence everywhere. The compatibilities follow by evaluating on $\pi(s)$ and using surjectivity of $\pi$.

This is the terminal universal property established in Paper 3 \[[18](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST3)\], applied to the source set $S_{\mathrm{geo}}$, the readout $p_{\mathrm{geo}}$, and the relation family $\{J_\alpha\}$; the additional content here is that $S_{\mathrm{geo}}$ is the *reduced* geometric source and that the $J_\alpha$ are *invariant* geometric relations, so that all maps involved are functions of physical orbits rather than of gauge or coordinate representatives. ◻

</div>

<div class="remark">

*Remark 29* (Relative, not absolute).

<div id="rem:relative">

</div>

Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization) is *restricted* in two independent senses, both essential. First, it realizes the completion only *relative to the declared family* $\{J_\alpha\}$: a different family gives a different $E_A^{\mathrm{geo}}$, generally neither finer nor coarser. Second, it realizes only what geometry attains: $E_A^{\mathrm{geo}}$ is an image, and Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary) shows that this image can be a proper subset of the abstract product. Neither the theorem nor anything else in this paper asserts that an arbitrarily nominated abstract completion $E_A$ of Paper 3 is geometrically realizable. It is realizable exactly when it is isomorphic, over $T$, to $E_A^{\mathrm{geo}}$ for some admissible $\mathcal{C}_{\mathrm{geo}}$, readout, and invariant relation family, and establishing that in a given model is work.

</div>

## When does the completion reconstruct the source?

<div class="proposition">

**Proposition 5.5** (Orbit reconstruction criterion).

<div id="prop:orbit-reconstruction">

</div>

*The completion map $e_A^{\mathrm{geo}}\colon S_{\mathrm{geo}}\to E_A^{\mathrm{geo}}$ is injective, equivalently, bijective onto $E_A^{\mathrm{geo}}$, if and only if the family $$
\{p_{\mathrm{geo}}\}\cup\{J_\alpha : \alpha\in A\}\tag{36}$$ *separates points of $S_{\mathrm{geo}}$*: for all $[\Psi],[\Psi']\in S_{\mathrm{geo}}$, equality of the readouts and of every $J_\alpha$ forces $[\Psi]=[\Psi']$. In that case $S_{\mathrm{geo}}\cong E_A^{\mathrm{geo}}$ as sets over $T$.*

</div>

<div class="proof">

*Proof.* By construction $e_A^{\mathrm{geo}}([\Psi])=e_A^{\mathrm{geo}}([\Psi'])$ if and only if the readouts agree and every $J_\alpha$ agrees. Injectivity of $e_A^{\mathrm{geo}}$ is therefore literally the separation property. Surjectivity onto $E_A^{\mathrm{geo}}$ always holds, by Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization)(1). The identification is over $T$ because $u_A\circ e_A^{\mathrm{geo}}=p_{\mathrm{geo}}$. ◻

</div>

Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) converts a question about completions into a question of invariant theory: *does the declared family separate the orbits?* No general answer exists, and none is asserted (Remark [4.6](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#rem:no-finite-separation)). Separation must be proved on the restricted domain relevant to the model. Section [6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) carries out exactly such a proof in a case where the answer is affirmative and complete.


# Classification of flat $U(1)$ connections on an oriented circle

<div id="sec:u1">

</div>

This section supplies an exact classification example: a restricted domain on which the separation hypothesis of Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) can be *proved*, and on which the geometrically realized completion can be identified on the nose.

## The model and its conventions

<div class="convention">

**Convention 6.1** (Scope of the circle model).

<div id="conv:circle-scope">

</div>

This section is a deliberate one-dimensional specialization, and two stipulations of the general framework are suspended for it. Both are recorded here, since leaving either implicit would create a genuine inconsistency with Section [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source).

*Dimension.* The base is $M=S^1_L$, so $\dim M=1$ rather than the $\dim M=4$ of Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic), and the metric is Riemannian rather than Lorentzian. Nothing in Sections [2](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#sec:source)–[5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization) used the dimension or the signature: the groupoid, the orbit space, Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation), Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization), and Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) are all dimension- and signature-agnostic, and it is only these that the present section invokes. The descent theorem and the variational apparatus of Sections [7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:variational)–[8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether) are not used here.

*The metric and the allowed maps.* A tension must be resolved explicitly. The model fixes the standard metric $\mathrm{d}x^{2}$ on $S^1_L$ while also admitting *every* orientation-preserving diffeomorphism as an allowed base map; under the groupoid of Definition [2.8](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:groupoid), whose arrows satisfy $f_*g=g'$, a fixed metric would instead restrict the allowed base maps to its isometries, namely the rigid rotations. Of the three consistent ways to proceed, restricting the allowed diffeomorphisms to orientation-preserving isometries; transforming the metric along with the connection; or defining the circle source purely as the gauge quotient and treating the diffeomorphism question separately, we adopt the third, which is the formulation the arguments below actually use.

Accordingly, in this section the metric $\mathrm{d}x^{2}$ and its measure $\mathrm{d}x$ are treated as *fixed background structure*, not as part of the configuration: the configuration is the connection $A$ alone, and the reduced circle source is *defined* to be the gauge quotient $$
S_{\mathrm{geo}}\;:=\; \mathcal{C}_{\mathrm{geo}}^{\,\circ}\big/\operatorname{Gau}(P) .\tag{37}$$ The background metric is what gives the operator $\mathcal{D}_A$ of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop) its meaning, and it is not transformed by the maps considered below. The role of the orientation-preserving diffeomorphisms is then a separate matter, treated separately: they are *not* arrows acting on a metric they would have to preserve, but are used solely through the fact that they fix the homology generator $c$, and hence preserve holonomy. Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(1) shows that they consequently identify no classes beyond gauge equivalence, so that [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) loses nothing by omitting them; and Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(2) shows that the spectral relation is invariant under them for the same reason. Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model) is to be read in this light.

</div>

<div class="definition">

**Definition 6.2** (The circle model).

<div id="def:circle-model">

</div>

Fix $L>0$ and let $M=S^1_L:=\mathbb{R}/L\mathbb{Z}$ with its standard orientation and the global angular coordinate $x$ (well defined modulo $L$). Let $G=U(1)$ and let $P=S^1_L\times U(1)$ be the trivial bundle; this is no loss of generality, since every principal $U(1)$-bundle over $S^1$ is trivial (the classifying space argument gives $\bigl[S^1,BU(1)\bigr]\cong H^2(S^1;\mathbb{Z})=0$; equivalently, every $U(1)$-bundle over a one-complex is trivial \[[11](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Steenrod)\]). Let $\mathcal{C}_{\mathrm{geo}}^{\,\circ}$ be the class of smooth connections $A$ on $P$, and let $\operatorname{Gau}(P)=C^\infty(S^1_L,U(1))$ be the gauge group; by Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope) the configuration is the connection alone, and the reduced source is the gauge quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def). The declared data $\mathcal{B}$ consist of the orientation of $S^1_L$, the resulting generator $c=[\gamma_0]\in H_1(S^1_L;\mathbb{Z})\cong\mathbb{Z}$ of the fundamental cycle, $\gamma_0(s)=s$, $s\in[0,L]$, and the fixed background metric $\mathrm{d}x^{2}$ with its measure. The orientation-preserving diffeomorphisms of $S^1_L$ fix $c$; holonomy around $c$ is therefore a legitimate function on orbits by mechanism (L3) of Section [4.4](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#sec:diff-loops), and its invariance under those diffeomorphisms is established in Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance).

</div>

Write a connection in the global trivialization as $$
A=a(x)\,\mathrm{d}x,
\qquad a\in C^\infty(S^1_L,\mathbb{R}) .\tag{38}$$ Because $\dim M=1$, every $2$-form on $M$ vanishes; hence $$
F_A=\mathrm{d}A\equiv 0 \qquad\text{for every }A .\tag{39}$$ *Every* connection on the circle is flat. Local curvature is identically zero on this entire domain and therefore carries no information whatsoever; whatever separates orbits here must be global.

<div class="convention">

**Convention 6.3** (Gauge action and charged covariant derivative).

<div id="conv:u1-norm">

</div>

Identify $\mathfrak{u}(1)=i\mathbb{R}$ and write connections with the real potential $a$ as in [(38)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:A-circle). A gauge transformation is a smooth map $u\colon S^1_L\to U(1)$, acting on the connection by $$
A\;\longmapsto\;A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u ,\tag{40}$$ which is real-valued because $-i\,u^{-1}\mathrm{d}u$ is real for $|u|=1$. On a charged scalar $\phi\in C^\infty(S^1_L,\mathbb{C})$ of unit charge, the same $u$ acts by $$
\phi\;\longmapsto\;\phi^{u}\;=\;u\,\phi ,\tag{41}$$ and the charged covariant derivative is $$
D_A\phi\;=\;\bigl(\partial_x - i\,a(x)\bigr)\phi\;\mathrm{d}x .\tag{42}$$ These three conventions are mutually consistent. Writing $u=e^{i\varphi}$ locally, so that $-i\,u^{-1}\mathrm{d}u=\mathrm{d}\varphi$ and hence $a^{u}=a+\varphi'$, we get $$\bigl(\partial_x-i\,a^{u}\bigr)\phi^{u}
=\bigl(\partial_x - i(a+\varphi')\bigr)\bigl(e^{i\varphi}\phi\bigr)
= e^{i\varphi}\Bigl(i\varphi'\phi+\partial_x\phi - i a\phi - i\varphi'\phi\Bigr)
= u\,\bigl(\partial_x - ia\bigr)\phi ,$$ so $D_{A^u}\phi^{u}=u\,D_A\phi$ transforms covariantly, as required.

</div>

<div class="definition">

**Definition 6.4** (Holonomy on the circle).

<div id="def:hol-circle">

</div>

For $A=a\,\mathrm{d}x$ set $$
\operatorname{Hol}(A)\;:=\;\exp\!\left(i\int_0^L a(x)\,\mathrm{d}x\right)\;\in\;U(1),\tag{43}$$ the holonomy around the declared fundamental cycle $\gamma_0$.

</div>

## The classification theorem

<div class="theorem">

**Theorem 6.5** (Holonomy classification).

<div id="thm:hol-class">

</div>

*Two smooth $U(1)$ connections $A=a\,\mathrm{d}x$ and $A'=a'\,\mathrm{d}x$ on $S^1_L$ are gauge equivalent if and only if $$
\operatorname{Hol}(A)=\operatorname{Hol}(A') .\tag{44}$$ Consequently $[A]\mapsto\operatorname{Hol}(A)$ is a bijection $$
\mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr)
\;:=\;
\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)
\;\;\xrightarrow{\ \cong\ }\;\;
U(1),\tag{45}$$ and it is a homeomorphism when the left-hand side carries the quotient of the $C^\infty$ topology.*

</div>

<div class="proof">

*Proof.* *Step 1: holonomy is gauge invariant.* Let $u\in C^\infty(S^1_L,U(1))$. Pull $u$ back to the universal cover: the composite $\tilde u:=u\circ\mathrm{pr}\colon[0,L]\to U(1)$, where $\mathrm{pr}(s)=s\bmod L$, lifts along the covering $\mathbb{R}\xrightarrow{\,t\mapsto e^{it}\,}U(1)$ to a smooth $\varphi\colon[0,L]\to\mathbb{R}$ with $u(x)=e^{i\varphi(x)}$ for $x\in[0,L]$, because $[0,L]$ is simply connected. Single-valuedness of $u$ on $S^1_L$ forces $$
\varphi(L)-\varphi(0)\;=\;2\pi n,
\qquad n=\deg(u)\in\mathbb{Z}.\tag{46}$$ Now $-i\,u^{-1}\mathrm{d}u = -i\,e^{-i\varphi}\cdot i\varphi'\,e^{i\varphi}\,\mathrm{d}x
=\varphi'\,\mathrm{d}x=\mathrm{d}\varphi$, so the declared action [(40)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-gauge) gives $$
A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u\;=\;A+\mathrm{d}\varphi,
\qquad\text{i.e.}\qquad
a^{u}=a+\varphi' .\tag{47}$$ Hence the period changes by $+2\pi n$: $$\int_0^L a^{u}
=\int_0^L a+\bigl(\varphi(L)-\varphi(0)\bigr)
=\int_0^L a+2\pi n ,$$ and therefore $$\operatorname{Hol}(A^{u})
=\exp\!\Bigl(i\int_0^L a + 2\pi i n\Bigr)
=\exp\!\Bigl(i\int_0^L a\Bigr)
=\operatorname{Hol}(A) .$$ The gauge group can shift the period integral, but only by integer multiples of $2\pi$, which $\exp(i\,\cdot\,)$ does not see. (The sign of the shift is $+2\pi n$ with the declared convention; either sign would of course leave the holonomy unchanged, but we record the correct one.)

*Step 2: equal holonomy implies gauge equivalence.* Suppose $\operatorname{Hol}(A)=\operatorname{Hol}(A')$. Then $\exp\bigl(i\int_0^L(a'-a)\bigr)=1$, so there is $n\in\mathbb{Z}$ with $$
\int_0^L\bigl(a'(x)-a(x)\bigr)\,\mathrm{d}x \;=\; 2\pi n .\tag{48}$$ Define $$
\chi(x)\;:=\;\int_0^x\bigl(a'(y)-a(y)\bigr)\,\mathrm{d}y,
\qquad x\in[0,L],\tag{49}$$ so that $\chi$ is smooth with $$
\chi'=a'-a
\qquad\text{and}\qquad
\chi(L)-\chi(0)=2\pi n\tag{50}$$ by [(48)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:period-int). The function $\chi$ itself need *not* descend to $S^1_L$, but $$
u(x)\;:=\;e^{\,i\chi(x)}\tag{51}$$ does: $u(L)=e^{i\chi(0)}e^{2\pi i n}=e^{i\chi(0)}=u(0)$, and all derivatives match at the seam because $a,a'$ are smooth and $L$-periodic, so $\chi'$ and all its derivatives are $L$-periodic. Hence $u\in C^\infty(S^1_L,U(1))$ is a bona fide gauge transformation, of degree $n$. By exactly the computation of Step 1 applied to this $u$ (with $\varphi=\chi$), $$
-i\,u^{-1}\mathrm{d}u \;=\; \mathrm{d}\chi \;=\; (a'-a)\,\mathrm{d}x \;=\; A'-A ,\tag{52}$$ using [(50)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:chi-prime). Therefore, directly from the declared action [(40)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-gauge) in the form [(47)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Au-explicit), $$A^{u}\;=\;A-i\,u^{-1}\mathrm{d}u\;=\;A+(A'-A)\;=\;A' .$$ So $u$ itself carries $A$ to $A'$, and the two connections are gauge equivalent.

*Step 3: the bijection.* By Steps 1 and 2, $\operatorname{Hol}$ descends to an injection $\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)\hookrightarrow U(1)$. It is surjective: for $\vartheta\in\mathbb{R}$ the constant connection $$
A_\vartheta:=\frac{\vartheta}{L}\,\mathrm{d}x
\qquad\text{satisfies}\qquad
\operatorname{Hol}(A_\vartheta)=e^{i\vartheta},\tag{53}$$ and every element of $U(1)$ is of the form $e^{i\vartheta}$. Hence [(45)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:moduli) is a bijection.

*Step 4: the homeomorphism.* Give $\mathcal{C}_{\mathrm{geo}}^{\,\circ}\cong C^\infty(S^1_L,\mathbb{R})$ its usual Fréchet ($C^\infty$) topology and the quotient $\mathcal{M}:=\mathcal{C}_{\mathrm{geo}}^{\,\circ}/\operatorname{Gau}(P)$ the quotient topology, with projection $\mathrm{pr}_{\mathcal{M}}\colon\mathcal{C}_{\mathrm{geo}}^{\,\circ}\to\mathcal{M}$. Write $\Theta\colon\mathcal{M}\to U(1)$ for the bijection [(45)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:moduli).

$\Theta$ is continuous: the map $\mathcal{C}_{\mathrm{geo}}^{\,\circ}\to U(1)$, $A\mapsto\exp(i\int_0^L a)$, is continuous (indeed it is continuous already in the $L^1$ topology, hence in $C^\infty$), and it is constant on $\operatorname{Gau}(P)$-orbits by Step 1; the universal property of the quotient topology then makes $\Theta$ continuous.

For the inverse, we do *not* attempt to choose a global continuous argument $\vartheta$ on $U(1)$, no such choice exists. Instead define $$
\sigma\colon\mathbb{R}\longrightarrow\mathcal{M},
\qquad
\sigma(\vartheta):=\mathrm{pr}_{\mathcal{M}}\bigl(A_\vartheta\bigr)
=\bigl[\tfrac{\vartheta}{L}\,\mathrm{d}x\bigr] .\tag{54}$$ The map $\mathbb{R}\to\mathcal{C}_{\mathrm{geo}}^{\,\circ}$, $\vartheta\mapsto A_\vartheta$, is continuous (it is linear into the constants, and the $C^\infty$ seminorms of $A_\vartheta$ depend continuously on $\vartheta$), so $\sigma$ is continuous as a composite with $\mathrm{pr}_{\mathcal{M}}$.

$\sigma$ is $2\pi$-periodic. Indeed $A_{\vartheta+2\pi}-A_\vartheta=\tfrac{2\pi}{L}\mathrm{d}x$, and by Step 2 (with $a=\vartheta/L$, $a'=(\vartheta+2\pi)/L$, so that $\int_0^L(a'-a)=2\pi$, i.e. $n=1$) the connections $A_\vartheta$ and $A_{\vartheta+2\pi}$ are gauge equivalent; explicitly the gauge transformation is $u(x)=e^{2\pi i x/L}$, of degree $1$. Hence $\sigma(\vartheta+2\pi)=\sigma(\vartheta)$ for all $\vartheta$.

Therefore $\sigma$ factors through the quotient $\mathbb{R}\to\mathbb{R}/2\pi\mathbb{Z}$, and since $\mathbb{R}/2\pi\mathbb{Z}\cong U(1)$ via $\vartheta\bmod 2\pi\mapsto e^{i\vartheta}$ (a homeomorphism), we obtain a continuous map $$
\bar\sigma\colon U(1)\longrightarrow\mathcal{M},
\qquad
\bar\sigma\bigl(e^{i\vartheta}\bigr)=\sigma(\vartheta) ,\tag{55}$$ well defined and continuous by the universal property of the quotient $\mathbb{R}\to\mathbb{R}/2\pi\mathbb{Z}$ (which is an open, hence quotient, map). Finally $\Theta\circ\bar\sigma=\mathrm{id}_{U(1)}$ by [(53)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Atheta), and $\bar\sigma\circ\Theta=\mathrm{id}_{\mathcal{M}}$ because both sides are the identity on the classes $[A_\vartheta]$, which exhaust $\mathcal{M}$ by Step 3 together with the injectivity of $\Theta$. Hence $\bar\sigma=\Theta^{-1}$ is continuous, and $\Theta$ is a homeomorphism. ◻

</div>

<div class="remark">

*Remark 36* (Where the hypotheses are used).

<div id="rem:u1-hyps">

</div>

Three hypotheses were used and cannot be dropped. *Smoothness and periodicity* of $a,a'$ give smoothness of $u$ across the seam in Step 2. *Connectedness of $S^1$*, with $\pi_1(S^1)\cong\mathbb{Z}$ generated by a single class, is what makes one period integral a complete invariant. *Orientation*, fixed in Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model), is what makes $\int_0^L$ well defined with a sign: reversing orientation sends $\operatorname{Hol}\mapsto\operatorname{Hol}^{-1}$, and it is precisely this ambiguity that reappears in Corollary [6.9](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:spec). The declaration of the allowed diffeomorphism group as the orientation-preserving one is therefore part of the hypothesis of the theorem.

</div>

## The realized completions

<div class="corollary">

**Corollary 6.7** (Exact geometric realization of the holonomy completion).

<div id="cor:hol-completion">

</div>

*In the circle model, take the curvature readout $$
p_F\colon S_{\mathrm{geo}}=\mathcal{M}_{\mathrm{flat}}(S^1,U(1))\longrightarrow T=\{0\},
\qquad
p_F\bigl([A]\bigr)=F_A=0 ,\tag{56}$$ which by [(39)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:flat) is constant and hence retains *no* information, and take the single invariant relation $J_{\mathrm{hol}}([A])=\operatorname{Hol}(A)\in U(1)$. Then $$
E_{\mathrm{hol}}
=\operatorname{Im}\bigl(p_F,J_{\mathrm{hol}}\bigr)
\;\cong\;
\mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr)
\;\cong\; U(1),\tag{57}$$ and the completion map $e_{\mathrm{hol}}\colon S_{\mathrm{geo}}\to E_{\mathrm{hol}}$ is a *bijection*.*

</div>

<div class="proof">

*Proof.* $\operatorname{Im}(p_F,J_{\mathrm{hol}})=\{0\}\times\operatorname{Im}J_{\mathrm{hol}}=\{0\}\times U(1)\cong U(1)$, by the surjectivity established in Step 3 of Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class). The family $\{p_F\}\cup\{J_{\mathrm{hol}}\}$ separates orbits by the injectivity established there, so Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) gives injectivity of $e_{\mathrm{hol}}$; surjectivity is Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization)(1). ◻

</div>

Corollary [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion) is the sharpest illustration in this paper of the mechanism the sequence is about. The readout $p_F$ is maximally degenerate, it is constant, so on its own it distinguishes nothing. Yet the reduced source is not a point: it is a circle of genuinely inequivalent physical configurations. The completion recovers exactly that circle, from a single global relation, on a domain where local curvature vanishes identically. Holonomy here is not one invariant among many: it separates *all* gauge orbits and therefore reconstructs the reduced geometric source completely. This is the mathematical content of the Aharonov–Bohm and Wu–Yang observations \[[1](/source-readout/geometric-realization-of-completed-source-relations/references#bib-AharonovBohm), [13](/source-readout/geometric-realization-of-completed-source-relations/references#bib-WuYang)\].

<div class="lemma">

**Lemma 6.8** (The reduced circle source, and invariance of the charged spectrum).

<div id="lem:spec-invariance">

</div>

*In the circle model of Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model), with the scope fixed by Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope):*

1.  *The orientation-preserving diffeomorphisms of $S^1_L$ identify no connection classes beyond gauge equivalence: for every such $f$ and every $A$, the pushforward $f_*A$ is gauge equivalent to $A$. Hence adjoining them to the gauge group would coarsen nothing, and the reduced source [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) may be written $$
          S_{\mathrm{geo}}\;=\; \mathcal{C}_{\mathrm{geo}}^{\,\circ}\big/\operatorname{Gau}(P) \;=\; \mathcal{M}_{\mathrm{flat}}\bigl(S^1,U(1)\bigr) .\tag{58}$$*

2.  *The spectral multiset $\operatorname{spec}\mathcal{D}_A$ of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop), computed with respect to the fixed background metric $\mathrm{d}x^{2}$ and measure $\mathrm{d}x$ on $S^1_L$, is invariant under gauge transformations and under orientation-preserving diffeomorphisms, and is therefore a well-defined invariant relation on $S_{\mathrm{geo}}$.*

</div>

<div class="proof">

*Proof.* Let $f$ be an orientation-preserving diffeomorphism of $S^1_L$ and let $A$ be a connection. Since $f$ preserves the orientation, it fixes the fundamental generator $c=[\gamma_0]$ of $H_1(S^1_L;\mathbb{Z})$. Because $G=U(1)$ is abelian and every connection on $S^1_L$ is flat by [(39)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:flat), the holonomy of a connection around a loop depends on that loop only through its class in $H_1(S^1_L;\mathbb{Z})$; the pushforward $f_*A$ therefore has the same holonomy around $c$ as $A$ does: $$
\operatorname{Hol}\bigl(f_*A\bigr)=\operatorname{Hol}(A) .\tag{59}$$ (Concretely, $\int_{S^1_L} f_*A=\int_{S^1_L}A$ by the change-of-variables formula for the orientation-preserving $f$, the integrand being a $1$-form.)

*(1).* By [(59)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:hol-diffeo) and the sufficiency direction of Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class), equality of holonomy already implies gauge equivalence; hence $f_*A$ is gauge equivalent to $A$ for every orientation-preserving $f$ and every $A$. The equivalence relation generated by the gauge group together with the orientation-preserving diffeomorphisms therefore coincides with gauge equivalence alone, so the quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def) is unchanged by adjoining them, and [(58)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Sgeo-circle) holds.

*(2).* Let $A$ and $A'$ be connections related either by a gauge transformation or by the pushforward along an orientation-preserving diffeomorphism. In the second case part (1) supplies a gauge transformation achieving the same result, so in either case there is $u\in\operatorname{Gau}(P)$ with $A'=A^{u}$. The operator $\mathcal{D}$ is defined with respect to the fixed background metric and measure of Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope), which are not transformed; the diffeomorphism therefore plays no further role, and only the gauge covariance established in Convention [6.3](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:u1-norm) is needed. There we verified $D_{A^{u}}\phi^{u}=u\,D_A\phi$ for $\phi^{u}=u\phi$; iterating, $$\mathcal{D}_{A^{u}}\bigl(u\,\phi\bigr)
=u\,\mathcal{D}_{A}\phi
\qquad\text{for all }\phi\in C^\infty(S^1_L,\mathbb{C}).$$ Thus the multiplication operator $\mathcal{U}_u\phi:=u\phi$ intertwines $\mathcal{D}_A$ with $\mathcal{D}_{A^{u}}$. Since $|u(x)|=1$ pointwise, $\mathcal{U}_u$ is an isometry of $L^2(S^1_L,\mathrm{d}x)$ with inverse $\mathcal{U}_{u^{-1}}$, hence unitary; and it preserves $C^\infty(S^1_L,\mathbb{C})$, hence carries the domain of $\mathcal{D}_A$ onto that of $\mathcal{D}_{A^{u}}$. Therefore $\mathcal{D}_{A}$ and $\mathcal{D}_{A'}=\mathcal{D}_{A^{u}}$ are unitarily equivalent, and their spectral multisets coincide. Since $A$ and $A'$ were an arbitrary pair related by a gauge transformation or by an allowed diffeomorphism, the spectral multiset is a well-defined function on $S_{\mathrm{geo}}$, which is the assertion. ◻

</div>

<div class="corollary">

**Corollary 6.9** (A strictly coarser spectral completion).

<div id="cor:spec">

</div>

*Retain the source architecture of Corollary [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion): the source is $S_{\mathrm{geo}}=\mathcal{M}_{\mathrm{flat}}(S^1,U(1))$ and the declared Tier-1 readout remains the curvature $p_F$, which is constant. Adjoin, as the invariant relation, the spectrum of the charged-scalar operator $$
\mathcal{D}_A:=-\bigl(\partial_x-i\,a(x)\bigr)^{2}
\qquad\text{on}\qquad
C^\infty(S^1_L,\mathbb{C})\subseteq L^2(S^1_L,\mathrm{d}x),\tag{60}$$ computed with respect to the fixed standard metric $\mathrm{d}x^2$ and measure $\mathrm{d}x$ on $S^1_L$, with the conventions of Convention [6.3](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:u1-norm) and the standard self-adjoint domain (the closure of $\mathcal{D}_A$ on $C^\infty(S^1_L,\mathbb{C})$; $S^1_L$ is closed, so no boundary conditions are needed and the operator is essentially self-adjoint there). The unitary charge-one representation ensures that gauge transformations act unitarily on the charged-scalar Hilbert space, so the spectral multiset is gauge invariant and hence a well-defined function on the declared gauge quotient [(37)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:circle-source-def). Its invariance under the auxiliary orientation-preserving diffeomorphism action, which, as noted in Convention [6.1](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#conv:circle-scope), is treated separately and does not consist of arrows of the fixed-metric groupoid, a general such diffeomorphism not preserving $\mathrm{d}x$, is proved separately in Lemma [6.8](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#lem:spec-invariance)(2). Set $J_{\mathrm{spec}}([A]):=\operatorname{spec}\mathcal{D}_A$. Writing $\operatorname{Hol}(A)=e^{i\vartheta}$, $$
\operatorname{spec}\mathcal{D}_A
=\left\{
\left(\frac{2\pi k-\vartheta}{L}\right)^{\!2}
:\; k\in\mathbb{Z}
\right\}
\qquad\text{(as a multiset)} ,\tag{61}$$ and the resulting realized completion is $$
E_{\mathrm{spec}}
\;\cong\;
U(1)\big/\bigl(z\sim z^{-1}\bigr)
\;\cong\;
[-1,1],\tag{62}$$ which is *strictly coarser* than $E_{\mathrm{hol}}$: the completion map $S_{\mathrm{geo}}\to E_{\mathrm{spec}}$ is surjective but not injective, its nontrivial fibres being exactly the pairs $\{[A_\vartheta],[A_{-\vartheta}]\}$ with $\vartheta\not\equiv 0,\pi\pmod{2\pi}$.*

</div>

<div class="proof">

*Proof.* *The spectrum.* By Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class) every class has the representative $A_\vartheta=(\vartheta/L)\,\mathrm{d}x$ of [(53)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Atheta), and by Example [4.3](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#ex:spectral)(ii) the spectrum is unchanged along the gauge orbit, so we may compute with $A_\vartheta$. With $a\equiv\vartheta/L$ constant, $\mathcal{D}_{A_\vartheta}$ has the complete orthonormal system of eigenfunctions $\psi_k(x)=L^{-1/2}e^{2\pi i k x/L}$, $k\in\mathbb{Z}$ (complete in $L^2(S^1_L,\mathrm{d}x)$ by Fourier theory). By the convention [(42)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:u1-covder), $$\Bigl(\partial_x-i\tfrac{\vartheta}{L}\Bigr)\psi_k
=\Bigl(\tfrac{2\pi i k}{L}-\tfrac{i\vartheta}{L}\Bigr)\psi_k
=i\,\frac{2\pi k-\vartheta}{L}\,\psi_k ,$$ and hence, squaring and inserting the overall minus sign of [(60)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Dop), $$\mathcal{D}_{A_\vartheta}\psi_k
=-\left(i\,\frac{2\pi k-\vartheta}{L}\right)^{\!2}\psi_k
=\left(\frac{2\pi k-\vartheta}{L}\right)^{\!2}\psi_k .$$ Since the $\psi_k$ are complete, the spectrum is purely discrete and is exactly the multiset [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec). Note that $\vartheta$ is defined only modulo $2\pi$, and [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) is invariant under $\vartheta\mapsto\vartheta+2\pi$ via the relabelling $k\mapsto k+1$; the multiset is therefore a well-defined function of $[A]$, as it must be.

*“If”: inversion-related holonomies are spectrally equal.* Replacing $\vartheta$ by $-\vartheta$ in [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) and relabelling $k\mapsto -k$ carries the multiset to itself, since $(2\pi(-k)-(-\vartheta))^2=(-(2\pi k-\vartheta))^2=(2\pi k-\vartheta)^2$. Hence $[A_\vartheta]$ and $[A_{-\vartheta}]$, which by Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class) are distinct classes whenever $e^{i\vartheta}\neq e^{-i\vartheta}$, i.e. whenever $\vartheta\not\equiv0,\pi\pmod{2\pi}$, have the same spectrum.

*“Only if”: equal spectra force inversion-related holonomies.* We prove this directly rather than by citation. Suppose $\operatorname{spec}\mathcal{D}_{A_\vartheta}
=\operatorname{spec}\mathcal{D}_{A_{\vartheta'}}$ as multisets. Normalize $\vartheta,\vartheta'\in[0,2\pi)$, which is permissible by the periodicity just noted. By [(61)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:spec) every eigenvalue of $\mathcal{D}_{A_\vartheta}$ is a nonnegative real number, so we may form the set of both real square roots of the eigenvalues, rescaled by $L/2\pi$: $$\begin{aligned}
\Sigma(\vartheta)
&:=\Bigl\{\pm\tfrac{L}{2\pi}\sqrt{\lambda}\;:\;
\lambda\in\operatorname{spec}\mathcal{D}_{A_\vartheta}\Bigr\}
\\
&\phantom{:}=
\Bigl\{k-\tfrac{\vartheta}{2\pi}\;:\;k\in\mathbb{Z}\Bigr\}
\;\cup\;
\Bigl\{-k+\tfrac{\vartheta}{2\pi}\;:\;k\in\mathbb{Z}\Bigr\}
\\
&\phantom{:}=
\Bigl(-\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)
\;\cup\;
\Bigl(\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr),
\end{aligned}$$ which is determined by the spectral multiset alone. Thus equality of spectra gives $$\Bigl(\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)\cup\Bigl(-\tfrac{\vartheta}{2\pi}+\mathbb{Z}\Bigr)
\;=\;
\Bigl(\tfrac{\vartheta'}{2\pi}+\mathbb{Z}\Bigr)\cup\Bigl(-\tfrac{\vartheta'}{2\pi}+\mathbb{Z}\Bigr)$$ as subsets of $\mathbb{R}$. Intersecting both sides with the interval $[0,1)$ and comparing, the unordered pair of residues $\{\tfrac{\vartheta}{2\pi}\bmod 1,\;-\tfrac{\vartheta}{2\pi}\bmod 1\}$ equals the pair $\{\tfrac{\vartheta'}{2\pi}\bmod 1,\;-\tfrac{\vartheta'}{2\pi}\bmod 1\}$. Hence $\vartheta'\equiv\vartheta$ or $\vartheta'\equiv-\vartheta \pmod{2\pi}$, that is, $\operatorname{Hol}(A')=\operatorname{Hol}(A)^{\pm1}$, as claimed.

*The completion.* By the two directions just proved, the relation $J_{\mathrm{spec}}$ has exactly the level sets of the map $U(1)\to U(1)/(z\sim z^{-1})$. Since the readout $p_F$ is constant and contributes nothing, Definition [5.2](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#def:egeo) gives $E_{\mathrm{spec}}=\operatorname{Im}(p_F,J_{\mathrm{spec}})\cong U(1)/(z\sim z^{-1})$. The map $z=e^{i\vartheta}\mapsto\tfrac12(z+z^{-1})=\cos\vartheta$ is a continuous bijection from this quotient onto $[-1,1]$ (it is well defined and injective on the quotient, and surjective onto $[-1,1]$), and it is a homeomorphism since the quotient is compact and $[-1,1]$ is Hausdorff. This gives [(62)](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#eq:Espec). Non-injectivity of the completion map and the description of its fibres now follow from Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) applied to the coarser relation family $\{p_F\}\cup\{J_{\mathrm{spec}}\}$. ◻

</div>

<div class="remark">

*Remark 40* (The two corollaries together).

<div id="rem:two-corollaries">

</div>

Corollaries [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion) and [6.9](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:spec) are two halves of one lesson, and both are consequences of Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization) and Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction) applied to the *same* source $S_{\mathrm{geo}}$ with the *same* constant readout $p_F$; only the declared invariant relation differs. The realized completion is relative to the declared relation family (Remark [5.4](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#rem:relative)). Declare holonomy and the source is reconstructed exactly; declare instead the charged-scalar spectrum and a residual $z\sim z^{-1}$ degeneracy survives the completion, the shadow of the complex conjugation $\phi\mapsto\bar\phi$, equivalently of the orientation reversal excluded in Definition [6.2](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#def:circle-model) (Remark [6.6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#rem:u1-hyps)). This is the Paper 2 phenomenon \[[17](/source-readout/geometric-realization-of-completed-source-relations/references#bib-ST2)\], realized geometrically: whether the lost information obstructs the nominated target depends on the target.

</div>


# Variational realization of completed relations

<div id="sec:variational">

</div>

We now embed the completed relation data into dynamics. The claim to be established is narrow and precise: an invariant relation-dependent action yields, by functional variation, correctly normalized stress-energy, gauge-current, and matter responses, and nothing is postulated by naming it.

## Variational setting

<div class="assumption">

**Assumption 7.1** (Well-posed variational problem).

<div id="ass:variational">

</div>

The global configuration satisfies the descent conditions of Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) and lies in $\mathcal{C}_{\mathrm{geo}}$. Furthermore, *one* of the following holds, and which one is part of the declaration of the model:

1.  <div id="V1">

    </div>

    all variations $\delta g$, $\delta A$, $\delta\Phi$ have compact support in the interior of $M$; or

2.  <div id="V2">

    </div>

    boundary values of the fields, and for gravity the induced metric on $\partial M$, are held fixed, so that boundary contributions vanish identically; or

3.  <div id="V3">

    </div>

    the gravitational and gauge actions are supplemented by the boundary terms required for a well-posed variational problem. For gravity this is the Gibbons–Hawking–York term $$\frac{1}{8\pi G_N}\oint_{\partial M} K\,\sqrt{|h|}\;\mathrm{d}^3y$$ \[[15](/source-readout/geometric-realization-of-completed-source-relations/references#bib-York1972), [5](/source-readout/geometric-realization-of-completed-source-relations/references#bib-GibbonsHawking1977)\], with the appropriate subtraction or counterterms in the asymptotic case; for the gauge sector, whatever boundary term the declared $\mathcal{B}$ requires.

All functional derivatives below are asserted to exist on the declared domain; where $S_{\mathrm{rel}}$ is nonlocal, this existence is a hypothesis on the model, not a theorem.

</div>

<div class="definition">

**Definition 7.2** (Relation-dependent total action).

<div id="def:action">

</div>

Let $r=(r_\alpha)_{\alpha\in A}$ denote the completed invariant relation coordinates, i.e. the components of $e_A^{\mathrm{geo}}$. Consider $$
S_{\mathrm{tot}}[g,A,\Phi;r]
=
S_{\mathrm{EH}}[g]
+S_{\mathrm{YM}}[g,A]
+S_{\mathrm{m}}[g,A,\Phi]
+S_{\mathrm{rel}}[g,A,\Phi;r],\tag{63}$$ with $$\begin{aligned}
\qquad\text{(64)}
S_{\mathrm{EH}}[g]
&=\frac{1}{16\pi G_N}\int_M \bigl(R-2\Lambda\bigr)\,\mathrm{d}\!\operatorname{vol}_g
\;\;(+\text{ boundary term under \href{#V3}{(V3)}}),
\\[0.3em]
\qquad\text{(65)}
S_{\mathrm{YM}}[g,A]
&=-\frac{1}{4g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F_{\mu\nu},F^{\mu\nu}\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,
\end{aligned}$$ and $S_{\mathrm{m}}$ a matter action for $\Phi$ \[[14](/source-readout/geometric-realization-of-completed-source-relations/references#bib-YangMills1954)\]. The functional $S_{\mathrm{rel}}$ carries the model-specific dependence on $r$. It may be local, boundary-supported, or nonlocal, provided that

1.  <div id="R1">

    </div>

    it depends on the relation coordinates through a finite or countable dynamical subfamily $A_{\mathrm{dyn}}\subseteq A$, and its Fréchet derivatives with respect to $g^{\mu\nu}$, $A_\mu$, and the independent matter components exist on the stated domain and are represented by distributional kernels, as set out in Section [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:chain-rule); and

2.  <div id="R2">

    </div>

    it is invariant under the allowed bundle automorphisms and allowed diffeomorphisms, that is, $S_{\mathrm{rel}}$ is constant on the arrows of $\mathfrak{G}_{\mathrm{geo}}$, exactly as the $J_\alpha$ are (Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation)).

</div>

Condition [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) is what makes $S_{\mathrm{rel}}$ a functional of the *physical orbit*, and it is what supplies the Ward identities of Section [8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether). An $S_{\mathrm{rel}}$ that fails to be $\mathfrak{G}_{\mathrm{geo}}$-invariant does not define a geometric realization of a completed relation.

## The functional chain rule for relation functionals

<div id="sec:chain-rule">

</div>

<div class="convention">

**Convention 7.3** (Two regimes for $r$, and the correct chain rule).

<div id="conv:two-regimes">

</div>

By Convention [2.11](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:relation-status), exactly one of the following applies to each component $r_\alpha$, and the model declares which.

**(a) $r_\alpha$ is a functional of the fields.** Paper 3 permits an arbitrary index *set* $A$, and nothing in Sections [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)–[6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) requires more. A differentiable action, however, needs additional analytic structure, and we impose it only where it is used. We therefore require that $S_{\mathrm{rel}}$ depend on the relation coordinates through a distinguished *dynamical subfamily* $$
A_{\mathrm{dyn}}\subseteq A,
\qquad
A_{\mathrm{dyn}} \text{ finite or countable},\tag{66}$$ so that $S_{\mathrm{rel}}=S_{\mathrm{rel}}[g,A,\Phi;(r_\alpha)_{\alpha\in A_{\mathrm{dyn}}}]$ and $\partial S_{\mathrm{rel}}/\partial r_\alpha=0$ for $\alpha\notin A_{\mathrm{dyn}}$. When $A_{\mathrm{dyn}}$ is countably infinite we require in addition that the derivative series in [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) below converge *unconditionally* in the distributional-dual topology of the relevant space of kernels; when $A_{\mathrm{dyn}}$ is finite this is vacuous. The remaining relation coordinates, indexed by $A\setminus A_{\mathrm{dyn}}$, continue to serve as completion coordinates in the sense of Sections [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)–[6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1); they simply do not enter the action.

Now suppose $r_\alpha=r_\alpha[g,A,\Phi]$, $\alpha\in A_{\mathrm{dyn}}$, takes values in a Banach (or finite-dimensional) space $V_\alpha$ and is Fréchet differentiable on the declared domain. Then $r_\alpha$ is in general *nonlocal*: a Wilson observable integrates around a loop, an integral invariant integrates over $M$, a spectral quantity depends on the fields through a global eigenvalue problem. Its variation is accordingly given not by a pointwise partial derivative but by the pairing of distributional kernels with the variations: $$
\delta r_\alpha
=\int_M\!\Bigl[
\frac{\delta r_\alpha}{\delta g^{\mu\nu}(y)}\,\delta g^{\mu\nu}(y)
+\Bigl\langle \frac{\delta r_\alpha}{\delta A_\mu(y)},\,\delta A_\mu(y)\Bigr\rangle
+\Bigl\langle\!\Bigl\langle \frac{\delta r_\alpha}{\delta \Phi(y)},\,\delta\Phi(y)
\Bigr\rangle\!\Bigr\rangle
\Bigr]\sqrt{-g(y)}\;\mathrm{d}^4y ,\tag{67}$$ where $\delta r_\alpha/\delta g^{\mu\nu}(y)$ etc. denote the $V_\alpha$-valued distributional kernels representing the derivative, $\langle\cdot,\cdot\rangle$ is the $\operatorname{Ad}$-invariant pairing on $\mathfrak{g}$, and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ is the duality pairing between $W^{*}$ and $W$ discussed in Section [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:matter-pairing). (For a Wilson loop $r_\alpha$ the kernel $\delta r_\alpha/\delta A_\mu(y)$ is supported on the loop and is a distribution, not a function; [(67)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:drho) is exactly the statement that must be used, and a pointwise $\partial r_\alpha/\partial A_\mu(y)$ does not exist.)

Then, writing $\partial S_{\mathrm{rel}}/\partial r_\alpha\in V_\alpha^{*}$ for the derivative of $S_{\mathrm{rel}}$ with respect to its $V_\alpha$-argument (a bounded linear functional, and an ordinary partial derivative only when $V_\alpha$ is finite-dimensional), the chain rule reads $$
\frac{\delta S_{\mathrm{rel}}}{\delta g^{\mu\nu}(y)}
=\left.\frac{\delta S_{\mathrm{rel}}}{\delta g^{\mu\nu}(y)}\right|_{r\;\mathrm{fixed}}
+\sum_{\alpha\in A_{\mathrm{dyn}}}
\Bigl\langle \frac{\partial S_{\mathrm{rel}}}{\partial r_\alpha},\;
\frac{\delta r_\alpha}{\delta g^{\mu\nu}(y)}\Bigr\rangle_{V_\alpha^*\!,V_\alpha} ,\tag{68}$$ and identically with $g^{\mu\nu}(y)$ replaced by $A_\mu(y)$ or by the matter components. The sum is over the dynamical subfamily [(66)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Adyn), and converges by the unconditional-convergence hypothesis imposed there. Only in the special case where $V_\alpha=\mathbb{R}$ and $r_\alpha$ is a *local* scalar field does [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) reduce to an ordinary pointwise partial derivative; in general it does not.

**(b) $r_\alpha$ labels a fixed topological or boundary sector.** Then $\delta r_\alpha=0$ under all variations within the sector, this is what “fixed sector” means, and $r_\alpha$ enters the field equations only as a parameter. The second term of [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) is absent.

In neither case is $r_\alpha$ varied as an independent dynamical field. A model wishing to promote $r_\alpha$ to a field must adjoin it to the configuration tuple, enlarge $\mathcal{C}_{\mathrm{geo}}$, and supply its own kinetic term; that is a different model, and its Euler–Lagrange equation is an additional equation not derived here.

</div>

## Matter pairings and independent components

<div id="sec:matter-pairing">

</div>

<div class="convention">

**Convention 7.4** (Matter variation and the dual pairing).

<div id="conv:matter">

</div>

The representation $\rho\colon G\to\mathrm{GL}(W)$ is not assumed unitary (Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic)), and $W$ may be complex. Accordingly the matter Euler operator is valued in the dual, and the variational pairing must be specified. We adopt the following, and use it consistently.

*(i) Real independent components.* Suppose $\Phi$ denotes a collection of *real* independent field components. This is always achievable: decompose a complex field into its real and imaginary parts, or a section of a complex bundle into its underlying real bundle. Then $\delta S/\delta\Phi$ is valued in the real dual bundle $P\times_{\rho^{*}}W^{*}$, and the pairing $$\langle\!\langle\cdot,\cdot\rangle\!\rangle\colon W^{*}\times W\longrightarrow\mathbb{R}$$ is the canonical duality pairing. This pairing is $G$-invariant for the contragredient action $\rho^{*}(h)=\rho(h^{-1})^{\mathsf{T}}$, and requires no metric on $W$. There is then a single Euler equation $\mathcal{E}_\Phi=0$.

*(ii) Complex fields treated holomorphically.* If instead $\Phi$ is treated as a complex field with $\Phi$ and $\bar\Phi$ varied independently, the usual convention for a charged scalar or a Dirac spinor, then there are *two* Euler equations, $$
\mathcal{E}_{\Phi}:=\frac{1}{\sqrt{-g}}\frac{\delta S}{\delta \bar\Phi}=0
\qquad\text{and}\qquad
\overline{\mathcal{E}_{\Phi}}:=\frac{1}{\sqrt{-g}}\frac{\delta S}{\delta \Phi}=0 ,\tag{69}$$ which are conjugate to one another when the action is real, and the pairing used in the variation is the sesquilinear one furnished by a $\rho$-invariant Hermitian form on $W$, which exists precisely when $\rho$ is unitary. If $\rho$ is not unitary, no such Hermitian form is available and one must revert to convention (i).

For definiteness, and to avoid carrying two conjugate equations through every formula, *in the statements below $\Phi$ denotes real independent field components in the sense of (i)*, and $\mathcal{E}_\Phi$ is the corresponding single dual-valued Euler operator. Every result restates verbatim in convention (ii) upon replacing $\mathcal{E}_{\Phi}=0$ by the conjugate pair [(69)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:conj-euler) and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ by the invariant Hermitian pairing.

</div>

## Response tensors, currents, and Euler operators

<div class="definition">

**Definition 7.5** (Responses).

<div id="def:responses">

</div>

For each nongravitational sector $X\in\{\mathrm{YM},\mathrm{m},\mathrm{rel}\}$ define the stress-energy tensor $$
T^{X}_{\mu\nu}
\;:=\;
-\frac{2}{\sqrt{-g}}\,\frac{\delta S_X}{\delta g^{\mu\nu}} ,\tag{70}$$ the gauge current $$
J^{\mu}_{\mathrm{m}}
\;:=\;
-\frac{1}{\sqrt{-g}}\,\frac{\delta S_{\mathrm{m}}}{\delta A_\mu},
\qquad
J^{\mu}_{\mathrm{rel}}
\;:=\;
-\frac{1}{\sqrt{-g}}\,\frac{\delta S_{\mathrm{rel}}}{\delta A_\mu},\tag{71}$$ each valued in $\mathfrak{g}$ (with $\mathfrak{g}$-indices contracted using $\langle\cdot,\cdot\rangle$), and the matter Euler operators $$
\mathcal{E}^{X}_{\Phi}
\;:=\;
\frac{1}{\sqrt{-g}}\,\frac{\delta S_X}{\delta\Phi} ,\tag{72}$$ valued in the dual bundle and paired with $\delta\Phi$ by $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ as in Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i). For $X=\mathrm{rel}$ the functional derivatives in [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef)–[(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) are those computed by the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule), and thus already include the relation-mediated contributions.

</div>

<div class="lemma">

**Lemma 7.6** (Yang–Mills stress tensor).

<div id="lem:TYM">

</div>

*With the normalization [(65)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SYM), $$
T^{\mathrm{YM}}_{\mu\nu}
=\frac{1}{g_{\mathrm{YM}}^{2}}
\left(
\bigl\langle F_{\mu\rho},F_{\nu}{}^{\rho}\bigr\rangle
-\tfrac14\,g_{\mu\nu}\,\bigl\langle F_{\rho\sigma},F^{\rho\sigma}\bigr\rangle
\right),\tag{73}$$ which is symmetric, gauge invariant, and (in four dimensions) trace free.*

</div>

<div class="proof">

*Proof.* Write $S_{\mathrm{YM}}=-\tfrac{1}{4g_{\mathrm{YM}}^2}\int_M
\langle F_{\mu\rho},F_{\nu\sigma}\rangle g^{\mu\nu}g^{\rho\sigma}\sqrt{-g}\,\mathrm{d}^4x$; the components $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$ are independent of $g$. Using $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}\,g_{\mu\nu}\,\delta g^{\mu\nu}$ and varying the two inverse metrics, $$\delta S_{\mathrm{YM}}
=-\frac{1}{4g_{\mathrm{YM}}^2}\int_M
\Bigl(
2\langle F_{\mu\rho},F_{\nu}{}^{\rho}\rangle
-\tfrac12 g_{\mu\nu}\langle F_{\rho\sigma},F^{\rho\sigma}\rangle
\Bigr)\delta g^{\mu\nu}\sqrt{-g}\,\mathrm{d}^4x ,$$ and [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) gives [(73)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:TYM). Gauge invariance follows from $\operatorname{Ad}$-invariance of $\langle\cdot,\cdot\rangle$ and [(23)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:gauge-transf); tracelessness from $g^{\mu\nu}\langle F_{\mu\rho},F_\nu{}^\rho\rangle=\langle F_{\rho\sigma},F^{\rho\sigma}\rangle$ and $g^{\mu\nu}g_{\mu\nu}=4$. ◻

</div>

<div class="lemma">

**Lemma 7.7** (Yang–Mills variation with respect to the connection).

<div id="lem:YMvar">

</div>

*Under Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), $$
\delta S_{\mathrm{YM}}
=-\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g
=\;\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle D_\mu F^{\mu\nu},\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,\tag{74}$$ up to the treated boundary term.*

</div>

<div class="proof">

*Proof.* From $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$ one has $$
\delta F_{\mu\nu}=D_\mu\,\delta A_\nu - D_\nu\,\delta A_\mu .\tag{75}$$ Hence, from [(65)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SYM), $$\delta S_{\mathrm{YM}}
=-\frac{1}{4g_{\mathrm{YM}}^{2}}\int_M
2\,\bigl\langle F^{\mu\nu},\,\delta F_{\mu\nu}\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g
=-\frac{1}{2g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\delta A_\nu - D_\nu\delta A_\mu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ The two terms in the bracket are *equal* after relabelling, by the antisymmetry of $F^{\mu\nu}$: swapping the dummy indices $\mu\leftrightarrow\nu$ in the second term gives $-\langle F^{\nu\mu},D_\mu\delta A_\nu\rangle=+\langle F^{\mu\nu},D_\mu\delta A_\nu\rangle$. Therefore the bracket contributes twice the first term, the factor $\tfrac12$ cancels, and $$\delta S_{\mathrm{YM}}
=-\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,$$ which is the first equality in [(74)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:dSYM). Covariant integration by parts, legitimate because $\langle\cdot,\cdot\rangle$ is $\operatorname{Ad}$-invariant, hence $D$-compatible, and because the boundary term vanishes by Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), moves $D_\mu$ onto $F^{\mu\nu}$ and flips the sign, giving the second equality. ◻

</div>

## The coupled field equations

<div class="theorem">

**Theorem 7.8** (Coupled field equations).

<div id="thm:field-eqs">

</div>

*Under Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) and Conventions [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) and [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i), stationarity of $S_{\mathrm{tot}}$ under independent variations of $g^{\mu\nu}$, $A_\mu$, and $\Phi$ is equivalent to the system $$\begin{aligned}
\qquad\text{(76)}
G_{\mu\nu}+\Lambda g_{\mu\nu}
&=8\pi G_N\Bigl(
T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}
\Bigr),
\\[0.35em]
\qquad\text{(77)}
\frac{1}{g_{\mathrm{YM}}^{2}}\,D_\mu F^{\mu\nu}
&=J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}},
\\[0.35em]
\qquad\text{(78)}
\mathcal{E}^{\mathrm{m}}_{\Phi}+\mathcal{E}^{\mathrm{rel}}_{\Phi}
&=0,
\end{aligned}$$ with representation indices and the pairings $\langle\cdot,\cdot\rangle$ and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ restored as required by $G$ and $\rho$.*

</div>

<div class="proof">

*Proof.* *Metric variation.* The standard variation of [(64)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SEH), after the boundary treatment stipulated in Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) (which is exactly what disposes of the total-derivative term $\int_M g^{\mu\nu}\delta R_{\mu\nu}\sqrt{-g}$; under [(V3)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#V3) it is the Gibbons–Hawking–York term that cancels it \[[15](/source-readout/geometric-realization-of-completed-source-relations/references#bib-York1972), [5](/source-readout/geometric-realization-of-completed-source-relations/references#bib-GibbonsHawking1977)\]), gives $$
\delta S_{\mathrm{EH}}
=\frac{1}{16\pi G_N}\int_M
\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)\,\delta g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g.\tag{79}$$ By Definition [7.5](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#def:responses), $$
\delta\bigl(S_{\mathrm{YM}}+S_{\mathrm{m}}+S_{\mathrm{rel}}\bigr)\Big|_{\delta g}
=-\frac12\int_M
\bigl(
T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}
\bigr)\,\delta g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g,\tag{80}$$ where $\delta S_{\mathrm{rel}}$ is computed by the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule): in regime (a) of Convention [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) it includes the relation-mediated kernel contributions, and in regime (b) those are absent. In either case [(80)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:dSmatter) *defines* its left side via [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and adds no assumption. Setting $\delta S_{\mathrm{tot}}=0$ for arbitrary symmetric $\delta g^{\mu\nu}$ (compactly supported, or boundary-vanishing) and applying the fundamental lemma of the calculus of variations gives $$\frac{1}{16\pi G_N}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)
-\frac12\bigl(T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}\bigr)=0 ,$$ which is [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein) with the displayed $8\pi G_N$ normalization.

*Gauge variation.* By Lemma [7.7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#lem:YMvar), $$\delta S_{\mathrm{YM}}\big|_{\delta A}
=\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle D_\mu F^{\mu\nu},\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,$$ while by the definitions [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), $$\delta\bigl(S_{\mathrm{m}}+S_{\mathrm{rel}}\bigr)\big|_{\delta A}
=-\int_M\bigl\langle J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}},\,
\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Setting the sum of the two to zero for arbitrary $\delta A_\nu$, and using the nondegeneracy of $\langle\cdot,\cdot\rangle$, gives [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym).

*Matter variation.* $S_{\mathrm{EH}}$ and $S_{\mathrm{YM}}$ are independent of $\Phi$, so by [(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) $\delta_\Phi S_{\mathrm{tot}}
=\int_M \langle\!\langle\,\mathcal{E}^{\mathrm{m}}_\Phi+\mathcal{E}^{\mathrm{rel}}_\Phi,\;
\delta\Phi\,\rangle\!\rangle\,\mathrm{d}\!\operatorname{vol}_g$; arbitrariness of the real independent components $\delta\Phi$ and nondegeneracy of the duality pairing give [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter). Under Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(ii) this is replaced by the conjugate pair [(69)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:conj-euler).

The three variations are independent, so stationarity of $S_{\mathrm{tot}}$ is equivalent to the simultaneous validity of [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein)–[(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter). ◻

</div>

<div class="remark">

*Remark 49* (What has and has not been derived).

<div id="rem:not-postulated">

</div>

The tensor $T^{\mathrm{rel}}_{\mu\nu}$ is not an independent postulate. By [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) it is the metric functional derivative of a specified $\mathfrak{G}_{\mathrm{geo}}$-invariant action satisfying [(R1)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R1)–[(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2). Different source completions, and different couplings of the same completion, produce different $T^{\mathrm{rel}}_{\mu\nu}$, $J^{\mu}_{\mathrm{rel}}$, $\mathcal{E}^{\mathrm{rel}}_{\Phi}$. Theorem [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs) asserts only the *structure* of the response, that a completed relation enters Tier-1 dynamics through functional variation of an invariant action, with the normalizations displayed, and asserts nothing about the magnitude, sign, or empirical existence of any such term. No new interaction is proposed, and no empirical claim is made.

</div>


# Ward–Noether identities and covariant consistency

<div id="sec:noether">

</div>

Gauge and diffeomorphism invariance impose Noether identities \[[9](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Noether1918)\], and those identities constrain every effective representation of a completed source relation. Two logically distinct routes to covariant conservation must be kept apart, and we present them separately.

<div class="convention">

**Convention 8.1** (Infinitesimal allowed arrows and the induced field variations).

<div id="conv:lie">

</div>

A base vector field $\xi$ on $M$ does not by itself define a Lie derivative of a principal connection or of a section of an associated bundle: differentiating such objects requires a lift of the flow of $\xi$ to the total space $P$. We therefore generate the variations from the groupoid itself.

Let $(\hat F_t,f_t)_{t\in(-\epsilon,\epsilon)}$ be a smooth one-parameter family of allowed arrows of $\mathfrak{G}_{\mathrm{geo}}$ with $(\hat F_0,f_0)=(\mathrm{id}_P,\mathrm{id}_M)$, and let $$\xi:=\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0} f_t$$ be the generating base vector field, taken compactly supported in the interior of $M$. Write $\hat\xi$ for the induced $G$-invariant vector field on $P$ generating $\hat F_t$, which projects to $\xi$. The induced infinitesimal variations of the fields are defined by $$
\begin{aligned}
\delta_\xi g^{\mu\nu}
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}\bigl(f_t^{*}g^{\mu\nu}\bigr)
=-\mathcal{L}_\xi g^{\mu\nu},
\\[0.35em]
\delta_{\hat\xi} A
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}\bigl(\hat F_t^{*}A\bigr),
\\[0.35em]
\delta_{\hat\xi}\Phi
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}
\bigl(\hat F_{t,\rho}^{-1}\circ\Phi\circ f_t\bigr).
\end{aligned}\tag{81}$$ The first is intrinsic to the base, and we record the inverse-metric identity we shall use: differentiating $g^{\mu\rho}g_{\rho\nu}=\delta^{\mu}_{\nu}$ gives $$
\mathcal{L}_\xi g^{\mu\nu}=-\bigl(\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu}\bigr),\tag{82}$$ the sign being opposite to that for the covariant metric, $\mathcal{L}_\xi g_{\mu\nu}=\nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu$. Hence, with the convention [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi), $$
\delta_\xi g^{\mu\nu}=\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu} .\tag{83}$$

The bundle variations require a further remark. The lift $\hat\xi$ of $\xi$ is not unique: any two allowed lifts differ by a vertical, i.e. gauge, direction. Concretely, in a local trivialization over $U\subseteq M$, in which $A$ is represented by $A_\mu$ and $\Phi$ by a $W$-valued map, a choice of lift yields $$
\delta_{\hat\xi}A_\mu = -\bigl(\mathcal{L}_\xi A\bigr)_\mu + D_\mu\varepsilon,
\qquad
\delta_{\hat\xi}\Phi = -\mathcal{L}_\xi\Phi - \rho_*(\varepsilon)\,\Phi ,\tag{84}$$ where $\mathcal{L}_\xi$ denotes the coordinate Lie derivative of the local representatives and $\varepsilon\in\Gamma(\mathrm{ad}P|_U)$ is the vertical gauge parameter recording the choice of lift; changing the lift changes $\varepsilon$. Thus the induced connection variation agrees with the naive coordinate Lie derivative only up to a vertical term $D_\mu\varepsilon$, with the corresponding representation action $-\rho_*(\varepsilon)\Phi$ on the matter field.

This ambiguity is harmless for the Ward identity of Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons), and we note why once here. The extra terms in [(84)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-local) are precisely an infinitesimal gauge transformation, of the form [(92)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:inf-gauge). In the Ward computation they are contracted with the Euler coefficients of $A$ and $\Phi$, which vanish identically on the gauge and matter shell on which the theorem is evaluated. The vertical terms therefore multiply zero and drop out, and the conclusion is independent of the choice of lift.

</div>

<div class="definition">

**Definition 8.2** (Total stress-energy).

<div id="def:Ttot">

</div>

$$
T^{\mathrm{tot}}_{\mu\nu}
:=T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu} .\tag{85}$$

</div>

## Route (a): on a full solution, via the contracted Bianchi identity

<div class="proposition">

**Proposition 8.3** (Conservation on a full solution).

<div id="prop:cons-bianchi">

</div>

*Suppose the Einstein equation [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein) holds, with $\Lambda$ constant. Then $$
\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}=0 .\tag{86}$$*

</div>

<div class="proof">

*Proof.* Take the covariant divergence of [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein). The contracted second Bianchi identity gives $\nabla^{\mu}G_{\mu\nu}=0$ \[[12](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Wald)\], and metric compatibility [(25)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:LC) with constancy of $\Lambda$ gives $\nabla^{\mu}(\Lambda g_{\mu\nu})=0$. Hence $8\pi G_N\,\nabla^\mu T^{\mathrm{tot}}_{\mu\nu}=0$, and [(86)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-a) follows since $G_N\neq0$. ◻

</div>

This argument uses the Einstein equation: it is valid on a full solution of the coupled system, including the gravitational field equation, and it does not establish [(86)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-a) from the gauge and matter equations alone. Route (b) below derives the same conclusion without the Einstein equation, as a Noether identity of diffeomorphism invariance.

## Route (b): diffeomorphism invariance, independent of the Einstein equation

<div class="theorem">

**Theorem 8.4** (Diffeomorphism invariance and on-shell covariant conservation).

<div id="thm:cons">

</div>

*Let $S_{\mathrm{ng}}:=S_{\mathrm{YM}}+S_{\mathrm{m}}+S_{\mathrm{rel}}$ denote the nongravitational part of the action [(63)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Stot), and assume:*

1.  <div id="C1">

    </div>

    **(Invariance.)* $S_{\mathrm{ng}}$ is invariant under every smooth one-parameter family of allowed arrows $(\hat F_t,f_t)$ of $\mathfrak{G}_{\mathrm{geo}}$ with compactly supported generator $\xi$, the fields $(g,A,\Phi)$ transforming as in [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi). This is the hypothesis [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) of Definition [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#def:action), restricted to arrows near the identity;*

2.  <div id="C2">

    </div>

    **(Invariance of the fixed data.)* all data held fixed during the variation are themselves invariant under that flow. Concretely: any background or external structure in $\mathcal{B}$ entering $S_{\mathrm{ng}}$ is either dragged along with the fields or is preserved by the flow; and every relation coordinate $r_\alpha$ in regime (b) of Convention [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) (a fixed topological or boundary sector label) satisfies $\delta_\xi r_\alpha=0$, which holds because such labels are $\mathfrak{G}_{\mathrm{geo}}$-invariant by construction and $\xi$ generates arrows of $\mathfrak{G}_{\mathrm{geo}}$;*

3.  <div id="C3">

    </div>

    **(Boundary terms.)* $\xi$ has compact support in the interior of $M$, or the boundary terms generated by the integrations by parts below vanish under the treatment declared in Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational);*

4.  <div id="C4">

    </div>

    **(Full Euler coefficients.)* the coefficients of $\delta_{\hat\xi} A_\mu$ and $\delta_{\hat\xi}\Phi$ in $\delta_\xi S_{\mathrm{ng}}$ are the *full* Euler expressions appearing on the left sides of [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) and [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter), that is, they include the YM, matter, *and* relation contributions, computed with the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule);*

5.  <div id="C5">

    </div>

    **(Availability of lifts.)* for *every* smooth vector field $\xi$ with compact support in the interior of $M$, the admissibility class and allowed-arrow structure of $\mathfrak{G}_{\mathrm{geo}}$ contain a smooth allowed one-parameter family of arrows $(\hat F_t,f_t)$ whose base generator is $\xi$, with the fields $(g,A,\Phi)$ and the fixed data of $\mathcal{B}$ transformed as in [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi). Thus every such $\xi$ generates an allowed flow to which [(C1)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C1) and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2) apply.*

*Write the full Euler operators of the gauge and matter sectors as $$
\mathcal{G}^{\nu}
:=\frac{1}{g_{\mathrm{YM}}^{2}}\,D_\mu F^{\mu\nu}
-\bigl(J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}}\bigr),
\qquad
\mathcal{E}_\Phi
:=\mathcal{E}^{\mathrm{m}}_{\Phi}+\mathcal{E}^{\mathrm{rel}}_{\Phi},\tag{87}$$ so that the gauge equation [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) reads $\mathcal{G}^{\nu}=0$ and the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter) reads $\mathcal{E}_\Phi=0$.*

*Then diffeomorphism invariance gives the integrated variational identity displayed in the proof. On every configuration satisfying $\mathcal{G}^{\nu}=0$ and $\mathcal{E}_\Phi=0$, but not necessarily the Einstein equation, one has $$
\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}=0 .\tag{88}$$ If the sectors exchange energy–momentum, the individual divergences $\nabla^\mu T^{X}_{\mu\nu}$ need not vanish; only the sum does.*

</div>

<div class="proof">

*Proof.* By [(C1)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C1) and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2), $\delta_\xi S_{\mathrm{ng}}=0$ *identically* in the fields, this is the off-shell content of diffeomorphism invariance, and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2) is exactly what licenses it, since a non-invariant fixed datum would contribute an uncancelled term. Expanding the total variation in the three field arguments, with the full Euler coefficients of [(C4)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C4), $$
0=\delta_\xi S_{\mathrm{ng}}
=\int_M\left[
\frac{\delta S_{\mathrm{ng}}}{\delta g^{\mu\nu}}\,\delta_\xi g^{\mu\nu}
+\Bigl\langle \frac{\delta S_{\mathrm{ng}}}{\delta A_\mu},\,\delta_{\hat\xi} A_\mu\Bigr\rangle
+\Bigl\langle\!\Bigl\langle \frac{\delta S_{\mathrm{ng}}}{\delta \Phi},\,\delta_{\hat\xi} \Phi
\Bigr\rangle\!\Bigr\rangle
\right]\mathrm{d}^4x ,\tag{89}$$ We first identify the three coefficients in [(89)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-expand). By [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), [(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) and Lemma [7.7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#lem:YMvar), the coefficient of $\delta_{\hat\xi} A_\mu$ is $\sqrt{-g}$ times $\mathcal{G}^{\mu}$, and the coefficient of $\delta_{\hat\xi}\Phi$ is $\sqrt{-g}$ times $\mathcal{E}_\Phi$, in the notation [(87)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:euler-ops). The coefficient of $\delta_\xi g^{\mu\nu}$ is, by [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and [(85)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:Ttot), equal to $-\tfrac12\sqrt{-g}\,T^{\mathrm{tot}}_{\mu\nu}$. Hence [(89)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-expand) reads $$
0=
-\frac12\int_M T^{\mathrm{tot}}_{\mu\nu}\,\delta_\xi g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g
+\int_M\Bigl[
\bigl\langle \mathcal{G}^{\mu},\,\delta_{\hat\xi}A_\mu\bigr\rangle
+\bigl\langle\!\bigl\langle \mathcal{E}_\Phi,\,\delta_{\hat\xi}\Phi\bigr\rangle\!\bigr\rangle
\Bigr]\,\mathrm{d}\!\operatorname{vol}_g.\tag{90}$$ Equation [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) is the integrated variational identity referred to in the statement. It holds for every compactly supported $\xi$ generating a family of allowed arrows, and we now impose the gauge and matter equations on it.

Accordingly, let the configuration satisfy $\mathcal{G}^{\mu}=0$ and $\mathcal{E}_\Phi=0$. The second integral in [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) then vanishes term by term, whatever the variations $\delta_{\hat\xi}A_\mu$ and $\delta_{\hat\xi}\Phi$ happen to be. This is also the step announced in Convention [8.1](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#conv:lie): whatever lift $\hat\xi$ of $\xi$ was chosen, and hence whatever vertical terms $D_\mu\varepsilon$ and $-\rho_*(\varepsilon)\Phi$ appear in [(84)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-local), they enter only through $\delta_{\hat\xi}A_\mu$ and $\delta_{\hat\xi}\Phi$, which are here contracted with the vanishing $\mathcal{G}^{\mu}$ and $\mathcal{E}_\Phi$; the conclusion is therefore independent of the choice of lift. Hence [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) reduces to $$0=-\frac12\int_M T^{\mathrm{tot}}_{\mu\nu}\,\delta_\xi g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g.$$ Insert $\delta_\xi g^{\mu\nu}=\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu}$ from [(83)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-metric), whose sign is fixed by [(82)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:lie-inverse), and use the symmetry of $T^{\mathrm{tot}}_{\mu\nu}$: $$0=-\int_M T^{\mathrm{tot}}_{\mu\nu}\,\nabla^{\mu}\xi^{\nu}\,\mathrm{d}\!\operatorname{vol}_g
=\int_M \bigl(\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}\bigr)\,\xi^{\nu}\,\mathrm{d}\!\operatorname{vol}_g,$$ the last step by covariant integration by parts, whose boundary term vanishes by [(C3)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C3). By [(C5)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C5), every smooth compactly supported vector field $\xi$ in the interior of $M$ arises as the base generator of an allowed flow, so the identity above holds for all such $\xi$; since $\xi$ is thereby arbitrary among compactly supported interior fields, the fundamental lemma of the calculus of variations gives [(88)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-b).

This argument nowhere uses the Einstein equation: [(88)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-b) follows from diffeomorphism invariance \[[9](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Noether1918)\] together with the gauge and matter equations alone. ◻

</div>

## The gauge Ward identity

<div class="proposition">

**Proposition 8.5** (Gauge-current identity).

<div id="prop:gauge-current">

</div>

*Assume $S_{\mathrm{m}}+S_{\mathrm{rel}}$ is invariant under the vertical (gauge) subgroup $\operatorname{Gau}(P)$; that any relation coordinate in regime (b) is gauge invariant (as it is, by construction); and that Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) holds. Then on solutions of the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter), $$
D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr)=0 .\tag{91}$$*

</div>

<div class="proof">

*Proof.* Let $\epsilon\in\Gamma(\mathrm{ad}P)$ be a compactly supported infinitesimal gauge parameter, acting by $$
\delta_\epsilon A_\mu=D_\mu\epsilon,
\qquad
\delta_\epsilon\Phi=-\rho_*(\epsilon)\,\Phi ,\tag{92}$$ where $\rho_*\colon\mathfrak{g}\to\mathfrak{gl}(W)$ is the induced Lie-algebra representation and $\delta_\epsilon\Phi$ is valued in $W$ (no inner product on $W$ is used). Gauge invariance gives $\delta_\epsilon(S_{\mathrm{m}}+S_{\mathrm{rel}})=0$ identically: $$0=\int_M\left(
\Bigl\langle\frac{\delta (S_{\mathrm{m}}+S_{\mathrm{rel}})}{\delta A_\mu},\;D_\mu\epsilon\Bigr\rangle
+\Bigl\langle\!\Bigl\langle
\frac{\delta (S_{\mathrm{m}}+S_{\mathrm{rel}})}{\delta \Phi},\;-\rho_*(\epsilon)\Phi
\Bigr\rangle\!\Bigr\rangle
\right)\mathrm{d}^4x ,$$ the second pairing being the duality pairing of Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i) between the dual-valued Euler operator and the $W$-valued variation. On the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter) the second term vanishes. Using [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), the first term is $$0=-\int_M\bigl\langle J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}},\;D_\mu\epsilon\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Covariant integration by parts, valid because $\langle\cdot,\cdot\rangle$ is $\operatorname{Ad}$-invariant, hence $D$-compatible, and because the boundary term vanishes by Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), gives $$0=\int_M\bigl\langle D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr),\;
\epsilon\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Since $\epsilon$ is arbitrary and $\langle\cdot,\cdot\rangle$ is nondegenerate, [(91)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:current-cons) follows. ◻

</div>

<div class="remark">

*Remark 55* (Consistency of the gauge equation with the current identity).

<div id="rem:consistency-check">

</div>

Identity [(91)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:current-cons) is consistent with, and indeed implied on shell by, the gauge equation [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym). Applying $D_\nu$ to [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) requires evaluating $D_\nu D_\mu F^{\mu\nu}$. Decomposing the second covariant derivative into its symmetric and antisymmetric parts in $(\mu,\nu)$ and contracting with the antisymmetric $F^{\mu\nu}$, only the antisymmetric part survives: $$D_\nu D_\mu F^{\mu\nu}
=\tfrac12\,[D_\nu,D_\mu]\,F^{\mu\nu}
=\tfrac12\,\bigl[F_{\nu\mu},\,F^{\mu\nu}\bigr] ,$$ by the Ricci identity for the gauge-covariant derivative on a section of $\mathrm{ad}P$, namely $[D_\nu,D_\mu]X=[F_{\nu\mu},X]$. (The Levi-Civita curvature terms cancel between the two spacetime indices of the antisymmetric $F^{\mu\nu}$, by the first Bianchi identity for $R$.) The remaining bracket vanishes: writing $F_{\nu\mu}=-F_{\mu\nu}$ gives $[F_{\nu\mu},F^{\mu\nu}]=-[F_{\mu\nu},F^{\mu\nu}]$, and $[X,X]=0$ for the $\mathfrak{g}$-valued quantity $X=F_{\mu\nu}$ contracted with its own index-raised counterpart. Hence $D_\nu D_\mu F^{\mu\nu}=0$, and [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) therefore forces $D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr)=0$ after relabelling the free index, in agreement with Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current). The two derivations are independent: the proposition uses only gauge invariance and the matter equation, whereas this computation uses the gauge equation.

</div>

<div class="remark">

*Remark 56* (Ward identities as a constraint on realizations).

<div id="rem:noether-constraint">

</div>

Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons) and Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current) function as selection rules. Every effective representation of a completed source relation must satisfy them, because they follow from nothing more than the invariance requirement [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) that made $S_{\mathrm{rel}}$ a functional of the physical orbit in the first place. Consequently, a proposed correction to the Tier-1 field equations that violates the relevant Ward identity is *not* a geometric realization of an invariant completion. This is a sharp, checkable necessary condition on any candidate coupling of completed relations to Tier-1 dynamics.

</div>


# From completion to Tier-1 representation

<div id="sec:tier1">

</div>

The completed geometric architecture established by Theorems [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent), [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization) and [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs) is the factorization $$
S_{\mathrm{geo}}
\;\xrightarrow{\;\;e_A^{\mathrm{geo}}\;\;}\;
E_A^{\mathrm{geo}}
\;\xrightarrow{\;\;u_A\;\;}\;
T ,
\qquad
u_A\circ e_A^{\mathrm{geo}}=p_{\mathrm{geo}}.\tag{93}$$ The first map retains the readout together with the selected invariant geometric relations; the second forgets those completion coordinates and returns the original Tier-1 state. Neither map chooses a coordinate chart, a gauge potential, or a preferred representative of a physical orbit: $S_{\mathrm{geo}}$ is already the orbit space, and $e_A^{\mathrm{geo}}$ is built from $\mathfrak{G}_{\mathrm{geo}}$-invariant functions. This is what it means for the completion to be geometric rather than notational.

When a relation-dependent action is specified in the sense of Definition [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#def:action), the completed state enters Tier-1 dynamics through the derived response fields $$
T^{\mathrm{rel}}_{\mu\nu},
\qquad
J^{\mu}_{\mathrm{rel}},
\qquad
\mathcal{E}^{\mathrm{rel}}_{\Phi} .\tag{94}$$ A distinction must be drawn here, since the two halves of the construction carry invariance in different senses, and conflating them would misdescribe the responses.

*Invariance.* What is invariant are the *scalars* and the *orbit-defined information*: the action $S_{\mathrm{rel}}$ is a $\mathfrak{G}_{\mathrm{geo}}$-invariant functional by hypothesis [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2); the relation coordinates $r_\alpha$ and the readout $p_{\mathrm{geo}}$ are functions on the orbit space $S_{\mathrm{geo}}$ by Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation); and the completion [(93)](/source-readout/geometric-realization-of-completed-source-relations/from-completion-to-tier-1-representation#eq:architecture) is assembled from these.

*Covariance.* The responses [(94)](/source-readout/geometric-realization-of-completed-source-relations/from-completion-to-tier-1-representation#eq:responses-summary), by contrast, are *not* invariant pointwise, and are not scalars. They are the functional derivatives of an invariant action with respect to the fields, hence tensorial objects on $M$ carrying spacetime and representation indices: $T^{\mathrm{rel}}_{\mu\nu}$ is a symmetric $2$-tensor, $J^{\mu}_{\mathrm{rel}}$ an $\mathrm{ad}P$-valued spacetime vector field, and $\mathcal{E}^{\mathrm{rel}}_{\Phi}$ a section of the dual matter bundle. Under an arrow $(\hat F,f)$ of $\mathfrak{G}_{\mathrm{geo}}$ they transform *covariantly*, by pushforward of tensor indices along $f$ and by the adjoint or dual representation along $\hat F$, rather than being fixed. Thus, for instance, $J^{\mu}_{\mathrm{rel}}\mapsto \operatorname{Ad}_{h^{-1}}J^{\mu}_{\mathrm{rel}}$ under a gauge transformation $h$, and $T^{\mathrm{rel}}_{\mu\nu}\mapsto (f^{-1})^{*}
T^{\mathrm{rel}}_{\mu\nu}$ under an allowed diffeomorphism $f$.

The correct statement is therefore the following. What descends to the orbit space is the invariant action and the relation data; what the variation produces is a family of covariant response tensors, one per gauge and coordinate representative, transforming into one another under the arrows of $\mathfrak{G}_{\mathrm{geo}}$. It is precisely this covariance, not pointwise invariance, that makes the field equations [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein)–[(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter) well posed as equations between tensors, and that makes the Ward identities of Section [8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether) meaningful: $\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}=0$ is a covariant equation, and is preserved under the arrows of $\mathfrak{G}_{\mathrm{geo}}$ rather than being invariant under them in the sense of Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation). By Theorem [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs) and Section [8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether), the responses [(94)](/source-readout/geometric-realization-of-completed-source-relations/from-completion-to-tier-1-representation#eq:responses-summary) are correctly normalized, Ward-consistent, covariant objects obtained by functional variation of a $\mathfrak{G}_{\mathrm{geo}}$-invariant action.

This is the whole of what the present paper establishes about dynamics, and the boundary of the argument should be stated precisely. Paper 4 constructs covariant response fields from $\mathfrak{G}_{\mathrm{geo}}$-invariant actions. It does not determine whether the resulting Tier-1 evolution closes autonomously on $T$, which completion coordinates (if any) must be retained for a closed description, what happens when unresolved variables are eliminated, or whether such elimination produces memory or other history-dependent effective behaviour. In particular, no inference of Tier-1 autonomy may be drawn merely from the observation that some response functional happens to descend to a function of $t$ at the kinematic level considered here: descent of a response at one level does not establish closure of an evolution, and the two questions are not the same. Autonomous closure, retained variables, elimination, memory, and projected evolution require the separate analysis of Paper 5, and are not treated here.


# Conclusion

<div id="sec:conclusion">

</div>

Canonical source completion acquires physical meaning only on a domain where its relation coordinates are jointly realized by compatible geometric data. Four results establish where that domain lies and what it supports.

The geometric descent theorem (Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent)) constructs the global metric, principal bundle, connection, and matter section from compatible local data, uniquely up to bundle isomorphism, with the global time-orientation condition treated explicitly (Remark [3.6](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#rem:descent-time)); its corollary (Corollary [3.7](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#cor:realizability-boundary)) exhibits the realizability boundary, since relation values admitting no compatible descent data are simply outside the geometric realization domain. Passage to the orbit space of the bundle-automorphism groupoid (Definition [2.9](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#def:sgeo)) removes coordinate and gauge redundancy *before* completion, so that no gauge representative is taken for a physical state; the isotropy of a configuration is its stabilizer, which is in general a proper subgroup of the ambient automorphism group (Remark [2.7](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#rem:isotropy)). The restricted geometric realization theorem (Theorem [5.3](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#thm:restricted-realization)) then identifies the joint image of the readout and the declared invariant relations with the canonical minimal completion of Paper 3, relative to that family, and only on that domain, while the orbit reconstruction criterion (Proposition [5.5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#prop:orbit-reconstruction)) reduces exact reconstruction to a separation question in invariant theory, answered case by case and never by fiat.

The flat-circle classification (Theorem [6.5](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#thm:hol-class) and Corollaries [6.7](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:hol-completion)–[6.9](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#cor:spec)) shows in a fully solvable case that a global relation can completely parametrize a reduced source even when local curvature vanishes identically, and that a coarser declared relation leaves a strictly coarser completion behind. Finally, invariant relation-dependent actions (Theorem [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs)) convert completed structure into correctly normalized Einstein, Yang–Mills, and matter equations, with the associated covariant response fields derived rather than postulated, and the Ward–Noether identities (Proposition [8.3](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:cons-bianchi), Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons), Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current)) enforce covariant conservation and supply a sharp necessary condition on any candidate realization.

This supplies the geometric bridge from abstract completion to observable Tier-1 structure. It does not assert that every abstract completion is geometrically realizable, that any finite family of local invariants separates Lorentzian geometries, or anything about the physical status of our universe. The dynamical questions of closure, retention, elimination, and memory belong to Paper 5.


# References

<div class="thebibliography">

99

<span id="bib-AharonovBohm"></span>**\[1\]** Y. Aharonov and D. Bohm, *Significance of Electromagnetic Potentials in the Quantum Theory*, Physical Review **115** (1959), 485–491.

<span id="bib-AmbroseSinger"></span>**\[2\]** W. Ambrose and I. M. Singer, *A theorem on holonomy*, Transactions of the American Mathematical Society **75** (1953), 428–443.

<span id="bib-Bleecker"></span>**\[3\]** D. Bleecker, *Gauge Theory and Variational Principles*, Addison–Wesley, Reading, MA, 1981.

<span id="bib-ChernWeil"></span>**\[4\]** S.-S. Chern, *Complex Manifolds Without Potential Theory*, 2nd ed., Springer, New York, 1979.

<span id="bib-GibbonsHawking1977"></span>**\[5\]** G. W. Gibbons and S. W. Hawking, *Action integrals and partition functions in quantum gravity*, Physical Review D **15** (1977), 2752–2756.

<span id="bib-KobayashiNomizu1"></span>**\[6\]** S. Kobayashi and K. Nomizu, *Foundations of Differential Geometry*, Volume I, Interscience Publishers, New York, 1963.

<span id="bib-KobayashiNomizu2"></span>**\[7\]** S. Kobayashi and K. Nomizu, *Foundations of Differential Geometry*, Volume II, Interscience Publishers, New York, 1969.

<span id="bib-MilnorStasheff"></span>**\[8\]** J. W. Milnor and J. D. Stasheff, *Characteristic Classes*, Annals of Mathematics Studies 76, Princeton University Press, Princeton, NJ, 1974.

<span id="bib-Noether1918"></span>**\[9\]** E. Noether, *Invariante Variationsprobleme*, Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen, Mathematisch-Physikalische Klasse (1918), 235–257.

<span id="bib-Pravda2002"></span>**\[10\]** V. Pravda, A. Pravdová, A. Coley, and R. Milson, *All spacetimes with vanishing curvature invariants*, Classical and Quantum Gravity **19** (2002), 6213–6236.

<span id="bib-Steenrod"></span>**\[11\]** N. Steenrod, *The Topology of Fibre Bundles*, Princeton University Press, Princeton, NJ, 1951.

<span id="bib-Wald"></span>**\[12\]** R. M. Wald, *General Relativity*, University of Chicago Press, Chicago, 1984.

<span id="bib-WuYang"></span>**\[13\]** T. T. Wu and C. N. Yang, *Concept of nonintegrable phase factors and global formulation of gauge fields*, Physical Review D **12** (1975), 3845–3857.

<span id="bib-YangMills1954"></span>**\[14\]** C. N. Yang and R. L. Mills, *Conservation of Isotopic Spin and Isotopic Gauge Invariance*, Physical Review **96** (1954), 191–195.

<span id="bib-York1972"></span>**\[15\]** J. W. York, Jr., *Role of Conformal Three-Geometry in the Dynamics of Gravitation*, Physical Review Letters **28** (1972), 1082–1085.

<span id="bib-ST1"></span>**\[16\]** J. Rodgers, *Source–Readout Non-Equivalence: Descent and Equivariant Reconstruction Obstructions*, Zenodo, 2026. [doi:10.5281/zenodo.21369967](https://doi.org/10.5281/zenodo.21369967).

<span id="bib-ST2"></span>**\[17\]** J. Rodgers, *Target-Relative Necessity of Completion: When Readout Loss Obstructs, and What a Sufficient Extension Must Retain*, Zenodo, 2026. [doi:10.5281/zenodo.21370501](https://doi.org/10.5281/zenodo.21370501).

<span id="bib-ST3"></span>**\[18\]** J. Rodgers, *Canonical Minimal Source Completion: The Coarsest Readout Extension on which a Nominated Family of Source Relations Becomes Well Defined*, Zenodo, 2026. [doi:10.5281/zenodo.21370763](https://doi.org/10.5281/zenodo.21370763).

</div>
