import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import {MdOutlineApps, MdOutlineLightMode } from "react-icons/md";
import {RiTranslate2 } from "react-icons/ri";
import {BsChatLeft } from "react-icons/bs";
import {VscBell } from "react-icons/vsc";
import {IoSettingsOutline } from "react-icons/io5";

import { FiSearch, FiSettings,FiEdit2 } from "react-icons/fi";

export const navItems = [
{name: 'Ask',icons:AiOutlineQuestionCircle,path:'/ask'},
{name: 'Post',icons:FiEdit2,path:'/post-feed'},
{name: 'Find',icons:FiSearch,path:'/find'},
{name: 'You',icons:AiOutlineUser,path:'/users'},

]


// export css classs for main nevigations

export const activeClassName=" bg-primaryColor   p-2 md:px-3 md:py-1  rounded-full flex gap-2 items-center text-md  md:text-lg  leading-5 text-white m-2"
export const normalClassName="  p-1  md:px-3 md:py-2 rounded-full flex gap-2 items-center   text-lg  leading-5 text-primaryColor hover:bg-bgColor m-2 hover:bg-bgColor"
export const normalToolsClassName="hover:bg-bgColor  p-2  rounded-full flex gap-2 items-center   text-lg  leading-5 text-primaryColor m-2 "
export const normalActiveToolsClassName="  p-2  rounded-full flex gap-2 items-center   text-lg  leading-5 text-white bg-primaryColor m-2 "


// user nav Items

export const userNavItems = [
    // {name:'Ask',path:'/users/ask',},
    // {name:'Ans',path:'/users/ans'},
    // {name:'Save',path:'/users/save'},
    // {name:'Mate',path:'/users/mate'},
    {name:'Data',path:'/users/'},
    {name:'Info',path:'/users/info'},
]


export const userActiveClassName = 'text-lg text-primaryColor'

// user solveed navBar

export const userSolvedNavItems = [
    {name:'Ask',path:'/users/ask'},
    {name:'Solved',path:'/users/ans'},
 


]

export const toolItems = [
    {name: 'Ask',icons:MdOutlineApps,path:'/tools/ask'},
    {name: 'Find',icons: MdOutlineLightMode ,path:'/tools/mode'},
    {name: 'You',icons: RiTranslate2 ,path:'/tools/users'},
    {name: 'Bell',icons:VscBell ,path:'/tools/bells'},
    {name: 'Bell',icons:BsChatLeft,path:'/tools/bella'},
    {name: 'Bell',icons:IoSettingsOutline ,path:'/tools/settings'},
]

