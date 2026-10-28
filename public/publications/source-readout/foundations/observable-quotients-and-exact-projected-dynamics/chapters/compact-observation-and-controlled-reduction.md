# Compact observation and controlled reduction

<div id="sec:compact">

</div>

<div class="assumption">

**Assumption 4.1**.

<div id="ass:compact">

</div>

In this section $\mathcal{H}_{\mathrm{src}}$ and $\mathcal{H}_{\mathrm{obs}}$ are separable and $K\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$ is compact.

</div>

Under Assumption [4.1](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ass:compact), $K^{*}K$ is a positive, self-adjoint, compact operator on $\mathcal{H}_{\mathrm{src}}$. By the spectral theorem for compact self-adjoint operators \[[13](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-ReedSimon1), Ch. VI\] its nonzero spectrum consists of positive eigenvalues of finite multiplicity, which can accumulate only at $0$. Enumerate them, repeated according to multiplicity and in nonincreasing order, as $\sigma_{1}^{2}\ge\sigma_{2}^{2}\ge\cdots>0$ with $\sigma_{n}>0$; the index set is $\{1,\dots,R\}$ if $K$ has finite rank $R$, and $\mathbb{N}$ otherwise. Let $\{v_{n}\}$ be a corresponding orthonormal family of eigenvectors of $K^{*}K$, so $K^{*}Kv_{n}=\sigma_{n}^{2}v_{n}$, and put $$
u_{n}:=\sigma_{n}^{-1}Kv_{n}.\tag{4.1}$$

<div class="lemma">

**Lemma 4.2** (Schmidt singular system).

<div id="lem:schmidt">

</div>

*The families $\{v_{n}\}$ and $\{u_{n}\}$ are orthonormal, $\{v_{n}\}$ is an orthonormal basis of $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$, $\{u_{n}\}$ is an orthonormal basis of $\overline{\operatorname{Ran}K}$, and $$
Kv_{n}=\sigma_{n}u_{n},
\qquad
K^{*}u_{n}=\sigma_{n}v_{n},\tag{4.2}$$ $$
K\Psi=\sum_{n\ge1}\sigma_{n}\langle v_{n} , \Psi \rangle\,u_{n}
\qquad(\Psi\in\mathcal{H}_{\mathrm{src}}),\tag{4.3}$$ the series converging in the norm of $\mathcal{H}_{\mathrm{obs}}$. If the index set is infinite then $\sigma_{n}\to0$.*

</div>

<div class="proof">

*Proof.* Orthonormality of $\{u_n\}$: $\langle u_{m} , u_{n} \rangle=(\sigma_{m}\sigma_{n})^{-1}
\langle Kv_{m} , Kv_{n} \rangle=(\sigma_{m}\sigma_{n})^{-1}\langle v_{m} , K^{*}Kv_{n} \rangle
=(\sigma_{n}/\sigma_{m})\langle v_{m} , v_{n} \rangle=\delta_{mn}$. From [(4.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svectors), $Kv_{n}=\sigma_{n}u_{n}$; and $K^{*}u_{n}=\sigma_{n}^{-1}K^{*}Kv_{n}=\sigma_{n}v_{n}$, which is [(4.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:sv).

Since $\ker K=\ker K^{*}K$ (indeed $K\Psi=0$ iff $\langle \Psi , K^{*}K\Psi \rangle=\lVert K\Psi\rVert^{2}=0$), the spectral theorem gives the orthogonal decomposition $\mathcal{H}_{\mathrm{src}}=\ker K\oplus\overline{\mathop{\mathrm{span}}\{v_{n}\}}$, and by Corollary [3.3](/source-readout/observable-quotients-and-exact-projected-dynamics/descent-of-observable-functionals#cor:lindescent) the second summand is $(\ker K)^{\perp}=\overline{\operatorname{Ran}K^{*}}$. Thus every $\Psi$ decomposes as $\Psi=\Psi_{0}+\sum_{n}\langle v_{n} , \Psi \rangle v_{n}$ with $\Psi_{0}\in\ker K$, the series converging in $\mathcal{H}_{\mathrm{src}}$. Applying the bounded operator $K$ term by term and using [(4.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:sv) yields [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd) with convergence in $\mathcal{H}_{\mathrm{obs}}$. In particular $\operatorname{Ran}K\subseteq\overline{\mathop{\mathrm{span}}\{u_{n}\}}$ and each $u_{n}=\sigma_{n}^{-1}Kv_{n}
\in\operatorname{Ran}K$, so $\{u_{n}\}$ is an orthonormal basis of $\overline{\operatorname{Ran}K}$.

Finally, if infinitely many $\sigma_{n}>0$ existed with $\sigma_{n}\ge\varepsilon>0$ along a subsequence, then $\{Kv_{n}\}=\{\sigma_{n}u_{n}\}$ would satisfy $\lVert Kv_{n}-Kv_{m}\rVert^{2}=\sigma_{n}^{2}+\sigma_{m}^{2}\ge2\varepsilon^{2}$, so the bounded sequence $\{v_{n}\}$ would have image with no convergent subsequence, contradicting compactness. Hence $\sigma_{n}\to0$. ◻

</div>

<div class="definition">

**Definition 4.3** (Rank-$r$ truncation).

<div id="def:trunc">

</div>

For $r\ge0$ set $$
K_{r}:=\sum_{n=1}^{r}\sigma_{n}\,u_{n}\langle v_{n} , \cdot \rangle\, ,\tag{4.4}$$ that is, $K_{r}\Psi=\sum_{n=1}^{r}\sigma_{n}\langle v_{n} , \Psi \rangle u_{n}$. If $K$ has finite rank $R\le r$, the sum runs only over the available indices and $K_{r}=K$. We adopt the convention $\sigma_{r+1}:=0$ whenever the index $r+1$ exceeds the number of positive singular values.

</div>

<div class="theorem">

**Theorem 4.4** (Optimal compact reduction; Eckart–Young–Mirsky, operator norm).

<div id="thm:ey">

</div>

*Let $K$ be compact and $r\ge0$. Then for every $B\in\mathcal{B}(\mathcal{H}_{\mathrm{src}},\mathcal{H}_{\mathrm{obs}})$ with $\mathop{\mathrm{rank}}B\le r$, $$
\lVert K-B\rVert_{\mathrm{op}}\ \ge\ \sigma_{r+1},\tag{4.5}$$ and equality is attained at $B=K_{r}$. Consequently $$
\lVert K-K_{r}\rVert_{\mathrm{op}}=\sigma_{r+1}
=\min\bigl\{\lVert K-B\rVert_{\mathrm{op}}:\mathop{\mathrm{rank}}B\le r\bigr\}.\tag{4.6}$$*

</div>

<div class="proof">

*Proof.* *Upper bound.* By [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd) and [(4.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:Kr), $(K-K_{r})\Psi=\sum_{n>r}\sigma_{n}\langle v_{n} , \Psi \rangle u_{n}$. By orthonormality of $\{u_{n}\}$ and Bessel’s inequality for $\{v_{n}\}$, $$\lVert(K-K_{r})\Psi\rVert^{2}=\sum_{n>r}\sigma_{n}^{2}\lvert\langle v_{n} , \Psi \rangle\rvert^{2}
\le\sigma_{r+1}^{2}\sum_{n>r}\lvert\langle v_{n} , \Psi \rangle\rvert^{2}
\le\sigma_{r+1}^{2}\lVert\Psi\rVert^{2},$$ using $\sigma_{n}\le\sigma_{r+1}$ for $n>r$. Hence $\lVert K-K_{r}\rVert_{\mathrm{op}}\le\sigma_{r+1}$. Testing on $\Psi=v_{r+1}$ (when $\sigma_{r+1}>0$) gives $\lVert(K-K_{r})v_{r+1}\rVert=\sigma_{r+1}$, so equality holds.

*Lower bound.* We may assume $\sigma_{r+1}>0$, else [(4.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:eylower) is vacuous. Let $\mathop{\mathrm{rank}}B\le r$ and put $W:=\mathop{\mathrm{span}}\{v_{1},\dots,v_{r+1}\}$, of dimension $r+1$. The restriction $B|_{W}:W\to\mathcal{H}_{\mathrm{obs}}$ has rank at most $r<\dim W$, so by rank–nullity there exists $v\in W$ with $\lVert v\rVert=1$ and $Bv=0$. Write $v=\sum_{n=1}^{r+1}c_{n}v_{n}$ with $\sum_{n=1}^{r+1}\lvert c_{n}\rvert^{2}=1$. Then by [(4.3)](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#eq:svd), $$\lVert(K-B)v\rVert^{2}=\lVert Kv\rVert^{2}
=\Bigl\lVert\sum_{n=1}^{r+1}c_{n}\sigma_{n}u_{n}\Bigr\rVert^{2}
=\sum_{n=1}^{r+1}\sigma_{n}^{2}\lvert c_{n}\rvert^{2}
\ \ge\ \sigma_{r+1}^{2}\sum_{n=1}^{r+1}\lvert c_{n}\rvert^{2}
=\sigma_{r+1}^{2},$$ since $\sigma_{n}\ge\sigma_{r+1}$ for $n\le r+1$. Therefore $\lVert K-B\rVert_{\mathrm{op}}\ge\lVert(K-B)v\rVert\ge\sigma_{r+1}$. ◻

</div>

Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) is the operator-norm form of the Eckart–Young–Mirsky theorem \[[14](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Schmidt), [2](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-EckartYoung), [9](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Mirsky)\]. It quantifies (D3) and nothing else: it is an approximation statement about *how well a finite-rank operator can imitate $K$*. It says nothing about $\ker K$ and nothing about invertibility.

<div class="example">

**Example 4.5** (Compact, injective, unstably invertible).

<div id="ex:diagonal">

</div>

On $\mathcal{H}_{\mathrm{src}}=\mathcal{H}_{\mathrm{obs}}=\ell^{2}(\mathbb{N})$ define $$
K(x_{1},x_{2},x_{3},\dots)
:=\Bigl(x_{1},\tfrac{x_{2}}{2},\tfrac{x_{3}}{3},\dots\Bigr),
\qquad\text{i.e.}\quad
(Kx)_{n}=\frac{x_{n}}{n}.\tag{4.7}$$ Let $\{e_{n}\}$ be the standard basis. Then:

1.  **$K$ is compact.** Let $K_{r}$ be as in Definition [4.3](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#def:trunc), which here is $(K_{r}x)_{n}=x_{n}/n$ for $n\le r$ and $0$ for $n>r$; this has rank $r$. For any $x$ with $\lVert x\rVert\le1$, $\lVert(K-K_{r})x\rVert^{2}=\sum_{n>r}\lvert x_{n}\rvert^{2}/n^{2}\le(r+1)^{-2}$, so $\lVert K-K_{r}\rVert_{\mathrm{op}}\le1/(r+1)\to0$. A norm limit of finite-rank operators is compact \[[13](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-ReedSimon1), Thm. VI.12\]. (This also exhibits the singular system explicitly: $v_{n}=u_{n}=e_{n}$, $\sigma_{n}=1/n$, and Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) gives the exact value $\lVert K-K_{r}\rVert_{\mathrm{op}}=\sigma_{r+1}=1/(r+1)$.)

2.  **$K$ is injective.** If $Kx=0$ then $x_{n}/n=0$ for every $n$, so $x=0$. Hence $\ker K=\{0\}$ and, by Corollary [2.5](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#cor:loss), *no* exact source distinction is lost: the observational equivalence relation $\sim_{K}$ is equality.

3.  **The inverse on the range is unbounded, and $\operatorname{Ran}K$ is not closed.** On $\operatorname{Ran}K$ the inverse is $(K^{-1}y)_{n}=n\,y_{n}$. Then $K^{-1}e_{n}=n e_{n}$ has norm $n$ while $\lVert e_{n}\rVert=1$, so $K^{-1}$ is unbounded. By Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient), $\operatorname{Ran}K$ is therefore not closed. Concretely, $y=(1/n)_{n\ge1}\in\ell^{2}$ is the limit of $K(\,(1,\dots,1,0,0,\dots)\,)$ but is not in $\operatorname{Ran}K$, since $K^{-1}y=(1,1,1,\dots)\notin\ell^{2}$.

</div>

Example [4.5](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#ex:diagonal) decouples the three static phenomena completely. $K$ is compact, so it admits arbitrarily good, quantitatively controlled finite-rank approximations (D3), and, more sharply, Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey) gives the exact approximation error. $K$ is injective, so (D1) fails: nothing is exactly identified, and the quotient $\mathcal{H}_{K}$ is $\mathcal{H}_{\mathrm{src}}$ itself. Yet $K^{-1}$ is unbounded, so (D2) holds in full force: the source is determined by the readout, but not continuously, and no stability estimate as in Theorem [2.3](/source-readout/observable-quotients-and-exact-projected-dynamics/the-exact-observable-quotient#thm:quotient)(3) is available. *Compactness does not imply a nontrivial kernel*, what it does imply is the controlled finite-rank approximation of Theorem [4.4](/source-readout/observable-quotients-and-exact-projected-dynamics/compact-observation-and-controlled-reduction#thm:ey), and a trivial kernel does not imply stable inversion. Note also that for this $K$, (D4) cannot occur under *any* source semigroup whatever: $\ker K=\{0\}$ is invariant trivially, so by [(1.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/introduction#eq:D1D4) the dynamics always descend, however violently the inversion is ill-conditioned. Instability of the inverse and failure of dynamical descent are different diseases. Any argument that slides between “the observation is compact”, “information is lost”, and “the source is nonidentifiable” has already conflated three different theorems.
