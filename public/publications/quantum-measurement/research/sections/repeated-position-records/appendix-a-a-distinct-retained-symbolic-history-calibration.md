# Appendix A: A distinct retained-symbolic-history calibration

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-A"></a>

## A A distinct retained-symbolic-history calibration

 <a id="p2s:sec:alternative"></a>

The main record theorem extracts the earlier actual digits of a retained archive. A different question is whether a finite expanding calibration can make a writer approximately uniform while its symbolic history remains available. This appendix states the elementary dyadic result explicitly. It separates this symbolic calibration problem from the physical reader, receiver and reset requirements of the 44-cycle apparatus.



**Proposition A.1 (BV calibration with every dyadic symbol retained).**

 <a id="p2s:prop:dyadic"></a> Let $U\in(0,1)$ have an absolutely continuous probability density $f\in BV(0,1)$. After $N$ exact doubling steps retain both 

$$

 V=2^NU-\lfloor2^NU\rfloor,\qquad H=\lfloor2^NU\rfloor.

$$

 Here $H$ encodes the complete ordered symbolic history. If $p_h$ is its actual probability, then <a id="p2s:eq:dyadic"></a>


$$

 {\operatorname{TV}}\bigl(\mathcal L(V,H),\operatorname{Unif}(0,1)\otimes(p_h)_h\bigr)
 \leq \frac{\operatorname{Var}(f)}{2\cdot2^N}.

$$

Equation (A.1).

 The same bound holds after averaging over original contexts $Z$ if the conditional densities $f_z$ have integrable total variation; retain $Z$ in both joint laws and replace the numerator by $\int\operatorname{Var}(f_z)\,\mu_Z(dz)$. No uniform estimate for rare contexts is required by this averaged conclusion. 

 

**Proof.**

Write $m=2^N$ and $I_h=(h/m,(h+1)/m)$. The joint density in the $h$th history fibre is $m^{-1}f((v+h)/m)$, whereas its comparison density is $p_h=\int_{I_h}f$. Therefore its contribution to twice the total variation is 

$$

 \int_{I_h}|f(u)-m p_h|\,du.

$$

 The average $mp_h$ lies between the essential lower and upper values of the BV representative on this interval. Its $L^1$ distance is at most $m^{-1}\operatorname{Var}_{I_h}(f)$. Summing the interval variations gives at most the full variation, proving [(A.1)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:dyadic). Conditional disintegration and integration give the context version. Jumps on dyadic boundaries are included in the full variation and never invalidate this upper bound. 

□



This is a joint statement with the actual history marginal, so any later common Markov instrument contracts its one initial discrepancy, even if its settings adapt to recorded symbols. To see this, apply that same kernel to the two complete initial measures and use TV contraction. It does not prove that an arbitrary later instrument is an ideal Born instrument: that is an additional property of the comparison experiment.

There is no conflict with fine-archive obstructions. The inverse formula $U=(H+V)/2^N$ retains all input information in the pair; conditioning only on the finite symbols $H$ is coarser than conditioning on an arbitrary analog record that can determine $V$ as well. Adding such a side channel can destroy [(A.1)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:dyadic)'s readiness premise, because its conditional density/variation class changes. Nor does the abstract doubling calculation implement a physical receiver, return or hold by itself.



<a id="section-A-1"></a>

### A.1 Full inverse branches with finite overlap errors

 

**Proposition A.2 (A retained-history perturbation estimate).**

 <a id="p2s:prop:inversebranches"></a> For each original context and previous symbolic history, suppose the next actual calibration map has two increasing absolutely continuous inverse branches $g_i:[0,1]\to I_i$. Their full ordered intervals $I_i$ partition $[0,1]$ and their labels agree with the ideal inverses $g_i^0(v)=(i+v)/2$, $i=0,1$. Uniformly in that context and history assume 

$$

 \sum_{i=0}^1\|g_i'-1/2\|_{L^1(0,1)}\leq\epsilon_w,
 \qquad \max_i\|g_i-g_i^0\|_\infty\leq\epsilon_x.

$$

 For an original averaged conditional variation $V_0$, the joint output distance from uniform quantile times its own actual symbolic-history and original-context marginal is at most <a id="p2s:eq:branchbound"></a>


$$

 \frac{V_0}{2\cdot2^N}+N\epsilon_w
                  +2(\epsilon_w+4\epsilon_x)V_0.

$$

Equation (A.2).

 These are hypotheses on the complete actual endpoint map; wave covariance or a small positional displacement alone does not supply them. 

 

**Proof.**

For a nonnegative unnormalized BV density $r$, of mass $m$ and variation $V$, compare the label-retaining transfers $g_i' r(g_i)$ and $\tfrac12r(g_i^0)$. The weight difference costs at most $\epsilon_w(m+V)$, since $\|r\|_\infty\leq m+V$. For the remaining term use the variation measure: the two arguments can straddle a fixed point $a$ only if $|g_i^0(v)-a|\leq\epsilon_x$. That set has length at most $4\epsilon_x$. The factor $1/2$ and the two labels therefore give 

$$

 \|\mathcal Lr-\mathcal L_0r\|_1
 \leq\epsilon_wm+(\epsilon_w+4\epsilon_x)V.

$$

 This argument uses essential BV representatives and extends by BV approximation; endpoints carry no Lebesgue mass. The full-interval and partition assumptions make both transfers mass-preserving positive operators, hence $L^1$ contractions on differences.

At ideal step $j$, sum over the unnormalized histories. Their masses sum to one, and their variations sum to at most $2^{-j}V_0$ by the explicit dyadic formulas. Telescope the true and ideal products, applying each one-step difference to the ideal intermediate densities and using the outer true contractions. Their joint output TV is at most 

$$

 \Delta_N=\frac{N\epsilon_w}{2}
       +(\epsilon_w+4\epsilon_x)V_0(1-2^{-N}).

$$

 The ideal law is within $V_0/(2\cdot2^N)$ of uniform quantile times its own history marginal. Changing that marginal to the true one costs at most another $\Delta_N$, by marginal contraction. Thus the readiness distance is at most the ideal fee plus $2\Delta_N$, which is bounded by [(A.2)](/quantum-measurement/research/repeated-position-records/appendix-a-a-distinct-retained-symbolic-history-calibration#p2s:eq:branchbound). Integrate the conditional argument against the original context law throughout. 

□

 For example $V_0\leq1024$, $N=30$, and $\epsilon_w,\epsilon_x\leq10^{-11}$ give a ceiling below $6\times10^{-7}$. This is an explicit sufficient map-error target, not an attained native 30-cycle implementation. Unlike a uniform derivative bound, the $L^1$ weight hypothesis permits some unbounded endpoint derivatives. Full branch coverage, correct positional labels and the complete context dependence remain essential.

The classical BV transfer-operator context goes back to Lasota–Yorke [[1](/quantum-measurement/research/repeated-position-records/bibliography#bib-LasotaYorke1973)]; the elementary proof here does not import their full invariant-density theorem. The conditional formulation retains the original context and the full branch Jacobians. If that context includes a controller, it can be treated as a fixed parameter only when the active subsystem is closed at that context. A dynamical controller instead belongs to the complete transported configuration and requires its own original-law and current assumptions. A quantum controller marginal does not justify discarding a singular actual controller. The abstract branch theorem therefore supplies a calibration interface, rather than a physical implementation of repeated records.
