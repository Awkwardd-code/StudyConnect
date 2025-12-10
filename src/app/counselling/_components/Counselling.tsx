"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import { buildWhatsAppMessage, openWhatsAppChat } from "@/lib/whatsapp";

const CounsellingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    program: "",
    university: "",
    ielts: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = buildWhatsAppMessage(
      "Hello Study Connect Malaysia team! I would like to book a Malaysia consultation.",
      [
        { label: "Full Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Education", value: formData.education },
        { label: "Program", value: formData.program },
        { label: "Preferred University", value: formData.university },
        { label: "IELTS/English Proficiency", value: formData.ielts },
      ]
    );

    openWhatsAppChat(message);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      {/* Enhanced Hero Header - Malaysia Theme */}
      <div className="relative h-72 sm:h-80 overflow-hidden rounded-b-[40px] bg-linear-to-br from-blue-900 via-blue-800 to-red-900">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/40 to-red-900/40" />
        <img
          src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=1400&q=80"
          alt="Malaysian university campus"
          className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

        {/* Malaysia Flag Elements */}
        <div className="absolute top-6 right-6 opacity-30">
          <div className="flex space-x-4">
            <span className="text-3xl">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-8 w-auto mr-1"
              />
            </span>
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <CheckCircle
                className="h-5 w-5 text-green-400"
                fill="currentColor"
              />
              <span className="text-sm font-medium text-white">
                100% Free Malaysia Consultation
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Free Malaysia Education{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
                Consultation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Get expert guidance from our Malaysia education specialists and
              start your study journey today
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">0,000+ Students in Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm">10+ Malaysian Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" fill="currentColor" />
                <span className="text-sm">98% Visa Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Form Container */}
      <div className="mx-auto -mt-12 sm:-mt-16 max-w-2xl px-4 sm:px-6">
        <div className="group relative transform transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-400 to-red-400 opacity-20 blur-xl transition-opacity group-hover:opacity-30" />
          <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(59,130,246,0.15)] backdrop-blur-sm border border-blue-100">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-r from-blue-600 to-red-600 mb-4 shadow-lg">
                <span className="text-xl sm:text-2xl">
                  <img
                    src="/logos/malaysia/malaysia.webp"
                    alt="Malaysia Flag"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                Start Your Malaysia Study Journey
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the form below and get personalized Malaysia guidance
                within 24 hours
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle
                    className="h-8 w-8 sm:h-10 sm:w-10 text-green-500"
                    fill="currentColor"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Your Malaysia consultation request has been submitted. Our
                  team will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      education: "",
                      program: "",
                      university: "",
                      ielts: "",
                    });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  Book Another Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+8801XXXXXXXXX or +6011XXXXXXXX"
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Educational Qualification *
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                      required
                    >
                      <option value="">Select your education level</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma/Certificate</option>
                      <option value="bachelors">Bachelor&apos;s Degree</option>
                      <option value="masters">Master&apos;s Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Interested Programme *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                      required
                    >
                      <option value="">Select programme</option>
                      <option value="foundation">Foundation</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="masters">Master&apos;s</option>
                      <option value="masters-research">
                        Master&apos;s by Research
                      </option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Preferred University in Malaysia
                    </label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                    >
                      <option value="">Select a university</option>
                      <option value="any">
                        Any Top Malaysian University 🇲🇾
                      </option>
                      <option value="um">University of Malaya</option>
                      <option value="monash">Monash University Malaysia</option>
                      <option value="taylors">Taylor&apos;s University</option>
                      <option value="sunway">Sunway University</option>
                      <option value="utm">
                        Universiti Teknologi Malaysia (UTM)
                      </option>
                      <option value="notsure">
                        Not sure yet – Need guidance
                      </option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    IELTS/English Proficiency
                  </label>
                  <select
                    name="ielts"
                    value={formData.ielts}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-blue-100 px-4 py-3 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 group-hover:border-blue-300 cursor-pointer"
                  >
                    <option value="">Not taken yet</option>
                    <option value="5.5">IELTS 5.5+</option>
                    <option value="6">IELTS 6.0+</option>
                    <option value="6.5">IELTS 6.5+</option>
                    <option value="7">IELTS 7.0+</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-red-600 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.6)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-red-700 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Malaysia Consultation</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-500">
                    By submitting this form, you agree to our terms and
                    conditions. We respect your privacy and will never share
                    your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer p-4 rounded-2xl bg-linear-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-3">
              <CheckCircle
                className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                fill="currentColor"
              />
            </div>
            <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
              100% Free Service
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              No hidden charges for Malaysia consultation
            </p>
          </div>

          <div className="text-center group cursor-pointer p-4 rounded-2xl bg-linear-to-b from-white to-red-50 border border-red-100 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-3">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
              Malaysia Specialists
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              1+ years focused on Malaysian education
            </p>
          </div>

          <div className="text-center group cursor-pointer p-4 rounded-2xl bg-linear-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors mb-3">
              <Award
                className="h-5 w-5 sm:h-6 sm:w-6 text-red-600"
                fill="currentColor"
              />
            </div>
            <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
              98% Success Rate
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Malaysian student visa success rate
            </p>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-linear-to-r from-blue-900 to-red-900 p-6 text-white text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-3">
            Need Immediate Help?
          </h3>
          <p className="text-blue-200 mb-4 text-sm sm:text-base">
            Call or message our Malaysia education hotline for instant
            assistance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <span className="text-xl">📞</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200">Malaysia Office</p>
                <p className="font-bold">+6011 2405 4294</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <span className="text-xl">💬</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-blue-200">WhatsApp / Email</p>
                <p className="font-bold">studyconnect.bd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;
