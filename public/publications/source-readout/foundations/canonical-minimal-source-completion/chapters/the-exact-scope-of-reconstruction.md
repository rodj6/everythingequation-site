# The exact scope of reconstruction

<div id="sec:reconstruction">

</div>

Completion always reconstructs the joint readout/relation signature; that is what it is. Whether it reconstructs the source state is a separate question with a sharp answer.

<div class="proposition">

**Proposition 12.1** (Reconstruction criterion).

<div id="prop:reconstruction">

</div>

*The completion map $e_A\colon S\to E_A$ is injective, equivalently, $\sim_A\ =\ \Delta_S$; equivalently, $e_A$ is a bijection onto $E_A$, if and only if the family $$
\{p\}\cup\{r_\alpha:\alpha\in A\}\tag{12.1}$$ *separates the points of $S$*: for all $s\neq s'$ in $S$, either $p(s)\neq p(s')$ or $r_\alpha(s)\neq r_\alpha(s')$ for some $\alpha\in A$.*

</div>

<div class="proof">

*Proof.* By [Definition 3.1](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#def:EA) and [(3.5)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:simA), for all $s,s'\in S$, $$\begin{aligned}
e_A(s)=e_A(s')
&\iff j_A(s)=j_A(s')\\
&\iff \bigl[\,p(s)=p(s')\ \text{ and }\ r_\alpha(s)=r_\alpha(s')\ \ \forall\alpha\in A\,\bigr]\\
&\iff s\sim_A s' .
\end{aligned}$$ Hence $e_A$ is injective iff ($s\sim_A s'\Rightarrow s=s'$), iff $\sim_A\ =\ \Delta_S$ (the reverse inclusion always holding by reflexivity), iff no pair of distinct points is identified by the whole family, which is the stated separation property, in contrapositive form. Surjectivity of $e_A$ is automatic ([Proposition 3.2](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#prop:factorization)), so injectivity is equivalent to bijectivity. ◻

</div>

<div class="remark">

*Remark 42* (Two senses of “reconstruction”; only one is automatic).

<div id="rem:two-reconstructions">

</div>

Distinguish carefully:

1.  *Reconstruction of the joint signature.* The completed state determines the readout value and every nominated relation value: this is [(3.4)](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#eq:factorization), and it holds *always*, by construction. It is the entire purpose of the object.

2.  *Reconstruction of the reduced source state.* The completed state determines $s\in S$ itself. This holds *if and only if* the nominated family separates points, by [Proposition 12.1](/source-readout/canonical-minimal-source-completion/the-exact-scope-of-reconstruction#prop:reconstruction), and in general it fails, necessarily so, since by [Corollary 5.3](/source-readout/canonical-minimal-source-completion/the-canonical-minimal-completion-theorem#cor:coarsest) $E_A$ is the coarsest sufficient extension and therefore retains nothing the nomination does not force it to retain.

Neither sense licenses a third: recovery of *raw* configuration data in $\Omega$, or selection of a preferred representative of a physical equivalence class or of a readout fiber. [Corollary 9.1](/source-readout/canonical-minimal-source-completion/the-gauge-reduction-boundary#cor:gauge) forbids the former and [Remark 3.7](/source-readout/canonical-minimal-source-completion/the-joint-image-construction-and-its-quotient-realization#rem:no-selector) the latter. The word “reconstruction” should not be used in this subject without saying which of (1) and (2) is meant.

</div>

[Section 11](/source-readout/canonical-minimal-source-completion/worked-example-flat-u-1-connections-on-the-circle#sec:u1) contains an instance of each case: the transport nomination $\{p_F,r_{\mathrm{hol}}\}$ separates points of $S_{\mathrm{flat}}$, so $e_{\mathrm{hol}}$ is bijective and completion recovers the whole reduced source; the spectral nomination does not separate $z$ from $z^{-1}$, so the spectral completion is a proper quotient, and no amount of further analysis of the spectrum will recover the orientation, because the orientation is not there to be recovered.
