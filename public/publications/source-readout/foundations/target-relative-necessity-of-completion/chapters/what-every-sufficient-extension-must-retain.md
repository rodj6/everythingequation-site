# What every sufficient extension must retain

<div id="sec:separation">

</div>

<div class="theorem">

**Theorem 7.1** (Necessary separation).

<div id="thm:separation">

</div>

*Let $e\colon S\to E$ be any $Q$-sufficient readout extension. Then $e$ separates every pair of source states with different correct answers: $$
a_Q(s_0)\neq a_Q(s_1)
\qquad\Longrightarrow\qquad
e(s_0)\neq e(s_1),
\qquad s_0,s_1\in S.\tag{17}$$*

</div>

<div class="proof">

*Proof.* We prove the contrapositive. Suppose $e(s_0)=e(s_1)=:x$. By $Q$-sufficiency there is $b\colon E\to A_Q$ with $a_Q=b\circ e$. Then $$a_Q(s_0)=b\bigl(e(s_0)\bigr)=b(x)=b\bigl(e(s_1)\bigr)=a_Q(s_1),$$ since $b(x)$ is a single element of $A_Q$. Hence $e(s_0)=e(s_1)\implies a_Q(s_0)=a_Q(s_1)$, which is [(17)](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#eq:separation). ◻

</div>

<div class="corollary">

**Corollary 7.2** (The critical case: fiber-mates with different answers).

<div id="cor:critical-pair">

</div>

*Suppose $s_0,s_1\in S$ satisfy $p(s_0)=p(s_1)$ and $a_Q(s_0)\neq a_Q(s_1)$ ,  that is, they form an obstructing pair in the sense of [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp). Then every $Q$-sufficient readout extension $e$ satisfies $e(s_0)\neq e(s_1)$, while $u(e(s_0))=u(e(s_1))$. In particular $e$ is strictly finer than $p$: the extension is not merely allowed to distinguish $s_0$ from $s_1$, it is *compelled* to, and it must do so while remaining compatible with the readout value they share.*

</div>

<div class="proof">

*Proof.* The separation $e(s_0)\neq e(s_1)$ is [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation). The identity $u(e(s_i))=p(s_i)$ from [(15)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#eq:extension), together with $p(s_0)=p(s_1)$, gives $u(e(s_0))=u(e(s_1))$. Since $e(s_0)\neq e(s_1)$ but $p$ does not separate $s_0,s_1$, the partition $\sim_e$ is a strict refinement of $\sim_p$. ◻

</div>

It is useful to restate [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) in partition language, where its content is transparent. Let $\sim_e$, $\sim_p$, and $\sim_{a_Q}$ denote the equivalence relations on $S$ induced respectively by $e$, by $p$, and by $a_Q$ (so $s\sim_{a_Q}s'$ iff $a_Q(s)=a_Q(s')$). [Lemma 6.2](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:extension-basic) [(3)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:refine) says $\sim_e\;\subseteq\;\sim_p$, and [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) says $\sim_e\;\subseteq\;\sim_{a_Q}$. Thus:

> *A readout extension is sufficient for $Q$ precisely when its induced partition refines both the readout partition and the answer partition.*

Indeed the converse of [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) holds as well and is worth recording, since together they characterize sufficiency exactly.

<div class="proposition">

**Proposition 7.3** (Separation characterizes sufficiency).

<div id="prop:separation-iff">

</div>

*A readout extension $e\colon S\to E$ is $Q$-sufficient if and only if [(17)](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#eq:separation) holds.*

</div>

<div class="proof">

*Proof.* Necessity is [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation). For sufficiency, assume [(17)](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#eq:separation). Its contrapositive reads $e(s)=e(s')\implies a_Q(s)=a_Q(s')$, i.e. $a_Q$ is constant on every fiber of $e$. By [Lemma 6.5](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:sufficiency-criterion), $e$ is $Q$-sufficient. ◻

</div>

We emphasize that [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) does *not* say that $e$ must separate every pair of distinct source states, i.e. that $e$ must be injective, i.e. that the source must be reconstructed. It says only that $e$ must separate pairs *whose answers differ*. Pairs with equal answers may be freely collapsed. That is the loophole that [Section 8](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#sec:joint) exploits to construct a completion that is often dramatically smaller than $S$, and it is why a target-relative theory of completion is not a disguised demand for full reconstruction.
