import { getToolById } from "@/actions/tool";

export default async function ToolDetail({ params }) {
  const { id } = await params;
  const tool = await getToolById(id);

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <img src={tool.image} className="rounded-3xl shadow-2xl" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="badge badge-outline">{tool.category}</span>
          <span className="text-xl font-bold text-success">{tool.price}</span>
        </div>

        <h1 className="text-5xl font-black">{tool.title}</h1>
        <p className="text-lg opacity-80">{tool.description}</p>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="font-bold mb-2">Best For:</h3>
          <p>{tool.useCase}</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Key Features:</h3>
          <ul className="grid grid-cols-2 gap-2">
            {tool.keyFeatures.map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="text-primary">✔</span> {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
