# Chapter 8: A deterministic pilot medium and a complete path limit

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

<a id="ch:pilot"></a> 

<a id="section-8-1"></a>

## 8.1 The declared microscopic inventory

<a id="section:pilot:the-declared-microscopic-inventory"></a> The pilot completion uses a different ontology <a id="citation-13"></a>[[34](/consciousness/monograph/bibliography#bib-RodgersPilot), [37](/consciousness/monograph/bibliography#bib-RodgersMeasurement)]. Its complete finite ordinary configuration graph includes source, apparatus, fuel, loss products, displays, archives, receivers, clock, and any actual basis coordinate of a reference. One predesignated carrier is the actual ordinary configuration. Other carrier positions and packet banks are pilot degrees of freedom, not independent copies of the unknown quantum input.

Four constitutive commitments are essential. The canonical field has a numerical Hermitian energy with primitive bond couplings. A declared exporter and complete binary reaction catalogue govern the pilot medium. Additional direct ordinary forces depending on readable pilot coordinates are absent from that catalogue. Finally, deterministic gas flight and contact are supplied with an initially independent spatial ensemble and a carrier preparation law. These are physical assumptions; in particular, the access restriction is not a rule allowing a coupling and then refusing to examine its consequences.

The microscopic theory is hybrid: a canonical coherent field, continuous free flight, and explicit contact and export rules. Finite contacts have reversible logical lifts with retained blank receivers. The autonomous ordinary circuit is a finite Hermitian Hamiltonian. A smooth realization of an isolated contact module does not establish that the entire hybrid source follows from one universal smooth Hamiltonian. That distinction is retained throughout.



<a id="section-8-2"></a>

## 8.2 Bond ownership and conservative export

<a id="section:pilot:bond-ownership-and-conservative-export"></a> For a bond $e=(r,q)$, introduce a connection $\chi_e$ and conjugate coordinate $\Pi_e$. A canonical action is <a id="eq:pilotaction"></a>


$$
\begin{aligned}
S=\int\bigg[&\frac{i\hbar}{2}
(\Psi^\dagger\dot\Psi-\dot\Psi^\dagger\Psi)
+\hbar\sum_e\Pi_e\dot\chi_e-h(\Psi,\chi,t)\bigg]{\,\mathrm d} t,\\
h={}&\sum_r\Psi_r^*H_{rr}\Psi_r+
\sum_{e=(r,q)}\bigl(e^{i\chi_e}\Psi_q^*H_{qr}\Psi_r+\mathrm{c.c.}\bigr).
\end{aligned}
$$

Equation (8.1).

 Since $h$ does not depend on $\Pi$, an initial $\chi=0$ remains zero. The equations give Schrödinger evolution and 

$$

\dot\Pi_e=-\hbar^{-1}\partial_{\chi_e}h=J_e.

$$

 Within real quadratic energies additive over primitive vertices and binary bonds, endpoint phase covariance forces the displayed $e^{i\chi}$ dependence once the ordinary $H_{qr}$ is fixed. A gauge-invariant cycle term could contribute an extra divergence-free torque without changing that ordinary matrix at $\chi=0$. Primitive bond additivity therefore matters.

Let $u_e=N(\Pi_e-\Pi_e(0))-k_e$, with initially $u_e=k_e=0$. At a first hit $u_e=\pm1$, export one signed packet, advance $k_e$ by that sign, and reset the residue to zero. Then <a id="eq:exportbound"></a>


$$

\sup_{t\le T}\left|\frac{k_e(t)}N-\int_0^tJ_e(s){\,\mathrm d} s\right|\le\frac1N,
\qquad \#\mathrm{exports}_e\le N\int_0^T|J_e|{\,\mathrm d} t.

$$

Equation (8.2).

 The first inequality is the residue bound. Each completed excursion costs at least $1/N$ of total action variation, proving the second. A finite preallocated packet bank therefore suffices on a promised finite horizon.

Assign charge $e_r$ to a carrier at $r$ and $b_e=e_q-e_r$ to a positive packet. The binary charge-conserving service $e_i+b_e=e_j$ forces $i=r,j=q$. Negative packets reverse that service. Opposite packets may recombine to neutral products. With carrier counts $n$, net packet count $Z$, and coherent weights $w$, the inventory 

$$

\mathcal C=n+BZ+Bu-Nw

$$

 is conserved. The continuous terms cancel by $\dot u=NJ$ and $\dot w=BJ$; each discrete reaction preserves the same expression. This is an exact inventory law for the specified hybrid dynamics.



<a id="section-8-3"></a>

## 8.3 Spatial preparation produces timing

<a id="section:pilot:spatial-preparation-produces-timing"></a> Allocate a candidate channel to every possible packet–carrier pair and to every pair of packet slots eligible for recombination. Their fixed frequencies depend on declared geometry and response coefficients, not on the instantaneous Bell quotient. Let the total candidate frequency be $R_N$. Prepare $M_N$ particles with independent uniform longitudinal positions in $[-L_N,0]$, common speed $v$, and independent transverse marks, where $L_N=M_Nv/R_N>vT$.

Each particle crosses the contact plane once at the deterministic time fixed by its initial position. The probability that it arrives by $T$ is $p=R_NT/M_N$. Conditional on arrival, the time is uniform on $[0,T]$ and its channel mark has the assigned distribution. The finite marked history is thus compared with a marked Poisson history by a binomial–Poisson coupling. A safe bound is <a id="eq:gasbound"></a>


$$

{d_{\mathrm{TV}}}({\operatorname{Law}}\mathcal G_N,{\operatorname{Law}}\mathcal G_{\mathrm P})
\le 2(R_NT)^2/M_N.

$$

Equation (8.3).

 Using a common causal reaction map cannot increase this distance. Complete receiver labels must be transported by a common decoration kernel; particle identities are not silently replaced by independent labels.

This is a derivation of timing from a declared spatial ensemble, not a preparation of desired future Bell event times. The ensemble assumption remains essential. Correlated incoming positions can generate another contact history. Once the complete initial microstate is fixed, the finite microdynamics is deterministic.

Fast but finite opposite-packet recombination suppresses balanced service. The comparison proof couples the two-species device to a signed-queue process and bounds the service that occurs before opposite packets annihilate. By choosing the recombination scale and gas size after fixing the graph, packet budgets, and horizon, both comparison errors tend to zero. The physical bank remains finite at each parameter value; virtual banks used to define a common Poisson comparison are mathematical comparison devices, not uncounted physical resources.



<a id="section-8-4"></a>

## 8.4 From signed queues to the Bell path

<a id="section:pilot:from-signed-queues-to-the-bell-path"></a> Write $x_r=n_r/N$, $m_e=\mu_NZ_e/N$, and, for $e=(r,q)$, 

$$

\Phi_e^+=\kappa_ex_r[m_e]_+,\qquad
\Phi_e^-=\kappa_ex_q[-m_e]_+.

$$

 A tagged carrier at the eligible origin sees rate $\Phi_{qr}/x_r$. This denominator follows from equal packet–carrier response and the number of eligible carriers. It is not inserted as a Bell rule into the contact chemistry.

The exact balance between census, queued charge, and coherent weights is <a id="eq:queuebalance"></a>


$$

x(t)+BZ(t)/N-w(t)
=x(0)-w(0)+Be^N(t),
\qquad {\lVert e^N\rVert}_\infty\le C/N.

$$

Equation (8.4).

 For a fixed finite graph and horizon, bounded-variation currents and $\mu_N\to\infty$, $\mu_N/N\to0$ give integrated directional-flux and census convergence. The proof uses a positive population cutoff for a companion queue, scalar monotonicity, a martingale estimate, and a separate low-population charge bound. A full proof of the implication used here is given in Appendix [A](/consciousness/monograph/appendix-a-contact-kinetic-and-complete-path-estimates#app:kinetic); it is important because replacing low weights by a fixed positive lower bound would omit nodes and dark intervals.

Let 

$$

\epsilon_F={\mathbb E}\int_0^T\sum_e\left(
|\Phi_e^+-[J_e]_+|+|\Phi_e^--[-J_e]_+|\right){\,\mathrm d} t,
\quad
\epsilon_x={\mathbb E}\sup_{t\le T}{\lVert x(t)-w(t)\rVert}_1.

$$

 For a tag initialized with $\nu\le Cw(0)$, a coupling with the minimal Bell path gives, along suitable regular levels $\varepsilon\downarrow0$, <a id="eq:tagbound"></a>


$$

{d_{\mathrm{TV}}}({\operatorname{Law}} X^N,{\operatorname{Law}} X^B)
\le b_C(\varepsilon)+\frac{2\epsilon_x+2\epsilon_F}{\varepsilon}
+\frac{C_GJ_*T}{\varepsilon^2}\epsilon_x,

$$

Equation (8.5).

 where $b_C(\varepsilon)$ bounds visits to low-weight sectors. It tends to zero along levels controlled by the variation of $w$. The target has finite expected jump count and does not remain at a sector as its weight vanishes. The resulting convergence is on complete physical-time paths, including reversals and null intervals.

For a fixed finite clock circuit, the coherent weight envelopes are explicit and unimodal. The source proof yields a conservative uniform rate $O(N^{-1/70})$ with 

$$

\mu_N=N^{1/2},\qquad\delta=N^{-1/7},\qquad\varepsilon=N^{-1/35},

$$

 and appropriately faster gas and recombination scales <a id="citation-14"></a>[[34](/consciousness/monograph/bibliography#bib-RodgersPilot)]. This is not a rate uniform over growing circuits, increasing reference dimensions represented as new graph coordinates, or unlimited storage times.



<a id="section-8-5"></a>

## 8.5 A static finite Hamiltonian for the whole programme

<a id="section:pilot:a-static-finite-hamiltonian-for-the-whole-programme"></a> Let $U_0,\ldots,U_{\ell-1}$ be material gates, including all receivers and an isolated reference where required. Put $V_0=I$, $V_n=U_{n-1}\cdots U_0$, and $c_n=\sqrt{(n+1)(\ell-n)}$. The static clock Hamiltonian is <a id="eq:clockH"></a>


$$

H_F=\hbar\nu\sum_{n=0}^{\ell-1}c_n
\left({\lvert n+1\rangle}{\langle n\rvert}\otimes U_n+{\lvert n\rangle}{\langle n+1\rvert}\otimes U_n^\dagger\right).

$$

Equation (8.6).

 This familiar circuit-to-Hamiltonian architecture is related to reversible computation and engineered transfer chains <a id="citation-15"></a>[[17](/consciousness/monograph/bibliography#bib-Feynman1986), [11](/consciousness/monograph/bibliography#bib-Christandl2004)]. The particular propagation identity needed here follows directly.



**Theorem 8.1 (Finite autonomous propagation).**

<a id="thm:clock"></a> From ${\lvert 0\rangle}\otimes\psi$, the wave at time $t$ is 

$$

\Psi(t)=\sum_{n=0}^{\ell}(-i)^n\sqrt{\binom\ell n}
\cos^{\ell-n}(\nu t)\sin^n(\nu t){\lvert n\rangle}\otimes V_n\psi.

$$

 At $T=\pi/(2\nu)$ the complete programme has been applied. Moreover $H_F+\hbar\nu\ell I\ge0$. 

 

**Proof.**

Conjugate by $D=\sum_n{\lvert n\rangle}{\langle n\rvert}\otimes V_n$. The gate factors disappear, leaving a weighted clock chain tensor the identity. That clock chain is the restriction of $\hbar\nu\sum_{j=1}^{\ell}X_j$ to the permutation-symmetric subspace of $\ell$ qubits. Expanding $(\cos\nu t{\lvert 0\rangle}-i\sin\nu t{\lvert 1\rangle})^{\otimes\ell}$ gives the coefficients. Its spectrum lies in $[-\hbar\nu\ell,\hbar\nu\ell]$, proving the lower bound. 

□





**Theorem 8.2 (A historical archive at a monomial cut).**

<a id="thm:archivecut"></a> Suppose $U_m$ is monomial in the complete material basis: $(U_m)_{yx}=e^{i\vartheta_x}{\mathbf 1}_{\{y=\pi(x)\}}$. In the Bell process of [Equation 8.6](/consciousness/monograph/a-deterministic-pilot-medium-and-a-complete-path-limit#eq:clockH) in equilibrium, the clock cut $m\to m+1$ is crossed exactly once before $T$, almost surely. At that crossing the actual material label changes by $\pi$. If the permutation copies a working label into a previously blank archive and every later gate preserves the archive label, the archive contains the actual working label at that crossing for the rest of the first pass. 

 

**Proof.**

Write the scalar clock coefficient as $(-i)^na_n(t)$ with $a_n>0$ inside the first pass. Fine current across the cut is 

$$

2\nu c_ma_{m+1}a_m\operatorname{Re}
\left[(V_{m+1}\psi)_y^*(U_m)_{yx}(V_m\psi)_x\right].

$$

 For the monomial gate its nonzero real factor is $|(V_m\psi)_x|^2$, so every fine current is forward. The path begins below and ends above the cut with probability one, hence crosses it exactly once. Its permitted edge implements $\pi$. Later edges preserve the archive by hypothesis. Integrating the fine current gives the pre-crossing label law $|(V_m\psi)_x|^2$. 

□



The monomial hypothesis cannot be dropped. A general unitary may have backward fine currents despite a forward coarse clock flux. Nor does the archive theorem extend indefinitely: the finite clock eventually reverses and can unwrite the programme. The first-pass domain is the physical retention claim, and the same complete-path comparison transfers it to the finite pilot approximation with its stated error.



<a id="section-8-6"></a>

## 8.6 The observer-independent conclusion

<a id="section:pilot:the-observer-independent-conclusion"></a> The source action, export, contact geometry, initial ensemble, recombination, census tracking, and autonomous record programme form a complete chain under the declared pilot constitution. No stage waits for subjective noticing. Its dependence on new force and preparation laws is explicit, and finite members are controlled approximations to the limiting Bell path rather than exact finite-resource realizations of that path.

This conclusion is sufficient for the consciousness monograph's purpose. A psychophysical assignment can concern the same realized process without being invoked to make the physical history well defined. The existence of two distinct constitutions with different microscopic commitments also cautions against deriving source identity from outward operational similarity.
