// app/tools/loading.js
export default function Loading() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-100 gap-6 animate-pulse">
          <div className="space-y-4 w-full max-w-2xl">
            <div className="h-4 w-32 bg-slate-100 rounded-full" />
            <div className="h-12 w-64 bg-slate-200 rounded-xl" />
            <div className="h-4 w-full bg-slate-100 rounded-full" />
            <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
          </div>
          <div className="h-20 w-36 bg-slate-100 rounded-2xl" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-4 animate-pulse">
              {/* Image box skeleton */}
              <div className="aspect-video w-full bg-slate-100 rounded-[2rem]" />
              {/* Title skeleton */}
              <div className="h-5 w-2/3 bg-slate-200 rounded-lg" />
              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-100 rounded-full" />
                <div className="h-3 w-5/6 bg-slate-100 rounded-full" />
              </div>
              {/* Footer skeleton */}
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-20 bg-slate-50 rounded-full" />
                <div className="h-8 w-8 bg-slate-100 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}