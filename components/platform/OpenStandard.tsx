import { Reveal } from "@/components/motion/Reveal";
import { platform } from "@/content/platform";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function OpenStandard() {
  const s = platform.standard;
  return (
    <section className="wrap sec split" style={{ alignItems: "start" }}>
      <Reveal className="stack">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="h2">{s.title}</h2>
        <p className="body-lg">{s.body}</p>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {s.sectors.map((sector, i) => (
          <Reveal
            key={sector.name}
            index={i}
            className={
              sector.state === "live"
                ? "sector live"
                : sector.state === "later"
                  ? "sector later"
                  : "sector"
            }
          >
            <strong>{sector.name}</strong>
            <span
              className={sector.state === "live" ? "sbadge blue" : "sbadge"}
            >
              {sector.badge}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
