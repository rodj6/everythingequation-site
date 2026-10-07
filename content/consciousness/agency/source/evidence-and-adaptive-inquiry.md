# Evidence and adaptive inquiry

An agent has two jobs before acting: find out what is happening, and inspect what it has committed to doing. Those jobs compete for the same finite time. A useful discovery in one can change how much work remains for the other. The question is whether acting on that discovery gives a provable advantage over deciding the allocation in advance.

Here the answer is exact. In a specified sensor family, the first useful calibration count is $L$. The first shared budget at which adaptive allocation beats every fixed-count allocation is **$L+2$**. The stronger worked example needs four inquiry opportunities. Its advantage comes from using the effort saved by an early endorsement certificate to cross a factual decision threshold.

This chapter contains the complete model and proof from Section 6 of the published paper. The source law specializes a single-coin reliability model [15], and the allocation problem belongs to metalevel decision theory [11]. Its reward combines factual accuracy and agreement with retained commitments. Neither component is a test of moral rightness.

## The source and the clock

A stationary hidden regime $\theta\in\{0,1\}$ has equal prior probabilities. The three sensor skills are

$$
a^{(0)}=(u,v,w),\qquad a^{(1)}=(v,u,w),\qquad
0<u<v<1,\quad 0<w<1,\quad v>\frac{u+w}{1+uw}.\tag{6.1}
$$

Each fresh item has an independent fair label $X\in\{-1,+1\}$. Its outputs are $Y_i=XE_i$. Conditional on the regime, errors are independent across sensors and items, with $\mathbb E[E_i\mid\theta]=a_i^{(\theta)}$. A skill $a$ therefore means accuracy $(1+a)/2$. The complete joint law is

$$
f_\theta(x,y):=\Pr_\theta(X=x,Y=y)
=\frac12\prod_{i=1}^3\frac{1+xy_i a_i^{(\theta)}}2.\tag{6.2}
$$

The controller knows this family and the positive orientation of the skills. It receives neither the regime nor the true labels of calibration items. Independence, stationarity, orientation and restriction to this family are assumptions. Unlabeled agreement cannot establish them all: reversing every skill and every hidden label preserves the observable law while reversing the correct prediction.

Three retained endorsement signs $e_1,e_2,e_3$ are independent and fair in the benchmark distribution, and independent of the source. The installed charter requires the operative priority to equal $\operatorname{maj}(e_1,e_2,e_3)$. Priority has its own register. Installing the majority can retain or revise that priority, but **the majority charter stays fixed in this experiment**. Changing the charter itself is the separate [editable-rule construction](/consciousness/agency/revising-an-evaluative-rule).

There are at most $B$ inquiry opportunities. One opportunity buys either a complete raw sensor triple on a fresh calibration item or one previously unread endorsement. The controller can choose the operation and named endorsement index from its entire acquired history and an independent random seed; it may stop early. The final target triple arrives only after inquiry. It cannot guide earlier requests. Success requires both a correct target prediction and a correct installed endorsement majority.

The initially accessible state, including the old priority, is independent of regime and endorsements. There is no initial advice, timing signal or extra output port that reveals them. Without that restriction the problem changes: an already visible correct majority would give zero-query joint success $b$, rather than $b/2$.

A query unit compares information access. It is not a universal energy unit. Computation, memory, ingress, routing and clocks receive separate charges in the [realization](/consciousness/agency/faithful-native-realization). A physically retained record does not automatically give the executive a free read.

## Information can improve before decisions do

Compress each calibration triple to a signed increment:

$$
Z(y)=\begin{cases}
+1,&y_1=y_3\ne y_2,\\
-1,&y_2=y_3\ne y_1,\\
0,&\text{otherwise},
\end{cases}
\qquad S_n=\sum_{j=1}^n Z(Y^{(j)}).\tag{6.3}
$$

Summing the source law over its hidden label gives

$$
\Pr_\theta(Y=y)=\frac{1+a_1a_2y_1y_2+a_1a_3y_1y_3+a_2a_3y_2y_3}{8},
$$

where the skills are those of the chosen regime. Put

$$
\begin{aligned}
p_-&=\frac{1-uv+w(v-u)}4,&p_+&=\frac{1-uv-w(v-u)}4,\\
p_0&=\frac{1+uv}2,&\rho&=\frac{p_-}{p_+},\\
A&=v-u-w(1-uv),&D&=v-u+w(1-uv).
\end{aligned}\tag{6.4}
$$

Under regime zero, $(Z=-1,0,+1)$ has probabilities $(p_-,p_0,p_+)$. Under regime one, the outer probabilities exchange places. Every raw triple with $Z=0$ has the same probability in both regimes. Thus every complete calibration history has regime-one to regime-zero likelihood ratio $\rho^{S_n}$, giving the exact posterior

$$
\pi(s):=\Pr(\theta=1\mid S_n=s)=\frac{\rho^s}{1+\rho^s}.\tag{6.5}
$$

No supplied confidence flag enters this calculation. Let $b$ be target-majority accuracy and $c$ the accuracy available if the regime were revealed:

$$
b=\frac{2+u+v+w-uvw}{4},\qquad c=\frac{1+v}{2}.\tag{6.6}
$$

The dominance condition makes the stronger sensor's log-odds weight exceed the other two combined. Following that sensor attains $c$.

### Proposition 6.1: the sharp calibration threshold

Before seeing the target triple, optimal expected target accuracy conditional on calibration score $s$ is

$$
M(s)=\max\left\{b,\frac{1+u}{2}+\frac{v-u}{2}\max\{\pi(s),1-\pi(s)\}\right\}.\tag{6.7}
$$

Define

$$
L=\min\{n\ge1:\rho^n>D/A\}.\tag{6.8}
$$

Then $L\ge2$, $b\le M(s)\le c$, and $M(s)=b$ for $|s|<L$. Exactly $L$ calibrations first permit strict improvement. Writing $C_L=\mathbb E[M(S_L)]$,

$$
C_L-b=\frac{Ap_-^L-Dp_+^L}{4}>0.\tag{6.9}
$$

An attaining classifier follows sensor one for $s\ge L$, sensor two for $s\le-L$, and target majority otherwise. At an exact likelihood threshold it may retain majority.

**Proof.** For each target cue $y$, its signed truth margin is

$$
d_\theta(y):=f_\theta(+1,y)-f_\theta(-1,y)
=\frac{\sum_i a_i^{(\theta)}y_i+uvw\,y_1y_2y_3}{8}.
$$

At posterior odds $\ell$, the Bayes action has the sign of $d_0(y)+\ell d_1(y)$. For $y=(+1,-1,+1)$ the margins are $-A/8$ and $D/8$. Swapping the first two sensors or reversing all signs generates the remaining disagreement cases. The only positive switching thresholds are $A/D$ and $D/A$. If the first two sensors agree, their sign is optimal in both regimes: the potentially competing margin $u+v-w-uvw$ is positive because dominance implies $v>w$. The Bayes rule therefore selects among target majority and the two individual sensor followers. Their accuracies yield (6.7).

Majority has accuracy $b$ in each regime, so it also has that value at every posterior. Revealing the regime gives upper bound $c$. Set $d=v-u$ and $f=1-uv$. The assumptions give $0<d<f$, $d>wf$, and

$$
1<\rho=\frac{f+wd}{f-wd}<\frac{d+wf}{d-wf}=D/A.
$$

Therefore $L\ge2$. Fewer acquisitions can move the posterior without crossing a decision threshold.

At acquisition $L$, only $S_L=\pm L$ crosses the threshold. Under regime zero those events have probabilities $p_+^L$ and $p_-^L$. Following the strong sensor gains $c-b=A/4$ relative to majority; following the weak one loses $D/4$. This proves (6.9), which is positive because $\rho^L>D/A$. Swapping sensor identities and regimes preserves the classifier's accuracy. Its regime accuracies agree, so the equal-prior optimum is also minimax. ∎

The pointwise plateau matters: an evidence task with only an average plateau need not have the allocation optimum below. Nor is there a uniform finite bound on $L$. With $u<v$ fixed, taking $w\uparrow(v-u)/(1-uv)$ sends $D/A$ to infinity while $\rho$ remains finite. The oracle gain also shrinks. This is not a constant-gap hardness result.

## The first budget where adaptation wins

Let $V(B)$ denote the best joint success among all admitted adaptive policies. Let $F(B)$ denote the best success when the counts of the two query types are fixed before their outcomes, allowing independent random mixtures of allocations. Query order and terminal decisions can still use acquired data. This restriction differs from a fixed test order that can stop as soon as a Boolean certificate appears [12].

After $a$ endorsement reads with signed sum $h$, the best majority-completion probability is

$$
J(a,h)=\begin{cases}
1/2,&(a,h)=(0,0)\text{ or }(2,0),\\
3/4,&a=1,\\
1,&a=3\text{ or }(a=2,|h|=2).
\end{cases}\tag{6.10}
$$

For every complete acquired transcript, the posterior factors between regime and unread endorsements. Conditional on that transcript and an independent policy seed, the request choices add no hidden-state likelihood factors. Sensor readings contribute regime likelihoods; endorsement reads contribute only revealed-bit likelihoods. This remains true when dispatch uses the complete raw transcript. Optimal terminal joint success is consequently $M(s)J(a,h)$.

### Theorem 6.2: exact optimum through the first advantageous budget

Under this contract,

$$
V(B)=F(B)=\begin{cases}
b/2,&B=0,\\
3b/4,&B=1,2,\\
b,&3\le B\le L+1,
\end{cases}
\qquad F(L+2)=b,\qquad V(L+2)=\frac{C_L+b}{2}>b.\tag{6.11}
$$

The first strict adaptive advantage occurs at $B=L+2$, with exact magnitude

$$
\Delta:=V(L+2)-F(L+2)=\frac{Ap_-^L-Dp_+^L}{8}.\tag{6.12}
$$

An optimal policy reads two endorsements first. If they agree, it uses $L$ queries for calibration. If they disagree, it reads the third endorsement and uses $L-1$ queries for calibration. Both branches install the exact majority.

**Proof.** First note the strict oracle comparison

$$
8(b-3c/4)=1+2u-v+2w-2uvw>0.\tag{6.13}
$$

At budget $L+2$, a terminal history with three endorsement reads permits at most $L-1$ calibrations and has value at most $b$. Zero or one endorsement read permits value at most $c/2$ or $3c/4$, both below $b$. Two disagreeing endorsements give at most $c/2$. Only two agreeing endorsements together with exactly $L$ calibrations can exceed $b$. These are the only exceptional histories, including policies that stop early.

To bound them without assuming that stopping is independent of evidence, pre-sample a calibration stream and an independent stream of three fair endorsement responses. Whenever a previously unread named endorsement is requested, assign it the next response. Conditional on each history, every unread named bit remains independent and fair, so this lazy assignment has the original law. Assign unused responses after stopping if needed. Conditioning on the policy seed handles randomized dispatch.

Let $G$ be agreement of the first two endorsement responses. Its probability is $1/2$, independently of the first $L$ calibration responses. On an exceptional history the score is their sum $S_L$. Since $M(S_L)-b\ge0$, every policy's terminal conditional value is bounded pointwise by

$$
b+\mathbf1_G[M(S_L)-b].\tag{6.14}
$$

The actual event of reaching an exceptional history need not be independent of calibration; only the dominating event $G$ is used. Expectations give $V(L+2)\le(C_L+b)/2$. The stated policy attains equality. Agreement certifies the majority after two reads and leaves $L$ calibrations. Disagreement consumes the third read and leaves $L-1$, where target value stays $b$.

For fixed allocations, three endorsement reads leave at most $L-1$ calibrations and attain $b$. At most two endorsement reads give average endorsement accuracy at most $3/4$. Even with the regime revealed, their joint value is at most $3c/4<b$. Conditioning evidence policies on inspected endorsements does not improve that oracle bound, and randomized fixed allocations are convex combinations. Thus $F(L+2)=b$.

For $3\le B\le L+1$, histories with two or three endorsement reads have fewer than $L$ calibrations and value at most $b$; histories with fewer reads obey (6.13). Reading all three endorsements and using target majority attains $b$.

With no queries, the unobserved endorsement majority is fair, giving $b/2$. One endorsement read gives $3b/4$; one calibration cannot improve target accuracy. At budget two, calibration followed by an endorsement gives $3b/4$. Two calibrations without endorsements give at most $c/2<3b/4$. After a first endorsement, calibration leaves value $3b/4$; a second endorsement also gives that expected value because agreement and disagreement each have probability $1/2$ and completion values $1$ and $1/2$. Earlier stopping improves none of these cases. Fixed policies attain the bounds. Equation (6.9) supplies the exact gap. ∎

The attaining policies are invariant under exchanging sensors and regime labels, so their values also optimize worst-regime success. This remains an average over the fair endorsement distribution, not a worst-case guarantee over endorsement vectors.

## Two exact benchmarks

| Quantity | Threshold-four instance | Threshold-two instance |
|:--|:--|:--|
| $(u,v,w)$ | $(1/4,3/4,1/2)$ | $(1/16,15/16,1/2)$ |
| $\rho$ | $17/9$ | $353/129$ |
| $D/A$ | $29/3$ | $689/207$ |
| $L$; first shared budget | $4$; $6$ | $2$; $4$ |
| $F(L+2)=b$ | $109/128$ | $1777/2048$ |
| $V(L+2)$ | $1828746691/2^{31}$ | $1870483759/2^{31}$ |
| $\Delta$ | $30147/2^{31}$ | $7164207/2^{31}$ |
| Gain in percentage points | $0.0014038291$ | $0.3336093854$ |

*Table 1. Exact query optima under the same access grammar. They do not assert optimal gate count or unrestricted device optimality.*

The second gap is about 237.64 times the first, with four rather than six inquiry units. Its absolute gain is about 0.33361 percentage points. That ratio compares advantages over fixed allocation, not overall success probabilities.

The publication reports exact rational dynamic-programming checks of nine parameter instances, with thresholds $2,3,4,5,7,8,12$, covering every budget through $L+2$ and 4,430 sufficient-state computations. A separate raw-posterior calculation for the stronger example uses all 16 regime/endorsement hypotheses, all eight raw responses and every named unread endorsement port. Its 261 states reproduce budgets zero through four without importing the sufficient-score formula. These reported checks supplement the proof; a finite grid does not establish the family theorem.

The strict inequality in the definition of $L$ is essential. At $(u,v,w)=(1/10,19/25,1/5)$, $\rho=4/3$ and $D/A=16/9=\rho^2$. Two calibrations can reach a Bayes tie but cannot improve accuracy. Hence $L=3$ and the first adaptive advantage occurs at budget five. The paper's separate raw-posterior check admits all named ports, all raw responses, interleaving and early stopping, and reproduces the analytic values through that budget.

## Why short-sighted inquiry misses the gain

Initially a single calibration has zero decision value. After $L-1$ same-sign nonzero increments, one more has strictly positive expected value: a matching increment crosses the threshold, while the other successors retain value $b$. This posterior utility therefore fails the adaptive diminishing-returns condition [8]. Non-myopic information value is established decision theory [11]; the new result solves its interaction with this retained-endorsement task exactly.

Acquiring information, deciding what to inspect next, and installing the resulting priority are distinct causal operations. A compiled table implementing the same admissible policy has the same competence. The gain does not require an uncaused selector or prove the historical independence of its commitments. It shows how bounded organization can put evidence and retained commitments to work, with an exact cost for fixing their query allocation too early.
