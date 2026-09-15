"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Completion = "pilot" | "massive";
const paths = {
  pilot: {
    name: "Pilot medium", label: "Discrete configurations · controlled Bell limit",
    steps: [
      { name: "Source action", symbol: "J", title: "An individual current on every bond", text: "The canonical source action supplies each Hamiltonian bond current. Conservative exporters transfer its signed action into packets, retaining the bounded remainder and all spent resources.", premise: "Primitive bond ownership, common action unit and the P1–P4 interaction catalogue.", result: "Signed packet production follows the individual current.", href: "/quantum-measurement/pilot-medium#sec:source" },
      { name: "Spatial contacts", symbol: "±", title: "Timing begins in the prepared gas", text: "Gas particles move deterministically. Independently prepared positions and marks produce the complete candidate-contact history in the limit. Knowing the entire pilot microstate instead gives a deterministic history.", premise: "Independent spatial gas preparation and the specified deterministic contact rules.", result: "Control of the full marked-contact process, beyond its average rate.", href: "/quantum-measurement/pilot-medium#sec:mainlimit" },
      { name: "Recombination", symbol: "+", title: "Opposite packets remove surplus traffic", text: "Positive and negative packets coexist at finite resources. Their finite-speed recombination suppresses balanced service in the stated hierarchy of limits. The positive part of the current emerges at this comparison step.", premise: "The declared two-species reaction list and fast-recombination scaling.", result: "Excess-only signed service with a controlled approximation error.", href: "/quantum-measurement/pilot-medium#sec:mainlimit" },
      { name: "Bell paths", symbol: "λ", title: "A law for the entire physical-time path", text: "Carrier population tracking supplies the residence denominator. Combining contact, recombination and kinetic estimates gives total-variation convergence of complete tagged paths to the minimal Bell process, including nodes, reversals and null intervals.", premise: "A fixed finite graph and horizon, the stated initial carrier ensemble, and the resource limit.", result: "The controlled Bell-path limit; finite members retain quantified deviations.", href: "/quantum-measurement/pilot-medium#thm:main" },
      { name: "Physical archive", symbol: "A", title: "A record must tell the truth about its past", text: "The ordinary configuration includes the source, clock, fuel, loss products, displays, archives and reset receivers. In the limiting Bell process, a monomial copy cut is crossed exactly once on the finite clock’s first pass. The finite pilot inherits a controlled archive-history error through the complete-path comparison.", premise: "The autonomous finite clock circuit, initial equilibrium and the first-pass storage domain.", result: "Exact Bell-limit archive faithfulness; controlled finite-pilot record and continuation errors.", href: "/quantum-measurement/pilot-medium#mat:copy" },
    ],
  },
  massive: {
    name: "Massive configuration", label: "Continuous material positions · guided motion",
    steps: [
      { name: "Complete wave", symbol: "Ψ", title: "Every material system belongs to one wave", text: "A spinor Schrödinger wave describes the source, apparatus, fuel, memories, spent products and inaccessible reference. The physical inventory uses massive positions and semibounded Hamiltonians; internal amplitudes carry no extra actual spin label.", premise: "Universal material inventory and complete initial equilibrium, with a finite independent ready stock.", result: "One admitted constitution for contacts, records and subsequent operations.", href: "/quantum-measurement/massive-configuration#sec:constitution" },
      { name: "Guided motion", symbol: "Q", title: "An actual continuous path through configuration space", text: "Material positions follow the kinetic-momentum guidance law. The initial configuration and the wave determine the later motion. Complete initial equilibrium supplies its statistical law and is an explicit preparation premise.", premise: "The postulated velocity v = j/ρ, used where ρ is positive.", result: "Conservative actual motion in the stated smooth finite domain.", href: "/quantum-measurement/massive-configuration#eq:guidance" },
      { name: "Pointer writing", symbol: "q", title: "A massive pointer makes the outcome physical", text: "Smooth forced harmonic traps write material position records. Their exact motion gives a physical-time crossing law for this pointer. Null and loss branches remain in the complete resource state.", premise: "The paper’s explicit trap Hamiltonian and prepared pointer wave.", result: "An exact massive writer and its specified null law.", href: "/quantum-measurement/massive-configuration#sec:detector" },
      { name: "Archive protection", symbol: "A", title: "Preserve the earlier record through later operations", text: "Stationary conditional traps protect earlier declarations while the working apparatus is copied, reset and reused. The autonomous approximation controls absolute archive flux separately from the error in the retained wave.", premise: "Protected storage, derivative estimates and the finite controller’s resource bounds.", result: "Control of historical corruption as well as retained-output error.", href: "/quantum-measurement/massive-configuration#thm:history" },
      { name: "Continuation", symbol: "U", title: "Reset transfers resources; it does not erase them", text: "Transported-trap reset retains its receiver. Spatial feedback and noncommuting continuation operate with the earlier archive and inaccessible reference still present. A retained massive clock realizes the finite programme autonomously.", premise: "A fixed finite programme and the stated guidance, equilibrium and material premises.", result: "Finite measurement-chain closure with controlled output and history errors.", href: "/quantum-measurement/massive-configuration#thm:closure" },
    ],
  },
};

function MechanismDrawing({ mode, stage }: { mode: Completion; stage: number }) {
  const color = mode === "pilot" ? "#6fe0ea" : "#bca3ff";
  return (
    <svg viewBox="0 0 880 270" role="img" aria-labelledby="mechanism-title mechanism-desc" className="qm-mechanism-drawing">
      <title id="mechanism-title">{mode === "pilot" ? "Pilot packets, candidate contacts and a retained archive" : "Guided massive pointer and retained apparatus"}</title>
      <desc id="mechanism-desc">{mode === "pilot" ? "Illustrative positive and negative packets pass through a recombination region. A tagged carrier follows a discrete path into a material archive." : "Illustrative continuous pointer paths separate into outcome regions. A retained archive persists while the working display resets and a receiving system keeps the transferred state."} This is a schematic, with no simulated data or quantitative scale.</desc>
      <defs>
        <linearGradient id="qm-line" x1="0" x2="1"><stop stopColor={color} stopOpacity=".08"/><stop offset=".5" stopColor={color}/><stop offset="1" stopColor={color} stopOpacity=".25"/></linearGradient>
        <pattern id="qm-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="#8ba4c2" strokeOpacity=".07"/></pattern>
      </defs>
      <rect width="880" height="270" fill="url(#qm-grid)"/>
      {mode === "pilot" ? <>
        <text x="45" y="37" className="qm-svg-label">SIGNED ACTION</text>
        <text x="293" y="37" className="qm-svg-label">CONTACT / RECOMBINATION</text>
        <text x="635" y="37" className="qm-svg-label">ORDINARY CONFIGURATION</text>
        <path d="M30 133 C50 63 70 63 90 133 S130 203 150 133 S190 63 210 133" fill="none" stroke={color} strokeWidth="2"/>
        <line x1="220" x2="520" y1="103" y2="103" stroke="url(#qm-line)"/>
        <line x1="220" x2="520" y1="163" y2="163" stroke="url(#qm-line)"/>
        {[245,290,335,430,475].map((x,i)=><g key={x}><circle cx={x} cy="103" r="12" fill="#102930" stroke={color} opacity={stage >= 1 ? 1 : .4}/><text x={x} y="108" textAnchor="middle" fill={color} fontSize="17">+</text>{i<3 && <><circle cx={x} cy="163" r="12" fill="#222039" stroke="#bca3ff"/><text x={x} y="168" textAnchor="middle" fill="#bca3ff" fontSize="17">−</text></>}</g>)}
        <path d="M340 103 Q385 103 386 133 Q385 163 340 163" fill="none" stroke="#9fadc3" strokeDasharray="3 5"/>
        <rect x="370" y="117" width="32" height="32" rx="8" fill="#111e30" stroke="#526176" transform="rotate(45 386 133)"/>
        <text x="386" y="210" textAnchor="middle" className="qm-svg-small">retained products</text>
        <line x1="386" x2="386" y1="156" y2="187" stroke="#526176" strokeDasharray="3 4"/>
        <path d="M535 177 H577 V133 H625 V89 H671 H731" fill="none" stroke={color} strokeWidth="2.5" opacity={stage >= 3 ? 1 : .4}/>
        {[535,577,625,671].map((x,i)=><circle key={x} cx={x} cy={[177,133,89,89][i]} r="5" fill={color}/>)}
        <rect x="748" y="69" width="78" height="115" rx="7" fill="#112530" stroke={color} opacity={stage === 4 ? 1 : .65}/>
        <path d="M766 93 H808 M766 111 H808 M766 129 H794" stroke={color} strokeOpacity=".65"/>
        <text x="787" y="164" textAnchor="middle" fill={color} fontSize="17">A</text>
        <text x="139" y="243" textAnchor="middle" className="qm-svg-small">individual bond currents</text>
        <text x="599" y="243" textAnchor="middle" className="qm-svg-small">tagged path → actual copy</text>
      </> : <>
        <text x="43" y="37" className="qm-svg-label">PREPARED POINTER</text>
        <text x="298" y="37" className="qm-svg-label">CONTINUOUS GUIDED MOTION</text>
        <text x="661" y="37" className="qm-svg-label">RETAINED SYSTEMS</text>
        <path d="M38 192 C65 192 74 188 89 151 C107 104 125 104 143 151 C158 188 170 192 197 192" fill={color} fillOpacity=".1" stroke={color} strokeWidth="2"/>
        <path d="M225 135 C320 135 330 81 460 78 H583 M225 146 C315 146 375 146 583 146 M225 157 C320 157 330 206 460 209 H583" fill="none" stroke={color} strokeWidth="1.5" opacity=".38"/>
        <path d="M225 140 C318 140 337 91 460 91 H583" fill="none" stroke={color} strokeWidth="3" opacity={stage >= 1 ? 1 : .4}/>
        <circle cx={stage < 2 ? 328 : 500} cy={stage < 2 ? 117 : 91} r="6" fill={color}/>
        <path d="M583 65 V106 M583 128 V164 M583 191 V227" stroke={color} strokeWidth="3"/>
        <text x="465" y="66" className="qm-svg-small">outcome region</text>
        <text x="468" y="174" className="qm-svg-small">retained null</text>
        <path d="M605 91 H650 M605 146 H630 V191 H650" fill="none" stroke="#63718c" strokeDasharray="4 5"/>
        {[{y:62,label:"ARCHIVE A",sub:"earlier declaration"},{y:157,label:"RESET RECEIVER",sub:"reset retained"}].map(({y,label,sub})=><g key={label}><rect x="654" y={y} width="179" height="66" rx="7" fill="#19172c" stroke={color} opacity={stage>=3?1:.55}/><text x="674" y={y+25} fill={color} fontSize="12" letterSpacing="1.5">{label}</text><text x="674" y={y+46} className="qm-svg-small">{sub}</text></g>)}
        <text x="115" y="243" textAnchor="middle" className="qm-svg-small">initial equilibrium</text>
        <text x="381" y="243" textAnchor="middle" className="qm-svg-small">physical time →</text>
      </>}
    </svg>
  );
}

function MobileMechanism({ mode, stage }: { mode: Completion; stage: number }) {
  const color = mode === "pilot" ? "#79e2ec" : "#bca3ff";
  const nodes = mode === "pilot"
    ? [{ title: "SOURCE ACTION", symbol: "J", detail: "individual currents" }, { title: "SPATIAL CONTACTS", symbol: "±", detail: "prepared gas" }, { title: "RECOMBINATION", symbol: "± → +", detail: "surplus suppressed" }, { title: "TAGGED BELL PATH", symbol: "λ = [J]₊ / w", detail: "controlled limit" }, { title: "PHYSICAL ARCHIVE", symbol: "A", detail: "first-pass actual copy" }]
    : [{ title: "COMPLETE WAVE", symbol: "Ψ", detail: "initial equilibrium" }, { title: "GUIDED MOTION", symbol: "Q̇ = j / ρ", detail: "continuous positions" }, { title: "MASSIVE POINTER", symbol: "q(t)", detail: "physical writing" }, { title: "PROTECTED ARCHIVE", symbol: "A", detail: "earlier declaration" }, { title: "CONTINUATION", symbol: "U", detail: "reset receiver retained" }];
  const positions = [[7,10],[177,10],[177,120],[7,120],[92,230]];
  return <svg className="qm-mobile-mechanism" viewBox="0 0 330 330" role="img" aria-label={`${paths[mode].name}: five schematic stages; ${nodes[stage].title.toLowerCase()} selected. Arrows follow the argument, not a simulated trajectory.`}>
    <path d="M146 53 H177 M246 97 V120 M177 163 H146 M77 207 V273 H92" fill="none" stroke={color} strokeOpacity=".45" strokeDasharray="3 4"/>
    <path d="m170 49 7 4-7 4 M242 113l4 7 4-7 M153 159l-7 4 7 4 M85 269l7 4-7 4" fill="none" stroke={color} strokeOpacity=".8"/>
    {nodes.map((node,index)=>{const [x,y]=positions[index];return <g key={node.title}>
      <rect x={x} y={y} width="139" height="87" rx="6" fill={stage===index?"#1a2a3f":"#0d1727"} stroke={color} strokeOpacity={stage===index?1:.25}/>
      <text x={x+12} y={y+18} fill={color} fontSize="9" letterSpacing=".5" fontFamily="ui-monospace, monospace">{node.title}</text>
      <text x={x+69.5} y={y+49} textAnchor="middle" fill={color} fontSize={node.symbol.length>5?19:27} fontFamily="Georgia, serif">{node.symbol}</text>
      <text x={x+69.5} y={y+71} textAnchor="middle" fill="#a9b8cd" fontSize="9" fontFamily="ui-monospace, monospace">{node.detail}</text>
    </g>})}
  </svg>;
}

export default function QuantumProgramme() {
  const [mode, setMode] = useState<Completion>("pilot");
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { setReducedMotion(media.matches); if (media.matches) setPlaying(false); };
    sync(); media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!playing || reducedMotion) return;
    const id = window.setTimeout(() => {
      if (stage === 4) setPlaying(false);
      else setStage(stage + 1);
    }, 6500);
    return () => window.clearTimeout(id);
  }, [playing, reducedMotion, stage]);
  const path = paths[mode];
  const current = path.steps[stage];
  const chooseMode = (next: Completion) => { setMode(next); setStage(0); setPlaying(false); };
  return (
    <div className={`qm-explorer qm-${mode}`}>
      <div className="qm-explorer-top">
        <div className="qm-switch" role="group" aria-label="Choose a constitutive completion">
          <button type="button" aria-pressed={mode === "pilot"} onClick={() => chooseMode("pilot")}><span className="qm-switch-dot"/>Pilot medium</button>
          <button type="button" aria-pressed={mode === "massive"} onClick={() => chooseMode("massive")}><span className="qm-switch-dot"/>Massive configuration</button>
        </div>
        <span className="qm-figure-label">EXPLAINER 01 / SCHEMATIC</span>
      </div>
      <div className="qm-explorer-heading"><p>{path.label}</p><button type="button" className="qm-play" disabled={reducedMotion} onClick={() => { if(stage===4) setStage(0); setPlaying(!playing); }}>{reducedMotion ? "Manual steps · reduced motion" : playing ? "Ⅱ Pause walkthrough" : "▷ Play walkthrough"}</button></div>
      <div className="qm-drawing-wrap"><MechanismDrawing mode={mode} stage={stage}/><MobileMechanism mode={mode} stage={stage}/></div>
      <ol className="qm-stages" aria-label="Mechanism steps">{path.steps.map((step,index)=><li key={step.name}><button type="button" aria-current={index===stage?"step":undefined} aria-controls="qm-step-detail" onClick={()=>{setStage(index);setPlaying(false);}}><span className="qm-stage-number">0{index+1}</span><span>{step.name}</span><span className="qm-stage-symbol" aria-hidden="true">{step.symbol}</span></button></li>)}</ol>
      <div className="qm-step-detail" id="qm-step-detail" aria-live={playing?"off":"polite"}>
        <div><span className="qm-eyebrow">STEP 0{stage+1} / {path.name}</span><h3>{current.title}</h3><p>{current.text}</p><Link href={current.href} className="qm-text-link">Read the construction and proof <span aria-hidden="true">↗</span></Link></div>
        <dl><div><dt>Premise</dt><dd>{current.premise}</dd></div><div><dt>Conclusion</dt><dd>{current.result}</dd></div></dl>
      </div>
      <p className="qm-schematic-note">Illustration of the argument. The paths, packet positions and spacing are schematic; this is not a simulation, experimental evidence or a numerical theorem check.</p>
    </div>
  );
}
