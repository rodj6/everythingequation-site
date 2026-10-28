# Equivalent forms of source completeness

<div id="sec:completeness">

</div>

We now fix the vocabulary that the literature routinely conflates.

<div class="definition">

**Definition 3.1** (Three completeness notions).

<div id="def:completeness">

</div>

Let $p\colon S\to T_1$ be an exact readout.

1.  $p$ is *kinematically source-complete* if $p$ is injective (hence bijective, by Lemma [2.3](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:induced)).

2.  $p$ is *complete relative to* a family $\mathcal R$ if every $r_\alpha$ *descends*, i.e. there is $\bar r_\alpha\colon T_1\to V_\alpha$ with $r_\alpha=\bar r_\alpha\circ p$. Equivalently (Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent)), each $r_\alpha$ is constant on $p$-fibers. *Relative to a target $Q$*, completeness means $a_Q$ descends.

3.  $p$ is *dynamically sufficient* (or *closed*) for a source evolution $\Phi_t$ if $\Phi_t$ preserves $p$-fibers, so that an autonomous law exists on $T_1$ (§[5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#sec:dynamics)).

</div>

These are genuinely distinct, and it is worth saying why before proving anything, since the entire architecture would collapse into triviality if they were not. (1) implies (2) and (3) trivially. Neither converse holds: Example [5.5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#ex:fiberpreserving) exhibits a dynamically sufficient, hence perfectly autonomous, readout that is kinematically incomplete; Example [4.13](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#ex:finite) exhibits a readout complete relative to one relation family and incomplete relative to a larger one. *Relative* completeness is always completeness *with respect to a nominated family*, and this relativity is not a weakness of the framework but its content: it is what allows the question “does the lost distinction matter?” to have a nontrivial answer.

<div class="lemma">

**Lemma 3.2** (Descent lemma).

<div id="lem:descent">

</div>

*Let $p\colon S\to T_1$ be surjective and let $r\colon S\to V$ be any map. The following are equivalent:*

1.  *there exists $\bar r\colon T_1\to V$ with $r=\bar r\circ p$;*

2.  *$r$ is constant on every fiber of $p$: $p(s)=p(s')\Rightarrow r(s)=r(s')$;*

3.  *$\sim_p\;\subseteq\;\sim_r$, where $s\sim_r s'\iff r(s)=r(s')$.*

*Moreover, when these hold, $\bar r$ is unique.*

</div>

<div class="proof">

*Proof.* (1)$\Rightarrow$(2): if $p(s)=p(s')$ then $r(s)=\bar r(p(s))=\bar r(p(s'))=r(s')$. (2)$\Leftrightarrow$(3) is a restatement. (2)$\Rightarrow$(1): given $t\in T_1$, surjectivity of $p$ supplies some $s$ with $p(s)=t$; set $\bar r(t):=r(s)$. Condition (2) says this does not depend on the choice of $s$, so $\bar r$ is well defined, and $r=\bar r\circ p$ by construction. Uniqueness: if $\bar r\circ p=\bar r'\circ p$ then $\bar r=\bar r'$ on $\mathop{\mathrm{Im}}p=T_1$, using surjectivity again. ◻

</div>

Note that surjectivity of $p$ is used twice: once for existence of $\bar r$ on all of $T_1$, once for uniqueness. This is the first of the two hypotheses whose location the following theorem is designed to expose.

<div class="assumption">

**Assumption 3.3** (Separating family).

<div id="ass:separating">

</div>

Throughout this section, $\mathcal R=\{r_\alpha\}_{\alpha\in A}$ *separates the points of $S$*: $$
s\neq s'\quad\Longrightarrow\quad r_\alpha(s)\neq r_\alpha(s')\ \text{for some }\alpha\in A.\tag{9}$$ Equivalently, $R_A$ is injective.

</div>

Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating) is what prevents the next theorem from being a tautology. Without it, “every $r_\alpha$ descends” is a statement about a possibly impoverished family and carries no information about $p$: the empty family descends vacuously through any readout whatsoever. With it, the family is rich enough to detect any source distinction, and descent of all of it becomes equivalent to there being no source distinction to detect. It is satisfiable: $\mathcal R=\{\mathop{\mathrm{id}}_S\}$ separates trivially, and in the geometric setting [(9)](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#eq:separating) is precisely the (nontrivial, and sometimes false) assertion that the nominated invariants classify the orbit space.

<div class="theorem">

**Theorem 3.4** (Source-completeness equivalence).

<div id="thm:completeness">

</div>

*Let $p\colon S\to T_1$ be an exact (hence surjective) readout and let $\mathcal R$ satisfy Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating). Then the following are equivalent.*

1.  *$p$ is injective.*

2.  *Every fiber $p^{-1}(t)$, $t\in T_1$, is a singleton.*

3.  *Every $r_\alpha\in\mathcal R$ descends to $T_1$.*

4.  *The completion projection $u_A\colon E_A\to T_1$ of [(6)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:eAuA) is bijective.*

5.  *$p$ has a two-sided inverse: there is $p^{-1}\colon T_1\to S$ with $p^{-1}\circ p=\mathop{\mathrm{id}}_S$ and $p\circ p^{-1}=\mathop{\mathrm{id}}_{T_1}$.*

</div>

<div class="proof">

*Proof.* **(C1)$\Leftrightarrow$(C2).** A map is injective iff each fiber has at most one point; each fiber of the surjection $p$ has at least one point; so injectivity is exactly the singleton condition. (Surjectivity is used here, to rule out empty fibers.)

**(C1)$\Leftrightarrow$(C5).** If $p$ is injective and surjective it is a bijection, and its set-theoretic inverse is two-sided. Conversely, a map with a left inverse is injective: $p(s)=p(s')\Rightarrow s=p^{-1}p(s)=p^{-1}p(s')=s'$.

**(C1)$\Rightarrow$(C3).** If $p$ is injective then it is bijective, and $\bar r_\alpha:=r_\alpha\circ p^{-1}$ satisfies $\bar r_\alpha\circ p=r_\alpha$. (Equivalently: fibers are singletons, so every function is trivially fiber-constant, and Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) applies.)

**(C3)$\Rightarrow$(C1).** *This is the only implication that uses Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating).* Suppose every $r_\alpha$ descends and let $p(s)=p(s')$. By Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent), $r_\alpha(s)=r_\alpha(s')$ for every $\alpha\in A$. By [(9)](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#eq:separating), contrapositively, $s=s'$. Hence $p$ is injective.

**(C3)$\Rightarrow$(C4).** $u_A$ is surjective by Lemma [2.7](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:completionbasic), so only injectivity is at issue. Let $(t,v),(t,w)\in E_A$ have the same image $t$ under $u_A$. By definition of $E_A$ there are $s,s'\in S$ with $p(s)=p(s')=t$, $R_A(s)=v$, $R_A(s')=w$. Since every $r_\alpha$ descends, it is fiber-constant (Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent)), and $p(s)=p(s')$ forces $r_\alpha(s)=r_\alpha(s')$ for all $\alpha$, i.e. $v=w$. So $u_A$ is injective.

**(C4)$\Rightarrow$(C3).** Suppose $u_A$ is bijective. Then $u_A^{-1}\colon T_1\to E_A$ exists, and we set $$\bar r_\alpha:=\rho_\alpha\circ u_A^{-1}\colon T_1\longrightarrow V_\alpha .$$ For $s\in S$, $u_A^{-1}(p(s))=u_A^{-1}(u_A(e_A(s)))=e_A(s)$, whence $\bar r_\alpha(p(s))=\rho_\alpha(e_A(s))=r_\alpha(s)$ by Lemma [2.7](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#lem:completionbasic). Thus $r_\alpha=\bar r_\alpha\circ p$ descends.

The five statements are therefore equivalent. ◻

</div>

<div class="remark">

*Remark 15* (Where the hypotheses enter).

<div id="rem:hypotheses">

</div>

Surjectivity of $p$ is used in (C1)$\Leftrightarrow$(C2) (nonempty fibers), in (C1)$\Leftrightarrow$(C5) (two-sidedness), and inside Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) (existence and uniqueness of $\bar r$). Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating) is used *only* in (C3)$\Rightarrow$(C1) ,  and it is indispensable there. Drop it and the implication fails at once: take $S=\{s_0,s_1\}$, $T_1=\{t\}$, $\mathcal R=\varnothing$ (or any family of constant maps). Every relation descends vacuously, $E_A\cong T_1$ so $u_A$ is bijective, yet $p$ is not injective. So (C3) and (C4) are strictly weaker than (C1) in general, and the theorem’s content is that the separating hypothesis closes exactly this gap.

</div>

<div class="corollary">

**Corollary 3.6** (Nontrivial completion criterion).

<div id="cor:nontrivialcompletion">

</div>

*Under Assumption [3.3](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#ass:separating), $E_A$ properly refines $T_1$ ,  i.e. $u_A$ is not injective ,  if and only if $p$ is not kinematically source-complete.*

</div>

<div class="proof">

*Proof.* Immediate from (C1)$\Leftrightarrow$(C4) of Theorem [3.4](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#thm:completeness), since $u_A$ is always surjective, so failure of bijectivity is failure of injectivity. ◻

</div>

Theorem [3.4](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#thm:completeness) thus supplies five interchangeable diagnostic sites for source incompleteness: noninjectivity, nontrivial fibers, failure of relation descent, nontrivial completion, and absence of an inverse. A physical model may find it convenient to test any one of them.
