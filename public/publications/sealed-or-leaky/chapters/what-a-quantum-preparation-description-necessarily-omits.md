# Section 8: What a quantum preparation description necessarily omits

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

<a id="section-8"></a>

## 8 What a quantum preparation description necessarily omits

 <a id="ctx:section"></a>

An ontological model assigns to each preparation $P$ a probability measure $\mu_P$ on a measurable space $\Lambda$ and to each binary measurement $M_j$ a measurable response $\xi_j:\Lambda\to[0,1]$, with $p(j\mid M_j,P)=\int\xi_j\,d\mu_P$. The response is fixed by the measurement and the ontic state; it does not depend separately on the preparation procedure. Randomized preparation is represented convex-linearly: 

$$

 \mu_{\sum_a q_aP_a}=\sum_aq_a\mu_{P_a}.

$$

 These are explicit modeling commitments. Calling them simply “realism” would conceal their mathematical content. In particular, the objects $\mu_P$ are distributions of possible individual states, not individual states themselves. Preparation contextuality concerns these distributions <a id="citation-25"></a>[[12](/sealed-or-leaky/references#bib-S05), [1](/sealed-or-leaky/references#bib-Marvian20)].



<a id="section-8-1"></a>

### 8.1 A sharp finite-table separation and a robust witness



Let $n_1,n_2,n_3$ be coplanar unit Bloch vectors with $n_1+n_2+n_3=0$. Write $P_{\pm i}$ for the preparations of the six pure qubit states with Bloch vectors $\pm n_i$, and let $M_j$ measure the projector with Bloch vector $n_j$. Define 

$$

 q_{j,\pm i}:=p(j\mid M_j,P_{\pm i}),\qquad
 d_{ji}:=q_{j,+i}-q_{j,-i},\qquad
 \nu_i:=\tfrac12(\mu_{+i}+\mu_{-i}).

$$

 Each randomized preparation has density matrix $I/2$ in the ideal quantum realization. Its probabilities are <a id="ctx:table"></a>


$$

 q_{i,+i}=1,\quad q_{i,-i}=0,\qquad
 q_{j,+i}=\tfrac14,\quad q_{j,-i}=\tfrac34\quad(j\ne i).

$$

Equation (28).



<a id="source-theorem-7"></a>

**Theorem 8.1 (Robust pairwise preparation separation).**

<a id="ctx:robust"></a> 

*Status: Proved.*

 For any convex-linear ontological model, any four preparations $P_{\pm i},P_{\pm j}$ and any three binary measurements indexed by distinct $i,j,k$, one has <a id="ctx:witness"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ \ge\
 \max\left\{0,-1+
 \frac{d_{ii}+d_{jj}-d_{ji}-d_{ij}}4
 -\frac{d_{ki}+d_{kj}}2\right\}.

$$

Equation (29).

 No outcome determinism or measurement noncontextuality is assumed. For the ideal trine table [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table), every pair $i\ne j$ obeys <a id="ctx:quarterpair"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ge\tfrac14.

$$

Equation (30).

 The constant $1/4$ is sharp for this finite preparation–measurement table. If every probability used in [(29)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:witness) differs from its ideal value by at most $\epsilon$, then <a id="ctx:noise"></a>


$$

 {\mathrm{TV}}(\nu_i,\nu_j)\ge\max\{0,\tfrac14-4\epsilon\}.

$$

Equation (31).

 



<a id="source-proof-23"></a>

**Proof.**

Put $x_a=2\xi_a-1\in[-1,1]$, $D=x_i-x_j\in[-2,2]$, and $f=-Dx_k/4\in[-1/2,1/2]$. Four pointwise inequalities are 

$$
\begin{aligned}\tfrac12 f&\ge\tfrac14\xi_i-\tfrac14\xi_j-\tfrac12\xi_k,\\
 \tfrac12 f&\ge-\tfrac12-\tfrac14\xi_i+\tfrac14\xi_j+\tfrac12\xi_k,\\
 -\tfrac12 f&\ge-\tfrac14\xi_i+\tfrac14\xi_j-\tfrac12\xi_k,\\
 -\tfrac12 f&\ge-\tfrac12+\tfrac14\xi_i-\tfrac14\xi_j+\tfrac12\xi_k.
\end{aligned}
$$

 Their respective differences, left side minus right side, are $(2-D)(1+x_k)/8$, $(2+D)(1-x_k)/8$, $(2+D)(1+x_k)/8$, and $(2-D)(1-x_k)/8$, all nonnegative. Integrate these inequalities against $\mu_{+i},\mu_{-i},\mu_{+j},
\mu_{-j}$ respectively and add. Their left sides sum to $\int f\,d(\nu_i-\nu_j)$ and their right sides to the expression in [(29)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:witness). Since $f+1/2$ takes values in $[0,1]$, $\int f\,d(\nu_i-\nu_j)\le{\mathrm{TV}}(\nu_i,\nu_j)$. This proves the general inequality. Substitution of $d_{ii}=d_{jj}=1$ and all four cross terms equal to $-1/2$ gives $1/4$. Each $d_{ab}$ can change by at most $2\epsilon$, and the sum of the absolute coefficients of the six $d$ terms is $2$, giving [(31)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:noise). The following construction proves sharpness. 

□



<a id="source-proposition-4"></a>

**Proposition 8.2 (A saturating model of the finite table).**

<a id="ctx:saturation"></a> 

*Status: Proved.*

 Let $\Lambda$ consist of the six binary strings $100,010,001,110,101,011$, and set $\xi_j(v)=v_j$. Let $e_i$ be the $i$th binary unit vector. Give $\mu_{+i}$ mass $1/2$ at $e_i$, mass $1/4$ at each of $e_i+e_j$ with $j\ne i$, and zero elsewhere. Define $\mu_{-i}$ by bitwise complementation of $\mu_{+i}$. Extend preparation assignments convex-linearly. This model reproduces [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table) and has ${\mathrm{TV}}(\nu_i,\nu_j)=1/4$ for every $i\ne j$. 



<a id="source-proof-24"></a>

**Proof.**

The $i$th bit is always one under $\mu_{+i}$; each other bit is one with probability $1/4$. Complementation supplies the negative preparation probabilities. The distribution $\nu_i$ has mass $1/4$ at $e_i$ and $\mathbf1-e_i$, and mass $1/8$ at the other four strings. For $i\ne j$, four masses differ by $1/8$, so the total-variation distance is $\frac12(4/8)=1/4$. 

□



This proves sharpness for the displayed finite table, not sharpness of the minimum inaccessible information among models reproducing *all* qubit measurements. Such a global optimum is not established here.

<a id="source-theorem-8"></a>

**Theorem 8.3 (Separation from the trine mixture).**

<a id="ctx:sum"></a> 

*Status: Proved.*

 Put $\nu_4=(\mu_{+1}+\mu_{+2}+\mu_{+3})/3$. For the ideal table [(28)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:table), all four mixtures prepare $I/2$ and <a id="ctx:sumhalf"></a>


$$

 \sum_{i=1}^3{\mathrm{TV}}(\nu_i,\nu_4)\ge\tfrac12,
 \qquad \max_i{\mathrm{TV}}(\nu_i,\nu_4)\ge\tfrac16.

$$

Equation (32).

 The sum constant is sharp for this finite table. For arbitrary probability data represented by the same ontological model, <a id="ctx:sumrobust"></a>


$$

 \sum_{i=1}^3{\mathrm{TV}}(\nu_i,\nu_4)\ge
 -\tfrac32+\tfrac16\sum_iq_{i,+i}
 +\tfrac12\sum_i\sum_{j\ne i}(q_{j,-i}-q_{j,+i}).

$$

Equation (33).

 Consequently entrywise probability error at most $\epsilon$ implies the lower bound $\max\{0,1/2-13\epsilon/2\}$ for the sum. 

 <a id="source-proof-25"></a>

**Proof.**

Apply the same Markov kernel to each ontic distribution, taking conditionally independent binary bits $b_j$ with success probabilities $\xi_j(\lambda)$. This preserves all the probabilities $q_{j,\pm i}$, commutes with preparation mixtures, and contracts total variation. It suffices to prove the bound for the resulting distributions on $\{0,1\}^3$; this mathematical coupling asserts no joint physical measurability of the three quantum measurements.

For an ideal table, let $D_i=\{e_i,\mathbf1-e_i\}$. The sets $D_i$ are disjoint. Under $\mu_{+i}$ the $i$th bit is one, and each other bit is one with probability $1/4$, so the union bound gives $\mu_{+i}(e_i)\ge1/2$. Complementarily $\mu_{-i}(\mathbf1-e_i)\ge1/2$. Hence $\nu_i(D_i)\ge1/2$ and 

$$

 \sum_i{\mathrm{TV}}(\nu_i,\nu_4)
 \ge\sum_i[\nu_i(D_i)-\nu_4(D_i)]\ge\tfrac32-1=\tfrac12.

$$

 In the saturating model of Proposition [8.2](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:saturation), $\nu_4$ is uniform on the six nonconstant strings. Each ${\mathrm{TV}}(\nu_i,\nu_4)=1/6$.

For the robust assertion define $h_i(b)\in[-1/2,1/2]$ as follows: on $000$ all $h_i=-1/2$; on $111$ all $h_i=1/2$; on the remaining six strings $h_i=1/2$ when coordinate $i$ is the minority bit and $h_i=-1/2$ otherwise. Put $H(b)=\sum_ih_i(b)$. For each $i$ the following inequalities hold on all eight strings: 

$$

 \tfrac12h_i-\tfrac13H\ge
 \tfrac14+\tfrac16b_i-\tfrac12\sum_{j\ne i}b_j,
 \qquad
 \tfrac12h_i\ge-\tfrac34+\tfrac12\sum_{j\ne i}b_j.

$$

 For completeness, the respective slacks as a function of the bit $b_i$ and the number $r$ of ones among the other two bits are 

$$

\begin{array}{c|rrrrrr}
(b_i,r)&(0,0)&(0,1)&(0,2)&(1,0)&(1,1)&(1,2)\\\hline
\text{first slack}&0&1/6&7/6&0&0&1/3\\
\text{second slack}&1/2&0&0&1&0&0
\end{array}

$$

 and are nonnegative. Integrate the first inequality against $\mu_{+i}$, the second against $\mu_{-i}$, and sum over $i$. The left side equals $\sum_i\int h_i\,d(\nu_i-\nu_4)$ and is at most $\sum_i{\mathrm{TV}}(\nu_i,\nu_4)$. The right side is [(33)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:sumrobust). The total absolute probability coefficient is $3/6+12/2=13/2$, proving the noise bound. 

□



Likewise, the noise bound applies directly to the specified mixtures of the actual preparations. To call these mixtures members of one density-matrix fiber under experimental imperfections requires a separate certificate that their density matrices remain equal. Approximate tomographic agreement alone does not establish exact operational equivalence. Secondary preparations can sometimes supply exact equivalences within a specified operational model; the relevant experimental methodology is developed in <a id="citation-26"></a>[[7](/sealed-or-leaky/references#bib-MPKRS16)].

<a id="source-corollary-3"></a>

**Corollary 8.4 (Conditional noninjectivity of the preparation readout).**

 <a id="ctx:noninjectivity"></a> 

*Status: Proved conditional on a convex-linear ontological model reproducing the trine table and tomographically complete qubit statistics.*

 Suppose a convex-linear ontological model reproduces the trine table and a tomographically complete set of quantum measurements. On the set of realized preparation distributions the map $p(\mu_P)=\rho_P$ is well defined and noninjective. Its fiber over $I/2$ contains three distributions whose pairwise total-variation distances are at least $1/4$. 

 <a id="source-proof-26"></a>

**Proof.**

Equality of two ontic distributions gives equality of all modeled outcome probabilities, hence equality of density matrices by tomography. The three distributions $\nu_i$ share density matrix $I/2$ and are distinct by [(30)](/sealed-or-leaky/what-a-quantum-preparation-description-necessarily-omits#ctx:quarterpair). 

□



The conclusion is preparation contextuality expressed as incompleteness of a specified preparation readout. It does not establish incompleteness of a pure state as the individual ontic state, of a universal quantum state, or of the total internal operational description. Indeed, the Beltrametti–Bugajski model takes rays as ontic states, assigns pure preparations Dirac measures, proper mixtures their convex-linear mixtures, and Born response functions <a id="citation-27"></a>[[2](/sealed-or-leaky/references#bib-BB95)]. Pure states are complete in that model although distinct proper mixtures with the same density matrix remain distinct ontic distributions. This explicit countermodel blocks the stronger inference. The underlying qualitative obstruction is Spekkens' preparation-contextuality theorem <a id="citation-28"></a>[[12](/sealed-or-leaky/references#bib-S05)]; total variation as a measure of inaccessible preparation information is prior work of Marvian <a id="citation-29"></a>[[1](/sealed-or-leaky/references#bib-Marvian20)]. The finite-table inequality and its displayed constants are derived here; no exhaustive priority claim is made.
