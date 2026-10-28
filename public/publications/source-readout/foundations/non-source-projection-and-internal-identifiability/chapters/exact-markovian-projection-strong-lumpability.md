# Exact Markovian projection: strong lumpability

<div id="sec:lumpability">

</div>

The dynamical descent problem of §[5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#sec:dynamics) has a sharp stochastic counterpart, in which the question “does the projected process close?” admits a complete and checkable answer.

<div class="definition">

**Definition 9.1** (Setting and conventions).

<div id="def:chain">

</div>

Let $S=\{1,\dots,N\}$ be a finite source state space and let $(X_t)_{t\ge0}$ be a continuous-time, time-homogeneous Markov chain on $S$ with generator $G=(g_{ij})_{i,j\in S}$ satisfying the standard conventions $$
g_{ij}\ge0\ \ (i\neq j),\qquad \sum_{j\in S}g_{ij}=0\quad\text{for every }i ,\tag{31}$$ so that $g_{ii}=-\sum_{j\neq i}g_{ij}\le0$. Transition probabilities are $P(t)=e^{tG}$, and a row-vector law $\pi(t)$ obeys the (forward) master equation $$
\dot\pi_j(t)=\sum_{i\in S}\pi_i(t)\,g_{ij}.\tag{32}$$ For $f\colon S\to\mathbb R$ the backward generator acts by $(Gf)(i)=\sum_{j}g_{ij}f(j)$.

Let $p\colon S\to T$ be a surjection onto a finite set $T$, partitioning $S$ into the *blocks* $$B_a:=p^{-1}(a),\qquad a\in T .$$

</div>

<div class="definition">

**Definition 9.2** (Strong lumpability).

<div id="def:lumpable">

</div>

The chain is *strongly lumpable* with respect to $p$ if, for *every* initial source distribution $\pi(0)$, the projected process $\bigl(p(X_t)\bigr)_{t\ge0}$ is a time-homogeneous Markov chain on $T$ whose transition law depends on the initial data only through the initial block distribution $\bar\pi(0)$.

</div>

The quantifier “for every initial distribution” is the whole point, and it is what distinguishes *strong* lumpability from the weaker, initial-distribution-dependent notion. A projected process can perfectly well be Markov for one carefully chosen $\pi(0)$ ,  e.g. one supported on a single state, or a stationary within-block law ,  while failing to be Markov for another. Such a coincidence gives an observer a Markov description that is valid for their particular preparation and invalid in general. Strong lumpability demands that the projected description be *universally* valid, and that is the property that corresponds to genuine closure of the readout dynamics in the sense of §[5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#sec:dynamics).

<div class="theorem">

**Theorem 9.3** (Strong lumpability).

<div id="thm:lumpability">

</div>

*The chain is strongly lumpable with respect to $p$ if and only if the *block-sum condition* holds: $$
\sum_{j\in B_b}g_{ij}\;=\;\sum_{j\in B_b}g_{i'j}
\qquad\text{for all blocks }B_a,B_b\ \text{and all }i,i'\in B_a .\tag{33}$$ In that case the common value $$
\bar g_{ab}:=\sum_{j\in B_b}g_{ij}\qquad(\text{any }i\in B_a)\tag{34}$$ is well defined and $\bar G=(\bar g_{ab})$ is a valid Markov generator on $T$, which generates the projected chain.*

</div>

<div class="proof">

*Proof.* **Necessity.** Suppose the projected process is Markov for every initial distribution, with a transition law determined by $\bar\pi(0)$. Fix a block $B_a$ and $i,i'\in B_a$, and consider the two initial distributions $\delta_i$ and $\delta_{i'}$. Both project to the same initial block law, namely $\delta_a$ on $T$. Hence by hypothesis the projected chains started from $\delta_i$ and from $\delta_{i'}$ have the *same* law, and in particular the same instantaneous transition rate out of $a$ into any block $B_b$ with $b\neq a$.

Compute that rate from the source. Starting at $i$, for $b\neq a$, $$\Pr\bigl[p(X_h)=b \mid X_0=i\bigr]=\sum_{j\in B_b}\bigl(e^{hG}\bigr)_{ij}
=\sum_{j\in B_b}\bigl(\delta_{ij}+h\,g_{ij}+O(h^2)\bigr)
=h\sum_{j\in B_b}g_{ij}+O(h^2),$$ where $\delta_{ij}=0$ for $j\in B_b$ since $i\in B_a$ and $B_a\cap B_b=\varnothing$. Dividing by $h$ and letting $h\downarrow0$, the instantaneous $a\to b$ rate from $i$ is $\sum_{j\in B_b}g_{ij}$, and likewise from $i'$ it is $\sum_{j\in B_b}g_{i'j}$. Equality of the two projected laws forces $$\sum_{j\in B_b}g_{ij}=\sum_{j\in B_b}g_{i'j}\qquad(b\neq a).$$ For $b=a$ the condition follows from [(31)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:generator): since row sums vanish, $$\sum_{j\in B_a}g_{ij}=-\sum_{b\neq a}\sum_{j\in B_b}g_{ij}=-\sum_{b\neq a}\sum_{j\in B_b}g_{i'j}=\sum_{j\in B_a}g_{i'j}.$$ This is [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum).

**Sufficiency.** Assume [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum), so that $\bar g_{ab}$ in [(34)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:projgen) is well defined.

*$\bar G$ is a generator.* For $a\neq b$ and $i\in B_a$, every $j\in B_b$ satisfies $j\neq i$, so $g_{ij}\ge0$ by [(31)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:generator); hence $\bar g_{ab}=\sum_{j\in B_b}g_{ij}\ge0$. And the row sums vanish: $$\sum_{b\in T}\bar g_{ab}=\sum_{b\in T}\sum_{j\in B_b}g_{ij}=\sum_{j\in S}g_{ij}=0 ,$$ using that the blocks partition $S$. So $\bar G$ satisfies [(31)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:generator) on $T$.

*(1) Closure of the block probabilities.* Let $\pi(t)$ solve [(32)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:master) and set $\bar\pi_a(t):=\sum_{i\in B_a}\pi_i(t)$. Then $$\begin{aligned}
\dot{\bar\pi}_b(t)
&=\sum_{j\in B_b}\dot\pi_j(t)
=\sum_{j\in B_b}\sum_{i\in S}\pi_i(t)\,g_{ij}
=\sum_{a\in T}\sum_{i\in B_a}\pi_i(t)\Bigl(\sum_{j\in B_b}g_{ij}\Bigr)\\
&=\sum_{a\in T}\sum_{i\in B_a}\pi_i(t)\,\bar g_{ab}
=\sum_{a\in T}\bar\pi_a(t)\,\bar g_{ab},
\end{aligned}$$ where the fourth equality is exactly [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum): the inner sum is the *same number* $\bar g_{ab}$ for every $i\in B_a$, so it factors out of the sum over $i\in B_a$ regardless of how $\pi(t)$ distributes mass *within* the block. Thus $\bar\pi$ obeys the closed master equation $\dot{\bar\pi}=\bar\pi\bar G$, for every initial $\pi(0)$.

*(2) Process-level Markovianity.* Closure of the one-time marginals is *not* by itself the Markov property, and we now establish the latter. Let $\mathcal F:=\{f\colon S\to\mathbb R\;:\;f\ \text{is constant on each block}\}$, and for $f\in\mathcal F$ write $f_b$ for its value on $B_b$. For $i\in B_a$, $$
(Gf)(i)=\sum_{j\in S}g_{ij}f(j)=\sum_{b\in T}\sum_{j\in B_b}g_{ij}f_b=\sum_{b\in T}f_b\Bigl(\sum_{j\in B_b}g_{ij}\Bigr)=\sum_{b\in T}\bar g_{ab}f_b ,\tag{35}$$ using [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum) in the last step. The right-hand side depends on $i$ only through its block $a$. Hence $Gf\in\mathcal F$: the subspace $\mathcal F$ of block-constant functions is invariant under $G$. Being finite-dimensional and $G$-invariant, $\mathcal F$ is invariant under $e^{tG}$ for all $t\ge0$ (expand the exponential; each partial sum preserves $\mathcal F$, and $\mathcal F$ is closed).

Apply this with $f=\mathbf 1_{B_b}\in\mathcal F$. Invariance gives that $i\mapsto\bigl(e^{tG}\mathbf 1_{B_b}\bigr)(i)=\Pr[p(X_t)=b\mid X_0=i]$ is constant on blocks: writing $\bar P_{ab}(t)$ for its common value on $B_a$, $$
\Pr\bigl[p(X_t)=b\mid X_0=i\bigr]=\bar P_{ab}(t)\qquad\text{for every }i\in B_a .\tag{36}$$ Moreover [(35)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:backwardinv) identifies the generator of $\bar P(t)$: reading [(35)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:backwardinv) in $\mathcal F\cong\mathbb R^{T}$ shows $G|_{\mathcal F}$ acts as $\bar G$, so $\bar P(t)=e^{t\bar G}$.

Now take any times $0\le t_1<\dots<t_n<t_{n+1}$, any blocks $b_1,\dots,b_{n+1}$, and any initial law $\pi(0)$. Write $$H:=\{p(X_{t_1})=b_1,\dots,p(X_{t_n})=b_n\}$$ for the projected past, and assume $\Pr[H]>0$; histories of zero probability impose no condition, since the Markov property is a statement about conditional probabilities, which are defined only on positive-probability events. (Equivalently, one may phrase the argument with regular conditional distributions, which exist automatically here because $S$ is finite; nothing changes.)

Let $\nu$ denote the conditional law of $X_{t_n}$ given $H$, i.e. $\nu(i):=\Pr[X_{t_n}=i\mid H]$. It is a probability measure supported in $B_{b_n}$, and it may depend intricately on the whole past $H$ and on $\pi(0)$. The Markov property of $X$ at time $t_n$, together with [(36)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blockconstant), gives $$
\begin{aligned}
\Pr\bigl[p(X_{t_{n+1}})=b_{n+1}\,\big|\,H\bigr]
&=\sum_{i\in B_{b_n}}\nu(i)\;\Pr\bigl[p(X_{t_{n+1}-t_n})=b_{n+1}\,\big|\,X_0=i\bigr]\\[2pt]
&=\sum_{i\in B_{b_n}}\nu(i)\;\bar P_{b_nb_{n+1}}(t_{n+1}-t_n)\\[2pt]
&=\bar P_{b_nb_{n+1}}(t_{n+1}-t_n),
\end{aligned}\tag{37}$$ where the second equality is [(36)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blockconstant) ,  the summand is *independent of $i$* ,  and the third follows because $\nu$ is a probability measure on $B_{b_n}$, so its masses sum to $1$. The right-hand side of [(37)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:processmarkov) depends on the past only through $b_n$, and on the times only through $t_{n+1}-t_n$. This is exactly the Markov property with time-homogeneous transition semigroup $\bar P(t)=e^{t\bar G}$, and it holds for *every* $\pi(0)$ ,  which is the assertion of strong lumpability.

The crux, and the reason marginal closure alone would not suffice, is visible in [(37)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:processmarkov): the unknown within-block conditional law $\nu$ ,  which is precisely the information the readout discards, and which *does* depend on the whole past ,  drops out only because $\bar P_{b_n b_{n+1}}$ does not depend on which $i\in B_{b_n}$ carries the mass. That independence is [(36)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blockconstant), i.e. [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum). ◻

</div>

<div class="corollary">

**Corollary 9.4** (Failure of lumpability).

<div id="cor:nonmarkov">

</div>

*Suppose [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum) fails: there are a block $B_a$, states $i,i'\in B_a$, and a block $B_b$ with $\sum_{j\in B_b}g_{ij}\neq\sum_{j\in B_b}g_{i'j}$. Then the two initial distributions $\delta_i$ and $\delta_{i'}$ ,  which have the *same* projected initial state $a$ ,  generate different instantaneous projected transition rates into $b$. Consequently the instantaneous readout state is insufficient for a universal Markov description of the projected process.*

</div>

<div class="proof">

*Proof.* The instantaneous rates were computed in the necessity half of Theorem [9.3](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#thm:lumpability) to be $\sum_{j\in B_b}g_{ij}$ and $\sum_{j\in B_b}g_{i'j}$, which differ by hypothesis. A time-homogeneous Markov generator on $T$ would assign a single rate $\bar g_{ab}$ to the projected state $a$, contradiction. ◻

</div>

<div class="remark">

*Remark 56* (What failure of lumpability does and does not establish).

<div id="rem:lumpscope">

</div>

Corollary [9.4](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#cor:nonmarkov) is a *negative* result: the instantaneous projected state does not support a universal Markov law. It does *not* by itself establish that the projected process is governed by any *particular* memory kernel or non-Markovian equation. Producing such a kernel requires an additional reduction construction ,  a Nakajima–Zwanzig projection with a chosen within-block reference law, or a completion in the sense of Definition [4.3](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#def:sufficient) ,  and different choices give different kernels.

It is worth being exact about what determines the within-block conditional law $\nu$, since this is the discarded information. The generator $G$ *together with an initial distribution* $\pi(0)$ determines it: the pair $(G,\pi(0))$ fixes the full law of the source process, hence the conditional law of $X_t$ given any positive-probability projected history. The generator *alone* does not: without an initial law ,  equivalently, without a specification of how the system was prepared ,  there is no such thing as “the” within-block distribution, and different preparations consistent with the same projected state yield different $\nu$, which is exactly why Corollary [9.4](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#cor:nonmarkov) bites. Compare §[5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#subsec:faileddescent)(2): in the deterministic setting likewise, $(S,p,\Phi_t)$ does not determine the within-fiber distribution, which must be supplied. What is theorem here is the impossibility; what is modelling is the replacement.

</div>

<div class="example">

**Example 9.6** (A lumpable and a non-lumpable partition).

<div id="ex:lumpability">

</div>

Let $S=\{1,2,3\}$ with blocks $B_a=\{1,2\}$ and $B_b=\{3\}$, so $T=\{a,b\}$.

*(i) Lumpable.* Take $$G=\begin{pmatrix} -3 & 2 & 1\\ 1 & -2 & 1\\ 4 & 0 & -4\end{pmatrix},$$ which satisfies [(31)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:generator) (nonnegative off-diagonals, zero row sums). Check [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum) for the pair $i=1,i'=2\in B_a$: $$\sum_{j\in B_b}g_{1j}=g_{13}=1,\qquad \sum_{j\in B_b}g_{2j}=g_{23}=1 .$$ These agree, and the $B_a$ column sums then agree automatically by the row-sum identity ($g_{11}+g_{12}=-3+2=-1=1-2=g_{21}+g_{22}$). So the chain is strongly lumpable, with projected generator $$\bar G=\begin{pmatrix}\bar g_{aa} & \bar g_{ab}\\ \bar g_{ba} & \bar g_{bb}\end{pmatrix}
=\begin{pmatrix}-1 & 1\\ 4 & -4\end{pmatrix},$$ a valid generator. Note the internal states $1$ and $2$ exchange probability at rates $2$ and $1$ and are in no sense equivalent ,  the readout is genuinely noninjective, its fiber $B_a=\{1,2\}$ is a genuine two-element fiber (it is a set of two source states, not a vector space, and no dimension is being asserted of it), and the internal dynamics within the fiber is nontrivial ,  yet the projected process is *exactly* Markov for every initial condition. This is the stochastic analogue of Example [5.5](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#ex:fiberpreserving) and of Corollary [5.3](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#cor:coherence): closure of the projected law is no evidence of source completeness.

*(ii) Non-lumpable.* Now perturb a single entry: $$G'=\begin{pmatrix} -3 & 2 & 1\\ 5 & -8 & 3\\ 4 & 0 & -4\end{pmatrix},$$ again a valid generator. Test [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum): $$\sum_{j\in B_b}g'_{1j}=g'_{13}=1,\qquad \sum_{j\in B_b}g'_{2j}=g'_{23}=3,$$ and $1\neq3$. By Corollary [9.4](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#cor:nonmarkov), the projected process is not Markov for all initial distributions: started at $\delta_1$ the instantaneous $a\to b$ rate is $1$; started at $\delta_2$ it is $3$. Both have the same projected initial state $a$. A readout observer preparing what they take to be “the state $a$” will see different escape statistics depending on a source variable they cannot access, and no single Markov generator on $\{a,b\}$ reproduces both.

Observe finally the sense in which this is only a *negative* result, per Remark [9.5](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#rem:lumpscope): it tells us no Markov law on $T$ works universally. It does not tell us what *does* govern the projected process ,  that depends on the within-block law, which is precisely the discarded information.

</div>
