"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Are units battery-backed?",
    answer:
      "Many trailer deployments can be scheduled quickly once the site survey is complete. Timing depends on access, power needs, and whether the site needs solar, cellular, or both.",
  },
  {
    question: "How long can trailers run without charging?",
    answer:
      "Yes. We can configure solar-assisted and battery-backed options for off-grid sites, with cellular connectivity when hardline internet is not available.",
  },
  {
    question: "Do you provide solar power?",
    answer:
      "Yes. Mobile trailers are designed for relocatable coverage, so they can move as your project phases or site priorities change.",
  },
  {
    question: "Do you provide move support between sites?",
    answer:
      "Yes. Trailer systems can be paired with live remote monitoring, alert workflows, and two-way audio responses where needed.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-16 sm:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-display text-center text-2xl font-extrabold uppercase tracking-wide text-black sm:text-3xl lg:text-4xl">
          FAQ
        </h2>

        <div className="mt-10 divide-y divide-neutral-300 border-y border-neutral-300">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold uppercase tracking-wide text-black sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-black transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-7 text-black/75 sm:text-base">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
