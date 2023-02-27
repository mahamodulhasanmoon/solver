import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ShowcaseHeader = () => {
    const [click,setClick]= useState(false)
    return (
        <div className="header sticky top-0 z-50 bg-white flex justify-between px-3 py-2 border-b border-b-darkShade ">
        <h2 className="text-darkShade">Category Name</h2>
        <div className="flex gap-3">
          {" "}
          <div
            onClick={() => setClick((state) => !state)}
            className="relative cursor-pointer"
          >
            {" "}
            <BsThreeDots size={22} />
            {/* popup box */}
            <div
              style={{ display: click ? "block" : "none" }}
              className="popupMenu  bg-[#F0F7FF] absolute right-5 top-8 p-5 shadow-md border border-deepShade w-48"
            >
              <ul>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Mate request
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 />
                    Asker Profile
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Report
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Save ask
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {" "}
            <RxCross2 size={22} />
          </div>
        </div>
      </div>
    );
};

export default ShowcaseHeader;