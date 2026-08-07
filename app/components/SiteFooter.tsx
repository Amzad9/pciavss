import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { serviceCards, serviceSectionId } from "../lib/serviceCards";
import { siteContact } from "./siteConfig";

export function SiteFooter() {
  return (
<footer className="relative overflow-hidden bg-gray-950 py-12 text-white">
  {/* Top accent line */}
  <div
    className="absolute left-0 right-0 top-0 h-0.75 bg-brand-gold-500"
    aria-hidden="true"
  />

  <div className="container mx-auto grid items-start gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

    {/* LOGO */}
    <div className="max-w-xs self-start">
      <Link
        href="/"
        className="block rounded-lg shadow-soft ring-1 ring-black/10"
      >
        <Image
          src="/new-logo.jpg"
          alt="AVSS audio-video security solutions logo"
          width={240}
          height={120}
          className="h-auto w-74 object-contain object-top"
          sizes="(max-width: 640px) 200px, 240px"
        />
      </Link>
    </div>

    {/* LINKS */}
    <div className="self-start">
      <div className="text-[20px] font-extrabold tracking-widest text-brand-gold-500">
        LINKS
      </div>

      <div className="mt-3 grid gap-1 text-[15px] font-semibold uppercase text-white/85">
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Blogs", href: "/blog" },
          { label: "Gallery", href: "/portfolio" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>

    {/* SERVICES */}
    <div className="self-start">
      <div className="text-[20px] font-extrabold tracking-widest text-brand-gold-500">
        SERVICES
      </div>

      <div className="mt-3 grid gap-1 text-[14px] font-semibold uppercase text-white/85">
        {serviceCards.map((item) => (
          <Link
            key={item.title}
            href={`/services/${serviceSectionId(item.title)}`}
            className="hover:text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>

    {/* CONTACT */}
    <div className="self-start">
      <div className="text-[20px] font-extrabold tracking-widest text-brand-gold-500">
        CONTACT
      </div>

      <div className="mt-3 space-y-2 text-[15px] text-white/85">
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-brand-gold-500" />
          <span>
            {siteContact.addressLines[1]}, {siteContact.addressLines[2]}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-brand-gold-500" />
          <a
            href={siteContact.phoneHref}
            className="hover:text-white"
          >
            {siteContact.phone}
          </a>
        </div>
      </div>
    </div>

    {/* SOCIAL + HOURS */}
    <div className="grid gap-8 self-start">

      <div>
        <div className="text-[20px] font-extrabold tracking-widest text-brand-gold-500">
          FOLLOW US
        </div>

        <div className="mt-3 flex items-center gap-4 text-white/90">
          {[
            { label: "Instagram", Icon: Instagram },
            { label: "Facebook", Icon: Facebook },
            { label: "YouTube", Icon: Youtube },
          ].map(({ label, Icon }) => (
            <Link
              key={label}
              href="/contact"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-bold"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>


      <div>
        <div className="text-[20px] font-extrabold tracking-widest text-brand-gold-500">
          HOURS
        </div>

        <div className="mt-3 text-[15px] text-white/85">
          <div>Mon-Fri: 8AM-6PM</div>
          <div>Sat-Sun: Closed</div>
        </div>
      </div>

    </div>

  </div>
</footer>
  );
}
