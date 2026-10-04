# Section 6: Protected coherent transport in the same inventory

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\E = \mathbb E
\Prb = \mathbb P
\TV = d_{\rm TV}
\id = \operatorname{id}
\dd = \,\mathrm d
\cH = \mathcal H
\cS = \mathcal S
\norm = \left\|#1\right\|
\pos = [#1]_+
\Ncdf = \mathsf F
\Ntail = \overline{\mathsf F}
-->

<a id="section-6"></a>

## 6 Protected coherent transport in the same inventory

 <a id="sec:protection"></a> Actual archive storage and protection of unknown logical amplitudes are different tasks. The monograph's bounded internal gap construction can be implemented here without a stochastic interface. To display its nonempty domain, encode two qubits into four by 

$$

 C{|{a,b}\rangle}=\frac{{|{0,a,b,a\oplus b}\rangle}+{|{1,1\oplus a,1\oplus b,1\oplus a\oplus b}\rangle}}{\sqrt2}.

$$

 Let $S_X=X_1X_2X_3X_4$, $S_Z=Z_1Z_2Z_3Z_4$, $P=(I+S_X)(I+S_Z)/4$ and $Q=I-P$, with identities on the retained internal nuisance systems and inaccessible reference understood. Set 

$$

 H_{\rm pen}=\tfrac\Delta2(I-S_X)+\tfrac\Delta2(I-S_Z),\quad
 H_\Delta=H_{\rm pen}+H_0+V.

$$

 The penalty satisfies $H_{\rm pen}P=0$ and $H_{\rm pen}\ge\Delta Q$. Assume the bounded self-adjoint operators are stationary on the protected exposure, with $[H_0,P]=0$, ${\left\|{H_0}\right\|}\le b$, and 

$$

 V=\sum_{i=1}^4\sum_{\alpha=x,y,z}\sigma_i^\alpha\otimes B_{i\alpha},
 \quad B_{i\alpha}=B_{i\alpha}^\dagger,\quad{\left\|{V}\right\|}\le v.

$$

 The $B$'s act on retained finite internal nuisance systems. During the protected exposure, the spatial holding Hamiltonian is a commuting spectator; it is factored out. We do not assert a bounded-norm theorem for arbitrary unbounded coordinate couplings. One-site Paulis anticommute with a stabilizer, so $PVP=0$. All encoding and decoding gates are finite internal unitaries.



**Proposition 6.1 (Retained-bank gap bound).**

<a id="prop:gap"></a> For $\Delta-2b-v=\gamma>0$, <a id="eq:gap"></a>


$$

 {\left\|{\bigl(e^{-itH_\Delta/\hbar}-e^{-itH_0/\hbar}\bigr)P}\right\|}
 \le\min\left\{2,\frac{2v+tv^2/\hbar}{\gamma}\right\}.

$$

Equation (26).

 The same bound holds with every inaccessible reference and retained internal nuisance system included. 

 

**Proof.**

Decompose the complete internal bank as $\operatorname{ran}P\oplus\operatorname{ran}Q$ and define its compressed blocks 

$$

 A=PH_0P,\qquad B=QVP,\qquad D=QH_\Delta Q,

$$

 where $A$ and $D$ act on their respective subspaces and $B:\operatorname{ran}P\to\operatorname{ran}Q$. Then 

$$

 H_\Delta=H_d+W,\qquad
 H_d=\begin{pmatrix}A&0\\0&D\end{pmatrix},\qquad
 W=\begin{pmatrix}0&B^\dagger\\B&0\end{pmatrix}.

$$

 The stated bounds imply 

$$

 D\ge(\Delta-b-v)Q=(b+\gamma)Q,
 \qquad A\le bP,\qquad {\left\|{B}\right\|}\le v.

$$

 Thus the norm-convergent integral 

$$

 X=\int_0^\infty e^{-rD}Be^{rA}{\,\mathrm d} r

$$

 satisfies $DX-XA=B$ and ${\left\|{X}\right\|}\le v/\gamma$. Indeed the integrand has norm at most $v e^{-r\gamma}$; differentiating it and integrating its vanishing boundary term gives the identity. Here $r$ has inverse-energy units; it is not physical time. The skew-adjoint block operator 

$$

 S=\begin{pmatrix}0&-X^\dagger\\X&0\end{pmatrix}
 \quad\text{satisfies}\quad
 [S,H_d]=-W,\qquad {\left\|{S}\right\|}={\left\|{X}\right\|}.

$$

 Put $f(u)=e^{uS}We^{-uS}$. Differentiation and integration yield 

$$
\begin{aligned}e^SH_\Delta e^{-S}
 &=H_d+f(1)-\int_0^1f(u){\,\mathrm d} u=H_d+R,\\
 R&=\int_0^1u e^{uS}[S,W]e^{-uS}{\,\mathrm d} u.
\end{aligned}
$$

 These conjugations are unitary, so 

$$

 {\left\|{R}\right\|}\le\tfrac12{\left\|{[S,W]}\right\|}\le v^2/\gamma,
 \qquad {\left\|{e^{\pm S}-I}\right\|}\le{\left\|{S}\right\|}\le v/\gamma.

$$

 Two changes of frame and Duhamel in physical time therefore give 

$$

 {\left\|{e^{-S}e^{-it(H_d+R)/\hbar}e^S-e^{-itH_d/\hbar}}\right\|}
 \le\frac{2v}{\gamma}+\frac{tv^2}{\hbar\gamma}.

$$

 On $\operatorname{ran}P$, the last unperturbed propagator agrees with $e^{-itH_0/\hbar}$. The trivial norm bound two completes [(26)](/quantum-measurement/research/equilibrium-records/protected-coherent-transport-in-the-same-inventory#eq:gap). Tensoring an identity preserves each operator norm, so the same estimate retains the inaccessible reference and nuisance bank. 

□

 This is the monograph's coherent protection estimate, with its assumptions preserved; Hamiltonian error suppression has independent primary precedent [[11](/quantum-measurement/research/equilibrium-records/bibliography#bib-MarvianLidar)]. Its role here is compatibility with actual material writes and records, not selection of a noise generator.
