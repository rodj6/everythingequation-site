# Abstract

We study, within the positive-tension, two-sided, $Z_2$-symmetric Randall–Sundrum model (RS2), the precise sense in which the instantaneous state of a brane observer fails to determine its own future, and the precise sense in which that failure can and cannot be detected. Selecting RS2 is an additional physical postulate; nothing below derives it. For a brane of tension $\lambda>0$ with five-dimensional coupling $\kappa_5^2$, bulk cosmological constant $\Lambda_5$, induced metric $q_{\mu\nu}$, and brane stress tensor $T_{\mu\nu}$, the Israel condition and the Gauss–Codazzi identity give the exact projected equation $G_{\mu\nu}[q]+\Lambda_4q_{\mu\nu}=\kappa_4^2T_{\mu\nu}
+\mathcal C^{\mathrm{RS}}_{\mu\nu}$ with $\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}$, where $\Pi_{\mu\nu}$ is quadratic in $T_{\mu\nu}$ and $E_{\mu\nu}$ is the electric projection of the bulk Weyl tensor. We construct an explicit gauge-inequivalent pair of bulk data with identical brane readout and different brane futures, proving that the source evolution admits no deterministic quotient flow on the instantaneous brane Cauchy state over the full RS2 source domain. We then evaluate the projection exactly in the homogeneous Friedmann sector, obtaining a positive $\rho^2$ term and a bulk-state-dependent dark-radiation term $\mu/a^4$. In the linear weak-field sector the Gaussian/Schur-complement elimination of the bulk is exact at linear tree level; evaluating the resulting response asymptotically for $r\gg\ell$ ,  a controlled expansion, not an exact closed form at arbitrary distance ,  gives the long-distance potentials $\Phi=-\tfrac{G_4M}{r}(1+\tfrac{2\ell^2}{3r^2}+\cdots)$ and $\Psi=-\tfrac{G_4M}{r}(1+\tfrac{\ell^2}{3r^2}+\cdots)$. Eliminating the common AdS radius $\ell$ between the two regimes yields the parameter-free cross-regime relation $A_\Psi=\tfrac12A_\Phi$, $B=\tfrac{\kappa_4^4}{24}A_\Phi
=\tfrac{\kappa_4^4}{12}A_\Psi$, where $H^2\supset B\rho^2$ and $A_\Phi,A_\Psi$ are the leading $1/r^3$ potential coefficients. Violation falsifies minimal RS2; agreement at a nonzero value is a parameter-saving cross-regime success but does not falsify a four-dimensional theory that treats the three coefficients as independent. Finally, an elementary pushforward lemma fixes the exact interpretive boundary: for every brane-only protocol, including adaptive ones, the induced Tier-1 history law reproduces the RS2 record distribution exactly, and in RS2 this obstruction is realized concretely by the four-dimensional gravity-plus-CFT description, which reproduces the same $1/r^3$ residue. The result is therefore positive at the level of model-relative projection and nonclosure, and negative at the level of unrestricted ontological discrimination.


# Introduction

<div id="sec:intro">

</div>

## The physical problem

A brane observer in a braneworld model has direct access to the induced metric on the brane and to the matter fields confined there. Gravity, however, propagates in the bulk. Two questions immediately arise, and they are logically independent.

The first is a question about *states*. Does the instantaneous brane data ,  induced three-metric, its brane-intrinsic extrinsic curvature, and matter Cauchy data ,  determine the subsequent brane history? If not, the brane state is incomplete relative to brane evolution: there exist bulk configurations, physically distinct after every gauge identification has been made, which look identical now and diverge later.

The second is a question about *theories*. Suppose the answer to the first question is negative. Does it follow that a brane observer could, even in principle, discover that the world is five-dimensional? This does not follow, and the distinction is the central logical point of this paper. Failure of a deterministic flow on the *instantaneous* state is not failure of every brane-only history law. Any source theory, pushed forward through any readout map, defines a brane-only stochastic process with exactly the correct statistics; that process is generally nonlocal, non-Markovian, and state-dependent, but it is a complete theory of brane records.

We answer both questions inside the specific model that makes them sharpest.

## Contributions

1.  **An explicit same-readout witness.** We exhibit two linearized RS2 source data sets which agree exactly on the instantaneous brane readout, are *not* related by any five-dimensional diffeomorphism (their gauge-invariant Weyl curvature differs), and whose brane futures differ. Existence of such data is proved, not asserted, by an explicit Kaluza–Klein spectral construction using the positivity of the brane spectral weight $u_m(0)^2$. This establishes failure of deterministic projectability of the source flow onto the instantaneous brane Cauchy state, over the full RS2 source domain (Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness), Theorem [12.1](/source-readout/bulk-to-brane-projection/main-theorem#thm:main) part 1). The result is conditional on that source domain: if the model is *defined* to admit only the stationary vacuum bulk state, the witness lies outside the domain (Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 1).

2.  **Derivation, not quotation, of the projected equation.** Section [4](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#sec:projected) carries out the Israel matching and Gauss–Codazzi projection in full, including all coefficients, signs, and dimensions, and derives the Bianchi/nonclosure relation $\nabla^\mu E_{\mu\nu}=\kappa_5^4\nabla^\mu\Pi_{\mu\nu}$, which constrains the divergence of $E_{\mu\nu}$ but not its transverse-traceless content.

3.  **Complete evaluation in two regimes.** The homogeneous sector (Section [5](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#sec:frw)) is evaluated exactly. In the linear weak-field sector (Section [6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:linear)) two distinct claims must be kept apart: the Gaussian/Schur-complement elimination of the bulk is *exact at linear tree level*, whereas the resulting metric potentials [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials) are a *controlled asymptotic evaluation* valid for $r\gg\ell$ and not an exact expression at arbitrary distance. Brane bending is treated explicitly throughout.

4.  **A parameter-eliminated cross-regime relation.** Eliminating $\ell$ between the two regimes gives $A_\Psi=A_\Phi/2$ and $B=\kappa_4^4A_\Phi/24$ (Section [7](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#sec:crossregime)). We claim no literature priority for this algebraic elimination; the two input results are established. Its content is a falsifiable, parameter-free link between two otherwise independent observational sectors.

5.  **An exact operational-discrimination boundary.** Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) gives the classical pushforward lemma ,  whose proof is immediate, and whose value is interpretive rather than technical ,  together with its quantum process-tensor and closed-time-path forms, and states exactly what is and is not excluded (Section [12](/source-readout/bulk-to-brane-projection/main-theorem#sec:main)).

## Relation to established results, and this paper’s contribution

<div id="sec:relation">

</div>

The physical inputs used below are established results and are credited as such. The RS2 model and its tuning are due to Randall and Sundrum \[[1](/source-readout/bulk-to-brane-projection/references#bib-RS2)\]. The junction condition is Israel’s \[[3](/source-readout/bulk-to-brane-projection/references#bib-Israel)\], and the projected brane equation with $\Pi_{\mu\nu}$ and $E_{\mu\nu}$ is that of Shiromizu, Maeda, and Sasaki \[[2](/source-readout/bulk-to-brane-projection/references#bib-SMS)\]. The brane Friedmann equation with its $\rho^2$ and $\mu/a^4$ terms is due to Binetruy, Deffayet, Ellwanger, and Langlois \[[4](/source-readout/bulk-to-brane-projection/references#bib-BDEL)\] and Mukohyama \[[5](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama1), [8](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama2)\]. The linearized brane propagator, the KK spectral weight, the brane-bending treatment, and the long-distance potentials are due to Garriga and Tanaka \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\] and Giddings, Katz, and Randall \[[7](/source-readout/bulk-to-brane-projection/references#bib-GKR)\]. The four-dimensional CFT reproduction of the $1/r^3$ residue is due to Duff and Liu \[[9](/source-readout/bulk-to-brane-projection/references#bib-DuffLiu)\] and related work \[[10](/source-readout/bulk-to-brane-projection/references#bib-APR), [18](/source-readout/bulk-to-brane-projection/references#bib-PerezVictoria)\]. The influence-functional \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\], Mori–Zwanzig \[[13](/source-readout/bulk-to-brane-projection/references#bib-MoriZwanzig)\], and process-tensor \[[14](/source-readout/bulk-to-brane-projection/references#bib-Pollock)\] formalisms are standard.

The distinctive contribution of this paper is their integration into a single proved chain. Concretely, we establish that $$
\text{same instantaneous brane state}
\;\not\Rightarrow\;
\text{same brane future},\tag{1}$$ by way of $$
\begin{gathered}
\text{explicit gauge-reduced bulk witness}
\;+\;
\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}\\
+\;\text{parameter-eliminated cross-regime relation}
\;+\;\text{exact operational-discrimination boundary}.
\end{gathered}\tag{2}$$ The projected equation and the weak-field and cosmological inputs are established physics; what is new here is the rigorous combined source/readout argument \[[21](/source-readout/bulk-to-brane-projection/references#bib-Paper1), [22](/source-readout/bulk-to-brane-projection/references#bib-Paper2), [23](/source-readout/bulk-to-brane-projection/references#bib-Paper3), [24](/source-readout/bulk-to-brane-projection/references#bib-Paper4), [25](/source-readout/bulk-to-brane-projection/references#bib-Paper5), [26](/source-readout/bulk-to-brane-projection/references#bib-Paper6)\], the explicit spectral construction of the same-readout witness, the cross-regime algebraic synthesis, and the exact statement of its interpretive boundary. We make no literature-priority claim for the coefficient elimination itself.

## Scope, and what is *not* claimed

<div id="sec:scope">

</div>

RS2 is not derived from any prior structure; its selection is a physical postulate. Nothing below shows that our universe *is* a projection. The cross-regime relation does not prove five-dimensional ontology: Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) exhibits a four-dimensional realization of the same weak-field residue, and Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves that no brane-only experiment can do better. The KK branch cut excludes only a pre-specified finite-pole free or tree-level linear alternative, not every local interacting four-dimensional theory. The long-distance weak-field expansion is not valid at $r\lesssim\ell$, and the bulk parameter $\mu$ is not fixed without a bulk-state condition. All nine conditions on which the positive results depend ,  including the bulk-state domain, the RS tuning, positive tension, the no-flux assumption, and the detuned-brane limitation ,  are collected once, in Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), and are not repeated elsewhere.


# The five-dimensional source model

<div id="sec:model">

</div>

## Action and conventions

Let $(\mathcal M_5,g_{AB})$ be a five-dimensional Lorentzian manifold containing a timelike hypersurface $\Sigma$ (the brane). Capital Latin indices $A,B,\dots$ run over the five dimensions; Greek indices $\mu,\nu,\dots$ are tangent to $\Sigma$; Latin $i,j,\dots$ are spatial on a brane Cauchy slice. The signature is $(-++++)$, and $c=\hbar=1$. The classical action is $$
\begin{aligned}
S_5[g,X,\psi]
={}&\frac{1}{2\kappa_5^2}\int_{\mathcal M_5}d^5x\,\sqrt{-g_5}\,
\bigl(R_5-2\Lambda_5\bigr)\\
&+\frac{1}{\kappa_5^2}\sum_{\pm}\int_{\Sigma}d^4x\,\sqrt{-q}\,K_\pm
+\int_{\Sigma}d^4x\,\sqrt{-q}\,
\bigl[-\lambda+\mathcal L_m(q,\psi)\bigr].
\end{aligned}\tag{3}$$ Gibbons–Hawking–York terms appear on *both* sides of the thin brane, with the corresponding outward normals. The embedding is $X^A(x^\mu)$, the tangent basis $e^A{}_\mu=\partial_\mu X^A$, the unit spacelike normal $n^A$, and $$
q_{\mu\nu}=g_{AB}e^A{}_\mu e^B{}_\nu,
\qquad
K_{\mu\nu}=e^A{}_\mu e^B{}_\nu\nabla_A n_B .\tag{4}$$ The sign convention for $\Lambda_5$ is fixed by requiring the bulk field equation away from the brane to read $$
{}^{(5)}G_{AB}+\Lambda_5g_{AB}=0 ,\tag{5}$$ so $[\Lambda_5]=L^{-2}$. The brane stress tensor is $$
T_{\mu\nu}=-\frac{2}{\sqrt{-q}}
\frac{\delta(\sqrt{-q}\,\mathcal L_m)}{\delta q^{\mu\nu}} .\tag{6}$$ Dimensionally, $[\kappa_5^2]=L^3$, $[\kappa_4^2]=L^2$, $[T_{\mu\nu}]=L^{-4}$, and $[E_{\mu\nu}]=L^{-2}$. The brane tension appears in [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action) integrated over $d^4x$, exactly like $\mathcal L_m$; it is therefore a four-dimensional energy density, $$
[\lambda]=L^{-4},
\qquad
[\kappa_5^2\lambda]=L^{3}\cdot L^{-4}=L^{-1}.\tag{7}$$ This is consistent throughout: $K_{\mu\nu}\sim\kappa_5^2\lambda$ has dimension $L^{-1}$, as an extrinsic curvature must; and $\kappa_4^2=\kappa_5^4\lambda/6$ gives $[\kappa_4^2]=L^{6}\cdot L^{-4}=L^{2}$, as required.

Varying [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action) with respect to $g_{AB}$ gives [(5)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:bulkEE) in the bulk together with the Israel junction condition at $\Sigma$; varying with respect to $X^A$ gives the brane equation of motion, which for a $Z_2$-symmetric configuration is implied by the junction condition and the Codazzi identity. The response tensor $\mathcal C^{\mathrm{RS}}_{\mu\nu}$ below is obtained from this variation; it is not introduced by hand.

## Physical equivalence and the reduced source space

<div class="definition">

**Definition 2.1** (Source configuration).

<div id="def:source">

</div>

A source configuration is a tuple $$
s=\bigl(g_{AB},\,X^A,\,\psi;\ \text{initial and boundary data}\bigr),\tag{8}$$ solving the five-dimensional constraints, with the brane embedded as a timelike hypersurface.

</div>

<div class="definition">

**Definition 2.2** (Physical equivalence).

<div id="def:equiv">

</div>

Two source configurations are physically equivalent when related by a five-dimensional diffeomorphism carrying the brane and its orientation to the same physical hypersurface, composed with an internal gauge transformation of the brane matter fields. The reduced source space is $$
S_{\mathrm{RS}}
=\frac{\{(g_{AB},X^A,\psi;\ \text{data})\ \text{solving the constraints}\}}
{\mathrm{Diff}_5\ltimes\mathcal G_m}.\tag{9}$$

</div>

This quotient does *not* remove bulk transverse-traceless gravitational waves, Kaluza–Klein continuum amplitudes, or the AdS–Schwarzschild mass parameter. Each changes gauge-invariant five-dimensional curvature invariants, energy flux, horizon structure, or the later induced brane metric, and hence is not pure gauge. This point is what makes the witness of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) a genuine physical distinction rather than a coordinate artifact.

## The instantaneous brane readout

<div id="sec:readout">

</div>

Choose a five-dimensional Cauchy surface $\mathcal C_5$ intersecting the brane worldvolume in a three-dimensional surface $\mathcal C_3$.

<div class="definition">

**Definition 2.3** (Tier-1 readout).

<div id="def:readout">

</div>

The instantaneous brane readout is the map $$
p:S_{\mathrm{RS}}\longrightarrow T_{\mathrm{brane}},
\qquad
p(s)=\bigl(\gamma_{ij},\Theta_{ij};\ \psi,\pi_\psi\bigr)\big|_{\mathcal C_3},\tag{10}$$ where $\gamma_{ij}$ is the three-metric induced on $\mathcal C_3$, $\Theta_{ij}$ is the extrinsic curvature of $\mathcal C_3$ regarded as a spatial hypersurface *within the brane worldvolume*, and $(\psi,\pi_\psi)$ are the brane matter Cauchy data. The constraints induced from the five-dimensional equations and the matter gauge constraints are imposed; spatial diffeomorphisms of $\mathcal C_3$ and matter gauge transformations are quotiented.

</div>

Two features of this definition matter. First, $\Theta_{ij}$ records the gauge-independent first normal derivative of the induced metric along the brane without presupposing that the brane possesses a closed intrinsic Einstein Hamiltonian ,  which is exactly what is at issue. Second, the quotient by spatial diffeomorphisms and the imposition of the constraints means that no lapse-, shift-, or time-coordinate-dependent velocity enters, so the readout is not made noninjective by a trivial gauge artifact.

The readout is physically motivated inside the model: standard-model matter is confined to $\Sigma$, and local rods, clocks, detectors, and gravitational-wave interferometers respond to induced brane fields. Bulk data can be inferred only through their subsequent influence on those fields; they are not components of the present brane state.

<div class="remark">

**Remark 2.4** (Instantaneity is essential).

<div id="rem:instant">

</div>

If the readout were redefined to include the *complete* brane history for all times, any bulk distinction that changes that history would by definition already be distinguished. The dynamical question is precisely whether the present brane state closes under time evolution. Sections [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) and [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) answer the two versions of the question in opposite directions, and it is essential not to conflate them.

</div>


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


# The exact projected Einstein equation

<div id="sec:projected">

</div>

## Israel junction condition

Let the brane surface stress tensor be $$
S_{\mu\nu}=-\lambda q_{\mu\nu}+T_{\mu\nu},
\qquad
S\equiv q^{\mu\nu}S_{\mu\nu}=-4\lambda+T .\tag{22}$$ The Israel condition \[[3](/source-readout/bulk-to-brane-projection/references#bib-Israel)\] for a thin shell in five dimensions is $$
[K_{\mu\nu}]\equiv K^+_{\mu\nu}-K^-_{\mu\nu}
=-\kappa_5^2\Bigl(S_{\mu\nu}-\tfrac13q_{\mu\nu}S\Bigr),\tag{23}$$ the factor $\tfrac13$ being $1/(D-2)$ with $D=5$. Imposing the RS2 $Z_2$ reflection symmetry gives $K^+_{\mu\nu}=-K^-_{\mu\nu}$, so $[K_{\mu\nu}]=2K_{\mu\nu}$ evaluated with the outward normal on one side, and hence $$
\boxed{\;
K_{\mu\nu}
=-\frac{\kappa_5^2}{2}
\Bigl[\,T_{\mu\nu}+\tfrac13(\lambda-T)q_{\mu\nu}\,\Bigr].
\;}\tag{24}$$ Indeed, $S_{\mu\nu}-\tfrac13q_{\mu\nu}S
=T_{\mu\nu}-\lambda q_{\mu\nu}
-\tfrac13q_{\mu\nu}(T-4\lambda)
=T_{\mu\nu}+\tfrac13q_{\mu\nu}(\lambda-T)$, which gives [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) on halving. Traces: $$
K=q^{\mu\nu}K_{\mu\nu}
=-\frac{\kappa_5^2}{2}\Bigl[T+\tfrac43(\lambda-T)\Bigr]
=-\frac{\kappa_5^2}{2}\Bigl[\tfrac43\lambda-\tfrac13T\Bigr]
=-\frac{\kappa_5^2}{6}\bigl(4\lambda-T\bigr).\tag{25}$$

Thus, under $Z_2$ symmetry, the extrinsic curvature is fixed *algebraically* by the brane stress tensor. This is precisely why the quadratic correction below descends to brane data while the projected Weyl tensor does not.

## Gauss–Codazzi projection

<div id="sec:gauss">

</div>

The Gauss equation for the embedding is $$
{}^{(4)}R_{\mu\nu\rho\sigma}
={}^{(5)}R_{ABCD}\,
e^A{}_\mu e^B{}_\nu e^C{}_\rho e^D{}_\sigma
+K_{\mu\rho}K_{\nu\sigma}-K_{\mu\sigma}K_{\nu\rho}.\tag{26}$$ Decompose the five-dimensional Riemann tensor into Weyl and Ricci parts, $$
{}^{(5)}R_{ABCD}
={}^{(5)}C_{ABCD}
+\tfrac23\bigl(g_{A[C}{}^{(5)}R_{D]B}
-g_{B[C}{}^{(5)}R_{D]A}\bigr)
-\tfrac16\,{}^{(5)}R\,g_{A[C}g_{D]B},\tag{27}$$ and use [(5)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:bulkEE), which gives ${}^{(5)}R_{AB}=\tfrac23\Lambda_5g_{AB}$ and ${}^{(5)}R=\tfrac{10}{3}\Lambda_5$ away from the brane. Define the electric projection of the bulk Weyl tensor, $$
E_{\mu\nu}:={}^{(5)}C_{ABCD}\,
n^Ae^B{}_\mu\,n^Ce^D{}_\nu ,\tag{28}$$ which is symmetric and traceless, $q^{\mu\nu}E_{\mu\nu}=0$, by the trace identities of the Weyl tensor and $n\cdot n=1$.

Contracting [(26)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:gauss) twice and substituting [(27)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:weyldecomp) yields the well-known intermediate identity $$
G_{\mu\nu}
=-\tfrac12\Lambda_5q_{\mu\nu}
+Q_{\mu\nu}(K)-E_{\mu\nu},\tag{29}$$ where the complete extrinsic-curvature contribution is $$
Q_{\mu\nu}(K)
=KK_{\mu\nu}-K_{\mu\beta}K_\nu{}^\beta
-\tfrac12q_{\mu\nu}\bigl(K^2-K_{\alpha\beta}K^{\alpha\beta}\bigr).\tag{30}$$

We now insert [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) into [(30)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:QK). Write $K_{\mu\nu}=-\tfrac{\kappa_5^2}{2}\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr)$ with $\alpha\equiv\tfrac13(\lambda-T)$, so that $K=-\tfrac{\kappa_5^2}{2}(T+4\alpha)$. Then $$\begin{aligned}
KK_{\mu\nu}
&=\frac{\kappa_5^4}{4}\bigl(T+4\alpha\bigr)
\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr),
\qquad\text{(31)}\\
K_{\mu\beta}K_\nu{}^\beta
&=\frac{\kappa_5^4}{4}
\bigl(T_{\mu\beta}T_\nu{}^\beta
+2\alpha T_{\mu\nu}+\alpha^2q_{\mu\nu}\bigr),
\qquad\text{(32)}\\
K^2
&=\frac{\kappa_5^4}{4}\bigl(T+4\alpha\bigr)^2,
\qquad
K_{\alpha\beta}K^{\alpha\beta}
=\frac{\kappa_5^4}{4}
\bigl(T_{\alpha\beta}T^{\alpha\beta}
+2\alpha T+4\alpha^2\bigr).
\qquad\text{(33)}
\end{aligned}$$ Substituting [(31)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:KK1)–[(33)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:KK3) directly into [(30)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:QK), without yet using the value of $\alpha$, gives the unsimplified expression $$
\begin{aligned}
Q_{\mu\nu}
=\frac{\kappa_5^4}{4}\Bigl[
&\bigl(T+4\alpha\bigr)\bigl(T_{\mu\nu}+\alpha q_{\mu\nu}\bigr)
-\bigl(T_{\mu\beta}T_\nu{}^\beta
+2\alpha T_{\mu\nu}+\alpha^2q_{\mu\nu}\bigr)\\
&-\tfrac12 q_{\mu\nu}
\bigl(\bigl(T+4\alpha\bigr)^2
-T_{\alpha\beta}T^{\alpha\beta}
-2\alpha T-4\alpha^2\bigr)
\Bigr].
\end{aligned}\tag{34}$$ Expanding and collecting on the independent structures $T_{\mu\nu}$, $T_{\mu\beta}T_\nu{}^\beta$, and $q_{\mu\nu}$: $$
Q_{\mu\nu}
=\frac{\kappa_5^4}{4}\Bigl[
\bigl(T+2\alpha\bigr)T_{\mu\nu}
-T_{\mu\beta}T_\nu{}^\beta
+q_{\mu\nu}\Bigl(
\tfrac12 T_{\alpha\beta}T^{\alpha\beta}
-\tfrac12 T^2
-2\alpha T
-3\alpha^2
\Bigr)\Bigr].\tag{35}$$ Indeed, the $q_{\mu\nu}$ coefficient collects $\alpha(T+4\alpha)-\alpha^2
-\tfrac12\bigl(T^2+8\alpha T+16\alpha^2
-T_{\alpha\beta}T^{\alpha\beta}-2\alpha T-4\alpha^2\bigr)
=\tfrac12 T_{\alpha\beta}T^{\alpha\beta}-\tfrac12T^2-2\alpha T-3\alpha^2$, while the $T_{\mu\nu}$ coefficient collects $(T+4\alpha)-2\alpha=T+2\alpha$.

Now restore $\alpha=\tfrac13(\lambda-T)$ in [(35)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsimplified) and collect by powers of $\lambda$. The $T_{\mu\nu}$ coefficient becomes $T+\tfrac23(\lambda-T)=\tfrac13T+\tfrac23\lambda$, contributing $\tfrac{\kappa_5^4}{4}\bigl(\tfrac13 T T_{\mu\nu}
+\tfrac23\lambda T_{\mu\nu}\bigr)
=\tfrac{\kappa_5^4}{12}TT_{\mu\nu}+\tfrac{\kappa_5^4\lambda}{6}T_{\mu\nu}$. The $q_{\mu\nu}$ coefficient becomes $\tfrac12 T_{\alpha\beta}T^{\alpha\beta}-\tfrac12T^2
-\tfrac23(\lambda-T)T-\tfrac13(\lambda-T)^2
=\tfrac12T_{\alpha\beta}T^{\alpha\beta}-\tfrac16T^2-\tfrac13\lambda^2$, contributing $\tfrac{\kappa_5^4}{8}q_{\mu\nu}T_{\alpha\beta}T^{\alpha\beta}
-\tfrac{\kappa_5^4}{24}q_{\mu\nu}T^2
-\tfrac{\kappa_5^4\lambda^2}{12}q_{\mu\nu}$. Together with the $-\tfrac{\kappa_5^4}{4}T_{\mu\beta}T_\nu{}^\beta$ term this is exactly $$
\boxed{\;
Q_{\mu\nu}
=-\frac{\kappa_5^4\lambda^2}{12}\,q_{\mu\nu}
+\frac{\kappa_5^4\lambda}{6}\,T_{\mu\nu}
+\kappa_5^4\,\Pi_{\mu\nu},
\;}\tag{36}$$ with $$
\boxed{\;
\Pi_{\mu\nu}
=-\tfrac14 T_{\mu\beta}T_\nu{}^\beta
+\tfrac1{12}\,T\,T_{\mu\nu}
+\tfrac18\,q_{\mu\nu}T_{\alpha\beta}T^{\alpha\beta}
-\tfrac1{24}\,q_{\mu\nu}T^2 .
\;}\tag{37}$$ No cross terms are dropped and no $\lambda$-dependence is hidden in the purely quadratic part: all $\lambda^2$ dependence enters through $-\tfrac13\lambda^2$ in the $q_{\mu\nu}$ coefficient, and all $\lambda T$ dependence through $\tfrac23\lambda$ in the $T_{\mu\nu}$ coefficient.

Substituting [(36)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsorted) into [(29)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Gintermediate) gives the Shiromizu–Maeda–Sasaki equation \[[2](/source-readout/bulk-to-brane-projection/references#bib-SMS)\]: $$
\boxed{\;
G_{\mu\nu}[q]
=-\Lambda_4\,q_{\mu\nu}
+\kappa_4^2\,T_{\mu\nu}
+\kappa_5^4\,\Pi_{\mu\nu}
-E_{\mu\nu},
\;}\tag{38}$$ with $$
\boxed{\;
\Lambda_4=\tfrac12\Bigl(\Lambda_5+\tfrac16\kappa_5^4\lambda^2\Bigr),
\qquad
\kappa_4^2=8\pi G_4=\tfrac16\kappa_5^4\lambda .
\;}\tag{39}$$ Equivalently, writing the equation in the form $G_{\mu\nu}+\Lambda_4q_{\mu\nu}=\kappa_4^2T_{\mu\nu}
+\mathcal C^{\mathrm{RS}}_{\mu\nu}$, the RS2 realization of the source-induced metric response is $$
\boxed{\;
\mathcal C^{\mathrm{RS}}_{\mu\nu}
=\kappa_5^4\,\Pi_{\mu\nu}-E_{\mu\nu}.
\;}\tag{40}$$

Every coefficient in [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS)–[(40)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:CRS) follows from the action [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action), the junction condition [(23)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:israel), and the Gauss identity [(26)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:gauss). Dimensions are consistent: $[\kappa_5^4]=L^6$, $[T_{\mu\nu}T^{\mu\nu}]=L^{-8}$, so $[\kappa_5^4\Pi]=L^{-2}=[E_{\mu\nu}]=[G_{\mu\nu}]$.

<div class="remark">

**Remark 4.1** (The superscript is not decorative). The tensor [(40)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:CRS) is *not* predicted by any abstract source/readout considerations. It is the response obtained after choosing five-dimensional Einstein gravity, the RS2 brane action, the $Z_2$ junction condition, and the stated source domain. Other source models induce different response tensors.

</div>

## Conservation, Bianchi, and nonclosure

<div id="sec:conservation">

</div>

With no exchange of matter energy into the bulk, the Codazzi equation $D^\mu\bigl(K_{\mu\nu}-Kq_{\mu\nu}\bigr)
={}^{(5)}R_{AB}n^Ae^B{}_\nu=\tfrac23\Lambda_5\,n_Ae^A{}_\nu=0$ combined with [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed) gives $$
\nabla^\mu T_{\mu\nu}=0 .\tag{41}$$ Applying the four-dimensional contracted Bianchi identity $\nabla^\mu G_{\mu\nu}=0$ to [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) then yields $$
\boxed{\;
\nabla^\mu E_{\mu\nu}
=\kappa_5^4\,\nabla^\mu\Pi_{\mu\nu}.
\;}\tag{42}$$

This is the exact nonclosure statement in local form. Equation [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) fixes the *divergence* of $E_{\mu\nu}$, which is four of its components’ worth of information, but leaves its transverse-traceless content ,  precisely the free bulk gravitational response ,  undetermined by brane data. The projected system [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS)–[(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) is covariantly consistent but is not in general a closed four-dimensional initial-value system. This is the tensorial counterpart of Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness): the wave packet of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) supplies two solutions with identical instantaneous brane data and different later $E_{\mu\nu}$.


# Exact evaluation in the homogeneous sector

<div id="sec:frw">

</div>

Take an FRW brane and a perfect fluid, $$
ds_4^2=-dt^2+a(t)^2\,d\Sigma_k^2,
\qquad
T_{\mu\nu}=\rho\,u_\mu u_\nu+p\,h_{\mu\nu},
\qquad
h_{\mu\nu}=q_{\mu\nu}+u_\mu u_\nu,\tag{43}$$ with $u^\mu u_\mu=-1$. Then $T=-\rho+3p$ and $T_{\alpha\beta}T^{\alpha\beta}=\rho^2+3p^2$.

<div class="lemma">

**Lemma 5.1** (Perfect-fluid $\Pi_{\mu\nu}$).

<div id="lem:PiFRW">

</div>

*For [(43)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:frwansatz), [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi) evaluates to $$
\boxed{\;
\Pi_{\mu\nu}
=\frac{\rho}{12}\Bigl[\rho\,u_\mu u_\nu+(\rho+2p)\,h_{\mu\nu}\Bigr].
\;}\tag{44}$$*

</div>

<div class="proof">

*Proof.* Direct substitution. In the rest frame, $T_{00}=\rho$, $T_{ij}=p\,q_{ij}$, and $$\Pi_{00}
=\frac{\rho^2}{4}
+\frac{(-\rho+3p)\rho}{12}
-\frac{\rho^2+3p^2}{8}
+\frac{(-\rho+3p)^2}{24}
=\frac{\rho^2}{12},$$ where the first term carries a $+$ sign because $-\tfrac14T_{0\beta}T_0{}^\beta
=-\tfrac14 T_{00}T_0{}^0=-\tfrac14\rho\cdot(-\rho)=+\tfrac14\rho^2$, and the third and fourth carry the signs induced by $q_{00}=-1$. Assembling the terms: $\tfrac{\rho^2}{4}
-\tfrac{\rho^2}{12}+\tfrac{p\rho}{4}
-\tfrac{\rho^2}{8}-\tfrac{3p^2}{8}
+\tfrac{\rho^2}{24}-\tfrac{p\rho}{4}+\tfrac{3p^2}{8}
=\rho^2\bigl(\tfrac14-\tfrac1{12}-\tfrac18+\tfrac1{24}\bigr)
=\tfrac{\rho^2}{12}$. Similarly $\Pi_{ij}=\tfrac{1}{12}\rho(\rho+2p)\,q_{ij}$. These are the $u_\mu u_\nu$ and $h_{\mu\nu}$ components of [(44)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:PiFRW). ◻

</div>

Homogeneity, isotropy, tracelessness, and [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) (whose right-hand side vanishes in this sector because $\Pi_{\mu\nu}$ is a conserved perfect-fluid combination) force $$
E_{\mu\nu}=-\mathcal U(t)\Bigl(u_\mu u_\nu+\tfrac13h_{\mu\nu}\Bigr),
\qquad
\dot{\mathcal U}+4H\mathcal U=0
\quad\Longrightarrow\quad
\mathcal U(t)=\frac{3\mu}{a^4(t)} ,\tag{46}$$ where $\mu$ is a constant fixed by the bulk geometry ,  in an AdS–Schwarzschild realization, proportional to the bulk black-hole mass parameter \[[5](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama1), [4](/source-readout/bulk-to-brane-projection/references#bib-BDEL)\]. It is *not* determined by the brane matter state.

The response is now fully evaluated: $$
\boxed{\;
\mathcal C^{\mathrm{RS}}_{00}
=\frac{\kappa_5^4}{12}\rho^2+\frac{3\mu}{a^4},
\qquad
\mathcal C^{\mathrm{RS}}_{ij}
=\Bigl[\frac{\kappa_5^4}{12}\rho(\rho+2p)+\frac{\mu}{a^4}\Bigr]q_{ij}.
\;}\tag{47}$$

<div class="proposition">

**Proposition 5.2** (Exact brane Friedmann equations).

<div id="prop:friedmann">

</div>

*For the model of Section [2](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#sec:model) with an FRW brane, conserved brane matter, and no bulk matter flux, $$
\boxed{\;
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}
+\frac{\kappa_4^2}{3}\rho
+\frac{\kappa_5^4}{36}\rho^2
+\frac{\mu}{a^4}.
\;}\tag{48}$$ Using $\kappa_4^2=\kappa_5^4\lambda/6$ this is equivalently $$
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}
+\frac{\kappa_4^2}{3}\rho\Bigl(1+\frac{\rho}{2\lambda}\Bigr)
+\frac{\mu}{a^4},\tag{49}$$ and, with $\dot\rho+3H(\rho+p)=0$, $$
\dot H-\frac{k}{a^2}
=-\frac{\kappa_4^2}{2}(\rho+p)\Bigl(1+\frac{\rho}{\lambda}\Bigr)
-\frac{2\mu}{a^4}.\tag{50}$$*

</div>

<div class="proof">

*Proof.* Take the $00$ component of [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) with [(44)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:PiFRW)–[(46)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:EFRW). The Einstein tensor gives $G_{00}=3(H^2+k/a^2)$; the correction contributes $\kappa_5^4\Pi_{00}-E_{00}
=\tfrac{\kappa_5^4}{12}\rho^2+3\mu/a^4$. Dividing by $3$ gives [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann). Substituting $\kappa_5^4=6\kappa_4^2/\lambda$ gives $\kappa_5^4\rho^2/36=\kappa_4^2\rho^2/(6\lambda)$, i.e. the $\rho^2/(2\lambda)$ term in [(49)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann2). Differentiating [(49)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann2) and eliminating $\dot\rho$ with conservation gives [(50)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:accel). ◻

</div>

The signs and scalings are fixed and physically transparent. Positive brane tension gives a *positive* $\rho^2$ correction, enhancing the expansion rate at high density. The Weyl contribution scales as radiation, but its magnitude is set by a bulk-state parameter, not by brane matter. For $\rho/\lambda\ll1$ and $\mu/a^4\ll H^2$, standard four-dimensional cosmology is recovered.

The homogeneous sector already exhibits the exact division between what the projection fixes and what it leaves open:

- the form and coefficient of the $\rho^2$ term are fixed once $\kappa_5$ and $\lambda$ are specified;

- the exponent $a^{-4}$ is fixed by symmetry and conservation alone;

- the constant $\mu$ is bulk initial/boundary data, undetermined by the brane matter state. It is not a prediction of the model without a bulk-state condition.


# Exact tree-level bulk elimination in the linear weak-field sector

<div id="sec:linear">

</div>

The homogeneous sector evaluates the nonlinear local response but hides the spectral structure of the eliminated bulk gravitons. That structure is explicit at linear order \[[1](/source-readout/bulk-to-brane-projection/references#bib-RS2), [6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka), [7](/source-readout/bulk-to-brane-projection/references#bib-GKR)\].

## Bulk perturbation equation, brane bending, and the boundary condition

<div id="sec:bending">

</div>

In Randall–Sundrum gauge, a TT perturbation of the background [(11)](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#eq:background) obeys $$
\Bigl[
e^{2|y|/\ell}\,\Box_4
+\partial_y^2-\frac{4}{\ell^2}
+\frac{4}{\ell}\,\delta(y)
\Bigr]h^{\mathrm{TT}}_{\mu\nu}
=-2\kappa_5^2\,\Sigma^{\mathrm{TT}}_{\mu\nu}\,\delta(y).\tag{51}$$ The source $\Sigma_{\mu\nu}$ contains the brane stress tensor *and* the brane-bending contribution required by the junction condition. In the Garriga–Tanaka convention \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\], $$
\boxed{\;
\Sigma_{\mu\nu}
=T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T
+\frac{2}{\kappa_5^2}\,\partial_\mu\partial_\nu\hat\xi^5,
\qquad
\Box_4\hat\xi^5=\frac{\kappa_5^2}{6}\,T .
\;}\tag{52}$$ The bending equation makes $\Sigma^\mu{}_\mu=0$: indeed $\eta^{\mu\nu}\Sigma_{\mu\nu}
=T-\tfrac43T+\tfrac{2}{\kappa_5^2}\Box_4\hat\xi^5
=-\tfrac13T+\tfrac13T=0$. Together with $\partial^\mu T_{\mu\nu}=0$ it also gives $\partial^\mu\Sigma_{\mu\nu}=0$, as RS gauge requires.

Brane bending is not an optional refinement. It is the statement that the brane, being a dynamical surface, is displaced from $y=0$ in RS gauge by the presence of matter; restoring the Gaussian-normal frame adapted to the physical brane produces, up to a tangential gauge transformation, $$
\bar h_{\mu\nu}
=h_{\mu\nu}
+\ell\,\partial_\mu\partial_\nu\hat\xi^5
+\frac{2}{\ell}\,\eta_{\mu\nu}\hat\xi^5
-\partial_{(\mu}\hat\xi_{\nu)} .\tag{53}$$ Decomposing $h_{\mu\nu}=h^{(m)}_{\mu\nu}+h^{(\xi)}_{\mu\nu}$ into the part sourced by $T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T$ and the part sourced by the bending term, and choosing the tangential gauge to cancel the pure gradient pieces, the brane value reduces to $$
\boxed{\;
\bar h_{\mu\nu}
=h^{(m)}_{\mu\nu}
+\frac{2}{\ell}\,\eta_{\mu\nu}\,\hat\xi^5 .
\;}\tag{54}$$ This single term converts the apparent $\tfrac13$ trace coefficient of the RS-gauge source into the four-dimensional massless $\tfrac12$ coefficient in the zero-mode response ,  as Section [6.3](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:projectors) makes explicit. Omitting brane bending, or using the wrong trace coefficient, produces a graviton that is not the four-dimensional graviton and gives the wrong light-bending prediction.

The retarded Green function imposes causal response; regularity, i.e. absence of incoming radiation from the AdS horizon, selects the forced solution. If arbitrary incoming bulk radiation is admitted, a homogeneous solution must be added; *that homogeneous term is exactly the initial-state contribution associated with the same-readout fiber of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)*. The two constructions are the same physics seen twice.

## Brane-to-brane propagator: zero mode and KK continuum

<div id="sec:propagator">

</div>

The brane-to-brane retarded Green function of [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave) has the spectral resolution $$
\boxed{\;
\begin{aligned}
G_R(p;0,0)
&=G_R^{(0)}(p)+G_R^{(\mathrm{KK})}(p),\\
G_R^{(0)}(p)
&=-\frac{1}{\ell}\,
\frac{1}{-(\omega+i0^+)^2+\mathbf k^2},\\
G_R^{(\mathrm{KK})}(p)
&=-\int_0^\infty dm\,
\frac{u_m(0)^2}{m^2-(\omega+i0^+)^2+\mathbf k^2} .
\end{aligned}
\;}\tag{55}$$ The normalized continuum modes of the transverse operator are Bessel combinations, and their brane value gives the spectral weight $$
\boxed{\;
u_m(0)^2
=\frac{2}{\pi^2 m\ell\bigl[J_1^2(m\ell)+Y_1^2(m\ell)\bigr]} .
\;}\tag{56}$$ Using the small-argument behavior $J_1(x)\simeq x/2$ and $Y_1(x)\simeq-2/(\pi x)$, one has $J_1^2+Y_1^2\simeq 4/(\pi^2x^2)$, hence $$
u_m(0)^2
=\frac{m\ell}{2}
+O\bigl((m\ell)^3\log(m\ell)\bigr),
\qquad m\ell\ll1 .\tag{57}$$

Two structural facts follow. The first term in [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR) is the normalizable four-dimensional graviton zero mode: an isolated massless pole. The second is a *continuum* of physical KK modes with nonnegative spectral density $u_m(0)^2\ge0$, producing a branch cut beginning at threshold $m=0$.

<div class="remark">

**Remark 6.1** (What the branch cut does and does not exclude).

<div id="rem:cut">

</div>

A finite-dimensional classical linear system, or a finite set of free fields with a finite-order quadratic action evaluated at tree level, has only a finite rational pole structure and cannot reproduce [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR)–[(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) exactly. It does *not* follow that every four-dimensional theory is excluded. An interacting four-dimensional field theory, a nonlocal theory, an infinite tower, a continuum of fields, or a conformal sector reproduces a branch cut without difficulty ,  multiparticle thresholds generically produce cuts. See Sections [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) and [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 8.

</div>

## Tensor projectors and the response operator

<div id="sec:projectors">

</div>

At linear order the bulk gravitational action is quadratic. Integration over bulk modes is therefore Gaussian, and the resulting Schur complement is *exact at tree level*. We first retain the tensor structure that distinguishes the massless graviton from the massive continuum.

For four-momentum $p$, define the transverse tensor $$
\theta_{\mu\nu}
=\eta_{\mu\nu}-\frac{p_\mu p_\nu}{p^2+i0^+},\tag{58}$$ and the Barnes–Rivers spin projectors on symmetric tensors \[[20](/source-readout/bulk-to-brane-projection/references#bib-PinheiroPires)\], $$
\begin{aligned}
P^{(2)}_{\mu\nu\rho\sigma}
&=\tfrac12\bigl(\theta_{\mu\rho}\theta_{\nu\sigma}
+\theta_{\mu\sigma}\theta_{\nu\rho}\bigr)
-\tfrac13\theta_{\mu\nu}\theta_{\rho\sigma},\\
P^{(0)}_{\mu\nu\rho\sigma}
&=\tfrac13\theta_{\mu\nu}\theta_{\rho\sigma}.
\end{aligned}\tag{59}$$ (The $\tfrac13$ is $1/(D-1)$ with $D=4$, appropriate to the three-dimensional transverse subspace.)

<div class="lemma">

**Lemma 6.2** (Trace coefficients).

<div id="lem:traces">

</div>

*For a conserved source, $p^\mu T_{\mu\nu}=0$, so $\theta_{\mu\nu}T^{\mu\nu}=T$ and $$
\bigl(P^{(2)}T\bigr)_{\mu\nu}=T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T,
\qquad
\bigl(P^{(0)}T\bigr)_{\mu\nu}=\tfrac13\theta_{\mu\nu}T .\tag{60}$$ Consequently $$
\Bigl(P^{(2)}-\tfrac12P^{(0)}\Bigr)T
=T_{\mu\nu}-\tfrac12\theta_{\mu\nu}T ,\tag{61}$$ which is the massless four-dimensional graviton structure, while a massive spin-two exchange gives $P^{(2)}T=T_{\mu\nu}
-\tfrac13\theta_{\mu\nu}T$, the van Dam–Veltman–Zakharov structure.*

</div>

<div class="proof">

*Proof.* Contract [(59)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:BR) with $T^{\rho\sigma}$ using $\theta_{\mu\rho}T^{\rho\sigma}\theta_{\sigma\nu}=T_{\mu\nu}$ for a conserved source, and $\theta_{\rho\sigma}T^{\rho\sigma}=T$. Then $P^{(2)}T=T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T$ and $P^{(0)}T=\tfrac13\theta_{\mu\nu}T$. Subtracting half the latter, $T_{\mu\nu}-\tfrac13\theta_{\mu\nu}T-\tfrac16\theta_{\mu\nu}T
=T_{\mu\nu}-\tfrac12\theta_{\mu\nu}T$. ◻

</div>

The brane-bending field of Section [6.1](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:bending) is precisely what converts the scalar coefficient of the massless part from $\tfrac13$ to $\tfrac12$: the term $\tfrac{2}{\ell}\eta_{\mu\nu}\hat\xi^5$ in [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar) supplies a trace piece proportional to $\Box_4^{-1}T$, i.e. $-\tfrac16\theta_{\mu\nu}T$ times the zero-mode propagator. Consequently the complete gauge-invariant response to a conserved brane source, modulo longitudinal pure-gauge terms, is $$
\boxed{\;
\bar h_{\mu\nu}(p)
=-\mathbb R_{R\,\mu\nu}{}^{\rho\sigma}(p)\,T_{\rho\sigma}(p),
\;}\tag{62}$$ with $$
\boxed{\;
\mathbb R_R(p)
=2\kappa_5^2\Bigl[
G_R^{(0)}(p)\Bigl(P^{(2)}-\tfrac12P^{(0)}\Bigr)
+G_R^{(\mathrm{KK})}(p)\,P^{(2)}
\Bigr].
\;}\tag{63}$$ Equation [(63)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:RR) fixes both the normalization and the relative tensor coefficients. It is equivalent to the RS-gauge source equation [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave) together with the bending equation [(52)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bending) and the transformation [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar). It displays directly why the zero mode carries the four-dimensional massless trace coefficient while the KK continuum carries the massive spin-two coefficient ,  the physical content of the fact that RS2 has no vDVZ discontinuity in the observable weak-field limit.

## Causal influence functional

<div id="sec:ctp">

</div>

The same result follows from a causal influence functional, which is the formulation that makes the initial-state dependence explicit \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\]. Causality requires the closed-time-path fields to remain doubled. Set $$
h_c=\tfrac12(h_++h_-),
\qquad
h_\Delta=h_+-h_- .\tag{64}$$ On the physical conserved-source subspace let $\mathbb K_R=\mathbb R_R^{-1}$. For equal physical sources on the two contour branches, the quadratic closed-time-path functional is $$
\boxed{\;
\Gamma^{(2)}_{\mathrm{CTP}}[h_c,h_\Delta;T]
=\tfrac12\bigl\langle h_\Delta,\mathbb K_R h_c\bigr\rangle
+\tfrac12\bigl\langle h_\Delta,T\bigr\rangle
+\tfrac{i}{2}\bigl\langle h_\Delta,\mathbb N h_\Delta\bigr\rangle ,
\;}\tag{65}$$ where the pairing includes momentum integration and contraction on the conserved tensor subspace. The factor $\tfrac12$ in the source term is the standard linear metric coupling $\delta S_m=\tfrac12\int T^{\mu\nu}\delta h_{\mu\nu}$. The symmetric kernel $\mathbb N$ is fixed by the chosen bulk density matrix; it controls fluctuations and does not enter the mean classical field. Varying [(65)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:CTP) with respect to $h_\Delta$ and then taking the physical limit $h_\Delta=0$ gives $$
\tfrac12\,\mathbb K_R h_c+\tfrac12\,T=0
\qquad\Longrightarrow\qquad
h_c=-\mathbb R_R\,T ,\tag{66}$$ reproducing [(62)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:response). Restricted to the TT source in RS gauge this reduces to $$
h_c^{\mathrm{TT}}=-2\kappa_5^2\,\mathcal G_R\,\Sigma^{\mathrm{TT}},\tag{67}$$ where $\mathcal G_R$ denotes the retarded convolution operator whose momentum-space kernel is the brane-to-brane Green function $G_R(p;0,0)=G_R^{(0)}(p)+G_R^{(\mathrm{KK})}(p)$ of [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR), acting as $$
\bigl(\mathcal G_R\,\Sigma^{\mathrm{TT}}\bigr)(x)
=\int d^4x'\;\mathcal G_R(x-x')\,\Sigma^{\mathrm{TT}}(x'),
\qquad
\mathcal G_R(x-x')
=\int\frac{d^4p}{(2\pi)^4}\;e^{ip\cdot(x-x')}\,G_R(p;0,0).\tag{68}$$ This recovers the normalization used in [(51)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bulkwave). Thus the standard $\tfrac12 h_{\mu\nu}T^{\mu\nu}$ matter coupling *reproduces* the response normalization rather than fixing it by convention.

The retarded prescription fixes causality. In the positive-tension model the KK spectral density [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) is positive, so the linear continuum introduces no negative-norm graviton. The negative-tension branch instead gives the wrong sign of the four-dimensional Newton constant and is not used.

<div class="remark">

**Remark 6.3** (Status of the elimination).

<div id="rem:treelevel">

</div>

This is a *tree-level, linear-response* calculation, and must not be confused with the exact nonlinear equation [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS). Gauge fixing isolates the physical TT operator; brane bending restores the response required by the conserved four-dimensional source and its Ward identity. At tree level, ghost fields carry no external classical source and contribute no exchange term between conserved brane stresses; ghost and graviton determinants enter only beyond this approximation. Ultraviolet local terms at coincident points renormalize the brane tension, the Newton coupling, and admissible higher-curvature operators; the nonanalytic continuum term and its $1/r^3$ residue at $r>0$ are insensitive to those local subtractions. Covariant conservation of the resulting response agrees with [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE). The bulk initial state enters the full closed-time-contour functional through its density matrix: under the no-incoming/regular choice the forced retarded kernel is fixed; changing that choice changes both the homogeneous response and the fluctuation kernel $\mathbb N$.

</div>

## Evaluated long-distance response

<div id="sec:longdistance">

</div>

For a static source and $r\gg\ell$, the three-dimensional massive Green function is $-e^{-mr}/(4\pi r)$. The small-$m$ spectral weight [(57)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:umsmall) therefore *evaluates* the KK contribution rather than leaving it as a formal kernel: $$
G^{(\mathrm{KK})}(r)
=-\frac{1}{4\pi r}\int_0^\infty dm\,u_m(0)^2\,e^{-mr}
=-\frac{1}{4\pi r}\cdot\frac{\ell}{2}\int_0^\infty dm\,m\,e^{-mr}
+\cdots
=-\frac{\ell}{8\pi r^3}
+O\!\Bigl(\frac{\ell^3}{r^5}\log\frac r\ell\Bigr),\tag{69}$$ using $\int_0^\infty m e^{-mr}dm=r^{-2}$. Adding the zero mode $G^{(0)}(r)=-1/(4\pi\ell r)$ gives the brane scalar Green function $$
G(\mathbf x,0;\mathbf x',0)
=-\frac{1}{4\pi\ell r}
\Bigl[1+\frac{\ell^2}{2r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr],
\qquad r=|\mathbf x-\mathbf x'| .\tag{70}$$

For a nonrelativistic point source, $T_{00}=M\delta^3(\mathbf x)$ and $T=-M\delta^3(\mathbf x)$, so the bending equation [(52)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:bending) gives $$
\nabla^2\hat\xi^5=-\frac{\kappa_5^2M}{6}\,\delta^3(\mathbf x),
\qquad
\hat\xi^5(r)=\frac{\kappa_5^2M}{24\pi r} .\tag{71}$$ Substituting [(70)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:Gtotal) into $h^{(m)}=-2\kappa_5^2\,G*\bigl(T_{\mu\nu}-\tfrac13\eta_{\mu\nu}T\bigr)$, adding $2\eta_{\mu\nu}\hat\xi^5/\ell$ as in [(54)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:hbar), and using $G_4=\kappa_5^2/(8\pi\ell)$ (Section [6.6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:normalization)), one obtains, outside a nonrelativistic spherical source of mass $M$, $$
\boxed{\;
\bar h_{00}
=\frac{2G_4M}{r}
\Bigl[1+\frac{2\ell^2}{3r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr],
\;}\tag{72}$$ $$
\boxed{\;
\bar h_{ij}
=\frac{2G_4M}{r}
\Bigl[1+\frac{\ell^2}{3r^2}
+O\!\Bigl(\frac{\ell^4}{r^4}\log\frac r\ell\Bigr)\Bigr]\delta_{ij}.
\;}\tag{73}$$ Equivalently, in asymptotically Minkowski Newtonian gauge, $$
ds^2=-(1+2\Phi)\,dt^2+(1-2\Psi)\,d\mathbf x^2,\tag{74}$$ the gauge-invariant static potentials are $$
\boxed{\;
\Phi(r)=-\frac{G_4M}{r}
\Bigl(1+\frac{2\ell^2}{3r^2}+\cdots\Bigr),
\qquad
\Psi(r)=-\frac{G_4M}{r}
\Bigl(1+\frac{\ell^2}{3r^2}+\cdots\Bigr).
\;}\tag{75}$$ This reproduces the Garriga–Tanaka result \[[6](/source-readout/bulk-to-brane-projection/references#bib-GarrigaTanaka)\].

Three observations. First, the correction is *not* a mass renormalization: it has a different radial scaling and cannot be absorbed into $G_4M$. Second, the coefficients in $\Phi$ and $\Psi$ are unequal, which correlates nonrelativistic acceleration with light deflection: the former probes $\Phi$, the latter $\Phi+\Psi$. Third, in momentum space the same physics is the KK branch cut of [(55)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:GR), not an extra isolated pole.

The result is controlled by $$
\frac{G_4M}{r}\ll1,
\qquad
\frac{\ell}{r}\ll1 ,\tag{76}$$ and assumes the minimal two-derivative bulk action and the regular retarded bulk state. *It is not an expansion valid at $r\lesssim\ell$*, where the full spectral integral [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um) must be used.

## One-sided versus two-sided normalization

<div id="sec:normalization">

</div>

Two conventions occur in the literature and must not be mixed. In the two-sided covering-space convention used throughout this paper, $$
y\in(-\infty,\infty),
\qquad
a(y)=e^{-|y|/\ell},\tag{77}$$ and the zero-mode reduction gives $$
\frac{1}{\kappa_4^2}
=\frac{1}{\kappa_5^2}\int_{-\infty}^{\infty}dy\;a(y)^2
=\frac{1}{\kappa_5^2}\int_{-\infty}^{\infty}dy\;e^{-2|y|/\ell}
=\frac{\ell}{\kappa_5^2},\tag{78}$$ so that $$
\boxed{\;
\kappa_4^2=\frac{\kappa_5^2}{\ell},
\qquad
G_4=\frac{G_5}{\ell}.
\;}\tag{79}$$ If instead one works on a single AdS patch $y\ge0$ with the same undoubled bulk normalization, the integral is $\ell/2$ and $$
\kappa_4^2=\frac{2\kappa_{5,\mathrm{one}}^2}{\ell},
\qquad
G_4=\frac{2G_{5,\mathrm{one}}}{\ell}.\tag{80}$$ Equivalently, the $Z_2$ orbifold fundamental domain may be assigned a doubled bulk action, reproducing the two-sided convention. The weak-field coefficients $2\ell^2/3$ and $\ell^2/3$, expressed in terms of the *measured* $G_4$, are unchanged provided the gravitational coupling and the number of AdS patches are converted consistently.

The same distinction appears in the four-dimensional dual description (Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim)). One AdS patch corresponds to one cutoff CFT contribution; a two-sided geometry has two identical bulk regions and hence a doubled CFT polarization contribution. Duff and Liu \[[9](/source-readout/bulk-to-brane-projection/references#bib-DuffLiu)\] present the one-patch normalization explicitly; doubling both the bulk contribution and its CFT counterpart gives the two-sided convention used here. Their equality of the nonanalytic $1/r^3$ residue therefore remains valid, but only after this conversion. No equation in this paper combines a one-sided Newton-constant relation with a two-sided junction condition.


# The parameter-eliminated cross-regime prediction

<div id="sec:crossregime">

</div>

Under the RS tuning $$
\Lambda_5=-\frac{6}{\ell^2},
\qquad
\lambda=\frac{6}{\kappa_5^2\ell},
\qquad
\kappa_4^2=\frac{\kappa_5^2}{\ell},\tag{81}$$ one also has $\lambda=6/(\kappa_4^2\ell^2)$, and [(39)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:constants) gives $\Lambda_4=\tfrac12\bigl(-6/\ell^2+\tfrac16\kappa_5^4\lambda^2\bigr)=0$ exactly, since $\kappa_5^4\lambda^2=\kappa_5^4\cdot36/(\kappa_5^4\ell^2)
=36/\ell^2$.

<div class="remark">

**Remark 7.1** (Status of $\Lambda_4$ below). The symbol $\Lambda_4$ retained in [(82)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:phenomB) is a *phenomenological* background term that may be fitted or supplied by a much smaller late-time brane energy component. It is not an independent parameter of the exactly tuned flat-brane theorem. Applying the coefficient relation on a weakly curved cosmological background requires $H\ell\ll1$ and negligible detuning corrections in the compared regime. See Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure), item 9.

</div>

Write the two independently measurable departures from four-dimensional GR, *without* using RS2 in the fits, as $$
H^2+\frac{k}{a^2}
=\frac{\Lambda_4}{3}+\frac{\kappa_4^2}{3}\rho
+B\rho^2+\frac{\mu}{a^4},\tag{82}$$ $$
\Phi(r)=-\frac{G_4M}{r}\Bigl(1+\frac{A_\Phi}{r^2}+\cdots\Bigr),
\qquad
\Psi(r)=-\frac{G_4M}{r}\Bigl(1+\frac{A_\Psi}{r^2}+\cdots\Bigr).\tag{83}$$

<div class="theorem">

**Theorem 7.2** (Cross-regime coefficient relation).

<div id="thm:crossregime">

</div>

*In minimal, exactly tuned, positive-tension RS2 with the regular retarded bulk state, the source calculation gives $$
B=\frac{\kappa_5^4}{36}=\frac{\kappa_4^4\ell^2}{36},
\qquad
A_\Phi=\frac{2\ell^2}{3},
\qquad
A_\Psi=\frac{\ell^2}{3},\tag{84}$$ and eliminating $\ell$ yields $$
\boxed{\;
A_\Psi=\tfrac12 A_\Phi,
\qquad
B=\frac{\kappa_4^4}{24}A_\Phi
=\frac{\kappa_4^4}{12}A_\Psi .
\;}\tag{85}$$*

</div>

<div class="proof">

*Proof.* $B=\kappa_5^4/36$ is read off from [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann). Using $\kappa_5^2=\kappa_4^2\ell$ from [(79)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:G4) gives $\kappa_5^4=\kappa_4^4\ell^2$, hence $B=\kappa_4^4\ell^2/36$. The values $A_\Phi=2\ell^2/3$, $A_\Psi=\ell^2/3$ are read off from [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials). Eliminating, $\ell^2=3A_\Phi/2=3A_\Psi$, so $A_\Psi=A_\Phi/2$, and $B=\tfrac{\kappa_4^4}{36}\cdot\tfrac{3A_\Phi}{2}
=\tfrac{\kappa_4^4}{24}A_\Phi
=\tfrac{\kappa_4^4}{12}A_\Psi$. ◻

</div>

#### Dimensional consistency.

$[\kappa_4^2]=L^2$, $[A_\Phi]=L^2$, hence $[B]=L^4\cdot L^2=L^6$; and with $[\rho]=L^{-4}$, $[B\rho^2]=L^{6-8}=L^{-2}=[H^2]$, as required.

#### Scope, and what it does and does not do.

The relation [(85)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:crossregime) contains no unknown brane parameter once $G_4$ and the phenomenological coefficients are measured. It is independent of the dark-radiation constant $\mu$, whose $a^{-4}$ scaling is separable from $\rho^2$ when the matter equation of state and energy density are independently constrained. Its content is exact within its *intersecting* regimes:

- $B$ comes from the exact homogeneous thin-brane equation [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann);

- $A_\Phi,A_\Psi$ are the leading terms of the controlled $r\gg\ell$ weak-field expansion [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials);

- the same $\ell$ and the same tuned source action govern both sectors;

- no fit of $\ell$ remains after the coefficients are compared.

A violation of either equality falsifies minimal classical RS2 under the stated assumptions. A statistically significant *nonzero* common signal satisfying both equalities is a parameter-saving, out-of-sample success for RS2 and favours it over pure four-dimensional GR in model comparison. It does *not* falsify a four-dimensional theory that independently parameterizes all three coefficients: such a theory fits either agreement or violation. Only a restricted alternative predicting an *incompatible* relation is excluded. Note also the all-zero limit: $A_\Phi=A_\Psi=B=0$ satisfies both equalities trivially and merely bounds $\ell$ from above. And even nonzero agreement does not establish that the five-dimensional variables are ontologically fundamental, as Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves.


# Minimal dynamical completion and memory

<div id="sec:completion">

</div>

## Linear completion: a quotient by the kernel of the brane response

Restrict first to the linearized, fixed-background problem with fixed brane forcing, for which the gauge-reduced bulk perturbation data form a vector space. Let $z_0$ denote the bulk gravitational initial data omitted by the readout [(10)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:readout), and define the brane-response operator $$
\mathcal O_\Sigma z_0
=\text{the induced brane response generated by }z_0,\tag{86}$$ with brane initial data and applied brane sources held fixed. Put $N_\Sigma=\ker\mathcal O_\Sigma$.

<div class="definition">

**Definition 8.1** (Minimal linear dynamical completion).

<div id="def:Edyn">

</div>

$$
\boxed{\;
E^{\mathrm{RS}}_{\mathrm{dyn}}
=\frac{\{\text{admissible gauge-reduced bulk initial data}\}}
{N_\Sigma} .
\;}\tag{87}$$

</div>

This quotient discards exactly the bulk directions that never influence the brane, and retains no more. In the linear spectral representation it retains precisely the coupled KK amplitudes together with the allowed incoming homogeneous modes. Under a prescribed regular no-incoming state, the homogeneous amplitudes are fixed and the entire remaining response is the retarded convolution encoded by $G_R^{(\mathrm{KK})}$.

Schematically, in each relevant projected tensor sector, the exact linear brane equation takes the causal, generally nonlocal form $$
\mathcal D_0 h_\Sigma(x)
+\int d^4x'\;\mathcal K_R(x,x')\,h_\Sigma(x')
=T_\Sigma(x)+\eta_{z_0}(x),\tag{88}$$ with $$
\mathcal K_R
=\bigl(G_R^{(0)}+G_R^{(\mathrm{KK})}\bigr)^{-1}
-\bigl(G_R^{(0)}\bigr)^{-1}.\tag{89}$$ Tensor indices and normalizations are suppressed throughout [(88)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:memoryeq)–[(89)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:KR): the symbols $\mathcal D_0$, $T_\Sigma$, and $\mathcal K_R$ denote the appropriately normalized operators and sources within the projected tensor sector under consideration. In equation [(89)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:KR), $G_R^{(0)}+G_R^{(\mathrm{KK})}$ is specifically the scalar coefficient multiplying $P^{(2)}$ in the full response operator [(63)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:RR); thus $\mathcal K_R$ is the spin-two-sector correction relative to the zero-mode operator. The $P^{(0)}$ contribution occurs only through the massless combination $G_R^{(0)}\bigl(P^{(2)}-\tfrac12P^{(0)}\bigr)$ and must be retained through the full projector-valued response [(63)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:RR). The combination $P^{(2)}-\tfrac12P^{(0)}$ is the complete massless-graviton exchange structure, not a scalar sector. Equation [(88)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:memoryeq) is accordingly a schematic sector-by-sector statement, not a fully explicit tensor identity; the explicit tensor content is [(62)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:response)–[(63)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:RR). The term $\eta_{z_0}$ is the homogeneous response of the unresolved bulk initial data. Two points deserve emphasis. First, $\mathcal K_R$ is *computed* by the KK spectral integral [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um); it is not an arbitrary phenomenological memory function. Second, the same spectral density fixes both the branch cut of Section [6.2](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:propagator) and the long-distance $1/r^3$ residue of Section [6.5](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:longdistance) ,  they are one prediction, not two. This structure agrees with the explicit integro-differential brane perturbation equation of Mukohyama \[[8](/source-readout/bulk-to-brane-projection/references#bib-Mukohyama2)\].

## Nonlinear completion

At the nonlinear level there is generally no vector-space kernel and hence no quotient by a subspace. Instead:

<div class="definition">

**Definition 8.2** (Operational equivalence of bulk data).

<div id="def:nonlinearEquiv">

</div>

Two admissible gauge-reduced bulk data sets are equivalent when, for the same retained brane initial data, they induce the same complete brane record for every allowed brane protocol. The minimal predictive completion is the set of these equivalence classes.

</div>

The tensor $E_{\mu\nu}$ is the *local manifestation* of the missing bulk response, not a substitute for it. Its divergence equation [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE) constrains it but does not evolve it; supplying $E_{\mu\nu}$ instantaneously does not close the system, because its subsequent evolution requires the bulk problem. The nonlinear completion is therefore neither the linear quotient [(87)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:Edyn) nor, in general, a finite set of four-dimensional functions.


# What the source model fixes

<div id="sec:fixed">

</div>

Conditional on RS2, the source action fixes the following:

1.  the tensor form and numerical coefficients of $\Pi_{\mu\nu}$, [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi);

2.  the sign of the high-density correction for a positive-tension brane;

3.  the $\rho^2$ and $a^{-4}$ scalings in the homogeneous sector;

4.  the massless graviton pole plus a positive KK continuum in linear RS2;

5.  the leading $1/r^3$ potential correction and the ratio of the two metric potentials;

6.  the cross-regime relation [(85)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:crossregime);

7.  covariant conservation of the total projected response.

Everything *not* fixed ,  the choice of RS2 itself, the value of $\ell$, the bulk state and $\mu$, the boundary condition, possible non-minimal operators, and the ultraviolet completion ,  is collected with the corresponding failure modes in Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure). The cross-regime relation removes $\ell$ from one comparison; it does not remove the physical assumptions defining the source model.


# The strongest conventional four-dimensional description

<div id="sec:fourdim">

</div>

## Homogeneous sector

Define $$
T^{\mathrm{eff}}_{\mu\nu}
=T_{\mu\nu}
+\frac{\kappa_5^4}{\kappa_4^2}\Pi_{\mu\nu}
-\frac{1}{\kappa_4^2}E_{\mu\nu}.\tag{90}$$ The projected equation [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) becomes ordinary four-dimensional Einstein gravity sourced by $T^{\mathrm{eff}}_{\mu\nu}$. In the homogeneous sector, $$
\rho_{\mathrm{eff}}
=\rho+\frac{\rho^2}{2\lambda}
+\frac{3\mu}{\kappa_4^2a^4},
\qquad
p_{\mathrm{eff}}
=p+\frac{\rho(\rho+2p)}{2\lambda}
+\frac{\mu}{\kappa_4^2a^4}.\tag{91}$$ This four-dimensional fluid description reproduces the background expansion *exactly*, and may perfectly well be regarded as fundamental rather than induced. Background cosmological data alone cannot decide between the two readings.

## Linear sector, and the CFT realization of the $1/r^3$ residue

The quadratic action of Section [6](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#sec:linear) is already a four-dimensional *nonlocal* action once $\mathcal G_R$ is taken as its primitive kernel. That such nonlocal braneworld actions with explicit KK form factors can be written down constructively is shown, in the two-brane setting, by Barvinsky *et al.* \[[11](/source-readout/bulk-to-brane-projection/references#bib-Barvinsky)\]; we invoke that work only as a constructive control on the *form* of the eliminated action, not as an identity for RS2, whose single-brane spectrum is a continuum rather than a discrete tower. It contains the same massless pole, the same continuum branch cut, the same causal response, and the same weak-field coefficients as the five-dimensional description.

The four-dimensional alternative is not hypothetical. The stress-tensor vacuum-polarization loop of an appropriate four-dimensional conformal sector corrects the graviton propagator with the *same* $1/r^3$ coefficient as the classical RS2 bulk calculation \[[9](/source-readout/bulk-to-brane-projection/references#bib-DuffLiu), [10](/source-readout/bulk-to-brane-projection/references#bib-APR), [18](/source-readout/bulk-to-brane-projection/references#bib-PerezVictoria)\]. Thus even the most characteristic weak-field residue of the model has a conventional four-dimensional realization. This is the concrete form taken, inside RS2, by the general obstruction proved in Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq).

The discrimination supplied by the model is therefore $$
\text{minimal RS2}
\quad\text{versus}\quad
\text{4D GR or another \emph{independently restricted} model class},\tag{92}$$ and *not* $$
\text{source projection}
\quad\text{versus}\quad
\text{every possible brane-only theory}.\tag{93}$$


# The operational-equivalence obstruction

<div id="sec:opeq">

</div>

Sections [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)–[8](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#sec:completion) establish nonclosure of the *instantaneous* brane state. That statement must be sharply distinguished from the far stronger claim that no autonomous description using only brane observables can exist. The stronger claim is *false* when arbitrary history dependence is allowed.

## Classical pushforward lemma

Let $\mathfrak E_T$ be the class of all experiments that prepare, intervene on, and read only Tier-1 (brane) variables. For each protocol $e\in\mathfrak E_T$, a fully specified source theory defines a probability measure $\mu^S_e$ on its admissible source histories $\Gamma^e_S$. Let $$
R_e:\Gamma^e_S\longrightarrow\Gamma^e_T\tag{94}$$ be the measurable map returning the complete Tier-1 record.

<div class="lemma">

**Lemma 11.1** (Pushforward representation of Tier-1 operational laws).

<div id="lem:pushforward">

</div>

*Define $$
\boxed{\;
\nu_e=(R_e)_*\mu^S_e,
\qquad e\in\mathfrak E_T .
\;}\tag{95}$$ Then $M^\star_T=\{\nu_e:e\in\mathfrak E_T\}$ is a theory whose sample space contains only Tier-1 histories and whose prediction for every Tier-1 experiment coincides exactly with the source prediction: $$
d_{\mathrm{TV}}\bigl((R_e)_*\mu^S_e,\ \nu^\star_e\bigr)=0
\qquad\text{for every }e\in\mathfrak E_T ,\tag{96}$$ where $\nu^\star_e:=\nu_e$ regarded as the surrogate theory’s law.*

</div>

<div class="proof">

*Proof.* By the definition of pushforward, for every bounded measurable statistic $F:\Gamma^e_T\to\mathbb R$, $$
\int_{\Gamma^e_T}F(\gamma)\,\nu_e(d\gamma)
=\int_{\Gamma^e_S}F(R_e\omega)\,\mu^S_e(d\omega).\tag{97}$$ Taking $F$ to be the indicator of an arbitrary measurable event proves equality of the complete record distributions, hence [(96)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:TVzero). Taking $F$ to encode an estimator, a randomized decision rule, a stopping rule, a correlation function, or a loss function proves equality of its distribution as well. Adaptive interventions are already covered, because each complete adaptive protocol *is* a member of $\mathfrak E_T$ and its record map is measurable. Marginalization, random mixtures of protocols, and causal consistency are inherited because pushforward commutes with measurable composition and with marginalization. ◻

</div>

<div class="remark">

**Remark 11.2** (Status of Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward)).

<div id="rem:pushstatus">

</div>

The equality [(96)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:TVzero) is mathematically immediate from the definition of pushforward; nothing in the proof is deep, and no claim of mathematical originality is made for it. Its significance here is *interpretive*. It establishes the exact boundary on what brane-only observations can discriminate, and hence fixes the strongest conclusion that the positive results of Sections [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)–[7](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#sec:crossregime) can support. The substantive work lies in identifying which restrictions on the alternative class *do* permit discrimination (Section [11.3](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:boundary)), and in exhibiting ,  through the four-dimensional CFT description of Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) ,  that the obstruction is realized concretely in RS2 and not merely as a formal possibility.

</div>

For standard Borel state spaces the finite-time laws disintegrate into causal history kernels, $$
\nu(dx_{0:n}\mid u_{0:n-1})
=K_0(dx_0)\prod_{j=0}^{n-1}
K_{j+1}\bigl(dx_{j+1}\mid x_{0:j},u_{0:j}\bigr),\tag{98}$$ an autonomous stochastic law on Tier-1 histories and controls. It need not be Markovian, finite-dimensional, local, simple, or state-independent. Those are *explanatory* restrictions, not consequences of autonomy in the unrestricted operational sense.

## Quantum and field-theoretic forms

In quantum theory, equality of one-time reduced states, or of an ordinary in–out generating functional, is insufficient: interventions can expose temporal correlations. The exact Tier-1 object is the *process tensor* \[[14](/source-readout/bulk-to-brane-projection/references#bib-Pollock)\]. If $\mathcal A^{(j)}_{x_j}$ are Tier-1 instruments and $\mathcal U_{j+1:j}$ the joint source propagator, then $$
\Pr(\mathbf x\mid\mathbf A)
=\operatorname{Tr}_{TE}\Bigl[
\mathcal A^{(n)}_{x_n}\,\mathcal U_{n:n-1}\cdots
\mathcal A^{(0)}_{x_0}(\rho_{TE})\Bigr].\tag{99}$$ Contracting every eliminated-sector index defines a positive, causally normalized multilinear functional $\Upsilon^T_{n:0}$ with Tier-1 legs only, such that $$
\Pr(\mathbf x\mid\mathbf A)
=\Upsilon^T_{n:0}\bigl[
\mathcal A^{(n)}_{x_n},\mathcal A^{(n-1)}_{x_{n-1}},\ldots,
\mathcal A^{(0)}_{x_0}\bigr].\tag{100}$$

The field-theoretic counterpart is the Feynman–Vernon closed-time-path influence functional \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\]. With $S[\phi,\chi]=S_T[\phi]+S_E[\chi]+S_{\mathrm{int}}[\phi,\chi]$ and a factorized initial environment state, $$
e^{iS_{\mathrm{IF}}[\phi_+,\phi_-]}
=\int_{\chi_+(t_f)=\chi_-(t_f)}
\mathcal D\chi_+\,\mathcal D\chi_-\;
\rho_E(\chi^+_i,\chi^-_i)\,
e^{iS_E[\chi_+]+iS_{\mathrm{int}}[\phi_+,\chi_+]
-iS_E[\chi_-]-iS_{\mathrm{int}}[\phi_-,\chi_-]},\tag{101}$$ $$
Z_T[J_+,J_-]
=\int\mathcal D\phi_+\,\mathcal D\phi_-\;
\rho_T(\phi^+_i,\phi^-_i)\,
e^{iS_T[\phi_+]-iS_T[\phi_-]
+iS_{\mathrm{IF}}[\phi_+,\phi_-]
+iJ_+\phi_+-iJ_-\phi_-} .\tag{102}$$ The retained action is counted exactly once. A *correlated* initial state replaces $\rho_E$ by the corresponding joint boundary functional; the process-tensor construction [(100)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:processtensor) covers that case with no factorization assumption. The resulting closed-time-path functional contains retarded response, fluctuations, and multi-time Tier-1 probabilities, and may be complex, nonlocal, and state-dependent while remaining a complete Tier-1 description.

## The exact boundary of the conclusion

<div id="sec:boundary">

</div>

The witness of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) proves $$
p\circ\Phi_t\ne U_t\circ p\tag{103}$$ for every deterministic flow $U_t$ on the specified instantaneous brane state, and ,  for any preparation class that resolves the two witness states, so that the conditional future law differs within a readout fiber ,  it also defeats universal Markov lumpability. It does **not** defeat the pushed-forward law [(95)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:nu) on complete brane histories.

Accordingly, source projection can be empirically distinguished only relative to a *restricted* alternative class $\mathfrak M^R_T$. If $\operatorname{Op}(M)$ denotes the complete family of protocol-conditioned Tier-1 laws of a model, the necessary and sufficient condition that the restricted class contain no exactly operationally equivalent model is $$
\boxed{\;
\operatorname{Op}(M_S,p)\notin\bigl\{\operatorname{Op}(M):M\in\mathfrak M^R_T\bigr\}.
\;}\tag{104}$$

<div class="remark">

**Remark 11.3** (Identifiability is not a finite-data testing theorem).

<div id="rem:finitedata">

</div>

Condition [(104)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:identifiability) is exact identifiability. Uniform statistical discrimination from a *composite* alternative class additionally requires separation of the source law from the *closure* of that class in an operational metric appropriate to the allowed protocols ,  total variation, or a relative-entropy rate. If the source law lies outside the class but can be approximated arbitrarily closely by its members, exact equivalence is absent while finite-data discrimination may nonetheless be arbitrarily difficult.

</div>

Useful independent restrictions include: a fixed finite set of free or weakly coupled instantaneous fields at a stated perturbative order; a Markov or finite-memory condition; fixed finite-pole local quadratic dynamics; a finite EFT basis with coefficients fixed before the test; a prescribed preparation/boundary-state class. *Locality alone, or finitely many interacting field species alone, is insufficient*, because multiparticle states generate branch cuts. If arbitrary kernels, continua, initial correlations, and complete-history states are admitted, the pushforward theory *belongs* to the alternative class and discrimination is impossible.


# Main theorem

<div id="sec:main">

</div>

<div class="theorem">

**Theorem 12.1** (RS2 source projection and its exact discrimination boundary).

<div id="thm:main">

</div>

*Consider the two-sided, $Z_2$-symmetric, positive-tension RS2 model defined by [(3)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:action), with pure five-dimensional Einstein gravity and a negative cosmological constant in the bulk. Tune $\Lambda_5=-6/\ell^2$ and $\lambda=6/(\kappa_5^2\ell)$, so that $\Lambda_4=0$, and let the instantaneous readout be Definition [2.3](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#def:readout). Assume the full source domain contains smooth finite-energy TT bulk initial data. For the stationary weak-field coefficients, impose the regular retarded/no-incoming bulk condition. Then:*

1.  *the readout has physically distinct fibers on which future induced brane observables differ, so no deterministic evolution on that instantaneous readout is valid for all admissible bulk initial data;*

2.  *the exact projected tensor equation contains the model-specific correction $\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}$ with $\Pi_{\mu\nu}$ as in [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi), and predictive closure requires either bulk response data or an equivalent causal, generally nonlocal brane history law;*

3.  *in the homogeneous and long-distance weak-field regimes the observable coefficients obey $A_\Psi=\tfrac12A_\Phi$ and $B=\tfrac{\kappa_4^4}{24}A_\Phi$;*

4.  *these statements distinguish minimal RS2 from any independently specified Tier-1 model class that cannot realize the correlated quadratic term, slip ratio, and continuum response ,  but no experiment restricted to brane observables distinguishes the five-dimensional source model from its *unrestricted* exact four-dimensional pushforward theory.*

</div>

<div class="proof">

*Proof.* **Part 1.** Take zero bulk perturbation and a nonzero, normalizable TT wave packet initially supported away from the brane, with the perturbation and its first time derivative vanishing in a brane neighborhood. The two induced Cauchy data sets coincide (Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness)). Their five-dimensional Weyl curvatures do not, so they are not related by a diffeomorphism. Hyperbolic finite propagation permits the packet to reach the brane and change the induced perturbation. Hence one readout fiber is not preserved by source evolution, contradicting the defining condition for a deterministic quotient flow (Corollary [3.2](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#cor:nonproj)).

**Part 2.** The Israel equation [(23)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:israel) with $Z_2$ symmetry gives [(24)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Kfixed). The contracted Gauss identity separates the bulk Riemann tensor into its Ricci part, fixed by $\Lambda_5$ via [(5)](/source-readout/bulk-to-brane-projection/the-five-dimensional-source-model#eq:bulkEE), and its Weyl part $E_{\mu\nu}$. The terms quadratic in $K_{\mu\nu}$ expand into a constant, a term linear in $T_{\mu\nu}$, and $\kappa_5^4\Pi_{\mu\nu}$, as computed line by line in [(34)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qexpanded)–[(36)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Qsorted) with $\Pi_{\mu\nu}$ given by [(37)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:Pi), giving $$G_{\mu\nu}
=-\tfrac12\Bigl(\Lambda_5+\tfrac{\kappa_5^4\lambda^2}{6}\Bigr)q_{\mu\nu}
+\frac{\kappa_5^4\lambda}{6}T_{\mu\nu}
+\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu},$$ which proves [(38)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:SMS) and [(39)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:constants). The Bianchi identity fixes only $\nabla^\mu E_{\mu\nu}$, [(42)](/source-readout/bulk-to-brane-projection/the-exact-projected-einstein-equation#eq:bianchiE). Part 1 supplies two solutions with the same instantaneous brane data and different later $E_{\mu\nu}$; the remaining information must therefore be supplied as bulk initial/boundary response data or, after exact elimination, as a causal functional of the brane history and the chosen bulk state (Section [8](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#sec:completion)).

**Part 3.** Perfect-fluid substitution gives $\Pi_{00}=\rho^2/12$ (Lemma [5.1](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#lem:PiFRW)), while FRW symmetry gives $-E_{00}=3\mu/a^4$ [(46)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:EFRW). The $00$ equation therefore gives $B=\kappa_5^4/36$. RS tuning with $\kappa_4^2=\kappa_5^2/\ell$ gives $B=\kappa_4^4\ell^2/36$. Independently, the regular brane-to-brane propagator gives $A_\Phi=2\ell^2/3$ and $A_\Psi=\ell^2/3$ at $r\gg\ell$ [(75)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:potentials). Eliminating $\ell^2$ proves $A_\Psi=A_\Phi/2$ and $B=\kappa_4^4A_\Phi/24$ (Theorem [7.2](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#thm:crossregime)).

**Part 4.** A restricted theory that cannot realize one of these fixed relations is falsified when all assumptions and coefficients are fixed before observing the test data. Conversely, for every brane protocol, push the RS2 source-history measure forward through the complete brane readout. Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward) shows the resulting four-dimensional history theory has exactly the same record distribution for that protocol, including adaptive interventions; their total-variation distance vanishes for every brane experiment. This proves both the positive antecedent and the negative ontological-discrimination statement. ◻

</div>

Theorem [12.1](/source-readout/bulk-to-brane-projection/main-theorem#thm:main) establishes a concrete, quantitative source-projection realization together with its exact discrimination boundary. A stronger conclusion requires an independently justified restriction on admissible Tier-1 dynamics ,  fixed finite-pole local quadratic dynamics, prescribed finite perturbative content, or finite memory.


# Comparative examples and limits of interpretation

<div id="sec:controls">

</div>

## An exactly soluble projection: two coupled oscillators

<div id="sec:oscillator">

</div>

The following systems are scientific comparisons that clarify the meaning and limits of the RS2 result. An ordinary Hamiltonian model verifies, without gravitational complications, every step from fiber nonprojectability through memory to an exact Tier-1 surrogate, and simultaneously exhibits the logical boundary that Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves in general. The projected equation obtained below is the elementary exactly soluble instance of the Mori–Zwanzig projection-operator structure \[[13](/source-readout/bulk-to-brane-projection/references#bib-MoriZwanzig)\]: a memory kernel, an initial-slip term, and a retained susceptibility. Let $$
H_f=\frac{p_x^2}{2m}+\tfrac12 m\omega_0^2x^2
+\frac{p_y^2}{2M}
+\tfrac12 M\Omega^2\Bigl(y-\frac{cx}{M\Omega^2}\Bigr)^2
-f(t)\,x ,\tag{106}$$ and retain $X=(x,v)^T$ while eliminating $Z=(y,w)^T$. With $\delta\equiv c^2/(mM\Omega^2)$, the first-order generator has blocks $$
A=\begin{pmatrix}0&1\\-(\omega_0^2+\delta)&0\end{pmatrix},
\quad
B=\begin{pmatrix}0&0\\c/m&0\end{pmatrix},
\quad
C=\begin{pmatrix}0&0\\c/M&0\end{pmatrix},
\quad
D=\begin{pmatrix}0&1\\-\Omega^2&0\end{pmatrix},\tag{107}$$ with $e^{tD}=\begin{pmatrix}\cos\Omega t&\sin\Omega t/\Omega\\
-\Omega\sin\Omega t&\cos\Omega t\end{pmatrix}$. Variation of constants evaluates *every* projected term: $$
\dot X(t)=AX(t)+Be^{tD}Z_0
+\int_0^t\mathcal K(t-s)X(s)\,ds
+\binom{0}{f(t)/m},\tag{108}$$ $$
\boxed{\;
\mathcal K(t)=Be^{tD}C
=\begin{pmatrix}
0&0\\[2pt]
\dfrac{c^2}{mM\Omega}\sin\Omega t&0
\end{pmatrix}.
\;}\tag{109}$$ Equivalently, after one integration by parts, $$
\boxed{\;
\ddot x+\omega_0^2x
+\int_0^t\delta\cos\bigl[\Omega(t-s)\bigr]\dot x(s)\,ds
=\frac{f(t)}{m}+\zeta(t),
\;}\tag{110}$$ $$
\zeta(t)=\frac{c}{m}
\Bigl[\Bigl(y_0-\frac{cx_0}{M\Omega^2}\Bigr)\cos\Omega t
+\frac{w_0}{\Omega}\sin\Omega t\Bigr].\tag{111}$$ Two states with equal $(x_0,v_0)$ and different $(y_0,w_0)$ have different later trajectories ,  the instantaneous readout is nonprojectable, exactly as in Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness), with $\zeta$ playing the role of $\eta_{z_0}$ in [(88)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:memoryeq). The smallest generic Markov completion carries the two hidden coordinates, exactly as $E^{\mathrm{RS}}_{\mathrm{dyn}}$ does. The exact retarded susceptibility is $$
\boxed{\;
\chi^R_{xx}(\omega)
=\frac{\Omega^2-z^2}
{m\bigl[(\omega_0^2-z^2)(\Omega^2-z^2)-\delta z^2\bigr]},
\qquad z=\omega+i0^+ .
\;}\tag{112}$$

And yet eliminating $y$ also gives a *local, Tier-1-only*, higher-derivative equation, $$
\boxed{\;
\bigl[(\partial_t^2+\omega_0^2)(\partial_t^2+\Omega^2)
+\delta\,\partial_t^2\bigr]x
=\frac1m(\partial_t^2+\Omega^2)f .
\;}\tag{113}$$ Its extra initial derivatives encode precisely the two missing constants. This exactly soluble example exposes the logical boundary: nonprojectability of $(x,\dot x)$ proves the need for completion *relative to that state choice*, and proves nothing about the nonexistence of a higher-derivative or history-level theory written in $x$ alone. This is the finite-dimensional shadow of Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward).

## Einstein–Cartan and Aharonov–Bohm comparisons

<div id="sec:countercontrols">

</div>

These two examples distinguish a genuine propagating source degree of freedom from an auxiliary variable and from an incomplete choice of observable state: Einstein–Cartan–Dirac torsion is auxiliary and introduces no same-readout fiber, whereas the Aharonov–Bohm phase is already determined once the observable state is chosen completely.

#### Einstein–Cartan–Dirac.

Minimal Einstein–Cartan–Dirac theory fails as the required *propagating source-projection antecedent* ,  not as a theory ,  because its torsion is *auxiliary*: it introduces no independent propagating degree of freedom, and hence no same-readout fiber of the kind Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness) exhibits. The connection equation determines the contorsion algebraically from the axial current, and substitution gives the four-fermion term \[[15](/source-readout/bulk-to-brane-projection/references#bib-Diakonov)\] $$
S_{\mathrm{eff}}
=S_{\mathrm{EH}}+S_{\mathrm{Dirac}}[\mathring\omega]
+\frac{3\kappa}{16}\int d^4x\;e\,J_{5a}J_5^a,\tag{114}$$ up to signature and current conventions. A torsion-free theory containing this operator has *identical* retained observables. There is no independent propagating fiber analogous to a remote RS2 wave packet ,  which is exactly what RS2 supplies and Einstein–Cartan does not.

#### Aharonov–Bohm.

The Aharonov–Bohm effect \[[19](/source-readout/bulk-to-brane-projection/references#bib-AharonovBohm)\] remains a clean control for readout incompleteness: equal local curvature can coexist with different gauge-invariant holonomy and different interference phases. But holonomy is already a standard observable of four-dimensional gauge theory. The effect shows that a *curvature-only* state is incomplete; it does not show that a deeper source ontology has been observed. It is the correct model for “the readout you chose was too small,” not for “there is a hidden dimension.”


# Empirical discrimination

<div id="sec:empirical">

</div>

## A pre-registered model test

Fit the three phenomenological coefficients of [(82)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:phenomB)–[(83)](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#eq:phenomA) *without* using RS2 in the fits, and form the null combinations $$
\boxed{\;
D_1=A_\Phi-2A_\Psi,
\qquad
D_2=24B-\kappa_4^4A_\Phi .
\;}\tag{115}$$ Minimal RS2 predicts $D_1=D_2=0$ with $A_\Phi,A_\Psi,B\ge0$.

<div class="remark">

**Remark 14.1** (These are consistency tests, not a detection criterion). Pure four-dimensional GR has $A_\Phi=A_\Psi=B=0$ and passes both nulls trivially. Discrimination from GR requires at least one *statistically significant positive* coefficient together with consistency of the others. The coefficients must be fit from independent observables, with the functional forms fixed before examining residuals.

</div>

In the nonrelativistic sector, $$
\frac{\Delta|\mathbf a|}{|\mathbf a|}
=\frac{3A_\Phi}{r^2}+O(r^{-4}),\tag{116}$$ whereas relativistic propagation probes $\Phi+\Psi$ and therefore the different combination $(A_\Phi+A_\Psi)/2=3A_\Phi/4$. The two probes are not degenerate, which is what prevents a single rescaling of $G_4M$ from absorbing the signal.

Short-range torsion-balance experiments already test the inverse-square law at submillimetre separations \[[16](/source-readout/bulk-to-brane-projection/references#bib-Lee)\]. Such data should be fitted to the *full* RS2 KK spectral potential built from [(56)](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#eq:um), convolved with the extended attractor and detector geometry, rather than by translating a Yukawa exclusion curve. The truncated $1/r^3$ potential may be used only after the fitted parameter range verifies $r\gg\ell$; near $r\sim\ell$ it is uncontrolled. Primordial-abundance and expansion data constrain the nonstandard high-density expansion and the separate radiation-like term \[[17](/source-readout/bulk-to-brane-projection/references#bib-Ichiki)\]. A combined analysis must fit $B$ and $\mu$ *separately*: during radiation domination $\rho^2\propto
a^{-8}$ whereas dark radiation scales as $a^{-4}$, so a single-epoch expansion residual can mix their amplitudes, but multi-epoch data and equation-of-state transitions separate them.

This is a falsification test, not a discovery forecast. Existing short-distance bounds already make the corresponding high-energy cosmological term small at late epochs, and a simultaneous precision measurement of both static potentials at microscopic distances is technically difficult. At present the cross-regime relation is more useful as a consistency condition on any *claimed* anomaly than as a near-term detection channel.

## Spectral test

A time-dependent brane source couples to a massless pole plus a continuum. A response measurement with sufficient bandwidth could compare a finite-pole local model against the positive KK spectral measure $$
\rho_{\mathrm{KK}}(m)=u_m(0)^2\ge0,
\qquad m\in[0,\infty).\tag{117}$$ A resolved threshold continuum, or the corresponding power-law late-time tail, would exclude a *pre-specified finite-pole free or tree-level linear* alternative. It would *not* exclude an interacting four-dimensional conformal sector or continuum model, which has the same analytic structure (Remark [6.1](/source-readout/bulk-to-brane-projection/exact-tree-level-bulk-elimination-in-the-linear-weak-field-sector#rem:cut)).

## What no experiment of this kind can decide

No statistic constructed solely from induced brane fields can decide between RS2 and the exact Tier-1 process functional built from RS2. This is not a limitation of experimental sensitivity; it follows from equality of probability measures, [(96)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:TVzero). An experiment that couples directly to a bulk coordinate could distinguish the source fiber, but it would thereby enlarge the observable algebra and would no longer be confined to the readout used in the theorem.


# Scope and regime of validity

<div id="sec:failure">

</div>

The results derived above apply to the following physical domain and assumptions.

1.  **Bulk-state domain.** The same-readout witness requires that admissible initial data include normalizable bulk radiation. If the model definition fixes a unique stationary vacuum and excludes all homogeneous incoming data, the witness lies outside the restricted domain. The forced KK response and the effective-action equivalence remain, but the claimed instantaneous fiber must be reassessed for that domain.

2.  **Minimal action.** A brane Einstein term, a Gauss–Bonnet term, additional bulk fields, finite brane thickness, a second brane, or broken $Z_2$ symmetry changes the junction condition, the propagator, and the coefficient relation. In such theories $D_1=D_2=0$ need not hold.

3.  **Positive-tension branch.** The sign and stability statements use $\lambda>0$. The negative-tension branch can reverse kinetic signs or the effective Newton coupling; it is not a harmless sign convention.

4.  **Homogeneous sector.** Equation [(48)](/source-readout/bulk-to-brane-projection/exact-evaluation-in-the-homogeneous-sector#eq:friedmann) assumes an FRW brane, conserved brane matter, and no bulk matter flux. With bulk exchange, both $\dot\rho+3H(\rho+p)=0$ and $\mathcal U\propto a^{-4}$ are modified.

5.  **Weak-field sector.** The coefficients $A_\Phi,A_\Psi$ assume a static weak source, $r\gg\ell$, and the regular retarded/no-incoming bulk condition. They are unreliable in the strong-field region and at $r\lesssim\ell$.

6.  **The state parameter $\mu$.** Neither the sign nor the magnitude of $\mu$ is fixed by the projected brane equation. Positivity follows only after imposing a positive-mass regular AdS–Schwarzschild bulk. Treating dark radiation as a universal fixed prediction would overstate the model.

7.  **Observable versus decomposition.** The induced metric and matter records are observable; the *split* $\mathcal C^{\mathrm{RS}}=\kappa_5^4\Pi-E$ is source-model dependent. A four-dimensional theory may reorganize the same total response into different fields or a nonlocal kernel.

8.  **Unrestricted alternatives.** Nonlocality, colored noise, a branch cut, or preparation dependence does not by itself refute a Tier-1 theory. Each is permitted in the exact pushed-forward history law [(95)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:nu). A contrary conclusion requires an independently imposed restriction ,  finite-pole local quadratic dynamics, fixed perturbative content, or Markovianity. Locality, or finitely many interacting fields, is *not* enough.

9.  **Flat-brane tuning.** The cross-regime relation was derived at $\Lambda_4=0$. A detuned or de Sitter brane changes the background junction relation and can modify the weak-field coefficients. Applying the flat-brane relation to a weakly curved universe is an approximation requiring $H\ell\ll1$ and negligible curvature/detuning effects; it is not a complete late-time cosmological fit.

Two further parameters are simply undetermined rather than failure modes. The numerical value of $\ell$ ,  equivalently $\lambda$ or $\kappa_5$ once $G_4$ is fixed ,  is not predicted; only bounds on it follow from data. And the theory is a five-dimensional effective field theory, so nothing here constrains its ultraviolet completion above the corresponding cutoff.

#### Decoupling limits.

These are consistent. As $\ell\to0$ at fixed $G_4$: $A_\Phi,A_\Psi\to0$, $\lambda\to\infty$, and $B\to0$. As $\rho/\lambda\to0$, $\mu/(a^4H^2)\to0$, and $r/\ell\to\infty$, ordinary four-dimensional GR is recovered in every sector.


# Conclusion

<div id="sec:conclusion">

</div>

Minimal positive-tension RS2 contains a complete source-projection antecedent. In that model, the projection from gauge-reduced bulk gravity to the instantaneous brane state removes genuine gravitational degrees of freedom: a remote transverse-traceless bulk wave, whose existence is established by an explicit KK spectral construction, supplies a same-readout, different-future pair, so no deterministic evolution law exists on that instantaneous state over the full source domain. Gauss–Codazzi projection and Israel matching *derive*, rather than posit, $$\mathcal C^{\mathrm{RS}}_{\mu\nu}=\kappa_5^4\Pi_{\mu\nu}-E_{\mu\nu}.$$ Its local nonlinear part gives the exact positive $\rho^2$ correction; its bulk Weyl part carries the completion data and the retarded KK memory. The same source scale $\ell$ fixes the leading weak-field potentials, producing the parameter-eliminated relation $$A_\Psi=A_\Phi/2,
\qquad
B=\kappa_4^4A_\Phi/24 ,$$ a genuine, falsifiable residue linking two otherwise independent observational regimes. This is the strongest quantitative result obtained here.

The strongest possible *interpretation* is nevertheless bounded by Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward): every source model induces, by pushforward, a brane-only path law with identical brane statistics, and RS2 makes that obstruction concrete through its four-dimensional CFT description, which reproduces the same $1/r^3$ residue. The result is therefore positive at the level of model-relative source projection and nonclosure, and negative at the level of unrestricted ontological discrimination. Absent an independently motivated restriction on the admissible brane-only theory class, no brane observation can establish that the source representation is ontologically fundamental; and establishing that nature realizes this antecedent at all requires empirical selection of RS2, or of another source model with comparably specific residues. The conditions under which the positive results hold are stated once, in Section [15](/source-readout/bulk-to-brane-projection/scope-and-regime-of-validity#sec:failure).


# References

<div class="thebibliography">

99

<span id="bib-RS2"></span>**\[1\]** L. Randall and R. Sundrum, “An Alternative to Compactification,” *Phys. Rev. Lett.* **83**, 4690 (1999), arXiv:hep-th/9906064.

<span id="bib-SMS"></span>**\[2\]** T. Shiromizu, K. Maeda, and M. Sasaki, “The Einstein Equations on the 3-Brane World,” *Phys. Rev. D* **62**, 024012 (2000), arXiv:gr-qc/9910076.

<span id="bib-Israel"></span>**\[3\]** W. Israel, “Singular Hypersurfaces and Thin Shells in General Relativity,” *Nuovo Cim. B* **44**, 1 (1966), doi:10.1007/BF02710419.

<span id="bib-BDEL"></span>**\[4\]** P. Binetruy, C. Deffayet, U. Ellwanger, and D. Langlois, “Brane Cosmological Evolution in a Bulk with Cosmological Constant,” *Phys. Lett. B* **477**, 285 (2000), arXiv:hep-th/9910219.

<span id="bib-Mukohyama1"></span>**\[5\]** S. Mukohyama, “Brane-World Solutions, Standard Cosmology, and Dark Radiation,” *Phys. Lett. B* **473**, 241 (2000), arXiv:hep-th/9911165.

<span id="bib-GarrigaTanaka"></span>**\[6\]** J. Garriga and T. Tanaka, “Gravity in the Randall–Sundrum Brane World,” *Phys. Rev. Lett.* **84**, 2778 (2000), arXiv:hep-th/9911055.

<span id="bib-GKR"></span>**\[7\]** S. B. Giddings, E. Katz, and L. Randall, “Linearized Gravity in Brane Backgrounds,” *JHEP* **03**, 023 (2000), arXiv:hep-th/0002091.

<span id="bib-Mukohyama2"></span>**\[8\]** S. Mukohyama, “Integro-Differential Equation for Brane-World Cosmological Perturbations,” *Phys. Rev. D* **64**, 064006 (2001), arXiv:hep-th/0104185.

<span id="bib-DuffLiu"></span>**\[9\]** M. J. Duff and J. T. Liu, “Complementarity of the Maldacena and Randall–Sundrum Pictures,” *Phys. Rev. Lett.* **85**, 2052 (2000), arXiv:hep-th/0003237.

<span id="bib-APR"></span>**\[10\]** N. Arkani-Hamed, M. Porrati, and L. Randall, “Holography and Phenomenology,” *JHEP* **08**, 017 (2001), arXiv:hep-th/0012148.

<span id="bib-Barvinsky"></span>**\[11\]** A. O. Barvinsky, A. Yu. Kamenshchik, A. Rathke, and C. Kiefer, “Nonlocal Braneworld Action: An Alternative to Kaluza–Klein Description,” *Phys. Rev. D* **67**, 023513 (2003), arXiv:hep-th/0206188.

<span id="bib-FeynmanVernon"></span>**\[12\]** R. P. Feynman and F. L. Vernon, Jr., “The Theory of a General Quantum System Interacting with a Linear Dissipative System,” *Ann. Phys.* **24**, 118 (1963), doi:10.1016/0003-4916(63)90068-X.

<span id="bib-MoriZwanzig"></span>**\[13\]** H. Mori, “Transport, Collective Motion, and Brownian Motion,” *Prog. Theor. Phys.* **33**, 423 (1965), doi:10.1143/PTP.33.423; R. Zwanzig, “Nonlinear Generalized Langevin Equations,” *J. Stat. Phys.* **9**, 215 (1973), doi:10.1007/BF01008729.

<span id="bib-Pollock"></span>**\[14\]** F. A. Pollock, C. Rodríguez-Rosario, T. Frauenheim, M. Paternostro, and K. Modi, “Non-Markovian Quantum Processes: Complete Framework and Efficient Characterisation,” *Phys. Rev. A* **97**, 012127 (2018), arXiv:1512.00589.

<span id="bib-Diakonov"></span>**\[15\]** D. Diakonov, A. G. Tumanov, and A. A. Vladimirov, “Low-Energy General Relativity with Torsion: A Systematic Derivative Expansion,” *Phys. Rev. D* **84**, 124042 (2011), arXiv:1104.2432.

<span id="bib-Lee"></span>**\[16\]** J. G. Lee, E. G. Adelberger, T. S. Cook, S. M. Fleischer, and B. R. Heckel, “New Test of the Gravitational $1/r^2$ Law at Separations down to 52 $\mu$m,” *Phys. Rev. Lett.* **124**, 101101 (2020), arXiv:2002.11761.

<span id="bib-Ichiki"></span>**\[17\]** K. Ichiki, M. Yahiro, T. Kajino, M. Orito, and G. J. Mathews, “Observational Constraints on Dark Radiation in Brane Cosmology,” *Phys. Rev. D* **66**, 043521 (2002), arXiv:astro-ph/0203272.

<span id="bib-PerezVictoria"></span>**\[18\]** M. Pérez-Victoria, “Randall–Sundrum Models and the Regularized AdS/CFT Correspondence,” *JHEP* **05**, 064 (2001), arXiv:hep-th/0105048.

<span id="bib-AharonovBohm"></span>**\[19\]** Y. Aharonov and D. Bohm, “Significance of Electromagnetic Potentials in the Quantum Theory,” *Phys. Rev.* **115**, 485 (1959), doi:10.1103/PhysRev.115.485.

<span id="bib-PinheiroPires"></span>**\[20\]** C. Pinheiro and G. O. Pires, “Extending the Barnes–Rivers Operators to $D=3$ Topological Gravity,” *Phys. Lett. B* **301**, 339 (1993), arXiv:hep-th/9212008.

<span id="bib-Paper1"></span>**\[21\]** J. Rodgers, “Source–Readout Non-Equivalence: Descent and Equivariant Reconstruction Obstructions,” Zenodo (2026), [doi:10.5281/zenodo.21369967](https://doi.org/10.5281/zenodo.21369967).

<span id="bib-Paper2"></span>**\[22\]** J. Rodgers, “Target-Relative Necessity of Completion: When Readout Loss Obstructs, and What a Sufficient Extension Must Retain,” Zenodo (2026), [doi:10.5281/zenodo.21370501](https://doi.org/10.5281/zenodo.21370501).

<span id="bib-Paper3"></span>**\[23\]** J. Rodgers, “Canonical Minimal Source Completion: The Coarsest Readout Extension on which a Nominated Family of Source Relations Becomes Well Defined,” Zenodo (2026), [doi:10.5281/zenodo.21370763](https://doi.org/10.5281/zenodo.21370763).

<span id="bib-Paper4"></span>**\[24\]** J. Rodgers, “Geometric Realization of Completed Source Relations: Descent, Orbit Spaces, Invariant Relations, and Variational Response in Shadow Theory,” Zenodo (2026), [doi:10.5281/zenodo.21370985](https://doi.org/10.5281/zenodo.21370985).

<span id="bib-Paper5"></span>**\[25\]** J. Rodgers, “Observable Quotients and Exact Projected Dynamics: Closure, Memory, Minimal Dynamical Completion, and Effective Field Operators,” Zenodo (2026), [doi:10.5281/zenodo.21371251](https://doi.org/10.5281/zenodo.21371251).

<span id="bib-Paper6"></span>**\[26\]** J. Rodgers, “Non-Source Projection and Internal Identifiability,” Zenodo (2026), [doi:10.5281/zenodo.21371451](https://doi.org/10.5281/zenodo.21371451).

</div>
