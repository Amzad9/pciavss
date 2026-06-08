import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Car,
  Cloud,
  Clock,
  Moon,
  Search,
  ShieldCheck,
  Smartphone,
  Sun,
  Timer,
  Video,
  Wrench,
  FileText,
  Handshake,
} from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";

const maroon = "#7c1a1a";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-black sm:text-3xl">
      {children}
    </h2>
  );
}

const features = [
  { icon: Video, label: "4K Ultra HD Video" },
  { icon: Moon, label: "Color Night Vision" },
  { icon: Smartphone, label: "Remote Mobile Access" },
  { icon: Bell, label: "Motion Detection Alerts" },
  { icon: Clock, label: "24/7 Recording Options" },
  { icon: Sun, label: "Weather-Resistant Cameras" },
  { icon: Car, label: "AI Human & Vehicle Detection" },
  { icon: Cloud, label: "Cloud & Local Storage Options" },
];

const cameraTypes = [
  {
    title: "Turret Camera",
    description: "Ideal for offices, hallways, and warehouses",
    image: "/service/Security-Cameras.jpg",
  },
  {
    title: "Bullet Camera",
    description: "Great for perimeter protection and parking lots",
    image: "/service/security.png",
  },
  {
    title: "PTZ Camera",
    description: "Pan, tilt, and zoom for large commercial properties",
    image: "/service/Video-Monitoring.jpg",
  },
  {
    title: "License Plate Camera",
    description: "Capture vehicle activity at entrances and exits",
    image: "/service/Visual-Monitoring.jpg",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Site Walkthrough",
    description:
      "We evaluate your property for security system placement. Our projects are handled by experienced residential and commercial security technicians.",
  },
  {
    icon: FileText,
    title: "System Design",
    description:
      "We recommend equipment placement, recording, and viewing options tailored to your needs.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Clean wiring, professional mounting, and complete console setup.",
  },
  {
    icon: Handshake,
    title: "Training & Support",
    description:
      "We show you how to use the system and provide technical assistance to ensure better performance and security.",
  },
];

const whyChoose = [
  "Professional Commercial Installation",
  "Clean Organized Wiring",
  "Fast Turnaround Times",
  "Remote Viewing Setup Included",
  "Ongoing Support & Maintenance",
];

const idealFor = [
  { label: "Warehouses", icon: "warehouse" },
  { label: "Office Buildings", icon: "office" },
  { label: "Construction Sites", icon: "construction" },
  { label: "Manufacturing Facilities", icon: "factory" },
  { label: "Retail Stores", icon: "retail" },
  { label: "Parking Lots", icon: "parking" },
  { label: "Apartment Properties", icon: "apartment" },
];

const galleryImages = [
  { src: "/camera installation.jpg", alt: "Security camera mounted on brick wall" },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Warehouse aisle surveillance coverage",
  },
  { src: "/REMOTE.png", alt: "Monitoring station with live camera feeds" },
  { src: "/70439 (1).jpg", alt: "Professional cabling and installation" },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    alt: "Night vision parking lot coverage",
  },
  { src: "/service/security.png", alt: "Mobile app remote camera access" },
];

function IdealIcon({ type }: { type: string }) {
  const props = {
    className: "h-10 w-10",
    style: { color: maroon },
    strokeWidth: 1.5,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "warehouse":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <path d="M6 22 24 10l18 12v16H6V22Z" />
          <path d="M18 38V26h12v12" />
          <path d="M14 26h4M30 26h4" />
        </svg>
      );
    case "office":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <rect x="14" y="8" width="20" height="32" rx="1" />
          <path d="M20 14h2M26 14h2M20 20h2M26 20h2M20 26h2M26 26h2M20 32h2M26 32h2" />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <path d="M8 38h32" />
          <path d="m16 38 8-20 8 20" />
          <path d="M24 18V8l6 6" />
          <rect x="30" y="28" width="8" height="6" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <path d="M8 38V18l12-8v28" />
          <path d="M20 38V14l12-6v30" />
          <path d="M32 38V20l8-4v22" />
          <path d="M14 10v4M18 12v4M34 16v4M38 18v4" />
        </svg>
      );
    case "retail":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <path d="M10 18 14 8h20l4 10" />
          <rect x="8" y="18" width="32" height="20" rx="1" />
          <path d="M20 38V26h8v12" />
        </svg>
      );
    case "parking":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <path d="M10 38V18h12l6 6h10v14" />
          <path d="M10 18h12v6" />
          <circle cx="18" cy="34" r="2" />
          <circle cx="34" cy="34" r="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
          <rect x="10" y="16" width="14" height="22" />
          <rect x="24" y="10" width="14" height="28" />
          <path d="M14 22h2M14 28h2M28 18h2M28 24h2M28 30h2" />
        </svg>
      );
  }
}

export function AccessControlPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[480px]">
        <Image
          src="/70439 (1).jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(10,20,30,0.65)]" />
        <div className="absolute right-4 top-4 hidden w-48 sm:block md:right-8 md:top-8 md:w-56 lg:w-64">
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa8?auto=format&fit=crop&w=600&q=80"
            alt=""
            width={256}
            height={256}
            className="h-auto w-full object-contain drop-shadow-lg"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-16 text-center">
          <h1 className="mx-auto max-w-4xl text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
          AVSS COMMERCIAL ACCESS
CONTROL SYSTEMS:
SECURING ENTRY IN SOUTHERN CALIFORNIA
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white sm:text-lg">
          Keyless entry with cloud-managed permissiens and app-based control.
          </p>
          <Link
            href="/contact"
            className="mt-8 mx-3 inline-flex items-center justify-center rounded-md bg-linear-to-t from-[#8B1A1A] to-[#B22222] px-8 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:brightness-110 sm:text-base"
          >
            Get a Free Site Survey
          </Link>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-linear-to-t from-[#8B1A1A] to-[#B22222] px-8 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:brightness-110 sm:text-base"
          >
            Taik to a Specialist
          </Link>
        </div>
      </section>

      {/* Trust banner */}
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
              ★
            </span>
            <p className="mt-2 text-sm font-extrabold text-black">
              4.9 ★★★★★ 4.99
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Wrench className="h-8 w-8" style={{ color: maroon }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              15 Years of Experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ShieldCheck
              className="h-8 w-8"
              style={{ color: maroon }}
              aria-hidden
            />
            <p className="mt-2 text-sm font-extrabold text-black">
              Licensed &amp; Insured
            </p>
          </div>

          <div className="col-span-2 flex flex-col items-center text-center sm:col-span-1">
            <Timer className="h-8 w-8" style={{ color: maroon }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              Fast Response Times
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white px-4 py-10 sm:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div
                key={`${img.alt}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="container mx-auto">
          <SectionHeading>Commercial Camera System Features</SectionHeading>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {features.map(({ icon: Icon, label }) => (
              <article
                key={label}
                className="flex flex-col items-center justify-center rounded-lg border border-neutral-400 bg-white px-4 py-8 text-center"
              >
                <Icon
                  className="h-10 w-10"
                  style={{ color: maroon }}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p
                  className="mt-4 text-sm font-extrabold sm:text-base"
                  style={{ color: maroon }}
                >
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Camera types */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="container mx-auto">
          <SectionHeading>Camera Types We Install</SectionHeading>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cameraTypes.map((camera) => (
              <article
                key={camera.title}
                className="overflow-hidden rounded-xl border border-neutral-300"
              >
                <div className="relative flex h-44 items-center justify-center bg-[#F5F5F5]">
                  <Image
                    src={camera.image}
                    alt={camera.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="border-t border-neutral-200 bg-white p-5">
                  <h3 className="text-base font-extrabold text-black">
                    {camera.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/80">
                    {camera.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="container mx-auto">
          <SectionHeading>Our Installation Process</SectionHeading>
          <div className="relative mt-12">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px lg:block"
              style={{ backgroundColor: maroon }}
              aria-hidden
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processSteps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="relative text-center">
                  <div
                    className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-2 bg-white"
                    style={{ borderColor: maroon }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: maroon }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-black">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/80">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose AVSS */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading>Why Businesses Choose AVSS</SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-[#F2F2F2] p-5"
              >
                <span
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: maroon }}
                  aria-hidden
                >
                  ✓
                </span>
                <p className="text-sm font-extrabold text-black sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-extrabold text-black sm:text-xl">
              Ready to Secure Your Business?
            </p>
            <p className="mt-2 text-base font-extrabold text-black sm:text-lg">
              Request a Commercial Security Assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
        <div className="container mx-auto">
          <SectionHeading>Ideal For</SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {idealFor.slice(0, 4).map((item) => (
              <article
                key={item.label}
                className="flex flex-col items-center rounded-xl bg-[#F2F2F2] px-4 py-8 text-center"
              >
                <IdealIcon type={item.icon} />
                <p className="mt-4 text-sm font-extrabold leading-snug text-black sm:text-base">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-4 grid max-w-3xl gap-4 sm:grid-cols-3">
            {idealFor.slice(4).map((item) => (
              <article
                key={item.label}
                className="flex flex-col items-center rounded-xl bg-[#F2F2F2] px-4 py-8 text-center"
              >
                <IdealIcon type={item.icon} />
                <p className="mt-4 text-sm font-extrabold leading-snug text-black sm:text-base">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-[#1a1d23]">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Secure Your Business?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
              We&apos;ll evaluate your property, recommend coverage areas, and
              provide a customized camera system proposal.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-lg bg-linear-to-t from-[#8B1A1A] to-[#B22222] px-8 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:brightness-110 sm:text-base"
            >
              Request a Commercial Security Assessment
            </Link>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt="Security consultant reviewing a commercial camera system proposal"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#1a1d23] via-[#1a1d23]/40 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
