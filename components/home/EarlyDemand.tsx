import { Section, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { home } from "@/content/home";
import { Photo } from "@/components/ui/Photo";

export function EarlyDemand() {
  const d = home.demand;
  return (
    <Section variant="end">
      <SectionHead
        eyebrow={d.eyebrow}
        title={d.title}
        style={{ marginBottom: 40 }}
      />
      <div className="grid-auto grid-open">
        {d.cards.map((c, i) => (
          <Card
            key={c.title}
            index={i}
            className="card-open"
            style={{ gap: 10 }}
          >
            <Photo
              src={c.photo.src}
              alt={c.photo.alt}
              ratio="3 / 2"
              sizes="(min-width: 760px) 400px, 100vw"
              position={c.photo.position}
              className="col-photo"
            />
            <p
              className="h3"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 26,
              }}
            >
              {c.title}
            </p>
            <p className="muted">{c.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
