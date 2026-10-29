"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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

const RECAPTCHA_SITE_KEY = "6Ldrce4tAAAAAC5udJVSQeucUfRcVY214LEmMiuV";
const RATE_LIMIT_STORAGE_KEY = "avss_contact_submissions";
const SUBMISSION_COOLDOWN_SECONDS = 45; // Minimum 45s between submissions
const MAX_SUBMISSIONS_PER_HOUR = 4; // Max 4 submissions per 60 minutes

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    service: "Security Cameras",
    message: "",
    city: "",
  });

  // Lead Source Attribution Tracking State
  const [trackingData, setTrackingData] = useState({
    gclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    landing_page: "",
    referring_page: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const currentPath = window.location.pathname + window.location.search;
      const currentReferrer = document.referrer || "Direct";

      const gclid = urlParams.get("gclid") || sessionStorage.getItem("avss_gclid") || "";
      const utm_source = urlParams.get("utm_source") || sessionStorage.getItem("avss_utm_source") || "";
      const utm_medium = urlParams.get("utm_medium") || sessionStorage.getItem("avss_utm_medium") || "";
      const utm_campaign = urlParams.get("utm_campaign") || sessionStorage.getItem("avss_utm_campaign") || "";
      const landing_page = sessionStorage.getItem("avss_landing_page") || currentPath;
      const referring_page = sessionStorage.getItem("avss_referring_page") || currentReferrer;

      // Update sessionStorage with active URL parameters
      if (gclid) sessionStorage.setItem("avss_gclid", gclid);
      if (utm_source) sessionStorage.setItem("avss_utm_source", utm_source);
      if (utm_medium) sessionStorage.setItem("avss_utm_medium", utm_medium);
      if (utm_campaign) sessionStorage.setItem("avss_utm_campaign", utm_campaign);
      if (!sessionStorage.getItem("avss_landing_page")) sessionStorage.setItem("avss_landing_page", landing_page);
      if (!sessionStorage.getItem("avss_referring_page")) sessionStorage.setItem("avss_referring_page", referring_page);

      setTrackingData({
        gclid,
        utm_source,
        utm_medium,
        utm_campaign,
        landing_page,
        referring_page,
      });
    } catch {
      // Ignore sessionStorage issues
    }
  }, []);

  // Anti-spam states
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Rate Limiting check
  function checkRateLimit(): { allowed: boolean; message?: string } {
    if (typeof window === "undefined") return { allowed: true };
    try {
      const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
      const history: number[] = raw ? JSON.parse(raw) : [];
      const now = Date.now();

      // Keep only submissions within the last 60 minutes
      const recent = history.filter((timestamp) => now - timestamp < 3600 * 1000);

      // 1. Cooldown check
      if (recent.length > 0) {
        const lastSubmission = recent[recent.length - 1];
        const elapsedSeconds = Math.floor((now - lastSubmission) / 1000);
        if (elapsedSeconds < SUBMISSION_COOLDOWN_SECONDS) {
          const remaining = SUBMISSION_COOLDOWN_SECONDS - elapsedSeconds;
          return {
            allowed: false,
            message: `Please wait ${remaining} second${remaining > 1 ? "s" : ""} before submitting another inquiry.`,
          };
        }
      }

      // 2. Max hourly frequency check
      if (recent.length >= MAX_SUBMISSIONS_PER_HOUR) {
        return {
          allowed: false,
          message:
            "You have submitted multiple requests recently. Please wait a short while or call us directly at (800) 299-5964.",
        };
      }

      return { allowed: true };
    } catch {
      return { allowed: true };
    }
  }

  function recordSubmission() {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
      const history: number[] = raw ? JSON.parse(raw) : [];
      const now = Date.now();
      const recent = history.filter((timestamp) => now - timestamp < 3600 * 1000);
      recent.push(now);
      localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(recent));
    } catch {
      // Storage unavailable or disabled
    }
  }

  // Strict Form Validation
  function validateForm(): boolean {
    const errors: { [key: string]: string } = {};

    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      errors.fullName = "Full name is required.";
    } else if (trimmedName.length < 2) {
      errors.fullName = "Please enter at least 2 characters for your name.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const trimmedEmail = formData.emailAddress.trim();
    if (!trimmedEmail) {
      errors.emailAddress = "Email address is required.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.emailAddress = "Please enter a valid email address (e.g. name@company.com).";
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required.";
    } else if (phoneDigits.length < 10) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    const trimmedCity = formData.city.trim();
    if (!trimmedCity) {
      errors.city = "City is required.";
    } else if (trimmedCity.length < 2) {
      errors.city = "Please enter a valid city.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Honeypot check (Automated bots fill hidden fields)
    if (honeypot) {
      console.warn("Spam detected via honeypot trap.");
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
      return;
    }

    // 2. Strict client-side field validation
    if (!validateForm()) {
      setErrorMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    // 3. Rate limiting check
    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      setErrorMessage(rateLimit.message || "Too many submissions. Please wait a moment.");
      return;
    }

    // 4. Google reCAPTCHA Verification
    const recaptchaToken =
      typeof window !== "undefined" && (window as any).grecaptcha
        ? (window as any).grecaptcha.getResponse()
        : "";

    if (!recaptchaToken) {
      setErrorMessage("Please complete the 'I'm not a robot' reCAPTCHA verification below.");
      return;
    }

    setIsSubmitting(true);

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
          city: formData.city,
          "g-recaptcha-response": recaptchaToken,
          gclid: trackingData.gclid || "",
          utm_source: trackingData.utm_source || "",
          utm_medium: trackingData.utm_medium || "",
          utm_campaign: trackingData.utm_campaign || "",
          landing_page: trackingData.landing_page || "",
          referring_page: trackingData.referring_page || "",
        };
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      // Record successful submission for rate limiting
      recordSubmission();
      setSubmitted(true);

      // Fire Google Ads conversion event only after successful submission and EmailJS response
      if (typeof window !== "undefined") {
        const conversionData = {
          send_to: "AW-18437293351/4RuaCPKS_PAcEKeKy9dE",
          value: 1.0,
          currency: "USD",
        };

        if (typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "conversion", conversionData);
        } else if (Array.isArray((window as any).dataLayer)) {
          (window as any).dataLayer.push(["event", "conversion", conversionData]);
        }
      }
    } catch (err: unknown) {
      console.error("EmailJS submission error:", err);
      // Reset reCAPTCHA so the user can re-try
      if (typeof window !== "undefined" && (window as any).grecaptcha) {
        try {
          (window as any).grecaptcha.reset();
        } catch {
          // ignore
        }
      }
      const msg = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Load Google reCAPTCHA v2 Script */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      {/* 1. HERO SECTION WITH CAMERA BACKGROUND */}
      <section className="relative overflow-hidden bg-[#0c0c0c] py-20 sm:py-28 text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/camera-installation.jpg"
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
                      setFieldErrors({});
                      setHoneypot("");
                      setFormData({
                        fullName: "",
                        companyName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        service: "Security Cameras",
                        message: "",
                        city: "",
                      });
                      if (typeof window !== "undefined" && (window as any).grecaptcha) {
                        try {
                          (window as any).grecaptcha.reset();
                        } catch {
                          // ignore
                        }
                      }
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-green-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Honeypot hidden input to trap automated spam bots */}
                  <div
                    aria-hidden="true"
                    style={{ display: "none", position: "absolute", left: "-9999px" }}
                  >
                    <label htmlFor="company_fax">Do not fill this field</label>
                    <input
                      type="text"
                      id="company_fax"
                      name="company_fax"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Lead Source Attribution Tracking Hidden Fields */}
                  <input type="hidden" name="gclid" value={trackingData.gclid} />
                  <input type="hidden" name="utm_source" value={trackingData.utm_source} />
                  <input type="hidden" name="utm_medium" value={trackingData.utm_medium} />
                  <input type="hidden" name="utm_campaign" value={trackingData.utm_campaign} />
                  <input type="hidden" name="landing_page" value={trackingData.landing_page} />
                  <input type="hidden" name="referring_page" value={trackingData.referring_page} />

                  {errorMessage && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">Notice</p>
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
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: "" });
                        }}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-2 ${
                          fieldErrors.fullName
                            ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                            : "border-gray-300 focus:border-red-600 focus:ring-red-600/20"
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
                      )}
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
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (fieldErrors.phoneNumber) setFieldErrors({ ...fieldErrors, phoneNumber: "" });
                        }}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-2 ${
                          fieldErrors.phoneNumber
                            ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                            : "border-gray-300 focus:border-red-600 focus:ring-red-600/20"
                        }`}
                      />
                      {fieldErrors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-600">{fieldErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address *"
                        value={formData.emailAddress}
                        onChange={(e) => {
                          setFormData({ ...formData, emailAddress: e.target.value });
                          if (fieldErrors.emailAddress) setFieldErrors({ ...fieldErrors, emailAddress: "" });
                        }}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-2 ${
                          fieldErrors.emailAddress
                            ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                            : "border-gray-300 focus:border-red-600 focus:ring-red-600/20"
                        }`}
                      />
                      {fieldErrors.emailAddress && (
                        <p className="mt-1 text-xs text-red-600">{fieldErrors.emailAddress}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: City & Service Selection */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="City *"
                        value={formData.city}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value });
                          if (fieldErrors.city) setFieldErrors({ ...fieldErrors, city: "" });
                        }}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:ring-2 ${
                          fieldErrors.city
                            ? "border-red-500 focus:border-red-600 focus:ring-red-600/20"
                            : "border-gray-300 focus:border-red-600 focus:ring-red-600/20"
                        }`}
                      />
                      {fieldErrors.city && (
                        <p className="mt-1 text-xs text-red-600">{fieldErrors.city}</p>
                      )}
                    </div>
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

                  {/* Google reCAPTCHA v2 Box */}
                  <div className="pt-1">
                    <div
                      className="g-recaptcha"
                      data-sitekey={RECAPTCHA_SITE_KEY}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/50 cursor-pointer disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                  </button>

                  {/* Security Note */}
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-gray-500">
                    <Lock className="h-3.5 w-3.5 text-gray-400" />
                    Protected by Google reCAPTCHA. Your information is secure.
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
