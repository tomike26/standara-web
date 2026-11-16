import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function Footer() {
  const { footer } = site;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col" style={{ gap: 14 }}>
            <Logo size="footer" />
            <p>{site.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <nav
              key={col.heading}
              className="foot-col"
              aria-label={
                col.heading.charAt(0) + col.heading.slice(1).toLowerCase()
              }
            >
              <p className="foot-h">{col.heading}</p>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
              {"text" in col && <span>{col.text}</span>}
            </nav>
          ))}
        </div>
        <div className="foot-legal">
          <span>{footer.legal}</span>
          <span>{footer.strapline}</span>
        </div>
      </div>
    </footer>
  );
}
