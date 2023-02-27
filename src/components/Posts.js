import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Posts = () => {
  const [click, setClick] = useState(false);

  return (
    <div
      className="askForm bg-white mt-5"
      style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="header flex justify-between px-3 pt-2 ">
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

      <p className="text-lg text-justify   px-3 py-1">
        <span className="heading text-textColor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          voluptas?
        </span>
        <span className="paragraph text-darkShade text-lg">
          Lorem ipsum dolor sit amet consectetur elit. Quos, soluta ...{" "}
        </span>
        <button className="text-primaryColor"> more</button>
      </p>

      <div className="footer flex justify-around items-center mt-1 userNav  p-2 ">
        <span className="text-xl">Asker</span>
        <span className="text-xl">Time</span>
        <span className="text-xl">Solver</span>
      </div>
    </div>
  );
};

export default Posts;
