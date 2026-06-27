"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Can I view access logs from my phone?",
    answer:
      "Yes, remote mobile access is included in most systems. We can set up secure apps so you can view activity, manage users, and review events from iOS and Android devices.",
  },
  {
    question: "How long are access logs stored?",
    answer:
      "Retention depends on the controller, storage, and audit settings. We recommend a setup that fits your review needs and internal policies.",
  },
  {
    question: "Do you provide battery-backed systems?",
    answer:
      "Yes, we install battery-backed and fail-safe or fail-secure options depending on the door and life-safety requirements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, preventive maintenance and head-end support are available. We help keep permissions, firmware, and door hardware in good shape.",
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
