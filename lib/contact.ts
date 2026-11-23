// Contact form validation, shared by the form (components/ContactForm.tsx) and the
// API route (app/api/contact/route.ts) so both check the same rules.

import { contact } from "@/content/site";

export type ContactField = "firstName" | "email" | "organisation" | "interest" | "message";

export type ContactInput = {
  firstName: string;
  email: string;
  organisation: string;
  /** The option's `value` from content/site.ts, or "" if none chosen. */
  interest: string;
  message: string;
  /** Spam trap. People never see this field; bots fill it in. */
  company_website: string;
};

export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactResult = { ok: true; data: ContactInput } | { ok: false; errors: ContactErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export function interestLabel(value: string) {
  return contact.form.interests.find((i) => i.value === value)?.label ?? "";
}

export function validateContact(raw: unknown): ContactResult {
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const data: ContactInput = {
    firstName: str(input.firstName, 200),
    email: str(input.email, 200).toLowerCase(),
    organisation: str(input.organisation, 200),
    interest: str(input.interest, 100),
    message: str(input.message, 6000),
    company_website: str(input.company_website, 200),
  };

  const errors: ContactErrors = {};
  if (data.firstName.length < 2) errors.firstName = "Please enter your name.";
  if (!data.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(data.email)) errors.email = "That email address doesn't look right.";
  if (data.interest && !interestLabel(data.interest)) errors.interest = "Please choose an option from the list.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  else if (data.message.length > 5000) errors.message = "Please keep your message under 5,000 characters.";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
