"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Move this to your data file or keep it here
const faqs = [
  {
    question: "Can I control my alarm system from my phone?",
    answer: "Yes, our systems come with a mobile app that allows you to arm, disarm, and monitor your system from anywhere. You'll receive real-time notifications and can manage multiple locations from a single dashboard."
  },
  {
    question: "Do you install both wired and wireless alarm systems?",
    answer: "Absolutely! We offer both wired, wireless, and hybrid solutions. Our team will assess your property and recommend the best option based on your specific needs, building structure, and budget."
  },
  {
    question: "Can my alarm system integrate with cameras and access control?",
    answer: "Yes, our alarm systems seamlessly integrate with IP cameras, access control systems, and other security devices. This creates a comprehensive security ecosystem that can be managed from a single platform."
  },
  {
    question: "Do you offer 24/7 monitoring?",
    answer: "Yes, we partner with UL-listed central monitoring stations that provide 24/7/365 monitoring. When an alarm is triggered, our monitoring partners immediately verify the alert and dispatch the appropriate authorities to your location."
  },
  {
    question: "What happens if the internet goes down?",
    answer: "Our systems are designed with failover options. They utilize cellular backup and battery backups to ensure your system remains operational and connected even during internet outages or power failures."
  },
  {
    question: "Can you take over my existing alarm system?",
    answer: "Yes, in most cases we can take over and upgrade your existing alarm system. Our technicians will evaluate your current equipment and determine the best approach to integrate it with our monitoring and support services."
  },
  {
    question: "Can different employees have their own codes?",
    answer: "Yes, our systems support multiple user codes with customizable permissions. You can give each employee their own unique code, set access schedules, and easily add or remove users as needed."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <h3 className="text-center text-2xl sm:text-3xl font-black uppercase">
        FREQUENTLY ASKED QUESTIONS
      </h3>
      <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded bg-red-600"></div>

      <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="rounded-md border border-gray-200 bg-white transition hover:border-gray-300">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-7 py-2 sm:py-3 text-left transition"
              >
                <span className="text-sm sm:text-base font-semibold pr-4">
                  {faq.question}
                </span>
                <div className="text-xl sm:text-2xl font-bold flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                  )}
                </div>
              </button>
              
              {/* Answer - Expandable */}
              {isOpen && (
                <div className="px-4 sm:px-6 lg:px-7 pb-4 sm:pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}