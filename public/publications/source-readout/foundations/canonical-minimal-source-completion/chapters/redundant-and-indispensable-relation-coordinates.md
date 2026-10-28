# Redundant and indispensable relation coordinates

<div id="sec:redundancy">

</div>

The nominated family may be wasteful: one of its members may already be determined by the readout together with the others, in which case its presence in the list changes nothing. We characterize this exactly.

Throughout this section fix $\alpha\in A$ and write $$
A_{-\alpha}:=A\setminus\{\alpha\},
\qquad
R_{A_{-\alpha}}=(r_\beta)_{\beta\in A_{-\alpha}}\colon S\to V_{A_{-\alpha}} .\tag{6.1}$$

<div class="definition">

**Definition 6.1** (Redundancy and indispensability).

<div id="def:redundant">

</div>

The relation $r_\alpha$ is *redundant relative to $p$ and the remaining relations* if it factors through their joint map, i.e. if there exists a function $f_\alpha\colon T\times V_{A_{-\alpha}}\to V_\alpha$ with $$
r_\alpha=f_\alpha\circ\bigl(p,\ R_{A_{-\alpha}}\bigr).\tag{6.2}$$ It is *indispensable* if no such factorization exists.

</div>

<div class="theorem">

**Theorem 6.2** (Indispensability criterion).

<div id="thm:indispensable">

</div>

*The following are equivalent.*

1.  <div id="it:indisp">

    </div>

    *$r_\alpha$ is indispensable.*

2.  <div id="it:witness">

    </div>

    *There exist $s,s'\in S$ with $$
    p(s)=p(s'),
    \qquad
    r_\beta(s)=r_\beta(s')\quad\text{for every }\beta\in A_{-\alpha},
    \qquad
    r_\alpha(s)\neq r_\alpha(s').\tag{6.3}$$*

</div>

<div class="proof">

*Proof.* We prove the contrapositive equivalence: $r_\alpha$ is redundant if and only if no pair [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness) exists, i.e. if and only if $r_\alpha$ is constant on every fiber of the joint map $g:=(p,R_{A_{-\alpha}})\colon S\to T\times V_{A_{-\alpha}}$. This is the descent statement of Paper 1 \[[1](/source-readout/canonical-minimal-source-completion/references#bib-Paper1)\] applied to $g$; we give the argument in full.

*Redundant $\Rightarrow$ constant on fibers of $g$.* Suppose [(6.2)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:redundant) holds and suppose $g(s)=g(s')$, i.e. $p(s)=p(s')$ and $r_\beta(s)=r_\beta(s')$ for all $\beta\neq\alpha$. Applying $f_\alpha$ to the equal values $g(s)=g(s')$ gives $r_\alpha(s)=f_\alpha(g(s))=f_\alpha(g(s'))=r_\alpha(s')$. Hence no pair as in [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness) can exist.

*Constant on fibers of $g$ $\Rightarrow$ redundant.* Suppose that $g(s)=g(s')$ implies $r_\alpha(s)=r_\alpha(s')$. Define $f_\alpha$ on the image of $g$ by $$
f_\alpha\bigl(g(s)\bigr):=r_\alpha(s)\qquad(s\in S),\tag{6.4}$$ The prescription [(6.4)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:falpha-def) is well defined on $\mathop{\mathrm{Im}}(g)$ precisely by the assumed fiber-constancy: if $g(s)=g(s')$ then the two prescribed values $r_\alpha(s)$ and $r_\alpha(s')$ agree. Every point of $\mathop{\mathrm{Im}}(g)$ is of the form $g(s)$, so $f_\alpha$ is defined on all of $\mathop{\mathrm{Im}}(g)$. It remains to extend $f_\alpha$ to the whole of $T\times V_{A_{-\alpha}}$, and we treat the two cases explicitly.

*Case $S\neq\varnothing$.* Fix any $s_0\in S$ and define $f_\alpha(y):=r_\alpha(s_0)$ for every $y\in\bigl(T\times V_{A_{-\alpha}}\bigr)\setminus\mathop{\mathrm{Im}}(g)$. This is legitimate because $r_\alpha(s_0)$ is an element of $V_\alpha$, so $V_\alpha\neq\varnothing$ and a value is available. The extension changes nothing on $\mathop{\mathrm{Im}}(g)$, where [(6.4)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:falpha-def) already fixes $f_\alpha$.

*Case $S=\varnothing$.* Then $T=\varnothing$: the readout $p\colon S\to T$ is surjective by standing hypothesis, and the image of the empty map is empty, so $T=p(S)=\varnothing$. Hence the product $T\times V_{A_{-\alpha}}=\varnothing$ as well, and the unique map $\varnothing\to V_\alpha$, the empty map, serves as $f_\alpha$. It satisfies $r_\alpha=f_\alpha\circ g$ vacuously as an identity of maps out of $S=\varnothing$, both sides being the empty map. So $r_\alpha$ is redundant in this case, which is consistent: no witness pair [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness) can exist in an empty source, so $r_\alpha$ is not indispensable, exactly as the equivalence requires. (The two sides of the criterion agree here; the case is not merely set aside.)

In either case $f_\alpha$ is defined on all of $T\times V_{A_{-\alpha}}$ and satisfies $r_\alpha=f_\alpha\circ g$, which is [(6.2)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:redundant).

Finally, “no pair as in [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness)” is by inspection the same statement as “$g(s)=g(s')$ implies $r_\alpha(s)=r_\alpha(s')$”, since the first two clauses of [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness) say $g(s)=g(s')$ and the third says $r_\alpha(s)\neq r_\alpha(s')$. Negating both sides of the equivalence just proved yields $\Leftrightarrow$. ◻

</div>

The criterion is a genuine separation test, and it is the reason a long list of nominated relations is not thereby an economical one. A coordinate earns its place only by separating some pair of source states that the readout and all the *other* coordinates identify.

<div class="corollary">

**Corollary 6.3** (Strict coarsening on deletion).

<div id="cor:deletion">

</div>

*Let $\sim_A$ and $\sim_{A_{-\alpha}}$ be the equivalence relations [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA) induced by the full family and by the family with $r_\alpha$ deleted, and let $\pi\colon E_A\to E_{A_{-\alpha}}$ be the canonical surjection of [Proposition 7.1](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#prop:refinement) below (with $B=A$). Then always $\sim_A\ \subseteq\ \sim_{A_{-\alpha}}$, and the following are equivalent:*

1.  *the inclusion is *strict*: $\sim_A\ \subsetneq\ \sim_{A_{-\alpha}}$;*

2.  *$\pi$ is not injective, i.e. deleting $r_\alpha$ *strictly coarsens* the completion;*

3.  *$r_\alpha$ is indispensable.*

</div>

<div class="proof">

*Proof.* The inclusion $\sim_A\subseteq\sim_{A_{-\alpha}}$ is immediate from [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA), since the defining condition for $\sim_A$ is the condition for $\sim_{A_{-\alpha}}$ conjoined with the extra clause $r_\alpha(s)=r_\alpha(s')$.

*(1) $\Leftrightarrow$ (3).* Strictness means: there exist $s,s'$ with $s\sim_{A_{-\alpha}}s'$ but not $s\sim_A s'$. Unwinding [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA), this says $p(s)=p(s')$ and $r_\beta(s)=r_\beta(s')$ for all $\beta\neq\alpha$, while $r_\alpha(s)\neq r_\alpha(s')$, which is exactly the witness [(6.3)](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#eq:witness). By [Theorem 6.2](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#thm:indispensable) this holds iff $r_\alpha$ is indispensable.

*(1) $\Leftrightarrow$ (2).* By [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient), $E_A\cong S/\!\sim_A$ and $E_{A_{-\alpha}}\cong S/\!\sim_{A_{-\alpha}}$, and under these identifications $\pi$ is the canonical map $S/\!\sim_A\ \to\ S/\!\sim_{A_{-\alpha}}$ sending $[s]_A\mapsto[s]_{A_{-\alpha}}$, which is well defined by the inclusion just proved. This map is injective iff $[s]_{A_{-\alpha}}=[s']_{A_{-\alpha}}$ implies $[s]_A=[s']_A$, i.e. iff $\sim_{A_{-\alpha}}\ \subseteq\ \sim_A$, i.e. (given the reverse inclusion) iff the two relations are equal. Its failure is precisely strictness. ◻

</div>

<div class="remark">

*Remark 23* (Irredundancy is not uniqueness of coordinates).

<div id="rem:not-unique-coords">

</div>

A family in which every member is indispensable is *irredundant relative to the nomination*. This is a statement about the given list, and it confers no uniqueness on the list. Different irredundant families may induce the very same equivalence relation $\sim_A$ and hence, by [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient), the very same completion, [Proposition 7.3](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#prop:reparam) below exhibits an entire class of such rewritings. An irredundant list of relation coordinates must therefore not be confused with a preferred coordinate system on the completion.

The correct statement of the coordinate situation is a relative one, and we make it precisely. *Relative to the fixed nominated family* $\{r_\alpha\}_{\alpha\in A}$, the completion $E_A$ does carry canonical structure maps: the readout projection $u_A\colon E_A\to T$ and the relation coordinates $\rho_\alpha\colon E_A\to V_\alpha$ of [(3.3)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:structure-maps), which are part of the data of the terminal object and are determined by it. What $E_A$ does *not* possess is a family-independent, intrinsically unique coordinate presentation: a system of coordinates singled out by the quotient alone, without reference to a nomination. Faithful reparameterizations ([Proposition 7.3](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#prop:reparam)) and distinct irredundant families may present one and the same quotient in different coordinates, and the quotient does not choose among them. The invariant is $E_A$ together with its structure maps for the given nomination; the coordinates are a presentation relative to that nomination.

</div>
