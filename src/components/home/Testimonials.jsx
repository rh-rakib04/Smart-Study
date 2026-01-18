"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Alex R.", major: "Medicine", text: "The research tools here saved me at least 10 hours a week during finals." },
  { name: "Sarah K.", major: "Law", text: "Finally, a curated list that actually filters out the AI noise. Highly recommended." },
  { name: "James L.", major: "Engineering", text: "The workflow optimization tools are a game changer for complex projects." },
  { name: "Maria G.", major: "Arts", text: "Clean, intuitive, and actually useful. Best discovery of the semester." },
];

export default function Testimonials() {
  const container = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    const scrollWidth = marquee.scrollWidth;
    
    // We animate the xPercent of the wrapper to -50% 
    // (since we double the content for the infinite loop)
    gsap.to(marquee, {
      x: `-${scrollWidth / 2}`,
      ease: "none",
      duration: 30, // Adjust for speed (higher = slower)
      repeat: -1,
    });
  }, { scope: container });

  // Function to slow down/pause on hover
  const onMouseEnter = () => gsap.to(marqueeRef.current, { timeScale: 0.1, duration: 0.5 });
  const onMouseLeave = () => gsap.to(marqueeRef.current, { timeScale: 1, duration: 0.5 });

  return (
    <section ref={container} className="py-24 bg-base-100 overflow-hidden border-y border-base-300">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Proven <br /> <span className="text-primary italic font-serif font-light lowercase">by</span> Scholars.
          </h2>
        </div>
       
      </div>

      {/* MARQUEE WRAPPER */}
      <div 
        className="relative flex whitespace-nowrap mask-fade-edges"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div ref={marqueeRef} className="flex gap-6 pr-6">
          {/* Double the array to create the infinite loop effect */}
          {[...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="w-[350px] shrink-0 bg-base-200/50 border border-base-300 p-8 rounded-[2rem] hover:bg-base-100 transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <Quote size={24} className="opacity-10 group-hover:opacity-30 transition-opacity text-primary" />
              </div>

              <p className="text-base font-medium leading-relaxed mb-8 whitespace-normal text-base-content/80">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-base-content/5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xs">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{review.name}</h4>
                  <p className="text-[10px] uppercase font-black opacity-30 tracking-widest">{review.major}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}