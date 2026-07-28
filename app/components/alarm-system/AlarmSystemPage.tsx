import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  Camera,
  CheckCircle,
  ChevronRight,
  MonitorPlay,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Truck,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import Banner from "./../../assets/alarm/alarm.png";
import MobileTrailer from "./../../assets/mobile/Mobiletrailer.png";
import Solar from "./../../assets/mobile/Solar.png";
import Battery from "./../../assets/mobile/Battery.png";
import Cellular from "./../../assets/mobile/clean_Cellular.png";

const accent = "#b52322";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-center text-2xl font-extrabold uppercase leading-tight tracking-wide text-black sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-[#f2f2f2] shadow-[0_1px_0_rgba(255,255,255,0.75),0_18px_32px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function DetectionIcon({ variant }: { variant: "door" | "motion" | "glass" }) {
  const strokeProps = {
    fill: "none",
    stroke: "#111111",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (variant === "door") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-20" aria-hidden>
        <path d="M38 20h56v84H38z" {...strokeProps} />
        <path d="M94 30h22v74H94" {...strokeProps} />
        <path d="M54 46h16v18H54z" {...strokeProps} />
        <path d="M116 58c9 5 14 11 14 22" {...strokeProps} />
        <path d="M120 47c16 9 24 20 24 33" {...strokeProps} />
      </svg>
    );
  }

  if (variant === "motion") {
    return (
      <svg viewBox="0 0 160 120" className="h-20 w-20" aria-hidden>
        <circle cx="82" cy="22" r="10" {...strokeProps} />
        <path d="M80 34 72 48l-12 6" {...strokeProps} />
        <path d="M82 36 96 50l10 18" {...strokeProps} />
        <path d="M72 48 60 66l-8 24" {...strokeProps} />
        <path d="M93 51l-2 16 12 18" {...strokeProps} />
        <path d="M54 100c8-9 18-14 32-14 13 0 24 4 34 12" {...strokeProps} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-20 w-20" aria-hidden>
      <rect x="38" y="18" width="84" height="84" {...strokeProps} />
      <path d="m52 30 18 18-8 8 18 18-8 8" {...strokeProps} />
      <path d="m100 30-18 18 8 8-18 18 8 8" {...strokeProps} />
      <path d="M80 22v76" {...strokeProps} />
      <path d="M42 64h76" {...strokeProps} />
    </svg>
  );
}

function SectionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <CardShell className={`p-5 sm:p-6 ${className}`}>{children}</CardShell>;
}

function RiskCard({
  title,
  body,
  variant,
}: {
  title: string;
  body: string;
  variant: "door" | "motion" | "glass";
}) {
  return (
    <SectionCard className="min-h-[250px] text-center">
      <div className="flex flex-col items-center">
        <DetectionIcon variant={variant} />
        <h3 className="mt-4 text-xl font-extrabold uppercase leading-tight text-black">
          {title}
        </h3>
        <p className="mt-3 max-w-[20rem] text-sm leading-6 text-black/80">{body}</p>
      </div>
    </SectionCard>
  );
}

function OptionCard({ title, body }: { title: string; body: string }) {
  return (
    <SectionCard className="min-h-[102px] text-center">
      <h3 className="text-lg font-extrabold uppercase leading-tight text-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/80">{body}</p>
    </SectionCard>
  );
}

function RelatedCard({
  icon: Icon,
  label,
  href,
  showArrow = true,
}: {
  icon?: LucideIcon;
  label: string;
  href?: string;
  showArrow?: boolean;
}) {
  const content = (
    <CardShell className="flex min-h-[140px] flex-col items-center justify-center px-4 py-5 text-center transition hover:bg-neutral-100">
      {Icon ? (
        <Icon className="h-12 w-12" style={{ color: accent }} strokeWidth={1.7} />
      ) : (
        <span className="text-4xl leading-none text-black" aria-hidden>
          •••
        </span>
      )}
      <p className="mt-4 flex items-center gap-1 text-base font-extrabold leading-tight text-black">
        <span>{label}</span>
        {showArrow ? <ChevronRight className="h-4 w-4" aria-hidden /> : null}
      </p>
    </CardShell>
  );

  if (!href) return content;

  return <Link href={href}>{content}</Link>;
}

function AppMockup({
  title,
  body,
  accentLabel = "",
}: {
  title: string;
  body: string;
  accentLabel?: string;
}) {
  return (
    <div className="rounded-[1.8rem] border border-black/10 bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
      <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#ffffff_0%,#f4f4f4_100%)] px-4 py-5 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#e7f7e9] text-[#13823e]">
          <CheckCircle className="h-8 w-8" strokeWidth={1.8} />
        </div>
        <p className="text-sm font-bold uppercase tracking-wide text-black/55">{accentLabel}</p>
        <h4 className="mt-1 text-xl font-extrabold uppercase tracking-tight text-black">{title}</h4>
        <p className="mt-3 text-xs leading-5 text-black/70">{body}</p>
      </div>
    </div>
  );
}

function SouthernCaliforniaMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-[#eef3f5] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <svg viewBox="0 0 600 380" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#a8d8f0" />
            <stop offset="100%" stopColor="#82c5e8" />
          </linearGradient>
        </defs>
        <rect width="600" height="380" rx="24" fill="#f7f8f8" />
        <path
          d="M18 252c60-28 88-59 116-79 29-22 53-39 98-49 24-5 53-7 75-15 28-10 47-30 68-48 28-24 67-31 117-24 37 5 64 17 92 34v261H18z"
          fill="url(#water)"
        />
        <path
          d="M32 34h194M244 34h104M378 34h190M33 98h170M224 102h110M365 102h202M34 171h178M235 173h96M360 170h204M28 245h181M228 245h94M364 245h204M32 318h166M220 318h106M360 318h205"
          stroke="#d8dee2"
          strokeWidth="2"
          opacity="0.8"
        />
        <path
          d="M94 86h27l17 11 19-3 21 13 18-6 25 10 24-5 27 18 18-5 26 6 27-2 11 12"
          fill="none"
          stroke="#afc3cb"
          strokeWidth="2"
        />
        <path
          d="M26 194c22 2 42 6 58 14 22 11 48 21 80 30 25 8 54 15 76 28 28 16 67 28 111 35 38 7 85 10 121 23 30 11 59 20 86 26"
          fill="none"
          stroke="#afc3cb"
          strokeWidth="2"
        />
        <circle cx="200" cy="154" r="14" fill="#ffffff" stroke="#b9cbd2" />
        <circle cx="132" cy="208" r="13" fill="#ffffff" stroke="#b9cbd2" />
        <circle cx="340" cy="214" r="13" fill="#ffffff" stroke="#b9cbd2" />
        <text x="82" y="83" fontSize="20" fontWeight="700" fill="#1a2a32">
          Los Angeles
        </text>
        <text x="196" y="165" fontSize="18" fontWeight="700" fill="#1a2a32">
          Orange
        </text>
        <text x="430" y="67" fontSize="20" fontWeight="700" fill="#1a2a32">
          Riverside
        </text>
        <text x="396" y="169" fontSize="20" fontWeight="700" fill="#1a2a32">
          Riverside
        </text>
        <circle cx="172" cy="225" r="10" fill="#f4b942" opacity="0.85" />
        <circle cx="321" cy="250" r="10" fill="#f4b942" opacity="0.85" />
      </svg>
    </div>
  );
}

const detectionCards = [
  {
    variant: "door" as const,
    title: "Door Sensor",
    body: "Customized Detection Zones: door/window contacts, motion detectors, and glass-break sensors.",
  },
  {
    variant: "motion" as const,
    title: "Motion Sensor",
    body: "Smart Threat Identification: reduced false alarms while keeping real threats visible.",
  },
  {
    variant: "glass" as const,
    title: "Glass-break Sensors",
    body: "Optimized routines: zone documentation for stay/away routines and employee understanding.",
  },
];

const systemOptions = [
  {
    title: "Wireless Convenience",
    body: "Fast, cost-effective retrofits with clean installation paths.",
  },
  {
    title: "Hardwired Reliability",
    body: "Ideal for new builds and remodels. Core perimeter points are stable.",
  },
  {
    title: "Hybrid Coverage",
    body: "Use wireless where flexibility matters and hardwired where permanence matters.",
  },
];

const relatedServices = [
  { label: "Security Cameras", icon: Camera, href: "/services/security-cameras" },
  { label: "Video Monitoring", icon: MonitorPlay, href: "/services/video-monitoring" },
  { label: "Mobile Security Trailers", icon: Truck, href: "/services/mobile-security-trailers" },
  { label: "Access Control", icon: ShieldCheck, href: "/services/access-control" },
  { label: "View all services", icon: Smartphone, href: "/services" },
  { label: "View all services", href: "/services" },
];

export function AlarmSystemPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-[#17243b]">
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Office building at dusk"
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%),linear-gradient(180deg,rgba(8,12,19,0.14),rgba(8,12,19,0.76))]" />

        <div className="container relative mx-auto px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/70">
              Alarm System Services
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold uppercase leading-[0.98] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
              Alarm System: smart alarms with wireless and hardwired options for 24/7 threat
              detection.
            </h1>
            <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center rounded-xl border border-[#7c1a1a] bg-[#c12f2c] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(193,47,44,0.28)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Get a Free Site Survey
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/5 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Detection TUNED to your risks</SectionHeading>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {detectionCards.map((card) => (
              <RiskCard
                key={card.title}
                variant={card.variant}
                title={card.title}
                body={card.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Flexible System Options</SectionHeading>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {systemOptions.map((item) => (
              <OptionCard key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-4 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Related Services</SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item, index) => (
              <RelatedCard
                key={`${item.label}-${index}`}
                icon={item.icon}
                label={item.label}
                href={item.href}
                showArrow={item.label !== "View all services"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Monitoring and Mobile Control</SectionHeading>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <CardShell className="overflow-hidden p-0">
                <div className="grid gap-4 p-4 sm:grid-cols-12">
                  <div className="relative col-span-12 overflow-hidden rounded-2xl bg-[#10151f]">
                    <Image
                      src={Banner}
                      alt="Alarm monitoring office"
                      className="h-full w-full object-cover opacity-60"
                      width={1200}
                      height={900}
                    />
                   
                    
                  </div>
                </div>
              </CardShell>
            </div>

            <div className="space-y-5">
              <p className="text-3xl font-extrabold uppercase leading-none tracking-tight text-black sm:text-4xl">
                Professional Monitoring
              </p>
              <p className="text-base leading-7 text-black/75 sm:text-lg">
                Signal routing for fast central station dispatch on all events, including burglary,
                panic, and environmental conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-base font-extrabold uppercase">Mobile control & visibility</p>
                    <p className="mt-1 text-sm leading-6 text-black/70">
                      User-level permissions for arming, disarming, push history, and reminders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <Wifi className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-base font-extrabold uppercase">Always-connected alerts</p>
                    <p className="mt-1 text-sm leading-6 text-black/70">
                      Redundant monitoring keeps your site visible even when network conditions
                      change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-2 sm:px-8">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <SouthernCaliforniaMap />
            <div className="space-y-4">
              <SectionHeading>Serving Southern California</SectionHeading>
              <p className="mx-auto max-w-xl text-base leading-7 text-black/75 sm:text-lg">
                Request a walkthrough and we’ll recommend equipment, placement, and monitoring
                options aligned with your goals.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center rounded-xl border border-[#7c1a1a] bg-[#c12f2c] px-7 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(193,47,44,0.28)] transition hover:brightness-105 sm:text-base"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-[#1f242b] p-6 text-center text-white shadow-[0_18px_32px_rgba(0,0,0,0.14)] sm:p-8">
            <p className="text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
              Get Protected Today
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Don’t wait until something happens — secure your business now.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#7c1a1a] bg-[#c12f2c] px-6 py-3 text-sm font-extrabold text-white transition hover:brightness-105"
              >
                <span className="grid h-5 w-5 place-items-center rounded bg-white/15">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                Get a Free Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                Call or Text (800) 299-5964
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
