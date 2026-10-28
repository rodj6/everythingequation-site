# The gauge-reduction boundary

<div id="sec:gauge">

</div>

We return to the raw configuration space $\Omega$ and the physical quotient [(2.1)](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#eq:gauge-quotient), $q\colon\Omega\to S=\Omega/\!\simeq_{\mathrm{phys}}$. Recall [Definition 2.1](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:eligible): only quantities invariant under $\simeq_{\mathrm{phys}}$ descend to $S$, and only such quantities are eligible for nomination.

<div class="corollary">

**Corollary 9.1** (Completion does not restore gauge coordinates).

<div id="cor:gauge">

</div>

*For every nominated family $\{r_\alpha\}_{\alpha\in A}$ of eligible relations, the composite $e_A\circ q\colon\Omega\to E_A$ is constant on raw physical-equivalence classes: $$
\omega\simeq_{\mathrm{phys}}\omega'
\quad\Longrightarrow\quad
e_A\bigl(q(\omega)\bigr)=e_A\bigl(q(\omega')\bigr).\tag{9.1}$$*

</div>

<div class="proof">

*Proof.* If $\omega\simeq_{\mathrm{phys}}\omega'$ then $q(\omega)=q(\omega')$ by definition of the quotient map, and applying the function $e_A$ to a single element of $S$ yields a single value. ◻

</div>

Mathematically this is a triviality, and we present it as such: it is a corollary of the order of operations, not a theorem with content of its own. Its *physical* significance is nevertheless worth stating precisely, because completion is easily misread as a licence to reintroduce structure that was deliberately discarded. The precise content of [(9.1)](/source-readout/canonical-minimal-source-completion/the-gauge-reduction-boundary#eq:gauge-constancy) is that the composite $e_A\circ q$ is constant on physical-equivalence classes. Consequently, no completion, however large the nomination, can

1.  distinguish two gauge-equivalent raw configurations $\omega\simeq_{\mathrm{phys}}\omega'$;

2.  recover which raw representative $\omega$ was originally supplied, given only the completed state;

3.  restore discarded gauge or coordinate data as *physical* information, that is, as an invariant of the completed state; or

4.  canonically generate a gauge section $\Omega\leftarrow S$ from the completion theorem.

We are careful not to overstate this. We do *not* claim that a representative of a physical-equivalence class can never be selected in any sense whatever: a separately chosen gauge-fixing convention, or a section of $q$, may well assign a representative when one exists, and such devices are routine in practice. The point is about provenance and status. A conventional gauge-fixing section is *extra, noncanonical structure supplied from outside*. It is not produced by the completion, is not privileged by terminality, and, this is the substantive claim, is not a recovery of lost raw information: the information it appears to supply was chosen by the convention, not extracted from the physics. Two different conventions give two different representatives of the same physical state, and nothing in $E_A$ adjudicates between them.

Completion therefore refines the readout partition, but only *within* the reduced source $S$; it cannot resurrect a distinction that the reduction $q$ was defined to destroy. Reduction precedes completion, and the universal completion does not undo physical equivalence. If one wants such a distinction back as physics, one must argue that the reduction was wrong, i.e. that the quantity was physical after all, hence eligible in the sense of [Definition 2.1](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:eligible), and that is an argument about physics, not a construction available in this paper.
