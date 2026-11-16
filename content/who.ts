// "Who it's for" page copy — verbatim from design/who-its-for.html.
export const ROLES = [
  "Public buyer (council, housing association, NHS)",
  "Prime contractor or private buyer",
  "Supplier or subcontractor",
  "Lender, insurer or surety",
  "Other",
] as const;

export type Role = (typeof ROLES)[number];

export const who = {
  meta: {
    title: "Standara — Who it's for",
    description:
      "Built for buyers, suppliers and lenders. Join the 2027 pilot.",
  },

  hero: {
    eyebrow: "WHO IT'S FOR",
    title: "Built for everyone on the contract",
    lede: "Delivery proven for a council counts with a private buyer, and the reverse. One record serves buyers, suppliers and lenders.",
    jumps: [
      { label: "Buyers and primes ↓", href: "#buyers" },
      { label: "Suppliers ↓", href: "#suppliers" },
      { label: "Lenders ↓", href: "#lenders" },
    ],
  },

  buyers: {
    eyebrow: "COUNCILS, HOUSING ASSOCIATIONS, NHS, PRIMES",
    id: "buyers",
    title: "Buyers: no payment without proof",
    body: "Award on evidence, pay only for proven delivery and report without rework. The record is open and exportable, so you are never locked in.",
    steps: [
      {
        n: "1",
        title: "Check",
        body: "Corroborated delivery history before award",
      },
      { n: "2", title: "Load", body: "The contract and its promises once" },
      {
        n: "3",
        title: "Confirm",
        body: "Or dispute delivery; chase expiring certificates",
      },
      { n: "4", title: "Pay", body: "Release, Hold or Review every invoice" },
      {
        n: "5",
        title: "Report",
        body: "KPI notices drafted, audit pack in minutes",
      },
    ],
    table: {
      label: "Buyer benefits and 2027 pilot targets",
      headers: ["BENEFIT", "PILOT TARGET / DETAIL"],
      rows: [
        ["No payment without proof", "Zero unverified invoices paid"],
        ["Stop bank-detail fraud", "Name check, call-back, two approvals"],
        ["Meet the Procurement Act", "Notice ready in under an hour"],
        ["Pay on time", "95% of valid invoices within 30 days"],
        ["Spot supplier failure early", "Distress flagged within 24 hours"],
      ],
    },
    callout: {
      eyebrow: "FOR PRIMES AND PRIVATE BUYERS",
      body: "Choose subcontractors on proof, pay only for delivered work, show fair payment on every public bid, and keep the Building Safety Act record of who installed what.",
    },
    note: "Targets are for the 2027 pilot.",
  },

  suppliers: {
    eyebrow: "SUPPLIERS AND SUBCONTRACTORS · FREE",
    id: "suppliers",
    title: "Suppliers: proof that wins work and gets paid",
    body: "Your proven delivery travels with you. Small and new firms compete on proof, not size or company age.",
    button: { label: "Join free", href: "#contact" },
    steps: [
      {
        ix: "01",
        title: "Join",
        body: "Sign up free with a company number. Registry checks verify your Profile.",
      },
      {
        ix: "02",
        title: "Prove",
        body: "Add evidence against each promise and ask for independent confirmation.",
      },
      {
        ix: "03",
        title: "Get paid",
        body: "Invoices match confirmed delivery. A held invoice says exactly what is missing.",
      },
      {
        ix: "04",
        title: "Score",
        body: "Confirmed delivery builds your Trust Score: full score within 3 closed commitments.",
      },
      {
        ix: "05",
        title: "Get funded",
        body: "Give chosen lenders a full view, compare offers, get paid in days.",
      },
    ],
    tiles: [
      // countUp: only true percentages animate. "Half" and "£0" stay static.
      {
        value: "95%",
        accent: true,
        countUp: true,
        body: "of verified invoices paid within 30 days",
      },
      {
        value: "Half",
        accent: false,
        countUp: false,
        body: "the compliance admin: fill it in once, share with every buyer",
      },
      {
        value: "£0",
        accent: false,
        countUp: false,
        body: "to be on the record, always",
      },
    ],
    note: "Percentages are 2027 pilot targets.",
  },

  lenders: {
    eyebrow: "LENDERS, INSURERS AND SURETIES",
    id: "lenders",
    title: "Lenders: facts no credit file holds",
    body: "Whether work was delivered, who confirmed it, and whether the buyer cleared the invoice. Fund work that is already proven, decide in hours on one consented data pack, and watch the record live.",
    neutral: {
      title: "A neutral source",
      body: "Standara is paid per data pack or licence, whether or not you lend. You set your own criteria; Standara never lends and never decides who gets credit.",
    },
    steps: [
      {
        num: "01",
        title: "Criteria",
        body: "You set your own lending criteria.",
      },
      {
        num: "02",
        title: "Consent",
        body: "The supplier grants a full view until repaid, 12 months at most.",
      },
      {
        num: "03",
        title: "Check",
        body: "Verified invoices, Trust Score, financial standing and disputes in one data pack.",
      },
      {
        num: "04",
        title: "Fund",
        body: "Price the advance and pay the supplier. Repaid when the buyer pays.",
      },
      {
        num: "05",
        title: "Monitor",
        body: "Live alerts on disputes, expired certificates and bank changes.",
      },
    ],
  },

  contact: {
    eyebrow: "JOIN THE 2027 PILOT",
    id: "contact",
    title: "Let's prove delivery together",
    body: "Starting with council housing repairs: no service invoice paid until delivery is proven, and a partner lender funding council-confirmed invoices within 48 hours.",
    meta: {
      company: "Standara Ltd",
      location: "Birmingham, UK",
    },
    form: {
      name: "Full name",
      organisation: "Organisation",
      email: "Work email",
      role: "I am a...",
      message: "What would you like to prove?",
      submit: "Register interest",
      submitting: "Sending…",
      privacy: "We will only use your details to contact you about Standara.",
      honeypot: "Leave this field empty",
      roles: ROLES,
      errors: {
        name: "Enter your full name.",
        organisation: "Enter your organisation.",
        email: "Enter a valid work email, like name@organisation.gov.uk.",
        role: "Choose the option that best describes you.",
        message: "Keep this under 2,000 characters.",
        rateLimited: "Too many attempts. Please wait a minute and try again.",
        generic: "Something went wrong sending your details. Please try again.",
        summary: "Please fix the highlighted fields.",
      },
    },
    thanks: {
      title: "Thanks — you're on the list.",
      body: "We will be in touch about the 2027 pilot.",
      again: "Send another",
    },
  },
} as const;
