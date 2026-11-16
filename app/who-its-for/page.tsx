import type { Metadata } from "next";
import { WhoHero } from "@/components/who/WhoHero";
import { Buyers } from "@/components/who/Buyers";
import { Suppliers } from "@/components/who/Suppliers";
import { Lenders } from "@/components/who/Lenders";
import { Contact } from "@/components/who/Contact";
import { who } from "@/content/who";

export const metadata: Metadata = {
  title: who.meta.title,
  description: who.meta.description,
  alternates: { canonical: "/who-its-for" },
  openGraph: {
    title: who.meta.title,
    description: who.meta.description,
    url: "/who-its-for",
  },
};

export default function WhoItsForPage() {
  return (
    // .wf scopes this page's own motion (see "WHO IT'S FOR MOTION" in globals.css).
    <div className="wf">
      <WhoHero />
      <Buyers />
      <Suppliers />
      <Lenders />
      <Contact />
    </div>
  );
}
