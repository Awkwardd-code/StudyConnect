/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "../../data";

const BlogDetails = ({ post }: { post: BlogPost }) => {
  return (
    <section className="bg-[#f4f6fb] pb-20">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]">
        <div className="mx-auto flex h-full max-w-5xl items-center px-4">
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
        </div>
      </div>
      <div className="mx-auto -mt-10 grid max-w-6xl gap-8 rounded-[36px] bg-white p-8 shadow-[0_30px_80px_rgba(11,16,48,0.18)] lg:grid-cols-[2fr_1fr]">
        <article className="space-y-6 text-[#1a2442]">
          <img
            src={post.image}
            alt={post.title}
            className="h-64 w-full rounded-3xl object-cover shadow-md"
            loading="lazy"
          />
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-base leading-7 text-[#475070]">
              {paragraph}
            </p>
          ))}
          {post.highlights && (
            <div className="rounded-3xl bg-[#f7f8ff] p-6">
              <h3 className="text-lg font-semibold text-[#121638]">How STC Supports You</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#475070]">
                {post.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-3xl border border-[#e5e8f5] bg-white p-6">
            <p className="text-lg font-semibold text-[#121638]">
              Start your study journey with STC today!
            </p>
            <p className="mt-2 text-sm text-[#475070]">
              Book your free counselling session now and get personalised guidance for admissions, visas, and scholarships.
            </p>
            <button className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-full bg-[#4a1cff] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_18px_45px_rgba(74,28,255,0.45)] hover:-translate-y-1">
              Book your free consultation now
            </button>
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-[28px] border border-[#e5e8f5] bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#121638]">Book a FREE consultation</h3>
            <form className="mt-5 space-y-4">
              {[
                "Name",
                "Email",
                "Phone Number",
                "Educational Qualification",
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
                Preferred Country
                <input
                  type="text"
                  placeholder="Enter your preferred country"
                  className="mt-2 w-full rounded-2xl border border-[#d8dcf0] px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20"
                />
              </label>
              <label className="block text-sm font-semibold text-[#475070]">
                IELTS Score
                <select className="cursor-pointer mt-2 w-full rounded-2xl border border-[#d8dcf0] px-4 py-2.5 text-sm focus:border-[#4a1cff] focus:outline-none transition-all duration-300 hover:border-[#8b9dc3] focus:ring-2 focus:ring-[#4a1cff]/20">
                  <option value="">Not Taken Yet</option>
                  <option value="6">6+</option>
                  <option value="6.5">6.5+</option>
                  <option value="7">7+</option>
                </select>
              </label>
              <button type="button" className="cursor-pointer w-full rounded-2xl bg-[#4a1cff] py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(74,28,255,0.35)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_18px_40px_rgba(74,28,255,0.45)] hover:-translate-y-1">
                Submit
              </button>
            </form>
          </div>
          <div className="rounded-[28px] bg-[#f7f8ff] p-5 text-sm text-[#475070]">
            <p>
              Need quick advice? Call the STC hotline at <strong>+880 184 4220 001</strong> or message us on WhatsApp for instant support.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogDetails;
