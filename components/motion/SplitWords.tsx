import { Fragment, type CSSProperties } from "react";

/**
 * Hero headline: each word rises in from translateY(.45em) + blur(6px),
 * staggered 80ms. Pure CSS keyframes (see .word in globals.css), so the
 * headline always ends visible even without JS; disabled under reduced motion.
 */
export function SplitWords({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span
            className="word"
            style={
              { "--d": `${(0.08 * i + 0.1).toFixed(2)}s` } as CSSProperties
            }
          >
            {w}
          </span>
        </Fragment>
      ))}
    </>
  );
}
