# Section 1: Question, main result, and scope

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="section-1"></a>

## 1 Question, main result, and scope

<a id="int:section"></a> 

*Status: Framework and scope.*

 Shadow Theory distinguishes a source from a nominated readout, or Tier 1. The question here is not whether that interpretation can be assumed, but which independently stated premises force a specified readout to omit source distinctions. The source–readout papers distinguish an exact projected description from reconstruction of all physical source distinctions after declared redundancy has been removed <a id="citation-1"></a>[[14](/sealed-or-leaky/references#bib-R1), [15](/sealed-or-leaky/references#bib-R2), [16](/sealed-or-leaky/references#bib-R3), [17](/sealed-or-leaky/references#bib-R4), [18](/sealed-or-leaky/references#bib-R5), [10](/sealed-or-leaky/references#bib-R6)]. The measurement constitutions supply separate model-relative examples <a id="citation-2"></a>[[11](/sealed-or-leaky/references#bib-RM), [20](/sealed-or-leaky/references#bib-Pilot), [21](/sealed-or-leaky/references#bib-Massive)]; none of their dynamics is used to prove the Bell results.

Theorem [5.1](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:surrogate) gives the negative boundary: if an alternative class contains the complete-law operational surrogate of each source model, internal experiments cannot discriminate those models from their surrogates. Restricted premises can give positive results without breaching that boundary.



<a id="paragraph-1"></a>

#### Main implication.

 

*Status: Proved conditional on the premises of Section [2.1](/sealed-or-leaky/the-source-tetralemma#tet:setting).*

 For a classical initial readout $T=\tau(\lambda)$, retain precisely (SO), (D), (MI) and (NS) below. A CHSH value $S>2$ implies that $\lambda$ is not a measurable function of $T$. For its finite response table $Z$, 

$$

 H_{\min}(Z\mid T)\ge{f_{\mathrm{NS}}}(S),\qquad
 H(Z\mid T)\ge g_{\rm NS}(S):=(S-2)/2,
 \qquad {f_{\mathrm{NS}}}(S):=-\log_2(3/2-S/4).

$$

 Both bounds are sharp in the no-signalling model class. The quantum guessing bound supplies the additional bound $H(Z\mid T)\ge{f_{\mathrm{Q}}}(S)$ under the separately stated quantum-realizability hypothesis. The maximum of these Shannon bounds may be used; no optimal quantum Shannon tradeoff is claimed.



<a id="paragraph-2"></a>

#### What the tetralemma does not say.

 

*Status: Logical correction.*

 The premise (D) as written already requires definite $\pm1$ outcomes. Therefore the four premises are not logically independent. Theorem [2.7](/sealed-or-leaky/the-source-tetralemma#tet:tetralemma) proves exclusion and the separate necessity of (D), (MI) and (NS) within the single-outcome class. The branching model is retained explicitly as an escape from that class; complete-state unitary determinism is not substituted for (D). The four routes are neither mutually exclusive nor an exhaustive classification of physical theories.



<a id="paragraph-3"></a>

#### Published-data anchoring.

 

*Status: Conditional translation; not a reanalysis of trial records.*

 Section [3](/sealed-or-leaky/experimental-anchoring#exp:section) separates illustrative evaluations at the published CHSH central values <a id="citation-3"></a>[[23](/sealed-or-leaky/references#bib-Hensen15), [26](/sealed-or-leaky/references#bib-Rosenfeld17), [27](/sealed-or-leaky/references#bib-Storz23)] from a genuine finite-sample translation of the entropy-production and soundness theorems in <a id="citation-4"></a>[[28](/sealed-or-leaky/references#bib-Bierhorst18)]. The latter is restricted to classical pre-existing side information obeying that paper's sequential conditions. Passing once does not establish the required lower bound on the probability of passing. In particular, the $1024$ extracted bits do not constitute $1024$ bits of unsmoothed min-entropy of $\lambda$. The rounding-controlled source-response bound of Corollary [3.10](/sealed-or-leaky/experimental-anchoring#exp:rawcor) is stronger than the extracted-string Shannon bound and uses only the published aggregate certificate.



<a id="paragraph-4"></a>

#### Attribution and contribution.

 

*Status: Literature context and results proved here.*

 Deterministic hidden-variable signalling and Bell-certified unpredictability have substantial antecedents <a id="citation-5"></a>[[13](/sealed-or-leaky/references#bib-V02), [5](/sealed-or-leaky/references#bib-CR11), [22](/sealed-or-leaky/references#bib-Pironio10)]. The contributions here are the precise source–readout formulation, the corrected necessity statement, the sharp Shannon refinement, and a postselection-aware finite-source translation with explicit adversary restrictions. No priority is claimed for the elementary probability inequalities or for the imported randomness theorems. The earlier trine, POVM, accessible-conservation, pilot and reweighting results are retained in their declared domains, not offered as additional empirical evidence.



<a id="section-1-1"></a>

### 1.1 Conventions and levels of conclusion

 For probability laws, ${\mathrm{TV}}(P,Q)=\sup_A|P(A)-Q(A)|\in[0,1]$; the variation norm of their signed difference is $2{\mathrm{TV}}(P,Q)$. Trace distance is $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$. All conditional laws requiring disintegration are on standard Borel spaces, and identities involving a conditioning value hold almost everywhere. Entropies are in bits; $h_2$ denotes binary Shannon entropy. For finite $Z$ and classical $E$, 

$$

 p_{\rm guess}(Z\mid E)={\mathbb E}\max_z{\mathbb P}(Z=z\mid E),\qquad
 H_{\min}(Z\mid E)=-\log_2 p_{\rm guess}(Z\mid E).

$$

 This is average conditional min-entropy, not the minimum over side-information values. The distinct deletion-smoothing convention used below is defined in Lemma [3.9](/sealed-or-leaky/experimental-anchoring#exp:tailtransfer). A signed incidence matrix has column $e_q-e_r$ for an edge $r\to q$. Symbols are local to their sections: CHSH $S$ is a scalar, whereas the source set $S$ in Section [5](/sealed-or-leaky/operational-equivalence-and-its-restricted-alternatives#op:section) is a set.

 <a id="source-tabularx-1"></a>

| Level | Conclusion and boundary |
| --- | --- |
| Mathematical implication | A proved implication of specified definitions and premises. |
| Constitutive prediction | A consequence of a particular preparation, dynamics and access catalogue. |
| Operational incompleteness | An admitted record distinction omitted by a specified readout. |
| Published-data translation | An imported finite-sample certificate with its original statistical and adversary assumptions; not independent experimental verification. |
| Fundamental ontology | Not uniquely identified in a class closed under complete-law operational surrogates. |

  Every theorem, proposition, lemma and corollary has a status tag. A conditional theorem is proved as an implication; its physical premises are not thereby established. Explicit limitations are tagged **[Not established]** or **[Scope]**. No unproved statement is promoted by being included in an interpretation.
