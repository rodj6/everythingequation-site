# Active and inactive information loss

<div id="sec:active">

</div>

We now sharpen the picture. [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction) tells us that fiber variation of $a_Q$ obstructs. But in practice one usually knows something more specific: one knows *which* source-level structure the readout has forgotten, and one wants to know whether *that particular* forgotten structure is what the target depends on. This is the distinction between information that is merely lost and information whose loss has consequences.

<div class="definition">

**Definition 4.1** (Source relation and its target factorization).

<div id="def:relation">

</div>

Let $r\colon S\to V$ be a map, called a *source relation*, thought of as recording some physically meaningful attribute of the reduced source state that the readout does not itself determine. We say that $Q$ *factors through* $(p,r)$ if there exists a map $$
\Phi_Q\colon T\times V\longrightarrow A_Q
\qquad\text{such that}\qquad
a_Q(s)=\Phi_Q\bigl(p(s),r(s)\bigr)\quad\text{for all }s\in S.\tag{7}$$

</div>

Equation [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ) says that the readout value together with the relation value suffices to determine the correct answer. It is a modeling hypothesis about how much of the source the target actually consults; the interesting content lies in what one may then conclude.

<div class="definition">

**Definition 4.2** (Activity and inactivity on a fiber).

<div id="def:active">

</div>

Assume [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ), and let $t\in T$. The relation $r$ is *active for $Q$ on the fiber $F_t$* if there exist $s_0,s_1\in F_t$ with $$
\Phi_Q\bigl(t,r(s_0)\bigr)\neq\Phi_Q\bigl(t,r(s_1)\bigr).\tag{8}$$ It is *inactive for $Q$ on $F_t$* if no such pair exists, i.e. if the map $\Phi_Q(t,\cdot)$ is constant on the *realized set* $$
r(F_t)=\{\, r(s) : s\in F_t \,\}\subseteq V .\tag{9}$$ We say $r$ is *globally inactive for $Q$* if it is inactive on every fiber.

</div>

Two features of [Definition 4.2](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#def:active) carry the weight of the section, and both are easy to get wrong.

First, inactivity is a statement about the *realized target values*, not about $r$. The relation $r$ may vary wildly across $F_t$ ,  $r(F_t)$ may be an enormous subset of $V$ ,  and $r$ may still be inactive for $Q$ on $F_t$, provided $\Phi_Q(t,\cdot)$ happens to be constant on that subset. The readout has then forgotten a great deal, and none of it matters for $Q$. This is the normal situation in effective descriptions and is not a pathology.

Second, activity is evaluated on the realized set $r(F_t)$, not on all of $V$. That $\Phi_Q(t,\cdot)$ is nonconstant somewhere on $V$ is irrelevant if the source states in $F_t$ never realize the values at which it varies. The obstruction concerns configurations that actually occur in the fiber.

<div class="theorem">

**Theorem 4.3** (Active loss obstructs).

<div id="thm:active-obstructs">

</div>

*Assume [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ). If $r$ is active for $Q$ on some fiber $F_{t}$, then $Q$ is not exactly solvable from the readout $p$.*

</div>

<div class="proof">

*Proof.* Let $s_0,s_1\in F_{t}$ realize [(8)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:active). Since $s_0,s_1\in F_{t}$ we have $p(s_0)=t=p(s_1)$. By [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ), $$a_Q(s_0)=\Phi_Q\bigl(p(s_0),r(s_0)\bigr)=\Phi_Q\bigl(t,r(s_0)\bigr)
\neq
\Phi_Q\bigl(t,r(s_1)\bigr)=\Phi_Q\bigl(p(s_1),r(s_1)\bigr)=a_Q(s_1).$$ Thus $s_0,s_1$ satisfy the hypothesis [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp) of [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction), and $Q$ is not exactly solvable from $p$. Indeed no map $b\colon T\to A_Q$ is correct at both. ◻

</div>

<div class="theorem">

**Theorem 4.4** (Inactive loss does not obstruct).

<div id="thm:inactive-preserves">

</div>

*Assume [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ). If $r$ is globally inactive for $Q$ ,  that is, if for every $t\in T$ the map $\Phi_Q(t,\cdot)$ is constant on the realized set $r(F_t)$ ,  then $Q$ *is* exactly solvable from the readout $p$. The unique readout-only solution is $$
\bar a_Q(t)=\Phi_Q\bigl(t,v_t\bigr)
\qquad\text{for any } v_t\in r(F_t).\tag{10}$$*

</div>

<div class="proof">

*Proof.* We verify condition [(2)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:fibconst) of [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability). Fix $t\in T$ and let $s,s'\in F_t$. Then $r(s),r(s')\in r(F_t)$, and by global inactivity $\Phi_Q(t,\cdot)$ is constant on $r(F_t)$; hence $\Phi_Q(t,r(s))=\Phi_Q(t,r(s'))$. Using [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ) and $p(s)=p(s')=t$, $$a_Q(s)=\Phi_Q\bigl(t,r(s)\bigr)=\Phi_Q\bigl(t,r(s')\bigr)=a_Q(s').$$ So $a_Q$ is constant on $F_t$, for every $t$. By [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability), $Q$ is exactly solvable and the unique solution satisfies $\bar a_Q(t)=a_Q(s)$ for any $s\in F_t$; since $F_t\neq\emptyset$ we may pick such an $s$ and set $v_t:=r(s)\in r(F_t)$, giving [(10)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:inactive-solution). The right-hand side of [(10)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:inactive-solution) is independent of the choice of $v_t\in r(F_t)$, again by constancy of $\Phi_Q(t,\cdot)$ on $r(F_t)$. ◻

</div>

<div class="definition">

**Definition 4.5** (Structural versus consequential loss).

<div id="def:loss-types">

</div>

Let $r\colon S\to V$ be a source relation that does not factor through $p$; that is, $r$ is not constant on some fiber. We call this *structural information loss*: the readout genuinely fails to determine $r$. If in addition $r$ is active for a target $Q$ on some fiber, we call the loss *consequential for $Q$*, or *target-active*.

</div>

[Theorem 4.3](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#thm:active-obstructs), [Theorem 4.4](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#thm:inactive-preserves) should be read with their standing hypothesis kept in view. Both presuppose that the nominated variable $r$ *mediates* the target, in the precise sense of [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ): $a_Q(s)=\Phi_Q(p(s),r(s))$. Relative to such an $r$, the two theorems say that activity of $r$ is exactly the condition under which the loss of $r$ obstructs $Q$ ,  active loss obstructs, and globally inactive loss does not. This is a statement about the chosen mediating variable, not about information loss in the abstract, and it is only as sharp as the choice of $r$.

The fully general criterion, carrying no such hypothesis, is the one already established in [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability), [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction): $Q$ is obstructed from the readout precisely when $a_Q$ is nonconstant on some fiber of $p$. Every statement about activity is a refinement of that criterion, obtained by localizing the fiber variation onto a particular mediating variable, and it adds diagnostic content ,  *which* forgotten structure is responsible ,  rather than logical strength.

With that scoping in place, the moral stands. Structural loss without activity is invisible to $Q$; it is what makes coarse descriptions viable rather than defective. It is therefore *not* a theorem of this framework ,  and we do not assert ,  that every noninjective readout requires completion, nor that every lost source distinction must be restored. Whether a given loss must be repaired is a question one can only answer after nominating a target, and the answer may legitimately be no. The examples of [Section 9](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#sec:flat), [Section 10](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#sec:spectrum), [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) include both verdicts for the same readout.

<div class="remark">

**Remark 4.6**.

<div id="rem:activity-vs-descent">

</div>

It is worth recording the logical relation between activity of $r$ and descent of $r$. If $r$ itself descends along $p$ (is fiber-constant), then $r(F_t)$ is a singleton for each $t$ and $r$ is automatically inactive for every target that factors through $(p,r)$; the loss is not merely inconsequential but nonexistent. The converse fails: $r$ can vary on fibers ,  structural loss ,  while being inactive for $Q$. So activity implies structural loss, but structural loss does not imply activity, and it is precisely this asymmetry that forbids the inference from “noninjective” to “must be completed.”

</div>
