# Appendix E: Reconstruction, symmetry, and the meaning of a source

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

<a id="app:reconstruction"></a> 

<a id="section-E-1"></a>

## E.1 A selected representative is not an inverse

<a id="section:reconstruction:a-selected-representative-is-not-an-inverse"></a> If $p:S\to X$ is surjective, a section $\sigma:X\to S$ satisfies $p\sigma={\mathrm{id}}_X$. It also satisfies $\sigma p={\mathrm{id}}_S$ only if $p$ is injective. Indeed, if $p(s)=p(t)$, then $s=\sigma p(s)=\sigma p(t)=t$. Choosing one state per fibre therefore does not reconstruct which of the original fibre states actually occurred.

This distinction matters for both source ontology and phenomenal interpretation. A canonical-looking selected representative can provide useful coordinates without proving that the source has only that representative. The choice can also depend on structures not present in the readout. Such dependence must be retained rather than disguised as an intrinsic property of the quotient.



<a id="section-E-2"></a>

## E.2 Equivariant sections

<a id="section:reconstruction:equivariant-sections"></a> Suppose a group $G$ acts on $S$ and $X$ and $p$ is equivariant. Let $G_x$ be the stabilizer of $x$ and $F_x=p^{-1}(x)$. 

**Proposition E.1 (Equivariant representative criterion).**

 A $G$-equivariant section exists if and only if, for each orbit representative $x$, the stabilizer $G_x$ fixes a point of $F_x$, with the requisite orbitwise choices available. 

 

**Proof.**

If $\sigma$ is equivariant and $g\in G_x$, then $g\sigma(x)=\sigma(gx)=\sigma(x)$, proving necessity. Conversely choose $s_x\in F_x$ fixed by $G_x$ for each orbit representative and define $\sigma(gx)=gs_x$. If $gx=g'x$, then $g'^{-1}g\in G_x$ fixes $s_x$, so the definition is independent of the chosen representative. It is a section and equivariant by construction. 

□

 A two-point fibre on which the stabilizer swaps its points has no deterministic equivariant representative, although its uniform probability distribution is invariant. An invariant ensemble is not a recovered actual state. These source/readout facts are developed in the source non-equivalence manuscript <a id="citation-55"></a>[[41](/consciousness/monograph/bibliography#bib-RodgersSource)].



<a id="section-E-3"></a>

## E.3 Topological and physical qualifications

<a id="section:reconstruction:topological-and-physical-qualifications"></a> A continuous section can fail for reasons distinct from equivariance. The Hopf fibration $S^3\to S^2$ has circle fibres and admits no continuous global section. A section of this principal circle bundle would trivialize it to $S^2\times S^1$, but that product has nontrivial fundamental group whereas $S^3$ is simply connected. This is a topological obstruction, separate from a requirement to commute with a specified group action.

Neither obstruction proves that an arbitrary gauge coordinate is a hidden physical fact. If the theory declares the fibre distinction redundant, quotienting it removes a descriptive choice rather than observable source content. The reduced source must be identified before a non-reconstruction claim is interpreted physically. Likewise, a theorem about one noninjective aperture does not prove that every possible family of apertures fails jointly to reconstruct a nominated finite domain.

These qualifications strengthen the philosophical use of source/readout mathematics. They permit precise limitations on a perspective without converting ignorance into positive knowledge of an otherwise unspecified Absolute. They also prevent a selected phenomenal coordinate system from being confused with an independently demonstrated ontology.
