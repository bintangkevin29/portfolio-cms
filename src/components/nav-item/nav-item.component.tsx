import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  href: string;
  children: ReactNode;
}
const NavItem: React.FC<Props> = ({ href, children }) => {
  const { pathname } = useLocation();
  return (
    <li className={`nav-item ${pathname === href ? "active" : ""}`}>
      <Link className="nav-link" to={href}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default NavItem;
