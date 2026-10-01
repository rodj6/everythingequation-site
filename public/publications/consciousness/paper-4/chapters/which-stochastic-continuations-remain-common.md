# Section 5: Which stochastic continuations remain common?

<!-- Complete paper-4 web edition. Mathematical macros used below:
\B = \{0,1\}
\F = \mathbb F_2
\TV = \operatorname{TV}
\rank = \operatorname{rank}
\supp = \operatorname{supp}
\Assign = \operatorname{Assign}
\arraystretch = 1.18
-->

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
