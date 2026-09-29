import Link from "next/link";
import {
  Shield,
  Phone,
  ArrowRight,
} from "lucide-react";

export function PreFooterCta() {
  return (
    <section className="relative overflow-hidden border-b-2 border-red-600 bg-[#070707]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/85" />

      <div className="relative mx-auto flex container flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 py-6 sm:py-8 lg:flex-row lg:justify-between lg:py-10">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border-2 border-red-600 bg-[#160606] shadow-[0_0_30px_rgba(220,38,38,.35)]">
            <Shield
              className="h-8 w-8 sm:h-10 sm:w-10 text-red-500"
              strokeWidth={2}
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white">
              GET PROTECTED TODAY
            </h2>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg text-white/70">
              Don't wait until something happens—secure your business now.
            </p>
          </div>
        </div>

        {/* CENTER BUTTON */}
        <Link
          href="/contact"
          className="rounded-full bg-red-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-black uppercase text-white transition hover:bg-red-700 whitespace-nowrap"
        >
          REQUEST A FREE SITE SURVEY
        </Link>

        {/* PHONE BUTTON */}
        <Link
          href="tel:8002995964"
          className="inline-flex items-center gap-3 sm:gap-4 rounded-full border-2 border-white/20 bg-[#111] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-black text-white transition hover:border-red-500 whitespace-nowrap"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          CALL OR TEXT (800) 299-5964
        </Link>
      </div>
    </section>
  );
}