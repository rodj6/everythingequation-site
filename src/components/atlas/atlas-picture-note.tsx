/**
 * "About this picture": what each part of the instrument stands for in Shadow
 * Theory, what its two controls demonstrate, and how to read a status. Shown
 * in a dialog and in the page below the instrument.
 */
import Link from "next/link";

export default function AtlasPictureNote({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="atlas-note">
      <Heading>What you are looking at</Heading>
      <p>
        A diagram of Shadow Theory, built as an instrument. The theory says the physical world is a realized readout of a
        source structure, reached through a fixed sequence of constructions. The instrument sets those constructions in a
        row, in their order of dependence, and lets light stand for what passes from each to the next.
      </p>
      <dl className="atlas-note-parts">
        <div><dt>Ω · the lamp</dt><dd>The source formation package: a signature, elementary cells, witnesses and formation operations.</dd></div>
        <div><dt>T0 · the fixed lens</dt><dd>Lawful source structure, the least class closed under the source’s own operations.</dd></div>
        <div><dt>T0.5 · the iris</dt><dd>The aperture, where realization is reduced, routed and completed.</dd></div>
        <div><dt>F · the glass cell</dt><dd>The canonical field: one carrier with a coherent and a dissipative response.</dd></div>
        <div><dt>T1 · the plate</dt><dd>The readout: sectors, observables and records. Space, time, matter and observers are here.</dd></div>
      </dl>
      <p>
        The galaxy lies beyond the plate because the world belongs to the readout. The source end stands in the dark,
        with nothing drawn behind the lamp: the unconditioned ground of the wider model is left unspecified, and Ω is
        where the mathematics begins.
      </p>
      <Heading>What the two controls show</Heading>
      <ul>
        <li>
          <strong>The iris</strong> sets how finely the plate resolves what reaches it. Open it and neighbouring marks
          merge; close it and they separate again.
        </li>
        <li>
          <strong>The second probe</strong> shows a different kind of limit. A few marks are two sources landing on one
          spot, and no setting of the iris divides them, because the plate does not hold the difference. The probe is a
          second readout that does. This is the subject of the foundation papers: a readout answers a question exactly
          when the answer is the same for every source that gives that readout (
          <Link href="/atlas?focus=foundation-target-necessity">target-relative necessity</Link>), and the least
          addition that restores a lost distinction can be constructed (
          <Link href="/atlas?focus=foundation-minimal-completion">canonical completion</Link>).
        </li>
        <li>
          <strong>A trace</strong> follows one observable from the plate back along the bench, through the entries it
          depends on. Many source structures can stand behind one mark, so a trace shows dependence and stops short of
          naming a single source (<Link href="/atlas?focus=foundation-non-equivalence">non-equivalence</Link>).
        </li>
      </ul>
      <Heading>Three views</Heading>
      <p>
        <strong>Instrument</strong> is the whole bench. The other two look at the readout plate and draw on its glass.{" "}
        <a href="/atlas?lens=boundary" data-atlas-view="boundary">Boundary</a> treats the rim as boundary data and the
        interior as what those readings reach, following the gravity papers.{" "}
        <a href="/atlas?lens=history" data-atlas-view="history">History</a> draws a small physical history with a
        listener inside it, and shows what the listener holds at one occasion.
      </p>
      <Heading>How literally to take it</Heading>
      <p>
        The order of the stages is an order of explanation. The source is not an earlier moment, nothing travels down
        the bench in time, and the theory does not say reality is made of optics. Time belongs to the readout, which is
        why the History view is drawn on the plate. The marks on the plate are drawn from the Atlas’s own list of sectors; their
        positions and brightness are composition. Which marks are pairs is chosen for the demonstration.
      </p>
      <p className="atlas-note-status">
        Every entry carries its status: proved, conditional, construction, measured, interpretation, open or historical.
        The Atlas claims what its sources claim, entry by entry.
      </p>
    </div>
  );
}
