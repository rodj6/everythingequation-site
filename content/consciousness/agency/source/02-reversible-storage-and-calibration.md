---
title: "Where uncertainty goes"
description: "Exact receiver capacity, calibration and causal deadlines reveal the physical resources behind successful control."
slug: "reversible-storage-and-calibration"
order: 2
---

Control changes a selected part of the world. In a reversible model, it must also preserve the distinctions carried by the initial state. A target can become orderly while information moves into a receiver, a retained record or another explicitly modeled output.

This supplementary analysis gives that statement an exact finite form. It extends the website's account of bounded agency with receiver and calibration results. The published reflective-freedom paper uses different devices and resource units; their counts should not be combined into a fictitious single machine.

## The receiver capacity theorem

Let a finite plant $x\in X$ have prior $\mu(x)$. A nondisturbing observation produces retained record $h$ through $Q(h\mid x)$. The receiver starts in one specified ready state and has $D$ possible final states. Conditional on $h$, the actuator can apply any permutation of plant and receiver. Additional scratch must return to fixed values; otherwise its possible final values count toward $D$.

Let the target set $G\subseteq X$ have $g$ elements. For a nonnegative weight vector $w$, write $\operatorname{Top}_s(w)$ for the sum of its $s$ largest entries, or all entries if there are fewer than $s$.

**Theorem: exact unrestricted receiver capacity.**

$$
p^*=\sum_h\operatorname{Top}_{gD}
\left((\mu(x)Q(h\mid x))_{x\in X}\right).
$$

For uniform input on $K$ states with a deterministic record partition $\{C_h\}$,

$$
p^*=\frac1K\sum_h\min\{|C_h|,gD\}.
$$

**Proof.** Fix $h$. Distinct ready-receiver inputs require distinct outputs under a permutation. Exactly $gD$ outputs place the plant in its target. Thus at most $gD$ inputs can succeed, and the largest possible successful mass is the sum of the $gD$ greatest weights. Conversely, map those inputs injectively into successful output positions and complete the partial injection to a permutation of the finite register space. Do this separately for each retained record. The record remains unchanged during actuation.

This is an exact count of available output positions. It is not a thermodynamic work law, and it does not promise an efficient circuit for every attaining permutation.

For $N$ independent uniform $K$-state inputs, a common $D$-state receiver and targets of size $g$, the blind bound is

$$
p_{\rm all}\le\min\{1,D(g/K)^N\}.
$$

Here **blind** means that no retained record carries source information. The joint receiver is the only output allowed to retain unresolved source distinctions. Success at least $1-\varepsilon$ consequently requires

$$
\log_2D\ge N\log_2(K/g)+\log_2(1-\varepsilon).
$$

An informative record changes the accounting. Record a fair bit exactly as $h=x$ and use the reversible CNOT $(x,h)\mapsto(x\oplus h,h)$. The plant resets with certainty and no extra residual receiver, because the record already contains the distinction. Applying the blind bound would be wrong. With a general retained channel, use the full conditional top-mass expression.

## The quantum capacity counterpart

For a density operator $\rho$ and a success projector $P$ of rank $s$,

$$
\max_U\operatorname{Tr}(PU\rho U^\dagger)=\sum_{j=1}^s\lambda_j^\downarrow(\rho).
$$

**Proof.** In an eigenbasis of $\rho$, put $w_j=\langle j|U^\dagger PU|j\rangle$. These weights satisfy $0\le w_j\le1$ and $\sum_jw_j=s$. The weighted eigenvalue sum is largest when the largest $s$ eigenvalues receive weight one. A unitary aligning their eigenvectors with the range of $P$ attains that choice.

A maximally mixed $K$-state input therefore has success at most $gD/K$ in a $gD$-dimensional success space. The statement uses the ordinary density-operator probability rule. It does not derive that rule or permit copying an arbitrary unknown quantum state. It identifies the same capacity obligation under unitary dynamics: unresolved distinctions require physical room.

## Learning an unknown sensor

Let $V=\mathbb F_2^d$, $K=2^d$, $d\ge2$, and suppose the unknown sensor is

$$
f(x)=Ax+b,\qquad A\in\operatorname{GL}(d,2),\quad b\in V,
$$

uniform over the affine group. A live input is uniform and independent of the sensor. Before it arrives, the apparatus can query $q$ chosen reference states and retain their readings. The task is exact regulation of the live plant to one prescribed value, with a $D$-state ready receiver and unrestricted record-conditioned permutations.

**Theorem: optimized calibration–receiver frontier.**

$$
p^*_{q,D}=\begin{cases}
\min\{1,D/K\},&q=0,\\
\min\{1,(2^{q-1}+D)/K\},&1\le q\le d,\\
1,&q\ge d+1.
\end{cases}
$$

This optimizes the reference design. For a particular nonempty transcript whose references have affine-span dimension $s$, the value is

$$
p^*_{s,D}=\frac{2^s+\min\{D,K-2^s\}}K.
$$

**Proof.** Without a reference, affine transitivity makes the source posterior uniform even after the live sensor reading. The capacity theorem gives $D/K$, capped at one.

After a reference, translate its source position to zero and subtract its observed offset. Let $W$ be the span of reference differences, with dimension $s$. The remaining sensor ambiguity is the group fixing $W$ pointwise. In a chosen complement its matrices have form

$$
\begin{pmatrix}I_s&B\\0&C\end{pmatrix},\qquad C\in\operatorname{GL}(d-s,2).
$$

Every point of $W$ is fixed. All points outside $W$ form one orbit: choose $C$ to map one nonzero complement coordinate to another, then choose $B$ to adjust the $W$ coordinate. A live source in $W$ is exactly known. Outside $W$, its posterior is uniform on $K-2^s$ points. The receiver preserves at most $D$ of those successful possibilities, giving the stated fraction.

Each new reference can add at most one independent difference. References $0,e_1,\ldots,e_{q-1}$ attain $s=q-1$ until $d+1$ references determine the sensor. Adaptive pre-live choice cannot exceed the same span bound. Conditional on a full calibration transcript, its choice rule adds no observation beyond the queried readings; the remaining uniform sensor posterior is a coset of the same pointwise stabilizer.

Repeated readings of the same reference do not count as new independent directions. At $d=2,D=1$, two references $(0,0)$ give success $1/2$, while distinct references $(0,e_1)$ give $3/4$. Counting operations without checking what they distinguish can overstate competence.

With $r$ receiver bits, $D=2^r$, this single-task optimum can be attained with conditional affine data operations. For $r\le d-1$, an appropriate $r$-flat fits in the unresolved complement and can be transferred to the receiver by affine normalization. A full $d$-bit receiver permits a blind swap. Shared tasks introduce more demanding geometry.

## Shared calibration creates correlated uncertainty

One sensor acting on $N$ live inputs leaves a common residual group $G$ acting diagonally on $V^N$. Conditional on the complete readings, the source tuple is uniform on a group orbit. Hence

$$
p^*_{N,G,D}=K^{-N}\sum_{O\in V^N/G}\min\{|O|,D\}.
$$

This is one shared receiver, not a fresh receiver for every task. After calibration spanning $s$ dimensions, put $m=d-s$. If the complement components of the source tuple have rank $k$, their orbit size is

$$
L_{s,k}=2^{sk}\prod_{j=0}^{k-1}(2^m-2^j).
$$

The product counts injective images of the $k$ independent complement directions. The factor $2^{sk}$ counts their possible $W$ components. The rank probability is

$$
\rho_{m,N}(k)=2^{-mN}\prod_{j=0}^{k-1}
\frac{(2^m-2^j)(2^N-2^j)}{2^k-2^j},
$$

with empty products equal to one. Counting rank-$k$ matrices by image subspace and full-rank coordinate map gives this expression. Applying the receiver bound orbit by orbit yields

$$
p^*_{N,s,D}=\sum_{k=0}^{\min(m,N)}\rho_{m,N}(k)
\min\{1,D/L_{s,k}\}.
$$

Without a reference, the corresponding affine-span orbit of $N$ points has size $2^d\prod_{j<k}(2^d-2^j)$, where $k$ is the rank of their $N-1$ differences.

## A deadline changes the task

A batch controller sees all readings before acting. A causal controller may have to release each plant before the next reading arrives. Equal total information does not guarantee equal available action at the earlier deadline.

There is an exact positive result under uniform symmetry. Let one uniform hidden $g\in G$ act on independent uniform plants, giving $Y_t=gX_t$. Retain every reading immutably. Only the current plant and one persistent $D$-state receiver may change during actuation; the sensor is isolated, no extra source-sensitive probe is allowed, and all additional helpers must be restored before release. The targets are singleton states.

**Theorem: online orbit capacity.** Under these conditions,

$$
p^*_{\rm online}=p^*_{\rm batch}=K^{-N}\sum_{O\in X^N/G}\min\{|O|,D\}.
$$

**Proof.** Batch capacity is an upper bound. For a fixed reading prefix, possible source prefixes form a uniform orbit. Projection onto the preceding prefix has equal-size fibres, because group elements biject the extensions of any two prefixes. If prefix-orbit sizes obey $L_t=L_{t-1}b_t$, keep up to $D$ successful prefixes in distinct receiver states. When $L_{t-1}\le D$, all prefixes survive, producing $L_t$ candidate extensions. When $L_{t-1}>D$, the retained $D$ prefixes have $Db_t\ge D$ extensions. In both cases select exactly $\min(D,L_t)$ extensions, map their distinct plant-receiver pairs to the target and distinct receiver states, and complete the map to a permutation. No released plant is touched again. Uniformity makes the retained fraction optimal at every final reading.

The receiver must remain available for interaction. A sealed archive has a different role. The proof gives exact existence; history-conditioned permutations may be expensive, and retaining every reading does not give bounded total memory.

For a general finite exogenous joint law $w(x_{1:N},y_{1:N})$, causal success instead has a nested-list characterization. At each reading history $h_t$, choose a set $L(h_t)$ of at most $D$ compatible source prefixes, beginning with the empty prefix, such that

$$
\{x_{1:t-1}:x_{1:t}\in L(h_t)\}\subseteq L(h_{t-1}).
$$

Maximize the terminal mass

$$
\sum_{h_N}\sum_{x_{1:N}\in L(h_N)}w(x_{1:N},h_N).
$$

**Why this is exact.** Successful source histories cannot merge into one receiver state when earlier plants and records are fixed. Thus every controller supplies such lists. Conversely, the distinct selected extensions can be assigned distinct receiver labels through partial permutations, completed at each step. Online and batch values agree precisely when a feasible list family captures the terminal top-$D$ mass at every positive-probability final reading. This characterization is finite, without an efficiency claim.

For a concrete gap, take $Y_i=X_i\oplus S$, with $S$ fair and independent $X_i\sim\operatorname{Bernoulli}(p)$, $p\ge1/2$. With $D=1$, the first causal reset commits to an interpretation and the optimal all-task success is $p$. Batch success is

$$
\frac12\sum_{y\in\{0,1\}^N}
\max\{p^{|y|}(1-p)^{N-|y|},p^{N-|y|}(1-p)^{|y|}\}.
$$

For $N=3,p=4/5$, the values are $4/5$ online and $112/125$ in batch. The improvement is purchased by waiting for later evidence. A capacity can exist in the architecture yet be unavailable on a particular occasion because its evidence arrives too late.
