"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What types of alarm systems do you install?",
    answer:
      "We install a wide range of alarm systems including intrusion detection, motion sensors, door and window sensors, glass-break detectors, and integrated smart home alarm panels for both residential and commercial properties.",
  },
  {
    question: "Do your alarm systems include 24/7 monitoring?",
    answer:
      "Yes. We offer professional 24/7 central station monitoring that dispatches emergency services immediately when an alarm is triggered, ensuring a rapid response at any hour.",
  },
  {
    question: "Can the alarm system be integrated with my existing cameras?",
    answer:
      "Absolutely. Our alarm systems can be integrated with your existing CCTV or IP camera setup, providing a unified security solution with coordinated alerts and live video verification.",
  },
  {
    question: "Are your systems compatible with smart home platforms?",
    answer:
      "Yes. We support integration with popular smart home ecosystems so you can arm, disarm, and receive notifications directly from your smartphone or voice assistant.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed within a single day. Larger commercial projects may require additional time depending on the number of zones and the complexity of the system design.",
  },
  {
    question: "What happens if the power goes out?",
    answer:
      "All our alarm panels include battery backup to ensure continuous protection during power outages. Cellular communicators also keep the system connected even if the internet or phone line goes down.",
  },
  {
    question: "Can I add sensors or expand the system later?",
    answer:
      "Yes. Our systems are designed to be scalable. You can add sensors, keypads, and additional zones at any time as your security needs grow.",
  },
  {
    question: "Do you offer maintenance and service contracts?",
    answer:
      "Yes. We offer ongoing service and maintenance plans to keep your alarm system in peak condition, including annual inspections, battery replacements, and priority response for service calls.",
  },
  {
    question: "Is professional monitoring required?",
    answer:
      "Professional monitoring is optional but strongly recommended. Self-monitoring is also available through our mobile app if you prefer to manage alerts yourself.",
  },
  {
    question: "Are your alarm systems permit-compliant?",
    answer:
      "Yes. We ensure all installations meet local jurisdiction requirements and can assist with the permit application process where required.",
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
