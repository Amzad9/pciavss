import Link from "next/link";
import { blogPosts } from "./posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "PCI AVSS blog: security cameras, monitoring, alarms, intrusion protection, and mobile surveillance trailers.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-brand-ink-950 text-white">
      <section className="relative overflow-hidden bg-brand-ink-900 px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-ink-950 via-brand-ink-950/75 to-brand-ink-950/45" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,122,31,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              PCI AVSS Blog
            </p>
            <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.9] text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl">
              Security Tips,
              <br />
              Systems &amp; Best Practices
            </h1>
            <p className="mt-5 max-w-[48rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Read articles on surveillance, monitoring, intrusion protection,
              and mobile security deployments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-white/10 bg-brand-ink-900/70 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] transition hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-gold-500">
                    {post.category}
                  </div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    {post.dateLabel}
                  </div>
                </div>

                <h2 className="font-display mt-4 text-[22px] font-extrabold leading-tight text-white group-hover:text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/70">
                  {post.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-white/80">
                  Read Article
                  <span
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-white/25"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
