/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const stats = [
  {
    label: "Students Guided",
    detail: "New",
    description: "Supporting our first batches to Malaysia",
  },
  {
    label: "Partner Universities",
    detail: "10+",
    description: "Trusted Malaysian institutions",
  },
  {
    label: "Office Locations",
    detail: "2",
    description: "Bangladesh & Malaysia",
  },
  {
    label: "Founded",
    detail: "2024",
    description: "Focused on Malaysian education",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=120&q=80",
];

const Welcome = () => {
  return (
    <section className="rounded-[36px] bg-white px-8 py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-linear-to-r from-blue-600 to-red-600 p-2">
              <img
                src="/logos/malaysia/malaysia.webp"
                alt="Malaysia Flag"
                className="h-6 w-6 rounded-full object-cover"
              />
            </div>
            <p className="text-xl font-semibold text-blue-600">Welcome to</p>
          </div>

          <h2 className="mt-2 text-4xl font-extrabold text-[#0a0f2c]">
            Study Connect – Malaysia Education Support
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#2d2f3b]">
            Study Connect is a Malaysia- and Bangladesh-based student consultancy,
            visa processing, and travel support firm. As a growing, beginner-friendly
            company, we focus especially on helping Bangladeshi students start their
            study journey in Malaysia with honest, step-by-step guidance.
          </p>

          <p className="mt-3 text-base leading-relaxed text-[#414457]">
            We assist with university admission, EMGS and visa processing, travel and
            accommodation arrangements, and post-arrival support in Malaysia.
            Our goal is to make the entire process simple, transparent, and student-focused
            so that you and your family can feel confident at every stage.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-blue-100 pt-6">
            <div className="flex -space-x-3">
              {avatars.map((url, index) => (
                <span
                  key={url}
                  className="h-14 w-14 overflow-hidden rounded-full border-4 border-white"
                >
                  <img
                    src={url}
                    alt={`Study Connect Malaysia student ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600 text-xs font-semibold text-white text-center px-2 shadow-lg">
                New<br />Batch
              </span>
            </div>
            <div className="text-lg font-semibold text-[#0a0f2c]">
              Starting with our first batches of students to Malaysia
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-linear-to-br from-blue-50 to-red-50 p-5 shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
              >
                <p className="text-3xl font-bold text-blue-700">{stat.detail}</p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/counselling" className="rounded-md cursor-pointer bg-linear-to-r from-blue-600 to-red-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              Get Free Malaysia Consultation
            </Link>
            <button className="rounded-md cursor-pointer border-2 border-blue-600 bg-transparent px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50">
              Learn More About Study Connect
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_25px_60px_rgba(22,38,99,0.12)]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=960&q=80"
                alt="Malaysian university campus"
                className="h-64 w-full object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full bg-blue-600/90 px-3 py-1">
                <span className="text-xs font-semibold text-white">
                  Study in Malaysia
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-blue-800">Study Connect</p>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-600">
                    Malaysia Education
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-700">🇲🇾 Malaysia</p>
                  <p className="text-xs text-gray-500">Preferred study destination</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-blue-50 p-3 text-center">
                  <p className="text-xl font-bold text-blue-700">10+</p>
                  <p className="text-xs text-gray-600">Partner Universities</p>
                </div>
                <div className="rounded-lg bg-red-50 p-3 text-center">
                  <p className="text-xl font-bold text-red-700">1:1</p>
                  <p className="text-xs text-gray-600">Personal Guidance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-linear-to-br from-blue-900 to-gray-900 p-6 text-white">
            <h3 className="mb-4 text-xl font-bold">Why Choose Study Connect?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm">
                  Transparent, beginner-friendly guidance with no hidden charges
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm">
                  Focused on Malaysian universities, EMGS and student visa processes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm">
                  Support for admission, visa, travel, accommodation and post-arrival
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm">
                  Friendly support for Bangladeshi students and their families
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
