# Chapter 16: Minimal traces, projected histories, and the constitutive boundary

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

<a id="stat:boundary-chapter"></a> 



<a id="section-16-1"></a>

## 16.1 What the Jordan theorem does and does not select

 

The successive names “no-surplus incidence,” “single-channel exclusion,” “Jordan representation,” and “minimal positive boundary trace” describe closely related conditions in the checkpoint corpus. They are consolidated here into one equivalence theorem, with the statistical objects made explicit [[C03](/quantum-measurement/monograph/bibliography#bib-C03), [M30](/quantum-measurement/monograph/bibliography#bib-M30)]. This prevents the same mathematical condition from being counted repeatedly as an independent derivation. 



**Theorem 16.1 (Minimal positive mean incidence).**

<a id="stat:jordan"></a> Fix a complete edge and an integrable prescribed signed current $J(t)$. Let $\mu(B)=\int_B J(t)dt$ and let finite nonnegative measures $\alpha,\beta$ satisfy $\alpha-\beta=\mu$. There is a unique finite nonnegative measure $\rho$ such that <a id="stat:jordan-family"></a>


$$

 \alpha=\mu^++\rho,\qquad \beta=\mu^-+\rho,
 \qquad \alpha+\beta=|\mu|+2\rho,

$$

Equation (16.1).

 where $\mu^+(dt)=[J(t)]_+dt$ and $\mu^-(dt)=[-J(t)]_+dt$. The following conditions are equivalent: 

1. $\alpha+\beta$ is the least possible total incidence measure;

2. its total mass is the least possible among representations of $\mu$;

3. $\alpha$ and $\beta$ are mutually singular;

4. $\alpha=\mu^+$ and $\beta=\mu^-$.

 If $\alpha(dt)=F_{nm}(t)dt$ and $\beta(dt)=F_{mn}(t)dt$, these are also equivalent to $F_{nm}F_{mn}=0$ almost everywhere and to $F_{nm}+F_{mn}=|J_{nm}|$ almost everywhere. 

 

**Proof.**

Let $A_+$ and $A_-$ be a Hahn decomposition for $\mu$. For every measurable $B$, 

$$

 \mu^+(B)=\mu(B\cap A_+)
          =\alpha(B\cap A_+)-\beta(B\cap A_+)\leq\alpha(B).

$$

 Thus $\rho=\alpha-\mu^+$ is nonnegative. The identity $\alpha-\beta=\mu^+-\mu^-$ gives also $\rho=\beta-\mu^-$, proving [(16.1)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:jordan-family) and uniqueness. Its least sum in measure order is $|\mu|$, and its least total mass is $|\mu|([0,T])$; either is attained exactly when $\rho=0$. If $\alpha$ and $\beta$ are mutually singular, their common submeasure $\rho$ must vanish. Conversely the Jordan parts are mutually singular. In the absolutely continuous case, $\rho(dt)=K(t)dt$ with $K\geq0$, and the final equivalences follow by checking the two signs of $J$. 

□

 

The theorem supplies a unique *minimal representation* of a signed mean measure. It does not say that an actual source must choose this representation. In particular, opposite pathwise counts are already supported at distinct times in an ordinary jump process with no simultaneous events, even when $K>0$. Their pathwise mutual singularity is therefore not the mean-measure minimality appearing in the theorem. 



**Corollary 16.2 (The exact scope of the MPBT rate statement).**

 <a id="stat:mpbt"></a> Suppose a source has initial occupancy $w(0)$, realizes each expected pair current, satisfies any equivalent minimal-incidence condition in Theorem [16.1](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:jordan), and is admitted to be a time-inhomogeneous Markov process with rates depending on the deterministic wave programme and the present sector. Then its rates on occupied sectors are $[J_{nm}]_+/w_m$. Conversely, the nonexplosive Bell law in Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence) has those minimal mean incidence measures. 

 

**Proof.**

Pair matching and initial equality imply $\pi=w$. Markovity gives $F_{nm}=w_m k_{nm}$, while the theorem gives $F_{nm}=[J_{nm}]_+$. Division is valid for $w_m>0$. The converse follows by taking expectations of the Bell compensator with marginal $w$. 

□

 

Without Markov admission, the same minimal mean measures give only 

$$

 \mathbb E\left[1_{\{X_{t-}=m\}}
       \lambda_{nm}(t\mid\mathcal F_{t-})\right]=[J_{nm}(t)]_+,

$$

 and Proposition [14.5](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:renewal) disproves uniqueness of timing. Without initial equality, the means generated by an assigned Bell rate are $\pi_m[J_{nm}]_+/w_m$, generally not $[J_{nm}]_+$. These premises cannot be removed by calling a probability-weighted flux a mass flux. 

One equivalent cost formulation has an immediate additional meaning. For a real sector observable $f$, define its quadratic jump variation by $[f(X)]_T=\sum_{t\leq T}(f(X_t)-f(X_{t-}))^2$. Under pair matching, <a id="stat:quadratic-activity"></a>


$$

 \mathbb E\bigl([f(X)]_T\bigr)
 =\int_0^T\sum_{\{n,m\}}
       (|J_{nm}|+2K_{nm})(f_n-f_m)^2\,dt.

$$

Equation (16.2).

 The compensator proves the identity. Requiring this quantity to be minimal for every $f$ is equivalent to $K=0$ almost everywhere: choose sector indicator functions to detect any positive surplus on an incident edge. This gives an independently interpretable fluctuation cost, but its universal minimization remains mathematically equivalent to the same minimal-incidence assumption. It is not a weaker theorem forcing it. 



<a id="section-16-2"></a>

## 16.2 What isolation and a one-use reaction resource can select

 

The older incidence manuscript contains two narrower physical selection arguments worth preserving separately from the statistical variational law [[M02](/quantum-measurement/monograph/bibliography#bib-M02)]. They operate on an explicitly specified reaction class. 



**Proposition 16.3 (Isolation and stochastic modularity).**

 <a id="stat:isolated-bond"></a> Suppose a Markov candidate assigns rates $k_{nm}$ to primitive binary bonds. Assume that each such bond can physically be isolated while holding its instantaneous wave and Hamiltonian block fixed; that disabling other bonds leaves the two rates on the retained bond unchanged; that an absent bond has no transition; and that in each isolated experiment the coherent-weighted candidate flux $f_{nm}=w_mk_{nm}$ obeys the coherent continuity equation. Then $f_{nm}-f_{mn}=J_{nm}$ on every positive-weight bond in the full experiment. 

 

**Proof.**

In the isolated experiment the destination continuity equation has exactly one intersector term, namely $f_{nm}-f_{mn}$. Its Schrödinger value is $J_{nm}$ for the unchanged wave and block. Stochastic modularity transfers this equality to the original experiment. 

□

 

The conclusion eliminates divergence-free current reassignment, but $f_{nm}=[J_{nm}]_++K_{nm}$ with $K_{nm}=K_{mn}\geq0$ still survives. The assumed compatibility of a *coherent-weighted candidate* flux is not automatically an empirical statement about $\pi_mk_{nm}$; calibrated initialization and equivariance establish their equality. Likewise, Hamiltonian locality alone does not imply stochastic modularity or the physical ability to isolate every joint-configuration bond of an entangled preparation. 



**Proposition 16.4 (Restricted exact selector with a spent resource).**

 <a id="stat:licensed"></a> In addition to Proposition [16.3](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:isolated-bond), suppose the complete actual reaction list on a monotone contact consists only of 

$$

 (r,\mathrm{live},a)\longrightarrow(i,\mathrm{spent}_i,a\star i),

$$

 where $a\star i$ retains an immutable certificate, no inverse reaction restores the live resource, and $J_{ir}\geq0$ throughout the allowed window. Then every positive-weight forward rate is $k_{ir}=J_{ir}/w_r$ and every reverse rate is zero. From calibrated initial weights these are the actual minimal Bell rates on that window. 

 

**Proof.**

The full reaction list makes $f_{ri}=0$. Proposition [16.3](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:isolated-bond) gives $f_{ir}-f_{ri}=J_{ir}$, so $w_rk_{ir}=J_{ir}$. From initial $w$, the resulting forward equation preserves $w$; existence on the stated finite wave domain follows from Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence) restricted to its nonzero currents. Thus coherent-weighted and actual mean fluxes agree. 

□

 

A nonempty example has one live state $r$, spent states $i$, normalized coefficients $\sum_i|c_i|^2=1$, and 

$$

 H=i\hbar g\sum_i(c_i|i\rangle\langle r|
                  -\overline c_i|r\rangle\langle i|),
 \qquad \Psi_0=|r\rangle.

$$

 For $0\leq t\leq\pi/(2g)$, $w_r=\cos^2(gt)$, $w_i=|c_i|^2\sin^2(gt)$, and $J_{ir}=2g|c_i|^2\sin(gt)\cos(gt)$. The selected forward rates are $2g|c_i|^2\tan(gt)$. In a finite window $s<\pi/(2g)$, the null probability is $\cos^2(gs)$ and the probability of spent record $i$ is $|c_i|^2\sin^2(gs)$. This exact selector has a concrete irreversible reaction-resource premise. Continuing the same Hamiltonian past current reversal contradicts its inverse-free reaction list and pair matching; the restricted theorem does not extend unchanged. 

Nor does directed certificate growth replace bond ownership. On a diamond $r\to u\to f$ and $r\to v\to f$, take positive candidate flows $j$ on all four edges. Add $k$ along the $u$ route and subtract $k$ along the $v$ route, with $0<k<j$. Vertex divergences are unchanged and every edge remains forward, but the next-route ratio at $r$ becomes $(j+k):(j-k)$. At $k=j/2$ it is $3:1$ instead of $1:1$. Isolation and stochastic modularity are the assumptions that disallow this independent reassignment; acyclic histories and spent certificates alone do not. 



<a id="section-16-3"></a>

## 16.3 Projection can create visible countertraffic

 

A declared fine process and a grouped readout must not be assigned independent minimal laws without checking compatibility. Let a partition $B_1,\ldots,B_r$ group the fine sectors and let $Y_t=a$ when $X_t\in B_a$. Set <a id="stat:coarse-data"></a>


$$

 W_a=\sum_{i\in B_a}w_i,\qquad
 J^{\rm c}_{ba}=\sum_{i\in B_a,j\in B_b}J_{ji}.

$$

Equation (16.3).

 The actual projected flow is a sum of directed fine flows, not the positive part of their signed sum. 



**Theorem 16.5 (Sign alignment and strong lumpability).**

 <a id="stat:coarse"></a> For a fine Bell process with marginal $w$, the mean directed flow of its projected readout is <a id="stat:coarse-flow"></a>


$$

 F^{\rm proj}_{ba}=[J^{\rm c}_{ba}]_++C_{ab},\qquad
 C_{ab}=\frac{\sum_{i\in B_a,j\in B_b}|J_{ji}|
                    -|J^{\rm c}_{ba}|}{2}\geq0.

$$

Equation (16.4).

 The excess vanishes precisely when all nonzero currents across that block pair have the same orientation. On intervals with positive fine weights, the generator-level condition <a id="stat:lumpability"></a>


$$

 \sum_{j\in B_b}\frac{[J_{ji}]_+}{w_i}=\kappa_{ba}(t)
 \quad\text{independently of }i\in B_a

$$

Equation (16.5).

 is sufficient for the projected process to be Markov in its own history. It is necessary if the same projected transition kernel is required for every fine starting state in a block at every starting time. Under this condition, <a id="stat:coarse-rate"></a>


$$

 \kappa_{ba}=\frac{[J^{\rm c}_{ba}]_++C_{ab}}{W_a}.

$$

Equation (16.6).

 Thus a common projected Bell law requires both this closure and sign alignment. These are not necessary conditions for all endpoint quantum measurement statistics. 

 

**Proof.**

Put $A=\sum_{\rm cross}[J_{ji}]_+$ and $B=\sum_{\rm cross}[-J_{ji}]_+$. Then $A-B=J^{\rm c}_{ba}$ and $A+B=\sum_{\rm cross}|J_{ji}|$. Since $A=[A-B]_++\min(A,B)$, [(16.4)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:coarse-flow) follows, with $C_{ab}=\min(A,B)$. It is zero precisely when positive and negative cross-block currents do not both occur. 

Conditional on the entire projected past, the current fine state has some posterior supported in its present block. Under [(16.5)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:lumpability), averaging the fine exit intensity into another block gives $\kappa_{ba}$ for every such posterior. The projected counting compensators are therefore those of the deterministic Markov generator $\kappa$; uniqueness of its first-jump construction gives the Markov law. Necessity at the claimed generator-level scope follows by starting in two fine states $i,i'$ in one block and comparing the first-order probability of entering $B_b$ during $[t,t+dt]$. Equality of the common projected kernel requires equality of their block-rate sums. This is strong lumpability, not a necessary condition for a single exceptional initial mixture to exhibit Markov projection [[F06](/quantum-measurement/monograph/bibliography#bib-F06)]. Multiplying [(16.5)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:lumpability) by $w_i$ and summing over $B_a$ gives $W_a\kappa_{ba}=F^{\rm proj}_{ba}$, proving [(16.6)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:coarse-rate). 

□

 

The projection theorem is stated locally on positive-weight intervals to avoid assigning rates to unoccupied fine states. When its identities hold on all such intervals of the piecewise-constant domain, the node-safe law of Lemma [15.2](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:existence) supplies the joins. No freely chosen post-node source distribution is introduced. 



**Example 16.6 (Minimal microscopic motion with zero coarse current).**

 <a id="stat:parity"></a> On four cyclic sectors use $H=i\hbar a(S-S^\dagger)$ and the uniform wave $(1,1,1,1)/2$. Every fine clockwise current is $a/2$, so every clockwise rate is $2a$. Group even sites into one block and odd sites into the other. The opposite fine routes cancel in $J^{\rm c}$, giving $J^{\rm c}=0$, while $F^{\rm proj}_{10}=F^{\rm proj}_{01}=a$. Each fine state has a single exit of rate $2a$ into the other block, so the projection is strongly lumpable and its parity flips at rate $2a$. Therefore 

$$

 P(Y_t\ne Y_0)=\frac{1-e^{-4at}}2.

$$

 A process constructed anew from the coarse Bell formula with zero current would never change parity. Both have constant coarse weights $1/2$, but they are different histories of the same readout. Microscopic minimality therefore does not mean minimality after every grouping. 

 



**Example 16.7 (A sufficient hidden-factor realization).**

<a id="stat:factor"></a> Let $\mathcal H=\mathcal H_C\otimes\mathcal H_E$ with rank-one product sectors $(c,\eta)$, product wave $\psi\otimes\xi$, and Hamiltonian $H_C\otimes I+I\otimes H_E$. The factorization is preserved. A fine edge changing $c$ while keeping $\eta$ fixed has 

$$

 J_{(c',\eta),(c,\eta)}=|\xi_\eta|^2J^C_{c'c},\qquad
 w_{c\eta}=|\psi_c|^2|\xi_\eta|^2.

$$

 Its Bell rate, on occupied sectors, is $[J^C_{c'c}]_+/|\psi_c|^2$, independent of $\eta$. Crossedges with both labels changing are absent. Thus the $c$ readout has aligned fluxes and is strongly lumpable; its projected law is the coarse Bell law. The conclusion relies on this factorization and interaction structure. A correlated returning factor with new couplings need not satisfy either identity. 

 

This is the precise meaning of transfer to a coarse aperture in the checkpoint argument [[C03](/quantum-measurement/monograph/bibliography#bib-C03)]. Erasing route labels does not erase their crossing counts. An integrated current is an expected signed count, not an outcome probability unless the protocol also guarantees the relevant single-event and survival conditions. 



<a id="section-16-4"></a>

## 16.4 Finite directional response: a completed counterconstruction

 

The checkpoint proposed a finite-response sign gate as a possible physical implementation of directional exclusion. Its correct partial result can be stated as a theorem, while retaining the distinction between a flux ansatz and an actual rate law. 



**Proposition 16.8 (Directional exclusion with lag is not current matching).**

 <a id="stat:gate"></a> Let $d(t)\in[-1,1]$ and define proposed directional fluxes on a two-sector cut by <a id="stat:gate-flux"></a>


$$

 q_f=|J|[d]_+,\qquad q_r=|J|[-d]_+.

$$

Equation (16.7).

 They have no simultaneous opposite traffic, but their signed flux is $|J|d$. They realize the prescribed current exactly if and only if $d=\operatorname{sgn}J$ wherever $J\ne0$. For $t\geq0$, take 

$$

 J(t)=-J_0\tanh(t/T_J),\qquad
 \tau\dot d=-1-d,\qquad d(0)=1,
 \qquad J_0,T_J,\tau>0.

$$

 On any finite interval on which the probabilities below stay strictly between zero and one, the completion that prescribes *actual* fluxes $q_f,q_r$ has an explicit Markov realization with occupation $p_1$ and <a id="stat:gate-wave"></a>
<a id="stat:gate-error"></a>
<a id="stat:gate-bound"></a>


$$
\begin{aligned}w_1(t)&=w_*-J_0T_J\log\cosh(t/T_J),\\
 p_1(t)-w_1(t)
    &=2J_0\int_0^t e^{-s/\tau}\tanh(s/T_J)\,ds,
                                                  \\
 0<p_1(t)-w_1(t)&\leq2J_0\tau^2/T_J\qquad(t>0).
                                                  
\end{aligned}
$$

Equation (16.8, 16.9, 16.10).

 The target current is negative after zero, while the gate selects the old positive direction until $t=\tau\log2$. This is a finite preparation and timing counterexample to equating directional exclusion with Bell selection. 

 

**Proof.**

Equation [(16.7)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-flux) gives $q_fq_r=0$, $q_f-q_r=|J|d$, and $q_f+q_r=|J||d|$. The gate solution is $d=-1+2e^{-t/\tau}$. Integrating $\dot w_1=J$ gives [(16.8)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-wave). Define $p_1(t)=w_*+\int_0^t|J(s)|d(s)ds$. Subtraction gives [(16.9)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-error). Positivity of the integrand proves strictness, and $\tanh(s/T_J)\leq s/T_J$ with $\int_0^\infty s e^{-s/\tau}ds=\tau^2$ proves [(16.10)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-bound). 

For example, choose the horizon so that 

$$

 J_0T_J\log\cosh(T/T_J)<w_*,\qquad
 w_*+2J_0\tau^2/T_J<1.

$$

 Then both $w_1$ and $p_1$ remain inside $(0,1)$. Set <a id="stat:gate-rates"></a>


$$

 k_{10}(t)=\frac{q_f(t)}{1-p_1(t)},\qquad
 k_{01}(t)=\frac{q_r(t)}{p_1(t)}.

$$

Equation (16.11).

 These are bounded on the finite closed interval, and $p$ solves their master equation with the chosen initial distribution. Uniqueness of the finite-state forward equation proves that $p$ is the actual occupation, and hence that the assigned $q$ are its actual directed fluxes. The underlying target wave current is nonempty as well: take $\Psi_t=(\sqrt{1-w_1(t)},\sqrt{w_1(t)})$ and 

$$

 H(t)=i\hbar\Omega(t)(|1\rangle\langle0|-|0\rangle\langle1|),
 \qquad
 \Omega(t)=\frac{J(t)}{2\sqrt{w_1(t)(1-w_1(t))}}.

$$

 Direct differentiation gives Schrödinger evolution and current $J$. This smooth finite programme is used only for the gate counterexample; it is not an extension of the piecewise-constant selection theorem. 

□

 

The rates in [(16.11)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-rates) depend on the prepared ensemble law through $p$. The proposition is an executable time-dependent statistical completion for the given preparation, not a derived preparation-independent local material actuator. If instead one divides the same $q$ by the wave weights, the actual occupation $\nu$ obeys <a id="stat:gate-wrong-denominator"></a>


$$

 \dot\nu_1=\frac{\nu_0}{w_0}q_f-\frac{\nu_1}{w_1}q_r,

$$

Equation (16.12).

 and [(16.9)](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:gate-error) no longer follows. A correct mean-flux estimate cannot be transferred across those different completions. Nor does a gate bound on total traffic alone control signed current: the gate can permit almost the right amount of traffic in the wrong direction. 

The scope of the useful estimate is nevertheless explicit. In the prescribed-actual-flux completion, its expected total count is $\int_0^T|J||d|dt\leq\int_0^T|J|dt$, and $P(N_T\geq1)\leq\min(1,\mathbb E N_T)$. Its occupation discrepancy is quadratic in response time for this smooth reversal. These are completed finite calculations. They neither prove the original Bell law at finite response time nor establish a passive apparatus measuring that native traffic without changing the experiment. 



<a id="section-16-5"></a>

## 16.5 One chain, two possible constitutive choices

 

The variational selection chain can now be given precisely. For a fixed finite complete source and control domain: 

1. Supply linear coherent evolution, one actual sector, the declared fundamental resolution, and every future-active memory.

2. Impose expected pairwise Hamiltonian-current realization. Supply initial $w$, or impose its control-stable coherent-evacuation domain so that Theorem [14.6](/quantum-measurement/monograph/current-incidence-and-conditional-timing#stat:calibration) forces it.

3. Impose the relative-entropy reaction principle with its neutral Markov reference and zero-background prescription. Theorem [15.4](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:selection) then selects the conditional Bell path law in physical time, including nodes and null intervals.

4. Admit explicit coherent apparatus contacts in that same complete source. Apply their joint law and physical record maps, retaining returning factors. Corollary [15.6](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:output-bound) transfers the path estimate to those complete experiments; it does not supply universal admission of all possible contacts.

 A second internally specified route replaces the entropy premise by an explicit Markov premise and minimal positive mean incidence. It yields the same Bell kernel by Corollary [16.2](/quantum-measurement/monograph/minimal-traces-projected-histories-and-the-constitutive-boundary#stat:mpbt), but it does not explain timing within a history-dependent class. These are two constitutive presentations, not successive deductions from increasingly weak old assumptions. 

The earlier kinetic construction supplies a different conditional route: Hamiltonian current production, conservative packet export, scalar pair chemistry, and a residence/path limit [[M01](/quantum-measurement/monograph/bibliography#bib-M01)]. Its comparison proof retains the intrinsic chemistry and full participation hypotheses. Chapter [6](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:chapter-medium) provides their new finite-gas realization and a finite-recombination comparison. The earlier direct incidence model already allocated normalized escape responses [[M02](/quantum-measurement/monograph/bibliography#bib-M02)]; it cannot be credited with deriving that allocation a second time. The variational law above can instead replace the kinetic reaction premise as a statistical constitution, but it does not derive that chemistry from the canonical action. A full-state record interface requires its own common physical inventory; equality of mean currents alone never establishes that embedding. 

The predictive-current quotient developed in the foundations chapter identifies the source distinctions needed to determine every future $w,J$ under the admitted coherent controls. Once a conditional generator has been selected, that quotient together with $X$ determines its kernel. The direction of this implication matters: the quotient organizes the required source information; it does not manufacture the probability law. 

 

| Ingredient | Consolidated consequence | Input retained |
| --- | --- | --- |
| Hamiltonian continuity | Antisymmetric currents and weight evolution | Wave, Hamiltonian, resolution |
| Expected pair-current matching | $\pi-w$ constant; conditional calibration | Statistical event-current identification |
| Minimal mean incidence | Positive-current numerator | Physical no-surplus premise; no timing selection alone |
| Path entropy minimization | Finite-background rate and Markov timing | Neutral reference and extremal statistical law |
| Zero-background limit | Bell paths with [(15.13)](/quantum-measurement/monograph/variational-selection-of-complete-event-paths#stat:path-bound) | Limit prescription, fixed finite domain |
| Physical record projection | Common-output error and coarse-law test | Admitted joint contacts; sign alignment/closure where claimed |

  

The event-law block is mathematically selected within an explicit statistical constitution. Its entropy principle and expected edge-current constraint are not consequences of the older information-completion premises. Chapter [6](/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:chapter-medium) addresses the same Bell target by an independently specified microscopic model, and Chapter [7](/quantum-measurement/monograph/autonomous-material-records-in-the-pilot-theory#p:chapter-records) supplies ordinary physical records under that model's additional coupling rule. This is constitutive internal completion with controlled effective errors, not a derivation of the entropy principle or a universal necessity theorem for Bell dynamics.
