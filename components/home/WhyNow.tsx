import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/content/home";

export function WhyNow() {
  const w = home.whyNow;
  return (
    <section className="wrap sec split">
      <Reveal className="stack">
        <h2 className="h2">{w.title}</h2>
        <p className="body-lg">{w.body}</p>
      </Reveal>
      <ol className="timeline">
        {w.timeline.map((t, i) => (
          <Reveal
            as="li"
            key={t.date}
            index={i}
            className={t.next ? "next" : undefined}
          >
            <span className="mono">{t.date}</span>
            <span>{t.text}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
