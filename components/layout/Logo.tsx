import Link from "next/link";
import { TickIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

/** Navy square with blue tick + "Standara". */
export function Logo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const footer = size === "footer";
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <span
        className="mark"
        style={footer ? { width: 32, height: 32 } : undefined}
      >
        <TickIcon size={20} stroke="#e0a526" strokeWidth={3} />
      </span>
      <span
        className="brand-name"
        style={footer ? { fontSize: 21 } : undefined}
      >
        {site.name}
      </span>
    </Link>
  );
}
