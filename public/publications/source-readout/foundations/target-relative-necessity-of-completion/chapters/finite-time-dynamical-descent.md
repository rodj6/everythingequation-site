# Finite-time dynamical descent

<div id="sec:dynamics">

</div>

Our final application of the criterion concerns the question that motivates most practical coarse-graining: can the projected description evolve on its own?

## Setting

Let $\Phi_\tau\colon S\to S$ denote the source evolution through elapsed time $\tau$, assumed to be a well-defined map for the fixed $\tau$ under consideration. No group law, continuity, or reversibility is needed for what follows; $\tau$ is fixed throughout this section and we prove a finite-time statement. Let $p\colon S\to T$ be the readout as before.

<div class="definition">

**Definition 12.1** (Future-readout target).

<div id="def:future-target">

</div>

The *future-readout target* at time $\tau$ is the target $Q_\tau$ with answer set $A_{Q_\tau}=T$ and correct-answer map $$
a_\tau:=p\circ\Phi_\tau\colon S\longrightarrow T,
\qquad
a_\tau(s)=p\bigl(\Phi_\tau(s)\bigr).\tag{57}$$ In words: “given the source state now, what will the readout be after time $\tau$?”

</div>

<div class="definition">

**Definition 12.2** (Autonomous readout propagator).

<div id="def:propagator">

</div>

An *autonomous readout propagator* at time $\tau$ is a map $U_\tau\colon T\to T$ such that the projection intertwines the dynamics: $$
p\circ\Phi_\tau=U_\tau\circ p .\tag{58}$$

</div>

Existence of $U_\tau$ is precisely the statement that the readout description is dynamically closed at time $\tau$: the future readout value can be computed from the present readout value alone, without consulting the source.

## The closure criterion

<div class="theorem">

**Theorem 12.3** (Existence criterion for the autonomous propagator).

<div id="thm:closure">

</div>

*An autonomous readout propagator $U_\tau$ satisfying [(58)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:intertwine) exists if and only if $$
p(s)=p(s')
\qquad\Longrightarrow\qquad
p\bigl(\Phi_\tau(s)\bigr)=p\bigl(\Phi_\tau(s')\bigr)
\qquad\text{for all } s,s'\in S.\tag{59}$$ When it exists, $U_\tau$ is unique.*

</div>

<div class="proof">

*Proof.* Equation [(58)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:intertwine) states exactly that $a_\tau=p\circ\Phi_\tau$ factors through $p$, i.e. that the target $Q_\tau$ of [Definition 12.1](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#def:future-target) is exactly solvable from the readout with $\bar a_{Q_\tau}=U_\tau$. By [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) applied to $Q_\tau$ (with $A_{Q_\tau}=T$ and $a_{Q_\tau}=a_\tau$), such a factorization exists if and only if $a_\tau$ is constant on every fiber of $p$, which is condition [(3)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#it:imp) of that theorem and reads, after substituting $a_\tau=p\circ\Phi_\tau$, exactly as [(59)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:closure-condition). Uniqueness of $U_\tau$ is the uniqueness clause of [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability). ◻

</div>

<div class="corollary">

**Corollary 12.4** (Dynamical obstruction).

<div id="cor:dynamical-obstruction">

</div>

*Suppose there exist $s_0,s_1\in S$ with $$
p(s_0)=p(s_1)
\qquad\text{but}\qquad
p\bigl(\Phi_\tau(s_0)\bigr)\neq p\bigl(\Phi_\tau(s_1)\bigr).\tag{60}$$ Then no map $U_\tau\colon T\to T$ satisfies [(58)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:intertwine). Concretely: two source states with the *same present readout* but *different future readouts* cannot both be reproduced by any deterministic evolution law acting on the present readout state alone.*

</div>

<div class="proof">

*Proof.* Apply [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction) to the target $Q_\tau$: [(60)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:dyn-obstruction) is precisely [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp) for $a_\tau$. For any candidate $U_\tau$, the value $U_\tau(t)$ at the common readout $t=p(s_0)=p(s_1)$ is a single element of $T$ and hence cannot equal both $p(\Phi_\tau(s_0))$ and $p(\Phi_\tau(s_1))$. ◻

</div>

## Prediction at time $\tau$ versus autonomous evolution

<div id="subsec:predict-vs-evolve">

</div>

The general theory of [Section 7](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#sec:separation), [Section 8](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#sec:joint) applies to $Q_\tau$ verbatim, and it is worth stating exactly what it delivers ,  and, just as importantly, what it does not.

By [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation), any readout extension $e\colon S\to E$ sufficient for $Q_\tau$ must separate the obstructing pair $s_0,s_1$ of [(60)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:dyn-obstruction). By [Proposition 8.2](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#prop:EQ-sufficient), [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal), the coarsest such extension is the joint target image $$
E_{Q_\tau}=\operatorname{Im}\bigl(p,\;p\circ\Phi_\tau\bigr)\subseteq T\times T,\tag{61}$$ the present readout paired with the correct future readout at time $\tau$.

<div class="proposition">

**Proposition 12.5** (What $Q_\tau$-sufficiency provides).

<div id="prop:qtau-provides">

</div>

*Let $e\colon S\to E$ be a readout extension sufficient for $Q_\tau$. Then there is a unique map $$
b_\tau\colon E\longrightarrow T
\qquad\text{with}\qquad
p\circ\Phi_\tau=b_\tau\circ e ,\tag{62}$$ so that the $E$-value at the present instant determines the readout value at time $\tau$.*

</div>

<div class="proof">

*Proof.* This is [Definition 6.3](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:sufficient) and [Lemma 6.5](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:sufficiency-criterion) applied to $Q_\tau$, whose answer set is $A_{Q_\tau}=T$ and whose correct-answer map is $a_\tau=p\circ\Phi_\tau$. ◻

</div>

[Proposition 12.5](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:qtau-provides) is a statement about *prediction of a $T$-valued quantity at the one specified time $\tau$*. It says the enriched present state determines the future readout. It does *not* say that the enriched state evolves ,  that is, it produces a map $E\to T$, not a map $E\to E$, and there is no sense in which [(62)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:btau) can be iterated. Autonomous evolution on $E$ is a strictly stronger requirement, and it is governed by its own descent condition.

<div class="definition">

**Definition 12.6** (Autonomous evolution on an extension).

<div id="def:autonomous-E">

</div>

Let $e\colon S\to E$ be a readout extension. An *autonomous evolution on $E$ at time $\tau$* is a map $V_\tau\colon E\to E$ satisfying $$
e\circ\Phi_\tau=V_\tau\circ e .\tag{63}$$

</div>

<div class="proposition">

**Proposition 12.7** (Criterion for autonomous evolution on $E$).

<div id="prop:autonomous-criterion">

</div>

*A map $V_\tau$ satisfying [(63)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent) exists if and only if $$
e(s)=e(s')
\qquad\Longrightarrow\qquad
e\bigl(\Phi_\tau(s)\bigr)=e\bigl(\Phi_\tau(s')\bigr)
\qquad\text{for all } s,s'\in S,\tag{64}$$ and it is then unique.*

</div>

<div class="proof">

*Proof.* Apply [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) to the surjection $e$ and the map $e\circ\Phi_\tau\colon
S\to E$: a factorization $e\circ\Phi_\tau=V_\tau\circ e$ exists iff $e\circ\Phi_\tau$ is constant on the fibers of $e$, which is [(64)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent-condition), and $V_\tau$ is then unique by the uniqueness clause of that theorem. ◻

</div>

Conditions [(62)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:btau) and [(63)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent) are different requirements, and the implication between them runs in exactly one direction.

<div class="proposition">

**Proposition 12.8** (Autonomous evolution implies $Q_\tau$-sufficiency).

<div id="prop:auto-implies-suff">

</div>

*Let $e\colon S\to E$ be a readout extension, with structure map $u\colon E\to T$ satisfying $p=u\circ e$. If $e$ admits an autonomous evolution $V_\tau\colon E\to E$ at time $\tau$, in the sense of [(63)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent), then $e$ is sufficient for $Q_\tau$, and one may take $$
b_\tau=u\circ V_\tau .\tag{65}$$*

</div>

<div class="proof">

*Proof.* Using $p=u\circ e$ and then [(63)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent), $$p\circ\Phi_\tau
=u\circ e\circ\Phi_\tau
=u\circ V_\tau\circ e
=\bigl(u\circ V_\tau\bigr)\circ e ,$$ which is [(62)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:btau) with $b_\tau:=u\circ V_\tau\colon E\to T$. Hence $a_\tau=p\circ\Phi_\tau$ factors through $e$, and $e$ is $Q_\tau$-sufficient by [Definition 6.3](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:sufficient). ◻

</div>

The converse fails in general. Sufficiency for $Q_\tau$ constrains $e$ to determine the future *readout* ,  a $T$-valued quantity ,  whereas [(64)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent-condition) constrains $e$ to determine the future *$E$-value*, which is in general a finer quantity, since $e$ refines $p$ ([Lemma 6.2](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:extension-basic) [(3)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:refine)). Knowing where the present $E$-state sends the time-$\tau$ readout says nothing about where it sends the time-$\tau$ $E$-state. The following finite example shows that the gap is real and not merely unproved.

<div class="example">

**Example 12.9** (A $Q_\tau$-sufficient extension admitting no autonomous evolution).

<div id="ex:suff-not-autonomous">

</div>

Let $$S=\{a,b,c,d\},
\qquad
T=\{*\},$$ with $p\colon S\to T$ the constant readout, and let $$E=\{x,y,z\},
\qquad
e(a)=e(b)=x,
\quad
e(c)=y,
\quad
e(d)=z .$$ Then $e$ is surjective and $p=u\circ e$ for the constant map $u\colon E\to T$, so $e$ is a readout extension. Define a source evolution $\Phi_\tau\colon S\to S$ by $$\Phi_\tau(a)=c,
\qquad
\Phi_\tau(b)=d,$$ with $\Phi_\tau(c)$ and $\Phi_\tau(d)$ chosen arbitrarily ,  say $\Phi_\tau(c)=c$ and $\Phi_\tau(d)=d$.

Since $p$ is constant, the composite $p\circ\Phi_\tau$ is constant, hence constant on every fiber of $e$; by [Lemma 6.5](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:sufficiency-criterion) it factors through $e$, so $e$ is $Q_\tau$-sufficient. (Concretely, $b_\tau\colon E\to T$ is the constant map to $*$.)

Nevertheless $e$ admits no autonomous evolution. We have $e(a)=e(b)=x$, so $a$ and $b$ lie in a common fiber of $e$, while $$e\bigl(\Phi_\tau(a)\bigr)=e(c)=y
\;\neq\;
z=e(d)=e\bigl(\Phi_\tau(b)\bigr).$$ Thus $e\circ\Phi_\tau$ is *not* constant on the fiber $e^{-1}(x)$, so [(64)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent-condition) fails, and by [Proposition 12.7](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:autonomous-criterion) no map $V_\tau\colon E\to E$ satisfies $e\circ\Phi_\tau=V_\tau\circ e$. Directly: such a $V_\tau$ would have to send the single element $x$ to both $y$ and $z$.

</div>

So $Q_\tau$-sufficiency does not imply autonomous $E$-evolution, and autonomy is strictly stronger in general, with $Q_\tau$-sufficiency the weaker consequence of it established in [Proposition 12.8](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:auto-implies-suff).

<div class="remark">

**Remark 12.10** (What $E_{Q_\tau}$ is, and what it is not).

<div id="rem:EQtau-scope">

</div>

Accordingly, the joint target image [(61)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:EQtau) should be described in exactly one way: it is the universally coarsest completion of the readout *for predicting the $T$-valued readout at the fixed time $\tau$*. By [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) every $Q_\tau$-sufficient extension maps onto it, and by [Proposition 8.2](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#prop:EQ-sufficient) it is itself sufficient for that prediction.

Its $Q_\tau$-sufficiency does not by itself make it an autonomous state space, supply an iterable dynamics, or furnish a semigroup completion. Nothing proved here supplies a map $E_{Q_\tau}\to E_{Q_\tau}$ satisfying [(63)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent), and the results of this section do not assert one. By [Proposition 12.8](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:auto-implies-suff), autonomy would be a strictly stronger property than the $Q_\tau$-sufficiency that [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) establishes for $E_{Q_\tau}$, and [Example 12.9](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#ex:suff-not-autonomous) shows that the two can come apart; the stronger property is not established here.

This leaves the question open rather than settled against it. In a particular system, $E_{Q_\tau}$ may or may not happen to admit an autonomous $V_\tau$; what does not hold is that any such evolution *follows* from the universal construction of [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal). Whether a given extension admits an autonomous $V_\tau$, whether such extensions can be chosen compatibly across a range of times $\tau$, and whether the resulting family composes as a semigroup are all questions beyond [Theorem 12.3](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#thm:closure), [Proposition 12.7](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:autonomous-criterion), which are finite-time factorization statements at a single fixed $\tau$. Those questions belong to \[[10](/source-readout/target-relative-necessity-of-completion/references#bib-ShadowV)\] and are not addressed here.

</div>

## What the obstruction does and does not license

[Corollary 12.4](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#cor:dynamical-obstruction) rules out one thing precisely: a deterministic autonomous law on $T$ alone. It is silent about what to do instead, and it is worth being explicit about the available modeling responses, none of which is an automatic consequence of the theorem.

- *State refinement.* One may replace $T$ by a $Q_\tau$-sufficient extension $E$, on which, by [Proposition 12.5](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#prop:qtau-provides), a deterministic *prediction* $b_\tau\colon E\to T$ of the time-$\tau$ readout does exist. Obtaining a deterministic *evolution* on $E$ is a further demand, requiring [(64)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:E-descent-condition), and is not delivered by $Q_\tau$-sufficiency. Whether an extension meeting either condition is available in practice, and whether its variables are measurable, are separate questions the theorem does not settle. What the theorem does settle is a lower bound on what $E$ must distinguish.

- *Memory.* One may allow the evolution law to depend on the past history of the readout rather than on its instantaneous value. This changes the shape of the modeling problem ,  the state is now a trajectory segment, not a point of $T$ ,  and whether the history supplies the missing distinctions is not settled by [Theorem 12.3](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#thm:closure), which concerns the instantaneous readout. Projection-operator methods in nonequilibrium statistical mechanics \[[12](/source-readout/target-relative-necessity-of-completion/references#bib-Zwanzig), [5](/source-readout/target-relative-necessity-of-completion/references#bib-Grabert)\] are the classical setting in which such history-dependent reduced equations arise; the construction of exact memory equations for the present framework belongs to \[[10](/source-readout/target-relative-necessity-of-completion/references#bib-ShadowV)\] and is not developed here.

- *Probabilistic modeling.* One may posit a probability law and predict a distribution over future readouts. See [Remark 12.11](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#rem:stochastic).

- *Domain restriction.* One may restrict $S$ to a subset on which [(59)](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#eq:closure-condition) does hold, obtaining an exactly closed law on the restricted problem. This is legitimate and often useful, but it is a change of the source domain, and the theorem then applies to the restricted problem rather than the original one.

<div class="remark">

**Remark 12.11** (Stochasticity is not exact trajectory recovery).

<div id="rem:stochastic">

</div>

It is sometimes suggested that the obstruction of [Corollary 12.4](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#cor:dynamical-obstruction) is dissolved by making the reduced law stochastic. It is not, and the reason is the one already given in [Remark 5.6](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#rem:not-probability). Suppose $p(s_0)=p(s_1)=t$ but the futures differ. A stochastic law on $T$ assigns to $t$ a distribution over $T$. If that law is intended not to exclude any source-compatible future ,  and a law that did exclude one would be predicting the impossibility of something that can in fact occur ,  then its support must contain both $p(\Phi_\tau(s_0))$ and $p(\Phi_\tau(s_1))$. It therefore does not tell us which of the two *actually occurs*, and if the system is in fact in state $s_0$, the stochastic law has not predicted the realized trajectory; it has predicted a spread that contains it. This is a strictly weaker claim, and it answers a different target ,  “what is the distribution of the future readout, given the present readout *and a specified law on the fibers*?” ,  than the one we posed.

Note also the italicized clause. Even the distributional target requires input the readout does not contain: a probability law on the fibers $F_t$, which is a piece of source-level information. Absent such a law, the most that can be said from the readout alone is the set-valued statement of [Theorem 5.4](/source-readout/target-relative-necessity-of-completion/minimal-sound-uncertainty-without-completion#thm:minimal-sound), namely that the future readout lies in $\mathsf{A}_{Q_\tau}(t)=p\bigl(\Phi_\tau(F_t)\bigr)$, and that this set is the least sound prediction available. Stochastic modeling is a legitimate and powerful response to [Corollary 12.4](/source-readout/target-relative-necessity-of-completion/finite-time-dynamical-descent#cor:dynamical-obstruction); it is not a refutation of it, and it should not be presented as recovering the realized state.

</div>
