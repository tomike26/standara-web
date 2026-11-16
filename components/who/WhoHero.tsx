import Link from "next/link";
import { SplitWords } from "@/components/motion/SplitWords";
import { who } from "@/content/who";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function WhoHero() {
  const h = who.hero;
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
        <nav className="jumps" aria-label="On this page">
          {h.jumps.map((j) => (
            <Link key={j.href} href={j.href}>
              {j.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
