import React from "react";
import { BiSliderAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Posts from "../../components/Posts";

const PostsPage = () => {
  return (
    <div className="max-w-[600px] mx-auto bg-green-400 my-5">
      <div
        className="askForm bg-white p-3"
        style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex gap-2 ">
          {/* <input className='w-full rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-lg placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} /> */}

          <div className="w-full flex items-center rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-1  placeholder:pl-3 placeholder:text-lg bg-bgColor placeholder:text-textColor ">
            <Link to='/create-post' className="pl-4 ">Post what in your mind</Link>
          </div>

          <button className="text-xl p-2  bg-white  rounded-full  border border-deepShade">
            <BiSliderAlt />
          </button>
        </div>
      </div>

      <Posts/>
     


    </div>
  );
};

export default PostsPage;
