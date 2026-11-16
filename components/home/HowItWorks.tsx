import { Section, SectionHead } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { InPractice } from "./InPractice";
import { home } from "@/content/home";

export function HowItWorks() {
  const h = home.how;
  const lastIdx = h.steps.length - 1;
  return (
    <Section id={h.id}>
      <SectionHead eyebrow={h.eyebrow} title={h.title} wide />
      {/* Each top rule draws left → right, 250ms apart; step 5's glows blue. */}
      <Reveal as="ol" fade={false} className="steps">
        {h.steps.map((s, i) => (
          <li key={s.num} className={i === lastIdx ? "last" : undefined}>
            <span className={i === lastIdx ? "num last" : "num"}>{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </Reveal>
      <InPractice />
    </Section>
  );
}
