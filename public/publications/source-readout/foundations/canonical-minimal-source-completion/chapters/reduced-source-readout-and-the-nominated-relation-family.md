# Reduced source, readout, and the nominated relation family

<div id="sec:setup">

</div>

## The reduced source

We assume, as in Paper 1, that $S$ has already been reduced: all declared gauge redundancy and all coordinate-labelling redundancy have been quotiented out. Concretely, one begins with a raw configuration space $\Omega$ carrying an equivalence relation $\simeq_{\mathrm{phys}}$ of physical indistinguishability, gauge equivalence, diffeomorphism relabelling, choice of chart, and forms $$
q\colon\Omega\longrightarrow S=\Omega/\!\simeq_{\mathrm{phys}}.\tag{2.1}$$ The order of operations matters and is not a convention we are free to reverse: *reduction precedes completion*. [Section 9](/source-readout/canonical-minimal-source-completion/the-gauge-reduction-boundary#sec:gauge) states the consequence precisely.

<div class="definition">

**Definition 2.1** (Eligible relation).

<div id="def:eligible">

</div>

A raw quantity $\widetilde r\colon\Omega\to V$ is *eligible* for source completion when it is invariant on physical-equivalence classes, $$
\omega\simeq_{\mathrm{phys}}\omega'
\quad\Longrightarrow\quad
\widetilde r(\omega)=\widetilde r(\omega'),\tag{2.2}$$ so that there is a unique $r\colon S\to V$ with $\widetilde r=r\circ q$. All relations nominated below are assumed eligible, i.e. genuinely defined on the reduced source $S$.

</div>

Eligibility is exactly the condition under which the raw quantity is a function of the physical state rather than of a representative of it. A quantity failing [(2.2)](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#eq:eligible), a gauge potential, a component in a chosen frame, a coordinate label, is not a candidate relation, and no completion of the readout can make it one.

## External nomination

Fix a set $A$ and a family of eligible relations $$
r_\alpha\colon S\longrightarrow V_\alpha,\qquad \alpha\in A .\tag{2.3}$$ We stress the epistemic status of the family, because the mathematics below is only as meaningful as the nomination that feeds it. The relations $r_\alpha$ are nominated *externally*: each is selected because it enters an independently specified mathematical or physical target, an amplitude, a spectrum, a transport law, an interference pattern. Physical relevance is **not** inferred from fiber variation. That a function happens to be nonconstant on $F_t$ shows only that the readout does not determine it; it does not show that the distinctions it makes are physical. Confusing the two would convert every artifact of a redundant description into a physical observable. The theorems below are therefore conditional in exactly one place, and it is the right place: they take the family as given and tell one, completely, what follows from it.

## The completion problem

Write $$
V_A:=\prod_{\alpha\in A}V_\alpha,
\qquad
R_A\colon S\to V_A,
\qquad
R_A(s):=(r_\alpha(s))_{\alpha\in A}.\tag{2.4}$$

<div class="definition">

**Definition 2.2** (The family completion problem).

<div id="def:problem">

</div>

An extension of the readout *sufficient* for the family [(2.3)](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#eq:family) is a space $E$ through which $S$ maps onto, such that

1.  the original readout is retained: $p$ factors through $E$; and

2.  every nominated relation becomes a well-defined function of the completed state: each $r_\alpha$ factors through $E$.

The problem is to construct the *coarsest* such extension: one that makes no distinction between source states beyond those forced by requirements (1) and (2), and to prove it canonical.

</div>

A sufficient extension is emphatically *not* required to distinguish source states on which both the readout and every selected relation agree. This is the entire content of minimality, and it is what separates completion from reconstruction.

<div class="remark">

*Remark 3* (The empty family).

<div id="rem:empty">

</div>

If $A=\varnothing$, the ordinary set-theoretic convention gives $V_\varnothing=\{*\}$, the singleton empty product, and $j_\varnothing=(p,\ast)$, so that $E_\varnothing=\mathop{\mathrm{Im}}(j_\varnothing)\cong T$ and $u_\varnothing$ is a bijection. Nominating nothing completes nothing: the completion of the readout relative to the empty family is the readout. This is the degenerate boundary case of every theorem below, and we will not comment on it again.

</div>
