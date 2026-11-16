import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "blue" | "ghost";

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

export function buttonClass(
  variant: Variant = "blue",
  size: "md" | "lg" = "md",
  extra?: string,
) {
  return ["btn", `btn-${variant}`, size === "lg" && "btn-lg", extra]
    .filter(Boolean)
    .join(" ");
}

/** Link styled as a button (all CTAs in the design are links). */
export function ButtonLink({
  variant = "blue",
  size = "md",
  className,
  ...rest
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...rest} />;
}

/** Text link with an arrow that nudges right on hover. */
export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="link">
      {children}{" "}
      <span className="ar" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
