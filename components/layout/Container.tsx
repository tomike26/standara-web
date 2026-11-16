import type { CSSProperties, ReactNode } from "react";

/** 1200px max-width wrapper with clamp(20px, 5vw, 48px) side padding. */
export function Container({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={["wrap", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
