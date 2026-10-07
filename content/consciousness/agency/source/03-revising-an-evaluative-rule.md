# A rule can become an object of assessment

**An agent can change the rule governing its later decisions without changing the laws governing its physical implementation.** The editable-charter construction demonstrates this capacity in full. Its archive supplies commitments, its auditor compares candidate rules, and its installation mechanism changes a conditional disposition that is then tested on fresh inputs.

Self-modifying code and utility-sensitive self-modification already have formal treatments [2,4,24]. The construction here makes the evaluative role and its actual causal pathways independently testable. Selecting an action and revising the rule that will select later actions become distinct operations with distinct records.

## 3.1 The charter

Let $e=(e_0,e_1)\in\{0,1\}^2$ represent two considerations whose relevant physical consequences are accurately represented. Both final actions are executable and safe. A writable charter is

$$
\chi=(q_{01},q_{10},d)\in\{0,1\}^3.
$$

Its conditional rule is

$$
\begin{aligned}
f_\chi(0,0)&=0,& f_\chi(1,1)&=1,\\
f_\chi(0,1)&=q_{01},& f_\chi(1,0)&=q_{10}.
\end{aligned}
\tag{3.1}
$$

The mixed-case outputs specify four possible rules:

| $q_{01}$ | $q_{10}$ | Rule |
| --- | --- | --- |
| $0$ | $0$ | AND |
| $1$ | $1$ | OR |
| $0$ | $1$ | Projection onto $e_0$ |
| $1$ | $0$ | Projection onto $e_1$ |

The bit $d$ sets which consideration is read first. Execution reads $e_d$ and exits immediately if both completions of the unread consideration give the same output. Otherwise it reads the other bit. The consideration-read cost is

$$
r(\chi,e)\in\{1,2\}.
$$

The operative priority register $\varrho$ receives an answer only when ordinary execution later occurs. Revising the charter is a separate event.

## The retained commitments

The retained record is

$$
z=(a,b,s,h_0,h_1).
$$

Here $a$ and $b$ endorse outputs for the two mixed-consideration cases. The bit $s$ records a commitment to symmetry between those cases. The pair $h=(h_0,h_1)$ stores a previous ordinary case.

For $q=(q_{01},q_{10})$, the installed metarule uses the loss

$$
L_z(q)=\mathbf 1\{q_{01}\ne a\}
+\mathbf 1\{q_{10}\ne b\}
+2s\,\mathbf 1\{q_{01}\ne q_{10}\}.
\tag{3.2}
$$

The symmetry weight and the interpretation of the endorsements are explicit premises. Physical dynamics do not derive their moral authority. What matters for this experiment is that the controller evaluates the stored commitments instead of receiving an external answer that names the new program.

Given the current charter $\chi^{\mathrm{old}}=(q^{\mathrm{old}},d^{\mathrm{old}})$, the auditor scans all eight charters and minimizes the following key lexicographically, comparing its first component first and moving right only to resolve ties:

$$
\begin{aligned}
\bigl(&L_z(q),\ \mathbf 1\{q\ne q^{\mathrm{old}}\},\ r(\chi,h),\\
&\mathbf 1\{d\ne d^{\mathrm{old}}\},\ q_{01},q_{10},d\bigr).
\end{aligned}
\tag{3.3}
$$

The priorities have clear operational meaning. First minimize disagreement with the retained commitments. Retain the current conditional rule if it is equally endorsed. Then minimize reads on the retained case. Preserve the old read order if it is equally economical. The remaining bits provide a definite tie-break.

The read-order improvement is empirical and local. One stored case gives no generalization guarantee for an unknown future distribution.

### Proposition 3.1: selective represented-rule revision

For every initial charter and retained record, the scan:

- installs a minimum-loss charter;
- retains the current conditional rule whenever that rule has minimum loss;
- minimizes retained-case read cost subject to the preceding requirements;
- leaves $\varrho$ unchanged throughout revision;
- returns to the same callable audit interface;
- preserves exact ordinary execution using at most two consideration reads.

Any changed conditional rule differs from its predecessor on a fresh mixed-consideration case.

**Proof.** After every scan step, the saved candidate has the smallest key among the candidates examined so far. All eight candidates are examined, which proves optimization and retention. Installation writes only charter registers. Resetting scratch while retaining the entry point leaves the operative priority untouched and makes the audit callable again. Ordinary execution exits after one read only when both completions agree; otherwise its second read determines the full input. Finally, different conditional rules differ in $q_{01}$ or $q_{10}$, so one of the two fresh mixed cases separates them. $\square$

![Functional organization of the revision test: retained commitments feed assessment, assessment installs a rule, and the installed rule acts on fresh considerations to produce the tested disposition.](/publications/agency/figures/revision-test.svg)

*Figure 1. Retained commitments feed assessment; assessment installs a rule; that rule acts on fresh considerations. A read intervention acts on the commitment-to-assessment route. An installation intervention acts on the rule write. These are functional roles, not the primitive physical component graph used for SPC-2 qualification.*

## A changed disposition, demonstrated on a new case

Start from AND with $d=0$ and $\varrho=0$. The retained record

$$
z=(1,1,1,0,1)
$$

selects OR and changes the first read to $d=1$. The priority $\varrho$ remains zero during this revision. A later input $(0,1)$ then produces one, where the former AND rule would have produced zero.

The change concerns a conditional disposition and its read order. There was no factual correction and neither action was unsafe. Fixed physical instructions carry out the assessment and installation. The controller's total transition law remains fixed while its represented rule changes.

### Every stage has a cost

Eight candidate assessments are not eight elementary gates. A direct serial implementation charges five record reads, eight key evaluations and comparisons, candidate storage, installation and rearming.

The logical reference implementation has exact minimum worst-case archive-read depth **five** when the initial charter is AND or OR, and **four** when it is a projection. These depths assume one-bit access and no advice about unread records. The explicit query recurrence and exhaustive finite check appear in Appendix A.1.

A circuit that reads the entire archive can preserve the functional result of Proposition 3.1 while losing its short-circuit timing. Matching a rule does not automatically preserve every resource guarantee of another implementation.

## 3.2 Testing reading, installation and endorsement

Compare two matched preparations: one has $(a,b)=(0,0)$ and the other $(a,b)=(1,1)$. Hold the symmetry bit, retained case, initial charter, current priority, resources and fresh probe fixed.

The first preparation installs AND; the second installs OR. The later probe $(0,1)$ separates them. A common clamp on the **actual endorsement read route** removes that contrast. Holding the **actual charter-write gate** fixed also removes the later probe contrast even if the internal candidate assessments still differ. Clamping an external actuator, by contrast, need not erase the installed internal disposition.

These interventions distinguish four events: reading, assessing, installing and successfully acting outward. They establish causal roles. A further check establishes whether the installed rule agrees with the retained endorsements.

### Proposition 3.2: information, installed contrast and endorsement

Suppose two matched retained contexts endorse disjoint amendment sets $A_0,A_1$. Let $H_i$ be the actual inquiry-transcript law in context $i$, and suppose the installed amendment law is

$$
P_i=H_iK,
$$

with the same downstream Markov kernel $K$ in both contexts. Set $\epsilon_i=P_i(A_i^c)$, the probability of an unendorsed installation. Then

$$
\max\{0,1-\epsilon_0-\epsilon_1\}
\leq\operatorname{TV}(P_0,P_1)
\leq\operatorname{TV}(H_0,H_1).
\tag{3.4}
$$

In particular,

$$
\epsilon_0+\epsilon_1\geq1-\operatorname{TV}(H_0,H_1).
$$

**Proof.** Because $A_0$ and $A_1$ are disjoint, $P_0(A_1)\leq\epsilon_0$ while $P_1(A_1)\geq1-\epsilon_1$. Testing the event $A_1$ gives the lower bound. Total variation contracts under the common kernel $K$, giving the upper bound. $\square$

The common-kernel condition excludes an uncharged route carrying the retained context around the inquiry interface. Installation noise is allowed inside $K$. A downstream external probe inherits the lower bound only if it distinguishes the relevant installed amendment classes, as the mixed-case probe does.

The inequality puts a precise limit on evaluation. If two contexts require disjoint amendments yet the permitted inquiry barely distinguishes them, low endorsement error is impossible. Internal processing cannot recover a distinction that never reaches it through the allowed route.

## A causally responsive evaluator can still be wrong

The bound is sharp. Consider a binary read with crossover probability $\nu<1/2$.

| Selector | Endorsement error | Intact contrast | Contrast under a common read or installation clamp |
| --- | --- | --- | --- |
| Install the reported charter | $\nu$ | $1-2\nu$ | $0$ |
| Install the opposite charter | $1-\nu$ | $1-2\nu$ | $0$ |

With noiseless reads, both selectors have contrast one. One always installs an endorsed charter; the other never does. Their causal sensitivity is identical.

**Mediation locates a causal route. Endorsement tests what that route accomplishes.** The certificate needs both. Conversely, one accidentally endorsed installation cannot establish that retained commitment mediated the decision. This distinction gives the finite account more content than an output score or a generic claim that internal state matters.
