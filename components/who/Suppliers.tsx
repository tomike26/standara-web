import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { who } from "@/content/who";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Suppliers() {
  const s = who.suppliers;
  const lastIdx = s.steps.length - 1;
  return (
    <section id={s.id} className="band" aria-labelledby="suppliers-title">
      <div
        className="wrap sec"
        style={{ display: "flex", flexDirection: "column", gap: 48 }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 28,
          }}
        >
          <div className="stack" style={{ maxWidth: 760 }}>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2 className="h2" id="suppliers-title">
              {s.title}
            </h2>
            <p className="body-lg">{s.body}</p>
          </div>
          <ButtonLink href={s.button.href} size="lg">
            {s.button.label}
          </ButtonLink>
        </div>
        <ol className="stepcards">
          {s.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.ix}
              index={i}
              className={i === lastIdx ? "hl" : undefined}
            >
              <span className="ix">{step.ix}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
        <div className="tiles">
          {s.tiles.map((t, i) => (
            <Reveal key={t.value} index={i}>
              <p className={t.accent ? "fig accent" : "fig"}>
                {t.countUp ? <CountUp value={t.value} /> : t.value}
              </p>
              <p>{t.body}</p>
            </Reveal>
          ))}
        </div>
        <p className="note" style={{ marginTop: -24 }}>
          {s.note}
        </p>
      </div>
    </section>
  );
}
