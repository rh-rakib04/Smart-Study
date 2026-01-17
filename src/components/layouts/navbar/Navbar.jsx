import Logo from "../Logo";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";
import NavLink from "../../buttons/NavLink";
import ThemeToggle from "../../buttons/ThemeToggle";
import { CiLogin } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-base-100 border-b border-base-300 relative">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          <Logo />
        </div>

        {/* CENTER (DESKTOP) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-2">
            <NavItems />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          {/* MOBILE TOGGLE - Only shows on small screens */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>

          {/* DESKTOP TOGGLE & LOGIN */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <NavLink
              href="/login"
              className="flex items-center gap-2 btn btn-primary btn-sm"
            >
              <CiLogin />
              Login
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
