import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { TickIcon } from "@/components/ui/icons";
import { platform } from "@/content/platform";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function TrustScore() {
  const t = platform.trustScore;
  return (
    <section id={t.id} className="band" aria-labelledby="trust-score-title">
      <div
        className="wrap sec"
        style={{ display: "flex", flexDirection: "column", gap: 48 }}
      >
        <div className="split" style={{ gap: 48 }}>
          <Reveal className="stack">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="h2" id="trust-score-title">
              {t.title}
            </h2>
            <p className="body-lg">{t.body}</p>
          </Reveal>
          {/* Bands scale up in sequence when the panel is shown. */}
          <Reveal className="panel" index={1}>
            <div
              role="img"
              aria-label={t.bandsLabel}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <div className="bands-bar">
                {t.bands.map((c) => (
                  <span key={c} style={{ background: c }} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--color-dim)",
                }}
              >
                <span>{t.bandsStart}</span>
                <span>{t.bandsEnd}</span>
              </div>
            </div>
            <ul className="ticks">
              {t.ticks.map((tick) => (
                <li key={tick}>
                  <TickIcon size={20} stroke="#9a6412" strokeWidth={2.5} />
                  {tick}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        {/* Weight cards: percentages count up, meters fill. */}
        <div className="grid-auto grid-open">
          {t.weights.map((w, i) => (
            <Card key={w.title} index={i} className="card-open">
              <p className="bigpct">
                <CountUp value={w.pct} />
              </p>
              <div className="meter" aria-hidden="true">
                <span
                  style={{ width: w.meter.width, background: w.meter.color }}
                />
              </div>
              <h3 className="h3" style={{ fontSize: 21 }}>
                {w.title}
              </h3>
              <p className="muted">{w.body}</p>
            </Card>
          ))}
        </div>
        <p className="note" style={{ marginTop: -24 }}>
          {t.note}
        </p>
      </div>
    </section>
  );
}
