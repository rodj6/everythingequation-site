# Equivariant reconstruction

<div id="sec:equivariant">

</div>

In structured settings one typically wishes to restrict attention to sections compatible with the structure at hand, and the results below concern one such restriction. Suppose the theory carries a symmetry acting on both source and readout and respected by the readout map. A selection rule that fails to respect that symmetry introduces a preference among source states that the symmetry does not distinguish, and that preference has to come from somewhere.

The status of this restriction should be stated carefully, because the theorem below is conditional and its interpretation must be too. *If* $G$-equivariance is imposed as an admissibility requirement on reconstruction, then failure of the stabilizer-fixed-point condition excludes every selector in that class ,  which is a strong and unconditional mathematical conclusion *within* the class. It is not a claim that a non-equivariant selector is inherently unlawful or physically impossible. A non-equivariant selection rule may be perfectly legitimate once it is justified by something further: symmetry-breaking data, boundary conditions, an environment, additional structure on $S$, or an openly stipulated convention.

The distinction must be drawn carefully, since it is easy to overstate. A non-equivariant section is, formally, a map $T\to S$ like any other: it takes a readout value as input and returns a source state, and in that sense it is certainly a function of the readout variable. What it is not is *determined* by the readout and the declared $G$-symmetric structure alone. Its particular choice among the many available maps $T\to S$ cannot be selected, derived, or justified from those ingredients; it encodes an additional convention or symmetry-breaking ingredient supplied from outside them, and different conventions yield different and equally admissible non-equivariant sections with no symmetric ground for preferring one. The obstruction is therefore an obstruction relative to a declared reconstruction class, and the class must be declared.

This section characterizes exactly when a $G$-equivariant selection rule exists.

## Setup

Let a group $G$ act on $S$ and on $T$, and assume $p$ is *equivariant*: $$
p(g\cdot s)=g\cdot p(s)
\qquad\text{for all }g\in G,\ s\in S.\tag{17}$$ Equivariance is the statement that the readout commutes with the symmetry: transforming the source and then reading out is the same as reading out and then transforming. Note that [(17)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivariance) implies $$
g\cdot F_{t}=F_{g\cdot t}
\qquad (g\in G,\ t\in T),\tag{18}$$ since $s\in F_{t}$ gives $p(g\cdot s)=g\cdot t$, and the reverse inclusion follows by applying $g^{-1}$.

<div class="definition">

**Definition 6.1** (Stabilizer; fixed set of a fiber).

<div id="def:stab">

</div>

For $t\in T$ let $$
G_{t}:=\{g\in G: g\cdot t=t\}\tag{19}$$ be the stabilizer of $t$. By [(18)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fibertransport), $G_{t}$ maps $F_{t}$ to itself and hence acts on $F_{t}$. Set $$
\mathop{\mathrm{Fix}}_{G_{t}}(F_{t}):=\{s\in F_{t}: g\cdot s=s\ \text{ for every } g\in G_{t}\}.\tag{20}$$

</div>

The set [(20)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fix) has a direct reading. The subgroup $G_{t}$ consists of exactly those symmetries that the readout cannot see at $t$: they move source states around, possibly, but they leave the readout value $t$ where it is. An element of $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$ is a source state over $t$ that is unmoved even by these readout-invisible symmetries: a *symmetry-compatible candidate representative* over $t$. It is important not to overstate what such a point provides. The set [(20)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fix) may contain many elements, and when it does, the symmetry itself does not adjudicate among them; a further choice is required, and that choice is not supplied by $G$. A nonempty fixed set therefore certifies that symmetry-compatible selection is *possible* over $t$; it does not by itself single out a point, and it does not make any selected point canonical. When no such point exists, the readout-invisible symmetry group acts on $F_{t}$ without fixed points, and every element of $F_{t}$ is carried to a different element by some symmetry that the readout cannot detect. Selecting one of them is then necessarily an act of breaking the symmetry by fiat.

<div class="definition">

**Definition 6.2** (Equivariant section).

<div id="def:equivsection">

</div>

An *equivariant section* of $p$ is a section $\sigma\colon T\to S$ satisfying $$
\sigma(g\cdot t)=g\cdot\sigma(t)
\qquad\text{for all }g\in G,\ t\in T.\tag{21}$$

</div>

## The criterion

<div class="theorem">

**Theorem 6.3** (Equivariant-section criterion).

<div id="thm:equivsection">

</div>

*Let $G$ act on $S$ and $T$ with $p$ equivariant. For the implication [3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3)$\Rightarrow$[1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1) assume, in addition, a choice function for the family of $G$-orbits in $T$ *and* a choice function for the associated family of nonempty fixed sets $\mathop{\mathrm{Fix}}_{G_{t_{i}}}(F_{t_{i}})$ indexed by the selected orbit representatives (see [Remark 6.4](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#rem:choice)). The following are equivalent.*

1.  <div id="it:eq1">

    </div>

    *An equivariant section $\sigma\colon T\to S$ exists.*

2.  <div id="it:eq2">

    </div>

    *$\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})\neq\varnothing$ for every $t\in T$.*

3.  <div id="it:eq3">

    </div>

    *Every $G$-orbit in $T$ contains at least one representative $t$ with $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})\neq\varnothing$.*

</div>

<div class="proof">

*Proof.* [1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1)$\Rightarrow$[2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2). Let $\sigma$ be an equivariant section and let $t\in T$. Since $p(\sigma(t))=t$, we have $\sigma(t)\in F_{t}$. For $g\in G_{t}$, equivariance [(21)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivsection) and $g\cdot t=t$ give $$g\cdot\sigma(t)=\sigma(g\cdot t)=\sigma(t).$$ Hence $\sigma(t)$ is fixed by every element of $G_{t}$, so $\sigma(t)\in\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$, which is therefore nonempty.

[2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2)$\Rightarrow$[3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3). Immediate, since every orbit is nonempty.

[3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3)$\Rightarrow$[2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2). This is the conjugacy step. Let $t\in T$ be arbitrary; by hypothesis its orbit contains a representative $t_{0}$ with some $s_{0}\in\mathop{\mathrm{Fix}}_{G_{t_{0}}}(F_{t_{0}})$, and there is $g\in G$ with $t=g\cdot t_{0}$. Stabilizers along an orbit are conjugate: $$
G_{g\cdot t_{0}}=g\,G_{t_{0}}\,g^{-1},\tag{22}$$ since $h\cdot(g\cdot t_{0})=g\cdot t_{0}$ if and only if $(g^{-1}hg)\cdot t_{0}=t_{0}$. We claim $g\cdot s_{0}\in\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$. First, $g\cdot s_{0}\in F_{t}$ by [(18)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fibertransport). Second, let $h\in G_{t}$. By [(22)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:conj) we may write $h=g\,k\,g^{-1}$ with $k\in G_{t_{0}}$, and then $$h\cdot(g\cdot s_{0})
=(g k g^{-1} g)\cdot s_{0}
=g\cdot(k\cdot s_{0})
=g\cdot s_{0},$$ using $k\cdot s_{0}=s_{0}$. Hence $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})\neq\varnothing$. Thus the fixed-point condition propagates from any orbit representative to the whole orbit, and [2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2) and [3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3) are equivalent conditions.

[3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3)$\Rightarrow$[1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1). Choose a set $\{t_{i}\}_{i\in I}$ containing exactly one representative from each $G$-orbit in $T$, and for each $i$ choose $$s_{i}\in\mathop{\mathrm{Fix}}_{G_{t_{i}}}(F_{t_{i}}),$$ which is possible by hypothesis. Every $t\in T$ lies in exactly one orbit, so $t=g\cdot t_{i}$ for a unique $i\in I$ and some $g\in G$. Define $$
\sigma(t):=g\cdot s_{i}.\tag{23}$$

*Well-definedness.* The index $i$ is determined by $t$, but $g$ need not be. Suppose $g\cdot t_{i}=g'\cdot t_{i}=t$. Then $(g'^{-1}g)\cdot t_{i}=t_{i}$, so $g'^{-1}g\in G_{t_{i}}$, and since $s_{i}$ is fixed by $G_{t_{i}}$, $$g\cdot s_{i}
=g'\cdot\bigl((g'^{-1}g)\cdot s_{i}\bigr)
=g'\cdot s_{i}.$$ Hence [(23)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:sigmadef) does not depend on the choice of $g$, and $\sigma$ is a well-defined map $T\to S$. It is precisely the fixed-point property of $s_{i}$ that makes this work; an arbitrary choice of $s_{i}\in F_{t_{i}}$ would not.

*Section property.* With $t=g\cdot t_{i}$, equivariance [(17)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivariance) of $p$ and $s_{i}\in F_{t_{i}}$ give $$p\bigl(\sigma(t)\bigr)
=p(g\cdot s_{i})
=g\cdot p(s_{i})
=g\cdot t_{i}
=t .$$

*Equivariance.* Let $h\in G$ and $t=g\cdot t_{i}$. Then $h\cdot t=(hg)\cdot t_{i}$ lies in the same orbit, so by [(23)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:sigmadef), $$\sigma(h\cdot t)=(hg)\cdot s_{i}=h\cdot(g\cdot s_{i})=h\cdot\sigma(t).$$ Thus $\sigma$ is an equivariant section, establishing [1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1). ◻

</div>

<div class="remark">

*Remark 16* (Where choice enters).

<div id="rem:choice">

</div>

Two independent selections were made in the proof of [3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq3)$\Rightarrow$[1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1), and *both* require a choice assumption; neither one suffices alone.

The first is the selection of one orbit representative $t_{i}$ from each $G$-orbit in $T$: a choice function for the family $\{\,\mathcal{O}\,\}_{\mathcal{O}\in T/G}$ of nonempty orbits. The second is the selection of one point $s_{i}$ from each nonempty fixed set $\mathop{\mathrm{Fix}}_{G_{t_{i}}}(F_{t_{i}})$: a choice function for the family $\{\mathop{\mathrm{Fix}}_{G_{t_{i}}}(F_{t_{i}})\}_{i\in I}$ indexed by the representatives produced by the first selection. The second family is not the first, and hypothesizing choice for the orbits alone leaves the fixed points unselected. This is exactly the point recorded in [Remark 6.5](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#rem:notcanonical): a nonempty $\mathop{\mathrm{Fix}}_{G_{t_{i}}}(F_{t_{i}})$ may have more than one element, and nothing in the hypotheses distinguishes one of them. Both choice functions are therefore needed, and it is their conjunction that the theorem assumes.

Neither assumption is needed when $T/G$ is finite and each relevant fixed set is finite, since finite choice is a theorem; nor when the problem independently supplies canonical orbit representatives and canonical fixed points, in which case the selections are definable rather than chosen.

The obstruction direction is a different matter. The implication [1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1)$\Rightarrow$[2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2) constructs nothing: it merely evaluates a given $\sigma$ at a given $t$ and observes that $\sigma(t)$ is fixed. It uses no choice principle whatever, and consequently [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector), [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive), [Example 7.3](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#ex:occ), [Proposition 9.1](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopfequiv), and the equivariant half of [Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined) ,  that is, every negative result in this paper ,  are choice-free.

</div>

<div class="remark">

*Remark 17* (Existence, uniqueness, and canonicity are three things).

<div id="rem:notcanonical">

</div>

[Theorem 6.3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#thm:equivsection) characterizes the *existence* of an equivariant section. It characterizes nothing else, and three statements should be kept apart.

*Existence.* An equivariant section exists if and only if every stabilizer fixes a point of its fiber (together with the choice assumptions of [Remark 6.4](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#rem:choice)). This is the theorem.

*Uniqueness.* An equivariant section need not be unique. If some $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$ contains two distinct points $s\neq s'$, then the construction [(23)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:sigmadef) run with $s$ and with $s'$ produces two equivariant sections differing at $t$, and both are equally valid. Nonempty fixed sets certify possibility, not uniqueness.

*Canonicity.* A fortiori, an element of $\mathop{\mathrm{Fix}}_{G_{t}}(F_{t})$ is not thereby a canonical representative. It is a representative that the symmetry *permits*; the symmetry has simply declined to rule it out. Selecting among several permitted representatives requires a principle external to $G$, and any such principle is additional structure, not a consequence of the symmetry.

The theorem should therefore be read as delimiting a reconstruction class, not as producing a preferred reconstruction within it. Where the fixed set happens to be a singleton for every $t$, the equivariant section is unique and is canonical relative to $G$; but that is an extra hypothesis, and it is not what [Theorem 6.3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#thm:equivsection) asserts.

</div>

## Consequences

<div class="corollary">

**Corollary 6.6** (No-selector theorem).

<div id="cor:noselector">

</div>

*If there exists $t_{0}\in T$ with $$
\mathop{\mathrm{Fix}}_{G_{t_{0}}}(F_{t_{0}})=\varnothing,\tag{24}$$ then no $G$-equivariant section of $p$ exists.*

</div>

<div class="proof">

*Proof.* This is the contrapositive of [1](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq1)$\Rightarrow$[2](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#it:eq2) in [Theorem 6.3](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#thm:equivsection), which requires no choice principle. ◻

</div>

<div class="corollary">

**Corollary 6.7** (Transitive nontrivial fiber).

<div id="cor:transitive">

</div>

*Suppose that for some $t_{0}\in T$ the stabilizer $G_{t_{0}}$ acts transitively on $F_{t_{0}}$ and $|F_{t_{0}}|>1$. Then no $G$-equivariant section of $p$ exists.*

</div>

<div class="proof">

*Proof.* Suppose some $s\in F_{t_{0}}$ were fixed by every element of $G_{t_{0}}$. Then the $G_{t_{0}}$-orbit of $s$ inside $F_{t_{0}}$ is the singleton $\{s\}$. But $G_{t_{0}}$ acts transitively on $F_{t_{0}}$, so that orbit is all of $F_{t_{0}}$, giving $F_{t_{0}}=\{s\}$ and contradicting $|F_{t_{0}}|>1$. Hence $\mathop{\mathrm{Fix}}_{G_{t_{0}}}(F_{t_{0}})=\varnothing$, and [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector) applies. ◻

</div>

[Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) isolates the mechanism in its cleanest form. If the readout-invisible symmetries can move any point of a fiber to any other, then no point of that fiber is distinguished, and any selection must distinguish one. The resulting obstruction is not the observation that $p$ is many-to-one, and it is important to see why. A many-to-one map may perfectly well admit sections that are continuous, measurable, smooth, or equivariant; being many-to-one is compatible with all of these. What [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector), [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) identify is a specific incompatibility between the act of selecting a representative and the symmetry that the readout preserves. It is the symmetry, not the mere coarseness, that does the work.

Two further observations delimit the result. First, the obstruction is sensitive to the group: enlarging or shrinking $G$ changes the stabilizers $G_{t}$ and can create or destroy fixed points. A section may exist equivariantly for one symmetry and not for another. Second, the obstruction is to *deterministic* selection. [Section 7](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#sec:occupation) exhibits a case in which no equivariant deterministic section exists while an equivariant probability-valued assignment on fibers does.
