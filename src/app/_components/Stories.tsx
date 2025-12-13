/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpRight, Play, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    title: "Asia Pacific University (Taman Teknologi, Kuala Lumpur)",
    student: "Ahmed from Bangladesh",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80",
    program: "Bachelor of Computer Science",
  },
  {
    title: "INTI University (Nilai campus, Subangjaya Campus)",
    student: "Sara from Pakistan",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
    program: "Master of Business",
  },
  {
    title: "Bainary University (Puchong, Selangor)",
    student: "Rohan from India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    program: "Bachelor of Engineering",
  },
  {
    title: "Genovasi University (Petaling Jaya, Selangor)",
    student: "Chen from China",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80",
    program: "PhD in Biotechnology",
  },
  {
    title: "Asia e University (Subangjaya Selangor)",
    student: "Fatima from Egypt",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=80",
    program: "Master of Civil Engineering",
  },
  {
    title: "Alpha University (Subangaya, Selangor)",
    student: "David from Nigeria",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80",
    program: "Bachelor of IT",
  },
  {
    title: "Taylor's University (Petaling Jaya, Selangor)",
    student: "Maria from the Philippines",
    image:
      "https://images.unsplash.com/photo-1512427691650-1d4c0db3decf?auto=format&fit=crop&w=500&q=80",
    program: "Hospitality Management",
  },
  {
    title: "Kings University (Chow Kit, Kuala Lumpur)",
    student: "James from Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    program: "Law Degree",
  },
  {
    title: "Lincoln University (Kota Bharu, Kelantan)",
    student: "Nadia from Indonesia",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
    program: "Bachelor of Education",
  },
  {
    title: "City University (Petaling Jaya, Selangor)",
    student: "Omar from Maldives",
    image:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=500&q=80",
    program: "Master of Digital Media",
  },
];

const Stories = () => {
  const [showAll, setShowAll] = useState(false);

  // For mobile: show 4 initially, then all when "View More" is clicked
  const mobileStories = showAll ? stories : stories.slice(0, 4);
  // For desktop: always show all
  const desktopStories = stories;

  return (
    <section className="rounded-[36px] bg-linear-to-b from-blue-50 to-white px-4 sm:px-6 py-8 sm:py-12 text-center shadow-[0_20px_60px_rgba(10,22,63,0.08)]">
      <div className="mb-4 sm:mb-2 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600">
          <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-blue-900">Malaysia Success Stories</p>
      </div>
      <p className="text-base sm:text-lg text-gray-600 px-2">
        Hear from international students who achieved their dreams in Malaysian universities
      </p>
      <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-linear-to-r from-blue-600 to-red-600 mx-auto" />

      {/* Desktop View - Always show all */}
      <div className="hidden lg:grid gap-6 grid-cols-4 mt-8 sm:mt-12">
        {desktopStories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>

      {/* Mobile View - Conditional display */}
      <div className="lg:hidden">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-8">
          {mobileStories.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>

        {/* View More/Less Button for Mobile */}
        {stories.length > 4 && (
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              {showAll ? (
                <>
                  Show Less Stories
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View More Stories ({stories.length - 4} more)
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Story Count for Mobile */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5">
            <span className="text-sm font-medium text-blue-700">
              {stories.length} Success Stories
            </span>
            <span className="text-blue-700">🇲🇾</span>
          </div>
        </div>
      </div>

      {/* Support / “Stats” Block – made honest & beginner-friendly */}
      <div className="mt-8 sm:mt-12 rounded-2xl bg-linear-to-r from-blue-900 to-red-900 p-6 sm:p-8 text-white">
        <div className="mb-4 sm:mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="text-lg sm:text-xl">
              <img
                src="/logos/malaysia/malaysia.webp"
                alt="Malaysia Flag"
                className="h-6 w-6 rounded-full object-cover"
              />
            </span>
            <span className="text-sm sm:text-lg font-semibold">
              How Study Connect Supports Malaysia-Bound Students
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">1:1</div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Personal counselling sessions
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10+</div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Malaysian universities we work with
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">Step-by-step</div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Guidance for visa & EMGS process
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">BD & MY</div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
              Support from Bangladesh & Malaysia
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4">
        <button className="group cursor-pointer inline-flex items-center gap-2 sm:gap-3 rounded-md bg-linear-to-r from-blue-600 to-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-[0_15px_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:translate-y-0">
          Start Your Malaysia Success Story
          <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-1 group-hover:scale-110">
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </button>
        <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <span className="text-base sm:text-lg">🇲🇾</span>
          We’ll guide you from Bangladesh to your chosen Malaysian university, step by step.
        </p>
      </div>
    </section>
  );
};

// Separate StoryCard component for better organization
const StoryCard = ({ story }: { story: any }) => {
  return (
    <article className="group relative h-80 sm:h-96 overflow-hidden rounded-3xl sm:rounded-[34px] shadow-[0_20px_50px_rgba(15,23,66,0.2)] cursor-pointer transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,66,0.3)] hover:-translate-y-1 sm:hover:-translate-y-2">
      <img
        src={story.image}
        alt={story.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/70 transition-all duration-300 group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/80" />

      {/* Malaysia Flag Badge */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1">
        <span className="text-sm font-semibold text-white">
          <img
            src="https://flagcdn.com/my.svg"
            alt="Malaysia Flag"
            className="h-2 w-auto mr-1"
          />
        </span>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-lg transition-all duration-300 group-hover:h-14 group-hover:w-14 sm:group-hover:h-20 sm:group-hover:w-20 group-hover:bg-white group-hover:shadow-2xl">
          <Play className="h-6 w-6 sm:h-8 sm:w-8 transition-all duration-300 group-hover:h-7 sm:group-hover:h-10 sm:group-hover:w-10" />
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-linear-to-t from-black/90 to-transparent">
        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg line-clamp-1">
          {story.title}
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 line-clamp-1">
          {story.student}
        </p>
        <p className="mt-1 text-xs text-blue-300 font-medium line-clamp-1">
          {story.program}
        </p>

        {/* Hover Details */}
        <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 sm:translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            <div className="h-1 w-4 sm:w-6 bg-blue-400 rounded-full" />
            <span className="text-xs text-gray-300">Success Story</span>
          </div>
          <button className="mt-2 cursor-pointer sm:mt-3 w-full rounded-full bg-linear-to-r from-blue-600 to-red-600 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:from-blue-700 hover:to-red-700 transition-all active:scale-95">
            Watch Story
          </button>
        </div>
      </div>
    </article>
  );
};

export default Stories;
