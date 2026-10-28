# Ward–Noether identities and covariant consistency

<div id="sec:noether">

</div>

Gauge and diffeomorphism invariance impose Noether identities \[[9](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Noether1918)\], and those identities constrain every effective representation of a completed source relation. Two logically distinct routes to covariant conservation must be kept apart, and we present them separately.

<div class="convention">

**Convention 8.1** (Infinitesimal allowed arrows and the induced field variations).

<div id="conv:lie">

</div>

A base vector field $\xi$ on $M$ does not by itself define a Lie derivative of a principal connection or of a section of an associated bundle: differentiating such objects requires a lift of the flow of $\xi$ to the total space $P$. We therefore generate the variations from the groupoid itself.

Let $(\hat F_t,f_t)_{t\in(-\epsilon,\epsilon)}$ be a smooth one-parameter family of allowed arrows of $\mathfrak{G}_{\mathrm{geo}}$ with $(\hat F_0,f_0)=(\mathrm{id}_P,\mathrm{id}_M)$, and let $$\xi:=\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0} f_t$$ be the generating base vector field, taken compactly supported in the interior of $M$. Write $\hat\xi$ for the induced $G$-invariant vector field on $P$ generating $\hat F_t$, which projects to $\xi$. The induced infinitesimal variations of the fields are defined by $$
\begin{aligned}
\delta_\xi g^{\mu\nu}
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}\bigl(f_t^{*}g^{\mu\nu}\bigr)
=-\mathcal{L}_\xi g^{\mu\nu},
\\[0.35em]
\delta_{\hat\xi} A
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}\bigl(\hat F_t^{*}A\bigr),
\\[0.35em]
\delta_{\hat\xi}\Phi
&:=-\frac{\mathrm{d}}{\mathrm{d}t}\Big|_{t=0}
\bigl(\hat F_{t,\rho}^{-1}\circ\Phi\circ f_t\bigr).
\end{aligned}\tag{81}$$ The first is intrinsic to the base, and we record the inverse-metric identity we shall use: differentiating $g^{\mu\rho}g_{\rho\nu}=\delta^{\mu}_{\nu}$ gives $$
\mathcal{L}_\xi g^{\mu\nu}=-\bigl(\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu}\bigr),\tag{82}$$ the sign being opposite to that for the covariant metric, $\mathcal{L}_\xi g_{\mu\nu}=\nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu$. Hence, with the convention [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi), $$
\delta_\xi g^{\mu\nu}=\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu} .\tag{83}$$

The bundle variations require a further remark. The lift $\hat\xi$ of $\xi$ is not unique: any two allowed lifts differ by a vertical, i.e. gauge, direction. Concretely, in a local trivialization over $U\subseteq M$, in which $A$ is represented by $A_\mu$ and $\Phi$ by a $W$-valued map, a choice of lift yields $$
\delta_{\hat\xi}A_\mu = -\bigl(\mathcal{L}_\xi A\bigr)_\mu + D_\mu\varepsilon,
\qquad
\delta_{\hat\xi}\Phi = -\mathcal{L}_\xi\Phi - \rho_*(\varepsilon)\,\Phi ,\tag{84}$$ where $\mathcal{L}_\xi$ denotes the coordinate Lie derivative of the local representatives and $\varepsilon\in\Gamma(\mathrm{ad}P|_U)$ is the vertical gauge parameter recording the choice of lift; changing the lift changes $\varepsilon$. Thus the induced connection variation agrees with the naive coordinate Lie derivative only up to a vertical term $D_\mu\varepsilon$, with the corresponding representation action $-\rho_*(\varepsilon)\Phi$ on the matter field.

This ambiguity is harmless for the Ward identity of Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons), and we note why once here. The extra terms in [(84)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-local) are precisely an infinitesimal gauge transformation, of the form [(92)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:inf-gauge). In the Ward computation they are contracted with the Euler coefficients of $A$ and $\Phi$, which vanish identically on the gauge and matter shell on which the theorem is evaluated. The vertical terms therefore multiply zero and drop out, and the conclusion is independent of the choice of lift.

</div>

<div class="definition">

**Definition 8.2** (Total stress-energy).

<div id="def:Ttot">

</div>

$$
T^{\mathrm{tot}}_{\mu\nu}
:=T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu} .\tag{85}$$

</div>

## Route (a): on a full solution, via the contracted Bianchi identity

<div class="proposition">

**Proposition 8.3** (Conservation on a full solution).

<div id="prop:cons-bianchi">

</div>

*Suppose the Einstein equation [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein) holds, with $\Lambda$ constant. Then $$
\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}=0 .\tag{86}$$*

</div>

<div class="proof">

*Proof.* Take the covariant divergence of [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein). The contracted second Bianchi identity gives $\nabla^{\mu}G_{\mu\nu}=0$ \[[12](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Wald)\], and metric compatibility [(25)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:LC) with constancy of $\Lambda$ gives $\nabla^{\mu}(\Lambda g_{\mu\nu})=0$. Hence $8\pi G_N\,\nabla^\mu T^{\mathrm{tot}}_{\mu\nu}=0$, and [(86)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-a) follows since $G_N\neq0$. ◻

</div>

This argument uses the Einstein equation: it is valid on a full solution of the coupled system, including the gravitational field equation, and it does not establish [(86)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-a) from the gauge and matter equations alone. Route (b) below derives the same conclusion without the Einstein equation, as a Noether identity of diffeomorphism invariance.

## Route (b): diffeomorphism invariance, independent of the Einstein equation

<div class="theorem">

**Theorem 8.4** (Diffeomorphism invariance and on-shell covariant conservation).

<div id="thm:cons">

</div>

*Let $S_{\mathrm{ng}}:=S_{\mathrm{YM}}+S_{\mathrm{m}}+S_{\mathrm{rel}}$ denote the nongravitational part of the action [(63)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Stot), and assume:*

1.  <div id="C1">

    </div>

    **(Invariance.)* $S_{\mathrm{ng}}$ is invariant under every smooth one-parameter family of allowed arrows $(\hat F_t,f_t)$ of $\mathfrak{G}_{\mathrm{geo}}$ with compactly supported generator $\xi$, the fields $(g,A,\Phi)$ transforming as in [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi). This is the hypothesis [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) of Definition [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#def:action), restricted to arrows near the identity;*

2.  <div id="C2">

    </div>

    **(Invariance of the fixed data.)* all data held fixed during the variation are themselves invariant under that flow. Concretely: any background or external structure in $\mathcal{B}$ entering $S_{\mathrm{ng}}$ is either dragged along with the fields or is preserved by the flow; and every relation coordinate $r_\alpha$ in regime (b) of Convention [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) (a fixed topological or boundary sector label) satisfies $\delta_\xi r_\alpha=0$, which holds because such labels are $\mathfrak{G}_{\mathrm{geo}}$-invariant by construction and $\xi$ generates arrows of $\mathfrak{G}_{\mathrm{geo}}$;*

3.  <div id="C3">

    </div>

    **(Boundary terms.)* $\xi$ has compact support in the interior of $M$, or the boundary terms generated by the integrations by parts below vanish under the treatment declared in Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational);*

4.  <div id="C4">

    </div>

    **(Full Euler coefficients.)* the coefficients of $\delta_{\hat\xi} A_\mu$ and $\delta_{\hat\xi}\Phi$ in $\delta_\xi S_{\mathrm{ng}}$ are the *full* Euler expressions appearing on the left sides of [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) and [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter), that is, they include the YM, matter, *and* relation contributions, computed with the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule);*

5.  <div id="C5">

    </div>

    **(Availability of lifts.)* for *every* smooth vector field $\xi$ with compact support in the interior of $M$, the admissibility class and allowed-arrow structure of $\mathfrak{G}_{\mathrm{geo}}$ contain a smooth allowed one-parameter family of arrows $(\hat F_t,f_t)$ whose base generator is $\xi$, with the fields $(g,A,\Phi)$ and the fixed data of $\mathcal{B}$ transformed as in [(81)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi). Thus every such $\xi$ generates an allowed flow to which [(C1)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C1) and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2) apply.*

*Write the full Euler operators of the gauge and matter sectors as $$
\mathcal{G}^{\nu}
:=\frac{1}{g_{\mathrm{YM}}^{2}}\,D_\mu F^{\mu\nu}
-\bigl(J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}}\bigr),
\qquad
\mathcal{E}_\Phi
:=\mathcal{E}^{\mathrm{m}}_{\Phi}+\mathcal{E}^{\mathrm{rel}}_{\Phi},\tag{87}$$ so that the gauge equation [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) reads $\mathcal{G}^{\nu}=0$ and the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter) reads $\mathcal{E}_\Phi=0$.*

*Then diffeomorphism invariance gives the integrated variational identity displayed in the proof. On every configuration satisfying $\mathcal{G}^{\nu}=0$ and $\mathcal{E}_\Phi=0$, but not necessarily the Einstein equation, one has $$
\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}=0 .\tag{88}$$ If the sectors exchange energy–momentum, the individual divergences $\nabla^\mu T^{X}_{\mu\nu}$ need not vanish; only the sum does.*

</div>

<div class="proof">

*Proof.* By [(C1)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C1) and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2), $\delta_\xi S_{\mathrm{ng}}=0$ *identically* in the fields, this is the off-shell content of diffeomorphism invariance, and [(C2)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C2) is exactly what licenses it, since a non-invariant fixed datum would contribute an uncancelled term. Expanding the total variation in the three field arguments, with the full Euler coefficients of [(C4)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C4), $$
0=\delta_\xi S_{\mathrm{ng}}
=\int_M\left[
\frac{\delta S_{\mathrm{ng}}}{\delta g^{\mu\nu}}\,\delta_\xi g^{\mu\nu}
+\Bigl\langle \frac{\delta S_{\mathrm{ng}}}{\delta A_\mu},\,\delta_{\hat\xi} A_\mu\Bigr\rangle
+\Bigl\langle\!\Bigl\langle \frac{\delta S_{\mathrm{ng}}}{\delta \Phi},\,\delta_{\hat\xi} \Phi
\Bigr\rangle\!\Bigr\rangle
\right]\mathrm{d}^4x ,\tag{89}$$ We first identify the three coefficients in [(89)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-expand). By [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), [(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) and Lemma [7.7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#lem:YMvar), the coefficient of $\delta_{\hat\xi} A_\mu$ is $\sqrt{-g}$ times $\mathcal{G}^{\mu}$, and the coefficient of $\delta_{\hat\xi}\Phi$ is $\sqrt{-g}$ times $\mathcal{E}_\Phi$, in the notation [(87)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:euler-ops). The coefficient of $\delta_\xi g^{\mu\nu}$ is, by [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and [(85)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:Ttot), equal to $-\tfrac12\sqrt{-g}\,T^{\mathrm{tot}}_{\mu\nu}$. Hence [(89)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-expand) reads $$
0=
-\frac12\int_M T^{\mathrm{tot}}_{\mu\nu}\,\delta_\xi g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g
+\int_M\Bigl[
\bigl\langle \mathcal{G}^{\mu},\,\delta_{\hat\xi}A_\mu\bigr\rangle
+\bigl\langle\!\bigl\langle \mathcal{E}_\Phi,\,\delta_{\hat\xi}\Phi\bigr\rangle\!\bigr\rangle
\Bigr]\,\mathrm{d}\!\operatorname{vol}_g.\tag{90}$$ Equation [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) is the integrated variational identity referred to in the statement. It holds for every compactly supported $\xi$ generating a family of allowed arrows, and we now impose the gauge and matter equations on it.

Accordingly, let the configuration satisfy $\mathcal{G}^{\mu}=0$ and $\mathcal{E}_\Phi=0$. The second integral in [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) then vanishes term by term, whatever the variations $\delta_{\hat\xi}A_\mu$ and $\delta_{\hat\xi}\Phi$ happen to be. This is also the step announced in Convention [8.1](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#conv:lie): whatever lift $\hat\xi$ of $\xi$ was chosen, and hence whatever vertical terms $D_\mu\varepsilon$ and $-\rho_*(\varepsilon)\Phi$ appear in [(84)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-local), they enter only through $\delta_{\hat\xi}A_\mu$ and $\delta_{\hat\xi}\Phi$, which are here contracted with the vanishing $\mathcal{G}^{\mu}$ and $\mathcal{E}_\Phi$; the conclusion is therefore independent of the choice of lift. Hence [(90)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:ward-three-terms) reduces to $$0=-\frac12\int_M T^{\mathrm{tot}}_{\mu\nu}\,\delta_\xi g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g.$$ Insert $\delta_\xi g^{\mu\nu}=\nabla^{\mu}\xi^{\nu}+\nabla^{\nu}\xi^{\mu}$ from [(83)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:delta-xi-metric), whose sign is fixed by [(82)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:lie-inverse), and use the symmetry of $T^{\mathrm{tot}}_{\mu\nu}$: $$0=-\int_M T^{\mathrm{tot}}_{\mu\nu}\,\nabla^{\mu}\xi^{\nu}\,\mathrm{d}\!\operatorname{vol}_g
=\int_M \bigl(\nabla^{\mu}T^{\mathrm{tot}}_{\mu\nu}\bigr)\,\xi^{\nu}\,\mathrm{d}\!\operatorname{vol}_g,$$ the last step by covariant integration by parts, whose boundary term vanishes by [(C3)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C3). By [(C5)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#C5), every smooth compactly supported vector field $\xi$ in the interior of $M$ arises as the base generator of an allowed flow, so the identity above holds for all such $\xi$; since $\xi$ is thereby arbitrary among compactly supported interior fields, the fundamental lemma of the calculus of variations gives [(88)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-b).

This argument nowhere uses the Einstein equation: [(88)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:cons-b) follows from diffeomorphism invariance \[[9](/source-readout/geometric-realization-of-completed-source-relations/references#bib-Noether1918)\] together with the gauge and matter equations alone. ◻

</div>

## The gauge Ward identity

<div class="proposition">

**Proposition 8.5** (Gauge-current identity).

<div id="prop:gauge-current">

</div>

*Assume $S_{\mathrm{m}}+S_{\mathrm{rel}}$ is invariant under the vertical (gauge) subgroup $\operatorname{Gau}(P)$; that any relation coordinate in regime (b) is gauge invariant (as it is, by construction); and that Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) holds. Then on solutions of the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter), $$
D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr)=0 .\tag{91}$$*

</div>

<div class="proof">

*Proof.* Let $\epsilon\in\Gamma(\mathrm{ad}P)$ be a compactly supported infinitesimal gauge parameter, acting by $$
\delta_\epsilon A_\mu=D_\mu\epsilon,
\qquad
\delta_\epsilon\Phi=-\rho_*(\epsilon)\,\Phi ,\tag{92}$$ where $\rho_*\colon\mathfrak{g}\to\mathfrak{gl}(W)$ is the induced Lie-algebra representation and $\delta_\epsilon\Phi$ is valued in $W$ (no inner product on $W$ is used). Gauge invariance gives $\delta_\epsilon(S_{\mathrm{m}}+S_{\mathrm{rel}})=0$ identically: $$0=\int_M\left(
\Bigl\langle\frac{\delta (S_{\mathrm{m}}+S_{\mathrm{rel}})}{\delta A_\mu},\;D_\mu\epsilon\Bigr\rangle
+\Bigl\langle\!\Bigl\langle
\frac{\delta (S_{\mathrm{m}}+S_{\mathrm{rel}})}{\delta \Phi},\;-\rho_*(\epsilon)\Phi
\Bigr\rangle\!\Bigr\rangle
\right)\mathrm{d}^4x ,$$ the second pairing being the duality pairing of Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i) between the dual-valued Euler operator and the $W$-valued variation. On the matter equation [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter) the second term vanishes. Using [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), the first term is $$0=-\int_M\bigl\langle J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}},\;D_\mu\epsilon\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Covariant integration by parts, valid because $\langle\cdot,\cdot\rangle$ is $\operatorname{Ad}$-invariant, hence $D$-compatible, and because the boundary term vanishes by Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), gives $$0=\int_M\bigl\langle D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr),\;
\epsilon\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Since $\epsilon$ is arbitrary and $\langle\cdot,\cdot\rangle$ is nondegenerate, [(91)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:current-cons) follows. ◻

</div>

<div class="remark">

*Remark 55* (Consistency of the gauge equation with the current identity).

<div id="rem:consistency-check">

</div>

Identity [(91)](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#eq:current-cons) is consistent with, and indeed implied on shell by, the gauge equation [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym). Applying $D_\nu$ to [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) requires evaluating $D_\nu D_\mu F^{\mu\nu}$. Decomposing the second covariant derivative into its symmetric and antisymmetric parts in $(\mu,\nu)$ and contracting with the antisymmetric $F^{\mu\nu}$, only the antisymmetric part survives: $$D_\nu D_\mu F^{\mu\nu}
=\tfrac12\,[D_\nu,D_\mu]\,F^{\mu\nu}
=\tfrac12\,\bigl[F_{\nu\mu},\,F^{\mu\nu}\bigr] ,$$ by the Ricci identity for the gauge-covariant derivative on a section of $\mathrm{ad}P$, namely $[D_\nu,D_\mu]X=[F_{\nu\mu},X]$. (The Levi-Civita curvature terms cancel between the two spacetime indices of the antisymmetric $F^{\mu\nu}$, by the first Bianchi identity for $R$.) The remaining bracket vanishes: writing $F_{\nu\mu}=-F_{\mu\nu}$ gives $[F_{\nu\mu},F^{\mu\nu}]=-[F_{\mu\nu},F^{\mu\nu}]$, and $[X,X]=0$ for the $\mathfrak{g}$-valued quantity $X=F_{\mu\nu}$ contracted with its own index-raised counterpart. Hence $D_\nu D_\mu F^{\mu\nu}=0$, and [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym) therefore forces $D_\mu\bigl(J^{\mu}_{\mathrm{m}}+J^{\mu}_{\mathrm{rel}}\bigr)=0$ after relabelling the free index, in agreement with Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current). The two derivations are independent: the proposition uses only gauge invariance and the matter equation, whereas this computation uses the gauge equation.

</div>

<div class="remark">

*Remark 56* (Ward identities as a constraint on realizations).

<div id="rem:noether-constraint">

</div>

Theorem [8.4](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#thm:cons) and Proposition [8.5](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#prop:gauge-current) function as selection rules. Every effective representation of a completed source relation must satisfy them, because they follow from nothing more than the invariance requirement [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) that made $S_{\mathrm{rel}}$ a functional of the physical orbit in the first place. Consequently, a proposed correction to the Tier-1 field equations that violates the relevant Ward identity is *not* a geometric realization of an invariant completion. This is a sharp, checkable necessary condition on any candidate coupling of completed relations to Tier-1 dynamics.

</div>
