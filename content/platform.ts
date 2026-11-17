// Platform page copy — verbatim from design/platform.html.

export const platform = {
  meta: {
    title: "Standara — Platform",
    description:
      "One record, six modules: Profile, Bid, Comply, Pay, Score and Finance. The Trust Score and the Standara Assurance Scale.",
  },

  hero: {
    eyebrow: "The platform",
    title: "One record. Every module reads and writes it.",
    lede: "Registries tell you a supplier exists. Accreditations tell you it is qualified. Standara tells you whether it delivers.",
    tags: [
      { tag: "REGISTRY", text: "it exists", on: false },
      { tag: "ACCREDITATION", text: "it is qualified", on: false },
      { tag: "STANDARA", text: "it delivers", on: true },
    ],
  },

  modules: {
    eyebrow: "Six modules",
    title: "From first bid to funded invoice, on one record",
    items: [
      {
        num: "01",
        title: "Profile",
        body: "Who the supplier is, with live registry checks.",
      },
      {
        num: "02",
        title: "Bid",
        body: "What it claims at tender, pre-filled and backed by evidence.",
      },
      {
        num: "03",
        title: "Comply",
        body: "What it actually delivers, confirmed KPI by KPI.",
      },
      {
        num: "04",
        title: "Pay",
        body: "Invoices matched to proof before release.",
        chips: [
          { label: "Release", kind: "release" },
          { label: "Hold", kind: "hold" },
          { label: "Review", kind: "review" },
        ],
      },
      {
        num: "05",
        title: "Score",
        body: "The record as a risk signal, licensed to buyers, lenders and insurers.",
      },
      {
        num: "06",
        title: "Finance",
        body: "Licensed partners fund verified invoices. Standara never lends.",
      },
    ],
    record: {
      eyebrow: "The record",
      body: "One Verified Contract Record per contract, on an immutable ledger. Every module reads and writes it, and no party can alter another's data.",
    },
  },

  trustScore: {
    eyebrow: "The Trust Score",
    id: "trust-score",
    title: "Proven past delivery: the best guide to future delivery",
    body: "A 0–100 score in five bands, from Limited to Exceptional. Explainable, challengeable, and never a ranking. Each score comes with a recommended contract value: a lower band says “start smaller”, never “no”.",
    bandsLabel: "Five score bands from Limited to Exceptional",
    bands: ["#dfe4ea", "#9aa9b9", "#3e5c76", "#e0a526", "#0e9f6e"],
    bandsStart: "0 · LIMITED",
    bandsEnd: "EXCEPTIONAL · 100",
    ticks: [
      "Company age is never used",
      "New suppliers get a provisional score, capped at 75",
      "Suppliers see their score and can challenge it",
    ],
    weights: [
      {
        pct: "50%",
        meter: { width: "100%", color: "#e0a526" },
        title: "Delivery evidence",
        body: "Confirmed delivery, plus how it pays its subcontractors and the social value it delivered.",
      },
      {
        pct: "25%",
        meter: { width: "50%", color: "#3e5c76" },
        title: "Financial standing",
        body: "Can it carry this contract? Licensed credit data, total public commitments and distress events.",
      },
      {
        pct: "25%",
        meter: { width: "50%", color: "#9aa9b9" },
        title: "Accreditation",
        body: "Certificates, insurance and registrations, and whether they stay current during the contract.",
      },
    ],
    note: "Weights are starting values, calibrated against real outcomes.",
  },

  assurance: {
    eyebrow: "The Standara Assurance Scale",
    id: "assurance",
    title: "Every piece of evidence shows how far you can rely on it",
    levels: [
      {
        level: 1,
        label: "ASSURANCE 1",
        title: "Self-reported",
        body: "The supplier says it was done. Nothing attached.",
        minHeight: 240,
      },
      {
        level: 2,
        label: "ASSURANCE 2",
        title: "Document-backed",
        body: "Backed by the supplier's own documents or systems: photos, timesheets, certificates.",
        minHeight: 280,
      },
      {
        level: 3,
        label: "ASSURANCE 3",
        title: "Independently corroborated",
        body: "Confirmed by someone outside the supplier: the buyer, a delivery partner or an official register.",
        minHeight: 320,
      },
    ],
    line: "Published openly. Buyers can require Assurance 3 before an invoice is paid.",
  },

  products: {
    eyebrow: "Products",
    title: "Everything on one record",
    items: [
      {
        title: "Build the record",
        kind: "FREE FOR SUPPLIERS",
        photo: { src: "/images/product-record.jpg", alt: "A tradesperson at work on site", position: "50% 35%" },
        accent: "#e0a526",
        features: [
          "Verified company Profile",
          "Pre-filled, evidence-backed bids",
          "Delivery confirmed KPI by KPI",
          "Past contracts, attested",
          "Tenders matched to your record",
          "Worker credential record",
        ],
      },
      {
        title: "For buyers",
        kind: "BUYER SUBSCRIPTION",
        photo: { src: "/images/product-buyers.jpg", alt: "Invoices checked on a laptop", position: "50% 50%" },
        accent: "#0e9f6e",
        features: [
          "Release, Hold or Review on every invoice",
          "Exception desk and disputes",
          "Bank-detail fraud checks",
          "Contract management to the Cabinet Office Playbook",
          "Verified Payer: prompt payment down the chain",
          "Award-to-delivery API",
        ],
      },
      {
        title: "Performance Bureau",
        kind: "LICENSED",
        photo: { src: "/images/product-bureau.jpg", alt: "A dashboard showing a quality score", position: "40% 50%" },
        accent: "#3e5c76",
        features: [
          "Trust Score, 0–100",
          "Assurance Scale on every record",
          "Distress early warning",
          "Data licences and feeds for lenders, insurers and bureaus",
        ],
      },
      {
        title: "Finance",
        kind: "PARTNER-FUNDED",
        photo: { src: "/images/product-finance.jpg", alt: "A desk with papers and a calculator", position: "50% 50%" },
        accent: "var(--color-text)",
        features: [
          "Early payment and invoice finance on verified invoices",
          "Contract award finance, by referral",
          "Full lender view, with supplier consent",
          "Bond and insurance quotes through partners",
        ],
      },
    ],
    note: "Standara never lends: licensed partners fund every loan. Suppliers never pay to be on the record.",
  },

  standard: {
    eyebrow: "Setting the standard",
    title: "An open standard for proof of delivery",
    body: "We have proposed procurement delivery standards to BSI. Buyers and frameworks can write the standard into contracts. It is open to everyone, so there is no lock-in, and Standara runs the record that meets it.",
    sectors: [
      {
        name: "Construction and housing",
        badge: "Launch sectors, from Jan 2027",
        state: "live",
      },
      {
        name: "Facilities management and security",
        badge: "Next wave",
        state: "next",
      },
      {
        name: "All 18 public procurement sectors",
        badge: "As evidence gates are met",
        state: "later",
      },
    ],
  },

  cta: {
    id: "pilot",
    title: "See the record in action",
    body: "A 30-minute walkthrough of Pay, Comply and the Trust Score report.",
    button: { label: "Book a demo", href: "/who-its-for#contact" },
    photo: {
      src: "/images/cta-platform.jpg",
      alt: "Performance graphs on a laptop screen",
      position: "50% 40%",
    },
  },
} as const;
