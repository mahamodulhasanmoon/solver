import React from "react";
import Comments from "../../../components/Comments";
import PostDetails from "./PostDetails";

import ShowCaseFooter from "./ShowCaseFooter";
import ShowcaseHeader from "./ShowcaseHeader";

const ShowcaseLayout = () => {
  return (
    <div className="bg-white relative h-[80vh] w-[560px] mx-auto custom-shadow overflow-scroll">
      <div className="min-h-[70vh]">
         <ShowcaseHeader /> 
        <PostDetails />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
      <ShowCaseFooter />
    </div>
  );
};

export default ShowcaseLayout;
