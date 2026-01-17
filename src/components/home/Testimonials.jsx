import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-base-100 px-4 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-12">Student Feedback</h2>
      <div className="flex gap-6 overflow-x-auto pb-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="min-w-[300px] bg-base-200 p-6 rounded-xl border border-base-300">
            <div className="flex text-warning mb-2"><Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" /></div>
            <p className="italic text-sm opacity-80">"This toolkit changed my study routine completely."</p>
          </div>
        ))}
      </div>
    </section>
  );
}