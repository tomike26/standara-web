"use client";

import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/** True when the visitor has asked for reduced motion. Safe during SSR (returns false). */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false;
}

/** Synchronous check for use inside effects. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
