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
      width="156"
      height="156"
      viewBox="0 0 132 132"
    >
      <circle
        cx="66"
        cy="66"
        r="54"
        fill="none"
        stroke="#efede8"
        strokeWidth="10"
      />
      <circle
        ref={arcRef}
        className="gauge-arc"
        cx="66"
        cy="66"
        r="54"
        fill="none"
        stroke="#d18f2a"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={dash}
        transform="rotate(-90 66 66)"
      />
      <text
        className={hold ? "score-num hold" : "score-num"}
        x="66"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-archivo), sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="#111113"
        aria-hidden="true"
      >
        {display ?? score}
      </text>
      <text
        x="66"
        y="93"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="11"
        fill="#71717a"
        aria-hidden="true"
      >
        {outOf}
      </text>
    </svg>
  );
}
