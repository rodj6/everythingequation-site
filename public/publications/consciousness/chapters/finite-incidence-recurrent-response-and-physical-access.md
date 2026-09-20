# Chapter 12: Finite incidence, recurrent response, and physical access

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

<a id="ch:o1"></a> This chapter provides a finite example of why the provenance of a physical structure matters in addition to its spectrum. The calculations retain which parts of a carrier arose from a designated source region and which were added. They illustrate the realization discipline used later in $R^\ast$: an invariant numerical summary need not retain every distinction relevant to a proposed physical or phenomenal target.



<a id="section-12-1"></a>

## 12.1 Source-sensitive response carriers

<a id="section:o1:source-sensitive-response-carriers"></a> A finite source-response construction begins with a rooted partial order, not an empirically fitted spectrum. The retained root is $0<1$, and the fresh loci are $2,3$. The order complex contains every nonempty chain, including compositional higher simplices. With a counting-normalized orthonormal simplex basis, the signed boundary operator $d$ obeys $d^2=0$. Define 

$$

D=d+d^\dagger,\qquad K=D^2=dd^\dagger+d^\dagger d.

$$

 This is finite Hodge mathematics. Its source status depends on the admitted response principles and Hilbertization, as the constructive O1 source explicitly states <a id="citation-20"></a>[[39](/consciousness/monograph/bibliography#bib-RodgersO1)].

Separate chains lying entirely in the root support from mixed-interface and fresh chains. Let $P_R$ project onto root-supported chains and $P_F=I-P_R$ onto the remainder. The decomposition is assigned by provenance before the spectral calculation. It is not chosen to produce a desired gap.

For an eigenprojection $E_\lambda$ of $K$, define $B_\lambda=P_RE_\lambda P_F$. The positive RSM-active spectrum is 

$$

\{\lambda>0:B_\lambda\ne0\}.

$$

 This differs from the ordinary spectral gap because it depends on the geometry of the retained/fresh sectors. A zero-eigenvalue cross block may exist while being excluded by the word “positive” in this definition.



**Theorem 12.1 (Finite return identity).**

<a id="thm:rsm"></a> For finite $s,t\ge0$, 

$$

P_Fe^{-sK}E_\lambda P_RE_\lambda e^{-tK}P_F
=e^{-\lambda(s+t)}B_\lambda^\dagger B_\lambda.

$$

 It is positive and nonzero exactly when $B_\lambda\ne0$. 

 

**Proof.**

Since $E_\lambda$ is the whole orthogonal eigenprojection, $e^{-tK}E_\lambda=e^{-t\lambda}E_\lambda$. Move only these commuting factors, not $P_R$, through the exponentials. The remaining product is $P_FE_\lambda P_RE_\lambda P_F=B_\lambda^\dagger B_\lambda$. A matrix $B^\dagger B$ vanishes exactly when $B=0$. 

□



Degenerate eigenspaces cause no ambiguity because an arbitrary eigenvector is not substituted for $E_\lambda$. In an infinite-dimensional model the same identity applies to a genuine finite-eigenvalue spectral atom, but singleton projectors can miss the entire continuous spectrum. The physical interpretation also requires an instrument realizing the intervening operations and a retained record. An operator product is not, by itself, a physical recursive experiment.



<a id="section-12-2"></a>

## 12.2 Five exact profiles

<a id="section:o1:five-exact-profiles"></a> The source relations and independently recomputed results are shown in [Table 12.1](/consciousness/monograph/finite-incidence-recurrent-response-and-physical-access#tab:o1). The common relation $0<1$ is implicit in each row.  

| Profile | Additional relations | $\dim{\mathcal H}$ | Spectrum of $K$ |
| --- | --- | --- | --- |
| $V2_{02}$ | $0<2,\ 0<3$ | 7 | $0^1,1^4,4^2$ |
| $V2_{34}$ | $2<1,\ 3<1$ | 7 | $0^1,1^4,4^2$ |
| $V2_{04}$ | $0<2,0<3,1<2,1<3$ | 11 | $0^1,2^4,4^6$ |
| $V2_{11}$ | $0<2,0<3,2<1,3<1$ | 11 | $0^1,2^4,4^6$ |
| $V2_{29}$ | $2<0,2<1,3<0,3<1$ | 11 | $0^1,2^4,4^6$ |

 

Table 12.1. Finite local source-response carriers. Exponents denote multiplicity, not powers.

<a id="tab:o1"></a> 

In every case $P_R$ has rank three, supported by the two root vertices and root edge. For the seven-dimensional profiles, ${\operatorname{rank}} B_0=1$, ${\operatorname{rank}} B_1=2$, and ${\operatorname{rank}} B_4=2$. For the eleven-dimensional profiles, the corresponding ranks are $1,0,1$ at eigenvalues $0,2,4$. The positive active gap is therefore one in the former pair and four in the latter three.

For exact calculation, the eigenprojectors can be obtained without choosing eigenvector bases: <a id="eq:polyproj"></a>


$$

E_\lambda=\prod_{\mu\in{\operatorname{Spec}} K,\,\mu\ne\lambda}
\frac{K-\mu I}{\lambda-\mu}.

$$

Equation (12.1).

 The verification package supplies all boundary matrices, $D,K,P_R$, projectors, and cross ranks. It checks all 24 signed vertex relabellings for each of the five profiles. A relabelling must transport the root support and simplex orientation; an unsigned permutation that changes orientation is not a valid matrix comparison.

Equal spectra do not identify source objects. Different differentials, provenance projections, and admitted interactions can share $K$ or its spectrum. Even for a fixed diagonal $K$, choosing a commuting projector gives no cross block, while a rotated projector can give one. The calculation therefore supports a source-sensitive response classification, not a universal consciousness threshold.



<a id="section-12-3"></a>

## 12.3 Interaction-relative sector invariance

<a id="section:o1:interaction-relative-sector-invariance"></a> Let $P=P_R$, $J=i[K,P]$, and in the eleven-dimensional examples set $\Pi=J^2/4$. Exact calculation gives 

$$

\Pi^2=\Pi,\quad{\operatorname{rank}}\Pi=2,\quad[K,\Pi]=[P,\Pi]=0,
\quad{\operatorname{rank}}[D,\Pi]=2.

$$

 The block $\Pi D(I-\Pi)$ has rank one and singular value two. Thus a $D$-generated actuator would mix part of the two support sectors while conserving $K$, but an action algebra generated by $K,P,J$ preserves them.

The $P$-commutation has a general explanation. Relative to $P{\mathcal H}\oplus(I-P){\mathcal H}$, write 

$$

K=\begin{pmatrix}A&B\\B^\dagger&C\end{pmatrix},\qquad
J=\begin{pmatrix}0&-iB\\iB^\dagger&0\end{pmatrix}.

$$

 Then $J^2={\operatorname{diag}}(BB^\dagger,B^\dagger B)$, so $P$ commutes with $J^2$ and its support. The additional condition needed for the full $K/P/J$ obstruction is preservation of that support by $K$. In the specified profiles it holds.

If every Kraus operator of an admitted instrument commutes with $\Pi$, an input supported in one extreme sector remains there on every nonzero conditional branch. Such a trace-preserving channel preserves ${\operatorname{tr}}\rho\Pi$ unconditionally. Conditioning a mixed-sector input can change its normalized sector weight, but cannot create support absent from an extreme input. This is an interaction-relative conservation law, not a fundamental superselection of the whole matrix algebra.



<a id="section-12-4"></a>

## 12.4 Actuation, source drift, and seed-specific mobility

<a id="section:o1:actuation-source-drift-and-seed-specific-mobility"></a> Mathematical membership of $D$ in an operator algebra does not expose a $D$ port or supply a Hamiltonian coupling. Even the conditions of self-adjointness, source covariance, and $K$ conservation leave a family $h(K)D$. Selecting the primitive $D$ as an actuator is a possible realization law, not a consequence of symmetry alone.

For an actual Hermitian actuator $A$ and state $\rho=\Pi\rho\Pi$, leakage has the expansion 

$$

{\operatorname{tr}}\bigl[(I-\Pi)e^{-itA}\rho e^{itA}\bigr]
=t^2{\operatorname{tr}}\bigl[\rho A(I-\Pi)A\bigr]+O(t^3).

$$

 The first derivative vanishes. A nonzero commutator guarantees some possible mixing, not first-order escape of every extreme seed. In the type-11 crossing channel there are unit vectors $u\in{\operatorname{im}}\Pi$, $v\in\ker\Pi$ with $Du=2v$, $Dv=2u$, hence $e^{-itD}u=\cos(2t)u-i\sin(2t)v$. An additional active zero-mode line is $D$-dark. These facts are about reachability in a supplied action grammar.

Similarly, an isolated tap generated by $\eta J\otimes X$ and a tap with continuing source drift are different operations. In the active two-level sector, the latter has, after a scalar shift, 

$$

H=2Z\otimes I+2\eta Y\otimes X,
\qquad H^2=4(1+\eta^2)I.

$$

 Its memory-one effect is 

$$

\frac{\eta^2}{1+\eta^2}
\sin^2\bigl(2t\sqrt{1+\eta^2}\bigr)\Pi.

$$

 It is not a perfect $\Pi$ measurement at finite $\eta$. Switching off or refocusing drift requires an admitted control and resources. An imperfect nontrivial tap can still provide useful conditional information, but a family of ensemble evaluations is not exact probability estimation from a single unknown specimen.

 

<a id="section-12-5"></a>

## 12.5 Robust spectral access

<a id="section:o1:robust-spectral-access"></a> Let a contour $\Gamma$ isolate a spectral cluster of Hermitian $K$ at distance $a>0$ from its spectrum. For $K'=K+\Delta K$, ${\lVert \Delta K\rVert}=\varepsilon<a$, the Riesz projections obey <a id="eq:resolventbound"></a>


$$

{\lVert P_\Gamma(K')-P_\Gamma(K)\rVert}
\le\frac{\operatorname{length}(\Gamma)}{2\pi}
\frac{\varepsilon}{a(a-\varepsilon)}.

$$

Equation (12.2).

 The resolvent identity gives an integrand norm at most $\varepsilon/[a(a-\varepsilon)]$, and integration proves the bound. Write $E=P_\Gamma(K)$ and $E'=P_\Gamma(K')$ for these spectral projections. If the provenance projector also changes from $P$ to $P'$ by $\delta$, then 

$$

{\lVert P'E'(I-P')-PE(I-P)\rVert}\le{\lVert E'-E\rVert}+2\delta.

$$

 A cross block larger than this uncertainty remains nonzero; rank claims need further control. Spectral robustness is not evidence of awareness.
