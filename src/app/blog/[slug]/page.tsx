import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FadeImage from "@/components/FadeImage";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/BlogCard";
import { Clock, Tag, ArrowLeft, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Very simple markdown-to-HTML converter for the blog content
function renderMarkdown(content: string): string {
  return content
    .trim()
    .split("\n")
    .map((line) => {
      // Headings
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
      // Bold
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Italic
      line = line.replace(/\*(.*?)\*/g, "<em>$1</em>");
      // Links
      line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
      // Table rows
      if (line.startsWith("|") && line.endsWith("|")) {
        const cells = line
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        if (cells.every((c) => /^[-:]+$/.test(c))) return ""; // separator row
        return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
      }
      // Unordered list
      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
      // Ordered list
      if (/^\d+\. /.test(line)) return `<li>${line.replace(/^\d+\. /, "")}</li>`;
      // Horizontal rule
      if (line.startsWith("---")) return "<hr>";
      // Blockquote
      if (line.startsWith("> ")) return `<blockquote>${line.slice(2)}</blockquote>`;
      // Empty line
      if (line.trim() === "") return "";
      // Paragraph
      return `<p>${line}</p>`;
    })
    // Wrap consecutive <li> in <ul>
    .join("\n")
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    // Wrap consecutive <tr> in <table>
    .replace(/(<tr>.*<\/tr>\n?)+/g, (match) => `<table>${match}</table>`);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const morePostsFallback = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3 - relatedPosts.length);

  const suggestedPosts = [...relatedPosts, ...morePostsFallback].slice(0, 3);

  const htmlContent = renderMarkdown(post.content);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-200 text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-sm text-amber-300 font-medium bg-amber-500/20 px-3 py-1 rounded-full">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-teal-300">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-sm text-teal-400">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-teal-300 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Feature Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900 shadow-2xl -mb-8 relative z-10">
          <FadeImage
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-0 transition-opacity duration-700"
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
                <Share2 size={18} className="text-gray-400" />
                <span className="text-gray-600 text-sm font-medium">Share this article:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.vievehealthwellness.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-full transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.vievehealthwellness.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
                >
                  Facebook
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Author Card */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sticky top-28">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-teal-700 mx-auto mb-4">
                  <FadeImage
                    src="/images/team/dr-genevieve-headshot.jpg"
                    alt="Dr. Genevieve Ufongene"
                    fill
                    className="object-cover object-top opacity-0 transition-opacity"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-teal-900">Dr. Genevieve Ufongene</p>
                  <p className="text-gray-500 text-sm mt-0.5">DNP, FNP-C</p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    Diabetes educator passionate about culturally relevant health
                    education for African and diaspora communities.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-block text-teal-700 font-semibold text-sm hover:text-teal-900 transition-colors"
                  >
                    About Dr. Genevieve →
                  </Link>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-teal-800 text-white rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-2">Ready to Go Deeper?</h4>
                <p className="text-teal-300 text-sm mb-4">
                  Book a 1:1 session with Dr. Genevieve for personalized diabetes
                  education tailored to your life.
                </p>
                <Link
                  href="/work-with-me"
                  className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full text-sm transition-colors"
                >
                  Book a Session
                </Link>
              </div>

              {/* Free resource */}
              <div className="border-2 border-dashed border-teal-300 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">📥</div>
                <h4 className="font-bold text-gray-900 mb-2">Free Resources</h4>
                <p className="text-gray-500 text-sm mb-4">
                  Download our free African Foods & Blood Sugar Guide.
                </p>
                <Link
                  href="/resources"
                  className="inline-block px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full text-sm transition-colors"
                >
                  Get Free Guides
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {suggestedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More Articles You May Enjoy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
