"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

export default function AddToolPage() {
  const router = useRouter();

  async function handleCreateItem(formData) {
    // Collect data from the form
    const itemData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      image: "https://placehold.co/600x400/png",
    };

    try {
      const response = await fetch("http://localhost:4000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (response.ok) {
        // Success Alert
        Swal.fire({
          title: "Success!",
          text: "Your tool has been added to the catalog.",
          icon: "success",
          confirmButtonColor: "#3b82f6", // Matches your primary color
          timer: 2000,
        }).then(() => {
          router.push("/tools"); // Redirect after user clicks OK or timer ends
          router.refresh(); // Refresh server components to show new data
        });
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Could not connect to the server.",
        icon: "error",
      });
    }
  }

  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <div className="card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold flex gap-2">
            <PlusCircle className="text-primary" />
            Add New Tool
          </h2>
          
          <form action={handleCreateItem} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Tool Name</span>
              </label>
              <input name="name" type="text" placeholder="e.g. Electric Drill" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price ($)</span>
              </label>
              <input name="price" type="number" placeholder="99.99" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea name="description" placeholder="Describe the tool's features..." className="textarea textarea-bordered h-24" required />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Save Tool
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}