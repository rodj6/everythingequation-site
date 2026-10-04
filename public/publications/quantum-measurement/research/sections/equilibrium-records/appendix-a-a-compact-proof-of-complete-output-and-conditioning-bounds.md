# Appendix A: A compact proof of complete output and conditioning bounds

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\E = \mathbb E
\Prb = \mathbb P
\TV = d_{\rm TV}
\id = \operatorname{id}
\dd = \,\mathrm d
\cH = \mathcal H
\cS = \mathcal S
\norm = \left\|#1\right\|
\pos = [#1]_+
\Ncdf = \mathsf F
\Ntail = \overline{\mathsf F}
-->

<a id="section-A"></a>

## A A compact proof of complete output and conditioning bounds

 <a id="app:conditioning"></a> For normalized $u,v$, the pure-state trace distance satisfies 

$$

 D({|{u}\rangle}{\langle{u}|},{|{v}\rangle}{\langle{v}|})
 =\sqrt{1-|\langle u,v\rangle|^2}\le{\left\|{u-v}\right\|}.

$$

 Any common quantum channel, including a final position classification and an identity on a retained reference, contracts trace distance. These comparisons use the same complete retained output space. Restricting to a common event gives positive unnormalized outputs; normalization requires that the event have positive probability in both compared models.



**Lemma A.1 (Conditioning on a common retained event).**

 <a id="lem:conditional-bound"></a> Let $P,Q$ be two probability laws on the same retained output or history space, with ${d_{\rm TV}}(P,Q)\le\epsilon$. For a common event $E$, put $p=P(E)$ and $q=Q(E)$. If *both* $p>0$ and $q>0$, then 

$$

 {d_{\rm TV}}\bigl(P(\,\cdot\mid E),Q(\,\cdot\mid E)\bigr)
 \le\min\{1,2\epsilon/p\}.

$$

 The sufficient condition $\epsilon<p$ ensures $q>0$. For positive unnormalized quantum outputs $\sigma,\tau$ on the same retained space, if ${\left\|{\sigma-\tau}\right\|}_1\le d$, $p={\operatorname{tr}}\sigma>0$ and $q={\operatorname{tr}}\tau>0$, then 

$$

 {\left\|{\sigma/p-\tau/q}\right\|}_1\le\min\{2,2d/p\}.

$$

 Here $d<p$ is sufficient for positivity of the second trace. 

 

**Proof.**

For a measurable set $A$, add and subtract $Q(A\cap E)/p$. The first difference is at most $\epsilon/p$, and the second is at most $|p-q|/p\le\epsilon/p$, since $Q(A\cap E)\le q$. Taking the supremum proves the classical estimate. For the quantum estimate add and subtract $\tau/p$, use positivity to obtain ${\left\|{\tau}\right\|}_1=q$, and use $|p-q|\le{\left\|{\sigma-\tau}\right\|}_1$: 

$$

 {\left\|{\sigma/p-\tau/q}\right\|}_1
 \le d/p+|p-q|/p\le2d/p.

$$

 The upper bounds one and two are the maximal respective distances. Finally $q\ge p-\epsilon$ or $q\ge p-d$ proves the positivity claims. 

□



The lemma applies to complete path laws only when a joint path-law bound on that common space has actually been established. In Theorem [8.3](/quantum-measurement/research/equilibrium-records/complete-instruments-references-and-finite-histories#thm:closure), $E_{\rm out}$ controls complete retained quantum outputs and their physical readout probabilities, while $E_{\rm hist}$ controls the stated classical declaration-and-display histories. Neither bound asserts closeness of raw guidance trajectories or TV closeness of the ontic pair $(\Psi,Q)$. A discarded reservoir, a missing key, or an abstract sampled path cannot be identified with an existing physical record by conditioning. A zero-probability event has no normalized conditional branch, and arbitrarily rare events have no uniform conditional guarantee.
