/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Play } from "lucide-react";

const stories = [
  {
    title: "Austria Visa Success",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Australia Offer",
    image:
      "https://images.unsplash.com/photo-1455906876003-298dd8c44b0f?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Austria Student",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Family Success",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Australia Visa",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  },
];

const Stories = () => {
  return (
    <section className="rounded-[36px] bg-[#eef3ff] px-6 py-10 text-center shadow-[0_20px_60px_rgba(10,22,63,0.08)]">
      <p className="text-3xl font-bold text-[#0a0f2c]">Success Stories</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {stories.map((story) => (
          <article
            key={story.title}
            className="group relative h-80 overflow-hidden rounded-[34px] shadow-[0_25px_60px_rgba(15,23,66,0.25)] cursor-pointer transition-all duration-300 hover:shadow-[0_30px_80px_rgba(15,23,66,0.35)] hover:-translate-y-2"
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60 transition-all duration-300 group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#3518f6] shadow-lg transition-all duration-300 group-hover:h-20 group-hover:w-20 group-hover:bg-white group-hover:shadow-2xl">
                <Play className="h-8 w-8 transition-all duration-300 group-hover:h-10 group-hover:w-10" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white drop-shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                {story.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="group cursor-pointer inline-flex items-center gap-3 rounded-full bg-[#4226ff] px-6 py-3 text-white shadow-[0_20px_45px_rgba(39,27,124,0.3)] transition-all duration-300 hover:bg-[#3a1fcc] hover:shadow-[0_25px_55px_rgba(39,27,124,0.4)] hover:-translate-y-1">
          All Stories
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#12004d] transition group-hover:translate-x-1">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Stories;
