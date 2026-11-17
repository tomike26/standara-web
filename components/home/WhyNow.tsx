import { Reveal } from "@/components/motion/Reveal";
import { home } from "@/content/home";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";

export function WhyNow() {
  const w = home.whyNow;
  return (
    <section className="wrap sec split">
      <Reveal className="stack">
        <Eyebrow>{w.eyebrow}</Eyebrow>
        <h2 className="h2">{w.title}</h2>
        <p className="body-lg">{w.body}</p>
        <Photo
          src="/images/home-whynow.jpg"
          alt="The Houses of Parliament in Westminster"
          ratio="16 / 9"
          sizes="(min-width: 1000px) 560px, 100vw"
          position="50% 60%"
          className="whynow-photo"
        />
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
