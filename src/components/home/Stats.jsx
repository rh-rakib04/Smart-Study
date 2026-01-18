"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.children, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 text-center gap-6"
      >
        <Stat value="150+" label="Tools" />
        <Stat value="10k+" label="Students" />
        <Stat value="98%" label="Satisfaction" />
        <Stat value="24/7" label="Access" />
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="text-sm text-base-content/70">{label}</p>
    </div>
  );
}
