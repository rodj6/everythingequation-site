# Reduced source, readout, and target

<div id="sec:setup">

</div>

## The reduced source space

Throughout, $S$ denotes a *reduced* source space. By this we mean the space obtained from whatever raw description one began with *after* quotienting by every redundancy that has been declared physically inert: local gauge transformations, coordinate reparametrizations, relabelings of identical constituents, and any further identification that the modeling commitments of the problem require. The point of insisting on this is not fastidiousness. If $S$ still carried gauge copies, then $p$ would appear to lose information whenever it merely forgot a gauge label, and every theorem below would be vacuous or misleading: one would be proving obstructions that could be dissolved by a change of gauge. By working on the reduced space we guarantee that two distinct points of $S$ are genuinely distinct physical configurations, so that a fiber of $p$ containing two points is a genuine collapse of physical distinctions and not a bookkeeping artifact.

<div class="definition">

**Definition 2.1** (Readout).

<div id="def:readout">

</div>

A *readout* is a surjective map $p\colon S\to T$ of sets. For $t\in T$ we write $$
F_t := p^{-1}(t) = \{\, s\in S: p(s)=t \,\},\tag{3}$$ and call $F_t$ the *readout fiber* over $t$. Surjectivity of $p$ means every fiber is nonempty, and the fibers partition $S$.

</div>

We write $\sim_p$ for the equivalence relation on $S$ induced by $p$, so $s\sim_p s'$ iff $p(s)=p(s')$ iff $s$ and $s'$ lie in a common fiber. The readout is *lossy*, or noninjective, when some fiber contains more than one point. No topological, smooth, or measurable structure is required for the results of [Section 3](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#sec:exact), [Section 4](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#sec:active), [Section 5](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#sec:uncertainty), [Section 6](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#sec:extensions), [Section 7](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#sec:separation), [Section 8](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#sec:joint); those are statements about maps of sets, and their strength derives from that generality. Structure is imposed only in [Section 9](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#sec:flat), [Section 10](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#sec:spectrum), [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral), where the source space is a moduli space of connections and the target values are spectra.

## Targets

<div class="definition">

**Definition 2.2** (Target and correct-answer map).

<div id="def:target">

</div>

A *target* $Q$ on $S$ consists of

1.  a set $A_Q$ of *admissible answers*, and

2.  a map $a_Q\colon S\to A_Q$, the *correct-answer map*, assigning to each reduced source state $s$ the answer $a_Q(s)$ that is correct for $s$.

</div>

That $a_Q$ is a well-defined map on all of $S$ is a substantive standing assumption, and it is worth saying what it does and does not import. It asserts that the question has a determinate answer for each reduced source state ,  that once the physical configuration is fixed, so is the correct answer. It does *not* assert that the answer is computable, that it is known, or that it is accessible from any particular data. Indeed, the entire content of the paper is the analysis of when the answer, though determinate as a function on $S$, fails to be a function of $p(s)$. If a purported target does not have a determinate answer per reduced source state ,  if, say, the answer depends on further facts not encoded in $S$ ,  then it is not a target on $S$ in the sense of [Definition 2.2](/source-readout/target-relative-necessity-of-completion/reduced-source-readout-and-target#def:target), and the source space must be enlarged before the present analysis applies.

<div class="definition">

**Definition 2.3** (Exact readout solvability).

<div id="def:solvable">

</div>

The target $Q$ is *exactly solvable from the readout* $p$ if there exists a map $$
\bar a_Q\colon T\longrightarrow A_Q
\qquad\text{such that}\qquad
a_Q=\bar a_Q\circ p .\tag{4}$$ We then say that $a_Q$ *descends* along $p$, and call $\bar a_Q$ a *readout-only solution* of $Q$.

</div>

<div class="remark">

**Remark 2.4** (Solving a target is weaker than reconstructing the source).

<div id="rem:weaker">

</div>

[Definition 2.3](/source-readout/target-relative-necessity-of-completion/reduced-source-readout-and-target#def:solvable) asks only that the correct answer be recoverable from $t=p(s)$. It does not ask that $s$ itself be recoverable. This is the asymmetry that makes the whole subject nontrivial. A readout can be violently noninjective ,  collapsing an infinite-dimensional fiber to a point ,  and still solve a target exactly, provided the target is blind to everything the fiber varies over. Conversely, an almost-injective readout that fails to separate a single critical pair of states can fail to solve a target that hinges on that pair. Injectivity of $p$ is therefore sufficient for exact solvability of *every* target, but it is wildly stronger than necessary for any *given* target, and the gap between the two is where the useful mathematics lives.

</div>
