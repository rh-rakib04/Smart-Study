"use client";

import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavItems from "./NavItems";
import NavLink from "../../buttons/NavLink";
import { CiLogin, CiLogout } from "react-icons/ci";
import { logout } from "@/actions/auth";

export default function MobileMenu({ isLoggedIn }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="btn btn-ghost btn-circle">
        {open ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
      </button>

      <div className={`absolute right-0 top-full w-[70%] bg-base-100 border-b border-base-300 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          open ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <ul className="menu px-4 py-4 gap-2 text-base-content">
          <NavItems onClick={closeMenu} isLoggedIn={isLoggedIn} />
          
          <li className="mt-2 border-t pt-2">
            {!isLoggedIn ? (
              <NavLink onClick={closeMenu} href="/login" className="flex items-center gap-2 btn btn-primary btn-sm">
                <CiLogin /> Login
              </NavLink>
            ) : (
              <form action={logout} onClick={closeMenu}>
                <button type="submit" className="w-full flex items-center gap-2 btn btn-error btn-sm">
                  <CiLogout /> Logout
                </button>
              </form>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}