import React from "react";
import './Banner.css';
import { Link } from 'react-router-dom';


function Banner() {
     
  return <div>
    <div className="banner"> 
    <div className=" place-content-center pt-60 p-2">
    <h1 className="lg:text-6xl md:text-5xl text-3xl pl-36 capitalize font-black text-white xl:text-8xl bg-gradient-to-br from-pink-600 to-rose-400 bg-clip-text text-transparent">find your new adventure</h1>
     <div className="pl-28">
    <Link to="/search">
      <button className="bg-rose-600 text-white mx-96 p-3 rounded-lg">i'm flexible</button>
        </Link>
    </div>
   </div>
   </div>
  </div>;
}

export default Banner;
