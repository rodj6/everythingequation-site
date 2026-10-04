import Link from "next/link";
import { quantumMonograph } from "@/config/quantum";

/** A static reading map: arrows describe each construction, never a simulation. */
export default function QuantumProgrammeFeature() {
  return (
    <section aria-labelledby="quantum-programme-heading" className="relative overflow-hidden rounded-2xl border border-[hsl(var(--accent)/0.3)] bg-surface">
      <div aria-hidden="true" className="glow-cyan pointer-events-none absolute -right-16 -top-32 h-80 w-80" />
      <div className="relative p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="section-label">Quantum Measurement &amp; Born Rule</p>
          <p className="font-mono text-xs text-mute">4 October 2026 · Five research papers</p>
        </div>
        <h2 id="quantum-programme-heading" className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          From a quantum source<br />to a physical record.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mute">
          Why the Born distribution, what fixes an event history, and how does a record
          preserve it? Five papers bring equilibrium uniqueness, autonomous measurement
          chains and quantitative nonequilibrium records into one research programme.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/quantum-measurement/research/hybrid-bell-paths" className="group rounded-xl border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.04)] p-5 transition hover:border-[hsl(var(--accent)/0.7)] sm:p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-glow">01 / Pilot medium</p>
            <h3 className="mt-3 text-xl font-semibold">A controlled Bell-path limit</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">Prepared gas contacts and finite packet recombination select the limiting event history. A finite clock apparatus writes and retains material records.</p>
            <p className="mt-5 border-t border-[hsl(var(--accent)/0.2)] pt-4 font-mono text-xs leading-6 text-glow">currents → packets → contacts → events → records</p>
            <span className="mt-4 block text-sm font-medium text-fg group-hover:text-glow">Read the construction →</span>
          </Link>
          <Link href="/quantum-measurement/research/equilibrium-records" className="group rounded-xl border border-[hsl(var(--violet)/0.3)] bg-[hsl(var(--violet)/0.04)] p-5 transition hover:border-[hsl(var(--violet)/0.7)] sm:p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-vio">02 / Massive configuration</p>
            <h3 className="mt-3 text-xl font-semibold">Continuous motion, retained histories</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">Guidance and initial equilibrium govern a massive apparatus. Trapped pointers, finite resources and an autonomous controller preserve outputs and earlier archives.</p>
            <p className="mt-5 border-t border-[hsl(var(--violet)/0.2)] pt-4 font-mono text-xs leading-6 text-vio">wave + configuration → pointer → copy → archive</p>
            <span className="mt-4 block text-sm font-medium text-fg group-hover:text-vio">Read the construction →</span>
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["control-consistency", "Why Born equilibrium?", "Local controls and fixed interactions characterize a regular statistical assignment."],
            ["preparation-returns", "The power of an exact return", "A return library selects the Born measure at an engineered preparation."],
            ["nonequilibrium-records", "Records beyond equilibrium", "Two finite models control calibration, actual copying and the entire holding interval."],
          ].map(([id, title, body]) => <Link href={`/quantum-measurement/research/${id}`} key={id} className="rounded-xl border border-edge p-5 hover:border-edge-strong"><h3 className="font-semibold text-glow">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{body}</p><span className="mt-4 block text-sm text-glow">Read the full argument →</span></Link>)}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link href="/quantum-measurement" className="rounded-lg bg-[hsl(var(--accent))] px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[hsl(var(--accent-strong))]">Explore the measurement programme →</Link>
          <Link href={quantumMonograph.webUrl} className="text-sm font-medium text-glow hover:text-glow-strong">Complete monograph, proofs &amp; counterexamples →</Link>
        </div>
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-faint">Read all five papers in full, with the mathematics, proofs, source PDFs and DOI links. The September monograph and original companion editions remain available alongside the new work.</p>
      </div>
    </section>
  );
}
