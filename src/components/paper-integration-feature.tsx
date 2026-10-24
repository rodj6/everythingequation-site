import Link from 'next/link';
import {paperIntegrations} from '@/config/paper-integrations';
export default function PaperIntegrationFeature({ids,compact=false}:{ids?:string[];compact?:boolean}){
 const papers=ids?paperIntegrations.filter(p=>ids.includes(p.id)):paperIntegrations;
 return <section className="pi-feature" aria-label="Enactment, temporal reality and agency"><div className="pi-feature-heading"><p className="section-label">The developed argument / October 2026</p><h2>{compact?'Follow the connected work.':'Experience. Time. Consequential participation.'}</h2><p>Interpretation becomes a current occurrence. Retained understanding changes action. A complete history contains the activity through which a situated world is lived.</p></div><div className="pi-cards">{papers.map(p=><Link href={p.url} key={p.id} className="pi-card" prefetch={false}><span className="section-label">Complete article · {p.date}</span><h3>{p.headline}</h3><p>{p.description}</p><span className="pi-card-action">{p.title} ↗</span></Link>)}</div></section>;
}
