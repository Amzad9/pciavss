import Link from "next/link";
import { getBlogPost, blogPosts } from "../posts";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog",
      description:
        "PCI AVSS blog: security cameras, monitoring, alarms, intrusion protection, and mobile surveillance trailers.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-brand-ink-950 text-white">
        <section className="container mx-auto px-6 py-16">
          <p className="text-white/70">Post not found.</p>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Back to Blog
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,122,31,0.14)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-white/70 hover:text-white"
            >
              ← Back to Blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-steel-300">
                {post.category}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {post.dateLabel}
                {post.readTimeLabel ? ` • ${post.readTimeLabel}` : ""}
              </span>
            </div>

            <h1 className="font-display mt-5 text-4xl font-extrabold uppercase leading-[0.92] text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[48rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink-800 px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="rounded-[24px] border border-white/10 bg-brand-ink-900/70 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:p-8">
              {post.sections.map((s) => (
                <section key={s.heading} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
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
                Need Help?
              </p>
              <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight text-white">
                Get a Free Site Survey
              </h3>
              <p className="mt-3 text-base leading-7 text-white/70">
                Tell us what you&apos;re protecting and we&apos;ll recommend a
                practical setup for cameras, monitoring, alarms, and access
                control.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-brand-gold-500 bg-linear-to-b from-brand-gold-500 to-brand-gold-600 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,122,31,0.28)] transition hover:brightness-105"
              >
                Request Quote
              </Link>
              <Link
                href="/packages"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
              >
                View Packages
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
