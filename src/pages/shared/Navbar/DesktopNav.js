import React from "react";
import logo from "../../../assets/images/logo.svg";

import { MdOutlineApps } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  activeClassName,
  navItems,
  normalClassName,
} from "../../../utils/navitems";

const DesktopNav = () => {
  return (
    <div>
      <div className="flex items-center justify-around px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="ml-2  hidden md:block text-xl font-medium text-primaryColor">
            Solver
          </span>
        </div>
<div className="min-w-[560px]">
<div className=" flex justify-between">
          {navItems.map((navItem, index) => (
          <NavLink
              key={index}
              to={navItem.path}
              className={({ isActive }) =>
                isActive ? activeClassName : normalClassName
              }
            >
              <navItem.icons />
              <span className="hidden md:block">{navItem.name}</span>
            </NavLink>
          ))}
        </div>
</div>
        <div>
<div>
<NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <MdOutlineApps/> <span className="hidden md:block"> Tools</span>
          </NavLink>
</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
