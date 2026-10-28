# Descent of observable functionals

<div id="sec:functionals">

</div>

<div class="definition">

**Definition 3.1** (Exact observability of a functional).

<div id="def:obsfun">

</div>

Let $V$ be a set and $A:\mathcal{H}_{\mathrm{src}}\to V$. We say $A$ is *exactly observable through $K$* if there exists $\bar A:\operatorname{Ran}K\to V$ with $$
A=\bar A\circ K .\tag{3.1}$$

</div>

<div class="proposition">

**Proposition 3.2** (Functional descent).

<div id="prop:descent">

</div>

*$A$ is exactly observable through $K$ if and only if $$
A(\Psi+n)=A(\Psi)
\qquad\text{for all }\Psi\in\mathcal{H}_{\mathrm{src}},\ n\in\ker K .\tag{3.2}$$ When [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) holds, $\bar A$ is unique.*

</div>

<div class="proof">

*Proof.* If [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) holds and $n\in\ker K$, then $A(\Psi+n)=\bar A(K\Psi+Kn)=\bar A(K\Psi)=A(\Psi)$, which is [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant).

Conversely, assume [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant). Given $\omega\in\operatorname{Ran}K$, choose any $\Psi$ with $K\Psi=\omega$ and set $\bar A(\omega):=A(\Psi)$. If $K\Psi=K\Psi'=\omega$ then $\Psi'=\Psi+n$ with $n\in\ker K$, so [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) gives $A(\Psi')=A(\Psi)$; the definition is therefore independent of the chosen preimage, and [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) holds by construction. Uniqueness is forced because $K$ is onto $\operatorname{Ran}K$: any $\bar A'$ satisfying [(3.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:factor) agrees with $\bar A$ at every $\omega=K\Psi$. ◻

</div>

Proposition [3.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#prop:descent) is the fiberwise descent statement of \[[22](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Paper1)\] specialized to the affine fibers $\Psi+\ker K$; we have proved it here so that no external result is load-bearing.

<div class="corollary">

**Corollary 3.3** (Linear descent and the adjoint).

<div id="cor:lindescent">

</div>

*Let $A\in\mathcal{H}_{\mathrm{src}}^{*}$ be a continuous linear functional. Then $A$ descends through $K$, in the sense of Definition [3.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#def:obsfun), if and only if $$
A|_{\ker K}=0 .\tag{3.3}$$ Identifying $\mathcal{H}_{\mathrm{src}}^{*}\cong\mathcal{H}_{\mathrm{src}}$ by the Riesz representation $A=\langle a , \cdot \rangle$, condition [(3.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:Avanish) says $a\in(\ker K)^{\perp}$, and $$
(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}} .\tag{3.4}$$*

</div>

<div class="proof">

*Proof.* Since $A$ is linear, [(3.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:constant) reads $A(n)=0$ for all $n\in\ker K$, which is [(3.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:Avanish). For [(3.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:perp): $\Psi\in\ker K$ iff $K\Psi=0$ iff $\langle K\Psi , \omega \rangle=0$ for all $\omega\in\mathcal{H}_{\mathrm{obs}}$ iff $\langle \Psi , K^{*}\omega \rangle=0$ for all $\omega$, i.e. iff $\Psi\perp\operatorname{Ran}K^{*}$. Hence $\ker K=(\operatorname{Ran}K^{*})^{\perp}$, and taking orthogonal complements and using $M^{\perp\perp}=\overline{M}$ for a subspace $M$ gives $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$. ◻

</div>

It is essential to notice what Definition [3.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#def:obsfun) does and does not require. It requires a *factorization*, $A=\bar A\circ K$, and nothing more: $\bar A$ is a map on the *set* $\operatorname{Ran}K$, and no continuity of $\bar A$ with respect to any particular norm on $\operatorname{Ran}K$ has been demanded. Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent) therefore characterizes *algebraic* descent. For a continuous linear $A=\langle a , \cdot \rangle$ with $a\in(\ker K)^{\perp}$, the induced $\bar A$ is automatically continuous in the *transported quotient norm* $\lVert\cdot\rVert_{\sharp}$ of Remark [2.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#rem:twonorms) (because $\bar A\circ\widetilde{K}$ is the continuous functional $[\Psi]\mapsto\langle a , \Psi \rangle$ on the Hilbert space $\mathcal{H}_{K}$). But continuity in the *inherited* observable norm, the norm an experimenter actually has access to on $\mathcal{H}_{\mathrm{obs}}$, is a strictly stronger demand, and it is governed by a different, sharper condition.

<div class="theorem">

**Theorem 3.4** (Stable observability of a linear functional).

<div id="thm:stableobs">

</div>

*Let $A=\langle a , \cdot \rangle\in\mathcal{H}_{\mathrm{src}}^{*}$ with $a\in(\ker K)^{\perp}$, so that $A$ descends algebraically, with unique $\bar A:\operatorname{Ran}K\to\mathbb{C}$ satisfying $A=\bar A\circ K$. Then $$
\bar A\ \text{is bounded on }(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})
\qquad\Longleftrightarrow\qquad
a\in\operatorname{Ran}K^{*} ,\tag{3.5}$$ i.e. if and only if there exists an *exact* observable probe $\omega\in\mathcal{H}_{\mathrm{obs}}$ with $a=K^{*}\omega$. In that case $\bar A$ extends to the bounded functional $\langle \omega , \cdot \rangle$ on all of $\mathcal{H}_{\mathrm{obs}}$, and $A(\Psi)=\langle \omega , K\Psi \rangle_{\mathcal{H}_{\mathrm{obs}}}$ for every $\Psi$: the source quantity is read off the observable state by a bounded measurement.*

</div>

<div class="proof">

*Proof.* ($\Leftarrow$) Suppose $a=K^{*}\omega$ with $\omega\in\mathcal{H}_{\mathrm{obs}}$. Then for every $\Psi$, $$A(\Psi)=\langle a , \Psi \rangle=\langle K^{*}\omega , \Psi \rangle=\langle \omega , K\Psi \rangle_{\mathcal{H}_{\mathrm{obs}}},$$ so $\bar A(y)=\langle \omega , y \rangle_{\mathcal{H}_{\mathrm{obs}}}$ for $y\in\operatorname{Ran}K$, which satisfies $\lvert\bar A(y)\rvert\le\lVert\omega\rVert\,\lVert y\rVert_{\mathcal{H}_{\mathrm{obs}}}$ and is therefore bounded in the inherited norm.

($\Rightarrow$) Suppose $\bar A$ is bounded on $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$, say $\lvert\bar A(y)\rvert\le M\lVert y\rVert_{\mathcal{H}_{\mathrm{obs}}}$ for all $y\in\operatorname{Ran}K$. Since $\operatorname{Ran}K$ is a subspace of $\mathcal{H}_{\mathrm{obs}}$, the Hahn–Banach theorem \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Cor. 1.2\] extends $\bar A$ to a bounded linear functional $\Lambda$ on all of $\mathcal{H}_{\mathrm{obs}}$ with the same norm. By the Riesz representation theorem there is $\omega\in\mathcal{H}_{\mathrm{obs}}$ with $\Lambda=\langle \omega , \cdot \rangle$. Then for every $\Psi\in\mathcal{H}_{\mathrm{src}}$, $$\langle a , \Psi \rangle=A(\Psi)=\bar A(K\Psi)=\Lambda(K\Psi)=\langle \omega , K\Psi \rangle
=\langle K^{*}\omega , \Psi \rangle ,$$ so $\langle a-K^{*}\omega , \Psi \rangle=0$ for all $\Psi$, i.e. $a=K^{*}\omega\in\operatorname{Ran}K^{*}$. ◻

</div>

<div class="remark">

*Remark 10* (Algebraic descent versus stable readout: exact preimage and closure).

<div id="rem:closure">

</div>

Equation [(3.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#eq:perp) contains a closure and one must not delete it, and Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs) says exactly what the closure costs. Combining the two:

- $a\in\overline{\operatorname{Ran}K^{*}}=(\ker K)^{\perp}$ $\iff$ $A$ descends *algebraically* through $K$ (Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent)), with $\bar A$ continuous in the transported quotient norm;

- $a\in\operatorname{Ran}K^{*}$ $\iff$ $A$ descends to a functional that is *bounded in the inherited observable norm* (Theorem [3.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#thm:stableobs)).

The two conditions coincide precisely when $\operatorname{Ran}K^{*}$ is closed, which by the closed range theorem is equivalent to $\operatorname{Ran}K$ being closed \[[1](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Brezis), Thm. 2.19\], the same dichotomy as in Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient). So for a compact $K$ with infinite-dimensional range, for instance Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal), $\operatorname{Ran}K^{*}$ is dense in $(\ker K)^{\perp}$ but *proper*, and there exist source functionals which descend perfectly well as maps of the observable state, yet possess no exact representing probe $\omega$ with $a=K^{*}\omega$. Such a functional is a limit of representable ones, but the approximating probes $\omega_{k}$ have $\lVert\omega_{k}\rVert\to\infty$: reading the quantity off the observable state amplifies observational error without bound. This is (D2) reappearing on the dual side. Accordingly we say that the elements of $(\ker K)^{\perp}$ are the *observable* linear source directions, and reserve *stably observable* for those in $\operatorname{Ran}K^{*}$; the phrase should never be read as asserting inherited-readout stability where only algebraic descent has been established.

</div>
