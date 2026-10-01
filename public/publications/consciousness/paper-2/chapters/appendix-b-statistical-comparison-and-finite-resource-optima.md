# Appendix B: Statistical comparison and finite resource optima

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

<a id="section-B"></a>

## B Statistical comparison and finite resource optima

<a id="app:statistical"></a> 

<a id="section-B-1"></a>

### B.1 A linear-program form of deficiency

 Let $p_{\theta y}=P_{J,\theta}(y)$, $v_{\theta l}=P_{L,\theta}(l)$. Introduce stochastic variables $g_{ly}$, nonnegative residual variables $z_{\theta y}$, and $t$. Then [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency) is the optimum of 

$$
\begin{aligned}\text{minimize }&t,\\
 \sum_y g_{ly}&=1,\qquad g_{ly}\ge0,\\
 z_{\theta y}&\ge p_{\theta y}-\sum_l v_{\theta l}g_{ly},\\
 z_{\theta y}&\ge -p_{\theta y}+\sum_l v_{\theta l}g_{ly},\\
 \tfrac12\sum_y z_{\theta y}&\le t \quad(\theta\in\Theta).
\end{aligned}
$$

 A numerical solver can propose a primal/dual certificate, but its stopping flag is not a mathematical proof. For rational rows the constraints have rational coefficients and an optimum has a rational representation. The masked-family formulas in this paper instead have explicit lower bounds and attaining kernels for a continuum of parameters.

The common decoder condition is essential. Permitting $g$ to depend on unknown $\theta$ would allow it to print the required target row without any retained observation, trivializing the information question. A public context can be supplied to the decoder only if the experiment independently makes that context available.



<a id="section-B-2"></a>

### B.2 Null conditioning and record-preserving reconstruction

 In [Proposition 4.3](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#p2-07), the positive prior assigns positive weight to every source. Conditional independence therefore yields one conditional kernel valid for all source rows at every retained value that occurs under at least one source. At a value absent under all sources, the kernel has no effect on the reconstructed laws. Since the retained alphabet was defined as the projection image, a nonempty fibre is available for an arbitrary extension.

The zero-loss theorem proves the existence of a projection-preserving conditional reconstruction even though the original optimization allowed arbitrary resampling. It does not establish the same assertion at positive deficiency. In particular, imposing exact retention of $Y_L$ on approximate decoders is a different constrained optimization and must not be silently substituted for [Equation 4.1](/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments#eq:deficiency).



<a id="section-B-3"></a>

### B.3 Private randomness for SWAP

 Let $a_b(i)$ be side 1's output law at its own input $b$, and $d_c(j)$ side 2's output law at its own input $c$. Without communication or shared randomness the joint law factors. Its probability of the correct SWAP output on input $(b,c)$ is 

$$

 s_{bc}=a_b(c)d_c(b).

$$

 Multiplying over the four inputs gives 

$$

 \prod_{b,c}s_{bc}
 =\prod_b a_b(0)a_b(1)\prod_c d_c(0)d_c(1)
 \le(1/4)^4=1/256.

$$

 At least one $s_{bc}\le1/4$. Against a deterministic target row, TV error is one minus its correct-output mass, so worst-case error is at least $3/4$. Independent fair outputs attain it.

For one-way timely communication, the nonreceiving side's output law cannot depend on the remote input. Its two required remote outputs are distinct, so one marginal error is at least $1/2$. Send the available input in the permitted direction and guess the unavailable remote bit fairly on the other side; this attains worst-case complete-row error $1/2$. Two timely bits, one in each direction, implement SWAP exactly. Allowing a message after the registered output deadline does not change the law of that earlier output without changing the causal contract.



<a id="section-B-4"></a>

### B.4 A terminal state is not a complete retained history

 A contraction coefficient for a native kernel can bound the diameter of terminal state laws under fixed action words. It does not erase earlier records held by an adaptive controller. For example, a perfectly informative first output followed by a constant physical reset has identical terminal state under both sources, while its complete retained transcript remains distinguishing. Any application of a terminal contraction to a returned history must include that controller or explicitly trace out its record. The finite-history coupling theorem avoids this confusion by coupling each retained event jointly with the successor class.
