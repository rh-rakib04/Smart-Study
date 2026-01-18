const steps = [
  "Explore learning tools",
  "Use tools daily",
  "Improve productivity",
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          How It Works
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-base-100"
            >
              <span className="text-primary font-bold text-xl">
                0{i + 1}
              </span>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
