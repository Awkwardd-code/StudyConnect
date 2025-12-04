"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Study in Cyprus",
    image:
      "https://images.unsplash.com/photo-1428342319217-5fdaf6d7898e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Study in Australia",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad89?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Study in Canada",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

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

  return (
    <section className="relative">
      <div className="relative h-[520px] overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(22,18,97,0.3)]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(5,11,53,0.65), rgba(12,32,96,0.1)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                {slide.title}
              </p>
              <button className="mt-6 rounded-full border border-white/70 px-10 py-3 text-lg font-semibold shadow-[0_15px_40px_rgba(7,9,48,0.45)] transition hover:bg-white/20">
                Apply Now
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goToSlide("prev")}
          className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-[#2f1c8b] shadow-lg transition hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goToSlide("next")}
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-[#2f1c8b] shadow-lg transition hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HomeSlider;
