const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <article className="group cursor-pointer rounded-3xl border border-[#dfe7ff] bg-white p-6 text-left shadow-[0_10px_35px_rgba(14,33,90,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(14,33,90,0.18)] hover:border-[#2c23ff]/20">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff1ff] text-[#2c23ff] transition-all duration-300 group-hover:bg-[#2c23ff] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">
        <span role="img" aria-hidden="true" className="text-3xl">
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#111b33] transition-colors duration-300 group-hover:text-[#2c23ff]">{title}</h3>
        <p className="mt-2 text-sm text-[#4b5675] leading-relaxed transition-colors duration-300 group-hover:text-[#333]">{description}</p>
      </div>
    </div>
  </article>
);

const services = [
  {
    title: "Free Assessment & Consultation",
    description:
      "We provide a free profile evaluation and consultation to help you choose the right country, university, and course based on your academic background and future goals.",
    icon: "💬",
  },
  {
    title: "Admission & Guideline",
    description:
      "Our expert team guides you through the entire admission process, including application submission, document preparation, and meeting university requirements within deadlines.",
    icon: "🎓",
  },
  {
    title: "Quick Offer Letter",
    description:
      "We ensure you receive a fast-tracked offer letter from your chosen university so you can move forward quickly with your study abroad journey.",
    icon: "⚡",
  },
  {
    title: "Visa Documents Preparation",
    description:
      "We help you prepare all the required visa documents, such as financial statements, medical records, SOPs, and recommendation letters, with accuracy and professionalism.",
    icon: "📋",
  },
  {
    title: "Visa Guidance & Processing",
    description:
      "Our visa experts provide step-by-step support throughout the visa application process, ensuring you meet all requirements and maximize your chances of approval.",
    icon: "✈️",
  },
  {
    title: "Scholarship / Funding & Bank Support",
    description:
      "We guide you in finding scholarship opportunities and funding options, assisting with bank support, including solvency certificates and education loan processes.",
    icon: "💰",
  },
  {
    title: "Language Course",
    description:
      "We provide training for IELTS, TOEFL, and other language proficiency tests to help you meet your desired scores and visa requirements with confidence.",
    icon: "📚",
  },
  {
    title: "Accommodation",
    description:
      "We assist you in finding safe, affordable, and convenient student accommodation, whether it's university dormitories or private housing.",
    icon: "🏠",
  },
  {
    title: "Ph.D / Research Support",
    description:
      "For Ph.D. and research-based programs, we offer comprehensive support with proposal writing, supervision connections, and structured research planning.",
    icon: "🔬",
  },
  {
    title: "Embassy Interview Preparation",
    description:
      "We prepare you for your embassy interview through mock sessions and personalized coaching, ensuring you answer confidently and successfully.",
    icon: "🎯",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f5f6ff] pb-16">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]"></div>
      <div className="relative -mt-16 mx-auto max-w-6xl rounded-[36px] bg-white px-6 py-12 shadow-[0_25px_70px_rgba(10,14,50,0.15)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#4a1cff]">Service</p>
          <h2 className="mt-3 text-4xl font-bold text-[#111b33]">What We Offer</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
