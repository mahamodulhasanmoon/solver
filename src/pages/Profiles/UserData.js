import axios from "axios";
import React, { useEffect, useState } from "react";

import TaskCard from "../../components/TaskCard";

import UserNav from "../shared/Navbar/UserNav";

const UserData = () => {
  const [taskData, setTaskData] = useState([]);
  const [data, setData] = useState([]);



  

  useEffect(() => {
    axios
      .get("/fakedata/taskFakeData.json")
      .then((res) => setTaskData(res.data));
  }, []);

  //   load information of data section
  useEffect(() => {
    axios.get("/fakedata/dataFakeData.json").then((res) => setData(res.data));
  }, []);


 
  // 

  return (
    <div className="max-w-[560px] mx-auto bg-white   custom-shadow  mb-4  ">
      <div className="main-content w-[80%] mx-auto">
        {/* task section */}
        <UserNav />
        <div className="task mt-5 ">
          <h3 className=" text-lg font-bold mb-2">Task</h3>

          <div className="grid grid-cols-3 gap-2">
            {taskData.map((taskData) => (
              <TaskCard key={taskData._id} taskData={taskData} />
            ))}
          </div>

          {/* dataSection */}

          {/* task section */}
          <div className="my-6">
            <h3 className="text-lg font-bold mb-2">Data</h3>

            <div className="grid grid-cols-4 gap-2">
              {data.map((taskData) => (
                <TaskCard key={taskData._id} taskData={taskData} />
              ))}
            </div>
            {/* data part 2 */}
            {/* <div className="grid grid-cols-2 gap-5">
              {data2.map((taskData) => (
                <TaskCard2 key={taskData._id} taskData={taskData} />
              ))}
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
