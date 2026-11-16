"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { prefersReducedMotion } from "@/components/motion/useReducedMotion";

const COUNT_MS = 1800;
const CIRC = 339.3; // 2πr, r = 54

/**
 * Trust Score ring. The arc fills 0 → score via a CSS keyframe (.gauge-arc),
 * so it works without JS; the number counts up in step with it (1.8s ease-out).
 */
export function ScoreRing({
  score,
  outOf,
  label,
}: {
  score: number;
  outOf: string;
  label: string;
}) {
  const arcRef = useRef<SVGCircleElement>(null);
  const [hold, setHold] = useState(true);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    setHold(false);
    if (prefersReducedMotion()) return;
    // Sync with the CSS ring animation, which started at first paint.
    const anim = arcRef.current?.getAnimations?.()[0];
    const elapsed =
      anim && typeof anim.currentTime === "number" ? anim.currentTime : 0;
    if (elapsed >= COUNT_MS) return;
    const ease = (p: number) => Math.round(score * (1 - Math.pow(1 - p, 3)));
    const start = elapsed / COUNT_MS;
    setDisplay(ease(start));
    const controls = animate(start, 1, {
      duration: (COUNT_MS - elapsed) / 1000,
      ease: "linear",
      onUpdate: (p) => setDisplay(ease(p)),
      onComplete: () => setDisplay(null),
    });
    return () => controls.stop();
  }, [score]);

  const dash = `${((score / 100) * CIRC).toFixed(1)} ${CIRC}`;

  return (
    <svg
      role="img"
      aria-label={label}
      width="132"
      height="132"
      viewBox="0 0 132 132"
    >
      <circle
        cx="66"
        cy="66"
        r="54"
        fill="none"
        stroke="#2a2a30"
        strokeWidth="12"
      />
      <circle
        ref={arcRef}
        className="gauge-arc"
        cx="66"
        cy="66"
        r="54"
        fill="none"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={dash}
        transform="rotate(-90 66 66)"
      />
      <text
        className={hold ? "score-num hold" : "score-num"}
        x="66"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight="700"
        fontSize="38"
        fill="#f1f5fb"
        aria-hidden="true"
      >
        {display ?? score}
      </text>
      <text
        x="66"
        y="92"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        fill="#a1a1aa"
        aria-hidden="true"
      >
        {outOf}
      </text>
    </svg>
  );
}
