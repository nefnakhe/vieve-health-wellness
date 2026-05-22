"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blog-posts";
import { Search } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Educational Articles
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            The Vieve Wellness Blog
          </h1>
          <p className="text-teal-300 text-lg max-w-2xl mx-auto">
            Practical, culturally relevant education on diabetes, nutrition,
            African foods, and healthy living for the African and diaspora community.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-teal-700 text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No articles found. Try a different search or category.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-8">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">
            Want Personalized Guidance?
          </h2>
          <p className="text-teal-300 mb-6">
            Articles are just the beginning. Book a 1:1 session for education
            tailored specifically to your health situation and cultural background.
          </p>
          <a
            href="/work-with-me"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
          >
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
}
