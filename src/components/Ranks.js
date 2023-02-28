import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import userPhoto from "../assets/images/tg.svg";



const Ranks = () => {



  return (
    <div className="max-w-[600px] mx-auto  mt-3">
      <div className="bg-white  shadow-md">
        <div className="flex justify-between items-center p-3 ">
          <div className="usersInfo flex items-center justify-center gap-2 ">
            <div className="profilePic bg-bgColor p-3 flex items-center justify-center">
              <img className="w-[40px] h-[40px] " src={userPhoto} alt="profile pic" />
            </div>
            {/* pfolile info */}
            <div className="profileInfo">
              <p className="text-textColor text-lg">Rank</p>
              <p className="text-textColor text-lg">Date</p>
            </div>
          </div>
          {/* points */}
          <div className="poients ">

            <div className="poients flex mr-10">
           <div className="w-[100px] h-[40px] bg-deepShade flex items-center justify-center rounded-tl rounded-bl">
            <span>Your point</span>
           </div>
           <div className="w-[100px] h-[40px] rounded-tr rounded-br border border-deepShade flex items-center justify-center">
            <span>0</span>
           </div>
            </div>
          </div> 
          
        </div> 

{/* nav Section */}
        <div className="userNav   py-3   ">
     
    
{/* <Info/> */}
{/* <UserData/> */}

   </div>

      </div>

    </div>
  );
};

export default Ranks;
