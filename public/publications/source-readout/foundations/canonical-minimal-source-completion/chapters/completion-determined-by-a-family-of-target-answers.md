# Completion determined by a family of target answers

<div id="sec:targets">

</div>

Paper 2 \[[2](/source-readout/canonical-minimal-source-completion/references#bib-Paper2)\] works with a single target $Q$ and its correct-answer map $a\colon S\to A_Q$, and constructs the coarsest extension of the readout that determines that answer; we will denote that single-target object by $E_Q$, following Paper 2. We now treat a *family* of targets, and we choose notation that cannot collide with the single-target object.

Let $\mathcal Q$ be a set of targets, each equipped with a correct-answer map $$
a_Q\colon S\longrightarrow A_Q,\qquad Q\in\mathcal Q ,\tag{8.1}$$ and define $$
j_{\mathcal Q}\colon S\to T\times\prod_{Q\in\mathcal Q}A_Q,
\qquad
j_{\mathcal Q}(s)=\Bigl(p(s),\ \bigl(a_Q(s)\bigr)_{Q\in\mathcal Q}\Bigr),
\qquad
E_{\mathcal Q}:=\mathop{\mathrm{Im}}\bigl(j_{\mathcal Q}\bigr),\tag{8.2}$$ with induced surjection $e_{\mathcal Q}\colon S\twoheadrightarrow E_{\mathcal Q}$, projection $u_{\mathcal Q}\colon E_{\mathcal Q}\to T$, and structure maps $\sigma_Q\colon E_{\mathcal Q}\to A_Q$. Write $\sim_{\mathcal Q}$ for the induced equivalence relation: $s\sim_{\mathcal Q}s'$ iff $p(s)=p(s')$ and $a_Q(s)=a_Q(s')$ for every $Q\in\mathcal Q$.

<div class="proposition">

**Proposition 8.1** (Target-family completion).

<div id="prop:target-completion">

</div>

*The data $\bigl(E_{\mathcal Q},e_{\mathcal Q},u_{\mathcal Q},(\sigma_Q)_{Q\in\mathcal Q}\bigr)$ is the terminal object of the category $\mathbf{Suff}\bigl(p;\{a_Q\}_{Q\in\mathcal Q}\bigr)$ of surjective extensions of the readout on which every answer map $a_Q$ becomes well defined. In particular $E_{\mathcal Q}\cong S/\!\sim_{\mathcal Q}$, and $E_{\mathcal Q}$ is the coarsest extension of the readout determining every answer in the family.*

</div>

<div class="proof">

*Proof.* The answer maps $a_Q\colon S\to A_Q$ form a set-indexed family of functions on $S$, exactly as the $r_\alpha$ do. [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA), [Definition 4.1](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:sufficient), [Definition 4.2](/source-readout/canonical-minimal-source-completion/the-category-of-relation-sufficient-extensions#def:morphism) and [Proposition 3.2](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:factorization), [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient), [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal), [Corollary 5.3](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#cor:coarsest) were stated and proved for an arbitrary such family and use no property of the $r_\alpha$ beyond their being functions on $S$. Substituting $\mathcal Q$ for $A$, $a_Q$ for $r_\alpha$, and $A_Q$ for $V_\alpha$ throughout yields the assertions verbatim. ◻

</div>

## Mediation and the canonical surjection

Now suppose the nominated relation family is *sufficient for the targets*, in the precise sense that each answer is computable from the readout together with the relation values.

<div class="definition">

**Definition 8.2** (Mediation).

<div id="def:mediation">

</div>

The family $\{r_\alpha\}_{\alpha\in A}$ *mediates* $\mathcal Q$ if for every $Q\in\mathcal Q$ there is a map $$
\Phi_Q\colon T\times V_A\longrightarrow A_Q
\qquad\text{with}\qquad
a_Q(s)=\Phi_Q\bigl(p(s),\ R_A(s)\bigr)\quad\text{for all }s\in S .\tag{8.3}$$

</div>

<div class="theorem">

**Theorem 8.3** (Relation completion versus target completion).

<div id="thm:chi">

</div>

*Suppose $\{r_\alpha\}_{\alpha\in A}$ mediates $\mathcal Q$. Then there is a *unique* map $$
\chi\colon E_A\longrightarrow E_{\mathcal Q}
\qquad\text{with}\qquad
e_{\mathcal Q}=\chi\circ e_A ,\tag{8.4}$$ and $\chi$ is surjective; explicitly, $\chi(x)=\bigl(u_A(x),(\Phi_Q(x))_{Q\in\mathcal Q}\bigr)$ for $x\in E_A\subseteq T\times V_A$. Moreover, $\chi$ is a bijection if and only if $$
\sim_{\mathcal Q}\ =\ \sim_A ,\tag{8.5}$$ that is, if and only if equality of the readout together with all target answers induces exactly the same equivalence relation on $S$ as equality of the readout together with all selected relation values. In general one has only $$
\sim_A\ \subseteq\ \sim_{\mathcal Q} ,\tag{8.6}$$ so the target completion may be **strictly coarser** than the relation completion.*

</div>

<div class="proof">

*Proof.* *$E_A$ is sufficient for $\mathcal Q$.* Define $\sigma_Q^{A}:=\Phi_Q|_{E_A}\colon E_A\to A_Q$ (the restriction of $\Phi_Q$ to $E_A\subseteq T\times V_A$). For $s\in S$, $$\sigma_Q^{A}\bigl(e_A(s)\bigr)=\Phi_Q\bigl(p(s),R_A(s)\bigr)=a_Q(s)$$ by [(8.3)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:Phi). Together with the identity $p=u_A\circ e_A$ and the surjectivity of the map $e_A$, this exhibits the tuple $\bigl(E_A,e_A,u_A,(\sigma_Q^A)_{Q\in\mathcal Q}\bigr)$ as an object of the category $\mathbf{Suff}(p;\{a_Q\})$.

*Existence, uniqueness, surjectivity of $\chi$.* By [Proposition 8.1](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#prop:target-completion), $E_{\mathcal Q}$ is terminal in that category, so [Theorem 5.1](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#thm:terminal) supplies a unique morphism $\chi\colon E_A\to E_{\mathcal Q}$, necessarily satisfying $e_{\mathcal Q}=\chi\circ e_A$ and necessarily surjective; and by the explicit formula [(5.3)](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#eq:phiE) it is given on $x\in E_A$ by $\chi(x)=\bigl(u_A(x),(\sigma_Q^A(x))_{Q\in\mathcal Q}\bigr)
=\bigl(u_A(x),(\Phi_Q(x))_{Q\in\mathcal Q}\bigr)$.

*The ordering [(8.6)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-order).* Suppose $s\sim_A s'$. Then $p(s)=p(s')$ and $R_A(s)=R_A(s')$, so by [(8.3)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:Phi), $a_Q(s)=\Phi_Q(p(s),R_A(s))=\Phi_Q(p(s'),R_A(s'))=a_Q(s')$ for every $Q$. Hence $s\sim_{\mathcal Q}s'$. (This is [Corollary 5.3](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#cor:coarsest) applied to the sufficient extension $E_A$ of the $\mathcal Q$-problem.)

*Injectivity criterion.* By [Proposition 3.4](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:quotient) applied to both families, $\chi$ is identified with the canonical map $S/\!\sim_A\ \to\ S/\!\sim_{\mathcal Q}$, $[s]_A\mapsto[s]_{\mathcal Q}$, which is well defined by [(8.6)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-order). Such a map is injective iff $\sim_{\mathcal Q}\ \subseteq\ \sim_A$; combined with [(8.6)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-order) this is exactly [(8.5)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-iso). Since $\chi$ is always surjective, it is a bijection precisely under [(8.5)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-iso). ◻

</div>

<div class="remark">

*Remark 31* (Two different things are being retained).

<div id="rem:rel-vs-target">

</div>

The distinction encoded in [Theorem 8.3](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#thm:chi) is substantive and is easy to lose. The *relation* completion $E_A$ retains the nominated relation *values* themselves. The *target* completion $E_{\mathcal Q}$ retains only those distinctions among relation values that *affect the nominated answers*. If two source states carry different relation signatures but the mediating maps $\Phi_Q$ send both signatures to the same answers for every $Q\in\mathcal Q$, then $E_A$ separates them and $E_{\mathcal Q}$ does not. Hence the strict-coarsening possibility in [(8.6)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-order) is not an artifact; [Section 11](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#sec:u1) exhibits it concretely, where the relation completion retains an orientation that no answer in the nominated spectral family can detect.

</div>
