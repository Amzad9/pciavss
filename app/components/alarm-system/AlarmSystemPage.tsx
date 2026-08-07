import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ChevronRight,
  MonitorPlay,
  PhoneCall,
  ShieldCheck,
  Truck,
  Shield,
  Phone,
  Warehouse,
  Building2,
  ShoppingCart,
  Factory,
  Hammer,
  School,
  Church,
  Building,
  Wrench,
  Smartphone,
  Wifi,
  BadgeCheck,
  Clock3,
  ChevronDown,
} from "lucide-react";

import Banner from "./../../assets/alarm/banner.png";
import Card1 from "./../../assets/alarm/card1.png";
import Card2 from "./../../assets/alarm/card2.png";
import Card3 from "./../../assets/alarm/card3.png";
import banner2 from "./../../assets/alarm/banner2.png";
import Mobile from "./../../assets/alarm/mobile.png";

import CameraImg from "./../../assets/alarm/camera.png";
import Access from "./../../assets/alarm/access.png";
import MobileImg from "./../../assets/alarm/security.png";
import Video from "./../../assets/alarm/video.png";
import Wiring from "./../../assets/alarm/wiring.png";
import Mantenance from "./../../assets/alarm/mantenance.png";
import { FaqSection } from "./FaqAccordion";

const services = [
  {
    title: "SECURITY CAMERAS",
    image: CameraImg,
  },
  {
    title: "ACCESS CONTROL",
    image: Access,
  },
  {
    title: "MOBILE SECURITY TRAILERS",
    image: MobileImg,
  },
  {
    title: "VIDEO MONITORING",
    image: Video,
  },
  {
    title: "STRUCTURED WIRING",
    image: Wiring,
  },
  {
    title: "PREVENTIVE MAINTENANCE",
    image: Mantenance,
  },
];
const accent = "#b52322";
const industries = [
  { icon: Warehouse, title: "Warehouses" },
  { icon: Building2, title: "Offices" },
  { icon: ShoppingCart, title: "Retail Stores" },
  { icon: Factory, title: "Manufacturing\nFacilities" },
  { icon: Hammer, title: "Construction\nOffices" },
  { icon: Building, title: "Apartment\nProperties" },
  { icon: Church, title: "Schools /\nChurches" },
  { icon: Building2, title: "Commercial\nBuildings" },
];
const features = [
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Clean, code-compliant installations by experienced technicians.",
  },
  {
    icon: Wifi,
    title: "Wireless & Hardwired Expertise",
    desc: "We design the right solution for your property and risks.",
  },
  {
    icon: Clock3,
    title: "24/7 Monitoring Options",
    desc: "Choose the monitoring level that fits your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    desc: "Control your system from anywhere, anytime.",
  },
  {
    icon: Camera,
    title: "Camera & Access Control Integration",
    desc: "Seamlessly integrate with cameras and access control systems.",
  },
  {
    icon: BadgeCheck,
    title: "Local Service & Support",
    desc: "Fast local response and ongoing support when you need it.",
  },
];
const faqs = [
  "Can I control my alarm system from my phone?",
  "Do you install both wired and wireless alarm systems?",
  "Can my alarm system integrate with cameras and access control?",
  "Do you offer 24/7 monitoring?",
  "What happens if the internet goes down?",
  "Can you take over my existing alarm system?",
  "Can different employees have their own codes?",
];
export function AlarmSystemPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section - Matches first screenshot */}

      <section className="relative overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt=""
            fill
            className="object-contain opacity-100"
          />
          {/* <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/40" /> */}
        </div>

        <div className="relative container z-10 mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="max-w-full lg:max-w-2xl xl:max-w-3xl text-center lg:text-left">
            <p className="mb-3 sm:mb-4 lg:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] lg:tracking-[0.18em] text-white/70">
              INTRUSION DETECTION • 24/7 PROTECTION
            </p>

            <h1 className="leading-[0.95] font-black uppercase">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white">
                COMMERCIAL
              </span>

              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white">
                ALARM SYSTEMS
              </span>

              <span className="mt-1 sm:mt-2 block text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-[#e31d1c]">
                IN ORANGE COUNTY
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 lg:mt-8 max-w-full lg:max-w-[560px] text-base sm:text-lg lg:text-[20px] leading-7 sm:leading-8 lg:leading-9 text-white/75">
              Protect your business with professionally installed intrusion
              detection, door and window sensors, motion detection, glass-break
              protection, panic buttons, and 24/7 monitoring options.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5">
              <Link
                href="/request-quote"
                className="rounded-xl bg-[#e31d1c] px-6 sm:px-8 lg:px-9 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl transition hover:bg-[#c31615]"
              >
                REQUEST A FREE SITE SURVEY
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 sm:gap-3 rounded-xl border border-white/30 bg-white/5 px-6 sm:px-8 lg:px-9 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.97 1.66l.35 2.09a2 2 0 01-.57 1.74L7.91 9.61a16 16 0 006.48 6.48l1.12-1.12a2 2 0 011.74-.57l2.09.35A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z"
                  />
                </svg>
                TALK TO A SPECIALIST
              </Link>
            </div>

            {/* Bottom Features */}
            <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-full border border-red-500 p-1.5 sm:p-2 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl">
                  🛡️
                </div>
                <span className="font-bold uppercase text-white text-sm sm:text-base">
                  Detect
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-full border border-red-500 p-1.5 sm:p-2 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl">
                  🔔
                </div>
                <span className="font-bold uppercase text-white text-sm sm:text-base">
                  Deter
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-full text-white border border-red-500 p-1.5 sm:p-2 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl">
                  ✓
                </div>
                <span className="font-bold uppercase text-white text-sm sm:text-base">
                  Protect 24/7
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block w-full max-w-[400px] xl:max-w-[700px] h-[400px] xl:h-[620px]">
            {/* <Image
              src="/images/dsc-products.png"
              alt="Commercial Alarm System"
              fill
              priority
              className="object-contain object-bottom"
            /> */}
          </div>
        </div>
      </section>

      {/* Detection Section - Matches second screenshot */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto container px-4 lg:px-6">
          {/* Heading */}
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="font-display text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase leading-tight tracking-wide text-black">
              DETECTION TUNED TO YOUR RISKS
            </h2>
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-red-600" />
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* CARD */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="16" y="10" width="18" height="42" rx="2" />
                  <rect x="36" y="8" width="10" height="46" rx="2" />
                  <circle cx="27" cy="31" r="1.5" fill="#E11D24" />
                  <path d="M46 46h8l3 5" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                DOOR & WINDOW
                <br />
                SENSORS
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Detect unauthorized openings at doors, windows, and other entry
                points.
              </p>
            </div>

            {/* Motion */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="32" cy="10" r="4" />
                  <path d="M32 14l-4 12-8 4" />
                  <path d="M32 18l10 8 4 12" />
                  <path d="M28 26l-6 12" />
                  <path d="M40 28l8 12" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                MOTION
                <br />
                DETECTORS
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Detect movement inside protected areas after the system is
                armed.
              </p>
            </div>

            {/* Glass */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="12" y="12" width="40" height="40" />
                  <path d="M32 12V52" />
                  <path d="M12 32H52" />
                  <path d="M22 18l5 8-5 8" />
                  <path d="M42 18l-5 8 5 8" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                GLASS-BREAK
                <br />
                DETECTORS
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Acoustic detection designed to identify breaking glass.
              </p>
            </div>

            {/* Panic */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M32 10l16 6v12c0 11-7 20-16 26-9-6-16-15-16-26V16z" />
                  <path d="M26 31l5 5 8-10" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                PANIC
                <br />
                BUTTONS
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Discreet emergency notification options for employees and
                high-risk areas.
              </p>
            </div>

            {/* Siren */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24 44h16V30a8 8 0 10-16 0z" />
                  <path d="M20 50h24" />
                  <path d="M18 18l-4-4" />
                  <path d="M46 18l4-4" />
                  <path d="M32 10V4" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                SIRENS &
                <br />
                STROBES
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Audible and visual notification devices for immediate on-site
                deterrence.
              </p>
            </div>

            {/* Panel */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-7 text-center shadow-sm transition hover:shadow-lg">
              <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center">
                <svg
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#E11D24"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="14" y="10" width="36" height="44" rx="2" />
                  <path d="M22 18h2M30 18h2M38 18h2" />
                  <path d="M22 28h2M30 28h2M38 28h2" />
                  <path d="M22 38h2M30 38h2M38 38h2" />
                  <path d="M22 48h20" />
                </svg>
              </div>

              <h3 className="text-sm sm:text-base lg:text-[18px] font-extrabold uppercase leading-tight">
                ALARM CONTROL
                <br />
                PANELS
              </h3>

              <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 text-gray-600">
                Centralized control for sensors, users, partitions, schedules,
                and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible System Options - Matches third screenshot */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="mx-auto container px-4 lg:px-6">
          {/* Heading */}
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="font-display text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase leading-tight tracking-wide text-black">
              FLEXIBLE SYSTEM OPTIONS
            </h2>
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-red-600" />
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {/* Wireless */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="h-48 sm:h-56 lg:h-60 bg-[#ececec]">
                <Image
                  src={Card1}
                  alt="Wireless System"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 text-center">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black">
                  WIRELESS SYSTEMS
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  Fast installation with minimal disruption to finished
                  commercial spaces.
                </p>
              </div>
            </div>

            {/* Hardwired */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="h-48 sm:h-56 lg:h-60 bg-[#ececec]">
                <Image
                  src={Card2}
                  alt="Hardwired System"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 text-center">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black">
                  HARDWIRED SYSTEMS
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  Reliable infrastructure ideal for new construction, remodels,
                  and permanent installations.
                </p>
              </div>
            </div>

            {/* Hybrid */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="h-48 sm:h-56 lg:h-60 bg-[#ececec]">
                <Image
                  src={Card3}
                  alt="Hybrid System"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7 text-center">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black">
                  HYBRID SYSTEMS
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                  Combine wired reliability with wireless flexibility for
                  expansions and upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto container px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px_1fr]">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight text-white">
                24/7 PROFESSIONAL
                <br />
                ALARM MONITORING
              </h2>

              <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-red-600" />

              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 text-white/85">
                Our monitoring partners respond to alarms immediately and
                dispatch the appropriate authorities to your location.
              </p>

              <ul className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
                {[
                  "Burglary & Intrusion Monitoring",
                  "Panic & Emergency Monitoring",
                  "Alarm Verification & Notification",
                  "Mobile Alerts & System Notifications",
                  "UL-Listed Central Station Monitoring",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 sm:gap-4 text-base sm:text-lg lg:text-xl font-medium text-white"
                  >
                    <div className="mt-1 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-red-600 text-sm sm:text-base">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER */}
            <div className="relative flex justify-center">
              <Image
                src={Mobile}
                alt="mobile"
                className="relative z-20 w-48 sm:w-56 md:w-64 lg:w-72 rounded-[30px] sm:rounded-[40px] border-4 border-white object-cover shadow-2xl"
              />
            </div>

            {/* RIGHT */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight text-white">
                SMART ALARM CONTROL
                <br />
                FROM ANYWHERE
              </h2>

              <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-red-600" />

              <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Arm & Disarm Remotely",
                    desc: "Manage your system from your smartphone.",
                  },
                  {
                    title: "Real-Time Alerts",
                    desc: "Get instant notifications of alarms and events.",
                  },
                  {
                    title: "User Management",
                    desc: "Add or remove users and set permissions.",
                  },
                  {
                    title: "Activity History",
                    desc: "Review system events and activity logs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 sm:gap-4">
                    <div className="mt-1 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm sm:text-base">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AVSS - Matches fifth screenshot */}
      <section className="bg-white px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-black">
            COMMERCIAL ALARM SYSTEMS FOR
          </h2>
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded bg-red-600"></div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
              {industries.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="text-center">
                    <Icon
                      size={40}
                      strokeWidth={1.8}
                      className="mx-auto text-red-600"
                    />
                    <p className="mt-2 sm:mt-3 whitespace-pre-line text-base sm:text-lg font-bold">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <h3 className="text-center text-2xl sm:text-3xl font-black uppercase">
                WHY CHOOSE AVSS
              </h3>
              <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded bg-red-600"></div>

              <div className="mt-8 sm:mt-10 grid gap-x-2 gap-y-8 sm:gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                {features.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <Icon
                        size={36}
                        strokeWidth={1.8}
                        className="mt-1 shrink-0 text-red-600"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-black uppercase leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1 sm:mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           <FaqSection />
            </div>
          </div>
        
      </section>

      {/* Related Services - Matches sixth screenshot */}
      <section className="bg-white py-12 sm:pb-16">
        <div className="mx-auto container px-4 sm:px-6">
          {/* Heading */}
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="font-display text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold uppercase leading-tight tracking-wide text-black">
              RELATED SERVICES
            </h2>
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded bg-red-600" />
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-32 sm:h-36 lg:h-40 w-full bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 lg:p-5 text-center">
                  <h3 className="min-h-[40px] text-xs sm:text-sm lg:text-[15px] font-black uppercase leading-5 text-black">
                    {service.title}
                  </h3>
                  <Link
                    href="#"
                    className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-red-600 transition hover:text-red-700"
                  >
                    View Service
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12.5a8 8 0 0 1 14 0" />
      <path d="M8 16.5a5 5 0 0 1 8 0" />
      <path d="M12 20.5v.01" />
    </svg>
  );
}