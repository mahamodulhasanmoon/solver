import React from 'react';
import { Outlet } from 'react-router-dom';
import VliferNav from '../pages/shared/Navbar/VliferNav';

const AuthenticationLayout = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <VliferNav/>

    
        <Outlet/>
     
     
            </div>
    );
};

export default AuthenticationLayout;