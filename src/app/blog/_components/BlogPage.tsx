/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CalendarDays, Folder, ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data";

const BlogCard = ({ post }: { post: (typeof blogPosts)[number] }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#e3e7ff] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4a1cff]/50 hover:shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
    {/* Image */}
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-80" />
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#111827] shadow-sm">
          <Folder className="h-3.5 w-3.5 text-[#4a1cff]" />
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] text-white backdrop-blur">
          <span className="text-xs">
            <img
              src="https://flagcdn.com/my.svg"
              alt="Malaysia Flag"
              className="h-2 w-auto mr-1"
            />
          </span>
          <span>Malaysia Study</span>
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center gap-2 text-xs font-medium text-[#6b7192]">
        <CalendarDays className="h-3.5 w-3.5 text-[#4a1cff]" />
        <span>{post.date}</span>
      </div>

      <h3 className="mt-2 line-clamp-2 text-lg sm:text-xl font-semibold text-[#121638] transition-colors duration-300 group-hover:text-[#4a1cff]">
        {post.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm text-[#4a5072] transition-colors duration-300 group-hover:text-[#3a4662]">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-[#6b7294]">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#f3f4ff] px-3 py-1 font-medium text-[#4a1cff]">
          🎓 Malaysia Guide
        </span>
        <span className="text-[11px]">Approx. 4–6 min read</span>
      </div>

      <div className="mt-5 flex justify-between items-center gap-3">
        <Link
          href={`/blog/${post.slug}`}
          className="group/link inline-flex items-center gap-2 rounded-full bg-[#4a1cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(74,28,255,0.38)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_24px_55px_rgba(74,28,255,0.5)]"
        >
          <span>Read full article</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#4a1cff] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:scale-110">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </div>
  </article>
);

const BlogPageSection = () => {
  return (
    <section className="bg-linear-to-b from-[#eef2ff] to-[#f9fafb] pb-20">
      {/* Top header bar */}
      <div className="h-24 rounded-b-[40px] bg-linear-to-r from-blue-600 via-indigo-600 to-[#4a1cff]">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-0">
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
              Guides & Insights for Studying in Malaysia
            </h1>
          </div>
          <div className="hidden sm:flex flex-col items-end text-xs text-blue-100">
            <span>Updated regularly</span>
            <span className="opacity-80">Admissions · Visa · EMGS · Campus Life</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 sm:mt-12 max-w-6xl px-4 sm:px-0">
        {/* Intro + tags */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#111827]">
              Explore our latest Malaysia-focused articles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4b5563] max-w-2xl">
              Learn about Malaysian universities, EMGS processing, scholarships, and real
              student experiences to plan your study journey with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-[#4a1cff] border border-[#d7ddff]">
              🎓 Admissions
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-medium text-[#4a1cff] border border-[#d7ddff]">
              🛂 Visa & EMGS
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-medium text-[#4a1cff] border border-[#d7ddff]">
              🏫 University Guides
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPageSection;
