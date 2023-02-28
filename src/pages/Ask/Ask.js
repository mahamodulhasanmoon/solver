import React from "react";
import { Link } from "react-router-dom";
import Posts from "../../components/Posts";
import { BiSliderAlt } from "react-icons/bi";
import AskForm from "./AskForm";

const Ask = () => {
  const FormBtn = { name: "Filter", icons: "" };

  return (
    <div className="max-w-[600px] mx-auto  my-5">
      <div
        className="askForm bg-white p-3"
        style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex gap-2 ">
          {/* <input className='w-full rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-lg placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} /> */}

          <div className="w-full flex items-center rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-1  placeholder:pl-3 placeholder:text-lg  placeholder:text-textColor ">
            <Link to="/ask-your-problem" className="pl-4 ">
              Ask or share your problem
            </Link>
          </div>

          <Link
            to="/filter"
            className="text-xl p-2  bg-white  rounded-full  border border-deepShade"
          >
            <BiSliderAlt />
          </Link>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Ask;
