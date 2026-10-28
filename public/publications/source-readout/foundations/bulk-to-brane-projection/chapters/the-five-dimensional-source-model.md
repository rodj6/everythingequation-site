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
