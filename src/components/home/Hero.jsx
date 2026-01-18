import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-base-100">
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">

        <FadeIn>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn Smarter with{" "}
              <span className="text-primary">SmartStudy Tools</span>
            </h1>

            <p className="mt-6 text-lg text-base-content/70">
              A curated collection of productivity and learning tools
              for modern students.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/tools" className="btn btn-primary">
                Explore Tools
              </a>
              <a href="/add-tool" className="btn btn-outline">
                Add Tool
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
