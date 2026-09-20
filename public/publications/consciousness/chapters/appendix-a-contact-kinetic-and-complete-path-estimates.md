# Appendix A: Contact, kinetic, and complete-path estimates

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

<a id="app:kinetic"></a> 

<a id="section-A-1"></a>

## A.1 Finite contact gas and its Poisson comparison

<a id="section:kinetic:finite-contact-gas-and-its-poisson-comparison"></a> This appendix supplies the quantitative implication used in the pilot construction. It concerns a fixed finite graph and a fixed physical horizon, not a limit in which the graph, reference, or duration also grows. The primitive export and contact laws remain constitutive inputs <a id="citation-53"></a>[[34](/consciousness/monograph/bibliography#bib-RodgersPilot), [37](/consciousness/monograph/bibliography#bib-RodgersMeasurement)].

Take $M$ independent points with uniform positions in an interval of length $M/R$, translated at unit speed towards a contact surface. During $[0,T]$, with $RT\le M$, each point crosses with probability $p=RT/M$ and crosses at most once. Conditional on crossing, its time is uniform on $[0,T]$. Independent marks can be attached in both descriptions. Compare the crossing indicator of each point with a Poisson count of mean $p$. Their exact total variation is 

$$

{d_{\mathrm{TV}}}(\operatorname{Bernoulli}(p),\operatorname{Poisson}(p))
=p(1-e^{-p})\le p^2.

$$

 Indeed the Bernoulli probability at zero is $1-p\le e^{-p}$, its probability at one exceeds $pe^{-p}$, and the Poisson probabilities at two and above have no Bernoulli counterpart. The sum of the positive differences is $p-pe^{-p}$.

Couple the $M$ independent counts and, when they agree, use the same uniform crossing time and mark. A union bound gives complete marked-history error at most <a id="eq:appgas"></a>


$$

\Delta_{\rm gas}\le Mp^2=\frac{(RT)^2}{M}.

$$

Equation (A.1).

 The superposition of the Poisson counts with uniform event times is a Poisson point process on the physical interval with rate $R$. Any common causal processing of these marked contacts contracts total variation. This is why the bound controls subsequent contact-selected events rather than merely a total count.

The finite gas is not itself memoryless. Conditional on $k$ crossings by time $t$, the residual rate is $(M-k)/(M/R-t)$ while the remaining points are uniformly distributed in the unpassed interval. Replacing that law by a Poisson clock is a controlled comparison, not a redefinition of the finite microscopic dynamics. The finite complete state retains every point and consumed mark that can later matter.



<a id="section-A-2"></a>

## A.2 Balanced packet removal

<a id="section:kinetic:balanced-packet-removal"></a> On an edge let $P_+,P_-$ be its two packet populations. Their annihilation has intensity $aP_+P_-$. If at most $B$ packets are ever born, the number of annihilations is at most $B/2$. The compensator identity therefore gives 

$$

{\mathbb E}\int_0^T P_+(t)P_-(t){\,\mathrm d} t\le\frac{B}{2a}.

$$

 A comparison process exposes only the unmatched signed excess. Couple common births, common annihilations, and common unmatched services. The intensity of a service involving the paired minority is bounded by $\kappa\mu\min(P_+,P_-)$, hence by $\kappa\mu P_+P_-$ for integer populations. The probability of any unmatched service is consequently at most <a id="eq:appann"></a>


$$

\Delta_{\rm ann}\le\frac{\kappa\mu B}{2a}.

$$

Equation (A.2).

 Summing over the fixed edges gives the complete-history comparison budget. A retained comparison lift may keep the paired packets and their receivers; only its projected signed queue is used for the kinetic theorem. The physical mixed-packet system must not be declared equal to that projected process before applying the bound.



<a id="section-A-3"></a>

## A.3 Signed queues and the exact inventory

<a id="section:kinetic:signed-queues-and-the-exact-inventory"></a> Orient the finite edges and write $J_e$ for the coherent signed currents. The exporter produces signed counts $k_e$ such that 

$$

{\lVert e^N\rVert}_\infty\le c_0/N,
\qquad e_e^N(t)=k_e(t)/N-\int_0^tJ_e(s){\,\mathrm d} s.

$$

 The total number of births and services is at most $NL+O(1)$ for a fixed finite variation budget $L$. Let $x_r$ be carrier fractions, $Z_e$ signed packet counts, $z_e=Z_e/N$, and $m_e=\mu_Nz_e$. The directional bulk service intensities, divided by $N$, are 

$$

\Phi_e^+=\kappa_e x_r[m_e]_+,
\qquad
\Phi_e^-=\kappa_e x_q[-m_e]_+.

$$

 Counting possible packet partners for one tagged carrier gives its conditional rate $\kappa_e[\pm m_e]_+$ at the relevant origin. Where the origin fraction is positive this is $\Phi^N_{qr}/x_r$; the denominator is a counting identity in the supplied reaction model.

With $B$ the oriented incidence matrix, every service removes one packet and moves one carrier in the corresponding direction. Thus <a id="eq:appinventory"></a>


$$

x^N(t)+Bz^N(t)-w(t)
=x^N(0)-w(0)+Be^N(t).

$$

Equation (A.3).

 This identity is pathwise. It does not identify a current density with an actual event count. Define the two error quantities <a id="eq:appfluxerr"></a>
<a id="eq:apppoperr"></a>


$$
\begin{aligned}\epsilon_{F,N}&=\sum_e{\mathbb E}\int_0^T
\bigl(|\Phi_e^+-[J_e]_+|+|\Phi_e^--[-J_e]_+|\bigr){\,\mathrm d} t,\\
\epsilon_{x,N}&={\mathbb E}\sup_{t\le T}{\lVert x^N(t)-w(t)\rVert}_1.
\end{aligned}
$$

Equation (A.4, A.5).

 We establish that they vanish when the initial census is calibrated, $\mu_N\to\infty$, and $\mu_N/N\to0$.



<a id="section-A-4"></a>

## A.4 A companion queue bounded away from empty origins

<a id="section:kinetic:a-companion-queue-bounded-away-from-empty-origins"></a> Fix $\delta>0$. On each edge construct a companion queue driven by the same exports and the service function 

$$

\phi_t(u)=a_+(t)[u]_+-a_-(t)[-u]_+,
\qquad
 a_+=\kappa_e\max(x_r(t-),\delta),\quad
 a_-=\kappa_e\max(x_q(t-),\delta).

$$

 Its slopes lie between $a_0=\kappa_-\delta$ and $a_1=\kappa_+$. Because the entire carrier population has at most $NL+O(1)$ jumps of size $1/N$, the variations of $a_\pm$ are uniformly bounded on the fixed programme. These coefficients are adapted to the process; no independence from the queue is assumed.

For the scaled companion $m^*=\mu_NZ^*/N$, the compensated counting equation is 

$$

{\,\mathrm d} m^*=\mu_N[J-\phi_t(m^*)]{\,\mathrm d} t+\mu_N{\,\mathrm d} e^N+{\,\mathrm d} M,
\qquad
{\,\mathrm d}\langle M\rangle_t=\frac{\mu_N^2}{N}|\phi_t(m^*)|{\,\mathrm d} t.

$$

 Let $y$ solve the same adapted finite-variation equation without the martingale, and let $y_J$ also omit the exporter error. The difference between $y$ and $y_J$ has a divided-difference coefficient in $[a_0,a_1]$. Variation of constants followed by Stieltjes integration by parts gives 

$$

{\lVert y-y_J\rVert}_\infty\le2c_0\mu_N/N,
\qquad
{\lVert y_J\rVert}_\infty\le J_*/a_0,

$$

 where $J_*=\sup|J_e|$. The first estimate uses only the uniform exporter discrepancy; it does not incorrectly bound the total variation of that discrepancy by $1/N$.

The instantaneous zero of $J-\phi_t$ is 

$$

f(t)=\frac{[J(t)]_+}{a_+(t)}-\frac{[-J(t)]_+}{a_-(t)}.

$$

 Its variation obeys 

$$

{\operatorname{Var}}(f)\le\frac{{\operatorname{Var}}(J)}{a_0}
 +\frac{J_*}{a_0^2}\bigl({\operatorname{Var}}(a_+)+{\operatorname{Var}}(a_-)\bigr).

$$

 Contraction between the jumps of $f$ and summation over those jumps imply 

$$

\int_0^T|y_J-f|{\,\mathrm d} t
\le\frac{|f(0)|+{\operatorname{Var}}(f)}{\mu_Na_0}.

$$

 The continuous bounded-variation case follows by approximation, or directly from the corresponding Stieltjes variation inequality.

Put $V(t)={\mathbb E}(m^*-y)^2$ and $\alpha=\mu_N/N$. The square-jump formula, monotonicity of $\phi_t$, and $|\phi_t(u)|\le a_1|u|$ give 

$$

V'\le-2\mu_Na_0V+
\mu_N\alpha a_1\bigl(J_*/a_0+2c_0\alpha+\sqrt V\bigr).

$$

 Young's inequality absorbs the square-root term into one of the negative $\mu_Na_0V$ terms. Starting from the same empty queue, this bounds $\sup_t V$ by $C_\delta(\alpha+\alpha^2)$. Combining the deterministic tracking and martingale estimates yields <a id="eq:appR"></a>


$$

R_{\delta,N}:=\sum_e{\mathbb E}\int_0^T|\phi_t(m_e^*)-J_e|{\,\mathrm d} t
\le C_\delta\left(\mu_N^{-1}+\frac{\mu_N}{N}
 +\sqrt{\frac{\mu_N}{N}}\right).

$$

Equation (A.6).

 Since the signed queue exposes only one orientation at a time, its directional flux error is the same absolute signed error. This step would fail for an uncontrolled mixed positive/negative service population, which is why the preceding recombination comparison is needed.



<a id="section-A-5"></a>

## A.5 Removing the empty-origin cutoff

<a id="section:kinetic:removing-the-empty-origin-cutoff"></a> The cutoff must be removed without presuming the desired closeness of $x$ and $w$. Let $K(t)=\{r:x_r(t)<\delta\}$ and let $I_K,O_K$ be the queued charge entering and leaving that set. From [Equation A.3](/consciousness/monograph/appendix-a-contact-kinetic-and-complete-path-estimates#eq:appinventory), with $\eta_N={\lVert x^N(0)-w(0)\rVert}_\infty+C_B/N$, 

$$

w_K+O_K\le |V|\delta+I_K+|V|\eta_N.

$$

 Every incoming queue has its physical origin outside $K$, where the carrier fraction is at least $\delta$. Its integrated expected service is bounded by the finite birth budget. Consequently 

$$

{\mathbb E}\int_0^T I_K{\,\mathrm d} t\le\frac{L+O(N^{-1})}{\kappa_-\mu_N\delta},

$$

 and hence 

$$

{\mathbb E}\int_0^T w_K{\,\mathrm d} t
\le |V|\delta T+\frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}
 +|V|T{\mathbb E}\eta_N.

$$

 Using the coherent nodal bound in [Equation 6.2](/consciousness/monograph/quantum-currents-and-observer-independent-events#eq:continuity) and Cauchy–Schwarz controls the target flux whose physical origin lies in $K$ by <a id="eq:appsmall"></a>


$$

D_{\delta,N}\le C_H\sqrt{T\left(|V|\delta T+
\frac{L+O(N^{-1})}{\kappa_-\mu_N\delta}+|V|T{\mathbb E}\eta_N\right)}.

$$

Equation (A.7).



Couple physical and companion queues with common exports and minimum-rate baseline services. Additional companion services occur only at low-population origins. A baseline mismatch decreases the absolute signed-queue difference, whereas an additional service can increase it by at most $1/N$. Starting from equal queues, the expected number of baseline mismatches is bounded by the number of additional services. More explicitly, let $A_{\delta,N}$ be the expected number of extra companion services divided by $N$. Restricting the companion directional flux to low origins gives $A_{\delta,N}\le R_{\delta,N}+D_{\delta,N}$. The discrepancy accounting bounds the integrated baseline mismatch by $A_{\delta,N}$ as well. The physical and companion directional fluxes therefore differ in integrated expectation by at most $2A_{\delta,N}$. Adding the companion-to-target error gives 

$$

\epsilon_{F,N}\le3R_{\delta,N}+2D_{\delta,N}.

$$

 At fixed $\delta$, take $N\to\infty$ under the scale hierarchy, and then take $\delta\downarrow0$. This proves flux convergence. The population process has the corresponding integrated drift and quadratic variation $O(N^{-1})$, again by the finite service budget. The martingale maximal inequality gives 

$$

\epsilon_{x,N}\le{\mathbb E}{\lVert x^N(0)-w(0)\rVert}_1
+C_B\epsilon_{F,N}+C\sqrt{(L+1)/N}\longrightarrow0.

$$

 This completes the bulk tracking argument without assuming positive lower bounds on all coherent weights.



<a id="section-A-6"></a>

## A.6 Existence and nonexplosion of the Bell comparison

<a id="section:kinetic:existence-and-nonexplosion-of-the-bell-comparison"></a> On every compact interval where $w_r>0$, the rates in [Equation 6.3](/consciousness/monograph/quantum-currents-and-observer-independent-events#eq:bell) define the usual integrated-hazard first-jump construction. Localize through the open components of $\{t:w_r(t)>0\}$. The coherent weights solve the forward balance equation. Positive first-jump iteration bounds the killed law by $w(t)$, or by $Cw(t)$ for an initial law $\nu\le Cw(0)$.

If a holding path remains in $r$ while $w_r$ falls to zero, write the incoming and outgoing positive currents as $I_r,O_r$. Since $\dot w_r=I_r-O_r$, 

$$

\lambda^B_{\rm out}(r)=O_r/w_r\ge-\dot w_r/w_r.

$$

 The survival probability to the zero-weight boundary is therefore zero. Moreover, 

$$

{\mathbb E} N_{[0,T]}\le C\int_0^T\sum_{q,r}[J_{qr}(t)]_+{\,\mathrm d} t<\infty.

$$

 Neither explosion nor nodal killing loses mass. For initial equilibrium, domination and normalization force the law to equal $w(t)$ at each time. The first-jump construction is unique in the nominated inhomogeneous Markov class. This does not select that class among all possible event constitutions.



<a id="section-A-7"></a>

## A.7 From bulk flux to complete tagged paths

<a id="section:kinetic:from-bulk-flux-to-complete-tagged-paths"></a> Let $N_\varepsilon$ count the regular level crossings of the deterministic weights. The one-dimensional bounded-variation coarea identity gives 

$$

\int_0^1N_\varepsilon{\,\mathrm d}\varepsilon\le\sum_r{\operatorname{Var}}(w_r).

$$

 There is a sequence $\varepsilon_j\downarrow0$ with $\varepsilon_jN_{\varepsilon_j}\to0$. Otherwise the integral would have a nonintegrable lower bound proportional to $1/\varepsilon$ near zero.

The Bell path can enter a sector of weight at most $\varepsilon$ through an initial small-weight state, a jump into such a state, or a downward crossing of the weight while the path occupies it. Initial mass contributes at most $C|V|\varepsilon$. Integrated incoming current contributes $CC_0T\sqrt\varepsilon$ by the nodal estimate. Each downward crossing contributes at most $C\varepsilon$. Thus 

$$

b_C(\varepsilon)=C\bigl(|V|\varepsilon+C_0T\sqrt\varepsilon+
\varepsilon N_\varepsilon\bigr)

$$

 bounds the probability of visiting the low-weight region and tends to zero along the selected sequence.

Couple tagged and Bell jumps at the minimum of their conditional intensities until they disagree, the target enters that region, or the population error exceeds $\varepsilon/2$. Before those stopping events the physical origin fraction is at least $\varepsilon/2$, and 

$$

|\lambda^N_{qr}-\lambda^B_{qr}|
\le\frac2\varepsilon|\Phi^N_{qr}-[J_{qr}]_+|
+\frac{2J_*}{\varepsilon^2}|x_r^N-w_r|.

$$

 The coupling preserves the full microscopic marginal even though its queues depend on the tag's past. A compensator bound and Markov's inequality give <a id="eq:appfullpath"></a>


$$

{d_{\mathrm{TV}}}({\operatorname{Law}} X_{a_*}^N,{\operatorname{Law}} Q^B)
\le b_C(\varepsilon)+\frac{2\epsilon_{x,N}+2\epsilon_{F,N}}\varepsilon
 +\frac{C_GJ_*T}{\varepsilon^2}\epsilon_{x,N}.

$$

Equation (A.8).

 Take $N\to\infty$ for each fixed $\varepsilon_j$, then $j\to\infty$. This proves convergence on the complete physical-time path space. The earlier $\delta$ cutoff has already been removed; the two limiting arguments are not interchanged.

For the finite engineered clock, each weight is a constant input-dependent coefficient times a unimodal binomial time envelope. Level-entry counts are uniformly finite. With iid census error $O(N^{-1/2})$, choosing 

$$

\mu_N=N^{1/2},\quad \delta=N^{-1/7},\quad
\varepsilon=N^{-1/35}

$$

 yields $\epsilon_{F,N}+\epsilon_{x,N}=O(N^{-1/14})$ and the conservative path rate $O(N^{-1/70})$. To see the exponents, the deterministic companion term is $O((\mu_N\delta^3)^{-1})$, the leading stochastic term is $O(\sqrt{\mu_N/N}/\delta)$, and the low-origin term is $O(\sqrt\delta)$. In [Equation A.8](/consciousness/monograph/appendix-a-contact-kinetic-and-complete-path-estimates#eq:appfullpath), both $\sqrt\varepsilon$ and $N^{-1/14}/\varepsilon^2$ then have exponent $-1/70$. The gas and recombination scales can make their errors $O(N^{-2})$ and $O(N^{-1/2})$, respectively, without worsening this rate.

All constants refer to the fixed programme. Increasing graph size, unbounded time, changing reference structure, or a new interaction catalogue requires new estimates. Within the stated domain, common retained-record processing transfers the complete-path error to the actual archive programme. A record not included in that common output space receives no such automatic protection.
