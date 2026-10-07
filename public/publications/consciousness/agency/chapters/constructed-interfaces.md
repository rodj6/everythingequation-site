# Building a new way to act

A controller can learn how its sensor works, construct a decoder and install a new way of acting. After that installation, it can handle inputs it could not previously manage. The change is real even though the complete learning process follows fixed physical rules.

The published paper makes this point for evaluative rules: an installed charter can become an object of assessment and be changed for fresh later cases. This supplementary construction concerns a different object, a learned sensor interface. It provides a concrete account of capability acquisition and exposes the separate costs of building, storing and using that capability.

## Acquiring a source-preimage basis

Let a fixed unknown invertible binary sensor supply

$$
Y_t=AX_t,\qquad A\in\operatorname{GL}(d,2).
$$

Each live plant gives one stipulated nondisturbing reading. Its value must then be regulated to a prescribed target and released before the next reading. Sensor parameters are isolated. Reading records are retained immutably and cannot become an extra actuation target. Additional source-sensitive probes are forbidden. All temporary helpers must be restored at release.

The controller maintains an echelon basis of the public readings. For each basis vector $E_j$, its physical receiver holds the corresponding preimage

$$
R_j=A^{-1}E_j.
$$

When a reading $y$ arrives, reduce it against the stored reading basis. Apply the same XOR coefficients from receiver blocks to the current plant. If the reading was dependent, the plant becomes zero. If it adds an independent direction, swap the remaining physical plant into a ready receiver block and store the corresponding reading residual in the public basis. Finally XOR the desired goal into the plant and release it.

The invariant $R_j=A^{-1}E_j$ proves the procedure. It does not require the controller to receive $A$ as hidden advice. Physical source values enter the receiver through the admitted plant operations, while public readings organize how those values are subsequently used.

A specified affine streaming compiler uses $d^2$ receiver bits, $3d^2+6d+1$ working bits apart from receiver and archive, and

$$
N(12d^2+21d)
$$

elementary gates for $N$ tasks. Per task, its counts are $2d$ NOTs, $6d^2+13d$ CNOTs and $6d^2+6d$ Toffolis; the retained reading/dispatch archive has $4Nd$ bits. These are compiler bounds, not optima. The Toffolis include sensor and record-controlled processing even when the uncertain-data operation at a fixed record is affine. A nonzero affine offset needs separately charged calibration.

## The exact price of one saved receiver bit

After $d$ independent observed directions, the uncertain source-preimage basis is a matrix $B\in\operatorname{GL}(d,2)$. Its query convention is $Bc$, where $c$ gives coefficients in the public reading basis. It is not an automatically supplied oracle for the hidden sensor or its inverse under another convention.

**Theorem: exact residual receiver width.** For $d\ge2$, a horizon admitting $d$ independent directions and the one-readout, isolated-sensor, immutable-archive contract above, perfect regulation for every admitted sensor and source sequence requires and permits

$$
r_{\rm affine/Clifford}=d^2,
\qquad
r_{\rm unrestricted}=d^2-1.
$$

**Proof of the lower bounds.** The number of possible source-preimage bases is

$$
|\operatorname{GL}(d,2)|=\prod_{j=0}^{d-1}(2^d-2^j)
=2^{d^2}\rho_d,
\qquad
\rho_d=\prod_{j=1}^d(1-2^{-j}).
$$

For $d\ge2$, $1/4<\rho_d\le3/8<1/2$, so

$$
\left\lceil\log_2|\operatorname{GL}(d,2)|\right\rceil=d^2-1.
$$

The lower constant can be seen without a numerical infinite product: retain the first three factors and bound the remaining product below by one minus the sum of its omitted $2^{-j}$ terms. It gives a bound exceeding $9/32$. Distinct source bases must remain distinct when the plants have all reached fixed targets, giving the unrestricted bit requirement.

The affine hull of $\operatorname{GL}(d,2)$ is the whole $d^2$-dimensional matrix cube. For every off-diagonal entry, $I$ and $I+E_{ij}$ are invertible and differ only there. For a diagonal entry, use a swapped invertible two-by-two block; toggling that entry preserves invertibility. These differences span every coordinate direction. An affine success preimage containing all invertible matrices must therefore have dimension $d^2$. The affine/Clifford flat theorem gives the stronger width bound.

**Attainment.** The streaming basis construction uses $d^2$ bits. For unrestricted actuation, the clean encodings below fit the full basis in $d^2-1$ bits. Before the last independent reading, at most $d(d-1)$ preimage bits are stored, which fits this receiver. The final live plant supplies the last column temporarily; encode the completed basis before releasing it. Later actions use its compact representation.

The saved bit concerns residual source-dependent storage at release. It does not include all temporary workspace, public basis records, source parameters, clock or program memory.

## A clean compact code

A clean one-bit encoder is a fixed NOT/CNOT/Toffoli circuit on $d^2$ raw matrix bits and ready auxiliaries. On every invertible input, exactly $d^2-1$ designated outputs may vary; all others have prescribed constants. The complete circuit remains a permutation on every input, including singular matrices. The successful cleanup promise applies to invertible matrices unless a stronger domain is stated.

One recursively usable code takes $B=[b\mid Z]\in\operatorname{GL}(j,2)$. Let $P_b$ swap the first nonzero coordinate of $b$ into position zero. With $b'=P_bb$, define

$$
(L_{b'}z)_0=z_0,
\qquad
(L_{b'}z)_i=z_i+b'_iz_0\quad(i>0).
$$

Then $F_b=L_{b'}P_b$ sends $b$ to $e_0$, giving

$$
F_bB=\begin{pmatrix}1&a\\0&C\end{pmatrix},
\qquad C\in\operatorname{GL}(j-1,2).
$$

Define

$$
E_j(B)=(b,a,E_{j-1}(C)).
$$

Its length is $j+(j-1)+((j-1)^2-1)=j^2-1$. At $j=2$, using column-major bits $0,1,2,3$, the gate sequence

$$
T(0,3;1),\quad CX(1;3),\quad T(2,3;1),\quad CX(1;3),\quad X(3)
$$

clears the fourth output on all six invertible inputs. The remaining three bits form the base code. Here $T(a,b;t)$ adds the product of control bits $a,b$ into target $t$, $CX(c;t)$ adds control $c$, and $X(t)$ flips $t$.

The decoder reconstructs $C$, forms the displayed block matrix and applies $F_b^{-1}$. To make the encoder physically clean, evaluate $E$ while keeping $B$, copy its code, and uncompute the evaluator's intermediates. Then use the retained code to XOR the decoded $B$ out of the original input positions. This yields $(0,E(B),0)$ on the promise. It does not attempt to uncompute an operation after destroying the input its inverse needs.

This is the established reversible compute/copy/uncompute method associated with [Bennett's logical reversibility](https://doi.org/10.1147/rd.176.0525), applied to the specified code and cleanup contract.

## Installation and use are different problems

Assume uniform exact binary matrix multiplication has Boolean circuits of size $O(n^\beta)$ for a fixed $\beta>2$. The recursive code can be cleanly installed with

$$
O(d^\beta+d^2\log^3d)
$$

Toffolis and clean temporary bits. The admitted seven-product matrix recursion gives the explicit conservative choice $\beta=\log_2 7$.

The construction block-factorizes the first $d-2$ columns while preserving chronological first-nonzero pivots. At each split it factors the left block, permutes the right block, solves through the unit-lower factor and forms a Schur residual by multiplication. Later row swaps are reversed on the retained multiplier histories to recover the recursive code; they do not require repeating the whole factorization for each column. Fixed sorting networks charge the routing overhead at $O(d^2\log^3d)$. Decoding reconstructs the factors with the same order. Clean Boolean evaluation supplies the reversible implementation.

The same code supports

$$
(E(B),c,x,0)\longmapsto(E(B),c,x+Bc,0)
$$

with $O(d^2)$ Toffolis and $O(d)$ query helpers. For $c=(c_0,v)$,

$$
Bc=F_b^{-1}\begin{pmatrix}c_0+av\\Cv\end{pmatrix}.
$$

Compute the smaller product once, continue upward, copy the completed result into $x$, and reverse the entire computation. The sum of level costs is quadratic. Computing and uncomputing the smaller query twice at each recursive level would introduce an unjustified larger cost. One explicit compiler for this code uses $9d^2-13d+6$ Toffolis and $3d-1$ clean helpers; smaller constants from a different representation cannot be silently attached to its fast installation bound.

**Theorem: programmable query lower bound.** Any fixed classical circuit computing $Bc$ for every represented invertible $B$ and every runtime $c$ needs

$$
k\ge\frac{d(d-1)}2
$$

ordinary Toffolis, regardless of the chosen classical representation or clean auxiliary width. Thus the best exact programmable-query order is $\Theta(d^2)$.

**Proof.** Let Alice know $B$ and its representation, and Bob know $c$. Represent every circuit wire by XOR shares. Affine gates are local. For a Toffoli, Alice sends her two control shares; Bob can use these together with his own shares to update the product share correctly. With $k$ Toffolis this uses $2k$ bits, all from Alice. Alice sends her $d$ final output shares, letting Bob recover $Bc$.

Alice's message depends on $B$, not $c$. If two different operators produced the same message, Bob would obtain the same product for every basis input $c$, forcing the operators to agree. Hence $2k+d\ge\log_2|\operatorname{GL}(d,2)|$. Integer rounding gives the displayed bound. The recursive query supplies the matching upper order.

This concerns one programmable circuit handling every coefficient word. A specialized fixed query, such as $c=0$, is another task. For any clean encoder with cost $k$, decoding, raw matrix-vector accumulation and re-encoding also give the useful bound

$$
Q_E(d)\le2k+d^2.
$$

## Why even one-bit compression has a quadratic nonlinear cost

Let $C_{\rm enc}(d)$ be the minimum Toffoli count of any clean encoder under the contract above. Then

$$
C_{\rm enc}(d)=\Omega(d^2).
$$

The lower bound uses a named external theorem: in the additive two-party input model over a fixed prime field, distinguishing rank $d$ from rank $d-1$ with public-coin error at most $1/10$ needs $\Omega(d^2\log p)$ communicated bits. This is the rank theorem of [Li, Sun, Wang and Woodruff](https://arxiv.org/abs/1407.4755). Its deep proof is imported; the reduction to the encoder follows here.

Let $Z$ be the set of raw matrices whose constrained encoder outputs all take the required constants. Invertible matrices belong to $Z$, while injectivity gives $|Z|\le2^{d^2-1}$. The density of rank-$d-1$ matrices is

$$
q_d=(2-2^{1-d})\rho_d.
$$

Consequently

$$
\Pr(B\in Z\mid\operatorname{rank}B=d-1)
\le\frac{1/2-\rho_d}{q_d}<\frac{14}{27}.
$$

The constraints accept every full-rank matrix and reject at least $13/27$ of the adjacent rank class. Public uniform invertible left and right multipliers make an XOR-shared input uniform within its rank class, and each party transforms its own share locally. Simulate the encoder with two communicated bits per Toffoli. A public random parity of the constrained-output deviations detects any nonzero deviation with probability $1/2$, using one additional parity-share bit. One repetition has miss probability at most $41/54$ on rank $d-1$. Nine independent repetitions reduce it below $1/10$ and communicate at most $18k+9$ bits. The imported rank theorem forces $k=\Omega(d^2)$.

The asymptotic constant is unspecified. This is not the statement $C_{\rm enc}(d)\ge d^2$ with coefficient one in every small dimension. Together with the construction, it gives

$$
\Omega(d^2)\le C_{\rm enc}(d)\le O(d^\beta+d^2\log^3d).
$$

The missing general near-quadratic installation theorem remains open. A controller can build a compact, reusable capability; knowing that such a capability exists does not make its construction free.
