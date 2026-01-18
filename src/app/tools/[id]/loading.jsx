// app/tools/[id]/loading.js
export default function Loading() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 animate-pulse">
      <div className="max-w-6xl mx-auto">
        {/* Back Link Skeleton */}
        <div className="h-4 w-32 bg-slate-100 rounded-full mb-12" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Skeleton */}
          <div className="aspect-[4/3] w-full bg-slate-100 rounded-[2rem]" />

          {/* Content Skeleton */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-slate-100 rounded-full" />
                <div className="h-6 w-24 bg-slate-50 rounded-full" />
              </div>
              <div className="h-16 w-3/4 bg-slate-200 rounded-2xl" />
              <div className="h-8 w-24 bg-slate-100 rounded-lg" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-100 rounded-full" />
              <div className="h-4 w-5/6 bg-slate-100 rounded-full" />
              <div className="h-4 w-4/6 bg-slate-100 rounded-full" />
            </div>

            {/* Use Case Box Skeleton */}
            <div className="h-24 w-full bg-slate-50 rounded-2xl" />

            {/* Features Skeleton */}
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-slate-100" />
                  <div className="h-4 w-24 bg-slate-50 rounded-lg" />
                </div>
              ))}
            </div>

            {/* CTA Skeleton */}
            <div className="h-14 w-48 bg-slate-100 rounded-xl mt-6" />
          </div>
        </div>
      </div>
    </main>
  );
}