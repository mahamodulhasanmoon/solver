import React from 'react';
import { useLocation } from 'react-router-dom';

const FilterInput = () => {

    const {pathname } = useLocation()

    const detailsInput = [
        {category:'askPending', name : 'Ask Pending'},
        {category:'askSolved', name : 'Ask Solved'},
        {category:'guestAsk', name : 'Guest Ask'},
        {category:'allAsk', name : 'All Ask'},
    ]
    const filterInput = [
        {category:'Language', name : 'Language'},
        {category:'Category', name : 'Category'},

    ]

    return (
        <div
        className="askForm bg-white p-4"
        style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex gap-2 justify-between">

            <h3 className="text-xl ">0 post found</h3>
            <form>
                <select name="category" id="category" className="outline-none border-0  border-deepShade">
                    
                    {
                        pathname === '/filter' &&  filterInput.map(({category,name},index)=>  <option key={index} value={category}>{name}</option> )
                        


                    }
                    {
                        pathname === '/dataDetails' &&  detailsInput.map(({category,name},index)=>  <option key={index} value={category}>{name}</option> )
                        


                    }

                    
                </select>
            </form>


        </div>
      </div>
    );
};

export default FilterInput;