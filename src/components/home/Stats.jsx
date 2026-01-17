export default function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div><div className="text-4xl font-black">50k+</div><div className="text-xs opacity-80 uppercase">Students</div></div>
        <div><div className="text-4xl font-black">100+</div><div className="text-xs opacity-80 uppercase">Tools</div></div>
        <div><div className="text-4xl font-black">12M</div><div className="text-xs opacity-80 uppercase">Notes</div></div>
        <div><div className="text-4xl font-black">4.9/5</div><div className="text-xs opacity-80 uppercase">Rating</div></div>
      </div>
    </section>
  );
}