import React from 'react';
import { Outlet } from 'react-router-dom';
import Ranks from '../components/Ranks';

const DataLayout = () => {
    return (
        <div>
            <Ranks/>
            <Outlet/>
        </div>
    );
};

export default DataLayout;