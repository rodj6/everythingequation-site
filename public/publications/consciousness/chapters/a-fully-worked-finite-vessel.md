# Chapter 19: A fully worked finite vessel

<!-- Fixed Version 2 source. Mathematical macros used below:
\headrulewidth = 0pt
\chaptermark = \markboth{\thechapter\quad #1}{}
\R = \mathbb R
\C = \mathbb C
\N = \mathbb N
\E = \mathbb E
\HH = \mathcal H
\BB = \mathcal B
\PP = \mathcal P
\ZZ = \mathcal Z
\id = \mathrm{id}
\dd = \,\mathrm d
\TV = d_{\mathrm{TV}}
\tr = \operatorname{tr}
\supp = \operatorname{supp}
\rank = \operatorname{rank}
\im = \operatorname{im}
\Fix = \operatorname{Fix}
\Spec = \operatorname{Spec}
\Law = \operatorname{Law}
\Var = \operatorname{Var}
\osc = \operatorname{osc}
\diag = \operatorname{diag}
\Span = \operatorname{span}
\SCC = \operatorname{SCC}
\ket = \lvert #1\rangle
\bra = \langle #1\rvert
\ip = \langle #1,#2\rangle
\norm = \lVert #1\rVert
\abs = \lvert #1\rvert
\status = \par\noindent\textit{Status: #1.}\par
\doi = \href{https://doi.org/#1}{\nolinkurl{doi:#1}}
\spctwo = \textsf{SPC-2}
\spcone = \textsf{SPC-1}
\source = \Omega_{\mathrm{src}}
\unsplit = \mathsf{U}
\one = \mathbf 1
-->

<a id="ch:worked"></a> 

<a id="section-19-1"></a>

## 19.1 Physical dynamics and realization

<a id="section:worked:physical-dynamics-and-realization"></a> Let the complete local state be $x=(A,B)\in\{0,1\}^2$. In a fixed operating regime define <a id="eq:twobit"></a>


$$

A_{t+1}=B_t\oplus N_A,\qquad
B_{t+1}=A_t\oplus N_B,

$$

Equation (19.1).

 with fresh independent noise bits satisfying $P(N_A=1)=1/10$ and $P(N_B=1)=1/4$. These probabilities specify the native stochastic law. For its all-finite operational interpretation the law is assumed to continue with fresh independent noise; this is a physical model premise. A fixed finite run can instead be realized using an explicitly sized noise bank with its retained outgoing cells. The finite bank does not establish an indefinitely replenished reversible implementation.

The step has a reversible extension: 

$$

(a,b,n_A,n_B)\longmapsto(b\oplus n_A,a\oplus n_B,n_A,n_B).

$$

 Its inverse is obtained from $b=a'\oplus n_A$, $a=b'\oplus n_B$. Thus a finite sequence can be realized as a permutation on the enlarged orthogonal state space, with independent noise cells initially prepared and all old cells retained. This is a finite physical model construction, not a claim to reproduce a biological vessel.

Changing $A_t$ with the other relevant parents fixed changes the next law of $B$; changing $B_t$ changes the next law of $A$. Both routes are internal under $R^\ast$. Take the native action to be this update and the native record to be the next values of the two registers, which are themselves reused by the following update. The two-tick schedule executes the route $A\to B\to A$; its terminal $A$ law differs by $2/5$ between preparations differing only in $A$. The complete constitutive return catalogue consists of the native one- and two-tick return templates and their admitted component preparations. This finite template choice is explicit; it is not selected anew by an investigator. Four distinct first-step rows give four all-future predictive classes, and their singleton fibres make congruence automatic. Thus A1 assigns one perspective in this operational model.



<a id="section-19-2"></a>

## 19.2 The exact transition matrix

<a id="section:worked:the-exact-transition-matrix"></a> Order configurations as $00,01,10,11$. Direct multiplication of the independent noise probabilities gives <a id="eq:twobitT"></a>


$$

T=\frac1{40}
\begin{pmatrix}
27&9&3&1\\
3&1&27&9\\
9&27&1&3\\
1&3&9&27
\end{pmatrix}.

$$

Equation (19.2).

 Every row sums to one. The matrix is doubly stochastic, so the uniform distribution is stationary. Stationarity of the ensemble does not mean that the actual bits do not change. It also does not collapse the four predictive preparations into one class: their future conditional laws are distinct.

A separate report can copy $A$ or $B$ into a prepared orthogonal register. Here the report device has no return interaction, and its classical copying preserves the native state and update. It belongs to the external report layer. The native and external interrogation grammars consequently have different contrast metrics without representing a change of the core itself.



<a id="section-19-3"></a>

## 19.3 Delayed observations and the native contrast geometry

<a id="section:worked:delayed-observations-and-the-printed-contrast-geometry"></a> First consider only delayed complete-state observations beginning at $t+1$, with no current-state report and no prior intervention that amplifies the distinction. The one-step TV matrix between the rows of [Equation 19.2](/consciousness/monograph/a-fully-worked-finite-vessel#eq:twobitT) is <a id="eq:twobitmetric"></a>


$$

D_{\mathrm{del}}=
\begin{pmatrix}
0&4/5&1/2&4/5\\
4/5&0&4/5&1/2\\
1/2&4/5&0&4/5\\
4/5&1/2&4/5&0
\end{pmatrix}.

$$

Equation (19.3).

 For example, the first two rows differ by $(24,8,-24,-8)/40$, for which half the sum of absolute values is $4/5$. The first and third differ by $(18,-18,2,-2)/40$, giving $1/2$.

The same matrix is the TV distance of any complete future passive path that retains its first state $X_{t+1}$. Given that first state, the remaining conditional path law is the same Markov kernel from either preparation. Applying that common kernel cannot increase TV; projecting the path back to its first state cannot decrease the original row distance. Equality follows. More time does not reveal an additional distinction about the initial state once the common Markov successor has been exactly observed.

For this declared native full-successor-record grammar, $D_{\mathrm{del}}$ is the all-finite native contrast metric. It is not universal phenomenal geometry: another realized native grammar need not give this matrix. Exact current-state reports belong to the separate external grammar in this example.



<a id="section-19-4"></a>

## 19.4 External present-state reports have a different metric

<a id="section:worked:present-state-reports-change-the-full-metric"></a> Suppose the separate external report mechanism copies the present $A_t$ or $B_t$ before any noisy transition. Any two distinct configurations differ in at least one bit. Reporting that bit produces disjoint deterministic output laws. Therefore <a id="eq:fullmetric"></a>


$$

d_{\mathrm{all}}(x,x')={\mathbf 1}_{\{x\ne x'\}}.

$$

Equation (19.4).

 Equation [19.4](/consciousness/monograph/a-fully-worked-finite-vessel#eq:fullmetric) is the supremum metric of external interrogation, not the native metric assigned by A2. All four native classes are already distinct, so exact present-state reports factor through them without refining the phenomenal partition. They can nevertheless have a larger TV contrast: report grounding is fibre constancy, not a Lipschitz or data-processing bound relative to the chosen native transcript metric. Adding an actual internal copy operation would change the native grammar and require a new realization analysis.

Under A2, the four pointed phenomenal states are the structurally transported four predictive states. They are not labeled as red, pain, or any human quality. The model fixes relational organization under its constitutive interpretation; it supplies no independent phenomenological calibration that would identify these states with an actual person's experience.



<a id="section-19-5"></a>

## 19.5 Reports, symmetry, and gauge

<a id="section:worked:reports-symmetry-and-gauge"></a> For a current $A$ report, $Q_A(r\mid a,b)={\mathbf 1}_{\{r=a\}}$, and similarly for $B$. A delayed $A$ report has $Q_{A,+1}(1\mid a,b)=1/10+(4/5)b$; a delayed $B$ report has $Q_{B,+1}(1\mid a,b)=1/4+(1/2)a$. These are ordinary physical predictions. Their phenomenal versions are induced through $\Psi_C^{-1}$.

The asymmetric noise rates distinguish the two update channels. A permutation of state labels alone is not a physical symmetry if it fails to transport the channel names and probabilities. Some simultaneous bit-complement transformations can be presentation equivalences when the corresponding input and report labels are also transported. Such whole-model equivalences do not mean that a current $00$ preparation is the same physical preparation as $11$ under a fixed calibration.

The operational example specifies one core, four native predictive states, congruent native instruments, separate grounded report kernels, a native delayed contrast matrix, a distinct external interrogation metric, and a pointed assignment under A2. A maintained two-tick return contract qualifies it. If a fixed bank is included instead, the remaining fuel is part of the carrier and exhaustion is terminal; the four-state comparison is then a fixed-resource slice, not the entire enlarged object. Its mathematical completeness does not establish actual awareness in this device. The latter is the interpretation asserted by A0 and A1, not an additional finite calculation.
