import Link from 'next/link';
import type {Metadata} from 'next';
import {spectralEditions,spectralHub} from '@/config/paper-integrations';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'CSCF and Spectral Carriers',
  description: 'Seven complete reading editions on the Canonical Spectral-Curvature Field, spectral profiles and the dynamics of adaptive carriers.',
  alternates: {canonical: spectralHub},
};

export default function SpectralCarriers() {
  const series = spectralEditions.filter(p => p.id !== 'transport-projective');
  return (
    <article className="sr-publication">
      <nav className="sr-breadcrumb" aria-label="Breadcrumb"><Link href="/source-readout">Source and readout</Link><span>/</span><span>CSCF and spectral carriers</span></nav>
      <header className="sr-publication-header">
        <p className="sr-eyebrow">Shadow Theory / The Atlas field</p>
        <h1>One carrier.<br/>Two linked responses.</h1>
        <p className="sr-lead">The Canonical Spectral-Curvature Field puts coherence and dissipation on one positive selfadjoint carrier. Its functional calculus supplies both responses at the aperture-output to physical-readout interface.</p>
        <div className="sr-actions"><Link className="sr-button" href="/source-readout/cscf">Read the full CSCF argument →</Link><Link href="/atlas?focus=canonical-field">Open the Atlas field →</Link><a href="/source-readout/manifest.json">Reading inventory ↗</a></div>
      </header>
      <div className="sr-publication-body">
        <h2>Follow the carrier from structure to dynamics.</h2>
        <p>The spectral comparisons show what the chosen readouts share. The generation results explain how distinct mechanisms can produce the observed profiles. The adaptive series shows how reciprocal memory changes response, what external power sustains, and how preparation controls switching. Each paper keeps its own hypotheses and supplies the complete mathematical argument.</p>
        <ol className="pi-chapter-list">{series.map(p=><li key={p.id}><Link href={p.url} prefetch={false}><h3>{p.title}</h3><p>{p.description}</p><span>Read the full edition →</span></Link></li>)}</ol>
        <p><Link href="/source-readout/transport-projective">Related source–readout realization: transport and projective reduction in gravity →</Link></p>
      </div>
    </article>
  );
}
