import React from "react";
import { Link, NavLink } from "react-router-dom";
import { userSolvedNavItems } from "../../../utils/navitems";

const UserSolvedNav = () => {
  return (
    <div className="flex justify-between px-12">
      <div>
        <p> 000000</p>
      </div>
      <div>
      {
            userSolvedNavItems.map((nav,index)=> <NavLink to={nav.path} className={({isActive})=> isActive ? 'text-lg text-primaryColor ml-20' : 'text-lg text-textColor ml-20'}  key={index} >{nav.name}</NavLink>)
      }
      </div>

    </div>
  );
};

export default UserSolvedNav;
