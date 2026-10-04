# Section 16: Finite complete theorem

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-16"></a>

## 16 Finite complete theorem

 Let $X=x-R$. Define $t_a=1.22$, $t_b=1.28$, $T_H=3$ and 

$$

 I_0=[-8,8],\ I_1=[16,32],\qquad
 \mathcal R_0=[-10,10],\ \mathcal R_1=[14,34].

$$

 The record symbol is $0$ or $1$ in the corresponding outer region and $\perp$ elsewhere. The relative rotor classifier is halfway between the nominal sector centers. No observation is performed at $t_a$; it identifies the earlier actual outcome which the pointer records.



**Theorem 16.1 (Complete direct ordinary record).**

<a id="pr:thm:final"></a> Assume the stated conservative current flow on the ordinary model, the exact conserved internal sectors, the specified initial product waves and actual-law family, and the prescribed-profile realization of the periodic-model section. Uniformly over every normalized qubit/reference input, every admitted actual source and clock conditional law, and every $t\in[1.28,3]$, 

$$

 \boxed{
 {\operatorname{TV}}\!\left(\mathcal L(\mathfrak r(Z_t)),
 \operatorname{Bernoulli}_{\{0,1,\perp\}}(p_{\rm tar})\right)
 \le\varepsilon_{\mathrm{per}}=.00443484008607784720002304<.01.}

$$

 Moreover, 

$$

 \boxed{
 P\{Z_t\in\mathcal R_{\ell(X_{1.22})}\ \forall t\in[1.28,3]\}
 \ge1-.00232725479707784720002304.}

$$

 

 

**Proof.**

Exact relative-coordinate reduction and spectator independence leave the active initial law $f_0(X,Z,S)$. Its density is bounded by16 times the initial active wave reference. The isolated rotor's periodic-flow event is calibrated by $1/(2N)+D^2$. The current-sensitive quiet-prefix calculation changes its actual label by at most $8Nr+16I_{\rm pre}/r$. The source-free sector factorization is used explicitly; it is not inferred from a small source error.

The soft-classifier proof copies the actual coupled earlier label with error $C_{16}$, and the pointer-band current gives the whole holding error $H_{16}$. Add the same-support actual-law neighbourhood and target-projector error once. The proof compares the ordinary record to its own actual earlier label and then to the Born target. It does not need a small difference from squared-controller's individual trajectories.

For the simultaneous history claim, only copying, holding and the actual-law neighbourhood are required. All bounds concern one Hamiltonian and one parameter family. Source and preparation-clock conditionals integrate exactly because the event is independent of their initial values; they are not averaged under an assumed physical Born law. 

□



 

| Contribution | Certified bound |
| --- | --- |
| Cell averaging | $1/512=.001953125$ |
| Wrong-side rotor probability | $D^2=.000052316289$ |
| Clock-prefix label change | $.000002144$ |
| Actual historical copy $C_{16}$ | $.00222725479707774720002304$ |
| Whole-interval holding $H_{16}$ | $10^{-16}$ |
| Actual-law neighbourhood | $.0001$ |
| Target-projector calibration | $.0001$ |
| Complete sum | $.00443484008607784720002304$ |

  Here $D=.007233$, $Q=.003983$, $e_A=2\times10^{-13}$, $r=10^{-9}$, and $I_{\rm pre}\le6\times10^{-18}$. The exact record fraction is 

$$

 \frac{1732359408624159062509}{390625000000000000000000}.

$$

 The unused direct probability margin is $.00556515991392215279997696$. It could be spent on a separately proved microscopic field-realization history error; it is not such an error certificate.



**Corollary 16.2 (Joint periodic-record law).**

<a id="cor:periodicjoint"></a> With the same assumptions and parameters, the law of the actual earlier label and its entire symbolic holding path has distance at most $0.00443484008607784720002304$ from the ideal constant path with the specified calibrated Bernoulli label. 

 

**Proof.**

For a base law, calibration and prefix transfer cost $1/512+D^2+0.000002144$. Copying and holding cost $C_{16}+10^{-16}$. Apply Lemma [2.1](/quantum-measurement/research/nonequilibrium-records/probability-and-complete-record-observables#lem:joint) with the isolated label and these actual-history events. The actual-law neighbourhood costs $10^{-4}$ once on the full path law because the same flow is used. The target-projector allowance costs another $10^{-4}$. Their sum is the displayed bound. This strengthens the presentation to a joint observable using the already proved common-event argument, without inferring path stability from norm error alone. 

□





<a id="section-16-1"></a>

### 16.1 A genuinely nonequilibrium admissible stock

 On the readiness box take $f_0=(1+0.8X){\mathbf1}_{[-1,1]^2\times[0,1/4]}$. Its mass is one, maximum is $1.8$, directional variations are $(1.8,1,8)$ and rotor half-probability is $0.7$. Its clock is confined to one half of a symmetric wave packet, so the initial full-law TV distance from the wave measure is at least $1/2$. An admitted source conditional is $(1+\tfrac12\operatorname{sgn}u_1)|\zeta|^2$. These are examples, not new assumptions imposed on the whole class. Invertibility of the full flow preserves fine-grained TV. Calibration of a coarse record therefore does not prove that the full ensemble equilibrates or that previously retained information is destroyed.
