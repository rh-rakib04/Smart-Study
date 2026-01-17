import { IoHomeOutline } from "react-icons/io5";
import { LayoutGrid, PlusCircle } from "lucide-react";
import NavLink from "../../buttons/NavLink";

export default function NavItems({ onClick }) {
  return (
    <>
      <li onClick={onClick}>
        <NavLink href="/" className="flex items-center gap-2">
          <IoHomeOutline />
          <span>Home</span>
        </NavLink>
      </li>

      <li onClick={onClick}>
        <NavLink href="/tools" className="flex items-center gap-2">
          <LayoutGrid size={18} />
          <span>Tools</span>
        </NavLink>
      </li>

      <li onClick={onClick}>
        <NavLink href="/add-tool" className="flex items-center gap-2">
          <PlusCircle size={18} />
          <span>Add Tool</span>
        </NavLink>
      </li>
    </>
  );
}
