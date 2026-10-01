# Appendix A: Exact masking and boundary calculations

<!-- Complete paper-2 web edition. Mathematical macros used below:
\headrulewidth = 0.3pt
\TV = \operatorname{TV}
\Law = \operatorname{Law}
\dist = \operatorname{dist}
\Eff = \operatorname{Eff}_{*}
\supp = \operatorname{supp}
\id = \operatorname{id}
\E = \mathbb E
\Prb = \mathbb P
\Ftwo = \mathbb F_2
\calE = \mathcal E
\calR = \mathcal R
\calN = \mathcal N
\calF = \mathcal F
\calW = \mathcal W
\ploc = P_{\mathrm{loc}}
\qop = q_{\mathrm{op}}
\Lop = \mathscr L_{\mathcal E}
\Rstar = R^{\ast}
\SPC = \textnormal{SPC-2}
\eps = \varepsilon
\ind = \mathbf 1
\normone = \left\lVert#1\right\rVert_1
-->

<a id="section-A"></a>

## A Exact masking and boundary calculations

<a id="app:masking"></a> 

<a id="section-A-1"></a>

### A.1 Rows, marginals and decoded return

 Write outcomes in the order $00,01,10,11$. Under source $b=0$, the unperturbed encoder gives $00,11$ equally, while the perturbing branch gives $00,01$ equally. Under $b=1$, the respective pairs are $01,10$ and $10,11$. Their mixture gives <a id="eq:appendix-rows"></a>


$$

 P_0=\left(\frac12,\frac{\varepsilon}2,0,\frac{1-{\varepsilon}}2\right),\qquad
 P_1=\left(0,\frac{1-{\varepsilon}}2,\frac12,\frac{\varepsilon}2\right).

$$

Equation (A.1).

 The first marginals are $((1+{\varepsilon})/2,(1-{\varepsilon})/2)$ and its reversal; the second marginal is fair in both cases. On $[0,1/2]$, the absolute row difference sums to $2(1-{\varepsilon})$, so the joint TV is $1-{\varepsilon}$. On the extended interval it is instead $\max\{{\varepsilon},1-{\varepsilon}\}$.

Relative to ${\varepsilon}=0$, one mass ${\varepsilon}/2$ moves within each prepared row; thus the instrument-row TV perturbation is ${\varepsilon}/2$. The decoder computes parity. Its error is zero on the main encoder branch and $1/2$ on the perturbing branch. Hence its total error is ${\varepsilon}/2$, and the decoded root laws have contrast $1-{\varepsilon}$. No inference about a revised graph-based tour follows from this terminal calculation alone.



<a id="section-A-2"></a>

### A.2 Optimal reconstruction attainers

 For $0\le{\varepsilon}\le1/3$, define <a id="eq:attainer-low0"></a>
<a id="eq:attainer-low1"></a>


$$
\begin{aligned}G_0&=\left(\frac{1-2{\varepsilon}}{1-{\varepsilon}},0,0,\frac{\varepsilon}{1-{\varepsilon}}\right),\\
 G_1&=\left(0,\frac{\varepsilon}{1-{\varepsilon}},\frac{1-2{\varepsilon}}{1-{\varepsilon}},0\right).
\end{aligned}
$$

Equation (A.2, A.3).

 Both rows are nonnegative and sum to one. With $q_\pm=(1\pm{\varepsilon})/2$, $Q_0=q_+G_0+q_-G_1$ and $Q_1=q_-G_0+q_+G_1$. Direct subtraction yields <a id="eq:low-residual"></a>


$$

 Q_0-P_0=\left(
 -\frac{{\varepsilon}^2}{1-{\varepsilon}},\ 0,\
 \frac{1-2{\varepsilon}}{2},\
 -\frac{1-3{\varepsilon}}{2(1-{\varepsilon})}\right).

$$

Equation (A.4).

 The positive mass is exactly $1/2-{\varepsilon}$. The second residual is a permutation with the same positive mass, proving attainment of that error.

For $1/3\le{\varepsilon}\le1$, define <a id="eq:attainer-high0"></a>
<a id="eq:attainer-high1"></a>


$$
\begin{aligned}G_0&=\left(\frac12,\frac{3{\varepsilon}-1}{4{\varepsilon}},0,\frac{1-{\varepsilon}}{4{\varepsilon}}\right),\\
 G_1&=\left(0,\frac{1-{\varepsilon}}{4{\varepsilon}},\frac12,\frac{3{\varepsilon}-1}{4{\varepsilon}}\right).
\end{aligned}
$$

Equation (A.5, A.6).

 These too are stochastic rows on their stated interval. The residuals are <a id="eq:high-residual"></a>


$$

 Q_0-P_0=\left(-\frac{1-{\varepsilon}}{4},0,\frac{1-{\varepsilon}}{4},0\right),
 \qquad Q_1-P_1=-(Q_0-P_0).

$$

Equation (A.7).

 Their TV is $(1-{\varepsilon})/4$. At ${\varepsilon}=1/3$ both attainer families agree. At ${\varepsilon}=0$ the first family is well defined; at ${\varepsilon}=1$ the second gives exact reconstruction. There is no division by zero within the chosen intervals. Together with the lower bounds in [Theorem 4.4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-08), this proves the first formula for every real ${\varepsilon}\in[0,1]$, not merely for a sampled grid.

For the second view, every reconstruction is source-independent. By triangle inequality its maximum error is at least half the target diameter; the midpoint $(P_0+P_1)/2$ attains it. This proves the second formula independently of the first.



<a id="section-A-3"></a>

### A.3 The decision witness at one-half

 At ${\varepsilon}=1/2$, the target rows are $(1/2,1/4,0,1/4)$ and $(0,1/4,1/2,1/4)$. Under prior $(3/4,1/4)$, the binary Bayes error is the sum of the smaller weighted mass at each outcome: 

$$

 \sum_y\min\{(3/4)P_0(y),(1/4)P_1(y)\}=1/16+1/16=1/8.

$$

 The first marginals are $(3/4,1/4)$ and $(1/4,3/4)$, giving 

$$

 \min\{9/16,1/16\}+\min\{3/16,3/16\}=1/4.

$$

 The equal-prior full and singleton TV contrasts nevertheless both equal $1/2$. This is the promised explicit loss not detected by their difference.



<a id="section-A-4"></a>

### A.4 A1 versus a singleton-marginal diagnostic

 <a id="source-proposition-14"></a>

**Proposition A.1 (Separation from marginal recurrence).**

<a id="p2-01"></a> On a common full-product domain with the same one-coordinate preparation contrasts, suppose each compared complete successor row factors across output components conditional on the nominated prepared state and operation. Then every minimally distinguishing output block is a singleton. Hence the inherited joint and singleton dependence graphs agree in that specialization. If the same scheduled root observation belongs to the admitted full-record grammar, positive root return also implies positive full-record contrast at that lag.

Neither direction of comparison holds in general between the full A1 qualification of a nominated whole and the combination of a reciprocal singleton influence graph with positive one-step retained distinction. 

 <a id="source-proof-26"></a>

**Proof.**

If every singleton law agrees and the joint law is the product of those singleton laws under each preparation, the joint law agrees. Thus a nonsingleton cannot be minimally distinguishing. Full-record contrast dominates its root marginal by TV contraction.

For the first countermodel, use the unperturbed encoder and decoder. The encoder has no distinguishing singleton output, while its pair retains the source bit and the decoder returns it. With separately supplied internal mechanism routes and a compatible native schedule, the joint graph closes into a two-register whole. Its native predictive states are distinct: the decoder distinguishes different parities, and the encoder distinguishes different first bits among equal-parity pairs. Thus the full four-state partition is predictive and automatically congruent. The singleton graph omits the forward encoder route and does not close the same whole.

For the reverse countermodel, let the only repeated native update be $T(b,c)=(b\oplus c,b\oplus c)$. Changing either input changes both next outputs completely, and some one-step state contrast is one. But $T^2(b,c)=(0,0)$ for every input. A time-respecting closed tour visiting both registers needs at least two ticks, by which time every distinction has vanished. There is no positive covering return for the nominated whole in this operation catalogue. 

□

 These are statements about specified native realizations. Neither a matrix without route semantics nor a claimed one-step influence by itself supplies the full A1 certificate.



<a id="section-A-5"></a>

### A.5 Strong local retention with vanishing cross influence

 For completeness, encode each binary coordinate by its centered sign. In the noisy-persistence/cross-update example, the conditional mean response is 

$$

 M_g=\begin{pmatrix}a(1-g)&ag\\bg&b(1-g)\end{pmatrix},
 \qquad a=4/5,\quad b=1/2.

$$

 A source contrast varying only the first initial bit propagates after two ticks with coefficient $(M_g^2)_{11}=a^2(1-g)^2+abg^2$. For a binary observation this is its row TV contrast. The one-step cross-influence margins are $ag$ and $bg$, giving minimum $g/2$. The return therefore tends to $16/25$ while the reciprocal cross margin tends to zero. The equation concerns the fixed scheduled contrast and declared one-coordinate influences. It is not a claim that a signal exclusively traversed the cross link.
