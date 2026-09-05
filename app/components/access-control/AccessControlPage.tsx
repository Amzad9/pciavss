import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Building,
  Camera,
  CheckCircle,
  Clock,
  Cloud,
  Cable,
  Factory,
  FileText,
  Handshake,
  HardHat,
  Home,
  MonitorPlay,
  ParkingSquare,
  Search,
  ShieldCheck,
  ShoppingCart,
  ExternalLink,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";
import Strikes from './../../assets/access-control/image (26).png'
import Reader from './../../assets/access-control/image (27).png'
import Maglocks from './../../assets/access-control/image (28).png'
import Banner from './../../assets/access-control/banner.png'
import Mobile from './../../assets/access-control/image (29).png'
import Specialized from './../../assets/access-control/image (38).png'
import HighTrafic from './../../assets/access-control/image (31).png'
import Magnetic from './../../assets/access-control/image (32).png'
import Code from './../../assets/access-control/image (41).png'
import Banner2 from './../../assets/access-control/banner2.png'
import UnifiAccess from './../../assets/access-control/image (20).png'
import UnifiGate from './../../assets/access-control/image (25).png'
import BrivoCommercial from './../../assets/access-control/image (22).png'
import LinearCommercial from './../../assets/access-control/image (23).png'
const accent = "#7c1a1a";
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-center text-2xl font-extrabold uppercase leading-tight tracking-wide text-black sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-black/70 sm:text-base">
      {children}
    </p>
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
      className={`rounded-2xl border border-neutral-300 bg-gray-100 hover:shadow-[0_1px_0_rgba(255,255,255,0.6),0_20px_36px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function AccessLineIcon({
  variant,
}: {
  variant: "reader" | "strike" | "maglock" | "mobile";
}) {
  const stroke = accent;
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 3.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (variant === "reader") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
        <rect x="56" y="14" width="48" height="88" rx="10" {...common} />
        <rect x="66" y="24" width="28" height="26" rx="4" {...common} />
        <circle cx="70" cy="62" r="4" {...common} />
        <circle cx="82" cy="62" r="4" {...common} />
        <circle cx="94" cy="62" r="4" {...common} />
        <circle cx="70" cy="76" r="4" {...common} />
        <circle cx="82" cy="76" r="4" {...common} />
        <circle cx="94" cy="76" r="4" {...common} />
        <path d="M40 102h80" {...common} />
      </svg>
    );
  }

  if (variant === "strike") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
        <rect x="34" y="30" width="92" height="60" rx="6" {...common} />
        <rect x="48" y="40" width="64" height="40" rx="4" {...common} />
        <path d="M118 34 142 22v76l-24-12" {...common} />
        <path d="M12 60h22" {...common} />
        <path d="M128 60h20" {...common} />
      </svg>
    );
  }

  if (variant === "maglock") {
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
        <rect x="26" y="34" width="108" height="28" rx="6" {...common} />
        <rect x="44" y="68" width="72" height="14" rx="4" {...common} />
        <path d="M80 34v-14" {...common} />
        <path d="M70 80h20" {...common} />
        <path d="M30 48h12M118 48h12" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden>
      <rect x="58" y="10" width="44" height="100" rx="10" {...common} />
      <rect x="66" y="22" width="28" height="50" rx="4" {...common} />
      <circle cx="80" cy="88" r="5" {...common} />
      <path d="M40 102h80" {...common} />
      <path d="M48 18h8M104 18h8" {...common} />
    </svg>
  );
}

const featureCards = [
  {
    icon: FileText,
    title: "Replace Rekeying with Policy",
    body: "Cards, jobs, mobile credentials, and PIN readers reduce physical key spread.",
  },
  {
    icon: Search,
    title: "Audit Trails",
    body: "See who entered which door and when.",
  },
  {
    icon: Users,
    title: "Role-Based Onboarding",
    body: "Templates speed onboarding for similar door lists.",
  },
  {
    icon: Cloud,
    title: "Cloud-Managed Permissions",
    body: "Manage access remotely from anywhere.",
  },
  {
    icon: Clock,
    title: "Remote Lockouts & Schedules",
    body: "Remote lockouts, holiday schedules, and visitor passes.",
  },
  {
    icon: Handshake,
    title: "HR & Facilities Support",
    body: "Help teams respond quickly without site visits.",
  },
  {
    icon: ShieldCheck,
    title: "Directory Integration",
    body: "Integration-minded platforms can align with directory services.",
  },
  {
    icon: Wrench,
    title: "Hardware Selection",
    body: "Readers, strikes, and maglocks suited to various openings.",
  },
];

const hardwareCards = [
  {
    title: "RFID Card Readers",
    body: "Proximity, smart, and PIN readers for controlled entry points.",
    icon: Reader,
  },
  {
    title: "UniFi Gate Access",
    body: "Cloud-managed gate access with secure credential management, remote control, and event activity tracking.",
    icon: Strikes,
  },
  {
    title: "Schlage Wireless Locks",
    body: "Electronic wireless locks that provide controlled access without requiring traditional access-control wiring at every opening.",
    icon: Maglocks,
  },
  {
    title: "Alarm.Com Integrated Systems",
    body: "App-based control for readers, strikes, and maglocks.",
    icon: Mobile,
  },
];

const specificHardware = [
  {
    title: "HID Card Reader & Credentials",
    body: "We match credential type and mounting style to the opening.",
    image: Specialized
  },
  {
    title: "Electric Strikes",
    body: "Durable hardware built for busy entrances and exits.",
    image: HighTrafic

  },
  {
    title: "Magnetic Door Locks",
    body: "Strong holding power for glass doors and retrofit installs.",
    image: Magnetic

  },
  {
    title: "Door Release & Exit Devices",
    body: "We keep life-safety, egress, and compliance front and center.",
    image: Code
  },
];

const accessControlSystems = [
  {
    title: "Unifi Access Control",
    image: UnifiAccess,
  },
  {
    title: "Alarm.Com Access Control",
    image: UnifiGate,
  },
  {
    title: "Brivo Commercial Access Control",
    image: BrivoCommercial,
  },
  {
    title: "Linear Commercial Access Control Bundle",
    image: LinearCommercial,
  },
];

const trustedAccessControlBrands = [
  { name: "Brivo" },
  { name: "Alarm.com", href: "https://alarm.com/" },
  { name: "UniFi Access" },
  { name: "HID" },
  { name: "Linear" },
  { name: "Altronix" },
  { name: "Seco-Larm" },
  { name: "Schlage" },
  { name: "ASSA ABLOY" },
];

const processSteps = [
  {
    icon: Search,
    title: "Site Walkthrough",
    body: "Property layout and security goals evaluation.",
  },
  {
    icon: FileText,
    title: "System Design",
    body: "Door groups, credential types, and access schedules.",
  },
  {
    icon: Wrench,
    title: "Hardware Selection",
    body: "Readers, strikes, and maglocks matched to each opening.",
  },
  {
    icon: Cable,
    title: "Wiring Paths & Code Compliance Check",
    body: "We verify routing, power, and code-sensitive details before install.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    body: "Clean wiring, mounting, and complete setup.",
  },
  {
    icon: Handshake,
    title: "Training & Support",
    body: "We show your team how to use the system and manage permissions.",
  },
];

const whyChoose = [
  {
    title: "Professional Installation",
    body: "Professional installation, configuration, testing, and complete system setup.",
  },
  {
    title: "Clean Wiring",
    body: "Door hardware, power, and control wiring kept tidy and serviceable.",
  },
  {
    title: "Battery-Backed Egress",
    body: "Battery-supported options keep life-safety expectations in view.",
  },
  {
    title: "Remote Management",
    body: "Update permissions, schedules, and lockouts without a site visit.",
  },
  {
    title: "Training Support",
    body: "We show your team how to use the system.",
  },
  {
    title: "Code-Conscious Installs",
    body: "We align each install with the opening and the building’s rules.",
  },
];

const idealFor = [
  { label: "Warehouses", icon: Warehouse },
  { label: "Office Buildings", icon: Building },
  { label: "Construction Sites", icon: HardHat },
  { label: "Manufacturing Facilities", icon: Factory },
  { label: "Retail Stores", icon: ShoppingCart },
  { label: "Parking Lots", icon: ParkingSquare },
  { label: "Apartment Properties", icon: Home },
];

const relatedServices = [
  { label: "Security Cameras", icon: Camera, href: "/services/security-cameras" },
  { label: "Video Monitoring", icon: MonitorPlay, href: "/services/video-monitoring" },
  { label: "Mobile Security Trailers", icon: Truck, href: "/services/mobile-security-trailers" },
  { label: "Alarm System", icon: ShieldCheck, href: "/services/alarm-system" },
];

function SectionCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: typeof CheckCircle;
}) {
  return (
    <CardShell className="p-5 ">
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-white"
          style={{ backgroundColor: accent }}
          aria-hidden
        >
          <Icon className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div>
          <h3 className="text-lg font-extrabold uppercase leading-tight text-black sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-black/75 sm:text-[15px]">
            {body}
          </p>
        </div>
      </div>
    </CardShell>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof FileText;
  title: string;
  body: string;
}) {
  return (
    <CardShell className="flex min-h-[190px] flex-col items-center justify-start px-5 py-6 text-center">
      <Icon className="h-10 w-10 shrink-0" style={{ color: accent }} strokeWidth={1.8} />
      <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight text-black">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-black/75">
        {body}
      </p>
    </CardShell>
  );
}

function IdealTile({
  icon: Icon,
  label,
}: {
  icon: typeof Building;
  label: string;
}) {
  return (
    <CardShell className="flex flex-col items-center justify-center px-4 py-6 text-center">
      <Icon className="h-11 w-11" style={{ color: accent }} strokeWidth={1.8} />
      <p className="mt-4 text-base font-extrabold leading-tight text-black">
        {label}
      </p>
    </CardShell>
  );
}

function RelatedTile({
  icon: Icon,
  label,
  href,
  active = false,
}: {
  icon: typeof Camera;
  label: string;
  href: string;
  active?: boolean;
}) {
  const content = (
    <CardShell
      className={`flex min-h-[126px] flex-col items-center justify-center px-4 py-5 text-center transition ${active ? "bg-neutral-100" : "hover:bg-neutral-100"
        }`}
    >
      <Icon className="h-10 w-10" style={{ color: accent }} strokeWidth={1.8} />
      <p className="mt-3 text-base font-extrabold leading-tight text-black">
        {label}
      </p>
    </CardShell>
  );

  return active ? content : <Link href={href}>{content}</Link>;
}

function SystemTile({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) {
  return (
    <CardShell className="overflow-hidden">
      <div className="flex h-56 items-center justify-center bg-white p-5">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-contain"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="border-t border-neutral-200 px-5 py-4 text-center">
        <h3 className="text-base font-extrabold uppercase leading-tight text-black sm:text-lg">
          {title}
        </h3>
      </div>
    </CardShell>
  );
}

export function AccessControlPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative flex min-h-[470px] items-center overflow-hidden bg-black">
        <Image
          src={Banner}
          alt="Commercial access control installation"
          fill
          priority
          className="object-cover object-center opacity-85"
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.78)_0%,rgba(8,8,8,0.58)_52%,rgba(8,8,8,0.35)_100%)]" /> */}

        <div className="container relative z-10 mx-auto px-6 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Commercial access control systems
            </p>
            <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold uppercase leading-[0.92] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-5xl lg:text-6xl">
              Commercial Access Control Installation in Orange County
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Secure your business with professionally installed keyless entry, card access, mobile credentials, and cloud-managed access control systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Talk to a Specialist
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
              <div className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-gold-500" />
                Access logs and permissions
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-gold-500" />
                Readers, strikes, and maglocks
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-gold-500" />
                Commercial installation support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <p className="mt-2 text-sm font-extrabold text-black">
              Serving Southern California
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-3xl text-[#F5B301]" aria-hidden>
              ★★★★★
            </span>
            <p className="mt-2 text-sm font-extrabold text-black">
              5.0 Google Rating
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Wrench className="h-8 w-8" style={{ color: accent }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              20+ Years of Experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="h-8 w-8" style={{ color: accent }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              Licensed &amp; Insured
            </p>
          </div>

          <div className="col-span-2 flex flex-col items-center text-center sm:col-span-1">
            <Clock className="h-8 w-8" style={{ color: accent }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              Fast Response Times
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Commercial Access Control Features</SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title} body={card.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Hardware we install */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Professional Access Control Hardware for Every Door
          </SectionHeading>
          <SectionIntro>
            We install commercial-grade readers, electric strikes, magnetic locks, controllers, and mobile credentials designed for offices, warehouses, retail spaces, apartment communities, and industrial facilities.
          </SectionIntro>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hardwareCards.map((card) => (
              <CardShell key={card.title} className="overflow-hidden">
                <div className="flex h-64 items-center justify-center bg-[#f5f5f5]">
                  <Image src={card.icon} alt="" objectFit="contain" className="h-auto w-fill" />
                </div>
                <div className="border-t border-neutral-200 px-5 py-5 text-center">
                  <h3 className="text-lg font-extrabold uppercase leading-tight text-black">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">{card.body}</p>
                </div>
              </CardShell>
            ))}
          </div>
        </div>
      </section>

      {/* Access control systems */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Access Control Systems We Work With</SectionHeading>
          <SectionIntro>
            We install and support the commercial platforms that fit your site, security goals, and budget.
          </SectionIntro>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessControlSystems.map((item) => (
              <SystemTile key={item.title} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Specific hardware */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Every Opening Requires the Right Hardware</SectionHeading>
          <SectionIntro>
            Every door is different. We evaluate your existing doors, traffic flow, fire code requirements, and security objectives before selecting the appropriate hardware.
          </SectionIntro>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specificHardware.map((item) => (
              <CardShell key={item.title} className="flex flex-col items-center px-0 py-0 text-center">
                <div className="flex h-52 w-full items-center justify-center rounded-xl bg-neutral-100">
                  <Image src={item.image} width={200} height={200} alt="" className="w-full h-full" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold uppercase leading-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/75">{item.body}</p>
              </CardShell>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Our Installation Process</SectionHeading>

          <div className="mt-12">
            <div className="grid gap-10 lg:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto bg-white flex h-16 w-16 relative z-10 items-center justify-center rounded-full border-2 border-[#7c1a1a] ">
                    <step.icon className="h-8 w-8 " style={{ color: accent }} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold uppercase leading-tight text-black">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-black/75">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Why Businesses Choose AVSS</SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <SectionCard key={item.title} title={item.title} body={item.body} icon={CheckCircle} />
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Ideal For</SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {idealFor.slice(0, 4).map((item) => (
              <IdealTile key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
          <div className="mx-auto mt-4 grid max-w-4xl gap-4 sm:grid-cols-3">
            {idealFor.slice(4).map((item) => (
              <IdealTile key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />

      {/* Related services */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Related Services</SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {relatedServices.map((item) => (
              <RelatedTile
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
            <Link href="/services" className="sm:col-span-2 lg:col-span-1">
              <CardShell className="flex min-h-[126px] flex-col items-center justify-center px-4 py-5 text-center transition hover:bg-neutral-100">
                <span className="text-4xl leading-none text-[#7c1a1a]" aria-hidden>
                  •••
                </span>
                <p className="mt-3 text-base font-extrabold leading-tight text-black">
                  View all services
                </p>
              </CardShell>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted brands */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Trusted Access Control Brands</SectionHeading>
          <SectionIntro>
            We work with the commercial brands teams specify most often for dependable entry control, readers, controllers, and locks.
          </SectionIntro>

          <div className="mt-12 flex flex-wrap gap-4">
            {trustedAccessControlBrands.map((brand, index) => {
              const isLast = index === trustedAccessControlBrands.length - 1;
              const tile = (
                <CardShell className="flex min-h-[108px] flex-col justify-center px-5 py-5 transition hover:bg-white">
                  <div className="flex items-center justify-center gap-3 text-center">
                    <h3 className="text-center text-lg font-extrabold leading-tight text-black sm:text-xl">
                      {brand.name}
                    </h3>
                    {brand.href ? (
                      <ExternalLink className="h-4 w-4 shrink-0 text-black/40" aria-hidden />
                    ) : null}
                  </div>
                </CardShell>
              );

              return brand.href ? (
                <a
                  key={brand.name}
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit ${brand.name}`}
                  className={`w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] ${isLast ? "xl:mx-auto" : ""
                    }`}
                >
                  {tile}
                </a>
              ) : (
                <div
                  key={brand.name}
                  className={`w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] ${isLast ? "xl:mx-auto" : ""
                    }`}
                >
                  {tile}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-[#111827]">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-16">
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Get Protected Today
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
              Don&apos;t wait until something happens—secure your business now
              with a clean, code-conscious access control system.
            </p>
            <Link
              href="/request-quote"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-8 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:text-base"
            >
              Request Quote
            </Link>
            <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-white/85 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-gold-500" />
                Get a Free Quote
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-gold-500" />
                Call or Text (800) 299-5964
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Serving Orange County &amp; Southern California
            </p>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[360px]">
            <Image
              src={Banner2}
              alt="Commercial property with access control and camera coverage"
              fill
              className="object-cover object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#111827] via-[#111827]/40 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
