import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import jacket from "../../assets/images/jacket.png";
import bag from "../../assets/images/bag.png";
import mp3 from "../../assets/images/mp3.png";
import bookself from "../../assets/images/bookself.png";

const imageMap = {
  jacket,
  bag,
  mp3,
  bookself,
};

function Products({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!data) {
    return <div></div>;
  }
  const rating = data.rating ? Math.floor(data.rating) : 0;
  const stars = Array(rating).fill("★").join("");

  // Resim yolunu dinamik olarak alıyoruz
  const imageSrc = imageMap[data.icon];
  return (
    <div>
    <div className=" bg-white shadow rounded-lg mr-4 mb-4 pb-4 w-64 relative">
      <div
        className=" absolute top-5 text-xl"
        style={{ marginLeft: "210px" }}
      >
        <FaRegHeart size={"35px"} className="rounded-3xl mb-2 bg-white p-2 " />
        <LuEye size={"35px"} className="rounded-3xl mb-2 bg-white p-2 " />
      </div>
      <img
        src={imageSrc}
        alt={data.name}
        className="w-full p-12 h-56 bg-cover bg-gray-200 mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div
          className="absolute bg-black flex items-center justify-center text-white font-bold text-lg py-3"
          style={{ bottom: "163px", width: "250px" }}
        >
          Add to Cart
        </div>
      )}
      <h3 className="text-lg font-bold">{data.name}</h3>
      <div className="text-gray-500">
        <span className="text-red-500 mr-4">${data.price}</span>
        <span className="line-through">${data.originalPrice}</span>{" "}
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{stars}</span>
        <span className="ml-2 text-gray-600">({data.reviews})</span>
      </div>
      </div>
      </div>
  );
}

export default Products;
