import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {BiSliderAlt} from 'react-icons/bi'
import Posts from '../../components/Posts';
const FormBtn = {name:'Filter',icons:FiSearch }
const FormInputData  = {inputPlaceholder:'Search what you want'}

const Find = () => {
    const [focused,setFocused]= useState(false)
    
    return (
        <div className='max-w-[600px] mx-auto bg-green-400 my-5'>
            
            <div className="askForm bg-white p-3   custom-shadow">

                <form  className='flex gap-2'>
                    <input
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    
                    className="w-full flex items-center rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-1  placeholder:pl-3 placeholder:text-lg bg-bgColor placeholder:text-textColor focus:placeholder:text-darkShade focus:bg-white focus:outline-none" type="text" placeholder={FormInputData.inputPlaceholder} />

                    {

focused ? <button className="text-xl p-2  bg-primaryColor  rounded-full  border border-deepShade"><FiSearch  className='text-white' /></button>
:
<button className="text-xl p-2  bg-white  rounded-full  border border-deepShade"><BiSliderAlt/></button>

                    }
                    
                </form>
              

            </div>

            <Posts/>


        </div>
    );
};

export default Find;