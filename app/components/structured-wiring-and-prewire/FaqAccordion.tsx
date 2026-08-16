"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is structured wiring and prewiring?",
    answer:
      "Structured wiring is a standardized cabling infrastructure designed to support data, voice, security cameras, access control, and AV systems. Prewiring occurs during initial construction or remodeling before drywall is installed, allowing clean, cost-effective cable routing.",
  },
  {
    question: "What is the difference between CAT6 and CAT6A cabling?",
    answer:
      "CAT6 cabling supports up to 1 Gbps speeds over 100 meters (or 10 Gbps up to 55 meters). CAT6A is shielded and supports 10 Gbps speeds up to 100 meters with higher bandwidth (500 MHz), making it ideal for future-proof commercial and high-density deployments.",
  },
  {
    question: "When should prewire take place during construction?",
    answer:
      "Prewiring should take place after framing, plumbing, and electrical rough-in are complete, but strictly before insulation and drywall are installed. This ensures easy access to wall cavities and ceilings.",
  },
  {
    question: "Do you label and test all installed cables?",
    answer:
      "Yes. Every run is professionally terminated, labeled at both ends according to TIA/EIA standards, and tested using certified cable testers to verify performance and continuity before system handoff.",
  },
  {
    question: "Can you re-organize and clean up existing messy server racks?",
    answer:
      "Absolutely. We offer server rack cleanup, patch panel re-termination, custom cable length dressing, and comprehensive cable labeling for existing commercial server rooms and IDF closets.",
  },
  {
    question: "Do you provide structured wiring for both residential and commercial buildings?",
    answer:
      "Yes! We design and install low-voltage wiring for custom homes, multi-family residences, retail stores, office buildings, warehouses, healthcare facilities, and industrial locations.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-16 sm:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-black sm:text-3xl lg:text-4xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-red-600 rounded-full" />
        </div>

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
                    className={`h-5 w-5 shrink-0 text-black transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
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
