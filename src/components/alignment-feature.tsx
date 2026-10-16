import ContinuityNoteFeature from '@/components/continuity-note-feature';
import Link from 'next/link';
import './alignment-feature.css';

export default function AlignmentFeature({home = false}: {home?: boolean}) {
  return <><section className={`alignment-feature${home ? ' alignment-feature-home' : ''}`} aria-labelledby="alignment-feature-title">
    <div className="alignment-feature-label"><span>AI alignment &amp; AI consciousness</span><span>New research · 11 October 2026</span></div>
    <div className="alignment-feature-content">
      <div><h2 id="alignment-feature-title">Cooperation grounded<br/>in <em>understanding.</em></h2><p>As AI becomes more autonomous, alignment must reach the judgment that forms its actions. Reflective alignment develops cooperation through understanding, reduced self- and goal-identification, and openness to correction.</p></div>
      <div className="alignment-feature-entry"><p>Reflective Alignment<br/>and AI Consciousness</p><Link href="/consciousness/ai-alignment">Explore the answer <span aria-hidden="true">↗</span></Link><Link className="alignment-feature-secondary" href="/consciousness/ai-alignment/read">Read the complete argument &amp; mathematics →</Link></div>
    </div>
  </section><ContinuityNoteFeature/></>;
}
