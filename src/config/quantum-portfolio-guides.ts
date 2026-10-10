export type QuantumPortfolioGuide = {
  headline: string;
  introduction: string[];
  readingGuide: { title: string; sectionTitle: string; body: string }[];
  connection: string;
  related: string[];
  nextQuestion: string;
  sectionIntros: Record<string, string>;
};

/** Editorial orientation for the complete technical web editions. */
export const quantumPortfolioGuides: Record<string, QuantumPortfolioGuide> = {
  'conditional-gaussian-preparation': {
    headline: 'Preparation with every archive still present',
    introduction: [
      'A preparation procedure must work with the information the apparatus actually retains. This construction keeps the writer, every preparation archive, and a separate measurement receiver in one complete description. Smooth harmonic controls split the writer, copy its branch into an archive, and return its wave to the ready form. The exact configuration map tracks where the earlier information goes.',
      'The decisive estimate concerns the writer together with its entire actual archive. It bounds their joint law against a ready writer paired with the archive’s unchanged actual marginal. Weak relative-score and moment assumptions on the full original conditional law make this preparation quantitative without a density cap. An explicit bank with 102 positional coordinates achieves readiness below 0.000010052.',
      'The same finite construction then supports one unknown internal input and a distinct physical receiver. Under the stated preparation and holding conditions, the labelled projective-instrument comparison has the same error ceiling for any finite internal reference. The receiver records the earlier writer event and keeps its sign during the specified hold. The arguments below retain the exact maps, inverse, exceptional sets, and complete error calculation.',
    ],
    readingGuide: [
      {
        title: 'Follow the physical map',
        sectionTitle: 'A smooth copy–return map on the complete configuration',
        body: 'Start with the translated Gaussian packets and their complete guidance current. The resulting smooth map gives the physical realization, preserves reference area, and keeps an explicit inverse.',
      },
      {
        title: 'Keep the whole archive in the estimate',
        sectionTitle: 'Complete-law preparation with every archive retained',
        body: 'The preparation comparison includes all final archive coordinates and unused sources. Sectional variation controls the error while the archive retains its actual distribution.',
      },
      {
        title: 'See what the statistical assumptions buy',
        sectionTitle: 'Physical relative scores without a density cap',
        body: 'Physical weak scores control variations on a finite box; actual moments pay for its tails. This is the route to the explicit finite bank and its numerical readiness bound.',
      },
      {
        title: 'Use the prepared writer',
        sectionTitle: 'One unknown input and a separate held receiver',
        body: 'The instrument construction loads the unknown input after warmup, copies the writer’s event into another coordinate, and controls the labelled output with a finite internal reference.',
      },
    ],
    connection:
      'This paper supplies the portfolio’s conditional-preparation and one-use instrument construction. The repeated-record paper develops a separate reader, copy gate, and reset bank. Connecting the two requires readiness conditional on that entire bank and operations that preserve the prepared writer’s stated interface. The flow and current papers provide further tools for extending the analysis to more general parents.',
    related: ['repeated-position-records', 'reference-weighted-flows', 'complete-current-estimates'],
    nextQuestion:
      'Can one material apparatus supply the initial statistical class and controls, then prepare and record a sequence of unknown inputs while retaining every used archive?',
    sectionIntros: {
      'The preparation question':
        'The starting point is a physical question about retained information: after a reversible preparation, how ready is the writer when its entire archive remains available? This section states the target and places the construction alongside earlier preparation and quantum-equilibrium work.',
      'Laws, configurations and error metrics':
        'The wave fixes a reference density; the actual entrance law is a separate input. The readiness metric compares complete joint laws, so its nuisance variable includes every retained archive and relevant external context.',
      'A smooth copy–return map on the complete configuration':
        'Three controlled stages produce one exact smooth map. Following the complete current through each stage reveals both the reversible geometry and the fine information that a retained archive can preserve.',
      'Complete-law preparation with every archive retained':
        'The baker comparison contracts the writer’s conditional variation while its symbols accumulate in the archive. Grid estimates then transfer that effect to the smooth physical map, with every spectator and archive still inside the joint law.',
      'Physical relative scores without a density cap':
        'This section turns assumptions on ordinary physical coordinates into quantitative preparation bounds. Weak scores supply the variation estimates, and the original actual tails are charged explicitly in the finite example.',
      'Robustness under complete physical map errors':
        'A perturbed implementation changes the full transport map. The estimates here separate displacement, exceptional configurations, and reference-density error so that each has a stated cost in readiness.',
      'One unknown input and a separate held receiver':
        'The prepared writer now acts on an unknown internal input. A different coordinate records its earlier declaration; the joint argument controls that record and the conditional postmeasurement state under the same original-law assumptions.',
      'Instrument stability, reference systems, and postselection':
        'Two transfer criteria describe how implementation errors enter the labelled instrument. The finite-reference estimates retain their input domain, and the postselection calculation shows how conditioning changes the error budget.',
      'A complementary finite regular-basin theorem':
        'A separate random-return mechanism gives uniform finite preparation over a weak-Fisher regularity class. Its spectral argument complements the deterministic construction and makes the role of the retained command history explicit.',
      'Physical scope and relation to companion work':
        'The interfaces are stated in terms of the complete Hamiltonian, current, original law, and decoder. This identifies what can be carried into another construction and what an enlarged apparatus must establish for itself.',
      Conclusion:
        'The construction brings the exact reversible map, conditional preparation, and one-use physical instrument into the same finite Gaussian parent. Its final statement collects the positive result and the concrete next steps for implementation.',
    },
  },

  'repeated-position-records': {
    headline: 'Records that survive the operations that follow',
    introduction: [
      'A physical record must keep identifying its earlier event while the rest of the apparatus continues to operate. This construction reads successive digits of an actual retained archive into different receiver positions and follows every receiver through the remaining schedule.',
      'Each cycle has four jobs: expose an archive digit, load its sign, copy that sign into a receiver, and restore the scratch wave. A compact smooth baker, a scalar loader, a coherent copying gate, and a positive Ermakov reset perform these jobs. Used reset coordinates stay in the apparatus and retain the quantum correlations transferred to them. One original law governs the whole history.',
      'For a complete entrance law bounded by ten times its wave-density reference, the stated 10,000-unit model schedule gives a joint failure bound below 0.0000002641 for 44 records. That event includes every receiver’s assigned region from copying through the final time. Further sections develop finite calibration and a separate approximate reset tolerant of a specified constant spring-gain error.',
    ],
    readingGuide: [
      {
        title: 'Build the reversible reader',
        sectionTitle: 'A compact stock-preserving baker module',
        body: 'The smooth compact map reproduces the baker’s affine action on controlled regions. Its inverse exposes the archive digits in the correct order.',
      },
      {
        title: 'Write an earlier actual event',
        sectionTitle: 'A smooth scalar gate which copies the entry sign',
        body: 'The coherent Gaussian comparison retains interference and phase information. Complete-current estimates connect the receiver’s region to the scratch coordinate’s earlier entry sign.',
      },
      {
        title: 'Restore the scratch and keep its correlations',
        sectionTitle: 'Exact reset with its correlations retained',
        body: 'A positive scalar pulse exchanges wave factors with a reset mode already in the bank. Its arbitrary-input formula shows exactly where the used scratch correlations are stored.',
      },
      {
        title: 'Check the whole schedule',
        sectionTitle: 'One complete protocol and its joint error budget',
        body: 'The read, load, copy, and reset modules are assembled with the later holding costs. The numerical example is a joint guarantee for all 44 complete record histories.',
      },
      {
        title: 'Price finite control errors',
        sectionTitle: 'Calibration in the complete current and record history',
        body: 'The calibration criterion includes local current errors, moving boundaries, actual archive motion between pulses, and guard losses.',
      },
    ],
    connection:
      'This paper supplies a finite repeated-record mechanism for actual archive digits. P1 supplies a separate one-use preparation and instrument result; its readiness can enter only with the correct full-bank conditioning. P3 studies the complete flow needed to interpret currents as histories, while P4 develops coherent-current estimates for source-coupled models.',
    related: ['conditional-gaussian-preparation', 'reference-weighted-flows', 'complete-current-estimates'],
    nextQuestion:
      'Can the stock, original-law preparation, material controls, and receiver isolation be realized together with feasible calibration in one apparatus?',
    sectionIntros: {
      'The question: a record of an earlier actual event':
        'The record requirement covers both correspondence with an earlier event and retention through later operations. This gives the entire construction a common target: one joint event under the complete original law.',
      'A compact stock-preserving baker module':
        'Rounded squares and an area clock turn the baker geometry into smooth compact controls. The construction keeps its affine action exact on the selected regions and tracks the derivative costs needed by later calibration.',
      'The scalar Hamiltonian and complete current':
        'A stationary Gaussian wave supports the designed motion through the minimal-coupling current. The compiler derives the Hamiltonian, common domain, and actual velocity for that complete current.',
      'The original law, fine archive and retained information':
        'The archive keeps both its symbolic digits and its analog entrance data. Explicit inverse arithmetic and full-law estimates show how conditional preparation coexists with this retained information.',
      'Reading a retained archive into different receivers':
        'All receivers and reset modes are present at the entrance. The reader and sign-preserving loader use that fixed bank, carrying its original correlations through each cycle.',
      'A smooth scalar gate which copies the entry sign':
        'The copying task is a statement about actual positions along a path. Coherent comparison waves, localized forcing, and slice-current estimates establish the relation between the entry sign and the written receiver.',
      'Exact reset with its correlations retained':
        'The next read needs the scratch wave restored to its stock factor. The Ermakov pulse achieves that for an arbitrary entangled scratch wave by transferring the old factor and its correlations into a retained reset coordinate.',
      'Earlier receivers during every later operation':
        'Once a receiver has been written, every subsequent operation enters its retention analysis. Hilbert-valued slice bounds keep all spectator coordinates in the estimate while controlling crossings of the physical record boundaries.',
      'One complete protocol and its joint error budget':
        'This is the assembly point. The compatible module sequence, one original-law bound, copy errors, and all later hold costs produce the complete repeated-record theorem and the 44-record numerical example.',
      'What reset preserves: full laws and exact counterexamples':
        'An exact wave exchange can leave the configuration map unchanged. The examples calculate this difference directly, showing why repeated use must retain the actual joint law even after an exact quantum reset.',
      'Calibration in the complete current and record history':
        'Finite calibration affects waves, currents, and archive motion in different ways. The estimates here keep those quantities distinct and assemble them into a criterion for the decoded record history.',
      'An approximate reset uniform over an actual spring-gain interval':
        'A separate positive spring sweep gives approximate exchange across a fixed interval of constant gain errors. All annihilator and creator channels, endpoint phases, and finite pulse resources enter the bound.',
      Conclusion:
        'The reader, copying gate, reset, and retention estimates establish one complete finite record history. The remaining implementation questions are attached to specific stocks, controls, and calibration requirements.',
      'A distinct retained-symbolic-history calibration':
        'The appendix treats a simpler expanding-map question: how close is a writer to uniform when every symbolic digit is retained? Its BV estimate and finite-overlap corrections keep the entire symbolic history in the comparison.',
    },
  },

  'reference-weighted-flows': {
    headline: 'From a complete quantum current to a complete history',
    introduction: [
      'The continuity equation describes how density moves. A deterministic account also needs paths that remain defined through the entire interval, with nodes, singularities, and source coordinates treated explicitly. This paper establishes that passage for a declared complete quantum current.',
      'Finite action and logarithmic variation, local Sobolev control where the density is positive, and physical-boundary estimates select deterministic reference-compatible histories. Uniqueness holds in the stated class of path laws with a common finite marginal-domination bound. Any original entrance law absolutely continuous with respect to the wave density then travels along the same paths by one initial reweighting.',
      'The framework also controls approximation and stability of entire histories. Its applications retain radial interaction jumps, bare Coulomb collisions, and a dynamical quantum oscillator source. A separate signed-source theorem handles sufficiently regular comparison currents with a continuity defect. The proofs make the required domains and the cost of exceptional histories explicit.',
    ],
    readingGuide: [
      {
        title: 'See how deterministic paths are selected',
        sectionTitle: 'The logarithmic chain rule and deterministic selection',
        body: 'The logarithmic estimate prevents almost every admitted path from reaching a node at any time. Local Sobolev control then makes the conditional path law deterministic.',
      },
      {
        title: 'Transport the original law through a limit',
        sectionTitle: 'Conforming approximation and the original history law',
        body: 'Strong density and complete-current convergence, together with uniform action and a fixed entrance, identify the limit of entire path laws and their original-law reweightings.',
      },
      {
        title: 'Compare whole histories',
        sectionTitle: 'Whole-history stability in a positive-density tube',
        body: 'The comparison controls the largest path separation during the interval. Its budget includes the probability that either path leaves the common comparison region.',
      },
      {
        title: 'Keep a quantum source in the flow',
        sectionTitle: 'An electron with a retained quantum oscillator source',
        body: 'The electron and oscillator evolve as one parent, with both physical currents retained. The domain argument covers the Coulomb cusp and the source’s entrance node.',
      },
      {
        title: 'Handle a continuity defect',
        sectionTitle: 'Approximate continuity and a whole-path source allowance',
        body: 'For the stated classical regularity, the signed-source allowance controls endpoint discrepancy, terminating paths, and transverse-crossing probabilities.',
      },
    ],
    connection:
      'P3 supplies flow and history theorems that an application can use after matching its full parent, current, entrance law, and regularity. Its retained electron–oscillator example connects directly to P4’s compact-profile model when the profiles and units agree. The explicit preparation and receiver constructions in P1 and P2 retain their own hypotheses and quantitative budgets.',
    related: ['complete-current-estimates', 'conditional-gaussian-preparation', 'repeated-position-records'],
    nextQuestion:
      'Can the flow, stability, and boundary hypotheses be verified with useful numerical costs for a complete apparatus carrying material sources, controls, and retained records?',
    sectionIntros: {
      'From a quantum current to a complete history':
        'The paper begins with the gap between a continuity equation and a deterministic physical history. It explains how the complete current and a single original law organize the flow, approximation, and singular-domain results.',
      'Complete currents and reference-compatible path laws':
        'The configuration includes every retained position, and the stipulated current fixes its velocity. Reference-compatible path laws provide the measure-theoretic setting in which existence, determinism, and transport can be stated precisely.',
      'The logarithmic chain rule and deterministic selection':
        'A finite logarithmic cost controls approach to density nodes across the full time interval. Combined with local positive-density regularity and boundary control, it selects one history for almost every admitted entrance.',
      'Conforming approximation and the original history law':
        'Approximation is tested on complete densities and currents. Tightness and identification of the path-law limit preserve the original entrance weighting through the same limiting histories.',
      'Whole-history stability in a positive-density tube':
        'Two complete flows are coupled by their common entrance. The logarithmic bound measures separation anywhere in time and keeps the probability of leaving the comparison tube in the final estimate.',
      'A first-domain route to full-wave continuity':
        'Singular interactions can make high powers of the Hamiltonian unavailable. The argument combines a genuine first-domain estimate with tangential regularity to obtain the continuous full wave required by the flow theorem.',
      'A radial-interface parent with two retained flux sources':
        'The first application keeps radial jumps, finite spin, and two quantum flux coordinates inside one parent. Source wells, tangent graphs, and complete currents provide the route through its interfaces.',
      'Bare Coulomb with an unchanged Gaussian and prescribed fields':
        'The bare repulsive Coulomb interaction and the uncut Gaussian entrance remain in the model. A relative radial gauge organizes the field terms for the first-domain and tangential regularity estimates.',
      'An electron with a retained quantum oscillator source':
        'The source amplitude is an actual configuration coordinate with its own current. This application proves a complete electron–source flow while retaining the Coulomb cusp, the source node, and the original-law weighting.',
      'A distinct compact-entrance Coulomb alternative':
        'A collision-separated smooth entrance supplies stronger classical local-flow charts. The argument spells out the changed entrance and the resulting smoothness and inverse-map properties.',
      'The quantitative cost of the anisotropic continuity route':
        'The continuity construction has a numerical price. This section retains the interpolation exponent, chart factors, source widths, and propagated graph constants needed to turn the analytic embedding into an application estimate.',
      'Why the complete current and original law matter':
        'Exact examples isolate the consequences of contracting a hidden current, admitting a singular full law from regular marginals, or changing the kinetic constitution. They show which hypotheses protect the history conclusions.',
      Conclusion:
        'The reference density supplies the flow’s measure and exceptional-set control; the original law supplies its actual population. The conclusion gathers the resulting transport interfaces and their application requirements.',
      'Approximate continuity and a whole-path source allowance':
        'A comparison density with a signed continuity defect needs its own transport accounting. Under the stated classical local regularity, the integrated negative source bounds lost paths and endpoint error, with a further surface term for transverse crossings.',
    },
  },

  'complete-current-estimates': {
    headline: 'Keep the source, the interference, and the current',
    introduction: [
      'A controlled wave approximation becomes a transport estimate when it also controls the physical derivatives and every retained source current. This paper develops that conversion for coherent quantum dynamics, including singular interactions, bound-state poles, continuous spectra, and feedback from a dynamical source.',
      'Several complementary routes supply the needed derivative control. Temporally regular forcing can be lifted into a physical form estimate; finite spectral windows can handle an input whose direction changes in Hilbert space; and ordered resolvents carry physical energy weights through an interacting parent. The order of the operators, source derivatives, and endpoint terms remains visible in each proof.',
      'A Coulomb electron coupled to a quantum oscillator through a smooth compact interaction profile provides a worked application. The calculation retains the full bound-and-continuum forcing measure, the actual source interaction, and reciprocal feedback. A separate finite-time calculation bounds the integrated electron and source current differences by 0.046 and 0.004 in their respective coordinate lengths. Those bounds supply quantitative inputs for subsequent transport and record analysis.',
    ],
    readingGuide: [
      {
        title: 'Start with the physical current',
        sectionTitle: 'From a coherent error to the complete physical current',
        body: 'The exact current formula includes covariant kinetic terms, coherent cross terms, and first-order drift. It identifies the wave and form norms every later response estimate must provide.',
      },
      {
        title: 'Use temporal regularity',
        sectionTitle: 'Temporal dressing in the physical form dual',
        body: 'An ordered inverse lift converts suitable forcing in the form dual into a first-form response. The common-form work bound keeps the time-dependent evolution under control.',
      },
      {
        title: 'Retain the bound states and continuum',
        sectionTitle: 'A complete Coulomb forcing measure',
        body: 'The Coulomb calculation gives the bound atoms, continuum density, normalization, and sum rules for dipole forcing. These feed the quantitative estimates without dropping the spectral poles.',
      },
      {
        title: 'Restore the coupled source',
        sectionTitle: 'The actual compact-profile electron–source parent',
        body: 'The compact interaction retains its smooth collar, true operator and form domains, source coordinate, and actual coupled resolvent. The low-window estimate includes the source weight in the stated order.',
      },
      {
        title: 'Reach the finite-time currents',
        sectionTitle: 'Actual source graphs and finite-time complete currents',
        body: 'Source graph bounds and the feedback-modified input control both electron and oscillator currents over the specified horizon. The final estimates retain their physical coordinate units.',
      },
    ],
    connection:
      'P4 supplies analytic current bounds for complete coherent parents. P3 provides compatible flow results for the retained electron–oscillator model and separate comparison theorems with their own regularity and tube assumptions. A record application must combine the relevant current estimate with its physical decoder, boundary geometry, retention interval, and original-law factor; P1 and P2 give explicit examples of preparation and record tasks.',
    related: ['reference-weighted-flows', 'repeated-position-records', 'conditional-gaussian-preparation'],
    nextQuestion:
      'Can these complete-source estimates be combined with an earned flow and a physical decoder to give useful whole-history record bounds in one material control model?',
    sectionIntros: {
      Introduction:
        'The central task is to carry an error through the full chain from coherent forcing to physical derivatives and complete current. This section explains why source feedback, spectral poles, and operator order remain part of that calculation.',
      'From a coherent error to the complete physical current':
        'The current is derived from the declared Hamiltonian before any approximation is made. Expanding the coherent wave error then identifies the kinetic and drift estimates needed for each physical coordinate.',
      'Temporal dressing in the physical form dual':
        'The actual coupled input drives the response. A common-form evolution bound and an ordered inverse lift turn its temporal regularity into control of the physical form norm.',
      'A finite spectral window with a varying coherent input':
        'The input can change direction in its Hilbert space as time passes. Interval means and an operator spectral measure control that variation while retaining the complete output spectrum.',
      'Ordered resolvents for an unbounded closed-form interaction':
        'An interaction can change the resolvent without commuting with the physical energy weight. The identities here preserve the multiplication order and transfer the weighted estimate between closed forms.',
      'Damped temporal response with a noncommuting physical form':
        'At a fixed positive frequency resolution, the actual ordered resolvent bounds the damped response. The temporal version keeps the forcing’s endpoint and zero-extension requirements explicit.',
      'Whole-form spatial and source derivatives':
        'Differentiating a response also differentiates its coupled parent and its true input. The whole-form identity retains both contributions, including derivatives in the quantum source coordinates.',
      'Spatial force and temporal regularity as distinct current resources':
        'Different residuals call for different estimates. Spatial-force bounds, positive quadratic invariants, and temporal domain control each provide a route to current control under their stated hypotheses.',
      'A complete Coulomb forcing measure':
        'The reference Coulomb problem supplies an exact spectral calculation. Bound-state contributions and the continuum density are normalized together, with the energy Jacobian and form moments retained.',
      'The actual compact-profile electron–source parent':
        'The analysis now restores the actual electron–oscillator interaction. Its compact profile, smooth collar, source weighting, and coupled resolvent determine the physical domain and low-window estimate.',
      'Actual source graphs and finite-time complete currents':
        'The evolving source remains in the input and its graph norms. Those bounds lead to a finite-time estimate for each complete current, together with the conditions needed to use the comparison in a flow argument.',
      'Significance and remaining scope':
        'Each estimate supplies a specific analytic input: a physical form norm, a spectral coefficient, a source moment, or an endpoint cost. This section assembles their significance for transport and states the interfaces a record application must provide.',
      'Spatial forcing compression with all sources retained':
        'A finite spatial-mode approximation can leave the entire source Hilbert space exact. The appendix bounds its inverse defect while preserving the exterior response and the relevant Dirichlet form traces.',
      'A small omitted source does not remove causal feedback':
        'The eliminated block responds both to its own forcing and to the retained block that drives it. The causal formula and exact two-level examples expose the feedback and entrance terms that a valid reduction must keep.',
    },
  },
};
