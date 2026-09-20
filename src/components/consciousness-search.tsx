"use client";
import { useEffect, useId, useMemo, useState } from "react";
import type { SearchRecord } from "@/lib/consciousness";

export default function ConsciousnessSearch() {
  const id = useId(); const [query, setQuery] = useState("");
  const [records, setRecords] = useState<SearchRecord[] | null>(null); const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!query.trim() || records) return;
    const controller = new AbortController();
    fetch("/consciousness/search.json", { signal: controller.signal }).then(r => { if (!r.ok) throw new Error("Search unavailable"); return r.json(); }).then(setRecords).catch(e => { if (e.name !== "AbortError") setFailed(true); });
    return () => controller.abort();
  }, [Boolean(query.trim()), records]);
  const results = useMemo(() => {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return (records || []).map(record => {
      const title = record.title.toLocaleLowerCase(); const haystack = `${record.context} ${title} ${record.text}`.toLocaleLowerCase();
      return { record, score: terms.every(term => haystack.includes(term)) ? 1 + terms.filter(term => title.includes(term)).length * 3 : 0 };
    }).filter(item => item.score > 0).sort((a,b) => b.score - a.score).slice(0, 16);
  }, [records, query]);
  function snippet(text: string) { const index = text.toLocaleLowerCase().indexOf(query.trim().split(/\s+/)[0].toLocaleLowerCase()); const start = Math.max(0, index - 80); return `${start ? "…" : ""}${text.slice(start,start + 230)}${text.length > start + 230 ? "…" : ""}`; }
  return <div className="c-search">
    <label htmlFor={id}>Search the complete section</label>
    <div className="c-search-field"><span aria-hidden="true">⌕</span><input id={id} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try native prediction, anesthesia, or A3" autoComplete="off" aria-describedby={`${id}-status`} /></div>
    <p id={`${id}-status`} aria-live="polite">{query.trim() ? failed ? "Search could not load. Use the complete contents below." : !records ? "Loading the section index…" : `${results.length}${results.length === 16 ? "+" : ""} matching sections` : "Find passages in the monograph, guides, glossary and FAQ."}</p>
    {query.trim() && results.length > 0 ? <ol className="c-search-results">{results.map(({record}) => <li key={record.url}><a href={record.url}><small>{record.context}</small><strong>{record.title}</strong><span>{snippet(record.text)}</span></a></li>)}</ol> : null}
    <noscript><p>Search is optional. All chapters and sections are linked in the contents.</p></noscript>
  </div>;
}
