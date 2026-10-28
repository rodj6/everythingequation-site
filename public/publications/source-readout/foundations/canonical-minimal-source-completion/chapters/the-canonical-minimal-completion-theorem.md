# The canonical minimal-completion theorem

<div id="sec:main">

</div>

<div class="theorem">

**Theorem 5.1** (Canonical minimal completion).

<div id="thm:terminal">

</div>

*The tuple $$
\mathcal E_A=\bigl(E_A,\ e_A,\ u_A,\ (\rho_\alpha)_{\alpha\in A}\bigr)\tag{5.1}$$ of [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA) is an object of $\mathbf{Suff}(p;\{r_\alpha\})$, and it is **terminal**: for every relation-sufficient extension $\mathcal E=(E,e,u,(\rho_\alpha^E))$ there exists a **unique** morphism $$
\phi_{\mathcal E}\colon\ \mathcal E\longrightarrow\mathcal E_A,
\qquad\text{that is,}\qquad
\phi_{\mathcal E}\colon E\longrightarrow E_A .\tag{5.2}$$ It is given by the explicit formula $$
\phi_{\mathcal E}(x)=\Bigl(u(x),\ \bigl(\rho_\alpha^E(x)\bigr)_{\alpha\in A}\Bigr),
\qquad x\in E,\tag{5.3}$$ and $\phi_{\mathcal E}$ is surjective.*

</div>

Before the proof, we emphasize the direction, since reversing it inverts the meaning of the theorem. The universal map runs **from an arbitrary sufficient extension to $E_A$**, not from $E_A$ to it. $E_A$ is therefore the *terminal*, the *coarsest*, sufficient extension: every sufficient extension maps *onto* it, and so retains at least as much information as it does. $E_A$ is not an initial object, not a universal cover, and not the finest extension; the finest sufficient extension is $S$ itself (with $e=\mathop{\mathrm{id}}_S$), which is precisely the object one is trying not to be forced into.

<div class="proof">

*Proof.* *$\mathcal E_A$ is an object.* $e_A$ is surjective and the factorizations [(3.4)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:factorization) hold, by [Proposition 3.2](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:factorization).

Now fix a relation-sufficient extension $\mathcal E=(E,e,u,(\rho_\alpha^E))$ and define $\phi_{\mathcal E}$ by the formula [(5.3)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE). We establish the required properties in turn.

*(i) The formula is well defined as a function $E\to T\times V_A$.* For each $x\in E$ the value $u(x)\in T$ is determined, and for each $\alpha\in A$ the value $\rho_\alpha^E(x)\in V_\alpha$ is determined; the assignment $\alpha\mapsto\rho_\alpha^E(x)$ is therefore an element of the set-theoretic product $V_A=\prod_{\alpha\in A}V_\alpha$. Hence [(5.3)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE) assigns to each $x\in E$ exactly one element of $T\times V_A$. No choice is involved, and no representative of $x$ is used: the formula depends only on $x$ through the given structure maps of $\mathcal E$.

*(ii) The image lies in $E_A$, and $e_A=\phi_{\mathcal E}\circ e$.* Let $x\in E$. By surjectivity of $e$ there is $s\in S$ with $x=e(s)$. Then, using [(4.2)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:suff-factorization), $$
\phi_{\mathcal E}(x)
=\phi_{\mathcal E}\bigl(e(s)\bigr)
=\Bigl(u\bigl(e(s)\bigr),\ \bigl(\rho_\alpha^E(e(s))\bigr)_{\alpha\in A}\Bigr)
=\Bigl(p(s),\ \bigl(r_\alpha(s)\bigr)_{\alpha\in A}\Bigr)
=j_A(s)
=e_A(s).\tag{5.4}$$ The right-hand side lies in $\mathop{\mathrm{Im}}(j_A)=E_A$ by [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA). Since $x\in E$ was arbitrary, $\phi_{\mathcal E}(E)\subseteq E_A$, so $\phi_{\mathcal E}$ may be regarded as a map $E\to E_A$; and reading [(5.4)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-computation) from the ends, $\phi_{\mathcal E}(e(s))=e_A(s)$ for every $s\in
S$, i.e. $$
e_A=\phi_{\mathcal E}\circ e .\tag{5.5}$$ Note that the computation [(5.4)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-computation) is legitimate for *every* choice of preimage $s$ of $x$, and its left-hand side does not depend on $s$; so no consistency question arises.

*(iii) It is a morphism, and preserves all structure maps.* Equation [(5.5)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-over-S) is precisely condition [(4.3)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:morphism-over-S) of [Definition 4.2](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:morphism), so $\phi_{\mathcal E}$ is a morphism $\mathcal E\to\mathcal E_A$. Preservation of the structure maps then follows from [Lemma 4.3](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#lem:structure-preserved), but in the present case it is also visible directly from [(5.3)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE): applying the coordinate projections $u_A$ and $\rho_\alpha$ to $\phi_{\mathcal E}(x)=\bigl(u(x),(\rho_\beta^E(x))_\beta\bigr)$ gives $$
u_A\circ\phi_{\mathcal E}=u,
\qquad
\rho_\alpha\circ\phi_{\mathcal E}=\rho_\alpha^E
\qquad(\alpha\in A).\tag{5.6}$$

*(iv) Surjectivity.* Let $y\in E_A$. By [Proposition 3.2](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:factorization) the map $e_A$ is surjective, so $y=e_A(s)$ for some $s\in S$. By [(5.5)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-over-S), $y=\phi_{\mathcal E}(e(s))$, and $e(s)\in E$. Hence $\phi_{\mathcal E}$ is onto $E_A$.

*(v) Uniqueness.* Suppose $\psi\colon\mathcal E\to\mathcal E_A$ is any morphism, i.e. any function $\psi\colon E\to E_A$ with $e_A=\psi\circ e$. Let $x\in E$ and choose $s\in S$ with $x=e(s)$. Then $$\psi(x)=\psi\bigl(e(s)\bigr)=e_A(s)=\phi_{\mathcal E}\bigl(e(s)\bigr)=\phi_{\mathcal E}(x),$$ using $e_A=\psi\circ e$ for the second equality and [(5.5)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE-over-S) for the third. Since $x$ was arbitrary, $\psi=\phi_{\mathcal E}$. (This is exactly where surjectivity of $e$ is consumed: it guarantees that the condition $e_A=\psi\circ e$ pins down $\psi$ at *every* point of $E$, not merely on a subset.) ◻

</div>

<div class="corollary">

**Corollary 5.2** (Uniqueness up to unique isomorphism).

<div id="cor:unique">

</div>

*Any two terminal objects of the category $\mathbf{Suff}(p;\{r_\alpha\})$ are isomorphic by a unique isomorphism, and this isomorphism commutes with the completion maps from $S$ and with all of the structure maps. In particular, any relation-sufficient extension that satisfies the universal property of [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) is canonically isomorphic to $\mathcal E_A$.*

</div>

<div class="proof">

*Proof.* Let $\mathcal E,\mathcal E'$ be terminal. Terminality of $\mathcal E'$ gives a unique morphism $f\colon\mathcal E\to\mathcal E'$; terminality of $\mathcal E$ gives a unique morphism $g\colon\mathcal E'\to\mathcal E$. Then $g\circ f\colon\mathcal E\to\mathcal E$ is a morphism, as is $\mathop{\mathrm{id}}_{\mathcal E}$; by terminality of $\mathcal E$ there is only one morphism $\mathcal E\to\mathcal E$, so $g\circ f=\mathop{\mathrm{id}}_E$. Symmetrically $f\circ g=\mathop{\mathrm{id}}_{E'}$. Hence $f$ is an isomorphism, and it is unique because morphisms into a terminal object are unique. Compatibility with the completion maps is [(4.3)](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#eq:morphism-over-S); compatibility with the structure maps is [Lemma 4.3](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#lem:structure-preserved). ◻

</div>

<div class="corollary">

**Corollary 5.3** (Coarsest sufficiency, elementary form).

<div id="cor:coarsest">

</div>

*Let $\mathcal E=(E,e,u,(\rho_\alpha^E))$ be any relation-sufficient extension, and define its induced equivalence relation by $$
s\sim_e s'\quad:\Longleftrightarrow\quad e(s)=e(s').\tag{5.7}$$ Then $$
\sim_e\ \subseteq\ \sim_A .\tag{5.8}$$ Equivalently: every sufficient extension separates at least every pair that $E_A$ separates, while $E_A$ separates no pair that sufficiency does not force it to separate.*

</div>

<div class="proof">

*Proof.* Suppose $e(s)=e(s')$. Applying $u$ and using $p=u\circ e$, $$p(s)=u\bigl(e(s)\bigr)=u\bigl(e(s')\bigr)=p(s') .$$ Applying $\rho_\alpha^E$ and using $r_\alpha=\rho_\alpha^E\circ e$, for each $\alpha\in A$, $$r_\alpha(s)=\rho_\alpha^E\bigl(e(s)\bigr)=\rho_\alpha^E\bigl(e(s')\bigr)=r_\alpha(s') .$$ By [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA) this is precisely $s\sim_A s'$. ◻

</div>

[Corollary 5.3](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#cor:coarsest) and [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) are two faces of one statement. Terminality is the categorical form; the inclusion [(5.8)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:coarsest) is the elementary, checkable form. The inclusion also settles the direction question once and for all: since $\sim_e$ is contained in $\sim_A$, the partition induced by $e$ *refines* the partition induced by $e_A$, so there is a well-defined map from the finer quotient onto the coarser one, from $E$ onto $E_A$, and not back.

<div class="remark">

*Remark 18* (The sense in which the completion is a construction).

<div id="rem:construction-scope">

</div>

[Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) constructs the coarsest relation-sufficient extension in the paper’s category $\mathbf{Suff}(p;\{r_\alpha\})$ of set-theoretic source quotients: the object $E_A$ exists, is terminal, and is unique up to unique isomorphism, and those claims are unconditional. What the theorem builds it builds from the nominated relations themselves. The joint map $j_A=(p,R_A)$ takes the $r_\alpha$ as given input, so the construction presupposes the relation data rather than producing it; in particular it furnishes *no* procedure for recovering the $r_\alpha$ from the readout $p$ when they fail to descend, if such a procedure existed the relations would already be functions of $p$, and the completion would be $T$ itself. Nor does terminality establish that $E_A$ is experimentally accessible, measurable, smooth, geometric, or realized as a physical state space independent of its defining coordinates; $E_A$ is, as constructed, a quotient of $S$ recording exactly the nominated values. A concrete realization must independently supply and justify the relation data, and any additional geometric or physical structure carried by $E_A$, on its own terms. That realization question is not settled here; it is deferred to the companion manuscript on geometric realization discussed in [Section 13](/source-readout/canonical-minimal-source-completion/discussion-and-scope#sec:discussion).

</div>

<div class="remark">

*Remark 19* (What “minimal” means, and what it does not).

<div id="rem:minimality">

</div>

Minimality here means: *least retained distinction among sufficient extensions*. It is a statement about the ordering of equivalence relations by inclusion, equivalently about the ordering of partitions by refinement. It does *not* mean minimum cardinality selected without regard to structure, the one-point set is smaller than $E_A$ and is not, in general, sufficient, and it does *not* mean that $E_A$ is a small or economical description of $S$ in any other sense. Above all, minimal completion is *not* reconstruction of $S$: by [Proposition 3.5](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:ordering) the map $e_A$ need not be injective, and [Section 12](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#sec:reconstruction) determines exactly when it is.

</div>
