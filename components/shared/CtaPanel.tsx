import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";

export function CtaPanel({
  id,
  title,
  body,
  button,
  photo,
}: {
  id: string;
  title: string;
  body: string;
  button: { label: string; href: string };
  /** Optional photo half; the panel becomes photo | copy. */
  photo?: { src: string; alt: string; position?: string };
}) {
  const copy = (
    <>
      <div className="stack" style={{ gap: 14, maxWidth: 640 }}>
        <h2 className="h2" id={`${id}-title`}>
          {title}
        </h2>
        <p>{body}</p>
      </div>
      <ButtonLink href={button.href} size="lg">
        {button.label}
      </ButtonLink>
    </>
  );
  return (
    <section id={id} className="wrap sec-end" aria-labelledby={`${id}-title`}>
      {photo ? (
        <Reveal className="cta cta-photo">
          <Photo
            src={photo.src}
            alt={photo.alt}
            ratio="auto"
            sizes="(min-width: 860px) 560px, 100vw"
            position={photo.position}
            className="cta-media"
          />
          <div className="cta-copy">{copy}</div>
        </Reveal>
      ) : (
        <Reveal className="cta">{copy}</Reveal>
      )}
    </section>
  );
}
