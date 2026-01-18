import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <Stats />
      <CTA />
    </main>
  );
}