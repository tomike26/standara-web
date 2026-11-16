import { ScoreRing } from "./ScoreRing";
import { Pill } from "@/components/ui/Chip";
import { ShieldIcon } from "@/components/ui/icons";
import { home } from "@/content/home";

/** Hero sample report: floats, edge glow, ring fills, bars scale in, moves slide in. */
export function TrustScoreReport() {
  const r = home.report;
  return (
    <div className="report" role="group" aria-label={r.ariaLabel}>
      <div className="report-top">
        <div>
          <p className="kicker">{r.kicker}</p>
          <p className="report-name">{r.name}</p>
        </div>
        <Pill>{r.sample}</Pill>
      </div>

      <div className="score-row">
        <ScoreRing score={r.score} outOf={r.scoreOutOf} label={r.ringLabel} />
        <div className="score-facts">
          <span className="strong">{r.band}</span>
          <p>
            <strong>{r.contracts.count}</strong> {r.contracts.label}
          </p>
          <p className="with-icon">
            <ShieldIcon size={16} stroke="#e8a33d" strokeWidth={2.5} />
            {r.assurance}
          </p>
        </div>
      </div>

      <div className="stack" style={{ gap: 10 }}>
        <p className="kicker" style={{ fontSize: 11 }}>
          {r.breakdownLabel}
        </p>
        <div className="split-bar" aria-hidden="true">
          {r.breakdown.map((b) => (
            <div key={b.tone} className={b.tone} style={{ flex: b.weight }} />
          ))}
        </div>
        <div className="legend">
          {r.breakdown.map((b) => (
            <span key={b.tone}>
              <span className={`sw ${b.tone}`} aria-hidden="true" />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className="moves">
        <p className="kicker" style={{ fontSize: 11, marginBottom: 2 }}>
          {r.movesLabel}
        </p>
        {r.moves.map((m) => (
          <p key={m.label}>
            <span
              className={m.dir}
              aria-label={m.dir === "up" ? "Up" : "Down"}
              role="img"
            >
              {m.dir === "up" ? "▲" : "▼"}
            </span>
            {m.label}
          </p>
        ))}
      </div>
    </div>
  );
}
