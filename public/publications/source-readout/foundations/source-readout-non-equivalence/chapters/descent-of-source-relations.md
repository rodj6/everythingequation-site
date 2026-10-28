# Descent of source relations

<div id="sec:descent">

</div>

Nontriviality of a fiber is a statement about the map $p$. To convert it into a statement about lost *physics*, one must exhibit a physically meaningful quantity that varies across a fiber. This section makes that precise.

## Relations and descent

Let $V$ be a set of values and let $$
r\colon S\longrightarrow V\tag{10}$$ be a *source relation*: a map assigning to each reduced source state a value that the theory regards as physically meaningful. Because the domain of $r$ is $S$ rather than $\Omega$, the relation is automatically invariant under physical equivalence; this is the payoff of having performed the reduction first. Concrete instances that arise in practice include a global transport class, a boundary relation, a correlation functional, a spectral invariant, or a source property required as an input by some further construction. Nothing in what follows depends on which; $r$ is an arbitrary map out of $S$.

<div class="definition">

**Definition 4.1** (Descent).

<div id="def:descent">

</div>

The relation $r$ *descends through the readout* if there exists a map $$
\bar r\colon T\longrightarrow V
\qquad\text{with}\qquad
r=\bar r\circ p .\tag{11}$$

</div>

If $r$ descends, then $r(s)$ is a function of the readout value $p(s)$ alone, and an agent with access only to public data can evaluate $r$. If $r$ does not descend, no such evaluation is possible, however the agent proceeds. It is only after descent has been established that it is legitimate to call $r$ an *observable* of the readout; a source relation is not observable at the readout level merely because it is physically meaningful at the source level.

<div class="theorem">

**Theorem 4.2** (Fiber–descent theorem).

<div id="thm:descent">

</div>

*Let $r\colon S\to V$. The following are equivalent.*

1.  <div id="it:desc1">

    </div>

    *There exists $\bar r\colon T\to V$ with $r=\bar r\circ p$.*

2.  <div id="it:desc2">

    </div>

    *$r$ is constant on every fiber of $p$; that is, $$
    p(s)=p(s')
    \quad\Longrightarrow\quad
    r(s)=r(s')
    \qquad (s,s'\in S).\tag{12}$$*

*When these hold, $\bar r$ is unique.*

</div>

<div class="proof">

*Proof.* [1](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc1)$\Rightarrow$[2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc2). Suppose $r=\bar r\circ p$ and $p(s)=p(s')$. Then $$r(s)=\bar r\bigl(p(s)\bigr)=\bar r\bigl(p(s')\bigr)=r(s').$$

[2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc2)$\Rightarrow$[1](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc1). Suppose $r$ is constant on fibers. Fix $t\in T$. By surjectivity of $p$ the fiber $F_{t}$ is nonempty, so we may pick $s\in F_{t}$ and set $$
\bar r(t):=r(s).\tag{13}$$ This prescription is independent of the choice of $s\in F_{t}$: any two elements of $F_{t}$ have the same image under $p$, namely $t$, so [(12)](/source-readout/source-readout-non-equivalence/descent-of-source-relations#eq:fiberconst) forces them to have the same $r$-value. Hence $\bar r$ is a well-defined map $T\to V$. For arbitrary $s\in S$, applying [(13)](/source-readout/source-readout-non-equivalence/descent-of-source-relations#eq:rbardef) at $t=p(s)$ with the representative $s$ itself gives $\bar r(p(s))=r(s)$, that is, $r=\bar r\circ p$.

Uniqueness. If $\bar r_{1}\circ p=\bar r_{2}\circ p$ then, since $p$ is surjective, every $t\in T$ is of the form $p(s)$, and $\bar r_{1}(t)=r(s)=\bar r_{2}(t)$. Hence $\bar r_{1}=\bar r_{2}$. ◻

</div>

Note that the proof of [2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc2)$\Rightarrow$[1](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc1) requires only a choice of one representative per fiber *for the purpose of evaluating a constant*, and the constancy hypothesis makes the choice immaterial. No choice principle is needed, and no representative survives into the conclusion. This is in sharp contrast to the selection problems of [Section 5](/source-readout/source-readout-non-equivalence/representative-selection-is-not-reconstruction#sec:selection), [Section 6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#sec:equivariant), where the chosen representative *is* the output.

<div class="corollary">

**Corollary 4.3** (Descent obstruction).

<div id="cor:descentobstruction">

</div>

*Suppose there exist $s_{0},s_{1}\in S$ with $$
p(s_{0})=p(s_{1}),
\qquad
r(s_{0})\neq r(s_{1}).\tag{14}$$ Then $r$ does not descend through $p$: there is no map $\bar r\colon T\to V$ with $r=\bar r\circ p$. Consequently no function of the readout alone reproduces $r$ on all of $S$.*

</div>

<div class="proof">

*Proof.* Condition [(14)](/source-readout/source-readout-non-equivalence/descent-of-source-relations#eq:obstruction) exhibits a fiber on which $r$ is not constant, so [2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc2) of [Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent) fails, and therefore [1](/source-readout/source-readout-non-equivalence/descent-of-source-relations#it:desc1) fails. ◻

</div>

The content of [Corollary 4.3](/source-readout/source-readout-non-equivalence/descent-of-source-relations#cor:descentobstruction) should not be mistaken for a restatement of noninjectivity of $p$. Noninjectivity says that the fibers are not all singletons. [Corollary 4.3](/source-readout/source-readout-non-equivalence/descent-of-source-relations#cor:descentobstruction) says something further and more specific: that a *nominated* physically meaningful quantity, one the theory actually cares about, is not among the quantities the readout carries. The hypothesis [(14)](/source-readout/source-readout-non-equivalence/descent-of-source-relations#eq:obstruction) is a statement one must earn by producing the relation $r$; it does not follow from coarseness of the readout by itself, since a noninjective readout may perfectly well transmit every relation the theory needs. This is the difference between observing that a map forgets something and identifying what it forgets.

## Relative completeness

The preceding suggests grading the readout not absolutely but against a nominated family of relations.

<div class="definition">

**Definition 4.4** (Relative source completeness; separation).

<div id="def:relcomplete">

</div>

Let $\mathcal{R}$ be a family of source relations on $S$ (with values in possibly different value sets). The readout is *complete relative to $\mathcal{R}$* if every $r\in\mathcal{R}$ descends through $p$.

The family $\mathcal{R}$ *separates the points of $S$* if for all $s\neq s'$ in $S$ there exists $r\in\mathcal{R}$ with $r(s)\neq r(s')$.

</div>

<div class="theorem">

**Theorem 4.5** (Separating-family criterion).

<div id="thm:separating">

</div>

*Let $\mathcal{R}$ separate the points of $S$. Then the readout is complete relative to $\mathcal{R}$ if and only if $p$ is bijective.*

</div>

<div class="proof">

*Proof.* ($\Leftarrow$) If $p$ is bijective, then for any $r\colon S\to V$ the map $\bar r:=r\circ p^{-1}$ satisfies $\bar r\circ p=r$. Hence every relation whatsoever descends, in particular every member of $\mathcal{R}$.

($\Rightarrow$) Suppose every $r\in\mathcal{R}$ descends, and let $s,s'\in S$ satisfy $p(s)=p(s')$. By [Theorem 4.2](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:descent), each $r\in\mathcal{R}$ is constant on the fibers of $p$, so $r(s)=r(s')$ for every $r\in\mathcal{R}$. Since $\mathcal{R}$ separates the points of $S$, this forces $s=s'$. Hence $p$ is injective, and it is surjective by [(3)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:surjconv). ◻

</div>

[Theorem 4.5](/source-readout/source-readout-non-equivalence/descent-of-source-relations#thm:separating) gives relative completeness an operational reading, but the reading is conditional and the condition must be checked. The theorem says that a readout is source-complete exactly when it carries a family of relations that separates source states. Whether that reading is *operational* depends entirely on whether the separating family $\mathcal{R}$ has been identified as physically meaningful. An arbitrary separating family always exists ,  take $\mathcal{R}$ to be all maps $S\to\{0,1\}$, or all indicator functions of points ,  and its existence tells one nothing, since its members need not correspond to anything a theory recognizes or an experiment can access. The theorem earns its interpretation only when $\mathcal{R}$ is supplied by the physics.
