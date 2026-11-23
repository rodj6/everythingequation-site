import Link from "next/link";
import { newReadingEditions } from "@/config/new-reading-editions";

export default function NewReadingEditionFeatures() {
  return (
    <section className="pi-feature" aria-labelledby="new-reading-editions-heading">
      <div className="pi-feature-heading">
        <h2 id="new-reading-editions-heading">New reading editions</h2>
      </div>
      <div className="pi-cards">
        {newReadingEditions.map(edition => (
          <article key={edition.id} className="pi-card">
            <p className="section-label">
              {edition.id === "haar-critical" ? "Random matrix theory" : "Gravity and holography"}
            </p>
            <h3><Link href={edition.route} prefetch={false}>{edition.headline}</Link></h3>
            <p>{edition.description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link className="text-glow" href={edition.route} prefetch={false}>Read on site →</Link>
              <Link className="text-glow" href={edition.citationRoute}>Citation and DOI →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
