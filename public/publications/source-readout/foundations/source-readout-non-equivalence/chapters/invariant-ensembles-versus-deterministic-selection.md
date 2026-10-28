# Invariant ensembles versus deterministic selection

<div id="sec:probabilistic">

</div>

The obstruction of [Example 7.3](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#ex:occ) is an obstruction to equivariant *deterministic* selection. Weakening the demand from a point of the fiber to a probability distribution over the fiber removes it, and it is important to see both that this is so and that it does not amount to reconstruction. Making this precise requires typing the weakened object correctly: it is not a section of $p$, because its values do not lie in $S$.

## Fiber-supported probability kernels

The only application in this paper is the finite model of [Section 7](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#sec:occupation), and the construction is stated accordingly: everything below is discrete, and no measure-theoretic apparatus is required or invoked.

For a set $X$, let $\mathcal{P}_{\mathrm{fin}}(X)$ denote the set of *finitely supported probability distributions* on $X$: functions $\nu\colon X\to[0,1]$ that vanish outside a finite subset and satisfy $\sum_{x\in X}\nu(x)=1$, the sum having only finitely many nonzero terms. For $\nu\in\mathcal{P}_{\mathrm{fin}}(X)$ define the *algebraic support* $$
\operatorname{supp}(\nu):=\{\,x\in X:\nu(x)>0\,\},\tag{34}$$ a finite set. For $x\in X$ write $\delta_{x}\in\mathcal{P}_{\mathrm{fin}}(X)$ for the point distribution, $\delta_{x}(x)=1$ and $\delta_{x}(y)=0$ for $y\neq x$. For a map $f\colon X\to Y$ the *discrete pushforward* $f_{\ast}\nu\in\mathcal{P}_{\mathrm{fin}}(Y)$ is $$
(f_{\ast}\nu)(y):=\sum_{x\in f^{-1}(y)}\nu(x),\tag{35}$$ a finite sum, since only the finitely many points of $\operatorname{supp}(\nu)$ contribute. Note $f_{\ast}\delta_{x}=\delta_{f(x)}$.

<div class="definition">

**Definition 8.1** (Probability-valued lift).

<div id="def:kernel">

</div>

A *probability-valued lift* of $p\colon S\to T$, equivalently a *fiber-supported probability kernel*, is a map $$
\mu\colon T\longrightarrow\mathcal{P}_{\mathrm{fin}}(S),
\qquad
t\longmapsto\mu_{t},\tag{36}$$ such that each $\mu_{t}$ is supported on the fiber over $t$: $$
\operatorname{supp}(\mu_{t})\subseteq F_{t},
\qquad\text{equivalently}\qquad
p_{\ast}\mu_{t}=\delta_{t}
\qquad (t\in T).\tag{37}$$ If a group $G$ acts on $S$ and $T$ with $p$ equivariant, the lift $\mu$ is *equivariant* when $$
g_{\ast}\mu_{t}=\mu_{g\cdot t}
\qquad\text{for all }g\in G,\ t\in T.\tag{38}$$

</div>

The two formulations of [(37)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:kernelsupport) agree, by [(35)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:pushforward) applied to $p$. Indeed $(p_{\ast}\mu_{t})(t')=\sum_{s\in F_{t'}}\mu_{t}(s)$, so $p_{\ast}\mu_{t}=\delta_{t}$ holds precisely when this sum is $1$ for $t'=t$ and $0$ for every $t'\neq t$; since the fibers partition $S$ and $\mu_{t}\geq 0$, that is precisely the condition that $\mu_{t}$ vanish off $F_{t}$, i.e. $\operatorname{supp}(\mu_{t})\subseteq F_{t}$.

The relationship to sections is exactly this: a section $\sigma$ of $p$ induces the probability-valued lift $t\mapsto\delta_{\sigma(t)}$, which satisfies [(37)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:kernelsupport) because $\sigma(t)\in F_{t}$, and which is equivariant in the sense of [(38)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:kernelequiv) precisely when $\sigma$ is equivariant in the sense of [(21)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivsection), since $g_{\ast}\delta_{x}=\delta_{g\cdot x}$. The deterministic selectors thus embed among the probability-valued lifts as exactly the point-distribution-valued ones. A probability-valued lift is emphatically not a map $T\to S$, and calling it a section would misdescribe its type; the question below is whether the larger class contains an equivariant member when the point-distribution-valued subclass does not.

## The finite model

<div class="proposition">

**Proposition 8.2** (An equivariant probability-valued lift exists).

<div id="prop:ensemble">

</div>

*In the model of [Section 7](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#sec:occupation), for each $n\in T$ let $\mu_{n}\in\mathcal{P}_{\mathrm{fin}}(S)$ be the uniform distribution on the finite fiber $F_{n}$: $$
\mu_{n}(s)=\frac{1}{|F_{n}|}\ \ (s\in F_{n}),
\qquad
\mu_{n}(s)=0\ \ (s\in S\setminus F_{n}).\tag{39}$$ This lies in $\mathcal{P}_{\mathrm{fin}}(S)$ because $F_{n}$ is finite, by [Proposition 7.1](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#prop:multinomial). Then $n\mapsto\mu_{n}$ is a fiber-supported probability kernel in the sense of [Definition 8.1](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#def:kernel), each $\mu_{n}$ is invariant under the stabilizer $G_{n}=S_{N}$, and the kernel is $S_{N}$-equivariant. Hence an equivariant probability-valued lift of $p$ exists even though, by [(33)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occfixempty), no equivariant deterministic section exists.*

</div>

<div class="proof">

*Proof.* *Fiber support.* By construction $\mu_{n}$ vanishes off $F_{n}$, so $\operatorname{supp}(\mu_{n})\subseteq F_{n}$, and by the equivalence noted after [Definition 8.1](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#def:kernel) this is [(37)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:kernelsupport), i.e. $p_{\ast}\mu_{n}=\delta_{n}$.

*Stabilizer invariance.* By [(18)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:fibertransport) and the triviality of the $S_{N}$-action on $T$, each $g\in S_{N}$ maps $F_{n}$ bijectively onto $F_{g\cdot n}=F_{n}$. Writing $g$ also for the induced bijection $s\mapsto g\cdot s$ of $S$, the discrete pushforward [(35)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:pushforward) along a bijection is $(g_{\ast}\mu_{n})(s)=\mu_{n}(g^{-1}\cdot s)$, since $g^{-1}(s)$ is the single point $g^{-1}\cdot s$. Hence for $s\in F_{n}$ we have $g^{-1}\cdot s\in F_{n}$ and $$(g_{\ast}\mu_{n})(s)=\mu_{n}(g^{-1}\cdot s)=\frac{1}{|F_{n}|}=\mu_{n}(s),$$ while for $s\notin F_{n}$ both sides vanish, because $g^{-1}\cdot s\notin F_{n}$. Thus $g_{\ast}\mu_{n}=\mu_{n}$ for every $g\in S_{N}$: each $\mu_{n}$ is $G_{n}$-invariant.

*Equivariance.* Condition [(38)](/source-readout/source-readout-non-equivalence/invariant-ensembles-versus-deterministic-selection#eq:kernelequiv) requires $g_{\ast}\mu_{n}=\mu_{g\cdot n}$. The left side equals $\mu_{n}$ by the invariance just proved, and the right side equals $\mu_{n}$ because $S_{N}$ acts trivially on $T$, so $g\cdot n=n$. The two sides agree.

The nonexistence of an equivariant deterministic section is [(33)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occfixempty), established in [Example 7.3](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#ex:occ). ◻

</div>

## An ensemble is not a realized state

The contrast is precise, and it locates the obstruction correctly. Symmetry is capable of determining a distinguished *ensemble* over a fiber: here the uniform distribution is in fact the unique $S_{N}$-invariant element of $\mathcal{P}_{\mathrm{fin}}(S)$ supported on $F_{n}$, since invariance under a transitive action forces equal weights on all points of the fiber. What symmetry cannot do is single out a *point*. The reason is visible in the proof: the object that survives the group action is precisely the object that has forgotten which element of the fiber it is concentrated on.

Consequently an equivariant probability-valued lift is not a reconstruction of the realized source state, and the existence of the former is no evidence for the availability of the latter. In any given realization one specific assignment $s\in F_{n}$ obtains ,  one specific marked carrier is the one sitting alone in cell $1$ ,  and $\mu_{n}$ assigns that assignment probability $1/|F_{n}|$, exactly the same weight it assigns to every other element of the fiber. The kernel $\mu$ is a correct, symmetry-compatible description of the readout-conditional uncertainty about $s$; it is not, and does not become, a determination of $s$. Nothing in $\mu_{n}$ distinguishes the realized state from the $|F_{n}|-1$ states that were not realized.

The general moral is that weakening the target of reconstruction weakens the conclusion by exactly as much. A statistical reconstruction and an exact realization reconstruction are different mathematical tasks with different success conditions, and success at the first is silent about the second.
