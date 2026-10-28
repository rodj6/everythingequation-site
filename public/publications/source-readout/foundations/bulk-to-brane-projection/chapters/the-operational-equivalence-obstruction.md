# The operational-equivalence obstruction

<div id="sec:opeq">

</div>

Sections [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)–[8](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#sec:completion) establish nonclosure of the *instantaneous* brane state. That statement must be sharply distinguished from the far stronger claim that no autonomous description using only brane observables can exist. The stronger claim is *false* when arbitrary history dependence is allowed.

## Classical pushforward lemma

Let $\mathfrak E_T$ be the class of all experiments that prepare, intervene on, and read only Tier-1 (brane) variables. For each protocol $e\in\mathfrak E_T$, a fully specified source theory defines a probability measure $\mu^S_e$ on its admissible source histories $\Gamma^e_S$. Let $$
R_e:\Gamma^e_S\longrightarrow\Gamma^e_T\tag{94}$$ be the measurable map returning the complete Tier-1 record.

<div class="lemma">

**Lemma 11.1** (Pushforward representation of Tier-1 operational laws).

<div id="lem:pushforward">

</div>

*Define $$
\boxed{\;
\nu_e=(R_e)_*\mu^S_e,
\qquad e\in\mathfrak E_T .
\;}\tag{95}$$ Then $M^\star_T=\{\nu_e:e\in\mathfrak E_T\}$ is a theory whose sample space contains only Tier-1 histories and whose prediction for every Tier-1 experiment coincides exactly with the source prediction: $$
d_{\mathrm{TV}}\bigl((R_e)_*\mu^S_e,\ \nu^\star_e\bigr)=0
\qquad\text{for every }e\in\mathfrak E_T ,\tag{96}$$ where $\nu^\star_e:=\nu_e$ regarded as the surrogate theory’s law.*

</div>

<div class="proof">

*Proof.* By the definition of pushforward, for every bounded measurable statistic $F:\Gamma^e_T\to\mathbb R$, $$
\int_{\Gamma^e_T}F(\gamma)\,\nu_e(d\gamma)
=\int_{\Gamma^e_S}F(R_e\omega)\,\mu^S_e(d\omega).\tag{97}$$ Taking $F$ to be the indicator of an arbitrary measurable event proves equality of the complete record distributions, hence [(96)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:TVzero). Taking $F$ to encode an estimator, a randomized decision rule, a stopping rule, a correlation function, or a loss function proves equality of its distribution as well. Adaptive interventions are already covered, because each complete adaptive protocol *is* a member of $\mathfrak E_T$ and its record map is measurable. Marginalization, random mixtures of protocols, and causal consistency are inherited because pushforward commutes with measurable composition and with marginalization. ◻

</div>

<div class="remark">

**Remark 11.2** (Status of Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward)).

<div id="rem:pushstatus">

</div>

The equality [(96)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:TVzero) is mathematically immediate from the definition of pushforward; nothing in the proof is deep, and no claim of mathematical originality is made for it. Its significance here is *interpretive*. It establishes the exact boundary on what brane-only observations can discriminate, and hence fixes the strongest conclusion that the positive results of Sections [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness)–[7](/source-readout/bulk-to-brane-projection/the-parameter-eliminated-cross-regime-prediction#sec:crossregime) can support. The substantive work lies in identifying which restrictions on the alternative class *do* permit discrimination (Section [11.3](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:boundary)), and in exhibiting ,  through the four-dimensional CFT description of Section [10](/source-readout/bulk-to-brane-projection/the-strongest-conventional-four-dimensional-description#sec:fourdim) ,  that the obstruction is realized concretely in RS2 and not merely as a formal possibility.

</div>

For standard Borel state spaces the finite-time laws disintegrate into causal history kernels, $$
\nu(dx_{0:n}\mid u_{0:n-1})
=K_0(dx_0)\prod_{j=0}^{n-1}
K_{j+1}\bigl(dx_{j+1}\mid x_{0:j},u_{0:j}\bigr),\tag{98}$$ an autonomous stochastic law on Tier-1 histories and controls. It need not be Markovian, finite-dimensional, local, simple, or state-independent. Those are *explanatory* restrictions, not consequences of autonomy in the unrestricted operational sense.

## Quantum and field-theoretic forms

In quantum theory, equality of one-time reduced states, or of an ordinary in–out generating functional, is insufficient: interventions can expose temporal correlations. The exact Tier-1 object is the *process tensor* \[[14](/source-readout/bulk-to-brane-projection/references#bib-Pollock)\]. If $\mathcal A^{(j)}_{x_j}$ are Tier-1 instruments and $\mathcal U_{j+1:j}$ the joint source propagator, then $$
\Pr(\mathbf x\mid\mathbf A)
=\operatorname{Tr}_{TE}\Bigl[
\mathcal A^{(n)}_{x_n}\,\mathcal U_{n:n-1}\cdots
\mathcal A^{(0)}_{x_0}(\rho_{TE})\Bigr].\tag{99}$$ Contracting every eliminated-sector index defines a positive, causally normalized multilinear functional $\Upsilon^T_{n:0}$ with Tier-1 legs only, such that $$
\Pr(\mathbf x\mid\mathbf A)
=\Upsilon^T_{n:0}\bigl[
\mathcal A^{(n)}_{x_n},\mathcal A^{(n-1)}_{x_{n-1}},\ldots,
\mathcal A^{(0)}_{x_0}\bigr].\tag{100}$$

The field-theoretic counterpart is the Feynman–Vernon closed-time-path influence functional \[[12](/source-readout/bulk-to-brane-projection/references#bib-FeynmanVernon)\]. With $S[\phi,\chi]=S_T[\phi]+S_E[\chi]+S_{\mathrm{int}}[\phi,\chi]$ and a factorized initial environment state, $$
e^{iS_{\mathrm{IF}}[\phi_+,\phi_-]}
=\int_{\chi_+(t_f)=\chi_-(t_f)}
\mathcal D\chi_+\,\mathcal D\chi_-\;
\rho_E(\chi^+_i,\chi^-_i)\,
e^{iS_E[\chi_+]+iS_{\mathrm{int}}[\phi_+,\chi_+]
-iS_E[\chi_-]-iS_{\mathrm{int}}[\phi_-,\chi_-]},\tag{101}$$ $$
Z_T[J_+,J_-]
=\int\mathcal D\phi_+\,\mathcal D\phi_-\;
\rho_T(\phi^+_i,\phi^-_i)\,
e^{iS_T[\phi_+]-iS_T[\phi_-]
+iS_{\mathrm{IF}}[\phi_+,\phi_-]
+iJ_+\phi_+-iJ_-\phi_-} .\tag{102}$$ The retained action is counted exactly once. A *correlated* initial state replaces $\rho_E$ by the corresponding joint boundary functional; the process-tensor construction [(100)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:processtensor) covers that case with no factorization assumption. The resulting closed-time-path functional contains retarded response, fluctuations, and multi-time Tier-1 probabilities, and may be complex, nonlocal, and state-dependent while remaining a complete Tier-1 description.

## The exact boundary of the conclusion

<div id="sec:boundary">

</div>

The witness of Section [3](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#sec:witness) proves $$
p\circ\Phi_t\ne U_t\circ p\tag{103}$$ for every deterministic flow $U_t$ on the specified instantaneous brane state, and ,  for any preparation class that resolves the two witness states, so that the conditional future law differs within a readout fiber ,  it also defeats universal Markov lumpability. It does **not** defeat the pushed-forward law [(95)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:nu) on complete brane histories.

Accordingly, source projection can be empirically distinguished only relative to a *restricted* alternative class $\mathfrak M^R_T$. If $\operatorname{Op}(M)$ denotes the complete family of protocol-conditioned Tier-1 laws of a model, the necessary and sufficient condition that the restricted class contain no exactly operationally equivalent model is $$
\boxed{\;
\operatorname{Op}(M_S,p)\notin\bigl\{\operatorname{Op}(M):M\in\mathfrak M^R_T\bigr\}.
\;}\tag{104}$$

<div class="remark">

**Remark 11.3** (Identifiability is not a finite-data testing theorem).

<div id="rem:finitedata">

</div>

Condition [(104)](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#eq:identifiability) is exact identifiability. Uniform statistical discrimination from a *composite* alternative class additionally requires separation of the source law from the *closure* of that class in an operational metric appropriate to the allowed protocols ,  total variation, or a relative-entropy rate. If the source law lies outside the class but can be approximated arbitrarily closely by its members, exact equivalence is absent while finite-data discrimination may nonetheless be arbitrarily difficult.

</div>

Useful independent restrictions include: a fixed finite set of free or weakly coupled instantaneous fields at a stated perturbative order; a Markov or finite-memory condition; fixed finite-pole local quadratic dynamics; a finite EFT basis with coefficients fixed before the test; a prescribed preparation/boundary-state class. *Locality alone, or finitely many interacting field species alone, is insufficient*, because multiparticle states generate branch cuts. If arbitrary kernels, continua, initial correlations, and complete-history states are admitted, the pushforward theory *belongs* to the alternative class and discrimination is impossible.
