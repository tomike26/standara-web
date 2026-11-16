// Home page copy — verbatim from design/index.html.

export const home = {
  hero: {
    eyebrow: "The Procurement Performance Bureau",
    title: "Proven delivery, trusted everywhere.",
    lede: "Like a credit bureau, but for supplier delivery. Standara turns independently confirmed contract delivery into a record that buyers award on and lenders fund on.",
    primary: { label: "Book a demo", href: "/who-its-for#contact" },
    secondary: { label: "See how it works", href: "#how" },
    small:
      "Free for suppliers, subcontractors and workers. Standara never lends.",
  },

  report: {
    ariaLabel: "Sample Trust Score report",
    kicker: "TRUST SCORE REPORT",
    name: "Northfield Roofing Ltd",
    sample: "SAMPLE",
    score: 78,
    scoreOutOf: "/ 100",
    ringLabel: "Trust Score 78 out of 100",
    band: "Strong",
    contracts: { count: "12", label: "corroborated contracts" },
    assurance: "Assurance 3 evidence",
    breakdownLabel: "BREAKDOWN",
    breakdown: [
      { label: "Delivery evidence 50%", weight: 50, tone: "c1" },
      { label: "Financial standing 25%", weight: 25, tone: "c2" },
      { label: "Accreditation 25%", weight: 25, tone: "c3" },
    ],
    movesLabel: "WHAT MOVES IT",
    moves: [
      { dir: "up", label: "Delivery independently confirmed" },
      { dir: "up", label: "Paid by buyers without dispute" },
      { dir: "down", label: "Insurance certificate renewal due" },
    ],
  },

  problem: {
    eyebrow: "The problem",
    title:
      "Supplier delivery is invisible. So buyers award blind and lenders lend blind.",
    cards: [
      {
        num: "01",
        icon: "eyeOff",
        title: "Award blind",
        body: "Buyers choose suppliers on self-declared claims, questionnaires and references. Nobody checks what was actually delivered.",
      },
      {
        num: "02",
        icon: "clipboard",
        title: "Pay on trust",
        body: "Contract managers chase monthly returns, then take them on trust. Invoices are paid with little link to proof.",
      },
      {
        num: "03",
        icon: "external",
        title: "Proof that goes nowhere",
        body: "A supplier that delivers well cannot carry that proof to its next bid, or borrow against it.",
      },
    ],
  },

  figures: {
    items: [
      {
        value: "£407bn",
        accent: false,
        body: "spent by the UK public sector on procurement in 2023–24",
      },
      {
        value: "£55–81bn",
        accent: true,
        body: "lost to fraud and error in the public sector in 2023–24, mostly undetected",
      },
      {
        value: "£11bn",
        accent: false,
        body: "a year: the cost of late payment across the economy",
      },
      {
        value: "1 in 6",
        accent: false,
        body: "invoices still paid late by large businesses in 2025",
      },
    ],
    sources:
      "Sources: National Audit Office (Feb 2025); Small Business Commissioner (Jul 2025); Department for Business and Trade payment practices statistics (Jul 2026).",
  },

  how: {
    eyebrow: "How it works",
    id: "how",
    title:
      "Proven delivery becomes a record. The record becomes a Trust Score.",
    steps: [
      {
        num: "STEP 1",
        title: "Deliver",
        body: "The supplier records delivery and submits evidence against each contract commitment.",
      },
      {
        num: "STEP 2",
        title: "Corroborate",
        body: "The buyer, a delivery partner or a data feed confirms it independently.",
      },
      {
        num: "STEP 3",
        title: "Record",
        body: "The confirmed outcome becomes a Verified Contract Record in the supplier's history.",
      },
      {
        num: "STEP 4",
        title: "Score",
        body: "Every record feeds a 0–100 Trust Score the supplier can see and challenge.",
      },
      {
        num: "STEP 5",
        title: "Trusted",
        body: "Buyers check delivery history before award. Lenders fund on the score.",
      },
    ],
    practice: {
      eyebrow: "In practice",
      body: "A roofing contractor finishes a £250k council milestone. The council confirms it, the invoice is released, and a Verified Contract Record lifts the contractor's Trust Score. A housing association searching for roofers sees 12 corroborated contracts before it awards. A partner lender funds the next invoice on the same record.",
      link: { label: "Explore the platform", href: "/platform" },
      flow: [
        { tag: "MILESTONE", text: "£250k council roofing milestone complete" },
        { tag: "CONFIRMED", text: "Council corroborates · invoice released" },
        { tag: "RECORD", text: "Verified Contract Record lifts Trust Score" },
        { tag: "TRUSTED", text: "Next award won · next invoice funded" },
      ],
    },
  },

  audiences: {
    title: "Award on evidence. Pay on proof. Fund on the record.",
    cards: [
      {
        kicker: "FOR BUYERS",
        title: "No payment without proof",
        body: "Check corroborated delivery before award. Release, Hold or Review every invoice. Draft Procurement Act notices from the evidence.",
        link: { label: "For councils and primes", href: "/who-its-for#buyers" },
        featured: false,
        badge: null,
      },
      {
        kicker: "FOR SUPPLIERS",
        title: "Proof that wins work",
        body: "Your proven delivery travels with you. Win the next contract, get paid on time and open cheaper funding. Compete on proof, not size.",
        link: { label: "For suppliers", href: "/who-its-for#suppliers" },
        featured: true,
        badge: "Free",
      },
      {
        kicker: "FOR LENDERS",
        title: "Facts no credit file holds",
        body: "Fund invoices the buyer has already verified. Decide in hours on one consented data pack, and monitor the record live.",
        link: { label: "For lenders", href: "/who-its-for#lenders" },
        featured: false,
        badge: null,
      },
    ],
  },

  whyNow: {
    eyebrow: "Why now",
    title: "Buyers must now prove delivery. Nobody holds the evidence.",
    body: "New rules require public and private buyers to record, publish and act on supplier performance. Standara holds the evidence they need.",
    timeline: [
      {
        date: "Feb 2025",
        text: "Procurement Act 2023 in force: KPIs, published performance, exclusion for poor delivery",
        next: false,
      },
      {
        date: "Sep 2025",
        text: "Failure to prevent fraud offence: large companies must show reasonable fraud controls",
        next: false,
      },
      {
        date: "Oct 2025",
        text: "PPN 018 and PPN 021: payment performance checked on central government contracts above £5m",
        next: false,
      },
      {
        date: "Jan 2026",
        text: "KPI performance notices: buyers must record supplier performance",
        next: false,
      },
      {
        date: "Jan 2027",
        text: "PPN 026 Social Value Model mandatory for in-scope construction",
        next: true,
      },
    ],
  },

  demand: {
    eyebrow: "Early demand",
    title: "Built with the buyers who will use it",
    cards: [
      {
        title: "3 council buyers",
        body: "have confirmed Standara solves a real problem they face today.",
      },
      {
        title: "Pilot committed",
        body: "A council buyer in Yorkshire will pilot Standara when it goes live in 2027.",
      },
      {
        title: "An open standard",
        body: "We have proposed procurement delivery standards to BSI, so buyers can write proof of delivery into contracts.",
      },
    ],
  },

  cta: {
    id: "pilot",
    title: "Join the 2027 pilot",
    body: "We are working with council housing-repairs teams, primes and lenders to prove pay-on-proof in live contracts.",
    button: { label: "Register your interest", href: "/who-its-for#contact" },
  },
} as const;
