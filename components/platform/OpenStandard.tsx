import { Reveal } from "@/components/motion/Reveal";
import { platform } from "@/content/platform";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";

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
        <Reveal style={{ marginBottom: 8 }}>
          <Photo
            src="/images/platform-site.jpg"
            alt="Aerial view of a building site, crews in orange hi-vis on a concrete deck"
            ratio="16 / 9"
            sizes="(min-width: 1000px) 600px, 100vw"
            position="50% 30%"
          />
        </Reveal>
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
