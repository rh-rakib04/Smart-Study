"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search, Zap, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Explore Archive", desc: "Browse our hand-vetted directory of neural learning tools.", icon: <Search size={24} /> },
  { title: "Deploy Daily", desc: "Integrate specialized AI into your existing study workflow.", icon: <Zap size={24} /> },
  { title: "Optimize Output", desc: "Achieve 2x productivity through machine-assisted research.", icon: <Activity size={24} /> },
];

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".step-card", { opacity: 0, y: 50, stagger: 0.3, duration: 1, ease: "power4.out" })
      .from(".connector-line", { scaleX: 0, stagger: 0.3, duration: 1, ease: "expo.inOut" }, "-=1.5");
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-base-100 overflow-hidden border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CONSISTENT HEADER STYLE */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Operational Guide
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              How <span className="text-primary italic font-serif font-light lowercase">it</span> <br /> Works.
            </h2>
          </div>
          
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="step-card relative group">
              {i !== steps.length - 1 && (
                <div className="connector-line hidden md:block absolute top-12 left-full w-full h-[1px] bg-base-content/10 z-0 origin-left" />
              )}
              <div className="relative z-10 p-8 rounded-[2.5rem] bg-base-200/50 border border-base-300 backdrop-blur-sm transition-all duration-500 group-hover:border-primary group-hover:bg-base-100">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-content flex items-center justify-center mb-8 shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-primary">0{i + 1}_</span>
                  <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                </div>
                <p className="text-sm text-base-content/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}