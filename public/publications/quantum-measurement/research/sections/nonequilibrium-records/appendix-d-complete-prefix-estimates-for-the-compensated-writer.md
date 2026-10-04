# Appendix D: Complete prefix estimates for the compensated writer

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

<a id="section-D"></a>

## D Complete prefix estimates for the compensated writer

 <a id="prefix:appendix"></a><a id="prefix:main"></a>

This appendix closes the clock and pointer derivative estimates used before $t_a=0.0366\,\mathrm s$. All norms are full spinor Hilbert norms, including both internal sectors. Write $t=0$ at $t_h=-0.002\,\mathrm s$, and set 

$$

 \begin{aligned}
 T&=0.0386\,\mathrm s,&T_0&=0.03\,\mathrm s,&
 a&=vT_0=0.03\,\mathrm m,\\
 v&=1\,\mathrm{m/s},&M&=10\,\mathrm{kg},&
 \mu&=\mu_Z=0.01,\qquad\kappa=\hbar/M.
 \end{aligned}

$$

 Clock derivatives are physical $S$ derivatives; pointer derivatives are with respect to the dimensionless $Z$. All scalar numbers below use SI units for the clock. Removing the same constant Galilean carrier from both exact waves leaves the clock generator $vp_S+p_S^2/(2M)$. The preparation estimates are those of Sections [B.5](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer) and [B.6](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer-hessian); the old-wave bounds are obtained from Sections [C.6](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:homogeneous) and [C.5](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:clockcoeff). Thus neither wave nor actual law is replaced at the handoff.



<a id="section-D-1"></a>

### D.1 Finite Gaussian coefficient calculation

 <a id="prefix:gaussian"></a> Let $w=0.003$, $b(s)=24B_9(s/w)$ with its constant extensions, and 

$$

 \gamma(s,Z)=\pi^{-1/4}e^{-(Z-b)^2/2}
                   e^{\mathrm i\mu b'(Z-b/2)},\qquad y=Z-b.

$$

 Its first logarithmic derivative is 

$$

 \partial_s\log\gamma=c y+d,
 \quad c=b'+\mathrm i\mu b'',\qquad
 d=\tfrac{\mathrm i\mu}{2}(bb''-b'^2).

$$

 The scalar phase in $d$ is retained. Successive logarithmic derivatives are $cy+d$, $c'y-cb'+d'$, $c''y-2c'b'-cb''+d''$, and $c'''y-3c''b'-3c'b''-cb'''+d'''$. The following rational derivative ceilings specify every coefficient used below: 

$$

 \begin{aligned}
 (B_0,B_1,B_2)&=(24,19687.5,105000000),\\
 (B_3,B_4,B_5)&=(4.9\times10^{11},4.032\times10^{17},
                                      4.7936\times10^{20}),
 \end{aligned}
 \qquad |b^{(j)}|\le B_j.

$$

 Here $B_1=24(315/128)/w$ follows from $B_9'=630x^4(1-x)^4$. Differentiating this identity, using $x(1-x)\le1/4$ and $|1-2x|\le1$, gives $B_2=24(2520/64)/w^2$ and $B_3=24(7560/16+5040/64)/w^3$. For $j=4,5$ the sufficient coefficient bound is 

$$

 B_j=\frac{24}{w^j}
       \sum_{k=5}^9 |\beta_k|\frac{k!}{(k-j)!},
 \qquad (\beta_5,\ldots,\beta_9)=(126,-420,540,-315,70).

$$

 The polynomial and constant extensions are globally $C^4$; their fifth weak derivative is bounded. No endpoint distribution enters these calculations.

Define $C_j=B_j+\mu B_{j+1}$ for $0\le j\le4$ and $q_0=C_0+1$. The $C_j$ bound the derivatives of $b+\mathrm i\mu b'$. Define four positive affine polynomials in a formal variable $Y$: 

$$
\begin{aligned}d_0&=\mu(B_0B_2+B_1^2)/2,&
 d_1&=\mu(B_0B_3+B_1B_2)/2,\\
 d_2&=\mu(B_0B_4+B_2^2)/2,&
 d_3&=\mu(B_1B_4+B_0B_5+2B_2B_3)/2,\\
 L_1&=d_0+C_1Y,&L_2&=C_1B_1+d_1+C_2Y,\\
 L_3&=2C_2B_1+C_1B_2+d_2+C_3Y,&&\\[-2mm]
 L_4&=3C_3B_1+3C_2B_2+C_1B_3+d_3+C_4Y.&&
\end{aligned}
$$

 For a positive polynomial $P(Y)=\sum p_jY^j$, put 

$$

 \mathcal N(P)=\sum_jp_j\sqrt{(2j-1)!!/2^j},\qquad(-1)!!=1.

$$

 This uses the exact Gaussian moment $\|y^j\gamma\|^2=(2j-1)!!/2^j$. Complete, evaluable formulas for the four pointer jets are <a id="prefix:jets"></a>


$$
\begin{aligned}g_0&=1,&g_1&=\mathcal N(L_1),&
 g_2&=\mathcal N(L_1^2+L_2),\\
 g_3&=\mathcal N(L_1^3+3L_1L_2+L_3),&&&\\[-1mm]
 g_4&=\mathcal N(L_1^4+6L_1^2L_2+3L_2^2+4L_1L_3+L_4),
 &&&
\end{aligned}
$$

Equation (92).

 so that $\|\partial_s^j\gamma\|\le g_j$. In particular, 

$$

 \begin{aligned}
 g_1&<1.529437156625049\times10^7,&
 g_2&<2.344303538271762\times10^{14},\\
 g_3&<3.601493635795900\times10^{21},&
 g_4&<5.545932284532096\times10^{28}.
 \end{aligned}

$$

 The defining expressions, rather than these shortened displays, are used in the numerical bounds below.

For $A=\partial_Z+Z-\Pi_1(b+\mathrm i\mu b')$ and $\mathsf Q(f)=(\|Zf\|^2+\|p_Zf\|^2)^{1/2}$, the oscillator form identity and $[A,Z]=1$ give <a id="prefix:oscform"></a>


$$
\begin{aligned}\mathsf Q(f)&\le\|Af\|+q_0\|f\|,\\
 \mathsf Q(Zf)&\le\|A^2f\|+2q_0\|Af\|+(q_0^2+1)\|f\|.
 
\end{aligned}
$$

Equation (93).

 They hold fibrewise and then for the Hilbert direct sum over all other coordinates. Differentiating $A\gamma=0$ gives the weighted jet bounds 

$$

 q_j=q_0g_j+\sum_{k=1}^j\binom jk C_kg_{j-k},\qquad 1\le j\le3,
 \quad \mathsf Q(\partial_s^j\gamma)\le q_j.

$$

 Finally, for the writer coefficients $F=b/\mu+\mu b''$ and $C_b=b^2/(2\mu)+\mu bb''/2$, define <a id="prefix:forces"></a>


$$
\begin{aligned}F_*&=B_0/\mu+\mu B_2=1052400,\\
 F_1&=B_1/\mu+\mu B_3=4901968750,\\
 F_2&=B_2/\mu+\mu B_4=4032010500000000,\\
 K_1&=B_0B_1/\mu+\mu(B_1B_2+B_0B_3)/2=69183187500,\\
 K_2&=(B_1^2+B_0B_2)/\mu
       +\mu(B_2^2+2B_1B_3+B_0B_4)/2
       =48535884509765625.
 
\end{aligned}
$$

Equation (94).

 These bound $|F|,|F'|,|F''|,|C_b'|,|C_b''|$, respectively.



<a id="section-D-2"></a>

### D.2 Exact intertwiner and pulse integrals

 <a id="prefix:intertwiner"></a> Let $G_*=V(S)(\psi_o g_0)$, where $\psi_o$ is the full exact old wave, and $V$ applies the above Weyl displacement in sector one and the identity in sector zero. Since $\mathrm i\hbar v\gamma_S=H_Z\gamma$, product differentiation gives, up to an irrelevant overall sign in the forced error equation, 

$$

 R/\hbar=\kappa(\gamma_S\psi_{o,S}+\gamma_{SS}\psi_o/2).

$$

 This identity holds separately in the orthogonal sectors and hence for any normalized qubit input. Its support is exactly the open writer pulse; the stationary displaced plateau contributes no source. Write $\delta=\Psi-G_*$ and $I_j=\int_0^T\|\mathbf1_{\rm pulse}\partial_S^j\psi_o\|\,dt$. The old characteristic helper has clock centre $t_{\rm lab}+0.104$ and half-width $0.0010000001$. Its earliest pulse contact is $0.0364499999\,\mathrm s$, leaving $\Delta=0.0001500001\,\mathrm s$. Throughout those late slices the initial offset lies in an endpoint strip of relative width $d=0.1500002$. With $\sigma=0.001$ and $m_\phi=1.000001$, define the rational bounds 

$$

 \beta=m_\phi^2\frac{64}{35}(11/7)^8\frac{d^9}{9},\qquad
 \eta^2=m_\phi^2\frac{1024}{35}(11/7)^8
                         \frac{d^7}{7\sigma^2}.

$$

 The inequality $\cos(\pi x/(2\sigma))\le
\pi(\sigma-x)/(2\sigma)$, positive convolution and Jensen's inequality prove that $\beta$ bounds the strip mass and $\eta$ its amplitude first-derivative norm. The mollification radius is included in $d$. On these slices $\|u_S\|\le N_1/a$, $N_1=34359738369$. The old-wave estimates, evaluated through elapsed time $0.0404$, give $\|\psi_o-G_o\|<3.1\times10^{-11}$ and $\|\partial_S(\psi_o-G_o)\|<36000$. Consequently <a id="prefix:pulse"></a>


$$
\begin{aligned}I_0&\le T(3.1\times10^{-11})+\Delta\sqrt\beta=:J_0,\\
 I_1&\le T(36000)+\Delta(\eta+N_1\sqrt\beta/a)=:J_1,\\
 I_2&\le T(1.315\times10^{24})=:J_2.
 
\end{aligned}
$$

Equation (95).

 The last bound uses the full old Hessian, including its error. The preparation transfer and old right collar imply $\|\delta(0)\|\le3\times10^{-30}+1.2\times10^{-37}$; the latter term bounds $(V-I)\psi_og_0$ without discarding the tail. Duhamel therefore proves the uniform ceiling <a id="prefix:D"></a>


$$
\begin{aligned}
 D_*&:=3\times10^{-30}+1.2\times10^{-37}
  +\widehat\kappa(g_1J_1/a+g_2J_0/(2a^2)),\\
 \|\delta(t)\|&\le D_*<5.055628819933504\times10^{-22}.
 \end{aligned}
 

$$

Equation (96).

 where $\widehat\kappa=1.055\times10^{-35}>\kappa$. All subsequent sharp bounds use the defining expression for $D_*$.



<a id="section-D-3"></a>

### D.3 Closing the simultaneous pointer hierarchy

 <a id="prefix:hierarchy"></a> For this first, deliberately coarse closure take $h_-=1.054\times10^{-34}<\hbar$, and use $\widehat\kappa$ in positive numerators and $h_-$ in denominators. The old physical force ceilings are $F_o=8.00000000001\times10^{-6}$ and $F_{o,2}=1$. The handoff bounds proved in the preparation appendix are 

| Quantity | Outward upper bound |
| --- | --- |
| $\mathsf Q(\delta(0))$ | $6\times10^{-24}$ |
| $\\|\delta_S(0)\\|$ | $0.073$ |
| $\mathsf Q(\delta_S(0))$ | $300000$ |
| $\\|\Psi_{SS}(0)\\|$ | $2.5\times10^{27}$ |
| $A_h=\\|A\Psi(0)\\|$ | $5.049592328644200595\times10^{-24}$ |
| $A_{2,h}=\\|A^2\Psi(0)\\|$ | $1.228242965202911600\times10^{-17}$ |
| $U_h=\\|\partial_S(A\Psi)(0)\\|$ | $276122.9698216115699$ |

  These already include the remote Weyl change. Differentiating the residual once gives the coefficients $1,3/2,1/2$. Define its integrated bounds 

$$
\begin{aligned}R_Q&=\widehat\kappa(q_1J_1/a+q_2J_0/(2a^2)),\\
 R_S&=\widehat\kappa(g_1J_2/a+3g_2J_1/(2a^2)+g_3J_0/(2a^3)),\\
 R_{SQ}&=\widehat\kappa(q_1J_2/a+3q_2J_1/(2a^2)+q_3J_0/(2a^3)).
\end{aligned}
$$

 Oscillator rotation and the differentiated error equation give the successive bounds 

$$
\begin{aligned}Q_d&=6\times10^{-24}+F_*TD_*/T_0+R_Q,\\
 e_S&=0.073+F_oTD_*/h_-+T(F_1Q_d+K_1D_*)/(vT_0^2)+R_S,\\
 P_1&=1.146\times10^{12}+g_1/a+e_S,\\
 A_1&=A_h+\widehat\kappa\left[
 \frac{C_1}{a}(J_1+g_1J_0/a+Te_S)
                +\frac{C_2}{2a^2}(J_0+TD_*)\right].
\end{aligned}
$$

 In particular $Q_d<6.847\times10^{-16}$, $e_S<1.482\times10^6$, and $A_1<6.192373945249072\times10^{-23}$. The last row follows from the exact identity <a id="prefix:Aeq"></a>


$$
(\mathrm i\partial_t-H/\hbar-1/(\mu T_0))A\Psi
 =-\kappa\Pi_1(c'\Psi_S/a+c''\Psi/(2a^2)),
 \qquad c=b+\mathrm i\mu b'.
 

$$

Equation (97).

 For the second power the exact equation is 

$$

 (\mathrm i\partial_t-H/\hbar-2/(\mu T_0))A^2\Psi
 =-2\kappa\Pi_1(c'\partial_S(A\Psi)/a+c''A\Psi/(2a^2))
                     -\kappa\Pi_1(c')^2\Psi/a^2.

$$

 The last source is essential and comes from $[A,\partial_S]=\Pi_1c'/a$.

For candidate constants $(X,P,U,B)$ bounding $(\mathsf Q(\delta_S),\|\Psi_{SS}\|,\|\partial_S(A\Psi)\|,
\|A^2\Psi\|)$, put 

$$

 Q_2=(q_0^2+1)D_*+2q_0A_1+B,\qquad
 P_{1Q}=q_0(1.146\times10^{12})+q_1/a+X.

$$

 A simultaneous constant supersolution consists of the following four strict inequalities: <a id="prefix:fourrows"></a>


$$
\begin{aligned}X&>300000+F_*Te_S/T_0+F_oTQ_d/h_-
             +T(K_1Q_d+F_1Q_2)/(vT_0^2)+R_{SQ},\\
 P&>2.5\times10^{27}+T\left[
 \frac{2F_oP_1+F_{o,2}}{h_-}
 +\frac{2(F_1P_{1Q}+K_1P_1)}{vT_0^2}
 +\frac{F_2(q_0+Q_d)+K_2}{v^2T_0^3}\right],\\
 U&>U_h+T\left[\frac{F_oA_1}{h_-}
  +\frac{F_1(B+q_0A_1)+K_1A_1}{vT_0^2}
  +\widehat\kappa\left(\frac{C_1P}{a}
      +\frac{3C_2P_1}{2a^2}+\frac{C_3}{2a^3}\right)\right],\\
 B&>A_{2,h}+T\widehat\kappa
         (2C_1U/a+C_2A_1/a^2+C_1^2/a^2).
 
\end{aligned}
$$

Equation (98).

 These follow from the twice differentiated Schrödinger equation, [(97)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:Aeq), and [(93)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:oscform). In particular the force on $A\Psi$ costs $B+q_0A_1$, not merely $A_1$. For $(X,P,U,B)=(10^{14},10^{40},2\times10^{11},2\times10^{-17})$ the respective right sides are strictly below 

$$

 \begin{aligned}
 \mathcal R_X&<4.011662441023\times10^{12},&
 \mathcal R_P&<6.718077927095\times10^{39},\\
 \mathcal R_U&<1.452034044217\times10^{11},&
 \mathcal R_B&<1.809106526629\times10^{-17}.
 \end{aligned}

$$

 Every dependence on the other three unknowns has been retained. The positive integral inequalities and a simultaneous first-crossing argument prove the four bounds. The large $10^{40}$ bound is used only inside this hierarchy; the next subsection supplies the much sharper error Hessian needed for the clock current.



<a id="section-D-4"></a>

### D.4 Old third clock derivative with complete coefficients

 <a id="prefix:oldthird"></a> Only an ordinary third spatial clock derivative of the old wave is needed; no fourth radial energy graph is invoked. Sections [B.3](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:hessian) and [B.4](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:fourth) give the following outward bounds for the gauged old preparation error $E_g$: 

$$

 \begin{aligned}
 P_2&=3.238008492819540878\times10^{-49},\\
 P_4&=1.075566867715738537\times10^{-76},\\
 n_2&=5.970369147764257548\times10^{-38},
 \end{aligned}

$$

 where $\|p_S^jE_g\|\le P_j$ and $n_2$ bounds the second left collar. For a cutoff equal to one through $0.10005$, zero from $0.10015$, and $g=0.0001$, the localized interpolation identities give 

$$

 L_1=\sqrt{n_2P_2}+10\hbar_+ n_2/g,\qquad
 L_2=\sqrt{n_2}\bigl(\sqrt{P_4}+18\hbar_+\sqrt{P_2}/g\bigr),
 \quad \hbar_+=1.055\times10^{-34}.

$$

 This cutoff covers every preparation-phase derivative, whose support ends at $0.10001$, and lies inside the full-one region of the old second collar, which ends at $0.100249999873$. For the preparation-rate jets use 

$$

 \begin{aligned}
 (a_0,a_1,a_2)&=(140,43600,70141750),\\
 (a_3,a_4)&=(1387431060000,986084475600000),\\
 \mu_r^+&=1.425\times10^{-12},\qquad F_p=0.080802,
 \end{aligned}

$$

 and put $r_j=\mu_r^+F_pa_j/2$ for $j=1,2,3$. Expanding $p_S^3(e^{\mathrm i\theta}E_g)$, with $\hbar|\partial_S^j\theta|\le r_j$, proves the handoff bound <a id="prefix:oldinitial"></a>


$$
\begin{aligned}E_{3,h}:={}&h_-^{-3}\left[
 \sqrt{P_2P_4}+3r_1L_2+3(r_1^2+\hbar_+r_2)L_1\right.\\[-1mm]
 &\left.\hspace{22mm}
 +(r_1^3+3\hbar_+r_1r_2+\hbar_+^2r_3)n_2\right]
                         +46933757821.201.
 
\end{aligned}
$$

Equation (99).

 The last term bounds the original packet's third derivative. The helper's radial state is $S$ independent at handoff and its preparation phase is zero there. Thus $\|\psi_{o,SSS}(0)\|\le E_{3,h}<2.250395507380083\times10^{42}$.

Here are the old-wave input ceilings used on the enlarged horizon $T_o=0.0404$, computed with the formulas of Sections [C.6](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:homogeneous) and [C.5](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:clockcoeff): 

| Input | Outward upper bound |
| --- | --- |
| $D_o=\sup\\|\psi_o-G_o\\|$ | $3.034654348976846863\times10^{-11}$ |
| $e_{1,o}=\sup\\|\partial_S(\psi_o-G_o)\\|$ | $35444.22634847288176$ |
| $e_{2,o}=\sup\\|\partial_S^2(\psi_o-G_o)\\|$ | $1.047307159416726327\times10^{21}$ |
| $G_1=\sup\\|G_{o,S}\\|$ | $1145324612300.000003$ |
| $G_2=\sup\\|G_{o,SS}\\|$ | $1.313080270080687692\times10^{24}$ |
| $F_{c,1}$ | $4.388993584524007892\times10^{-6}$ |
| $F_{c,2}$ | $0.08054047024909008647$ |

  For clarity the enlargement keeps the same ramp interval $0.0033$ and uses static duration $T_o-0.0033=0.0371<0.0377$. The helper age remains below $4/3<\pi/2$. Its packet ceilings are 

$$

 p_1=1.000001\sqrt{16/7}\,\pi/(2\sigma),\quad
 p_2=1.000001\sqrt{512/35}\,(\pi/(2\sigma))^2,

$$

 so that, with $N_2=1.001(2^{35}+1)^2$, 

$$

 G_1\le\sqrt{p_1^2+(N_1/a)^2},\qquad
 G_2\le p_2+2p_1N_1/a+N_2/a^2+25000N_1/a.

$$

 The three error entries are the sums of the transported preparation, short ramp, static, common-to-clipped and clipped-to-static component bounds evaluated at these durations; no new propagation assumption is introduced by extending the time argument.

The remote third force, including the preparation phase-square term, has the complete upper expression <a id="prefix:Fc3"></a>


$$
\begin{aligned}F_{c,3}={}&\mu_r^+a_4F_p/2
  +\mu_r^+(3a_1a_2+a_0a_3)(0.201)^2\\
 &+\frac{(\mu_r^+)^2}{4M}(3a_2a_3+a_1a_4)F_p^2
                      +2.393692459677192\times10^{-27}.
 
\end{aligned}
$$

Equation (100).

 The last summand is the third quiet-force derivative obtained from the finite product-rule calculation in Section [C.4](/quantum-measurement/research/nonequilibrium-records/appendix-c-radial-conditional-comparison-and-the-old-clock-current#old:quiet). Thus $F_{c,3}<68.48117358490407$. Put 

$$

 \begin{aligned}
 W_0&=\hbar_+(2^{35}+1)/T_0,&F_{a,1}&=25000W_0,\\
 F_{a,2}&=\frac{2520W_0}{64(0.0001)^2},&
 F_{a,3}&=\frac{(7560/16+5040/64)W_0}{(0.0001)^3}.
 \end{aligned}

$$

 The remote common-minus-clipped force is supported on $S\le0.10001$. The helper and all its $S$ derivatives vanish there for the entire prefix, since its left support starts at $0.1009999999$ and moves right. The third differentiated unitary equation therefore gives 

$$
\begin{aligned}\frac{d}{dt}\|\psi_{o,SSS}\|\le R_3:={}&
 h_-^{-1}\bigl[3F_{c,1}e_{2,o}+3F_{c,2}e_{1,o}+F_{c,3}D_o\\
 &\qquad+3F_{a,1}(G_2+e_{2,o})
       +3F_{a,2}(G_1+e_{1,o})+F_{a,3}\bigr].
\end{aligned}
$$

 In particular the large helper Hessian is not charged on the remote force support. Integrating the linear envelope once more yields <a id="prefix:J3"></a>


$$
J_3:=TE_{3,h}+\tfrac12T^2R_3
 <9.746858547719537661\times10^{46},\qquad I_3\le J_3.
 

$$

Equation (101).





<a id="section-D-5"></a>

### D.5 Localized first derivative and refined mixed moment

 <a id="prefix:localized"></a> Take a fixed decreasing Lipschitz cutoff $\chi=1$ on $S\le0.126$, $\chi=0$ on $S\ge0.136$, with $|\chi'|\le1/g_L$, $g_L=0.01$. Every old clock-force derivative is supported in its full-one region ($S\le0.106$), while the residual starts at $S=0.14145$. The positive constant drift favors departure from this left region. The forced continuity identity, with no source on the support of $\chi$, gives <a id="prefix:left"></a>


$$
n_L(t):=\|\chi\delta(t)\|
 \le n_{L,h}+\frac\kappa{g_L}\int_0^t\|\delta_S(u)\|\,du,
 \qquad n_{L,h}=7.901146211666425714\times10^{-36}.
 

$$

Equation (102).

 Since $AG_*=0$, improve the oscillator bound to $\widetilde Q=A_1+q_0D_*$. Let $\widetilde R_S=(\kappa/\widehat\kappa)R_S$ and similarly $\widetilde R_{SQ}=(\kappa/\widehat\kappa)R_{SQ}$. For the candidate $e=0.1$, define <a id="prefix:localfirst"></a>


$$
\begin{aligned}n_*&=n_{L,h}+\kappa Te/g_L,\\
 \mathcal E&=0.073+F_oTn_*/\hbar
                  +T(F_1\widetilde Q+K_1D_*)/(vT_0^2)
                  +\widetilde R_S.
 
\end{aligned}
$$

Equation (103).

 The positive two-variable comparison closes because $\mathcal E<0.07327295767972046<e$. Consequently $\|\delta_S\|\le0.1$ and $n_L\le n_*<1.197180\times10^{-35}$ throughout the prefix. The improvement retains the old force but multiplies it by its actual localized error norm.

On that force support $A=\partial_Z+Z$ and $AG_*=0$. Applying the oscillator identity on each $S$ slice, without differentiating a sharp indicator, gives $\mathsf Q(\mathbf1_{\rm old\ force}\delta)
 \le\sqrt{A_1^2+n_*^2}$. Set $B=2\times10^{-17}$ in $Q_2$ above. The differentiated oscillator rotation equation now proves the much sharper uniform bound <a id="prefix:refinedQ"></a>


$$
\begin{aligned}X_*:={}&300000+F_*Te/T_0
 +F_oT\sqrt{A_1^2+n_*^2}/\hbar\\
 &+T(K_1\widetilde Q+F_1Q_2)/(vT_0^2)
                    +\widetilde R_{SQ},
 \qquad\mathsf Q(\delta_S)\le X_*<616735.
 
\end{aligned}
$$

Equation (104).

 This is the mixed moment required in the clock estimate; the coarse $10^{14}$ bound from [(98)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:fourrows) is not substituted here.



<a id="section-D-6"></a>

### D.6 Second clock derivative and the two absolute currents

 <a id="prefix:currents"></a> Two residual derivatives give exactly 

$$

 R_{SS}/\hbar=\kappa\left(
 \gamma_S\psi_{o,SSS}+\tfrac52\gamma_{SS}\psi_{o,SS}
       +2\gamma_{SSS}\psi_{o,S}+\tfrac12\gamma_{SSSS}\psi_o\right).

$$

 Its integrated norm is bounded by the explicit expression 

$$

 R_{SS}^*=\kappa(g_1J_3/a+5g_2J_2/(2a^2)
                      +2g_3J_1/a^3+g_4J_0/(2a^4)).

$$

 The refined new-minus-old handoff Hessian from Section [B.6](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer-hessian), plus both derivatives of the remote Weyl change, gives the following expression. Here $n_{2,R}=5.970369147764257548\times10^{-38}$ is the *right* second-collar ceiling from Section [B.5](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:transfer). It equals the numerical left-collar ceiling $n_2$ because reflecting the moving-cutoff construction gives the same positive momentum inequality: the right boundary translates at $v$ plus the drift ceiling and the left boundary at $v$ minus that ceiling. The right collar is one throughout the writer support; its handoff full-one edge is below $0.103750000127$, while $S_{\rm on}=0.14145$. Thus the required right-tail amplitude is bounded independently of the left-tail localization used in [(99)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:oldinitial). Explicitly, <a id="prefix:Hh"></a>


$$
\begin{aligned}H_h={}&1.828509471006939478\times10^{19}
       +\frac{2(2.534074040624599816\times10^{-57})}{\hbar^2}
       \\
 &+\frac{2g_1(1.390399439216243060\times10^{-43})}{a\hbar}
                       +\frac{g_2n_{2,R}}{a^2}.
 
\end{aligned}
$$

Equation (105).

 For $H(t)=\|\delta_{SS}(t)\|$, integration by parts with $\chi$ gives 

$$

 \|\mathbf1_{\rm old\ force}\delta_S\|
             \le\sqrt{n_*H(t)}+2D_*/g_L.

$$

 The cutoff cost is retained. Twice differentiating the error equation therefore yields the differential comparison $H^\prime\le 2\alpha\sqrt H+f(t)$, where $\alpha=F_o\sqrt{n_*}/\hbar$, $f\ge0$, and $H(0)+\int_0^T f(t)\,dt\le\mathcal R$ with <a id="prefix:Hrest"></a>


$$
\begin{aligned}\mathcal R={}&H_h+R_{SS}^*
       +\frac{4F_oTD_*}{\hbar g_L}
       +\frac{F_{o,2}Tn_*}{\hbar}\\
 &+\frac{2T(F_1X_*+K_1e)}{vT_0^2}
       +\frac{T(F_2\widetilde Q+K_2D_*)}{v^2T_0^3}.
 
\end{aligned}
$$

Equation (106).

 Indeed, writing $F(t)=H_h+\int_0^t f(u)\,du$, the function $[\alpha t+\sqrt{F(t)}]^2$ has derivative at least $2\alpha[\alpha t+\sqrt{F(t)}]+f(t)$ and dominates the initial value. Scalar differential comparison therefore proves <a id="prefix:H"></a>


$$
H(t)\le H_*:=\left(F_oT\sqrt{n_*}/\hbar+\sqrt{\mathcal R}\right)^2
 <1.117214708915152634\times10^{21}.
 

$$

Equation (107).

 Regularization at zero justifies this comparison when a norm vanishes. Smooth-domain approximation and these uniform finite estimates justify the oscillator and weak clock commutations without an oscillator cutoff.

On $S<S_{\rm on}$, $G_*=\psi_og_0$ and $A=\partial_Z+Z$. The oscillator form and graph identities imply, after restriction to that region, 

$$

 \|\delta_Z\|\le e_Z:=\sqrt{A_1^2+D_*^2},\qquad
 \|\delta_{ZZ}\|\le e_{ZZ}:=\sqrt{B^2+4A_1^2+3D_*^2}.

$$

 For example $\|p_Z^2f\|^2\le\|(p_Z^2+Z^2)f\|^2+2\|f\|^2$ and $\|(\mathcal B^\dagger\mathcal B+1)f\|^2
=\|\mathcal B^2f\|^2+4\|\mathcal Bf\|^2+\|f\|^2$ with $\mathcal B=\partial_Z+Z$ prove the second bound. The conditional-rank stability functional then gives <a id="prefix:IZ"></a>


$$
I_Z\le\frac{T}{\mu T_0}
 \left(2\sqrt2e_Z+2e_Z^2+\frac{23\sqrt3}{2}D_*+e_{ZZ}\right)
 <2.574814383253091344\times10^{-15}.
 

$$

Equation (108).

 Here the comparison's radial direction is independent of $Z$; $\|g_0'\|=1/\sqrt2$, $\|g_0''\|=\sqrt3/2$ and $\|g_0'^2/g_0\|=\sqrt3/2$ supply the displayed coefficients. For the clock functional use the old characteristic helper instead. Expanding its positive stability majorant with the additional error $\delta$ gives <a id="prefix:IS"></a>


$$
\begin{aligned}\Delta I_S&\le\kappa T\left[
 4(G_1+e_{1,o})e+2e^2+14D_*Q_G+9D_*G_2+H_*\right],\\
 Q_G&=1.000001\frac{4\pi^2}{\sigma^2}\sqrt{3/35}+(N_1/a)^2,
 \\[-1mm]
 \Delta I_S&<4.547786946512146880\times10^{-16}.
 
\end{aligned}
$$

Equation (109).

 This is an increment of an absolute-current upper bound, not a subtraction of signed currents. All hidden-coordinate absolute values precede integration. Both estimates apply on the common whole-prefix good-clock event; its complement is charged separately in the event composition. The current components must be added before optimizing the single rank collar.



<a id="paragraph-3"></a>

#### Reproducible outward arithmetic.

 Equations [(92)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:jets)–[(109)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:IS), together with the outward input tables, form a finite coefficient specification. Every displayed decimal input is an exact rational ceiling. One fully rational evaluation uses a bracket for $\pi$ of width $2\times10^{-69}$ about $3.141592653589793238462643383279502884197169399375105820974944592307817$ and $\hbar=6.62607015\times10^{-34}/(2\pi)$. For a nonnegative rational $x=n/d$, replace each square root by 

$$

 \operatorname{sqrt}_+(x)=
 \frac{1+\left\lfloor\sqrt{\left\lfloor10^{200}n/d\right\rfloor}
                         \right\rfloor}{10^{100}}.

$$

 All these coefficient expressions have positive inputs; use upper numerators and lower denominators. This procedure gives $X_*<616734.119066647397144$, $H_*<1.117214708915152634\times10^{21}$, and the strict current bounds [(108)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:IZ)–[(109)](/quantum-measurement/research/nonequilibrium-records/appendix-d-complete-prefix-estimates-for-the-compensated-writer#prefix:IS). It specifies the calculations inside the manuscript and requires no external coefficient file.
