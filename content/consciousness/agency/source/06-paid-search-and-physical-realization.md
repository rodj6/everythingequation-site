---
title: "The work behind an available option"
description: "A compact result can require substantial inquiry and computation. Search guarantees and physical transfer make that cost explicit."
slug: "paid-search-and-physical-realization"
order: 6
---

An option is available to a bounded agent when its installed organization can identify and execute it in time. The existence of a mathematical answer is only the beginning. Finding the control instruction, routing its data, clearing temporary work and maintaining a physical record all have costs.

The supplementary compact-interface programme gives this distinction an unusually sharp form: an encoder can change at most one input bit at its endpoint while the computation selecting that bit remains a substantial problem. The same lesson applies to reflective inquiry. A simple final amendment need not be cheap to justify or implement.

## One changed bit can hide a difficult decision

Write an invertible binary matrix as $B=[b\mid H]$, where $H$ has $d-1$ columns and full column rank. Its unique nonzero left normal is $n(H)$, satisfying

$$
n(H)^TH=0,
\qquad
[b\mid H]\in\operatorname{GL}(d,2)\iff n(H)\cdot b=1.
$$

Fix $n\ne0$ and let $q=n\cdot b$. If $n_0=1$, define

$$
y_0=1+q,\qquad y_j=b_j\quad(j>0).
$$

If $n_0=0$, let $p>0$ be its first supported coordinate and set

$$
y_0=1+q,\qquad y_p=b_p+b_0+q,
\qquad y_j=b_j\quad(j\notin\{0,p\}).
$$

Keep $H$ unchanged and call this map $P(B)$.

**Theorem: direct half-cube encoding.** With a deterministic nonzero normal convention on deficient $H$ as well, $P$ is a permutation of the entire matrix cube. It sends every invertible matrix into the half-cube whose $(0,0)$ entry is zero, and changes at most one raw bit on every input. Omitting the zero coordinate leaves $d^2-1$ code bits.

**Proof.** For each fixed $H$, the normal is fixed. If $n_0=1$, the coefficient of $b_0$ in $y_0$ is one, making the first expression a bijection changing only that coordinate. If $n_0=0$, $q$ is independent of $b_0$ and has coefficient one on $b_p$. The two effective coordinates transform as

$$
(b_0,q)\longmapsto(1+q,b_0).
$$

This is bijective. When $b_0=q$, only coordinate zero changes; otherwise only coordinate $p$ changes. On the valid half $q=1$, the distinguished output is zero. The inverse for $n_0=0$ is recovered by $b_0=n\cdot y$, $q=1+y_0$ and $b_p=y_p+b_0+q$. The other case solves its affine first-coordinate equation. Thus every fibre is permuted and the whole map is reversible.

A total normal can be defined by binary elimination on a copy of $H$, applying the same invertible row operations to $I_d$. At each column choose the first remaining nonzero pivot, or its scheduled diagonal row when none exists, then clear below it. The last row of the transformed $H$ is zero, while the corresponding row of the transformed identity is nonzero. It supplies the normal even on deficient inputs.

Both $P$ and its inverse move every point by at most one. Therefore distinct inputs obey

$$
d_H(Px,Px')\le d_H(x,x')+2\le3d_H(x,x').
$$

Stored codewords differing in $t$ bits decode to matrices differing in at most $t+2$ entries; their actions on one coefficient word differ in at most $t+2$ output positions. These are endpoint fault-propagation bounds, not error correction or protection against faults during the calculation.

The number of possible rewrite locations still matters. If an encoder leaves every raw position outside a fixed set $R$ unchanged and removes one degree of freedom inside $R$, then $|R|\ge d$. To see this, any fewer than $d$ selected matrix entries can be left free while fixing the others so every filling is invertible. Choose a row with no selected entry, give it a unique one in a column containing a selected entry, delete that row and column and recurse. Determinant expansion proves the construction. If $|R|<d$, the resulting $2^{|R|}$ valid fillings would have to fit into $2^{|R|-1}$ output patterns, contradicting injectivity.

One input-dependent change and $d$ possible change locations are compatible. Neither fact says that the location is easy to determine.

## A supported coordinate supplies a control instruction

Let $A(d)$ be the minimum Toffoli cost of a deterministic clean selector returning a one-hot $e_j$ with $n_j(H)=1$ for every full-column-rank $H$. The selector preserves its input and restores additional helpers. It may choose any supported coordinate, without having to recover the entire normal or its first support position.

Given a selected $j$ and a first column $b$, form

$$
G(H,b,j)=\begin{pmatrix}H&0&b\\0&H&b+e_j\end{pmatrix}.
$$

If $m=n\cdot b$, its unique nonzero normal is

$$
n(G)=((1+m)n,mn).
$$

**Proof.** The first $2d-2$ columns span $\operatorname{im}H\oplus\operatorname{im}H$. The last column's two membership parities differ by $n_j=1$, so it lies outside that span. A normal has form $(\alpha n,\gamma n)$ and must satisfy $\alpha m+\gamma(m+1)=0$. Its nonzero solution is $(\alpha,\gamma)=(1+m,m)$. The normal's weight is unchanged.

Every supported coordinate of this larger matrix lies in the first block when $m=0$ and in the second when $m=1$. A support selector therefore also computes membership, after paying for the lifted matrix and cleanup. Compute the small selector, prepare the lift by affine copies, compute the larger selector, copy its block parity and reverse both evaluations. If $K_M$ is the clean membership-evaluator cost,

$$
K_M(d)\le2A(d)+2A(2d).
$$

Using that membership bit to route the selected first-column coordinate into the omitted slot gives a clean fibre encoder with

$$
C_{\rm enc}(d)\le2A(d)+4A(2d)+2d-1.
$$

The extra terms pay for controlled swaps and cleanup. The reduction needs an always-correct selector on every promised lifted input. A routine that can abstain is not interchangeable with it.

If the normal has weight one or two, the problem has a near-quadratic solution. Weight one means a zero row; weight two means two equal rows. A fixed sorting network on rows with original indices finds either witness in $O(d^2\log^2d)$ gates. Compute, copy the selected answer and uncompute. A unique three-row dependence instead asks for a distinct triple with zero XOR. Pairwise distinctness alone no longer identifies it.

## Identification, action and positive verification have different costs

Suppose an initial observation leaves a finite family $\mathcal F$ of nonempty possible supports. The only extra oracle answers whether a proposed support equals the actual one. Put

$$
M=|\mathcal F|,
\qquad
\Delta=\max_i|\{T\in\mathcal F:i\in T\}|.
$$

**Theorem: exact candidate-equality query costs.** The deterministic worst-case counts are

| Required result | Queries |
| --- | --- |
| Return any supported coordinate | $M-\Delta$ |
| Identify the whole support | $M-1$ |
| Obtain an actual positive oracle response | $M$ |

**Proof.** On an all-negative branch, each useful query excludes at most one possible support. Before $M-\Delta$ exclusions, more than $\Delta$ remain, so they cannot share a coordinate; no coordinate is safe to return. Conversely, choose a coordinate contained in $\Delta$ supports and query every support avoiding it. A positive answer provides a coordinate. If every answer is negative, the chosen coordinate must be supported. This uses $M-\Delta$ queries. Identification needs all but one possibility excluded and may infer the last; positive confirmation requires checking that final possibility too.

For all triples on $n$ unread indices, $M=\binom n3$, $\Delta=\binom{n-1}2$, and supported-coordinate selection needs $\binom{n-1}3$ equality queries. With four unread indices, one query of the triple avoiding a fixed index suffices: a positive response gives an answer; a negative response certifies the fixed index. Demanding positive verification would charge four.

These counts apply to the stated equality oracle. Reading a full nonzero residual or constructing a new observation from the raw matrix gives another information interface. A lower bound must name which interface and which output it concerns.

## A sound certificate is not a completed search

For a full-rank $d\times(d-1)$ matrix with a unique weight-three normal, let raw rows be $r_i$ and short hashes $h_i=\Lambda r_i$. The true triple always has hash XOR zero. False triples may do so too. Checking a candidate against its three full rows makes a successful answer sound. Failure to find one can mean abstention rather than absence of the true triple.

A monotone verifier chooses, at each anchor $a$, the lexicographically first distinct partner pair $(j,k)$ satisfying $h_a+h_j+h_k=0$, then checks all selected full residuals. Candidate order uses original indices. Adding parity rows removes false candidates without changing the order of those remaining, so an accepted true candidate stays accepted under refinement.

For a true anchor, acceptance occurs exactly when all lexicographically earlier false partners have nonzero projected residual. A random independent $\ell$-row parity map therefore gives, at any fixed true anchor,

$$
\Pr(\text{accept})\ge1-\left(\binom{d-1}{2}-1\right)2^{-\ell}.
$$

This follows by a union bound over nonzero blocker residuals. With $\ell=O(\log d)$, short sorting, paid full-row gathering and compute/copy/uncompute give a sound near-quadratic clean certificate. An expected number of retries does not prove a deterministic finite worst-case selector. Seeds and failed-trial histories also have to be retained or uncomputed.

A deterministic row-and-zero-injective sketch can be constructed at $O(d^2\log^3d)$ cost. Include one virtual zero alongside the distinct nonzero raw rows, so separating all supplied values makes every row hash nonzero as well as distinct. Choose each parity coordinate from low raw bit to high, assigning every unresolved pair to its highest differing raw coordinate and choosing the coefficient that leaves fewer such pairs unresolved, with zero on ties. Each parity halves the collision count. Grouped sorting and scans implement the pair counts without materializing all full-width pair differences. Yet an injective sketch only distinguishes rows. It need not distinguish a false triple from the true triple.

For example, raw rows

$$
(1,2,4,8,12,16)
$$

have true support $\{2,3,4\}$. The specified injector produces distinct nonzero hashes $(1,2,3,4,7,6)$, but earlier false partner pairs block every true anchor. The verifier abstains. More accurate observations must address the relevant relations, not just individual identities.

## Progress must be measured at the level a proof needs

The refinement statements below start from a row-and-zero-injective sketch and retain that property by appending parity rows. One refinement separates the currently selected nonzero full residuals from zero. A stronger finite-list refinement makes distinct selected residuals and zero mutually distinct. Neither condition says that the new sketch is injective on their whole linear span.

If a failed finite-list batch has $s$ active rows and $m$ distinct selected triples, then $m\ge\lceil s/3\rceil$. The distinct residuals all lie in the old sketch kernel. Giving them and zero distinct new images adds at least $\lceil\log_2(m+1)\rceil$ rank. Every deleting refinement also permanently removes the least active row: every projected triple through it is first at its partners, and all those selected false triples are eliminated on failure.

Charging these rank increases gives a universal $O(d/\log(d+1))$ failed-batch bound for the stated finite-list refinement. This ensures eventual exactness after a dimension-bounded unrolling. It does not establish near-quadratic total work as the growing sketch must be recomputed, routed and eventually cleaned.

A constructed family makes this gap decisive. For every $q=2^p\ge4$, the specified deterministic initializer and low-to-high, zero-tie residual refinement have an input with

$$
d_q=q^3+\binom q2,
\qquad
F(d_q)=q-3=\Theta(d_q^{1/3})
$$

failed batches. Its core rows encode graph edges with binary field labels $(i+j,i^3+j^3,i^5+j^5)$; projected zero-XOR triples correspond to triangles. Ordered coordinate blocks force the refinement to remove one graph vertex's star per stage, and guard rows force the actual initializer to preserve that pattern. The unique true dependence is the final triangle. This is a negative result for that precisely specified pipeline. The same inputs have a readily describable support and do not establish hardness for every selector.

Whole-span refinement gives a different guarantee with a different cost. Let $V_t$ be the span of all surviving projected-triple residuals, with dimension $v_t$, and let $R_t$ be the span of selected residuals. If every failed update is injective on $R_t$, then

$$
v_{t+1}\le\frac45v_t.
$$

**Proof.** Order distinct triples globally lexicographically. Every triple selected as the first at some vertex introduces that vertex relative to all earlier triples; hence the distinct selected incidence vectors are independent. The raw row map has one-dimensional kernel, so $m$ selected triples have residual rank at least $m-1$. They cover all $s$ active vertices, giving $m\ge\lceil s/3\rceil$, while $v_t\le s-1$. On failure, the three true anchors select distinct false triples, so $\dim R_t\ge2$. Thus

$$
\dim R_t\ge\max\{2,\lceil(v_t+1)/3\rceil-1\}\ge v_t/5.
$$

An update injective on $R_t$ removes at least that many dimensions from $V_t$'s surviving kernel. Therefore $v_{t+1}\le v_t-\dim R_t\le4v_t/5$.

There are $O(\log d)$ failed rounds, but the selected span can have $\Theta(d)$ dimensions. Computing and retaining a map injective on it has a larger implementation obligation. The safe clean bound is $O(d^3\operatorname{polylog}d)$, not a near-quadratic theorem.

A capped verifier instead lists projected triples using short pair hashes, orders them colexicographically by $(k,j,i)$ and checks only its first $K$ candidates against full rows. With $K=d$ and logarithmic hash width, its charged gate order is $O(d^2\log^3d)$. It immediately repairs the constructed slow family because its fewer than $q^3\le d$ core triangles occur before guarded candidates. It can still miss another input's true triple and must report abstention or overflow. An exact deterministic near-quadratic selector for every unique three-row dependence remains unresolved.

The practical implication is broader than this particular search. An agent can receive more information, make provable progress and still lack a sufficient budget for a completed decision. Round count, transcript width, routing cost and cleanup cannot stand in for one another.

## From a logical controller to a physical experiment

An ideal reversible gate list can be given finite Hamiltonians. For a Hermitian involution $U$ and gate duration $\tau$,

$$
H_U=\frac{\pi\hbar}{2\tau}(I-U)
\quad\Longrightarrow\quad
e^{-iH_U\tau/\hbar}=U.
$$

The eigenvalues of $U$ are $\pm1$; the two phases are respectively $1$ and $-1$, proving the identity. External sequencing remains a control resource.

A finite clock can implement a circuit autonomously at a chosen endpoint. For gates $U_0,\ldots,U_{L-1}$ and clock states $|0\rangle,\ldots,|L\rangle$, set

$$
H=\frac{\pi\hbar}{2T}\sum_{j=0}^{L-1}\sqrt{(j+1)(L-j)}
\left(|j+1\rangle\langle j|\otimes U_j+|j\rangle\langle j+1|\otimes U_j^\dagger\right).
$$

Conjugating by the block-diagonal history unitary removes the gate labels and leaves an engineered spin-chain clock. Its endpoint transfer at time $T$ applies the complete circuit, up to global phase. This uses the established [perfect-state-transfer construction](https://doi.org/10.1103/PhysRevLett.92.187902).

An endpoint is not a permanent record. The finite clock can evolve backward. Identity padding yields a binomial clock-position law with parameter $p(t)=\sin^2(\pi t/(2T))$ and can make completed computation likely at specified later observation times, but it does not automatically satisfy streaming release deadlines or preserve an uninterrupted classical transcript. The Hamiltonian norm is not a measured heat or work budget.

The published paper supplies a separate, more specific native realization: protected-source returns, successor-revealing records and executive access restrictions for its evaluators. The reversible-control clock here is supporting implementation mathematics, not a replacement SPC-2 certificate.

## Transfer the whole experiment

**Theorem: uniform instrument-level transfer.** Suppose the implemented initial state differs from its ideal state by at most $\eta_0$ in half trace norm. At stage $j$, suppose every history-conditioned implemented instrument differs from its ideal instrument by at most $\delta_j$ in half diamond norm, uniformly over the admitted controller class, including correlated memory and auxiliary references. Then

$$
\operatorname{TV}(P_{\rm impl},P_{\rm ideal})\le\eta_0+\sum_j\delta_j.
$$

The same bound controls the change in expected value of every complete-path score in $[0,1]$. For a candidate and baseline with respective path-error bounds $\eta_A,\eta_B$,

$$
g_{\rm impl}\ge g_{\rm ideal}-\eta_A-\eta_B.
$$

**Proof.** Retain the complete classical history and quantum or classical memory. Replace the initial state and then one instrument at a time in a hybrid sequence. Subsequent completely positive trace-preserving evolution contracts trace distance. Each instrument replacement contributes at most its diamond bound, even with a correlated reference. The triangle inequality sums the terms. Reading the final transcript is another channel and cannot increase the distance. A bounded path score changes by at most transcript total variation. Apply the bound separately to the candidate and baseline scores.

For a fixed pulse, Duhamel's formula gives the useful sufficient estimate

$$
\|U-\widetilde U\|\le\hbar^{-1}\int\|H(t)-\widetilde H(t)\|\,dt.
$$

It does not include preparation failure, clock correlations, leaked records or an unmodeled sensor. An optimized baseline comparison also needs a uniform error guarantee over every allowed baseline, rather than a check on one convenient circuit. The complete experiment must preserve the source law, observation restrictions, intervention routes and record lifetime for the logical advantage to become a physical claim.

The agent's effective freedom is consequently supported by a chain of explicit capacities: information it can actually obtain, transformations it can actually construct, amendments it can actually install, and consequences it can actually sustain. The published account supplies evaluative tests for that chain. These supplementary results show why its resource and realization conditions carry real explanatory weight.
