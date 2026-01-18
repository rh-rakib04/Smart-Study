"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Curated Tools", desc: "Only useful tools for learners." },
  { title: "Student Focused", desc: "Designed for productivity." },
  { title: "Easy Contribution", desc: "Add tools instantly." },
];

export default function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why SmartStudy?
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="rounded-2xl p-6 bg-base-100 shadow-sm border"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
