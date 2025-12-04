/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Noushin Akter",
    date: "2025-05-14",
    review:
      "STC Overseas Education is one of the most reliable educational consultancies in Bangladesh.",
  },
  {
    name: "Sanjida Itica",
    date: "2025-05-14",
    review: "Best Education Consultancy with genuine guidance.",
  },
  {
    name: "Mostofa Haider",
    date: "2025-05-14",
    review:
      "Incredible service. Good communication, immigration, documentation & visa expert.",
  },
  {
    name: "Marium Sarkar",
    date: "2025-05-10",
    review:
      "Professional support throughout my application journey. Highly recommended!",
  },
  {
    name: "Rahim Khan",
    date: "2025-05-08",
    review:
      "Excellent counseling and visa processing support. Made my study abroad dream come true.",
  },
  {
    name: "Sadia Rahman",
    date: "2025-05-05",
    review:
      "Very professional team with prompt responses. They guided me through every step.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate responsive breakpoints
  const updateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleItems(3);
      } else if (width >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    }
  }, []);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [updateVisibleItems]);

  const totalItems = testimonials.length;
  const maxIndex = Math.max(0, totalItems - visibleItems);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  // Calculate item width for transform
  const itemWidth = 100 / visibleItems;

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[40px] border border-[#2c0f59] bg-linear-to-r from-[#300435] via-[#25003d] to-[#0a1b65] px-4 sm:px-6 md:px-8 py-8 md:py-14 text-white shadow-[0_30px_80px_rgba(7,5,43,0.6)]">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Customer Reviews
                </h2>
                <div className="mt-2 h-1 w-16 sm:w-20 md:w-24 rounded-full bg-linear-to-r from-[#a855f7] to-[#3b82f6]" />
                <p className="mt-2 text-sm sm:text-base text-gray-300">
                  What our students say about us
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-2 sm:gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonials"
                  onClick={handlePrev}
                  disabled={isAnimating}
                  className="cursor-pointer rounded-full bg-white/10 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonials"
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="cursor-pointer rounded-full bg-white/10 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Testimonial slider */}
            <div className="mt-8 md:mt-12 lg:mt-14 overflow-hidden">
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * itemWidth}%)`,
                  width: `${(totalItems * 100) / visibleItems}%`,
                }}
              >
                {testimonials.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="shrink-0"
                    style={{ width: `${itemWidth}%` }}
                  >
                    <article className="group cursor-pointer rounded-xl sm:rounded-2xl md:rounded-[26px] bg-white p-4 sm:p-5 md:p-6 text-left text-[#1b1c2e] shadow-[0_10px_30px_rgba(8,7,37,0.25)] sm:shadow-[0_15px_40px_rgba(8,7,37,0.35)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(8,7,37,0.5)] hover:-translate-y-2 active:translate-y-0 active:scale-95 h-full">
                      {/* Review header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm sm:text-base text-[#0f163a] transition-colors duration-300 group-hover:text-[#4226ff] truncate">
                            {review.name}
                          </p>
                          <p className="text-xs text-[#8388b8] mt-0.5">
                            {review.date}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#5c5f7f] transition-colors duration-300 group-hover:text-[#4226ff]">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fillOpacity="0.6"
                            />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fillOpacity="0.2"
                            />
                          </svg>
                          Google
                        </span>
                      </div>

                      {/* Star rating */}
                      <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[#e7b008]">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={`${review.name}-star-${idx}`}
                            className="h-3 w-3 sm:h-4 sm:w-4 fill-[#e7b008] text-[#e7b008] transition-transform duration-200 group-hover:scale-110"
                            fill="currentColor"
                          />
                        ))}
                        <span className="text-xs text-[#4f4f72] transition-colors duration-300 group-hover:text-[#3a3d5c] ml-2">
                          Verified
                        </span>
                      </div>

                      {/* Review text */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#1b1c2e] transition-colors duration-300 group-hover:text-[#0f163a] leading-relaxed sm:leading-normal line-clamp-4">
                        {review.review}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator for mobile */}
            <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:hidden">
              {Array.from({
                length: Math.min(totalItems, Math.ceil(totalItems / visibleItems)),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(index * visibleItems);
                    setTimeout(() => setIsAnimating(false), 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visibleItems) === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;