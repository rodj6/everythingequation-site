<!-- Complete paper-4 web edition. Mathematical macros used below:
\B = \{0,1\}
\F = \mathbb F_2
\TV = \operatorname{TV}
\rank = \operatorname{rank}
\supp = \operatorname{supp}
\Assign = \operatorname{Assign}
\arraystretch = 1.18
-->

# Overview and publication identity

Identifying Binary Realizations from Intervention Laws: Certificates, Recoding Obstructions, and a Bounded SPC-2/IIT Comparison

 Jeremy Rodgers  
 Independent Researcher  
 Website: [everythingequation.com](https://www.everythingequation.com)  
 DOI: [10.5281/zenodo.23075828](https://doi.org/10.5281/zenodo.23075828)

 30 September 2026  
 Version 1.1-RC1 — release candidate  
 AI-assisted review completed; no independent human mathematical review.  
Public supporting-record identifier pending.



 

**Abstract.**

A constitutive assignment may depend on a system's causal decomposition even when its complete decoded behavior is fixed. We ask what additional response evidence identifies a binary chart without supplied coordinate labels. On a completely distinguished set of $2^n$ states, strictly positive laws that factor in an unknown binary chart identify that chart up to signed permutation when their uniformly centered log-probability matrix has rank $n$. Its row-space projector reconstructs Hamming adjacency, with an explicit sufficient spectral-error certificate. A synthetic five-register demonstration defines independent-flip responses in each implementation's modeled storage chart while withholding that chart from the estimator. Reconstruction, combined with unchanged service and realization contracts, recovers the inherited SPC-2 two-versus-one assignments; it does not validate the perturbation model on a physical device. We also characterize affine transport of product laws, including deterministic and fair coordinates. For the frozen recoding, no fully supported, exactly conjugate native product-kernel family approaches the deterministic endpoint, although sparse common families exist. An official PyPhi search over all matched states, both complete presets, and a frozen spatial pair-macro domain preserves the CCI-1 positive-complex comparison. The response method identifies a candidate microchart, not an intrinsic macrograin, and is potentially usable by different constitutive theories. These are finite specializations and applications within established identifiable-component ideas. Physical conformance of the response model and empirical consciousness attribution remain unestablished.

---

# Section 1: Question, scope, and relation to previous work

<a id="section-1"></a>

## 1 Question, scope, and relation to previous work

 A complete behavioral description need not specify which changes are local to one physical storage degree of freedom. This distinction matters whenever a theory maps causal organization to a constitutive assignment. The central question here is not whether arbitrary state relabelings preserve a fixed model. It is whether additional evidence, short of a labeled netlist or a complete labeled overwrite algebra, can identify the decomposition used by that model.

SPC-2 is a candidate finite psychophysical constitution conditional on a certified realization. A1 admits recurrent organizations satisfying the native covering-return and predictive-nontriviality conditions; A2 assigns the complete endogenous predictive organization; A3 specifies nonbranching provenance continuation. Its awareness interpretation and constitutive axioms are not inferred from the calculations in this paper <a id="citation-1"></a>[[1](/consciousness/research/paper-4/references#bib-mono), [2](/consciousness/research/paper-4/references#bib-p2)]. Paper 3 concerns recovering effective stochastic interfaces from restricted data; it does not select a physical primitive decomposition <a id="citation-2"></a>[[3](/consciousness/research/paper-4/references#bib-p3)].

FRD-1 supplied a finite logical realization doctrine and preserved both stable and ambiguous cases. FRD-2 then proved register-local assignment covariance and constructed a recoding obstruction <a id="citation-3"></a>[[4](/consciousness/research/paper-4/references#bib-frd1), [5](/consciousness/research/paper-4/references#bib-frd2)]. Those results already establish that signed-coordinate changes preserving the declared intervention algebra transport the assignment. Reproving this covariance would not answer the present identification question.

Our contribution is a finite identification-and-comparison construction. Response distributions replace supplied coordinate labels as chart evidence, under a declared product-response model. A projector reconstructs a binary cube and provides a quantitative sufficient stability condition. The executed application is a *synthetic demonstration*: each generator specifies independent flips in its own modeled storage chart, and that chart is withheld from the estimator. The reconstruction tests inference from the response laws, not whether nature realizes the chosen noise model. We then classify admissible common stochastic laws and execute a bounded official IIT grain comparison. The general strategy has substantial antecedents in conditional nonlinear independent-component analysis (ICA), finite-alphabet ICA, and causal abstraction <a id="citation-4"></a>[[7](/consciousness/research/paper-4/references#bib-hyvarinen), [8](/consciousness/research/paper-4/references#bib-khemakhem), [9](/consciousness/research/paper-4/references#bib-yeredor), [10](/consciousness/research/paper-4/references#bib-painsky), [11](/consciousness/research/paper-4/references#bib-rubenstein), [12](/consciousness/research/paper-4/references#bib-beckers)]; the result-level attribution is made explicit in Section 7. Physical conformance is a future obligation, not an outcome of this computation.



<a id="paragraph-1"></a>

#### Three different equivalence questions.

 A coordinate change transports all parts of one realization. A different storage implementation can instead have different elementary interventions while preserving decoded behavior. Selecting a description of one fixed device is a third problem. Our results do not identify these questions. In particular, a theory's different assignments to genuinely different causal implementations are not, by themselves, evidence of inconsistency.



<a id="paragraph-2"></a>

#### Microchart identification is not macrograin selection.

 A microchart is a bijective binary coordinate description within the response-model class. IIT's intrinsic-unit construction instead evaluates admissible units and grains on a supplied causal substrate <a id="citation-5"></a>[[15](/consciousness/research/paper-4/references#bib-intrinsic)]. The two tasks need not return the same kind of object. Independently justified response evidence could help establish the input microdescription for SPC-2, IIT, or another theory; the chart-identification method is not specific to SPC-2. A difference between such a chart and an IIT-selected macrograin would not, by itself, show that IIT selected physically incorrect units. Here the comparative question is only whether the inherited formal differences survive the stated grain-search domain.

---

# Section 2: Inherited benchmark and conditional assignment

<a id="section-2"></a>

## 2 Inherited benchmark and conditional assignment

 On $x=(a_0,a_1,a_2,j_0,j_1)\in{\{0,1\}}^5$, with little-endian indexing, retain <a id="eq:F"></a>
<a id="eq:E"></a>


$$
\begin{aligned}F(x)&=(a_1,a_2,a_0\oplus a_1,\neg j_1,j_0),\\
E(x)&=(a_0\oplus j_0,a_1,a_2,j_0\oplus a_1,j_1),\\
E^{-1}(z)&=(z_0\oplus z_3\oplus z_1,z_1,z_2,z_3\oplus z_1,z_4),\\
G(z)&=(z_1\oplus\neg z_4,z_2,z_0\oplus z_3,z_2\oplus\neg z_4,z_3\oplus z_1).
\end{aligned}
$$

Equation (1, 2, 3, 4).

 Thus $EF=GE$. All states and both inverse identities are checked exactly. The original public state is $x$; the recoded circuit reports $E^{-1}(z)$. Matching whole-state loads and enable operations preserve complete decoded traces, not merely one trajectory.

Under the inherited register doctrine, the original system has closed recurrent supports $\{a_0,a_1,a_2\}$ and $\{j_0,j_1\}$, with 8 and 4 predictive classes. All ten admissible connected groupings agree. The recoded essential graph is strongly connected; all 38 admissible groupings yield one five-register support with 32 classes. These are inherited conditional results, not observations of subjects <a id="citation-6"></a>[[5](/consciousness/research/paper-4/references#bib-frd2), Section 4, P4].

Let $r_i^b$ denote an elementary overwrite of coordinate $i$. FRD-2 P2 characterizes bijections transporting these operations as signed permutations, and P3 transports the complete SPC-2 assignment when clocks, resources, records, preparations, and provenance are also matched <a id="citation-7"></a>[[5](/consciousness/research/paper-4/references#bib-frd2), Section 3.2, P2–P3]. But $E$ does not transport this local algebra: changing $a_1$ can change both $z_1$ and $z_3$. The new work therefore seeks evidence for a chart rather than another covariance assertion.



<a id="paragraph-3"></a>

#### Imported assignment contract.

 The finite specialization fixes synchronous Boolean storage, the service tick and permitted preparations, essential-dependence routes, full successor-state records, resources, actual state, and operative provenance. It enumerates the doctrine's connected groupings and tests closure, executable covering return, predictive nontriviality, and certification; uncertified alternatives cannot simply be discarded when asserting whole-family agreement <a id="citation-8"></a>[[4](/consciousness/research/paper-4/references#bib-frd1), Sections 2–4, FRD-01–FRD-04]. P3 transports the assignment only with those remaining fields matched. The response certificate below does not supply them. The accompanying dependency index locates the full hypotheses, extractor, and preserved failures <a id="citation-9"></a>[[20](/consciousness/research/paper-4/references#bib-support)].

The signed control is 

$$
H(x)=(\neg j_1,j_0,\neg a_2,a_1,a_0),\qquad F_H=HFH^{-1}.
$$

Equation (5).

 CCI-1's official native-grain comparison selected IIT-2023 supports $\{a_1,a_2\}$ and $\{j_0,j_1\}$, each with $\varphi_s=2$, versus all five registers after $E$, again with $\varphi_s=2$. Its complete 2026 preset selected no positive complexes <a id="citation-10"></a>[[6](/consciousness/research/paper-4/references#bib-cci), Sections 2–4]. The original support disagreement is therefore already more precise than a difference of counts.

---

# Section 3: Identification from an unlabeled response family

<a id="section-3"></a>

## 3 Identification from an unlabeled response family

 

<a id="section-3-1"></a>

### 3.1 Evidence contract

 Let $S$ be a completely distinguished finite state set with $N=2^n$ elements. The evidence consists of $M$ strictly positive, normalized response rows $Q_\alpha(s)$, indexed by independently specified preparations or intervention contexts $\alpha$. The unknown is a bijective binary chart $c:S\to{\{0,1\}}^n$. The candidate class assumes <a id="eq:product"></a>


$$
Q_\alpha(s)=\prod_{i=1}^n q_i(\alpha)^{c_i(s)}[1-q_i(\alpha)]^{1-c_i(s)},\qquad 0<q_i(\alpha)<1.

$$

Equation (6).

 The chart and factor probabilities are not provided to the reconstruction. There is no assumption that the unknown chart is an affine function of the public labels.

This is a substantive model restriction. Complete state discrimination, response laws stationary within the experiment, and product factorization within a fixed binary cardinality class require justification for an actual apparatus. A hidden-state refinement, a different temporal contract, or arbitrary multivalued primitive factors is not excluded by observed rank alone. For example, the same 32 observed states can be described as one 32-valued variable, for which single-factor independence imposes no restriction; an unobserved variable can also refine the carrier. The binary and complete-readout assumptions, not the rank calculation, delimit those alternatives.

Define uniform output centering, not centering under a stationary probability law: <a id="eq:L"></a>


$$
L_{\alpha s}=\log Q_\alpha(s)-\frac1N\sum_{t\in S}\log Q_\alpha(t).

$$

Equation (7).

 All logarithms in the identification results are natural; changing base rescales singular values and errors together.

<a id="source-theorem-1"></a>

**Theorem 1 (Full-rank binary chart identification).**

<a id="thm:identify"></a> Suppose [(6)](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#eq:product) holds for a bijective chart and ${\operatorname{rank}} L=n$. Every other bijective binary chart making the same response family product differs by a permutation and independent complementation of coordinates. The orthogonal projector $P$ onto the row space of $L$ satisfies <a id="eq:projector"></a>


$$
P_{st}=\frac{n-2d_H(c(s),c(t))}{N}.

$$

Equation (8).

 In particular, the chart can be reconstructed from this projector up to the stated ambiguity. 

 <a id="source-proof-1"></a>

**Proof.**

Set $b_i(s)=(-1)^{c_i(s)}$. Because $c$ enumerates the complete cube, each $b_i$ has uniform mean zero and $BB^{\mathsf T}=NI_n$, where $B$ has rows $b_i$. Taking centered logarithms in [(6)](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#eq:product) gives 

$$
L=AB,\qquad A_{\alpha i}=\tfrac12\log\frac{1-q_i(\alpha)}{q_i(\alpha)}.

$$

Equation (9).

 Rank $n$ makes the row space of $L$ exactly the span of the $b_i$. For another product chart with sign matrix $B'$, this same row space is contained in the $n$-dimensional span of $B'$, hence equals it.

A row of $B'$ has form $f=\sum_i m_i b_i$ and takes only values $\{-1,1\}$. The complete cube permits choosing all signs of $b$ independently, so $\max_s|f(s)|=\sum_i|m_i|=1$. Uniform averaging of $f^2$ gives $\sum_i m_i^2=1$. Equality of these two norms requires exactly one nonzero coefficient, equal to $1$ or $-1$. The rows of $B'$ are independent, so their chosen coordinates are distinct. Thus $B'$ is a signed row permutation of $B$.

Finally $P=B^{\mathsf T}B/N$. The inner product of two cube sign vectors is $n-2d_H$, proving [(8)](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#eq:projector). Recover the graph by joining distinct $s,t$ when $P_{st}=(n-2)/N$. Choose a root $r$ and order its $n$ neighbors $r_i$. Graph distances yield 

$$
\widetilde c_i(s)=\frac{d(r,s)-d(r_i,s)+1}{2}.

$$

Equation (10).

 These are binary coordinates; changing the root or neighbor ordering is precisely the residual ambiguity. 

□



The theorem is sufficient, not a minimal-evidence theorem. In particular, rank deficiency does not itself prove ambiguity, and $M=n$ is not claimed to be a necessary number of contexts for every identifiable family. Rank exceeding $n$ excludes the exact product class. A proposed graph must be checked for symmetry, degree, connectedness, cube-coordinate consistency, and bijection; the implementation rejects a noncube rather than forcing a chart.



<a id="paragraph-4"></a>

#### Exact and numerical computation.

 SVD provides a proposed row space, not an exact certificate for arbitrary logarithms. For rational response rows, we check the proposed chart by exact factorization of every row. In the executed pulse family below, centered logs are a known scalar times an integer matrix whose rank is verified with rational elimination. Thus its exact rank claim does not depend on a floating-point threshold. No general algorithm for deciding the exact rank of arbitrary symbolic logarithms is asserted.

 

<a id="section-3-2"></a>

### 3.2 A quantitative certificate under error

 <a id="source-theorem-2"></a>

**Theorem 2 (Projector-margin certificate).**

<a id="thm:robust"></a> Let $\widehat L$ be an observed centered-log matrix and $\widehat\sigma_n$ its $n$th singular value. Let $\mathcal C_e$ be the nonempty class of exact binary product-response models on $S$ whose centered-log matrices satisfy $\|\widehat L-L\|_2\le e$. If <a id="eq:margin"></a>


$$
\widehat\sigma_n>Ne,

$$

Equation (11).

 all models in $\mathcal C_e$ have the same chart up to signed permutation. For $\widehat P$ the projector onto the leading $n$ right singular vectors, their common cube adjacency is recovered by <a id="eq:threshold"></a>


$$
s\ne t,\qquad \widehat P_{st}>\frac{n-3}{N}.

$$

Equation (12).

 

 <a id="source-proof-2"></a>

**Proof.**

Each exact product matrix has rank at most $n$. Since $\widehat\sigma_n>e$, the singular-value perturbation inequality rules out rank less than $n$. Let $P$ be its row-space projector and write the leading SVD factors as $\widehat L^{\mathsf T}\widehat U=\widehat V\widehat\Sigma$. Since $(I-P)L^{\mathsf T}=0$, 

$$
(I-P)\widehat V\widehat\Sigma=(I-P)(\widehat L-L)^{\mathsf T}\widehat U.

$$

Equation (13).

 Consequently $\|(I-P)\widehat V\|_2\le e/\widehat\sigma_n$. For equal-rank orthogonal projectors this is $\|P-\widehat P\|_2$. Every entry error is therefore less than $1/N$. True neighbors have value $(n-2)/N$, whereas other distinct vertices have value at most $(n-4)/N$. Threshold [(12)](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#eq:threshold) recovers every edge correctly. Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) completes the conclusion, uniformly for every model in the uncertainty class. 

□



Nonemptiness matters: an inconsistent model class cannot be reported as successful identification. Existence, the error bound, and any certified singular-value bounds must be supplied or checked. The code's 64 numerical perturbation diagnostics illustrate the inequality but do not constitute interval-certified experimental inference.

A probability-domain bound can imply a log-domain bound when probabilities are bounded away from zero. For example, if true entries are at least $q_{\min}>d$ and entry errors are at most $d$, then the centered-log spectral error is at most $\sqrt{MN}\,d/(q_{\min}-d)$. This conservative bound becomes poor for rare events. The pulse-specific reconstruction below avoids estimating tiny probabilities through logarithms.



<a id="section-3-3"></a>

### 3.3 A rank-deficient ambiguity

 On three bits, vary the first two Bernoulli biases across contexts while leaving the third fair. The centered-log rank is two. Both charts 

$$
(x_0,x_1,x_2),\qquad (x_0,x_1,x_2\oplus x_0x_1)

$$

Equation (14).

 make every response row product. Conditional complementation preserves the independent fair third bit, yet this is not a signed permutation. Exact enumeration verifies this example. Uniform response rows have rank zero; deterministic rows fail strict positivity. Neither is certified by Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify).

---

# Section 4: A constructive diagnostic for the frozen implementations

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

---

# Section 5: Which stochastic continuations remain common?

<a id="section-5"></a>

## 5 Which stochastic continuations remain common?

 

<a id="section-5-1"></a>

### 5.1 The admissibility question

 The official native IIT substrate requires next-unit conditional independence given the preceding complete state <a id="citation-12"></a>[[17](/consciousness/research/paper-4/references#bib-pyphi), [18](/consciousness/research/paper-4/references#bib-conditional)]. A common stochastic comparison would additionally require <a id="eq:common"></a>


$$
K^G_\epsilon(Ey\mid Ex)=K^F_\epsilon(y\mid x).

$$

Equation (20).

 These are separate conditions. Adding the same independent flip rate in each implementation's own chart does not in general satisfy [(20)](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#eq:common). Factoring the transported row into its marginals would change the joint process.

<a id="source-corollary-2"></a>

**Corollary 4 (Full-rank common-law rigidity).**

<a id="cor:commonrank"></a> Suppose an exactly conjugate pair of strictly positive transition kernels is product in both native binary charts. If the centered-log matrix of the response rows has rank $n$, the chart correspondence must be a signed permutation. 

 <a id="source-proof-4"></a>

**Proof.**

Pull the second kernel back to the first state set. Exact conjugacy makes its response rows identical after reindexing the input states, while its output chart is the conjugating bijection. Both charts factor the same positive family; input-row permutation does not change rank. Apply Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify). 

□

 This observation connects identification and admissibility even for nonlinear recodings. The affine classification below describes the boundary cases—missing support or unexcited fair directions—in which common product laws can still occur.

The following classification includes deterministic coordinates, which are essential near the frozen endpoint. It is a finite binary specialization of ICA rigidity and its exceptions <a id="citation-13"></a>[[9](/consciousness/research/paper-4/references#bib-yeredor)]; priority for a general independence-preservation theorem is not claimed.

<a id="source-theorem-3"></a>

**Theorem 5 (Affine product-law compatibility).**

<a id="thm:affine"></a> Let $X_i$ be independent Bernoulli variables with parameters $p_i\in[0,1]$, and $Z=AX\oplus b$ for invertible $A$ over ${\mathbb F_2}$. Let $S=\{i:0<p_i<1\}$ and let $J$ be the union of the supports of the columns $A_i$ for $i\in S$. Then the coordinates of $Z$ are independent if and only if both conditions hold: 

1. $|J|=|S|$;

2. for $B=A_{J,S}$, every row of $B^{-1}$ corresponding to an index $i\in S$ with $p_i\ne1/2$ has Hamming weight one.

 For $S=\varnothing$, the empty conditions mean the deterministic output is product. 

 <a id="source-proof-5"></a>

**Proof.**

Absorb deterministic input values into the output translation. The input support is the complete coordinate face on $S$, and the output support is an affine subspace of dimension $|S|$. An output coordinate varies exactly when it belongs to $J$. A product distribution with these varying coordinates has the entire $J$-face as support. Hence independence requires $|J|=|S|$. Conversely this equality and invertibility of $A$ make $B$ square and invertible, and make the output support that complete face.

Restrict to the varying coordinates, whose probabilities are strictly positive. The log-density of $X_S$ is a constant plus a sum of singleton Walsh characters with coefficients $\frac12\log((1-p_i)/p_i)$. Under $B^{-1}$, these become characters indexed by the distinct rows of $B^{-1}$; a translation can change their signs but not their supports. A positive distribution on a complete binary cube is product exactly when its log-density contains no Walsh characters of degree at least two. Distinct rows cannot cancel each other's characters. The nonzero coefficients are precisely those with $p_i\ne1/2$. Condition two is therefore necessary and sufficient. 

□



<a id="source-corollary-3"></a>

**Corollary 6 (Biased near-deterministic errors).**

<a id="cor:small"></a> If $0\le p_i<1/2$ for all $i$, $AX\oplus b$ is product if and only if every active column $A_i$, $p_i>0$, is a singleton coordinate vector. These singleton columns are distinct. 

 <a id="source-proof-6"></a>

**Proof.**

All active log coefficients are nonzero. Theorem [5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#thm:affine) forces every row of $B^{-1}$ to be a singleton, hence $B$ is a permutation matrix. Including the zero rows outside $J$ gives the stated condition. The converse is immediate independence of distinct surviving inputs. 

□



For [(2)](/consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment#eq:E), the linear columns are 

$$
e_0,\quad e_1+e_3,\quad e_2,\quad e_0+e_3,\quad e_4.

$$

Equation (21).

 Consequently, near the deterministic endpoint, <a id="eq:sparse"></a>


$$
E\eta\ \hbox{has independent coordinates}\quad\Longleftrightarrow\quad p_1=p_3=0.

$$

Equation (22).

 When all five $p_i$ are strictly between zero and one, the inverse rows of $E$ instead give <a id="eq:full"></a>


$$
E\eta\ \hbox{has independent coordinates}\quad\Longleftrightarrow\quad p_0=p_3=\tfrac12.

$$

Equation (23).

 The latter case is compatible but cannot approach a deterministic error law.

<a id="source-corollary-4"></a>

**Corollary 7 (No fully supported common native continuation).**

<a id="cor:nointerior"></a> There is no family satisfying [(20)](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#eq:common), product in both native charts, fully supported for every sufficiently small positive $\epsilon$, and converging rowwise to the frozen deterministic $F$ and $G$. 

 <a id="source-proof-7"></a>

**Proof.**

Any product row tending to $F(x)$ can be written $F(x)\oplus\eta$ with independent error probabilities $p_i(x,\epsilon)\to0$. There are finitely many states and coordinates, so all these probabilities lie below $1/2$ for sufficiently small $\epsilon$. Equation [(22)](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#eq:sparse) forces $p_1(x,\epsilon)=p_3(x,\epsilon)=0$ in every row, contradicting full support. The argument permits state-dependent error probabilities. 

□



This is not a prohibition of all stochastic comparisons. For example, $(p_0,p_1,p_2,p_3,p_4)=(p,0,p,0,p)$ gives a sparse common family. Separately implemented independent-noise systems can also be compared, but they are not the same transported process. Enlarging the substrate with latent noise sources, using a different time step, or changing the model's causal factorization requires a new comparison contract.



<a id="section-5-2"></a>

### 5.2 Checks and official admission tests

 Exact joint-law tests agree with Theorem [5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#thm:affine) on all $5^5=3{,}125$ parameter choices from $\{0,1/4,1/2,3/4,1\}$ for $E$; 725 are compatible. The near-endpoint and full-support subgrids each contain 27 compatible cases out of 243. A further 1,024 seeded invertible matrices in dimensions two through five agree with the criterion.

For the familiar independent Bernoulli-$p$ error family, two transported outputs are $\eta_1$ and $\eta_3\oplus\eta_1$, whose covariance is $p(1-p)(1-2p)$. It equals $21/256$ at $p=1/8$. The official PyPhi constructor accepts the original product TPM but raises `ConditionallyDependentError` for its exact transported joint law. It accepts both native TPMs of the sparse common example and of the compatible full-support example $(1/2,1/8,1/8,1/2,1/8)$. All accepted joint laws round-trip exactly through the official conversion interface.

No stochastic complex or SPC-2 admission phase diagram is claimed. The compatibility theorem supplies the useful bounded result here; a numerical sweep of a changed or invalid process would not strengthen it.

---

# Section 6: Executed official intrinsic-grain comparison

<a id="section-6"></a>

## 6 Executed official intrinsic-grain comparison

 

<a id="section-6-1"></a>

### 6.1 Frozen domain and environment

 IIT's intrinsic-unit framework explicitly addresses causal grain <a id="citation-14"></a>[[14](/consciousness/research/paper-4/references#bib-iit2023), [15](/consciousness/research/paper-4/references#bib-intrinsic)]. Its existence should not be confused with deriving a micro-level substrate from a bare transition table. We restored the archived Python 3.13.15 environment and official PyPhi wheel `2.0.0rc3.dev6+g2b98c1d5b`, revision `2b98c1d5bba246c042fd1c65618ebad86196342a`. The complete canonical presets, not hand-mixed options, specify the 2023 and 2026 analyses. The intrinsic-units article's publication year does not determine the integration preset used by its examples <a id="citation-15"></a>[[19](/consciousness/research/paper-4/references#bib-grainhelp)].

The primary contract permits at most two micro constituents per macro unit, one update per unit, one hierarchy level, all nonconstant binary maps modulo output complementation, no background apportionment, and all official disjoint assemblies and admissibility/exclusion rules. There are seven pair maps for each two-constituent footprint and five native units, or 75 raw unit candidates before validity. The exact signed-control transport preserves constituent stakes and map partitions, not merely the same command-line flags. The cost estimate was 2,061 systems and 36,261 partition sweeps per cell as upper bounds; pruning was disabled for the primary comparison.

The pair bound is the smallest spatial extension beyond individual units, while exhaustive pair mappings avoid choosing a particular favorable aggregation rule. It is a bounded stress test, not a claim that larger searches are impossible or unnecessary for an all-grain conclusion. The native CCI-1 outcomes were already known. Local records place the contract lock at 20:26:13 UTC and the first recorded primary completion at 20:26:51 UTC on 30 September 2026. This is a same-author local protocol, not an externally preregistered or blinded test; the timestamps and hashes are provenance records, not independent evidence of preregistration.

All 32 matched original states are evaluated for the original, recoded, and signed-control systems under both presets. Each of the 192 cells runs in its own process. Three local subprocesses ran concurrently; computation was not delegated to another model. Official results are serialized and reloaded with equality checks. A separate fresh-process replay repeats all six state-zero cells. This is same-workflow repeatability, not independent replication.



<a id="section-6-2"></a>

### 6.2 Results and zero-valued returned objects

 Table [2](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#tab:grain) gives the positive selected organizations. Official validity retains 19 units per 2023 cell: five native units and fourteen pair-macro candidates. In the 2026 cells, the constituent-positivity gate leaves only the five native units. Thus the two presets do not have equally extensive surviving macro competition. Within this domain, no positive macro selection replaces the inherited native selections: both positive original 2023 complexes remain, the recoded selection remains all five native units, and the 2026 selection remains empty.   

Table 2. Positive complexes in every matched state of the frozen pair-macro search. The signed control transports the original result. This is not optimization over all spatial and temporal grains.

<a id="tab:grain"></a> <a id="source-tabular-2"></a>

| Preset | Original | Recoded |
| --- | --- | --- |
| IIT 2023 | $\{a_1,a_2\}$ and $\{j_0,j_1\}$, each $\varphi_s=2$ | All five native units, $\varphi_s=2$ |
| IIT 2026 | No positive complexes | No positive complexes |

 

The completed primary run contains 17,800 evaluation records. All 64 matched state–preset comparisons with the signed control agree on the retained unit domain, evaluation records, positive selections, and ties. The 3,136 native evaluation records encountered in the new search match the inherited CCI-1 table. All 192 official serialization round trips pass, and six fresh-process state-zero repeats reproduce the compared scientific fields. There are no unresolved tie groups in this bounded result. Raw output includes 160 zero-valued returned objects across the primary cells, retained separately from the 160 positive complexes.

The macro interface can return zero-valued objects in its `complexes` collection. The official complex object's truth value tests positive integration. We preserve those objects in raw output and do not count them as positive complexes. This reporting distinction is essential: interpreting the raw collection length as a subject count would contradict the package's own positivity semantics. The adapter does not change the official selection code or numerical values.

The direct comparison checks selected unit partitions, values, valid-unit domains, evaluation records, and ties under the signed control. It does not assert that an arbitrary $E$ maps native subsets to native subsets. Nor does matching positive supports and values alone prove equivalence of all unselected structures. CCI-1's earlier detailed structure records remain separately preserved.



<a id="paragraph-5"></a>

#### Preserved pilot-summary schema.

 The first archived 2023/original/state-zero summary omits the later adapter field `official_truth_value` on its three returned objects. Their recorded integration values and the official object agree with the later schema; this is a metadata difference, not a numerical correction. The original remains unchanged. A separately labeled derivative adds the three Boolean values, with a machine-readable change log and a comparison to the saved hostile-review replay. No original value, selection, or failed comparison is removed <a id="citation-16"></a>[[20](/consciousness/research/paper-4/references#bib-support)].



<a id="section-6-3"></a>

### 6.3 Scope of the deterministic gate

 The newer preset incorporates the intrinsic-information requirement, and its deterministic-zero consequence is already explained by the authors <a id="citation-17"></a>[[16](/consciousness/research/paper-4/references#bib-mayner)]. Official intrinsic-unit admissibility requires positive integration of the constituent system before a candidate's own mapping or update grain is used <a id="citation-18"></a>[[15](/consciousness/research/paper-4/references#bib-intrinsic)]. Therefore, for this construction with fixed native backgrounds, every hierarchy whose first new unit must pass that gate on a zero-valued native constituent system fails at its first step. Induction excludes such bottom-up additions while those premises remain unchanged.

This is a source-level gate observation, not a completed unrestricted macro search. It does not establish that every deterministic description at every coarse grain has zero intrinsic information. Coarse-graining, histories, or background treatment can change the relevant probabilistic model. In particular, the unrestricted 2023 temporal and larger-spatial-grain question remains outside the executed domain.

---

# Section 7: Novelty, limitations, and verification status

<a id="section-7"></a>

## 7 Novelty, limitations, and verification status

 

<a id="paragraph-6"></a>

#### What changed beyond FRD-2 and CCI-1.

 The new input is a response-family certificate for an unknown chart, with explicit variation and error conditions, rather than a supplied overwrite algebra or a graph with register pins. The benchmark demonstrates a complete response-to-chart-to-conditional-assignment pipeline. The stochastic branch classifies the common native product-law domain rather than silently replacing a correlated law. The official comparison tests a nontrivial prospectively bounded macro domain rather than only the native chart.



<a id="paragraph-7"></a>

#### What is not new in general.

 Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) uses the established strategy that conditional independence plus adequate auxiliary variation can identify latent factors. Hyvärinen et al.'s exponential-family result <a id="citation-19"></a>[[7](/consciousness/research/paper-4/references#bib-hyvarinen), Theorem 3] and Khemakhem et al.'s identifiability framework <a id="citation-20"></a>[[8](/consciousness/research/paper-4/references#bib-khemakhem), Theorem 1] are close antecedents, but their continuous-domain hypotheses do not directly state the present full finite-cube result. Painsky et al. study nonlinear finite-alphabet factorial representations <a id="citation-21"></a>[[10](/consciousness/research/paper-4/references#bib-painsky)]; Yeredor supplies nonuniform-source rigidity and uniform-source exceptions for linear finite-field mixtures <a id="citation-22"></a>[[9](/consciousness/research/paper-4/references#bib-yeredor)]. Table [3](/consciousness/research/paper-4/novelty-limitations-and-verification-status#tab:antecedents) separates these inherited ideas from the specific construction offered here. Neither this bounded comparison nor the review establishes worldwide priority or rules out an exact prior specialization.

  

Table 3. Result-level attribution and limits of the contribution claim.

<a id="tab:antecedents"></a>  <a id="source-tabularx-1"></a>

| Result here | Antecedent or standard ingredient | Scope of the contribution offered |
| --- | --- | --- |
| Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) | Auxiliary-variable log-span identification <a id="citation-23"></a>[[7](/consciousness/research/paper-4/references#bib-hyvarinen), [8](/consciousness/research/paper-4/references#bib-khemakhem)]; finite-alphabet recoding <a id="citation-24"></a>[[10](/consciousness/research/paper-4/references#bib-painsky)]; elementary cube rigidity | Explicit finite binary projector and reconstruction, not a new general ICA principle. |
| Theorem [2](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:robust) | Singular-value perturbation inequalities and equal-rank projector geometry | Sufficient threshold for a nonempty finite model class; no optimality or minimal-evidence claim. |
| Conditional assignment (Corollary 3) | FRD-2 P3 covariance with matched remaining fields <a id="citation-25"></a>[[5](/consciousness/research/paper-4/references#bib-frd2)] | Response evidence supplies the chart; the other realization fields remain inputs. |
| Theorem [5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#thm:affine) and endpoint corollaries | Linear finite-field ICA rigidity and fair-source exceptions <a id="citation-26"></a>[[9](/consciousness/research/paper-4/references#bib-yeredor)] | Explicit deterministic-support treatment and its frozen-recoding application; no first general preservation theorem. |
| Corollary [4](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#cor:commonrank) | Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify); intervention-consistent model comparison <a id="citation-27"></a>[[11](/consciousness/research/paper-4/references#bib-rubenstein), [12](/consciousness/research/paper-4/references#bib-beckers)] | Common-law application, not discovery of the general behavioral/causal distinction. |
| Bounded IIT comparison | Published IIT and intrinsic-unit rules <a id="citation-28"></a>[[14](/consciousness/research/paper-4/references#bib-iit2023), [15](/consciousness/research/paper-4/references#bib-intrinsic)]; known intrinsic-information consequence <a id="citation-29"></a>[[16](/consciousness/research/paper-4/references#bib-mayner)]; inherited CCI-1 <a id="citation-30"></a>[[6](/consciousness/research/paper-4/references#bib-cci)] | New bounded computation in this programme, not a universal grain theorem or empirical preference. |

 



<a id="paragraph-8"></a>

#### Physical and psychophysical limits.

 Binary cardinality, complete public state readout, a stationary intervention family, and its product realization remain model assumptions. Statistical uniqueness within this class is not identification among all physical implementations or primitive decompositions. Hidden-state refinements and multivalued descriptions remain outside the claim. The pulse must be tied independently to storage behavior; merely declaring a mathematical factor to be physical would be circular. The method relocates part of the realization question into a specified, potentially testable response contract rather than eliminating it. Macrounit choice, continuous dynamics, timing, thermal/environmental coupling, endogenous records, maintained resources, and process provenance require separate work. A real-device study would need independently characterized perturbations and readout, repeated context-specific response estimates, a justified model-fit/error bound, and withheld reference labels. None was performed here. No experience-facing observations or evidence of phenomenally correct assignments are supplied. Comparison with IIT does not make SPC-2 depend on IIT's axioms, and does not establish either theory's empirical superiority.



<a id="paragraph-9"></a>

#### Computational limits.

 The 32-state setting is finite and small. The full response table has exponential size in $n$, and the conservative sample budget is large. All-state enumeration is exact for that finite domain, not an asymptotic scalability result. Random checks, simulation seeds, and overlapping groupings are not independent experimental systems. General stochastic SPC-2 qualification has not been inferred from deterministic graph structure.



<a id="paragraph-10"></a>

#### Audit and reproducibility.

 The inherited package manifests passed with 142 CCI-1, 405 FRD-2, and 80 FRD-1 entries in the research stage. Exact code, rational kernels, recovered charts, simulated counts, official serialized results, search contracts, environment locks, and repairs are preserved. Early adapter errors involved an attribute name, preset capitalization, a frozen configuration field, and treating the TPM property as a method. They were corrected without changes to the official numerical source; failed calls and diffs remain in the development log. No failed or uncertified scientific case was silently removed.

The subsequent AI-assisted hostile review reported new mathematical checks using code that did not import the paper's checker: 84 product families, 28 subspace-rotation cases, 21,000 exact three-bit affine cases, and 2,048 additional affine cases. It audited all 192 saved official result objects and freshly recomputed 24 official cells using the archived adapter and implementation. The reported scientific fields agreed, with the pilot schema discrepancy above preserved. These are additional AI checks and same-software re-executions, not human review or an independent implementation of IIT. Their evidence is retained separately from the original research results <a id="citation-31"></a>[[20](/consciousness/research/paper-4/references#bib-support)].

This editorial repair preserves every displayed equation and formal theorem/corollary statement and proof. Its checks concern source preservation, the metadata derivative, compilation, references, rendered layout, and package integrity; it does not claim another full numerical replication. The proofs remain human-readable and internally checked, partly corroborated through separately generated AI calculations, not proof-assistant verified, independently human-reviewed, or empirically validated.

The next verification obligations are independent review of the identification/error and support-classification proofs, independent computational reproduction, and physical conformance of the proposed diagnostic contract. Empirical comparison of consciousness theories additionally requires justified experience-facing data. None of these steps is replaced by another execution of the same program.

---

# Section 8: Conclusion

<a id="section-8"></a>

## 8 Conclusion

 Behavioral conjugacy alone does not settle constitutive realization. Within an explicit finite binary product-response class, sufficiently rich response laws determine an unlabeled coordinate decomposition, and a spectral margin can certify its stability. The synthetic frozen-benchmark demonstration combines that chart evidence with a supplied service description and the remaining realization contract to obtain a conditional assignment, without feeding register labels to the estimator. It does not confirm the response model on a device or select an intrinsic macrograin. The same framework delimits fully supported stochastic continuations that cannot remain both exactly conjugate and natively product near the deterministic endpoint. The CCI-1 positive-complex result survives the specified bounded pair-macro search; larger and temporal-grain conclusions are not established. The result is a constructive account of what the declared response evidence identifies, with physical conformance and phenomenal adequacy left distinct.



<a id="paragraph-11"></a>

#### AI and computational assistance.

 OpenAI GPT-family assistants, including configurations identified in the research record as GPT-6 Astra Pro, assisted with mathematical exploration, code, analysis, source inspection, adversarial review, and manuscript drafting and repair under the author's direction. OpenAI's DOT assistant performed the completed CCI-1 official computations imported here. Anthropic Claude provided a separate AI review and independently generated checks of selected claims; the later Astra hostile review supplied additional check code and official-software spot re-executions. The current repair pass did not rerun the IIT search or delegate work to another model. These roles do not constitute independent human mathematical review, proof-assistant verification, or independently authored investigator replication. No Paper 4-specific Gemini role is asserted. Jeremy Rodgers is the sole listed author and retains responsibility for claims, sources, interpretation, and release.



<a id="paragraph-12"></a>

#### Funding and collaboration.

 This research was conducted independently by Jeremy Rodgers without external research funding. The author welcomes collaboration on independent mathematical review, computational replication, physical implementation, and empirical testing, particularly where specialist expertise, equipment, or institutional resources are required.

---

# Supporting material and release status

<a id="paragraph-13"></a>

## Supporting material and release status

 The manuscript describes an accompanying package preserving the original research and hostile-review evidence, alongside the repaired manuscript, a result-to-source dependency index, and a publication checklist. The described package contains readable FRD-1, FRD-2, and completed CCI-1 reports; a single versioned supporting deposit can provide public access without requiring three additional papers. The monograph's identifier is recorded in reference <a id="citation-32"></a>[[1](/consciousness/research/paper-4/references#bib-mono)]; its public listing was checked, but byte identity of the supplied source with the repository payload was not established in this repair. Public identifiers for the other locally preserved versions have not been verified. A public identifier for the planned supporting deposit in reference <a id="citation-33"></a>[[20](/consciousness/research/paper-4/references#bib-support)] was not supplied with this web edition. The source's release checklist requires the cited record and files to be accessible, its public identifier to be supplied, and the exact cited versions to be checked. No external upload or publication was performed during the manuscript repair. The supporting package was not supplied for this web edition; its research contents and public availability have not been independently checked here.

---

# References

## Bibliography

<a id="bib-mono"></a>

[1] J. Rodgers. *Shadow Theory and Consciousness: Awareness, Perspectival Realization, and the Source-to-Experience Problem*. Version 2, 20 September 2026. doi:[10.5281/zenodo.22853774](https://doi.org/10.5281/zenodo.22853774). Author's public publication listing checked 30 September 2026; the exact source snapshot used here is indexed in the supporting package.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-1) · [Supporting material and release status](/consciousness/research/paper-4/supporting-material-and-release-status#citation-32)

<a id="bib-p2"></a>

[2] J. Rodgers. *Relational Boundaries and Awareness Localization: Robustness, Composition, and Identification Limits*. Paper 2, version 1.0, 29 September 2026. doi:[10.5281/zenodo.23075822](https://doi.org/10.5281/zenodo.23075822). Preserved source version: supporting-deposit item P2 in reference <a id="citation-34"></a>[[20](/consciousness/research/paper-4/references#bib-support)].

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-1)

<a id="bib-p3"></a>

[3] J. Rodgers. *Learning Effective Interfaces from Opaque Stochastic Systems: Capacity, Selection, and Validation Limits*. Paper 3, revised version 2 with post-hoc optimization sensitivity, 29 September 2026. doi:[10.5281/zenodo.23075824](https://doi.org/10.5281/zenodo.23075824). Preserved source version: supporting-deposit item P3 in reference <a id="citation-35"></a>[[20](/consciousness/research/paper-4/references#bib-support)].

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-2)

<a id="bib-frd1"></a>

[4] J. Rodgers. *Assignment Determinacy without Unique Componentization: A Finite Realization Doctrine and Exact Logical Application*. FRD-1 report, 30 September 2026. Sections 2–4 (FRD-01–FRD-04); doctrine, proofs, and extractor. Supporting-deposit item FRD1 in reference <a id="citation-36"></a>[[20](/consciousness/research/paper-4/references#bib-support)]; public location pending.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-3) · [Section 2](/consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment#citation-8)

<a id="bib-frd2"></a>

[5] J. Rodgers. *Register-Local Preservation and a State-Recoding Obstruction for Finite SPC-2 Realizations*. FRD-2 report, 30 September 2026. Section 3.2 (P2–P3) and Section 4 (P4). Supporting-deposit item FRD2 in reference <a id="citation-37"></a>[[20](/consciousness/research/paper-4/references#bib-support)]; public location pending.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-3) · [Section 2](/consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment#citation-7) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-25)

<a id="bib-cci"></a>

[6] J. Rodgers. *Native Implementation and Formalism Sensitivity in a Frozen SPC-2 and IIT Comparison*. Completed CCI-1 technical note, 30 September 2026, Sections 2–4. Supporting-deposit item CCI1 in reference <a id="citation-38"></a>[[20](/consciousness/research/paper-4/references#bib-support)]; public location pending. This is the executed result, not the earlier preparation checkpoint.

Cited in: [Section 2](/consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment#citation-10) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-30)

<a id="bib-hyvarinen"></a>

[7] A. Hyvärinen, H. Sasaki, and R. E. Turner. Nonlinear ICA using auxiliary variables and generalized contrastive learning. *Proceedings of Machine Learning Research* 89, 859–868 (2019). [https://proceedings.mlr.press/v89/hyvarinen19a.html](https://proceedings.mlr.press/v89/hyvarinen19a.html).

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-23)

<a id="bib-khemakhem"></a>

[8] I. Khemakhem, D. P. Kingma, R. P. Monti, and A. Hyvärinen. Variational autoencoders and nonlinear ICA: A unifying framework. *Proceedings of Machine Learning Research* 108, 2207–2217 (2020). [https://proceedings.mlr.press/v108/khemakhem20a.html](https://proceedings.mlr.press/v108/khemakhem20a.html).

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-23)

<a id="bib-yeredor"></a>

[9] A. Yeredor. Independent component analysis over Galois fields of prime order. *IEEE Transactions on Information Theory* 57(8), 5342–5359 (2011). doi:10.1109/TIT.2011.2145090. Accessible antecedent version: *Independent Component Analysis Over Galois Fields*, arXiv:1007.2071v1 (2010).

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#citation-13) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-26)

<a id="bib-painsky"></a>

[10] A. Painsky, S. Rosset, and M. Feder. Generalized independent component analysis over finite alphabets. *IEEE Transactions on Information Theory* 62(2), 1038–1053 (2016). doi:10.1109/TIT.2015.2510657. Accessible preprint: arXiv:1508.04934v1 (2015).

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-24)

<a id="bib-rubenstein"></a>

[11] P. K. Rubenstein, S. Weichwald, S. Bongers, J. M. Mooij, D. Janzing, M. Grosse-Wentrup, and B. Schölkopf. Causal consistency of structural equation models. *Proceedings of the 33rd Conference on Uncertainty in Artificial Intelligence* (2017). Accepted manuscript: arXiv:1707.00819v1.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-27)

<a id="bib-beckers"></a>

[12] S. Beckers and J. Y. Halpern. Abstracting causal models. *AAAI* 33, 2678–2685 (2019). doi:10.1609/aaai.v33i01.33012678.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-4) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-27)

<a id="bib-hoeffding"></a>

[13] W. Hoeffding. Probability inequalities for sums of bounded random variables. *Journal of the American Statistical Association* 58, 13–30 (1963). doi:10.1080/01621459.1963.10500830.

Cited in: [Section 4](/consciousness/research/paper-4/a-constructive-diagnostic-for-the-frozen-implementations#citation-11)

<a id="bib-iit2023"></a>

[14] L. Albantakis et al. Integrated information theory (IIT) 4.0: Formulating the properties of phenomenal existence in physical terms. *PLoS Computational Biology* 19, e1011465 (2023). doi:10.1371/journal.pcbi.1011465.

Cited in: [Section 6](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#citation-14) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-28)

<a id="bib-intrinsic"></a>

[15] W. Marshall, G. Findlay, L. Albantakis, and G. Tononi. Intrinsic units: identifying a system's causal grain. *Neuroscience of Consciousness*, niag013 (2026). doi:10.1093/nc/niag013. Equations 16–17 and intrinsic-unit construction.

Cited in: [Section 1](/consciousness/research/paper-4/question-scope-and-relation-to-previous-work#citation-5) · [Section 6](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#citation-18) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-28)

<a id="bib-mayner"></a>

[16] W. G. P. Mayner, W. Marshall, and G. Tononi. Intrinsic cause–effect power: The tradeoff between differentiation and specification. *Entropy* 28(4), 410 (2026). doi:10.3390/e28040410. Accessible authors' preprint: arXiv:2510.03881v1. The preprint, publication metadata, and pinned executable are distinguished; the full final publisher text was not retrieved in this repair.

Cited in: [Section 6](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#citation-17) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-29)

<a id="bib-pyphi"></a>

[17] W. G. P. Mayner et al. PyPhi: A toolbox for integrated information theory. *PLoS Computational Biology* 14(7), e1006343 (2018). doi:10.1371/journal.pcbi.1006343. Executed source revision: `2b98c1d5bba246c042fd1c65618ebad86196342a`; archived distribution `2.0.0rc3.dev6+g2b98c1d5b`.

Cited in: [Section 5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#citation-12)

<a id="bib-conditional"></a>

[18] Official PyPhi documentation. *Conditional independence*. [https://pyphi.readthedocs.io/en/latest/theory/conditional-independence.html](https://pyphi.readthedocs.io/en/latest/theory/conditional-independence.html). Accessed 30 September 2026.

Cited in: [Section 5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#citation-12)

<a id="bib-grainhelp"></a>

[19] Official PyPhi documentation. *Searching across grains*. [https://pyphi.readthedocs.io/en/latest/howto/grain-search.html](https://pyphi.readthedocs.io/en/latest/howto/grain-search.html). Accessed 30 September 2026. Executed definitions are pinned by the archived source rather than a moving documentation endpoint.

Cited in: [Section 6](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#citation-15)

<a id="bib-support"></a>

[20] J. Rodgers. *Paper 4 supporting research: frozen FRD-1, FRD-2, and completed CCI-1 reports, source, results, and review evidence*. Planned public supporting deposit, package version 1.1-RC1, 30 September 2026. Public supporting-deposit DOI not supplied. Exact items MONO, P2, P3, FRD1, FRD2, CCI1, P4, and REVIEW are located in `publication/PUBLICATION_DEPENDENCY_MAP.md` in the accompanying package. No public supporting-deposit DOI was supplied for this web edition.

Cited in: [Section 2](/consciousness/research/paper-4/inherited-benchmark-and-conditional-assignment#citation-9) · [Section 6](/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison#citation-16) · [Section 7](/consciousness/research/paper-4/novelty-limitations-and-verification-status#citation-31) · [Supporting material and release status](/consciousness/research/paper-4/supporting-material-and-release-status#citation-33) · [References](/consciousness/research/paper-4/references#citation-38)
