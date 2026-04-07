import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Choose a security package for your home or business, including monitoring options and equipment bundles.",
  alternates: { canonical: "/packages" },
};

const packages = [
  {
    name: "Starter Security Package",
    monthly: 299,
    upfront: 598,
    image: "/packages/starter-package.png",
    features: [
      '1× "7 inch" Smart Touch Screen Security Panel',
      "2× Wireless Door/Window Sensors",
      "1× Motion Detector",
      "1× Indoor Camera",
      "1× Yard Sign",
    ],
  },
  {
    name: "Deluxe Security Package",
    monthly: 399,
    upfront: 698,
    image: "/packages/Deluxe.png",
    features: [
      '1× "7 inch" Smart Touch Screen Security Panel',
      "3× Wireless Door/Window Sensors",
      "1× Motion Detector",
      "1× Indoor Camera",
      "1× Outdoor Camera",
    ],
  },
  {
    name: "Ultimate Security Package",
    monthly: 499,
    upfront: 798,
    image: "/packages/unlimited-package.png",
    features: [
      '1× "7 inch" Smart Touch Screen Security Panel',
      "5× Wireless Door/Window Sensors",
      "2× Motion Detectors",
      "1× Indoor Camera",
      "1× Outdoor Camera",
    ],
  },
  {
    name: "Elite Security Package",
    monthly: 649,
    upfront: 850,
    image: "/packages/Elite-Package.png",
    features: [
      '1× "7 inch" Smart Touch Screen Security Panel',
      "5× Wireless Door/Window Sensors",
      "2× Motion Detectors",
      "1× Glass Break Detector",
      "2× Outdoor Cameras",
    ],
  },
  {
    name: "Video Security Package",
    monthly: 899,
    upfront: 1099,
    image: "/packages/Video-package.png",
    features: [
      "8× HD Night Vision Cameras",
      "1× 8‑Channel Recorder (NVR/DVR)",
      "Remote viewing on mobile devices",
      "Storage + playback",
    ],
  },
  {
    name: "All In One Security Package",
    monthly: 999,
    upfront: 1299,
    image: "/packages/All-in-one-package.png",
    features: [
      '1× "7 inch" Smart Touch Screen Security Panel',
      "3× Wireless Door/Window Sensors",
      "1× Motion Detector",
      "4× HD Night Vision Cameras",
      "1× Recorder (NVR/DVR) + remote viewing",
    ],
  },
] as const;

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,122,31,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Packages
            </p>
            <h2 className="font-display mt-5 text-5xl font-bold uppercase leading-[1.1] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl">
              Total Security for Your
              <br />
              Home or Business
            </h2>
            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Choose a security package and we&apos;ll customize it to match your
              property, entrances, and monitoring preferences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,122,31,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Get a Free Site Survey
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6">
          {packages.map((p, idx) => {
            const imageFirst = idx % 2 === 0;
            return (
              <article
                key={p.name}
                className="grid gap-6 rounded-2xl border border-white/10 bg-brand-ink-900/70 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] md:grid-cols-2 md:items-center"
              >
                <div className={imageFirst ? "order-1" : "order-1 md:order-2"}>
                  <div className="relative aspect-6/4 overflow-hidden rounded-xl bg-brand-ink-950 ring-1 ring-white/10">
                    <Image
                      src={p.image}
                      alt={`${p.name} preview`}
                      fill
                      className="object-cover p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,122,31,0.16)_0%,rgba(0,0,0,0)_55%)]" />
                  </div>
                </div>

                <div className={imageFirst ? "order-2" : "order-2 md:order-1"}>
                  <h3 className="text-3xl font-extrabold text-brand-gold-500">
                    {p.name}
                  </h3>
                  <div className="mt-2">
                    <div className="text-[15px] font-bold text-white">
                      ${p.monthly}
                      <span className="ml-2 text-[13px] font-semibold text-white/60">
                        – monitoring service
                      </span>
                    </div>
                    <div className="mt-1 text-[15px] font-extrabold text-white">
                      ${p.upfront}
                      <span className="ml-2 text-[13px] font-semibold text-white/60">
                        – upfront equipment
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-[14px] text-white/75">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_10px_22px_rgba(244,122,31,0.20)] transition hover:brightness-105"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          <section className="grid gap-6 rounded-2xl border border-white/10 bg-brand-ink-900/70 p-6 text-center shadow-[0_18px_44px_rgba(0,0,0,0.30)] md:grid-cols-12 md:items-center">
            <div className="col-span-12">
              <h2 className="text-3xl font-extrabold text-white">
                Pro Business Security Package
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/70">
                Need a larger, multi-device setup for commercial locations? We
                build packages that combine surveillance, alarms, access control,
                and monitoring to match your operations.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-black shadow-[0_10px_22px_rgba(244,122,31,0.20)] transition hover:brightness-105"
                >
                  Talk to a Specialist
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
