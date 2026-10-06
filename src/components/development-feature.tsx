import Link from 'next/link';
import { development } from '@/lib/development';
export default function DevelopmentFeature() {
  return <section className="c-development-note" aria-labelledby="development-feature-title">
    <p className="c-eyebrow">Relational development · 6 October 2026</p>
    <h2 id="development-feature-title">How experience changes the organisation of later experience.</h2>
    <p>Acquired relations can become retained organisation that shapes what is noticed, inferred and acted upon. The developmental paper connects this proposal to continuation, transfer and diagnostic results, with a conditional native incorporation witness under SPC-2.</p>
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-glow">
      <Link href={development.url}>Read the full paper text</Link>
      <Link href={development.articleUrl}>Agency and the constructed self</Link>
    </div>
  </section>;
}
