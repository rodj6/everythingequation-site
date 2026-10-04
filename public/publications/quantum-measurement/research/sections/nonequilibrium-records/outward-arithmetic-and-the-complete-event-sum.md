# Section 26: Outward arithmetic and the complete event sum

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

<a id="section-26"></a>

## 26 Outward arithmetic and the complete event sum

<a id="sec:events"></a> The preceding arguments identify each error as an event or a nonnegative current functional under the same initial coupling. The preparation, old-wave, new-prefix and copy/hold appendices specify their coefficient formulae and evaluation bounds. No numerical certificate is used in place of an analytic inequality.

For reproducible square-root enclosures, given a nonnegative rational $x$ and $n=10^{60}$, choose the least integer $k$ with $k^2\ge n^2x$; then $k/n$ is an upper bound. Polynomial integrations are exact rational operations, and positive Taylor remainders or explicit derivative bounds control the nonpolynomial terms as detailed in the appendices. The following current ceilings have been rounded outward before combining: 

$$

\begin{aligned}
 I_{\rm old}&<6.655453611235769\times10^{-16},\\
 \Delta I_S&<4.547786946512146880\times10^{-16},\\
 I_Z&<2.574814383253091344\times10^{-15}.
\end{aligned}

$$

 The rank row below is evaluated as $2C\sqrt{2N(I_{\rm old}+\Delta I_S+I_Z)}$, with $C=270000/67499$ and $N=256001$. Every displayed table entry is itself a rational upper bound; unlike a shortened diagnostic display, these entries may be added directly. The harmless rounding of the pointer-inner event is deliberately included in the sum.  

| Event or contribution | Outward upper bound |
| --- | --- |
| Conditional reference endpoint | $0.002588532236512050$ |
| Preparation rank | $0.000003084949592861$ |
| Initial exact CDF | $0.000061578013525596$ |
| Conditional age union | $0.000263432327209778$ |
| Conditional exterior union | $0.000000015476669581$ |
| Terminal exact CDF | $0.000062145214303409$ |
| Aggregate own-rank history | $0.000347974650032331$ |
| Copy baseline | $0.000537032962395582$ |
| Finite-clock copy correction | $0.000010915589215099$ |
| Positive pointer-inner event | $0.000000000000000001$ |
| Holding current | $0.000000003271569844$ |
| Shared clock core | $0.000004378860028174$ |
| Shared whole-interval clock deviation | $0.000000000000106690$ |
| Shared actual radial exit | $0.000000091272176629$ |

  The first seven rows belong to earlier-label transfer, the next four to copying and retention, and the last three to both arguments. In both proofs the last three are the same clock-core, entire-clock-deviation and actual-radial-exit events of the new wave. Their sum is therefore charged once in the union. Direct addition of the displayed rational ceilings gives 

$$

\begin{aligned}
 p_{\rm label}&\le 0.003331233000157099<.003331233001,\\
 p_{\rm copy/hold}&\le 0.000552421955492019<.000552421956,\\
 p_{\rm union}&\le 0.003879184823337625,\\
 p_{\rm union}+.002207585289&\le 0.006086770112337625<.006086770113.
\end{aligned}

$$

 The reference-label ceiling $.002207585289$ already includes both original $10^{-4}$ allowances. Applying Lemma [2.1](/quantum-measurement/research/nonequilibrium-records/probability-and-complete-record-observables#lem:joint) proves the advertised joint-record bound without counting either allowance again. The explicit outward sums also show that the last displayed headline digits do not depend on substituting rounded intermediate values into an unreported computation.
