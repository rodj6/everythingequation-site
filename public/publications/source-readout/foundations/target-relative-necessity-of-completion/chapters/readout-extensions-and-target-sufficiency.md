# Readout extensions and target sufficiency

<div id="sec:extensions">

</div>

If the readout does not determine the answer, one may enlarge the readout. The following definition says what an enlargement is, and the crucial point is that it need not be an enlargement all the way back to the source.

<div class="definition">

**Definition 6.1** (Readout extension).

<div id="def:extension">

</div>

A *readout extension* (or *enrichment*) of $p\colon S\to T$ is a surjective map $$
e\colon S\longrightarrow E
\qquad\text{together with a map}\qquad
u\colon E\longrightarrow T
\qquad\text{such that}\qquad
p=u\circ e .\tag{15}$$

</div>

<div class="lemma">

**Lemma 6.2** (Basic properties of extensions).

<div id="lem:extension-basic">

</div>

*Let $(e,E,u)$ be a readout extension of $p$. Then:*

1.  <div id="it:u-unique">

    </div>

    *$u$ is uniquely determined by $e$ and $p$;*

2.  <div id="it:u-surj">

    </div>

    *$u$ is surjective;*

3.  <div id="it:refine">

    </div>

    *the partition of $S$ into fibers of $e$ refines the partition into fibers of $p$; equivalently $e(s)=e(s')\implies p(s)=p(s')$.*

</div>

<div class="proof">

*Proof.* [(1)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:u-unique) If $u,u'$ both satisfy $p=u\circ e=u'\circ e$, let $x\in E$. By surjectivity of $e$ choose $s$ with $e(s)=x$; then $u(x)=u(e(s))=p(s)=u'(e(s))=u'(x)$.

[(2)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:u-surj) Let $t\in T$. By surjectivity of $p$ choose $s$ with $p(s)=t$; then $u(e(s))=p(s)=t$, so $t\in\operatorname{Im}(u)$.

[(3)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:refine) If $e(s)=e(s')$ then $p(s)=u(e(s))=u(e(s'))=p(s')$. ◻

</div>

[Lemma 6.2](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:extension-basic) [(3)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:refine) is the content of the word “extension”: $E$ is at least as informative as $T$, because anything determined by $E$ determines the $T$-value. Equivalently, the equivalence relation $\sim_e$ induced by $e$ is contained in $\sim_p$. But $E$ need not be $S$, and $\sim_e$ need not be equality: $E$ sits somewhere between the readout and the source, an intermediate quotient of $S$, or, in partition language, a refinement of the readout partition that need not be the discrete partition. The two extreme cases are $E=T$ (with $e=p$, $u=\operatorname{id}$), which adds nothing, and $E=S$ (with $e=\operatorname{id}$, $u=p$), which retains everything. The interesting extensions are strictly between, and the point of the next two sections is that for a given target there is a canonical one, generally far closer to $T$ than to $S$.

<div class="definition">

**Definition 6.3** (Sufficiency for a target).

<div id="def:sufficient">

</div>

A readout extension $e\colon S\to E$ is *sufficient for $Q$*, or *$Q$-sufficient*, if there exists a map $$
b\colon E\longrightarrow A_Q
\qquad\text{such that}\qquad
a_Q=b\circ e .\tag{16}$$ We also call a $Q$-sufficient readout extension a *completion of $p$ for $Q$*.

</div>

<div class="remark">

**Remark 6.4** (What “completion” means here).

<div id="rem:completion-meaning">

</div>

The word “completion” is used in [Definition 6.3](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:sufficient) in a sense that must be separated from several established and entirely different uses. It is *not* metric completion, not topological or uniform completion, not Cauchy completion, not the completion of a local ring, and not the adjunction of arbitrary hidden variables posited to restore determinism. A completion in the present sense is an *enrichment of the readout that suffices for a nominated target*: a surjection $e$ through which both $p$ and $a_Q$ factor. It is target-relative by construction; an extension may complete $p$ for one target while remaining insufficient for another. And it is constrained: [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) shows that a completion cannot be arbitrary, and [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) shows that there is a least one.

</div>

<div class="lemma">

**Lemma 6.5** (Sufficiency criterion).

<div id="lem:sufficiency-criterion">

</div>

*A readout extension $e\colon S\to E$ is $Q$-sufficient if and only if $a_Q$ is constant on every fiber of $e$; and then $b$ in [(16)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#eq:sufficiency) is unique.*

</div>

<div class="proof">

*Proof.* Apply [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) with $p$ replaced by the surjection $e$ and $T$ by $E$. ◻

</div>

Note the immediate sanity check: $e=\operatorname{id}_S$ (with $E=S$, $u=p$, $b=a_Q$) is always $Q$-sufficient, so completions exist trivially. The theorems that follow are therefore not existence theorems. They are theorems about *how little* a completion can get away with, and *what it must contain no matter what*.
