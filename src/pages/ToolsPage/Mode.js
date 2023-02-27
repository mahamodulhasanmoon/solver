import React from "react";
import {CiDark, CiLight} from 'react-icons/ci'
import { MdHdrAuto } from "react-icons/md";

const Mode = () => {
  return (
    <div className="flex items-center justify-center py-10 mt-10">
      <div>


        <div className="buttons mt-10">
          <div>
            <button className="flex items-center gap-2  justify-center text-primaryColor  border rounded border-primaryColor w-[240px] h-[60px] mb-10 hover:bg-bgColor">
            <MdHdrAuto  size={25} /> Auto Mode
            </button>
          </div>

          <div>
            <button className="flex items-center justify-center gap-2  text-primaryColor  rounded border border-primaryColor w-[240px] h-[60px] mb-10 hover:bg-bgColor">
            <CiDark size={25}/>  Dark Mode
            </button>
          </div>

          <div>
            <button className="flex items-center justify-center gap-2  text-primaryColor bg-white rounded border border-primaryColor w-[240px] h-[60px] mb-10 hover:bg-bgColor">
            <CiLight size={25}/>  Light Mode
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mode;
