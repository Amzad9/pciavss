import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Area",
  description:
    "PCI AVSS serves Anaheim and Southern California with security cameras, alarms, access control, and mobile monitoring solutions.",
  alternates: { canonical: "/area" },
};

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,122,31,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Area
            </p>
            <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl">
              Anaheim &amp;
              <br />
              Orange County, CA
            </h1>
            <p className="mt-5 max-w-[52rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              PCI AVSS is based in Anaheim, California. We support local
              installations and can also provide remote monitoring solutions for
              multi‑site and distributed properties.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,122,31,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Request Quote
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-brand-ink-950 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
              <div className="border-b border-white/10 px-6 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
                  Address
                </p>
                <h2 className="font-display mt-2 text-3xl font-extrabold leading-[0.95] text-white sm:text-4xl">
                  1034 N. Tustin Ave
                </h2>
                <p className="mt-3 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                  Anaheim, CA 92807
                </p>
              </div>

              <div className="h-[320px] w-full sm:h-[380px]">
                <iframe
                  title="PCI AVSS map"
                  src="https://www.google.com/maps?q=1034%20N%20Tustin%20Ave%20Anaheim%2C%20CA%2092807&z=15&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[24px] border border-white/10 bg-brand-ink-950 p-6 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
                What We Support
              </p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-white/75">
                {[
                  "On-site security camera installation and system configuration.",
                  "Access control and alarm / intrusion protection planning.",
                  "Remote video monitoring options for multi-site coverage.",
                  "Mobile security trailer deployments for temporary sites.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/blog"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
              >
                Read the Blog
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
