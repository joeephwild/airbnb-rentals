import React from "react";

function Smallcard({ image, location, distance }) {
  return <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="h-20 w-20 flex">
      <img src={image} alt="" className="rounded-lg fill"/>
      </div>
     <div>
         <h2 className="font-bold text-xl">{location}</h2>
         <h3 className="text-gray-500">{distance}</h3>
     </div>
  </div>;
}

export default Smallcard;
