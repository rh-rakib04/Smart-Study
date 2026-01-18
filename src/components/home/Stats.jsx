"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; 

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { val: 150, sym: "+", label: "TOTAL_TOOLS", sub: "Vetted Intelligence" },
  { val: 10, sym: "K", label: "ACTIVE_USERS", sub: "Global Nodes" },
  { val: 98, sym: "%", label: "SUCCESS_RT", sub: "User Validation" },
  { val: 24, sym: "/7", label: "UPTIME_STAT", sub: "Always Online" },
];

export default function Stats() {
  const container = useRef(null);

  useGSAP(() => {
    // Entrance Animation for lines and content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".border-line", { scaleX: 0, duration: 1.2, ease: "power4.inOut", stagger: 0.2 })
      .from(".stat-box", { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" }, "-=0.6");

    // Precise Counter Animation
    stats.forEach((stat, i) => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: stat.val,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        onUpdate: () => {
          const el = document.getElementById(`count-num-${i}`);
          if (el) el.innerText = Math.floor(obj.value);
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-base-100 py-16 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-base-content/10">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box p-8 md:p-12 group hover:bg-primary/[0.02] transition-colors relative">
              
              {/* Counter Index */}
              <p className="text-[10px] font-mono opacity-20 mb-10">0{i + 1}_</p>

              {/* Large Animated Number */}
              <div className="flex items-baseline gap-1 mb-8">
                <span id={`count-num-${i}`} className="text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                  0
                </span>
                <span className="text-2xl font-bold text-primary italic opacity-80">{stat.sym}</span>
              </div>

              {/* Technical Labels */}
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest">{stat.label}</h4>
                <p className="text-[10px] font-medium opacity-40 uppercase">{stat.sub}</p>
              </div>

              {/* Corner Accent (UI Detail) */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-primary/40 transition-all" />
            </div>
          ))}
        </div>

       </div>
    </section>
  );
}