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
