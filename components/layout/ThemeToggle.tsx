"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

type Theme = "light" | "dark";

/** Light/dark switch. The initial theme is set before paint by THEME_SCRIPT. */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.dataset.theme = next;
    root.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#07152a" : "#ffffff");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {/* Before hydration both icons are present; CSS shows the right one. */}
      <SunIcon size={18} className="ic-sun" />
      <MoonIcon size={18} className="ic-moon" />
    </button>
  );
}

/**
 * Runs in <head> before first paint: saved choice, else the OS setting.
 * Keeps the page from flashing the wrong theme.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#07152a':'#ffffff')}catch(e){}})();`;
