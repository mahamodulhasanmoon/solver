import React from 'react';

const Settings = () => {
    return (
        <div className='flex items-center justify-center py-10'>
            <div>
                <div className="profile flex items-center justify-center ">
                    <img className='w-[150px] h-[150px] rounded-full borderCustom ' src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg" alt="" />
                </div>

<div className="buttons mt-10">
   <div>
   <button className='text-primaryColor border rounded border-primaryColor w-[300px] h-[50px] mb-10'>change Password</button>
   </div>

   <div>
   <button className='text-primaryColor rounded border border-primaryColor w-[300px] h-[50px] mb-10'>Device Activity</button>
   </div>

   <div className='text-center'>
   <button className='text-bgColor bg-primaryColor rounded border inline-block border-primaryColor px-4 py-2  mb-10'>Logout</button>
   </div>

</div>

            </div>
        </div>
    );
};

export default Settings;