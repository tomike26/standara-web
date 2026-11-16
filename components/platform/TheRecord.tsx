import { Reveal } from "@/components/motion/Reveal";
import { DatabaseIcon } from "@/components/ui/icons";
import { platform } from "@/content/platform";

export function TheRecord() {
  const r = platform.modules.record;
  return (
    <Reveal className="record" index={1}>
      <span className="record-icon">
        <DatabaseIcon size={28} stroke="#e8a33d" />
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          flex: "1 1 420px",
        }}
      >
        <p style={{ fontSize: 18, color: "#e4e4e7" }}>{r.body}</p>
      </div>
    </Reveal>
  );
}
