import { ImageResponse } from "next/og";
import { home } from "@/content/home";
import { site } from "@/content/site";

export const alt = site.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    // No browser UA → Google Fonts serves TTF, which the OG renderer understands.
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@${weight}`,
      )
    ).text();
    const url = css.match(
      /src: url\((.+?)\) format\('(?:truetype|opentype)'\)/,
    )?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [w700, w600] = await Promise.all([loadFont(700), loadFont(600)]);
  const fonts = [
    w700 && {
      name: "Space Grotesk",
      data: w700,
      weight: 700 as const,
      style: "normal" as const,
    },
    w600 && {
      name: "Space Grotesk",
      data: w600,
      weight: 600 as const,
      style: "normal" as const,
    },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 600 | 700;
    style: "normal";
  }[];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#000000",
        backgroundImage:
          "radial-gradient(circle at 85% 10%, rgba(255, 255, 255, 0.175), rgba(255, 255, 255, 0) 55%)",
        padding: "72px 80px",
        fontFamily: fonts.length ? "Space Grotesk" : "sans-serif",
        color: "#f5f5f7",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 13,
            background: "#1c1c1f",
            border: "2px solid rgba(255, 255, 255, 0.175)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8a33d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        </div>
        <div
          style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          {site.name}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.03,
            letterSpacing: "-0.035em",
            maxWidth: 1000,
          }}
        >
          {home.hero.title}
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
