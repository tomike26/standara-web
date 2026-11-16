import { Section, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { problemIcons } from "@/components/ui/icons";
import { home } from "@/content/home";

export function Problem() {
  const p = home.problem;
  return (
    <Section>
      <SectionHead eyebrow={p.eyebrow} title={p.title} wide />
      <div className="grid-auto">
        {p.cards.map((c, i) => {
          const Icon = problemIcons[c.icon];
          return (
            <Card key={c.num} index={i}>
              <div className="card-top">
                <span className="num">{c.num}</span>
                <Icon size={28} />
              </div>
              <h3 className="h3">{c.title}</h3>
              <p className="muted">{c.body}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
