"use client";

import { useRef, useState, type FormEvent } from "react";

type Passage = {
  slug: string;
  anchor: string;
  text: string;
};
type SearchIndex = {
  titles: Record<string, string>;
  passages: Passage[];
};

const visibleLimit = 50;

function normalize(text: string) {
  return text.normalize("NFKD")
    .replace(/\p{M}|\u00ad/gu, "")
    .replace(/[‐‑−]/g, "-")
    .replace(/[–—]/g, "--")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export default function RhSearch({
  indexUrl,
  readingUrl,
  label = "Find a theorem, Lean declaration, or term",
  prioritizeResultStatements = false,
}: { indexUrl: string; readingUrl: string; label?: string; prioritizeResultStatements?: boolean }) {
  const index = useRef<SearchIndex | null>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Passage[]>([]);
  const [status, setStatus] = useState("");
  const [searching, setSearching] = useState(false);

  async function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phrase = normalize(query);
    if (!phrase || searching) return;
    setSearching(true);
    setStatus("Searching the manuscript…");
    setResults([]);
    try {
      if (!index.current) {
        const response = await fetch(indexUrl);
        if (!response.ok) throw new Error("Index unavailable");
        index.current = await response.json() as SearchIndex;
      }
      const terms = phrase.split(" ");
      const identifier = /[_/.]/.test(phrase) && phrase.length >= 8
        ? phrase.replace(/\s/g, "")
        : "";
      const resultLabel = prioritizeResultStatements && /^(?:theorem|lemma|proposition|corollary|definition) \d[\w.-]*$/.test(phrase);
      const statements: Passage[] = [];
      const exact: Passage[] = [];
      const related: Passage[] = [];
      for (const passage of index.current.passages) {
        const text = normalize(passage.text);
        if (resultLabel && (text.startsWith(phrase + " (") || text.startsWith(phrase + ". "))) statements.push(passage);
        else if (text.includes(phrase)) exact.push(passage);
        else if (
          (identifier && text.replace(/\s/g, "").includes(identifier)) ||
          terms.every(term => text.includes(term))
        ) related.push(passage);
      }
      const count = statements.length + exact.length + related.length;
      setResults(statements.concat(exact, related).slice(0, visibleLimit));
      setStatus(count === 0 ? "No matching passages." : `${count} matching ${count === 1 ? "passage" : "passages"}${count > visibleLimit ? `. Showing the first ${visibleLimit}.` : "."}`);
    } catch {
      setStatus("The search index could not be loaded. Try again or browse the contents.");
    } finally {
      setSearching(false);
    }
  }

  return (
    <>
      <form onSubmit={search} role="search">
        <label htmlFor="rh-search-query">{label}</label>
        <div>
          <input id="rh-search-query" type="search" value={query} onChange={event => setQuery(event.target.value)} required />
          <button disabled={searching} type="submit">Search</button>
        </div>
      </form>
      <p role="status">{status}</p>
      <ol className="rh-search-results">
        {results.map(result => (
          <li key={result.slug + "#" + result.anchor}>
            <a href={readingUrl + "/" + result.slug + "#" + encodeURIComponent(result.anchor)}>{index.current?.titles[result.slug]}</a>
            <p>{result.text.slice(0, 420)}{result.text.length > 420 ? "…" : ""}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
