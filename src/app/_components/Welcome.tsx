/* eslint-disable @next/next/no-img-element */
const stats = [
  {
    label: "Over 10K Students",
    detail: "10K+",
    description: "Guided to their dream universities",
  },
  {
    label: "Universities",
    detail: "500+",
    description: "Partner institutions worldwide",
  },
  {
    label: "Success Rate",
    detail: "80%",
    description: "Visa & admission approvals",
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
          <p className="text-xl font-semibold text-[#574bff]">Welcome to</p>
          <h2 className="mt-2 text-4xl font-extrabold text-[#0a0f2c]">
            STC Overseas Education
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#2d2f3b]">
            STC Overseas Education is a legitimate student consultancy firm in
            Bangladesh with a new mission and vision. We help prospective
            students get admission to schools, colleges, and universities in more
            than 16+ countries. With partnerships across 500+ institutions, our
            dedicated counsellors guide students with precise admission and visa
            processing support.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#edf0ff] pt-6">
            <div className="flex -space-x-3">
              {avatars.map((url, index) => (
                <span
                  key={url}
                  className="h-14 w-14 overflow-hidden rounded-full border-4 border-white"
                >
                  <img
                    src={url}
                    alt={`STC student ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </span>
              ))}
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08123f] text-lg font-semibold text-white">
                10K+
              </span>
            </div>
            <div className="text-lg font-semibold text-[#0a0f2c]">
              Over 10K Students
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-[#4a32ff] pl-4">
                <p className="text-2xl font-bold text-[#0e1237]">{stat.detail}</p>
                <p className="text-sm font-medium text-[#222437]">{stat.label}</p>
                <p className="text-xs text-[#666b8f]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-4xl bg-[#eef3ff] p-6">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_25px_60px_rgba(22,38,99,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=960&q=80"
              alt="Global skyline"
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-center">
              <p className="text-3xl font-black text-[#0c1447]">STC</p>
              <p className="text-sm uppercase tracking-[0.4em] text-[#606a96]">
                Overseas Education
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#9ba4c3]">
                Students Tremendous Career
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
