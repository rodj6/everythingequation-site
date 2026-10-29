# Appendix E: Reconstruction, symmetry, and the meaning of a source

<!-- Revised edition, 28 October 2026. Mathematical macros used below:
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



<a id="section-E-2-revised"></a>

## E.2 Reconstruction laws, retained archives and original events

<a id="sec:archive-reconstruction-update"></a> The distinction between a selected representative and the actual original has a statistical counterpart. Consider the masked encoder with output $(Y,Z)$ and source-conditioned rows in the order $00,01,10,11$, 

$$

P_0=(1/2,\varepsilon/2,0,(1-\varepsilon)/2),\qquad
P_1=(0,(1-\varepsilon)/2,1/2,\varepsilon/2),\quad0\le\varepsilon\le1.

$$

 A common stochastic reconstruction from $Y$ can reproduce the full law approximately while resampling the recorded $Y$. Its exact minimax total-variation error is 

$$

\delta_{\rm free}=\max\{1/2-\varepsilon,(1-\varepsilon)/4\}

$$

 <a id="citation-revised-103"></a>[[50](/consciousness/monograph/bibliography#bib-RodgersBoundaries2026)]. Preserving the actual retained archive imposes a stronger condition: only $\widehat Z$ may be generated, from $Y$ and fresh source-independent randomness. The integration report proves the sharp error 

$$

\delta_{\rm keep}=\frac{1-\varepsilon}{2(1+\varepsilon)}

$$

 <a id="citation-revised-104"></a>[[13](/consciousness/monograph/bibliography#bib-RodgersIntegration2026)]. To see this, symmetrize a candidate under $(b,Y,Z)\mapsto(1-b,1-Y,Z)$. Convexity cannot increase its worst error, and its two rows then share $a=P(\widehat Z=0\mid Y)$. Both source errors become 

$$

f(a)=\left|\frac12-\frac{1+\varepsilon}{2}a\right|
      +\frac{1-\varepsilon}{2}a.

$$

 The minimum occurs at $a=1/(1+\varepsilon)$, giving the displayed value. At $\varepsilon=0$ this attainer is valid but need not be unique. Keeping an immutable classical reference copy $H=Y$ enforces the same optimum for the complete target record $(H,Y,Z)$: replacing a reconstructed $\widehat Y$ by unchanged $H$ fixes the target law and cannot increase total variation.

Recovering the actual missing bit from the original run asks a different question. With only its $Y$ and fresh source-independent randomness, 

$$

\inf_A\max_bP_b(\widehat Z\ne Z)=\frac12.

$$

 Under a uniform source prior the original $(Y,Z)$ distribution is uniform, so $Z$ is fair and independent of $Y$; every decoder has average error $1/2$. Always guessing zero attains that error under both sources. At $\varepsilon=1/3$ the three optimal errors are therefore $1/6$, $1/4$ and $1/2$. Even at $\varepsilon=1$, exact reconstruction of either law does not recover the original event.

These results concern the declared classical access contract. Access to the original random seed or omitted register would change the experiment; quantum reference preservation requires its own theorem. The distinction bears directly on memory transfer and incorporation: matching a distribution, keeping an archive and recovering what happened are different achievements. None alone supplies process lineage or episode continuation under A3. A reconstructed representation can become part of a new current activity without thereby becoming the earlier activity it represents.



<a id="section-E-2"></a>

## E.3 Equivariant sections

<a id="section:reconstruction:equivariant-sections"></a> Suppose a group $G$ acts on $S$ and $X$ and $p$ is equivariant. Let $G_x$ be the stabilizer of $x$ and $F_x=p^{-1}(x)$. 

**Proposition E.1 (Equivariant representative criterion).**

 A $G$-equivariant section exists if and only if, for each orbit representative $x$, the stabilizer $G_x$ fixes a point of $F_x$, with the requisite orbitwise choices available. 

 

**Proof.**

If $\sigma$ is equivariant and $g\in G_x$, then $g\sigma(x)=\sigma(gx)=\sigma(x)$, proving necessity. Conversely choose $s_x\in F_x$ fixed by $G_x$ for each orbit representative and define $\sigma(gx)=gs_x$. If $gx=g'x$, then $g'^{-1}g\in G_x$ fixes $s_x$, so the definition is independent of the chosen representative. It is a section and equivariant by construction. 

□

 A two-point fibre on which the stabilizer swaps its points has no deterministic equivariant representative, although its uniform probability distribution is invariant. An invariant ensemble is not a recovered actual state. These source/readout facts are developed in the source non-equivalence manuscript <a id="citation-revised-105"></a>[[57](/consciousness/monograph/bibliography#bib-RodgersSource)].



<a id="section-E-4"></a>

## E.4 The distinctions required by an anchored content

<a id="sec:anchored-content-signature"></a> The relational-awareness supplement refines the symmetry obstruction into a target-specific completion result <a id="citation-revised-106"></a>[[58](/consciousness/monograph/bibliography#bib-RodgersRelationalSupplement2026), Sections 9.2–9.4]. Let a finite group $G$ act on physical descriptions $X$ and nominated contents $\mathcal C$. Fix a description $x$ and an independently warranted content $c$, and put $H=\operatorname{Stab}_G(x)$ and $G_c=\operatorname{Stab}_G(c)$. An equivariant map $F:Gx\to\mathcal C$ with $F(x)=c$ exists exactly when $H\subseteq G_c$. Necessity follows from $F(hx)=hF(x)$; sufficiency defines $F(gx)=gc$, which is well-defined under the stabilizer inclusion.

If this condition fails, an added equivariant signature above $x$ that recovers $c$ needs at least $[H:H\cap G_c]$ distinct admissible signature values. A transformation fixing the signature must fix its recovered content, so its stabilizer is contained in $H\cap G_c$; orbit–stabilizer gives the bound. The coset construction attains it. Over the full physical orbit it is 

$$

 G/(H\cap G_c)\longrightarrow G/H,\qquad
 g(H\cap G_c)\longmapsto gH,

$$

 with recovery $g(H\cap G_c)\mapsto gc$. These are coset sets, without a normality assumption. The count concerns required distinctions under this contract, not material parts or neurons. For a coarser target one uses its own stabilizer and can require fewer distinctions.

For four wholly interchangeable labels, strict line betweenness has twelve distinct arrangements up to reversal, an unoriented four-cycle has three, and an equal-distance relation has one. Occurrence alone can also be invariant: both constant-present and constant-absent assignments respect symmetry. Thus symmetry determines neither actual appearance nor its bearer. A passive coordinate change redescribes one token; active replacement requires an independently justified transport premise. The actual anchor and that transport are inputs to this result, not its conclusions.



<a id="section-E-3"></a>

## E.5 Topological and physical qualifications

<a id="section:reconstruction:topological-and-physical-qualifications"></a> A continuous section can fail for reasons distinct from equivariance. The Hopf fibration $S^3\to S^2$ has circle fibres and admits no continuous global section. A section of this principal circle bundle would trivialize it to $S^2\times S^1$, but that product has nontrivial fundamental group whereas $S^3$ is simply connected. This is a topological obstruction, separate from a requirement to commute with a specified group action.

Neither obstruction proves that an arbitrary gauge coordinate is a hidden physical fact. If the theory declares the fibre distinction redundant, quotienting it removes a descriptive choice rather than observable source content. The reduced source must be identified before a non-reconstruction claim is interpreted physically. Likewise, a theorem about one noninjective aperture does not prove that every possible family of apertures fails jointly to reconstruct a nominated finite domain.

These qualifications strengthen the philosophical use of source/readout mathematics. They permit precise limitations on a perspective without converting ignorance into positive knowledge of an otherwise unspecified Absolute. They also prevent a selected phenomenal coordinate system from being confused with an independently demonstrated ontology.
