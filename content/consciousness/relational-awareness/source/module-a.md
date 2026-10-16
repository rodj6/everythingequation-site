## Adequate sources, quotients and calibrated identification {#section-1}

A description earns its adequacy by preserving the distinctions the investigation actually needs. Returning the right answer on one task is not enough to identify the source of a presentation. This chapter develops the exact tests: continuation, common decoding, calibrated equality, native dependence and full-law comparison.

A physical description can preserve a response while omitting variables needed for another response or for its interpretation. Adequacy is therefore assessed relative to specified ports, preparations and readers. A quotient or statistic is not promoted to an experiential bearer merely because it is sufficient for one task. These distinctions develop the programme’s source and intrinsic-grain analysis (Rodgers, 2026h,i).

### 1.1 Controlled lumpability and continuation {#section-1-1}

Let $S$ be a finite physical state set, $a$ a native control, $y$ an observed output and $K_a(s,y,s')$ a joint transition instrument. Let $\phi:S\to B$ be a surjective proposed state quotient. It reproduces the complete nominated output/block process for arbitrary preparations exactly when

$$
\sum_{s':\phi(s')=b'}K_a(s,y,s')\quad\text{depends on }s\text{ only through }\phi(s). \tag{1}
$$

This holds for every $a,y,b'$. For necessity, compare point preparations in one fibre. For sufficiency, define the reduced kernel by this value and induct over trajectories. Adaptive controls are also preserved when their policy kernels depend on the corresponding prior outputs. A weaker port family gives a weaker adequacy condition; returning one display does not reset the whole state.

For deterministic controlled updates $F_a$ and output $g$, define $s\sim t$ when every finite control word gives the same future output word from $s$ and $t$. Then $g$ is constant on classes and $s\sim t\Rightarrow F_a(s)\sim F_a(t)$. Hence the classes form an autonomous output-sufficient quotient. Conversely, any autonomous quotient with $g=r\circ\phi$ has fibres contained in these classes, by induction on control words. Thus continuation equivalence is the coarsest such quotient. This is the familiar finite automata/sufficiency principle, now with an explicitly physical control alphabet. Refining the observation aperture may split these classes; it cannot justify deleting genuinely distinguishable native tests.

At zero error, distinguishable continuation classes need disjoint retained record supports. If a deterministic finite record has $K$ states, at most $K$ classes can be recovered. Counting distinct probability laws does not give that storage bound: many overlapping stochastic laws can use the same finite alphabet. Approximate or analogue records require a decision or information bound instead ([§3.5](/consciousness/relational-awareness/module-c#section-3-5)).

For $F(a,b)=(b,a\oplus b)$ with output $g(a,b)=a$, $F^3=I$ and the first two outputs recover $(a,b)$. A report partition alone permits arbitrary refinements; requiring autonomous continuation and these separating outputs recovers the four-state quotient. The premise is physical observability, not a claim that four qualitative states exist.

### 1.2 Common decoder comparison {#section-1-2}

For finite source and target experiments $E_x,G_x$ on the same input alphabet, define one-decoder deficiency

$$
\delta(E,G)=\inf_D\max_x\operatorname{TV}(E_xD,G_x),\qquad
\operatorname{TV}(p,q)=\frac12\sum_z|p_z-q_z|.
$$

$D$ is one stochastic kernel, independent of the unknown input except through the accessible source. Total variation contracts under kernels, so any bounded target decision simulated through $D$ differs by at most $\delta$. If two preparations have target contrast $\gamma$ and source contrast $\zeta$, then $\gamma\le\zeta+2\delta$, by triangle inequality and contraction. Errors of two approximate source/target descriptions add. In particular, a common binary decision with errors $e_0,e_1$ requires source total variation at least $1-e_0-e_1$.

For binary symmetric channels parametrized by their contrast, write $E_x^\zeta(x)=(1+\zeta)/2$ and $G_x^\gamma(x)=(1+\gamma)/2$, with $0\le\zeta,\gamma\le1$. Then

$$
\delta(E^\zeta,G^\gamma)=\frac{(\gamma-\zeta)_+}{2}.
$$

Necessity is the contrast bound. If $\gamma\le\zeta$, a symmetric output flip reduces contrast to $\gamma$; otherwise the identity decoder attains the bound. For a constant source and a deterministic target naming one of $k$ inputs, the decoder is one common law $r$, so maximum error is $1-\min_xr_x\ge1-1/k$, attained by uniform $r$. Multiclass deficiency is a finite linear programme using absolute-value slacks. Coarsening target observations cannot increase it; common relabeling leaves it unchanged. Independent decoders selected separately for each input do not meet the premise.

An intermediate record may be better than the terminal output. If two inputs give intermediate binary contrast $.9$, a later fixed channel reduces it to $.18$, and target contrast is $.8$, intermediate deficiency is zero while terminal deficiency is $.31$. A terminally poor report is neither an absence of earlier information nor a timestamp for experience.

### 1.3 Exact qualitative equality certificates {#section-1-3}

Suppose independent calibration supplies exact same/different qualitative judgments on nominated tokens. Collapse the same-judgment components; different judgments give edges of a graph on the remaining $k$ components. Compatible qualitative partitions are precisely its proper colorings, with arbitrary unrestricted labels. Such data uniquely specify the partition if and only if this graph is complete: a missing edge permits those two components to merge; a complete graph forbids every merge. Autonomy can add equalities through continuation, but a report code alone cannot add calibration.

For $n$ original tokens and $k$ classes the smallest certificate has $n-k+\binom{k}{2}$ comparisons. Every class needs a connected equality graph, requiring its size minus one edges; each pair of classes needs an inequality. Spanning trees and one inequality per pair attain the lower bound. A fixed known number of qualitative labels imposes a different coloring problem and is not assumed here.

With known metric prototypes separated by $\Delta$, observation error at most $\epsilon$ uniquely identifies a prototype when $\Delta>2\epsilon$, by triangle inequality. If prototypes themselves are inferred from one noisy labelled anchor each, same-class points can be $2\epsilon$ apart and different-class points as close as $\Delta-2\epsilon$; separation $\Delta>4\epsilon$ suffices. The latter threshold is sharp without further information: at $\epsilon=.1$, anchors $.1,.5$ and new observation $.3$ fit centers $.2,.6$ with the middle point in the first class, or centers $0,.4$ with it in the second. Both prototype separations are $.4$. Boundary equality does not secure uniqueness.

Even a calibrated stochastic factorization can be nonunique. Let a report matrix be $R=ZD$, with positive row-stochastic full-rank factors. For an invertible $T$ near $I$ with $T\mathbf1=\mathbf1$, factors $ZT,T^{-1}D$ remain positive and row-stochastic for small perturbations, and have the same product. They need not be label permutations. If $D$ is independently known with full row rank, a right inverse instead recovers $Z$ uniquely. Factorization of public probabilities does not calibrate the latent labels by itself.

### 1.4 Native dependency and source fibres {#section-1-4}

Let $F:\prod_iS_i\to\prod_jS_j$ be a finite bijection with full Cartesian preparation support and nontrivial native ports. Join input $i$ to output $j$ when varying only $i$ can change $F_j$. The bipartite essential-dependency components give the unique finest routed factorization. Each output depends only on inputs in its component, so a product decomposition exists. Global injectivity and surjectivity force each component map to be bijective. Any other routed product cannot split an essential edge, proving fineness and uniqueness. For two bits, eight of the 24 bijections are products of local flips and a possible swap; sixteen are prime. Global mixed recoding is not native gauge: it can conjugate a swap to a controlled-XOR update while failing independent local clamp correspondence ([Module B](/consciousness/relational-awareness/module-b#section-2-12)).

A downstream component without a return path into the executive component cannot alter that component’s kernels. The directed dependency graph’s return-strongly-connected component supplies a physical prefilter, not a phenomenal-inertness theorem for spectators.

For a graph on $n$ source bits, edge parities $x_i\oplus x_j$ have incidence rank $n-c$ over $\mathbb F_2$, where $c$ is the number of connected components. The kernel consists exactly of vectors constant on each component, hence has $2^c$ members. One source-bit anchor per component removes this ambiguity. Strong pair dependency does not entail a scalar triple term: the period-four map $(a,b,c)\mapsto(c,a\oplus c,b\oplus c)$ has a strongly connected dependency graph while every coordinate depends on at most two inputs. The graph is an organization descriptor, not an identified qualitative relation.

### 1.5 Restricted adaptation and calibrated contrast {#section-1-5}

Suppose two contexts read one baseline-corrected latent mean $z_h$ with fixed positive gains: $r_G=g_Gz_h$, $r_P=g_Pz_h$. Strict opposing means are impossible. If observed means are $(x,-y)$ with $x,y>0$ and total errors below $x,y$, this model is excluded. For fixed $k=g_P/g_G>0$,

$$
\inf_z\max\{|x-z|,|-y-kz|\}=\frac{kx+y}{1+k}. \tag{2}
$$

Indeed $kx+y=k(x-z)+(kz+y)\le(k+1)e$ for a fit of uniform error $e$; equality is attained at $z=(x-y)/(k+1)$. With unequal errors, the intervals $[x-e_G,x+e_G]$ and $[(-y-e_P)/k,(-y+e_P)/k]$ must intersect. Allowing arbitrary positive $k$ gives infimum $\min(x,y)$, sometimes only at an inadmissible zero/infinite gain limit.

A positive two-mode transfer matrix $B$ predicts opposing-dose responses $(b_{GG}-rb_{GP},b_{PG}-rb_{PP})$. Positive first and negative second occur exactly when $b_{PG}/b_{PP}<r<b_{GG}/b_{GP}$, a nonempty interval if and only if $\det B>0$. For

$$
B=\begin{pmatrix}4&1\\1&2\end{pmatrix},
$$

state $(1,-1)$ gives $(3,-1)$. This is a model-class consequence, not a general two-dimensional lower bound. A smooth scalar counterexample takes controls $z\mapsto z+1$, $z\mapsto z+2$ and readouts $f_G(z)=z$, $f_P(z)=z-z(z-1)(z-2)$: separate controls agree, their composition gives $(3,-3)$. Positive state-dependent gains on equally likely $z=\pm1$ can also give means $(1,-1)$, and increasing nonlinear functions $z$ and $e^z-1$ give opposite mean shifts for a half/half mixture of $-2,+1$. Test-dependent drift is a further escape. Fixed gains and a common latent mean are substantive.

For two histories, let source laws $P_w,P_v$, content laws $Q_w,Q_v$ and reader laws $R_w,R_v$ obey common kernels with approximation budgets $\operatorname{TV}(Q_i,P_iK)\le a_i$ and $\operatorname{TV}(R_i,Q_iJ)\le e_i$. Then

$$
\operatorname{TV}(P_w,P_v)\ge\operatorname{TV}(R_w,R_v)-a_w-a_v-e_w-e_v.
$$

This follows by contraction and triangle inequality. The budgets must include relevant calibration, drift and timing; a returning display alone supplies none.

### 1.6 What relational contrasts leave unidentified {#section-1-6}

For $\delta\in L^2(\mu\otimes\nu)$ define $a(x)=\mathbb E_y\delta$, $b(y)=\mathbb E_x\delta$, $m=\mathbb E\delta$, and

$$
D\delta=\delta(x,y)-\delta(x,y')-\delta(x',y)+\delta(x',y').
$$

Orthogonally decompose $\delta=m+(a-m)+(b-m)+r$ with both margins of $r$ zero. Independent product quadruples give $\|D\delta\|_2^2=4\|r\|_2^2$ because its four terms are orthogonal. Therefore

$$
\|\delta\|_2^2=\frac14\|D\delta\|_2^2+\|a-m\|_2^2+\|b-m\|_2^2+m^2. \tag{3}
$$

Contrasts alone miss additive rows/columns. For example, $\delta=\theta xy$ on independent uniform signs has contrast norm $2|\theta|$ and zero margins; adding $u(x)+v(y)$ leaves that contrast unchanged. Correlated or selected quadruples need a separate law; the identity cannot be assumed there.

For a finite difference space and accessible test vectors $v_j$, a full Gram operator $G=\sum_jv_jv_j^*$ with lower bound $G\succeq aI$, $a>0$, gives

$$
\|\delta\|^2\le a^{-1}\sum_j|\langle v_j,\delta\rangle|^2.
$$

Positive nonzero eigenvalues on a smaller span do not control its nullspace.

Finally, suppose finite atoms have diameter at most $D$, slacks vanish on an affinely independent face $F$ and sum to at least $\gamma$ outside. If a law $p$ has expected slack at most $\epsilon$, its escaped mass satisfies $\ell\le\epsilon/\gamma$. Let $q$ be on $F$ with mean within $\zeta$ of $p$, and let the inverse barycentric map have zero-sum norm bound $\|z\|_1\le M\|\sum_jz_ja_j\|$. For $\ell<1$, normalized $p_F$ has mean within $\ell D$ of $p$, hence

$$
\operatorname{TV}(p,q)\le\min\left\{1,\ell+\frac M2(\zeta+\ell D)\right\}.
$$

This supplies stable joint-law identification from support and means. Matching means is inadequate without the face/slack and inverse assumptions. Applying the bound requires physical tests that establish those data; the algebra alone does not determine what appeared.

Two further transfer facts make the full-law requirement explicit. If one common decoder satisfies $\sup_x\operatorname{TV}(R_x,D(P_x))\le\epsilon$, independent $m$-sample experiments differ after that decoder by at most $m\epsilon$. Couple the coordinates independently and bound the probability of any disagreement. A success probability $s$ on $R$ therefore transfers with lower bound $s-m\epsilon$; an input-dependent decoder would inject the answer.

For a full density comparison, let $f_i=e^{X_i}\xi_i>0$ and $Z_i=\int f_i$. If $\|X_2-X_1\|_\infty\le\epsilon$ and $Z_1^{-1}\int e^{X_1}|\xi_2-\xi_1|\le e^\epsilon-1$, expansion gives

$$
Z_1^{-1}\int|f_2-f_1|\le(e^\epsilon-1)(1+e^\epsilon)=e^{2\epsilon}-1.
$$

The normalizer difference costs at most the same $L^1$ discrepancy, so $\operatorname{TV}(f_1/Z_1,f_2/Z_2)\le\min\{1,e^{2\epsilon}-1\}$. Listed moments or separate margins do not supply these full positive-density and normalizer hypotheses.
