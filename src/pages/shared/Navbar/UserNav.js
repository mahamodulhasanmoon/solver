import React from 'react';
import { NavLink } from 'react-router-dom';
import { userActiveClassName, userNavItems } from '../../../utils/navitems';

const UserNav = () => {
    return (
        <div className='flex justify-around'>
           

{
    userNavItems.map((userNavItem,index)=> <NavLink key={index} to={userNavItem.path} className={({isActive})=> isActive ? userActiveClassName : 'text-lg text-textColor' }  >{userNavItem.name}</NavLink> )
    
}
        </div>
    );
};

export default UserNav;