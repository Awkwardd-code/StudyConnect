/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "../../data";
import { CalendarDays, Folder, ArrowUpRight, MapPin } from "lucide-react";

const BlogDetails = ({ post }: { post: BlogPost }) => {
  return (
    <section className="bg-linear-to-b from-[#eef2ff] to-[#f9fafb] pb-20">
      {/* Header */}
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 via-indigo-600 to-[#4a1cff]">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-blue-50 backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm">
                  <img
                    src="https://flagcdn.com/my.svg"
                    alt="Malaysia Flag"
                    className="h-2 w-auto mr-1"
                  />
                </span>
              </span>
              Malaysia Study Blog
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {post.title}
            </h1>
          </div>
          <div className="hidden sm:flex flex-col items-end text-xs text-blue-100">
            <span>Guides · Visa · EMGS · Campus Life</span>
          </div>
        </div>
      </div>

      {/* Main content card */}
      <div className="mx-auto -mt-10 grid max-w-6xl gap-8 rounded-[36px] border border-[#e0e4ff] bg-white p-6 sm:p-8 shadow-[0_30px_80px_rgba(11,16,48,0.18)] lg:grid-cols-[2fr_1fr]">
        {/* Article */}
        <article className="space-y-6 text-[#1a2442]">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-blue-50">
                {post.date && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 backdrop-blur-sm">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </span>
                )}
                {post.category && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                    <Folder className="h-3.5 w-3.5" />
                    <span>{post.category}</span>
                  </span>
                )}
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#111827]">
                <MapPin className="h-3.5 w-3.5 text-[#4a1cff]" />
                Malaysia
              </span>
            </div>
          </div>

          {/* Article body */}
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-base leading-7 text-[#475070]">
              {paragraph}
            </p>
          ))}

          {/* Highlights */}
          {post.highlights && (
            <div className="rounded-3xl bg-[#f7f8ff] p-6 border border-[#e0e4ff]">
              <h3 className="text-lg font-semibold text-[#121638]">
                How STC Supports You
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#475070]">
                {post.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-3xl border border-[#e5e8f5] bg-linear-to-r from-[#f7f8ff] via-white to-[#f3f4ff] p-6">
            <p className="text-lg font-semibold text-[#121638]">
              Start your Malaysia study journey with STC today!
            </p>
            <p className="mt-2 text-sm text-[#475070]">
              Book your free counselling session now and get personalised guidance for
              admissions, EMGS processing, visas, and scholarships in Malaysian universities.
            </p>
            <button className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-full bg-[#4a1cff] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_18px_45px_rgba(74,28,255,0.45)] hover:-translate-y-1">
              <span>Book your free consultation now</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#4a1cff]">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Form card */}
          <div className="rounded-[28px] border border-[#e5e8f5] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <h3 className="text-xl font-semibold text-[#121638]">
              Book a FREE Malaysia consultation
            </h3>
            <p className="mt-1 text-xs text-[#6b7294]">
              Get expert guidance for Malaysian universities, EMGS & visa.
            </p>
            <form className="mt-5 space-y-4">
              {["Name", "Email", "Phone Number", "Educational Qualification"].map(
                (label) => (
                  <label
                    key={label}
                    className="block text-sm font-semibold text-[#475070]"
                  >
                    {label}
                    <input
                      type="text"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="mt-2 w-full rounded-2xl border border-[#d8dcf0] px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20"
                    />
                  </label>
                )
              )}

              {/* Preferred Universities (Malaysia) */}
              <label className="block text-sm font-semibold text-[#475070]">
                Preferred Universities (Malaysia)
                <select className="cursor-pointer mt-2 w-full rounded-2xl border border-[#d8dcf0] bg-white px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20">
                  <option value="">Select your preferred university</option>
                  <option value="Any">Any Top Malaysian University 🇲🇾</option>
                  <option value="UM">University of Malaya (UM)</option>
                  <option value="UKM">Universiti Kebangsaan Malaysia (UKM)</option>
                  <option value="UPM">Universiti Putra Malaysia (UPM)</option>
                  <option value="USM">Universiti Sains Malaysia (USM)</option>
                  <option value="UTM">Universiti Teknologi Malaysia (UTM)</option>
                  <option value="Monash">Monash University Malaysia</option>
                  <option value="Taylors">Taylor&apos;s University</option>
                  <option value="Sunway">Sunway University</option>
                  <option value="APU">Asia Pacific University (APU)</option>
                  <option value="Nottingham">
                    University of Nottingham Malaysia
                  </option>
                  <option value="INTI">INTI International University</option>
                  <option value="UCSI">UCSI University</option>
                  <option value="MMU">Multimedia University (MMU)</option>
                </select>
                <p className="mt-1 text-[11px] text-[#7b7f99]">
                  You can mention multiple options in the message after submission.
                </p>
              </label>

              {/* IELTS */}
              <label className="block text-sm font-semibold text-[#475070]">
                IELTS Score
                <select className="cursor-pointer mt-2 w-full rounded-2xl border border-[#d8dcf0] bg-white px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20">
                  <option value="">Not taken yet</option>
                  <option value="6">6+</option>
                  <option value="6.5">6.5+</option>
                  <option value="7">7+</option>
                </select>
              </label>

              <button
                type="button"
                className="cursor-pointer w-full rounded-2xl bg-[#4a1cff] py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_18px_40px_rgba(74,28,255,0.45)] hover:-translate-y-1"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Hotline card */}
          <div className="rounded-[28px] bg-[#f7f8ff] p-5 text-sm text-[#475070] border border-[#e0e4ff]">
            <p>
              Need quick advice? Call the STC hotline at{" "}
              <strong>+880 184 4220 001</strong> or message us on WhatsApp for instant
              support about Malaysian universities.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;
