<span id="continuation-sufficient-relational-memory" class="quantum-anchor"></span>

## 7 Continuation-sufficient relational memory

<span id="a-finite-costed-model" class="quantum-anchor"></span>

### 7.1 A finite costed model

Let $X$ be a finite nominated state set, $U$ a finite action alphabet, $O$ a finite record alphabet and $C$ a finite set of positive event costs. A normalized joint instrument satisfies

$$K_{u,o,c}(x,y)\ge0,\qquad \sum_{o,c,y}K_{u,o,c}(x,y)=1.$$

The state or the retained boundary context includes controller memory, clocks, queues, persistent learner state, relevant shared seeds and resources. Common admitted actions are assumed; a finite operating grammar can instead be retained explicitly. Artificially adding a failure action does not make a physically unavailable operation lawful. Throughout the finite-model results, an experiment is a causal policy with a finite uniform upper bound on its number of steps, depending only on admitted records and having a declared stopping rule. Adaptive early stopping is allowed. A statement over all such experiments quantifies over arbitrarily large finite bounds; it does not grant an infinite experiment or free resources. A capability diagnostic has a bounded terminal score $s_e\in[0,1]$ and mean $\gamma_e(x)=\mathbb E_x s_e$.

A budget curve $\Gamma_x(B)$ is the probability of a specified success event by cumulative cost $B$ under a fixed task distribution and procedure. Optimizing over procedures is a different construction. It requires a common procedure class and explicit access and computation restrictions. An omniscient state-dependent policy is not supplied by taking a supremum.

<span id="snapshot-failure-and-deterministic-repair" class="quantum-anchor"></span>

### 7.2 Snapshot failure and deterministic repair

The smallest useful counterexample has states $x,y,z$ with current score $b(x)=b(y)=0$, $b(z)=1$ and an admitted update

$$F_a(x)=z,\qquad F_a(y)=y,\qquad F_a(z)=z.$$

The present score identifies $x$ with $y$, but their scores differ after $a$. No autonomous update on the two score classes can represent both cases. A score quotient exists as a set without being a sufficient developmental state. Independently, two task profiles $(1,0)$ and $(0,1)$ have the same uniform mean but different competencies.

For a deterministic controlled machine with protected signature $b$, define

$$x\equiv_b y\quad\Longleftrightarrow\quad b(F_w(x))=b(F_w(y))\text{ for every admitted finite word }w.$$

<span id="result-c1" class="quantum-anchor"></span>

**Proposition C1, inherited continuation closure.** This is the coarsest transition congruence refining the $b$ partition. It supports a unique quotient update and is computed by finite partition refinement.

<span id="proof-1" class="quantum-anchor"></span>

**Proof.** The empty word preserves $b$. Prepending any action $u$ shows that equivalent states have equivalent $u$-successors. Conversely, every $b$-preserving congruence preserves $b$ after every word by induction, so it refines $\equiv_b$. Start from the $b$ partition and repeatedly split a block by its action-successor block labels. Each strict refinement increases the number of blocks; hence at most $|X|-|P_0|$ strict steps occur. Stability is precisely congruence. Every eligible congruence refines every iteration, proving coarseness. $\square$

This is ordinary finite-machine minimization specialized to developmental tests. It does not identify the smallest program or fastest implementation. Its philosophical value is the explicit difference between retaining today’s answer and retaining what future development needs.

The checkpoints supply a sharp cyclic illustration. For $n\ge2$, let $X=\{0,\ldots,n-1\}$, $F(i)=i-1\pmod n$ and $b(i)=\mathbf1_{i=0}$. The present signature has two classes, but all phases are future-distinguishable. If at most $h$ advances precede a terminal score test, the profiles have

$$N_h=\min(n,h+2),\qquad k_h=\min(n-1,h+1)$$

classes in total and at most $k_h$ within one current $b$ fibre. To verify this, list the values $\mathbf1_{i-j=0\pmod n}$ for $0\le j\le h$. Until all phases are exposed, the observed phases yield distinct unit patterns and all remaining phases yield the zero pattern. Thus a two-valued snapshot can conceal arbitrarily large continuation memory. A finite-horizon quotient must retain the decreasing remaining horizon; it is not automatically an unchanged stationary quotient.

<span id="stochastic-joint-closure-and-autonomous-modules" class="quantum-anchor"></span>

### 7.3 Stochastic joint closure and autonomous modules

For a surjection $q:X\to Z$, retain required marks such as type, timing and resource status. The strong quotient condition is

$$\sum_{y:q(y)=z'}K_{u,o,c}(x,y)=\overline K_{u,o,c}(q(x),z'),$$

independent of the representative $x$.

<span id="result-c2" class="quantum-anchor"></span>

**Proposition C2, inherited from P2.** This condition, together with descent of protected marks, is necessary and sufficient for a unique effective instrument preserving the joint record, cost and actual successor-class law. Finite refinement gives the coarsest such quotient. In a matching causal context it preserves every finite adaptive transcript law.

<span id="proof-2" class="quantum-anchor"></span>

**Proof.** Necessity follows by comparing actual representatives. For sufficiency define the effective row by the common sums; nonnegativity and normalization follow from the original rows. Refine the mark partition by all probabilities into each current block for every action, record and cost. Stability is the displayed condition, and induction shows that every eligible partition refines every iterate. For composition, retain the external controller and push forward the joint initial state law without deleting correlations. Equal matched histories produce the same next action distribution and the same next joint record, cost and class law. Induction over the finite policy tree proves equality, including adaptive stopping. $\square$

This gives a relation a precise route to becoming an autonomous higher-level component: its effective state must retain the distinctions required by subsequent interaction. A useful module is relative to its ports and permitted contexts. Port-trace equivalence can sometimes suffice for behavioural substitution without a strong actual-state quotient; P2 distinguishes these targets. Neither construction grants a free physical decoder.

Actual-state trace equivalence alone is weaker. Consider states $a,b,c,x,y$: $a$ emits zero forever, $b$ emits one forever, $c$ emits zero and enters $a$ or emits one and enters $b$, equally likely; $x$ emits a marker and enters $a$ or $b$ equally; $y$ emits the same marker and enters $c$. All finite record laws from $x,y$ agree. After the marker, however, $y$ enters the actual class of $c$ with probability one and $x$ with probability zero. Thus their trace class does not support that strong successor-class instrument. This inherited example does not invalidate predictive states of observed histories, which update by conditioning.

<span id="exact-residual-memory-and-relational-dependence" class="quantum-anchor"></span>

### 7.4 Exact residual memory and relational dependence

Let $Q$ be the finite deterministic continuation quotient and let the protected local summary $\ell$ descend through it. Write $k_l=|\{q:\ell(q)=l\}|$.

<span id="result-c3" class="quantum-anchor"></span>

**Proposition C3, P2-32.** The minimum residual alphabet identifying the quotient class from $(\ell,j)$ and supporting exact autonomous updates is

$$|J|_{\min}=\max_l k_l,\qquad b_J=\left\lceil\log_2\max_l k_l\right\rceil.$$

<span id="proof-3" class="quantum-anchor"></span>

**Proof.** Two distinct classes in one fibre cannot share a residual label, because an admitted future test separates them. Conversely, enumerate the classes within each fibre and reuse labels in different fibres. The pair $(\ell,j)$ identifies the quotient class, whose update can be applied and re-encoded. $\square$

Relational residual memory is therefore relative to a retained local summary and a continuation target. Enlarging a participant’s state can absorb the residual. This does not undermine its operational importance; it defeats an inference to an unaccounted-for third substance.

For independent fair bits $A,B$, parity $\Theta=A\oplus B$ is independent of either input alone and determined by the complete pair. Thus $I(\Theta;A)=I(\Theta;B)=0$, $I(\Theta;A,B)=1$, but $I(\Theta;Y\mid A,B)=0$ for every $Y$. More generally, if $R=f(A,B)$, then $H(R\mid A,B)=0$ and therefore $I(R;Y\mid A,B)=0$. A computed relation can causally matter while supplying no information beyond its complete antecedents.

P2’s coupled-stream example is equally instructive. At each tick emit $(\xi,\xi\oplus\theta)$ with fresh fair $\xi$ and a retained parameter $\theta$. Each marginal stream has the same law for both parameter values, while joint parity reveals the parameter exactly. Local marginal predictive summaries erase a real correlation distinction. This is different from saying that the complete coupled physical state lacks that distinction.

<span id="robust-finite-use-substitution" class="quantum-anchor"></span>

### 7.5 Robust finite-use substitution

Let $0\le\delta_0,\epsilon_i\le1$ and finite nonnegative integer call bounds $n_i$ be fixed. Suppose two matched implementations can initially be coupled with disagreement probability at most $\delta_0$, and module $i$ has joint-row error at most $\epsilon_i$ whenever the preceding states and transcripts match. The error bound is uniform over matched states and histories and concerns the joint record, cost and next matched-state law. Every admitted path calls it at most $n_i$ times. The inherited coupling argument yields

$$\operatorname{TV}(P^e,\widehat P^e)
\le1-(1-\delta_0)\prod_i(1-\epsilon_i)^{n_i}
\le\min\left(1,\delta_0+\sum_i n_i\epsilon_i\right)=:\beta_{\rm union}.$$

Indeed, match the initial states and maximally couple each next row while histories agree. Conditional success probabilities multiply by backward induction over the remaining pathwise call bounds; independent errors are not assumed. Complete transcript agreement gives the total-variation bound. Every bounded score changes by at most the same bound. The product is sharp for a never-failing process compared with independent opportunities to enter an absorbing failure state.

For a modelled before/after gain $\widehat g$, with respective validated law-error bounds $\beta_0,\beta_1$, the actual gain obeys $g\ge\widehat g-\beta_0-\beta_1$. Statistical uncertainty must be added if the means are estimated. A positive lower bound certifies the declared task improvement. It does not certify improvement of every task, preserve exact graph edges under arbitrary perturbation, or validate a phenomenal assignment.
