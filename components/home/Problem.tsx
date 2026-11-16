import { Section, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { home } from "@/content/home";

export function Problem() {
  const p = home.problem;
  return (
    <Section>
      <SectionHead eyebrow={p.eyebrow} title={p.title} wide />
      <div className="grid-auto grid-open">
        {p.cards.map((c, i) => {
          return (
            <Card key={c.num} index={i} className="card-open">
              <h3 className="h3">{c.title}</h3>
              <p className="muted">{c.body}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
