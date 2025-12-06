/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  GraduationCap,
  MessageSquareMore,
  FileBadge2,
  Stamp,
  PlaneTakeoff,
  Landmark,
  Languages,
  Home,
  Microscope,
  UsersRound,
  ChevronDown,
  ChevronUp,
  Award,
  Briefcase,
} from "lucide-react";

const services = [
  { title: "Malaysia Education Assessment", icon: MessageSquareMore, description: "Free personalized consultation for Malaysian universities" },
  { title: "University Admissions", icon: GraduationCap, description: "Admission to 50+ Malaysian universities" },
  { title: "Offer Letter Processing", icon: FileBadge2, description: "Fast-track acceptance from Malaysian institutions" },
  { title: "EMGS Application", icon: Stamp, description: "Education Malaysia Global Services processing" },
  { title: "Student Visa Processing", icon: PlaneTakeoff, description: "Complete visa support for Malaysia" },
  { title: "Scholarship Assistance", icon: Landmark, description: "Financial aid & Malaysian scholarships" },
  { title: "English Language Courses", icon: Languages, description: "IELTS/TOEFL preparation for Malaysia" },
  { title: "Accommodation Support", icon: Home, description: "Student housing arrangements in Malaysia" },
  { title: "Research Support", icon: Microscope, description: "Ph.D. & research guidance in Malaysia" },
  { title: "Pre-departure Briefing", icon: UsersRound, description: "Orientation for Malaysian study life" },
  { title: "Airport Pickup", icon: PlaneTakeoff, description: "Arrival assistance in Malaysia" },
  { title: "Post-arrival Support", icon: Home, description: "Settlement support in Malaysia" },
  { title: "Part-time Job Assistance", icon: Briefcase, description: "Work opportunities while studying" },
  { title: "Bank Documentation", icon: Landmark, description: "Financial proof for Malaysian visa" },
  { title: "Health Insurance", icon: Award, description: "Medical coverage arrangement" },
  { title: "Cultural Adaptation", icon: UsersRound, description: "Understanding Malaysian culture" },
];

const Service = () => {
  const [showAll, setShowAll] = useState(false);

  // For mobile: show 4 initially, then all when "View More" is clicked
  const mobileServices = showAll ? services : services.slice(0, 4);
  // For desktop: always show all
  const desktopServices = services;

  return (
    <section className="rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600">
            <img
              src="/logos/malaysia/malaysia.webp"
              alt="Malaysia Flag"
              className="h-6 w-6 rounded-full object-cover"
            />

          </div>
          <p className="text-3xl font-bold text-blue-900">Our Malaysia Services</p>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive support for your study journey in Malaysia
        </p>
        <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-red-600 mx-auto" />
      </div>

      {/* Desktop View - Always show all */}
      <div className="hidden lg:grid gap-6 grid-cols-4">
        {desktopServices.map((service) => (
          <article
            key={service.title}
            className="group rounded-[28px] border border-blue-100 bg-linear-to-b from-white to-blue-50 p-6 text-center shadow-[0_18px_45px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] hover:border-blue-200"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-red-100 text-blue-600 shadow-inner group-hover:from-blue-200 group-hover:to-red-200 transition-all">
              <service.icon className="h-8 w-8" />
            </div>
            <p className="mt-5 text-lg font-semibold text-blue-900">
              {service.title}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {service.description}
            </p>
            <div className="mt-4 h-1 w-12 mx-auto bg-linear-to-r from-blue-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        ))}
      </div>

      {/* Mobile View - Conditional display */}
      <div className="lg:hidden">
        <div className="grid gap-6 sm:grid-cols-2">
          {mobileServices.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] border border-blue-100 bg-linear-to-b from-white to-blue-50 p-6 text-center shadow-[0_18px_45px_rgba(59,130,246,0.08)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-red-100 text-blue-600 shadow-inner">
                <service.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-base font-semibold text-blue-900">
                {service.title}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* View More/Less Button for Mobile */}
        {services.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-red-600 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              {showAll ? (
                <>
                  View Less
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View More Services
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Show total count */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-blue-700">
              {services.length} Comprehensive Services
            </span>
            <span className="text-blue-700">🇲🇾</span>
          </div>
        </div>
      </div>

      {/* Stats for Desktop */}
      <div className="hidden lg:flex justify-center mt-12">
        <div className="grid grid-cols-3 gap-6 max-w-2xl">
          <div className="text-center p-4 rounded-xl bg-linear-to-br from-blue-50 to-red-50">
            <p className="text-2xl font-bold text-blue-700">End-to-End</p>
            <p className="text-sm text-gray-600 mt-1">Complete Support</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-linear-to-br from-red-50 to-blue-50">
            <p className="text-2xl font-bold text-red-700">1+ Years</p>
            <p className="text-sm text-gray-600 mt-1">Malaysia Experience</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-linear-to-br from-blue-100 to-red-100">
            <p className="text-2xl font-bold text-blue-800">98% Success</p>
            <p className="text-sm text-gray-600 mt-1">Visa Approval Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;