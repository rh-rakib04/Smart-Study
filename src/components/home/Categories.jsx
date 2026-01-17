export default function Categories() {
  return (
    <section className="py-20 bg-base-300/20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Tools for Every Major</h2>
          <div className="flex flex-wrap gap-3">
            {["Medicine", "Law", "Engineering", "Arts"].map(cat => (
              <span key={cat} className="badge badge-lg p-6 border-primary">{cat}</span>
            ))}
          </div>
        </div>
        <div className="flex-1"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500" className="rounded-2xl shadow-xl" alt="Study" /></div>
      </div>
    </section>
  );
}