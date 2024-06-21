import React from "react";
import Slider from "react-slick";
import Countdown from "react-countdown";
import datass from "../../data/product.json";
import TProducts from "./TProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Same from "../Same";
function Today({ products }) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="p-8 border-b-2">
      <Same name={"Today's"} />
      <div className="flex gap-12 items-center mb-4">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
        <Countdown
          date={Date.now() + 10000000}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="text-2xl font-bold flex  space-x-2 gap-4 items-center">
              <div>
                <span className="text-xs	">Days</span>
                <div className="text-3xl font-bold	">{days}</div>
              </div>
              <div className="text-[#db4444] text-4xl ">:</div>
              <div>
                <span className="text-xs	">Hours</span>
                <div className="text-3xl font-bold	">{hours}</div>
              </div>
              <div className="text-[#db4444] text-4xl ">:</div>
              <div>
                <span className="text-xs	">Minutes</span>
                <div className="text-3xl font-bold	">{minutes}</div>
              </div>
              <div className="text-[#db4444] text-4xl ">:</div>
              <div>
                <span className="text-xs	">Seconds</span>
                <div className="text-3xl font-bold	">{seconds}</div>
              </div>
            </div>
          )}
        />{" "}
      </div>
     
      <Slider {...settings}>
      {products.map((data) => (
        <TProducts key={data.id} data={data} />
      ))}
    </Slider>      <div className="flex justify-center mt-4">
        <button className="bg-red-500 text-white py-2 px-4 rounded ">
          View All Products
        </button>
      </div>
    </div>
  );
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
      style={{ left: "950px" }}
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

export default Today;
