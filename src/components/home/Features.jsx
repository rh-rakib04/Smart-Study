import { Zap, ShieldCheck, Globe } from "lucide-react";

export default function Features() {
  const data = [
    { icon: <Zap className="text-yellow-500" />, title: "Instant Efficiency", desc: "Automate citations and summaries." },
    { icon: <ShieldCheck className="text-green-500" />, title: "Vetted Tools", desc: "Hand-picked for academic integrity." },
    { icon: <Globe className="text-blue-500" />, title: "Global Sync", desc: "Access your toolkit anywhere." }
  ];
  return (
    <section className="py-20 bg-base-200/50 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((f, i) => (
          <div key={i} className="card bg-base-100 p-8 shadow-sm border border-base-200">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="opacity-70 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}