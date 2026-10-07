# Bounded perspective, real control

An agent never needs to possess the whole world in order to act within it. What it needs depends on the task. A missing distinction matters when different possibilities demand incompatible responses. Other hidden distinctions can remain hidden without preventing success.

This is the first extension of the published account of reflective freedom. The published paper establishes how retained commitments can govern assessment, rule installation and fresh decisions. The supplementary control models developed here ask a different supporting question: **what can an embedded system accomplish through a limited interface?** Their results belong to this extended website treatment. They are not additional claims of the published paper.

## What a perspective preserves

Write the observational relation as

$$
\Omega \xrightarrow{\Delta} R.
$$

The source state is in $\Omega$, the aperture $\Delta$ supplies a readout, and $R$ is what the installed interface makes available. If $\Delta$ is many-to-one, several source states have the same readout. That is an exact limitation on discrimination. It does not yet specify a limitation on every possible action.

For a deterministic aperture, the three relevant tests are different:

| Question | Exact requirement |
| --- | --- |
| Can the source state be reconstructed? | $\Delta$ must be injective. |
| Can a particular fact $q(\omega)$ be recovered? | $q$ must be constant on each fibre of $\Delta$. |
| Can the task be completed without regret? | The source states in each fibre must share an optimal executable action. |

A fibre is the set of source states giving one readout. Knowing which fibre contains the world can be enough to answer one question and insufficient to answer another. A standpoint is therefore a structured access relation, not a scalar amount of ignorance.

Consider a target register holding an unknown value $x$ and a receiver prepared at a desired value $g$. The reversible swap

$$
(x,g)\longmapsto(g,x)
$$

sets the target exactly without identifying $x$. The unresolved value survives in the receiver. Conversely, even complete observation does not help a controller whose only permitted actuation is the identity. Adding an inaccessible spectator register changes the completeness of its world description while leaving this target task unchanged.

These examples block an unrestricted inference from partial knowledge to absent agency. They also identify the right questions: which actions are compatible with the remaining uncertainty, where can unresolved information go, and which transformations can the apparatus execute?

## The exact decision obstruction

Let $\Theta$ be a finite set of source conditions, $\mathcal H$ a finite record alphabet, and $Q(h\mid\theta)$ the observation channel. Let $\mathcal A$ be the admitted finite action set. A policy $\pi(a\mid h)$ can use the record but cannot read the hidden condition directly.

An outcome kernel $K(y\mid\theta,a)$ and a bounded task score $u(\theta,y)$ define

$$
v_\theta(a)=\sum_y K(y\mid\theta,a)u(\theta,y),
\qquad
v^*_\theta=\max_a v_\theta(a),
\qquad
\ell_{\theta a}=v^*_\theta-v_\theta(a).
$$

The regret $\ell_{\theta a}$ measures the task value lost by selecting $a$ when $\theta$ is the source condition. Every row has at least one zero. Define worst-source regret by

$$
R(Q,\ell)=\min_\pi\max_\theta
\sum_{h,a}Q(h\mid\theta)\pi(a\mid h)\ell_{\theta a}.
$$

**Theorem: exact finite task compatibility.** The same value has the dual expression

$$
R(Q,\ell)=\max_{\lambda\in\Delta(\Theta)}
\sum_h\min_a\sum_\theta\lambda_\theta Q(h\mid\theta)\ell_{\theta a}.
$$

Moreover, $R(Q,\ell)=0$ exactly when every possible record $h$ satisfies

$$
\bigcap_{\theta:\,Q(h\mid\theta)>0}
\operatorname*{arg\,min}_a\ell_{\theta a}\ne\varnothing.
$$

**Proof.** The policy set is a product of finite probability simplexes. Replace maximization over the source condition by maximization over source distributions $\lambda$. Finite minimax exchanges that maximization with policy minimization. With $\lambda$ fixed, the policy optimization separates over records, and a minimizing action at each record gives the dual formula.

If each intersection is nonempty, choose an action in it. Every supported source-record pair then has zero loss. Conversely, zero worst-source regret means that every nonnegative term with positive $Q(h\mid\theta)\pi(a\mid h)$ has zero loss. An action given positive probability at $h$ must be optimal in every source condition compatible with that record. At least one such action exists because the policy probabilities sum to one. This proves both directions.

The obstruction is **incompatible required action under the same available record**. Randomization does not remove that obstruction at zero error. Every action in a randomized policy's support must still satisfy the common requirement.

Pairwise agreement is weaker than joint agreement. With a single record and loss matrix $\ell=I_3$, any two source rows share a zero-loss action, but all three do not. The minimax value is $1/3$: assigning each action probability $1/3$ attains it, and some action must receive at least that probability. Testing only pairs would miss the obstruction.

## How indistinguishability becomes a quantitative limit

Total variation is

$$
\operatorname{TV}(P,Q)=\frac12\sum_h|P(h)-Q(h)|.
$$

It measures how well the available records can distinguish two hypotheses. Suppose two source conditions have disjoint optimal action sets and every nonoptimal action loses at least $\gamma>0$. Then

$$
R(Q,\ell)\ge
\frac\gamma2\left[1-\operatorname{TV}(Q_{\theta_0},Q_{\theta_1})\right].
$$

**Proof.** Their common record mass is $c(h)=\min\{Q(h\mid\theta_0),Q(h\mid\theta_1)\}$, with total mass $1-\operatorname{TV}(Q_{\theta_0},Q_{\theta_1})$. At any action, the two losses sum to at least $\gamma$ because the action cannot be optimal in both conditions. Sum over the common mass and take half the resulting total. Maximum risk is at least average risk.

For several source conditions, put

$$
\alpha=\sum_h\min_\theta Q(h\mid\theta),
\qquad
r_{\rm blind}=\min_p\max_\theta\sum_a p(a)\ell_{\theta a}.
$$

Then $R(Q,\ell)\ge\alpha r_{\rm blind}$. For $\alpha>0$, the common record mass induces the same action distribution in every condition; discard the nonnegative loss on the remaining mass. For $\alpha=0$, the statement is just nonnegativity.

Garbling an observation cannot improve the optimum when the actuator and resources stay fixed. If $Q'=QB$, every policy using $Q'$ can be simulated from $Q$ by first drawing the garbled record through $B$. Its policy class is contained in the original one. This finite argument is the relevant instance of [Blackwell's comparison of experiments](https://doi.org/10.1214/aoms/1177729032).

The lesson for reflective agency is direct. An acceptable amendment can exist without being identifiable through the installed read ports. The published paper's common-amendment criterion applies this same structure to endorsement and continued auditability. More information can remove a conflict between compatible contexts. It cannot supply an unavailable actuator or make an inaccessible amendment executable before a deadline.

## Capability is a set of achievable consequences

For a specified interface and policy-resource class $\Pi$, define

$$
\mathcal K(\Pi)=\{K^\pi(\cdot\mid\theta):\pi\in\Pi\}.
$$

This collects achievable outcome or transcript laws. It permits exact comparisons between a controller before and after learning, between two memory budgets, or between two operation sets. There is no need to force these comparisons into one universal number called freedom.

**Theorem: a task witnesses a capability gap.** Let $\mathcal C$ be a compact convex set of finite kernels, let $\mu$ have full support, and let $K$ be a target kernel. Then

$$
\begin{aligned}
\min_{L\in\mathcal C}\sum_\theta\mu_\theta\operatorname{TV}(K_\theta,L_\theta)
=\max_{0\le u\le1}\Bigg[&\sum_{\theta,y}\mu_\theta K(y\mid\theta)u(\theta,y)\\
&-\max_{L\in\mathcal C}\sum_{\theta,y}\mu_\theta L(y\mid\theta)u(\theta,y)\Bigg].
\end{aligned}
$$

**Proof.** For probability distributions of equal mass, $\operatorname{TV}(p,q)=\max_{0\le u\le1}\sum_yu_y(p_y-q_y)$. Apply this separately to each source row and exchange the minimum over the compact convex kernel class with the maximum over the score cube by finite minimax. The inner minimum subtracts the largest comparator score.

A new achievable law outside the old convex capability class therefore has a bounded task that reveals the difference. This is a precise sense in which learning can create an effective capability. It does not establish that the learner has escaped its underlying physical laws or acquired ultimate authorship of them.

## A world model can be partial and adequate

If estimated action values obey $|\widehat v_\theta(a)-v_\theta(a)|\le\varepsilon$ for every value actually compared, the greedy estimated choice loses at most $2\varepsilon$ relative to that comparison's true optimum. Add and subtract the two estimated values; the greedy inequality cancels the middle difference. The premise must cover the comparison being claimed. An error guarantee on accessible comparisons does not automatically reach an inaccessible source-oracle optimum.

Nor does a lossy observation automatically destroy Markov structure. For a controlled process on $X$ and a map $\phi:X\to Z$, an exact controlled quotient exists when

$$
\phi_*K^a(\cdot\mid x)=\phi_*K^a(\cdot\mid x')
\quad\text{whenever }\phi(x)=\phi(x'),\quad\text{for every }a.
$$

Necessity follows by starting from either state in the same fibre. Sufficiency defines the quotient kernel by the common pushed-forward law and then iterates it. Memory is required when relevant distinctions fail this test, not merely because the representation is incomplete.

Broad competence can demand much richer models than a single reset task. [General agents need world models](https://proceedings.mlr.press/v267/richens25a.html) supplies such necessity results under its own task and environment assumptions. A bounded perspective can support strong local competence without becoming a complete representation of the source. That is the setting in which reflective freedom has to be built and tested.
