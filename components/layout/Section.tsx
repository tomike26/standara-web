import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section shells matching the design:
 *  - "page":  <section class="wrap sec">            (container + vertical padding)
 *  - "band":  <section class="band"><div class="wrap sec">  (alternating #111113 band)
 *  - "end":   <section class="wrap sec-end">        (bottom padding only)
 */
export function Section({
  id,
  variant = "page",
  className,
  innerClassName,
  style,
  innerStyle,
  labelledBy,
  children,
}: {
  id?: string;
  variant?: "page" | "band" | "end";
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  labelledBy?: string;
  children: ReactNode;
}) {
  if (variant === "band") {
    return (
      <section
        id={id}
        aria-labelledby={labelledBy}
        className={cx("band", className)}
        style={style}
      >
        <div className={cx("wrap sec", innerClassName)} style={innerStyle}>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("wrap", variant === "page" ? "sec" : "sec-end", className)}
      style={style}
    >
      {children}
    </section>
  );
}

/** H2 (+ optional body) block that fades up. */
export function SectionHead({
  title,
  titleId,
  body,
  className,
  style,
}: {
  title: string;
  titleId?: string;
  body?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Reveal className={cx("head", className)} style={style}>
      <h2 className="h2" id={titleId}>
        {title}
      </h2>
      {body && <p className="body-lg">{body}</p>}
    </Reveal>
  );
}

function cx(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}
