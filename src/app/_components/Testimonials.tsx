/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, GraduationCap } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Rahman",
    country: "Bangladesh",
    university: "University of Malaya",
    date: "2025-05-14",
    review:
      "STC made my dream of studying at Malaysia's top university come true. Their guidance on EMGS processing was exceptional.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    country: "Pakistan",
    university: "Monash University Malaysia",
    date: "2025-05-14",
    review:
      "Best Malaysian education consultancy! They handled everything from admission to visa and accommodation support.",
    rating: 5,
  },
  {
    name: "Rohan Patel",
    country: "India",
    university: "Taylor's University",
    date: "2025-05-14",
    review:
      "Incredible service for Malaysia studies. Expert guidance on scholarship applications and smooth visa processing.",
    rating: 5,
  },
  {
    name: "Chen Wang",
    country: "China",
    university: "Sunway University",
    date: "2025-05-10",
    review:
      "Professional support throughout my PhD journey in Malaysia. Highly recommended for Malaysian universities!",
    rating: 5,
  },
  {
    name: "Fatima Ali",
    country: "Egypt",
    university: "UTM Johor",
    date: "2025-05-08",
    review:
      "Excellent counseling for engineering programs in Malaysia. Made my study abroad dream come true with 100% visa success.",
    rating: 5,
  },
  {
    name: "David Okafor",
    country: "Nigeria",
    university: "Asia Pacific University",
    date: "2025-05-05",
    review:
      "Very professional team with prompt responses. They guided me through every step of studying in Cyberjaya, Malaysia.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    country: "Philippines",
    university: "INTI University",
    date: "2025-04-28",
    review:
      "Perfect guidance for hospitality management in Malaysia. From application to arrival, everything was seamless.",
    rating: 5,
  },
  {
    name: "James Perera",
    country: "Sri Lanka",
    university: "University of Nottingham Malaysia",
    date: "2025-04-25",
    review:
      "Outstanding support for law degree in Malaysia. Their expertise in Malaysian education system is unparalleled.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Calculate responsive breakpoints - now shows full slides
  const updateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleItems(3); // Show 3 testimonials per slide on desktop
      } else if (width >= 768) {
        setVisibleItems(2); // Show 2 testimonials per slide on tablet
      } else {
        setVisibleItems(1); // Show 1 testimonial per slide on mobile (for carousel)
      }
    }
  }, []);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [updateVisibleItems]);

  // Group testimonials into slides
  const slides = [];
  for (let i = 0; i < testimonials.length; i += visibleItems) {
    slides.push(testimonials.slice(i, i + visibleItems));
  }

  const totalSlides = slides.length;

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-slide functionality (desktop only)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, visibleItems]);

  // For mobile list view
  const mobileTestimonials = showAllMobile ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[40px] border border-blue-900 bg-linear-to-r from-blue-900 via-blue-800 to-red-900 px-4 sm:px-6 md:px-8 py-8 md:py-14 text-white shadow-[0_30px_80px_rgba(7,5,43,0.6)]">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <span className="text-xl">
                      <img
                        src="/logos/malaysia/malaysia.webp"
                        alt="Malaysia Flag"
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Malaysia Student Reviews
                  </h2>
                </div>
                <div className="mt-2 h-1 w-16 sm:w-20 md:w-24 rounded-full bg-linear-to-r from-blue-500 to-red-500" />
                <p className="mt-2 text-sm sm:text-base text-gray-300">
                  Hear from international students studying in Malaysian universities
                </p>
              </div>

              {/* Navigation buttons - Desktop only */}
              <div className="hidden sm:flex gap-2 sm:gap-3">
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

            {/* Desktop Testimonial Carousel */}
            <div className="hidden sm:block mt-8 md:mt-12 lg:mt-14">
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={`slide-${slideIndex}`}
                      className="w-full shrink-0 px-2"
                    >
                      <div className={`grid gap-4 ${visibleItems === 3 ? 'grid-cols-3' :
                          visibleItems === 2 ? 'grid-cols-2' :
                            'grid-cols-1'
                        }`}>
                        {slide.map((review, reviewIndex) => (
                          <TestimonialCard
                            key={`${review.name}-${slideIndex}-${reviewIndex}`}
                            review={review}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Testimonials List */}
            <div className="sm:hidden mt-6">
              <div className="grid grid-cols-1 gap-4">
                {mobileTestimonials.map((review, index) => (
                  <TestimonialCard key={`mobile-${review.name}-${index}`} review={review} />
                ))}
              </div>

              {/* View More/Less Button for Mobile */}
              {testimonials.length > 2 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAllMobile(!showAllMobile)}
                    className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-white font-medium hover:bg-white/30 transition-all active:scale-95"
                  >
                    {showAllMobile ? (
                      <>
                        Show Less Reviews
                        <ChevronLeft className="h-4 w-4 rotate-90" />
                      </>
                    ) : (
                      <>
                        View More Reviews ({testimonials.length - 2} more)
                        <ChevronRight className="h-4 w-4 rotate-90" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Slide indicator for desktop */}
            <div className="hidden sm:flex mt-6 sm:mt-8 justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-8 sm:mt-10 rounded-xl bg-white/10 p-4 sm:p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">0,000+</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">
                    Students in Malaysia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">10+</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">
                    Partner Universities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">98%</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">Visa Success</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">4.9/5</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">Student Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate TestimonialCard component
const TestimonialCard = ({ review }: { review: any }) => {
  return (
    <article className="group cursor-pointer rounded-xl sm:rounded-2xl md:rounded-[26px] bg-white p-4 sm:p-5 md:p-6 text-left text-[#1b1c2e] shadow-[0_10px_30px_rgba(8,7,37,0.25)] sm:shadow-[0_15px_40px_rgba(8,7,37,0.35)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(8,7,37,0.5)] hover:-translate-y-1 active:translate-y-0 h-full">
      {/* Review header */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-red-100">
          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm sm:text-base text-[#0f163a] transition-colors duration-300 group-hover:text-blue-600 truncate">
            {review.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-600">{review.country}</span>
            <span className="text-blue-600 ml-2">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-2 w-auto mr-1"
              />
            </span>
          </div>
        </div>
      </div>

      {/* University info */}
      <div className="mt-3 flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
        <p className="text-xs sm:text-sm font-medium text-blue-800 truncate">
          {review.university}
        </p>
      </div>

      {/* Star rating */}
      <div className="mt-3 sm:mt-4 flex items-center gap-1 text-yellow-500">
        {Array.from({ length: review.rating }).map((_, idx) => (
          <Star
            key={`${review.name}-star-${idx}`}
            className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-500 text-yellow-500 transition-transform duration-200 group-hover:scale-110"
            fill="currentColor"
          />
        ))}
        <span className="text-xs text-gray-500 ml-2">{review.date}</span>
      </div>

      {/* Review text */}
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-normal line-clamp-3 group-hover:line-clamp-none">
        {review.review}
      </p>

      {/* Verified badge */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
          ✓ Verified Student
        </span>
        <span className="text-xs text-gray-500">Malaysia Study</span>
      </div>
    </article>
  );
};

export default Testimonials;