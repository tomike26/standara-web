import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/content/home";

// Only whole-number figures count up; "£55–81bn" and "1 in 6" stay static.
const COUNTABLE = /^[^\d]*\d+[^\d]*$/;

export function KeyFigures() {
  const f = home.figures;
  return (
    <section
      className="deep"
      style={{
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
      }}
      aria-label="Key figures"
    >
      <div
        className="wrap"
        style={{
          paddingTop: "clamp(56px,7vw,88px)",
          paddingBottom: "clamp(56px,7vw,88px)",
          display: "flex",
          flexDirection: "column",
          gap: 36,
        }}
      >
        <div className="figures">
          {f.items.map((item, i) => (
            <Reveal key={item.value} index={i}>
              <p className={item.accent ? "fig accent" : "fig"}>
                {COUNTABLE.test(item.value) ? (
                  <CountUp value={item.value} />
                ) : (
                  item.value
                )}
              </p>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
        <p className="note">{f.sources}</p>
      </div>
    </section>
  );
}
