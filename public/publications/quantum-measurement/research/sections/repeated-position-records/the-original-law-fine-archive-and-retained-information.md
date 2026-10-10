# Section 4: The original law, fine archive and retained information

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-4"></a>

## 4 The original law, fine archive and retained information

 <a id="p2c:sec:law"></a>

Let $N$ contain every held nuisance coordinate and genuinely retained external context. Its reference measure may be disintegrated against the actual law of external context; write the complete probability reference during these modules as $\lambda=du\,dv\,\kappa(dN)$. Both $T_h$ and the ideal baker act on $(u,v)$ and fix $N$. They preserve $\lambda$. An original density $f(u,v,N)$ may correlate all these variables. A cap $f\leq C$ means one cap on this complete law, not a newly assigned conditional cap after a selected digit or a fresh reference draw at the next cycle.



**Lemma 4.1 (Repeated baker and exact archive ordering).**

 <a id="p2c:lem:digits"></a> For $M=2^n$, outside the dyadic boundary set, <a id="p2c:eq:digits"></a>


$$

 B^n(u,v)=
 \left(r,b\right)=
 \left(\{Mu\},
       \frac{v+\operatorname{rev}_n(\lfloor Mu\rfloor)}{M}\right),

$$

Equation (4.1).

 where $\operatorname{rev}_n$ reverses all $n$ binary digits, including leading zeros. If $s_j=\lfloor2u_{j-1}\rfloor$ is the actual entrance declaration for an exact baker step, then 

$$

 b_n=\frac{v_0+\sum_{j=1}^n2^{j-1}s_j}{2^n}.

$$

 The final fine archive retains all these declarations and the original analog $v_0$. Together $(r,b)$ determine the original pair. 





**Proof.**

The recursions are $u_j=2u_{j-1}-s_j$ and $v_j=(v_{j-1}+s_j)/2$. Induction gives $u_n=\{2^nu_0\}$ and the displayed expression for $v_n$. The integer $\lfloor2^nu_0\rfloor$ has binary expansion $\sum_j2^{n-j}s_j$, while the integer in the archive has expansion $\sum_j2^{j-1}s_j$. This proves the reversal. To invert, put $k=\lfloor Mb\rfloor$: 

$$

 v_0=Mb-k,\qquad
 u_0=\frac{r+\operatorname{rev}_n(k)}{M}.

$$

 For example, $u_0=3/10,v_0=2/5,n=2$ gives $(r,b)=(1/5,3/5)$. Omitting reversal would give $b=7/20$, an incorrect archive. Each inverse branch has determinant one; the ideal map is a measure-preserving bijection modulo its null seams. 

□





**Lemma 4.2 (Fine-archive conditional freshness).**

 <a id="p2c:lem:BV"></a> Let $\mu=f\lambda$ be a nonnegative finite measure, with writer-direction variation 

$$

 V_u=\int\operatorname{Var}_{u\in(0,1)}
                         f(u,v,N)\,dv\,\kappa(dN)<\infty.

$$

 Let $\nu_n$ be the actual $(b,N)$ marginal of $B^n_\#\mu$. Then <a id="p2c:eq:idealBV"></a>


$$

 \operatorname{TV}(B^n_\#\mu,\,dr\,\nu_n)
                   \leq \frac{V_u}{4\,2^n}.

$$

Equation (4.2).

 Here TV is half the variation norm for equal-mass measures, and the full fine archive is retained. For probability laws this is an averaged conditional readiness bound with respect to the actual $(b,N)$ marginal, not a uniform bound after arbitrarily rare archive postselection. 





**Proof.**

On an interval $I=[a,b]$ of length $\ell$, its average $f_I$ obeys 

$$
\begin{aligned}\int_I|f-f_I|
 &\leq\frac1\ell\int_I\!\int_I|f(s)-f(t)|\,ds\,dt\\
 &\leq\frac1\ell\int_I
        2(y-a)(b-y)\,d|Df|(y)
 \leq\frac\ell2\operatorname{Var}_I f .
\end{aligned}
$$

 This proof includes BV jumps, by the one-dimensional variation measure. Apply it to the $M$ writer cells at fixed $(v,N)$ and let $P_Mf$ be their cell averages. Then $\|f-P_Mf\|_1\leq V_u/(2M)$.

On the final archive strip $k=\lfloor Mb\rfloor$, the output density is $f((r+\operatorname{rev}_n k)/M,Mb-k,N)$. Integrating in $r$ is exactly averaging $f$ over the corresponding original writer cell. Consequently $B^n_\#((P_Mf)\lambda)=dr\,\nu_n$. Measure preservation and the half-variation convention give [(4.2)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:idealBV). Bit reversal only permutes the writer cells and does not remove or average the final archive. 

□





**Theorem 4.3 (Exact-outside-collar original-law transfer).**

 <a id="p2c:thm:law"></a> Suppose the original complete probability density obeys $0\leq f\leq C$. After $n$ compact baker modules, <a id="p2c:eq:mapfee"></a>
<a id="p2c:eq:actualfresh"></a>


$$
\begin{aligned}\operatorname{TV}(T_h^n{}_\#\mu,B^n_\#\mu)
 &\leq nC\beta_h,\\
 \operatorname{TV}(T_h^n{}_\#\mu,\,
        dr\,\widetilde\nu_n)
 &\leq \frac{V_u}{4\,2^n}+2nC\beta_h,
 
\end{aligned}
$$

Equation (4.3, 4.4).

 where $\widetilde\nu_n$ is its own actual final archive/nuisance marginal. The probability that any step fails exact baker agreement is at most $nC\beta_h$. On its complement the final fine archive stores the *actual* entrance declarations in Lemma [4.1](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:lem:digits).

If finite writer BV is proved only for one original box submeasure $\mu_B$ with outside mass $\tau$, the freshness estimate instead is <a id="p2c:eq:boxedfresh"></a>


$$

 \operatorname{TV}(T_h^n{}_\#\mu,\,
                       dr\,\widetilde\nu_n)
 \leq\tau+\frac{V_u(\mu_B)}{4\,2^n}
                       +2nC\beta_h .

$$

Equation (4.5).

 The original outside mass is charged once. 





**Proof.**

Every prefix preserves the complete reference; its pushforward density remains at most $C$. Couple the physical and ideal iterations by the same original point. Until their first entry outside $L_h\cup R_h$ the states and the next complete maps agree exactly. A union bound using the ideal reference-preserving prefixes charges at most $nC\beta_h$ for the first failure. Their endpoint coupling proves [(4.3)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:mapfee). The same good event identifies each actual pre-stage declaration with the ideal one and proves the digit assertion.

Insert the ideal law and its actual nuisance marginal between the two laws in [(4.4)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:actualfresh). Lemma [4.2](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:lem:BV) gives the middle fee. The endpoint fee is $nC\beta_h$, and marginalizing that comparison and tensoring with $dr$ costs another at most $nC\beta_h$. This is why the own-marginal freshness bound contains a factor two.

For [(4.5)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:boxedfresh), apply the same argument to $\mu_B$ and its own nuisance submarginal. The outside-box output and $dr$ times its actual nuisance marginal have equal mass $\tau$, so their TV is at most $\tau$. Adding these two subprobability comparisons proves the result without recutting the law at a later time. 

□



After the last module the stationary-stock hold fixes the archive point. This is a single fine analog archive, not yet $n$ separately held macroscopic records or a physical high-resolution decoder. The separate reader, receiver and reset construction below addresses that additional task. During reuse the archive is deliberately overwritten; its invertible final encoding retains the past digits even though its sign need not retain an earlier sign.



<a id="section-4-1"></a>

### 4.1 Where the information goes





**Proposition 4.4 (Complete relative entropy is retained).**

 <a id="p2c:prop:entropy"></a> Let $F$ be any finite composition of the exact compact modules, or any ideal baker iterate, acting on the full retained reference space. For an original $\mu=f\lambda$, <a id="p2c:eq:entropy"></a>


$$

 \operatorname{TV}(F_\#\mu,\lambda)
       =\operatorname{TV}(\mu,\lambda),\qquad
 D_{\rm KL}(F_\#\mu\|\lambda)
       =D_{\rm KL}(\mu\|\lambda),

$$

Equation (4.6).

 with the second equality also in the extended sense. These invariants are compatible with [(4.4)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:actualfresh), which compares the writer with its ready reference *conditional on the actual final archive*. 





**Proof.**

The maps are invertible and reference preserving (modulo null seams for the ideal baker). Their pushforward density is $f\circ F^{-1}$. Changing variables proves equality of the integrals of $|f-1|/2$ and $f\log f$; the negative part of $f\log f$ is bounded on a probability reference, so the extended integral is well defined. The conditional-freshness target is $dr$ times the actual nuisance marginal, not the original full reference $\lambda$. There is therefore no contradiction. 

□



When a density is written as $f(r,b,N)$, with $g(b,N)=\int f(r,b,N)\,dr$, the usual exact decomposition is 

$$

 D_{\rm KL}(f\|1)
 =D_{\rm KL}(g\|1)
  +\int f\log\!\left(\frac{f}{g}\right)\,dr\,db\,d\kappa .

$$

 It follows by adding and subtracting $\log g$; zero-marginal fibres have zero $f$ mass. The identity also holds with value $+\infty$: the negative parts of $g\log g$ and $f\log(f/g)$ have integrals at most $1/e$ each, so conditional integration justifies the sum without subtracting infinite quantities. If conditional freshness were exact, the second term would vanish and the retained nuisance would carry the entire relative-entropy discrepancy. A small TV estimate alone is not asserted to make that conditional KL term small. The exact digit inverse already shows directly that no complete positional information was erased by the map.



<a id="section-4-2"></a>

### 4.2 A cap-free fixed-dimensional preparation variant



The same geometric map admits a different, explicitly priced law class. This result concerns preparation of a writer with one reused archive and one untouched future receiver. It is not a cap-free theorem for the later repeated-record bank, whose complete coordinate/law conditions must be checked separately.



**Lemma 4.5 (Three-dimensional concentration from BV).**

 <a id="p2c:lem:concentration"></a> For a nonnegative BV subdensity $g$ on the unit cube, with mass $m$ and directional variations $V_1,V_2,V_3$, <a id="p2c:eq:concentration"></a>


$$

 \|g\|_{3/2}\leq
       \prod_{i=1}^3(m+V_i)^{1/3}
       \leq m+\frac{V_1+V_2+V_3}{3}.

$$

Equation (4.7).

 Consequently a reference event of volume $\beta$ has actual mass at most the right side times $\beta^{1/3}$. 





**Proof.**

One-dimensional BV slicing gives $g(u)\leq A_i(u_{-i})$ almost everywhere, where $A_i$ is the integral plus variation of its $i$th slice. Thus $g^{3/2}\leq(A_1A_2A_3)^{1/2}$. Integrate first in $u_1$ and apply Cauchy to $A_2^{1/2}A_3^{1/2}$. Then apply Cauchy in $(u_2,u_3)$ to the remaining $A_1^{1/2}$ and the separated product. This gives $\int g^{3/2}\leq\prod_i(\int A_i)^{1/2}
=\prod_i(m+V_i)^{1/2}$. Taking the $2/3$ power and arithmetic-geometric mean proves [(4.7)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:concentration). Hölder with conjugate exponent three proves the event estimate. 

□





**Corollary 4.6 (Cap-free exact-event preparation).**

<a id="p2c:cor:capfree"></a> Suppose the original boxed density, conditional on genuine external information $X$ with its actual law, has an averaged $L^{3/2}$ bound at most $B$, writer variation $V_u$, and outside mass $\tau$. Then <a id="p2c:eq:capfree"></a>


$$

 \operatorname{TV}(T_h^n{}_\#\mu,\,
                      dr\,\widetilde\nu_n)
 \leq\tau+\frac{V_u}{4\,2^n}
                        +2nB\beta_h^{1/3}.

$$

Equation (4.8).

 In particular the finite sufficient values 

$$

 \tau\leq10^{-5},\quad V_u\leq2.6331\,10^{23},
 \quad B\leq1+2.6331\,10^{23},\quad
 n=100,\quad h=10^{-108}

$$

 give a complete retained-archive freshness bound below $1.1\,10^{-5}$. 





**Proof.**

Every complete ideal prefix preserves the $L^{3/2}$ norm. Its next exceptional set has the same volume $\beta_h$, so Hölder bounds its boxed mass by the conditional concentration coefficient times $\beta_h^{1/3}$. Average using the actual $X$ law and sum over $n$ first-failure events. The boxed map fee is at most $nB\beta_h^{1/3}$. The proof of Theorem [4.3](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:thm:law), including its own-marginal factor two and one original tail, then gives [(4.8)](/quantum-measurement/research/repeated-position-records/the-original-law-fine-archive-and-retained-information#p2c:eq:capfree). For the displayed row, $\beta_h^{1/3}<2\,10^{-36}$ and the map fee is below $5.2663\,10^{-11}$; the dyadic term and tail give the stated loose ceiling. 

□



The concentration and writer-BV numbers in this corollary are actual-law hypotheses, not supplied by the stationary wave. A physical-score-to-BV conversion with an actual joint cutoff can supply them, but every coordinate and conditioning variable of that conversion must be retained. If further drifting positions are added, the full-dimensional concentration exponent changes unless a stronger sectional estimate is proved. The illustrative row has degree $p=4\,10^{108}$. Its finite mathematical existence and the first-flow-jet bound do not make its higher control jets or physical spatial scales feasible.
