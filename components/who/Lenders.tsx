import { Reveal } from "@/components/motion/Reveal";
import { ScalesIcon } from "@/components/ui/icons";
import { who } from "@/content/who";

export function Lenders() {
  const l = who.lenders;
  return (
    <section
      id={l.id}
      className="wrap sec"
      style={{ display: "flex", flexDirection: "column", gap: 48 }}
    >
      <div className="split" style={{ gap: 40, alignItems: "end" }}>
        <Reveal className="stack">
          <h2 className="h2">{l.title}</h2>
          <p className="body-lg">{l.body}</p>
        </Reveal>
        <Reveal className="neutral" index={1}>
          <span style={{ flexShrink: 0 }}>
            <ScalesIcon size={32} stroke="#e8a33d" />
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <h3 className="h3" style={{ fontSize: 20 }}>
              {l.neutral.title}
            </h3>
            <p className="muted">{l.neutral.body}</p>
          </div>
        </Reveal>
      </div>
      <ol className="lend-steps">
        {l.steps.map((s, i) => (
          <Reveal as="li" key={s.num} index={i}>
            <span className="num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
