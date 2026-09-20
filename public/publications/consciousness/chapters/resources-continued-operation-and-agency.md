# Chapter 9: Resources, continued operation, and agency

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

<a id="ch:resources"></a> 

<a id="section-9-1"></a>

## 9.1 Finite records are physical resources

<a id="section:resources:finite-records-are-physical-resources"></a> A record is not merely a scalar assigned to a state. It requires a physical carrier, distinguishable alternatives, a writing interaction, a retention interval, and an allowed way of reading or reusing it. Exact copying of a known orthogonal alphabet can be unitary: ${\lvert a\rangle}{\lvert 0\rangle}\mapsto{\lvert a\rangle}{\lvert a\rangle}$. This is not a universal cloner of unknown states. Superpositions evolve to correlated states rather than two independent copies.

A reversible implementation of a many-to-one logical step must retain enough information to distinguish its inputs. Bennett's reversible computation and Landauer's analysis of logical irreversibility provide the standard background <a id="citation-16"></a>[[4](/consciousness/monograph/bibliography#bib-Bennett1973), [23](/consciousness/monograph/bibliography#bib-Landauer1961)]. Here the finite consequence can be stated directly. If $n$ independent binary historical alternatives must remain perfectly distinguishable in a retained carrier of dimension $D$, then $2^n\le D$. The bound follows from orthogonality of perfectly distinguishable records. It is not a theorem that a finite system cannot recur, preserve a fixed record, or reuse a reversible working register.

A finite ready bank with $N$ cells can support at most $N$ operations that each consume a distinct ready cell and never restore global readiness. SWAP reset restores a local register by spending a receiver. The availability of another environment does not restore the bank unless an admitted coupling actually transfers a compatible resource. “Open” is a physical interaction condition, not an accounting word that creates capacity.



<a id="section-9-2"></a>

## 9.2 Operational capacity

<a id="section:resources:operational-capacity"></a> Fix a protocol class $\mathfrak P$, retained obligations, and a finite horizon. For a complete state $s$, define $C_{\mathfrak P}(s)$ to be the largest number of protocol completions that one admissible strategy can guarantee on that horizon without violating the obligations. The number is zero if no completion is reachable. Other risk tolerances lead to other capacities; they must be specified rather than identified with this worst-case definition.

The complete state includes the remaining physical time and the retained obligations; every successor carries the decremented budget. Equivalently, a completion of duration $d(s,u,s')$ obeys 

$$

C_{\mathfrak P,\tau}(s)\ge 1+\inf_{s'\in\mathcal R(s,u)}
C_{\mathfrak P,\tau-d(s,u,s')}(s'),

$$

 provided every admitted successor fits the remaining horizon. In the abbreviated notation below this clock update is part of $s'$.

Capacity depends on resources, reachability, and compatibility together. Two states may have the same number of apparently blank cells while only one admits the coupling needed to use them. A locally ready marginal can also be correlated with a returning memory, so it is not the same preparation as an independent blank. Capacity therefore is not universally the expectation of a single source operator, nor a thermodynamic free energy without a specified Hamiltonian, bath, temperature, and work convention.

For a deterministic admissible preprocessing $F$ that can be prefixed without violating obligations and with any time or resource consumption included in its successor state, $C_{\mathfrak P}(s)\ge C_{\mathfrak P}(F(s))$. For a guaranteed consuming step with successor set $\mathcal R(s,u)$, a valid dynamic-programming lower bound is 

$$

C_{\mathfrak P}(s)\ge1+\inf_{s'\in\mathcal R(s,u)}C_{\mathfrak P}(s').

$$

 Both statements follow by concatenating strategies. Additivity under composition needs independently usable resources and separable obligations; correlations or shared actuators can invalidate it. This is why a resource count should not be promoted to a universal consciousness magnitude.



<a id="section-9-3"></a>

## 9.3 Viability and the orientation of repair

<a id="section:resources:viability-and-the-orientation-of-repair"></a> Let $G$ be a finite preservation region and $T_u$ controlled transition kernels. Define 

$$

V_0=G,\qquad
V_{n+1}=\{s\in V_n:\exists u\ {\operatorname{supp}} T_u(s,\cdot)\subseteq V_n\}.

$$

 The decreasing sequence stabilizes in finitely many removals. Its terminal set is the greatest subset of $G$ from which an admissible policy can preserve the region indefinitely in the finite model. A selecting policy is obtained by choosing one witnessing control at each surviving state. This is a theorem about available policies.

It does not say the actual controller chooses that policy. Let $(d,f)$ be a defect bit and repair-fuel bit. Admit idle and repair, with repair taking $(1,1)$ to $(0,0)$ and idle leaving it unchanged. Both selectors coexist with the same resource inventory and possible continuations. One is repair-oriented and the other is not. Adding the same awareness aspect to both does not select between them. Minimal Repair Orientation, when claimed, is a policy law or a consequence of additional physical dynamics, not an automatic consequence of recurrence, viability, or awareness.

The distinction is philosophically significant. Treating awareness as primitive does not attribute desire for survival, rich valuation, or benevolent action to it. Such properties may be realized in a vessel, but they require their own organization. This prevents a source-aspect ontology from silently turning into a theory of agency or ethics.



<a id="section-9-4"></a>

## 9.4 Agency and stable decisions

<a id="section:resources:agency-and-stable-decisions"></a> The agency manuscripts define a functional target: usable world modeling, counterfactual evaluation, and reliable action selection <a id="citation-17"></a>[[31](/consciousness/monograph/bibliography#bib-RodgersAgency)]. This target is independent of a phenomenal predicate. A controller can implement a specified comparison procedure without that procedure constituting evidence of experiential presence.

A quantum no-go must specify its input encoding and allowed resources. Unitary linearity rules out a generic nonlinear winner-selection rule on arbitrary unknown amplitude-encoded inputs. It does not rule out reversible evaluation of a classical decision function on orthogonally encoded data. A reversible circuit can retain the input and computational garbage while writing a definite decision label for each basis input. Superposed inputs then yield the corresponding correlated superposition. The physical interpretation of an actual outcome belongs to the event constitution, not to a general slogan that quantum systems cannot decide.

Similarly, choosing a diagonal conditional expectation builds a record algebra into the construction. Showing that its image is diagonal does not derive the basis. A constant contraction $T(\rho)=I/2$ has one fixed density operator but does not select one of its two classical outcome labels. Banach uniqueness is uniqueness of a mathematical fixed state, not actualization of one sample. These distinctions allow useful fixed-point stability results without inheriting an invalid universal derivation of decisions or Born weights.



<a id="section-9-5"></a>

## 9.5 Physical stability and philosophical relevance

<a id="section:resources:physical-stability-and-philosophical-relevance"></a> The constructive lesson is neither that agency is illusory nor that all agency is conscious. Model formation and action can be physically causal processes with stable records and real consequences. The consciousness theory asks whether and how those processes are accompanied by experiential presence under a specified aspect law. It can therefore admit experience without advanced deliberation and advanced deliberation without an independently established experiential attribution.

This separation also protects the contemplative discussion from a false dichotomy. Reduced identification with an ego need not abolish practical action, and practical competence need not certify enlightenment. The material theory identifies what can be implemented and retained. The philosophical account concerns how self-description and presence are related. Their integration requires a bridge, but not the collapse of one vocabulary into the other.
