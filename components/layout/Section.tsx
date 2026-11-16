import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

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

/** Eyebrow + H2 (+ optional body) block that fades up. */
export function SectionHead({
  eyebrow,
  title,
  titleId,
  wide,
  body,
  className,
  style,
}: {
  eyebrow?: string;
  title: string;
  titleId?: string;
  /** Let the headline run the full page width. */
  wide?: boolean;
  body?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Reveal
      className={cx("head", wide && "head-wide", className)}
      style={style}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
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
