# Section 4: A constructive diagnostic for the frozen implementations

<!-- Complete paper-4 web edition. Mathematical macros used below:
\B = \{0,1\}
\F = \mathbb F_2
\TV = \operatorname{TV}
\rank = \operatorname{rank}
\supp = \operatorname{supp}
\Assign = \operatorname{Assign}
\arraystretch = 1.18
-->

<a id="section-4"></a>

## 4 A constructive diagnostic for the frozen implementations

 

<a id="section-4-1"></a>

### 4.1 Synthetic diagnostic: assumptions and readout

 In the synthetic diagnostic model, the service update is paused and an external pulse is stipulated to flip each modeled native bit independently with probability $p\in(0,1/2)$. Every complete public state can be prepared and distinguished at readout. The response table is <a id="eq:pulse"></a>


$$
Q_c(t\mid s)=p^{d_H(c(s),c(t))}(1-p)^{n-d_H(c(s),c(t))}.

$$

Equation (15).

 The algorithm receives only the labeled response table and $N$, not the native chart, a netlist, or separately labeled elementary overwrites. The data-producing model uses a chart to specify its ground truth, as any synthetic identification test must; that chart is withheld from the estimator and used only for checking.

The pulse is a diagnostic operation, not an added endogenous A1 operation. Service behavior and assignment are evaluated under the original service contract after the chart is inferred. Isolation of the probe, preparation fidelity, trial independence, timing, and the connection between statistical factors and storage degrees of freedom are assumptions needing device-level verification. This construction does not derive locality from SPC-2 or prove that a convenient independent-noise model captures physical primitives.

For [(15)](/consciousness/research/paper-4/a-constructive-diagnostic-for-the-frozen-implementations#eq:pulse), 

$$
L_{st}=\tfrac12\log\frac{1-p}{p}\,[n-2d_H(c(s),c(t))],

$$

Equation (16).

 so its rank is $n$ and its nonzero singular values are all $\frac N2|\log((1-p)/p)|$. At $p=1/8$, the integer score matrix $M_{st}=n-2d_H(c(s),c(t))$ obeys $M^{\mathsf T}M=NM$ for the matched input/output labeling used here.



<a id="section-4-2"></a>

### 4.2 Executed reconstruction and conditional assignment

 We generated exact rational rows at $p=1/8$ for $c(x)=x$, $c(x)=E(x)$, and $c(x)=H(x)$ in the same public $x$ labels. All three complete public service tables are $F$. The inferred charts, however, recover their respective native cube structures up to signed permutation. Exact row factorization, score rank, and chart correspondence pass in all cases.

The original and recoded diagnostic rows are separated by 

$$
{\operatorname{TV}}\bigl(Q_{\mathrm{id}}(\cdot\mid x),Q_E(\cdot\mid x)\bigr)=\frac{45}{256}

$$

Equation (17).

 for every public preparation $x$. The signed control gives the same pulse metric as the original. These are different diagnostic laws, not a claim that the same physical stochastic pulse has been transported through $E$.

Using each inferred chart to express the unchanged public service map, the inherited FRD-1 family extractor was run anew. It returned the results in Table [1](/consciousness/research/paper-4/a-constructive-diagnostic-for-the-frozen-implementations#tab:chart). The assignment follows conditionally from chart identification plus the retained realization contract; the diagnostic alone does not identify A2 record permissions, resources, or A3 provenance.   

Table 1. Synthetic response reconstruction followed by inherited service extraction. Every listed grouping is certified; no uncertified alternative is discarded.

<a id="tab:chart"></a> <a id="source-tabular-1"></a>

| Native implementation | Log-score rank | Connected groupings | Assigned supports |
| --- | --- | --- | --- |
| Original | 5 | 10 | 2 |
| Nonlocal recoding | 5 | 38 | 1 |
| Signed control | 5 | 10 | 2 |

 

<a id="source-corollary-1"></a>

**Corollary 3 (Conditional assignment identification).**

 If all realization fields other than a binary chart are fixed under the inherited transport contract, and the chart-compatible response family satisfies Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) or Theorem [2](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:robust), then the frozen register-doctrine assignment is independent of the remaining compatible chart choice. 

 <a id="source-proof-3"></a>

**Proof.**

Compatible charts differ by signed permutation. Apply FRD-2 P3 to the matched remaining realization fields. No conclusion follows when these fields have merely been renamed rather than established. 

□

 This corollary uses P3 rather than claiming to replace it. Its new evidence input is the response-family certificate instead of supplied coordinate-overwrite labels.



<a id="section-4-3"></a>

### 4.3 Finite-sample pulse bound and computational checks

 For $n\ge2$, off-diagonal pulse probabilities decrease strictly with Hamming distance. The gap between distance one and distance two is 

$$
g=p(1-2p)(1-p)^{n-2}.

$$

Equation (18).

 Uniform entry error below $g/2$ identifies the $n$ largest off-diagonal probabilities in each row as the cube neighbors. If each preparation is sampled independently $m$ times, Hoeffding's inequality and a union bound over $N^2$ entries give <a id="eq:sampling"></a>


$$
\Pr\{\max_{s,t}|\widehat Q(t\mid s)-Q(t\mid s)|>g/4\}
\le 2N^2\exp[-2m(g/4)^2].

$$

Equation (19).

 This standard concentration bound <a id="citation-11"></a>[[13](/consciousness/research/paper-4/references#bib-hoeffding)] supplies a conservative sufficient budget, not a minimax sample-complexity claim.

For $n=5,p=1/8$, $g=1029/16384$. Taking $m=24{,}804$ trials per preparation, or $793{,}728$ per synthetic data set, bounds the failure probability by $0.00999898$. All 32 fixed-seed simulations reconstructed their anonymous charts and satisfied the stated entry-error event. This is software simulation, not hardware evidence.

Additional checks cover all $8!=40{,}320$ labelings of the three-cube with exact graph reconstruction, 128 seeded arbitrary labelings of the 32-state cube with numerical proposals followed by exact row verification, and the rank-deficient counterexample. These checks supplement the proofs; they are neither independent experiments nor a substitute for mathematical review.
