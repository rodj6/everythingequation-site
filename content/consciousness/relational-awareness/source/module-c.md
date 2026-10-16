## 3. Finalization, selection and physical access {#section-3}

The same retained record can support a provisional comparison, an eventual correct answer and a later current presentation. These are different targets. The source/readout contracts below distinguish these targets and establish accessibility constraints without dating first appearance. They show precisely what a physical record makes available, when an early value can be final, and how much information a later comparison actually requires.

### 3.1 Common prefixes and immutable finalization {#section-3-1}

Let $b\in\{1,\ldots,m\}$ index a later physical branch. Let $H$ denote an adequate observable history available before the branch, with common law $\mu$. A common nonanticipating kernel generates an early output from $H$ and independent private randomness. Then every branch has the same early output law: integrate that one kernel against $\mu$. This includes adaptive earlier operations if their full relevant controlled history is in $H$. Equality of displayed stimuli alone does not establish this contract.

Let $C$ be a nominated eventual content on a finite alphabet $\mathcal C$, $P_b(h,c)=\Pr_b(H=h,C=c)$ and $Q_b(c\mid h)=P_b(h,c)/\mu(h)$ when $\mu(h)>0$. An early flag $F$ with marker $V$ **finalizes** $C$ if, on $F=1$, $V=C$ in every branch under the stipulated contract. Its event must be determined early, not retrospectively defined as $\{V=C\}$. An immutable early value cannot have distinct certain eventual values across branches with a common adequate prefix. This does not prohibit provisional content or a correct early guess on a particular realized branch.

#### Theorem 3.1: Abstract common-mass maximum {#theorem-3-1}

If the joint early finalized submeasure is common to the branches, its mass is at most

$$
\alpha=\sum_{h,c}\min_b P_b(h,c).\tag{10}
$$

The bound is attained in the unrestricted finite class in which future completions may be jointly constructed to fit the prescribed $P_b$.

**Proof.** Write $f(h,c)=\Pr(H=h,F=1,V=c)$. Finality gives $0\le f(h,c)\le P_b(h,c)$ for every branch, proving the upper bound. For attainment take $f=\min_b P_b$. For each $h$, select early outcomes of masses $f(h,c)$ and a residual mass $\mu(h)-\sum_c f(h,c)$. On flagged outcomes force every eventual branch value to equal $c$. On unflagged outcomes use the normalized residual distributions $P_b(h,c)-f(h,c)$, using a joint conditional coupling if desired. Each branch has its required law. A null residual requires no further choice. $\square$

Equation (10) is established maximal all-equal coupling mathematics: the generalized Doeblin coefficient in Makur and Singh (2024, Theorem 2). The contribution here is its prefix/finality application and the distinction from fixed passive access, not a priority claim for the common-mass identity. Equivalently its elementary LP dual assigns nonnegative weights $\lambda_b(h,c)$ with $\sum_b\lambda_b(h,c)\ge1$ and minimizes $\sum_{b,h,c}\lambda_b(h,c)P_b(h,c)$; concentrating weight on a minimum branch at each atom certifies equality.

Pairwise overlap need not be global. On three content values, take

$$
P_1=(1/2,1/2,0),\qquad P_2=(0,1/2,1/2),\qquad P_3=(1/2,0,1/2).
$$

Every pair has common mass $1/2$, while $\alpha=0$. The history $H$ also matters: a fair history bit with $C=H$ in one branch and $C=1-H$ in another has identical marginal content distributions but zero joint history/content overlap. In contrast, dependence $H=b$ violates the common-prefix premise and can permit complete early finalization.

### 3.2 Fixed passive native apparatus {#section-3-2}

The attaining architecture above may engineer its future through $F,V$. Suppose instead a fixed apparatus has conditional future laws $Q_b$, and the early flag/marker is **passive**: conditional on the complete relevant pretime $H$, its private seed is independent of future innovations and $F,V$ do not influence future dynamics. $H$ excludes independent innovations that have not yet occurred; including their realized values would give premature access by definition.

#### Proposition 3.2: The passive zero-error optimum {#proposition-3-2}

In this class the optimal zero-error flagged mass is

$$
\beta=\sum_h\mu(h)\,\mathbf 1\{\exists c\in\mathcal C:Q_b(c\mid h)=1\text{ for all }b\}.\tag{11}
$$

**Proof.** If the early marker selects $c$ with positive mass at $h$, conditional independence makes its error probability in branch $b$ equal to $1-Q_b(c\mid h)$. Zero error requires this to vanish in every branch. Conversely flag every eligible $h$ and choose a common certain value there. No private randomization can turn an ineligible $h$ into an eligible one. $\square$

A single branch with a fair future coin and trivial history has $\alpha=1$ but $\beta=0$. Thus unrestricted coupling is not a capacity certificate for a passive physical controller. For a tolerance imposed conditional on each realized $(h,c)$ marker, eligibility is $\max_c\min_b Q_b(c\mid h)\ge1-\epsilon$. A tolerance averaged over flags or histories instead requires a different optimization.

For total branch error budgets $\varepsilon_b$, write $x(h,c)=\Pr(H=h,F=1,V=c)$. The exact passive optimum is the finite LP

$$
\begin{aligned}
&\max_x\sum_{h,c}x(h,c),\\
&x(h,c)\ge0,\qquad \sum_c x(h,c)\le\mu(h),\\
&\sum_{h,c}x(h,c)[1-Q_b(c\mid h)]\le\varepsilon_b
\qquad\text{for every }b.
\end{aligned}\tag{12}
$$

Necessity follows from conditional independence; sufficiency implements the selection probabilities $x(h,c)/\mu(h)$ with an independent seed. For two opposite deterministic branches, random guessing can share an allowed total error budget even though no individual marker is conditionally certain. An average max-min or sum-min expression cannot replace this LP.

### 3.3 Approximation and calibration {#section-3-3}

Given estimates $\widehat P_b$ and independently warranted bounds $\operatorname{TV}(P_b,\widehat P_b)\le\epsilon_b$, the unrestricted robust maximum is

$$
\begin{aligned}
&\max_{f,p_b}\sum_x f(x),\qquad x=(h,c),\\
&0\le f(x)\le p_b(x),\qquad p_b(x)\ge0,\\
&\sum_xp_b(x)=1,\qquad
\frac12\sum_x|p_b(x)-\widehat P_b(x)|\le\epsilon_b.
\end{aligned}\tag{13}
$$

If common history marginals are part of the contract, impose them as additional linear constraints. Absolute values can be represented by nonnegative slack variables, so this is a finite LP, not a floating-point heuristic.

For the cyclic three laws above and equal $\epsilon$, the exact optimum is $\min(1,3\epsilon)$. If a coordinate is zero in one estimated law, its common mass cannot exceed $\epsilon$, giving the upper bound $3\epsilon$. For $\epsilon\le1/3$, set $f=(\epsilon,\epsilon,\epsilon)$, and in each law put $\epsilon$ on its missing coordinate and $(1-\epsilon)/2$ on the others. Each change has TV $\epsilon$ and dominates $f$. At and above $1/3$ all three laws may be the uniform distribution. This is a synthetic sharp certificate, not an empirical error estimate.

More generally let early extended laws $(H,F,V)$ differ from a reference branch by at most $\delta_b$ in TV, and let branch finality error be at most $\varepsilon_b$. If $f_0$ is the reference finalized submeasure and $P_b$ the eventual joint law, then

$$
\sum_x(f_0(x)-P_b(x))_+\le\delta_b+\varepsilon_b.
$$

Indeed the early-law discrepancy bounds the positive difference from branch $b$'s finalized submeasure, and finality error bounds its deficit from $P_b$. Since $f_0-\min_b P_b\le\sum_b(f_0-P_b)_+$ atomwise,

$$
\Pr_0(F=1)\le\alpha(P_1,\ldots,P_m)+\sum_b(\delta_b+\varepsilon_b),\qquad \delta_0=0.\tag{14}
$$

Without warranted budgets the bound has no empirical force.

Report laws may replace content laws only through a defended common-alphabet coupling such as $\Pr(Y\ne C)\le\epsilon$, which implies TV error at most $\epsilon$. Correct task performance alone does not provide this coupling. The cyclic report laws are compatible with constant content and a branch-dependent physical report channel as well as with truthful varying content. These models require different finality inferences.

An imperfect occurrence witness need not be exhaustive. In this paragraph let $Z$ denote the target occurrence and $B$ its positive indication. If $\Pr(B=1\mid Z=0)\le a<1$, total probability gives the sharp bound

$$
\Pr(Z=1)\ge\max\left\{0,\frac{\Pr(B=1)-a}{1-a}\right\}.
$$

False-positive probability $a$ and sensitivity $1$ attain it. More general calibrated ranges $f\in[f_L,f_+]$, $s\in[s_L,s_+]$, $s_L>f_+$, give compatible prevalence bounds

$$
\max\left\{0,\frac{r-f_+}{s_+-f_+}\right\}
\le\Pr(Z=1)\le
\min\left\{1,\frac{r-f_L}{s_L-f_L}\right\},\qquad r=\Pr(B=1).
$$

Neither specificity nor sensitivity follows from ordinary task correctness; temporal and context transport require the separate bounds in [Module B, §2.4](/consciousness/relational-awareness/module-b#section-2-4).

For a randomized physical intervention, let $(Z_0,Z_1,B_0,B_1)$ be potential outcomes on one justified coupling. If $\Pr(B_1\ne B_0,Z_1=Z_0)\le d$, then

$$
\Pr(Z_1\ne Z_0)\ge\max\{0,|\Pr(B_1=1)-\Pr(B_0=1)|-d\}.
$$

The report-change event splits into target-change and bypass cases; marginal contrast is at most its probability. Probabilities $.5$ for both changing, $.1$ for report-only change and $.4$ for neither attain the bound. Marginal response rates do not identify the bypass allowance or common coupling.

Calibration and sampling uncertainty impose separate obligations. For Bernoulli mean $r$, the centered log moment generating function has second derivative equal to a tilted Bernoulli variance, at most $1/4$, so it is bounded by $t^2/8$. Independence and exponential Markov inequality give tails $e^{-2n\epsilon^2}$. This proves the usual Hoeffding/union-bound intervals directly. Uncertain calibration needs its own simultaneous confidence budget.

### 3.4 Sharp sampling of the same completed episode {#section-3-4}

Sampling an episode differs from changing its mechanism. Let $p,q$ be two complete joint source laws and let one common conditional reader have event probabilities $k_x\in[0,1]$. If $p\cdot k\ge\ell$, the sharp transferred lower bound is

$$
\min\{q\cdot k:0\le k\le1,\ p\cdot k\ge\ell\}
=\max_{\lambda\ge0}\left[\lambda\ell-\sum_x(\lambda p_x-q_x)_+\right].\tag{15}
$$

The solution fills atoms in ascending $q_x/p_x$, possibly partially filling the last, and sets $k_x=0$ when $p_x=0$ unless irrelevant. To prove the dual, add multiplier $\lambda$ to the constraint and minimize each affine coordinate over $[0,1]$; sorting the ratios yields a feasible attaining point and multiplier. With multiple anchors $p_j\cdot k\ge\ell_j$, replace $\lambda\ell$ by $\sum_j\lambda_j\ell_j$ and $\lambda p_x$ by $\sum_j\lambda_jp_{jx}$. This is finite Neyman–Pearson/LP geometry, not a new measurement law.

For example $p=(2/5,7/20,1/4)$, $q=(17/20,1/10,1/20)$ and $\ell=2/5$ give $k=(0,3/7,1)$, hence minimum $13/140$. Here $\operatorname{TV}(p,q)=9/20$, so the coarse TV bound $\max(0,\ell-\operatorname{TV}(p,q))$ is zero. The improvement uses the full source distributions, not stronger phenomenal evidence. Independent input-only selection of the same completed physical episodes can preserve $k$; replacement of the substrate, later probe creation or different history need not. A selection that depends on unobserved response variables also need not preserve the stipulated conditional law.

For the displayed example, adding anchor $p_2=(1/10,1/10,4/5)$ with lower bound $9/10$ raises the optimum to $3/20$, attained by $(0,1,1)$. All anchors must concern the same conditional assignment. On a general source, write the absolutely continuous part of $q$ as $r\,dp$. Randomized selection gives the analogous infimum

$$
\int_0^\ell F_r^{-1}(u)\,du;
$$

put zero event probability on the $q$-singular part. This follows by the same exchange of equal $p$-mass from a higher to a lower likelihood ratio. The finite theorem already suffices for the examples.

### 3.5 Completing an inadequate source {#section-3-5}

Let a target variable $J$ take values in an alphabet of size $m\ge2$, and suppose the physical source chain is $J\to(R,M)\to\widehat J$, with the decoder also taking values in that alphabet. Write $\delta=\Pr(\widehat J\ne J)$ for its **actual error**. If only an upper budget $\delta\le e\le1$ is supplied, put $\bar e=\min\{e,1-1/m\}$. Fano's inequality and data processing give the correctly clipped budget bound

$$
I(J;M\mid R)\ge H(J)-h_2(\bar e)-\bar e\log_2(m-1)-I(J;R).\tag{16}
$$

Here $h_2(t)=-t\log_2t-(1-t)\log_2(1-t)$, with $0\log_20=0$. To prove the underlying actual-error bound, let $E=\mathbf1\{\widehat J\ne J\}$. Conditional on $\widehat J$, a correct answer fixes $J$, while an incorrect answer leaves at most $m-1$ possibilities. Thus

$$
H(J\mid R,M)\le H(J\mid\widehat J)\le h_2(\delta)+\delta\log_2(m-1).
$$

Subtract this from $H(J)$ and use $I(J;R,M)=I(J;R)+I(J;M\mid R)$. This actual-error form holds for every $\delta\in[0,1]$. Substitution of a larger budget needs care: the function $f_m(t)=h_2(t)+t\log_2(m-1)$ increases only up to $t=1-1/m$, where it equals $\log_2m$. Indeed its derivative on $(0,1)$ is $\log_2[(m-1)(1-t)/t]$. If $e\le1-1/m$, monotonicity gives the displayed budget bound. If $e>1-1/m$, the elementary bound $H(J\mid R,M)\le\log_2m=f_m(\bar e)$ gives it instead. At such loose budgets it may be uninformative. A fair binary target, constant source and constant decoder have zero information and actual error $1/2$: they satisfy the budget $e=1$, but one must use $\bar e=1/2$, not $h_2(1)=0$.

The minimum completion information for a general distortion measure is conditional rate distortion, provided encoding and decoding are unrestricted as specified. These are source-adequacy conditions; the variables' qualitative interpretation needs separate evidence.

For a fair bit independently erased in $R$ with probability $0<e_0\le1$, the optimal unrestricted reader need incur distortion only on erased cases. An allowed error budget $0\le e\le e_0/2$ gives the sharp minimum completion information $e_0[1-h_2(e/e_0)]$; it is zero for $e\ge e_0/2$, since a fair guess on erased cases meets the budget. Necessity applies binary Fano conditional on erasure in its increasing range; sufficiency transmits the erased bit through a binary symmetric channel of error $e/e_0$. At $e_0=0$ no completion is needed and no ratio $e/e_0$ is used. Exact binding of $n$ labelled positions has $n!$ alternatives and needs $\log_2(n!)$ retained information only under the stipulated zero-error complete-record convention, not $n!$ neurons.

For later random access, use the main article's notation: let $X=(X_1,\ldots,X_n)$ be independent fair input bits, $W$ the complete retained state and $R$ an explicitly included auxiliary route or independent seed. The query index $J$ is uniform on $\{1,\ldots,n\}$, independent of $(X,W,R)$, and chosen after storage. A common reader answering bit queries with **actual average error** $e\in[0,1]$ must satisfy

$$
I(X;W,R)\ge n[1-h_2(e)].\tag{17}
$$

For a direct proof, let $\widehat X_i$ be the implemented answer to query $i$, with actual error $e_i$. At each fixed query the common reader is one stochastic kernel from $(W,R)$ to its answer, giving the Markov chain $X_i\to(W,R)\to\widehat X_i$. Any further decoder randomness must be independent of the whole $(X,W,R)$ conditional on that query. For binary variables the error indicator and $\widehat X_i$ together determine $X_i$, so

$$
H(X_i\mid W,R)\le H(X_i\mid\widehat X_i)\le h_2(e_i).
$$

Conditional entropy subadditivity and concavity of $h_2$ on its **whole domain** now give $H(X\mid W,R)\le\sum_i h_2(e_i)\le nh_2(e)$, since independent uniform query selection makes $e=n^{-1}\sum_i e_i$. Subtract from $H(X)=n$. No comparison with an optimal decoder, or monotonicity above error $1/2$, is used. A binary decoder that is always wrong has actual error one and can be inverted perfectly; the positive information requirement at $e=1$ is therefore consistent. If $e$ denotes only an upper budget instead, replace it in Equation (17) by $\min\{e,1/2\}$; a budget at least $1/2$ alone yields only the trivial bound zero.

An independent seed $R$ has $I(X;R)=0$, although its joint use with $W$ can improve decoding; it is not dropped from the joint information term. A further decoder seed independent only of $X$, rather than the whole $(X,W,R)$, can carry extra conditional information and is not free under this contract. If the query is known before storage, one stored bit suffices for that query. Source-correlated bypass information is counted in $R$ rather than treated as free randomness. Analogue noisy storage needs an operational information ceiling, not a count of mathematical real-valued states.

With exactly $K$ finite retained states and no bypass, uniform independent bits have optimal average distortion

$$
D_{n,K}=\frac1{n2^n}\min_{|A|\le K}\sum_{w\in\{0,1\}^n}\min_{a\in A}d_H(w,a).
$$

Deterministic encoders achieve the optimum, since mixing cannot improve a pointwise minimum. For $K=2$, let the codewords differ in $d$ coordinates. Expected nearest distance is $n/2-\mathbb E|B_d-d/2|$ with $B_d$ binomial. The absolute displacement of a symmetric random walk is a submartingale, so antipodal words attain the minimum. Thus $D_{3,2}=1/4$ and $D_{6,2}=11/32$. These exact finite examples do not establish a biological memory ceiling.

### 3.6 Persistent draws and adaptive threshold access {#section-3-6}

Let $X$ have one of two nonatomic laws $\rho_0,\rho_1$ on an interval and be retained across queries. Put $\nu=\rho_0-\rho_1$, and define

$$
D_L=\frac12\sup_{t_0<\cdots<t_L}\sum_{j=1}^L|\nu((t_{j-1},t_j])|,
$$

with the endpoints covering the full support. A $k$-step deterministic threshold decision tree has at most $2^k$ interval leaves; its transcript TV is exactly the half-sum over those leaves. Conversely balanced binary search realizes any ordered partition with at most $2^k$ leaves. Therefore adaptive and nonadaptive optimal TVs are respectively

$$
V_k=D_{2^k},\qquad W_k=D_{k+1}.\tag{18}
$$

Conditioning on an independent retained seed gives mixtures of trees and cannot exceed their maximum. Fresh independent draws would be a different experiment.

For $K=2^m$ equal bins with density $2$ on alternate bins under the two laws, each interval has signed mass magnitude at most $2/K$. Total positive and negative mass agree, so an $L$-interval partition has TV at most $2\lfloor L/2\rfloor/K$, capped at one. Alternating bin boundaries attain it: $D_L=\min\{1,2\lfloor L/2\rfloor/K\}$. Perfect distinction needs $m$ adaptive queries but $K-1$ nonadaptive queries.

The access norm matters. Define Volterra operators $Af(t)=\int_0^t f(x)\,dx$ and $A_Nf(t)=\int_0^{\lfloor Nt\rfloor/N}f(x)\,dx$ on $[0,1]$. The difference kernel has row and column integrals at most $1/N$, so the Schur bound gives $\|A-A_N\|_{2\to2}\le1/N$. Yet densities alternating on the $2N$ half-cells are completely sealed to grid-snapped thresholds and perfectly distinguishable by unrestricted threshold search of depth $\lceil\log_2(2N)\rceil$. Small operator error is not a sequential physical access bound.

With independent bit-flip noise $\eta<1/2$ on each threshold answer, repeat each of the $m$ adaptive comparisons $r$ odd times. If $e_r=\Pr\{\operatorname{Bin}(r,\eta)>r/2\}$, path success is at least $(1-e_r)^m$ and transcript TV at least $2(1-e_r)^m-1$. For $m=4$, $\eta=.1$, $r=5$ this exceeds $.932$. This is an achievable lower bound, not optimality of the noisy protocol. Bounds on unconditional one-query differences cannot be telescoped without controlling the conditional histories.

### 3.7 Reconstruction, current knowledge and timing {#section-3-7}

Fix $K$ distinct sites in a common geometry, with no three collinear, and use each once. The static contour joins consecutive sites. Two orders give the same undirected labelled path exactly when they reverse one another: choosing an endpoint fixes the whole traversal. Distinct edge sets give distinct embedded unions, since a segment cannot be covered by finitely many crossings with noncollinear other segments. There are $K!/2$ literal contours and $K!$ directed orders. Equality modulo alignment or rotation is a different quotient. Zero-error complete records need that many distinct states; four sites require $12$ contour or $24$ order states. Templates, coordinates and any external drawing archive are apparatus resources. A constant unordered inventory cannot track the independently selected contour beyond best-prior success.

A retained ordered word and a generic interpolation rule suffice to generate novel contours without learned names or a sensory movie. The same physical construction can assign a first presentation during integration or during later inspection, with a later current token in both accounts. Bounded displacement/uncertainty summaries likewise permit delayed reconstructions that preserve all nominated physical kernels. Equal likelihood leaves rational prior evaluation open. Spatial replay support requires actual content fidelity, not simply equality of a decoded average.

A genuinely current acquaintance with a relation does impose a current basis deadline. A report vehicle or stored answer alone does not establish such acquaintance. The main article defends a scoped current-human conclusion; these theorems delimit alternative mechanisms without dating first onset.

### 3.8 Common descendants and duplicate readers {#section-3-8}

For a deterministic finite source, exact output factorization $F=g\circ z$ implies $z(x)=z(y)\Rightarrow F(x)=F(y)$. A separator therefore needs at least the number of complete output classes. For $F(a,b)=(a,b,a\oplus b)$ there are four classes, so an XOR-only two-state record cannot recover the complete pair, whereas a two-bit record can. This sharp finite content constraint does not impose a human memory ceiling.

The scalar XOR coordinate has mixed difference $r_{00}-r_{01}-r_{10}+r_{11}=-2$. A fixed common-origin equality with no native comparison gives zero instead after independent preparations. In a finite causal graph unrolled over the fixed operation window, such mixed dependence requires an operation, possibly the output itself, to be a common descendant of both variations. Otherwise every output's ancestors omit one variation and mixed dependence vanishes. It does not require an earlier binding node or prove a passive presented relation must explicitly calculate XOR.

One retained pair can feed two separate readers performing the same local operation. A model assigning appearance both at integration and to each later current reader, and a model first assigning it to the later readers, have the same physical reports and genuine late acquaintance within their stipulated interpretations. Shared source does not make the reader tokens one scene. An outside-history freeze plus independently anchored current phenomenal variation under a local preparation establishes local involvement under supervenience on the nominated complete basis, not a sufficient or minimal bearer. A few fixed recorded channels are not the complete outside basis.

Likewise ordinary feedback $X'=Y$, $Y'=X$ gives causal sensitivity in both directions while a current mode determined by current $Y$ can remain unchanged under an $X$ preparation until the next update. Mutual sensitivity is not current constitution. For a report-rescue example, hold scene vehicles $X,Y$ fixed, let separate classifiers $C,T$ compute XOR at the next step, and let a later selector report one classifier. There is no classifier-to-scene feedback. Disabling $C$ removes its report; selecting $T$ restores the correct report for every pair. A declared joint-scene interpretation can leave its current relation unchanged. The physical counterexample separates classification from the stipulated scene; it does not observe preservation of actual appearance.

### 3.9 Repeated fields and historical dependence {#section-3-9}

Exact repetition supplies a further conditional connecting test. Take two registers $X,Y$, each with four active pair values and one inactive value. A load sets both to a supplied pair, reset clears them, native preparations set either register, and a probe copies the retained active pair. The update kernel is fixed. An early load and a later probe can leave the same $(v,v)$ state and hence all the same native future kernels. Their incoming operations and external phase/history differ.

If a deterministic occurrence law depends only on an independently adequate current field and is invariant under this native match, an accepted late current occurrence transfers to the earlier field. That is a one-step conditional result: applying the same function to matched arguments gives the same value. It does not promote an intermediate occurrence to a fresh knowledge anchor ([Module B, §2.12](/consciousness/relational-awareness/module-b#section-2-12)), nor derive the needed psychophysical current-source law from future Markovity.

A fixed delayed rival uses the passive fact that the last nonidle operation was probe: it grants occurrence only for an active probed field. A controller bit storing that fact need not affect any module output. If included in the physical source, complete current packages differ; if erased, the law can depend on the causal-past fact instead. Arbitrarily long idle padding matches every fixed finite recent-history window without removing that one-bit historical distinction. Bounded record capacity is not a bound on influence duration. Omitted attention, boundary coupling or physical age can likewise invalidate the adequacy premise.

A different stronger match uses a bi-infinite periodic native process. For an eight-step closed cycle, positions separated by eight have identical relative material histories to every past depth. A deterministic history-covariant occurrence law gives the same occurrence there. An origin, age, external controller or environment tag is extra material data; if relevant it must be matched as well. A stochastic law gives equal probabilities rather than identity of actual occurrence tokens unless its relevant actual innovations are also matched. The recurrence tests therefore expose precise current/history invariance obligations; they do not earn those laws through repeated kernel equality or relocate a late anchor to an earlier time by themselves.
