import React from "react";


function Card({ src, title, description, price }) {
  return <div>
    <div className="hover:scale-105 transition transform duration-200 ease-out relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
    <img src={src} alt="" className="object-cover w-full h-48"/>
    <div className="absolute top-0 left-0 px-6 py-4">
    <h2 className="font-bold text-xl subpixel-antialiased text-white">{title}</h2>
          <h4 className="font-bold text-xl subpixel-antialiased text-white">{description}</h4>
          <h3 className="font-bold text-sm subpixel-antialiased text-white">{price}</h3>
      </div>
    </div>
    
  </div>;
}

export default Card;

