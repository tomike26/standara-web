import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/Button";
import { home } from "@/content/home";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function InPractice() {
  const p = home.how.practice;
  const lastIdx = p.flow.length - 1;
  return (
    <Reveal className="practice" index={1}>
      <div className="stack" style={{ gap: 14 }}>
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>{p.body}</p>
        <ArrowLink href={p.link.href}>{p.link.label}</ArrowLink>
      </div>
      {/* Rows go from 25% opacity to full in turn; the final row then pulses. */}
      <Reveal fade={false} className="flow">
        {p.flow.map((row, i) => (
          <div key={row.tag} className={i === lastIdx ? "done" : undefined}>
            <span className="mono">{row.tag}</span>
            <span>{row.text}</span>
          </div>
        ))}
      </Reveal>
    </Reveal>
  );
}
