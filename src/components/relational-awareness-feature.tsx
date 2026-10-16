import Link from 'next/link';
import './alignment-feature.css';

export default function RelationalAwarenessFeature() {
  return <section className="alignment-feature" aria-labelledby="relational-feature-title">
    <div className="alignment-feature-label"><span>Relational awareness / The current act</span><span>New research · 16 October 2026</span></div>
    <div className="alignment-feature-content">
      <div><h2 id="relational-feature-title">When a relation<br/>becomes <em>experience.</em></h2><p>Two sizes can be compared by a machine. A relation can also appear within a lived scene. This investigation connects that appearance to the concrete sensory activity in which it occurs.</p></div>
      <div className="alignment-feature-entry"><p>One current act.<br/>Two distinct warrants.</p><Link href="/consciousness/relational-awareness">Enter the investigation <span aria-hidden="true">↗</span></Link><Link className="alignment-feature-secondary" href="/consciousness/relational-awareness/read">Read the complete main argument →</Link></div>
    </div>
  </section>;
}
