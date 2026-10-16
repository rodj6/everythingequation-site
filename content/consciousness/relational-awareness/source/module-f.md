## Spatial response, native equivalence and relational events {#section-6}

A spatial response can constrain a physical realization without settling whose experience it is. This module develops exact ways to tell those claims apart. Reciprocal conductance networks yield testable distance signatures. Complete relative stochastic processes can agree while responding differently to native interventions. Material clocks locate events without making coordinate labels into physical readings. Together these constructions sharpen the realization question that an account of appearance must answer.

### 6.1 One native edge and all-pair response {#section-6-1}

Let $L$ be the Laplacian of a connected undirected network of positive conductances on $n$ labelled native ports. Put $P=I-\mathbf1\mathbf1^T/n$ and $G=L^+$, the inverse on the zero-sum subspace and zero on constants. For $b_{ij}=e_i-e_j$, resistance is $R_{ij}=b_{ij}^TG b_{ij}$. Adding conductance $\delta>0$ at native edge $(a,b)$ changes $L$ to $L'=L+\delta b_{ab}b_{ab}^T$.

#### Proposition 6.1: the complete resistance response {#proposition-6-1}

$$
R'_{ij}=R_{ij}-\frac{\delta(b_{ij}^TG b_{ab})^2}{1+\delta R_{ab}}.\tag{29}
$$

Every pair resistance weakly decreases, with equality exactly at zero transfer potential $b_{ij}^TG b_{ab}$.

**Proof.** Restrict to $\mathbf1^\perp$, where $L$ is positive definite. Direct multiplication verifies

$$
G'=G-\frac{\delta G b_{ab}b_{ab}^TG}{1+\delta b_{ab}^TG b_{ab}}
$$

there; both sides vanish on constants. Evaluate its quadratic form on $b_{ij}$. $\square$

This is the established rank-one resistance formula of Dörfler and Bullo (2013, Theorem III.14, Eq. 39), not a new network theorem. An embedded inverse with one grounded row/column set to zero is not itself $G$. Its zero-sum bilinear evaluations agree, and double projection gives $P G_{\mathrm{ground}}P=G$. Confusing these operators can corrupt an inverse or covariance calculation.

On a positive-resistance path, $R_{ij}$ is the sum of resistances along the unique interval. Decreasing one edge resistance by $\kappa$, less than its original value, decreases every crossing pair by $\kappa$ and leaves same-side pairs unchanged. For a unit path, a coordinate warp $f(i)=i-\kappa\mathbf1\{i>e\}$ preserves ordering when $0<\kappa<1$ and has exactly these distances. One downstream coordinate reader can therefore realize the same geometry without sharing the proposed network boundary. Represented coordinates are not occurrence times.

For four ordered sites $i<j\le a<b\le k<l$, a change in the middle edge contracts $R_{ik},R_{il},R_{jk},R_{jl}$ by the same absolute amount while $R_{ij},R_{kl}$ stay fixed. Transferring this signature to appearance requires fixed native counterparts and a calibrated linear distance map. A nonlinear reader, cyclic geometry or changed attention can alter it; four equal apparent contractions alone do not identify one neural edge.

For example, suppose each participant has one nonnegative absolute contraction $\kappa_i$ affecting training separation $S_i$ and outward separation $S_i+d$, with identical participant weights and a fixed linear reader. Their aggregate percentage ratio is a nonnegative weighted average of $S_i/(S_i+d)$, hence lies in

$$
\left[\frac{S_{\min}}{S_{\min}+d},\frac{S_{\max}}{S_{\max}+d}\right].
$$

Using $S_i\in[3.2,5.6]$ degrees and a $7.2\%$ training summary gives lower outward predictions $6.4\%$ at $d=.4$ and $5.76\%$ at $d=.8$. The $4.2\%$ and $3.6\%$ point summaries reported by Song et al. (2017) do not automatically corroborate that restricted equal-absolute-contraction model. This is not a statistical rejection: fitted optimum selection, uncertain group estimates, nonlinear calibration and graph geometry are outside those assumptions. No neural conductance measurement or raw-data fit is supplied by the comparison.

### 6.2 An exact inverse native-edge criterion {#section-6-2}

The full set of pair responses permits an inverse test that a few equal contractions cannot supply. For a symmetric zero-diagonal resistance matrix, $G=-PRP/2$. Indeed, $R_{ij}=G_{ii}+G_{jj}-2G_{ij}$ and $G\mathbf1=0$. Let $D=R-R'$, $B=-PDP/2=G-G'$, and suppose the baseline $L$ and native labels are independently known.

#### Theorem 6.2: when a response is exactly one native edge {#theorem-6-2}

A full exact response change is a single added edge $(a,b)$ with positive conductance if and only if

$$
LBL=c b_{ab}b_{ab}^T,\qquad c>0,\qquad cR_{ab}<1.\tag{30}
$$

Its conductance increment is $\delta=c/(1-cR_{ab})$.

**Proof.** Necessity follows from [Proposition 6.1](#proposition-6-1), with $c=\delta/(1+\delta R_{ab})$. Conversely, $B$ is centered and $GL=LG=P$, so (30) implies $B=cG b_{ab}b_{ab}^TG$. The strict bound makes $G-B$ positive definite on $\mathbf1^\perp$. Inverting that rank-one subtraction gives $L'=L+\delta b_{ab}b_{ab}^T$. A symmetric zero-diagonal distance matrix is uniquely determined by its centered Green operator: a centered-zero difference has form $\mathbf1u^T+u\mathbf1^T$, and its zero diagonal forces $u=0$. The complete response therefore agrees with the single-edge change. $\square$

Rank-one positive $B$ alone is insufficient. Take a four-port complete baseline with $L=wP$ and a small coefficient for source vector $v=(1,1,-1,-1)$. Set $B=cGvv^TG$. The inverse change is a multiple-source rank-one term proportional to $vv^T$; for sufficiently small coefficient, its off-diagonal entries still define a valid positive connected network. It contracts all pair resistances but $LBL=cvv^T$ has four-site support, not the two-site native-edge signature. Known baseline, full responses and native support are consequential hypotheses. Behavioral geometry fitted after the fact does not independently provide them.

### 6.3 Projected fluctuations and a retention tradeoff {#section-6-3}

Consider the reciprocal linear field on $\mathbf1^\perp$:

$$
dX=-LX\,dt+\sqrt{2D_0}\,P\,dW.
$$

Its stable covariance satisfies $LC+CL=2D_0P$, uniquely giving $C=D_0G$. Hence $\operatorname{Var}(X_i-X_j)=D_0R_{ij}$. Projection removes a freely diffusing common mode and supplies correlated noise; neither is an innocuous omission in another proposed dynamics. Directed drift or different noise needs its own Lyapunov equation.

For two units with conductance $w$, contrast $Z=X_1-X_2$ obeys

$$
dZ=-2wZ\,dt+\sqrt{4D_0}\,dB.
$$

Its mean decays as $e^{-2wt}$, stationary variance is $D_0/w$, and deterministic initial contrast gives variance $(D_0/w)(1-e^{-4wt})$. Initial variance contributes its own $e^{-4wt}$ term. Increasing $w$ both lowers stationary fluctuations and speeds free contrast decay at fixed $D_0$. A maintained input or another record need not obey that retention tradeoff; reduced variance does not make each noisy sample contract.

### 6.4 Equal relative laws, unequal native organizations {#section-6-4}

Compare three native systems with $n\ge2$ terminal units: a hidden-hub star, a complete reciprocal network and independent leaky units. Their free drift matrices are respectively

$$
L_s=\begin{pmatrix}wI_n&-w\mathbf1\\-w\mathbf1^T&nw\end{pmatrix},\qquad
L_c=wP_n,\qquad L_\ell=wI_n,\qquad
P_n=I_n-\mathbf1\mathbf1^T/n.
$$

Use projected white noise on connected graph modes and independent white noise for the leaky units, of scale $\sqrt{2D_0}$. Inputs are additive at terminals. Only $Y=P_nX_{\mathrm{term}}$ is observed.

#### Proposition 6.3: identical complete relative process laws {#proposition-6-3}

Matched initial joint laws of $Y$, independent future innovations and the same prescribed terminal inputs give identical complete joint relative process laws in these three systems. The conclusion also holds for one common well-posed nonanticipating output policy with independent private seed.

**Proof.** In the star, $P_nL_sX=wP_nX_{\mathrm{term}}$, since the hub term is common. The same identity holds for the other matrices. Projecting the star's connected-noise covariance onto terminal contrasts gives $P_n$, as do the other noise laws. All three thus have the same closed equation

$$
dY=-wY\,dt+P_nu(t)\,dt+\sqrt{2D_0}\,P_n\,d\widetilde W.
$$

Its explicit convolution solution proves equality for prescribed inputs. Under a common well-posed output policy, the same closed controlled equation and seed law give the same process law. Hidden/common variables never enter that equation. $\square$

Gaussian initial laws and deterministic inputs give Gaussian relative processes; arbitrary matched initial laws or nonlinear feedback still give equal laws but need not be Gaussian. In stationarity, pair variance is $2D_0/w$ and normalized time correlation $e^{-w|t-s|}$. Star and complete terminal graph resistances are $2/w$, but a leaky covariance does not thereby become ungrounded resistance of a disconnected terminal graph. Any physical ground must be specified in an expanded network. The hidden star mode $(1,\ldots,1,-n)$ has eigenvalue $(n+1)w$ and is orthogonal to all nominated contrasts. The systems have different native boundaries.

#### Proposition 6.4: a native hold distinguishes the organizations {#proposition-6-4}

A native hold of terminal $1$ at $1$, with all other units initially $0$, separates the three deterministic or conditional-mean responses. Unheld star terminals have first derivative $0$ and second derivative $w^2$ at zero; complete-network terminals have first derivative $w/n$; independent leaky terminals stay $0$. Held star and complete means converge to $1$, while unheld leaky means remain $0$.

**Proof.** Suppress the held terminal's update/noise and use the full physical drift, not a continuously imposed zero-mean constraint. Star symmetry gives an unheld value $y$ and hub $h$ with

$$
y'=w(h-y),\qquad h'=w[1+(n-1)y-nh].
$$

At zero, $h'=w$, $y'=0$, $y''=w^2$. Equilibrium is $y=h=1$, and the dimensionless characteristic polynomial $z^2+(n+1)z+1$ has two negative roots. The complete model gives $y'=(w/n)(1-y)$, hence $y=1-e^{-wt/n}$. Independent leaky means solve $y'=-wy$, $y(0)=0$. $\square$

Brownian sample paths have no such ordinary instantaneous derivatives; the statement is about means or noiseless paths. Positive-noise connected sample differences do not all converge to zero. Holding one unit changes the operator and common mode. It is not an additive input under the old free operator. The example therefore refutes inference of full native equivalence from complete nominated relative-output agreement, without assuming that no larger constructor presents a relational third.

### 6.5 Material event evaluation {#section-6-5}

Relational localization is useful independently of phenomenal attribution (Rovelli, 2002). Let $z:I\to M$ be a material worldline, $T$ a scalar clock and $R$ a scalar register. If $T(z(\lambda))=\tau$ has a unique root $\lambda_\tau$, define $O_R(\tau)=R(z(\lambda_\tau))$. Under a whole-package relabelling

$$
z'=\psi\circ z,\qquad T'=T\circ\psi^{-1},\qquad R'=R\circ\psi^{-1},
$$

this value is unchanged. A strictly monotone bijective reparameterization onto the same worldline image replaces the root by its image and also leaves the evaluation unchanged. Nonscalar registers require event-attached frames carried by the transformation.

A repeated or stalled clock may have several roots. An actual material episode counter/trigger can disambiguate them; a mathematical label is not a physical counter. Otherwise retain the full invariant set of matching events. No root makes the reading undefined, not evidence of absence of experience. For causal order, the metric and time orientation must transform as well:

$$
g'_{\psi p}(\psi_*v,\psi_*w)=g_p(v,w).
$$

Event localization alone proves neither a local-access law nor a canonical quantum Dirac observable.

Under an independently defended local-causal/nonanticipation contract, two adequate histories agreeing through the selected event have equal earlier register laws under one common kernel ([Module C, §3.1](/consciousness/relational-awareness/module-c#section-3-1)). A complete invariant history is not a mechanism giving every history entry to a local observer. Gauge invariance neither establishes nor excludes a proposed psychophysical dependence on additional inaccessible history.

### 6.6 Prediction and feasible planning {#section-6-6}

A family admitting a publicly available exact binary prediction $p$ and a later complementary policy $A=1-p$ cannot have a universally correct predictor: $p=A$ would imply $p=1-p$. This diagonal argument is limited to the specified feedback policy family. It does not exclude hidden forecasts, probabilistic prediction or some knowable future actions.

Likewise, causal constraints do not forbid current multi-time planning. If eating $E$ requires prior baking $B$, feasible plans are $\{(0,0),(1,0),(1,1)\}$. One current deliberation may choose a feasible plan without independently recombining the impossible $(0,1)$. This limits the independent-recombination inference in agential discussion (Adlam, 2026); it does not explain an agent exercising agency at several events from a timeless epistemically symmetric standpoint. Current plans are not guaranteed knowledge that future actions will occur. The present construction is a classical event/access analysis, not a phenomenal bridge.

### 6.7 Optical geometry and worldly constituents {#section-6-7}

An object-involving account of perception must distinguish the identity of what is perceived from its qualitative determination. The following ideal geometry exposes that distinction without assuming an internal image is the bearer. Use a monocular pinhole at the origin and an image plane of focal length one. A frontoparallel planar disc with centre $(x,y,z)$, $z>0$, and radius $r>0$ projects to centre and radius

$$
\mathcal P(x,y,z,r)=(x/z,y/z,r/z).\tag{31}
$$

Indeed, a point $(x+a,y+b,z)$ with $a^2+b^2\le r^2$ lies on a ray whose image point is $((x+a)/z,(y+b)/z)$, giving exactly that circular mask. The concrete two-disc construction is

$$
\begin{aligned}
d_L&=(-3,0,3,3), &d_R&=(5,0,5,5),\\
\mathcal P(d_L)&=(-1,0,1), &\mathcal P(d_R)&=(1,0,1).
\end{aligned}
$$

Their material radii are three and five, but their projected radii are both one. For independently chosen positive scalars $\lambda,\gamma$,

$$
\mathcal P(\lambda d_L)=\mathcal P(d_L),\qquad
\mathcal P(\gamma d_R)=\mathcal P(d_R),\tag{32}
$$

since every numerator and depth has the same factor. The complete labelled two-disc geometric mask is thus unchanged, despite different material radii, depths and separation. The independent scaling is about the pinhole and includes each disc's radius, not just its centre.

The construction excludes binocular, motion, additional depth and occlusion cues and assumes frontoparallel planar surfaces. Illumination, luminance, reflectance and other photometry are not modelled. Equal untextured geometry does not by itself establish equal full retinal signals. This synthetic construction is not a fit or reanalysis of the contextual-disc experiment.

Replacing the two distal material tokens with different tokens in the same projection arrangement also preserves this geometry. An account under which those particular objects partly constitute the current perceptual engagement may therefore distinguish which things are perceived without yet determining how they appear. A *de re* constituent claim is not a law of qualitative co-presentation. Equal angular extent need not express equal intrinsic radius, and projection alone neither produces appearance nor establishes its jointness. Conversely, a retained bounded descriptor can generate a later relational presentation after the original objects are removed; that new third need not be current perception of the absent tokens. Object identity, optical supply, current engagement and qualitative appearance remain distinct targets. The main article's current-act argument supplies its separately defended occurrence and mode-placement warrant rather than deriving them from (31).

See the publication's [references](/consciousness/relational-awareness/references) for the network, perceptual, relational-observable and agency sources.
