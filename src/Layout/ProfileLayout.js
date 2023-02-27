import React from 'react';
import { Outlet } from 'react-router-dom';
import Ranks from '../components/Ranks';
import Navbar from '../pages/shared/Navbar/Navbar';

const ProfileLayout = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <Navbar/>
        <Ranks/>
      <Outlet/>
    
            </div>
    );
};

export default ProfileLayout;