import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { who } from "@/content/who";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";

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
          <Reveal index={1} className="head-photo">
            <Photo
              src="/images/who-suppliers.jpg"
              alt="Site crew in hi-vis pouring a concrete slab"
              ratio="3 / 2"
              sizes="380px"
              position="65% 45%"
            />
          </Reveal>
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
