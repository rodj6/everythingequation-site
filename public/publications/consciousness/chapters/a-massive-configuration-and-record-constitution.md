# Chapter 7: A massive configuration and record constitution

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

<a id="ch:massive"></a> 

<a id="section-7-1"></a>

## 7.1 Guidance, equilibrium, and actual histories

<a id="section:massive:guidance-equilibrium-and-actual-histories"></a> Fix a smooth finite programme with wave function 

$$

\Psi(q,t)\in L^2({\mathbb R}^n;{\mathcal H}_I\otimes{\mathcal H}_R)

$$

 and Hamiltonian 

$$

H=-\sum_j\frac{\hbar^2}{2m_j}\partial_{q_j}^2+V(q,t),

$$

 where $V$ is Hermitian and the chosen domain ensures the required wave regularity and an almost-everywhere global guidance flow over the promised horizon. Internal keys and the reference are components of the wave, not extra discrete actual occupancies. Define 

$$

\rho=\Psi^\dagger\Psi,\qquad
j_j=\frac{\hbar}{m_j}\operatorname{Im}(\Psi^\dagger\partial_{q_j}\Psi),
\qquad \dot Q_j=j_j(Q,t)/\rho(Q,t).

$$

 The complete initial configuration has density $\rho(\cdot,0)$. These are constitutive premises. They belong to the configuration-guided tradition <a id="citation-11"></a>[[7](/consciousness/monograph/bibliography#bib-Bohm1952), [16](/consciousness/monograph/bibliography#bib-Durr1992)]; they are not inferred from source incompleteness.

The Schrödinger equation gives $\partial_t\rho+\nabla\cdot j=0$. Transport by the guidance velocity obeys the same continuity equation, hence preserves the initial equilibrium density under the stated flow hypotheses. This is equivariance. It supplies ordinary position distributions at all times while the actual history remains the guided path. The mathematical existence assumptions are kept explicit rather than being hidden behind the formal quotient $j/\rho$ at nodes.



<a id="section-7-2"></a>

## 7.2 An exact moving Gaussian pointer

<a id="section:massive:an-exact-moving-gaussian-pointer"></a> Let $A$ be a two-valued internal control projector, and take an oscillator pointer of mass $M$ and frequency $\omega$. Write 

$$

\sigma^2=\frac{\hbar}{2M\omega},\qquad
b(t)=L\,[10s^3-15s^4+6s^5],\quad s=t/T,

$$

 for $0\le t\le T$, and set $c=b+\ddot b/\omega^2$. The controlled pointer Hamiltonian is <a id="eq:pointerH"></a>


$$

H_Y=\frac{p_Y^2}{2M}+\frac{M\omega^2}{2}(Y-c(t)A)^2.

$$

Equation (7.1).

 The endpoint conditions make the translated packet stationary at the start and end. Extended by constants, the displayed $b$ is $C^2$; its associated control $c$ is continuous and piecewise smooth. A monotone $C^\infty$ profile flat at both endpoints can be substituted when the autonomous programme requires that regularity, with the same formulas for its corresponding $b$ and $c$. In the $A=0$ branch the ground-state packet remains centered at zero. In the $A=1$ branch a Gaussian centered at $b(t)$ with the usual linear phase is an exact solution; substitution reduces the center equation to $\ddot b+\omega^2b=\omega^2c$.

Let $g_\sigma$ be the centered normal density and let the orthogonal control-branch weights be $p_0,p_1$, $p_0+p_1=1$. The physical pointer density and current are <a id="eq:pointerrho"></a>


$$

\rho_Y(y,t)=p_0g_\sigma(y)+p_1g_\sigma(y-b(t)),\qquad
j_Y(y,t)=p_1\dot b(t)g_\sigma(y-b(t)).

$$

Equation (7.2).

 Orthogonality of the internal control keys removes cross terms in these marginal expressions. Finite overlap of the spatial packets is not replaced by an exact disjoint-support assumption.

For this exact example, $Y$ is the sole actual coordinate participating in the write. The control, source, and reference belong to the internal Hilbert space; any other actual coordinates factor into a common spectator wave. Thus the full guidance component for $Y$ is $j_Y/\rho_Y$. In a general correlated many-coordinate wave, marginalizing a current need not yield the actual componentwise guidance velocity. The following path theorem uses the closed pointer realization just specified.



**Theorem 7.1 (Quantile flow and first passage).**

<a id="thm:pointer"></a> Let 

$$

F_t(y)=p_0\Phi(y/\sigma)+p_1\Phi((y-b(t))/\sigma),

$$

 where $\Phi$ is the standard normal distribution function. If $U$ is uniform on $(0,1)$ under initial equilibrium, the pointer trajectory is 

$$

Y_t=F_t^{-1}(U).

$$

 For a threshold $h=L/2$, put $\delta=\overline\Phi(L/(2\sigma))$. Apart from the initial tail of probability $\delta$, the threshold first-passage density is 

$$

f_\tau(t)=p_1\dot b(t)g_\sigma(h-b(t)),\qquad0<t<T.

$$

 The mass crossing after time zero is $p_1(1-2\delta)$, and the final below-threshold probability is $p_0(1-\delta)+p_1\delta$. 

 

**Proof.**

The continuity equation gives $\partial_tF_t(y)=-j_Y(y,t)$. Along a guidance trajectory, $\frac{d}{dt}F_t(Y_t)=-j_Y+\rho_Y\dot Y_t=0$. The initial $F_0(Y_0)$ is uniform, proving the quantile formula. Since $\dot b\ge0$, the guidance velocity is nonnegative. Survival below $h$ is therefore $F_t(h)$ after accounting for the initial upper tail. Differentiating it yields the density. The endpoint values are $F_0(h)=1-\delta$ and $F_T(h)=p_0(1-\delta)+p_1\delta$, whose difference is the stated crossing mass. 

□



The law describes physical time, including an initial-tail event and a retained null branch. It is not a rule that waits for a person to look at the pointer. Whether its eventual presentation is experienced is a separate psychophysical question.



<a id="section-7-3"></a>

## 7.3 Capture, pending states, and null instruments

<a id="section:massive:capture-pending-states-and-null-instruments"></a> A detector programme must retain unsuccessful and unfinished branches. Let the resource basis include $r,p_a,c_a,l_a$, denoting ready, pending, captured, and lost states for $a=0,1$. For orthogonal source projectors $P_a$, the unitary preparation can produce <a id="eq:resource-wave"></a>


$$
\begin{aligned}
\Psi={}&\cos\theta\,\psi{\lvert r\rangle}\\
&+\sin\theta\sum_aP_a\psi\left[
\cos\varphi{\lvert p_a\rangle}+\sin\varphi\sqrt\eta{\lvert c_a\rangle}
+\sin\varphi\sqrt{1-\eta}{\lvert l_a\rangle}\right].
\end{aligned}
$$

Equation (7.3).

 The resource keys are orthogonal wave components; they are not additional actual occupancies in the configuration-guided constitution. Their squared norms give the following ideal status weights: 

$$

\cos^2\theta,\quad
\sin^2\theta\cos^2\varphi,\quad
\eta\sin^2\theta\sin^2\varphi,\quad
(1-\eta)\sin^2\theta\sin^2\varphi.

$$

 A spatial readout must still realize a discrimination of these keys. First define the ideal reference instrument. When “null” means every noncapture status, tracing the resource-key carrier after the corresponding ideal projection gives the unnormalized source instrument <a id="eq:nullinstrument"></a>


$$

\mathcal N(\rho)=\cos^2\theta\,\rho+
\sin^2\theta\bigl[\cos^2\varphi+(1-\eta)\sin^2\varphi\bigr]
\sum_aP_a\rho P_a.

$$

Equation (7.4).

 The coherent ready component survives. Replacing every null daughter by a fully dephased or fully unchanged ideal state would be incorrect.

Write the source Kraus blocks as 

$$

\begin{aligned}
 V_r&=\cos\theta\,I,\qquad
 V_{p_a}=\sin\theta\cos\varphi\,P_a,\\
 V_{c_a}&=\sin\theta\sin\varphi\sqrt\eta\,P_a,\qquad
 V_{l_a}=\sin\theta\sin\varphi\sqrt{1-\eta}\,P_a.
\end{aligned}

$$

 They obey $\sum_\alpha V_\alpha^\dagger V_\alpha=I$. If an admitted controlled spatial writer retains these keys and presents outcome $b$ with calibrated probability $M(b\mid\alpha)$ on key $\alpha$, its reduced source instrument is 

$$

 \mathcal I_b^{\rm phys}(\rho)
   =\sum_\alpha M(b\mid\alpha)V_\alpha\rho V_\alpha^\dagger.

$$

 The ideal null map uses $M(N\mid\alpha)=1$ on noncapture keys and zero otherwise. Finite-overlap pointers generally give a different, explicitly noisy matrix $M$. If every column differs from its ideal column by at most $\epsilon$ in total variation, the status-flag plus source/reference instrument differs by at most $\epsilon$ in half-diamond distance. Indeed, after adjoining a reference each conditional block is positive; summing its trace times the classical column discrepancy gives this bound uniformly over input states. The reference is retained in this comparison, but the resource-key carrier has been traced. If those keys or the pointer later return to interact, their full conditional state must instead be propagated; this reduced bound is not a complete-history estimate.

For the ideal reference instrument with $\theta=\pi/3$, $\varphi=\pi/4$, and $\eta=2/3$, the status probabilities are $(1/4,3/8,1/4,1/8)$. If 

$$

\rho=\begin{pmatrix}2/3&1/3\\1/3&1/3\end{pmatrix},

$$

 then $\mathcal N(\rho)=\rho/4+{\operatorname{diag}}(\rho)/2$, $P(N)=3/4$, and 

$$

P(N,X+)=11/24,\qquad P(X+\mid N)=11/18.

$$

 This exact finite calculation shows why a full physical continuation is more informative than a record label alone. The surviving coherent component changes the later noncommuting measurement.



<a id="section-7-4"></a>

## 7.4 Historical archives and reset receivers

<a id="section:massive:historical-archives-and-reset-receivers"></a> Suppose an archive coordinate $y$ has a wave of the form 

$$

\Psi(y,z)=\sum_k g_k(y){\lvert k\rangle}\Xi_k(z),

$$

 where the $g_k$ are real held packets and the internal keys ${\lvert k\rangle}$ are orthogonal. If subsequent evolution preserves each key and the held real packet, then $\operatorname{Im}(\Psi^\dagger\partial_y\Psi)=0$ pointwise. The guidance coordinate of the archive is fixed. This is a physical retention theorem, not merely membership in a modular centralizer.

A reversible reset moves the old working state into a receiver. For a working register $W$ and a prepared blank $R$, a SWAP gives 

$$

\rho_{WE}\otimes{\lvert 0\rangle}{\langle 0\rvert}_R
\longmapsto
{\lvert 0\rangle}{\langle 0\rvert}_W\otimes\rho_{RE},

$$

 with the old correlations retained. The active register is restored, but usable global capacity has not been created. A later interaction with $R$ must use its actual correlated state. If reset is realized by a moving trap, the potential, transport, and receiver remain part of the programme <a id="citation-12"></a>[[35](/consciousness/monograph/bibliography#bib-RodgersMassive)].

Spatial feedback is equally concrete. A bounded function $g(y)$ can control an ordinary internal operator $B$ through $g(Y)B$. Let $G_{\rm id}$ be the intended branch-constant control on the retained key space, commuting with $B$, and let $\Psi_{\rm id}(s)$ be the ideal programme wave. Suppose 

$$

 \sup_{0\le s\le t}
 \|(g(Y)-G_{\rm id})\Psi_{\rm id}(s)\|^2\le\epsilon_g.

$$

 Duhamel's formula bounds the wave error by $t\|B\|\sqrt{\epsilon_g}/\hbar$. The mean-square mismatch includes both the smooth transition region and tails on the wrong plateau; transition-region probability alone is insufficient. A separate archive coordinate can remain protected while the working display participates in feedback. The separation must be designed; it does not follow from the word “record.”



<a id="section-7-5"></a>

## 7.5 Autonomous realization and historical error

<a id="section:massive:autonomous-realization-and-historical-error"></a> A driven finite programme can be approximated by a massive controller with coordinate $x$: 

$$

H_{\mathrm{aut}}=\frac{P_x^2}{2M_c}+H_{\mathrm{osc}}+H_{\mathrm{const}}
+\sum_j f_j(x)B_j.

$$

 A packet centered on $x_0+vt$ samples the desired couplings. For an initial width $s_c$, its free width is 

$$

s_t=\sqrt{s_c^2+\left(\frac{\hbar t}{2M_cs_c}\right)^2}.

$$

 

**Proposition 7.2 (A clock approximation on a declared regularity domain).**

<a id="prop:clock-regularity"></a> Let $\mathcal X_0={\mathcal H}_{\rm sys}$ and let $\mathcal X_2$ be a specified system Sobolev or weighted graph domain whose norm controls the archive traces used below. Clock coordinates are treated in $L^2(\mathbb R_x)$, not differentiated in $\mathcal X_2$. Assume the autonomous propagator is uniformly bounded by $C_r$ on $L^2(\mathbb R_x;\mathcal X_r)$ over the promised interval, and that the driven solution $\psi_t$ satisfies 

$$

 \sup_{t\le T}\sum_j\operatorname{Lip}(f_j)
       \|B_j\psi_t\|_{\mathcal X_r}\le M_r,
 \qquad r=0,2.

$$

 For a freely moving Gaussian clock $\chi_t$ of mean $x_0+vt$ and width $s_t$, with product initial state, the actual autonomous wave satisfies 

$$

 \epsilon_r:=\sup_{t\le T}
 \|\Psi_t-\chi_t\otimes\psi_t\|_{L^2_x\mathcal X_r}
 \le \frac{C_rM_r}{\hbar}\int_0^T s_t\,\mathrm dt
 \le \frac{C_rM_rT}{\hbar}
 \left(s_c+\frac{\hbar T}{2M_cs_c}\right).

$$

 

 

**Proof.**

The product wave solves the equation with couplings $f_j(x_0+vt)B_j$. Its residual in the autonomous equation is $\sum_j[f_j(x)-f_j(x_0+vt)]\chi_t\otimes B_j\psi_t$. The Lipschitz bound and the Gaussian variance give residual norm at most $M_rs_t$. Duhamel's formula and the stated propagation bound give the first inequality; $s_t\le s_c+\hbar t/(2M_cs_c)$ gives the second. 

□



For bounded couplings the $r=0$ propagation bound is supplied by unitarity. The $r=2$ estimate requires the stated domain preservation and commutator bounds; unbounded oscillator forces require the corresponding weighted domain. Choosing $s_c\propto\sqrt{\hbar T/(2M_c)}$ gives the claimed fixed-programme limit when these constants are uniform. Differentiating the fast clock phase itself would not furnish that uniform archive estimate.

Why retain the derivative estimate? A small $L^2$ wave difference alone need not control a boundary-crossing current. For a held archive with nominal zero current, a trace estimate on the relevant surfaces bounds the probability of corruption over an interval $I$ by a term of the form 

$$

\frac{\hbar}{m}C_{\mathrm{tr}}^2|I|\,\epsilon_2(2B+\epsilon_2),

$$

 where $B$ controls the required nominal Sobolev norm. The complete retained-output error and the historical-crossing error must both be included. This provides a physical reason for distinguishing an accurate endpoint distribution from a faithful past record.



<a id="section-7-6"></a>

## 7.6 What the constitution establishes

<a id="section:massive:what-the-constitution-establishes"></a> The massive model specifies the actual configuration, initial equilibrium, material writing, pending and null branches, copies, receivers, feedback, and a finite autonomous approximation. Its measurement chain is specified on the closed-pointer domain, with a controlled autonomous approximation under the regularity and uniformity hypotheses above. It does not derive guidance or equilibrium from the source/readout premise. It also does not establish a phenomenal predicate. Its role in this monograph is to show how an ordinary physical record process can be fully defined before the psychophysical interpretation is supplied.

An equivariant diffusion gives an instructive contrast. The stochastic law 

$$

{\,\mathrm d} Q_t=\left(j/\rho+D\nabla\log\rho\right){\,\mathrm d} t+\sqrt{2D}{\,\mathrm d} W_t

$$

 has the same density continuity equation for constant $D>0$, because its additional drift and diffusion cancel in the Fokker–Planck equation. It can nevertheless have different paths and archive behavior. Equal one-time densities do not identify the realized microscopic process. The same caution will apply to comparing outward reports of different candidate vessels.
