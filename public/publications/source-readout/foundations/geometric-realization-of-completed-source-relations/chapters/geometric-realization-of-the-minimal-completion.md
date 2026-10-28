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
