# Discussion and scope

<div id="sec:discussion">

</div>

## What has been established

Given a reduced source space $S$, a surjective readout $p\colon S\to T$, and a set-indexed family of eligible source relations $\{r_\alpha\colon S\to V_\alpha\}_{\alpha\in A}$, there exists a completion $E_A=\mathop{\mathrm{Im}}(p,R_A)$ of the readout on which every nominated relation becomes well defined; it is canonically the quotient $S/\!\sim_A$; it is terminal among surjective relation-sufficient extensions and therefore unique up to unique isomorphism; it is the *coarsest* such extension, in the exact sense $\sim_e\ \subseteq\ \sim_A$ for every sufficient $e$; its fibers over $T$ are the realized relation signatures; it is functorial and cocyclic in the nomination; it is insensitive to faithful relabelling of relation values; it admits a canonical surjection onto the completion determined by any family of targets that the relations mediate; it restores no gauge redundancy; and in the topological setting it is terminal for the quotient topology, embedding into $T\times V_A$ exactly when the quotient and subspace topologies agree.

Together with \[[1](/source-readout/canonical-minimal-source-completion/references#bib-Paper1)\] (obstruction) and \[[2](/source-readout/canonical-minimal-source-completion/references#bib-Paper2)\] (target-relative necessity), this supplies the constructive step of the sequence: the object whose existence, uniqueness, and minimality were previously only desiderata.

## The three standing confusions

*Minimality is not smallness.* [Remark 5.5](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#rem:minimality): minimality is least retained distinction, an order-theoretic statement about equivalence relations, not a cardinality bound and not an optimality claim in any other metric.

*Completion is not reconstruction.* [Remark 12.2](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#rem:two-reconstructions): the completed state always determines the nominated signature and determines the source state only under a separation hypothesis that must be checked, not assumed.

*Coordinates are relative to the nomination.* [Remark 6.4](/source-readout/canonical-minimal-source-completion/redundant-and-indispensable-relation-coordinates#rem:not-unique-coords) and [Proposition 7.3](/source-readout/canonical-minimal-source-completion/nested-families-refinement-maps-and-reparameterization#prop:reparam): the nominated relations are a presentation of the quotient, and irredundancy constrains that presentation without making it unique. Relative to a fixed nominated family, $E_A$ does have canonical structure maps $u_A$ and $(\rho_\alpha)_{\alpha\in A}$; what it lacks is a family-independent, intrinsically unique coordinate presentation. Different faithful reparameterizations, and different irredundant families, may present the same quotient.

## What has not been established

The theorem is model-relative, and the following are *not* consequences of it.

That the universe is a projection of a hidden source. Nothing here bears on that; $S$ is an assumed structure, and the theorem tells one what follows from assuming it, not that it exists.

That the source space is empirically real. The construction is available whether $S$ is a physical posit, a redundant description, or a bookkeeping device.

That every lost distinction ought to be restored. On the contrary: the entire point of [Theorem 8.3](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#thm:chi) and of [Section 11](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#sec:u1) is that a distinction is worth restoring only relative to a nominated target, and that nominating more than the target requires yields a completion that is finer than necessary, correct, but not minimal for that target.

That the full source can in general be reconstructed. [Proposition 12.1](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#prop:reconstruction) makes this a hypothesis, and the spectral example shows it can fail.

That the nominated relation family is physically privileged. This is the load-bearing external input, and the mathematics cannot supply it. A relation is not physical because it varies on a readout fiber; if it were, every gauge artifact would be an observable. The nomination must be justified by the physics of the targets, and this paper’s theorems are conditional on it in exactly that one respect, which is, we think, where the conditionality belongs.

## Outlook

The present construction is purely set-theoretic and, in [Section 10](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#sec:topology), topological. It says nothing about when $E_A$ carries additional structure, smooth, symplectic, metric, or when the relation signatures arise as genuine geometric invariants rather than as formal coordinates. The companion manuscript in preparation on geometric realization takes up exactly that question, on restricted spaces of metrics, bundles, connections, and matter fields. We have deliberately imported none of that machinery here; the theorems above should stand or fall on their own, and they require nothing beyond images, quotients, and quotient topologies.
