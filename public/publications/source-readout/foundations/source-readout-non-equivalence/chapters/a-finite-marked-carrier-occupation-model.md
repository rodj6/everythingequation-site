# A finite marked-carrier occupation model

<div id="sec:occupation">

</div>

We now realize the equivariant obstruction in a completely explicit finite setting.

## The model

Fix integers $N\geq 2$ and $K\geq 2$. Consider $N$ individually marked carriers distributed among $K$ cells. The source state space is the set of assignments $$
S=\{1,\ldots,K\}^{\{1,\ldots,N\}},\tag{25}$$ so that a source state $s\in S$ is a function assigning to each marked carrier $i\in\{1,\ldots,N\}$ the cell $s(i)\in\{1,\ldots,K\}$ that it occupies. Then $|S|=K^{N}$.

The physical status of the marks is a modeling declaration, and here it is made explicitly: *the carrier identities are physically meaningful source distinctions*. Two assignments that differ by which marked carrier sits in which cell are different source states, not two descriptions of one source state. Accordingly, the physical equivalence $\simeq_{\mathrm{phys}}$ on the underlying realization space is trivial as far as the marks are concerned, and [(25)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occS) already *is* the reduced source space $S$ in the sense of [Definition 2.1](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#def:reduced). [Remark 7.4](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#rem:boundary) below examines what happens if this declaration is reversed.

The readout records only how many carriers occupy each cell: $$
p(s)=\bigl(n_{1}(s),\ldots,n_{K}(s)\bigr),
\qquad
n_{j}(s):=\#\{\, i : s(i)=j \,\},\tag{26}$$ with values in $$
T=\Bigl\{\, (n_{1},\ldots,n_{K})\in\mathbb{N}_{0}^{K} : \sum_{j=1}^{K}n_{j}=N \,\Bigr\}.\tag{27}$$ Every such vector is realized by some assignment, so [(3)](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#eq:surjconv) holds with the $T$ of [(27)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occT).

## Fibers

<div class="proposition">

**Proposition 7.1** (Fiber cardinality).

<div id="prop:multinomial">

</div>

*For $n=(n_{1},\ldots,n_{K})\in T$, $$
|F_{n}|=\binom{N}{n_{1},\ldots,n_{K}}=\frac{N!}{n_{1}!\,\cdots\,n_{K}!}.\tag{28}$$*

</div>

<div class="proof">

*Proof.* An element of $F_{n}$ is precisely an ordered partition of the set $\{1,\ldots,N\}$ of marks into blocks $B_{j}=s^{-1}(j)$ with $|B_{j}|=n_{j}$ for $j=1,\ldots,K$; conversely any such ordered partition determines a unique $s$ with $p(s)=n$. Counting these partitions: choose $B_{1}$ in $\binom{N}{n_{1}}$ ways, then $B_{2}$ from the remaining $N-n_{1}$ marks in $\binom{N-n_{1}}{n_{2}}$ ways, and so on. The product telescopes to the multinomial coefficient [(28)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:multinomial). ◻

</div>

## The symmetry and the obstruction

Let $G=S_{N}$, the symmetric group on the carrier marks, acting on $S$ by $$
(g\cdot s)(i):=s(g^{-1}i)
\qquad (g\in S_{N},\ s\in S,\ i\in\{1,\ldots,N\}).\tag{29}$$ This is a left action: $(g\cdot(h\cdot s))(i)=(h\cdot s)(g^{-1}i)=s(h^{-1}g^{-1}i)=((gh)\cdot s)(i)$. Physically it permutes which marked carrier occupies which cell, while the marks themselves retain their identities.

<div class="proposition">

**Proposition 7.2** (Invariance and transitivity).

<div id="prop:occinvariance">

</div>

*For every $g\in S_{N}$ and $s\in S$, $$
p(g\cdot s)=p(s).\tag{30}$$ Consequently $S_{N}$ acts trivially on $T$, the map $p$ is equivariant for this pair of actions, and $G_{n}=S_{N}$ for every $n\in T$. Moreover $S_{N}$ acts transitively on each fiber $F_{n}$.*

</div>

<div class="proof">

*Proof.* Invariance: for each cell $j$, $$n_{j}(g\cdot s)=\#\{\,i : s(g^{-1}i)=j\,\}
=\#\{\,i' : s(i')=j\,\}
=n_{j}(s),$$ where the middle equality is the substitution $i'=g^{-1}i$, a bijection of $\{1,\ldots,N\}$. This proves [(30)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occinv). If $S_{N}$ is given the trivial action on $T$, then $g\cdot p(s)=p(s)=p(g\cdot s)$, which is exactly the equivariance condition [(17)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivariance); and every $g$ fixes every $n$, so $G_{n}=S_{N}$.

Transitivity: let $s,s'\in F_{n}$. Then for each $j$ the sets $s^{-1}(j)$ and $s'^{-1}(j)$ both have $n_{j}$ elements, so there is a bijection $\beta_{j}\colon s'^{-1}(j)\to s^{-1}(j)$. The blocks $s'^{-1}(1),\ldots,s'^{-1}(K)$ partition $\{1,\ldots,N\}$, as do the blocks $s^{-1}(1),\ldots,s^{-1}(K)$, so the $\beta_{j}$ assemble into a permutation $g\in S_{N}$ with $g\bigl(s'^{-1}(j)\bigr)=s^{-1}(j)$ for all $j$. Then $s(g\,i')=j$ exactly when $i'\in s'^{-1}(j)$, i.e. $s\circ g=s'$, i.e. $s'(i)=s(g i)$. Writing $h=g^{-1}$ gives $(h\cdot s)(i)=s(h^{-1}i)=s(gi)=s'(i)$, so $h\cdot s=s'$. ◻

</div>

The situation is thus the one isolated by [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) in its most extreme form: the symmetry group is entirely invisible to the readout, so every stabilizer is the whole group, and that whole group acts transitively on every fiber.

<div class="example">

**Example 7.3** (A fiber with no invariant representative).

<div id="ex:occ">

</div>

Take $$
n_{0}=(1,\,N-1,\,0,\ldots,0)\in T,\tag{31}$$ which is a legitimate element of [(27)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occT) since $1+(N-1)=N$ and $K\geq 2$. By [Proposition 7.1](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#prop:multinomial), $$
|F_{n_{0}}|=\frac{N!}{1!\,(N-1)!\,0!\cdots 0!}=N>1,\tag{32}$$ using $N\geq 2$: the fiber consists of the $N$ assignments in which exactly one marked carrier occupies cell $1$ and the remaining $N-1$ occupy cell $2$, indexed by which carrier is the solitary one.

By [Proposition 7.2](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#prop:occinvariance), $G_{n_{0}}=S_{N}$ acts transitively on $F_{n_{0}}$, and $|F_{n_{0}}|>1$. [Corollary 6.7](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#cor:transitive) therefore gives $$
\mathop{\mathrm{Fix}}_{S_{N}}(F_{n_{0}})=\varnothing,\tag{33}$$ and no $S_{N}$-equivariant deterministic section $T\to S$ exists. That is: *no permutation-equivariant rule assigns to occupation data a specific marked-carrier assignment*. Any rule that names the carrier sitting alone in cell $1$ must name a particular mark, and conjugating the rule by the transposition exchanging that mark with another produces a different answer from identical readout data.

Directly: if $\sigma$ were equivariant, then $\sigma(n_{0})\in F_{n_{0}}$ would be some assignment in which carrier $i_{\ast}$ is alone in cell $1$; taking $g$ to be a transposition moving $i_{\ast}$, we get $g\cdot\sigma(n_{0})\neq\sigma(n_{0})$, while $\sigma(g\cdot n_{0})=\sigma(n_{0})$ because $S_{N}$ acts trivially on $T$. This contradicts [(21)](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#eq:equivsection).

</div>

Note that ordinary sections abound here: $T$ is finite, and one may simply declare that the solitary carrier is always mark $1$. What fails is not selection but *symmetric* selection. The convention “mark $1$” is a choice with no warrant in the data, and the symmetry of the problem exposes it as such.

<div class="remark">

*Remark 23* (The modeling boundary).

<div id="rem:boundary">

</div>

The obstruction in [Example 7.3](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#ex:occ) depends entirely on the declaration made after [(25)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:occS), and it is worth stating exactly where the line falls.

Suppose instead that the carrier marks were declared *physically redundant* ,  that permuting which carrier is which is a relabeling and not a physical operation. Then the permutations [(29)](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#eq:SNaction) belong to $\simeq_{\mathrm{phys}}$, and the reduction of [Definition 2.1](/source-readout/source-readout-non-equivalence/realization-states-physical-equivalence-and-readout#def:reduced) must be performed with respect to them. The reduced source space becomes $$S'=\{1,\ldots,K\}^{\{1,\ldots,N\}}\big/ S_{N},$$ whose elements are exactly the occupation vectors: two assignments have the same $S_{N}$-orbit if and only if they induce the same $(n_{1},\ldots,n_{K})$, by the transitivity established in [Proposition 7.2](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#prop:occinvariance). The induced readout $p'\colon S'\to T$ is then a bijection, every reduced fiber is a singleton, and by [Proposition 3.2](/source-readout/source-readout-non-equivalence/quotient-exactness-and-source-equivalence#prop:sourceeq) the readout is source-equivalent. The obstruction has vanished ,  and correctly so, because on this declaration there was never anything to lose.

The two models are mathematically adjacent and physically opposite. The theorems of [Section 4](/source-readout/source-readout-non-equivalence/descent-of-source-relations#sec:descent), [Section 6](/source-readout/source-readout-non-equivalence/equivariant-reconstruction#sec:equivariant) detect lost source structure only after the theory has independently specified which distinctions are physical. They do not, and cannot, make that specification on the theory’s behalf. In particular, in [Example 7.3](/source-readout/source-readout-non-equivalence/a-finite-marked-carrier-occupation-model#ex:occ) the group $S_{N}$ is *not* a gauge group: it acts on physically distinct states and its orbits are not points of the reduced source space. Treating it as gauge would be a different model, the one just described, with a different and trivial conclusion.

</div>
