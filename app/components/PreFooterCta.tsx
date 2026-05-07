import Link from "next/link";

export function PreFooterCta() {
  return (
    <section className="bg-brand-ink-950 py-12 text-white">
      <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get Protected Today
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-white/75">
            Don’t wait until something happens—secure your business now.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start lg:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-red-600 px-6 py-3 text-sm font-extrabold tracking-wide text-white shadow-soft ring-1 ring-white/10 transition hover:bg-brand-red-500"
          >
            🔴 Get a Free Quote
          </Link>
          <a
            href="tel:+18002995964"
            className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-white/10"
          >
            📞 Call or Text (800) 299-5964
          </a>
        </div>
      </div>
    </section>
  );
}

