# Variational realization of completed relations

<div id="sec:variational">

</div>

We now embed the completed relation data into dynamics. The claim to be established is narrow and precise: an invariant relation-dependent action yields, by functional variation, correctly normalized stress-energy, gauge-current, and matter responses, and nothing is postulated by naming it.

## Variational setting

<div class="assumption">

**Assumption 7.1** (Well-posed variational problem).

<div id="ass:variational">

</div>

The global configuration satisfies the descent conditions of Theorem [3.4](/source-readout/geometric-realization-of-completed-source-relations/local-data-and-global-descent#thm:descent) and lies in $\mathcal{C}_{\mathrm{geo}}$. Furthermore, *one* of the following holds, and which one is part of the declaration of the model:

1.  <div id="V1">

    </div>

    all variations $\delta g$, $\delta A$, $\delta\Phi$ have compact support in the interior of $M$; or

2.  <div id="V2">

    </div>

    boundary values of the fields, and for gravity the induced metric on $\partial M$, are held fixed, so that boundary contributions vanish identically; or

3.  <div id="V3">

    </div>

    the gravitational and gauge actions are supplemented by the boundary terms required for a well-posed variational problem. For gravity this is the Gibbons–Hawking–York term $$\frac{1}{8\pi G_N}\oint_{\partial M} K\,\sqrt{|h|}\;\mathrm{d}^3y$$ \[[15](/source-readout/geometric-realization-of-completed-source-relations/references#bib-York1972), [5](/source-readout/geometric-realization-of-completed-source-relations/references#bib-GibbonsHawking1977)\], with the appropriate subtraction or counterterms in the asymptotic case; for the gauge sector, whatever boundary term the declared $\mathcal{B}$ requires.

All functional derivatives below are asserted to exist on the declared domain; where $S_{\mathrm{rel}}$ is nonlocal, this existence is a hypothesis on the model, not a theorem.

</div>

<div class="definition">

**Definition 7.2** (Relation-dependent total action).

<div id="def:action">

</div>

Let $r=(r_\alpha)_{\alpha\in A}$ denote the completed invariant relation coordinates, i.e. the components of $e_A^{\mathrm{geo}}$. Consider $$
S_{\mathrm{tot}}[g,A,\Phi;r]
=
S_{\mathrm{EH}}[g]
+S_{\mathrm{YM}}[g,A]
+S_{\mathrm{m}}[g,A,\Phi]
+S_{\mathrm{rel}}[g,A,\Phi;r],\tag{63}$$ with $$\begin{aligned}
\qquad\text{(64)}
S_{\mathrm{EH}}[g]
&=\frac{1}{16\pi G_N}\int_M \bigl(R-2\Lambda\bigr)\,\mathrm{d}\!\operatorname{vol}_g
\;\;(+\text{ boundary term under \href{#V3}{(V3)}}),
\\[0.3em]
\qquad\text{(65)}
S_{\mathrm{YM}}[g,A]
&=-\frac{1}{4g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F_{\mu\nu},F^{\mu\nu}\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,
\end{aligned}$$ and $S_{\mathrm{m}}$ a matter action for $\Phi$ \[[14](/source-readout/geometric-realization-of-completed-source-relations/references#bib-YangMills1954)\]. The functional $S_{\mathrm{rel}}$ carries the model-specific dependence on $r$. It may be local, boundary-supported, or nonlocal, provided that

1.  <div id="R1">

    </div>

    it depends on the relation coordinates through a finite or countable dynamical subfamily $A_{\mathrm{dyn}}\subseteq A$, and its Fréchet derivatives with respect to $g^{\mu\nu}$, $A_\mu$, and the independent matter components exist on the stated domain and are represented by distributional kernels, as set out in Section [7.2](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:chain-rule); and

2.  <div id="R2">

    </div>

    it is invariant under the allowed bundle automorphisms and allowed diffeomorphisms, that is, $S_{\mathrm{rel}}$ is constant on the arrows of $\mathfrak{G}_{\mathrm{geo}}$, exactly as the $J_\alpha$ are (Definition [4.1](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#def:invariant-relation)).

</div>

Condition [(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2) is what makes $S_{\mathrm{rel}}$ a functional of the *physical orbit*, and it is what supplies the Ward identities of Section [8](/source-readout/geometric-realization-of-completed-source-relations/ward-noether-identities-and-covariant-consistency#sec:noether). An $S_{\mathrm{rel}}$ that fails to be $\mathfrak{G}_{\mathrm{geo}}$-invariant does not define a geometric realization of a completed relation.

## The functional chain rule for relation functionals

<div id="sec:chain-rule">

</div>

<div class="convention">

**Convention 7.3** (Two regimes for $r$, and the correct chain rule).

<div id="conv:two-regimes">

</div>

By Convention [2.11](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:relation-status), exactly one of the following applies to each component $r_\alpha$, and the model declares which.

**(a) $r_\alpha$ is a functional of the fields.** Paper 3 permits an arbitrary index *set* $A$, and nothing in Sections [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)–[6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1) requires more. A differentiable action, however, needs additional analytic structure, and we impose it only where it is used. We therefore require that $S_{\mathrm{rel}}$ depend on the relation coordinates through a distinguished *dynamical subfamily* $$
A_{\mathrm{dyn}}\subseteq A,
\qquad
A_{\mathrm{dyn}} \text{ finite or countable},\tag{66}$$ so that $S_{\mathrm{rel}}=S_{\mathrm{rel}}[g,A,\Phi;(r_\alpha)_{\alpha\in A_{\mathrm{dyn}}}]$ and $\partial S_{\mathrm{rel}}/\partial r_\alpha=0$ for $\alpha\notin A_{\mathrm{dyn}}$. When $A_{\mathrm{dyn}}$ is countably infinite we require in addition that the derivative series in [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) below converge *unconditionally* in the distributional-dual topology of the relevant space of kernels; when $A_{\mathrm{dyn}}$ is finite this is vacuous. The remaining relation coordinates, indexed by $A\setminus A_{\mathrm{dyn}}$, continue to serve as completion coordinates in the sense of Sections [5](/source-readout/geometric-realization-of-completed-source-relations/geometric-realization-of-the-minimal-completion#sec:realization)–[6](/source-readout/geometric-realization-of-completed-source-relations/classification-of-flat-u-1-connections-on-an-oriented-circle#sec:u1); they simply do not enter the action.

Now suppose $r_\alpha=r_\alpha[g,A,\Phi]$, $\alpha\in A_{\mathrm{dyn}}$, takes values in a Banach (or finite-dimensional) space $V_\alpha$ and is Fréchet differentiable on the declared domain. Then $r_\alpha$ is in general *nonlocal*: a Wilson observable integrates around a loop, an integral invariant integrates over $M$, a spectral quantity depends on the fields through a global eigenvalue problem. Its variation is accordingly given not by a pointwise partial derivative but by the pairing of distributional kernels with the variations: $$
\delta r_\alpha
=\int_M\!\Bigl[
\frac{\delta r_\alpha}{\delta g^{\mu\nu}(y)}\,\delta g^{\mu\nu}(y)
+\Bigl\langle \frac{\delta r_\alpha}{\delta A_\mu(y)},\,\delta A_\mu(y)\Bigr\rangle
+\Bigl\langle\!\Bigl\langle \frac{\delta r_\alpha}{\delta \Phi(y)},\,\delta\Phi(y)
\Bigr\rangle\!\Bigr\rangle
\Bigr]\sqrt{-g(y)}\;\mathrm{d}^4y ,\tag{67}$$ where $\delta r_\alpha/\delta g^{\mu\nu}(y)$ etc. denote the $V_\alpha$-valued distributional kernels representing the derivative, $\langle\cdot,\cdot\rangle$ is the $\operatorname{Ad}$-invariant pairing on $\mathfrak{g}$, and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ is the duality pairing between $W^{*}$ and $W$ discussed in Section [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#sec:matter-pairing). (For a Wilson loop $r_\alpha$ the kernel $\delta r_\alpha/\delta A_\mu(y)$ is supported on the loop and is a distribution, not a function; [(67)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:drho) is exactly the statement that must be used, and a pointwise $\partial r_\alpha/\partial A_\mu(y)$ does not exist.)

Then, writing $\partial S_{\mathrm{rel}}/\partial r_\alpha\in V_\alpha^{*}$ for the derivative of $S_{\mathrm{rel}}$ with respect to its $V_\alpha$-argument (a bounded linear functional, and an ordinary partial derivative only when $V_\alpha$ is finite-dimensional), the chain rule reads $$
\frac{\delta S_{\mathrm{rel}}}{\delta g^{\mu\nu}(y)}
=\left.\frac{\delta S_{\mathrm{rel}}}{\delta g^{\mu\nu}(y)}\right|_{r\;\mathrm{fixed}}
+\sum_{\alpha\in A_{\mathrm{dyn}}}
\Bigl\langle \frac{\partial S_{\mathrm{rel}}}{\partial r_\alpha},\;
\frac{\delta r_\alpha}{\delta g^{\mu\nu}(y)}\Bigr\rangle_{V_\alpha^*\!,V_\alpha} ,\tag{68}$$ and identically with $g^{\mu\nu}(y)$ replaced by $A_\mu(y)$ or by the matter components. The sum is over the dynamical subfamily [(66)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Adyn), and converges by the unconditional-convergence hypothesis imposed there. Only in the special case where $V_\alpha=\mathbb{R}$ and $r_\alpha$ is a *local* scalar field does [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) reduce to an ordinary pointwise partial derivative; in general it does not.

**(b) $r_\alpha$ labels a fixed topological or boundary sector.** Then $\delta r_\alpha=0$ under all variations within the sector, this is what “fixed sector” means, and $r_\alpha$ enters the field equations only as a parameter. The second term of [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) is absent.

In neither case is $r_\alpha$ varied as an independent dynamical field. A model wishing to promote $r_\alpha$ to a field must adjoin it to the configuration tuple, enlarge $\mathcal{C}_{\mathrm{geo}}$, and supply its own kinetic term; that is a different model, and its Euler–Lagrange equation is an additional equation not derived here.

</div>

## Matter pairings and independent components

<div id="sec:matter-pairing">

</div>

<div class="convention">

**Convention 7.4** (Matter variation and the dual pairing).

<div id="conv:matter">

</div>

The representation $\rho\colon G\to\mathrm{GL}(W)$ is not assumed unitary (Convention [2.1](/source-readout/geometric-realization-of-completed-source-relations/the-geometric-source-domain#conv:basic)), and $W$ may be complex. Accordingly the matter Euler operator is valued in the dual, and the variational pairing must be specified. We adopt the following, and use it consistently.

*(i) Real independent components.* Suppose $\Phi$ denotes a collection of *real* independent field components. This is always achievable: decompose a complex field into its real and imaginary parts, or a section of a complex bundle into its underlying real bundle. Then $\delta S/\delta\Phi$ is valued in the real dual bundle $P\times_{\rho^{*}}W^{*}$, and the pairing $$\langle\!\langle\cdot,\cdot\rangle\!\rangle\colon W^{*}\times W\longrightarrow\mathbb{R}$$ is the canonical duality pairing. This pairing is $G$-invariant for the contragredient action $\rho^{*}(h)=\rho(h^{-1})^{\mathsf{T}}$, and requires no metric on $W$. There is then a single Euler equation $\mathcal{E}_\Phi=0$.

*(ii) Complex fields treated holomorphically.* If instead $\Phi$ is treated as a complex field with $\Phi$ and $\bar\Phi$ varied independently, the usual convention for a charged scalar or a Dirac spinor, then there are *two* Euler equations, $$
\mathcal{E}_{\Phi}:=\frac{1}{\sqrt{-g}}\frac{\delta S}{\delta \bar\Phi}=0
\qquad\text{and}\qquad
\overline{\mathcal{E}_{\Phi}}:=\frac{1}{\sqrt{-g}}\frac{\delta S}{\delta \Phi}=0 ,\tag{69}$$ which are conjugate to one another when the action is real, and the pairing used in the variation is the sesquilinear one furnished by a $\rho$-invariant Hermitian form on $W$, which exists precisely when $\rho$ is unitary. If $\rho$ is not unitary, no such Hermitian form is available and one must revert to convention (i).

For definiteness, and to avoid carrying two conjugate equations through every formula, *in the statements below $\Phi$ denotes real independent field components in the sense of (i)*, and $\mathcal{E}_\Phi$ is the corresponding single dual-valued Euler operator. Every result restates verbatim in convention (ii) upon replacing $\mathcal{E}_{\Phi}=0$ by the conjugate pair [(69)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:conj-euler) and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ by the invariant Hermitian pairing.

</div>

## Response tensors, currents, and Euler operators

<div class="definition">

**Definition 7.5** (Responses).

<div id="def:responses">

</div>

For each nongravitational sector $X\in\{\mathrm{YM},\mathrm{m},\mathrm{rel}\}$ define the stress-energy tensor $$
T^{X}_{\mu\nu}
\;:=\;
-\frac{2}{\sqrt{-g}}\,\frac{\delta S_X}{\delta g^{\mu\nu}} ,\tag{70}$$ the gauge current $$
J^{\mu}_{\mathrm{m}}
\;:=\;
-\frac{1}{\sqrt{-g}}\,\frac{\delta S_{\mathrm{m}}}{\delta A_\mu},
\qquad
J^{\mu}_{\mathrm{rel}}
\;:=\;
-\frac{1}{\sqrt{-g}}\,\frac{\delta S_{\mathrm{rel}}}{\delta A_\mu},\tag{71}$$ each valued in $\mathfrak{g}$ (with $\mathfrak{g}$-indices contracted using $\langle\cdot,\cdot\rangle$), and the matter Euler operators $$
\mathcal{E}^{X}_{\Phi}
\;:=\;
\frac{1}{\sqrt{-g}}\,\frac{\delta S_X}{\delta\Phi} ,\tag{72}$$ valued in the dual bundle and paired with $\delta\Phi$ by $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ as in Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i). For $X=\mathrm{rel}$ the functional derivatives in [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef)–[(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) are those computed by the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule), and thus already include the relation-mediated contributions.

</div>

<div class="lemma">

**Lemma 7.6** (Yang–Mills stress tensor).

<div id="lem:TYM">

</div>

*With the normalization [(65)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SYM), $$
T^{\mathrm{YM}}_{\mu\nu}
=\frac{1}{g_{\mathrm{YM}}^{2}}
\left(
\bigl\langle F_{\mu\rho},F_{\nu}{}^{\rho}\bigr\rangle
-\tfrac14\,g_{\mu\nu}\,\bigl\langle F_{\rho\sigma},F^{\rho\sigma}\bigr\rangle
\right),\tag{73}$$ which is symmetric, gauge invariant, and (in four dimensions) trace free.*

</div>

<div class="proof">

*Proof.* Write $S_{\mathrm{YM}}=-\tfrac{1}{4g_{\mathrm{YM}}^2}\int_M
\langle F_{\mu\rho},F_{\nu\sigma}\rangle g^{\mu\nu}g^{\rho\sigma}\sqrt{-g}\,\mathrm{d}^4x$; the components $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$ are independent of $g$. Using $\delta\sqrt{-g}=-\tfrac12\sqrt{-g}\,g_{\mu\nu}\,\delta g^{\mu\nu}$ and varying the two inverse metrics, $$\delta S_{\mathrm{YM}}
=-\frac{1}{4g_{\mathrm{YM}}^2}\int_M
\Bigl(
2\langle F_{\mu\rho},F_{\nu}{}^{\rho}\rangle
-\tfrac12 g_{\mu\nu}\langle F_{\rho\sigma},F^{\rho\sigma}\rangle
\Bigr)\delta g^{\mu\nu}\sqrt{-g}\,\mathrm{d}^4x ,$$ and [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) gives [(73)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:TYM). Gauge invariance follows from $\operatorname{Ad}$-invariance of $\langle\cdot,\cdot\rangle$ and [(23)](/source-readout/geometric-realization-of-completed-source-relations/curvature-holonomy-and-invariant-global-relations#eq:gauge-transf); tracelessness from $g^{\mu\nu}\langle F_{\mu\rho},F_\nu{}^\rho\rangle=\langle F_{\rho\sigma},F^{\rho\sigma}\rangle$ and $g^{\mu\nu}g_{\mu\nu}=4$. ◻

</div>

<div class="lemma">

**Lemma 7.7** (Yang–Mills variation with respect to the connection).

<div id="lem:YMvar">

</div>

*Under Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), $$
\delta S_{\mathrm{YM}}
=-\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g
=\;\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle D_\mu F^{\mu\nu},\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,\tag{74}$$ up to the treated boundary term.*

</div>

<div class="proof">

*Proof.* From $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu]$ one has $$
\delta F_{\mu\nu}=D_\mu\,\delta A_\nu - D_\nu\,\delta A_\mu .\tag{75}$$ Hence, from [(65)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SYM), $$\delta S_{\mathrm{YM}}
=-\frac{1}{4g_{\mathrm{YM}}^{2}}\int_M
2\,\bigl\langle F^{\mu\nu},\,\delta F_{\mu\nu}\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g
=-\frac{1}{2g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\delta A_\nu - D_\nu\delta A_\mu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ The two terms in the bracket are *equal* after relabelling, by the antisymmetry of $F^{\mu\nu}$: swapping the dummy indices $\mu\leftrightarrow\nu$ in the second term gives $-\langle F^{\nu\mu},D_\mu\delta A_\nu\rangle=+\langle F^{\mu\nu},D_\mu\delta A_\nu\rangle$. Therefore the bracket contributes twice the first term, the factor $\tfrac12$ cancels, and $$\delta S_{\mathrm{YM}}
=-\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle F^{\mu\nu},\,D_\mu\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,$$ which is the first equality in [(74)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:dSYM). Covariant integration by parts, legitimate because $\langle\cdot,\cdot\rangle$ is $\operatorname{Ad}$-invariant, hence $D$-compatible, and because the boundary term vanishes by Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational), moves $D_\mu$ onto $F^{\mu\nu}$ and flips the sign, giving the second equality. ◻

</div>

## The coupled field equations

<div class="theorem">

**Theorem 7.8** (Coupled field equations).

<div id="thm:field-eqs">

</div>

*Under Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) and Conventions [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) and [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(i), stationarity of $S_{\mathrm{tot}}$ under independent variations of $g^{\mu\nu}$, $A_\mu$, and $\Phi$ is equivalent to the system $$\begin{aligned}
\qquad\text{(76)}
G_{\mu\nu}+\Lambda g_{\mu\nu}
&=8\pi G_N\Bigl(
T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}
\Bigr),
\\[0.35em]
\qquad\text{(77)}
\frac{1}{g_{\mathrm{YM}}^{2}}\,D_\mu F^{\mu\nu}
&=J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}},
\\[0.35em]
\qquad\text{(78)}
\mathcal{E}^{\mathrm{m}}_{\Phi}+\mathcal{E}^{\mathrm{rel}}_{\Phi}
&=0,
\end{aligned}$$ with representation indices and the pairings $\langle\cdot,\cdot\rangle$ and $\langle\!\langle\cdot,\cdot\rangle\!\rangle$ restored as required by $G$ and $\rho$.*

</div>

<div class="proof">

*Proof.* *Metric variation.* The standard variation of [(64)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:SEH), after the boundary treatment stipulated in Assumption [7.1](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#ass:variational) (which is exactly what disposes of the total-derivative term $\int_M g^{\mu\nu}\delta R_{\mu\nu}\sqrt{-g}$; under [(V3)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#V3) it is the Gibbons–Hawking–York term that cancels it \[[15](/source-readout/geometric-realization-of-completed-source-relations/references#bib-York1972), [5](/source-readout/geometric-realization-of-completed-source-relations/references#bib-GibbonsHawking1977)\]), gives $$
\delta S_{\mathrm{EH}}
=\frac{1}{16\pi G_N}\int_M
\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)\,\delta g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g.\tag{79}$$ By Definition [7.5](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#def:responses), $$
\delta\bigl(S_{\mathrm{YM}}+S_{\mathrm{m}}+S_{\mathrm{rel}}\bigr)\Big|_{\delta g}
=-\frac12\int_M
\bigl(
T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}
\bigr)\,\delta g^{\mu\nu}\,\mathrm{d}\!\operatorname{vol}_g,\tag{80}$$ where $\delta S_{\mathrm{rel}}$ is computed by the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule): in regime (a) of Convention [7.3](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:two-regimes) it includes the relation-mediated kernel contributions, and in regime (b) those are absent. In either case [(80)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:dSmatter) *defines* its left side via [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and adds no assumption. Setting $\delta S_{\mathrm{tot}}=0$ for arbitrary symmetric $\delta g^{\mu\nu}$ (compactly supported, or boundary-vanishing) and applying the fundamental lemma of the calculus of variations gives $$\frac{1}{16\pi G_N}\bigl(G_{\mu\nu}+\Lambda g_{\mu\nu}\bigr)
-\frac12\bigl(T^{\mathrm{YM}}_{\mu\nu}+T^{\mathrm{m}}_{\mu\nu}+T^{\mathrm{rel}}_{\mu\nu}\bigr)=0 ,$$ which is [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein) with the displayed $8\pi G_N$ normalization.

*Gauge variation.* By Lemma [7.7](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#lem:YMvar), $$\delta S_{\mathrm{YM}}\big|_{\delta A}
=\frac{1}{g_{\mathrm{YM}}^{2}}\int_M
\bigl\langle D_\mu F^{\mu\nu},\,\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g,$$ while by the definitions [(71)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Jdef), $$\delta\bigl(S_{\mathrm{m}}+S_{\mathrm{rel}}\bigr)\big|_{\delta A}
=-\int_M\bigl\langle J^{\nu}_{\mathrm{m}}+J^{\nu}_{\mathrm{rel}},\,
\delta A_\nu\bigr\rangle\,\mathrm{d}\!\operatorname{vol}_g.$$ Setting the sum of the two to zero for arbitrary $\delta A_\nu$, and using the nondegeneracy of $\langle\cdot,\cdot\rangle$, gives [(77)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:ym).

*Matter variation.* $S_{\mathrm{EH}}$ and $S_{\mathrm{YM}}$ are independent of $\Phi$, so by [(72)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Edef) $\delta_\Phi S_{\mathrm{tot}}
=\int_M \langle\!\langle\,\mathcal{E}^{\mathrm{m}}_\Phi+\mathcal{E}^{\mathrm{rel}}_\Phi,\;
\delta\Phi\,\rangle\!\rangle\,\mathrm{d}\!\operatorname{vol}_g$; arbitrariness of the real independent components $\delta\Phi$ and nondegeneracy of the duality pairing give [(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter). Under Convention [7.4](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#conv:matter)(ii) this is replaced by the conjugate pair [(69)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:conj-euler).

The three variations are independent, so stationarity of $S_{\mathrm{tot}}$ is equivalent to the simultaneous validity of [(76)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:einstein)–[(78)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:matter). ◻

</div>

<div class="remark">

*Remark 49* (What has and has not been derived).

<div id="rem:not-postulated">

</div>

The tensor $T^{\mathrm{rel}}_{\mu\nu}$ is not an independent postulate. By [(70)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:Tdef) and the chain rule [(68)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#eq:chain-rule) it is the metric functional derivative of a specified $\mathfrak{G}_{\mathrm{geo}}$-invariant action satisfying [(R1)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R1)–[(R2)](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#R2). Different source completions, and different couplings of the same completion, produce different $T^{\mathrm{rel}}_{\mu\nu}$, $J^{\mu}_{\mathrm{rel}}$, $\mathcal{E}^{\mathrm{rel}}_{\Phi}$. Theorem [7.8](/source-readout/geometric-realization-of-completed-source-relations/variational-realization-of-completed-relations#thm:field-eqs) asserts only the *structure* of the response, that a completed relation enters Tier-1 dynamics through functional variation of an invariant action, with the normalizations displayed, and asserts nothing about the magnitude, sign, or empirical existence of any such term. No new interaction is proposed, and no empirical claim is made.

</div>
