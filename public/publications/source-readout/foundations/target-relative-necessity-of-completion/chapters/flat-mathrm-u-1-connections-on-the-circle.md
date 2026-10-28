# Flat $\mathrm{U}(1)$ connections on the circle

<div id="sec:flat">

</div>

We now instantiate the framework in a setting where every ingredient ,  the reduction by gauge, the deliberately restricted readout, the fiber, the target, and the minimal completion ,  is explicit and computable.

## The reduced moduli space

Let $S^1$ be a circle of circumference $L>0$, with coordinate $x\in[0,L]$ and endpoints identified, $x\sim x+L$. Consider the trivial principal $\mathrm{U}(1)$-bundle over $S^1$ and its connections, described in the standard way by real one-forms $A$ on $S^1$; the associated covariant derivative on a unit-charge complex scalar is $\partial_x-iA_x$, and the curvature is the two-form $F=dA$.

We state at once the feature that makes this example the sharpest possible illustration of the theory, rather than treating it as an obstacle to be maneuvered around. *Every two-form on a one-dimensional manifold vanishes identically*, since $\Lambda^2 T^*_xS^1=0$ for dimensional reasons. Hence $F=dA=0$ for *every* connection $A$ on $S^1$, with no flatness hypothesis required and no special choice of representative involved. The curvature readout on this space is therefore identically zero as a matter of dimension.

This is not a degeneracy to be apologized for; it is exactly the point. Curvature is a *local* invariant, and on the circle it is vacuous. Holonomy is a *global* invariant, and on the circle it is not: connections with identically vanishing field strength are nonetheless distinguished, gauge-invariantly, by the phase a charge accumulates on traversing the loop. The circle is thus the cleanest available laboratory for a global-holonomy-versus-local- curvature separation, and that separation is precisely what [Section 10](/source-readout/target-relative-necessity-of-completion/the-charged-covariant-laplacian-and-the-curvature-obstruction#sec:spectrum), [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) will show a physical target can detect.

Consider now the one-parameter family of connection one-forms $$
A_\theta=\frac{\theta}{L}\,dx,
\qquad
\theta\in\mathbb{R}.\tag{26}$$ Their field strength vanishes, $$
F_\theta=dA_\theta=d\!\left(\frac{\theta}{L}\right)\wedge dx=0,\tag{27}$$ which holds for the two independent reasons just discussed: the coefficient $\theta/L$ is constant, and, more fundamentally, any two-form on $S^1$ is zero regardless. Every connection on the trivial bundle over $S^1$ is gauge-equivalent to exactly one such $A_\theta$ modulo the identifications described below; this is the standard parametrization of the moduli space of $\mathrm{U}(1)$ connections on a circle \[[3](/source-readout/target-relative-necessity-of-completion/references#bib-Kobayashi), [4](/source-readout/target-relative-necessity-of-completion/references#bib-NakaharaBook), [2](/source-readout/target-relative-necessity-of-completion/references#bib-BaezMuniain)\]. Since all connections here are flat, we retain the customary name *moduli space of flat connections* for it.

## Gauge convention and the reduction

Gauge transformations act by $$
A\longmapsto A+d\lambda ,\tag{28}$$ where $g=e^{i\lambda}\colon S^1\to\mathrm{U}(1)$ is a smooth, single-valued map. Single-valuedness of $g$, not of $\lambda$, is the physical requirement, and it is exactly this that produces the identification we need. Writing $\lambda(x)=2\pi k x/L$ with $k\in\mathbb{Z}$, the map $$
g_k(x)=\exp\!\left(\frac{2\pi i k x}{L}\right)\tag{29}$$ is smooth and single-valued on $S^1$, since $g_k(x+L)=g_k(x)e^{2\pi i k}=g_k(x)$, even though $\lambda$ itself increases by $2\pi k$ around the circle. Such $g_k$ are the *large gauge transformations*; they are not connected to the identity, and they act on [(26)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Atheta) by $$
A_\theta\longmapsto A_\theta+d\lambda=\frac{\theta}{L}dx+\frac{2\pi k}{L}dx=A_{\theta+2\pi k}.\tag{30}$$ Consequently the parameters $\theta$ and $\theta+2\pi k$ describe *the same physical configuration*, and the honest parameter space of flat connections is the quotient $$
\theta\in\mathbb{R}/2\pi\mathbb{Z}.\tag{31}$$ Small gauge transformations, with $\lambda$ single-valued, change $A_\theta$ by an exact form $d\lambda$ with $\oint d\lambda=0$; these do not alter $\theta$ mod $2\pi$ and, after fixing the constant gauge [(26)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Atheta), do not move us within the family at all.

We may now define the reduced source space of this example in accordance with the standing convention of [Section 2](/source-readout/target-relative-necessity-of-completion/reduced-source-readout-and-target#sec:setup): $$
S_{\mathrm{flat}}:=\{\text{flat }\mathrm{U}(1)\text{ connections on }S^1\}\big/\{\text{gauge}\}
\;\cong\;\mathbb{R}/2\pi\mathbb{Z}\;\cong\;\mathrm{U}(1).\tag{32}$$ It is essential to the correctness of everything below that the identification $\theta\sim\theta+2\pi k$ has *already been performed*. Distinct points of $S_{\mathrm{flat}}$ ,  distinct values of $e^{i\theta}$ ,  are gauge-inequivalent physical configurations, not gauge copies of one another. Any obstruction we exhibit between two such points is therefore an obstruction between genuinely different physical states, and cannot be dissolved by a change of gauge.

## Holonomy

The gauge-invariant content of $A_\theta$ is its holonomy around the circle, $$
h(\theta)=\exp\!\left(i\oint_{S^1}A_\theta\right)
=\exp\!\left(i\int_0^L\frac{\theta}{L}\,dx\right)
=e^{i\theta}\in\mathrm{U}(1).\tag{33}$$ Under a large gauge transformation [(30)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:largegauge-action), $h\mapsto e^{i(\theta+2\pi k)}
=e^{i\theta}$: the holonomy is invariant, as it must be. Under a small gauge transformation the integral $\oint d\lambda$ vanishes and $h$ is again unchanged. So $h$ is a well-defined function on $S_{\mathrm{flat}}$, and by [(32)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Sflat) it is in fact a bijection $S_{\mathrm{flat}}\to\mathrm{U}(1)$. We will accordingly use $e^{i\theta}$, or $\theta$ mod $2\pi$, as the coordinate on the reduced source space.

That the holonomy is physically consequential ,  that it is not a gauge artifact but an observable feature of the configuration ,  is the content of the Aharonov–Bohm effect \[[1](/source-readout/target-relative-necessity-of-completion/references#bib-AharonovBohm), [11](/source-readout/target-relative-necessity-of-completion/references#bib-WuYang)\], and it is worth stating the geometry of that effect accurately.

In the standard physical realization, the apparatus consists of a solenoid or flux tube together with the region exterior to it. The charged particle is confined to the *accessible region*, which excludes the flux-carrying interior and is therefore multiply connected; on that accessible region, and only there, the connection is flat and the field strength vanishes. The excluded region does carry field: the flux $\Phi$ threading the solenoid is nonzero, and it is exactly that flux which fixes the phase. It would be wrong to say that the electromagnetic field vanishes everywhere in the apparatus ,  it does not ,  and we do not say so. What is true, and what matters, is that the interference phase measured by the particle is determined by the gauge-invariant holonomy of the connection around a loop in the accessible region, a loop along which the particle never encounters any field.

The circle $S^1$ of this section models such an accessible loop. Its states $e^{i\theta}$ are distinguished by holonomy alone, with no local field anywhere along them, which is the physical warrant for treating $S_{\mathrm{flat}}\cong\mathrm{U}(1)$ as a space of genuinely distinct physical states rather than as gauge copies of a single trivial one.

## The curvature readout

Define the readout to be the field strength: $$
p_F\colon S_{\mathrm{flat}}\longrightarrow\{0\},
\qquad
p_F(\theta)=F_\theta=0 .\tag{34}$$ By [(27)](/source-readout/target-relative-necessity-of-completion/flat-mathrm-u-1-connections-on-the-circle#eq:Ftheta) this is well defined and, trivially, surjective onto the one-point set $\{0\}$: the curvature vanishes on every connection, for the dimensional reason recorded above, so $\{0\}$ is the full set of curvature values realized. Its single fiber is everything: $$
F_{0}=p_F^{-1}(0)=S_{\mathrm{flat}}\cong\mathrm{U}(1).\tag{35}$$ This is about as lossy as a readout can be. It is also, for exactly that reason, an ideal test case: any target whose correct answer is nonconstant on $\mathrm{U}(1)$ is obstructed by $p_F$, and any target whose correct answer is constant on $\mathrm{U}(1)$ is not.

<div class="remark">

**Remark 9.1** (The curvature readout is a deliberate restriction, not a claim about physics).

<div id="rem:curvature-restricted">

</div>

We are not asserting that curvature exhausts what can be observed of a $\mathrm{U}(1)$ gauge field. It plainly does not: in the Aharonov–Bohm interference experiment the measured interference phase is determined by the gauge-invariant holonomy, and an experiment sensitive to holonomy would supply a strictly finer readout than $p_F$ ,  indeed the finest possible one on $S_{\mathrm{flat}}$, since $h$ is injective there. The map $p_F$ is the readout *under examination*. It is nominated, not discovered, and it is nominated precisely because its extreme degeneracy makes the target-relative machinery of [Section 3](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#sec:exact), [Section 4](/source-readout/target-relative-necessity-of-completion/active-and-inactive-information-loss#sec:active), [Section 7](/source-readout/target-relative-necessity-of-completion/what-every-sufficient-extension-must-retain#sec:separation), [Section 8](/source-readout/target-relative-necessity-of-completion/the-joint-target-image-and-universal-minimality#sec:joint) maximally visible. A reader who objects that “real physics sees the holonomy” is agreeing with the analysis: enlarging the readout to include holonomy is exactly the move that [Section 6](/source-readout/target-relative-necessity-of-completion/readout-extensions-and-target-sufficiency#sec:extensions) formalizes, and [Section 11](/source-readout/target-relative-necessity-of-completion/the-minimal-completion-for-the-spectral-target#sec:minimal-spectral) shows that for the spectral target one need not even go that far.

</div>

<div class="example">

**Example 9.2** (A target unobstructed by the curvature readout).

<div id="ex:unobstructed">

</div>

Take $A_Q=\{\text{yes},\text{no}\}$ and $a_Q(\theta)=\text{yes}$ iff the connection is flat. Then $a_Q$ is constant on $S_{\mathrm{flat}}$, hence constant on the fiber $F_0$, hence by [Theorem 3.1](/source-readout/target-relative-necessity-of-completion/exact-target-solvability-and-its-obstruction#thm:exact-solvability) exactly solvable from $p_F$: the readout-only solution is $\bar a_Q(0)=\text{yes}$. The curvature readout, degenerate as it is, answers this target perfectly. The next two sections exhibit a target on the same source space, with the same readout, for which it fails.

</div>
