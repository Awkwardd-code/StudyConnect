
import { FileText, ArrowRight, Clock, CheckCircle2, Plane, School } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Choose Course & University",
    description:
      "Select your preferred Malaysian university or college, program type (Diploma, Degree, Master, PhD), and intake date. After that, you share your academic documents.",
  },
  {
    step: 2,
    title: "Submit Required Documents",
    description:
      "Prepare and submit documents: passport (all pages), academic certificates and transcripts, passport-size photo, English test (if needed), and any health or personal statement forms. Documents are checked before submission.",
  },
  {
    step: 3,
    title: "University Issues Offer Letter",
    description:
      "If you meet the requirements, the university issues a conditional or unconditional offer letter. Some universities may ask for a registration fee or initial payment.",
  },
  {
    step: 4,
    title: "Apply for eVAL (Visa Approval Letter)",
    description:
      "The university submits your application through EMGS (Education Malaysia Global Services). Documents are uploaded, EMGS fees are paid, and immigration, health, and academic checks are done.",
    extra: "Processing time: usually around 2–10 weeks, depending on the institution.",
  },
  {
    step: 5,
    title: "eVAL Issued by Immigration",
    description:
      "Once approved, EMGS releases the Electronic Visa Approval Letter (eVAL). You download and print this letter – it is essential for entering Malaysia as a student.",
  },
  {
    step: 6,
    title: "Apply for Single Entry Visa (SEV)",
    description:
      "For countries like Bangladesh, you must apply for a Single Entry Visa (SEV) at the Malaysian Embassy using your eVAL, passport, photos, forms, and embassy visa fee.",
    extra: "Processing time: usually 3–5 working days (may vary).",
  },
  {
    step: 7,
    title: "Travel to Malaysia",
    description:
      "After receiving your SEV, you can book your flight, arrange accommodation, and prepare all travel documents ready for immigration at the Malaysian airport.",
  },
  {
    step: 8,
    title: "Arrival & Post-Arrival Steps in Malaysia",
    description:
      "After arrival, you complete health screening, immigration processing, and receive your student pass and i-Kad.",
    bullets: [
      "Health screening at EMGS-approved clinic within 7 days of arrival.",
      "University submits your passport for student pass sticker and i-Kad.",
      "After processing, you collect your passport and i-Kad and start your classes.",
    ],
  },
];

const VisaProcessSection = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      {/* Top banner */}
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Plane className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Malaysia Student Visa Processing Steps
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="rounded-[36px] bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(59,130,246,0.15)] space-y-10">
          {/* Intro */}
          <div className="grid gap-8 md:grid-cols-[2fr_1.2fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-1 w-8 rounded-full bg-linear-to-r from-blue-600 to-red-600"></div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Study in Malaysia
                </p>
                <div className="h-1 w-8 rounded-full bg-linear-to-r from-red-600 to-blue-600"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                Simple Guide to Malaysia Student Visa
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600">
                This step-by-step guide explains how Bangladeshi and international students
                can obtain a Malaysian student visa – from choosing a course to receiving
                your student pass and i-Kad after arrival in Malaysia.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                  <Clock className="h-4 w-4" />
                  Typical total processing time: varies by university & intake
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs text-red-700">
                  <FileText className="h-4 w-4" />
                  Process handled through university & EMGS
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-linear-to-br from-blue-900 to-red-900 p-5 text-white space-y-3">
              <h3 className="text-lg font-semibold mb-1">
                How Study Connect Can Help
              </h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                  <span>Guidance in choosing the right course and university in Malaysia.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                  <span>Support with document checking before submission to the university.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                  <span>Updates on EMGS, eVAL, and embassy stages as your file moves forward.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                  <span>Post-arrival help with health check, immigration, and settlement.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2">
              <School className="h-6 w-6 text-blue-600" />
              Step-by-Step Visa Timeline
            </h3>

            <div className="space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 p-4 sm:p-5 md:p-6 shadow-sm"
                >
                  <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-red-600 text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <div className="pl-12 space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                    {item.extra && (
                      <p className="text-xs text-blue-700 bg-blue-50 border border-blue-100 inline-block px-3 py-1 rounded-full mt-1">
                        {item.extra}
                      </p>
                    )}
                    {item.bullets && (
                      <ul className="mt-2 space-y-1 text-sm text-gray-700">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final note / CTA */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                Need help with your Malaysia student visa?
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                We can guide you through each stage of the process so you always know what
                is happening with your file and what comes next.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Talk to Our Malaysia Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcessSection;
