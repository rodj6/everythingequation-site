# Section 4: Robust reconstruction of joint experiments

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

<a id="section-4"></a>

## 4 Robust reconstruction of joint experiments

<a id="sec:reconstruction"></a> 

<a id="section-4-1"></a>

### 4.1 The information lost by deleting a view

 The obstruction concerns exact target selection, not the existence of stable measures of joint information. A different question is available: after retaining only part of an observation, can one common reconstruction procedure reproduce the full experiment for every unknown preparation?

Let $\Theta$ be a nonempty finite preparation set. An experiment has laws $P_{J,\theta}$ on a finite joint alphabet $\mathcal Y_J$. A retained view is the deterministic projection $\pi_L:\mathcal Y_J\to\mathcal Y_L$, with image alphabet $\mathcal Y_L$ and marginal laws $P_{L,\theta}$. <a id="source-definition-2"></a>

**Definition 4.1 (Directed reconstruction deficiency).**

<a id="def:deficiency"></a> The loss of reconstructing $J$ from $L$ is <a id="eq:deficiency"></a>


$$

 \delta_P(J\mid L)=\min_{G:\mathcal Y_L\rightsquigarrow\mathcal Y_J}
 \max_{\theta\in\Theta}{\operatorname{TV}}(P_{J,\theta},P_{L,\theta}G).

$$

Equation (4.1).

 The stochastic row kernel $G$ is the same for all unknown $\theta$. It may use a declared public context, but not the unknown source label. 

 This is directed statistical deficiency in a target-first, half-$L^1$ convention, not a new information measure. Statistical comparison has its classical Blackwell/Le Cam lineage <a id="citation-4"></a>[[6](/consciousness/research/paper-2/references#bib-Blackwell1953), [16](/consciousness/research/paper-2/references#bib-LeCam1964)]; deficiency has also been applied directly to feature quality <a id="citation-5"></a>[[24](/consciousness/research/paper-2/references#bib-vanRooyenWilliamson2014)]. Argument order, row versus column kernels, and the factor of two in variational divergence must be translated when comparing formulas.

The decoder reproduces *laws*. In particular it may resample even the retained coordinates. It need not recover the same realized event, preserve a particular archive carrier, respect a deadline, or be available as a native physical operation. Those stronger requirements belong to the execution contract in [Section 5](/consciousness/research/paper-2/native-execution-and-resource-relative-severability#sec:execution), [Section 6](/consciousness/research/paper-2/relational-encapsulation-through-a-causal-interface#sec:composition). They are not consequences of [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency).

<a id="source-proposition-2"></a>

**Proposition 4.2 (Finite comparison bounds).**

<a id="p2-06"></a> The minimum in [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency) exists, lies in $[0,1]$, and is a rational linear-program value for rational finite data. For any $\theta,\theta'$, <a id="eq:def-lower"></a>


$$

 \delta_P(J\mid L)\ge \tfrac12\bigl[
 {\operatorname{TV}}(P_{J,\theta},P_{J,\theta'})-
 {\operatorname{TV}}(P_{L,\theta},P_{L,\theta'})\bigr]_+.

$$

Equation (4.2).

 For experiments $\mathsf E,\mathsf F,\mathsf H$ on the same parameter set, <a id="eq:def-triangle"></a>


$$

 \delta(\mathsf E\mid\mathsf H)
 \le \delta(\mathsf E\mid\mathsf F)+\delta(\mathsf F\mid\mathsf H).

$$

Equation (4.3).

 More informative retained observations cannot increase reconstruction loss, nor can postprocessing the target. If $\max_\theta{\operatorname{TV}}(P_{J,\theta},\widehat P_{J,\theta})\le\epsilon$, with the same projection and preparation labels, then <a id="eq:def-stability"></a>


$$

 \bigl|\delta_P(J\mid L)-\delta_{\widehat P}(J\mid L)\bigr|\le2\epsilon.

$$

Equation (4.4).

 All these statements preserve the nominated experiment and decoder permissions. 

 <a id="source-proof-5"></a>

**Proof.**

Finite stochastic matrices form a compact polytope and the objective is continuous. The absolute-value epigraph gives a finite linear program with rational coefficients; a rational optimum can be chosen. Insert $P_{L,\theta}G$ and $P_{L,\theta'}G$ between the two target laws and use TV contraction under $G$ to obtain [Equation 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-lower). Composing two reconstruction kernels proves [Equation 4.3](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-triangle); the same argument gives the monotonicities. For a fixed $G$, replace both target and input laws by their hatted versions. The first replacement costs at most $\epsilon$, and the second at most $\epsilon$ after contraction. Take infima in both directions to obtain [Equation 4.4](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-stability). 

□

 For a decision loss valued in $[0,1]$, any decision procedure based on $J$ can be emulated from $L$, using an optimal $G$ followed by that procedure, with additional risk at most $\delta_P(J\mid L)$ for every preparation and hence every prior. This forward implication follows from the TV bound on bounded expectations. No full statistical-comparison converse is needed below.

One may record the entire table $\delta_P(J\mid L)$. A derived deletion diagnostic is <a id="eq:deletion-u"></a>


$$

 u_P(J)=\min_{j\in J}\delta_P(J\mid J\setminus\{j\}),

$$

Equation (4.5).

 where the empty view is a one-point alphabet. Positive $u_P(J)$ means that each one-coordinate deletion loses experiment information. It is not an additive information decomposition, a physical edge attribution, or an exhaustive notion of integration. In particular, it should not be identified with a partial-information-decomposition atom; unique-information constructions answer their own specified comparison questions <a id="citation-6"></a>[[5](/consciousness/research/paper-2/references#bib-BertschingerEtAl2014)].



<a id="section-4-2"></a>

### 4.2 Genuine informational padding

 <a id="source-proposition-3"></a>

**Proposition 4.3 (Zero loss and common-conditional padding).**

<a id="p2-07"></a> For a deterministic view $Y_L=\pi_L(Y_J)$, $\delta_P(J\mid L)=0$ if and only if there is one conditional kernel $A(dy_J\mid y_L)$, supported on $\pi_L(y_J)=y_L$, such that <a id="eq:sufficiency"></a>


$$

 P_{J,\theta}=P_{L,\theta}A\qquad\text{for every }\theta.

$$

Equation (4.6).

 In particular, if <a id="eq:padding"></a>


$$

 P_\theta(y,z)=P_\theta(y)A(z\mid y)

$$

Equation (4.7).

 with the same conditional kernel in every preparation, then <a id="eq:padding-invariance"></a>


$$

 \delta((Y,Z)\mid Y)=0,
 \qquad
 \delta((Y,Z)\mid L)=\delta(Y\mid L)

$$

Equation (4.8).

 for any common retained experiment $L$. 

 <a id="source-proof-6"></a>

**Proof.**

A conditional reconstruction immediately proves the forward zero-loss claim. Conversely, an optimal zero-loss kernel reproduces the full experiment, though it need not initially preserve the view. Put a strictly positive prior on the finite $\Theta$. The reconstructed Markov chain $\Theta\to Y_L\to Y_J^*$ has the original $(\Theta,Y_J)$ law at its endpoints. Data processing gives $I(\Theta;Y_J)\le I(\Theta;Y_L)$. Since $Y_L$ is originally a deterministic function of $Y_J$, the reverse inequality holds. Thus $I(\Theta;Y_J\mid Y_L)=0$ in the original experiment. Its conditional law supplies $A$, common to every preparation on the nonnull support. Values null for every preparation can be extended arbitrarily within their nonempty projection fibres. For padding invariance, reconstruct $Y$ and append $A$ for one bound, and project away $Z$ for the other. 

□

 Independent noise and a copy of an already retained record satisfy this informational criterion. A coordinate whose marginal merely ignores the source need not satisfy it. Nor does snapshot redundancy imply that the coordinate is causally idle later: an otherwise redundant backup may become indispensable after the original register is overwritten.



<a id="section-4-3"></a>

### 4.3 The exact masked-encoder loss

 The two rows in [Equation 3.3](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row0), [Equation 3.4](/consciousness/research/paper-2/minimal-target-masking#eq:mask-row1) remain valid statistical experiments on the extended interval $0\le{\varepsilon}\le1$. Only the original graph argument was restricted to $0\le{\varepsilon}\le\tfrac12$. <a id="source-theorem-2"></a>

**Theorem 4.4 (Exact reconstruction loss of the masked encoder).**

<a id="p2-08"></a> For the extended experiment, <a id="eq:masked-def1"></a>
<a id="eq:masked-def2"></a>


$$
\begin{aligned}\delta_P(12\mid1)&=\max\left\{\tfrac12-{\varepsilon},\frac{1-{\varepsilon}}{4}\right\},\\
 \delta_P(12\mid2)&=\tfrac12\max\{{\varepsilon},1-{\varepsilon}\}.
\end{aligned}
$$

Equation (4.9, 4.10).

 The first formula changes branch at ${\varepsilon}=\tfrac13$. Both losses are continuous and have explicit optimal reconstruction kernels. 

 <a id="source-proof-7"></a>

**Proof.**

For ${\varepsilon}\le\tfrac12$, the joint contrast is $1-{\varepsilon}$ and the first-coordinate contrast is ${\varepsilon}$, so [Equation 4.2](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:def-lower) gives $\tfrac12-{\varepsilon}$. For a second bound on the whole interval, put $q_+=(1+{\varepsilon})/2$, $q_-=(1-{\varepsilon})/2$. The reconstruction rows obey 

$$

 Q_0=q_+G_0+q_-G_1,\qquad Q_1=q_-G_0+q_+G_1.

$$

 Therefore $Q_1(00)\ge(q_-/q_+)Q_0(00)$. If both reconstruction errors are at most $t$, the target masses give $Q_0(00)\ge\tfrac12-t$ and $Q_1(00)\le t$. Hence $t\ge(1-{\varepsilon})/4$. The two kernels in [Appendix A](/consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations#app:masking) attain the larger lower bound on the respective intervals. For output 2, the retained law is the same fair bit under both sources. Every decoder gives one common target law; the midpoint of the two targets attains half their TV diameter. Direct subtraction gives diameter $\max\{{\varepsilon},1-{\varepsilon}\}$. 

□

 Figure [1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#fig:masking) contrasts this continuous information loss with the inherited support selection. The new diagnostic does not reproduce the old graph while somehow removing its discontinuity: it deliberately asks a different, quantitative question. <a id="source-figure-1"></a>

![Figure 1](/publications/consciousness/paper-2/figures/figure-1.svg)

 



 



Figure 1. Minimal-target masking and quantitative deletion loss. The projected edge $1\to2$ is present only at ${\varepsilon}=0$ in the inherited family, whereas its joint reconstruction loss remains close to $1/2$ near zero. The graph statement uses $[0,1/2]$; the displayed deficiency formulas are valid on $[0,1]$. The curves are exact formulas, not fitted data.

<a id="fig:masking"></a> 



<a id="section-4-4"></a>

### 4.4 Why a single TV increment is insufficient

 <a id="source-proposition-4"></a>

**Proposition 4.5 (Marginal independence and scalar increments).**

<a id="p2-09"></a> No rule can discard every marginally source-independent coordinate while retaining all joint-only information. For a fixed contrast, or a common family of maximized contrasts, 

$$

 \sigma(J)=d(J)-\max_{L\subsetneq J}d(L)\ge0,

$$

 but $\sigma(J)=0$ does not imply that some proper view reconstructs $J$ exactly. 

 <a id="source-proof-8"></a>

**Proof.**

Let $(Y,Z)=(\xi\oplus b,\xi)$ with $\xi$ fair. Both marginals are independent of $b$, while $Y\oplus Z=b$. Thus marginal independence cannot identify irrelevant padding. Nonnegativity of $\sigma$ follows from contraction under projection, including after taking suprema over one common contrast family. At ${\varepsilon}=1/2$, the masked experiment has full and best-singleton contrasts both $1/2$, yet [Equation 4.9](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:masked-def1) gives $\delta_P(12\mid1)=1/8$ and [Equation 4.10](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:masked-def2) gives $\delta_P(12\mid2)=1/4$. 

□

 There is a concrete decision witness. With source prior ${\mathbb P}(b=0)=3/4$, optimal binary classification has Bayes error $1/8$ from the pair and $1/4$ from its first coordinate. The calculation is in [Appendix A](/consciousness/research/paper-2/appendix-a-exact-masking-and-boundary-calculations#app:masking). Equal-prior pairwise discrimination is only one decision problem, so preserving its best score does not preserve the full experiment.

Redundant representations can also overlap. In $(Y_1,Y_2,Y_3)=(\xi,\xi\oplus b,\xi)$, the pairs $12$ and $23$ each have deletion diagnostic $1/2$, while $u_P(13)=u_P(123)=0$. The full triple has not lost the bit: it contains redundant ways to retain it. A disjoint partition of informative representations is not implied by statistical sufficiency.
