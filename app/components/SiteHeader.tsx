'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { siteContact } from "./siteConfig";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Gallery", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const overflowPrevRef = useRef<{
    bodyOverflow: string;
    htmlOverflow: string;
  } | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when mobile menu is open.
  // (Restores previous overflow values to avoid leaving the page stuck.)
  useEffect(() => {
    if (isOpen) {
      if (!overflowPrevRef.current) {
        overflowPrevRef.current = {
          bodyOverflow: document.body.style.overflow,
          htmlOverflow: document.documentElement.style.overflow,
        };
      }
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return;
    }

    // Menu closed: restore previous overflow values.
    if (overflowPrevRef.current) {
      document.body.style.overflow = overflowPrevRef.current.bodyOverflow;
      document.documentElement.style.overflow =
        overflowPrevRef.current.htmlOverflow;
      overflowPrevRef.current = null;
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden border-b border-white/10 bg-linear-to-r from-brand-ink-950 via-brand-ink-900 to-brand-ink-950 text-white md:block">
        <div className="container mx-auto flex items-center justify-between px-6 py-2 text-[12px] tracking-wide">
          <div className="flex items-center gap-5 text-white/85">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold-500" />
              <a
                href={siteContact.phoneHref}
                className="cursor-pointer hover:text-white"
              >
                {siteContact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-gold-500" />
              <a
                href={`mailto:${siteContact.emailShowroom}`}
                className="cursor-pointer hover:text-white"
              >
                {siteContact.emailShowroom}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-gold-500" />
              <span>
                {siteContact.addressLines[1]}, {siteContact.addressLines[2]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            {[{ Icon: Instagram, label: "Instagram" }, { Icon: Facebook, label: "Facebook" }, { Icon: Youtube, label: "YouTube" }].map(
              ({ Icon, label }) => (
                <Link
                  key={label}
                  href="/contact"
                  className="grid h-7 w-7 cursor-pointer place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-white/85 aim-nav-blur dark:bg-brand-ink-900/70">
        <div className="container mx-auto flex h-[84px] items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center dark:rounded-lg dark:bg-white dark:px-2 dark:py-1 dark:shadow-sm dark:ring-1 dark:ring-white/15"
          >
            <Image
              src="/logo_AVSS.png"
              alt="AVSS audio-video security solutions logo"
              width={3180}
              height={1344}
              className="h-9 w-auto max-w-[min(220px,65vw)] object-contain object-left md:h-16"
              priority
              sizes="(max-width: 768px) 65vw, 220px"
            />
          </Link>

          {/* Desktop nav (shown on large screens and up) */}
          <nav className="hidden items-center justify-center divide-x divide-black/15 text-[14px] font-extrabold tracking-wide text-black lg:flex dark:divide-white/15 dark:text-white">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-[13px] uppercase hover:text-brand-gold-600 dark:hover:text-brand-gold-500 ${
                  isActive ? "text-brand-gold-600 dark:text-brand-gold-500" : ""
                }`}
              >
                  <span
                    className={
                      item.label === "Custom Design" ? "normal-case" : ""
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

        <div className="hidden lg:block">
            <PrimaryButton
              href="/request-quote"
              className="h-11 px-7 text-[12px] rounded-[14px] shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
            >
              REQUEST QUOTE
            </PrimaryButton>
        </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/80 px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-black shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="mr-2 text-xs">Menu</span>
            <span className="relative block h-[14px] w-4">
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-current transition-opacity duration-150 ${
                  isOpen ? "top-1/2 opacity-0" : "top-1/2 -translate-y-1/2"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer (rendered only when open so it can't leave visual gaps) */}
      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile / tablet slide-in menu (right-side drawer, above overlay) */}
          <div className="fixed top-0 right-0 bottom-0 z-70 flex h-screen w-[85%] max-w-none flex-col overflow-y-auto bg-white shadow-2xl dark:bg-brand-ink-900 lg:hidden sm:w-[75%] md:w-[60%]">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center dark:rounded-md dark:bg-white dark:px-2 dark:py-1 dark:ring-1 dark:ring-white/15"
            >
              <Image
                src="/logo_AVSS.png"
                alt="AVSS audio-video security solutions logo"
                width={3180}
                height={1344}
                className="h-7 w-auto max-w-[160px] object-contain"
                sizes="160px"
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md p-1 text-sm font-semibold uppercase tracking-[0.12em] text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] ${
                    isActive
                      ? "bg-brand-gold-500 text-black"
                      : "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-border px-5 py-4">
            <PrimaryButton
              href="/request-quote"
              className="h-11 w-full justify-center text-[12px]"
              onClick={closeMenu}
            >
              REQUEST QUOTE
            </PrimaryButton>
          </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
