# What remains when the process moves on

Jeremy Rodgers · Independent Researcher

Version 1.4 · 16 October 2026

DOI: https://doi.org/10.5281/zenodo.23408737

Web edition: /consciousness/relational-awareness/module-d

## 4. Retention, reset, recurrence and return {#section-4}

Persistence of accessible information, numerical continuity of an organism and occurrence of a current presentation are different claims. The models here isolate the first without assuming the others. Return arguments in the programme (Rodgers, 2026h,i) are used as source-adequacy tests, not as normalizations that determine otherwise unspecified phenomenal assignments. Records can survive, decay, return or be copied. Each mechanism gives a precise account of what remains accessible, and each leaves a distinct question about what currently appears.

### 4.1 Reversible records and finite recurrence {#section-4-1}

Classical XOR writing $(a,b,m)\mapsto(a,b,m\oplus a\oplus b)$ is a bijection. Applied twice it uncomputes the meter; endpoint identity does not mean absence of intervening dependence. A copy $(x,r)\mapsto(x,r\oplus x)$ with blank $r$ retains a basis value. A feedback latch and a copied archive may then have different later values; resetting scratch while keeping the archive has moved information, not destroyed it. A majority readout can be revised by a later input without revising the original archived token.

For any finite horizon $K$, an autonomous finite clock can perform integration and archival copy in its first three steps, apply identity padding through time $K$, and later uncompute on a finite cycle. Embed the program in the permutation $(c,x)\mapsto(c+1\bmod N,V_cx)$ with each $V_c$ bijective and a sufficiently long padded cycle. Its output can remain exact for $3\le t\le K$ without being absorbing. Program, blank preparation and clock are part of the apparatus, not free external resources.

#### Proposition 4.1: Finite recurrence rules out a strict permanent merger {#proposition-4-1}

Let $F$ be a permutation of a finite state space, and $\Pi(s)$ a state-local partition of a fixed labelled carrier set. If no class ever splits under one step, there is no strict permanent merger on an orbit.

**Proof.** The number of blocks cannot increase along the orbit. Finite recurrence returns to the original state and its original partition, so no strict decrease is possible. The orbit join $\bigvee_r\Pi(F^rs)$ is an invariant least common coarsening, but taking that join is an additional partition construction. $\square$

Open dynamics, changed carrier labels or time-dependent laws do not meet this premise. The proposition is not an objection to a new third relational presentation or to persistence of a person through changing presentations.

For a quantum clock $j=0,\ldots,n$, with controlled data steps $V_j$, take

$$
H=\hbar g\sum_{j=0}^{n-1}\sqrt{(j+1)(n-j)}
\left(|j+1\rangle\langle j|\otimes V_j+|j\rangle\langle j+1|\otimes V_j^*\right).
$$

A clock-conditioned unitary gauge removes the $V_j$, leaving the spin-$n/2$ matrix $2\hbar gJ_x$. Transfer from $0$ to $n$ occurs at $T=\pi/(2g)$; at time $t$ the clock probabilities are binomial with parameter $\sin^2(gt)$. This follows by representing spin $n/2$ as the symmetric subspace of $n$ spin-$1/2$ factors. Padding yields a finite high-success interval. The norm is $n\hbar g$; bounded individual hopping scales require $g=O(1/n)$ and $T=\Omega(n)$. Adjacency of clock indices is not spatial locality of data couplings. This is a standard Hamiltonian-computation/perfect-transfer construction, not a permanent memory mechanism.

The limitation follows more generally from finite-dimensional unitarity. A finite subspace $\mathcal T$ invariant under a fixed unitary $V$ is reducing: finite dimension implies $V\mathcal T=\mathcal T$, hence $\mathcal T^\perp$ is invariant too. No state from its complement enters it. The same holds for self-adjoint continuous-time evolution. Approximate storage, open environments and timed decoupling require different contracts.

Parity premeasurement illustrates the same distinction. For $P_A=(I-Z_A)/2$, $P_B=(I-Z_B)/2$, the Hamiltonian $\hbar g(P_A+P_B)\otimes(I-X_M)$ at $\pi/(2g)$ writes classical parity into a blank meter. A source $|++\rangle$ becomes $(|E\rangle|0\rangle+|O\rangle|1\rangle)/\sqrt2$, where $|E\rangle,|O\rangle$ are even/odd Bell combinations. The local meter is maximally mixed; tracing it out removes inter-parity coherence, not selects an outcome. More generally conditional product environments leave overlap $\Gamma=\prod_i\langle e_1^{(i)}|e_0^{(i)}\rangle$. For branch amplitudes $\alpha_0,\alpha_1$, the trace distance from branch dephasing is $|\alpha_0\alpha_1\Gamma|$, by the eigenvalues of the off-diagonal $2\times2$ matrix. The product premise is essential; small global overlap does not make every environment fragment a readable record.

### 4.2 Exact integration-retention access {#section-4-2}

Consider a parity target written at exponential integration rate $\gamma$. Pre-write target contrast decays at rate $\lambda$ and post-write record contrast at rate $\mu$. Conditional on the first write time, the channels compose independently as specified. The retained contrast at read time $t$ is

$$
\begin{aligned}
r(t;\gamma,\lambda,\mu)
&=\int_0^t\gamma e^{-(\gamma+\lambda)s}e^{-\mu(t-s)}\,ds\\
&=\frac{\gamma(e^{-\mu t}-e^{-(\gamma+\lambda)t})}{\gamma+\lambda-\mu}.
\end{aligned}\tag{19}
$$

At equal denominator rates it is $\gamma t e^{-\mu t}$. Best binary accuracy is $(1+r)/2$. If two independent source bits are represented only by parity, best four-input identification success is $(1+r)/4$; one within-parity bit remains absent.

For $a=\gamma+\lambda$ and $\mu>0$, differentiation gives the unique peak

$$
t_* = \frac{\log(a/\mu)}{a-\mu},\qquad
r_* = \frac\gamma a e^{-\mu t_*},\tag{20}
$$

with $t_*=1/a$ when $a=\mu$. The acceptable set for threshold $\theta\in(0,1)$ is empty, one time, or a bounded interval according as $r_*<\theta$, $r_*=\theta$, or $r_*>\theta$. With $\mu=0$, $r(t)=\gamma(1-e^{-at})/a$: the limiting value is not attained at finite time. A deadline restricts the maximum to $\min(T,t_*)$ when $\mu>0$.

With $\mu>0$, optimized $r_*$ increases strictly with $\gamma$ when $\lambda,\mu$ are fixed. Set $v=\mu/a$; the factor $e^{-\mu t_*}=v^{v/(1-v)}$ decreases with $v$ because

$$
\partial_v\log[v^{v/(1-v)}]=\frac{\log v+1-v}{(1-v)^2}<0,
$$

with continuous limit $-1/2$ at $1$. Meanwhile $\gamma/a$ is nondecreasing. Limits as $\gamma\downarrow0$ and $\gamma\to\infty$ give $0$ and $1$, so every strictly intermediate optimized threshold has a unique critical $\gamma$. This optimized monotonicity need not hold at a chosen late time: faster writing can expose the record to decay longer.

#### Theorem 4.2: A robust saddle {#theorem-4-2}

Let rate uncertainty be a rectangular box with $\gamma_L>0$, nonnegative loss rates and $\mu_+>0$. Put $p_R=(\gamma_L,\lambda_+,\mu_+)$ and let $t_R$ be its peak. Then

$$
\max_{t\ge0}\min_{p\in\mathcal B}r(t;p)
=\min_{p\in\mathcal B}\sup_{t\ge0}r(t;p)
=r(t_R;p_R).
$$

**Proof.** The integral decreases with each loss rate. Fix their upper values and write $f(s)=e^{-\lambda s-\mu(t-s)}$. Integration by parts gives

$$
r=f(0)-e^{-\gamma t}f(t)+\int_0^te^{-\gamma s}f'(s)\,ds.
$$

If $\lambda\ge\mu$, then $f'\le0$ and differentiation shows $r$ increases with $\gamma$. If $\lambda<\mu$, then

$$
e^{\gamma t}\partial_\gamma r
=tf(t)-\int_0^t se^{\gamma(t-s)}f'(s)\,ds
$$

is strictly decreasing in $\gamma$, so $r$ has no interior minimum. Its limit as $\gamma\to\infty$ is $e^{-\mu t}$. Therefore for all $\gamma\ge\gamma_L$,

$$
r(t;\gamma,\lambda,\mu)\ge\min\{r(t;\gamma_L,\lambda,\mu),e^{-\mu t}\}.
$$

At $t_R$, formula (20) gives $r(t_R;p_R)=\gamma_L(\gamma_L+\lambda_+)^{-1}e^{-\mu_+t_R}$, no larger than that limiting value. Every model in the box thus gives at least the claimed score at $t_R$. Conversely $p_R$ belongs to the box, so no robust time can exceed its peak. The same inequalities give the minimax equality. $\square$

At any fixed time the exact box minimum is the lesser of its two integration endpoint values, at upper loss endpoints; acceptable windows intersect those two windows. With a deadline choose $\min(T,t_R)$: before $t_R$ the lower-rate score is still at most $e^{-\mu_+t}$, so the proof continues to apply. A correlated uncertainty set inside the box inherits its guarantee, not necessarily its exact optimum. For $\gamma\in[1.8,2.2]$, $\lambda\in[.35,.45]$, $\mu\in[.15,.25]$,

$$
t_R=\log3,\qquad r_R=\frac45\,3^{-1/4},\qquad
\frac{1+r_R}{2}\approx .80393427.
$$

The model units and threshold are stipulated, not human timescales.

An error certificate at arbitrary fixed $t$ is

$$
|r(t)-\widehat r(t)|\le t[\delta_\gamma+\max(\delta_\lambda,\delta_\mu)].
$$

The $\gamma$ derivative integrates $e^{-\gamma s}(1-\gamma s)e^{-\lambda s-\mu(t-s)}$, of absolute integral at most $t$. Changing loss rates along a line changes the exponent by at most $t\max(\delta_\lambda,\delta_\mu)$, while the remaining integral is at most $1$. Triangle inequality proves the result. It certifies a nominated task only if rate/error bounds and channel assumptions have independent warrant.

### 4.3 Marginals, fixed-time erasure and reset flags {#section-4-3}

Independent rate-$\nu$ flips on two bits and a common rate-$\nu$ flip have the same individual contrasts $e^{-2\nu t}$. Their parity contrasts are respectively $e^{-4\nu t}$ and $1$: independent error signs multiply, common signs cancel. Marginal memory cannot identify joint relational memory. More generally a first-write density $w(s)$ with pre/post contrasts $c(s),u(t-s)$ gives

$$
r(t)=\int_0^t w(s)c(s)u(t-s)\,ds
$$

only under the declared channel composition. Signed contrasts, visible timestamps, correlated stages or extra archives change optimal decoding.

For a finite-state CTMC generator $G$ with maximum exit rate $k$, full-state distinguishability obeys

$$
e^{-2kt}d(0)\le d(t)=\operatorname{TV}(\rho_0e^{tG},\rho_1e^{tG})\le d(0).\tag{21}
$$

Contraction gives the upper bound. The inverse matrix $e^{-tG}$ has row-vector $\ell^1$ operator norm at most $e^{t\|G\|}=e^{2kt}$; apply it to the output difference to get the lower bound. The inverse need not be a realizable stochastic dynamics. A symmetric binary chain attains the lower bound. This concerns fixed finite time and the nominated full state, not all environmental traces or individual path reset events.

A rate-$\nu$ event that replaces a bit by a fresh fair bit erases its initial value exactly at the marked reset stopping time. If the mark is hidden, the visible bit path has the same generator as an ordinary rate-$\nu/2$ flip chain: half of resets leave the bit unchanged. Thus projected trajectories do not identify resets. A copied record can protect the earlier value if locked before reset; a later overwrite with the current reset value need not. The first and last copying conventions supply different lifetimes, and every retained archive belongs in the complete source.

For a quantitative common-mixing limit, if every conditional accessible law $\mathcal L(Y\mid Z=z)$ is within $\delta$ of one law $\pi$, a uniform $m$-label decoder from $Y$ has success at most $1/m+\delta$. Couple the joint law within TV $\delta$ to $Z\perp Y$ and use the same decision event. For a nonuniform input prior the same proof gives $\max_z\Pr(Z=z)+\delta$, capped at one. The bound also follows when $Y$ is generated from a preceding state by one kernel uniformly within $\delta$ of $\pi$, regardless of correlations between that state and $Z$. All accessible registers belong in $Y$; fresh randomness must be independent of $(Z,Y)$. Independence only from $Z$ is insufficient: a seed correlated as $Z\oplus Y$ can restore the missing label.

### 4.4 Pair reliability and calibrated field proposals {#section-4-4}

Three pair reliabilities can be $r,r,r^2$ under independent channel composition, violating equal-strength transitivity. For a finite symmetric similarity $s$, its max-min path closure

$$
s^*(i,j)=\max_{\text{paths }i\leadsto j}\min_{e\text{ on path}}s(e)
$$

is the least transitive fuzzy majorant. Every transitive majorant bounds each path minimum by its endpoints, proving minimality. Maxima and minima are $1$-Lipschitz in sup norm. At a fixed threshold, independent interval boxes preserve the partition iff lower and upper endpoint connectivity partitions coincide: monotonicity suffices; the endpoints themselves prove necessity. Correlated uncertainty is not automatically a full box.

A separate candidate potential illustrates why mechanical integration and a phenomenal assignment must be distinguished. For two scalar fields use

$$
V=W+\frac r2(a^2+b^2)+\frac u4(a^4+b^4)-\kappa ab,\qquad u>0.
$$

For $r\ge0$, $\kappa\ge0$, replace $a,b$ by their magnitudes to reduce $V$. At fixed $a^2+b^2$, the symmetric aligned choice minimizes the quartic term and maximizes $ab$. Therefore $a=b=0$ when $\kappa\le r$, and $a=b=\pm\sqrt{(\kappa-r)/u}$ when $\kappa>r$, with $V_{\mathrm{eff}}=W-(\kappa-r)_+^2/(2u)$. If $r,\kappa$ depend on a material coordinate, differentiating this effective potential yields its force and Hessian correction; it is actual backreaction in this proposed model. For $W=Kx^2/2$, $\kappa=r+gx$, coercivity requires $Ku>g^2$. Finite-temperature noise removes an exact deterministic mean/variance boundary. For already ordered cores $r=-a_0<0$, any $\kappa>0$ makes aligned minima global; anti-aligned stationary points $a=-b$ have squared magnitude $(a_0-\kappa)/u$ and are stable only for $\kappa<a_0/2$. These follow from the two Hessian eigenvalues. The potential is a candidate mechanics, not an earned physical-to-appearance law.

Another proposed law assigns an output kernel to each actual physical history and extends tokenwise mixtures affinely. Then mixture TV cannot increase. Shared physical support cannot carry two different certain kernel values: at an atom of positive mass under both preparations, certainty would require one conditional law to assign probability one to two distinct values. An idle/link mixture of weight $\eta$ changes any kernel event by at most $\eta$; over $N$ shared-history updates the coupling bound is $1-(1-\eta)^N$. It is sharp against the constant idle path when the first nonidle update leaves its initial state. Changing an installed coupling parameter or omitted history is not mixing the same actual histories, so that phenomenal locality proposal cannot be used there without a new premise.

If an independently proposed continuous survival semigroup satisfies $S(0)=1$, $S(u+v)=S(u)S(v)$, and is nonincreasing, then $S(u)=e^{-cu}$, $c\ge0$, by the continuous additive equation for $-\log S$. It does not make the occurrence tokens a Poisson process. A stable assay with false-positive rate $f$ and sensitivity $s>f$ gives $r(u)=s-(s-f)e^{-cu}$. At doses $0,x,2x$, let $d_1=r(x)-r(0)$, $d_2=r(2x)-r(0)$. When nondegenerate,

$$
z=d_2/d_1-1\in(0,1),\qquad c=-\log z/x,\qquad s=f+d_1/(1-z).
$$

A solution also requires $f\in[0,1]$ and $f<s\le1$; decreasing increments alone do not establish probability-compatible parameters. A fourth dose tests geometric successive increments. Flat or instantaneous limits do not identify finite positive $c$. The assay's common target, calibration and exposure interpretation remain independent assumptions. The initial survival condition concerns a newly nominated relation, not a blank mind or absence of all awareness. A target already present at baseline does not satisfy it. Near-zero increments make the inverse ill-conditioned; sampling, dose error and drift of $f,s$ need separate bounds before estimating a physical or psychophysical rate.

### 4.5 Alternating dwell constraints {#section-4-5}

For a stationary alternating renewal model with finite positive dwell means $d_P,d_I$, a regenerative cycle has one of each dwell and two switches. The renewal reward law gives

$$
\pi_I=\frac{d_I}{d_P+d_I},\qquad \nu=\frac2{d_P+d_I}.
$$

A common time compression scales both means, leaving occupancy unchanged. Selective compression of $d_I$ with $d_P$ fixed instead preserves $\nu/(1-\pi_I)=2/d_P$. These joint statistics distinguish two specified dwell/access mechanisms. Multiplying a hazard by $r$ gives survival $S(t)^r$, not generally $S(rt)$ or mean $d/r$: a Weibull law of shape $k$ gives mean scaling $r^{-1/k}$. Exponential dwell is a special case. Averaging individual $\nu_i,\pi_i$ preserves the ratio only with the further common $d_P$ condition; heterogeneous aggregation, timing error and selective reports require separate control. Occupancy estimates are not early-occurrence detectors.

### 4.6 Return, padding and retained dependence {#section-4-6}

If a physical Markov process has unique invariant law $\nu$, extending it by a fixed passive mark with no mark transitions gives invariant laws $\nu\otimes\pi$ for arbitrary mark law $\pi$. With finite marks, every invariant law has this form: each mark-conditional physical law is invariant. Physical uniqueness alone does not fix marked occurrence weights.

For a group $G$ of endpoint controls acting on source states and accepted content types, an equivariant anchored map $m(s_0)=c_0$ exists exactly when

$$
\operatorname{Stab}_G(s_0)\subseteq\operatorname{Stab}_G(c_0).\tag{22}
$$

Necessity is immediate from source returns. For sufficiency set $m(gs_0)=gc_0$: equality $gs_0=hs_0$ implies $h^{-1}g$ fixes both anchors, so the definition is well defined. It is unique on the orbit. Content control actions and their compositions need independent phenomenal warrant; a response table or isolated generator order does not supply it. An $S_3$ pairing action with noncommuting adjacent swaps cannot be replaced by a transitive six-state cyclic action that matches orders $3$ and $2$ but makes their commutator identity. Cardinality and isolated-generator calibration are insufficient.

A protected $m$-bit path tour swaps a token out and back in $2(m-1)$ swaps. An initial tour and one after each of $N$ ordinary single-target gates cost $2(m-1)+N(2m-1)$ native steps. Intermediate destination records can distinguish the entire initial bank even when the executive cannot read them. Adding $k$ funded otherwise unused tour bits gives $2^{m+k}$ native predictive points without changing the ordinary executive transcript. Complete predictive-point attribution and complete phenomenal inertness of those active auxiliary values cannot both hold. The inertness premise is not established by unused ordinary readout; the family has genuine clock and resource changes.

Faithful provenance requires the same target episode. If history fidelity, record fidelity and an independently accepted current anchor have failure budgets $e_H,e_R,e_A$, their joint warranted event has probability at least $1-e_H-e_R-e_A$. This union bound does not turn a faithful archive into an earlier occurrence anchor. The copula density $1+\theta\cos2\pi(u-v)$ on the torus, $|\theta|\le1$, has uniform margins, yet

$$
\Pr\{\cos2\pi(u-v)>0\}=1/2+\theta/\pi
$$

and TV between parameters is $|\theta-\theta'|/\pi$. Resetting margins need not reset joint dependence. For a common readiness reader with conditional error function in $[0,1]$, context-law change by TV $\rho$ adds at most $\rho$ to calibration error. Thus calibration error $e_{\mathrm{cal}}$ and a further task mismatch $e_{\mathrm{task}}$ give total bound $e_{\mathrm{cal}}+\rho+e_{\mathrm{task}}$. With the same target/complete-source kernel and an accepted event anchor $\ell$, transport yields the lower bound $\max\{0,\ell-e_{\mathrm{cal}}-\rho-e_{\mathrm{task}}\}$. Omitted readiness/context variables cannot be declared irrelevant by this arithmetic.

### 4.7 Sealing and preparation equivalence {#section-4-7}

The following inherited preparation/readout results are proved directly. No publication status is assumed for the supplied source manuscript. For one physical representation and common reader law $r$, two target laws $p_1,p_2$ require $\max_i\operatorname{TV}(r,p_i)\ge\operatorname{TV}(p_1,p_2)/2$. The midpoint attains the bound in an unrestricted reader class. Anchor errors reduce the certified gap by their sum. An operational quotient sufficient for allowed tests is only a surrogate for those tests; it need not be a finite-state autonomous physical source. A level-$a$ test's power changes by at most TV.

For a deterministic forward map $F$, output test $t$ pulls back to $t\circ F$; thus accessible discrimination depends on the actual pullback test class. A bijection with all tests preserves full TV, but restricted tests can lose it. On a finite state permutation, an inverse is a positive power; on an infinite forward shift the forward-only semigroup has no such return. Formal inverse notation is not an available physical operation.

Let $h(\psi)\in[0,1]$ be a continuous pure-state target in dimension $d$. If every finite ensemble of a density matrix has the same average target, that average defines an affine functional $r(\rho)$. Hence $r(\rho)=\operatorname{tr}(E\rho)$ with $0\le E\le I$. Conversely an effect has ensemble-independent averages. For outcome events, normalization and additivity give a POVM. Requiring all pure preparations and ensembles is stronger than fitting one preparation list.

Define $\Gamma(h)$ as the maximum absolute difference between $h$ averages of two ensembles with the same density matrix. Then

$$
\inf_{A=A^*}\sup_\psi|h(\psi)-\langle\psi|A|\psi\rangle|=\Gamma(h)/2.\tag{23}
$$

One direction averages an approximation over two equal-density ensembles. For the other, finite uniform approximation LP duality produces a signed measure annihilating Hermitian quadratic forms with total variation norm one. It annihilates the identity, so its positive and negative masses are $1/2$; their normalized barycenters coincide and their objective is at most $\Gamma/2$. Compactness and continuity pass the finite-frame result to all pure states. A finite maximizing frame can be chosen: combine its two ensembles, then a basic feasible maximizer has at most $d^2+1$ total nonzero occurrences, since normalization on each side and $d^2-1$ trace-free equality constraints have that rank. Compact convex hull representations supply an initial finite frame; the LP preserves optimality.

If $d_{\mathrm{eff}}$ restricts $A$ to effects, then $\Gamma/2\le d_{\mathrm{eff}}\le\Gamma$. For the upper bound, a best Hermitian approximation of error $\Gamma/2$ has spectrum in $[-\Gamma/2,1+\Gamma/2]$. Spectrally clipping it to $[0,1]$ adds at most that error. A uniform physical reader of pure-target error $\epsilon$ necessarily has $\Gamma\le2\epsilon$. Product and Bell decompositions of $I_4/4$ have squared concurrence respectively $0$ and $1$, so such a target needs $\epsilon\ge1/2$ under a density-only reader.

Finally two finite output laws of TV $\delta$ have affinity $B=\sum_x\sqrt{p_xq_x}\le\sqrt{1-\delta^2}$. Independent product probes satisfy $\operatorname{TV}(p^{\otimes n},q^{\otimes n})\ge1-B^n$, because $\min(p,q)\le\sqrt{pq}$ atomwise. Thus

$$
\operatorname{TV}(p^{\otimes n},q^{\otimes n})\ge1-(1-\delta^2)^{n/2}.
$$

This requires actual independent preparation/reset and permitted repeated access. It does not follow merely from a possible mathematical tensor product.
