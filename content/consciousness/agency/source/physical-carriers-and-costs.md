# Physical carriers and costs

**A physical account must specify how the bits move, how their distinctions survive and what the apparatus pays to complete the episode.** This chapter supplies the complete carrier and resource arguments from Appendix B of *Bounded Agency and Reflective Freedom*. It completes the construction in [Faithful native realization](faithful-native-realization), including the optimal identity-tour bound, powered continuous gates, bounded disturbances, a separate Gaussian approximation and the inquiry machine's stage counts.

The equations make the physical obligations explicit. They distinguish exact decoded behavior under a bounded-disturbance contract from finite-error coupling under Brownian noise. They also keep elementary windows, physical writes, source acquisitions and apparatus overhead as separate charges.

## B.1 Why a covering identity tour needs twice the path length

Consider a word of pairwise SWAPs on $m$ carriers. Require its accumulated edge graph to be connected and its final permutation to be the identity. Its length is at least

$$
2(m-1).
$$

**Proof.** Initially, the current permutation has $m$ cycles and the accumulated edge graph has $m$ connected components. A connected final edge graph requires at least $m-1$ SWAPs that join previously separate graph components.

Before any such joining SWAP, each permutation cycle lies entirely inside one accumulated graph component. A SWAP joining two graph components must therefore join two permutation cycles. Every transposition either joins two cycles or splits one cycle. To finish at the identity, with $m$ cycles again, the numbers of joins and splits must be equal. At least $m-1$ joins consequently require at least $m-1$ splits, giving at least $2(m-1)$ operations.

An outward path traversal followed by its inverse attains the bound. $\square$

This is the special identity case of the transitive-transposition bound of Goulden and Jackson [9, Proposition 2.1]. Its scope is connected identity words of pairwise SWAPs. It does not optimize arbitrary physical primitives or all possible ways to combine computation with return.

## B.2 Explicit continuous bit dynamics

Each nominated cell has one real coordinate $x_i$. At a native boundary it lies in a well box

$$
|x_i-s_i|\leq\rho,
\qquad s_i\in\{-1,+1\},
\qquad\rho=0.01.
$$

One native gate consists of an active unit followed by a restoration unit. The restoration stage brings every cell back inside its well box before the next native gate.

### A paid clock gives each gate its place

Use the pulse

$$
b(t)=
\begin{cases}
30t^2(1-t)^2,&0\leq t\leq1,\\
0,&\text{otherwise}.
\end{cases}
$$

It has integral one and extends continuously differentiably across its endpoints. A smooth flat pulse can replace it.

For a schedule with $G$ gates, an independent oscillator obeys

$$
\dot c=-\omega s,
\qquad\dot s=\omega c,
\qquad\omega=\frac{\pi}{G},
\qquad(c(0),s(0))=(1,0).
$$

One period of length $2G$ selects the complete program. On the oriented circle, write

$$
u=\frac{\arg(c+is)}{\omega}\in[0,2G).
$$

For $k=0,\ldots,G-1$, periodically extend the active gate pulse $b(u-2k)$ and restoration pulse $b(u-2k-1)$. Their values and first derivatives match at the circle seam. The prescribed vector field is therefore continuously differentiable there despite the angular coordinate chart.

The fixed program assigns an opcode to each active pulse. A paid terminal latch disables further operation after the first revolution. Alternatively, the schedule describes one episode under an explicitly declared replenishment contract. No bank coordinate drives the oscillator, program or terminal latch.

This specifies the ideal one-way schedule. Immunity to reciprocal loading in manufactured hardware would require its own realization evidence. Fixed phase spacing and program storage are apparatus, with physical costs.

Interleaved source acquisitions receive fixed reserved intervals in the same calendar, enlarging its period. An outcome cannot shorten a pulse or reveal data through variable completion time. Acquisition failure produces the declared error or terminal record. The gate equations below use local unit-time coordinates within this calendar.

### Decode the well sign without disturbing the source

Define the continuously differentiable interpolation

$$
H(u)=
\begin{cases}
0,&u\leq0,\\
3u^2-2u^3,&0<u<1,\\
1,&u\geq1,
\end{cases}
$$

and the decoder

$$
D(x)=2H\!\left(\frac{x+3/4}{3/2}\right)-1.
$$

When $|x|\geq3/4$, $D(x)$ equals the well sign. Its constant plateaus keep the desired logical input fixed while a source remains near its well.

For a source-disjoint write, the target follows

$$
\begin{aligned}
\dot x_j&=10b(t)(u-x_j)+d_j(t),\\
u&\in\left\{-1,+1,D(x_i),-D(x_i),
\frac{1-v-w-vw}{2}\right\},\\
v&=D(x_i),\qquad w=D(x_k)\quad\text{for NAND}.
\end{aligned}
\tag{B.1}
$$

Neither NAND source is its target. The other choices implement constants, copying or sign inversion. During the active unit, all non-target cells have only their disturbance drifts $d_i(t)$.

Assume

$$
|d_i(t)|\leq\zeta=0.001.
$$

Sources stay in their decoder plateaus, so $u$ remains the correct constant logical target throughout the write. Variation of constants bounds the endpoint target error by

$$
(2+\rho)e^{-10}+\zeta<0.001092.
$$

A held cell has error at most $\rho+\zeta$. Thus the write produces the intended sign before restoration, while preserving the logical source values.

### A Boolean SWAP with no additional sampling cell

For a pair of cell coordinates $(x,y)$, put

$$
r=\frac{x+y}{2},
\qquad q=\frac{x-y}{2},
\qquad a=\frac13,
\qquad R^2=(r/a)^2+q^2,
$$

and define

$$
\chi(z)=H(4z-1)\bigl[1-H(2z-3)\bigr].
$$

The two-coordinate active field is

$$
\dot r=-\pi b(t)aq\chi(R^2),
\qquad
\dot q=\pi b(t)(r/a)\chi(R^2).
\tag{B.2}
$$

At equal signed corners, $R^2=9$ and the field vanishes. At opposite signed corners, $R=1$ and $\chi=1$. The scaled pair $(r/a,q)$ rotates by $\pi$, exchanging the logical signs.

In the original coordinates this becomes

$$
\begin{aligned}
\dot x&=\pi b(t)\left(\frac43x+\frac53y\right)\chi(R^2),\\
\dot y&=\pi b(t)\left(-\frac53x-\frac43y\right)\chi(R^2).
\end{aligned}
$$

There is genuine dependence in both directions and no extra sampling cell. The field realizes a Boolean SWAP on the designated well regions. It does not exchange every pair of nearby analog coordinates exactly, so it makes no orientation-reversing claim on an open set.

For opposite signs, the norm of the scaled initial perturbation is at most $\sqrt{10}\rho$. Integrated bounded disturbance adds at most $\sqrt{10}\zeta$. Since

$$
\sqrt{10}(\rho+\zeta)<\sqrt{3/2}-1,
$$

a first-exit argument keeps the perturbed path inside the rotating plateau. Transforming the disturbance back to a cell gives endpoint error at most

$$
\rho+\frac{10}{3}\zeta<0.013334.
$$

For equal signs,

$$
9(1-\rho-\zeta)^2>2
$$

keeps the field inactive. Their endpoint error is at most $\rho+\zeta$.

### Restoration closes the induction

During the restoration unit, every cell obeys

$$
\dot x_i=5b(t)x_i(1-x_i^2)+d_i(t).
\tag{B.3}
$$

Inside $|x_i-s_i|\leq0.1$, the upper derivative of the well error is bounded by

$$
-1.71\cdot5b(t)|x_i-s_i|+\zeta.
$$

If $e_0$ is the error entering restoration, the endpoint error is at most

$$
e_0e^{-8.55}+\zeta.
$$

Apply this to the largest active-stage error:

$$
0.013334e^{-8.55}+0.001<0.001003<\rho.
$$

Every restored cell therefore returns to the admitted well box. Induction over gates proves the exact intended decoded trace for every finite gate sequence under this bounded-disturbance contract.

All work cells participate in the return. Resetting or reusing a cell does not remove it from the component. The explicit bounded-cell construction specializes established smooth-simulation methods [10] to the native gate and record contract used here.

Exact decoded behavior is one part of the physical qualification. Disturbances must not introduce unmodeled returning couplings. The native record grammar consists of the stipulated well-sign reads; adding an analog readout changes its predictive classes. Active couplers are directed powered forces. These equations provide no measured switching heat or energy rating. Preparation, holding, clocks, source generation and outputs remain explicit device dependencies.

## B.3 Gaussian noise gives a finite-error refinement

Brownian noise needs a separate analysis because its paths do not have bounded derivatives. Consider

$$
dX_i=f_i(X,t)\,dt+\sigma\,dB_i,
$$

with independent Brownian motions and an exact independent clock. Inputs are nonanticipating, and the driving increments are fresh conditional on the preceding source and controller history. Set

$$
h=0.002.
$$

For each unit interval, the reflection bound gives

$$
\mathbb P\!\left\{
\sup_t|\sigma(B_i(t)-B_i(0))|>h
\right\}
\leq4e^{-h^2/(2\sigma^2)}.
$$

### Writes and restoration tolerate bounded forcing paths

For a scalar nonincreasing drift, a continuous forcing path bounded by $h$ changes the corresponding solution by at most $2h$. To see this, subtract the forcing path from the solution difference and use a first-crossing argument at $\pm h$.

This comparison applies directly to writes. It also applies to restoration after stopping the process inside its well. A noisy write ends within

$$
(2+\rho)e^{-10}+2h
$$

of its target. Held sources move by at most $h$ and remain in their decoder plateaus.

### The rotating SWAP has a separate martingale bound

For an opposite-sign pair, the scaled coordinates $(r/a,q)$ have noise covariance

$$
\sigma^2\operatorname{diag}(9/2,1/2).
$$

Rotation into the deterministic moving frame preserves the largest covariance eigenvalue. Each coordinate martingale has quadratic variation at most $(9/2)\sigma^2$ per unit. The exponential maximal inequality and a union bound give

$$
8e^{-h^2/(9\sigma^2)}
$$

as a bound for either coordinate exceeding $h$ in absolute value.

On the complementary event, the scaled perturbation is at most

$$
\sqrt{10}\rho+\sqrt2h<\sqrt{3/2}-1.
$$

The stopped process therefore stays inside the rotating plateau. Transforming back bounds the endpoint well error by

$$
\rho+\sqrt{20/9}\,h.
$$

Equal-sign pairs remain in the inactive region on the ordinary Brownian good event, with endpoint error at most $\rho+h$.

Every active-unit bound is below $0.013$. During restoration, the noiseless path stays in its well. The stopped $2h$ comparison stays strictly inside the $0.1$ neighborhood where the restoring drift is nonincreasing, so there is no stopped exit. The restoration endpoint error is less than

$$
0.013e^{-8.55}+2h<0.004003<\rho.
$$

After each successful boundary, fresh conditional Brownian increments allow the same bound from every point in the new well box.

### Couple the complete finite episode

Union-bound the first failure over active and restoration intervals, all $m$ cells and all $G$ gates. The resulting episode bound is

$$
\delta_G\leq
\min\!\left\{
1,
G\left(
8m e^{-h^2/(2\sigma^2)}
+8e^{-h^2/(9\sigma^2)}
\right)
\right\}.
\tag{B.4}
$$

Preparation failure is an additional charge. On the common good event, the native decoded transcript equals the ideal transcript. Their total variation distance is therefore at most $\delta_G$. For two comparison arms, their success difference can change by at most the sum of their episode error bounds.

This coupling covers the specified powered bit primitives. A stochastic source ingress must have its exact declared law or a separate uniform conditional kernel-error bound. An internal-gate noise estimate does not certify an external sensor. Source errors, acquisition failures and clock failures must be included in the episode bound by the same first-failure argument before applying the inquiry comparison tolerance.

Equation (B.4) is a finite-horizon approximation. The unconditional sign process need not be exactly Markov: distinct voltages inside one well can have different later error probabilities. An exact SPC-2 claim for the stochastic voltage process requires a complete continuous/native closure analysis of that process. The error estimate alone cannot establish an exact finite quotient.

The distinction is useful in practice. A sufficiently small episode error can preserve the measurable inquiry advantage, while the stronger claim of exact native closure remains a separate physical obligation.

## B.4 The inquiry machine's full cost ledger

Use NAND decompositions with the following counts:

| Operation | NAND gates |
|---|---:|
| XOR | 4 |
| Multiplexer | 4 |
| AND | 2 |
| Three-bit majority | 6 |

The circuit stages have these charges:

| Stage | Computation gates |
|---|---:|
| Two initial endorsement copies | 2 |
| Agreement and initialization | 8 |
| Masked third endorsement read | 3 |
| Priority installation | 4 |
| Each flag-update stage | 17 |
| Final prediction | 14 |
| Requests for the $L-1$ later calibrations | $L-1$ |
| Request for the final target | 1 |

The total is

$$
2+8+3+4+17L+14+(L-1)+1=31+18L.
$$

There are $L+2$ inquiry slots of 27 ordinary windows and one final stage of 18 windows:

$$
27(L+2)+18=27L+72.
$$

Only two flags are needed because fewer than $L$ calibrations cannot reach the first useful threshold, and at exactly $L$ only all-positive or all-negative increment histories reach it. An eight-cell scratch allocation is initialized before use in every stage. The paper's circuit tables identify every source and target. These counts do not assert a minimum bank size.

With $m=23$, each identity tour costs

$$
2(m-1)=44.
$$

An initial tour and one ordinary-operation/tour pair per window give

$$
N_{\mathrm{native}}=44+45(27L+72)=1215L+3284.
$$

Each of the $L+1$ raw-triple sites has one joint native ingress boundary but costs three single-write work units. That difference adds $2(L+1)$ work units:

$$
N_{\mathrm{work}}=1215L+3284+2(L+1)=1217L+3286.
$$

An absent calibration writes constant zeros at its allocated site and retains the same cost allowance. Both comparison arms use the same padded resources. A saved inquiry opportunity can therefore be assigned to another task without giving the adaptive arm an uncharged physical implementation.

### Conditional time and energy bounds

Let $\tau_g$ bound an elementary gate window and $E_g$ bound a single-write work unit. Let $\tau_{\mathrm{port}}$ and $E_{\mathrm{port}}$ bound an acquisition interval and its energy charge. Then

$$
T\leq(1215L+3284)\tau_g+(L+3)\tau_{\mathrm{port}},
$$

$$
E\leq(1217L+3286)E_g+(L+3)E_{\mathrm{port}}+E_{\mathrm{aux}}.
$$

The auxiliary term includes charged clock, program, holding and other apparatus overhead. These are conditional resource upper bounds, not thermodynamic equalities.

A fixed 23-cell bank does not imply constant total apparatus storage. A literal unrolled program grows linearly with $L$, and its phase counter grows logarithmically. Every source and coupler state needed for joint ingress and subsequent laws must be modeled. A serial unobserved buffer cannot be left out of that inventory.

The result is an explicit route from an evaluative program to a costed physical episode. The mathematical mechanism, its information restrictions and its native returns can be preserved together. Assessing an actual device then requires checking the complete apparatus against this contract.
