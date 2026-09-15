# Appendix A: Supplied complete-input copies and global terminal repair

<!-- Fixed Version 2 source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\PP = \mathbb P
\QQ = \mathbb Q
\tr = \operatorname{tr}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\id = \operatorname{id}
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\pos = [#1]_+
\norm = \left\lVert#1\right\rVert
\proj = \ket{#1}\bra{#1}
\ii = \mathrm i
\pLaw = \operatorname{Law}
\pVar = \operatorname{Var}
\pSupp = \operatorname{supp}
\mcH = \mathcal H
\mcS = \mathcal S
\mcNcdf = \mathsf F
\mcNtail = \overline{\mathsf F}
\kinTV = d_{\mathrm{TV}}
\kinLaw = \operatorname{Law}
\kinVar = \operatorname{Var}
\accTV = d_{\mathrm{TV}}
\accLaw = \operatorname{Law}
\accVar = \operatorname{Var}
-->

<a id="copy:chapter"></a> 

This appendix preserves a stronger-resource construction from [[M11](/quantum-measurement/monograph/bibliography#bib-M11)]. It is not a local measurement of one unknown input with an inaccessible reference. The apparatus is supplied with independent copies of the entire pure input bank, including its internal reference entanglement, and the final repair can act jointly on that entire bank. Native probes estimate currents from those copies; a record-driven classical pump feeds the scalar pair chemistry; further finite tomography determines an approximate global terminal gate. These resources give a nonempty conditional construction of original Hamiltonian Bell paths and terminal daughters. 

The distinction matters mathematically. At fixed unknown pure input $\psi$, the initial source is <a id="copy:input"></a>


$$
P_\psi^{\mathrm{target}}\otimes P_\psi^{\otimes M},
 \qquad P_\psi=|\psi\rangle\langle\psi|.       

$$

Equation (A.1).

 The copies are supplied by an independent preparation conditional on the actual $\psi$; they are not cloned from the target. For an actual ensemble $\mu$, its complete preparation is $\int P_\psi^{\otimes(M+1)}\mu(d\psi)$, which is not determined by $\int P_\psi\mu(d\psi)$. Thus two single-copy-equivalent ensembles need not give the same statistics for this apparatus. No single-input affinity obstruction is evaded by silently deleting these resources. 



<a id="section-A-1"></a>

## A.1 Finite native current pilots

 

Fix a finite sector graph, finite physical horizon $T$ and bounded deterministic piecewise $C^1$ Hamiltonian programme $H(t)$ on the complete $d$-dimensional pure bank. For one orientation $e=(r,q)$ of each of its $E$ bonds, in units $\hbar=1$ put <a id="copy:current"></a>


$$
A_e(t)=\frac{P_qH(t)P_r-P_rH(t)P_q}{i},\quad
 J_e(t)=\langle\psi_t,A_e(t)\psi_t\rangle,
 \quad\|A_e(t)\|\le a,\quad i\dot\psi_t=H(t)\psi_t.        

$$

Equation (A.2).

 The programme makes each $J_e$ of bounded variation. Assume that the native ports $L_e=kA_e(t)$ are physically admitted on every pilot. Their actual law is the already supplied multichannel native law, with independent Wiener innovations for different pilots and ports: <a id="copy:pilots"></a>


$$
\begin{aligned}d\psi_j&=\left[-iH-\frac{k^2}{2}\sum_e(A_e-a_{je})^2\right]
                 \psi_jdt+k\sum_e(A_e-a_{je})\psi_jdW_{je},\\
 dY_{je}&=2ka_{je}dt+dW_{je},\qquad
 a_{je}=\langle\psi_j,A_e\psi_j\rangle.          
\end{aligned}
$$

Equation (A.3).

 All pilot states, classical records and used resources are retained. The target receives only the same coherent $H(t)$, not the diagnostic couplings. The controller has access to $Y$, not to the separate innovations $W$ or an unknown-wavefunction expectation wire. 

Define its causal finite-bandwidth estimator by <a id="copy:estimator"></a>


$$
Z_e=\frac1{2kM}\sum_jY_{je},\qquad
 dv_e=-\omega v_e dt+\omega dZ_e,\quad  v_e(0)=0,
 \qquad\widehat J_e=\operatorname{clip}_{[-a,a]}v_e.          

$$

Equation (A.4).

 The filters, their clocks and every controller coordinate belong to the complete classical bank. Their coefficients use known apparatus calibrations only. 



**Theorem A.1 (Integrated current estimation).**

<a id="copy:estimate"></a> For the independent native pilots, <a id="copy:estimate-bound"></a>


$$
\mathbb E\int_0^T|\widehat J_e-J_e|dt
 \le\frac{|J_e(0)|+\operatorname{Var}_{[0,T]}J_e}{\omega}
   +k^2Ea^3T^2+\frac{aT}{\sqrt M}
                   +T\sqrt{\frac{\omega}{8k^2M}}.           

$$

Equation (A.5).

 In particular, $k^2=M^{-1/4}$ and $\omega=M^{1/4}$ give $b_M:=\sum_e\mathbb E\int_0^T|\widehat J_e-J_e|dt
=O(M^{-1/4})$ for the fixed programme. 

 

**Proof.**

The mean pilot state obeys $\dot\rho_k=-i[H,\rho_k]+k^2\sum_e\mathcal D[A_e]\rho_k$, where $\mathcal D[A]\rho=A\rho A-\{A^2,\rho\}/2$. For a density matrix $\|\mathcal D[A]\rho\|_1\le2a^2$. Variation of constants in the interaction picture therefore gives $\|\rho_k(t)-P_{\psi_t}\|_1\le2k^2Ea^2t$ and a current bias at most $2k^2Ea^3t$. Independence and $|a_{je}|\le a$ give $\mathbb E|M^{-1}\sum_ja_{je}-\mathbb E a_{1e}|\le a/\sqrt M$. 

Let $K_\omega f(t)=\omega\int_0^te^{-\omega(t-s)}f(s)ds$. This convolution contracts $L^1([0,T])$. The filter is the sum of $K_\omega J_e$, the convolutions of the bias and empirical error, and the noise $U_e(t)=\omega(2k\sqrt M)^{-1}
\int_0^te^{-\omega(t-s)}dB_e(s)$, where $B_e=M^{-1/2}\sum_jW_{je}$ is Brownian. It need not be independent of the empirical mean. Integration against the variation measure of $J_e$, including the initial zero-filter transient and programme switches, gives $\int|K_\omega J_e-J_e|
\le(|J_e(0)|+\operatorname{Var}J_e)/\omega$. The integrated bias is at most $k^2Ea^3T^2$ and the empirical term at most $aT/\sqrt M$. Itô isometry gives $\mathbb E U_e(t)^2=\omega(1-e^{-2\omega t})/(8k^2M)$; Cauchy–Schwarz and integration give the last term. Clipping cannot increase distance to $J_e\in[-a,a]$. The stated scales balance all dominant errors at $O(M^{-1/4})$. 

□

 



<a id="section-A-2"></a>

## A.2 Record-driven pumping and a robust scalar-pair bridge

 

Supply a classical reservoir with $\dot{\widehat\Pi}_e=\widehat J_e$, debiting its signed account by the same amount. Two directional accounts of size $aT$ per edge suffice. This is a record-driven charge pump in the classical controller, not the forbidden passive classical expectation meter. Its equality with the coherent norm current is approximate, whereas its own charge accounting is exact. 

Export packets of charge $1/N$ at residual thresholds $\pm1/N$ and reset the residual after each export. The cumulative export satisfies <a id="copy:export"></a>


$$
A_{N,e}(t)=\int_0^t\widehat J_e(s)ds+e_{N,e}(t),
 \qquad\sup_t|e_{N,e}(t)|\le N^{-1}.            

$$

Equation (A.6).

 The total export count is at most $NEaT+O(E)$. Opposite packets cancel; a packet with an empty origin waits. Every eligible packet/carrier pair reacts at coefficient $\kappa_e\mu_N/N$ with fixed $0<\kappa_-\le\kappa_e\le\kappa_+$. This is precisely the scalar pair model of Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking), with its supplied Markov chemistry and complete participation. It does not use a separately prescribed normalized destination allocator from an earlier model. Fixed-tag division by its origin population is therefore the pair-counting identity [(4.3)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tagrate), not a new statistical controller instruction. 



**Theorem A.2 (Robust current forcing and complete tagged paths).**

 <a id="copy:robust"></a> Keep the fixed finite graph, bounded-variation target currents, coherent nodal bound of [(3.2)](/quantum-measurement/monograph/canonical-current-production-and-conservative-export#kin:nodal), initially empty queues and the scalar chemistry just specified. Suppose bounded predictable $\widehat J$ obeys $b_N=\sum_e\mathbb E\int|\widehat J_e-J_e|\to0$. Assume calibrated carrier populations $x_N(0)\to w(0)$ and compatible fixed-tag laws $\nu_N\to\nu\le Cw(0)$. If $\mu_N\to\infty$ and $\mu_N/N\to0$, directional flux errors, uniform population errors and total variation of the entire tagged path relative to the physical-time Hamiltonian Bell process tend to zero. No condition $\mu_Nb_N\to0$ is needed. 

 

**Proof.**

Only the additional forcing estimates in the already-proved scalar tracking and node localization arguments need modification. At fixed population cutoff $\delta>0$, use their companion service $\phi_t(u)=a_+(t)[u]_+-a_-(t)[-u]_+$ with divided-difference slopes in $[a_0,a_1]=[\kappa_-\delta,\kappa_+]$. Each escape consumes an export, so the variation bound on the physical population, and hence the coefficients, remains uniform because the exports are bounded. 

After removing the exporter error and reaction martingale, let $\widehat y$ solve $\dot{\widehat y}=\mu_N(\widehat J-\phi_t(\widehat y))$. For the same realized coefficient history let $\dot y_J=\mu_N(J-\phi_t(y_J))$, with matching zero starts. Scalar monotonicity gives pathwise 

$$

 \frac d{dt}|\widehat y-y_J|
 \le\mu_N|\widehat J-J|-\mu_Na_0|\widehat y-y_J|,
 \qquad
 \int_0^T|\widehat y-y_J|dt
                   \le a_0^{-1}\int_0^T|\widehat J-J|dt.

$$

 This is why forcing error is not multiplied by the fast scale in the integrated flux bound. The remaining exporter and martingale estimates of Theorem [4.1](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:tracking) use only the uniform bound $\|\widehat y\|_\infty\le a/a_0$ and coefficient variation, which still hold. Root tracking uses the bounded variation of the original $J$, not the noisy $\widehat J$. Consequently <a id="copy:robust-R"></a>


$$
R_{\delta,N}\le C_\delta\left(
     \mu_N^{-1}+\mu_N/N+\sqrt{\mu_N/N}+b_N\right).           

$$

Equation (A.7).

 

The exact population/queue balance acquires only the accumulated forcing term: 

$$

 x_N+Bz_N-w=x_N(0)-w(0)+B e_N+
                            B\int_0^t(\widehat J-J)ds.

$$

 Its expected uniform size is bounded by $\eta_N=\|x_N(0)-w(0)\|_\infty+C_B/N+C_Bb_N$. The low-population argument of [(4.11)](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:smallmass) therefore gives, with $n$ sectors and $L=EaT+O(N^{-1})$, 

$$

 D_{\delta,N}\le C_H\sqrt{T\left(n\delta T+
               \frac{L}{\kappa_-\mu_N\delta}+nT\eta_N\right)},
 \qquad\epsilon_{F,N}\le3R_{\delta,N}+2D_{\delta,N}.

$$

 Taking $N\to\infty$ and then $\delta\downarrow0$ proves directional flux convergence. The population martingale and conservation then give $\epsilon_{x,N}\to0$ exactly as in the baseline proof. The fixed-tag hazard is unchanged as a function of the complete reaction state. Thus Theorem [4.3](/quantum-measurement/monograph/binary-reactions-and-the-physical-time-bell-limit#kin:path) applies its same regular-level node localization, with the new $\epsilon_F,\epsilon_x$, to give full path-law convergence, including exact event times. Initial-law error costs $\operatorname{TV}(\nu_N,\nu)$. This transfer uses the actual scalar generator, not mean-current agreement alone. 

□

 

One simultaneous realization is <a id="copy:scaling"></a>


$$
M=N,\quad k^2=N^{-1/4},\quad\omega=N^{1/4},\quad\mu_N=N^{1/3}.
                                                        

$$

Equation (A.8).

 Then $R_{\delta,N}=O_\delta(N^{-1/4})$. Nodal localization gives convergence for each fixed admitted complete input; no uniform input-independent global path rate is asserted. The total diagnostic coupling action is bounded by $Ea^2TN^{3/4}$; packet and reaction archives have $O(NEaT)$ entries. An undersized bank must retain its exhaustion branch. The initial population calibration remains a resource premise: when all admissible inputs start in one known ready sector, $w(0)$ and the tag start are fixed without Born sampling. For general $w(0)$ this appendix assumes their preparation rather than deriving it from the pilots. Continuous native pointer coordinates and calibrated clocks remain declared ideal resources on each finite horizon; the entry count is not a bound on their numerical recording precision. 



<a id="section-A-3"></a>

## A.3 Retained pilots and a terminal continuation obstruction

 

Assume the pilot bank is autonomous: no queue, tag or reaction archive feeds back into it, and its initial state and stochastic primitives are independent of reaction primitives conditional on $\psi$. Conditioning on its whole actual output $Y$ then fixes a bounded forcing $\widehat J(Y)$ without changing the reaction clocks. Applying the preceding estimates with the conditional forcing error and integrating proves <a id="copy:joint"></a>


$$
\delta_{\mathrm{joint},N}:=
 \operatorname{TV}\left(\mathcal L(Q_N,Y\mid\psi),
       \mathcal L(Q^B_\psi)\otimes\mathcal L(Y\mid\psi)\right)
                       \longrightarrow0.                  

$$

Equation (A.9).

 The $L^1$ forcing estimate and concavity in the low-population bound justify the averaging. The same pilot-state conditional kernel, including its retained quantum resources, can be attached on both sides and preserves the bound in CQ trace distance. An ensemble mixture keeps the common latent $\psi$ in both factors; it is not generally the product of marginal mixture laws. 

The target, however, has remained exactly $P_{\psi_t}$ conditional on the pilot and tag history at fixed $\psi$. It has not acquired a selected sector daughter. With Born initialization, a subsequent sharp sector benchmark independent of that tag has repeat probability $\sum_qw_q^2$, rather than one. Postselecting agreement of two independent labels would produce weights proportional to $w_q^2$; for $w=(3/4,1/4)$ the rejection probability is $3/8$ and the accepted weights are $(9/10,1/10)$. Keeping those rejects defines a different experiment; deleting them is not a continuation repair. 

Nor does [(A.9)](/quantum-measurement/monograph/appendix-a-supplied-complete-input-copies-and-global-terminal-repair#copy:joint) automatically include microscopic queues, other carrier histories or cancellation archives. They are not functions of the autonomous $Y$ and no ideal common kernel for their returns has been proved. They require a stated no-return domain or a new benchmark-extension theorem. 



<a id="section-A-4"></a>

## A.4 Finite native tomography and the global repair

 

Now additionally assume that the entire target bank is controllable, including $S+R$ if they are internally entangled. After a disclosed embedding let $d=2^s$. Supply $(d^2-1)m$ further independent complete input copies, independent of production conditional on $\psi$. Allocate $m$ to each nonidentity Pauli matrix $W_\ell$. During a known calibration hold, use a finite native monitor $L=k_{\mathrm{cal}}W_\ell$ for time $\tau$. Its sign record has <a id="copy:tomography"></a>


$$
\mathbb P(s_{\ell j}=+1)=\frac{1+v\langle W_\ell\rangle_\psi}{2},
 \quad v=1-2\Phi(-2k_{\mathrm{cal}}\sqrt\tau)>0,
 \quad\widehat a_\ell=\frac1{mv}\sum_js_{\ell j}.             

$$

Equation (A.10).

 This follows from the actual native eigenrecord normals with means $\pm2k_{\mathrm{cal}}\tau$ and variance $\tau$. Thus calibration is finite and its visibility is corrected, rather than replaced by an exact Born projective measurement. It still uses the native statistical primitive. 



**Lemma A.3 (Pure-input estimation with finite records).**

 <a id="copy:tomography-error"></a> Set $\widehat\rho=d^{-1}(I+\sum_\ell\widehat a_\ell W_\ell)$ and choose a top eigenvector $u$ by a fixed measurable tie rule. Then, with $e=\min_\alpha\|u-e^{i\alpha}\psi\|$, <a id="copy:tomo-bound"></a>


$$
\mathbb E\|\widehat\rho-P_\psi\|_F^2\le\frac d{mv^2},
 \quad\|P_u-P_\psi\|_F\le2\|\widehat\rho-P_\psi\|_F,
 \quad\mathbb E e\le2\sqrt{\frac d{mv^2}}.                  

$$

Equation (A.11).

 

 

**Proof.**

Each visibility-corrected estimator is unbiased and has variance at most $1/(mv^2)$. Pauli orthogonality gives mean squared Frobenius error at most $(d^2-1)/(dmv^2)\le d/(mv^2)$. A top eigenvector minimizes $\|\widehat\rho-P\|_F$ over pure projectors, even when $\widehat\rho$ is not positive. Its triangle inequality therefore gives the middle claim. For unit vectors with phase aligned, $e^2=2(1-|\langle u,\psi\rangle|)$ and $\|P_u-P_\psi\|_F^2=2(1-|\langle u,\psi\rangle|^2)\ge e^2$. Cauchy–Schwarz proves the last bound. Propagating $u$ by the known unitary programme preserves this phase distance at $T$. 

□

 

For terminal tag $q$, define $b_q=\|P_qu_T\|^2$. If $0<b_q<1$, set <a id="copy:repair-gate"></a>


$$
\begin{aligned}v_q&=P_qu_T/\sqrt{b_q},&
 z_q&=(v_q-\sqrt{b_q}u_T)/\sqrt{1-b_q},\\
 K_q&=i(|z_q\rangle\langle u_T|-|u_T\rangle\langle z_q|),&
 V_q&=e^{-i\theta_qK_q},\quad\theta_q=\arccos\sqrt{b_q}.
                                                        
\end{aligned}
$$

Equation (A.12).

 $u_T,z_q$ are orthonormal and direct exponentiation gives $V_qu_T=v_q$. Use the identity at $b_q=1$ and also as a declared fallback at $b_q=0$; no run is postselected away. The construction is phase invariant. An admitted physical implementation has Hamiltonian $H_q=\theta_qK_q/\tau_{\mathrm{fb}}$ of norm at most $\pi/(2\tau_{\mathrm{fb}})$, or a finite global compiler with uniform operator error $u_{\mathrm{impl}}$. Its coefficients depend only on actual tomography records and the terminal tag. The gates must respect any additional protected charges; their universal global admission is a new resource assumption. 



**Theorem A.4 (Bell path and globally repaired terminal daughter).**

 <a id="copy:terminal"></a> Assume the stated complete-copy resources, autonomous pilots, Born-compatible tag initialization and global controls. For $w_q(T)>0$ put $\phi_q=P_q\psi_T/\sqrt{w_q(T)}$. The actual path and repaired target differ from a Bell path with terminal target $P_{\phi_{Q_T}}$ by CQ trace distance at most <a id="copy:terminal-bound"></a>


$$
\delta_{\mathrm{path},N}+6\sqrt{\frac d{mv^2}}+
                                               u_{\mathrm{impl}}.         

$$

Equation (A.13).

 The independent tomography records and conditional states of used tomography specimens may be retained on both sides. Including the production pilots and their conditional quantum bank replaces $\delta_{\mathrm{path},N}$ by $\delta_{\mathrm{joint},N}$. 

 

**Proof.**

Phase-align $u_T,\psi_T$ for analysis and put $e_q=\|P_q(u_T-\psi_T)\|$. For $b_q>0$, the normalized-projection inequality and unitarity give 

$$

 D(P_{V_q\psi_T},P_{\phi_q})
       \le\min\{1,e+2e_q/\sqrt{w_q}\}.

$$

 Indeed $V_qu_T=v_q$, so the first vector difference is at most $e$; adding and subtracting $P_qu_T/\sqrt{w_q}$ bounds the two normalized projections by $2e_q/\sqrt{w_q}$. At $b_q=0$, $e_q=\sqrt{w_q}$, so the same bound covers the fallback. Orthogonality gives $\sum_qe_q^2=e^2$ and hence 

$$

 \sum_qw_q D(P_{V_q\psi_T},P_{\phi_q})
       \le e+2\sum_q\sqrt{w_q}e_q\le3e.

$$

 Zero weights contribute nothing; no minimum-population cutoff is used. 

First replace the actual path by its Bell comparator while retaining the independent tomography record and the same controlled gates. This costs $\delta_{\mathrm{path},N}$. Bell equivariance gives the terminal weights $w_q$, so the preceding weighted bound costs at most $3\mathbb E e\le6\sqrt{d/(mv^2)}$. An operator implementation error costs at most $u_{\mathrm{impl}}$ in state trace distance. Independent tomography specimen kernels are identical on both sides and preserve these bounds. Use [(A.9)](/quantum-measurement/monograph/appendix-a-supplied-complete-input-copies-and-global-terminal-repair#copy:joint) for the stronger comparison retaining autonomous production pilots. 

□

 

With $m=N$, fixed finite $v>0$, $u_{\mathrm{impl}}\to0$ and [(A.8)](/quantum-measurement/monograph/appendix-a-supplied-complete-input-copies-and-global-terminal-repair#copy:scaling), all errors vanish. The tomography stock adds $(d^2-1)N$ complete copies and a terminal error $O(N^{-1/2})$ at fixed $d$. Common subsequent admitted operations contract the unconditioned CQ bound. Rare conditional branches still require inverse-probability control. The benchmark has a terminal daughter; it does not collapse the target after each intermediate tagged jump. The programme before repair is deterministic. A feedback-dependent Bell theorem would need its own conditional-current and nodal arguments, not just preallocated copy banks. 



<a id="section-A-5"></a>

## A.5 Why the resource promise cannot be hidden

 

For a Bell-pair target and a tag generated independently of that target at fixed complete $\psi$, any tag-selected trace-preserving operation on $S$ alone leaves the conditional $R$ marginal $I/2$. A desired selected $P_q^S$ daughter instead has $R$ marginal $|q\rangle\langle q|$, at trace distance $1/2$. Thus the global gates above generally cannot be relabeled as local aperture controls. Copies of a reduced $S$ state do not supply the promised copies of its complete entangled bank. A further exterior reference entangled with the allegedly pure complete bank is outside the preparation promise. 

The resulting implication is consequently precise: supplied complete pure copies and an admitted native diagnostic give integrated current estimation; a record-driven conservative pump and scalar Markov pair chemistry give the Hamiltonian Bell tagged-path limit; further finite native tomography and global terminal control approximate its selected daughter. Statistical native calibration, pair-reaction completeness, initial tag/population preparation and the stated archive-return domain remain commitments of this stronger-resource construction. It does not meet the main one-unknown-input, inaccessible-reference objective by itself. The later pilot completion meets that objective with a different material inventory, without using the copies or global reference control assumed here.
