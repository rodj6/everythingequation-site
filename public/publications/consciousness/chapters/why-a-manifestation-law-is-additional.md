# Chapter 14: Why a manifestation law is additional

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

<a id="part:constitution"></a> <a id="ch:underdetermination"></a> The preceding parts describe source/readout relations and capabilities of physically realized systems. This part supplies the proposed laws of manifestation. Its first task is to identify which choices the physical results leave open, so that the later constitution makes those choices explicitly. The underdetermination examples below explain why a constitutive law is needed; they do not replace the positive argument for the particular law adopted.



<a id="section-14-1"></a>

## 14.1 Common source does not determine a bridge

<a id="section:underdetermination:common-source-does-not-determine-a-bridge"></a> The physical results establish structures that a vessel can realize. They do not yet determine an experiential assignment. Let $S=\{0,1\}^2$, with $p(s_1,s_2)=s_1$ and $\phi(s_1,s_2)=s_2$. Both are descriptions of the same source, but no function $f$ satisfies $\phi=f\circ p$. A common-source ontology alone does not imply the desired fibre compatibility.

Adding a constant awareness argument imposes no further mathematical restriction. For every $M:X\to\Phi$ and fixed $a_*$, the map $\widetilde M(a_*,x)=M(x)$ is a possible assignment on $\{a_*\}\times X$. Primitive awareness can be a legitimate ontological commitment while leaving the entire manifestation map unspecified. Its introduction must therefore be followed by actual laws rather than treated as the completion of the theory.



<a id="section-14-2"></a>

## 14.2 Regularity and symmetry leave genuine freedom

<a id="section:underdetermination:regularity-and-symmetry-leave-genuine-freedom"></a> Fix $X=\Phi=[0,1]$, its ordinary metric and orientation, and landmarks $0,1/2,1$. For $|\varepsilon|<1$, set <a id="eq:Meps"></a>


$$

M_\varepsilon(x)=x+\varepsilon x(1-x)(x-1/2).

$$

Equation (14.1).

 These maps preserve the landmarks and obey $M_\varepsilon(1-x)=1-M_\varepsilon(x)$. Their derivatives are 

$$

1+\varepsilon(-3x^2+3x-1/2),

$$

 which are bounded between $1-|\varepsilon|/2$ and $1+|\varepsilon|/2$. Thus they are monotone bi-Lipschitz homeomorphisms. Coordinatewise extension respects Cartesian product composition. Repairs that preserve $x$ preserve every such assignment.

Distinct values of $\varepsilon$ nevertheless give different maps. The orientation-preserving isometry group of the fixed interval with its landmarks is trivial. Hence these alternatives are not removed by that declared gauge. The example refutes uniqueness under the specific regularity, symmetry, and composition conditions just stated. It does not refute every richer naturality law on an independently specified category.

A naturality condition can relocate rather than remove the ambiguity. If both a phenomenal functor and its bridge are unknown, conjugating every phenomenal morphism by an invertible change of representation gives another natural pair. Likewise, replacing a manifestation map and compensating its decoder can preserve all outputs. The unknown target-side structure must be independently constrained or explicitly fixed by a constitutive law.



<a id="section-14-3"></a>

## 14.3 Report laws and latent descriptions

<a id="section:underdetermination:report-laws-and-latent-descriptions"></a> A general latent model writes <a id="eq:latentreport"></a>


$$

R(r\mid x,k)=\int Q(r\mid\phi,x,k)\,\mu({\,\mathrm d}\phi\mid x).

$$

Equation (14.2).

 If both $\mu$ and $Q$ are unrestricted, invertible changes of latent coordinates leave $R$ unchanged after the corresponding decoder transformation. More general inequivalent latent spaces can also induce the same report law. Thus a fitted report distribution is not automatically a unique phenomenal law.

An independently specified physical descriptor and experience-facing measurement map define a conditional factorization problem <a id="citation-24"></a>[[33](/consciousness/monograph/bibliography#bib-RodgersField)]. This formulation permits the target to constrain the descriptor rather than be defined by it. The stronger constitutive proposal below makes a different move: it identifies phenomenal relational organization with a canonical physical predictive object. This excludes alternative organizations *by a declared law*, not by claiming that generic regularity or report agreement has already ruled them out.



<a id="section-14-4"></a>

## 14.4 Quantitative aperture adequacy

<a id="section:underdetermination:quantitative-aperture-adequacy"></a> Let $S$ be finite, $p:S\to X=p(S)$ a proposed descriptor, and $r:S\to{\mathbb R}$ an independently nominated target. Define 

$$

{\operatorname{osc}}_p(r)=\max_{x\in X}\left(\max_{p(s)=x}r(s)-\min_{p(s)=x}r(s)\right).

$$

 

**Theorem 14.1 (Sharp scalar bridge error).**

<a id="thm:aperture"></a> The best deterministic bridge through $p$ has exact uniform error <a id="eq:aperture"></a>


$$

\inf_{f:X\to{\mathbb R}}\max_{s\in S}|r(s)-f(p(s))|
=\frac12{\operatorname{osc}}_p(r).

$$

Equation (14.3).

 

 

**Proof.**

On a fixed fibre let $a,b$ be the minimum and maximum target values. Every single number approximating both has maximum error at least $(b-a)/2$. Choosing their midpoint attains the bound on that fibre. Make this choice independently on each fibre and take the largest error. 

□



Exact factorization is the zero-error case. Refining a descriptor subdivides its fibres and cannot increase the optimal error. If ${\lVert r-\widehat r\rVert}_\infty\le\epsilon$, the two optimal errors differ by at most $\epsilon$. Consequently a same-descriptor contrast larger than $2\delta+2\epsilon$ rejects every bridge with uniform modeling error at most $\delta$, provided the equality of descriptors and the measurement bounds are independently justified.

This assesses descriptor adequacy. For a distribution-valued target, the corresponding problem is a minimum enclosing radius in a declared probability metric; half the diameter need not be optimal. The scalar formula therefore does not establish the general metric case or detect awareness.
