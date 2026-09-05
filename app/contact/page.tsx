"use client";

import { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  Award,
  CheckCircle2,
  Lock,
  AlertCircle,
} from "lucide-react";
import { siteContact } from "../components/siteConfig";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    service: "Security Cameras",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_uv0u256";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_e744753";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "eidU4pIY44tKGyFwl";

      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      } else {
        const templateParams = {
          from_name: formData.fullName,
          name: formData.fullName,
          from_email: formData.emailAddress,
          reply_to: formData.emailAddress,
          phone: formData.phoneNumber,
          company: formData.companyName || "N/A",
          service: formData.service || "General Inquiry",
          message: formData.message,
        };
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      const msg = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* 1. HERO SECTION WITH CAMERA BACKGROUND */}
      <section className="relative overflow-hidden bg-[#0c0c0c] py-20 sm:py-28 text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/camera installation.jpg"
            alt="Security camera surveillance"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
              CONTACT US
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              We’re Here to Help
              <br />
              <span className="text-white">Secure What Matters Most</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Have questions about your security system or ready to request a free quote? Our team is here to help.
            </p>

            {/* 3 Value Proposition Badges */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-red-600 bg-red-600/10 text-red-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Fast Response
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 leading-snug">
                    We respond quickly to every inquiry.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-red-600 bg-red-600/10 text-red-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Expert Solutions
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 leading-snug">
                    Customized security for your needs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-red-600 bg-red-600/10 text-red-500">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Trusted Local Team
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 leading-snug">
                    20+ years protecting businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & CONTACT INFO SECTION */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT COLUMN: SEND US A MESSAGE FORM (7 COLS) */}
            <div className="p-6 sm:p-10 lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Fill out the form and a security specialist will get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-3 text-lg font-bold text-green-900">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="mt-2 text-sm text-green-700">
                    Your message has been sent successfully. An AVSS security specialist will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        service: "Security Cameras",
                        message: "",
                      });
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-green-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Failed to send message</p>
                        <p className="mt-0.5 text-xs text-red-600">{errorMessage}</p>
                      </div>
                    </div>
                  )}
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="from_name"
                        required
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number *"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address *"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                    >
                      <option value="I'm interested in...">I'm interested in...</option>
                      <option value="Security Cameras">Security Cameras</option>
                      <option value="Access Control">Access Control</option>
                      <option value="Mobile Security Trailers">Mobile Security Trailers</option>
                      <option value="Alarm Systems">Alarm Systems</option>
                      <option value="Structured Wiring & Prewire">Structured Wiring &amp; Prewire</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project or needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white p-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                    />
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/50"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                  </button>

                  {/* Security Note */}
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-gray-500">
                    <Lock className="h-3.5 w-3.5 text-gray-400" />
                    Your information is secure and will never be shared.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: CONTACT INFORMATION (5 COLS) */}
            <div className="bg-[#f8f9fa] p-6 sm:p-10 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>

                <div className="mt-8 space-y-7">
                  {/* 1. Call Us */}
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Call Us</h3>
                      <a
                        href={siteContact.phoneHref}
                        className="mt-0.5 block text-base font-bold text-red-600 hover:underline"
                      >
                        {siteContact.phone}
                      </a>
                      <p className="mt-0.5 text-xs text-gray-600">
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* 2. Email Us */}
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Email Us</h3>
                      <a
                        href={`mailto:${siteContact.emailShowroom}`}
                        className="mt-0.5 block text-base font-bold text-red-600 hover:underline"
                      >
                        {siteContact.emailShowroom}
                      </a>
                      <p className="mt-0.5 text-xs text-gray-600">
                        We reply within one business day.
                      </p>
                    </div>
                  </div>

                  {/* 3. Our Location */}
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Our Location</h3>
                      <p className="mt-1 text-sm font-bold text-gray-900 leading-snug">
                        1090 North Tustin Ave
                        <br />
                        Anaheim, CA 92807
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Serving Orange County &amp; Surrounding Areas
                      </p>
                    </div>
                  </div>

                  {/* 4. Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-sm">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Business Hours</h3>
                      <p className="mt-1 text-xs font-semibold text-gray-800 leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. GOOGLE MAPS EMBED SECTION */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="h-[380px] w-full">
              <iframe
                title="AVSS Location Map"
                src="https://www.google.com/maps?q=1090%20North%20Tustin%20Ave%2C%20Anaheim%2C%20CA%2092807&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
