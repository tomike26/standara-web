import type { Metadata } from "next";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { Modules } from "@/components/platform/Modules";
import { TrustScore } from "@/components/platform/TrustScore";
import { AssuranceScale } from "@/components/platform/AssuranceScale";
import { Products } from "@/components/platform/Products";
import { OpenStandard } from "@/components/platform/OpenStandard";
import { CtaPanel } from "@/components/shared/CtaPanel";
import { platform } from "@/content/platform";

export const metadata: Metadata = {
  title: platform.meta.title,
  description: platform.meta.description,
  alternates: { canonical: "/platform" },
  openGraph: {
    title: platform.meta.title,
    description: platform.meta.description,
    url: "/platform",
  },
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <Modules />
      <TrustScore />
      <AssuranceScale />
      <Products />
      <OpenStandard />
      <CtaPanel {...platform.cta} />
    </>
  );
}
