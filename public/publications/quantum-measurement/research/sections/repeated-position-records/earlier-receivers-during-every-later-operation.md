# Section 8: Earlier receivers during every later operation

<!-- 9 October 2026 publication, PDF-reconciled conversion source. Mathematical macros used below:
\TV = \operatorname{TV}
\tr = \operatorname{tr}
\id = \operatorname{id}
\dd = \,\mathrm d
-->

<a id="section-8"></a>

## 8 Earlier receivers during every later operation

 <a id="p2r:sec:hold"></a>

Once receiver $z$ has been written, the prescribed parent has <a id="p2r:eq:spectator"></a>


$$

 H(\tau)=H_A(z)\otimes I+I\otimes H_{\rm rest}(\tau).

$$

Equation (8.1).

 The rest includes all later scratch/archive operations, all unused receivers, used and unused reset modes, earlier records, and retained reference systems. No bath is sampled or removed. The actual pointwise receiver velocity can depend on that rest. The following bound controls it through the full wave.

Define <a id="p2r:eq:holdcmp"></a>
<a id="p2r:eq:holderror"></a>


$$
\begin{aligned}F_{\rm ch}(\Theta)
 &=100\Theta(A+1)^2e^{-A^2/12},\\
 F_{\rm eh}(\Theta)
 &=720G\left(h_g\Theta+\tfrac12B_A\Theta^2\right)
 \\
 &\quad+5400\left(h_g^2\Theta+h_gB_A\Theta^2+
                              \tfrac13B_A^2\Theta^3\right).
 
\end{aligned}
$$

Equation (8.2, 8.3).





**Proposition 8.1 (Held-region current with arbitrary spectators).**

 <a id="p2r:prop:hold"></a> Under [(8.1)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:spectator), the actual probability that a written receiver crosses either physical boundary $z=\pm A/2$ during an interval of length at most $\Theta$ is at most $C[F_{\rm ch}(\Theta)+F_{\rm eh}(\Theta)]$. The constants do not acquire a factor depending on the number of spectator coordinates. 

 

**Proof.**

View the full wave as a function of $z$ with values in the rest Hilbert space. Every $z$-independent unitary preserves both $\|F(z)\|$ and $\|\partial_zF(z)\|$. In particular <a id="p2r:eq:slicecurrent"></a>


$$

 \int_{\rm rest}|j_z(z,q_{\rm rest})|\,dq_{\rm rest}
       \leq2\|F(z)\|\|\partial_zF(z)\|

$$

Equation (8.4).

 has a spectator-invariant upper bound. This uses full Hilbert slice norms, not a putative pure phase for a reduced mixed state.

Propagate each final comparison branch with its own centered harmonic well in $z$ and exactly the same $U_{\rm rest}$ as the true evolution. Its slice norms may equivalently be evaluated with the original harmonic spectator evolution of the two-coordinate Gaussian. The strict tube [(6.3)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:endtube) is then available for the entire hold. At each boundary the branch slice density is at most $\frac12e^{-A^2/12}$, because its nearer center is at least $.45A$ away and its variance is at most $1.1$. Conditioning the joint Gaussian on $z$ bounds its derivative slice norm by $10(A+1)$ times its amplitude slice norm: the normal displacement is at most $31A/20$, the normal variance is at least $.9$, and the conditional tangential derivative second moment is bounded using $\|\Sigma^{-1}\|\leq10/9$, $\|B\|\leq.2$, and $|p|\leq A/20$. The elementary conditional normal formula gives a constant smaller than $3(A+1)$; the displayed $10$ is an outward reserve. Coherent summation in [(8.4)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:slicecurrent) therefore bounds the two boundary currents by $40(A+1)e^{-A^2/12}$ per unit time, which is below the coefficient in [(8.2)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holdcmp).

For the true-minus-comparison error use the partial positive graph $K_z=H_A(z)+c$. It commutes with every rest unitary. At the gate endpoint its norm is bounded by $h_g$, because $K_z$ is dominated in norm by the commuting positive full graph $H_A(z)+H_{\rm o}(x)+c$. The forcing is $D_s(z)$ times each comparison branch. Its $K_z$ norm also commutes through $U_{\rm rest}$ and is no larger than the full positive Gaussian graph norm already bounded by $B_A$. Duhamel in this static partial graph gives 

$$

 \|K_zE(t)\|\leq h_g+tB_A.

$$

 The one-coordinate form of [(6.8)](/quantum-measurement/research/repeated-position-records/a-smooth-scalar-gate-which-copies-the-entry-sign#p2r:eq:graphidentity) gives receiver words through degree two bounded by $15(h_g+tB_A)$; the comparison receiver words are bounded by $G$. No spectator derivative is taken.

At one fixed plane the Hilbert-valued trace and current expansion used above give $24KG+12K^2$ for $K=15(h_g+tB_A)$. Two planes give $48KG+24K^2$. Integrating this polynomial in $t$ yields exactly [(8.3)](/quantum-measurement/research/repeated-position-records/earlier-receivers-during-every-later-operation#p2r:eq:holderror). Coarea, equivariance and the original complete cap finish the bound. No cap conditional on the receiver's selected sign is used. 

□
