# The exact observable quotient

<div id="sec:quotient">

</div>

<div class="assumption">

**Assumption 2.1**.

<div id="ass:K">

</div>

$\mathcal{H}_{\mathrm{src}}$ and $\mathcal{H}_{\mathrm{obs}}$ are Hilbert spaces and $K\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$.

</div>

<div class="definition">

**Definition 2.2** (Observational equivalence).

<div id="def:equiv">

</div>

For $\Psi,\Psi'\in\mathcal{H}_{\mathrm{src}}$ set $$
\Psi\sim_{K}\Psi'
\quad:\Longleftrightarrow\quad
K\Psi=K\Psi'
\quad\Longleftrightarrow\quad
\Psi-\Psi'\in\ker K .\tag{2.1}$$

</div>

Since $K$ is continuous, $N:=\ker K$ is a closed subspace of $\mathcal{H}_{\mathrm{src}}$. The quotient vector space $$
\mathcal{H}_{K}:=\mathcal{H}_{\mathrm{src}}/\ker K\tag{2.2}$$ therefore carries the quotient norm $$
\bigl\lVert[\Psi]\bigr\rVert_{K}:=\inf_{n\in\ker K}\lVert\Psi+n\rVert_{\mathcal{H}_{\mathrm{src}}}
=\operatorname{dist}\bigl(\Psi,\ker K\bigr),\tag{2.3}$$ and $(\mathcal{H}_{K},\lVert\cdot\rVert_{K})$ is a Hilbert space: the canonical map $(\ker K)^{\perp}\to\mathcal{H}_{K}$, $\Psi\mapsto[\Psi]$, is a linear bijection, and it is isometric because the infimum in [(2.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:qnorm) is attained at the orthogonal projection of $\Psi$ onto $(\ker K)^{\perp}$. Thus the quotient norm is induced by the inner product $\langle [\Psi] , [\Psi'] \rangle_{K}:=\langle \Pi\Psi , \Pi\Psi' \rangle_{\mathcal{H}_{\mathrm{src}}}$, where $\Pi$ is the orthogonal projection onto $(\ker K)^{\perp}$, and completeness is inherited from that of the closed subspace $(\ker K)^{\perp}$.

The *exact observable state* associated with a source state $\Psi$ is the coset $$
[\Psi]_{K}=\Psi+\ker K .\tag{2.4}$$ It is essential to the logic of what follows that the quotient distinguishes no representative within this coset. The orthogonal representative $\Pi\Psi$ is a choice made by the ambient inner product of $\mathcal{H}_{\mathrm{src}}$, not by the readout.

<div class="theorem">

**Theorem 2.3** (Observable quotient theorem).

<div id="thm:quotient">

</div>

*Under Assumption [2.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#ass:K), the map $$
\widetilde{K}:\mathcal{H}_{K}\longrightarrow\operatorname{Ran}K,
\qquad
\widetilde{K}[\Psi]:=K\Psi,\tag{2.5}$$ is well defined, linear, bijective, and bounded, with $\lVert\widetilde{K}\rVert_{\mathrm{op}}=\lVert K\rVert_{\mathrm{op}}$, where $\operatorname{Ran}K$ carries the norm inherited from $\mathcal{H}_{\mathrm{obs}}$. Moreover the following are equivalent:*

1.  *$\widetilde{K}^{-1}:\operatorname{Ran}K\to\mathcal{H}_{K}$ is bounded when $\operatorname{Ran}K$ carries the inherited norm;*

2.  *$\operatorname{Ran}K$ is closed in $\mathcal{H}_{\mathrm{obs}}$;*

3.  *there exists $c>0$ with $\lVert K\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}\ge c\,\operatorname{dist}(\Psi,\ker K)$ for all $\Psi\in\mathcal{H}_{\mathrm{src}}$.*

</div>

<div class="proof">

*Proof.* *Well-definedness and bijectivity.* If $[\Psi]=[\Psi']$ then $\Psi-\Psi'\in\ker K$, so $K\Psi=K\Psi'$; hence [(2.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:Ktilde) does not depend on the representative. Linearity is immediate. Surjectivity onto $\operatorname{Ran}K$ holds by definition of the range. If $\widetilde{K}[\Psi]=0$ then $K\Psi=0$, i.e. $\Psi\in\ker K$, i.e. $[\Psi]=0$; hence $\widetilde{K}$ is injective.

*Boundedness.* For every $n\in\ker K$, $$\lVert\widetilde{K}[\Psi]\rVert_{\mathcal{H}_{\mathrm{obs}}}=\lVert K\Psi\rVert=\lVert K(\Psi+n)\rVert
\le\lVert K\rVert_{\mathrm{op}}\,\lVert\Psi+n\rVert_{\mathcal{H}_{\mathrm{src}}}.$$ Taking the infimum over $n\in\ker K$ gives $\lVert\widetilde{K}[\Psi]\rVert\le\lVert K\rVert_{\mathrm{op}}\lVert[\Psi]\rVert_{K}$, so $\lVert\widetilde{K}\rVert_{\mathrm{op}}\le\lVert K\rVert_{\mathrm{op}}$. Conversely $\lVert K\Psi\rVert=\lVert\widetilde{K}[\Psi]\rVert\le\lVert\widetilde{K}\rVert_{\mathrm{op}}\lVert[\Psi]\rVert_{K}
\le\lVert\widetilde{K}\rVert_{\mathrm{op}}\lVert\Psi\rVert$, so the two operator norms coincide.

*(1)$\Rightarrow$(2).* Suppose $\lVert\widetilde{K}^{-1}\rVert_{\mathrm{op}}=:M<\infty$. Then $\widetilde{K}$ is a linear homeomorphism from the complete space $\mathcal{H}_{K}$ onto $\operatorname{Ran}K$ with its inherited norm; hence $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ is complete. A complete subspace of a normed space is closed, so $\operatorname{Ran}K$ is closed in $\mathcal{H}_{\mathrm{obs}}$.

*(2)$\Rightarrow$(1).* If $\operatorname{Ran}K$ is closed in the Hilbert space $\mathcal{H}_{\mathrm{obs}}$, then $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ is itself a Banach space. Since $\widetilde{K}$ is a bounded linear bijection between the Banach spaces $\mathcal{H}_{K}$ and $\operatorname{Ran}K$, the bounded inverse theorem \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Cor. 2.7\] yields boundedness of $\widetilde{K}^{-1}$.

*(1)$\Leftrightarrow$(3).* Statement (1) says exactly that there is $M<\infty$ with $\lVert[\Psi]\rVert_{K}\le M\lVert K\Psi\rVert$ for all $\Psi$; by [(2.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:qnorm) this is (3) with $c=1/M$. ◻

</div>

<div class="remark">

*Remark 4* (The two norms on $\operatorname{Ran}K$).

<div id="rem:twonorms">

</div>

Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient) always allows us to *transport* the quotient norm to $\operatorname{Ran}K$ by declaring $\lVert K\Psi\rVert_{\sharp}:=\lVert[\Psi]\rVert_{K}$; with this transported norm $\widetilde{K}$ is by construction an isometric isomorphism, and $(\operatorname{Ran}K,\lVert\cdot\rVert_{\sharp})$ is a Hilbert space. What is *not* generally true is that $\lVert\cdot\rVert_{\sharp}$ coincides with, or is even equivalent to, the norm inherited from $\mathcal{H}_{\mathrm{obs}}$. The inequality $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}\le\lVert K\rVert_{\mathrm{op}}
\lVert\cdot\rVert_{\sharp}$ always holds on $\operatorname{Ran}K$; the reverse inequality holds, with some constant, exactly in the closed-range case. We therefore never write $\mathcal{H}_{K}\cong\operatorname{Ran}K$ without saying which norm $\operatorname{Ran}K$ carries. Every later statement about topologies on the observable side is subject to this distinction.

</div>

<div class="corollary">

**Corollary 2.5** (Exact loss criterion).

<div id="cor:loss">

</div>

*The observation map $K$ loses exact source distinctions, i.e. there exist $\Psi\neq\Psi'$ with $\Psi\sim_{K}\Psi'$, if and only if $\ker K\neq\{0\}$. If $\ker K=\{0\}$, then $K$ is injective and the source state is uniquely determined by its readout, *even if* $\widetilde{K}^{-1}=K^{-1}$ is unbounded on $\operatorname{Ran}K$.*

</div>

<div class="proof">

*Proof.* Immediate from [(2.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#eq:equiv): $\Psi\sim_K\Psi'$ with $\Psi\neq\Psi'$ iff $\Psi-\Psi'\in\ker K\setminus\{0\}$. The second sentence is the content of Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient): injectivity is the statement $\ker K=\{0\}$ and is logically independent of closedness of $\operatorname{Ran}K$, which is what governs boundedness of the inverse. ◻

</div>

Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss) is the formal separation of (D1) from (D2). Nonidentifiability is a statement about the kernel; instability is a statement about the range. An injective compact operator exhibits the second without the first, as we show in Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal).
