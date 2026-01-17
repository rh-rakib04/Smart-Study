import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 text-center text-primary-content">
        <h2 className="text-4xl font-black mb-4">Ready to Level Up?</h2>
        <p className="mb-8 opacity-90">
          Join thousands of students using Smart Study Tools daily.
        </p>
        <Link
          href="/tools"
          className="btn bg-white text-primary border-none hover:bg-gray-100"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
