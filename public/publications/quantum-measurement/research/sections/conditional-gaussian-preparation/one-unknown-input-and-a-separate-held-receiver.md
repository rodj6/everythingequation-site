# Section 7: One unknown input and a separate held receiver

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

<a id="section-7"></a>

## 7 One unknown input and a separate held receiver

 <a id="p1i:sec:instrument"></a>

The prepared writer can be used once to measure an unknown internal qubit. The receiver need not have its wave population, and may remain correlated with every old archive. What is needed is a quantitative restriction on that complete law. The result below allows either a density cap or the physical-score class of the preceding preparation theorem. It controls both the receiver's faithfulness to the writer's own earlier declaration and the labelled postmeasurement state of the input and a finite internal reference.

For equal-mass finite positive measures we use $\operatorname{TV}(\mu,\nu)=\frac12\|\mu-\nu\|_1$; for equal-trace positive operators we use $D(A,B)=\frac12\|A-B\|_1$. These conventions apply to the subprobabilities used below. Let $\mathcal R$ be any finite-dimensional internal Hilbert space, with no additional positional coordinate, and write the unknown normalized input as <a id="p1i:eq:input"></a>


$$

 \chi=|0\rangle\chi_0+|1\rangle\chi_1,
 \qquad p=\|\chi_0\|^2,\quad 1-p=\|\chi_1\|^2.

$$

Equation (7.1).

 No orthogonality of $\chi_0$ and $\chi_1$ in $\mathcal R$ is required. The two displayed qubit sectors are orthogonal. A mixed input is covered by a finite internal purification followed by a partial trace.

The entrance quantum wave is <a id="p1i:eq:ready"></a>


$$

 \sqrt{g_\sigma(q)}\sqrt{h_a(z)}\,
 (|0\rangle\chi_0+|1\rangle\chi_1)\otimes\Xi(N),

$$

Equation (7.2).

 where $g_\sigma$ and $h_a$ are centered Gaussian densities with standard deviations $\sigma$ and $a$. Here $q$ is the writer position, $z$ is a *different* receiver position, and $N$ includes every old archive and genuinely retained external context. In [(7.2)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:ready), $\Xi$ is understood to depend on the positional part of $N$ and includes old internal memories; a fixed external conditioning label need not have a wave amplitude. The spectator holding dynamics must give zero current in those old positional coordinates throughout this protocol, and $\|\Xi\|>0$ on a set of full actual probability. These conditions hold for the Gaussian bank with the holding projectors constructed above. The actual entrance positional law is independent of the choice of $\chi$, but is not asserted to equal the density of [(7.2)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:ready). An internal SWAP loads the unknown input only after the known-input warmup. An input with an unknown positional reference already entangled with these coordinates is outside [(7.2)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:ready).

Let $F$ and $G$ be the CDFs of $g_\sigma$ and $h_a$, and put $u=F(q_0)$ and $v=G(z_0)$. Quantiles are analysis coordinates only. The Hamiltonian does not evaluate them or use the unknown number $p$ as a control setting. In this section $D$ and $A$ denote physical lengths; their dimensionless values are $D/\sigma$ and $A/a$, respectively. These ratios are the separation parameters denoted by $D,A$ in the standardized-coordinate preparation analysis.



<a id="section-7-1"></a>

### 7.1 The complete current and the generic-input map





**Proposition 7.1 (Exact prescribed one-use parent).**

<a id="p1i:prop:parent"></a> Use the canonical Schrödinger current for the complete configuration. There is a finite spin-controlled oscillator protocol, with $C^\infty$ center paths and time-dependent potential, that splits the writer to $-D,+D$, copies into receiver packets at $-A,+A$, returns the writer to its ready wave, and stores the measured internal qubit. Its controls are the same for every input [(7.1)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:input). The held receiver has exactly zero complete current during return and subsequent storage. For every finite hold interval on which the holding projectors and spectator conditions are maintained, the decoder <a id="p1i:eq:decoder"></a>


$$

 Y(z)=\begin{cases}0,&z<0,\\1,&z\geq0\end{cases}

$$

Equation (7.3).

 is fixed and time independent.

The active endpoint flow has the following description. Define <a id="p1i:eq:mixtures"></a>


$$
\begin{aligned}\rho_p(q)&=p g_\sigma(q+D)+(1-p)g_\sigma(q-D),\\
 F_p(q)&=pF(q+D)+(1-p)F(q-D),\\
 w_p(q)&=\frac{p g_\sigma(q+D)}{\rho_p(q)},\\
 M_p(z)&=p h_a(z+A)+(1-p)h_a(z-A),\\
 \widetilde w_p(z)&=\frac{p h_a(z+A)}{M_p(z)}.
\end{aligned}
$$

Equation (7.4).

 If $q$ denotes the split endpoint and $z$ the copy endpoint, then <a id="p1i:eq:flow1"></a>
<a id="p1i:eq:flow2"></a>
<a id="p1i:eq:flow3"></a>
<a id="p1i:eq:flow4"></a>


$$
\begin{aligned}u&=F_p(q),\\
 v&=w_p(q)G(z+A)+(1-w_p(q))G(z-A),\\
 r&=\widetilde w_p(z)F(q+D)+(1-\widetilde w_p(z))F(q-D),
 \\
 b&=pG(z+A)+(1-p)G(z-A).
\end{aligned}
$$

Equation (7.5, 7.6, 7.7, 7.8).

 Here $r=F(q_{\rm final})$. The map $T_p:(u,v)\mapsto(r,b)$ is a measure-preserving bijection of the open unit square. All formulas include $p=0,1$ without a singular branch-weight division. 





**Proof.**

For an oscillator of mass $m$ and frequency $\omega$, let $\phi$ be its real normalized ground state, so $\sigma^2=\hbar/(2m\omega)$. For a prescribed $C^3$ center $d(t)$, set <a id="p1i:eq:driven"></a>


$$
\begin{aligned}V_d(x,t)&=\tfrac12m\omega^2(x-d(t))^2-m\ddot d(t)x,\\
 \psi_d(x,t)&=\phi(x-d(t))
  \exp\!\left(\frac{i m\dot d(t)x}{\hbar}+i\theta_d(t)\right),
 \qquad
 \dot\theta_d=-\frac{\omega}{2}-\frac{m\dot d^2}{2\hbar}.
 
\end{aligned}
$$

Equation (7.9).

 Substitution into the Schrödinger equation proves the formula: the $\phi'$ terms match, the oscillator acts on $\phi$ with energy $\hbar\omega/2$, and the acceleration term matches the time derivative of $m\dot d x$. Its current is $j=\dot d|\psi_d|^2$. The same construction applies to the receiver with its own mass, frequency and width $a$.

Choose the flat smooth step [(3.4)](/quantum-measurement/research/conditional-gaussian-preparation/a-smooth-copy-return-map-on-the-complete-configuration#eq:smooth-step) on each finite stage interval. The displayed Schrödinger calculation requires only a $C^3$ center, so the polynomial schedule given earlier is also sufficient for the endpoint formulas and all estimates. In qubit sector $s$ use the block-diagonal sum of [(7.9)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:driven) for the corresponding writer and receiver centers. First move only the writer from $0$ to $(-1)^{s+1}D$; then hold it and move only the receiver from $0$ to $(-1)^{s+1}A$; then hold the receiver and return the writer to zero.

The two internal sectors eliminate every interference cross term in the complete positional density and current, even when the reference vectors overlap. Each moving-coordinate velocity is a convex combination of the two prescribed center velocities. Active densities are strictly positive at every finite coordinate, including $p=0,1$, and the velocities are smooth locally and bounded on each finite time interval. Thus the active ODE has a unique global solution for every finite entrance coordinate. The old coordinates remain under their admitted held parent. During copy the writer has zero current; during return the receiver has zero current.

For a one-dimensional conservative flow, its density CDF is constant along a trajectory: differentiating the CDF in time gives $-j$, and the advective term is $\rho\dot q=j$. Applying this identity first to the writer mixture, then to the receiver at the frozen writer coordinate, and finally to the returning writer at the frozen receiver coordinate gives [(7.5)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:flow1)–[(7.7)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:flow3). All the CDFs involved are strictly increasing. The final joint wave is <a id="p1i:eq:finalwave"></a>


$$

 \sqrt{g_\sigma(q_{\rm final})}
 \left(\sqrt{h_a(z+A)}e^{i\theta_0}|0\rangle\chi_0
 +\sqrt{h_a(z-A)}e^{i\theta_1}|1\rangle\chi_1\right)
 \otimes\Xi(N),

$$

Equation (7.10).

 with known spatially constant branch phases. Its receiver marginal is $M_p$ and hence its receiver reference quantile is [(7.8)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:flow4).

For a direct Jacobian check, write 

$$

 L(q,z)=p g_\sigma(q+D)h_a(z+A)
       +(1-p)g_\sigma(q-D)h_a(z-A).

$$

 It factors both as $\rho_p(q)$ times the conditional receiver density and as $M_p(z)$ times the conditional split-writer density. Consequently the Jacobian of $(u,v)$ with respect to $(q,z)$ is $L$, and that of $(r,b)$ with respect to $(q,z)$ is also $L$. Positivity gives determinant one for $T_p$ and the successive inverse CDFs give its inverse. This proves reference-area preservation independently of any actual-law assertion.

Finally let $U(t)$ be a spatially constant internal unitary that stores the measured qubit in a fresh internal register. For an explicit SWAP, take $K=\pi(I-\mathrm{SWAP})/2$ and $U(t)=\exp[-i s(t)K]$, where $s$ increases smoothly from zero to one. The transformed parent is <a id="p1i:eq:swap"></a>


$$

 H_U(t)=U(t)H_{\rm hold}(t)U(t)^\dagger
                +i\hbar\dot U(t)U(t)^\dagger.

$$

Equation (7.11).

 The receiver holding projectors must be conjugated in this expression. Then $U\Psi$ is the exact evolved wave. Spatial constancy makes its complete density and canonical current identical to those of $\Psi$. In particular, $j_z=0$ is preserved through the SWAP. The statement for a later finite hold requires subsequent controls to preserve the stored sector and receiver hold; it does not cover arbitrary future couplings to that receiver. No unknown state is cloned or erased. 

□





<a id="section-7-2"></a>

### 7.2 Own-outcome copying uniformly in the input



Let $S$ be the sign of the writer at the end of its split, using the same left/right convention as [(7.3)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:decoder). This is an earlier actual event. Define the whole-hold failure event 

$$

 \mathcal F=\{\text{there exists }t\in[t_{\rm copy},T_H]
                         \text{ with }Y(z(t))\ne S\}.

$$

 By Proposition [7.1](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:prop:parent), $\mathcal F$ is exactly the endpoint copy-mismatch event. Put $d_*=D/\sigma$, $a_*=A/a$ and let $\Phi$ be the standard Gaussian CDF.



**Lemma 7.2 (Copying with a guarded receiver).**

<a id="p1i:lem:copy"></a> Suppose the entrance law is $du\,\nu(dN,dv)$, of total mass $m$, and $\nu$ is supported on $\eta\leq v\leq1-\eta$. Choose a writer guard $c_w>0$, $0<\gamma\leq\eta/2$, and $c_z<a_*$ with $\Phi(-c_z)<\eta/2$. Then, uniformly in $p\in[0,1]$, <a id="p1i:eq:Bcopy"></a>
<a id="p1i:eq:outcome"></a>


$$
\begin{aligned}(du\,\nu)(\mathcal F)&\leq m B,\\
 B&=\Phi(-(d_*-c_w))
                  +\frac{2\Phi(-(d_*+c_w))}{\gamma},
 \\
 \operatorname{TV}\bigl(\mathcal L(Y),m(p,1-p)\bigr)
                 &\leq m\{B+\Phi(-d_*)\}.
\end{aligned}
$$

Equation (7.12, 7.13).

 Here the label law has mass $m$. If instead $m=1$ and the actual receiver marginal obeys $\nu(dN,dv)\leq C\kappa(dN)dv$ for a probability $\kappa$, the same conclusions hold on replacing $B$ by $B+2C\eta$. 





**Proof.**

The split writer has density $\rho_p$. Its band $|q|<c_w\sigma$ has mass at most $\Phi(-(d_*-c_w))$, since the two translated Gaussians give the same band integral. On $q<-c_w\sigma$, the integral of the wrong posterior is 

$$

 \int_{q<-c_w\sigma}(1-w_p(q))\rho_p(q)\,dq
       =(1-p)\Phi(-(d_*+c_w)).

$$

 On the right the corresponding integral is $p\Phi(-(d_*+c_w))$. Markov's inequality bounds the two bad-posterior sets by at most the second term in [(7.12)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:Bcopy); the factor two is a convenient conservative bound. There is no division by $p$ or $1-p$.

On the remaining left region, $w_p\geq1-\gamma$. The copy equation gives 

$$

 G(z+A)\leq\frac{v}{w_p}
 \leq\frac{1-\eta}{1-\gamma}\leq1-\eta/2.

$$

 Since $\Phi(-c_z)<\eta/2$, this implies $z<(c_z-a_*)a<0$. The reflected argument gives $z>0$ on the right good region. Independence of $u$ from the full $\nu$ means that the discarded writer mass is multiplied by $m$, regardless of correlations between $N$ and $v$. This proves the failure bound. Moreover 

$$

 (du\,\nu)(S=0)=m\{p+(1-2p)\Phi(-d_*)\}.

$$

 Coupling $Y$ with this earlier $S$ proves [(7.13)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:outcome). Under the cap, the omitted receiver-end intervals have mass at most $2C\eta$, which proves the last statement. 

□





<a id="section-7-3"></a>

### 7.3 The actual conditional-state metric



At a nonnode, divide the complete wave by its positional norm to obtain its internal conditional vector. For the parent above, tracing the old factor and ready writer leaves the normalized logical-memory/reference vector <a id="p1i:eq:conditional"></a>


$$

 \xi_\chi(z)=
 \frac{\sqrt{h_a(z+A)}e^{i\theta_0}|0\rangle\chi_0
       +\sqrt{h_a(z-A)}e^{i\theta_1}|1\rangle\chi_1}
      {\sqrt{M_p(z)}}.

$$

Equation (7.14).

 For an actual endpoint law $\mu_{\chi,T}$ define the labelled state <a id="p1i:eq:cq"></a>


$$

 \Omega_\mu(\chi)=\int
 |Y(z)\rangle\langle Y(z)|\otimes
 |\xi_\chi(z)\rangle\langle\xi_\chi(z)|\,d\mu_{\chi,T}.

$$

Equation (7.15).

 The target projective instrument is the trace-one operator <a id="p1i:eq:ideal"></a>


$$

 \Lambda(\chi)=\sum_{s=0}^1|s\rangle\langle s|_Y
               \otimes|s\chi_s\rangle\langle s\chi_s|,
 \qquad |s\chi_s\rangle=|s\rangle\otimes\chi_s.

$$

Equation (7.16).

 The phases in [(7.14)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:conditional) do not change an individual ideal branch projector. The classical register in [(7.15)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:cq) is an analysis of the physical receiver coordinate; its introduction alone would not construct a physical receiver.

For each fixed input the same-parent flow is a measurable map, so entrance TV contracts under its pushforward. Integrating any trace-one positive operator field contracts TV into trace distance: <a id="p1i:eq:kernelcontract"></a>


$$

 D\left(\int K\,d\mu,\int K\,d\nu\right)
 \leq\tfrac12\int\|K\|_1\,d|\mu-\nu|
 =\operatorname{TV}(\mu,\nu).

$$

Equation (7.17).

 This elementary fact applies to [(7.15)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:cq); it requires no assumption that the non-Born input-to-output assignment is linear.



**Theorem 7.3 (One-use instrument from partial readiness).**

 <a id="p1i:thm:instrument"></a> In the exact parent of Proposition [7.1](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:prop:parent), the following two statements hold uniformly for all inputs [(7.1)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:input) and all finite internal reference dimensions.

*Capped receiver.* Suppose 

$$

 \operatorname{TV}(\mu,du\,\nu)\leq\delta,
 \qquad \nu(dN,dv)\leq C\kappa(dN)dv,

$$

 where $\nu$ is the actual nuisance/receiver marginal and $\kappa$ is a probability measure consistent with the retained spectators. With $B$ as in [(7.12)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:Bcopy), <a id="p1i:eq:capinstrument"></a>


$$
\begin{aligned}\Pr_\mu(\mathcal F)&\leq\delta+B+2C\eta,\\
 D(\Omega_\mu(\chi),\Lambda(\chi))
 &\leq\delta+B+2C\eta+\Phi(-d_*)
                         +\sqrt{C\Phi(-a_*)}.
\end{aligned}
$$

Equation (7.18).



*Common initial box, without a density cap.* Suppose the entrance law decomposes as $\mu=\mu_B+\mu_E$, with masses $m$ and $\tau=1-m$. The measure $\mu_B$ is the pushforward of a single original preparation box, and $\nu_B$ is its own nuisance/receiver marginal. Assume <a id="p1i:eq:boxpremises"></a>


$$

 \operatorname{TV}(\mu_B,du\,\nu_B)\leq\Delta_B,
 \qquad\nu_B(dN,dv)=f(N,v)\,\lambda(dN)dv,
 \qquad\int\operatorname{Var}_v f(N,\cdot)\,\lambda(dN)\leq V_z.

$$

Equation (7.19).

 Here $\lambda$ may include an arbitrary actual external-context law, $f\geq0$, and $\nu_B$ is supported on $\eta\leq v\leq1-\eta$. The one-use bounds are <a id="p1i:eq:boxhistory"></a>
<a id="p1i:eq:boxinstrument"></a>


$$
\begin{aligned}\Pr_\mu(\mathcal F)&\leq\tau+\Delta_B+mB,\\
 D(\Omega_\mu(\chi),\Lambda(\chi))
 &\leq\tau+\Delta_B+m\{B+\Phi(-d_*)\}
       +(m+V_z/2)\sqrt{\Phi(-a_*)}.
\end{aligned}
$$

Equation (7.20, 7.21).

 No claim of fresh reuse after this unknown-input measurement is included. 





**Proof.**

For a nonzero ideal branch weight let $\eta_s=|s\chi_s\rangle/\|\chi_s\|$. For a zero-weight branch choose any unit vector in its qubit sector. On the physical region $Y(z)=s$, the pure-state trace distance from [(7.14)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:conditional) to $\eta_s$ is $\sqrt{W(z)}$, where 

$$

 W(z)=\begin{cases}
 (1-p)h_a(z-A)/M_p(z),&z<0,\\
 p h_a(z+A)/M_p(z),&z\geq0.
 \end{cases}

$$

 This follows from the squared overlap with the orthogonal correct qubit sector. It also holds for a zero ideal branch weight: the conditional vector in that region is orthogonal to the chosen comparison sector. Direct integration gives the exact identity <a id="p1i:eq:wrongidentity"></a>


$$

 \int W(z)M_p(z)\,dz
 =(1-p)\int_{z<0}h_a(z-A)\,dz
       +p\int_{z\geq0}h_a(z+A)\,dz
 =\Phi(-a_*).

$$

Equation (7.22).

 The returned writer integrates to one. Area preservation of $T_p$ thus gives <a id="p1i:eq:pullwrong"></a>


$$

 \int_{(0,1)^2} W(z(T_p(u,v)))\,du\,dv=\Phi(-a_*).

$$

Equation (7.23).



In the capped case, the comparison density is dominated by $C\,du\,dv\,\kappa(dN)$. Equation [(7.23)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:pullwrong) implies $\mathbb E W\leq C\Phi(-a_*)$, and Cauchy gives a conditional-state replacement cost at most $\sqrt{C\Phi(-a_*)}$. After replacement, only the classical branch weights differ from [(7.16)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:ideal); their trace distance is the outcome TV from Lemma [7.2](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:lem:copy). Finally [(7.17)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:kernelcontract) adds $\delta$ once for replacement of the actual entrance law by $du\,\nu$. The copy-history bound follows from the same entrance-law replacement applied to the path event $\mathcal F$.

For the boxed assertion fix a spectator value $N$ and set $m_N=\int f(N,v)dv$ and $V_N=\operatorname{Var}_v f(N,\cdot)$. The one-dimensional BV inequality $f(N,v)\leq m_N+V_N$ almost everywhere gives 

$$

 \|f(N,\cdot)\|_2^2\leq m_N(m_N+V_N),
 \qquad \|f(N,\cdot)\|_2\leq m_N+V_N/2.

$$

 This is equally the active-square $L^2(du\,dv)$ bound, since the comparison density is independent of $u$. Cauchy and [(7.23)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:pullwrong), followed by integration in $N$, bound the entire subprobability state-replacement cost by <a id="p1i:eq:BVstatefee"></a>


$$

 \int f(N,v)\sqrt{W(z(T_p(u,v)))}\,du\,dv\,\lambda(dN)
 \leq(m+V_z/2)\sqrt{\Phi(-a_*)}.

$$

Equation (7.24).

 There is no need to normalize rare spectator conditionals or to assign them a common cap. The outcome cost for this comparison law is $m(B+\Phi(-d_*))$. The boxed actual entrance law differs by at most $\Delta_B$, so [(7.17)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:kernelcontract) bounds its instrument distance from $m\Lambda(\chi)$ by the last three terms in [(7.21)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:boxinstrument). The outside-box output and $\tau\Lambda(\chi)$ are positive operators of the same trace $\tau$; their trace distance is at most $\tau$. Adding them charges the original tail once. The same decomposition gives [(7.20)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:boxhistory), with outside-box paths charged at most their mass. This proves both claims. 

□





**Remark 7.4 (Why a receiver premise is needed).**

<a id="p1i:rem:receiver"></a> Writer readiness alone does not force an arbitrary actual receiver to copy the writer. Fix $0<p<1$ and a finite left split-writer point $q$. Since $0<w_p(q)<1$, the right-hand side of [(7.6)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:flow2) evaluated at $z=0$ is strictly less than one. Choosing $v$ above that value gives $z>0$ although $S=0$. By continuity the failure persists on a neighborhood of $(q,v)$, on which a smooth actual density may be concentrated. This explains the load-bearing cap or source-variation/support premise. It also explains why the future receiver is included in the complete preparation law rather than introduced later as an unpriced fresh stock. 





<a id="section-7-4"></a>

### 7.4 The coherent 102-coordinate row





**Corollary 7.5 (One-use consequence of the physical-score row).**

 <a id="p1i:cor:PM100"></a> Take the preparation parent and complete actual-law class of Theorem [4.2](/quantum-measurement/research/conditional-gaussian-preparation/complete-law-preparation-with-every-archive-retained#p1p:thm:prep) with $n=100$ known-input warmup cycles. The $102$ scalar positional coordinates are one writer, $100$ warmup receivers, and one untouched receiver for the unknown measurement. Assume the sum of the full conditional physical relative scores is at most $100$, and the sum of actual standardized twentieth moments is at most $10^{15}$. All these conditions include the untouched receiver and are averaged against the actual retained external-context law. Use the complete initial box $|\xi_i|\leq10$ and separations $50$ packet widths. Load the unknown input after warmup and use the same separation for its one-use measurement. Then <a id="p1i:eq:headline"></a>


$$

 \sup_{\chi,\,\dim\mathcal R<\infty}
 D(\Omega_\mu(\chi),\Lambda(\chi))<1.0052\times10^{-5}.

$$

Equation (7.25).

 The same ceiling bounds the unknown measurement's own-outcome copy and entire admitted hold failure. It does not assert that the unknown-use output is fresh for another unknown measurement. 





**Proof.**

The original complete box has outside mass $\tau\leq10^{15}/10^{20}=10^{-5}$. The preparation estimates give <a id="p1i:eq:boxrow"></a>


$$
\begin{aligned}V_w&\leq2.6331\times10^{23},&
 E_{\rm map}&\leq2.00006\times10^{-16},\\
 \Delta_B&\leq\frac{V_w}{4\,2^{100}}+2E_{\rm map}
                  <5.192874163845\times10^{-8}.
\end{aligned}
$$

Equation (7.26).

 The quantity $\Delta_B$ compares the actual *boxed* warmup endpoint to a uniform writer times its own boxed nuisance marginal. It does not already include the outside-box tail.

The unused receiver coordinate $v$ does not participate in warmup. Each warmup map is independent of $v$ and preserves the reference volume of the other coordinates. Therefore its pushforward preserves the integrated $v$-directional BV norm of the initial boxed density; this can be seen by commuting the distributional $v$ derivative with the pushforward and using volume preservation. Marginalizing the final writer contracts that norm. The physical score-to-BV estimate therefore gives <a id="p1i:eq:sourcevariation"></a>


$$

 V_z\leq\sqrt{2\pi}e^{50}
                \{\sqrt{J_z}+\sqrt{J_z+2}\}
        <2.6331\times10^{23},

$$

Equation (7.27).

 where $J_z\leq100$. The source remains supported on $v\in[\Phi(-10),1-\Phi(-10)]$ under every warmup map and its marginalization. Thus it already satisfies the receiver guard for $\eta=10^{-110}$; no new source cut or second moment-tail charge is used.

Apply Theorem [7.3](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:thm:instrument) with $d_*=a_*=50$, $c_w=3$, $c_z=24$ and $\gamma=10^{-130}$. The inequalities $\gamma\leq\eta/2$ and $\Phi(-24)<\eta/2$ hold, and the left good receiver finishes below $-26a$. Gaussian tail bounds give <a id="p1i:eq:smallfees"></a>


$$
\begin{aligned}B&=\Phi(-47)+2\Phi(-53)/10^{-130}<10^{-480}+2\times10^{-470},
 \\
 \Phi(-50)&<10^{-544},\\
 (1+V_z/2)\sqrt{\Phi(-50)}&<10^{-240}.
 
\end{aligned}
$$

Equation (7.28).

 For reproducibility, the elementary inequality $\Phi(-x)<e^{-x^2/2}/(x\sqrt{2\pi})$, obtained by bounding $1\leq t/x$ in the Gaussian tail integral, proves these comparisons. The receiver guard follows also from $\Phi(-10)\geq0.01\,\phi(10.01)>10^{-110}$, by integrating just over $[10,10.01]$. Together with [(7.26)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:boxrow), substitution in [(7.21)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:boxinstrument) and [(7.20)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:boxhistory) yields the strict ceiling [(7.25)](/quantum-measurement/research/conditional-gaussian-preparation/one-unknown-input-and-a-separate-held-receiver#p1i:eq:headline). 

□



The count $102$ concerns scalar configurational coordinates of this effective oscillator parent. It is neither a count of microscopic particles nor the dimension of the internal quantum space. The finite internal reference and stored qubits introduce no new positional law in this model. The common-box proof keeps the same original subprobability throughout preparation and measurement. Its single tail allowance accounts for all coordinates of the original bank, including the future receiver; cutting that receiver again would unnecessarily charge part of the same exceptional population twice.
