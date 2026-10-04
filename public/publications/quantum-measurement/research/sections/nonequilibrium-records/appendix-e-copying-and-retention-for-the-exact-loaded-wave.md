# Appendix E: Copying and retention for the exact loaded wave

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\pr = 
\cert = 
\norm = \left\lVert#1\right\rVert
\Prob = \mathbb P
\E = \mathbb E
\TV = \operatorname{TV}
\Var = \operatorname{Var}
\one = \mathbf1
\R = \mathbb R
\T = \mathbb T
\dd = \,\mathrm d
\Imv = \operatorname{Im}
\ii = \mathrm i
-->

<a id="section-E"></a>

## E Copying and retention for the exact loaded wave

<a id="hold:appendix"></a><a id="hold:main"></a>

All estimates in this appendix concern the same normalized enlarged wave $\Psi$ and its original actual law. Write $C=270000/67499$, $m=2^{52}$, $h=1/128$, $M=10\,\mathrm{kg}$, $v=1\,\mathrm{m/s}$, $T_0=0.03\,\mathrm s$, $\ell_0=10^{-4}\,\mathrm m$, and $\mu=\mu_Z=0.01$. Radial and pointer coordinates are dimensionless; $S$ and the elapsed time $t$ below have physical units. The origin $t=0$ is the handoff at laboratory time $-0.002\,\mathrm s$. The transferred entrance estimates are those proved in Section [B.5](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer); no law or wave is assigned anew there.



<a id="section-E-1"></a>

### E.1 Gaussian derivatives and the complete clock residual

 Put $b(s)=24B_9(s/w)$, $w=0.003$, with the constant extensions specified in the model. Direct differentiation gives the following rational ceilings $b_j\geq\|b^{(j)}\|_\infty$: <a id="hold:bjets"></a>


$$

 (b_0,b_1,b_2,b_3,b_4)
 =\left(24,\frac{39375}{2},105000000,
            490000000000,403200000000000000\right).

$$

Equation (110).

 Indeed $B_9'=630x^4(1-x)^4$; the first three derivative bounds follow from $x(1-x)\leq1/4$ and $|1-2x|\leq1$, and the coefficient sum of $B_9^{(4)}$ is $1360800$. These bounds apply on both constant extensions because $B_9$ has four matching endpoint derivatives.

For the exact sector-one pointer put $y=Z-b$ and 

$$

 g_b=\pi^{-1/4}e^{-y^2/2}
       e^{{\mathrm i}\mu b'(Z-b/2)},\qquad
 c=b'+{\mathrm i}\mu b'',\qquad d=\frac{{\mathrm i}\mu}{2}(bb''-b'^2).

$$

 Then $g_b'=(cy+d)g_b$ and 

$$

 g_b''=\bigl((cy+d)^2+c'y-cb'+d'\bigr)g_b,
 \qquad d'=\frac{{\mathrm i}\mu}{2}(bb'''-b'b'').

$$

 In particular the scalar phase is retained. Define <a id="hold:gjets"></a>


$$
\begin{aligned}c_0&=b_1+\mu b_2,&c_1&=b_2+\mu b_3,\\
 d_0&=\mu(b_0b_2+b_1^2)/2,&
 d_1&=\mu(b_0b_3+b_1b_2)/2,\\
 g_1&=d_0+c_0/\sqrt2,&
 g_2&=d_0^2+c_0b_1+d_1
       +(2d_0c_0+c_1)/\sqrt2+\sqrt3\,c_0^2/2.
 
\end{aligned}
$$

Equation (111).

 The Gaussian moments $\|y^j g_b\|^2=(2j-1)!!/2^j$ prove $\|g_b^{(j)}\|\leq g_j$ for $j=1,2$. The sector-zero pointer is constant, so the same ceilings apply to both sectors, uniformly in the normalized qubit input.

The characteristic comparison through readout is <a id="hold:comparison"></a>


$$

 \begin{aligned}
 G(t,S,r,Z)=\phi(S-0.102-vt)
       \sum_{i=0}^1\alpha_i u_i(\sigma,r)g_i(s,Z),\\
 \sigma=\frac{S/v-0.104\,\mathrm s}{T_0},\qquad
 s=\frac{S-0.14145\,\mathrm m}{vT_0}.
 \end{aligned}

$$

Equation (112).

 Here $u_i$ is the exact smooth-activation radial family, continued backwards by the quiet Hamiltonian at negative ages. On the entire compact support of $\phi$, the preparation phase potential has ended. Substitution into the boosted Schrödinger equation leaves precisely the residual $\pm\hbar^2G_{SS}/(2M)$. The sign is immaterial for the norm estimates, but both pointer and activation derivatives in $G_{SS}$ must be included.

Let $N_0=1$, $N_1=V+1$, $N_2=1001(V+1)^2/1000$ and $N_3=1001(V+1)^3/1000$, where $V=2^{35}$; these are the energy-graph bounds proved in Section [C.3](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:graphs). Set 

$$
\begin{aligned}F_0&=\frac{2010^2}{2m\,100^4}+\frac{3}{2m\,100^2},&
 F_1&=F_0/2+\frac{2010}{m\,100^4},& W_1&=2^{46},\\
 K_j&=\sqrt{2m(N_jN_{j+1}+F_0N_j^2)},&&&j&=0,1,2.
\end{aligned}
$$

 The form inequality $H_\gamma\geq p_r^2/(2m)-F_0$, applied to $H_\gamma^ju_i$, proves $\|\partial_rH_\gamma^ju_i\|\leq K_j$. Only the third Hamiltonian graph is needed. Since 

$$

 \partial_\sigma^2u_i=-H_\gamma^2u_i
       -{\mathrm i}\gamma_\sigma'(W-F)u_i,
 \qquad 0\leq\gamma_\sigma'\leq750,

$$

 the product-rule bounds, including the gate derivative, are 

$$
\begin{aligned}U_1&=N_1+g_1,\\
 U_2&=N_2+750(V+F_0)+2N_1g_1+g_2,\\
 L_0&=K_0,\\
 L_1&=K_1+g_1K_0,\\
 L_2&=K_2+750\{W_1+F_1+(V+F_0)K_0\}
                         +2g_1K_1+g_2K_0.
\end{aligned}
$$

 For the normalized mollified clock packet, convolution contraction and its normalization factor at most $1.000001$ give 

$$

 p_1=1.000001\sqrt{16/7}\,\frac{\pi}{0.002},\qquad
 p_2=1.000001\sqrt{512/35}\left(\frac{\pi}{0.002}\right)^2

$$

 as ceilings on $\|\phi'\|$ and $\|\phi''\|$. Therefore <a id="hold:residualjets"></a>


$$

 G_2=p_2+\frac{2p_1U_1}{vT_0}+\frac{U_2}{(vT_0)^2},\qquad
 G_{2r}=p_2L_0+\frac{2p_1L_1}{vT_0}+\frac{L_2}{(vT_0)^2}

$$

Equation (113).

 bound $\|G_{SS}\|$ and $\|\partial_rG_{SS}\|$.

Write $E=\Psi-G$. Its entrance norm $e_h$ is $D_h$ from Section [B.5](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer) plus the backward-quiet discrepancy. For that discrepancy, if $e=(e^{-{\mathrm i}\sigma H_F}-1)\chi$ and $|\sigma|\leq1/8$, then 

$$

 \|e\|\leq\|H_F\chi\|/8,\quad
 \|H_Fe\|\leq\|H_F^2\chi\|/8,\quad
 \|\partial_re\|^2\leq2m\|e\|(\|H_Fe\|+F_0\|e\|).

$$

 The quiet tail estimates in Section [C.4](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:quiet) make its physical momentum correction less than $10^{-100}\,\mathrm{kg,m/s}$. Let $P_{r,h}$ be the old ordinary radial error momentum, the loaded-minus-old momentum from Section [B.5](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer), and this quiet correction added together.

For completeness the global radial force used in propagating $E$ is explicit. Put $m_{\rm phys}=m\hbar T_0/\ell_0^2$, $\omega=1/(mT_0)$, $R=0.201\,\mathrm m$, $a=140\,\mathrm{s}^{-1}$, $a'=43600\,\mathrm{s}^{-2}$ and $F_{\max}=2R^2$. Define 

$$
\begin{aligned}Q_0&=m_{\rm phys}\omega^2R^2/2+3\hbar\omega/2,\\
 Q_r&=m_{\rm phys}\omega^2R+5000Q_0,&
 W_r&=\frac{\hbar(mh/2+5V)}{T_0\ell_0},\\
 V_{p,r}&=m_{\rm phys}(a'+a^2)R
          +\frac{m_{\rm phys}^2(a')^2F_{\max}R}{2M},&
 V_r&=V_{p,r}+Q_r+W_r.
\end{aligned}
$$

 These follow by differentiating the displayed preparation, weak-trap and capped detector potentials; all remote preparation terms remain. The writer has zero radial derivative. Unitary Duhamel, followed by the ordinary radial momentum commutator, consequently gives <a id="hold:radialerror"></a>


$$
\begin{aligned}e(t)&\leq e_h+r_0t,&r_0&=\hbar G_2/(2M),\\
 P_r(t)&\leq P_{r,h}+r_rt+V_r(e_ht+r_0t^2/2),&
 r_r&=\hbar^2G_{2r}/(2M\ell_0).
 
\end{aligned}
$$

Equation (114).

 The odd extension at the Dirichlet origin has no boundary term. Approximation on the common smooth core and these uniform bounds justify the differentiated evolution without a fourth radial graph. At $T_c=0.0404\,\mathrm s$, denote the right sides by $e_*$ and $P_{r,*}$ and put $p_*={\ell_0P_{r,*}}/({\hbar mh})$. Evaluation gives 

$$

 e_*<3.034680\times10^{-11},\qquad
 P_{r,*}<2.208802\times10^{-20}\,\mathrm{kg,m/s},\qquad
 p_*<0.000595293.

$$





<a id="section-E-2"></a>

### E.2 A closed clock and annihilator estimate through the hold

 <a id="hold:clock"></a> The exact boosted generator contains $p_s+\epsilon p_s^2/2$, $\epsilon=\hbar/(Mv^2T_0)$. Define $\mathcal A=\partial_Z+Z-\Pi_1(b+{\mathrm i}\mu b')$. Since the radial potentials commute with this operator, its complete commutator is <a id="hold:annihilator"></a>


$$

 ({\mathrm i}\partial_\tau-H-1/\mu)\mathcal A\Psi
 =-\epsilon\Pi_1\bigl[(b'+{\mathrm i}\mu b'')\partial_s
                          +(b''+{\mathrm i}\mu b''')/2\bigr]\Psi.

$$

Equation (115).

 For example $[\mathcal A,H_{\rm ptr}]=(\mathcal A+\Pi_1c)/\mu
-\Pi_1F$ and $[\mathcal A,p_s]=-{\mathrm i}\Pi_1c'$, where $c=b+{\mathrm i}\mu b'$; $c/\mu-F-{\mathrm i} c'=0$ cancels the prescribed driving terms. The clock Laplacian supplies both terms on the right of [(115)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:annihilator).

Let $P(t)=\|-{\mathrm i}\hbar\partial_S\Psi(t)\|$ be the boosted clock momentum, $n(t)$ the moving left-collar norm of width $g=0.0005\,\mathrm m$, and $R_Z(t)=(\|Z\Psi\|^2+\|p_Z\Psi\|^2)^{1/2}$. The entrance estimates allow the conservative values 

$$

 P(0)\leq2\times10^{-27},\qquad n(0)\leq2\times10^{-26},
 \qquad R_Z(0)\leq2,

$$

 in SI units where applicable; the much sharper actual entrance $A_h=\|\mathcal A\Psi(0)\|$ is retained. Set 

$$

 F_*={b_0}/{\mu}+\mu b_2,\quad
 F_*'={b_1}/{\mu}+\mu b_3,\quad
 C_*'={b_0b_1}/{\mu}+\mu(b_1b_2+b_0b_3)/2.

$$

 The Heisenberg equations for $(Z,p_Z)$ are a rotation with bounded forcing $\Pi_1F$; its variation-of-constants formula gives $R_Z(t)\leq2+F_*t/T_0$, without exponentiating the oscillator frequency. The translating collar and clock commutator give <a id="hold:closedmoments"></a>


$$

 n'\leq\frac{P}{Mg},\qquad
 P'\leq F_p n+F_a+
       \frac{\hbar}{vT_0^2}\{F_*'R_Z+C_*'\},
 \qquad F_p=8\times10^{-6},\quad F_a=10^{-17}.

$$

Equation (116).

 Here $F_p$ and $F_a$ have units of force. Explicit ceilings from the original potentials, with $a''=70141750\,\mathrm{s}^{-3}$, are 

$$
\begin{aligned}F_p^{\rm calc}&=
 \frac{m_{\rm phys}a''F_{\max}}{2v}
 +\frac{m_{\rm phys}aa'R^2}{v}
 +\frac{m_{\rm phys}^2a'a''F_{\max}^2}{4Mv^3}<F_p,\\
 Q_S&=2m_{\rm phys}\omega^2aR^2+3\hbar\omega a+5000Q_0,\\
 F_a^{\rm calc}&=Q_S+25000(\hbar V/T_0+Q_0)<F_a.
\end{aligned}
$$

 The $C_*'$ term retains the clock force of the scalar compensation. All inequalities apply to the full wave, including remote clock tails. The oscillator estimates extend from finite-energy approximants by the form-domain bounds just obtained.

For $q=0.0002\,\mathrm{kg,m/s}$ and $k=0.04\,\mathrm{s}^{-1}$, $Y=P+qn$ satisfies $Y'\leq kY+f_0+f_1t$, where 

$$

 Y_0=2\times10^{-27}+q(2\times10^{-26}),\qquad
 f_0=F_a+\frac{\hbar(F_*'\,2+C_*')}{vT_0^2},\qquad
 f_1=\frac{\hbar F_*'F_*}{vT_0^3}.

$$

 Indeed $q/(Mg)=F_p/q=k$. With $T=0.092\,\mathrm s$ and $E_T=(1-kT)^{-1}\geq e^{kT}$, positive integration proves <a id="hold:closedvalues"></a>


$$
\begin{aligned}P(t)&\leq E_T(Y_0+f_0T+f_1T^2/2),\\
 \int_0^T P(t){\,\mathrm d} t&\leq
 \mathcal P:=E_T(Y_0T+f_0T^2/2+f_1T^3/6),\\
 A_*&:=A_h+\frac{c_0\mathcal P}{MvT_0}
                +\frac{\hbar c_1T}{2Mv^2T_0^2}
       \geq\sup_{0\leq t\leq T}\|\mathcal A\Psi(t)\|.
 
\end{aligned}
$$

Equation (117).

 The last line is unitary Duhamel applied to [(115)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:annihilator). The resulting ceilings are 

$$

 \mathcal P<2.667201\times10^{-18}\,\mathrm{kg,m},\qquad
 A_*<9.510237\times10^{-12}.

$$



Equivariance and Cauchy–Schwarz imply ${\mathbb E}_{|\Psi|^2}\int_0^T|\dot S-v|{\,\mathrm d} t\leq\mathcal P/M$. Thus actual-law domination and Markov's inequality bound the failure of the entire-path deviation $\int|\dot S-v|\leq10^{-5}\,\mathrm m$ by $C\mathcal P/(10^{-5}M)<1.067\times10^{-13}$. The handoff core $|S_h-0.102|\leq0.000839\,\mathrm m$ has failure at most <a id="hold:core"></a>


$$

 e_{\rm core}=C(\sqrt{\beta_{\rm core}}+D_h)^2,
 \qquad
 \beta_{\rm core}=(1.000001)^2\frac{128}{35}
       \left(\frac{\pi}{2}\right)^8\frac{(0.1610001)^9}{9}.

$$

Equation (118).

 To see this, normalize the unsmoothed $\cos^4$ packet on its $0.001\,\mathrm m$ half-width. Its squared density has coefficient $64/35$ after scaling to unit half-width; the two edges give the factor $128/35$. On either edge use $\sin x\leq x$, integrate the eighth power, and enlarge the edge width by the smoothing radius $10^{-10}\,\mathrm m$. Positive convolution and Jensen preserve this two-sided bound, with the displayed normalization factor. The $D_h$ triangle then uses the exact handoff wave, rather than replacing its marginal.

On the intersection of these two good events, the first possible crossing of $S_{\rm on}$ is after $0.036601\,\mathrm s$, and the last possible completion of the pulse is before $0.038389\,\mathrm s$. More directly, the pathwise bound $|S_t-(0.104+vt_{\rm lab})|\leq0.000849\,\mathrm m$ implies $S_t\geq0.14154\,\mathrm m$ for every $t_{\rm lab}\in[0.0384,0.09]$. This proves completion throughout the whole hold, including the exclusion of later returns. The same two exceptional events are charged only once below.



<a id="section-E-3"></a>

### E.3 The actual earlier label and a positive capture event

 <a id="hold:copy"></a> Let $H_r(r)\in[0,1]$ be the soft radial classifier, agreeing with the sharp label $\ell(r)$ outside its bands $B$ and having $|H_r'|\leq10/h$. Put $I_0=[-8,8]$, $I_1=[16,32]$ and 

$$

 M_r(r,Z)=(1-H_r(r)){\mathbf1}_{I_0^c}(Z)+H_r(r){\mathbf1}_{I_1^c}(Z).

$$

 For each absolutely continuous exact trajectory, with witness and readout at laboratory times $t_a=0.0366$, $t_c=0.0384$, <a id="hold:pathineq"></a>


$$

 {\mathbf1}_{\{Z_c\notin I_{\ell(r_a)}\}}
 \leq{\mathbf1}_B(r_a)+{\operatorname{Var}}_{[t_a,t_c]}H_r(r_t)+M_r(r_c,Z_c).

$$

Equation (119).

 Outside $B$, $H_r(r_a)$ is the binary earlier label; replacing this coefficient by $H_r(r_c)$ changes the mismatch by at most its total variation. This proves the inequality without assigning a sampled internal sector.

Throughout this copy interval the entire comparison packet has conditional age in $[71/60,4/3]$. Use the $B_9$-taper lens expressions $D_9,Q_9$ of [(86)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:DQ9), evaluated at $4/3$, and denote these by $D,Q$; set <a id="hold:lensvalues"></a>


$$

 q_r=\frac{\sqrt{2mD(Q+F_0D)}}{mh}.

$$

Equation (120).

 They give $D<0.007640094$, $Q<262597634.037$ and $q_r<0.003820673$. The contraction scale is at most $\cos(\sigma-1/300)$. Since $\sigma-1/300\geq59/50$ and $\cos(59/50)<2/5$, the compact comparison and its radial derivative vanish on the bands $[h/5,3h/10]$ and their translates. Hence $\|{\mathbf1}_BG\|\leq D$ and $\|{\mathbf1}_B\partial_rG\|\leq mhq_r$. Expanding the exact current of $G+E$, taking its modulus before integrating any hidden variable, gives <a id="hold:bandcurrent"></a>


$$

 \int_B|J_r[\Psi]|\leq
 h\{Dq_r+(D+e_*)p_*+e_*q_r\}.

$$

Equation (121).

 For example the four terms before division by $m$ are $D(mhq_r)$, $D\|\partial_rE\|$, $e_*(mhq_r)$ and $e_*\|\partial_rE\|$.

On the completed-clock region, let $P_g$ project in each internal sector onto the normalized real Gaussian centered at $0$ or $24$. The oscillator ladder spectrum proves the fibre inequality <a id="hold:gap"></a>


$$

 \mathcal A^*\mathcal A\geq2(I-P_g).

$$

Equation (122).

 Both operators commute with completed-clock localization. Thus the localized excited component has norm at most $A_*/\sqrt2$. The ground-state wrong-inner probability is $q_I=\operatorname{erfc}(8)$, and contraction and the norm triangle give a pointer cost at most $C(\sqrt{q_I}+A_*/\sqrt2)^2$. To combine it with the radial mismatch, use the pointwise inequality 

$$

 M_r(r,Z)\leq |H_r(r)-i|+{\mathbf1}_{I_i^c}(Z),\qquad i=0,1,

$$

 and sum against the exact orthogonal component densities. The square-root multiplier of the first term kills the compact sector-$i$ lens comparison, so its total contribution is at most $C(D+e_*)^2$. Together with the initial band and [(121)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:bandcurrent), this proves the copy cost, apart from the already identified exceptional events, <a id="hold:copycost"></a>


$$

 C\left[2(D+e_*)^2+\frac35
       \{Dq_r+(D+e_*)p_*+e_*q_r\}\right]
       +C(\sqrt{q_I}+A_*/\sqrt2)^2.

$$

Equation (123).

 Here $10(t_c-t_a)/T_0=3/5$. Each endpoint and variation refers to the same exact trajectory and its own earlier radial label.



<a id="section-E-4"></a>

### E.4 Absolute current over the entire holding interval

 <a id="hold:retention"></a> At each full configuration, including $S,r,Z$, the exact identity is <a id="hold:exactcurrent"></a>


$$

 J_Z[\Psi]=\frac{1}{\mu}\Im(\Psi^\dagger\mathcal A\Psi)
                         +b'\Psi^\dagger\Pi_1\Psi.

$$

Equation (124).

 The second term has not been discarded: it vanishes on every visited point of a good clock path because the pulse is completed there. For $R_0=[-10,10]$, $R_1=[14,34]$, a path starting in $I_i$ and leaving $R_i$ crosses one of the four width-two bands $[-10,-8]$, $[8,10]$, $[14,16]$, $[32,34]$. Linear cutoffs of slope $1/2$ on these disjoint bands require unit variation for such an exit. Restricted equivariance, actual-law domination and then Cauchy–Schwarz therefore give <a id="hold:wholehold"></a>


$$
\begin{aligned}{\mathbb P}(\hbox{a hold exit, correct capture, good clock})
 &\leq\frac{C}{2\mu}\int_{1.28}^{3}
          \int|\Psi|\,|\mathcal A\Psi|{\,\mathrm d} q{\,\mathrm d}\tau\\
 &\leq\frac{C}{2\mu}\frac{43}{25}A_*
  <3.271570\times10^{-9}.
 
\end{aligned}
$$

Equation (125).

 All hidden-coordinate moduli are taken before integration. The variation counts recrossings and every time of the interval; an endpoint estimate is not being substituted for a path estimate. The global annihilator norm bounds the restricted current, so no unfinished part of the comparison wave has been removed.



<a id="section-E-5"></a>

### E.5 The loaded radial exit and the evaluated sum

 <a id="hold:exit"></a> For the radial barrier increasing from zero at $0.099\,\mathrm m$ to one at $0.100\,\mathrm m$, the slope is $1000\,\mathrm m^{-1}$. Let 

$$

 d_j^2=\frac{(2j+1)!!}{2^j100^{2j}},\quad
 B_j=(d_j^2+2hd_jd_{j+1})^{1/2},\quad
 T_G=\sqrt{22/7^{49}},\quad
 \beta=\frac{B_2}{2m}+\frac{hB_1}{2}+VT_G+F_0B_0.

$$

 Here $d_j$ are the half-line Gaussian derivative norms, equivalently the norms of its unitary odd extension. For an integrable absolutely continuous $f$ the grid sum obeys 

$$

 \sup_{0\leq x<h}\left|h\sum_{k\in\mathbb Z}f(x+kh)
                      -\int_{\mathbb R}f\right|
       \leq h\int_{\mathbb R}|f'|.

$$

 This follows by comparing the value at the chosen point of each cell with its integral and then summing the fundamental theorem of calculus bounds. With $f=|\chi_{100}^{(j)}|^2$, $\int|f'|\leq2d_jd_{j+1}$ proves the folded bound $B_j^2$. The periodic reference has mass $h/2$ per cell and circle norm one. Its kinetic energy starts at zero and increases by at most $V$ under the nondecreasing gate, proving $\|\partial_ru_{{\rm ref},i}^{\gamma}\|_{L^2(0,2)}\leq mh/2$. Consequently the norms of $\sqrt2\chi_{100}^{(j)}u_{{\rm ref},i}^{\gamma}$ and $\sqrt2\chi_{100}'\partial_ru_{{\rm ref},i}^{\gamma}$ are bounded by $B_j$ and $B_1mh/2$, respectively. For the auxiliary $\sqrt2\chi_{100}u_{{\rm ref},i}^{\gamma}$, the product-rule residual consists respectively of the second Gaussian derivative, the cross derivative, the outer cutoff tail and the weak trap, and their sum is exactly $\beta$ above. For the decreasing Gaussian density beyond $990$, periodic cell masses give a folded tail at most $\operatorname{Tail}(990)+h\rho(990)$. Writing $z=9.9$, integration by parts gives 

$$

 \int_z^\infty y^2e^{-y^2}{\,\mathrm d} y
 \leq\left(\frac z2+\frac{1}{4z}\right)e^{-z^2}.

$$

 The radial density is $4y^2e^{-y^2}/\sqrt\pi$ in this scaled coordinate. Thus $\operatorname{Tail}(990)<21/7^{49}$ and $\rho(990)<4/7^{49}$ in detector coordinates, by $e^2>7$ and $\sqrt\pi>1$. Since $h<1/4$, their folded sum is below $T_G^2$. Unitary integration for age at most $4/3$ yields the full-wave bound 

$$

 \|{\mathbf1}_{r_{\rm phys}\geq0.099}\Psi\|
 \leq T_r:=\frac43\beta+T_G+e_*.

$$

 Negative quiet ages obey the same larger bound by the quiet estimate used in [(114)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:radialerror); pointer tensor factors have norm one.

The same loaded clock estimate gives a uniform left-collar bound $n_*=n_h+\mathcal P/(Mg)$. Thus the exact radial momentum starts below $P_{r,0}=\hbar\sqrt{3/2}/0.01+P_{r,h}$ and grows at most at rate $F_r=W_r+Q_r+V_{p,r}n_*$. There is no writer radial force. The initial outer tail plus the absolute soft-barrier current prove <a id="hold:radialexit"></a>


$$

 e_{\rm exit}=C\left[
 (\sqrt{21/7^{49}}+D_h)^2
 +\frac{1000T_r}{m_{\rm phys}}
       (P_{r,0}T_c+F_rT_c^2/2)\right]
 <9.127218\times10^{-8}.

$$

Equation (126).

 This bounds initial outside configurations as well as every later exit through readout under the loaded wave.

For a directly evaluable decomposition, define 

$$
\begin{aligned}e_{\rm base}&=C\{2D^2+(3/5)Dq_r\},\\
 e_{\rm corr}&=C\{2[(D+e_*)^2-D^2]
                   +(3/5)[(D+e_*)p_*+e_*q_r]\},\\
 e_{\rm inner}&=C\left(\sqrt{1/(14\,7^{32})}+A_*/\sqrt2\right)^2,
 &e_{\rm hold}&=43CA_*/(50\mu),\\
 e_{\rm dev}&=C\mathcal P/(10^{-5}M).
\end{aligned}
$$

 The inner-tail replacement follows from $\operatorname{erfc}(8)<e^{-64}/(8\sqrt\pi)
<1/(14\,7^{32})$. All constants in these expressions have now been specified by rational operations, square roots, $\pi$, and the lens functions $D_9,Q_9$ in [(86)](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:DQ9). Outward evaluation gives  

| Term | Upper bound |
| --- | --- |
| $e_{\rm base}$ | $0.000537032962395581630703$ |
| $e_{\rm corr}$ | $0.000010915589215098519870$ |
| $e_{\rm inner}$ | $1.81324790661460\times10^{-22}$ |
| $e_{\rm hold}$ | $3.271569843081749\times10^{-9}$ |
| $e_{\rm core}$ | $0.000004378860028173163338$ |
| $e_{\rm dev}$ | $1.06689598045912\times10^{-13}$ |
| $e_{\rm exit}$ | $9.127217662854526\times10^{-8}$ |

  Their sum is strictly below $0.000552421956$. The event proof is [(119)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:pathineq), the positive endpoint bound, [(125)](/quantum-measurement/research/nonequilibrium-records/appendix-e-copying-and-retention-for-the-exact-loaded-wave#hold:wholehold), and the union with the three common exceptional events (clock core, clock deviation, radial exit). When combined with the earlier-label theorem, those same events are counted once. None of the estimates supplies an independent internal-sector variable, a new actual-law marginal, or an additional physical source beyond the stated effective Hamiltonian.
