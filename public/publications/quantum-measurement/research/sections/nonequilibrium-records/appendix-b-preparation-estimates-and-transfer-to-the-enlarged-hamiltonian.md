# Appendix B: Preparation estimates and transfer to the enlarged Hamiltonian

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

<a id="section-B"></a>

## B Preparation estimates and transfer to the enlarged Hamiltonian

 <a id="prep:main"></a> All momenta in this appendix have the constant Galilean carrier removed. A superscript $g$ additionally removes the bounded preparation phase $\theta$. Thus an ordinary clock momentum here means $p_S-Mv$ in the laboratory frame. We give the finite coefficient construction as well as its numerical enclosures; the latter are consequences of the construction, not extra hypotheses.



<a id="section-B-1"></a>

### B.1 Coefficient conventions and the Gaussian residual

 Write $T=0.104$, $T_0=0.03$, $L_i=10^{-4}$, $L_f=10^{-2}$, $M=10$, $v=1$, $K=100$, and $\lambda=2^{52}T_0/L_i^2$, so that $m=\hbar\lambda$. Lengths and times in this appendix are in metres and seconds. Let $b_p$ denote the preparation dilation, to distinguish it from the writer displacement. Set $a=b_p'/b_p$, $f_*=0.201$, $F_*=0.080802$, $g_1=0.0005$, $g_2=0.00025$ and $\gamma_*=141$. Here $F(r)=2\int_0^r f$ is the bounded preparation profile; the subscript on $F_*$ in this subsection is unrelated to the writer force. Here $b_0(s)=1+99B_9(s/0.1)$ has its constant extensions, and $b_p$ is its convolution with the fixed $10^{-5}$-scale mollifier. The explicit clamped ninth-degree polynomial and its fixed positive mollifier give the derivative bounds <a id="prep:bjets"></a>


$$
\begin{aligned}B_1&=99(315/128)/0.1,& B_2&=99(2520/64)/0.1^2,\\
 B_3&=99(7560/16+5040/64)/0.1^3,&
 B_4&=99(1360800)/0.1^4. 
\end{aligned}
$$

Equation (14, 15).

 The sharper relative bounds $b_p'\le140b_p$ and $|b_p''|\le24000b_p$ follow from polynomial positivity before convolution. One finite verification is to express each of $140b_0-b_0'$, $24000b_0-b_0''$, $24000b_0+b_0''$ in Bernstein form on dyadic subintervals of $[0,1]$; bisect a subinterval if any coefficient is negative. All leaves are nonnegative by depth five. For reproducibility, if $P(x)=\sum_{j=0}^n p_jx^j$, its Bernstein coefficient of index $k$ on $[u,u+w]$ is 

$$

 \sum_{j=0}^k\frac{\binom{k}{j}}{\binom{n}{j}}
 \sum_{l=j}^n p_l\binom{l}{j}u^{l-j}w^j.

$$

 Positive convolution preserves these inequalities. Put <a id="prep:ajets"></a>


$$
\begin{aligned}a_0&=140,\\
 a_1&=24000+a_0^2=43600,\\
 a_2&=B_3+3a_0(24000)+2a_0^3=70141750,\\
 a_3&=B_4+4a_0B_3+3(24000)^2+12a_0^2(24000)+6a_0^4
       =1387431060000. 
\end{aligned}
$$

Equation (16, 17, 18, 19).

 These bound $|a^{(j)}|$. Let $B_5$ be the largest absolute Bernstein coefficient on $[0,1]$ of $d^5b_0/ds^5$ and set 

$$

 a_4=B_5+5a_0B_4+10(24000)B_3+20a_0^2B_3
       +30a_0(24000)^2+60a_0^3(24000)+24a_0^5.

$$

 The normalized clock envelope has derivative norms bounded by 

$$
\begin{aligned}p_0&=1,&p_1&=q\sqrt{16/7}\,\pi/(2\sigma),&
 p_2&=q\sqrt{512/35}\,[\pi/(2\sigma)]^2,\\
 p_3&=q\sqrt{1024/7}\,[\pi/(2\sigma)]^3,&
 p_4&=q(2\pi/\sigma)^4,
\end{aligned}
$$

 where $\sigma=0.001$, $q=1.000001$. The convolution scale is $10^{-10}$ and $q(1-10^{-10}p_1/q)>1$, which proves the normalization allowance. These are weak-derivative estimates for the compact envelope, not a band-limit assertion.

Let $A=2r\exp[-r^2/(2L^2)]/(\pi^{1/4}L^{3/2})$, $L=L_ib_p(S)$, and $G=\phi(S-S_c-vt)A$. Set $z=(r/L)^2$, $M_j=(2j+1)!!/2^j$ and $\nu_j=\sqrt{M_{2j}}$. Thus $\|z^jA\|=\nu_j$. For a polynomial $P=\sum c_jz^j$ define $\mathcal N(P)=\sum|c_j|\nu_j$. This coefficient norm is deliberately subadditive; signs of independently bounded derivatives cannot cancel. Use 

$$

 H_1=z-\tfrac32,\quad H_2=z^2-5z+\tfrac94,\quad
 H_3=z^3-\tfrac{21}2z^2+\tfrac{79}4z-\tfrac{27}8.

$$

 Put $k=B_1$, $k_1=B_2+B_1^2$, $k_2=B_3+3B_1B_2+2B_1^3$, and 

$$
\begin{aligned}C&=\lambda L_i^2(100B_2+B_1^2)/2,\\
 C_k&=\lambda L_i^2(B_1B_2+B_1^3)/2,\\
 C_2&=\lambda L_i^2(100B_3+3B_1B_2+2B_1^3)/2,\\
 C_3&=\lambda L_i^2(100B_4+4B_1B_3+3B_2^2
                         +12B_1^2B_2+6B_1^4)/2.
\end{aligned}
$$

 The three nonnegative coefficient bounds 

$$
\begin{aligned}r_0&=p_2+3kp_1+\tfrac32 k_1+\tfrac94k^2,\\
 r_1&=2kp_1+k_1+5k^2+2Cp_1+3C_k+C_2,\\
 r_2&=k^2+2C_k
\end{aligned}
$$

 give the residual norm coefficient $R_0=\sum_{j=0}^2r_j\nu_j$. For its radial derivative set 

$$

 R_r=\sum_{j=0}^2r_j\bigl[2j\sqrt{M_{2j-1}}+\sqrt{M_{2j+1}}\bigr],

$$

 where the first summand is zero at $j=0$. This follows equally by the unitary radial reduction of the three-dimensional Gaussian gradient; its integration-by-parts identity includes the reduced amplitude's factor $r$. For the clock derivative set 

$$
\begin{aligned}U_1&=k\mathcal N(H_1),\\
 U_2&=k_1\mathcal N(H_1)+k^2\mathcal N(H_2),\\
 U_3&=k_2\mathcal N(H_1)+3kk_1\mathcal N(H_2)+k^3\mathcal N(H_3),\\
 R_S&=p_3+3p_2U_1+3p_1U_2+U_3
       +2p_2C\nu_1+4p_1kC\mathcal N(zH_1)+3p_1C_2\nu_1\\
 &\quad+2C[k_1\mathcal N(zH_1)+k^2\mathcal N(zH_2)]
            +3kC_2\mathcal N(zH_1)+C_3\nu_1.
\end{aligned}
$$

 These are obtained by differentiating the complete gauged residual <a id="prep:residual"></a>


$$
\frac{R^g}{\hbar}=\frac{\hbar}{2M}
 [G_{SS}+2i\theta_SG_S+i\theta_{SS}G]
 +ia\phi[(f-r)A_r+(f'-1)A/2]+(Q-Q_c)G/\hbar.
 

$$

Equation (20).

 In particular, no derivative of a restored phase is added to this *gauged* residual.

Here are all coefficients needed to include its tails and the weak trap. Write $\omega_i=(\lambda L_i^2)^{-1}$, $q_2=m\omega_i^2/2$, $q_0=3\hbar\omega_i/2$, $q_{2S}=4a_0q_2$, $q_{0S}=2a_0q_0$, $r_c=0.201$, $c_1=5000$, and $\epsilon_{20}=10^{12}/7^{100}$. Set 

$$
\begin{aligned}Q_0&=q_2r_c^2+q_0,&Q_r&=2q_2r_c+c_1Q_0,\\
 Q_S&=q_{2S}r_c^2+q_{0S}+c_1Q_0,&
 Q_t&=q_2L_f^2+q_0,& Q_{tS}&=q_{2S}L_f^2+q_{0S}.
\end{aligned}
$$

 The complete residual rates are <a id="prep:source-rates"></a>


$$
\begin{aligned}d&=\hbar R_0/(2M)
 +(\lambda\omega_i^2L_f^2/2+3\omega_i/2+3a_0)\epsilon_{20},\\
 e_r&=\hbar^2R_r/(2ML_i)
 +[c_1Q_t+2q_2L_f+Q_t/L_i
       +\hbar a_0(3/0.2+7/L_i+2000)]\epsilon_{20},\\
 e_S&=\hbar^2R_S/(2M)
 +[Q_{tS}+Q_t(p_1+5a_0/2)
      +\hbar\{3(a_1+a_0p_1)+19a_0^2/2\}]\epsilon_{20}.
 
\end{aligned}
$$

Equation (21, 22, 23).

 The Gaussian tail recurrence $\int_{20}^\infty y^n e^{-y^2}dy
=20^{n-1}e^{-400}/2+(n-1)\int_{20}^\infty y^{n-2}e^{-y^2}dy/2$ proves the common tail norm used here; $e^2>7$ makes its stated bound rational.



<a id="section-B-2"></a>

### B.2 First moments and preparation current

<a id="prep:first"></a> In the gauge the velocity coefficients are $u_r=af$ and $u_S=v+\delta$, $\delta=ma'F/(2M)$. Put 

$$
\begin{aligned}d_r&=ma_1f_*/M,&d_S&=ma_2F_*/(2M),& u_{rS}&=a_1f_*,\\
 z_r&=Q_r+\tfrac\hbar2(a_0\,4000+ma_2f_*/M),\\
 z_S&=Q_S+\tfrac\hbar2(a_1+ma_3F_*/(2M)).
\end{aligned}
$$

 If $W_0=\hbar2^{35}/T_0$ and $W_1=\hbar(2^{52}/256+5\cdot2^{35})/(T_0L_i)$, the remote activation forces are bounded by $F_r=W_1+Q_r$, $F_S=25000(W_0+Q_0)+Q_S$. Let $P_j=\|p_j(\Psi^g-G)\|$ and $D=\|\Psi^g-G\|$. Differentiating the symmetrized drift gives <a id="prep:first-system"></a>


$$
\begin{aligned}D(t)&\le dt,\\
 P_r'&\le a_0P_r+d_rP_S+F_rn+e_r+z_rdt,\\
 P_S'&\le u_{rS}P_r+d_SP_S+F_Sn+e_S+z_Sdt,\\
 n'&\le g_0+P_S/(Mg_1),\\
 g_0&=\hbar[p_1+a_0\sqrt{3/2}]/(Mg_1). 
\end{aligned}
$$

Equation (24, 25, 26, 27, 28).

 The collar defining $n$ translates at $v+\|\delta\|_\infty$ on the right and $v-\|\delta\|_\infty$ on the left; its convective contribution is nonpositive. Both collars vanish on the initial stock. Their final full-one edges are respectively below $0.1035000001262$ and above $0.1004999998738$, so that they cover the remote activation and the left phase support respectively. Thus the force term $F_jn$ is valid throughout preparation, including the exact wave's tails.

For the sharper clock estimate take $\alpha=10^{-12}$ and 

$$

 s=e_r+e_S/K+\alpha g_0,\qquad c=z_r+z_S/K,\qquad E_*=(11/4)^{15}.

$$

 The three scaled row sums $a_0+Kd_r+F_r/\alpha$, $u_{rS}/K+d_S+F_S/(K\alpha)$ and $\alpha K/(Mg_1)$ are less than $141$. A positive supersolution gives <a id="prep:anisotropic"></a>


$$
\begin{aligned}B(t)&=e^{141t}(st+cdt^2/2),&
 P_r(t)&\le B(t),&P_S(t)&\le KB(t),\\
 B_T&=E_*(sT+cdT^2/2),&
 B_I&=E_*(sT^2/2+cdT^3/6),\\
 n_{1T}&=g_0T+KB_I/(Mg_1). 
\end{aligned}
$$

Equation (29, 30, 31).

 Using $e^{141T}<E_*$ is legitimate since $141T<15$ and $e<11/4$. These terminal majorants are increasing and apply at every earlier time.

For the smaller radial estimate and the preparation current retain also the mass-weighted system. Put $\ell=10^{-6}$, 

$$
\begin{aligned}e_0&=e_r/\sqrt m+e_S/\sqrt M,&
 c_0&=z_r/\sqrt m+z_S/\sqrt M,\\
 s_0&=e_0+\ell g_0,&
 Z_T&=E_*(s_0T+c_0dT^2/2),\\
 Z_I&=E_*(s_0T^2/2+c_0dT^3/6),&
 n_w&=g_0T+Z_I/(\sqrt M g_1).
\end{aligned}
$$

 Indeed the weighted momentum plus $\ell n$ has growth at most $141$: the drift row bound is $a_0+\sqrt{m/M}a_1f_*+d_S$, increased by $\ell/(\sqrt M g_1)$, and $(F_r/\sqrt m+F_S/\sqrt M)/\ell<141$. Consequently the ordinary radial error at the handoff is bounded by <a id="prep:old-handoff"></a>


$$
P_{r,o}=\sqrt m\,Z_T+ma_0f_*n_w,
 \qquad P_{S,o}=KB_T+ma_1F_*n_{1T}/2,
 \qquad D_o=dT. 

$$

Equation (32).

 The phase terms here are localized to the reflected collar; no phase is set to zero on an exact wave tail.

For the Gaussian rank let $k_r=6/(7L_i)$, $k_S=2a_0$, $c_r=k_r\sqrt{3/2}/L_i$, $c_S=k_S(p_1+a_0\sqrt{3/2})$. The exact material-rank identity and the bilinear current expansion give <a id="prep:old-current"></a>


$$
\begin{aligned}I_o&=(c_r/\lambda+\hbar c_S/M)dT^2/2
       +(k_r/\sqrt m+k_S/\sqrt M)Z_I,\\
 \beta&=mL_i^2(B_1B_2+a_0B_1^2)T/M
                   +Ta_0\,32000/7^{200}. 
\end{aligned}
$$

Equation (33, 34).

 The first term of $\beta$ bounds $K_S\delta$ pointwise; the second bounds the nonquadratic radial tail. The remaining current has absolute value before integration over any live coordinate. This proves $I_o<1.974548968\cdot10^{-19}$ and $\beta<2.638660\cdot10^{-13}$.



<a id="section-B-3"></a>

### B.3 Second spatial moments and the second collar

<a id="prep:hessian"></a> Here is an explicit construction of every second-order residual coefficient. Continue $H_j$ by $H_0=1$, $H_{j+1}=(z-3/2)H_j-2zH_j'$, and take absolute coefficients before adding independently bounded terms. The positive Gaussian clock polynomials are 

$$
\begin{aligned}A_0&=1,& A_1&=a_0|H_1|,\\
 A_2&=a_1|H_1|+a_0^2|H_2|,&
 A_3&=a_2|H_1|+3a_0a_1|H_2|+a_0^3|H_3|,\\
 A_4&=a_3|H_1|+(4a_0a_2+3a_1^2)|H_2|
                       +6a_0^2a_1|H_3|+a_0^4|H_4|.
\end{aligned}
$$

 Here $|P|$ means coefficientwise absolute value. To evaluate radial norms, form $P_{j,r}(y)=(\partial_y-y)^r y^{2j+1}$ and set 

$$

 \mathcal R_r(j;s)=L_i^{-r}
       \sum_e |[y^e]P_{j,r}|\sqrt{M_{e-1+s}},\qquad M_{-1}=2.

$$

 Only indices at least $-1$ occur. For a factor $F/L^2$ and $r\le2$ replace this by 

$$

 \mathcal R_r^F(j)=\sum_{l=0}^r\binom rl c_lL_i^{-l}
                         \mathcal R_{r-l}(j;2-l),
 \qquad(c_0,c_1,c_2)=(1,2,2).

$$

 This is the product rule using $F\le r^2$, $|F'|\le2r$, $|F''|\le2$. Define 

$$

 J_{n,r}=\sum_{j=0}^n\binom nj p_{n-j}
       \sum_l[z^l]A_j\,\mathcal R_r(l;0),

$$

 and $J_{n,r}^F$ by replacing $\mathcal R_r$ with $\mathcal R_r^F$. With $C_j^*=\lambda L_f^2a_j/2$ for $1\le j\le4$, the sources are 

$$
\begin{aligned}e_{rr}&=\frac{\hbar^3}{2M}
       (J_{2,2}+2C_1^*J_{1,2}^F+C_2^*J_{0,2}^F)+10^{-100},\\
 e_{rS}&=\frac{\hbar^3}{2M}
       (J_{3,1}+2C_1^*J_{2,1}^F+3C_2^*J_{1,1}^F+C_3^*J_{0,1}^F)
       +10^{-100},\\
 e_{SS}&=\frac{\hbar^3}{2M}
       (J_{4,0}+2C_1^*J_{3,0}^F+5C_2^*J_{2,0}^F
                           +4C_3^*J_{1,0}^F+C_4^*J_{0,0}^F)+10^{-100}.
\end{aligned}
$$

 For example the last formula differentiates $G_{SS}+2i\theta_SG_S+i\theta_{SS}G$ twice and retains coefficients $2,5,4,1$. The nonquadratic and trap tails after two derivatives have Gaussian degree at most seven and total frequency coefficient below $10^{30}$; their momentum contribution is less than $\hbar^2 10^{30}\epsilon_{20}<10^{-100}$ in each row. This can also be checked by the general product-rule construction below.

For clarity we spell out the second-force coefficients. Set $c_2=1.28\cdot10^8$, $q_{t1}=q_{2S}r_c^2+q_{0S}$, $q_{t2}=(4a_1+16a_0^2)q_2r_c^2+(2a_1+4a_0^2)q_0$. Then 

$$
\begin{aligned}Q_{rr}&=2q_2+4c_1q_2r_c+c_2Q_0,\\
 Q_{rS}&=c_1Q_r+2q_{2S}r_c+c_1q_{t1},\\
 Q_{SS}&=c_2Q_0+2c_1q_{t1}+q_{t2}.
\end{aligned}
$$

 Put $\gamma_1=25000$, $\gamma_2=(2520/64)/(0.0001)^2$, and 

$$
\begin{aligned}W_2&=\frac{\hbar}{T_0L_i^2}
 [2^{52}(1+(15/16)2^{17})+5\cdot2^{52}/128+10^5\cdot2^{35}],\\
 F_{rr}&=W_2+Q_{rr},\\
 F_{rS}&=\gamma_1(W_1+Q_r)+Q_{rS},\\
 F_{SS}&=\gamma_2(W_0+Q_0)+2\gamma_1Q_S+Q_{SS}.
\end{aligned}
$$

 Let $v_{jr}$ and $v_{jS}$ denote the component derivatives of $(af,ma'F/(2M))$. The second-derivative ceilings used below are 

$$

\begin{array}{c|ccc}
 &rr&rS&SS\\\hline
 u_r&a_0\,4000&a_1&a_2f_*\\
 \delta&ma_1/M&ma_2f_*/M&ma_3F_*/(2M)\\
 \operatorname{div}u&a_0\,10^7+ma_2/M&
 a_1\,4000+ma_3f_*/M&a_2+ma_4F_*/(2M)
\end{array}

$$

 Write $d^{\rm div}_r=a_0\,4000+ma_2f_*/M$ and $d^{\rm div}_S=a_1+ma_3F_*/(2M)$ for the first divergence ceilings. If $U_{jk},V_{jk},D_{jk}$ denote the three rows of this table, all scalar coefficients of the Hessian comparison are 

$$
\begin{aligned}e_2&=e_{rr}+e_{rS}/K+e_{SS}/K^2,\\
 c_B&=\hbar(U_{rr}+KV_{rr}+d^{\rm div}_r)+2Q_r\\
 &\quad+\{\hbar[U_{rS}+KV_{rS}+(Kd^{\rm div}_r+d^{\rm div}_S)/2]
                  +KQ_r+Q_S\}/K\\
 &\quad+\{\hbar[U_{SS}+KV_{SS}+Kd^{\rm div}_S]+2KQ_S\}/K^2,\\
 c_D&=\tfrac{\hbar^2}{2}(D_{rr}+D_{rS}/K+D_{SS}/K^2)
                  +\hbar(Q_{rr}+Q_{rS}/K+Q_{SS}/K^2),\\
 c_n&=\hbar(F_{rr}+F_{rS}/K+F_{SS}/K^2)
                  +2F_r\hbar/(g_2K)+4F_S\hbar/(g_2K^2),\\
 c_A&=2F_r+2F_S/K.
\end{aligned}
$$

 These follow directly by commuting two momenta through $\{u_j,p_j\}/2+Q_c+V_A$. For example the mixed commutator contributes $\hbar\sum_l\|u_{l,jk}\|P_l$ and $\hbar(\|\partial_j\operatorname{div}u\|P_k+
\|\partial_k\operatorname{div}u\|P_j)/2$; both occur above. The three homogeneous scaled row sums are below $282$.

With $Z_2=\max(\|p_r^2E^g\|,\|p_rp_SE^g\|/K,
\|p_S^2E^g\|/K^2)$, nested clock cutoffs give 

$$

 Z_2'\le282Z_2+c_A\sqrt{n_1}\sqrt{Z_2}
                   +e_2+c_BB+c_Ddt+c_nn_1.

$$

 Indeed a cutoff supported where the first collar is one satisfies $\|\chi p_rE^g\|\le\sqrt{n_1\|p_r^2E^g\|}$ and $\|\chi p_SE^g\|\le\sqrt{n_1\|p_S^2E^g\|}+2\hbar n_1/g_2$. These inequalities are integration by parts, not finite propagation. Let $b_n=K/(Mg_1)$, $\gamma=141$, and define <a id="prep:hessian-construction"></a>


$$
\begin{aligned}J_n&=\frac{\sqrt{g_0\pi}}{2\gamma^{3/2}}
       +\frac{\sqrt{b_ns/2}}{(\gamma/2)^2}
       +\frac{3\sqrt{\pi b_ncd/6}}{4(\gamma/2)^{5/2}},\\
 J_f&=\frac{e_2}{2\gamma}
       +c_B(s/\gamma^2+cd/\gamma^3)
       +\frac{c_Dd}{(2\gamma)^2}\\
 &\quad+c_n\{g_0/(2\gamma)^2+b_n(s/\gamma^3+cd/\gamma^4)\},\\
 Z_{2T}&=e^{2\gamma T}(c_AJ_n/2+\sqrt{J_f})^2,
 \qquad H_{SS}=K^2Z_{2T}. 
\end{aligned}
$$

 For the last display, extend positive integrals to infinity after using $n_1(t)\le g_0t+b_ne^{\gamma t}(st^2/2+cdt^3/6)$. The comparison follows by setting $y=e^{-\gamma t}\sqrt{Z_2}$: the sum of the separate positive supersolutions for $y'\le A+B/(2y)$ is a supersolution, with zero handled by regularization. The factor $e^{\gamma T}$ is enclosed by its 90-term Taylor sum and the remaining positive geometric tail with ratio $\gamma T/91$; its upper enclosure is squared when evaluating $e^{2\gamma T}$.

The second collar amplitude and the physical phase restoration are <a id="prep:second-collar"></a>


$$
\begin{aligned}n_{2T}&=\frac{T}{Mg_2}
           [\sqrt{n_{1T}H_{SS}}+2\hbar D_o/g_1],\\
 L_S&=\sqrt{n_{2T}H_{SS}}+2\hbar n_{1T}/g_2,
 &L_r&=\sqrt{n_{2T}H_{SS}/K^2},\\
 H_{SS}^{o}&=H_{SS}+2q_1L_S+(q_1^2+\hbar q_2^*)n_{2T},
 &q_1&=ma_1F_*/2,\quad q_2^*=ma_2F_*/2.
 
\end{aligned}
$$

Equation (35, 36, 37).

 Both reflected second collars fit before the relevant remote support: their final edges are below $0.103750000127$ and above $0.100249999873$. These same increasing majorants hold for all preceding times. In particular the ordinary derivatives on the writer support are bounded by $L_S,L_r$, because both the helper and the phase vanish there.



<a id="section-B-4"></a>

### B.4 Fourth spatial closure and its complete coefficient ledger

 <a id="prep:fourth"></a> Only ordinary spatial derivatives are used here. There is no assumption that the unmollified radial reference lies in the domain of a fourth power of its Hamiltonian. Use the commuting scaled momenta $D_r=p_r$, $D_S=p_S/K$, and $Z_j=\max_{a+b=j}\|D_r^aD_S^bE^g\|$.

The higher coefficient construction is finite. Define $q_j=b_p^{(j)}/b_p$. Starting with $P_0(q)=q_1$, form 

$$

 P_{j+1}=\sum_{l=1}^6(q_{l+1}-q_1q_l)\partial_{q_l}P_j,
 \qquad 0\le j<6.

$$

 Evaluate the absolute coefficients at 

$$

 (\bar q_1,\ldots,\bar q_7)
 =(140,24000,B_3,B_4,B_5,4B_5/10^{-5},300B_5/10^{-10})

$$

 to obtain $\bar a_j\ge|a^{(j)}|$. For $j\le4$ these agree with the bounds above. The last two entries use convolution of $b_0^{(5)}$ with the first and second derivative of the mollifier. Similarly set $p_5=4p_4/10^{-10}$, $p_6=300p_4/10^{-20}$. The normalized unit bump has derivative polynomials generated by <a id="prep:bump-recurrence"></a>


$$
U_0(x,u)=1,\qquad
 U_{j+1}=\partial_xU_j+2xu^2\partial_uU_j-2xu^2U_j,
 \qquad u=(1-x^2)^{-1}. 

$$

Equation (38).

 Its normalization is greater than $1/4$; hence its $j$th derivative supremum is bounded by $4\sum_{l,k}|[x^lu^k]U_j|\,k^k/(8/3)^k$, with the $k=0$ factor defined as one. This proves the quoted mollifier bounds (the first derivative also uses unimodality), as well as all tent jets below.

Let the positive partial Bell coefficients be 

$$

 \mathcal B_{0,0}=1,\qquad
 \mathcal B_{n,k}=\sum_{j=1}^{n-k+1}\binom{n-1}{j-1}
                   \bar a_{j-1}\mathcal B_{n-j,k-1}.

$$

 All unspecified entries are zero. For $n=0$ put $\mathcal A_0=1$; otherwise $\mathcal A_n=\sum_{k=1}^n\mathcal B_{n,k}|H_k|$. For $\varepsilon=0,1$, define the computable Gaussian norm majorant 

$$

 \mathcal J_{n,r}^{(\varepsilon)}=
 \sum_{j=0}^n\binom nj p_{n-j}
 \sum_l[z^l]\mathcal A_j\,L_i^{-r}
 \sum_e\left|[y^e](\partial_y-y)^r y^{2l+1+2\varepsilon}\right|
                                   \sqrt{M_{e-1}}.

$$

 For the higher-core calculation one may use $\pi\le22/7$ in $p_j$ and $\hbar\le\bar h=1.055\cdot10^{-34}$. The fourth physical source coefficient is bounded by <a id="prep:fourth-core"></a>


$$
\begin{aligned}s_4&=\frac{\bar h^5}{2M}\sum_{n=0}^4K^{-n}\Bigl[
 \mathcal J_{n+2,4-n}^{(0)}
 +\sum_{j=1}^{n+2}c_{n,j}\frac{\lambda L_f^2\bar a_j}{2}
                              \mathcal J_{n+2-j,4-n}^{(1)}\Bigr],\\
 c_{n,j}&=2\binom n{j-1}+\binom n{j-2},
 
\end{aligned}
$$

Equation (39, 40).

 where a binomial coefficient outside its range is zero. Direct rational arithmetic and outward square roots give $s_4<7.141\cdot10^{-127}$. The physical phase-square cancellation in the gauge is essential to this small coefficient.

We next give a complete way to check the nonquadratic tail bound, including higher derivatives of $F-r^2$. Let $b_j$ denote the bump derivative suprema just constructed and use 

$$

\begin{gathered}
 (f_0,f_1,f_2,f_3,f_4,f_5)
 =(0.201,1,4000,10^7,2b_2/0.001^3,2b_3/0.001^4),\\
 F_0=0.080802,\qquad F_j=2f_{j-1}\quad(1\le j\le6).
\end{gathered}

$$

 The disjoint jumps of the unsmoothed tent give these bounds. The scaled velocity derivative sum at order $j$ is explicitly <a id="prep:velocity-jets"></a>


$$
V_j=\max_{0\le k\le j}\frac{\bar a_k f_{j-k}}{K^k}
   +\max_{0\le k\le j}\frac{K\bar h\lambda\bar a_{k+1}F_{j-k}}
                                      {2MK^k}.
 

$$

Equation (41).

 It gives $V_2<560001$, $V_3<1.400001\cdot10^9$, $V_4<3.669751\cdot10^{13}$, $V_5<2.786850\cdot10^{18}$.

For an entirely algebraic tail check replace every Gaussian norm in $\mathcal J_{n,r}^{(0)}$ by the absolute sum of its polynomial coefficients; call the result $\mathcal C_{n,r}$. Keep powers of $y$ as formal factors. The derivatives of $F-r^2$ have coefficient ceilings $\Delta F=(2,2,4,2f_2,2f_3)$, and those of $f-r$ have $\Delta f=(2,2,f_2,f_3,f_4,f_5)$. The unit logistic cutoff has order-$j$ derivative bounded by 

$$

 t_j=8j!\sum_{k=1}^j\binom{j-1}{k-1}2^k
                 \frac{(j+k)^{j+k}}{(8/3)^{j+k}}\quad(1\le j\le4).

$$

 To prove it on $x\le1/2$, put $u=1/x$: the exponent is at most $-u+2$, its $j$th derivative at most $2j!u^{j+1}$, and apply the Bell product rule and $\max u^ne^{-u}\le n^n/(8/3)^n$. Symmetry handles the other half. Set $t_0=1$ and $\tau_j=t_j/0.001^j$. For $p=2,4$ define $J_p(0)=1$, $J_p(n)=\sum_{k=1}^n\mathcal B_{n,k}p^k$. With $A_2=4\cdot10^{-41}$ and $A_0=1.2\cdot10^{-48}$, put 

$$
\begin{aligned}q(n,r)&=A_2J_4(n)(L_f^2,2L_f,2)_r
                      +{\mathbf1}_{r=0}A_0J_2(n),\\
 \widehat q(n,r)&=q(n,r)+
   \sum_{c=0}^n\sum_{e=0}^r\binom nc\binom re
                      \tau_c\tau_e q(n-c,r-e).
\end{aligned}
$$

 The three-entry sequence is zero outside $r=0,1,2$. A bound for the sum of all fourth-derivative tail frequency coefficients is the following finite positive sum, with $r=4-n$: <a id="prep:tail-coefficient"></a>


$$
\begin{aligned}\mathcal T={}&\sum_{n=0}^4\sum_{a=0}^n\sum_{b=0}^{r}
 \binom na\binom rb\Bigl[
 \frac{1.425\cdot10^{-12}}{2M}\bar a_{a+1}\Delta F_b
                                      \mathcal C_{n-a+1,r-b}\\
 &+\frac{1.425\cdot10^{-12}}{4M}\bar a_{a+2}\Delta F_b
                                      \mathcal C_{n-a,r-b}
 +\bar a_a\Delta f_b\mathcal C_{n-a,r-b+1}\\
 &+\tfrac12\bar a_a\Delta f_{b+1}\mathcal C_{n-a,r-b}
 +10^{34}\widehat q(a,b)\mathcal C_{n-a,r-b}\Bigr]<10^{70}.
 
\end{aligned}
$$

Equation (42, 43, 44).

 This is simply the product rule applied respectively to the two phase terms, transport tail, and $Q-Q_c$ in [(20)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:residual). Taking absolute coefficients before forming $\mathcal C$ prevents cancellation between independently bounded clock jets. As a rough independent size check, $p_j\le10^{9j}$, $\bar a_j<10^3 10^{9j}$, and Gaussian mixed coefficients through order six are below $10^{12}10^{9j}$. The transport term has at most five derivative slots and fewer than $10^5$ product summands, giving $10^{3+3+12+45+5}=10^{68}$. In the phase term $\hbar\theta$ replaces the large phase coefficient by the physical mass: six derivative slots give at most $10^{-12+3+3+12+54+5}=10^{65}$. The pure $G_{SS}$ term is smaller. The explicit positive sum above also checks the weak potential term. No nonzero tail is discarded.

The degree is at most twelve. Integration by parts gives 

$$

 \|{\mathbf1}_{y\ge20}y^{12}A\|^2
 \le\frac{2\cdot20^{25}}{1-25/800}e^{-400}
 <10^{40}/7^{200}.

$$

 Thus the additional fourth physical source is $s_{\rm tail}=\bar h^4 10^{90}/7^{100}<10^{-130}$. The same finite product rule for the quiet potential gives, for total order $j\le4$, <a id="prep:quiet-high"></a>


$$
Q_j\le10^{-40}10^{9j}. 

$$

Equation (45).

 For an explicit verification use the preceding $J_p(n)$ and cutoffs, replace $(L_f^2,2L_f,2)$ by $(1,1,2)$ on the cutoff support, and evaluate $\sum_{a=0}^n\sum_{b=0}^r\binom na\binom rb
\tau_a\tau_b[A_2J_4(n-a)(1,1,2)_{r-b}
+{\mathbf1}_{r=b}A_0J_2(n-a)]$ for $n+r=j$.

For the remote potential define $W_j=\bar h\,w_j/(T_0L_i^j)$, where 

$$
\begin{aligned}w_0&=2^{35},\qquad w_1=2^{52}/256+5\cdot2^{35},\\
 w_2&=2^{52}(1+(15/16)2^{17})+5\cdot2^{52}/128+10^5\cdot2^{35},\\
 w_3&=2^{112},\qquad w_4=2^{160}.
\end{aligned}
$$

 Set 

$$
\begin{aligned}(\gamma_0,\ldots,\gamma_4)&=\left(1,25000,
 \frac{2520/64}{10^{-8}},
 \frac{7560/16+5040/64}{10^{-12}},
 \frac{1360800}{10^{-16}}\right),\\
 R_j&=\max_{0\le k\le j}K^{-k}
 \left[\gamma_kW_{j-k}+
       \sum_{l=0}^k\binom kl\gamma_lQ_{j-l}\right].
\end{aligned}
$$

 These bounds follow by differentiating the displayed capped radial potential and activation polynomial; the last two deliberately loose bounds require only its bounded fourth weak derivative. All remote supports lie at $S\ge0.104$.

Add two smooth analytic cutoffs of width $g=10^{-4}$, with final transition intervals $(0.103751,0.103851)$ and $(0.103851,0.103951)$. They fit between the second old collar and activation. Their first two derivative bounds are $5/g$ and $128/g^2$. Put $a_c=\bar h/(Kg)$. With $n$ the second-collar amplitude, integration by parts and interpolation give local derivative bounds <a id="prep:local-high"></a>


$$
\begin{aligned}N_1&\le\sqrt{nZ_2}+10a_cn,\\
 N_2&\le\sqrt n(\sqrt{Z_4}+18a_c\sqrt{Z_2}),\\
 N_3&\le\sqrt{N_2Z_4}+10a_cN_2. 
\end{aligned}
$$

Equation (46, 47, 48).

 For example the squared second-derivative norm is at most $nZ_4+20a_cn\sqrt{Z_2Z_4}+306a_c^2nZ_2$; its square root is bounded as displayed since $306<18^2$. The global interpolation $Z_3\le\sqrt{Z_2Z_4}$ moves one commuting derivative between the two factors in its squared norm. Odd extension removes the radial boundary term.

The useful time envelopes, with $Z_{1T}=B_T$, are 

$$
\begin{aligned}Z_1(t)&\le Z_{1T}e^{-\gamma(T-t)},&
 Z_2(t)&\le Z_{2T}e^{-2\gamma(T-t)},\\
 n(t)&\le A_nt^{3/2}e^{\gamma t}+B_nt^2e^{3\gamma t/2}+C_nt^2,\\
 A_n&=\sqrt{K^2Z_{2T}g_0}/(Mg_2e^{\gamma T}),\\
 B_n&=\sqrt{K^2Z_{2T}n_{1T}}/(Mg_2Te^{3\gamma T/2}),\\
 C_n&=2\bar h D_T/(Mg_2g_1T),\qquad D_T=3.006684\cdot10^{-11}.
\end{aligned}
$$

 Here $D_T$ is used only in the fourth-order majorant, not to replace the sharper handoff norm in the final probability accounting. Writing $Z=Z_4$, four commutations yield <a id="prep:fourth-system"></a>


$$
\begin{aligned}Z'&\le4\gamma Z+\alpha(t)Z^{3/4}+\beta(t)Z^{1/2}+f(t),\\
 \alpha&=4R_1n^{1/4},\\
 \beta&=4R_1[\sqrt{18a_c}\,n^{1/4}Z_2^{1/4}+10a_cn^{1/2}]
       +6\bar hR_2n^{1/2}+(8\bar hV_2+4Q_1)\sqrt{Z_2},\\
 f&=(720R_1a_c^2+108\bar hR_2a_c)\sqrt{nZ_2}
       +4\bar h^2R_3(\sqrt{nZ_2}+10a_cn)+\bar h^3R_4n\\
 &\quad+(7\bar h^2V_3+6\bar hQ_2)Z_2
       +(3\bar h^3V_4+4\bar h^2Q_3)Z_1
       +(\bar h^4V_5/2+\bar h^3Q_4)dt+s_4+s_{\rm tail}.
 
\end{aligned}
$$

Equation (49, 50, 51, 52, 53).

 The factors $8,7,3,1/2$ in the drift terms are the sum of the first-order drift and its divergence product-rule coefficients. Putting $y=e^{-\gamma t}Z^{1/4}$ and adding the separate positive supersolutions gives <a id="prep:fourth-solution"></a>


$$
Z_4(T)^{1/4}\le e^{\gamma T}
 \left[\tfrac14\int_0^T\alpha e^{-\gamma t}dt
 +\sqrt{\tfrac12\int_0^T\beta e^{-2\gamma t}dt}
 +\left(\int_0^Tf e^{-4\gamma t}dt\right)^{1/4}\right].
 

$$

Equation (54).

 This includes the nonlinear third-derivative coupling; it is not an exponential multiplying a terminal forcing value.

For completeness all integrals in this expression can be evaluated by one finite rule. For $0<p\le1$ use subadditivity on the three terms of $n(t)$; combine with $Z_2(t)^q$ and the integrating factor, and extend each positive integral to infinity. If its time power is $u\ge0$ and its decay is $\rho>0$, with $j=\lfloor u\rfloor$, use 

$$

 \int_0^\infty t^ue^{-\rho t}dt
 \le j!(j+1)^{u-j}/\rho^{u+1}.

$$

 This is Hölder interpolation of adjacent integer moments. All decay rates in [(54)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:fourth-solution) are positive. Integer roots are enclosed rationally; no numerical gamma function is needed. For a final far cutoff of width $0.01$ before $S=0.14145$, put <a id="prep:far-hessian"></a>


$$
P_4=K^4Z_4(T),\qquad
 L_{SS}=K^2\sqrt{n_{2T}}
 [\sqrt{Z_4(T)}+18\bar h\sqrt{Z_{2T}}/(K\cdot0.01)].
 

$$

Equation (55).

 The unshortened positive constructions define the values used in later interfaces; their shortened displays are $P_4<1.075567\cdot10^{-76}$ and $L_{SS}<2.534075\cdot10^{-57}$ uniformly through preparation.



<a id="section-B-5"></a>

### B.5 Original-stock transfer to the writer

<a id="prep:transfer"></a> Let $\Psi_o$ be the exact preparation without the writer, and $\Psi_n$ the enlarged exact wave, with their common initial state $\Psi_n(0)=\Psi_o(0)g_0$. Here $g_0(Z)=\pi^{-1/4}e^{-Z^2/2}$. Write $\Delta=\Psi_n-\Psi_og_0$. The ground oscillator energy is subtracted and the additional potential is $J=(\hbar/T_0)\Pi_1[C_w(s)-F_w(s)Z]$. Thus 

$$

 i\hbar\partial_t\Delta=H_n\Delta+J\Psi_og_0,\qquad\Delta(0)=0.

$$

 No comparison flow or initial law is substituted in this identity. The writer is supported on $S\ge0.14145$. Throughout preparation, the old helper and its bounded phase both vanish on this support. The source amplitudes and momentum norms are therefore bounded by $n_{2T},L_S,L_r,L_{SS}$ established above.

The following constants are exact rational majorants. Put $\mu=0.01$, $w=0.003$ and 

$$

 (b_0,b_1,b_2,b_3,b_4)=24\left(1,\frac{315}{128w},
 \frac{2520}{64w^2},\frac{7560/16+5040/64}{w^3},
 \frac{1360800}{w^4}\right).

$$

 In this subsection $b_j$ denotes a writer derivative bound, not the preparation dilation or bump derivative. Define 

$$
\begin{aligned}F_j&=b_j/\mu+\mu b_{j+2}\quad(0\le j\le2),\\
 C_0&=b_0^2/(2\mu)+\mu b_0b_2/2,\\
 C_1&=b_0b_1/\mu+\mu(b_1b_2+b_0b_3)/2,\\
 C_2&=(b_1^2+b_0b_2)/\mu
                  +\mu(b_2^2+2b_1b_3+b_0b_4)/2,\\
 c_0&=b_0+\mu b_1,& c_1&=b_1+\mu b_2.
\end{aligned}
$$

 These bound $F_w,C_w$ and their dimensionless derivatives. Hereafter $F_{\rm old}=8\cdot10^{-6}+10^{-17}$ and $F_{{\rm old},r}=10^{-6}$. These force ceilings follow by differentiating the displayed potential: the preparation clock force is bounded by 

$$

 ma_2(0.080802)/2+ma_0a_1(0.201)^2
       +m^2a_1a_2(0.080802)^2/(4M)<8\cdot10^{-6},

$$

 and its radial force by $ma_1(0.201)+ma_0^2(0.201)+m^2a_1^2(0.080802)(0.201)/(2M)$. Adding the quiet and activation derivatives gives the stated ceilings; their clock contribution is below $10^{-17}$. A second differentiation gives the conservative bound $F_{{\rm old},SS}\le1$: its preparation part is 

$$

 ma_3(0.080802)/2+m(a_1^2+a_0a_2)(0.201)^2
 +m^2(a_2^2+a_1a_3)(0.080802)^2/(4M),

$$

 with $Q_{SS}+\gamma_2(W_0+Q_0)+2\gamma_1q_{t1}$ added.

For concise exact formulas set $n_o=n_{2T}$ and <a id="prep:transfer-source"></a>


$$
\begin{aligned}d_\Delta&=(C_0+F_0/\sqrt2)n_o/T_0,&
 q_\Delta&=(C_0+\sqrt{3/2}F_0)n_o/T_0,\\
 r_S&=(C_0+F_0/\sqrt2)L_S/T_0
      +\hbar(C_1+F_1/\sqrt2)n_o/T_0^2,\\
 r_r&=(C_0+F_0/\sqrt2)L_r/T_0. 
\end{aligned}
$$

Equation (56, 57, 58).

 The exact oscillator identities $\|Zg_0\|=\|p_Zg_0\|=1/\sqrt2$ and $\|Z^2g_0\|^2=\|p_ZZg_0\|^2=3/4$ prove these coefficients. Unitary Duhamel and oscillator rotation in the direct sum of its two quadratures then give increasing bounds <a id="prep:transfer-bounds"></a>


$$
\begin{aligned}D_\Delta(t)&=d_\Delta t,\\
 Q_\Delta(t)&=q_\Delta t+F_0d_\Delta t^2/(2T_0),\\
 P_{\Delta,S}(t)&=r_St+F_{\rm old}d_\Delta t^2/2\\
 &\quad+\frac\hbar{T_0^2}
  [F_1(q_\Delta t^2/2+F_0d_\Delta t^3/(6T_0))
                     +C_1d_\Delta t^2/2],\\
 P_{\Delta,r}(t)&=r_rt+F_{{\rm old},r}d_\Delta t^2/2.
 
\end{aligned}
$$

Equation (59, 60, 61, 62, 63).

 Here $Q_\Delta$ bounds $(\|Z\Delta\|^2+\|p_Z\Delta\|^2)^{1/2}$, not an unbounded coordinate times a bare norm estimate. In the clock inequality the term $F_1Q_\Delta$ is retained explicitly.

Let $B=\partial_Z+Z$. Its exact equations have sources $-\Pi_1F_w\Psi_n$ and $-2\Pi_1F_wB\Psi_n$ for $B\Psi_n$ and $B^2\Psi_n$, respectively. Because $B$ annihilates the old product wave, integration gives <a id="prep:annihilator-handoff"></a>


$$
\begin{aligned}B_1(t)&=F_0(n_ot+d_\Delta t^2/2)/T_0,\\
 B_2(t)&=F_0^2(n_ot^2+d_\Delta t^3/3)/T_0^2,\\
 A_h&=B_1(T)+c_0[n_o+D_\Delta(T)],\\
 A_{2h}&=B_2(T)+2c_0B_1(T)+c_0^2[n_o+D_\Delta(T)].
 
\end{aligned}
$$

Equation (64, 65, 66, 67).

 The last quantity bounds the norm of the squared moving annihilator; it is not the square of its norm. These are operator identities on the full oscillator Gaussian domain, with no truncation of $Z$. For $f=B\Psi_n$, oscillator algebra gives $\|Zf\|^2+\|p_Zf\|^2=\|Bf\|^2+\|f\|^2$. Consequently, with integrals over $[0,T]$, 

$$
\begin{aligned}P_B={}&F_{\rm old}\int B_1
 +\frac\hbar{T_0^2}\left[F_1\int(B_2+B_1)+C_1\int B_1\right]\\
 &+\frac{F_0}{T_0}[L_ST+TP_{\Delta,S}(T)]
 +\frac{\hbar F_1}{T_0^2}(n_oT+d_\Delta T^2/2),\\
 U_h={}&[P_B+c_0(L_S+P_{\Delta,S}(T))
           +\hbar c_1(n_o+D_\Delta(T))/T_0]/\hbar.
\end{aligned}
$$

 This proves $\|\partial_S(A\Psi_n)(T)\|\le U_h$. All displayed integrals are polynomials; for example $\int B_1=F_0(n_oT^2/2+d_\Delta T^3/6)/T_0$ and $\int B_2=F_0^2(n_oT^3/3+d_\Delta T^4/12)/T_0^2$.

The exact symbolic entrance values used subsequently are <a id="prep:new-handoff"></a>


$$
\begin{aligned}D_h&=3.006683\cdot10^{-11}+D_\Delta(T),\\
 n_h&=n_{1T}+D_\Delta(T),\\
 P_h&=\hbar p_1+P_{S,o}+P_{\Delta,S}(T),\\
 P_{r,h}&=P_{r,o}+P_{\Delta,r}(T)+\epsilon_q,
 \qquad 0\le\epsilon_q<10^{-100},\\
 R_h&=1+Q_\Delta(T)<2. 
\end{aligned}
$$

Equation (68, 69, 70, 71, 72).

 Here $\epsilon_q$ is the quiet-reference comparison error in the radial momentum, as bounded in the activation appendix. In particular the larger norm $3.006684\cdot10^{-11}$ used in the fourth-moment estimate is *not* substituted for $D_h$.



<a id="section-B-6"></a>

### B.6 Localized repair of the transfer Hessian

 <a id="prep:transfer-hessian"></a> A coarse second-momentum bound is useful only to generate source-free left collars. We give it explicitly to avoid circular reuse of the improved result. Let $P=P_{\Delta,S}(T)$, $D=D_\Delta(T)$, $Q=Q_\Delta(T)$, and 

$$
\begin{aligned}r_{SQ}&=(C_0+\sqrt{3/2}F_0)L_S/T_0
             +\hbar(C_1+\sqrt{3/2}F_1)n_o/T_0^2,\\
 Q_S&=F_0PT/T_0+F_{\rm old}\int Q_\Delta
       +\frac\hbar{T_0^2}\left[C_1\int Q_\Delta
                  +F_1\int(B_2+2B_1+2D_\Delta)\right]+r_{SQ}T,\\
 r_{SS}(L)&=(C_0+F_0/\sqrt2)L/T_0
       +2\hbar(C_1+F_1/\sqrt2)L_S/T_0^2
       +\hbar^2(C_2+F_2/\sqrt2)n_o/T_0^3,\\
 W_\Delta&=2\hbar T(C_1P+F_1Q_S)/T_0^2
                    +\hbar^2T(C_2D+F_2Q)/T_0^3,\\
 H_c&=r_{SS}(H_{SS})T+2F_{\rm old}PT+\hbar DT+W_\Delta.
\end{aligned}
$$

 The quadrature estimate $\|Z^2\Delta\|$ and its companion are controlled by $B_2+2B_1+2D_\Delta$, so that $Q_S$ bounds the mixed weighted momentum without replacing $Z$ by a bounded operator. Differentiating the inhomogeneous equation twice proves $\|p_S^2\Delta\|\le H_c$; the coarse value is below $\hbar^2(2.486519\cdot10^{27})$.

Choose decreasing left cutoffs with transitions $[0.126,0.136]$ and $[0.116,0.126]$, width $g=0.01$. The writer forcing vanishes on both supports and every old clock force is contained in their full-one regions, because it vanishes for $S\ge0.106$. Positive drift favours exit from each left region. Continuity and one integration by parts give <a id="prep:delta-collars"></a>


$$
n_{\Delta1}=TP/(Mg),\qquad
 n_{\Delta2}=\frac{T}{Mg}
       [\sqrt{n_{\Delta1}H_c}+2\hbar D/g].
 

$$

Equation (73).

 For the new Hessian $H(t)=\|p_S^2\Delta(t)\|$ the old-force momentum is instead localized by $\|{\mathbf1}_{\rm oldforce}p_S\Delta\|
\le\sqrt{n_{\Delta2}H(t)}+2\hbar n_{\Delta1}/g$. Use the proved far old-wave Hessian $L_{SS}$ in the source. The differential inequality has the form $H\prime\le2\alpha\sqrt H+f$, where $\alpha=F_{\rm old}\sqrt{n_{\Delta2}}$. The function $[\alpha t+\sqrt{\int_0^t f}]^2$ is a supersolution, because its derivative is at least $2\alpha\sqrt H+f$ when evaluated at that function. Bounding the nonnegative source integral gives <a id="prep:improved-hessian"></a>


$$
H_\Delta=\left[F_{\rm old}T\sqrt{n_{\Delta2}}+
 \sqrt{r_{SS}(L_{SS})T+4F_{\rm old}\hbar n_{\Delta1}T/g
                         +\hbar n_{\Delta2}T+W_\Delta}\right]^2.
 

$$

Equation (74).

 It proves $\|p_S^2\Delta(T)\|\le H_\Delta$ and $H_\Delta/\hbar^2<1.828510\cdot10^{19}$. The coarse Hessian only generated the amplitude collar; it was not relabelled as the improved source or inserted into this nonlinear old-force term.



<a id="section-B-7"></a>

### B.7 Handoff enclosures and the preparation event

 <a id="prep:handoff-table"></a> The constructions above give the following outward decimal enclosures. Every endpoint in the table is a rational number. The unrounded expressions, not shortened displays, define the quantities when used in the final event sum.  

| Quantity | Strict upper bound |
| --- | --- |
| $D_o$ | $3.00668265254473406785\cdot10^{-11}$ |
| $P_{S,o}$ | $6.98319079275307899984\cdot10^{-32}$ |
| $n_{1T}$ | $6.24924697825783043607\cdot10^{-30}$ |
| $H_{SS}$ | $3.23800849281954087759\cdot10^{-49}$ |
| $H_{SS}^{o}$ | $3.24499145042629721024\cdot10^{-49}$ |
| $n_{2T}$ | $5.97036914776425754723\cdot10^{-38}$ |
| $P_4$ | $1.07556686771573853653\cdot10^{-76}$ |
| $L_{SS}$ | $2.53407404062459981525\cdot10^{-57}$ |
| $D_\Delta(T)$ | $2.767839\cdot10^{-30}$ |
| $P_{\Delta,S}(T)$ | $7.597256\cdot10^{-36}$ |
| $P_{\Delta,r}(T)$ | $2.08385966319223143790\cdot10^{-37}$ |
| $A_h$ | $5.04959232864420059458\cdot10^{-24}$ |
| $A_{2h}$ | $1.22824296520291159974\cdot10^{-17}$ |
| $U_h$ | $276122.969821611569892$ |
| $P_h$ | $3.20281666862106903351\cdot10^{-31}$ |
| $H_\Delta/\hbar^2$ | $1.82850947100693947781\cdot10^{19}$ |

 



<a id="section-B-8"></a>

### B.8 Preparation history under the enlarged exact flow

 <a id="prep:history"></a> The preparation rank $K(S,r)$ is independent of $Z$; hence its material derivative under the enlarged flow has no pointer-current term. Its explicit drift $\beta$ in [(34)](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:old-current) is unchanged. The error in its current must nevertheless be recomputed for that flow. In the bounded gauge the additional momentum ceilings are 

$$

 d_r^g=P_{\Delta,r}(T)+ma_0(0.201)D_\Delta(T),\qquad
 d_S^g=P_{\Delta,S}(T)+ma_1(0.080802)D_\Delta(T)/2.

$$

 The exact normalized wave stays in the derivative-error factor of the bilinear expansion, retaining the quadratic error terms. Consequently <a id="prep:extra-current"></a>


$$
\Delta I=T\left[(\hbar c_r/m+\hbar c_S/M)D_\Delta(T)
                           +(k_r/m)d_r^g+(k_S/M)d_S^g\right]
       <1.304454833\cdot10^{-22}. 

$$

Equation (75).

 Under the single original joint domination constant $C=270000/67499$, $N$ fixed radial cuts therefore have preparation failure probability bounded by <a id="prep:event"></a>


$$
E_p(N)=2CN\beta+2C\sqrt{2N(I_o+\Delta I)}
                        +C[D_o+D_\Delta(T)]^2.
 

$$

Equation (76).

 This follows by taking initial rank collars of width $\beta+\epsilon$, using Markov only on the unknown absolute current, and minimizing in $\epsilon$. The last term covers the terminal clock suffix where the helper vanishes. It is an estimate on the enlarged flow with its original initial law; closeness of two waves alone has not been used to assert history agreement. The initial conditional-CDF interface costs, separately, <a id="prep:cdf"></a>


$$
E_{\rm cdf}(N)=2CN[D_o+D_\Delta(T)]. 

$$

Equation (77).

 For the final cut family, including the exterior ray, use $N=256001$ in both formulas. Evaluating the finite expressions gives 

$$

 \begin{aligned}
 E_p(256001)&<0.000003084949592860634224432805,\\
 E_{\rm cdf}(256001)&<0.0000615780135255954031515710.
 \end{aligned}

$$

 The pointer remains part of the one jointly dominated auxiliary stock; no independent pointer cap, sector sample, equilibrium reset, or new law at handoff enters these estimates.
