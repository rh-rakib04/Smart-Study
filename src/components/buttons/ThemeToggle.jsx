"use client";

import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}
    </button>
  );
}
