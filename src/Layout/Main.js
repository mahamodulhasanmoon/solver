import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';


const Main = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <Navbar/>
      <Outlet/>
            </div>
    );
};

export default Main;