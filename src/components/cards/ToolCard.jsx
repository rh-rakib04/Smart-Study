"use client";

import { Star, ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ToolCard({ tool }) {
  return (
    <Link 
      href={`/tools/${tool._id}`}
      className="group block bg-base-100 rounded-[2rem] border border-gray-400 p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-slate-200"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/3] rounded-[1.6rem] overflow-hidden bg-slate-50">
        <img
          src={tool.image || "https://placehold.co/600x400/png?text=Smart+Study"}
          alt={tool.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* TOP OVERLAY TAGS */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-base-100/90 backdrop-blur-md rounded-full text-[10px] font-bold shadow-sm uppercase tracking-widest">
            {tool.category}
          </span>
        </div>

        {/* PRICE TAG (BOTTOM RIGHT) */}
        <div className="absolute bottom-4 right-4">
          <div className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-bold shadow-lg">
            {tool.price === "Free" ? "FREE" : tool.price}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-bold  tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
              {tool.title}
            </h3>
            <div className="flex items-center gap-1.5 text-emerald-600">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Verified Tool</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md text-amber-600">
            <Star size={12} fill="currentColor" />
            <span className="text-[11px] font-bold">{tool.rating || "4.5"}</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed h-[2.5rem]">
          {tool.description}
        </p>

        {/* FOOTER ACTION */}
        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            View Analysis
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}