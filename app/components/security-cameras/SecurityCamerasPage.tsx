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
  Timer,
  Video,
  Wrench,
  FileText,
  Handshake,
  MapPin,
  Building,
  HardHat,
  Factory,
  ShoppingCart,
  ParkingSquare,
  Home,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  Users,
  Award,
  Headphones,
  Zap,
  Eye,
  Camera,
  TrendingUp,
  Calendar,
  Layout,
  MonitorPlay,
} from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";

// Brand colors
const primaryRed = "#C1121F";
const darkCharcoal = "#1A1A1A";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide sm:text-3xl mt-8" style={{ color: darkCharcoal }}>
      {children}
    </h2>
  );
}

function RedBulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl" style={{ color: primaryRed }}>•</span>
      <span className="text-base font-medium" style={{ color: darkCharcoal }}>{children}</span>
    </div>
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

// Re-adding Sun icon that was missing
function Sun(props: any) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>;
}

const cameraTypes = [
  {
    title: "Turret Cameras",
    description: "Ideal for offices, hallways, and warehouses.",
    image: "/service/camera1.jpg",
  },
  {
    title: "Bullet Cameras",
    description: "Great for perimeter protection and parking lots.",
    image: "/service/camera2.webp",
  },
  {
    title: "PTZ Cameras",
    description: "Pan, tilt, and zoom for large commercial properties.",
    image: "/service/camera3.webp",
  },
  {
    title: "License Plate Cameras",
    description: "Capture vehicle activity at entrances and exits.",
    image: "/service/camera4.webp",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Site Walkthrough",
    description:
      "We evaluate your property layout and security goals.",
  },
  {
    icon: FileText,
    title: "System Design",
    description:
      "We recommend camera placement and recording options.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Clean wiring, mounting, and complete setup.",
  },
  {
    icon: Handshake,
    title: "Training & Support",
    description:
      "We show your team how to use the system.",
  },
];

const whyChoose = [
  { icon: Users, text: "Professional Commercial Installation" },
  { icon: Layout, text: "Clean Organized Wiring" },
  { icon: Zap, text: "Fast Turnaround Times" },
  { icon: MonitorPlay, text: "Remote Viewing Setup Included" },
  { icon: Headphones, text: "Ongoing Support & Maintenance" },
];

const idealFor = [
  { label: "Warehouses", icon: Building },
  { label: "Office Buildings", icon: Building },
  { label: "Construction Sites", icon: HardHat },
  { label: "Manufacturing Facilities", icon: Factory },
  { label: "Retail Stores", icon: ShoppingCart },
  { label: "Parking Lots", icon: ParkingSquare },
  { label: "Apartment Properties", icon: Home },
];

const projectPhotos = [
  { src: "/70439 (1).jpg", alt: "Security camera closeup installation", category: "Camera Closeup" },
  { src: "/camera installation.jpg", alt: "Rack installation with organized wiring", category: "Rack Installation" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", alt: "NVR setup in server room", category: "NVR Setup" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop", alt: "Professional conduit work", category: "Conduit Work" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", alt: "Warehouse security installation", category: "Warehouse" },
  { src: "https://images.unsplash.com/photo-1481597262637-0545b18186ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Nighttime camera footage", category: "Night Vision" },
  { src: "/REMOTE.png", alt: "Mobile app remote access interface", category: "Mobile App" },
];

export function SecurityCamerasPage() {
  return (
    <main className="bg-white" style={{ color: darkCharcoal }}>
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1656057497463-37e68d6ff329?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Commercial security camera installation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container relative z-10 mx-auto px-6 py-20 text-center">
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Commercial Camera Systems
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            Professional surveillance solutions for businesses across Southern California
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110 sm:text-lg"
            style={{ backgroundColor: primaryRed }}
          >
            Request a Commercial Security Assessment
          </Link>
          <p className="mt-4 text-sm text-white/80">
            We'll evaluate your property, recommend coverage areas, and provide a customized camera system proposal.
          </p>
        </div>
      </section>

   

      {/* Commercial Camera System Features Section */}
      <section className="px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Commercial Camera System Features</SectionHeading>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security features designed for commercial applications
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:bg-gray-100"
              >
                <Icon
                  className="h-8 w-8 shrink-0"
                  style={{ color: primaryRed }}
                  strokeWidth={1.5}
                />
                <span className="font-semibold" style={{ color: darkCharcoal }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* Camera Types We Install Section */}
   <section className="px-4 py-16 bg-gray-50 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Camera Types We Install</SectionHeading>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Professional-grade cameras for every commercial application
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cameraTypes.map((camera) => (
              <div
                key={camera.title}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative flex h-48 items-center justify-center  p-6">
                  <Image
                    src={camera.image}
                    alt={camera.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold" style={{ color: darkCharcoal }}>{camera.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {camera.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Ideal For Section */}
       <section className="bg-neutral-0 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Ideal For</SectionHeading>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Commercial camera systems tailored to your industry needs
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
  {idealFor.map((item) => (
    <div key={item.label} className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-8 text-center shadow-md transition-transform hover:scale-105 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.25rem)]">
      <item.icon className="h-12 w-12" style={{ color: primaryRed }} strokeWidth={1.5} />
      <p className="mt-4 text-base font-extrabold" style={{ color: darkCharcoal }}>{item.label}</p>
    </div>
  ))}
</div>
        </div>
      </section>

        {/* Why Businesses Choose AVSS Strip */}
      <section className="px-4 py-16 bg-gray-50 sm:px-8">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading>Why Businesses Choose AVSS</SectionHeading>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
  {whyChoose.map((item) => (
    <div key={item.text} className="flex items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] hover:shadow-xl">
      <item.icon className="h-6 w-6 shrink-0" style={{ color: primaryRed }} strokeWidth={1.75} />
      <span className="font-semibold" style={{ color: darkCharcoal }}>{item.text}</span>
    </div>
  ))}
</div>
        </div>
      </section>
      {/* Real Project Photos Gallery */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Our Recent Installations</SectionHeading>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            See the quality of our commercial camera system installations across Southern California
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
  {projectPhotos.map((photo, idx) => (
    <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-md w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]">
      <div className="relative aspect-4/3">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
        <p className="text-lg font-medium text-white">{photo.category}</p>
        <p className="text-sm text-white/90">{photo.alt}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

   

      {/* Our Installation Process Section */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-8">
        <div className="container mx-auto">
          <SectionHeading>Our Installation Process</SectionHeading>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            A streamlined approach from consultation to ongoing support
          </p>
          <div className="relative mt-12">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 lg:block" style={{ backgroundColor: primaryRed }} />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-md" style={{ borderColor: primaryRed }}>
                    <step.icon className="h-7 w-7" style={{ color: primaryRed }} strokeWidth={1.75} />
                  </div>
                  {/* <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ backgroundColor: primaryRed }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div> */}
                  <h3 className="mt-5 text-lg font-extrabold" style={{ color: darkCharcoal }}>{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Final CTA Section */}
<section className="relative overflow-hidden py-20">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&h=800&fit=crop"
      alt="Commercial security camera installation"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay for text readability */}
  </div>
  
  <div className="relative z-10 container mx-auto px-6 text-center">
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
      Request a Commercial Security Assessment
    </h2>
    <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-200">
      We'll evaluate your property, recommend coverage areas, and provide a customized camera system proposal.
    </p>
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110 sm:text-lg"
        style={{ backgroundColor: primaryRed }}
      >
        Get Your Free Assessment
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-black"
      >
        Contact Our Team
      </Link>
    </div>
    <p className="mt-6 text-sm text-gray-300">
      Serving Orange County, Los Angeles County, San Diego County, and all of Southern California
    </p>
  </div>
</section>

     
   {/* Trust Elements Strip */}
      <section className="border-b border-neutral-200 bg-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                <span className="text-[#4285F4] text-xl font-bold">G</span>
                <span className="text-[#EA4335] text-xl font-bold">o</span>
                <span className="text-[#FBBC05] text-xl font-bold">o</span>
                <span className="text-[#4285F4] text-xl font-bold">g</span>
                <span className="text-[#34A853] text-xl font-bold">l</span>
                <span className="text-[#EA4335] text-xl font-bold">e</span>
              </div>
              <div className="flex text-yellow-500">
                <span>★★★★★</span>
              </div>
              <span className="font-bold">4.9 (150+ reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" style={{ color: primaryRed }} />
              <span className="font-medium">Serving Southern California</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" style={{ color: primaryRed }} />
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" style={{ color: primaryRed }} />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" style={{ color: primaryRed }} />
              <span className="font-medium">Fast Response Times</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Trusted by businesses across Orange County for reliable commercial surveillance systems.
          </p>
        </div>
      </section>
      {/* FAQ Section for SEO */}
      <section className="px-4 py-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <p className="mt-4 text-center text-gray-600">
            Common questions about our commercial camera systems
          </p>
          <div className="mt-0 space-y-4">
            <FaqAccordion />
          </div>
        </div>
      </section>

     
    </main>
  );
}