
import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-40 h-40 bg-base-300 rounded-2xl flex items-center justify-center text-slate-300 mb-6">
        <FileQuestion size={72} />
      </div>
      
      <h1 className="text-4xl font-bold text-primary tracking-tight">
         Not Found
      </h1>
      <p className="text-slate-500 mt-2 max-w-xs mx-auto text-sm">
        The tool you are looking for doesn't exist or has been moved to a new directory.
      </p>

      <Link 
        href="/" 
        className="mt-8 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all"
      >
        Back to Home
      </Link>
    </main>
  );
}