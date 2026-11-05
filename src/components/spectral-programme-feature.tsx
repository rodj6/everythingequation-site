import Link from 'next/link';
import { spectralHub } from '@/config/paper-integrations';

export default function SpectralProgrammeFeature() {
  return (
    <section className="pi-feature" aria-labelledby="spectral-programme-heading">
      <div className="pi-feature-heading">
        <p className="section-label">New research · November 2026</p>
        <h2 id="spectral-programme-heading">From carrier dynamics to Einstein gravity.</h2>
        <p>Two reading paths develop distinct parts of the source-to-readout architecture. Follow the operator that links coherence to dissipation, or the transport construction that recovers Einstein–matter dynamics.</p>
      </div>
      <div className="pi-cards">
        <Link className="pi-card" href={spectralHub} prefetch={false}>
          <span className="section-label">The Atlas field · Seven full articles</span>
          <h3>One carrier. Two linked responses.</h3>
          <p>Start with the Canonical Spectral-Curvature Field. Trace the spectral signatures back to their sources, then follow a carrier through adaptation, sustained forcing, bistability and delayed switching.</p>
          <span className="pi-card-action">Explore CSCF and spectral carriers →</span>
        </Link>
        <Link className="pi-card" href="/source-readout/transport-projective" prefetch={false}>
          <span className="section-label">The Atlas gravity sector · Complete derivation</span>
          <h3>From transport to Einstein–matter dynamics.</h3>
          <p>Read the connection reconstruction, projective reduction and spin-two bootstrap within the admitted realization. See precisely where physical selection remains open.</p>
          <span className="pi-card-action">Read the transport derivation →</span>
        </Link>
      </div>
    </section>
  );
}
