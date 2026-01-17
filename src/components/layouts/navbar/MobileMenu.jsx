"use client";

import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavItems from "./NavItems";
import NavLink from "../../buttons/NavLink";
import ThemeToggle from "../../buttons/ThemeToggle";
import { CiLogin } from "react-icons/ci";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-ghost btn-circle"
        aria-label="Toggle menu"
      >
        {open ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
      </button>

      {/* Menu Panel */}
      {/* - absolute top-full left-0: Positions it right below the header, starting from the left edge.
         - w-full: Spans the full width of the 'relative' parent (the main Navbar container).
         - origin-top: Ensures the scaling animation starts from the top.
      */}
      <div
        className={`absolute right-0 top-full w-70% bg-base-100 border-b border-base-300 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          open
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <ul className="menu px-4 gap-2 text-base-content">
          {/* Navigation Links */}
          {/* We pass the closeMenu function to NavItems if your NavItems component supports an onClick prop */}
          <div onClick={closeMenu}>
            <NavItems />
          </div>
          {/* Login Button */}
          <li className="mt-2">
            <NavLink
              onClick={closeMenu}
              href="/login"
              className=" flex items-center gap-2 btn btn-primary btn-sm"
            >
              <CiLogin />
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
