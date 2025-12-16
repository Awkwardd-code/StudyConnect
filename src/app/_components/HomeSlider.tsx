/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { buildWhatsAppMessage, openWhatsAppChat } from "@/lib/whatsapp";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
};

const slides: Slide[] = [
  {
    title: "Asia Pacific University",
    subtitle: "Technology & Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?auto=format&fit=crop&w=1600&q=80",
    description: "Taman Teknologi Malaysia • Kuala Lumpur",
    link: "https://www.apu.edu.my",
  },
  {
    title: "INTI University",
    subtitle: "Global Education Network",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    description: "Nilai Campus • Subang Jaya Campus",
    link: "https://newinti.edu.my",
  },
  {
    title: "Binary University",
    subtitle: "Business & Entrepreneurship Focus",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1600&q=80",
    description: "Puchong • Selangor",
    link: "https://binary.edu.my",
  },
  {
    title: "Genovasi University",
    subtitle: "Innovation & Design Education",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
    link: "https://genovasi.edu.my",
  },
  {
    title: "Asia e University",
    subtitle: "Flexible Online & Blended Learning",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80",
    description: "Subang Jaya • Selangor",
    link: "https://www.aeu.edu.my",
  },
  {
    title: "Alpha University",
    subtitle: "Career-Focused Programs",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
    description: "Subang Jaya • Selangor",
    link: "https://alpha.edu.my",
  },
  {
    title: "Taylor's University",
    subtitle: "Premier Private University",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
    link: "https://www.taylors.edu.my",
  },
  {
    title: "Kings University",
    subtitle: "Urban Campus Experience",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1600&q=80",
    description: "Chow Kit • Kuala Lumpur",
    link: "https://kings.edu.my",
  },
  {
    title: "Lincoln University",
    subtitle: "Global Education Pathways",
    image:
      "https://images.unsplash.com/photo-1565684018286-b9bc5c4d5a19?auto=format&fit=crop&w=1600&q=80",
    description: "Kota Bharu • Kelantan",
    link: "https://lincoln.edu.my",
  },
  {
    title: "City University",
    subtitle: "Industry-Driven Learning",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
    link: "https://city.edu.my",
  },
];

type ApplicationFormData = {
  name: string;
  address: string;
  contactNumber: string;
  email: string;
  ssc: string;
  hsc: string;
  bachelor: string;
  masters: string;
  passport: "Yes" | "No";
  englishCertificate: "Yes" | "No";
};

const getInitialFormData = (): ApplicationFormData => ({
  name: "",
  address: "",
  contactNumber: "",
  email: "",
  ssc: "",
  hsc: "",
  bachelor: "",
  masters: "",
  passport: "No",
  englishCertificate: "No",
});

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>(getInitialFormData());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (direction: "prev" | "next") => {
    setCurrent((prev) => {
      if (direction === "prev") {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }

      return prev === slides.length - 1 ? 0 : prev + 1;
    });
  };

  const openApplicationForm = () => {
    setFormData(getInitialFormData());
    setIsFormOpen(true);
  };

  const closeApplicationForm = () => {
    setIsFormOpen(false);
  };

  const handleFormChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = buildWhatsAppMessage(
      "Hello Study Connect Malaysia team! I'm sharing my application details for a general enquiry.",
      [
        { label: "Name", value: formData.name },
        { label: "Address", value: formData.address },
        { label: "Contact number", value: formData.contactNumber },
        { label: "Email", value: formData.email },
        { label: "SSC (passing year & result)", value: formData.ssc },
        { label: "HSC (passing year & result)", value: formData.hsc },
        { label: "Bachelor (passing year & result)", value: formData.bachelor },
        { label: "Master's (passing year & result)", value: formData.masters },
        { label: "Passport", value: formData.passport },
        { label: "English language certificate", value: formData.englishCertificate },
      ]
    );

    openWhatsAppChat(message);
    closeApplicationForm();
  };

  const handleApplyNow = () => {
    openApplicationForm();
  };

  const handleLearnMore = (url?: string) => {
    if (!url || typeof window === "undefined") {
      return;
    }

    window.open(url, "_blank", "noreferrer noopener");
  };

  return (
    <section className="relative">
      <div className="relative h-[460px] overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(22,18,97,0.3)]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(5,11,53,0.75), rgba(12,32,96,0.3)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center text-center text-white px-4">
              <div className="max-w-3xl">
                <p className="mb-1 text-base font-semibold text-blue-200">
                  {slide.subtitle}
                </p>
                <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-6 text-lg text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleApplyNow}
                    className="cursor-pointer rounded-md bg-linear-to-r from-blue-600 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(7,9,48,0.45)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(7,9,48,0.6)]"
                  >
                    Apply Now
                  </button>
                <button
                  type="button"
                  onClick={() => handleLearnMore(slide.link)}
                  className="cursor-pointer rounded-md border-2 border-white/70 bg-transparent px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(7,9,48,0.3)] transition-all hover:bg-white/20 hover:scale-105"
                >
                  Learn More
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goToSlide("prev")}
          className="cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm p-3 text-white shadow-lg transition-all hover:bg-white/40 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goToSlide("next")}
          className="cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm p-3 text-white shadow-lg transition-all hover:bg-white/40 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Malaysia Flag Badge */}
        <div className="absolute top-6 right-6 rounded-full bg-linear-to-r from-blue-600 to-red-600 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-2 w-auto mr-1"
              />
            </span>

            <span className="font-semibold text-white">Study in Malaysia</span>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8 sm:px-6">
          <div className="relative w-full max-w-2xl rounded-4xl bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-hidden pb-12">
            <button
              type="button"
              onClick={closeApplicationForm}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200 cursor-pointer"
              aria-label="Close application form"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Study Connect application
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Share your details
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill the form below and we will continue the conversation on
                WhatsApp.
              </p>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="mt-6 space-y-4 max-h-[72vh] overflow-y-auto pr-2 sm:pr-4 pb-10 sm:pb-12 hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Name
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      handleFormChange("name", event.target.value)
                    }
                    required
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Contact number
                  <input
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(event) =>
                      handleFormChange("contactNumber", event.target.value)
                    }
                    required
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Email
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      handleFormChange("email", event.target.value)
                    }
                    required
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Passport
                  <select
                    value={formData.passport}
                    onChange={(event) =>
                      handleFormChange("passport", event.target.value)
                    }
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
                <label className="md:col-span-2 flex flex-col text-sm font-medium text-slate-600">
                  Address
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(event) =>
                      handleFormChange("address", event.target.value)
                    }
                    required
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  SSC (passing year & result)
                  <input
                    type="text"
                    value={formData.ssc}
                    onChange={(event) =>
                      handleFormChange("ssc", event.target.value)
                    }
                    required
                    placeholder="2023 • GPA 3.8"
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  HSC (passing year & result)
                  <input
                    type="text"
                    value={formData.hsc}
                    onChange={(event) =>
                      handleFormChange("hsc", event.target.value)
                    }
                    placeholder="2025 • GPA 3.6"
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Bachelor (passing year & result)
                  <input
                    type="text"
                    value={formData.bachelor}
                    onChange={(event) =>
                      handleFormChange("bachelor", event.target.value)
                    }
                    placeholder="2028 • GPA 3.5"
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="flex flex-col text-sm font-medium text-slate-600">
                  Master's (passing year & result)
                  <input
                    type="text"
                    value={formData.masters}
                    onChange={(event) =>
                      handleFormChange("masters", event.target.value)
                    }
                    placeholder="2031 • GPA 3.7"
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col text-sm font-medium text-slate-600">
                  English language certificate
                  <select
                    value={formData.englishCertificate}
                    onChange={(event) =>
                      handleFormChange("englishCertificate", event.target.value)
                    }
                    className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-2 pt-1 text-xs text-slate-500">
                <span>We will send this information directly to your WhatsApp.</span>
                <span>Study Connect respects your privacy and replies quickly.</span>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-linear-to-r from-blue-600 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(7,9,48,0.45)] transition hover:scale-105 hover:shadow-[0_20px_50px_rgba(7,9,48,0.6)]"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HomeSlider;
