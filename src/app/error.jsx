"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to a service like Sentry
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* ICON */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-red-100 border border-red-100 text-red-500">
          <AlertTriangle size={32} strokeWidth={1.5} />
        </div>

        {/* CONTENT */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black  tracking-tight">
            SYSTEM_ERROR
          </h1>
          <p className=" text-sm leading-relaxed max-w-[300px] mx-auto">
            Something went wrong while processing this request. The kernel has been notified.
          </p>
        </div>

        {/* ACTIONS */}
        <button
          onClick={() => reset()}
          className="w-full py-4 bg-base-300  rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
        >
          <RefreshCw size={18} className="group-active:rotate-180 transition-transform duration-500" />
          Attempt Recovery
        </button>
      </div>
    </main>
  );
}