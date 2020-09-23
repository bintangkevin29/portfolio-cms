import React from "react";

import { mainModules } from "../../constants/modules";

import NavItem from "../nav-item";

const Divider: React.FC<{ noMargin?: boolean }> = ({ noMargin = false }) => (
  <hr className={`sidebar-divider ${noMargin && "my-0"}`}></hr>
);

const Sidebar: React.FC = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Kevin's <sup>Portfolio</sup>
        </div>
      </div>

      <Divider noMargin />

      {mainModules.map((module, i) => (
        <NavItem key={i} href={module.url}>
          {module.name}
        </NavItem>
      ))}
    </ul>
  );
};

export default Sidebar;
