# Introduction

<div id="sec:intro">

</div>

A recurring pattern in mathematical physics is that the quantities a theory treats as public data are obtained from a richer underlying description by a map that forgets structure. Occupation numbers forget which particle sits where; a density matrix forgets a purification; a coarse-grained field forgets microscopic detail; a gauge-invariant observable forgets a gauge frame. In such situations one wants to know precisely what has been lost, and in what sense, if any, it can be recovered.

The last of these examples is deliberately of a different character from the others, and the difference is the hinge on which everything below turns. A gauge frame is, by the declaration of the theory that employs it, not a feature of the physical situation at all, and a map that forgets it has forgotten a redundancy rather than a structure. Whether forgotten data is physically meaningful or merely redundant is not something the forgetting map can decide; it must be decided in advance, by the theory, and the obstruction framework developed here applies only after that decision has been made. The same piece of mathematics will be shown, in [Remark 7.4](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#rem:boundary) and again in [Remark 9.6](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#rem:hopfgauge), to support opposite physical readings depending on which way the decision goes.

The question is easy to pose badly. Three different assertions are routinely run together.

- *Exact quotient presentation.* The readout represents, without error, the equivalence classes of source states that share a readout value.

- *Representative selection.* From each readout value one may choose a source state producing it.

- *Source equivalence.* The readout determines the source state uniquely, so that source and readout carry the same information.

The first of these is essentially automatic once the codomain is restricted to the image of the readout. The second may hold or fail depending on the admissibility conditions imposed on the choice. The third is a strong statement and rarely holds when the readout is genuinely coarser than the source. Nothing about the first two implies the third, and yet the language of “exactness”, “faithful representation”, and “canonical choice” invites exactly that inference.

There is also a prior modeling step that is easy to skip. Not every difference between two descriptions of a physical situation is a physical difference. A theory declares certain transformations redundant: gauge transformations, coordinate changes, relabelings that do not affect any admissible measurement or any admissible law. Differences removed by such declarations are not candidates for lost realization structure, and a map that forgets them has forgotten nothing physical. Consequently, any claim of information loss must be made *after* redundancy has been quotiented out, not before. Failing to do this produces spurious “obstructions” that are artifacts of an over-fine description.

## Contribution

This paper carries out the analysis in the order the logic demands. We begin with a realization space $\Omega$, a declared physical equivalence $\simeq_{\mathrm{phys}}$, and the reduced source space $S=\Omega/\!\simeq_{\mathrm{phys}}$. Only then do we compare $S$ with the readout target $T$, via the induced surjection $p\colon S\to T$.

Within this setting we establish the following.

1.  The readout is an exact presentation of the quotient of $S$ by readout equivalence: $T\cong S/\!\sim_{p}$ ([Proposition 3.1](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:exactquotient)). It is source-equivalent, in the set-theoretic sense, exactly when every reduced fiber is a singleton ([Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq)).

2.  A physically invariant source relation $r\colon S\to V$ factors through the readout if and only if it is constant on each fiber of $p$, and the factorization is then unique ([Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent)). If two reduced source states share a readout but differ in $r$, then no function of the readout alone reproduces $r$ on $S$ ([Corollary 4.3](/source-readout/source-readout-non-equivalence/descent-of-source-relations#cor:descentobstruction)).

3.  Relative to a family $\mathcal{R}$ of source relations that separates the points of $S$, completeness of the readout for $\mathcal{R}$ is equivalent to bijectivity of $p$ ([Theorem 4.5](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:separating)).

4.  A section $\sigma\colon T\to S$ satisfies $p\circ\sigma=\mathop{\mathrm{id}}_{T}$ by definition, but satisfies $\sigma\circ p=\mathop{\mathrm{id}}_{S}$ if and only if $p$ is bijective ([Proposition 5.2](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#prop:selection)). Representative selection is therefore not source reconstruction.

5.  If a group $G$ acts on $S$ and $T$ with $p$ equivariant, then a $G$-equivariant section exists if and only if each readout stabilizer $G_{t}$ fixes a point of its fiber ([Theorem 6.3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#thm:equivsection)). A single fiber with $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})=\varnothing$ suffices to exclude every equivariant section ([Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector)), and this happens whenever $G_{t}$ acts transitively on a fiber with more than one point ([Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive)).

6.  A finite marked-carrier occupation model realizes the equivariant obstruction with $G=S_{N}$ ([Section 7](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#sec:occupation)), while remaining explicit about the modeling boundary: the carrier marks are declared physically meaningful, and the obstruction disappears the moment they are declared redundant instead.

7.  An invariant probability-valued assignment on each fiber does exist in the finite model ([Proposition 8.2](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#prop:ensemble)), which shows that the equivariant obstruction is an obstruction to *deterministic* selection and not to invariant ensembles. An invariant ensemble is not a recovery of the realized source state.

8.  The Hopf fibration realizes the obstruction in the continuous setting, and does so twice over, by two logically independent mechanisms: a free and transitive fiber action, which excludes equivariant selection; and a nonzero first Chern class, which excludes every continuous global section ([Section 9](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#sec:hopf)). Neither argument is needed for the other.

9.  The combined source–readout non-equivalence theorem ([Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined)) asserts exactly what its hypotheses support: under either obstruction, $p$ is noninjective and the corresponding form of reconstruction fails, while $T$ remains the exact quotient $S/\!\sim_{p}$.

The mathematics used is elementary in its ingredients ,  quotients, group actions, stabilizers, principal bundles, characteristic classes ,  and the individual facts are standard \[[1](/source-readout/source-readout-non-equivalence/references#bib-Lang), [2](/source-readout/source-readout-non-equivalence/references#bib-Bredon), [5](/source-readout/source-readout-non-equivalence/references#bib-KobayashiNomizu), [4](/source-readout/source-readout-non-equivalence/references#bib-Husemoller), [3](/source-readout/source-readout-non-equivalence/references#bib-Steenrod), [6](/source-readout/source-readout-non-equivalence/references#bib-Hatcher), [7](/source-readout/source-readout-non-equivalence/references#bib-MilnorStasheff), [8](/source-readout/source-readout-non-equivalence/references#bib-BottTu), [9](/source-readout/source-readout-non-equivalence/references#bib-Naber)\]. What is not standard, and what this paper is for, is the discipline of keeping the levels apart: physical equivalence before comparison; descent of relations distinct from reconstruction of states; selection distinct from inversion; and set-theoretic, equivariant, continuous, smooth, measurable, local, and covariant reconstruction requirements each treated on its own terms.

## Scope

The theorems below are theorems about maps of sets, equivariant maps, and bundles. They do not, on their own, establish that any particular physical theory has a hidden source layer. Applying them to a physical theory requires that the theory independently supply: a reduced source domain, an explicit physical-equivalence relation, an explicit readout map, an explicit statement of which fiber distinctions are physically meaningful, and either a non-descending relation or an applicable reconstruction obstruction. [Section 11](/source-readout/source-readout-non-equivalence/interpretation-and-scope#sec:shadow) makes this conditional structure precise for the research program in which the present paper is the first of a sequence. [Section 12](/source-readout/source-readout-non-equivalence/discussion#sec:discussion), [Section 13](/source-readout/source-readout-non-equivalence/conclusion#sec:conclusion) discuss the resulting picture and what it does and does not license.
