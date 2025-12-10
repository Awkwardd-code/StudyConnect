/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildWhatsAppMessage, openWhatsAppChat } from "@/lib/whatsapp";

const slides = [
  {
    title: "Asia Pacific University",
    subtitle: "Technology & Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?auto=format&fit=crop&w=1600&q=80",
    description: "Taman Teknologi Malaysia • Kuala Lumpur",
  },
  {
    title: "INTI University",
    subtitle: "Global Education Network",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    description: "Nilai Campus • Subang Jaya Campus",
  },
  {
    title: "Binary University",
    subtitle: "Business & Entrepreneurship Focus",
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1600&q=80",
    description: "Puchong • Selangor",
  },
  {
    title: "Genovasi University",
    subtitle: "Innovation & Design Education",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
  },
  {
    title: "Asia e University",
    subtitle: "Flexible Online & Blended Learning",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80",
    description: "Subang Jaya • Selangor",
  },
  {
    title: "Alpha University",
    subtitle: "Career-Focused Programs",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
    description: "Subang Jaya • Selangor",
  },
  {
    title: "Taylor's University",
    subtitle: "Premier Private University",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
  },
  {
    title: "Kings University",
    subtitle: "Urban Campus Experience",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1600&q=80",
    description: "Chow Kit • Kuala Lumpur",
  },
  {
    title: "Lincoln University",
    subtitle: "Global Education Pathways",
    image:
      "https://images.unsplash.com/photo-1565684018286-b9bc5c4d5a19?auto=format&fit=crop&w=1600&q=80",
    description: "Kota Bharu • Kelantan",
  },
  {
    title: "City University",
    subtitle: "Industry-Driven Learning",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80",
    description: "Petaling Jaya • Selangor",
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

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

  const handleApplyNow = (slideTitle: string) => {
    const message = buildWhatsAppMessage(
      `Hello Study Connect Malaysia team! I'm interested in applying to ${slideTitle}.`,
      [{ label: "Program", value: slideTitle }]
    );
    openWhatsAppChat(message);
  };

  return (
    <section className="relative">
      <div className="relative h-[460px] overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(22,18,97,0.3)]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
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
                    onClick={() => handleApplyNow(slide.title)}
                    className="cursor-pointer rounded-md bg-linear-to-r from-blue-600 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(7,9,48,0.45)] transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(7,9,48,0.6)]"
                  >
                    Apply Now
                  </button>
                  <button className="cursor-pointer rounded-md border-2 border-white/70 bg-transparent px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(7,9,48,0.3)] transition-all hover:bg-white/20 hover:scale-105">
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
    </section>
  );
};

export default HomeSlider;
