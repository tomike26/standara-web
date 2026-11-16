import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function CtaPanel({
  id,
  title,
  body,
  button,
}: {
  id: string;
  title: string;
  body: string;
  button: { label: string; href: string };
}) {
  return (
    <section id={id} className="wrap sec-end" aria-labelledby={`${id}-title`}>
      <Reveal className="cta">
        <div className="stack" style={{ gap: 14, maxWidth: 640 }}>
          <h2 className="h2" id={`${id}-title`}>
            {title}
          </h2>
          <p>{body}</p>
        </div>
        <ButtonLink href={button.href} size="lg">
          {button.label}
        </ButtonLink>
      </Reveal>
    </section>
  );
}
