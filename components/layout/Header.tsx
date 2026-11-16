"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { nav } = site;

  // Header gains blur + shadow after 10px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const joinHref = nav.joinPilot.hrefByPath[pathname] ?? nav.joinPilot.href;
  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap">
        <nav aria-label={nav.label} className="nav-bar">
          <Logo />
          <button
            ref={buttonRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            {nav.menuLabel}
          </button>
          <div
            id="site-nav-links"
            className={open ? "nav-links open" : "nav-links"}
          >
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                onClick={close}
              >
                {l.label}
              </Link>
            ))}
            <Link href={joinHref} onClick={close}>
              {nav.joinPilot.label}
            </Link>
            <Link
              href={nav.cta.href}
              className={buttonClass("blue")}
              onClick={close}
            >
              {nav.cta.label}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
