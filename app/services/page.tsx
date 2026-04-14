import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { serviceCards, serviceSectionId } from "../lib/serviceCards";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial security cameras, video monitoring, mobile security trailers, alarm systems, access control, and commercial audio in Southern California.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.16)_0%,rgba(0,0,0,0)_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Security &amp; Surveillance
            </p>
            <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
              Safeguard Your
              <br />
              Investments With PCI AVSS
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Our team is committed to helping protect your home or business
              with modern audio-video security solutions—no matter your
              location. Explore our services and request a free site survey to
              find the right system for your needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Get a Free Site Survey
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Security cameras, monitoring, trailers, alarms, access control,
              and commercial audio designed to work together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                id={serviceSectionId(card.title)}
                className="scroll-mt-[calc(5rem+1px)] overflow-hidden rounded-2xl border border-white/10 bg-brand-ink-900/70 shadow-[0_18px_44px_rgba(0,0,0,0.30)] lg:scroll-mt-32"
              >
                <div className="relative h-[150px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-brand-gold-500">
                    {card.title}
                  </div>
                  <p className="mt-3 text-base leading-7 text-white/70">
                    {card.body}
                  </p>
                  {card.href ? (
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-white/80 transition hover:text-white"
                    >
                      Learn More →
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b from-brand-ink-950 to-black px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-7 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
              Smarter Business Security &amp; Access Control
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Multiple locations. One view.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Scale and safeguard operations across locations with a single
              dashboard for visibility, permissions, and monitoring.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(220,38,38,0.28)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
              >
                Talk to a Specialist
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
              >
                Serving Orange, Los Angeles & Riverside
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-brand-ink-950 p-6 shadow-inner lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
              Commercial Audio &amp; Support
            </p>
            <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight text-white">
              Clear communication for your property
            </h3>
            <p className="mt-4 text-base leading-7 text-white/70">
              Pair your security system with dependable on-site and remote support,
              including audio integration and practical day-to-day operations guidance.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
            >
              Schedule a Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
