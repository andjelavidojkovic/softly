import React from "react";
import "./Navbar.style.css";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/auctions">Auctions</CustomLink>
        <CustomLink to="/experiences">Experiences</CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default Navbar;
