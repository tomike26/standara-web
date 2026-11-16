import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";
import { who } from "@/content/who";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";

export function Contact() {
  const c = who.contact;
  return (
    <section id={c.id} className="wrap sec-end" aria-labelledby="contact-title">
      <Reveal className="contact">
        <div className="contact-side">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="h2"
            id="contact-title"
            style={{ fontSize: "clamp(32px,4vw,46px)" }}
          >
            {c.title}
          </h2>
          <p>{c.body}</p>
          <Photo
            src="/images/who-lenders.jpg"
            alt="A small team going through documents together"
            ratio="3 / 2"
            sizes="(min-width: 1000px) 480px, 100vw"
            position="45% 40%"
            className="contact-photo"
          />
          <div className="contact-meta">
            <strong>{c.meta.company}</strong>
            <span>{c.meta.location}</span>
          </div>
        </div>
        <ContactForm />
      </Reveal>
    </section>
  );
}
