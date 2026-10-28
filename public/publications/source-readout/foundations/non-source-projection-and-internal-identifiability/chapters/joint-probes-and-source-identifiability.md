# Joint probes and source identifiability

<div id="sec:probes">

</div>

<div class="definition">

**Definition 6.1** (Probe family and joint map).

<div id="def:probes">

</div>

Let $I$ be an index set and $P_i\colon S\to Y_i$, $i\in I$, a family of *admissible probes* ,  maps whose values an observer can in principle obtain. Define the *joint probe map* $$P_I\colon S\longrightarrow \prod_{i\in I}Y_i,\qquad P_I(s)=\bigl(P_i(s)\bigr)_{i\in I},$$ and corestrict it to its image $\mathop{\mathrm{Im}}P_I$, so that $P_I\colon S\twoheadrightarrow\mathop{\mathrm{Im}}P_I$ is surjective. Write $s\sim_{P_i}s'\iff P_i(s)=P_i(s')$ and $$\sim_I\;:=\;\bigcap_{i\in I}\sim_{P_i},$$ the *joint observational equivalence relation*. The family *identifies the source* if $P_I(s)=P_I(s')\Rightarrow s=s'$.

</div>

<div class="theorem">

**Theorem 6.2** (Joint-probe identifiability).

<div id="thm:identifiability">

</div>

*The following are equivalent.*

1.  *The probe family identifies the source.*

2.  *$P_I$ is injective.*

3.  *The probes separate the points of $S$: for all $s\neq s'$ there is $i\in I$ with $P_i(s)\neq P_i(s')$.*

4.  *$\sim_I\;=\;\Delta_S$, the diagonal (i.e. equality).*

5.  *There is a left inverse on the image: a map $R_I\colon\mathop{\mathrm{Im}}P_I\to S$ with $R_I\circ P_I=\mathop{\mathrm{id}}_S$.*

</div>

<div class="proof">

*Proof.* (I1)$\Leftrightarrow$(I2) is the definition of injectivity. (I2)$\Leftrightarrow$(I3): $P_I(s)=P_I(s')$ holds iff $P_i(s)=P_i(s')$ for all $i$; so $P_I$ is injective iff no distinct pair agrees on every probe, which is (I3). (I3)$\Leftrightarrow$(I4): $s\sim_I s'$ means $P_i(s)=P_i(s')$ for all $i$; so $\sim_I$ reduces to equality iff distinct points are separated by some probe.

(I2)$\Rightarrow$(I5). $P_I\colon S\to\mathop{\mathrm{Im}}P_I$ is injective by (I2) and surjective by corestriction, hence bijective; take $R_I:=P_I^{-1}$, which satisfies $R_I\circ P_I=\mathop{\mathrm{id}}_S$.

(I5)$\Rightarrow$(I2). If $P_I(s)=P_I(s')$ then $s=R_I(P_I(s))=R_I(P_I(s'))=s'$. ◻

</div>

<div class="corollary">

**Corollary 6.3** (Residual ambiguity).

<div id="cor:residual">

</div>

*If $\sim_I\;\neq\;\Delta_S$, then the maximally identifiable object from the probe family is the quotient $$
S/\!\sim_I\;\;\xrightarrow{\ \cong\ }\;\;\mathop{\mathrm{Im}}P_I ,\tag{25}$$ the bijection being induced by $P_I$. No rule whose input is the probe values alone reconstructs individual source states within a nontrivial $\sim_I$-class.*

</div>

<div class="proof">

*Proof.* $\sim_I$ is precisely the kernel pair of $P_I$: $s\sim_I s'\iff P_I(s)=P_I(s')$. Hence $[s]\mapsto P_I(s)$ is well defined and injective on $S/\!\sim_I$, and surjective onto $\mathop{\mathrm{Im}}P_I$ by corestriction, giving [(25)](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#eq:residual). For the second claim, let $D\colon\mathop{\mathrm{Im}}P_I\to Z$ be *any* map (a “rule”) and let $s\sim_I s'$. Then $D(P_I(s))=D(P_I(s'))$: the rule returns the same output on both, so it cannot name which of $s,s'$ was realized. ◻

</div>

<div class="proposition">

**Proposition 6.4** (Monotonicity under added probes).

<div id="prop:monotone">

</div>

*If $I\subseteq J$ (the probes of $I$ being among those of $J$), then $$\sim_J\;\subseteq\;\sim_I ,$$ and there is a canonical *surjection* $$
S/\!\sim_J\;\twoheadrightarrow\;S/\!\sim_I,\qquad [s]_J\longmapsto[s]_I .\tag{26}$$*

</div>

<div class="proof">

*Proof.* If $s\sim_J s'$ then $P_i(s)=P_i(s')$ for every $i\in J\supseteq I$, hence for every $i\in I$, i.e. $s\sim_I s'$. This inclusion of equivalence relations makes [(26)](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#eq:canonicalsurj) well defined ($[s]_J=[s']_J\Rightarrow s\sim_J s'\Rightarrow s\sim_I s'\Rightarrow [s]_I=[s']_I$), and it is surjective because every class $[s]_I$ is hit by $[s]_J$. ◻

</div>

<div class="remark">

*Remark 40* (Direction of [(26)](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#eq:canonicalsurj)). The map goes from the *finer* quotient to the *coarser* one. More probes means a finer partition, hence a larger quotient set, which surjects onto the smaller. There is in general no map back: information present in $S/\!\sim_J$ cannot be manufactured from $S/\!\sim_I$.

</div>

Thus *tomography is the intersection of probe fibers*: one adds probes, and the joint fiber $\{s':s'\sim_I s\}$ shrinks. Source recovery occurs precisely when that intersection reaches the diagonal. But we must be exact about what is and is not being claimed. Theorem [6.2](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#thm:identifiability) says *when* a family separates; it does not say that any particular physically available family *does*. Whether the probes an observer can actually run separate the source is a contingent fact about the model and the observer, not a theorem. The next section studies the case where, by hypothesis, they do not.
