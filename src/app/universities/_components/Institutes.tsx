/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type University = {
  name: string;
  logo: string;
  location: string;
  ranking?: string;
  website: string;
};

const UniversityItem = ({
  name,
  logo,
  location,
  ranking,
  website,
}: University) => {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer flex items-center gap-3 rounded-xl bg-linear-to-br from-white to-blue-50 px-3 sm:px-4 py-3 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md sm:hover:shadow-lg hover:border-blue-300 sm:hover:-translate-y-1"
    >
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br from-blue-50 to-red-50 p-1.5 sm:p-2 border border-blue-200 transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110 group-hover:from-blue-100 group-hover:to-red-100">
        {logo && logo.trim() !== "" && !imageError ? (
          <img
            src={logo}
            alt={name}
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-lg sm:text-xl">🎓</span>
        )}
        <span className="absolute -top-1 -right-1">
          <img
            src="https://flagcdn.com/my.svg"
            alt="Malaysia Flag"
            className="h-2.5 w-auto"
          />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-semibold text-blue-900 truncate transition-colors duration-300 group-hover:text-blue-700">
          {name}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 truncate">{location}</p>
          {ranking && (
            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full whitespace-nowrap ml-2">
              {ranking}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

const malaysianRegions: {
  region: string;
  description: string;
  universities: University[];
}[] = [
  {
    region: "Partner Malaysian Universities",
    description:
      "A curated list of universities we have begun collaborating with as our network continues to grow.",
    universities: [
      {
        name: "Asia Pacific University (APU)",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/8/85/Asia_Pacific_University_logo.svg",
        location: "Taman Teknologi, Kuala Lumpur",
        website: "https://www.apu.edu.my",
        ranking: "Technology Focus",
      },
      {
        name: "INTI University",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/c/c4/INTI_International_University_logo.svg",
        location: "Nilai campus, Subang Jaya campus",
        website: "https://newinti.edu.my",
        ranking: "Multi-campus University",
      },
      {
        name: "Binary University",
        logo: "",
        location: "Puchong, Selangor",
        website: "https://binary.edu.my",
        ranking: "Business & Management",
      },
      {
        name: "Genovasi University",
        logo: "",
        location: "Petaling Jaya, Selangor",
        website: "https://www.genovasi.edu.my",
        ranking: "Design & Innovation",
      },
      {
        name: "Asia e University",
        logo: "",
        location: "Subang Jaya, Selangor",
        website: "https://aeu.edu.my",
        ranking: "Digital Global University",
      },
      {
        name: "Alpha University",
        logo: "",
        location: "Subang Jaya, Selangor",
        website: "https://alfa.edu.my",
        ranking: "Creative & Business",
      },
      {
        name: "Taylor's University",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/d/d1/Taylor%27s_University_Logo.svg",
        location: "Petaling Jaya, Selangor",
        website: "https://university.taylors.edu.my",
        ranking: "Top Private University",
      },
      {
        name: "Kings University",
        logo: "",
        location: "Chow Kit, Kuala Lumpur",
        website: "https://kingsuniversitycollege.edu.my",
        ranking: "City Campus",
      },
      {
        name: "Lincoln University",
        logo: "",
        location: "Kota Bharu, Kelantan",
        website: "https://www.lincoln.edu.my",
        ranking: "Medical & Health Focus",
      },
      {
        name: "City University",
        logo: "",
        location: "Petaling Jaya, Selangor",
        website: "https://city.edu.my",
        ranking: "Multi-discipline University",
      },
    ],
  },
];

const InstitutesSection = () => {
  const [openRegionIndex, setOpenRegionIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive isMobile
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRegion = (index: number) => {
    if (isMobile) {
      setOpenRegionIndex(openRegionIndex === index ? null : index);
    }
  };

  const totalUniversities = malaysianRegions.reduce(
    (total, region) => total + region.universities.length,
    0
  );
  const totalRegions = malaysianRegions.length;

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-10 sm:pb-20 px-4 sm:px-6">
      {/* Top banner */}
      <div className="h-16 sm:h-20 md:h-24 rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center px-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">
              <img
                src="https://flagcdn.com/my.svg"
                alt="Malaysia Flag"
                className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover"
              />
            </span>
            <span className="text-sm sm:text-lg font-semibold text-white text-center">
              Partner Malaysian Universities
            </span>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative -mt-8 sm:-mt-12 md:-mt-16 mx-auto max-w-6xl space-y-6 sm:space-y-8 md:space-y-10 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 shadow-[0_15px_40px_rgba(59,130,246,0.1)] sm:shadow-[0_20px_60px_rgba(59,130,246,0.12)] md:shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        {/* Intro section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-1 w-4 sm:w-6 md:w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-blue-600">
              Building Trusted University Connections
            </p>
            <div className="h-1 w-4 sm:w-6 md:w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 px-2">
            Malaysian Universities We Collaborate With
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            We are a growing education support team working with a selected
            group of Malaysian universities to help students explore reliable
            study options.
          </p>
        </div>

        {/* Regions */}
        {malaysianRegions.map((region, index) => (
          <div
            key={region.region}
            className="rounded-xl sm:rounded-2xl md:rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 shadow-[0_8px_25px_rgba(59,130,246,0.08)] sm:shadow-[0_12px_35px_rgba(59,130,246,0.08)] md:shadow-[0_15px_45px_rgba(59,130,246,0.08)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)] sm:hover:shadow-[0_16px_45px_rgba(59,130,246,0.12)] md:hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
          >
            <div
              className="rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl bg-linear-to-r from-blue-600 to-red-600 px-4 py-3 sm:px-6 sm:py-4 cursor-pointer sm:cursor-default"
              onClick={() => toggleRegion(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-white">
                      🎓 {region.region}
                    </span>
                    {isMobile && (
                      <span className="text-white/80">
                        {openRegionIndex === index ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1">
                    {region.description}
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-white bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                  {region.universities.length} Universities
                </span>
                <span className="sm:hidden text-white bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {region.universities.length}
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isMobile
                  ? openRegionIndex === index
                    ? "max-h-[5000px]"
                    : "max-h-0"
                  : "max-h-none"
              }`}
            >
              <div className="grid gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {region.universities.map((uni) => (
                  <UniversityItem
                    key={`${region.region}-${uni.name}`}
                    {...uni}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Statistics Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 rounded-xl sm:rounded-2xl bg-linear-to-r from-blue-900 to-red-900 p-4 sm:p-6 md:p-8 text-white">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              Supporting Students in Their Malaysian Education Journey
            </h3>
            <p className="text-blue-200 mt-1 sm:mt-2 text-sm sm:text-base">
              We are gradually building relationships with Malaysian universities
              so students can make clear and confident decisions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {totalUniversities}
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">
                Partner Universities So Far
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {totalRegions}
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">
                Regions We Currently Cover
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                1:1
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">
                Student Guidance Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Step-by-step
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-200">
                Application Support Provided
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <button className="group cursor-pointer inline-flex items-center gap-2 sm:gap-3 rounded-md sm:rounded-lg bg-linear-to-r from-blue-600 to-red-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] sm:shadow-[0_15px_40px_rgba(59,130,246,0.3)] md:shadow-[0_20px_45px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(59,130,246,0.4)] sm:hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] md:hover:shadow-[0_25px_55px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 sm:hover:-translate-y-1">
            <span>Browse Our Partner Universities</span>
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-0.5 sm:group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-gray-500 px-2">
            We provide basic guidance and connect you with university teams so
            you can move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstitutesSection;
