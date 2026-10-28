# Introduction

<div id="sec:intro">

</div>

## The problem inherited from Papers 1 and 2

This is the third paper of a sequence on source–readout non-equivalence. The first companion manuscript \[[1](/source-readout/canonical-minimal-source-completion/references#bib-Paper1)\] established that a readout map $p\colon S\to T$ need not admit descent for a given source-defined quantity: a function $r\colon S\to V$ factors as $r=\bar r\circ p$ if and only if $r$ is constant on every fiber $F_t=p^{-1}(t)$, and equivariant refinements of this statement produce genuine obstructions. The second companion manuscript \[[2](/source-readout/canonical-minimal-source-completion/references#bib-Paper2)\] sharpened the significance of that failure. Information destroyed by a readout is not by itself a defect; it becomes consequential only *relative to a nominated target*. Paper 2 characterized exactly when a target with correct-answer map $a\colon S\to A_Q$ is solvable from the readout alone (precisely when $a$ is $\sim_p$-invariant), and, when it is not, constructed the coarsest extension of $T$ sufficient to determine that single answer map.

What Paper 2 does not supply is the family-level construction. Physical practice almost never nominates a single answer map. One nominates a *family*: a collection of invariant source relations $r_\alpha$, indexed by a set $A$, each entering some independently specified mathematical or physical target. Assembling the single-target completions of Paper 2 one at a time does not answer the family question, because the completions do not simply compose: the object one wants is a single extension of the readout on which *all* the nominated relations become simultaneously well defined, and one wants it to be canonical, adding no distinctions beyond those the nominated family forces. Neither existence, nor minimality, nor uniqueness of such an object is formal from Paper 2.

## What this paper proves

Fix the reduced source $S$, the surjective readout $p\colon S\to T$, and a set-indexed family $r_\alpha\colon S\to V_\alpha$, $\alpha\in A$. Write $V_A=\prod_{\alpha\in A}V_\alpha$, $R_A=(r_\alpha)_{\alpha\in A}\colon S\to V_A$, and $$
j_A=(p,R_A)\colon S\longrightarrow T\times V_A,
\qquad
E_A:=\mathop{\mathrm{Im}}(j_A).\tag{1.1}$$ Let $e_A\colon S\twoheadrightarrow E_A$ be the induced surjection and let $u_A\colon E_A\to T$, $\rho_\alpha\colon E_A\to V_\alpha$ be the coordinate projections. Our results are as follows.

1.  *Explicit construction and quotient realization* ([Section 3](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#sec:construction)). We have $p=u_A\circ e_A$ and $r_\alpha=\rho_\alpha\circ e_A$ for all $\alpha$, and $E_A\cong S/\!\sim_A$ where $s\sim_A s'$ iff $p(s)=p(s')$ and $r_\alpha(s)=r_\alpha(s')$ for every $\alpha\in A$. The information ordering $\Delta_S\subseteq\ \sim_A\ \subseteq\ \sim_p$ holds, and the fiber $u_A^{-1}(t)$ is canonically the set $R_A(F_t)$ of *realized relation signatures* over $t$.

2.  *Terminality* ([Section 4](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#sec:category), [Section 5](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#sec:main)). We define the category of surjective relation-sufficient extensions and prove that $\mathcal{E}_A$ is *terminal* in it: for every sufficient extension $\mathcal E=(E,e,u,(\rho_\alpha^E))$ there is a *unique* morphism $\phi_{\mathcal E}\colon E\to E_A$, and it is surjective. The arrow runs $E\to E_A$, never $E_A\to E$. Elementarily, terminality is the statement $\sim_e\ \subseteq\ \sim_A$ for every sufficient extension: $E_A$ is the *coarsest* sufficient extension, not the finest.

3.  *Coordinate economy* ([Section 6](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#sec:redundancy)). A nominated relation $r_\alpha$ is indispensable if and only if some pair $s,s'$ agrees on the readout and on all $r_\beta$, $\beta\neq\alpha$, yet is separated by $r_\alpha$; and deleting $r_\alpha$ strictly coarsens the completion exactly in that case.

4.  *Functoriality in the family* ([Section 7](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#sec:refinement)). For $A\subseteq B$ there is a unique surjection $\pi_{BA}\colon E_B\to E_A$ over $S$, and these satisfy $\pi_{CA}=\pi_{BA}\circ\pi_{CB}$. Faithful reparameterization of value spaces leaves the completion canonically unchanged over $T$.

5.  *Target completion* ([Section 8](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#sec:targets)). The completion $E_{\mathcal Q}$ determined by a family of answer maps is constructed, and when the relations mediate the answers there is a canonical surjection $\chi\colon E_A\to E_{\mathcal Q}$, an isomorphism precisely when the two induced equivalence relations coincide. Target completion may be *strictly coarser* than relation completion.

6.  *Gauge boundary and topology* ([Section 9](/source-readout/canonical-minimal-source-completion/the-gauge-reduction-boundary#sec:gauge), [Section 10](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#sec:topology)). Completion occurs *after* gauge reduction and cannot undo it. In the topological setting, $E_A$ with the quotient topology is terminal among topological sufficient extensions; the canonical injection $E_A\hookrightarrow T\times V_A$ is an embedding exactly when quotient and subspace topologies agree, for which compactness of $S$ and Hausdorffness of $T\times V_A$ suffice.

7.  *Worked example* ([Section 11](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#sec:u1)) and *exact reconstruction scope* ([Section 12](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#sec:reconstruction)): $e_A$ is injective iff $\{p\}\cup\{r_\alpha\}$ separates points of $S$.

## What this paper does not prove

<div id="subsec:scope-front">

</div>

The theorem is *model-relative*. Once a reduced source space, a readout, and a nominated family of invariant relations or targets are specified, there is a canonical coarsest sufficient quotient. Nothing here shows that the source space is empirically real, that observed physics is a projection of a hidden source, that every lost distinction must be restored, that the full source is in general recoverable, or that any particular relation family is physically privileged absent independent justification. In particular, “minimal completion” is not “reconstruction of the source”: the two coincide only under the separation criterion of [Proposition 12.1](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#prop:reconstruction). We return to these limits in [Section 13](/source-readout/canonical-minimal-source-completion/discussion-and-scope#sec:discussion).

## Notation

We keep the frozen notation of the companion manuscripts. $S$ is the reduced source space, $T$ the readout space, $p\colon S\to T$ the surjective readout, and $F_t=p^{-1}(t)$ the readout fiber over $t\in T$. Throughout, $A$ denotes a *set* indexing the nominated relation family; products $V_A=\prod_{\alpha\in A}V_\alpha$ are ordinary set-theoretic products, so that a point of $V_A$ is a choice function $\alpha\mapsto v_\alpha\in V_\alpha$, and no cardinality restriction on $A$ is needed. We write $\Delta_S=\{(s,s):s\in S\}$ for the equality relation on $S$ and $\sim_p$ for equality of the readout. For equivalence relations, $\sim\ \subseteq\ \approx$ means that $\sim$ is *finer* (identifies fewer pairs, retains more information) and $\approx$ is *coarser*.
