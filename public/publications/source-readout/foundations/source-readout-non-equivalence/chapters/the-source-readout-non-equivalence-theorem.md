# The source–readout non-equivalence theorem

<div id="sec:combined">

</div>

The threads can now be drawn together.

<div class="theorem">

**Theorem 10.1** (Source–readout non-equivalence).

<div id="thm:combined">

</div>

*Let $\Omega$ be a realization space with declared physical equivalence $\simeq_{\mathrm{phys}}$, let $S=\Omega/\!\simeq_{\mathrm{phys}}$ be the reduced source space, and let $p\colon S\to T$ be the induced surjective readout, as in [Section 2](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#sec:setup). Suppose at least one of the following holds.*

1.  <div id="it:D">

    </div>

    **(Descent obstruction.)* There is a physically meaningful source relation $r\colon S\to V$ and a pair $s_{0},s_{1}\in S$ with $$p(s_{0})=p(s_{1}),
    \qquad
    r(s_{0})\neq r(s_{1}).$$*

2.  <div id="it:E">

    </div>

    **(Equivariant obstruction.)* A group $G$ acts on $S$ and on $T$, the map $p$ is equivariant, and some $t\in T$ satisfies $$\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})=\varnothing.$$*

*Then $p$ is not injective, so $T\not\simeq_{\mathrm{source}}S$ in the sense of [Definition 3.3](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#def:sourceequiv). More precisely:*

1.  *under <span class="upright">(D)</span>, the relation $r$ does not descend to $T$, and hence $T$ is not source-complete for $r$;*

2.  *under <span class="upright">(E)</span>, no $G$-equivariant section $T\to S$ exists;*

3.  *in either case, $T\cong S/\!\sim_{p}$ continues to hold exactly.*

</div>

<div class="proof">

*Proof.* Assume (D). [Corollary 4.3](/source-readout/source-readout-non-equivalence/descent-of-source-relations#cor:descentobstruction) applied to $s_{0},s_{1}$ shows that $r$ does not descend, giving conclusion (1). Moreover $r(s_{0})\neq r(s_{1})$ forces $s_{0}\neq s_{1}$, while $p(s_{0})=p(s_{1})$; hence $p$ identifies two distinct points of $S$ and is not injective.

Assume (E). [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector) excludes a $G$-equivariant section, giving conclusion (2). For noninjectivity, observe that $F_{t}$ cannot be a singleton: if $F_{t}=\{s\}$, then by [(18)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fibertransport) every $g\in G_{t}$ maps $F_{t}$ into $F_{g \cdot t} = F_{t}=\{s\}$, forcing $g\cdot s=s$ for every $g\in G_{t}$ and hence $s\in\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$, contradicting the hypothesis that this set is empty. So $|F_{t}|\geq 2$, and $p$ is not injective by [Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq).

Conclusion (3) is [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient), whose proof uses nothing beyond surjectivity of $p$ and the definition [(7)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:readouteq) of $\sim_{p}$, and is therefore unaffected by either hypothesis. ◻

</div>

[Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined) claims exactly what its hypotheses support, and it is worth being explicit about the division of labor among them, because each part is doing work that none of the others can do.

The declaration of $\simeq_{\mathrm{phys}}$ determines which source distinctions are genuine. Without it there is no fact of the matter about whether a fiber contains physically distinct states or merely redundant descriptions of one state, and [Remark 7.4](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#rem:boundary) shows that the two possibilities give opposite verdicts on identical mathematics.

Hypothesis (D) determines which relations fail to descend. Coarseness of the readout alone does not identify anything as lost; a nominated relation $r$, varying within a fiber, does.

Hypothesis (E) determines whether a symmetry-compatible representative can be selected at all. Coarseness alone does not exclude a section, and neither does noninjectivity; symmetry ,  or, in the topological setting of [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop), characteristic-class data ,  does. Note what (E) does and does not deliver in the negative and positive cases respectively: its failure excludes every selector in the equivariant class, while its success certifies only that some equivariant selector exists, not that one is uniquely determined or canonical ([Remark 6.5](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#rem:notcanonical)).

Conclusion (3) records what survives, and only that. The readout remains an exact, error-free presentation of the quotient $S/\!\sim_{p}$: a bijection of sets, permitting transport of any structure already well defined on $\sim_{p}$-classes. Whether the readout level is additionally lawful, self-consistent, or dynamically closed is not settled by conclusion (3) and would require separate descent or closure arguments. What is settled is that exactness of the presentation is compatible with, and says nothing against, the non-equivalence established by (1) and (2).

Finally, a boundary that the theorem does not cross. [Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined) is a theorem about a given $\Omega$, $\simeq_{\mathrm{phys}}$, $p$, and (under (D) or (E)) a given $r$ or $G$. It establishes non-equivalence *relative to* that identified lost relation or that reconstruction class. It does not establish, and cannot be used to establish, that any actual physical system possesses a source layer richer than its observed description; that would require producing the ingredients, not merely the theorem. Noninjectivity of a map is not by itself evidence of a physically real upstream source, and no abstract obstruction licenses an unrestricted ontological conclusion.
