import { Section, SectionHead } from "@/components/layout/Section";
import { ArrowLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Chip";
import { home } from "@/content/home";

export function Audiences() {
  const a = home.audiences;
  return (
    <Section variant="band">
      <SectionHead title={a.title} />
      <div className="grid-auto">
        {a.cards.map((c, i) => (
          <Card
            key={c.kicker}
            index={i}
            className={c.featured ? "feature" : undefined}
            style={{ padding: 32, gap: 16 }}
          >
            {c.badge ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="kicker" style={{ color: "#3f3f46" }}>
                  {c.kicker}
                </span>
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
