"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Stethoscope, Gavel, Cog, Palette, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const majors = [
  { name: "Medicine", icon: <Stethoscope size={18} />, count: "42 Tools", slug: "/tools?category=medicine" },
  { name: "Law", icon: <Gavel size={18} />, count: "28 Tools", slug: "/tools?category=law" },
  { name: "Engineering", icon: <Cog size={18} />, count: "56 Tools", slug: "/tools?category=engineering" },
  { name: "Arts", icon: <Palette size={18} />, count: "19 Tools", slug: "/tools?category=arts" },
];

export default function Categories() {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // 1. CLEAR ANY OLD TRIGGERS (Fixes reload bug)
    ScrollTrigger.refresh();

    // 2. PARALLAX IMAGE
    gsap.to(imageRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. STAGGERED ENTRANCE
    // We use .fromTo so we can explicitly set the end state to opacity 1
    gsap.fromTo(".major-card", 
      { opacity: 0, y: 40 }, 
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          // This ensures that if the page reloads mid-scroll, 
          // the animation completes immediately
          toggleActions: "play none none none", 
          once: true, 
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              Specialized Archive
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              Curated <br /> <span className="text-primary italic font-serif font-light lowercase">by</span> Discipline.
            </h2>
            <p className="text-lg text-base-content/60 max-w-md font-medium leading-relaxed">
              We provide technical toolkits tailored for specialized academic environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {majors.map((major) => (
              <Link 
                key={major.name} 
                href={major.slug}
                className="major-card group block p-6 rounded-[2rem] bg-base-200/50 border border-base-300 hover:border-primary hover:bg-base-100 transition-all duration-500"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="p-4 rounded-2xl bg-base-100 border border-base-300 group-hover:bg-primary group-hover:text-primary-content group-hover:border-primary transition-all duration-500">
                      {major.icon}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-base-300 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content group-hover:border-primary transition-all duration-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl tracking-tight">{major.name}</h4>
                    <p className="text-[10px] uppercase font-black opacity-30 tracking-[0.1em] mt-1">{major.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* IMAGE BOX */}
        <div className="flex-1 relative w-full lg:max-w-xl">
          {/* Decorative Glow */}
          <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-base-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
            <div className="h-[600px] w-full relative">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200" 
                className="absolute top-0 left-0 w-full h-[120%] object-cover" 
                alt="Academic Research" 
              />
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floating Info Tag */}
          <div className="absolute -bottom-6 -right-6 md:right-12 bg-base-100 p-6 rounded-3xl shadow-2xl border border-base-300 max-w-[200px] hidden md:block">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Platform Update</p>
            <p className="text-xs font-bold leading-tight text-base-content/70 italic">"Unified intelligence across 40+ academic domains."</p>
          </div>
        </div>

      </div>
    </section>
  );
}