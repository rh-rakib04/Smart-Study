import { Star, ArrowRight } from "lucide-react";
import NavLink from "../buttons/NavLink";
export default function ToolCard({ tool }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Tool Image & Category Badge */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={
            tool.image || "https://placehold.co/600x400/png?text=Smart+Study"
          }
          alt={tool.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="badge badge-primary font-bold shadow-md">
            {tool.category}
          </span>
        </div>
      </figure>

      {/* Content */}
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title text-xl font-bold line-clamp-1">
            {tool.title}
          </h2>
          <div className="flex items-center gap-1 text-warning font-semibold">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{tool.rating || "4.5"}</span>
          </div>
        </div>

        <p className="text-sm text-base-content/70 line-clamp-2 min-h-[2.5rem]">
          {tool.description}
        </p>

        {/* Action & Price */}
        <div className="card-actions justify-between items-center mt-6">
          <span className="font-bold text-lg text-secondary">
            {tool.price === "Free" ? "FREE" : tool.price}
          </span>
          <NavLink
            href={`/tools/${tool._id}`}
            className="btn btn-primary btn-sm gap-2"
          >
            Details
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
