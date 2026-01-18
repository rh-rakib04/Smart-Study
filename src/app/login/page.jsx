"use client";

import { useActionState, useEffect } from "react";
import { login } from "@/actions/auth";
import Link from "next/link";
import { Loader2, Shield } from "lucide-react";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  useEffect(() => {
    if (state?.error) {
      // Normal Minimal Error Alert
      Swal.fire({
        title: "Login Error",
        text: state.error,
        icon: "error",
        confirmButtonColor: "#1e293b", // slate-800
        customClass: {
          popup: "rounded-2xl",
          confirmButton: "rounded-lg px-8 py-2",
        }
      });
    } else if (state?.success) {
      // Normal Minimal Success Alert
      Swal.fire({
        title: "Welcome back",
        text: "You have successfully authenticated.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "rounded-2xl",
        }
      });
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        
        {/* LOGO/HEADER */}
        <div className="mb-8 text-center md:text-left">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
            <Shield className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-bold text-slate-900">Sign in</h1>
          <p className="text-sm text-slate-500 mt-1">Admin access only</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@test.com"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 outline-none transition-all text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-slate-400 outline-none transition-all text-sm"
              required
            />
          </div>

          <button
            disabled={isPending}
            className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:bg-slate-400 mt-2"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
          <Link href="/" className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
            ← Return to index
          </Link>
        </div>
      </div>
    </div>
  );
}