import { Reveal } from "@/components/motion/Reveal";
import { DatabaseIcon } from "@/components/ui/icons";
import { platform } from "@/content/platform";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function TheRecord() {
  const r = platform.modules.record;
  return (
    <Reveal className="record" index={1}>
      <span className="record-icon">
        <DatabaseIcon size={28} stroke="#9a6412" />
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          flex: "1 1 420px",
        }}
      >
        <Eyebrow style={{ fontSize: 12 }}>{r.eyebrow}</Eyebrow>
        <p style={{ fontSize: 18, color: "#2a2a2e" }}>{r.body}</p>
      </div>
    </Reveal>
  );
}
