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
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Kevin's <sup>Portfolio</sup>
        </div>
      </a>

      <Divider noMargin />

      {mainModules.map((module) => (
        <NavItem href={module.url}>{module.name}</NavItem>
      ))}
    </ul>
  );
};

export default Sidebar;
