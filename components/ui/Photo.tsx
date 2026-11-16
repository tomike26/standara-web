import Image from "next/image";
import type { CSSProperties } from "react";

/** Cropped stock photo in a rounded frame. Photos: Unsplash (Unsplash License). */
export function Photo({
  src,
  alt,
  ratio = "4 / 3",
  sizes = "(min-width: 1000px) 50vw, 100vw",
  position,
  priority,
  className,
  style,
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  /** object-position, to keep the subject in frame when cropped. */
  position?: string;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={["photo", className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio, ...style }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </figure>
  );
}
