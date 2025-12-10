/* eslint-disable @next/next/no-img-element */

const stats = [
  { label: "Partner Malaysian Universities", value: "10+" },
  { label: "Years Focused on Malaysia", value: "1+" },
  { label: "Office Locations", value: "2" },
  { label: "Primary Markets", value: "Bangladesh & Malaysia" },
];

const values = [
  {
    title: "Malaysia-Focused Guidance",
    description:
      "We focus specifically on Malaysian education pathways, helping Bangladeshi students understand EMGS, admissions, and visa steps in a clear and simple way.",
    icon: "🎓",
  },
  {
    title: "End-to-End Support",
    description:
      "From your first counselling session in Bangladesh to settling in Kuala Lumpur, we stay involved at each stage of your journey with step-by-step guidance.",
    icon: "🛠️",
  },
  {
    title: "Honest & Transparent Advice",
    description:
      "We believe in realistic, student-first guidance. No false promises, no hidden conditions – just clear information so you can make confident decisions.",
    icon: "✅",
  },
];

const journey = [
  {
    year: "2024",
    title: "Founded as a Malaysia-Focused Consultancy",
    description:
      "Started our journey to support Bangladeshi students who want to study in Malaysia with dedicated, personalized guidance.",
  },
  {
    year: "2024",
    title: "Bangladesh Office Setup",
    description:
      "Opened our Bangladesh office in Fulbarigate, Khulna to provide in-person counselling and support for students and parents.",
  },
  {
    year: "2024",
    title: "Malaysia Support Office in Kuala Lumpur",
    description:
      "Set up our base in Setapak, Kuala Lumpur to better support students after arrival and maintain direct contact with universities.",
  },
  {
    year: "Today",
    title: "Growing Bangladesh–Malaysia Network",
    description:
      "Actively expanding our partner universities and support network across Malaysia while staying close to students back home in Bangladesh.",
  },
];

const contactDetails = {
  email: "studyconnect.bd@gmail.com",
  facebook: "https://www.facebook.com/share/1KiHA3tdr3/",
  bdPhones: ["+880 1677-782567", "+880 1767-681478"],
  myPhone: "+601124054294",
  bdAddress:
    "Beside B.K Primary School, Fulbarigate, Khulna - Joshore Road, Khulna, 9204, Bangladesh",
  myAddress:
    "Residensi PV21, No. 06, Jalan Usahawan 2, Off Jalan Genting Klang, 53200 Setapak, Kuala Lumpur, Malaysia",
};

const AboutSection = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      {/* Top banner */}
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
              Bangladesh to Malaysia Education Support
            </span>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative -mt-16 mx-auto max-w-6xl space-y-12 rounded-[36px] bg-white px-6 sm:px-8 py-10 sm:py-12 shadow-[0_25px_70px_rgba(59,130,246,0.15)]">
        {/* Intro + stats + image */}
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
              Helping Bangladeshi Students Build Their Future in Malaysia
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are a dedicated Malaysia-focused education support team, based in both
              Bangladesh and Kuala Lumpur. Our mission is to make the study-in-Malaysia
              process simple, clear, and supportive for students and parents — from the first
              counselling call to life on campus in Malaysia.
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
                &quot;Every Bangladeshi student deserves a clear, supported journey to Malaysian education.&quot;
              </p>
              <p className="mt-2 text-sm text-blue-100">— Our Malaysia Education Team</p>
            </div>
          </div>
        </div>

        {/* Values */}
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

        {/* Journey */}
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
              A growing bridge between Bangladesh and Malaysia since 2024
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
              To support Bangladeshi students in accessing quality Malaysian education
              through honest guidance, clear information, and step-by-step support — from
              first enquiry to life on campus in Kuala Lumpur and beyond.
            </p>
          </div>
          <div className="rounded-3xl bg-linear-to-r from-blue-50 to-red-50 p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become a trusted Bangladesh–Malaysia education bridge, helping thousands
              of students confidently build their academic and professional futures in
              Malaysia over the coming years.
            </p>
          </div>
        </div>

        {/* Contact & Offices */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Bangladesh Contact */}
          <div className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Bangladesh Office</h3>
            <p className="text-sm text-gray-700 mb-3">
              {contactDetails.bdAddress}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">BD Contact:</span>{" "}
              {contactDetails.bdPhones.join(" / ")}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-blue-600 underline underline-offset-2"
              >
                {contactDetails.email}
              </a>
            </p>
          </div>

          {/* Malaysia Contact */}
          <div className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-red-50 p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Malaysia Office</h3>
            <p className="text-sm text-gray-700 mb-3">
              {contactDetails.myAddress}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Malaysia Contact:</span>{" "}
              {contactDetails.myPhone}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Facebook:</span>{" "}
              <a
                href={contactDetails.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-2"
              >
                Visit Our Facebook Page
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
