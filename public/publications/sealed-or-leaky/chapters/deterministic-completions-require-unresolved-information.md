# Section 6: Deterministic completions require unresolved information

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-6"></a>

## 6 Deterministic completions require unresolved information

 <a id="op:detsection"></a>

<a id="source-theorem-5"></a>

**Theorem 6.1 (Conditional randomness and completion size).**

 <a id="op:information"></a> 

*Status: Proved.*

 Let $S,T$ be standard Borel spaces, let ${\mathbb P}$ be a probability law on $S$, let $T_0=p(S_0)$ for a measurable $p$, and let a future finite-valued record be a measurable deterministic function $R=R(S_0)$. 

1. If $R$ is binary, write $q(T_0)={\mathbb P}(R=1\mid T_0)$. The minimum probability of error of a measurable deterministic predictor of $R$ from $T_0$ is 

$$

 \inf_h{\mathbb P}\{R\ne h(T_0)\}
 ={\mathbb E}\min\{q(T_0),1-q(T_0)\}.

$$

 If this is positive, $R$ does not descend almost surely through $p$; on a positive-measure set of readout fibers there are source states with different records.

2. If a finite-valued completion variable $Z$ makes $R=f(T_0,Z)$ almost surely, then, with entropy in bits, 

$$

 H(Z\mid T_0)\ge H(R\mid T_0).

$$

 In particular, a conditionally uniform $n$-bit record requires at least $n$ bits of conditional completion entropy and $|\mathcal Z|\ge2^n$.

3. At a fixed readout $t$, suppose a deterministic simulator uses at most $M$ values of $Z$. If its record law is within $\varepsilon$ in total variation of the uniform law on $\{0,1\}^n$, then 

$$

 M\ge(1-\varepsilon)2^n.

$$

 The bound is sharp when $M\le2^n$: a uniform distribution on any $M$ record strings has distance $1-M/2^n$ from the uniform target.

 



<a id="source-proof-21"></a>

**Proof.**

Conditionally on $T_0=t$, predicting $0$ incurs error $q(t)$ and predicting $1$ incurs $1-q(t)$; the measurable threshold predictor at $q=1/2$ attains their minimum. Standard Borel regular conditional laws of $S_0$ given $T_0=t$ are concentrated on $p^{-1}(t)$ for almost every $t$. Where $0<q(t)<1$, they assign positive mass to both possible record values, supplying the two points in the fiber. For part 2, determinism gives $H(R\mid T_0,Z)=0$. The chain rule then yields $H(Z\mid T_0)=H(R\mid T_0)+H(Z\mid R,T_0)\ge H(R\mid T_0)$. For part 3, the output support $A$ contains at most $M$ strings. Its simulator probability is one whereas its uniform probability is at most $M/2^n$, so total variation is at least $1-M/2^n$. Direct summation gives the stated equality example. 

□



This strengthens a qualitative non-source witness into an information requirement for deterministic completions. Its premises must not be misread. A statistical record law is not an empirical proof of universal determinism or of irreducibility relative to *every* possible initial description. A stochastic source model remains an alternative; a continuous hidden variable with unlimited precision also evades a finite cardinality bound. The result counts all unresolved apparatus and environmental information used by the simulator. Fresh random seeds cannot be omitted from $Z$ while still calling that simulator deterministic. For a prescribed programme, future readout randomness conditional on the present state excludes a deterministic autonomous law on that state, but does not exclude an autonomous stochastic law or a history representation.
