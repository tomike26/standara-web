import { SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { platform } from "@/content/platform";

export function AssuranceScale() {
  const a = platform.assurance;
  return (
    <section
      id={a.id}
      className="wrap sec"
      style={{ display: "flex", flexDirection: "column", gap: 48 }}
    >
      <SectionHead title={a.title} style={{ marginBottom: 0 }} />
      {/* Stepped heights; dots light in sequence; level 3 glows when shown. */}
      <div className="levels">
        {a.levels.map((l, i) => {
          const top = l.level === 3;
          return (
            <Card
              key={l.level}
              index={i}
              className={top ? "level-3" : undefined}
              style={{ minHeight: l.minHeight, gap: 12 }}
            >
              <div className="level-dots" aria-hidden="true">
                {[1, 2, 3].map((d) => (
                  <span key={d} className={d <= l.level ? "on" : undefined} />
                ))}
              </div>
              <p
                className="mono"
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: top ? "var(--color-blue-text)" : "var(--color-dim)",
                }}
              >
                {l.label}
              </p>
              <h3 className="h3" style={{ fontSize: 24 }}>
                {l.title}
              </h3>
              <p className="muted">{l.body}</p>
            </Card>
          );
        })}
      </div>
      <p style={{ fontSize: 17, fontWeight: 500 }}>{a.line}</p>
    </section>
  );
}
