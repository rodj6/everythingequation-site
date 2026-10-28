# Discussion

<div id="sec:discussion">

</div>

## The levels of obstruction

It may be useful to set the distinct notions side by side, since the burden of the paper is to keep them apart.

*Exact quotient presentation* ([Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient)) always holds. It asserts a bijection between $T$ and $S/\!\sim_{p}$, permits transport of structures already well defined on $\sim_{p}$-classes, and asserts nothing about the size of the classes, nothing about which nominated structures descend, and nothing about lawfulness or dynamical closure at the readout level. It is compatible with total loss of source structure.

*Source equivalence* ([Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq), [Definition 3.3](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#def:sourceequiv)) holds exactly when the fibers are singletons. It is the strongest of the notions and is the one at issue.

*Descent of a relation* ([Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent)) is a property of a nominated relation $r$, not of $p$ alone. It holds exactly when $r$ is fiber-constant. Its failure identifies a specific lost quantity. It is a statement about *functions on the source*, not about source states.

*Existence of a section* ([Definition 5.1](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#def:section)) is nearly vacuous without admissibility conditions, and is never equivalent to inversion unless $p$ is bijective ([Proposition 5.2](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#prop:selection)). It is a statement about *representative conventions*, not about recovery.

*Existence of an equivariant section* ([Theorem 6.3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#thm:equivsection)) holds exactly when every stabilizer fixes a point of its fiber, the constructive direction requiring choice for both the orbit family and the family of fixed sets. Its failure is a genuine symmetry obstruction and is choice-free to prove. Its success is existence only: not uniqueness, and not canonicity ([Remark 6.5](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#rem:notcanonical)). The obstruction is moreover relative to the imposition of equivariance as an admissibility requirement. A non-equivariant selector is not thereby unlawful, and it is formally a map $T\to S$ like any other; what it is not is determined by the readout together with the declared $G$-symmetric structure alone, since its choice encodes an additional convention or symmetry-breaking ingredient.

*Existence of a continuous section* is a topological question, governed in the principal-bundle case by characteristic classes ([Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop)), and is logically independent of the equivariant question ([Remark 9.5](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#rem:hopfindep)).

Between the second and the last of these lies a range of intermediate requirements ,  smoothness, measurability, locality, covariance ,  each of which defines its own notion of admissible reconstruction and its own obstruction theory. Nothing in this paper collapses them, and a claim of “no reconstruction” is meaningless until the class is named.

## What the theorems do not say

Several inferences are tempting and unsupported, and it is worth stating them plainly as non-consequences.

Noninjectivity does not by itself exclude a section: many-to-one maps routinely admit continuous, smooth, measurable, and even equivariant sections. Only the specific hypotheses of [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector) or [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) exclude them.

A section does not constitute an inverse. This is [Proposition 5.2](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#prop:selection), and it is the point at which “we can always pick a representative” fails to become “we can always recover the state”.

An invariant probability distribution over a fiber does not constitute recovery of the realized source state. This is the burden of [Section 8](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#sec:probabilistic). Ensembles and realizations are different objects with different information content.

Gauge redundancy is not lost structure. If a fiber consists of gauge-equivalent descriptions, then it should have been collapsed by $\simeq_{\mathrm{phys}}$ before the analysis began, and the obstruction it appears to exhibit is an artifact. [Remark 7.4](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#rem:boundary) exhibits both readings of a single piece of mathematics.

Bundle nontriviality is not evidence of a physically richer source. A nonzero characteristic class obstructs continuous sections whether the fiber is physically meaningful or pure gauge, and [Remark 9.6](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#rem:hopfgauge) exhibits both readings of the same bundle. Topology cannot be substituted for the physical declaration.

Quotient exactness is not dynamical closure. [Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient) is a bijection of sets. That the readout level supports a closed dynamics, if true, is a separate theorem requiring its own descent hypotheses.

An abstract obstruction is not a physical ontology. The theorems establish what fails to descend and what cannot be selected, given hypotheses. They do not establish that the hypotheses hold of the world.

## Position within the wider program

The results here supply a foundation on which further questions can be posed precisely, and it is worth naming them, though nothing in this paper depends on their answers and this paper is complete without them.

[Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent) makes it meaningful to ask which non-descending relations obstruct a specified mathematical or physical target, and what the resulting failure looks like. Given a family of such relations, one may ask for the coarsest extension of the readout on which they all do descend ,  a completion problem, whose input is exactly the fiber-constancy criterion established here. One may then ask whether such completions admit geometric or field-theoretic realizations, in what sense the resulting observable quotient supports a projected dynamics, and under what conditions the source is identifiable from readout data with additional structure. Each of these questions presupposes the distinctions drawn above: without them, “completion” and “identifiability” have no determinate meaning.
