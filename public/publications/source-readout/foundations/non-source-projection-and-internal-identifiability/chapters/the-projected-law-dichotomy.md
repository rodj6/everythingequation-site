# The projected-law dichotomy

<div id="sec:dynamics">

</div>

## Descent of dynamics

<div class="definition">

**Definition 5.1** (Source evolution and autonomy).

<div id="def:dynamics">

</div>

Let $\Phi_t\colon S\to S$, $t\in\mathbb T$ (with $\mathbb T=\mathbb R_{\ge0}$ or $\mathbb N$), be a deterministic source evolution, i.e. $\Phi_0=\mathop{\mathrm{id}}_S$ and $\Phi_{t+t'}=\Phi_t\circ\Phi_{t'}$. The readout dynamics are *autonomous* if there exist maps $U_t\colon T_1\to T_1$ with $$
p\circ\Phi_t=U_t\circ p\qquad\text{for all }t\in\mathbb T .\tag{16}$$

</div>

[(16)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:autonomy) is the exact formalization of the statement “the present readout determines the future readout”. We stress that it is a *deterministic* and *instantaneous* demand: $U_t$ takes as input the readout state at one time, and nothing else ,  no history, no auxiliary variable, no distribution.

<div class="theorem">

**Theorem 5.2** (Projected-law dichotomy).

<div id="thm:dichotomy">

</div>

*Exactly one of the following holds.*

***Case I (fiber-preserving).** For all $t\in\mathbb T$ and all $s,s'\in S$, $$
p(s)=p(s')\ \Longrightarrow\ p(\Phi_t(s))=p(\Phi_t(s')).\tag{17}$$ Then there exist unique maps $U_t\colon T_1\to T_1$ satisfying [(16)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:autonomy), and they form a semigroup: $U_0=\mathop{\mathrm{id}}_{T_1}$, $U_{t+t'}=U_t\circ U_{t'}$. The readout law is autonomous.*

***Case II (fiber-breaking).** There exist $s_0,s_1\in S$ and $t>0$ with $$
p(s_0)=p(s_1),\qquad p(\Phi_t(s_0))\neq p(\Phi_t(s_1)).\tag{18}$$ Then *no* family of maps $U_t$ satisfies [(16)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:autonomy); no deterministic law on the instantaneous readout state reproduces every source trajectory.*

</div>

<div class="proof">

*Proof.* The two cases are the negation of one another, hence exhaustive and mutually exclusive.

**Case I.** Condition [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI) says precisely that, for each fixed $t$, the map $p\circ\Phi_t\colon S\to T_1$ is constant on the fibers of $p$. Since $p$ is surjective, Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) supplies a unique $U_t\colon T_1\to T_1$ with $p\circ\Phi_t=U_t\circ p$, namely $U_t(p(s)):=p(\Phi_t(s))$, well defined exactly by [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI). For the semigroup law, evaluate on an arbitrary $t_1=p(s)$ (surjectivity again): $$U_{t+t'}(p(s))=p(\Phi_{t+t'}(s))=p\bigl(\Phi_t(\Phi_{t'}(s))\bigr)=U_t\bigl(p(\Phi_{t'}(s))\bigr)=U_t\bigl(U_{t'}(p(s))\bigr),$$ and $U_0(p(s))=p(\Phi_0(s))=p(s)$.

**Case II.** Suppose some $U_t$ satisfied [(16)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:autonomy), and let $s_0,s_1,t$ be as in [(18)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseII). Then $$p(\Phi_t(s_0))=U_t(p(s_0))=U_t(p(s_1))=p(\Phi_t(s_1)),$$ where the middle equality uses $p(s_0)=p(s_1)$ and the fact that $U_t$ is a *function* of the readout state. This contradicts [(18)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseII). Hence no such $U_t$ exists. ◻

</div>

<div class="corollary">

**Corollary 5.3** (Coherence does not imply source completeness).

<div id="cor:coherence">

</div>

*Case I is compatible with $p$ noninjective. Autonomous, deterministic, internally coherent readout laws establish that the dynamics *preserves the readout equivalence classes*; they do *not* establish that those classes are singletons.*

</div>

<div class="proof">

*Proof.* It suffices to exhibit an instance, which Example [5.5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#ex:fiberpreserving) does. Formally: [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI) constrains $\Phi_t$ to map $\sim_p$-classes into $\sim_p$-classes; it places no constraint whatsoever on the cardinality of those classes. ◻

</div>

Corollary [5.3](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#cor:coherence) is the single most important negative result of this paper, and the one most easily lost. An observer inside $T_1$ in Case I sees a world with exact deterministic laws, perfectly closed, admitting no anomaly and no residue. That observer’s evidence is entirely consistent with $T_1$ being the whole of physical reality, and entirely consistent with $T_1$ being a proper quotient of a strictly larger source. *Dynamical closure is evidence of fiber preservation, not of fiber triviality.*

## What failed descent actually requires

<div id="subsec:faileddescent">

</div>

In Case II the instantaneous readout state is insufficient, and one must say for *what*. The three targets below are routinely conflated; they are not the same, and only the first is an exact reconstruction.

1.  *Exact trajectory prediction.* To recover $t\mapsto p(\Phi_t(s))$ for the individual realized $s$, one needs strictly more than $p(s)$: either additional state information (a completion variable, i.e. a refinement $e\colon S\to E$ sufficient for the target “future readout”, in the sense of Definition [4.3](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#def:sufficient)), or an equivalent history-dependent description that encodes the same information in the past of the trajectory. Which of the two one uses is a matter of representation; the information content required is fixed by the fiber structure.

2.  *Statistical prediction.* One may instead supply a probability distribution over the unresolved states within the fiber $p^{-1}(p(s))$. This yields a distribution over future readouts. But note carefully: this is a prediction *only after an additional probabilistic model is supplied* ,  namely the within-fiber distribution, which is *not* determined by the deterministic data $(S,p,\Phi_t)$. It is an addition to the model, not a consequence of it. And what it delivers is a law over futures, *not* an exact reconstruction of the individual source trajectory.

3.  *Memory representation.* One may retain a functional of the past readout. This is exact only when the past readout in fact determines the relevant fiber coordinate; in general it does not, and then memory too is only a partial substitute.

We do not assert that any of these is always available. Case II asserts a negative ,  that the instantaneous readout state does not suffice ,  and nothing more.

## The Hilbert-space instance

<div id="subsec:hilbert">

</div>

Specialize to Example [2.9](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#ex:linear): $S=\mathcal{H}_{\mathrm{src}}$, $p=K$ bounded with $\ker K$ closed, and let the source evolution be a strongly continuous group $\Phi_t=U(t)$ with generator $L$. The dichotomy takes an operator form.

<div class="proposition">

**Proposition 5.4** (Invariance criterion).

<div id="prop:invariance">

</div>

*The evolution $U(t)$ is fiber-preserving in the sense of [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI) if and only if $$
U(t)\ker K\subseteq\ker K\qquad\text{for all }t .\tag{19}$$*

</div>

<div class="proof">

*Proof.* Fibers of $K$ are the cosets $\Psi+\ker K$. Condition [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI) reads: $K\Psi=K\Psi'\Rightarrow KU(t)\Psi=KU(t)\Psi'$. Writing $n=\Psi'-\Psi$, the hypothesis is $n\in\ker K$ and the conclusion is $KU(t)n=0$, i.e. $U(t)n\in\ker K$. Quantifying over all $\Psi$ and all $n\in\ker K$ gives exactly [(19)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:kerinvariance). (Linearity of $U(t)$ and $K$ is used in both directions.) ◻

</div>

Now let $P$ be the orthogonal projection of $\mathcal{H}_{\mathrm{src}}$ onto the closed subspace $(\ker K)^{\perp}$, the “resolved” subspace, and $Q^{\!\perp}:=I-P$ the projection onto $\ker K$, the “unresolved” subspace. (We write $Q^{\!\perp}$ rather than $Q$ to avoid collision with the target $Q$ and with the generator of §[9](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#sec:lumpability); in the Mori–Zwanzig literature this operator is universally called $Q$.) For a bounded generator $L$, invariance [(19)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:kerinvariance) is equivalent to the infinitesimal condition $$
P\,L\,Q^{\!\perp}=0 ,\tag{20}$$ i.e. the generator does not map unresolved directions into resolved ones. Failure of [(20)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:PLQ) is Case II. Irrespective of whether [(20)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:PLQ) holds, the standard Nakajima–Zwanzig–Mori projection \[[13](/source-readout/non-source-projection-and-internal-identifiability/references#bib-Nakajima1958), [15](/source-readout/non-source-projection-and-internal-identifiability/references#bib-Zwanzig1960), [12](/source-readout/non-source-projection-and-internal-identifiability/references#bib-Mori1965)\] yields an exact identity for the resolved component, which for bounded $L$ we derive here by variation of constants, so that the manuscript remains self-contained.

Write $\Psi(t)=U(t)\Psi(0)$, so that $\dot\Psi=L\Psi$, and split it by the two projections: $$p(t):=P\Psi(t),\qquad q(t):=Q^{\!\perp}\Psi(t),\qquad \Psi(t)=p(t)+q(t).$$ (The letter $p$ here denotes the resolved component of the state, following the standard notation of the projection literature; it is not the readout map of §[2](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#sec:architecture), and no confusion should arise, as the readout does not appear in this derivation.) Since $P$ and $Q^{\!\perp}$ are constant projections with $P+Q^{\!\perp}=I$, applying each to $\dot\Psi=L\Psi=L(p+q)$ gives the coupled pair $$\begin{aligned}
\dot p&=P L P\,p+P L Q^{\!\perp} q, \qquad\text{(21)}\\
\dot q&=Q^{\!\perp} L P\,p+Q^{\!\perp} L Q^{\!\perp} q. \qquad\text{(22)}
\end{aligned}$$ Now read [(22)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZq) as an inhomogeneous linear equation for $q$, with generator $Q^{\!\perp}LQ^{\!\perp}$ and inhomogeneity $Q^{\!\perp}LP\,p(\tau)$ regarded as a given source term. Because $L$ is bounded, so is $Q^{\!\perp}LQ^{\!\perp}$, and $e^{tQ^{\!\perp}LQ^{\!\perp}}$ is a norm-continuous semigroup; variation of constants (equivalently, differentiating $e^{-tQ^{\!\perp}LQ^{\!\perp}}q(t)$ and integrating from $0$ to $t$) gives the unique solution $$
q(t)=e^{tQ^{\!\perp} L Q^{\!\perp}}q(0)
+\int_0^t e^{(t-\tau)Q^{\!\perp} L Q^{\!\perp}}\,Q^{\!\perp} L P\,p(\tau)\,d\tau .\tag{23}$$ Substituting [(23)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZqsol) into the term $PLQ^{\!\perp}q$ of [(21)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZp), and using $q(0)=Q^{\!\perp}\Psi(0)$ together with $p(\tau)=P\Psi(\tau)$, yields the exact identity $$
\frac{d}{dt}\,P\Psi(t)
= \underbrace{P L P\,\Psi(t)}_{\text{closed term}}
+ \underbrace{P L Q^{\!\perp} e^{tQ^{\!\perp} L Q^{\!\perp}} Q^{\!\perp}\Psi(0)}_{\text{unresolved-initial-state term}}
+ \underbrace{\int_0^t P L Q^{\!\perp} e^{(t-\tau)Q^{\!\perp} L Q^{\!\perp}} Q^{\!\perp} L P\;P\Psi(\tau)\,d\tau}_{\text{memory term}} .\tag{24}$$

Four points must be made about [(24)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZ), because it is the most frequently over-read equation in this circle of ideas.

*First: $P\Psi$ is a source-side coordinate, not the declared readout.* The projection formalism evolves $P\Psi$, the component of the source state in $(\ker K)^{\perp}$. The *declared readout* of our architecture, by contrast, is $K\Psi$. These are different objects living in different spaces, and the identification of the two requires an argument. Under the closed-range hypothesis it is available: the restriction $$K|_{(\ker K)^{\perp}}\colon (\ker K)^{\perp}\longrightarrow \mathop{\mathrm{Ran}}K$$ is a bounded linear bijection between Banach spaces (injective because $(\ker K)^{\perp}\cap\ker K=\{0\}$; surjective onto $\mathop{\mathrm{Ran}}K$ by the orthogonal decomposition $\Psi=P\Psi+Q^{\!\perp}\Psi$ and $K\Psi=KP\Psi$), and $\mathop{\mathrm{Ran}}K$ is closed, hence complete; so the bounded inverse theorem supplies a *bounded* inverse. Thus $P\Psi\mapsto K\Psi$ is a topological isomorphism, and the two observable-state descriptions are equivalent: convergence, boundedness, and continuity statements transfer between them. *Without* closed range this stability fails ,  the inverse need not be bounded ,  and although the set-theoretic quotient [(4)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:exactquotient) still holds, one may no longer freely trade $P\Psi$ for $K\Psi$ in any topological or approximation-theoretic claim.

*Second: [(24)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZ) is exact and deterministic.* No stochasticity, no coarse-graining approximation, and no thermodynamic limit has been invoked. The second and third terms are not noise; they are definite functionals of the initial unresolved data $Q^{\!\perp}\Psi(0)$ and of the resolved history $\{P\Psi(\tau)\}_{\tau\le t}$ respectively.

*Third: the exact relation between $PLQ^{\!\perp}=0$ and the vanishing of the two anomalous terms.* This must be stated with care, and the naive reading ,  that the two terms vanish or fail to vanish together ,  is false. The correct statement is:

- $PLQ^{\!\perp}=0$ is *equivalent* to autonomous closure for every source state (Proposition [5.4](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#prop:invariance) together with [(20)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:PLQ));

- when $PLQ^{\!\perp}=0$, *both* the unresolved-initial-state term and the memory kernel vanish identically, since each carries $PLQ^{\!\perp}$ as a left factor ,  recovering $\tfrac{d}{dt}P\Psi=PLP\,\Psi$. This is Theorem [5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#thm:dichotomy) in operator dress;

- conversely, if $PLQ^{\!\perp}\neq0$, then the *initial-state* response is nonzero *for some unresolved initial state* ,  choose $Q^{\!\perp}\Psi(0)$ with $PLQ^{\!\perp}\Psi(0)\neq0$ and evaluate at $t=0$;

- but the *memory kernel may nevertheless vanish separately*. It carries the additional right factor $Q^{\!\perp}LP$, so it vanishes identically whenever $Q^{\!\perp}LP=0$ ,  the case where the generator feeds unresolved directions into resolved ones but not conversely ,  and it may also vanish through cancellation in the intervening propagator $e^{(t-\tau)Q^{\!\perp}LQ^{\!\perp}}$.

We therefore do *not* claim that memory must be nonzero whenever closure fails. Failure of closure guarantees a nonzero initial-state response for some unresolved datum; it guarantees nothing about the memory term.

*Fourth: what the unresolved-initial-state term signifies.* It depends on $Q^{\!\perp}\Psi(0)$, which is exactly the fiber coordinate ,  the information the readout discards. Its presence is the analytic signature of the non-source projection: the projected law is not merely inconvenient but genuinely underdetermined by $P\Psi(t)$ alone. Calling the term “noise” is an additional modelling decision (cf. §[5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#subsec:faileddescent)(2)), not a theorem; and so, equally, is any replacement of it by a memory kernel.

## Examples

<div class="example">

**Example 5.5** (Noninjective but fiber-preserving: coherent laws without source completeness).

<div id="ex:fiberpreserving">

</div>

Let $S=\mathbb Z_2\times\mathbb Z_2=\{(x,y)\}$ with $x,y\in\{0,1\}$, all four states physically inequivalent. Let the readout forget the second coordinate: $$p(x,y)=x,\qquad T_1=\mathbb Z_2 .$$ Fibers are $p^{-1}(x)=\{(x,0),(x,1)\}$ ,  doubletons, so $p$ is not injective. Let the discrete-time source evolution be $$\Phi(x,y)=(x+1,\;y+1)\pmod 2 .$$ Then $p(\Phi(x,y))=x+1$ depends only on $x$, so [(17)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseI) holds and the readout law is autonomous: $$U(x)=x+1\pmod 2 .$$ An observer confined to $T_1$ sees a perfectly deterministic period-2 world, exactly predicted by an autonomous law, with no residue and no anomaly whatever. Yet $p$ is noninjective, and the hidden coordinate $y$ evolves nontrivially the entire time. This is Corollary [5.3](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#cor:coherence) in miniature: *the readout is closed and the source is strictly larger*. If, moreover, some target $Q$ depends on $y$ ,  say $a_Q(x,y)=y$ ,  then [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) holds for $s_0=(0,0)$, $s_1=(0,1)$, and by Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) the autonomous, coherent readout $T_1$ is a non-source projection relative to $Q$. Autonomy buys no protection against this.

</div>

<div class="example">

**Example 5.6** (Fiber-breaking: failure of autonomous projected evolution).

<div id="ex:fiberbreaking">

</div>

Keep $S=\mathbb Z_2\times\mathbb Z_2$ and $p(x,y)=x$, but now let $$\Phi(x,y)=(x+y,\;y)\pmod 2 ,$$ so that the hidden coordinate *drives* the visible one. Take $$s_0=(0,0),\qquad s_1=(0,1),\qquad p(s_0)=p(s_1)=0 .$$ One step gives $\Phi(s_0)=(0,0)$ and $\Phi(s_1)=(1,1)$, whence $$p(\Phi(s_0))=0\neq 1=p(\Phi(s_1)),$$ which is [(18)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:caseII). By Theorem [5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#thm:dichotomy), no map $U\colon T_1\to T_1$ can satisfy [(16)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:autonomy): it would have to send the single readout value $0$ to both $0$ and $1$. The readout observer sees the state $0$ sometimes remain $0$ and sometimes become $1$, with nothing in the readout to explain the difference.

What repairs it is instructive and matches §[5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#subsec:faileddescent) exactly. (i) *Completion:* adjoin $y$ ,  take $E=S$ with $e=\mathop{\mathrm{id}}$ ,  and the dynamics is deterministic and closed on $E$. Indeed the minimal sufficient extension for the target “next readout” is $E_Q=\mathop{\mathrm{Im}}(p,a_Q)$ with $a_Q(x,y)=x+y$, which one computes to be $\{(0,0),(0,1),(1,0),(1,1)\}$, i.e. all four pairs $(x,\,x+y)$ ,  a four-element set properly refining the two-element $T_1$, and in this instance recovering $S$. (ii) *Statistics:* posit a within-fiber distribution, say $y\sim\mathrm{Bernoulli}(\tfrac12)$ independent of $x$, sampled *once* at the initial time. It is essential to describe the resulting readout process correctly, and it is *not* a symmetric random walk with independent increments. Because $\Phi$ leaves $y$ fixed, the *same* sampled $y$ controls every subsequent step: $$x_{n+1}=x_n+y \pmod 2\qquad\text{for all }n,$$ with $y$ drawn once and thereafter constant. Hence:

- the *first* transition stays ($y=0$) or flips ($y=1$) with probability $\tfrac12$ each, which coincides with what a symmetric random walk would predict;

- all *subsequent* increments are *perfectly correlated* with the first, since the increment is the same $y$ at every step ,  the walk either never moves or alternates forever;

- consequently the observed history $(x_0,x_1)$ already reveals $y$ exactly, namely $y=x_1-x_0$, and every later step is thereafter deterministic;

- the projected process is therefore a *mixture of two deterministic trajectories* ,  the constant one and the period-two alternating one, each with weight $\tfrac12$ ,  and not an i.i.d. random walk.

The randomness is entirely in the *initial draw* of the fiber coordinate, not in the transitions. This is precisely the distinction the section is for: a within-fiber *distribution* is not a Markov *law on the instantaneous readout*. A genuine symmetric random walk on $\mathbb Z_2$ would resample an independent increment at every step and would have a well-defined Markov generator on $T_1$; the present process has neither, and indeed by Theorem [5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#thm:dichotomy) it cannot, since $\Phi$ is fiber-breaking. Note also that the Bernoulli law is an *extra assumption*: the deterministic data $(S,p,\Phi)$ does not supply it, and a different within-fiber law gives a different projected process. (iii) *Memory:* here $y$ is conserved and, as just computed, is exposed by the readout’s own first transition, so a one-step memory suffices to restore prediction. This is a special feature of this example ,  $y$ happens to be both conserved and immediately visible in the readout increment ,  and not a general remedy; in general the past readout need not determine the fiber coordinate at all.

</div>
