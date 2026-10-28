# The charged covariant Laplacian and the curvature obstruction

<div id="sec:spectrum">

</div>

## Operator, domain, and spectrum

Fix $\theta\in\mathbb{R}$ representing a point of $S_{\mathrm{flat}}$, and consider a complex scalar field of unit charge on $S^1$ minimally coupled to $A_\theta$. The gauge-covariant derivative is $$
D_{x}:=\partial_x-\frac{i\theta}{L},\tag{36}$$ and the covariant Laplacian, or gauged kinetic operator, is $$
H_\theta:=-D_{x}^{\,2}
=-\left(\partial_x-\frac{i\theta}{L}\right)^{\!2}.\tag{37}$$

We specify the operator precisely. Let $$
\mathcal{H}:=L^2(S^1)=L^2\bigl([0,L],dx\bigr)
\quad\text{with periodic identification } x\sim x+L,\tag{38}$$ with inner product $\langle\psi,\phi\rangle=\int_0^L\overline{\psi(x)}\phi(x)\,dx$, and take the operator domain to be the periodic Sobolev space $$
\mathcal{D}(H_\theta):=H^2_{\mathrm{per}}(S^1)
=\Bigl\{\psi\in L^2(S^1):\ \sum_{n\in\mathbb{Z}}(1+n^2)^2\,|\hat\psi(n)|^2<\infty\Bigr\},\tag{39}$$ where $\hat\psi(n)$ are the Fourier coefficients of $\psi$ with respect to the orthonormal basis introduced below. Equivalently, $\mathcal D(H_\theta)$ consists of $\psi\in L^2$ whose distributional derivatives up to order two lie in $L^2$ and which, together with their first derivatives, satisfy the periodic boundary conditions $\psi(0)=\psi(L)$, $\psi'(0)=\psi'(L)$; we write $H^2_{\mathrm{per}}(S^1)$ for this space. With this domain, $H_\theta$ is self-adjoint, and the cleanest justification is Fourier diagonalization rather than a perturbative argument. Let $\mathcal F\colon L^2(S^1)\to
\ell^2(\mathbb{Z})$, $(\mathcal F\psi)(n)=\hat\psi(n)=\langle\psi_n,\psi\rangle$, be the unitary Fourier transform associated with the orthonormal basis $\{\psi_n\}_{n\in\mathbb{Z}}$ of [(41)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:psin) below. A direct computation, carried out in [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum), gives $H_\theta\psi_n=
\lambda_n(\theta)\psi_n$ with $\lambda_n(\theta)=\bigl((2\pi n-\theta)/L\bigr)^2$. Hence $\mathcal F$ conjugates $H_\theta$ into the *multiplication operator* by the real sequence $\bigl(\lambda_n(\theta)\bigr)_{n\in\mathbb{Z}}$ on $\ell^2(\mathbb{Z})$: $$
\bigl(\mathcal F H_\theta\psi\bigr)(n)=\lambda_n(\theta)\,\hat\psi(n),
\qquad
\mathcal F\bigl(\mathcal D(H_\theta)\bigr)
=\Bigl\{\,\hat\psi\in\ell^2(\mathbb{Z}):\ \sum_{n\in\mathbb{Z}}\lambda_n(\theta)^2\,|\hat\psi(n)|^2<\infty\,\Bigr\}.\tag{40}$$ Multiplication by a real sequence, taken on its maximal domain, is self-adjoint; and since $\lambda_n(\theta)\asymp (2\pi n/L)^2$ as $|n|\to\infty$, the maximal domain in [(40)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:diagonalized) coincides with $\mathcal F\bigl(H^2_{\mathrm{per}}(S^1)\bigr)$, so $\mathcal D(H_\theta)=H^2_{\mathrm{per}}(S^1)$ as claimed. Because the multiplier $\lambda_n(\theta)\to+\infty$, the operator has compact resolvent and purely discrete spectrum \[[6](/source-readout/target-relative-necessity-of-completion/references#bib-ReedSimonI), [7](/source-readout/target-relative-necessity-of-completion/references#bib-ReedSimonIV)\]. No relative-boundedness estimate is needed, and none is claimed: the first-order term $\tfrac{2i\theta}{L}\partial_x$ is *not* bounded on $L^2(S^1)$, and the diagonalization above avoids any appeal to such a statement.

## The spectrum

<div class="proposition">

**Proposition 10.1** (Eigenvalues and multiplicities).

<div id="prop:spectrum">

</div>

*The functions $$
\psi_n(x)=\frac{1}{\sqrt{L}}\,e^{2\pi i n x/L},
\qquad n\in\mathbb{Z},\tag{41}$$ form an orthonormal basis of $\mathcal{H}$ consisting of eigenvectors of $H_\theta$, and $$
D_{x}\psi_n=\frac{i\,(2\pi n-\theta)}{L}\,\psi_n,
\qquad\qquad
H_\theta\psi_n=\lambda_n(\theta)\,\psi_n
\quad\text{with}\quad
\lambda_n(\theta)=\left(\frac{2\pi n-\theta}{L}\right)^{\!2}.\tag{42}$$ Consequently the spectrum of $H_\theta$ is purely discrete and, *counted with multiplicity*, is the multiset $$
\operatorname{Spec}(H_\theta)=\Bigl\{\!\!\Bigl\{\,\lambda_n(\theta)=\Bigl(\tfrac{2\pi n-\theta}{L}\Bigr)^{2}
\ :\ n\in\mathbb{Z}\,\Bigr\}\!\!\Bigr\},\tag{43}$$ where $\{\!\{\cdot\}\!\}$ denotes a multiset: the eigenvalue $\lambda$ occurs in $\operatorname{Spec}(H_\theta)$ with multiplicity $$
m_\theta(\lambda)=\#\bigl\{\, n\in\mathbb{Z}: \lambda_n(\theta)=\lambda \,\bigr\}.\tag{44}$$*

</div>

<div class="proof">

*Proof.* Orthonormality and completeness of $\{\psi_n\}$ in $L^2(S^1)$ is the classical Fourier basis theorem. Each $\psi_n$ is smooth and periodic, hence lies in $H^2(S^1)=\mathcal D(H_\theta)$. Compute $$D_{x}\psi_n=\partial_x\psi_n-\frac{i\theta}{L}\psi_n
=\frac{2\pi i n}{L}\psi_n-\frac{i\theta}{L}\psi_n
=\frac{i(2\pi n-\theta)}{L}\,\psi_n,$$ which is the first identity in [(42)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:Dpsin). Applying $D_{x}$ once more, $$D_{x}^{\,2}\psi_n=\frac{i(2\pi n-\theta)}{L}\,D_{x}\psi_n
=\left(\frac{i(2\pi n-\theta)}{L}\right)^{\!2}\psi_n
=-\left(\frac{2\pi n-\theta}{L}\right)^{\!2}\psi_n,$$ so $H_\theta\psi_n=-D_{x}^2\psi_n=\bigl(\tfrac{2\pi n-\theta}{L}\bigr)^2\psi_n$, which is the second identity. Since $\{\psi_n\}_{n\in\mathbb{Z}}$ is a complete orthonormal system of eigenvectors with real eigenvalues $\lambda_n(\theta)\to+\infty$ as $|n|\to\infty$, the Fourier transform $\mathcal F$ carries $H_\theta$ with domain [(39)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:domain) onto multiplication by $(\lambda_n(\theta))_{n\in\mathbb{Z}}$ on its maximal domain, as in [(40)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:diagonalized). That operator is self-adjoint with compact resolvent, hence so is $H_\theta$, and its spectrum, counted with multiplicity, is the multiset [(43)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:spec) with multiplicities [(44)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:multiplicity).

Finally we check that [(43)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:spec) is well defined on the reduced source space, i.e. invariant under $\theta\mapsto\theta+2\pi k$: the substitution $n\mapsto n+k$ gives $\lambda_{n+k}(\theta+2\pi k)=\bigl(\tfrac{2\pi(n+k)-\theta-2\pi k}{L}\bigr)^2=\lambda_n(\theta)$, and $n\mapsto n+k$ is a bijection of $\mathbb{Z}$, so the multiset [(43)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:spec) is unchanged, with all multiplicities preserved. Thus $\operatorname{Spec}(H_\theta)$ depends only on $\theta$ mod $2\pi$, i.e. only on the point of $S_{\mathrm{flat}}$. ◻

</div>

<div class="remark">

**Remark 10.2** (Multiplicities are part of the answer).

<div id="rem:multiplicities">

</div>

We record [(43)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:spec) as a multiset, not as a subset of $\mathbb{R}$, because the multiplicity data is physically real and is not recoverable from the underlying set. For generic $\theta$, distinct $n$ give distinct $\lambda_n(\theta)$ and every eigenvalue is simple; but at $\theta=0$ the eigenvalues $\lambda_n$ and $\lambda_{-n}$ coincide for all $n$, so every nonzero eigenvalue has multiplicity two while $\lambda_0=0$ is simple; and at $\theta=\pi$ one finds $\lambda_n(\pi)=\bigl(\tfrac{2\pi n-\pi}{L}\bigr)^2=\bigl(\tfrac{\pi(2n-1)}{L}\bigr)^2$, so $\lambda_n(\pi)=\lambda_{1-n}(\pi)$ and every eigenvalue has multiplicity two. Discarding multiplicities would erase this structure and, in particular, would change the target: “the set of eigenvalues” and “the spectrum with multiplicities” are different correct-answer maps and may have different completions. We take the latter throughout.

</div>

## The spectral target and the curvature obstruction

<div class="definition">

**Definition 10.3** (Spectral target).

<div id="def:spectral-target">

</div>

Let $A_{\mathrm{spec}}$ be the set of multisets of nonnegative reals arising as spectra of the operators $H_\theta$, and define the correct-answer map $$
a_{\mathrm{spec}}\colon S_{\mathrm{flat}}\longrightarrow A_{\mathrm{spec}},
\qquad
a_{\mathrm{spec}}(\theta):=\operatorname{Spec}(H_\theta)\tag{45}$$ with $\operatorname{Spec}(H_\theta)$ as in [(43)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:spec). By the last paragraph of the proof of [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum), $a_{\mathrm{spec}}$ is well defined on $S_{\mathrm{flat}}$, i.e. on $\theta$ mod $2\pi$. We denote this target by $Q_{\mathrm{spec}}$.

</div>

<div class="theorem">

**Theorem 10.4** (The spectral target is obstructed by the curvature readout).

<div id="thm:curvature-obstruction">

</div>

*$Q_{\mathrm{spec}}$ is not exactly solvable from the curvature readout $p_F$ of [(34)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:pF). Explicitly, the reduced source states $\theta=0$ and $\theta=\pi$ satisfy $$
p_F(0)=p_F(\pi)=0,
\qquad\text{but}\qquad
\operatorname{Spec}(H_0)\neq\operatorname{Spec}(H_\pi).\tag{46}$$ Indeed $0\in\operatorname{Spec}(H_0)$ while $0\notin\operatorname{Spec}(H_\pi)$, and moreover $\min\operatorname{Spec}(H_0)=0<\pi^2/L^2=\min\operatorname{Spec}(H_\pi)$.*

</div>

<div class="proof">

*Proof.* First, $\theta=0$ and $\theta=\pi$ are distinct points of $S_{\mathrm{flat}}=\mathbb{R}/2\pi\mathbb{Z}$, since $\pi\not\equiv 0 \pmod{2\pi}$; equivalently their holonomies $h(0)=1$ and $h(\pi)=-1$ are distinct elements of $\mathrm{U}(1)$. They are therefore genuinely gauge-inequivalent physical configurations, not two labels for one state.

Both are flat: by [(27)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Ftheta), $F_0=F_\pi=0$, so $p_F(0)=p_F(\pi)=0$ and the two states lie in the same (indeed the only) fiber of $p_F$.

Now compute. By [(42)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:Dpsin) with $\theta=0$, $$\lambda_n(0)=\left(\frac{2\pi n}{L}\right)^{\!2},$$ and taking $n=0$ gives $\lambda_0(0)=0$, so $0\in\operatorname{Spec}(H_0)$; the corresponding eigenvector is the constant function $\psi_0=L^{-1/2}$, and indeed $D_{x}\psi_0=\partial_x\psi_0=0$ when $\theta=0$.

By [(42)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:Dpsin) with $\theta=\pi$, $$\lambda_n(\pi)=\left(\frac{2\pi n-\pi}{L}\right)^{\!2}
=\frac{\pi^2}{L^2}\,(2n-1)^2 .$$ Since $2n-1$ is odd for every $n\in\mathbb{Z}$, we have $(2n-1)^2\geq 1$, hence $$
\lambda_n(\pi)\geq\frac{\pi^2}{L^2}>0
\qquad\text{for every } n\in\mathbb{Z},\tag{47}$$ with equality precisely when $2n-1=\pm1$, i.e. $n\in\{0,1\}$. Therefore $0\notin\operatorname{Spec}(H_\pi)$ and $\min\operatorname{Spec}(H_\pi)=\pi^2/L^2$, attained with multiplicity two.

Since $0\in\operatorname{Spec}(H_0)$ and $0\notin\operatorname{Spec}(H_\pi)$, the two multisets differ, so $a_{\mathrm{spec}}(0)\neq a_{\mathrm{spec}}(\pi)$ while $p_F(0)=p_F(\pi)$. This is exactly the hypothesis [(6)](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#eq:obstruction-hyp) of [Corollary 3.2](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#cor:obstruction), whence $Q_{\mathrm{spec}}$ is not exactly solvable from $p_F$: no map $b\colon\{0\}\to A_{\mathrm{spec}}$ ,  that is, no single spectrum assigned to the curvature value $0$ ,  is correct for both $\theta=0$ and $\theta=\pi$. ◻

</div>

<div class="corollary">

**Corollary 10.5** (Holonomy is target-active for the spectrum).

<div id="cor:holonomy-active">

</div>

*Let $r=h\colon S_{\mathrm{flat}}\to\mathrm{U}(1)$, $h(\theta)=e^{i\theta}$, be the holonomy relation, and let $\Phi_{\mathrm{spec}}\bigl(0,e^{i\theta}\bigr):=\operatorname{Spec}(H_\theta)$, which is well defined by [Proposition 10.1](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#prop:spectrum), so that $a_{\mathrm{spec}}=\Phi_{\mathrm{spec}}\circ(p_F,h)$ in the sense of [(7)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:PhiQ). Then $h$ is active for $Q_{\mathrm{spec}}$ on the single fiber $F_0$ of $p_F$.*

</div>

<div class="proof">

*Proof.* Take $s_0=\theta=0$ and $s_1=\theta=\pi$ in [Definition 4.2](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#def:active). Both lie in $F_0$ by [(35)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:pF-fiber), and by [Theorem 10.4](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#thm:curvature-obstruction), $\Phi_{\mathrm{spec}}(0,h(0))=\operatorname{Spec}(H_0)\neq\operatorname{Spec}(H_\pi)=\Phi_{\mathrm{spec}}(0,h(\pi))$, which is [(8)](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#eq:active). ◻

</div>

The contrast with [Example 9.2](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#ex:unobstructed) is the whole point. The readout $p_F$ is the same in both cases, and the structural loss ,  the collapse of all of $\mathrm{U}(1)$ to a point ,  is the same. For the flatness target the loss is inactive and the readout is fully adequate. For the spectral target the same loss is active, and by [Theorem 4.3](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#thm:active-obstructs) it obstructs. Whether completion is necessary is a fact about the pair, never about the readout alone.

<div class="remark">

**Remark 10.6** (Physical reading).

<div id="rem:physical-reading">

</div>

The physical content of [Theorem 10.4](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#thm:curvature-obstruction) is the Aharonov–Bohm phenomenon in spectral form \[[1](/source-readout/target-relative-necessity-of-completion/references#bib-AharonovBohm), [11](/source-readout/target-relative-necessity-of-completion/references#bib-WuYang)\]. Along the circle the field strength vanishes ,  identically, and for dimensional reasons ,  so there is no local electromagnetic field anywhere on the particle’s accessible configuration space for it to feel. Nevertheless the charged particle’s energy levels depend on $\theta$: the covariant derivative [(36)](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#eq:Dx) twists the periodicity condition felt by the wavefunction, shifting the Fourier momenta from $2\pi n/L$ to $(2\pi n-\theta)/L$. At $\theta=\pi$ the shift is maximal, the momentum lattice is displaced by half a spacing, no mode has zero covariant momentum, and the ground-state energy is lifted from $0$ to $\pi^2/L^2$. The obstruction is not an artifact of the formalism; it is a measurable spectral shift produced by information that curvature does not record.

</div>
