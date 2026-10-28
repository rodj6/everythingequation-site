# A genuine same-readout bulk distinction

<div id="sec:witness">

</div>

Linearize about the positive-tension RS2 background, $$
ds^2=dy^2+e^{-2|y|/\ell}\eta_{\mu\nu}dx^\mu dx^\nu,
\qquad
\Lambda_5=-\frac{6}{\ell^2},
\qquad
\lambda=\frac{6}{\kappa_5^2\ell},\tag{11}$$ which is the tuning that makes the brane worldvolume flat. After fixing five-dimensional diffeomorphisms, the bulk perturbation retains gauge-invariant transverse-traceless (TT) gravitational modes.

<div class="proposition">

**Proposition 3.1** (Same readout, different future).

<div id="prop:witness">

</div>

*Let the admissible source domain include smooth, finite-energy TT bulk initial data. Consider $$\begin{aligned}
s_0&:\quad h^{\mathrm{TT}}_{AB}=0,
\qquad\text{(12)}\\
s_1&:\quad h^{\mathrm{TT}}_{AB}\ \text{a smooth wave packet whose initial
support lies a positive bulk distance from }\Sigma,
\qquad\text{(13)}
\end{aligned}$$ with the packet chosen so that $h^{\mathrm{TT}}_{AB}$ and its first time derivative vanish identically in a neighborhood of the brane on the initial Cauchy surface. Then $$
p(s_0)=p(s_1),\tag{14}$$ the configurations $s_0$ and $s_1$ are not physically equivalent in the sense of Definition [2.2](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#def:equiv), and there exists $\tau>0$ with $$
p(\Phi_\tau s_0)\ne p(\Phi_\tau s_1),\tag{15}$$ where $\Phi_t$ is the source evolution flow.*

</div>

<div class="proof">

*Proof.* Equation [(14)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:samereadout) holds because the readout [(10)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:readout) depends only on data at $\mathcal C_3\subset\Sigma$ and on a neighborhood of $\mathcal C_3$ within the brane, and by construction $h^{\mathrm{TT}}$ and $\partial_t h^{\mathrm{TT}}$ vanish there; the induced three-metric, its brane-intrinsic extrinsic curvature, and the matter data therefore coincide.

The two configurations are not gauge-related. The linearized five-dimensional Weyl tensor of $s_1$ is nonzero on the support of the packet, while that of $s_0$ vanishes identically. Weyl curvature is a tensor; a diffeomorphism cannot map a configuration with vanishing gauge-invariant curvature to one with nonvanishing curvature. Hence $[s_0]\ne[s_1]$ in $S_{\mathrm{RS}}$.

It remains to prove [(15)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:diffFuture), i.e. that a packet with the stated properties *exists* and does eventually disturb the brane. This is established by an explicit spectral construction, which we now give.

*(i) The homogeneous brane boundary condition.* Set the brane source in [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave) to zero and integrate that equation across the brane over $y\in(-\epsilon,\epsilon)$. The $\partial_y^2$ term gives $\partial_yh^{\mathrm{TT}}_{\mu\nu}\big|_{0^-}^{0^+}$; the $\delta(y)$ term gives $(4/\ell)h^{\mathrm{TT}}_{\mu\nu}(0)$; the remaining terms are bounded and drop out as $\epsilon\to0$. Using $Z_2$ symmetry, $\partial_yh^{\mathrm{TT}}\big|_{0^-}=-\partial_yh^{\mathrm{TT}}\big|_{0^+}$, so $$
\Bigl(\partial_y+\frac{2}{\ell}\Bigr)h^{\mathrm{TT}}_{\mu\nu}\Big|_{y=0^+}=0 ,\tag{16}$$ in the conventions of [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave). This is the homogeneous RS2 boundary condition.

*(ii) The mode basis.* Let $\{u_m(y)\}$ be the complete set of eigenfunctions of the transverse operator appearing in [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave), defined on the physical half-space $y\ge0$ with the homogeneous Robin condition [(16)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:homobc) at $y=0^+$ and the appropriate regularity condition in the bulk interior, and extended to the two-sided covering space by the required $Z_2$ reflection. The spectrum consists of

- one *normalizable discrete* zero mode $u_0\propto e^{-2|y|/\ell}$; and

- a *delta-normalized generalized continuum* $\{u_m\}_{m>0}$ of Bessel combinations satisfying [(16)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:homobc) and the bulk/horizon condition.

The continuum modes are *not* normalizable; they are delta-normalized in the usual generalized sense, and together with $u_0$ they furnish a complete resolution of the identity on the relevant space of TT bulk data \[[1](/source-readout/bulk-to-brane-projection/references#bib-RS2), [6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka), [7](/source-readout/bulk-to-brane-projection/references#bib-GKR)\].

*(iii) Time-symmetric continuum data.* Choose $$
\partial_t h^{\mathrm{TT}}_{\mu\nu}\big|_{t=0}=0,\tag{17}$$ together with a nonzero smooth, finite-energy TT displacement $h^{\mathrm{TT}}_{\mu\nu}\big|_{t=0}$ whose support lies in $y\ge y_0>0$ and which is *orthogonal to the normalizable zero mode*, so that it lies entirely in the KK continuum subspace. Such data exist: the zero-mode overlap is a single linear functional on the displacement, so given any two smooth profiles supported in disjoint regions of $y\ge y_0$ with nonzero and unequal zero-mode overlaps, an appropriate linear combination of them annihilates that functional while remaining nonzero, smooth, and supported away from the brane. Because the data vanish identically in a neighborhood of the brane, all compatibility conditions at $y=0$ hold trivially and the initial brane readout agrees with that of the zero solution ,  which is [(14)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:samereadout). The vanishing initial velocity [(17)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:tsym) makes the resulting solution, and hence its brane trace, *even in time*.

*(iv) The evolved brane trace.* Expanding the data of (iii) in the basis of (ii) and in spatial Fourier modes, and using that the zero-mode coefficient vanishes by construction while $\widehat g_{\mu\nu}\equiv0$ by [(17)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:tsym), the evolved solution on the brane is carried entirely by the continuum: $$
h^{\mathrm{TT}}_{\mu\nu}(t,\mathbf x,0)
=\int d^3k\int_0^\infty dm\;
u_m(0)\,\widehat f_{\mu\nu}(m,\mathbf k)\,
\cos\!\bigl(\sqrt{\mathbf k^2+m^2}\;t\bigr)\,
e^{i\mathbf k\cdot\mathbf x},\tag{18}$$ where $\widehat f_{\mu\nu}(m,\mathbf k)$ is the continuum spectral coefficient of the initial displacement.

*(v) Nonvanishing coupled component.* By [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um), $$
u_m(0)^2
=\frac{2}{\pi^2m\ell\bigl[J_1^2(m\ell)+Y_1^2(m\ell)\bigr]}>0
\qquad\text{for all }m>0,\tag{19}$$ so *no* continuum mode is decoupled from the brane. Moreover, by completeness of the basis of (ii) and the associated Plancherel identity, the spectral transform is an isometry onto the direct sum of the discrete and continuum spectral spaces. Since the displacement chosen in (iii) is nonzero and orthogonal to the discrete zero mode, its continuum spectral coefficient $\widehat f_{\mu\nu}$ is therefore nonzero on a set of positive spectral measure.

*(vi) Nonvanishing in the future.* Suppose, for contradiction, that $h^{\mathrm{TT}}_{\mu\nu}(t,\mathbf x,0)=0$ for every $t\ge0$ and every $\mathbf x$. By the evenness in time established in (iii), the brane trace then vanishes for every $t\in\mathbb R$. Fourier-transforming [(18)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:branetrace) in $\mathbf x$, each $\mathbf k$-component vanishes for all $t$. For fixed $\mathbf k$ the map $$
m\longmapsto\omega=\sqrt{\mathbf k^2+m^2}\tag{20}$$ is one-to-one on $m\ge0$, so [(18)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:branetrace) is, for each $\mathbf k$, a Fourier-cosine transform in the variable $\omega$ of the reparameterized coefficient. Injectivity of the Fourier-cosine transform therefore forces $$
u_m(0)\,\widehat f_{\mu\nu}(m,\mathbf k)=0
\qquad\text{for almost every }(m,\mathbf k).\tag{21}$$ Since $u_m(0)^2>0$ for every $m>0$ by [(19)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:upos), this forces $\widehat f_{\mu\nu}=0$ almost everywhere, contradicting (v). Hence the brane trace is nonzero at some $t=\tau>0$. Because the induced brane perturbation and the electric Weyl term $E_{\mu\nu}$ on the brane are determined by that trace and its normal derivative, [(15)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:diffFuture) follows.

*(vii) Causal delay.* Finally, the linearized bulk equation is hyperbolic with finite propagation speed on this background, so the brane trace remains *zero* until the causal future of the remote initial support reaches $y=0$. The disturbance is therefore genuinely delayed, not instantaneous, which is exactly why the two configurations share a readout now and differ later. Together with (vi) this establishes the required $\tau>0$ same-readout/different-future statement. ◻

</div>

<div class="corollary">

**Corollary 3.2** (Nonprojectability).

<div id="cor:nonproj">

</div>

*There exists no map $U_t$ on the instantaneous brane readout satisfying $p\circ\Phi_t=U_t\circ p$ for all admissible source data. Moreover, for any admissible preparation class rich enough to resolve the two witness states ,  for instance one containing delta preparations at $s_0$ and $s_1$, or any class whose members assign them different conditional future laws ,  universal (strong) Markov lumpability of the readout fails as well. Nothing here asserts that a deterministic witness by itself furnishes a stochastic experiment; that requires a preparation law.*

</div>

<div class="proof">

*Proof.* Such a $U_t$ would require $p(s_0)=p(s_1)\Rightarrow
p(\Phi_ts_0)=p(\Phi_ts_1)$, contradicting Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness). The stochastic statement is conditional as stated: a deterministic witness does not by itself define a stochastic experiment. It becomes a failure of lumpability once a preparation law is specified, and [(103)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:noflow) then defeats it because the two conditional future laws within the fiber differ. ◻

</div>

<div class="remark">

**Remark 3.3** (Scope).

<div id="rem:witnessScope">

</div>

Corollary [3.2](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#cor:nonproj) is conditional on the source domain admitting the normalizable bulk radiation used in the construction. If the model is *defined* to have a unique stationary vacuum bulk state with all homogeneous incoming data excluded, the witness is outside the domain and the fiber must be reassessed for that restricted domain; the forced retarded KK response and the effective-action results of Sections [6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:linear)–[11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) survive unchanged. See Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 1.

</div>

The construction also identifies *what* must be added. At linear order the required completion is the bulk gravitational initial data modulo the subspace whose retarded brane response vanishes identically; in a KK decomposition, the coupled continuum amplitudes modulo zero-response modes. In the nonlinear theory it is the bulk initial/boundary data or, after elimination, the induced nonlocal brane history functional. Adding the instantaneous value of $E_{\mu\nu}$ alone does *not* in general close its future evolution ,  as Section [4.3](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#sec:conservation) makes precise.
