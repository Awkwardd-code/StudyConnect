const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <article className="group cursor-pointer rounded-3xl border border-blue-100 bg-white p-6 text-left shadow-[0_10px_35px_rgba(14,33,90,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(14,33,90,0.18)] hover:border-blue-300">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-red-50 text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:to-red-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
        <span role="img" aria-hidden="true" className="text-3xl">
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-900 transition-colors duration-300 group-hover:text-blue-700">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">{description}</p>
      </div>
    </div>
  </article>
);

const services = [
  {
    title: "Free Malaysia Education Assessment",
    description:
      "Get a free personalized evaluation for studying in Malaysia. We analyze your profile and recommend the best universities, courses, and scholarship opportunities.",
    icon: "💬",
  },
  {
    title: "Malaysian University Admissions",
    description:
      "Complete support for admission to 50+ Malaysian universities. We handle application submissions, document preparation, and meet all university requirements.",
    icon: "🎓",
  },
  {
    title: "EMGS & Offer Letter Processing",
    description:
      "Fast-track Education Malaysia Global Services (EMGS) processing and quick offer letters from Malaysian universities to expedite your study journey.",
    icon: "⚡",
  },
  {
    title: "Student Visa Documentation",
    description:
      "Comprehensive support for Malaysian student visa documents including financial proof, medical reports, SOPs, and recommendation letters.",
    icon: "📋",
  },
  {
    title: "Malaysia Student Visa Processing",
    description:
      "Expert guidance through the complete Malaysia student visa process with 98% success rate. We ensure all requirements are met for approval.",
    icon: "✈️",
  },
  {
    title: "Malaysian Scholarships & Funding",
    description:
      "Assistance in finding and applying for Malaysian government and university scholarships. Support with bank documentation and education loans.",
    icon: "💰",
  },
  {
    title: "English Language Preparation",
    description:
      "IELTS/TOEFL training specifically tailored for Malaysian university requirements. Achieve the scores needed for admission and visa success.",
    icon: "📚",
  },
  {
    title: "Accommodation in Malaysia",
    description:
      "Find safe, affordable student housing across Malaysia - from university dormitories to private apartments near your campus.",
    icon: "🏠",
  },
  {
    title: "Research Support for Malaysia",
    description:
      "Specialized support for PhD and research programs in Malaysia including proposal writing, supervisor connections, and research methodology.",
    icon: "🔬",
  },
  {
    title: "Pre-departure Briefing & Support",
    description:
      "Comprehensive orientation about Malaysian culture, academic system, and practical tips. Includes embassy interview preparation and mock sessions.",
    icon: "🎯",
  },
  {
    title: "Airport Pickup & Arrival Support",
    description:
      "Welcome service upon arrival in Malaysia. We arrange airport pickup, initial accommodation, and help with local registration processes.",
    icon: "🛬",
  },
  {
    title: "Post-arrival Settlement Assistance",
    description:
      "Ongoing support after arrival including bank account setup, SIM card, local orientation, and integration into Malaysian student life.",
    icon: "🤝",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-16">
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇲🇾</span>
            <span className="text-lg font-semibold text-white">Malaysia Education Specialists</span>
          </div>
        </div>
      </div>
      
      <div className="relative -mt-16 mx-auto max-w-6xl rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-blue-600">Our Services</p>
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-900">Comprehensive Malaysia Study Support</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end guidance for your education journey in Malaysia, from application to graduation
          </p>
        </div>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-blue-50 to-red-50 p-8 border border-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">12</div>
              <div className="mt-2 text-sm text-gray-600">Comprehensive Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">50+</div>
              <div className="mt-2 text-sm text-gray-600">Malaysian Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">98%</div>
              <div className="mt-2 text-sm text-gray-600">Visa Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">10+</div>
              <div className="mt-2 text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="group cursor-pointer inline-flex items-center gap-3 rounded-md bg-linear-to-r from-blue-600 to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(59,130,246,0.4)] hover:-translate-y-1">
            <span>Get Free Malaysia Consultation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="mt-4 text-sm text-gray-500">
            All services include personalized support from Malaysia education experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;