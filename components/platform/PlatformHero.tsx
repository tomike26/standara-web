import { SplitWords } from "@/components/motion/SplitWords";
import { platform } from "@/content/platform";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PlatformHero() {
  const h = platform.hero;
  return (
    <section className="hero">
      <div className="wrap hero-col">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1 className="h1 h1-sub">
          <SplitWords text={h.title} />
        </h1>
        <p className="lede" style={{ maxWidth: 640 }}>
          {h.lede}
        </p>
        <div className="tagrow">
          {h.tags.map((t) => (
            <span key={t.tag} className={t.on ? "htag on" : "htag"}>
              <span className="mono">{t.tag}</span>
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
