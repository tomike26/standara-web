import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap hero-col">
        <p className="eyebrow">404</p>
        <h1 className="h1 h1-sub">Page not found</h1>
        <div className="actions">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
