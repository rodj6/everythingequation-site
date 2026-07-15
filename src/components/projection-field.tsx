/**
 * Server-rendered source-to-readout diagram for the homepage hero. Motion is
 * purely presentational CSS and is disabled by the global reduced-motion rule.
 */
export default function ProjectionField() {
  return (
    <figure className="projection-field" aria-labelledby="projection-caption">
      <svg
        viewBox="0 0 920 300"
        role="img"
        aria-labelledby="projection-title projection-description"
        className="h-auto w-full"
      >
        <title id="projection-title">Source structure projected into an observable readout</title>
        <desc id="projection-description">
          A structured source manifold passes through a projection map to an observable
          quotient. Several source states share the same readout, while retained relations
          remain visible on the projected tier.
        </desc>

        <defs>
          <linearGradient id="source-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--accent-strong))" stopOpacity="0.9" />
            <stop offset="1" stopColor="hsl(var(--violet))" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="readout-plane" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0.28" />
            <stop offset="1" stopColor="hsl(var(--surface-raised))" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="map-glow">
            <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0.36" />
            <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="projection-source">
          <ellipse cx="190" cy="146" rx="118" ry="78" fill="none" stroke="url(#source-ring)" strokeWidth="1.5" />
          <ellipse cx="190" cy="146" rx="88" ry="112" fill="none" stroke="url(#source-ring)" strokeWidth="1.1" opacity="0.58" transform="rotate(58 190 146)" />
          <ellipse cx="190" cy="146" rx="54" ry="116" fill="none" stroke="url(#source-ring)" strokeWidth="1" opacity="0.38" transform="rotate(-55 190 146)" />
          {[
            [112, 122],
            [156, 82],
            [205, 111],
            [249, 87],
            [274, 151],
            [227, 193],
            [164, 204],
            [119, 169],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="4.5"
              className="projection-node"
              style={{ animationDelay: `${index * 0.22}s` }}
            />
          ))}
          <text x="190" y="282" textAnchor="middle" className="projection-label">
            REDUCED SOURCE
          </text>
        </g>

        <g aria-hidden="true">
          <path className="projection-ray" d="M304 95 C390 104 424 126 486 140" />
          <path className="projection-ray projection-ray-delay-1" d="M302 145 C382 145 430 146 486 146" />
          <path className="projection-ray projection-ray-delay-2" d="M302 196 C392 185 432 163 486 152" />
          <circle cx="492" cy="146" r="74" fill="url(#map-glow)" className="projection-glow" />
          <path d="M468 86 Q520 146 468 206" fill="none" stroke="hsl(var(--accent-strong))" strokeWidth="2" opacity="0.82" />
          <path d="M516 86 Q464 146 516 206" fill="none" stroke="hsl(var(--violet))" strokeWidth="1.5" opacity="0.65" />
          <text x="492" y="282" textAnchor="middle" className="projection-label">
            PROJECTION MAP
          </text>
        </g>

        <g className="projection-readout">
          {[0, 1, 2].map((layer) => (
            <path
              key={layer}
              d={`M${604 + layer * 13} ${82 + layer * 14} L${814 + layer * 13} ${82 + layer * 14} L${770 + layer * 13} ${207 + layer * 14} L${560 + layer * 13} ${207 + layer * 14} Z`}
              fill="url(#readout-plane)"
              stroke={layer === 2 ? "hsl(var(--accent-strong))" : "hsl(var(--border-strong))"}
              strokeWidth={layer === 2 ? "1.5" : "1"}
              opacity={0.42 + layer * 0.24}
            />
          ))}
          <path className="projection-ray projection-ray-delay-1" d="M518 146 C566 146 585 151 626 157" />
          <circle cx="659" cy="160" r="5" className="projection-node" />
          <circle cx="724" cy="190" r="5" className="projection-node" style={{ animationDelay: "0.7s" }} />
          <circle cx="779" cy="133" r="5" className="projection-node" style={{ animationDelay: "1.4s" }} />
          <path d="M659 160 L724 190 L779 133" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeDasharray="4 6" opacity="0.72" />
          <text x="700" y="282" textAnchor="middle" className="projection-label">
            OBSERVABLE READOUT
          </text>
        </g>
      </svg>
      <figcaption id="projection-caption" className="sr-only">
        Source states project to a structured observable quotient. Shadow Theory
        determines which relations descend, what information completion must restore,
        and when the projected dynamics close.
      </figcaption>
    </figure>
  );
}
