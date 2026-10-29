import Link from 'next/link';

/** Related monograph reference; the associated article keeps its own publication text. */
export default function ConsciousnessEditionClarification({scope = 'foundation'}: {
  scope?: 'foundation' | 'constitution' | 'content' | 'completion';
}) {
  return <aside className="my-8 rounded-lg border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--surface))] p-5 sm:p-7" aria-label="Related revised monograph">
    <p className="c-eyebrow">Shadow Theory and Consciousness / Revised edition</p>
    <p className="mt-3 text-sm leading-relaxed text-mute">The revised monograph of 28 October 2026 integrates the ground-quality account into A0. The unconditioned ground, the unsplit U, fundamental awareness and a localized knowing subject have distinct roles. A1–A3 specify perspective admission, phenomenal organization and nonbranching experiential continuation.</p>
    <Link href="/consciousness/monograph/the-shadow-psychophysical-constitution#ax:A0" className="mt-4 inline-block text-sm font-medium text-glow">Read the revised A0–A3 account →</Link>
    {scope === 'content' && <Link href="/consciousness/monograph/awareness-contents-and-the-personal-model#sec:enacted-incorporation" className="mt-3 block text-sm font-medium text-glow">Enacted organization and current content →</Link>}
  </aside>;
}
