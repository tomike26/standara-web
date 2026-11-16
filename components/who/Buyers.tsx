import { SectionHead } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { who } from "@/content/who";

export function Buyers() {
  const b = who.buyers;
  const lastIdx = b.steps.length - 1;
  return (
    <section
      id={b.id}
      className="wrap sec"
      style={{ display: "flex", flexDirection: "column", gap: 48 }}
    >
      <SectionHead
        title={b.title}
        body={b.body}
        style={{ marginBottom: 0, maxWidth: 780 }}
      />
      <ol className="stepcards">
        {b.steps.map((s, i) => (
          <Reveal as="li" key={s.n} index={i}>
            <span className={i === lastIdx ? "n blue" : "n"}>{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
      <div className="split" style={{ gap: 20, alignItems: "start" }}>
        <Reveal className="tbl" role="table" aria-label={b.table.label}>
          <div className="row th" role="row">
            {b.table.headers.map((h) => (
              <span key={h} role="columnheader">
                {h}
              </span>
            ))}
          </div>
          {b.table.rows.map(([benefit, detail]) => (
            <div className="row" role="row" key={benefit}>
              <span role="cell">{benefit}</span>
              <span role="cell">{detail}</span>
            </div>
          ))}
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Reveal className="callout">
            <p>{b.callout.body}</p>
          </Reveal>
          <p className="note">{b.note}</p>
        </div>
      </div>
    </section>
  );
}
