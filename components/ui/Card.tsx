import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** Card that fades up on scroll and lifts on hover. */
export function Card({
  index = 0,
  className,
  style,
  children,
}: {
  index?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Reveal
      index={index}
      className={["card", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </Reveal>
  );
}
