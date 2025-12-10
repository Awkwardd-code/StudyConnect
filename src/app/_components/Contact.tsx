/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, type ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { buildWhatsAppMessage, openWhatsAppChat } from "@/lib/whatsapp";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  });

  type InputEvent = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;

  const handleChange =
    (field: keyof typeof formData) => (event: InputEvent) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const sendContactInquiry = () => {
    const message = buildWhatsAppMessage(
      "Hello Study Connect Malaysia team! I would love to book a free consultation.",
      [
        { label: "Full Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Preferred University", value: formData.university },
        { label: "Consultation Notes", value: formData.message },
      ]
    );
    openWhatsAppChat(message);
  };
  return (
    <section
      id="contact"
      className="rounded-[36px] bg-linear-to-br from-blue-50 via-white to-red-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]"
    >
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] items-stretch">
        {/* Left side: hero + info */}
        <div className="relative overflow-hidden rounded-[28px] bg-blue-900">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Counsellor discussing study plans"
            className="h-full w-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-900/70 to-transparent" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <span className="text-base">🇲🇾</span>
                </span>
                <span>Study Connect • Malaysia Study Support</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                Talk to a Malaysia Education Expert
              </h2>
              <p className="max-w-md text-sm sm:text-base text-blue-100">
                Get personalized guidance on universities, courses, EMGS, and
                visa — completely <span className="font-semibold">FREE</span> for
                Bangladeshi students planning to study in Malaysia.
              </p>
            </div>

            <div className="mt-4 space-y-4 text-sm sm:text-base">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
                  <p className="text-xs sm:text-sm text-blue-100">Response Time</p>
                  <p className="mt-1 flex items-center gap-2 text-sm sm:text-base font-semibold">
                    <Clock className="h-4 w-4" />
                    Within 24 hours
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 sm:p-4 backdrop-blur-sm">
                  <p className="text-xs sm:text-sm text-blue-100">Visa Success</p>
                  <p className="mt-1 text-sm sm:text-base font-semibold">98% Approval</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-white/10 mt-4 text-xs sm:text-sm text-blue-100">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <Phone className="h-4 w-4" />
                  <span>
                    WhatsApp / Call (Malaysia):{" "}
                    <span className="font-semibold">+60 11-2405 4294</span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <Phone className="h-4 w-4" />
                  <span>
                    Bangladesh Office:{" "}
                    <span className="font-semibold">
                      +880 1677-782567, +880 1767-681478
                    </span>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <Mail className="h-4 w-4" />
                  <span>
                    Email:{" "}
                    <span className="font-semibold">
                      studyconnect.bd@gmail.com
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <div className="rounded-[28px] border border-[#e1e6ff] bg-white/90 p-6 sm:p-8 shadow-[0_20px_70px_rgba(15,27,58,0.08)] backdrop-blur">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.4)]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-500">
                Free Consultation
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-[#0a0f2c]">
                Contact Study Connect
              </p>
            </div>
          </div>

          <p className="mt-2 text-sm sm:text-base text-[#4b4f6a]">
            Book a{" "}
            <span className="font-semibold text-blue-700">FREE 1:1 counselling</span>{" "}
            session for Malaysia — admission, EMGS, and visa support included.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              sendContactInquiry();
            }}
          >
            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs sm:text-sm font-semibold text-[#41445f]">
                Full Name
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-[#d9def5] bg-white px-4 py-3 text-sm sm:text-base text-[#0a0f2c] shadow-sm focus:border-[#4d38ff] focus:ring-2 focus:ring-[#4d38ff]/20 focus:outline-none transition-all"
                  required
                />
              </label>
              <label className="block text-xs sm:text-sm font-semibold text-[#41445f]">
                Email
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-2xl border border-[#d9def5] bg-white px-4 py-3 text-sm sm:text-base text-[#0a0f2c] shadow-sm focus:border-[#4d38ff] focus:ring-2 focus:ring-[#4d38ff]/20 focus:outline-none transition-all"
                  required
                />
              </label>
            </div>

            {/* Phone + Preferred Universities */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs sm:text-sm font-semibold text-[#41445f]">
                Phone Number
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  placeholder="With country code (e.g. +880...)"
                  className="mt-2 w-full rounded-2xl border border-[#d9def5] bg-white px-4 py-3 text-sm sm:text-base text-[#0a0f2c] shadow-sm focus:border-[#4d38ff] focus:ring-2 focus:ring-[#4d38ff]/20 focus:outline-none transition-all"
                  required
                />
              </label>

              <label className="block text-xs cursor-pointer sm:text-sm font-semibold text-[#41445f]">
                Preferred Universities (Malaysia)
                  <select
                    value={formData.university}
                    onChange={handleChange("university")}
                    className="mt-2 cursor-pointer w-full rounded-2xl border border-[#d9def5] bg-white px-4 py-3 text-sm sm:text-base text-[#0a0f2c] shadow-sm focus:border-[#4d38ff] focus:ring-2 focus:ring-[#4d38ff]/20 focus:outline-none transition-all"
                  >
                  <option value="" disabled>
                    Select your preferred university
                  </option>
                  <option value="Any">
                    Any Top Malaysian University 🇲🇾
                  </option>
                  <option value="UM">University of Malaya (UM)</option>
                  <option value="UKM">
                    Universiti Kebangsaan Malaysia (UKM)
                  </option>
                  <option value="UPM">
                    Universiti Putra Malaysia (UPM)
                  </option>
                  <option value="USM">
                    Universiti Sains Malaysia (USM)
                  </option>
                  <option value="UTM">
                    Universiti Teknologi Malaysia (UTM)
                  </option>
                  <option value="Monash">Monash University Malaysia</option>
                  <option value="Taylors">Taylor&apos;s University</option>
                  <option value="Sunway">Sunway University</option>
                </select>
                <p className="mt-1 text-[11px] sm:text-xs text-[#7b7f99]">
                  You can mention multiple universities in the message below if needed.
                </p>
              </label>
            </div>

            <label className="block text-xs sm:text-sm font-semibold text-[#41445f]">
              What would you like help with?
                <textarea
                  value={formData.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your preferred course, intake, budget, and questions..."
                  className="mt-2 w-full min-h-[100px] rounded-2xl border border-[#d9def5] bg-white px-4 py-3 text-sm sm:text-base text-[#0a0f2c] shadow-sm focus:border-[#4d38ff] focus:ring-2 focus:ring-[#4d38ff]/20 focus:outline-none transition-all resize-none"
                />
            </label>

            <div className="mt-4 space-y-3">
              <button
                type="submit"
                className="group inline-flex cursor-pointer w-full items-center justify-center gap-2 rounded-md bg-linear-to-r from-blue-600 to-red-600 py-3.5 text-sm sm:text-lg font-semibold text-white shadow-[0_20px_45px_rgba(39,27,124,0.35)] transition-all hover:shadow-[0_25px_55px_rgba(39,27,124,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <span>Book My Free Consultation</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-0.5 group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              <p className="text-[11px] sm:text-xs text-[#7b7f99] text-center">
                By submitting, you agree to be contacted via WhatsApp / phone / email
                regarding study opportunities in Malaysia by Study Connect.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
