# Section 12: Setting dependence, controlled nonequilibrium, and access

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

<a id="section-12"></a>

## 12 Setting dependence, controlled nonequilibrium, and access

 <a id="sig:section"></a>

The statistical distinction between two preparations is not itself a communication channel. A channel additionally requires reproducible preparation, independent message choices, and a receiving apparatus whose declared access does not already transmit the message. The next results separate these requirements.



<a id="section-12-1"></a>

### 12.1 A sharp quantitative version of the transition-set argument



<a id="source-theorem-14"></a>

**Theorem 12.1 (CHSH dependence and the exact total-variation budget).**

 <a id="sig:budget"></a> 

*Status: Proved.*

 Let $(\Lambda,\mathcal A,\nu)$ be a probability space. Let measurable functions $A_x,B_{xy}:\Lambda\to\{-1,1\}$, $x,y\in\{0,1\}$, describe a deterministic experiment with a common setting-independent initial law $\nu$. The absence of $y$ from $A_x$ is a causal hypothesis, for example forward dynamics with Alice's retained record fixed before Bob chooses $y$. Suppose 

$$

 S=\int(A_0B_{00}+A_0B_{01}+A_1B_{10}-A_1B_{11})\,d\nu>2,
 \qquad \nu(B_{0y}=1)=\nu(B_{1y}=1).

$$

 Define 

$$

 D_y=\{B_{0y}\ne B_{1y}\},\quad \kappa_y=\nu(D_y),\quad
 g_y=\mathbf1_{\{B_{0y}=1\}}-\mathbf1_{\{B_{1y}=1\}}.

$$

 Then 

1. (i) The measure of the union, rather than merely the sum of its two measures, obeys <a id="sig:union"></a>


$$

 \nu(D_0\cup D_1)\ge\frac{S-2}{2}.

$$

Equation (64).

 Consequently $\max_y\kappa_y\ge(S-2)/4$.

2. (ii) For $P\ll\nu$ with density $h$, the difference of Bob's plus probabilities is <a id="sig:signal"></a>


$$

 \Sigma_y(P)=\int g_yh\,d\nu=\int g_y(h-1)\,d\nu,
 \qquad |\Sigma_y(P)|\le2{\mathrm{TV}}(P,\nu).

$$

Equation (65).

3. (iii) For $|\epsilon|\le1$, the bounded density $h_\epsilon=1+\epsilon g_y$ satisfies 

$$

 {\mathrm{TV}}(h_\epsilon\nu,\nu)=\frac{|\epsilon|\kappa_y}{2},\qquad
 \Sigma_y(h_\epsilon\nu)=\epsilon\kappa_y.

$$

 More generally, if $\kappa_y>0$, the exact optimization over all absolutely continuous laws at distance at most $d\in[0,1]$ is <a id="sig:envelope"></a>


$$

 \sup_{\substack{P\ll\nu\,;\ {\mathrm{TV}}(P,\nu)\le d}}
 |\Sigma_y(P)|
 =\min\{2d,\ d+\kappa_y/2,\ 1\}.

$$

Equation (66).

 If $\kappa_y=0$, the supremum is zero for every $d$.

4. (iv) If $\kappa_y>0$, the non-signalling bounded densities form a relatively closed set with empty interior in the space of bounded probability densities, equipped with the $L^1(\nu)$ topology.

 



<a id="source-proof-41"></a>

**Proof.**

Let $C=A_0B_{00}+A_0B_{01}+A_1B_{10}-A_1B_{11}$. Outside $D_0\cup D_1$, it equals $A_0(B_{00}+B_{01})+A_1(B_{00}-B_{01})\in\{-2,2\}$. Everywhere $C\le4$, so $C\le2+2\mathbf1_{D_0\cup D_1}$. Integration gives [(64)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:union). This is the elementary CHSH argument <a id="citation-33"></a>[[4](/sealed-or-leaky/references#bib-CHSH69)], localized to the set on which locality fails.

For (ii), subtract the two probabilities and use $\int g_y\,d\nu=0$. As $g_y\in[-1,1]$, the total-variation norm bound gives [(65)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:signal). Part (iii)'s first two identities follow from $\int g_y=0$, $|g_y|=g_y^2=\mathbf1_{D_y}$, and $1+\epsilon g_y\ge0$.

For the optimization, suppress $y$ and set $a=\kappa_y/2>0$. The sets $G_+=\{g=1\}$ and $G_-=\{g=-1\}$ each have $\nu$-mass $a$; $G_0=\{g=0\}$ has mass $b=1-2a$. The preceding bound gives $|\Sigma|\le2d$. Also $\Sigma=P(G_+)-P(G_-)\le P(G_+)\le a+d$, and the analogous inequality holds for $-\Sigma$. Finally $|\Sigma|\le1$.

All three bounds are attained in the relevant ranges by densities constant on $G_+,G_-,G_0$. For $0\le d\le a$, replace their masses $(a,a,b)$ by $(a+d,a-d,b)$; the distance is $d$ and the signal is $2d$. For $a\le d\le1-a$, replace them by $(a+d,0,1-a-d)$; the distance is $d$ and the signal is $a+d$. When $b=0$, this second range is a single endpoint. For $d\ge1-a$, the measure $\nu(\cdot\mid G_+)$ has distance $1-a$ and signal one. These constructions prove [(66)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:envelope). When $\kappa_y=0$, $g=0$ almost surely for every $P\ll\nu$.

For (iv), $h\mapsto\int g_yh\,d\nu$ is continuous on $L^1$. If a bounded density $h$ gives zero signal, then $(1-t)h+t(1+g_y)$ is a bounded density converging to $h$ as $t\downarrow0$, with signal $t\kappa_y\ne0$. 

□



<a id="source-remark-4"></a>

**Remark 12.2 (Scope and sharpness).**

 

*Status: Scope.*

 <a id="sig:scope"></a> Equation [(64)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:union) is sharp in this abstract class: mix a deterministic local strategy attaining CHSH value $2$ with a one-way deterministic realization of a PR box attaining $4$, and include a common unbiased output sign. The marginal laws are unbiased, while the dependent fraction equals $(S-2)/2$. This construction is a sharpness example, not an assertion of physical PR-box resources.

Valentini's transition-set argument already establishes the existence of signalling nonequilibrium in deterministic completions reproducing quantum correlations, while explicitly allowing exceptional non-signalling distributions and merely hypothetical preparation <a id="citation-34"></a>[[13](/sealed-or-leaky/references#bib-V02)]. The theorem above supplies a union-measure refinement and an exact TV-budget optimization; no historical priority is claimed for these elementary refinements. It does not show that every nonequilibrium distribution signals. For example, adjoining an independent hidden coordinate unused by every outcome and changing only its law gives nonzero total variation without a signal. Nor does topological genericity in all bounded densities imply genericity in a physically accessible preparation family, which may lie wholly in the zero-signal set. Calling $\nu$ and $P$ a common readout fiber further requires a specified readout, such as the common wave, that omits their different configuration laws. 





<a id="section-12-2"></a>

### 12.2 A finite massive realization: replacing an exact-record premise



An exact two-party CHSH experiment need not be imported as a premise. A finite noisy realization suffices and can be constructed from the declared driven massive inventory.

<a id="source-proposition-8"></a>

**Proposition 12.3 (Semibounded two-party Gaussian writers).**

 <a id="sig:massive"></a> 

*Status: Proved conditional on the massive constitution and its forced writer.*

 Adopt the massive constitution's spinor Schrödinger inventory, kinetic-momentum guidance law, and complete initial equilibrium <a id="citation-35"></a>[[11](/sealed-or-leaky/references#bib-RM), labels mc:ax:material, mc:ax:motion, mc:ax:eq]. Two local finite massive pointers can realize deterministic recorded signs $A_x,B_{xy}$ with one common initial law, with Alice's record fixed before Bob's programme, such that <a id="sig:massiveCHSH"></a>


$$

 S=2\sqrt2\,v_Av_B,\qquad
 v_i=1-2\delta_i,\qquad
 \delta_i=\overline\Phi\!\left(\frac{L_i}{2\sigma_i}\right),

$$

Equation (67).

 and both parties' equilibrium marginals are unbiased and independent of the other setting. Here $\overline\Phi$ is the standard normal upper tail. In particular, $v_Av_B>1/\sqrt2$ gives $S>2$ at finite resources. 



<a id="source-proof-42"></a>

**Proof.**

Use the initial two-qubit state ${\lvert\Phi^+\rangle}=2^{-1/2}({\lvert00\rangle}+{\lvert11\rangle})$, independent ready key registers, and independent oscillator ground packets 

$$

 \phi_i(y)=(2\pi\sigma_i^2)^{-1/4}e^{-y^2/(4\sigma_i^2)},\qquad
 \sigma_i^2=\frac{\hbar}{2M_i\omega_i}.

$$

 All these initial waves, hence their equilibrium configuration law, are the same for the four setting pairs. Settings select subsequent Hamiltonian coefficients, not a different initial distribution.

Choose ideal qubit observables 

$$

 A_0^{\rm op}=\sigma_z,\quad A_1^{\rm op}=\sigma_x,\quad
 B_0^{\rm op}=(\sigma_z+\sigma_x)/\sqrt2,\quad
 B_1^{\rm op}=(\sigma_z-\sigma_x)/\sqrt2.

$$

 Their ideal CHSH value is $2\sqrt2$. For each local projective measurement, a bounded internal gate coherently writes its two projectors to a retained local key with states ${\lvert0\rangle},{\lvert1\rangle}$. No actual spin value or collapse is inserted. Write key $1$ to the local position using 

$$

 H_i(t)=\frac{p_i^2}{2M_i}
       +\frac{M_i\omega_i^2}{2}(y_i-c_i(t)K_i)^2,
 \quad K_i={\lvert1\rangle}{\langle1\rvert},
 \quad c_i=b_i+\ddot b_i/\omega_i^2,

$$

 where $b_i$ is smooth, starts at zero, ends at $L_i$, and has zero velocity and acceleration at each endpoint. This is a nonnegative Hamiltonian; the preliminary internal gates are bounded. Substitution in the Schrödinger equation gives, in the two key sectors, a ground packet at zero and a coherently displaced ground packet at $b_i(t)$, with phase gradient $M_i\dot b_i/\hbar$. This is precisely the forced writer proved in <a id="citation-36"></a>[[11](/sealed-or-leaky/references#bib-RM), mc:prop:writer].

Run Alice first, then hold her oscillator with $c_A=L_A$, while Bob runs his local gate and writer. Alice's wave in each orthogonal retained-key sector is now a real displaced ground packet times a spatially constant phase, which may depend on the key. Therefore $j_A=0$ pointwise, even while Bob's coefficients evolve. Alice's actual position and its threshold sign remain fixed. Forward uniqueness of guidance gives the same Alice sign for either subsequent Bob choice.

At the final time the joint density is 

$$

 \sum_{a,b=0}^1 p_{ab}^{xy}\,
  |\phi_A(y_A-aL_A)|^2|\phi_B(y_B-bL_B)|^2,
 \qquad
 p_{ab}^{xy}=\|(P_a^x\otimes P_b^y)\Phi^+\|^2.

$$

 Orthogonal keys remove all cross terms. Threshold at $L_i/2$ and assign sign $+1$ to label $0$, $-1$ to label $1$. A conditional label is read incorrectly with the same probability $\delta_i$ for either label; the two errors are independent conditional on $(a,b)$. Thus each correlation is multiplied by $v_Av_B$ and each initially unbiased marginal stays unbiased. Equivariance transfers the density calculation to actual positions, and guidance makes their signs measurable functions of the common initial configuration. This proves the claim. For Bob's stage this uses the Gaussian wave solution tensorwise with Alice's spatial coordinate retained; it does not apply the primitive writer's unconditional one-coordinate quantile formula to an entangled trajectory. 

□



For example, $\delta_A=\delta_B=0.01$ gives $S=2\sqrt2(0.98)^2>2$. The theorem does not insert ideal infinitely separated records. It concerns the exact driven semibounded model. If a particular autonomous implementation has joint-record TV error at most $\epsilon$ for each setting pair, its CHSH value is at least $2\sqrt2v_Av_B-8\epsilon$. Any marginal and historical-record errors must also be carried through; an approximate common-clock realization does not automatically inherit the exact causal factorization used in Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget). Separate local autonomous Hamiltonians preserve equilibrium marginal no-signalling by their product unitary structure.

The nonequilibrium laws in Theorem [12.1](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:budget) are additional preparation resources. They violate the constitution's imposed complete initial equilibrium and therefore are not predictions for its admitted equilibrium preparations. The proposition supplies the two-party records from the constitution itself; it does not remove that preparation boundary.



<a id="section-12-3"></a>

### 12.3 Delayed action meters and the locality of their access



We now consider the explicit hypothetical classical wire excluded by the pilot constitution's access clause. On read edges $e$, suppose 

$$

 H_{\rm wire}(t)=k(t)\left(\sum_e c_e\Pi_e\right)P+P^2/(2M),
 \qquad \beta=\int_T^{T+\tau}k(t)\,dt,

$$

 with fixed real $c_e$, initial $\chi_e=0$, and no wire during production. Switch off all coherent blocks on the read edges during $[T,T+\tau]$. The pilot canonical equations then give <a id="sig:wire"></a>


$$

 Y_{\rm out}=Y_0+(T+\tau)P_0/M+\beta\sum_e c_e\Pi_e(T),
 \quad \Pi_{e,\rm out}=\Pi_e(T),\quad
 \chi_{e,\rm out}=\beta c_eP_0.

$$

Equation (68).

 Indeed $\dot P=0$, $\dot Y=k\sum c_e\Pi_e+P/M$, $\dot\chi_e=kc_eP$, and $\dot\Pi_e=0$ on this interval. This argument checks the relevant backreaction explicitly. Subsequent restarting of the coherent blocks need not be neutral when $P_0\ne0$.

<a id="source-proposition-9"></a>

**Proposition 12.4 (A proper-mixture leak).**

 <a id="sig:properwire"></a> 

*Status: Proved conditional on the hypothetical wire, which violates P3.*

 For the detuned two-position pilot programme of <a id="citation-37"></a>[[11](/sealed-or-leaky/references#bib-RM), acc:detunedH, acc:delayed], take $\Pi_e(0)=0$ and $T=\pi/(2g)$. A member with internal weight $p=|\langle0|\psi\rangle|^2$ has $\Pi_e(T)=\eta p$, $0<\eta<1$. Assume $\beta>0$ and total bounded pointer and comparator error $\gamma$. If $\gamma<\beta\eta/4$, the bit at threshold $3\beta\eta/4$ has probabilities $1/2$ and $0$ for the equal $Z$ and equal $X$ proper ensembles, respectively, although both have density matrix $I/2$. Their accessible output TV distance is at least $1/2$. With Gaussian initial pointer noise of variance $\sigma^2$, zero $P_0$ and no comparator error, instead <a id="sig:gaussianleak"></a>


$$

 {\mathrm{TV}}(Q_Z,Q_X)\ge2^{-1/2}
 \left(1-e^{-\beta^2\eta^2/(16\sigma^2)}\right)>0
 \quad(\beta\ne0).

$$

Equation (69).

 

 <a id="source-proof-43"></a>

**Proof.**

Equation [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) places each reading within $\gamma$ of $\beta\eta p$. For the $Z$ ensemble $p$ equals zero or one equally; for the $X$ ensemble $p=1/2$. The threshold gives the stated probabilities. With Gaussian noise the laws are $Q_Z=\frac12N(0,\sigma^2)+\frac12N(\beta\eta,\sigma^2)$ and $Q_X=N(\beta\eta/2,\sigma^2)$. Test them with the $[0,1]$-valued function $\exp(-(Y-\beta\eta/2)^2/(2\sigma^2))$ and perform its Gaussian integral. The difference of expectations is the right side of [(69)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:gaussianleak), which is bounded by TV. 

□



<a id="source-proposition-10"></a>

**Proposition 12.5 (Slice-sensitive and marginal action reads).**

 <a id="sig:slices"></a> 

*Status: Proved conditional on the hypothetical wire, which violates P3.*

 Consider a bipartite pilot graph with Alice's pointer $a\in\{r,0,1\}$ and Bob's position $q\in\{0,1\}$, initially at $(r,0)$ with internal keys in $\Phi^+$. Alice coherently writes her $Z$ or $X$ basis to her pointer, then idles. Bob runs the same detuned programme as above. Let $e_a=((a,0),(a,1))$ and set the read-edge initial actions to zero. Then the two occupied slices satisfy 

$$

 (\Pi_{e_0},\Pi_{e_1})=
 \begin{cases}(\eta/2,0),&x=Z,\\
 (\eta/4,\eta/4),&x=X.
 \end{cases}

$$

 A fixed weighted wire has noiseless separation $|\beta|\eta|c_0-c_1|/4$ between these choices; bounded error $\gamma$ permits perfect discrimination if this exceeds $2\gamma$. Equal weights have zero separation in this experiment. More generally, for product coherent programmes and constant weights over every Alice configuration, the summed Bob-edge action is determined by Bob's reduced density-operator history and the common initial action sum. Its delayed pointer law is independent of Alice's programme when its initial noise law is also independent. 



<a id="source-proof-44"></a>

**Proof.**

For a real chosen basis $\{x_0,x_1\}$, Alice's coherent measurement leaves wave $2^{-1/2}\sum_a{\lverta\rangle}{\lvertx_a\rangle}_A{\lvertx_a\rangle}_B{\lvert0\rangle}_{\rm pos}$, up to a common phase. Bob's product Hamiltonian preserves each slice; its edge current is one half the single-party current. Thus $\Pi_{e_a}=\eta|\langle0|x_a\rangle|^2/2$ at $T$. Substitution in [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) proves the first claims.

For the general claim, write $h_{q'q}$ for a Bob block. With a consistent edge orientation the summed current is 

$$

 \sum_a J_{((a,q),(a,q'))}
 =2\operatorname{Im}{\operatorname{tr}}\!\left(h_{q'q}\rho_B^{(q,q')}\right).

$$

 Under product unitaries $\rho_B(t)=U_B(t)\rho_B(0)U_B(t)^*$, independent of Alice's controls. Integration and [(68)](/sealed-or-leaky/setting-dependence-controlled-nonequilibrium-and-access#sig:wire) give the result. 

□



These formulas are sensitivity statements about the stipulated access. An unequal weight on two global configuration slices is not thereby a Bob-local interaction. It addresses a distinction indexed by Alice's pointer. A wire selecting the slice of Alice's actual configuration requires the further controlled coupling $\sum_a\mathbf1_{\{Q_A=a\}}\Pi_{e_a}P$, which is not a fixed-weight wire and is not contained in the fixed-weight wire class. If that extra global access is granted and Alice's label is an equilibrium $1/2$–$1/2$ bit fixed during the read, a threshold at $3\beta\eta/8$ gives probabilities $1/2$ versus $0$ when $\gamma<\beta\eta/8$. This conditional calculation does not construct the coupling as an admissible local receiver. Nor does the marginal action calculation prove independence of every finite-resource native record: it concerns the stated pointer law. In the Bell limit, an ordinary local quantum reader has independent marginal statistics by the separate Born-record theorem.

<a id="source-proposition-11"></a>

**Proposition 12.6 (The additional premise needed for steering a leak).**

 <a id="sig:steering"></a> 

*Status: Proved.*

 Suppose Alice can choose two remote preparations with the same Bob density matrix, and suppose Bob's one fixed local apparatus, without receiving Alice's outcome, produces laws $\sum_i p_i\mu_{\psi_i}$ and $\sum_jq_j\mu_{\phi_j}$ respectively. If these laws have TV distance $\delta>0$, Alice has a statistical channel of that distance to Bob. Without the stated equality between remote conditional preparation and proper-mixture apparatus response, a proper-mixture leak alone does not imply this channel. 

 <a id="source-proof-45"></a>

**Proof.**

The first assertion is the operational definition of a channel: a measurable event has a setting-dependent probability, with differences arbitrarily close to $\delta$ (and a maximizing event for the usual TV measure representation). For the second, a rule on full entangled waves may make Bob's response depend only on the reduced density matrix while a separate proper preparation uses its actual member wave. The proper ensemble law does not specify the apparatus response to an entangled input, so the implication has an unprovided premise. 

□



This is the precise boundary behind the relevance of Gisin's nonlinear signalling example <a id="citation-38"></a>[[6](/sealed-or-leaky/references#bib-G90)] and Polchinski's analysis of nonlinear composite systems <a id="citation-39"></a>[[8](/sealed-or-leaky/references#bib-P91)]. They do not license calling every configuration-sensitive read a local operation. A no-signalling constraint inferred from an experiment applies only after its actual preparation, coupling, retained output, timing, calibration and error budget have been matched to the model. None of these arguments alone establishes a relativistic embedding or superluminal implementation.



<a id="section-12-4"></a>

### 12.4 Statistical design for a conditional finite-pilot test

 <a id="sig:experiment"></a> 

*Status: Retained conditional statistical design from version 3; no implemented experiment claimed.*

 The observed variable in each arm is the retained memory bit, read after the specified production, drainage, copy and storage programme. The two arms use either the proper $Z/X$ preparations of Theorem [11.5](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:retained) or Alice's two settings with Bob's fixed instrument in Theorem [11.7](/sealed-or-leaky/finite-pilot-resources-exact-inventories-and-retained-records#pil:signal). The nominated alternative is respectively an affine density-matrix response or a setting-independent Bob marginal on this operational domain. The microscopic initial gas law and zero-residue preparation are constitutive premises; they are not established by ordinary qubit tomography.

The nuisance parameters include $N$, $g$, the scalar contact responses, bank sizes, gas arrival rate, gas stock, all hold times, memory error and preparation accuracy. A timing interval must lie strictly inside the displayed floor window; uncertainty crossing a threshold cannot be treated by differentiating a floor function. Uncertainty in $N$ must be controlled sufficiently to certify a common window or incorporated in a specified distribution over $N$. Averaging the fixed-$N$ formula over an unknown distribution can suppress or cancel the proposed signal. Conservative bounds on drainage, finite-gas, control, preparation and record-reading errors must be propagated per arm. If these total errors are at most $\zeta$ per arm and the ideal gap is $\delta_0$, the certified gap is $\delta_*=[\delta_0-2\zeta]_+$. Merely calibrating the reduced density matrix does not bound arbitrary omitted preparation correlations; their influence needs a separate operational or constitutive bound.

With $m$ genuinely independent reset repetitions per arm and observed frequencies $\widehat p_0,\widehat p_1$, Hoeffding's inequality and a union bound give, with confidence at least $1-\alpha$, 

$$

 |(\widehat p_1-\widehat p_0)-(p_1-p_0)|
 \le 2\sqrt{\frac{\log(4/\alpha)}{2m}}.

$$

 For example, $m\ge8\log(4/\alpha)/\delta_*^2$ makes this uncertainty at most $\delta_*/2$. Resolving a controlled $1/N$ gap therefore requires $O(N^2\log(1/\alpha))$ reset trials, in addition to the per-trial resources specified above. Drifts, correlations and imperfect resets require their own analysis; the independent-trial formula does not cover them. A significant discrepancy would reject the nominated readout-only alternatives under these controls. It would not uniquely identify the pilot constitution, exclude all operational surrogates, or by itself prove a spacelike causal influence.
