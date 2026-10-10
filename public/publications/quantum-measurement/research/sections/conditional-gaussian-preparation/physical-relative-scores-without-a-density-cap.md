# Section 5: Physical relative scores without a density cap

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

<a id="section-5"></a>

## 5 Physical relative scores without a density cap

 <a id="p1p:sec:physical"></a>

Let $\xi=(\xi_0,\ldots,\xi_{d-1})$ be all standardized physical entrance coordinates and let ${\Gamma}_d(\xi)=\prod_i\phi(\xi_i)$. Conditional on the same retained $X=x$, write the actual density as <a id="p1p:eq:relative"></a>


$$

 p_x(\xi)={\Gamma}_d(\xi)f_x(\xi),\qquad
 \partial_i f_x=f_xs_{i,x}\quad\hbox{distributionally},\qquad
 J_i=\int |s_{i,x}|^2p_x\,d\xi\,d\mu_X(x)<\infty.

$$

Equation (5.1).

 The score is assigned arbitrarily on zero-density sets. In particular $\sum_iJ_i$ concerns the full conditional density, including every archive and unused future source. The comparison Gaussian fixes the analysis coordinates and describes the quantum stock; it does not specify the actual law $p_x$.



**Lemma 5.1 (Moments and boundary traces from weak scores).**

 <a id="p1p:lem:physicalBV"></a> Under [(5.1)](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:eq:relative), the actual second moment $M_i=\mathbb E\xi_i^2$ is finite and the ordinary physical Fisher information satisfies <a id="p1p:eq:momentidentity"></a>


$$

 I_i^{\rm abs}=J_i+2-M_i\geq0,
 \qquad M_i\leq J_i+2.

$$

Equation (5.2).

 Restrict the complete actual density to the physical box $|\xi_i|\leq R_i$ and extend by zero in the quantile coordinates $u_i=\Phi(\xi_i)$. Its directional variations obey <a id="p1p:eq:physicalBV"></a>


$$

 V_i\leq D_{R_i}\{\sqrt{J_i}+\sqrt{J_i+2}\},
 \qquad D_R=\sqrt{2\pi}e^{R^2/2}.

$$

Equation (5.3).

 For a common radius $R$, total score $J=\sum_iJ_i$, one writer and $n$ active archives, <a id="p1p:eq:physicalS"></a>


$$

 S_n\leq D_R\sqrt{n+4}\{\sqrt J+\sqrt{J+2d}\}.

$$

Equation (5.4).

 

 

**Proof.**

First prove finiteness rather than assuming the integration by parts is legitimate. Choose even compact smooth cutoffs $0\leq\chi_R\leq1$, nonincreasing in $|\xi_i|$, increasing to one, with uniformly bounded $\xi_i\chi_R'$. Set $M_R=\mathbb E(\xi_i^2\chi_R)$. Integration by parts against the compact test $\xi_i\chi_R$ gives 

$$

 M_R=\mathbb E(\chi_R+\xi_i\chi_R')+
       \mathbb E(\xi_i\chi_Rs_i)
 \leq1+\sqrt{M_RJ_i}.

$$

 Spectator cutoffs can be exhausted: the active test is bounded and its score term is integrable by Cauchy. Solving the quadratic gives $M_R\leq[(\sqrt{J_i}+\sqrt{J_i+4})/2]^2$; monotone convergence proves $M_i<\infty$. Now $\xi_i s_i$ is integrable. Removing the cutoff, its bounded derivative term tends to zero by dominated convergence, giving $\mathbb E\xi_i s_i=M_i-1$. The ordinary score is $s_i-\xi_i$, so 

$$

 I_i^{\rm abs}=\mathbb E(s_i-\xi_i)^2=J_i+2-M_i.

$$

 This proves [(5.2)](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:eq:momentidentity) without presupposing the moment.

For almost every $x$, the one-coordinate marginal $p_{i,x}$ has weak derivative equal to the integrated joint derivative. Conditional expectation and Cauchy imply $\|p_{i,x}'\|_1\leq\sqrt{I_{i,x}^{\rm abs}}$. An integrable nonnegative $W^{1,1}(\mathbb R)$ density tends to zero at both infinities, so $2\sup p_{i,x}\leq\|p_{i,x}'\|_1$. On the box interior, differentiating in $u_i$ introduces $1/\phi(\xi_i)\leq D_{R_i}$; score Cauchy bounds the integrated interior variation by $D_{R_i}\sqrt{J_i}$. At each of the two quantile faces the zero extension contributes the trace of the density. Integrating all other coordinates bounds their sum by 

$$

 D_{R_i}\int[p_{i,x}(R_i)+p_{i,x}(-R_i)]\,d\mu_X(x)
 \leq D_{R_i}\sqrt{J_i+2}.

$$

 BV traces or a limiting regular face justify the same assertion for weak densities. This proves [(5.3)](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:eq:physicalBV). Finally apply weighted Cauchy to the coefficients $(2,1,\ldots,1)$ in $S_n$. Their squared sum is $n+4$; including unused coordinates in $J$ and $d$ only enlarges the upper bound. This proves [(5.4)](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:eq:physicalS). 

□



Higher moments, when assumed, give a useful separate tail estimate: <a id="p1p:eq:tail"></a>


$$

 \tau\leq\sum_i\frac{\mathbb E|\xi_i|^p}{R_i^p}.

$$

Equation (5.5).

 The second-moment part of this estimate follows from the weak-score hypothesis. A twentieth moment does not follow from that argument and will be explicitly required for the next row.



**Corollary 5.2 (A finite cap-free preparation row).**

<a id="p1p:cor:row"></a> Include one writer, $100$ warmup archives, and one untouched subsequent measurement source, so $d=102$. Suppose the actual complete conditional law satisfies 

$$

 \sum_iJ_i\leq100,\qquad \sum_i\mathbb E|\xi_i|^{20}\leq10^{15}.

$$

 Use $D=A=50$, the complete entrance box $|\xi_i|\leq10$, and analysis grid $N=10^{40}$. Then the preparation and all later current-zero holds satisfy <a id="p1p:eq:rowE"></a>
<a id="p1p:eq:rowbox"></a>
<a id="p1p:eq:rowfresh"></a>
<a id="p1p:eq:rowcopy"></a>


$$
\begin{aligned}E_{100}&\leq2.00006\times10^{-16},\\
 \Delta_{\rm box}:=\frac{V_w}{4\,2^{100}}+2E_{100}
 &<5.192874163845\times10^{-8},\\
 {\operatorname{TV}}({\operatorname{Law}}(R_{100},Z_{100}),{\mathsf U}\otimes{\operatorname{Law}}(Z_{100}))
 &<1.005192874164\times10^{-5},\\
 \Pr(\hbox{some wrong warmup copy})
 &<1.000000002000061\times10^{-5}.
\end{aligned}
$$

Equation (5.6, 5.7, 5.8, 5.9).

 The untouched measurement source is part of $Z_{100}$, not averaged out. 

 

**Proof.**

The elementary exponential enclosure gives $D_{10}<1.31\times10^{22}$. Using $\sqrt{102}<10.1$, $\sqrt{104}<10.2$ and $\sqrt{304}<17.44$ in Lemma [5.1](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:lem:physicalBV) gives 

$$

 V_w<2.6331\times10^{23},\quad
 S_{100}<3.6665328\times10^{24}<3.67\times10^{24},\quad
 H_{100}^*<2\times10^{24}.

$$

 The last inequality retains the positive mass term $100$ in $H_{100}^*$. Choose $c=3$, $\eta=10^{-110}$, $k=24$. Gaussian upper tails and exponential bounds give 

$$
\begin{aligned}\gamma=e^{-300}&<10^{-130},&
 \Phi(-24)&<\eta/2,\\
 \rho_A=e^{-2600}&<10^{-1100},&
 t_A=\Phi(-76)&<10^{-1200},\\
 a_D=\Phi(-53)&<10^{-600}.&&
\end{aligned}
$$

 Thus $\delta<2\times10^{-130}$ and $\beta<3\times10^{-110}$. In particular $\sqrt{\beta+4N\delta}<3\times10^{-45}$ and $\sqrt\beta<2\times10^{-55}$. Therefore 

$$

 E_{100}\leq\frac{4\times10^{24}}{2\times10^{40}}
       +(2\times10^{24})(3\times10^{-45})
       =2.00006\times10^{-16}.

$$

 The ideal boxed writer fee is bounded by $2.6331\times10^{23}/(4\,2^{100})$ $<5.192874123844\times10^{-8}$. The actual complete-box tail is at most $10^{15}/10^{20}=10^{-5}$. Substitution in Theorem [4.2](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:thm:prep) gives the stated rational decimal ceilings; the copy ceiling includes the additional $4\times10^{-31}$ bad-set term.

For reproducible directed inequalities one may use $\sqrt{2\pi}<2.51$ and bound $e^{50}$ by its positive Taylor sum through degree $200$ plus the next term divided by $1-50/202$. For the lower exponential bounds used in the tails, $e>\sum_{j=0}^5 1/j!=163/60$ suffices, together with $\Phi(-x)\leq e^{-x^2/2}/(2x)$ for $x>0$. All row decisions consequently reduce to rational inequalities. 

□



An explicit non-Born member of this class consists of $102$ independent actual centered Gaussians of variance $5/2$ in the standardized physical coordinates. Its full relative Fisher is 

$$

 J=102(1-2/5)^2(5/2)=91.8,

$$

 and its twentieth-moment sum is 

$$

 102\,(19!!)\,(5/2)^{10}=6.368862690925598\ldots\times10^{14}<10^{15}.

$$

 Its ground-relative density is unbounded. Its quantile Fisher is infinite: for one coordinate the integrand contains $x^2p(x)/\phi(x)^2$, whose exponential factor grows at infinity. Independence is used only to exhibit this member; neither the theorem nor its constants impose it.



<a id="section-5-1"></a>

### 5.1 Finite-resource existence and growing conditional prefixes





**Theorem 5.3 (Uniform writer-score family and all retained records).**

 <a id="p1p:thm:existence"></a> Let a consistent stock family provide, for every finite $n$, the full conditional density of the writer, $n$ warmup sources, one unused future source, and retained $X$. Suppose its weak relative scores satisfy 

$$

 J_w(n)\leq J_*<\infty\quad\hbox{for every }n,
 \qquad J_i(n)<\infty\quad\hbox{for every other coordinate of each prefix}.

$$

 Then for every $0<\varepsilon<1$ there are finite $n$, finite physical cutoffs and finite separations $D,A$ for which complete retained-archive freshness is at most $3\varepsilon/4$ and the probability of any wrong warmup copy-and-hold record is less than $0.42\varepsilon$. 

 

**Proof.**

Choose $R_w^2\geq8(J_*+2)/\varepsilon$. The writer tail is at most $\varepsilon/8$ and 

$$

 V_w\leq V_*:=D_{R_w}(\sqrt{J_*}+\sqrt{J_*+2}),

$$

 independently of $n$. Choose finite $n\geq1$ so that $V_*/(4\,2^n)\leq\varepsilon/4$. For this chosen full prefix, choose each of the $n+1$ source cutoffs to satisfy $R_i^2\geq8(n+1)(J_i(n)+2)/\varepsilon$. Their *aggregate* tail is at most $\varepsilon/8$; hence $\tau\leq\varepsilon/4$. All boxed source variations are finite by Lemma [5.1](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:lem:physicalBV). Set $S=S_n$ and $H=n+S/2$ and choose <a id="p1p:eq:schedule"></a>


$$

 N\geq\max\{1,8nS/\varepsilon\},\qquad
 \beta\leq\frac{\varepsilon^2}{512n^2H^2},\qquad
 \delta\leq\frac{\varepsilon^2}{2048n^2NH^2}.

$$

Equation (5.10).

 The two terms in $E_n$ are at most $\varepsilon/(16n)$ each, so $E_n\leq\varepsilon/(8n)$. Thus freshness is at most $\varepsilon/4+\varepsilon/4+\varepsilon/(4n)\leq3\varepsilon/4$, and the all-record bound is at most 

$$

 \varepsilon\left(\frac14+\frac{1}{\sqrt{512}\,n}+\frac18\right)
 \leq\varepsilon\left(\frac38+\frac4{89}\right)
 =\frac{299}{712}\varepsilon<0.42\varepsilon.

$$

 Here $\sqrt{512}>89/4$. The factor $n$ in [(5.10)](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:eq:schedule) prices all own-event records; a schedule controlling freshness alone does not automatically do so.

It remains to realize these positive $\beta,\delta$ thresholds with finite Gaussian parameters. Fix $c=3$ and choose $\eta$ sufficiently small for the source-end part of $\beta$. Choose finite $k$ with $\Phi(-k)<\eta/2$. Increase $D$ until $e^{-2Dc}$ is below both the desired displacement allocation and $\eta/2$, and until $\Phi(-(D-c))$ and $\Phi(-(D+c))$ meet their respective allocations. Increase $A>k$ until $e^{-2A(A-k)}$ and $\Phi(-(2A-k))$ meet the remaining allocations. Lemma [3.3](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:lem:separation) proves the required map and copy bounds. All choices are finite after this finite prefix has been selected. The translations and conjugated holding swaps described above implement the corresponding smooth prescribed parent. 

□



The order of these choices matters. A common second-moment box whose total moment grows like $b(n+1)$ would require $R^2\geq b(n+1)/\tau$. Its writer variation enclosure contains $e^{b(n+1)/(2\tau)}$, which can grow faster than $2^n$. The theorem fixes the writer cutoff before increasing the source count, assigning costly source variations to the later grid and separation choices.



**Proposition 5.4 (Why finite-prefix smoothness is insufficient).**

 <a id="p1p:prop:prefixcounter"></a> There is a consistent actual stock family for which every finite physical prefix has a smooth positive density, finite relative Fisher and bounded coordinate second moments, but the complete ideal baker output satisfies, for every $n\geq1$, 

$$

 {\operatorname{TV}}({\operatorname{Law}}(R_n,Z_n),{\mathsf U}\otimes{\operatorname{Law}}(Z_n))>
 \frac{5189}{12550}>0.4.

$$

 

 

**Proof.**

Take independent standard normals $Y,G_1,G_2,\ldots$ and set $Z_j^{\rm in}=Y+2^{-6j}G_j$; use writer $u=\Phi(Y)$ and sources $v_j=\Phi(Z_j^{\rm in})$. Every finite covariance is nonsingular. For a prefix containing the writer and $m$ sources, differentiation at fixed source coordinates gives 

$$

 \partial_Y\log(p/{\Gamma})=\sum_{j=1}^m2^{12j}(Z_j^{\rm in}-Y),
 \qquad J_w^{(m)}=\sum_{j=1}^m2^{12j}.

$$

 A bank with $n$ warmup archives and an untouched receiver has $m=n+1$. Thus this family fails the uniform full conditional writer hypothesis, although its writer marginal is exactly standard normal. The final archive $b_n$ reveals $v_n=2b_n-\lfloor2b_n\rfloor$, hence $Z_n^{\rm in}$. Define the archive prediction $\widehat r=\{2^n\Phi(Z_n^{\rm in})\}$. Circle distance obeys 

$$

 \operatorname{dist}_{\mathbb T}(r,\widehat r)
 \leq 2^{-5n}|G_n|/\sqrt{2\pi}.

$$

 Since $\sqrt{2\pi}>2.5$, the event $|G_n|\leq0.8$ implies this distance is at most $0.01$ for all $n\geq1$. Under an independent uniform remainder, the same archive-dependent circle interval has probability $0.02$. Meanwhile 

$$

 \Pr(|G_n|\leq0.8)
 >\frac{1.6(1-0.32)}{2.51}.

$$

 Subtracting $0.02$ gives $5189/12550$. The strict inequality follows from $e^{-0.32}>1-0.32$ and $\sqrt{2\pi}<2.51$. 

□





<a id="section-5-2"></a>

### 5.2 Two distinct cap-free limits





**Proposition 5.5 (Fixed-law finite-map convergence).**

<a id="p1p:prop:L1"></a> Fix $n$ and any complete entrance law with conditional $L^1$ densities $f_x$. As $D,A\to\infty$, 

$$

 {\operatorname{TV}}((\mathcal T_n)_\#\mu,(\mathcal B_n)_\#\mu)\longrightarrow0.

$$

 No cap or Fisher condition is needed for this fixed-law assertion. 

 

**Proof.**

For fixed $u<1/2$ and $v\in(0,1)$, $F_D^{-1}(u)=-D+\Phi^{-1}(2u)+o(1)$ and its minority posterior tends to zero. The copy position is $-A+\Phi^{-1}(v)+o(1)$, and the return and archive outputs tend to $(2u,v/2)$. Reflection gives the other branch. Consequently $B^{-1}T_{D,A}\to I$ almost everywhere. Finite iteration excludes only the finite family of dyadic cuts and their preimages. The corresponding full difference maps preserve Lebesgue measure. For bounded continuous $h$ on the closed cube, dominated convergence gives $\|h\circ K-h\|_1\to0$. Approximate an arbitrary $f\in L^1$ by such $h$ and use 

$$

 \|f\circ K-f\|_1\leq2\|f-h\|_1+\|h\circ K-h\|_1.

$$

 This proves TV convergence on each $X$ fibre. Dominated convergence in the actual $X$ law completes the argument. 

□



A qualitative growing-family sufficient condition is stronger: require that $U$ conditional on the *entire* consistent source tape and $X$ has an $L^1$ density. Dyadic cell averaging converges in $L^1$ on each such fibre. Its error is precisely the ideal complete-remainder freshness error before projecting to a finite retained tape. Dominated convergence allows a finite $n$ to be selected for each tolerance; Proposition [5.5](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:prop:L1) then selects finite separations for that fixed prefix. Proposition [5.4](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:prop:prefixcounter) explains why absolute continuity of every finite prefix is weaker than this premise.



**Proposition 5.6 (A finite-resource obstruction without a density cap).**

 <a id="p1p:prop:nocapcounter"></a> For $n=44$ and $D=A=12$, there is a smooth actual complete law with physical relative Fisher exactly $100$ whose final marginal ready distance from uniform exceeds $0.94$. 

 

**Proof.**

Take actual writer $Q_0\sim N(10,1)$ and independent standard-normal actual archives. The entrance ratio is $e^{10Q_0-50}$, with physical relative score $10$ in the writer direction and zero in every archive direction. Its relative density is unbounded. The Gaussian upper-tail inequality implies $\Phi(-8.1)<0.005/2^{44}$ and $\Pr(Q_0>8.1)>0.96$. On this event every ideal digit is right and every ideal remainder is greater than $0.995$. For each actual archive, exclude its initial quantiles outside $[10^{-12},1-10^{-12}]$; the aggregate exclusion probability is at most $88\times10^{-12}$. With $c=3,k=8$, Lemma [3.3](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#p1p:lem:separation) gives, on the right good branch, a ready-coordinate error per cycle at most $10^{-48}+10^{-41}$. Induction bounds the accumulated error by $(2^{44}-1)(10^{-48}+10^{-41})<10^{-20}$. Every actual remainder therefore stays in the right good branch and the final one exceeds $0.99$. Thus 

$$

 \Pr(R_{44}>0.99)>0.96-88\times10^{-12},

$$

 whereas uniform assigns $0.01$ to this event. The difference exceeds $0.94$. Complete archive-conditioned distance is at least this marginal distance by projection. This is a finite-resource counterexample, not a failure of an upper estimate. 

□



For comparison, the cap-based physical-score row does survive with $C=10$, $J\leq100$, $R=6$, $n=44$, $D=A=12$ and $N=10^{19}$. The direct cap trace bound is $V_i\leq D_R\sqrt{J_i}+2C$, and the complete-box tail is $2Cd\Phi(-R)$. With $d=46$, including the untouched future source, $D_6<1.65\times10^8$ and $\Phi(-6)<10^{-9}$ give $S_{44}<1.2\times10^{10}$ and $V_w<1.65000002\times10^9$. Using $\delta<2\times10^{-30}$, $\beta\leq2\times10^{-12}+10^{-18}$ in [(4.8)](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:eq:cappedE) gives $E_{44}^{\rm cap}\leq1.864000022\times10^{-8}$ and freshness $<2.440519056475\times10^{-5}$. Alternatively, the complete quantile-score row $n=18,C=10,J^{\rm q}\leq10^4$ with $N=10^{15}$ gives $E_{18}^{\rm cap}\leq1.8097009\times10^{-10}$ and freshness $\leq9.5367793580805\times10^{-5}$. These are different admitted-law classes; the cap-free row of Corollary [5.2](/quantum-measurement/research/conditional-gaussian-preparation/physical-relative-scores-without-a-density-cap#p1p:cor:row) changes both the class and the resources.
