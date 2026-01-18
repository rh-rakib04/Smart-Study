import { getToolById } from "@/actions/tool";
import { Check, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({ params }) {
  const { id } = await params;
  const tool = await getToolById(id);

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  return {
    title: tool.title,
    description: tool.description.substring(0, 160),
    openGraph: {
      title: `${tool.title} | SmartStudy Toolkit`,
      description: tool.description,
      url: `https://smart-study-ecru.vercel.app/tools/${id}`,
      siteName: "SmartStudy",
      images: [{ url: tool.image, width: 1200, height: 630, alt: tool.title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
      images: [tool.image],
    },
  };
}

// 2. THE PAGE COMPONENT
export default async function ToolDetail({ params }) {
  const { id } = await params;
  const tool = await getToolById(id);

  if (!tool) notFound();

  // 3. JSON-LD STRUCTURED DATA (FOR GOOGLE RICH SNIPPETS)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": tool.title,
    "image": tool.image,
    "description": tool.description,
    "brand": {
      "@type": "Brand",
      "name": "SmartStudy"
    },
    "offers": {
      "@type": "Offer",
      "price": tool.price === "Free" ? "0" : tool.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="min-h-screen bg-base-100 py-20 px-6">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* BACK NAVIGATION */}
        <Link 
          href="/tools" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: IMAGE GALLERY STYLE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-base-100 to-base-200 rounded-[2.5rem] blur opacity-25" />
            <img 
              src={tool.image} 
              alt={tool.title}
              className="relative rounded-[2rem] border border-slate-100 shadow-sm w-full object-cover aspect-[4/3]" 
            />
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                  {tool.category}
                </span>
                <span className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck size={14} /> Verified Tool
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                {tool.title}
              </h1>
              
              <div className="text-2xl font-semibold text-slate-900">
                {tool.price}
              </div>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              {tool.description}
            </p>

            {/* USE CASE BOX */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Best Use Case</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{tool.useCase}</p>
            </div>

            {/* FEATURES GRID */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-tight">Technical Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {tool.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Check size={12} className="text-emerald-600" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* PRIMARY CTA */}
            <div className="pt-6 border-t border-slate-100">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                Access this Tool
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}