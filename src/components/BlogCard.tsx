"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: Props) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="lg:flex">
          <div className="lg:w-1/2 relative h-64 lg:h-auto bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "1";
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="relative z-10 text-center px-6">
              <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                Featured
              </span>
              <p className="text-white/90 text-sm font-medium">{post.category}</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-medium bg-amber-50 px-3 py-1 rounded-full">
                <Tag size={11} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-green-700 font-semibold text-sm group-hover:text-green-900 transition-colors">
                Read Article →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-green-700 to-green-900 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.opacity = "1";
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Tag size={11} />
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors leading-snug text-lg">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-green-700 font-semibold text-sm group-hover:text-green-900 transition-colors">
            Read Article →
          </span>
        </div>
      </div>
    </Link>
  );
}
