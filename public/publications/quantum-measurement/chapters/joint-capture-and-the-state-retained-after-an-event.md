# Chapter 20: Joint capture and the state retained after an event

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

<a id="det:chapter-capture"></a> 

This chapter consolidates the strongest detector-selection argument of [[M15](/quantum-measurement/monograph/bibliography#bib-M15), [M16](/quantum-measurement/monograph/bibliography#bib-M16)]. It begins with genuinely unknown stochastic daughters. A positive-response test of absent joint channels determines their old-bank component; finite click/null and double-click comparisons then determine a held detector's scalar response. A further archive test is necessary to determine the complete retained output. These implications hold within a specified source constitution. In particular, preservation of all joint zeros characterizes faithful extraction in the admitted probe class; it is not a consequence established here from source/readout incompleteness. 

Two subsequent chapters give different realizations. The conserved converter with an actual diffusive reader has a finite, nonsharp conditional state on every finite record. The finite receptor with an intrinsic latch has exact selected branches but a nontrivial no-record receptor state. Neither realization may inherit the other's null dynamics by a change of notation. 



<a id="section-20-1"></a>

## 20.1 The initially open event kernel

 

At a fixed complete classical preparation $c$, write a loaded binary outlet as <a id="det:rows"></a>


$$
\Phi=|0\rangle_D v_0+|1\rangle_D v_1,
 \qquad v_j\in\mathcal B,
 \qquad p_j=\|v_j\|^2,
 \qquad p_0+p_1=1.                         

$$

Equation (20.1).

 The old coherent bank $\mathcal B$ contains the carried system, every incoming quantum memory that can return, and an arbitrary inaccessible reference. The classical variable $c$ retains active preparation labels, clocks, reaction resources and controls. Different values of these data are different complete preparations. A spent detector produces a blocked record; its retained bank is unchanged unless a separately specified replenishment interaction acts. 

Before imposing the selection premises, an event in outlet $j$ at time $u$ has an arbitrary normalized kernel <a id="det:kernel"></a>


$$
\kappa_{j,u}(\Phi;d\chi,dz),
 \qquad [\chi]\in\mathbb P(\mathcal B\otimes\mathcal M).       

$$

Equation (20.2).

 The new bank $\mathcal M$ and classical archive $z$ remain available for later experiments. Thus the old-bank daughter can be stochastic, mixed after marginalization, nonlinear in the input, dephased or rotated. The source kinematics is a kernel over full rays; branch-dependent finite banks can be embedded in one declared direct sum. No CP instrument or rank-one daughter is imposed at this stage. 



**Assumption 20.1 (Held responsive detector class).**

<a id="det:held-assumptions"></a> On an active binary detector the complete-history intensities are $\lambda_j=h(p_j)$, where $h:[0,1]\to[0,\infty)$ is continuous, $h(0)=0$, $h(1)=\gamma>0$, and $h(p)>0$ for $p>0$. A held null leaves the coherent bank unchanged. The same function applies after the admitted coherent loading, spectator embedding and previous disjoint event. There are no additional unlisted gains or history variables in this response. Intrinsic event randomness and these complete-history intensities define the process; future simulation seeds are not present physical coordinates. 

 

For positive finite windows, this class gives <a id="det:held-laws"></a>


$$
\Lambda(p)=h(p)+h(1-p),\qquad
 F_t(p)=h(p)\int_0^t e^{-\Lambda(p)u}\,du,
 \qquad N_t(p)=e^{-\Lambda(p)t}.                

$$

Equation (20.3).

 $F_t(p)$ is an actual click probability, not an auxiliary Born measurement. In particular $F_t(p)>0$ precisely when $p>0$. The population-only response and frozen null are important restrictions; later drive- or history-dependent extensions require additional premises. 



**Assumption 20.2 (Joint zero and record-order tests).**

<a id="det:zero-assumptions"></a> An admitted coherent probe $P$ on the old bank has the same responsive binary response when its population is $\|(P\otimes I)\chi\|^2$. If $Pv_j=0$ before separation, the disjoint two-port experiment cannot produce both the original record $j$ and the probe's record $1$. For the specified disjoint experiments, fixed local settings, resources and windows, the two admitted orders of evaluation give the same joint actual-record law. Neither port reads the other's newly created flag during isolation. 

 

The first condition is a source support law. The second is a finite record-order consistency law, stronger than equality of unread marginals. They do not require arbitrary noncommuting experiments to commute. A probe that physically acts on a region participating in the first reaction is not automatically disjoint. 



<a id="section-20-2"></a>

## 20.2 Positive responses determine the old-bank daughter

 



**Theorem 20.3 (Faithful old-bank continuation).**

<a id="det:dark-theorem"></a> Under Assumptions [20.1](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:held-assumptions)–[20.2](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:zero-assumptions), suppose $p_j>0$ and the probe $P=I-|\widehat v_j\rangle\langle\widehat v_j|$, where $\widehat v_j=v_j/\|v_j\|$, is admitted. Then <a id="det:faithful"></a>


$$
\chi=\widehat v_j\otimes\eta
 \quad\kappa_{j,u}\text{-almost surely for almost every actual }u.
                                                        

$$

Equation (20.4).

 The law of $\eta,z$ is not yet determined. 

 

**Proof.**

Set $q(\chi)=\|(P\otimes I_{\mathcal M})\chi\|^2$. Evaluate the two-port experiment by the original event first. Its formerly dark joint record has probability <a id="det:dark-integral"></a>


$$
\int_0^t h(p_j)e^{-\Lambda(p_j)u}
 \int F_s(q(\chi))\,
       \kappa_{j,u}(\Phi;d\chi,dz)\,du.          

$$

Equation (20.5).

 It vanishes by the source support law. The integrand is nonnegative, the outer density is strictly positive and $F_s(q)>0$ for every $q>0$. Consequently $q=0$ for kernel-almost every daughter, for almost every $u$. The null space of $P\otimes I_{\mathcal M}$ is $\operatorname{span}(v_j)\otimes\mathcal M$, proving the factorization. The second probe's unknown daughter does not enter this argument. Equivalently, finitely many positive rank-one probes spanning $v_j^\perp$ give the same conclusion by intersecting their null spaces. 

□

 



**Proposition 20.4 (Extension to an inaccessible reference).**

 <a id="det:spectator"></a> The theorem extends from owned binary calibration inputs to the old bank in [(20.1)](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:rows), without performing a probe on the unknown reference, if the reaction kernel obeys isometric spectator compatibility: <a id="det:isometry"></a>


$$
\kappa^{\mathcal B}_{j,u}((I_D\otimes W)\Phi_0)
  =(W\otimes I_{\mathcal M},\operatorname{id}_z)_*
       \kappa^{\mathcal B_0}_{j,u}(\Phi_0)         

$$

Equation (20.6).

 for every isometry $W:\mathcal B_0\to\mathcal B$, including the admitted loading and probe contexts. The local record law is unchanged and no output is created outside the embedded old support. 

 

**Proof.**

The span of $v_0,v_1$ has dimension at most two. Choose an owned two-dimensional bank $\mathcal B_0$ and an isometry $W$ mapping its corresponding two vectors to those rows. Theorem [20.3](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:dark-theorem) applies to this calibration input. Push its almost-sure conclusion forward by [(20.6)](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:isometry). This is a comparison of reaction laws, not the physical application of $W$ or a reference control to the unknown input. An $n$-outlet version needs owned calibration on a span of dimension at most $n$. 

□

 

Spectator compatibility is additional physical content. Nonlinear Schmidt reweighting, for example, can respect spectator isometries while violating joint-zero preservation. Conversely, faithful extraction preserves every tested zero. Thus, within the responsive complete-probe class, the zero condition and the old-bank conclusion are equivalent. This equivalence fixes the logical strength of the result. 



**Counterexample 20.5 (Storage instead of extraction).**

<a id="det:store-rival"></a> Charge conservation and record-order consistency alone allow arbitrary $h$. Give each detector a fresh neutral memory $M_D$ and use the event-dependent isometry 

$$

 |a\rangle_D|0\rangle_{M_D}
 \longmapsto |\mathrm{vac}\rangle_D|a\rangle_{M_D}
                  |\mathrm{flag}\ j\rangle.

$$

 The readiness excitation supplies the charged flag. The entire unknown input, including its entanglement, is stored. Remote populations are unchanged in each branch; the two local isometries commute. Their joint double-event density is the product of the original local densities, for every continuous positive $h$, including $h(p)=\gamma p^2$. On $(|00\rangle+|11\rangle)/\sqrt2$, the initially absent pair $(1,0)$ occurs with probability $F_t(1/2)F_s(1/2)>0$. It violates the joint-zero premise, not conservation or resource accounting. Calling its displayed label an extraction would be false. 

 



<a id="section-20-3"></a>

## 20.3 Finite records determine the held scalar rate

 



**Theorem 20.6 (Joint held-rate and continuation selection).**

 <a id="det:joint-selection"></a> The assumptions of Theorem [20.3](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:dark-theorem), with the spectator extension where needed, and finite record-order consistency imply <a id="det:joint-law"></a>


$$
h(p)=\gamma p,\qquad
 \chi_{\mathcal B}=v_j/\|v_j\|\quad\text{at record }j.        

$$

Equation (20.7).

 It suffices to compare one pair of strictly positive finite windows over all the owned preparations used in the proof. 

 

**Proof.**

Prepare the known triangular input 

$$

 \Phi_{x,y}=\sqrt y|11\rangle+\sqrt{x-y}|10\rangle
                      +\sqrt{1-x}|00\rangle,
 \qquad 0<y<x<1.

$$

 The initial populations of the two $1$ ports are $x,y$. The already-proved daughter theorem makes the second population $y/x$ after the first port clicks $1$; in the reverse order the remaining first population is $1$. These are consequences about carried vectors. 

Compare the finite event “first port clicks $1$ by $t$, second port is null by $s$.” Its two probabilities are <a id="det:null-comparison"></a>


$$
F_t(x)e^{-\Lambda(y/x)s},\qquad
 e^{-\Lambda(y)s}F_t(x).                         

$$

Equation (20.8).

 Choose $q\in(0,1)$ with $h(q)>0$, set $x=q,y=qa$, and cancel the positive $F_t(q)$. Exponential injectivity yields $\Lambda(a)=\Lambda(qa)$. Iterate and use continuity at zero to obtain $\Lambda(a)=\Lambda(0)=\gamma$. 

For the double-click event, put $k_t=\int_0^t e^{-\gamma u}du>0$. Interchange gives $k_tk_s h(x)h(y/x)=k_tk_s\gamma h(y)$. Thus $f=h/\gamma$ obeys $f(x)f(z)=f(xz)$ and $f(u)+f(1-u)=1$. For $u,v>0$ with $u+v<1$, 

$$

 f(u)+f(v)=f(u+v)
 \left[f\left(\frac{u}{u+v}\right)+
       f\left(\frac{v}{u+v}\right)\right]=f(u+v).

$$

 Continuity supplies the boundary. Nonnegative additivity makes $f$ monotone, fixes all rationals in $[0,1]$ and, by rational bracketing, fixes every real argument. Hence $f(p)=p$. 

□

 

This theorem selects a rate in a declared intrinsic reaction class, not the Hamiltonian Bell current. It contains no calculation identifying the fixed $\gamma$ with $[J_{qr}]_+/w_r$. Its positive finite-window algebra is conditional on the source support, spectator and record-order principles. The causal probability antecedent and its projection premise are recorded in [[M15](/quantum-measurement/monograph/bibliography#bib-M15)]; here the preceding positive-integrand theorem supplies the conditional populations. 

For a finite separating experiment, $h(p)=\gamma p^2$ and $x=2/3,y=1/3,\ \gamma t=\gamma s=1$ give the difference <a id="det:rate-witness"></a>


$$
\Delta=\frac45(1-e^{-5/9})(e^{-1/2}-e^{-5/9})
        =0.01117694879\ldots.                    

$$

Equation (20.9).

 It is a finite click/null bit, so an exact real-valued time readout is unnecessary. If the two complete readout implementations each have total-variation error at most $\epsilon$, their separating gap remains at least $\Delta-2\epsilon$. 



<a id="section-20-4"></a>

## 20.4 New archives are a separate obligation

 

Equation [(20.4)](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:faithful) only implies that the mean complete event state has the form <a id="det:archive-open"></a>


$$
|\widehat v_j\rangle\langle\widehat v_j|
                         \otimes\tau_{j,u}(\Phi).             

$$

Equation (20.10).

 The new CQ archive may still depend on the unknown input. Positivity forces factorization from a pure old marginal, but does not force input independence of the other factor. 



**Theorem 20.7 (Complete archive selection).**

<a id="det:archive-selection"></a> After Theorem [20.6](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:joint-selection), suppose the following further experiments are admitted. Known source vectors can be coherently tagged before separation; product spectators do not affect the local event kernel; a finite spanning set of quantum projectors and a separating family of classical events can probe the new archive after the event; and record-order consistency holds for those tests. Probe settings are chosen after the original event, so they test one fixed prior event kernel. Then, at fixed actual local $c$, 

$$

 \tau_{j,u}(\Phi)=\tau_{j,u,c}

$$

 on inputs with $p_j>0$, for almost every resolved event time, in the following measure-theoretic sense: the event/archive measures agree with this input-independent conditional kernel. The null remains the complete frozen held null. 

 

**Proof.**

Take two known input vectors $\psi,\varphi$ whose $j$ rows are nonzero. Prepare $\Xi=\sqrt a\,\psi|0\rangle_C+
\sqrt{1-a}\,\varphi|1\rangle_C$, with $0<a<1$, before separating the tag. This is an owned coherent calibration input, not a coherent superposition of classical histories or a copy of the unknown input. 

Let $P$ be one setting in the spanning family, with a strictly positive input-independent probability $\mu_P$ chosen after the original event. It can be generated by fresh owned calibration pointers using the detector just selected. Retain setting nulls, failures and new archives; they terminate or branch the test according to the declared programme. They are not discarded from its normalization. 

Compare the records: original click $j$, chosen setting $P$, new-archive click $1$ in classical event $Z$, and tag click $0$. In either order, the probability has the common positive factor $r_A r_C\mu_P r_P a\|E_j\psi\|^2$, where $r_X=1-e^{-\gamma s_X}$ and $E_j=\langle j|_D$ denotes the derived row operation. After removing that factor the two terms are 

$$

 \operatorname{tr}[P\tau_j(\Xi)(Z)],\qquad
 \operatorname{tr}[P\tau_j(\psi|0\rangle_C)(Z)].

$$

 The original-first evaluation uses the factorization from the entire old pure branch, which includes $C$. The new-archive probe cannot then change the old tag. Reverse evaluation selects the $\psi$ branch first. Interchange equates these expressions. The tag-$1$ comparison equates the same first term with the corresponding expression for $\varphi$. Product-spectator independence removes the idle pure tag. A spanning set of $P$ determines the matrix for each $Z$; the separating classical events determine its CQ measure. This proves input independence. 

For a continuous original time, perform the argument on every finite time bin. Equality of finite operator-valued measures gives equality of conditional densities almost everywhere. No conditional assertion at a prescribed zero-probability timestamp is required. If a single pointwise kernel version over an uncountable input family is desired, regularity in the input or a jointly measurable version must be added; the actual instrument conclusion only needs equality of the measures. 

□

 



**Corollary 20.8 (Calculated event instrument).**

<a id="det:intrinsic-instrument"></a> The generated held detector has complete maps, with deterministic register embeddings understood, <a id="det:intrinsic-maps"></a>


$$
\begin{aligned}\mathcal I_j(du)(\rho)
  &=\gamma e^{-\gamma u}E_j\rho E_j^\dagger
                   \otimes\tau_{j,u,c}\,du,\\
 \mathcal I_{\varnothing}(\rho)&=e^{-\gamma s}\rho.           
\end{aligned}
$$

Equation (20.11).

 These maps are affine and CP on every inaccessible reference extension, and finite generated programmes close on the complete CQ preparation measure. 

 

**Proof.**

Multiply the proved event density $\gamma e^{-\gamma u}p_j$ by the proved daughter projector and fixed archive. The factor $p_j$ cancels. Because $\sum_j E_j^\dagger E_j=I$, the integral of the click traces plus the null trace is one. The explicit products $E_j\rho E_j^\dagger$ remain positive after tensoring with an arbitrary identity; attachment of a fixed positive archive has the same property. Composition with the specified coherent and classical controls is therefore linear and positive on the complete referenced bank. Ordinary classical mixing gives dependence only on the complete CQ measure in this generated class. Universal admission of additional writers is not inferred. 

□

 



<a id="section-20-5"></a>

## 20.5 Loading, early failures and the domain of a driven extension

 

For orthogonal projectors $Q_0+Q_1=I$, an admitted loader on ready $|r\rangle_D$ has <a id="det:loader"></a>


$$
H_{\mathrm{load}}=\omega\sum_j Q_j\otimes
 (|j\rangle\langle r|+|r\rangle\langle j|),
 \quad
 U_t(\Psi|r\rangle)=\cos(\omega t)\Psi|r\rangle
  -i\sin(\omega t)\sum_jQ_j\Psi|j\rangle.       

$$

Equation (20.12).

 The equality tensors with any inaccessible reference. Loading with actualization disabled until $\pi/(2\omega)$ supplies the rows used above. Conservation is of the stated one-excitation charge; it does not by itself establish conservation of laboratory energy or another source charge. 

If the same instantaneous population response is additionally postulated during a drive, all live modes, including ready and unused failure modes, must be registered. Then $\sum_aE_a^\dagger E_a=I$ on the live space and <a id="det:driven"></a>


$$
K_a(u)=\sqrt\gamma e^{-\gamma u/2}E_aU_u,
 \qquad K_{\varnothing}=e^{-\gamma s/2}U_s.       

$$

Equation (20.13).

 Normalization follows by summing $K_a^\dagger K_a$ and integrating. During [(20.12)](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:loader), intended outlet $j$ contributes $\gamma e^{-\gamma u}\sin^2(\omega u)Q_j\rho Q_j\,du$, whereas premature ready capture contributes $\gamma e^{-\gamma u}\cos^2(\omega u)\rho\,du$ and a failure flag. The null is the actual $U_s\rho U_s^\dagger$, with its scalar survival. Suppressing the ready-failure term would destroy normalization. 

The effect of a finite record, with its time unread, is consequently <a id="det:driven-effect"></a>


$$
F_a(T)=\int_0^T K_a(t)^\dagger K_a(t)\,dt
       =\int_0^T\gamma e^{-\gamma t}
                    U_t^\dagger E_a^\dagger E_aU_t\,dt.
 

$$

Equation (20.14).

 In particular, for $E_i^\dagger E_i=P_i$ and a fixed bounded self-adjoint source Hamiltonian $H_S$, restore $\hbar$ and take $U_t=e^{-iH_St/\hbar}$. Then <a id="det:driven-effect-remainder"></a>


$$
\begin{aligned}
 F_i(\infty)&=P_i+\frac{i}{\hbar\gamma}[H_S,P_i]+R_{i,\gamma},\\
 \|R_{i,\gamma}\|&\le
 \frac{\|[H_S,[H_S,P_i]]\|}{\hbar^2\gamma^2}
 \le\frac{4\|H_S\|^2}{\hbar^2\gamma^2}.
 \end{aligned}
 

$$

Equation (20.15).

 Indeed, twice differentiating $U_t^\dagger P_iU_t$ gives a second derivative of norm at most $\|[H_S,[H_S,P_i]]\|/\hbar^2$. Its integral Taylor remainder is bounded by half this constant times $t^2$; integrating against $\gamma e^{-\gamma t}$ gives the displayed bound. Thus finite response generally measures a time-averaged effect, even for exact projective outlet channels. This calculation still assumes the driven-response premise of [(20.13)](/quantum-measurement/monograph/joint-capture-and-the-state-retained-after-an-event#det:driven). 

With loading stopped at $\tau=\pi/(2\omega)$ and $s\ge\tau$, the integrated loading failure is 

$$

 f_\tau=\frac{1-e^{-\gamma\tau}}2+
 \frac{\gamma^2(1+e^{-\gamma\tau})}{2(\gamma^2+4\omega^2)},
 \qquad f_\tau\le\frac{\pi\gamma}{4\omega}.

$$

 The remaining success has common factor $r_s=1-f_\tau-e^{-\gamma s}>0$ and label law $r_s\|Q_j\Psi\|^2$. This is the finite tag required by the scalar selection bridge elsewhere in the monograph. The held theorem alone does not derive the driven-response premise. Vacuum/live coherent superpositions also require a different extension, because the sum of the registered effects is then the live projector, not the identity.
