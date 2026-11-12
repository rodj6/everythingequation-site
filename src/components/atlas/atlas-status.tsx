/**
 * Evidence status: the mark and label shown beside every entry, and the
 * legend that explains them. Shape and words carry the meaning; colour only
 * supports it. (No client code here: this renders on the server too.)
 */
import { statusMeta, statusOrder, type AtlasStatus } from "@/data/reality-atlas";

export function StatusMark({ status }: { status: AtlasStatus }) {
  return <span className="atlas-status-mark" data-status={status} aria-hidden="true" />;
}

export function StatusChip({ status }: { status: AtlasStatus }) {
  return (
    <span className="atlas-status" data-status={status} title={statusMeta[status].explanation}>
      <StatusMark status={status} />
      {statusMeta[status].label}
    </span>
  );
}

export function StatusLegend({ counts }: { counts?: Record<AtlasStatus, number> }) {
  return (
    <dl className="atlas-legend">
      {statusOrder.map((status) => (
        <div key={status}>
          <dt>
            <StatusMark status={status} />
            {statusMeta[status].label}
            {counts ? <span className="atlas-legend-count">{counts[status]}</span> : null}
          </dt>
          <dd>{statusMeta[status].explanation}</dd>
        </div>
      ))}
    </dl>
  );
}
