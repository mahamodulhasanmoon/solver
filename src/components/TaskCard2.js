import React from 'react';

const TaskCard2 = ({taskData}) => {
    const {status,count} = taskData
    return (
        <div className=' p-2'>
        <p className='bg-bgColor px-2 text-center text-textColor'>{status}</p>
      <div className="grid grid-cols-2 gap-3">
      <p className='bg-bgColor px-2 text-center text-textColor'>{count}</p>
      <p className='bg-bgColor px-2 text-center text-textColor'>{count}</p>
      </div>

    </div>
    );
};

export default TaskCard2;