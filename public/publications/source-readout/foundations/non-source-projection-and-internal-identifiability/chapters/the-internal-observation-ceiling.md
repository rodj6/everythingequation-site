# The internal observation ceiling

<div id="sec:ceiling">

</div>

<div class="assumption">

**Assumption 7.1** (Internal-probe factorization).

<div id="ass:factorization">

</div>

Every admissible probe factors through the readout: for each $i\in I$ there is $\bar P_i\colon T_1\to Y_i$ with $$
P_i=\bar P_i\circ p .\tag{27}$$

</div>

This is an *assumption*, supplied by the model, and it is the entire engine of what follows. It says that a probe may process, compare, transform, amplify, or combine readout information in any way whatever ,  $\bar P_i$ is an arbitrary map, subject to no continuity, computability, or complexity restriction ,  but that it receives *no input from outside the readout state*. A probe coupling directly to a fiber coordinate violates [(27)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:factorprobe), and the theorem below then simply does not apply to it.

It is tempting to say that an observer “built out of Tier-1 material”, or “interacting only with Tier-1 degrees of freedom”, automatically satisfies [(27)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:factorprobe). That is an unsupported inference, and we do not make it. An observer of that description is represented by Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization) *only if the physical model independently establishes that the complete input of every admissible probe factors through $p$*. Being *called* internal, or being composed of readout-level constituents, does not by itself prove the factorization: whether some residual coupling to a fiber coordinate exists is a substantive question about the model’s dynamics and interactions, and it must be settled there, not by the label. Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization) is thus a hypothesis to be discharged, and §[10](/source-readout/non-source-projection-and-internal-identifiability/physical-instantiation-and-its-boundary#sec:physical) lists it among the things a physical instantiation must supply.

<div class="theorem">

**Theorem 7.2** (Internal identifiability limit).

<div id="thm:ceiling">

</div>

*Under Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization), $$
\sim_p\;\subseteq\;\sim_I .\tag{28}$$ Consequently:*

1.  *If $p$ is noninjective, the internal probe family does not identify the source.*

2.  *For *every* map $D\colon\mathop{\mathrm{Im}}P_I\to Z$ ,  statistic, post-processing rule, inference procedure, deterministic selector, or arbitrary function ,  and every $s,s'$ with $p(s)=p(s')$, one has $D(P_I(s))=D(P_I(s'))$.*

</div>

<div class="proof">

*Proof.* Let $p(s)=p(s')$. For every $i\in I$, using [(27)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:factorprobe), $$P_i(s)=\bar P_i(p(s))=\bar P_i(p(s'))=P_i(s').$$ Since this holds for all $i$, $P_I(s)=P_I(s')$, i.e. $s\sim_I s'$. This is [(28)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:ceiling).

(L1): if $p$ is noninjective there are $s\neq s'$ with $p(s)=p(s')$, hence $s\sim_I s'$ by [(28)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:ceiling), so $\sim_I\neq\Delta_S$ and Theorem [6.2](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#thm:identifiability)(I4) fails.

(L2): $P_I(s)=P_I(s')$ was just shown; applying the function $D$ to equal arguments yields equal values. Note that no property of $D$ beyond being a function is used ,  which is exactly why no cleverness in post-processing can evade the conclusion. ◻

</div>

<div class="corollary">

**Corollary 7.3** (No internal selector).

<div id="cor:noselector">

</div>

*If a readout fiber contains two physically inequivalent source states, then no inference procedure whose complete input factors through the readout can determine which member of that fiber was realized.*

</div>

<div class="proof">

*Proof.* Immediate from (L2) with $Z=S$ and $D$ the putative selector: it returns the same value on $s$ and on $s'$, so it is wrong on at least one of them. ◻

</div>

<div class="remark">

*Remark 44* (Exactly what this ceiling is, and is not).

<div id="rem:ceilingscope">

</div>

Five clarifications, each of which matters.

*(a) The mechanism is equality of inputs.* The obstruction in Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) arises because the probes’ *arguments* coincide: $P_I(s)$ and $P_I(s')$ are the same object. Nothing is being said about the difficulty, cost, or computability of any inference. A function of equal inputs returns equal outputs; that is all.

*(b) It is not Gödel incompleteness.* There is no self-reference, no arithmetization, no diagonalization, and no undecidable sentence anywhere in the proof. The result is an identifiability theorem in the sense of \[[9](/source-readout/non-source-projection-and-internal-identifiability/references#bib-LeCam1964), [10](/source-readout/non-source-projection-and-internal-identifiability/references#bib-Lehmann)\], and conflating it with \[[6](/source-readout/non-source-projection-and-internal-identifiability/references#bib-Goedel1931)\] is a category error.

*(c) It does not apply to a genuinely additional probe.* If some probe $P_j$ does *not* factor through $p$ ,  if it couples to the fiber coordinate ,  then Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization) fails for the enlarged family, [(28)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:ceiling) need not hold, and by Proposition [6.4](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#prop:monotone) the joint fibers may strictly shrink, possibly to the diagonal. *The ceiling is a consequence of the assumed input restriction, and it is lifted exactly by lifting that restriction.*

*(d) It is conditional on completeness of the admissible family.* Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization) asserts that *every* probe available to the observer factors through $p$. That assertion is a substantive physical claim about the model, and it can be false. Consequently Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) must *not* be inflated into a general claim that internal observers can never obtain evidence about a source. It concerns exactly those source distinctions that lie within the joint fibers of all allowed probes ,  and it says that *those* distinctions, and only those, are internally unrecoverable.

*(e) It is a <u>deterministic</u> ceiling, and does not by itself yield the statistical one.* Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) concerns deterministic probe *values* $P_i(s)$ and deterministic functions $D$ of them. What it rules out is accordingly a deterministic selector, and any post-processing, statistic, or inference rule *applied to those probe values*. It does *not*, on its own, license the far stronger assertions that “no test” or “no amount of data” can discriminate. Those are claims about *outcome laws*, and they require the separate hypothesis $\mu_s=\mathsf M_{p(s)}$ of [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor) ,  namely, that the *complete data law* of the experiment factors through $p$. One may of course *stipulate* that the complete experiment is itself one of the admissible probes, in which case [(27)](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#eq:factorprobe) for that probe *is* [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor); but that identification is an additional modelling step, and must be made explicitly. Absent it, a random experiment whose law depends on the fiber coordinate is perfectly compatible with Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization) holding for every deterministic probe. The two ceilings are stated separately, and proved from separate hypotheses, in Theorem [7.2](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#thm:ceiling) and Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling); see also Proposition [8.6](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#prop:relations)(R3).

</div>
