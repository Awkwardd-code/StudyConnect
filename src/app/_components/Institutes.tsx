"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Regina_Logo.svg",
    alt: "University of Regina",
    name: "University of Regina"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/d/dd/University_of_Wollongong_Australia_logo.svg",
    alt: "University of Wollongong",
    name: "University of Wollongong"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5b/University_of_Waterloo_seal.svg",
    alt: "University of Waterloo",
    name: "University of Waterloo"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/60/Seal_of_the_University_of_Vienna.svg",
    alt: "University of Vienna",
    name: "University of Vienna"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/Unsw_sydney_logo.svg",
    alt: "UNSW Sydney",
    name: "UNSW Sydney"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/University_of_Otago_logo.svg",
    alt: "University of Otago",
    name: "University of Otago"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/University_of_Toronto_coa.svg",
    alt: "University of Toronto",
    name: "University of Toronto"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4a/University_of_Canberra_logo.svg",
    alt: "University of Canberra",
    name: "University of Canberra"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/Monash_University_logo.svg",
    alt: "Monash University",
    name: "Monash University"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4a/McGill_University_CoA.svg",
    alt: "McGill University",
    name: "McGill University"
  }
];

const Institutes = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Calculate responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCount(5); // xl: 5 items
      } else if (width >= 1024) {
        setVisibleCount(4); // lg: 4 items
      } else if (width >= 768) {
        setVisibleCount(3); // md: 3 items
      } else if (width >= 640) {
        setVisibleCount(2); // sm: 2 items
      } else {
        setVisibleCount(1); // xs: 1 item
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleLogos = useMemo(() => {
    return Array.from({ length: visibleCount }).map((_, idx) => {
      const listIndex = (start + idx) % logos.length;
      return logos[listIndex];
    });
  }, [start, visibleCount]);

  const go = useCallback((direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setStart((prev) => {
      if (direction === "prev") {
        return prev === 0 ? logos.length - 1 : prev - 1;
      }
      return (prev + 1) % logos.length;
    });

    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      go("next");
    }
    if (isRightSwipe) {
      go("prev");
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      go("next");
    }, 4000);
    return () => clearInterval(interval);
  }, [go]);

  const dotCount = Math.ceil(logos.length / visibleCount);
  const activeDot = Math.floor(start / visibleCount);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-[36px] bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-center shadow-[0_10px_40px_rgba(11,22,63,0.05)] sm:shadow-[0_25px_70px_rgba(11,22,63,0.08)]">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0f2c]">
              Partner Institutions
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with top universities worldwide to provide the best opportunities for our students
            </p>
            <div className="mt-4 h-1 w-16 sm:w-20 md:w-24 rounded-full bg-linear-to-r from-[#4226ff] to-[#a855f7] mx-auto" />
          </div>

          {/* Logo Slider */}
          <div className="relative">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              type="button"
              aria-label="Previous institutions"
              onClick={() => go("prev")}
              disabled={isAnimating}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 cursor-pointer rounded-full border border-[#ddd7ff] bg-white p-3 text-[#3a26ff] shadow-lg transition-all hover:bg-[#3a26ff] hover:text-white hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Logo Container */}
            <div 
              className="flex items-center justify-center px-2 sm:px-0"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex flex-1 items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 rounded-xl sm:rounded-4xl border border-[#eff2ff] bg-white p-4 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(11,24,63,0.05)] sm:shadow-[0_15px_50px_rgba(11,24,63,0.08)]">
                {visibleLogos.map((logo, index) => (
                  <div 
                    key={`${logo.src}-${index}`} 
                    className="group relative flex flex-col items-center"
                  >
                    <div className="relative h-12 w-20 sm:h-14 sm:w-24 md:h-16 md:w-28 lg:h-20 lg:w-32 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-105">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={128}
                        height={80}
                        className="h-full w-full object-contain transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                        priority={index < 2}
                      />
                    </div>
                    {/* Institution Name Tooltip */}
                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next institutions"
              onClick={() => go("next")}
              disabled={isAnimating}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 cursor-pointer rounded-full border border-[#ddd7ff] bg-white p-3 text-[#3a26ff] shadow-lg transition-all hover:bg-[#3a26ff] hover:text-white hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden justify-center gap-4 mt-6">
              <button
                type="button"
                aria-label="Previous institutions"
                onClick={() => go("prev")}
                disabled={isAnimating}
                className="cursor-pointer rounded-full border border-[#ddd7ff] p-2.5 text-[#3a26ff] transition-all hover:bg-[#3a26ff] hover:text-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next institutions"
                onClick={() => go("next")}
                disabled={isAnimating}
                className="cursor-pointer rounded-full border border-[#ddd7ff] p-2.5 text-[#3a26ff] transition-all hover:bg-[#3a26ff] hover:text-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 sm:mt-8 flex justify-center gap-1.5 sm:gap-2">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => {
                  setIsAnimating(true);
                  setStart(idx * visibleCount);
                  setTimeout(() => setIsAnimating(false), 300);
                }}
                className={`rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                  idx === activeDot 
                    ? "bg-linear-to-r from-[#4226ff] to-[#a855f7] w-6 sm:w-8" 
                    : "bg-[#d5d9f7] hover:bg-[#a59aff] w-2 sm:w-2.5"
                } h-2 sm:h-2.5`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
            <button 
              className="group relative cursor-pointer inline-flex items-center gap-2 sm:gap-3 rounded-full bg-linear-to-r from-[#4226ff] to-[#a855f7] px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white shadow-[0_10px_30px_rgba(66,38,255,0.2)] sm:shadow-[0_20px_45px_rgba(39,27,124,0.3)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(39,27,124,0.4)] hover:-translate-y-1 active:translate-y-0 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">View All Institutions</span>
              <span className="relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#12004d] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              {/* Hover effect background */}
              <span className="absolute inset-0 bg-linear-to-r from-[#3a1fcc] to-[#9333ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center p-3 sm:p-4 rounded-xl bg-linear-to-br from-blue-50 to-indigo-50">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4226ff]">50+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Partner Universities</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-linear-to-br from-purple-50 to-pink-50">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9333ea]">15+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Countries</p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-center p-3 sm:p-4 rounded-xl bg-linear-to-br from-indigo-50 to-blue-50">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3a26ff]">1000+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Successful Admissions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutes;
