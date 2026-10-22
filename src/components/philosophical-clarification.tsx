import clarifications from "@content/consciousness/clarifications.json";
import "./philosophical-clarification.css";

type Statement = "primary" | "companion" | "experience";

/** Current editorial interpretation, kept separate from fixed publication text. */
export default function PhilosophicalClarification({ statement }: { statement: Statement }) {
  const copy = clarifications[statement];
  return (
    <section
      id={copy.id}
      className={`philosophical-clarification philosophical-clarification-${statement}`}
      aria-labelledby={`${copy.id}-heading`}
    >
      <p className="section-label">
        {statement === "experience" ? "The language of the current account" : "The author’s clarified philosophical position"}
        <span className="philosophical-clarification-date">20 October 2026</span>
      </p>
      <h2 id={`${copy.id}-heading`}>{copy.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: copy.html }} />
      {statement === "companion" && (
        <a className="philosophical-clarification-link" href="/consciousness#what-shadow-theory-holds-fundamental">
          Read the consciousness statement and its scope →
        </a>
      )}
    </section>
  );
}
