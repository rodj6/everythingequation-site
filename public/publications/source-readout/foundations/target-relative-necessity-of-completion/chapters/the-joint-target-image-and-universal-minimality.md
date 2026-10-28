# The joint target image and universal minimality

<div id="sec:joint">

</div>

[Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) gives a lower bound on the distinctions a completion must carry. We now show that the bound is attained within the category of readout extensions defined above: there is a completion carrying exactly those distinctions and no others, and it receives a canonical map from every other completion. Attainment here is a statement about the abstract construction $E_Q=\operatorname{Im}(p,a_Q)$; whether a given physical situation supplies an operational realization of that completion is a separate matter, taken up after [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal).

<div class="definition">

**Definition 8.1** (Joint target image).

<div id="def:joint">

</div>

Define $$
j_Q\colon S\longrightarrow T\times A_Q,
\qquad
j_Q(s):=\bigl(p(s),a_Q(s)\bigr),\tag{18}$$ and let $$
E_Q:=\operatorname{Im}(j_Q)=\bigl\{\,(p(s),a_Q(s)) : s\in S\,\bigr\}\subseteq T\times A_Q .\tag{19}$$ We regard $j_Q$ as a map onto its image, $j_Q\colon S\to E_Q$, and write $\pi_T\colon E_Q\to T$ and $\pi_A\colon E_Q\to A_Q$ for the restrictions to $E_Q$ of the two coordinate projections of $T\times A_Q$.

</div>

<div class="proposition">

**Proposition 8.2** ($E_Q$ is a $Q$-sufficient readout extension).

<div id="prop:EQ-sufficient">

</div>

*The map $j_Q\colon S\to E_Q$ is a surjective readout extension of $p$, with structure map $u=\pi_T$, and it is sufficient for $Q$, with $b=\pi_A$. Explicitly, $$
p=\pi_T\circ j_Q,
\qquad\qquad
a_Q=\pi_A\circ j_Q .\tag{20}$$ Moreover the fibers of $j_Q$ are exactly the sets $F_t\cap a_Q^{-1}(\alpha)$ for $(t,\alpha)\in E_Q$.*

</div>

<div class="proof">

*Proof.* $j_Q\colon S\to E_Q$ is surjective by construction, since $E_Q$ was defined as the image of $j_Q$. No nonemptiness hypothesis is needed: if $S=\emptyset$ then $E_Q=\emptyset$ as well, and the identities below hold vacuously.

For [(20)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:EQ-factorizations), let $s\in S$. Then $j_Q(s)=(p(s),a_Q(s))\in E_Q$, and applying the coordinate projections, $$\pi_T\bigl(j_Q(s)\bigr)=\pi_T\bigl(p(s),a_Q(s)\bigr)=p(s),
\qquad
\pi_A\bigl(j_Q(s)\bigr)=\pi_A\bigl(p(s),a_Q(s)\bigr)=a_Q(s).$$ The first identity says $p=\pi_T\circ j_Q$, so $(j_Q,E_Q,\pi_T)$ is a readout extension in the sense of [Definition 6.1](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:extension). The second says $a_Q=\pi_A\circ j_Q$, so $j_Q$ is $Q$-sufficient in the sense of [Definition 6.3](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:sufficient), with $b=\pi_A$.

For the fibers: $j_Q(s)=(t,\alpha)$ iff $p(s)=t$ and $a_Q(s)=\alpha$, i.e. iff $s\in F_t\cap a_Q^{-1}(\alpha)$. ◻

</div>

We have thus verified directly, and not by appeal to any universal property, that $E_Q$ does the job: it determines the readout value and it determines the correct answer. The next theorem says it does nothing more.

<div class="theorem">

**Theorem 8.3** (Universal factorization: $E_Q$ is the coarsest $Q$-sufficient extension).

<div id="thm:universal">

</div>

*Let $e\colon S\to E$ be *any* surjective readout extension of $p$ that is sufficient for $Q$, with structure map $u\colon E\to T$ satisfying $p=u\circ e$ and solution map $b\colon E\to A_Q$ satisfying $a_Q=b\circ e$. Then there is a *unique* map $$
\varphi_E\colon E\longrightarrow E_Q
\qquad\text{such that}\qquad
j_Q=\varphi_E\circ e,\tag{21}$$ namely $$
\varphi_E(x)=\bigl(u(x),\,b(x)\bigr),
\qquad x\in E,\tag{22}$$ and $\varphi_E$ is surjective. Moreover $\varphi_E$ intertwines the structure maps and the solution maps: $$
\pi_T\circ\varphi_E=u,
\qquad\qquad
\pi_A\circ\varphi_E=b .\tag{23}$$*

</div>

<div class="proof">

*Proof.* We proceed in five steps.

*Step 1: $u$ and $b$ are uniquely determined by $e$.* This is [Lemma 6.2](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:extension-basic) [(1)](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#it:u-unique) for $u$, and [Lemma 6.5](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#lem:sufficiency-criterion) for $b$; in both cases uniqueness follows from surjectivity of $e$. We record the argument for $b$ once more, since it is used below: if $b,b'$ both satisfy $a_Q=b\circ e=b'\circ e$ and $x\in E$, choose $s$ with $e(s)=x$; then $b(x)=b(e(s))=a_Q(s)=b'(e(s))=b'(x)$. Hence the formula [(22)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:phiE-formula) is unambiguous.

*Step 2: $\varphi_E$ is well defined as a map into $E_Q$.* Define $\psi\colon E\to T\times A_Q$ by $\psi(x):=(u(x),b(x))$; this is manifestly a well-defined map into the product. We must check that its values lie in the subset $E_Q$. Let $x\in E$. By surjectivity of $e$ there is $s\in S$ with $e(s)=x$. Then $$
\psi(x)=\bigl(u(e(s)),\,b(e(s))\bigr)=\bigl(p(s),\,a_Q(s)\bigr)=j_Q(s)\in E_Q,\tag{24}$$ using $p=u\circ e$ and $a_Q=b\circ e$. Hence $\psi$ takes values in $E_Q$, and we may define $\varphi_E\colon E\to E_Q$ by $\varphi_E:=\psi$, i.e. by [(22)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:phiE-formula). (Note that [(24)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:psi-value) did not require the choice of $s$ to be canonical: $\psi(x)$ was already defined without reference to $s$, and $s$ was used only to certify membership in $E_Q$. So no well-definedness issue arises from the choice of preimage.)

*Step 3: the factorization $j_Q=\varphi_E\circ e$.* Let $s\in S$. Then by [(22)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:phiE-formula) and the two factorizations through $e$, $$\varphi_E\bigl(e(s)\bigr)
=\bigl(u(e(s)),\,b(e(s))\bigr)
=\bigl(p(s),\,a_Q(s)\bigr)
=j_Q(s).$$ Since $s$ was arbitrary, $j_Q=\varphi_E\circ e$.

*Step 4: $\varphi_E$ is surjective.* Let $y\in E_Q$. By [(19)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:EQ) there is $s\in S$ with $j_Q(s)=y$. Put $x:=e(s)\in E$. By Step 3, $\varphi_E(x)=\varphi_E(e(s))=j_Q(s)=y$. Hence $\varphi_E$ is onto $E_Q$.

*Step 5: uniqueness of $\varphi_E$.* Suppose $\varphi,\varphi'\colon E\to E_Q$ both satisfy $j_Q=\varphi\circ e=\varphi'\circ e$. Let $x\in E$. By surjectivity of $e$ choose $s\in S$ with $e(s)=x$. Then $$\varphi(x)=\varphi\bigl(e(s)\bigr)=j_Q(s)=\varphi'\bigl(e(s)\bigr)=\varphi'(x).$$ As $x$ was arbitrary, $\varphi=\varphi'$. This is precisely the point at which surjectivity of $e$ ,  part of [Definition 6.1](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#def:extension) ,  is essential: without it, $\varphi_E$ would be unconstrained on $E\setminus\operatorname{Im}(e)$.

Finally, [(23)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:phiE-intertwine) is immediate from [(22)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:phiE-formula): for $x\in E$, $\pi_T(\varphi_E(x))=\pi_T(u(x),b(x))=u(x)$ and $\pi_A(\varphi_E(x))=\pi_A(u(x),b(x))=b(x)$. ◻

</div>

<div class="corollary">

**Corollary 8.4** (Information ordering).

<div id="cor:ordering">

</div>

*Every $Q$-sufficient readout extension $e\colon S\to E$ carries at least the distinctions encoded by the pair $(p,a_Q)$: for all $s_0,s_1\in S$, $$
j_Q(s_0)\neq j_Q(s_1)
\qquad\Longrightarrow\qquad
e(s_0)\neq e(s_1).\tag{25}$$ Equivalently, $\sim_e\;\subseteq\;\sim_{j_Q}$: the partition induced by $e$ refines the partition induced by $j_Q$. Thus $E_Q$ is the *coarsest* readout extension sufficient for $Q$.*

</div>

<div class="proof">

*Proof.* By [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal), $j_Q=\varphi_E\circ e$. If $e(s_0)=e(s_1)$ then $j_Q(s_0)=\varphi_E(e(s_0))=\varphi_E(e(s_1))=j_Q(s_1)$, which is the contrapositive of [(25)](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#eq:ordering). Hence $\sim_e\subseteq\sim_{j_Q}$. Since $j_Q$ is itself $Q$-sufficient ([Proposition 8.2](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#prop:EQ-sufficient)), it is a $Q$-sufficient extension whose partition is refined by that of every other, i.e. it is coarsest among $Q$-sufficient extensions. ◻

</div>

Several points about [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) and [Corollary 8.4](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#cor:ordering) require care, and we state them explicitly.

*The direction of the universal map.* The canonical map runs $$E\longrightarrow E_Q,$$ from an arbitrary sufficient extension *to* the joint target image ,  not from $E_Q$ to $E$. This direction is forced and is not a convention. A surjection $E\to E_Q$ expresses that $E$ is at least as fine as $E_Q$, since it says the $E$-value determines the $E_Q$-value. There is in general *no* map $E_Q\to E$ over $S$: $E$ may retain distinctions that $E_Q$ has discarded ,  distinctions irrelevant to $Q$ but possibly relevant to other targets ,  and no map out of $E_Q$ could recover them. Reversing the arrow would assert the opposite of what is true, namely that $E_Q$ is the finest rather than the coarsest sufficient extension.

*$E_Q$ does not reconstruct the source.* The joint target image retains exactly two things: the readout value $p(s)$, and the correct answer $a_Q(s)$. It discards everything else, and in particular it identifies any two source states that agree on both. This is usually a massive collapse. In [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) the target is the spectrum of a charged Laplacian, and $E_Q$ turns out to be a one-dimensional interval’s worth of data ,  the inversion quotient of holonomy ,  even though the source moduli space $\mathrm{U}(1)$ is strictly finer and the raw connections finer still. Nothing in [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) says or implies that the source is recoverable; on the contrary, [Corollary 8.4](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#cor:ordering) says the source is generally *not* recoverable from $E_Q$, because $\operatorname{id}_S$ is one of the sufficient extensions $e$ and the canonical map goes $S\to E_Q$, not back.

*One target at a time.* [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) is a statement about a single correct-answer map $a_Q$. If one nominates a family of targets, the coarsest extension sufficient for all of them simultaneously must, by [Theorem 7.1](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#thm:separation) applied to each member, separate every pair of source states on which *some* member’s answer differs. It is therefore at least as fine as the completion required by each individual member, and it may be strictly finer. It need not be: should the remaining members contribute no distinctions beyond those already forced by one of them, the family completion coincides with that member’s individual completion. Which case obtains depends on the family, and the construction in general requires machinery we do not develop here; that is the subject of \[[9](/source-readout/target-relative-necessity-of-completion/references#bib-ShadowIII)\]. Within the present paper, “minimal” always means “minimal for the nominated $Q$,” and we will see in [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) that the minimal completion for the spectral target is strictly insufficient for a transport target on the same source space.

*What the universal property does and does not supply.* [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) establishes that $E_Q$ is the coarsest sufficient extension in the category of set-theoretic source quotients and readout extensions defined in this paper: among all $Q$-sufficient extensions, it is the one carrying the fewest distinctions, and every other maps canonically onto it. Because the construction of $E_Q=\operatorname{Im}(p,a_Q)$ refers explicitly to the correct-answer map $a_Q$, the theorem is an information-theoretic characterization of the least distinctions any sufficient extension must carry; it identifies the floor abstractly, from the data $(p,a_Q)$. It does not, however, furnish an operational procedure for extracting $a_Q$ from the original readout $p$ ,  indeed [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction), [Proposition 3.4](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#prop:auxiliary-useless) show that no such extraction from $p$ alone exists when $Q$ is obstructed ,  and it does not by itself exhibit a physically measurable, experimentally accessible, or independently specified realization of $E_Q$. A concrete physical repair is a separate task: it must independently provide an extension $e\colon S\to E$ and an answer map $b\colon E\to A_Q$ through which $a_Q$ factors, and must justify that $e$ and $b$ are available in the situation at hand. The universal property then locates any such repair relative to the floor ,  it certifies that $e$ carries at least the distinctions of $E_Q$ ,  but the provision and justification of $e$ and $b$ lie outside what the abstract quotient construction delivers. The flat-connection example of [Section 9](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#sec:flat), [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) supplies exactly such an independently specified extension, the charged spectrum, and it is that concrete construction, not [Theorem 8.3](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#thm:universal) alone, that makes the repair physical.
