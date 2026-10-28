# A continuous obstruction: the Hopf fibration

<div id="sec:hopf">

</div>

The occupation model is finite, its symmetry group is finite, and no topology is involved. We now exhibit the obstruction in a continuous setting, where two logically independent mechanisms are simultaneously available. It is essential to keep them apart: one is an instance of [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) and uses no topology, the other is topological and uses no equivariance.

## The Hopf bundle

Regard $S^{3}\subset\mathbb{C}^{2}$ as the unit sphere $\{(z_{1},z_{2}):|z_{1}|^{2}+|z_{2}|^{2}=1\}$ and $S^{2}\cong\mathbb{CP}^{1}$ as the space of complex lines in $\mathbb{C}^{2}$. The *Hopf map* $$
h\colon S^{3}\longrightarrow S^{2},
\qquad
h(z_{1},z_{2})=[z_{1}:z_{2}],\tag{40}$$ sends a unit vector to the complex line it spans. It is a smooth surjection, and it is the projection of a principal $U(1)$-bundle for the action $$
\lambda\cdot(z_{1},z_{2}):=(\lambda z_{1},\lambda z_{2}),
\qquad \lambda\in U(1),\tag{41}$$ which preserves the unit sphere and does not change the spanned line. Two unit vectors span the same line if and only if they differ by such a phase, so the fibers of $h$ are exactly the $U(1)$-orbits, each a circle. The action [(41)](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#eq:U1action) is free (if $\lambda z_{i}=z_{i}$ for $i=1,2$ with $(z_{1},z_{2})\neq 0$, then $\lambda=1$) and transitive on each fiber. These facts, and the local triviality of $h$, are standard \[[3](/source-readout/source-readout-non-equivalence/references#bib-Steenrod), [4](/source-readout/source-readout-non-equivalence/references#bib-Husemoller), [9](/source-readout/source-readout-non-equivalence/references#bib-Naber)\].

## First obstruction: no equivariant section

Let $G=U(1)$ act on $S=S^{3}$ by [(41)](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#eq:U1action) and *trivially* on $T=S^{2}$. The map $h$ is equivariant for this pair of actions, since $h(\lambda\cdot z)=h(z)=\lambda\cdot h(z)$. Hence, exactly as in [Proposition 7.2](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#prop:occinvariance), every stabilizer is the whole group: $$
G_{t}=U(1)
\qquad\text{for every }t\in S^{2},\tag{42}$$ and this group acts transitively on the circle fiber $F_{t}=h^{-1}(t)$, which has more than one point.

<div class="proposition">

**Proposition 9.1** (No equivariant selector for the Hopf map).

<div id="prop:hopfequiv">

</div>

*$\mathop{\mathrm{Fix}}_{U(1)}(F_{t})=\varnothing$ for every $t\in S^{2}$, and consequently $h$ admits no $U(1)$-equivariant section.*

</div>

<div class="proof">

*Proof.* The action of $G_{t}=U(1)$ on $F_{t}$ is free, so the only element that fixes any point of $F_{t}$ is $\lambda=1$; since $U(1)\neq\{1\}$, no point of $F_{t}$ is fixed by all of $G_{t}$. (Equivalently, the action is transitive on $F_{t}$ and $|F_{t}|>1$, so [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) applies directly.) [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector) now excludes an equivariant section. ◻

</div>

This argument is purely group-theoretic. It uses no topology of $S^{3}$ or $S^{2}$ beyond the identification of the fibers with $U(1)$-orbits, and it would apply verbatim to the set-theoretic version of the same action. In particular, it does not depend on the Hopf bundle being nontrivial; the same conclusion holds for the trivial bundle $S^{2}\times U(1)\to S^{2}$ with $U(1)$ acting by translation on the fiber and trivially on the base, which certainly does admit continuous global sections.

## Second obstruction: no continuous section

The second obstruction is of an entirely different kind: it concerns continuity, not symmetry, and it *does* depend on the topology of the bundle.

<div class="lemma">

**Lemma 9.2** (A global section trivializes a principal bundle).

<div id="lem:trivialize">

</div>

*Let $P\to X$ be a principal $U(1)$-bundle admitting a continuous global section $\sigma\colon X\to P$. Then $P$ is isomorphic, as a principal $U(1)$-bundle, to the trivial bundle $X\times U(1)$.*

</div>

<div class="proof">

*Proof.* Because the $U(1)$-action on $P$ is free and transitive on each fiber, the map $$\Phi\colon X\times U(1)\longrightarrow P,
\qquad
\Phi(x,\lambda):=\lambda\cdot\sigma(x),$$ is well defined and continuous, is fiber-preserving over $X$, and is $U(1)$-equivariant for the translation action on the second factor. It is bijective on each fiber: surjective by transitivity, injective by freeness. Its inverse is continuous because local trivializations of $P$ turn $\Phi$ into the map $(x,\lambda)\mapsto(x,\lambda\,\tau(x))$ for a continuous $U(1)$-valued function $\tau$ obtained from $\sigma$ in that trivialization, whose inverse $(x,\nu)\mapsto(x,\nu\,\tau(x)^{-1})$ is continuous. Hence $\Phi$ is an isomorphism of principal bundles. This is standard; see \[[3](/source-readout/source-readout-non-equivalence/references#bib-Steenrod), [4](/source-readout/source-readout-non-equivalence/references#bib-Husemoller), [5](/source-readout/source-readout-non-equivalence/references#bib-KobayashiNomizu)\]. ◻

</div>

<div class="proposition">

**Proposition 9.3** (No continuous global section of the Hopf map).

<div id="prop:hopftop">

</div>

*The Hopf bundle $h\colon S^{3}\to S^{2}$ admits no continuous global section.*

</div>

<div class="proof">

*Proof.* Principal $U(1)$-bundles over a paracompact base $X$ are classified up to isomorphism by a first Chern class in $H^{2}(X;\mathbb{Z})$, the trivial bundle corresponding to $0$ \[[4](/source-readout/source-readout-non-equivalence/references#bib-Husemoller), [7](/source-readout/source-readout-non-equivalence/references#bib-MilnorStasheff), [6](/source-readout/source-readout-non-equivalence/references#bib-Hatcher)\]. Fix a generator $$u\in H^{2}(S^{2};\mathbb{Z})\cong\mathbb{Z}.$$ For the Hopf bundle, $$
c_{1}(h)=\pm u\neq 0 ,\tag{43}$$ that is, $c_{1}(h)$ is a generator of $H^{2}(S^{2};\mathbb{Z})$. Equivalently, $h$ is the unit-circle bundle of a tautological line bundle over $\mathbb{CP}^{1}$, whose Euler class generates $H^{2}(S^{2};\mathbb{Z})$ \[[7](/source-readout/source-readout-non-equivalence/references#bib-MilnorStasheff), [8](/source-readout/source-readout-non-equivalence/references#bib-BottTu)\]. Since $c_{1}(h)\neq 0$, the Hopf bundle is not isomorphic to the trivial bundle. By [Lemma 9.2](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#lem:trivialize), a continuous global section would force triviality. Hence no continuous global section exists. ◻

</div>

<div class="remark">

*Remark 29* (On the sign). The sign in [(43)](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#eq:chern) is convention-dependent and immaterial here. It turns on the choice of orientation of $S^{2}$, the choice of generator $u$, and the convention by which a line bundle is associated to the principal bundle ,  in particular, whether one associates the tautological bundle $\mathcal{O}(-1)$ or its dual $\mathcal{O}(1)$, which have Chern classes differing by a sign. Fixing a set of conventions pins the value to $+u$ or $-u$, and different standard sources fix it differently. The argument of [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) uses only $c_{1}(h)\neq 0$, and is therefore insensitive to all of these choices. We accordingly refrain from asserting a signed value.

</div>

<div class="remark">

*Remark 30* (The two obstructions are independent).

<div id="rem:hopfindep">

</div>

[Proposition 9.1](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopfequiv), [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) are not two proofs of one fact. They exclude different things, by different means, and neither implies the other.

That the equivariant obstruction does not entail the topological one is settled by an example. Let $P=S^{2}\times U(1)\to S^{2}$ be the *trivial* principal $U(1)$-bundle, with $U(1)$ acting by translation on the fiber factor and trivially on the base. Then $c_{1}(P)=0$ and $P$ admits continuous global sections in profusion ,  for instance $x\mapsto(x,1)$. Nevertheless the hypotheses of [Proposition 9.1](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopfequiv) hold verbatim: every stabilizer is all of $U(1)$, which acts freely and transitively on each fiber, so $\mathop{\mathrm{Fix}}_{U(1)}(F_{x})=\varnothing$ and [Corollary 6.6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:noselector) excludes every $U(1)$-equivariant section. A bundle can therefore have no equivariant section while having continuous sections, and [Proposition 9.1](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopfequiv) cannot be a proof of [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) in disguise.

The converse direction must be argued differently, and the same trivial-bundle example does not serve; it establishes one implication’s failure, not both. What can be said is the following. The two propositions constrain *distinct admissibility classes*, and the class is not determined by the map: it is fixed by the additional data one specifies ,  a group action in one case, a topology in the other. Neither proof, taken by itself, establishes the other’s conclusion for an independently specified group action or an independently specified topology, since neither proof mentions the other’s data. Concretely, if one takes the group to be trivial, $G=\{1\}$, then every set-theoretic section of $h$ is automatically $G$-equivariant, so the equivariant reconstruction class is unobstructed for that group; yet [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) continues to exclude every continuous section of $h$. The topological obstruction thus persists in a setting where the equivariant obstruction is vacuous, and it plainly does not follow from equivariance considerations, which in that setting say nothing at all.

Set-theoretic sections of $h$, meanwhile, exist whenever a choice function for the fibers does; the axiom of choice supplies one, and no obstruction of either kind touches them. The Hopf map is thus a single example on which three admissibility conditions ,  bare choice, $U(1)$-equivariance, continuity ,  yield three different verdicts, and the verdicts are logically separate.

</div>

The lesson generalizes beyond the example. The conditions one imposes on a reconstruction ,  equivariance, continuity, smoothness, measurability, locality, covariance ,  are not decoration; they determine what obstructions are available and what the failure of reconstruction means. A bare set-theoretic choice of fiber representatives is possible whenever choice is available and is almost never physically meaningful on its own. Conversely, a proof that no continuous section exists says nothing about equivariance, and a proof that no equivariant section exists says nothing about continuity. Each requirement must be stated, and the corresponding obstruction proved, on its own.

## The modeling boundary, again

The results just proved are theorems about the bundle $h$, and as theorems they stand without qualification. Their *physical* reading, however, depends on a declaration that the mathematics does not make, and the situation is exactly the one already met in [Remark 7.4](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#rem:boundary).

<div class="remark">

*Remark 31* (Two readings of the Hopf example).

<div id="rem:hopfgauge">

</div>

Applying [Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined) with $S=S^{3}$ and $T=S^{2}$ treats distinct points of a $U(1)$ fiber as *distinct elements of the reduced source*. Two readings are available, and they are not interchangeable.

*Reading one: the phase is physical.* If the theory has independently declared that the fiber distinctions are physically meaningful ,  that two unit vectors differing by a phase are different source states, not two descriptions of one ,  then $S^{3}$ is the reduced source space in the sense of [Definition 2.1](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#def:reduced), the fibers $F_{t}\cong U(1)$ are nonsingleton fibers of physically distinct states, and [Proposition 9.1](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopfequiv), [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) are obstructions to reconstructing physically meaningful lost structure. This is the reading under which the example instantiates [Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined), and it is legitimate only if the declaration has actually been made.

*Reading two: the phase is gauge.* If instead the $U(1)$ action [(41)](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#eq:U1action) is declared to be gauge redundancy ,  as it is in the usual reading of the overall phase of a normalized state vector ,  then the action belongs to $\simeq_{\mathrm{phys}}$, and [Definition 2.1](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#def:reduced) requires that it be quotiented out *before* any source–readout comparison is made. The reduced source space is then $$S'=S^{3}/U(1)\;\cong\;S^{2},$$ the induced readout $p'\colon S'\to S^{2}$ is the identity map under this identification, every reduced fiber is a singleton, and by [Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq) the readout is source-equivalent. Nothing physical has been lost, and [Theorem 10.1](/source-readout/source-readout-non-equivalence/the-source-readout-non-equivalence-theorem#thm:combined) has no instance here.

Under reading two the no-section results retain their mathematical content but change their meaning entirely. [Proposition 9.3](/source-readout/source-readout-non-equivalence/a-continuous-obstruction-the-hopf-fibration#prop:hopftop) then says that there is no global continuous *gauge choice* on $S^{2}$: one cannot continuously pick a phase representative over the whole base, and any concrete phase convention must be introduced patchwise. That is a genuine and well-known fact about the bundle, and it is the reason gauge fields on $S^{2}$ require more than one chart. It is not a statement that some physically meaningful source structure has been lost, because on this reading there is no such structure in the fiber to lose.

The point to be drawn is therefore a negative one, and it should be stated plainly: *bundle nontriviality is not, by itself, evidence of a physically richer source.* A nonzero Chern class obstructs global continuous sections whatever the physical status of the fiber, and it obstructs them just as firmly when the fiber is pure gauge as when it is not. To convert the topology into a claim about lost realization structure, one must first supply the declaration that the fiber distinctions are physical ,  and that declaration is an input to the framework, never an output of it.

</div>
