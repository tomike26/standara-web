import { Section, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TheRecord } from "./TheRecord";
import { platform } from "@/content/platform";

export function Modules() {
  const m = platform.modules;
  return (
    <Section>
      <SectionHead title={m.title} />
      <div
        className="grid-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: 16,
        }}
      >
        {m.items.map((item, i) => (
          <Card key={item.num} index={i} className="module">
            <span className="num">{item.num}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.body}</p>
              {"chips" in item && (
                <div className="chips" style={{ marginTop: 4 }}>
                  {item.chips.map((c) => (
                    <Chip key={c.kind} kind={c.kind}>
                      {c.label}
                    </Chip>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      <TheRecord />
    </Section>
  );
}
