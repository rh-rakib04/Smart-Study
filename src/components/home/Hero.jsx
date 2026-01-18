"use client";
import { useEffect, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { Search, MoveRight } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ["Better Grades", "Faster Research", "AI Writing", "Smart Focus"];
  const typingSpeed = isDeleting ? 40 : 100;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];
      setText(isDeleting ? fullWord.substring(0, text.length - 1) : fullWord.substring(0, text.length + 1));
      
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="relative min-h-[60vh] bg-base-100 flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      
      {/* Background Decor: Soft Abstract Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px] rotate-12" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-secondary/5 rounded-full blur-[120px] -rotate-12" />
      </div>

      <div className="max-w-6xl w-full text-center">
        <FadeIn direction="up">
          {/* Section 1: The Giant Headline */}
          <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
            Study <br />
            <span className="italic font-serif font-light text-primary">Different.</span>
          </h1>

          {/* Section 2: The Typewriter Search Bar Concept */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="flex items-center gap-4 bg-base-200 p-6 rounded-3xl border border-base-300 shadow-sm">
              <Search className="text-base-content/30" size={24} />
              <div className="text-xl md:text-2xl text-center font-medium tracking-tight ">
                <span>The tool for </span>
                <span className="text-primary font-bold">{text}</span>
                <span className="inline-block w-[3px] h-8 bg-primary ml-1 align-middle animate-pulse" />
              </div>
            </div>
            {/* Subtext floating below */}
            <p className="mt-6 text-base-content/50 text-sm font-medium tracking-widest uppercase">
              Curated Intelligence for Modern Academia
            </p>
          </div>

          {/* Section 3: Refined Actions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a href="/tools" className="group flex items-center gap-4 text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
              VIEW THE DIRECTORY
              <div className="w-12 h-12 rounded-full border border-base-300 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-all">
                <MoveRight size={20} />
              </div>
            </a>
            <div className="h-[1px] w-20 bg-base-300 hidden md:block" />
            <a href="/add-tool" className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity tracking-widest uppercase">
              Submit Framework
            </a>
          </div>
        </FadeIn>
      </div>

     
    </section>
  );
}