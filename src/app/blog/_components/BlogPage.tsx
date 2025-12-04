/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CalendarDays, Folder } from "lucide-react";
import { blogPosts } from "../data";

const BlogCard = ({ post }: { post: (typeof blogPosts)[number] }) => (
  <article className="group cursor-pointer overflow-hidden rounded-[30px] border border-[#e5e8f5] bg-white shadow-[0_25px_70px_rgba(10,16,45,0.12)] transition-all duration-300 hover:shadow-[0_35px_90px_rgba(10,16,45,0.18)] hover:-translate-y-2 hover:border-[#4a1cff]/30">
    <div className="h-48 w-full overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#121638] transition-colors duration-300 group-hover:text-[#4a1cff]">{post.title}</h3>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#6b7192] transition-colors duration-300 group-hover:text-[#5a6b8a]">
        <span className="flex items-center gap-1">
          <CalendarDays className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Folder className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          {post.category}
        </span>
      </div>
      <p className="mt-3 text-[#4a5072] transition-colors duration-300 group-hover:text-[#3a4662]">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4a1cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(74,28,255,0.38)] transition-all duration-300 hover:bg-[#3b15c8] hover:shadow-[0_25px_55px_rgba(74,28,255,0.45)] hover:-translate-y-1"
      >
        Learn more
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#4a1cff] transition-transform duration-300 group-hover:scale-110">
          →
        </span>
      </Link>
    </div>
  </article>
);

const BlogPageSection = () => {
  return (
    <section className="bg-[#f4f6fb] pb-20">
      <div className="h-24 rounded-b-[40px] bg-[#4a1cff]">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl">
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
