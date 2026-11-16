import { z } from "zod";
import { ROLES, who } from "@/content/who";

const e = who.contact.form.errors;

/** Shared by the client form (React Hook Form) and the server action. */
export const leadSchema = z.object({
  name: z.string().trim().min(1, e.name).max(200, e.name),
  organisation: z
    .string()
    .trim()
    .min(1, e.organisation)
    .max(200, e.organisation),
  email: z.string().trim().max(254, e.email).pipe(z.email(e.email)),
  role: z.enum(ROLES, { error: e.role }),
  message: z.string().trim().max(2000, e.message).optional().default(""),
  /** Honeypot: real people never see or fill this. */
  website: z.string().optional().default(""),
});

export type LeadFormValues = z.input<typeof leadSchema>;
export type LeadOutput = z.output<typeof leadSchema>;
export type Lead = Omit<LeadOutput, "website">;
export type LeadField = keyof LeadFormValues;
