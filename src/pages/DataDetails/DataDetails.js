import React from 'react';
import FilterInput from '../../components/FilterInput';
import Posts from '../../components/Posts';

const DataDetails = () => {
    return (
        <div className="max-w-[600px] mx-auto  my-5">
        <FilterInput/>
        <Posts/>
            </div>
    );
};

export default DataDetails;