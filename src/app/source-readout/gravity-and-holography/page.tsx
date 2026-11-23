import SourceLiftFeature from '@/components/source-lift-feature';
import Link from 'next/link';
import type {Metadata} from 'next';
import {firstOrderKernel, gravityAtlas, gravityErrataSupplement, gravityEditions, gravityHub, holographyAtlas, sameBallTakeaway, secondOrderDetection} from '@/config/paper-integrations';
import { ads4Edition } from '@/config/new-reading-editions';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Gravity and holography | Source and Readout',
  description: 'Read the Einstein-gravity and horizon arguments, the boundary-ball detection pair, and the new AdS4 study of what second-order canonical energy can reconstruct.',
  alternates: {canonical: gravityHub},
};

export default function GravityAndHolography() {
  return (
    <article className="sr-publication">
      <nav className="sr-breadcrumb" aria-label="Breadcrumb"><Link href="/source-readout">Source and readout</Link><span>/</span><span>Gravity and holography</span></nav>
      <header className="sr-publication-header">
        <p className="sr-eyebrow">Shadow Theory / Six reading editions</p>
        <h1>Gravity and holography</h1>
        <p className="sr-lead">Transport reveals a connection. A vacuum gives rise to a local state and a thermal description. Boundary balls can miss a gravitational perturbation at first order and detect it at second order. Each result tells us what a particular readout can establish.</p>
        <div className="sr-actions">
          <Link className="sr-button" href="/source-readout/transport-projective">Start with transport and gravity →</Link>
          <Link href={gravityAtlas}>Atlas gravity sector →</Link>
          <Link href={holographyAtlas}>Atlas horizon and entropy readouts →</Link>
        </div>
      </header>
      <SourceLiftFeature/>
      <div className="sr-publication-body">
        <section id="same-balls" aria-labelledby="same-balls-heading">
          <h2 id="same-balls-heading">Same balls. Different orders.</h2>
          <p>{sameBallTakeaway} On one fixed boundary slice, first-order ball data leave a non-gauge kernel. For an explicit transverse AdS perturbation in that kernel, the same balls give positive bulk canonical energy at second order.</p>
          <p>The gravitational calculation stands on its own hypotheses. Interpreting it as a boundary relative-entropy Hessian also requires the holographic dictionary and a corresponding admissible state family.</p>
          <ul>
            <li><Link href={firstOrderKernel}>Read the first-order fixed-slice kernel →</Link></li>
            <li><Link href={secondOrderDetection}>Read the second-order detection for all radii →</Link></li>
            <li><Link href={ads4Edition.route}>Continue to second-order reconstruction in AdS4 →</Link></li>
          </ul>
        </section>
        <h2>Follow the complete arguments</h2>
        <p>Read the transport reconstruction first, then follow the modular and local horizon results into the boundary-ball pair and the AdS4 reconstruction. Each paper fixes the preparation and the family of measurements that make its result possible.</p>
        <ol className="pi-chapter-list">
          {gravityEditions.map(p => <li key={p.id}><Link href={p.url} prefetch={false}><h3>{p.title}</h3><p>{p.description}</p><span>Read the full edition →</span></Link></li>)}
          <li><Link href={ads4Edition.route} prefetch={false}><h3>{ads4Edition.title}</h3><p>{ads4Edition.description}</p><span>Read the AdS4 reconstruction →</span></Link></li>
        </ol>
        <p><a href={gravityErrataSupplement}>Download the targeted checks for both corrections ↓</a> The individual editions link their full verification suites.</p>
        <p><Link href="/source-readout#sr-search-title">Search the Source–Readout programme →</Link> · <a href="/source-readout/manifest.json">Machine-readable chapter inventory ↗</a></p>
      </div>
    </article>
  );
}
