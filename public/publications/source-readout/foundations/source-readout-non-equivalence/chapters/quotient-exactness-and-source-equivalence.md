# Quotient exactness and source equivalence

<div id="sec:exact">

</div>

The first two results are elementary, and stating them explicitly is the point: they are what separates a correct claim about exactness from an incorrect claim about equivalence.

<div class="proposition">

**Proposition 3.1** (Exact quotient presentation).

<div id="prop:exactquotient">

</div>

*The map $$
\widehat{p}\colon S/\!\sim_{p}\;\longrightarrow\;T,
\qquad
\widehat{p}\bigl([s]_{p}\bigr)=p(s),\tag{8}$$ is a well-defined bijection. Hence $$
T\;\cong\;S/\!\sim_{p}.\tag{9}$$*

</div>

<div class="proof">

*Proof.* Well-definedness: if $[s]_{p}=[s']_{p}$ then $s\sim_{p}s'$, so $p(s)=p(s')$ by [(7)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:readouteq), and the prescription [(8)](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#eq:phat) does not depend on the chosen representative.

Surjectivity: given $t\in T$, the convention [(3)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:surjconv) supplies $s\in S$ with $p(s)=t$, whence $\widehat{p}([s]_{p})=t$.

Injectivity: if $\widehat{p}([s]_{p})=\widehat{p}([s']_{p})$ then $p(s)=p(s')$, so $s\sim_{p}s'$ by [(7)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:readouteq), and therefore $[s]_{p}=[s']_{p}$. ◻

</div>

[Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient) says exactly what exactness of a quotient presentation means, and no more: the readout labels the readout-equivalence classes of $S$ without error and without omission. Every $\sim_{p}$-class has exactly one label, and every label names exactly one class.

It is worth being precise about the scope of this, because it is easy to ask it to do more work than it can. [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient) produces a *bijection of sets* and nothing further. What it licenses is transport: any structure that is *already well defined on the quotient* $S/\!\sim_{p}$ ,  that is, any structure whose defining data is constant on $\sim_{p}$-classes ,  can be carried across $\widehat p$ to $T$ without loss. What it does not license is the assumption that some nominated structure on $S$ is of that kind. Whether a given relation, law, or evolution is well defined on the quotient is precisely the descent question of [Section 4](/source-readout/source-readout-non-equivalence/descent-of-source-relations#sec:descent), and it must be settled by [Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent) or its analogue, not by [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient).

In particular, [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient) does *not* establish that the readout level is lawful, internally consistent as a dynamical theory, or dynamically closed. It establishes none of these, and asserting them requires independent descent or closure results for the specific laws and evolutions at issue. The readout level may well be lawful and dynamically coherent ,  nothing here argues otherwise ,  but that would be a separate theorem with separate hypotheses. Whether projected dynamics descends, and under what conditions closure fails, are questions this paper deliberately leaves open and does not prejudge.

What [(9)](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#eq:exactquotient) also does not say is that the classes it labels are singletons. Exactness is a statement about the relationship between $T$ and $S/\!\sim_{p}$; source equivalence would be a statement about the relationship between $T$ and $S$. Conflating them amounts to assuming that $S/\!\sim_{p}$ and $S$ are the same object, which is precisely the question at issue.

<div class="proposition">

**Proposition 3.2** (Criterion for source equivalence).

<div id="prop:sourceeq">

</div>

*The induced readout $p\colon S\to T$ is bijective if and only if every reduced source fiber $F_{t}$, $t\in T$, is a singleton.*

</div>

<div class="proof">

*Proof.* Surjectivity holds by the convention [(3)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:surjconv), so bijectivity is equivalent to injectivity. Now $p$ is injective if and only if $p(s)=p(s')$ implies $s=s'$, that is, if and only if no fiber contains two distinct points. Since every fiber is nonempty by surjectivity, this is equivalent to every fiber being a singleton. ◻

</div>

Combining the two propositions: a single fiber with more than one point already suffices to make exact quotient presentation and source equivalence come apart. [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient) continues to hold verbatim, while [Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq) fails. What remains to be determined ,  and what occupies the rest of the paper ,  is *what* is lost across a nontrivial fiber, and under what admissibility conditions it can or cannot be restored.

We record the terminology to be used for the strongest of the three notions.

<div class="definition">

**Definition 3.3** (Source equivalence).

<div id="def:sourceequiv">

</div>

We say that the readout is *source-equivalent* to the reduced source, and write $T\simeq_{\mathrm{source}}S$, when $p$ is a bijection. When $p$ is not a bijection we write $T\not\simeq_{\mathrm{source}}S$.

</div>

The notation is deliberately distinguished from the isomorphism symbol in [(9)](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#eq:exactquotient), which is a bijection of $T$ with a quotient of $S$, and from $\simeq_{\mathrm{phys}}$, which is a relation on $\Omega$. It is also, at this stage, a purely set-theoretic notion; [Section 5](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#sec:selection), [Section 6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#sec:equivariant), [Section 9](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#sec:hopf) will show that stronger admissibility conditions on reconstruction yield strictly stronger obstructions, and that a map may fail to be reconstructible in one of those senses while succeeding in another.
