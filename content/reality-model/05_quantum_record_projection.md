# The Source-to-Readout Construction

## Quantum alternatives, selection, deposition and objective records

### 1. Quantum representation of the aperture field

Let

\[
\mathfrak F_Y=
(K_Y,C_Y,\mathcal H_Y,\mathcal W_Y,E_{K_Y},\nu_Y,\tau_Y,\mathcal R_Y)
\tag{Q5.1}
\]

be the field and weighted spine of a quantum-capable aperture face. The Tier-1 quantum observable algebra is the von Neumann algebra

\[
\boxed{
\mathcal A_Y^Q
=W^*\!\left(
\mathcal W_Y,
f(K_Y),
U_t,
S_t,
\mathcal R_Y^{\rm obs}
\right)
\subseteq\mathcal B(\mathcal H_Y).
}
\tag{Q5.2}
\]

The physical algebra contains only operators surviving the redescription quotient and the no-excess aperture. Gauge, basis and source-presentation coordinates are not quantum observables.

The aperture vectors and weights used to form the spectral measure define the normal state

\[
\boxed{
\rho_Y
=\sum_{j\in J_Y}\beta_j
|\xi_j\rangle\langle\xi_j|,
\qquad
\beta_j\ge0,\quad
\sum_j\beta_j=1,
\quad \|\xi_j\|=1.
}
\tag{Q5.3}
\]

For countably many vectors the series converges in trace norm. Hence

\[
\rho_Y\ge0,\qquad
\rho_Y\in\mathcal T_1(\mathcal H_Y),\qquad
\operatorname{Tr}\rho_Y=1.
\tag{Q5.4}
\]

The associated normal state is

\[
\omega_Y(A)=\operatorname{Tr}(\rho_YA),
\qquad A\in\mathcal A_Y^Q.
\tag{Q5.5}
\]

Its restriction to the carrier spectral algebra reproduces the aperture measure:

\[
\nu_Y(B)
=\omega_Y(E_{K_Y}(B))
=\operatorname{Tr}(\rho_YE_{K_Y}(B)).
\tag{Q5.6}
\]

Thus the quantum state is the normalized positive realization of the same weighted spine that generates the field.

For a general algebraic sector, a positive normalized normal functional \(\omega_Y\) on \(\mathcal A_Y^Q\) is primary. Its GNS representation is

\[
(\pi_{\omega_Y},\mathcal H_{\omega_Y},\Omega_{\omega_Y})
=\operatorname{GNS}(\mathcal A_Y^Q,\omega_Y).
\tag{Q5.7}
\]

Equation (Q5.3) is the type-I realization of (Q5.7).

On the relativistic field branch, the operational algebra is supplied
by the detector-local completion of Chapter 5a. For every registered
detector region \(\mathfrak D\), set

\[
\mathcal A_{Y,\mathfrak D}^{Q}
=\mathcal N_{\mathfrak D,\bar\omega},
\qquad
\omega_{Y,\mathfrak D}=\bar\omega,
\qquad
\mathcal I_{Y,\mathfrak D}=\mathcal I_{\mathfrak D},
\tag{Q5.7a}
\]

where the objects on the right are (QFT5a.30)--(QFT5a.33). If
\(\mathfrak D_1\subseteq\mathfrak D_2\), covariance requires normal
unital inclusions

\[
j_{21}:\mathcal A_{Y,\mathfrak D_1}^{Q}
\hookrightarrow\mathcal A_{Y,\mathfrak D_2}^{Q},
\qquad
\omega_{Y,\mathfrak D_1}
=\omega_{Y,\mathfrak D_2}\circ j_{21},
\tag{Q5.7b}
\]

and the local instruments intertwine these inclusions. Thus the type-I
carrier construction and the completed QFT construction feed the same
normal-algebraic record theory; a formal perturbative algebra is never
used directly as the domain of a probability instrument.

### 2. Effects and measurements

An effect is an operator

\[
0\le E\le I,
\qquad E\in\mathcal A_Y^Q.
\tag{Q5.8}
\]

On a standard-Borel outcome space \((\mathsf O,\Sigma)\), a POVM is a weakly countably additive map

\[
E:\Sigma\to\mathcal A_Y^Q,
\qquad
E(B)\ge0,\qquad
E(\mathsf O)=I.
\tag{Q5.9}
\]

The probability assigned by the aperture state is

\[
\boxed{
\mu_{\rho_Y}(B)
=\omega_Y(E(B))
=\operatorname{Tr}[\rho_YE(B)].
}
\tag{Q5.10}
\]

#### Theorem Q5.1 — Born measure

Equation (Q5.10) is a probability measure on \((\mathsf O,\Sigma)\).

**Proof.** Positivity follows from positivity of \(\rho_Y\) and \(E(B)\). Normalization gives

\[
\mu_{\rho_Y}(\mathsf O)
=\operatorname{Tr}(\rho_YI)=1.
\]

For disjoint \(B_n\), weak operator additivity of \(E\) and normality of \(\omega_Y\) give

\[
\mu_{\rho_Y}\!\left(\bigcup_nB_n\right)
=\sum_n\mu_{\rho_Y}(B_n).
\]

Therefore (Q5.10) is normalized and countably additive. \(\square\)

The precise converse uses the convex and order structure of the full
effect algebra. Let

\[
p:\operatorname{Eff}(\mathcal A_Y^Q)\longrightarrow[0,1]
\tag{Q5.10a}
\]

be affine, satisfy

\[
p(0)=0,
\qquad
p(I)=1,
\tag{Q5.10aa}
\]

and be normal in the sense that

\[
E_n\uparrow E
\quad\Longrightarrow\quad
p(E_n)\uparrow p(E).
\tag{Q5.10b}
\]

Affineness together with \(p(0)=0\) makes \(p\) additive whenever a
sum of effects is again an effect and extends \(p\) uniquely to a positive linear
functional on \((\mathcal A_Y^Q)_{\rm sa}\), and (Q5.10b) makes that
functional normal. Hence there is a unique normal state \(\omega_p\)
such that

\[
p(E)=\omega_p(E).
\tag{Q5.10c}
\]

In a type-I representation with its normal trace this state has the
form \(\omega_p(E)=\operatorname{Tr}(\rho_pE)\) for a unique density
operator \(\rho_p\). The hypotheses are exactly endpoint normalization,
affinity and normality
on the operational effect algebra; no simultaneous valuation of
unperformed sharp observables is introduced.

### 3. Instruments

A Schrödinger-picture instrument is a countably additive map

\[
\mathcal I:\Sigma\to
\operatorname{CP}(\mathcal T_1(\mathcal H_Y))
\tag{Q5.11}
\]

Equations (Q5.11)--(Q5.17) use the type-I predual convention. On a
general detector von Neumann algebra they mean the predual of the
normal Heisenberg instrument (QFT5a.31); all probabilities and
conditional normal states below are unchanged.

such that the nonselective operation

\[
\mathcal I_{\mathsf O}
=\mathcal I(\mathsf O)
\tag{Q5.12}
\]

is trace preserving. Its effect is

\[
E(B)=\mathcal I_B^*(I),
\tag{Q5.13}
\]

and

\[
\Pr(B|\rho)
=\operatorname{Tr}\mathcal I_B(\rho)
=\operatorname{Tr}[\rho E(B)].
\tag{Q5.14}
\]

For \(\Pr(B|\rho)>0\), the conditional post-instrument state is

\[
\rho_B
=\frac{\mathcal I_B(\rho)}
{\operatorname{Tr}\mathcal I_B(\rho)}.
\tag{Q5.15}
\]

A discrete instrument has Kraus form

\[
\mathcal I_i(\rho)
=\sum_\alpha M_{i\alpha}\rho M_{i\alpha}^*,
\qquad
\sum_{i,\alpha}M_{i\alpha}^*M_{i\alpha}=I,
\tag{Q5.16}
\]

with

\[
E_i=\sum_\alpha M_{i\alpha}^*M_{i\alpha}.
\tag{Q5.17}
\]

The instrument produces weighted alternatives and conditional states. It does not by itself identify one alternative as the realized record.

### 4. Field origin of instrument channels

The field’s trace-preserving quantum realization has jump operators satisfying

\[
\frac12\sum_rL_r^*L_r=\gamma K_Y.
\tag{Q5.18}
\]

For bounded \(L_r\), (Q5.18) is an operator identity. For unbounded
field generators it is a closed quadratic-form identity on a common
invariant core
\(\mathscr C_Y\subset
\mathcal D(K_Y^{1/2})\cap\bigcap_r\mathcal D(L_r)\); the associated
form is assumed closable and to generate a conservative normal quantum
dynamical semigroup. The short-time formulas below are evaluated on
that core. Detector-local QFT instruments may instead be supplied
directly by (QFT5a.31), without postulating a global bounded GKLS
generator.

Partition the jump channels into outcome classes \(R_i\). Over a short interval \(\Delta t\), each class is represented by the Kraus family

\[
M_{ir}(\Delta t)
=\sqrt{\Delta t}\,L_r+O(\Delta t^{3/2}),
\qquad r\in R_i,
\tag{Q5.19}
\]

and the no-jump operator is

\[
M_0(\Delta t)
=I-\bigl(iC_Y+\gamma K_Y\bigr)\Delta t
+O(\Delta t^2).
\tag{Q5.20}
\]

Completeness follows to first order:

\[
M_0^*M_0+\sum_i\sum_{r\in R_i}M_{ir}^*M_{ir}
=I+O(\Delta t^2).
\tag{Q5.21}
\]

Thus quantum alternatives are channel-resolved manifestations of the canonical field. The total dissipative capacity is fixed by \(K_Y\), while the physical outcome partition is fixed by the aperture’s Tier-1 realization.

### 5. Quantum dynamics

Closed dynamics is

\[
\rho(t)=U_t\rho(0)U_t^*,
\qquad
U_t=e^{-itC_Y}.
\tag{Q5.22}
\]

Open field dynamics is

\[
\dot\rho
=\mathcal L_Y(\rho)
=-i[C_Y,\rho]
+\sum_r
\left(
L_r\rho L_r^*
-\frac12\{L_r^*L_r,\rho\}
\right).
\tag{Q5.23}
\]

The solution \(\Phi_t=e^{t\mathcal L_Y}\) is completely positive and trace preserving on its declared domain.

The fixed-point operator system is

\[
\mathcal S_{\rm fix}
=\{A\in\mathcal A_Y^Q:
\Phi_t^*(A)=A\ \forall t\ge0\}.
\tag{Q5.24}
\]

Fixed points of a general unital completely positive map need not be
closed under the original operator product. Define instead the common
multiplicative domain

\[
\mathcal C_{\rm mult}
=\bigcap_{t\ge0}
\left\{
A:\begin{array}{l}
\Phi_t^*(A^*A)=\Phi_t^*(A^*)\Phi_t^*(A),\\
\Phi_t^*(AA^*)=\Phi_t^*(A)\Phi_t^*(A^*)
\end{array}
\right\}.
\tag{Q5.24a}
\]

For a normal unital completely positive semigroup this is a
norm-closed unital \(C^*\)-algebra; ultraweak closure is not automatic.
The selected record branch is admissible only if it contains a declared
decoherence-free von Neumann algebra satisfying

\[
\boxed{
\mathcal N_{\rm fix}=\mathcal N_{\rm fix}'',
\qquad
\mathcal N_{\rm fix}
\subseteq\mathcal C_{\rm mult}\cap\mathcal S_{\rm fix}.
}
\tag{Q5.24b}
\]

On \(\mathcal N_{\rm fix}\) every \(\Phi_t^*\) is the identity
\(*\)-homomorphism. This separates the always-valid multiplicative-domain
statement from the additional weak-* regularity required of a stable
record algebra.

A pointer algebra is a commutative von Neumann subalgebra

\[
\mathcal Z_{\rm ptr}
\subseteq\mathcal N_{\rm fix}
\tag{Q5.25}
\]

generated by stable record projections \(\{P_i^{\rm ptr}\}\). Its approximate form satisfies

\[
\|\Phi_t^*(P_i^{\rm ptr})-P_i^{\rm ptr}\|
\le\varepsilon_{\rm ptr}
\qquad
(0\le t\le\Delta t_{\rm rec}).
\tag{Q5.26}
\]

### 6. Decoherence functional and classical alternatives

For a history

\[
\alpha=(i_1,\ldots,i_n)
\tag{Q5.27}
\]

with class operator

\[
C_\alpha
=P_{i_n}(t_n)\cdots P_{i_1}(t_1),
\tag{Q5.28}
\]

define the decoherence functional

\[
\mathfrak D(\alpha,\beta)
=\operatorname{Tr}(C_\alpha\rho C_\beta^*).
\tag{Q5.29}
\]

The history family is \(\varepsilon_{\rm dec}\)-decoherent when

\[
|\mathfrak D(\alpha,\beta)|
\le\varepsilon_{\rm dec}
\sqrt{\mathfrak D(\alpha,\alpha)
\mathfrak D(\beta,\beta)}
\qquad(\alpha\ne\beta).
\tag{Q5.30}
\]

Then

\[
p(\alpha)=\mathfrak D(\alpha,\alpha)
\tag{Q5.31}
\]

obeys the classical sum rules up to \(O(\varepsilon_{\rm dec})\). Decoherence makes alternatives mutually recordable; it is not the operation selecting one history.

For a system–environment state

\[
\sum_ic_i|s_i\rangle|E_0\rangle
\longmapsto
\sum_ic_i|s_i\rangle|E_i\rangle,
\tag{Q5.32}
\]

the reduced coherence is

\[
\langle s_i|\rho_S|s_j\rangle
=c_i\overline{c_j}\langle E_j|E_i\rangle.
\tag{Q5.33}
\]

Orthogonality of environmental conditional states suppresses the off-diagonal terms.

### 7. Record preforms

For an outcome cell \(B\in\Sigma\), define the record preform

\[
\boxed{
R_B^{\rm pre}
=
(B,E(B),\mu_\rho(B),\rho_B,
\mathcal C_B,\mathsf{Trace}_Y).
}
\tag{Q5.34}
\]

\(\mathcal C_B\) contains the apparatus context, aperture face, local channel and resolution. For continuous outcomes, \(B\) is a registered finite-resolution cell or belongs to the almost-everywhere domain of a regular conditional instrument.

The candidate-deposition map adds a physical record support:

\[
\operatorname{PrepDep}:
R_B^{\rm pre}\longmapsto
R_B^{\rm cand}
=
(R_B^{\rm pre},
\mathcal H_B^{\rm rec},
P_B^{\rm rec},
\mathcal D_B,
\kappa_B).
\tag{Q5.35}
\]

Here \(P_B^{\rm rec}\) is the record-subspace projection, \(\mathcal D_B\) is the local deposition channel, and \(\kappa_B\) retains source and aperture lineage.

### 8. Source-prepared selector

Let \(\mathsf{Occ}(\mathcal N)\) be the finite or countable set of
execution occurrences and covariant joint blocks in an executable
measurement network \(\mathcal N\). The source deposition potential assigns a selector bundle

\[
\mathsf U_{\mathcal N}
=\prod_{v\in\mathsf{Occ}(\mathcal N)}[0,1]_v
\tag{Q5.36}
\]

with product measure

\[
\mu_{\mathcal N}
=\bigotimes_{v\in\mathsf{Occ}(\mathcal N)}\lambda_v.
\tag{Q5.37}
\]

The coordinate \(u_v\) is carried by the lineage of the marked source support preparing occurrence \(v\). It satisfies:

\[
\sigma(u_v)\subseteq\mathcal F_v^-,
\qquad
u_v\ \perp\!\!\!\perp\ \mathsf{Setting}_v,
\qquad
u_v\ \perp\!\!\!\perp\ \mathcal F_v^{\rm future},
\tag{Q5.38}
\]

where \(\mathcal F_v^-\) is the source-past sigma algebra. Network redescription permutes occurrence coordinates and preserves \(\mu_{\mathcal N}\).

For the conditional outcome measure \(p_{v,h}\) on a standard-Borel outcome space, choose a measurable transport

\[
T_{v,h}:[0,1]\to\mathsf O_{v,h},
\qquad
(T_{v,h})_*\lambda=p_{v,h}.
\tag{Q5.39}
\]

The selected outcome is

\[
\boxed{
o_v=T_{v,h}(u_v).
}
\tag{Q5.40}
\]

For ordered discrete outcomes \(o_1,\ldots,o_m\),

\[
o_v=o_k
\Longleftrightarrow
\sum_{j<k}p_j
\le u_v<
\sum_{j\le k}p_j.
\tag{Q5.41}
\]

#### Theorem Q5.2 — statistical compatibility

Let

\[
\chi_i(v)=\mathbf1_{\{o_v=o_i\}}.
\tag{Q5.42}
\]

Then

\[
\boxed{
\mathbb E[\chi_i(v)\mid h]
=p_{v,h}(o_i).
}
\tag{Q5.43}
\]

**Proof.** By (Q5.39), the pushforward of the uniform selector coordinate is exactly \(p_{v,h}\). Therefore the preimage of outcome \(o_i\) has Lebesgue measure \(p_{v,h}(o_i)\). \(\square\)

The probability \(p_i\) and realization indicator \(\chi_i\) are different objects:

\[
p_i\in[0,1],
\qquad
\chi_i\in\{0,1\},
\qquad
\sum_i\chi_i=1.
\tag{Q5.44}
\]

Their connection is (Q5.43), not \(p_i=\chi_i\).

The selector is contextual because \(T_{v,h}\) depends on the implemented instrument. It assigns no global value to an observable outside its executed context.

### 9. Sequential and adaptive measurements

Let \(H_n\) be the realized history after \(n\) occurrences. The conditional quantum kernel is

\[
P_{n+1}(do|H_n)
=\operatorname{Tr}
\mathcal I_{n+1,do}(\rho_{H_n}).
\tag{Q5.45}
\]

The selector uses the next source coordinate and the history-dependent transport:

\[
o_{n+1}
=T_{n+1,H_n}(u_{n+1}).
\tag{Q5.46}
\]

For every finite cylinder,

\[
P(o_1,\ldots,o_n)
=\prod_{k=1}^nP_k(o_k|o_{<k}).
\tag{Q5.47}
\]

Standard-Borel measurability and kernel consistency give a unique countable history measure. Histories of measure zero enter a null state \(\dagger\); no conditional event is created on an undefined null history.

This construction is the randomization lemma applied at each causal
node. More precisely, if \(K_n(H_{n-1},do_n)\) is a measurable
probability kernel on a standard-Borel outcome space, there are jointly
measurable maps \(T_n(H_{n-1},u_n)\) with

\[
(T_n(H_{n-1},\cdot))_*\lambda
=K_n(H_{n-1},\cdot).
\tag{Q5.47a}
\]

The Ionescu--Tulcea extension theorem then makes the pushforward of
\(\lambda^{\otimes\mathbb N}\) under the recursion (Q5.46) equal to
the unique history measure generated by the kernels. Thus the selector
adds single-history realization but changes none of the finite or
countable operational distributions.

For repeated identical independent preparations, the strong law gives

\[
\frac1N\sum_{v=1}^N\chi_i(v)
\longrightarrow p_i
\qquad\text{almost surely}.
\tag{Q5.48}
\]

For adaptive experiments,

\[
M_N
=\sum_{v=1}^{N}
\bigl(\chi_i(v)-p_i(v|H_{v-1})\bigr)
\tag{Q5.49}
\]

is a bounded-increment martingale, so \(M_N/N\to0\) almost surely. Observed frequencies therefore track conditional Born weights.

### 10. Entangled joint selection

For spacelike measurement settings \(x,y\) and local effects \(E_a^x,F_b^y\), the joint quantum distribution is

\[
p_{ab}^{xy}
=\omega(E_a^xF_b^y).
\tag{Q5.50}
\]

The pair is selected as one covariant block:

\[
(a,b)=T_{xy}(u_{AB}),
\qquad
(T_{xy})_*\lambda=p^{xy}.
\tag{Q5.51}
\]

No preferred temporal ordering between the spacelike outcomes is introduced. If the local effects commute and are normalized,

\[
\sum_bp_{ab}^{xy}
=\omega(E_a^x),
\qquad
\sum_ap_{ab}^{xy}
=\omega(F_b^y).
\tag{Q5.52}
\]

The marginals are independent of the distant setting. Contextual joint selection reproduces entangled correlations while preserving operational no-signalling.

The joint transport in (Q5.51) is not a Bell-local factorization. It
defines values only for the one executed context \((x,y)\); it does not
provide a joint random variable for all counterfactual settings. The
setting-independent datum is the atomless selector measure, while the
transport is instrument-context dependent. The construction can
therefore reproduce Bell-inequality violation without changing either
operational marginal.

### 11. Actual deposition

Keep the realized alternative as an explicit classical label register,
\[
\mathcal H_{\rm sel}
=\ell^2(\mathsf O_{\rm disc})\otimes
\mathcal H_{\rm sys}\otimes\mathcal H_{\rm rec},
\qquad
P_i^{\rm sel}=|i\rangle\langle i|\otimes I.
\tag{Q5.52a}
\]
For a general standard-Borel outcome space the same construction is the
direct-integral instrument.  The conditional state \(\rho_i^{\rm sel}\)
is embedded in the \(i\)-label block.  For every selected outcome \(i\),
let

\[
\mathcal D_i^{\rm act}:
\mathcal T_1(\mathcal H_{\rm sel})
\to
\mathcal T_1(\mathcal H_{\rm sel})
\tag{Q5.53}
\]

be a completely positive trace-nonincreasing local deposition channel
supported on the \(i\)-label block.  Include a conditional no-deposit
channel \(\mathcal D_{\bot|i}\) on the same block such that

\[
\boxed{
\mathbb D_{\rm dep}
:=
\sum_i
\left(\mathcal D_i^{\rm act}+\mathcal D_{\bot|i}\right)
\quad\text{is trace preserving on the block-diagonal selector algebra}.
}
\tag{Q5.54}
\]

Equivalently, precompose \(\mathbb D_{\rm dep}\) with dephasing in the
label register to obtain a CPTP map on all of
\(\mathcal T_1(\mathcal H_{\rm sel})\).  This types deposition as a
conditional channel after selection and prevents a second summation over
already exclusive quantum outcomes.

The deposition efficiency is

\[
\eta_i(\rho)
=\operatorname{Tr}\mathcal D_i^{\rm act}(\rho_i^{\rm sel}).
\tag{Q5.55}
\]

The actual-deposition indicator \(d_i\in\{0,1\}\) satisfies

\[
\mathbb E[d_i|\chi_i=1,\rho]
=\eta_i(\rho).
\tag{Q5.56}
\]

This indicator is the stochastic dilation of the totalized deposition
instrument, not an additional untyped choice. Explicitly,

\[
P_i^{\rm dep}(d=1\mid\rho_i^{\rm sel})=\eta_i(\rho),
\qquad
P_i^{\rm dep}(d=0\mid\rho_i^{\rm sel})=1-\eta_i(\rho).
\tag{Q5.56a}
\]

The next unused coordinate of the atomless source-prepared selector
bundle realizes this binary kernel. Equivalently, success and failure
are outcomes of one normalized instrument. Both descriptions retain
the complete law and forbid resampling after a failed deposit.

An actual record occurs when

\[
\boxed{
\chi_i d_i=1.
}
\tag{Q5.57}
\]

Its state is

\[
\rho_i^{\rm act}
=\frac{\mathcal D_i^{\rm act}(\rho_i^{\rm sel})}
{\eta_i(\rho)}
\tag{Q5.58}
\]

when \(\eta_i(\rho)>0\). The unconditional probability of an actual \(i\)-deposit is

\[
\Pr(D_i^{\rm act})
=p_i\,\eta_i.
\tag{Q5.59}
\]

The failure probability

\[
\Pr(\bot)
=\sum_ip_i(1-\eta_i)
=1-\sum_ip_i\eta_i
\tag{Q5.60}
\]

remains part of the outcome space. It is never removed by renormalizing over successful deposits.

### 12. Deposition no-signalling

Let \(\mathbb D_{AB}^{xy}\) be the complete joint deposition kernel, including no-click and failure outcomes. Local deposition respects no-signalling when

\[
\operatorname{marg}_A\mathbb D_{AB}^{xy}
=\mathbb D_A^x,
\qquad
\operatorname{marg}_B\mathbb D_{AB}^{xy}
=\mathbb D_B^y.
\tag{Q5.61}
\]

The right-hand sides are independent of the remote settings. Equation (Q5.61) is checked on the complete normalized kernel; postselected marginals are not substituted for it.

A sufficient operator condition is semicausality of the totalized
nonselective deposition channel. In a tensor-product realization,

\[
\operatorname{Tr}_B\!\circ\mathbb D_{AB}^{xy}
=\mathbb D_A^x\circ\operatorname{Tr}_B,
\qquad
\operatorname{Tr}_A\!\circ\mathbb D_{AB}^{xy}
=\mathbb D_B^y\circ\operatorname{Tr}_A.
\tag{Q5.61a}
\]

For local QFT algebras the replacement is that every nonselective local
operation acts identically on the spacelike separated commuting
algebra. Either condition implies (Q5.61), including its no-click and
failure atoms.

### 13. Distinguishability of records

Let \(P_i^{\rm rec}\) be mutually orthogonal pointer projections:

\[
P_i^{\rm rec}P_j^{\rm rec}
=\delta_{ij}P_i^{\rm rec}.
\tag{Q5.62}
\]

For an actual record state, define accuracy

\[
a_i
=\operatorname{Tr}(P_i^{\rm rec}\rho_i^{\rm act}).
\tag{Q5.63}
\]

For conditional record states \(\rho_i^R,\rho_j^R\), define distinguishability

\[
\eta_{ij}
=\frac12\|\rho_i^R-\rho_j^R\|_1.
\tag{Q5.64}
\]

The optimal binary decoding error is

\[
p_{\rm err}^{ij}
=\frac12(1-\eta_{ij})
\tag{Q5.65}
\]

for equal priors. A record family is \((\varepsilon_{\rm rec},\delta_{\rm dis})\)-distinguishable when

\[
a_i\ge1-\varepsilon_{\rm rec},
\qquad
\eta_{ij}\ge1-\delta_{\rm dis}
\quad(i\ne j).
\tag{Q5.66}
\]

### 14. Redundant environmental encoding

In a finite system, or in a detector representation for which the split
property holds, decompose the accessible environment into disjoint
fragments:

\[
\mathcal H_E
=\bigotimes_{k=1}^{N}\mathcal H_{F_k}.
\tag{Q5.67}
\]

For relativistic local algebras this tensor product is not assumed at a
sharp boundary. Registered fragments \(F_k\Subset\widetilde F_k\) are
admissibly independent when there are type-I factors

\[
\mathcal N(F_k)
\subset\mathfrak T_k
\subset\mathcal N(\widetilde F_k),
\qquad
[\mathfrak T_j,\mathfrak T_k]=0\quad(j\ne k),
\tag{Q5.67a}
\]

with mutually spacelike collars. The induced split representation
licenses (Q5.67). Equivalently, all formulas below may be read on the
commuting fragment algebras with their normal product extension. Only
operationally split fragments count toward redundancy, so a formal
factorization of a type-III local algebra cannot manufacture
objectivity.

Let \(I\) be the classical record variable with probabilities \(p_i\). For fragment \(F\), define the classical–quantum state

\[
\rho_{IF}
=\sum_ip_i|i\rangle\langle i|
\otimes\rho_{F|i}.
\tag{Q5.68}
\]

The fragment information is the Holevo quantity

\[
\chi(I:F)
=S\!\left(\sum_ip_i\rho_{F|i}\right)
-\sum_ip_iS(\rho_{F|i}).
\tag{Q5.69}
\]

For information deficit \(0<\delta<1\), define the redundancy

\[
\boxed{
R_\delta
=\max\left\{
r:\exists\text{ disjoint }F_1,\ldots,F_r,\
\chi(I:F_k)\ge(1-\delta)H(I)
\right\}.
}
\tag{Q5.70}
\]

When \(N\) independent fragments carry conditional states \(\rho_{F|i}\), the optimal discrimination error obeys the quantum Chernoff bound

\[
p_{\rm err}^{(N)}
\lesssim
\exp[-N\xi_{\rm QCB}],
\tag{Q5.71}
\]

where

\[
\xi_{\rm QCB}
=-\log
\inf_{0\le s\le1}
\operatorname{Tr}
\bigl[(\rho_{F|i})^s(\rho_{F|j})^{1-s}\bigr].
\tag{Q5.72}
\]

Redundancy therefore converts microscopic record distinguishability into exponentially stable public accessibility.

### 14a. Spectrum-broadcast normal form

The exact algebraic form of an independently readable objective record
is a spectrum-broadcast state. For a pointer label \(I\), system \(S\),
and disjoint accessible fragments \(F_1,\ldots,F_R\), it is

\[
\boxed{
\rho_{SF_1\cdots F_R}^{\rm SBS}
=\sum_i p_i\,|i\rangle\langle i|_S
\otimes\rho_i^{F_1}\otimes\cdots\otimes\rho_i^{F_R},
}
\tag{Q5.72a}
\]

with

\[
\rho_i^{F_k}\rho_j^{F_k}=0
\qquad(i\ne j)
\tag{Q5.72b}
\]

for every registered fragment. Orthogonal support supplies a local
decoder on each fragment that reads \(i\) without acting on \(S\) or
the other fragments. Conversely, exact agreement of independent local
readers, nondisturbance of the pointer algebra and absence of
inter-fragment conditional correlations imply (Q5.72a) on the generated
record algebra.

At finite resolution define

\[
\varepsilon_{\rm SBS}
=\inf_{\sigma\in\mathsf{SBS}}
\frac12\|\rho_{SF_1\cdots F_R}-\sigma\|_1.
\tag{Q5.72c}
\]

Every measurement probability obtained from the actual state differs
from that of its closest spectrum-broadcast state by at most
\(\varepsilon_{\rm SBS}\). This turns the qualitative statement that
"many observers see the same result" into a norm-controlled property
and prevents mere decoherence, without redundant encoding, from being
misclassified as objectivity.

### 15. Persistence

Let \(\Phi_t^{\rm rec}\) be the record channel after deposition. The survival probability is

\[
s_i(t)
=\operatorname{Tr}
\left[
P_i^{\rm rec}\,
\Phi_t^{\rm rec}(\rho_i^{\rm act})
\right].
\tag{Q5.73}
\]

The record persists over \([0,\Delta t]\) when

\[
\boxed{
S_i(\Delta t)
=\inf_{0\le t\le\Delta t}s_i(t)
\ge1-\varepsilon_{\rm pers}.
}
\tag{Q5.74}
\]

If the dual generator satisfies

\[
\|\mathcal L_{\rm rec}^*(P_i^{\rm rec})\|
\le\epsilon_i,
\tag{Q5.75}
\]

then

\[
s_i(t)\ge s_i(0)-\epsilon_it,
\tag{Q5.76}
\]

so a sufficient persistence interval is

\[
\Delta t
\le
\frac{s_i(0)-1+\varepsilon_{\rm pers}}
{\epsilon_i}
\tag{Q5.77}
\]

when the numerator is positive.

For a metastable record protected by a carrier barrier \(\Delta K_i\), the escape rate has the spectral form

\[
\Gamma_i^{\rm esc}
\sim A_i e^{-\beta_{\rm eff}\Delta K_i},
\tag{Q5.78}
\]

giving lifetime

\[
\tau_i^{\rm rec}\sim(\Gamma_i^{\rm esc})^{-1}.
\tag{Q5.79}
\]

### 16. Accessibility

Let \(\{\mathcal M_\ell\}_{\ell=1}^{N_{\rm acc}}\) be physically independent decoding channels acting on disjoint accessible fragments. Define

\[
A_{\epsilon}
=\frac1{N_{\rm acc}}
\sum_{\ell=1}^{N_{\rm acc}}
\mathbf1\{
p_{\rm err}(\mathcal M_\ell)\le\epsilon
\}.
\tag{Q5.80}
\]

\(A_\epsilon\) measures the fraction of available channels through which the same record can be decoded to error \(\epsilon\) without disturbing the original record support.

### 17. Objective record criterion

An actual deposit \(D_i^{\rm act}\) is objective over resolution parameters

\[
\Theta_{\rm obj}
=(\varepsilon_{\rm rec},\delta_{\rm dis},
\delta,\epsilon,\varepsilon_{\rm SBS},\varepsilon_{\rm pers},
R_{\min},A_{\min},\Delta t)
\tag{Q5.81}
\]

when:

\[
\boxed{
\begin{aligned}
a_i&\ge1-\varepsilon_{\rm rec},\\
\min_{j\ne i}\eta_{ij}&\ge1-\delta_{\rm dis},\\
R_\delta&\ge R_{\min},\\
A_\epsilon&\ge A_{\min},\\
\inf_{\sigma\in\mathsf{SBS}}
\tfrac12\|\rho_{SF_1\cdots F_R}-\sigma\|_1
&\le\varepsilon_{\rm SBS},\\
S_i(\Delta t)&\ge1-\varepsilon_{\rm pers},\\
\kappa_i&\text{ preserves source-to-record lineage}.
\end{aligned}
}
\tag{Q5.82}
\]

The objective-record map is

\[
\operatorname{ObjPers}_{\Theta_{\rm obj}}:
D_i^{\rm act}
\longmapsto
\begin{cases}
D_i^{\rm obj},&\text{if (Q5.82) holds},\\
\bot_{\rm obj},&\text{otherwise}.
\end{cases}
\tag{Q5.83}
\]

This criterion replaces a single unspecified objectivity score with measurable operator and information-theoretic quantities.

### 18. Complete record chain

The five record stages are

\[
\boxed{
R^{\rm pre}
\xrightarrow{\operatorname{PrepDep}}
R^{\rm cand}
\xrightarrow{\operatorname{Sel}}
R^{\rm sel}
\xrightarrow{\operatorname{Dep}^{\rm act}}
R^{\rm act}
\xrightarrow{\operatorname{ObjPers}}
R^{\rm obj}.
}
\tag{Q5.84}
\]

Their types are:

\[
\begin{aligned}
R^{\rm pre}&:\text{weighted quantum alternative},\\
R^{\rm cand}&:\text{alternative with a physical deposition support},\\
R^{\rm sel}&:\text{one contextually selected alternative},\\
R^{\rm act}&:\text{a physically deposited record state},\\
R^{\rm obj}&:\text{a distinguishable, redundant, accessible, persistent deposit}.
\end{aligned}
\tag{Q5.85}
\]

No arrow in (Q5.84) is an identity.

### 19. Objective archive

The objective archive of a realization is

\[
\boxed{
\mathcal A_Y^{\rm obj}
=\operatorname{PredCl}_\kappa
\{D_i^{\rm obj}:i\in I_Y^{\rm obj}\}.
}
\tag{Q5.86}
\]

Here \(\operatorname{PredCl}_\kappa\) closes the event set under
objective predecessors in the lineage/deposition relation. If a
physical predecessor has fallen below the objectivity threshold, its
retained boundary trace is carried as a typed archive-boundary element
rather than promoted to an objective record. The event subobject is
therefore predecessor closed, while missing predecessors remain
explicit boundary data for the geometric reconstruction.

Each objective record carries

\[
D_i^{\rm obj}
=
(i,\rho_i^{\rm act},P_i^{\rm rec},
\Theta_i^{\rm obj},
\ell_i,\kappa_i,\mathsf{Bnd}_i).
\tag{Q5.87}
\]

Here \(\ell_i\) is record lineage and \(\kappa_i\) is the complete trace

\[
\kappa_i:
X
\to Y
\to\mathfrak S_Y
\to K_Y
\to\mathfrak F_Y
\to R_i^{\rm pre}
\to D_i^{\rm obj}.
\tag{Q5.88}
\]

The archive has no assumed spacetime coordinates. Its primitive relations are shared lineage, source-support overlap, channel dependence and intervention response. Those relations form the pregeometry input.

### 20. Quantum–record theorem

#### Theorem Q5.3 — complete quantum record projection

Let a quantum-capable field realization supply:

\[
(\mathcal A_Y^Q,\rho_Y,\mathcal I,
\mathcal L_Y,\mathsf U_{\mathcal N},
\{\mathcal D_i^{\rm act}\},\Phi_t^{\rm rec}).
\tag{Q5.89}
\]

Assume:

1. \(\rho_Y\) is positive, normal and normalized;
2. \(\mathcal I\) is a normalized normal instrument on either the
   type-I carrier algebra or the detector-local completion
   (Q5.7a)--(Q5.7b);
3. selector transport satisfies (Q5.38)–(Q5.40);
4. the complete deposition channel satisfies (Q5.54);
5. spacelike joint kernels satisfy (Q5.61);
6. redundant fragments satisfy the split condition (Q5.67a), or its
   commuting-algebraic equivalent, and an actual deposit satisfies the
   objective conditions (Q5.82).

Then:

- the alternative weights form the Born probability measure;
- contextual selection reproduces all instrument probabilities;
- sequential selection reproduces the quantum history measure;
- entangled joint blocks preserve operational no-signalling;
- actual deposition retains null and failure outcomes;
- every accepted objective record is distinguishable, redundantly encoded, accessible, persistent and source-lineaged;
- the archive \(\mathcal A_Y^{\rm obj}\) is a well-defined input to pregeometry.

**Proof.** Theorem Q5.1 gives the Born measure. The pushforward identity (Q5.39) gives contextual and sequential probability matching; standard kernel composition gives histories. Equations (Q5.50)–(Q5.52) give joint no-signalling, extended through deposition by (Q5.61). Trace preservation of (Q5.54) retains all failure mass. Conditions (Q5.66), (Q5.70), (Q5.74), (Q5.80) and lineage preservation give (Q5.82). \(\square\)

### 21. Quantum-to-pregeometry handoff

The completed quantum and record projection is

\[
\boxed{
\begin{aligned}
\mathfrak F_Y
&\longrightarrow
(\mathcal A_Y^Q,\rho_Y,\mathcal I,\mu_\rho)\\
&\longrightarrow
\{R_i^{\rm pre}\}\\
&\xrightarrow{\operatorname{Sel}}
R_{i_*}^{\rm sel}\\
&\xrightarrow{\operatorname{Dep}^{\rm act}}
D_{i_*}^{\rm act}\\
&\xrightarrow{\operatorname{ObjPers}_{\Theta_{\rm obj}}}
D_{i_*}^{\rm obj}\\
&\longrightarrow
\mathcal A_Y^{\rm obj}.
\end{aligned}}
\tag{Q5.90}
\]

Only the final archive enters the construction of events, causal dependency, relational distance and spacetime geometry.
