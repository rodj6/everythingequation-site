# Section 5: Operational equivalence and its restricted alternatives

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

<a id="section-5"></a>

## 5 Operational equivalence and its restricted alternatives

 <a id="op:section"></a>

The objects compared must be fixed before a completeness claim is made. An individual ontic state, a preparation law on ontic states, its density matrix, a present detector configuration, and a complete experimental record are different objects. A failure of injectivity for one of their maps does not establish failure of injectivity for the others.

Let $S$ be a set of physically reduced source states or preparation laws, and let $p:S\to T$ be a nominated readout. For each admissible complete experiment $e$, write $\mu_{e,s}$ for the probability law of its complete data on a measurable space $(D_e,\Sigma_e)$. The admissible family includes exactly the preparations, interventions, repetitions, stopping rules, and retained records that the model permits. These permissions are physical premises, not consequences of the following definitions. Put 

$$

 s\sim_{\rm op}s'\quad\Longleftrightarrow\quad
 \mu_{e,s}=\mu_{e,s'}\quad\hbox{for every admissible }e,
 \qquad q:S\longrightarrow S/{\sim_{\rm op}}.

$$

 This quotient is a predictive equivalence class, not necessarily an observable at one instant or a finite-dimensional physical state.

<a id="source-theorem-3"></a>

**Theorem 5.1 (Operational surrogate and testing ceiling).**

 <a id="op:surrogate"></a> 

*Status: Proved.*

 The family $\mu^\circ_{e,[s]}:=\mu_{e,s}$ is well defined on $S^\circ=S/{\sim_{\rm op}}$ and reproduces every stipulated record law. Taking the readout of this statistical model to be $\operatorname{id}_{S^\circ}$ gives an injective-readout surrogate. If an alternative class contains this surrogate for every source model under consideration, a level-$\alpha$ test of that class cannot have power exceeding $\alpha$ against any such source model. More generally, if for a complete experiment its source law $P$ has $\inf_{Q\in\mathcal Q}{\mathrm{TV}}(P,Q)\le\varepsilon$, every test $\varphi:D\to[0,1]$ satisfying $\sup_{Q\in\mathcal Q}\int\varphi\,dQ\le\alpha$ obeys $\int\varphi\,dP\le\alpha+\varepsilon$. 



<a id="source-proof-19"></a>

**Proof.**

Equality of all the laws is the definition of $\sim_{\rm op}$, so the surrogate family is well defined and preserves them. Identity readout is injective. The same test has the same rejection probability under equal laws. In the approximate statement, for every $Q\in\mathcal Q$, $\int\varphi\,dP\le\int\varphi\,dQ+{\mathrm{TV}}(P,Q)$; take the infimum. 

□



This is empirical non-identifiability in a specified model class, not logical undecidability. The surrogate is a statistical family. The construction does not give it a local action, a finite-dimensional Markov state, deterministic dynamics, a specified resource bound, or a particular ontology. If these structures are required of alternatives, membership must be established separately. If $S$ is measurable and the maps $s\mapsto\mu_{e,s}(A)$ are measurable, equipping $S^\circ$ with the quotient sigma-algebra makes the induced kernels measurable: the inverse image under $q$ of each kernel level set is measurable in $S$. The quotient need not be standard Borel. No regular conditional distribution on an arbitrary quotient is asserted here.



<a id="paragraph-14"></a>

#### Temporal and intervention consistency.

 Equal one-time marginals do not suffice: a single fair bit repeated at every time and independently drawn fair bits have identical one-time laws and different two-time laws. Complete experiment laws avoid this error. When the source supplies a coherent causal experiment system, copying all its complete laws preserves all equalities expressing prefix consistency, randomization, and admissible adaptive composition. For finite action and outcome alphabets, its history representation is explicit. At a positive-probability history $h_j$, with the next action $a_j$ externally selected under the stipulated intervention semantics, define 

$$

 K_{j+1}(y\mid h_j,a_j)
 =\frac{{\mathbb P}(h_j,y\mid a_0,\ldots,a_j)}
 {{\mathbb P}(h_j\mid a_0,\ldots,a_{j-1})}.

$$

 Causal consistency makes the denominator independent of $a_j$; at zero-probability histories choose any probability vector. Multiplying these kernels, and the action-policy probabilities when actions are randomized, reconstructs the source record law by the chain rule. Thus the same causal law has a representation using observed histories alone. It need not be Markovian on the present readout. An arbitrary collection of unrelated protocol laws would not supply this consistency, and the present theorem does not invent it. In general standard Borel settings one additionally needs suitable measurable conditional kernels.

<a id="source-theorem-4"></a>

**Theorem 5.2 (Quantitative failure of readout-only prediction).**

 <a id="op:radius"></a> 

*Status: Proved.*

 For a fixed experiment, suppose $p(s_0)=p(s_1)$ and $\delta={\mathrm{TV}}(\mu_{e,s_0},\mu_{e,s_1})$. Every proposed law $M_{e,p(s)}$ based only on the readout satisfies 

$$

 \max_{i=0,1}{\mathrm{TV}}\bigl(\mu_{e,s_i},M_{e,p(s_i)}\bigr)
 \ge\frac{\delta}{2}.

$$

 The constant is sharp for this pair, attained by the common law $M=\tfrac12(\mu_{e,s_0}+\mu_{e,s_1})$. More generally, suppose candidate laws obey the independently specified continuity bound ${\mathrm{TV}}(M_{e,t},M_{e,t'})\le Ld(t,t')$. Then 

$$

 \max_i{\mathrm{TV}}\bigl(\mu_{e,s_i},M_{e,p(s_i)}\bigr)
 \ge\frac{[\delta-Ld(p(s_0),p(s_1))]_+}{2}.

$$

 If certified comparison laws $\widehat\mu_i$ satisfy ${\mathrm{TV}}(\widehat\mu_i,\mu_{e,s_i})\le\eta_i$, replace $\delta$ in the last expression by $[{\mathrm{TV}}(\widehat\mu_0,\widehat\mu_1)-\eta_0-\eta_1]_+$. 



<a id="source-proof-20"></a>

**Proof.**

Apply the triangle inequality through the candidate law, or through the two candidate laws in the continuity version. For the midpoint, $\mu_{e,s_0}-M=(\mu_{e,s_0}-\mu_{e,s_1})/2$, giving equality. The comparison-law bound follows by a second triangle inequality. 

□



Theorem [5.2](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:radius) turns a verified leak into a lower bound on the error of *every* model using only the nominated readout, subject to its stated continuity restriction. It proves inadequacy of that description. It neither identifies a unique completion nor excludes an unrestricted theory whose state is the complete operational history. For general spaces the theorem asserts a pairwise lower bound; it does not assert that a globally measurable family of minimax centers exists.
