# Chapter 5: Source/readout foundations

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

<a id="part:physics"></a> <a id="ch:source"></a> 

<a id="section-5-1"></a>

## 5.1 Nominated sources and restricted descriptions

<a id="section:source:nominated-sources-and-restricted-descriptions"></a> A mathematical source domain is a specified class of states or histories relevant to a question. It is the working structure-side cut, complete relative to that problem, not ${\mathsf{U}}$. The schematic record-side codomain $T$ of the philosophical discussion is denoted $X$ in the following theorems. These results concern operational descriptions and make no set-theoretic claim about the unsplit prior. Let $S$ be such a domain after declared descriptive redundancies have been removed. A readout is a surjection $p:S\to X$. A target $a:S\to A$ is a property or relation that the investigation asks the readout to retain. This formulation precedes a probability measure, a Hamiltonian, or a phenomenal assignment <a id="citation-revised-19"></a>[[57](/consciousness/monograph/bibliography#bib-RodgersSource), [53](/consciousness/monograph/bibliography#bib-RodgersMeasurement)].



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



<a id="section-5-4-revised"></a>

## 5.4 From a retained distinction to its actual use

<a id="sec:source-to-use-update"></a> The later temporal construction follows one nominated relation through physical delivery, retention, source binding and finite-time use <a id="citation-revised-20"></a>[[36](/consciousness/monograph/bibliography#bib-RodgersBlock2026)]. In its diagonal joint-record family, independent uniform source bits $a,b$ have directed target $D=b-a$. If predecessor and live records have survival parameters $p,q$ and joint retention $j$, the exact optimal average success is $(1+j)/2$. The independent prescribed source has $j=pq$; local survival probabilities alone do not determine the joint resource. With an active memory survival $r$ and delivery probabilities $q_A,q_B$, accuracy $1-\epsilon$ therefore requires $q_A r q_B\ge1-2\epsilon$ in that program. A relation can exist in the source while failing to reach the occasion at which the organization needs it.

Availability and enactment remain distinct even after successful delivery. Closing the use gate leaves the archive intact without executing the update. Exchanging predecessor and live bindings preserves the bits while reversing the relation actually computed. Later retrieval is another operation; later deletion changes later access rather than undoing an earlier use. For an already qualifying subject under a complete-enactment constitution, actual integration into its ongoing recognition, relating, appraisal or response supplies the experiential application. The detached task device does not establish that application merely by producing the correct answer.

Coherent joint resources require a different calculation. For the precisely declared coherent family extending the block paper's Section 6.3 example, the integration report proves 

$$

S_3(p,r)=\frac12+\frac{pr^2}{2(1+2r)},\qquad
0\le p\le\frac12,\quad0\le r\le1,

$$

 with known phase and no readable correlated side resource beyond the declared two-qubit code <a id="citation-revised-21"></a>[[13](/consciousness/monograph/bibliography#bib-RodgersIntegration2026)]. Here $r$ denotes excitation coherence, separately from the preceding memory survival. The endpoint $p=1/2,r=1$ has sharp success $7/12$. The earlier $9/16$ was a correct attainable score, not an optimum claim. The report supplies a matching measurement and upper certificate, a strict two-versus-three excitation-outcome comparison, and robust finite-deadline realization. This coherent preparation changes the joint encoding; it is not a free improvement to the independent diagonal source. At zero effective coherence, the zero-weight measurement effect requires no normalized absorber template; its absorber is omitted. Its significance is quantitative: a completion must retain the right kind of usable relation, not merely matching local populations. The native organization and constitutive application remain those required by the consciousness account.

The block integration also locates the source claim carefully. With $F:S\to H$ a realization of complete physical histories and $q:H\to Z$ a local access map, failure of a target to descend through $q$ does not establish loss through $F$: $F=\mathrm{id}_H$ is already a countermodel. A complete passive local history can likewise omit the environment distinction needed to predict a controlled response. Source-relative insufficiency must therefore name its map and intervention class. The block paper's reciprocal-pair theorem concerns a fixed co-reality relation under its specified transitivity and spacetime invariances; a process lasting through time does not by itself supply a reciprocal-actuality witness. These distinctions preserve the explanatory integration of temporal experience while keeping its ontological premises explicit <a id="citation-revised-22"></a>[[36](/consciousness/monograph/bibliography#bib-RodgersBlock2026)].



<a id="section-5-4"></a>

## 5.5 The Everything Equation and constitutive selection

<a id="section:source:the-everything-equation-and-constitutive-selection"></a> The broader Shadow programme expresses lawhood by a fixed-point relation, conventionally written $L=\Omega\Delta\partial[L]$. Here the operator version is <a id="eq:everything"></a>


$$

L=\mathcal O\circ\Delta\circ\partial(L).

$$

Equation (5.2).

 A contraction satisfying the fixed-point hypotheses selects a unique point, but the relation does not select its own domain or maps. The operator $\mathcal O$ belongs to the supplied mathematical construction. It is not ${\mathsf{U}}$, and the fixed-point equation does not turn the ontological prior into an operator.

Accordingly, SPC-2 is a compatible constitutive extension, not a deduction from [Equation 5.2](/consciousness/monograph/source-readout-foundations#eq:everything). Its subject-admission and qualitative laws are additional commitments.
