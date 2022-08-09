import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.style.scss';

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default CustomLink;
