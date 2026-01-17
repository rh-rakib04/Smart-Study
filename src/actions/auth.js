"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "admin@test.com" && password === "1234") {
    const cookieStore = await cookies();
    cookieStore.set("auth_token", "mock_token_123", {
      httpOnly: true,
      path: "/",
    });
    redirect("/add-tool");
  } else {
    return { error: "Invalid credentials" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  redirect("/");
}