import { Section, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { platform } from "@/content/platform";

export function Products() {
  const p = platform.products;
  return (
    <Section
      variant="band"
      innerStyle={{ display: "flex", flexDirection: "column", gap: 48 }}
    >
      <SectionHead
        eyebrow={p.eyebrow}
        title={p.title}
        wide
        style={{ marginBottom: 0 }}
      />
      <div className="grid-4">
        {p.items.map((item, i) => (
          <Card
            key={item.title}
            index={i}
            className="prod"
            style={{ borderTopColor: item.accent, gap: 16 }}
          >
            <div>
              <h3 className="h3" style={{ fontSize: 20 }}>
                {item.title}
              </h3>
              <p className="kind">{item.kind}</p>
            </div>
            <ul>
              {item.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <p className="note">{p.note}</p>
    </Section>
  );
}
