# The Source-to-Readout Construction

## The canonical spectral-curvature field

### 1. Field datum

Let

\[
\mathfrak S=
(\mathcal H,q,K,E_K,\nu,\mathcal W,J,\tau,\mathcal R,
h,\gamma,\mathsf{CarrierRoute})
\tag{F4.1}
\]

be a weighted spectral spine emitted by the Tier-0.5 aperture, with
\(\mathsf{CarrierRoute}=\mathsf{CSCFEligible}\). The carrier satisfies

\[
K=K^*\ge0,
\qquad
K=\int_{[0,\infty)}\lambda\,dE_K(\lambda).
\tag{F4.2}
\]

The aperture-selected coherence symbol satisfies

\[
h:\operatorname{spec}K\to\mathbb R,
\qquad
h(0)=0,
\qquad h\text{ finite }E_K\text{-a.e.},
\tag{F4.3}
\]

and \(\gamma\ge0\) is the aperture-selected damping response. The
intrinsic pinned-zero condition is
\(h(K)E_K(\{0\})=0\); when zero is not an eigenvalue, the representative
value \(h(0)\) has no operator effect. The
coherent generator is the possibly unbounded selfadjoint operator

\[
C=h(K)=\int h(\lambda)\,dE_K(\lambda).
\tag{F4.4}
\]

Its domain is

\[
D(C)=\left\{\psi:
\int|h(\lambda)|^2\,d\langle\psi,E_K(\lambda)\psi\rangle<\infty
\right\}.
\tag{F4.4a}
\]

The canonical field datum is

\[
\boxed{
\mathfrak F_{K,h,\gamma}
=
(K,C,S_t,U_t,W_t,\Lambda_T,\Gamma_T,
D_T,B_T,E_K,\nu,\tau,\mathcal R).
}
\tag{F4.5}
\]

The field is an operator field: its primitive object is the spectral carrier and its physical manifestations are operator-valued responses. Local spacetime fields arise only after a Tier-1 representation of \(\mathcal H\), \(K\), and \(\mathcal W\) has been selected.

Before dimensional calibration the evolution parameter is
\(\theta\), not an assumed source time.  A Tier-1 scale
\(\omega_Y>0\) represents it by

\[
t=\theta/\omega_Y,
\qquad
K_{\rm phys}=\omega_YK,
\qquad
C_{\rm phys}=\omega_YC.
\tag{F4.5a}
\]

The notation \(t\) below denotes this represented parameter.  The
one-sided semigroup records contraction orientation; the physical arrow
of time additionally requires the objective-record and temporal
embedding conditions of Chapter 9.

### 2. The two canonical faces

The dissipative face is

\[
S_t=e^{-tK}
=\int_0^\infty e^{-t\lambda}\,dE_K(\lambda),
\qquad t\ge0.
\tag{F4.6}
\]

It is a strongly continuous selfadjoint contraction semigroup:

\[
S_{t+s}=S_tS_s,\qquad
\|S_t\|\le1,\qquad
\frac{d}{dt}S_t\psi=-KS_t\psi
\quad(\psi\in D(K)).
\tag{F4.7}
\]

The coherent face is

\[
U_t=e^{-itC}
=\int_0^\infty e^{-ith(\lambda)}\,dE_K(\lambda),
\qquad t\in\mathbb R.
\tag{F4.8}
\]

It is a strongly continuous unitary group by the spectral theorem:

\[
U_{t+s}=U_tU_s,\qquad
U_t^*U_t=I,\qquad
\frac{d}{dt}U_t\psi=-iCU_t\psi
\quad(\psi\in D(C)).
\tag{F4.9}
\]

It is norm continuous exactly when \(C\) is bounded.

Both faces belong to the same abelian von Neumann algebra:

\[
S_t,U_s,\Lambda_T,\Gamma_T\in W^*(K),
\tag{F4.10}
\]

and therefore

\[
[S_t,U_s]=[\Lambda_T,U_s]
=[\Gamma_T,S_t]=0.
\tag{F4.11}
\]

Their common stationary sector is

\[
\mathcal H_0=\ker K.
\tag{F4.12}
\]

Since \(h(0)=0\),

\[
S_t|_{\mathcal H_0}
=U_t|_{\mathcal H_0}
=I_{\mathcal H_0}.
\tag{F4.13}
\]

### 3. Unified time evolution

The combined field generator is the maximal accretive normal spectral
operator

\[
\boxed{
G_\gamma=\gamma K+iC.
}
\tag{F4.14}
\]

More precisely,

\[
G_\gamma
=\int_0^\infty[\gamma\lambda+ih(\lambda)]\,dE_K(\lambda),
\quad
D(G_\gamma)=
\left\{\psi:
\int(\gamma^2\lambda^2+h(\lambda)^2)
\,d\mu_\psi(\lambda)<\infty
\right\}.
\tag{F4.14a}
\]

Because \(C=h(K)\) strongly commutes with \(K\),

\[
W_t=e^{-tG_\gamma}
=e^{-\gamma tK}e^{-itC}
=\int_0^\infty
e^{-t[\gamma\lambda+ih(\lambda)]}\,dE_K(\lambda).
\tag{F4.15}
\]

The canonical field equation is

\[
\boxed{
\dot\psi(t)
=-\bigl(\gamma K+i\,h(K)\bigr)\psi(t)+\jmath(t),
}
\tag{F4.16}
\]

with mild solution

\[
\psi(t)
=W_t\psi_0
+\int_0^tW_{t-s}\jmath(s)\,ds.
\tag{F4.17}
\]

Equation (F4.17) is defined for
\(\jmath\in L^1_{\rm loc}([0,\infty);\mathcal H)\). Strong solutions
add the usual generator-domain and time-regularity conditions.

For \(\jmath=0\), each spectral mode obeys

\[
\dot\psi_\lambda
=-\bigl(\gamma\lambda+ih(\lambda)\bigr)\psi_\lambda,
\qquad
\psi_\lambda(t)
=e^{-\gamma\lambda t}
e^{-ih(\lambda)t}\psi_\lambda(0).
\tag{F4.18}
\]

The mode has decay rate and coherent frequency

\[
\boxed{
\Gamma(\lambda)=\gamma\lambda,
\qquad
\omega(\lambda)=h(\lambda).
}
\tag{F4.19}
\]

The ratio

\[
Q(\lambda)=
\begin{cases}
\dfrac{|h(\lambda)|}{2\gamma\lambda},&\gamma\lambda>0,\\
+\infty,&\gamma\lambda=0,\ |h(\lambda)|>0,\\
0,&\gamma\lambda=|h(\lambda)|=0,
\end{cases}
\tag{F4.20}
\]

is its spectral quality factor. Equation (F4.19) is the basic dual-sector prediction: decay and phase are linked by one eigenvalue, not independently assigned.

#### Theorem F4.1 — unified field generation

\(G_\gamma\) generates the contraction semigroup (F4.15), and

\[
\|W_t\|\le1.
\tag{F4.21}
\]

**Proof.** The spectral multiplier in (F4.15) has modulus \(e^{-\gamma t\lambda}\le1\). The spectral theorem gives the semigroup law, strong continuity and the norm bound. Differentiation of the multiplier on the domain (F4.14a) gives generator \(-G_\gamma\). Maximal accretivity follows because \(1+G_\gamma\) has the bounded inverse multiplier \([1+\gamma\lambda+ih(\lambda)]^{-1}\). \(\square\)

### 4. Hamiltonian-gradient decomposition

Regard \(\mathcal H\) as a real Hilbert space with complex structure \(\mathbb J\psi=i\psi\). Define

\[
\mathcal H_C[\psi]
=\frac12\langle\psi,C\psi\rangle,
\qquad
\mathcal M_K[\psi]
=\frac12\langle\psi,K\psi\rangle.
\tag{F4.22}
\]

These functionals are evaluated on
\(D(|C|^{1/2})\cap D(K^{1/2})\); their displayed gradients require
\(D(C)\cap D(K)\).

Their real gradients are

\[
\nabla\mathcal H_C=C\psi,
\qquad
\nabla\mathcal M_K=K\psi.
\tag{F4.23}
\]

Equation (F4.16) with \(\jmath=0\) is

\[
\boxed{
\dot\psi
=-\mathbb J\nabla\mathcal H_C
-\gamma\nabla\mathcal M_K.
}
\tag{F4.24}
\]

The coherent face is Hamiltonian motion generated by \(\mathcal H_C\); the Lambda face is gradient descent generated by \(\mathcal M_K\). They are orthogonal responses of the same spectral carrier.

The coherent action is

\[
\mathcal S_C[\psi]
=\int dt\,
\left[
\frac{i}{2}
\bigl(\langle\psi,\dot\psi\rangle
-\langle\dot\psi,\psi\rangle\bigr)
-\langle\psi,C\psi\rangle
\right],
\tag{F4.25}
\]

whose Euler equation is \(i\dot\psi=C\psi\). Dissipation is supplied by the Onsager metric potential \(\gamma\mathcal M_K\), producing the second term of (F4.24). A single undoubled real action is not used to disguise irreversible evolution as conservative motion.

### 5. Conserved and monotone quantities

For a homogeneous solution and a nonnegative Borel function \(F\),
assume initially that \(\psi_0\) lies in the form domain of
\(KF(K)\) and in the generator domain needed for differentiation.
Then

\[
\frac{d}{dt}
\langle\psi(t),F(K)\psi(t)\rangle
=-2\gamma
\langle\psi(t),KF(K)\psi(t)\rangle.
\tag{F4.26}
\]

The monotone identities extend to every finite initial expectation by
spectral cutoff and monotone convergence, with the derivative
understood almost everywhere.

The coherent terms cancel because \(C\) commutes with \(F(K)\). Therefore:

\[
\frac{d}{dt}\|\psi(t)\|^2
=-2\gamma\langle K\rangle_{\psi(t)}
\le0,
\tag{F4.27}
\]

\[
\frac{d}{dt}\langle K\rangle_{\psi(t)}
=-2\gamma\langle K^2\rangle_{\psi(t)}
\le0.
\tag{F4.28}
\]

When \(\gamma=0\), every spectral expectation

\[
\langle\psi(t),F(K)\psi(t)\rangle
\tag{F4.29}
\]

is conserved.

If the positive sector has spectral gap

\[
\lambda_{\rm gap}
=\inf(\operatorname{spec}K\setminus\{0\})>0,
\tag{F4.30}
\]

then

\[
\|(I-P_0)\psi(t)\|
\le e^{-\gamma\lambda_{\rm gap}t}
\|(I-P_0)\psi_0\|,
\tag{F4.31}
\]

where \(P_0=E_K(\{0\})\). Thus the gap controls relaxation to the stationary sector.

### 6. Time-averaged transmission

The dissipative Fejér average is

\[
\boxed{
\Lambda_T(K)
=\frac1T\int_0^T e^{-tK}\,dt
=f_T(K),
\qquad
f_T(\lambda)=\frac{1-e^{-T\lambda}}{T\lambda}.
}
\tag{F4.32}
\]

At \(\lambda=0\), \(f_T(0)=1\). The coherent average is

\[
\boxed{
\Gamma_T(K)
=\frac1T\int_0^T e^{-itC}\,dt
=g_T(C),
\qquad
g_T(c)=\frac{1-e^{-iTc}}{iTc}.
}
\tag{F4.33}
\]

Its positive compression is

\[
\Gamma_T^*\Gamma_T
=\operatorname{sinc}^2\!\left(\frac{TC}{2}\right).
\tag{F4.34}
\]

The scalar responses are

\[
0<f_T(\lambda)\le1,
\qquad
0\le\operatorname{sinc}^2(Th(\lambda)/2)\le1.
\tag{F4.35}
\]

The dissipative transmission is strictly monotone in \(\lambda\). The coherent compression is oscillatory and has resonances at

\[
Th(\lambda)=2\pi n,\qquad n\in\mathbb Z\setminus\{0\}.
\tag{F4.36}
\]

### 7. Spectral budgets

Let \(\mathcal H_d=(\ker K)^\perp\). Under the trace convention \(\tau\) carried by the aperture, define

\[
\boxed{
D_T(K)
=-\log\det_\tau
\Lambda_T(K)|_{\mathcal H_d},
}
\tag{F4.37}
\]

\[
\boxed{
B_T(K)
=-\log\det_\tau
\bigl(\Gamma_T^*\Gamma_T\bigr)|_{\mathcal H_d}.
}
\tag{F4.38}
\]

In spectral-integral form,

\[
D_T(K)
=\int_{(0,\infty)}
-\log f_T(\lambda)\,d\nu_\tau(\lambda),
\tag{F4.39}
\]

\[
B_T(K)
=\int_{(0,\infty)}
-\log\operatorname{sinc}^2
\!\left(\frac{Th(\lambda)}2\right)
d\nu_\tau(\lambda).
\tag{F4.40}
\]

At a coherent resonance, (F4.40) diverges under the full determinant convention. A reduced determinant removes a declared resonant kernel and records its multiplicity separately.

For \(T\lambda\ll1\),

\[
-\log f_T(\lambda)
=\frac{T\lambda}{2}
-\frac{T^2\lambda^2}{24}
+O(T^4\lambda^4),
\tag{F4.41}
\]

and for \(T|h(\lambda)|\ll1\),

\[
-\log\operatorname{sinc}^2
\!\left(\frac{Th(\lambda)}2\right)
=\frac{T^2h(\lambda)^2}{12}
+O(T^4h(\lambda)^4).
\tag{F4.42}
\]

Thus the leading dissipative budget is linear in \(K\), while the leading coherent compression budget is quadratic in \(h(K)\).

For finite positive rank \(r\) and \(T\lambda_j\gg1\),

\[
D_T(K)
=r\log T+\sum_{j=1}^{r}\log\lambda_j+o(1).
\tag{F4.43}
\]

### 8. Capacity and entropy production

The contraction volume on a finite spectral sector \(P_\Lambda\mathcal H\) is

\[
\mathcal V(t)
=\det\bigl(e^{-tP_\Lambda KP_\Lambda}\bigr)
=e^{-t\,\operatorname{Tr}(P_\Lambda K)}.
\tag{F4.44}
\]

Its logarithmic loss rate is

\[
-\frac{d}{dt}\log\mathcal V(t)
=\operatorname{Tr}(P_\Lambda K)\ge0.
\tag{F4.45}
\]

For a normalized spectral probability distribution

\[
p_n(t)
=\frac{e^{-2\gamma\lambda_nt}|c_n|^2}
{\sum_m e^{-2\gamma\lambda_mt}|c_m|^2},
\tag{F4.46}
\]

the mean carrier decreases:

\[
\frac{d}{dt}\sum_np_n(t)\lambda_n
=-2\gamma\,\operatorname{Var}_{p(t)}(\lambda)
\le0.
\tag{F4.47}
\]

Equation (F4.47) is the normalized selection law: dissipative evolution concentrates weight toward the lowest accessible carrier modes.

### 9. Quantum realization

The contraction \(W_t\) is the no-jump or conditional amplitude evolution generated by the effective Hamiltonian

\[
H_{\rm eff}=C-i\gamma K.
\tag{F4.48}
\]

A trace-preserving completely positive realization requires a jump
factorization supplied by the Tier-1 channel. Define

\[
\operatorname{Fact}_\gamma(K)
=\left\{\{L_r\}:
\frac12\sum_rL_r^*L_r=\gamma K
\text{ in quadratic-form sense}\right\}.
\tag{F4.48a}
\]

Thus

\[
\frac12\sum_rL_r^*L_r=\gamma K.
\tag{F4.49}
\]

For bounded \(C,K,L_r\), or for an unbounded conservative quantum
dynamical semigroup on a declared common core, the density operator
satisfies

\[
\boxed{
\dot\rho
=-i[C,\rho]
+\sum_r\left(
L_r\rho L_r^*
-\frac12\{L_r^*L_r,\rho\}
\right).
}
\tag{F4.50}
\]

Its conditional drift is exactly (F4.48). The canonical factorization

\[
L=\sqrt{2\gamma K}
\tag{F4.51}
\]

produces spectral dephasing. In the carrier eigenbasis its off-diagonal
rate is

\[
\Gamma_{mn}^{\rm deph}
=\gamma(\sqrt{\lambda_m}-\sqrt{\lambda_n})^2,
\tag{F4.51a}
\]

while the populations are fixed. Energy relaxation, particle
conversion or spatial transport requires a noncommuting factorization
\(\{L_r\}\) whose total capacity still satisfies (F4.49). Hence \(K\)
fixes the total dissipative capacity, while the aperture and Tier-1
representation fix its physical channels.

On the declared generator domain, trace preservation follows from

\[
\operatorname{Tr}\dot\rho=0,
\tag{F4.52}
\]

and complete positivity follows from the GKSL form. Equation (F4.49)
alone is not an existence theorem for an unbounded Lindblad generator;
conservativity and core invariance are part of the quantum-face domain
passed to Chapter 5.

### 10. Retarded response and susceptibility

The retarded field propagator is

\[
G_R(t)
=\Theta(t)e^{-tG_\gamma}.
\tag{F4.53}
\]

For a harmonic source
\(\jmath(t)=e^{-i\omega t}\jmath_\omega\), the stationary response,
whenever the boundary resolvent exists, is

\[
\psi_\omega
=\chi(\omega)\jmath_\omega,
\qquad
\boxed{
\chi(\omega)
=\bigl(\gamma K+i[C-\omega I]\bigr)^{-1}.
}
\tag{F4.54}
\]

Modewise,

\[
\chi_\lambda(\omega)
=\frac{1}{\gamma\lambda+i[h(\lambda)-\omega]}.
\tag{F4.55}
\]

The spectral linewidth and resonance center are therefore

\[
\Delta\omega_\lambda=2\gamma\lambda,
\qquad
\omega_\lambda=h(\lambda).
\tag{F4.56}
\]

This gives a direct paired observable for the common-carrier hypothesis.

For \(z\) in the upper half-plane, define

\[
\chi(z)
=\bigl(\gamma K+i[C-zI]\bigr)^{-1}.
\tag{F4.56a}
\]

Its multiplier has real part
\(\gamma\lambda+\operatorname{Im}z>0\), so \(\chi\) is analytic and

\[
\|\chi(z)\|\le(\operatorname{Im}z)^{-1}.
\tag{F4.56b}
\]

The real-frequency response in (F4.54) is its retarded boundary value.
At an undamped stationary resonance it is a distributional boundary
value, not a bounded inverse. Analyticity supplies the causal
Kramers--Kronig relation for every scalar matrix element after the
required high-frequency subtraction.

### 11. Second-order realization

When Tier-1 fields are represented by real coordinates, the coherent
phase pair can be written as a second-order equation.  Since \(K\) and
\(C=h(K)\) strongly commute, applying
\(\partial_t+\gamma K-iC\) to the first-order equation gives, on the
common invariant domain,

\[
\begin{aligned}
&(\partial_t+\gamma K-iC)
(\partial_t+\gamma K+iC)\psi\\
&\qquad=
\left[\partial_t^2+2\gamma K\partial_t
+\gamma^2K^2+C^2\right]\psi
=(\partial_t+\gamma K-iC)\jmath.
\end{aligned}
\tag{F4.57}
\]

Put \(\Omega_K=|C|=|h|(K)\), so
\(\Omega_K^2=C^2\). The complex field itself obeys the resulting
second-order equation. If
the real structure satisfies
\(JKJ^{-1}=K\) and \(JCJ^{-1}=C\), the same equation holds separately
for either real component \(\phi\) of \(\psi\):

\[
\boxed{
\ddot\phi
+2\gamma K\dot\phi
+\bigl(\Omega_K^2+\gamma^2K^2\bigr)\phi
=\mathfrak J,
}
\tag{F4.58}
\]

where \(\mathfrak J\) is the corresponding real component of
\((\partial_t+\gamma K-iC)\jmath\).  In the homogeneous case,
for a carrier eigenmode,

\[
\ddot\phi_\lambda
+2\gamma\lambda\dot\phi_\lambda
+\bigl[h(\lambda)^2+\gamma^2\lambda^2\bigr]
\phi_\lambda=0.
\tag{F4.59}
\]

Its characteristic roots are

\[
r_{\lambda,\pm}
=-\gamma\lambda\pm i|h(\lambda)|,
\tag{F4.60}
\]

so the oscillation frequency remains the coherent frequency and the
envelope decay remains the dissipative rate:

\[
\omega_{\lambda,\rm osc}=|h(\lambda)|,
\qquad
\Gamma_\lambda=\gamma\lambda.
\tag{F4.61}
\]

The term \(\gamma^2K^2\) is required for equivalence with the canonical
first-order field.  Omitting it would define a different damped
oscillator whose phase is
\(\sqrt{h(\lambda)^2-\gamma^2\lambda^2}\), not the field (F4.15).

### 12. Local field representation

Let \(E\to M\) be a Hermitian bundle over a Riemannian realization and let

\[
q_K[\phi]
=\int_M
\left[
\langle\nabla\phi,A(x)\nabla\phi\rangle
+\langle\phi,V(x)\phi\rangle
\right]\,d\mu_g
+q_{\partial}[\phi],
\tag{F4.62}
\]

with \(A(x)>0\), \(V(x)\ge0\), and a selfadjoint boundary form. Its Friedrichs operator is

\[
K
=-\nabla_\mu A^{\mu\nu}\nabla_\nu+V
\tag{F4.63}
\]

on the declared domain. The local field equation is

\[
\left[
\partial_t
+\gamma\bigl(-\nabla_\mu A^{\mu\nu}\nabla_\nu+V\bigr)
+i\,h\!\left(-\nabla_\mu A^{\mu\nu}\nabla_\nu+V\right)
\right]\phi
=\jmath.
\tag{F4.64}
\]

This equation is local in its dissipative part when \(K\) is differential. The coherent symbol \(h(K)\) is generally pseudodifferential; it becomes local only for an admissible polynomial or differential symbol.

### 13. Coupled carriers

Suppose aperture faces emit carriers \(K_a\) on \(\mathcal H_a\). The uncoupled carrier is

\[
K_0=\bigoplus_aK_a,
\qquad
q_0=\bigoplus_aq_a.
\tag{F4.65}
\]

Let \(v\) be a symmetric interaction form satisfying

\[
|v[\Psi]|
\le\alpha q_0[\Psi]+\beta\|\Psi\|^2,
\qquad
\alpha<1.
\tag{F4.66}
\]

The KLMN bound makes \(q_0+v\) closed and semibounded. A CSCF-eligible
joint face additionally requires

\[
q_0[\Psi]+v[\Psi]\ge0
\quad\text{for every }\Psi\in D(q_0).
\tag{F4.66a}
\]

The coupled carrier is

\[
\boxed{
K_{\rm tot}
=\operatorname{Friedrichs}(q_0+v).
}
\tag{F4.67}
\]

The total field is formed after coupling. In particular, the joint
aperture face re-solves the symbol and damping problems:

\[
\bigl(h_{\rm tot},\gamma_{\rm tot}\bigr)
=\operatorname{Sel}_{h,\gamma}^{\,\vee}(K_{\rm tot}),
\qquad
C_{\rm tot}=h_{\rm tot}(K_{\rm tot}),
\qquad
S_t^{\rm tot}=e^{-tK_{\rm tot}},
\qquad
U_t^{\rm tot}=e^{-it h_{\rm tot}(K_{\rm tot})},
\qquad
W_t^{\rm tot}
=e^{-t[\gamma_{\rm tot}K_{\rm tot}+iC_{\rm tot}]}.
\tag{F4.68}
\]

Using \(h_a(K_a)\) independently before coupling would generally miss
hybridized spectral modes and need not satisfy the joint phase
relations. Equation (F4.68) makes coherence and dissipation respond to
the same interacting spectrum. If (F4.66a) or the joint selection
problem fails, the coupling remains an effective or residue route
rather than a total CSCF field.

For a two-sector block carrier

\[
K_{\rm tot}
=
\begin{pmatrix}
K_1&gV\\
gV^*&K_2
\end{pmatrix},
\tag{F4.69}
\]

isolated simple eigenvalues have first nonvanishing shifts

\[
\delta\lambda_n^{(2)}
=g^2
\sum_m
\frac{|\langle n|V|m\rangle|^2}
{\lambda_n^{(1)}-\lambda_m^{(2)}}
+O(g^3),
\tag{F4.70}
\]

away from degeneracy. The same shift changes both
\(\Gamma_n=\gamma_{\rm tot}\lambda_n\) and
\(\omega_n=h_{\rm tot}(\lambda_n)\).

### 14. Nonlocal residue

For a regular/defect decomposition

\[
K=
\begin{pmatrix}
K_R&V\\
V^*&K_D
\end{pmatrix},
\tag{F4.71}
\]

with \(K_R\) selfadjoint, \(K_D\) maximal accretive and
\(V\in\mathcal B(\mathcal H_D,\mathcal H_R)\), eliminating the defect
sector produces, on
\(\{z:\Re z>0\}\cap\rho(-K_D)\),

\[
K_{\rm eff}(z)
=K_R-V(K_D+z)^{-1}V^*.
\tag{F4.72}
\]

The corresponding time-domain equation contains the memory kernel

\[
\mathcal K_{\rm mem}(t)
=Ve^{-tK_D}V^*.
\tag{F4.73}
\]

Thus a typed aperture residue becomes one of three physical structures:

\[
\mathcal R
\longmapsto
\begin{cases}
\text{an explicit coupled field channel},\\
\text{a nonlocal memory kernel},\\
\text{a finite effective correction after scale separation}.
\end{cases}
\tag{F4.74}
\]

It never disappears merely because it is not directly visible.

### 15. Spectral action

For an admissible positive test function \(F\) and spectral scale \(\Lambda\), define

\[
\mathcal S_{\rm spec}[K;\Lambda]
=\tau\!\left(F(K/\Lambda^{d_K})\right).
\tag{F4.75}
\]

When \(K\) is an elliptic operator of order \(d_K\) on a \(d\)-dimensional compact realization,

\[
\operatorname{Tr}e^{-tK}
\sim
\sum_{n=0}^\infty
a_n(K)\,t^{(n-d)/d_K}
\tag{F4.76}
\]

as \(t\downarrow0\). Mellin transformation yields the large-\(\Lambda\) expansion

\[
\mathcal S_{\rm spec}[K;\Lambda]
\sim
\sum_n
F_{d-n}\,
\Lambda^{d-n}a_n(K)
+F(0)\zeta_K(0).
\tag{F4.77}
\]

The heat coefficients \(a_n(K)\) generate the local Tier-1 invariants permitted by the carrier, including volume, curvature, gauge curvature and boundary terms in the corresponding geometric realization.

### 16. Dirac–boundary-capacity realization

Let \(M\) have boundary \(\Sigma\), let \(D_A\) be a twisted Dirac operator, and solve

\[
D_A^2u=0\quad\text{in }M,
\qquad
\gamma_0u=f\quad\text{on }\Sigma.
\tag{F4.78}
\]

The Dirichlet-to-Neumann operator is

\[
K_{\rm OS}f
=\gamma_1u.
\tag{F4.79}
\]

Green’s identity gives

\[
\langle f,K_{\rm OS}f\rangle_\Sigma
=\|D_Au\|_{L^2(M)}^2
\ge0,
\tag{F4.80}
\]

so \(K_{\rm OS}\) is positive; ellipticity and a selfadjoint boundary condition give a positive selfadjoint realization.
On a compact smooth boundary it is an elliptic pseudodifferential
operator of order one with compact resolvent. This first-order type is
the dimensional convention used by the boundary-capacity face.

An abstract carrier \(K\) is physically represented by \(K_{\rm OS}\) when there is an isometry

\[
\mathcal U:\mathcal H_K\to\mathcal H_\Sigma
\tag{F4.81}
\]

intertwining their spectral calculi:

\[
\mathcal U f(K)
=f(K_{\rm OS})\mathcal U
\tag{F4.82}
\]

for the response algebra. Then

\[
\mathcal U\mathfrak F_{K,h,\gamma}\mathcal U^*
=\mathfrak F_{K_{\rm OS},h,\gamma}.
\tag{F4.83}
\]

In a product collar of width \(\beta\), with Dirichlet data at the
readout boundary and Neumann condition at the inner end, a separated
mode of bulk mass \(m_\alpha\) has capacity eigenvalue

\[
\kappa_\alpha
=m_\alpha\tanh(m_\alpha\beta).
\tag{F4.84}
\]

Consequently

\[
\Gamma_\alpha
=\gamma m_\alpha\tanh(m_\alpha\beta),
\qquad
\omega_\alpha
=h\!\left(m_\alpha\tanh(m_\alpha\beta)\right).
\tag{F4.85}
\]

### 17. Scaling

The source carrier is dimensionless. Let \(\omega_Y>0\) be the realization frequency scale. The physical carrier and coherence generator are

\[
K_{\rm phys}=\omega_YK,
\qquad
C_{\rm phys}
=\omega_Y\,\widehat h(K),
\tag{F4.86}
\]

where \(\widehat h\) is dimensionless. Physical time is related to source parameter \(\theta\) by

\[
t=\theta/\omega_Y.
\tag{F4.87}
\]

Under a length rescaling \(\ell\mapsto b\ell\) with dynamic exponent \(z\),

\[
K_{\rm phys}\mapsto b^{-z}K_{\rm phys},
\qquad
t\mapsto b^zt.
\tag{F4.88}
\]

A dimensionless Tier-1 coupling extracted from the spine has the form

\[
g_a(\mu)
=\mathcal G_a
\left(
\left\{
\frac{\lambda_n}{\mu^z},
w_n,\operatorname{mult}(\lambda_n)
\right\}
\right).
\tag{F4.89}
\]

The renormalization equation is

\[
\mu\frac{dg_a}{d\mu}
=\beta_a(g),
\tag{F4.90}
\]

where \(\beta_a\) is determined by the response of the regularized spectral invariants in (F4.89) to the cutoff scale.

### 18. Perturbative stability

Let \(K'=K+V\) with bounded selfadjoint \(V\). For every symbol \(h\)
in an operator-Lipschitz class,

\[
\|h(K')-h(K)\|
\le C_h\|V\|.
\tag{F4.91}
\]

More generally, norm-resolvent convergence

\[
\|(K'+i)^{-1}-(K+i)^{-1}\|\to0
\tag{F4.92}
\]

implies \(\|h(K')-h(K)\|\to0\) for every \(h\in C_0(\mathbb R)\).
On a compact spectral window \([0,\Lambda]\),

\[
\|e^{-tK'}-e^{-tK}\|
\le t\,e^{t\delta}\|K'-K\|
\tag{F4.93}
\]

when \(K'-K\) is bounded below by \(-\delta I\). Isolated spectral projectors vary continuously as long as their gap remains open.

For the coherent budget, stability requires a nonresonance margin

\[
\operatorname{dist}
\bigl(Th(\operatorname{spec}K),2\pi\mathbb Z\setminus\{0\}\bigr)
\ge\delta_{\rm res}>0.
\tag{F4.94}
\]

Within this margin, \(B_T(K)\) is continuous under trace-class spectral perturbations.

### 19. Exact inverse reconstruction

For fixed \(T>0\),

\[
f_T(\lambda)
=\frac{1-e^{-T\lambda}}{T\lambda}
\tag{F4.95}
\]

is a strictly decreasing bijection

\[
f_T:[0,\infty)\to(0,1].
\tag{F4.96}
\]

Let \(\psi_T=f_T^{-1}\) on \((0,1]\).  If \(K\) is unbounded then
\(0\in\operatorname{spec}\Lambda_T(K)\) may occur as a limit point,
but

\[
E_{\Lambda_T}(\{0\})=0.
\tag{F4.96a}
\]

Set \(\psi_T(0)=0\) on this null spectral projection and use the
unbounded Borel functional calculus. The full Lambda operator
reconstructs the carrier, including its operator domain:

\[
\boxed{
K=\psi_T(\Lambda_T(K)).
}
\tag{F4.97}
\]

It also reconstructs the stationary sector:

\[
\ker(I-\Lambda_T(K))=\ker K.
\tag{F4.98}
\]

Once \(h\) is fixed,

\[
C=h\!\left(\psi_T(\Lambda_T(K))\right).
\tag{F4.99}
\]

Conversely, exact knowledge of \(U_t\) in an interval containing \(0\) determines \(C\) by Stone differentiation:

\[
C\psi
=i\left.\frac{d}{dt}U_t\psi\right|_{t=0}.
\tag{F4.100}
\]

The derivative in (F4.100) is strong and is defined precisely for
\(\psi\in D(C)\).

If \(h\) is injective on \(\operatorname{spec}K\), then

\[
K=h^{-1}(C).
\tag{F4.101}
\]

If \(h\) is not injective, coherent data recovers only the quotient spectral algebra \(W^*(h(K))\); the Lambda face restores the missing spectral separation.

For a finite positive spectral measure \(\mu_K\) supported on \([a,b]\subset(0,\infty)\), the profile

\[
\mathcal P_K(T)
=\int_a^b-\log(1-e^{-T\lambda})\,d\mu_K(\lambda)
\tag{F4.102}
\]

for all \(T>0\) determines \(\mu_K\). Its Mellin transform is

\[
\int_0^\infty
T^{s-1}\mathcal P_K(T)\,dT
=\Gamma(s)\zeta(s+1)
\int_a^b\lambda^{-s}\,d\mu_K(\lambda),
\qquad \Re s>0.
\tag{F4.103}
\]

Thus the complete Lambda profile determines every inverse moment and hence the compactly supported spectral measure.

### 20. Finite-resolution reconstruction

Let \(\widehat\Lambda_T\) satisfy

\[
\|\widehat\Lambda_T-\Lambda_T(K)\|
\le\varepsilon.
\tag{F4.104}
\]

On a bounded spectral window \([0,\Lambda_{\max}]\), define

\[
m_T(\Lambda_{\max})
=\min_{0\le\lambda\le\Lambda_{\max}}
|f_T'(\lambda)|>0.
\tag{F4.105}
\]

For spectrally aligned finite-dimensional estimates, the eigenvalue
error obeys

\[
\max_n|\widehat\lambda_n-\lambda_n|
\le
\frac{\varepsilon}{m_T(\Lambda_{\max})}
\tag{F4.106}
\]

when the estimated spectrum remains in
\(f_T([0,\Lambda_{\max}])\). For general noncommuting operator
perturbations, analytic functional calculus on the compact response
interval gives

\[
\|\psi_T(\widehat\Lambda_T)-\psi_T(\Lambda_T)\|
\le C_{T,\Lambda_{\max}}\varepsilon,
\tag{F4.106a}
\]

where the contour-calculus constant
\(C_{T,\Lambda_{\max}}\) replaces the scalar derivative bound. Since
both constants deteriorate as \(\Lambda_{\max}\to\infty\), high-carrier
modes require either several \(T\)-scales or regularization.

The multi-scale estimator minimizes

\[
\mathcal J(K)
=\sum_{j=1}^{N}
\omega_j
\|\widehat\Lambda_{T_j}-f_{T_j}(K)\|_{\rm HS}^2
+\eta\,\mathcal R_{\rm spec}(K),
\qquad K\ge0,
\tag{F4.107}
\]

where \(\mathcal R_{\rm spec}\) is a declared spectral smoothness or sparsity functional. Joint coherent data adds

\[
\sum_{k=1}^{M}
\widetilde\omega_k
\|\widehat U_{t_k}-e^{-it_kh(K)}\|_{\rm HS}^2.
\tag{F4.108}
\]

### 21. Field realization theorem

#### Theorem F4.2 — canonical field

Given a weighted spectral spine (F4.1) on the
\(\mathsf{CSCFEligible}\) route, with its aperture-selected admissible
symbol and \(\gamma\ge0\):

1. \(S_t\) and \(U_t\) exist and strongly commute;
2. \(G_\gamma=\gamma K+i h(K)\) generates the unified contraction (F4.15);
3. the dissipative stationary sector and the common \(S/U\) stationary
   sector are \(\ker K\); the stationary sector of \(W_t\) is
   \(\ker K\) for \(\gamma>0\) and \(\ker C\) for \(\gamma=0\);
4. the monotonicity laws (F4.26)–(F4.28) hold;
5. the averaged operators (F4.32)–(F4.34) are bounded functions of \(K\);
6. the budgets exist whenever the aperture trace convention admits their logarithms;
7. the exact Lambda operator reconstructs \(K\);
8. every Tier-1 representation intertwining the spectral calculus carries the complete field with it.

**Proof.** Items 1–5 follow from the spectral theorem and the
functional calculus, with derivatives interpreted on the expectation
domains displayed above. Item 6 follows from the determinant conditions
carried by \(\tau\). Strict monotonicity of \(f_T\), together with the
unbounded calculus at the null spectral limit in (F4.96a), gives item
7. Equation (F4.82) gives item 8 for every component of (F4.5).
\(\square\)

### 22. Completed field law

The full field layer is

\[
\boxed{
\begin{gathered}
\mathfrak S
\longmapsto
(K,E_K,\nu,\tau),\\
C=h(K),\qquad
G_\gamma=\gamma K+iC,\\
W_t=e^{-tG_\gamma}
=e^{-\gamma tK}e^{-itC},\\
\Lambda_T=f_T(K),\qquad
\Gamma_T=g_T(C),\\
D_T=-\log\det_\tau\Lambda_T,\qquad
B_T=-\log\det_\tau(\Gamma_T^*\Gamma_T),\\
K=\psi_T(\Lambda_T),\qquad
C=h(\psi_T(\Lambda_T)).
\end{gathered}}
\tag{F4.109}
\]

The forward field projection and reverse carrier reconstruction are therefore two directions of the same functional calculus.

### 23. Functorial covariance of the field

Let

\[
U:\mathfrak S\longrightarrow\mathfrak S'
\tag{F4.110}
\]

be a unitary spine morphism.  Thus

\[
UKU^*=K',
\qquad
UE_K(B)U^*=E_{K'}(B),
\qquad
Uh(K)U^*=h'(K'),
\tag{F4.111}
\]

and \(U\) transports \(\nu,\tau,\mathcal W,J\) and the typed residue.
Functional calculus gives

\[
\begin{aligned}
US_tU^*&=S_t',&
UU_tU^*&=U_t',&
UW_tU^*&=W_t',\\
U\Lambda_TU^*&=\Lambda_T',&
U\Gamma_TU^*&=\Gamma_T',&
(D_T,B_T)&=(D_T',B_T').
\end{aligned}
\tag{F4.112}
\]

Hence

\[
\boxed{
\mathfrak F:
\mathsf{Spine}_{1/2}^{\mathsf{CSCF}}
\longrightarrow
\mathsf{Fld}_{1/2}
}
\tag{F4.113}
\]

is a functor.  Gauge, basis, presentation and diffeomorphism changes
represented by (F4.111) cannot change a field budget or fingerprint.
If a proposed transformation fails (F4.111), it is a deformation of
the physical carrier and is governed by Section 18 rather than called
a redescription.

### 24. The dual-sector spectral fingerprint

For a pure-point window \(I\subset(0,\infty)\), define the paired
spectral measure

\[
\boxed{
\mathfrak fp_I
=\sum_{\lambda_n\in I}w_n
\,\delta_{(\lambda_n,\,\gamma\lambda_n,\,h(\lambda_n))}.
}
\tag{F4.114}
\]

For general spectrum it is the pushforward

\[
\mathfrak fp_I
=\bigl(\lambda\mapsto
(\lambda,\gamma\lambda,h(\lambda))\bigr)_*
(\nu|_I).
\tag{F4.115}
\]

Every decay/phase pair therefore lies on the graph

\[
\mathcal G_{h,\gamma}
=\{(\Gamma,\omega):
\Gamma=\gamma\lambda,
\ \omega=h(\lambda),\ \lambda\in\operatorname{spec}K\}.
\tag{F4.116}
\]

Equations (F4.114)--(F4.116) concern the poles of the canonical linear
response \(W_t\) or \(\chi\), equivalently its conditional amplitude
modes. A noncommuting Lindblad factorization may add channel-specific
population or dephasing rates. Those rates are separate coordinates of
the quantum representation and must be removed or modeled before the
paired-pole test is applied.

If \(\gamma>0\), elimination of \(\lambda\) gives the testable relation

\[
\boxed{
\omega=h(\Gamma/\gamma).
}
\tag{F4.117}
\]

Multiplicities, spectral weights and aperture-face couplings accompany
each point.  Dimensionless eigenvalue ratios

\[
r_{mn}=\lambda_m/\lambda_n
\tag{F4.118}
\]

are invariant under global scale calibration.  A cross-domain constant
belongs to the model's fingerprint only when it is a stable statistic
of (F4.114) under the declared readout class and carrier perturbations;
visual proximity to a constant is not a field equation.

#### Proposition F4.3 — common-carrier falsification criterion

Suppose observed modes admit assignments
\((\widehat\Gamma_n,\widehat\omega_n)\) with positive-definite
covariance \(\Sigma_n\).
For fixed aperture output \((h,\gamma)\), define

\[
\chi^2_{\rm pair}
=\inf_{\substack{\lambda_n\in\operatorname{spec}K\\
\text{admissible multiplicity-preserving matching}}}
\sum_n
\begin{pmatrix}
\widehat\Gamma_n-\gamma\lambda_n\\
\widehat\omega_n-h(\lambda_n)
\end{pmatrix}^{\!T}
\Sigma_n^{-1}
\begin{pmatrix}
\widehat\Gamma_n-\gamma\lambda_n\\
\widehat\omega_n-h(\lambda_n)
\end{pmatrix}.
\tag{F4.119}
\]

A statistically incompatible value rejects that carrier realization;
\(h\) and \(\gamma\) may not be refitted after the paired data are
opened because they were fixed by the aperture problems
(A3.64c)--(A3.64e).

### 25. Exact interface to the quantum-record sector

The field supplies a quantum-channel object only after a normal,
nondegenerate representation
\(\pi_Q:\mathcal W\to\mathcal B(\mathcal H_Q)\), a normal state and a
jump factorization have been selected. The representation must extend
to the selfadjoint operators affiliated with \(\mathcal W\); \(K_Q\)
and \(C_Q\) below denote the corresponding closed represented
operators, not the image of an unbounded operator under a merely
bounded-algebra homomorphism. Its type is

\[
\boxed{
\mathbb Q(\mathfrak F)
=\left(
\mathcal A^Q,
\rho,
C_Q,K_Q,
\{L_r\}\in\operatorname{Fact}_\gamma(K_Q),
\mathcal L_Q,
\kappa_{\Omega\to Q}
\right),
}
\tag{F4.120}
\]

where

\[
\mathcal A^Q
=W^*\bigl(\pi_Q(\mathcal W),f(K_Q),U_t,S_t,
\mathcal R^{\rm obs}\bigr),
\qquad
K_Q=\pi_Q(K),
\qquad
C_Q=\pi_Q(C).
\tag{F4.121}
\]

The lineage map is the composite

\[
\kappa_{\Omega\to Q}:
(X,m)\to\mathbb Y_{\rm ap}\to\mathfrak S
\to\mathfrak F\to\mathbb Q(\mathfrak F).
\tag{F4.122}
\]

The partial field-to-quantum functor is

\[
\operatorname{QRep}:
\mathsf{Fld}_{1/2}
\dashrightarrow
\mathsf{QChan}_1,
\tag{F4.123}
\]

whose domain consists of representations for which \(\rho\) is normal
and normalized, \(\mathcal L_Q\) generates a conservative completely
positive semigroup, the physical algebra is redescription invariant,
and spacelike channel composition satisfies the later locality
condition. Chapter 5 begins from (F4.120), rather than selecting
quantum dynamics independently of the carrier.

### 26. Recovery regimes

The principal field limits are commuting restrictions of the same
spectral calculus:

\[
\begin{array}{rcl}
\gamma\to0
&\Longrightarrow&
W_t\to U_t\quad\text{(closed coherent dynamics)},\\[0.3em]
h\to0
&\Longrightarrow&
W_t\to e^{-\gamma tK}\quad\text{(pure contraction)},\\[0.3em]
\gamma t\lambda\ll1
&\Longrightarrow&
W_t=e^{-ith(K)}[I-\gamma tK+O((\gamma tK)^2)],\\[0.3em]
t|h(\lambda)|\ll1
&\Longrightarrow&
W_t=e^{-\gamma tK}[I-it h(K)+O(t^2h(K)^2)],\\[0.3em]
\sup_{z\in\mathcal W_{\rm phys}}
\|V(K_D+z)^{-1}V^*\|\to0
&\Longrightarrow&
K_{\rm eff}(z)\to K_R\quad\text{(local Markovian carrier)},\\[0.3em]
\ell_A/L\to0
&\Longrightarrow&
\text{the lowest heat coefficients dominate the Tier-1 action}.
\end{array}
\tag{F4.124}
\]

The two Taylor expansions in (F4.124) are operator-norm statements on
fixed spectral cutoffs and strong statements on vectors with the
corresponding second spectral moments. They are not uniform expansions
over an unbounded spectrum.

On a local elliptic representation, \(h(\lambda)=c\lambda^{1/2}\)
gives a wave-like dispersion, while \(h(\lambda)=c\lambda\) gives a
Schrödinger-like dispersion.  These are different aperture-selected
symbol classes, not two meanings of the same equation.

For a two-parameter represented family
\(W_t^{(\hbar,\ell_A)}\), the small-aperture-scale expansion and the
quantum-to-classical limit commute when, on the common spectral core,

\[
\lim_{\hbar\to0}\lim_{\ell_A/L\to0}W_t^{(\hbar,\ell_A)}
=\lim_{\ell_A/L\to0}\lim_{\hbar\to0}W_t^{(\hbar,\ell_A)},
\tag{F4.125}
\]

which follows by dominated convergence whenever the two-parameter
spectral multipliers have a common integrable bound.  Otherwise the
order of limits is retained as physical data.

### 27. Field closure theorem

#### Theorem F4.4 — covariant dual-sector field and quantum handoff

Let \(\mathfrak S\) be emitted on the CSCF-eligible route.  Assume:

1. \(K\) is positive selfadjoint and \(h\) is the aperture-selected
   real Borel symbol;
2. the trace convention admits every requested logarithm;
3. the boundary and residue domains are invariant under the response
   calculus;
4. spine morphisms obey (F4.111);
5. a quantum representation, when requested, satisfies the domain of
   (F4.123).

Then the complete field (F4.109) exists as a covariant functor, its
retarded response is analytic in the upper half-plane, its exact
dissipative average reconstructs \(K\), its dual-sector fingerprint is
the pushforward (F4.115), and its quantum realization is the typed
object (F4.120).  No independent coherent generator, dissipative
capacity or quantum drift is introduced downstream.

**Proof.**  Theorems F4.1--F4.2 give generation and reconstruction.
Equations (F4.110)--(F4.113) give covariance.  The resolvent bound
(F4.56b) gives retarded analyticity.  Pushforward of the aperture
spectral measure gives (F4.115).  The factorization and conservativity
hypotheses give the quantum channel (F4.120).  Every component is
therefore transported from one admitted spine. \(\square\)

### 28. Simulation path through the field

The multiscale atlas exposes the field through the path

\[
\boxed{
(K,E_K,\nu)
\longrightarrow
\begin{cases}
\text{dissipative face }(S_t,\Lambda_T,D_T),\\
\text{coherent face }(U_t,\Gamma_T,B_T),
\end{cases}
\longrightarrow
W_t
\longrightarrow
\begin{cases}
\mathbb Q(\mathfrak F),\\
K_{\rm eff}(z),\\
\mathcal S_{\rm spec},\\
K_{\rm OS}.
\end{cases}}
\tag{F4.126}
\]

At every spectral point the displayed quantities are

\[
\left(
\lambda,
w(\lambda),
\gamma\lambda,
h(\lambda),
f_T(\lambda),
\operatorname{sinc}^2(Th(\lambda)/2),
\text{outgoing sector couplings}
\right).
\tag{F4.127}
\]

This is the complete field-level node object required for continuous
zoom from aperture spectrum to Tier-1 dynamics and back.
