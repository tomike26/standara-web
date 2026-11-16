import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { KeyFigures } from "@/components/home/KeyFigures";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Audiences } from "@/components/home/Audiences";
import { WhyNow } from "@/components/home/WhyNow";
import { EarlyDemand } from "@/components/home/EarlyDemand";
import { CtaPanel } from "@/components/shared/CtaPanel";
import { home } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.defaultTitle },
  description: site.defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <KeyFigures />
      <HowItWorks />
      <Audiences />
      <WhyNow />
      <EarlyDemand />
      <CtaPanel {...home.cta} />
    </>
  );
}
