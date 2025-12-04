/* eslint-disable @next/next/no-img-element */
const stats = [
  { label: "Years of Experience", value: "12+" },
  { label: "Partner Institutes", value: "500+" },
  { label: "Students Counselled", value: "10K+" },
  { label: "Countries Covered", value: "18" },
];

const values = [
  {
    title: "Student-First Guidance",
    description:
      "Every counselling session is tailored to understand personal goals, learning styles, and financial expectations so students make confident decisions.",
  },
  {
    title: "Transparency & Integrity",
    description:
      "We provide clear timelines, costs, and documentation requirements to ensure there are no surprises throughout the application journey.",
  },
  {
    title: "Lifetime Support",
    description:
      "From pre-departure briefings to alumni networking, our counsellors stay connected with students even after they reach their campuses.",
  },
];

const journey = [
  {
    year: "2012",
    title: "Founded in Dhaka",
    description: "Started with a small team of counsellors helping students explore European universities.",
  },
  {
    year: "2016",
    title: "Global Partnerships",
    description: "Signed strategic agreements with 50+ institutes across Europe, Australia, and North America.",
  },
  {
    year: "2020",
    title: "Virtual Counselling",
    description: "Introduced always-on virtual support, visa webinars, and digital document tracking.",
  },
  {
    year: "Today",
    title: "10K+ Success Stories",
    description: "We continue to guide ambitious students with modern tools, seasoned mentors, and authentic success stories.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#f5f6ff] pb-20">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]" />
      <div className="relative -mt-16 mx-auto max-w-6xl space-y-12 rounded-[36px] bg-white px-8 py-12 shadow-[0_25px_70px_rgba(10,14,50,0.15)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#4a1cff]">About Us</p>
            <h1 className="mt-3 text-4xl font-bold text-[#111b33]">Guiding bold students to global campuses.</h1>
            <p className="mt-4 text-lg leading-8 text-[#4b5675]">
              STC Overseas Education is a student-first consultancy from Bangladesh. We combine experienced counsellors,
              verified university partnerships, and data-backed visa support to help students unlock opportunities across the world.
              Our approach blends empathy with analytics so every profile receives the right roadmap.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#e2e8ff] bg-[#f8faff] p-4 text-center">
                  <p className="text-3xl font-bold text-[#2816c7]">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#4b5675]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="h-full rounded-4xl bg-linear-to-br from-[#fde9ff] via-white to-[#e4ecff] p-4">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
                alt="Counsellor meeting"
                className="h-full w-full rounded-[26px] object-cover shadow-[0_30px_70px_rgba(16,24,64,0.25)]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl bg-white p-5 text-center shadow-[0_20px_45px_rgba(15,18,63,0.15)]">
              <p className="text-xl font-semibold text-[#111b33]">&quot;Every student deserves a tailored plan.&quot;</p>
              <p className="mt-1 text-sm text-[#4b5675]">— Lead Counsellor, STC</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl border border-[#e2e8ff] p-6">
              <h3 className="text-xl font-semibold text-[#111b33]">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4b5675]">{value.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111b33]">Our Journey</h2>
          <div className="mt-6 space-y-4">
            {journey.map((item) => (
              <div key={item.year} className="flex flex-col gap-3 rounded-3xl border border-[#e2e8ff] bg-[#fbfcff] p-5 shadow-sm sm:flex-row sm:items-center sm:gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4a1cff]/10 text-lg font-bold text-[#4a1cff]">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111b33]">{item.title}</h3>
                  <p className="text-sm text-[#4b5675]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
