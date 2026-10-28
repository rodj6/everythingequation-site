'use client';
import {useRef,useState} from 'react';
type Record = {title:string;context:string;url:string;text:string};
export default function SourceReadoutSearch(){
 const [query,setQuery]=useState('');const [records,setRecords]=useState<Record[]|null>(null);const [failed,setFailed]=useState(false);const pending=useRef<Promise<void>|null>(null);
 async function load(){if(records||pending.current)return;pending.current=(async()=>{try{const r=await fetch('/source-readout/search.json');if(!r.ok)throw Error();setRecords(await r.json());setFailed(false);}catch{setFailed(true);}})();await pending.current;pending.current=null;}
 const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
 const score=(r:Record)=>terms.reduce((sum,t)=>sum+(r.title.toLowerCase().includes(t)?5:0)+(r.context.toLowerCase().includes(t)?2:0),0);
 const results=terms.length&&records?records.filter(r=>terms.every(t=>(r.title+' '+r.text).toLowerCase().includes(t))).sort((a,b)=>score(b)-score(a)).slice(0,12):[];
 return <section className="sr-search" aria-labelledby="sr-search-title"><h2 id="sr-search-title">Find a definition, proof or result.</h2><label htmlFor="sr-query">Search the complete source–readout editions</label><input id="sr-query" type="search" value={query} onFocus={load} onChange={e=>{setQuery(e.target.value);void load();}} placeholder="Try: minimal completion, phase, feedback, memory"/><div aria-live="polite">{failed&&<p>Search could not load. Every article is available in the contents below.</p>}{query&&records&&<p>{results.length?`${results.length} matching sections shown`:'No matching sections. Try fewer terms.'}</p>}</div>{results.length>0&&<ul>{results.map(r=><li key={r.url}><a href={r.url}>{r.title}</a><small>{r.context}</small><p>{r.text.slice(Math.max(0,r.text.toLowerCase().indexOf(terms[0])-80),Math.max(0,r.text.toLowerCase().indexOf(terms[0])-80)+240)}…</p></li>)}</ul>}</section>;
}
