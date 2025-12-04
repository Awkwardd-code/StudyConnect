import { notFound } from "next/navigation";
import BlogDetails from "./_components/BlogDetails";
import { blogPosts } from "../data";

type BlogPageProps = {
  params: { slug: string };
};

const BlogDetailsPage = ({ params }: BlogPageProps) => {
  const post = blogPosts.find((article) => article.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetails post={post} />;
};

export default BlogDetailsPage;
