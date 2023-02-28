import React from "react";
import { Link } from "react-router-dom";
import { GrAttachment } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

const ShowCaseFooter = () => {
  return (
    <div className="footer mt-auto flex justify-between px-3 pt-4  custom-shadow2 sticky bottom-0 z-50 bg-white  w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-10">
          <GrAttachment />
          <h3 className="text-2xl">B</h3>
        </div>
        <div className="items-center flex gap-10">
          <div className="flex gap-2">
            <FaUserFriends />
            <AiOutlineDown></AiOutlineDown>
          </div>
          <button className="text-bgColor bg-primaryColor rounded border inline-block border-primaryColor px-4 py-1">
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseFooter;
