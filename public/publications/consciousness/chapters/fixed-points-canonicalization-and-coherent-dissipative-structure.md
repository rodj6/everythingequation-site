# Chapter 13: Fixed points, canonicalization, and coherent–dissipative structure

<!-- Fixed Version 2 source. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="ch:cscf"></a> A realized vessel can maintain some distinctions while other modes relax or change. The CSCF construction places coherent and dissipative responses on one spectral carrier, giving a precise mathematical setting for studying such coexistence. We first establish a local convergence result, then distinguish its meaning from the shared-carrier field construction and from the additional experiential constitution.



<a id="section-13-1"></a>

## 13.1 A local contraction theorem

<a id="section:cscf:a-local-contraction-theorem"></a> Let $C$ be a nonempty closed convex subset of a real Hilbert space and $J$ differentiable on the relevant domain. Assume its gradient is $L$-Lipschitz and strongly monotone with constant $m>0$: 

$$

{\langle \nabla J(x)-\nabla J(y),x-y\rangle}\ge m{\lVert x-y\rVert}^2.

$$

 For $0<\eta<2m/L^2$ define $T(x)=P_C(x-\eta\nabla J(x))$. Projection is nonexpansive, and therefore 

$$

{\lVert Tx-Ty\rVert}^2\le
(1-2\eta m+\eta^2L^2){\lVert x-y\rVert}^2.

$$

 Let $q=\sqrt{1-2\eta m+\eta^2L^2}\in[0,1)$. Banach's theorem supplies a unique fixed point and geometric convergence. The projection variational inequality identifies that point with the constrained minimizer of $J$ under the stated convexity assumptions <a id="citation-21"></a>[[33](/consciousness/monograph/bibliography#bib-RodgersField)].

The residual gives a practical certificate: <a id="eq:fixedres"></a>


$$

{\lVert x-x_*\rVert}\le\frac{{\lVert x-Tx\rVert}}{1-q}.

$$

Equation (13.1).

 Indeed ${\lVert x-Tx\rVert}\ge{\lVert x-x_*\rVert}-{\lVert Tx-Tx_*\rVert}\ge(1-q){\lVert x-x_*\rVert}$. Finite arrival is possible, for example when $J(x)=x^2/2$ and $\eta=1$. Contraction does not imply that a trajectory remains forever outside its fixed point.

The theorem describes the chosen functional and map. For any chosen destination $x_0$, the functional $J_{x_0}(x)={\lVert x-x_0\rVert}^2/2$ supplies a contraction toward it. A fixed point can encode an inaccurate belief or an undesirable configuration. Equating convergence with truth, clarity, or enlightenment requires an independently calibrated relation to those targets. The mathematical word “canonical” cannot supply that relation.



<a id="section-13-2"></a>

## 13.2 Observable certification

<a id="section:cscf:observable-certification"></a> Suppose a readout $\Psi$ is Lipschitz, with lower constant $m_\Psi>0$ on the nominated regime. If $z_k=\Psi(x_k)$ and $x_{k+1}=T(x_k)$, then 

$$

{\lVert x_k-x_*\rVert}\le
\frac{{\lVert z_{k+1}-z_k\rVert}}{m_\Psi(1-q)}.

$$

 If each observed $z_k$ has error at most $\delta$, replace the numerator by the observed step size plus $2\delta$. The estimate requires all relevant states to remain within the regime on which the lower bound is valid.

A five-channel readout is not automatically sufficient for an arbitrarily high-dimensional source. Let $P_E$ project onto the measured subspace. If the relevant differences obey the cone condition 

$$

{\lVert (I-P_E)(x-y)\rVert}\le\kappa{\lVert P_E(x-y)\rVert},

$$

 then ${\lVert P_E(x-y)\rVert}\ge{\lVert x-y\rVert}/\sqrt{1+\kappa^2}$. This supplies a legitimate lower constant. Without the cone or an equivalent restriction, stabilization of a few coordinates can coexist with change in unobserved directions. The semantic names of channels do not change this geometry.

For global selectors a clean result is available on a supplied compact metric domain. Successively minimize a countable separating family of continuous functions on nested nonempty compact sets. Compactness gives a nonempty intersection, and separation makes it a singleton. This proves uniqueness relative to the domain and function family. It does not establish compactness of a geometric model from insufficient regularity bounds, or identify its selected point with source awareness.



<a id="section-13-3"></a>

## 13.3 One operator, two analytic regimes

<a id="section:cscf:one-operator-two-analytic-regimes"></a> The strengthened Canonical Spectral Curvature Field construction starts with a specified densely defined nonnegative closed quadratic form and its self-adjoint representing operator $K$ <a id="citation-22"></a>[[32](/consciousness/monograph/bibliography#bib-RodgersCSCF)]. The analytic family <a id="eq:cscf"></a>


$$

F_K(z)=e^{-zK},\qquad \operatorname{Re}z\ge0,

$$

Equation (13.2).

 has a contractive real ray $e^{-tK}$ and a unitary imaginary boundary $e^{-itK}$. Both use the same spectral measure. For $u\in{\mathcal H}$, 

$$

{\langle u,F_K(z)u\rangle}=\int_{[0,\infty)}e^{-z\lambda}{\,\mathrm d}\mu_u(\lambda).

$$

 On the open half-plane the family is bounded and holomorphic in operator norm, with the usual spectral derivative bounds. At the boundary it is strongly continuous; norm continuity there is not automatic for unbounded $K$.

This is a precise coherent–dissipative correspondence on a declared carrier. It does not identify the operator with a brain's logical reasoning, an unconscious mind, or a language model's latent search. Quantum coherence, logical consistency, stable memory, and explicit verbal reasoning are different properties. Dissipation can erase distinctions or stabilize selected ones, depending on the physical model.

Nor is $\rho\mapsto e^{-tK}\rho e^{-tK}$ generally trace preserving. Treating it as a physical channel requires an instrument, loss branch, or another justified construction. Normalizing it produces a nonlinear map. The physical interpretation of a form and its heat kernel therefore requires the same interaction discipline as any other source operator.



<a id="section-13-4"></a>

## 13.4 A shared spectral carrier with a general coherent symbol

<a id="section:cscf:a-shared-spectral-carrier-with-a-general-coherent-symbol"></a> The more general Atlas formulation specifies a real spectral symbol $h$ and a damping coefficient $\gamma\ge0$ in addition to $K$ <a id="citation-23"></a>[[40](/consciousness/monograph/bibliography#bib-RodgersAtlas2026)]. This preserves a single spectral carrier while allowing oscillation and decay to have different dependence on its spectral parameter.



**Proposition 13.1 (Coherent and dissipative responses of one spectral datum).**

<a id="prop:cscf-general"></a> Let $K\ge0$ be self-adjoint, and let $h:[0,\infty)\to\mathbb R$ be Borel and finite $E_K$-almost everywhere. Then 

$$

 S_t=e^{-\gamma tK},\qquad U_t=e^{-it h(K)},\qquad
 W_t=S_tU_t=\int e^{-\gamma t\lambda-it h(\lambda)}\,\mathrm dE_K(\lambda)

$$

 define a strongly continuous contraction semigroup $S$, a strongly continuous unitary group $U$, and a strongly continuous contraction semigroup $W$. The responses commute. For $\jmath\in L^1([0,T];{\mathcal H})$ the unique mild driven solution is 

$$

 \psi(t)=W_t\psi(0)+\int_0^tW_{t-s}\jmath(s)\,\mathrm ds.

$$

 Whenever this solution is strong and lies in $D(K)\cap D(h(K))$, 

$$

 \dot\psi=-(\gamma K+i h(K))\psi+\jmath,
 \qquad
 \frac{\mathrm d}{\mathrm dt}\|\psi\|^2
 =-2\gamma\langle\psi,K\psi\rangle
   +2\operatorname{Re}\langle\psi,\jmath\rangle.

$$

 

 

**Proof.**

The functional calculus gives the operator products, semigroup laws, and norm bounds because all spectral multipliers share $E_K$. Dominated convergence gives strong continuity. The variation-of-constants formula gives the mild solution. On the indicated strong-solution domain, differentiation and self-adjointness make the $h(K)$ contribution purely imaginary in the norm derivative. 

□



For $h(\lambda)=\lambda$, $W_t=F_K(\gamma t+it)$, so the earlier analytic family is recovered. For general $h$, both responses remain functions of the same carrier, but $U_t$ is not the imaginary boundary of $F_K$ unless the symbols agree. The symbol, damping, units, and physical realization must be supplied by the nominated source/aperture construction. Shared spectral organization alone does not uniquely select them.

There is a concrete instrument interpretation for a fixed interval whenever the required coupling is admitted. Put 

$$

 M_0=W_t,\qquad
 M_1=(I-S_t^2)^{1/2}U_t.

$$

 Then $M_0^\dagger M_0+M_1^\dagger M_1=I$. Retaining an outcome flag gives a trace-preserving two-outcome instrument, with the contraction as the unnormalized $0$ branch. This supplies the missing branch rather than renormalizing loss away. It is a mathematical implementation available to a specified coupling, not a claim that every physical vessel exposes that instrument. No assertion of a semigroup for the outcome-discarded channel is needed.



<a id="section-13-5"></a>

## 13.5 What a common generator does not determine

<a id="section:cscf:what-a-common-generator-does-not-determine"></a> A positive generator constrains both rays of [Equation 13.2](/consciousness/monograph/fixed-points-canonicalization-and-coherent-dissipative-structure#eq:cscf), but a noisy finite observation of one ray need not stably recover the whole operator. High-frequency spectral changes can be heavily suppressed in a heat readout. Exact formal reconstruction and stable empirical inversion are different tasks. The source Hilbertization, admitted probes, and physical calibration remain part of the model.

The analogy with explicit and implicit cognition can motivate architectures in which candidate generation remains coupled to independent checking. Its computational content and its limits are developed in [Chapter 22](/consciousness/monograph/artificial-systems-embodiment-and-recursive-cognition#ch:ai). A cognitive interpretation requires an identified carrier and calibrated observables; the spectral construction alone does not identify logical order with quantum coherence or contemplative openness with dissipation.



<a id="section-13-6"></a>

## 13.6 The correct role of vessel mathematics

<a id="section:cscf:the-correct-role-of-vessel-mathematics"></a> The preceding chapters provide a connected family of results: source sufficiency, physical retention, operational capacity, regulation, internal witness representation, recurrent spectral response, and observable stability. Their common role is to characterize what a realized system can distinguish, retain, use, and represent. They are relevant to a consciousness theory because any proposed vessel must have some physical constitution. They are not, collectively or individually, a derivation of phenomenal presence.

The next part states exactly how SPC-2 moves beyond this physical core. The additional step is not hidden inside an algebra or a contraction. It is a set of constitutive laws linking a nominated recurrent organization to a localized perspective and its relational contents. This is where the account becomes a psychophysical theory rather than a theory of records with a philosophical metaphor attached.
