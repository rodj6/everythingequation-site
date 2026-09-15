# Chapter 23: Energy-gap protection of complete source transport

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

<a id="prot:gapchapter"></a> 

Exact neutrality of an aperture is stronger than conservation of its readiness charge. A charge-preserving disturbance can rotate an unknown carried state or write information into a returning memory. The construction here replaces exact neutrality of a specified coherent disturbance class by a finite energy penalty and a derived error bound [[M17](/quantum-measurement/monograph/bibliography#bib-M17)]. It does not derive the actualization interface. Its antecedents are Hamiltonian error suppression with encoded sectors and retained environments [[ML](/quantum-measurement/monograph/bibliography#bib-MarvianLidar)]; the contribution needed in this programme is a complete-source estimate with explicit operational boundaries. 

Set $\hbar=1$ in this part. Operator norms always refer to the entire active bank. For normalized states write $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$. An inaccessible reference is unrestricted and has no interaction of its own. Actual classical preparation labels and control keys are conditioned on, not averaged away to conceal their influence. 



<a id="section-23-1"></a>

## 23.1 Earlier algebraic protection and its statistical premise

 <a id="prot:ancestral"></a> 

The precursor ownership theorem [[M04](/quantum-measurement/monograph/bibliography#bib-M04)] protects event response by a different mechanism: conservation of noncommuting charges in an already positive marked source generator. It belongs beside the coherent protection construction because the assumptions and conclusions differ. 

Let a finite provenance factor carry an irreducible spin-$j$ triple $S_k$, so $\sum_{k=1}^3S_k^2=j(j+1)I$. At fixed classical operational coordinates, assume a complete Heisenberg generator 

$$

 \mathcal L^*A=i[H_0+H_I,A]
 +\sum_\alpha\left(L_\alpha^\dagger A L_\alpha
                  -\tfrac12\{L_\alpha^\dagger L_\alpha,A\}\right).

$$

 The sum includes successful, failed, hidden, and unread event channels. Classical source transitions can be included when the same logical charges are identified in their incoming/outgoing sectors. $H_0$ is the specified incidence-off baseline, not a term fitted afterward to cancel disturbance. Impose the new charge-balance equations <a id="prot:chargeward"></a>


$$
\mathcal L^*S_k=i[H_0,S_k],\qquad k=1,2,3.
 

$$

Equation (23.1).

 The positive marked-generator representation is an explicit statistical input here. This theorem cannot be used to derive that representation from the charge equations. 



**Theorem 23.1 (Noncommuting charge balance constrains every marked channel).**

 <a id="prot:casimir"></a> Under these assumptions, $[L_\alpha,S_k]=[H_I,S_k]=0$ for every channel and charge. Hence $L_\alpha=\ell_\alpha I$ and $H_I=h_I I$ on the irreducible provenance factor. With an explicit additional operational Hilbert factor, the conclusion is instead membership in its commutant: $L_\alpha=I\otimes B_\alpha$. 

 

**Proof.**

For a self-adjoint charge define 

$$

 \mathfrak D(S)=\mathcal L^*(S^2)-\mathcal L^*(S)S-S\mathcal L^*(S).

$$

 Expanding each dissipator and canceling the Hamiltonian derivation gives 

$$

 \mathfrak D(S_k)=\sum_\alpha[L_\alpha,S_k]^\dagger[L_\alpha,S_k]\succeq0.

$$

 Unitality, the scalar Casimir and [(23.1)](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:chargeward) imply 

$$

 \sum_k\mathfrak D(S_k)
 =\mathcal L^*(j(j+1)I)-i[H_0,\sum_kS_k^2]=0.

$$

 Every positive summand is therefore zero. Each channel commutes with each charge; its dissipator then vanishes on the charges and the balance equation forces $[H_I,S_k]=0$. Irreducibility gives the stated commutant by Schur's lemma. 

□

 

The theorem excludes more than unequal event intensities: $L=\sqrt b\,\sigma_z$ has scalar event effect $bI$ but dissipates transverse spin and violates [(23.1)](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:chargeward). Conversely an unprotected multiplicity register $Z$ allows $L=I_{\rm prov}\otimes\operatorname{diag}(\sqrt{b_0},\sqrt{b_1})_Z$ with unequal rates while conserving every provenance charge. Protecting only total spin or a proper subsystem therefore does not establish complete carrier neutrality. 

Physical archive writing requires transported charges. Let $U_m$ be a fixed reversible append on a finite allocated bank and pointer, chosen before event rates. A concrete append increments pointer $p$ modulo capacity $K$ and adds the nonzero mark code $\eta(m)$ modulo the cell alphabet in the addressed cell. From a blank bank it preserves previous entries for at most $K$ writes. For arbitrary raw jumps $L_m$, put $R_m=U_m^\dagger L_m$. The transported balance law is 

$$

 i[H-H_0,S]+\sum_m\left[
 L_m^\dagger U_m S U_m^\dagger L_m
             -\tfrac12\{L_m^\dagger L_m,S\}\right]=0.

$$

 It is exactly [(23.1)](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:chargeward) for the corrected operators $R_m$. Applying Theorem [23.1](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:casimir) to a complete set of primitive bank factors yields 

$$

 R_m=I_{\rm bank}\otimes B_m,\qquad
 L_m=(U_m\otimes I)(I_{\rm bank}\otimes B_m),
 \qquad L_m^\dagger L_m=I_{\rm bank}\otimes B_m^\dagger B_m.

$$

 This is conservation through a supplied archive transport, not conservation of the bare written charge. The append cannot be chosen afterward to absorb an arbitrary susceptibility. With classical operational coordinates, common scalar effects give equality of successive event and null laws independently of protected bank contents, by induction over matching full histories. With an active quantum operational factor, conditioning can still steer a correlated protected state; effect factorization is not a claim of product continuation. 

There is also a quantitative version. Let $E_k=\mathcal L^*S_k-i[H_0,S_k]$ and 

$$

 G=\sum_{k,\alpha}[L_\alpha,S_k]^\dagger[L_\alpha,S_k]
   =-\sum_k\{S_k,E_k\},\qquad g=\|G\|.

$$

 The equality follows from the same Casimir calculation without setting $E_k$ to zero. The nonnegative $G$ obeys $g\le2\sum_k\|S_k\|\|E_k\|$. Stack the channels into $V\psi=(L_\alpha\psi)_\alpha$. For a unit vector $n$, the column commutator with $n\cdot S$ has norm at most $\sqrt g$. Duhamel for $U=e^{i\theta n\cdot S}$ therefore gives 

$$

 \|(I_{\rm marks}\otimes U)^\dagger VU-V\|\le|\theta|\sqrt g.

$$

 Every spin conjugation has a representative rotation of angle at most $\pi$. Haar averaging gives a scalar column $V_0=(c_\alpha I)_\alpha$ satisfying <a id="prot:roothazard"></a>


$$
\|V-V_0\|\le\pi\sqrt g,
 \qquad |\sqrt{\lambda_i(\rho)}-\sqrt{\gamma_i}|\le\pi\sqrt g,
 \quad\gamma_i=\sum_{\alpha\in i}|c_\alpha|^2.
 

$$

Equation (23.2).

 The rate inequality is reverse triangle inequality applied to $V_i\rho^{1/2}$ in Hilbert–Schmidt norm, so arbitrary passive references are included. For $m$ separately protected primitive factors the same argument gives $\pi\sqrt{m g_{\rm tot}}$; no dimension-free constant for a growing bank is asserted. 

To connect such bounds to actual finite exposure, define along a common stopped history 

$$

 \chi=\mathbb E\int\sum_i(\sqrt{\lambda_i}-\sqrt{\gamma_i})^2dt,
 \qquad A_0=\mathbb E\int\sum_i\gamma_i dt.

$$

 The identity $|a-b|\le2\sqrt b|\sqrt a-\sqrt b|+|\sqrt a-\sqrt b|^2$ and Cauchy–Schwarz give <a id="prot:exposure"></a>


$$
\mathbb E\int\sum_i|\lambda_i-\gamma_i|dt
                  \le2\sqrt{A_0\chi}+\chi.
 

$$

Equation (23.3).

 When both complete marked processes admit a common Poisson coupling on that history domain, the right side bounds unmatched-event probability before the stated stop; cutoff and preparation errors are added separately. Mean bulk neutrality alone does not supply this exposure estimate. 

The exact and approximate charge results are conditional statistical protection. They do not fix the common scalar rate, derive primitive Markov chemistry, forbid an unrepresented stress register, or establish universal admission of the positive source-instrument class. The following Hamiltonian gap construction is different: it derives coherent suppression without using any event probability law in its proof. 



<a id="section-23-2"></a>

## 23.2 A nonempty encoding and nuisance class

 

Two logical qubits $L$, possibly entangled with an inaccessible reference $R$ and old memory $E$, are encoded into four physical qubits. Define <a id="prot:code"></a>


$$
S_X=X_1X_2X_3X_4,\qquad S_Z=Z_1Z_2Z_3Z_4,
 \qquad P=\tfrac14(I+S_X)(I+S_Z),\quad Q=I-P.
 

$$

Equation (23.4).

 An isometry is <a id="prot:encoder"></a>


$$
C|a,b\rangle=\frac{|0,a,b,a\oplus b\rangle+
 |1,1\oplus a,1\oplus b,1\oplus a\oplus b\rangle}{\sqrt2}.
 

$$

Equation (23.5).

 Starting from $|0,a,b,0\rangle$, it is implemented by CNOTs $2\to4$, $3\to4$, a Hadamard on 1, and CNOTs $1\to2,3,4$. The inverse is a full unitary decoder; leakage becomes logical/syndrome amplitudes rather than being projected away. The two ready ancillas are physical independent supplies. 

The protecting Hamiltonian and nuisance class are <a id="prot:model"></a>


$$
\begin{aligned}H_{\rm pen}&=\tfrac\Delta2(I-S_X)+\tfrac\Delta2(I-S_Z),\\
 H_\Delta&=H_{\rm pen}+H_0+V,\qquad
 [H_0,P]=0,\quad\|H_0\|\le b,\\
 V&=\sum_{i=1}^4\sum_{\alpha=x,y,z}
               \sigma_i^\alpha\otimes B_{i\alpha},
 \qquad B_{i\alpha}=B_{i\alpha}^\dagger,\quad\|V\|\le v.
 
\end{aligned}
$$

Equation (23.6, 23.7, 23.8).

 All operators are bounded and stationary on the exposure interval. The $B_{i\alpha}$ may act jointly on old memories, fresh archives, controller variables and live path modes, and need not commute. The bound is on their sum, not merely on each coefficient. A classical retained key may select different such generators, provided the bound is uniform in that key. The penalty has norm $2\Delta$ and complementary gap $\Delta$. 

Every nonidentity one-site Pauli anticommutes with at least one stabilizer. If $S\sigma=-\sigma S$ and $SP=P$, then 

$$

 P\sigma P=PS\sigma P=-P\sigma SP=-P\sigma P=0.

$$

 Consequently <a id="prot:compressionzero"></a>


$$
PVP=0.
 

$$

Equation (23.9).

 The disturbing operators have not been assumed to commute with the code. They can drive transitions out of it. The code removes their first-order logical compression by an explicit algebraic identity. 

The theorem below also applies to an infinite-dimensional retained bank when the relevant operators are bounded. Finite duration, finite expected energy, or a finite number of observed records does not imply these bounds. An unbounded reservoir requires a separate domain and energy-control theorem. 



<a id="section-23-3"></a>

## 23.3 The complete finite-gap estimate

 



**Theorem 23.2 (Complete propagator protection).**

 <a id="prot:gap"></a> Let $H_{\rm pen}P=0$, $H_{\rm pen}\ge\Delta Q$, $[H_0,P]=0$, $PVP=0$, and let all terms be bounded self-adjoint with $\|H_0\|\le b$, $\|V\|\le v$. For $\delta=\Delta-2b-v>0$, set $U_\Delta(t)=e^{-iH_\Delta t}$ and $U_0(t)=e^{-iH_0t}$. Then for every $t\ge0$, <a id="prot:gapbound"></a>


$$
\|(U_\Delta(t)-U_0(t))P\|
 \le e_\Delta(t):=\min\left\{2,\frac{2v+tv^2}{\delta}\right\}.
 

$$

Equation (23.10).

 The estimate is unchanged after tensoring any inaccessible reference. It controls all coherent output memories, not only the carried marginal. 

 

**Proof.**

Block the complete Hamiltonian relative to $P,Q$: 

$$

 H_\Delta=H_d+W,
 \qquad H_d=\begin{pmatrix}A&0\\0&D\end{pmatrix},
 \qquad W=\begin{pmatrix}0&B^\dagger\\B&0\end{pmatrix}.

$$

 Here $A=PH_0P$, $B=QVP$, $D=QH_\Delta Q$, and $D\ge(\Delta-b-v)Q=(b+\delta)Q$, while $A\le bP$. The norm-convergent integral 

$$

 X=\int_0^\infty e^{-rD}Be^{rA}dr

$$

 satisfies $DX-XA=B$ and $\|X\|\le v/\delta$. To check the identity, differentiate $e^{-rD}Be^{rA}$ and integrate its vanishing boundary term. Define 

$$

 S=\begin{pmatrix}0&-X^\dagger\\X&0\end{pmatrix}.

$$

 Then $S^\dagger=-S$, $\|S\|=\|X\|$, and $[S,H_d]=-W$. With $f(u)=e^{uS}We^{-uS}$, 

$$
\begin{aligned}e^SH_\Delta e^{-S}
 &=H_d+f(1)-\int_0^1f(u)du\ =H_d+R,\\
 R&=\int_0^1u e^{uS}[S,W]e^{-uS}du.
\end{aligned}
$$

 Since the conjugations are unitary, 

$$

 \|R\|\le\tfrac12\|[S,W]\|\le v^2/\delta,
 \qquad\|e^{\pm S}-I\|\le\|S\|\le v/\delta.

$$

 Duhamel applied to $H_d+R$ and $H_d$, followed by the two changes of frame, gives 

$$

 \|e^{-S}e^{-i(H_d+R)t}e^S-e^{-iH_dt}\|
 \le2v/\delta+tv^2/\delta.

$$

 On $P$ the last unperturbed propagator equals $U_0(t)$. Two unitaries differ by at most two, completing [(23.10)](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:gapbound). Tensoring an identity preserves each operator norm; purification extends the associated trace-distance estimate to mixed complete inputs. 

□

 

For a pure complete input, output trace distance is at most $\min\{1,e_\Delta(t)\}$. This improves the ordinary $O(vt)$ bound to $O(v/\Delta+tv^2/\Delta)$ at fixed $b,v$. A useful regime is fixed finite transport time $T$ with increasing finite $\Delta$, or simultaneous scaling $v/\Delta\to0$ and $Tv^2/\Delta\to0$. The theorem is neither an all-time statement nor an assertion that the penalty is free. 



<a id="section-23-4"></a>

## 23.4 When the new archive is input independent

 

The operator theorem allows general code-preserving $H_0$; it does not guarantee archive neutrality for every such $H_0$. For literal faithful transport choose <a id="prot:split"></a>


$$
H_0=I_{\rm phys}\otimes(H_E\otimes I_F+I_E\otimes H_F)
 

$$

Equation (23.11).

 and prepare an arbitrary old $\Psi_{LER}$ with an independent fresh $a_0\in F$. The ideal output is 

$$

 (C\otimes I)(I_L\otimes e^{-iH_Et}\otimes I_R)\Psi_{LER}
                       \otimes e^{-iH_Ft}a_0.

$$

 Thus the old bank follows its stated free evolution and the new archive has an input-independent state. The nuisance may couple $E,F$; Theorem [23.2](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:gap) bounds the resulting deviation on their complete joint state. In particular two different carried inputs produce fresh-archive marginals at distance at most $2e_\Delta(t)$, by comparison with the common ideal archive. A later common coherent return unitary preserves the complete error. 

The split premise is necessary. If a scalar intended interaction CNOTs a correlated old $E$ into new $F$, a Bell input on $L,E$ produces an informative new archive although that interaction is the identity on the physical code. A scalar old/new coupling defect of norm $\eta$ adds at most $\eta T$ by Duhamel; increasing $\Delta$ does not improve it. Preparation defects likewise require a complete-state bound. A correct new marginal does not establish independence from the source or the actual past. 

A charge-preserving scalar valve can remain responsive: 

$$

 H_{\rm valve}=\kappa I_{\rm phys}\otimes
 (|\mathrm{out}\rangle\langle\mathrm{in}|+
  |\mathrm{in}\rangle\langle\mathrm{out}|),
 \qquad T_{\rm tr}=\pi/(2\kappa).

$$

 Its transfer time does not grow with $\Delta$. At earlier cuts its actual ideal path vector is $\cos(\kappa t)|\mathrm{in}\rangle-i\sin(\kappa t)|\mathrm{out}\rangle$; reflection and incomplete transfer have not been replaced by a completed outlet. The complete bound counts $\kappa$ in $b$. 



<a id="section-23-5"></a>

## 23.5 Adversarial tests and a finite-horizon obstruction

 

For $H_0=0$, $V=gX_1$, a code vector and its $X_1$ image form an invariant pair with matrix 

$$

 \begin{pmatrix}0&g\\g&\Delta\end{pmatrix}.

$$

 Without the penalty its leakage is $\sin^2(gt)$, reaching one at $\pi/(2g)$. With the penalty leakage is <a id="prot:singleleak"></a>


$$
\frac{4g^2}{\Delta^2+4g^2}
 \sin^2\!\left(\tfrac t2\sqrt{\Delta^2+4g^2}\right).
 

$$

Equation (23.12).

 This is suppression against the same damaging interaction. Leakage alone is insufficient to certify logical fidelity, as the next exact example shows. 



**Proposition 23.3 (Orthogonal logical return at zero leakage).**

 <a id="prot:horizon"></a> For the four-qubit code, take $H_0=0$, $V=g(X_1+X_2)$ and $v=2g$. There are arbitrarily small $v/\Delta$ and finite $T$ at which an encoded vector returns to the code with zero leakage and an orthogonal logical state, while $Tv^2/\Delta\to\pi$. 

 

**Proof.**

The code operator $A_L=X_1X_2$ is a nontrivial logical involution. On its $-1$ eigenspace $X_2\psi=-X_1\psi$, so $V$ vanishes. On its $+1$ eigenspace the pair $\psi,X_1\psi$ has matrix 

$$

 \begin{pmatrix}0&2g\\2g&\Delta\end{pmatrix},
 \quad\Omega=\sqrt{\Delta^2+16g^2}.

$$

 Its code return amplitude is 

$$

 a(t)=e^{-i\Delta t/2}
 [\cos(\Omega t/2)+i\Delta\sin(\Omega t/2)/\Omega].

$$

 For integer $k\ge2$, choose 

$$

 16g^2/\Delta^2=(2k-1)/(k-1)^2,
 \qquad T=2\pi(k-1)/\Delta.

$$

 Then $\Omega/\Delta=k/(k-1)$, leakage is zero and $a(T)=-1$. An equal superposition of a dark and bright logical vector becomes orthogonal. Finally $Tv^2/\Delta=\pi(2k-1)/[2(k-1)]\to\pi$ while $v/\Delta\to0$. 

□

 

A later noncommuting logical probe separates these states even though a syndrome-only inspection sees no leakage. Virtual excursions accumulate a logical phase. The $tv^2/\Delta$ term in the complete estimate therefore marks a real horizon, not just a proof artifact. 

A two-body logical perturbation $\xi Z_1Z_2$ commutes with the four-qubit penalty and acts inside the code. On a logical superposition it changes a suitable later probability by $\sin^2(\xi t)$, independently of $\Delta$. A finite resonant memory is another explicit boundary: prepare $E$ excited with $H_E=\Delta|1\rangle\langle1|$ and use $V=gX_1\otimes X_E$. The states $\psi_{\rm code}|1\rangle$ and $X_1\psi_{\rm code}|0\rangle$ are degenerate in total energy and mix with amplitude $\sin(gt)$ regardless of $\Delta$. Here $b$ grows with $\Delta$, violating the required separation. A drive resonant with the gap similarly lies outside the stationary bounded-bandwidth class. 



<a id="section-23-6"></a>

## 23.6 Completed repair against the two-body attack

 

Use the five-qubit code with commuting independent generators <a id="prot:fivecode"></a>


$$
g_1=XZZXI,\quad g_2=IXZZX,\quad
 g_3=XIXZZ,\quad g_4=ZXIXZ,
 \quad P_5=\prod_{k=1}^4(I+g_k)/2.
 

$$

Equation (23.13).

 It has rank two. Explicit nonzero logical vectors are the normalized $P_5|00000\rangle$ and its $X^{\otimes5}$ image: the initial projection has squared norm $1/16$, and the two vectors have opposite $Z^{\otimes5}$ eigenvalues. 



**Lemma 23.4 (Detection of every weight-one and weight-two Pauli).**

 <a id="prot:twobody"></a> For each nonidentity Pauli $A$ of weight at most two, $P_5AP_5=0$. 

 

**Proof.**

The anticommutation syndromes against $g_1,\ldots,g_4$ are 

$$

\begin{array}{c|ccc}
\text{site}&X&Y&Z\\\hline
1&0001&1011&1010\\
2&1000&1101&0101\\
3&1100&1110&0010\\
4&0110&1111&1001\\
5&0011&0111&0100
\end{array}

$$

 These are all fifteen nonzero four-bit strings. A Pauli acting on two different sites has the exclusive-or of two different syndromes, which is nonzero. Hence some stabilizer anticommutes with $A$. The calculation $P_5AP_5=-P_5AP_5$ proves the claim. 

□

 

With $H_{{\rm pen},5}=\Delta(I-P_5)$ and 

$$

 V=\sum_{1\le\operatorname{wt}(A)\le2}A\otimes B_A,
 \qquad B_A=B_A^\dagger,\quad\|V\|\le v,

$$

 Theorem [23.2](/quantum-measurement/monograph/energy-gap-protection-of-complete-source-transport#prot:gap) applies unchanged. This repair genuinely enlarges the admitted disturbance class. It requires a stronger supplied interaction: expanding $P_5$ uses up to fifteen commuting nonidentity Pauli products besides a scalar term. The penalty has norm $\Delta$. One unknown logical qubit and four fresh ready qubits suffice for a unitary encoding; extending the isometry to a unitary and using a Hermitian logarithm gives finite realization with norm at most $\pi/\tau$ over duration $\tau$. That establishes finite existence, not an optimized circuit. 

No finite code protects against every possible logical interaction. An operator implementing $\epsilon Z$ inside its code leaves the penalty unchanged and rotates a logical $|+\rangle$ by trace distance $|\sin\epsilon t|$. This is the exact boundary of a code-based protection claim.
