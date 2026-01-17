"use client";

import { useActionState } from "react";
import { login } from "@/actions/auth";

export default function LoginPage() {

  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="p-8  shadow-xl rounded-2xl w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-center ">
          Welcome Back
        </h1>
        <p className="text-center  mb-8">
          Login to manage your items
        </p>

        <form action={formAction} className="space-y-4">
          {state?.error && (
            <div className="p-3 bg-red-100 text-red-600 text-sm rounded-lg text-center font-medium">
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@test.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="1234"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
