import "server-only";
import type { Lead } from "./lead-schema";

/**
 * Deliver a "Register interest" lead.
 *
 * TODO: connect a real destination before launch. The intended hook is a
 * webhook URL read from the LEAD_WEBHOOK_URL environment variable, e.g.:
 *
 *   const url = process.env.LEAD_WEBHOOK_URL;
 *   if (url) {
 *     const res = await fetch(url, {
 *       method: "POST",
 *       headers: { "content-type": "application/json" },
 *       body: JSON.stringify(lead),
 *     });
 *     if (!res.ok) throw new Error(`Lead webhook failed: ${res.status}`);
 *   }
 *
 * Until then this is a stub: it logs the lead in development and warns
 * (without personal data) in production.
 */
export async function sendLead(
  lead: Lead & { receivedAt: string },
): Promise<void> {
  const webhookConfigured = Boolean(process.env.LEAD_WEBHOOK_URL);

  if (process.env.NODE_ENV !== "production") {
    console.info("[sendLead] stub — lead received:", lead, {
      webhookConfigured,
    });
    return;
  }

  console.warn(
    "[sendLead] stub — lead was NOT delivered. Connect LEAD_WEBHOOK_URL in lib/leads.ts.",
  );
}
