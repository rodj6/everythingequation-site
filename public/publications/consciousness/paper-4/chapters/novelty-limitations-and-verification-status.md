# Section 7: Novelty, limitations, and verification status

<!-- Complete paper-4 web edition. Mathematical macros used below:
\B = \{0,1\}
\F = \mathbb F_2
\TV = \operatorname{TV}
\rank = \operatorname{rank}
\supp = \operatorname{supp}
\Assign = \operatorname{Assign}
\arraystretch = 1.18
-->

<a id="section-7"></a>

## 7 Novelty, limitations, and verification status

 

<a id="paragraph-6"></a>

#### What changed beyond FRD-2 and CCI-1.

 The new input is a response-family certificate for an unknown chart, with explicit variation and error conditions, rather than a supplied overwrite algebra or a graph with register pins. The benchmark demonstrates a complete response-to-chart-to-conditional-assignment pipeline. The stochastic branch classifies the common native product-law domain rather than silently replacing a correlated law. The official comparison tests a nontrivial prospectively bounded macro domain rather than only the native chart.



<a id="paragraph-7"></a>

#### What is not new in general.

 Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) uses the established strategy that conditional independence plus adequate auxiliary variation can identify latent factors. Hyvärinen et al.'s exponential-family result <a id="citation-19"></a>[[7](/consciousness/research/paper-4/references#bib-hyvarinen), Theorem 3] and Khemakhem et al.'s identifiability framework <a id="citation-20"></a>[[8](/consciousness/research/paper-4/references#bib-khemakhem), Theorem 1] are close antecedents, but their continuous-domain hypotheses do not directly state the present full finite-cube result. Painsky et al. study nonlinear finite-alphabet factorial representations <a id="citation-21"></a>[[10](/consciousness/research/paper-4/references#bib-painsky)]; Yeredor supplies nonuniform-source rigidity and uniform-source exceptions for linear finite-field mixtures <a id="citation-22"></a>[[9](/consciousness/research/paper-4/references#bib-yeredor)]. Table [3](/consciousness/research/paper-4/novelty-limitations-and-verification-status#tab:antecedents) separates these inherited ideas from the specific construction offered here. Neither this bounded comparison nor the review establishes worldwide priority or rules out an exact prior specialization.

  

Table 3. Result-level attribution and limits of the contribution claim.

<a id="tab:antecedents"></a>  <a id="source-tabularx-1"></a>

| Result here | Antecedent or standard ingredient | Scope of the contribution offered |
| --- | --- | --- |
| Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify) | Auxiliary-variable log-span identification <a id="citation-23"></a>[[7](/consciousness/research/paper-4/references#bib-hyvarinen), [8](/consciousness/research/paper-4/references#bib-khemakhem)]; finite-alphabet recoding <a id="citation-24"></a>[[10](/consciousness/research/paper-4/references#bib-painsky)]; elementary cube rigidity | Explicit finite binary projector and reconstruction, not a new general ICA principle. |
| Theorem [2](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:robust) | Singular-value perturbation inequalities and equal-rank projector geometry | Sufficient threshold for a nonempty finite model class; no optimality or minimal-evidence claim. |
| Conditional assignment (Corollary 3) | FRD-2 P3 covariance with matched remaining fields <a id="citation-25"></a>[[5](/consciousness/research/paper-4/references#bib-frd2)] | Response evidence supplies the chart; the other realization fields remain inputs. |
| Theorem [5](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#thm:affine) and endpoint corollaries | Linear finite-field ICA rigidity and fair-source exceptions <a id="citation-26"></a>[[9](/consciousness/research/paper-4/references#bib-yeredor)] | Explicit deterministic-support treatment and its frozen-recoding application; no first general preservation theorem. |
| Corollary [4](/consciousness/research/paper-4/which-stochastic-continuations-remain-common#cor:commonrank) | Theorem [1](/consciousness/research/paper-4/identification-from-an-unlabeled-response-family#thm:identify); intervention-consistent model comparison <a id="citation-27"></a>[[11](/consciousness/research/paper-4/references#bib-rubenstein), [12](/consciousness/research/paper-4/references#bib-beckers)] | Common-law application, not discovery of the general behavioral/causal distinction. |
| Bounded IIT comparison | Published IIT and intrinsic-unit rules <a id="citation-28"></a>[[14](/consciousness/research/paper-4/references#bib-iit2023), [15](/consciousness/research/paper-4/references#bib-intrinsic)]; known intrinsic-information consequence <a id="citation-29"></a>[[16](/consciousness/research/paper-4/references#bib-mayner)]; inherited CCI-1 <a id="citation-30"></a>[[6](/consciousness/research/paper-4/references#bib-cci)] | New bounded computation in this programme, not a universal grain theorem or empirical preference. |

 



<a id="paragraph-8"></a>

#### Physical and psychophysical limits.

 Binary cardinality, complete public state readout, a stationary intervention family, and its product realization remain model assumptions. Statistical uniqueness within this class is not identification among all physical implementations or primitive decompositions. Hidden-state refinements and multivalued descriptions remain outside the claim. The pulse must be tied independently to storage behavior; merely declaring a mathematical factor to be physical would be circular. The method relocates part of the realization question into a specified, potentially testable response contract rather than eliminating it. Macrounit choice, continuous dynamics, timing, thermal/environmental coupling, endogenous records, maintained resources, and process provenance require separate work. A real-device study would need independently characterized perturbations and readout, repeated context-specific response estimates, a justified model-fit/error bound, and withheld reference labels. None was performed here. No experience-facing observations or evidence of phenomenally correct assignments are supplied. Comparison with IIT does not make SPC-2 depend on IIT's axioms, and does not establish either theory's empirical superiority.



<a id="paragraph-9"></a>

#### Computational limits.

 The 32-state setting is finite and small. The full response table has exponential size in $n$, and the conservative sample budget is large. All-state enumeration is exact for that finite domain, not an asymptotic scalability result. Random checks, simulation seeds, and overlapping groupings are not independent experimental systems. General stochastic SPC-2 qualification has not been inferred from deterministic graph structure.



<a id="paragraph-10"></a>

#### Audit and reproducibility.

 The inherited package manifests passed with 142 CCI-1, 405 FRD-2, and 80 FRD-1 entries in the research stage. Exact code, rational kernels, recovered charts, simulated counts, official serialized results, search contracts, environment locks, and repairs are preserved. Early adapter errors involved an attribute name, preset capitalization, a frozen configuration field, and treating the TPM property as a method. They were corrected without changes to the official numerical source; failed calls and diffs remain in the development log. No failed or uncertified scientific case was silently removed.

The subsequent AI-assisted hostile review reported new mathematical checks using code that did not import the paper's checker: 84 product families, 28 subspace-rotation cases, 21,000 exact three-bit affine cases, and 2,048 additional affine cases. It audited all 192 saved official result objects and freshly recomputed 24 official cells using the archived adapter and implementation. The reported scientific fields agreed, with the pilot schema discrepancy above preserved. These are additional AI checks and same-software re-executions, not human review or an independent implementation of IIT. Their evidence is retained separately from the original research results <a id="citation-31"></a>[[20](/consciousness/research/paper-4/references#bib-support)].

This editorial repair preserves every displayed equation and formal theorem/corollary statement and proof. Its checks concern source preservation, the metadata derivative, compilation, references, rendered layout, and package integrity; it does not claim another full numerical replication. The proofs remain human-readable and internally checked, partly corroborated through separately generated AI calculations, not proof-assistant verified, independently human-reviewed, or empirically validated.

The next verification obligations are independent review of the identification/error and support-classification proofs, independent computational reproduction, and physical conformance of the proposed diagnostic contract. Empirical comparison of consciousness theories additionally requires justified experience-facing data. None of these steps is replaced by another execution of the same program.
