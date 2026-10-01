'use client';
import {useEffect,useId,useState,useMemo} from 'react';
type RecordEntry={title:string;context:string;url:string;text:string};
export default function SealedSearch(){
 const id=useId();const [query,setQuery]=useState('');const [records,setRecords]=useState<RecordEntry[]>([]);const [failed,setFailed]=useState(false);
 useEffect(()=>{const c=new AbortController();fetch('/sealed-or-leaky/search.json',{signal:c.signal}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(setRecords).catch(e=>{if(e.name!=='AbortError')setFailed(true);});return()=>c.abort();},[]);
 const results=useMemo(()=>{const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);return terms.length?records.filter(r=>terms.every(t=>`${r.title} ${r.text}`.toLowerCase().includes(t))).slice(0,16):[];},[query,records]);
 return <div className="sl-search"><label htmlFor={id}>Search the full paper</label><input id={id} type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try entropy, trine, or reversible" aria-describedby={`${id}-status`}/><p id={`${id}-status`} aria-live="polite">{failed?'Use the complete linked contents below.':query?`${results.length} matching sections`:'Search every technical section, including proofs and references.'}</p>{results.length>0&&<ol>{results.map(r=><li key={r.url}><a href={r.url}><strong>{r.title}</strong><span>{r.text.slice(Math.max(0,r.text.toLowerCase().indexOf(query.toLowerCase().split(/\s+/)[0])-65),Math.max(0,r.text.toLowerCase().indexOf(query.toLowerCase().split(/\s+/)[0])-65)+240)}…</span></a></li>)}</ol>}<noscript><p>Every section is available through the contents without JavaScript.</p></noscript></div>;
}
