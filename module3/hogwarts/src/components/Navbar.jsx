import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "not-selected")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "selected" : "not-selected")}
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "selected" : "not-selected")}
      >
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;
