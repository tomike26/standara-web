import type { CSSProperties, ReactNode } from "react";

export function Eyebrow({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p
      className={["eyebrow", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </p>
  );
}
