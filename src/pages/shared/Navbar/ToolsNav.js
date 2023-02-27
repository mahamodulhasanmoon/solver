import React from 'react';

import { NavLink } from 'react-router-dom';
import {  normalActiveToolsClassName,  normalToolsClassName, toolItems } from '../../../utils/navitems';

const ToolsNav = () => {
    return (
        <div className='border-bottom sticky top-[73px] z-30 bg-white'>
        <div className="flex items-center justify-around px-4 py-2">

          {
      toolItems.map((navItem, index) =>             <NavLink key={index}
      to={navItem.path}
      className={({isActive})=> isActive ? normalActiveToolsClassName : normalToolsClassName}
    >
      <navItem.icons />
    
    </NavLink>
      )
  }
  

        </div>
      </div>
    );
};

export default ToolsNav;