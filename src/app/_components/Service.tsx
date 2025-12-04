import {
  GraduationCap,
  MessageSquareMore,
  FileBadge2,
  Stamp,
  PlaneTakeoff,
  Landmark,
  Languages,
  Home,
  Microscope,
  UsersRound,
} from "lucide-react";

const services = [
  { title: "Free Assessment & Consultation", icon: MessageSquareMore },
  { title: "Admission & Guideline", icon: GraduationCap },
  { title: "Quick Offer Letter", icon: FileBadge2 },
  { title: "Visa Documents Preparation", icon: Stamp },
  { title: "Visa Guidance & Processing", icon: PlaneTakeoff },
  { title: "Scholarship / Funding & Bank Support", icon: Landmark },
  { title: "Language Course", icon: Languages },
  { title: "Accommodation", icon: Home },
  { title: "Ph.D / Research support", icon: Microscope },
  { title: "Embassy Interview Preparation", icon: UsersRound },
];

const Service = () => {
  return (
    <section className="rounded-[36px] bg-white px-6 py-10 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      <div className="text-center">
        <p className="text-3xl font-bold text-[#0a0f2c]">Our Services</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[28px] border border-[#e4e7fb] bg-[#f7f9ff] p-6 text-center shadow-[0_18px_45px_rgba(15,34,79,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,34,79,0.15)]"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3a26ff] shadow-inner">
              <service.icon className="h-8 w-8" />
            </div>
            <p className="mt-5 text-lg font-semibold text-[#0d1329]">
              {service.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;
