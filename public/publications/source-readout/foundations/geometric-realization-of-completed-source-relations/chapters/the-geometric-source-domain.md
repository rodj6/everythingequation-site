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
