// Site-wide copy: navigation, footer, legal lines, contact details.
// Copy is approved verbatim from design/*.html — edit wording here, not in components.

export const SITE_URL =
  // TODO: set NEXT_PUBLIC_SITE_URL to the production domain before launch
  (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  );

export const site = {
  name: "Standara",
  legalName: "Standara Ltd",
  location: "Birmingham, UK",
  tagline:
    "The Procurement Performance Bureau. Proven delivery, trusted everywhere.",
  defaultTitle: "Standara — The Procurement Performance Bureau",
  defaultDescription:
    "Standara turns independently confirmed contract delivery into a record buyers award on and lenders fund on. Free for suppliers.",
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    menuLabel: "Menu",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Who it's for", href: "/who-its-for" },
    ],
    joinPilot: {
      label: "Join the pilot",
      href: "/#pilot",
      // On "Who it's for" the design points this link at the contact form instead.
      hrefByPath: { "/who-its-for": "/who-its-for#contact" } as Record<
        string,
        string
      >,
    },
    cta: { label: "Book a demo", href: "/who-its-for#contact" },
  },
  footer: {
    columns: [
      {
        heading: "PRODUCT",
        links: [
          { label: "Platform", href: "/platform" },
          { label: "Trust Score", href: "/platform#trust-score" },
          { label: "Assurance Scale", href: "/platform#assurance" },
        ],
      },
      {
        heading: "SOLUTIONS",
        links: [
          { label: "Buyers", href: "/who-its-for#buyers" },
          { label: "Suppliers", href: "/who-its-for#suppliers" },
          { label: "Lenders", href: "/who-its-for#lenders" },
        ],
      },
      {
        heading: "COMPANY",
        links: [{ label: "Contact", href: "/who-its-for#contact" }],
        text: "Birmingham, UK",
      },
    ],
    legal:
      "© 2026 Standara Ltd. Standara never lends: licensed partners fund every loan.",
    strapline: "Free for suppliers, subcontractors and workers.",
  },
} as const;
