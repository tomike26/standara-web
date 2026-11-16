import { SplitWords } from "@/components/motion/SplitWords";
import { ButtonLink } from "@/components/ui/Button";
import { TrustScoreReport } from "./TrustScoreReport";
import { home } from "@/content/home";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  const h = home.hero;
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h1 className="h1">
            <SplitWords text={h.title} />
          </h1>
          <p className="lede">{h.lede}</p>
          <div className="actions">
            <ButtonLink href={h.primary.href}>{h.primary.label}</ButtonLink>
            <ButtonLink href={h.secondary.href} variant="ghost">
              {h.secondary.label}
            </ButtonLink>
          </div>
          <p className="small">{h.small}</p>
        </div>
        <TrustScoreReport />
      </div>
    </section>
  );
}
