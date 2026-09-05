"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Are the mobile security trailers battery-backed?",
    answer:
      "Yes. Our mobile security trailers can be configured with battery backup and solar-assisted charging to help maintain operation when permanent power is unavailable. Power configurations are selected based on the site, equipment load, and expected operating conditions.",
  },
  {
    question: "How long can a security trailer operate without external power?",
    answer:
      "Runtime depends on the trailer configuration, battery capacity, camera load, available sunlight, and site conditions. Solar-assisted charging can extend operating time at remote locations. AVSS evaluates the site and recommends the appropriate power configuration before deployment.",
  },
  {
    question: "Do your mobile security trailers use solar power?",
    answer:
      "Yes. Solar-assisted power is available for locations where electrical service is limited or unavailable. Depending on the application, trailers can also incorporate battery backup, generator support, or shore power.",
  },
  {
    question: "How quickly can a mobile security trailer be deployed?",
    answer:
      "Many trailers can be deployed quickly after the site requirements have been confirmed. Timing depends on trailer availability, site access, power requirements, cellular connectivity, and the security coverage needed.",
  },
  {
    question: "Is internet service required?",
    answer:
      "Not necessarily. Mobile security trailers can use cellular connectivity for remote viewing, alerts, and monitoring when a reliable cellular signal is available. We evaluate connectivity during the site assessment to determine the best solution.",
  },
  {
    question: "Can I view the cameras remotely?",
    answer:
      "Yes. Compatible trailer systems can provide authorized users with remote access to live and recorded video from a smartphone, tablet, or computer, depending on the system configuration and connectivity.",
  },
  {
    question: "Can the trailers be monitored 24/7?",
    answer:
      "Yes. Depending on your security requirements, mobile security trailers can be configured for remote monitoring, event notifications, and live video verification. Monitoring options and any associated recurring costs are reviewed before deployment.",
  },
  {
    question: "Can a security trailer be moved to another job site?",
    answer:
      "Yes. One of the main advantages of a mobile surveillance trailer is flexibility. The trailer can be relocated as a construction project progresses or moved to another property when security needs change. AVSS can assist with relocation, positioning, and system verification.",
  },
  {
    question: "What types of properties are mobile security trailers designed for?",
    answer:
      "Mobile security trailers are well suited for construction sites, equipment yards, parking lots, commercial properties, temporary storage areas, special events, vacant properties, and remote locations where permanent security infrastructure may not be practical.",
  },
  {
    question: "How many cameras are installed on each trailer?",
    answer:
      "Camera quantity and configuration depend on the trailer and the coverage requirements of the property. AVSS evaluates the site, potential risk areas, entrances, equipment locations, and viewing distances to recommend the appropriate camera configuration.",
  },
  {
    question: "Do the trailers record video?",
    answer:
      "Yes. Trailer systems can be configured to record surveillance video for later review. Recording capacity and retention time depend on the equipment, storage configuration, camera settings, and project requirements.",
  },
  {
    question: "Do the trailers have lights or other visible deterrents?",
    answer:
      "Available configurations can include elevated camera masts, lighting, signage, and other visible security components designed to make surveillance clearly noticeable and help discourage unauthorized activity.",
  },
  {
    question: "Can I rent a security trailer for a short-term project?",
    answer:
      "Yes. AVSS offers flexible rental options for short-term and longer-term projects. Availability and pricing depend on the rental duration, trailer configuration, connectivity, monitoring requirements, and location.",
  },
  {
    question: "Are long-term mobile security trailer rentals available?",
    answer:
      "Yes. Long-term rental options are available for construction projects, commercial properties, equipment yards, and other locations requiring extended temporary surveillance. Contact AVSS for pricing based on the length and requirements of your project.",
  },
  {
    question: "Do you offer mobile security trailer rentals throughout Orange County?",
    answer:
      "Yes. AVSS provides mobile security trailer solutions for businesses, construction sites, commercial properties, and temporary locations throughout Orange County and surrounding Southern California areas. Contact us to confirm availability for your location.",
  },
  {
    question: "How do I know where the trailer should be positioned?",
    answer:
      "AVSS can perform a site assessment to evaluate entrances, equipment areas, blind spots, traffic patterns, lighting, and other security concerns. We then recommend trailer placement and camera positioning designed to provide effective coverage.",
  },
  {
    question: "How do I get a quote for a mobile security trailer?",
    answer:
      "Contact AVSS at (800) 299-5964 or request a site survey through our website. Tell us the property location, type of site, approximate rental period, and security concerns, and we'll recommend an appropriate trailer configuration.",
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
