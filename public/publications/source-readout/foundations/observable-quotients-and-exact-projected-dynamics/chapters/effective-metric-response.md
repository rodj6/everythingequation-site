# Effective metric response

<div id="sec:metric">

</div>

We finally allow the metric to participate, and ask what elimination of $\chi$ does to the gravitational field equations. The answer is a stationary-elimination (envelope) identity, which converts the eliminated sector into a *covariant variational response* rather than an unexplained additive term.

<div class="assumption">

**Assumption 10.1**.

<div id="ass:gravity">

</div>

Let $M$ be a smooth spacetime manifold. Let the metrics, visible fields, and completion fields range over open subsets $\mathcal{G}$, $\mathcal{F}_{\varphi}$, $\mathcal{F}_{\chi}$ of Banach spaces (equivalently, over Banach manifolds modelled on them, for definiteness one may take suitable Sobolev or weighted Hölder sections of the relevant bundles over $M$, with the boundary or fall-off conditions specified below built into the space). Let $$S:\mathcal{G}\times\mathcal{F}_{\varphi}\times\mathcal{F}_{\chi}\longrightarrow\mathbb{R}$$ be a real, diffeomorphism-invariant action functional which is *continuously Fréchet differentiable* ($C^{1}$) on its domain, and suppose the boundary/fall-off conditions defining the spaces are such that all integrations by parts performed below produce no boundary contributions, and such that the Fréchet derivatives are represented by the densities $\delta S/\delta g^{\mu\nu}$, $\delta S/\delta\varphi$, $\delta S/\delta\chi$ in the usual way, $$DS[g,\varphi,\chi]\,(h,\psi,\theta)
=\int_{M}\Bigl(\frac{\delta S}{\delta g^{\mu\nu}}h^{\mu\nu}
+\frac{\delta S}{\delta\varphi}\psi
+\frac{\delta S}{\delta\chi^{I}}\theta^{I}\Bigr)d^{4}x .$$ Suppose a *branch* $$
(g,\varphi)\ \longmapsto\ \chi_{*}[g,\varphi]\tag{10.1}$$ of solutions of the eliminated field equation $$
\left.\frac{\delta S}{\delta\chi(x)}\right|_{\chi=\chi_{*}[g,\varphi]}=0
\qquad\text{for all }x\in M\tag{10.2}$$ has been selected, and that this branch is a *continuously Fréchet differentiable* map $$\chi_{*}:\mathcal{G}\times\mathcal{F}_{\varphi}\longrightarrow\mathcal{F}_{\chi} .$$ (In practice such a branch is produced, where it exists, by the implicit function theorem in Banach spaces \[[18](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zeidler1), Ch. 4\], applied to the Euler map $(g,\varphi,\chi)\mapsto\delta S/\delta\chi$ at a solution where the linearization $\delta^{2}S/\delta\chi^{2}$ is a Banach-space isomorphism. That theorem requires the Euler map itself to be continuously Fréchet differentiable, which does *not* follow from $S\in C^{1}$; so for this remark, and for this remark only, assume additionally that $S\in C^{2}$, or equivalently for present purposes that $(g,\varphi,\chi)\mapsto\delta S/\delta\chi$ is itself continuously Fréchet differentiable. Under that extra hypothesis the implicit function theorem also delivers the $C^{1}$ dependence of $\chi_{*}$ assumed above. We emphasize that this strengthening is *not* imposed on Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) or used in Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope): the envelope identity needs only $S\in C^{1}$ together with the separately assumed $C^{1}$ branch $\chi_{*}$, however that branch is obtained. We do not verify any of these hypotheses for a particular action; we assume them.) Define the *reduced action* $$
\Gamma_{\mathrm{eff}}[g,\varphi]:=S\bigl[g,\varphi,\chi_{*}[g,\varphi]\bigr].\tag{10.3}$$

</div>

We stress the three hypotheses that are doing real work and that are frequently left tacit: (i) *differentiability of the branch* $\chi_{*}$, a solution of [(10.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chistargrav) need not depend differentiably on $(g,\varphi)$, and where several branches exist a choice has been made; (ii) *boundary conditions*, the variation $\delta\chi_{*}$ induced by a variation of $g$ must be an admissible variation, i.e. satisfy the same boundary conditions, or the envelope argument fails; (iii) *equivariance of the branch*, the assignment [(10.1)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:branch) must intertwine the diffeomorphism action, $\chi_{*}[\phi^{*}g,\phi^{*}\varphi]
=\phi^{*}\chi_{*}[g,\varphi]$ for diffeomorphisms $\phi$, if $\Gamma_{\mathrm{eff}}$ is to inherit the diffeomorphism invariance of $S$. Without (iii), $S$ can be invariant while $\Gamma_{\mathrm{eff}}$ is not, because the selection of the branch may break the symmetry.

<div class="proposition">

**Proposition 10.2** (Stationary-elimination / envelope identity).

<div id="prop:envelope">

</div>

*Under Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity), $$
\boxed{\ \
\frac{\delta\Gamma_{\mathrm{eff}}[g,\varphi]}{\delta g^{\mu\nu}(x)}
=\left.\frac{\delta S[g,\varphi,\chi]}{\delta g^{\mu\nu}(x)}\right|_{\chi=\chi_{*}[g,\varphi]}
\ \ }\tag{10.4}$$ and likewise $\dfrac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi(x)}
=\left.\dfrac{\delta S}{\delta\varphi(x)}\right|_{\chi_{*}}$. That is, the metric (and visible-field) derivative of the reduced action is computed by differentiating $S$ at fixed $\chi$ and *then* evaluating on the branch: the implicit dependence of $\chi_{*}$ on $g$ contributes nothing.*

</div>

<div class="proof">

*Proof.* Since $S$ and $\chi_{*}$ are continuously Fréchet differentiable, so is the composite $\Gamma_{\mathrm{eff}}=S\circ(\mathrm{id},\mathrm{id},\chi_{*})$, and the standard Fréchet chain rule for a composition of continuously Fréchet differentiable maps between Banach spaces \[[18](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Zeidler1), Ch. 4\] applies without further hypotheses: $$D\Gamma_{\mathrm{eff}}[g,\varphi]=D_{g,\varphi}S\big|_{\chi_{*}}
+D_{\chi}S\big|_{\chi_{*}}\circ D\chi_{*}[g,\varphi] .$$ Writing this in terms of the representing densities, with the spacetime integration and field indices explicit, and with $\chi$ carrying whatever index structure $I$ it possesses, it reads $$
\frac{\delta\Gamma_{\mathrm{eff}}[g,\varphi]}{\delta g^{\mu\nu}(x)}
=\left.\frac{\delta S}{\delta g^{\mu\nu}(x)}\right|_{\chi_{*}}
+\int_{M}\!d^{4}y\;
\left.\frac{\delta S}{\delta\chi^{I}(y)}\right|_{\chi_{*}}
\frac{\delta\chi_{*}^{I}(y)}{\delta g^{\mu\nu}(x)} ,\tag{10.5}$$ with summation over $I$. The induced variation $\delta\chi_{*}$ is an admissible variation, it lands in the tangent space to $\mathcal{F}_{\chi}$, hence satisfies the boundary conditions built into that space, which is what licenses writing the second term as an integral against $\delta S/\delta\chi^{I}$ with no boundary contribution. By the eliminated field equation [(10.2)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chistargrav), the factor $\delta S/\delta\chi^{I}(y)\big|_{\chi_{*}}$ vanishes identically in $y$, so the entire integral in [(10.5)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:chainrule) vanishes, leaving [(10.4)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:envelope). The argument for $\delta/\delta\varphi$ is identical, replacing $g^{\mu\nu}(x)$ by $\varphi(x)$. ◻

</div>

Proposition [10.2](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#prop:envelope) is what makes the reduction *usable*: to compute the gravitational response of the reduced theory one does not need $\delta\chi_{*}/\delta g$ at all, an object which is typically the solution of a linearized equation and thoroughly inaccessible.

<div class="definition">

**Definition 10.3** (Effective stress-energy).

<div id="def:Teff">

</div>

Split the reduced action into a visible part and a correction, $$
\Gamma_{\mathrm{eff}}[g,\varphi]=S_{\mathrm{visible}}[g,\varphi]+\Gamma_{\mathrm{corr}}[g,\varphi],\tag{10.6}$$ where, by declaration, $S_{\mathrm{visible}}$ contains the gravitational sector and the visible matter sector in the conventions $$
S_{\mathrm{visible}}[g,\varphi]
=\frac{1}{16\pi G_{N}}\int_{M}\!\bigl(R-2\Lambda\bigr)\sqrt{-g}\,d^{4}x
\;+\;S_{\mathrm{mat}}[g,\varphi],
\qquad
T^{\mathrm{visible}}_{\mu\nu}
:=-\frac{2}{\sqrt{-g}}\frac{\delta S_{\mathrm{mat}}}{\delta g^{\mu\nu}},\tag{10.7}$$ and $\Gamma_{\mathrm{corr}}:=\Gamma_{\mathrm{eff}}-S_{\mathrm{visible}}$ is whatever the elimination of $\chi$ has added. We assume, as part of the declaration [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), that the visible matter action $S_{\mathrm{mat}}$ is itself diffeomorphism invariant; the Einstein–Hilbert term is invariant automatically, so $S_{\mathrm{visible}}$ is an invariant functional. Consequently, whenever $\Gamma_{\mathrm{eff}}$ is invariant, which, by Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) and the equivariance of the branch, is the case under the hypotheses of Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation), the correction $\Gamma_{\mathrm{corr}}=\Gamma_{\mathrm{eff}}-S_{\mathrm{visible}}$ is a difference of invariant functionals and is therefore separately invariant as well. This is what entitles us to call *both* $T^{\mathrm{visible}}_{\mu\nu}$ and $T^{\mathrm{eff}}_{\mu\nu}$ covariant tensorial responses in Remark [10.6](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#rem:invcov): each is the metric variation of an invariant functional, and each therefore satisfies the equivariance law [(10.17)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teffequiv). Separate *invariance* of the two functionals must not, however, be confused with separate *conservation* of the two tensors, which Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation) does *not* assert; the two sectors do each carry an off-shell Noether identity, but they are coupled on shell by an exchange current, as the proof of that theorem makes precise. Define the *effective stress-energy tensor* of the eliminated sector by the same variational rule: $$
\boxed{\ \
T^{\mathrm{eff}}_{\mu\nu}
:=-\frac{2}{\sqrt{-g}}\,\frac{\delta\Gamma_{\mathrm{corr}}}{\delta g^{\mu\nu}} .
\ \ }\tag{10.8}$$

</div>

The point of [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff) is that it is a *definition by variation of an explicitly constructed functional* $\Gamma_{\mathrm{corr}}$, and [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split) tells us exactly what that functional is. Contrast the common alternative: take a field equation one does not like, move the offending term to the right-hand side of Einstein’s equation, and call the result a stress-energy tensor. That rearrangement is not empty, it does define a symbol, and algebraically the resulting equation is true by construction, but it establishes, by itself, none of the three properties one wants of a stress-energy tensor: it exhibits no variational origin (no functional whose metric derivative the term is), it does not by itself certify that the object transforms as a $(0,2)$-tensor, and it yields no conservation law. Definition [10.3](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#def:Teff) supplies all three: the functional is $\Gamma_{\mathrm{corr}}$ from [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split), the tensorial transformation follows because $T^{\mathrm{eff}}$ is the metric variation of a diffeomorphism-invariant functional (Remark [10.6](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#rem:invcov)), and the conservation law is Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation). That is the difference between a rearrangement and a derivation.

<div class="proposition">

**Proposition 10.4** (Effective Einstein equations).

<div id="prop:einstein">

</div>

*With the conventions [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), stationarity of $\Gamma_{\mathrm{eff}}$ with respect to $g^{\mu\nu}$, i.e. $\delta\Gamma_{\mathrm{eff}}/\delta g^{\mu\nu}=0$, is equivalent to $$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=8\pi G_{N}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr),\tag{10.9}$$ where $G_{\mu\nu}=R_{\mu\nu}-\tfrac12 R\,g_{\mu\nu}$.*

</div>

<div class="proof">

*Proof.* Vary [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split). The Einstein–Hilbert term in [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) has the standard variation $$\frac{\delta}{\delta g^{\mu\nu}}\frac{1}{16\pi G_{N}}\int(R-2\Lambda)\sqrt{-g}\,d^{4}x
=\frac{\sqrt{-g}}{16\pi G_{N}}\Bigl(R_{\mu\nu}-\tfrac12 Rg_{\mu\nu}+\Lambda g_{\mu\nu}\Bigr)
=\frac{\sqrt{-g}}{16\pi G_{N}}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr),$$ using $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}\,g_{\mu\nu}\delta g^{\mu\nu}$ and discarding the total-derivative term by the boundary hypothesis \[[16](/source-readout/observable-quotients-and-exact-projected-dynamics/references#bib-Wald), §4.3\]. By [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) and [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff) the matter and correction terms contribute $-\tfrac{\sqrt{-g}}{2}T^{\mathrm{visible}}_{\mu\nu}$ and $-\tfrac{\sqrt{-g}}{2}T^{\mathrm{eff}}_{\mu\nu}$ respectively. Setting the sum to zero and multiplying by $16\pi G_{N}/\sqrt{-g}$ gives [(10.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:einstein). ◻

</div>

<div class="theorem">

**Theorem 10.5** (Total covariant conservation).

<div id="thm:conservation">

</div>

*Suppose in addition to Assumption [10.1](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#ass:gravity) that the branch $\chi_{*}$ is diffeomorphism-equivariant, so that $\Gamma_{\mathrm{eff}}$ is a diffeomorphism-invariant functional of $(g,\varphi)$. Then, *on solutions of the effective visible-matter field equation* $\delta\Gamma_{\mathrm{eff}}/\delta\varphi=0$, $$
\nabla^{\mu}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr)=0 .\tag{10.10}$$ In general, neither $\nabla^{\mu}T^{\mathrm{visible}}_{\mu\nu}=0$ nor $\nabla^{\mu}T^{\mathrm{eff}}_{\mu\nu}=0$ holds separately.*

</div>

<div class="proof">

*Proof.* Let $\xi$ be a compactly supported smooth vector field on $M$ and let $\phi_{\varepsilon}$ be its flow. Diffeomorphism invariance of $\Gamma_{\mathrm{eff}}$ gives $\Gamma_{\mathrm{eff}}[\phi_{\varepsilon}^{*}g,\phi_{\varepsilon}^{*}\varphi]=\Gamma_{\mathrm{eff}}[g,\varphi]$ for all $\varepsilon$; differentiating at $\varepsilon=0$ and using $\delta_{\xi}g^{\mu\nu}=\mathcal{L}_{\xi}g^{\mu\nu}=-(\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu})$ and $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$, we obtain the Noether identity $$
0=\int_{M}\Bigl(
\frac{\delta\Gamma_{\mathrm{eff}}}{\delta g^{\mu\nu}}\,\mathcal{L}_{\xi}g^{\mu\nu}
+\frac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi}\,\mathcal{L}_{\xi}\varphi
\Bigr)d^{4}x .\tag{10.11}$$ Restrict now to field configurations satisfying the visible-matter equation of the *reduced* theory, $\delta\Gamma_{\mathrm{eff}}/\delta\varphi=0$; the second term of [(10.11)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:noether) then drops. Split $\delta\Gamma_{\mathrm{eff}}/\delta g^{\mu\nu}$ using [(10.6)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:split), [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis), [(10.8)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teff): writing $$\frac{\delta\Gamma_{\mathrm{eff}}}{\delta g^{\mu\nu}}
=\frac{\sqrt{-g}}{16\pi G_{N}}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)
-\frac{\sqrt{-g}}{2}\Bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\Bigr)
=:\frac{\sqrt{-g}}{16\pi G_{N}}\,\mathcal{E}_{\mu\nu},$$ and substituting into [(10.11)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:noether) with $\mathcal{L}_{\xi}g^{\mu\nu}=-2\nabla^{(\mu}\xi^{\nu)}$ gives $$0=-\frac{2}{16\pi G_{N}}\int_{M}\sqrt{-g}\;\mathcal{E}_{\mu\nu}\,\nabla^{\mu}\xi^{\nu}\,d^{4}x
=\frac{2}{16\pi G_{N}}\int_{M}\sqrt{-g}\;\bigl(\nabla^{\mu}\mathcal{E}_{\mu\nu}\bigr)\,\xi^{\nu}\,d^{4}x ,$$ after one covariant integration by parts, the boundary term vanishing because $\xi$ has compact support. As $\xi$ is arbitrary, $\nabla^{\mu}\mathcal{E}_{\mu\nu}=0$. Finally, the contracted Bianchi identity gives $\nabla^{\mu}(G_{\mu\nu}+\Lambda g_{\mu\nu})=0$ identically (metric-compatibility making $\nabla^{\mu}g_{\mu\nu}=0$), so $\nabla^{\mu}\bigl(T^{\mathrm{visible}}_{\mu\nu}+T^{\mathrm{eff}}_{\mu\nu}\bigr)=0$, which is [(10.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:conservation).

For the final sentence, the situation must be described with care, because $S_{\mathrm{visible}}$ and $\Gamma_{\mathrm{corr}}$ *are* separately diffeomorphism invariant (Definition [10.3](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#def:Teff)), and each therefore *does* possess its own off-shell Noether identity, obtained by running the argument above on that functional alone. To state these without committing to the tensor type of $\varphi$, introduce the *Ward operator* $\mathcal{W}_{\nu}$: for any diffeomorphism-invariant functional $F[g,\varphi]$ with associated stress tensor $T^{F}_{\mu\nu}:=-\tfrac{2}{\sqrt{-g}}\,\delta F/\delta g^{\mu\nu}$ and Euler operator $E^{F}_{\varphi}:=\delta F/\delta\varphi$, the same computation as above, with $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$ and one integration by parts, yields the off-shell identity $$
\nabla^{\mu}T^{F}_{\mu\nu}=\mathcal{W}_{\nu}\bigl(E^{F}_{\varphi}\bigr),\tag{10.12}$$ where $\mathcal{W}_{\nu}$ is the formal adjoint of the map $\xi^{\nu}\mapsto\mathcal{L}_{\xi}\varphi$, contracted appropriately; it is *linear* in its argument, and its precise form depends on the tensor type of $\varphi$ but *not* on $F$. For a scalar field $\varphi$ it reduces to $$
\mathcal{W}_{\nu}(E_{\varphi})
=\frac{1}{\sqrt{-g}}\,E_{\varphi}\,\nabla_{\nu}\varphi ,
\qquad\text{so that}\qquad
\nabla^{\mu}T_{\mu\nu}
=\frac{1}{\sqrt{-g}}\,\frac{\delta F}{\delta\varphi}\,\nabla_{\nu}\varphi ,\tag{10.13}$$ in the conventions $T_{\mu\nu}=-\tfrac{2}{\sqrt{-g}}\,\delta F/\delta g^{\mu\nu}$ and $\delta_{\xi}\varphi=\mathcal{L}_{\xi}\varphi$ fixed in [(10.7)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Svis) and above. We stress that [(10.13)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardscalar) is the *scalar* case; [(10.12)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardgen) is the statement for general $\varphi$, and the scalar formula must not be read as an identity for tensor-valued $\varphi$.

Applying [(10.12)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardgen) to $S_{\mathrm{visible}}$ and to $\Gamma_{\mathrm{corr}}$, each invariant, hence each entitled to its own identity, and using the contracted Bianchi identity on the gravitational part of $S_{\mathrm{visible}}$, we obtain, as identities holding for *all* field configurations, $$\begin{aligned}
\nabla^{\mu}T^{\mathrm{visible}}_{\mu\nu}
&=\mathcal{W}_{\nu}\Bigl(\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}\Bigr)
\;=:\;J^{\mathrm{vis}}_{\nu},
\qquad\text{(10.14)}\\
\nabla^{\mu}T^{\mathrm{eff}}_{\mu\nu}
&=\mathcal{W}_{\nu}\Bigl(\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}\Bigr)
\;=:\;J^{\mathrm{corr}}_{\nu} .
\qquad\text{(10.15)}
\end{aligned}$$

So the two sectors do have Ward identities, and the reason separate conservation nevertheless fails is not an absence of identities but the *on-shell* condition. The physical configuration satisfies the field equation of the *combined* reduced theory, $$
\frac{\delta\Gamma_{\mathrm{eff}}}{\delta\varphi}
=\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}+\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}=0 ,\tag{10.16}$$ which does *not* imply $\delta S_{\mathrm{visible}}/\delta\varphi=0$ or $\delta\Gamma_{\mathrm{corr}}/\delta\varphi=0$ separately, it implies only that the two Euler operators are equal and opposite. Since $\mathcal{W}_{\nu}$ is linear, applying it to [(10.16)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:combinedeq) gives $$J^{\mathrm{vis}}_{\nu}+J^{\mathrm{corr}}_{\nu}
=\mathcal{W}_{\nu}\Bigl(\frac{\delta S_{\mathrm{visible}}}{\delta\varphi}
+\frac{\delta\Gamma_{\mathrm{corr}}}{\delta\varphi}\Bigr)
=\mathcal{W}_{\nu}(0)=0 ,$$ so the two sector Ward terms are equal and opposite and cancel in the sum of [(10.14)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardvis) and [(10.15)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardcorr), which is exactly [(10.10)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:conservation), while neither need vanish on its own. The common quantity $J^{\mathrm{vis}}_{\nu}=-J^{\mathrm{corr}}_{\nu}$ is the *exchange current* between the visible and eliminated sectors: it is the rate at which the eliminated sector feeds energy–momentum to the visible one.

The logical structure is therefore this. Separate diffeomorphism invariance supplies separate *off-shell* identities, [(10.14)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardvis) and [(10.15)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:wardcorr), and nothing more. Separate *conservation* of a sector’s stress tensor requires, in addition, that that sector’s Ward term vanish *on the combined solution*, i.e. that $\mathcal{W}_{\nu}(\delta S_{\mathrm{visible}}/\delta\varphi)=0$ there, equivalently (by [(10.16)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:combinedeq) and linearity) that $\mathcal{W}_{\nu}(\delta\Gamma_{\mathrm{corr}}/\delta\varphi)=0$ there. This holds, for instance, when $\Gamma_{\mathrm{corr}}$ does not depend on $\varphi$ at all, or when the visible field happens to satisfy its own equation $\delta S_{\mathrm{visible}}/\delta\varphi=0$ on the combined solution, or when $\mathcal{W}_{\nu}$ annihilates the relevant Euler operator. It is *not* supplied by invariance: diffeomorphism invariance of a sector gives that sector its Ward identity, but it does not put the sector on shell, and it therefore cannot by itself force the exchange current to vanish. Absent such a structure, the eliminated sector exchanges energy–momentum with the visible one, and only the sum is conserved. ◻

</div>

<div class="remark">

*Remark 49* (Invariance versus covariance).

<div id="rem:invcov">

</div>

Three statements must be kept apart, and they are frequently run together.

1.  $\Gamma_{\mathrm{eff}}$ is an *invariant scalar functional*: under the hypotheses of Theorem [10.5](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#thm:conservation) we have $\Gamma_{\mathrm{eff}}[\phi^{*}g,\phi^{*}\varphi]=\Gamma_{\mathrm{eff}}[g,\varphi]$. This is a statement about a single number assigned to a whole field configuration.

2.  $T^{\mathrm{eff}}_{\mu\nu}$ is a *covariant tensorial response*: it transforms equivariantly as a $(0,2)$-tensor field under diffeomorphisms, because it is the metric variation of an invariant functional. Geometrically it is a section of the associated tensor bundle $\mathrm{Sym}^{2}T^{*}M$, evaluated on the given configuration, and the diffeomorphism group acts on it by pullback rather than fixing it: $$
    T^{\mathrm{eff}}\bigl[\phi^{*}g,\phi^{*}\varphi\bigr]
    =\phi^{*}\,T^{\mathrm{eff}}\bigl[g,\varphi\bigr],\tag{10.17}$$ in the same pullback convention used for the metric and the fields throughout. Consequently it is *not* an ordinary pointwise scalar function on the naive quotient of field space by diffeomorphisms: the value “$T^{\mathrm{eff}}_{\mu\nu}(x)$” is not by itself a diffeomorphism-invariant number, because the label $x$ is not. Three levels must be kept apart here, and the second is routinely mistaken for the third.

    - *Tensorial response.* $T^{\mathrm{eff}}_{\mu\nu}$ itself: an equivariant section of $\mathrm{Sym}^{2}T^{*}M$, transforming by pullback as in [(10.17)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:Teffequiv).

    - *Covariant scalar fields obtained by contraction.* Objects such as the trace $T^{\mathrm{eff}}:=g^{\mu\nu}T^{\mathrm{eff}}_{\mu\nu}$, or $T^{\mathrm{eff}}_{\mu\nu}T^{\mathrm{eff}\,\mu\nu}$. These are scalar *fields*: they carry no free indices and transform as scalars. But a scalar field is still a function on $M$, and it is *still not* a diffeomorphism-invariant observable when evaluated at a coordinate-labelled point: under $\phi$ it goes to $\phi^{*}T^{\mathrm{eff}}$, so the number $T^{\mathrm{eff}}(x)$ at a fixed coordinate label $x$ is not invariant. Contraction removes the indices; it does not remove the dependence on the labelling.

    - *Genuine diffeomorphism-invariant observables.* These require a further step: invariant integration (e.g. $\int_{M}T^{\mathrm{eff}}\sqrt{-g}\,d^{4}x$ over an invariantly specified region, or an integral against an invariantly constructed density), smearing against equivariantly chosen test tensors, or relational evaluation, evaluating one field at a point located by the values of other fields, so that the point is specified by the configuration rather than by a coordinate.

    The equivariant response is the primary object; covariant scalar fields are contractions of it; invariant observables are constructed from those by one of the three routes just named.

3.  The effective field equations [(10.9)](/source-readout/observable-quotients-and-exact-projected-dynamics/effective-metric-response#eq:einstein) are *geometrically covariant*: both sides are $(0,2)$-tensors and the equation is preserved under diffeomorphisms. Covariance of the equations is a consequence of invariance of the functional; it is not the same statement, and it does not license treating $T^{\mathrm{eff}}$ as an invariant.

</div>
