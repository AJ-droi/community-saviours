"use client";

import { useRef, useState } from "react";
import { contact } from "@/content/site";
import { validateContact, type ContactErrors, type ContactField } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";
const f = contact.form;

// Posts to /api/contact, which emails the message with Resend (see README).
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function focusFirstError(errs: ContactErrors) {
    const first = Object.keys(errs)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  function clearError(e: React.FormEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name as ContactField;
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const check = validateContact(values);
    if (!check.ok) {
      setErrors(check.errors);
      setStatus("idle");
      focusFirstError(check.errors);
      return;
    }
    setErrors({});
    setServerMessage("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors);
          focusFirstError(json.errors);
        }
        setServerMessage(json.message || f.error);
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setServerMessage(f.error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form form-done" role="status">
        <span className="form-check" aria-hidden="true">✓</span>
        <p>{f.confirmation}</p>
      </div>
    );
  }

  const cls = (n: ContactField) => `field${errors[n] ? " invalid" : ""}`;
  const a11y = (n: ContactField) => ({
    "aria-invalid": errors[n] ? true : undefined,
    "aria-describedby": errors[n] ? `${n}-error` : undefined,
  });
  const err = (n: ContactField) =>
    errors[n] ? <span className="field-error" id={`${n}-error`}>{errors[n]}</span> : null;

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} onInput={clearError} noValidate aria-label={f.title}>
      <div className="field-row">
        <label className={cls("firstName")}>
          <span>Full name *</span>
          <input name="firstName" type="text" autoComplete="name" placeholder="Full name" required {...a11y("firstName")} />
          {err("firstName")}
        </label>
        <label className={cls("email")}>
          <span>Email address *</span>
          <input name="email" type="email" autoComplete="email" placeholder="Email address" required {...a11y("email")} />
          {err("email")}
        </label>
      </div>
      <div className="field-row">
        <label className={cls("organisation")}>
          <span>Organisation (optional)</span>
          <input name="organisation" type="text" autoComplete="organization" placeholder="Organisation" {...a11y("organisation")} />
          {err("organisation")}
        </label>
        <label className={cls("interest")}>
          <span>Subject</span>
          <select name="interest" defaultValue="" {...a11y("interest")}>
            <option value="">Choose a subject…</option>
            {f.interests.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
          </select>
          {err("interest")}
        </label>
      </div>
      <label className={cls("message")}>
        <span>Message *</span>
        <textarea name="message" rows={5} placeholder="Message" required maxLength={5000} {...a11y("message")} />
        {err("message")}
      </label>
      <input className="hp" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-actions">
        {status === "error" && serverMessage ? (
          <p className="form-error" role="alert">{serverMessage}</p>
        ) : (
          <p className="form-privacy">
            {f.privacyNote} See our <a href="/privacy">Privacy Policy</a>.
          </p>
        )}
        <button className="form-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : status === "error" ? "Try again" : f.button}
        </button>
      </div>
    </form>
  );
}
