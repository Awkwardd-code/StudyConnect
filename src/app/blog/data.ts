export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
  highlights?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-universities-australia-2026",
    title: "Top 30 Universities in Australia 2026",
    date: "October 16, 2025",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Australia continues to be a premier destination offering globally ranked universities, vibrant campuses, and post-study opportunities.",
    content: [
      "From Sydney to Perth, Australian universities continue to dominate the global rankings for research, technology, and student experience. Our 2026 list highlights institutions that combine academic excellence with career-ready programs.",
      "STC counsellors help you identify the right campus based on scholarships, industry placements, and lifestyle preferences. Whether you want STEM-heavy programs or creative majors, we design the perfect shortlist and application strategy.",
      "Work with our team to craft compelling SOPs, secure early offer letters, and prepare for the Genuine Temporary Entrant (GTE) interview.",
    ],
    highlights: [
      "Scholarship alerts for STEM and business intakes",
      "Preferred campuses for part-time opportunities",
      "IELTS/PTE coaching with guaranteed test slots",
    ],
  },
  {
    slug: "best-consultancy-studying-in-austria",
    title: "Best Consultancy for Studying in Austria",
    date: "October 9, 2025",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "STC Overseas Education is trusted by Austrian universities for accurate applications, streamlined visa support, and post-arrival guidance.",
    content: [
      "Austria's public universities continue to attract international students for their tuition benefits and research labs. STC is certified by multiple Austrian institutes and has a 95% visa approval rate.",
      "Our consultants coach students for embassy interviews, SOP writing, and German language preparation. We also help with accommodation coordination in Vienna, Graz, and Linz.",
      "Students receive end-to-end assistance�document notarisation, banking, health insurance, and airport pickup scheduling.",
    ],
    highlights: [
      "Visa file verification by former embassy officers",
      "Mentorship sessions with STC Austrian alumni",
      "In-country support desk with emergency hotline",
    ],
  },
  {
    slug: "top-visa-interview-questions",
    title: "Top 10 Visa Interview Questions Every Student Should Know",
    date: "September 28, 2025",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Nail your visa interview with confidence. We compiled the most asked questions and winning response strategies from our visa mentors.",
    content: [
      "Visa interviews can feel intense, but being authentic and well-prepared makes all the difference. Our experts listed the 10 questions you should always expect, including funding proof, academic intent, and post-study plans.",
      "Use our sample answers to communicate clarity, honesty, and preparedness. Practise mock interviews with STC visa coaches virtually or at our centres.",
      "Remember: confident body language and organised documents ensure a smooth interview. Save this checklist and book your mock session today.",
    ],
    highlights: [
      "Downloadable answer sheet template",
      "Checklist of supporting documents",
      "Personalised mock interview calendar",
    ],
  },
];
