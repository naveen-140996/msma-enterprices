"use client";
import React, { use } from 'react';
import Link from 'next/link';
// IMPORT THE NEW SEPARATE DATA
import { blogContent } from "@/data/blogContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  
  // LOOKUP DATA IN NEW FILE
  const post = blogContent[resolvedParams.slug as keyof typeof blogContent];

  // SAFETY GUARD
  if (!post) {
    return (
      <div className="pt-60 text-center font-black min-h-screen bg-white">
        <h1 className="text-orange-600 text-6xl mb-4">404</h1>
        ARTICLE NOT FOUND: {resolvedParams.slug}
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <header className="pt-48 pb-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1000px] mx-auto px-8">
          <Link href="/blogs" className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-12 inline-block">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-6">
            <span className="text-black">{post.category}</span>
            <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 border-t border-zinc-200 pt-8">
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Published By</p>
              <p className="font-bold text-black uppercase">{post.author}</p>
            </div>
            <div className="ml-auto">
               <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <FontAwesomeIcon icon={faShareNodes} />
               </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 max-w-[1000px] mx-auto px-8">
        <div className="prose prose-zinc prose-xl max-w-none">
          <p className="text-2xl font-medium text-zinc-600 italic mb-12 border-l-4 border-orange-600 pl-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="text-zinc-800 leading-loose space-y-8 uppercase text-sm font-bold tracking-tight">
            <p>{post.content}</p>
            <p>AS WE MOVE INTO THE NEXT PHASE OF INDUSTRIAL AUTOMATION, THE SYNERGY BETWEEN DETERMINISTIC HARDWARE (PXI) AND GEN-AI AGENTS WILL DEFINE THE COMPETITIVE EDGE FOR AEROSPACE FIRMS.</p>
            <div className="bg-zinc-100 p-12 rounded-[2.5rem] my-12 text-black">
               <h3 className="text-2xl font-black mb-4">KEY TAKEAWAY</h3>
               <p>INTEGRATION IS NO LONGER OPTIONAL; IT IS THE ARCHITECTURE OF MODERN SURVIVAL IN DEFENSE ENGINEERING.</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}