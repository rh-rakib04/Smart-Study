"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const container = useRef(null);

  useGSAP(() => {
    // Subtle breathing animation for the background glow
    gsap.to(".cta-glow", {
      opacity: 0.8,
      scale: 1.2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] bg-neutral h-[500px] flex flex-col items-center justify-center text-center overflow-hidden border border-white/10 shadow-2xl">
          
          {/* BACKGROUND ANIMATION ELEMENTS */}
          <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 space-y-8">
            <div className="flex justify-center mb-4">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                 <Sparkles size={12} className="text-primary" />
                 Finalize Protocol
               </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
              Ready <span className="text-primary italic font-serif font-light lowercase">to</span> <br /> 
              Evolve?
            </h2>

            <p className="max-w-md mx-auto text-white/50 text-lg font-medium leading-relaxed">
              Join the elite circle of students optimizing their research with architectural AI.
            </p>

            <div className="pt-8">
              <Link 
                href="/tools" 
                className="group relative inline-flex items-center gap-4 bg-primary text-primary-content px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
              >
                Initiate Access
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}