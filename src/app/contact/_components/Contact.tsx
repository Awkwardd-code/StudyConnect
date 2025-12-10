
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";
import { buildWhatsAppMessage, openWhatsAppChat } from "@/lib/whatsapp";

const infoItems = [
  {
    label: "Email",
    value: "studyconnect.bd@gmail.com",
    icon: Mail,
    color: "blue",
  },
  {
    label: "Bangladesh Contact",
    value: "+880 1677-782567, +880 1767-681478",
    icon: Phone,
    color: "red",
  },
  {
    label: "Malaysia Contact / WhatsApp",
    value: "+6011 2405 4294",
    icon: MessageSquare,
    color: "green",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    university: "",
    ielts: "",
  });

  type InputEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

  const handleChange =
    (field: keyof typeof formData) =>
    (event: InputEvent) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const sendConsultationRequest = () => {
    const message = buildWhatsAppMessage(
      "Hello Study Connect Malaysia team! I would like a free Malaysia consultation.",
      [
        { label: "Full Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Program", value: formData.program },
        { label: "Preferred University", value: formData.university },
        { label: "IELTS/English Proficiency", value: formData.ielts },
      ]
    );

    openWhatsAppChat(message);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendConsultationRequest();
  };

  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="text-xl">📞</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Contact Our Malaysia Education Team
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="grid gap-8 rounded-[36px] bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(59,130,246,0.15)] lg:grid-cols-[2fr_1fr]">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="overflow-hidden rounded-3xl cursor-pointer group relative">
              <img
                src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=1200&q=80"
                alt="Malaysian university consultation"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">
                  Personalized Malaysia Education Guidance
                </p>
                <p className="text-sm opacity-90 mt-1">
                  One-to-one support for your study journey in Malaysia
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900">
                One-to-One Malaysia Education Consultation
              </h2>
              <p className="mt-3 text-base leading-7 text-gray-600">
                We support Bangladeshi students who want to study in Malaysia with clear,
                step-by-step guidance. From choosing the right course and university to
                understanding admission and visa requirements, our team is here to help you
                and your family make informed decisions.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-4 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Why Choose Our Malaysia Service?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Dedicated focus on Malaysia as a study destination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        Support team available in both Bangladesh and Kuala Lumpur
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>
                        Step-by-step guidance for admission, EMGS, and student visa process
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-red-50 p-4 border border-red-100">
                  <h3 className="font-semibold text-red-900 mb-2">
                    How We Communicate
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>We aim to respond as soon as possible during working hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>WhatsApp and phone support during office time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>Free initial consultation for Malaysia study plans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Malaysia Office</h3>
                    <p className="text-sm text-gray-600">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Residensi PV21, No. 06, Jalan Usahawan 2, Off Jalan Genting Klang,
                  53200 Setapak, Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Bangladesh Office</h3>
                    <p className="text-sm text-gray-600">Khulna, Bangladesh</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Beside B.K Primary School, Fulbarigate, Khulna - Joshore Road, Khulna,
                  9204, Bangladesh
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-3xl bg-linear-to-r from-blue-900 to-red-900 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {infoItems.map((item) => (
                  <div key={item.value} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Office Hours (Bangladesh Time)</p>
                    <p className="font-medium">
                      Saturday - Thursday: 10:30 AM - 7:00 PM
                    </p>
                    <p className="text-sm text-blue-200">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3 mb  -4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                Free Malaysia Education Consultation
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  Phone Number
                </span>
                <input
                  type="tel"
                  placeholder="+8801XXXXXXXXX or +60XXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  Interested Program in Malaysia
                </span>
                <select
                  value={formData.program}
                  onChange={handleChange("program")}
                  className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                >
                  <option value="">Select program type</option>
                  <option value="undergraduate">Undergraduate Degree</option>
                  <option value="postgraduate">Postgraduate Degree</option>
                  <option value="phd">PhD/Research</option>
                  <option value="diploma">Diploma/Certificate</option>
                  <option value="language">English Language Course</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  Preferred Malaysian University
                </span>
                <select
                  value={formData.university}
                  onChange={handleChange("university")}
                  className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                >
                  <option value="">Select a university</option>
                  <option value="um">University of Malaya</option>
                  <option value="monash">Monash University Malaysia</option>
                  <option value="taylors">Taylor&apos;s University</option>
                  <option value="sunway">Sunway University</option>
                  <option value="utm">Universiti Teknologi Malaysia</option>
                  <option value="notsure">Not sure yet - Need guidance</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">
                  IELTS/English Proficiency
                </span>
                <select
                  value={formData.ielts}
                  onChange={handleChange("ielts")}
                  className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                >
                  <option value="">Not Taken Yet</option>
                  <option value="5.5">IELTS 5.5+</option>
                  <option value="6">IELTS 6.0+</option>
                  <option value="6.5">IELTS 6.5+</option>
                  <option value="7">IELTS 7.0+</option>
                </select>
              </label>

              <button
                type="submit"
                className="cursor-pointer w-full rounded-xl bg-linear-to-r from-blue-600 to-red-600 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get Free Malaysia Consultation
              </button>
            </form>

            <div className="mt-6 rounded-xl bg-blue-50 p-4 border border-blue-100">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-blue-700">
                  ✓ We will get back to you:
                </span>{" "}
                Our Malaysia education team will contact you as soon as possible
                during office hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
