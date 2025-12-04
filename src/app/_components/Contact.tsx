/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <section id="contact" className="rounded-[36px] bg-white px-8 py-12 shadow-[0_25px_90px_rgba(16,24,64,0.08)]">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
            alt="Counsellor"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-[28px] border border-[#eef1ff] bg-white p-8 shadow-[0_20px_70px_rgba(15,27,58,0.08)]">
          <p className="text-3xl font-semibold text-[#0a0f2c]">
            Contact us for Details
          </p>
          <p className="mt-2 text-lg font-bold text-[#1a1f3d]">
            Book A FREE consultation
          </p>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-[#41445f]">
              Name
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-2xl border border-[#d9def5] px-4 py-3 text-base text-[#0a0f2c] focus:border-[#4d38ff] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-[#41445f]">
              Email
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-2xl border border-[#d9def5] px-4 py-3 text-base text-[#0a0f2c] focus:border-[#4d38ff] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-[#41445f]">
              Phone Number
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-2xl border border-[#d9def5] px-4 py-3 text-base text-[#0a0f2c] focus:border-[#4d38ff] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-semibold text-[#41445f]">
              Preferred Country
              <input
                type="text"
                placeholder="Enter your preferred country"
                className="mt-2 w-full rounded-2xl border border-[#d9def5] px-4 py-3 text-base text-[#0a0f2c] focus:border-[#4d38ff] focus:outline-none"
              />
            </label>
            <button
              type="button"
              className="mt-4 w-full rounded-full bg-[#4226ff] py-3 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(39,27,124,0.3)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
