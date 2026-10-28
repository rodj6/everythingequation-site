# The category of relation-sufficient extensions

<div id="sec:category">

</div>

We now fix the data $(S,T,p,\{r_\alpha\}_{\alpha\in A})$ for the remainder of the paper and make [Definition 2.2](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:problem) precise as a category.

<div class="definition">

**Definition 4.1** (Relation-sufficient extension).

<div id="def:sufficient">

</div>

A *relation-sufficient extension* of $p$ (relative to the nominated family) is a tuple $$
\mathcal E=\bigl(E,\ e,\ u,\ (\rho_\alpha^E)_{\alpha\in A}\bigr)\tag{4.1}$$ consisting of a set $E$, a **surjection** $e\colon S\twoheadrightarrow E$, and maps $u\colon E\to T$ and $\rho_\alpha^E\colon E\to V_\alpha$ ($\alpha\in A$) satisfying $$
p=u\circ e,
\qquad
r_\alpha=\rho_\alpha^E\circ e
\qquad(\alpha\in A).\tag{4.2}$$

</div>

Two features of [Definition 4.1](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:sufficient) deserve comment.

First, the factorizations [(4.2)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:suff-factorization) are exactly requirements (1) and (2) of [Definition 2.2](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:problem): the readout survives, and every nominated relation is a function of the completed state.

Second, surjectivity of $e$ is not a technical convenience but a substantive part of the definition, and it is what makes the universal property come out uniquely. A completed state that no source state realizes is not a state of the system; it is a spurious element. If unrealized elements were permitted, then given any sufficient $E$ one could adjoin an arbitrary point $\ast$ with arbitrary values $u(\ast)$ and $\rho_\alpha^E(\ast)$ (subject to nothing, since [(4.2)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:suff-factorization) constrains only the image of $e$), and the map to $E_A$ would no longer be determined: the value $\phi(\ast)$ would be unconstrained by $e_A=\phi\circ e$. Uniqueness in [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) would fail. Surjectivity excludes exactly this, and it does so for the honest reason: a completion consists of states *realized* by source states.

<div class="definition">

**Definition 4.2** (Morphism).

<div id="def:morphism">

</div>

Let $\mathcal E=(E,e,u,(\rho_\alpha^E))$ and $\mathcal E'=(E',e',u',(\rho_\alpha^{E'}))$ be relation-sufficient extensions. A *morphism* $f\colon\mathcal E\to\mathcal E'$ is a function $f\colon E\to E'$ satisfying $$
e'=f\circ e .\tag{4.3}$$

</div>

Thus a morphism is a map *under $S$*: it is compatible with the two completion maps out of the source. We now check that this single condition already forces compatibility with all the structure maps.

<div class="lemma">

**Lemma 4.3** (Structure maps are automatically preserved).

<div id="lem:structure-preserved">

</div>

*If $f\colon\mathcal E\to\mathcal E'$ is a morphism in the sense of [Definition 4.2](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:morphism), then $$
u'\circ f=u,
\qquad
\rho_\alpha^{E'}\circ f=\rho_\alpha^E
\qquad(\alpha\in A).\tag{4.4}$$*

</div>

<div class="proof">

*Proof.* Let $x\in E$. Since $e$ is surjective, choose $s\in S$ with $x=e(s)$. Then, using [(4.3)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:morphism-over-S) and the factorizations [(4.2)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:suff-factorization) for $\mathcal E'$ and then for $\mathcal E$, $$u'\bigl(f(x)\bigr)=u'\bigl(f(e(s))\bigr)=u'\bigl(e'(s)\bigr)=p(s)=u\bigl(e(s)\bigr)=u(x),$$ and likewise, for each $\alpha\in A$, $$\rho_\alpha^{E'}\bigl(f(x)\bigr)
=\rho_\alpha^{E'}\bigl(e'(s)\bigr)
=r_\alpha(s)
=\rho_\alpha^{E}\bigl(e(s)\bigr)
=\rho_\alpha^{E}(x).$$ Both computations are independent of the chosen preimage $s$, since their left-hand sides do not mention $s$. As $x$ was arbitrary, [(4.4)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:structure-preserved) holds. ◻

</div>

We display [(4.4)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:structure-preserved) rather than merely deducing it, because it records what a morphism of completions actually preserves: the readout and every nominated relation value. What is *not* imposed is any compatibility beyond that, no metric, no ordering, no choice of labels.

<div class="proposition">

**Proposition 4.4** (This is a category).

<div id="prop:category">

</div>

*Relation-sufficient extensions of $p$ relative to $\{r_\alpha\}_{\alpha\in A}$, with the morphisms of [Definition 4.2](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:morphism), form a category, which we denote $\mathbf{Suff}(p;\{r_\alpha\})$.*

</div>

<div class="proof">

*Proof.* For $\mathcal E=(E,e,u,(\rho_\alpha^E))$, the identity function $\mathop{\mathrm{id}}_E$ satisfies $e=\mathop{\mathrm{id}}_E\circ e$, so it is a morphism $\mathcal E\to\mathcal E$. If $f\colon\mathcal E\to\mathcal E'$ and $g\colon\mathcal E'\to\mathcal E''$ are morphisms, then $(g\circ f)\circ e=g\circ(f\circ e)=g\circ e'=e''$, so $g\circ f\colon\mathcal E\to\mathcal E''$ is a morphism. Associativity of composition and the unit laws are inherited from composition of functions. ◻

</div>

We add no further categorical apparatus; none is needed.
