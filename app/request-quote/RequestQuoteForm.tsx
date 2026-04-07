"use client";

import { useMemo, useState } from "react";
import { siteContact } from "../components/siteConfig";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  city: string;
  message: string;
  website: string; // honeypot
};

const defaultState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "Security Cameras",
  city: "",
  message: "",
  website: "",
};

function InputShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/70">
        {label}
      </span>
      {children}
    </label>
  );
}

function fieldClasses() {
  return "h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-brand-gold-500/70 focus:ring-2 focus:ring-brand-gold-500/25";
}

export function RequestQuoteForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => {
    return Boolean(form.fullName.trim() && form.email.trim());
  }, [form.fullName, form.email]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    if (form.website.trim()) {
      setStatus("success");
      setForm(defaultState);
      return;
    }

    setError("");

    const lines = [
      `Name: ${form.fullName.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      form.company.trim() ? `Company: ${form.company.trim()}` : null,
      `Service: ${form.service}`,
      form.city.trim() ? `City: ${form.city.trim()}` : null,
      form.message.trim() ? `\nMessage:\n${form.message.trim()}` : null,
    ].filter(Boolean) as string[];

    const subject = encodeURIComponent(
      `Quote request — ${form.fullName.trim()}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    const to = siteContact.emailShowroom;
    const href = `mailto:${to}?subject=${subject}&body=${body}`;

    try {
      window.location.href = href;
    } catch {
      setStatus("error");
      setError("Could not open email. Please call us instead.");
      return;
    }

    setStatus("success");
    setForm(defaultState);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <InputShell label="Full Name *">
          <input
            value={form.fullName}
            onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
            className={fieldClasses()}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </InputShell>
        <InputShell label="Email *">
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className={fieldClasses()}
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </InputShell>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <InputShell label="Phone">
          <input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className={fieldClasses()}
            placeholder="(800) 299-5964"
            autoComplete="tel"
            inputMode="tel"
          />
        </InputShell>
        <InputShell label="Company">
          <input
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            className={fieldClasses()}
            placeholder="Business name (optional)"
            autoComplete="organization"
          />
        </InputShell>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <InputShell label="Service">
          <select
            value={form.service}
            onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
            className={fieldClasses()}
          >
            {[
              "Security Cameras",
              "Video Monitoring",
              "Visual Monitoring",
              "Alarm / Intrusion",
              "Access Control",
              "Mobile Surveillance Trailer",
              "Networking / Low Voltage",
              "Commercial Audio",
            ].map((item) => (
              <option key={item} value={item} className="bg-brand-ink-950 text-white">
                {item}
              </option>
            ))}
          </select>
        </InputShell>
        <InputShell label="City">
          <input
            value={form.city}
            onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
            className={fieldClasses()}
            placeholder="Anaheim, CA"
            autoComplete="address-level2"
          />
        </InputShell>
      </div>

      <InputShell label="Message">
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className={`${fieldClasses()} min-h-[120px] py-3`}
          placeholder="Tell us what you want to protect, entrances, camera count, monitoring needs, etc."
        />
      </InputShell>

      {/* Honeypot */}
      <div className="hidden">
        <label>
          Website
          <input
            value={form.website}
            onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
          />
        </label>
      </div>

      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-8 text-[12px] font-black uppercase tracking-[0.16em] text-black shadow-[0_0_16px_rgba(244,122,31,0.30)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Request Quote
        </button>

        {status === "success" ? (
          <p className="text-sm font-semibold text-white/75">
            Thanks! Your email app should open with a draft to us—send it when
            you&apos;re ready. We&apos;ll reply within 1 business day.
          </p>
        ) : status === "error" ? (
          <p className="text-sm font-semibold text-red-300">
            {error || "Could not submit. Try again."}
          </p>
        ) : (
          <p className="text-sm font-semibold text-white/55">
            Or call us for faster help.
          </p>
        )}
      </div>
    </form>
  );
}

