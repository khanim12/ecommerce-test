import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

// Resimleri import ediyoruz
import FaGamepad from "../../assets/images/playstatuon.png";
import FaKeyboard from "../../assets/images/klavitura.png";
import tv from "../../assets/images/tv.png";
import chair from "../../assets/images/chair.png";

const imageMap = {
  FaGamepad,
  FaKeyboard,
  tv,
  chair,
};

function TProducts({ data }) {
  const [isHovered,setIsHovered]=useState(false)
  if (!data) {
    return <div></div>;
  }

  // Resim yolunu dinamik olarak alıyoruz
  const imageSrc = imageMap[data.icon];

  return (
    <div className="bg-white shadow rounded-lg mr-4 mb-4 pb-4 " >
      <div className="absolute top-5  text-xl 	" style={{marginLeft:"210px"}} >
        <FaRegHeart size={'35px'} className="rounded-3xl mb-2 bg-white p-2 "/>

        <LuEye size={'35px'} className="rounded-3xl mb-2 bg-white p-2 "/>
              </div>
      <img
        src={imageSrc}
        alt={data.name}
        className="w-full p-12 h-56 bg-cover bg-gray-200 mb-4 "   onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
      />
       {isHovered && (
        <div className="  absolute  bg-black  flex items-center justify-center text-white font-bold text-lg py-3" style={{bottom:'163px', width:'250px'}}>
          Add to Cart
        </div>
      )}
      <div className="mb-2">
        {
          data.discount && <span
          className="text-red-500 text-sm font-semibold relative  left-6 bg-[#db4444] text-white py-2 px-3 rounded font-thin "
          style={{ top: "-225px" }}
        >
          -{data.discount}%
        </span>
       } 
      </div>
      <h3 className="text-lg font-bold">{data.name}</h3>
      <div className="text-gray-500">
        <span className="text-red-500 mr-4">${data.price}</span>
        <span className="line-through">${data.originalPrice}</span>{" "}
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">
          {Array(Math.floor(data.rating)).fill("★").join("")}
        </span>
        <span className="ml-2 text-gray-600">({data.reviews})</span>
      </div>
    </div>
  );
}

export default TProducts;
