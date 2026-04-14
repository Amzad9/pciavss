import Link from "next/link";
import type { Metadata } from "next";
import { GallerySwiper } from "./GallerySwiper";
import { siteContact } from "../components/siteConfig";
import { portfolioGallerySlides } from "../lib/portfolioGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore PCI AVSS gallery examples for security and surveillance solutions, installs, and deployments.",
  alternates: { canonical: "/portfolio" },
};

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Visual Portfolio
            </p>
            <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              Security Install
              <br />
              Gallery
            </h1>
            <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Explore visuals that showcase system design, camera coverage, and
              real-world deployments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Schedule a Consultation
                <ArrowRightIcon />
              </Link>
              <a
                href={siteContact.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Call {siteContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <GallerySwiper slides={[...portfolioGallerySlides]} />
        </div>
      </section>
    </main>
  );
}

