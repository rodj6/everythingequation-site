# Representative selection is not reconstruction

<div id="sec:selection">

</div>

Noninjectivity of $p$ excludes recovery of the realized source state by a map of readout data. It does not, by itself, exclude the weaker operation of choosing, for each readout value, some source state that would have produced it. The two are routinely conflated, and the distinction matters.

<div class="definition">

**Definition 5.1** (Section).

<div id="def:section">

</div>

A *section* of $p$ is a map $$
\sigma\colon T\longrightarrow S
\qquad\text{with}\qquad
p\circ\sigma=\mathop{\mathrm{id}}_{T}.\tag{15}$$

</div>

Equivalently, $\sigma(t)\in F_{t}$ for every $t\in T$: a section picks one element from each fiber. When $T$ is a set with no further structure and no admissibility conditions are imposed, a section exists whenever a choice function for the family $\{F_{t}\}_{t\in T}$ of nonempty sets exists; the axiom of choice for that family supplies one, and for finite or countable $T$ weaker principles suffice. Mere existence in this sense therefore conveys no information about $p$ at all. The substantive question is never whether *some* section exists, but whether one exists that is compatible with the structure the problem carries: equivariance, continuity, smoothness, measurability, locality, covariance. [Section 6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#sec:equivariant), [Section 9](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#sec:hopf) take up two such conditions.

What a section is *not*, in any case, is an inverse.

<div class="proposition">

**Proposition 5.2** (Selection is not reconstruction).

<div id="prop:selection">

</div>

*Let $\sigma$ be a section of $p$. Then $$
\sigma\circ p=\mathop{\mathrm{id}}_{S}\tag{16}$$ holds if and only if $p$ is bijective. In that case $\sigma=p^{-1}$.*

</div>

<div class="proof">

*Proof.* Suppose [(16)](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#eq:twosided) holds and $p(s)=p(s')$. Applying $\sigma$, $$s=\sigma\bigl(p(s)\bigr)=\sigma\bigl(p(s')\bigr)=s',$$ so $p$ is injective; it is surjective by [(3)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:surjconv), hence bijective. Moreover [(15)](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#eq:section) and [(16)](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#eq:twosided) then identify $\sigma$ as the two-sided inverse of $p$.

Conversely, if $p$ is bijective then $p^{-1}$ exists, satisfies $p\circ p^{-1}=\mathop{\mathrm{id}}_{T}$, and is therefore a section; and any section $\sigma$ satisfies, for each $s\in S$, that $\sigma(p(s))$ lies in $F_{p(s)}=\{s\}$, so $\sigma\circ p=\mathop{\mathrm{id}}_{S}$. ◻

</div>

The asymmetry of the two identities [(15)](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#eq:section) and [(16)](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#eq:twosided) is the whole point. The first says: whatever source state $\sigma$ nominates, it does produce the observed readout. The second says: the source state $\sigma$ nominates is the one that was actually there. The first is a consistency condition on a convention; the second is a claim of recovery. A section supplies a representative convention; only a two-sided inverse supplies source reconstruction, and by [Proposition 5.2](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#prop:selection) a two-sided inverse exists precisely in the degenerate case in which nothing was lost.

Nor can the gap be closed by refining the convention. If $|F_{t}|>1$, then for every section $\sigma$ there exists $s\in F_{t}$ with $\sigma(p(s))=\sigma(t)\neq s$: the section misidentifies at least one source state in that fiber, and no amount of cleverness in choosing $\sigma$ changes this, because the readout data available to $\sigma$ is identical for all elements of $F_{t}$.
