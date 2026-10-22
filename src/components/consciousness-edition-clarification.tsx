import Link from 'next/link';

/** Editorial context is outside the preserved publication text and downloads. */
export default function ConsciousnessEditionClarification({scope = 'foundation'}: {
  scope?: 'foundation' | 'constitution' | 'content' | 'completion';
}) {
  return <aside className="my-8 rounded-lg border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--surface))] p-5 sm:p-7" aria-label="Current authorial clarification">
    <p className="c-eyebrow">Editorial clarification / 20 October 2026</p>
    <p className="mt-3 text-sm leading-relaxed text-mute">The publication text below is preserved unchanged. In the author’s clarified account, “awareness” provisionally names a quality attributed to the unknown ground and does not mean knowing or a knowing subject. The published A0 calls awareness the knowing aspect of U, the unsplit. These remain distinct formulations pending formal reconciliation.</p>
    {scope === 'constitution' && <p className="mt-3 text-sm leading-relaxed text-mute">A1’s admission law and A2’s identity law are proposed constitutive premises. Their mathematical consequences do not independently establish that recurrence constitutes interpretation or select nature’s subject boundary. No replacement admission or content law is adopted here.</p>}
    {scope === 'content' && <p className="mt-3 text-sm leading-relaxed text-mute">Retained organization, its influence on interpretation and current experienced content must be distinguished. A2’s complete predictive object is accompanied by the realized state; it does not say that every stored memory is explicitly recalled at once. Whether that identity claim fully expresses the clarified account remains a question for formal reconciliation.</p>}
    {scope === 'completion' && <p className="mt-3 text-sm leading-relaxed text-mute">The finite completion result remains conditional on the declared realization and SPC-2 premises. The source gives A0 no numerical role in that construction; A0 supplies its experiential interpretation. Equality of physical transcript probabilities does not validate the proposed perspective and content assignments.</p>}
    <Link href="/consciousness#a0-clarification" className="mt-4 inline-block text-sm font-medium text-glow">Read the dated A0 clarification and its scope →</Link>
    {scope === 'content' && <Link href="/consciousness#experiencing-and-interpretation" className="mt-3 block text-sm font-medium text-glow">Experiencing, interpretation and current content →</Link>}
  </aside>;
}
