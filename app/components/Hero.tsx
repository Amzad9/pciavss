import Image from "next/image";
import { BellRing, ClipboardPenLine, Drill, ShieldCheck } from "lucide-react";
import { homeUnsplash } from "../lib/homeImages";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink-950">
        <div className="absolute inset-0">
          <Image
            src={homeUnsplash.hero}
            alt="Commercial security cameras and surveillance installation in a building interior"
            fill
            priority
            className="object-cover opacity-95"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70" />
        </div>

      

        <div className="container relative mx-auto px-6 pb-26 pt-12 md:pb-36 md:pt-20">
          <div className="max-w-[760px]">
            <h1 className="font-display text-balance text-[44px] font-extrabold leading-[0.95] text-white sm:text-[54px] md:text-[64px]">
              PROTECTING BUSINESSES,
              <br />
              PROPERTIES &amp; PEOPLE
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-white/80 sm:text-[18px]">
              From advanced video surveillance to complete access control, we
              design and install dependable security systems backed by ongoing
              support.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/contact" className="h-12 px-8 text-[12px]">
                CONTACT US NOW
              </PrimaryButton>
              <PrimaryButton
                href="/services"
                variant="outline"
                className="h-12 px-8 text-[12px]"
              >
                VIEW SURVEILLANCE SYSTEMS
              </PrimaryButton>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/35 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <ShieldCheck className="h-7 w-7 text-brand-gold-500" />
              <div className="text-left">
                <div className="text-[22px] font-extrabold leading-none text-white">
                  21+ Years Protecting
                </div>
                <div className="mt-1 text-[14px] font-semibold text-white/75">
                  Businesses Daily
                </div>
              </div>
            </div>
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
