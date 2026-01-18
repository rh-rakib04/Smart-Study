import { getTools } from "@/actions/tool";
import ToolCard from "@/components/cards/ToolCard";
import { LayoutGrid, Sparkles } from "lucide-react";

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <main className="min-h-screen bg-base-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-gray-200 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={14} />
              Curated Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold  tracking-tight">
              Study Toolkit
            </h1>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              Empower your learning journey with our curated collection of
              high-tech study companions.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-4 border border-gray-200 min-w-[140px]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Inventory Size</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold ">{tools.length}</span>
              <span className="text-sm font-medium text-slate-400 italic">Tools</span>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool._id.toString()} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 rounded-[2.5rem] bg-slate-50 border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
              <LayoutGrid size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              No tools available
            </h3>
            <p className="mt-2 text-slate-500 max-w-xs mx-auto">
              Our index is currently empty. Check back later or contribute via the portal.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}