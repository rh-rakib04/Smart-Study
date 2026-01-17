
import { getTools } from "@/actions/tool";
import ToolCard from "@/components/cards/ToolCard";
import { LayoutGrid } from "lucide-react";

export default async function ToolsPage() {
  const tools = await getTools();

  return (
    <main className="min-h-screen bg-base-200/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black flex items-center gap-3 mb-4">
              <LayoutGrid size={36} className="text-primary" />
              Study Toolkit
            </h1>
            <p className="text-lg text-base-content/60 italic">
              Empower your learning journey with our curated collection of
              high-tech study companions.
            </p>
          </div>
          <div className="stats shadow-sm border border-base-300 bg-base-100">
            <div className="stat py-2 px-6">
              <div className="stat-title text-xs">Total Tools</div>
              <div className="stat-value text-2xl text-primary">
                {tools.length}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool._id.toString()} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
            <h3 className="text-xl font-bold opacity-50">
              No tools found in the database.
            </h3>
            <p className="mt-2 opacity-40">
              Try adding some via the admin panel!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
