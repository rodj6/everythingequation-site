# Section 10: The measurement constitutions and the scope of their sealing

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

<a id="section-10"></a>

## 10 The measurement constitutions and the scope of their sealing

 <a id="con:section"></a> 

*Status: Imported constitutive hypotheses; not independently established physical laws.*

 The measurement monograph supplies two distinct constitutions. In the pilot theory, a canonical coherent field drives deterministic export and contact rules; the randomness comes from a specified initial spatial gas and carrier ensemble. The designated carrier represents the complete ordinary material configuration. P3 requires every additional ordinary apparatus to enter the same numerical Hermitian field Hamiltonian and forbids an additional pilot-ledger force or direct rewrite of an ordinary display. In the massive theory, the complete state is a spinor wave together with massive material positions; Schrödinger evolution, kinetic-momentum guidance and initial complete equilibrium are postulated. The following statements concern these declared domains, not all possible material theories.



<a id="section-10-1"></a>

### 10.1 Pointwise and uniform sealing in the Bell limit

 For a fixed ordinary programme and a common ready apparatus $\alpha$, the pilot Bell limit has record effects <a id="con:effect"></a>


$$

 P^B_\psi(m)=\|P_mU(\psi\otimes\alpha)\|^2
 =\langle\psi,E_m\psi\rangle,\qquad E_m\ge0,\quad\sum_mE_m=I.

$$

Equation (35).

 This follows from complete-configuration equivariance and the joint unitary; it is Eq. (8.3) of the monograph <a id="citation-30"></a>[[11](/sealed-or-leaky/references#bib-RM)]. The represented input includes every preparation tag that can affect the experiment. Equality of a subsystem's density matrix while an apparatus retains an accessible correlated tag is not equality of the complete input.

<a id="source-proposition-6"></a>

**Proposition 10.1 (Finite-ensemble asymptotic sealing).**

<a id="con:ensemblesealing"></a> 

*Status: Proved conditional on the pilot constitution and the Bell-limit record form of [[11](/sealed-or-leaky/references#bib-RM)].*

 Fix an admissible complete programme, including its physical records. Suppose the finite pilot path error for each pure input used is bounded by $\epsilon_N(\psi)\to0$. Let $\mathfrak E=\{(q_i,\psi_i)\}$ and $\mathfrak E'=\{(q'_j,\psi'_j)\}$ be finite ensembles with equal complete represented density matrices and the same ready apparatus. Then their finite record laws satisfy <a id="con:ensemblesealingeq"></a>


$$

 {\mathrm{TV}}(P^N_{\mathfrak E},P^N_{\mathfrak E'})
 \le\sum_iq_i\epsilon_N(\psi_i)
       +\sum_jq'_j\epsilon_N(\psi'_j)\longrightarrow0.

$$

Equation (36).

 If a common bound $\epsilon_N(\psi)\le\Delta_N$ is proved on the specified input class, the right-hand side is at most $2\Delta_N$. 

 <a id="source-proof-30"></a>

**Proof.**

The record is a common measurable function of the complete ordinary path, so its error is no larger than the path error. Mixing preserves the weighted bound by convexity of total variation. The two limiting laws agree by [(35)](/sealed-or-leaky/the-measurement-constitutions-and-the-scope-of-their-sealing#con:effect); the triangle inequality proves the assertion. The sums are finite, hence pointwise convergence of their terms suffices. 

□



The monograph's Theorem 6.3 supplies a fixed-programme path comparison. Its Proposition 7.8 supplies an input-uniform rate for the particular fixed compiled clock and first-pass family studied there. Neither statement gives uniformity over all growing apparatus graphs, all $N$-dependent horizons or arbitrary changing programmes. The finite witnesses below are consequently proved directly from the finite reaction model. P3 alone does not imply exact finite-resource sealing.



<a id="section-10-2"></a>

### 10.2 Source distinctions that are not automatically records

 The monograph's detuned sector model has two actual position vertices, an internal qubit and an inaccessible reference. With 

$$

 H_D=g\bigl(\sqrt\eta\,\sigma_x+\sqrt{1-\eta}\,\sigma_z\bigr)_{\rm pos}
 \otimes\operatorname{diag}(1,2)_{\rm int}\otimes I_R,
 \quad T=\frac\pi{2g},\quad0<\eta<1,

$$

 and initial position $0$, an input of internal weight $p$ has 

$$

 w_1(t)=\eta\{p\sin^2(gt)+(1-p)\sin^2(2gt)\}.

$$

 Its unmodified Bell first-exit target $F$ obeys $F(0)=F(1)=\eta$ and $F(2/3)=3\eta/4$ (monograph Proposition 9.1). These are imported model calculations, not experimental data. The basis mixture of weights $(2/3,1/3)$ and the equal mixture of $\sqrt{2/3}{\lvert0\rangle}\pm\sqrt{1/3}{\lvert1\rangle}$ have the same density matrix but different $F$ values. They also have mutually singular distributions of the initial pilot field, because that field is an explicit source coordinate.

This establishes a model-relative source distinction. It does not make the unchanged first exit a measurable record in the original ordinary force catalogue. A common affine record probability cannot approximate both target values with error smaller than $\eta/8$, by their gap $\eta/4$ and the triangle inequality. The monograph's Theorem 9.2 proves this obstruction with the complete-input qualification. Attaching a recorder requires analyzing its joint dynamics; an instrument that changes the native histories is not a recorder of the unchanged target merely because its name says so.



<a id="section-10-3"></a>

### 10.3 What is and is not transferred between constitutions

 The source inventory, zero-residue exporter and finite-gas comparison used below are explicit pilot rules. The massive example later uses its own guidance and equilibrium laws. The monograph's Chapter 32 translation/dilation routing has correct transport formulas but is explicitly not a lower-bounded microscopic energy realization; it is not imported as an operation of the semibounded massive constitution. Any such routing used as a mathematical example must retain its separate assumptions.
