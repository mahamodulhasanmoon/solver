import React from 'react';

import { CiHeart } from 'react-icons/ci';

const Comments = () => {
    return (
<div className='mb-5'>
<div className='bg-white borderCustom m-2 p-2'>
            <p className='text[15px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem deleniti facilis quod officia magnam reprehenderit voluptatum quae labore iusto! Possimus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolor aspernatur porro quia. Voluptatum totam, tenetur asperiores dolores eligendi natus!.</p>
        </div>
        <div className="grid grid-cols-3 justify-between px-3 text-primaryColor">
            <small>Profile</small>
            <small className='text-center'>Time</small>
            <div className='flex items-center justify-end gap-3 text-primaryColor'>
                <CiHeart size={15}/>
                <CiHeart  size={15}/>
                <small className=''>9 reply</small>
            </div>
        </div>
</div>
    );
};

export default Comments;