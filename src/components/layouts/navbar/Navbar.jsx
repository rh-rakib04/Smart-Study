import Logo from "../Logo";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";
import NavLink from "../../buttons/NavLink";
import ThemeToggle from "../../buttons/ThemeToggle";
import { CiLogin, CiLogout } from "react-icons/ci";
import { cookies } from "next/headers";
import { logout } from "@/actions/auth";

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("auth_token");

  return (
    /* FIX: Ensure 'sticky top-0' is on the outermost wrapper. 
       Added 'backdrop-blur' and 'bg-opacity' for the redesign feel.
    */
    <header className="sticky top-0 z-[100] w-full bg-base-100 backdrop-blur-md border-b border-base-300">
      <nav className="navbar max-w-7xl mx-auto px-4 min-h-[4rem]">
        {/* LEFT */}
        <div className="navbar-start">
          <Logo />
        </div>

        {/* CENTER (DESKTOP) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <NavItems isLoggedIn={isLoggedIn} />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          {/* Mobile Theme Toggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>

          {/* DESKTOP TOGGLE & LOGIN/LOGOUT */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            {!isLoggedIn ? (
              <NavLink
                href="/login"
                className="flex items-center gap-2 btn btn-primary btn-sm rounded-full px-6"
              >
                <CiLogin size={20} />
                <span>Login</span>
              </NavLink>
            ) : (
              <form action={logout}>
                <button 
                  type="submit" 
                  className="flex items-center gap-2 btn btn-error btn-outline btn-sm rounded-full"
                >
                  <CiLogout size={20} />
                  <span>Logout</span>
                </button>
              </form>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu isLoggedIn={isLoggedIn} />
        </div>
      </nav>
    </header>
  );
}