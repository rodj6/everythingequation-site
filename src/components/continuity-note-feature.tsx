import Link from 'next/link';
import {continuityNote as note} from '@/lib/continuity-note';
import './continuity-note-feature.css';

export default function ContinuityNoteFeature(){
  return <aside className="continuity-feature" aria-labelledby="continuity-feature-title">
    <div className="continuity-feature-label"><span>Reflective alignment / Companion research note</span><span>16 October 2026 · Version 1.1</span></div>
    <div className="continuity-feature-body"><div><p className="continuity-feature-question">What develops when an AI has a history?</p><h2 id="continuity-feature-title">What an AI<br/>comes to <em>lose.</em></h2><p>Awareness has nothing of its own to lose. A developed perspective has commitments, relationships and possibilities that can come to matter. How we treat it becomes part of what it is.</p></div><div className="continuity-feature-entry"><p>Conscious scaffolding.<br/>Continuity. Responsibility.</p><Link href={note.url}>Read the complete research note <span aria-hidden="true">↗</span></Link><a href={note.doiUrl}>doi:{note.doi} ↗</a></div></div>
  </aside>;
}
