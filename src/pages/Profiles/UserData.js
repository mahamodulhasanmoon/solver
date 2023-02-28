import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="max-w-[600px] mx-auto bg-white   custom-shadow    ">
      <div className="main-content w-[80%] mx-auto">
        {/* task section */}
        <UserNav />
        <div className="task mt-5 ">
          <h3 className=" text-lg font-bold mb-2">Task</h3>

          <div className="grid grid-cols-3 gap-2">
            {taskData.map((taskData) => (
             <Link key={taskData._id} to='/dataDetails'> <TaskCard  taskData={taskData} /></Link>
            ))}
          </div>

          {/* dataSection */}

          {/* task section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Data</h3>

            <div className="grid grid-cols-4 gap-2 pb-12">
              {data.map((taskData) => (
                <TaskCard key={taskData._id} taskData={taskData} />
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
