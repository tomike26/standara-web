"use client";

import { useEffect, useState } from "react";
import { animate } from "motion/react";
import { useRevealPhase } from "./Reveal";

const easeOutQuart = (p: number) => 1 - Math.pow(1 - p, 4);

/**
 * Counts a figure like "£407bn" or "95%" up from 0 when its parent <Reveal> plays.
 * Renders the final value on the server, without JS, under reduced motion,
 * and when the parent was already on screen at hydration.
 */
export function CountUp({
  value,
  duration = 1.5,
}: {
  value: string;
  duration?: number;
}) {
  const phase = useRevealPhase();
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (!match) return;
    if (phase === "armed") setCurrent(0);
    if (phase !== "in") return;
    const target = parseInt(match[2]!, 10);
    const controls = animate(0, target, {
      duration,
      ease: easeOutQuart,
      onUpdate: (v) => setCurrent(Math.round(v)),
      onComplete: () => setCurrent(null),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, value, duration]);

  if (!match || current === null) return <>{value}</>;
  return (
    <>
      {match[1]}
      {current}
      {match[3]}
    </>
  );
}
