import Logo from "../Logo";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";
import NavLink from "../../buttons/NavLink";
import ThemeToggle from "../../buttons/ThemeToggle";
import { CiLogin, CiLogout } from "react-icons/ci"; // Added Logout icon
import { cookies } from "next/headers";
import { logout } from "@/actions/auth"; // We will create this action

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("auth_token");

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
            {/* Pass isLoggedIn to filter links if needed inside NavItems */}
            <NavItems isLoggedIn={isLoggedIn} />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>

          {/* DESKTOP TOGGLE & LOGIN/LOGOUT */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            
            {!isLoggedIn ? (
              <NavLink
                href="/login"
                className="flex items-center gap-2 btn btn-primary btn-sm"
              >
                <CiLogin />
                <span>Login</span>
              </NavLink>
            ) : (
              <form action={logout}>
                <button type="submit" className="flex items-center gap-2 btn btn-error btn-outline btn-sm">
                  <CiLogout />
                  <span>Logout</span>
                </button>
              </form>
            )}
          </div>

          {/* Pass login state to Mobile Menu */}
          <MobileMenu isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </div>
  );
}