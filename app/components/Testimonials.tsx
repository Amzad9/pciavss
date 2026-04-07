"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  date: string;
  quote: string;
  /** Path under `public/testimonials/`. Omit to show an initial letter instead. */
  avatarSrc?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "MJ H",
    date: "2025-03-30",
    quote:
      "Tony was so patient answering my mother's questions. She contacted multiple people and this company was the one she felt most comfortable going with. She has some security cameras she needed installed and the whole process went very smoothly 10/10 would reccomend",
    avatarSrc: "/testimonials/mjh.png",
  },
  {
    name: "Agustina Gomez (August)",
    date: "2022-06-04",
    quote:
      "did a quick and easy job. Didnt even take long to install. cleaned up after themselves did a splendid job overall. Very professional job.",
    avatarSrc: "/testimonials/Agustina.png",
  },
  {
    name: "Jasmine Pacheco",
    date: "2022-11-30",
    quote:
      "Awesome work, fast and very reliable. Cameras are working just great. Will definitely recommend this business to other friends and family!!",
    avatarSrc: "/testimonials/jasmine.png",
  },
];

function testimonialInitial(name: string) {
  const withoutParens = name.replace(/\([^)]*\)/g, "").trim();
  const match = withoutParens.match(/[A-Za-z]/u);
  return match ? match[0]!.toUpperCase() : "?";
}

function TestimonialQuote({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  /** Pessimistic true until we measure; avoids showing full long text before clamp. */
  const [overflows, setOverflows] = useState(true);
  const pRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (expanded) return;
    const el = pRef.current;
    if (!el) return;
    const over = el.scrollHeight > el.clientHeight + 2;
    setOverflows(over);
  }, [quote, expanded]);

  const clamp = overflows && !expanded;

  return (
    <div>
      <div className="min-h-24">
        <p
          ref={pRef}
          className={`mt-2 text-[15px] leading-6 text-white/75 ${clamp ? "line-clamp-4" : ""}`}
        >
          “{quote}”
        </p>
      </div>
      {overflows ? (
        <button
          type="button"
          className="mt-2 text-left text-[13px] font-extrabold uppercase tracking-wide text-brand-gold-500 underline decoration-brand-gold-500/40 underline-offset-2 hover:text-brand-gold-400"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-linear-to-r from-brand-ink-950 via-brand-ink-900 to-brand-ink-950 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <div className="h-[4px] w-12 rounded bg-brand-gold-500" aria-hidden="true" />
          <h3 className="mx-4 font-display text-center text-[30px] font-extrabold uppercase tracking-[0.14em] text-brand-gold-500 sm:text-[36px] md:text-[40px]">
            CLIENT SUCCESS STORIES
          </h3>
          <div className="h-[4px] w-12 rounded bg-brand-gold-500" aria-hidden="true" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="flex items-start gap-5">
              <div className="shrink-0">
                {t.avatarSrc ? (
                  <Image
                    src={t.avatarSrc}
                    alt=""
                    width={84}
                    height={84}
                    className="h-[84px] w-[84px] rounded-full object-cover ring-4 ring-white/10"
                    sizes="84px"
                  />
                ) : (
                  <div
                    className="grid h-[84px] w-[84px] place-items-center rounded-full bg-brand-gold-500/20 ring-4 ring-white/10"
                    aria-hidden="true"
                  >
                    <span className="font-display text-[28px] font-extrabold text-brand-gold-500">
                      {testimonialInitial(t.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 text-brand-gold-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} aria-hidden="true" className="text-[16px]">
                      ★
                    </span>
                  ))}
                </div>
                <TestimonialQuote quote={t.quote} />
                <div className="mt-2 text-[15px] font-semibold text-white">
                  {t.name}
                  <span className="ml-2 text-[13px] font-semibold text-white/55">
                    {t.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
