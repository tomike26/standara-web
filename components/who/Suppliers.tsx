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
        {/* Copy and figures on the left; the photo fills the column beside them. */}
        <div className="sup-top">
          <div className="sup-copy">
            <div className="stack" style={{ maxWidth: 640 }}>
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <h2 className="h2" id="suppliers-title">
                {s.title}
              </h2>
              <p className="body-lg">{s.body}</p>
            </div>
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
            <p className="note">{s.note}</p>
          </div>
          <Reveal index={1} className="sup-photo">
            <Photo
              src="/images/who-suppliers.jpg"
              alt="Site crew in hi-vis pouring a concrete slab"
              ratio="auto"
              sizes="(min-width: 1000px) 540px, 100vw"
              position="62% 45%"
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
      </div>
    </section>
  );
}
