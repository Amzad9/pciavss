import Image, { type StaticImageData } from "next/image";
import {
  Camera,
  Bell,
  Lock,
  Radio,
  Network,
  MonitorPlay,
  Trophy,
  Truck,
  Building2,
  Wrench,
  Settings,
  ShieldCheck,
  Headphones
} from "lucide-react";
// import AccessBanner from "/related-services/access-control.png";
import AlarmBanner from "../assets/alarm/banner.png";
import TrailerBanner from "../assets/mobile/image.png";
import StructuredBanner from "../assets/structured/banner.png";
import VideoMonitoringImg from "../assets/alarm/video.png";

export default function About() {
  return (
    // Hardcoded deep navy background: bg-[#0B1120]
    <main className="min-h-screen bg-[#0B1120] text-white font-sans selection:bg-[#E53935] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[650px] flex items-center overflow-hidden bg-[url('/abouts/aboutus.png')] bg-cover bg-center bg-right">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/abouts/aboutus.png"
            alt="Commercial Building"
            fill
            className="object-contain"
            priority
          /> */}
          {/* Custom Gradient Overlay: Hardcoded navy fading to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 pt-4">
            {/* Hardcoded border and background for pill badge */}
            <div className="inline-block bg-[#1F2E45]/50 border border-[#1F2E45] rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 w-fit uppercase">
              Serving Southern California Since 2003
            </div>

            <h1 className="text-4xl md:text-5xl mb-1 lg:text-5xl font-extrabold leading-[1.1] tracking-tight uppercase">
              Protecting Southern California Businesses <br />
              {/* Hardcoded Brand Red text */}
              <span className="text-[#E53935]">For Over 20 Years</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Audio-Video Security Solutions (AVSS) provides professional security,
              surveillance, access control, alarm, commercial audio, and low-voltage
              solutions for businesses throughout Southern California. From system
              design and installation to programming, training, and ongoing support,
              we build reliable solutions around each customer's property and operations.
            </p>

            {/* Experience Badge */}
            <div className="flex items-center gap-4">
              {/* Hardcoded Brand Red background */}
              <div className="bg-[#E53935] rounded-full p-3 shadow-lg shadow-[#E53935]/20">
                <Trophy size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">20+ Years of Experience</h4>
                <p className="text-sm text-gray-400">Commercial Security & Low-Voltage Professionals</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              {/* Hardcoded Brand Red background and shadow */}
              <button className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase text-sm tracking-widest shadow-lg shadow-[#E53935]/30 hover:shadow-[#E53935]/50 hover:-translate-y-0.5">
                Request a Quote
              </button>
              <button className="bg-transparent hover:bg-white/5 border border-gray-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase text-sm tracking-widest">
                View Projects
              </button>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-8 bg-[#0B1120]">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve & What We Do</h2>
            <p className="text-gray-400">
              AVSS works with warehouses, offices, manufacturing facilities, retail stores, construction sites,
              apartment communities, parking facilities, and other commercial properties throughout Southern California.
            </p>
          </div>

          {/* Services Grid (Top 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

            <ServiceCard
              // Hardcoded Brand Red icon color
              icon={<Camera size={64} className="text-[#E53935]" />}
              title="Security Cameras & Video Surveillance"
              desc="Professional IP, 4K and AI video surveillance systems with remote viewing, recording, analytics, and system configuration designed around your property."
              image="/image (53).png"
            />

            <ServiceCard
              icon={<Lock size={64} className="text-[#E53935]" />}
              title="Access Control & Keyless Entry"
              desc="Professional access control systems for managing doors, employees, credentials, schedules, permissions, and secure entry throughout your property."
              image="/related-services/access-control.png"
            />

            <ServiceCard
              icon={<Bell size={64} className="text-[#E53935]" />}
              title="Alarm & Intrusion Systems"
              desc="Commercial intrusion detection for doors, windows, motion, glass break, and perimeter protection, professionally installed and configured for your facility."
              image={AlarmBanner}
            />

            <ServiceCard
              icon={<Truck size={64} className="text-[#E53935]" />}
              title="Mobile Security Trailers"
              desc="Rapid-deployment solar security trailers with PTZ surveillance cameras, cellular connectivity, and active deterrence for construction sites and outdoor facilities."
              image={TrailerBanner}
            />

            <ServiceCard
              icon={<Network size={64} className="text-[#E53935]" />}
              title="Structured Wiring & Prewire"
              desc="Structured cabling, network infrastructure, Cat6/Cat6A wiring, patch panels, and low-voltage planning to support your building's systems."
              image={StructuredBanner}
            />

            <ServiceCard
              icon={<MonitorPlay size={64} className="text-[#E53935]" />}
              title="Professional Video Monitoring"
              desc="24/7 live video monitoring and alarm monitoring to help detect activity, verify events in real time, and improve response to potential security incidents."
              image={VideoMonitoringImg}
            />
          </div>


        </div>
      </section>
    </main>
  );
}

// ================= COMPONENTS =================

function ServiceCard({ icon, title, desc, image }: { icon: React.ReactNode, title: string, desc: string, image: string | StaticImageData }) {
  return (
    // Hardcoded card background: bg-[#131E32] and border: border-[#1F2E45]
    // Hover border uses brand red with opacity: hover:border-[#E53935]/40
    <div className="bg-[#131E32] rounded-2xl overflow-hidden border border-[#1F2E45] hover:border-[#E53935]/40 transition-all duration-300 group flex flex-col">
      <div className="p-4 flex-grow flex gap-5">
        <div>        <div className="mb-5">{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 uppercase tracking-wide text-gray-100 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>

      </div>
      <div className="h-44 w-full relative mt-auto border-t border-[#1F2E45]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Subtle inner shadow using hardcoded hex color to blend the image into the card */}
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start gap-3">
      {/* Hardcoded Brand Red icon color */}
      <div className="text-[#E53935] mb-1">{icon}</div>
      <h4 className="font-bold text-sm uppercase leading-tight tracking-wider text-gray-200">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}