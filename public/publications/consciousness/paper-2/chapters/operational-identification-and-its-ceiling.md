# Section 8: Operational identification and its ceiling

<!-- Complete paper-2 web edition. Mathematical macros used below:
\headrulewidth = 0.3pt
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\dist = \operatorname{dist}
\Eff = \operatorname{Eff}_{*}
\supp = \operatorname{supp}
\id = \operatorname{id}
\E = \mathbb E
\Prb = \mathbb P
\Ftwo = \mathbb F_2
\calE = \mathcal E
\calR = \mathcal R
\calN = \mathcal N
\calF = \mathcal F
\calW = \mathcal W
\ploc = P_{\mathrm{loc}}
\qop = q_{\mathrm{op}}
\Lop = \mathscr L_{\mathcal E}
\Rstar = R^{\ast}
\SPC = \textnormal{SPC-2}
\eps = \varepsilon
\ind = \mathbf 1
\normone = \left\lVert#1\right\rVert_1
-->

<a id="section-8"></a>

## 8 Operational identification and its ceiling

<a id="sec:identification"></a> 

<a id="section-8-1"></a>

### 8.1 The compared object is a model together with its preparation

 A failure to reconstruct an entire source does not imply that every source attribute is unknowable. Conversely, a successful effective model does not identify the ontology of its source. To state the distinction precisely, let $\Xi$ be a class of candidate model/preparation pairs. It need not be finite. Fix the admitted family ${\mathcal E}$ of complete experiments, including their preparations, adaptive policies, stopping rules, retained records and access resources.

Write <a id="eq:operational-lawmap"></a>


$$

 {\mathscr L_{\mathcal E}}(\xi)=(P^e_\xi)_{e\in{\mathcal E}},\qquad
 \xi\equiv_{{\mathcal E}}\xi'\ \Longleftrightarrow\ {\mathscr L_{\mathcal E}}(\xi)={\mathscr L_{\mathcal E}}(\xi'),
 \qquad{q_{\mathrm{op}}}:\Xi\to\Xi/{\equiv_{{\mathcal E}}}.

$$

Equation (8.1).

 This quotient can compare rival ontologies without pretending they are states of one already agreed physical model. It is an exact-law equivalence class, not necessarily a present observable, a computable object, a finite-dimensional Markov state, or a physical surrogate.

<a id="source-theorem-7"></a>

**Theorem 8.1 (Exact-law attribute identification).**

<a id="p2-27"></a> For an attribute $\alpha:\Xi\to V$, the following are equivalent: $\alpha$ is determined by ${\mathscr L_{\mathcal E}}$ within $\Xi$; it is constant on every $\equiv_{{\mathcal E}}$-class; and there exists a unique map $\overline\alpha$ on the quotient such that <a id="eq:attribute-factor"></a>


$$

 \alpha=\overline\alpha\circ{q_{\mathrm{op}}}.

$$

Equation (8.2).

 If constancy fails, the identified object at an exact law family $k$ is the set <a id="eq:identified-set"></a>


$$

 \mathcal A(k)=\{\alpha(\xi):{\mathscr L_{\mathcal E}}(\xi)=k\},

$$

Equation (8.3).

 not a uniquely determined label. 

 <a id="source-proof-21"></a>

**Proof.**

Equal complete laws cannot determine different attribute values. Conversely, constancy defines $\overline\alpha([\xi])=\alpha(\xi)$ unambiguously; surjectivity gives uniqueness. The factorization recovers the attribute from the class specified by the law family. When values differ within a class, its fibre image is exactly [Equation 8.3](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:identified-set). 

□

 This is a set-theoretic factorization theorem applied to an operational identification problem. If the spaces and $\alpha$ are measurable and the quotient receives the quotient sigma-algebra, the induced $\overline\alpha$ is measurable: its pulled-back inverse images are those of $\alpha$. This does not guarantee a standard Borel quotient or regular conditional distributions on an arbitrary quotient.

The result neither certifies a label from finitely many observations nor proves its intended phenomenal meaning. An attribute could be fixed across all compatible models even though other parts of those models remain unidentified. The correct obstruction is disagreement about the attribute *inside the same operational class*, not incompleteness in the abstract.



<a id="section-8-2"></a>

### 8.2 Surrogates and statistical testing

 The predecessor source/readout analysis distinguishes a nominated readout from the full permitted experiment family <a id="citation-13"></a>[[22](/consciousness/research/paper-2/references#bib-RodgersSealed2026)]. Copying complete laws onto their operational quotient preserves those laws but does not, by itself, build a finite physical apparatus. The identity readout used to describe that surrogate is not a new admitted experiment returning the entire equivalence class; the stipulated experiment family remains unchanged.

<a id="source-theorem-8"></a>

**Theorem 8.2 (Statistical surrogate and testing ceiling).**

<a id="p2-28"></a> The laws $P^{e,\circ}_{[\xi]}=P^e_\xi$ define a statistical model on $\Xi/{\equiv_{{\mathcal E}}}$. Giving this model identity readout yields an injective-readout surrogate of all stipulated experiments. If the admitted alternative class contains such a surrogate for every source model under consideration, no test based on those experiments distinguishes the model from its surrogate.

More quantitatively, a randomized test $\varphi\in[0,1]$ with level at most $\alpha_{\mathrm{test}}$ against a nonempty alternative-law family $\mathcal Q$ has, under target law $P$, power at most <a id="eq:test-power"></a>


$$

 \min\left\{1,\alpha_{\mathrm{test}}+\inf_{Q\in\mathcal Q}{\operatorname{TV}}(P,Q)\right\}.

$$

Equation (8.4).

 For two binary-labeled candidates with equal prior weights, every classification test has mean error at least <a id="eq:binary-error"></a>


$$

 \tfrac12\bigl[1-{\operatorname{TV}}(P,Q)\bigr].

$$

Equation (8.5).

 For finite record alphabets the latter bound is attained by a likelihood-ratio test. 

 <a id="source-proof-22"></a>

**Proof.**

The surrogate laws are well defined by [Equation 8.1](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:operational-lawmap). Equal laws give equal probabilities to every test outcome. For each alternative $Q$, ${\mathbb E}_P\varphi\le{\mathbb E}_Q\varphi+{\operatorname{TV}}(P,Q)$; taking the infimum proves [Equation 8.4](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:test-power). If $\varphi$ declares the first binary label, the average error is $\tfrac12[1-({\mathbb E}_P\varphi-{\mathbb E}_Q\varphi)]$, proving [Equation 8.5](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:binary-error). Choosing the event where $P$ exceeds $Q$ attains it on a finite alphabet. 

□

 The surrogate is not automatically a local, finite-memory or resource-bounded physical realization. Those restrictions require separate membership proofs. Nor is a statistical representation without a phenomenal symbol automatically unconscious. Deleting an interpretation from notation is not an intervention removing experience from a physical system.

When the original complete laws form a causally consistent experiment system with finite action and record alphabets, a history representation is explicit. At a positive-probability history $h_t$, divide the probability of its extension by the probability of its prefix, with the next action externally selected under the fixed intervention semantics. Causal consistency makes the prefix denominator independent of the later action. The chain rule reconstructs all finite policy laws. At impossible histories one may choose an arbitrary normalized continuation without changing the admitted law. This gives a history-based realization; it need not be Markovian on a present detector reading or have a finite state space.



<a id="section-8-3"></a>

### 8.3 Identification from exact laws is not uniform finite certification

 <a id="source-proposition-11"></a>

**Proposition 8.3 (A boundary attribute without uniform finite certification).**

<a id="p2-29"></a> Consider independent Bernoulli$(p)$ observations with $p\in[0,1/4]$, and the attribute $\alpha(p)={\mathbf 1}\{p>0\}$. Its exact one-trial law identifies the attribute. For every fixed sample size $n$, however, there is no test with uniformly nontrivial power above its level against all $p>0$. 

 <a id="source-proof-23"></a>

**Proof.**

At $p=0$, only the all-zero record occurs. Its probability at $p>0$ is $(1-p)^n$, so <a id="eq:bernoulli-tv"></a>


$$

 {\operatorname{TV}}(P_p^{\otimes n},P_0^{\otimes n})
 =1-(1-p)^n\le np.

$$

Equation (8.6).

 By [Equation 8.4](/consciousness/research/paper-2/operational-identification-and-its-ceiling#eq:test-power), a level-$\alpha_{\mathrm{test}}$ test has power at most $\alpha_{\mathrm{test}}+np$. Letting $p\downarrow0$ excludes a uniform positive gap. For each fixed positive $p$, the rule “observe at least one success” is nevertheless pointwise consistent as $n\to\infty$. 

□

 The same arithmetic applies to independently reset weak-SWAP trials that register whether a swap occurred. An unbounded repetition supremum distinguishes every positive $g$ from zero with limiting distance one. That does not make a tiny coupling detectable at no cost, and it does not select a phenomenal threshold. Resets, stationarity and independence remain physical permissions rather than consequences of a statistical limit.

The three levels should therefore be kept separate: equality of exact laws, a finite-resource ability to resolve different laws, and the interpretation assigned to those laws. Adding a genuinely new access operation changes ${\mathcal E}$ and reopens the identification question. Nothing here denies a subject's first-person acquaintance; the theorem concerns only the evidence included in its declared experiment family.
