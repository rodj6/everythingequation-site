# Chapter 15: Variational selection of complete event paths

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="stat:entropy-chapter"></a> 



<a id="section-15-1"></a>

## 15.1 The proposed law and the initial candidate class

 

Fix positive symmetric constants $a_{nm}=a_{mn}$ for $n\ne m$, with $a_{nm}\leq a_{\max}$, independent of the unknown wave. Let $R_\varepsilon$ be the Markov path law having rates $\varepsilon a_{nm}$ and uniform initial sector distribution, for $\varepsilon>0$. It is a reference probability measure. No physical equilibrium bath or uniform random controller is thereby prepared, but the reference carries explicit Poisson statistical structure. 



**Assumption 15.1 (Relative-entropy reaction principle).**

<a id="stat:entropy-law"></a> For a prescribed complete wave programme and fixed initial occupancy law, the actual finite-background path law minimizes $D(P\Vert R_\varepsilon)$ among laws realizing each expected Hamiltonian edge current. The zero-background constitution is the finite-horizon limit of these minimizers as $\varepsilon\downarrow0$. 

 

This principle can be stated before the Bell formula: neutral reaction statistics are changed by the least relative entropy compatible with a specified signed transport. Its status is a proposed physical law on path probabilities, not an inference from ignorance or from a quotient theorem. Both the choice of reference and the extremization are additional statistical input. The principle has a finite-background prediction containing two-way traffic; it is not simply the assertion that every rate already equals the Bell ratio. The connection of this proposed law to an independently derived material interaction remains open [[M30](/quantum-measurement/monograph/bibliography#bib-M30), [BFG](/quantum-measurement/monograph/bibliography#bib-BFG)]. 

For the theorem, the candidate class consists of all laws with initial $w(0)$, finite expected jump count, predictable natural-history intensities, finite relative entropy to $R_\varepsilon$, and Assumption [14.1](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:matching). Initial $w(0)$ is either supplied, or follows from Theorem [14.6](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:calibration) on its stronger control-stable domain. The competitors are not required to be Markov. Their wave programme is the same deterministic one. All finite classical provenance is retained or conditioned upon; different active preparations are not identified by averaging their density matrices. 

Define, for $y>0$, <a id="stat:entropy-density"></a>


$$

 \ell(x;y)=x\log(x/y)-x+y,\qquad x\geq0,

$$

Equation (15.1).

 with $0\log0=0$. Also set $\ell(0;0)=0$ and $\ell(x;0)=+\infty$ for $x>0$. 



<a id="section-15-2"></a>

## 15.2 Existence and normalization at nodes

 

The construction below is needed before the optimizer is identified with an actual probability law. Rates can diverge as a wave sector vanishes; bounded rates are not silently assumed. 



**Lemma 15.2 (Nonexplosive construction for the selected fluxes).**

 <a id="stat:existence"></a> For $\varepsilon\geq0$, define directed fluxes <a id="stat:flux"></a>


$$
\begin{aligned}F^\varepsilon_{nm}(t)
 &=\frac{\sqrt{J_{nm}(t)^2+
            4\varepsilon^2a_{nm}^2w_m(t)w_n(t)}+J_{nm}(t)}{2},
                                                        \\
 F^0_{nm}(t)&=[J_{nm}(t)]_+.
\end{aligned}
$$

Equation (15.2, 15.3).

 On $w_m(t)>0$ set $k^\varepsilon_{nm}=F^\varepsilon_{nm}/w_m$. For the finite piecewise-constant Hamiltonian domain, these rates define a unique nonexplosive Markov law from initial $w(0)$ with marginals $w(t)$. Values assigned to outgoing rates at isolated zero-weight times have no effect on this law and may be zero. Identically empty sectors are never occupied. For $\varepsilon>0$, the law has finite entropy relative to $R_\varepsilon$. 

 

**Proof.**

Write $h=\max_t\|H(t)\|$. Cauchy–Schwarz gives <a id="stat:current-bound"></a>


$$

 |J_{nm}(t)|\leq\frac{2h}{\hbar}\sqrt{w_m(t)w_n(t)}.

$$

Equation (15.4).

 In particular, a current vanishes if either endpoint weight is zero. The fluxes satisfy $F^\varepsilon_{nm}-F^\varepsilon_{mn}=J_{nm}$ and <a id="stat:excess-bound"></a>


$$

 F^\varepsilon_{nm}=[J_{nm}]_++s^\varepsilon_{nm},\qquad
 0\leq s^\varepsilon_{nm}=s^\varepsilon_{mn}
       \leq\varepsilon a_{nm}\sqrt{w_mw_n}.

$$

Equation (15.5).

 The last inequality follows from $\sqrt{x^2+4b^2}\leq|x|+2b$. Therefore <a id="stat:finite-flow"></a>


$$

 \int_0^T\sum_{n\ne m}F^\varepsilon_{nm}(t)\,dt<\infty.

$$

Equation (15.6).

 

On each constant-Hamiltonian segment, a nonidentically zero weight has only finitely many zeros, because it is analytic on a neighborhood of the closed segment. Subdivide at all such zeros and at the Hamiltonian switches. In the interior of one resulting interval $(a,b)$ the occupied-sector set is fixed, and its rates are continuous and locally bounded. Put $q_m=\sum_{n\ne m}k^\varepsilon_{nm}$ and use the survival function [(14.12)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:survival). The usual first-jump construction on compact subintervals gives a minimal process, killed only if infinitely many jumps accumulate or it reaches an endpoint through a state whose escape integral diverges. 

The wave weights solve the forward equation for these fluxes. On a node-free interval, variation of constants gives <a id="stat:duhamel"></a>


$$

 w_n(t)=w_n(a)S_n(a,t)+
   \int_a^t \sum_{m\ne n}k^\varepsilon_{nm}(u)w_m(u)S_n(u,t)\,du.

$$

Equation (15.7).

 At a left endpoint with $w_n(a)=0$, derive the formula first from $a+\delta$. The boundary term is at most $w_n(a+\delta)$, which tends to zero; the nonnegative integral has the required limit. At a positive-weight left endpoint the ordinary limit applies. Identically zero sectors have zero incoming flow. 

Iteration of the positive integral equation counts paths by their number of jumps. Its minimal subprobability solution $\pi$ is bounded componentwise by the nonnegative solution $w$. Consequently its stopped counting compensator has expectation bounded by [(15.6)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:finite-flow). Infinite-jump accumulation has probability zero: for the stopping time of the $L$th jump, the probability that it occurs before $T$ is at most the bound in [(15.6)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:finite-flow) divided by $L$. 

There is no separate loss of mass into a vanishing sector at $b$. Indeed, on any positive-weight portion, $q_m\geq-\dot w_m/w_m$, and thus <a id="stat:node-survival"></a>


$$

 S_m(s,t)\leq w_m(t)/w_m(s).

$$

Equation (15.8).

 If $w_m(b)=0$, the right side tends to zero as $t\uparrow b$. A path entering $m$ at any earlier time therefore cannot remain there up to $b$. A path with infinitely many entries was already excluded. With no explosion and no node loss, the minimal subprobability has total mass one. The domination $\pi\leq w$ then forces $\pi=w$. At the finitely many boundaries the process occupies only positive-weight sectors almost surely, so the next interval can be joined with no discretionary reset. The first-jump construction is unique on every compact node-free interval; these joins give uniqueness from the stated initial law. 

For completeness, finite entropy is not lost at the nodes. Set $b_{nm}=\varepsilon a_{nm}\sqrt{w_mw_n}$. By [(15.4)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:current-bound), when both weights are positive, 

$$

 F^\varepsilon_{nm}=\sqrt{w_mw_n}\,r_{nm}(t),

$$

 where for fixed $\varepsilon>0$ all $r_{nm}$ lie between strictly positive finite constants: this follows directly from [(15.2)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:flux) with $|J_{nm}|/\sqrt{w_mw_n}\leq2h/\hbar$ and the finitely many positive $a_{nm}$. Hence 

$$

 \left|\log\frac{F^\varepsilon_{nm}}{\varepsilon a_{nm}w_m}\right|
 \leq C_\varepsilon+\tfrac12|\log w_n|+\tfrac12|\log w_m|.

$$

 Each nonzero analytic weight has a finite-order zero, so its logarithm grows at most as a constant times $1+|\log|t-t_0||$ near a node. Multiplication by the bounded flux in [(15.6)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:finite-flow) is locally integrable. Empty intervals contribute zero candidate flow and at most the finite reference escape term. The entropy identity below therefore has a finite right side, including the finite initial entropy against the uniform distribution. 

□

 



<a id="section-15-3"></a>

## 15.3 Entropy on complete histories

 



**Lemma 15.3 (Likelihood identity and history penalty).**

 <a id="stat:entropy-identity"></a> For a candidate law $P$ in the specified class, let $u_m=1/d$. Then <a id="stat:kl"></a>


$$
\begin{aligned}
 D(P\Vert R_\varepsilon)
  =D(w(0)\Vert u)+
   \int_0^T\sum_{m}\mathbb E_P\!\left[
    1_{\{X_{t-}=m\}}\sum_{n\ne m}
    \ell(\lambda_{nm}(t\mid\mathcal F_{t-});
                    \varepsilon a_{nm})\right]dt.
\end{aligned}
$$

Equation (15.9).

 Every candidate has marginal $w(t)$, and consequently <a id="stat:jensen"></a>


$$

 D(P\Vert R_\varepsilon)\geq D(w(0)\Vert u)
 +\int_0^T\sum_{n\ne m}
       \ell(F_{nm}(t);\varepsilon a_{nm}w_m(t))\,dt.

$$

Equation (15.10).

 Equality holds precisely when, for almost every time and every occupied origin, the natural-history intensity is almost surely the deterministic quantity $F_{nm}(t)/w_m(t)$. 

 

**Proof.**

For a finite jump history with successive states $x_0,\ldots,x_L$ and jump times $t_1<\cdots<t_L$, its likelihood factors into initial probability, conditional survival factors, and the intensities of its realized jumps. Relative to the strictly positive reference the log likelihood is 

$$

 \log\frac{w_{x_0}(0)}{u_{x_0}}
 +\sum_{i=1}^L\log
       \frac{\lambda_{x_i x_{i-1}}(t_i\mid\mathcal F_{t_i-})}
            {\varepsilon a_{x_i x_{i-1}}}
 -\int_0^T\sum_{n\ne X_{t-}}
        (\lambda_{nX_{t-}}-\varepsilon a_{nX_{t-}})\,dt.

$$

 Taking expectations of the jump sum with its compensator gives [(15.9)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:kl). For unbounded intensities one first stops when the total count or integrated intensity exceeds a finite bound and clips the logarithm. The negative part of $x\log(x/y)$ is bounded by $y/e$, and the reference rates are bounded. Thus this negative part is uniformly integrable on the finite horizon. The positive part converges by monotone truncation; the integrated linear terms converge by the finite-mean-count assumption. Finite relative entropy, or the value $+\infty$ before restriction to the candidate class, yields the same identity in the limit. 

Proposition [14.2](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:traffic-family) with initial $w(0)$ gives marginal $w(t)$. Conditional on $X_{t-}=m$, the mean intensity is $F_{nm}/w_m$. Strict convexity of $x\mapsto\ell(x;y)$ and Jensen's inequality give 

$$

 w_m\,\mathbb E[\ell(\lambda_{nm};\varepsilon a_{nm})\mid X_{t-}=m]
 \geq w_m\ell(F_{nm}/w_m;\varepsilon a_{nm})
 =\ell(F_{nm};\varepsilon a_{nm}w_m).

$$

 At zero origin weight the candidate contributes zero. Equality in a strictly convex Jensen inequality requires an almost surely constant conditional intensity, including the zero-mean case by nonnegativity. Integrating its nonnegative defect proves the stated equality criterion. 

□

 

This is the connecting step that an optimization of mean traffic lacks. Histories with the same current sector are allowed different responses at the outset, as in Proposition [14.5](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:renewal). The specified reference and entropy principle penalize that variation. Markovity is a consequence of this particular statistical choice, not of conserving the mean current. 



**Theorem 15.4 (Selection of rates and physical-time path law).**

 <a id="stat:selection"></a> Within the preceding finite piecewise-constant wave domain, the relative-entropy reaction principle has a unique minimizing path law $P_\varepsilon$, up to null histories. It is the Markov law of Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence), with rates <a id="stat:selected-rate"></a>


$$

 k^\varepsilon_{nm}(t)=
 \frac{\sqrt{J_{nm}(t)^2+
       4\varepsilon^2a_{nm}^2w_m(t)w_n(t)}+J_{nm}(t)}{2w_m(t)}
 \quad(w_m(t)>0).

$$

Equation (15.11).

 As $\varepsilon\downarrow0$ its complete path law converges to the Bell law $P_{\rm B}$ with conditional rates <a id="stat:bell-rate"></a>


$$

 k^{\rm B}_{nm}(t)=[J_{nm}(t)]_+/w_m(t),

$$

Equation (15.12).

 and <a id="stat:path-bound"></a>


$$

 d_{\rm TV}(P_\varepsilon,P_{\rm B})
 \leq\int_0^T\sum_{n\ne m}s^\varepsilon_{nm}(t)\,dt
 \leq\varepsilon a_{\max}(d-1)T.

$$

Equation (15.13).

 The selected law is consistent under restriction to earlier intervals and does not use future controls to determine an earlier intensity. 

 

**Proof.**

The Jensen lower bound reduces the problem to independent pairwise convex optimizations at each time. On an unordered edge write $x=F_{nm}$, $y=F_{mn}$, $x-y=J_{nm}$, $c=\varepsilon a_{nm}w_m$, and $d'=\varepsilon a_{nm}w_n$. When both weights are positive, minimize $\ell(x;c)+\ell(y;d')$ along $x-y=J_{nm}$. In the interior, differentiation along that constraint gives 

$$

 \log(x/c)+\log(y/d')=0,
 \qquad xy=cd'=\varepsilon^2a_{nm}^2w_mw_n.

$$

 The derivative tends to minus infinity at the admissible boundary where one flow is zero, and the objective is strictly convex and coercive. Consequently its unique minimum is the positive solution of these two equations, namely [(15.2)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:flux). If an endpoint weight is zero, its outgoing flow must vanish for finite entropy; current matching and zero Hamiltonian current then force the other flow to vanish too. 

Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence) realizes all the minimizing fluxes by a nonexplosive Markov law of finite entropy. It attains the Jensen bound. Any other minimizer must attain both the pointwise pair minima and the strict conditional Jensen equality. Its intensities therefore agree with [(15.11)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:selected-rate) on all occupied histories for almost every time. The unique first-jump construction proves equality of the full laws, not merely of their one-time marginals. 

To prove [(15.13)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:path-bound), start both processes at the same sampled initial sector and couple them while their states coincide. Use common jumps at the Bell rates and additional jumps for the finite-background process at rates $s^\varepsilon_{nm}/w_m$. Upon separation continue with any coupling of the correct marginals. On compact node-free intervals this is an ordinary finite-state jump construction; the nonexplosive limits from Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence) join it across the node times. The chance of separation is at most the expected number of extra jumps before separation. The probability that the coupled pair is still together at $m$ is at most $P_\varepsilon(X_t=m)=w_m(t)$. Hence that expectation is at most $\int\sum_{n\ne m}s^\varepsilon_{nm}dt$. By [(15.5)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:excess-bound) and Cauchy–Schwarz, 

$$

 \sum_{n\ne m}\sqrt{w_nw_m}
       =\left(\sum_m\sqrt{w_m}\right)^2-1\leq d-1.

$$

 The coupling inequality yields [(15.13)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:path-bound). It controls the entire finite path, including null intervals and event times. 

Finally, the optimizer at time $t$ depends only on the current $w,J$ and reference coefficients. Optimizing on an earlier interval produces the same rates there. More generally, restarting at a deterministic time with its induced marginal gives the same restricted Markov kernel. Thus the finite-horizon variational definition is projectively consistent on the fixed wave programme, and coincident prefixes of two allowed open-loop programmes have coincident selected prefix laws. 

□

 

The rates supply an executable process: draw competing jumps using the integrated survival [(14.12)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:survival), update the actual sector at a jump, and continue the full Schrödinger wave. The exponential thresholds used to simulate that derived kernel are a representation of the selected path measure. They are not newly postulated physical threshold coordinates whose readability has been established. 



<a id="section-15-4"></a>

## 15.4 The exact limit and a finite-background discriminator

 



**Proposition 15.5 (Activity and timing are separate levels of the law).**

 <a id="stat:lexicographic"></a> For every admissible $P$ with the common marginal $w$, the exact identity is <a id="stat:entropy-expansion"></a>


$$
\begin{aligned}
 D(P\Vert R_\varepsilon)
 ={}&\mathbb E_PN_T\log(1/\varepsilon)+D(P\Vert R_1)\\
 &+(\varepsilon-1)\int_0^T\sum_m w_m(t)
                  \sum_{n\ne m}a_{nm}\,dt.
\end{aligned}
$$

Equation (15.14).

 The Bell law is also obtained by first minimizing expected total activity under pair-current matching and then minimizing $D(P\Vert R_1)$ among those activity minimizers. 

 

**Proof.**

Expand [(15.1)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:entropy-density) to obtain $\ell(x;\varepsilon y)=\ell(x;y)+x\log(1/\varepsilon)
 +(\varepsilon-1)y$, and integrate the identity [(15.9)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:kl). Its linear count term is $\mathbb E_PN_T$ by the compensator. The final term is fixed across competitors. For each pair, [(14.7)](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:surplus) gives activity $|J|+2K$. Thus the smallest integrated activity forces $K=0$ almost everywhere. With these fixed minimal flows, Lemma [15.3](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:entropy-identity) selects the Markov intensities $[J]_+/w$ uniquely. Their finite entropy against $R_1$ follows by the same logarithmic node estimate as in Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence); alternatively positive-part fluxes obey [(15.4)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:current-bound) and have no worse integrability. This proves the second assertion independently of any formal exchange of minimization and limit. 

□

 

One must not minimize directly against the zero-rate reference. A path with a jump is singular to that reference. The zero-background limit is a stated constitutive prescription supported by Theorem [15.4](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:selection). It is not a supplied finite reservoir with a demonstrated preparation procedure or a finite-cost realization of the limit. 

At finite background the selected opposite flows satisfy <a id="stat:traffic-product"></a>


$$

 F^\varepsilon_{nm}F^\varepsilon_{mn}
       =\varepsilon^2a_{nm}^2w_mw_n.

$$

Equation (15.15).

 This relation and the response to zero current are consequences beyond terminal Born weights. For $H=0$, uniform $w$, and all $a_{nm}=a$, the selected chain jumps at rate $\varepsilon a$ toward each other sector, whereas the Bell path remains constant. Therefore <a id="stat:sharpness"></a>


$$

 d_{\rm TV}(P_\varepsilon,P_{\rm B})
       =1-e^{-\varepsilon a(d-1)T}.

$$

Equation (15.16).

 Indeed $P_{\rm B}$ is concentrated on constant paths; the finite-background law assigns them total mass $e^{-\varepsilon a(d-1)T}$, with the same uniform initial-state proportions. Its remainder is supported on paths having at least one jump. This proves equality and first-order sharpness of [(15.13)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:path-bound). It is a native-path discriminator, not an admission theorem for a passive recorder of those paths. 

The elementary pair optimization is related to established relative-entropy contractions for Markov empirical flows and currents [[BFG](/quantum-measurement/monograph/bibliography#bib-BFG)]. The Bell positive-current construction is established independently [[DGGTZ](/quantum-measurement/monograph/bibliography#bib-BellQFT)]. Here the consolidated result is the finite-horizon history selection, node-safe realization, uniform background path bound, and explicit scope of their source-law interpretation. No claim of historical priority for the square-root formula is needed. 



<a id="section-15-5"></a>

## 15.5 Complete outputs, memories, and conditioning

 



**Corollary 15.6 (Operational consequences on a common experiment).**

 <a id="stat:output-bound"></a> Fix a complete finite apparatus programme satisfying the theorem, including all its returning memories and control factors, and let $\mathcal O$ be any common measurable map of its actual path and deterministic wave into an output space. Then <a id="stat:pushforward"></a>


$$

 d_{\rm TV}(\mathcal O_*P_\varepsilon,\mathcal O_*P_{\rm B})
 \leq\delta,
 \qquad \delta=\varepsilon a_{\max}(d-1)T.

$$

Equation (15.17).

 For a common event $E$ with $P_{\rm B}(E)\geq r>0$, the conditional output laws, whenever both exist, differ in total variation by at most $\min(1,2\delta/r)$. If the output depends only on the final actual sector and the common deterministic wave, its two laws are exactly equal. 

 

**Proof.**

A measurable pushforward cannot increase total variation: the preimage of each output event is a path event. For conditional laws, write $p=P_{\rm B}$ and $q=P_\varepsilon$. For any subevent $B\subset E$, 

$$

 \left|\frac{q(B)}{q(E)}-\frac{p(B)}{p(E)}\right|
 \leq \frac{|q(B)-p(B)|}{p(E)}
       +\frac{q(B)}{q(E)}\frac{|q(E)-p(E)|}{p(E)}
 \leq\frac{2\delta}{r}.

$$

 Applying this to preimages proves the conditional claim. Finally both endpoint sector distributions are $w(T)$, and the wave is identical, so any common endpoint map has exactly equal distributions. 

□

 

The output statement preserves actual classical flags, copied keys, null outcomes, and event-time stopping if they are defined by the same complete experiment. It invokes no contraction theorem for an unknown nonlinear state update. If an output includes a normalized relative wave, use the same sector projection in both models and assign a common arbitrary value at zero-weight sectors, which occur with zero endpoint probability. 

Endpoint equality is insufficient for a claim that an archive faithfully reports an actual earlier sector. At $\varepsilon>0$, the reference in this chapter has strictly positive rates on every pair. It can therefore induce surplus jumps between occupied archive sectors even when the Hamiltonian has no matrix element between them. For two such sectors of weights $1/2$, rate $\varepsilon a$ in either direction gives an archive-label flip probability <a id="stat:archive-background"></a>


$$

 \frac{1-e^{-2\varepsilon aT}}{2}.

$$

Equation (15.18).

 The endpoint label remains uniform, but its correlation with the initial actual label decays. Exact archive support in the configuration chapters therefore applies to the Bell limit, or requires the approximate path budget above at finite background. Replacing this reference by one with zero rates on archive-changing pairs changes the hypothesis and requires rechecking feasibility and entropy support; it is not done silently. 

The filtration is part of the theorem. Uniqueness of a law on $X$ does not select every joint extension by a hidden variable. For example, if a selected first event has time $\tau$ with $0<P(\tau\leq s)<1$, the extension $Z=1_{\{\tau\leq s\}}$ leaves the entire marginal path law unchanged but makes $P(\tau\leq s\mid Z)=Z$. Its one-bit archive is informative if a physical interaction actually makes $Z$ available. Minimizing entropy on $X$ alone imposes no constraint on that joint extension. A claimed theorem for such an enlarged source must include the variable and its acquisition interaction in the compared complete laws, or state the conditional independence premise that excludes the extension. This is an admission boundary, not a reason to treat all internal variables as readable. 

For growing apparatus banks the bound is finite-programme control, not dimension-free closure. A simultaneous limit requires $\varepsilon a_{\max}(d-1)T\to0$ for the *complete* retained sector count $d$ and physical horizon $T$. Classical mixtures can be treated by conditioning on their retained provenance and averaging the bound. Random feedback is covered when represented by a finite retained coherent controller in one deterministic joint programme. Substituting a random branch-dependent wave into the unconditional fixed-wave proof requires a new conditional formulation; no such substitution is implicit here.
