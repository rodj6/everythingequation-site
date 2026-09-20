# Chapter 5: Source/readout foundations

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

<a id="part:physics"></a> <a id="ch:source"></a> 

<a id="section-5-1"></a>

## 5.1 Nominated sources and restricted descriptions

<a id="section:source:nominated-sources-and-restricted-descriptions"></a> A mathematical source domain is a specified class of states or histories relevant to a question. It is the working structure-side cut, complete relative to that problem, not ${\mathsf{U}}$. The schematic record-side codomain $T$ of the philosophical discussion is denoted $X$ in the following theorems. These results concern operational descriptions and make no set-theoretic claim about the unsplit prior. Let $S$ be such a domain after declared descriptive redundancies have been removed. A readout is a surjection $p:S\to X$. A target $a:S\to A$ is a property or relation that the investigation asks the readout to retain. This formulation precedes a probability measure, a Hamiltonian, or a phenomenal assignment <a id="citation-8"></a>[[41](/consciousness/monograph/bibliography#bib-RodgersSource), [37](/consciousness/monograph/bibliography#bib-RodgersMeasurement)].



**Theorem 5.1 (Descent and coarsest target completion).**

<a id="thm:descent"></a> A map $\bar a:X\to A$ satisfying $a=\bar a\circ p$ exists if and only if $a$ is constant on every fibre of $p$. It is unique when it exists. For a family of targets $(a_\alpha)$, let 

$$

e(s)=\bigl(p(s),(a_\alpha(s))_\alpha\bigr),\qquad E=e(S).

$$

 If a surjection $f:S\to F$ retains $p$ and every $a_\alpha$, then there is a unique surjection $h:F\to E$ with $e=h\circ f$. 

 

**Proof.**

A factorized target takes the same value at any two states with the same $p$ value. Conversely, for $x\in X$ choose $s$ with $p(s)=x$ and define $\bar a(x)=a(s)$. Fibre constancy makes the choice immaterial, and surjectivity gives uniqueness. For the family, write $p=u\circ f$ and $a_\alpha=v_\alpha\circ f$. Then $h(y)=(u(y),(v_\alpha(y))_\alpha)$ has image in $E$ because $f$ is onto. It is surjective because $e$ is, and unique because every point of $F$ is attained by $f$. 

□



The theorem orders information. It does not select the dynamics acting on that information. For example, with $S=\{0,1\}^2$ and $p(s_1,s_2)=s_1$, retaining the second coordinate completes the representation to $S$. There are still many deterministic maps and stochastic kernels on $S$. A rule selecting one of them requires new data. This distinction will recur in both quantum event selection and phenomenal assignment.

A perceived object is not literally a set-theoretic fibre. The quotient expresses an identification performed by a specified representation: source conditions within one fibre are indistinguishable to that representation. A noisy observation requires a further distinction. Equal observed samples need not mean equal source laws. For a channel $Q(\cdot\mid s)$, operational equivalence is equality of the relevant output distributions, not accidental equality of one draw.



<a id="section-5-2"></a>

## 5.2 Predictive closure

<a id="section:source:predictive-closure"></a> 

**Proposition 5.2 (Deterministic readout dynamics).**

<a id="prop:dyn-descent"></a> For a source evolution $F_t:S\to S$, an autonomous reduced evolution $U_t:X\to X$ with $pF_t=U_tp$ exists exactly when $pF_t$ is constant on $p$-fibres. If this holds for all times and $F$ is a semigroup, the reduced maps form a semigroup. 

 

**Proof.**

Apply [Theorem 5.1](/consciousness/monograph/source-readout-foundations#thm:descent) to $a=pF_t$. For composition, $U_{t+s}p=pF_{t+s}=pF_tF_s=U_tU_sp$; surjectivity of $p$ proves the result. 

□



For stochastic systems the analogous condition concerns whole transition laws. Suppose $S$ is finite and $T_u(s,s')$ is a controlled transition kernel. The $p$-projection has a common transition law for every complete initial distribution precisely when, for all $x,x',u$, <a id="eq:lump"></a>


$$

\sum_{s':p(s')=x'}T_u(s,s')
\quad\text{is independent of }s\in p^{-1}(x).

$$

Equation (5.1).

 Necessity follows by starting at two point masses in one fibre. Sufficiency follows by conditioning on the current fibre and summing. The same reasoning works for finite adaptive protocols when the controls depend only on the retained reduced history.

This is a condition on a supplied kernel, not a way of choosing that kernel. If it fails, the readout is insufficient for autonomous prediction and must be enlarged, or a non-Markov history description must be used. The failure need not indicate a new force: it can reflect omitted ordinary physical variables. Conversely, successful reduced prediction does not prove that the representation exhausts the source.



<a id="section-5-3"></a>

## 5.3 Multiple apertures and non-reconstructibility

<a id="section:source:multiple-apertures-and-non-reconstructibility"></a> A noninjective $p$ cannot recover every source property. It can recover exactly the properties constant on its fibres. Two noninjective readouts may jointly be injective: the two coordinate projections of $\{0,1\}^2$ recover the entire pair. Therefore the philosophical doctrine that no internal observer exhausts ${\mathsf{U}}$ is stronger than the noninjectivity of one particular channel. It concerns the admitted collection of representations and the status of the source domain itself.

Target-relative sufficiency permits exact knowledge of some source distinctions through a restricted representation. Others require further structure. The consciousness programme asks the corresponding question: whether a vessel descriptor retains the distinctions needed for an independently nominated phenomenological or report contrast.



<a id="section-5-4"></a>

## 5.4 The Everything Equation and constitutive selection

<a id="section:source:the-everything-equation-and-constitutive-selection"></a> The broader Shadow programme expresses lawhood by a fixed-point relation, conventionally written $L=\Omega\Delta\partial[L]$. Here the operator version is <a id="eq:everything"></a>


$$

L=\mathcal O\circ\Delta\circ\partial(L).

$$

Equation (5.2).

 A contraction satisfying the fixed-point hypotheses selects a unique point, but the relation does not select its own domain or maps. The operator $\mathcal O$ belongs to the supplied mathematical construction. It is not ${\mathsf{U}}$, and the fixed-point equation does not turn the ontological prior into an operator.

Accordingly, SPC-2 is a compatible constitutive extension, not a deduction from [Equation 5.2](/consciousness/monograph/source-readout-foundations#eq:everything). Its subject-admission and qualitative laws are additional commitments.
