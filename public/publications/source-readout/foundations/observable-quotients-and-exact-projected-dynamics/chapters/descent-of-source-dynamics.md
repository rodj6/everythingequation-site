# Descent of source dynamics

<div id="sec:descent">

</div>

We now add dynamics. Throughout this section, $K$ satisfies Assumption [2.1](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#ass:K), $N:=\ker K$, and $\{U(t)\}_{t\ge0}$ is a $C_{0}$-semigroup of bounded operators on $\mathcal{H}_{\mathrm{src}}$ representing source evolution $\Psi(t)=U(t)\Psi_{0}$.

<div class="definition">

**Definition 5.1** (Induced observable evolution).

<div id="def:induced">

</div>

A family $\{V(t)\}_{t\ge0}$ of linear maps $\operatorname{Ran}K\to\operatorname{Ran}K$ is an *induced observable evolution* if $$
K\,U(t)=V(t)\,K
\qquad\text{on }\mathcal{H}_{\mathrm{src}},\ \text{for every }t\ge0 .\tag{5.1}$$

</div>

Equation [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) is the precise sense in which the readout “has its own law of motion”: the observable state at time $t$ is a function of the observable state at time $0$ alone, uniformly in the source state realizing it.

<div class="theorem">

**Theorem 5.2** (Semigroup descent theorem).

<div id="thm:semigroup">

</div>

*The following are equivalent.*

1.  *There exists an induced observable evolution $\{V(t)\}_{t\ge0}$ in the sense of Definition [5.1](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#def:induced).*

2.  *Observational equivalence is preserved by source evolution: $$
    U(t)\,N\subseteq N
    \qquad\text{for every }t\ge0 .\tag{5.2}$$*

*When these hold, $V(t)$ is unique, is given by $$
V(t)\,(K\Psi):=K\,U(t)\Psi
\qquad(\Psi\in\mathcal{H}_{\mathrm{src}}),\tag{5.3}$$ and satisfies the semigroup laws $V(0)=I_{\operatorname{Ran}K}$ and $V(t+s)=V(t)V(s)$. Equivalently, $$
\bar U(t)[\Psi]:=[\,U(t)\Psi\,]\tag{5.4}$$ is a well-defined one-parameter semigroup on the quotient Hilbert space $\mathcal{H}_{K}$, and $\widetilde{K}\,\bar U(t)=V(t)\,\widetilde{K}$.*

</div>

<div class="proof">

*Proof.* *(1)$\Rightarrow$(2).* Let $n\in N$ and $t\ge0$. Then $Kn=0$, so by [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine), $$K\,U(t)n=V(t)\,Kn=V(t)\,0=0,$$ i.e. $U(t)n\in\ker K=N$. As $n\in N$ and $t\ge0$ were arbitrary, [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) holds.

*(2)$\Rightarrow$(1).* Fix $t\ge0$ and suppose $K\Psi=K\Psi'$. Then $\Psi-\Psi'\in N$, so by [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) $U(t)(\Psi-\Psi')\in N$, hence $$K\,U(t)\Psi-K\,U(t)\Psi'=K\,U(t)(\Psi-\Psi')=0 .$$ Therefore the prescription [(5.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vdef) depends only on the value $K\Psi\in\operatorname{Ran}K$ and not on the representative $\Psi$; it defines a map $V(t):\operatorname{Ran}K\to\mathcal{H}_{\mathrm{obs}}$, whose image lies in $\operatorname{Ran}K$ because $V(t)K\Psi=K(U(t)\Psi)\in\operatorname{Ran}K$. Linearity of $V(t)$ follows from linearity of $K$ and $U(t)$ together with surjectivity of $K$ onto $\operatorname{Ran}K$. Equation [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) holds by construction.

*Semigroup laws and uniqueness.* $V(0)K\Psi=KU(0)\Psi=K\Psi$, so $V(0)=I$ on $\operatorname{Ran}K$. For $s,t\ge0$, $$V(t)V(s)K\Psi=V(t)K\bigl(U(s)\Psi\bigr)=K\,U(t)U(s)\Psi=K\,U(t+s)\Psi=V(t+s)K\Psi ,$$ and since $K$ is onto $\operatorname{Ran}K$ this gives $V(t)V(s)=V(t+s)$. Uniqueness is likewise forced: any $V'(t)$ satisfying [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) agrees with $V(t)$ at every point $K\Psi$ of $\operatorname{Ran}K$.

*Quotient statement.* Well-definedness of $\bar U(t)$ in [(5.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Ubar) is exactly the implication just proved: $[\Psi]=[\Psi']$ means $\Psi-\Psi'\in N$, so $U(t)\Psi-U(t)\Psi'\in N$, so $[U(t)\Psi]=[U(t)\Psi']$. The semigroup laws for $\bar U$ follow from those of $U$ applied to representatives, and the intertwining $\widetilde{K}\bar U(t)[\Psi]=K U(t)\Psi=V(t)K\Psi=V(t)\widetilde{K}[\Psi]$ is immediate. Conversely, if $\bar U(t)$ is well defined by [(5.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Ubar) for all $t$, then applying it to $[n]=0$ for $n\in N$ gives $[U(t)n]=0$, i.e. [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). ◻

</div>

<div class="proposition">

**Proposition 5.3** (Topology of the induced evolution).

<div id="prop:topology">

</div>

*Assume [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). Then:*

1.  *$\bar U(t)$ is a $C_{0}$-semigroup of bounded operators on the quotient Hilbert space $\mathcal{H}_{K}$, with $\lVert\bar U(t)\rVert_{\mathcal{B}(\mathcal{H}_{K})}\le\lVert U(t)\rVert_{\mathcal{B}(\mathcal{H}_{\mathrm{src}})}$.*

2.  *Consequently $V(t)=\widetilde{K}\,\bar U(t)\,\widetilde{K}^{-1}$ is a $C_{0}$-semigroup of bounded operators on $\operatorname{Ran}K$ *equipped with the transported quotient norm* $\lVert\cdot\rVert_{\sharp}$ of Remark [2.4](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#rem:twonorms).*

3.  *If $\operatorname{Ran}K$ is closed, then $\lVert\cdot\rVert_{\sharp}$ and the inherited norm $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$ are equivalent on $\operatorname{Ran}K$, and hence $V(t)$ is a $C_{0}$-semigroup of bounded operators on $\operatorname{Ran}K$ in the inherited observable norm as well.*

4.  **Orbit continuity in the inherited norm is automatic, for every $K$, closed range or not.* For each $y=K\Psi\in\operatorname{Ran}K$ the orbit $t\mapsto V(t)y$ is continuous in $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$.*

5.  *What can fail when $\operatorname{Ran}K$ is not closed is *boundedness of the operator $V(t)$* on the normed space $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$. Precisely, $V(t)$ is bounded in the inherited norm if and only if there is a finite constant $C_{t}$ with $$
    \lVert K\,U(t)\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}\ \le\ C_{t}\,\lVert K\Psi\rVert_{\mathcal{H}_{\mathrm{obs}}}
    \qquad\text{for every }\Psi\in\mathcal{H}_{\mathrm{src}},\tag{5.5}$$ and this is an *additional* hypothesis: it does not follow from [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) alone. If [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) does hold for every $t\ge0$, then $\{V(t)\}$ is a strongly continuous semigroup of bounded operators on the *possibly incomplete* normed space $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$.*

6.  *Local uniform boundedness does *not* follow from (5) in the nonclosed case, because the Banach–Steinhaus theorem requires completeness of the domain and $\operatorname{Ran}K$ is then in general incomplete. If one *additionally* assumes $$
    \sup_{0\le t\le T}\lVert V(t)\rVert_{\mathrm{op}}<\infty
    \qquad\text{for every }T>0,\tag{5.6}$$ then each $V(t)$ extends uniquely to a bounded operator $\widehat V(t)$ on the completion $\overline{\operatorname{Ran}K}$, and $\{\widehat V(t)\}$ is a $C_{0}$-semigroup there. In the closed-range case $\operatorname{Ran}K$ is already complete, [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) is automatic, and the ordinary $C_{0}$-semigroup conclusions of (3) apply unchanged.*

</div>

<div class="proof">

*Proof.* (1) Boundedness: for any $n\in N$, [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) gives $U(t)n\in N$, hence $$\lVert\bar U(t)[\Psi]\rVert_{K}=\inf_{m\in N}\lVert U(t)\Psi+m\rVert
\le\inf_{n\in N}\lVert U(t)(\Psi+n)\rVert
\le\lVert U(t)\rVert\inf_{n\in N}\lVert\Psi+n\rVert
=\lVert U(t)\rVert\,\lVert[\Psi]\rVert_{K},$$ where in the first inequality we restricted the infimum to the subfamily $m=U(t)n$, $n\in N$, which is legitimate precisely because $U(t)N\subseteq N$. Strong continuity: for fixed $\Psi$, $\lVert\bar U(t)[\Psi]-[\Psi]\rVert_{K}\le\lVert U(t)\Psi-\Psi\rVert_{\mathcal{H}_{\mathrm{src}}}\to0$ as $t\downarrow0$ by strong continuity of $U$, and the semigroup laws are Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup). Strong continuity at $t=0$ plus local boundedness gives strong continuity on $[0,\infty)$ by the standard argument \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), Prop. I.5.3\].

\(2\) By construction $\widetilde{K}:(\mathcal{H}_{K},\lVert\cdot\rVert_{K})\to(\operatorname{Ran}K,\lVert\cdot\rVert_{\sharp})$ is an isometric isomorphism, and conjugation by an isometric isomorphism carries $C_{0}$-semigroups to $C_{0}$-semigroups.

\(3\) If $\operatorname{Ran}K$ is closed, Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient) makes $\widetilde{K}$ and $\widetilde{K}^{-1}$ bounded in the inherited norm, so $\lVert\cdot\rVert_{\sharp}$ and $\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}}$ are equivalent on $\operatorname{Ran}K$; equivalent norms have the same bounded operators and the same strongly convergent limits.

\(4\) Let $y=K\Psi\in\operatorname{Ran}K$ and $t,t_{0}\ge0$. By [(5.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vdef) and boundedness of $K$, $$\lVert V(t)y-V(t_{0})y\rVert_{\mathcal{H}_{\mathrm{obs}}}
=\bigl\lVert K\bigl(U(t)\Psi-U(t_{0})\Psi\bigr)\bigr\rVert_{\mathcal{H}_{\mathrm{obs}}}
\le\lVert K\rVert_{\mathrm{op}}\,\lVert U(t)\Psi-U(t_{0})\Psi\rVert_{\mathcal{H}_{\mathrm{src}}}
\xrightarrow[\;t\to t_{0}\;]{}0$$ by strong continuity of $U$. Thus every orbit is continuous in the inherited norm, whatever $\operatorname{Ran}K$ may be. (Note that the estimate is made through the *representative* $\Psi$, which is legitimate because $V(t)y$ does not depend on the choice of representative, by Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup).)

\(5\) The stated equivalence is the definition of boundedness of the linear map $V(t)$ from $(\operatorname{Ran}K,\lVert\cdot\rVert_{\mathcal{H}_{\mathrm{obs}}})$ to itself, once one writes a general element of $\operatorname{Ran}K$ as $K\Psi$ and recalls $V(t)K\Psi=KU(t)\Psi$: the inequality $\lVert V(t)y\rVert\le C_{t}\lVert y\rVert$ for all $y\in\operatorname{Ran}K$ is exactly [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd). It is not implied by [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance): in the nonclosed case $\widetilde{K}^{-1}$ is unbounded in the inherited norm, so the conjugation argument of (2) is unavailable, and no such $C_{t}$ is produced.

Suppose now [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) holds for every $t\ge0$. Then each $V(t)$ is a bounded operator on the normed space $\operatorname{Ran}K$, the semigroup laws hold by Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup), and by part (4) the map $t\mapsto V(t)y$ is continuous for every $y\in\operatorname{Ran}K$; so $\{V(t)\}$ is a strongly continuous semigroup of bounded operators on $\operatorname{Ran}K$. That is all that follows, and we stop there.

\(6\) We do *not* obtain [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) from (5). The usual route, pointwise boundedness of $\{V(t):0\le t\le T\}$ on each vector (which does hold, each orbit being the continuous image of a compact interval) plus Banach–Steinhaus, is unavailable, because Banach–Steinhaus requires the domain to be complete, and when $\operatorname{Ran}K$ is not closed it is an incomplete normed space. Nor may one evade this by passing to the completion $\overline{\operatorname{Ran}K}$ first: pointwise boundedness has been established only on the dense subspace $\operatorname{Ran}K$, not at every vector of $\overline{\operatorname{Ran}K}$, and a family of operators that is pointwise bounded on a dense subspace need not be pointwise bounded on the whole space absent a uniform bound, which is precisely what is at issue. So [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) is an extra hypothesis.

Assume it. Then for $0\le t\le T$ the operator $V(t)$ is bounded on the dense subspace $\operatorname{Ran}K$ of $\overline{\operatorname{Ran}K}$ with $\lVert V(t)\rVert_{\mathrm{op}}\le M_{T}
:=\sup_{0\le t\le T}\lVert V(t)\rVert_{\mathrm{op}}<\infty$, so it extends uniquely to a bounded operator $\widehat V(t)$ on $\overline{\operatorname{Ran}K}$ with the same norm (uniformly continuous extension from a dense subspace of a complete space). The semigroup laws pass to the closure by density and continuity. For strong continuity, let $\hat y\in\overline{\operatorname{Ran}K}$ and $\varepsilon>0$; pick $y\in\operatorname{Ran}K$ with $\lVert\hat y-y\rVert<\varepsilon$; then for $0\le t\le T$, $$\lVert\widehat V(t)\hat y-\hat y\rVert
\le\lVert\widehat V(t)(\hat y-y)\rVert+\lVert V(t)y-y\rVert+\lVert y-\hat y\rVert
\le(M_{T}+1)\varepsilon+\lVert V(t)y-y\rVert ,$$ and the middle term tends to $0$ as $t\downarrow0$ by part (4). Hence $\widehat V(t)\hat y\to\hat y$, and $\{\widehat V(t)\}$ is a $C_{0}$-semigroup on $\overline{\operatorname{Ran}K}$. In the closed-range case $\operatorname{Ran}K=\overline{\operatorname{Ran}K}$ is complete, [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) follows from the standard local boundedness of the $C_{0}$-semigroup already produced in (3), and nothing new is needed. ◻

</div>

The three-way distinction just drawn, orbit continuity (free), operator boundedness [(5.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:Vbdd) (an extra hypothesis), local uniform boundedness [(5.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:locunif) (a further one), collapses entirely when $\operatorname{Ran}K$ is closed, and it is only the nonclosed case that forces one to keep the three apart.

<div class="corollary">

**Corollary 5.4** (Failure of autonomous descent).

<div id="cor:failure">

</div>

*Suppose there exist $n\in\ker K$ and $t_{0}>0$ with $$
K\,U(t_{0})\,n\neq0 .\tag{5.7}$$ Then the two source states $\Psi=0$ and $\Psi'=n$ satisfy $K\Psi=K\Psi'=0$ at time zero but $K U(t_{0})\Psi=0\neq KU(t_{0})\Psi'$. Consequently there is *no* single-valued map $V(t_{0})$ on $\operatorname{Ran}K$ satisfying [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine): no autonomous law on the present observable state reproduces the readouts of both source trajectories. More generally, for *any* $\Psi$, the pair $\Psi$ and $\Psi+n$ are observationally identical at $t=0$ and observationally distinct at $t=t_{0}$.*

</div>

<div class="proof">

*Proof.* If such a $V(t_{0})$ existed, [(5.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:intertwine) applied to $n$ would give $KU(t_{0})n=V(t_{0})Kn=0$, contradicting [(5.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:failure). The general statement follows by linearity: $K(\Psi+n)=K\Psi$, while $KU(t_{0})(\Psi+n)-KU(t_{0})\Psi=KU(t_{0})n\neq0$. ◻

</div>

Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) is (D4) in its bluntest form, and it should be contrasted carefully with Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss). Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss) says the readout at a single time cannot distinguish $\Psi$ from $\Psi+n$. Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) says something strictly stronger: the *future* readouts *can* distinguish them. The hypothesis of Corollary [5.4](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#cor:failure) presupposes a nonzero $n\in\ker K$, so it can only be met when $\ker K\neq\{0\}$, this is [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4) again, and it is why (D4) is not logically independent of (D1) but strictly stronger than it. What (D1) leaves open, and what Theorem [5.2](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#thm:semigroup) decides, is whether the nontrivial kernel is invariant. Hidden structure that is dynamically inert ($U(t)N\subseteq N$) costs the observable theory nothing, however large $N$ is; hidden structure that is dynamically active makes the observable theory nonautonomous, however tidy its instantaneous state space may be. The whole of Sections [6](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-projected-dynamics-identity#sec:projection)–[7](/source-readout/observable-quotients-and-exact-projected-dynamics/minimal-dynamical-completion#sec:completion) is a quantitative account of exactly how much it costs.

<div class="proposition">

**Proposition 5.5** (Bounded generator).

<div id="prop:bddgen">

</div>

*Suppose $L\in\mathcal{B}(\mathcal{H}_{\mathrm{src}})$ and $U(t)=e^{tL}$. Then [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance) holds if and only if $$
L\,N\subseteq N .\tag{5.8}$$*

</div>

<div class="proof">

*Proof.* ($\Leftarrow$) If $LN\subseteq N$ then $L^{k}N\subseteq N$ for all $k\ge0$ by induction. For $n\in N$, the partial sums $\sum_{k=0}^{m}\tfrac{t^{k}}{k!}L^{k}n$ lie in $N$ and converge in norm to $e^{tL}n$; since $N$ is closed, $e^{tL}n\in N$.

($\Rightarrow$) If $e^{tL}N\subseteq N$ for all $t\ge0$ and $n\in N$, then $t^{-1}(e^{tL}n-n)\in N$ for $t>0$, and $N$ closed gives $Ln=\lim_{t\downarrow0}t^{-1}(e^{tL}n-n)\in N$, the limit existing in norm because $L$ is bounded. ◻

</div>

<div class="remark">

*Remark 21* (Unbounded generators).

<div id="rem:unbdd">

</div>

If $L$ is the (generally unbounded) generator of $U(t)$ with domain $D(L)$, the algebraic condition $$L\bigl(N\cap D(L)\bigr)\subseteq N$$ does *not* by itself settle [(5.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-source-dynamics#eq:invariance). Two separate issues arise: domain invariance ($U(t)$ need not map $N\cap D(L)$ into $D(L)$ in a way compatible with the difference-quotient argument above) and the density/core structure of $N\cap D(L)$ in $N$ (which may be trivial in pathological cases). Correct criteria for invariance of a closed subspace under a $C_{0}$-semigroup are formulated in terms of the resolvent, for instance, $U(t)N\subseteq N$ for all $t\ge0$ if and only if $(\lambda-L)^{-1}N\subseteq N$ for all sufficiently large real $\lambda$, and require verification in each application; see \[[3](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EngelNagel), §II.2 and §IV.2\]. We do not use unbounded generators anywhere in the theorems below, and we do not assert their invariance theory here.

</div>
