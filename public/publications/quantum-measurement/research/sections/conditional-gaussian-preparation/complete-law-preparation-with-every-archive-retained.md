# Section 4: Complete-law preparation with every archive retained

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\Dtr = \operatorname{D}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
\pTV = \operatorname{TV}
\pVar = \operatorname{Var}
\pLaw = \operatorname{Law}
\pGam = \Gamma
\pUnif = \mathsf U
-->

<a id="section-4"></a>

## 4 Complete-law preparation with every archive retained

 <a id="p1p:sec:preparation"></a>

Let $X$ be arbitrary genuinely retained external information, on a standard Borel space with its actual law $\mu_X$. During the present protocol $X$ is fixed. Include in the entrance vector the writer $U\in(0,1)$, all $n$ archive inputs $V_1,\ldots,V_n$, and any untouched future positional sources $W$. Conditional on $X=x$, suppose their complete joint law has a density $f_x$ relative to product Lebesgue measure $\lambda$. The archive inputs may be arbitrarily correlated with one another, the writer and $X$. All variations below are variations of this full conditional density and are averaged using $\mu_X$. In particular they are not variations of the writer marginal. For equal-mass finite measures, use ${\operatorname{TV}}(\nu,\nu')=\frac12|\nu-\nu'|(\mathcal Q)$; this also covers subprobabilities of equal mass.

Write $V_i(f)=\int{\operatorname{Var}}_i(f)$ for the directional BV seminorm, with spectators and $X$ integrated. The same definitions apply to a restricted subdensity of total mass $m\leq1$. Only the explicitly active directions are varied; jumps in a fixed old archive direction are not included.



**Lemma 4.1 (Grid and sectional concentration).**

<a id="p1p:lem:grid"></a> Let a nonnegative subdensity $h$ have integrated mass $m$ and active two-coordinate variation $V=V_1+V_2$. Let $P_N$ average on the $N$ by $N$ grid at fixed spectators. Then <a id="p1p:eq:grid"></a>


$$

 \|h-P_Nh\|_1\leq V/(2N),\qquad V_i(P_Nh)\leq V_i(h).

$$

Equation (4.1).

 On each active unit-square fibre, with mass $m_z$ and variations $V_{1,z},V_{2,z}$, <a id="p1p:eq:sectionL2"></a>


$$

 \|h_z\|_2\leq\sqrt{(m_z+V_{1,z})(m_z+V_{2,z})}
 \leq m_z+(V_{1,z}+V_{2,z})/2.

$$

Equation (4.2).

 If $K$ preserves area on each such fibre, fixes all spectators, and has active displacement $\leq\delta$ off a set of sectional area $\leq\beta$, then <a id="p1p:eq:capfreegrid"></a>


$$

 {\operatorname{TV}}(K_\#(h\lambda),h\lambda)
 \leq \frac{V}{2N}+(m+V/2)\sqrt{\beta+4N\delta}.

$$

Equation (4.3).

 If instead $h\leq C$, the alternative bound is <a id="p1p:eq:capgrid"></a>


$$

 {\operatorname{TV}}(K_\#(h\lambda),h\lambda)
 \leq V/(2N)+2CN\delta+C\beta/2.

$$

Equation (4.4).

 

 

**Proof.**

For an interval $I$ of length $l$ and its mean $h_I$, 

$$

 \int_I|h-h_I|\leq l^{-1}\int_{I\times I}|h(x)-h(y)|\,dx\,dy
 \leq (l/2)|Dh|(I).

$$

 The last inequality follows by integrating the derivative between $x$ and $y$: its weight at $t\in I$ is $2(t-\inf I)(\sup I-t)/l\leq l/2$. Successive coordinate averaging contracts $L^1$ and the unused directional variations, proving the first bound in [(4.1)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:grid). For adjacent cell means the difference is the average of $h(t+1/N)-h(t)$. Integrating its derivative along that segment and summing the cells gives overlap weight at most one. This proves the variation contraction, first for smooth functions and then for BV by approximation.

For a BV square slice the one-dimensional representatives give, almost everywhere, 

$$

 h(x,y)\leq A(y):=\int_0^1h(t,y)dt+{\operatorname{Var}}_x h(\cdot,y),
 \quad
 h(x,y)\leq B(x):=\int_0^1h(x,t)dt+{\operatorname{Var}}_y h(x,\cdot).

$$

 The common representatives exist by BV slicing. Thus $h^2\leq A(y)B(x)$; Fubini proves the first inequality in [(4.2)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:sectionL2), and the arithmetic–geometric mean proves the second.

Put $g=P_Nh$. Its value can change under $K$ only on the bad set or when an active coordinate crosses a grid line. This exceptional set $E$ has sectional area at most $s=\beta+4N\delta$. Since $K$ preserves sectional area, so does its image. Cauchy bounds each of $\int_Eg$ and $\int_Eg\circ K$ by $\sqrt{s}\|g\|_2$. Their sum is divided by two in total variation. The two approximation errors together are $\|h-g\|_1\leq V/(2N)$, giving [(4.3)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:capfreegrid) after integrating the section coefficients. If $0\leq g\leq C$, then $|g-g\circ K|\leq C$ on $E$, yielding [(4.4)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:capgrid) instead. The argument prices both the exceptional set and its image. 

□



Let $\mathcal T_n$ be the complete composition of the exact cycles and $\mathcal B_n$ the corresponding baker composition. Let $R_n$ be the final ready quantile and $Z_n=(X,B_1,\ldots,B_n,W)$ all retained external and positional nuisance variables. The internal memories are retained in the quantum wave; there is no additional hidden internal coordinate to marginalize in the specified ontology.



**Theorem 4.2 (Quantitative preparation with retained archives).**

 <a id="p1p:thm:prep"></a> Restrict the actual entrance law to a subdensity $h_x\leq f_x$ of mass $m=1-\tau$, with directional variations $V_w,V_1,\ldots,V_n$ in the writer and warmup archives. Set <a id="p1p:eq:Vsum"></a>


$$

 S_n=2V_w+\sum_{j=1}^n V_j,\qquad H_n^*=n+S_n/2,
 \qquad E_n=\frac{S_n}{2N}+H_n^*\sqrt{\beta+4N\delta}.

$$

Equation (4.5).

 Suppose the identical exact cycle has the sectional comparison bounds of Lemma [3.3](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:lem:separation). Then <a id="p1p:eq:freshness"></a>
<a id="p1p:eq:allrecords"></a>


$$
\begin{aligned}{\operatorname{TV}}\bigl({\operatorname{Law}}(R_n,Z_n),{\mathsf U}\otimes{\operatorname{Law}}(Z_n)\bigr)
 &\leq\tau+\frac{V_w}{4\,2^n}+2E_n,
 \\
 \Pr(\hbox{some archive miscopies its own writer sign})
 &\leq\tau+H_n^*\sqrt\beta+nE_n.
 
\end{aligned}
$$

Equation (4.6, 4.7).

 Each correctly copied archive sign persists throughout all later prescribed stages and holding intervals. If the full entrance density is capped by $C$, one may instead take $\tau=0$ and <a id="p1p:eq:cappedE"></a>


$$

 E_n^{\rm cap}=\frac{S_n}{2N}+2nCN\delta+nC\beta/2.

$$

Equation (4.8).

 In that capped case the all-record failure also has the simpler bound $nC\beta$. 

 

**Proof.**

After $j$ ideal cycles, the archive values determine $s_i=\lfloor2b_i\rfloor$ and $v_i=2b_i-s_i$ for $1\leq i\leq j$. Writing $H_j=\sum_{i=1}^j2^{j-i}s_i$, the inverse writer coordinate is $u_0=2^{-j}(u+H_j)$. The full inverse Jacobian is one: the writer factor $2^{-j}$ cancels the $j$ archive factors two. At fixed old archives, differentiation in the active writer therefore multiplies its variation by $2^{-j}$, whereas variation in the next unused $v_{j+1}$ is unchanged. Any old archive-digit seam is in a fixed coordinate. Thus the sum of active variations before all $n$ ideal steps is at most $S_n$.

Telescope $\mathcal T_n-\mathcal B_n$ by replacing one ideal step at a time, using ideal prefixes and exact suffixes. Deterministic pushforward contracts total variation, so Lemma [4.1](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:lem:grid) bounds the total boxed endpoint discrepancy by $E_n$; using $nm\leq n$ gives [(4.5)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:Vsum). The same bound controls every partial-prefix error.

For the complete ideal output, fix all original source values and $X$. The archives reveal the dyadic cell containing $u_0$, as well as those source values. Replacing the original density by its cell mean in $u_0$ is exactly the operation that makes the remainder uniform while keeping the ideal archive marginal. The interval inequality in the proof of Lemma [4.1](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:lem:grid) gives $L^1$ error at most $2^{-n}V_w/2$ and hence TV error at most $V_w/(4\,2^n)$. Transferring both the complete endpoint law and its archive marginal from ideal to exact costs $2E_n$.

The removed entrance subprobability and the product of its own final nuisance marginal with ${\mathsf U}$ each have mass $\tau$. Their distance is at most $\tau$. This proves [(4.6)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:freshness) with that tail charged once, not once per cycle.

For each record, the wrong-copy event is contained in its pre-copy bad set. At the ideal boxed prefix, sectional Cauchy bounds its mass by $(m+V_{{\rm active},j}/2)\sqrt\beta$. Replacing this prefix by the actual boxed prefix costs at most $E_n$. Sum over $j$, add the initial tail once, and obtain [(4.7)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:allrecords). The zero archive current established above proves subsequent persistence. Under a cap, exact area preservation keeps that same cap at every actual prefix, giving $nC\beta$ directly. The capped grid lemma gives [(4.8)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:cappedE). 

□



If the averaged complete quantile Fisher information is $J^{\rm q}=\int\sum_i|\partial_{u_i}\log f_x|^2 f_x\,d\lambda\,d\mu_X$, score Cauchy gives <a id="p1p:eq:quantilescore"></a>


$$

 S_n\leq\sqrt{n+4}\sqrt{J^{\rm q}},\qquad V_w\leq\sqrt{J_w^{\rm q}}.

$$

Equation (4.9).

 This is one sufficient regularity condition. The physical-score result below is strictly broader and does not assume finite quantile Fisher.
