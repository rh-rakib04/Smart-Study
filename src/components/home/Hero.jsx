import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 px-4">
      <div className="max-w-7xl mx-auto text-center z-10">
        <div className="badge badge-outline badge-lg mb-6 gap-2 py-4 px-6">
          <Sparkles size={16} className="text-primary" />
          Next Gen Study Solutions
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
          Master Your Studies <br /> 
          <span className="text-primary">with AI Intelligence.</span>
        </h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto mb-10">
          Double your productivity with a curated toolkit of AI-driven platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tools" className="btn btn-primary btn-lg gap-2">Explore Toolkit <ArrowRight size={20} /></Link>
        </div>
      </div>
    </section>
  );
}