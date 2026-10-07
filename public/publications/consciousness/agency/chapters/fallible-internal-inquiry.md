# When inquiry is fallible

**More inquiry can reduce the probability of a wrong amendment without making error impossible.** A bounded audit needs to distinguish these claims. It also needs to distinguish choosing an unendorsed rule from losing the capacity to audit again.

Deadline-sensitive inference and risk-constrained partially observed planning supply established tools for this problem [7](/consciousness/agency/references#ref-7), [23](/consciousness/agency/references#ref-23). Here the loss is disagreement with an internally retained endorsement under a declared metarule. The benchmark makes that loss exact.

## 5.1 Why finite noisy inquiry cannot guarantee certainty

### Proposition 5.1: the finite full-support obstruction

Assume finite response alphabets and a finite set of initially compatible contexts. Every admitted query response has common positive conditional support across those contexts. Query choice, timing and availability depend only on observable history, and all context information reaches installation through that history. Every audit terminates within a finite worst-case operation bound.

A definite zero-error endorsed amendment into $X$ then requires

$$
\bigcap_{z\in Z_p}\bigl[N(p,z)\cap X\bigr]\ne\varnothing.
\tag{5.1}
$$

A common member that can be installed with zero error within budget is sufficient. Finite inquiry cannot repair an empty intersection.

**Proof.** Every reachable terminal transcript has positive probability under every initially compatible context. Along that transcript, the policy chooses the same queries and each response retains positive conditional probability. The installed amendment must consequently be valid in all the original contexts. For randomized policies, apply the same reasoning to their common randomization kernel and terminal amendment support. Direct installation of a common member proves sufficiency. $\square$

The assumption concerns positive probability, not merely topological support. For more general response spaces, mutual absolute continuity of the conditional response laws along common histories is a corresponding sufficient hypothesis. If installation itself is noisy, its output support must also meet Lemma 4.1's zero-error condition.

The result does not say noisy inquiry is useless. Context probabilities can change dramatically while every context remains possible. To measure that change, we need a risk frontier.

## 5.2 A noisy charter audit

Restrict the charter to

$$
a=b=z\in\{0,1\},\qquad s=1,
$$

with a fixed retained case and read-order convention. The endorsed programs are $p_0$ (AND) and $p_1$ (OR), each preserving the same audit interface. The only admitted access to the retained bit is

$$
Y_i=z\oplus N_i,\qquad
N_i\overset{\mathrm{iid}}{\sim}\operatorname{Bernoulli}(\nu),
\qquad0<\nu<\frac12.
\tag{5.2}
$$

The independence law is conditional on the retained state and relevant past. There is no noiseless replica, initial advice, confidence flag or uncharged side channel.

### Theorem 5.2: the exact bounded noisy-revision frontier

Allow at most $n\geq1$ reads, adaptive stopping and declared randomization. Require definite installation of $p_0$ or $p_1$ before the deadline. The minimum worst-case endorsement error is

$$
\begin{aligned}
R_n(\nu)={}&\sum_{k>n/2}\binom nk\nu^k(1-\nu)^{n-k}\\
&+\frac12\mathbf1\{n\text{ even}\}\binom n{n/2}
[\nu(1-\nu)]^{n/2}.
\end{aligned}
\tag{5.3}
$$

A deterministic majority of the largest odd number of reads at most $n$ attains the bound. Loss of the specified future audit capacity has probability zero.

**Proof.** Give the two retained states equal prior probability. After $n$ reads, with $k$ observed ones, the likelihood ratio is

$$
\left(\frac{1-\nu}{\nu}\right)^{2k-n}.
$$

The minimum average error is majority's binomial error, with half the tie mass, yielding (5.3). A policy supplied all $n$ reads can simulate every earlier-stopping policy by ignoring an unused suffix. The Bayes error is therefore a lower bound on every admitted policy's worst-case error.

For odd $n$, majority has exactly that error in both retained states. Binomial expansion gives $R_{2k}=R_{2k-1}$, so an even cap is attained by majority on the preceding odd number of reads, without needing a random tie-break. Both possible installations preserve the audit interface by construction. $\square$

The result separates an error in the installed rule from a loss of reflective capacity. A fallible amendment can leave the next audit fully available. Neither score should stand in for the other.

## The cost of a warranted tolerance

The attaining policy uses a signed balance and a read counter:

$$
S\leftarrow S+2Y_i-1.
$$

The balance needs $\lceil\log_2(2n+1)\rceil$ bits and the counter needs $\lceil\log_2(n+1)\rceil$ bits, beyond latches, program and phase storage.

Let $c_{\mathrm{read}}$ charge a complete read-and-update step. Let $c_0$ charge initialization, comparison, installation and rearming. The tolerance cost is

$$
B_\epsilon=c_0+c_{\mathrm{read}}
\min\{n\geq1:R_n(\nu)\leq\epsilon\}.
\tag{5.4}
$$

These are macro-operation costs, not elementary gate counts. For $\nu=1/4$, the exact frontier gives:

| Endorsement-error tolerance | Required reads |
| --- | --- |
| $10^{-1}$ | $7$ |
| $10^{-2}$ | $19$ |
| $10^{-3}$ | $33$ |
| $10^{-4}$ | $49$ |

With no reads, a deterministic forced decision has worst-case error one. Error one half at zero reads requires an explicitly available fair random source. Randomization is an operation with a stated realization, not an implicit gift to the controller.

## What the intervention test measures

For matched preparations $z=0,1$, a fresh mixed-case probe has intact contrast

$$
1-2R_n.
$$

A common read clamp and a common commit clamp each reduce the contrast to zero. At $\nu=1/4$ and $n=3$:

$$
R_3=\frac5{32},\qquad
\text{intact contrast}=\frac{11}{16},\qquad
\text{capacity-loss probability}=0.
$$

The three numbers answer different questions: how often the amendment disagrees with retained endorsement, how strongly the retained commitment changes the later disposition, and whether another audit remains possible.

## Repeated audits and their joint risk

For $L$ fresh-context audits with the same read cap and the stated independent conditional read law, the exact minimax probability of at least one unendorsed installation is

$$
1-(1-R_n)^L.
\tag{5.5}
$$

Majority attains it by multiplying conditional success probabilities. For the converse, independently uniform fresh retained bits give every policy conditional success at most $1-R_n$ at each audit. The probability of succeeding throughout is therefore at most $(1-R_n)^L$.

A persistent hidden commitment would define a different model. Earlier inquiries could remain informative, so one could not reset the uncertainty at every audit. The general risk-vector treatment in Appendix A retains the information needed to compose the appropriate experiment.

## Two ways to misread an improvement

**Deferral changes the task.** If the controller may defer, report both deferral probability and error conditional on completion. A policy that never finishes makes no erroneous installation, but has not solved definite revision before a deadline.

**Repeated errors may be correlated.** If every read shares one noise bit,

$$
Y_i=z\oplus N,
$$

each marginal read still has error $\nu$, yet the entire transcript contains only one observation. The minimax error stays $\nu$. Repetition improves the frontier under conditional independence, not under marginal accuracy alone.

Bounded inquiry gives reflection a measurable limit. A controller can be genuinely responsive to its commitments, can preserve its capacity to reconsider, and can still lack the information needed to guarantee that the present amendment is endorsed. That combination is a feature of finite evaluation, not a contradiction in it.
