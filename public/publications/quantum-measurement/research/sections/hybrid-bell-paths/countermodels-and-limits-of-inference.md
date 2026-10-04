# Section 11: Countermodels and limits of inference

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-11"></a>

## 11 Countermodels and limits of inference

<a id="sec:rivals"></a> 

<a id="section-11-1"></a>

### 11.1 A stationary coherent cycle tests individual edge ownership

 Take three vertices with $w_r=1/3$, $\Psi=(1,1,1)^T/\sqrt3$, and 

$$

 H=\frac{3\hbar j}{2}
 \begin{pmatrix}0&-i&i\\i&0&-i\\-i&i&0\end{pmatrix},\qquad j>0.

$$

 Then $H\Psi=0$ but $J_{21}=J_{32}=J_{13}=j$. The canonical exporters therefore produce clockwise packets even though every vertex population is stationary. Theorem [8.1](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#thm:main) gives a clockwise Bell cycle at rate $3j$, with Poisson$(3jT)$ jump count and its full continuous event times. A generator which simply keeps the configuration fixed has the same one-time equilibrium and zero divergence, yet differs in path law by $1-e^{-3jT}$. It is excluded by individual primitive bond ownership, not by the continuity equation alone.

The nearest Markov surplus rival adds a constant $K>0$ to both directional equilibrium fluxes on each cycle bond. It also preserves $w$. Its clockwise rate is $3(j+K)$ and its counterclockwise rate is $3K$, independently of the occupied vertex. The probability of at least one backward jump is $1-e^{-3KT}$, whereas Bell's probability is zero. Thus full-path distance is at least that number. The microscopic theory suppresses this rival by the proved recombination hierarchy, rather than declaring two-way reactions impossible.



<a id="section-11-2"></a>

### 11.2 The finite-recombination rival really has dark traffic

 On a two-vertex edge in a zero-current interval, put one packet of each species, no new births, and all $N$ carriers at the two endpoints. Total service rate is $\kappa\mu_N$ and recombination rate is $a$. In the Poisson contact comparison, the probability that at least one of the $N$ carriers changes position before $T$ is exactly <a id="eq:darkrival"></a>


$$
\frac{\kappa\mu_N}{a+\kappa\mu_N}
       \left(1-e^{-(a+\kappa\mu_N)T}\right).
 

$$

Equation (52).

 The first event is a race of the two derived contact mechanisms. Recombination first removes both packets; service first already makes the path nonconstant. The instantaneous signed-queue comparison starts at $Z=0$ and permits no service. Thus [(52)](/quantum-measurement/research/hybrid-bell-paths/countermodels-and-limits-of-inference#eq:darkrival) is the exact total-variation distance between its joint $N$-carrier path and that of this finite-rate Poisson reaction experiment. It is not, in general, the discrepancy probability for the designated ordinary carrier alone. The original finite spatial gas requires the additional comparison error of Theorem [5.1](/quantum-measurement/research/hybrid-bell-paths/a-finite-spatial-ensemble-and-its-poisson-comparison#thm:gas). A mixed stock can occur after opposite exports before recombination completes. This local test does not replace the empty-queue initialization of Theorem [8.1](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#thm:main). It shows that the finite-rate mechanism has distinct predictions and is not a renamed Jordan decomposition. If recombination is absent or too slow, surplus survives.



<a id="section-11-3"></a>

### 11.3 The spatial ensemble selects timing beyond mean flux

 Let $\Delta=1/R$, $M\ge3$, and choose a single uniform $U\in[0,\Delta)$. Put the arrival positions at times $U+k\Delta$, $k=0,\ldots,M-1$, and randomly permute particle labels. Every individual arrival time is uniform on $[0,M/R)$, just as for the independent gas, and mean flux is $R$. Nevertheless on $[0,2/R]$ there are exactly two contacts with separation exactly $1/R$. The Poisson comparison assigns zero probability to that exact spacing. The complete contact-history distance is therefore one. Independence of initial positions, not their one-body density or mean pressure, excludes this rival. P4 makes that additional statistical content explicit.



<a id="section-11-4"></a>

### 11.4 Recombination does not conceal a readable pilot ledger

 Let $E_\pm$ be signed export counts, $D_\pm$ signed consumption counts and $A$ the recombination count on one bond. For empty initial stock, 

$$

 E_+=P^++D_++A,\qquad E_-=P^-+D_-+A.

$$

 Consequently <a id="eq:ledger"></a>


$$
N(\Pi(t)-\Pi(0))=P^+(t)-P^-(t)+D_+(t)-D_-(t)+u(t).
 

$$

Equation (53).

 All retained recombination products cancel from the signed identity. Fast recombination removes surplus service but does not erase the source action from a joint ledger. A hypothetical ordinary classical reader of this ledger remains a countermodel to the older unrestricted material source, exactly as in the monograph. P3 replaces that unrestricted coupling constitution. Gauge invariance and finite work do not imply P3: $\Pi$ is gauge invariant and can be put in an additional invariant mixed energy if that extra force is permitted.

Within the declared model a reader is an ordinary device in the common $H$. Its probabilities in the Bell limit have the positive-effect form <a id="eq:effect"></a>


$$
{\mathbb P}(M=m)=\|P_mU(\psi\otimes\alpha)\|^2
       =\langle\psi,E_m\psi\rangle,\qquad 0\le E_m\le I.
 

$$

Equation (54).

 This follows from full-configuration equivariance and the actual joint unitary; it is not a separate measurement postulate. For a fixed compiled clock implementation, Proposition [A.1](/quantum-measurement/research/hybrid-bell-paths/appendix-a-initial-calibration-and-fixed-circuit-resource-rates#kin:rate) supplies an input-uniform finite-resource error $\Delta_N$. An inaccessible reference remains in $U$ and is acted on by the identity. A direct rewrite of an actual ordinary source bit into a memory while leaving the joint field at $\psi\otimes|0_M\rangle$ would instead give positive actual probability to $M=1$ at zero coherent weight. It is not an allowed material interaction.



**Proposition 11.1 (A finite obstruction to passive native-event counting).**

 For $H=\hbar g\sigma_x$, $\tau=gT\in(0,\pi/4)$, no fixed positive record effect can reproduce the probability of an unchanged native $0\to1$ Bell event for all three inputs $|0\rangle$, $|1\rangle$ and $(|0\rangle-i|1\rangle)/\sqrt2$ with error smaller than <a id="eq:nativegap"></a>


$$
\frac{\sin\tau(\cos\tau-\sin\tau)}{3}.
 

$$

Equation (55).

 

 

**Proof.**

Direct two-state wave evolution gives event probabilities $\sin^2\tau,0,\sin\tau\cos\tau$. For the first and third preparations the current is forward throughout the interval, so there is at most one forward event and its probability is the loss of origin weight. For the second it is backward. If a positive effect has error at most $\varepsilon$ on all three, its trace is at most $\sin^2\tau+2\varepsilon$, whereas its expectation in the third vector is at least $\sin\tau\cos\tau-\varepsilon$. A positive expectation cannot exceed the trace. Rearrangement gives [(55)](/quantum-measurement/research/hybrid-bell-paths/countermodels-and-limits-of-inference#eq:nativegap). 

□

 At $gT=\pi/8$ the gap is $(\sqrt2-1)/6$. A material apparatus with path error $\Delta_N$ cannot be a universal passive native counter with record error below this gap minus $\Delta_N$. The permitted coherent copy changes the complete source–memory field, so it does not claim to evade this obstruction. Its archive attests its own actual copy crossing. This explicitly distinguishes successful measurement from a fictitious passive record of every earlier native excursion.



<a id="section-11-5"></a>

### 11.5 Fine and coarse paths remain distinct

 For any coarse boundary with microscopic currents $j_1,\ldots,j_k$, forward mean incidence is $\sum_i[j_i]_+$, not generally $[\sum_i j_i]_+$. Their discrepancy is 

$$

 \frac12\left(\sum_i|j_i|-\left|\sum_i j_i\right|\right).

$$

 The monomial-copy theorem computes every fine current and makes this discrepancy zero at that specific boundary. It does not infer the result from a coarse clock population. Arbitrary circuit gates can have negative fine forward factors. Reduced null maps are used only to compute probabilities after retaining every receiver in the joint model; they do not supply actual trajectory rates. Expected flux integrals likewise remain expectations of counts, not sample counting measures.
