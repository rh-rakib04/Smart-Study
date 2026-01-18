"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Target, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Curated Tools",
    desc: "Every tool in our index is hand-vetted for quality and academic integrity.",
    icon: <Layers className="text-primary" size={24} />,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Student Focused",
    desc: "Engineered specifically to reduce cognitive load and maximize deep work.",
    icon: <Target className="text-secondary" size={24} />,
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    title: "Instant Utility",
    desc: "Submit and discover tools instantly with our streamlined community protocol.",
    icon: <Rocket className="text-accent" size={24} />,
    gradient: "from-amber-500/10 to-transparent",
  },
];

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onRefresh: (self) => {
            if (self.progress > 0)
              gsap.set(cardsRef.current, { opacity: 1, y: 0, scale: 1 });
          },
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-base-100 border-t border-base-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* CONSISTENT HEADER STYLE */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Core Capabilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
              Built{" "}
              <span className="text-primary italic font-serif font-light lowercase">
                for
              </span>{" "}
              <br /> Performance.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-[2.5rem] p-8 bg-base-200/50 border border-base-300 transition-all duration-500 hover:border-primary/50 will-change-transform overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-base-100 border border-base-300 group-hover:bg-primary group-hover:text-primary-content transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-base-content/60 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
