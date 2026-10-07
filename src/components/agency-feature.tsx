import Link from 'next/link';
import { agency } from '@/lib/agency';

export default function AgencyFeature() {
  return <section className="c-development-note" aria-labelledby="agency-feature-title">
    <p className="c-eyebrow">Agency and free will · 6 October 2026</p>
    <h2 id="agency-feature-title">An agent can change the rules by which it chooses.</h2>
    <p>Retained commitments can guide the assessment and installation of a new decision rule, with its effect tested on fresh cases. Bounded Agency and Reflective Freedom makes this mechanism explicit, establishes its information limits and finds the exact budget at which adaptive inquiry first wins in a specified finite model.</p>
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-glow">
      <Link href={agency.url}>Explore agency, freedom and the complete mathematics →</Link>
      <Link href={agency.articleUrl}>Begin with the constructed self →</Link>
    </div>
  </section>;
}
