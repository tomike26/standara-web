"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { leadSchema, type LeadField } from "@/lib/lead-schema";
import { sendLead } from "@/lib/leads";
import { rateLimit } from "@/lib/rate-limit";

export type RegisterInterestResult =
  | { ok: true }
  | {
      ok: false;
      error: "invalid" | "rate_limited" | "server";
      fieldErrors?: Partial<Record<LeadField, string>>;
    };

export async function registerInterest(
  input: unknown,
): Promise<RegisterInterestResult> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) return { ok: false, error: "rate_limited" };

  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error).fieldErrors as Partial<
      Record<LeadField, string[]>
    >;
    const fieldErrors: Partial<Record<LeadField, string>> = {};
    for (const [key, msgs] of Object.entries(flat) as [
      LeadField,
      string[] | undefined,
    ][]) {
      if (msgs?.[0]) fieldErrors[key] = msgs[0];
    }
    return { ok: false, error: "invalid", fieldErrors };
  }

  const { website, ...lead } = parsed.data;
  // Honeypot filled: pretend success so bots learn nothing.
  if (website) return { ok: true };

  try {
    await sendLead({ ...lead, receivedAt: new Date().toISOString() });
    return { ok: true };
  } catch (err) {
    console.error("[registerInterest] sendLead failed", err);
    return { ok: false, error: "server" };
  }
}
