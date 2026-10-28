# Physical instantiation and its boundary

<div id="sec:physical">

</div>

## What a physical model must supply

Everything above is a theorem about a supplied structure. The structure becomes a physical model when the following objects are specified *independently* ,  that is, on physical grounds internal to the sector being modelled, and not reverse-engineered to produce the conclusion: $$(S,\;p,\;\mathcal R,\;\Phi_t)
\qquad\text{or, in the statistical formulation,}\qquad
(S,\;p,\;\mathcal R,\;\{\mu_s\}) .$$ Concretely, this means specifying: a raw realization space $\Omega$; a physical equivalence $\simeq_{\mathrm{phys}}$ with a justification for calling exactly those differences redundant; a readout $\Pi_{T_1}$ with a justification for calling exactly that the observable tier; a family of invariant relations; and a dynamics or an outcome-law assignment.

If the model additionally wishes to invoke either identifiability ceiling, it must discharge the corresponding hypothesis, and these are two hypotheses, not one (Remark [8.5](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#rem:twoceilings)). For the deterministic ceiling it must establish Assumption [7.1](/source-readout/non-source-projection-and-internal-identifiability/the-internal-observation-ceiling#ass:factorization): that the complete input of *every* admissible probe factors through $p$. For the statistical ceiling it must establish [(30)](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#eq:statfactor): that the *complete outcome law* of the experiment factors through $p$. Neither is established by calling the observer “internal”, and neither follows from the other.

## What counts as a witness

We restate, in its strongest form, the standard we have been holding to. The decisive witness for Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) is *not*:

- a map merely *named* a projection;

- noninjectivity manufactured by arbitrarily restricting the descriptor (any map becomes noninjective if one deletes enough of its output; that is a fact about the deletion, not about the world);

- a nontrivial fiber whose points are related by a redundancy that the model failed to quotient (this is gauge, and [(1)](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#eq:reduction) exists precisely to exclude it);

- a fiber distinction that no target, dynamics, or outcome law is sensitive to (this is an idle refinement, and by Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent) everything of interest descends anyway).

It *is*: a pair of admissible, gauge-inequivalent source states with the *same physically justified readout* and a difference that changes *a target, a future response, or a complete outcome law*. That is exactly the hypothesis [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness), and each of its three clauses excludes one of the four failures above.

## The alternatives the framework generates

Given an instantiated model, the theorems above become a determinate list of things to compute or measure.

1.  *Static descent* (Lemma [3.2](/source-readout/non-source-projection-and-internal-identifiability/equivalent-forms-of-source-completeness#lem:descent)): is each proposed source relation constant on readout fibers?

2.  *Minimal completion* (Definition [2.6](/source-readout/non-source-projection-and-internal-identifiability/the-source-to-readout-architecture#def:completion), Theorem [4.6](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:universal)): construct $E_A=\mathop{\mathrm{Im}}(p,R_A)$ and identify what a sufficient extension must contain.

3.  *Dynamical closure* (Theorem [5.2](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#thm:dichotomy)): does the source evolution preserve readout fibers? In the linear case, test $U(t)\ker K\subseteq\ker K$, or infinitesimally $PLQ^{\!\perp}=0$.

4.  *Statistical closure* (Corollary [8.4](/source-readout/non-source-projection-and-internal-identifiability/statistical-identifiability#cor:statceiling), Theorem [9.3](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#thm:lumpability)): do the projected transition rates or outcome laws depend only on the readout state? For a finite chain this is the checkable block-sum condition [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum).

5.  *Discrimination* (Theorem [6.2](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#thm:identifiability), Proposition [6.4](/source-readout/non-source-projection-and-internal-identifiability/joint-probes-and-source-identifiability#prop:monotone)): add probes and determine whether the joint fibers shrink to physical equality.

Two consequences of this list are worth naming, and both must be stated with restraint.

First, failure of lumpability [(33)](/source-readout/non-source-projection-and-internal-identifiability/exact-markovian-projection-strong-lumpability#eq:blocksum), or observation of history-dependent response at fixed present readout state, *rules out* the universal Markov or autonomous sufficiency of the *chosen instantaneous state description*, under the stated model assumptions. This is a genuine empirical inference, and it is the most accessible test the framework offers ,  but its conclusion is a *rejection*, not a construction. It does *not* follow, from data alone, that a hidden source of any particular kind exists, still less that the proposed one does. The same observations are compatible with an incorrectly chosen state space (the readout was simply the wrong variable, and a different one closes); with genuine time dependence of the dynamics; with measurement or preparation effects; and with model misspecification of any other sort. What is licensed is exactly this: *the proposed instantaneous closure is false*. Which of the competing explanations for its failure is correct is a further question, to be settled by further modelling and further data, and Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource) does not settle it.

Second, a source model earns real physical force only when it *predicts the form and magnitude* of the missing-state contribution ,  the second term of [(24)](/source-readout/non-source-projection-and-internal-identifiability/the-projected-law-dichotomy#eq:MZ), and where applicable the memory kernel ,  rather than merely permitting one. A framework that can accommodate any residue predicts nothing.

## The boundary of the result

<div id="subsec:boundary">

</div>

The non-source-projection theorem is a model-relative mathematical result. Once a reduced source $S$, a justified physical equivalence relation $\simeq_{\mathrm{phys}}$, an exact readout $p$, a target $Q$, and a witness pair satisfying [(13)](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#eq:witness) are supplied, the conclusions (N1)–(N6) follow: $T_1$ is a non-source projection relative to that model and target. This is Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource), and it is proved ,  not conjectural, not heuristic, and not contingent on anything outside the stated hypotheses.

Applying the theorem to nature requires more. A concrete physical theory must supply $\Omega$, $\simeq_{\mathrm{phys}}$, $\Pi_{T_1}$, and a witness pair, with physical justification for each, and must establish that the witness distinction is physically substantive rather than an artifact of description. That work is not performed here for any theory; the theorems above constrain it but do not carry it out. The distinctive predictions of an instantiated model ,  residual memory terms, failure of lumpability, history dependence at fixed readout, or the shrinking of joint probe fibers under a new probe ,  then require empirical testing against data and preference to alternatives, which is likewise not performed here.

Neither the abstract theorem nor a successful physical instantiation entails an unrestricted ontological conclusion about reality or the universe. Even a fully instantiated and empirically successful model licenses only the relativized statement that, relative to the physically justified source model, readout, and target, the readout is a non-source projection; the move from a successful model to an unrestricted claim about what exists is not a theorem of this paper, and we do not make it. In particular, we do not claim that our universe has been proved to instantiate the hypotheses of Theorem [4.5](/source-readout/non-source-projection-and-internal-identifiability/the-non-source-projection-theorem#thm:nonsource), and no result above should be read as such a claim.
