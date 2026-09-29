import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { StaticImageData } from 'next/image';

import {
  Building,
  Camera,
  CheckCircle,
  Clock,
  Cloud,
  FileText,
  Factory,
  Handshake,
  HardHat,
  Home,
  MonitorPlay,
  ParkingSquare,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";
import MobileTrailer from "./../../assets/mobile/image (31).png";
import Trailer from "./../../assets/mobile/image (32).png";
import Solar from "./../../assets/mobile/image (33).png";
import Battery from "./../../assets/mobile/Battery.png";

import Card1 from "./../../assets/mobile/image (34).png"
import Card2 from "./../../assets/mobile/image (35).png"
import Card3 from "./../../assets/mobile/image (36).png"
import Card4 from "./../../assets/mobile/image (37).png"


import SolarAssisted from "./../../assets/mobile/clean_Solar-Assisted.png";
import Generator from "./../../assets/mobile/clean_Generator.png";
import Celluler from "./../../assets/mobile/clean_Cellular.png";
import Deterrence from "./../../assets/mobile/visible.png";
import Banner from "./../../assets/mobile/image.png";

const accent = "#7c1a1a";
const trailerHeroImage =
  "/service/imgi_3_b586a8_40fb2b8a168344d8abdd26b4ce669570mv2-rcvlhvzs4u2uh2zuclnbwqwqsgldydpmc7pzlsxkz2.jpg";

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

const featureCards = [
  {
    icon: Camera,
    title: "Elevated Positions",
    body: "Get superior visibility with high masts. ",
  },
  {
    icon: MonitorPlay,
    title: "Visible Deterrence",
    body: "Mast lighting and clear signage.",
  },
  {
    icon: Cloud,
    title: "Flexible Power",
    body: "Solar, generator, and battery options.",
  },
  {
    icon: Zap,
    title: "Low Profile Options",
    body: "Adaptable deployment for local context.",
  },
  {
    icon: Truck,
    title: "Cellular Backhaul",
    body: "Reach feeds over cellular networks.",
  },
  {
    icon: ShieldCheck,
    title: "Remote Viewing",
    body: "Access live feeds from anywhere.",
  },
  {
    icon: Clock,
    title: "Temporary Sites",
    body: "Rapid coverage where wiring isn't practical.",
  },
  {
    icon: Users,
    title: "Moveable Units",
    body: "Coordination between construction jobsites.",
  },
];

const trailerUseCases = [
  {
    title: "Construction Sites",
    body: "Protect tools, materials, and partially completed work as the project evolves.",
    icon: HardHat,
  },
  {
    title: "Event Areas",
    body: "Add mobile coverage around entrances, equipment zones, and parking areas.",
    icon: ShoppingCart,
  },
  {
    title: "Laydown Yards",
    body: "Deter break-ins, after-hours loitering, and theft in open lots and overflow areas.",
    icon: ParkingSquare,
  },
  {
    title: "Parking Lots",
    body: "Monitor entrances, parking areas, vehicles, and after-hours activity across large commercial lots.",
    icon: Home,
  },
  {
    title: "Temporary Storage",
    body: "Track activity around fleet storage, containers, and high-value materials.",
    icon: Factory,
  },
  {
    title: "Festivals",
    body: "Provide temporary surveillance around entrances, parking areas, equipment zones, vendor areas, and high-traffic locations during festivals and special events.",
    icon: Users,
  },
  {
    title: "Remote Sites",
    body: "Monitor remote properties, equipment, and job sites where permanent power, internet, or fixed security infrastructure may not be available.",
    icon: Cloud,
  },
];

const trailerConfigurations = [
  {
    title: "Mobile Trailer (Mast Up)",
    body: "Elevated camera positioning provides greater visibility and broader surveillance coverage across large properties and job sites.",
    image: MobileTrailer,
  },
  {
    title: "Trailer (Mast Down)",
    body: "The lowered mast configuration makes the trailer easier to transport, position, and relocate between job sites.",
    image: Trailer,
  },
  {
    title: "Solar Panel Close-up",
    body: "Solar-assisted charging helps keep the trailer operating at remote locations where permanent power may not be available.",
    image: Solar,
  },
  {
    title: "Battery Rack",
    body: "Integrated battery storage provides backup power and supports continued trailer operation when solar or external power is limited.",
    image: Battery,
  },
];
const hardwareConfigurations = [
  {
    title: "Solar-Assisted Power setup",
    body: "Best for off-grid sites where battery backup and solar charging are the priority.",
    image: SolarAssisted,
  },
  {
    title: "Generator Bypass panel",
    body: "Combines solar, battery, and shore power so the trailer can adapt to changing conditions.",
    image: Generator,
  },
  {
    title: "Cellular Modem/Router",
    body: "Provides cellular connectivity for remote camera viewing, alerts, system communication, and monitoring when wired internet is unavailable.",
    image: Celluler,
  },
  {
    title: "Visible Deterrence kit (Mast Light, Sign)",
    body: "High-visibility mast lighting and security signage help deter theft, trespassing, vandalism, and after-hours activity.",
    image: Deterrence,
  },
];

const deploymentSteps = [
  {
    icon: Search,
    title: "Site Walkthrough",
    body: "We review access points, risk areas, and where a trailer will do the most good.",
  },
  {
    icon: FileText,
    title: "System Design",
    body: "We plan camera coverage, power, connectivity, and notification workflow.",
  },
  {
    icon: Wrench,
    title: "Rapid Deployment",
    body: "We configure the unit for your site and verify everything is working before handoff.",
  },
  {
    icon: Handshake,
    title: "Deployment & Handover",
    body: "We position, test, and verify the trailer before reviewing system operation and remote access with your team.",
  },
];

const whyChoose = [
  {
    title: "Flexible Rental Options",
    body: "Choose the rental duration that fits your project needs—from daily to long-term.",
  },
  {
    title: "Daily Rentals",
    body: "Perfect for short-term events, pop-up sites, or immediate temporary needs.",
  },
  {
    title: "Weekly Rentals",
    body: "Ideal for projects lasting a week or more, offering cost-effective short-term coverage.",
  },
  {
    title: "Monthly Rentals",
    body: "Great for extended projects, seasonal needs, or ongoing site monitoring.",
  },
  {
    title: "Long-Term Projects",
    body: "Flexible solutions for multi-month or year-long deployments with dedicated support.",
  },
  {
    title: "Purchase Options Available",
    body: "For permanent installations, we offer straightforward purchase options with full ownership.",
  },
];


const serviceCards = [
  {
    id: 1,
    title: "Equipment Assessment",
    description: "State-of-the-art security equipment tailored to your site",
    image: Card1,
    icon: "🔧"
  },
  {
    id: 2,
    title: "Site Survey",
    description: "Comprehensive evaluation of your temporary location",
    image: Card2,
    icon: "📋"
  },
  {
    id: 1,
    title: "Equipment Assessment",
    description: "State-of-the-art security equipment tailored to your site",
    image: Card3,
    icon: "🔧"
  },
  {
    id: 2,
    title: "Site Survey",
    description: "Comprehensive evaluation of your temporary location",
    image: Card4,
    icon: "📋"
  }

];

const relatedServices = [
  { label: "Security Cameras", img: "/related-services/security-camera.png", href: "/services/security-cameras" },
  { label: "Access Control", img: "/related-services/access-control.png", href: "/services/access-control" },
  { label: "Alarm Systems", img: "/related-services/video-monitoring.png", href: "/services/alarm-system" },
  { label: "Mobile Security Trailers", img: "/related-services/mobile-security-trailer.png", href: "/services/mobile-security-trailers" },
  { label: "Structured Wiring", img: "/related-services/structured-wiring.png", href: "/services/structured-wiring-and-prewire" },
];

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <CardShell className="flex min-h-47.5 flex-col items-center justify-start px-5 py-6 text-center">
      <Icon className="h-10 w-10 shrink-0" style={{ color: accent }} strokeWidth={1.8} />
      <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight text-black">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-black/75">{body}</p>
    </CardShell>
  );
}

function UseCaseCard({
  icon: Icon,
  title,
  body,
  className
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  className?: string
}) {
  return (
    <CardShell className={`${className ?? ""} flex min-h-47.5 flex-col items-center justify-start px-5 py-6 text-center`}>
      <Icon className="h-10 w-10 shrink-0" style={{ color: accent }} strokeWidth={1.8} />
      <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight text-black">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-black/75">{body}</p>
    </CardShell>
  );
}

function SystemTile({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string | StaticImageData;
}) {
  return (
    <CardShell className="overflow-hidden">
      <div className="flex w-full  h-76 items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={600}
          className="h-full w-full aspect-square"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="border-t border-neutral-200 px-5 py-4 text-center">
        <h3 className="text-base font-extrabold uppercase leading-tight text-black sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-black/75">{body}</p>
      </div>
    </CardShell>
  );
}

function RelatedTile({
  img,
  label,
  href,
}: {
  img: string;
  label: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-2xl shadow-md min-h-[160px] flex flex-col justify-end transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Image
          src={img}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <p className="relative z-10 px-3 pb-4 text-sm font-extrabold uppercase leading-tight text-white drop-shadow">
          {label}
        </p>
      </div>
    </Link>
  );
}

export function MobileSecurityTrailersPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative flex min-h-200 items-center overflow-hidden bg-black">
        <div className="container relative mx-auto min-h-200">
          <div className="grid grid-cols-1 min-h-200 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <div className="order-2 lg:order-1">
              <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold uppercase leading-[0.92] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-5xl lg:text-6xl">
                Commercial Mobile Security Trailer Rentals in Orange County
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                Protect construction sites, commercial properties, equipment yards, and remote job sites with rapid-deployment
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                surveillance trailers featuring solar power, remote monitoring, and visible deterrence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative order-1 lg:order-2 aspect-video lg:aspect-auto lg:h-full">
              <Image
                src={Banner}
                alt="Mobile security trailer deployment"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

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
              4.9 Google Rating (150+ reviews)
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Truck className="h-8 w-8" style={{ color: accent }} aria-hidden />
            <p className="mt-2 text-sm font-extrabold text-black">
              Mobile deployment support
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

      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>RAPID COVERAGE & DEPLOYMENT</SectionHeading>
          <SectionIntro>
            Built for temporary, remote, and fast-moving security needs where permanent infrastructure is not practical.
          </SectionIntro>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                body={card.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          {/* <SectionHeading>Trailer Configurations We Install</SectionHeading>
          <SectionIntro>
            We configure each trailer for the jobsite, power profile, and response workflow the project actually needs.
          </SectionIntro> */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trailerConfigurations.map((item) => (
              <SystemTile
                key={item.title}
                title={item.title}
                body={item.body}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>SPECIFIC MOBILE HARDWARE & FEATURES</SectionHeading>
          <SectionIntro>&nbsp;
          </SectionIntro>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hardwareConfigurations.map((item) => (
              <SystemTile
                key={item.title}
                title={item.title}
                body={item.body}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Every Site Requires the Right Setup</SectionHeading>
          <SectionIntro>
            We evaluate the site, coverage goals, and operating constraints before selecting the trailer setup.
          </SectionIntro>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Camera Coverage",
                body: "We position cameras to watch access points, equipment, and high-risk perimeter areas.",
              },
              {
                title: "Power Planning",
                body: "Solar, battery, and shore-power configurations are chosen around the site’s realities.",
              },
              {
                title: "Connectivity",
                body: "Cellular backhaul and failover planning keep the trailer reachable even when IT is limited.",
              },
              {
                title: "Alert Response",
                body: "Visible deterrence, live monitoring, and audio options can be tuned to the workflow.",
              },
            ].map((item) => (
              <CardShell key={item.title} className="flex min-h-[190px] flex-col items-center justify-start px-5 py-6 text-center">
                <Truck className="h-10 w-10 shrink-0" style={{ color: accent }} strokeWidth={1.8} />
                <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/75">{item.body}</p>
              </CardShell>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>What We Configure On Every Trailer</SectionHeading>
          <SectionIntro>
            We plan the trailer around your access points, power constraints, and how your team needs to respond to events.
          </SectionIntro>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <CardShell className="p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-black">
                Camera Coverage
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/75">
                We position cameras to cover entrances, materials, equipment, and the areas most likely to need review.
              </p>
            </CardShell>
            <CardShell className="p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-black">
                Power &amp; Backhaul
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/75">
                Solar-assisted, battery-backed, and shore-power options can be combined with cellular connectivity as needed.
              </p>
            </CardShell>
            <CardShell className="p-6">
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-black">
                Alerts &amp; Response
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/75">
                We can configure visible deterrence, live monitoring, and audio options so the trailer is ready to act, not just record.
              </p>
            </CardShell>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-100 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Our Deployment Process</SectionHeading>

          <div className="mt-12 grid gap-10 lg:grid-cols-4">
            {deploymentSteps.map((step) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#7c1a1a] bg-white">
                  <step.icon className="h-8 w-8" style={{ color: accent }} strokeWidth={1.8} />
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
      </section>

      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>WHY BUSINESSES CHOOSE AVSS TRAILERS</SectionHeading>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {whyChoose.map((item) => (
              <CardShell key={item.title} className="p-5 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] max-w-sm">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-white"
                    style={{ backgroundColor: accent }}
                    aria-hidden
                  >
                    <CheckCircle className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold uppercase leading-tight text-black sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/75 sm:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </CardShell>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-ink-900 w-full py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Background decorative elements — matches site footer vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(220,38,38,0.12)_0%,rgba(0,0,0,0)_52%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:sticky lg:top-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Secure Your{" "}
                <span className="text-[#F4B942]">Site?</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 font-medium">
                Request a Mobile Trailer Site Survey Assessment.
              </p>

              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
                Request a walkthrough and we'll recommend equipment, placement,
                and monitoring options aligned with your security needs.
              </p>

              <button className="mt-4 bg-[#F4B942] hover:bg-[#E5A832] text-black font-semibold text-lg px-10 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-[#F4B942]/30 transform hover:scale-105">
                Contact Us
              </button>
            </div>

            {/* Right Column - 4 Image Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-[#F4B942]/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                  </div>


                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Ideal For</SectionHeading>
          <SectionIntro>
            Mobile trailer systems fit locations where protection needs to move, scale, or start quickly.
          </SectionIntro>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trailerUseCases.slice(0, 4).map((item) => (
              <UseCaseCard className="bg-white" key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
          <div className="mx-auto mt-4 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trailerUseCases.slice(4).map((item) => (
              <UseCaseCard className="bg-white" key={item.title} icon={item.icon} title={item.title} body={item.body} />
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
                img={item.img}
                label={item.label}
                href={item.href}
              />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
