/* eslint-disable @next/next/no-img-element */
const infoItems = [
  { label: "Email", value: "stchotlinebd@gmail.com" },
  { label: "Hotline", value: "+880184 4220 001" },
  { label: "Hotline", value: "+880184 4220 002" },
  { label: "Hotline", value: "+880184 4220 003" },
];

const ContactSection = () => {
  return (
    <section className="bg-[#f4f5ff] pb-24">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]">
        <div className="mx-auto flex h-full max-w-4xl items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-8 rounded-[36px] bg-white p-8 shadow-[0_25px_70px_rgba(11,16,45,0.15)] lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-3xl cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
              alt="Consulting"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[#111b33]">One To One Consulting</h2>
            <p className="mt-3 text-base leading-7 text-[#4b5675]">
              Whether you have questions about studying abroad, university applications, visa processing, or scholarship opportunities — our expert consultants are ready to guide you every step of the way.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-[#e5e8f4] p-6 transition-all duration-300 hover:shadow-lg hover:border-[#4a1cff]/30 hover:bg-linear-to-br hover:from-white hover:to-blue-50/30">
            <h3 className="text-lg font-semibold text-[#111b33] transition-colors duration-300 hover:text-[#4a1cff]">Corporate Office</h3>
            <p className="mt-2 text-sm text-[#4b5675]">
              United Benison (5th & 6th floor) House - 1, Road - 17, Block - D (Hotel Sarina Opposite), Banani, Dhaka - 1213, Bangladesh
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#4b5675]">
              {infoItems.map((item) => (
                <li key={item.value} className="flex items-center gap-2">
                  <span className="text-[#4a1cff]">•</span>
                  <span><strong>{item.label}:</strong> {item.value}</span>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="text-[#4a1cff]">•</span>
                <span><strong>Office Hours:</strong> Saturday - Thursday, 10:30 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#4a1cff]">•</span>
                <span><strong>Friday:</strong> Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-[28px] border border-[#e5e8f5] bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#4a1cff]/20">
          <h3 className="text-xl font-semibold text-[#111b33] transition-colors duration-300 hover:text-[#4a1cff]">Book A FREE consultation</h3>
          <form className="mt-5 space-y-4">
            {[
              "Name",
              "Email",
              "Phone Number",
              "Educational Qualification",
              "Preferred Country",
            ].map((label) => (
              <label key={label} className="block text-sm font-semibold text-[#475070]">
                {label}
                <input
                  type="text"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  className="mt-2 w-full rounded-2xl border border-[#d8dcf0] px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20"
                />
              </label>
            ))}
            <label className="block text-sm font-semibold text-[#475070]">
              Language Proficiency
              <select className="cursor-pointer mt-2 w-full rounded-2xl border border-[#d8dcf0] px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20">
                <option value="">Not Taken Yet</option>
                <option value="6">IELTS 6+</option>
                <option value="6.5">IELTS 6.5+</option>
                <option value="7">IELTS 7+</option>
              </select>
            </label>
            <button
              type="button"
              className="cursor-pointer w-full rounded-2xl bg-[#4a1cff] py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_20px_50px_rgba(74,28,255,0.45)] hover:-translate-y-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
