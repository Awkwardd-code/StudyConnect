/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  UsersRound,
  GraduationCap,
  MapPin,
  ArrowUpRight,
  Globe2,
} from "lucide-react";

type TeamMember = {
  name: string;
  location: "Malaysia" | "Bangladesh";
  bio: string;
  focus: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "MD. IMRAN KHAN APU",
    location: "Bangladesh",
    bio: "Leads the Study Connect leadership team and aligns Malaysia and Bangladesh operations around student success.",
    focus: "Leadership strategy, stakeholder alignment, service excellence",
    image: "/images/IMRAN.jpg",
  },
  {
    name: "TANZIN AARNI",
    location: "Bangladesh",
    bio: "Advises on partnerships and regional counsel, keeping our Bangladesh floor responsive to student needs.",
    focus: "Program advising, mentor coaching, regional alignment",
    image: "/images/TANZIN.jpg",
  },
  {
    name: "MD. SOJOL BISWAS",
    location: "Bangladesh",
    bio: "Drives business development and university liaisons so documentation and admissions run smoothly.",
    focus: "Business partnerships, documentation accuracy, admissions outreach",
    image: "/images/BISWAS .jpg",
  },
  {
    name: "NELOVE SHEIKH",
    location: "Bangladesh",
    bio: "Coordinates admissions outreach and keeps Study Connect connected with every campus update.",
    focus: "Admissions outreach, client relations, international updates",
    image: "/images/NELOVE.jpg",
  },
];

const Team = () => {
  const [filter, setFilter] = useState<"All" | "Malaysia" | "Bangladesh">("All");

  const filteredTeam =
    filter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.location === filter);

  return (
    <section className="rounded-[36px] bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600 text-white">
              <UsersRound className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                Our Team
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">
                Meet the Study Connect Team
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A Malaysia-based consultancy headquartered in Kuala Lumpur, guiding Bangladeshi students with{" "}
            <span className="font-semibold text-blue-700">
              admission, visa, and post-arrival support
            </span>{" "}
            step by step. Our Malaysia-based counselors stay synced with the Bangladesh desk so families always have a responsive contact.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-red-600 mx-auto" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-10">
          {(["All"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`cursor-pointer rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                filter === item
                  ? "border-transparent bg-linear-to-r from-blue-600 to-red-600 text-white shadow-md"
                  : "border-blue-100 bg-white text-blue-800 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {item === "All" ? "All Team Members" : `${item} Team`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeam.map((member) => (
            <article
              key={member.name}
              className="group relative flex flex-col rounded-[26px] border border-blue-100 bg-linear-to-b from-white to-blue-50/40 p-5 sm:p-6 shadow-[0_15px_45px_rgba(15,23,66,0.08)] transition-all hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,66,0.16)]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-2xl border-2 border-white shadow-md bg-blue-100">
                  <img
                    src={
                      member.image ??
                      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
                    }
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md text-xs">
                    {member.location === "Malaysia" ? "🇲🇾" : "🇧🇩"}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-blue-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-[11px] sm:text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {member.location === "Malaysia"
                      ? "Based in Kuala Lumpur, Malaysia"
                      : "Based in Bangladesh Office"}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                {member.bio}
              </p>

              {/* Focus tags */}
              <div className="mt-4 rounded-2xl bg-white/70 p-3 border border-blue-100">
                <p className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-[0.15em]">
                  Focus Areas
                </p>
                <p className="mt-1 text-xs sm:text-sm text-blue-900">
                  {member.focus}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-500" />
                  <span>Malaysia Education Specialist</span>
                </div>
                <button className="group/btn inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 hover:text-blue-900">
                  Book a session
                  <ArrowUpRight className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-linear-to-r from-blue-900 to-red-900 px-5 sm:px-8 py-5 sm:py-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm sm:text-base font-semibold flex items-center gap-2">
              <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" />
              Study Connect - Malaysia-based education consultancy for Bangladeshi students
            </p>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-xl">
              Our Malaysia-based consultants in Kuala Lumpur coordinate with the Bangladesh desk to
              support your journey between{" "}
              <span className="font-semibold">Bangladesh & Malaysia</span>, from
              university selection and admission to EMGS, visa, and post-arrival
              support.
            </p>
          </div>
          <button className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/10 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white border border-white/30 hover:bg-white hover:text-blue-900 transition-all">
            Meet our Malaysia team for a free counselling
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
