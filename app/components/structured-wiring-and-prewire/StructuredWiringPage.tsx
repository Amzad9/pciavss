import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Camera,
  Check,
  ClipboardCheck,
  Cpu,
  DoorClosed,
  FileText,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Speaker,
  TrendingUp,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";
import { PreFooterCta } from "../PreFooterCta";
import Banner from './../../assets/structured/banner.png';
import CardLeft from './../../assets/structured/cardleft.png';
import CardRight from './../../assets/structured/cardright.png';
import EquipmentImg from './../../assets/structured/Equipment Rack.png';
import PatchImg from './../../assets/structured/PATCH PANEL.png';
import CatImg from './../../assets/structured/cat-ethernet.png';
import UnifiImg from './../../assets/structured/UniFi Home Network.png';
import CameraImg from './../../assets/structured/Security-Camera.png';
import StructuredCablingImg from './../../assets/structured/Structured-Cabling.png';

const services = [
  {
    icon: Network,
    title: "CAT6 & CAT6A CABLING",
    description:
      "Reliable network infrastructure for fast, secure and stable connections.",
  },
  {
    icon: Camera,
    title: "SECURITY CAMERA PREWIRE",
    description:
      "Cabling for camera locations before walls and ceilings are completed.",
  },
  {
    icon: DoorClosed,
    title: "ACCESS CONTROL PREWIRE",
    description:
      "Low-voltage wiring for readers, door hardware, controllers and related equipment.",
  },
  {
    icon: ShieldCheck,
    title: "ALARM SYSTEM PREWIRE",
    description:
      "Infrastructure for sensors, keypads, sirens and alarm devices.",
  },
  {
    icon: Cpu,
    title: "DATA DROPS",
    description:
      "Professional data drops for offices, workstations and equipment.",
  },
  {
    icon: Server,
    title: "RACKS & PATCH PANELS",
    description:
      "Clean termination, labeling and cable management.",
  },
  {
    icon: Wifi,
    title: "NETWORK INFRASTRUCTURE",
    description:
      "Switches, routers, structured cabling and network setup.",
  },
  {
    icon: Speaker,
    title: "AUDIO / VIDEO WIRING",
    description:
      "Wiring for AV systems, displays, speakers and intercoms.",
  },
];

const ourProcess = [
  {
    step: 1,
    title: "SITE WALKTHROUGH & PLANNING",
    description:
      "We review your property, plans and requirements to understand your exact needs.",
    icon: Users,
  },
  {
    step: 2,
    title: "CABLING DESIGN",
    description:
      "We design the optimal cable routes, device locations and infrastructure.",
    icon: FileText,
  },
  {
    step: 3,
    title: "ROUGH-IN & INSTALLATION",
    description:
      "We install cabling during the appropriate construction phase.",
    icon: Wrench,
  },
  {
    step: 4,
    title: "TERMINATION & LABELING",
    description:
      "All cables are terminated, organized and labeled for easy management.",
    icon: Server,
  },
  {
    step: 5,
    title: "TESTING & HANDOVER",
    description:
      "We test every run and deliver a clean, reliable infrastructure ready for use.",
    icon: ClipboardCheck,
  },
];

const whyItMatters = [
  {
    icon: ShieldCheck,
    title: "RELIABLE FOUNDATION",
    body: "Proper cabling ensures your systems work when you need them most.",
  },
  {
    icon: TrendingUp,
    title: "REDUCED COSTS",
    body: "Plan your wiring now and avoid expensive re-wiring in the future.",
  },
  {
    icon: Network,
    title: "FUTURE READY",
    body: "Structured infrastructure makes upgrades and expansions easier.",
  },
  {
    icon: ClipboardCheck,
    title: "CLEAN & ORGANIZED",
    body: "Professionally installed, labeled and tested for maximum performance.",
  },
  {
    icon: Award,
    title: "BUILT TO LAST",
    body: "We use quality materials and industry best practices.",
  },
];

const realInstallations = [
  {
    title: "EQUIPMENT RACK",
    image: EquipmentImg,
  },
  {
    title: "PATCH PANEL",
    image: PatchImg,
  },
  {
    title: "CAT6 CABLE RUNS",
    image: CatImg,
  },
  {
    title: "UNIFI HOME NETWORK",
    image: UnifiImg,
  },
  {
    title: "CAMERA PREWIRE",
    image: CameraImg,
  },
  {
    title: "COMMERCIAL STRUCTURED CABLING",
    image: StructuredCablingImg,
  },
];

export function StructuredWiringPage() {
  return (
    <main className="bg-white text-black">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[500px] lg:min-h-[580px] items-center overflow-hidden bg-black text-white py-12 lg:py-16">
        {/* Background image & gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${Banner.src})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 lg:via-black/75 to-black/40 z-0" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.02] tracking-wide text-white drop-shadow-md">
              STRUCTURED
              <br />
              WIRING & PREWIRE
            </h1>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-red-600 drop-shadow-xs">
              COMMERCIAL & RESIDENTIAL
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200 font-medium">
              Professional low-voltage wiring solutions for today's connected world.
            </p>

            {/* Checklist */}
            <ul className="mt-6 space-y-3">
              {[
                "Clean, reliable installations",
                "New construction & remodels",
                "Data, voice, security & AV wiring",
                "Organized, labeled & tested",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-base font-bold text-white"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="rounded-lg bg-red-600 px-6 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700 shadow-lg shadow-red-600/30"
              >
                REQUEST A SITE WALKTHROUGH
              </Link>
              <a
                href="tel:18002995964"
                className="inline-flex items-center gap-2.5 rounded-lg border-2 border-white/80 bg-black/40 px-6 py-3 text-sm sm:text-base font-extrabold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-white" />
                <span>CALL (800) 299-5964</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STRUCTURED WIRING SERVICES */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-black">
              OUR STRUCTURED WIRING SERVICES
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 rounded-full" />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center justify-start rounded-xl border border-gray-200 bg-white p-6 text-center shadow-xs transition hover:shadow-md hover:border-gray-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center text-red-600 mb-4">
                    <IconComp className="h-10 w-10 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-black leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. RESIDENTIAL & COMMERCIAL STRUCTURED WIRING */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto ">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Center Overlapping Badge (Desktop) */}
            <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
              <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-4 border-red-600 bg-black p-4 text-center text-white shadow-2xl">
                <Building2 className="h-8 w-8 text-white mb-1" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  SOLUTIONS FOR
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-red-500">
                  EVERY BUILD
                </span>
                <p className="mt-1.5 text-[10px] leading-tight text-gray-300">
                  From homes to large commercial facilities, we build the foundation for reliable connections.
                </p>
              </div>
            </div>

            {/* Left Side: RESIDENTIAL STRUCTURED WIRING */}
            <div className="relative min-h-[440px] flex flex-col justify-between overflow-hidden bg-black text-white p-8 sm:p-12 lg:pr-16">
              <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                style={{
                  backgroundImage: `url(${CardLeft.src})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
                  RESIDENTIAL{" "}
                  <span className="text-red-600 block sm:inline">
                    STRUCTURED WIRING
                  </span>
                </h3>
                <div className="mt-2 h-1 w-12 bg-red-600" />
                <p className="mt-4 text-sm sm:text-base text-gray-300 font-medium max-w-md">
                  Clean, hidden wiring for a smarter, more connected home.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Home networks & Wi-Fi access points",
                    "Home theater & audio wiring",
                    "Security camera wiring",
                    "Access control & doorbell wiring",
                    "Smart home & automation wiring",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-200"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8">
                <Link
                  href="/request-quote"
                  className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Mobile Badge View */}
            <div className="flex lg:hidden justify-center -my-6 z-20">
              <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-4 border-red-600 bg-black p-4 text-center text-white shadow-2xl">
                <Building2 className="h-7 w-7 text-white mb-1" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  SOLUTIONS FOR
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-red-500">
                  EVERY BUILD
                </span>
                <p className="mt-1 text-[10px] leading-tight text-gray-300">
                  From homes to large commercial facilities, we build the foundation for reliable connections.
                </p>
              </div>
            </div>

            {/* Right Side: COMMERCIAL STRUCTURED WIRING */}
            <div className="relative min-h-[440px] flex flex-col justify-between overflow-hidden bg-gray-100 text-gray-900 p-8 sm:p-12 lg:pl-32">
              <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                style={{
                  backgroundImage: `url(${CardRight.src})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
                  COMMERCIAL{" "}
                  <span className="text-red-600 block sm:inline">
                    STRUCTURED WIRING
                  </span>
                </h3>
                <div className="mt-2 h-1 w-12 bg-red-600" />
                <p className="mt-4 text-sm sm:text-base text-gray-700 font-medium max-w-md">
                  Scalable cabling systems for businesses and commercial facilities.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "New construction & tenant improvements",
                    "Warehouses & manufacturing",
                    "Offices & retail buildings",
                    "Healthcare & education facilities",
                    "Professional installations & testing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-800"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8">
                <Link
                  href="/request-quote"
                  className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-red-700"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY IT MATTERS */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white">
              WHY IT MATTERS
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 rounded-full" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
            {whyItMatters.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 text-white mb-4">
                    <IconComp className="h-8 w-8 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-300 max-w-xs">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REAL AVSS INSTALLATIONS */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-black">
              REAL AVSS INSTALLATIONS
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 rounded-full" />
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {realInstallations.map((item) => (
              <div
                key={item.title}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs transition hover:shadow-md"
              >
                <div className="relative h-44 w-full bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </div>
                <div className="p-3 text-center bg-white border-t border-gray-100 flex items-center justify-center min-h-[54px]">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-black leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-black">
              OUR PROCESS
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 rounded-full" />
          </div>

          <div className="mt-12 flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2">
            {ourProcess.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:w-auto">
                  <div className="flex flex-col items-center text-center max-w-[210px]">
                    {/* Number Badge */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white font-extrabold text-sm shadow-md mb-3">
                      {item.step}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-black min-h-[36px] flex items-center justify-center leading-snug">
                      {item.title}
                    </h3>

                    {/* Icon */}
                    <div className="my-3 text-gray-800">
                      <IconComp className="h-10 w-10 stroke-[1.5]" />
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow connector between steps */}
                  {idx < ourProcess.length - 1 && (
                    <div className="my-4 lg:mt-12 lg:mx-3 text-gray-400">
                      <ArrowRight className="h-5 w-5 hidden lg:block" />
                      <div className="h-6 w-0.5 bg-gray-300 lg:hidden" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {/* <FaqAccordion /> */}


    </main>
  );
}

