# Section 21: Preparation and prewitness comparison

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

<a id="section-21"></a>

## 21 Preparation and prewitness comparison



Appendix [B](/quantum-measurement/research/nonequilibrium-records/appendix-b-preparation-estimates-and-transfer-to-the-enlarged-hamiltonian#prep:main) proves the preparation estimates used here. The writer's presence during preparation is paid by a remote-support Duhamel estimate and weighted oscillator hierarchy, from the original stock. It gives the handoff norm change below $2.768\times10^{-30}$, first moving-annihilator norm below $5.050\times10^{-24}$, and second annihilator norm below $1.229\times10^{-17}$. The strengthened handoff clock-error derivative is 

$$

 \|\partial_S^2(\Psi_{\rm new}-\Psi_{\rm old}g_0)\|
       <1.829\times10^{19}\,\mathrm m^{-2}.

$$

 The proof uses ordinary fourth spatial derivatives of the smooth preparation error, with nonzero Gaussian tails and cutoff derivatives retained. It never assumes the capped reference entrance belongs to a fourth radial Hamiltonian graph domain.

The preparation history itself is rederived with the original explicit Gaussian material rank $K(S,r)$. Its $Z$ derivative is zero, but its clock and radial currents are those of the new exact wave. Both phase restoration corrections are included. For $N=256001$ rank cuts, including the exterior ray, the preparation event and handoff conditional-CDF bridge are respectively below 

$$

 3.084950\times10^{-6},\qquad 6.1578014\times10^{-5}.

$$



For the later prefix, use the constant Galilean frame for both waves: $\Psi_b=e^{-{\mathrm i} MvS/\hbar+{\mathrm i} Mv^2t/(2\hbar)}\Psi$ and $H_b=H-{\mathrm i}\hbar v\partial_S$, with the identical scalar terms. Let $\psi_{\rm old}$ denote the exact old wave in that frame, with $\psi_{{\rm old},i}=\Pi_i\psi_{\rm old}$ including its qubit coefficient. Define the normalized Weyl comparison $G_*=V(S)(\psi_{\rm old}g_0)$, with sector-one factor 

$$

 \gamma_1(s,Z)=\pi^{-1/4}
 \exp\!\left[-(Z-b)^2/2+{\mathrm i}\mu_Z b'(Z-b/2)\right]

$$

 and sector-zero factor $g_0$. Direct differentiation gives the exact residual 

$$

 (H_b-{\mathrm i}\hbar\partial_t)G_*
 =-\frac{\hbar^2}{2M}\sum_i
       \left(2\psi_{{\rm old},i,S}\gamma_{i,S}
                       +\psi_{{\rm old},i}\gamma_{i,SS}\right).

$$

 It is supported only on the pulse. The displaced stationary plateau has no residual source. Keeping the entire old clock tail and the leading edge of its characteristic stock gives 

$$

\sup_{t_h\leq t\leq t_a}\|\Psi_{
 \rm new,b}-G_*\|<5.056\times10^{-22}.

$$

 This norm estimate is not used as a trajectory-agreement assertion.

For $\delta=\Psi_{\rm new,b}-G_*$, two fixed left localizations and the oscillator moment hierarchy give 

$$

 \sup\|\delta_S\|\leq0.1\,\mathrm m^{-1},\qquad
 \sup\|\delta_{SS}\|<1.118\times10^{21}\,\mathrm m^{-2}.

$$

 The differentiated residual includes the coefficients $1,5/2,2,1/2$ on $\gamma_S\psi_{SSS}$, $\gamma_{SS}\psi_{SS}$, $\gamma_{SSS}\psi_S$, and $\gamma_{SSSS}\psi$. Its old-wave input is 

$$

 \int_{t_h}^{t_a}\|\psi_{{\rm old},SSS}\|{\,\mathrm d} t
                <9.747\times10^{46}\,\mathrm{s/m^3}.

$$

 On the remote preparation-force support the characteristic helper is identically zero, so propagation of this third clock derivative uses the already bounded old *error* derivatives there. All activation terms elsewhere remain.
