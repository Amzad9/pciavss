import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteContact } from "../components/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PCI AVSS—trusted since 2003 for security cameras, alarms, access control, and mobile monitoring solutions.",
  alternates: { canonical: "/about" },
};

const aboutCards = [
  {
    title: "Security Cameras & Monitoring",
    body: "HD surveillance systems with remote access, event alerts, and monitoring options that scale with your property.",
    icon: <CompassIcon />,
  },
  {
    title: "Alarm & Intrusion Systems",
    body: "Detection and response for doors, glass break, motion, and perimeter protection—configured for your risk areas.",
    icon: <SparkIcon />,
  },
  {
    title: "Access Control & Keyless Entry",
    body: "Modern access control with clean installs, role-based permissions, and secure entry for employees and tenants.",
    icon: <ShieldIcon />,
  },
];

const differenceCards = [
  {
    title: "Mobile Surveillance Trailers",
    body: "Rapid deployment for sites, events, and remote locations that need coverage fast.",
    image: "/service/image-51.png",
    alt: "Mobile surveillance trailer",
  },
  {
    title: "Enterprise Video Dashboards",
    body: "Centralized visibility across multiple properties with organized camera groups and views.",
    image: "/service/Video-Monitoring.jpg",
    alt: "Video monitoring dashboard",
  },
  {
    title: "Commercial Audio Integration",
    body: "Audio solutions designed for business environments with clean wiring and setup.",
    image: "/service/image-50.png",
    alt: "Commercial audio integration",
  },
  {
    title: "Networking / Low Voltage",
    body: "Structured cabling, network readiness, and low-voltage infrastructure that supports your system.",
    image: "/service/image-49.png",
    alt: "Networking and low voltage wiring",
  },
  {
    title: "Visual Monitoring",
    body: "Verification and response workflows that help reduce false alarms and improve outcomes.",
    image: "/service/Visual-Monitoring.jpg",
    alt: "Visual monitoring",
  },
];

const processSteps = [
  {
    title: "Step 1: Listen",
    body: "We start by understanding what you’re protecting, your pain points, and how your property operates day-to-day.",
  },
  {
    title: "Step 2: Design",
    body: "We design a system that fits your entrances, risk areas, and budget—then confirm equipment and installation plan.",
  },
  {
    title: "Step 3: Install & Support",
    body: "We complete a clean install, test the system, train your team, and stay available for ongoing support.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative bg-brand-ink-900 px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="absolute inset-0">
          <Image
            src="/abouts/banner.png"
            alt=""
            fill
            priority
            className="object-cover opacity-95"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

        <div className="container mx-auto w-full">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Providing expert commercial security solutions, installations, and monitoring services across Southern California since 2003.
            </p>

            <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
              From Cameras To Access Control,
              <br />
              Your Safety Starts Here
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              For more than two decades, PCI Audio Video Security Solutions has
              helped organizations strengthen safety with advanced systems and
              professional installations. From HD surveillance to mobile
              trailers and access control, we provide technology that works
              where it matters most.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/35 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold-500" aria-hidden="true" />
              <div className="text-left">
                <div className="text-[22px] font-extrabold leading-none text-white">
                  21+ Years Of Experience
                </div>
                <div className="mt-1 text-[14px] font-semibold text-white/75">
                  Trusted since 2003
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,122,31,0.30)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
              >
                Request Quote
              </Link>
              <Link
                href="/portfolio"
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 pt-10 sm:px-8 sm:pt-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              What We Do
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Commercial security solutions designed around your property,
              people, and operations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-brand-steel-300">{card.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/70">
                      {card.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

      
        </div>
      </section>

      <section className="bg-linear-to-b from-brand-ink-800 to-brand-ink-950 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="grid gap-6 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-7">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-[0.95] text-white sm:text-4xl">
                Our Approach Is Simple
              </h2>
              <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
                Listen to your needs, design a system that fits, and stand
                behind our work with ongoing support.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,122,31,0.28)] transition hover:brightness-105 sm:w-fit"
                >
                  Get a Free Site Survey
                </Link>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 shadow-inner lg:col-span-7 lg:h-auto">
              <Image
                src="/service/Security-Cameras.jpg"
                alt="Security camera system installation"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-2xl font-bold leading-none text-white sm:text-3xl lg:text-4xl">
              More Solutions We Provide
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              From mobile deployments to enterprise dashboards—build a complete
              security stack that works together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {differenceCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-brand-ink-900/70 p-3 shadow-[0_12px_26px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-40 overflow-hidden rounded-xl border border-white/15">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <h3 className="text-md font-black uppercase leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b from-brand-ink-950 to-black px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Our Process
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A clear workflow keeps planning and execution organized from
              walkthrough to support.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {processSteps.map((step) => (
              <details
                key={step.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-black text-white sm:text-xl">
                        {step.title}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-white/80 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-base leading-7 text-white/70">
                  {step.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
      

          <div className="grid gap-6 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold leading-[0.95] text-white sm:text-4xl">
                Better yet, Call or Message Us
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Contact PCI AVSS to discuss your property, priorities, and next
                steps.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,122,31,0.28)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                >
                  Contact Us
                </Link>
                <a
                  href={siteContact.phoneHref}
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-brand-ink-950 p-5 shadow-inner lg:col-span-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,122,31,0.20)_0%,rgba(0,0,0,0)_60%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold-500">
                  Office
                </p>
                <p className="mt-2 text-lg font-black text-white">PCI AVSS</p>
                <p className="mt-2 text-base leading-7 text-white/70">
                  1034 N. Tustin Ave, Anaheim, CA 92807
                </p>
                <p className="mt-4 text-base leading-7 text-white/70">
                  (800) 299-5964
                </p>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  Share your property details and what you want to protect.
                  We&apos;ll reply with a recommended setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/15 bg-white/5">
      {children}
    </span>
  );
}

function CompassIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.2 13 13l-3.8 1.8L11 11z" />
      </svg>
    </IconFrame>
  );
}

function SparkIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2v6M12 16v6M4 12h6M14 12h6" />
        <path d="M6.2 6.2 10 10M14 14l3.8 3.8M17.8 6.2 14 10M10 14l-3.8 3.8" />
      </svg>
    </IconFrame>
  );
}

function ShieldIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 20 7v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
        <path d="M9.3 12.2 11 14l3.8-4.4" />
      </svg>
    </IconFrame>
  );
}
