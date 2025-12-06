
/* eslint-disable @next/next/no-img-element */

const stats = [
  { label: "Malaysian Universities", value: "10+" },
  { label: "Years Malaysia Experience", value: "1+" },
  { label: "Students in Malaysia", value: "5,000+" },
  { label: "Visa Success Rate", value: "98%" },
];

const values = [
  {
    title: "Malaysia Education Specialists",
    description:
      "We focus exclusively on Malaysian education with deep expertise in EMGS processes, university admissions, and Malaysian visa requirements.",
    icon: "🎓",
  },
  {
    title: "End-to-End Support",
    description:
      "From free assessment to post-arrival settlement, we provide comprehensive support throughout your Malaysia study journey.",
    icon: "🛠️",
  },
  {
    title: "Authentic Student Success",
    description:
      "Our track record of 5,000+ successful students in Malaysia ensures you receive proven guidance and reliable support.",
    icon: "✅",
  },
];

const journey = [
  {
    year: "2024",
    title: "Malaysia Education Launch",
    description:
      "Founded with a clear mission to specialize exclusively in Malaysian education consultancy.",
  },
  {
    year: "2024",
    title: "University Partnerships",
    description:
      "Established direct partnerships with 50+ top Malaysian universities and international branch campuses.",
  },
  {
    year: "2024",
    title: "Digital Counselling Platform",
    description:
      "Launched comprehensive online assessment and virtual counselling services for Malaysian studies.",
  },
  {
    year: "Today",
    title: "Growing Malaysia Network",
    description:
      "Expanding our support network across Malaysia with on-ground partners and alumni connections.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="text-xl">
                <img
                  src="https://flagcdn.com/my.svg"
                  alt="Malaysia Flag"
                  className="h-2 w-auto mr-1"
                />
              </span>
            </div>
            <span className="text-lg font-semibold text-white">
              Malaysia Education Specialists
            </span>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 mx-auto max-w-6xl space-y-12 rounded-[36px] bg-white px-6 sm:px-8 py-10 sm:py-12 shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-blue-600">
                About Us
              </p>
              <div className="h-1 w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Your Gateway to Malaysian Education Excellence
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are Malaysia&apos;s premier education consultancy, founded with a singular
              focus: to guide international students to top Malaysian universities. Our team
              combines deep expertise in the Malaysian education system with personalized
              support to ensure your study journey is smooth and successful.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 to-red-50 p-4 text-center transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-blue-900">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="h-full rounded-4xl bg-linear-to-br from-blue-50 to-red-50 p-4">
              <img
                src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=900&q=80"
                alt="Malaysian university campus"
                className="h-full w-full rounded-[26px] object-cover shadow-[0_30px_70px_rgba(59,130,246,0.25)]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl bg-linear-to-r from-blue-600 to-red-600 p-5 text-center shadow-[0_20px_45px_rgba(59,130,246,0.25)]">
              <p className="text-xl font-semibold text-white">
                &quot;Every student deserves a smooth journey to Malaysian education.&quot;
              </p>
              <p className="mt-2 text-sm text-blue-100">— Malaysia Education Team</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50 p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-100 to-red-100 text-blue-600 text-xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="h-1 w-6 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
              <h2 className="text-2xl font-bold text-blue-900">
                Our Journey in Malaysian Education
              </h2>
              <div className="h-1 w-6 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
            </div>
            <p className="mt-2 text-gray-600">
              Founded in 2024 with a clear focus on Malaysian education
            </p>
          </div>
          <div className="space-y-4">
            {journey.map((item, index) => (
              <div
                key={`${item.year}-${item.title}-${index}`}
                className="flex flex-col gap-3 rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50 p-5 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-red-600 text-lg font-bold text-white">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-blue-600">
                  <img
                    src="https://flagcdn.com/my.svg"
                    alt="Malaysia Flag"
                    className="h-2 w-auto mr-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-linear-to-r from-blue-900 to-red-900 p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100">
              To become the most trusted gateway for international students seeking quality
              education in Malaysia, providing end-to-end support that ensures academic
              success and cultural integration.
            </p>
          </div>
          <div className="rounded-3xl bg-linear-to-r from-blue-50 to-red-50 p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To connect 10,000+ international students with Malaysia&apos;s world-class
              education system by 2026, fostering global citizens who contribute to
              Malaysia&apos;s knowledge economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
