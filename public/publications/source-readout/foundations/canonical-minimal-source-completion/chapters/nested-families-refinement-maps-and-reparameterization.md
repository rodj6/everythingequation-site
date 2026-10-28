# Nested families, refinement maps, and reparameterization

<div id="sec:refinement">

</div>

## Nested families

Let $A\subseteq B$ be sets of indices, the $A$-relations being a subfamily of the $B$-relations (i.e. the relations indexed by $A$ are the same functions in both families). Then, directly from [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA), $$
\sim_B\ \subseteq\ \sim_A ,\tag{7.1}$$ since agreement of *all* $B$-relations (and the readout) entails agreement of the sub-collection indexed by $A$ (and the readout). In words: a larger nomination is at least as demanding, hence yields an at least as fine completion.

<div class="proposition">

**Proposition 7.1** (Canonical refinement maps).

<div id="prop:refinement">

</div>

*Let $A\subseteq B$. There is a unique map $$
\pi_{BA}\colon E_B\longrightarrow E_A
\qquad\text{with}\qquad
e_A=\pi_{BA}\circ e_B ,\tag{7.2}$$ and it is surjective. It satisfies $u_A\circ\pi_{BA}=u_B$ and $\rho_\alpha^{(A)}\circ\pi_{BA}=\rho_\alpha^{(B)}$ for every $\alpha\in A$, where the superscripts indicate the completion in which the structure map lives. Moreover $\pi_{AA}=\mathop{\mathrm{id}}_{E_A}$, and for $A\subseteq B\subseteq C$, $$
\pi_{CA}=\pi_{BA}\circ\pi_{CB}.\tag{7.3}$$*

</div>

<div class="proof">

*Proof.* *Existence and uniqueness.* We exhibit $E_B$ as a relation-sufficient extension *for the $A$-family* and invoke [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal). Indeed, $e_B\colon S\twoheadrightarrow E_B$ is surjective; $u_B\colon E_B\to T$ satisfies $p=u_B\circ e_B$; and for each $\alpha\in A\subseteq B$ the structure map $\rho_\alpha^{(B)}\colon E_B\to V_\alpha$ satisfies $r_\alpha=\rho_\alpha^{(B)}\circ e_B$. Hence $\bigl(E_B,e_B,u_B,(\rho_\alpha^{(B)})_{\alpha\in A}\bigr)$ is an object of $\mathbf{Suff}(p;\{r_\alpha\}_{\alpha\in A})$. [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) supplies a unique morphism from it to the terminal object $\mathcal E_A$, i.e. a unique map $\pi_{BA}\colon E_B\to E_A$ with $e_A=\pi_{BA}\circ e_B$, and asserts that it is surjective. Compatibility with $u$ and with the $\rho_\alpha$, $\alpha\in A$, is [Lemma 4.3](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#lem:structure-preserved) (equivalently [(5.6)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-structure)).

*Identity.* For $B=A$, the identity $\mathop{\mathrm{id}}_{E_A}$ satisfies $e_A=\mathop{\mathrm{id}}_{E_A}\circ e_A$; by the uniqueness just established, $\pi_{AA}=\mathop{\mathrm{id}}_{E_A}$.

*Cocycle law.* Let $A\subseteq B\subseteq C$. Both $\pi_{CA}$ and $\pi_{BA}\circ\pi_{CB}$ are maps $E_C\to E_A$. Compose each with the surjection $e_C$: $$\pi_{CA}\circ e_C=e_A,
\qquad
(\pi_{BA}\circ\pi_{CB})\circ e_C
=\pi_{BA}\circ(\pi_{CB}\circ e_C)
=\pi_{BA}\circ e_B
=e_A .$$ Two maps out of $E_C$ that agree after precomposition with the surjection $e_C$ agree on all of $E_C$: given $x\in E_C$, write $x=e_C(s)$ and evaluate. Hence [(7.3)](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#eq:cocycle). (Alternatively, both maps are morphisms $\mathcal E_C\to\mathcal E_A$ in $\mathbf{Suff}(p;\{r_\alpha\}_{\alpha\in
A})$, and [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) says there is only one.) ◻

</div>

Nested nominations therefore generate a coherent tower of completions, $$
S\ \longrightarrow\ E_C\ \xrightarrow{\ \pi_{CB}\ }\ E_B\ \xrightarrow{\ \pi_{BA}\ }\ E_A\
\xrightarrow{\ u_A\ }\ T
\qquad(A\subseteq B\subseteq C),\tag{7.4}$$ in which each arrow forgets exactly the distinctions that the smaller nomination does not require. This is a hierarchy of *information content*. Its arrows run from finer to coarser, and by [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) each is uniquely determined by the pair of nominations.

<div class="remark">

*Remark 25* (Strictness is not automatic).

<div id="rem:not-strict">

</div>

The completion for a larger family is at least as fine as that for a smaller one, and *may* be strictly finer, but need not be. If every relation indexed by $B\setminus A$ is redundant relative to $p$ and the $A$-relations, then $\sim_B\ =\ \sim_A$ by the argument of [Corollary 6.3](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#cor:deletion), and $\pi_{BA}$ is a bijection. Adding relations to the nomination adds information to the completion precisely to the extent that the added relations separate pairs that the existing nomination identifies.

</div>

## Faithful reparameterization

The completion depends on the *distinctions* carried by the nominated relations, not on the labels in which their values happen to be recorded. We make this precise.

<div class="proposition">

**Proposition 7.3** (Invariance under faithful reparameterization).

<div id="prop:reparam">

</div>

*For each $\alpha\in A$ let $f_\alpha\colon V_\alpha\to W_\alpha$ be a map whose restriction to the realized subset $r_\alpha(S)\subseteq V_\alpha$ is injective, and set $$
r'_\alpha:=f_\alpha\circ r_\alpha\colon S\to W_\alpha .\tag{7.5}$$ Let $\sim_A$ and $\sim'_A$ be the equivalence relations induced by $\{r_\alpha\}$ and by $\{r'_\alpha\}$ (with the same readout $p$), and let $E_A$, $E'_A$ be the corresponding completions. Then $$
\sim_A\ =\ \sim'_A ,\tag{7.6}$$ and consequently there is a canonical bijection $E_A\cong E'_A$ commuting with the completion maps from $S$ and with the projections to $T$: $$
u'_A\circ\bigl(E_A\xrightarrow{\ \cong\ }E'_A\bigr)=u_A .\tag{7.7}$$*

</div>

<div class="proof">

*Proof.* *$\sim_A\subseteq\sim'_A$.* Suppose $s\sim_A s'$. Then $p(s)=p(s')$, and for each $\alpha$, $r_\alpha(s)=r_\alpha(s')$; applying the function $f_\alpha$ to equal arguments gives $r'_\alpha(s)=f_\alpha(r_\alpha(s))=f_\alpha(r_\alpha(s'))=r'_\alpha(s')$. Hence $s\sim'_A s'$. (Only well-definedness of $f_\alpha$ is used here; injectivity is not.)

*$\sim'_A\subseteq\sim_A$.* Suppose $s\sim'_A s'$. Then $p(s)=p(s')$, and for each $\alpha$, $f_\alpha(r_\alpha(s))=f_\alpha(r_\alpha(s'))$. Both $r_\alpha(s)$ and $r_\alpha(s')$ lie in the realized subset $r_\alpha(S)$, on which $f_\alpha$ is injective by hypothesis; therefore $r_\alpha(s)=r_\alpha(s')$. As this holds for every $\alpha$, $s\sim_A s'$.

This proves [(7.6)](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#eq:same-relation). By [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient) applied to each family, $E_A\cong S/\!\sim_A\ =\ S/\!\sim'_A\ \cong E'_A$, and the composite bijection sends $e_A(s)\mapsto e'_A(s)$, so it commutes with the completion maps. Since $u_A(e_A(s))=p(s)=u'_A(e'_A(s))$ for every $s$, and $e_A$ is surjective, [(7.7)](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#eq:iso-over-T) follows. ◻

</div>

<div class="remark">

*Remark 27* (The precise form of the invariance).

<div id="rem:reparam-precise">

</div>

The value spaces $V_\alpha$ and $W_\alpha$ are in general different sets, so $E_A\subseteq T\times
V_A$ and $E'_A\subseteq T\times W_A$ are subsets of different products. [Proposition 7.3](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#prop:reparam) therefore asserts an isomorphism of the *induced quotients over $T$*, equivalently, of the two objects as completions of the readout, and not an identity, nor an isomorphism internal to a single fixed category of relation signatures valued in one fixed product. The relation-signature coordinates are a presentation; the quotient is the invariant. Faithful relabelling of the presentation does not move the invariant.

</div>
