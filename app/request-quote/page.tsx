import type { Metadata } from "next";
import Link from "next/link";
import { RequestQuoteForm } from "./RequestQuoteForm";
import { siteContact } from "../components/siteConfig";

export const metadata: Metadata = {
  title: "Request Quote",
  description:
    "Request a security quote for cameras, monitoring, alarms, access control, and mobile surveillance solutions in Southern California.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Request Quote
            </p>
            <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl">
              Get A Free
              <br />
              Site Survey
            </h1>
            <p className="mt-5 max-w-[52rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Tell us what you want to protect and we&apos;ll recommend a practical
              setup for cameras, monitoring, alarms, and access control.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={siteContact.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Call {siteContact.phone}
              </a>
              <a
                href={`mailto:${siteContact.emailShowroom}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Email {siteContact.emailShowroom}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] border border-white/10 bg-brand-ink-900/70 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] lg:col-span-7 sm:p-8">
            <RequestQuoteForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/10 bg-brand-ink-950 p-6 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
                What Happens Next
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-white/75">
                {[
                  "We review your details and confirm the scope.",
                  "We recommend camera counts, placements, and monitoring options.",
                  "You get a clear quote and timeline for install.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-gold-500">
                  Prefer browsing first?
                </p>
                <p className="mt-3 text-base leading-7 text-white/70">
                  See available services, then request a quote when ready.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                  >
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

