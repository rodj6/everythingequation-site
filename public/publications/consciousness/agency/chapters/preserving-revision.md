# Keeping revision available

**A safe amendment may exist while the agent cannot identify and install it in time.** Preserving reflective capacity therefore requires a joint account of what remains endorsed, what preserves the audit mechanism and what the present controller can find through its actual interface.

Let $P$ be a finite set of admitted controller configuration types, and let $G\subseteq P$ contain the configurations satisfying a specified local audit certificate. The certificate includes bounded completion, agreement with the declared evaluative relation, and paired preparation and read/commit controls. It is evaluated on transition semantics. A register that merely says “certified” is insufficient.

Configuration types may include writable assessment procedures and validators. The interpreter semantics and the property being proved remain fixed. Revising a validator cannot establish preservation simply by changing what success means.

## The information available at an audit

At configuration $p$, a retained context $z\in Z_p$ is fixed throughout the current audit, with $Z_p$ finite and nonempty. The relation

$$
N(p,z)\subseteq P
$$

specifies endorsed amendments. Every configuration type and its context model must retain all history, legality and resource information needed for future transitions. Successive contexts must compose under the stated envelope.

A fresh budget at every audit is a replenishment assumption. If the controller instead has a finite lifetime reserve, that reserve belongs in its state. Otherwise an apparently repeatable guarantee could silently spend the same resource more than once.

After an internal transcript $h$, write $Z_p(h)$ for the contexts still compatible with the observed history. Installation has no additional access to the unread context.

### Lemma 4.1: a common amendment

For a proposed continuation set $X\subseteq G$, a definite zero-error installation into $X$ is possible exactly when the installed dispatcher has a budget-feasible installation kernel supported entirely on

$$
\bigcap_{z\in Z_p(h)}\bigl[N(p,z)\cap X\bigr].
\tag{4.1}
$$

For deterministic installation, the intersection must contain an amendment that the dispatcher can actually execute with its remaining budget.

**Proof.** Every amendment in the support of such a kernel is endorsed and belongs to $X$ in every compatible context, giving probability-one success. Conversely, any positive output mass outside the intersection causes error in at least one compatible context. Finiteness makes the support condition necessary for randomized installation too. The dispatcher must realize this supported kernel within budget; having a positive chance of reaching one acceptable amendment is insufficient. $\square$

The intersection captures the cost of unresolved information. When the same observed history remains compatible with contexts that demand incompatible amendments, the controller needs more information before it can complete without error. Mere existence of an acceptable amendment in each separate context does not solve the problem.

## 4.1 The preservation set

Let $C_B(p,X)$ mean that an admitted internal query-and-installation tree completes within budget $B$ and satisfies Lemma 4.1 at every leaf. Its code, working memory, branch operations and installation costs are all included in the machine contract.

Start with the locally certified configurations and repeatedly remove those unable to complete an endorsed audit back into the surviving set:

$$
\begin{aligned}
W_0&=G,\\
W_{j+1}&=\{p\in W_j:C_B(p,W_j)\},\\
W_\infty&=\bigcap_{j\geq0}W_j.
\end{aligned}
\tag{4.2}
$$

Every admitted tree must be callable by the current installed dispatcher. Computing the fixed point does not authorize an experimenter to replace that dispatcher. If the contract allows synthesizing and installing a new tree, those operations also need executable routes and charged costs. Composition includes the storage and dispatch needed to implement the selected trees together.

### Theorem 4.2: budgeted revision preservation

Assume:

- contexts remain stable during each audit;
- the operational model is finite, exact and composable;
- the charged policy class is closed under the stated continuation composition.

Then $W_\infty$ is exactly the set from which an admitted bounded revision procedure can honor endorsement and preserve $G$ at every future audit occasion. The iteration stabilizes after at most $|P|$ strict removal stages. An attaining tree at each surviving configuration realizes the guarantee.

**Proof.** The predicate $C_B(p,X)$ is monotone in $X$: a tree supported on an acceptable set remains acceptable if the continuation set expands. At the finite fixed point, every leaf of an attaining tree installs an endorsed successor in that same fixed point within budget. Induction over audit occasions proves sufficiency.

Conversely, let $Y$ be the configurations from which the stated universal guarantee is achievable. The first bounded audit at any $p\in Y$ must complete in $Y$ on every compatible branch. Otherwise a continuation could violate the guarantee. Lemma 4.1 therefore gives $C_B(p,Y)$. Since $Y\subseteq G$, induction gives $Y\subseteq W_j$ for every $j$, hence $Y\subseteq W_\infty$. Each strict stage removes at least one member of finite $P$, proving the stage bound. $\square$

This is a partial-observation safety construction using established fixed-point and decision-tree methods [3](/consciousness/agency/references#ref-3). Its contribution to the agency account is the explicit distinction between an acceptable amendment's existence and the installed controller's ability to discover and execute it.

## One tick changes the answer

Suppose a source configuration contains an unread bit $z$. Only a left amendment is endorsed when $z=0$, and only a right amendment is endorsed when $z=1$. Both successor configurations preserve the audit certificate. Reading costs one tick; installation costs another.

With a one-tick budget, the source is excluded from $W_\infty$. Its interface cannot both distinguish the contexts and install the appropriate successor. With two ticks, it is admitted. The set of acceptable successors under full information is identical in both cases. What changes is executable access before the deadline.

## Preservation is a chosen objective

The theorem tracks continued auditability. It does not require every agentic act to preserve all future options. An endorsed irreversible commitment can conflict with the preservation objective while remaining an exercise of agency at its own occasion.

Writable validators also fit the framework. Their transition semantics must preserve the original certificate. Merely checking that the next program passes its present local test can miss a later loss of responsiveness. Appendix A gives the explicit query-cost recurrence, a universal closure kernel and a finite example with mutable validators that separates local certification from continued preservation.
