"use client";

/**
 * Search across every entry of the Atlas: names, summaries, equations, paper
 * titles and DOIs. A modal dialog with a combobox, operable from the keyboard.
 */
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { StatusMark } from "@/components/atlas/atlas-status";
import { searchAtlas, stageMeta, statusMeta } from "@/data/reality-atlas";

export default function AtlasSearch({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (id: string) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const results = useMemo(() => searchAtlas(query), [query]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) {
      element.showModal();
      setQuery("");
      setActive(0);
      input.current?.focus();
    } else if (!open && element.open) {
      element.close();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const choose = (id: string) => {
    onSelect(id);
    onClose();
  };

  return (
    <dialog
      ref={dialog}
      className="atlas-dialog atlas-search"
      aria-label="Search the Atlas"
      onClose={onClose}
      onClick={(event) => { if (event.target === dialog.current) onClose(); }}
    >
      <div className="atlas-search-box">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          ref={input}
          type="search"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls={listId}
          aria-activedescendant={results[active] ? `${listId}-${results[active].id}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search entries, equations, papers, DOIs"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((value) => Math.min(results.length - 1, value + 1));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((value) => Math.max(0, value - 1));
            } else if (event.key === "Enter" && results[active]) {
              event.preventDefault();
              choose(results[active].id);
            }
          }}
        />
        <button type="button" className="atlas-dialog-close" onClick={onClose}>Close</button>
      </div>
      <p className="atlas-search-status" aria-live="polite">
        {query.trim() ? (results.length ? `${results.length} ${results.length === 1 ? "entry" : "entries"}` : "No entry matches. Try a shorter word, a symbol name or a DOI.") : "Type to search. Arrow keys move, Enter opens."}
      </p>
      <ul id={listId} role="listbox" aria-label="Matching entries" className="atlas-search-results">
        {results.map((node, index) => (
          <li
            key={node.id}
            id={`${listId}-${node.id}`}
            role="option"
            aria-selected={index === active}
            onMouseEnter={() => setActive(index)}
            onClick={() => choose(node.id)}
          >
            <StatusMark status={node.status} />
            <span className="atlas-search-text">
              <strong>{node.label}</strong>
              <span>{node.summary}</span>
            </span>
            <span className="atlas-search-meta">{stageMeta[node.stage].label} · {statusMeta[node.status].label}</span>
          </li>
        ))}
      </ul>
    </dialog>
  );
}
