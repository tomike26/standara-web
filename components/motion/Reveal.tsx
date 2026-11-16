"use client";

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useInView } from "motion/react";
import { prefersReducedMotion } from "./useReducedMotion";

/**
 * idle  – static, final state (SSR, no JS, reduced motion, or already on screen at hydration)
 * armed – starting state applied (hidden / unfilled), waiting to scroll into view
 * in    – animating to the final state
 */
export type RevealPhase = "idle" | "armed" | "in";

const RevealContext = createContext<RevealPhase>("idle");
export const useRevealPhase = () => useContext(RevealContext);

const STAGGER_S = 0.09;
const MAX_STAGGER_S = 0.45;
const SETTLE_MS = 2200; // longest child sequence (steps / flow) + reveal
const FALLBACK_MS = 8000; // matches site.js: reveal anything still waiting

type Tag = "div" | "li" | "ol" | "ul" | "p" | "section" | "article";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: Tag;
  /** Position among revealed siblings; drives the ~90ms stagger. */
  index?: number;
  /** Fade up 28px. Set false for containers that only drive child effects (steps, flow). */
  fade?: boolean;
  children?: ReactNode;
};

export function Reveal({
  as = "div",
  index = 0,
  fade = true,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<RevealPhase>("idle");
  const [settled, setSettled] = useState(false);
  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -40px 0px",
  });

  // Arm only after hydration, and only if the element starts off-screen,
  // so nothing is ever hidden without JS and nothing visible flashes.
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window))
      return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;
    setPhase("armed");
    const t = window.setTimeout(
      () => setPhase((p) => (p === "armed" ? "in" : p)),
      FALLBACK_MS,
    );
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase === "armed" && inView) setPhase("in");
  }, [phase, inView]);

  // Once the entrance has played, drop back to the static classes so hover
  // transitions are not delayed by the stagger.
  useEffect(() => {
    if (phase !== "in") return;
    const t = window.setTimeout(
      () => setSettled(true),
      SETTLE_MS + delayFor(index) * 1000,
    );
    return () => window.clearTimeout(t);
  }, [phase, index]);

  const active = phase !== "idle" && !settled;
  const classes = [
    className,
    active && fade && "rv",
    active && "arm",
    active && phase === "in" && "in",
  ]
    .filter(Boolean)
    .join(" ");

  const delay = delayFor(index);
  const mergedStyle: CSSProperties | undefined =
    active && fade && delay > 0
      ? { ...style, transitionDelay: `${delay}s` }
      : style;

  return (
    <RevealContext.Provider value={settled ? "idle" : phase}>
      {createElement(
        as,
        { ref, className: classes || undefined, style: mergedStyle, ...rest },
        children,
      )}
    </RevealContext.Provider>
  );
}

function delayFor(index: number) {
  return Math.min(index * STAGGER_S, MAX_STAGGER_S);
}
