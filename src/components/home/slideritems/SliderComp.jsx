import React from "react";
import Slider from "react-slick";
import { ImAppleinc } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import ipone from '../../../assets/images/ipone.png'

import indir from '../../../assets/images/indir.jpeg'
import indir2 from  '../../../assets/images/indir (2).jpeg'

function SliderComp() {
  const settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-8/12 bg-black	text-white pt-4		" >
      <Slider {...settings}>
        <div className="!flex justify-between ml-8 items-center " >
          <div >
            <div className="flex items-center gap-8 mb-8">
            <ImAppleinc size={64} />
              <span className="text-base">iPhone 14 Series</span>
              </div>
            <h1 className="text-6xl  font-semibold	tracking-wide mb-8">Up to 10% off Voucher</h1>
            <div className="flex items-center gap-2  ">
            <a className="border-b pb-1  " href="">Shop Now</a>
              <FaArrowRight />
              </div>
          </div>
           <img src={ipone} alt="" />
        </div>
        <div className="!flex justify-between ml-8 items-center px-4 " >
          <div >
            <div className="flex items-center gap-8 mb-8">
            <ImAppleinc size={64} />
              <span className="text-base">iPhone 14 Series</span>
              </div>
            <h1 className="text-6xl  font-semibold	tracking-wide mb-8">Up to 10% off Voucher</h1>
            <div className="flex items-center gap-2  ">
            <a className="border-b pb-1  " href="">Shop Now</a>
              <FaArrowRight />
              </div>
          </div>
           <img src={indir} className="mr-8 " alt="" />
        </div>
        <div className="!flex justify-between ml-8 items-center " >
          <div >
            <div className="flex items-center gap-8 mb-8">
            <ImAppleinc size={64} />
              <span className="text-base">iPhone 14 Series</span>
              </div>
            <h1 className="text-6xl  font-semibold	tracking-wide mb-8">Up to 10% off Voucher</h1>
            <div className="flex items-center gap-2  ">
            <a className="border-b pb-1  " href="">Shop Now</a>
              <FaArrowRight />
              </div>
          </div>
           <img src={indir2} className="mr-12  "  alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
