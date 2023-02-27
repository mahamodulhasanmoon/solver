import React from 'react';

const TaskCard = ({taskData}) => {
    const {status,count} = taskData
    return (
        <div className=' px-2 py-1 bg-bgColor'>
        <p className='  text-center text-textColor'>{status}</p>
        <p className='  text-center text-textColor'>{count}</p>

    </div>
    );
};

export default TaskCard;

