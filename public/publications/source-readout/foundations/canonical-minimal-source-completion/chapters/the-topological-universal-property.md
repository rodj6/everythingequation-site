# The topological universal property

<div id="sec:topology">

</div>

Assume now that $S$, $T$, and each $V_\alpha$ are topological spaces, and that $p$ and every $r_\alpha$ are continuous. Give $V_A=\prod_{\alpha\in A}V_\alpha$ the product topology and $T\times V_A$ the product topology; then $j_A=(p,R_A)$ is continuous, by the universal property of the product.

<div class="definition">

**Definition 10.1** (Topological completion).

<div id="def:top-EA">

</div>

Equip $E_A$ with the *quotient topology* induced by the surjection $e_A\colon S\twoheadrightarrow E_A$: a subset $U\subseteq E_A$ is open iff $e_A^{-1}(U)$ is open in $S$. A *topological relation-sufficient extension* is a relation-sufficient extension $\mathcal E=(E,e,u,(\rho_\alpha^E))$ in which $E$ is a topological space, $e$ is a *quotient map*, and $u$ and every $\rho_\alpha^E$ are continuous. Morphisms are continuous maps satisfying [(4.3)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:morphism-over-S).

</div>

<div class="proposition">

**Proposition 10.2** (Continuity of the structure maps).

<div id="prop:top-structure">

</div>

*With the quotient topology of [Definition 10.1](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#def:top-EA), the maps $u_A\colon E_A\to T$ and $\rho_\alpha\colon E_A\to V_\alpha$ are continuous, so $\mathcal E_A$ is a topological relation-sufficient extension.*

</div>

<div class="proof">

*Proof.* By the characteristic property of the quotient topology, a map out of $E_A$ is continuous iff its composite with $e_A$ is continuous. Now $u_A\circ e_A=p$ and $\rho_\alpha\circ e_A=r_\alpha$ by [(3.4)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:factorization), and $p$ and $r_\alpha$ are continuous by hypothesis. Finally $e_A$ is a quotient map by construction. ◻

</div>

<div class="theorem">

**Theorem 10.3** (Topological universal property).

<div id="thm:top-terminal">

</div>

*$\mathcal E_A$, with the quotient topology, is terminal in the category of topological relation-sufficient extensions: for every such $\mathcal E$, the unique set map $\phi_{\mathcal E}\colon E\to E_A$ of [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) is continuous, and it is the unique continuous morphism $\mathcal E\to\mathcal E_A$. It is a continuous surjection.*

</div>

<div class="proof">

*Proof.* [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) supplies the unique *function* $\phi_{\mathcal E}\colon E\to E_A$ satisfying $e_A=\phi_{\mathcal E}\circ e$, and asserts its surjectivity. For continuity: the composite $\phi_{\mathcal E}\circ e=e_A$ is continuous (it is the quotient map onto $E_A$), and $e$ is a quotient map by [Definition 10.1](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#def:top-EA); by the characteristic property of quotient maps, a function out of $E$ whose composite with the quotient map $e$ is continuous is itself continuous. Hence $\phi_{\mathcal E}$ is continuous. Uniqueness among *continuous* morphisms is inherited from uniqueness among all set maps, proved in [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) (v). Finally $\mathcal E_A$ is itself an object of the category by [Proposition 10.2](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#prop:top-structure). ◻

</div>

## Quotient topology versus subspace topology

$E_A$ carries two a priori distinct topologies: the quotient topology of [Definition 10.1](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#def:top-EA), and the subspace topology inherited from $T\times V_A$ via the canonical injection $$
\iota\colon E_A\hookrightarrow T\times V_A .\tag{10.1}$$ These must not be conflated. The universal property of [Theorem 10.3](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#thm:top-terminal) is a statement about the *quotient* topology, and it is the quotient topology that the completion carries by definition.

<div class="proposition">

**Proposition 10.4** (Comparison, and the embedding criterion).

<div id="prop:embedding">

</div>

*Equip $E_A$ with the quotient topology.*

1.  <div id="it:iota-cts">

    </div>

    *The injection $\iota$ of [(10.1)](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#eq:iota) is continuous. Consequently the quotient topology is *finer than or equal to* the subspace topology on $\mathop{\mathrm{Im}}(j_A)$.*

2.  <div id="it:iota-embed">

    </div>

    *$\iota$ is a topological embedding if and only if the quotient topology coincides with the subspace topology; equivalently, if and only if the corestriction $j_A\colon S\to\mathop{\mathrm{Im}}(j_A)$ is a quotient map when $\mathop{\mathrm{Im}}(j_A)$ carries the product subspace topology.*

</div>

<div class="proof">

*Proof.* We have $\iota\circ e_A=j_A$, which is continuous; since $e_A$ is a quotient map, $\iota$ is continuous by the characteristic property. Continuity of $\iota$ says exactly that every subspace-open subset of $E_A$ (i.e. every $\iota^{-1}(W)$ with $W$ open in $T\times V_A$) is quotient-open; hence the quotient topology contains the subspace topology.

$\iota$ is injective and continuous, so it is an embedding iff it is open onto its image, i.e. iff every quotient-open subset of $E_A$ is subspace-open. Combined with , this holds iff the two topologies are equal.

For the reformulation, write $I:=\mathop{\mathrm{Im}}(j_A)$ with the subspace topology and let $\bar j_A\colon S\to I$ be the corestriction of $j_A$, so that as *functions* $\bar j_A=\iota\circ e_A$ with $\iota$ now regarded as the identity of underlying sets $E_A\to I$. Suppose the topologies agree. Then $\iota$ is a homeomorphism and $e_A$ is a quotient map, so $\bar j_A$ is a quotient map. Conversely, suppose $\bar j_A$ is a quotient map. A subset $U\subseteq
E_A$ is quotient-open iff $e_A^{-1}(U)$ is open in $S$; and $e_A^{-1}(U)=\bar j_A^{-1}(U)$ as subsets of $S$, since $e_A$ and $\bar j_A$ agree as functions into the common underlying set. Because $\bar j_A$ is a quotient map, $\bar j_A^{-1}(U)$ open in $S$ implies $U$ open in $I$, i.e. subspace-open. Hence quotient-open implies subspace-open, and with the two topologies coincide. ◻

</div>

<div class="corollary">

**Corollary 10.5** (Compact–Hausdorff sufficient condition).

<div id="cor:compact-hausdorff">

</div>

*Suppose $S$ is compact and $T\times V_A$ is Hausdorff. Then the quotient and subspace topologies on $E_A$ agree, and $\iota\colon E_A\hookrightarrow T\times V_A$ is a topological embedding; in particular $E_A$ is a compact Hausdorff space.*

</div>

<div class="proof">

*Proof.* Write $I=\mathop{\mathrm{Im}}(j_A)\subseteq T\times V_A$ with the subspace topology, and let $\bar j_A\colon S\to I$ be the (continuous, surjective) corestriction of $j_A$. As a subspace of a Hausdorff space, $I$ is Hausdorff. We show $\bar j_A$ is a closed map, hence a quotient map, and then apply [Proposition 10.4](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#prop:embedding) .

Let $C\subseteq S$ be closed. Since $S$ is compact, $C$ is compact; since $\bar j_A$ is continuous, $\bar j_A(C)$ is a compact subset of $I$; since $I$ is Hausdorff, the compact subset $\bar j_A(C)$ is closed in $I$. Thus $\bar j_A$ is a continuous closed surjection, and every continuous closed surjection is a quotient map: if $\bar j_A^{-1}(U)$ is open then $S\setminus\bar j_A^{-1}(U)$ is closed, its image $\bar j_A(S\setminus\bar j_A^{-1}(U))=I\setminus U$ is closed by surjectivity, so $U$ is open. By [Proposition 10.4](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#prop:embedding), the topologies agree and $\iota$ is an embedding. Finally $E_A\cong I$ is compact (continuous image of a compact space) and Hausdorff (subspace of a Hausdorff space). ◻

</div>

<div class="remark">

*Remark 38*.

<div id="rem:no-agreement-without-hypotheses">

</div>

Without hypotheses of this kind the two topologies may genuinely differ, and the abstract completion does not require them to agree: [Theorem 10.3](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#thm:top-terminal) holds for the quotient topology regardless. One should not assert the agreement, nor treat $E_A$ as a subspace of $T\times V_A$ in the topological sense, without verifying [Proposition 10.4](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#prop:embedding)  or a sufficient condition such as [Corollary 10.5](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#cor:compact-hausdorff).

</div>
