"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Can I view cameras from my phone?",
    answer:
      "Yes, remote mobile access is included in most systems. We set up secure apps so you can view live and recorded footage from iOS and Android devices.",
  },
  {
    question: "How long is footage stored?",
    answer:
      "Storage duration depends on your recorder, camera count, resolution, and settings. We recommend local NVR, cloud, or hybrid options based on your retention needs.",
  },
  {
    question: "Do you install cameras outdoors?",
    answer:
      "Yes, we install weather-resistant outdoor surveillance systems rated for Southern California heat, rain, and dust.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, preventive maintenance and head-end recording services are available. We help keep lenses clean, firmware current, and storage healthy.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-black sm:text-4xl">
          FAQ
        </h2>

        <div className="mt-10 divide-y divide-neutral-300 border-t border-neutral-300">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-neutral-300">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
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
                  <p className="pb-5 text-base leading-7 text-black/80">
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
