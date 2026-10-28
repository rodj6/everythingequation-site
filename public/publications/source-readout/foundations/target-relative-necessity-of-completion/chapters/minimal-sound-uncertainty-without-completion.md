# Minimal sound uncertainty without completion

<div id="sec:uncertainty">

</div>

Suppose the obstruction is real: $a_Q$ genuinely varies on some fiber, so no readout-only construction returns the correct answer everywhere. It does not follow that the readout is useless for $Q$. It follows that the readout cannot deliver a *single* answer, and the honest question becomes: what is the most that the readout does license? The answer is a set-valued rule, and there is a canonical least one.

<div class="definition">

**Definition 5.1** (Compatible-answer set).

<div id="def:compat">

</div>

For $t\in T$, the *compatible-answer set* at $t$ is the image of the fiber under the correct-answer map, $$
\mathsf{A}_Q(t):=a_Q(F_t)=\{\, a_Q(s) : s\in S,\ p(s)=t \,\}\subseteq A_Q .\tag{11}$$ Since $p$ is surjective, $F_t\neq\emptyset$ and hence $\mathsf{A}_Q(t)\neq\emptyset$.

</div>

<div class="definition">

**Definition 5.2** (Set-valued rules and uniform soundness).

<div id="def:sound">

</div>

Let $\mathfrak{P}(A_Q)$ denote the *power set* of $A_Q$, i.e. the collection of all subsets of $A_Q$. A *set-valued rule* for $Q$ is a map $$
C\colon T\longrightarrow\mathfrak{P}(A_Q).\tag{12}$$ The rule $C$ is *uniformly sound* if it never excludes the truth: $$
a_Q(s)\in C\bigl(p(s)\bigr)\qquad\text{for every } s\in S.\tag{13}$$

</div>

<div class="remark">

**Remark 5.3** ($\mathfrak{P}$ is the power set, not a space of probability measures).

<div id="rem:powerset">

</div>

We use the deliberately distinct symbol $\mathfrak{P}(A_Q)$ to forestall a conflation that would destroy the meaning of the results in this section. A set-valued rule assigns to each readout value a *subset* of admissible answers. It does not assign a probability distribution, a measure, a density, or a credence. Nothing in [Definition 5.2](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#def:sound) presupposes a $\sigma$-algebra on $A_Q$, a measure on $S$, or a prior on the fibers, and no such structure is introduced anywhere in this paper. See [Remark 5.6](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#rem:not-probability) below for why this distinction is substantive and not merely notational.

</div>

<div class="theorem">

**Theorem 5.4** (The compatible-answer set is the least uniformly sound rule).

<div id="thm:minimal-sound">

</div>

*Define $C_{\min}\colon T\to\mathfrak{P}(A_Q)$ by $C_{\min}(t):=\mathsf{A}_Q(t)=a_Q(F_t)$. Then:*

1.  <div id="it:cmin-sound">

    </div>

    *$C_{\min}$ is uniformly sound;*

2.  <div id="it:cmin-least">

    </div>

    *for every uniformly sound rule $C\colon T\to\mathfrak{P}(A_Q)$ and every $t\in T$, $$
    C_{\min}(t)\subseteq C(t).\tag{14}$$*

*Consequently $C_{\min}$ is the unique pointwise-least uniformly sound set-valued rule for $Q$ given the readout $p$.*

</div>

<div class="proof">

*Proof.* [(1)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#it:cmin-sound) Let $s\in S$ and put $t:=p(s)$. Then $s\in F_t$, so $a_Q(s)\in a_Q(F_t)=C_{\min}(t)=C_{\min}(p(s))$. This is exactly [(13)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#eq:soundness).

[(2)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#it:cmin-least) Let $C$ be uniformly sound and fix $t\in T$. Let $\alpha\in C_{\min}(t)=a_Q(F_t)$ be arbitrary. By definition of the image there exists $s\in F_t$ with $a_Q(s)=\alpha$. Since $s\in F_t$ we have $p(s)=t$, and uniform soundness [(13)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#eq:soundness) applied to this $s$ gives $$\alpha=a_Q(s)\in C\bigl(p(s)\bigr)=C(t).$$ As $\alpha\in C_{\min}(t)$ was arbitrary, $C_{\min}(t)\subseteq C(t)$.

Uniqueness of the least element: if $C$ and $C'$ are both uniformly sound and both pointwise least, then $C(t)\subseteq C'(t)$ and $C'(t)\subseteq C(t)$ for every $t$, so $C=C'$. Since $C_{\min}$ is uniformly sound by [(1)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#it:cmin-sound) and pointwise least by [(2)](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#it:cmin-least), it is the unique such rule. ◻

</div>

<div class="corollary">

**Corollary 5.5** (Exactness as singleton-valuedness).

<div id="cor:singleton">

</div>

*$Q$ is exactly solvable from the readout $p$ if and only if $\mathsf{A}_Q(t)$ is a singleton for every $t\in T$. In that case the unique readout-only solution $\bar a_Q$ is characterized by $\{\bar a_Q(t)\}=\mathsf{A}_Q(t)$.*

</div>

<div class="proof">

*Proof.* $\mathsf{A}_Q(t)=a_Q(F_t)$ is a singleton for every $t$ iff $a_Q$ is constant on every fiber $F_t$ (nonemptiness of $F_t$ gives that the image is nonempty, so “singleton” is equivalent to “at most one element”), which by [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) is equivalent to exact solvability. If exact solvability holds, then for $s\in F_t$ we have $a_Q(F_t)=\{a_Q(s)\}=\{\bar a_Q(p(s))\}=\{\bar a_Q(t)\}$. ◻

</div>

<div class="remark">

**Remark 5.6** (Set-valued uncertainty is not probability, and probability is not recovery).

<div id="rem:not-probability">

</div>

$\mathsf{A}_Q(t)$ is the exact residual uncertainty that the readout partition induces about the answer to $Q$ ,  and it exists prior to, and independently of, any probabilistic structure. Two consequences must be kept apart.

First, imposing a probability law on $S$, or on the fibers, changes the object under discussion but does not shrink $\mathsf{A}_Q(t)$. A distribution on $A_Q$ can *rank* the compatible answers, declaring some more likely than others. It cannot make two distinct correct answers into one answer, and it cannot identify which source state was in fact realized. We are careful about how to phrase the constraint this places on the distribution. We do not claim that an arbitrary probability law must assign positive mass to every element of $\mathsf{A}_Q(t)$; a law is free to assign mass zero wherever it likes, and no full-support condition has been imposed here. What is true is conditional: *a probabilistic representation intended not to exclude any source-compatible outcome must have support containing $\mathsf{A}_Q(t)$*. Under that stipulation ,  and it is a stipulation, not a theorem ,  the support still contains both $a_Q(s_0)$ and $a_Q(s_1)$ whenever $a_Q(s_0)\neq a_Q(s_1)$ and $p(s_0)=p(s_1)$, so the rule has not told us which of $s_0,s_1$ obtained, and [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction) still forbids a correct deterministic answer.

Second, and consequently, a probabilistic prediction answers a *different target*. Replacing $Q$ by the target “what is the distribution of answers, given $t$ and given a specified law on the fibers?” is a legitimate move, but it is a change of question, and it is one that requires additional input ,  namely the law on the fibers, which is a piece of source-level information not contained in $p$. It is not a solution to the original $Q$, and it should not be reported as one. We return to this point in the dynamical setting in [Remark 12.11](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#rem:stochastic).

</div>
