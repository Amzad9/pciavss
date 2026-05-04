import Image from "next/image";
import { BellRing, ClipboardPenLine, Drill, ShieldCheck } from "lucide-react";
import { homeUnsplash } from "../lib/homeImages";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <>
     <section className="relative bg-white">
  <div className="container mx-auto px-6 py-16 md:py-24">
    <div className="max-w-[900px]">

      {/* Heading */}
      <h1 className="text-[38px] sm:text-[48px] md:text-[56px] font-extrabold leading-tight text-[#111111]">
        Security Camera & Access Control Installation in Orange County
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-[700px] text-[16px] sm:text-[18px] leading-7 text-[#4B5563]">
        Protect your business with professional surveillance systems installed fast—so you can monitor everything and stop problems before they happen.
      </p>

      {/* Bullet Points */}
      <ul className="mt-6 space-y-3">
        {[
          "Same-week installations available",
          "Remote access from your phone",
          "Built for warehouses, offices & job sites",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[16px] sm:text-[18px] text-[#374151]">
            <svg
              className="w-5 h-5 mt-1 text-[#DC2626]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        {/* Primary */}
        <a
          href="/contact"
          className="h-12 px-8 flex items-center justify-center text-sm font-semibold rounded-lg bg-[#DC2626] text-white hover:bg-[#B91C1C] transition"
        >
          Get Free Quote
        </a>

        {/* Secondary */}
        <a
          href="tel:18002995964"
          className="h-12 px-8 flex items-center justify-center text-sm font-semibold rounded-lg border border-[#111111] text-[#111111]"
        >
          Call or Text (800) 299-5964
        </a>
      </div>

      {/* Pricing Line */}
      <p className="mt-6 text-[14px] text-[#6B7280]">
        Camera systems starting at $1,299 • Mobile security trailers from $50/day
      </p>

    </div>
  </div>
</section>
      {/* Service tiles */}
      <section className="-mt-20 relative z-10 pb-10 sm:-mt-24 md:-mt-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "CUSTOM SECURITY DESIGN",
                subtitle: "Expert consultation & design",
                icon: ClipboardPenLine,
                image: homeUnsplash.serviceCards.designConsult,
                imageAlt:
                  "Professional security consultation and team collaboration in a modern office",
                bullets: ["Site walkthrough", "System layout", "Code-compliant plans"],
              },
              {
                title: "PROFESSIONAL INSTALLATION",
                subtitle: "Precision installation services",
                icon: Drill,
                image: homeUnsplash.serviceCards.installation,
                imageAlt:
                  "Engineer performing precision technical work and system installation",
                bullets: ["Clean wiring", "Hardware setup", "Testing & training"],
              },
              {
                title: "REMOTE MONITORING & ALERTS",
                subtitle: "Instant motion alerts",
                icon: BellRing,
                image: homeUnsplash.serviceCards.monitoring,
                imageAlt:
                  "Professional reviewing monitoring data and analytics at a workstation",
                bullets: ["Mobile access", "Event notifications", "Ongoing support"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[22px] bg-surface shadow-card ring-1 ring-black/10 dark:bg-surface"
                >
                  <div className="relative h-[180px]">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-black/55 ring-1 ring-white/20">
                      <Icon className="h-6 w-6 text-brand-gold-500" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[16px] font-extrabold uppercase tracking-wide text-black dark:text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-semibold text-muted">
                      {card.subtitle}
                    </p>
                    <ul className="mt-4 grid gap-2 text-[13px] font-medium text-black/80 dark:text-foreground/80">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
