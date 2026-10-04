# Section 4: Binary species and contact geometry

<!-- 4 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\E = \mathbb E
\Prb = \mathbb P
\Law = \operatorname{Law}
\TV = d_{\mathrm{TV}}
\dd = \,\mathrm d
\Var = \operatorname{Var}
\ket = |#1\rangle
\bra = \langle#1|
\tr = \operatorname{tr}
\supp = \operatorname{supp}
-->

<a id="section-4"></a>

## 4 Binary species and contact geometry

<a id="sec:contacts"></a> 

<a id="section-4-1"></a>

### 4.1 Routing from a declared charge spectrum

 A carrier at $r$ has vector charge $e_r$. A positive packet on $e=(r,q)$ has charge $b_e=e_q-e_r$, a negative packet has $-b_e$, and spent slots and products are neutral. The elementary service consumes one packet and changes one carrier into one carrier. All other participants are neutral. Then 

$$

 e_i+e_q-e_r=e_j

$$

 forces $i=r,j=q$: otherwise the coefficient of $e_r$ on the left is negative. Thus the two possible services are <a id="eq:service"></a>


$$
P_e^++C_a@r\longrightarrow C_a@q+\mathrm{spent},\qquad
 P_e^-+C_a@q\longrightarrow C_a@r+\mathrm{spent}.
 

$$

Equation (7).

 Opposite packets can recombine to neutral products. This is routing from stoichiometry and charge, not from the sign of an instantaneous current. Charge does not derive completeness of the binary species list. Charged receivers, multipacket conversion and multicarrier moves would define other theories.

Writing $n_r=\#\{a:X_a=r\}$ and $Z_e=P_e^+-P_e^-$, the complete hybrid inventory <a id="eq:charge"></a>


$$
\mathcal C=n+BZ+Bu-Nw
 

$$

Equation (8).

 is conserved. Between events $\dot u=NJ$ and $\dot w=BJ$ cancel. A signed export changes $u_e$ by $-s$ and $Z_e$ by $s$; service changes $n$ by $sb_e$ and $Z_e$ by $-s$; recombination changes neither $n$ nor $Z$. For the zero-residue initialization, $\mathcal C=n(0)-Nw(0)$; a nonzero initial residue adds $Bu(0)$ to this constant. This is an exact inventory identity, not an unsupported claim that the whole hybrid theory has a common Noether action.



<a id="section-4-2"></a>

### 4.2 Deterministic candidate contacts

 Allocate a fixed channel for every potential pair $(e,b,a)$ of packet slot and carrier, with frequency parameter $r_{eba}=\kappa_e\mu_N/N$. Allocate a channel for every unordered pair of slots on edge $e$, with parameter $a_e>0$. A contact tests only the current species and carrier vertex. An eligible service implements [(7)](/quantum-measurement/research/hybrid-bell-paths/binary-species-and-contact-geometry#eq:service); opposite slot species recombine and retain their signs and identities in the outgoing product; other contacts are null. The total candidate frequency is <a id="eq:candidate"></a>


$$
R_N=\sum_e\left(\kappa_e\mu_NB_e+a_e\binom{B_e}{2}\right).
 

$$

Equation (9).

 If the graph has no off-diagonal bonds, $R_N=0$, no beam is needed and the ordinary configuration is constant. Otherwise $R_N>0$. Partition a transverse cross-section into cells of relative areas $r_c/R_N$ for these channels. All frequencies and areas are fixed independently of $\Psi,w,J$ and the future material history. The scalar $\kappa_e$ expresses equal response for all carriers on that bond. There is no rule suppressing a minority packet's service.

Prepare $M_N$ distinguishable pilot particles with independent positions uniform on $[-L_N,0]$, equal speed $v>0$, and independent uniform transverse coordinates. Put $L_N=M_Nv/R_N>vT$. Each incoming particle freely crosses the contact plane once, at $t_i=-z_i/v$, and its transverse coordinate selects a channel. Its outgoing state and blank receiver are retained. The microdynamics from all initial coordinates is deterministic.
