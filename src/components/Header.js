import React, { useState } from "react";
import { FaAirbnb } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import  Avatar  from "@mui/material/Avatar";
import Search from "./Search";
import portrait from "../assests/portrait.jpg";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return <>
  <div className="bg-white sticky border-b-slate-500 border-4 border-bold w-full lg:justify-between z-auto items-center sm:justify-evenly  flex">
  <h1 className="font-bold text-5xl ml-5 flex text-rose-600">Airbnb <FaAirbnb/></h1>
  <div className="flex items-center m-5 space-x-4">
  <button onClick={() => setShowSearch(!showSearch)}className="bg-rose-500 text-white p-5 rounded-lg capitalize">{showSearch && <Search/>}pick date</button>
  <button className="bg-rose-500 text-white rounded-xl p-3 w-38">Become Host</button>
    <AiFillHeart className="fill-rose-500 h-6 object-contain"></AiFillHeart>
    <GrNotification className="fill-rose-500 h-6 object-contain"></GrNotification>
      <Avatar alt="person" src={portrait} />
    </div>
  </div>
   
    
  </>;
}

export default Header;
