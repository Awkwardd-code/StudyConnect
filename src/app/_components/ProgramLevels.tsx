
"use client";

import { GraduationCap, BookOpenCheck, School, Microscope, Award } from "lucide-react";

const programs = [
  {
    level: "Foundation",
    tag: "After SSC / O-Levels",
    icon: School,
    highlight: "Perfect for students who want a smooth entry into Bachelor’s in Malaysia.",
    points: [
      "Duration: 1 year (typically)",
      "Designed for students after SSC / O-Levels",
      "Helps you meet Bachelor’s entry requirements",
      "Popular in private Malaysian universities",
    ],
  },
  {
    level: "Diploma",
    tag: "After SSC / O-Levels",
    icon: GraduationCap,
    highlight:
      "A practical, career-ready credential that bridges secondary school and Bachelor’s top-up pathways in Malaysia.",
    points: [
      "Duration: 1.5–2 years depending on the subject area",
      "Balanced mix of classroom learning, workshops, and labs",
      "Recognized by employers and universities for articulation",
      "Paths into Diploma-to-Bachelor top-up tracks or direct employment",
    ],
  },
  {
    level: "Bachelor’s Degree",
    tag: "After HSC / A-Levels / Foundation",
    icon: GraduationCap,
    highlight: "Ideal for students starting their full undergraduate journey in Malaysia.",
    points: [
      "Duration: 3–4 years (depending on course)",
      "Wide range of majors: IT, Business, Engineering, etc.",
      "Pathway to jobs or further Master’s studies",
      "English-medium learning environment",
    ],
  },
  {
    level: "Master’s (Coursework)",
    tag: "After Bachelor’s",
    icon: BookOpenCheck,
    highlight: "For graduates who want a professional, industry-focused Master’s degree.",
    points: [
      "Duration: 1–2 years (depending on university)",
      "Taught programs with assignments & exams",
      "Great for career upgrade & specialization",
      "Flexible intakes in many Malaysian universities",
    ],
  },
  {
    level: "Master’s by Research",
    tag: "Research-focused",
    icon: Microscope,
    highlight: "Best for students planning academic or research-based careers.",
    points: [
      "Duration: 2+ years (varies by research topic)",
      "Research work under a supervisor",
      "Strong pathway towards PhD",
      "Suitable for those who enjoy research & publication",
    ],
  },
  {
    level: "PhD",
    tag: "Doctoral Research",
    icon: Award,
    highlight: "For advanced scholars aiming for top-level academic or research roles.",
    points: [
      "Duration: 3+ years (subject & university dependent)",
      "Full-time research with thesis submission",
      "Opportunities for publications & conferences",
      "Can lead to academic and high-level industry positions",
    ],
  },
];

const ProgramLevels = () => {
  return (
    <section className="rounded-[36px] bg-white px-4 sm:px-6 py-10 sm:py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600">
            <span className="text-xl">🎓</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Program Levels We Assist With
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Study Connect supports your full academic journey in Malaysia – from Foundation
          to PhD – with step-by-step guidance for each level.
        </p>
        <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-red-600 mx-auto" />
      </div>

      {/* Program Cards */}
      <div className="grid gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.level}
            className="group flex flex-col h-full rounded-[28px] border border-blue-100 bg-linear-to-b from-white to-blue-50 p-5 sm:p-6 shadow-[0_15px_40px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(59,130,246,0.18)] hover:border-blue-200"
          >
            {/* Icon + Level */}
            <div className="flex items-start gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-100 to-red-100 text-blue-700 shadow-inner group-hover:from-blue-200 group-hover:to-red-200 transition-all">
                <program.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {program.level}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm font-medium text-blue-600">
                  {program.tag}
                </p>
              </div>
            </div>

            {/* Highlight */}
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
              {program.highlight}
            </p>

            {/* Bullet points */}
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 flex-1">
              {program.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Footer badge */}
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
                <span>🇲🇾</span>
                <span>Malaysia study pathway</span>
              </span>
              <span className="text-[11px] text-gray-500">
                Guided by Study Connect
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Small note */}
      <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
        Not sure which program level is right for you? Study Connect can help you choose
        the best option based on your results, budget, and future plans.
      </p>
    </section>
  );
};

export default ProgramLevels;
