# Section 8: The complete physical-time Bell-path limit

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

<a id="section-8"></a>

## 8 The complete physical-time Bell-path limit

<a id="sec:mainlimit"></a> Define $\epsilon_{\rm kin}(N,T)$ to be the signed-queue tagged-path bound [(29)](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:pathbound), proved in Theorem [7.3](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:path) of Section [7](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#app:kinetic), with the cutoff choices made there. Under that section's hypotheses it tends to zero for fixed finite graph and programme if <a id="eq:kineticscale"></a>


$$
\mu_N\longrightarrow\infty,\qquad \mu_N/N\longrightarrow0,
 \qquad {\mathbb E}\|x^N(0)-w(0)\|_1\longrightarrow0.
 

$$

Equation (30).

 Initialize the tag from $\nu\le Cw(0)$ and the other $N-1$ carriers independently from $w(0)$, independently of the tag and gas conditional on the field. Equilibrium use takes $\nu=w(0)$, so all carriers are iid. The expected initial census error is at most $\sqrt{|V|/N}+2/N$, and the same tracking proof applies. This is an initial ensemble assumption, not a new draw at each event, a physical unknown-state sampling device, or a derivation of equilibrium preparation from dynamics. Deterministic counts with exchangeable labels instead give tag law $x^N(0)$, not exactly $w(0)$, and require adding their initial-law discrepancy if that variant is used.



**Theorem 8.1 (Conditional Bell-path limit of the deterministic hybrid model).**

<a id="thm:main"></a> Assume P1–P4 and the following fixed data and preparation hypotheses: 

1. (i) A finite ordinary configuration graph $V$, a declared finite sector/reference convention, a finite physical horizon $[0,T]$, and a fixed bounded piecewise $C^1$ admitted Hermitian programme $H(t)$. The resulting coherent currents $J_e$ have bounded variation on the horizon. The graph, programme and all retained ordinary systems are fixed as $N$ grows. Every ordinary control and feedback interaction is included in this programme.

2. (ii) Fixed scalar response coefficients $0<\kappa_-\le\kappa_e\le\kappa_+<\infty$, the complete binary reaction list, and the conservative exporter of Section [3](/quantum-measurement/research/hybrid-bell-paths/canonical-edge-ownership-and-conservative-export#sec:source), with its uniform $O(N^{-1})$ discrepancy and per-edge $O(N)$ birth budgets $B_e$. Packet stock is initially empty. Initial exporter residues are zero, or satisfy $|u_e(0)|<1$ as allowed by [(6)](/quantum-measurement/research/hybrid-bell-paths/canonical-edge-ownership-and-conservative-export#eq:export) and Section [7](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#app:kinetic).

3. (iii) Conditional on the fixed initial coherent preparation, the predesignated tag has a fixed law $\nu$ with $\nu_r\le Cw_r(0)$ for every $r$, where $C<\infty$ is independent of $N$. Its $N-1$ companion carriers are independent samples from $w(0)$, independent of the tag. The census is consequently calibrated in expectation as in [(30)](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#eq:kineticscale). More generally the same conclusion applies to an admitted calibrated census with this tag law and ${\mathbb E}\|x^N(0)-w(0)\|_1\to0$, under the independent comparison-clock initialization of Section [7](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#app:kinetic).

4. (iv) The finite beam is initialized independently of the entire reaction device, conditional on the declared coherent preparation, with the longitudinal and transverse product law of Section [4](/quantum-measurement/research/hybrid-bell-paths/binary-species-and-contact-geometry#sec:contacts). For $R_N>0$, $M_N>R_NT$. All packet slots, exporter fuel/blank cells, contact receivers and retained reaction-product banks are supplied for the stated budgets. The physical finite device and its Poisson comparison use the same causal map, tie order and virtual overflow convention of Theorem [5.1](/quantum-measurement/research/hybrid-bell-paths/a-finite-spatial-ensemble-and-its-poisson-comparison#thm:gas).

 On the common path space $D([0,T],V)$, with its coordinate $\sigma$-field, every finite realization satisfying these hypotheses obeys <a id="eq:mainerror"></a>


$$
{d_{\mathrm{TV}}}\bigl({\operatorname{Law}}(Q^N_{[0,T]}),\mathbb P^B_{H,\nu,[0,T]}\bigr)
 \le \Delta_N:=\frac{(R_NT)^2}{M_N}
       +\sum_e\frac{\kappa_e\mu_NB_e}{2a_e}
       +\epsilon_{\rm kin}(N,T).
 

$$

Equation (31).

 In general the bound tends to zero when [(30)](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#eq:kineticscale) holds and both $(R_NT)^2/M_N\to0$ and $\sum_e\kappa_e\mu_NB_e/(2a_e)\to0$. In fixed physical units, the concrete choice $B_e=O(N)$, $\mu_N=N^{1/2}$, $a_e=N^2$, and $M_N=N^{10}$ gives $R_N=O(N^4)$, gas error $O(N^{-2})$, recombination error $O(N^{-1/2})$, and $\Delta_N\to0$. Each resource is finite at each $N$; the capacities and $M_N>R_NT$ condition are imposed before the run. No change of time accompanies this limit. The target is the nonexplosive minimal Bell process [(1)](/quantum-measurement/research/hybrid-bell-paths/introduction-and-statement-of-scope#eq:target), initialized at $\nu$, with its complete natural conditional timing law. 

 

**Proof.**

Condition first on the declared coherent preparation. The initialized causal source, exporter and contact device is independent of the gas; Theorem [5.1](/quantum-measurement/research/hybrid-bell-paths/a-finite-spatial-ensemble-and-its-poisson-comparison#thm:gas) therefore compares its complete reaction output under the spatial beam and the Poisson contacts. In the latter model, predictable eligibility gives precisely the per-slot mass-action reactions of Theorem [6.1](/quantum-measurement/research/hybrid-bell-paths/recombination-and-the-removal-of-surplus#thm:annihilation). That theorem couples the complete reaction states until the first discrepant matched-packet service, using the stopped physical compensator and empty-stock budget. Its lifted reference then projects exactly to the signed queue of Theorems [7.1](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:tracking) and [7.3](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:path).

The initial domination, expected census calibration, bounded-variation currents and fixed exporter/response bounds are the hypotheses of those kinetic results. Their expectations include the initial census; they do not require a deterministic realization of the empirical populations. Apply the tagged-path bound on $D([0,T],V)$ and use the triangle inequality after the preceding common projections. This gives [(31)](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#eq:mainerror). The growth estimates follow from [(9)](/quantum-measurement/research/hybrid-bell-paths/binary-species-and-contact-geometry#eq:candidate); $B_e=O(N)$ gives $R_N=O(N^4)$ under the displayed scales. Lemma [7.2](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:existence) supplies nonexplosion and domination through nodal boundaries, and the nodal coupling in Theorem [7.3](/quantum-measurement/research/hybrid-bell-paths/mass-action-tracking-and-convergence-through-nodes#kin:path) identifies the entire limiting law. 

□



For the limit, conditional on the declared initial field and programme, the full ordinary history through $t$ and current state $X$, the probability of holding at $X$ until $t+h$ is <a id="eq:survival"></a>


$$
\exp\left[-\int_t^{t+h}\sum_{Y\ne X}\frac{[J_{YX}(s)]_+}{w_X(s)}{\,\mathrm d} s\right]
 

$$

Equation (32).

 on its positive-weight component. The first-event type has the corresponding competing-hazard density. Node localization supplies continuation when a component ends. The finite theory is history dependent through its unobserved gas and packets; the theorem does not claim pointwise convergence of conditional kernels on all rare pasts. It proves total variation of complete paths, which implies convergence for every measurable history event and every common stopped output. If a conditioning event has ideal probability $p>0$ and $\Delta_N<p$, its finite-model probability is also positive and the conditional total-variation error is at most $\min\{1,2\Delta_N/p\}$.

Individual edge ownership, absence of surplus, and timing thus have different proven origins. The primitive action supplies each $J_e$, not merely $BJ$; fast opposite-charge recombination removes excess physical directional service; independent incoming positions and scalar contact counting supply the complete chemical timing law; population tracking then supplies the residence denominator. In particular the denominator is not evaluated by a microscopic particle.



<a id="paragraph-3"></a>

#### Complete configurations and projections.

 The theorem concerns $Q$, which already contains every ordinary source, archive, receiver, controller and reference coordinate of the declared experiment. It does not identify the Bell law with the full microstate [(2)](/quantum-measurement/research/hybrid-bell-paths/microscopic-state-and-model-assumptions#eq:microstate). All pilot histories remain physically present under their different force law. A later programme that reads or returns pilot products is not covered by silently tracing them out. P3 rules out an extra ordinary read force; changes of pilot dynamics or resource recirculation require a new estimate. Coarse records contract [(31)](/quantum-measurement/research/hybrid-bell-paths/the-complete-physical-time-bell-path-limit#eq:mainerror), but their jump rates need not be the positive part of a sum of fine currents.
