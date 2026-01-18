"use client";

import { addTool } from "@/actions/addTools";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/ToastProvider";
import { useRouter } from "next/navigation";

export default function AddToolPage() {
  const { showToast } = useToast();
  const router = useRouter();

  async function handleAddTool(formData) {
    try {
      showToast("Saving tool...", "loading");

      await addTool(formData);

      showToast("🎉 Tool added successfully!", "success");

      setTimeout(() => {
        router.push("/tools");
        router.refresh();
      }, 1200);
    } catch (err) {
      showToast("❌ Failed to add tool", "error");
    }
  }

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl gap-2">
            <PlusCircle className="text-primary" />
            Add New Tool
          </h2>

          <form action={handleAddTool} className="grid md:grid-cols-2 gap-4 mt-6">
            <input name="title" placeholder="Tool Title" className="input input-bordered" required />
            <input name="category" placeholder="Category" className="input input-bordered" />
            <input name="price" placeholder="Free / $5.99 mo" className="input input-bordered" />
            <input name="rating" type="number" step="0.1" placeholder="Rating" className="input input-bordered" />
            <textarea name="description" placeholder="Description" className="textarea textarea-bordered md:col-span-2" />
            <textarea name="keyFeatures" placeholder="Key features (comma separated)" className="textarea textarea-bordered md:col-span-2" />
            <textarea name="useCase" placeholder="Best use case" className="textarea textarea-bordered md:col-span-2" />
            <input name="image" placeholder="Image URL" className="input input-bordered md:col-span-2" />
            <button className="btn btn-primary md:col-span-2">Save Tool</button>
          </form>
        </div>
      </div>
    </div>
  );
}
