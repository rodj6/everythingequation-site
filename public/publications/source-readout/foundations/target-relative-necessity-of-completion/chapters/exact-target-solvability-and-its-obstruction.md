# Exact target solvability and its obstruction

<div id="sec:exact">

</div>

## The criterion

<div class="theorem">

**Theorem 3.1** (Exact target-solvability criterion).

<div id="thm:exact-solvability">

</div>

*Let $p\colon S\to T$ be a readout and let $Q=(A_Q,a_Q)$ be a target on $S$. The following are equivalent.*

1.  <div id="it:solv">

    </div>

    *$Q$ is exactly solvable from the readout; that is, there is $\bar a_Q\colon T\to A_Q$ with $a_Q=\bar a_Q\circ p$.*

2.  <div id="it:fibconst">

    </div>

    *$a_Q$ is constant on every fiber of $p$: for all $t\in T$ and all $s,s'\in F_t$, $a_Q(s)=a_Q(s')$.*

3.  <div id="it:imp">

    </div>

    *For all $s,s'\in S$, $\;p(s)=p(s') \implies a_Q(s)=a_Q(s')$.*

*Moreover, when these hold, $\bar a_Q$ is unique.*

</div>

<div class="proof">

*Proof.* Conditions [(2)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:fibconst) and [(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp) are restatements of one another: $s,s'$ lie in a common fiber precisely when $p(s)=p(s')$.

[(1)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:solv)$\Rightarrow$[(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp). Suppose $a_Q=\bar a_Q\circ p$ and $p(s)=p(s')$. Applying $\bar a_Q$ to both sides of $p(s)=p(s')$ gives $a_Q(s)=\bar a_Q(p(s))=\bar a_Q(p(s'))=a_Q(s')$.

[(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp)$\Rightarrow$[(1)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:solv). We construct $\bar a_Q$. Let $t\in T$. Since $p$ is surjective, $F_t\neq\emptyset$; choose $s\in F_t$ and set $$
\bar a_Q(t) := a_Q(s).\tag{5}$$ This is independent of the choice of $s$: if $s'\in F_t$ is another element, then $p(s)=t=p(s')$, so by [(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp) $a_Q(s)=a_Q(s')$. Hence $\bar a_Q\colon T\to A_Q$ is a well-defined map. (That some element may be chosen from each nonempty fiber is all that is used; no choice principle beyond the definition of a well-defined value is required, since the value assigned is independent of the representative.) Now for any $s\in S$, put $t=p(s)$; then $s\in F_t$, and by [(5)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:barconstruct) together with representative-independence, $\bar a_Q(p(s))=a_Q(s)$. Thus $a_Q=\bar a_Q\circ p$.

Uniqueness. Suppose $\bar a_Q$ and $\bar a_Q'$ both satisfy [(4)](/source-readout/target-relative-necessity-of-completion/reduced-source-readout-and-target#eq:solvable). Let $t\in T$ and choose $s\in F_t$, possible by surjectivity. Then $\bar a_Q(t)=\bar a_Q(p(s))=a_Q(s)=\bar a_Q'(p(s))=\bar a_Q'(t)$. As $t$ was arbitrary, $\bar a_Q=\bar a_Q'$. ◻

</div>

[Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) is the fiber–descent theorem of \[[8](/source-readout/target-relative-necessity-of-completion/references#bib-ShadowI)\] specialized to the correct-answer map, and we have given the argument in full so that the present paper stands on its own. What is new here is not the criterion but the object it is applied to: by taking the descending map to be the *answer* to a nominated question rather than an arbitrary source relation, the criterion becomes a statement about the adequacy of the readout *for that question*, and hence acquires the target-relativity that the rest of the paper develops.

## The obstruction

<div class="corollary">

**Corollary 3.2** (Exact target obstruction).

<div id="cor:obstruction">

</div>

*Suppose there exist $s_0,s_1\in S$ with $$
p(s_0)=p(s_1)
\qquad\text{and}\qquad
a_Q(s_0)\neq a_Q(s_1).\tag{6}$$ Then $Q$ is not exactly solvable from the readout. Explicitly, for every map $b\colon T\to A_Q$ there exists $i\in\{0,1\}$ with $b(p(s_i))\neq a_Q(s_i)$: no deterministic readout-only construction is correct at both $s_0$ and $s_1$.*

</div>

<div class="proof">

*Proof.* Let $b\colon T\to A_Q$ be arbitrary and write $t:=p(s_0)=p(s_1)$. The value $b(t)\in A_Q$ is a single element. If $b(t)=a_Q(s_0)$ then, since $a_Q(s_1)\neq a_Q(s_0)$, we get $b(p(s_1))=b(t)=a_Q(s_0)\neq a_Q(s_1)$, so $b$ errs at $s_1$. If instead $b(t)\neq a_Q(s_0)$ then $b(p(s_0))\neq a_Q(s_0)$ and $b$ errs at $s_0$. In either case $b$ fails at one of the two states. Since $b$ was arbitrary, no map $T\to A_Q$ satisfies $a_Q=b\circ p$, which is the negation of [Definition 2.3](/source-readout/target-relative-necessity-of-completion/reduced-source-readout-and-target#def:solvable); this also follows from [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) [(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp), whose hypothesis is contradicted by [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp). ◻

</div>

The structure of this argument deserves emphasis, because it is the pattern on which all the necessity results of this paper are built, and because it is easy to counterfeit. We did not assume that no readout-only construction exists and then declare completion necessary. We assumed only [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp) ,  a fact about the pair $(p,a_Q)$, checkable in examples, and verified concretely in [Section 10](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#sec:spectrum) ,  and then *derived* the failure of every candidate $b$ by a counting argument: $b(t)$ is one element of $A_Q$, while correctness at $s_0$ and $s_1$ demands two different elements. Impossibility follows from variation of the correct-answer map along a fiber, not from a stipulation of impossibility.

<div class="proposition">

**Proposition 3.3** (Every readout-only construction is fiber-constant).

<div id="prop:fiberconst-form">

</div>

*Let $X$ be any set and let $g\colon S\to X$ be a map that *factors through the readout*, i.e. $g=h\circ p$ for some $h\colon T\to X$. Then $g$ is constant on every fiber of $p$. Conversely, every map $S\to X$ constant on all fibers of $p$ factors through $p$, uniquely.*

</div>

<div class="proof">

*Proof.* If $g=h\circ p$ and $s,s'\in F_t$, then $g(s)=h(t)=g(s')$. The converse and the uniqueness are [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) applied with $A_Q$ replaced by $X$ and $a_Q$ by $g$. ◻

</div>

<div class="proposition">

**Proposition 3.4** (Auxiliary readout-computed variables cannot repair the obstruction).

<div id="prop:auxiliary-useless">

</div>

*Assume [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp). Let $W$ be any set and let $w\colon S\to W$ be an auxiliary quantity that is *computed from the readout alone*, meaning $w=\omega\circ p$ for some $\omega\colon T\to W$. Then for every map $$c\colon T\times W\longrightarrow A_Q,$$ the induced construction $s\mapsto c(p(s),w(s))$ fails to equal $a_Q$ at $s_0$ or at $s_1$.*

</div>

<div class="proof">

*Proof.* Define $b\colon T\to A_Q$ by $b(t):=c(t,\omega(t))$. Then for every $s\in S$, $$c\bigl(p(s),w(s)\bigr)=c\bigl(p(s),\omega(p(s))\bigr)=b(p(s)),$$ so the construction $s\mapsto c(p(s),w(s))$ is exactly $b\circ p$ and hence, by [Proposition 3.3](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#prop:fiberconst-form), constant on fibers. By [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction) it errs at $s_0$ or at $s_1$. ◻

</div>

[Proposition 3.4](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#prop:auxiliary-useless) closes an escape route that is attempted surprisingly often. One cannot evade a fiber-variation obstruction by manufacturing additional quantities out of the readout ,  derived fields, filtered or smoothed versions of $t$, spectral transforms of $t$, statistics of $t$, or any other post-processing. Whatever is computed from $t$ is a function of $t$; composing functions of $t$ leaves one with a function of $t$; and a function of $t$ is constant on $F_t$ while $a_Q$ is not. Genuine repair must inject information that is *not* a function of the readout. That is what [Section 6](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#sec:extensions) formalizes.
