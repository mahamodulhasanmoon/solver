import React from "react";
import logo from '../../../assets/images/logo.svg'
import { MdOutlineApps } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { activeClassName, navItems, normalClassName  } from "../../../utils/navitems";


const MobileNav = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-6" />
         
        </div>



        {
    navItems.map((navItem, index) =>             <NavLink key={index}
    to={navItem.path}
    className={({isActive})=> isActive ? activeClassName : normalClassName}
  >
    <navItem.icons />
    <span className="hidden md:block">{navItem.name}</span>
  </NavLink>
    )
}

  

        <div>
          <NavLink to="/tools"
           
           className={({isActive})=> isActive ? activeClassName : normalClassName}
          >
            <MdOutlineApps />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
