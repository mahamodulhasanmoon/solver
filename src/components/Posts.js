import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Posts = () => {
  const [footerLinks,setFooterLInks] = useState([])

  const {pathname} = useLocation()

 

  const askLinks = [
    {element :'Asker'},
    {element :'Time'},
    {element :'Answer'},
  ]
  const postLinks = [
    {element :'Creator'},
    {element :'Heart'},
    {element :'Comment'},
  ]
  const dataDetails = [
    {element :'Solved'},
    {element :'Time'},
    {element :'Answer'},
  ]

  // drop down dynamic menu

  

  useEffect(()=>{
   

    if (pathname === '/create-post') {
     setFooterLInks(postLinks)
    }
    
    if(pathname === '/ask'){
      setFooterLInks(askLinks)
    }
    if(pathname === '/dataDetails'){
      setFooterLInks(dataDetails)
    }
  },[pathname])




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
            className="relative cursor-pointer hover:bg-bgColor rounded-full p-1"
          >
            {" "}
            <BsThreeDots  className="text-darkShade" size={22} />
            {/* popup box */}
            <div
              style={{ display: click ? "block" : "none" }}
              className="popupMenu  bg-white absolute rounded right-5 top-8 p-5 shadow-md border border-deepShade w-48"
            >
              {
                pathname !== '/dataDetails' &&
                <ul>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Save
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 />
                    Request
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Profile 
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Report
                  </Link>
                </li>
              </ul>
              }
              {/* if equel */}
              {
                pathname === '/dataDetails' &&
                <ul>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 /> Edit
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="flex items-center gap-4 cursor-pointer">
                    {" "}
                    <FiEdit2 />
                    Solved
                  </Link>
                </li>

              </ul>
              }
            </div>
          </div>
          <div className={`hover:bg-bgColor rounded-full p-1 ${pathname === "/dataDetails" ? "hidden" : "flex" } ` }>
            {" "}
            <RxCross2 className="text-darkShade" size={22} />
          </div>
        </div>
      </div>

      <p className="text-lg text-justify   px-3 py-1">
        <span className="heading text-textColor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          voluptas?
        </span>
        <span className="paragraph text-darkShade text-lg">
          Lorem ipsum dolor sit amet consectetur eliti.   Quos, soluta soluta  Quos  Quos, soluta  Quos, soluta  Quos, soluta, soluta...{" "}
        </span>
       { 
       pathname === '/ask' ?
       
       <Link to={`/ask/posts/id`} className="text-primaryColor"> more</Link>

       :
       <Link to={`/posts/id`} className="text-primaryColor"> more</Link>
       
       }
      </p>

      <div className="footer flex justify-around items-center mt-1 userNav  p-2 ">


        {
          footerLinks.map((linkPath,index )=> <span key={index} className="text-lg">{linkPath.element}</span> )
        }
        
        {/* <span className="text-lg">Heart </span>
        <span className="text-lg">Comment</span> */}
      </div>
    </div>
  );
};

export default Posts;
