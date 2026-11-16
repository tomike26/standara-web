import { Section, SectionHead } from "@/components/layout/Section";
import { ArrowLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Chip";
import { Photo } from "@/components/ui/Photo";
import { home } from "@/content/home";

export function Audiences() {
  const a = home.audiences;
  return (
    <Section variant="band">
      <SectionHead title={a.title} />
      <div className="grid-auto aud">
        {a.cards.map((c, i) => (
          <Card
            key={c.kicker}
            index={i}
            className={c.featured ? "feature" : undefined}
            style={{ gap: 16 }}
          >
            <Photo
              src={c.photo.src}
              alt={c.photo.alt}
              ratio="16 / 10"
              sizes="(min-width: 1000px) 400px, 100vw"
              position={c.photo.position}
              className="card-photo"
            />
            {c.badge ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="kicker">{c.kicker}</span>
                <Badge>{c.badge}</Badge>
              </div>
            ) : (
              <span className="kicker">{c.kicker}</span>
            )}
            <h3
              className="h3"
              style={{ fontSize: 26, letterSpacing: "-0.02em" }}
            >
              {c.title}
            </h3>
            <p className="muted grow">{c.body}</p>
            <ArrowLink href={c.link.href}>{c.link.label}</ArrowLink>
          </Card>
        ))}
      </div>
    </Section>
  );
}
