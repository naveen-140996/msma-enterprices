"use client";
import React from 'react';
import Link from 'next/link';
// 1. IMPORT THE SEPARATE BLOG DATA
import { blogContent } from "@/data/blogContent"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function BlogListingPage() {
  // 2. REFERENCE THE NEW DATA SOURCE
  const blogList = Object.entries(blogContent);

  return (
    <main className="min-h-screen bg-white pt-48 pb-20">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-20 border-b border-zinc-100 pb-12">
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em] block mb-4">VI WebSync Journal</span>
          <h1 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter text-black leading-none">
            Insights & <br/> Innovation
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {blogList.map(([slug, post]: [string, any]) => (
            <Link key={slug} href={`/blogs/${slug}`} className="group flex flex-col">
              <div className="mb-8 overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-100 relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute top-6 left-6 px-4 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full">
                   {post.category}
                 </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-3xl font-black uppercase text-black leading-tight mb-4 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                "{post.excerpt}"
              </p>

              <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black group-hover:gap-4 transition-all">
                Read Article <FontAwesomeIcon icon={faArrowRight} className="text-orange-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}