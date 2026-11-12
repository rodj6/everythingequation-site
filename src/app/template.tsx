/**
 * Runs once for each page a visitor opens: the content eases in and a line of
 * light passes under the header, like an instrument taking a reading. Both are
 * brief, never delay reading, and are switched off when motion is reduced
 * (see "Page entrance" in globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
