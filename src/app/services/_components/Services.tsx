"use client";

import { openWhatsAppChat } from "@/lib/whatsapp";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <article className="group cursor-pointer rounded-3xl border border-blue-100 bg-white p-6 text-left shadow-[0_10px_35px_rgba(14,33,90,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(14,33,90,0.18)] hover:border-blue-300">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-red-50 text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:to-red-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
        <span role="img" aria-hidden="true" className="text-3xl">
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-900 transition-colors duration-300 group-hover:text-blue-700">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>
    </div>
  </article>
);

const services = [
  {
    title: "Free Malaysia Study Assessment",
    description:
      "Get a free, no-obligation assessment of your academic profile and study goals. We match you with suitable Malaysian universities and programs.",
    icon: "💬",
  },
  {
    title: "University Application Support",
    description:
      "We help you shortlist universities, prepare your documents, and submit your application correctly to avoid delays and rejections.",
    icon: "🎓",
  },
  {
    title: "EMGS & Offer Letter Guidance",
    description:
      "We guide you through EMI / EMGS procedures, offer letter stages, and required timelines so you always know what to expect next.",
    icon: "⚡",
  },
  {
    title: "Student Visa Documentation Help",
    description:
      "Support for preparing your visa documents including financial proof, medical tests, personal statements, and required forms.",
    icon: "📋",
  },
  {
    title: "Malaysia Student Visa Guidance",
    description:
      "Step-by-step guidance through the student visa application, what to prepare, and common errors to avoid as a new applicant.",
    icon: "✈️",
  },
  {
    title: "Scholarship & Fee Guidance",
    description:
      "We help you understand available university scholarships, discounts, fee structures, and basic financial document requirements.",
    icon: "💰",
  },
  {
    title: "Accommodation Search Support",
    description:
      "We assist you in finding safe, student-friendly Malaysian accommodation options close to your university or city of choice.",
    icon: "🏠",
  },
  {
    title: "Postgraduate & Research Support",
    description:
      "Initial guidance for Master's and PhD applicants, including proposal formatting tips and how to approach supervisors.",
    icon: "🔬",
  },
  {
    title: "Pre-departure Orientation",
    description:
      "Online briefing covering Malaysian culture, university life, packing lists, entry requirements, and your first week in Malaysia.",
    icon: "🎯",
  },
  {
    title: "Arrival & Pickup Coordination",
    description:
      "We help coordinate airport pickup with universities or trusted providers and guide you through your first arrival steps.",
    icon: "🛬",
  },
  {
    title: "Post-arrival Assistance",
    description:
      "Basic support after you arrive in Malaysia such as SIM cards, transport guidance, and settling into student life.",
    icon: "🤝",
  },
];

const ServicesSection = () => {
  const totalServices = services.length;

  const handleWhatsAppConsultationRequest = () => {
    openWhatsAppChat();
  };

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-16">
      {/* Header Banner */}
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇲🇾</span>
            <span className="text-lg font-semibold text-white">
              Malaysia Education Support Team
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative -mt-16 mx-auto max-w-6xl rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        {/* Section Intro */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-blue-600">
              Our Services
            </p>
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-900">
            Practical Support for Studying in Malaysia
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide step-by-step assistance for students planning to study in Malaysia.
            Our goal is to offer clear, practical support throughout your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-blue-50 to-red-50 p-8 border border-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">
                {totalServices}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Student Support Services
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">Malaysia</div>
              <div className="mt-2 text-sm text-gray-600">
                Our Destination Focus
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">10+</div>
              <div className="mt-2 text-sm text-gray-600">
                Partner Universities (Growing)
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">1:1</div>
              <div className="mt-2 text-sm text-gray-600">
                Personal Guidance for Every Student
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleWhatsAppConsultationRequest}
            className="group cursor-pointer inline-flex items-center gap-3 rounded-md bg-linear-to-r from-blue-600 to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(59,130,246,0.4)] hover:-translate-y-1"
          >
            <span>Request a Free Malaysia Study Consultation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-sm text-gray-500">
            We are a growing team dedicated to helping students begin their Malaysia study journey with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
