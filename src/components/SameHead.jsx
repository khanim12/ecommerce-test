import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cslider from "./home/categories/Cslider";

function SameHead({ name }) {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    
  return (
    <div>
       <div className="flex gap-12 items-center mb-4">
              <h2 className="text-3xl font-bold">{ name}</h2>
      
      </div>
      <Slider {...settings}>
      <Cslider />
      </Slider>
    </div>
  )
}
const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white border rounded-full p-2 cursor-pointer shadow-md -top-12"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border rounded-full p-2 cursor-pointer shadow-md -top-12 "
        onClick={onClick}
        style={{ left: "990px" }}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </div>
    );
  };

export default SameHead
