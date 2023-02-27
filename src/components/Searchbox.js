import React from 'react';

const Searchbox = ({FormBtn,FormInputData}) => {
    
    return (
           

            <div className="askForm bg-white p-6   shadow-md">

                <form  className='flex gap-5'>
                    <input className='w-full rounded-full  p-2 border border-primaryColor placeholder:pl-3 placeholder:text-xl' type="text" placeholder={FormInputData.inputPlaceholder} />
                    <button className='text-xl px-5 '>{FormBtn.name}</button>
                </form>

            </div>

    );
};

export default Searchbox;