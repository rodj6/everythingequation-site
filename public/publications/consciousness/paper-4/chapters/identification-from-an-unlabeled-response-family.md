# Section 3: Identification from an unlabeled response family

<!-- Complete paper-4 web edition. Mathematical macros used below:
\B = \{0,1\}
\F = \mathbb F_2
\TV = \operatorname{TV}
\rank = \operatorname{rank}
\supp = \operatorname{supp}
\Assign = \operatorname{Assign}
\arraystretch = 1.18
-->

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
