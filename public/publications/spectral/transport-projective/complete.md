# Transport and Projective Reduction in a Source–Readout Derivation of Einstein Gravity

Reconstruct the affine connection from smooth transport, remove the projective ambiguity with a volume-restored observable, and follow the complete off-shell spin-two bootstrap to Einstein–matter dynamics within the admitted realization.

Jeremy Rodgers · 2026-11-04

DOI: https://doi.org/10.5281/zenodo.23954887



## The gravitational recovery problem

<a id="abstract"></a>
## From transport to Einstein gravity

A source realization of gravity must recover the operations that produce the field equations. This construction does so for the complete massless spin-two bootstrap. Smooth path transport supplies the local connection. The unrestricted affine action eliminates nonprojective distortion, and a volume-restored readout removes the projective ambiguity from the transport. On the quotient, a full stress identity and an exact off-shell residual recover the nonlinear Einstein–matter system.

The result separates three jobs: admit a source support, realize physical variables and operations on that support, and select a physical law for the resulting sector. The first two jobs permit the third without deciding it. Competing dimensions, signatures, actions and matter couplings expose the remaining selection problem. The exact algebra and finite numerical checks test the construction and its failure modes; the proofs establish the smooth-field results.

<a id="section-1"></a>
## 1. What a complete recovery has to include

A relation between two named actions leaves open whether the source supports the current, the allowed variations, the connection equation, the matter response and the nonlinear equations on one witness. Recovery has to provide all of those together. Selection asks a further question: which of the recovered features follow from the source principles rather than from additional physical premises?

Deser's [original derivation](https://doi.org/10.1007/BF00759198) and [later account](https://doi.org/10.1007/s10714-009-0912-9) start with a free massless spin-two field coupled to its total symmetric stress. Contravariant metric density and independent affinity make the interaction cubic. The derivative part of the current arises from the nonlinear density–connection relation; inserting the entire current directly into the action would miss the mechanism that closes the bootstrap in one step. The result is Einstein gravity with universal metric coupling in the stated matter class.

The construction places that full chain inside the [source–readout architecture](https://doi.org/10.5281/zenodo.21366204). An admitted source, its literal finite preparation and a physical raw-sector construction have different roles. Their lift is a common-witness homotopy fibre. The [geometric descent](https://doi.org/10.5281/zenodo.21370985) and [observable quotient](https://doi.org/10.5281/zenodo.21371251) papers give related contracts.

Three results control the recovery:

1. Smoothness of multiplicative transport at constant paths implies a local, velocity-linear first jet and supplies finite-resolution bounds. The [connection–transport correspondence](https://arxiv.org/abs/0705.0452v5) is established mathematics; here the functional-analytic argument fixes the regularity and error conditions used by the realization.
2. The connection need not start torsion free. The classical [Einstein–Palatini projective freedom](https://doi.org/10.1007/s10714-012-1393-9) is handled by an explicit volume-restored observable. The connection equation then recovers Levi–Civita transport on shell.
3. The full stress and bootstrap extend to the affine quotient. The controlled kernel lets the source residuals yield the complete second-order residual off shell, as well as the Einstein–matter equations on shell.

Constant-path regularity is a realization condition. The quotient requires an observable choice because bare vector transport changes under projective shifts. Minimal scalar coupling follows in a specified natural, metric-ultralocal quadratic class; common-density coupling alone permits a curvature term. The [dependency ledger](/source-readout/transport-projective/07-what-the-source-selects#table-1) traces each such premise. Target-neutral source principles by themselves do not determine dimension, signature, action or coupling.

The construction is classical and local on a prepared smooth chart. It covers finite integration patches and compactly supported relative action variations. The gravitational fields, matter, path operations and boundary restrictions share one witness. Four-dimensional Lorentzian physics and the free spin-two law are declared inputs. Arbitrary source fibres, quantum measures and a global all-sector equalizer remain separate questions.

<a id="section-1-1"></a>
### 1.1 Conventions and units

Use an oriented four-dimensional chart $U$, signature $(-,+,+,+)$ and natural units. The dimension $n\gt2$ will enter the affine algebra. The first lower index of the unrestricted connection is the differentiation direction.

<a id="eq-1"></a>

$$
(A_\mu)^\alpha{}_\beta=\Gamma^\alpha{}_{\mu\beta},\qquad
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu+[A_\mu,A_\nu],\qquad
R_{\mu\nu}=F^\alpha{}_{\mu\alpha\nu}.
\tag{1}
$$

The Ricci notation in [(1)](/source-readout/transport-projective/01-the-gravitational-recovery-problem#eq-1) denotes $(F_{\alpha\nu})^\alpha{}_\mu$. A symmetric density couples to $R_{(\mu\nu)}$. The extended parent has no lower-index symmetry. Contractions sum over the full index ranges, and derivatives in symmetric coordinates carry the appropriate off-diagonal multiplicities.

Write $B^{\mu\nu}=vg^{\mu\nu}$, $v=\sqrt{|\det g|}$. Choose the normalized Cartesian reference density $\eta^{\mu\nu}=\operatorname{diag}(-1,1,1,1)$; its volume density is one. Raise and lower reference indices with $\eta$ and its inverse. Use a fixed induced operator norm in the prepared frames, which also bounds individual entries. In four dimensions,

<a id="eq-2"></a>

$$
B=\eta+\lambda h,\qquad A=\lambda c,\qquad
v=\sqrt{-\det B},\qquad g^{\mu\nu}=B^{\mu\nu}/v .
\tag{2}
$$

Here $\lambda\ne0$ restores the canonical coupling. The canonical affinity $c$ has dimension $\mathrm{length}^{-2}$ and is unrelated to signal speed. The physical coupling will be $\kappa_E=\lambda^2/2$.



## Source support, preparation and common witnesses

<a id="section-2"></a>
## 2. Admitted support and realized variables

<a id="section-2-1"></a>
### 2.1 A native source family

The [source signature](https://doi.org/10.5281/zenodo.21366204) in monograph Chapter 2 has a dependency preorder, deposition-potential tokens, a marked subsort, finite supports, lineage, invariants and intrinsic boundary data. It contains no metric, coordinates, fields, action or preferred outcome. Admission is the least closure of a finite witness class under strong generated maps, generator-relative attachments, suitable retracts, stabilizing directed colimits and isomorphisms. Strong maps retain strict marked pairs and their lineages.

The walking marked dependency $X_\star$ is explicitly in the witness class. Its vertices satisfy $0\prec1$, with one marked token supported on $\{0,1\}$. Its proper predecessor-closed root face is $F_0=\{0\}$. An attachment domain need not have a marked token or itself be an admitted source candidate.

<a id="proposition-2-1"></a>
**Proposition 2.1 (Admitted walking-cell support).** For every nonempty small index set $I$, the rooted fan $X_I$ is admitted by the stated closure. It consists of a root $r$, distinct leaves $\ell_i$, dependencies $r\prec\ell_i$, and copies of the walking marked token on supports $\{r,\ell_i\}$. Invariant and lineage data are inherited from the walking cells.

**Proof.** Attach a fresh cell at its root face to the inherited root. The finite pushout consists exactly of the common root and distinct leaf and cell copies: maps agreeing on the root extend uniquely. Transitivity adds no dependency between leaves. Each marked support keeps its two distinct elements, its strict pair and inherited lineage. The root-face map is strong and mark-reflecting, and all old cell data are unchanged. These are the source conditions for these attachments, proving finite admission by induction.

Take the directed family of finite nonempty subsets of $I$. Once a finite cell appears, every later inclusion leaves its support, strict pair, lineage and invariant data unchanged. The allowed stabilizing directed colimit is precisely $X_I$. A permutation of $I$ is a source isomorphism. Only the existing walking cells are used, with no freely adjoined physical label.

The fan gives an admission presentation. Branch labels supply neither spatial nor temporal calibration, and the proof assumes no raw physical law for the support.

<a id="section-2-2"></a>
### 2.2 What the literal preparation contains

For a fixed marked token $m_\star$, take the literal preparation of monograph equations (3.1)–(3.2).

<a id="eq-3"></a>

$$
Y=J_{\mathrm{real}}(X_I,m_\star)
=(X_I,m_\star,S_{m_\star},\preceq_{m_\star},\ell_{m_\star},
\mathrm{Inv}_{m_\star},\mathrm{Bnd}_{m_\star}).
\tag{3}
$$

$S_{m_\star}$ and its inherited data are the finite lineaged support, and $X_I$ is its admitted ambient source. Physical fields belong to a raw-sector relation instead.

<a id="eq-4"></a>

$$
K_{\mathrm{grav}}(Y)\subseteq O^{\mathrm{raw}}_{\mathrm{grav}}\times D_{\mathrm{grav}} .
\tag{4}
$$

The discrepancy column retains both zero and nonzero equation, composition and interface residuals. Einstein solutions do not define source admission.

A physical preparation supplies $U$, coordinate and tangent frames, the path family, reference density, coupling and boundary convention. A bare marked-occurrence assignment $\beta$ covers the prepared piecewise smooth paths, subarcs, reversals and compositions. Whole occurrences are assigned to paths. This assignment does not send the shared abstract root to every physical endpoint; endpoint coincidences and composition belong to the raw sector.

<a id="eq-5"></a>

$$
z=(\beta,T,B,\chi,\mathrm{preparation},\mathrm{residuals}),\qquad
T_\gamma:T_xU\longrightarrow T_yU\quad(\gamma:x\to y).
\tag{5}
$$

The field $B$ is a smooth section of $\operatorname{Sym}^2TU\otimes\operatorname{Dens}(U)$ on a nondegenerate Lorentz branch. The chosen metric matter is denoted by $\chi$. Transport is invertible, multiplicative, reparameterization invariant and the identity on constant paths. The [regularity chapter](/source-readout/transport-projective/03-regular-transport#theorem-3-1) gives the precise smoothness contract.

This explicit realization rule retains off-shell histories with their residuals. The smooth manifold, transport class, density and action are inputs of [(4)](/source-readout/transport-projective/02-source-support-and-preparation#eq-4). Their placement there preserves target neutrality at the level of the source signature and keeps physical selection visible.

<a id="section-2-3"></a>
### 2.3 Recover operations on one common witness

Let $\mathrm{Comp}_{\mathrm{GR}}$ have metric, connection, stress and matter configurations as objects with their compatibility equations. Its arrows are allowed gauge transformations. Let $E_{\mathrm{GR}}$ consist of the admitted fan, its preparation and histories [(5)](/source-readout/transport-projective/02-source-support-and-preparation#eq-5), with arrows preserving these data and readouts. The projection $\pi$ reconstructs $A[T]$ and $g_B$ and evaluates the stress and matter maps. A witness for a physical configuration $O$ is a history $z$ together with an isomorphism $\phi:\pi(z)\simeq O$.

<a id="eq-6"></a>

$$
\operatorname{Lift}(O)=E_{\mathrm{GR}}^{\simeq}
\times_{\mathrm{Comp}_{\mathrm{GR}}^{\simeq}}^{h}\{O\}.
\tag{6}
$$

This instantiates the monograph's common-witness definition in §1.3.3. Density, transport, matter, the action, its variations and the stress response all belong to the same history. The projection, inverse and variation calculations in §§3–6 establish complete solution coverage in the declared branch. They do not classify other possible source antecedents of $O$.



## Regular transport reconstructs a connection

<a id="section-3"></a>
## 3. Transport regularity and resolution

<a id="section-3-1"></a>
### 3.1 Smoothness at constant paths forces the first jet

Use the prepared trivialization to represent transports as matrices. Around a constant path, $C^1([0,1],U)$ is an open part of a Banach space. The differentiability in the next statement is in its $C^1$ norm and includes constant paths. Smoothness restricted to immersed paths is weaker.

<a id="theorem-3-1"></a>
**Theorem 3.1 (Regular transport reconstruction).** Suppose $T$ is multiplicative on successive subarcs, the identity on constants and invariant under orientation-preserving reparameterization. Suppose $T$ is continuously Fréchet differentiable on open $C^1$ neighborhoods of the constants, with $x\mapsto DT_{\mathrm{const}(x)}$ smooth as a map into bounded linear operators. Assume the corresponding joint higher differentiability for the parameterized variations and derivatives below. Then a smooth matrix-valued one-form $A$ generates the transport:

<a id="eq-7"></a>

$$
\frac{d}{ds}T_{\gamma|_{[0,s]}}
=-A_{\gamma(s)}(\dot\gamma(s))T_{\gamma|_{[0,s]}},
\qquad T_{\gamma|_{[0,0]}}=I.
\tag{7}
$$

The first jet depends only on the current point and velocity and is linear in velocity. Conversely a smooth $A$ defines a smooth transport family of this kind. These constructions are inverse on the regular class.

**Proof.** At the constant path at $x$ set

<a id="eq-8"></a>

$$
A_x(v)=-DT_{\mathrm{const}(x)}[t\mapsto tv].
\tag{8}
$$

The Fréchet derivative is linear on the tangent space, so this is linear in $v$. For a $C^2$ curve its actual short subarc satisfies

<a id="eq-9"></a>

$$
\gamma(s+\epsilon t)=\gamma(s)+\epsilon t\dot\gamma(s)+O(\epsilon^2)
\qquad\text{in } C^1([0,1]).
\tag{9}
$$

Differentiability gives $T_{\gamma|_{[s,s+\epsilon]}}=I-\epsilon A_{\gamma(s)}(\dot\gamma(s))+o(\epsilon)$. Continuity of the derivative makes the remainder uniform on compact short-path families. Composition gives continuity of $s\mapsto T_{\gamma|_{[0,s]}}$ and the right derivative [(7)](/source-readout/transport-projective/03-regular-transport#eq-7), whose right-hand side is continuous. The integral equation follows and gives the ordinary derivative. Compose across pieces for piecewise smooth paths.

Conversely solve the matrix integral equation of [(7)](/source-readout/transport-projective/03-regular-transport#eq-7). Its Picard series converges uniformly on compact path images, with its $j$th iterated integral bounded by $M^j/j!$ for a suitable integrated generator bound. Uniqueness gives composition, reversal and reparameterization invariance. In a compact controlled path neighborhood, the Nemytskii map $\gamma\mapsto A(\gamma)\dot\gamma$ has the regularity of $A$. Differentiating the integral equation or its uniformly bounded series gives the required path-space smoothness. The generator is [(8)](/source-readout/transport-projective/03-regular-transport#eq-8), and uniqueness gives the inverse identity for every family in the class.

This local sufficient condition realizes the established connection–transport correspondence [Schreiber and Waldorf, 2009](https://arxiv.org/abs/0705.0452v5). It removes a separate first-jet postulate within the regular model. The smoothness remains raw-sector data.

<a id="proposition-3-2"></a>
**Proposition 3.2 (Regularity obstruction).** Composition, reversal and reparameterization invariance alone admit a nonlinear velocity law. In two coordinate directions take

<a id="eq-10"></a>

$$
F(v,w)=\frac{v^3}{v^2+w^2}\quad((v,w)\ne0),\qquad F(0,0)=0,\qquad
T_\gamma=\exp\left[-\int F(\dot\gamma^1,\dot\gamma^2)\,ds\right]I.
\tag{10}
$$

The family has all three algebraic properties and is smooth on controlled immersed-path neighborhoods, but fails the required Fréchet differentiability at constants.

**Proof.** $F$ is odd and positively homogeneous of degree one, giving reversal and reparameterization invariance. Additivity of the integral gives composition. At a constant path, the straight variation $t\mapsto t(v,w)$ would have directional derivative $-F(v,w)I$. Since $F(1,1)=1/2$ and $F(1,0)+F(0,1)=1$, these values cannot come from a linear Fréchet derivative.

<a id="section-3-2"></a>
### 3.2 The variations and curvature also descend

For compactly supported $\delta A$, differentiating [(7)](/source-readout/transport-projective/03-regular-transport#eq-7) gives

<a id="eq-11"></a>

$$
\delta T_\gamma(1)=-\int_0^1 T_\gamma(1,s)
\,\delta A_\mu(\gamma(s))\dot\gamma^\mu(s)\,T_\gamma(s,0)\,ds.
\tag{11}
$$

Its infinitesimal readout is $\delta A$. Conversely, differentiate the reconstructed transport equation in a jointly smooth one-parameter family. The tangent satisfies the inhomogeneous equation with zero initial value, whose unique solution is [(11)](/source-readout/transport-projective/03-regular-transport#eq-11). Every regular tangent transport variation comes from its generator variation. Commuting the parameter derivative with the short-path derivative uses the stipulated joint second differentiability.

Compose the four transports around a positively oriented small coordinate rectangle. Expansion of the two-parameter integral equations gives

<a id="eq-12"></a>

$$
T_{\square_{\mu\nu}}=I-F_{\mu\nu}\Delta x^\mu\Delta x^\nu
+O\left((\Delta x^\mu)^2\Delta x^\nu+\Delta x^\mu(\Delta x^\nu)^2\right).
\tag{12}
$$

The ordered products generate the commutator. For constant matrices the loop order is $e^{A_\nu t}e^{A_\mu s}e^{-A_\nu t}e^{-A_\mu s}$, whose mixed coefficient is $-[A_\mu,A_\nu]$. This fixes the sign. Endpoint derivatives and small-loop limits recover the differential and nonlinear connection operations.

<a id="section-3-3"></a>
### 3.3 Transport error and curvature error need different control

<a id="proposition-3-3"></a>
**Proposition 3.3 (Finite-resolution transport).** With bounded second path derivatives on the relevant neighborhood and a $C^2$ path $\gamma$, the subarc defect obeys

<a id="eq-13"></a>

$$
\left\|T_{\gamma|_{[s,s+h]}}-I+hA(\gamma(s))\dot\gamma(s)\right\|\le Ch^2 .
\tag{13}
$$

The first two derivatives of $T$ and $\gamma$ control $C$. If the generator along an interval of length $L$ has norm at most $M$, the left-endpoint product on a partition of mesh $h_{\max}$ satisfies

<a id="eq-14"></a>

$$
\left\|T_\gamma-\overset{\leftarrow}{\prod}_j
[I-h_jA(\gamma(s_j))\dot\gamma(s_j)]\right\|
\le CLh_{\max}e^{ML}.
\tag{14}
$$

**Proof.** Apply Taylor expansion to the Fréchet map using [(9)](/source-readout/transport-projective/03-regular-transport#eq-9). This gives [(13)](/source-readout/transport-projective/03-regular-transport#eq-13). Each exact subarc transport and Euler factor has norm at most $e^{Mh_j}$. Telescope the ordered products. The factors surrounding each local defect contribute at most $e^{ML}$ and $\sum_j h_j^2\le Lh_{\max}$.

With measured short-transport error at most $\epsilon$ and forward first-jet remainder at most $Kh^2$, the estimated generator satisfies

<a id="eq-15"></a>

$$
\|\widetilde A_h-A\|\le \epsilon/h+Kh.
\tag{15}
$$

At an admissible optimizing scale the bound is $2\sqrt{K\epsilon}$. With a controlled third derivative, a centered difference gives $\epsilon/h+K_3 h^2$ and optimized order $\epsilon^{2/3}$. These bounds price differentiation. They do not assume exact finite localization or an available instrument.

Curvature also needs spatial derivative control. Let $E=\widetilde A-A$, with $\max_\mu\|A_\mu\|\le M$, $\max_\mu\|E_\mu\|\le\delta_0$ and $\max_{\mu,\nu}\|\partial_\mu E_\nu\|\le\delta_1$. Then

<a id="eq-16"></a>

$$
\|F_{\mu\nu}(\widetilde A)-F_{\mu\nu}(A)\|
\le2\delta_1+4M\delta_0+2\delta_0^2.
\tag{16}
$$

Expand the derivative and the three commutator differences and use submultiplicativity. Component Ricci errors introduce at most the additional contraction factor $n$. This is a local residual estimate; the nonlinear Einstein initial-value problem has a different stability question.

The derivative hypothesis cannot be dropped. In a flat chart choose only $\Gamma^0{}_{11}=\sin(kx^0)/k$ nonzero. It is torsion free and its generator tends uniformly to zero. Transports approach identity on bounded-length path families, but $R_{11}(0)=1$ for every $k$. Along $x^0=x^1=s$, $0\le s\le1$, the transport error is at most $2/k^2$ because the generator is a fixed nilpotent matrix times $\sin(ks)/k$. Small uniform transport errors therefore do not certify small gravitational residuals.



## Projective reduction recovers metric transport

<a id="section-4"></a>
## 4. The unrestricted affine connection

<a id="section-4-1"></a>
### 4.1 Fix the curvature convention before varying

For unrestricted $\Gamma^\alpha{}_{\mu\beta}$, equation [(1)](/source-readout/transport-projective/01-the-gravitational-recovery-problem#eq-1) gives

<a id="eq-17"></a>

$$
R_{\mu\nu}(A)=
\partial_\alpha\Gamma^\alpha{}_{\nu\mu}-\partial_\nu\Gamma^\alpha{}_{\alpha\mu}
+\Gamma^\alpha{}_{\alpha\rho}\Gamma^\rho{}_{\nu\mu}
-\Gamma^\alpha{}_{\nu\rho}\Gamma^\rho{}_{\alpha\mu}.
\tag{17}
$$

Order matters. Extending the familiar symmetric-affinity contraction
$\Gamma^\alpha{}_{\mu\nu}\Gamma^\beta{}_{\alpha\beta}-\Gamma^\alpha{}_{\beta\mu}\Gamma^\beta{}_{\alpha\nu}$
without its lower-index symmetry gives a different polynomial. For $\Gamma^\alpha{}_{\mu\beta}=\delta^\alpha_\beta\omega_\mu$ that polynomial is $(n-1)\omega_\mu\omega_\nu$, whereas the quadratic term of [(17)](/source-readout/transport-projective/04-projective-connection#eq-17) vanishes.

Define the symmetric operators

<a id="eq-18"></a>

$$
D_{\mu\nu}(c)=\operatorname{Sym}_{\mu\nu}
(\partial_\alpha c^\alpha{}_{\nu\mu}-\partial_\nu c^\alpha{}_{\alpha\mu}),
\tag{18}
$$

<a id="eq-19"></a>

$$
Q_{\mu\nu}(c)=\operatorname{Sym}_{\mu\nu}
(c^\alpha{}_{\alpha\rho}c^\rho{}_{\nu\mu}-c^\alpha{}_{\nu\rho}c^\rho{}_{\alpha\mu}).
\tag{19}
$$

Then $R_{(\mu\nu)}(\lambda c)=\lambda D_{\mu\nu}(c)+\lambda^2Q_{\mu\nu}(c)$. With symmetric lower indices these reduce to Deser's contractions.

<a id="section-4-2"></a>
### 4.2 The full affine Hessian has just the projective kernel

Take $\int B^{\mu\nu}R_{\mu\nu}(A)$ with nondegenerate metric density and matter independent of $A$. Write

<a id="eq-20"></a>

$$
A=\mathrm{LC}(g)+C,\qquad
C\in\Gamma(TU\otimes T^*U\otimes T^*U).
\tag{20}
$$

Since $\nabla^g B=0$, the linear terms in $\nabla^g C$ integrate to the matched boundary current. The bulk distortion action is

<a id="eq-21"></a>

$$
q_B(C)=B^{\mu\nu}
\left(C^\alpha{}_{\alpha\rho}C^\rho{}_{\nu\mu}
-C^\alpha{}_{\nu\rho}C^\rho{}_{\alpha\mu}\right).
\tag{21}
$$

All non-gauge distortions are auxiliary variables. There is no new connection wave.

<a id="theorem-4-1"></a>
**Theorem 4.1 (General affine stationary connection).** For smooth nondegenerate metric density in dimension $n\gt2$, the stationary points of [(21)](/source-readout/transport-projective/04-projective-connection#eq-21) are exactly

<a id="eq-22"></a>

$$
C^\alpha{}_{\mu\beta}=\delta^\alpha_\beta\omega_\mu.
\tag{22}
$$

The Hessian has rank $n^3-n$ independently of signature. With metric matter the connection equation gives $A=\mathrm{LC}(g)+I\omega$.

**Proof.** At a point divide by $v$ and vary the independent component $C^\ell{}_{pq}$. The equation is

<a id="eq-23"></a>

$$
\delta^p_\ell g^{mn}C^q{}_{nm}+g^{pq}C^a{}_{a\ell}
-g^{mp}C^q{}_{\ell m}-g^{qn}C^p{}_{n\ell}=0.
\tag{23}
$$

Lower the first index of $C$, and put $U_a=g^{bc}C_{abc}$ and $V_b=g^{ac}C_{cab}$. Lowering $p,q$ gives

<a id="eq-24"></a>

$$
C_{abc}+C_{cab}=g_{bc}U_a+g_{ca}V_b.
\tag{24}
$$

Combine the three cyclic equations to obtain

<a id="eq-25"></a>

$$
2C_{abc}=g_{bc}(U_a-V_a)+g_{ca}(U_b+V_b)+g_{ab}(V_c-U_c).
\tag{25}
$$

Its $b,c$ trace gives $(n-2)(U_a-V_a)=0$. Thus $U=V$ and $C_{abc}=g_{ac}V_b$, which is [(22)](/source-readout/transport-projective/04-projective-connection#eq-22). Conversely direct substitution satisfies each equation. The kernel of the quadratic form has exactly the $n$ projective directions, which proves the rank. No definiteness enters the argument.

The [classical projective equivalence](https://doi.org/10.1007/s10714-012-1393-9) leaves raw torsion $\delta^\alpha_\nu\omega_\mu-\delta^\alpha_\mu\omega_\nu$ and permits a non-metric-compatible raw connection. It does not say the unrestricted stationary connection is uniquely Levi–Civita.

<a id="section-4-3"></a>
### 4.3 Restore volume in the transport readout

Under a projective shift,

<a id="eq-26"></a>

$$
A_\mu\mapsto A_\mu+\omega_\mu I,\qquad
F_{\mu\nu}\mapsto F_{\mu\nu}+(\partial_\mu\omega_\nu-\partial_\nu\omega_\mu)I .
\tag{26}
$$

Ricci changes by an antisymmetric tensor, so the symmetric-density action is invariant. The transport changes by

<a id="eq-27"></a>

$$
T_\gamma\mapsto e^{-\int_\gamma\omega}T_\gamma .
\tag{27}
$$

Bare open-vector transport therefore does not descend. A concrete observable is needed. Set $v_B=|\det B|^{1/(n-2)}$ and, in the prepared endpoint frames, define

<a id="eq-28"></a>

$$
T_\gamma^B=
\left[\frac{v_B(x)}{v_B(y)\det T_\gamma}\right]^{1/n}T_\gamma ,
\qquad \gamma:x\to y .
\tag{28}
$$

Transports generated continuously from identity have positive determinant, so the positive root is unambiguous. In four physical dimensions $v_B=\sqrt{-\det B}$.

<a id="theorem-4-2"></a>
**Theorem 4.2 (Volume-restored transport).** On connected coordinate patches the map $(B,T)\mapsto(B,T^B)$ is projectively invariant, multiplicative and natural under diffeomorphic coordinate changes, including orientation reversal. Its infinitesimal connection is

<a id="eq-29"></a>

$$
A^B_\mu=A_\mu-\frac{\operatorname{tr}A_\mu}{n}I
+\frac{\partial_\mu\log v_B}{n}I .
\tag{29}
$$

The readout identifies the projective quotient with the regular families satisfying $\det T_\gamma^B=v_B(x)/v_B(y)$. On the connection equations $A^B=\mathrm{LC}(g_B)$, and $T^B$ is exactly metric parallel transport.

**Proof.** The scalar in [(27)](/source-readout/transport-projective/04-projective-connection#eq-27) cancels its $n$th power in the determinant in [(28)](/source-readout/transport-projective/04-projective-connection#eq-28). Intermediate volumes and determinants cancel for successive paths. Under a pullback with endpoint Jacobians $J_x,J_y$, $T'=J_y^{-1}TJ_x$ and $v'(x)=|\det J_x|v(\Phi x)$. The sign of $\det J$ is constant along the path, giving $\det J_x/\det J_y=|\det J_x|/|\det J_y|$. The multiplier is invariant and $T^B$ transforms as a tangent map.

Differentiate [(28)](/source-readout/transport-projective/04-projective-connection#eq-28) on a short path, using $d\log\det T/ds=-\operatorname{tr}(A_\mu)\dot\gamma^\mu$. This gives [(29)](/source-readout/transport-projective/04-projective-connection#eq-29), with trace $\partial_\mu\log v_B$. Each projective class has this unique representative, obtained by subtracting $(\operatorname{tr}A-d\log v_B)/n$. The inverse transport theorem gives the quotient and volume-family inverse identities. On the connection equation $A=\mathrm{LC}(g_B)+I\omega$ and $\operatorname{tr}\mathrm{LC}(g_B)=d\log v_B$, so [(29)](/source-readout/transport-projective/04-projective-connection#eq-29) removes exactly $\omega$.

Equation [(29)](/source-readout/transport-projective/04-projective-connection#eq-29) fixes trace, not off-shell torsion. The unrestricted quotient has 60 connection coordinates in four dimensions; the torsion-free parent has 40. The extra twenty coordinates disappear through the algebraic equations. The two parents agree at the on-shell metric endpoint but have different off-shell field spaces.

The readouts are $B,T^B$ and metric matter. Retaining bare transport or a projectively sensitive boundary norm prevents this quotient. A trace-fixed boundary collar is an alternative with transformations restricted to those preserving it. These are observable and boundary contracts, not consequences of admission.

The normalization uses endpoint densities and the determinant of the supplied transport. It does not insert a Levi–Civita formula into the source kinematics. Variation may occur before quotienting. If the volume section moves during variation, its trace contributes a projective tangent, whose contraction with the connection Euler derivative vanishes by the trace identity below.



## The full source stress closes the cubic bootstrap

<a id="section-5"></a>
## 5. The bootstrap on the projective quotient

<a id="section-5-1"></a>
### 5.1 Recover the action and its variation domain

Let $A[T]$ be the generator reconstructed in Theorem 3.1. The source action uses endpoint and short-path operations:

<a id="eq-30"></a>

$$
S_{\mathrm{src}}[T,B,\chi]=\lambda^{-2}\int_U
\left[(B-\eta)^{\mu\nu}D_{\mu\nu}(A[T])
+B^{\mu\nu}Q_{\mu\nu}(A[T])\right]\,d^4x+S_m[B,\chi].
\tag{30}
$$

This is the chosen variational law in raw relation [(4)](/source-readout/transport-projective/02-source-support-and-preparation#eq-4). The free quadratic part is Deser's spin-two starting law. The cubic part will be checked against total-current self-coupling. Neither is a condition for source admission.

Projection by [(2)](/source-readout/transport-projective/01-the-gravitational-recovery-problem#eq-2) gives

<a id="eq-31"></a>

$$
S_2=\int(h^{\mu\nu}D_{\mu\nu}(c)+\eta^{\mu\nu}Q_{\mu\nu}(c)),\qquad
S_3=\lambda\int h^{\mu\nu}Q_{\mu\nu}(c).
\tag{31}
$$

The inverse is $B=\eta+\lambda h$ and $T=\operatorname{Hol}(\lambda c)$, by the transport ODE. Every density and generator variation in the declared domain lifts through [(11)](/source-readout/transport-projective/03-regular-transport#eq-11). Thus the action's variational operations are recovered along with its values.

<a id="section-5-2"></a>
### 5.2 Construct the quotient inverse explicitly

Let $c_I=c^\alpha{}_{\mu\beta}$ range over all 64 components in four dimensions. Define

<a id="eq-32"></a>

$$
q_z(c)=z^{\mu\nu}Q_{\mu\nu}(c),\qquad
(H_z)_{IJ}=\frac{\partial^2q_z}{\partial c_I\partial c_J},
\qquad J(z)=D^*z.
\tag{32}
$$

Compact variations fix the adjoint: $\int z^{\mu\nu}D_{\mu\nu}(u)=\int J(z)_Iu_I$ after the matched boundary integration. Explicitly,

<a id="eq-33"></a>

$$
J(h)^\ell{}_{pq}=-\partial_\ell h^{qp}+\delta^\ell_p\partial_n h^{qn}.
\tag{33}
$$

These definitions have no inverse differential operator. Let $P\omega$ have components $\delta^\alpha_\beta\omega_\mu$. In the fixed component basis $P^TP=4I$ and $\Pi=PP^T/4$ projects onto $\ker H$ with $H=H_\eta$. Theorem 4.1 makes $H+\Pi$ invertible. Set

<a id="eq-34"></a>

$$
G=(H+\Pi)^{-1}-\Pi,\qquad HG=GH=I-\Pi,\qquad G^T=G.
\tag{34}
$$

This is a coordinate inverse on the quotient. A different valid inverse changes the relevant outputs only by a projective vector, which $D$ annihilates. No physical Euclidean metric is selected by this use of component space.

For symmetric $z$, $H_zP=0$ by projective invariance of $q_z$ and $P^TJ(z)=0$ by $D(P\omega)=0$. Define

<a id="eq-35"></a>

$$
L(h)=-GJ(h),\qquad K(h,c)=GH_hc,\qquad
\tau_{\mu\nu}(h,c)=Q_{\mu\nu}(c)-D_{\mu\nu}K(h,c).
\tag{35}
$$

The free equation $Hc+J(h)=0$ gives $c=L(h)+P\omega$. The symmetric Ricci readout is independent of $\omega$. The linearized Levi–Civita connection of

<a id="eq-36"></a>

$$
\varphi_{\mu\nu}=-h_{\mu\nu}+\tfrac12\eta_{\mu\nu}\operatorname{tr}_\eta h
\tag{36}
$$

solves this equation and differs from $L(h)$ only projectively. Thus $r(h)=DL(h)$ is exactly Deser's metric spin-two operator:

<a id="eq-37"></a>

$$
2r_{\mu\nu}(h)=\Box h_{\mu\nu}
-\partial_\mu\partial^\alpha h_{\alpha\nu}
-\partial_\nu\partial^\alpha h_{\alpha\mu}
-\tfrac12\eta_{\mu\nu}\Box\operatorname{tr}_\eta h .
\tag{37}
$$

Its trace-adjusted Einstein form has identically zero flat divergence. Substitution yields the linear gauge transformations
$\delta h^{\mu\nu}=\eta^{\mu\nu}\partial_\alpha\xi^\alpha-\partial^\mu\xi^\nu-\partial^\nu\xi^\mu$ and $\delta c^\alpha{}_{\mu\nu}=\partial_\mu\partial_\nu\xi^\alpha$, together with projective freedom. The gauge identities follow from the chosen quadratic law.

<a id="section-5-3"></a>
### 5.3 Vary the auxiliary background horizontally

Introduce auxiliary inverse metric density $\psi$ near $\eta$. Here $h$ is a weight-one tensor density and $c$ a general $(1,2)$ tensor. With $C(\psi)=\mathrm{LC}(g(\psi))$, covariantize

<a id="eq-38"></a>

$$
S_2(\psi)=\int\left[
h^{\mu\nu}(\nabla_\alpha c^\alpha{}_{\nu\mu}-\nabla_\nu c^\alpha{}_{\alpha\mu})
+\psi^{\mu\nu}Q_{\mu\nu}(c)\right].
\tag{38}
$$

The auxiliary background is torsion free as part of the computation. The dynamical $c$ is unrestricted. Its direct connection variation is

<a id="eq-39"></a>

$$
\begin{aligned}
\delta_C S_{2,\mathrm{kin}}=\int h^{\mu\nu}\big[
 &\delta C^\alpha{}_{\alpha\rho}c^\rho{}_{\nu\mu}
 -\delta C^\rho{}_{\alpha\nu}c^\alpha{}_{\rho\mu}\\
 &-\delta C^\rho{}_{\alpha\mu}c^\alpha{}_{\nu\rho}
 +\delta C^\rho{}_{\nu\mu}c^\alpha{}_{\alpha\rho}\big].
\end{aligned}
\tag{39}
$$

It also equals $\int(H_hc)^T\delta C$. Check the equality directly, or expand $BR(A)$ around $(\psi,C(\psi))$ and take the quadratic coefficient.

<a id="theorem-5-1"></a>
**Theorem 5.1 (Off-shell source stress).** Under the auxiliary tensor/density variation,

<a id="eq-40"></a>

$$
\left.\frac{\delta S_2(\psi)}{\delta\psi^{\mu\nu}}\right|_{\psi=\eta}
=Q_{\mu\nu}(c)-D_{\mu\nu}(GH_hc)=\tau_{\mu\nu}(h,c).
\tag{40}
$$

The identity holds off shell for all smooth $h,c$ in the domain, including unrestricted torsion components.

**Proof.** The variation $\delta C$ is the linearized Levi–Civita connection of $\delta\psi$. It solves $H\delta C+J(\delta\psi)=0$, so $\delta C=-GJ(\delta\psi)+P\zeta$ for a one-form $\zeta$. Since $H_hP=0$,

<a id="eq-41"></a>

$$
\int(H_hc)^T\delta C=-\int(GH_hc)^T J(\delta\psi)
=-\int\delta\psi^{\mu\nu}D_{\mu\nu}(GH_hc).
\tag{41}
$$

The explicit $\psi Q$ term supplies $Q$. The integration uses the same compact-variation boundary contract as [(32)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-32). This proves every component of [(40)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-40), with derivatives of both fields retained.

The source operation is

<a id="eq-42"></a>

$$
B(\psi)=\psi+\lambda h,\qquad
T(\psi)=\operatorname{Hol}[C(\psi)+\lambda c],\qquad
c_\psi=\frac{A[T]-C(\psi)}{\lambda}.
\tag{42}
$$

Use the relative tensor generator in [(38)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-38). Holding $c_\psi$ fixed is different from freezing the physical transport. If $B$ follows [(42)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-42) while $T$ is frozen, the chain-rule defect is

<a id="eq-43"></a>

$$
\tau_{\mathrm{fixed}\ T}=\tau+\lambda^{-1}D(GE_c^{(2)}),\qquad
E_c^{(2)}=J(h)+Hc .
\tag{43}
$$

Indeed $\delta c_\psi=-\delta C/\lambda$, and the adjoint calculation gives [(43)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-43). For $h=0$ and only $c^0{}_{11}=x^0$ nonzero, the correct $\tau_{11}$ is zero and the defect is $1/\lambda$. Dropping the kinetic covariant variation altogether is a different failure: it keeps $Q$ and loses $-DK$. Equation [(42)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-42) implements the intended operation.

<a id="section-5-4"></a>
### 5.4 The exact residual closes the current

<a id="theorem-5-2"></a>
**Theorem 5.2 (Closed bootstrap and off-shell recovery).** The first-order Euler residuals of $S_2+S_3$ are

<a id="eq-44"></a>

$$
E_h=D(c)+\lambda Q(c),\qquad E_c=J(h)+Hc+\lambda H_hc .
\tag{44}
$$

The exact identity is

<a id="eq-45"></a>

$$
r(h)+\lambda\tau(h,c)=E_h-D(GE_c).
\tag{45}
$$

On source solutions $r(h)=-\lambda\tau$. The interaction supplies no further auxiliary stress, so the self-coupling closes in one step.

**Proof.** Apply $G$ to the second residual: $GE_c=-L(h)+(I-\Pi)c+\lambda K(h,c)$. Since $D\Pi c=0$, subtracting its $D$ image from $E_h$ gives [(45)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-45). On a connection solution, $c=L(h)-\lambda K(h,c)+P\omega$ exactly, and its derivative contributes the derivative stress in the $h$ equation. Holding the relative tensor $c$ fixed under [(42)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-42), $\lambda hQ$ has no explicit auxiliary-background dependence or explicit derivatives. Its auxiliary stress is zero, so the current already equals the total self-current in this prescription.

Equation [(45)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-45) gives $\|r+\lambda\tau\|\le\|E_h\|+\|DGE_c\|$ in matching norms. It exposes the derivative cost of transferring an error in the connection equation. Small undifferentiated connection residuals alone do not certify a small Einstein residual.

The completed action follows after the current has been verified:

<a id="eq-46"></a>

$$
\lambda^{-2}B^{\mu\nu}R_{\mu\nu}(A)
=\lambda^{-1}\eta^{\mu\nu}D_{\mu\nu}(c)+h^{\mu\nu}D_{\mu\nu}(c)
+\eta^{\mu\nu}Q_{\mu\nu}(c)+\lambda h^{\mu\nu}Q_{\mu\nu}(c).
\tag{46}
$$

The first term is the explicit constant-density divergence. No convergence of an infinite series is assumed. The current construction and nonlinear closure recover Deser's equations throughout the declared domain.



## The Einstein–matter endpoint

<a id="section-6"></a>
## 6. Einstein–matter recovery, symmetry and boundary data

<a id="section-6-1"></a>
### 6.1 Recover the nonlinear metric equations and their normalization

Take a connected nondegenerate Lorentzian density domain containing $\eta$. Let $S_m$ depend on $B$ and $\chi$, independently of $A$. Up to the divergence in [(46)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-46), the completed action is

<a id="eq-47"></a>

$$
S=\lambda^{-2}\int_U B^{\mu\nu}R_{\mu\nu}(A)\,d^4x+S_m[B,\chi].
\tag{47}
$$

Its connection equation gives $A=\mathrm{LC}(g)+I\omega$. Substitution is legitimate for the bulk equations because the eliminated connection Euler derivative is zero, including its projective directions. The chain-rule contribution vanishes. On this family $B^{\mu\nu}R_{\mu\nu}(A)=vR(g)$, so the reduced action is precisely Einstein–Hilbert with $1/(2\kappa_E)=\lambda^{-2}$.

Define the Hilbert tensor by $\delta S_m=-\tfrac12\int vT_{\mu\nu}\delta g^{\mu\nu}$, with matter variations separate. Because $B^{\mu\nu}=vg^{\mu\nu}$,

<a id="eq-48"></a>

$$
\delta v=\tfrac12g_{\rho\sigma}\delta B^{\rho\sigma},\qquad
\delta g^{\mu\nu}=v^{-1}\left(\delta B^{\mu\nu}
-\tfrac12g^{\mu\nu}g_{\rho\sigma}\delta B^{\rho\sigma}\right),
\tag{48}
$$

<a id="eq-49"></a>

$$
M_{\mu\nu}:=\frac{\delta S_m}{\delta B^{\mu\nu}}
=-\tfrac12\left(T_{\mu\nu}-\tfrac12g_{\mu\nu}T\right).
\tag{49}
$$

The density equation is therefore

<a id="eq-50"></a>

$$
R_{\mu\nu}(g)=\kappa_E\left(T_{\mu\nu}-\tfrac12g_{\mu\nu}T\right),\qquad
G_{\mu\nu}(g)=\kappa_E T_{\mu\nu},\qquad \kappa_E=\lambda^2/2 .
\tag{50}
$$

These are the full nonlinear equations. Their solutions lift by any smooth projective one-form $\omega$ with $T=\operatorname{Hol}(\mathrm{LC}(g)+I\omega)$. The invariant transport is $T^B=\operatorname{Hol}(\mathrm{LC}(g))$. Conversely, every source solution in the sector projects to [(50)](/source-readout/transport-projective/06-einstein-matter#eq-50) and the matter equations. The statement concerns solution coverage modulo the gauge symmetries; it does not equate all off-shell affine configurations with metric connections.

Matter adds $\lambda M$ to both $E_h$ and $r+\lambda\tau$ in the bootstrap readout. The residual identity persists with these additions, and matter independence of $A$ leaves the connection equation intact.

<a id="section-6-2"></a>
### 6.2 Common-density coupling and its precise scalar consequence

Extend $\eta$ to an auxiliary smooth field. For arbitrary compactly supported auxiliary and field variations require

<a id="eq-51"></a>

$$
\frac{\delta S_m}{\delta\eta^{\mu\nu}}
=\lambda^{-1}\frac{\delta S_m}{\delta h^{\mu\nu}}.
\tag{51}
$$

At fixed $B=\eta+\lambda h$ and fixed matter, $\delta h=-\delta\eta/\lambda$, so [(51)](/source-readout/transport-projective/06-einstein-matter#eq-51) makes the action derivative zero. Integrating along a path in the fixed-$B$ fibre proves local factorization through $B$ on neighborhoods with path-connected fibres, modulo the boundary equivalence. Connectedness of the full domain does not imply this property for every fibre. Common-density response selects common metric-density dependence; it does not decide every matter interaction.

For a real scalar choose

<a id="eq-52"></a>

$$
S_m=-\tfrac12\int\left(B^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi
+vm^2\phi^2\right)\,d^4x .
\tag{52}
$$

The matter equation and stress are

<a id="eq-53"></a>

$$
v^{-1}\partial_\mu(B^{\mu\nu}\partial_\nu\phi)-m^2\phi=0,
\tag{53}
$$

<a id="eq-54"></a>

$$
T_{\mu\nu}=\partial_\mu\phi\,\partial_\nu\phi
-\tfrac12g_{\mu\nu}\left(g^{\rho\sigma}\partial_\rho\phi\,\partial_\sigma\phi+m^2\phi^2\right).
\tag{54}
$$

This is the full nonlinear scalar system with its trace and normalization, beyond vacuum or a linearized source.

<a id="proposition-6-1"></a>
**Proposition 6.1 (Restricted scalar selection).** Let the scalar Lagrangian be a natural scalar density polynomial of degree at most two in a real scalar and its first derivatives. Allow neither metric derivatives nor additional fields or prescribed tensors. Flat-space matching fixes [(52)](/source-readout/transport-projective/06-einstein-matter#eq-52) up to a vacuum constant and matched divergences.

**Proof.** At a point a linear frame change takes the metric to its canonical inertia form. The orthogonal stabilizer fixes no nonzero vector, and the only invariant symmetric contravariant rank-two tensors are multiples of the inverse metric. The quadratic derivative term is therefore a constant multiple of $vg^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi$. There is no invariant vector coefficient for a term linear in $\partial\phi$. The algebraic terms are $v(a\phi^2+b\phi+c)$ because there is no zeroth-jet metric scalar other than a constant on the fixed-signature orbit. Flat matching fixes the kinetic coefficient and $a,b$. The remaining $c$ is a vacuum term. This argument is pointwise and fixes the natural density throughout the patch.

Excluding metric derivatives adds a realization hypothesis. Without it, $\xi vR(g)\phi^2$ retains common-density dependence and agrees with the minimal law in flat space, yet changes the curved-space equations.

Connection-dependent matter is separate. The covariant term $\int j^\mu\operatorname{tr}[A_\mu-\mathrm{LC}(g)_\mu]$ uses a vector density $j$ and the trace of the tensorial difference. A projective variation gives $n\int j^\mu\omega_\mu$. The gravitational Euler derivative has identically zero projective trace, so unrestricted stationarity would require $j^\mu=0$ for this term. Choosing a representative of $\omega$ cannot repair it. Additional hypermomentum or spinor couplings need a consistent connection action of their own.

<a id="section-6-3"></a>
### 6.3 Covariance and constraints follow from the recovered law

For a diffeomorphism $\Phi$ with Jacobian $J$, the pulled-back history has

<a id="eq-55"></a>

$$
B'(x)=|\det J_x|J_x^{-1}B(\Phi x)J_x^{-T},
\tag{55}
$$

<a id="eq-56"></a>

$$
T'_\gamma=J_y^{-1}T_{\Phi\circ\gamma}J_x,\qquad \gamma:x\to y .
\tag{56}
$$

The transport composition and inverse identities survive. Differentiating [(56)](/source-readout/transport-projective/06-einstein-matter#eq-56) gives the affine connection transformation including the inhomogeneous Jacobian derivative. The determinant and volume factors in [(28)](/source-readout/transport-projective/04-projective-connection#eq-28) transform together, making restored transport natural. The symmetric-curvature density and metric-matter action are invariant. Projective shifts supply the additional redundancy with invariant $(B,T^B)$.

Noether's identity for the reduced action gives $\nabla^\mu G_{\mu\nu}=0$. For scalar matter it gives

<a id="eq-57"></a>

$$
\nabla^\mu T_{\mu\nu}=(\Box_g\phi-m^2\phi)\partial_\nu\phi .
\tag{57}
$$

Stress conservation follows on the matter equation. The normal Einstein equations on a spacelike hypersurface are the usual constraints because the full equations and admissible metric variations are recovered. Propagation follows from the same Bianchi and matter identities under the regularity and evolution assumptions of the chosen initial-value formulation. The construction adds no global existence theorem or new canonical constraint algebra.

<a id="section-6-4"></a>
### 6.4 The boundary, scale and free limit

Use smooth compactly supported variations or variations vanishing with the required derivatives in a fixed boundary collar. For other boundary problems the explicit divergence between the actions must be retained. Fixing transports on paths entirely in the collar gives the local restriction. Fixing every path with endpoints on the boundary would constrain interior transport and is a different variational domain. Projective transformations must preserve the chosen boundary readouts.

With $\hbar=c=1$ in physical units the metric is dimensionless, $A$ has inverse-length dimension and $\lambda$ has length dimension. Thus $h=(B-\eta)/\lambda$ and the canonical affinity $c=A/\lambda$ have dimensions $L^{-1}$ and $L^{-2}$, respectively. Both $hDc$ and $\eta Q(c)$ have dimension $L^{-4}$; the normalization [(50)](/source-readout/transport-projective/06-einstein-matter#eq-50) is dimensionally consistent.

The free limit $\lambda\to0$ takes $B=\eta+\lambda h$, $A=\lambda c$ with bounded $h,c$, rather than keeping an arbitrary finite curved metric fixed. Nondegeneracy and connected signature remain necessary. Dimension two, degenerate densities and nonregular transport are excluded for their explicit inversion and regularity obstructions.



## What the source architecture selects

<a id="section-7"></a>
## 7. Dependency reduction and physical selection

<a id="section-7-1"></a>
### 7.1 Trace every consequential premise

Native admission supplies the fan and compatible preparation. A raw relation supplies regular transport, nondegenerate density and matter. Smooth multiplicative transport yields the connection and its variations. The free spin-two law and horizontal response determine the stress; cubic total-current coupling closes the law. The affine equation eliminates distortion modulo projective shifts; the volume-restored observable returns metric transport. Density and matter variations then give [(50)](/source-readout/transport-projective/06-einstein-matter#eq-50) and [(53)](/source-readout/transport-projective/06-einstein-matter#eq-53).

In the table, source means the target-neutral admission and preparation architecture. Realization means additional physical or regularity structure in the raw sector. Admitting a representation and selecting a physical law are distinct operations.

<a id="table-1"></a>
**Table 1. Premises, provenance and dependence**

| Premise | Status | Consequence or remaining dependence |
| --- | --- | --- |
| Source fan and common witness | Source-derived | Proposition 2.1 and common-witness equations constrain the sector but do not choose its action. |
| Literal preparation tuple | Source definition | Equation [(3)](/source-readout/transport-projective/02-source-support-and-preparation#eq-3); physical fields belong to the raw relation [(4)](/source-readout/transport-projective/02-source-support-and-preparation#eq-4). |
| Smooth manifold and dimension four | Added realization | Enables density inversion and the physical Einstein–matter sector; admission does not choose dimension. |
| Lorentzian background | External physical input | The connected nondegenerate branch inherits the signature. |
| Nondegeneracy | Domain condition | The weak-field estimate below suffices locally; admission does not generally rule out degeneracy. |
| Regular multiplicative transport | Added realization | Smoothness at constants implies the local first-jet law, Theorem 3.1. |
| Torsion-free dynamics modulo projective symmetry | Derived on shell | Theorem 4.1 removes nonprojective distortion; Theorem 4.2 returns unique metric transport. |
| Projectively invariant observables | Added observable choice | Necessary to make projective shifts redundant; bare vector transport does not descend. |
| Free massless spin-two action | External physical law | Deser's starting quadratic law; source admission allows alternatives. |
| Linear gauge identity | Consequence of the free law | Follows from [(37)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-37) and its trace-adjusted form. |
| Horizontal auxiliary response | Specified operation | Equation [(42)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-42) is necessary for the off-shell stress theorem. |
| Cubic current coupling | Bootstrap requirement | Theorem 5.2 proves closure given the free law and total-current requirement. |
| Coupling magnitude | Open physical selection | $\kappa_E=\lambda^2/2$ fixes conversion, not its measured value. |
| Metric matter | Added constitutive sector | Common-density response gives dependence on $B$; minimal scalar selection also requires metric ultralocality. |
| Nonlinear gauge and constraints | Derived from completed law | Pullback invariance, Bianchi and matter Noether identities; well-posedness uses the chosen evolution domain. |
| Boundary and regularity classes | Added analytic contract | Matched collar, divergence and differentiability data control projection and variation. |

The reductions work together. Constant-path smoothness removes a separate jet postulate within the regular realization. The unrestricted affine law replaces torsion-free kinematics with a stationary equation and an observable quotient. Gauge invariance follows from the selected quadratic and covariant actions. Scalar minimality is fixed within the restricted natural class in Proposition 6.1. These reductions do not make the target-neutral architecture a unique selection of general relativity.

<a id="section-7-2"></a>
### 7.2 Competing realizations expose sharp obstructions

<a id="proposition-7-1"></a>
**Proposition 7.1 (Target-neutral underdetermination).** Native admission and literal preparation as used in §2, with the generic raw-relation schema, do not select dimension, signature, gravitational action or matter curvature coupling.

**Proof.** Keep the admitted fan, mark, order, lineage and invariant tuple. One raw sector has regular transport and Lorentzian densities in dimension four; another has Euclidean densities or a different dimension greater than two. The same schema retains either set of fields and nonzero residuals. Neither support nor literal preparation mentions the physical choices. Even within four-dimensional Lorentzian sectors, the affine Einstein action and its metric reduction augmented by $\alpha\int vR(g)^2$ have inequivalent Euler equations while fitting the same schema. The minimal scalar and its $\xi vR\phi^2$ extension also fit it. These explicit competitors satisfy the target-neutral premises.

This rules out deriving the selections from those premises. It does not refute all additional physical postulates in the full monograph. A stronger selection claim must identify which extra postulate excludes the competitor.

A chosen signature persists in a controlled neighborhood. If $\|\eta^{-1}\lambda h\|\lt1$ in a submultiplicative norm, the Neumann series gives invertibility of $B$. Along $\eta+s\lambda h$, $0\le s\le1$, the real symmetric matrix stays nondegenerate and inertia stays fixed. The argument preserves the selected signature; it does not select it.

Within the Einstein–Hilbert family, requiring the given flat vacuum to solve the completed equations forces the vacuum coefficient in $-2\Lambda v$ to vanish: $G_{\mu\nu}=0$ and the metric is nondegenerate. The same criterion does not exclude $R^2$ terms, whose first variation vanishes there. This constrains a parameter, not the whole action.

The competitors change concrete responses. In four-dimensional affine Palatini $f(R)=R+\alpha R^2$ with connection-independent matter, the trace equation gives $R=-\kappa_E T$. At a point with dust response $T=-\rho$ and orthonormal $T_{00}=\rho$,

<a id="eq-58"></a>

$$
R_{00}=\frac{\kappa_E\rho-f/2}{1+2\alpha\kappa_E\rho},\qquad
R_{00}-\frac{\kappa_E\rho}{2}
=-\frac{3\alpha\kappa_E^2\rho^2}{2(1+2\alpha\kappa_E\rho)} .
\tag{58}
$$

Here $R_{\mu\nu}$ is symmetric affine Ricci and $R=g^{\mu\nu}R_{\mu\nu}$. The connection equation uses $f'(R)B$, not $B$. For constant trace and $f'(R)\ne0$ the metric connection agrees with $\mathrm{LC}(g)$; it generally does not for varying trace. Equation [(58)](/source-readout/transport-projective/07-what-the-source-selects#eq-58) is a pointwise comparison, not a global dust solution. It distinguishes the equations wherever the denominator is nonzero.

For the scalar alternative take $g=e^{2t^2}\eta$ and constant massless $\phi=1$. The minimal scalar residual vanishes. The nonminimal residual in $(\Box_g-\xi R)\phi=0$ is $-\xi R$, with

<a id="eq-59"></a>

$$
R=12(1+2t^2)e^{-2t^2}.
\tag{59}
$$

Thus flat matching and common-density dependence do not fix minimal coupling without Proposition 6.1's extra restriction.

<a id="section-7-3"></a>
### 7.3 What the architecture explains and what comes next

The support, common preparation, explicit composition and map between transport and geometric dynamics give a complete source realization. Regularity provides reconstruction and error transfer. Projective reduction shows precisely which transport information is discarded and why torsion-free kinematics can be relaxed without changing the metric endpoint. The stress identity explains why the derivative current survives projection and why freezing the wrong variable fails. These are structural results, distinct from experimental evidence for a microscopic carrier.

The open problem is to select the raw law and observable class. A further source principle must distinguish the quadratic spin-two and total-current construction from the explicit alternative actions while preserving native admission. Requiring an Einstein readout at the outset would insert the desired conclusion. The realization instead declares its physical starting law and proves the exact recovery.



## Exact controls and finite transport reconstruction

<a id="section-8"></a>
## 8. Verification and discriminating controls

<a id="section-8-1"></a>
### 8.1 Test the implementations against independent routes

The proofs in §§2–7 establish the universal statements. The finite tests check their implementation, conventions and failure modes: 43 reference checks, 53 extended affine and transport checks, and three coordinate and density controls, totaling 91 exact finite-algebra checks and eight numerical estimates. Replay tests reproducibility; the independent implementations and variational routes supply comparisons. The checks are not substitutes for the smooth-field proofs.

The reference suite checks torsion-free stress, the nonlinear endpoint, transport reconstruction, the source fan and gauge and boundary controls. The extended suite compares an unrestricted Hessian to a separately assembled Euler matrix, a direct covariant kinetic variation to the quotient-adjoint formula, matrix commutator curvature to the component-action equation, and the full off-shell residual to an explicit metric spin-two operator. Exact rational jets avoid floating-point cancellation. The stress and residual fixtures use different rational data from seeds 271049 and 271050. The scripts retain their coefficients and component results.

<a id="table-2"></a>
**Table 2. Executable checks by scope**

| Suite | Exact | Numerical | Total |
| --- | ---: | ---: | ---: |
| Reference source realization | 40 | 3 | 43 |
| General affine/projective algebra | 20 | 0 | 20 |
| General horizontal stress | 9 | 0 | 9 |
| Transport, matter and competitors | 13 | 5 | 18 |
| Independent off-shell residual | 3 | 0 | 3 |
| Regularity and scalar controls | 3 | 0 | 3 |
| Coordinate and density controls | 3 | 0 | 3 |
| Total | 91 | 8 | 99 |

One check may compare several components; these counts are not counts of independent theorems.

The unrestricted Hessian ranks are 24 in dimension three and 60 in dimension four, including both Lorentzian and Euclidean four-dimensional representatives. In dimension two the rank is four out of eight components, a control against extending $n^3-n$ to the excluded dimension. Restricting to symmetric lower indices recovers the original 40-component law and invertible four-dimensional Hessian. The pure-projective control catches the incorrect extension of the symmetric-affinity contraction.

The stress comparison evaluates the direct kinetic variation componentwise before comparing with $-DGH_hc$. Twenty component and fixture comparisons, including derivatives of both fields, are retained inside the nine checks. The residual fixture has quadratic $h$, affine unrestricted $c$ and nonzero Euler residuals. It verifies all ten independent components of [(45)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-45). An exact vacuum fixture alone would not test that identity.

<a id="section-8-2"></a>
### 8.2 Nonlinear metric and matter fixtures

The exact Kasner fixture is

<a id="eq-60"></a>

$$
g=\operatorname{diag}(-1,t^{-2/3},t^{4/3},t^{4/3}),\qquad
t\gt0,\qquad A=\mathrm{LC}(g)+I(t\,dt+t\,dx).
\tag{60}
$$

Raw projective torsion is present and $R_{01}=1$, $R_{10}=-1$, but symmetric Ricci vanishes. Along $t:1\to2$ at fixed spatial coordinates,

<a id="eq-61"></a>

$$
T^{\mathrm{LC}}=\operatorname{diag}(1,2^{1/3},2^{-2/3},2^{-2/3}),\qquad
T=e^{-3/2}T^{\mathrm{LC}},\qquad v(1)/v(2)=1/2 .
\tag{61}
$$

Equation [(28)](/source-readout/transport-projective/04-projective-connection#eq-28) restores the exact $T^{\mathrm{LC}}$. This tests finite transport, beyond its infinitesimal projective cancellation.

A nonvacuum example uses null coordinates $(u,v,y,z)$:

<a id="eq-62"></a>

$$
ds^2=-2\,du\,dv+H\,du^2+dy^2+dz^2,\qquad
H=-\tfrac12\kappa_Ea^2(y^2+z^2),\qquad \phi=au .
\tag{62}
$$

The volume density is one, $R_{uu}=\kappa_Ea^2$ and the scalar gradient is null. The code adds a nonclosed projective one-form and builds curvature independently from connection matrices. All ten symmetric density equations and the scalar equation hold with $\kappa_E=\lambda^2/2$. Retaining the antisymmetric curvature means the test would detect accidental imposition of raw metric compatibility.

The competing-law tests include the nonminimal residual [(59)](/source-readout/transport-projective/07-what-the-source-selects#eq-59), the higher-curvature response [(58)](/source-readout/transport-projective/07-what-the-source-selects#eq-58), the flat vacuum restriction on $\Lambda$, the projective trace Ward identity and degeneration of $B/\sqrt{-\det B}$. The constant-path control checks the nonadditive derivative of [(10)](/source-readout/transport-projective/03-regular-transport#eq-10). Independent Lorentz-stabilizer linear systems leave one symmetric rank-two invariant direction and no invariant vector, supporting the restricted scalar classification. Three additional exact controls check finite restored transport in both coordinate orientations, generator naturality under $\Phi(t,x,y,z)=(t^2,x,y,z)$ for $t\gt0$, and direct determinant, metric and scalar-density derivatives along all ten symmetric directions at a nonunit-density Lorentz point. The generator control includes the inhomogeneous Jacobian derivative.

<a id="section-8-3"></a>
### 8.3 Finite-resolution reconstruction

Use a separate two-component generator:

<a id="eq-63"></a>

$$
A(t)=\begin{pmatrix}t&1\\0&2t\end{pmatrix},\qquad 0\le t\le1 .
\tag{63}
$$

The exact endpoint is

<a id="eq-64"></a>

$$
U(1)=\begin{pmatrix}
e^{-1/2}&-e^{-1/2}\sqrt{\pi/2}\,\operatorname{erf}(1/\sqrt2)\\
0&e^{-1}
\end{pmatrix}.
\tag{64}
$$

The numerical check compares this independent solution to left-endpoint Euler products at 60-digit precision in the induced infinity norm, with meshes $N=10,20,40,80$. The conservative bound is $3e^{2.2}/N$, an instance of Proposition 3.3.

<a id="table-3"></a>
**Table 3. Finite transport reconstruction**

| $N$ | Transport error | Analytic upper bound |
| ---: | ---: | ---: |
| 10 | 0.08414675745 | 2.70750405 |
| 20 | 0.04097061846 | 1.35375202 |
| 40 | 0.02021324661 | 0.67687601 |
| 80 | 0.01003910875 | 0.33843801 |

The successive error orders are 1.038318, 1.019289 and 1.009670. The declared acceptance window is 0.85 to 1.15 for the final two orders and below 0.03 for the finest-mesh error. All bounds and criteria pass. The oscillatory connection in §3 separately shows why uniform transport convergence cannot replace derivative control of curvature.

<a id="section-8-4"></a>
### 8.4 Reproduce the reported finite comparisons

The public verification package includes reference and extended implementations, settings, saved outputs, pinned dependencies, a SHA-256 manifest and a claim-to-evidence index. Use Python with SymPy 1.14.0 and mpmath 1.3.0. After extraction, run with a new empty output directory:

~~~sh
python run_all.py --output ../new_replay
~~~

The runner verifies package hashes, executes the suites, checks pass flags and counts and compares the entire saved scientific result objects. It regenerates the verification tables and compares them to the tables used in the manuscript. Tables are UTF-8 with LF line endings; comparison ignores only CRLF versus LF. Three additional portability regressions check line-ending equivalence, rejection of altered content and deterministic generation. They are separate from the 99 scientific checks.

Exact symbolic strings must match; floats use relative tolerance $10^{-10}$ and absolute tolerance $10^{-12}$. Environment metadata is separate and output logs preserve failures. Hashes identify the exact files used; they do not validate the physics. The manuscript is separately compilable and its mathematical arguments do not depend on executing the scripts.



## A complete conditional recovery of gravity

<a id="section-9"></a>
## 9. What the complete construction establishes

This native source sector realizes the entire massless spin-two bootstrap and recovers nonlinear Einstein–matter gravity. Support, literal preparation, raw histories, path operations, projection, inverse and admissible variations each have their own definition. The off-shell stress and residual identities retain the derivative self-current, and the cubic coupling reaches the full nonlinear endpoint. This preserves Deser's achievement and supplies the extra work required to lift its operations rather than only its final equations.

Two improvements reduce the separate kinematic assumptions. Multiplicative transport that is smoothly differentiable at constant paths has a velocity-linear generator, with controlled finite-resolution and noise bounds. The nonadditive immersed-path example shows why the hypothesis at constants matters. The unrestricted affine parent dispenses with imposed torsion-free kinematics. Its equations eliminate all nonprojective distortion, and the density-normalized readout removes the remaining projective ambiguity. The projective Palatini kernel is established mathematics; its integration with the source observable and quotient stress extends the off-shell parent while preserving the full metric endpoint.

The construction also gives a restricted scalar selection theorem, derives gauge identities from the chosen laws and fixes the cosmological term within the flat-vacuum Einstein–Hilbert family. These deductions have distinct sources. Admission gives the support and preparation compatibility. Regularity, naturality, the quadratic spin-two law, total-current coupling and the observable contract supply further premises. The combination and exact recovery do not show that the target-neutral core chooses four dimensions, Lorentzian signature, the coupling or a unique matter law. The explicit competing realizations show precisely what selection still has to accomplish.

The next problem is to find a target-neutral principle that constrains the raw action and observable class strongly enough to exclude those competitors. It needs content before the Einstein endpoint is specified. The exact return maps and discriminating alternatives in this construction provide a standard against which to test it.



## Appendices A and B: boundaries and variations

<a id="appendix-a"></a>
## A. Boundary integrations and density inversion

With the convention [(17)](/source-readout/transport-projective/04-projective-connection#eq-17) the affine derivative variation is

<a id="eq-65"></a>

$$
\delta R_{\mu\nu}=\partial_\alpha\delta A^\alpha{}_{\nu\mu}
-\partial_\nu\delta A^\alpha{}_{\alpha\mu}
+\delta\left(A^\alpha{}_{\alpha\rho}A^\rho{}_{\nu\mu}
-A^\alpha{}_{\nu\rho}A^\rho{}_{\alpha\mu}\right).
\tag{65}
$$

Integration against the symmetric density yields

<a id="eq-66"></a>

$$
\Theta^\rho=B^{\mu\nu}\delta A^\rho{}_{\nu\mu}
-B^{\mu\rho}\delta A^\alpha{}_{\alpha\mu}.
\tag{66}
$$

The bulk derivative coefficient is $J(B)$ in [(33)](/source-readout/transport-projective/05-the-cubic-bootstrap#eq-33). The constant-density divergence in the source action is

<a id="eq-67"></a>

$$
\lambda^{-1}\eta^{\mu\nu}D_{\mu\nu}(c)=
\partial_\rho\!\left[\lambda^{-1}
\left(\eta^{\mu\nu}c^\rho{}_{\nu\mu}
-\eta^{\mu\rho}c^\alpha{}_{\alpha\mu}\right)\right].
\tag{67}
$$

Without lower-index symmetry, $c^\alpha{}_{\alpha\mu}$ cannot be exchanged for a different trace. Equations [(66)](/source-readout/transport-projective/10-boundary-and-variation-appendices#eq-66) and [(67)](/source-readout/transport-projective/10-boundary-and-variation-appendices#eq-67) give the matched boundary integrations in stress and recovery. A different boundary functional changes the variational problem and must be stated explicitly.

In dimension $n\gt2$, $B=vg^{-1}$ implies $|\det B|=v^{n-2}$, giving

<a id="eq-68"></a>

$$
v=|\det B|^{1/(n-2)},\qquad g^{-1}=B/v .
\tag{68}
$$

The determinant identity uses $|\det g|=v^2$. Its derivative gives $\delta v=(n-2)^{-1}g_{\mu\nu}\delta B^{\mu\nu}$ and reduces to [(48)](/source-readout/transport-projective/06-einstein-matter#eq-48) for $n=4$. In dimension two the determinant does not recover the conformal scale. The connected nondegenerate component fixes signature, not the absolute determinant.

<a id="appendix-b"></a>
## B. Variation domains and the fixed-transport obstruction

Work locally on a smooth patch, with finite regularity high enough for all displayed derivatives or in the smooth category. The differentiability-at-constants theorem uses the $C^1$ Banach topology. The reconstruction bound uses controlled $C^2$ paths and bounded second derivatives. Joint differentiability in base point and path perturbation is part of the realization. Ordinary finite jets cannot replace the domain hypotheses.

$A$ and regular transport are inverse by uniqueness for the Volterra equation. Their differentials are inverse by [(11)](/source-readout/transport-projective/03-regular-transport#eq-11) and its short-path derivative. The density map is a smooth local diffeomorphism on the nondegenerate branch by determinant inversion. Together these cover compactly supported affine, density and matter variations. The projective quotient removes exactly the directions $P\omega$ and $P^TE_c=0$ identically. A moving volume section contributes no additional connection Euler term. Other distortions are eliminated only on shell.

The fixed-transport error can be derived before using any field equation. In the auxiliary metric-density variation,

<a id="eq-69"></a>

$$
\delta C=-GJ(\delta\psi)+P\zeta,\qquad
\left.\delta c_\psi\right|_T=-\lambda^{-1}\delta C .
\tag{69}
$$

Contract the latter with $E_c^{(2)}$ and integrate the adjoint:

<a id="eq-70"></a>

$$
\left.\delta S_2\right|_{T,B=\psi+\lambda h}
=\int\delta\psi^{\mu\nu}\left[\tau_{\mu\nu}+
\lambda^{-1}D_{\mu\nu}(GE_c^{(2)})\right].
\tag{70}
$$

The projective term vanishes since $P^TE_c^{(2)}=0$. If $B$ is frozen too, relative $h$ varies by $-\delta\psi/\lambda$ and gives the additional term $-E_h^{(2)}/\lambda$. Neither fixed-source operation gives the horizontal stress off shell, even though the defects can vanish on special solutions.



## Appendices C and D: reconstruction and scope

<a id="appendix-c"></a>
## C. Analytic checks behind the reconstruction table

For the triangular matrix in §8, the diagonal entries solve $u'_{22}=-2tu_{22}$ and $u'_{11}=-tu_{11}$. Variation of constants gives

<a id="eq-71"></a>

$$
u_{12}(t)=-e^{-t^2/2}\int_0^t e^{-s^2/2}\,ds .
\tag{71}
$$

This yields [(64)](/source-readout/transport-projective/08-executable-checks#eq-64) without a numerical differential-equation solver. The induced infinity norms satisfy $\|A\|\le2$ and $\|A'\|\le2$. Over length $h$ the fundamental solution has norm at most $e^{2h}$ and second derivative $(-A'+A^2)U$. Taylor's integral remainder bounds the Euler defect by $3h^2e^{2h}$. The other exact and Euler factors in the telescoping product contribute at most $e^{2(1-h)}$. Summing over $N$ equal intervals gives a global bound $3e^2/N$, already smaller than the declared $3e^{2.2}/N$ used in the saved comparison. No contractivity assumption is used.

For the oscillatory curvature control, take $A_1=(\sin(kx^0)/k)E_{01}$ and all other $A_\mu=0$. Since $E_{01}^2=0$, the exact path exponential is $I-E_{01}\int \sin(kx^0)\,dx^1/k$. The error from identity is $O(k^{-1})$ on bounded-length path families. Along $x^0=x^1=s$ the integral is $(1-\cos k)/k^2$, but $\partial_0(A_1)^0{}_1=\cos(kx^0)$ gives $R_{11}(0)=1$. This explicit limit distinguishes transport and curvature reconstruction, explaining the derivative norms in [(16)](/source-readout/transport-projective/03-regular-transport#eq-16).

<a id="appendix-d"></a>
## D. Scope of the recovery statements

There are three equivalences with different meanings.

1. Regular source transports and affine generators are off-shell inverse representations, including their allowed variations.
2. At fixed nondegenerate density, projective classes of generators and volume-restored transports are off-shell inverse representations.
3. The unrestricted affine action reduces to the metric Einstein–matter equations **after** its algebraic field equation eliminates nonprojective distortion. This is where the original torsion-free parent and the unrestricted quotient agree. Their off-shell connection dimensions, 40 and 60 respectively, exhibit the difference.

The results are local in the declared smooth sector, or apply to global histories with patching and boundary data obeying these contracts. A nontrivial tangent bundle requires compatible local frames and transport descent. The finite fan does not determine arbitrary global topology, singular extension or an all-sector Shadow equalizer. None of those enlargements is needed for the full local nonlinear Einstein–matter result.



## References

<a id="references"></a>
## References

<a id="ref-dadhich-pons"></a>
Naresh Dadhich and Josep M. Pons. On the equivalence of the Einstein–Hilbert and the Einstein–Palatini formulations of general relativity for an arbitrary connection. *General Relativity and Gravitation*, 44:2337–2352, 2012. [DOI](https://doi.org/10.1007/s10714-012-1393-9) · [arXiv:1010.0869v4](https://arxiv.org/abs/1010.0869v4).

<a id="ref-deser-1970"></a>
Stanley Deser. Self-interaction and gauge invariance. *General Relativity and Gravitation*, 1:9–18, 1970. [DOI](https://doi.org/10.1007/BF00759198) · [arXiv:gr-qc/0411023v3](https://arxiv.org/abs/gr-qc/0411023v3).

<a id="ref-deser-2010"></a>
Stanley Deser. Gravity from self-interaction redux. *General Relativity and Gravitation*, 42:641–646, 2010. [DOI](https://doi.org/10.1007/s10714-009-0912-9) · [arXiv:0910.2975v3](https://arxiv.org/abs/0910.2975v3).

<a id="ref-rodgers-2026a"></a>
Jeremy Rodgers. Geometric realization of completed source relations: Descent, orbit spaces, invariant relations, and variational response in Shadow Theory, July 2026a. [DOI](https://doi.org/10.5281/zenodo.21370985).

<a id="ref-rodgers-2026b"></a>
Jeremy Rodgers. A source-to-readout architecture for a theory of everything: Sector physics as coupled projections from a common realization carrier, 2026b. Version 1.0. [DOI](https://doi.org/10.5281/zenodo.21366204).

<a id="ref-rodgers-2026c"></a>
Jeremy Rodgers. Observable quotients and exact projected dynamics: Closure, memory, minimal dynamical completion, and effective field operators, July 2026c. [DOI](https://doi.org/10.5281/zenodo.21371251).

<a id="ref-schreiber-waldorf"></a>
Urs Schreiber and Konrad Waldorf. Parallel transport and functors. *Journal of Homotopy and Related Structures*, 4(1):187–244, 2009. [arXiv:0705.0452v5](https://arxiv.org/abs/0705.0452v5).

