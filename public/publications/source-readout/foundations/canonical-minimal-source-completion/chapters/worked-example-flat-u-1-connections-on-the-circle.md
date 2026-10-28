# Worked example: flat $U(1)$ connections on the circle

<div id="sec:u1">

</div>

We now exhibit every phenomenon of the general theory in a single, completely explicit gauge-theoretic example. It is the extreme case of readout loss: the readout is *constant*, so it distinguishes nothing at all, and the completion must supply everything.

## The reduced source and the readout

Consider $U(1)$ connections on the trivial bundle over the circle $S^1$, restricted to the flat ones. Gauge reduction [(2.1)](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#eq:gauge-quotient) identifies gauge-equivalent connections; on the circle, the resulting reduced moduli space of flat connections is classified by the holonomy around the loop, so that $$
S_{\mathrm{flat}}\ \cong\ U(1),
\qquad
z=e^{i\theta},\quad\theta\in\mathbb{R}/2\pi\mathbb{Z} .\tag{11.1}$$ This is the standard classification of flat connections on the circle by their holonomy (see, e.g., \[[5](/source-readout/canonical-minimal-source-completion/references#bib-KobayashiNomizu), [7](/source-readout/canonical-minimal-source-completion/references#bib-WuYang)\]); we take it as given, and stress that $S_{\mathrm{flat}}$ is already the *reduced* source in the sense of [Section 2](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#sec:setup): gauge potentials and gauge transformations have been quotiented away, and it is not available to us to reintroduce them.

The readout is the curvature. For flat connections the curvature vanishes identically, so $$
p_F\colon S_{\mathrm{flat}}\longrightarrow T=\{0\},
\qquad
p_F(z)=0 .\tag{11.2}$$ The readout fiber is the whole source: $F_0=S_{\mathrm{flat}}\cong U(1)$. Every nontrivial distinction on $S_{\mathrm{flat}}$ therefore fails to descend along $p_F$, and $\sim_{p_F}$ is the total relation. Note carefully what is *not* being claimed: we do not claim that curvature is the complete physical observable content of a gauge field. On the contrary, the example exists precisely because it is not, the Aharonov–Bohm effect \[[6](/source-readout/canonical-minimal-source-completion/references#bib-AharonovBohm)\] and the Wu–Yang analysis \[[7](/source-readout/canonical-minimal-source-completion/references#bib-WuYang)\] are the physical statement that holonomy carries information the field strength does not. The readout $p_F$ is a readout, not an ontology.

## Transport completion

Nominate the single relation $$
r_{\mathrm{hol}}\colon S_{\mathrm{flat}}\to U(1),
\qquad
r_{\mathrm{hol}}(z)=z ,\tag{11.3}$$ the oriented holonomy itself. It is eligible in the sense of [Definition 2.1](/source-readout/canonical-minimal-source-completion/reduced-source-readout-and-the-nominated-relation-family#def:eligible): holonomy around a fixed loop is gauge-invariant (for the abelian group $U(1)$ it is invariant outright, not merely up to conjugacy), so it is a function on the reduced source. It is nominated because oriented parallel transport is what enters targets involving directed transport of charge around the loop.

By [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA), the completion is $$
E_{\mathrm{hol}}
=\mathop{\mathrm{Im}}\bigl(p_F,\ r_{\mathrm{hol}}\bigr)
=\{(0,z):z\in U(1)\}
\ \cong\ U(1),\tag{11.4}$$ and $e_{\mathrm{hol}}\colon S_{\mathrm{flat}}\to E_{\mathrm{hol}}$ is a bijection. Here $S$ is compact and $T\times V=\{0\}\times U(1)$ is Hausdorff, so [Corollary 10.5](/source-readout/canonical-minimal-source-completion/the-topological-universal-property#cor:compact-hausdorff) applies: the quotient and subspace topologies agree and [(11.4)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:Ehol) is a homeomorphism. By [Proposition 12.1](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#prop:reconstruction) below, the nomination $\{p_F,r_{\mathrm{hol}}\}$ separates points of $S_{\mathrm{flat}}$, so this is a case in which completion happens to reconstruct the whole reduced source. It does *not* restore gauge potentials or gauge representatives, by [Corollary 9.1](/source-readout/canonical-minimal-source-completion/the-gauge-reduction-boundary#cor:gauge) it cannot, and it restores nothing beyond the reduced source.

## Spectral completion

Now nominate instead the charged-scalar spectral target of Paper 2 \[[2](/source-readout/canonical-minimal-source-completion/references#bib-Paper2)\]. For a scalar of unit charge on $S^1$ minimally coupled to the flat connection with holonomy $e^{i\theta}$, let $H_\theta$ denote the associated Laplace-type operator. The result we import from Paper 2 is $$
\mathop{\mathrm{Spec}}(H_\theta)=\mathop{\mathrm{Spec}}(H_{\theta'})
\qquad\Longleftrightarrow\qquad
\theta'\equiv\pm\theta \pmod{2\pi},\tag{11.5}$$ with multiplicities. We do not reprove [(11.5)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:spec) here; it is exactly the Paper 2 input, and the new content of the present section is the family-level completion and refinement structure built on top of it.

Take $\mathcal Q=\{Q_{\mathrm{spec}}\}$ with answer map $a_{\mathrm{spec}}(z)=\mathop{\mathrm{Spec}}(H_\theta)$ for $z=e^{i\theta}$ (a well-defined function of $z$, since $\theta\mapsto H_\theta$ depends on $\theta$ only mod $2\pi$). By [(11.5)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:spec), the induced equivalence relation on $S_{\mathrm{flat}}$ is $$
z\ \sim_{\mathrm{spec}}\ z'
\qquad\Longleftrightarrow\qquad
z'=z\ \text{ or }\ z'=z^{-1},\tag{11.6}$$ the readout clause $p_F(z)=p_F(z')$ being vacuous. Hence, by [Proposition 8.1](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#prop:target-completion), $$
E_{\mathrm{spec}}\ \cong\ S_{\mathrm{flat}}/\!\sim_{\mathrm{spec}}\ =\ U(1)/(z\sim z^{-1}).\tag{11.7}$$

<div class="proposition">

**Proposition 11.1** (The spectral completion is an interval).

<div id="prop:interval">

</div>

*Give $U(1)/(z\sim z^{-1})$ the quotient topology. Then the assignment $$
c\colon U(1)/(z\sim z^{-1})\longrightarrow[-1,1],
\qquad
c\bigl([z]\bigr)=\mathop{\mathrm{Re}}z=\cos\theta
\qquad(z=e^{i\theta}),\tag{11.8}$$ is a well-defined homeomorphism. Hence $E_{\mathrm{spec}}\cong[-1,1]$.*

</div>

<div class="proof">

*Proof.* *Well defined.* $\mathop{\mathrm{Re}}(z^{-1})=\mathop{\mathrm{Re}}(\bar z)=\mathop{\mathrm{Re}}z$ for $z\in U(1)$, so the formula does not depend on the representative of the class.

*Injective.* Suppose $\cos\theta=\cos\theta'$ with $\theta,\theta'\in\mathbb{R}/2\pi\mathbb{Z}$. Then $\theta'\equiv\pm\theta\pmod{2\pi}$, i.e. $e^{i\theta'}=e^{\pm i\theta}$, i.e. $z'\in\{z,z^{-1}\}$, i.e. $[z']=[z]$.

*Surjective.* For $x\in[-1,1]$ set $\theta=\arccos x\in[0,\pi]$; then $c([e^{i\theta}])=x$.

*Continuous.* The composite of $c$ with the quotient map $U(1)\to U(1)/(z\sim z^{-1})$ is $z\mapsto\mathop{\mathrm{Re}}z$, which is continuous. By the characteristic property of the quotient topology, $c$ is continuous.

*Homeomorphism.* $U(1)$ is compact, hence so is its continuous image $U(1)/(z\sim z^{-1})$; and $[-1,1]$ is Hausdorff. A continuous bijection from a compact space to a Hausdorff space is a homeomorphism: it is a closed map, since closed subsets of a compact space are compact, their continuous images are compact, and compact subsets of a Hausdorff space are closed; a closed continuous bijection is a homeomorphism. ◻

</div>

## The refinement map, concretely

The relation family $\{r_{\mathrm{hol}}\}$ mediates the spectral target in the sense of [Definition 8.2](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#def:mediation): by [(11.5)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:spec) the spectrum is a function of the holonomy, so there is $\Phi_{\mathrm{spec}}\colon T\times U(1)\to A_{Q_{\mathrm{spec}}}$ with $a_{\mathrm{spec}}(z)=\Phi_{\mathrm{spec}}(p_F(z),r_{\mathrm{hol}}(z))$. [Theorem 8.3](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#thm:chi) therefore supplies a unique surjection $\chi\colon E_{\mathrm{hol}}\to E_{\mathrm{spec}}$, and under the identifications [(11.4)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:Ehol) and [Proposition 11.1](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#prop:interval) it is exactly $$
\chi\colon U(1)\longrightarrow[-1,1],
\qquad
e^{i\theta}\longmapsto\cos\theta .\tag{11.9}$$ It is surjective, and it is *not* injective: $\chi(e^{i\theta})=\chi(e^{-i\theta})$ while $e^{i\theta}\neq e^{-i\theta}$ whenever $\theta\not\equiv0,\pi$. So this is a concrete realization of the strict inequality permitted by [(8.6)](/source-readout/canonical-minimal-source-completion/completion-determined-by-a-family-of-target-answers#eq:chi-order): here $\sim_A\ \subsetneq\ \sim_{\mathcal Q}$, and the target completion is strictly coarser than the relation completion.

The physics of the strictness is transparent. The full oriented holonomy retains an *orientation*: it distinguishes transport of charge around the loop in one sense from transport in the other, i.e. $z$ from $z^{-1}$. The charged-scalar spectrum does not require that information, by [(11.5)](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#eq:spec) it is invariant under $\theta\mapsto-\theta$, and so the minimal completion *for that target* discards it. Each completion is minimal for its own nomination. Which is appropriate depends on which targets one has nominated, and that is a physical decision made before the mathematics begins, not one the mathematics can make.

<div class="remark">

*Remark 40*.

<div id="rem:u1-endpoints">

</div>

The two fixed points of the inversion, $z=1$ ($\theta=0$) and $z=-1$ ($\theta=\pi$), are exactly the points where $\chi$ fails to be two-to-one; they map to the endpoints $\pm1$ of the interval. They are the connections whose holonomy is its own inverse, i.e. for which orientation carries no information.

</div>
