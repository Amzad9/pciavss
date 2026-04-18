import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getServiceBySlug,
  serviceCards,
  serviceSectionId,
} from "../../lib/serviceCards";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCards.map((c) => ({ slug: serviceSectionId(c.title) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Services",
      description:
        "Commercial security cameras, video monitoring, mobile trailers, alarms, access control, and commercial audio in Southern California.",
    };
  }

  return {
    title: service.title,
    description: service.body,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-brand-ink-950 text-white">
        <section className="container mx-auto px-6 py-16">
          <p className="text-white/70">Service not found.</p>
          <Link
            href="/services"
            className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Back to Services
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-white/70 hover:text-white"
              >
                ← All Services
              </Link>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
                AVSS Service
              </p>

              <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-[0.92] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-[40rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {service.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(220,38,38,0.30)] transition hover:brightness-105 sm:px-8 sm:text-base"
                >
                  Get a Free Site Survey
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-5">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="rounded-[24px] border border-white/10 bg-brand-ink-900/70 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:p-8">
              {service.sections.map((s) => (
                <section
                  key={s.heading}
                  className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
                >
                  <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-brand-gold-500">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/75">
                    {s.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-[24px] border border-white/10 bg-brand-ink-950 p-6 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
                Related services
              </p>
              <ul className="mt-4 space-y-2">
                {serviceCards
                  .filter((c) => serviceSectionId(c.title) !== slug)
                  .slice(0, 4)
                  .map((c) => (
                    <li key={c.title}>
                      <Link
                        href={`/services/${serviceSectionId(c.title)}`}
                        className="text-[15px] font-semibold uppercase tracking-wide text-white/80 transition hover:text-white"
                      >
                        {c.title} →
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
              >
                View all services
              </Link>
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-brand-ink-950 p-6 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-steel-300">
                Serving Southern California
              </p>
              <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight text-white">
                Orange, Los Angeles &amp; Riverside
              </h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                Request a walkthrough and we&apos;ll recommend equipment,
                placement, and monitoring options aligned with your goals.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(220,38,38,0.28)] transition hover:brightness-105"
              >
                Request Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
