/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

const infoItems = [
  { 
    label: "Malaysia Email", 
    value: "malaysia@studyconnect.com",
    icon: Mail,
    color: "blue"
  },
  { 
    label: "Malaysia Office", 
    value: "+60 3-1234 5678",
    icon: Phone,
    color: "red"
  },
  { 
    label: "WhatsApp Support", 
    value: "+60 1-2345 6789",
    icon: MessageSquare,
    color: "green"
  },
  { 
    label: "Bangladesh Office", 
    value: "+880 184 4220 001",
    icon: Phone,
    color: "blue"
  },
];

const ContactSection = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pb-20">
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 to-red-600">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="text-xl">📞</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Our Malaysia Education Team</h1>
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
                <p className="text-lg font-semibold">Personalized Malaysia Education Guidance</p>
                <p className="text-sm opacity-90 mt-1">Expert consultation for your study journey in Malaysia</p>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900">One-to-One Malaysia Education Consultation</h2>
              <p className="mt-3 text-base leading-7 text-gray-600">
                Our Malaysia education specialists are here to guide you through every step of studying in Malaysia. 
                From university selection and admission to visa processing and pre-departure preparation, we provide 
                comprehensive support tailored to your educational goals.
              </p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-4 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">Why Choose Our Malaysia Service?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>10+ years Malaysia education experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>Direct partnerships with 50+ Malaysian universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>98% student visa success rate for Malaysia</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-xl bg-red-50 p-4 border border-red-100">
                  <h3 className="font-semibold text-red-900 mb-2">Quick Response Time</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>Response within 30 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>24/7 WhatsApp support available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <span>Free initial assessment</span>
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
                  Level 23, Menara Maxis, Kuala Lumpur City Centre, 
                  50088 Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-white to-blue-50 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Bangladesh Office</h3>
                    <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  United Benison (5th & 6th floor) House -1, Road -17, Block - D, 
                  Banani, Dhaka - 1213, Bangladesh
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-3xl bg-linear-to-r from-blue-900 to-red-900 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {infoItems.map((item) => (
                  <div key={item.value} className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/20`}>
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
                    <p className="text-sm text-blue-200">Office Hours</p>
                    <p className="font-medium">Saturday - Thursday: 10:30 AM - 7:00 PM</p>
                    <p className="text-sm text-blue-200">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-red-600">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Free Malaysia Education Consultation</h3>
            </div>
            
            <form className="space-y-4">
              {[
                { label: "Full Name", placeholder: "Enter your full name" },
                { label: "Email Address", placeholder: "your.email@example.com", type: "email" },
                { label: "Phone Number", placeholder: "+60 XXX XXXXXX", type: "tel" },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="text-sm font-semibold text-gray-700 mb-1 block">{field.label}</span>
                  <input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">Interested Program in Malaysia</span>
                <select className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all">
                  <option value="">Select program type</option>
                  <option value="undergraduate">Undergraduate Degree</option>
                  <option value="postgraduate">Postgraduate Degree</option>
                  <option value="phd">PhD/Research</option>
                  <option value="diploma">Diploma/Certificate</option>
                  <option value="language">English Language Course</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">Preferred Malaysian University</span>
                <select className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all">
                  <option value="">Select a university</option>
                  <option value="um">University of Malaya</option>
                  <option value="monash">Monash University Malaysia</option>
                  <option value="taylors">Taylor's University</option>
                  <option value="sunway">Sunway University</option>
                  <option value="utm">Universiti Teknologi Malaysia</option>
                  <option value="notsure">Not sure yet - Need guidance</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 mb-1 block">IELTS/English Proficiency</span>
                <select className="cursor-pointer w-full rounded-xl border border-blue-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all">
                  <option value="">Not Taken Yet</option>
                  <option value="5.5">IELTS 5.5+</option>
                  <option value="6">IELTS 6.0+</option>
                  <option value="6.5">IELTS 6.5+</option>
                  <option value="7">IELTS 7.0+</option>
                </select>
              </label>

              <button
                type="button"
                className="cursor-pointer w-full rounded-xl bg-linear-to-r from-blue-600 to-red-600 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get Free Malaysia Consultation
              </button>
            </form>

            <div className="mt-6 rounded-xl bg-blue-50 p-4 border border-blue-100">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-blue-700">✓ Guaranteed Response:</span> 
                Our Malaysia education expert will contact you within 30 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;