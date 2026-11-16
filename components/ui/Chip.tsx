import type { ReactNode } from "react";

export type ChipKind = "release" | "hold" | "review";

export function Chip({
  kind,
  children,
}: {
  kind: ChipKind;
  children: ReactNode;
}) {
  return <span className={`chip ${kind}`}>{children}</span>;
}

/** Blue "Free" badge with a shimmer. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

/** Small mono label, e.g. the SAMPLE marker on the report card. */
export function Pill({ children }: { children: ReactNode }) {
  return <span className="pill-grey">{children}</span>;
}
