import React from "react";
import Countdown from "react-countdown";
import klkn from '../../../assets/images/klkn.png'
function MusicExperience() {
  return (
    <div className="flex mt-12 bg-black items-start justify-around py-24 px-16">
      <div>
        <span className="text-[#00fe65] ">Categories</span>
        <h1 className="text-white my-8 text-5xl font-semibold	">
          Enhance Your Music Experience
        </h1>
        <Countdown
          date={Date.now() + 10000000}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="text-2xl font-bold flex  space-x-2 gap-4 items-center">
              <div className="bg-white text-black rounded-full flex flex-col items-center justify-center p-3">
                <div className="text-3xl font-bold	">{hours}</div>

                <span className="text-xs	">Hours</span>
              </div>
              <div className="bg-white text-black rounded-full flex flex-col items-center justify-center p-3">
                <div className="text-3xl font-bold	">{days}</div>

                <span className="text-xs	">Days</span>
              </div>

              <div className="bg-white text-black rounded-full flex flex-col items-center justify-center p-3">
                <div className="text-3xl font-bold	">{minutes}</div>

                <span className="text-xs	">Minutes</span>
              </div>
              <div className="bg-white text-black rounded-full flex flex-col items-center justify-center p-3">
                <div className="text-3xl font-bold	">{seconds}</div>

                <span className="text-xs	">Seconds</span>
              </div>
            </div>
          )}
        />
        <button className="bg-[#00fe65] text-white mt-8 py-3 px-8 rounded">Buy Now</button>
      </div>
      <div>
        <img src={klkn} alt="" />
      </div>
    </div>
  );
}

export default MusicExperience;
