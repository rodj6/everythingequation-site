# Chapter 6: Quantum currents and observer-independent events

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

<a id="ch:quantum"></a> The physical question in this chapter is what specifies an event before anyone notices it. Source/readout mathematics first identifies information sufficient to track weights and currents. The two following chapters then supply distinct constitutions for actual histories and material records. Their role is to establish physically specified processes to which an experiential interpretation can subsequently be applied.



<a id="section-6-1"></a>

## 6.1 The coherent source

<a id="section:quantum:the-coherent-source"></a> Let ${\mathcal H}$ be finite dimensional, $H(t)=H(t)^\dagger$, and $(P_n)$ a finite orthogonal resolution of the identity. The sectors can include apparatus and an inaccessible reference. For 

$$

i\hbar\dot\Psi=H\Psi,\qquad \Psi_n=P_n\Psi,

$$

 define $w_n={\lVert \Psi_n\rVert}^2$ and current into $n$ from $m$ by <a id="eq:current"></a>


$$

J_{nm}=\frac{2}{\hbar}\operatorname{Im}{\langle \Psi_n,H\Psi_m\rangle}.

$$

Equation (6.1).

 Self-adjointness and direct differentiation give <a id="eq:continuity"></a>


$$

J_{nm}=-J_{mn},\qquad
\dot w_n=\sum_{m\ne n}J_{nm},\qquad
|J_{nm}|\le\frac{2{\lVert H\rVert}}{\hbar}\sqrt{w_nw_m}.

$$

Equation (6.2).

 The diagonal term makes no contribution because its expectation is real. The last estimate follows from Cauchy–Schwarz. It controls possible behavior near empty sectors without making a choice of actual events.

An actual jump history requires a law on paths, not only the continuity equation. If $N_{nm}$ counts transitions $m\to n$, its predictable intensity $\lambda_{nm}$ is defined relative to a specified filtration by requiring 

$$

N_{nm}(t)-\int_0^t{\mathbf 1}_{\{X_{s-}=m\}}\lambda_{nm}(s){\,\mathrm d} s

$$

 to be a local martingale. A signed current density and a random atomic counting measure are different objects. Their identification cannot be made path by path by changing notation.

Bell's minimal rates are <a id="eq:bell"></a>


$$

\lambda^B_{nm}(t)=\frac{[J_{nm}(t)]_+}{w_m(t)}
\quad\text{when }w_m(t)>0.

$$

Equation (6.3).

 The construction is established in the Bell-process literature <a id="citation-9"></a>[[3](/consciousness/monograph/bibliography#bib-Bell1986), [15](/consciousness/monograph/bibliography#bib-Durr2005)]. Its selection from a physical constitution is a further problem. For example, directed expected traffic of the form 

$$

F_{nm}=[J_{nm}]_++s_{nm},\qquad s_{nm}=s_{mn}\ge0,

$$

 has the same net current for every symmetric surplus $s$. Equality of populations therefore does not identify the event traffic, waiting-time structure, or full path law.



<a id="section-6-2"></a>

## 6.2 Predictive current coordinates

<a id="section:quantum:predictive-current-coordinates"></a> A source/readout completion can determine what is needed to evaluate a proposed event law without selecting it. Let $(H_a)_a$ be a finite family of admitted control Hamiltonians, and define Hermitian current observables 

$$

C^a_{nm}=\frac{P_nH_aP_m-P_mH_aP_n}{i\hbar},
\qquad \mathcal L_a^*O=\frac{i}{\hbar}[H_a,O].

$$

 Let $W$ be the smallest real subspace of Hermitian operators containing all $P_n,C^a_{nm}$ and invariant under every $\mathcal L_a^*$. It can be computed by repeatedly adjoining images of a basis. Its dimension is at most $(\dim{\mathcal H})^2$.



**Theorem 6.1 (Predictive-current representation).**

<a id="thm:current-rep"></a> For a basis $O_1,\ldots,O_d$ of $W$, let $\xi(\rho)=({\operatorname{tr}}\rho O_j)_j$. Two density operators have equal $\xi$ if and only if all future sector weights and currents agree under every finite sequence of admitted constant-control pulses. The image of $\xi$ is the coarsest representation sufficient for this target, and it evolves autonomously during each pulse. 

 

**Proof.**

Invariance of $W$ implies invariance under $e^{t\mathcal L_a^*}$ and finite products of these exponentials. Equal coordinates therefore give all nominated future expectations. Conversely, equality for all nonnegative pulse durations gives equality of all one-sided mixed derivatives at zero. The resulting ordered words in the generators applied to $P_n,C^a_{nm}$ span $W$, so the coordinates agree. Coarsest sufficiency follows from [Theorem 5.1](/consciousness/monograph/source-readout-foundations#thm:descent). In a basis write $\mathcal L_a^*O_i=\sum_jA^a_{ij}O_j$; then $\dot\xi=A^a\xi$. 

□



The theorem is about informational sufficiency. It says nothing about whether $\xi$ is experienced. It also does not determine which event generator, preparation measure, or physically exposed actuator should accompany the coherent source. Those additional distinctions are retained in the two measurement constitutions below.



<a id="section-6-3"></a>

## 6.3 The independence of physical events from conscious observation

<a id="section:quantum:the-independence-of-physical-events-from-conscious-observation"></a> The mature measurement programme contains two different constitutive completions <a id="citation-10"></a>[[37](/consciousness/monograph/bibliography#bib-RodgersMeasurement), [35](/consciousness/monograph/bibliography#bib-RodgersMassive), [34](/consciousness/monograph/bibliography#bib-RodgersPilot)]. One uses actual continuous configurations guided by the complete wave and an initial equilibrium law. The other uses a deterministic pilot medium with an initial spatial ensemble and a controlled complete-path limit to Bell dynamics. Neither includes conscious awareness as the trigger of an event.

This is a conditional physical result. It establishes that the specified models define events and records without an awareness variable. It does not prove that these models are the unique laws of nature, nor that consciousness has no relation to the processes they describe. The relevance is conceptual and technical: a psychophysical aspect can be added to the realized history without being invoked to complete an otherwise undefined measurement.



<a id="section-6-4"></a>

## 6.4 Complete experiments and comparison spaces

<a id="section:quantum:complete-experiments-and-comparison-spaces"></a> A complete experiment includes the source, unknown input, inaccessible reference, apparatus, fuel, working display, archives, reset receivers, null and failure branches, control programme, and all future return interactions. An approximate operation leaves its actual output in the model. It does not replace a daughter state by an ideal one merely because a label has been declared.



**Lemma 6.2 (Composition and conditioning).**

<a id="lem:errors"></a> If successive complete Markov kernels differ uniformly by at most $\epsilon_j$ in total variation, their complete retained-history laws differ by at most $\sum_j\epsilon_j$. The same telescoping conclusion holds for quantum instruments in half-diamond distance with the required reference retained. If ${\lVert \sigma-\tau\rVert}_1\le\delta$, $p={\operatorname{tr}}\sigma>0$, and $q={\operatorname{tr}}\tau>0$, then 

$$

D(\sigma/p,\tau/q)\le\min\{1,\delta/p\}.

$$

 If ${d_{\mathrm{TV}}}(P,Q)\le\epsilon$ and both conditional laws on $E$ exist, with $P(E)=p>0$, then 

$$

{d_{\mathrm{TV}}}(P(\cdot\mid E),Q(\cdot\mid E))\le\min\{1,2\epsilon/p\}.

$$

 

 

**Proof.**

Replace kernels one at a time. The common remaining suffix contracts the chosen distance, and the retained prefix is part of the input on which the uniform bound holds. For normalization, ${\lVert \sigma/p-\tau/q\rVert}_1\le\delta/p+|p-q|/p\le2\delta/p$. The same triangle argument applied to restrictions of probability measures proves the conditional estimate. 

□



The positivity of conditioning probabilities is not optional. A formal cap by one cannot define conditioning on a null event. Likewise, closeness of final output probabilities does not by itself imply closeness of the actual historical record. These distinctions are crucial when physical reports are later used as evidence concerning experience.
