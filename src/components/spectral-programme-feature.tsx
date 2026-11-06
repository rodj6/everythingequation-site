import Link from 'next/link';
import { gravityHub, spectralHub } from '@/config/paper-integrations';

export default function SpectralProgrammeFeature() {
  return (
    <section className="pi-feature" aria-labelledby="spectral-programme-heading">
      <div className="pi-feature-heading">
        <p className="section-label">New research · November 2026</p>
        <h2 id="spectral-programme-heading">From carrier dynamics to Einstein gravity.</h2>
        <p>Two reading paths develop distinct parts of the source-to-readout architecture. Follow the operator that links coherence to dissipation, or five gravity and holography studies that show what specific preparations and readouts recover.</p>
      </div>
      <div className="pi-cards">
        <Link className="pi-card" href={spectralHub} prefetch={false}>
          <span className="section-label">The Atlas field · Seven full articles</span>
          <h3>One carrier. Two linked responses.</h3>
          <p>Start with the Canonical Spectral-Curvature Field. Trace the spectral signatures back to their sources, then follow a carrier through adaptation, sustained forcing, bistability and delayed switching.</p>
          <span className="pi-card-action">Explore CSCF and spectral carriers →</span>
        </Link>
        <Link className="pi-card" href={gravityHub} prefetch={false}>
          <span className="section-label">The Atlas gravity sector · Five full articles</span>
          <h3>From transport to holographic readouts.</h3>
          <p>Follow the transport, thermodynamic and holographic results. See why a perturbation invisible to fixed-slice balls at first order registers at second order.</p>
          <span className="pi-card-action">Explore gravity and holography →</span>
        </Link>
      </div>
    </section>
  );
}
